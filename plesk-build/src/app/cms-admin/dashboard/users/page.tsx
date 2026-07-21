import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { deleteUser, adminUpdateRole } from "@/app/actions/user-actions";
import { InviteUserForm } from "@/components/ui/invite-user-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ConfirmAction } from "@/components/ui/confirm-action";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ClientForm } from "@/components/ui/client-form";
import Link from "next/link";
import { PlusCircle, Edit } from "lucide-react";

const ROLES = ["ADMIN", "EDITOR", "AUTHOR"];

const selectClass =
  "flex h-9 w-full rounded-md border border-slate-200 bg-white px-3 py-1 text-sm dark:border-slate-800 dark:bg-slate-950";

export default async function UsersPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const isInviteOpen = searchParams.invite === 'true';
  const editUserId = searchParams.edit as string | undefined;

  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") redirect("/cms-admin/dashboard?error=unauthorized_admin");

  const users = await prisma.user.findMany({
    where: { deletedAt: null },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Users & Roles</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage access, roles, and author profiles.
          </p>
        </div>
        {!isInviteOpen && (
          <Link href="/cms-admin/dashboard/users?invite=true">
            <Button size="sm" className="h-8 gap-1.5 text-xs">
              <PlusCircle className="h-3.5 w-3.5" /> Invite User
            </Button>
          </Link>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Invite Form */}
        {isInviteOpen && (
          <Card className="md:col-span-1 shadow-none">
            <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
              <div className="space-y-1">
                <CardTitle className="text-base">Invite User</CardTitle>
                <CardDescription className="text-xs">Creates a new account with a temporary password.</CardDescription>
              </div>
              <Link href="/cms-admin/dashboard/users">
                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">Cancel</Button>
              </Link>
            </CardHeader>
            <CardContent>
              <InviteUserForm />
            </CardContent>
          </Card>
        )}

        {/* Users Table */}
        <Card className={`shadow-none ${isInviteOpen ? "md:col-span-2" : "md:col-span-3"}`}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">All Users</CardTitle>
            <CardDescription className="text-xs">{users.length} account{users.length !== 1 ? "s" : ""} total.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="pl-4">Author</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead className="pr-4">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user: any) => {
                  const initials = (user.name || user.email || "?")
                    .split(" ")
                    .map((w: string) => w[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase();
                  const updateAction = adminUpdateRole.bind(null, user.id);
                  return (
                    <TableRow key={user.id}>
                      <TableCell className="pl-4">
                        <div className="flex items-center gap-2.5">
                          {user.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={user.image} alt={user.name || "avatar"} className="w-8 h-8 rounded-full object-cover shrink-0 border border-slate-200 dark:border-slate-700" />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                              {initials}
                            </div>
                          )}
                          <div>
                            <p className="text-sm font-medium leading-tight">{user.name || <span className="italic text-slate-400">No name</span>}</p>
                            <p className="text-[11px] text-slate-500">{user.email}</p>
                            {user.bio && (
                              <p className="text-[11px] text-slate-400 truncate max-w-[180px]">{user.bio}</p>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${user.role === "ADMIN" ? "bg-purple-100 text-purple-700" :
                            user.role === "EDITOR" ? "bg-blue-100 text-blue-700" :
                              "bg-slate-100 text-slate-600"
                          }`}>
                          {user.role}
                        </span>
                      </TableCell>

                      <TableCell className="pr-4">
                        <div className="flex items-center gap-1 w-full">
                          {editUserId === user.id ? (
                            <ClientForm action={updateAction} className="flex flex-col items-start gap-2">
                              <div className="flex gap-2 w-full">
                                <select name="role" defaultValue={user.role} className="h-7 text-[11px] rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-1">
                                  {ROLES.map((r: any) => <option key={r} value={r}>{r}</option>)}
                                </select>
                              </div>
                              <div className="flex gap-2 w-full mt-1">
                                <Button type="submit" variant="outline" size="sm" className="h-7 px-3 text-[11px]">Save</Button>
                                <Link href="/cms-admin/dashboard/users">
                                  <Button variant="outline" size="sm" className="h-7 px-3 text-[11px]">Cancel</Button>
                                </Link>
                              </div>
                            </ClientForm>
                          ) : (
                            <>
                              <Link href={`/cms-admin/dashboard/users?edit=${user.id}${isInviteOpen ? '&invite=true' : ''}`}>
                                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs gap-1">
                                  <Edit className="h-3.5 w-3.5" /> Edit
                                </Button>
                              </Link>
                              {user.email !== session.user?.email && (
                                <ConfirmAction
                                  action={deleteUser.bind(null, user.id)}
                                  title="Delete User?"
                                  description={`Are you sure you want to delete ${user.name || user.email}? This action prevents them from logging in.`}
                                  buttonText="Delete"
                                  variant="ghost"
                                />
                              )}
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
                {users.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="h-20 text-center text-sm text-slate-400 italic">No users yet.</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
