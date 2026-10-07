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
      icon: BookOpen,
      title: "Cutting-Edge Curriculum",
      desc: "Advance your skills in core and emerging areas of computing through an industry-aligned and research-driven curriculum spanning AI & ML, Cloud, and Cybersecurity.",
    },
    {
      icon: Building2,
      title: "On-Campus Immersion",
      desc: "Experience residential student life with an exclusive 7-day immersion on the 60-acre IIIT Dharwad campus, interacting with faculty and engaging in advanced lab work.",
    },
    {
      icon: Users,
      title: "World-Class Faculty",
      desc: "Learn under distinguished doctoral faculty members, active researchers, and accomplished industry practitioners committed to rigorous academic mentorship.",
    },
    {
      icon: Code2,
      title: "Capstone Project",
      desc: "Synthesize your academic learning through an extensive two-phase capstone project or industry-sponsored research dissertation supervised by faculty.",
    },
    {
      icon: Network,
      title: "Professional Networking",
      desc: "Form long-lasting peer relationships and professional connections with ambitious software engineers, architects, and technical analysts across leading tech hubs.",
    },
    {
      icon: Briefcase,
      title: "Industry Collaboration",
      desc: "Benefit from guest lectures, curriculum advisory boards, and joint industry case studies that bring real-world enterprise engineering challenges into the classroom.",
    },
    {
      icon: Laptop,
      title: "Flexible Hybrid Learning",
      desc: "Balanced live weekend interactive virtual classes with on-demand recorded session archives and on-campus lab residency, allowing you to learn without disrupting your full-time job.",
    },
    {
      icon: GraduationCap,
      title: "Executive Alumni Status",
      desc: "Induction into the official IIIT Dharwad Executive Alumni Network, granting lifelong institutional access, library portals, and annual alumni conclaves.",
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
