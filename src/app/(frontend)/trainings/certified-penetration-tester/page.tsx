import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import CertifiedPenetrationTester from "@/frontend-pages/trainings/CertifiedPenetrationTester";
export const metadata: Metadata = buildMetadata("/trainings/certified-penetration-tester");
export default function Page() { return <CertifiedPenetrationTester />; }
