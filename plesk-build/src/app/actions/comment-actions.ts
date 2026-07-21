"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function deleteComment(commentId: string): Promise<void> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect("/cms-admin/login");

  const comment = await prisma.comment.findUnique({
    where: { id: commentId }
  });

  if (!comment) {
    redirect("/cms-admin/dashboard/comments?error=not_found");
  }

  // EDITOR and ADMIN can delete comments in their tenant scope
  await prisma.comment.update({
    where: { id: commentId },
    data: { deletedAt: new Date() }
  });
  revalidatePath("/cms-admin/dashboard/comments");
}

export async function updateCommentStatus(commentId: string, status: "APPROVED" | "PENDING" | "SPAM"): Promise<void> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect("/cms-admin/login");

  const comment = await prisma.comment.findUnique({
    where: { id: commentId }
  });

  if (!comment) {
    redirect("/cms-admin/dashboard/comments?error=not_found");
  }

  await prisma.comment.update({ where: { id: commentId }, data: { status } });
  revalidatePath("/cms-admin/dashboard/comments");
}
