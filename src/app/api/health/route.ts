import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const uptime = process.uptime();
  const memoryUsage = process.memoryUsage();

  return NextResponse.json(
    {
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(uptime),
      environment: process.env.NODE_ENV || "development",
      memory: {
        rssMb: Math.round(memoryUsage.rss / 1024 / 1024),
        heapUsedMb: Math.round(memoryUsage.heapUsed / 1024 / 1024),
      },
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}
