import type { MetadataRoute } from "next";

/**
 * Native Next.js robots.ts — replaces static public/robots.txt.
 * Mirrors the original FE robots.txt exactly:
 *   - Googlebot, Bingbot, Twitterbot, facebookexternalhit, * all: Allow /
 *   - Points to the live sitemap on the production domain
 * CMS admin routes are explicitly disallowed for crawlers.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/cms-admin/", "/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/cms-admin/", "/api/"],
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/cms-admin/", "/api/"],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_APP_URL || "https://www.cybertronium.com"}/sitemap.xml`,
  };
}
