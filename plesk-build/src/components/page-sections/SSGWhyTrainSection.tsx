"use client";
import React from "react";
import Checkmark from "@assets/CTEM/check-mark.svg?react";
import SSGCommitmentImg from "@assets/training/ssg-footer.webp";

interface SSGWhyTrainSectionProps {
  heading: string;
  description: string;
  listItems: string[];
  bottomParagraph: string;
  commitmentHeading: string;
  commitmentDescription: string;
  image?: string;
}

const SSGWhyTrainSection: React.FC<SSGWhyTrainSectionProps> = ({
  heading,
  description,
  listItems,
  bottomParagraph,
  commitmentHeading,
  commitmentDescription,
  image,
}) => {
  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left — Content */}
          <div className="flex flex-col justify-center">
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

            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light mb-10">
              {bottomParagraph}
            </p>

            {/* Our Commitment sub-section */}
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#CA1C69] to-[#F37A3A] bg-clip-text text-transparent">
                {commitmentHeading}
              </span>
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
              {commitmentDescription}
            </p>
          </div>

          {/* Right — Image placeholder */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/30">
              <img
                src={SSGCommitmentImg}
                alt="Why Train with Cybertronium"
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

export default SSGWhyTrainSection;
