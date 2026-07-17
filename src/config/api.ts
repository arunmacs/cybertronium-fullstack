/**
 * API base URL for client-side fetches (usePosts, useTags, etc.)
 *
 * In both development AND production the FE and BE are now the same Next.js
 * server, so we use an empty string ("") to produce relative URLs like
 * /api/v1/posts — no CORS, no cross-origin issues.
 *
 * NEXT_PUBLIC_CMS_API_URL is kept as an escape hatch for future separation.
 */
export const API_BASE_URL = process.env.NEXT_PUBLIC_CMS_API_URL ?? "";
