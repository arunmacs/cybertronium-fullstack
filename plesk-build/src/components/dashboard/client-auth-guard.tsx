"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Strict Client-Side Auth Enforcer
 * This component leverages NextAuth's `useSession` to aggressively monitor the
 * session state on the client side. If Next.js restores a ghost layout from the
 * router cache but the session is actually dead, `useSession` will realize it
 * and this component will forcefully redirect the user to login.
 */
export function ClientAuthGuard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // If NextAuth definitively determines the user is unauthenticated on the client,
    // obliterate the cache and redirect immediately.
    if (status === "unauthenticated") {
      window.location.href = "/cms-admin/login";
    }
  }, [status]);

  return null;
}
