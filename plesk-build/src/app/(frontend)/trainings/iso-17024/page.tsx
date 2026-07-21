import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import ISO17024 from "@/frontend-pages/trainings/ISO17024";
export const metadata: Metadata = buildMetadata("/trainings/iso-17024");
export default function Page() { return <ISO17024 />; }
