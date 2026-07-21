"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function MediaCleanupReminder() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("media-cleanup-dismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative">
      <button
        onClick={() => {
          setIsVisible(false);
          localStorage.setItem("media-cleanup-dismissed", "true");
        }}
        className="absolute top-6 right-1 text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 p-1"
        title="Dismiss reminder"
      >
        <X className="w-4 h-4" />
      </button>
      <div>
        <h3 className="text-sm font-semibold text-indigo-900 dark:text-indigo-300">Media Cleanup Reminder</h3>
        <p className="text-xs text-indigo-700 dark:text-indigo-400 mt-1 mr-4">
          Remember to periodically scan and clean up orphaned media assets to save storage space.
        </p>
      </div>
      <Link href="/cms-admin/dashboard/media" className="shrink-0 sm:pr-4">
        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
          Clean Up Media
        </Button>
      </Link>
    </div>
  );
}
