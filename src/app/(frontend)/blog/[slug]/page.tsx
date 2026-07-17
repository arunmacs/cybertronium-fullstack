import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import BlogDetail from "@/frontend-pages/BlogDetail";

const DOMAIN = process.env.NEXT_PUBLIC_APP_URL || "https://www.cybertronium.com";

/**
 * Fetches live blog post metadata from the database for SSR.
 * Falls back gracefully to a default title/description if the post
 * cannot be fetched (e.g., draft or deleted).
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    // Same-origin fetch — no CORS, uses relative path in prod
    const res = await fetch(`${DOMAIN}/api/v1/posts/${slug}`, {
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    });

    if (res.ok) {
      const { post } = await res.json();

      const title = `${post.title} | Cybertronium Blog`;
      const description =
        post.excerpt ||
        "Read the latest cybersecurity insights, trends, and expert analysis from the Cybertronium team.";
      const image =
        post.coverImage ||
        post.thumbnailImage ||
        `${DOMAIN}/android-chrome-512x512.png`;
      const fullUrl = `${DOMAIN}/blog/${slug}`;

      return {
        title,
        description,
        alternates: { canonical: fullUrl },
        openGraph: {
          title,
          description,
          url: fullUrl,
          siteName: "Cybertronium",
          type: "article",
          publishedTime: post.publishedAt ?? post.createdAt,
          authors: post.author?.name ? [post.author.name] : undefined,
          images: [{ url: image, width: 1200, height: 630, alt: post.title }],
        },
        twitter: {
          card: "summary_large_image",
          title,
          description,
          images: [image],
        },
      };
    }
  } catch {
    // silent fail — fall through to default
  }

  // Fallback for unpublished or unknown slugs
  return buildMetadata("/");
}

export default function Page() {
  return <BlogDetail />;
}
