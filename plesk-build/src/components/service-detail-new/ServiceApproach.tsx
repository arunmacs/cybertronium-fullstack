"use client";
import React from "react";

interface ApproachCard {
  title: string;
  description: string;
  icon: any;
}

interface ServiceApproachProps {
  titlePart1: string;
  titlePart2: string;
  subtitle: string;
  description: string;
  bg?: string;
  cards: ApproachCard[];
}

const ServiceApproach: React.FC<ServiceApproachProps> = ({
  titlePart1,
  titlePart2,
  subtitle,
  description,
  cards,
  bg
}) => {
  return (
    <section className="relative py-10 bg-[#4A154B]  overflow-hidden text-white">
      {/* Background Abstract Lines */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img src={bg} alt="background" className="w-full h-full object-contain" loading="lazy" decoding="async" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-fluid-3xl font-medium leading-tight mb-4">
            {titlePart1} <span className="text-white font-bold text-fluid-4xl">{titlePart2}</span>
          </h2>
          <p className="text-white text-fluid-sm font-semibold tracking-wide mb-6">
            {subtitle}
          </p>
          <p className="text-gray-200 text-fluid-sm leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-2xl transform transition-transform hover:-translate-y-2"
              >
                <div className="mb-4">
                  {typeof Icon === 'string' ? (
                    <img src={Icon} alt={card.title} className="w-8 h-8" style={{ filter: 'invert(22%) sepia(87%) saturate(2716%) hue-rotate(314deg) brightness(91%) contrast(98%)' }} loading="lazy" decoding="async" />
                  ) : (
                    <Icon className="w-8 h-8" />
                  )}
                </div>
                <h3 className="text-fluid-2xl text-primary mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-fluid-sm leading-relaxed font-medium">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceApproach;
