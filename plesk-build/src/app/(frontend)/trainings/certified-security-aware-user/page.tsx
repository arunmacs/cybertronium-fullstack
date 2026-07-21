import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import CertifiedSecurityAwareUser from "@/frontend-pages/trainings/CertifiedSecurityAwareUser";
export const metadata: Metadata = buildMetadata("/trainings/certified-security-aware-user");
export default function Page() { return <CertifiedSecurityAwareUser />; }
