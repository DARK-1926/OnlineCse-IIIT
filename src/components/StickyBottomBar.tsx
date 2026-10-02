"use client";

import React from "react";
import { FileDown, GraduationCap } from "lucide-react";

interface StickyBottomBarProps {
  onOpenBrochureModal?: () => void;
}

export default function StickyBottomBar({ onOpenBrochureModal }: StickyBottomBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-3 sm:hidden shadow-lg flex items-center gap-2">
      <button
        type="button"
        onClick={onOpenBrochureModal}
        className="flex-1 py-2.5 px-3 rounded border-2 border-[#193654] text-[#193654] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 font-grotesk"
      >
        <FileDown className="w-3.5 h-3.5" />
        <span>Brochure</span>
      </button>

      <a
        href="#lead-form"
        className="flex-1 py-2.5 px-3 rounded bg-[#193654] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm font-grotesk"
      >
        <GraduationCap className="w-3.5 h-3.5 text-[#CCE70B]" />
        <span>Apply Now</span>
      </a>
    </div>
  );
}
