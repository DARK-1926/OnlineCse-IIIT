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
  GraduationCap 
} from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: Award,
      title: "Prestigious M.Tech Degree",
      desc: "Earn an authentic Master of Technology degree directly conferred by IIIT Dharwad, an Institute of National Importance under the Ministry of Education, Government of India.",
    },
    {
      icon: Building2,
      title: "Institute Autonomy",
      desc: "An academic Senate comprising distinguished faculty and industry leaders ensures that the curriculum remains cutting-edge and responsive to rapidly evolving industry trends.",
    },
    {
      icon: BookOpen,
      title: "Outcome-Based Education (OBE)",
      desc: "Demonstrates that learners are systematically trained to meet concrete architectural and computational objectives, directly matching industry needs.",
    },
    {
      icon: GraduationCap,
      title: "Full-Time Equivalent & PhD Eligibility",
      desc: "Conferred with complete statutory parity to on-campus M.Tech degrees, making graduates fully eligible for Ph.D. admissions across leading institutions globally.",
    },
    {
      icon: Network,
      title: "Flexible Multi-Exit Pathways",
      desc: "Two-year degree with multi-exit and re-entry options (PG Diploma after 30 credits, M.Tech after 60 credits) with a flexible study completion window of up to 4 years.",
    },
    {
      icon: Users,
      title: "7-Day Campus Immersion",
      desc: "Engage in an on-campus residency at the 60-acre IIIT Dharwad campus in Dharwad, Karnataka for hands-on lab experiments, faculty mentorship, and peer networking.",
    },
    {
      icon: Laptop,
      title: "Blended Learning & Attendance Policy",
      desc: "Structured 75% attendance policy (60% synchronous live weekend classes + 15% asynchronous engagement) with 24/7 access to high-definition recorded archives.",
    },
    {
      icon: Briefcase,
      title: "Elite Alumni Privileges",
      desc: "Full privileges as an IIIT Dharwad alumnus, including official institute email ID, library digital portal access, convocation, and lifelong networking.",
    },
    {
      icon: Code2,
      title: "Capstone Industry Dissertation",
      desc: "A hands-on, research-driven 30-credit project sequence solving real enterprise engineering challenges to build a standout technical portfolio.",
    },
  ];

  return (
    <section id="why-us" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block mb-1">
            // VALUE PROPOSITION
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#193654] font-grotesk">
            Why Learners Choose IIIT Dharwad
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto">
            A premier postgraduate experience engineered specifically for working engineers.
          </p>
        </div>

        {/* 9 Human Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="bg-[#f9f9ff] p-7 rounded-xl border border-slate-200 shadow-2xs hover:border-[#193654] hover:bg-white hover:shadow-xs transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="block w-8 h-[3px] bg-[#8b1c2e] rounded-full mb-4" />
                  <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 text-[#193654] flex items-center justify-center mb-5 group-hover:bg-[#193654] group-hover:text-[#CCE70B] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#193654] mb-2 font-grotesk">
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-roboto">
                    {c.desc}
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
