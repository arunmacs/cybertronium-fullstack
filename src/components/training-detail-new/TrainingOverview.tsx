"use client";
import Link from "next/link";;
import bgGroup from "@/assets/services/Group.svg";
import CheckIcon from "@/assets/training/check_3472620 1.svg?react";



export interface TrainingOverviewProps {
  titleLine1: string;
  titleLine2: string;
  description?: string;
  description1?: string;
  description2?: string;
  introImage: string;
  keyHighlights: string[];
  duration: string;
  downloadBroucher?: {
    title?: string;
    description?: string;
    link?: string;
    links?: { label: string; url: string }[];
  };
}

const TrainingOverview = ({
  description,
  description1,
  description2,
  keyHighlights,
}: TrainingOverviewProps) => {
  return (
    <section className="py-10 relative overflow-hidden bg-[#F8F8F8]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${bgGroup})` }}
      />
      <div className="container mx-auto md:px-6 max-w-[1100px] relative z-10">
        <div
          className="relative rounded-[16px] p-6 md:p-8 shadow-[0_10px_40px_rgb(0,0,0,0.06)] overflow-hidden"
          style={{
            background: "transparent",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          {/* Gradient Border Pseudo-element */}
          <div
            className="absolute inset-0 rounded-[16px] border border-transparent pointer-events-none"
            style={{
              background: "radial-gradient(78.99% 95.57% at 17.38% 2.08%, rgba(255, 154, 60, 0.5) 0%, rgba(192, 30, 108, 0.5) 50.48%, rgba(70, 17, 72, 0.5) 100%) border-box",
              WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          <div className="relative z-10">
            <div className="w-12 h-0.5 bg-orange-400/50 mb-3 rounded-full"></div>
            <div className="text-fluid-base font-semibold text-primary mb-3">Birds Eye View</div>

            <h2 className="text-fluid-4xl font-bold text-primary mb-6 tracking-tight leading-tight">
              Course Objective
            </h2>

            {description && (
              <p className="text-fluid-base text-[#646464] leading-[1.7] mb-8">
                {description}
              </p>
            )}

            {description1 && (
              <p className="text-fluid-base text-[#646464] leading-[1.7] mb-4">
                {description1}
              </p>
            )}

            {description2 && (
              <p className="text-fluid-base text-[#646464] leading-[1.7] mb-8">
                {description2}
              </p>
            )}

            <div className="space-y-6">
              {keyHighlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckIcon className="flex-shrink-0 w-6 h-6 mt-0.5" />
                  <span className="text-fluid-base text-[#646464] leading-relaxed pt-0.5">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingOverview;
