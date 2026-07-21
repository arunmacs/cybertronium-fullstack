"use client";
import React from "react";
import Checkmark from "@assets/CTEM/check-mark.svg?react"

interface ServiceFeatureProps {
  title?: string;
  titlePart1?: string;
  titlePart2?: string;
  subtitle?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  listHeader?: string;
  listItems?: (string | { title: string; content: string })[];
  footerText?: string;
  image: string;
  imagePosition: "left" | "right";
  useGradientTitle?: boolean;
  increaseImageHeight?: boolean;
  inlineListItems?: boolean;
  bgClass?: string;
  contentWidthClass?: string;
  imageWidthClass?: string;
  maintainAspectRatio?: boolean;
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({
  title,
  titlePart1,
  titlePart2,
  subtitle,
  description1,
  description2,
  description3,
  listHeader,
  listItems,
  footerText,
  image,
  imagePosition,
  useGradientTitle,
  increaseImageHeight,
  inlineListItems,
  bgClass = "bg-white",
  contentWidthClass,
  imageWidthClass,
  maintainAspectRatio,
}) => {
  return (
    <section className={`py-10 ${bgClass} `}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div
          className={`flex flex-col gap-12 lg:gap-10 lg:justify-between items-center ${imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
        >
          {/* Text Content Column */}
          <div className={`${contentWidthClass || "lg:w-[54%]"} w-full flex flex-col justify-center`}>
            <div className="w-12 h-[2px] bg-[#B3346F]/50 mb-4"></div>
            {subtitle && (
              <p className="text-primary text-fluid-sm font-bold tracking-wide mb-2">
                {subtitle}
              </p>
            )}

            {titlePart1 || titlePart2 ? (
              <h2 className={`text-fluid-4xl font-bold mb-6 leading-tight ${useGradientTitle ? 'text-gradient-primary w-fit' : ''}`}>
                {useGradientTitle ? (
                  <>{titlePart1} {titlePart2}</>
                ) : (
                  <>
                    <span className="text-primary">{titlePart1}</span>{" "}
                    <span className="text-[#F37A3A]">{titlePart2}</span>
                  </>
                )}
              </h2>
            ) : useGradientTitle ? (
              <h2 className="text-fluid-4xl font-bold mb-6 leading-tight text-gradient-primary w-fit">
                {title}
              </h2>
            ) : (
              <h2 className="text-fluid-4xl font-bold text-[#3B194E] mb-6 leading-tight">
                {title}
              </h2>
            )}

            <div className="space-y-4 mb-8">
              {description1 && (
                <p className="text-gray-500 text-fluid-sm leading-relaxed font-medium">
                  {description1}
                </p>
              )}
              {description2 && (
                <p className="text-gray-500 text-fluid-sm leading-relaxed font-medium">
                  {description2}
                </p>
              )}
              {description3 && (
                <p className="text-gray-500 text-fluid-sm leading-relaxed font-medium">
                  {description3}
                </p>
              )}
            </div>

            {/* List Section */}
            {listItems && listItems.length > 0 && (
              <div className="mb-8">
                {listHeader && (
                  <p className="text-gray-500 text-fluid-base leading-relaxed font-medium mb-4">
                    {listHeader}
                  </p>
                )}
                <ul className="space-y-6">
                  {listItems.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-4 text-primary">
                        <Checkmark className="w-5 h-5" />
                      </div>
                      <div>
                        {typeof item === "string" ? (
                          <span className="text-gray-500 text-fluid-sm leading-relaxed font-medium block mt-0.5">
                            {item}
                          </span>
                        ) : inlineListItems ? (
                          <span className="text-gray-500 text-fluid-sm leading-relaxed font-medium block mt-0.5">
                            <strong className="text-[#3B194E] text-fluid-base font-bold">
                              {item.title}:{" "}
                            </strong>
                            {item.content}
                          </span>
                        ) : (
                          <>
                            <span className="text-[#3B194E] text-fluid-base font-bold block mb-1">
                              {item.title}
                            </span>
                            <span className="text-gray-500 text-fluid-sm leading-relaxed font-medium block">
                              {item.content}
                            </span>
                          </>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Footer Text */}
            {footerText && (
              <p className="text-gray-500 text-fluid-sm leading-relaxed font-medium mt-8 border-t border-gray-100 pt-6">
                {footerText}
              </p>
            )}
          </div>

          {/* Image Column */}
          <div className={`${imageWidthClass || "lg:w-[38%]"} w-full`}>
            <div className="rounded-xl overflow-hidden shadow-2xl relative w-full">
              <img src={image}
                alt={title}
                className="w-full h-auto object-contain md:object-cover"
                loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeature;
