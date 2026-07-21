import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import CertifiedCyberThreatIntelligenceAnalyst from "@/frontend-pages/trainings/CertifiedCyberThreatIntelligenceAnalyst";
export const metadata: Metadata = buildMetadata("/trainings/certified-cyber-threat-intelligence-analyst");
export default function Page() { return <CertifiedCyberThreatIntelligenceAnalyst />; }
