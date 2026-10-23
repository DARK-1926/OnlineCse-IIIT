import React from "react";
import SpecializationDetailView from "@/components/SpecializationDetailView";
import { cloudCurriculum } from "@/data/curriculum";

export const metadata = {
  title: "M.Tech in CSE (Cloud Computing) | IIIT Dharwad",
  description:
    "Architect scalable cloud systems, virtualization frameworks, and distributed systems with the 2-year M.Tech in CSE at IIIT Dharwad.",
};

export default function CloudComputingSpecializationPage() {
  return <SpecializationDetailView data={cloudCurriculum} />;
}
