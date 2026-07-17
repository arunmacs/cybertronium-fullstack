import type { MetadataRoute } from "next";

const DOMAIN = process.env.NEXT_PUBLIC_APP_URL || "https://www.cybertronium.com";

/** All static frontend routes — mirrors seoConfig.ts exactly. */
const staticRoutes: MetadataRoute.Sitemap = [
  { url: `${DOMAIN}/`, changeFrequency: "weekly", priority: 1.0 },
  { url: `${DOMAIN}/about-us`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/ctem`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/trainings`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/contact`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/blogs`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/privacy-policy`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/terms-of-use`, changeFrequency: "weekly", priority: 0.8 },
  // Services
  { url: `${DOMAIN}/services/zero-trust-implementation`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/vulnerability-assessment`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/penetration-testing`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/app-security-services`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/red-purple-teaming`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/firmware-security`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/compromise-assessment`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/cybersecurity-maturity-assessment`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/strategy-consulting`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/governance-risk-compliance`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/secure-digital-transformation`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/digital-forensics-incident-response`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/mobile-threat-defense`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/ciso-as-a-service`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/cloud-detection-response`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/cloud-security-posture-management`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/cloud-security-consulting`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/managed-security-awareness`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/soc-for-sme`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/soc-as-a-service`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/services/ai-security`, changeFrequency: "weekly", priority: 0.8 },
  // Trainings
  { url: `${DOMAIN}/trainings/iso-17024`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/trainings/globalace`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/trainings/nist-nice`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/trainings/globalace-framework`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/trainings/mitre-attck`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/trainings/skillsfuture-sg`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/trainings/certified-penetration-tester`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/trainings/certified-soc-analyst`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/trainings/certified-red-team-professional`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/trainings/certified-cyber-threat-intelligence-analyst`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/trainings/certified-secure-developer`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/trainings/certified-cloud-security-professional`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/trainings/certified-experiential-cybersecurity-aware-user`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/trainings/certified-security-aware-user`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/trainings/certified-security-aware-cxo`, changeFrequency: "weekly", priority: 0.8 },
  // Events & Challenges
  { url: `${DOMAIN}/email-security`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${DOMAIN}/agenticaisoc`, changeFrequency: "weekly", priority: 0.8 },
];

/**
 * Next.js native sitemap — generated at build time + revalidated.
 * Fetches all published blog posts from the live DB to include dynamic blog routes.
 * This replaces both:
 *   - scripts/generate-sitemap.js (Vite FE)
 *   - the static public/sitemap.xml file
 */
export const revalidate = 3600; // Rebuild blog entries every hour (ISR)

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogEntries: MetadataRoute.Sitemap = [];

  try {
    const res = await fetch(`${DOMAIN}/api/v1/posts?limit=1000`, {
      next: { revalidate: 3600 },
    });

    if (res.ok) {
      const data = await res.json();
      const posts: Array<{ slug: string; publishedAt: string | null; createdAt: string }> =
        data.posts ?? [];

      blogEntries = posts.map((post) => ({
        url: `${DOMAIN}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt ?? post.createdAt),
        changeFrequency: "monthly",
        priority: 0.7,
      }));
    }
  } catch {
    // If the DB is unavailable during build, only static routes are included
    console.warn("[sitemap.ts] Could not fetch blog posts. Only static routes will be included.");
  }

  return [...staticRoutes, ...blogEntries];
}
