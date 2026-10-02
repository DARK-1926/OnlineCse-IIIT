import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function CampusImmersionSection() {
  const schedule = [
    { day: "Day 1", title: "Registration & Cohort Induction", desc: "Welcome address by Director Prof. Prasanna, faculty orientation, hostel check-in, and campus tour." },
    { day: "Day 2–3", title: "Advanced Computing Laboratories", desc: "Hands-on intensive workshops in GPU cluster labs, cloud testbeds, and vulnerability testing frameworks." },
    { day: "Day 4", title: "24-Hour Innovation Hackathon", desc: "Collaborate in interdisciplinary teams to build proof-of-concept solutions for real-world enterprise problems." },
    { day: "Day 5", title: "Tech Leadership Colloquium", desc: "Interactive keynote sessions and panel discussions with engineering directors and researchers from global MNCs." },
    { day: "Day 6", title: "Capstone Dissertation Defense", desc: "Present interim research proposals, architecture blueprints, and experimental benchmarks to faculty committees." },
    { day: "Day 7", title: "Formal Convocation Dinner", desc: "Networking banquet, award of campus immersion certificates, and induction into the Executive Alumni Network." },
  ];

  return (
    <section id="immersion" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block mb-1">
            // RESIDENTIAL EXPERIENCE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#193654] font-grotesk">
            7-Day On-Campus Immersion at IIIT Dharwad
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto">
            Experience authentic university life, face-to-face mentorship, and institutional computational resources at our 60-acre permanent campus in Sattur Colony, Karnataka:
          </p>
        </div>

        {/* Immersion Grid: Left Photo & Right Structured Itinerary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Seminar Photo */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
              <Image
                src="/images/campus_immersion.jpg"
                alt="IIIT Dharwad Executive Campus Immersion Seminar"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-5 bg-[#f9f9ff] rounded-xl border border-slate-200 space-y-2">
              <h4 className="text-sm font-bold text-[#193654] font-grotesk">
                Residential Amenities Provided:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-roboto">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>On-Campus Hostel Suite</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Full High-Performance Lab Access</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Catering & Dining Facilities</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Sports Complex & Recreation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 6-Day Structured Itinerary */}
          <div className="lg:col-span-6 space-y-3">
            {schedule.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#f9f9ff] rounded-lg border border-slate-200 hover:border-[#193654] transition-colors flex items-start gap-4"
              >
                <div className="bg-[#193654] text-[#CCE70B] text-xs font-bold px-2.5 py-1 rounded flex-shrink-0 mt-0.5 font-mono">
                  {item.day}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#193654] font-grotesk">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-roboto">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
