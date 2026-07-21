import { NextRequest } from "next/server";

export const allowedOrigins = [
  process.env.NEXT_PUBLIC_APP_URL || "https://www.cybertronium.com",
  "http://localhost:3000",
  "http://localhost:8080",
  "http://49.204.235.145:3001",
  "https://staging.cybertronium.com"
];

export function getCorsHeaders(req?: NextRequest | Request | null, methods: string = "GET, POST, OPTIONS") {
  const origin = req?.headers?.get("origin") || "";
  const allowOrigin = allowedOrigins.includes(origin)
    ? origin
    : (process.env.NEXT_PUBLIC_APP_URL || "*");

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": methods,
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}
