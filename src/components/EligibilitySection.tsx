import React from "react";
import { GraduationCap, Percent, Briefcase, CheckCircle2, ShieldCheck } from "lucide-react";

export default function EligibilitySection() {
  return (
    <section id="eligibility" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#193654] font-grotesk tracking-tight">
            Admission Eligibility Guidelines
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto leading-relaxed">
            The M.Tech in CSE program maintains rigorous academic standards while offering flexible hybrid learning schedules for software engineers:
          </p>
        </div>

        {/* 3 Academic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          {/* Card 1: Educational Qualification */}
          <div className="bg-slate-50/70 p-8 rounded-2xl border border-slate-200 shadow-sm text-center hover:border-[#193654] transition-all hover:shadow-md group">
            <div className="w-14 h-14 bg-[#193654] text-[#CCE70B] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:scale-105 transition-transform">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-[#193654] mb-3 font-grotesk">
              Educational Qualification
            </h3>
            <ul className="text-left space-y-2.5 text-xs text-slate-700 font-roboto">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Candidates must be <strong className="text-[#193654]">B.E. / B.Tech / M.Sc / MCA</strong> graduates</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#193654]">B.E. / B.Tech</strong> degree in any engineering discipline</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#193654]">MCA</strong> (Master of Computer Applications)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#193654]">M.Sc</strong> in Computer Science, IT, Mathematics, Statistics, or allied disciplines</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Degrees from AICTE / UGC recognized institutions</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Academic Performance Cutoffs */}
          <div className="bg-slate-50/70 p-8 rounded-2xl border border-slate-200 shadow-sm text-center hover:border-[#193654] transition-all hover:shadow-md group">
            <div className="w-14 h-14 bg-[#193654] text-[#CCE70B] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:scale-105 transition-transform">
              <Percent className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-[#193654] mb-3 font-grotesk">
              Minimum Academic Cutoff
            </h3>
            <ul className="text-left space-y-2.5 text-xs text-slate-700 font-roboto">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#193654]">General / OBC / EWS:</strong> 60% marks or 6.0 CGPA/CPI on 10-point scale</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#193654]">SC / ST / PwD:</strong> 55% marks or 5.5 CGPA/CPI on 10-point scale</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Calculated on aggregate across all years/semesters</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>No GATE score required for admission</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Experience & Candidates Profile */}
          <div className="bg-slate-50/70 p-8 rounded-2xl border border-slate-200 shadow-sm text-center hover:border-[#193654] transition-all hover:shadow-md group">
            <div className="w-14 h-14 bg-[#193654] text-[#CCE70B] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:scale-105 transition-transform">
              <Briefcase className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-[#193654] mb-3 font-grotesk">
              Professional & Fresh Graduates
            </h3>
            <ul className="text-left space-y-2.5 text-xs text-slate-700 font-roboto">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#193654]">Freshers</strong> with qualifying degrees are eligible to apply</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#193654]">Working Professionals</strong> across IT, software, and systems engineering</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Hybrid interactive classes allow study alongside full-time careers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Employer sponsorship letters or self-sponsored tracks accepted</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Alternate Pathway Banner for BCA / B.Sc */}
        <div className="bg-gradient-to-r from-[#193654] to-[#14293f] rounded-2xl p-6 sm:p-8 text-white mb-10 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="inline-block bg-[#CCE70B] text-[#193654] text-[10px] font-bold px-2.5 py-0.5 rounded-full font-mono uppercase tracking-wider mb-1">
                Alternate Pathway
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-grotesk text-white">
                Are you a BCA or B.Sc graduate?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-roboto max-w-2xl">
                Explore our alternate M.Tech pathway designed specifically for BCA and B.Sc graduates seeking advanced postgraduate computing degrees.
              </p>
            </div>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#CCE70B] hover:bg-[#b8d10a] text-[#193654] font-bold text-xs uppercase tracking-wider font-grotesk transition-colors flex-shrink-0 shadow-sm"
            >
              <span>Explore M.Tech for BCA / B.Sc Graduates →</span>
            </a>
          </div>
        </div>

        {/* 4-Step Admission Process */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block mb-1">
              // ADMISSION WORKFLOW
            </span>
            <h3 className="text-xl font-bold text-[#193654] font-grotesk">
              Four-Step Selection & Enrollment Process
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs relative">
              <span className="text-2xl font-extrabold text-[#193654]/20 absolute top-4 right-4 font-mono">01</span>
              <span className="text-[11px] font-bold text-[#8b1c2e] font-mono block mb-1">Step 01</span>
              <h4 className="font-bold text-sm text-[#193654] font-grotesk mb-1">Application Submission</h4>
              <p className="text-xs text-slate-600 font-roboto">Fill the online application form and pay the non-refundable application fee of ₹2,000.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs relative">
              <span className="text-2xl font-extrabold text-[#193654]/20 absolute top-4 right-4 font-mono">02</span>
              <span className="text-[11px] font-bold text-[#8b1c2e] font-mono block mb-1">Step 02</span>
              <h4 className="font-bold text-sm text-[#193654] font-grotesk mb-1">Selection Interview</h4>
              <p className="text-xs text-slate-600 font-roboto">Appear for an online technical evaluation round and panel discussion with faculty.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs relative">
              <span className="text-2xl font-extrabold text-[#193654]/20 absolute top-4 right-4 font-mono">03</span>
              <span className="text-[11px] font-bold text-[#8b1c2e] font-mono block mb-1">Step 03</span>
              <h4 className="font-bold text-sm text-[#193654] font-grotesk mb-1">Offer of Admission</h4>
              <p className="text-xs text-slate-600 font-roboto">Shortlisted candidates receive an official provisional admission offer letter from IIIT Dharwad.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs relative">
              <span className="text-2xl font-extrabold text-[#193654]/20 absolute top-4 right-4 font-mono">04</span>
              <span className="text-[11px] font-bold text-[#8b1c2e] font-mono block mb-1">Step 04</span>
              <h4 className="font-bold text-sm text-[#193654] font-grotesk mb-1">Enrollment & Fee Payment</h4>
              <p className="text-xs text-slate-600 font-roboto">Confirm your seat by paying semester tuition fees or choosing 0% interest EMI options.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
