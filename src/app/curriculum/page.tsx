"use client";

import React, { useState } from "react";
import Link from "next/link";
import { aimlCurriculum, specializationsList } from "@/data/curriculum";
import InquiryForm from "@/components/InquiryForm";

export default function MasterCurriculumPage() {
  const [selectedTrack, setSelectedTrack] = useState<string>("aiml");
  const [openSemester, setOpenSemester] = useState<string>("Semester 1");

  const currentTrack = specializationsList.find((s) => s.id === selectedTrack) || aimlCurriculum;

  return (
    <div className="bg-[#f9f9ff] min-h-screen">
      {/* Header */}
      <section className="bg-[#14293f] text-white py-12 border-b border-[#193654]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="bg-[#CCE70B]/15 text-[#CCE70B] border border-[#CCE70B]/30 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block font-mono">
              Course Structure & Syllabus
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-grotesk tracking-tight">
              Curriculum for M.Tech in Computer Science & Engineering
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed font-roboto">
              Spread across 4 semesters (60 total credits), combining foundational computing courses, elective specialization deep-dives, lab coursework, and an extensive Capstone Dissertation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 8 Columns */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Track Selection Tabs */}
              <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-2xs flex flex-wrap gap-2">
                {specializationsList.map((track) => (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => setSelectedTrack(track.id)}
                    className={`flex-1 min-w-[200px] py-2.5 px-4 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center font-grotesk ${
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
                              <h3 className="text-base font-bold text-[#193654] font-grotesk">
                                {course.name}
                              </h3>
                            </div>
                            <span className="text-xs font-semibold bg-white border border-slate-200 text-[#193654] px-3 py-1 rounded font-mono self-start sm:self-center">
                              {course.credits} Credits
                            </span>
                          </div>

                          <div className="text-xs text-slate-600 space-y-1.5 pt-3 border-t border-slate-200 font-roboto">
                            <span className="font-semibold text-slate-700 block font-grotesk">Syllabus Breakdown:</span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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

              {/* Capstone Dissertation Detail Card */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-3">
                <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block">
                  // CAPSTONE RESEARCH
                </span>
                <h3 className="text-lg font-bold text-[#193654] font-grotesk">
                  Final Year Capstone Project (16 Credits)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-roboto">
                  Spanning Term 3 and Term 4, every learner completes an intensive industry-grade Capstone Project or applied research dissertation. You will design, benchmark, and deploy an end-to-end computing system under the direct mentorship of IIIT Dharwad faculty.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700 font-roboto">
                  <div className="p-3 bg-[#f9f9ff] rounded border border-slate-200">
                    <strong className="text-[#193654] block font-grotesk">Phase I (Semester 3):</strong>
                    Literature survey, architecture specification, preliminary prototyping (6 Credits).
                  </div>
                  <div className="p-3 bg-[#f9f9ff] rounded border border-slate-200">
                    <strong className="text-[#193654] block font-grotesk">Phase II (Semester 4):</strong>
                    System implementation, experimental benchmarking, dissertation defense (10 Credits).
                  </div>
                </div>
              </div>

            </div>

            {/* Right 4 Columns */}
            <div className="lg:col-span-4 sticky top-24">
              <InquiryForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
