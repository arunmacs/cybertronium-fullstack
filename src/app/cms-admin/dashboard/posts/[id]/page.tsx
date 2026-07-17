import { updatePost } from "@/app/actions/post-actions";
import { getAllUsers } from "@/app/actions/user-actions";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MarkdownEditor } from "@/components/ui/markdown-editor";
import { SlugInput } from "@/components/ui/slug-input";
import { ImageInputWithUpload } from "@/components/ui/image-input-with-upload";
import { TagInput } from "@/components/ui/tag-input";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { redirect, notFound } from "next/navigation";
import { FormattedDate } from "@/components/ui/formatted-date";
import { ClientForm } from "@/components/ui/client-form";

const selectClass =
  "flex h-9 w-full rounded-md border border-slate-200 bg-white px-3 py-1 text-sm dark:border-slate-800 dark:bg-slate-950";

export default async function EditPostPage(props: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/cms-admin/login");

  const { id } = await props.params;
  const [post, authors] = await Promise.all([
    prisma.post.findUnique({
      where: { id },
      include: {
        author: true,
        tags: { select: { id: true, name: true } },
      },
    }),
    getAllUsers(),
  ]);

  if (!post) notFound();

  if (session.user.role === "AUTHOR" && post.authorId !== session.user.id) {
    redirect("/cms-admin/dashboard/posts");
  }

  const updateAction = updatePost.bind(null, post.id);
  const publishedAtValue = post.publishedAt
    ? new Date(post.publishedAt.getTime() - post.publishedAt.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 16)
    : "";

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      <div className="flex items-center gap-3">
        <Link href="/cms-admin/dashboard/posts">
          <Button variant="outline" size="sm" className="h-8 px-2.5 text-xs gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </Button>
        </Link>
        <div className="min-w-0">
          <h1 className="text-2xl font-bold tracking-tight">Edit Post</h1>
          <p className="text-xs text-slate-500">{post.title}</p>
        </div>
      </div>

      <Card>
        <CardContent className="pt-5">
          <ClientForm action={updateAction} className="space-y-4">
            {/* Post ID */}
            <div className="space-y-1">
              <Label htmlFor="postId" className="text-xs">Post ID</Label>
              <Input id="postId" defaultValue={post.id} readOnly className="h-9 text-sm bg-slate-50 text-slate-500 cursor-default dark:bg-slate-900 dark:text-slate-400" />
            </div>

            {/* Title */}
            <div className="space-y-1">
              <Label htmlFor="title" className="text-xs">Title *</Label>
              <Input id="title" name="title" defaultValue={post.title} required className="h-9 text-sm" />
            </div>

            {/* Row 1: slug, status */}
            <div className="grid gap-4 sm:grid-cols-2">
              <SlugInput sourceId="title" initialValue={post.slug} />
              <div className="space-y-1">
                <Label htmlFor="status" className="text-xs">Status</Label>
                {session.user.role === "AUTHOR" ? (
                  <select id="status" name="status" defaultValue={post.status} className={selectClass}>
                    <option value="DRAFT">Draft</option>
                    <option value="REVIEW">Ready for Review</option>
                  </select>
                ) : (
                  <select id="status" name="status" defaultValue={post.status} className={selectClass}>
                    <option value="DRAFT">Draft</option>
                    <option value="REVIEW">Ready for Review</option>
                    <option value="PUBLISHED">Published</option>
                  </select>
                )}
              </div>
            </div>

            {/* Row 2: author, publishedAt */}
            <div className="grid gap-4 sm:grid-cols-2">
              {session.user.role === "ADMIN" ? (
                <div className="space-y-1">
                  <Label htmlFor="authorId" className="text-xs">Author</Label>
                  <select id="authorId" name="authorId" defaultValue={post.authorId} className={selectClass}>
                    {authors.map((u: any) => (
                      <option key={u.id} value={u.id}>{u.name || u.email}</option>
                    ))}
                  </select>
                </div>
              ) : (
                <input type="hidden" name="authorId" value={post.authorId} />
              )}
              <div className="space-y-1">
                <Label htmlFor="publishedAt" className="text-xs">Publish Date</Label>
                <Input id="publishedAt" name="publishedAt" type="datetime-local" defaultValue={publishedAtValue} className="h-9 text-sm" />
              </div>
            </div>

            {/* Images: cover (detail page) + thumbnail (list page) */}
            <div className="grid gap-4 sm:grid-cols-2">
              <ImageInputWithUpload
                name="thumbnailImage"
                label="Thumbnail Image"
                defaultUrl={post.thumbnailImage || ""}
                placeholder="https://example.com/thumb.jpg"
                description="Shown in post listings"
              />
              <ImageInputWithUpload
                name="coverImage"
                label="Cover Image"
                defaultUrl={post.coverImage || ""}
                placeholder="https://example.com/cover.jpg"
                description="Shown on the post detail page"
              />
            </div>

            {/* Tags */}
            <div className="space-y-1">
              <Label htmlFor="tags" className="text-xs">
                Tags
                <span className="text-slate-400 ml-1">(press Enter to add)</span>
              </Label>
              <TagInput
                name="tags"
                defaultValue={post.tags.map((t: any) => t.name).join(", ")}
                placeholder="react, nextjs, web"
              />
            </div>

            {/* Excerpt */}
            <div className="space-y-1">
              <Label htmlFor="excerpt" className="text-xs">Excerpt</Label>
              <textarea
                id="excerpt"
                name="excerpt"
                defaultValue={post.excerpt || ""}
                rows={2}
                className="flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-950"
              />
            </div>

            {/* Editor */}
            <div className="space-y-1">
              <Label className="text-xs">Content *</Label>
              <MarkdownEditor name="content" initialValue={post.content} />
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="text-[11px] text-slate-400">Updated <FormattedDate date={post.updatedAt} /></p>
              <div className="flex gap-2">
                <Link href="/cms-admin/dashboard/posts">
                  <Button variant="ghost" type="button" size="sm">Cancel</Button>
                </Link>
                <Button type="submit" size="sm">Update Post</Button>
              </div>
            </div>
          </ClientForm>
        </CardContent>
      </Card>
    </div>
  );
}
