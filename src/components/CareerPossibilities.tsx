import React from "react";
import { Cpu, Lightbulb, TrendingUp, Rocket, BookOpenCheck, Globe } from "lucide-react";

export default function CareerPossibilities() {
  const roles = [
    {
      icon: Cpu,
      title: "Advance Your Career in Cutting-Edge Technology",
      desc: "Advance your career and take on high-impact roles across software development, systems architecture, research, data systems, cloud engineering, digital security, and technology leadership.",
    },
    {
      icon: Lightbulb,
      title: "Research and Innovation",
      desc: "Contribute to groundbreaking research and development in academia, think tanks, or R&D divisions of global corporations, driving innovation in computer science and applied technologies.",
    },
    {
      icon: TrendingUp,
      title: "Leadership and Strategic Roles",
      desc: "Step into strategic and managerial positions such as Lead Architect, Engineering Manager, Chief Technology Officer (CTO), or Chief Information Security Officer (CISO).",
    },
    {
      icon: Rocket,
      title: "Entrepreneurship & Tech Startups",
      desc: "Leverage advanced technical expertise, faculty mentorship, and institutional resources to launch technology ventures, innovate products, and disrupt emerging market spaces.",
    },
    {
      icon: BookOpenCheck,
      title: "Academic and Teaching Opportunities",
      desc: "Pursue doctoral studies (Ph.D.) or take up faculty positions in prestigious academic institutions, inspiring the next generation of engineers and technology innovators.",
    },
    {
      icon: Globe,
      title: "Global Career Prospects",
      desc: "Expand your career horizons globally, with an Institute of National Importance degree recognized across top multinationals, research laboratories, and technological consortiums.",
    },
  ];

  return (
    <section className="py-16 bg-[#f9f9ff] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block mb-1">
            // CAREER OUTCOMES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#193654] font-grotesk">
            Unlock Endless Career Possibilities
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto">
            The Executive M.Tech prepares you for senior technical, research, and leadership roles:
          </p>
        </div>

        {/* 6 Career Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex items-start gap-4 hover:border-[#193654] transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 text-[#193654] flex items-center justify-center flex-shrink-0 group-hover:bg-[#193654] group-hover:text-[#CCE70B] transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#193654] mb-1 font-grotesk">
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
