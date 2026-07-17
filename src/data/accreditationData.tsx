export const iso17024Certifications = [
  {
    title: "Certified Penetration Tester",
    description: "Learn to identify vulnerabilities, perform penetration testing, and simulate real-world cyber attacks with hands-on ethical hacking training built for modern security professionals.",
    tags: ["Ethical Hackers", "Security Analysts"],
    link: "/trainings/certified-penetration-tester"
  },
  {
    title: "Certified Security Operations Center (SOC) Analyst",
    description: "Master SIEM, incident response, and threat hunting in modern SOC environments.",
    tags: ["SOC Analysts", "Incident Responders"],
    link: "/trainings/certified-soc-analyst"
  },
  {
    title: "Certified Red Team Professional",
    description: "Advanced penetration testing, red teaming, and vulnerability assessment techniques.",
    tags: ["Red Team Operators", "Advanced Penetration Testers"],
    link: "/trainings/certified-red-team-professional"
  },
  {
    title: "Certified Cyber Threat Intelligence Analyst",
    description: "Learn threat intelligence fundamentals and build defense strategies using MISP and global cyber threat intelligence feeds.",
    tags: ["Threat Analysts", "SOC Teams"],
    link: "/trainings/certified-cyber-threat-intelligence-analyst"
  },
  {
    title: "Certified Cloud Security Professional",
    description: "Learn secure cloud practices and build safer applications across modern cloud environments.",
    tags: ["Cloud Engineers", "Security Architects"],
    link: "/trainings/certified-cloud-security-professional"
  },
  {
    title: "Certified Secure Developer",
    description: "Learn secure coding practices and build safer applications across modern development environments.",
    tags: ["Software Developers", "DevSecOps Engineers"],
    link: "/trainings/certified-secure-developer"
  },
  {
    title: "Certified Security Aware User",
    description: "Learn essential cybersecurity practices to recognize threats and protect personal and organizational information.",
    tags: ["Employees", "Staff members", "End users"],
    link: "/trainings/certified-security-aware-user"
  },
  {
    title: "Certified Security Aware CxO",
    description: "Gain cybersecurity awareness and strategic decision-making skills for leadership and business risk management.",
    tags: ["C-level executives", "Board members", "Decision makers"],
    link: "/trainings/certified-security-aware-cxo"
  }
];

const certificateVsCertificationAnswer = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full border-collapse border border-gray-300 text-[13px] text-gray-600 bg-white">
      <thead>
        <tr>
          <th className="border border-gray-300 p-4 font-semibold text-gray-700 text-center w-1/2">Certificate</th>
          <th className="border border-gray-300 p-4 font-semibold text-gray-700 text-center w-1/2">Certification</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-4 align-top">Certificate is awarded after the successful completion of an educational or vocational training programs</td>
          <td className="border border-gray-300 p-4 align-top">Certification is approving professionals for their competence to practice the acquired knowledge or/and skill by an authority</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-4 align-top">Certificate can be obtained after a learning process</td>
          <td className="border border-gray-300 p-4 align-top">Certification is gained after completion of assessment process as per the requirements of accredited certifying body.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-4 align-top">Generally, no expiry date is applicable because the certificate verifies the completion of a specific course of instruction on a certain date</td>
          <td className="border border-gray-300 p-4 align-top">Certifications must be renewed by demonstrating continued competency to reflect the knowledge updates</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-4 align-top"></td>
          <td className="border border-gray-300 p-4 align-top">A formal recertification process ensures that the certification holder has maintained the appropriate level of competency and is up to date.</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export const iso17024Faqs = [
  {
    question: "Do accreditation make certification programs legitimate?",
    answer: `How important do you think it is to be certified? If you believe that being certified simply means that a person passed a test, then accreditation won't be important. Any organization can create an exam (a multiple-choice test) and issue a certificate (without there being any evidence whether you actually did pass). But if you believe there should be more to being certified than just passing the test, then accreditation is important.\n\n
    Accredited certification programs include elements that ensure that the certification process is independent, fair, secure, and meets the needs of the industry. Accredited certification programs are independently audited to ensure they meet the highest standards.`
  },
  {
    question: "Certificate Vs Certification",
    answer: certificateVsCertificationAnswer
  },
  {
    question: "Benefits of ISO/IEC 17024 Scheme accreditation?",
    answer: (
      <div className="space-y-6">
        <div>
          <strong className="block text-[#3B194E] font-medium text-[14px] mb-3">Benefits to certified persons</strong>
          <ul className="list-disc pl-5 space-y-2">
            <li>Enhanced acceptability of certificates in global job market</li>
            <li>Continuous professional development</li>
            <li>Increased recognition in employment market</li>
            <li>Better Salaries</li>
          </ul>
        </div>
        <div>
          <strong className="block text-[#3B194E] font-medium text-[14px] mb-3">Benefits to Industry</strong>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ease in hiring skilled manpower - less investment in training</li>
            <li>Ensured quality of services.</li>
            <li>Enhance confidence of employee on the stated competencies</li>
            <li>Improved quality in operations</li>
            <li>Saving in terms of time and money</li>
            <li>Hiring criteria based on "competence" rather than on "qualification"</li>
          </ul>
        </div>
        <div>
          <strong className="block text-[#3B194E] font-medium text-[14px] mb-3">Benefits to Certification Body</strong>
          <ul className="list-disc pl-5 space-y-2">
            <li>Identification as an organization meeting requirement of internationally developed standard in the provision of quality service</li>
            <li>Third party accreditation confirms that certification body is independent and impartial in its operations</li>
            <li>Worldwide recognition of credibility</li>
            <li>Increased customer base</li>
          </ul>
        </div>
      </div>
    )
  }
];

export const globalAceFaqs = [
  {
    question: "Do accreditation make certification programs legitimate?",
    answer: "How important do you think it is to be certified? If you believe that being certified simply means that a person passed a test, then accreditation won't be important. Any organization can create an exam (a multiple-choice test) and issue a certificate (without there being any evidence whether you actually did pass). But if you believe there should be more to being certified than just passing the test, then accreditation is important.\n\nAccredited certification programs include elements that ensure that the certification process is independent, fair, secure, and meets the needs of the industry. Accredited certification programs are independently audited to ensure they meet the highest standards."
  },
  {
    question: "Certificate Vs Certification",
    answer: certificateVsCertificationAnswer
  },
  {
    question: "Benefits of Global ACE Scheme accreditation?",
    answer: "Global ACE is a National scheme accepted by Organization of Islamic Cooperation (OIC) member countries and the ASEAN countries.\nMalaysia Board of Technologists (MBOT) recognizes the Global ACE Certification as the cybersecurity professional certification pathway that needs to be pursued prior application as a Professional Technologist or Certified Technician under the cybersecurity sector"
  }
];

export const iso17024PageData = {
  hero: {
    titlePart1: "ISO/IEC 17024",
    titlePart2: "Personnel",
    titlePart3: "Certification Body",
    description: "Cybertronium is an internationally accredited ISO/IEC 17024 certification body delivering trusted, secure, and globally recognized cybersecurity certification programs."
  },
  textSection: {
    subheading: "Global Accreditation",
    headingLine1: "Internationally Accredited",
    headingLine2: "Cybersecurity Excellence",
    paragraphs: [
      "Cybertronium Sdn. Bhd. has achieved ISO/IEC 17024 Personnel Certification and is now an international certification body which provides education and certification under ISO/IEC 17024 for individuals on a wide range of Information Security and Cyber Security domains.",
      "This worldwide benchmark of excellence validates that Cybertronium certification process is independent, fair, secure, and meets the needs of the industry. By achieving this accreditation, Cybertronium demonstrates a commitment to process and procedures that adhere to an international standard of excellence as our accredited certification programs are independently audited to ensure they meet the highest standards and confirm that our certification process is conducted in a consistent, comparable, and reliable manner. Cybertronium is one of the few organizations that specialize in Information Security (IS) and Cyber Security (CS) to earn the accreditation globally."
    ]
  },
  overviewSection: {
    subheading: "Accreditation Overview",
    heading: "About ISO/IEC 17024",
    description: "The international standard (ISO/IEC 17024:2012) was designed to harmonize the personnel certification process worldwide and create a more cost-effective global standard for workers. The requirements of ISO/IEC 17024:2012 standard is to establish an internationally accepted benchmark for organizations that are assessing and evaluating the skills of personnel. The main objective is to raise confidence, improve productivity and give direction through enhanced skill-training to the personnel.",
    sideContent: "ISO/IEC 17024:2012 has several requirements for organizational structure, quality management system elements, competence of personnel, confidentiality, etc. An assessment/certification body must also describe the certification process, how candidates are evaluated and must define periods of recertification. In addition, the Certification Body for Persons (CB) must be able to demonstrate how conflict of interest is managed and must have mechanisms in place to objectively evaluate the outcome of the certification process.",
    listItems: [
      "General & Structural Requirements for the Certification Body for Persons",
      "Resource Requirements for the Certification Body for Persons",
      "Records and Information Requirements for the Certification Body for Persons",
      "Certification Scheme (Development of)",
      "Certification Process Requirements for the Certification Body for Persons",
      "Management System Requirements for the Certification Body for Persons"
    ],
    useBadgeIcon: false
  },
  certificationsSection: {
    headingLine1: "Cybertronium",
    headingLine2: "SO/IEC 17024",
    headingLine3: "Accredited Certifications",
    description: "Cybertronium offers a wide range of ISO/IEC 17024 accredited cybersecurity certifications designed to build practical skills across offensive security, defense operations, cloud security, threat intelligence, secure development, and security awareness for professionals at different experience levels."
  },
  faqSection: {
    title: "Frequently Asked Questions",
    subtitle: "Answers to all your possible Questions",
    ctaTitle: "Need more guidance?",
    ctaSubtitle: "Our advisors are ready to discuss your security career.",
    ctaButtonText: "Contact Us",
    ctaButtonLink: "/contact"
  }
};

export const globalAcePageData = {
  hero: {
    titlePart1: "Global ACE",
    titlePart2: "Certification Scheme",
    description: "Cybertronium is an internationally accredited ISO/IEC 17024 certification body delivering trusted, secure, and globally recognized cybersecurity certification programs."
  },
  textSection: {
    subheading: "Global Recognition",
    headingLine1: "Global ACE Certification",
    headingLine2: "",
    paragraphs: [
      "Cybertronium Sdn. Bhd. has achieved Global ACE Scheme accreditation from CyberSecurity Malaysia, an agency under the Ministry of Communications and Multimedia, Government of Malaysia. Global ACE is a national scheme accepted by Organization of Islamic Cooperation (OIC) member countries and the ASEAN countries.",
      "Malaysia Board of Technologists (MBOT) recognizes the Global ACE Certification as the cybersecurity professional certification pathway that needs to be pursued prior application as a Professional Technologist or Certified Technician under the cybersecurity sector. With Global ACE Accreditation, Cybertronium Sdn. Bhd. certification courses are accepted and recognized in OIC countries and in ASEAN countries."
    ]
  },
  overviewSection: {
    subheading: "Accreditation Overview",
    heading: "About Global ACE",
    description: "The Global ACE Certification is a holistic framework of cybersecurity professional certification that outlines the overall approach, independent assessments, impartiality of examinations, competencies of trainers, identification and classification of cyber security domains and the requirements of professional memberships. The scheme is a large-scale systematic plan of actions to certify and recognise the cybersecurity workforce. It is industry-driven and vendor-neutral, developed in collaboration with government agencies, industry partners and academia.",
    sideContent: "The establishment of the scheme is in tandem with international standards such as ISO 9001 on processes, ISO/IEC 17024 on certification of persons and ISO/IEC 27001 on security management, which is vital to:",
    listItems: [
      "Assure workforce capability and experience",
      "Secure and validate core skills, knowledge, attitude and experience",
      "Assure trustworthiness, ethical conduct, and responsibility"
    ],
    useBadgeIcon: true,
    bottomDescription: "Global ACE Scheme Recognition Arrangement permits mutual recognition of certified cybersecurity workforce across the country boundaries. It creates value for the cybersecurity industry and elevates the security-facet of participating countries."
  },
  certificationsSection: {
    headingLine1: "Cybertronium",
    headingLine2: "Global ACE",
    headingLine3: "Accredited Certifications",
    description: "Cybertronium offers a wide range of ISO/IEC 17024 accredited cybersecurity certifications designed to build practical skills across offensive security, defense operations, cloud security, threat intelligence, secure development, and security awareness for professionals at different experience levels."
  },
  faqSection: {
    title: "Frequently Asked Questions",
    subtitle: "Answers to all your possible Questions",
    ctaTitle: "Need more guidance?",
    ctaSubtitle: "Our advisors are ready to discuss your security career.",
    ctaButtonText: "Contact Us",
    ctaButtonLink: "/contact"
  }
};

export const globalaceCertifications = [
  {
    title: "Certified Penetration Tester",
    description: "Learn to identify vulnerabilities, perform penetration testing, and simulate real-world cyber attacks with hands-on ethical hacking training built for modern security professionals.",
    tags: ["Ethical Hackers", "Security Analysts"],
    link: "/trainings/certified-penetration-tester"
  },
  {
    title: "Certified Security Operations Center (SOC) Analyst",
    description: "Master SIEM, incident response, and threat hunting in modern SOC environments.",
    tags: ["SOC Analysts", "Incident Responders"],
    link: "/trainings/certified-soc-analyst"
  },
  {
    title: "Certified Red Team Professional",
    description: "Advanced penetration testing, red teaming, and vulnerability assessment techniques.",
    tags: ["Red Team Operators", "Advanced Penetration Testers"],
    link: "/trainings/certified-red-team-professional"
  },
  {
    title: "Certified Cyber Threat Intelligence Analyst",
    description: "Learn threat intelligence fundamentals and build defense strategies using MISP and global cyber threat intelligence feeds.",
    tags: ["Threat Analysts", "SOC Teams"],
    link: "/trainings/certified-cyber-threat-intelligence-analyst"
  },
];
