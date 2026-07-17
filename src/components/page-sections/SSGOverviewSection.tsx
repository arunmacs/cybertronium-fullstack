"use client";
import React from "react";
import SSGOverview from "@assets/training/ssg-intro.webp";
import Checkmark from "@assets/CTEM/check-mark.svg?react";

interface SSGOverviewSectionProps {
  subheading: string;
  heading: string;
  description: string;
  listItems: string[];
  bottomParagraph: string;
  image?: string;
}

const SSGOverviewSection: React.FC<SSGOverviewSectionProps> = ({
  subheading,
  heading,
  description,
  listItems,
  bottomParagraph,
  image,
}) => {
  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left — Content */}
          <div className="flex flex-col justify-center">
            <div className="w-12 h-0.5 bg-orange-400/50 mb-3 rounded-full" />
            <p className="text-[#CA1C69] font-medium text-[13px] mb-2">
              {subheading}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.15] mb-6">
              <span className="bg-gradient-to-r from-[#CA1C69] to-[#F37A3A] bg-clip-text text-transparent">
                {heading}
              </span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light mb-8">
              {description}
            </p>

            {/* Checkmark list */}
            <ul className="space-y-4 mb-8">
              {listItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                  <Checkmark className="w-5 h-5 text-[#F37A3A] shrink-0 mt-0.5" />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
              {bottomParagraph}
            </p>
          </div>

          {/* Right — Image placeholder */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-full rounded-2xl overflow-hidden bg-gradient-to-br from-pink-50 to-orange-50 border border-pink-200/40">
              <img
                src={SSGOverview}
                alt="SkillsFuture Singapore Overview"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SSGOverviewSection;
