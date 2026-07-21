import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import SkillsFutureSg from "@/frontend-pages/trainings/SkillsFutureSg";
export const metadata: Metadata = buildMetadata("/trainings/skillsfuture-sg");
export default function Page() { return <SkillsFutureSg />; }
