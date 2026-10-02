import React from "react";

export default function SkillsMastered() {
  const skills = [
    "Advanced Programming",
    "Software Design",
    "Algorithm Design & Analysis",
    "Systems Architecture & Scalability",
    "Secure Systems & Networks",
    "Distributed Data Systems",
    "High-Performance Computing",
    "Applied Mathematics & Modeling",
    "Cloud-Native Orchestration",
    "Project-Based Research & Innovation",
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block mb-1">
            // CORE COMPETENCIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#193654] font-grotesk">
            Skills You’ll Master
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto">
            Build deep technical competencies designed around modern computing standards:
          </p>
        </div>

        {/* 10 Signature Feature Cards with Crimson Left Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="feature-card-strip flex items-center justify-between"
            >
              <h3 className="text-sm font-semibold text-[#193654] font-grotesk">
                {skill}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
