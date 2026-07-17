import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import GlobalACEFramework from "@/frontend-pages/trainings/GlobalACEFramework";
export const metadata: Metadata = buildMetadata("/trainings/globalace-framework");
export default function Page() { return <GlobalACEFramework />; }
