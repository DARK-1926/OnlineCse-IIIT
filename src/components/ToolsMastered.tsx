"use client";

import React, { useState } from "react";
import Image from "next/image";

type ToolCategory = "aiml" | "cloud" | "cyber";

interface ToolItem {
  name: string;
  category: string;
  desc: string;
  logoPath: string;
}

export default function ToolsMastered() {
  const [activeTab, setActiveTab] = useState<ToolCategory>("aiml");

  const toolsData: Record<ToolCategory, ToolItem[]> = {
    aiml: [
      {
        name: "PyTorch",
        category: "Deep Learning Framework",
        desc: "GPU-accelerated tensor computing, dynamic computation graphs, and neural network training.",
        logoPath: "/images/tools/pytorch.svg",
      },
      {
        name: "TensorFlow",
        category: "Production Machine Learning",
        desc: "End-to-end open source platform for machine learning pipelines, model serving, and deployment.",
        logoPath: "/images/tools/tensorflow.svg",
      },
      {
        name: "Hugging Face",
        category: "Transformers & LLMs",
        desc: "State-of-the-art NLP transformers, diffusers, model fine-tuning hubs, and parameter-efficient LoRA.",
        logoPath: "/images/tools/huggingface.svg",
      },
      {
        name: "OpenCV",
        category: "Computer Vision",
        desc: "Real-time computer vision library, object detection, feature tracking, and image transformation.",
        logoPath: "/images/tools/opencv.svg",
      },
      {
        name: "Scikit-Learn",
        category: "Statistical Learning",
        desc: "Core algorithms for regression, classification, clustering, dimensionality reduction, and evaluation.",
        logoPath: "/images/tools/scikitlearn.svg",
      },
      {
        name: "Python",
        category: "Core Computing Language",
        desc: "Primary language for scientific computing, NumPy array acceleration, Pandas, and deep learning.",
        logoPath: "/images/tools/python.svg",
      },
      {
        name: "NVIDIA CUDA",
        category: "GPU Acceleration",
        desc: "Parallel computing platform, TensorRT acceleration, and cuDNN primitives for scalable computing.",
        logoPath: "/images/tools/nvidia.svg",
      },
      {
        name: "Jupyter Labs",
        category: "Interactive Research",
        desc: "Interactive reproducible notebooks for experimental machine learning, visualization, and parameter tuning.",
        logoPath: "/images/tools/jupyter.svg",
      },
    ],
    cloud: [
      {
        name: "Kubernetes (K8s)",
        category: "Container Orchestration",
        desc: "Automated container deployment, declarative scaling, service meshes, ingress, and self-healing clusters.",
        logoPath: "/images/tools/kubernetes.svg",
      },
      {
        name: "Docker",
        category: "Container Virtualization",
        desc: "Lightweight container image build engines, multi-stage Dockerfiles, and reproducible runtimes.",
        logoPath: "/images/tools/docker.svg",
      },
      {
        name: "Terraform",
        category: "Infrastructure as Code",
        desc: "Declarative multi-cloud resource provisioning, state management, and immutable infrastructure patterns.",
        logoPath: "/images/tools/terraform.svg",
      },
      {
        name: "Apache Kafka",
        category: "Distributed Event Streaming",
        desc: "High-throughput event pub/sub brokers, distributed transaction logs, partitions, and Kafka Streams.",
        logoPath: "/images/tools/apachekafka.svg",
      },
      {
        name: "Amazon Web Services",
        category: "Hyperscale Cloud",
        desc: "Enterprise compute (EC2), serverless (Lambda), managed storage (S3), and Virtual Private Clouds (VPC).",
        logoPath: "/images/tools/aws.svg",
      },
      {
        name: "Prometheus",
        category: "Telemetry & Time-Series",
        desc: "Distributed systems monitoring, metric scraping engines, PromQL queries, and proactive alerts.",
        logoPath: "/images/tools/prometheus.svg",
      },
      {
        name: "Grafana",
        category: "Observability Dashboards",
        desc: "Enterprise visualization, real-time distributed tracing, log analytics, and operational metrics.",
        logoPath: "/images/tools/grafana.svg",
      },
      {
        name: "Git",
        category: "Version Control",
        desc: "Distributed revision control, branching strategies, collaborative workflows, and CI/CD automation.",
        logoPath: "/images/tools/git.svg",
      },
    ],
    cyber: [
      {
        name: "Kali Linux",
        category: "Security OS & Pen-Testing",
        desc: "Debian-derived distribution equipped with pre-installed digital forensics and penetration tools.",
        logoPath: "/images/tools/kalilinux.svg",
      },
      {
        name: "Wireshark",
        category: "Deep Packet Inspection",
        desc: "Microscopic packet inspection, live protocol dissection, TCP stream reassembly, and intrusion forensics.",
        logoPath: "/images/tools/wireshark.svg",
      },
      {
        name: "Metasploit",
        category: "Exploit Development & Audit",
        desc: "Industry-standard penetration framework for vulnerability probing, payload staging, and red-team audits.",
        logoPath: "/images/tools/metasploit.svg",
      },
      {
        name: "Burp Suite",
        category: "Web App Security",
        desc: "Automated vulnerability scanner, intercepting proxy, web application testing, and security auditing.",
        logoPath: "/images/tools/burpsuite.svg",
      },
      {
        name: "OWASP",
        category: "Security Standards",
        desc: "Application security verification standards, vulnerability mitigation benchmarks, and defense baselines.",
        logoPath: "/images/tools/owasp.svg",
      },
      {
        name: "Snort / Suricata",
        category: "Intrusion Detection (IDS/IPS)",
        desc: "Real-time packet logging, rule-based signature matching, anomaly analysis, and active network defense.",
        logoPath: "/images/tools/snort.svg",
      },
      {
        name: "OpenSSL & PKI",
        category: "Applied Cryptography",
        desc: "Public Key Infrastructure (PKI), TLS handshake protocols, AES encryption, and digital certificate authorities.",
        logoPath: "/images/tools/openssl.svg",
      },
      {
        name: "Linux Security",
        category: "OS & Kernel Hardening",
        desc: "POSIX access controls, memory safety mechanisms, kernel isolation, and system call monitoring.",
        logoPath: "/images/tools/linux.svg",
      },
    ],
  };

  return (
    <section className="py-16 bg-[#f9f9ff] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#193654] font-grotesk">
            Tools You’ll Master
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto">
            Gain proficiency with the industry-standard frameworks and development environments used by top engineering teams worldwide.
          </p>
        </div>

        {/* Tab Switcher - AI & ML, Cloud Computing, Cyber Security */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-xl border border-slate-200 shadow-2xs inline-flex gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("aiml")}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-grotesk ${
                activeTab === "aiml"
                  ? "bg-[#193654] text-[#CCE70B] shadow-sm"
                  : "text-slate-600 hover:text-[#193654] hover:bg-slate-50"
              }`}
            >
              AI & ML
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("cloud")}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-grotesk ${
                activeTab === "cloud"
                  ? "bg-[#193654] text-[#CCE70B] shadow-sm"
                  : "text-slate-600 hover:text-[#193654] hover:bg-slate-50"
              }`}
            >
              Cloud Computing
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("cyber")}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-grotesk ${
                activeTab === "cyber"
                  ? "bg-[#193654] text-[#CCE70B] shadow-sm"
                  : "text-slate-600 hover:text-[#193654] hover:bg-slate-50"
              }`}
            >
              Cyber Security
            </button>
          </div>
        </div>

        {/* Top 8 Tools Grid with Official SVG Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {toolsData[activeTab].map((tool, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs hover:border-[#193654] hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-2 mb-3 group-hover:scale-105 transition-transform">
                  <Image
                    src={tool.logoPath}
                    alt={`${tool.name} official logo`}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <h3 className="text-sm font-bold text-[#193654] font-grotesk group-hover:text-[#8b1c2e] transition-colors">
                  {tool.name}
                </h3>
                <div className="text-[11px] font-semibold text-[#8b1c2e] mb-2 font-mono">
                  {tool.category}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-roboto">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Official Disclaimer from reference portal */}
        <p className="text-[11px] text-slate-400 text-center mt-6 font-roboto">
          *Tool exposure varies by specialization; students may not work with all tools listed.
        </p>

      </div>
    </section>
  );
}
