// A simple, dependency-free in-memory rate limiter for Node environments
// Stores hit counts against IPs rolling off after a set timer.

interface RateLimitTracker {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitTracker>();

export function checkRateLimit(ip: string, limit: number = 60, windowMs: number = 60000): { success: boolean; headers: HeadersInit } {
  const now = Date.now();
  const tracker = rateLimitMap.get(ip);
  
  // Clean up cache dynamically to prevent memory leaks over time
  if (rateLimitMap.size > 5000) {
    const expiredKeys = [];
    for (const [key, val] of rateLimitMap.entries()) {
      if (val.resetAt < now) expiredKeys.push(key);
    }
    expiredKeys.forEach(k => rateLimitMap.delete(k));
  }

  const resetAt = tracker ? tracker.resetAt : now + windowMs;
  let count = tracker && tracker.resetAt > now ? tracker.count : 0;
  
  count++;
  
  rateLimitMap.set(ip, {
    count,
    resetAt
  });

  const remaining = Math.max(0, limit - count);
  const success = count <= limit;

  const headers = {
    'X-RateLimit-Limit': limit.toString(),
    'X-RateLimit-Remaining': remaining.toString(),
    'X-RateLimit-Reset': resetAt.toString()
  };

  return { success, headers };
}
