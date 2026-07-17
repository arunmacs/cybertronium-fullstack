import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import CybersecurityMaturityAssessment from "@/frontend-pages/services/CybersecurityMaturityAssessment";
export const metadata: Metadata = buildMetadata("/services/cybersecurity-maturity-assessment");
export default function Page() { return <CybersecurityMaturityAssessment />; }
