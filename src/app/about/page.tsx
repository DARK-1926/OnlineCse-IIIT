import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";

export const metadata = {
  title: "About IIIT Dharwad | Online M.Tech in CSE",
  description: "Learn about the Indian Institute of Information Technology Dharwad (Institute of National Importance), our faculty, campus, and executive postgraduate programs."
};

export default function AboutPage() {
  return (
    <div className="bg-[#f9f9ff] min-h-screen">
      {/* Page Header */}
      <section className="bg-[#14293f] text-white py-14 border-b border-[#193654]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="bg-[#CCE70B]/15 text-[#CCE70B] border border-[#CCE70B]/30 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block font-mono">
              Institute of National Importance
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-grotesk tracking-tight">
              About Indian Institute of Information Technology Dharwad
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed font-roboto">
              Established in 2015 by the Ministry of Education, Government of India, the Government of Karnataka, and industry partners under a Public-Private Partnership model.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 8 Columns */}
            <div className="lg:col-span-8 space-y-8">
              
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-2xs space-y-4">
                <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block">
                  // INSTITUTIONAL OVERVIEW
                </span>
                <h2 className="text-2xl font-bold text-[#193654] font-grotesk">
                  Overview of the Institute
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-roboto">
                  Indian Institute of Information Technology Dharwad is an Institute of National Importance set up with a mandate to foster excellence in information technology and computer science education, research, and industry-oriented innovation.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-roboto">
                  Located in the educational cluster of Hubballi-Dharwad, Karnataka, the institute is driven by distinguished doctoral faculty and active research groups working in Artificial Intelligence, Cyber-Physical Systems, Data Engineering, and Speech Processing.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 font-grotesk">
                  <div className="p-4 bg-[#f9f9ff] rounded-lg border border-slate-200 text-center">
                    <span className="text-2xl font-bold text-[#193654] block">2015</span>
                    <span className="text-xs text-slate-500 font-mono">// Established</span>
                  </div>
                  <div className="p-4 bg-[#f9f9ff] rounded-lg border border-slate-200 text-center">
                    <span className="text-2xl font-bold text-[#193654] block">60 Acres</span>
                    <span className="text-xs text-slate-500 font-mono">// Campus Area</span>
                  </div>
                  <div className="p-4 bg-[#f9f9ff] rounded-lg border border-slate-200 text-center col-span-2 sm:col-span-1">
                    <span className="text-2xl font-bold text-[#8b1c2e] block">INI</span>
                    <span className="text-xs text-slate-500 font-mono">// National Status</span>
                  </div>
                </div>
              </div>

              {/* Campus Photo & Infrastructure */}
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-2xs space-y-4">
                <h3 className="text-xl font-bold text-[#193654] font-grotesk">
                  Permanent Campus at Sattur Colony
                </h3>
                <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-slate-200 my-4 shadow-sm">
                  <Image
                    src="/images/campus_building_hero.jpg"
                    alt="IIIT Dharwad Campus Building"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-roboto">
                  The permanent campus on Ittigatti Road, near Sattur Colony, features modern computing labs equipped with high-performance clusters, digital classrooms, central library facilities, student activity centers, and residential hostels that host participants during their 7-day campus immersion.
                </p>
                <div className="space-y-2 text-xs text-slate-700 pt-2 font-medium font-roboto">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8b1c2e]" />
                    <span>NVIDIA GPU workstation servers for deep learning research</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8b1c2e]" />
                    <span>High-throughput gigabit network infrastructure across campus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8b1c2e]" />
                    <span>Residential suites for executive immersion cohorts</span>
                  </div>
                </div>
              </div>

              {/* Vision of CEP */}
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-2xs space-y-4">
                <h3 className="text-xl font-bold text-[#193654] font-grotesk">
                  Centre for Continuing Education (CEP)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-roboto">
                  The Centre for Continuing Education at IIIT Dharwad was established to extend the institute’s academic and technological capabilities to India&apos;s working engineering workforce. Through structured weekend degree programs like the Online M.Tech in CSE, software engineers can elevate their theoretical depth and master specialized computing disciplines without stepping away from full-time employment.
                </p>
                <div className="pt-2">
                  <Link
                    href="/curriculum"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#193654] hover:text-[#8b1c2e] uppercase tracking-wider font-grotesk"
                  >
                    <span>View Program Curriculum</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>

            {/* Right 4 Columns */}
            <div className="lg:col-span-4 sticky top-24">
              <InquiryForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
