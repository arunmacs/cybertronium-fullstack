import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import ManagedSecurityAwareness from "@/frontend-pages/services/ManagedSecurityAwareness";
export const metadata: Metadata = buildMetadata("/services/managed-security-awareness");
export default function Page() { return <ManagedSecurityAwareness />; }
