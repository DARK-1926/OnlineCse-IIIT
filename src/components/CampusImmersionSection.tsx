import React from "react";
import Image from "next/image";
import { CheckCircle2, Building, Users, FlaskConical, MessageSquare } from "lucide-react";

export default function CampusImmersionSection() {
  const immersionFacets = [
    {
      icon: FlaskConical,
      title: "Hands-On Lab Sessions",
      desc: "Engage in practical lab work utilizing on-campus computing infrastructure, GPU clusters, and specialized experimental testbeds at IIIT Dharwad.",
    },
    {
      icon: Users,
      title: "Faculty Interactions & Mentorship",
      desc: "Meet face-to-face with distinguished doctoral faculty, research supervisors, and course instructors for personalized guidance on thesis and coursework.",
    },
    {
      icon: MessageSquare,
      title: "Research Discussions & Industry Talks",
      desc: "Participate in academic seminars, tech colloquia, and interactive discussions on emerging computer science and engineering challenges.",
    },
    {
      icon: Building,
      title: "Peer Networking & Cohort Collaboration",
      desc: "Collaborate in person with software engineers, architects, and researchers from across India, fostering long-term professional relationships.",
    },
  ];

  return (
    <section id="immersion" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block mb-1">
            // ON-CAMPUS COMPONENT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#193654] font-grotesk">
            Hands-On Campus Immersion Opportunity
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto">
            Engage in an optional 7-day campus immersion on IIIT Dharwad&apos;s permanent 60-acre campus for hands-on sessions, faculty interactions, and networking with peers:
          </p>
        </div>

        {/* Immersion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Campus Photo & Highlights */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
              <Image
                src="/images/campus_immersion.jpg"
                alt="IIIT Dharwad Campus Immersion"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-5 bg-[#f9f9ff] rounded-xl border border-slate-200 space-y-3">
              <h4 className="text-sm font-bold text-[#193654] font-grotesk">
                Campus Immersion Highlights:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 font-roboto">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Hands-on Laboratory Sessions</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Direct Faculty Interactions</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Research Discussions & Tech Talks</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Networking with Cohort Peers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Authentic Immersion Facets */}
          <div className="lg:col-span-6 space-y-4">
            {immersionFacets.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 bg-[#f9f9ff] rounded-xl border border-slate-200 hover:border-[#193654] hover:bg-white transition-all flex items-start gap-4 shadow-2xs group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#193654] text-[#CCE70B] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#193654] font-grotesk">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed font-roboto">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="p-4 bg-slate-50 border-l-4 border-[#193654] rounded-r-lg text-xs text-slate-600">
              <span className="font-bold text-[#193654] block mb-0.5 font-grotesk">Flexibility Note:</span>
              The 7-day campus immersion is an optional residential opportunity designed for students who want in-person campus experience. Exact schedules are announced well in advance so working professionals can plan travel.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
