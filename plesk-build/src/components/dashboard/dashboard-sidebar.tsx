import Link from "next/link";
import { UserAvatar } from "@/components/ui/user-avatar";
import { LayoutDashboard, FileText, MessageSquare, Users, UserCircle, Settings, Image } from "lucide-react";
import { SignOutButton } from "@/components/ui/sign-out-button";

interface DashboardSidebarProps {
  dbUser: any;
  session: any;
  projectName?: string;
  className?: string;
}

export function DashboardSidebar({ dbUser, session, projectName = "CMS-Cybertronium", className = "" }: DashboardSidebarProps) {
  const navLink =
    "flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors";

  return (
    <aside className={`w-56 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101014] flex flex-col shrink-0 h-full ${className}`}>
      {/* Logo */}
      <div className="h-12 px-4 flex items-center border-b border-slate-200 dark:border-slate-800 shrink-0">
        <h2 className="text-base font-bold truncate bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
          {projectName}
        </h2>
      </div>



      {/* Nav */}
      <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto">
        <Link href="/cms-admin/dashboard" className={navLink}>
          <LayoutDashboard className="w-4 h-4 opacity-60 shrink-0" /> Overview
        </Link>
        <Link href="/cms-admin/dashboard/posts" className={navLink}>
          <FileText className="w-4 h-4 opacity-60 shrink-0" /> Posts
        </Link>
        <Link href="/cms-admin/dashboard/comments" className={navLink}>
          <MessageSquare className="w-4 h-4 opacity-60 shrink-0" /> Comments
        </Link>
        <Link href="/cms-admin/dashboard/media" className={navLink}>
          <Image className="w-4 h-4 opacity-60 shrink-0" /> Media Library
        </Link>
        <Link href="/cms-admin/dashboard/profile" className={navLink}>
          <UserCircle className="w-4 h-4 opacity-60 shrink-0" /> My Profile
        </Link>

        {session.user.role === "ADMIN" && (
          <>
            <div className="my-2 mx-1 h-px bg-slate-200 dark:bg-slate-800" />
            <p className="px-2.5 pb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Admin
            </p>

            <Link href="/cms-admin/dashboard/users" className={navLink}>
              <Users className="w-4 h-4 opacity-60 shrink-0" /> Users
            </Link>
            <Link href="/cms-admin/dashboard/settings" className={navLink}>
              <Settings className="w-4 h-4 opacity-60 shrink-0" /> Settings
            </Link>
          </>
        )}
      </nav>

      {/* User Footer */}
      <div className="p-2 border-t border-slate-200 dark:border-slate-800 shrink-0">
        <div className="flex items-center gap-2 px-2.5 py-2 mb-1">
          <UserAvatar
            src={dbUser?.image}
            name={dbUser?.name}
            email={dbUser?.email || session.user.email}
            className="w-6 h-6"
            fallbackClassName="text-[10px]"
          />
          <div className="min-w-0">
            <p className="text-xs font-medium truncate leading-tight">{dbUser?.name || dbUser?.email || session.user.email}</p>
            <p className="text-[10px] text-slate-400">{dbUser?.role || session.user.role}</p>
          </div>
        </div>
        <SignOutButton />
      </div>
    </aside>
  );
}
