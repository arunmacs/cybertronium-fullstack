import { NextRequest, NextResponse } from "next/server";
import { PostService } from "@/services/post.service";
import { checkRateLimit } from "@/lib/rate-limit";

import { getCorsHeaders } from "@/lib/cors";

export async function OPTIONS(req: NextRequest) {
  return NextResponse.json({}, { headers: getCorsHeaders(req, "GET, OPTIONS") });
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  let resolvedParams;
  try {
    resolvedParams = await params;
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const { success, headers: rateLimitHeaders } = checkRateLimit(ip, 120, 60000);
    
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests." },
        { status: 429, headers: { ...getCorsHeaders(req, "GET, OPTIONS"), ...rateLimitHeaders } }
      );
    }

    const post = await PostService.getPublicPostBySlug(resolvedParams.slug);

    if (!post) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404, headers: { ...getCorsHeaders(req, "GET, OPTIONS"), ...rateLimitHeaders } }
      );
    }

    return NextResponse.json({ post }, { headers: { ...getCorsHeaders(req, "GET, OPTIONS"), ...rateLimitHeaders } });
  } catch (error) {
    console.error(`[API /api/v1/posts/${resolvedParams?.slug || 'unknown'}]`, error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500, headers: getCorsHeaders(req, "GET, OPTIONS") });
  }
}
