"use client";
import Link from "next/link";;
import { ChevronRight } from "lucide-react";
import ISOIEC from "@assets/training/iso-17024.webp";
import GlobalACE from "@assets/training/global-ace copy.webp";
import ISO27001 from "@assets/training/iso-27001.webp";
import { SectionHeader } from "@/components/ui/SectionHeader";

const standards = [
  {
    title: "ISO/IEC 17024 Certification",
    description: "International standard validating cybersecurity competency assessments and professional certification programs.",
    // link: "/trainings/iso-17024",
    image: ISOIEC,
  },
  {
    title: "GlobalACE Recognition",
    description: "Cybersecurity certification framework recognized across ASEAN and OIC countries for professional competency.",
    // link: "/trainings/globalace",
    image: GlobalACE,
  },
  {
    title: "ISO 27001 Certification",
    description: "ISO 27001 Certification demonstrates robust information security management and data protection practices.",
    // link: "",
    image: ISO27001,
  },
];

const GloballyRecognizedStandards = () => {
  return (
    <section className="py-6 lg:py-12 bg-white overflow-hidden">
      <div className="container mx-auto md:px-6 lg:px-20 max-w-[1200px]">
        <SectionHeader
          subtitle="Accreditations"
          titlePart2="Globally Recognized Standards"
          description="Our certifications meet the highest international accreditation requirements."
          className="mb-4 lg:mb-8"
        />

        {/* Cards — 2 side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {standards.map((standard, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-[20px] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Dark image area — prominent, ~55% of card */}
              <div className="w-full relative overflow-hidden shrink-0">
                <img src={standard.image}
                  alt={standard.title}
                  className="w-full h-auto object-cover block"
                  loading="lazy" decoding="async" />
              </div>

              {/* Text content */}
              <div className="px-2 py-4 md:px-4 md:py-6 flex flex-col flex-grow">
                <h3 className="text-[clamp(16px,1.5vw+0.5rem,22px)] font-bold text-[#3B194E] mb-3 group-hover:text-[#CA1C69] transition-colors">
                  {standard.title}
                </h3>
                <p className="text-[clamp(14px,1vw+0.4rem,16px)] text-gray-500 leading-[1.6] mb-3 flex-grow">
                  {standard.description}
                </p>
                {/* <div className="flex items-center gap-1 text-gray-500 text-[14px] mt-auto">
                  <span>Learn More</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GloballyRecognizedStandards;
