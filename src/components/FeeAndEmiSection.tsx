"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, Calculator, ShieldCheck } from "lucide-react";

// Deterministic currency formatter ensuring server and client HTML always match
function formatInr(num: number): string {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(num);
}

export default function FeeAndEmiSection() {
  const [tenure, setTenure] = useState<number>(36);
  const [downPayment, setDownPayment] = useState<number>(44250); // 10% standard booking
  const taxSlab = 30; // 30% tax bracket

  // Fee Details
  const totalFee = 442500;

  // Financed amount after down payment
  const loanPrincipal = Math.max(0, totalFee - downPayment);

  // Exact 0% EMI calculation (Principal / Months)
  const monthlyEmi = Math.round(loanPrincipal / tenure);

  // Approximate Section 80E Tax Savings on Education (30% slab)
  const estimatedTaxBenefit = Math.round((totalFee * (taxSlab / 100)) * 0.5); // Effective deduction across 2 FYs
  const netEffectiveFee = totalFee - estimatedTaxBenefit;

  return (
    <section id="fees" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-100/80 text-blue-900 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5 text-blue-700" />
            <span>Transparent Investment & Financing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#193654] font-grotesk tracking-tight">
            Tuition Schedule & Interactive EMI Simulator
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto leading-relaxed">
            Zero hidden costs. Pay per semester or choose from flexible 0% interest monthly installments backed by nationalized partner banks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Transparent Fee Breakdown */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-md space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block font-mono">
                  Semester Tuition Fee
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#193654] font-grotesk">
                    ₹ 1,10,625
                  </span>
                  <span className="text-xs text-slate-500 font-medium font-roboto">
                    / semester (4 Semesters)
                  </span>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-[11px] text-slate-400 font-mono uppercase block">Total Course Fee</span>
                <span className="text-base font-bold text-emerald-700 font-grotesk">₹ 4,42,500 (All-Inclusive)</span>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-700 font-roboto">
              <h4 className="font-bold text-[#193654] text-sm font-grotesk">
                What is 100% Included in the Fee:
              </h4>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Live Interactive Weekend Masterclasses & 24/7 LMS Cloud Sandbox Access</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>7-Day Residential Campus Immersion at IIIT Dharwad (Hostel & Labs Included)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Thesis Capstone Evaluation by Academic Council and Industry Jury</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Convocation, Permanent IIIT Dharwad Alumni Credentials & Transcripts</span>
              </div>
            </div>

            {/* Tax Relief & Corporate Sponsorship Note */}
            <div className="bg-gradient-to-br from-blue-50/70 to-indigo-50/50 p-5 rounded-xl border border-blue-100 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                <span className="text-xs font-bold text-[#193654] font-grotesk">
                  Income Tax Benefit (Section 80E) & Corporate L&D
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-roboto">
                Education loans taken for higher studies under Section 80E enjoy <strong className="text-[#193654]">100% interest tax deduction</strong> for up to 8 years. Corporate sponsorship invoices with GST credentials are provided for employer learning allowances.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Financial Simulator */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-md space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#CCE70B]/25 text-[#193654] border border-[#CCE70B]/50 text-[10px] font-bold px-2.5 py-0.5 rounded-full font-mono uppercase tracking-wider mb-2">
                <span>0% Interest Financing Simulator</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#193654] font-grotesk tracking-tight">
                Simulate Your Monthly Installment
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-roboto">
                Customize your down payment and tenure to calculate your exact monthly investment:
              </p>
            </div>

            {/* Down Payment Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-700 font-grotesk">Initial Booking Deposit:</span>
                <span className="font-bold text-[#193654] font-mono text-sm" suppressHydrationWarning>
                  ₹ {formatInr(downPayment)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100000"
                step="5000"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#193654]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>₹0 (Full Financing)</span>
                <span>₹50,000</span>
                <span>₹1,00,000</span>
              </div>
            </div>

            {/* Tenure Selector */}
            <div>
              <span className="text-xs font-semibold text-slate-700 block mb-2 font-grotesk">
                Select Installment Duration:
              </span>
              <div className="grid grid-cols-4 gap-2">
                {[12, 18, 24, 36].map((months) => (
                  <button
                    key={months}
                    type="button"
                    onClick={() => setTenure(months)}
                    className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer font-grotesk ${
                      tenure === months
                        ? "bg-[#193654] text-[#CCE70B] border-[#193654] shadow-sm scale-102"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {months} Mos
                  </button>
                ))}
              </div>
            </div>

            {/* Calculated EMI Display */}
            <div className="bg-gradient-to-r from-[#193654] to-[#14293f] p-5 rounded-xl text-center text-white space-y-1.5 shadow-sm">
              <span className="text-[11px] text-slate-300 font-mono uppercase tracking-wider block">
                Estimated Monthly Installment (0% Interest)
              </span>
              <div className="flex items-center justify-center gap-1.5">
                <span className="text-2xl font-extrabold text-[#CCE70B] font-grotesk" suppressHydrationWarning>
                  ₹ {formatInr(monthlyEmi)}
                </span>
                <span className="text-xs text-slate-300 font-roboto">/ month*</span>
              </div>
              <p className="text-[11px] text-slate-300 font-mono" suppressHydrationWarning>
                Financed Balance: ₹{formatInr(loanPrincipal)} across {tenure} months
              </p>
            </div>

            {/* Tax Savings Estimator Pill */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <span className="font-semibold text-slate-700 font-grotesk block">Effective Cost with Tax Relief:</span>
                <span className="text-[11px] text-slate-500">Based on 30% IT bracket deductions under 80E</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-emerald-700 font-grotesk text-sm" suppressHydrationWarning>
                  ~ ₹{formatInr(netEffectiveFee)}
                </span>
                <span className="text-[10px] text-slate-400 block font-mono">Net Investment</span>
              </div>
            </div>

            <div className="pt-1">
              <a
                href="#lead-form"
                className="w-full py-3.5 bg-[#193654] hover:bg-[#14293f] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 font-grotesk shadow-md hover:shadow-lg"
              >
                <span>Check Your EMI Eligibility & Avail 0% Offer</span>
                <ArrowRight className="w-4 h-4 text-[#CCE70B]" />
              </a>
            </div>

            <p className="text-[10px] text-slate-400 text-center font-roboto">
              *Financing facilitated via verified nationalized bank & NBFC partners with instant digital KYC.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
