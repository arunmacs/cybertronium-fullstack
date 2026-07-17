import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import Trainings from "@/frontend-pages/Trainings";

export const metadata: Metadata = buildMetadata("/trainings");

export default function Page() {
  return <Trainings />;
}
