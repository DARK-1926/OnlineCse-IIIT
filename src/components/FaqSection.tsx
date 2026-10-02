"use client";

import React, { useState } from "react";
import { faqsData } from "@/data/faqs";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 bg-[#f9f9ff] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block mb-1">
            // ADMISSIONS & PROGRAM FAQS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#193654] font-grotesk">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto">
            Answers to common questions regarding admissions, curriculum, weekend format, and campus immersion.
          </p>
        </div>

        {/* Numbered Accordion List */}
        <div className="space-y-3">
          {faqsData.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-[#193654] bg-[#f9f9ff] border border-slate-200 px-2.5 py-1 rounded font-mono">
                      0{idx + 1}
                    </span>
                    <span className="font-semibold text-sm sm:text-base text-[#193654] font-grotesk">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#8b1c2e]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-white font-roboto">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
