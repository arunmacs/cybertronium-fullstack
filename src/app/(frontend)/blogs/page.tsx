import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import Blogs from "@/frontend-pages/Blogs";

export const metadata: Metadata = buildMetadata("/blogs");

export default function Page() {
  return <Blogs />;
}
