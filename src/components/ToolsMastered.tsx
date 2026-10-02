"use client";

import React, { useState } from "react";

export default function ToolsMastered() {
  const [activeTab, setActiveTab] = useState<"aiml" | "cloud" | "cyber">("aiml");

  const toolsData = {
    aiml: [
      { name: "PyTorch", category: "Deep Learning & Neural Networks", desc: "GPU-accelerated tensor computing and deep research architectures." },
      { name: "TensorFlow", category: "Production Machine Learning", desc: "End-to-end open source platform for machine learning pipelines." },
      { name: "Hugging Face", category: "Transformers & LLMs", desc: "State-of-the-art Natural Language Processing models and fine-tuning." },
      { name: "OpenCV", category: "Computer Vision", desc: "Real-time computer vision, object detection, and image segmentation." },
      { name: "Scikit-Learn", category: "Statistical Modeling", desc: "Classical regression, classification, clustering, and dimensionality reduction." },
      { name: "MLflow", category: "MLOps & Experimentation", desc: "Lifecycle management, model registry, and hyperparameter tracking." },
      { name: "CUDA & cuDNN", category: "GPU Acceleration", desc: "Parallel computing platform for high-performance neural computing." },
      { name: "Jupyter Labs", category: "Interactive Research", desc: "Exploratory data analysis, interactive visualization, and prototyping." },
    ],
    cloud: [
      { name: "Kubernetes (K8s)", category: "Container Orchestration", desc: "Automated container deployment, scaling, ingress, and self-healing." },
      { name: "Docker", category: "Virtualization", desc: "Lightweight containerized environments and microservice sandboxing." },
      { name: "Terraform", category: "Infrastructure as Code", desc: "Declarative multi-cloud provisioning and immutable infrastructure." },
      { name: "Apache Kafka", category: "Event Streaming", desc: "High-throughput distributed event logs and asynchronous messaging." },
      { name: "Prometheus & Grafana", category: "Observability", desc: "Real-time distributed telemetry, time-series metrics, and alerting." },
      { name: "Istio Service Mesh", category: "Network Routing", desc: "Traffic management, mTLS encryption, and telemetry between services." },
      { name: "ArgoCD", category: "GitOps Continuous Delivery", desc: "Declarative GitOps deployment pipelines directly onto Kubernetes." },
      { name: "gRPC & Protocol Buffers", category: "Microservice IPC", desc: "High-performance, low-latency inter-service RPC communication." },
    ],
    cyber: [
      { name: "Wireshark", category: "Packet & Protocol Analysis", desc: "Deep packet inspection, network forensics, and protocol decoding." },
      { name: "Metasploit Framework", category: "Penetration Testing", desc: "Vulnerability validation, exploit development, and penetration testing." },
      { name: "Burp Suite", category: "Web Security Testing", desc: "Enterprise web application security scanning and OWASP Top 10 testing." },
      { name: "Snort / Suricata", category: "Network IDS / IPS", desc: "Real-time traffic analysis and packet logging for threat detection." },
      { name: "Kali Linux", category: "Security Distribution", desc: "Debian-based operating system equipped with 600+ ethical defense tools." },
      { name: "Ghidra", category: "Reverse Engineering", desc: "NSA-developed reverse engineering and disassembler framework." },
      { name: "OpenSSL & PKI", category: "Applied Cryptography", desc: "Cryptographic algorithms, key generation, TLS certificate authorities." },
      { name: "Nmap & Masscan", category: "Reconnaissance", desc: "Port scanning, vulnerability discovery, and network perimeter mapping." },
    ],
  };

  return (
    <section className="py-16 bg-[#f9f9ff] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block mb-1">
            // HANDS-ON ENGINEERING STACK
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#193654] font-grotesk">
            Tools & Technologies You’ll Master
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto">
            Gain production-grade proficiency with enterprise platforms utilized by Fortune 500 tech companies:
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-lg border border-slate-200 shadow-2xs inline-flex gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("aiml")}
              className={`px-5 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer font-grotesk ${
                activeTab === "aiml"
                  ? "bg-[#193654] text-[#CCE70B]"
                  : "text-slate-600 hover:text-[#193654]"
              }`}
            >
              AI & Machine Learning
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("cloud")}
              className={`px-5 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer font-grotesk ${
                activeTab === "cloud"
                  ? "bg-[#193654] text-[#CCE70B]"
                  : "text-slate-600 hover:text-[#193654]"
              }`}
            >
              Cloud & Distributed Systems
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("cyber")}
              className={`px-5 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer font-grotesk ${
                activeTab === "cyber"
                  ? "bg-[#193654] text-[#CCE70B]"
                  : "text-slate-600 hover:text-[#193654]"
              }`}
            >
              Cybersecurity & Defense
            </button>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {toolsData[activeTab].map((tool, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs hover:border-[#193654] transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-[#193654] font-grotesk">
                  {tool.name}
                </span>
                <span className="text-[10px] bg-slate-100 text-slate-600 font-semibold px-2 py-0.5 rounded font-mono">
                  Lab Stack
                </span>
              </div>
              <div className="text-[11px] font-semibold text-[#8b1c2e] mb-1.5 font-mono">
                {tool.category}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-roboto">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
