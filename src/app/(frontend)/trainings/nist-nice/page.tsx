import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import NISTNICE from "@/frontend-pages/trainings/NISTNICE";
export const metadata: Metadata = buildMetadata("/trainings/nist-nice");
export default function Page() { return <NISTNICE />; }
