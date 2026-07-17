"use client";

import { useSearchParams } from "next/navigation";
import { AlertCircle, XCircle } from "lucide-react";
import { Suspense } from "react";

const ERROR_MESSAGES: Record<string, string> = {
  unauthorized_admin: "Access Denied: You need Administrator privileges to view this page.",
  unauthorized_tenant: "Access Denied: You do not have permission to access this workspace.",
  session_expired: "Your session has expired or your access was revoked. Please log in again.",
  no_workspace: "No workspace selected. Please choose a project from the sidebar before continuing.",
  missing_title: "Validation Error: Post title is required.",
  missing_content: "Validation Error: Post content cannot be empty.",
  self_delete: "You cannot delete your own account.",
  password_too_short: "Password must be at least 8 characters long.",
  default: "An unexpected error occurred. Please try again."
};

function ErrorBannerContent() {
  const searchParams = useSearchParams();
  const errorParam = searchParams.get("error");

  if (!errorParam) return null;

  const message = ERROR_MESSAGES[errorParam] || ERROR_MESSAGES.default;

  return (
    <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4 flex items-start gap-3 shadow-sm">
      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-red-800">Action Required</h3>
        <p className="text-sm text-red-700 mt-1">{message}</p>
      </div>
    </div>
  );
}

export function GlobalErrorBanner() {
  return (
    <Suspense fallback={null}>
      <ErrorBannerContent />
    </Suspense>
  );
}
