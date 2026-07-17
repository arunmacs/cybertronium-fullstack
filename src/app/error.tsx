"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Standardize logging for Observability ingestion
    console.error("[Route Error Boundary Caught]:", error);
  }, [error]);

  return (
    <div className="flex h-[80vh] items-center justify-center p-6 text-slate-800 dark:text-slate-200">
      <div className="max-w-md w-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#101014]/50 backdrop-blur-sm rounded-xl p-8 text-center space-y-6">
        <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-amber-600 dark:text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-bold tracking-tight">Something went wrong!</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            An unexpected error interrupted this view. Please try again.
          </p>
        </div>
        <button
          onClick={() => reset()}
          className="w-full h-10 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium rounded-lg transition-colors text-sm"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
