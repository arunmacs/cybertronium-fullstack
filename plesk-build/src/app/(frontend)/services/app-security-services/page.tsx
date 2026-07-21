import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import AppSecurityServices from "@/frontend-pages/services/AppSecurityServices";
export const metadata: Metadata = buildMetadata("/services/app-security-services");
export default function Page() { return <AppSecurityServices />; }
