"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  SpecializationCurriculum 
} from "@/data/curriculum";
import { 
  ArrowLeft,
  BookOpen,
  Terminal
} from "lucide-react";
import InquiryForm from "./InquiryForm";
import FeeAndEmiSection from "./FeeAndEmiSection";

interface SpecializationDetailViewProps {
  data: SpecializationCurriculum;
}

export default function SpecializationDetailView({ data }: SpecializationDetailViewProps) {
  const [openSemester, setOpenSemester] = useState<string>("Semester 1");

  const imageMap: Record<string, string> = {
    aiml: "/images/aiml_specialization.jpg",
    "cloud-computing": "/images/cloud_specialization.jpg",
    cybersecurity: "/images/cyber_specialization.jpg",
  };

  const currentImage = imageMap[data.id] || "/images/campus_building_hero.jpg";

  return (
    <div className="bg-[#f9f9ff] min-h-screen">
      {/* Human Institutional Header with Campus/Lab Image Backdrop */}
      <section className="relative bg-[#14293f] text-white py-12 lg:py-16 overflow-hidden border-b border-[#193654]">
        <div className="absolute inset-0 z-0">
          <Image
            src={currentImage}
            alt={data.name}
            fill
            priority
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14293f] via-[#14293f]/95 to-[#193654]/85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link 
              href="/#specializations" 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-[#CCE70B] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all Specializations</span>
            </Link>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="inline-block bg-[#CCE70B]/15 text-[#CCE70B] border border-[#CCE70B]/30 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
              M.Tech in Computer Science & Engineering
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-grotesk">
              Specialization in {data.shortName}
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed font-roboto">
              {data.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs">
              <div className="bg-[#193654]/90 p-3 rounded border border-slate-700">
                <span className="text-slate-400 block text-[11px]">Duration</span>
                <span className="font-bold text-white">2 Years (4 Terms)</span>
              </div>
              <div className="bg-[#193654]/90 p-3 rounded border border-slate-700">
                <span className="text-slate-400 block text-[11px]">Total Credits</span>
                <span className="font-bold text-[#CCE70B]">60 Credits</span>
              </div>
              <div className="bg-[#193654]/90 p-3 rounded border border-slate-700">
                <span className="text-slate-400 block text-[11px]">Delivery</span>
                <span className="font-bold text-white">Weekend Live</span>
              </div>
              <div className="bg-[#193654]/90 p-3 rounded border border-slate-700">
                <span className="text-slate-400 block text-[11px]">Campus Immersion</span>
                <span className="font-bold text-white">7 Days Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 8 Columns: Curriculum Breakdown */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Specialization Overview Description */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
                <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block">
                  // CURRICULUM BLUEPRINT
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#193654] font-grotesk">
                  Specialization Overview & Competency Framework
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-roboto">
                  Designed in collaboration with engineering leadership from leading cloud providers and tier-one AI research labs, the {data.name} curriculum combines mathematical rigour with extensive hands-on laboratory exercises.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#f9f9ff] rounded-lg border border-slate-200">
                    <div className="flex items-center gap-2 font-bold text-xs text-[#193654] mb-1 font-grotesk">
                      <Terminal className="w-4 h-4 text-[#8b1c2e]" />
                      <span>Applied Lab Sandbox</span>
                    </div>
                    <p className="text-xs text-slate-500 font-roboto">
                      Full access to remote GPU compute clusters, containerized testbeds, and vulnerability testing environments.
                    </p>
                  </div>

                  <div className="p-4 bg-[#f9f9ff] rounded-lg border border-slate-200">
                    <div className="flex items-center gap-2 font-bold text-xs text-[#193654] mb-1 font-grotesk">
                      <BookOpen className="w-4 h-4 text-[#8b1c2e]" />
                      <span>Capstone Dissertation</span>
                    </div>
                    <p className="text-xs text-slate-500 font-roboto">
                      16-credit final-year industry or academic research project guided directly by IIIT Dharwad faculty advisors.
                    </p>
                  </div>
                </div>
              </div>

              {/* Semester-Wise Tab Accordions */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#193654] font-grotesk">
                      Course Structure by Term
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 font-roboto">
                      Click each term to view unit-by-unit syllabus breakdowns and credit weighting.
                    </p>
                  </div>
                </div>

                {/* Term Selectors */}
                <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-4">
                  {data.semesters.map((sem) => (
                    <button
                      key={sem.semester}
                      type="button"
                      onClick={() => setOpenSemester(sem.semester)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer font-grotesk ${
                        openSemester === sem.semester
                          ? "bg-[#193654] text-[#CCE70B] shadow-xs"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      <span>{sem.semester}</span>
                    </button>
                  ))}
                </div>

                {/* Active Semester Courses */}
                {data.semesters
                  .filter((s) => s.semester === openSemester)
                  .map((sem) => (
                    <div key={sem.semester} className="space-y-4">
                      {sem.courses.map((course, idx) => (
                        <div
                          key={idx}
                          className="border border-slate-200 rounded-lg p-5 bg-[#f9f9ff] hover:border-slate-300 transition-colors"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                            <div>
                              <span className="text-[11px] font-mono text-[#8b1c2e] font-bold block">
                                {course.type}
                              </span>
                              <h4 className="text-sm sm:text-base font-bold text-[#193654] font-grotesk">
                                {course.name}
                              </h4>
                            </div>
                            <span className="text-xs font-semibold bg-white border border-slate-200 text-[#193654] px-2.5 py-1 rounded font-mono self-start sm:self-center">
                              {course.credits} Credits
                            </span>
                          </div>

                          <div className="text-xs text-slate-600 space-y-1.5 pt-2 border-t border-slate-200 font-roboto">
                            <span className="font-semibold text-slate-700 block font-grotesk">Key Topics & Modules:</span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                              {course.units.map((unit, i) => (
                                <div key={i} className="flex items-start gap-1.5">
                                  <span className="text-[#8b1c2e] font-bold leading-none mt-1">•</span>
                                  <span>{unit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>

              {/* Academic Rigor & Grading Structure */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-3">
                <h3 className="text-lg font-bold text-[#193654] font-grotesk">
                  Continuous Assessment & Academic Rigour
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-roboto">
                  To ensure the highest academic integrity synonymous with an Institute of National Importance, performance is evaluated through continuous internal assessments (quizzes, coding labs, architectural design assignments) and proctored end-term examinations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 bg-slate-50 rounded border border-slate-200">
                    <span className="text-base font-bold text-[#193654] block font-grotesk">40% Continuous Internal</span>
                    <span className="text-xs text-slate-500 font-roboto">Assignments, bi-weekly quizzes, and live coding labs.</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded border border-slate-200">
                    <span className="text-base font-bold text-[#193654] block font-grotesk">60% Term-End Evaluation</span>
                    <span className="text-xs text-slate-500 font-roboto">Comprehensive proctored examinations & capstone defense.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right 4 Columns: Sticky Lead Form & Summary */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Form Widget */}
              <div className="sticky top-28 space-y-6">
                <InquiryForm />

                {/* Quick Academic Contacts */}
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs space-y-3">
                  <h4 className="text-xs font-bold text-[#193654] uppercase tracking-wider font-grotesk">
                    Have Questions on this Track?
                  </h4>
                  <p className="text-xs text-slate-500 font-roboto">
                    Speak directly to our technical counselor or coordinate an eligibility evaluation.
                  </p>
                  <div className="text-xs space-y-2 pt-1 font-roboto">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Helpline</span>
                      <a href="tel:9240215087" className="font-bold text-[#193654] hover:text-[#8b1c2e]">
                        +91 92402 15087
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Admissions Email</span>
                      <a href="mailto:admissions.cse@iiitdwd.ac.in" className="font-semibold text-[#193654] hover:text-[#8b1c2e]">
                        admissions.cse@iiitdwd.ac.in
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Program Fee Section for this Specialization */}
      <FeeAndEmiSection />
    </div>
  );
}
