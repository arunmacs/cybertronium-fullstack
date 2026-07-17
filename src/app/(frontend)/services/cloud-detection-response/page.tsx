import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import CloudDetectionResponse from "@/frontend-pages/services/CloudDetectionResponse";
export const metadata: Metadata = buildMetadata("/services/cloud-detection-response");
export default function Page() { return <CloudDetectionResponse />; }
