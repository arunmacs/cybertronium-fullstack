"use client";
import React from "react";
import Alert from "@assets/services/Alert triangle.svg?react"
import Backlog from "@assets/services/backlog.svg?react"
import Cost from "@assets/services/Trending down.svg?react"
import AI from "@assets/services/mingcute--ai-line 1.svg?react"
import Tooling from "@assets/services/X square.svg?react"

interface ProblemCard {
  icon: string;
  title: string;
  description: string;
}

interface SocProblemCardsProps {
  subtitle: string;
  title: string;
  description: string;
  cards: ProblemCard[];
}

const iconMap: Record<string, React.ReactNode> = {
  alert: (
    <Alert className="w-8 h-8" />
  ),
  backlog: (
    <Backlog className="w-8 h-8" />
  ),
  cost: (
    <Cost className="w-8 h-8" />
  ),
  ai: (
    <AI className="w-8 h-8" />
  ),
  tooling: (
    <Tooling className="w-8 h-8" />
  )
};

/* Gradient-border card wrapper — full gradient border */
const GradientBorderCard: React.FC<{
  children: React.ReactNode;
  borderSide?: "left" | "bottom";
  className?: string;
}> = ({ children, borderSide, className = "" }) => (
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

const SocProblemCards: React.FC<SocProblemCardsProps> = ({
  subtitle,
  title,
  description,
  cards,
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

        {/* Cards Grid — 3 top, 2 bottom centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {cards.slice(0, 3).map((card, idx) => (
            <GradientBorderCard key={idx} className="p-4 text-center">
              <div className="flex justify-center mb-4">
                {iconMap[card.icon] || (
                  <div className="w-10 h-10 rounded border border-dashed border-gray-300 flex items-center justify-center text-[8px] text-gray-400">
                    Icon
                  </div>
                )}
              </div>
              <h3 className="!text-fluid-base font-bold text-[#2D0A31] mb-3">
                {card.title}
              </h3>
              <p className="text-gray-500 !text-fluid-xs leading-relaxed">
                {card.description}
              </p>
            </GradientBorderCard>
          ))}
        </div>

        {/* Bottom 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {cards.slice(3).map((card, idx) => (
            <GradientBorderCard key={idx + 3} className="p-4 text-center">
              <div className="flex justify-center mb-4">
                {iconMap[card.icon] || (
                  <div className="w-10 h-10 rounded border border-dashed border-gray-300 flex items-center justify-center text-[8px] text-gray-400">
                    Icon
                  </div>
                )}
              </div>
              <h3 className="!text-fluid-base font-bold text-[#2D0A31] mb-3">
                {card.title}
              </h3>
              <p className="text-gray-500 !text-fluid-xs leading-relaxed">
                {card.description}
              </p>
            </GradientBorderCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocProblemCards;
