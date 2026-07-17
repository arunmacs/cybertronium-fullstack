import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import SocAsAService from "@/frontend-pages/services/SocAsAService";
export const metadata: Metadata = buildMetadata("/services/soc-as-a-service");
export default function Page() { return <SocAsAService />; }
