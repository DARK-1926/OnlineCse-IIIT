import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent clickjacking by forbidding embedding this site in external frames
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Prevent MIME-sniffing attacks
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Referrer Policy: Send full URL for same-origin, domain-only for cross-origin HTTPS
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Restrict browser features & APIs while allowing YouTube fullscreen & Maps geolocation
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self \"https://maps.google.com\" \"https://www.google.com\"), browsing-topics=(), payment=(), fullscreen=*",
  },
  // HTTP Strict Transport Security (HSTS): 2 years + subdomains + preload
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Enable XSS filtering built into modern browsers
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // Disable DNS prefetching to protect privacy
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // Cross-Origin policies
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin-allow-popups",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "cross-origin",
  },
  // Content Security Policy - Allows YouTube embeds, Google Maps embeds, and necessary CDNs
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com https://www.youtube.com https://s.ytimg.com https://maps.googleapis.com https://maps.google.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://onlinecse.iiitdwd.ac.in https://images.unsplash.com https://i.ytimg.com https://*.ytimg.com https://*.google.com https://*.googleapis.com https://*.gstatic.com https://maps.gstatic.com",
      "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com https://maps.google.com https://maps.googleapis.com",
      "connect-src 'self' https://www.youtube.com https://*.google.com https://*.googleapis.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Disable the X-Powered-By header to prevent server identification
  poweredByHeader: false,
  // Enable gzip/brotli compression
  compress: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "onlinecse.iiitdwd.ac.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Aggressive caching for static assets
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Prevent caching on API endpoints
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
