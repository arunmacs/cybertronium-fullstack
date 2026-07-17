"use client";
import React from "react";
import TrainingCard from "@/components/ui/TrainingCard";

export interface Certification {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

interface CertificationsSectionProps {
  headingLine1: string;
  headingLine2: string;
  headingLine3: string;
  description: string;
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  headingLine1,
  headingLine2,
  headingLine3,
  description,
  certifications,
}) => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-[#CA1C69]">{headingLine1}</span>{" "}
            <span className="text-gradient-primary text-4xl">{headingLine2}</span>{" "}
            <span className="text-[#CA1C69]">{headingLine3}</span>
          </h2>
          <p className="text-gray-500 max-w-5xl mx-auto text-sm font-light leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <TrainingCard
              key={idx}
              title={cert.title}
              description={cert.description}
              link={cert.link}
              tags={cert.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

