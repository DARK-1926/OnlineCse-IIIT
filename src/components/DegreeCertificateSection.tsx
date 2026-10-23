import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function DegreeCertificateSection() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block mb-1">
            // OFFICIAL CREDENTIAL
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#193654] font-grotesk">
            Degree Awarded by IIIT Dharwad
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto">
            Graduates receive an Master of Technology (M.Tech) in Computer Science & Engineering by IIIT:
          </p>
        </div>

        {/* Certificate Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Certificate Mockup */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-xl border border-slate-300 bg-slate-900">
              <Image
                src="/images/degree_certificate.jpg"
                alt="IIIT Dharwad Master of Technology Degree Certificate Mockup"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-[11px] text-slate-400 mt-2 italic font-roboto">
              *Illustrative presentation of the official degree certificate and transcript folder.
            </p>
          </div>

          {/* Right Column: Credential Merits & Recognition */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#193654] font-grotesk">
                Full Academic Rigor & Global Recognition
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-roboto">
                The degree awarded is the Master of Technology in Computer Science and Engineering, carrying the full statutory standing and prestige of an Institute of National Importance under the Ministry of Education, Government of India.
              </p>
            </div>

            <div className="space-y-3 text-xs text-slate-700 font-roboto">
              <div className="flex items-start gap-2.5 p-3.5 bg-[#f9f9ff] rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#8b1c2e] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#193654] block font-grotesk">Two-Stage Multi-Exit Pathways:</strong>
                  <span><strong>PG Diploma in CSE:</strong> Awarded upon completing 30 credits (Semesters 1 & 2 coursework).</span><br />
                  <span><strong>M.Tech in CSE:</strong> Conferred upon completing full 60 credits including the 30-credit master&apos;s project and dissertation.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 bg-[#f9f9ff] rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#8b1c2e] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#193654] block font-grotesk">Full-Time M.Tech Equivalent & PhD Eligibility:</strong>
                  Conferred under the Indian Institutes of Information Technology (Public-Private Partnership) Act of Parliament. Enjoys complete academic equivalence to full-time on-campus degrees, granting direct eligibility for Ph.D. admissions across India and abroad.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 bg-[#f9f9ff] rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#8b1c2e] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#193654] block font-grotesk">Domain Specialization Transcripts:</strong>
                  Your official grade card and transcripts explicitly reflect your domain track: <strong>AI & ML</strong>, <strong>Cyber Security</strong>, or <strong>Cloud Computing</strong>.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 bg-[#f9f9ff] rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#8b1c2e] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#193654] block font-grotesk">Annual Convocation & Alumni Privileges:</strong>
                  Graduates are invited to receive their degree scroll in person at the annual convocation at IIIT Dharwad, and receive official institute alumni status with an official institutional email ID.
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-4 bg-slate-50 border-l-4 border-[#193654] rounded-r-lg text-xs text-slate-600">
                <span className="font-bold text-[#193654] block mb-0.5 font-grotesk">Official Digital Verification:</span>
                Degrees and transcripts are permanently verifiable via the National Academic Depository (NAD) and DigiLocker portals.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
