"use client";
import React from "react";
import Database from "@assets/services/Database.svg?react"
import Tactic from "@assets/services/assessment/tactic.svg?react"
import Brain from "@assets/services/Vector.svg?react"
import Cpu from "@assets/services/Cpu.svg?react"
import Eye from "@assets/services/Eye.svg?react"
import Shield from "@assets/services/Shield.svg?react"
import Maximize from "@assets/services/Maximize 2.svg?react"
import Login from "@assets/services/Log in.svg?react"
import Target from "@assets/services/Target.svg?react"

interface PlatformItem {
  icon: string;
  title: string;
  description: string;
}

interface SocPlatformGridProps {
  subtitle: string;
  title: string;
  description: string;
  items: PlatformItem[];
}

const platformIconMap: Record<string, React.ReactNode> = {
  siem: <Database className="w-8 h-8" />,
  soar: <Tactic className="w-8 h-8" />,
  ueba: <Brain className="w-8 h-8" />,
  agenticAI: <Cpu className="w-8 h-8" />,
  threatHunting: <Eye className="w-8 h-8" />,
  incidentResponse: <Shield className="w-8 h-8" />,
  stack: <Maximize className="w-8 h-8" />,
  ingest: <Login className="w-8 h-8" />,
  envAware: <Target className="w-8 h-8" />
};

const SocPlatformGrid: React.FC<SocPlatformGridProps> = ({
  subtitle,
  title,
  description,
  items,
}) => {
  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-0.5 bg-orange-400/50 mx-auto mb-3 rounded-full"></div>
          <p className="text-primary !text-fluid-sm font-semibold tracking-wide mb-2">
            {subtitle}
          </p>
          <h2 className="!text-fluid-5xl font-bold text-gradient-primary leading-tight mb-4">
            {title}
          </h2>
          <p className="text-gray-500 !text-fluid-sm max-w-5xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* 3×3 Grid — no card borders per design, flat icon-centric layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="mb-4 text-primary">
                {platformIconMap[item.icon] || (
                  <div className="w-9 h-9 rounded border border-dashed border-gray-300 flex items-center justify-center text-[8px] text-gray-400">
                    Icon
                  </div>
                )}
              </div>
              <h3 className="!text-fluid-lg font-bold text-[#2D0A31] mb-3 tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-500 !text-fluid-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocPlatformGrid;
