import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SpecializationsSection() {
  const tracks = [
    {
      id: "aiml",
      title: "Artificial Intelligence & Machine Learning",
      image: "/images/aiml_specialization.jpg",
      desc: "Gain deep technical mastery in mathematical foundations, neural networks, natural language processing, computer vision, and generative models with applied PyTorch / TensorFlow laboratories.",
      link: "/specializations/aiml",
      highlights: ["Deep Learning & Transformers", "Natural Language Processing (LLMs)", "Computer Vision & Visual Intelligence"],
    },
    {
      id: "cloud-computing",
      title: "Cloud Computing",
      image: "/images/cloud_specialization.jpg",
      desc: "Master distributed systems, consensus algorithms (Paxos, Raft), Kubernetes orchestration, microservices architectures, and enterprise DevOps automation pipelines.",
      link: "/specializations/cloud-computing",
      highlights: ["Distributed Systems & Consensus", "Cloud-Native & Kubernetes (K8s)", "Microservices, gRPC & Kafka"],
    },
    {
      id: "cybersecurity",
      title: "Cyber Security",
      image: "/images/cyber_specialization.jpg",
      desc: "Develop advanced expertise in modern cryptography, zero-trust network defenses, penetration testing, threat detection, digital forensics, and cloud infrastructure security.",
      link: "/specializations/cybersecurity",
      highlights: ["Applied Cryptography & PKI", "Penetration Testing & Red Teaming", "Zero Trust & Cloud Defenses"],
    },
  ];

  return (
    <section id="specializations" className="py-16 bg-[#f9f9ff] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block mb-1">
            // SPECIALIZATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#193654] font-grotesk">
            Specializations Offered
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto">
            Tailor your M.Tech degree in one of three high-demand technology domains:
          </p>
        </div>

        {/* 3 Custom Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14293f]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 text-xs font-bold text-white font-mono uppercase tracking-wider bg-[#193654]/80 px-2 py-0.5 rounded backdrop-blur-xs">
                    60 Credits • 4 Terms
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-[#193654] group-hover:text-[#8b1c2e] transition-colors font-grotesk">
                    {track.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-roboto">
                    {track.desc}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                      Core Syllabus Modules:
                    </span>
                    {track.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium font-roboto">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8b1c2e]"></span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={track.link}
                  className="w-full py-2.5 px-4 rounded border-2 border-[#193654] text-[#193654] hover:bg-[#193654] hover:text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 group-hover:border-[#193654]"
                >
                  <span>Explore Specialization</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
