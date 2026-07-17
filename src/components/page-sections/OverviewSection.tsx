"use client";
import React from "react";
import { CheckCircle2, BadgeCheck } from "lucide-react";
import Checkmark from "@assets/training/check_3472620 1.svg?react"

interface OverviewSectionProps {
  subheading: string;
  heading: string;
  description: string;
  image: string;
  imageAlt?: string;
  sideContent: React.ReactNode;
  listItems: string[];
  bottomDescription?: React.ReactNode;
  useBadgeIcon?: boolean;
}

const OverviewSection: React.FC<OverviewSectionProps> = ({
  subheading,
  heading,
  description,
  image,
  imageAlt = "Accreditation Logo",
  sideContent,
  listItems,
  bottomDescription,
  useBadgeIcon = false,
}) => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="w-12 h-0.5 bg-orange-400/50 mx-auto mb-3 rounded-full"></div>
          <p className="text-[#CA1C69] font-medium text-[13px] mb-2">{subheading}</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-[#CA1C69] to-[#F37A3A] bg-clip-text text-transparent">
              {heading}
            </span>
          </h2>
          <p className="text-gray-600 mt-6 text-sm md:text-base leading-relaxed font-light">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="p-6 bg-white flex justify-center items-center h-full min-h-[300px]">
            <img src={image} alt={imageAlt} className="max-w-full max-h-full object-contain" loading="lazy" decoding="async" />
          </div>
          <div>
            <div className="text-gray-600 text-sm md:text-base leading-relaxed font-light mb-6">
              {sideContent}
            </div>
            <ul className="space-y-6">
              {listItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                  {useBadgeIcon ? (
                    <BadgeCheck className="w-5 h-5 text-[#CA1C69] shrink-0 mt-0.5" fill="#CA1C69" stroke="white" />
                  ) : (
                    <Checkmark className="w-5 h-5 text-[#F37A3A] shrink-0 mt-0.5" />
                  )}
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {bottomDescription && (
          <div className="text-center mt-12">
            <div className="text-gray-600 text-sm md:text-base leading-relaxed font-light max-w-5xl mx-auto">
              {bottomDescription}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OverviewSection;
