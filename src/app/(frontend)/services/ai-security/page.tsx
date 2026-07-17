import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import AISecurity from "@/frontend-pages/services/AISecurity";
export const metadata: Metadata = buildMetadata("/services/ai-security");
export default function Page() { return <AISecurity />; }
