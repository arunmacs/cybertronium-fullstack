import { useState, useEffect, useRef } from "react";
import Link from "next/link";;
import { cn } from "@/lib/utils";
import { ChevronRight, CircleCheck, Hexagon } from "lucide-react";
import lineBg from "@/assets/services/Group.svg";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TabBar } from "@/components/ui/TabBar";

// Icons
import coreIcon from "@/assets/services/core.svg?react"
import coreHoverIcon from "@/assets/services/corehover.svg?react"
// import ctemIcon from "@/assets/services/ctem.svg?react"
// import cloudSecurity from "@/assets/services/cloud-security.svg?react"
// import appSecurityServices from "@/assets/services/app-security-services.svg?react"
// import redPurpleTeaming from "@/assets/services/teaming.svg?react"

const tabs = ["Assessments", "Consulting", "AI Security", "Cloud Security", "MDR/SOC", "Awareness"];

interface ServiceCard {
  title: string;
  description: string;
  link: string;
  icon: any;
  hoverIcon?: any;
  highlights?: string[];
}

const serviceData: Record<string, ServiceCard[]> = {
  Assessments: [
    {
      title: "Vulnerability Assessment",
      description: "Identify security weaknesses across systems, networks, and applications before attackers can exploit them.",
      link: "/services/vulnerability-assessment",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    {
      title: "Penetration Testing",
      description: "Simulate real-world attacks to uncover exploitable vulnerabilities and validate your security defenses.",
      link: "/services/penetration-testing",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    {
      title: "App Security Services",
      description: "Secure web and mobile applications by identifying flaws in code, logic, and integrations before they can be exploited.",
      link: "/services/app-security-services",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    {
      title: "Red & Purple Teaming",
      description: "Emulate advanced adversaries to test detection and response, while improving collaboration between attack and defense teams.",
      link: "/services/red-purple-teaming",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    {
      title: "Firmware Security",
      description: "Analyze embedded systems and device firmware to detect hidden vulnerabilities and prevent hardware-level threats.",
      link: "/services/firmware-security",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    {
      title: "Compromise Assessment",
      description: "Investigate your environment to detect signs of past or ongoing breaches that may have gone unnoticed.",
      link: "/services/compromise-assessment",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    {
      title: "Cybersecurity Maturity Assessment",
      description: "Evaluate your security posture, processes, and controls to identify gaps and define a roadmap for improvement.",
      link: "/services/cybersecurity-maturity-assessment",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    }
  ],
  Consulting: [
    {
      title: "CTEM as a Service",
      description: "Continuous Threat Exposure Management, Continuously identify, prioritize, validate, and reduce cyber risks across organizational attack surfaces.",
      link: "/ctem",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    {
      title: "Zero Trust Implementation",
      description: "Implement continuous verification strategies to secure users, devices, applications, and enterprise networks.",
      link: "/services/zero-trust-implementation",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    {
      title: "Strategy & Consulting",
      description: "Develop cybersecurity strategies aligned with business goals, risks, and compliance requirements.",
      link: "/services/strategy-consulting",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    {
      title: "Governance, Risk & Compliance",
      description: "Manage cybersecurity risks, governance policies, and regulatory compliance across organizational environments.",
      link: "/services/governance-risk-compliance",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    {
      title: "Secure Digital Transformation",
      description: "Enable secure cloud adoption, modernization, and digital business transformation initiatives safely.",
      link: "/services/secure-digital-transformation",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    {
      title: "Digital Forensics & Incident Response",
      description: "Investigate cyber incidents, analyze evidence, and accelerate effective breach response processes.",
      link: "/services/digital-forensics-incident-response",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    {
      title: "Mobile Threat Defense",
      description: "Protect mobile devices, applications, and users from evolving cyber security threats and vulnerabilities.",
      link: "/services/mobile-threat-defense",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    {
      title: "CISO as a Service",
      description: "Access strategic cybersecurity leadership, governance expertise, and risk management guidance remotely.",
      link: "/services/ciso-as-a-service",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    }
  ],
  "AI Security": [
    {
      title: "LLM, AI Models & AI Agents Penetration Testing",
      description: "Deep, manual penetration testing of your LLM apps, custom models, RAG pipelines and agentic systems — aligned to OWASP LLM Top 10, MITRE ATLAS and NIST AI RMF.",
      link: "/services/ai-security",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    {
      title: "AI Red Team",
      description: "Continuous, scenario-driven adversarial emulation against your AI surface — simulating real-world threat actors and autonomous attacker swarms.",
      link: "/services/ai-security",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    {
      title: "AI Assurance & Governance",
      description: "Enterprise-grade security operations delivering advanced threat detection, continuous monitoring, and scalable cyber defense capabilities.",
      link: "/services/ai-security",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    {
      title: "AI Management System (ISO/IEC 42001) Consulting",
      description: "Implement and certify the world's first AI management system standard — aligned with EU AI Act, NIST AI RMF, ISO 23894 and sector regulators.",
      link: "/services/ai-security",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    }
  ],
  "Cloud Security": [
    {
      title: "Cloud Detection and Response",
      description: "Detect, investigate, and respond to advanced cloud threats with real-time monitoring.",
      link: "/services/cloud-detection-response",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    {
      title: "Cloud Security Posture Management",
      description: "Continuously monitor cloud configurations, enforce compliance, and reduce infrastructure security risks.",
      link: "/services/cloud-security-posture-management",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    {
      title: "Cloud Security Consulting",
      description: "Develop secure cloud strategies, strengthen governance, and improve scalable security compliance.",
      link: "/services/cloud-security-consulting",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    }
  ],
  // Awareness: [
  //   {
  //     title: "Managed Security Awareness",
  //     description: "Build a security-aware workforce through continuous training, phishing simulations, and cybersecurity education to reduce human-related risks.",
  //     link: "/services/managed-security-awareness",
  //     icon: coreIcon,
  //     hoverIcon: coreHoverIcon,
  //   },
  //   // {
  //   //   title: "Cybertron",
  //   //   description: "Enhance security visibility with intelligent monitoring, threat detection, and centralized cyber risk management capabilities for enterprises.",
  //   //   link: "/services/cybertron",
  //   //   icon: coreIcon,
  //   //   hoverIcon: coreHoverIcon,
  //   // }
  // ],
  "Awareness": [
    {
      title: "Managed Security Awareness",
      description: "Cybertron is Cybertronium's fully-managed security awareness platform — combining adaptive and experiential learning, phishing simulations and behavioural risk scoring to transform your people from your weakest link into your strongest line of defence.",
      link: "/services/managed-security-awareness",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    // {
    //   title: "Cybertron",
    //   description: "Enhance security visibility with intelligent monitoring, threat detection, and centralized cyber risk management capabilities for enterprises.",
    //   link: "/services/cybertron",
    //   icon: coreIcon,
    //   hoverIcon: coreHoverIcon,
    // }
  ],
  "MDR/SOC": [
    {
      title: "SOC as a Service",
      description: "Agentic AI-Driven 24x7 Security Operations. Cybertronium's managed SOC fuses petabyte-scale SIEM, SOAR, UEBA and agentic AI to detect, investigate and respond to threats in real time — without the cost or complexity of building your own.",
      link: "/services/soc-as-a-service",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    {
      title: "SOC for SME",
      description: `Enjoy Essential Cyber Security Solutions Designed Specifically For Your SME.

      It's All About Big Protection For Small Budgets!
      We Tailor Enterprise-Grade Security For Your SME!
      Get The Best Soc Services Even If You Have One Server!`,
      link: "/services/soc-for-sme",
      icon: coreIcon,
      hoverIcon: coreHoverIcon,
    },
    // {
    //   title: "SOC for Enterprise",
    //   description: "Enterprise-grade security operations delivering advanced threat detection, continuous monitoring, and scalable cyber defense capabilities.",
    //   link: "/services/soc-for-enterprise",
    //   icon: coreIcon,
    //   hoverIcon: coreHoverIcon,
    // },
  ],
};

const ServicesCoreSolutionSection = () => {
  const [activeTab, setActiveTab] = useState("Assessments");
  const [navbarVisible, setNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = serviceData[activeTab as keyof typeof serviceData] || [];

  return (
    <section className="py-10 bg-[#F8F8F8] relative">
      {/* Background Layer */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${lineBg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center 60%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4
        }}
      />

      <div className="container mx-auto relative z-10">
        <SectionHeader
          subtitle="Services"
          titlePart2="Core Solutions"
          description="Explore a complete suite of cybersecurity services designed to protect, detect, and respond to modern threats across your organization."
          className="mb-10"
        />

        {/* Tab buttons */}
        {/* Sticky Tab Bar */}
        <TabBar
          tabs={tabs.map(t => ({ id: t, label: t }))}
          activeTab={activeTab}
          onTabChange={(id) => setActiveTab(id as string)}
          navbarVisible={navbarVisible}
        />

        {/* Grid of Cards */}
        <div className={cn(
          "max-w-[1000px] mx-auto grid gap-4",
          cards.length === 1 && "grid-cols-1",
          cards.length === 2 && "grid-cols-1 md:grid-cols-2",
          cards.length >= 3 && (activeTab === "AI Security" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3")
        )}>
          {cards.map((card, idx) => {
            return (
              <div key={idx} className="group relative overflow-hidden bg-white/50 backdrop-blur-sm border border-[#010A09]/10 rounded-md p-2 md:p-6 shadow-sm transition-all duration-500 hover:shadow-xl flex flex-col justify-between h-full bg-white">

                {/* Top Gradient Border on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#CA1C69] to-[#F37A3A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-20 h-full flex flex-col justify-between">
                  <div>
                    <div className="relative w-[60px] h-[60px] mb-5 flex items-center justify-center">
                      {card.hoverIcon ? (
                        <>
                          <card.icon className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
                          <card.hoverIcon className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                        </>
                      ) : (
                        <card.icon className="w-full h-full transition-all duration-300 group-hover:[&_path[fill='#461148']]:fill-white group-hover:[&_path[fill='#C01E6C']]:fill-[#FF8E53] relative z-10" />
                      )}
                    </div>
                    <h3 className="text-[clamp(16px,1.5vw+0.5rem,18px)] font-bold text-[#3B0A33] transition-colors duration-300 mb-3 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-[clamp(11px,1vw+0.4rem,14px)] text-gray-500 transition-colors duration-300 mb-6 leading-relaxed">
                      {card.description}
                    </p>

                    {/* Highlights (Awareness & CTEM) */}
                    {card.highlights && (
                      <ul className="space-y-2 mb-6">
                        {card.highlights.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-[clamp(10px,0.8vw+0.4rem,12px)] text-gray-600">
                            <CircleCheck className="w-4 h-4 text-[#CA1C69] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <Link href={card.link} className="inline-flex items-center text-[clamp(12px,1vw+0.4rem,14px)] text-[#4D124E] hover:text-[#CA1C69] transition-colors tracking-wide font-medium mt-auto pt-4">
                    Learn More <ChevronRight className="w-4 h-4 ml-1 text-[#CA1C69] transform group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCoreSolutionSection;

