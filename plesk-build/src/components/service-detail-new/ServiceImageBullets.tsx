"use client";
import React from "react";

interface ServiceImageBulletsProps {
  titlePart1: string;
  titlePart2?: string;
  image: string;
  bullets: string[];
}

const ServiceImageBullets: React.FC<ServiceImageBulletsProps> = ({
  titlePart1,
  titlePart2,
  image,
  bullets,
}) => {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={image}
          alt="Background"
          className="w-full h-full object-cover rotate-180"
          loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0B2E]/70 via-[#1A0B2E]/60 to-[#1A0B2E]/0 z-10" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left Title Area */}
          <div className="lg:w-[45%] text-left">
            <h2 className="!text-fluid-2xl font-bold text-white leading-tight">
              {titlePart1}
              {titlePart2 && <span className="block mt-2">{titlePart2}</span>}
            </h2>
          </div>

          {/* Right Bullets Area */}
          <div className="lg:w-[55%]">
            <ul className="space-y-4">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-white mr-4 text-2xl mt-0.5 leading-none">•</span>
                  <p className="text-white !text-fluid-base leading-relaxed font-light">
                    {bullet}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceImageBullets;
