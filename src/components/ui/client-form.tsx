"use client";

import React, { useState, useRef, useEffect } from "react";

export function ClientForm({ 
  action, 
  children, 
  className 
}: { 
  action: (formData: FormData) => Promise<{ error?: string } | void>,
  children: React.ReactNode,
  className?: string
}) {
  const [error, setError] = useState<string | null>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (error && errorRef.current) {
      errorRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [error]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    try {
      const res = await action(formData);
      if (res?.error) {
        setError(res.error);
      }
    } catch (err: any) {
      // In Next.js, redirect() in a server action throws an error that we must re-throw
      // so the router can intercept it.
      if (err.message && err.message.includes("NEXT_REDIRECT")) {
        throw err;
      }
      // Otherwise, ignore or log
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {error && (
        <div ref={errorRef} className="mb-4 p-3 rounded-md bg-red-50 border border-red-200 text-red-600 text-sm">
          {error}
        </div>
      )}
      {children}
    </form>
  );
}
