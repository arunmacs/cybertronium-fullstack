"use client";
import React from "react";
import BgWave from "@assets/services/Group.webp"
import BgWave2 from "@assets/services/Group(1).webp"

import Database from "@assets/services/Database.svg?react"
import Search from "@assets/services/Search.svg?react"
import Brain from "@assets/services/Vector.svg?react"
import Eye from "@assets/services/Eye.svg?react"
import Lightning from "@assets/services/si--lightning-duotone 1.svg?react"
import TrendingUp from "@assets/services/Trending up.svg?react"

import Checkmark from "@assets/CTEM/check-mark.svg?react"



interface WorkflowBullet {
  text: string;
}

interface WorkflowStep {
  stepNumber: string;
  title: string;
  description: string;
  bullets: WorkflowBullet[];
  iconPlaceholder: string;
}

interface SocWorkflowProps {
  subtitle: string;
  title: string;
  description: string;
  steps: WorkflowStep[];
}

const stepIcons: Record<string, React.ReactNode> = {
  collect: (
    <Database className="w-8 h-8" />
  ),
  detect: (
    <Search className="w-8 h-8" />
  ),
  enrich: (
    <Brain className="w-8 h-8" />
  ),
  investigate: (
    <Eye className="w-8 h-8" />
  ),
  respond: (
    <Lightning className="w-8 h-8" />
  ),
  report: (
    <TrendingUp className="w-8 h-8" />
  ),
};

const SocWorkflow: React.FC<SocWorkflowProps> = ({
  subtitle,
  title,
  description,
  steps,
}) => {
  return (
    <section className="py-6 md:py-10 bg-white relative overflow-hidden">
      {/* Background decorative wave */}
      <img
        src={BgWave}
        alt=""
        className="absolute top-0 left-0 w-full opacity-30 pointer-events-none object-cover z-0"
      />
      <img
        src={BgWave2}
        alt=""
        className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none object-cover z-0"
      />

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-0.5 bg-orange-400/50 mx-auto mb-3 rounded-full"></div>
          <p className="text-primary !text-fluid-sm font-semibold tracking-wide mb-2">
            {subtitle}
          </p>
          <h2 className="!text-fluid-5xl font-bold text-gradient-primary leading-tight mb-4">
            {title}
          </h2>
          <p className="text-gray-500 !text-fluid-sm max-w-5xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Zigzag Steps */}
        <div className="relative max-w-8xl mx-auto">
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            const IconNode = stepIcons[step.iconPlaceholder];

            return (
              <div key={idx} className={`relative mb-8 md:mb-0 last:mb-0 ${idx !== 0 ? 'md:-mt-24 lg:-mt-32' : ''}`}>
                <div className={`flex flex-col md:flex-row ${isLeft ? "md:justify-start" : "md:justify-end"}`}>

                  {/* Dashed connector line with arrow (except last) */}
                  {idx < steps.length - 1 && (
                    <div
                      className="hidden md:block absolute z-0 pointer-events-none top-[calc(100%-180px)] h-[84px] lg:top-[calc(100%-240px)] lg:h-[112px]"
                      style={{
                        left: isLeft ? "44%" : "42%",
                        width: "14%",
                      }}
                    >
                      {isLeft ? (
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" className="overflow-visible">
                          <path
                            d="M 0 0 C 60 0, 80 60, 90 100"
                            stroke="#E8789A"
                            strokeWidth="2"
                            strokeDasharray="6 6"
                            fill="none"
                          />
                          <path d="M 80 90 L 90 100 L 98 90" stroke="#E8789A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" className="overflow-visible">
                          <path
                            d="M 100 0 C 40 0, 20 60, 10 100"
                            stroke="#E8789A"
                            strokeWidth="2"
                            strokeDasharray="6 6"
                            fill="none"
                          />
                          <path d="M 20 90 L 10 100 L 2 90" stroke="#E8789A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  )}

                  {/* Card */}
                  <div className="md:w-[46%] w-full relative z-10">
                    <div className="relative rounded-3xl bg-white shadow-[0px_4px_35px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">

                      {/* Big Icon Top Right Background */}
                      <div className="absolute -top-6 right-2 w-40 h-40 opacity-15 pointer-events-none [&>svg]:w-full [&>svg]:h-full [&>svg]:text-[#CA1C69]">
                        {IconNode || (
                          <div className="w-full h-full rounded border border-dashed border-gray-300 flex items-center justify-center text-[10px] text-gray-400">
                            Icon
                          </div>
                        )}
                      </div>

                      <div className="p-4 md:p-6">
                        {/* Step Number Badge */}
                        <div className="mb-4">
                          <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white border border-[#E8789A]/40 shadow-sm relative overflow-hidden">
                            <span className="!text-fluid-2xl font-bold bg-gradient-to-br from-[#F37A3A] to-[#CA1C69] bg-clip-text text-transparent">
                              {step.stepNumber}
                            </span>
                            {/* Very subtle glow inside */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#F37A3A]/5 to-[#CA1C69]/5" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="!text-fluid-xl font-bold text-[#2D0A31] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-500 !text-fluid-xs leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Bullet points */}
                        <ul className="space-y-2">
                          {step.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-3">
                              <span className="mt-1 flex-shrink-0">
                                <Checkmark className="w-5 h-5" />
                              </span>
                              <span className="text-gray-600 !text-fluid-xs leading-relaxed font-medium">
                                {bullet.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocWorkflow;
