import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import CisOAsAService from "@/frontend-pages/services/CisOAsAService";
export const metadata: Metadata = buildMetadata("/services/ciso-as-a-service");
export default function Page() { return <CisOAsAService />; }
