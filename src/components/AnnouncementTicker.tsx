import React from "react";
import { Megaphone } from "lucide-react";

export default function AnnouncementTicker() {
  const announcements = [
    { highlight: "Admissions Open 2026:", text: "Hybrid mode M.Tech in CSE (AI & ML, Cloud Computing, Cybersecurity)." },
    { highlight: "Application Deadline:", text: "Round 2 Applications & Technical Evaluations close on 30th April 2026." },
    { highlight: "Hybrid Format:", text: "Live Interactive Weekend Masterclasses & 7-Day Campus Lab Immersion." },
    { highlight: "Campus Immersion:", text: "7-Day Residential Hands-On Lab Work at IIIT Dharwad 60-Acre Campus Included." },
  ];

  return (
    <div className="w-full bg-[#193654] text-white border-y border-[#CCE70B]/30 relative z-20 overflow-hidden shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center px-4 py-2">
        <div className="flex-shrink-0 flex items-center gap-1.5 bg-[#CCE70B] text-[#193654] text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mr-4 shadow-xs">
          <Megaphone className="w-3.5 h-3.5" />
          <span>Notice</span>
        </div>

        <div className="overflow-hidden whitespace-nowrap w-full">
          <div className="ticker-track flex gap-12 items-center text-xs sm:text-sm font-medium text-slate-100">
            {announcements.map((item, idx) => (
              <span key={`a-${idx}`} className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCE70B]"></span>
                <span className="font-bold text-[#CCE70B]">{item.highlight}</span>
                <span>{item.text}</span>
              </span>
            ))}
            {announcements.map((item, idx) => (
              <span key={`b-${idx}`} className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCE70B]"></span>
                <span className="font-bold text-[#CCE70B]">{item.highlight}</span>
                <span>{item.text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
