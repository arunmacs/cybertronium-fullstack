"use client";
import React from "react";
import bgGroup from "@/assets/services/Group.svg";

interface CyberLandscapeCard {
  text: string;
  highlight?: string;
}

interface ServiceCyberLandscapeProps {
  titlePart1: string;
  titlePart2: string;
  subtitle: string;
  image: string;
  cards: CyberLandscapeCard[];
}

/**
 * Renders card text with optional highlighted substring in pink/magenta.
 */
const HighlightedText: React.FC<{ text: string; highlight?: string }> = ({ text, highlight }) => {
  if (!highlight) return <>{text}</>;
  const idx = text.indexOf(highlight);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-[#C01E6C] font-bold">{highlight}</span>
      {text.slice(idx + highlight.length)}
    </>
  );
};

const ServiceCyberLandscape: React.FC<ServiceCyberLandscapeProps> = ({
  titlePart1,
  titlePart2,
  subtitle,
  image,
  cards,
}) => {
  // Split cards into positional groups matching the reference layout
  // Row 1 (top): 3 cards
  // Row 2 (left): 3 cards stacked | center: image | Row 2 (right): 3 cards stacked
  // Row 3 (bottom): 4 cards
  const topCards = cards.slice(0, 3);
  const leftCards = cards.slice(3, 6);
  const rightCards = cards.slice(6, 10);
  const bottomCards = cards.slice(10, 14);

  return (
    <section className="relative py-10 md:py-16 bg-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${bgGroup})` }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[32px] md:text-[48px] leading-tight mb-1">
            <span className="font-semibold text-gradient-primary">{titlePart1}</span>
          </h2>
          <h3 className="text-[36px] md:text-[56px] font-extrabold text-gradient-primary leading-tight mb-4">
            {titlePart2}
          </h3>
          <p className="text-gray-400 text-sm tracking-wide">{subtitle}</p>
        </div>

        {/* Cards + Map Layout */}
        <div className="flex flex-col gap-2">
          {/* Top row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {topCards.map((card, idx) => (
              <LandscapeCard key={`top-${idx}`} text={card.text} highlight={card.highlight} />
            ))}
          </div>

          {/* Middle row - left cards | map image | right cards */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-2 items-center">
            {/* Left cards */}
            <div className="flex flex-col gap-4">
              {leftCards.map((card, idx) => (
                <LandscapeCard key={`left-${idx}`} text={card.text} highlight={card.highlight} />
              ))}
            </div>

            {/* Center map image */}
            <div className="flex items-center justify-center px-4">
              <img
                src={image}
                alt="Cyber Threat Landscape Map"
                className="w-full max-w-[500px] h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Right cards */}
            <div className="flex flex-col gap-4">
              {rightCards.map((card, idx) => (
                <LandscapeCard key={`right-${idx}`} text={card.text} highlight={card.highlight} />
              ))}
            </div>
          </div>

          {/* Bottom row - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {bottomCards.map((card, idx) => (
              <LandscapeCard key={`bottom-${idx}`} text={card.text} highlight={card.highlight} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Individual card with gradient border (reuses the project's standard
 * gradient border pattern: from-[#F37A3A]/40 via-[#CA1C69]/40 to-[#4D124E]/40)
 */
const LandscapeCard: React.FC<{ text: string; highlight?: string }> = ({ text, highlight }) => {
  return (
    <div className="rounded-xl p-[1px] bg-gradient-to-r from-[#F37A3A]/40 via-[#CA1C69]/40 to-[#4D124E]/40 transition-all duration-300 hover:from-[#F37A3A]/60 hover:via-[#CA1C69]/60 hover:to-[#4D124E]/60">
      <div className="rounded-[11px] bg-white px-4 py-3 h-full shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <p className="text-[12px] md:text-[13px] text-gray-600 leading-relaxed font-medium">
          <HighlightedText text={text} highlight={highlight} />
        </p>
      </div>
    </div>
  );
};

export default ServiceCyberLandscape;
