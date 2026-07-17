import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import Contact from "@/frontend-pages/Contact";

export const metadata: Metadata = buildMetadata("/contact");

export default function Page() {
  return <Contact />;
}
