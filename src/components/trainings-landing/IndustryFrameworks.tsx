"use client";
import Link from "next/link";;
import { ChevronRight } from "lucide-react";
import AlignedBg from "@assets/training/aligned.webp"
import Nice from "@assets/training/nice.webp"
import GlobalAce from "@assets/training/globalace.webp"
import MitreAttck from "@assets/training/MITRE_ATTACK.webp"
import SkillsfutureLogo from "@assets/training/skills.webp"
import { SectionHeader } from "@/components/ui/SectionHeader";

const frameworks = [
  {
    title: "NIST NICE",
    logo: Nice,
    description: "Maps cybersecurity roles, skills, and workforce competencies for structured career development.",
    link: "/trainings/nist-nice",
    bgPos: "0% 0%", // Top Left
  },
  {
    title: "GlobalACE",
    logo: GlobalAce,
    description: "Validates practical cybersecurity expertise and professional readiness across global standards.",
    link: "/trainings/globalace-framework",
    bgPos: "100% 0%", // Top Right
  },
  {
    title: "MITRE ATT&CK",
    logo: MitreAttck,
    description: "Aligns training with real-world attack tactics and threat behaviors for practical defense.",
    link: "/trainings/mitre-attck",
    bgPos: "0% 100%", // Bottom Left
  },
  {
    title: "SSG Certification",
    logo: SkillsfutureLogo,
    description: "Empowering cybersecurity skills development through industry-recognized training and future-ready learning pathways.",
    link: "/trainings/skillsfuture-sg",
    bgPos: "100% 100%", // Bottom Right
  },
];

const IndustryFrameworks = () => {
  return (
    <section className="py-6 lg:py-10 bg-white overflow-hidden">
      <div className="container mx-auto md:px-6 lg:px-20 max-w-[1200px]">
        <SectionHeader
          subtitle="Frameworks"
          titlePart2="Aligned With Industry Frameworks"
          description="Our curriculum maps to the most respected cybersecurity frameworks and competency models."
          className="mb-4 lg:mb-8"
        />

        {/* Framework Cards — 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1200px] mx-auto">
          {frameworks.map((fw, idx) => (
            <Link
              href={fw.link}
              key={idx}
              className="group relative bg-[#2A0A30] rounded-sm overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 p-6 min-h-[220px]"
            >
              {/* Background Image Split */}
              <div
                className="absolute inset-0 opacity-100"
                style={{
                  backgroundImage: `url(${AlignedBg})`,
                  backgroundSize: '200% 200%',
                  backgroundPosition: fw.bgPos,
                  backgroundRepeat: 'no-repeat'
                }}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Logo */}
                <div className="mb-4">
                  <img src={fw.logo} alt={fw.title} className="object-contain h-10" loading="lazy" decoding="async" />
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h3 className="text-[clamp(16px,1.5vw+0.5rem,18px)] font-bold text-white mb-2 group-hover:text-[#F37A3A] transition-colors">
                    {fw.title}
                  </h3>
                  <p className="text-[clamp(12px,1vw+0.2rem,14px)] text-white/80 leading-[1.6] mb-6 min-h-[48px]">
                    {fw.description}
                  </p>
                  <div className="flex items-center gap-1 text-white text-[clamp(13px,1vw+0.4rem,14px)] font-medium">
                    <span>Learn more</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryFrameworks;
