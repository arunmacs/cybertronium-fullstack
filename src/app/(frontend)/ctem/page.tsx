import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import CTEM from "@/frontend-pages/services/CTEM";

export const metadata: Metadata = buildMetadata("/ctem");

export default function Page() {
  return <CTEM />;
}
