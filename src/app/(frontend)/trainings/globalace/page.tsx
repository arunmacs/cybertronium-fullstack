import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import GlobalACE from "@/frontend-pages/trainings/GlobalACE";
export const metadata: Metadata = buildMetadata("/trainings/globalace");
export default function Page() { return <GlobalACE />; }
