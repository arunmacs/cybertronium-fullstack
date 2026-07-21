import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import StrategyConsulting from "@/frontend-pages/services/StrategyConsulting";
export const metadata: Metadata = buildMetadata("/services/strategy-consulting");
export default function Page() { return <StrategyConsulting />; }
