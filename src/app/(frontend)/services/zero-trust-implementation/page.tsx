import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import ZeroTrustImplementation from "@/frontend-pages/services/ZeroTrustImplementation";
export const metadata: Metadata = buildMetadata("/services/zero-trust-implementation");
export default function Page() { return <ZeroTrustImplementation />; }
