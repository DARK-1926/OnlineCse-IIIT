"use client";

import React, { useState } from "react";
import { faqsData, FaqItem } from "@/data/faqs";
import { ChevronDown, HelpCircle } from "lucide-react";

type CategoryFilter = "All" | FaqItem["category"];

const categories: CategoryFilter[] = [
  "All",
  "General Program Information",
  "Eligibility and Admissions",
  "Attendance, Pedagogy & Format",
  "Degree, PhD & Career",
];

export default function FaqSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const filteredFaqs = selectedCategory === "All"
    ? faqsData
    : faqsData.filter((f) => f.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 sm:py-20 bg-[#f9f9ff] border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#193654] font-grotesk">
            Previously Asked Questions
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto">
            Find answers to questions regarding admission eligibility, 75% attendance policy, hybrid delivery, fees, and degree equivalence.
          </p>
        </div>

        {/* Category Pills - One Single Line with Horizontal Scroll on Small Screens */}
        <div className="flex items-center justify-start md:justify-center gap-2 mb-8 overflow-x-auto pb-2 flex-nowrap whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setOpenId(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold font-grotesk transition-all cursor-pointer flex-shrink-0 ${
                selectedCategory === cat
                  ? "bg-[#193654] text-[#CCE70B] shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat === "All" ? "All Questions" : cat}
            </button>
          ))}
        </div>

        {/* Numbered Accordion List - 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs transition-all hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3 hover:bg-slate-50/70 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-bold text-[#193654] bg-[#f9f9ff] border border-slate-200 px-2 py-0.5 rounded-md font-mono flex-shrink-0 mt-0.5">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <div>
                      <span className="font-semibold text-sm sm:text-base text-[#193654] font-grotesk block leading-snug">
                        {faq.question}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block mt-1">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 mt-0.5 ${
                      isOpen ? "rotate-180 text-[#8b1c2e]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-white font-roboto">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout Box */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-[#193654] font-grotesk text-base">
              Still have questions about admissions or eligibility?
            </h4>
            <p className="text-xs text-slate-500 font-roboto mt-0.5">
              Our academic counseling desk is available to assist you with profile evaluations and enrollment guidance.
            </p>
          </div>
          <a
            href="#lead-form"
            className="px-5 py-2.5 bg-[#193654] hover:bg-[#14293f] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors font-grotesk flex-shrink-0 shadow-xs"
          >
            Connect With Admissions
          </a>
        </div>

      </div>
    </section>
  );
}
