"use client";
import ServiceDetailNew from "@/components/ServiceDetailNew";
import PageHero from "@/components/PageHero";
import { servicesDetailNewData } from "@/data/servicesDetailNewData";
import Link from "next/link";;
// Icons for the "Why AI Security can't wait" section
import IconAdversarial from "@assets/ai security/mingcute--ai-line 1.svg?react";
import IconBug from "@assets/ai security/solar--bug-line-duotone (1) 1.svg?react";
import IconWarning from "@assets/ai security/mingcute--file-warning-line 1.svg?react";
import IconDatabase from "@assets/ai security/Database.svg?react";
import IconFolderMinus from "@assets/ai security/Folder minus.svg?react";
import IconFileText from "@assets/ai security/File text.svg?react";
import Checkmark from "@assets/CTEM/check-mark.svg?react";
import IconShieldCheck from "@assets/ai security/solar--shield-check-outline 1.svg?react";
import IconShield from "@assets/ai security/Shield.svg?react";
import IconFilePlus from "@assets/ai security/File plus.svg?react";
import ImageGovernance from "@assets/ai security/Frame 2147226777.webp";
import { ZoomIn, CloudUpload, Target, Shield, BadgeCheck } from "lucide-react";
import LifeArrowDown from "@/assets/services/awareness/Arrows.svg";
import LifeArrowUp from "@/assets/services/awareness/Arrows d.svg";
import { SectionHeader } from "@/components/ui/SectionHeader";

const DonutChart = ({ percentage, label, isGradient = false }: { percentage: number, label: string, isGradient?: boolean }) => {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24 lg:w-28 lg:h-28">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {isGradient && (
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#CA1C69" />
                <stop offset="100%" stopColor="#F37A3A" />
              </linearGradient>
            </defs>
          )}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#F9EBEF"
            strokeWidth="10"
            fill="transparent"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke={isGradient ? "url(#chartGradient)" : "#E8789A"}
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[16px] md:text-[20px] font-bold text-[#2D0A31] tracking-tight">{percentage}%</span>
        </div>
      </div>
      <span className="text-[10px] md:text-[11px] text-gray-500 text-center max-w-[80px] leading-snug">{label}</span>
    </div>
  );
};

const AISecurityPage = () => {
  const data = servicesDetailNewData["ai-security"];
  const stats = data.pageHero.stats;

  const customRightContent = (
    <div className="w-full h-full flex items-center justify-center p-2 sm:p-4">
      <div
        className="relative w-full max-w-[550px] rounded-[16px] shadow-2xl p-6 md:p-10 overflow-hidden"
        style={{
          background: 'linear-gradient(142.13deg, rgba(254, 248, 255, 0.168) 1.8%, rgba(254, 248, 255, 0) 99.75%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        {/* Gradient Border via Masking to support border-radius */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[16px] z-0"
          style={{
            padding: '1px',
            background: 'radial-gradient(78.99% 95.57% at 17.38% 2.08%, #FF9A3C 0%, #461148 100%)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        {/* The Grid */}
        <div className="relative grid grid-cols-2 gap-y-8 md:gap-y-12 gap-x-6 md:gap-x-8">

          {/* Internal Crosshair Borders */}
          {/* Vertical line */}
          <div className="absolute left-1/2 top-2 bottom-2 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2" />
          {/* Horizontal line */}
          <div className="absolute top-1/2 left-2 right-2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2" />

          {/* Stat 1 */}
          <div className="flex flex-col gap-1 md:gap-2 z-10 relative">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">77%</span>
            <div className="text-[11px] sm:text-xs lg:text-sm font-light text-white/90 leading-relaxed">
              Of enterprises run GenAI without an AI security program
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col gap-1 md:gap-2 z-10 relative">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">10&times;</span>
            <div className="text-[11px] sm:text-xs lg:text-sm font-light text-white/90 leading-relaxed">
              Faster adversarial AI attack iteration vs human red teams
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col gap-1 md:gap-2 z-10 relative">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">$4.8M</span>
            <div className="text-[11px] sm:text-xs lg:text-sm font-light text-white/90 leading-relaxed">
              Average cost of an AI/ML-related data breach
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col gap-1 md:gap-2 z-10 relative">
            <span className="text-xl sm:text-2xl md:text-[32px] font-bold text-white tracking-tight pt-1">ISO 42001</span>
            <div className="text-[11px] sm:text-xs lg:text-sm font-light text-white/90 leading-relaxed">
              First global AI management system standard
            </div>
          </div>

        </div>
      </div>
    </div>
  );

  const customHero = (
    <PageHero
      titlePart1={data.pageHero.titlePart1}
      titlePart2={data.pageHero.titlePart2}
      description={data.pageHero.description}
      image={data.pageHero.image}
      badge={data.pageHero.badge}
      showStats={false}
      rightContent={customRightContent}
      gridClassName="lg:grid-cols-[1.1fr_1fr] xl:grid-cols-2"
    >
      <div className="flex flex-wrap items-center gap-3 mt-6 mb-8">
        {["OWASP LLM Top 10", "MITRE ATLAS", "ISO/IEC 42001", "EU AI Act"].map((badge, idx) => (
          <div
            key={idx}
            className="relative inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md"
          >
            <div
              className="absolute inset-0 pointer-events-none rounded-full"
              style={{
                padding: '1px',
                background: 'linear-gradient(90deg, #F37A3A 0%, #CA1C69 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            <span className="relative z-10 text-xs font-medium text-white/90">
              {badge}
            </span>
          </div>
        ))}
      </div>
      <Link href="/contact" className="inline-block bg-gradient-cta hover:opacity-90 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-[#CA1C69]/20">
        Book an AI Risk Briefing
      </Link>
    </PageHero>
  );

  const whyWaitSection = (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader
          subtitle="The Age of Adversarial AI"
          titlePart2="Why AI Security can't wait"
          description="Attackers now ship autonomous agent swarms that probe, exploit and exfiltrate at machine speed. Every prompt, model and agent in your stack is a new attack surface — and most defenders haven't even inventoried theirs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Adversarial AI",
              description: "Attackers weaponise LLMs to craft polymorphic malware, evade detection and generate hyper-personalised social engineering at scale.",
              Icon: IconAdversarial
            },
            {
              title: "AI Predator Swarms",
              description: "Autonomous agent swarms probe, exploit and pivot across your AI surface 24x7 \u2014 no coffee breaks, no fatigue, no mercy.",
              Icon: IconAdversarial
            },
            {
              title: "Prompt Injection & Jailbreaks",
              description: "Indirect prompt injection, jailbreaks and tool-misuse hijack your AI agents into leaking secrets or executing attacker intent.",
              Icon: IconFileText
            },
            {
              title: "Model Supply Chain Risk",
              description: "Poisoned weights, trojaned fine-tunes and compromised MCP / plugin ecosystems silently corrupt the models you depend on.",
              Icon: IconDatabase
            },
            {
              title: "Data Leakage via LLMs",
              description: "Sensitive PII, IP and credentials bleed out through prompts, embeddings, RAG indexes and overly-permissive agent actions.",
              Icon: IconFolderMinus
            },
            {
              title: "Regulatory Exposure",
              description: "EU AI Act, NIST AI RMF, ISO 42001, MAS FEAT, RBI and SEBI mandates are converging \u2014 unprepared enterprises face fines and bans.",
              Icon: IconWarning
            }
          ].map((card, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl shadow-sm hover:shadow-md transition-shadow group h-full bg-[#FFFFFFCC] backdrop-blur-[4px] p-2 md:p-4 text-center"
            >
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent"
                style={{
                  background: 'radial-gradient(78.99% 95.57% at 17.38% 2.08%, #FF9A3C 0%, #461148 100%) border-box',
                  WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'destination-out',
                  maskComposite: 'exclude'
                }}
              />
              <div className="relative z-10">
                <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center text-[#F37A3A]">
                  <card.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-[#3B194E] !text-fluid-lg font-bold mb-2">{card.title}</h3>
                <p className="text-gray-500 !text-fluid-sm leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const byTheNumbersSection = (
    <section className="py-10 bg-gray-50/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader
          subtitle="By the Numbers"
          titlePart2="Traditional AppSec &ne; AI Security"
          description="Adversaries move at machine speed. Most security operations still rely on human-speed workflows, fragmented tools and pay-per-gigabyte SIEMs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Card 1 */}
          <div className="relative rounded-2xl bg-white border border-gray-100 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] p-4 md:p-6">
            <div className="flex flex-col items-center mb-6">
              <div className="inline-flex flex-col items-stretch">
                <h4 className="!text-fluid-sm font-bold text-[#2D0A31] mb-2 text-center px-1">
                  Coverage of AI-specific threats
                </h4>
                <div className="h-0.5 w-full bg-gradient-to-r from-[#CA1C69] to-[#F37A3A] rounded-full" />
              </div>
            </div>
            <div className="flex items-start justify-center gap-6 md:gap-8 flex-wrap">
              <DonutChart percentage={95} label="Cybertronium AI Security" isGradient={true} />
              <DonutChart percentage={22} label="Traditional AppSec / WAF" isGradient={true} />
              <DonutChart percentage={38} label="Generic LLM guardrails" isGradient={true} />
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl bg-white border border-gray-100 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] p-4 md:p-6">
            <div className="flex flex-col items-center mb-6">
              <div className="inline-flex flex-col items-stretch">
                <h4 className="!text-fluid-sm font-bold text-[#2D0A31] mb-2 text-center px-1">
                  Time-to-exploit by attacker type
                </h4>
                <div className="h-0.5 w-full bg-gradient-to-r from-[#CA1C69] to-[#F37A3A] rounded-full" />
              </div>
            </div>
            <div className="flex items-start justify-center gap-6 md:gap-8 flex-wrap">
              <DonutChart percentage={100} label="Autonomous AI swarms" isGradient={true} />
              <DonutChart percentage={35} label="Skilled human red team" isGradient={true} />
              <DonutChart percentage={18} label="Opportunistic attackers" isGradient={true} />
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="!text-fluid-xs text-gray-400">
            Sources: OWASP LLM Top 10 (2025), MITRE ATLAS case studies, Gartner AI TRiSM Hype Cycle, IBM Cost of a Data Breach
          </p>
        </div>
      </div>
    </section>
  );

  const governanceSection = (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center mb-10">
          <div className="text-left mb-6 lg:mb-0">
            <SectionHeader
              align="left"
              subtitle="Cybertronium AI Security Services"
              titlePart1="From offensive testing"
              titlePart2="to AI governance"
              description="Four integrated services that secure the full AI lifecycle — model, agent, data and management system."
            />
          </div>
          <div>
            <img src={ImageGovernance} alt="AI Governance" className="w-full h-auto rounded-2xl shadow-2xl object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              number: "01",
              smallTitle: "Offensive",
              title: "LLM, AI Models & AI Agents Penetration Testing",
              description: "Deep, manual penetration testing of your LLM apps, custom models, RAG pipelines and agentic systems \u2014 aligned to OWASP LLM Top 10, MITRE ATLAS and NIST AI RMF.",
              IconBg: IconBug,
              bullets: [
                "Prompt injection (direct & indirect), jailbreaks, system prompt extraction",
                "Tool / function-call abuse and MCP plugin exploitation",
                "Training data extraction, membership inference, model inversion",
                "Insecure output handling, SSRF, RCE via AI-generated code",
                "Agent goal hijacking, recursive loop abuse and resource exhaustion"
              ]
            },
            {
              number: "02",
              smallTitle: "Adversarial",
              title: "AI Red Team",
              description: "Continuous, scenario-driven adversarial emulation against your AI surface \u2014 simulating real-world threat actors and autonomous attacker swarms.",
              IconBg: IconShieldCheck,
              bullets: [
                "Adversarial ML: evasion, poisoning, backdoor and transfer attacks",
                "Multi-turn jailbreak chains and policy-bypass campaigns",
                "Autonomous red-team agents that learn and adapt across engagements",
                "Bias, toxicity, hallucination and misuse stress-testing",
                "Executive reporting mapped to MITRE ATLAS tactics & techniques"
              ]
            },
            {
              number: "03",
              smallTitle: "Assurance",
              title: "AI Assurance & Governance",
              description: "End-to-end governance, risk and assurance programmes that make your AI defensible to boards, regulators and customers.",
              IconBg: IconShield,
              bullets: [
                "AI inventory, risk classification and impact assessments",
                "Model cards, system cards, data sheets and lineage tracking",
                "Policy, RACI and human-in-the-loop control design",
                "Bias, fairness, explainability and robustness evaluation",
                "Third-party model & vendor AI risk due diligence"
              ]
            },
            {
              number: "04",
              smallTitle: "Compliance",
              title: "AI Management System (ISO/IEC 42001) Consulting",
              description: "Implement and certify the world's first AI management system standard \u2014 aligned with EU AI Act, NIST AI RMF, ISO 23894 and sector regulators.",
              IconBg: IconFilePlus,
              bullets: [
                "Gap assessment against ISO/IEC 42001 controls and Annex A",
                "AIMS scope, context, leadership and risk methodology design",
                "Documented policies, procedures and Statement of Applicability",
                "Internal audit, management review and certification readiness",
                "Integration with existing ISO 27001 / 27701 / 9001 systems"
              ]
            }
          ].map((card, idx) => (
            <div key={idx} className="border border-[#00000026] shadow-[0px_0px_8px_0px_#0000001F] bg-[#FFFFFF80] backdrop-blur-[20px] rounded-[10px] p-4 md:p-6 relative overflow-hidden group hover:border-[#CA1C69]/30 transition-colors">
              <card.IconBg className="absolute -top-6 right-2 w-52 h-52 pointer-events-none" />
              <div className="relative z-10">
                <div
                  className="relative inline-flex items-center justify-center w-14 h-14 rounded-[8px] mb-4"
                  style={{
                    background: 'linear-gradient(270.09deg, rgba(243, 122, 58, 0.1) 16.02%, rgba(202, 28, 105, 0.1) 91.5%)',
                  }}
                >
                  <div
                    className="absolute inset-0 pointer-events-none rounded-[8px]"
                    style={{
                      padding: '1.79px',
                      background: 'linear-gradient(269.25deg, rgba(243, 122, 58, 0.5) 0.98%, rgba(202, 28, 105, 0.5) 99.35%)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <span className="relative z-10 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#CA1C69] to-[#F37A3A]">
                    {card.number}
                  </span>
                </div>
                <div className="text-primary !text-fluid-xs tracking-widest font-semibold mb-3 capitalize">{card.smallTitle}</div>
                <h3 className="text-[#3B194E] !text-fluid-xl font-bold mb-4 pr-12 leading-tight max-w-[85%]">{card.title}</h3>
                <p className="text-gray-500 !text-fluid-sm mb-6 leading-relaxed pr-6">{card.description}</p>
                <ul className="space-y-4">
                  {card.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <Checkmark className="w-4 h-4 text-[#F37A3A]" />
                      </div>
                      <span className="text-gray-600 !text-fluid-xs leading-snug tracking-tight">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const lifecycleSection = (
    <section className="py-10 bg-white overflow-hidden relative">
      <div className="container mx-auto relative z-10 text-center max-w-6xl">

        {/* Header */}
        <SectionHeader
          subtitle="Our Approach"
          titlePart2="The AI Security lifecycle"
          className="mb-20"
        />

        {/* Timeline Wrapper */}
        <div className="relative mt-12 mb-20">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-y-12 gap-x-6 relative z-10">
            {[
              {
                icon: ZoomIn,
                title: "Discover",
                description: "Inventory every model, agent, dataset, prompt and plugin across your estate.",
                isHighlighted: false
              },
              {
                icon: CloudUpload,
                title: "Assess",
                description: "Pentest, red-team and risk-assess against OWASP LLM, MITRE ATLAS and ISO 42001.",
                isHighlighted: true
              },
              {
                icon: Target,
                title: "Govern",
                description: "Stand up the AI Management System: policies, controls, roles and evidence.",
                isHighlighted: false
              },
              {
                icon: Shield,
                title: "Defend",
                description: "Deploy AI-SOC monitoring, guardrails and adaptive response playbooks.",
                isHighlighted: false
              },
              {
                icon: BadgeCheck,
                title: "Improve",
                description: "Continuous adversarial testing, metrics and board-level assurance reporting.",
                isHighlighted: false
              }
            ].map((step, idx, arr) => (
              <div key={idx} className={`flex flex-col items-center text-center group relative ${step.isHighlighted ? '-translate-x-3' : ''} ${idx === 2 ? '-translate-x-1' : ''}`}>

                {/* Connecting Arrow (hidden on mobile) */}
                {idx < arr.length - 1 && (
                  <div
                    className={`hidden lg:block absolute pointer-events-none z-0
                      left-[calc(50%+1.75rem)] w-[calc(100%-3.5rem)]
                      ${idx === 1 ? 'translate-x-5 top-10' : (idx === 2 ? 'translate-x-4 top-1' : (idx === 3 ? 'translate-x-3 top-9' : (idx % 2 === 0 ? 'top-1' : 'top-8')))}
                    `}
                  >
                    <img
                      src={idx % 2 === 0 ? LifeArrowUp : LifeArrowDown}
                      alt="Arrow connector"
                      className="w-full h-auto opacity-80 scale-[1.35]"
                    />
                  </div>
                )}

                {/* Icon Bubble */}
                <div className={`relative z-10 flex items-center justify-center mb-10 transition-all duration-300 rounded-full w-10 h-10 bg-transparent group-hover:bg-[#CA1C69] group-hover:scale-[0.8] ${idx === 0 || step.isHighlighted ? 'translate-y-3' : ''} ${idx === 0 ? '-translate-x-4' : ''} ${idx === 2 ? 'translate-y-3' : ''} ${idx === 3 ? 'translate-y-3' : ''}`}>
                  <step.icon className="transition-all duration-300 w-6 h-6 text-[#CA1C69] group-hover:brightness-0 group-hover:invert" />
                </div>

                {/* Content */}
                <h4 className="!text-fluid-base font-bold text-[#461148] dark:text-white mb-3 tracking-tight">
                  {step.title}
                </h4>
                <p className="!text-fluid-xs text-gray-500 dark:text-gray-400 leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Frameworks */}
        <div className="mt-10">
          <h4 className="!text-fluid-3xl !text-gradient-primary mb-8 font-medium text-center">Mapped to Global Frameworks</h4>
          <div className="flex items-center justify-start lg:justify-center gap-2 md:gap-3 w-full max-w-6xl mx-auto overflow-x-auto pb-4 hide-scrollbar px-2">
            {[
              "OWASP LLM Top 10",
              "MITRE ATLAS",
              "NIST AI RMF",
              "ISO/IEC 42001",
              "ISO/IEC 23894",
              "EU AI Act",
              "MAS FEAT",
              "RBI / SEBI AI"
            ].map((framework, i) => (
              <span
                key={i}
                className="!text-fluid-xs font-bold text-primary tracking-wider uppercase px-3 py-1.5 border border-primary/20 bg-primary/5"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}
              >
                {framework}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );

  return (
    <ServiceDetailNew serviceId="ai-security" customHero={customHero}>
      {whyWaitSection}
      {byTheNumbersSection}
      {governanceSection}
      {lifecycleSection}
    </ServiceDetailNew>
  );
};

export default AISecurityPage;
