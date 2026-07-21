import type { Metadata } from "next";
import { buildMetadata } from "@/lib/buildMetadata";
import FirmwareSecurity from "@/frontend-pages/services/FirmwareSecurity";
export const metadata: Metadata = buildMetadata("/services/firmware-security");
export default function Page() { return <FirmwareSecurity />; }
