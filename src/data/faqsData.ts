import { servicesData } from "@/data/servicesData";

const newFaqsData: Record<string, {question: string; answer: string}[]> = {
  "vulnerability-assessment": [
    {question: "What is a vulnerability assessment?", answer: "A vulnerability assessment identifies security weaknesses in networks, systems, applications, and infrastructure."},
    {question: "Why is vulnerability assessment important?", answer: "It helps organizations discover and address security gaps before attackers can exploit them."},
    {question: "How often should vulnerability assessments be performed?", answer: "Organizations should perform assessments regularly, especially after significant system or infrastructure changes."},
    {question: "What assets can be assessed?", answer: "Servers, endpoints, cloud environments, web applications, databases, and network devices can all be assessed."},
    {question: "Does Cybertronium provide remediation guidance?", answer: "Yes, detailed recommendations are provided to help organizations remediate identified vulnerabilities."}
  ],
  "penetration-testing": [
    {question: "What is penetration testing?", answer: "Penetration testing is a simulated cyberattack used to identify and validate exploitable security vulnerabilities."},
    {question: "Why is penetration testing important?", answer: "It helps organizations understand how attackers could compromise systems and what controls need improvement."},
    {question: "What types of penetration testing are available?", answer: "Network, web application, cloud, mobile application, wireless, and infrastructure penetration testing are commonly performed."},
    {question: "How often should penetration testing be conducted?", answer: "At least annually or after major infrastructure, application, or network changes."},
    {question: "What deliverables are provided after testing?", answer: "Organizations receive detailed findings, risk ratings, evidence, and remediation recommendations."}
  ],
  "app-security-services": [
    {question: "What is application security testing?", answer: "Application security testing evaluates web applications, APIs, and software for security vulnerabilities."},
    {question: "Why is application security important?", answer: "It helps prevent data breaches, unauthorized access, and application-level attacks."},
    {question: "What vulnerabilities can application security testing identify?", answer: "Common vulnerabilities include SQL injection, cross-site scripting, authentication flaws, and insecure configurations."},
    {question: "Does application security testing include API security?", answer: "Yes, modern application security assessments include API security testing."},
    {question: "How often should applications be tested?", answer: "Applications should be tested during development and before major releases."}
  ],
  "red-purple-teaming": [
    {question: "What is red teaming?", answer: "Red teaming simulates real-world cyberattacks to evaluate an organization’s ability to detect and respond to threats."},
    {question: "How is red teaming different from penetration testing?", answer: "Red teaming focuses on achieving attack objectives while testing people, processes, and technology."},
    {question: "What are the benefits of red teaming?", answer: "It helps organizations identify security gaps and improve detection and response capabilities."},
    {question: "Who should conduct red team exercises?", answer: "Experienced cybersecurity professionals with expertise in offensive security and adversary simulation."},
    {question: "How often should red team assessments be performed?", answer: "Organizations should conduct red team exercises periodically based on risk and security maturity."},
    {question: "What is purple teaming?", answer: "Purple teaming is a collaborative exercise between offensive and defensive security teams to improve security effectiveness."},
    {question: "Why is purple teaming important?", answer: "It helps organizations strengthen detection, response, and security operations capabilities."},
    {question: "How does purple teaming improve SOC performance?", answer: "It validates detection rules and improves incident response processes."},
    {question: "Who benefits from purple team exercises?", answer: "Organizations with mature security operations and incident response teams."},
    {question: "What is the outcome of a purple team engagement?", answer: "Improved visibility, enhanced detection capabilities, and stronger security controls."}
  ],
  "firmware-security": [
    {question: "What is firmware security testing?", answer: "Firmware security testing evaluates embedded software for vulnerabilities and security weaknesses."},
    {question: "Why is firmware security important?", answer: "Compromised firmware can provide attackers with persistent and difficult-to-detect access."},
    {question: "Which devices require firmware security testing?", answer: "IoT devices, industrial systems, networking equipment, and embedded devices."},
    {question: "What risks can firmware testing identify?", answer: "Backdoors, insecure configurations, weak authentication, and outdated components."},
    {question: "How does firmware security improve resilience?", answer: "It reduces the risk of device compromise and strengthens overall product security."}
  ],
  "compromise-assessment": [
    {question: "What is a compromise assessment?", answer: "A compromise assessment determines whether an organization has been breached or compromised."},
    {question: "When should a compromise assessment be performed?", answer: "After suspicious activity, security incidents, or signs of unauthorized access."},
    {question: "What indicators are examined during a compromise assessment?", answer: "Malware, suspicious accounts, lateral movement, persistence mechanisms, and unauthorized access."},
    {question: "Can compromise assessments identify hidden threats?", answer: "Yes, they help uncover advanced threats that may evade traditional security controls."},
    {question: "What is the outcome of a compromise assessment?", answer: "Organizations receive findings, evidence, and recommendations for remediation."}
  ],
  "cybersecurity-maturity-assessment": [
    {question: "What is a cybersecurity maturity assessment?", answer: "It evaluates the effectiveness and maturity of an organization’s cybersecurity program."},
    {question: "Why is cybersecurity maturity important?", answer: "Higher maturity levels improve resilience against evolving cyber threats."},
    {question: "Which frameworks are used during assessments?", answer: "NIST, CIS Controls, ISO 27001, and industry-specific standards."},
    {question: "What areas are assessed?", answer: "Governance, risk management, technology, processes, and people."},
    {question: "What are the benefits of a maturity assessment?", answer: "Organizations gain a roadmap for improving cybersecurity capabilities."}
  ],
  "zero-trust-implementation": [
    {question: "What is Zero Trust security?", answer: "Zero Trust is a security model that assumes no user or device should be trusted by default."},
    {question: "Why is Zero Trust important?", answer: "It reduces the risk of unauthorized access and lateral movement."},
    {question: "How does Zero Trust improve security?", answer: "It enforces continuous verification and least-privilege access controls."},
    {question: "Which organizations should adopt Zero Trust?", answer: "Organizations with hybrid workforces, cloud environments, and sensitive data."},
    {question: "What are the key principles of Zero Trust?", answer: "Verify explicitly, use least privilege, and assume breach."}
  ],
  "governance-risk-compliance": [
    {question: "What is Governance, Risk, and Compliance (GRC)?", answer: "GRC aligns cybersecurity practices with business objectives, risk management, and regulatory requirements."},
    {question: "Why is GRC important?", answer: "It helps organizations manage risks while maintaining compliance."},
    {question: "Which compliance frameworks can GRC support?", answer: "ISO 27001, PCI DSS, NIST, SOC 2, HIPAA, and more."},
    {question: "How does GRC improve cybersecurity?", answer: "It provides structured processes for risk identification and mitigation."},
    {question: "What are the benefits of GRC services?", answer: "Improved compliance, reduced risk, and stronger governance."}
  ],
  "digital-forensics-incident-response": [
    {question: "What is digital forensics and incident response?", answer: "DFIR helps organizations investigate, contain, and recover from cyber incidents."},
    {question: "Why is incident response important?", answer: "Rapid response minimizes business disruption and reduces damage."},
    {question: "What types of incidents can DFIR address?", answer: "Ransomware, malware infections, insider threats, and data breaches."},
    {question: "What does digital forensics involve?", answer: "Collecting, preserving, and analyzing digital evidence."},
    {question: "How does DFIR improve resilience?", answer: "It helps organizations recover quickly and strengthen defenses against future attacks."}
  ],
  "mobile-threat-defense": [
    {question: "What is mobile threat defense?", answer: "Mobile threat defense protects smartphones and tablets from cyber threats."},
    {question: "Why is mobile security important?", answer: "Mobile devices often access sensitive business data and applications."},
    {question: "What threats can mobile threat defense detect?", answer: "Malware, phishing attacks, malicious applications, and network attacks."},
    {question: "Who needs mobile threat defense?", answer: "Organizations with remote workers and BYOD programs."},
    {question: "How does mobile threat defense improve security?", answer: "It provides continuous monitoring and protection for mobile endpoints."}
  ],
  "ciso-as-a-service": [
    {question: "What is CISO as a Service?", answer: "CISO as a Service provides organizations with access to experienced cybersecurity leadership on demand."},
    {question: "Why choose a virtual CISO?", answer: "Organizations gain strategic security guidance without hiring a full-time executive."},
    {question: "What services does a vCISO provide?", answer: "Risk management, compliance support, security strategy, and governance."},
    {question: "Which organizations benefit from vCISO services?", answer: "Small and medium-sized businesses, startups, and growing enterprises."},
    {question: "How does a vCISO improve cybersecurity?", answer: "A vCISO helps align security initiatives with business objectives and risk management goals."}
  ],
  "soc-as-a-service": [
    {question: "What is SOC as a Service?", answer: "SOC as a Service provides outsourced security monitoring, threat detection, and incident response."},
    {question: "Why agentic AI in SAC?", answer: "Agentic AI in SAC enables autonomous threat detection, intelligent decision-making, and rapid response to emerging cyber threats."},
    {question: "What threats can a SOC detect?", answer: "Malware, ransomware, phishing, insider threats, and suspicious activities."},
    {question: "Why outsource SOC operations?", answer: "Organizations gain expert security monitoring without building an internal SOC."},
    {question: "How does SOC as a Service improve cybersecurity?", answer: "It accelerates threat detection and response while improving visibility into security events."}
  ],
  "cloud-security-consulting": [
    {question: "What is cloud security?", answer: "Cloud security protects cloud-based applications, data, and infrastructure from cyber threats."},
    {question: "Why is cloud security important?", answer: "It helps organizations secure sensitive data and maintain compliance in cloud environments."},
    {question: "What cloud platforms can be secured?", answer: "AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud environments."},
    {question: "What risks can cloud security assessments identify?", answer: "Misconfigurations, excessive permissions, exposed storage, and insecure services."},
    {question: "How does cloud security improve business resilience?", answer: "It strengthens protection against breaches, data loss, and cloud-based attacks."}
  ]
};

export const getServiceFaqs = (serviceId: string) => {
  const existingFaqs = servicesData[serviceId]?.faqs || [];
  const newFaqs = newFaqsData[serviceId] || [];
  
  // Merge, prioritizing new Geo-Optimized FAQs
  const mergedFaqs = [...newFaqs];
  
  for (const oldFaq of existingFaqs) {
    if (!mergedFaqs.find(f => f.question === oldFaq.question)) {
      mergedFaqs.push(oldFaq);
    }
  }
  
  return mergedFaqs;
};
