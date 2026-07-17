import aiSecurityHero from "@assets/ai security/hero.webp";
import VendorNeutralIcon1 from "@assets/icons/Vector1.svg?react";
import ICSIcon1 from "@assets/icons/Vector2.svg?react";
import DetectResponseIcon1 from "@assets/icons/Vector.svg?react";
import Vector2 from "@assets/services/consulting/Vector2.svg?react"
import Vector from "@assets/services/consulting/Vector.svg?react"
import Vector1 from "@assets/services/consulting/Vector1.svg?react"
import Vector5 from "@assets/services/consulting/Vector5.svg?react"
import Vector3 from "@assets/services/consulting/Vector3.svg?react"
import Vector4 from "@assets/services/consulting/Vector4.svg?react"
import Stratergyhero from "@assets/services/consulting/S&Chero.webp"
import GRChero from "@assets/services/consulting/grchero.webp"
import SDThero from "@assets/services/consulting/sdthero.svg"
import DFIRhero from "@assets/services/consulting/dfirhero.webp"
import MTDhero from "@assets/services/consulting/mtdhero.webp"
import CiSOhero from "@assets/services/consulting/ciso.webp"
import whyUsPlaceholderImg3 from "@assets/services/consulting/Placeholder Image.webp"
import whyUsPlaceholderImg2 from "@assets/services/consulting/Threat Defense.webp"
import whyUsPlaceholderImg4 from "@assets/services/consulting/Protection.webp"
import vulnerabilityHeroImg from "@assets/services/assessment/vulnerability-hero.webp";
import PentestHero from "@assets/services/assessment/pen-testing-hero.webp";
import AppSecurityHero from "@assets/services/assessment/app-security-hero.webp";
import whyUsIntroImg from "@assets/services/assessment/whyus-intro.webp";
import whyUsIntroImg1 from "@assets/icons/Placeholder Image.webp";
import GroupBgGradient from "@assets/services/assessment/Group.webp";
import GroupBgGradient2 from "@assets/services/assessment/Group(1).webp";
import RedPurpleHero from "@assets/services/assessment/red-purple-hero.webp"
import RedTeam from "@assets/services/assessment/red-teaming.webp"
import PurpleTeam from "@assets/services/assessment/purple-teaming.webp"
import FirmwareHero from "@assets/services/assessment/firmware-security-hero.webp"
import FirmwareSecurity from "@assets/services/assessment/firmware-security.webp"
import FirmwareIntro from "@assets/services/assessment/firmware-intro.webp"
import SidebarGrid from "@assets/services/assessment/sidebar-grid.webp"
import SupportingPartners from "@assets/services/assessment/partners.webp"
import CompromiseAssessmentHero from "@assets/services/assessment/compromise-hero.webp"
import CybersecurityMaturityHero from "@assets/services/assessment/cyber-security-hero.webp";
import cdrhero from "@assets/services/cloud-security/cloud-detection-response-hero.webp";
import cdrwhyus from "@assets/services/cloud-security/cloud-detection-whyus.webp";
import cdrresource from "@assets/services/cloud-security/cloud-detection-response-resource.png";
import cspmhero from "@assets/services/cloud-security/cspm-hero.webp"
import cscshero from "@assets/services/cloud-security/cscs-hero.webp"
import cscsaws from "@assets/services/cloud-security/cscs-aws.webp"
import cscsazure from "@assets/services/cloud-security/cscs-azure.webp"
import cscsms365 from "@assets/services/cloud-security/cscs-ms365.webp"
import cscsmigratebg from "@assets/services/cloud-security/cscs-migrate-bg.webp"
import socsmehero from "@assets/services/soc-sme-hero.webp"
import socenterprisecHero from "@assets/services/soc-entrpse-hero.webp"
import socasaservervicehero from "@assets/services/soc-as-a-service-hero.webp"
import soclandscape from "@assets/services/soc-landscape.webp"

import ShieldCheck from "@assets/services/assessment/check_13648892 1.svg?react"
import Security from "@assets/services/assessment/security_13431947 1.svg?react"
import Labs from "@assets/services/assessment/labs.svg?react"
import Shield from "@assets/services/assessment/shield_312286 1.svg?react"
import Analysis from "@assets/services/assessment/analysis_10320192 1.svg?react"
import Report from "@assets/services/assessment/report_2207462 1.svg?react"
import Experts from "@assets/services/assessment/expert_16330955 1.svg?react"
import Info from "@assets/services/assessment/information_484653 1.svg?react"
import Tactic from "@assets/services/assessment/tactic.svg?react"
import Approved from "@assets/services/assessment/approved_5718296 1.svg?react"
import MoneyCheck from "@assets/services/assessment/money-tick.svg?react"
import BoxCheck from "@assets/services/assessment/box-tick.svg?react"
import Rating from "@assets/services/assessment/rate_17144238 1.svg?react"
import SeasonTeam from "@assets/services/assessment/gear_1387985 1.svg?react"
import Skills from "@assets/services/assessment/skills_1979383 1.svg?react"
import Prescription from "@assets/services/assessment/prescription_8496858 1.svg?react"
import Telepathy from "@assets/services/assessment/telepathy_925434 1.svg?react"
import ShieldWarning from "@assets/services/assessment/shield-warning-svgrepo-com 1.svg?react"
import Solution from "@assets/services/assessment/solution_11284653 1.svg?react"
import Target from "@assets/services/assessment/target_6818693 1.svg?react"
import Bomb from "@assets/services/assessment/bomb_4289574 1.svg?react"
import SupplyChain from "@assets/services/assessment/supply-chain_4994463 1.svg?react"
import Iot from "@assets/services/assessment/iot_1185915 1.svg?react"
import Computer from "@assets/services/assessment/computer_8899774 1.svg?react"
import Directions from "@assets/services/assessment/direction-sign_883777 1.svg?react"
import SearchPlain from "@assets/services/cloud-security/search.svg"
import Architecture from "@assets/services/cloud-security/architecture.svg"
import AiGovernanceTracked from "@assets/services/cloud-security/ai-governance-tracked.svg"
import File from "@assets/services/assessment/file_8208366 1.svg?react"
import Search from "@assets/services/assessment/search_191819 1.svg?react"
import Strategic from "@assets/services/assessment/strategic-consulting_16332518 1.svg?react"
import Tag from "@assets/services/Tag.svg?react"

// A placeholder for the Why Us side image (the one with the shield and bug)
// we'll use a placeholder URL for now until the asset is provided manually
const whyUsPlaceholderImg = whyUsIntroImg;

export interface ServiceDetailNewData {
  id: string;
  pageHero: {
    image: string;
    titlePart1: string;
    titlePart2: string;
    description: string | string[];
    resourceImg?: string;
    badge?: string;
    showStats?: boolean;
    stats?: { label: string[]; value: string }[];
    buttonText?: string;
    buttonLink?: string;
  };
  whyUsSection?: {
    align?: 'left' | 'center' | 'right';
    badge: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    image: string;
    cards: {
      title: string;
      description: string;
      icon: any;
    }[];
  };
  statisticsSection?: {
    badge: string;
    title: string;
    description1: string;
    description2: string;
    description3?: string;
    bg?: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
  scopeSection?: {
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    useGradientTitle?: boolean;
    description?: string;
    title1ClassName?: string;
    title2ClassName?: string;
    items?: {
      title: string;
      content: string | { title: string; text: string }[];
    }[];
    groups?: {
      groupTitle: string;
      items: {
        title: string;
        content: string | { title: string; text: string }[];
      }[];
    }[];
  };
  approachSection?: {
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    description: string;
    bg?: string;
    cards: {
      title: string;
      description: string;
      icon: any;
    }[];
  };
  imageApproachSection?: {
    title: string;
    description: string;
    image: string;
    rightTitle: string;
    cards: {
      title: string;
      description: string;
    }[];
  };
  imageBulletsSection?: {
    titlePart1: string;
    titlePart2?: string;
    image: string;
    bullets: string[];
  };
  featureSectionHeader?: {
    titlePart1?: string;
    titlePart2?: string;
    subtitle?: string;
  };
  featureSections?: {
    badge?: string;
    title?: string;
    titlePart1?: string;
    titlePart2?: string;
    subtitle?: string;
    description1?: string;
    description2?: string;
    description3?: string;
    listHeader?: string;
    listItems?: (string | { title: string; content: string })[];
    footerText?: string;
    image: string;
    imagePosition: "left" | "right";
    useGradientTitle?: boolean;
    increaseImageHeight?: boolean;
    inlineListItems?: boolean;
    bgClass?: string;
    contentWidthClass?: string;
    imageWidthClass?: string;
    maintainAspectRatio?: boolean;
  }[];
  sidebarGridSection?: {
    badge?: string;
    titlePart1?: string;
    titlePart2?: string;
    description?: string;
    sidebarImage: string;
    cards: {
      title: string;
      description: string;
      icon: any;
    }[];
  };
  bentoGridSection?: {
    leftCards: {
      titlePart1: string;
      titlePart2: string;
      description: string;
      linkText?: string;
      linkUrl?: string;
    }[];
    rightCard: {
      title: string;
      description: string;
      linkText?: string;
      linkUrl?: string;
      image: string;
    };
  };
  pricingSection?: {
    subtitle?: string;
    titlePart1: string;
    titlePart2?: string;
    description?: string;
    useGradientTitle?: boolean;
    plans: {
      title: string;
      description: string;
      price?: string;
      period?: string;
      subtext?: string;
      buttonText?: string;
      features: string[];
    }[];
  };
  signUpSection?: {
    title: string;
    description: string;
  };
  downloadSection?: {
    title: string;
    description: string;
  };
  partnersSection?: {
    title: string;
    description: string;
    partners: string[];
  };
  advantageCards?: {
    icon: any;
    badge?: string;
    title: string;
    description: string;
  }[]
  cyberLandscapeSection?: {
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    image: string;
    cards: { text: string; highlight?: string }[];
  };
  mdrOfferingsSection?: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    offerings: {
      title: string;
      description: string;
      icon?: string;
    }[];
    cta: {
      title: string;
      description: string;
      buttonText: string;
    };
  };
  socProblemSection?: {
    subtitle: string;
    title: string;
    description: string;
    cards: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  socDataBreakdownSection?: {
    subtitle: string;
    title: string;
    description: string;
    statCards: {
      icon: string;
      value: string;
      label: string;
    }[];
    donutPanels: {
      title: string;
      items: {
        value: string;
        label: string;
        percentage: number;
        color: string;
      }[];
    }[];
    sourceCitation: string;
  };
  socPlatformGridSection?: {
    subtitle: string;
    title: string;
    description: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  socAgentLibrarySection?: {
    subtitle: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    agents: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  socWorkflowSection?: {
    subtitle: string;
    title: string;
    description: string;
    steps: {
      stepNumber: string;
      title: string;
      description: string;
      bullets: { text: string }[];
      iconPlaceholder: string;
    }[];
  };
  socServiceTiersSection?: {
    subtitle: string;
    title: string;
    description: string;
    tiers: {
      name: string;
      subtitle: string;
      features: { text: string }[];
      isHighlighted?: boolean;
    }[];
  };
  socComplianceSection?: {
    subtitle: string;
    title: string;
    description: string;
    badges: string[];
  };
}

export const servicesDetailNewData: Record<string, ServiceDetailNewData> = {

  // Assessment
  "vulnerability-assessment": {
    id: "vulnerability-assessment",
    pageHero: {
      image: vulnerabilityHeroImg,
      titlePart1: "Vulnerability",
      titlePart2: "Assessments",
      description: "Identify & fix vulnerabilities in your network and applications."
    },
    whyUsSection: {
      badge: "Validate your Security Posture",
      titlePart1: "Our Vulnerability Assessment Service:",
      titlePart2: "Why us?",
      description: "Achieve awareness of your current security posture with vulnerability assessments that use the latest scanning technologies to identify vulnerabilities in your network and applications.",
      image: whyUsPlaceholderImg,
      cards: [
        {
          title: "Localized experience",
          description: "Get the assurance of testing and guidance tailored to your organizations unique needs and challenges, delivered in terms you understand.",
          icon: ShieldCheck,
        },
        {
          title: "Compliance Mapped",
          description: "Help achieve and maintain compliance against a range of cyber security standards including RMIT, TRM, PCI-DSS, ISO27001, NIST, and others.",
          icon: Security,
        },
        {
          title: "Exhaustive testing",
          description: "Rely on professionals whose skills and testing processes have been honed through years of experience protecting industry and government.",
          icon: Labs,
        },
        {
          title: "Security Assurance",
          description: "Identifying vulnerabilities before hackers find them and assure customers who have entrusted you with their data that you can protect their assets.",
          icon: Shield,
        },
        {
          title: "Always informed",
          description: "Stay ahead of threats with rapid reporting turnarounds with remediation's/mitigations, and regular communication on testing progress.",
          icon: Info,
        },
        {
          title: "Expert Assessments",
          description: "A multi-layered evaluation of your infrastructure to understand threats from internal and external attack points.",
          icon: Experts,
        },
      ]
    },
    scopeSection: {
      titlePart1: "Our Vulnerability Assessment:",
      titlePart2: "Scope",
      subtitle: "Vulnerability Assessment scanning against a wide range of systems",
      description: "Quickly identify, manage and reduce security issues and vulnerabilities with the most comprehensive vulnerability assessment of applications and infrastructure",
      items: [
        {
          title: "Network Vulnerability Assessment",
          content: "Network vulnerability assessments focus on scanning your network hosts, including connected devices, to identify known vulnerabilities. This can also include virtual environments and their host configurations.",
        },
        {
          title: "Application Vulnerability Assessment",
          content: "Application vulnerability assessments include testing your web or mobile applications against OWASP's Top 10 most prevalent vulnerabilities. Testing can be performed as an authorised or unauthorised (with or without credentials) user.",
        },
        {
          title: "Wireless Network Vulnerability Assessment",
          content: "Wireless network vulnerability assessments test for the presence of unauthorised wireless access points and review the security posture of your wireless network.",
        },
      ]
    }
  },
  "penetration-testing": {
    id: "penetration-testing",
    pageHero: {
      image: PentestHero,
      titlePart1: "Penetration",
      titlePart2: "Testing",
      description: "Safely Exploit & Fix vulnerabilities in your network and applications."
    },
    whyUsSection: {
      badge: "Find & Fix before hackers exploit it",
      titlePart1: "Our Penetration Testing Service:",
      titlePart2: "Why us?",
      description: "Secure your network and applications by identifying, safely exploiting to validate the exploitability, and remediate / mitigate vulnerabilities to reduce your organizations' risk exposure.",
      image: whyUsPlaceholderImg,
      cards: [
        {
          title: "Localized experience",
          description: "Get the assurance of testing and guidance tailored to your organizations unique needs and challenges, delivered in terms you understand.",
          icon: ShieldCheck,
        },
        {
          title: "Compliance Mapped",
          description: "Help achieve and maintain compliance against a range of cyber security standards including RMIT, TRM, PCI-DSS, ISO27001, NIST, CREST, and others.",
          icon: Security,
        },
        {
          title: "Exhaustive testing",
          description: "Rely on certified professionals whose manual hacking skills and testing processes have been honed through years of experience protecting industry and government.",
          icon: Labs,
        },
        {
          title: "Avoid the Avoidable",
          description: "Avoid the business disruption, escalating costs, legal ramifications, and reputational damage that result from avoidable cyber-attacks and breaches.",
          icon: Tactic,
        },
        {
          title: "Always informed",
          description: "Stay ahead of exploits with rapid reporting turnarounds with remediation's/mitigations, and regular communication on testing progress based on risk severity.",
          icon: Info,
        },
        {
          title: "Expert Assessments",
          description: "A multi-layered manual and automated penetration testing of your infrastructure to understand threats from internal and external attack points.",
          icon: Experts,
        },
      ]
    },
    statisticsSection: {
      badge: "A Reality Check",
      bg: GroupBgGradient,
      title: "Pentest Statistics",
      description1: "Specialized in penetration testing, a third of our customers are medium-sized or intermediate companies, and the rest are divided between large companies and SMBs in various sectors.",
      description2: "From few hundred penetration tests conducted across ASEAN during 2021 and about 40% of the pentest performed for repeat clients, following is a quick statistics on severity and average amount of vulnerabilities found:",
      stats: [
        { value: "64%", label: "Number of assets that had at least one critical vulnerability" },
        { value: "72%", label: "Number of assets that had one or more Severe vulnerabilities" },
        { value: "60", label: "Number of assets that had one or more Moderate vulnerabilities" },
        { value: "81%", label: "Number of assets that had Critical or Moderate or Severe vulnerabilities" }
      ]
    },
    scopeSection: {
      titlePart1: "Our Penetration Testing Services:",
      titlePart2: "Scope",
      subtitle: "Safely Exploit & Assess to Remediate / Mitigate Vulnerabilities",
      groups: [
        {
          groupTitle: "Application Penetration Testing",
          items: [
            {
              title: "Web Application Penetration Testing",
              content: "Modern organisations rely on a range of web-based applications to function. Whether these are used by staff to carry out their work, or customers as they interact with your organisation, it is essential to ensure your web applications are operating securely to safeguard against data loss and costly breaches."
            },
            {
              title: "Mobile Application Penetration Testing",
              content: "Mobile applications are now commonplace as staff and customers rely on mobile devices to work and interact with organisations. With mobile applications collecting and transferring so much sensitive data, it is vital to make sure they are secure."
            },
            {
              title: "Web Services Penetration Testing",
              content: "Web services, such as APIs, connect multiple systems within your network, allowing them to communicate with each other. With web services transferring valuable data, it is essential to ensure they are not vulnerable to attack."
            },
            {
              title: "Thick Client Penetration Testing",
              content: "Many organisations still operate thick client applications within their environment. Testing of these applications involves both the local client and the server-side processing software to ensure that sensitive information is stored and processed securely."
            },
            {
              title: "Enterprise Breach Assessment or SOE Penetration Testing",
              content: "A penetration test against your enterprise's standard operating environment (SOE) involves testing your operating systems and all associated software. The aim is to determine the risk of a breach and whether you are vulnerable to a range of attacks and data exfiltration."
            }
          ]
        },
        {
          groupTitle: "Network Penetration Testing",
          items: [
            {
              title: "External Network Penetration Testing",
              content: "The external perimeter of your network is your first line of defense against cyber attacks. Prevent unauthorised intrusions of your network's perimeter with comprehensive external penetration testing."
            },
            {
              title: "Internal Network Penetration Testing",
              content: "Internal network penetration testing assesses your susceptibility to compromise from within your environment. Regular internal network testing helps to understand and limit the damage caused from compromised internal asset and/or from someone inside your network, including by a potentially disgruntled employee."
            },
            {
              title: "Wireless Network Penetration Testing",
              content: "Wireless technologies offer great convenience but also present enhanced risk if not adequately secured. It is essential to safeguard wireless networks from vulnerabilities in the security controls, including misconfigured access points and weak security protocols."
            },
            {
              title: "OT, SCADA and IoT Penetration Testing",
              content: "Transport networks, utilities and manufacturing rely extensively on operational technology (OT), industrial control systems (ICS) and supervisory control and data acquisition (SCADA) systems to function efficiently. These systems, as well as the explosion of Internet of Things (IoT) connected devices, have become increasingly vulnerable to attack. Testing of these systems in a controlled and thoughtful manner can reduce the risk of potentially disastrous consequences due to compromise."
            }
          ]
        },
        {
          groupTitle: "Physical Environment & People Penetration Testing",
          items: [
            {
              title: "Physical Penetration Testing",
              content: "Securing physical premises is just as important as preventing digital breaches. Attackers may gain access to computers or servers. Alternatively, they may deliver malware via physical devices such as USB sticks. Testing is important to ensure physical intruders are prevented from attacking your systems."
            },
            {
              title: "Social Engineering Assessment",
              content: "Your staff can be your greatest asset in staying secure. With so many cyber-attacks, such as phishing, succeeding due to human error, it is more important than ever to ensure you know the extent to which your team understands cyber security. Carefully crafted and focused social engineering assessments are an excellent option to identify weaknesses and build a cyber resilient workforce."
            },
            {
              title: "OSINT Assessment",
              content: "As cyber-attacks become increasingly sophisticated, hackers are conducting more reconnaissance than ever to launch highly targeted attacks. Knowing and restricting information in the public domain about your organisation and key people is important in anticipating likely points of attack against you and helping you to plan appropriate defences."
            }
          ]
        }
      ]
    }
  },
  "app-security-services": {
    id: "app-security-services",
    pageHero: {
      image: AppSecurityHero,
      titlePart1: "Application",
      titlePart2: "Security Services",
      description: "Ensure your applications are planned, designed and built securely"
    },
    whyUsSection: {
      badge: "Validate your Security Posture",
      titlePart1: "Our Application Security Services:",
      titlePart2: "Why us?",
      description: "Achieve awareness of your current security posture with vulnerability assessments that use the latest scanning technologies to identify vulnerabilities in your network and applications.",
      image: whyUsPlaceholderImg,
      cards: [
        {
          title: "Security Assurance",
          description: "Achieve peace of mind that applications are designed and built securely, critical business and customer data is protected, and application risks managed.",
          icon: ShieldCheck,
        },
        {
          title: "Compliance Mapped",
          description: "Help achieve and maintain compliance against a range of cyber security standards including RMIT, TRM, PCI-DSS, ISO27001, NIST, CREST and others.",
          icon: Security,
        },
        {
          title: "Resilient Applications",
          description: "Reduce your risk exposure with the knowledge that your applications are resilient to compromise attempts.",
          icon: Approved,
        },
        {
          title: "Competitive Advantage",
          description: "Demonstrate to customers that the security of their confidential data is taken seriously.",
          icon: BoxCheck,
        },
        {
          title: "Cost Savings",
          description: "Reduce long-term expenditure on application maintenance and vulnerability remediation by using proven secure coding practices and methods.",
          icon: MoneyCheck,
        },
        {
          title: "Expert Assessments",
          description: "A multi-layered evaluation of applications and source code to identify attack points that may elude automated SAST and DAST tools.",
          icon: Experts,
        },
      ]
    },
    scopeSection: {
      titlePart1: "Our Application Security Services:",
      titlePart2: "Scope",
      subtitle: "End-to-End Application Security Services",
      description: "We work with you to determine what you need to achieve from your applications and tailor our services to help you realize your application security goals",
      items: [
        {
          title: "DevSecOps consulting",
          content: "DevSecOps consulting offers expert guidance tailored to suit your organisation's specific application design and development needs. Whether you're looking to establish agile software development processes, security documentation, architectural advice or compliance preparation and assistance, our consultants will help you achieve all your application security goals."
        },
        {
          title: "Secure SDLC Framework Development",
          content: "Defining appropriate secure development standards and processes is a key requirement in enabling application development to align with project specific or broader organizational security goals. Alignment is important to ensure that a solid security baseline is established across all developed applications and those that are planned."
        },
        {
          title: "Secure SDLC Maturity Review",
          content: "An independent review of your software development lifecycle (SDLC) practices and identify current challenges and provide clear pathways to uplift SDLC processes to improve application security. The SDLC maturity review seeks to align organizational practices with industry best practice, including the OWASP Software Assurance Maturity Model (SAMM)."
        },
        {
          title: "Secure Code Review",
          content: "Secure applications are built using secure source code. A secure code review identifies security flaws in code early in the development lifecycle. This includes identifying weaknesses that may allow exploitation or abuse of the application."
        },
        {
          title: "Threat Modelling",
          content: "Threat modelling activities are optimally undertaken in the early planning stages of application development. It is a formal process to identify risks to data, likely adversaries and potential threats and attack vectors."
        }
      ]
    }
  },
  "red-purple-teaming": {
    id: "red-purple-teaming",
    pageHero: {
      image: RedPurpleHero,
      titlePart1: "Red & Purple",
      titlePart2: "Teaming",
      description: "Improve your ability to defend against attack."
    },
    whyUsSection: {
      badge: "Strengthen Your Defenses. Secure your Infrastructure.",
      titlePart1: "Red & Purple Teaming Services:",
      titlePart2: "Why us?",
      description: "The long-term value of a red & purple teaming engagement comes from choosing an attack simulation partner who understands your business, your security, and your regulatory concerns while executing the engagement in a context that drives strategic business decisions.",
      image: whyUsPlaceholderImg,
      cards: [
        {
          title: "Greater Awareness",
          description: "Gain awareness into your organization's resilience in the face of a determined cyber intrusion. You will achieve invaluable insight into your incident detection and response capabilities under real-world cyber-attack conditions.",
          icon: Telepathy,
        },
        {
          title: "Enhance Reputation",
          description: "Engaging in Red Teaming demonstrates a commitment to commercial partners that your organization has a mature cyber security posture and that you prioritize safeguarding critical data.",
          icon: Rating,
        },
        {
          title: "Reduce Risk",
          description: "Red Teaming helps you understand the extent to which you could be vulnerable to a real-world attack, so you can implement risk mitigation strategies to reduce your exposure.",
          icon: ShieldWarning,
        },
        {
          title: "Actionable Remediation's",
          description: "Simulation report enables you to address areas of weakness in your defenses, so your organization will be prepared to detect and respond to future cyber threats.",
          icon: Prescription,
        },
        {
          title: "Uplift Skills",
          description: "Purple Teaming provides opportunity to internal team to demonstrate their skills in incident detection & response and identify areas where additional training and skills enhancement may be required.",
          icon: Skills,
        },
        {
          title: "Seasoned Team",
          description: "Experienced penetration testers rigorously test your environment by simulating both internal and external attacks covering the entire attack chain similar to how an adversary may breach your defenses.",
          icon: SeasonTeam,
        },
      ]
    },
    approachSection: {
      titlePart1: "Red & Purple Team Services:",
      titlePart2: "Our Approach",
      subtitle: "More than Attack Simulation",
      description: "Cybertronium red and purple teaming process is built from the ground up to give you adaptability, clarity and support, allowing you to act with confidence and enhance your defenses and skills.",
      bg: GroupBgGradient2,
      cards: [
        {
          title: "Tailored Terms of Engagement",
          description: "We adapt to your business needs and your level of security maturity. From OSINT (open source intelligence) gathering, to network reconnaissance, to custom social engineering and phishing campaigns, we test the effectiveness of your controls by simulating both internal and external threat actors across different attack domains.",
          icon: File,
        },
        {
          title: "Comprehensive, Actionable Findings",
          description: "Our adversarial simulation follows MITRE's Adversarial Tactics, Techniques, and Common Knowledge (ATT&CK) framework. Covering the entire attack chain, our goal is to provide a measurable effectiveness rating across the attack and defense surfaces to better inform strategic decision making.",
          icon: Search,
        },
        {
          title: "Ongoing Collaborative Support",
          description: "We partner with you to develop a strategy that is aligned with natural business cycles. The program can include Red Team, Social Engineering, Phishing, Penetration Testing, and Purple Team. We also provide support for strategic and tactical remediation and mitigation, so you can prevent and respond to real-world attacks, reducing risk.",
          icon: Strategic,
        }
      ]
    },
    featureSections: [
      {
        title: "Red Teaming",
        description1: "Adopting an adversarial approach, Red Teaming goes beyond standard penetration testing. By simulating the tactics used by real-world attackers, it seeks to identify and exploit any gaps in your defenses.",
        listHeader: "We adopt a variety of offensive tactics, including:",
        listItems: [
          "Reconnaissance using open-source intelligence (OSINT)",
          "Attempted physical intrusions and social engineering attacks",
          "Attempted breaches of your application layers",
          "Attacks against your networks"
        ],
        footerText: "Ideal for organizations with a mature security posture, periodic Red Teaming helps further enhance your preparedness to face any determined cyber threat.",
        image: RedTeam,
        imagePosition: "right"
      },
      {
        title: "Purple Teaming",
        description1: "Purple Teaming is a collaboration between our offensive Red Team and your defensive security personnel, or Blue Team.",
        description2: "The objective is to uplift your internal security team's readiness to respond to a real-world cyber-attack. Throughout the simulation, the Blue Team will gain experience analyzing logs, evaluating attacks and developing appropriate responses.",
        description3: "This enables your internal security team to gain a critical understanding of gaps in your security posture and helps identify areas for capability enhancement.",
        image: PurpleTeam,
        imagePosition: "left"
      }
    ]
  },
  "firmware-security": {
    id: "firmware-security",
    pageHero: {
      image: FirmwareHero,
      titlePart1: "Firmware",
      titlePart2: "Security",
      description: "Servers and laptops rely on over 100 firmware-dependent components, making firmware-level attacks highly dangerous and difficult to detect. Organizations without a proper firmware security and upgrade strategy remain vulnerable to device-level compromises and advanced cyber threats."
    },
    featureSections: [
      {
        subtitle: "Threats Below The Surface in High-Risk Devices",
        title: "Firmware Security",
        description1: "Cybertronium Vulnerability Scan Service detects critical firmware-level security vulnerabilities.",
        description2: "As cybersecurity improves, attackers are seeking new methods to subvert traditional security controls - going below the surface to penetrate vulnerable firmware and hardware components inside today's servers, laptops and networking equipment. Most organizations lack visibility into this attack surface. They can't easily see which hardware and firmware components are in their fleet or determine which devices are vulnerable to known threats - much less detect a hidden implant or backdoor. These blind spots allow attackers to subvert traditional security controls and persist undetected, leaving organizations exposed to device tampering, ransomware, and data breaches.",
        image: FirmwareIntro,
        imagePosition: "right"
      },
      {
        subtitle: "A Cybertronium Service",
        title: "Defend against Firmware Attacks",
        description1: "Cybertronium Firmware vulnerability scan service in partnership with Eclypsium provides visibility into firmware risk while verifying the integrity of systems and their components including servers and network infrastructure, as well as traditional end-user laptops. We enable organizations to augment and extend their existing security processes to include firmware security in the following key areas :",
        listItems: [
          {
            title: "Gain Visibility",
            content: "An organization must have visibility into its firmware and hardware before it can be protected. Our customers will get fine-grained insight into myriad hardware and firmware components within a device, including insight into the current firmware version."
          },
          {
            title: "Manage Risk",
            content: "Our scan will expose the firmware vulnerabilities, misconfigurations, and outdated code that can put devices at risk but are often invisible to traditional vulnerability scanners. Our team can remotely apply patches or updates to mitigate the risk."
          },
          {
            title: "Detect Threats",
            content: "Our scan automatically verifies system and component firmware integrity and includes the ability to detect known and unknown threats such as implants, backdoors, and rootkits."
          },
          {
            title: "Dynamic Response",
            content: "Our Enterprise solution can automatically notify staff of any changes to the device's integrity or security posture and trigger automated responses and playbooks via the powerful REST API."
          }
        ],
        image: FirmwareSecurity,
        imagePosition: "right"
      }
    ],
    sidebarGridSection: {
      sidebarImage: SidebarGrid,
      cards: [
        {
          title: "VPN & Network Devices Attacked",
          description: "In 2020, CISA issued multiple alerts detailing state-sponsored actors from China, Russia, and Iran, targeting vulnerable VPN controllers and Network Devices",
          icon: Solution,
        },
        {
          title: "Ransomware goes after Firmware",
          description: "By compromising or controlling the firmware / MBR, and seize fundamental control of the device while maintaining persistence and evading security controls.",
          icon: Bomb,
        },
        {
          title: "Criminals Target UEFI",
          description: "MosaicRegressor, a UEFI implant maintain persistence and deliver additional malware payloads to infected devices surviving across a full system re-imaging or even a physical drive replacement.",
          icon: Target,
        },
        {
          title: "Supply Chain breaches",
          description: "Firmware compromise in the supply chain before the eventual owner receives the device is difficult to detect as the earliest baseline state of the device is already compromised.",
          icon: SupplyChain,
        },
        {
          title: "IOT Devices Firmware Attacked",
          description: "In 2020, the notorious Mirai botnet experienced a resurgence by taking advantage of a vulnerability in F5 BIG-IP controllers to infect IoT and other Linux-based devices.",
          icon: Iot,
        },
        {
          title: "Firmware Vulnerabilities are rising",
          description: "BootHole vulnerability affects Windows and Linux-based systems and allows attackers to gain arbitrary code execution during the boot process, even when Secure Boot is enabled.",
          icon: Bomb,
        }
      ]
    },
    signUpSection: {
      title: "Sign Up Here",
      description: "We'll reach out to you via an email with relevant details."
    },
    partnersSection: {
      title: "Our Supporting Partners",
      description: "Collaborating with trusted technology and security partners to strengthen firmware protection, device integrity, threat intelligence, and enterprise-level cyber resilience across modern digital infrastructures.",
      partners: [SupportingPartners]
    }
  },
  "compromise-assessment": {
    id: "compromise-assessment",
    pageHero: {
      image: CompromiseAssessmentHero,
      titlePart1: "Compromise",
      titlePart2: "Assessment",
      description: "Discover hidden breaches and vulnerabilities in your network"
    },
    whyUsSection: {
      badge: "Hunt for evasions, Strengthen your Defenses, Secure your Infrastructure.",
      titlePart1: "Compromise Assessment Services:",
      titlePart2: "Why us?",
      description: "We evaluate your enterprise to confirm a suspected incident or provide a health check to determine if attackers have evaded your security measures. We apply our extensive knowledge of advanced attackers' tactics, tools, and techniques to provide a variety of compromise assessment services",
      image: whyUsPlaceholderImg,
      cards: [
        {
          title: "Non-Intrusive Assessment",
          description: "Non-intrusive forensic assessment of critical production services without downtime.",
          icon: Report,
        },
        {
          title: "360 Digital Forensics",
          description: "A complete 360-degree forensics and analysis coverage including on-prem, cloud, and mobile devices.",
          icon: Shield,
        },
        {
          title: "IOC Hunting",
          description: "Hunting for Indications of Compromise (IOCs) of specialized, evasive malware on your environment.",
          icon: ShieldWarning,
        },
        {
          title: "Malware Analysis",
          description: "Analysis team to dissect malware with APT capabilities and remediate in case of identification of intrusions.",
          icon: Target,
        },
        {
          title: "Anomaly Detection",
          description: "Timely identification and reporting of both malicious and anomalous activities.",
          icon: Analysis,
        },
        {
          title: "Seasoned Team",
          description: "Team with extensive knowledge of advanced attackers' tactics, tools, and techniques.",
          icon: SeasonTeam,
        },
      ]
    },
    scopeSection: {
      titlePart1: "Compromise Assessment:",
      titlePart2: "Use Cases",
      subtitle: "More than Attack Simulation",
      description: "The use cases below are just a small selection of examples, but there are many more that we would be happy to discuss with you.",
      items: [
        {
          title: "Breach & Compromise Detection",
          content: "When investigating a potential breach, compromise assessment is vital. A full review will highlight any current or historical breaches that you may be unaware of, as well as identify any weaknesses or vulnerabilities present within your system, and infrastructure."
        },
        {
          title: "Cyber Posture Evaluation",
          content: "An in-depth evaluation of your existing cyber security posture will highlight any previously undetected vulnerabilities within your network. This provides your team with a perfect springboard for patch management improvements and vulnerability remediation's."
        },
        {
          title: "Regulatory Compliance Measures",
          content: "Compromise assessment can provide valuable assistance when meeting or maintaining regulatory and compliance standards. Our thorough documentation can be used for regulatory assessments and will contribute to any vulnerability management requirements."
        },
        {
          title: "Third-Party Risk Evaluation",
          content: "Our compromise assessment service provides valuable reassurance and demonstrates due diligence to your business partners, regulated industry customers and collaborators. Regular assessments maintain and build this trust, showing you are not exposed to any unnecessary cyber threats or vulnerabilities."
        },
        {
          title: "Cyber Insurance",
          content: "For businesses operating within the insurance industry, regular compromise assessments on customer environment can be useful when providing/renewing cyber insurance policies to customers. They will highlight the likelihood of a customer experiencing a breach, allowing underwriters to make more informed policy decisions."
        },
        {
          title: "Mergers & Acquisitions",
          content: "Before a merger or acquisition is completed, a compromise assessment can assist in cyber security due diligence. The assessment report will assist in understanding existing vulnerabilities, past breaches or compromises that could affect the deal and provide an indication of potential cyber security risk."
        }
      ]
    }
  },
  "cybersecurity-maturity-assessment": {
    id: "cybersecurity-maturity-assessment",
    pageHero: {
      image: CybersecurityMaturityHero,
      titlePart1: "Cybersecurity Maturity",
      titlePart2: "Assessment",
      description: "Access readiness to Detect, Defend and Respond."
    },
    whyUsSection: {
      badge: "Evaluate & Transform your organisation's Cyber Maturity",
      titlePart1: "Cybersecurity Maturity Assessment:",
      titlePart2: "Why us?",
      description: "Our Cyber Security Maturity Assessment (CSMA) is a comprehensive risk assessment of your organisation's readiness to prevent, detect, contain, and respond to threats to information assets.",
      image: whyUsPlaceholderImg,
      cards: [
        {
          title: "Gap analysis",
          description: "Our experts analyse your current security posture to assess your cybersecurity readiness and incident response across all areas of people, processes, and technology.",
          icon: Analysis,
        },
        {
          title: "NIST Maturity Assessment",
          description: "We conduct a detailed review of policy documentation and operational procedures to check alignment with the five key domains prescribed by NIST framework.",
          icon: Report,
        },
        {
          title: "Maturity Assessment Report",
          description: "We provide an assessment report with advice on how to fill security gaps in your current posture. Our experts work with you to produce a clear and prioritised cyber maturity plan, delivering a cyber transformation roadmap and timeline.",
          icon: Report,
        },
        {
          title: "Monitor progress and posture",
          description: "We work with you as your organisation's cybersecurity maturity improves. As your business grows, changes to security controls may be required. We ensure your organisation continue to remain protected and aligned to NIST framework.",
          icon: Computer,
        },
        {
          title: "Neutral Guidance",
          description: "We are completely impartial, we will offer you in-depth advice based on your needs rather than looking to push a particular software solution.",
          icon: Directions,
        },
        {
          title: "Seasoned Team",
          description: "Our experts will work as an extension of your team, offering expertise so your business is truly compliant with industry standards.",
          icon: SeasonTeam,
        },
      ]
    },
    scopeSection: {
      titlePart1: "Cybersecurity Maturity Assessment:",
      titlePart2: "Our Approach",
      subtitle: "Achieve business objectives, manage risk, build trust and measure performance",
      description: "Our CSMA is a consultative process that focuses on People, Process and Technology. Our approach will help you understand the gaps that exist between your present and ideal future state. Once we have identified these gaps, you will be better placed to create specific action plans to close the gaps and move towards your security goals. Key steps in our approach include:",
      items: [
        {
          title: "Establish Scope",
          content: "We define the scope of the work and all components within it including hardware, software, and locations."
        },
        {
          title: "Identify & Collect",
          content: "We gather all current documentation including policies, procedures, standards, and guidelines."
        },
        {
          title: "Review",
          content: "We review all information gathered and evaluate it based on industry standards and frameworks, example: NIST"
        },
        {
          title: "Collaboration",
          content: "We interview, discuss, and engage with relevant stakeholders to understand and document how your business and IT processes are aligned."
        },
        {
          title: "Designate Gaps",
          content: "We provide an expert view on the gaps identified and make comparisons between your current security practices and the goals identified by the CSMA."
        },
        {
          title: "Present Gaps",
          content: "We walk your stakeholders through the list of gaps identified during the assessment. We then advise on the steps/plans required to attain the optimum level of security."
        }
      ]
    }
  },

  // Consulting
  "digital-forensics-and-incident-response": {
    id: "digital-forensics-and-incident-response",
    pageHero: {
      image: DFIRhero,
      titlePart1: "Digital Forensics &",
      titlePart2: "Incident Response",
      description: "Thoughtful Investigations, Confident Responses, Assured Recovery."
    },
    whyUsSection: {
      badge: "Experts in cyber investigations",
      titlePart1: "Cybertronium Digital Forensics & Incident Response:",
      titlePart2: "Why us?",
      description: "When the unexpected happens, you need a team with broad expertise and technical skills to help you to minimize impact and bounce back. That means acting quickly to control the situation, understand the full extent of the incident and respond with confidence.",
      image: whyUsPlaceholderImg,
      cards: [
        {
          title: "Thorough investigation, rapid response",
          description: "Internationally recognized experts with local insight who understand that responding to a critical incident requires more than technical expertise, and who provides truly end to end capability across cyber incident coordination, crisis communications, digital forensic investigations, cyber incident response, ransomware recovery and complete system restoration.",
          icon: DetectResponseIcon1,
        },
        {
          title: "Understanding the context & the impact",
          description: "Drawing on over twenty years’ experience responding to critical incidents for myriad of customers, our experts distil the complexity to focus on the incident and its true business impacts and pragmatic outcomes and thus speeding up the response to bring your business / systems back into operations with minimal impact to customers and with investigation report for further actions.",
          icon: VendorNeutralIcon1,
        },
        {
          title: "Supporting your complete business recovery",
          description: "Our response services don’t stop when the situation is contained. Cybertronium can provide the advice, resources and support to help ensure that similar incidents won’t happen again. From our experience, we know that bouncing out of an incident is only a first step, taking actions to make sure that same or similar incident do not happen again is the ultimate goal.",
          icon: ICSIcon1,
        }
      ]
    },
    scopeSection: {
      titlePart1: "Cybertronium Digital Forensics &",
      titlePart2: "Incident Response",
      useGradientTitle: true,
      subtitle: "Identify, understand, and recover from attack.",
      items: [
        {
          title: "Cyber Incident Response",
          content: "Using our proven incident response methodology to thoroughly investigate attacker activities, from how they compromised the network and moved around, to identifying exactly what data they accessed and exfiltrated.\n\nKey elements include:\n\n  • Threat hunting across networks to identify the full scope of compromise\n  • Deep forensic analysis of compromised systems to understand attacker activities\n  • Applying a range of advanced digital forensic and response tools and methods\n  • Reconstructing each step of the attack chain, from exploitation to actions on targets\n  • Comprehensive monitoring of log sources, endpoint activity and network data\n  • Application of curated cyber threat intelligence from internal and external sources\n  • Developing custom indicators and scanning networks for other infected hosts\n  • Vulnerability scanning to identify known weaknesses and help remediation\n  • Malware analysis and reverse engineering to understand malware capabilities\n  • Liaison with law enforcement, regulators and other external agencies\n  • Working in collaboration with legal counsel and cyber insurers\n  • Explaining what it all means in clear and concise terms for maximum understanding."
        },
        {
          title: "Crisis Management and Response",
          content: "The most critical elements of a successful incident response include controlling the situation, coordinating the activities of everyone involved, managing stakeholders and controlling communications.\n\nThe Cybertronium team provides deep expertise with communication management and incident coordination, drawn from the highest levels of government and industry. We help our clients take control of incidents and navigate through the hurdles with confidence, resulting in outcomes which protect, and in some cases strengthen our client’s corporate profiles and resilience."
        }
      ]
    }
  },
  "secure-digital-transformation": {
    id: "secure-digital-transformation",
    pageHero: {
      image: SDThero,
      titlePart1: "Secure",
      titlePart2: "Digital Transformation",
      description: "Digital First, Cloud Forward, Secure by Design."
    },
    whyUsSection: {
      badge: "Secure Infrastructure, Empowering Innovation",
      titlePart1: "Our Secure Digital Transformation Services:",
      titlePart2: "Why us?",
      description: "Stay ahead of the shift towards automation, scalability, security and resilience to help grow and accelerate your business through actionable business and data insights.",
      image: whyUsPlaceholderImg,
      cards: [
        {
          title: "Embracing the cloud",
          description: "Migrate all your services to the best-fit cloud aligning to best practices.",
          icon: ShieldCheck,
        },
        {
          title: "Cloud Security",
          description: "Secure IaaS, PaaS & SaaS services, applications and data against theft, leakage and deletion.",
          icon: Security,
        },
        {
          title: "Data Security",
          description: "Adopt best of breed cloud data practices & processes to become a secure data-driven business.",
          icon: Labs,
        },
        {
          title: "Managed Security",
          description: "Focus on innovation, not maintenance, with a fully managed security service for your infrastructure.",
          icon: Tactic,
        },
        {
          title: "Secure by Design",
          description: "We accomplish this by automating and orchestrating security control configuration and aligning to the regulatory controls relevant to your industry.",
          icon: Info,
        },
        {
          title: "Trusted Advisors",
          description: "We combine our skills, experience & expertise across the entire cloud portfolio to help mitigate risks, reduce costs, and provide time to value to meet your objectives.",
          icon: Experts,
        }
      ]
    },
    scopeSection: {
      titlePart1: "Our Secure Digital Transformation Services:",
      titlePart2: "Scope",
      subtitle: "Secure by design digital transformation services",
      description: "Digital transformation is an ongoing process for every business, no matter the size. To avoid unnecessary risk, complexity and costs, an experienced partner is invaluable in maintaining and guiding your secure digital transformation initiatives toward success.",
      items: [
        {
          title: "Digital Strategy",
          content: "The first steps into cloud are often the hardest. Determining how to effectively migrate business critical systems whilst maintaining uptime, performance and security is a real challenge.\n\nWe help organizations to define and deliver tangible digital strategies."
        },
        {
          title: "Cloud Native Engineering",
          content: "We work with your security team to deliver cloud-based security controls and event driven DevSecOps techniques to ensure your security posture is maintained without slowing down innovation.\n\nWe provide a wealth of knowledge and expertise across the public cloud platforms (Azure, AWS & Huawei). Through the adoption of DevSecOps best practices, we can provide a range of automated build, configuration and deployment services. This includes integrated security testing, monitoring and continuous compliance. We also have established relationships with leading vendors in the continuous integration (CI) / continuous delivery (CD) space."
        },
        {
          title: "Cloud Security Consulting",
          content: "Whether you’re considering a move to the cloud or already have robust cloud operations, we understand the complexities of your business and the cloud. Our experts will assist you to operate smoothly in the cloud and satisfy security and regulatory concerns.\n\nVisit /services/cloud-security-consulting for more details"
        },
        {
          title: "Cloud Detection and Response",
          content: "Organizations adopting multiple cloud platforms and services struggle to configure even basic security controls, logging, and monitoring exposing Cloud assets to attackers.\n\nSign up for 24x7 security coverage by our dedicated team.\n\nVisit /services/cloud-detection-response for more details."
        }
      ]
    }
  },
  "ciso-as-a-service": {
    id: "ciso-as-a-service",
    pageHero: {
      image: CiSOhero,
      titlePart1: "vCISO as a",
      titlePart2: "Service",
      description: "Virtual Chief Information Security Officer"
    },
    imageApproachSection: {
      title: "Engage your vCISO, Today!",
      description: "Discover how your vCISO expertly navigates you through every critical phase of your cybersecurity journey. Unlock a strategic, step-by-step enforcement of your cybersecurity with a pre-dedicated virtual Chief Information Security Officer (vCISO).",
      image: whyUsIntroImg1,
      rightTitle: "Look no further.\nGet your expert guide from us!",
      cards: [
        {
          title: "Grasping Your Organization's Essence",
          description: "Your vCISO thoroughly assesses your business and regulatory landscape to craft a customized, effective security strategy tailored to your unique needs."
        },
        {
          title: "Evaluating Risk to Strengthen Security",
          description: "Your vCISO evaluates mission-critical assets to identify and prioritize risks, ensuring quick mitigation and an enhanced security posture."
        },
        {
          title: "Crafting a Robust Strategy",
          description: "After assessing risks, your vCISO creates a security and compliance strategy using ISO 27001 and SOC-2 TSC standards, incorporating trends like zero-trust architecture."
        },
        {
          title: "Precision Strategy Implementation",
          description: "With a deep understanding of your organization, your vCISO implements the cybersecurity strategy, enhances controls, and serves as the primary contact for executive management to address cybersecurity challenges."
        }
      ]
    },
    scopeSection: {
      titlePart1: "Why choose us as your",
      titlePart2: "vCISO?",
      useGradientTitle: true,
      subtitle: "We are ready to offer you the best of our help",
      items: [
        {
          title: "Affordable Expertise, Unmatched Value",
          content: [
            {
              title: "Access Elite Security Leadership",
              text: "Benefit from the insights and experience of a Chief Information Security Officer."
            },
            {
              title: "Cost-Effective Solution",
              text: "Obtain top-tier cybersecurity leadership at a fraction of the cost of hiring an in-house executive."
            },
            {
              title: "Resource Optimization",
              text: "Allocate your budget to critical areas while maintaining high-level security guidance."
            },
            {
              title: "Premier Protection",
              text: "Ensure your organization is safeguarded with seasoned expertise and strategic oversight."
            }
          ]
        },
        {
          title: "Rapid Onboarding, Immediate Impact",
          content: [
            {
              title: "Efficient Deployment",
              text: "Get your vCISO onboarded swiftly, within days, not weeks."
            },
            {
              title: "Immediate Cybersecurity Enhancement",
              text: "Address critical security challenges without delay."
            },
            {
              title: "Streamlined Process",
              text: "Ensure quick integration and start benefiting from expert cybersecurity guidance promptly."
            },
            {
              title: "Timely Solutions",
              text: "Rapid deployment means timely resolution of cybersecurity issues and proactive risk management."
            }
          ]
        },
        {
          title: "Assured Competency, Rigorous Standards",
          content: [
            {
              title: "Highly Qualified vCISOs",
              text: "Connect with vCISOs possessing extensive industry knowledge and expertise."
            },
            {
              title: "Stringent Vetting Process",
              text: "Each vCISO undergoes rigorous vetting to ensure excellence and competency."
            },
            {
              title: "Tailored Cybersecurity Solutions",
              text: "Benefit from vCISOs adept at navigating your specific cybersecurity challenges."
            },
            {
              title: "Peace of Mind",
              text: "Rest assured with guaranteed competence and effective cybersecurity leadership."
            }
          ]
        },
        {
          title: "Complete Cybersecurity Coverage",
          content: [
            {
              title: "Holistic Approach",
              text: "Address all aspects of cybersecurity, including risk management, incident response, compliance, and employee training."
            },
            {
              title: "Comprehensive Solutions",
              text: "Our vCISOs provide thorough coverage tailored to your organization's specific needs."
            },
            {
              title: "Expert Guidance",
              text: "Benefit from seasoned expertise in navigating diverse cybersecurity challenges."
            },
            {
              title: "End-to-End Protection",
              text: "Ensure robust protection across all fronts with comprehensive cybersecurity strategies and implementation."
            }
          ]
        },
        {
          title: "Evidence-Based Consultancy",
          content: [
            {
              title: "Effortless Compliance",
              text: "Align seamlessly with industry standards."
            },
            {
              title: "CIS Controls Implementation",
              text: "Benefit from expertise in CIS Critical Security Controls (IG1, IG2, IG3)."
            },
            {
              title: "Broad Spectrum Protection",
              text: "Implement essential to advanced safeguards."
            },
            {
              title: "Fortified Cyber Defenses",
              text: "Strengthen your defenses against a wide range of threats."
            }
          ]
        }
      ]
    }
  },
  "strategy-and-consulting": {
    id: "strategy-and-consulting",
    pageHero: {
      image: Stratergyhero,
      titlePart1: "Strategy &",
      titlePart2: "Consulting",
      description: "Secure your organization while improving efficiency and revenue"
    },
    whyUsSection: {
      badge: "We Minimize risk, improve resilience and create value for your organization",
      titlePart1: "Our Strategy & Consulting Services:",
      titlePart2: "Why us?",
      description: "Strategic guidance from the best multi-disciplined experts and industry leaders in the cyber security market. We can help plan, implement and optimize your cyber security investments at scale, while providing insights to accelerate growth and profitability.",
      image: whyUsPlaceholderImg,
      cards: [
        {
          title: "End-to-End Guidance",
          description: "Whether you’re taking your first steps to plan a more secure business, or want more value from your existing investments, we’re with you every step of the way.",
          icon: ShieldCheck,
        },
        {
          title: "Compliance Mapped",
          description: "Help achieve and maintain compliance against a range of cyber security standards including RMIT, TRM, PCI-DSS, ISO27001, NIST, and others.",
          icon: Security,
        },
        {
          title: "Boost Resilience",
          description: "Gain the expertise and guidance to build fit for purpose cyber security into the fabric of your organization, for greater resilience.",
          icon: Labs,
        },
        {
          title: "Reduce Risks",
          description: "Draw on the knowledge of our most experienced cyber security specialists to identify, manage and minimize risks to your business.",
          icon: Tactic,
        },
        {
          title: "Accelerate Growth",
          description: "Identify and take advantage of opportunities to drive efficiency, growth and profitability from more streamlined and seamless cyber security practices.",
          icon: Info,
        },
        {
          title: "Trusted Advisors",
          description: "Our seasoned strategists, industry experts and multi-disciplined consultants understand your challenges and opportunities, and how to tackle them.",
          icon: Experts,
        }
      ]
    },
    scopeSection: {
      titlePart1: "Our Strategy & Consulting Services:",
      titlePart2: "Scope",
      subtitle: "End-to-End Strategic Guidance",
      description: "Cyber security has never been more critical to building resilient organizations. However, protecting your organization’s valuable assets is becoming more complex daily. Cybertronium Strategy and Consulting puts leading cyber security experts by your side to help navigate this complexity, minimizing risk, improving resilience, and creating value.",
      items: [
        {
          title: "Strategic Cyber Counsel",
          content: "Navigate complexity with end-to-end guidance from leading cyber security advisors, translating technology challenges into meaningful business outcomes, while helping you build resilience.\n\n  • C-Suite and Board partnerships\n  • Security transformation strategy\n  • Cyber security strategy\n  • Cyber security framework\n  • Cyber security gap analysis and remediation strategy\n  • Breach reporting\n  • Regulatory support and data security advisory"
        },
        {
          title: "Secure Ecosystems",
          content: "Anticipate and minimize risk from your partners, vendors, customers, and stakeholders, improving your ecosystem design to ensure business continuity.\n\n  • Building ecosystem resilience\n  • Strategic risk advisory and cyber architecture\n  • Legal and advisory services to minimize partner/alliance risk"
        },
        {
          title: "CISO as a Service",
          content: "Achieve cyber outcomes by leveraging our CISO as a Service offering. Engage a key senior-level executive capable of interpreting and translating complex technology and cyber issues into the language of business. Our CISOs are both digital and business natives, who are focused on effectively and efficiently managing cyber risk.\n\nWe specialise in safeguarding and supporting:\n  • Corporate brand and reputation\n  • Cyber investment roadmaps\n  • Strategic and operational cyber plans\n  • Information assets and ICT systems\n  • Data privacy and compliance\n  • Partner/vendor negotiations and advisory"
        }
      ]
    }
  },
  "mobile-threat-defense": {
    id: "mobile-threat-defense",
    pageHero: {
      image: MTDhero,
      titlePart1: "Mobile Threat Defense",
      titlePart2: "zIPS",
      description: "Browse in peace, No matter what mobile device, zIPS has your back. Use your phone, worry-free."
    },
    sidebarGridSection: {
      badge: "Secure Mobile Devices & Protect your Identity!",
      titlePart1: "Mobile Threat Defense for",
      titlePart2: "Consumers",
      description: "ZIPS is an advanced mobile threat defense solution for Consumers and Enterprises that provides persistent, on-device protection for mobile devices of all OS. Leveraging Zimperium z9, zIPS detects threats across the kill chain: device, network, phishing, and app attacks.\n\nYou can ease your mind now. We got your mobile device security covered.. 100% of zIPS customers detected mobile device threats with z9. Zimperium’s z9 is the only on-device, machine learning-based security engine that can stop zero-day threats in the wild without an update.",
      sidebarImage: whyUsIntroImg1,
      cards: [
        {
          title: "Machine Learning (ML)",
          description: "On-device, ML based detection provides prevention against the latest mobile threats, including zero-day malware.",
          icon: Vector,
        },
        {
          title: "Privacy Focused",
          description: "With a privacy first approach, Zimperium enables security without sacrificing the end user’s personal data.",
          icon: Vector1,
        },
        {
          title: "Continuous, on-device Monitoring",
          description: "Real-time detection without signatures, a cloud-based sandbox or even an Internet connection.",
          icon: Vector2,
        },
        {
          title: "Complete Mobile Coverage",
          description: "From tablet to phones, zIPS provides complete security coverage across Android, iOS, and ChromeOS.",
          icon: Vector3,
        },
        {
          title: "Support Zero Trust",
          description: "zIPS enables SOC & IR teams with the critical mobile threat and risk data necessary to support modern Zero Trust architectures with unmatched threat forensics.",
          icon: Vector5,
        },
        {
          title: "Simple Deployment",
          description: "Deploy and activate zIPS to your employees and customers mobile endpoints without the need for complicated activation steps by the end user.",
          icon: Vector4,
        }
      ]
    },
    bentoGridSection: {
      leftCards: [
        {
          titlePart1: "Why Hackers Target",
          titlePart2: "Mobile Endpoints?",
          description: "Mobile endpoints have access to the same data as traditional endpoints. The number of reported cyber-attacks has doubled every 6 months for the last three years. Most mobile endpoints are unprotected and make easy targets.",
          linkText: "Learn More",
          linkUrl: "#"
        },
        {
          titlePart1: "Why Anti-virus Cannot",
          titlePart2: "Protect Mobile Endpoints?",
          description: "Blind and ineffective due to locked down kernels in mobile OS’s because they rely on kernel access for detection and no ability to detect risky or malicious networks. Cannot assess privacy and security risks in legitimate (non-malicious) mobile apps.",
          linkText: "Learn More",
          linkUrl: "#"
        }
      ],
      rightCard: {
        title: "Mobile Threat Defense (MTD) ?",
        description: "Mobile threat defense (MTD) solutions are aimed at protecting individuals / organizations from threats on iOS, Android and Chrome devices by preventing, detecting and remediating mobile attacks.",
        linkText: "Learn More",
        linkUrl: "#",
        image: whyUsPlaceholderImg3
      }
    },
    featureSections: [
      {
        subtitle: "zIPS",
        title: "Comprehensive Mobile Threat Defense",
        useGradientTitle: true,
        description1: "Your devices are protected against advanced phishing, device, network, and application cyber-attacks in real-time. Comprehensive mobile threat defense against more than 40 known attack vectors, as well as detection and mitigation of new ones that haven’t yet been discovered.",
        listItems: [
          {
            title: "Phishing Attacks",
            content: "On mobile devices, email, SMS, and even messaging apps are susceptible to phishing attacks."
          },
          {
            title: "Device Attacks",
            content: "OS/kernel exploits, system tampering, SD card exploits, USB charger cable exploits."
          },
          {
            title: "Network Attacks",
            content: "Reconnaissance scans, Man-in-the-Middle to steal data, SSL stripping, SSL decryption attempts, rogue access points."
          },
          {
            title: "App Attacks",
            content: "Malicious apps, known and unknown malware, dynamic threats abusing download and exploit techniques."
          }
        ],
        footerText: "When a threat is detected, end-users receive contextual alerts and recommendations to help remediate the situation. For Enterprise customers, the platform also notifies the security team to keep them informed.",
        image: whyUsPlaceholderImg2,
        imagePosition: "right"
      },
      {
        subtitle: "Solutions Designed for the Needs of Your Organization",
        title: "Industry-Specific Protection",
        useGradientTitle: true,
        increaseImageHeight: true,
        inlineListItems: true,
        description1: "Today, employees have more mobile devices than traditional endpoints and use them to perform business functions more than they do their laptops or desktops. Conventional IT approaches used for securing corporate networks, servers, applications and company-owned computers don’t address the exposure of the growing, highly distributed mobile attack surface. Just one compromised mobile device can spread into a very costly security breach for an enterprise.",
        listItems: [
          {
            title: "Financial",
            content: "Securing Mobile banking, payments, financial services and investments."
          },
          {
            title: "Government",
            content: "Solutions designed specifically for Federal, State, Local and Educational organizations."
          },
          {
            title: "Healthcare",
            content: "Securing private health information in patient apps and on devices in medical facilities and outpatient care."
          },
          {
            title: "Insurance",
            content: "Support agents and field claims worker devices with better protection against rogue networks, malware and data breaches."
          },
          {
            title: "Legal",
            content: "Stay productive while keeping privileged attorney-client information protected from advanced mobile threats."
          },
          {
            title: "Pharmaceutical",
            content: "Secure field and laboratory devices from cyber theft and espionage."
          },
          {
            title: "Retail",
            content: "Secure your mobile POS devices and your consumer apps from cyber attacks."
          },
          {
            title: "Mobile Operators",
            content: "Increase your retention rates and ARPU with your own branded mobile security app."
          }
        ],
        image: whyUsPlaceholderImg4,
        imagePosition: "left"
      },
    ],
    downloadSection: {
      title: "Get your mobile devices protected!",
      description: "Download the zIPS Mobile Threat Defense App"
    },
    pricingSection: {
      subtitle: "Plans",
      titlePart1: "Our Mobile Threat Defense",
      titlePart2: "Subscription Plan",
      useGradientTitle: true,
      description: "Mobile Protection for VIP, Individuals and Enterprises",
      plans: [
        {
          title: "Individual",
          description: "Now, Everyone can have Mobile Protection",
          price: "RM200",
          period: "/year",
          subtext: "/device",
          features: [
            "Real-time Device Protection",
            "Supports Android, iOS, ChromeOS",
            "Yearly Subscription",
            "Email Support",
            "1 Device"
          ]
        },
        {
          title: "Group",
          description: "Your family members' mobiles & tablets need protection, too",
          price: "$150",
          period: "/year",
          subtext: "/device",
          features: [
            "Above 5 Devices",
            "Real-time Device Protection",
            "Supports Android, iOS, ChromeOS",
            "Remediation guidance support",
            "Yearly Subscription",
            "Email Support"
          ]
        },
        {
          title: "Business",
          description: "zIPS secure employee devices against the most advanced threats",
          buttonText: "Contact Us",
          features: [
            "Dedicated Portal",
            "Real-time Device Protection",
            "Supports Android, iOS, ChromeOS",
            "Yearly Subscription",
            "Phone and Email Support"
          ]
        },
        {
          title: "Enterprise",
          description: "Manage policies, monitor for threats, and mitigate mobile risks.",
          buttonText: "Contact Us",
          features: [
            "Dedicated Portal",
            "Real-time Device Protection",
            "Supports Android, iOS, ChromeOS",
            "24x7 Alert Monitoring",
            "Phone and Email Support"
          ]
        }
      ]
    }
  },
  "governance-risk-and-compliance": {
    id: "governance-risk-and-compliance",
    pageHero: {
      image: GRChero,
      titlePart1: "Governance, Risk",
      titlePart2: "& Compliance",
      description: "Compliance & risk strategies that drive business forward."
    },
    whyUsSection: {
      badge: "Improve decision-making and long-term growth",
      titlePart1: "Our Governance, Risk & Compliance Services:",
      titlePart2: "Why us?",
      description: "Improve business outcomes and continuity with expert guidance and embedded cyber security best practices from governance, risk and compliance professionals.",
      image: whyUsPlaceholderImg,
      cards: [
        {
          title: "Improve Decision Making",
          description: "Make better decisions on risk and investment with robust and balanced assessment across business and technology, to manage the downside and upside of your cyber risk posture.",
          icon: ShieldCheck,
        },
        {
          title: "Achieve compliance to regulations",
          description: "Achieve, maintain and prove compliance with a raft of internal, industry, national and international standards and benchmarks.(RMIT, ISO27001, CREST, etc.)",
          icon: Security,
        },
        {
          title: "Strengthen long-term governance",
          description: "Protect your ability to trade and operate in the long term by leveraging appropriate and effective governance frameworks.",
          icon: Labs,
        },
        {
          title: "Balanced Risk Management",
          description: "Draw on the knowledge of our most experienced cyber security specialists to identify, manage and minimize risks to your business.",
          icon: Tactic,
        },
        {
          title: "Customized Process",
          description: "Identify and take advantage of opportunities to drive efficiency, growth and profitability from more streamlined and seamless cyber security practices.",
          icon: Info,
        },
        {
          title: "Trusted Advisors",
          description: "Expert guidance at scale to help manage risk, enhance control over operations, increase profitability and ensure you’re meeting legal and regulatory obligations and the security expectations of your stakeholder community and customers.",
          icon: Experts,
        }
      ]
    },
    scopeSection: {
      titlePart1: "Our Governance, Risk & Compliance Services:",
      titlePart2: "Scope",
      subtitle: "Critical investment for long-term growth, value and sustainability",
      description: "Cybertronium draws on years of experience shaping GRC across the largest enterprises and government agencies, through to the smallest operations who depend on compliance and sound risk management.",
      items: [
        {
          title: "Risk Management",
          content: "Insightful, pragmatic and balanced risk management services to help manage the trade-off between risk and return in your decision-making.\n\n  • Information asset risk assessment\n  • Technology risk assessments\n  • Threat and Risk Assessments (TRAs)\n  • Third-party risk assessments\n  • Supply chain cyber risk assessments"
        },
        {
          title: "Business Resilience",
          content: "Navigate the complexities of building a successful and resilient business and ensuring continuity during disruption, from supply chain to critical business operations.\n\n  • Business impact assessment\n  • Business continuity plan development, maintenance and testing\n  • Disaster recovery/IT continuity plan development, maintenance and testing\n  • Incident management framework, incident response plans and playbook development"
        },
        {
          title: "Governance",
          content: "Create and build governance frameworks, policies and processes based on deep insight into industry trends, your security posture and your desired outcomes.\n\n  • Development of security governance models and frameworks\n  • Policy and procedure development and refinement\n  • Information Security Management System (ISMS) development and implementation\n  • Data and information asset classification\n  • Management system/security awareness training"
        },
        {
          title: "Compliance & Audit",
          content: "Achieve, maintain and prove your compliance over time with rigorous, embedded compliance processes.\n\n  • Audit advisory services\n  • ISMS internal audit services\n  • CISO as a Service"
        },
      ]
    }
  },

  // Cloud Security
  "cloud-detection-response": {
    id: "cloud-detection-response",
    pageHero: {
      image: cdrhero,
      titlePart1: "Cloud Detection",
      titlePart2: "& Response",
      description: "24x7 Monitoring, Detection and Response for attacks across IaaS and Saas resources.",
      resourceImg: cdrresource
    },
    whyUsSection: {
      badge: "Your Cloud Security is our Responsibility!",
      titlePart1: "Cloud Security",
      titlePart2: "Our Solution",
      description: "Leverage the expertise of your Cybertronium Security Team to harden your cloud security posture against known and evolving threats.",
      image: cdrwhyus,
      cards: [
        {
          title: "Configuration Overload",
          description: "Organizations adopting multiple cloud platforms and services struggle to configure even basic security controls, logging, and monitoring exposing Cloud assets to attackers.",
          icon: ShieldCheck,
        },
        {
          title: "Strategic Guidance",
          description: "Minimize confusion, complexity, and time with a white-glove deployment engagement. Strategic guidance for your cloud security design, implementation and posture improvement.",
          icon: Security,
        },
        {
          title: "Policy Complexity",
          description: "Most cloud security products are difficult to set up and require frequent policy adjustments which often results in security gaps and data breaches.",
          icon: Labs,
        },
        {
          title: "24x7 Monitoring",
          description: "Around the clock security coverage by our dedicated team. Continuous and proactive Configuration updates based on evolving threats.",
          icon: Tactic,
        },
        {
          title: "Cloud Skills Gap",
          description: "Finding security experts who are also cloud experts is exceedingly difficult and/or expensive for most organizations.",
          icon: Info,
        },
        {
          title: "Security Experts",
          description: "Trusted security advisors with years of cloud expertise operate as-or an extension of-your existing IT team.",
          icon: Experts,
        },
      ]
    },
    statisticsSection: {
      badge: "A Reality Check",
      title: "The Challenges of Cloud Security",
      description1: "Cloud adoption is rising, but so are cloud threats.",
      description2: "Too many IT teams are falling behind, is your team one among them?",
      bg: GroupBgGradient,
      stats: [
        { value: "94%", label: "Number of enterprises today rely on at least one public cloud" },
        { value: "84%", label: "Number of businesses adopting a 'multi-cloud' strategy" },
        { value: "44%", label: "Percent of cyberattacks that are cloud-enabled" },
        { value: "43%", label: "IT Teams who lack visibility into cloud infrastructure security" }
      ]
    },
    scopeSection: {
      titlePart1: "Cybertronium",
      titlePart2: "Cloud Detection and Response Service",
      subtitle: "Your end-to-end Cloud managed security service",
      title1ClassName: "text-gradient-primary",
      title2ClassName: "block text-primary mt-1 md:mt-2",
      items: [
        {
          title: "DETECT",
          content: "• 24x7 SaaS and IaaS Monitoring: Monitor SaaS and IaaS solutions to detect key threats or risks.\n• Immediate Protection: Service launches with preconfigured detection logic, allowing monitoring to immediately detect the highest-priority attacks.\n• Customized Rules: With rules tailored to your business environment, see things that others miss while also preventing alert fatigue."
        },
        {
          title: "RESPOND",
          content: "• Managed Investigations: We investigate suspicious activity so you don't have to, making alert fatigue a thing of the past.\n• Log Retention and Search: Takes the work out of managing logs, enabling you to easily conduct additional investigations, if needed.\n• Cloud Incident Response: Every second counts. Detect and respond to critical security incidents within minutes to prevent the spread of threats."
        },
        {
          title: "RECOVER",
          content: "• Guided Remediation: We work with you to validate, investigate and respond to the threat and neutralize it.\n• Management: Our Team will manage your cloud management console to collect the right data and provide the right alerts without extra work from your IT team.\n• Cloud Expertise: Our seasoned experts in cloud security will assist you in cloud security best practices, strategies and deployment frameworks."
        }
      ]
    }
  },
  "cloud-security-posture-management": {
    id: "cloud-security-posture-management",
    pageHero: {
      image: cspmhero,
      titlePart1: "Cloud Security",
      titlePart2: "& Posture Management",
      description: "Assess & strengthen the security posture of your cloud resources",
    },
    whyUsSection: {
      badge: "Protect your multi-cloud and hybrid cloud environments",
      titlePart1: "Cloud Security Posture Management:",
      titlePart2: "Why?",
      description: "Gartner predicts that by 2023, 75% percent of security failures will be the result of mismanaged identities and entitlements. Leverage the expertise of Cybertronium Security Team to harden your cloud security posture against known and evolving threats.",
      image: whyUsPlaceholderImg,
      cards: [
        {
          title: "Understand the Attack Surface",
          description: "Assess & prioritize risk across human and service identities, network configuration, data and compute resources.",
          icon: ShieldCheck
        },
        {
          title: "Comply with Standards & Regulations",
          description: "Audit inventory and ensure compliance with CIS, GDPR, SOC2, NIST, PCI DSS, HIPAA, ISO and more.",
          icon: Security
        },
        {
          title: "Detect Anomalies",
          description: "Detect suspicious behavior and configuration changes with behavioral analysis and alerts.",
          icon: Labs
        },
        {
          title: "Strengthen Posture",
          description: "Use actionable recommendations to remediate and get your resources configured securely.",
          icon: Tactic
        },
        {
          title: "Enforce Policies",
          description: "Define and automate guardrails for identities, resources and network configuration, from dev to production.",
          icon: Info
        },
        {
          title: "Security Experts",
          description: "Trusted security advisors with years of cloud expertise operate as-an extension of-your existing IT team.",
          icon: Experts
        }
      ]
    },
    advantageCards: [{
      badge: "CSPM Advantage",
      title: "Strengthen the security posture of your cloud resources",
      description: "Get a continuous assessment of the security of your cloud resources running in Azure and AWS. Use built-in policies and prioritized recommendations that are aligned to key industry and regulatory standards or build custom requirements that meet your organization's needs. Use actionable insights to automate recommendations and help ensure that resources are configured securely and meet your compliance needs.",
      icon: VendorNeutralIcon1

    }, {
      badge: "CSPM Advantage",
      title: "Protect cloud and hybrid workloads against threats",
      description: "Protect against evolving threats across multi-cloud and hybrid environments and understand vulnerabilities with insights from industry-leading security research and secure your critical workloads, in VMs, storage, containers, and across the cloud platforms. Use many options to automate and streamline your security administration.",
      icon: ICSIcon1

    }],
    scopeSection: {
      titlePart1: "Cybertronium",
      titlePart2: "Cloud Security Posture Management Service",
      subtitle: "Your end-to-end cloud managed security service",
      title1ClassName: "text-gradient-primary",
      title2ClassName: "block text-primary mt-1 md:mt-2",
      description: "CSPM empowers you to confidently secure your hybrid and multi-cloud environment. Enhance security posture, protect against modern threats, ensure compliance and streamline security administration. Leverage the expertise of Cybertronium Security Team to harden your cloud security posture against known and evolving threats.",
      items: [
        {
          title: "CONTINUOUS MONITORING",
          content: "• Continuous Assessment\n• Monitor your environments\n• Get a continuous assessment of the security of your cloud resources running in Azure and AWS. Use built-in policies and prioritized recommendations that are aligned to key industry and regulatory standards or build custom requirements that meet your organization's needs."
        },
        {
          title: "INSIGHTS",
          content: "• Insights into your cloud posture\n• Get actionable insights and alerts on misconfigurations and compliance issues.\n• Prioritize remediation efforts based on risk context and severity."
        },
        {
          title: "EXPERTS",
          content: "• Security Experts\n• Trusted security advisors with years of cloud expertise operate as-an extension of-your existing IT team."
        }
      ]
    }
  },
  "cloud-security-consulting": {
    id: "cloud-security-consulting",
    pageHero: {
      image: cscshero,
      titlePart1: "Cloud Security",
      titlePart2: "Consulting Services",
      description: "Make your cloud-first journey safe and secure"
    },
    whyUsSection: {
      align: 'left',
      badge: "Protect your multi-cloud and hybrid cloud environments",
      titlePart1: "Cloud Security Posture Management:",
      titlePart2: "Why?",
      description: "Gartner predicts that by 2023, 75% percent of security failures will be the result of mismanaged identities and entitlements. Leverage the expertise of Cybertronium Security Team to harden your cloud security posture against known and evolving threats.",
      image: whyUsPlaceholderImg,
      cards: [
        {
          title: "Discover",
          description: "Identify which platform-specific cloud services are currently in place and harness that infrastructure to support your organization.",
          icon: SearchPlain
        },
        {
          title: "Architect",
          description: "We will design your cloud architecture with secure solutions that work smoothly with your business and assist in migrating your current on-premise systems.",
          icon: Architecture
        },
        {
          title: "Assess & Govern",
          description: "From discovery to on-boarding, configuration to assessing, compliance to ongoing maintenance, we'll work with you to tie everything together securely.",
          icon: AiGovernanceTracked
        }
      ]
    },
    imageBulletsSection: {
      titlePart1: "Migrating on-premise applications",
      titlePart2: "to the cloud creates new security risks",
      image: cscsmigratebg,
      bullets: [
        "Did you take into account all new security controls that need to be applied to your application in the cloud?",
        "Is your team trained in protecting the application and its data in the cloud?",
        "Do you need outside help to ensure the migration is making the app more secure than it was on-premise?"
      ]
    },
    featureSectionHeader: {
      titlePart1: "Cybertronium",
      titlePart2: "Cloud Security Consulting & Migration Services",
      subtitle: "Secure your Cloud Infrastructure"
    },
    featureSections: [
      {
        subtitle: "Cloud Services",
        titlePart1: "Microsoft Azure",
        titlePart2: "Cloud Security Consulting",
        description1: "Our customers often deploy their whole infrastructure in Microsoft Azure's cloud. As much as Microsoft has taken care to protect their infrastructure and that of their customers, many, if not most of the security settings we audit in our assessments, are either left in their default state or are misconfigured.",
        description2: "IT departments are often under pressure to deploy things quickly and are understaffed and overworked. Mistakes are inevitable. Every mistake made by someone in the IT department, be it a developer, system administrator, or external service provider can lead to a disastrous security breach, exposing customer information and leading to regulatory and compliance penalties.",
        description3: "Microsoft Azure offers unprecedented usability when it comes to securing all applications and data hosted there; however, applying the security capabilities, settings, policies, and configuration is the tenant's responsibility.\n\nIf your service, data, or identity management is on Azure, this does not mean it is secure. Yes, Microsoft has a considerable amount of security engineers, but they are not responsible for their customers' data. Our cloud security consultants are the best choice for working with your development and IT team to ensure everything you store on Azure is as secure as it can be.",
        image: cscsazure,
        imagePosition: "left",
        bgClass: "bg-white",
        contentWidthClass: "lg:w-[50%]",
        imageWidthClass: "lg:w-[42%]",
        maintainAspectRatio: true
      },
      {
        subtitle: "Cloud Services",
        titlePart1: "Microsoft 365",
        titlePart2: "Security Consulting",
        description1: "Microsoft 365 offers a fantastic set of applications, covering every aspect of business collaboration and productivity - from the regular Outlook, Word, Excel, and PowerPoint and moving to Teams, Tasks, Sharepoint, and a few dozen more applications. Every single one of them, including their admin center and hundreds of related security policies, uses just the bare minimum security settings applied by default. Microsoft intentionally leaves these settings in their default state - they want to ensure all their customers have usability first and can apply the security settings they need.",
        description2: "Over half of the security configuration settings and policies available in Microsoft 365 are in their \"off\" or disabled state when you first purchase the service. Even when IT departments work hard to enable and configure all available security settings, they may miss critical dependencies and logical vulnerabilities, which could still lead to a significant data breach.",
        image: cscsms365,
        imagePosition: "right",
        bgClass: "bg-white",
        contentWidthClass: "lg:w-[50%]",
        imageWidthClass: "lg:w-[42%]",
        maintainAspectRatio: true
      },
      {
        subtitle: "Cloud Services",
        titlePart1: "AWS",
        titlePart2: "Cloud Security Consulting",
        description1: "As much as Amazon has taken care to protect their infrastructure and that of their customers, many, if not most of the security settings we audit in our assessments, are either left in their default state or are misconfigured. This can lead to disastrous security breach, exposing customer information and leading to regulatory and compliance penalties.",
        description2: "Our cloud cloud security consulting experts have years of experience in finding these mistakes and suggesting the best ways of fixing them without causing downtime or usability issues.",
        image: cscsaws,
        imagePosition: "left",
        bgClass: "bg-white",
        contentWidthClass: "lg:w-[50%]",
        imageWidthClass: "lg:w-[42%]",
        maintainAspectRatio: true
      }
    ]
  },

  // MDR/SOC
  "soc-for-sme": {
    id: "soc-for-sme",
    pageHero: {
      image: socsmehero,
      titlePart1: "SOC 2.0",
      titlePart2: "FOR SME",
      description: [
        "Enjoy Essential Cyber Security Solutions Designed Specifically For Your SME.",
        "It's All About Big Protection For Small Budgets!",
        "We Tailor Enterprise-Grade Security For Your SME!",
        "Get The Best Soc Services Even If You Have One Server!"
      ]
    },
    whyUsSection: {
      badge: "Empowering SMEs with Vital Cybersecurity Solutions",
      titlePart1: "SOC as a service for SMEs",
      titlePart2: "Why us?",
      description: "Ready to turbocharge your SME's cybersecurity defenses and outsmart cyber threats together?",
      image: whyUsPlaceholderImg,
      cards: [
        {
          title: "Advanced Threat Detection and Response",
          description: "Protect your SME with our SOC-as-a-Service, delivering immediate threat detection and rapid response. Our AI-powered algorithms proactively defend against evolving cyber threats, while automated incident response mechanisms swiftly mitigate risks.",
          icon: ShieldCheck,
        },
        {
          title: "Scalability and Integration",
          description: "Grow your business confidently with our SOC-as-a-Service for SMEs, seamlessly integrating with your existing IT infrastructure. Whether you're a startup or a medium-sized enterprise, our solution scales to meet your evolving needs.",
          icon: Tactic,
        },
        {
          title: "Expertise and Support",
          description: "Gain round-the-clock SME defense support from our team of cybersecurity professionals. With dedicated analysts providing personalized assistance, your business receives top-tier protection and support.",
          icon: Info,
        },
        {
          title: "Compliance and Regulatory Requirements",
          description: "Stay compliant effortlessly with our SOC-as-a-Service for SMEs, equipped with comprehensive compliance management tools. Meet regional regulatory requirements without hassle.",
          icon: Security,
        },
        {
          title: "Cost and Resource Efficiency",
          description: "Optimize your budget with our transparent pricing and cost-effective packages. Our SOC-as-a-Service for SMEs, deliver essential cybersecurity protection without hidden costs, ensuring peace of mind.",
          icon: Tag,
        },
        {
          title: "Customization and Managed Services",
          description: "Tailor your SME security solution with our customizable packages, designed to meet your unique business goals. Benefit from hassle-free implementation and ongoing management with our managed services.",
          icon: Experts,
        },
      ]
    },
    statisticsSection: {
      badge: "A Reality Check",
      bg: GroupBgGradient,
      title: "Secure your SME to Secure Your Assets",
      description1: "Ramp Up Defenses Against Rising Cyber Threats!",
      description2: `Each year, small and medium-sized enterprises (SMEs) face a growing number of cyberattacks. Nearly half of SMEs experience reputation damage with just one cyberattack.`,
      description3: `Protect your business and secure your future. Don't become just another statistic. Take proactive steps today.`,
      stats: [
        { value: "51%", label: "Alarming Increase: Cyber Crime surges 51% in Malaysia from 2022 to 2023" },
        { value: "48%", label: "Lack of Preparedness: Nearly half of SMEs are unready for Cyberattacks" },
        { value: "46", label: "Reputation Damage: Data Breaches impact 46% of SMEs" },
        { value: "37%", label: "Ransomware Surge: Malaysia records over 37% increase in attacks in 2022" }
      ]
    },
    cyberLandscapeSection: {
      titlePart1: "The Cyber threat Landscape",
      titlePart2: "For Malaysian SMEs",
      subtitle: "Real Threat. Real Impact. Real Losses.",
      image: soclandscape,
      cards: [
        { text: "Approximately 269,533 phishing attempts were targeted against Malaysian SMEs in the first half of 2020, 56% more than the first half of 2019 at 172,906.", highlight: "269,533 phishing attempts" },
        { text: "Small Businesses Are More Frequent Targets Of Cyberattacks Than Larger Companies: New Report", highlight: "Small Businesses" },
        { text: "In Malaysia, Kaspersky Security Network recorded some 767,000 business owners coming under attack from Internet-borne malware last year.", highlight: "767,000 business owners" },
        { text: "Malaysian SMEs need to stop and think about cybersecurity - Study", highlight: "think about cybersecurity" },
        { text: "Two-thirds of Malaysian SMEs lost customer information to incidents - Cisco", highlight: "lost customer information" },
        { text: "84% of SMEs fell to cyber attack last year", highlight: "84% of SMEs" },
        { text: "Investigation ongoing on MyIDENTITY data breach, no arrests yet", highlight: "no arrests yet" },
        { text: "Official website of Penang govt hacked" },
        { text: "Cybersecurity gap threatens SMEs' digitalisation", highlight: "SMEs' digitalisation" },
        { text: "Malaysia Loses RM2.23 Billion To Cybercrime", highlight: "RM2.23 Billion" },
        { text: "Kaspersky: Phishing attacks on the rise in Malaysia, SE Asia", highlight: "Malaysia, SE Asia" },
        { text: "Malaysia catat 57.8 juta serangan virus siber pada suku pertama - Fortinet" },
        { text: "Cybersecurity is still challenging for ASEAN businesses", highlight: "ASEAN businesses" },
        { text: "Cyber-security threats to cost Malaysian organisations US$12.2bil in economic losses", highlight: "US$12.2bil" }
      ]
    },
    mdrOfferingsSection: {
      badge: "EXPERIENCE . LEARN . EVOLVE",
      titleLine1: "Cybertronium",
      titleLine2: "MDR/SOC-as-a-Service",
      description: "Affordable cybersecurity solutions for growing businesses!",
      offerings: [
        {
          title: "Advanced Threat Detection",
          description: "Utilize cutting-edge threat intelligence and analytics to spot potential threats across your digital terrain. Our service offers robust protection against complex cyber threats, ensuring your enterprise stays resilient in the face of evolving risks."
        },
        {
          title: "Security Information and Event Management (SIEM)",
          description: "Gain valuable insights into your security landscape with our advanced SIEM services. Collect, analyze, and respond to security data and events across your enterprise, enhancing your ability to detect and respond to threats."
        },
        {
          title: "Endpoint Detection and Response (EDR)",
          description: "Secure every endpoint, from laptops to mobile devices, against sophisticated attacks. Our EDR solutions provide real-time monitoring, threat detection, and automated response capabilities to safeguard your critical assets."
        },
        {
          title: "Extended Detection and Response (XDR)",
          description: "With our Extended Detection and Response (XDR) solution, enterprises can strengthen their cybersecurity posture, proactively detect and respond to emerging threats, and safeguard their critical business assets against cyber attacks."
        },
        {
          title: "Security Orchestration and Automated Response",
          description: "Streamline your security operations with our SOAR capabilities. Automate responses to common threats, freeing up your team to focus on strategic defense measures and complex threat analysis."
        },
        {
          title: "Cloud Security",
          description: "Secure your cloud environments with our comprehensive cloud security solutions. Protect your data, applications, and infrastructure from threats, ensuring the safety and privacy of your cloud-based resources."
        },
        {
          title: "Proactive Threat Hunting",
          description: "Go beyond automated defenses with our proactive threat hunting services. Our experts actively seek out hidden threats using advanced tools and techniques, ensuring your defenses stay ahead of the game."
        },
        {
          title: "Incident Response and Recovery",
          description: "Experience swift, coordinated incident response that minimizes downtime and mitigates damage. Our 24/7 response team ensures rapid recovery, getting your operations back to normal with minimal impact."
        },
        {
          title: "Continuous Vulnerability Management",
          description: "Identify and address vulnerabilities before they can be exploited. Our continuous vulnerability management service provides ongoing assessment and remediation support, fortifying your defenses and enhancing your security posture."
        },
        {
          title: "Regulatory Compliance",
          description: "Navigate complex regulatory landscapes with ease using our comprehensive compliance suite. We ensure your cybersecurity measures meet industry standards and regulatory requirements, protecting your business from legal and financial repercussions."
        },
        {
          title: "Threat Intelligence",
          description: "With our Threat Intelligence solution, enterprises can stay one step ahead of cyber adversaries, effectively mitigate risks, and safeguard their critical assets against evolving cyber threats."
        },
        {
          title: "Dark Web Monitoring",
          description: "With our Dark Web Monitoring services, organizations can stay one step ahead of cyber threats, safeguard their digital assets, and maintain trust and confidence among their stakeholders."
        }
      ],
      cta: {
        title: "Ready to get started?",
        description: "We're here to enhance SME security, today! Reach out to schedule an introductory call with one of our team members before it's too late!",
        buttonText: "Contact Us"
      }
    },

  },
  "soc-as-a-service": {
    id: "soc-as-a-service",
    pageHero: {
      image: socasaservervicehero,
      titlePart1: "Agentic AI-Driven 24×7",
      titlePart2: "Security Operations.",
      description: "Cybertronium's managed SOC fuses petabyte-scale SIEM, SOAR, UEBA and agentic AI to detect, investigate and respond to threats in real time — without the cost or complexity of building your own.",
      buttonText: "Book a SOC Briefing",
      buttonLink: "/contact",
      stats: [
        { value: "500,000+", label: ["Security Events", "Investigated Monthly"] },
        { value: "5,000+", label: ["Threats Validated", "& Escalated"] },
        { value: "<15 Min", label: ["Mean Time to", "Detect (MTTD)"] },
        { value: "<30 Min", label: ["Mean Time to", "Respond (MTTR)"] },
        { value: "600+", label: ["Incident Response", "Engagements Completed"] },
        { value: "99.9%", label: ["SLA Adherence"] }
      ]
    },
    socProblemSection: {
      subtitle: "The Modern SOC Problem",
      title: "Why traditional SOCs are breaking",
      description: "Adversaries move at machine speed. Most security operations still rely on human-speed workflows, fragmented tools and pay-per-gigabyte SIEMs.",
      cards: [
        {
          icon: "alert",
          title: "Alert Overload",
          description: "Analysts drown in thousands of low-fidelity alerts daily, missing the signals that matter.",
        },
        {
          icon: "backlog",
          title: "Overwhelming Backlog",
          description: "Investigation queues grow faster than teams can triage, leaving threats to dwell.",
        },
        {
          icon: "cost",
          title: "Escalating SIEM Costs",
          description: "Legacy SIEMs charge by ingest — visibility shrinks as data and costs explode.",
        },
        {
          icon: "ai",
          title: "Failed AI Pilots",
          description: "Off-the-shelf AI agents hallucinate, lack context, and never reach production.",
        },
        {
          icon: "tooling",
          title: "Disjointed Tooling",
          description: "Siloed EDR, NDR, IAM, cloud and email tools create blind spots between layers.",
        },
      ],
    },
    socDataBreakdownSection: {
      subtitle: "By the Numbers",
      title: "The data behind the breakdown",
      description: "Adversaries move at machine speed. Most security operations still rely on human-speed workflows, fragmented tools and pay-per-gigabyte SIEMs.",
      statCards: [
        { icon: "alert", value: "11,000+", label: "Alerts per day in the average enterprise SOC" },
        { icon: "wave", value: "67%", label: "Average mean time to identify a breach" },
        { icon: "clock", value: "207 days", label: "SEIM ingestion cost growth over 3 years" },
        { icon: "growth", value: "3.2×", label: "SEIM ingestion cost growth over 3 years" },
      ],
      donutPanels: [
        {
          title: "Analyst capacity vs. alert volume",
          items: [
            { value: "100%", label: "Alerts generated", percentage: 100, color: "#CA1C69" },
            { value: "33%", label: "Alerts triaged", percentage: 33, color: "#E8789A" },
            { value: "9%", label: "Fully investigated", percentage: 9, color: "#F5B8C8" },
          ],
        },
        {
          title: "Where SOC time really goes",
          items: [
            { value: "55%", label: "Triage & false positives", percentage: 55, color: "#CA1C69" },
            { value: "25%", label: "Tool & data wrangling", percentage: 25, color: "#E8789A" },
            { value: "12%", label: "Reporting & admin", percentage: 12, color: "#F5B8C8" },
            { value: "8%", label: "Actual threat hunting", percentage: 8, color: "#F9D5DF" },
          ],
        },
      ],
      sourceCitation: "Sources: IBM Cost of a Data Breach 2024, Forrester SOC Analyst Workload Study, Gartner SIEM Market Guide.",
    },
    socPlatformGridSection: {
      subtitle: "The Cybertronium AI driven SOC Stack",
      title: "Built on the platforms enterprises trust",
      description: "We don't reinvent the wheel — we leverage best-in-class agentic AI detection and response platforms, enhanced by Cybertronium analysts in the loop to deliver faster threat detection, more accurate investigations, and stronger security outcomes.",
      items: [
        {
          icon: "siem",
          title: "Petabyte-Scale SIEM",
          description: "Enterprise-grade data layer with 400 days of hot data, full-fidelity retention, and sub-second search across every log source. No tiering, no compromises.",
        },
        {
          icon: "soar",
          title: "Integrated SOAR",
          description: "Codified playbooks orchestrate detection, containment and recovery across your security stack — turning hours of manual work into seconds.",
        },
        {
          icon: "ueba",
          title: "UEBA & Behavioural Analytics",
          description: "Machine-learning baselines surface insider threats, account takeover and lateral movement that static rules will always miss.",
        },
        {
          icon: "agenticAI",
          title: "Agentic AI Operations",
          description: "Our agentic platform deploys pre-built and custom AI agents — phishing triage, fraud detection, alert enrichment — with human-in-the-loop and verifiable audit trails.",
        },
        {
          icon: "threatHunting",
          title: "Threat Hunting",
          description: "Certified hunters proactively pursue adversary tradecraft mapped to MITRE ATT&CK across your entire estate, 24×7.",
        },
        {
          icon: "incidentResponse",
          title: "Incident Response Retainer",
          description: "DFIR responders on standby with guaranteed SLAs — containment, forensics, evidence preservation and post-incident reporting.",
        },
        {
          icon: "stack",
          title: "Works with Your Stack",
          description: "Bring your logs from where they live. Use Bedrock LLMs, MCP connectors, external DNS, and your existing SIEM/observability tools. No rip-and-replace, no duplicate log storage costs.",
        },
        {
          icon: "ingest",
          title: "Ingest data from any source",
          description: "No matter where your data comes from, we can ingest, enrich, and offer immediate, actionable insights to accelerate SOC productivity with Comprehensive API for utmost flexibility.",
        },
        {
          icon: "envAware",
          title: "Environment-aware AI agents",
          description: "Empowers your security and operations teams to create AI-driven agents that function like purpose-built teammates trained to follow your processes, adapt to your workflows, and accelerate outcomes.",
        },
      ],
    },
    socAgentLibrarySection: {
      subtitle: "AI Agent Library",
      titleLine1: "An autonomous workforce",
      titleLine2: "inside your SOC",
      description: "Day-one agents that work alongside Cybertronium analysts — every action logged, reviewed and reversible.",
      agents: [
        {
          icon: "phishing",
          title: "Phishing Detection Agent",
          description: "Analyses email headers, URIs and payloads — flags suspicious messages and auto-investigates user-reported phish.",
        },
        {
          icon: "alertTriage",
          title: "Alert Triage Agent",
          description: "Enriches every alert with threat, intel, asset, and identity context — closes false positives before an analyst sees them.",
        },
        {
          icon: "fraud",
          title: "Fraud Investigation Agent",
          description: "Correlates transactional anomalies with identity and device context to surface fraud in real time.",
        },
        {
          icon: "threatIntel",
          title: "Threat Intel Agent",
          description: "Continuously ingests OSINT, dark web and ISAC feeds — maps indicators to your environment automatically.",
        },
        {
          icon: "vulnerability",
          title: "Vulnerability Agent",
          description: "Prioritises CVEs by exploitability and business exposure — drafts remediation tickets for IT.",
        },
        {
          icon: "insiderRisk",
          title: "Insider Risk Agent",
          description: "Monitors behavioural deltas across users and entities to flag data exfiltration and policy abuse.",
        },
        {
          icon: "cyberAdvisory",
          title: "Cyber Advisory Monitor Agent",
          description: "Continuously monitors threat intelligence feeds and security advisories to alert you about new vulnerabilities, exploits, and emerging threats.",
        },
        {
          icon: "agentCreation",
          title: "Agent Creation Assistant",
          description: "Guides you through building custom AI agents for your security operations, from simple task automation to complex multi-agent workflows.",
        },
        {
          icon: "incidentResponse",
          title: "Incident Response Agent",
          description: "Triages IT incidents, routes tickets to appropriate teams, and automates initial troubleshooting steps, builds SOAR dynamic workflows to reduce mean time to resolution.",
        },
        {
          icon: "socManager",
          title: "SOC Manager Agent",
          description: "Coordinates security operations across the team, managing workflows, prioritizing incidents, and ensuring timely response to security events.",
        },
      ],
    },
    socWorkflowSection: {
      subtitle: "How It Works",
      title: "From signal to resolution \u2014 in minutes",
      description: "A continuous, six-stage operating model that unifies SIEM, SOAR, UEBA, AI agents, threat intelligence and human-led hunting into one defensible workflow.",
      steps: [
        {
          stepNumber: "01",
          title: "Collect",
          description: "Ingest telemetry from every part of your estate into our petabyte-scale SIEM in real time with no data caps and zero log-source restrictions.",
          iconPlaceholder: "collect",
          bullets: [
            { text: "Agent and agentless collection from on-prem, multi-cloud (AWS, GCP, Azure) and SaaS environments via RESTful APIs." },
            { text: "450+ pre-built parsers, custom parsers for bespoke applications." },
            { text: "Syslog, syslog-ng, rsyslog, cloud-native log forwarders, Filebeat, Fluent Bit, native SIEM forwarders to accommodate legacy and modern infrastructure alike." },
            { text: "SOAR collectors enable automated on-demand data enrichment from additional context-rich sources like CMDB, HR systems, and threat intelligence feeds." },
            { text: "All ingested data is stored hot for 12 months to support retroactive investigations; you get a complete searchable audit trail." },
          ],
        },
        {
          stepNumber: "02",
          title: "Detect",
          description: "Multi-layered detection fabric: SIEM analytics plus AI/ML models, UEBA baselines, and correlation across all data types \u2014 network, endpoint and identity \u2014 with curated and AI-tuned detection agents.",
          iconPlaceholder: "detect",
          bullets: [
            { text: "10,000+ correlation rules and ML detections for MITRE ATT&CK techniques, from initial access to exfiltration and impact." },
            { text: "MITRE ATT&CK integration maps every detection to specific tactics/techniques, ensuring coverage and highlighting gaps." },
            { text: "UEBA: machine-learning baselines for users, hosts, peers \u2014 risk scores escalate automatically." },
            { text: "Threat intel enrichment: global intel + context-specific feeds are matched against all observables in near real-time." },
            { text: "AI-based anomaly models detect novel threats, zero-day exploits, and sophisticated adversary tradecraft not captured by static rules." },
          ],
        },
        {
          stepNumber: "03",
          title: "Enrich & Hunt",
          description: "Every alert is automatically enriched from threat intel, asset context and identity data before any analyst involvement.",
          iconPlaceholder: "enrich",
          bullets: [
            { text: "Threat intel from 30+ OSINT and commercial feeds correlated against internal SIEM observations \u2014 IOCs, IOAs, CVEs." },
            { text: "Asset, user & identity enrichment from AD/Entra, CMDB, and HR data enables business-context-aware prioritisation \u2014 a compromised finance controller is not the same as an intern." },
            { text: "Certified threat hunters run hypothesis-driven searches using MITRE ATT&CK, live forensics, and Cybertronium\u2019s proprietary hunting notebooks." },
            { text: "Strike48 AI-assisted hunting queries surface anomalous patterns across billions of log entries \u2014 reducing hunt cycles from days to hours." },
            { text: "All findings are logged in MITRE ATT&CK-aligned threat intelligence reports and pushed back into detection rule tuning for continuous improvement." },
          ],
        },
        {
          stepNumber: "04",
          title: "Investigate",
          description: "Every meaningful alert is investigated with full context before any escalation \u2014 false positives are closed and documented automatically.",
          iconPlaceholder: "investigate",
          bullets: [
            { text: "AI co-pilot automates artifact collection, timeline reconstruction, and MITRE ATT&CK mapping \u2014 reducing investigation time by up to 80%." },
            { text: "Threat-led analysis correlates network, endpoint, identity and cloud telemetry into a unified attack narrative, so analysts grasp scope in seconds." },
            { text: "The SOC maintains a dynamic knowledge base \u2014 prior investigation notes, entity reputation scores, and customer-specific IOCs ensure the same threat is never re-learned from scratch." },
          ],
        },
        {
          stepNumber: "05",
          title: "Respond",
          description: "Active containment is triggered automatically or within minutes of analyst confirmation, limiting dwell time and blast radius.",
          iconPlaceholder: "respond",
          bullets: [
            { text: "Pre-approved SOAR playbooks perform automated containment actions \u2014 host isolation, account lock, firewall block, DNS sinkhole \u2014 in seconds." },
            { text: "Case management integration with ServiceNow, Jira, PagerDuty and custom ticketing systems keeps IT and Security teams aligned." },
            { text: "All automated and manual response actions are logged with full audit trails, including operator identity and timestamps, for compliance and post-incident review." },
            { text: "Bi-directional SOAR integrations with EDR, NDR, firewall, IAM, email and cloud control planes allow coordinated multi-vector response without switching consoles." },
            { text: "Our SOC maintains customer-specific response runbooks, reviewed quarterly, to ensure actions reflect your environment, regulatory requirements, and risk appetite." },
          ],
        },
        {
          stepNumber: "06",
          title: "Report & Improve",
          description: "Full lifecycle reporting \u2014 from individual alert dispositions to board-level dashboards \u2014 built on auditable data and continuous tuning.",
          iconPlaceholder: "report",
          bullets: [
            { text: "Real-time dashboards with drill-down capability: alert volume, MTTD, MTTR, MITRE ATT&CK heat maps, SLA compliance." },
            { text: "Monthly and quarterly executive reports covering threat landscape evolution, detection coverage, response effectiveness, and strategic risk recommendations." },
            { text: "Per-alert dispositions include analyst notes, enrichment data, investigation timelines, and MITRE ATT&CK mappings \u2014 full accountability and auditability." },
            { text: "Continuous detection engineering: new rules, tuning of existing rules, and retirement of low-value detections based on investigation feedback, threat landscape changes, and environment drift." },
          ],
        },
      ],
    },
    socServiceTiersSection: {
      subtitle: "Service Tiers",
      title: "Right-sized for your security maturity",
      description: "A continuous, six-stage operating model that unifies SIEM, SOAR, UEBA, AI agents, threat intelligence and human-led hunting into one defensible workflow.",
      tiers: [
        {
          name: "SOC Essential",
          subtitle: "SMB/Small Mid-Market",
          features: [
            { text: "24\u00d77 monitoring (8\u00d75 analyst review)" },
            { text: "Up to 50 log sources" },
            { text: "Standard playbooks" },
            { text: "Monthly threat report" },
            { text: "Email & portal escalation" },
          ],
        },
        {
          name: "SOC Advanced",
          subtitle: "Mid-Market to Enterprise",
          isHighlighted: true,
          features: [
            { text: "24\u00d77\u00d7365 analyst coverage" },
            { text: "Enterprise-scale log collection" },
            { text: "Full SOAR automation" },
            { text: "UEBA + AI agent triage" },
            { text: "Proactive threat hunting" },
            { text: "Quarterly purple teaming" },
          ],
        },
        {
          name: "SOC Enterprise",
          subtitle: "Large Enterprise & Regulated",
          features: [
            { text: "All Advanced features" },
            { text: "Dedicated SOC pod & TAM" },
            { text: "Custom AI agents (Strike48 Studio)" },
            { text: "IR retainer with on-site option" },
            { text: "OT/ICS & cloud-native coverage" },
            { text: "Board-level reporting" },
          ],
        },
      ],
    },
    socComplianceSection: {
      subtitle: "Compliance-Ready",
      title: "Built to meet your regulators",
      description: "Logs, evidence and reporting aligned to the frameworks your auditors care about.",
      badges: ["MAS TRM", "RMIT", "RBI / SEBI", "PCI-DSS", "HIPAA", "ISO 27001", "SOC 2", "GDPR"],
    },
  },
  // "soc-for-enterprise": {
  //   id: "soc-for-enterprise",
  //   pageHero: {
  //     image: socenterprisecHero,
  //     titlePart1: "SOC 2.0",
  //     titlePart2: "FOR ENTERPRISE",
  //     description: "Best Tailored Cyber Security Services To Elevate Enterprise Security\nSeek Cyber Security Beyond The Veil! Fortify Your Business Like Never Before! Security Without Compromise Is Our Speciality!"
  //   },
  //   whyUsSection: {
  //     badge: "Safeguarding Enterprises with Advanced Cybersecurity Solutions.",
  //     titlePart1: "SOC as a service",
  //     titlePart2: "Why Us?",
  //     description: "Partner with us to fortify your enterprise against cyber threats and safeguard your digital assets effectively.",
  //     image: whyUsPlaceholderImg,
  //     cards: [
  //       {
  //         title: "Advanced Threat Detection and Response",
  //         description: "Our platform employs predictive analytics and AI to preemptively identify and neutralize threats, ensuring minimal disruption to your business. With automated incident response, we swiftly tackle multi-vector threats, safeguarding your assets.",
  //         icon: ShieldCheck,
  //       },
  //       {
  //         title: "Scalability and Integration",
  //         description: "Grow confidently with our scalable solution, seamlessly integrating into your evolving digital ecosystem. Enjoy uninterrupted protection as your business expands.",
  //         icon: Tactic,
  //       },
  //       {
  //         title: "Expertise and Support",
  //         description: "Access round-the-clock cybersecurity expertise tailored to your enterprise. Our dedicated analysts provide proactive threat hunting and support, ensuring you are defended by industry leaders.",
  //         icon: Info,
  //       },
  //       {
  //         title: "Compliance and Regulatory Requirements",
  //         description: "Stay compliant effortlessly with our comprehensive compliance management tools. Our detailed reporting capabilities ensure you meet global regulatory standards, protecting you from penalties and reputational damage.",
  //         icon: Security,
  //       },
  //       {
  //         title: "Cost and Resource Efficiency",
  //         description: "Get the highest value without unnecessary expenditure. Our cost-effective solutions deliver advanced protection, ensuring a clear return on investment for your enterprise.",
  //         icon: Tag,
  //       },
  //       {
  //         title: "Customization and Managed Services",
  //         description: "Tailor your cybersecurity solution to fit your unique needs. With customizable options and a range of managed services, we provide the flexibility to adapt and grow with your enterprise.",
  //         icon: Experts,
  //       },
  //     ]
  //   },
  //   statisticsSection: {
  //     badge: "A Reality Check",
  //     bg: GroupBgGradient,
  //     title: "Cyberattacks are soaring every year!",
  //     description1: "Don't be a Victim. Take Action today.",
  //     description2: "Every year the number of cyberattacks targeting enterprises are increasing. More than half of these enterprises experience financial losses due to cyberattacks.",
  //     stats: [
  //       { value: "82%", label: "Steep Surge: Cyber Crime soars to 82% in Southeast Asia from 2021 to 2022" },
  //       { value: "1M USD", label: "63% of companies suffer a minimum of 1 Million USD losses due to Cyber Incidents" },
  //       { value: "72%", label: "Widespread Impact: 72% of Global Enterprises are affected by Ransomware Attacks" },
  //       { value: "21.9%", label: "Cybersecurity Prioritization Gap: Only 21.9% prioritize Cybersecurity in Southeast Asia" }
  //     ]
  //   },
  //   cyberLandscapeSection: {
  //     titlePart1: "The Cyber threat Landscape",
  //     titlePart2: "For Malaysian Enterprises",
  //     subtitle: "Real Threat. Real Impact. Real Losses.",
  //     image: soclandscape,
  //     cards: [
  //       { text: "CyberSecurity Malaysia report: Government sectors suffered most data breaches, while telcos spilled over 400GB of data in H1 2023", highlight: "Government sectors" },
  //       { text: "Record High Data Breach Costs: ASEAN & Malaysia Businesses Face $3.05M Impact", highlight: "ASEAN & Malaysia" },
  //       { text: "Cyber security an investment to protect enterprises and govt sector", highlight: "enterprises and govt sector" },
  //       { text: "Palo Alto Networks Suffers Security Breach Which Exposed Sensitive Employee Data", highlight: "Palo Alto" },
  //       { text: "Southeast Asia sees 43m local cyber threats to businesses in 2023", highlight: "Southeast Asia" },
  //       { text: "TM confirms data breach involving 250,000 Unifi Mobile Customers", highlight: "250,000" },
  //       { text: "Lazada Security Incident Affects 1.1 Million Accounts", highlight: "1.1 Million" },
  //       { text: "CyberSecurity Malaysia - Terdapat Peningkatan Ketara Ketirisan Data Di Malaysia", highlight: "Malaysia -" },
  //       { text: "Telecom and ISPs in Malaysia are being targeted by hackers -Palo Alto Networks", highlight: "-Palo Alto Networks" },
  //       { text: "Cyber security reports Malaysia is eighth most breached country in Q3 2023", highlight: "Malaysia is" },
  //       { text: "Perkeso confirms cybersecurity breach since Saturday", highlight: "Perkeso" },
  //       { text: "13 Juta Data Pengguna Astro, Maybank Dan SPR" },
  //       { text: "Malaysia investing reported leak of 46 million mobile users" },
  //       { text: "Southeast Asia's three-nation partnership to fight cyber threats (Australia, Malaysia and Singapore)", highlight: "(Australia, Malaysia and Singapore)" },
  //       { text: "Ransomware attacks up 45% in February, LockBit responsible", highlight: "45%" },
  //       { text: "Sephora Data Breach Sees Millions of Customer Information On Sale On The Dark Web", highlight: "Customer Information" }
  //     ]
  //   },
  //   mdrOfferingsSection: {
  //     badge: "EXPERIENCE . LEARN . EVOLVE",
  //     titleLine1: "Cybertronium",
  //     titleLine2: "MDR/SOC-as-a-Service",
  //     description: "Elevate your cybersecurity with enterprise-grade solutions!",
  //     offerings: [
  //       {
  //         title: "Advanced Threat Detection",
  //         description: "Utilize cutting-edge threat intelligence and analytics to spot potential threats across your digital terrain. Our service offers robust protection against complex cyber threats, ensuring your enterprise stays resilient in the face of evolving risks."
  //       },
  //       {
  //         title: "Security Information and Event Management (SIEM)",
  //         description: "Gain valuable insights into your security landscape with our advanced SIEM services. Collect, analyze, and respond to security data and events across your enterprise, enhancing your ability to detect and respond to threats."
  //       },
  //       {
  //         title: "Endpoint Detection and Response (EDR)",
  //         description: "Secure every endpoint, from laptops to mobile devices, against sophisticated attacks. Our EDR solutions provide real-time monitoring, threat detection, and automated response capabilities to safeguard your critical assets."
  //       },
  //       {
  //         title: "Extended Detection and Response (XDR)",
  //         description: "With our Extended Detection and Response (XDR) solution, enterprises can strengthen their cybersecurity posture, proactively detect and respond to emerging threats, and safeguard their critical business assets against cyber attacks."
  //       },
  //       {
  //         title: "Security Orchestration and Automated Response",
  //         description: "Streamline your security operations with our SOAR capabilities. Automate responses to common threats, freeing up your team to focus on strategic defense measures and complex threat analysis."
  //       },
  //       {
  //         title: "Cloud Security",
  //         description: "Secure your cloud environments with our comprehensive cloud security solutions. Protect your data, applications, and infrastructure from threats, ensuring the safety and privacy of your cloud-based resources."
  //       },
  //       {
  //         title: "Proactive Threat Hunting",
  //         description: "Go beyond automated defenses with our proactive threat hunting services. Our experts actively seek out hidden threats using advanced tools and techniques, ensuring your defenses stay ahead of the game."
  //       },
  //       {
  //         title: "Incident Response and Recovery",
  //         description: "Experience swift, coordinated incident response that minimizes downtime and mitigates damage. Our 24/7 response team ensures rapid recovery, getting your operations back to normal with minimal impact."
  //       },
  //       {
  //         title: "Continuous Vulnerability Management",
  //         description: "Identify and address vulnerabilities before they can be exploited. Our continuous vulnerability management service provides ongoing assessment and remediation support, fortifying your defenses and enhancing your security posture."
  //       },
  //       {
  //         title: "Regulatory Compliance",
  //         description: "Navigate complex regulatory landscapes with ease using our comprehensive compliance suite. We ensure your cybersecurity measures meet industry standards and regulatory requirements, protecting your business from legal and financial repercussions."
  //       },
  //       {
  //         title: "Threat Intelligence",
  //         description: "With our Threat Intelligence solution, enterprises can stay one step ahead of cyber adversaries, effectively mitigate risks, and safeguard their critical assets against evolving cyber threats."
  //       },
  //       {
  //         title: "Dark Web Monitoring",
  //         description: "With our Dark Web Monitoring services, organizations can stay one step ahead of cyber threats, safeguard their digital assets, and maintain trust and confidence among their stakeholders."
  //       }
  //     ],
  //     cta: {
  //       title: "Why wait?",
  //       description: "Let us fortify your Enterprise defense! Reach out to schedule an introductory call with one of our team members!",
  //       buttonText: "Contact Us"
  //     }
  //   }
  // },
  "ai-security": {
    id: "ai-security",
    pageHero: {
      image: aiSecurityHero,
      badge: "AI Security Services",
      titlePart1: "The Future is AI.",
      titlePart2: "So are the Threats.",
      description: "Cybertronium hardens your LLMs, AI models, agents and AI management systems against adversarial AI, autonomous attacker swarms and emerging global regulation — from pentest to ISO 42001 certification.",
      showStats: true,
      stats: [
        {
          value: "77%",
          label: ["Of enterprises run GenAI without", "an AI security program"]
        },
        {
          value: "10x",
          label: ["Faster adversarial AI attack", "iteration vs human red teams"]
        },
        {
          value: "$4.8M",
          label: ["Average cost of an AI/ML-related", "data breach"]
        },
        {
          value: "ISO 42001",
          label: ["First global AI management", "system standard"]
        }
      ]
    }
  }
};
