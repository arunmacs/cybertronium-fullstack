"use client";
'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardAction } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface CollapsibleCardProps {
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
  cardClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
  defaultExpanded?: boolean;
}

export function CollapsibleCard({
  title,
  description,
  children,
  cardClassName,
  headerClassName,
  titleClassName,
  defaultExpanded = false
}: CollapsibleCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <Card className={cn("overflow-hidden transition-all p-0", cardClassName)}>
      <div
        className="cursor-pointer select-none hover:bg-muted/30 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardHeader className={cn("p-3", headerClassName)}>
          <CardTitle className={cn("text-base", titleClassName)}>{title}</CardTitle>
          <CardDescription className="text-xs pr-8">{description}</CardDescription>
          <CardAction className="mt-1 self-center">
            {isExpanded ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
          </CardAction>
        </CardHeader>
      </div>

      {isExpanded && (
        <CardContent className="p-3 bg-card">
          {children}
        </CardContent>
      )}
    </Card>
  );
}
