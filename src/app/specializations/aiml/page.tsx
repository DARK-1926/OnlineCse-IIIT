import React from "react";
import SpecializationDetailView from "@/components/SpecializationDetailView";
import { aimlCurriculum } from "@/data/curriculum";

export const metadata = {
  title: "M.Tech in CSE (AI & Machine Learning) | IIIT Dharwad",
  description:
    "Explore the 2-year Online M.Tech in Computer Science and Engineering with specialization in Artificial Intelligence & Machine Learning from IIIT Dharwad. Live weekend classes, 7-day campus immersion, and deep neural engineering.",
};

export default function AimlSpecializationPage() {
  return <SpecializationDetailView data={aimlCurriculum} />;
}
