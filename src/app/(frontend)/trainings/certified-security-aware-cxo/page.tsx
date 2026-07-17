import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import CertifiedSecurityAwareCxO from "@/frontend-pages/trainings/CertifiedSecurityAwareCxO";
export const metadata: Metadata = buildMetadata("/trainings/certified-security-aware-cxo");
export default function Page() { return <CertifiedSecurityAwareCxO />; }
