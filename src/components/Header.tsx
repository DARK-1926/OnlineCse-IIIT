"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronDown, 
  FileDown, 
  GraduationCap
} from "lucide-react";

interface HeaderProps {
  onOpenBrochureModal?: () => void;
}

export default function Header({ onOpenBrochureModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [specDropdownOpen, setSpecDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-slate-200">
      {/* Top Institutional Bar */}
      <div className="bg-[#14293f] text-slate-200 text-xs py-2 px-4 border-b border-[#193654]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">
              Indian Institute of Information Technology Dharwad
            </span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="hidden md:inline text-[#CCE70B] font-medium">
              Institute of National Importance (MoE, Govt. of India)
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href="mailto:admissions.cse@iiitdwd.ac.in" 
              className="hover:text-[#CCE70B] transition-colors flex items-center gap-1.5 text-slate-300"
            >
              <Mail className="w-3.5 h-3.5 text-[#CCE70B]" />
              <span>admissions.cse@iiitdwd.ac.in</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="tel:9240215087" 
              className="hover:text-[#CCE70B] transition-colors flex items-center gap-1.5 font-semibold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-[#CCE70B]" />
              <span>+91 92402 15087</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Institute Identity */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0 py-1">
            <div className="relative h-12 w-56 sm:w-72 md:w-80 flex-shrink-0">
              <Image
                src="/images/iiitdwd_logo_transparent.png"
                alt="Indian Institute of Information Technology Dharwad"
                fill
                className="object-contain object-left group-hover:opacity-95 transition-opacity"
                priority
              />
            </div>
            <div className="hidden xl:flex items-center pl-3 border-l border-slate-300">
              <div>
                <div className="text-xs font-bold text-[#8b1c2e] uppercase tracking-wider font-grotesk leading-tight">
                  Executive M.Tech
                </div>
                <div className="text-[10px] text-slate-500 font-medium font-roboto">
                  Continuing Education
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold text-[#193654] font-grotesk">
            <Link 
              href="/" 
              className="px-3.5 py-2 rounded-md hover:text-[#8b1c2e] hover:bg-slate-50 transition-colors"
            >
              Home
            </Link>

            <Link 
              href="/about" 
              className="px-3.5 py-2 rounded-md hover:text-[#8b1c2e] hover:bg-slate-50 transition-colors"
            >
              About Us
            </Link>

            {/* Specializations Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSpecDropdownOpen(true)}
              onMouseLeave={() => setSpecDropdownOpen(false)}
            >
              <button 
                type="button"
                className="px-3.5 py-2 rounded-md hover:text-[#8b1c2e] hover:bg-slate-50 transition-colors flex items-center gap-1 cursor-pointer"
                onClick={() => setSpecDropdownOpen(!specDropdownOpen)}
              >
                <span>Specializations</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>

              {specDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50">
                  <Link
                    href="/specializations/aiml"
                    className="block px-4 py-2.5 text-xs font-semibold text-[#193654] hover:bg-slate-50 hover:text-[#8b1c2e] transition-colors"
                    onClick={() => setSpecDropdownOpen(false)}
                  >
                    Artificial Intelligence & Machine Learning
                  </Link>
                  <Link
                    href="/specializations/cybersecurity"
                    className="block px-4 py-2.5 text-xs font-semibold text-[#193654] hover:bg-slate-50 hover:text-[#8b1c2e] transition-colors border-t border-slate-100"
                    onClick={() => setSpecDropdownOpen(false)}
                  >
                    Cybersecurity
                  </Link>
                  <Link
                    href="/specializations/cloud-computing"
                    className="block px-4 py-2.5 text-xs font-semibold text-[#193654] hover:bg-slate-50 hover:text-[#8b1c2e] transition-colors border-t border-slate-100"
                    onClick={() => setSpecDropdownOpen(false)}
                  >
                    Cloud Computing
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/curriculum" 
              className="px-3.5 py-2 rounded-md hover:text-[#8b1c2e] hover:bg-slate-50 transition-colors"
            >
              Curriculum
            </Link>

            <Link 
              href="/eligibility" 
              className="px-3.5 py-2 rounded-md hover:text-[#8b1c2e] hover:bg-slate-50 transition-colors"
            >
              Eligibility
            </Link>

            <Link 
              href="/contact" 
              className="px-3.5 py-2 rounded-md hover:text-[#8b1c2e] hover:bg-slate-50 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenBrochureModal}
              className="px-4 py-2.5 rounded-md border-2 border-[#193654] text-[#193654] font-bold text-xs uppercase tracking-wider hover:bg-[#193654] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Brochure</span>
            </button>

            <a
              href="#lead-form"
              className="px-5 py-2.5 rounded-md bg-[#193654] hover:bg-[#1f4266] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center gap-1.5"
            >
              <GraduationCap className="w-4 h-4 text-[#CCE70B]" />
              <span>Apply Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#193654] hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Flyout */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1 text-sm font-semibold text-[#193654]">
            <Link 
              href="/" 
              className="py-2 px-3 rounded hover:bg-slate-50 hover:text-[#8b1c2e]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="py-2 px-3 rounded hover:bg-slate-50 hover:text-[#8b1c2e]"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <div className="py-2 px-3 space-y-1 bg-slate-50 rounded">
              <span className="text-xs font-bold text-[#8b1c2e] uppercase tracking-wider block">Specializations</span>
              <div className="pl-2 space-y-1 pt-1">
                <Link
                  href="/specializations/aiml"
                  className="block text-xs font-medium text-slate-700 hover:text-[#193654]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  • AI & Machine Learning
                </Link>
                <Link
                  href="/specializations/cybersecurity"
                  className="block text-xs font-medium text-slate-700 hover:text-[#193654]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  • Cybersecurity
                </Link>
                <Link
                  href="/specializations/cloud-computing"
                  className="block text-xs font-medium text-slate-700 hover:text-[#193654]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  • Cloud Computing
                </Link>
              </div>
            </div>

            <Link 
              href="/curriculum" 
              className="py-2 px-3 rounded hover:bg-slate-50 hover:text-[#8b1c2e]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Curriculum
            </Link>
            <Link 
              href="/eligibility" 
              className="py-2 px-3 rounded hover:bg-slate-50 hover:text-[#8b1c2e]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Eligibility
            </Link>
            <Link 
              href="/contact" 
              className="py-2 px-3 rounded hover:bg-slate-50 hover:text-[#8b1c2e]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBrochureModal) onOpenBrochureModal();
              }}
              className="w-full py-2.5 text-center rounded border-2 border-[#193654] text-[#193654] font-bold text-xs uppercase tracking-wider"
            >
              Download Brochure
            </button>
            <a
              href="#lead-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center rounded bg-[#193654] text-white font-bold text-xs uppercase tracking-wider"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
