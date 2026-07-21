"use client";
import LabsIcon from "@/assets/training/labs.svg?react";
import ExpertsIcon from "@/assets/training/industry-experts.svg?react";
import ScenariosIcon from "@/assets/training/real-scenarios.svg?react";
import VendorTrainingIcon from "@/assets/training/vendor-training.svg?react";
import whyBg from "@/assets/training/whybg.webp";
import groupSvg from "@/assets/services/Group.svg";
import { SectionHeader } from "@/components/ui/SectionHeader";


const features = [
  {
    title: "Hands-on labs",
    description: "Practice in realistic environments with live systems and immediate feedback from security professionals.",
    icon: <LabsIcon className="w-10 h-10" />,
  },
  {
    title: "Industry experts",
    description: "Instructors bring decades of experience from leading organizations and active threat intelligence research.",
    icon: <ExpertsIcon className="w-10 h-10" />,
  },
  {
    title: "Real-world scenarios",
    description: "Respond to actual breach scenarios and incident patterns observed in modern threat landscapes.",
    icon: <ScenariosIcon className="w-10 h-10" />,
  },
  {
    title: "Vendor-neutral training",
    description: "Master security principles independent of specific vendors or proprietary tools.",
    icon: <VendorTrainingIcon className="w-10 h-10" />,
  },
];

const WhyChooseOurTraining = () => {
  return (
    <section className="relative py-6 lg:py-10 overflow-hidden bg-[#0A0208]">
      {/* Background container */}
      <div className="absolute inset-0">
        {/* Base image */}
        <img src={whyBg} alt="Background Pattern" className="absolute inset-0 w-full h-full object-cover z-0" loading="lazy" decoding="async" />

        {/* Group.svg Layer */}
        <div
          className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
          style={{
            backgroundImage: `url(${groupSvg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 60%',
            backgroundRepeat: 'no-repeat',
            opacity: 1
          }}
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(70, 17, 72, 0.7) 0%, rgba(70, 17, 72, 0.49) 139.9%, rgba(70, 17, 72, 0) 174.17%), linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))'
          }}
        />
      </div>

      <div className="container mx-auto md:px-6 lg:px-10 max-w-[1200px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left — Heading */}
          <div className="w-full lg:w-[40%]">
            <SectionHeader
              align="left"
              lightText={true}
              subtitle="Advantages"
              title={<>Why Choose<br />Our Training</>}
              description="We deliver practical skills through immersive learning experiences backed by industry recognition."
              barClassName="bg-white/60"
            />
          </div>

          {/* Right — 2×2 Feature Grid */}
          <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                {/* Icon container */}
                <div>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-[clamp(18px,2vw+0.5rem,20px)] font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[clamp(11px,1vw+0.2rem,12px)] text-white/70 leading-[1.6]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOurTraining;
