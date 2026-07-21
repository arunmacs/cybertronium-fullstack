"use client";
import React from "react";
import { AlertOctagon, ChevronRight } from "lucide-react";
import BentoIcon from "@/assets/services/consulting/Icon.svg?react";
import lineBg from "@/assets/services/linebg.webp";

interface BentoLeftCard {
  titlePart1: string;
  titlePart2: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
}

interface BentoRightCard {
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  image: string;
}

interface ServiceBentoGridProps {
  leftCards: BentoLeftCard[];
  rightCard: BentoRightCard;
}

const ServiceBentoGrid: React.FC<ServiceBentoGridProps> = ({
  leftCards,
  rightCard,
}) => {
  return (
    <section className="py-16 bg-white ">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-6 relative">

          {/* Left Column (2 vertically stacked cards) */}
          <div className="flex flex-col gap-6 w-full lg:w-[50%] relative z-10">
            {leftCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-[#C01E6C]/30 relative overflow-hidden flex-1 group hover:shadow-md transition-shadow duration-300"
              >
                {/* Decorative background gradients */}
                <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-gradient-to-bl from-[#C01E6C]/5 to-transparent rounded-full opacity-50 blur-2xl"></div>
                <div className="absolute bottom-[-50px] left-[-50px] w-48 h-48 bg-gradient-to-tr from-[#F37A3A]/5 to-transparent rounded-full opacity-50 blur-2xl"></div>

                <div className="relative z-10">
                  <div className="mb-6 text-[#C01E6C]">
                    <BentoIcon className="w-10 h-10" />
                  </div>

                  <h3 className="text-base md:text-lg font-bold mb-4 text-[#461148]">
                    {card.titlePart1} {card.titlePart2}
                  </h3>

                  <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed mb-8">
                    {card.description}
                  </p>

                  {(card.linkText) && (
                    <a href={card.linkUrl || "#"} className="inline-flex items-center text-[#C01E6C] font-medium text-sm hover:text-[#9c1858] transition-colors">
                      {card.linkText} <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (1 large card with image at bottom) */}
          <div className="w-full lg:w-[50%]">
            <div className="bg-white rounded-3xl pt-6 px-6 lg:pt-8 lg:px-8 pb-0 shadow-sm border border-[#C01E6C]/30 h-full flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow duration-300">

              {/* Background abstract lines */}
              <img src={lineBg}
                alt=""
                className="absolute top-0 right-0 w-[150%] h-[100%] object-cover opacity-50 mix-blend-multiply pointer-events-none origin-top-right scale-110"
                loading="lazy" decoding="async" />

              <div className="relative z-10">
                <h3 className="text-xl md:text-[22px] font-bold mb-6 text-[#461148]">
                  {rightCard.title}
                </h3>

                <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed mb-8">
                  {rightCard.description}
                </p>

                {(rightCard.linkText) && (
                  <a href={rightCard.linkUrl || "#"} className="inline-flex items-center text-[#C01E6C] font-medium text-sm hover:text-[#9c1858] transition-colors mb-4">
                    {rightCard.linkText} <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                )}
              </div>

              {/* Bottom Image */}
              <div className="relative z-10 mt-auto flex-grow min-h-[200px] -mx-6 lg:-mx-8 w-[calc(100%+48px)] lg:w-[calc(100%+64px)]">
                <img src={rightCard.image}
                  alt={rightCard.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy" decoding="async" />
                {/* White fade at top of image */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent pointer-events-none h-48"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBentoGrid;
