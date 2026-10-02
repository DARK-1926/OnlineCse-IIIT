import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ==========================================
// IN-MEMORY SLIDING WINDOW RATE LIMITER
// ==========================================
interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

function checkRateLimit(ip: string, limit: number, windowMs: number): { allowed: boolean; remaining: number; resetSec: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Lazy clean if map grows beyond 5000 items
  if (rateLimitMap.size > 5000) {
    for (const [key, item] of rateLimitMap.entries()) {
      if (now > item.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + windowMs,
    });
    return {
      allowed: true,
      remaining: limit - 1,
      resetSec: Math.ceil(windowMs / 1000),
    };
  }

  if (record.count >= limit) {
    const resetSec = Math.ceil((record.resetTime - now) / 1000);
    return {
      allowed: false,
      remaining: 0,
      resetSec: Math.max(1, resetSec),
    };
  }

  record.count += 1;
  return {
    allowed: true,
    remaining: limit - record.count,
    resetSec: Math.ceil((record.resetTime - now) / 1000),
  };
}

// ==========================================
// MALICIOUS CYBERSECURITY PATTERNS
// ==========================================
const SQL_INJECTION_REGEX = /(\b(union\s+all\s+select|union\s+select|insert\s+into|drop\s+table|update\s+.*\s+set|delete\s+from|exec(\s*\(|\s+)|sp_executesql)\b|--|\/\*|\*\/|'\s*or\s*'1'='1|'\s*or\s*1=1)/i;
const XSS_REGEX = /(<script\b[^>]*>|javascript:|data:text\/html|vbscript:|on(load|error|click|mouseover|submit)\s*=)/i;
const PATH_TRAVERSAL_REGEX = /(\.\.[\/\\]|%2e%2e[\/\\]|\/etc\/passwd|\/etc\/shadow|c:\\windows)/i;
const NULL_BYTE_REGEX = /%00|\\0/;
const BLOCKED_USER_AGENTS = /(sqlmap|nikto|acunetix|wpscan|dirbuster|nmap|masscan|zgrab|nessus|openvas|hydra|havij)/i;

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const userAgent = request.headers.get("user-agent") || "";
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
             request.headers.get("x-real-ip") || 
             "127.0.0.1";

  // 1. Block Automated Vulnerability Scanners
  if (BLOCKED_USER_AGENTS.test(userAgent)) {
    return new NextResponse(
      JSON.stringify({ error: "Access denied by security firewall." }),
      { status: 403, headers: { "Content-Type": "application/json" } }
    );
  }

  // 2. Block Malicious Injection Signatures in URL / Query
  let fullUrlDecoded = "";
  try {
    fullUrlDecoded = decodeURIComponent((pathname + search).replace(/\+/g, " "));
  } catch {
    fullUrlDecoded = pathname + search;
  }
  if (
    SQL_INJECTION_REGEX.test(fullUrlDecoded) ||
    XSS_REGEX.test(fullUrlDecoded) ||
    PATH_TRAVERSAL_REGEX.test(fullUrlDecoded) ||
    NULL_BYTE_REGEX.test(pathname + search)
  ) {
    return new NextResponse(
      JSON.stringify({ error: "Security Exception: Malicious payload blocked." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // 3. API Route Protections (Rate Limit + Anti-CSRF)
  if (pathname.startsWith("/api/")) {
    if (pathname === "/api/health" || pathname === "/api/ready") {
      return NextResponse.next();
    }

    const { allowed, remaining, resetSec } = checkRateLimit(`api_${ip}`, 30, 60 * 1000);

    if (!allowed) {
      return new NextResponse(
        JSON.stringify({
          error: "Rate limit exceeded. Too many requests. Please try again later.",
          retryAfter: resetSec,
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": resetSec.toString(),
            "X-RateLimit-Limit": "30",
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": resetSec.toString(),
          },
        }
      );
    }

    // Origin check for state-modifying requests
    if (["POST", "PUT", "DELETE", "PATCH"].includes(request.method)) {
      const origin = request.headers.get("origin");
      const host = request.headers.get("host");

      if (origin && host) {
        try {
          const originUrl = new URL(origin);
          const isSameHost = originUrl.host === host;
          const isLocal = originUrl.hostname === "localhost" || originUrl.hostname === "127.0.0.1";

          if (!isSameHost && !isLocal) {
            return new NextResponse(
              JSON.stringify({ error: "Cross-Origin request blocked." }),
              { status: 403, headers: { "Content-Type": "application/json" } }
            );
          }
        } catch {
          return new NextResponse(
            JSON.stringify({ error: "Malformed origin header." }),
            { status: 400, headers: { "Content-Type": "application/json" } }
          );
        }
      }
    }

    const response = NextResponse.next();
    response.headers.set("X-RateLimit-Limit", "30");
    response.headers.set("X-RateLimit-Remaining", remaining.toString());
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/.*).*)",
  ],
};
