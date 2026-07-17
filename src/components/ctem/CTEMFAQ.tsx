"use client";
import SharedFAQ from "@/components/ui/SharedFAQ";

const CTEMFAQ = () => {
  const faqs = [
    {
      question: "What is Continuous Threat Exposure Management (CTEM)?",
      answer: "CTEM is a proactive cybersecurity approach that continuously identifies, prioritizes, validates, and remediates security exposures across an organization’s attack surface."
    },
    {
      question: "How does CTEM improve cybersecurity?",
      answer: "CTEM helps organizations focus on exploitable risks that have the greatest business impact, enabling faster and more effective remediation."
    },
    {
      question: "Why should organizations adopt CTEM?",
      answer: "Organizations can reduce cyber risk, improve visibility into security weaknesses, and strengthen their overall security posture."
    },
    {
      question: "How is CTEM different from vulnerability management?",
      answer: "CTEM goes beyond vulnerability identification by validating exploitability and prioritizing risks based on real-world business impact."
    },
    {
      question: "Who can benefit from CTEM as a Service?",
      answer: "Organizations of all sizes with cloud, on-premises, or hybrid environments can benefit from continuous exposure management."
    },
    {
      question: "What are the 5 stages of CTEM?",
      answer: "The CTEM lifecycle consists of five continuous stages: (1) Scoping — define critical assets and attack surface; (2) Discovery — find exposures, vulnerabilities, and misconfigurations; (3) Prioritization — rank by business impact and exploitability; (4) Validation — confirm exploitability with attack simulation; (5) Mobilization — drive remediation across teams."
    },
    {
      question: "How long does it take to implement a CTEM program?",
      answer: "Most organizations see initial value within 30–60 days. A foundational CTEM program (scoping, discovery, baseline prioritization) can be operational in 4–8 weeks. Maturity across all 5 stages — including continuous validation and integrated mobilization — typically takes 3–6 months depending on size and complexity."
    },
    {
      question: "Do we need to replace our existing security tools to adopt CTEM?",
      answer: "No. CTEM is a program, not a single tool. We integrate with your existing stack — vulnerability scanners, EDR, SIEM, ASM, cloud security posture, and ticketing systems — to orchestrate a unified exposure management workflow. Where gaps exist, we recommend best-fit technologies."
    },
    {
      question: "Which industries benefit most from CTEM?",
      answer: "CTEM is valuable for any organization with a complex digital footprint — but it's especially impactful for financial services, healthcare, government, telecommunications, manufacturing, and critical infrastructure, where exposure to ransomware, supply chain attacks, and regulatory risk is highest."
    },
    {
      question: "Is CTEM aligned with compliance frameworks like ISO 27001, PCI-DSS or NIST?",
      answer: "Yes. CTEM directly supports controls in ISO 27001 (A.8 Asset Management, A.12 Operations Security), NIST CSF (Identify, Protect, Detect), PCI-DSS (Req. 6 & 11), and Malaysia's PDPA and RMiT guidelines — providing continuous evidence of risk-based security operations."
    },
    {
      question: "How do you measure the ROI of a CTEM program?",
      answer: "We track measurable KPIs including: reduction in mean-time-to-remediate (MTTR), percentage decrease in critical exposures, reduction in attack surface, fewer security incidents, and improved audit readiness. Our clients typically see 78% faster remediation and 65% fewer successful attacks within 12 months."
    }
  ];

  return (
    <SharedFAQ 
      faqs={faqs}
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about Continuous Threat Exposure Management."
      ctaTitle="Need more guidance?"
      ctaSubtitle="Our advisors are ready to discuss your security career."
      ctaButtonText="Contact Us"
      ctaButtonLink="/contact"
    />
  );
};

export default CTEMFAQ;
