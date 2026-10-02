"use client";

import React from "react";
import Image from "next/image";
import InquiryForm from "./InquiryForm";
import { ArrowRight, FileDown, Calendar } from "lucide-react";

interface HeroSectionProps {
  onOpenBrochureModal?: () => void;
}

export default function HeroSection({ onOpenBrochureModal }: HeroSectionProps) {
  return (
    <section className="relative bg-[#14293f] text-white overflow-hidden border-b border-slate-800">
      {/* Background Campus Image with Deep Navy Institutional Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/campus_building_hero.jpg"
          alt="IIIT Dharwad 60-Acre Campus & Research Building"
          fill
          priority
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14293f] via-[#14293f]/95 to-[#193654]/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Clean Academic Presentation */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Authentic Institutional Header Tag */}
            <div className="inline-flex items-center gap-2.5 text-xs font-medium text-slate-300 border-l-2 border-[#CCE70B] pl-3 py-0.5">
              <span className="font-semibold text-white tracking-wide">IIIT Dharwad</span>
              <span className="text-slate-500">•</span>
              <span>Centre for Continuing Education</span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-tight font-grotesk">
                Executive M.Tech in Computer Science & Engineering
              </h1>
              <p className="text-sm sm:text-base font-medium text-[#CCE70B] font-roboto">
                Specializations in Artificial Intelligence & ML, Cloud Systems & DevOps, and Cybersecurity
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-roboto pt-1 max-w-2xl">
                A two-year Master of Technology degree tailored for working software engineers and technology leaders. Build deep systems expertise through live weekend faculty sessions and an on-campus laboratory residency at IIIT Dharwad.
              </p>
            </div>

            {/* Editorial Metric Strip - Clean & Uncluttered */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-5 border-y border-white/15">
              <div>
                <div className="text-2xl font-bold text-white font-grotesk">2 Years</div>
                <div className="text-xs text-slate-300 mt-0.5">4 Semesters (60 Credits)</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#CCE70B] font-grotesk">₹ 88,500</div>
                <div className="text-xs text-slate-300 mt-0.5">Per Semester • 0% EMI</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-grotesk">Weekend</div>
                <div className="text-xs text-slate-300 mt-0.5">Live Interactive Lectures</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-grotesk">7 Days</div>
                <div className="text-xs text-slate-300 mt-0.5">Campus Lab Immersion</div>
              </div>
            </div>

            {/* Next Cohort Notice & Action CTAs */}
            <div className="space-y-4 pt-1">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-roboto">
                <Calendar className="w-4 h-4 text-[#CCE70B] flex-shrink-0" />
                <span>
                  Autumn 2026 Batch Admissions Open • Round 2 Applications close <strong className="text-white">April 30, 2026</strong>
                </span>
              </div>

              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href="#lead-form"
                  className="px-6 py-3.5 bg-[#CCE70B] hover:bg-[#b8d109] text-[#193654] font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-sm hover:shadow-md flex items-center gap-2 font-grotesk"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="w-4 h-4 text-[#193654]" />
                </a>

                <button
                  type="button"
                  onClick={onOpenBrochureModal}
                  className="px-6 py-3.5 bg-white/5 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider rounded-lg border border-white/30 transition-all cursor-pointer flex items-center gap-2 font-grotesk"
                >
                  <FileDown className="w-4 h-4 text-[#CCE70B]" />
                  <span>Download Curriculum</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Refined Application & Inquiry Card */}
          <div className="lg:col-span-5">
            <InquiryForm />
          </div>

        </div>
      </div>
    </section>
  );
}
