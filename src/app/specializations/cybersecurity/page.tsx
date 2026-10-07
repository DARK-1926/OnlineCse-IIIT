import React from "react";
import SpecializationDetailView from "@/components/SpecializationDetailView";
import { cyberCurriculum } from "@/data/curriculum";

export const metadata = {
  title: "Hybrid mode M.Tech in CSE (Cybersecurity & Defense) | IIIT Dharwad",
  description:
    "Master advanced cryptography, network defense, penetration testing, and zero-trust cloud security in the 2-year Hybrid mode M.Tech in CSE from IIIT Dharwad.",
};

export default function CybersecuritySpecializationPage() {
  return <SpecializationDetailView data={cyberCurriculum} />;
}
