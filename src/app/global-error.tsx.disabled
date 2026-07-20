"use client";

// Minimal global error boundary — no CSS import to avoid Next.js 16
// workStore prerender crash (known framework bug with globals.css import).
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", fontFamily: "sans-serif" }}>
        <div style={{ textAlign: "center" }}>
          <h2>Something went wrong</h2>
          <button onClick={() => reset()} style={{ marginTop: "1rem", padding: "0.5rem 1.5rem", cursor: "pointer" }}>
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
