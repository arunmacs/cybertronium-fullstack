import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import SocForSme from "@/frontend-pages/services/SocForSme";
export const metadata: Metadata = buildMetadata("/services/soc-for-sme");
export default function Page() { return <SocForSme />; }
