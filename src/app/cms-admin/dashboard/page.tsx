import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, MessageSquare, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MediaCleanupReminder } from "@/components/dashboard/media-cleanup-reminder";

export default async function DashboardOverview() {
  const session = await getServerSession(authOptions);
  const wherePost: any = { deletedAt: null };
  const whereComment: any = { deletedAt: null };
  const whereUser = { deletedAt: null };

  if (session?.user?.role === "AUTHOR") {
    wherePost.authorId = session.user.id;
    whereComment.post = { authorId: session.user.id };
  }

  const [
    totalPosts,
    publishedPosts,
    draftPosts,
    reviewPosts,
    totalComments,
    approvedComments,
    pendingComments,
    spamComments,
    totalUsers,
    inactiveUsers,
    adminCount,
    editorCount,
    authorCount,
    recentPosts
  ] = await Promise.all([
    prisma.post.count({ where: wherePost }),
    prisma.post.count({ where: { ...wherePost, status: "PUBLISHED" } }),
    prisma.post.count({ where: { ...wherePost, status: "DRAFT" } }),
    prisma.post.count({ where: { ...wherePost, status: "REVIEW" } }),

    prisma.comment.count({ where: whereComment }),
    prisma.comment.count({ where: { ...whereComment, status: "APPROVED" } }),
    prisma.comment.count({ where: { ...whereComment, status: "PENDING" } }),
    prisma.comment.count({ where: { ...whereComment, status: "SPAM" } }),

    prisma.user.count({ where: whereUser }),
    prisma.user.count({ where: { deletedAt: { not: null } } }),
    prisma.user.count({ where: { ...whereUser, role: "ADMIN" } }),
    prisma.user.count({ where: { ...whereUser, role: "EDITOR" } }),
    prisma.user.count({ where: { ...whereUser, role: "AUTHOR" } }),

    prisma.post.findMany({
      where: wherePost,
      orderBy: { createdAt: "desc" },
      take: 5,
      select: {
        id: true,
        title: true,
        status: true,
        createdAt: true,
        author: { select: { name: true, email: true } },
      },
    }),
  ]);

  const stats = [
    { label: "Live Articles", value: publishedPosts, sub: `${totalPosts} active posts`, icon: FileText, color: "text-indigo-600" },
    { label: "Needs Review", value: reviewPosts, sub: "Pending Admin approval", icon: TrendingUp, color: "text-blue-600" },
    { label: "Work in Progress", value: draftPosts, sub: "Author drafts", icon: TrendingUp, color: "text-amber-600" },
    { label: "Content Health", value: totalPosts > 0 ? `${Math.round((publishedPosts / totalPosts) * 100)}%` : "—", sub: "Publication rate", icon: TrendingUp, color: "text-blue-600" },
    ...(session?.user?.role === "ADMIN" ? [
      { label: "Editorial Team", value: totalUsers, sub: `${adminCount} Admins, ${editorCount} Editors, ${authorCount} Authors`, icon: Users, color: "text-purple-600" },
      { label: "Archived Accounts", value: inactiveUsers, sub: "No longer active", icon: Users, color: "text-slate-400" },
    ] : []),
    { label: "Moderation Queue", value: pendingComments + spamComments, sub: `${pendingComments} pending, ${spamComments} filtered`, icon: MessageSquare, color: "text-red-600" },
    { label: "Public Comments", value: approvedComments, sub: `${totalComments} verified interactions`, icon: MessageSquare, color: "text-green-600" },
    { label: "Reader Interaction", value: totalPosts > 0 ? (totalComments / totalPosts).toFixed(1) : "0", sub: "Avg. comments per post", icon: MessageSquare, color: "text-pink-600" },
  ];

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
      </div>

      {session?.user?.role === "ADMIN" && (
        <MediaCleanupReminder />
      )}

      {/* Stats */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Card key={i} className="shadow-none">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-slate-500">{s.label}</span>
                <s.icon className={`w-4 h-4 ${s.color}`} />
              </div>
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">{s.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Posts */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="shadow-none">
          <CardHeader className="pb-2 px-4 pt-4">
            <CardTitle className="text-sm font-semibold">Recent Posts</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            {recentPosts.length === 0 ? (
              <p className="text-xs text-slate-400 italic">No posts yet.</p>
            ) : (
              <div className="space-y-2">
                {recentPosts.map((p: any) => (
                  <div key={p.id} className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <Link href={`/cms-admin/dashboard/posts/${p.id}`} className="text-sm font-medium hover:text-indigo-600 truncate block">
                        {p.title}
                      </Link>
                      <p className="text-[11px] text-slate-400">
                        {p.author?.name || p.author?.email || "—"} · {p.createdAt.toLocaleDateString()}
                      </p>
                    </div>
                    {p.status === "PUBLISHED" ? (
                      <span className="inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px] font-medium bg-green-100 text-green-700 shrink-0">Live</span>
                    ) : p.status === "REVIEW" ? (
                      <span className="inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px] font-medium bg-blue-100 text-blue-700 shrink-0">In Review</span>
                    ) : (
                      <span className="inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px] font-medium bg-amber-100 text-amber-700 shrink-0">Draft</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {session?.user?.role === "ADMIN" && (
          <Card className="shadow-none flex flex-col h-87.5">
            <CardHeader className="pb-2 px-4 pt-4 shrink-0">
              <CardTitle className="text-sm font-semibold">API Endpoints: Quick Learn</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 space-y-3 overflow-y-auto min-h-0">
              <p className="text-xs text-slate-500">How to fetch data for your external frontend (e.g. your blog website):</p>

              <div className="space-y-4">
                <div className="rounded-md bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-100 dark:border-slate-800">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">1. Fetch All Posts (Normal Usage)</p>
                  <code className="text-xs font-mono text-indigo-600 dark:text-indigo-400 break-all block mb-1">
                    GET /api/v1/posts
                  </code>
                  <p className="text-[10px] text-slate-500 mb-2">Returns the latest 10 published posts.</p>

                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 mt-3 border-t border-slate-200 dark:border-slate-700 pt-2">Advanced: With Filters & Search</p>
                  <code className="text-xs font-mono text-indigo-600 dark:text-indigo-400 break-all block mb-2">
                    GET /api/v1/posts?q=react&tag=tech&page=2&limit=5
                  </code>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
                    <p><strong className="font-semibold text-slate-700 dark:text-slate-300">?q=</strong> keyword <span className="text-slate-400">(Searches post titles)</span></p>
                    <p><strong className="font-semibold text-slate-700 dark:text-slate-300">?tag=</strong> slug <span className="text-slate-400">(Filters by category slug)</span></p>
                    <p><strong className="font-semibold text-slate-700 dark:text-slate-300">?page=</strong> number <span className="text-slate-400">(Pagination page, default: 1)</span></p>
                    <p><strong className="font-semibold text-slate-700 dark:text-slate-300">?limit=</strong> number <span className="text-slate-400">(Items per page, default: 10)</span></p>
                  </div>
                </div>

                <div className="rounded-md bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-100 dark:border-slate-800">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">2. Fetch Single Post</p>
                  <code className="text-xs font-mono text-indigo-600 dark:text-indigo-400 break-all block mb-1">
                    GET /api/v1/posts/{"{slug}"}
                  </code>
                  <p className="text-[10px] text-slate-500">Fetches the full content of a single post based on its slug URL.</p>
                </div>

                <div className="rounded-md bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-100 dark:border-slate-800">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">3. Fetch/Upload Media</p>
                  <code className="text-xs font-mono text-indigo-600 dark:text-indigo-400 break-all block mb-1">
                    POST /api/upload
                  </code>
                  <p className="text-[10px] text-slate-500 mb-2">Uploads an image (multipart/form-data with 'file'). Returns the asset URL.</p>

                  <code className="text-xs font-mono text-indigo-600 dark:text-indigo-400 break-all block mb-1 border-t border-slate-200 dark:border-slate-700 pt-2">
                    GET /api/media/{"{id}"}
                  </code>
                  <p className="text-[10px] text-slate-500">Public URL to fetch the raw image binary.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
