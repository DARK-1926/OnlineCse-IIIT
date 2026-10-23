import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Layers } from "lucide-react";

export default function SpecializationsSection() {
  const tracks = [
    {
      id: "aiml",
      title: "AI & ML",
      badge: "Artificial Intelligence & Machine Learning",
      image: "/images/aiml_specialization.jpg",
      desc: "Gain deep technical mastery in mathematical foundations, deep neural architectures, natural language processing, computer vision, and generative models with applied PyTorch laboratories.",
      link: "/specializations/aiml",
      coreCourses: [
        "Deep Learning & Neural Architectures",
        "Generative AI & Large Language Models (LLMs)",
        "Speech and Natural Language Processing",
        "Computer Vision & Visual Intelligence",
        "Introduction to AI/ML",
      ],
    },
    {
      id: "cybersecurity",
      title: "Cyber Security",
      badge: "Information Security & Cyber Defense",
      image: "/images/cyber_specialization.jpg",
      desc: "Develop advanced expertise in modern cryptography, zero-trust network defenses, penetration testing, threat detection, digital forensics, and cloud infrastructure security.",
      link: "/specializations/cybersecurity",
      coreCourses: [
        "Computer System Security (OS & Memory Hardening)",
        "Security in Cloud Computing & Multi-Tenant Defense",
        "AI for Cybersecurity (Threat & Malware Detection)",
        "Applied Cryptography & Network Security Protocols",
        "Introduction to Cybersecurity",
      ],
    },
    {
      id: "cloud-computing",
      title: "Cloud Computing",
      badge: "Cloud Systems & Distributed Infrastructure",
      image: "/images/cloud_specialization.jpg",
      desc: "Master distributed systems, consensus algorithms (Paxos, Raft), Kubernetes orchestration, microservices architectures, and enterprise DevOps automation pipelines.",
      link: "/specializations/cloud-computing",
      coreCourses: [
        "Cloud Computing Architecture & Virtualization",
        "Containerization & Kubernetes (K8s) Orchestration",
        "Cloud Native Systems & Microservices Architecture",
        "Distributed Storage Systems & Consensus Protocols",
        "Introduction to Cloud Computing",
      ],
    },
  ];

  return (
    <section id="specializations" className="py-16 bg-[#f9f9ff] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#193654] font-grotesk">
            Specializations Offered
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto">
            Tailor your M.Tech in CSE degree in one of three high-demand technology domains:
          </p>
        </div>

        {/* 3 Custom Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={track.image}
                    alt={track.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14293f]/85 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 text-xs font-bold text-white font-mono uppercase tracking-wider bg-[#193654]/85 px-2.5 py-1 rounded backdrop-blur-xs">
                    60 Credits • 4 Semesters
                  </div>
                </div>

                <div className="p-6 space-y-3.5">
                  <div>
                    <h3 className="text-xl font-bold text-[#193654] group-hover:text-[#8b1c2e] transition-colors font-grotesk">
                      {track.title}
                    </h3>
                    <span className="text-[11px] text-slate-400 font-medium font-roboto block mt-0.5">
                      {track.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-roboto">
                    {track.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold text-[#193654] uppercase tracking-wider block font-mono">
                      Core Syllabus Modules:
                    </span>
                    <div className="space-y-1.5">
                      {track.coreCourses.map((c, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium font-roboto">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8b1c2e] mt-1.5 flex-shrink-0"></span>
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={track.link}
                  className="w-full py-2.5 px-4 rounded border-2 border-[#193654] text-[#193654] hover:bg-[#193654] hover:text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 group-hover:border-[#193654] font-grotesk cursor-pointer"
                >
                  <span>Explore Specialization</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Common Program-Wide Core Foundations Note */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#8b1c2e]" />
                <span className="text-xs font-bold text-[#193654] uppercase tracking-wider font-mono">
                  Common Discipline Core Foundations (All CSE Students)
                </span>
              </div>
              <p className="text-xs text-slate-600 font-roboto">
                Every M.Tech candidate completes rigorous foundations across core computer science domains:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-roboto pt-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b1c2e] flex-shrink-0"></span>
                  <span><strong>Applied Mathematics for CS</strong> (CS601)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b1c2e] flex-shrink-0"></span>
                  <span><strong>Advanced Data Structures & Algorithms</strong> (CS602)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b1c2e] flex-shrink-0"></span>
                  <span><strong>Programming Paradigms Lab</strong> (CS603)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b1c2e] flex-shrink-0"></span>
                  <span><strong>Advanced Computing Lab</strong> (CS604)</span>
                </li>
                <li className="flex items-center gap-2 sm:col-span-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b1c2e] flex-shrink-0"></span>
                  <span><strong>30-Credit Project Dissertation Sequence</strong> (Projects I to IV)</span>
                </li>
              </ul>
            </div>
            <Link
              href="/curriculum"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#193654] text-[#193654] hover:bg-[#193654] hover:text-white text-xs font-bold uppercase tracking-wider font-grotesk transition-colors flex-shrink-0"
            >
              <span>View Full 60-Credit Structure →</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
