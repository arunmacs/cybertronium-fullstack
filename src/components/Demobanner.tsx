import bgImg from "@/assets/Footer/bg.webp";
import logoInCircle from "@/assets/Footer/bglogo.png";
import circleImg from "@/assets/Footer/circle.png";
import manImg from "@/assets/Footer/man.webp";
import Link from "next/link";
import { usePathname } from "next/navigation";;

interface BannerContent {
  h2: React.ReactNode;
  p: string;
  buttonText: string;
}

const bannerContents: Record<string, BannerContent> = {
  "/": {
    h2: <>Ready to command your <br /> cyber posture?</>,
    p: "Book a 30-minute strategy session. We'll map your exposure, benchmark your maturity and show you a 90-day path forward.",
    buttonText: "Request a Strategy Session",
  },
  "/about-us": {
    h2: <>Partner with a cybersecurity <br /> team that's accountable for outcomes.</>,
    p: "Let's talk about how Cybertronium can strengthen your security posture, train your people and reduce your risk — measurably.",
    buttonText: "Talk to our team",
  },
  "/services": {
    h2: <>Ready to strengthen your <br /> cyber resilience?</>,
    p: "Talk to our experts. We'll assess your risks, identify security gaps, and recommend the right services to protect your business.",
    buttonText: "Request a Consultation",
  },
  "/trainings": {
    h2: <>Ready to advance your <br /> cybersecurity expertise?</>,
    p: "Explore industry-recognized training programs. We'll help you build practical skills, earn certifications, and stay ahead of evolving threats.",
    buttonText: "Explore Training Programs",
  },
  "/trainings/certified-penetration-tester": {
    h2: <>Ready to launch your <br /> ethical hacking career?</>,
    p: "Master real-world penetration testing techniques through hands-on labs, practical exercises, and industry-recognized certification pathways.",
    buttonText: "Enroll Now",
  },
  "/trainings/certified-soc-analyst": {
    h2: <>Ready to become a <br /> cyber defense specialist?</>,
    p: "Gain practical SOC skills, investigate threats, and build expertise in modern security operations.",
    buttonText: "Enroll Now",
  },
  "/trainings/certified-red-team-professional": {
    h2: <>Ready to master advanced <br /> offensive security skills?</>,
    p: "Learn adversary tactics, attack simulations, and red team methodologies through immersive training experiences.",
    buttonText: "Enroll Now",
  },
  "/trainings/certified-cyber-threat-intelligence-analyst": {
    h2: <>Ready to think like a <br /> cyber adversary?</>,
    p: "Develop intelligence-driven security skills to identify threats, analyze risks, and support proactive defense.",
    buttonText: "Enroll Now",
  },
  "/trainings/certified-cloud-security-professional": {
    h2: <>Ready to secure today's <br /> cloud environments?</>,
    p: "Build expertise in cloud security architecture, governance, and risk management across modern platforms.",
    buttonText: "Enroll Now",
  },
  "/trainings/certified-secure-developer": {
    h2: <>Ready to build security <br /> into every application?</>,
    p: "Learn secure coding practices and reduce vulnerabilities throughout the software development lifecycle.",
    buttonText: "Enroll Now",
  },
  "/trainings/certified-experiential-cybersecurity-aware-user": {
    h2: <>Ready to experience cybersecurity <br /> beyond the classroom?</>,
    p: "Learn through immersive simulations and practical scenarios designed to build lasting cyber awareness.",
    buttonText: "Enroll Now",
  },
  "/trainings/certified-security-aware-user": {
    h2: <>Ready to become a <br /> safer digital user?</>,
    p: "Build essential cybersecurity awareness skills to recognize threats and protect personal information.",
    buttonText: "Enroll Now",
  },
  "/trainings/certified-security-aware-cxo": {
    h2: <>Ready to lead cybersecurity <br /> with confidence?</>,
    p: "Understand cyber risk, governance, and resilience strategies that support informed executive decision-making.",
    buttonText: "Enroll Now",
  },
  "/services/vulnerability-assessment": {
    h2: <>Ready to uncover your <br /> organization's security gaps?</>,
    p: "Talk to our experts and discover vulnerabilities before attackers can exploit them.",
    buttonText: "Speak With Our Experts",
  },
  "/services/penetration-testing": {
    h2: <>Ready to validate your <br /> security defenses?</>,
    p: "Engage our specialists to simulate real-world attacks and identify exploitable weaknesses.",
    buttonText: "Request a Consultation",
  },
  "/services/app-security-services": {
    h2: <>Ready to secure your <br /> critical applications?</>,
    p: "Connect with our team to assess risks and strengthen application security posture.",
    buttonText: "Talk To Our Team",
  },
  "/services/red-purple-teaming": {
    h2: <>Ready to test your resilience <br /> against advanced threats?</>,
    p: "Work with our experts to evaluate detection, response, and defensive effectiveness.",
    buttonText: "Schedule a Consultation",
  },
  "/services/firmware-security": {
    h2: <>Ready to secure your devices <br /> from the inside out?</>,
    p: "Let our specialists assess firmware risks and strengthen embedded security controls.",
    buttonText: "Speak With An Expert",
  },
  "/services/compromise-assessment": {
    h2: <>Concerned your environment <br /> may be compromised?</>,
    p: "Engage our incident specialists to identify threats and uncover hidden attacker activity.",
    buttonText: "Request an Assessment",
  },
  "/services/cybersecurity-maturity-assessment": {
    h2: <>Ready to benchmark your <br /> cybersecurity capabilities?</>,
    p: "We'll assess your maturity, identify gaps, and recommend a practical improvement roadmap.",
    buttonText: "Book an Assessment",
  },
  "/services/zero-trust-implementation": {
    h2: <>Ready to modernize your <br /> security architecture?</>,
    p: "Partner with our experts to design and implement a Zero Trust strategy.",
    buttonText: "Start The Conversation",
  },
  "/services/strategy-consulting": {
    h2: <>Ready to align security <br /> with business objectives?</>,
    p: "Our consultants help define strategies that strengthen resilience and support growth.",
    buttonText: "Schedule a Consultation",
  },
  "/services/governance-risk-compliance": {
    h2: <>Ready to simplify compliance <br /> and manage risk?</>,
    p: "Speak with our specialists to strengthen governance and meet regulatory expectations.",
    buttonText: "Talk To An Expert",
  },
  "/services/secure-digital-transformation": {
    h2: <>Ready to transform your <br /> business securely?</>,
    p: "Work with our team to embed cybersecurity into every stage of digital innovation.",
    buttonText: "Start Your Transformation",
  },
  "/services/digital-forensics-incident-response": {
    h2: <>Ready when every second <br /> matters most?</>,
    p: "Connect with our response experts to contain incidents and accelerate recovery.",
    buttonText: "Contact Our Response Team",
  },
  "/services/mobile-threat-defense": {
    h2: <>Ready to secure your <br /> mobile workforce?</>,
    p: "Discover how we help protect users, devices, and mobile applications.",
    buttonText: "Speak With Our Experts",
  },
  "/services/ciso-as-a-service": {
    h2: <>Need strategic cybersecurity <br /> leadership on demand?</>,
    p: "Gain access to experienced security leadership tailored to your business needs.",
    buttonText: "Schedule a Consultation",
  },
  "/services/cloud-detection-response": {
    h2: <>Ready to improve visibility <br /> across your cloud?</>,
    p: "Let our specialists help detect threats and respond faster to incidents.",
    buttonText: "Talk To A Cloud Expert",
  },
  "/services/cloud-security-posture-management": {
    h2: <>Ready to strengthen your <br /> cloud security posture?</>,
    p: "We'll help identify risks, misconfigurations, and compliance gaps across environments.",
    buttonText: "Request a Consultation",
  },
  "/services/cloud-security-consulting": {
    h2: <>Ready to secure your <br /> cloud journey?</>,
    p: "Partner with our experts to design and optimize secure cloud environments.",
    buttonText: "Speak With Our Team",
  },
  "/services/managed-security-awareness": {
    h2: <>Ready to build a <br /> security-aware workforce?</>,
    p: "Talk with our specialists about creating lasting security awareness across your organization.",
    buttonText: "Schedule a Consultation",
  },
  "/services/soc-for-sme": {
    h2: <>Ready for enterprise-grade protection <br /> without enterprise costs?</>,
    p: "Discover how our SOC services help SMEs strengthen security and reduce risk.",
    buttonText: "Talk To Our Team",
  },
  "/services/soc-as-a-service": {
    h2: <>Ready for round-the-clock <br /> threat monitoring and response?</>,
    p: "Extend your security operations with expert analysts and proven detection capabilities.",
    buttonText: "Speak With Our Experts",
  },
  "/services/ai-security": {
    h2: <>Ready to secure your <br /> AI initiatives?</>,
    p: "Work with our specialists to protect AI systems, models, and business data.",
    buttonText: "Talk To An AI Security Expert",
  },
  "/trainings/nist-nice": {
    h2: <>Looking to align with recognized <br /> cybersecurity standards?</>,
    p: "Speak with our experts about implementing workforce frameworks that support security excellence.",
    buttonText: "Learn More",
  },
  "/trainings/globalace-framework": {
    h2: <>Ready to strengthen your <br /> cybersecurity capabilities?</>,
    p: "Discover how globally recognized frameworks can support your security objectives.",
    buttonText: "Contact Us",
  },
  "/trainings/mitre-attck": {
    h2: <>Want to better understand <br /> attacker behavior?</>,
    p: "Learn how we leverage MITRE ATT&CK to strengthen detection and response strategies.",
    buttonText: "Talk To An Expert",
  },
  "/trainings/skillsfuture-sg": {
    h2: <>Looking to maximize your <br /> learning opportunities?</>,
    p: "Speak with our team about eligible programs and professional development pathways.",
    buttonText: "Explore Your Options",
  },

  "/blogs": {
    h2: <>Stay Ahead with the <br /> Latest in Cybersecurity</>,
    p: "Explore in-depth analysis, industry insights, and expert guidance to strengthen your security posture.",
    buttonText: "Explore Blogs",
  },
};

const defaultContent: BannerContent = {
  h2: <>Schedule your <br /> Personalized Demo</>,
  p: "Get a real look at your organization's cyber risks. Let our experts tailor a security programme for you.",
  buttonText: "Request a Demo",
};

const DemoBanner = () => {
  const pathname = usePathname();
  const currentPath = pathname.replace(/\/$/, "") || "/";
  const content = bannerContents[currentPath] || defaultContent;

  return (
    <div className="relative rounded-xl overflow-hidden min-h-[280px] md:min-h-[320px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] bg-[#0b0d17] z-20 flex items-center">
      {/* Orange gradient background */}
      <img src={bgImg} alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" loading="lazy" decoding="async" />
      <div className="relative z-10 p-5 sm:p-8 md:p-10 lg:p-12 flex items-center justify-between w-full h-full">
        {/* Left: Text */}
        <div className="relative z-20 flex flex-col justify-center w-[55%] md:w-[60%] lg:w-[55%] max-w-xl pr-2 sm:pr-0">
          <h2
            className="text-white font-bold mb-3 md:mb-4 tracking-tight drop-shadow-md"
            style={{ fontSize: "clamp(20px, 4vw, 36px)", lineHeight: "1.2" }}
          >
            {content.h2}
          </h2>
          <p
            className="text-white/90 text-[12px] sm:text-sm md:text-base font-medium mb-6 md:mb-8 max-w-full sm:max-w-[90%] md:max-w-md leading-relaxed drop-shadow-sm"
          >
            {content.p}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-start gap-4">
            <Link
              className="w-full sm:w-auto rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-white text-xs sm:text-sm md:text-base font-semibold bg-gradient-cta shadow-[0_4px_14px_rgba(120,26,96,0.4)] transition-all hover:scale-105 flex items-center justify-center text-center"
              href="/contact"
            >
              {content.buttonText}
            </Link>
          </div>
        </div>

        {/* Right: professional image */}
        <div className="absolute right-0 top-0 bottom-0 w-[45%] md:w-[45%] lg:w-[40%] z-0 pointer-events-none">
          <img
            src={manImg}
            alt="Security Professional"
            className="w-full h-full object-cover object-left lg:object-contain lg:object-right opacity-100"
            loading="lazy" decoding="async"
          />
        </div>
      </div>

      {/* Middle Circle Logo */}
      <div className="absolute left-[55%] md:left-[58%] lg:left-[62%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center pointer-events-none">
        <div className="relative w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[85px] lg:h-[85px] flex items-center justify-center">
          <img src={circleImg} alt="Circle" className="absolute inset-0 w-full h-full object-contain" loading="lazy" decoding="async" />
          <img src={logoInCircle} alt="Logo" className="relative w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 object-contain z-10" loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
  );
};

export default DemoBanner;
