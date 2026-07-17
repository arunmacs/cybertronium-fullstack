import { Award, ChevronRight } from "lucide-react";
import Link from "next/link";;
import trainingImg from "@/assets/home/training.webp";
import MedalCheck from "@assets/icons/medal-check.svg?react"
import { SectionHeader } from "@/components/ui/SectionHeader";

const trainings = [
  // Featured Cybersecurity Trainings 
  { title: "Certified Penetration Tester", description: "Hands-on offensive security certification covering network, web app, and infrastructure pentesting.", level: "Advanced", link: "/trainings/certified-penetration-tester" },
  { title: "Certified SOC Analyst", description: "Master SOC operations — SIEM, threat detection, incident triage and response workflows.", level: "Intermediate", link: "/trainings/certified-soc-analyst" },
  { title: "Certified Red Team Professional", description: "If you’re looking to learn the tradecraft of adversary simulation operations in enterprise environments, sharpen your offensive technical skillset, and understand how to detect modern offensive tradecraft, Certified Red Team Professional (CRTP) is for you.", level: "Advanced", link: "/trainings/certified-red-team-professional" },
  // { title: "Certified Cyber Threat Intelligence Analyst", description: "Learn threat intelligence lifecycle, dark web monitoring, and strategic threat analysis.", level: "Advanced", link: "/trainings/certified-cyber-threat-intelligence-analyst" },
  // { title: "Certified Cloud Security Professional", description: "Comprehensive cloud security training covering AWS, Azure, and GCP. Master cloud-specific security architectures, compliance frameworks, and incident response in cloud environments.", level: "Advanced", link: "/trainings/certified-cloud-security-professional" },
  // { title: "Certified Secure Developer", description: "Secure coding practices, OWASP Top 10, DevSecOps integration and code review techniques.", level: "Intermediate", link: "/trainings/certified-secure-developer" },
  // Featured AI Security Trainings
  { title: "Certified AI SecOps Professional", description: "A 3-day, hands-on certification that equips SOC professionals to leverage AI for faster threat detection, automated incident response, and intelligent threat hunting — while defending the SOC against adversarial AI.", level: "Professional", link: "https://axiom-prime.ai/certifications/caiso", external: true },
  { title: "Certified AI GRC Professional", description: "A 3-day intensive programme delivering an end-to-end AI GRC capability — governance frameworks, regulatory alignment, risk identification, control design, assurance and audit readiness.", level: "Professional", link: "https://axiom-prime.ai/certifications/cagrc", external: true },
  { title: "Certified DefenAI Professional", description: "A 5-day, 100% hands-on certification that equips professionals to defend AI and LLM systems against adversarial attacks, data poisoning, model inversion, extraction and jailbreaks.", level: "Professional", link: "https://axiom-prime.ai/certifications/cdaip", external: true },
  // Cybersecurity Awareness Trainings
  { title: "Certified Experiential Cybersecurity Aware User", description: "Experiential learning with latest attack scenarios and real-life cybersecurity engagement offers a transformative approach.", level: "Beginner", link: "/trainings/certified-experiential-cybersecurity-aware-user" },
  { title: "Certified Security Aware User", description: "Essential for all staff — understand phishing, scams, and basic IT knowledge required.", level: "Beginner", link: "/trainings/certified-security-aware-user" },
  { title: "Certified Security Aware CxO", description: "Executive-level cybersecurity awareness for board members and C-suite leadership.", level: "Executive", link: "/trainings/certified-security-aware-cxo" }
];

const TrainingsSection = () => {
  return (
    <section id="trainings" className="py-8  overflow-hidden bg-[#F8F8F8]">
      <div className="container mx-auto">
        {/* Header */}
        <SectionHeader
          subtitle="Academy"
          titlePart2="Trainings & Certifications"
          description="ISO 17024 audited and NICE framework mapped — 100% hands-on, vendor-neutral certifications."
          className="mb-8 text-center"
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trainings.map((t) => (
            <Link
              href={t.link}
              target={t.external ? "_blank" : "_self"}
              key={t.title}
              className="group relative flex flex-col h-[280px] rounded-[12px] border border-gray-100 bg-white p-4 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-transparent overflow-hidden"
            >
              {/* Image Background on Hover */}
              <div
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cover bg-center scale-110 group-hover:scale-100"
                style={{ backgroundImage: `url(${trainingImg})` }}
              />
              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 z-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-4">
                  <div className="w-10 h-10 flex items-center justify-center mb-4 transition-all">
                    <MedalCheck className="w-8 h-8 group-hover:[&_path]:fill-white transition-colors [&_path]:fill-[#4D124E] duration-500" />
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full border border-orange-400/60 text-[#4D124E] text-[11px]  font-bold mb-4 transition-all group-hover:border-white/30 group-hover:text-white">
                    {t.level}
                  </div>
                </div>

                <h3 className="text-[clamp(16px,1.5vw+0.5rem,19px)] font-extrabold text-[#4D124E] mb-3 leading-tight transition-colors group-hover:text-white">
                  {t.title}
                </h3>

                <p className="text-gray-500 text-[clamp(11px,1vw+0.4rem,12px)] leading-relaxed mb-4 font-medium line-clamp-2 transition-colors group-hover:text-white/80">
                  {t.description}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center gap-1 text-[#8B1D56]  font-bold text-sm transition-colors group-hover:text-white">
                    <span className="group-hover:hidden">Explore</span>
                    <span className="hidden group-hover:inline">View</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingsSection;
