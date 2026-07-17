"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Checkmark from "@assets/CTEM/check-mark.svg?react"
import scopingImg from "@assets/CTEM/scoping.webp"
import discoveryImg from "@assets/CTEM/discovery.webp"
import prioritizationImg from "@assets/CTEM/stage3.webp"
import validationImg from "@assets/CTEM/validation.webp"
import mobilizationImg from "@assets/CTEM/mobilization.webp"

const CTEMLifecycle = () => {
  const [activeStage, setActiveStage] = useState(0);

  const lifecycleStages = [
    {
      num: "01",
      name: "Scoping",
      titleDesc: "Discover Your Attack Surface",
      whatWeDo: [
        "Discover all assets, identities, and services across on-prem, cloud, SaaS and third parties.",
        "Map business criticality and data classification.",
        "Define scope, boundaries and monitoring strategy."
      ],
      outputs: ["Attack surface inventory", "Asset classification", "Monitoring baseline"],
      tech: ["Attack Surface Management(ASM)", "External Asset Discovery", "CMDB & Asset Inventory", "Identity & Access Intelligence", "Cloud Asset Discovery"],
      image: scopingImg
    },
    {
      num: "02",
      name: "Discovery",
      titleDesc: "Find & Assess Exposures",
      whatWeDo: [
        "Continuously find weaknesses, misconfigurations, vulnerable services and risky dependencies.",
        "Assess severity and exploitability in real time.",
        "Enrich with threat intelligence."
      ],
      outputs: ["Exposure inventory", "Vulnerability findings", "Configuration issues"],
      tech: ["Vulnerability Scanners", "Configuration Assessment", "Software Composition Analysis (SCA)", "Threat Intelligence Feeds", "Exposure Intelligence Platforms"],
      image: discoveryImg
    },
    {
      num: "03",
      name: "Prioritization",
      titleDesc: "Focus on What Matters Most",
      whatWeDo: [
        "Correlate exposures with threat intelligence, asset criticality and business context.",
        "Identify attack paths and quantify potential impact.",
        "Prioritize based on real risk, not just CVSS."
      ],
      outputs: ["Risk-ranked exposure list", "Attack path insights", "Business risk scores"],
      tech: ["Risk-Based Vulnerability Management", "Threat Intelligence & Contextual Risk", "Attack Path Analysis", "Business Context & Criticality Mapping", "AI/ML Risk Scoring & Analytics"],
      image: prioritizationImg
    },
    {
      num: "04",
      name: "Validation",
      titleDesc: "Prove & Measure Real Risk",
      whatWeDo: [
        "Continuously validate whether prioritized exposures are truly exploitable.",
        "Simulate real-world attacks to measure control effectiveness.",
        "Quantify risk reduction over time."
      ],
      outputs: ["Verified exploitable risks", "Control effectiveness scores", "Risk reduction metrics"],
      tech: ["Breach & Attack Simulation (BAS)", "Penetration Testing (Manual & Automated)", "Red Team / Adversary Emulation", "Exploit Validation Tools", "Security Control Validation"],
      image: validationImg
    },
    {
      num: "05",
      name: "Mobilization",
      titleDesc: "Act, Remediate & Improve",
      whatWeDo: [
        "Drive remediation with clear ownership, automated workflows, and accountability.",
        "Track progress and validate fixes.",
        "Continuously improve security posture and processes."
      ],
      outputs: ["Remediation plan", "Fix validation", "Improved posture"],
      tech: ["Ticketing & Remediation Workflows", "Security Orchestration & Automation (SOAR)", "Patch Management", "Continuous Monitoring & Detection", "Metrics, Reporting & Risk Governance"],
      image: mobilizationImg
    }
  ];

  return (
    <section className="py-10 lg:py-16 bg-[#FAFAFA] border-t border-gray-100">
      <div className="container mx-auto md:px-6 lg:px-16 max-w-[1200px]">
        <div className="text-center mb-16">
          <div className="w-12 h-0.5 bg-orange-400/50 mx-auto mb-3 rounded-full"></div>
          <div className="text-[14px] font-semibold text-[#CA1C69] tracking-wide mb-4">
            The CTEM Lifecycle
          </div>
          <h2 className="text-[40px] md:text-[52px] font-bold leading-tight bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #CA1C69 0%, #F37A3A 100%)" }}>
            5 Stages
          </h2>
          <h3
            className="text-[28px] md:text-[36px] font-bold bg-clip-text text-transparent mt-2 mb-4"
            style={{ backgroundImage: 'linear-gradient(270.09deg, #F37A3A 16.02%, #CA1C69 91.5%)' }}
          >
            A continuous loop for Cyber Resilience
          </h3>
          <p className="text-[14px] text-gray-500 max-w-2xl mx-auto">
            Continuous feedback & improvement across Scoping, Discovery, Prioritization, Validation and Mobilization.
          </p>
        </div>

        {/* Horizontal Accordion Layout */}
        <div className="bg-white rounded-[16px] shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row h-[520px] max-w-[1000px] mx-auto">
          {lifecycleStages.map((stage, idx) => {
            const isActive = activeStage === idx;

            return (
              <div
                key={stage.num}
                onClick={() => !isActive && setActiveStage(idx)}
                className={`relative flex flex-col md:flex-row border-b md:border-b-0 md:border-r border-gray-200 last:border-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden cursor-pointer ${isActive
                  ? "flex-[8] md:flex-[10] bg-white cursor-default"
                  : "flex-[1] md:flex-none md:w-[62px] min-h-[60px] md:min-h-full bg-white hover:bg-gray-50/50"
                  }`}
              >
                <div
                  className={`absolute inset-0 w-full h-full p-3 md:p-4 flex flex-col overflow-y-auto transition-opacity duration-500 ${isActive ? 'opacity-100 delay-200 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'}`}
                >
                  <div className="text-[#CA1C69] text-[15px] font-bold mb-3 uppercase tracking-wider">
                    STAGE {stage.num}
                  </div>
                  <h3 className="text-[26px] md:text-[30px] lg:text-[32px] text-[#3B194E] mb-4 md:mb-6 leading-tight">
                    <span className="font-bold">{stage.name}</span> — <span className="font-light">{stage.titleDesc}</span>
                  </h3>

                  <div className="flex-grow relative flex flex-col">
                    <div className="space-y-4 md:space-y-5 relative z-10 w-full">
                      {/* What we do */}
                      <div>
                        <h4 className="text-[#F37A3A] font-bold text-[14px] md:text-[15px] mb-2 md:mb-3">What we do</h4>
                        <ul className="space-y-2 md:space-y-2.5">
                          {stage.whatWeDo.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <div className="flex-shrink-0 mt-0.5 bg-white/50 rounded-full">
                                <Checkmark className="w-4 h-4 md:w-5 md:h-5" />
                              </div>
                              <span className="text-[13px] md:text-[14px] text-gray-800 font-medium leading-relaxed pr-4">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Outputs & Technologies */}
                      <div className="grid grid-cols-1 gap-4 lg:gap-6">
                        {/* Key Outputs */}
                        <div>
                          <h4 className="text-[#F37A3A] font-bold text-[14px] md:text-[15px] mb-2 md:mb-3">Key Outputs</h4>
                          <div className="flex flex-wrap gap-2">
                            {stage.outputs.map((output, i) => (
                              <span key={i} className="bg-white/90 backdrop-blur-sm text-[#3B194E] text-[11px] md:text-[12px] font-bold px-3 py-1 border border-[#FFE0E8] rounded-md shadow-sm">
                                {output}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-[#F37A3A] font-bold text-[14px] md:text-[15px] mb-2 md:mb-3">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {stage.tech.map((tech, i) => (
                              <span key={i} className="bg-white/90 backdrop-blur-sm text-[#CA1C69] text-[11px] md:text-[12px] font-bold px-3 py-1 border border-pink-100 rounded-md shadow-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-15 overflow-hidden">
                      <img src={stage.image}
                        alt={stage.name}
                        className="absolute -right-[5%] top-1/2 -translate-y-1/2 w-[60%] h-full object-cover object-center mix-blend-multiply"
                        loading="lazy" decoding="async" />
                    </div>
                  </div>
                </div>

                {/* Inactive Vertical Strip - Absolute positioned to avoid taking space */}
                <div className={`absolute inset-0 w-full md:w-[52px] h-full flex flex-row md:flex-col items-center justify-between py-3 md:py-6 transition-opacity duration-300 pointer-events-none ${isActive ? 'opacity-0 z-0' : 'opacity-100 delay-300 z-10'}`}>
                  <span className="text-[14px] md:text-[16px] text-[#C01E6C] font-bold px-4 md:px-0">
                    {stage.num}
                  </span>
                  <span
                    className="hidden md:block text-[13px] text-[#C01E6C] tracking-widest font-bold text-center rotate-180 uppercase"
                    style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                  >
                    {stage.name}
                  </span>
                  {/* Mobile fallback text */}
                  <span className="md:hidden text-[14px] text-[#C01E6C] font-medium px-6 tracking-widest uppercase">
                    Stage {stage.num} - {stage.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CTEMLifecycle;
