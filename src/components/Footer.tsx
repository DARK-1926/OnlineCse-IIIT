import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#14293f] text-slate-300 text-xs font-roboto">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Institute Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white p-1 rounded">
                <Image
                  src="/images/logo.webp"
                  alt="IIIT Dharwad Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-base font-grotesk">
                  IIIT Dharwad
                </h3>
                <p className="text-[11px] text-[#CCE70B] font-semibold font-mono">
                  Institute of National Importance
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              The Centre for Continuing Education offers postgraduate degrees designed for working software engineers, blending academic rigor with cutting-edge industry applications.
            </p>

            <div className="text-slate-400 text-xs">
              <span className="text-white font-semibold">Ministry of Education</span>, Govt. of India
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-grotesk">
              Useful Links
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#CCE70B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#CCE70B] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/curriculum" className="hover:text-[#CCE70B] transition-colors">
                  Master Curriculum
                </Link>
              </li>
              <li>
                <Link href="/eligibility" className="hover:text-[#CCE70B] transition-colors">
                  Eligibility Criteria
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#CCE70B] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Specializations */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-grotesk">
              Specializations
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/specializations/aiml" className="hover:text-[#CCE70B] transition-colors">
                  Artificial Intelligence & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/specializations/cybersecurity" className="hover:text-[#CCE70B] transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/specializations/cloud-computing" className="hover:text-[#CCE70B] transition-colors">
                  Cloud Computing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-grotesk">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#CCE70B] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Indian Institute of Information Technology Dharwad, Ittigatti Rd, near Sattur Colony, Dharwad, Karnataka 580009
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#CCE70B] flex-shrink-0" />
                <a href="tel:9240215087" className="hover:text-[#CCE70B] font-semibold text-white">
                  +91 92402 15087 / 08047493960
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#CCE70B] flex-shrink-0" />
                <a href="mailto:admissions.cse@iiitdwd.ac.in" className="hover:text-[#CCE70B]">
                  admissions.cse@iiitdwd.ac.in
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://iiitdwd.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-white"
                >
                  <span>Main IIIT Dharwad Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-[#0f1d2d] py-4 border-t border-slate-800 text-center text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div suppressHydrationWarning>
            © 2026 Indian Institute of Information Technology Dharwad. All Rights Reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-white">About</Link>
            <span>•</span>
            <Link href="/curriculum" className="hover:text-white">Curriculum</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
