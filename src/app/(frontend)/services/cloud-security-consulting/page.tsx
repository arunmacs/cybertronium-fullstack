import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import CloudSecurityConsulting from "@/frontend-pages/services/CloudSecurityConsulting";
export const metadata: Metadata = buildMetadata("/services/cloud-security-consulting");
export default function Page() { return <CloudSecurityConsulting />; }
