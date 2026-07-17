"use client";
import React from "react";

interface SocComplianceProps {
  subtitle: string;
  title: string;
  description: string;
  badges: string[];
}

const SocCompliance: React.FC<SocComplianceProps> = ({
  subtitle,
  title,
  description,
  badges,
}) => {
  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center">
          <div className="w-16 h-0.5 bg-orange-400/50 mx-auto mb-2 rounded-full"></div>
          <p className="text-primary !text-fluid-sm font-semibold tracking-wide mb-2">
            {subtitle}
          </p>
          <h2 className="!text-fluid-5xl font-bold leading-tight mb-2"
            style={{
              background: "linear-gradient(270deg, #F37A3A 0%, #CA1C69 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </h2>
          <p className="text-gray-500 !text-fluid-sm max-w-5xl mx-auto leading-relaxed mb-10">
            {description}
          </p>

          {/* Compliance Badge Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}
                className="px-3 py-2 rounded-[2px] !text-fluid-xs font-bold tracking-wider border border-primary/20 bg-primary/[0.04] text-primary uppercase"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocCompliance;
