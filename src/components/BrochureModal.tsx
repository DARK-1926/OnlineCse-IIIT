"use client";

import React, { useState } from "react";
import { X, FileDown, CheckCircle2, Lock, AlertCircle, ShieldCheck } from "lucide-react";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "aiml",
    website_hp: "", // Honeypot
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim() || formData.name.length < 2) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (!formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.phone || formData.phone.length < 10) {
      setErrorMessage("Please enter a valid contact number.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/brochure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unable to download brochure.");
      }

      setSubmitted(true);

      // Trigger automatic secure download
      const link = document.createElement("a");
      link.href = "/docs/Executive_MTech_CSE_Brochure.pdf";
      link.download = "IIIT_Dharwad_Executive_MTech_CSE_Curriculum.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : "Error initiating download.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#193654] p-6 text-white relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 bg-[#CCE70B] text-[#193654] text-[10px] font-bold px-2.5 py-0.5 rounded font-mono uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Academic Dossier</span>
          </div>
          <h3 className="text-xl font-bold text-white font-grotesk tracking-tight">
            Download Program Prospectus 2026
          </h3>
          <p className="text-xs text-slate-300 mt-1 font-roboto leading-relaxed">
            Get complete credit structures, syllabus outlines, immersion schedules, and scholarship criteria.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/50">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-lg font-bold text-[#193654] font-grotesk">
                Download Initialized Successfully
              </h4>
              <p className="text-xs text-slate-600 font-roboto max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. The official curriculum PDF has been triggered to your device and an advisor summary sent to <span className="font-semibold text-slate-900">{formData.email}</span>.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/docs/Executive_MTech_CSE_Brochure.pdf"
                  download="IIIT_Dharwad_Executive_MTech_CSE_Curriculum.pdf"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#193654] hover:bg-[#14293f] text-white font-bold text-xs uppercase tracking-wider rounded-lg font-grotesk transition-all shadow-sm"
                >
                  <FileDown className="w-4 h-4 text-[#CCE70B]" />
                  <span>Click If Download Didn&apos;t Start</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {errorMessage && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Bot Honeypot */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website_hp}
                  onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1 font-grotesk">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyanshu Verma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-blue-500/15 font-roboto"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1 font-grotesk">
                  Official / Personal Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-blue-500/15 font-roboto"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1 font-grotesk">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-blue-500/15 font-roboto"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1 font-grotesk">
                  Target Specialization Track
                </label>
                <select
                  value={formData.specialization}
                  onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-blue-500/15 font-roboto"
                >
                  <option value="aiml">Artificial Intelligence & Machine Learning (AI/ML)</option>
                  <option value="cybersecurity">Cybersecurity & Digital Defense</option>
                  <option value="cloud">Cloud Computing & DevOps Architecture</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#193654] hover:bg-[#14293f] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer font-grotesk shadow-md hover:shadow-lg disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>Securing Access...</span>
                  </>
                ) : (
                  <>
                    <FileDown className="w-4 h-4 text-[#CCE70B]" />
                    <span>Instant Download Official Prospectus</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>Protected by 256-Bit SSL Encryption • Strictly No Third-Party Reselling</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
