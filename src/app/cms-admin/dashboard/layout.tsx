import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, FileText, MessageSquare, Settings, Users, LogOut, Briefcase, UserCircle } from "lucide-react";
import { SignOutButton } from "@/components/ui/sign-out-button";
import { prisma } from "@/lib/prisma";
import { GlobalErrorBanner } from "@/components/ui/global-error-banner";
import { Toaster } from "@/components/ui/sonner";
import { getProjectName } from "@/app/actions/setting-actions";

import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { MobileNav } from "@/components/dashboard/mobile-nav";
import { BfCacheListener } from "@/components/dashboard/bfcache-listener";
import { ClientAuthGuard } from "@/components/dashboard/client-auth-guard";
import { SessionProvider } from "@/components/dashboard/session-provider";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/cms-admin/login");

  const dbUser = await prisma.user.findUnique({
    where: { email: session.user.email! },
    select: { name: true, image: true, email: true, role: true },
  });

  const projectName = await getProjectName();
  const sidebarProps = { dbUser, session, projectName };

  return (
    <>
      <SessionProvider>
        <div className="flex h-screen bg-slate-50 dark:bg-[#0c0c0e]">
          <BfCacheListener />
          <ClientAuthGuard />
          {/* Sidebar - Desktop */}
          <DashboardSidebar {...sidebarProps} className="hidden lg:flex" />

          {/* Main Content */}
          <main className="flex-1 overflow-auto flex flex-col min-w-0">
            {/* Mobile Nav Toggle */}
            {/* <header className="h-11 border-b border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-black/40 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-4 lg:px-5 shrink-0">
              <div className="flex items-center">
                <MobileNav>
                  <DashboardSidebar {...sidebarProps} />
                </MobileNav>
              </div>
            </header> */}
            <div className="p-2 lg:p-4 max-w-7xl mx-auto w-full">
              <GlobalErrorBanner />
              {children}
            </div>
          </main>
        </div>
      </SessionProvider>
      <Toaster position="bottom-right" richColors closeButton />
    </>
  );
}
