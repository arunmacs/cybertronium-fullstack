import card1 from "@/assets/services/Service Card (1).webp";
import card3 from "@/assets/services/Service Card (3).webp";
import card4 from "@/assets/services/Service Card (4).webp";
import cardDefault from "@/assets/services/Service Card.webp";
import MinimizedAttackSurface from "@/assets/services/minimized-attack-surface.svg?react";
import Scalability from "@/assets/services/scalability.svg?react";
import RegulatoryCompliance from "@/assets/services/regulatory-compliance.svg?react";
import EnhancedProductivity from "@/assets/services/enhanced-productivity.svg?react";
import VendorNeutralIcon from "@assets/icons/vendor-neutral.svg";
import DetectResponseIcon from "@assets/icons/detetction-response.svg"
import ProactiveIcon from "@assets/icons/proactive-consulting.svg";
import ICSIcon from "@assets/icons/iso-crest.svg";
import ExpertIcon from "@assets/icons/seasoned-experts.svg";
import CertificationIcon from "@assets/icons/certification-body.svg";
import MinimizedAttackSurface1 from "@/assets/services/consulting/icon2.svg?react";
import Scalability1 from "@/assets/services/consulting/EnhProductivityIcon";
import RegulatoryCompliance1 from "@/assets/services/consulting/RegComplianceIcon";
import EnhancedProductivity1 from "@/assets/services/consulting/006-digital library.svg?react";
import RiskIcon from "@/assets/services/consulting/risk.svg?react";
import IamIcon from "@/assets/services/consulting/iam.svg?react";
import NetworkIcon from "@/assets/services/consulting/network.svg?react";
import BioIcon from "@/assets/services/consulting/bio.svg?react";
import DataIcon from "@/assets/services/consulting/data.svg?react";
import ContinuousIcon from "@/assets/services/consulting/continous.svg?react";
import MSAicon from "@/assets/services/awareness/MSA.webp";

import PhishingIcon from "@/assets/services/awareness/g366.svg?react";
import WeakLinkIcon from "@/assets/services/awareness/Group.svg?react";
import AiThreatsIcon from "@/assets/services/awareness/risk-management_10706126 1.svg?react";
import ComplianceIcon from "@/assets/services/awareness/assessment_18142561 1.svg?react";
import IntroImage from "@/assets/services/awareness/image 43.webp";

// Experiential SVGs
import ExpMainImg from "@/assets/services/awareness/141896 1.webp";
import ExpMic from "@/assets/services/awareness/Mic.svg?react";
import ExpCode from "@/assets/services/awareness/Code.svg?react";
import ExpDownload from "@/assets/services/awareness/Download.svg?react";
import ExpFileText from "@/assets/services/awareness/File text.svg?react";
import ExpKey from "@/assets/services/awareness/Key.svg?react";
import ExpPhone from "@/assets/services/awareness/Phone.svg?react";
import ExpMail from "@/assets/services/awareness/Mail.svg?react";
import ExpBug from "@/assets/services/awareness/solar--bug-line-duotone 1.svg?react";
import ExpWifi from "@/assets/services/awareness/Wifi.svg?react";
import ExpImage from "@/assets/services/awareness/Image.svg?react";
import ExpUsers from "@/assets/services/awareness/Users.svg?react";
import ExpPhish from "@/assets/services/awareness/g3666.svg?react";

// Platform SVGs
import PlatShield from "@/assets/services/awareness/check_13648892 1.svg?react";
import PlatTactic from "@/assets/services/awareness/tactic.svg?react";
import PlatDoc from "@/assets/services/awareness/security_13431947 1.svg?react";
import PlatPie from "@/assets/services/awareness/Pie chart.svg?react";
import PlatGlobe from "@/assets/services/awareness/Globe.svg?react";
import PlatBadge from "@/assets/services/awareness/expert_16330955 1.svg?react";

import ManagedImage from "@/assets/services/awareness/image 11.webp";
import MSAAwardsRecords from "@assets/services/Frame 2147226845.svg"

// Lifecycle SVGs
import LifeArrowDown from "@/assets/services/awareness/Arrows.svg";
import LifeArrowUp from "@/assets/services/awareness/Arrows d.svg";
import LifeDiscover from "@/assets/services/awareness/magnifying-glass-plus-duotone 1.svg?react";
import LifeTrain from "@/assets/services/awareness/cloud-arrow-up-duotone 1.svg?react";
import LifeSimulate from "@/assets/services/awareness/icon-park-outline--loading 1.svg?react";
import LifeMeasure from "@/assets/services/awareness/lsicon--measure-outline 1.svg?react";
import LifeReinforce from "@/assets/services/awareness/circle-wavy-check-duotone 1.svg?react";


export interface ServiceData {
  id: string;
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
      icon: string | ((...args: any[]) => any);
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

export const servicesData: Record<string, ServiceData> = {
  "vulnerability-assessment": {
    id: "vulnerability-assessment",
    title: "Vulnerability Assessments",
    description:
      "Identify & fix vulnerabilities in your network and applications.",
    pageHero: {
      titlePart1: "Vulnerability",
      titlePart2: "Assessments",
    },
    keyPoints: [
      "Achieve awareness of your current security posture with vulnerability assessments that use the latest scanning technologies to identify vulnerabilities in your network and applications.",
    ],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=400&fit=crop",
    introSection: {
      subtitle: "Proactive Security",
      titlePart1: "Comprehensive",
      titlePart2: "Vulnerability Assessments",
      description: "Identify and prioritize security weaknesses before they can be exploited.",
      content: "Cybertronium's vulnerability assessment services provide a deep dive into your infrastructure, identifying hidden risks and providing actionable remediation paths using the latest scanning technologies.",
    },
    benefitsSection: {
      subtitle: "Why Vulnerability Assessment?",
      titlePart1: "Secure your",
      titlePart2: "digital assets",
      cards: [
        { title: "Localized experience", description: "Tailored to your organizations unique needs.", icon: MinimizedAttackSurface },
        { title: "Security Assurance", description: "Identify vulnerabilities before hackers find them.", icon: RegulatoryCompliance },
        { title: "Exhaustive testing", description: "Honed through years of experience.", icon: EnhancedProductivity },
        { title: "Compliance Mapped", description: "Meet PCI-DSS, ISO27001 requirements.", icon: Scalability },
      ]
    },
    roadmapSection: {
      subtitle: "Our Process",
      titlePart1: "Assessment",
      titlePart2: "Roadmap",
      steps: [
        { title: "Preparation & Scoping", description: "Defining the targets and rules of engagement.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500" },
        { title: "Discovery & Scanning", description: "Automated and manual identification of assets and vulnerabilities.", image: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?w=500" },
        { title: "Analysis & Validation", description: "Confirming findings and assessing risk impact.", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500" },
        { title: "Reporting & Remediation", description: "Detailed report with prioritized fixes and re-testing.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500" },
      ]
    },
    ctaSection: {
      titlePart1: "Identify your risks",
      titlePart2: "with Cybertronium",
      description: "Start your assessment journey today and stay one step ahead of attackers.",
      buttonText: "Schedule an Assessment"
    },
    whyUs: [
      {
        title: "Localized experience",
        description:
          "Get the assurance of testing and guidance tailored to your organizations unique needs and challenges, delivered in terms you understand.",
        icon: VendorNeutralIcon,
      },
      {
        title: "Compliance Mapped",
        description:
          "Help achieve and maintain compliance against a range of cyber security standards including RMIT, TRM, PCI-DSS, ISO27001, NIST, and others.",
        icon: DetectResponseIcon,
      },
      {
        title: "Security Assurance",
        description:
          "Identifying vulnerabilities before hackers find them and assure customers who have entrusted you with their data that you can protect their assets.",
        icon: ProactiveIcon,
      },
      {
        title: "Exhaustive testing",
        description:
          "Rely on professionals whose skills and testing processes have been honed through years of experience protecting industry and government.",
        icon: ICSIcon,
      },
      {
        title: "Always informed",
        description:
          "Stay ahead of threats with rapid reporting turnarounds with remediation's/mitigations, and regular communication on testing progress.",
        icon: ExpertIcon,
      },
      {
        title: "Expert Assessments",
        description:
          "A multi-layered evaluation of your infrastructure to understand threats from internal and external attack points.",
        icon: CertificationIcon,
      },
    ],
    scope: [
      {
        title: "Network Vulnerability Assessment",
        content:
          "Comprehensive scanning of your network infrastructure to identify exposed services, misconfigurations, and outdated systems. We assess firewalls, routers, servers, and network devices for security weaknesses.",
      },
      {
        title: "Application Vulnerability Assessment",
        content:
          "In-depth analysis of your web and mobile applications to find code vulnerabilities, improper input validation, insecure authentication, and other OWASP Top 10 issues.",
      },
      {
        title: "Wireless Network Assessment",
        content:
          "Evaluation of wireless security posture including WPA2/WPA3 implementation, rogue access points, and unauthorized devices.",
      },
      {
        title: "Credential Testing",
        content:
          "Testing for weak credentials, default passwords, and credential stuffing vulnerabilities across your systems and applications.",
      },
    ],
    faqs: [
      {
        question: "How long does a vulnerability assessment take?",
        answer:
          "Assessment duration depends on the scope and size of your environment. Typically, network assessments take 1-2 weeks, while application assessments can take 2-4 weeks.",
      },
      {
        question: "Will the assessment impact my production systems?",
        answer:
          "We conduct non-intrusive assessments by default. For comprehensive testing, we can schedule scans during maintenance windows to minimize impact.",
      },
      {
        question: "What happens after the assessment?",
        answer:
          "You receive a detailed report with findings, risk ratings, and remediation recommendations. We can also provide remediation support and re-testing after fixes are applied.",
      },
      {
        question: "How often should I conduct vulnerability assessments?",
        answer:
          "We recommend quarterly assessments at minimum, or more frequently after major system changes, new deployments, or following security incidents.",
      },
    ],
  },

  "penetration-testing": {
    id: "penetration-testing",
    title: "Penetration Testing",
    description:
      "Authorized simulated attacks to test your security defenses. Our penetration testers attempt to exploit vulnerabilities to help you understand your real-world security posture.",
    pageHero: {
      titlePart1: "Penetration",
      titlePart2: "Testing",
    },
    keyPoints: [
      "Simulate real-world cyber attacks",
      "Identify exploitable vulnerabilities",
      "Test detection and response capabilities",
      "Demonstrate business impact of security gaps",
      "Validate security controls effectiveness",
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500&h=400&fit=crop",
    introSection: {
      subtitle: "Ethical Hacking",
      titlePart1: "Advanced",
      titlePart2: "Penetration Testing",
      description: "Simulate real-world attacks to validate your security defenses.",
      content: "Our certified ethical hackers go beyond simple scanning to exploit vulnerabilities, demonstrating exactly how an attacker could compromise your systems and how to stop them.",
    },
    benefitsSection: {
      subtitle: "Why Penetration Testing?",
      titlePart1: "Validate your",
      titlePart2: "defenses",
      cards: [
        { title: "Real-world Simulation", description: "Think like an attacker to stay safe.", icon: MinimizedAttackSurface },
        { title: "Identify Exploits", description: "Uncover hidden vulnerabilities.", icon: Scalability, isHighlighted: true },
        { title: "Compliance Support", description: "Meet stringent security standards.", icon: RegulatoryCompliance },
        { title: "Actionable Insights", description: "Prioritized remediation strategies.", icon: EnhancedProductivity },
      ]
    },
    roadmapSection: {
      subtitle: "Testing Methodology",
      titlePart1: "PenTest",
      titlePart2: "Roadmap",
      steps: [
        { title: "Reconnaissance", description: "Gathering information about the target environment.", image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500" },
        { title: "Exploitation", description: "Attempting to bypass security controls and gain access.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500" },
        { title: "Post-Exploitation", description: "Assessing the depth of access and data exposure.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500" },
        { title: "Final Reporting", description: "Comprehensive documentation of findings and fixes.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500" },
      ]
    },
    ctaSection: {
      titlePart1: "Test your defenses",
      titlePart2: "before they do",
      description: "Contact our expert hackers for a professional penetration test.",
      buttonText: "Request a Quote"
    },
    whyUs: [
      {
        title: "Expert Testers",
        description:
          "Our certified ethical hackers have extensive experience simulating real-world attack scenarios specific to your industry.",
        icon: VendorNeutralIcon,
      },
      {
        title: "Comprehensive Coverage",
        description:
          "We test network, applications, physical security, and social engineering to provide complete security assessment.",
        icon: DetectResponseIcon,
      },
      {
        title: "Business Focused",
        description:
          "Reports include business impact analysis showing how vulnerabilities could affect your organization.",
        icon: ProactiveIcon,
      },
      {
        title: "Compliance Ready",
        description:
          "Our methodology aligns with OWASP, NIST, and other compliance frameworks required for certifications.",
        icon: ICSIcon,
      },
      {
        title: "Detailed Reporting",
        description:
          "Clear, actionable reports with proof-of-concept demonstrations and detailed remediation guidance.",
        icon: ExpertIcon,
      },
      {
        title: "Remediation Support",
        description:
          "We provide ongoing support to help you fix vulnerabilities and retesting to confirm remediation.",
        icon: CertificationIcon,
      },
    ],
    scope: [
      {
        title: "External Penetration Testing",
        content:
          "Tests of your external-facing assets including web applications, email servers, VPNs, and network perimeter to simulate attacks from external threat actors.",
      },
      {
        title: "Internal Penetration Testing",
        content:
          "Assessment of internal network security assuming an attacker has gained initial access to test lateral movement and privilege escalation.",
      },
      {
        title: "Application Penetration Testing",
        content:
          "In-depth testing of web and mobile applications to find vulnerabilities including injection attacks, broken authentication, and sensitive data exposure.",
      },
      {
        title: "Physical Security Testing",
        content:
          "Assessment of physical security controls including building access, data center protection, and secure disposal practices.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between vulnerability assessment and penetration testing?",
        answer:
          "Vulnerability assessments identify security weaknesses, while penetration testing attempts to exploit them. Penetration testing is more comprehensive and provides proof of exploitability.",
      },
      {
        question: "Could penetration testing cause system outages?",
        answer:
          "We have strict controls to avoid causing outages. We coordinate closely with your team, have kill switches in place, and conduct testing in controlled phases.",
      },
      {
        question: "How long does penetration testing take?",
        answer:
          "Typically 1-3 weeks depending on scope. We schedule it around your operational timeline to minimize disruption.",
      },
      {
        question: "Will you provide proof of successful exploits?",
        answer:
          "Yes, we provide detailed proof-of-concept demonstrations in our reports showing the exact attack chains and their business impact.",
      },
    ],
  },

  "app-security-services": {
    id: "app-security-services",
    title: "Application Security Services",
    description:
      "Secure your applications from design through deployment and beyond. We provide comprehensive security assessment and guidance throughout the application lifecycle.",
    pageHero: {
      titlePart1: "Application",
      titlePart2: "Security Services",
    },
    keyPoints: [
      "Secure code review and analysis",
      "Application architecture security assessment",
      "Dependency vulnerability scanning",
      "SAST and DAST testing",
      "Security training for development teams",
    ],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop",
    introSection: {
      subtitle: "Secure Development",
      titlePart1: "Comprehensive",
      titlePart2: "App Security Services",
      description: "Secure your applications from design through deployment and beyond.",
      content: "Application security is more than just a scan. We help you integrate security into your entire SDLC, ensuring that your code is resilient against the latest threats and vulnerabilities.",
    },
    benefitsSection: {
      subtitle: "Why App Security?",
      titlePart1: "Build secure",
      titlePart2: "applications",
      cards: [
        { title: "Developer Focused", description: "Integrated into your development process.", icon: MinimizedAttackSurface },
        { title: "Full Lifecycle Coverage", description: "From design to production monitoring.", icon: Scalability, isHighlighted: true },
        { title: "Modern Stack Support", description: "Expertise in all major frameworks.", icon: RegulatoryCompliance },
        { title: "CI/CD Integration", description: "Automated scanning in your pipeline.", icon: EnhancedProductivity },
      ]
    },
    roadmapSection: {
      subtitle: "Development Roadmap",
      titlePart1: "AppSec",
      titlePart2: "Roadmap",
      steps: [
        { title: "Secure Architecture", description: "Reviewing design for security flaws.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500" },
        { title: "Code Review", description: "Manual and automated source code analysis.", image: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?w=500" },
        { title: "DAST & Penetration", description: "Testing the running application for vulnerabilities.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500" },
        { title: "Continuous Monitoring", description: "Ongoing protection and vulnerability management.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500" },
      ]
    },
    ctaSection: {
      titlePart1: "Secure your code",
      titlePart2: "from the start",
      description: "Get an expert application security assessment today.",
      buttonText: "Schedule a Review"
    },
    exclusiveServiceSection: {
      subtitle: "Exclusive Service",
      titlePart1: "Tailored",
      titlePart2: "Application Security",
      description: "Partner with our team of experts to assess your organization's application security requirements and craft a personalized implementation plan. Our services include:",
      features: [
        { title: "Static Analysis (SAST)", description: "In-depth review of source code for vulnerabilities." },
        { title: "Dynamic Testing (DAST)", description: "Testing running apps for runtime security issues." },
        { title: "Dependency Scanning", description: "Identifying risks in third-party libraries." },
        { title: "Architecture Review", description: "Assessment of app design and API security." },
        { title: "Secure Coding", description: "Training teams on OWASP and secure patterns." },
        { title: "Cloud Integration", description: "Securing deployments in modern cloud environments." },
      ]
    },
    whyUs: [
      {
        title: "Developer Focused",
        description:
          "We work with your development teams to integrate security into the development process without slowing delivery.",
        icon: VendorNeutralIcon,
      },
      {
        title: "Full Lifecycle Coverage",
        description:
          "From secure design principles through secure coding practices to deployment and production monitoring.",
        icon: DetectResponseIcon,
      },
      {
        title: "Modern Stack Support",
        description:
          "Expertise in securing Java, .NET, Python, JavaScript, Go, and other modern development frameworks.",
        icon: ProactiveIcon,
      },
      {
        title: "Compliance Integration",
        description:
          "Security practices aligned with OWASP, NIST, and industry-specific compliance requirements.",
        icon: ICSIcon,
      },
      {
        title: "Code Review Expertise",
        description:
          "Experienced security engineers who understand code vulnerabilities and best practices for every language.",
        icon: ExpertIcon,
      },
      {
        title: "CI/CD Integration",
        description:
          "Security scanning integrated into your development pipeline with actionable feedback for developers.",
        icon: CertificationIcon,
      },
    ],
    scope: [
      {
        title: "Source Code Review",
        content:
          "Manual and automated review of your application source code to identify security vulnerabilities, insecure patterns, and coding best practices violations.",
      },
      {
        title: "Dependency Analysis",
        content:
          "Comprehensive scanning of third-party libraries and dependencies for known vulnerabilities, license compliance, and supply chain risks.",
      },
      {
        title: "Dynamic Application Testing",
        content:
          "Black-box testing of running applications to find runtime security issues, authentication flaws, and data exposure vulnerabilities.",
      },
      {
        title: "Security Architecture Review",
        content:
          "Assessment of application architecture, API security, microservices security, and cloud deployment security.",
      },
    ],
    faqs: [
      {
        question: "How can I integrate security into my DevOps pipeline?",
        answer:
          "We help implement SAST, DAST, and dependency scanning tools into your CI/CD pipeline with proper alerting and remediation workflows.",
      },
      {
        question: "What is SAST and DAST?",
        answer:
          "SAST (Static Application Security Testing) analyzes source code for vulnerabilities. DAST (Dynamic Application Security Testing) tests running applications for security issues.",
      },
      {
        question: "How do you recommend addressing security issues found?",
        answer:
          "We provide priority ratings, fix recommendations, and can help your team implement secure remediation with ongoing verification.",
      },
      {
        question: "Can you train my developers on secure coding?",
        answer:
          "Yes, we offer security training for developers covering OWASP Top 10, secure coding practices, and secure design principles.",
      },
    ],
  },

  "red-purple-teaming": {
    id: "red-purple-teaming",
    title: "Red & Purple Teaming",
    description:
      "Advanced adversarial simulation with purple team collaboration for continuous improvement. Our red teams attack while purple teams coordinate defensive improvements.",
    pageHero: {
      titlePart1: "Red & Purple",
      titlePart2: "Teaming",
    },
    keyPoints: [
      "Full-spectrum adversarial simulation",
      "Real-time detection and response testing",
      "Cross-team collaboration for improvement",
      "Customized scenarios matching your threat landscape",
      "Long-term engagement and measurement",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    introSection: {
      subtitle: "Adversarial Simulation",
      titlePart1: "Red &",
      titlePart2: "Purple Teaming",
      description: "Test your SOC and defense teams with real-world attack scenarios.",
      content: "Red Teaming simulates sophisticated attackers, while Purple Teaming fosters collaboration between attackers and defenders to measurable improve detection and response capabilities.",
    },
    benefitsSection: {
      subtitle: "Why Teaming?",
      titlePart1: "Improve your",
      titlePart2: "response velocity",
      cards: [
        { title: "Realistic Simulations", description: "Attacks based on actual threat intel.", icon: MinimizedAttackSurface },
        { title: "Live SOC Testing", description: "Validate your detection capabilities.", icon: Scalability, isHighlighted: true },
        { title: "Continuous Improvement", description: "Measurable growth in security posture.", icon: RegulatoryCompliance },
        { title: "Industry Expertise", description: "Knowledge of sector-specific threats.", icon: EnhancedProductivity },
      ]
    },
    roadmapSection: {
      subtitle: "Engagement Roadmap",
      titlePart1: "Teaming",
      titlePart2: "Roadmap",
      steps: [
        { title: "Scenario Planning", description: "Defining objectives and attack paths.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500" },
        { title: "Active Engagement", description: "Executing the simulated attack campaign.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500" },
        { title: "Purple Collaboration", description: "Coordinating with defenders to improve alerts.", image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500" },
        { title: "Outcome Analysis", description: "Detailed review of missed and detected activity.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500" },
      ]
    },
    ctaSection: {
      titlePart1: "Test your SOC's",
      titlePart2: "true capabilities",
      description: "Launch a red team engagement with Cybertronium.",
      buttonText: "Start Simulation"
    },
    whyUs: [

      {
        title: "Realistic Simulations",
        description:
          "Attack scenarios based on actual threat intelligence and tactics used against your industry and organization.",
        icon: VendorNeutralIcon,
      },
      {
        title: "Live Testing",
        description:
          "Test your SOC and incident response team's ability to detect and respond to real attacks in real-time.",
        icon: DetectResponseIcon,
      },
      {
        title: "Continuous Improvement",
        description:
          "Purple team collaboration drives measurable improvements in detection capabilities and response procedures.",
        icon: ProactiveIcon,
      },
      {
        title: "Targeted Assessments",
        description:
          "Attacks customized to your specific threat environment, business operations, and security posture.",
        icon: ICSIcon,
      },
      {
        title: "Metrics & Measurement",
        description:
          "Quantifiable metrics showing improvements in MTTD, MTTR, and overall security effectiveness over time.",
        icon: ExpertIcon,
      },
      {
        title: "Industry Expertise",
        description:
          "Teams experienced in your specific industry threat landscape and common attack patterns.",
        icon: CertificationIcon,
      },
    ],
    scope: [
      {
        title: "Red Team Engagement",
        content:
          "Pure adversarial testing where red teams simulate sophisticated attacks to identify security gaps without defending team visibility.",
      },
      {
        title: "Purple Team Exercise",
        content:
          "Collaborative sessions combining red team attack expertise with purple team to make defensive improvements in real-time.",
      },
      {
        title: "Threat Intelligence Driven Campaigns",
        content:
          "Attack scenarios customized based on threat intelligence specific to your organization, industry, and threat actors.",
      },
      {
        title: "Detection Validation",
        content:
          "Systematic testing of your detection capabilities across network, endpoint, cloud, and application layers.",
      },
    ],
    faqs: [
      {
        question: "What is purple teaming and how is it different from red teaming?",
        answer:
          "Red teaming is pure attack simulation. Purple teaming involves collaboration between red attackers and blue defenders to improve defensive posture.",
      },
      {
        question: "How often should we conduct red team exercises?",
        answer:
          "We recommend quarterly engagements or continuous red team services for organizations requiring ongoing threat simulation.",
      },
      {
        question: "Will your attacks cause damage?",
        answer:
          "We conduct authorized attacks with strict controls and coordination with your team to avoid business disruption.",
      },
      {
        question: "What deliverables do we receive?",
        answer:
          "Detailed reports with attack chains, detected and missed alerts, recommendations for improvement, and trend analysis over time.",
      },
    ],
  },

  "firmware-security": {
    id: "firmware-security",
    title: "Firmware Security",
    description:
      "Comprehensive assessment of firmware security across your devices and systems. We identify vulnerabilities before they reach production.",
    pageHero: {
      titlePart1: "Firmware",
      titlePart2: "Security",
    },
    keyPoints: [
      "Binary and source code analysis",
      "Hardware security assessment",
      "Supply chain verification",
      "Vulnerability identification and remediation",
      "Firmware update security validation",
    ],
    image:
      "https://images.unsplash.com/photo-1591796014055-e4f3e0ca7e78?w=500&h=400&fit=crop",
    introSection: {
      subtitle: "Deep Security",
      titlePart1: "Expert",
      titlePart2: "Firmware Security",
      description: "Identify vulnerabilities in the foundation of your hardware.",
      content: "Firmware is often the most overlooked layer of security. We provide specialized analysis to ensure your devices are secure from the bootloader to the application layer.",
    },
    benefitsSection: {
      subtitle: "Why Firmware Security?",
      titlePart1: "Secure the",
      titlePart2: "foundation",
      cards: [
        { title: "Deep Technical Expertise", description: "Binary analysis and reverse engineering.", icon: MinimizedAttackSurface },
        { title: "Supply Chain Focus", description: "Verification throughout the lifecycle.", icon: Scalability, isHighlighted: true },
        { title: "Compliance & Standards", description: "Evaluation against NIST and IEC.", icon: RegulatoryCompliance },
        { title: "Hardware Integration", description: "Security of hardware-firmware interactions.", icon: EnhancedProductivity },
      ]
    },
    roadmapSection: {
      subtitle: "Analysis Roadmap",
      titlePart1: "Firmware",
      titlePart2: "Roadmap",
      steps: [
        { title: "Binary Extraction", description: "Retrieving firmware from physical devices.", image: "https://images.unsplash.com/photo-1591796014055-e4f3e0ca7e78?w=500" },
        { title: "Vulnerability Research", description: "Identifying coding flaws and backdoors.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500" },
        { title: "Exploit Validation", description: "Confirming impact of identified weaknesses.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500" },
        { title: "Remediation Guidance", description: "Detailed steps for secure patching.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500" },
      ]
    },
    ctaSection: {
      titlePart1: "Protect your",
      titlePart2: "embedded systems",
      description: "Get a deep dive into your firmware security.",
      buttonText: "Request Analysis"
    },
    whyUs: [
      {
        title: "Deep Technical Expertise",
        description:
          "Specialized knowledge in reverse engineering, binary analysis, and embedded systems security.",
        icon: VendorNeutralIcon,
      },
      {
        title: "Supply Chain Focus",
        description:
          "Assessment of firmware security throughout the supply chain from manufacturers through deployment.",
        icon: DetectResponseIcon,
      },
      {
        title: "Compliance & Standards",
        description:
          "Evaluation against NIST, IEC 62304, and other firmware security standards and best practices.",
        icon: ProactiveIcon,
      },
      {
        title: "Hardware Integration",
        description:
          "Security assessment of hardware-firmware interaction and hardware-based security features.",
        icon: ICSIcon,
      },
      {
        title: "Secure Development Guidance",
        description:
          "Recommendations for secure firmware development practices and secure update mechanisms.",
        icon: ExpertIcon,
      },
      {
        title: "Post-Deployment Monitoring",
        description:
          "Ongoing monitoring and analysis of deployed firmware for emerging vulnerabilities.",
        icon: CertificationIcon,
      },
    ],
    scope: [
      {
        title: "Firmware Binary Analysis",
        content:
          "Reverse engineering and analysis of compiled firmware code to identify vulnerabilities, backdoors, and security weaknesses.",
      },
      {
        title: "Source Code Review",
        content:
          "If source is available, comprehensive security review of firmware source code for coding vulnerabilities and insecure patterns.",
      },
      {
        title: "Hardware Security Assessment",
        content:
          "Evaluation of secure boot, TPM, hardware security modules, and other hardware-based security features.",
      },
      {
        title: "Supply Chain Assessment",
        content:
          "Review of firmware development, delivery, and deployment processes for supply chain security.",
      },
    ],
    faqs: [
      {
        question: "Can you analyze closed-source firmware?",
        answer:
          "Yes, we can reverse engineer and analyze binary firmware. However, having access to source code enables more thorough analysis.",
      },
      {
        question: "What devices can you assess?",
        answer:
          "We can assess firmware in routers, IoT devices, medical devices, industrial control systems, and other embedded systems.",
      },
      {
        question: "How long does firmware analysis take?",
        answer:
          "Duration depends on firmware complexity and size. Simple firmware may take 1-2 weeks, while complex systems may require 4-8 weeks.",
      },
      {
        question: "What happens if you find vulnerabilities?",
        answer:
          "We provide detailed technical reports with proof-of-concept exploits and recommendations for secure patches and updates.",
      },
    ],
  },

  "compromise-assessment": {
    id: "compromise-assessment",
    title: "Compromise Assessment",
    description:
      "Forensic investigation to determine if your systems have been compromised. We collect evidence and provide incident response guidance.",
    pageHero: {
      titlePart1: "Compromise",
      titlePart2: "Assessment",
    },
    keyPoints: [
      "Evidence collection and preservation",
      "Forensic analysis of systems and logs",
      "Malware identification and analysis",
      "Attack vector identification",
      "Remediation recommendations",
    ],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=400&fit=crop",
    introSection: {
      subtitle: "Forensic Investigation",
      titlePart1: "Expert",
      titlePart2: "Compromise Assessment",
      description: "Determine if your systems have been breached.",
      content: "A compromise assessment is a forensic investigation to identify past or ongoing malicious activity. We help you find the 'needle in the haystack' and provide the evidence you need to respond effectively.",
    },
    benefitsSection: {
      subtitle: "Why Compromise Assessment?",
      titlePart1: "Find the",
      titlePart2: "hidden threats",
      cards: [
        { title: "Forensic Expertise", description: "Experienced analysts finding APT activities.", icon: MinimizedAttackSurface },
        { title: "Rapid Response", description: "Immediate deployment for evidence collection.", icon: Scalability, isHighlighted: true },
        { title: "Evidence Quality", description: "Chain-of-custody suitable for legal use.", icon: RegulatoryCompliance },
        { title: "Root Cause Analysis", description: "Identifying attack vectors to prevent re-compromise.", icon: EnhancedProductivity },
      ]
    },
    roadmapSection: {
      subtitle: "Investigation Roadmap",
      titlePart1: "Compromise",
      titlePart2: "Roadmap",
      steps: [
        { title: "Evidence Collection", description: "Preserving logs, memory, and disk images.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500" },
        { title: "Threat Hunting", description: "Searching for Indicators of Compromise (IOCs).", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500" },
        { title: "In-Depth Analysis", description: "Forensic review of findings and attack chains.", image: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?w=500" },
        { title: "Final Report", description: "Detailed findings and remediation plan.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500" },
      ]
    },
    ctaSection: {
      titlePart1: "Determine if you've",
      titlePart2: "been breached",
      description: "Get a professional compromise assessment today.",
      buttonText: "Start Assessment"
    },
    whyUs: [
      {
        title: "Forensic Expertise",
        description:
          "Experienced forensic analysts skilled in finding evidence of sophisticated compromises including APT activities.",
        icon: VendorNeutralIcon,
      },
      {
        title: "Rapid Response",
        description:
          "24/7 incident response team ready to deploy for immediate compromise assessment and evidence collection.",
        icon: DetectResponseIcon,
      },
      {
        title: "Evidence Quality",
        description:
          "Proper evidence handling and chain-of-custody procedures suitable for legal proceedings if needed.",
        icon: ProactiveIcon,
      },
      {
        title: "Root Cause Analysis",
        description:
          "Identification of attack vector and root cause to prevent future compromises from the same threat actor.",
        icon: ICSIcon,
      },
      {
        title: "Intelligence Gathering",
        description:
          "Threat actor identification and intelligence sharing with law enforcement and other organizations if appropriate.",
        icon: ExpertIcon,
      },
      {
        title: "Remediation Planning",
        description:
          "Comprehensive remediation plan to remove attackers and prevent re-compromise.",
        icon: CertificationIcon,
      },
    ],
    scope: [
      {
        title: "System Forensics",
        content:
          "Analysis of Windows, Linux, and macOS systems for signs of compromise including registry analysis, log review, and artifact analysis.",
      },
      {
        title: "Network Forensics",
        content:
          "Analysis of network logs, firewall logs, and packet captures to trace attacker activity and lateral movement.",
      },
      {
        title: "Malware Analysis",
        content:
          "Investigation and analysis of malware artifacts including memory dumps, file system artifacts, and log files.",
      },
      {
        title: "Cloud Forensics",
        content:
          "Forensic investigation of AWS, Azure, GCP, and other cloud platforms for signs of compromise.",
      },
    ],
    faqs: [
      {
        question: "How soon do I need to conduct a compromise assessment?",
        answer:
          "As soon as you suspect a compromise. Time is critical for evidence preservation. We offer 24/7 emergency response.",
      },
      {
        question: "What evidence do you collect?",
        answer:
          "We collect system memory dumps, disk images, network logs, application logs, and other evidence to reconstruct the attack.",
      },
      {
        question: "How long does a compromise assessment take?",
        answer:
          "Initial assessment typically 2-5 days. Full analysis and report may take 2-4 weeks depending on complexity.",
      },
      {
        question: "Can I continue using my systems during assessment?",
        answer:
          "We try to minimize disruption, but some systems may need to be isolated for proper forensic analysis. We work with your IT team to maintain critical operations.",
      },
    ],
  },

  "zero-trust-implementation": {
    id: "zero-trust-implementation",
    title: "Zero Trust",
    description:
      "Design and implement zero trust architecture for your organization. We provide strategic guidance and tactical implementation support.",
    pageHero: {
      titlePart1: "Zero Trust",
      titlePart2: "Implementation",
    },
    introSection: {
      subtitle: "Services",
      titlePart1: "What is",
      titlePart2: "Zero Trust?",
      description: "Protect your digital assets with our state-of-the-art Zero Trust Implementation services",
      content: "Embrace the Zero Trust security model, where every network interaction is scrutinized, and access requests undergo strict verification and authentication. With Zero Trust Implementation, you can shield your organization from cyber threats and protect sensitive data from unauthorized intrusions.",
    },
    keyPoints: [
      "Verify every user and device before granting access",
      "Quarterly Pentest",
      "Enforce least-privilege access to minimize risks",
      "Continuously monitor and validate all network activity",
      "Protect sensitive data with strong authentication controls",
      "Reduce the impact of insider and external threats",
    ],
    benefitsSection: {
      subtitle: "Training Methods",
      titlePart1: "Benefits of",
      titlePart2: "Zero Trust",
      titlePart3: "Model",
      description: "Learn the way you want to",
      cards: [
        {
          title: "Minimized Attack Surface",
          description: "Zero Trust limits access to sensitive data to essential devices and users, significantly reducing the potential impact of successful attacks.",
          icon: MinimizedAttackSurface1,
        },
        {
          title: "Regulatory Compliance",
          description: "The model is inclusive of a comprehensive security framework that helps you meet stringent regulatory requirements, such as GDPR.",

          icon: RegulatoryCompliance1,
          isHighlighted: true,
        },
        {
          title: "Enhanced Productivity",
          description: "Zero Trust offers seamless and secure application and data access, eliminating multiple logins and VPNs, which boosts productivity and employee satisfaction.",
          icon: Scalability1,
        },
        {
          title: "Scalability",
          description: "Our Zero Trust model adapts to your evolving needs, allowing you to adopt new technologies and services without compromising security.",
          icon: EnhancedProductivity1,
        },
      ],
    },
    exclusiveServiceSection: {
      subtitle: "Exclusive Service",
      titlePart1: "Tailored",
      titlePart2: "Zero Trust Implementation Service",
      description: "Partner with our team of experts to assess your organization's distinct security requirements and craft a personalized Zero Trust implementation plan. Our comprehensive services include:",
      features: [
        {
          title: "Risk Assessment and Planning",
          description: "We start by assessing your current security posture and crafting a tailored plan to implement Zero Trust principles that align perfectly with your organization's goals.",
          icon: RiskIcon,
        },
        {
          title: "Identity and Access Management (IAM)",
          description: "We'll help you deploy a robust IAM solution that ensures secure access to your network and resources, enhancing overall security.",
          icon: IamIcon,
        },
        {
          title: "Network Segmentation",
          description: "Our team collaborates with you to segment your network effectively, creating secure micro-perimeters around critical assets to bolster protection.",
          icon: NetworkIcon,
        },
        {
          title: "Biometric Authentication",
          description: "Implement cutting-edge biometric authentication solutions to heighten the security of your authentication processes.",
          icon: BioIcon,
        },
        {
          title: "Data Encryption",
          description: "Our experts assist in encrypting sensitive data, safeguarding against unauthorized access and data breaches.",
          icon: DataIcon,
        },
        {
          title: "Continuous Monitoring",
          description: "Deploy proactive monitoring solutions to detect and respond to security incidents in real-time, ensuring ongoing protection.",
          icon: ContinuousIcon,
        },
      ],
    },
    roadmapSection: {
      subtitle: "Training Methods",
      titlePart1: "Our",
      titlePart2: "Zero Trust",
      titlePart3: "Roadmap",
      description: "Adopting the Zero Trust model can pose challenges for organizations. To ensure successful implementation, a clear roadmap is essential. Here’s an overview of the steps we use to guide businesses through the Zero Trust adoption process.",
      steps: [
        {
          title: "Identify Your Critical Assets",
          description: "Begin by identifying your critical assets, systems, and sensitive data that require protection. This prioritization allows for focused security efforts and tailored defenses.",
          image: cardDefault,
        },
        {
          title: "Map Your Transaction and Traffic Flows",
          description: "Map out how data moves across your network and systems to pinpoint security vulnerabilities and enhance your overall security posture.",
          image: card1,
        },
        {
          title: "Implementing a Zero Trust Architecture",
          description: "Deploy advanced security measures like multi-factor authentication, robust device management, and security analytics to establish a fortified defense framework.",
          image: card3,
        },
        {
          title: "Craft Your Zero Trust Policy",
          description: "Develop a comprehensive policy outlining strict security controls and protocols essential for effective implementation and ongoing security alignment.",
          image: card4,
        },
      ],
    },
    ctaSection: {
      titlePart1: "Defend your business by joining our",
      titlePart2: "Zero Trust Model ",
      titlePart3: "today!",
      description: "Seek a professional and secure method for security.",
      buttonText: "Speak to our Experts",
    },
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop",
    whyUs: [
      {
        title: "Strategic Vision",
        description:
          "We help develop a complete zero trust strategy aligned with your business goals and technical infrastructure.",
        icon: VendorNeutralIcon,
      },
      {
        title: "Phased Implementation",
        description:
          "Realistic, phased approach to zero trust implementation that works within your operational and budget constraints.",
        icon: DetectResponseIcon,
      },
      {
        title: "Technology Expertise",
        description:
          "Deep knowledge of zero trust technologies including PAM, SASE, MFA, and micro-segmentation platforms.",
        icon: ProactiveIcon,
      },
      {
        title: "Change Management",
        description:
          "Support for organizational change including training, communication planning, and staff engagement.",
        icon: ICSIcon,
      },
      {
        title: "Compliance Alignment",
        description:
          "Zero trust implementation aligned with security compliance requirements and industry frameworks.",
        icon: ExpertIcon,
      },
      {
        title: "Ongoing Optimization",
        description:
          "Continuous monitoring and optimization of zero trust policies and controls after implementation.",
        icon: CertificationIcon,
      },
    ],
    scope: [
      {
        title: "Zero Trust Strategy Development",
        content:
          "Development of comprehensive zero trust strategy document including vision, principles, and phased implementation roadmap.",
      },
      {
        title: "Identity and Access Management (IAM)",
        content:
          "Design and implementation of centralized identity management, privileged access management (PAM), and conditional access policies.",
      },
      {
        title: "Micro-Segmentation",
        content:
          "Network segmentation strategy and implementation to enforce zero trust at network and application levels.",
      },
      {
        title: "Implementation Support",
        content:
          "Hands-on support for implementing zero trust technologies and integrating with existing security infrastructure.",
      },
    ],
    faqs: [
      {
        question: "What is Zero Trust?",
        answer:
          "The Zero Trust model assumes all devices and users could be compromised, implementing strict security checks to verify identity and authorization before granting access to sensitive data.",
      },
      {
        question: "Do you really need Zero Trust?",
        answer:
          "In today's evolving threat landscape, traditional perimeter-based security is no longer sufficient. Zero Trust provides a more robust, data-centric security posture that protects against both internal and external threats.",
      },
      {
        question: "What is the difference between the Zero Trust Model and other security models?",
        answer:
          "Unlike traditional models that focus on perimeter defense, Zero Trust operates on the principle of 'never trust, always verify,' scrutinizing every access request regardless of its source or location.",
      },
      {
        question: "What is the impact of the Zero Trust Model on productivity?",
        answer:
          "When implemented correctly, Zero Trust can enhance productivity by providing secure, seamless access to applications and data from any device or location, reducing reliance on cumbersome VPNs.",
      },
      {
        question: "How is a Zero Trust Model implemented in an organization?",
        answer:
          "Implementation typically follows a phased roadmap: identifying critical assets, mapping traffic flows, designing the architecture, and enforcing strict access policies through continuous monitoring.",
      },
      {
        question: "Can the Zero Trust Model be scaled?",
        answer:
          "Yes, Zero Trust is highly scalable. Its flexible architecture allows it to adapt to growing organizations, hybrid cloud environments, and increasingly mobile workforces without compromising security.",
      },
      {
        question: "Does Zero Trust help organizations comply with regulations?",
        answer:
          "Absolutely. Zero Trust's emphasis on strict access controls, data encryption, and continuous monitoring aligns perfectly with major compliance frameworks like GDPR, HIPAA, and PCI-DSS.",
      },
    ],
  },

  "strategy-consulting": {
    id: "strategy-consulting",
    title: "Strategy & Consulting",
    description:
      "Strategic security consulting to align your security program with business objectives. We help develop roadmaps and implement best practices.",
    pageHero: {
      titlePart1: "Strategy &",
      titlePart2: "Consulting",
    },
    keyPoints: [
      "Security strategy development",
      "Business-aligned security program design",
      "Industry best practices implementation",
      "Risk management optimization",
      "Security maturity assessment",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    introSection: {
      subtitle: "Expert Guidance",
      titlePart1: "Strategic",
      titlePart2: "Security Consulting",
      description: "Align your security program with your business objectives.",
      content: "Security is not just a technical challenge—it's a business one. We help you develop a multi-year strategy that balances risk, compliance, and operational efficiency.",
    },
    benefitsSection: {
      subtitle: "Why Consulting?",
      titlePart1: "Strategic",
      titlePart2: "Advantage",
      cards: [
        { title: "Business Focused", description: "Balancing security with operational efficiency.", icon: MinimizedAttackSurface },
        { title: "Industry Experience", description: "Expertise across multiple sectors.", icon: Scalability, isHighlighted: true },
        { title: "Strategic Vision", description: "Actionable long-term security strategies.", icon: RegulatoryCompliance },
        { title: "Leadership Support", description: "Direct engagement with C-suite and board.", icon: EnhancedProductivity },
      ]
    },
    roadmapSection: {
      subtitle: "Consulting Roadmap",
      titlePart1: "Strategy",
      titlePart2: "Roadmap",
      steps: [
        { title: "Gap Analysis", description: "Assessing current maturity and identifying risks.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500" },
        { title: "Strategy Design", description: "Developing vision, principles, and roadmap.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500" },
        { title: "Execution Planning", description: "Sequencing projects and defining metrics.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500" },
        { title: "Ongoing Advisory", description: "Continuous support and quarterly reviews.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500" },
      ]
    },
    ctaSection: {
      titlePart1: "Develop your",
      titlePart2: "security vision",
      description: "Speak with our strategic consultants today.",
      buttonText: "Schedule a Session"
    },
    whyUs: [
      {
        title: "Business Focused",
        description:
          "We understand how to balance security with business objectives and operational efficiency.",
        icon: VendorNeutralIcon,
      },
      {
        title: "Industry Experience",
        description:
          "Decades of experience across financial services, healthcare, technology, and government sectors.",
        icon: DetectResponseIcon,
      },
      {
        title: "Strategic Vision",
        description:
          "We help develop actionable strategies that transform your security posture over time.",
        icon: ProactiveIcon,
      },
      {
        title: "Proven Methodology",
        description:
          "Our consulting approach is based on industry frameworks and proven best practices.",
        icon: ICSIcon,
      },
      {
        title: "Leadership Support",
        description:
          "We work directly with C-suite and board-level executives to drive security initiatives.",
        icon: ExpertIcon,
      },
      {
        title: "Implementation Support",
        description:
          "We don't just provide recommendations—we support implementation and measure success.",
        icon: CertificationIcon,
      },
    ],
    scope: [
      {
        title: "Security Strategy Development",
        content:
          "Comprehensive security strategy aligned with business goals, including vision, principles, and multi-year roadmap.",
      },
      {
        title: "Security Program Assessment",
        content:
          "Evaluation of current security program against industry frameworks and best practices with maturity assessment.",
      },
      {
        title: "Risk Management Optimization",
        content:
          "Development of risk management strategy and processes to identify, prioritize, and mitigate organizational risks.",
      },
      {
        title: "Technology Roadmap Planning",
        content:
          "Strategic planning for security technology investments and implementation sequencing.",
      },
    ],
    faqs: [
      {
        question: "How long does security strategy development take?",
        answer:
          "Typically 2-4 months depending on organization complexity. We work in phases with regular stakeholder engagement.",
      },
      {
        question: "What frameworks do you use?",
        answer:
          "We use NIST, ISO 27001, COBIT, and other industry frameworks depending on your industry and compliance requirements.",
      },
      {
        question: "How do you ensure engagement from leadership?",
        answer:
          "We work directly with C-suite executives and board committees, ensuring alignment and accountability for strategy execution.",
      },
      {
        question: "What happens after the strategy is developed?",
        answer:
          "We provide ongoing support for implementation, including quarterly reviews and adjustments based on changing business needs.",
      },
    ],
  },

  "governance-risk-compliance": {
    id: "governance-risk-compliance",
    title: "Governance, Risk & Compliance",
    description:
      "Comprehensive GRC program to achieve and maintain compliance with regulations and industry standards. We design controls and manage compliance initiatives.",
    pageHero: {
      titlePart1: "Governance, Risk",
      titlePart2: "& Compliance",
    },
    keyPoints: [
      "Compliance framework implementation",
      "Risk assessment and management",
      "Policy and procedure development",
      "Control implementation and testing",
      "Audit preparation and management",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop",
    introSection: {
      subtitle: "Compliance Excellence",
      titlePart1: "Expert",
      titlePart2: "Governance & Risk",
      description: "Achieve and maintain compliance with ease.",
      content: "Governance, Risk, and Compliance (GRC) shouldn't be a burden. We help you design practical controls that meet regulatory requirements while supporting your business goals.",
    },
    benefitsSection: {
      subtitle: "Why GRC?",
      titlePart1: "Manage risk",
      titlePart2: "effectively",
      cards: [
        { title: "Comprehensive Approach", description: "Integrated governance across the org.", icon: MinimizedAttackSurface },
        { title: "Regulatory Expertise", description: "Deep knowledge of ISO, HIPAA, PCI.", icon: Scalability, isHighlighted: true },
        { title: "Control Design", description: "Practical controls for real-world operations.", icon: RegulatoryCompliance },
        { title: "Audit Support", description: "Expertise for external audit success.", icon: EnhancedProductivity },
      ]
    },
    roadmapSection: {
      subtitle: "Compliance Roadmap",
      titlePart1: "GRC",
      titlePart2: "Roadmap",
      steps: [
        { title: "Framework Selection", description: "Identifying applicable standards and goals.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500" },
        { title: "Risk Assessment", description: "Identifying and prioritizing organizational risks.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500" },
        { title: "Control Implementation", description: "Designing and deploying security controls.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500" },
        { title: "Audit & Validation", description: "Testing controls and preparing for certification.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500" },
      ]
    },
    ctaSection: {
      titlePart1: "Simplify your",
      titlePart2: "compliance journey",
      description: "Get a gap analysis from our GRC experts.",
      buttonText: "Achieve Compliance"
    },
    whyUs: [
      {
        title: "Comprehensive Approach",
        description:
          "Integrated approach to governance, risk management, and compliance across your organization.",
        icon: VendorNeutralIcon,
      },
      {
        title: "Regulatory Expertise",
        description:
          "Deep knowledge of HIPAA, PCI-DSS, SOC 2, ISO 27001, GDPR, and other compliance frameworks.",
        icon: DetectResponseIcon,
      },
      {
        title: "Control Design",
        description:
          "Practical design of controls that satisfy compliance requirements while minimizing operational burden.",
        icon: ProactiveIcon,
      },
      {
        title: "Audit Support",
        description:
          "Support for external audits including gap analysis, evidence collection, and audit response.",
        icon: ICSIcon,
      },
      {
        title: "Continuous Monitoring",
        description:
          "Implementation of continuous compliance monitoring to detect and address issues in real-time.",
        icon: ExpertIcon,
      },
      {
        title: "Staff Training",
        description:
          "Training programs to ensure staff understand compliance requirements and their responsibilities.",
        icon: CertificationIcon,
      },
    ],
    scope: [
      {
        title: "Compliance Assessment",
        content:
          "Gap analysis against applicable compliance frameworks to identify current state and compliance gaps.",
      },
      {
        title: "Control Development and Implementation",
        content:
          "Design and implementation of controls to address compliance requirements and manage organizational risks.",
      },
      {
        title: "Policy and Procedure Development",
        content:
          "Creation and maintenance of security policies, procedures, and standards aligned with compliance requirements.",
      },
      {
        title: "Audit and Assessment Support",
        content:
          "Support for internal and external audits including evidence gathering, gap remediation, and audit response.",
      },
    ],
    faqs: [
      {
        question: "Which compliance frameworks do you support?",
        answer:
          "We support HIPAA, PCI-DSS, SOC 2, ISO 27001, GDPR, NIST, CIS, and industry-specific frameworks.",
      },
      {
        question: "How long does compliance implementation take?",
        answer:
          "Timeline depends on framework complexity and current state. Initial implementation typically takes 3-6 months.",
      },
      {
        question: "What is the cost of compliance programs?",
        answer:
          "Costs vary based on organization size and compliance scope. We provide detailed scoping and cost estimates.",
      },
      {
        question: "Do you help prepare for audits?",
        answer:
          "Yes, we provide comprehensive audit support including gap analysis, evidence collection, and remediation assistance.",
      },
    ],
  },

  "digital-forensics-incident-response": {
    id: "digital-forensics-incident-response",
    title: "Digital Forensics & Incident Response",
    description:
      "24/7 incident response and forensic investigation services. We help you respond to security incidents and investigate breaches.",
    pageHero: {
      titlePart1: "Digital Forensics &",
      titlePart2: "Incident Response",
    },
    keyPoints: [
      "24/7 incident response team",
      "Digital forensics and investigation",
      "Threat intelligence gathering",
      "Incident containment and recovery",
      "Post-incident analysis and prevention",
    ],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=400&fit=crop",
    introSection: {
      subtitle: "Emergency Response",
      titlePart1: "Expert",
      titlePart2: "DFIR Services",
      description: "24/7 incident response and forensic investigation.",
      content: "When a breach happens, every second counts. Our incident response team is available 24/7 to contain threats, investigate the root cause, and help you recover securely.",
    },
    benefitsSection: {
      subtitle: "Why DFIR?",
      titlePart1: "Rapid",
      titlePart2: "Breach Response",
      cards: [
        { title: "24/7 Availability", description: "Emergency response whenever you need it.", icon: MinimizedAttackSurface },
        { title: "Forensic Expertise", description: "Detailed investigation and root cause.", icon: Scalability, isHighlighted: true },
        { title: "Containment Strategy", description: "Stopping attacks while staying operational.", icon: RegulatoryCompliance },
        { title: "Recovery Support", description: "Securely getting your systems back online.", icon: EnhancedProductivity },
      ]
    },
    roadmapSection: {
      subtitle: "Response Roadmap",
      titlePart1: "Incident",
      titlePart2: "Roadmap",
      steps: [
        { title: "Triage & Scoping", description: "Assessing the depth and breadth of the incident.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500" },
        { title: "Containment", description: "Stopping the threat and preventing further spread.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500" },
        { title: "Investigation", description: "Forensic analysis of logs and system artifacts.", image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500" },
        { title: "Eradication & Recovery", description: "Removing threat actors and restoring services.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500" },
      ]
    },
    ctaSection: {
      titlePart1: "Need immediate",
      titlePart2: "incident response?",
      description: "Call our emergency hotline for expert assistance.",
      buttonText: "Get Help Now"
    },
    whyUs: [
      {
        title: "Rapid Response",
        description:
          "24/7/365 incident response team ready to deploy within hours to minimize incident impact.",
        icon: VendorNeutralIcon,
      },
      {
        title: "Forensic Expertise",
        description:
          "Expert forensic analysts with experience in complex investigations and legal proceedings.",
        icon: DetectResponseIcon,
      },
      {
        title: "Threat Intelligence",
        description:
          "Identification and tracking of threat actors with intelligence sharing and threat hunting.",
        icon: ProactiveIcon,
      },
      {
        title: "Containment Strategy",
        description:
          "Strategic containment to stop attacks while maintaining operational continuity.",
        icon: ICSIcon,
      },
      {
        title: "Recovery Support",
        description:
          "End-to-end recovery support including system rebuild, remediation, and validation.",
        icon: ExpertIcon,
      },
      {
        title: "Lessons Learned",
        description:
          "Post-incident analysis and recommendations to prevent future incidents.",
        icon: CertificationIcon,
      },
    ],
    scope: [
      {
        title: "Incident Response Services",
        content:
          "24/7 incident response including triage, containment, eradication, and recovery support.",
      },
      {
        title: "Digital Forensics",
        content:
          "Evidence collection, analysis, and chain-of-custody procedures suitable for legal proceedings.",
      },
      {
        title: "Threat Hunting",
        content:
          "Proactive hunting for evidence of ongoing compromise or advanced threats in your environment.",
      },
      {
        title: "Post-Incident Support",
        content:
          "Lessons learned sessions, recommendations for prevention, and ongoing monitoring.",
      },
    ],
    faqs: [
      {
        question: "How do I engage your incident response services?",
        answer:
          "Call our 24/7 incident response hotline. We can have senior analysts engaged within 30 minutes.",
      },
      {
        question: "Will you help me notify affected individuals?",
        answer:
          "Yes, we assist with breach notification planning, legal consultation coordination, and communication strategy.",
      },
      {
        question: "How long do incident response engagements typically take?",
        answer:
          "Duration varies. Initial response and containment typically 24-48 hours. Full investigation may take several weeks.",
      },
      {
        question: "Can you preserve evidence for legal proceedings?",
        answer:
          "Yes, we follow proper chain-of-custody procedures and can coordinate with law enforcement if needed.",
      },
    ],
  },

  "cloud-security-consulting": {
    id: "cloud-security-consulting",
    title: "Cloud Security Consulting",
    description:
      "Strategic consulting for securing your cloud infrastructure. We help you design and implement secure cloud architectures.",
    pageHero: {
      titlePart1: "Cloud Security",
      titlePart2: "Consulting",
    },
    keyPoints: [
      "Cloud architecture security review",
      "Identity and access management in cloud",
      "Data protection and encryption",
      "Compliance in cloud environments",
      "Cloud security best practices",
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop",
    introSection: {
      subtitle: "Cloud Security",
      titlePart1: "Expert",
      titlePart2: "Cloud Consulting",
      description: "Secure your journey to the cloud with expert guidance.",
      content: "Cloud migration and management require specialized security knowledge. We help you design and implement secure architectures in AWS, Azure, and GCP that protect your data and maintain compliance.",
    },
    benefitsSection: {
      subtitle: "Why Cloud Security?",
      titlePart1: "Protect your",
      titlePart2: "cloud infrastructure",
      cards: [
        { title: "Platform Expertise", description: "Deep knowledge of AWS, Azure, and GCP.", icon: MinimizedAttackSurface },
        { title: "Secure Migration", description: "Security guidance throughout the journey.", icon: Scalability, isHighlighted: true },
        { title: "Compliance Ready", description: "Meeting standards in the cloud.", icon: RegulatoryCompliance },
        { title: "Cost Optimized", description: "Security that saves money.", icon: EnhancedProductivity },
      ]
    },
    roadmapSection: {
      subtitle: "Cloud Roadmap",
      titlePart1: "Cloud",
      titlePart2: "Roadmap",
      steps: [
        { title: "Security Assessment", description: "Evaluating current cloud posture and risks.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500" },
        { title: "Architecture Design", description: "Designing secure network and IAM controls.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500" },
        { title: "Implementation", description: "Deploying security tools and automation.", image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500" },
        { title: "Continuous Monitoring", description: "Real-time threat detection and response.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500" },
      ]
    },
    ctaSection: {
      titlePart1: "Secure your",
      titlePart2: "cloud today",
      description: "Get a professional cloud security review.",
      buttonText: "Request Consultation"
    },
    whyUs: [
      {
        title: "Cloud Expertise",
        description:
          "Deep expertise in AWS, Azure, GCP, and multi-cloud security.",
        icon: VendorNeutralIcon,
      },
      {
        title: "Architecture Review",
        description:
          "Comprehensive review of cloud architecture and security posture against best practices.",
        icon: DetectResponseIcon,
      },
      {
        title: "Migration Support",
        description:
          "Security guidance throughout cloud migration to minimize risks.",
        icon: ProactiveIcon,
      },
      {
        title: "Compliance Alignment",
        description:
          "Ensure cloud deployments meet compliance requirements for your industry.",
        icon: ICSIcon,
      },
      {
        title: "Cost Optimization",
        description:
          "Security solutions that also help optimize cloud spending.",
        icon: ExpertIcon,
      },
      {
        title: "Ongoing Support",
        description:
          "Continuous support to keep cloud security aligned with evolving threats.",
        icon: CertificationIcon,
      },
    ],
    scope: [
      {
        title: "Cloud Security Assessment",
        content:
          "Evaluation of AWS, Azure, or GCP security posture against best practices and compliance frameworks.",
      },
      {
        title: "Architecture Design",
        content:
          "Design of secure cloud architectures including network segmentation, IAM, and data protection.",
      },
      {
        title: "Migration Planning",
        content:
          "Security planning for cloud migration including risk assessment and security control mapping.",
      },
      {
        title: "Incident Response Planning",
        content:
          "Development of incident response procedures specific to your cloud environments.",
      },
    ],
    faqs: [
      {
        question: "Which cloud platforms do you support?",
        answer:
          "We provide consulting for AWS, Microsoft Azure, Google Cloud Platform, and hybrid/multi-cloud environments.",
      },
      {
        question: "Can you help us migrate to cloud securely?",
        answer:
          "Yes, we provide security guidance throughout migration planning and execution.",
      },
      {
        question: "How do we maintain compliance in the cloud?",
        answer:
          "We help design cloud architectures that inherently support compliance requirements.",
      },
      {
        question: "What about cloud security tools?",
        answer:
          "We recommend and help implement appropriate cloud security tools for your architecture and requirements.",
      },
    ],
  },

  "ciso-as-a-service": {
    id: "ciso-as-a-service",
    title: "CISO as a Service",
    description:
      "Part-time or full-time CISO services for organizations without dedicated security leadership. We provide strategic direction and security program management.",
    pageHero: {
      titlePart1: "CISO as a",
      titlePart2: "Service",
    },
    keyPoints: [
      "Security program development and management",
      "Executive leadership and reporting",
      "Strategic planning and roadmapping",
      "Risk management oversight",
      "Vendor and compliance management",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    introSection: {
      subtitle: "Executive Leadership",
      titlePart1: "CISO",
      titlePart2: "as a Service",
      description: "Strategic security leadership for your organization.",
      content: "Not every organization needs a full-time CISO, but every organization needs strategic security leadership. Our CISO-as-a-Service provides you with the expertise you need at a fraction of the cost.",
    },
    benefitsSection: {
      subtitle: "Why vCISO?",
      titlePart1: "Strategic",
      titlePart2: "Security Leadership",
      cards: [
        { title: "Experienced Leaders", description: "Former CISOs with deep expertise.", icon: MinimizedAttackSurface },
        { title: "Cost Effective", description: "Fractional leadership for better value.", icon: Scalability, isHighlighted: true },
        { title: "Strategic Vision", description: "Aligning security with business goals.", icon: RegulatoryCompliance },
        { title: "Board Reporting", description: "Expertise in board-level communication.", icon: EnhancedProductivity },
      ]
    },
    roadmapSection: {
      subtitle: "Leadership Roadmap",
      titlePart1: "vCISO",
      titlePart2: "Roadmap",
      steps: [
        { title: "Initial Assessment", description: "Understanding current state and business goals.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500" },
        { title: "Program Development", description: "Creating a comprehensive security program.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500" },
        { title: "Risk Management", description: "Identifying and prioritizing organizational risks.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500" },
        { title: "Ongoing Advisory", description: "Continuous leadership and program oversight.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500" },
      ]
    },
    ctaSection: {
      titlePart1: "Get expert",
      titlePart2: "security leadership",
      description: "Speak with our fractional CISOs today.",
      buttonText: "Schedule an Intro"
    },
    whyUs: [
      {
        title: "Experienced Leadership",
        description:
          "Former CISOs and security leaders with deep experience in managing security programs.",
        icon: VendorNeutralIcon,
      },
      {
        title: "Cost Effective",
        description:
          "More cost-effective than hiring full-time CISO for growing organizations.",
        icon: DetectResponseIcon,
      },
      {
        title: "Strategic Vision",
        description:
          "Brings strategic perspective and industry best practices to your security program.",
        icon: ProactiveIcon,
      },
      {
        title: "Executive Presence",
        description:
          "Represents security at board level and manages relationships with executive teams.",
        icon: ICSIcon,
      },
      {
        title: "Program Development",
        description:
          "Develops comprehensive security programs aligned with business objectives.",
        icon: ExpertIcon,
      },
      {
        title: "Flexibility",
        description:
          "Flexible engagement models from strategic advisor to full-time executive leader.",
        icon: CertificationIcon,
      },
    ],
    scope: [
      {
        title: "Strategic Leadership",
        content:
          "Executive leadership for security program including C-suite representation and board communication.",
      },
      {
        title: "Security Program Management",
        content:
          "Development and management of comprehensive security program including all functions.",
      },
      {
        title: "Risk Management",
        content:
          "Oversight of enterprise risk management and security risk reporting to executive leadership.",
      },
      {
        title: "Vendor Management",
        content:
          "Management of security vendors, third-party relationships, and security service providers.",
      },
    ],
    faqs: [
      {
        question: "What engagement models do you offer?",
        answer:
          "We offer part-time advisory roles (4-8 hours/week), part-time fractional CISO (1-2 days/week), and full-time CISO services.",
      },
      {
        question: "Can you help us build a security team?",
        answer:
          "Yes, we can help with security team structure, hiring, and capability development.",
      },
      {
        question: "How long do CISO engagements typically last?",
        answer:
          "Engagements range from short-term consulting (3-6 months) to long-term strategic partnerships (2+ years).",
      },
      {
        question: "Will you report to the board?",
        answer:
          "Yes, we can provide regular reports to the board on security posture, risks, and compliance status.",
      },
    ],
  },

  "managed-security-awareness": {
    id: "managed-security-awareness",
    title: "Managed Security Awareness",
    description:
      "Cybertron is Cybertronium's fully-managed security awareness platform — combining adaptive and experiential learning, phishing simulations and behavioural risk scoring to transform your people from your weakest link into your strongest line of defence.",
    pageHero: {
      titlePart1: "Managed Security",
      titlePart2: "Awareness",
      titlePart3: "Built for the Human Layer.",
      image: MSAicon,
      badge: "Powered by Cybertron™",
      buttonText: "Request a Cybertron Demo",
      buttonLink: "/contact",
      bottomRightImage: MSAAwardsRecords
    },
    keyPoints: [
      "Security awareness training",
      "Phishing simulations and assessment",
      "Awareness campaigns and communications",
      "Compliance training",
      "Metrics and reporting",
    ],
    image: MSAicon,
    introSection: {
      subtitle: "The Human Risk Reality",
      titlePart1: "Why Security",
      titlePart2: "Awareness Matters",
      description: "Attackers don't break in — they log in. The human layer is now the primary battleground.",
      image: IntroImage,
      stats: [
        { value: "74%", label: "of breaches involve the human element", source: "Verizon DBIR" },
        { value: "3.4B", label: "phishing emails sent every single day", source: "Industry research" },
        { value: "$4.88M", label: "average cost of a data breach in 2024", source: "IBM Cost of Data Breach" },
        { value: "60%", label: "of SMBs close within 6 months of a major breach", source: "US National Cyber Security Alliance" }
      ],
      features: [
        {
          icon: PhishingIcon,
          title: "Phishing is the #1 attack vector",
          description: "More than 90% of successful cyber attacks begin with a phishing email targeting an unsuspecting employee."
        },
        {
          icon: WeakLinkIcon,
          title: "Humans are the weakest link",
          description: "Even the best security tools fail when a single user clicks a malicious link or hands over credentials."
        },
        {
          icon: AiThreatsIcon,
          title: "AI-powered threats are scaling fast",
          description: "Generative AI lets attackers craft hyper-personalised lures at a scale and quality never seen before."
        },
        {
          icon: ComplianceIcon,
          title: "Compliance now demands training",
          description: "ISO 27001, SOC 2, PCI-DSS, HIPAA and RMIT/RBI/SEBI guidelines all mandate ongoing security awareness."
        }
      ]
    },
    experientialSection: {
      badge: "Powered by Cybertron™",
      subtitle: "Experiential Awareness Training",
      titlePart1: "Don't Just Train Them.",
      titlePart2: "Let Them Feel the Attack.",
      description: "Cybertron is the only managed awareness programme that bundles in our flagship Certified Experiential Cybersecurity Aware User workshop — a live, hands-on day where your people get safely attacked across 12 real-world scenarios and learn to defend in real time.",
      image: ExpMainImg,
      stats: [
        { value: "12", label: "Live attack simulations across mobile, web, email, voice & Wi-Fi" },
        { value: "100%", label: "Hands-on — every learner runs the attack and the defence" },
        { value: "100%", label: "Workshop format, certification awarded on completion" }
      ],
      scenarios: [
        { icon: ExpMic, title: "Voice Cloning", description: "Live AI voice-clone build to expose deepfake fraud risk." },
        { icon: ExpCode, title: "The Code Caper", description: "Malicious QR codes that take over mobile cameras, mics & data." },
        { icon: ExpDownload, title: "The Download Disaster", description: "Cloned brand apps laced with malware from untrusted stores." },
        { icon: ExpFileText, title: "Form Jacking Pirates", description: "Browser form overlays silently harvesting sensitive data." },
        { icon: ExpKey, title: "AiTM: Friend or Foe?", description: "Adversary-in-the-Middle attacks bypassing SSO and 2FA." },
        { icon: ExpPhone, title: "The Scam Corner", description: "APP fraud — fake IT & bank calls hijacking screens via remote tools." },
        { icon: ExpMail, title: "Inbox Bites Back", description: "Spoofed emails from 'known' senders driving BEC payouts." },
        { icon: ExpBug, title: "Zero Day, Dooms Day", description: "Fileless malware that walks past traditional defenses." },
        { icon: ExpWifi, title: "MiTM Everywhere", description: "Public Wi-Fi & Evil Twin attacks intercepting enterprise credentials." },
        { icon: ExpImage, title: "Pictures and Mayhem", description: "Malware embedded in WhatsApp images on mobile and laptop." },
        { icon: ExpUsers, title: "Doppelganger Gala", description: "Credential stuffing from reused passwords across personal & work apps." },
        { icon: ExpPhish, title: "Phish-market", description: "Vishing scripts that trick employees into handing over access." }
      ]
    },
    platformSection: {
      subtitle: "The Cybertron Platform",
      titlePart1: "One Platform.",
      titlePart2: "Six Pillars.",
      description: "Cybertron unifies learning, simulation, measurement and managed services into a single human-risk programme.",
      pillars: [
        { icon: PlatShield, title: "Adaptive Learning", description: "Bite-sized micro-modules personalised by role, risk score and learning history. Built-in gamification keeps engagement high." },
        { icon: PlatTactic, title: "Phishing Simulations", description: "Realistic, AI-generated phishing, smishing, vishing and QR-code attacks mapped to current threat campaigns." },
        { icon: PlatDoc, title: "Behavioural Risk Scoring", description: "Every user gets a dynamic Human Risk Score. Repeat clickers get extra coaching automatically." },
        { icon: PlatPie, title: "Executive Dashboards", description: "Board-ready reporting on awareness maturity, click rates, repeat offenders and compliance evidence." },
        { icon: PlatGlobe, title: "Multi-Language Content", description: "Localised training in 12+ languages with regional threat scenarios for global workforces." },
        { icon: PlatBadge, title: "Managed by Cybertronium", description: "We design, launch, monitor and refine the entire programme — you get outcomes, not extra workload." }
      ]
    },
    lifecycleSection: {
      subtitle: "The Cybertron Lifecycle",
      titlePart1: "A Continuous ",
      titlePart2: "Human-Risk Programme",
      arrowUpImage: LifeArrowUp,
      arrowDownImage: LifeArrowDown,
      steps: [
        { icon: LifeDiscover, title: "Discover demand", description: "Baseline phishing test + human risk assessment across your workforce." },
        { icon: LifeTrain, title: "Train", description: "Personalised micro-learning paths deployed via Cybertron LMS.", isHighlighted: true },
        { icon: LifeSimulate, title: "Simulate", description: "Continuous phishing & social-engineering simulations across channels." },
        { icon: LifeMeasure, title: "Measure", description: "Track Human Risk Score, click rate, report rate & dwell time." },
        { icon: LifeReinforce, title: "Reinforce", description: "Targeted nudges and just-in-time coaching for high-risk users." }
      ]
    },
    managedServiceSection: {
      subtitle: "Why Cybertronium",
      titlePart1: "Fully Managed.",
      titlePart2: "Zero Overhead.",
      description: "Most awareness platforms hand you a tool and walk away. Cybertron is delivered as a managed service — our human-risk analysts run the programme end-to-end so your team gets the outcomes without the operational load.",
      image: ManagedImage,
      features: [
        "Dedicated Cybertron programme manager",
        "Threat-led simulation calendar",
        "Monthly executive risk reviews",
        "Audit-ready compliance evidence"
      ]
    },
    outcomesSection: {
      subtitle: "Measurable Outcomes",
      titlePart1: "What Cybertron",
      titlePart2: "Customers Achieve",
      stats: [
        { value: "85%", label: "reduction in phishing click rates within 12 months" },
        { value: "5x", label: "increase in suspicious email reporting" },
        { value: "90%", label: "training completion across the workforce" },
        { value: "100%", label: "audit-ready evidence for ISO, SOC 2, PCI-DSS" }
      ]
    },
    whyUs: [
      {
        title: "Proven Approach",
        description:
          "Evidence-based approach to reduce human risk and improve security culture.",
        icon: VendorNeutralIcon,
      },
      {
        title: "Comprehensive Program",
        description:
          "Full-spectrum awareness program including training, simulations, and ongoing campaigns.",
        icon: DetectResponseIcon,
      },
      {
        title: "Engaging Content",
        description:
          "Professional, engaging training content that maintains employee interest and participation.",
        icon: ProactiveIcon,
      },
      {
        title: "Phishing Simulation",
        description:
          "Realistic phishing simulations to identify at-risk employees and target training.",
        icon: ICSIcon,
      },
      {
        title: "Custom Scenarios",
        description:
          "Awareness campaigns customized to your organization and relevant threats.",
        icon: ExpertIcon,
      },
      {
        title: "Metrics & ROI",
        description:
          "Detailed metrics and ROI reporting showing program effectiveness and impact.",
        icon: CertificationIcon,
      },
    ],
    scope: [
      {
        title: "Security Awareness Training",
        content:
          "Regular security awareness training for all employees covering phishing, password security, data protection, and compliance.",
      },
      {
        title: "Phishing Simulations",
        content:
          "Ongoing simulated phishing campaigns with automated reporting and targeted training for vulnerable employees.",
      },
      {
        title: "Awareness Campaigns",
        content:
          "Regular communications, posters, and campaigns to reinforce security awareness and cultural change.",
      },
      {
        title: "Program Management",
        content:
          "Full program management including content creation, scheduling, reporting, and continuous improvement.",
      },
    ],
  },
  "cybersecurity-maturity-assessment": {
    id: "cybersecurity-maturity-assessment",
    title: "Cybersecurity Maturity Assessment",
    description: "Benchmark your security posture against industry standards and define a strategic roadmap for security excellence.",
    pageHero: {
      titlePart1: "Cybersecurity",
      titlePart2: "Maturity Assessment",
    },
    keyPoints: [
      "Evaluation against NIST, ISO 27001, and CIS benchmarks",
      "Analysis of security governance and culture",
      "Strategic roadmap for security maturity",
      "Gap analysis and remediation prioritization",
      "Executive and board-level reporting"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    introSection: {
      subtitle: "Security Maturity",
      titlePart1: "Cybersecurity",
      titlePart2: "Maturity Assessment",
      description: "Benchmark your posture and define your path to excellence.",
      content: "Where does your organization stand? We provide a comprehensive maturity assessment aligned with global frameworks to help you prioritize investments and build a robust security roadmap.",
    },
    benefitsSection: {
      subtitle: "Why Maturity?",
      titlePart1: "Measure your",
      titlePart2: "security growth",
      cards: [
        { title: "Standard Aligned", description: "Mapped to NIST and ISO 27001.", icon: MinimizedAttackSurface },
        { title: "Strategic Focus", description: "Aligned with business risk.", icon: Scalability, isHighlighted: true },
        { title: "Actionable Roadmap", description: "Clear path to improvement.", icon: RegulatoryCompliance },
        { title: "Executive Insight", description: "Board-ready maturity metrics.", icon: EnhancedProductivity },
      ]
    },
    roadmapSection: {
      subtitle: "Maturity Roadmap",
      titlePart1: "Assessment",
      titlePart2: "Roadmap",
      steps: [
        { title: "Evidence Review", description: "Assessing policies and technical controls.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500" },
        { title: "Stakeholder Interviews", description: "Understanding governance and culture.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500" },
        { title: "Gap Analysis", description: "Identifying weaknesses and priorities.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500" },
        { title: "Final Strategy", description: "Long-term security development plan.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500" },
      ]
    },
    ctaSection: {
      titlePart1: "Elevate your",
      titlePart2: "security posture",
      description: "Get a maturity assessment from our experts.",
      buttonText: "Request Assessment"
    },
    whyUs: [
      { title: "Standard Aligned", description: "Methodology mapped to global security frameworks.", icon: VendorNeutralIcon },
      { title: "Strategic Focus", description: "Not just technical gaps, but business risk alignment.", icon: DetectResponseIcon },
      { title: "Actionable Roadmap", description: "Phased approach to elevate security posture.", icon: ProactiveIcon }
    ],
    scope: [
      { title: "Governance Review", content: "Evaluating policies, leadership oversight, and compliance." },
      { title: "Technical Controls", content: "Assessing effectiveness of implemented security technologies." },
      { title: "Maturity Scoring", content: "Categorizing maturity across 5 standard levels." }
    ],
  },
  "secure-digital-transformation": {
    id: "secure-digital-transformation",
    title: "Secure Digital Transformation",
    description: "Ensure security is baked into your innovation. We secure your move to cloud, microservices, and modern DevOps.",
    pageHero: {
      titlePart1: "Secure Digital",
      titlePart2: "Transformation",
    },
    keyPoints: [
      "Cloud-native security architecture",
      "DevSecOps pipeline integration",
      "Microservices and API security",
      "Legacy to modern security mapping",
      "Culture transformation for security"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
    introSection: {
      subtitle: "Secure Innovation",
      titlePart1: "Secure Digital",
      titlePart2: "Transformation",
      description: "Ensure security is baked into your innovation journey.",
      content: "Moving to the cloud, microservices, or modern DevOps? We help you ensure that security is an enabler, not a bottleneck, throughout your digital transformation process.",
    },
    benefitsSection: {
      subtitle: "Why Secure Transformation?",
      titlePart1: "Innovate with",
      titlePart2: "confidence",
      cards: [
        { title: "Modern Expertise", description: "Specialists in Kubernetes and CI/CD.", icon: MinimizedAttackSurface },
        { title: "Zero Trust Ready", description: "Implementing least privilege at scale.", icon: Scalability, isHighlighted: true },
        { title: "Business Velocity", description: "Security that enables speed.", icon: RegulatoryCompliance },
        { title: "Legacy Bridging", description: "Securing the move from old to new.", icon: EnhancedProductivity },
      ]
    },
    roadmapSection: {
      subtitle: "Transformation Roadmap",
      titlePart1: "Innovation",
      titlePart2: "Roadmap",
      steps: [
        { title: "Strategy Alignment", description: "Aligning security with digital goals.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500" },
        { title: "Pipeline Integration", description: "Automating security in DevOps.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500" },
        { title: "Architecture Hardening", description: "Securing modern cloud-native stacks.", image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500" },
        { title: "Continuous Ops", description: "Scaling security with digital growth.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500" },
      ]
    },
    ctaSection: {
      titlePart1: "Secure your",
      titlePart2: "digital future",
      description: "Partner with transformation experts.",
      buttonText: "Innovate Securely"
    },
    whyUs: [
      { title: "Modern Expertise", description: "Specialists in Kubernetes, Cloud, and CI/CD.", icon: VendorNeutralIcon },
      { title: "Zero Trust Ready", description: "Implementing least privilege at the architectural level.", icon: DetectResponseIcon },
      { title: "Business Velocity", description: "Security that enables speed instead of slowing it down.", icon: ProactiveIcon }
    ],
    scope: [
      { title: "Architecture Review", content: "Security assessment of your digital modernisation plans." },
      { title: "Migration Security", content: "Safeguarding data and identity during cloud transition." }
    ],
  },
  "mobile-threat-defense": {
    id: "mobile-threat-defense",
    title: "Mobile Threat Defense",
    description: "Protect the mobile perimeter. Secure your workforce from network, device, and app-level threats on mobile.",
    pageHero: {
      titlePart1: "Mobile Threat",
      titlePart2: "Defense",
    },
    keyPoints: [
      "Protection against malicious mobile apps",
      "Network attack defense (Man-in-the-Middle)",
      "OS vulnerability monitoring (Jailbreak/Root detection)",
      "Phishing protection for mobile browsers",
      "Zero-trust mobile access integration"
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
    introSection: {
      subtitle: "Mobile Security",
      titlePart1: "Expert",
      titlePart2: "Mobile Threat Defense",
      description: "Secure your mobile workforce from device to network.",
      content: "Mobile devices are the new perimeter. Our MTD services protect your organization from malicious apps, network attacks, and OS-level vulnerabilities without compromising employee privacy.",
    },
    benefitsSection: {
      subtitle: "Why MTD?",
      titlePart1: "Secure your",
      titlePart2: "mobile workforce",
      cards: [
        { title: "Comprehensive", description: "Secures iOS, Android, and tablets.", icon: MinimizedAttackSurface },
        { title: "Privacy First", description: "Protection without monitoring personal data.", icon: Scalability, isHighlighted: true },
        { title: "Seamless", description: "Integrates with MDM/UEM solutions.", icon: RegulatoryCompliance },
        { title: "Real-time", description: "Instant threat detection and response.", icon: EnhancedProductivity },
      ]
    },
    roadmapSection: {
      subtitle: "Mobile Roadmap",
      titlePart1: "MTD",
      titlePart2: "Roadmap",
      steps: [
        { title: "Policy Definition", description: "Defining mobile security rules and privacy.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500" },
        { title: "MDM Integration", description: "Connecting MTD with your management platform.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500" },
        { title: "App Risk Analysis", description: "Scanning all organization apps for risks.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500" },
        { title: "Deployment", description: "Rolling out protection to all mobile devices.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500" },
      ]
    },
    ctaSection: {
      titlePart1: "Secure your",
      titlePart2: "mobile perimeter",
      description: "Get started with Mobile Threat Defense today.",
      buttonText: "Protect Mobile"
    },
    whyUs: [
      { title: "Comprehensive", description: "Secures iOS, Android, and tablets.", icon: VendorNeutralIcon },
      { title: "Privacy First", description: "Protection without monitoring employee personal data.", icon: DetectResponseIcon },
      { title: "Seamless", description: "Integrates with MDM/UEM solutions.", icon: ProactiveIcon }
    ],
    scope: [
      { title: "Device Security", content: "Monitoring for risky OS versions and device compromises." },
      { title: "App Risk Analysis", content: "Scanning for leaky apps and malicious behavior." }
    ],
  },
  "cloud-detection-response": {
    id: "cloud-detection-response",
    title: "Cloud Detection & Response",
    description: "Real-time threat detection and automated response for your cloud infrastructure.",
    pageHero: {
      titlePart1: "Cloud Detection",
      titlePart2: "& Response",
    },
    keyPoints: [
      "Cloud-native SIEM integration",
      "User behavior analytics (UEBA)",
      "Automated threat containment",
      "Multi-cloud visibility",
      "Real-time configuration monitoring"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
    introSection: {
      subtitle: "Cloud Detection",
      titlePart1: "Cloud",
      titlePart2: "Detection & Response",
      description: "Identify and respond to cloud threats in real-time.",
      content: "Cloud attacks move fast. Our CDR services provide specialized detection and automated response for AWS, Azure, and GCP, ensuring that breaches are contained before they can cause damage.",
    },
    benefitsSection: {
      subtitle: "Why CDR?",
      titlePart1: "Cloud-Native",
      titlePart2: "Threat Detection",
      cards: [
        { title: "Rapid Response", description: "MTTR reduced to minutes.", icon: MinimizedAttackSurface },
        { title: "Context Aware", description: "Alerts enriched with cloud metadata.", icon: Scalability, isHighlighted: true },
        { title: "Scalable", description: "Grows with your cloud footprint.", icon: RegulatoryCompliance },
        { title: "Automated", description: "Self-healing security workflows.", icon: EnhancedProductivity },
      ]
    },
    roadmapSection: {
      subtitle: "Detection Roadmap",
      titlePart1: "CDR",
      titlePart2: "Roadmap",
      steps: [
        { title: "Log Integration", description: "Aggregating cloud-native logs and events.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500" },
        { title: "Rule Engineering", description: "Developing custom detections for your stack.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500" },
        { title: "Playbook Design", description: "Automating response to common threats.", image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500" },
        { title: "Managed Ops", description: "Continuous 24/7 detection and response.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500" },
      ]
    },
    ctaSection: {
      titlePart1: "Detect cloud",
      titlePart2: "threats instantly",
      description: "Upgrade your cloud security operations.",
      buttonText: "Request CDR"
    },
    whyUs: [
      { title: "Rapid Response", description: "Mean time to respond (MTTR) reduced to minutes.", icon: VendorNeutralIcon },
      { title: "Context Aware", description: "Alerts enriched with cloud-specific metadata.", icon: DetectResponseIcon },
      { title: "Scalable", description: "Grows automatically with your cloud footprint.", icon: ProactiveIcon }
    ],
    scope: [
      { title: "Threat Detection", content: "Identifying unauthorized access and unusual API calls." },
      { title: "Incident Response", content: "Automated playbooks for cloud isolation." }
    ],
  },
  "cloud-security-posture-management": {
    id: "cloud-security-posture-management",
    title: "Cloud Security Posture Management",
    description: "Automate security and compliance across your multi-cloud infrastructure.",
    pageHero: {
      titlePart1: "Cloud Security Posture",
      titlePart2: "Management",
    },
    keyPoints: [
      "Automated misconfiguration detection",
      "Compliance mapping (CIS, SOC2, HIPAA, PCI)",
      "Infrastructure-as-Code (IaC) scanning",
      "Asset discovery and inventory",
      "Remediation guidance and automation"
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop",
    introSection: {
      subtitle: "Cloud Posture",
      titlePart1: "Expert",
      titlePart2: "CSPM Services",
      description: "Automate security and compliance across multi-cloud.",
      content: "Misconfigurations are the #1 cause of cloud breaches. Our CSPM services provide continuous monitoring and automated remediation for your multi-cloud environment, ensuring you stay secure and compliant at all times.",
    },
    benefitsSection: {
      subtitle: "Why CSPM?",
      titlePart1: "Automated",
      titlePart2: "Cloud Governance",
      cards: [
        { title: "Universal Support", description: "AWS, Azure, GCP, and Kubernetes.", icon: MinimizedAttackSurface },
        { title: "Continuous", description: "Real-time monitoring, not point-in-time.", icon: Scalability, isHighlighted: true },
        { title: "Low Noise", description: "Smart prioritization of risks.", icon: RegulatoryCompliance },
        { title: "IaC Scanning", description: "Finding issues before they are deployed.", icon: EnhancedProductivity },
      ]
    },
    roadmapSection: {
      subtitle: "Posture Roadmap",
      titlePart1: "CSPM",
      titlePart2: "Roadmap",
      steps: [
        { title: "Asset Inventory", description: "Discovering all cloud resources and shadow IT.", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500" },
        { title: "Framework Mapping", description: "Aligning with CIS, SOC2, and HIPAA.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500" },
        { title: "Policy Tuning", description: "Eliminating false positives and noise.", image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500" },
        { title: "Remediation", description: "Automated fix of high-risk misconfigurations.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500" },
      ]
    },
    ctaSection: {
      titlePart1: "Automate your",
      titlePart2: "cloud compliance",
      description: "Get a CSPM assessment today.",
      buttonText: "Schedule CSPM"
    },
    whyUs: [
      { title: "Universal", description: "Supports AWS, Azure, GCP, and Kubernetes.", icon: VendorNeutralIcon },
      { title: "Continuous", description: "Real-time monitoring, not point-in-time scans.", icon: DetectResponseIcon },
      { title: "Low Noise", description: "Smart prioritization of high-risk misconfigurations.", icon: ProactiveIcon }
    ],
    scope: [
      { title: "Asset Discovery", content: "Identifying all cloud resources, including shadow IT." },
      { title: "Compliance Auditing", content: "Automated checks against industry standards." }
    ],
  },
  "cybertron": {
    id: "cybertron",
    title: "Cybertron",
    description: "The world's first experiential cybersecurity awareness platform that puts users in the attacker's shoes.",
    pageHero: {
      titlePart1: "Cybertron",
      titlePart2: "Experiential",
    },
    keyPoints: [
      "Experiential 'Hack the Hacker' simulations",
      "Role-based awareness training",
      "Gamified learning experience",
      "Real-world phishing and social engineering simulations",
      "Behavioral analytics and risk scoring"
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
    introSection: {
      subtitle: "Experiential Training",
      titlePart1: "Experiential",
      titlePart2: "Cybertron Platform",
      description: "Put your users in the attacker's shoes.",
      content: "Traditional training is boring. Cybertron is an experiential platform where users learn by 'performing' attacks, leading to 90% higher retention and a measurable reduction in human risk.",
    },
    benefitsSection: {
      subtitle: "Why Cybertron?",
      titlePart1: "Learn by",
      titlePart2: "Doing",
      cards: [
        { title: "Engaging", description: "Gamified learning experience.", icon: MinimizedAttackSurface },
        { title: "Proprietary", description: "Exclusive content and engine.", icon: Scalability, isHighlighted: true },
        { title: "Data-Driven", description: "Identify targeted training needs.", icon: RegulatoryCompliance },
        { title: "Role-Based", description: "Training tailored to role-specific risks.", icon: EnhancedProductivity },
      ]
    },
    roadmapSection: {
      subtitle: "Cybertron Roadmap",
      titlePart1: "Training",
      titlePart2: "Roadmap",
      steps: [
        { title: "Platform Setup", description: "Configuring the simulation environment.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500" },
        { title: "Module Selection", description: "Choosing simulations relevant to your risks.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500" },
        { title: "Active Simulations", description: "Employees performing 'Hack the Hacker' labs.", image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500" },
        { title: "Risk Scoring", description: "Analyzing behavioral data for risk reduction.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500" },
      ]
    },
    ctaSection: {
      titlePart1: "Transform your",
      titlePart2: "security awareness",
      description: "Demo the Cybertron platform today.",
      buttonText: "Request Demo"
    },
    whyUs: [
      { title: "Engaging", description: "90% higher retention than traditional training.", icon: VendorNeutralIcon },
      { title: "Proprietary", description: "Exclusive content and simulation engine.", icon: DetectResponseIcon },
      { title: "Data-Driven", description: "Identify targeted training needs through analytics.", icon: ProactiveIcon }
    ],
    scope: [
      { title: "Simulation Engine", content: "Interactive modules where users 'perform' attacks." },
      { title: "Risk Dashboard", content: "Tracking organizational human risk posture." }
    ],
  },
  "soc-for-sme": {
    id: "soc-for-sme",
    title: "SOC for SME",
    description: "Enterprise-grade security operations center (SOC) at a price point that makes sense for SMEs.",
    pageHero: {
      titlePart1: "SOC for",
      titlePart2: "SME",
    },
    keyPoints: [
      "24/7/365 security monitoring",
      "Endpoint detection and response (EDR)",
      "Vulnerability management",
      "Threat hunting and intelligence",
      "Incident response support"
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
    introSection: {
      subtitle: "Managed Security",
      titlePart1: "SOC for",
      titlePart2: "SME",
      description: "Enterprise-grade security operations for growing businesses.",
      content: "Don't settle for basic security. Our SME SOC provides 24/7 monitoring, endpoint protection, and expert threat hunting at a price point that makes sense for your business.",
    },
    benefitsSection: {
      subtitle: "Why SME SOC?",
      titlePart1: "Expert",
      titlePart2: "24/7 Protection",
      cards: [
        { title: "Affordable", description: "Predictable, tiered pricing.", icon: MinimizedAttackSurface },
        { title: "Expert Led", description: "Managed by senior analysts.", icon: Scalability, isHighlighted: true },
        { title: "Fast Onboarding", description: "Get protected in days.", icon: RegulatoryCompliance },
        { title: "Full Stack", description: "SIEM, EDR, and IR included.", icon: EnhancedProductivity },
      ]
    },
    roadmapSection: {
      subtitle: "Onboarding Roadmap",
      titlePart1: "SOC",
      titlePart2: "Roadmap",
      steps: [
        { title: "Asset Discovery", description: "Identifying all systems to be monitored.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500" },
        { title: "Agent Deployment", description: "Installing EDR and log collectors.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500" },
        { title: "Tuning & Baselining", description: "Reducing noise and identifying normal behavior.", image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500" },
        { title: "Go-Live", description: "Active 24/7 monitoring and response.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500" },
      ]
    },
    ctaSection: {
      titlePart1: "Protect your",
      titlePart2: "business 24/7",
      description: "Join our SME SOC today.",
      buttonText: "Get Protected"
    },
    whyUs: [
      { title: "Affordable", description: "Predictable, tiered pricing for growing businesses.", icon: VendorNeutralIcon },
      { title: "Expert Led", description: "Managed by senior security analysts.", icon: DetectResponseIcon },
      { title: "Fast Onboarding", description: "Get protected in days, not months.", icon: ProactiveIcon }
    ],
    scope: [
      { title: "24/7 Monitoring", content: "Continuous eyes on your environment." },
      { title: "Log Analysis", content: "Aggregating and analyzing logs from all sources." }
    ],
  },

  // "soc-for-enterprise": {
  //   id: "soc-for-enterprise",
  //   title: "SOC for Enterprise",
  //   description: "Comprehensive, multi-layered security operations for large-scale, complex environments.",
  //   pageHero: {
  //     titlePart1: "SOC for",
  //     titlePart2: "Enterprise",
  //   },
  //   keyPoints: [
  //     "Hybrid-cloud SOC operations",
  //     "Advanced threat hunting and IR",
  //     "Custom SIEM/SOAR engineering",
  //     "Compliance-driven monitoring",
  //     "Dedicated account security manager"
  //   ],
  //   image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop",
  //   introSection: {
  //     subtitle: "Enterprise Managed Services",
  //     titlePart1: "SOC for",
  //     titlePart2: "Enterprise",
  //     description: "Comprehensive security operations for complex environments.",
  //     content: "Large-scale environments require specialized expertise. Our Enterprise SOC provides hybrid-cloud operations, advanced threat hunting, and custom SOAR engineering to protect your global assets 24/7.",
  //   },
  //   benefitsSection: {
  //     subtitle: "Why Enterprise SOC?",
  //     titlePart1: "Customized",
  //     titlePart2: "Global Protection",
  //     cards: [
  //       { title: "Customizable", description: "Aligned with your risk profile.", icon: MinimizedAttackSurface },
  //       { title: "High-Fidelity", description: "Expertly tuned to minimize false positives.", icon: Scalability, isHighlighted: true },
  //       { title: "Integrated", description: "Direct collaboration with internal teams.", icon: RegulatoryCompliance },
  //       { title: "Advanced Hunting", description: "Proactive searching for APTs.", icon: EnhancedProductivity },
  //     ]
  //   },
  //   roadmapSection: {
  //     subtitle: "Onboarding Roadmap",
  //     titlePart1: "Enterprise",
  //     titlePart2: "Roadmap",
  //     steps: [
  //       { title: "Strategy Alignment", description: "Mapping SOC operations to business risk.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500" },
  //       { title: "Stack Integration", description: "Connecting SIEM/SOAR with your global tech.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500" },
  //       { title: "Playbook Engineering", description: "Developing custom response workflows.", image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500" },
  //       { title: "Continuous Ops", description: "Active 24/7 hunting and incident response.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500" },
  //     ]
  //   },
  //   ctaSection: {
  //     titlePart1: "Secure your",
  //     titlePart2: "global enterprise",
  //     description: "Partner with our Enterprise SOC team.",
  //     buttonText: "Schedule Consultation"
  //   },
  //   whyUs: [
  //     { title: "Customizable", description: "Aligned with your unique risk profile and tech stack.", icon: VendorNeutralIcon },
  //     { title: "High-Fidelity", description: "Minimal false positives through expert tuning.", icon: DetectResponseIcon },
  //     { title: "Integrated", description: "Direct integration with your internal IT/Security teams.", icon: ProactiveIcon }
  //   ],
  //   scope: [
  //     { title: "SIEM Management", content: "Full lifecycle management of your security data." },
  //     { title: "Advanced Hunting", content: "Proactive searching for sophisticated adversaries." }
  //   ],
  // },

  // "soc-as-a-service": {
  //   id: "soc-as-a-service",
  //   title: "SOC as a Service",
  //   description: "AI-Driven 24x7 Security Operations. Cybertronium's managed SOC fuses petabyte-scale SIEM, SOAR, UEBA and agentic AI to detect, investigate and respond to threats in real time — without the cost or complexity of building your own.",
  //   pageHero: {
  //     titlePart1: "AI-Driven 24×7",
  //     titlePart2: "Security Operations",
  //   },
  //   keyPoints: [
  //     "24/7/365 security monitoring",
  //     "Endpoint detection and response (EDR)",
  //     "Vulnerability management",
  //     "Threat hunting and intelligence",
  //     "Incident response support"
  //   ],
  //   image: socasaserviceHero,
  //   introSection: {
  //     subtitle: "Managed Security",
  //     titlePart1: "SOC for",
  //     titlePart2: "SME",
  //     description: "Enterprise-grade security operations for growing businesses.",
  //     content: "Don't settle for basic security. Our SME SOC provides 24/7 monitoring, endpoint protection, and expert threat hunting at a price point that makes sense for your business.",
  //   },
  //   benefitsSection: {
  //     subtitle: "Why SME SOC?",
  //     titlePart1: "Expert",
  //     titlePart2: "24/7 Protection",
  //     cards: [
  //       { title: "Affordable", description: "Predictable, tiered pricing.", icon: MinimizedAttackSurface },
  //       { title: "Expert Led", description: "Managed by senior analysts.", icon: Scalability, isHighlighted: true },
  //       { title: "Fast Onboarding", description: "Get protected in days.", icon: RegulatoryCompliance },
  //       { title: "Full Stack", description: "SIEM, EDR, and IR included.", icon: EnhancedProductivity },
  //     ]
  //   },
  //   roadmapSection: {
  //     subtitle: "Onboarding Roadmap",
  //     titlePart1: "SOC",
  //     titlePart2: "Roadmap",
  //     steps: [
  //       { title: "Asset Discovery", description: "Identifying all systems to be monitored.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500" },
  //       { title: "Agent Deployment", description: "Installing EDR and log collectors.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500" },
  //       { title: "Tuning & Baselining", description: "Reducing noise and identifying normal behavior.", image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500" },
  //       { title: "Go-Live", description: "Active 24/7 monitoring and response.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500" },
  //     ]
  //   },
  //   ctaSection: {
  //     titlePart1: "Protect your",
  //     titlePart2: "business 24/7",
  //     description: "Join our SME SOC today.",
  //     buttonText: "Get Protected"
  //   },
  //   whyUs: [
  //     { title: "Affordable", description: "Predictable, tiered pricing for growing businesses.", icon: VendorNeutralIcon },
  //     { title: "Expert Led", description: "Managed by senior security analysts.", icon: DetectResponseIcon },
  //     { title: "Fast Onboarding", description: "Get protected in days, not months.", icon: ProactiveIcon }
  //   ],
  //   scope: [
  //     { title: "24/7 Monitoring", content: "Continuous eyes on your environment." },
  //     { title: "Log Analysis", content: "Aggregating and analyzing logs from all sources." }
  //   ],
  // },

};

