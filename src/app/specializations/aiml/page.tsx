import React from "react";
import SpecializationDetailView from "@/components/SpecializationDetailView";
import { aimlCurriculum } from "@/data/curriculum";

export const metadata = {
  title: "Hybrid mode M.Tech in CSE (AI & Machine Learning) | IIIT Dharwad",
  description:
    "Explore the 2-year Hybrid mode M.Tech in CSE with specialization in Artificial Intelligence & Machine Learning from IIIT Dharwad. Live weekend classes, 7-day campus immersion, and deep neural engineering.",
};

export default function AimlSpecializationPage() {
  return <SpecializationDetailView data={aimlCurriculum} />;
}
