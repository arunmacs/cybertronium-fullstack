import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import CertifiedSOCAnalyst from "@/frontend-pages/trainings/CertifiedSOCAnalyst";
export const metadata: Metadata = buildMetadata("/trainings/certified-soc-analyst");
export default function Page() { return <CertifiedSOCAnalyst />; }
