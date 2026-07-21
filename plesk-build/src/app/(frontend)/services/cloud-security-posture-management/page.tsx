import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import CloudSecurityPostureManagement from "@/frontend-pages/services/CloudSecurityPostureManagement";
export const metadata: Metadata = buildMetadata("/services/cloud-security-posture-management");
export default function Page() { return <CloudSecurityPostureManagement />; }
