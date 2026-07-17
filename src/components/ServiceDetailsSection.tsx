import { useState, useEffect, useRef, memo } from "react";
import Link from "next/link";;
import { Check, CheckCircle2, FileText, ChevronRight, X } from "lucide-react";
import { TabBar } from "@/components/ui/TabBar";
import IconWhiteArrow from "@assets/icons/Icon Arrow.png"
import IconDarkArrow from "@assets/icons/Icon Arrow (1).png"
import { SectionHeader } from "./ui/SectionHeader";

const services = [
  {
    id: "mss",
    subtitle: "MSS",
    title: "Managed Security Services",
    tagline: "Subscription-based security program — designed for continuous protection & monitoring",
    bundles: [
      {
        name: "Essentials Cyber Protection",
        target: "SMB/Small Mid-Market",
        features: ["External Attack Surface Monitoring", "Annual Pentest + Dashboard", "Basic Compliance Gap Assessment", "Awareness Training", "Incident Response (IR) Retainers"],
        variant: "light",
      },
      {
        name: "Advanced Protection",
        target: "Growing Mid-Market",
        features: ["Continuous Vulnerability Assessment", "Quarterly Pentest", "MDR / SOC Monitoring", "Compliance Support", "Security Roadmap Advisory"],
        variant: "dark",
      },
      {
        name: "Cyber Resilience Programme",
        target: "Large Mid-Market",
        features: ["Virtual CISO (vCISO)", "Continuous Pentest", "MDR / SOC + Threat Hunting", "Crisis Simulation", "Vendor Risk Management"],
        variant: "dark",
      },
    ],
  },
  {
    id: "ai",
    subtitle: "AI SEC",
    title: "AI Security & Assurance",
    tagline: "Protecting AI systems from risks unique to machine learning — governance, red team, and continuous monitoring",
    bundles: [
      {
        name: "Basic AI Security",
        target: "SMEs / Early-Stage AI",
        features: ["AI Security Assessment (Surface Scan)", "AI Governance & Compliance Lite", "Governance Playbooks + Policy Templates", "AI SOC Monitoring — Basic Alerts", "AI Log Monitoring"],
        variant: "light",
      },
      {
        name: "Standard AI Security",
        target: "Mid-sized Firms with Multiple AI Systems",
        features: ["Full AI Security Assessment", "AI Governance & Compliance (Full)", "AI SOC Monitoring (Advanced + Threat Hunting)", "AI Analytics Integration", "Quarterly AI Red Team Snapshot"],
        variant: "dark",
      },
      {
        name: "Enterprise AI Resilience",
        target: "Large Enterprise, Regulated Sectors",
        features: ["All Standard Services", "Continuous AI Red Teaming", "Executive Workshops & Crisis Tabletop", "Dedicated AI Security Champion", "Quarterly Reporting & Compliance Attestation"],
        variant: "dark",
      },
    ],
  },
  {
    id: "crisis",
    subtitle: "CRISIS",
    title: "Cyber Resilience & Crisis Simulation",
    tagline: "Ransomware simulation, executive tabletop, crisis communications & business continuity testing",
    bundles: [
      {
        name: "Essential Resilience",
        target: "SMEs & Mid-Size Businesses",
        features: ["Cyber Resilience & Crisis Simulation (1 Session)", "Ransomware Simulation Exercise", "Crisis Communication Testing", "Business Continuity Cyber Testing"],
        variant: "light",
      },
      {
        name: "BCP & Crisis Readiness",
        target: "Medium Enterprises",
        features: ["Cyber Resilience Simulation (In-Depth)", "Ransomware Simulation (Extended)", "Executive Tabletop Program", "Crisis Communications Testing", "Business Continuity Cyber Testing"],
        variant: "dark",
      },
      {
        name: "Enterprise Cyber Command",
        target: "Large Orgs, Regulated Industries",
        features: ["Full Resilience & Crisis Simulation Program", "Advanced Ransomware Simulation", "Multiple Executive Tabletop Programs", "Crisis Comms Testing + Scenario Validation", "Extensive BCP Testing + Executive Dashboards"],
        variant: "dark",
      },
    ],
  },
  {
    id: "ctem",
    subtitle: "CTEM",
    title: "Continuous Threat Exposure Management",
    tagline: "Attack Surface Mgmt · Vulnerability Management · Exposure Analytics · CSPM · BAS · Threat Intelligence",
    bundles: [
      {
        name: "CTEM Essential",
        target: "Growing Mid-Market",
        features: ["External Attack Surface Monitoring", "Continuous Vulnerability Assessment", "Cloud Security Posture (CSPM) Lite", "Monthly Exposure Risk Report", "Threat Intelligence Feed (Curated)", "Quarterly Breach Simulation", "Remediation Prioritisation Dashboard"],
        variant: "light",
      },
      {
        name: "CTEM Advanced",
        target: "Mid-Market to Lower Enterprise",
        features: ["All Essential Features", "Full CSPM + IaaS/PaaS Coverage", "BAS — Monthly Automated Simulations", "Threat Intel with Dark Web Monitoring", "Exposure Analytics — Executive Dashboard", "Quarterly Red Team Snapshot", "API & SIEM Integration"],
        variant: "dark",
      },
      {
        name: "CTEM Enterprise",
        target: "Large Enterprise & Regulated",
        features: ["All Advanced Features", "Continuous Red Team Operations", "OT/ICS & Supply Chain Exposure Mgmt", "Regulatory Mapping (SEBI/RBI/CERT-In)", "Board-Level Cyber Risk Reporting", "24×7 CTEM Command Centre", "vCISO Integration & Strategic Advisory", "Dedicated CTEM Analyst"],
        variant: "dark",
      },
    ],
  },
];

const ServiceDetailsSection = () => {
  const [activeTab, setActiveTab] = useState("mss");
  const activeService = services.find((s) => s.id === activeTab)!;

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
    <section id="bundles" className="relative py-8 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <SectionHeader
          subtitle="Detailed Bundles"
          titlePart2="Service Tiers & Bundles"
          description="Choose the right cybersecurity Security programme for your organisation's size and maturity."
          className="mb-6 text-center"
        />

        {/* Tab buttons */}
        <TabBar
          tabs={services.map(s => ({ id: s.id, label: s.subtitle }))}
          activeTab={activeTab}
          onTabChange={(id) => setActiveTab(id as string)}
          navbarVisible={navbarVisible}
          className="bg-white/95"
        />

        <div className="text-center mb-6">
          <h3 className="text-[clamp(14px,1vw+0.4rem,16px)] font-bold text-[#4D124E] mb-0.5">{activeService.title}</h3>
          <p className="text-gray-500 text-[clamp(10px,1vw+0.4rem,12px)] max-w-lg mx-auto">{activeService.tagline}</p>
        </div>

        {/* Main Content Box */}
        <div className="max-w-5xl mx-auto bg-[#461148] rounded-[20px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">

          {/* Essentials Column (Dark) */}
          <div className="lg:w-1/3 p-5 md:p-7 flex flex-col text-white">
            <div className="flex items-start justify-between mb-3">
              <div className="shrink-0 w-12 h-12">
                <img src={IconWhiteArrow} alt="Arrow" loading="lazy" decoding="async" />
              </div>
              <div className="flex-1 ml-3">
                <h4 className="text-[16px] font-bold leading-tight">
                  {activeService.bundles[0].name}
                </h4>
                <p className="text-[clamp(10px,1vw+0.4rem,12px)] text-white/60 mt-1">
                  {activeService.bundles[0].target}
                </p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/50 my-3" />

            <ul className="flex-grow space-y-4 my-4 mx-2">
              {activeService.bundles[0].features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <div className="shrink-0 w-3.5 h-3.5 rounded-full bg-orange-400/20 flex items-center justify-center mt-0.5">
                    <Check className="w-2 h-2 text-orange-400" strokeWidth={5} />
                  </div>
                  <span className="text-[clamp(10px,1vw+0.4rem,12px)] font-medium text-white/80 leading-snug">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-block w-fit py-2.5 px-8 rounded-full border border-[#CA1C69] bg-transparent text-white font-bold text-[10px] text-center transition-all hover:bg-[#CA1C69]/10 mt-2"
            >
              Get a Quote
            </Link>
          </div>

          {/* Light Column (Advanced + Resilience) */}
          <div className="lg:w-2/3 bg-white m-1.5 rounded-[16px] p-5 md:p-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeService.bundles.slice(1).map((bundle) => (
              <div key={bundle.name} className="flex flex-col h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div className="shrink-0 w-10 h-10 ">
                    <img src={IconDarkArrow} alt="Arrow" loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#3B0A33] leading-tight">
                      {bundle.name}
                    </h4>
                    <p className="text-[clamp(10px,1vw+0.4rem,12px)] font-medium text-gray-500 mt-1">
                      {bundle.target}
                    </p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray-400 my-2" />

                <ul className="flex-grow space-y-4 my-4 mx-2">
                  {bundle.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <div className="shrink-0 w-3.5 h-3.5 rounded-full bg-[#CA1C69]/10 flex items-center justify-center mt-0.5">
                        <Check className="w-2 h-2 text-[#CA1C69]" strokeWidth={5} />
                      </div>
                      <span className="text-[clamp(10px,1vw+0.4rem,12px)] font-medium text-gray-600 leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-block w-fit py-2.5 px-8 rounded-full text-white font-bold text-[10px] text-center transition-opacity hover:opacity-90 shadow-lg shadow-[#8B1D56]/20 mt-2"
                  style={{ background: 'linear-gradient(101.67deg, #511F5E 0%, #C01E6C 100%)' }}
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ServiceDetailsSection);
