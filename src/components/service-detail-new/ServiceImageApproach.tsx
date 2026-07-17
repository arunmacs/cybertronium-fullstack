"use client";
import React from "react";
import Icon1 from "@/assets/services/consulting/1.svg?react";
import Icon2 from "@/assets/services/consulting/2.svg?react";
import Icon3 from "@/assets/services/consulting/3.svg?react";
import Icon4 from "@/assets/services/consulting/4.svg?react";

const ICONS = [Icon1, Icon2, Icon3, Icon4];

interface ApproachCard {
  title: string;
  description: string;
}

interface ServiceImageApproachProps {
  title: string;
  description: string;
  image: string;
  rightTitle: string;
  cards: ApproachCard[];
}

const ServiceImageApproach: React.FC<ServiceImageApproachProps> = ({
  title,
  description,
  image,
  rightTitle,
  cards,
}) => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="!text-fluid-4xl font-bold mb-6 tracking-tight bg-gradient-to-r from-[#C01E6C] to-[#F37A3A] bg-clip-text text-transparent pb-2 leading-tight">
            {title}
          </h2>
          <p className="text-gray-500 !text-fluid-sm leading-relaxed font-medium max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Content Split */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-12 lg:gap-0">
          {/* Left Image */}
          <div className="lg:w-[36%] w-full">
            <div className="rounded-2xl overflow-hidden shadow-2xl w-full h-[500px] lg:h-[680px]">
              <img src={image}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy" decoding="async" />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-[58%] w-full flex flex-col justify-center py-4">
            {/* Right Title (with line breaks) */}
            <h3 className="!text-fluid-4xl font-bold text-[#3B194E] mb-12 leading-tight">
              {rightTitle.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h3>

            {/* 2x2 Grid of Cards */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
              {cards.map((card, idx) => (
                <div key={idx} className="flex flex-col items-start text-left">
                  {/* Icon badge */}
                  <div className="mb-5 relative w-12 h-12 flex items-center justify-center">
                    {idx < 4 ? (() => {
                      const IconComponent = ICONS[idx];
                      return <IconComponent className="w-full h-full object-contain" />;
                    })() : (
                      <div className="w-full h-full rounded-full bg-[#C01E6C]/10 flex items-center justify-center">
                        <span className="text-primary font-bold text-lg">{idx + 1}</span>
                      </div>
                    )}
                  </div>

                  <h4 className="!text-fluid-xl font-bold text-[#3B194E] mb-3 leading-tight pr-4">
                    {card.title}
                  </h4>
                  <p className="text-gray-500 !text-fluid-sm leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceImageApproach;
