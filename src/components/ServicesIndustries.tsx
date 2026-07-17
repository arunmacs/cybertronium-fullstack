import { useState, useRef } from "react";
import Bggradient from "@assets/services/services-industries-bg.webp";

import Softwaresaas from "@assets/services/industries/software-saas.svg?react";
import FinancialServices from "@assets/services/industries/financial-services.svg?react";
import Education from "@assets/services/industries/education.svg?react";
import Government from "@assets/services/industries/government-public-sector.svg?react";
import Healthcare from "@assets/services/industries/healthcare.svg?react";
import Technology from "@assets/services/industries/technology.svg?react";
import ProfessionalServices from "@assets/services/industries/professional-services.svg?react";
import Manufacturing from "@assets/services/industries/manufacturing.svg?react";
import Construction from "@assets/services/industries/construction-realestate.svg?react";
import MediaEntertainment from "@assets/services/industries/media-entertainment.svg?react";
import Telecommunications from "@assets/services/industries/telecommunications.svg?react";
import Transportation from "@assets/services/industries/transport-aviation.svg?react";
import Energy from "@assets/services/industries/energy-utilities.svg?react";
import FoodBeverages from "@assets/services/industries/food-beverages.svg?react";
import MediaMarketing from "@assets/services/industries/media-marketing.svg?react";
import CustomerServices from "@assets/services/industries/customer-services.svg?react";
import Automotive from "@assets/services/industries/automotive.svg?react";
import Retail from "@assets/services/industries/retail-customers.svg?react";
import TradingDistribution from "@assets/services/industries/trading-distribution.svg?react";
import DiversifiedHolding from "@assets/services/industries/diversified-holding.svg?react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const industriesData = [
  { title: "Software / SaaS", description: "Secure applications, platforms, and cloud services.", icon: Softwaresaas },
  { title: "Financial Services", description: "Protect critical assets and customer data.", icon: FinancialServices },
  { title: "Government / Public Sector", description: "Strengthen resilience across public infrastructures.", icon: Government },
  { title: "Technology", description: "Enable innovation with robust cybersecurity practices.", icon: Technology },
  { title: "Professional Services", description: "Safeguard client information and business operations.", icon: ProfessionalServices },
  { title: "Healthcare", description: "Protect patient data and ensure regulatory compliance.", icon: Healthcare },
  { title: "Manufacturing", description: "Secure production environments and supply chain ecosystems.", icon: Manufacturing },
  { title: "Construction & Real Estate", description: "Safeguard project data and critical infrastructure.", icon: Construction },
  { title: "Media & Entertainment", description: "Defend intellectual property and digital content from breaches.", icon: MediaEntertainment },
  { title: "Telecommunications", description: "Ensure reliable and secure communication networks.", icon: Telecommunications },
  { title: "Education", description: "Protect learning platforms, research data, and student information.", icon: Education },
  { title: "Transportation / Aviation", description: "Secure critical transit systems and aviation infrastructure.", icon: Transportation },
  { title: "Energy & Utilities", description: "Strengthen critical infrastructure against disruptions and threats.", icon: Energy },
  { title: "Food & Beverages", description: "Safeguard production systems, supply chains, and operations.", icon: FoodBeverages },
  { title: "Media & Marketing", description: "Protect digital networks, campaigns, and customer data.", icon: MediaMarketing },
  { title: "Customer Services", description: "Secure customer interactions and sensitive business information.", icon: CustomerServices },
  { title: "Automotive", description: "Defend connected vehicles and manufacturing ecosystems.", icon: Automotive },
  { title: "Retail & Customers", description: "Protect transactions, customer data, and digital channels.", icon: Retail },
  { title: "Trading & Distribution", description: "Secure logistics, inventory systems, and partner networks.", icon: TradingDistribution },
  { title: "Diversified Holding", description: "Protect diverse portfolios and interconnected business operations.", icon: DiversifiedHolding },
];

const ServicesIndustries = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleToggle = () => {
    if (isExpanded) {
      if (sectionRef.current) {
        const top = sectionRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <section ref={sectionRef} className="relative py-10 overflow-hidden bg-white">
      {/* Background Image */}
      <img src={Bggradient} alt="Industries We Served Bg" className="absolute inset-0 w-full object-cover md:object-contain z-0 opacity-80 md:opacity-100" loading="lazy" decoding="async" />

      <div className="container mx-auto relative z-10">

        <SectionHeader
          titlePart2="Industries We Serve"
          description="We deliver tailored cybersecurity solutions designed to protect critical operations, sensitive data, and digital infrastructure across diverse industries facing evolving cyber threats."
          showBar={false}
          className="mb-4 md:mb-8"
        />

        {/* Staggered Masonry Layout using Flex Columns */}
        <div className={`relative transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[5000px]' : 'max-h-[650px] md:max-h-[520px]'}`}>
          <div className="max-w-[1050px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 pb-14 pt-2">

            {/* Column 1 (Left) */}
            <div className="flex flex-col gap-2 md:gap-4">
              {[
                { data: industriesData[0], compact: false },
                { data: industriesData[3], compact: true },
                { data: industriesData[6], compact: false },
                { data: industriesData[9], compact: true },
                { data: industriesData[12], compact: false },
                { data: industriesData[15], compact: true },
                { data: industriesData[18], compact: false },
              ].map(({ data: ind, compact }, idx) => {
                const Icon = ind.icon;
                return (
                  <div
                    key={`col1-${idx}`}
                    className={`bg-white rounded-[20px] flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-2 duration-300 border border-[#CA1C69]/20 ${compact ? 'p-2 md:p-3' : 'p-3 md:p-5'}`}
                  >
                    <div className={`text-[#CA1C69] ${compact ? 'mb-2' : 'mb-3'}`}>
                      <Icon className={compact ? 'w-[24px] h-[24px]' : 'w-[32px] h-[32px]'} />
                    </div>
                    <h3 className={`font-semibold text-[#4a1c40] tracking-tight ${compact ? 'text-[clamp(13px,1vw+0.4rem,15px)] mb-1' : 'text-[clamp(14px,1vw+0.4rem,16px)] mb-1'}`}>
                      {ind.title}
                    </h3>
                    <p className={`text-gray-500 leading-relaxed max-w-[260px] ${compact ? 'text-[clamp(11px,1vw+0.4rem,13px)]' : 'text-[clamp(12px,1vw+0.4rem,14px)]'}`}>
                      {ind.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Column 2 (Middle) */}
            <div className="flex flex-col gap-2 md:gap-4 lg:mt-8">
              {[
                { data: industriesData[1], compact: true },
                { data: industriesData[4], compact: false },
                { data: industriesData[7], compact: true },
                { data: industriesData[10], compact: false },
                { data: industriesData[13], compact: true },
                { data: industriesData[16], compact: false },
              ].map(({ data: ind, compact }, idx) => {
                const Icon = ind.icon;
                return (
                  <div
                    key={`col2-${idx}`}
                    className={`bg-white rounded-[20px] flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-2 duration-300 border border-[#CA1C69]/20 ${compact ? 'p-2 md:p-4' : 'p-3 md:p-5'}`}
                  >
                    <div className={`text-[#CA1C69] ${compact ? 'mb-2' : 'mb-3'}`}>
                      <Icon className={compact ? 'w-[24px] h-[24px]' : 'w-[32px] h-[32px]'} />
                    </div>
                    <h3 className={`font-semibold text-[#4a1c40] tracking-tight ${compact ? 'text-[clamp(13px,1vw+0.4rem,15px)] mb-1' : 'text-[clamp(14px,1vw+0.4rem,16px)] mb-1'}`}>
                      {ind.title}
                    </h3>
                    <p className={`text-gray-500 leading-relaxed max-w-[260px] ${compact ? 'text-[clamp(11px,1vw+0.4rem,13px)]' : 'text-[clamp(12px,1vw+0.4rem,14px)]'}`}>
                      {ind.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Column 3 (Right) */}
            <div className="flex flex-col gap-2 md:gap-4">
              {[
                { data: industriesData[2], compact: false },
                { data: industriesData[5], compact: true },
                { data: industriesData[8], compact: false },
                { data: industriesData[11], compact: true },
                { data: industriesData[14], compact: false },
                { data: industriesData[17], compact: true },
                { data: industriesData[19], compact: false },
              ].map(({ data: ind, compact }, idx) => {
                const Icon = ind.icon;
                return (
                  <div
                    key={`col3-${idx}`}
                    className={`bg-white rounded-[20px] flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-2 duration-300 border border-[#CA1C69]/20 ${compact ? 'p-2 md:p-3' : 'p-3 md:p-5'}`}
                  >
                    <div className={`text-[#CA1C69] ${compact ? 'mb-2' : 'mb-3'}`}>
                      <Icon className={compact ? 'w-[24px] h-[24px]' : 'w-[32px] h-[32px]'} />
                    </div>
                    <h3 className={`font-semibold text-[#4a1c40] tracking-tight ${compact ? 'text-[clamp(13px,1vw+0.4rem,15px)] mb-1' : 'text-[clamp(14px,1vw+0.4rem,16px)] mb-1'}`}>
                      {ind.title}
                    </h3>
                    <p className={`text-gray-500 leading-relaxed max-w-[260px] ${compact ? 'text-[clamp(11px,1vw+0.4rem,13px)]' : 'text-[clamp(12px,1vw+0.4rem,14px)]'}`}>
                      {ind.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Fade out gradient when collapsed */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
          )}
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center relative z-20 mt-[-30px]">
          <button
            onClick={handleToggle}
            className="flex flex-col items-center gap-3 group outline-none transition-all duration-300"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#CA1C69]/40 flex items-center justify-center bg-white shadow-[0_4px_15px_rgba(202,28,105,0.1)] group-hover:shadow-[0_6px_20px_rgba(202,28,105,0.2)] group-hover:scale-105 transition-all">
              {isExpanded ? (
                <ArrowUp className="text-[#CA1C69]" />
              ) : (
                <ArrowDown className="text-[#CA1C69]" />
              )}
            </div>
            <span className="text-[clamp(13px,1vw+0.4rem,14px)] font-medium text-[#CA1C69] transition-all duration-300 group-hover:underline">
              {isExpanded ? 'See Less' : 'See More'}
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesIndustries;
