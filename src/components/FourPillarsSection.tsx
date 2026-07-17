import frameworkBg from "@/assets/home/frameworkbg.webp";
import cardIcon from "@/assets/home/Icon.svg";
import cyberCenter from "@/assets/home/Cyber-center png 2.png";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const pillars = [
  {
    number: "01",
    subtitle: "MSS",
    title: "Managed Security Services",
    description: "Continuous protection & monitoring — External Attack Surface Monitoring, Pentesting, MDR/SOC, Compliance & vCISO.",
    tiers: ["Essential Cyber Protection", "Advanced Protection", "Cyber Resilience Programme"],
    badgeColor: "from-[#F37A3A] to-transparent",
  },
  {
    number: "02",
    subtitle: "AI SEC",
    title: "AI Security & Assurance",
    description: "AI risk, governance & red team testing — protecting AI systems from risks unique to machine learning.",
    tiers: ["Basic AI Security", "Standard AI Security", "Enterprise AI Resilience"],
    badgeColor: "from-[#F37A3A] to-transparent",
  },
  {
    number: "03",
    subtitle: "CRISIS",
    title: "Cyber Resilience & Crisis Simulation",
    description: "Ransomware simulation, executive tabletop, crisis communications & business continuity testing.",
    tiers: ["Essential Resilience", "BCP & Crisis Readiness", "Enterprise Cyber Command"],
    badgeColor: "from-[#F37A3A] to-transparent",
  },
  {
    number: "04",
    subtitle: "CTEM",
    title: "Continuous Threat Exposure Management",
    description: "ASM · BAS · CSPM · Threat Intel — continuous visibility into your threat exposure landscape.",
    tiers: ["CTEM Essential", "CTEM Advanced", "CTEM Enterprise"],
    badgeColor: "from-[#F37A3A] to-transparent",
  },
];

const FourPillarsSection = () => {
  const positions = [
    "lg:top-0 lg:left-0",              // 01
    "lg:top-[50px] lg:right-0",        // 02
    "lg:top-[220px] lg:left-0",        // 03
    "lg:top-[270px] lg:right-0",       // 04
  ];

  return (
    <section id="services" className="relative py-10 overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 ">
        <img src={frameworkBg} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
      </div>

      {/* Center Graphic - More subtle like Image 1 */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <img src={cyberCenter} alt="" className="max-w-[250px] md:max-w-[350px] h-auto" loading="lazy" decoding="async" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <SectionHeader
          subtitle="Service Portfolio"
          titlePart2="One partner. Four pillars. Zero blind spots."
          description="Integrated bundles across MSS, AI Security, Crisis Resilience and CTEM — tied to measurable business outcomes."
        />

        {/* Staggered Cards Layout */}
        <div className="relative max-w-6xl mx-auto flex flex-col lg:block gap-8 lg:min-h-[550px]">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className={`relative lg:absolute ${positions[index]} w-full lg:w-[500px] transition-all duration-500 hover:translate-y-[-5px]`}
            >
              {/* Card Header (Number + Badge) */}
              <div className={`flex items-end gap-2 mb-2 ${index % 2 === 1 ? 'lg:justify-end lg:pr-6' : 'lg:justify-start lg:pl-6'}`}>
                {index % 2 === 1 && (
                  <div className={`pr-2 pl-8 bg-gradient-to-l ${pillar.badgeColor} text-white  font-bold text-[clamp(10px,1.5vw+0.2rem,18px)] tracking-widest uppercase mb-1`}>
                    {pillar.subtitle}
                  </div>
                )}

                <span className="text-[clamp(40px,3vw+1rem,50px)] font-bold text-[#F37A3A]/30 leading-[0.8] tracking-tighter">
                  {pillar.number}
                </span>

                {index % 2 === 0 && (
                  <div className={`pl-2 pr-8 bg-gradient-to-r ${pillar.badgeColor} text-white  font-bold text-[clamp(10px,1.5vw+0.2rem,18px)] tracking-widest uppercase mb-1`}>
                    {pillar.subtitle}
                  </div>
                )}
              </div>

              {/* Main Card */}
              <GlassCard
                containerClassName="w-full lg:w-[550px] lg:min-h-[150px]"
                className="p-2 md:p-4 flex flex-col justify-center"
                gradientBorder="bg-gradient-to-r from-[#F37A3A]/50 via-[#F37A3A]/20 to-transparent"
              >
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  {/* Icon */}
                  <div className="shrink-0 mt-1">
                    <img src={cardIcon} alt="" className="w-8 h-8 md:w-10 md:h-10" loading="lazy" decoding="async" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] font-bold text-[#4D124E] mb-2 leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-500 text-[clamp(11px,1vw+0.4rem,12px)] leading-relaxed mb-4 font-medium opacity-90 line-clamp-3">
                      {pillar.description}
                    </p>

                    {/* Tiers */}
                    <div
                      className="flex flex-nowrap gap-1 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                      style={{ maskImage: "linear-gradient(to right, black 95%, transparent)" }}
                    >
                      {pillar.tiers.map((tier) => (
                        <span
                          key={tier}
                          className="px-1.5 py-0.5 rounded-full border border-[#CA1C69]/40 text-[#CA1C69] text-[clamp(8px,1vw+0.2rem,11px)] shrink-0 hover:bg-[#CA1C69]/5 transition-colors"
                        >
                          {tier}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourPillarsSection;
