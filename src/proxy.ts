import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // Add global security headers
  const response = NextResponse.next();

  // Standard security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  
  // Note: For NextAuth.js route protection, we typically don't block in Edge middleware 
  // if using PrismaAdapter, because Prisma does not fully support Edge runtime.
  // Instead, route protection is handled inside the app/dashboard layouts or API routes.

  return response;
}

export const config = {
  // Apply middleware to all routes except static assets and Next.js internals
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
