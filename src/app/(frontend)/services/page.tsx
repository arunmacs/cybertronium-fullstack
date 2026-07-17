import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import ServicesPage from "@/frontend-pages/Services";

export const metadata: Metadata = buildMetadata("/services");

export default function Page() {
  return <ServicesPage />;
}
