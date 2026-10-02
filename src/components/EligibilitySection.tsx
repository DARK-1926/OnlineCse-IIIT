"use client";

import React, { useState } from "react";
import { GraduationCap, Percent, Briefcase, CheckCircle2, AlertCircle, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export default function EligibilitySection() {
  const [degree, setDegree] = useState("btech");
  const [score, setScore] = useState("68");
  const [category, setCategory] = useState("general");
  const [experience, setExperience] = useState("2");
  const [targetTrack, setTargetTrack] = useState("aiml");

  const numScore = parseFloat(score) || 0;
  const numExp = parseFloat(experience) || 0;
  const minScore = category === "general" ? 60 : 55;

  // Evaluation logic
  const isDegreeValid = ["btech", "mca", "msc"].includes(degree);
  const isScoreValid = numScore >= minScore;
  const isExpValid = numExp >= 1;

  let statusBadge = {
    title: "100% Eligible for Fast-Track Admission",
    desc: "Your profile fulfills all academic and professional benchmarks for direct Round 2 evaluation.",
    color: "emerald",
  };

  if (!isDegreeValid) {
    statusBadge = {
      title: "Academic Committee Equivalence Review Required",
      desc: "Graduates of non-standard computational degrees require prerequisite coursework verification.",
      color: "amber",
    };
  } else if (!isScoreValid) {
    statusBadge = {
      title: "Minimum Score Variance",
      desc: `The standard cutoff for your category is ${minScore}% aggregate. You may submit extra portfolio projects for special consideration.`,
      color: "rose",
    };
  } else if (!isExpValid) {
    statusBadge = {
      title: "Experience Threshold Notice",
      desc: "Executive M.Tech candidates typically require 1+ year of technical work experience by the cohort start date.",
      color: "amber",
    };
  }

  return (
    <section id="eligibility" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-blue-100/80 text-blue-900 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
            <span>Official Criteria & Requirements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#193654] font-grotesk tracking-tight">
            Admission Eligibility Guidelines
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto leading-relaxed">
            The Executive M.Tech program maintains rigorous academic standards while offering executive flexibility for software engineers:
          </p>
        </div>

        {/* 3 Academic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          
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
                <span><strong className="text-[#193654]">B.Tech / B.E.</strong> degree in any engineering discipline</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#193654]">MCA</strong> (Master of Computer Applications)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#193654]">M.Sc</strong> in Computer Science, IT, Mathematics, or Data Science</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Academic Performance */}
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
                <span><strong className="text-[#193654]">General / OBC / EWS:</strong> 60% marks or 6.5 CGPA on 10-point scale</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#193654]">SC / ST / PwD:</strong> 55% marks or 6.0 CGPA on 10-point scale</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>AICTE / UGC approved university degrees or AIU equivalence</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Professional Experience */}
          <div className="bg-slate-50/70 p-8 rounded-2xl border border-slate-200 shadow-sm text-center hover:border-[#193654] transition-all hover:shadow-md group">
            <div className="w-14 h-14 bg-[#193654] text-[#CCE70B] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:scale-105 transition-transform">
              <Briefcase className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-[#193654] mb-3 font-grotesk">
              Work Experience Criteria
            </h3>
            <ul className="text-left space-y-2.5 text-xs text-slate-700 font-roboto">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Minimum <strong className="text-[#193654]">1 Year</strong> of relevant software or IT engineering experience</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Computed as on the registration cutoff date</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>No objection certificate (NOC) or sponsorship letter accepted</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Interactive Eligibility Evaluator */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50/40 p-7 sm:p-10 rounded-3xl border border-slate-200 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-1.5 bg-[#CCE70B]/25 text-[#193654] border border-[#CCE70B]/50 text-[10px] font-bold px-3 py-1 rounded-full font-mono uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#193654]" />
                <span>15-Second Profile Evaluator</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#193654] font-grotesk">
                Evaluate Your Profile for Cohort 2026
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-roboto">
                Select your credentials below to see your real-time eligibility standing:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1 font-grotesk">
                  Undergrad Degree
                </label>
                <select
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-blue-500/15 font-roboto shadow-2xs"
                >
                  <option value="btech">B.Tech / B.E. (Any Branch)</option>
                  <option value="mca">MCA (Master of Computer App.)</option>
                  <option value="msc">M.Sc (CS / IT / Maths)</option>
                  <option value="other">Other Technical Degree</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1 font-grotesk">
                  Aggregate Percentage (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-blue-500/15 font-roboto shadow-2xs"
                  placeholder="e.g. 68"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1 font-grotesk">
                  Reservation Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-blue-500/15 font-roboto shadow-2xs"
                >
                  <option value="general">General / OBC / EWS (Min 60%)</option>
                  <option value="reserved">SC / ST / PwD (Min 55%)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1 font-grotesk">
                  Relevant Experience
                </label>
                <input
                  type="number"
                  min="0"
                  max="30"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-blue-500/15 font-roboto shadow-2xs"
                  placeholder="Years"
                />
              </div>
            </div>

            {/* Dynamic Result Card */}
            <div className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row items-center justify-between gap-5 ${
              statusBadge.color === "emerald"
                ? "bg-emerald-50/90 border-emerald-300 text-emerald-950 shadow-sm"
                : statusBadge.color === "amber"
                ? "bg-amber-50/90 border-amber-300 text-amber-950 shadow-sm"
                : "bg-rose-50/90 border-rose-300 text-rose-950 shadow-sm"
            }`}>
              <div className="flex items-start gap-3.5">
                {statusBadge.color === "emerald" ? (
                  <CheckCircle2 className="w-7 h-7 text-emerald-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-7 h-7 text-amber-600 flex-shrink-0 mt-0.5" />
                )}
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base font-bold font-grotesk tracking-tight">
                    {statusBadge.title}
                  </h4>
                  <p className="text-xs opacity-90 font-roboto leading-relaxed max-w-xl">
                    {statusBadge.desc}
                  </p>
                </div>
              </div>

              <a
                href="#lead-form"
                className="px-6 py-3 bg-[#193654] hover:bg-[#14293f] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all whitespace-nowrap font-grotesk shadow-md hover:shadow-lg flex items-center gap-1.5"
              >
                <span>Proceed with Application</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#CCE70B]" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
