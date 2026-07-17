import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import SocForEnterprise from "@/frontend-pages/services/SocForEnterprise";
export const metadata: Metadata = buildMetadata("/services/soc-for-enterprise");
export default function Page() { return <SocForEnterprise />; }
