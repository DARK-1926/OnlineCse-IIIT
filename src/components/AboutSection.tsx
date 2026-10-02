import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 bg-[#f9f9ff] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Campus Building Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-slate-200">
              <Image
                src="/images/campus_building_hero.jpg"
                alt="IIIT Dharwad Campus Building"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#193654] text-white p-4 rounded-lg shadow-lg hidden sm:block max-w-[200px]">
              <div className="text-xl font-bold text-[#CCE70B] font-grotesk">60 Acres</div>
              <div className="text-xs text-slate-200 mt-0.5 font-roboto">
                Permanent Campus at Sattur Colony, Dharwad
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Identity */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block">
              // ABOUT THE INSTITUTE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#193654] font-grotesk">
              About Indian Institute of Information Technology Dharwad
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-roboto">
              IIIT Dharwad is an Institute of National Importance established in 2015 by the Ministry of Education, Government of India, the Government of Karnataka, and industry partners under a Public-Private Partnership (PPP) model.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-roboto">
              As an apex technical institute, IIIT Dharwad focuses on education and research in Information Technology and allied computing sciences. The academic ecosystem is tailored to blend deep computational theory with applied problem-solving, supported by distinguished faculty, modern computational testbeds, and an active research culture.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-700 font-medium font-roboto">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8b1c2e]" />
                <span>Institute of National Importance by Act of Parliament</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8b1c2e]" />
                <span>Dedicated Centre for Continuing Education for working tech professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8b1c2e]" />
                <span>On-campus residential immersion with full access to institutional computing labs</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#193654] hover:bg-[#1f4266] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs font-grotesk"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4 text-[#CCE70B]" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
