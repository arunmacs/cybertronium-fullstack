import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import SecureDigitalTransformation from "@/frontend-pages/services/SecureDigitalTransformation";
export const metadata: Metadata = buildMetadata("/services/secure-digital-transformation");
export default function Page() { return <SecureDigitalTransformation />; }
