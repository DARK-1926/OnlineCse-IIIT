import React from "react";
import SpecializationDetailView from "@/components/SpecializationDetailView";
import { cloudCurriculum } from "@/data/curriculum";

export const metadata = {
  title: "Hybrid mode M.Tech in CSE (Cloud Computing & Distributed Systems) | IIIT Dharwad",
  description:
    "Architect enterprise-grade cloud systems, Kubernetes clusters, and distributed consensus engines with the 2-year Hybrid mode M.Tech in CSE at IIIT Dharwad.",
};

export default function CloudComputingSpecializationPage() {
  return <SpecializationDetailView data={cloudCurriculum} />;
}
