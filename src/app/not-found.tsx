import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, BookOpen, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-200">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 text-[#193654] font-black text-3xl font-mono mb-6 border border-blue-100">
          404
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-bold text-[#193654] font-grotesk tracking-tight mb-3">
          Page Not Found
        </h1>
        
        <p className="text-sm text-slate-600 mb-8 leading-relaxed">
          The requested academic portal page could not be located. It may have been moved, updated, or temporarily unavailable.
        </p>

        <div className="space-y-3">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#193654] hover:bg-[#14293f] text-white rounded-lg font-semibold text-sm transition-all shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/curriculum"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-[#193654] rounded-lg font-medium text-sm transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>View M.Tech Curriculum</span>
          </Link>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 w-full py-2 px-4 text-slate-600 hover:text-[#193654] text-xs transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Contact Admissions Helpdesk</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
