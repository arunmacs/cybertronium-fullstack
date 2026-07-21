import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import DigitalForensicsIncidentResponse from "@/frontend-pages/services/DigitalForensicsIncidentResponse";
export const metadata: Metadata = buildMetadata("/services/digital-forensics-incident-response");
export default function Page() { return <DigitalForensicsIncidentResponse />; }
