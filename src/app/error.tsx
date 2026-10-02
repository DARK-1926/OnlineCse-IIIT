"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home, Mail } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log sanitized error without exposing sensitive internals
    console.error("[APPLICATION_ERROR]", error.digest || error.message);
  }, [error]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-lg w-full text-center bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-rose-100">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-50 text-rose-600 mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <h1 className="text-2xl font-bold text-[#193654] font-grotesk tracking-tight mb-2">
          An Unexpected Error Occurred
        </h1>

        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          Our automated error resilience layer caught an issue while rendering this section. Your session and data remain safe.
        </p>

        {error.digest && (
          <div className="text-[11px] font-mono bg-slate-100 text-slate-500 py-1.5 px-3 rounded-md mb-6 inline-block">
            Incident Reference: {error.digest}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 py-2.5 px-5 bg-[#193654] hover:bg-[#14293f] text-white rounded-lg font-semibold text-sm transition-all cursor-pointer shadow-sm"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 py-2.5 px-5 bg-slate-100 hover:bg-slate-200 text-[#193654] rounded-lg font-medium text-sm transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500">
          Need technical assistance? Reach our admissions tech support at{" "}
          <a
            href="mailto:admissions.cse@iiitdwd.ac.in"
            className="text-[#193654] font-semibold underline"
          >
            admissions.cse@iiitdwd.ac.in
          </a>
        </div>
      </div>
    </main>
  );
}
