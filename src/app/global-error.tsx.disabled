"use client";

import { useEffect } from "react";
import "./globals.css";

// Global error boundary must wrap its own html/body tags
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Standardize logging for easy Datadog / Sentry ingestion
    console.error("[Global Error Boundary Caught]:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-slate-50 dark:bg-slate-950 flex h-screen items-center justify-center p-6 text-slate-800 dark:text-slate-200">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-xl text-center space-y-6">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600 dark:text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500 dark:from-slate-100 dark:to-slate-400">Critical Application Error</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              A serious rendering error was encountered. The engineering team has automatically been notified via logs.
            </p>
          </div>
          <button
            onClick={() => reset()}
            className="w-full h-10 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors text-sm"
          >
            Attempt Recovery
          </button>
        </div>
      </body>
    </html>
  );
}
