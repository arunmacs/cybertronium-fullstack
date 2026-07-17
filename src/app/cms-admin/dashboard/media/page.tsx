import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { MediaLibrary } from "@/components/ui/media-library";

export default async function MediaPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/cms-admin/login");
  }

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Media</h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Manage your uploaded images and assets.
        </p>
      </div>

      <MediaLibrary isAdmin={session.user.role === "ADMIN"} />
    </div>
  );
}
