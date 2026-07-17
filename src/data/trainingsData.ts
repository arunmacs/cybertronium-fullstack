export interface TrainingData {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
  duration: string;
  image: string;
  sections: {
    title: string;
    content: string;
  }[];
  testimonials: {
    name: string;
    text: string;
    role?: string;
    industry?: string;
    image: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  pageHero?: {
    titlePart1: string;
    titlePart2: string;
    titlePart3?: string;
  };
}

export const trainingsData: Record<string, TrainingData> = {
  "training": {
    id: "training",
    title: "Continuous Learning Journey",
    description:
      "An ecosystem of guidance & monitoring",
    keyPoints: [
      "Understand the importance of training",
      "Learn how to train others",
      "Implement training programs",
      "Ensure compliance with international standards",
    ],
    duration: "3 Days",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    sections: [
      {
        title: "A birds-eye view of the course content",
        content:
          "This course provides a comprehensive overview of the training standard, covering all critical aspects from initial setup to ongoing compliance. You will gain deep insights into the requirements and best practices for implementing training programs.",
      },
      {
        title: "Certification Option 1: Training Foundation",
        content: "This foundational certification validates your understanding of training principles and basic implementation strategies. Ideal for professionals new to training programs.",
      },
      {
        title: "Certification Option 2: Training Professional",
        content: "Advanced certification for experienced professionals. Demonstrates mastery of complex training program management and compliance verification.",
      },
      {
        title: "Brochure",
        content: "Download our comprehensive training brochure to learn more about curriculum, pricing, and scheduling options.",
      },
    ],
    testimonials: [
      {
        name: "John Smith",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Gained deep insights into training standards. The instructor was knowledgeable and patient with complex topics.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      },
      {
        name: "Sarah Johnson",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Excellent course structure and real-world examples. Very beneficial for my certification career.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      },
      {
        name: "Michael Brown",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Comprehensive coverage of all training aspects. Highly recommend for anyone in training.",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      },
    ],
    faqs: [
      {
        question: "What is the prerequisite for this course?",
        answer:
          "Basic understanding of training and organizational processes is recommended. No specific certifications are required.",
      },
      {
        question: "How long is the certification valid?",
        answer:
          "Training certifications are typically valid for 3 years, with ongoing continuing education requirements.",
      },
      {
        question: "Is this course available online?",
        answer:
          "Yes, we offer both in-person and online training options to suit your learning preferences.",
      },
      {
        question: "Will I receive a certificate?",
        answer:
          "Yes, upon successful completion, you will receive an official training certification certificate.",
      },
    ],
    pageHero: {
      titlePart1: "Continuous",
      titlePart2: "Learning Journey",
    },
  },
  "iso-17024": {
    id: "iso-17024",
    title: "ISO 17024 Certification",
    description:
      "ISO/IEC 17024 is an international standard for bodies offering certification of persons. This training equips you with comprehensive knowledge of personnel certification schemes, competency assessment, and maintaining professional standards in the cybersecurity field.",
    keyPoints: [
      "Understand ISO 17024 framework and requirements",
      "Learn competency-based certification schemes",
      "Master assessment and evaluation methodologies",
      "Implement certification programs and maintenance procedures",
      "Ensure compliance with international standards",
    ],
    duration: "3 Days",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    sections: [
      {
        title: "A birds-eye view of the course content",
        content:
          "This course provides a comprehensive overview of the ISO 17024 standard, covering all critical aspects from initial setup to ongoing compliance. You will gain deep insights into the requirements and best practices for implementing certification schemes.",
      },
      {
        title: "Certification Option 1: ISO 17024 Foundation",
        content:
          "This foundational certification validates your understanding of ISO 17024 principles and basic implementation strategies. Ideal for professionals new to personnel certification schemes.",
      },
      {
        title: "Certification Option 2: ISO 17024 Professional",
        content:
          "Advanced certification for experienced professionals. Demonstrates mastery of complex certification program management and compliance verification.",
      },
      {
        title: "Brochure",
        content: "Download our comprehensive ISO 17024 training brochure to learn more about curriculum, pricing, and scheduling options.",
      },
    ],
    testimonials: [
      {
        name: "John Smith",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Gained deep insights into ISO standards. The instructor was knowledgeable and patient with complex topics.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      },
      {
        name: "Sarah Johnson",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Excellent course structure and real-world examples. Very beneficial for my certification career.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      },
      {
        name: "Michael Brown",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Comprehensive coverage of all ISO 17024 aspects. Highly recommend for anyone in certification.",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      },
    ],
    faqs: [
      {
        question: "What is the prerequisite for this course?",
        answer:
          "Basic understanding of cybersecurity and organizational processes is recommended. No specific certifications are required.",
      },
      {
        question: "How long is the certification valid?",
        answer:
          "ISO 17024 certifications are typically valid for 3 years, with ongoing continuing education requirements.",
      },
      {
        question: "Is this course available online?",
        answer:
          "Yes, we offer both in-person and online training options to suit your learning preferences.",
      },
      {
        question: "Will I receive a certificate?",
        answer:
          "Yes, upon successful completion, you will receive an official ISO 17024 certification certificate.",
      },
    ],
    pageHero: {
      titlePart1: "ISO 17024",
      titlePart2: "Certification",
    },
  },
  "globalace": {
    id: "globalace",
    title: "GlobalACE Certification",
    description:
      "GlobalACE is an internationally recognized certification program designed to validate expertise in cybersecurity awareness and education. This comprehensive training program develops your ability to design, deliver, and measure effective security awareness programs.",
    keyPoints: [
      "Master cybersecurity awareness program design",
      "Learn effective training delivery methodologies",
      "Understand behavioral change principles",
      "Implement measurement and evaluation frameworks",
      "Develop organizational security culture",
    ],
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    sections: [
      {
        title: "A birds-eye view of the course content",
        content:
          "GlobalACE training covers the complete lifecycle of security awareness programs from conception through implementation and evaluation. Learn from industry experts how to create impactful awareness initiatives.",
      },
      {
        title: "Certification Option 1: GlobalACE Foundation",
        content:
          "Entry-level certification demonstrating foundational knowledge of awareness program principles and best practices.",
      },
      {
        title: "Certification Option 2: GlobalACE Expert",
        content:
          "Advanced certification validating expertise in designing and executing complex, multi-faceted security awareness programs.",
      },
      {
        title: "Brochure",
        content:
          "Request our GlobalACE program brochure for detailed curriculum information, certification levels, and enrollment details.",
      },
    ],
    testimonials: [
      {
        name: "Emma Wilson",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Transformed how we approach security awareness. The tools and frameworks are immediately applicable.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      },
      {
        name: "David Lee",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "World-class training. Our awareness program engagement increased dramatically post-training.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      },
      {
        name: "Rachel Green",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Comprehensive program that covers all aspects of awareness training. Highly valuable investment.",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      },
    ],
    faqs: [
      {
        question: "Do I need prior awareness training experience?",
        answer:
          "No, the course is designed for professionals at all levels. Prior HR or training experience is helpful but not required.",
      },
      {
        question: "What is the job market for GlobalACE certified professionals?",
        answer:
          "Very strong. Organizations worldwide seek GlobalACE certified professionals for awareness program leadership roles.",
      },
      {
        question: "Is hands-on lab time included?",
        answer:
          "Yes, the course includes extensive hands-on exercises, case studies, and real-world scenario simulations.",
      },
      {
        question: "How much does GlobalACE certification cost?",
        answer:
          "Pricing varies based on location and training format. Please contact us for current pricing and available discounts.",
      },
    ],
    pageHero: {
      titlePart1: "GlobalACE",
      titlePart2: "Certification",
    },
  },
  "nist-nice": {
    id: "nist-nice",
    title: "NIST NICE Framework Certification",
    description:
      "Master the NIST NICE (Cybersecurity Workforce) Framework, which defines cybersecurity workforce roles and competencies. This training aligns career development with national standards, helping professionals and organizations build comprehensive security teams.",
    keyPoints: [
      "Understand NIST NICE framework structure and categories",
      "Learn cybersecurity roles and responsibilities",
      "Map competencies to organizational needs",
      "Develop workforce training programs",
      "Align career paths with NICE framework",
    ],
    duration: "4 Days",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    sections: [
      {
        title: "A birds-eye view of the course content",
        content:
          "This course provides comprehensive coverage of all NIST NICE framework categories, work roles, and specialized areas. Understand how to map security functions to organizational requirements.",
      },
      {
        title: "Certification Option 1: NIST NICE Associate",
        content: "Foundation-level certification for professionals new to the NIST NICE framework.",
      },
      {
        title: "Certification Option 2: NIST NICE Professional",
        content: "Advanced certification for experienced security professionals implementing NICE-based programs.",
      },
      {
        title: "Brochure",
        content: "Download our NIST NICE framework training materials and certification pathways.",
      },
    ],
    testimonials: [
      {
        name: "Thomas Anderson",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Perfect for understanding cybersecurity workforce organization. Helped structure our entire security team.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      },
      {
        name: "Lisa Martinez",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Excellent framework explanation. Now equipped to make informed hiring and training decisions.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      },
      {
        name: "Kevin White",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Comprehensive overview of workforce competencies. Essential for building effective security operations.",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      },
    ],
    faqs: [
      {
        question: "Is NIST NICE framework specific to US government?",
        answer:
          "While developed by NIST, the NICE framework is widely adopted globally by organizations of all types and sizes.",
      },
      {
        question: "How does NICE relate to other security frameworks?",
        answer:
          "NICE complements frameworks like NIST Cybersecurity Framework by focusing specifically on workforce competencies and roles.",
      },
      {
        question: "Can this help with career planning?",
        answer:
          "Absolutely. NICE provides clear career pathways and role definitions to guide professional development.",
      },
      {
        question: "Is the exam difficult?",
        answer:
          "The certification exam is comprehensive but fair. Our training thoroughly prepares you for success.",
      },
    ],
    pageHero: {
      titlePart1: "NIST NICE",
      titlePart2: "Framework Certification",
    },
  },
  "globalace-framework": {
    id: "globalace-framework",
    title: "GlobalACE Framework Mapping",
    description:
      "Deep exploration of GlobalACE framework mappings and how they align with international standards. This specialized training helps organizations understand GlobalACE's position in the broader cybersecurity awareness landscape.",
    keyPoints: [
      "Understand GlobalACE framework structure",
      "Learn mapping with other frameworks",
      "Master framework alignment strategies",
      "Implement multi-framework awareness programs",
      "Understand framework evolution and updates",
    ],
    duration: "2 Days",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    sections: [
      {
        title: "A birds-eye view of the course content",
        content:
          "Specialized training on GlobalACE framework mappings and relationships with other frameworks.",
      },
      {
        title: "Certification Option 1: Framework Mapper",
        content: "Certification for professionals mapping security frameworks.",
      },
      {
        title: "Certification Option 2: Framework Specialist",
        content: "Advanced certification for framework architecture experts.",
      },
      {
        title: "Brochure",
        content: "Request GlobalACE framework mapping training details.",
      },
    ],
    testimonials: [
      {
        name: "Frank Thompson",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Excellent insight into framework relationships. Very valuable for program alignment.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      },
      {
        name: "Grace Walsh",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Comprehensive framework overview. Now understand how to align multiple standards.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      },
      {
        name: "Henry Young",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Best framework training available. Essential for modern security programs.",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      },
    ],
    faqs: [
      {
        question: "Do I need to know all frameworks first?",
        answer:
          "No, but basic knowledge of major frameworks like NIST is helpful.",
      },
      {
        question: "How often are frameworks updated?",
        answer:
          "Frameworks evolve regularly. We keep training current with latest versions.",
      },
      {
        question: "Can I apply multiple frameworks together?",
        answer:
          "Yes, and this course teaches how to harmonize multiple frameworks effectively.",
      },
      {
        question: "Is this for auditors?",
        answer:
          "Yes, particularly valuable for compliance and audit professionals.",
      },
    ],
    pageHero: {
      titlePart1: "GlobalACE",
      titlePart2: "Framework Mapping",
    },
  },
  "mitre-attck": {
    id: "mitre-attck",
    title: "MITRE ATT&CK Framework Training",
    description:
      "Learn the MITRE ATT&CK framework, a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. Master threat modeling, detection strategies, and defensive countermeasures.",
    keyPoints: [
      "Understand ATT&CK matrix structure and tactics",
      "Learn adversary techniques and sub-techniques",
      "Map known attack campaigns to ATT&CK",
      "Develop detection strategies aligned with ATT&CK",
      "Implement threat-informed defense strategies",
    ],
    duration: "3 Days",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    sections: [
      {
        title: "A birds-eye view of the course content",
        content:
          "Comprehensive training covering all aspects of the MITRE ATT&CK framework including Enterprise, Mobile, and ICS matrices.",
      },
      {
        title: "Certification Option 1: ATT&CK Fundamentals",
        content: "Validates foundational knowledge of the ATT&CK framework and threat modeling principles.",
      },
      {
        title: "Certification Option 2: ATT&CK Expert",
        content: "Advanced certification demonstrating expertise in applying ATT&CK for defensive planning.",
      },
      {
        title: "Brochure",
        content: "Learn about our ATT&CK training programs and certification pathways.",
      },
    ],
    testimonials: [
      {
        name: "Alex Carter",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Invaluable for understanding real-world attack patterns. Changed how we approach threat detection.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      },
      {
        name: "Nicole Taylor",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Excellent practical examples. Now using ATT&CK framework in all our threat assessments.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      },
      {
        name: "Mark Peterson",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Best investment for our SOC team. Significantly improved our detection capabilities.",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      },
    ],
    faqs: [
      {
        question: "Is ATT&CK only for enterprises?",
        answer:
          "No, ATT&CK is applicable to organizations of all sizes. We have specific training for SMEs.",
      },
      {
        question: "Can I use ATT&CK with other frameworks?",
        answer:
          "Yes, ATT&CK is designed to complement other frameworks like NIST and CIS Controls.",
      },
      {
        question: "How often is ATT&CK updated?",
        answer:
          "ATT&CK is continuously updated quarterly with new techniques and refinements based on research.",
      },
      {
        question: "Is there hands-on lab work?",
        answer:
          "Yes, our training includes practical labs mapping real attack scenarios to ATT&CK techniques.",
      },
    ],
    pageHero: {
      titlePart1: "MITRE ATT&CK",
      titlePart2: "Framework Training",
    },
  },
  "certified-penetration-tester": {
    id: "certified-penetration-tester",
    title: "Certified Penetration Tester",
    description:
      "This is a hands-on deep-dive training and certification programme that enables the participants to handle vulnerability assessments and penetration tests for their customers. Learn comprehensive penetration testing methodologies, tools, and techniques to identify and exploit security weaknesses.",
    keyPoints: [
      "Understand all Level 1 Attacks and their entry points",
      "Learn how to conduct vulnerability assessment on networks and systems",
      "Learn ways to harden networks and systems therefore ensuring corporate infrastructure",
      "Learn exploit techniques on Network, Web, WiFi, and Mobile infrastructure",
      "Prepare and submit Vulnerability Assessment & Pentest reports",
    ],
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    sections: [
      {
        title: "A birds-eye view of the course content",
        content:
          "Comprehensive penetration testing course covering reconnaissance, scanning, exploitation, and reporting. Hands-on labs using industry-standard tools and techniques.",
      },
      {
        title: "Certification Option 1: GlobalACE Certification",
        content: "Foundation-level certification validating core penetration testing competencies.",
      },
      {
        title: "Certification Option 2: Cybertronium Certification",
        content:
          "Advanced certification demonstrating expertise in complex penetration testing scenarios.",
      },
      {
        title: "Brochure",
        content: "Download our Penetration Testing course brochure for complete curriculum details.",
      },
    ],
    testimonials: [
      {
        name: "James Wilson",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Truly inspiring & well-conducted. I gained various technical skills that now assist me in my day to day job in cybersecurity field.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      },
      {
        name: "Marcus Johnson",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Hands-on Labs with latest tools. Very beneficial as the course taught me security from hackers' perspective and learn how to defend.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      },
      {
        name: "Christopher Lee",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Trainer was patient and knowledgeable. Taking this course was a stepping stone and I'm very pleased with the learning based on latest attacks and vulnerabilities.",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      },
    ],
    faqs: [
      {
        question: "What is the prerequisite for this course?",
        answer:
          "A ready-to-learn attitude is a must, and an analytical mind is definitely a huge plus. Network and IT Software systems background would be an advantage.",
      },
      {
        question: "Is it necessary to take the exam on 5th day?",
        answer:
          "The exam voucher validity is 6 months. You can take the exam within 6 months from your course date. We recommend you to take the exam at the earliest.",
      },
      {
        question: "Where can I get the Course Schedule?",
        answer:
          "Reach out to us via our Contact Us page with details on your location and interested course. We will find the nearest training partner to assist with F2F or online classes.",
      },
      {
        question: "With this 5-day course, will I become a professional?",
        answer:
          "A professional in 5 days is just a marketing gimmick. We get you started with the right knowledge and assist you through the process of achieving professionalism after the class with mentoring and guidance through our Community Ecosystem platform. CYBERTRON.",
      },
    ],
    pageHero: {
      titlePart1: "Certified",
      titlePart2: "Penetration Tester",
    },
  },
  "certified-soc-analyst": {
    id: "certified-soc-analyst",
    title: "Certified Security Operations Center (SOC) Analyst",
    description:
      "Comprehensive training program for security operations center professionals. Learn to monitor, detect, analyze, and respond to security incidents in real-time using advanced SOC tools and techniques.",
    keyPoints: [
      "Master SIEM platform operation and configuration",
      "Learn security event correlation and analysis",
      "Understand incident detection and response workflows",
      "Master threat intelligence integration",
      "Develop forensic analysis skills",
    ],
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    sections: [
      {
        title: "A birds-eye view of the course content",
        content:
          "Complete SOC analyst training covering monitoring, alerting, incident response, and threat hunting methodologies.",
      },
      {
        title: "Certification Option 1: SOC Operations Specialist",
        content: "Entry-level certification for SOC operations professionals.",
      },
      {
        title: "Certification Option 2: Senior SOC Analyst",
        content: "Advanced certification for experienced analysts managing complex security operations.",
      },
      {
        title: "Brochure",
        content: "Download SOC Analyst training program details and curriculum overview.",
      },
    ],
    testimonials: [
      {
        name: "Patricia Davis",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Excellent hands-on SIEM training. Now confident in daily SOC operations tasks.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      },
      {
        name: "Robert Brown",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Very comprehensive SOC operations course. Great value for incident responders.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      },
      {
        name: "Sandra Thompson",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Best SOC training available. Improved our entire detection and response capabilities.",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      },
    ],
    faqs: [
      {
        question: "What tools are covered in the training?",
        answer:
          "We cover major SIEM platforms like Splunk, ArcSight, and ELK Stack, along with common SOC tools.",
      },
      {
        question: "Do I need prior SOC experience?",
        answer:
          "Recommended to have basic IT and security knowledge, but the course is structured for various experience levels.",
      },
      {
        question: "How hands-on is this training?",
        answer:
          "Highly hands-on with live labs using actual SOC tools and simulated security incidents.",
      },
      {
        question: "What is the job outlook for SOC analysts?",
        answer:
          "Excellent. Organizations worldwide are hiring for SOC analyst positions with competitive salaries.",
      },
    ],
    pageHero: {
      titlePart1: "Certified SOC",
      titlePart2: "Analyst",
    },
  },
  "certified-red-team-professional": {
    id: "certified-red-team-professional",
    title: "Certified Red Team Professional",
    description:
      "Advanced training for security professionals conducting authorized red team operations. Learn advanced attack techniques, evasion methods, and persistence mechanisms used by sophisticated adversaries.",
    keyPoints: [
      "Master advanced exploitation techniques",
      "Learn evasion and anti-forensics methods",
      "Understand advanced persistence mechanisms",
      "Master social engineering at scale",
      "Develop comprehensive red team operational capabilities",
    ],
    duration: "7 Days",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    sections: [
      {
        title: "A birds-eye view of the course content",
        content:
          "Intensive red team training covering command and control, persistence, lateral movement, and exfiltration techniques.",
      },
      {
        title: "Certification Option 1: Red Team Operator",
        content: "Validates core red team operational capabilities.",
      },
      {
        title: "Certification Option 2: Red Team Leader",
        content: "Advanced certification for leading complex red team engagements.",
      },
      {
        title: "Brochure",
        content: "Request detailed red team training curriculum and engagement case studies.",
      },
    ],
    testimonials: [
      {
        name: "Victor Garcia",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Most comprehensive red team training. Significantly enhanced our offensive capabilities.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      },
      {
        name: "Angela Rodriguez",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Outstanding practical exercises. Real-world scenarios that directly apply to our operations.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      },
      {
        name: "Steven Martinez",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Expert instructors with real field experience. Highly recommend for serious operators.",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      },
    ],
    faqs: [
      {
        question: "What level of experience is required?",
        answer:
          "This is advanced training. You should have prior penetration testing experience and systems administration knowledge.",
      },
      {
        question: "Are there legal considerations?",
        answer:
          "Yes, red team operations must be conducted only with proper authorization. We emphasize legal and ethical frameworks.",
      },
      {
        question: "What tools are taught?",
        answer:
          "We cover Cobalt Strike, Empire, Metasploit, and various custom red team tools and frameworks.",
      },
      {
        question: "Is this suitable for defensive teams?",
        answer:
          "Absolutely. Defenders benefit greatly from understanding red team techniques for better threat modeling.",
      },
    ],
    pageHero: {
      titlePart1: "Certified Red Team",
      titlePart2: "Professional",
    },
  },
  "certified-cyber-threat-intelligence-analyst": {
    id: "certified-cyber-threat-intelligence-analyst",
    title: "Certified Cyber Threat Intelligence Analyst",
    description:
      "Master threat intelligence collection, analysis, and reporting. Learn to develop actionable intelligence that guides defensive priorities and security strategy for your organization.",
    keyPoints: [
      "Understand threat intelligence frameworks and methodologies",
      "Learn intelligence analysis and reporting standards",
      "Master threat actor profiling and campaign tracking",
      "Understand APT group tactics and campaigns",
      "Develop threat intelligence dissemination strategies",
    ],
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    sections: [
      {
        title: "A birds-eye view of the course content",
        content:
          "Comprehensive threat intelligence training covering collection, processing, analysis, and dissemination.",
      },
      {
        title: "Certification Option 1: Threat Intelligence Analyst",
        content: "Foundation-level certification for threat intelligence professionals.",
      },
      {
        title: "Certification Option 2: Senior Threat Intelligence Manager",
        content: "Advanced certification for leading threat intelligence programs.",
      },
      {
        title: "Brochure",
        content: "Learn about our threat intelligence training programs and industry partnerships.",
      },
    ],
    testimonials: [
      {
        name: "Michelle Chen",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Transformed our threat intelligence capabilities. Now making data-driven security decisions.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      },
      {
        name: "Daniel Foster",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Excellent course on threat actor profiling. Directly applicable to our threat hunting.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      },
      {
        name: "Jennifer Hayes",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Best threat intelligence training available. Highly recommend for intelligence analysts.",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      },
    ],
    faqs: [
      {
        question: "Is this for security analysts only?",
        answer:
          "No, threat intelligence professionals come from various backgrounds including research, journalism, and military intelligence.",
      },
      {
        question: "What sources are covered?",
        answer:
          "Covers open source intelligence (OSINT), dark web sources, industry partnerships, and government intelligence feeds.",
      },
      {
        question: "How is this different from general security training?",
        answer:
          "Threat intelligence is specialized and focuses on systematic analysis of threats to inform strategic decisions.",
      },
      {
        question: "What is the ROI for threat intelligence?",
        answer:
          "Strong ROI by reducing incident response time, improving threat prioritization, and enabling proactive defense.",
      },
    ],
    pageHero: {
      titlePart1: "Certified Threat",
      titlePart2: "Intelligence Analyst",
    },
  },
  "certified-cloud-security-professional": {
    id: "certified-cloud-security-professional",
    title: "Certified Cloud Security Professional",
    description:
      "Comprehensive cloud security training covering AWS, Azure, and GCP. Master cloud-specific security architectures, compliance frameworks, and incident response in cloud environments.",
    keyPoints: [
      "Master cloud infrastructure security models",
      "Learn cloud-specific compliance frameworks",
      "Understand identity and access management in cloud",
      "Master cloud data protection and encryption",
      "Learn cloud incident response and forensics",
    ],
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    sections: [
      {
        title: "A birds-eye view of the course content",
        content:
          "Complete cloud security training covering AWS, Azure, and GCP with hands-on labs in all three platforms.",
      },
      {
        title: "Certification Option 1: Cloud Security Associate",
        content: "Entry-level certification for cloud security professionals.",
      },
      {
        title: "Certification Option 2: Cloud Security Expert",
        content: "Advanced certification for cloud security architects and specialists.",
      },
      {
        title: "Brochure",
        content: "Download cloud security training curriculum and cloud provider certification mappings.",
      },
    ],
    testimonials: [
      {
        name: "Kevin Murphy",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Comprehensive cloud security training. Now confident securing multi-cloud environments.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      },
      {
        name: "Lisa Anderson",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Excellent coverage of AWS, Azure, and GCP security. Very practical and hands-on approach.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      },
      {
        name: "Brandon Scott",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Best cloud security training available. Helped my career transition to cloud security roles.",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      },
    ],
    faqs: [
      {
        question: "Do I need to know all three cloud platforms?",
        answer:
          "No, course covers AWS, Azure, and GCP, but you can specialize. However, understanding multiple platforms is valuable.",
      },
      {
        question: "What about hybrid cloud security?",
        answer:
          "Yes, we cover hybrid cloud architectures and security considerations.",
      },
      {
        question: "Are cloud provider certifications covered?",
        answer:
          "Yes, our training aligns with AWS, Azure, and GCP official certification exams.",
      },
      {
        question: "How hands-on are the labs?",
        answer:
          "Very hands-on. You'll provision and secure real cloud resources in sandbox environments.",
      },
    ],
    pageHero: {
      titlePart1: "Certified Cloud",
      titlePart2: "Security Professional",
    },
  },
  "certified-secure-developer": {
    id: "certified-secure-developer",
    title: "Certified Secure Developer",
    description:
      "Specialized training for developers to integrate security throughout the software development lifecycle. Learn secure coding practices, vulnerability identification, and secure architecture design.",
    keyPoints: [
      "Master OWASP Top 10 vulnerabilities",
      "Learn secure coding best practices",
      "Understand authentication and authorization mechanisms",
      "Master cryptography in application context",
      "Learn secure API design and implementation",
    ],
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    sections: [
      {
        title: "A birds-eye view of the course content",
        content:
          "Comprehensive secure coding training for developers covering common vulnerabilities and secure development practices.",
      },
      {
        title: "Certification Option 1: Secure Developer Associate",
        content: "Foundation-level certification for developers new to security.",
      },
      {
        title: "Certification Option 2: Secure Developer Architect",
        content: "Advanced certification for architects designing secure systems.",
      },
      {
        title: "Brochure",
        content: "Request secure development training curriculum and programming language-specific tracks.",
      },
    ],
    testimonials: [
      {
        name: "Oliver Davis",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Excellent security practices course. Now writing more secure code daily.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      },
      {
        name: "Sophie Clark",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Very beneficial as the course taught me security fundamentals and practical implementation.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      },
      {
        name: "Nathan Wilson",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Best investment for our development team. Significantly reduced security bugs.",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      },
    ],
    faqs: [
      {
        question: "What programming languages are covered?",
        answer:
          "We cover Java, Python, C#, JavaScript, and PHP. Language-specific tracks available.",
      },
      {
        question: "Is this only for web developers?",
        answer:
          "No, we cover web, mobile, and desktop application security. Even embedded systems security.",
      },
      {
        question: "How does this relate to DevSecOps?",
        answer:
          "This course provides developer skills foundation for DevSecOps integration.",
      },
      {
        question: "Do I get hands-on coding exercises?",
        answer:
          "Yes, extensive hands-on labs with vulnerable code examples and secure refactoring exercises.",
      },
    ],
    pageHero: {
      titlePart1: "Certified Secure",
      titlePart2: "Developer",
    },
  },
  "certified-experiential-cybersecurity-aware-user": {
    id: "certified-experiential-cybersecurity-aware-user",
    title: "Certified Experiential Cybersecurity Aware User",
    description:
      "Advanced awareness training using experiential learning methods. Participants engage in hands-on simulations of cyber attacks to understand real security threats and develop practical defenses.",
    keyPoints: [
      "Participate in realistic phishing simulations",
      "Understand social engineering tactics",
      "Learn incident reporting best practices",
      "Master password security and multi-factor authentication",
      "Develop secure work-from-home practices",
    ],
    duration: "2 Days",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    sections: [
      {
        title: "A birds-eye view of the course content",
        content:
          "Experiential learning course using realistic simulations to teach cybersecurity awareness.",
      },
      {
        title: "Certification Option 1: Cyber Aware User",
        content: "Foundation-level awareness certification.",
      },
      {
        title: "Certification Option 2: Advanced Cyber Aware User",
        content: "Advanced certification for employees handling sensitive data.",
      },
      {
        title: "Brochure",
        content: "Learn about our experiential cyber awareness programs for your organization.",
      },
    ],
    testimonials: [
      {
        name: "Sophia Rodriguez",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Truly inspiring & engaging. The simulations made security concepts stick.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      },
      {
        name: "Jason Murphy",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Hands-on approach was excellent. Now I understand real security threats.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      },
      {
        name: "Maria Garcia",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Best awareness training I've received. Interactive and memorable.",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      },
    ],
    faqs: [
      {
        question: "Is this training suitable for all employees?",
        answer: "Yes, absolutely. It's designed for non-technical users to security experts.",
      },
      {
        question: "Are the phishing simulations safe?",
        answer:
          "Completely safe. All simulations are conducted in controlled environments for educational purposes.",
      },
      {
        question: "Will I be embarrassed if I fail simulations?",
        answer:
          "No, the goal is learning, not punishment. Failing is part of the learning process.",
      },
      {
        question: "How long does the certification last?",
        answer: "Awareness certifications typically remain valid for 1 year before recommended refresher.",
      },
    ],
    pageHero: {
      titlePart1: "Certified Experiential",
      titlePart2: "Cyber Aware User",
    },
  },
  "certified-security-aware-user": {
    id: "certified-security-aware-user",
    title: "Certified Security Aware User",
    description:
      "Comprehensive security awareness certification for all employees. Learn fundamental cybersecurity concepts, identify threats, and practice secure computing behaviors in your daily work.",
    keyPoints: [
      "Understand cybersecurity threat landscape",
      "Learn to identify common attack types",
      "Master safe email and web practices",
      "Understand data classification and handling",
      "Learn incident reporting procedures",
    ],
    duration: "1 Day",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    sections: [
      {
        title: "A birds-eye view of the course content",
        content:
          "Comprehensive one-day awareness course covering fundamental security concepts for all employees.",
      },
      {
        title: "Certification Option 1: Security Aware User",
        content: "Standard security awareness certification.",
      },
      {
        title: "Certification Option 2: Security Aware User Plus",
        content: "Enhanced certification with additional compliance training.",
      },
      {
        title: "Brochure",
        content: "Request security awareness training program details for your organization.",
      },
    ],
    testimonials: [
      {
        name: "Emily Thompson",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Great awareness training. Now understand why security policies exist.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      },
      {
        name: "Christopher Adams",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Well explained concepts. Applicable to daily work immediately.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      },
      {
        name: "Amanda Warren",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Excellent security fundamentals course. Highly recommend for all employees.",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      },
    ],
    faqs: [
      {
        question: "Is this training mandatory?",
        answer:
          "Many organizations require this. Check with your HR or security team for company requirements.",
      },
      {
        question: "How long does the training take?",
        answer: "The standard course is 1 day, with optional additional hands-on sessions.",
      },
      {
        question: "Will there be an exam?",
        answer: "Yes, a simple assessment at the end to verify understanding of key concepts.",
      },
      {
        question: "Is this suitable for technical staff?",
        answer:
          "Yes, while designed for all staff, technical employees benefit from security awareness too.",
      },
    ],
    pageHero: {
      titlePart1: "Certified Security",
      titlePart2: "Aware User",
    },
  },
  "certified-security-aware-cxo": {
    id: "certified-security-aware-cxo",
    title: "Certified Security Aware CxO",
    description:
      "Executive-level cybersecurity awareness training for C-suite and leadership. Understand business risks, governance implications, and strategic security leadership responsibilities.",
    keyPoints: [
      "Understand cybersecurity business risks",
      "Learn governance and compliance requirements",
      "Master incident response decision-making",
      "Understand security budgeting and ROI",
      "Learn stakeholder communication strategies",
    ],
    duration: "1 Day",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    sections: [
      {
        title: "A birds-eye view of the course content",
        content:
          "Executive-focused security course covering business implications, strategic risks, and leadership responsibilities.",
      },
      {
        title: "Certification Option 1: Security-Aware Executive",
        content: "Certification for C-suite executives and board members.",
      },
      {
        title: "Certification Option 2: Security Risk Manager",
        content: "Advanced certification for security-focused executives.",
      },
      {
        title: "Brochure",
        content: "Request executive security awareness program details and curriculum.",
      },
    ],
    testimonials: [
      {
        name: "Dr. Richard Bennett",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Finally, security explained from business perspective. Very valuable for board discussions.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      },
      {
        name: "Catherine Moore",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Excellent executive briefing on security risks and governance. Highly professional.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      },
      {
        name: "James Thompson",
        role: "Cybersecurity Professional",
        industry: "Information Technology",
        text: "Essential training for board members. Significantly improved our security strategy discussions.",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      },
    ],
    faqs: [
      {
        question: "Is this only for C-level executives?",
        answer:
          "Primarily for C-suite, but beneficial for senior management and board directors.",
      },
      {
        question: "How is this different from standard awareness training?",
        answer:
          "Focuses on business impact, governance, risk management, and strategic decision-making.",
      },
      {
        question: "Can this help with incident response decisions?",
        answer:
          "Yes, includes crisis decision-making frameworks and stakeholder communication.",
      },
      {
        question: "Is there technical content?",
        answer:
          "Minimal technical content. Focus is on business risks, compliance, and strategic implications.",
      },
    ],
    pageHero: {
      titlePart1: "Certified Security",
      titlePart2: "Aware CxO",
    },
  },
};
