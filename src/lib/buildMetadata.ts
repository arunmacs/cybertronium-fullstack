import type { Metadata } from "next";
import { seoConfig } from "@/config/seoConfig";

const DOMAIN = process.env.NEXT_PUBLIC_APP_URL || "https://www.cybertronium.com";
const DEFAULT_OG_IMAGE = `${DOMAIN}/android-chrome-512x512.png`;

/**
 * Builds a Next.js Metadata object from a route path using seoConfig.
 * Falls back to the "default" entry if the path is not in seoConfig.
 */
export function buildMetadata(
  routePath: string,
  overrides?: Partial<{ title: string; description: string; image: string; type: string }>
): Metadata {
  const normalized = routePath === "/" ? "/" : routePath.replace(/\/$/, "");
  const config = seoConfig[normalized] ?? seoConfig["default"];

  const title = overrides?.title ?? config.title;
  const description = overrides?.description ?? config.description;
  const image = overrides?.image ?? DEFAULT_OG_IMAGE;
  const type = (overrides?.type ?? "website") as "website" | "article";
  const fullUrl = `${DOMAIN}${normalized === "/" ? "" : normalized}`;

  return {
    title,
    description,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "Cybertronium",
      type,
      images: [
        {
          url: image,
          width: 512,
          height: 512,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
