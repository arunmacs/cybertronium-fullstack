"use client";
import React from 'react';
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  /** Top-level icon or badge (e.g. "Powered by Cybertron") */
  badge?: React.ReactNode;

  /** Whether to show the horizontal orange bar. Defaults to true. */
  showBar?: boolean;

  /** Custom classes for the horizontal bar */
  barClassName?: string;

  /** The small uppercase text above the title */
  subtitle?: React.ReactNode;
  /** Custom classes for the subtitle. Defaults to standard text-primary layout. */
  subtitleClassName?: string;

  /** Full title if no gradient split is needed */
  title?: React.ReactNode;

  /** First part of the title (usually solid color) */
  titlePart1?: React.ReactNode;
  /** Custom classes for titlePart1 */
  titlePart1ClassName?: string;

  /** Second part of the title (usually gradient) */
  titlePart2?: React.ReactNode;
  /** Custom classes for titlePart2 */
  titlePart2ClassName?: string;

  /** Classes applied to the entire <h2> wrapper */
  titleClassName?: string;

  /** The paragraph text under the title */
  description?: React.ReactNode;
  /** Custom classes for the description */
  descriptionClassName?: string;

  /** Overall alignment */
  align?: 'left' | 'center' | 'right';

  /** Overall wrapper classes */
  className?: string;

  /** Legacy support: quick switch to white text for dark backgrounds */
  lightText?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  showBar = true,
  barClassName,
  subtitle,
  subtitleClassName,
  title,
  titlePart1,
  titlePart1ClassName,
  titlePart2,
  titlePart2ClassName,
  titleClassName,
  description,
  descriptionClassName,
  align = 'center',
  className,
  lightText = false
}) => {

  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
  const mxClass = align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : 'mr-auto';

  return (
    <div className={cn("mb-6", alignClass, className)}>

      {/* 1. Badge / Icon */}
      {badge && (
        <div className={cn("mb-4 flex", align === 'center' ? "justify-center" : align === 'right' ? "justify-end" : "justify-start")}>
          {badge}
        </div>
      )}

      {/* 2. Orange Horizontal Bar */}
      {showBar && (
        <div className={cn(
          "w-8 h-0.5 rounded-full mb-3",
          "bg-accent/50", // Standardized orange bar
          mxClass,
          barClassName
        )} />
      )}

      {/* 3. Subtitle */}
      {subtitle && (
        <p className={cn(
          "font-semibold uppercase tracking-[0.2em] mb-2 text-[clamp(10px,0.8vw+0.4rem,12px)]",
          lightText ? "text-white" : "text-primary",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}

      {/* 4. Title */}
      {(title || titlePart1 || titlePart2) && (
        <h2 className={cn(
          "font-bold mb-3 tracking-tight !leading-[1.1]",
          // Default text size. Can be overridden via titleClassName
          "text-[clamp(24px,4vw+1rem,50px)]", // Universal single source of truth size
          lightText ? "text-white" : "text-foreground",
          titleClassName
        )}>
          {title ? (
            title
          ) : (
            <>
              {titlePart1 && (
                <span className={cn(titlePart1ClassName)}>
                  {titlePart1}
                </span>
              )}
              {titlePart1 && titlePart2 && " "}
              {titlePart2 && (
                <span className={cn(
                  !lightText && "text-gradient-primary", // Apply standard gradient unless lightText is true
                  titlePart2ClassName
                )}>
                  {titlePart2}
                </span>
              )}
            </>
          )}
        </h2>
      )}

      {/* 5. Description */}
      {description && (
        <p className={cn(
          "font-normal mt-3",
          "text-[clamp(12px,1.2vw+0.5rem,14px)]", // Standardized fluid sizes
          lightText ? "text-white/70" : "text-muted-foreground",
          "max-w-3xl", // Standard width cap
          mxClass,
          descriptionClassName
        )}>
          {description}
        </p>
      )}

    </div>
  );
};
