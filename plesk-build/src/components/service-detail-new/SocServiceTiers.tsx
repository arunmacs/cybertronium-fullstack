"use client";
import React from "react";
import Link from "next/link";;
import { Check } from "lucide-react";
import IconWhiteArrow from "@assets/icons/Icon Arrow.png";
import IconDarkArrow from "@assets/icons/Icon Arrow (1).png";

interface TierFeature {
  text: string;
}

interface Tier {
  name: string;
  subtitle: string;
  features: TierFeature[];
  isHighlighted?: boolean;
}

interface SocServiceTiersProps {
  subtitle: string;
  title: string;
  description: string;
  tiers: Tier[];
}

const SocServiceTiers: React.FC<SocServiceTiersProps> = ({
  subtitle,
  title,
  description,
  tiers,
}) => {
  return (
    <section className="py-6 md:py-10 bg-white">
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

        {/* Tiers Container */}
        {tiers && tiers.length >= 1 && (
          <div className="max-w-5xl mx-auto bg-[#461148] rounded-[20px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">

            {/* Essentials Column (Dark) */}
            <div className="lg:w-1/3 p-5 md:p-7 flex flex-col text-white">
              <div className="flex items-start gap-3 mb-3">
                <div className="shrink-0 w-12 h-12">
                  <img src={IconWhiteArrow} alt="Arrow" loading="lazy" decoding="async" />
                </div>
                <div className="flex-1">
                  <h4 className="!text-fluid-xl font-bold leading-tight">
                    {tiers[0].name}
                  </h4>
                  <p className="!text-fluid-sm text-white/60 mt-1">
                    {tiers[0].subtitle}
                  </p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-white/20 my-3" />

              <ul className="flex-grow space-y-4 my-4 mx-2">
                {tiers[0].features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <div className="shrink-0 w-3.5 h-3.5 rounded-full bg-orange-400/20 flex items-center justify-center mt-0.5">
                      <Check className="w-2 h-2 text-orange-400" strokeWidth={5} />
                    </div>
                    <span className="!text-fluid-sm font-medium text-white/80 leading-snug">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-block w-fit py-2.5 px-8 rounded-full border border-[#CA1C69] bg-transparent text-white font-bold !text-fluid-sm text-center transition-all hover:bg-[#CA1C69]/10 mt-2"
              >
                Get a Quote
              </Link>
            </div>

            {/* Light Column (Advanced + Enterprise) */}
            {tiers.length > 1 && (
              <div className="lg:w-2/3 bg-white m-1.5 rounded-[16px] p-5 md:p-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                {tiers.slice(1).map((tier, idx) => (
                  <div key={idx} className="flex flex-col h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="shrink-0 w-10 h-10 mt-0.5">
                        <img src={IconDarkArrow} alt="Arrow" loading="lazy" decoding="async" />
                      </div>
                      <div>
                        <h4 className="!text-fluid-xl font-bold text-[#3B0A33] leading-tight">
                          {tier.name}
                        </h4>
                        <p className="!text-fluid-sm font-medium text-gray-500 mt-1">
                          {tier.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="w-full h-[1px] bg-gray-200 my-2" />

                    <ul className="flex-grow space-y-4 my-4 mx-2">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <div className="shrink-0 w-3.5 h-3.5 rounded-full bg-[#CA1C69]/10 flex items-center justify-center mt-0.5">
                            <Check className="w-2 h-2 text-[#CA1C69]" strokeWidth={5} />
                          </div>
                          <span className="!text-fluid-sm font-medium text-gray-600 leading-snug">
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="inline-block w-fit py-2.5 px-8 rounded-full text-white font-bold !text-fluid-sm text-center transition-opacity hover:opacity-90 shadow-lg shadow-[#8B1D56]/20 mt-2"
                      style={{ background: 'linear-gradient(101.67deg, #511F5E 0%, #C01E6C 100%)' }}
                    >
                      Get a Quote
                    </Link>
                  </div>
                ))}
              </div>
            )}

          </div>
        )}
      </div>
    </section>
  );
};

export default SocServiceTiers;
