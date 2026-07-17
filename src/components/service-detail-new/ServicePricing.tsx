"use client";
import React from "react";
import { Check } from "lucide-react";
import Link from "next/link";;

interface PricingPlan {
  title: string;
  description: string;
  price?: string;
  period?: string;
  subtext?: string;
  buttonText?: string;
  features: string[];
}

interface ServicePricingProps {
  subtitle?: string;
  titlePart1: string;
  titlePart2?: string;
  description?: string;
  plans: PricingPlan[];
  useGradientTitle?: boolean;
}

const ServicePricing: React.FC<ServicePricingProps> = ({
  subtitle,
  titlePart1,
  titlePart2,
  description,
  plans,
  useGradientTitle,
}) => {
  return (
    <section className="py-10 bg-white ">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-5xl mx-auto">
          {subtitle && (
            <p className="text-primary !text-fluid-sm font-bold tracking-wide mb-3">
              {subtitle}
            </p>
          )}

          {useGradientTitle ? (
            <h2
              className="!text-fluid-5xl font-bold mb-4 leading-tight bg-clip-text text-transparent text-center"
              style={{
                background: 'linear-gradient(270.09deg, #F37A3A 16.02%, #CA1C69 91.5%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {titlePart1} {titlePart2}
            </h2>
          ) : (
            <h2 className="!text-fluid-5xl font-bold mb-4 leading-tight">
              <span className="text-primary">{titlePart1}</span>{" "}
              {titlePart2 && <span className="text-[#F37A3A]">{titlePart2}</span>}
            </h2>
          )}

          {description && (
            <p className="text-gray-500 !text-fluid-sm leading-relaxed font-medium">
              {description}
            </p>
          )}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="rounded-xl p-[1px] bg-gradient-to-br from-[#F37A3A]/60 via-[#CA1C69]/60 to-[#3B194E]/60 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-white rounded-xl p-4 flex flex-col h-full justify-between">
                {/* Top Section */}
                <div className="min-h-[115px] border-b border-gray-100 pb-6 mb-6 flex flex-col justify-start">
                  <h3 className="!text-fluid-xl font-bold text-[#3B194E] mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-gray-500 !text-fluid-sm leading-relaxed font-medium">
                    {plan.description}
                  </p>
                </div>

                {/* Middle Section (Price or Button) */}
                <div className="min-h-[110px] border-b border-gray-100 pb-6 mb-6 flex flex-col justify-center text-left">
                  {plan.price ? (
                    <div>
                      <div className="flex items-baseline">
                        <span className="!text-fluid-5xl font-semibold text-primary tracking-tight">
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-primary !text-fluid-2xl ml-1 font-semibold">
                            {plan.period}
                          </span>
                        )}
                      </div>
                      {plan.subtext && (
                        <p className="text-primary !text-fluid-sm font-medium mt-1">
                          {plan.subtext}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div>
                      {plan.buttonText && (
                        <Link href={"/contact"} className="px-6 py-2 rounded-full border border-primary text-primary !text-fluid-sm font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
                          {plan.buttonText}
                        </Link>
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom Section (Features) */}
                <ul className="space-y-4 flex-grow">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start">
                      <Check className="w-[18px] h-[18px] text-[#F37A3A] mr-3 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-gray-500 !text-fluid-sm font-medium leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePricing;
