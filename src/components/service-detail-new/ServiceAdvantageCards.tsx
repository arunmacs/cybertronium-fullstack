"use client";
import React from "react";
import { cn } from "@/lib/utils";

export interface AdvantageCard {
  icon: any;
  badge?: string;
  title: string;
  description: string;
}

interface ServiceAdvantageCardsProps {
  cards: AdvantageCard[];
}

const ServiceAdvantageCards: React.FC<ServiceAdvantageCardsProps> = ({ cards }) => {
  if (!cards || cards.length === 0) return null;

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="flex flex-col items-start text-left">
                <div className="mb-6">
                  {typeof Icon === 'string' ? (
                    <img src={Icon} alt={card.title} className="w-16 h-16 object-contain" loading="lazy" decoding="async" />
                  ) : (
                    <Icon className="w-16 h-16" />
                  )}
                </div>

                <div className="w-16 h-[2px] bg-[#F37A3A] mb-4"></div>

                {card.badge && (
                  <span className="text-primary !text-fluid-sm font-semibold mb-4 inline-block">
                    {card.badge}
                  </span>
                )}

                <h3 className="!text-fluid-2xl font-bold text-[#2D0A31] mb-6 leading-tight">
                  {card.title}
                </h3>

                <p className="text-gray-500 !text-fluid-sm leading-relaxed">
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

export default ServiceAdvantageCards;
