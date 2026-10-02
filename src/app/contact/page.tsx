import React from "react";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";

export const metadata = {
  title: "Contact Admissions Helpline | Online M.Tech CSE | IIIT Dharwad",
  description:
    "Contact the IIIT Dharwad Executive M.Tech Admissions Office. Phone helpline numbers, email address, campus address in Dharwad, and office visiting hours.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#f9f9ff] min-h-screen">
      {/* Header */}
      <section className="bg-[#14293f] text-white py-12 border-b border-[#193654]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="bg-[#CCE70B]/15 text-[#CCE70B] border border-[#CCE70B]/30 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block font-mono">
              Admissions Helpline
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-grotesk tracking-tight">
              Contact Us
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed font-roboto">
              Have queries about eligibility, fee schedules, or the application process? Reach out directly to the admissions team at IIIT Dharwad.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 7 Columns: Details & Map */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Phone & Email Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-[#193654] text-[#CCE70B] flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block font-mono">
                    Phone Numbers
                  </span>
                  <a 
                    href="tel:9240215087" 
                    className="text-base font-bold text-[#193654] hover:text-[#8b1c2e] block transition-colors font-grotesk"
                  >
                    +91 92402 15087
                  </a>
                  <a 
                    href="tel:08047493960" 
                    className="text-sm font-semibold text-slate-700 hover:text-[#8b1c2e] block transition-colors font-roboto"
                  >
                    +91 80474 93960
                  </a>
                  <span className="text-[11px] text-slate-500 block pt-1 font-roboto">
                    Mon - Sat, 9:30 AM to 6:00 PM IST
                  </span>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-[#193654] text-[#CCE70B] flex items-center justify-center mb-3">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block font-mono">
                    Email Address
                  </span>
                  <a 
                    href="mailto:admissions.cse@iiitdwd.ac.in" 
                    className="text-base font-bold text-[#193654] hover:text-[#8b1c2e] block transition-colors break-all font-grotesk"
                  >
                    admissions.cse@iiitdwd.ac.in
                  </a>
                  <span className="text-[11px] text-slate-500 block pt-1 font-roboto">
                    Direct inquiry response within 24 hours
                  </span>
                </div>
              </div>

              {/* Campus Address */}
              <div className="bg-white p-7 rounded-xl border border-slate-200 shadow-2xs space-y-3">
                <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block">
                  // CAMPUS LOCATION
                </span>
                <h3 className="text-lg font-bold text-[#193654] font-grotesk">
                  Permanent Campus Address
                </h3>
                <div className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed font-roboto">
                  <MapPin className="w-5 h-5 text-[#8b1c2e] flex-shrink-0 mt-0.5" />
                  <span>
                    Indian Institute of Information Technology Dharwad, Ittigatti Rd, near Sattur Colony, Dharwad, Karnataka 580009, India
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 pt-1 font-roboto">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>Office Visiting Hours: Monday to Friday, 9:30 AM – 5:30 PM</span>
                </div>
              </div>

              {/* Map Embed */}
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs">
                <div className="p-4 border-b border-slate-200 font-bold text-xs uppercase tracking-wider text-slate-700 flex items-center justify-between font-grotesk">
                  <span>IIIT Dharwad Campus Location</span>
                  <a 
                    href="https://maps.google.com/?q=IIIT+Dharwad" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#193654] flex items-center gap-1 hover:text-[#8b1c2e] hover:underline text-xs"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="aspect-video w-full">
                  <iframe
                    title="IIIT Dharwad Campus Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.853247076214!2d75.02102147493202!3d15.38468758520288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d2b0e6bf6bf3%3A0xb35a5a1f2b604473!2sIndian%20Institute%20of%20Information%20Technology%2C%20Dharwad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

            </div>

            {/* Right 5 Columns */}
            <div className="lg:col-span-5 sticky top-24">
              <InquiryForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
