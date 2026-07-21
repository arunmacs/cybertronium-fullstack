import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import RedPurpleTeaming from "@/frontend-pages/services/RedPurpleTeaming";
export const metadata: Metadata = buildMetadata("/services/red-purple-teaming");
export default function Page() { return <RedPurpleTeaming />; }
