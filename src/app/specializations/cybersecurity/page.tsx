import React from "react";
import SpecializationDetailView from "@/components/SpecializationDetailView";
import { cyberCurriculum } from "@/data/curriculum";

export const metadata = {
  title: "M.Tech in CSE (Cybersecurity & Defense) | IIIT Dharwad",
  description:
    "Master advanced cryptography, network defense, penetration testing, and zero-trust cloud security in the 2-year M.Tech in CSE program from IIIT Dharwad.",
};

export default function CybersecuritySpecializationPage() {
  return <SpecializationDetailView data={cyberCurriculum} />;
}
