import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import CompromiseAssessment from "@/frontend-pages/services/CompromiseAssessment";
export const metadata: Metadata = buildMetadata("/services/compromise-assessment");
export default function Page() { return <CompromiseAssessment />; }
