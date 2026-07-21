"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import SecurityListIcon from "@/assets/training/security-svgrepo-com.svg?react";

interface MDROffering {
  title: string;
  description: string;
  icon?: string;
}

interface ServiceMDROfferingsProps {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  offerings: MDROffering[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

const ServiceMDROfferings: React.FC<ServiceMDROfferingsProps> = ({
  badge,
  titleLine1,
  titleLine2,
  description,
  offerings,
  cta,
}) => {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          {/* Decorative line */}
          <div className="w-16 h-0.5 bg-orange-400/50 mx-auto mb-3 rounded-full"></div>

          {/* Badge */}
          <p className="text-primary !text-fluid-sm font-bold tracking-[0.15em] uppercase mb-3">
            {badge}
          </p>

          {/* Title */}
          <h2 className="!text-fluid-5xl font-bold text-gradient-primary leading-tight mb-1">
            {titleLine1}
          </h2>
          <h3 className="!text-fluid-5xl font-extrabold text-gradient-primary leading-tight mb-4">
            {titleLine2}
          </h3>

          {/* Description */}
          <p className="text-gray-500 !text-fluid-sm font-medium">
            {description}
          </p>
        </div>

        {/* Offerings Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-10 md:mb-16">
          {offerings.map((offering, idx) => {
            // In a 2-column grid, last row items don't need a connecting line
            const isLastRow = idx >= offerings.length - 2;
            return (
              <div key={idx} className="flex items-start gap-4 group">
                {/* Icon with connecting line */}
                <div className="relative flex-shrink-0 flex flex-col items-center self-stretch">
                  <SecurityListIcon className="w-6 h-6" />
                  {/* Vertical gradient connector line to next row */}
                  {!isLastRow && (
                    <div
                      className="hidden md:block absolute top-7 left-1/2 -translate-x-1/2 w-[2px] rounded-full"
                      style={{
                        height: "calc(100% - 1.75rem + 2.5rem - 4px)",
                        background: "linear-gradient(180deg, #F37A3A 0%, #CA1C69 50%, #4D124E 100%)",
                        opacity: 0.35,
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="!text-fluid-base font-bold text-[#646464] mb-2 leading-snug">
                    {offering.title}
                  </h4>
                  <p className="text-[#646464] !text-fluid-sm leading-relaxed font-medium">
                    {offering.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h4 className="!text-fluid-4xl font-bold text-gradient-primary mb-3">
            {cta.title}
          </h4>
          <p className="text-gray-500 !text-fluid-sm font-medium max-w-lg mx-auto mb-6 leading-relaxed">
            {cta.description}
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="bg-gradient-cta text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 !text-fluid-sm hover:opacity-90 transition-opacity"
            >
              {cta.buttonText} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMDROfferings;
