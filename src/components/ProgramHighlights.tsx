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
      icon: BookOpen,
      title: "Advanced Curriculum",
      desc: "Designed to bridge theoretical depth and modern engineering realities across Artificial Intelligence, Cloud Infrastructure, and Cyber Defense.",
    },
    {
      icon: Building2,
      title: "7-Day Campus Immersion",
      desc: "Experience campus life at IIIT Dharwad's 60-acre permanent campus with hands-on lab experiments, hackathons, and face-to-face mentorship.",
    },
    {
      icon: Users,
      title: "Expert Faculty Guidance",
      desc: "Mentored directly by esteemed doctoral faculty members and active research scientists leading funded national computing projects.",
    },
    {
      icon: Code2,
      title: "Industry Capstone Project",
      desc: "A rigorous 16-credit final-year dissertation project where you solve a high-impact engineering challenge from your company or academic research.",
    },
    {
      icon: Network,
      title: "Professional Networking",
      desc: "Connect with high-caliber software engineers, architects, and technical analysts across leading tech companies across India.",
    },
    {
      icon: Briefcase,
      title: "Strong Industry Connect",
      desc: "Curriculum aligned with industry hiring benchmarks, complemented by guest masterclasses by engineering leaders from top MNCs.",
    },
    {
      icon: Laptop,
      title: "Flexible Online Learning",
      desc: "Synchronous live weekend lectures paired with 24/7 digital LMS recordings and self-paced assignments designed for working professionals.",
    },
    {
      icon: GraduationCap,
      title: "IIIT Dharwad Alumni Status",
      desc: "Gain official induction into the IIIT Dharwad Executive Alumni Network, granting lifelong institutional access, library portals, and annual convocations.",
    },
    {
      icon: TrendingUp,
      title: "Career Readiness",
      desc: "Step directly into senior architectural, strategic, and tech leadership roles such as Principal Architect, ML Lead, or Cyber Defense Director.",
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
            Why leading tech professionals across India choose the IIIT Dharwad Executive M.Tech:
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
