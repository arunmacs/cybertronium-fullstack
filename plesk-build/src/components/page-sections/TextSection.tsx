"use client";
import React from "react";

interface TextSectionProps {
  subheading: string;
  headingLine1: string;
  headingLine2: string;
  paragraphs: string[];
}

const TextSection: React.FC<TextSectionProps> = ({
  subheading,
  headingLine1,
  headingLine2,
  paragraphs,
}) => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <div className="w-12 h-0.5 bg-orange-400/50 mx-auto mb-3 rounded-full"></div>
        <p className="text-[#CA1C69] font-medium text-[13px] mb-2">{subheading}</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          <span className="bg-gradient-to-r from-[#CA1C69] to-[#F37A3A] bg-clip-text text-transparent">
            {headingLine1}
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#CA1C69] to-[#F37A3A] bg-clip-text text-transparent">
            {headingLine2}
          </span>
        </h2>
        {paragraphs.map((paragraph, idx) => (
          <p
            key={idx}
            className={`text-gray-600 text-sm md:text-base leading-relaxed max-w-6xl mx-auto ${idx < paragraphs.length - 1 ? "mb-6" : ""
              }`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default TextSection;
