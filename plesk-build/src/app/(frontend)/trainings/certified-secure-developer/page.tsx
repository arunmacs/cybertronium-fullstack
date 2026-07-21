import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import CertifiedSecureDeveloper from "@/frontend-pages/trainings/CertifiedSecureDeveloper";
export const metadata: Metadata = buildMetadata("/trainings/certified-secure-developer");
export default function Page() { return <CertifiedSecureDeveloper />; }
