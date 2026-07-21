"use client";

import { useEffect, useState } from "react";
import { formatDate } from "@/lib/utils";

export function FormattedDate({ date }: { date: Date | string | number | null | undefined }) {
  const [formatted, setFormatted] = useState<string>("");

  useEffect(() => {
    setFormatted(formatDate(date));
  }, [date]);

  if (!date) return null;

  // Render on client only to avoid hydration mismatch, or provide initial fallback
  return <span suppressHydrationWarning>{formatted || formatDate(date)}</span>;
}
