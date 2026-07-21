import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import PrivacyPolicy from "@/frontend-pages/PrivacyPolicy";

export const metadata: Metadata = buildMetadata("/privacy-policy");

export default function Page() {
  return <PrivacyPolicy />;
}
