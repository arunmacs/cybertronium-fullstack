import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

import { deleteComment, updateCommentStatus } from "@/app/actions/comment-actions";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ConfirmAction } from "@/components/ui/confirm-action";
import { ExpandableText } from "@/components/ui/expandable-text";

const statusStyles: Record<string, string> = {
  APPROVED: "bg-green-100 text-green-700",
  PENDING: "bg-amber-100 text-amber-700",
  SPAM: "bg-red-100 text-red-700",
};

export default async function CommentsPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/cms-admin/login");

  const whereClause: any = { deletedAt: null };
  if (session.user.role === "AUTHOR") {
    whereClause.post = { authorId: session.user.id };
  }

  const comments = await prisma.comment.findMany({
    where: whereClause,
    include: {
      post: { select: { id: true, title: true } },
      author: { select: { name: true, email: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  const pending = comments.filter((c: { status: string }) => c.status === "PENDING").length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Comments</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            {comments.length} comment{comments.length !== 1 ? "s" : ""}
            {pending > 0 && <span className="ml-2 text-amber-600 font-medium">({pending} pending review)</span>}
          </p>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-4">Commenter</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="min-w-[300px]">Comment</TableHead>
                <TableHead>Post</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right pr-4">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comments.map((comment: any) => (
                <TableRow key={comment.id}>
                  <TableCell className="pl-4 text-sm font-medium align-top py-4" title={comment.author?.name || comment.guestName || "Anonymous"}>
                    {comment.author?.name || comment.guestName || (
                      <span className="italic text-slate-400">Anonymous</span>
                    )}
                  </TableCell>
                  <TableCell className="text-xs text-slate-500 align-top py-4" title={comment.guestEmail || comment.author?.email || "No email"}>
                    {comment.guestEmail || comment.author?.email || "—"}
                  </TableCell>
                  <TableCell className="min-w-[300px] align-top py-4">
                    <ExpandableText
                      text={comment.content}
                      className="text-sm whitespace-pre-wrap break-words max-w-[400px]"
                      maxLength={150}
                    />
                  </TableCell>
                  <TableCell className="text-xs text-slate-500 max-w-[150px] truncate align-top py-4 cursor-default" title={comment.post.title}>
                    {comment.post.title}
                  </TableCell>
                  <TableCell className="align-top py-4">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${statusStyles[comment.status] ?? "bg-slate-100 text-slate-600"}`}>
                      {comment.status.charAt(0) + comment.status.slice(1).toLowerCase()}
                    </span>
                  </TableCell>
                  <TableCell className="text-xs text-slate-400 align-top py-4">
                    {comment.createdAt.toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right pr-4 align-top py-4">
                    <div className="flex items-center justify-end gap-1">
                      {comment.status !== "APPROVED" && (
                        <form action={updateCommentStatus.bind(null, comment.id, "APPROVED")}>
                          <Button type="submit" variant="ghost" size="sm" title="Approve this comment" className="h-7 px-2 text-[11px] text-green-600 hover:text-green-800">
                            Approve
                          </Button>
                        </form>
                      )}
                      {comment.status === "APPROVED" && (
                        <form action={updateCommentStatus.bind(null, comment.id, "PENDING")}>
                          <Button type="submit" variant="ghost" size="sm" title="Revert to pending" className="h-7 px-2 text-[11px] text-slate-600 hover:text-slate-800">
                            Revert
                          </Button>
                        </form>
                      )}
                      {comment.status !== "SPAM" && (
                        <form action={updateCommentStatus.bind(null, comment.id, "SPAM")}>
                          <Button type="submit" variant="ghost" size="sm" title="Mark as spam" className="h-7 px-2 text-[11px] text-amber-600 hover:text-amber-800">
                            Spam
                          </Button>
                        </form>
                      )}
                      <ConfirmAction
                        action={deleteComment.bind(null, comment.id)}
                        title="Delete Comment?"
                        description="Are you sure you want to delete this comment? It will be removed from the public website."
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {comments.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="h-20 text-center text-sm text-slate-400 italic">
                    No comments yet for this workspace.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
