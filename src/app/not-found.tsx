import Link from "next/link";

/**
 * Custom 404 page.
 * REQUIRED for Next.js standalone build — without this file, the build fails
 * with "ENOENT: no such file or directory, _not-found/page.js.nft.json"
 * because Next.js cannot generate file-tracing manifests for the built-in 404 handler.
 */
export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, system-ui, sans-serif",
        background: "#0a0a0f",
        color: "#fff",
        gap: "1.5rem",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(4rem, 10vw, 8rem)",
          fontWeight: 900,
          background: "linear-gradient(135deg, #C01E6C, #511F5E)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          margin: 0,
          lineHeight: 1,
        }}
      >
        404
      </h1>
      <p style={{ fontSize: "1.25rem", color: "#94a3b8", margin: 0 }}>
        Page not found
      </p>
      <Link
        href="/"
        style={{
          marginTop: "0.5rem",
          padding: "0.75rem 2rem",
          borderRadius: "9999px",
          background: "linear-gradient(135deg, #511F5E, #C01E6C)",
          color: "#fff",
          fontWeight: 700,
          textDecoration: "none",
          fontSize: "0.9rem",
          letterSpacing: "0.05em",
        }}
      >
        GO HOME
      </Link>
    </div>
  );
}
