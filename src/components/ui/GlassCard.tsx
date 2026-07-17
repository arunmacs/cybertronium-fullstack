"use client";
import React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientBorder?: string; 
  glassBackground?: string; 
  containerClassName?: string;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(({
  children,
  className,
  containerClassName,
  gradientBorder = "bg-gradient-to-br from-white/50 to-white/10",
  glassBackground,
  style,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative rounded-[12px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden",
        containerClassName
      )}
      style={{
        background: glassBackground || 'linear-gradient(142.13deg, rgba(254, 248, 255, 0.21) 1.8%, rgba(254, 248, 255, 0) 99.75%)',
        backdropFilter: 'blur(44px)',
        WebkitBackdropFilter: 'blur(44px)',
        ...style
      }}
      {...props}
    >
      {/* Gradient Border Mask */}
      <div
        className={cn(
          "absolute inset-0 rounded-[inherit] pointer-events-none p-[1px]",
          gradientBorder
        )}
        style={{
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {/* Content */}
      <div className={cn("relative z-10 h-full w-full", className)}>
        {children}
      </div>
    </div>
  );
});

GlassCard.displayName = "GlassCard";
