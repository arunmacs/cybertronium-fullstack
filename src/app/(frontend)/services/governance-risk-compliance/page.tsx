import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import GovernanceRiskCompliance from "@/frontend-pages/services/GovernanceRiskCompliance";
export const metadata: Metadata = buildMetadata("/services/governance-risk-compliance");
export default function Page() { return <GovernanceRiskCompliance />; }
