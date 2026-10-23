import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function SkillsMastered() {
  const competencies = [
    {
      course: "CS601",
      title: "Applied Mathematics & Computational Foundations",
      desc: "Linear algebra, multivariate calculus, probability distributions, and numerical optimization for computing.",
    },
    {
      course: "CS602",
      title: "Advanced Data Structures & Algorithm Design",
      desc: "Asymptotic complexity, randomized algorithms, graph theory, advanced trees, and dynamic programming.",
    },
    {
      course: "CS603",
      title: "Programming Paradigms & Systems Engineering",
      desc: "Functional, object-oriented, and concurrent programming paradigms applied to real-world software systems.",
    },
    {
      course: "CS604",
      title: "Advanced Computing Systems",
      desc: "Hands-on systems programming, memory hierarchy optimization, profiling, and parallel computing architectures.",
    },
    {
      course: "CS651+",
      title: "Machine Learning & Deep Neural Architectures",
      desc: "Supervised and unsupervised learning, backpropagation, CNNs, Transformers, and deep model optimization.",
    },
    {
      course: "CS6xx",
      title: "Generative AI, LLMs & NLP",
      desc: "Self-attention mechanics, large language models, prompt engineering, fine-tuning, and speech processing.",
    },
    {
      course: "CS652+",
      title: "Computer System Security & Cloud Defenses",
      desc: "OS memory protection, applied cryptography, network protocols, zero-trust models, and cloud security.",
    },
    {
      course: "CS653+",
      title: "Cloud Computing & Containerization",
      desc: "Virtualization, microservices architecture, Docker, Kubernetes orchestration, and distributed storage.",
    },
    {
      course: "CS6xx",
      title: "Distributed Systems & Consensus",
      desc: "Fault tolerance, consensus algorithms (Paxos, Raft), peer-to-peer systems, and distributed transactions.",
    },
    {
      course: "Projects I–IV",
      title: "Research Methodology & 30-Credit Dissertation",
      desc: "Literature review, research formulation, empirical benchmarking, and rigorous capstone project defense.",
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block mb-1">
            // CURRICULUM COMPETENCIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#193654] font-grotesk">
            Skills & Competencies You’ll Master
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto">
            Directly mapped to the M.Tech in CSE 60-credit course structure and specialized elective tracks:
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {competencies.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f9f9ff] p-4.5 rounded-xl border border-slate-200 hover:border-[#193654] hover:bg-white transition-all flex flex-col justify-between shadow-2xs group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-[#8b1c2e] bg-rose-50 border border-rose-100 px-2 py-0.5 rounded font-mono">
                    {item.course}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <h3 className="text-xs font-bold text-[#193654] font-grotesk group-hover:text-[#8b1c2e] transition-colors leading-snug mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-roboto">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
