import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import CertifiedExperientialCybersecurityAwareUser from "@/frontend-pages/trainings/CertifiedExperientialCybersecurityAwareUser";
export const metadata: Metadata = buildMetadata("/trainings/certified-experiential-cybersecurity-aware-user");
export default function Page() { return <CertifiedExperientialCybersecurityAwareUser />; }
