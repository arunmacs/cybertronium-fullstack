import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import PenetrationTesting from "@/frontend-pages/services/PenetrationTesting";
export const metadata: Metadata = buildMetadata("/services/penetration-testing");
export default function Page() { return <PenetrationTesting />; }
