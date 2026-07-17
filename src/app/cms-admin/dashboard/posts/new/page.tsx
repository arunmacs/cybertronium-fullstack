import { createPost } from "@/app/actions/post-actions";

import { getAllUsers } from "@/app/actions/user-actions";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
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
import { ClientForm } from "@/components/ui/client-form";

const selectClass =
  "flex h-9 w-full rounded-md border border-slate-200 bg-white px-3 py-1 text-sm dark:border-slate-800 dark:bg-slate-950";

export default async function NewPostPage() {
  const session = await getServerSession(authOptions);
  const authors = await getAllUsers();

  return (
    <div className="space-y-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-3">
        <Link href="/cms-admin/dashboard/posts">
          <Button variant="outline" size="sm" className="h-8 px-2.5 text-xs gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">New Post</h1>
          <p className="text-sm text-slate-500 mt-1">Creating a new post</p>
        </div>
      </div>

      <Card>
        <CardContent className="pt-5">
          <ClientForm action={createPost} className="space-y-4">
            {/* Title */}
            <div className="space-y-1">
              <Label htmlFor="title" className="text-xs">Title *</Label>
              <Input id="title" name="title" required placeholder="My Awesome Blog Post" className="h-9 text-sm" />
            </div>

            {/* Row 1: slug, status */}
            <div className="grid gap-4 sm:grid-cols-2">
              <SlugInput sourceId="title" />
              <div className="space-y-1">
                <Label htmlFor="status" className="text-xs">Status</Label>
                {session?.user?.role === "AUTHOR" ? (
                  <select id="status" name="status" className={selectClass}>
                    <option value="DRAFT">Draft</option>
                    <option value="REVIEW">Ready for Review</option>
                  </select>
                ) : (
                  <select id="status" name="status" className={selectClass}>
                    <option value="DRAFT">Draft</option>
                    <option value="REVIEW">Ready for Review</option>
                    <option value="PUBLISHED">Published</option>
                  </select>
                )}
              </div>
            </div>

            {/* Row 2: author, publishedAt */}
            <div className="grid gap-4 sm:grid-cols-2">
              {session?.user?.role === "ADMIN" ? (
                <div className="space-y-1">
                  <Label htmlFor="authorId" className="text-xs">Author</Label>
                  <select id="authorId" name="authorId" className={selectClass}>
                    <option value="">— Me (default) —</option>
                    {authors.map((u: any) => (
                      <option key={u.id} value={u.id}>{u.name || u.email}</option>
                    ))}
                  </select>
                </div>
              ) : null}
              <div className="space-y-1">
                <Label htmlFor="publishedAt" className="text-xs">Publish Date</Label>
                <Input id="publishedAt" name="publishedAt" type="datetime-local" className="h-9 text-sm" />
              </div>
            </div>

            {/* Images: cover (detail page) + thumbnail (list page) */}
            <div className="grid gap-4 sm:grid-cols-2">
              <ImageInputWithUpload 
                name="coverImage"
                label="Cover Image"
                placeholder="https://example.com/cover.jpg"
                description="Shown on the post detail page"
              />
              <ImageInputWithUpload 
                name="thumbnailImage"
                label="Thumbnail Image"
                placeholder="https://example.com/thumb.jpg"
                description="Shown in post listings"
              />
            </div>

            {/* Tags */}
            <div className="space-y-1">
              <Label htmlFor="tags" className="text-xs">
                Tags
                <span className="text-slate-400 ml-1">(press Enter to add)</span>
              </Label>
              <TagInput name="tags" placeholder="react, nextjs, web" />
            </div>

            {/* Excerpt */}
            <div className="space-y-1">
              <Label htmlFor="excerpt" className="text-xs">Excerpt</Label>
              <textarea
                id="excerpt"
                name="excerpt"
                rows={6}
                className="flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-950"
                placeholder="A short summary displayed in listings...!"
              />
            </div>

            {/* Editor */}
            <div className="space-y-1">
              <Label className="text-xs">Content *</Label>
              <MarkdownEditor name="content" placeholder="Write your post here (Markdown supported)..." />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Link href="/cms-admin/dashboard/posts">
                <Button variant="ghost" type="button" size="sm">Cancel</Button>
              </Link>
              <Button type="submit" size="sm">Save Post</Button>
            </div>
          </ClientForm>
        </CardContent>
      </Card>
    </div>
  );
}
