"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  aimlCurriculum,
  specializationsList,
  masterCourseStructure,
  aimlIndicativeCourses,
  cyberIndicativeCourses,
  cloudIndicativeCourses,
} from "@/data/curriculum";
import InquiryForm from "@/components/InquiryForm";
import {
  BookOpen,
  Award,
  Layers,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Cloud,
  Cpu,
  ChevronRight,
  Info,
} from "lucide-react";

export default function MasterCurriculumPage() {
  const [activeMainTab, setActiveMainTab] = useState<"structure" | "electives" | "detailed">("structure");
  const [selectedTrack, setSelectedTrack] = useState<string>("aiml");
  const [openSemester, setOpenSemester] = useState<string>("Semester 1");

  const currentTrack =
    specializationsList.find((s) => s.id === selectedTrack) || aimlCurriculum;

  const currentIndicativeList =
    selectedTrack === "aiml"
      ? aimlIndicativeCourses
      : selectedTrack === "cybersecurity"
      ? cyberIndicativeCourses
      : cloudIndicativeCourses;

  return (
    <div className="bg-[#f9f9ff] min-h-screen">
      {/* Page Header */}
      <section className="bg-[#14293f] text-white py-14 border-b border-[#193654]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="bg-[#CCE70B]/15 text-[#CCE70B] border border-[#CCE70B]/30 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block font-mono">
              Official Academic Framework
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-grotesk tracking-tight">
              M.Tech in CSE Course Structure
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed font-roboto">
              Indian Institute of Information Technology Dharwad (Institute of National Importance). A comprehensive 60-credit postgraduate program across 4 semesters integrating Discipline Cores, Master’s Research Core, Specialization Electives, and a 30-credit four-phase Project sequence.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
                <Award className="w-3.5 h-3.5 text-[#CCE70B]" />
                60 Total Credits
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
                <Layers className="w-3.5 h-3.5 text-[#CCE70B]" />
                4 Semesters (15 Cr / Sem)
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
                <GraduationCap className="w-3.5 h-3.5 text-[#CCE70B]" />
                3 In-Demand Specializations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 8 Columns */}
            <div className="lg:col-span-8 space-y-8">

              {/* View Switcher Tabs */}
              <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveMainTab("structure")}
                  className={`flex-1 min-w-[200px] py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center font-grotesk flex items-center justify-center gap-2 ${
                    activeMainTab === "structure"
                      ? "bg-[#193654] text-[#CCE70B] shadow-xs"
                      : "bg-[#f9f9ff] text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>Overall Course Structure</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveMainTab("electives")}
                  className={`flex-1 min-w-[200px] py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center font-grotesk flex items-center justify-center gap-2 ${
                    activeMainTab === "electives"
                      ? "bg-[#193654] text-[#CCE70B] shadow-xs"
                      : "bg-[#f9f9ff] text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Specialization Elective Lists</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveMainTab("detailed")}
                  className={`flex-1 min-w-[200px] py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center font-grotesk flex items-center justify-center gap-2 ${
                    activeMainTab === "detailed"
                      ? "bg-[#193654] text-[#CCE70B] shadow-xs"
                      : "bg-[#f9f9ff] text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Detailed Syllabus Units</span>
                </button>
              </div>

              {/* VIEW 1: OVERALL COURSE STRUCTURE TABLE (PAGE 1 OF DOCUMENT) */}
              {activeMainTab === "structure" && (
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                      <div>
                        <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block">
                          // OFFICIAL ACADEMIC CURRICULUM
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#193654] font-grotesk">
                          M.Tech in CSE Course Structure
                        </h2>
                      </div>
                      <span className="text-xs font-bold font-mono bg-[#193654] text-[#CCE70B] px-3 py-1.5 rounded self-start sm:self-center">
                        Total Credits: 60
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 font-roboto leading-relaxed">
                      The official curriculum prescribed by IIIT Dharwad. Each semester contains exactly <strong>15 Credits</strong>, totaling 60 credits for the degree award.
                    </p>

                    {/* Semester-by-Semester Tables */}
                    <div className="space-y-8 pt-2">
                      {masterCourseStructure.map((sem) => (
                        <div
                          key={sem.semester}
                          className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs"
                        >
                          {/* Semester Bar */}
                          <div className="bg-[#193654] text-white px-5 py-3 flex items-center justify-between">
                            <span className="font-bold text-sm sm:text-base font-grotesk text-[#CCE70B] tracking-wide">
                              {sem.semester}
                            </span>
                            <span className="text-xs font-mono font-semibold bg-white/10 px-2.5 py-0.5 rounded">
                              Total: {sem.totalCredits} Credits
                            </span>
                          </div>

                          {/* Table */}
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs font-roboto">
                              <thead className="bg-slate-100 text-slate-700 font-grotesk font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                                <tr>
                                  <th className="py-2.5 px-4 w-12 text-center">Sl. No.</th>
                                  <th className="py-2.5 px-4 w-28">Course Code</th>
                                  <th className="py-2.5 px-4">Course Names</th>
                                  <th className="py-2.5 px-4 w-20 text-center">Credit</th>
                                  <th className="py-2.5 px-4 w-36">Type</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100">
                                {sem.courses.map((c) => (
                                  <tr
                                    key={c.code + c.name}
                                    className="hover:bg-slate-50 transition-colors"
                                  >
                                    <td className="py-3 px-4 text-center text-slate-500 font-mono">
                                      {c.slNo}
                                    </td>
                                    <td className="py-3 px-4 font-mono font-bold text-[#193654]">
                                      {c.code}
                                    </td>
                                    <td className="py-3 px-4 text-slate-800 font-medium">
                                      <div>
                                        <span className="text-slate-900 font-semibold">{c.name}</span>
                                        {c.note && (
                                          <span className="block text-[11px] text-[#8b1c2e] font-mono mt-0.5">
                                            ({c.note})
                                          </span>
                                        )}
                                      </div>
                                    </td>
                                    <td className="py-3 px-4 text-center font-mono font-bold text-[#193654]">
                                      {c.credits}
                                    </td>
                                    <td className="py-3 px-4">
                                      <span
                                        className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                                          c.type === "Discipline Core"
                                            ? "bg-blue-50 text-blue-800 border border-blue-200"
                                            : c.type === "Master's Core"
                                            ? "bg-purple-50 text-purple-800 border border-purple-200"
                                            : c.type === "Elective"
                                            ? "bg-amber-50 text-amber-800 border border-amber-200"
                                            : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                                        }`}
                                      >
                                        {c.type}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Total Credits Summary Card */}
                    <div className="bg-[#14293f] text-white p-6 rounded-xl border border-slate-700/60 shadow-md mt-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                        <div className="space-y-1">
                          <span className="text-xs text-slate-300 font-mono uppercase tracking-wider block">
                            Graduation Requirement
                          </span>
                          <div className="text-xl sm:text-2xl font-bold font-grotesk text-white flex items-center gap-2">
                            <span>Total Degree Credits:</span>
                            <span className="text-[#CCE70B] font-mono">60 Credits</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
                          <div className="px-3.5 py-2 bg-white/10 border border-white/15 rounded-lg text-center">
                            <span className="text-slate-300 block text-[11px]">Sem 1</span>
                            <span className="font-bold text-white text-sm">15 Cr</span>
                          </div>
                          <div className="px-3.5 py-2 bg-white/10 border border-white/15 rounded-lg text-center">
                            <span className="text-slate-300 block text-[11px]">Sem 2</span>
                            <span className="font-bold text-white text-sm">15 Cr</span>
                          </div>
                          <div className="px-3.5 py-2 bg-white/10 border border-white/15 rounded-lg text-center">
                            <span className="text-slate-300 block text-[11px]">Sem 3</span>
                            <span className="font-bold text-white text-sm">15 Cr</span>
                          </div>
                          <div className="px-3.5 py-2 bg-white/10 border border-white/15 rounded-lg text-center">
                            <span className="text-slate-300 block text-[11px]">Sem 4</span>
                            <span className="font-bold text-white text-sm">15 Cr</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 2: SPECIALISATION-WISE INDICATIVE COURSES (PAGE 2 OF DOCUMENT) */}
              {activeMainTab === "electives" && (
                <div className="space-y-6">
                  {/* Track Selection Switcher */}
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs flex flex-wrap gap-2">
                    {specializationsList.map((track) => (
                      <button
                        key={track.id}
                        type="button"
                        onClick={() => setSelectedTrack(track.id)}
                        className={`flex-1 min-w-[180px] py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center font-grotesk ${
                          selectedTrack === track.id
                            ? "bg-[#193654] text-[#CCE70B] shadow-xs"
                            : "bg-[#f9f9ff] text-slate-700 hover:bg-slate-100 border border-slate-200"
                        }`}
                      >
                        {track.shortName}
                      </button>
                    ))}
                  </div>

                  {/* Indicative Courses Card */}
                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                      <div>
                        <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block">
                          // SPECIALISATION-WISE INDICATIVE LIST OF COURSES
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#193654] font-grotesk">
                          {currentTrack.shortName}
                        </h2>
                      </div>
                      <span className="text-xs font-mono font-semibold bg-[#193654] text-[#CCE70B] px-3 py-1.5 rounded self-start sm:self-center">
                        {currentIndicativeList.length} Indicative Courses
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 font-roboto leading-relaxed">
                      Learners choose their specialization electives from this indicative basket across Semesters 1, 2, 3, and 4 to fulfill the elective credit requirement.
                    </p>

                    {/* Table */}
                    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs mt-4">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs font-roboto">
                          <thead className="bg-[#193654] text-white font-grotesk font-bold uppercase tracking-wider text-[11px]">
                            <tr>
                              <th className="py-3 px-4 w-14 text-center">Sl. No.</th>
                              <th className="py-3 px-4 w-28">Course Code</th>
                              <th className="py-3 px-4">Course Title</th>
                              <th className="py-3 px-4 w-20 text-center">Credit</th>
                              <th className="py-3 px-4 w-28 text-center">Tent. Sem</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {currentIndicativeList.map((course) => (
                              <tr
                                key={course.slNo + course.title}
                                className="hover:bg-slate-50 transition-colors"
                              >
                                <td className="py-3.5 px-4 text-center text-slate-500 font-mono font-semibold">
                                  {course.slNo}
                                </td>
                                <td className="py-3.5 px-4 font-mono font-bold text-[#193654]">
                                  {course.code}
                                </td>
                                <td className="py-3.5 px-4">
                                  <div className="font-semibold text-slate-900 text-[13px]">
                                    {course.title}
                                  </div>
                                  {course.syllabusHighlights && (
                                    <div className="text-[11px] text-slate-500 mt-1 space-y-0.5">
                                      {course.syllabusHighlights.map((sh, idx) => (
                                        <div key={idx} className="flex items-center gap-1.5">
                                          <span className="w-1 h-1 rounded-full bg-[#8b1c2e]"></span>
                                          <span>{sh}</span>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </td>
                                <td className="py-3.5 px-4 text-center font-mono font-bold text-[#193654]">
                                  <span className="bg-slate-100 border border-slate-200 px-2.5 py-1 rounded">
                                    {course.credits}
                                  </span>
                                </td>
                                <td className="py-3.5 px-4 text-center font-mono font-semibold text-slate-700">
                                  <span className="bg-[#CCE70B]/20 text-[#193654] border border-[#CCE70B]/40 px-2.5 py-1 rounded">
                                    Sem {course.tentativeSem}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 3: DETAILED SYLLABUS UNITS BREAKDOWN */}
              {activeMainTab === "detailed" && (
                <div className="space-y-6">
                  {/* Track Selection Switcher */}
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs flex flex-wrap gap-2">
                    {specializationsList.map((track) => (
                      <button
                        key={track.id}
                        type="button"
                        onClick={() => setSelectedTrack(track.id)}
                        className={`flex-1 min-w-[180px] py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center font-grotesk ${
                          selectedTrack === track.id
                            ? "bg-[#193654] text-[#CCE70B] shadow-xs"
                            : "bg-[#f9f9ff] text-slate-700 hover:bg-slate-100 border border-slate-200"
                        }`}
                      >
                        {track.shortName}
                      </button>
                    ))}
                  </div>

                  {/* Active Track Title */}
                  <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs space-y-2">
                    <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block">
                      // SELECTED SPECIALIZATION
                    </span>
                    <h2 className="text-xl font-bold text-[#193654] font-grotesk">
                      {currentTrack.name}
                    </h2>
                    <p className="text-xs text-slate-600 font-roboto">
                      {currentTrack.description}
                    </p>
                  </div>

                  {/* Semester Tabs */}
                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
                    <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-4">
                      {currentTrack.semesters.map((sem) => (
                        <button
                          key={sem.semester}
                          type="button"
                          onClick={() => setOpenSemester(sem.semester)}
                          className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer font-grotesk ${
                            openSemester === sem.semester
                              ? "bg-[#193654] text-[#CCE70B] shadow-xs"
                              : "bg-[#f9f9ff] text-slate-700 hover:bg-slate-100 border border-slate-200"
                          }`}
                        >
                          <span>{sem.semester}</span>
                        </button>
                      ))}
                    </div>

                    {/* Course List for the active semester */}
                    {currentTrack.semesters
                      .filter((s) => s.semester === openSemester)
                      .map((sem) => (
                        <div key={sem.semester} className="space-y-4">
                          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-roboto text-slate-600 mb-2">
                            <strong className="text-[#193654] font-grotesk">{sem.semester}:</strong> {sem.title} (15 Credits Total)
                          </div>

                          {sem.courses.map((course, idx) => (
                            <div
                              key={idx}
                              className="border border-slate-200 rounded-lg p-5 bg-[#f9f9ff] hover:border-slate-300 transition-colors"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                <div>
                                  <span className="text-[11px] font-mono text-[#8b1c2e] font-bold block">
                                    {course.code ? `${course.code} • ` : ""}
                                    {course.type}
                                  </span>
                                  <h3 className="text-base font-bold text-[#193654] font-grotesk">
                                    {course.name}
                                  </h3>
                                  {course.note && (
                                    <span className="text-[11px] text-[#8b1c2e] font-mono block mt-0.5">
                                      ({course.note})
                                    </span>
                                  )}
                                </div>
                                <span className="text-xs font-semibold bg-white border border-slate-200 text-[#193654] px-3 py-1 rounded font-mono self-start sm:self-center">
                                  {course.credits} Credits
                                </span>
                              </div>

                              <div className="text-xs text-slate-600 space-y-1.5 pt-3 border-t border-slate-200 font-roboto">
                                <span className="font-semibold text-slate-700 block font-grotesk">
                                  Syllabus Units / Highlights:
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {course.units.map((unit, i) => (
                                    <div key={i} className="flex items-start gap-1.5">
                                      <span className="text-[#8b1c2e] font-bold leading-none mt-1">
                                        •
                                      </span>
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
                </div>
              )}

              {/* 4-PHASE PROGRESSIVE RESEARCH PROJECT JOURNEY (30 CREDITS TOTAL) */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
                <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block">
                  // PROJECT ARCHITECTURE (30 CREDITS TOTAL)
                </span>
                <h3 className="text-xl font-bold text-[#193654] font-grotesk">
                  Four-Phase Progressive Capstone Project Sequence
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-roboto">
                  Across all 4 semesters, every M.Tech learner undertakes an extensive, faculty-guided engineering and research project. Totaling <strong>30 credits</strong> (50% of the entire degree), this ensures hands-on mastery, enterprise-level deployment, and high-impact dissertation work.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-roboto">
                  <div className="p-4 bg-[#f9f9ff] rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-[#193654] font-grotesk">CS696: Project-I</span>
                      <span className="font-mono text-xs font-bold text-[#8b1c2e] bg-white px-2 py-0.5 rounded border border-slate-200">
                        3 Credits • Sem 1
                      </span>
                    </div>
                    <p className="text-slate-600">
                      Problem definition, comprehensive literature survey, feasibility analysis, and architecture specifications guided by IIIT Dharwad faculty.
                    </p>
                  </div>

                  <div className="p-4 bg-[#f9f9ff] rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-[#193654] font-grotesk">CS697: Project-II</span>
                      <span className="font-mono text-xs font-bold text-[#8b1c2e] bg-white px-2 py-0.5 rounded border border-slate-200">
                        6 Credits • Sem 2
                      </span>
                    </div>
                    <p className="text-slate-600">
                      Core prototype implementation, experimental testbed setup, baseline benchmarking, and mid-project evaluation demonstration.
                    </p>
                  </div>

                  <div className="p-4 bg-[#f9f9ff] rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-[#193654] font-grotesk">CS698: Project-III</span>
                      <span className="font-mono text-xs font-bold text-[#8b1c2e] bg-white px-2 py-0.5 rounded border border-slate-200">
                        9 Credits • Sem 3
                      </span>
                    </div>
                    <p className="text-slate-600">
                      Substantial scale-up, architectural optimization, rigorous empirical evaluation against state-of-the-art benchmarks, and interim defense.
                    </p>
                  </div>

                  <div className="p-4 bg-[#f9f9ff] rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-[#193654] font-grotesk">CS699: Project-IV</span>
                      <span className="font-mono text-xs font-bold text-[#8b1c2e] bg-white px-2 py-0.5 rounded border border-slate-200">
                        12 Credits • Sem 4
                      </span>
                    </div>
                    <p className="text-slate-600">
                      Full production-scale realization, dissertation write-up, scientific publication / patent drafting, and final formal viva-voce defense.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right 4 Columns: Sticky Inquiry Form */}
            <div className="lg:col-span-4 sticky top-24">
              <InquiryForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
