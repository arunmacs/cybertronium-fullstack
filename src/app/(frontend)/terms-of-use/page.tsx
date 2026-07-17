import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import TermsOfUse from "@/frontend-pages/TermsOfUse";

export const metadata: Metadata = buildMetadata("/terms-of-use");

export default function Page() {
  return <TermsOfUse />;
}
