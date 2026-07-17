import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import CertifiedRedTeamProfessional from "@/frontend-pages/trainings/CertifiedRedTeamProfessional";
export const metadata: Metadata = buildMetadata("/trainings/certified-red-team-professional");
export default function Page() { return <CertifiedRedTeamProfessional />; }
