import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import MitreAttack from "@/frontend-pages/trainings/MitreAttack";
export const metadata: Metadata = buildMetadata("/trainings/mitre-attck");
export default function Page() { return <MitreAttack />; }
