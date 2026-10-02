import React from "react";
import { Clock, IndianRupee, Laptop, Award } from "lucide-react";

export default function ProgramOverview() {
  const specs = [
    {
      icon: Clock,
      label: "Course Duration",
      value: "2 years (Online + Campus Immersion)",
    },
    {
      icon: IndianRupee,
      label: "Semester Fees",
      value: "₹ 88,500 (Easy EMI options Available)",
    },
    {
      icon: Laptop,
      label: "Program Start Date",
      value: "1st May 2026",
    },
    {
      icon: Award,
      label: "Total Credit",
      value: "60 Credits (UGC Recognized)",
    },
  ];

  return (
    <section id="overview" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Academic Overview Narrative */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block">
              // PROGRAM ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#193654] tracking-tight font-grotesk">
              M.Tech in Computer Science & Engineering
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-roboto pt-2">
              The M.Tech in Computer Science & Engineering is a two-year postgraduate programme designed to strengthen advanced computing foundations, software engineering expertise, and research-oriented problem-solving skills.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-roboto">
              The programme combines core computer science theory, advanced computing laboratories, research methodology, and industry-aligned projects to prepare learners for complex technical and research-driven roles across the technology ecosystem. Through a structured elective framework, learners gain exposure to emerging computing domains, enabling them to tailor their learning while graduating with an esteemed degree from an Institute of National Importance.
            </p>
          </div>

          {/* Right Column: 4 Educational Feature Cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 border border-slate-200 rounded-lg bg-[#f9f9ff] flex items-center gap-4 hover:border-slate-300 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#193654] text-[#CCE70B] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium font-roboto">
                        {item.label}
                      </div>
                      <div className="text-sm font-bold text-[#193654] mt-0.5 font-grotesk">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
