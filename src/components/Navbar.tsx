import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon, ChevronRight, Cpu } from "lucide-react";
import { useTheme } from "next-themes";
import Logo from "@/assets/updatedLogo.svg?react";

import vulnHero from "@/assets/services/assessment/vulnerability-hero.webp";
import penHero from "@/assets/services/assessment/pen-testing-hero.webp";
import appHero from "@/assets/services/assessment/app-security-hero.webp";
import redPurpleHero from "@/assets/services/assessment/red-purple-hero.webp";
import firmwareHero from "@/assets/services/assessment/firmware-security-hero.webp";
import compHero from "@/assets/services/assessment/compromise-hero.webp";
import cyberMaturityHero from "@/assets/services/assessment/cyber-security-hero.webp";
import serviceHero from "@/assets/services/serviceHero.webp";
import ctemHero1 from "@assets/CTEM/ctem-hero-1.webp"
import serviceBg from "@/assets/services/servicebg.webp";

import cdrhero from "@assets/services/cloud-security/cloud-detection-response-hero.webp";
import cspmhero from "@assets/services/cloud-security/cspm-hero.webp"
import cscshero from "@assets/services/cloud-security/cscs-hero.webp"
import SDThero from "@assets/services/consulting/sdthero.svg"
import socsmehero from "@assets/services/soc-sme-hero.webp"


import dfirHero from "@/assets/services/consulting/dfirhero.webp";
import grcHero from "@/assets/services/consulting/grchero.webp";
import mtdHero from "@/assets/services/consulting/mtdhero.webp";
import cisoHero from "@/assets/services/consulting/ciso.webp";
import scHero from "@/assets/services/consulting/S&Chero.webp";
import ccsp from "@/assets/training/Cloud Security Proffesional hero.webp";



const serviceImages: Record<string, string> = {
  "/services/vulnerability-assessment": vulnHero,
  "/services/penetration-testing": penHero,
  "/services/app-security-services": appHero,
  "/services/red-purple-teaming": redPurpleHero,
  "/services/firmware-security": firmwareHero,
  "/services/compromise-assessment": compHero,
  "/services/cybersecurity-maturity-assessment": cyberMaturityHero,
  "/services/strategy-consulting": scHero,
  "/services/governance-risk-compliance": grcHero,
  "/services/digital-forensics-incident-response": dfirHero,
  "/services/mobile-threat-defense": mtdHero,
  "/services/ciso-as-a-service": cisoHero,
  "/services/zero-trust-implementation": serviceBg,
  "/ctem": ctemHero1,
  "/services/cloud-detection-response": cdrhero,
  "/services/cloud-security-posture-management": cspmhero,
  "/services/cloud-security-consulting": cscshero,
  "/services/secure-digital-transformation": SDThero,
  "/services/soc-for-sme": socsmehero,
  "/services/soc-as-a-service": socsmehero,
  // "/services/soc-for-enterprise": socenterprisecHero,
  "/services/managed-security-awareness": serviceBg,
  "/services/cybertron": serviceBg,
};

const getServiceImage = (href: string) => serviceImages[href] || serviceHero;

import isoHero from "@/assets/training/iso-hero.webp";
import globalaceHero from "@/assets/training/globalace-hero.webp";
import nistNiceHero from "@/assets/training/nist-nice-hero.webp";
import mitreAttckHero from "@/assets/training/mitre-attak-hero.webp";
import cptHero from "@/assets/training/cpt-hero.webp";
import csocHero from "@/assets/training/CSOC-hero.webp";
import crtpHero from "@/assets/training/CERTIFIED RED TEAM PRACTITIONER (CRTP).webp";
import cctiaHero from "@/assets/training/CERTIFIED CYBER THREAT INTELLIGENCE ANALYST.webp";
import csdHero from "@/assets/training/CERTIFIED SECURE DEVELOPER.webp";
import cyberAwareUserHero from "@/assets/training/CERTIFIED EXPERIENTIAL CYBERSECURITY AWARE USER.webp";
import securityAwareUserHero from "@/assets/training/CERTIFIED SECURITY AWARE USER.webp";
import securityAwareCxoHero from "@/assets/training/CERTIFIED SECURITY AWARE CxO (3).webp";
import trainingHero from "@/assets/training/Placeholder Image.webp";
import SSGHero from "@assets/training/ssg-hero.webp"
import { cn } from "@/lib/utils";


const trainingImages: Record<string, string> = {
  "/trainings/iso-17024": isoHero,
  "/trainings/globalace": globalaceHero,
  "/trainings/nist-nice": nistNiceHero,
  "/trainings/globalace-framework": globalaceHero,
  "/trainings/mitre-attck": mitreAttckHero,
  "/trainings/certified-penetration-tester": cptHero,
  "/trainings/certified-soc-analyst": csocHero,
  "/trainings/certified-red-team-professional": crtpHero,
  "/trainings/certified-cyber-threat-intelligence-analyst": cctiaHero,
  "/trainings/certified-secure-developer": csdHero,
  "/trainings/certified-experiential-cybersecurity-aware-user": cyberAwareUserHero,
  "/trainings/certified-security-aware-user": securityAwareUserHero,
  "/trainings/certified-security-aware-cxo": securityAwareCxoHero,
  "/trainings/skillsfuture-sg": SSGHero,
  "/trainings/certified-cloud-security-professional": ccsp,
};

const getTrainingImage = (href: string) => trainingImages[href] || trainingHero;

const getImage = (href: string, type: string) => type === "Services" ? getServiceImage(href) : getTrainingImage(href);

// Training Menu Icons
import frameworkIcon from "@/assets/menu/training/framework/framework.svg";

// Cybersecurity Trainings
import cptIcon from "@/assets/menu/training/cybersecuritytraining/Certified Penetration Tester.webp";
import csocIcon from "@/assets/menu/training/cybersecuritytraining/Certified SOC Analyst.webp";
import crtpIcon from "@/assets/menu/training/cybersecuritytraining/Certified Red Team Professional.webp";
import cctiaIcon from "@/assets/menu/training/cybersecuritytraining/Certified Cyber Threat Intelligence Analyst.webp";
import ccspIcon from "@/assets/menu/training/cybersecuritytraining/Certified Cloud Security Professional.webp";
import csdIcon from "@/assets/menu/training/cybersecuritytraining/Certified Secure Developer.webp";

// Cybersecurity Awareness Trainings
import awareUserExpIcon from "@/assets/menu/training/Cybersecurity Awareness Trainings/Certified Experiential Cybersecurity.svg";
import awareUserIcon from "@/assets/menu/training/Cybersecurity Awareness Trainings/Certified Security Aware User.svg";
import awareCxoIcon from "@/assets/menu/training/Cybersecurity Awareness Trainings/Certified Security Aware CxO.svg";

// AI Security Trainings
import aiAssocIcon from "@/assets/menu/training/AI Security Trainings/Certified AI Security Associate.svg";
import aiSecopsIcon from "@/assets/menu/training/AI Security Trainings/Certified AI SecOps Professional.svg";
import aiDevsecopsIcon from "@/assets/menu/training/AI Security Trainings/Certified AI DevSecOps Professional.svg";
import aiGrcIcon from "@/assets/menu/training/AI Security Trainings/Certified AI GRC Professional.svg";
import cyberaiIcon from "@/assets/menu/training/AI Security Trainings/Certified CyberAI Professional.svg";
import defenaiIcon from "@/assets/menu/training/AI Security Trainings/Certified DefenAI Professional.svg";
import aiCapstoneIcon from "@/assets/menu/training/AI Security Trainings/AI Security Capstone Project Program.svg";

// AI Security Awareness Trainings
import aiAwarenessIcon from "@/assets/menu/training/AI Security Awareness Trainings/AI Security Awareness Training.svg";
import aiAwarenessLeadershipIcon from "@/assets/menu/training/AI Security Awareness Trainings/AI Security Awareness for Leadership.svg";


// Service Icons
import vulnIcon from "@/assets/menu/service/Assesment/Vulnerability-Assessment.svg";
import penIcon from "@/assets/menu/service/Assesment/Penetration-Testing.svg";
import appSecIcon from "@/assets/menu/service/Assesment/App-Security-Services.svg";
import teamIcon from "@/assets/menu/service/Assesment/Red-and-Purple-Teaming.webp";
import firmwareIcon from "@/assets/menu/service/Assesment/Firmware-Security.svg";
import compIcon from "@/assets/menu/service/Assesment/Compromise-Assessment.svg";
import cmaIcon from "@/assets/menu/service/Assesment/Cybersecurity-Maturity-Assessment.svg";

import ctemIcon from "@/assets/menu/service/Consulting/CTEM-as-a-Service.svg";
import strategyIcon from "@/assets/menu/service/Consulting/Strategy-and-Consulting.svg";
import sdtIcon from "@/assets/menu/service/Consulting/Secure-Digital-Transformation.svg";
import mtdIcon from "@/assets/menu/service/Consulting/Mobile-Threat-Defense.svg";
import zeroTrustIcon from "@/assets/menu/service/Consulting/Zero-Trust-Implementation.svg";
import grcIcon from "@/assets/menu/service/Consulting/Governance-Risk-and-Compliance.svg";
import dfirIcon from "@/assets/menu/service/Consulting/Digital-Forensics-and-Incident-Response.svg";
import cisoIcon from "@/assets/menu/service/Consulting/CISO-as-a-Service.svg";

import cloudDRIcon from "@/assets/menu/service/Cloud-Security/Cloud-Detection-and-Response.svg";
import cloudConIcon from "@/assets/menu/service/Cloud-Security/Cloud-Security-Consulting.svg";
import cloudPostIcon from "@/assets/menu/service/Cloud-Security/Cloud-Security-Posture-Management.svg";

import msaIcon from "@/assets/menu/service/Awarness/Managed-Security-Awareness.svg";

import socServiceIcon from "@/assets/menu/service/MDR-SOC/SOC-as-a-Service.svg";
import socSmeIcon from "@/assets/menu/service/MDR-SOC/SOC-For-SME.svg";

import aiSecIcon from "@/assets/menu/service/AI-Security/ai-security.svg";

const serviceLinks = [
  {
    label: "Assessments", children: [
      { label: "Vulnerability Assessment", description: "Identify and prioritize critical security weaknesses.", href: "/services/vulnerability-assessment", icon: vulnIcon },
      { label: "Penetration Testing", description: "Simulate attacks to uncover vulnerabilities.", href: "/services/penetration-testing", icon: penIcon },
      { label: "App Security Services", description: "Secure applications against evolving cyber threats.", href: "/services/app-security-services", icon: appSecIcon },
      { label: "Red & Purple Teaming", description: "Validate defenses through realistic attack simulations.", href: "/services/red-purple-teaming", icon: teamIcon },
      { label: "Firmware Security", description: "Protect devices from firmware-level threats.", href: "/services/firmware-security", icon: firmwareIcon },
      { label: "Compromise Assessment", description: "Detect hidden threats and compromise indicators.", href: "/services/compromise-assessment", icon: compIcon },
      { label: "Cybersecurity Maturity Assessment", description: "Measure security readiness and resilience.", href: "/services/cybersecurity-maturity-assessment", icon: cmaIcon },
    ]
  },
  {
    label: "Consulting", children: [
      { label: "CTEM as a Service", description: "Continuously identify, prioritize, and reduce exposures.", href: "/ctem", icon: ctemIcon },
      { label: "Strategy & Consulting", description: "Align cybersecurity initiatives with business goals.", href: "/services/strategy-consulting", icon: strategyIcon },
      { label: "Secure Digital Transformation", description: "Enable innovation with secure digital strategies.", href: "/services/secure-digital-transformation", icon: sdtIcon },
      { label: "Mobile Threat Defense", description: "Protect devices from evolving mobile threats.", href: "/services/mobile-threat-defense", icon: mtdIcon },
      { label: "Zero Trust Implementation", description: "Verify continuously, trust nothing by default.", href: "/services/zero-trust-implementation", icon: zeroTrustIcon },
      { label: "Governance, Risk & Compliance", description: "Manage risks and ensure regulatory compliance.", href: "/services/governance-risk-compliance", icon: grcIcon },
      { label: "Digital Forensics & Incident Response", description: "Investigate breaches and accelerate incident recovery.", href: "/services/digital-forensics-incident-response", icon: dfirIcon },
      { label: "CISO as a Service", description: "Expert security leadership without full-time costs.", href: "/services/ciso-as-a-service", icon: cisoIcon },
    ]
  },
  {
    label: "AI Security", children: [
      { label: "AI Security", description: "Protect AI systems from emerging threats.", href: "/services/ai-security", icon: aiSecIcon },
    ]
  },
  {
    label: "Cloud Security", children: [
      { label: "Cloud Detection & Response", description: "Detect and respond to cloud threats.", href: "/services/cloud-detection-response", icon: cloudDRIcon },
      { label: "Cloud Security Consulting", description: "Strengthen cloud security through expert guidance.", href: "/services/cloud-security-consulting", icon: cloudConIcon },
      { label: "Cloud Security Posture Management", description: "Continuously monitor and improve cloud security.", href: "/services/cloud-security-posture-management", icon: cloudPostIcon },
    ]
  },
  {
    label: "MDR / SOC", children: [
      { label: "SOC as a Service", description: "Agentic AI Driven 24/7 monitoring, detection, and threat response.", href: "/services/soc-as-a-service", icon: socServiceIcon },
      { label: "SOC For SME", description: "Enterprise-grade security operations tailored for SMEs.", href: "/services/soc-for-sme", icon: socSmeIcon },
    ]
  },
  {
    label: "Awareness", children: [
      { label: "Managed Security Awareness", description: "Build cyber awareness through continuous training.", href: "/services/managed-security-awareness", icon: msaIcon },
    ]
  },
];

const trainingLinks = [

  {
    label: "Cybersecurity Trainings", children: [
      { label: "Certified Penetration Tester", description: "Hands-on ethical hacking and exploitation.", href: "/trainings/certified-penetration-tester", icon: cptIcon },
      { label: "Certified SOC Analyst", description: "Monitor, detect, and respond threats.", href: "/trainings/certified-soc-analyst", icon: csocIcon },
      { label: "Certified Red Team Professional", description: "Simulate advanced real-world cyber attacks.", href: "/trainings/certified-red-team-professional", icon: crtpIcon },
      { label: "Certified Cyber Threat Intelligence Analyst", description: "Analyze threats and actionable intelligence.", href: "/trainings/certified-cyber-threat-intelligence-analyst", icon: cctiaIcon },
      { label: "Certified Cloud Security Professional", description: "Secure modern cloud environments effectively.", href: "/trainings/certified-cloud-security-professional", icon: ccspIcon },
      { label: "Certified Secure Developer", description: "Build secure applications with confidence.", href: "/trainings/certified-secure-developer", icon: csdIcon },
    ]
  },
  {
    label: "Cybersecurity Awareness Trainings", children: [
      { label: "Certified Experiential Cybersecurity Aware User", description: "Learn cybersecurity through immersive attack simulations.", href: "/trainings/certified-experiential-cybersecurity-aware-user", icon: awareUserExpIcon },
      { label: "Certified Security Aware User", description: "Build essential skills to identify cyber threats.", href: "/trainings/certified-security-aware-user", icon: awareUserIcon },
      { label: "Certified Security Aware CxO", description: "Strengthen executive decision-making for cyber resilience strategies.", href: "/trainings/certified-security-aware-cxo", icon: awareCxoIcon },
    ]
  },
  {
    label: "AI Security Trainings", children: [
      { label: "Certified AI Security Associate", description: "Learn foundational AI security concepts and practices.", href: "https://axiom-prime.ai/certifications/caisa", icon: aiAssocIcon },
      { label: "Certified AI SecOps Professional", description: "Secure AI operations through monitoring and defense.", href: "https://axiom-prime.ai/certifications/caiso", icon: aiSecopsIcon },
      { label: "Certified AI DevSecOps Professional", description: "Integrate AI security across modern development pipelines.", href: "https://axiom-prime.ai/certifications/caidsp", icon: aiDevsecopsIcon },
      { label: "Certified AI GRC Professional", description: "Manage AI governance, risk, and compliance effectively.", href: "https://axiom-prime.ai/certifications/cagrc", icon: aiGrcIcon },
      { label: "Certified CyberAI Professional", description: "Leverage AI to strengthen cybersecurity operations proactively.", href: "https://axiom-prime.ai/certifications/ccaip", icon: cyberaiIcon },
      { label: "Certified DefenAI Professional", description: "Build AI-powered defenses against evolving cyber threats.", href: "https://axiom-prime.ai/certifications/cdaip", icon: defenaiIcon },
      { label: "AI Security Capstone Project Program", description: "Apply AI security skills through practical projects.", href: "https://axiom-prime.ai/capstone", icon: aiCapstoneIcon },
    ]
  },
  {
    label: "AI Security Awareness Trainings", children: [
      { label: "AI Security Awareness Training", description: "Understand AI risks, threats, and safe usage.", href: "https://axiom-prime.ai/awareness", icon: aiAwarenessIcon },
      { label: "AI Security Awareness for Leadership", description: "Enable leaders to govern AI securely.", href: "https://axiom-prime.ai/awareness-leadership", icon: aiAwarenessLeadershipIcon },
    ]
  },
  {
    label: "Framework Mappings", children: [
      { label: "NIST NICE", description: "Cybersecurity workforce skills and roles.", href: "/trainings/nist-nice", icon: frameworkIcon },
      { label: "Global ACE", description: "Internationally recognized certification framework.", href: "/trainings/globalace-framework", icon: frameworkIcon },
      { label: "MITRE ATT&CK", description: "Real-world attacker tactics and techniques.", href: "/trainings/mitre-attck", icon: frameworkIcon },
      { label: "Skills Future SG", description: "Government-supported cybersecurity learning pathways.", href: "/trainings/skillsfuture-sg", icon: frameworkIcon },
    ]
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Trainings", dropdown: trainingLinks, href: "/trainings" },
  { label: "Services", dropdown: serviceLinks, href: "/services" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blogs" },
];

interface NavbarProps {
  alwaysSolid?: boolean;
}

const Navbar = ({ alwaysSolid = false }: NavbarProps = {}) => {
  const [open, setOpen] = useState(false);
  const [activeServiceCategory, setActiveServiceCategory] = useState("Assessments");
  const [activeTrainingCategory, setActiveTrainingCategory] = useState("Cybersecurity Trainings");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch for theme
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);



  const effectivelyScrolled = isScrolled || alwaysSolid;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-2 md:py-3 lg:py-4 ${isVisible ? "translate-y-0" : "-translate-y-full"
        } ${effectivelyScrolled
          ? "bg-gray-800/90 backdrop-blur-md border-b border-border/50 shadow-xl shadow-black/5"
          : "bg-transparent"
        } px-4 md:px-6 lg:px-20`}
    >
      <div className="container mx-auto flex items-center justify-between relative gap-4">
        <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <Logo className="w-[140px] md:w-[150px] lg:w-[180px] h-auto" aria-label="Cybertronium" />
        </a>

        {/* Desktop Nav items (Centered) */}
        <div className="hidden md:flex md:static md:translate-x-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 items-center gap-4 lg:gap-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="lg:relative group">
                <a href={link.href} className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${isScrolled ? "text-gray-100 hover:text-primary" : "text-white hover:text-white/80"
                  }`}>
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-4 h-4 ml-1 inline-block group-hover:rotate-180 group-hover:text-primary transition-all duration-300" />}
                </a>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                    whileHover={{ opacity: 1, y: 0, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 10, x: "-50%" }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full hidden group-hover:block z-50 w-[90vw] lg:w-[85vw] max-w-[1000px]"
                  >
                    {/* Bridge to prevent closing when moving mouse to dropdown */}
                    <div className="h-4 w-full bg-transparent" />

                    {/* Arrow for the dropdown menu */}
                    <div className={cn(
                      "absolute top-2 w-4 h-4 rotate-45 z-0",
                      link.label === "Services" || link.label === "Trainings"
                        ? "bg-white border-t border-l border-gray-100"
                        : "bg-background/95 border-t border-l border-border/50",
                      link.label === "Trainings" ? "left-[37%] -translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2" :
                        link.label === "Services" ? "left-[49%] -translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2" :
                          "left-1/2 -translate-x-1/2"
                    )} />

                    {link.label === "Services" || link.label === "Trainings" ? (() => {
                      const activeCategory = link.label === "Services" ? activeServiceCategory : activeTrainingCategory;
                      const setActiveCategory = link.label === "Services" ? setActiveServiceCategory : setActiveTrainingCategory;

                      return (
                        <div className="relative z-10 bg-white rounded-2xl shadow-2xl flex overflow-hidden w-full max-w-[1100px] min-h-[400px]">
                          {/* Left Sidebar */}
                          <div className={cn(" shrink-0 border-r border-gray-100 p-4 md:p-5 lg:p-6 bg-white relative", link.label === "Trainings" ? "w-[220px] lg:w-[300px]" : "w-[150px] lg:w-[200px]")}>
                            <a href={link.href} className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block hover:underline cursor-pointer">{link.label.toUpperCase()}</a>
                            <div className="flex flex-col gap-3 md:gap-4">
                              {link.dropdown.map((section: any) => {
                                const firstChildHref = section.children?.[0]?.href || "#";
                                const isExternal = firstChildHref.startsWith("http");
                                return (
                                  <a
                                    key={section.label}
                                    href={firstChildHref}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                    onMouseEnter={() => setActiveCategory(section.label)}
                                    className="cursor-pointer py-1.5 md:py-2 block"
                                  >
                                    <span className={`text-sm transition-all ${activeCategory === section.label
                                      ? "text-[#8B2B6D] font-semibold underline"
                                      : "text-[#333333] font-normal hover:text-primary"
                                      }`}>
                                      {section.label}
                                    </span>
                                  </a>
                                );
                              })}
                            </div>
                          </div>

                          {/* Right Content */}
                          <div className="flex-1 bg-white p-4 md:p-5 lg:p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
                              {link.dropdown.find(s => s.label === activeCategory)?.children.map((item: any) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  target={item.href.startsWith("http") ? "_blank" : undefined}
                                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                  className="group flex gap-3 items-start p-2 md:p-2.5 lg:p-3 rounded-xl transition-all hover:bg-gray-200/50"
                                >
                                  {/* Icon Placeholder */}
                                  <div className="shrink-0 w-11 h-11 flex items-center justify-center">
                                    {item.icon ? (
                                      typeof item.icon === 'string' ? (
                                        <img src={item.icon} alt={item.label} className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300" />
                                      ) : (
                                        <item.icon className="w-10 h-10 group-hover:scale-105 transition-transform duration-300" aria-hidden="true" />
                                      )
                                    ) : (
                                      <div className="w-10 h-10 bg-gradient-to-br from-[#E21F55] to-[#C01E6C] rounded-lg shadow-sm flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                        {/* Generic abstract placeholder for now */}
                                        <div className="w-4 h-4 border-[2px] border-white/90 rounded-sm absolute" />
                                        <div className="w-1 h-1 bg-white absolute top-2 right-2 rounded-full" />
                                        <div className="w-1 h-1 bg-white absolute bottom-2 left-2 rounded-full" />
                                      </div>
                                    )}
                                  </div>
                                  <div className="flex flex-col group-hover:text-primary">
                                    <span className="text-sm font-semibold text-[#461148] transition-colors leading-snug mb-1">{item.label}</span>
                                    {item.description && <span className="text-xs text-[#828282] font-light leading-snug mb-1.5 line-clamp-1">{item.description}</span>}
                                    <span className="text-xs flex items-center gap-1 font-medium">
                                      Learn More <span className="group-hover:translate-x-1 transition-transform">
                                        <ChevronRight className="w-3.5 h-3.5" strokeWidth={2} />
                                      </span>
                                    </span>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })() : (
                      <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full overflow-hidden">
                        {link.dropdown.map((section) => (
                          <div key={section.label} className="flex flex-col">
                            <div className=" font-semibold text-sm uppercase tracking-wider text-primary mb-1">{section.label}</div>
                            <div className="flex flex-col gap-1.5">
                              {section.children.map((item) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  className="group/item flex items-center justify-between text-sm font-medium text-[#461148] hover:text-primary p-1 rounded-lg transition-all hover:bg-primary/5"
                                >
                                  <span className="transition-colors">{item.label}</span>
                                  <span className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-primary">
                                    →
                                  </span>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${isScrolled ? "text-gray-100 hover:text-primary" : "text-white hover:text-white/80"
                  }`}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Right side Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            {/* <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-100 hover:text-[#CA1C69] hover:bg-white/10' : 'text-white hover:text-white/80 hover:bg-white/10'}`}
              aria-label="Toggle theme"
            >
              {mounted && theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button> */}

            <a
              href="/contact"
              className="bg-gradient-cta text-primary-foreground px-4 py-2 rounded-full text-xs font-light leading-none tracking-normal hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Request a Demo
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-3">
            {/* <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-100 hover:text-[#CA1C69]' : 'text-white hover:text-white/80'}`}
              aria-label="Toggle theme"
            >
              {mounted && theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button> */}

            <button
              className={`text-sm font-medium transition-colors ${effectivelyScrolled ? "text-gray-100 hover:text-[#CA1C69]" : "text-white hover:text-white/80"
                }`}
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 " />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-y-auto max-h-[calc(100vh-100px)] bg-background border-t border-border/50"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <div key={link.label} className="flex flex-col gap-2 border-b border-border/10 pb-4 mb-2 last:border-0">
                  {link.dropdown ? (
                    <div className="flex flex-col gap-2">
                      <a href={link.href} onClick={() => setOpen(false)} className="text-sm font-bold text-primary uppercase tracking-wider block hover:opacity-80 transition-opacity">
                        {link.label}
                      </a>
                      <div className="flex flex-col gap-4 pl-3 border-l-2 border-primary/20 mt-1">
                        {link.dropdown.map((section) => (
                          <div key={section.label} className="flex flex-col gap-1.5">
                            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">{section.label}</span>
                            <div className="flex flex-col gap-1 mt-1">
                              {section.children.map((item) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  onClick={() => setOpen(false)}
                                  className="text-[14px] py-1.5 text-foreground/80 hover:text-primary hover:translate-x-1 transition-all block relative pl-3 group"
                                >
                                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors"></span>
                                  {item.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-sm font-bold text-foreground hover:text-primary transition-colors uppercase tracking-wider"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="bg-gradient-cta text-primary-foreground px-6 py-3 rounded-full text-base font-medium text-center leading-none tracking-normal hover:opacity-90 transition-opacity mt-4"
              >
                Request a Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav >
  );
};

export default Navbar;
