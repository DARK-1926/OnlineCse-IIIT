"use client";

import React, { useState } from "react";
import { CheckCircle2, Lock, ShieldCheck, AlertCircle, ArrowRight } from "lucide-react";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "1-3 Years",
    qualification: "B.Tech / B.E.",
    city: "",
    website_hp: "", // Honeypot field for bot protection
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic client validation
    if (!formData.name.trim() || formData.name.length < 2) {
      setErrorMessage("Please enter a valid full name.");
      return;
    }

    if (!formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.phone || formData.phone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to submit inquiry. Please try again.");
      }

      setReferenceId(data.referenceId || "IIITDWD-CONFIRMED");
      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Submission failed. Please check your network and try again.";
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 border border-emerald-100 shadow-xl text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/50">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <div className="inline-block bg-emerald-100 text-emerald-800 text-[11px] font-bold px-3 py-1 rounded-full font-mono uppercase tracking-wider">
          Inquiry Registered
        </div>
        <h3 className="text-xl font-bold text-[#193654] font-grotesk">
          Thank You, {formData.name}!
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed font-roboto max-w-sm mx-auto">
          Your profile has been prioritized. An official academic advisor will connect with you within 24 business hours to evaluate credit transfers and eligibility.
        </p>
        {referenceId && (
          <div className="py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-700">
            Application Ref: <span className="font-bold text-[#193654]">{referenceId}</span>
          </div>
        )}
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              experience: "1-3 Years",
              qualification: "B.Tech / B.E.",
              city: "",
              website_hp: "",
              consent: true,
            });
          }}
          className="text-xs text-[#8b1c2e] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer pt-2"
        >
          <span>Submit another application profile</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div 
      id="lead-form"
      className="bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-200"
    >
      <div className="border-b border-slate-100 pb-4 mb-5">
        <h2 className="text-xl font-bold text-[#193654] font-grotesk tracking-tight">
          Admissions Counseling
        </h2>
        <p className="text-xs text-slate-500 mt-1 font-roboto">
          Connect with an academic advisor for eligibility review and curriculum details
        </p>
      </div>

      {errorMessage && (
        <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
        {/* Anti-Bot Honeypot Field - Hidden from humans, traps spambots */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website_hp">Leave empty</label>
          <input
            id="website_hp"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website_hp}
            onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Full Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#d6dbe1] rounded-lg text-[#1e293b] placeholder:text-[#8a94a6] focus:outline-none focus:border-[#2563eb] focus:ring-3 focus:ring-blue-500/15 transition-all shadow-xs"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Corporate / Personal Email *</label>
            <input
              type="email"
              required
              placeholder="e.g. rahul@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#d6dbe1] rounded-lg text-[#1e293b] placeholder:text-[#8a94a6] focus:outline-none focus:border-[#2563eb] focus:ring-3 focus:ring-blue-500/15 transition-all shadow-xs"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Contact Number *</label>
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#d6dbe1] rounded-lg text-[#1e293b] placeholder:text-[#8a94a6] focus:outline-none focus:border-[#2563eb] focus:ring-3 focus:ring-blue-500/15 transition-all shadow-xs"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Work Experience</label>
            <select
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#d6dbe1] rounded-lg text-[#1e293b] focus:outline-none focus:border-[#2563eb] focus:ring-3 focus:ring-blue-500/15 transition-all shadow-xs"
            >
              <option value="Fresher / < 1 Year">Fresher / &lt; 1 Year</option>
              <option value="1-3 Years">1 - 3 Years Experience</option>
              <option value="3-5 Years">3 - 5 Years Experience</option>
              <option value="5+ Years">5+ Years Experience</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Undergrad Qualification</label>
            <select
              value={formData.qualification}
              onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#d6dbe1] rounded-lg text-[#1e293b] focus:outline-none focus:border-[#2563eb] focus:ring-3 focus:ring-blue-500/15 transition-all shadow-xs"
            >
              <option value="B.Tech / B.E.">B.Tech / B.E. (Any Branch)</option>
              <option value="MCA">MCA (Master of Computer App.)</option>
              <option value="M.Sc (CS/IT/Maths)">M.Sc (CS / IT / Maths / Stats)</option>
              <option value="Other">Other Equivalent Tech Degree</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Current City / Location</label>
            <input
              type="text"
              placeholder="e.g. Bengaluru, Pune, Hyderabad"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#d6dbe1] rounded-lg text-[#1e293b] placeholder:text-[#8a94a6] focus:outline-none focus:border-[#2563eb] focus:ring-3 focus:ring-blue-500/15 transition-all shadow-xs"
            />
          </div>
        </div>

        <div className="flex items-start gap-2 pt-1">
          <input
            id="terms"
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 w-4 h-4 rounded border-slate-300 text-[#193654] accent-[#193654] cursor-pointer"
          />
          <label htmlFor="terms" className="text-[11px] text-slate-500 leading-snug cursor-pointer select-none">
            I agree to receive academic advisement, syllabus guidelines, and admission updates from IIIT Dharwad CCE.
          </label>
        </div>

        <button
          type="submit"
          disabled={loading || !formData.consent}
          className="w-full py-3.5 bg-gradient-to-r from-[#193654] to-[#14293f] hover:from-[#14293f] hover:to-[#0f1f30] text-white font-bold text-sm rounded-lg transition-all cursor-pointer disabled:opacity-50 tracking-wider uppercase font-grotesk shadow-md hover:shadow-lg active:translate-y-px"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span>Securing Application Profile...</span>
            </span>
          ) : (
            "Request Official Program Dossier"
          )}
        </button>

        <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
          <Lock className="w-3.5 h-3.5 text-emerald-600" />
          <span>256-Bit SSL Encrypted • Zero Spam Commitment</span>
        </div>
      </form>
    </div>
  );
}
