import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

import { getCorsHeaders } from "@/lib/cors";

export async function OPTIONS(req: Request) {
  return NextResponse.json({}, { headers: getCorsHeaders(req, "GET, OPTIONS") });
}

export async function GET(req: Request) {
  try {
    const tags = await prisma.tag.findMany({
      where: {
        deletedAt: null,
        posts: {
          some: {
            status: "PUBLISHED",
            deletedAt: null,
          },
        },
      },
      select: {
        id: true,
        name: true,
        slug: true,
      },
      orderBy: {
        name: 'asc'
      }
    });

    return NextResponse.json(
      { tags },
      { headers: getCorsHeaders(req, "GET, OPTIONS") }
    );
  } catch (error) {
    console.error("[API /api/v1/tags]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500, headers: getCorsHeaders(req, "GET, OPTIONS") });
  }
}
