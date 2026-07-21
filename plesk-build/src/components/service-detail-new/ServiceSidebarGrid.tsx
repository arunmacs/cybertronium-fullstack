"use client";
import React from "react";

interface SidebarCard {
  title: string;
  description: string;
  icon: any;
}

interface ServiceSidebarGridProps {
  badge?: string;
  titlePart1?: string;
  titlePart2?: string;
  description?: string;
  sidebarImage: string;
  cards: SidebarCard[];
}

const ServiceSidebarGrid: React.FC<ServiceSidebarGridProps> = ({
  badge,
  titlePart1,
  titlePart2,
  description,
  sidebarImage,
  cards,
}) => {
  return (
    <section className="py-10 bg-white ">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Optional Header Section */}
        {(badge || titlePart1 || titlePart2 || description) && (
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="w-20 h-0.5 bg-orange-400/50 mb-3 rounded-full mx-auto"></div>
            {badge && (
              <p className="text-primary text-fluid-sm font-semibold tracking-wide mb-4">
                {badge}
              </p>
            )}
            {(titlePart1 || titlePart2) && (
              <h2 className="text-fluid-4xl font-semibold mb-6 text-[#2D0A31]">
                {titlePart1}{" "}
                <span className="text-[#F37A3A] font-bold">{titlePart2}</span>
              </h2>
            )}
            {description && (
              <div className="space-y-4 text-center">
                {description.split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-500 leading-relaxed text-fluid-sm font-medium">
                    {para}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Sidebar Image */}
          <div className="lg:w-1/3 w-full">
            <div className="rounded-xl overflow-hidden sticky top-24">
              <img src={sidebarImage}
                alt="Case Study"
                className="w-full object-contain"
                loading="lazy" decoding="async" />
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:w-2/3 w-full pt-4 flex items-center">
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-20">
              {cards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div key={idx} className="flex flex-col items-start text-left">
                    <div className="mb-4 text-[#F37A3A]">
                      {typeof Icon === 'string' ? (
                        <img src={Icon}
                          alt={card.title}
                          className="w-10 h-10 object-contain"
                          style={{ filter: 'invert(55%) sepia(85%) saturate(2359%) hue-rotate(344deg) brightness(101%) contrast(92%)' }}
                          loading="lazy" decoding="async" />
                      ) : (
                        <Icon className="w-10 h-10" />
                      )}
                    </div>
                    <h3 className="text-fluid-xl font-bold text-[#3B194E] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 text-fluid-sm leading-relaxed font-medium">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSidebarGrid;
