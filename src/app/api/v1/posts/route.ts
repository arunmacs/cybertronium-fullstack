import { NextRequest, NextResponse } from "next/server";
import { PostService } from "@/services/post.service";
import { checkRateLimit } from "@/lib/rate-limit";

import { getCorsHeaders } from "@/lib/cors";

export async function OPTIONS(req: NextRequest) {
  return NextResponse.json({}, { headers: getCorsHeaders(req) });
}

export async function GET(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const { success, headers: rateLimitHeaders } = checkRateLimit(ip, 120, 60000); // 120 hits per min
    
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { ...getCorsHeaders(req), ...rateLimitHeaders } }
      );
    }

    const page = parseInt(req.nextUrl.searchParams.get("page") || "1");
    const limit = parseInt(req.nextUrl.searchParams.get("limit") || "10");
    const q = req.nextUrl.searchParams.get("q") || undefined;
    const tag = req.nextUrl.searchParams.get("tag") || undefined;
    const useMock = req.nextUrl.searchParams.get("mock") === "true";

    const data = await PostService.getPublicPosts({ page, limit, q, tag, useMock });

    return NextResponse.json(data, { headers: { ...getCorsHeaders(req), ...rateLimitHeaders } });
  } catch (error) {
    console.error("[API /api/v1/posts]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500, headers: getCorsHeaders(req) });
  }
}
