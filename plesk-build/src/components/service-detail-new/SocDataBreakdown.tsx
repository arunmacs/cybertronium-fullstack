"use client";
import React from "react";
import Alert from "@assets/services/Alert triangle.svg?react"
import TrendingDown from "@assets/services/Trending down.svg?react"
import Clock from "@assets/services/Clock.svg?react"
import Database from "@assets/services/Database.svg?react"

interface StatCard {
  icon: string;
  value: string;
  label: string;
}

interface DonutItem {
  value: string;
  label: string;
  percentage: number;
  color: string;
}

interface DonutPanel {
  title: string;
  items: DonutItem[];
}

interface SocDataBreakdownProps {
  subtitle: string;
  title: string;
  description: string;
  statCards: StatCard[];
  donutPanels: DonutPanel[];
  sourceCitation: string;
}

const statIconMap: Record<string, React.ReactNode> = {
  alert: (
    <Alert className="w-8 h-8" />
  ),
  wave: (
    <TrendingDown className="w-8 h-8" />
  ),
  clock: <Clock className="w-8 h-8" />,
  growth: <Database className="w-8 h-8" />,
};

const DonutRing: React.FC<{ percentage: number; color: string; size?: number }> = ({
  percentage,
  color,
  size = 80,
}) => {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const isGradient = color === "gradient" || color.includes("gradient");

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
      {isGradient && (
        <defs>
          <linearGradient id="donut-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#CA1C69" />
            <stop offset="100%" stopColor="#F37A3A" />
          </linearGradient>
        </defs>
      )}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#F9EBEF"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={isGradient ? "url(#donut-gradient)" : color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
};

/* Gradient-border card wrapper — full gradient border */
const GradientBorderCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`relative rounded-xl bg-white ${className}`}>
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        padding: "1px",
        background: "linear-gradient(135deg, #F37A3A 0%, #CA1C69 100%)",
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        borderRadius: "inherit",
      }}
    />
    <div className="relative z-10 h-full">{children}</div>
  </div>
);

const SocDataBreakdown: React.FC<SocDataBreakdownProps> = ({
  subtitle,
  title,
  description,
  statCards,
  donutPanels,
  sourceCitation,
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

        {/* Stat Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {statCards.map((card, idx) => (
            <GradientBorderCard key={idx} className="p-4 text-center">
              <div className="flex justify-center mb-3">
                {statIconMap[card.icon] || (
                  <div className="w-7 h-7 rounded border border-dashed border-gray-300 flex items-center justify-center text-[8px] text-gray-400">
                    Icon
                  </div>
                )}
              </div>
              <div className="!text-fluid-2xl font-bold text-[#2D0A31] leading-none mb-2">
                {card.value}
              </div>
              <p className="text-gray-500 !text-fluid-xs leading-relaxed">
                {card.label}
              </p>
            </GradientBorderCard>
          ))}
        </div>

        {/* Donut Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {donutPanels.map((panel, pIdx) => (
            <div key={pIdx} className="relative rounded-2xl bg-white border border-gray-100 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] p-4 md:p-6">
              <div className="flex flex-col items-center mb-6">
                <div className="inline-flex flex-col items-stretch">
                  <h4 className="!text-fluid-sm font-bold text-[#2D0A31] mb-2 text-center px-1">
                    {panel.title}
                  </h4>
                  <div className="h-0.5 w-full bg-gradient-to-r from-[#CA1C69] to-[#F37A3A] rounded-full" />
                </div>
              </div>
              <div className="flex items-start justify-center gap-6 md:gap-8 flex-wrap">
                {panel.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex flex-col items-center gap-3">
                    <div className="relative">
                      <DonutRing
                        percentage={item.percentage}
                        color={iIdx === 0 ? "gradient" : "#E8789A"}
                        size={75}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="!text-fluid-base font-bold text-[#2D0A31]">
                          {item.value}
                        </span>
                      </div>
                    </div>
                    <span className="!text-fluid-xs text-gray-500 text-center max-w-[80px] leading-snug">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Source Citation */}
        <p className="text-center text-gray-400 !text-fluid-xs italic">
          {sourceCitation}
        </p>
      </div>
    </section>
  );
};

export default SocDataBreakdown;
