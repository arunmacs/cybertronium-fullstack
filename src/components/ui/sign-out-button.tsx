"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { ConfirmAction } from "@/components/ui/confirm-action";

export function SignOutButton() {
  return (
    <ConfirmAction
      action={async () => {
        await signOut({ redirect: false });
        window.location.href = "/cms-admin/login";
      }}
      title="Ready to leave?"
      description="You are about to securely log out of your session. You will need to sign in again to access the dashboard."
      buttonText="Sign Out"
      variant="ghost"
      icon={<LogOut className="w-3.5 h-3.5 mr-2" />}
      className="w-full flex items-center justify-start px-2.5 py-2 rounded-lg text-xs font-medium text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
    />
  );
}
