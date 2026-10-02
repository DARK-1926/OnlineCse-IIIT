import React from "react";
import EligibilitySection from "@/components/EligibilitySection";
import InquiryForm from "@/components/InquiryForm";
import { CheckCircle2, FileCheck } from "lucide-react";

export const metadata = {
  title: "Eligibility Criteria & Selection Process | Online M.Tech CSE",
  description:
    "Check qualification requirements, percentage thresholds, and work experience criteria for admission to the Executive M.Tech in Computer Science & Engineering at IIIT Dharwad.",
};

export default function EligibilityPage() {
  const steps = [
    {
      step: "01",
      title: "Online Application Submission",
      desc: "Fill out the online application form with personal, academic, and employment records.",
    },
    {
      step: "02",
      title: "Document Verification",
      desc: "Submit scanned copies of degrees, mark sheets, work experience certificate, and government photo ID.",
    },
    {
      step: "03",
      title: "Evaluation & Interview",
      desc: "Shortlisted applicants participate in an online technical assessment or interview panel with faculty.",
    },
    {
      step: "04",
      title: "Provisional Admission & Induction",
      desc: "Receive formal admission letter, complete fee installment, and join the virtual orientation session.",
    },
  ];

  return (
    <div className="bg-[#f9f9ff] min-h-screen">
      {/* Header */}
      <section className="bg-[#14293f] text-white py-12 border-b border-[#193654]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="bg-[#CCE70B]/15 text-[#CCE70B] border border-[#CCE70B]/30 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block font-mono">
              Admissions 2026 Batch
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-grotesk tracking-tight">
              Eligibility & Selection Process
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed font-roboto">
              Detailed breakdown of minimum academic percentages, recognized degree qualifications, employment requirements, and evaluation steps.
            </p>
          </div>
        </div>
      </section>

      {/* Main Eligibility Section */}
      <EligibilitySection />

      {/* 4 Application Steps */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block mb-1">
              // ADMISSIONS ROADMAP
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#193654] font-grotesk">
              4-Step Selection Process
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-roboto">
              A transparent, merit-driven evaluation pipeline conducted by the academic admissions committee:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="bg-[#f9f9ff] p-6 rounded-xl border border-slate-200 hover:border-[#193654] transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#193654] text-[#CCE70B] flex items-center justify-center font-bold text-sm mb-4 font-mono">
                    {s.step}
                  </div>
                  <h3 className="text-base font-bold text-[#193654] mb-2 font-grotesk">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-roboto">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Document Checklist */}
          <div className="mt-12 bg-[#f9f9ff] rounded-2xl p-7 border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <FileCheck className="w-5 h-5 text-[#8b1c2e]" />
              <h3 className="text-lg font-bold text-[#193654] font-grotesk">
                Required Documents Checklist:
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-slate-700 font-roboto">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8b1c2e] flex-shrink-0" />
                <span>Class 10th & 12th Board Marksheets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8b1c2e] flex-shrink-0" />
                <span>Undergraduate Degree Certificate (B.Tech / MCA / M.Sc)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8b1c2e] flex-shrink-0" />
                <span>Consolidated Semester-wise Transcript Cards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8b1c2e] flex-shrink-0" />
                <span>Current Employer Appointment / Experience Letter</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8b1c2e] flex-shrink-0" />
                <span>Government Issued Photo ID (Aadhaar / Passport)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8b1c2e] flex-shrink-0" />
                <span>Category Certificate (SC/ST/OBC-NCL/EWS if applicable)</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
