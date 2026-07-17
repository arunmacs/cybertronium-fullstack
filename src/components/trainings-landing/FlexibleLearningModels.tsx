"use client";
import FlexibleLearning from "@/assets/training/flexible-learning.webp";
import Online from "@assets/training/presentation_10277614 1.svg?react"
import InPerson from "@assets/training/training_12302272 1.svg?react"
import Corporat from "@assets/training/learning_3200617 1.svg?react"
import SelfPaced from "@assets/training/learning_9489151 1.svg?react"
import { SectionHeader } from "@/components/ui/SectionHeader";

const learningModes = [
  {
    title: "Live online instruction",
    description: "Engage with instructors and peers in real-time virtual sessions with interactive labs and immediate feedback.",
    icon: Online,
  },
  {
    title: "In-person classroom training",
    description: "Immersive hands-on experience with direct access to instructors and networking with fellow security professionals.",
    icon: InPerson,
  },
  {
    title: "Customized corporate training",
    description: "Tailored programs for organizations with role-specific content and team-based learning aligned to your security goals.",
    icon: SelfPaced,
  },
  {
    title: "Self-paced on-demand learning",
    description: "Access course materials anytime with recorded lectures, labs, and resources available whenever you need them.",
    icon: Corporat,
  },
];

const FlexibleLearningModels = () => {
  return (
    <section className="py-6 lg:py-10 bg-[#F8F8F8] overflow-hidden">
      <div className="container mx-auto md:px-6 lg:px-10 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left — Title + Image */}
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            <SectionHeader
              align="left"
              titlePart2={<>Flexible Learning<br />Modes</>}
              showBar={false}
            />

            {/* Image placeholder — replace with actual image */}
            <div className="w-full max-w-[450px] h-[280px] rounded-[16px] overflow-hidden bg-gradient-to-br from-[#0A0514] to-[#1A0A2E] flex items-center justify-center border border-gray-100 shadow-xl relative">
              <img src={FlexibleLearning} alt="Flexible Learning" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>

          {/* Right — 2×2 Feature Grid */}
          <div className="w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            {learningModes.map((mode, idx) => (
              <div key={idx} className="text-center flex flex-col items-center">
                {/* Icon placeholder (outline style) */}
                <div className="w-[48px] h-[48px] flex items-center justify-center mb-4">
                  {/* SVG icon placeholder */}
                  <mode.icon className="size-12" />
                </div>
                <h3 className="text-[clamp(16px,1.5vw+0.5rem,18px)] font-bold text-[#3B194E] mb-2 leading-snug">
                  {mode.title}
                </h3>
                <p className="text-[clamp(11px,1vw+0.4rem,13px)] text-gray-500 leading-[1.6]">
                  {mode.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexibleLearningModels;
