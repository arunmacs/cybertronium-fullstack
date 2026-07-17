import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import CertifiedCloudSecurityProfessional from "@/frontend-pages/trainings/CertifiedCloudSecurityProfessional";
export const metadata: Metadata = buildMetadata("/trainings/certified-cloud-security-professional");
export default function Page() { return <CertifiedCloudSecurityProfessional />; }
