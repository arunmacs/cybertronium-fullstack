"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Listens for bfcache (back/forward cache) restorations.
 * If a user logs out, goes to the login page, and clicks "Back" in their browser,
 * the browser might instantly restore the dashboard visual state from memory.
 * This listener detects that and forces Next.js to re-evaluate the Server Components.
 * Because the session cookie is gone, getServerSession() will fail and boot them back out.
 */
export function BfCacheListener() {
  const router = useRouter();

  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // Page was restored from cache. Force Next.js to re-fetch Server Components
        router.refresh();
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [router]);

  return null;
}
