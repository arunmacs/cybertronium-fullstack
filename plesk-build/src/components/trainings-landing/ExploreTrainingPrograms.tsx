"use client";
import { useState, useEffect, useRef } from "react";
import lineBg from "@/assets/services/Group.svg";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TabBar } from "@/components/ui/TabBar";
import TrainingCard from "@/components/ui/TrainingCard";

interface ProgramCard {
  title: string;
  description: string;
  link: string;
  target?: string;
  tags: string[];
}

interface TabData {
  label: string;
  cards: ProgramCard[];
}

const tabs: TabData[] = [
  {
    label: "Cyber Security Trainings",
    cards: [
      {
        title: "Certified Penetration Tester",
        description: "Learn to identify vulnerabilities, perform penetration testing, and simulate real-world cyber attacks with hands-on ethical hacking training built for modern security professionals.",
        link: "/trainings/certified-penetration-tester",
        tags: ["Ethical hackers", "Security Analysts"],
      },
      {
        title: "Certified Security Operations Center (SOC) Analyst",
        description: "Master SIEM, incident response, and threat hunting in modern SOC environments.",
        link: "/trainings/certified-soc-analyst",
        tags: ["SOC analysts", "Incident Responders"],
      },
      {
        title: "Certified Red Team Professional",
        description: "Advanced penetration testing, red teaming, and vulnerability assessment techniques.",
        link: "/trainings/certified-red-team-professional",
        tags: ["Red Team Operators", "Advanced Penetration Testers"],
      },
      {
        title: "Certified Cyber Threat Intelligence Analyst",
        description: "Learn threat intelligence fundamentals and build defense strategies using MISP and global cyber threat intelligence feeds.",
        link: "/trainings/certified-cyber-threat-intelligence-analyst",
        tags: ["Threat Analysts", "SOC teams"],
      },
      {
        title: "Certified Cloud Security Professional",
        description: "Learn secure coding practices and build safer applications across modern development environments.",
        link: "/trainings/certified-cloud-security-professional",
        tags: ["Cloud Engineers", "Security Architects"],
      },
      {
        title: "Certified Secure Developer",
        description: "Learn secure coding practices and build safer applications across modern development environments.",
        link: "/trainings/certified-secure-developer",
        tags: ["Software Developers", "DevOps Engineers"],
      },
    ],
  },
  {
    label: "Cyber Security Awareness Trainings",
    cards: [
      {
        title: "Certified Experiential Cybersecurity Aware User",
        description: "Experience real-world cybersecurity scenarios and develop practical awareness skills against evolving digital threats.",
        link: "/trainings/certified-experiential-cybersecurity-aware-user",
        tags: ["Employees", "Non-technical users"],
      },
      {
        title: "Certified Security Aware User",
        description: "Learn essential cybersecurity practices to recognize threats and protect personal and organizational information.",
        link: "/trainings/certified-security-aware-user",
        tags: ["Corporate employees", "Office staff"],
      },
      {
        title: "Certified Security Aware CxO",
        description: "Gain cybersecurity awareness and strategic decision-making skills for leadership and business risk management.",
        link: "/trainings/certified-security-aware-cxo",
        tags: ["Executives", "Board members"],
      },
    ],
  },
  {
    label: "AI Security Trainings",
    cards: [
      {
        title: "Certified AI Security Associate",
        description: "Foundational certification covering AI security principles, threat models, and the OWASP LLM Top 10.",
        link: "https://axiom-prime.ai/certifications/caisa",
        target: "_blank",
        tags: ["Security Analysts", "IT Professionals", "Developers", "Students"],
      },
      {
        title: "Certified AI SecOps Professional",
        description: "Leverage AI within the Security Operations Center (SOC) to accelerate threat detection, enable automated incident response, and enhance intelligent threat hunting.",
        link: "https://axiom-prime.ai/certifications/caiso",
        target: "_blank",
        tags: ["SOC Managers", "SecOps Engineers", "SIEM/SOAR Specialists"],
      },
      {
        title: "Certified AI DevSecOps Professional",
        description: "Integrate AI across the DevSecOps lifecycle — from AI threat modeling and secure SDLC to defending LLM applications against AI threats.",
        link: "https://axiom-prime.ai/certifications/caidsp",
        target: "_blank",
        tags: ["DevOps Engineers", "DevSecOps Engineers", "Cloud Engineers"],
      },
      {
        title: "Certified AI GRC Professional",
        description: "Governance, risk and compliance for AI — NIST AI RMF, EU AI Act, ISO 42001, and audit methodology.",
        link: "https://axiom-prime.ai/certifications/cagrc",
        target: "_blank",
        tags: ["GRC Professionals", "Risk & Compliance Officers", "Privacy & Legal Teams", "Auditors"],
      },
      {
        title: "Certified CyberAI Professional",
        description: "Build and operationalize AI-driven defenses to proactively combat evolving cyber threats. Leverage AI to strengthen threat detection, intelligence, and incident response.",
        link: "https://axiom-prime.ai/certifications/ccaip",
        target: "_blank",
        tags: ["SOC Analysts", "Threat Hunters", "Incident Responders"],
      },
      {
        title: "Certified DefenAI Professional",
        description: "Defensive AI security - secure AI models, data, hardening LLMs, runtime guardrails, and infrastructure using real-world attack simulations and proven defense strategies.",
        link: "https://axiom-prime.ai/certifications/cdaip",
        target: "_blank",
        tags: ["AI/ML Engineers", "Security Engineers", "Red Teamers"],
      },
      {
        title: "AI Security Capstone Project Program",
        description: "A 12-week applied program where teams secure a production-grade AI system end-to-end, mentored by Axiom Prime experts.",
        link: "https://axiom-prime.ai/capstone",
        target: "_blank",
        tags: [],
      },
    ],
  },
  {
    label: "AI Security Awareness Trainings",
    cards: [
      {
        title: "AI Security Awareness Training",
        description: "This program focuses on how AI systems can be attacked, recognizing real-world risks, and applying simple, effective security practices. \n General AI Enthusiasts / Public Users.",
        link: "https://axiom-prime.ai/awareness",
        target: "_blank",
        tags: ["Business & Non-Technical Users", "Developers & Technical Teams", "Cybersecurity & IT Teams", "Students", "Risk, Compliance & Legal Teams", "Students & Academia", "AI Enthusiasts, Public Users"],
      },
      {
        title: "AI Security Awareness for Leadership",
        description: "A focused executive briefing for CxOs, Directors, and Managers. Translates AI risk, regulation, and governance into board-ready decisions and accountability.",
        link: "https://axiom-prime.ai/awareness-leadership",
        target: "_blank",
        tags: ["CxO", "Directors", "Managers"],
      }
    ],
  },
];

const ExploreTrainingPrograms = () => {
  const [activeTab, setActiveTab] = useState(0);

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

  return (
    <section className="py-6 lg:py-10 bg-[#F8F8F8] relative">
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

      <div className="container mx-auto md:px-6 lg:px-20 max-w-[1200px] relative z-10">
        <SectionHeader
          subtitle="Learning Paths"
          titlePart2="Explore Training Programs"
          description="Choose your specialization and advance through structured learning paths designed for every skill level."
          className="mb-2 lg:mb-4"
        />

        {/* Sticky Tab Bar */}
        <TabBar
          tabs={tabs.map((tab, idx) => ({ id: idx, label: tab.label }))}
          activeTab={activeTab}
          onTabChange={(id) => setActiveTab(id as number)}
          navbarVisible={navbarVisible}
          className="bg-transparent"
        />

        {/* Cards Grid */}
        <div className={cn("grid gap-6", tabs?.[activeTab]?.cards.length === 1 && "grid-cols-1", tabs?.[activeTab]?.cards.length === 2 && "grid-cols-1 md:grid-cols-2", tabs?.[activeTab]?.cards.length >= 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3")}>
          {tabs[activeTab].cards.map((card, idx) => (
            <TrainingCard
              key={`${activeTab}-${idx}`}
              title={card.title}
              description={card.description}
              link={card.link}
              target={card.target}
              tags={card.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreTrainingPrograms;
