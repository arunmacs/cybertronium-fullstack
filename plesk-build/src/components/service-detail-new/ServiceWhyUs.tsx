"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface WhyUsCard {
  title: string;
  description: string;
  icon: any;
}

interface ServiceWhyUsProps {
  badge: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  image: string;
  cards: WhyUsCard[];
  align?: 'left' | 'center' | 'right';
}

const ServiceWhyUs: React.FC<ServiceWhyUsProps> = ({
  badge,
  titlePart1,
  titlePart2,
  description,
  image,
  cards,
  align
}) => {
  return (
    <section className="py-10 bg-white ">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
          <div className="lg:w-1/2">
            <div className="w-20 h-0.5 bg-orange-400/50 mb-3 rounded-full"></div>
            <p className="text-primary !text-fluid-sm font-semibold tracking-wide mb-4">
              {badge}
            </p>
            <h2 className="!text-fluid-3xl font-semibold mb-6 text-[#2D0A31]">
              {titlePart1}{" "}
              <br />
              <span className="font-bold !text-fluid-4xl text-gradient-primary">{titlePart2}</span>
            </h2>
            <p className="text-gray-500 leading-relaxed !text-fluid-sm font-medium">
              {description}
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="rounded-xl overflow-hidden shadow-2xl relative w-full h-[280px]">
              <img src={image}
                alt="Why Us"
                className="w-full h-full object-cover"
                loading="lazy" decoding="async" />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className={cn("flex flex-col",
                align === 'left' ? 'items-start text-left' :
                  align === 'right' ? 'items-end text-right' :
                    'items-center text-center'
              )}>
                <div className="mb-4">
                  {/* Handle both functional components and string src icons */}
                  {typeof Icon === 'string' ? (
                    <img src={Icon} alt={card.title} className="w-14 h-14" loading="lazy" decoding="async" />
                  ) : (
                    <Icon className="w-12 h-12" />
                  )}
                </div>
                <h3 className="!text-fluid-lg font-bold text-[#2D0A31] mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 !text-fluid-sm leading-relaxed">
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

export default ServiceWhyUs;
