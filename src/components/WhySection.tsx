import cyberCenter from "@/assets/home/Cyber-center png 2.png";
import VendorNeutralIcon from "@assets/icons/vendor-neutral.svg?react";
import DetectResponseIcon from "@assets/icons/detetction-response.svg?react"
import ProactiveIcon from "@assets/icons/proactive-consulting.svg?react";
import ICSIcon from "@assets/icons/iso-crest.svg?react";
import ExpertIcon from "@assets/icons/seasoned-experts.svg?react";
import CertificationIcon from "@assets/icons/certification-body.svg?react";

import OutcomeDrivenIcon from "@assets/home/outcome-driven.svg?react";
import RegionalGlobalIcon from "@assets/home/regional-global.svg?react";
import SovereignCompliantIcon from "@assets/home/sovereign-compliant.svg?react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const leftReasons = [
  {
    title: "Vendor Neutral",
    desc: "Unbiased recommendations free from vendor lock-in.",
    icon: <VendorNeutralIcon className="w-12 h-12" />
  },
  {
    title: "24/7 Detection & Response",
    desc: "Managed detection, threat hunting, and incident response.",
    icon: <DetectResponseIcon className="w-12 h-12" />
  },
  {
    title: "Proactive Consulting",
    desc: "Threat intelligence, AI-driven analysis & risk frameworks.",
    icon: <ProactiveIcon className="w-12 h-12" />
  },
  {
    title: "Outcome-driven",
    desc: "Every engagement is measured in risk reduced, MTTD/MTTR improved, and audits passed.",
    icon: <OutcomeDrivenIcon className="w-12 h-12" />
  }
];

const rightReasons = [
  {
    title: "ISO 27001 & CREST",
    desc: "Services delivered adhering to global security standards.",
    icon: <ICSIcon className="w-12 h-12" />
  },
  {
    title: "Seasoned Experts",
    desc: "National & international award-winning security professionals.",
    icon: <ExpertIcon className="w-12 h-12" />
  },
  {
    title: "Certification Body",
    desc: "ISO 17024 audited & NICE framework mapped trainings.",
    icon: <CertificationIcon className="w-12 h-12" />
  },
  {
    title: "Regional + global",
    desc: "Local SOC presence with global threat intelligence and partnerships.",
    icon: <RegionalGlobalIcon className="w-12 h-12" />
  }
];

const bottomCard = {
  title: "Sovereign & compliant",
  desc: "SOC 2, ISO 27001, NCA, SAMA, PDPL, GDPR — built for regulated industries.",
  icon: <SovereignCompliantIcon className="w-12 h-12" />
};

const WhySection = () => {
  return (
    <section id="why" className="relative py-10 bg-white overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <SectionHeader
          subtitle="Differentiators"
          titlePart2="Why Cybertronium"
          description="Seasoned experts across every field of cybersecurity, driven by outcomes - not billable hours."
        />

        {/* Wrapper for main layout + bottom card — relative for the vertical connector */}
        <div className="relative">

          {/* Main Content Layout */}
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto">

            {/* Left Column */}
            <div className="relative flex flex-col gap-4 w-full lg:w-[280px] z-10">
              {/* Left Vertical Backbone */}
              <div className="hidden lg:block absolute top-[12%] bottom-[12%] -right-8 w-px bg-gray-200 z-[-1]" />

              {/* Left connector to Center Logo */}
              <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-[120px] w-[120px] h-px bg-gray-200 z-[-1]" />
              {/* Center dot for left side */}
              <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-8 w-1.5 h-1.5 rounded-full bg-gray-300 translate-x-1/2 z-[-1]" />

              {leftReasons.map((r) => (
                <div key={r.title} className="relative z-10">
                  {/* Horizontal tick to backbone */}
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-8 w-8 h-px bg-gray-200 z-[-1]" />

                  <div className="backdrop-blur-sm rounded-[28px] p-4 transition-all duration-200 hover:scale-105 flex flex-col min-h-[180px] lg:min-h-[200px]" style={{ boxShadow: '0px 7.77px 16px 0px #0000000F, 0px 3px 3px 0px #0000001A, 0px -8px 0px 0px #0000000D inset, 0px 4px 0px 0px #FFFFFF99 inset', background: 'var(--Neutral-100, #F4F4F5)' }}>
                    <div className="mb-4 shrink-0">
                      {r.icon}
                    </div>
                    <h3 className="text-sm font-bold text-black mb-1.5 leading-tight">{r.title}</h3>
                    <p className="text-gray-500 text-[clamp(10px,1vw+0.2rem,11px)] leading-relaxed font-medium mb-0 flex-1">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Central Logo */}
            <div className="relative w-full lg:w-[400px] flex flex-col items-center justify-center py-6 z-10">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 to-pink-200/20 blur-[50px] rounded-full scale-150" />
                <img src={cyberCenter} alt="Cybertronium" className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10 transition-transform duration-700 hover:scale-105" loading="lazy" decoding="async" />
              </div>
              <h4 className="mt-2 font-extrabold text-[clamp(18px,2vw+0.5rem,20px)] tracking-[0.25em] text-[#4D124E] relative z-10 bg-white px-2">
                CYBERTRONIUM
              </h4>

              {/* Vertical line straight down from logo to bottom card */}
              <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 w-px bg-gray-200 z-[-1]" style={{ height: 'calc(100% + 120px)' }} />
            </div>

            {/* Right Column */}
            <div className="relative flex flex-col gap-4 w-full lg:w-[280px] z-10">
              {/* Right Vertical Backbone */}
              <div className="hidden lg:block absolute top-[12%] bottom-[12%] -left-8 w-px bg-gray-200 z-[-1]" />

              {/* Right connector to Center Logo */}
              <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-[120px] w-[120px] h-px bg-gray-200 z-[-1]" />
              {/* Center dot for right side */}
              <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-8 w-1.5 h-1.5 rounded-full bg-gray-300 -translate-x-1/2 z-[-1]" />

              {rightReasons.map((r) => (
                <div key={r.title} className="relative z-10">
                  {/* Horizontal tick to backbone */}
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-8 w-8 h-px bg-gray-200 z-[-1]" />

                  <div className="backdrop-blur-sm rounded-[28px] p-4 transition-all duration-200 hover:scale-105 flex flex-col min-h-[180px] lg:min-h-[200px]" style={{ boxShadow: '0px 7.77px 16px 0px #0000000F, 0px 3px 3px 0px #0000001A, 0px -8px 0px 0px #0000000D inset, 0px 4px 0px 0px #FFFFFF99 inset', background: 'var(--Neutral-100, #F4F4F5)' }}>
                    <div className="mb-4 shrink-0">
                      {r.icon}
                    </div>
                    <h3 className="text-sm font-bold text-black mb-1.5 leading-tight">{r.title}</h3>
                    <p className="text-gray-500 text-[clamp(10px,1vw+0.2rem,11px)] leading-relaxed font-medium mb-0 flex-1">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom centered card */}
          <div className="flex flex-col items-center mt-6 lg:mt-10 relative z-10">
            <div
              className="backdrop-blur-sm rounded-[28px] p-4 transition-all duration-200 hover:scale-105 w-full lg:w-[280px] flex flex-col min-h-[180px] lg:min-h-[200px]"
              style={{
                boxShadow: '0px 7.77px 16px 0px #0000000F, 0px 3px 3px 0px #0000001A, 0px -8px 0px 0px #0000000D inset, 0px 4px 0px 0px #FFFFFF99 inset',
                background: 'var(--Neutral-100, #F4F4F5)',
              }}
            >
              <div className="mb-4 shrink-0">
                {bottomCard.icon}
              </div>
              <h3 className="text-sm font-bold text-black mb-1.5 leading-tight">{bottomCard.title}</h3>
              <p className="text-gray-500 text-[clamp(10px,1vw+0.2rem,11px)] leading-relaxed font-medium mb-0 flex-1">{bottomCard.desc}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhySection;
