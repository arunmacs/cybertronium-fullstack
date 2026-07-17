import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import Index from "@/frontend-pages/Index";

export const metadata: Metadata = buildMetadata("/");

export default function Page() {
  return <Index />;
}
