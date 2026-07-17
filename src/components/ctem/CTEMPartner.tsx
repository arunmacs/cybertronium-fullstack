"use client";
import trustedpartner from "@assets/CTEM/trusted-partner.webp"

const StarCheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
    <path d="M12 2L14.39 4.39L17.76 4.07L18.8 7.3L22 8.35L21.05 11.65L23.05 14.35L20.35 16.35L20.68 19.72L17.3 20.76L15.26 23.46L12 22L8.74 23.46L6.7 20.76L3.32 19.72L3.65 16.35L0.95 14.35L2.95 11.65L2 8.35L5.2 7.3L6.24 4.07L9.61 4.39L12 2Z" fill="url(#paint0_linear)" />
    <path d="M16 9L10.5 15L8 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="paint0_linear" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F37A3A" />
        <stop offset="1" stopColor="#CA1C69" />
      </linearGradient>
    </defs>
  </svg>
);

const leftFeatures = [
  {
    title: "CTEM Specialists",
    desc: "Deep expertise in exposure management, threat intelligence and validation."
  },
  {
    title: "Local Presence, Global Standards",
    desc: "Strong local team in Malaysia with global delivery capabilities."
  },
  {
    title: "Proven Methodology",
    desc: "Battle-tested framework aligned to NIST, MITRE and industry best practices."
  }
];

const rightFeatures = [
  {
    title: "Outcome Focused",
    desc: "200+ enterprises trust CogniShield for continuous threat exposure management."
  },
  {
    title: "Technology Agnostic",
    desc: "We bring the right technology mix to meet your unique business needs."
  },
  {
    title: "Trusted by Leading Organizations",
    desc: "Partner of choice for enterprises across sectors in Malaysia and ASEAN."
  }
];

const FeatureBlock = ({ title, desc }: { title: string, desc: string }) => (
  <div className="text-center">
    <div className="flex justify-center mb-4">
      <StarCheckIcon />
    </div>
    <h3 className="text-[18px] font-bold text-[#3B194E] mb-3">{title}</h3>
    <p className="text-[13px] text-gray-500 leading-[1.6] max-w-[280px] mx-auto">{desc}</p>
  </div>
);

const CTEMPartner = () => {
  return (
    <section className="py-6 lg:py-10 bg-white border-t border-gray-100">
      <div className="container mx-auto md:px-6 lg:px-20 max-w-[1200px]">
        <div className="text-center mb-10 lg:mb-14">
          <div className="w-12 h-0.5 bg-orange-400/50 mx-auto mb-3 rounded-full"></div>
          <div className="text-[14px] font-semibold text-[#CA1C69] tracking-wide mb-4">
            Why Partner With Us
          </div>
          <h2
            className="text-[40px] md:text-[48px] font-bold leading-tight bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(270.09deg, #F37A3A 16.02%, #CA1C69 91.5%)' }}
          >
            Your trusted CTEM partner
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Items */}
          <div className="lg:w-[30%] space-y-12">
            {leftFeatures.map((feature, idx) => (
              <FeatureBlock key={`left-${idx}`} {...feature} />
            ))}
          </div>

          {/* Center Image */}
          <div className="lg:w-[35%] flex justify-center w-full">
            <div className="w-full max-w-[400px] aspect-[4/5] rounded-[8px] overflow-hidden shadow-lg border border-gray-100">
              <img src={trustedpartner}
                alt="Trusted Partner"
                className="w-full h-full object-cover"
                loading="lazy" decoding="async"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="gray"><rect width="100" height="100"/></svg>';
                }}
              />
            </div>
          </div>

          {/* Right Items */}
          <div className="lg:w-[30%] space-y-12">
            {rightFeatures.map((feature, idx) => (
              <FeatureBlock key={`right-${idx}`} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTEMPartner;
