"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData): Promise<{ error?: string } | void> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect("/cms-admin/login");



  // Resolve author — allow ADMIN to assign any user; default to self
  const me = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!me) redirect("/cms-admin/login");

  const requestedAuthorId = formData.get("authorId") as string;
  const authorId =
    requestedAuthorId && session.user.role === "ADMIN" ? requestedAuthorId : me.id;

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const excerpt = (formData.get("excerpt") as string) || null;
  const coverImage = (formData.get("coverImage") as string) || null;
  const thumbnailImage = (formData.get("thumbnailImage") as string) || null;
  let status = (formData.get("status") as string) || "DRAFT";
  if (session.user.role === "AUTHOR" && status !== "REVIEW") {
    status = "DRAFT"; // Authors can only do DRAFT or REVIEW
  }
  const publishedAtStr = formData.get("publishedAt") as string;
  const publishedAt = publishedAtStr ? new Date(publishedAtStr) : null;

  // Validation
  if (!title?.trim()) return { error: "Title is required" };
  if (!content?.trim()) return { error: "Content is required" };

  let slug = (formData.get("slug") as string)?.trim();
  if (!slug) {
    slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }

  // Auto-set publishedAt when publishing
  const resolvedPublishedAt =
    status === "PUBLISHED" && !publishedAt ? new Date() : publishedAt;

  // Tags — upsert by slug per tenant
  const tagsRaw = (formData.get("tags") as string) || "";
  const tagNames = tagsRaw
    .split(",")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length > 0);

  const tagRecords = await Promise.all(
    tagNames.map((name: string) => {
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
      return prisma.tag.upsert({
        where: { slug },
        update: {},
        create: { name, slug },
      });
    })
  );

  try {
    await prisma.post.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        coverImage,
        thumbnailImage,
        status,
        publishedAt: resolvedPublishedAt,
        authorId,
        tags: { connect: tagRecords.map((t: { id: string }) => ({ id: t.id })) },
      },
    });
  } catch (error: any) {
    console.error("[createPost]", error);
    if (error?.code === "P2002") {
      return { error: "Slug is already taken. Please choose another title or slug." };
    }
    if (error?.code === "P2000") {
      const column = error.meta?.column_name ? String(error.meta.column_name) : "one of the fields";
      return { error: `The text entered for ${column} is too long. Please shorten it.` };
    }
    return { error: "An unexpected error occurred while saving the post. Please try again." };
  }

  revalidatePath("/cms-admin/dashboard/posts");
  redirect("/cms-admin/dashboard/posts");
}

export async function updatePost(id: string, formData: FormData): Promise<{ error?: string } | void> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect("/cms-admin/login");

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const excerpt = (formData.get("excerpt") as string) || null;
  const coverImage = (formData.get("coverImage") as string) || null;
  const thumbnailImage = (formData.get("thumbnailImage") as string) || null;
  const slug = formData.get("slug") as string;
  let status = (formData.get("status") as string) || "DRAFT";
  if (session.user.role === "AUTHOR" && status !== "REVIEW") {
    status = "DRAFT";
  }
  const publishedAtStr = formData.get("publishedAt") as string;
  const publishedAt = publishedAtStr ? new Date(publishedAtStr) : null;

  const requestedAuthorId = formData.get("authorId") as string;

  // Validation
  if (!title?.trim()) return { error: "Title is required" };
  if (!content?.trim()) return { error: "Content is required" };

  const existingPost = await prisma.post.findUnique({
    where: { id },
    select: { deletedAt: true, authorId: true }
  });
  if (!existingPost || existingPost.deletedAt !== null) return { error: "Post not found" };

  if (session.user.role === "AUTHOR" && existingPost.authorId !== session.user.id) {
    return { error: "Unauthorized to edit this post" };
  }

  // Auto-set publishedAt when publishing
  const resolvedPublishedAt =
    status === "PUBLISHED" && !publishedAt ? new Date() : publishedAt;

  const updateData: Record<string, unknown> = {
    title,
    slug,
    content,
    excerpt,
    coverImage,
    thumbnailImage,
    status,
    publishedAt: resolvedPublishedAt,
  };

  // Allow re-assigning author only for admins
  if (requestedAuthorId && session.user.role === "ADMIN") {
    updateData.authorId = requestedAuthorId;
  }

  // Tags
  const tagsRaw = (formData.get("tags") as string) || "";
  const tagNames = tagsRaw.split(",").map((t: string) => t.trim()).filter((t: string) => t.length > 0);

  let tagConnect: { id: string }[] = [];
  if (tagNames.length > 0) {
    // We already verified the post exists and is not deleted
    const tagRecords = await Promise.all(
      tagNames.map((name: string) => {
        const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
        return prisma.tag.upsert({
          where: { slug },
          update: {},
          create: { name, slug },
        });
      })
    );
    tagConnect = tagRecords.map((t: { id: string }) => ({ id: t.id }));
  }



  try {
    await prisma.post.update({
      where: { id },
      data: {
        ...updateData,
        // Always set tags — even empty array disconnects stale tags (P9 fix)
        tags: { set: tagConnect },
      },
    });
  } catch (error: any) {
    console.error("[updatePost]", error);
    if (error?.code === "P2002") {
      return { error: "Slug is already taken. Please choose another title or slug." };
    }
    if (error?.code === "P2000") {
      const column = error.meta?.column_name ? String(error.meta.column_name) : "one of the fields";
      return { error: `The text entered for ${column} is too long. Please shorten it.` };
    }
    return { error: "An unexpected error occurred while updating the post. Please try again." };
  }

  revalidatePath("/cms-admin/dashboard/posts");
  revalidatePath(`/cms-admin/dashboard/posts/${id}`);
  redirect("/cms-admin/dashboard/posts");
}

export async function deletePost(id: string): Promise<void> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect("/cms-admin/login");

  const existingPost = await prisma.post.findUnique({
    where: { id },
    select: { deletedAt: true, authorId: true }
  });
  if (!existingPost || existingPost.deletedAt !== null) redirect("/cms-admin/dashboard/posts?error=not_found");

  if (session.user.role === "AUTHOR" && existingPost.authorId !== session.user.id) {
    redirect("/cms-admin/dashboard/posts?error=unauthorized");
  }

  await prisma.post.update({
    where: { id },
    data: { deletedAt: new Date() }
  });
  revalidatePath("/cms-admin/dashboard/posts");
}
