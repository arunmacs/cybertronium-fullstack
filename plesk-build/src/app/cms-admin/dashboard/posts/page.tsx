import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

import { deletePost } from "@/app/actions/post-actions";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, PlusCircle } from "lucide-react";
import { ConfirmAction } from "@/components/ui/confirm-action";
import Link from "next/link";
import { FormattedDate } from "@/components/ui/formatted-date";

import { PostFilters } from "./post-filters";
import { Pagination } from "@/components/ui/pagination";

export default async function PostsPage(props: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/cms-admin/login");

  const searchParams = await props.searchParams;
  const q = typeof searchParams?.q === "string" ? searchParams.q : undefined;
  const tag = typeof searchParams?.tag === "string" ? searchParams.tag : undefined;
  const page = typeof searchParams?.page === "string" ? Math.max(1, parseInt(searchParams.page, 10)) : 1;
  const limit = typeof searchParams?.limit === "string" ? Math.max(1, parseInt(searchParams.limit, 10)) : 10;

  const whereClause: any = { deletedAt: null };
  if (session.user.role === "AUTHOR") {
    whereClause.authorId = session.user.id;
  }

  if (q) {
    whereClause.title = { contains: q };
  }

  if (tag) {
    whereClause.tags = { some: { slug: tag } };
  }

  const [posts, totalPosts, allTags] = await Promise.all([
    prisma.post.findMany({
      where: whereClause,
      include: { author: { select: { id: true, name: true, email: true, image: true } } },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.post.count({ where: whereClause }),
    prisma.tag.findMany({ where: { deletedAt: null }, orderBy: { name: "asc" } })
  ]);

  const totalPages = Math.ceil(totalPosts / limit);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Posts</h1>
          <p className="text-xs text-slate-500 mt-0.5">{posts.length} post{posts.length !== 1 ? "s" : ""}</p>
        </div>
        <Link href="/cms-admin/dashboard/posts/new">
          <Button size="sm" className="h-8 gap-1.5 text-xs">
            <PlusCircle className="h-3.5 w-3.5" /> New Post
          </Button>
        </Link>
      </div>

      <PostFilters tags={allTags} />

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-4 w-[35%]">Post</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Updated</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post: any) => (
                <TableRow key={post.id}>
                  <TableCell className="pl-4 font-medium text-sm max-w-xs">
                    <div className="flex items-center gap-3">
                      {post.thumbnailImage || post.coverImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={post.thumbnailImage || post.coverImage}
                          alt=""
                          className="w-10 h-10 rounded-md object-cover shrink-0 border border-slate-200 dark:border-slate-700"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                          </svg>
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="truncate">{post.title}</div>
                        <div className="text-[11px] text-slate-500 font-normal truncate mt-0.5">/{post.slug}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {post.author?.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={post.author.image} alt="" className="w-6 h-6 rounded-full object-cover shrink-0" />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-linear-to-tr from-indigo-400 to-purple-400 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                          {(post.author?.name || post.author?.email || "?").charAt(0).toUpperCase()}
                        </div>
                      )}
                      <span className="text-sm text-slate-600">
                        {post.author?.name || post.author?.email || <span className="italic text-slate-400">Unknown</span>}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {post.status === "PUBLISHED" ? (
                      <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium bg-green-100 text-green-700">Published</span>
                    ) : post.status === "REVIEW" ? (
                      <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium bg-blue-100 text-blue-700">In Review</span>
                    ) : (
                      <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium bg-amber-100 text-amber-700">Draft</span>
                    )}
                  </TableCell>
                  <TableCell className="text-xs text-slate-500 whitespace-nowrap"><FormattedDate date={post.createdAt} /></TableCell>
                  <TableCell className="text-xs text-slate-500 whitespace-nowrap"><FormattedDate date={post.updatedAt} /></TableCell>
                  <TableCell className="text-right pr-4">
                    <div className="flex items-center justify-end gap-1">
                      <Link href={`/cms-admin/dashboard/posts/${post.id}`}>
                        <Button variant="ghost" size="sm" className="h-7 px-2 text-xs gap-3">
                          <Edit className="h-3.5 w-3.5" />
                          Edit
                        </Button>
                      </Link>
                      <ConfirmAction
                        action={deletePost.bind(null, post.id)}
                        title="Delete Post?"
                        description={`This will delete "${post.title}". Are you sure?`}
                        confirmText={post.title}
                        confirmLabel="post title"
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {posts.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="h-20 text-center text-sm text-slate-400 italic">
                    No posts yet. Create your first one!
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {totalPages > 1 && (
        <Pagination currentPage={page} totalPages={totalPages} />
      )}
    </div>
  );
}
