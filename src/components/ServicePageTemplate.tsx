import { useState, useCallback, memo } from "react";
import { ChevronRight, Check, CheckCircle2 } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageHero from "./PageHero";
import { SectionHeader } from "./ui/SectionHeader";
import serviceBg from "@/assets/services/servicebg.webp";
import serviceImg from "@/assets/services/Image (1).webp";
import lineBg from "@/assets/services/linebg.webp";

// Roadmap images
import card1 from "@/assets/services/Service Card (1).webp";
import card3 from "@/assets/services/Service Card (3).webp";
import card4 from "@/assets/services/Service Card (4).webp";
import cardDefault from "@/assets/services/Service Card.webp";
import vector4 from "@/assets/services/Vector 4.png";
import vector5 from "@/assets/services/Vector 5.png";
import ctaImage from "@/assets/services/image.webp";
import ctaBg from "@/assets/services/Imagebg.webp";
import frameImg from "@/assets/services/Frame.svg";
import lineLeft from "@/assets/services/Line.png";
import lineRight from "@/assets/services/Line2.png";
import { Search, Users, Shield, Fingerprint, Lock, ShieldCheck } from "lucide-react";
import checkCircleIcon from "@/assets/services/consulting/CheckCircle.svg";
import Checkmark from "@/assets/CTEM/check-mark.svg?react";
import bgGroup from "@/assets/services/Group.svg";
import bgGroupMSA from "@/assets/menu/service/Group.svg";
import experientialBadgeIcon from "@/assets/services/awareness/fi_6865349.svg";

interface ServicePageProps {
  title: string;
  description: string;
  keyPoints: string[];
  image: string;
  pageHero?: {
    titlePart1: string;
    titlePart2: string;
    titlePart3?: string;
    image?: string;
    badge?: string;
    buttonText?: string;
    buttonLink?: string;
    bottomRightImage?: string;
  };
  introSection?: {
    subtitle?: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    content?: string;
    image?: string;
    stats?: {
      value: string;
      label: string;
      source: string;
    }[];
    features?: {
      icon: any;
      title: string;
      description: string;
    }[];
  };
  experientialSection?: {
    badge?: string;
    subtitle: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    image: string;
    stats: {
      value: string;
      label: string;
    }[];
    scenarios: {
      icon: any;
      title: string;
      description: string;
    }[];
  };
  platformSection?: {
    subtitle: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    pillars: {
      icon: any;
      title: string;
      description: string;
    }[];
  };
  lifecycleSection?: {
    subtitle: string;
    titlePart1: string;
    titlePart2: string;
    arrowUpImage: string;
    arrowDownImage: string;
    steps: {
      icon: any;
      title: string;
      description: string;
      isHighlighted?: boolean;
    }[];
  };
  benefitsSection?: {
    subtitle?: string;
    titlePart1: string;
    titlePart2: string;
    titlePart3?: string;
    description?: string;
    cards: {
      title: string;
      description: string;
      icon: any;
      isHighlighted?: boolean;
    }[];
  };
  outcomesSection?: {
    subtitle: string;
    titlePart1: string;
    titlePart2: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
  managedServiceSection?: {
    subtitle: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    image: string;
    features: string[];
  };
  exclusiveServiceSection?: {
    subtitle?: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    features: {
      title: string;
      description: string;
      icon?: any;
    }[];
  };
  roadmapSection?: {
    subtitle?: string;
    titlePart1: string;
    titlePart2: string;
    titlePart3?: string;
    description?: string;
    steps: {
      title: string;
      description: string;
      image: string;
    }[];
  };
  ctaSection?: {
    titlePart1: string;
    titlePart2: string;
    titlePart3?: string;
    description: string;
    buttonText: string;
    image?: string;
    bgImage?: string;
  };
  whyUs?: {
    title: string;
    description: string;
    icon: string | ((...args: any[]) => any);
  }[];
  scope?: {
    title: string;
    content: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

const ServicePageTemplate: React.FC<ServicePageProps> = ({
  title,
  description,
  keyPoints,
  image,
  pageHero,
  introSection,
  experientialSection,
  platformSection,
  lifecycleSection,
  benefitsSection,
  outcomesSection,
  managedServiceSection,
  exclusiveServiceSection,
  roadmapSection,
  ctaSection,
  whyUs,
  scope,
  faqs,
}) => {
  const isMSA = title === "Managed Security Awareness";
  const [expandedScope, setExpandedScope] = useState<Record<number, boolean>>({});
  const [expandedFAQs, setExpandedFAQs] = useState<Record<number, boolean>>({});

  const toggleScope = useCallback((index: number) => {
    setExpandedScope((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }, []);

  const toggleFAQ = useCallback((index: number) => {
    setExpandedFAQs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }, []);


  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <PageHero
        image={pageHero?.image || serviceBg}
        titlePart1={pageHero?.titlePart1 || title}
        titlePart2={pageHero?.titlePart2 || ""}
        titlePart3={pageHero?.titlePart3 ? <span className="text-[#DBDBDB] text-[20px] md:text-[26px] block mt-2 font-medium">{pageHero.titlePart3}</span> : undefined}
        description={description}
        badge={pageHero?.badge}
        bottomRightImage={pageHero?.bottomRightImage}
        showStats={false}
      >
        {pageHero?.buttonText && (
          <a
            href={pageHero.buttonLink || "/contact"}
            className="inline-block mt-4 text-white px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90 bg-gradient-cta"
          >
            {pageHero.buttonText}
          </a>
        )}
      </PageHero>

      {/* Intro Section */}
      {introSection && (
        <section className="py-12 bg-white dark:bg-slate-950 overflow-hidden">
          <div className="container mx-auto px-6">
            <SectionHeader
              subtitle={introSection.subtitle}
              titlePart2={`${introSection.titlePart1} ${introSection.titlePart2}`}
              description={introSection.description}
            />

            {introSection.stats && (
              <div
                className="max-w-5xl mx-auto mb-16 relative rounded-[20px] p-[1px] shadow-sm"
                style={{
                  background: "radial-gradient(78.99% 95.57% at 17.38% 2.08%, #FF9A3C 0%, #461148 100%)"
                }}
              >
                <div className="bg-[#FCFCFC] dark:bg-slate-900 rounded-[19px] p-4 lg:p-6">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-800 ${isMSA ? 'md:grid-cols-2 md:gap-0 md:divide-y-0 md:divide-x' : ''}`}>
                    {introSection.stats.map((stat: any, idx: number) => (
                      <div key={idx} className="flex flex-row items-center gap-3 px-4 md:px-6 pt-4 md:pt-0">
                        <div
                          className="text-fluid-4xl text-primary shrink-0 leading-none"
                          style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}
                        >
                          {stat.value}
                        </div>
                        <div className="flex flex-col text-left max-w-[140px]">
                          <div className="!text-fluid-xs text-gray-600 dark:text-gray-300 font-medium mb-1 leading-tight">{stat.label}</div>
                          <div className="!text-fluid-xs text-gray-400 leading-tight">{stat.source}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col lg:flex-row items-start gap-12 max-w-5xl mx-auto">
              <div className="lg:w-[320px] relative shrink-0">
                <div className="relative z-10">
                  <img
                    src={introSection.image || serviceImg}
                    alt={title}
                    className="w-full h-auto object-contain "
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="flex-1 pt-2">
                {introSection.features ? (
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 ${isMSA ? 'md:grid-cols-2' : ''}`}>
                    {introSection.features.map((feature: any, idx: number) => (
                      <div key={idx} className="flex flex-col items-start">
                        <feature.icon className="w-10 h-10 mb-4" />
                        <h4 className="text-fluid-lg font-bold text-[#461148] dark:text-white mb-3">{feature.title}</h4>
                        <p className="text-fluid-sm text-gray-500 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <p className="!text-fluid-lg text-[#461148] dark:text-gray-200 mb-6 leading-relaxed font-normal">
                      {introSection.content}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <img src={checkCircleIcon} alt="Check" className="mt-1 flex-shrink-0 w-4 h-4" loading="lazy" decoding="async" />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="/contact"
                      className="inline-block px-8 py-3 bg-gradient-to-r from-[#701a41] to-[#B3346F] text-white font-semibold rounded-full hover:shadow-lg transition-all transform hover:-translate-y-1 !text-fluid-xs uppercase tracking-wider"
                    >
                      Request a Demo
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {/* Experiential Section */}
      {experientialSection && (
        <section className="py-10 bg-[#F8F8F8] overflow-hidden relative border-t border-gray-100 dark:border-gray-800">
          {/* Subtle curved background lines simulation */}
          <div className="absolute inset-0 bg-[length:100%_auto] bg-no-repeat opacity-40" style={{ backgroundImage: `url(${bgGroupMSA})`, backgroundPosition: "center 75%" }} />

          <div className="container mx-auto relative z-10">
            {/* Top Split Header */}
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto mb-20">
              <div className="lg:w-[50%] flex flex-col items-start text-left lg:pr-8">
                {experientialSection.badge && (
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#F9E8F0] rounded-full">
                      <img src={experientialBadgeIcon} alt="Badge Icon" className="w-5 h-5" />
                    </div>
                    <span className="text-fluid-sm font-semibold text-[#334155] tracking-tight">{experientialSection.badge}</span>
                  </div>
                )}

                <SectionHeader
                  align="left"
                  subtitle={experientialSection.subtitle}
                  titlePart1={experientialSection.titlePart1}
                  titlePart2={experientialSection.titlePart2}
                  description={experientialSection.description}
                  className="mb-6"
                />

                {/* Stats */}
                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full ${isMSA ? 'md:grid-cols-3' : ''}`}>
                  {experientialSection.stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col">
                      <div className="text-fluid-4xl font-bold text-primary mb-3">{stat.value}</div>
                      <div className="text-fluid-xs font-medium text-gray-500 dark:text-gray-400 leading-[1.6] max-w-[150px]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-[50%] w-full flex justify-center relative">
                <img
                  src={experientialSection.image}
                  alt="Experiential Training"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800"
                />
              </div>
            </div>

            {/* Scenarios Grid */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-5xl mx-auto ${isMSA ? 'md:grid-cols-2' : ''}`}>
              {experientialSection.scenarios.map((scenario, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center p-2 md:p-4"
                  style={{
                    backgroundColor: '#FFFFFFCC',
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)'
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      padding: '1px',
                      background: 'radial-gradient(78.99% 95.57% at 17.38% 2.08%, #FF9A3C 0%, #461148 100%)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className="mb-3 text-primary relative z-10">
                    <scenario.icon className="w-7 h-7 md:w-8 md:h-8" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-fluid-base font-bold text-[#461148] dark:text-white mb-2 leading-tight relative z-10">{scenario.title}</h4>
                  <p className="text-fluid-xs text-gray-600 dark:text-gray-400 leading-relaxed max-w-[200px] relative z-10">{scenario.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Platform Section */}
      {platformSection && (
        <section className="py-10 bg-white dark:bg-slate-950 overflow-hidden relative">
          <div className="container mx-auto relative z-10 text-center">
            {/* Header */}
            <SectionHeader
              subtitle={platformSection.subtitle}
              titlePart2={`${platformSection.titlePart1} ${platformSection.titlePart2}`}
              description={platformSection.description}
            />

            {/* Pillars Grid */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16 max-w-5xl mx-auto ${isMSA ? 'md:grid-cols-3' : ''}`}>
              {platformSection.pillars.map((pillar, idx) => (
                <div key={idx} className="flex flex-col items-center text-center px-4">
                  <div className="mb-6 text-primary">
                    <pillar.icon className="w-12 h-12" />
                  </div>
                  <h4 className="text-fluid-xl font-bold text-[#461148] dark:text-white mb-4">{pillar.title}</h4>
                  <p className="text-fluid-sm text-gray-500 dark:text-gray-400 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lifecycle Section */}
      {lifecycleSection && (
        <section className="py-10 bg-white dark:bg-slate-950 overflow-hidden relative">
          <div className="container mx-auto relative z-10 text-center max-w-5xl">

            {/* Header */}
            <SectionHeader
              subtitle={lifecycleSection.subtitle}
              titlePart2={`${lifecycleSection.titlePart1} ${lifecycleSection.titlePart2}`}
            />

            {/* Timeline Wrapper */}
            <div className="relative mt-12 mb-12">
              {/* Steps Grid */}
              <div className={`grid grid-cols-1 lg:grid-cols-5 gap-y-12 gap-x-6 relative z-10 ${isMSA ? 'md:grid-cols-3' : ''}`}>
                {lifecycleSection.steps.map((step, idx) => (
                  <div key={idx} className={`flex flex-col items-center text-center group relative ${step.isHighlighted ? '-translate-x-3' : ''} ${idx === 2 ? '-translate-x-4' : ''}`}>

                    {/* Connecting Arrow (hidden on mobile) */}
                    {idx < lifecycleSection.steps.length - 1 && (
                      <div
                        className={`hidden lg:block absolute pointer-events-none z-0
                          left-[calc(50%+1.75rem)] w-[calc(100%-3.5rem)]
                          ${idx === 1 ? 'translate-x-5 top-10' : (idx === 2 ? 'translate-x-8 top-1' : (idx === 3 ? 'translate-x-3 top-9' : (idx % 2 === 0 ? 'top-1' : 'top-8')))}
                        `}
                      >
                        <img
                          src={idx % 2 === 0 ? lifecycleSection.arrowUpImage : lifecycleSection.arrowDownImage}
                          alt="Arrow connector"
                          className="w-full h-auto opacity-80 scale-150"
                        />
                      </div>
                    )}

                    {/* Icon Bubble */}
                    <div className={`relative z-10 flex items-center justify-center mb-10 transition-all duration-300 rounded-full w-10 h-10 bg-transparent group-hover:bg-[#CA1C69] group-hover:scale-[0.8] ${idx === 0 || step.isHighlighted ? 'translate-y-3' : ''} ${idx === 0 ? '-translate-x-4' : ''} ${idx === 2 ? 'translate-x-3 translate-y-2' : ''} ${idx === 3 ? 'translate-y-3' : ''}`}>
                      <step.icon className="transition-all duration-300 w-6 h-6 text-primary group-hover:brightness-0 group-hover:invert" />
                    </div>

                    {/* Content */}
                    <h4 className="text-fluid-base font-bold text-[#461148] dark:text-white mb-3 tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-fluid-xs text-gray-500 dark:text-gray-400 leading-relaxed px-2">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Outcomes Section (replaces benefits for some pages) */}
      {outcomesSection && (
        <section
          className="py-6 md:py-10 relative bg-[#2D0A31] overflow-hidden"
          style={{
            backgroundImage: `url(${lineBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#2D0A31]/60 z-0"></div>

          <div className="container mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 max-w-5xl mx-auto">

              {/* Left text */}
              <div className="lg:w-[40%] text-left mb-6 lg:mb-0">
                <SectionHeader
                  align="left"
                  subtitle={outcomesSection.subtitle}
                  title={
                    <>
                      {outcomesSection.titlePart1}
                      <br />
                      {outcomesSection.titlePart2}
                    </>
                  }
                  lightText={true}
                  className="mb-0"
                />
              </div>

              {/* Right Stats Grid */}
              <div className="lg:w-[60%] w-full">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-12 relative ${isMSA ? 'md:grid-cols-2' : ''}`}>

                  {/* Internal grid borders */}
                  <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 hidden lg:block" />
                  <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/10 hidden lg:block" />

                  {outcomesSection.stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col text-left py-4 px-2">
                      <div className="!text-fluid-5xl font-bold text-white mb-3 tracking-tight">{stat.value}</div>
                      <div className="!text-fluid-sm text-gray-300 font-medium leading-relaxed max-w-[250px]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Managed Service Section */}
      {managedServiceSection && (
        <section className="py-16 bg-white dark:bg-slate-950 overflow-hidden relative">
          <div className="container mx-auto relative z-10">
            <div className={`flex flex-col lg:flex-row items-center gap-16 max-w-5xl mx-auto ${isMSA ? 'md:flex-row md:items-start' : ''}`}>

              <div className={`lg:w-[50%] w-full ${isMSA ? 'md:w-[50%]' : ''}`}>
                <SectionHeader
                  align="left"
                  subtitle={managedServiceSection.subtitle}
                  titlePart1={managedServiceSection.titlePart1}
                  titlePart2={managedServiceSection.titlePart2}
                  description={managedServiceSection.description}
                  className="mb-6"
                />

                <ul className="space-y-5">
                  {managedServiceSection.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <Checkmark className="w-[22px] h-[22px]" />
                      </div>
                      <span className="text-fluid-sm text-gray-700 dark:text-gray-300 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`lg:w-[50%] w-full flex justify-center ${isMSA ? 'md:w-[50%]' : ''}`}>
                <img
                  src={managedServiceSection.image}
                  alt={managedServiceSection.titlePart1}
                  className="w-full h-auto object-cover rounded-2xl shadow-xl"
                />
              </div>

            </div>
          </div>
        </section>
      )}

      {benefitsSection && (
        <section
          className="pt-20 pb-32 relative bg-[#2D0A31]"
          style={{
            backgroundImage: `url(${lineBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay to ensure readability */}
          <div className="absolute inset-0 bg-[#2D0A31]/80 z-0"></div>

          <div className="container mx-auto relative z-10 text-center">
            <SectionHeader
              subtitle={benefitsSection.subtitle}
              titlePart1={benefitsSection.titlePart1}
              titlePart2={benefitsSection.titlePart2 ? `${benefitsSection.titlePart2} ${benefitsSection.titlePart3 || ""}` : undefined}
              title={benefitsSection.titlePart1 && !benefitsSection.titlePart2 ? `${benefitsSection.titlePart1} ${benefitsSection.titlePart3 || ""}` : undefined}
              description={benefitsSection.description}
              lightText={true}
              className="mb-16"
            />

            <div className={`grid lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-5xl mx-auto relative z-20 -mb-56 ${isMSA ? 'md:grid-cols-2' : ''}`}>
              {benefitsSection.cards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="px-6 py-10 rounded-lg transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center shadow-2xl group cursor-pointer border-[2px] border-[#FF9A3C]/20 bg-white text-gray-900 hover:bg-gradient-to-b hover:from-[#B3346F] hover:to-[#701a41] hover:text-white hover:border-[#B3346F]/20"
                  >
                    <div className="w-16 h-16 flex items-center justify-center mb-8">
                      {<Icon className="w-12 h-12 [&_path]:transition-colors [&_path]:duration-300 group-hover:[&_path]:fill-[#D4C2C2]" />}
                    </div>
                    <h3
                      className="!text-fluid-xl font-bold mb-5 transition-colors duration-300 text-[#B3346F] group-hover:text-white"
                    >
                      {card.title}
                    </h3>
                    <p
                      className="!text-fluid-sm leading-relaxed transition-colors duration-300 font-medium text-gray-500 group-hover:text-white/90"
                    >
                      {card.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}
      {/* Roadmap Section */}
      {roadmapSection && (
        <section className="pt-24 lg:pt-56 pb-[10%] lg:pb-[60%] bg-white dark:bg-slate-950 relative">
          <div className="container mx-auto px-6">
            <SectionHeader
              subtitle={roadmapSection.subtitle}
              titlePart2={`${roadmapSection.titlePart1} ${roadmapSection.titlePart2} ${roadmapSection.titlePart3 || ""}`}
              description={roadmapSection.description}
              className="relative z-10"
            />

            <div className="max-w-5xl mx-auto relative pt-10">
              {/* Desktop version - complex connected layout */}
              <div className="hidden xl:block">
                {roadmapSection.steps.slice(0, 1).map((step, idx) => {
                  const isEven = idx % 2 === 0;
                  const stepImg = cardDefault;
                  const connectorImg = vector4;

                  return (
                    <div key={idx} className="relative mb-[1000px] last:mb-0">
                      <div
                        className={`flex flex-col xl:flex-row items-center relative z-10 ${!isEven ? "xl:flex-row-reverse" : ""
                          }`}
                      >
                        {/* Image Container */}
                        <div className="xl:w-[35%] relative flex justify-center">
                          <div
                            className="relative z-10 transition-transform duration-500 hover:scale-105"
                          >
                            <img
                              src={stepImg}
                              alt={step.title}
                              className="w-72 h-72 object-contain"
                              loading="lazy"
                              decoding="async"
                            />

                            {/* Connector Line (Vector 4) */}
                            {idx < roadmapSection.steps.length - 1 && (
                              <div className={`hidden xl:block absolute top-0 w-[600px] pointer-events-none z-[-1] ${isEven ? "left-[90%]" : "right-[70%] -scale-x-100"}`}>
                                <img src={connectorImg}
                                  alt=""
                                  className="w-full h-auto opacity-80"
                                  loading="lazy" decoding="async" />
                                {/* Dynamic next step at the end of the line */}
                                {roadmapSection.steps[idx + 1] && (
                                  <div className="absolute bottom-[-220px] right-[20px] flex items-center gap-8 pointer-events-auto">
                                    <div className="max-w-[250px] text-left">
                                      <h3 className="ml-[-120px] text-fluid-xl font-bold text-primary mb-2 ">
                                        {roadmapSection.steps[idx + 1].title}
                                      </h3>
                                      <p className="ml-[-120px] text-[#461148] dark:text-gray-400 text-fluid-xs leading-relaxed font-medium">
                                        {roadmapSection.steps[idx + 1].description}
                                      </p>
                                    </div>
                                    <img src={card1}
                                      alt={roadmapSection.steps[idx + 1].title}
                                      className="w-72 h-72 object-contain relative z-10"
                                      loading="lazy" decoding="async" />

                                    {/* Next Connector Line (Vector 5) */}
                                    {idx < roadmapSection.steps.length - 2 && (
                                      <div className="absolute top-[70%] right-[30%] w-[600px] pointer-events-none z-[-1]">
                                        <img src={vector5}
                                          alt=""
                                          className="w-full h-auto opacity-80"
                                          loading="lazy" decoding="async" />
                                        {/* Dynamic third step at the end of the line */}
                                        {roadmapSection.steps[idx + 2] && (
                                          <div className="absolute bottom-[-130px] left-[-100px] flex items-center gap-8 pointer-events-auto">
                                            <img src={card3}
                                              alt={roadmapSection.steps[idx + 2].title}
                                              className="w-72 h-72 object-contain"
                                              loading="lazy" decoding="async" />
                                            <div className="max-w-[380px] mb-56 text-left">
                                              <h3 className="ml-[-70px] text-fluid-xl font-bold text-primary mb-2 leading-tight">
                                                {roadmapSection.steps[idx + 2].title}
                                              </h3>
                                              <p className="ml-[-70px] text-[#461148] dark:text-gray-400 text-fluid-xs leading-relaxed font-medium">
                                                {roadmapSection.steps[idx + 2].description}
                                              </p>

                                              {/* Connector to 4th step */}
                                              {roadmapSection.steps[idx + 3] && (
                                                <div className="absolute top-[100%] left-[50%] w-[570px] pointer-events-none z-[-1]">
                                                  {/* Dynamic fourth step */}
                                                  <div className="absolute bottom-[-150px] right-[-50px] flex flex-row-reverse items-center gap-8 pointer-events-auto">
                                                    <img src={card4}
                                                      alt={roadmapSection.steps[idx + 3].title}
                                                      className="w-72 h-72 object-contain"
                                                      loading="lazy" decoding="async" />
                                                    <div className="max-w-[380px] mb-20 text-right">
                                                      <h3 className="ml-[-100px] text-fluid-xl font-bold text-primary mb-2 leading-tight">
                                                        {roadmapSection.steps[idx + 3].title}
                                                      </h3>
                                                      <p className="ml-[-100px] text-[#461148] dark:text-gray-400 text-fluid-xs leading-relaxed font-medium">
                                                        {roadmapSection.steps[idx + 3].description}
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Dynamic Text Content */}
                        <div className={`xl:w-[40%]  text-center xl:text-left ${!isEven ? "xl:text-right" : ""}`}>
                          <h3 className="ml-[-90px] text-fluid-xl font-bold text-primary mb-4 leading-tight">
                            {step.title}
                          </h3>
                          <p className="ml-[-90px] text-[#461148] dark:text-gray-400 text-fluid-sm leading-relaxed font-medium max-w-sm">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile and iPad version - standard vertical layout */}
              <div className="block xl:hidden space-y-16">
                {roadmapSection.steps.map((step, idx) => {
                  const stepImg = idx === 0 ? cardDefault : idx === 1 ? card1 : idx === 2 ? card3 : card4;
                  return (
                    <div key={idx} className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                      <div className="w-full lg:w-[50%] flex justify-center shrink-0">
                        <img src={stepImg} alt={step.title} className="w-48 h-48 lg:w-56 lg:h-56 object-contain" loading="lazy" decoding="async" />
                      </div>
                      <div className="w-full lg:w-[50%]">
                        <h3 className="text-fluid-xl font-bold text-primary mb-3">{step.title}</h3>
                        <p className="text-[#461148] dark:text-gray-400 text-fluid-sm leading-relaxed font-medium">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Dynamic CTA Section */}
      {ctaSection && (
        <section
          className="py-12 relative overflow-hidden"
          style={{
            backgroundImage: `url(${ctaBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-5xl mx-auto">
              <div className="lg:w-1/2 text-left">
                <SectionHeader
                  align="left"
                  titlePart1={ctaSection.titlePart1}
                  titlePart2={`${ctaSection.titlePart2} ${ctaSection.titlePart3 ? ctaSection.titlePart3 : ""}`}
                  titlePart2ClassName="bg-gradient-to-r from-[#B3346F] to-[#FF8E53]"
                  description={ctaSection.description}
                  lightText={true}
                  showBar={false}
                  className="mb-8"
                />
                <a
                  href="/contact"
                  className="bg-gradient-cta inline-block px-8 py-3 text-white font-bold rounded-full hover:bg-[#9e2d62] transition-colors shadow-lg shadow-[#B3346F]/20 uppercase tracking-widest text-xs"
                >
                  {ctaSection.buttonText}
                </a>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-[400px]">
                  <img
                    src={ctaImage}
                    alt="CTA"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Exclusive Service Section */}
      {exclusiveServiceSection && (
        <section className="relative py-16 bg-white dark:bg-slate-950 overflow-hidden">
          <div className="container mx-auto">
            {/* Header */}
            <SectionHeader
              subtitle={exclusiveServiceSection.subtitle}
              titlePart2={`${exclusiveServiceSection.titlePart1} ${exclusiveServiceSection.titlePart2}`}
              description={exclusiveServiceSection.description}
            />

            {/* Main Content Layout */}
            <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0 max-w-5xl mx-auto">

              {/* Connecting Lines SVG (Desktop Only) */}
              <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Left Lines */}
                  <path d="M400 120 H440 V480 H400" stroke="#E5E7EB" strokeWidth="1" />
                  <path d="M400 300 H440" stroke="#E5E7EB" strokeWidth="1" />
                  <path d="M440 300 H550" stroke="#E5E7EB" strokeWidth="1" />
                  <circle cx="440" cy="300" r="2.5" fill="#E5E7EB" />

                  {/* Right Lines */}
                  <path d="M800 120 H760 V480 H800" stroke="#E5E7EB" strokeWidth="1" />
                  <path d="M800 300 H760" stroke="#E5E7EB" strokeWidth="1" />
                  <path d="M760 300 H650" stroke="#E5E7EB" strokeWidth="1" />
                  <circle cx="760" cy="300" r="2.5" fill="#E5E7EB" />
                </svg>
              </div>

              {/* Left Column */}
              <div className="flex flex-col gap-4 w-full lg:w-[280px] z-10">
                {exclusiveServiceSection.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="bg-gray-50/40 dark:bg-slate-900/40 backdrop-blur-sm border border-gray-100 dark:border-gray-800 rounded-[28px] p-6 shadow-sm transition-all duration-300 hover:shadow-md group">
                    <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                      {feature.icon ? (
                        (() => {
                          const FeatureIcon = feature.icon;
                          return <FeatureIcon className="w-14 h-14" />;
                        })()
                      ) : (
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B3346F]/10 to-[#FF8E53]/10 flex items-center justify-center">
                          {idx === 0 && <Search className="w-5 h-5 text-[#B3346F]" />}
                          {idx === 1 && <Users className="w-5 h-5 text-[#B3346F]" />}
                          {idx === 2 && <Shield className="w-5 h-5 text-[#B3346F]" />}
                        </div>
                      )}
                    </div>
                    <h3 className="text-fluid-lg font-bold text-gray-900 dark:text-white mb-1.5 leading-tight">{feature.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-fluid-xs leading-relaxed font-medium">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Central Illustration */}
              <div className="w-full lg:w-[400px] flex flex-col items-center justify-center py-6 z-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 to-pink-200/20 blur-[50px] rounded-full scale-150 animate-pulse" />
                  <img
                    src={frameImg}
                    alt="Service Illustration"
                    className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10 transition-transform duration-700 hover:scale-105 drop-shadow-2xl"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-4 w-full lg:w-[280px] z-10">
                {exclusiveServiceSection.features.slice(3, 6).map((feature, idx) => (
                  <div key={idx} className="bg-gray-50/40 dark:bg-slate-900/40 backdrop-blur-sm border border-gray-100 dark:border-gray-800 rounded-[28px] p-6 shadow-sm transition-all duration-300 hover:shadow-md group">
                    <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                      {feature.icon ? (
                        (() => {
                          const FeatureIcon = feature.icon;
                          return <FeatureIcon className="w-14 h-14" />;
                        })()
                      ) : (
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B3346F]/10 to-[#FF8E53]/10 flex items-center justify-center">
                          {idx === 0 && <Fingerprint className="w-5 h-5 text-[#FF8E53]" />}
                          {idx === 1 && <Lock className="w-5 h-5 text-[#FF8E53]" />}
                          {idx === 2 && <ShieldCheck className="w-5 h-5 text-[#FF8E53]" />}
                        </div>
                      )}
                    </div>
                    <h3 className="text-fluid-lg font-bold text-gray-900 dark:text-white mb-1.5 leading-tight">{feature.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-fluid-xs leading-relaxed font-medium">{feature.description}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* High-Fidelity FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 bg-white dark:bg-slate-950 relative mb-20">
          <div className="container mx-auto relative z-10">
            <SectionHeader
              subtitle="Frequently Asked Questions"
              titlePart2="Clearing the Air"
              description={<>Adopting the {title} model can pose challenges for organizations. To ensure successful implementation, a clear roadmap is essential. Here's an overview of the steps we use to guide businesses through the {title} adoption process.</>}
            />

            <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-20">
              {/* Decorative Wrapper with Subtle Gradient Border */}
              <div className="p-[1px] bg-gradient-to-br from-[#B3346F]/30 via-[#FF8E53]/20 to-[#B3346F]/30 rounded-[20px] shadow-[0_20px_40px_-12px_rgba(179,52,111,0.08)]">
                <div className="bg-white dark:bg-slate-900 rounded-[20px]  p-4 lg:p-6">
                  <div className="">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="py-4 border-b border-[#C01E6C]">
                        <button
                          onClick={() => toggleFAQ(idx)}
                          className="w-full flex items-center justify-between text-left group focus:outline-none"
                        >
                          <span className={`text-fluid-xl font-medium leading-[1.2] tracking-[-0.02em] transition-colors duration-300 text-[#461148] dark:text-white`}>
                            {faq.question}
                          </span>
                          <div className={`flex-shrink-0 ml-4 transition-all duration-300 ${expandedFAQs[idx] ? "text-[#C01E6C] rotate-180" : "text-[#FF6C04]"
                            }`}>
                            {expandedFAQs[idx] ? (
                              <span className="text-2xl font-light leading-none">−</span>
                            ) : (
                              <span className="text-2xl font-light leading-none">+</span>
                            )}
                          </div>
                        </button>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQs[idx] ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                          }`}>
                          <p className="text-sm text-[#C01E6C] dark:text-[#C01E6C]/80 leading-relaxed font-normal opacity-90">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
};

export default memo(ServicePageTemplate);
