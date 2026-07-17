import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { checkRateLimit } from "@/lib/rate-limit";

import { getCorsHeaders } from "@/lib/cors";

export async function OPTIONS(req: NextRequest) {
  return NextResponse.json({}, { headers: getCorsHeaders(req, "POST, OPTIONS") });
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  let resolvedParams;
  try {
    resolvedParams = await params;
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    // Stricter rate limit for comments (e.g., 5 per minute)
    const { success, headers: rateLimitHeaders } = checkRateLimit(`comment_${ip}`, 5, 60000);
    
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment." },
        { status: 429, headers: { ...getCorsHeaders(req, "POST, OPTIONS"), ...rateLimitHeaders } }
      );
    }

    const body = await req.json();
    const { content, guestName, guestEmail } = body;

    if (!content || typeof content !== "string" || content.trim().length === 0) {
      return NextResponse.json(
        { error: "Comment content is required" },
        { status: 400, headers: { ...getCorsHeaders(req, "POST, OPTIONS"), ...rateLimitHeaders } }
      );
    }

    if (!guestName || typeof guestName !== "string" || guestName.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400, headers: { ...getCorsHeaders(req, "POST, OPTIONS"), ...rateLimitHeaders } }
      );
    }

    if (!guestEmail || typeof guestEmail !== "string" || !guestEmail.includes("@")) {
      return NextResponse.json(
        { error: "A valid email is required" },
        { status: 400, headers: { ...getCorsHeaders(req, "POST, OPTIONS"), ...rateLimitHeaders } }
      );
    }

    // Find the post by slug to get its ID
    const post = await prisma.post.findUnique({
      where: { slug: resolvedParams.slug, status: "PUBLISHED", deletedAt: null },
      select: { id: true }
    });

    if (!post) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404, headers: { ...getCorsHeaders(req, "POST, OPTIONS"), ...rateLimitHeaders } }
      );
    }

    // Create the comment. Setting status to PENDING so admin has to approve it,
    // or APPROVED if you want them live immediately. Let's default to PENDING.
    const comment = await prisma.comment.create({
      data: {
        content: content.trim(),
        guestName: guestName.trim(),
        guestEmail: guestEmail?.trim() || null,
        status: "PENDING", // CMS admins will approve it
        postId: post.id,
      },
      select: {
        id: true,
        content: true,
        guestName: true,
        createdAt: true,
        status: true
      }
    });

    return NextResponse.json({ 
      message: "Comment submitted successfully. It will be visible after moderation.",
      comment 
    }, { headers: { ...getCorsHeaders(req, "POST, OPTIONS"), ...rateLimitHeaders }, status: 201 });

  } catch (error) {
    console.error(`[API /api/v1/posts/${resolvedParams?.slug || 'unknown'}/comments]`, error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500, headers: getCorsHeaders(req, "POST, OPTIONS") });
  }
}
