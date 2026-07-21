import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateProfile } from "@/app/actions/user-actions";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageInputWithUpload } from "@/components/ui/image-input-with-upload";
import { UserAvatar } from "@/components/ui/user-avatar";
import { ClientForm } from "@/components/ui/client-form";
import Link from "next/link";

export default async function ProfilePage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const isEditMode = searchParams.edit === 'true';
  const isMagicReset = searchParams.magic === 'true';
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect("/cms-admin/login");

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      bio: true,
      website: true,
      twitter: true,
      linkedin: true,
      github: true,
      role: true,

      _count: { select: { posts: true } },
    },
  });

  if (!user) redirect("/cms-admin/login");

  const initials = (user.name || user.email || "?")
    .split(" ")
    .map((w: string) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="space-y-5 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Author Profile</h1>
        <p className="text-xs text-slate-500 mt-0.5">
          This information appears publicly on your blog posts.
        </p>
      </div>

      {/* Current Profile Preview */}
      <Card className="shadow-none">
        <CardContent className="pt-4">
          <div className="flex items-center gap-4">
            <UserAvatar
              src={user.image}
              name={user.name}
              email={user.email}
              className="w-16 h-16 border-2 border-slate-200 dark:border-slate-800"
              fallbackClassName="text-xl border-2 border-slate-200 dark:border-slate-800"
            />
            <div>
              <p className="font-semibold text-base">{user.name || <span className="italic text-slate-400">No name set</span>}</p>
              <p className="text-xs text-slate-500">{user.email}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${user.role === "ADMIN" ? "bg-purple-100 text-purple-700" :
                  user.role === "EDITOR" ? "bg-blue-100 text-blue-700" :
                    "bg-slate-100 text-slate-600"
                  }`}>
                  {user.role}
                </span>

                <span className="text-[11px] text-slate-400">{user._count.posts} post{user._count.posts !== 1 ? "s" : ""}</span>
              </div>
            </div>
          </div>
          {user.bio && (
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">
              {user.bio}
            </p>
          )}
          {user.website && (
            <p className="mt-1">
              <a href={user.website} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline break-all">
                {user.website}
              </a>
            </p>
          )}
          {(user.twitter || user.linkedin || user.github) && (
            <div className="flex gap-3 mt-3 border-t border-slate-100 dark:border-slate-800 pt-3">
              {user.twitter && (
                <a href={user.twitter} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">
                  Twitter/X
                </a>
              )}
              {user.linkedin && (
                <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">
                  LinkedIn
                </a>
              )}
              {user.github && (
                <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">
                  GitHub
                </a>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit Form */}
      {(isEditMode || isMagicReset) ? (
        <Card className="shadow-none">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Edit Profile</CardTitle>
            <CardDescription className="text-xs">Changes appear on all your published posts via the API.</CardDescription>
          </CardHeader>
          <CardContent>
            <ClientForm action={updateProfile} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-xs">Display Name</Label>
                  <Input
                    id="name"
                    name="name"
                    defaultValue={user.name || ""}
                    placeholder="Jane Smith"
                    className="h-9 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="website" className="text-xs">Website URL</Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    defaultValue={user.website || ""}
                    placeholder="https://yourdomain.com"
                    className="h-9 text-sm"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-1">
                  <Label htmlFor="twitter" className="text-xs">Twitter/X URL</Label>
                  <Input
                    id="twitter"
                    name="twitter"
                    type="url"
                    defaultValue={user.twitter || ""}
                    placeholder="https://x.com/yourhandle"
                    className="h-9 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="linkedin" className="text-xs">LinkedIn URL</Label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    defaultValue={user.linkedin || ""}
                    placeholder="https://linkedin.com/in/..."
                    className="h-9 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="github" className="text-xs">GitHub URL</Label>
                  <Input
                    id="github"
                    name="github"
                    type="url"
                    defaultValue={user.github || ""}
                    placeholder="https://github.com/yourhandle"
                    className="h-9 text-sm"
                  />
                </div>
              </div>

              <ImageInputWithUpload
                name="image"
                label="Avatar"
                defaultUrl={user.image || ""}
                placeholder="https://example.com/avatar.jpg"
                description="Use a square image (200x200 recommended). Gravatar URLs work too."
              />

              <div className="space-y-1">
                <Label htmlFor="bio" className="text-xs">Author Bio</Label>
                <textarea
                  id="bio"
                  name="bio"
                  defaultValue={user.bio || ""}
                  rows={4}
                  className="flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-950"
                  placeholder="A short description about yourself that appears under your blog posts..."
                />
              </div>

              <div className={`border-t pt-4 mt-4 space-y-4 ${isMagicReset ? 'border-indigo-200 bg-indigo-50/50 p-4 rounded-xl shadow-sm' : 'border-slate-100 dark:border-slate-800'}`}>
                <div>
                  <h4 className="text-sm font-medium">Reset Credentials</h4>
                  {isMagicReset ? (
                    <div className="bg-indigo-100 dark:bg-indigo-900/40 border border-indigo-200 dark:border-indigo-800 p-3 rounded-lg mt-2 mb-3">
                      <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-300">
                        ✨ Welcome back! Please type your new password below and hit Save.
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500 mt-1">If you logged in via Magic Link, you can securely set a new password here.</p>
                  )}
                </div>
                <div className="space-y-1 max-w-sm">
                  <Label htmlFor="newPassword" className="text-xs">New Password <span className="text-slate-400">(Leave blank to keep current)</span></Label>
                  <Input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    autoComplete="new-password"
                    minLength={8}
                    placeholder="Min 8 characters"
                    className="h-9 text-sm"
                    autoFocus={isMagicReset}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Link href="/cms-admin/dashboard/profile">
                  <Button variant="ghost" type="button" size="sm">Cancel</Button>
                </Link>
                <Button type="submit" size="sm">Save Profile</Button>
              </div>
            </ClientForm>
          </CardContent>
        </Card>
      ) : (
        <div className="flex justify-end">
          <Link href="/cms-admin/dashboard/profile?edit=true">
            <Button size="sm">Edit Profile</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
