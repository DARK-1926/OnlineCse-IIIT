"use client";

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BrochureModal from "./BrochureModal";
import StickyBottomBar from "./StickyBottomBar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1f2933]">
      <Header onOpenBrochureModal={() => setBrochureOpen(true)} />
      <main className="flex-1 pb-16 sm:pb-0">{children}</main>
      <Footer />
      <BrochureModal isOpen={brochureOpen} onClose={() => setBrochureOpen(false)} />
      <StickyBottomBar onOpenBrochureModal={() => setBrochureOpen(true)} />
    </div>
  );
}
