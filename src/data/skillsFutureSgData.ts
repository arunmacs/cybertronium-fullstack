// ─── Types ───────────────────────────────────────────────────────────────────

export interface SSGHeroData {
  titlePart1: string;
  titlePart2: string;
  description: string;
}

export interface SSGOverviewData {
  subheading: string;
  heading: string;
  description: string;
  listItems: string[];
  bottomParagraph: string;
}

export interface SSGApprovalCard {
  title: string;
  description: string;
  items?: string[];
}

export interface SSGApprovalData {
  subheading: string;
  heading: string;
  cards: SSGApprovalCard[];
  footerText: string;
  footerLinkText: string;
  footerLinkUrl: string;
}

export interface SSGWhyTrainData {
  heading: string;
  description: string;
  listItems: string[];
  bottomParagraph: string;
  commitmentHeading: string;
  commitmentDescription: string;
}

// ─── Hero Section ────────────────────────────────────────────────────────────

export const skillsFutureSgHeroData: SSGHeroData = {
  titlePart1: "SkillsFuture Singapore",
  titlePart2: "Approved Training",
  description:
    "At Cybertronium, we are committed to delivering high-quality, industry-relevant cybersecurity and AI security training that meets recognized professional and national standards. Our training programs are approved by SkillsFuture Singapore (SSG), providing learners and organizations with confidence in the quality, relevance, and credibility of our courses.",
};

// ─── What is SkillsFuture Singapore (SSG)? ───────────────────────────────────

export const skillsFutureSgOverviewData: SSGOverviewData = {
  subheading: "Framework Overview",
  heading: "What is SkillsFuture Singapore (SSG)?",
  description:
    "SkillsFuture Singapore (SSG) is a statutory board under the Singapore Government that drives national workforce skills development and lifelong learning initiatives.",
  listItems: [
    "Industry-aligned and future-focused",
    "Delivered with quality assurance standards",
    "Relevant to workforce transformation and digital economy needs",
    "Designed to improve employability and professional capabilities",
  ],
  bottomParagraph:
    "SSG-approved training providers undergo a rigorous evaluation process to ensure they meet established standards in curriculum quality, trainer competency, learner outcomes, and operational excellence.",
};

// ─── Why SSG Approval Matters ────────────────────────────────────────────────

export const skillsFutureSgApprovalData: SSGApprovalData = {
  subheading: "SkillsFuture Recognition",
  heading: "Why SSG Approval Matters",
  cards: [
    {
      title: "Government-Recognized Quality Assurance",
      description:
        "SSG approval demonstrates that a training program has been reviewed and recognized against Singapore's professional training standards. This gives learners and organizations confidence that the training delivers practical and measurable value.",
    },
    {
      title: "Enhanced Professional Credibility",
      description:
        "Completing SSG-approved training strengthens professional credibility and demonstrates commitment to continuous learning and capability development. For employers, it ensures teams are trained using structured, recognized, and industry-aligned learning pathways.",
    },
    {
      title: "Access to Funding Support (Where Applicable)",
      description:
        "Eligible individuals and organizations in Singapore may benefit from SkillsFuture funding support and training subsidies for approved programs, helping reduce training costs while investing in workforce development.",
    },
    {
      title: "Industry-Relevant Curriculum",
      description:
        "SSG-approved courses are designed to address real-world industry needs and evolving workforce demands. This is especially important in fast-changing domains such as:",
      items: [
        "Cybersecurity",
        "AI Security",
        "Governance, Risk & Compliance (GRC)",
        "Cloud Security",
        "Security Operations Center (SOC) Operations",
        "Digital Risk Management",
      ],
    },
    {
      title: "Workforce Transformation & Upskilling",
      description:
        "As organizations accelerate digital transformation and AI adoption, there is increasing demand for professionals with practical cybersecurity and AI governance capabilities.\nSSG-approved programs help organizations:",
      items: [
        "Upskill employees efficiently",
        "Build cyber resilience",
        "Strengthen AI governance readiness",
        "Improve operational security maturity",
        "Prepare teams for emerging threats and compliance requirements",
      ],
    },
  ],
  footerText:
    "For eligibility and funding details, please refer to the ",
  footerLinkText: "official SkillsFuture Singapore website.",
  footerLinkUrl: "https://www.skillsfuture.gov.sg/",
};

// ─── Why Train with Cybertronium? ────────────────────────────────────────────

export const skillsFutureSgWhyTrainData: SSGWhyTrainData = {
  heading: "Why Train with Cybertronium?",
  description:
    "At Cybertronium, our training programs are designed by experienced industry practitioners with deep expertise in cybersecurity, AI security, governance, and enterprise risk management. Our focus is on practical, real-world capability building through:",
  listItems: [
    "Hands-on learning",
    "Industry use cases",
    "Strategic and technical perspectives",
    "AI-enabled cybersecurity approaches",
    "Enterprise-focused security frameworks",
  ],
  bottomParagraph:
    "We help professionals and organizations stay ahead of evolving cyber threats while preparing for the future of AI-driven security operations.",
  commitmentHeading: "Our Commitment",
  commitmentDescription:
    "Cybertronium remains committed to supporting lifelong learning, workforce transformation, and cybersecurity excellence through high-quality, SSG-approved professional training. Whether you are an individual professional looking to advance your career or an organization strengthening your cyber capabilities, our programs are designed to deliver impactful and future-ready skills development.",
};
