import React from "react";
import { 
  Award, 
  BookOpen, 
  Building2, 
  Users, 
  Code2, 
  Network, 
  Briefcase, 
  Laptop, 
  GraduationCap, 
  TrendingUp 
} from "lucide-react";

export default function ProgramHighlights() {
  const highlights = [
    {
      icon: Award,
      title: "Prestigious M.Tech Degree",
      desc: "Earn an authentic Master of Technology degree directly conferred by IIIT Dharwad, an Institute of National Importance under the Ministry of Education, Government of India.",
    },
    {
      icon: GraduationCap,
      title: "PhD Eligibility & Equivalence",
      desc: "Full statutory equivalence to on-campus M.Tech degrees, making graduates directly eligible to pursue Ph.D. doctoral research at premier national and international universities.",
    },
    {
      icon: BookOpen,
      title: "Institute Autonomy & Senate",
      desc: "An academic Senate comprising senior academicians and tech industry executives ensures the curriculum remains relevant, rigorous, and responsive to industry shifts.",
    },
    {
      icon: Building2,
      title: "7-Day Campus Immersion",
      desc: "Experience campus life at IIIT Dharwad's 60-acre permanent campus with hands-on lab experiments, hackathons, and face-to-face faculty mentorship.",
    },
    {
      icon: Laptop,
      title: "Structured Attendance Policy",
      desc: "Mandatory 75% attendance (60% live synchronous lectures on weekends + 15% asynchronous recorded coursework completion) with 24/7 digital LMS access.",
    },
    {
      icon: Network,
      title: "Multiple Exit Options",
      desc: "Complete 30 credits for a PG Diploma in CSE or complete the full 60 credits for the M.Tech Degree, with flexible pause and resume options within a 4-year window.",
    },
    {
      icon: Code2,
      title: "30-Credit Project Sequence",
      desc: "Rigorous Project I through IV sequence across semesters to build real enterprise solutions, research publications, or industry capstone dissertations.",
    },
    {
      icon: Briefcase,
      title: "Strong Industry Connect",
      desc: "Programs aligned to modern enterprise engineering benchmarks, featuring guest masterclasses from technical directors and industry practitioners.",
    },
    {
      icon: GraduationCap,
      title: "IIIT Dharwad Alumni Status",
      desc: "Gain official induction into the IIIT Dharwad Alumni Network, complete with an official institute email ID, library portal access, and annual convocation invites.",
    },
    {
      icon: TrendingUp,
      title: "Outcome-Based Education",
      desc: "Demonstrates that students are trained to meet precise architectural and software engineering objectives, preparing them for Tier-1 technology leadership roles.",
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block mb-1">
            // PROGRAM HIGHLIGHTS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#193654] font-grotesk">
            Distinctive Educational Features
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto">
            Why leading tech professionals & motivated students across India choose the IIIT Dharwad M.Tech in CSE:
          </p>
        </div>

        {/* 10 Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#f9f9ff] p-5 rounded-lg border border-slate-200 hover:border-[#193654] hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-[#193654] text-[#CCE70B] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#193654] mb-1.5 font-grotesk">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-roboto">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
