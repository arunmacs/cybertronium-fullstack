import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import MobileThreatDefense from "@/frontend-pages/services/MobileThreatDefense";
export const metadata: Metadata = buildMetadata("/services/mobile-threat-defense");
export default function Page() { return <MobileThreatDefense />; }
