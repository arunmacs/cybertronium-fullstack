"use client";
import React from "react";

interface ServicePartnersProps {
  title: string;
  description: string;
  partners: string[];
}

const ServicePartners: React.FC<ServicePartnersProps> = ({
  title,
  description,
  partners,
}) => {
  return (
    <section className="py-10 bg-white ">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="!text-fluid-5xl font-bold text-primary mb-6">
          {title}
        </h2>
        <p className="text-gray-500 !text-fluid-sm leading-relaxed font-medium mb-16 max-w-3xl mx-auto">
          {description}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {partners.map((partner, idx) => (
            <div key={idx} className="h-16 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img src={partner}
                alt={`Partner ${idx + 1}`}
                className="max-h-full max-w-full object-contain"
                loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePartners;
