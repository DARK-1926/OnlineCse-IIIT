"use client";

import React from "react";
import { CheckCircle2, ArrowRight, IndianRupee, ShieldCheck, GraduationCap, Clock } from "lucide-react";

export default function FeeAndEmiSection() {
  return (
    <section id="fees" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#193654] font-grotesk tracking-tight">
            Tuition Schedule & Fee Breakdown
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto leading-relaxed">
            Transparent institutional tuition schedule with zero hidden costs. Pay per semester with flexible payment plans and educational loan facilitation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Fee Structure & Schedule */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-100 pb-5">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block font-mono">
                    Semester Tuition Fee
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#193654] font-grotesk">
                      ₹ 1,10,625
                    </span>
                    <span className="text-xs text-slate-500 font-medium font-roboto">
                      / semester (4 Semesters)
                    </span>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-[11px] text-slate-400 font-mono uppercase block">Total Program Fee</span>
                  <span className="text-base font-bold text-emerald-700 font-grotesk">₹ 4,42,500 (₹4.425 Lakhs)</span>
                  <span className="text-[10px] text-slate-500 block font-mono">App Fee: ₹2,000 (Non-refundable)</span>
                </div>
              </div>

              {/* Fee Schedule Summary Table */}
              <div className="space-y-2.5">
                <h4 className="font-bold text-[#193654] text-xs uppercase tracking-wider font-mono">
                  Installment Schedule Breakdown
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs font-roboto">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">Semester 1</span>
                    <span className="font-bold text-[#193654] text-sm font-grotesk">₹ 1,10,625</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">At Admission Confirmation</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">Semester 2</span>
                    <span className="font-bold text-[#193654] text-sm font-grotesk">₹ 1,10,625</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Start of Semester 2</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">Semester 3</span>
                    <span className="font-bold text-[#193654] text-sm font-grotesk">₹ 1,10,625</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Start of Year 2 / Sem 3</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">Semester 4</span>
                    <span className="font-bold text-[#193654] text-sm font-grotesk">₹ 1,10,625</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Start of Semester 4</span>
                  </div>
                </div>
              </div>

              {/* Attendance Requirement Callout */}
              <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200/80 text-xs text-amber-900 space-y-1 font-roboto">
                <div className="flex items-center gap-1.5 font-bold font-grotesk text-amber-950">
                  <Clock className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>Semester Attendance Requirement (Mandatory 75%)</span>
                </div>
                <p className="leading-relaxed text-[11px] text-amber-900/90 pl-5.5">
                  Students are required to maintain a minimum of 75% attendance each semester — 60% through synchronous live hybrid lectures and 15% through asynchronous recorded sessions and labs.
                </p>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 border-t border-slate-100 pt-3 font-mono">
              *Tuition fee is payable semester-wise prior to term registration.
            </div>
          </div>

          {/* Right Column: Inclusions & Benefits */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block font-mono mb-1">
                  Comprehensive Inclusions
                </span>
                <h3 className="text-lg font-bold text-[#193654] font-grotesk">
                  What is 100% Included in the Program Fee
                </h3>
              </div>

              <div className="space-y-3 text-xs text-slate-700 font-roboto">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#193654] block font-grotesk">Interactive Live Sessions & Course Materials:</strong>
                    Live lectures, faculty discussions, Q&A sessions, and complete access to recorded lecture archives.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#193654] block font-grotesk">Hands-On Campus Immersion:</strong>
                    7-day on-campus immersion at IIIT Dharwad for lab sessions, faculty interactions, and peer networking.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#193654] block font-grotesk">Experiential Projects & Academic Mentorship:</strong>
                    Continuous assessment, programming assignments, and 30-credit dissertation project evaluation by faculty.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#193654] block font-grotesk">Convocation & IIIT Dharwad Alumni Status:</strong>
                    Official institute degree scroll, official Institute Email ID, library access, and lifelong alumni network privileges.
                  </div>
                </div>
              </div>

              {/* Tax Relief & Corporate Sponsorship Note */}
              <div className="bg-gradient-to-br from-blue-50/70 to-indigo-50/50 p-4 rounded-xl border border-blue-100 space-y-1.5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-700 flex-shrink-0" />
                  <span className="text-xs font-bold text-[#193654] font-grotesk">
                    Income Tax Benefit (Section 80E) & Corporate L&D
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-roboto pl-6">
                  Education loans taken for higher studies under Section 80E enjoy <strong className="text-[#193654]">100% interest tax deduction</strong> for up to 8 years. Corporate sponsorship invoices with GST credentials are provided for employer learning allowances.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#lead-form"
                className="w-full py-3.5 bg-[#193654] hover:bg-[#14293f] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 font-grotesk shadow-md hover:shadow-lg"
              >
                <span>Proceed with Application / Inquire for Admission</span>
                <ArrowRight className="w-4 h-4 text-[#CCE70B]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
