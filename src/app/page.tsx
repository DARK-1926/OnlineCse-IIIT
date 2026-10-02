import React from "react";
import HeroSection from "@/components/HeroSection";
import AnnouncementTicker from "@/components/AnnouncementTicker";
import ProgramOverview from "@/components/ProgramOverview";
import AboutSection from "@/components/AboutSection";
import SpecializationsSection from "@/components/SpecializationsSection";
import ProgramHighlights from "@/components/ProgramHighlights";
import ToolsMastered from "@/components/ToolsMastered";
import CampusImmersionSection from "@/components/CampusImmersionSection";
import FeeAndEmiSection from "@/components/FeeAndEmiSection";
import DegreeCertificateSection from "@/components/DegreeCertificateSection";
import FacultySection from "@/components/FacultySection";
import EligibilitySection from "@/components/EligibilitySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CareerPossibilities from "@/components/CareerPossibilities";
import SkillsMastered from "@/components/SkillsMastered";
import DirectorMessage from "@/components/DirectorMessage";
import NewsPressSection from "@/components/NewsPressSection";
import FaqSection from "@/components/FaqSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AnnouncementTicker />
      <ProgramOverview />
      <AboutSection />
      <SpecializationsSection />
      <ProgramHighlights />
      <ToolsMastered />
      <CampusImmersionSection />
      <FeeAndEmiSection />
      <DegreeCertificateSection />
      <FacultySection />
      <EligibilitySection />
      <WhyChooseUs />
      <CareerPossibilities />
      <SkillsMastered />
      <DirectorMessage />
      <NewsPressSection />
      <FaqSection />
    </>
  );
}
