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
                Permanent Campus at Dharwad, Karnataka
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
              Indian Institute of Information Technology, Dharwad (IIIT Dharwad), established in 2015 through a unique Public-Private-Partnership by the Ministry of Education, Government of India, in collaboration with the Government of Karnataka and industry partner Keonics, offers world-class education designed to meet global industry demands.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-roboto">
              As an Institute of National Importance by an Act of Parliament, IIIT Dharwad distinguishes itself by focusing on applying computing technologies to address socially relevant challenges. Its academic philosophy emphasizes creating technological innovations that are meaningful, contextual, and transformative. The M.Tech in CSE is delivered with the same academic rigor, comprehensive coverage, and outcomes as the institute&apos;s on-campus programs.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-700 font-medium font-roboto">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8b1c2e]" />
                <span>Institute of National Importance established by Act of Parliament (MoE, GoI, GoK, Keonics)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8b1c2e]" />
                <span>Full-time equivalent M.Tech with PhD eligibility & UGC recognized 60-credit structure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8b1c2e]" />
                <span>7-Day hands-on campus immersion on the permanent 60-acre campus in Dharwad, Karnataka</span>
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
