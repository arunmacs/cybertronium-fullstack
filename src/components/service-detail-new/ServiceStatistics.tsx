"use client";
import React from "react";

interface StatisticItem {
  value: string;
  label: string;
}

interface ServiceStatisticsProps {
  badge: string;
  title: string;
  description1: string;
  description2: string;
  description3?: string;
  bg?: string;
  stats: StatisticItem[];
}

const ServiceStatistics: React.FC<ServiceStatisticsProps> = ({
  badge,
  title,
  description1,
  description2,
  description3,
  bg,
  stats,
}) => {
  return (
    <section className="relative py-10 bg-[#4A154B]  overflow-hidden text-white">
      {/* Background Abstract Lines (Simulated using CSS radial gradient/patterns) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img src={bg} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Text Column */}
          <div className="lg:w-1/2">
            <span className="w-24 h-[1px] bg-white inline-block"></span>
            <p className="text-white text-fluid-sm font-semibold tracking-wide mb-4 flex items-center">
              {badge}
            </p>
            <h2 className="text-fluid-5xl font-bold leading-tight mb-6">
              {title}
            </h2>
            <p className="text-gray-200 text-fluid-sm leading-relaxed mb-4">
              {description1}
            </p>
            <p className="text-gray-200 text-fluid-sm leading-relaxed">
              {description2}
            </p>
            {description3 && (
              <p className="text-gray-200 text-fluid-sm leading-relaxed">
                {description3}
              </p>
            )}
          </div>

          {/* Right Stats Grid */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col border-l border-white/10 pl-6 md:pl-8"
                >
                  <div className="text-fluid-5xl font-bold leading-none mb-3 ">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-fluid-xs leading-snug font-medium pr-4">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceStatistics;
