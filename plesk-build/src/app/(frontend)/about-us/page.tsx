import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import AboutUs from "@/frontend-pages/AboutUs";

export const metadata: Metadata = buildMetadata("/about-us");

export default function Page() {
  return <AboutUs />;
}
