"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import aboutHero from "@/assets/Aboutus/hero.webp";
import vectorIcon from "@/assets/Aboutus/Vector.svg";

// Who We Are Assets
import placeholderImage from "@/assets/Aboutus/Placeholder Image.webp";
import iconShield from "@/assets/Aboutus/Shield.svg";
import iconAi from "@/assets/Aboutus/mingcute--ai-line 1.svg";
import iconStar from "@/assets/Aboutus/Star.svg";
import iconTrending from "@/assets/Aboutus/Trending up.svg";

// What Drives Us Assets
import attackgradientwave from "@/assets/CTEM/bg.webp";
import iconEye from "@/assets/Aboutus/Eye.svg";
import iconTarget from "@/assets/Aboutus/Target.svg";
import iconHeart from "@/assets/Aboutus/Heart.svg";

// Certifications Assets
import iso27001 from "@/assets/Aboutus/ISO Strips_2 25.svg";
import iso17024 from "@/assets/Aboutus/ISO Strips_2 23.svg";
import iso27017 from "@/assets/Aboutus/ISO Strips_2 22.svg";
import soc2type1 from "@/assets/Aboutus/ISO Strips_2 21.svg";
import soc2type2 from "@/assets/Aboutus/ISO Strips_2 2.svg";
import crestLogo from "@/assets/Aboutus/group-R5.svg";
import { Shield } from "lucide-react";

// Regional Assets
import iconGlobe from "@/assets/Aboutus/Globe.svg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      <PageHero
        image={aboutHero}
        badge="About Cybertronium"
        badgeIcon={<img src={vectorIcon} alt="Icon" className="w-5 h-5 object-contain" />}
        titlePart1="Defending the"
        titlePart2="digital future of Asia."
        description="Cybertronium is a specialist cybersecurity firm headquartered in Malaysia, serving enterprises, regulated industries and government across the Asia-Pacific region. We combine deep technical expertise, accredited services and human-centric training to make cyber resilience a measurable business outcome."
        showStats={true}
        stats={[
          { label: ["Clients", "Protected"], value: "200+" },
          { label: ["Countries", "Served"], value: "10+" },
          { label: ["Professionals", "Trained"], value: "20K+" },
          { label: ["SOC", "Operations"], value: "24/7" },
        ]}
      />

      {/* Who We Are Section */}
      <section className="py-10 relative z-0 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 max-w-6xl">

          {/* Top Split */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-20">

            {/* Left Content */}
            <div className="lg:w-1/2">
              <SectionHeader
                align="left"
                subtitle="Who We Are"
                title={
                  <>
                    <span className="block text-[clamp(18px,2.5vw+0.5rem,28px)] bg-[linear-gradient(270.09deg,#F37A3A_16.02%,#CA1C69_91.5%)] bg-clip-text text-transparent">
                      A pure-play cybersecurity partner
                    </span>
                    <span className="block text-[clamp(20px,3vw+0.5rem,32px)] bg-[linear-gradient(270.09deg,#F37A3A_16.02%,#CA1C69_91.5%)] bg-clip-text text-transparent">
                      built for Asia.
                    </span>
                  </>
                }
                className="mb-6"
              />

              <div className="space-y-6 text-gray-500 dark:text-gray-400 text-[clamp(14px,1vw+0.4rem,16px)] leading-relaxed">
                <p>
                  Founded by cybersecurity practitioners with decades of frontline experience, Cybertronium was built to close the gap between security spend and security outcomes. We don't resell tools — we deliver managed outcomes.
                </p>
                <p>
                  From our Security Operations Centre we protect organisations across banking, fintech, healthcare, manufacturing and the public sector. Our work is governed by international standards, audited annually and backed by accredited certifications.
                </p>
                <p>
                  Our flagship platforms — including Cybertron managed security awareness and our CTEM service — are built on the conviction that resilience is achieved when people, process and technology evolve together.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-5/12 w-full flex justify-center lg:justify-end">
              <img
                src={placeholderImage}
                alt="Cybersecurity Dashboard"
                className="w-full max-w-md h-auto  shadow-2xl"
              />
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: iconShield, title: "Managed Security Services", desc: "24/7 SOC, threat detection and response delivered by certified analysts." },
              { icon: iconAi, title: "AI Security", desc: "Securing the AI lifecycle — from model risk to GenAI governance." },
              { icon: iconStar, title: "Crisis Resilience", desc: "Incident response, tabletop exercises and breach readiness programmes." },
              { icon: iconTrending, title: "CTEM", desc: "Continuous Threat Exposure Management mapped to your business risk." }
            ].map((card, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-[0.9px] shadow-xs hover:shadow-sm transition-shadow h-full"
                style={{
                  background: "radial-gradient(78.99% 95.57% at 17.38% 2.08%, #FF9A3C 0%, #461148 100%)"
                }}
              >
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-2 text-center flex flex-col items-center h-full w-full">
                  <img src={card.icon} alt={card.title} className="w-8 h-8 my-4" />
                  <h4 className="text-[#461148] dark:text-white font-bold text-[clamp(16px,1.5vw+0.5rem,18px)] mb-3 leading-tight">{card.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-[clamp(11px,1vw+0.4rem,13px)] mb-3 leading-relaxed px-2">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* What Drives Us Section */}
      <section className="py-10 relative overflow-hidden bg-[#24133A]">
        {/* Decorative background abstract lines matching CTEM */}
        <div className="absolute inset-0 z-0">
          <img
            src={attackgradientwave}
            alt="Background abstract lines"
            className="w-full h-full object-cover mix-blend-screen"
            loading="lazy"
            decoding="async"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.42) 139.9%, rgba(0, 0, 0, 0) 174.17%)'
            }}
          />
        </div>

        <div className="container mx-auto relative z-10 text-center max-w-6xl">
          <SectionHeader
            lightText={true}
            subtitle="What Drives Us"
            title="Purpose-built, principle-led."
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 mt-16">
            {/* Vision */}
            <div className="flex flex-col items-center">
              <img src={iconEye} alt="Vision" className="w-8 h-8 mb-6" />
              <h4 className="text-[clamp(20px,2vw+0.8rem,24px)] font-bold text-white mb-4">Our Vision</h4>
              <p className="text-[#D1D1D1] text-[clamp(13px,1vw+0.4rem,14px)] leading-relaxed max-w-[280px]">
                To be Asia's most trusted cybersecurity partner — making advanced cyber defence accessible, measurable and human-centric.
              </p>
            </div>

            {/* Mission */}
            <div className="flex flex-col items-center">
              <img src={iconTarget} alt="Mission" className="w-8 h-8 mb-6" />
              <h4 className="text-[clamp(20px,2vw+0.8rem,24px)] font-bold text-white mb-4">Our Mission</h4>
              <p className="text-[#D1D1D1] text-[clamp(13px,1vw+0.4rem,14px)] leading-relaxed max-w-[280px]">
                Protect organisations through outcome-driven managed services, experiential training and AI-powered threat exposure management.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-col items-center">
              <img src={iconHeart} alt="Values" className="w-8 h-8 mb-6" />
              <h4 className="text-[clamp(20px,2vw+0.8rem,24px)] font-bold text-white mb-4">Our Values</h4>
              <p className="text-[#D1D1D1] text-[clamp(13px,1vw+0.4rem,14px)] leading-relaxed max-w-[280px]">
                Integrity, transparency, relentless curiosity and an obsession with measurable client outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Accreditations Section */}
      <section className="py-10 bg-[#FFFFFF]">
        <div className="container mx-auto md:px-6 max-w-6xl">

          <SectionHeader
            subtitle="Certifications & Accreditations"
            titlePart2="Audited. Accredited. Accountable."
            description="Cybertronium operates under some of the most rigorous international standards in the industry — independently audited and continuously assessed."
            className="mb-8"
          />

          {/* Independently Verified Security Excellence Highlight Box */}
          <div className="relative rounded-2xl p-4 md:p-6 text-center mb-10 border border-[#CA1C69]/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.01)] max-w-6xl mx-auto">
            <div className="flex justify-center mb-4 text-[#CA1C69]">
              <Shield className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <h3 className="text-[#3B194E] font-bold text-[clamp(16px,1.5vw+0.2rem,18px)] mb-2">
              Independently Verified Security Excellence
            </h3>
            <p className="text-gray-500 text-[clamp(12px,1.2vw+0.5rem,14px)] leading-relaxed max-w-6xl mx-auto">
              We are one of the few cybersecurity firms in Asia to hold <span className="text-[#CA1C69] font-bold"> CREST Accreditation </span> for penetration testing alongside the full ISO and SOC 2 stack, giving our clients independently verified assurance across every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              {
                icon: iso27001,
                title: "ISO 27001",
                subtitle: "Information Security Management",
                desc: "Certified ISMS covering people, process and technology controls across our operations."
              },
              {
                icon: iso17024,
                title: "ISO 17024",
                subtitle: "Personnel Certification Body",
                desc: "Accredited to certify cybersecurity professionals to a globally recognised competency standard."
              },
              {
                icon: iso27017,
                title: "ISO 27017",
                subtitle: "Cloud Security Controls",
                desc: "Extended cloud-specific security controls assuring our managed and cloud-delivered services."
              },
              {
                icon: soc2type1,
                title: "SOC 2 Type I",
                subtitle: "Trust Services — Design",
                desc: "Independently audited design of security, availability and confidentiality controls."
              },
              {
                icon: soc2type2,
                title: "SOC 2 Type II",
                subtitle: "Trust Services — Operating Effectiveness",
                desc: "Sustained operating effectiveness of our controls verified over an extended audit period."
              },
              {
                icon: crestLogo,
                title: "CREST",
                subtitle: "Penetration Testing (Asia)",
                desc: "CREST-accredited penetration testing services across the Asia region — the gold standard for offensive security."
              }
            ].map((cert, idx) => (
              <div
                key={idx}
                className="rounded-lg  shadow-[0_4px_24px_rgba(0,0,0,0.02)] p-6 md:p-6 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                style={{
                  background: "#FFFFFF80",
                  border: "1px solid var(--Color-Scheme-1-Border, #00000026)",
                  backdropFilter: "blur(20px)"
                }}
              >
                <div className="h-16 flex items-center mb-6">
                  <img src={cert.icon} alt={cert.title} className="h-14 w-auto object-contain" />
                </div>
                <h4 className="text-[#461148] font-bold text-[clamp(16px,1.5vw+0.5rem,18px)] mb-1">{cert.title}</h4>
                <h5 className="text-[#461148] font-bold text-[clamp(12px,1vw+0.2rem,14px)] mb-3">{cert.subtitle}</h5>
                <p className="text-gray-500 text-[clamp(13px,1vw+0.4rem,14px)] leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Regional Roots Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">

          <SectionHeader
            badge={<img src={iconGlobe} alt="Globe" className="w-8 h-8" />}
            showBar={false}
            titlePart1="Regional roots."
            titlePart2="Global standards."
            description="Headquartered in Malaysia with delivery across ASEAN, South Asia and the Middle East — Cybertronium serves regulated industries that demand both deep local context and globally benchmarked capability."
            className="mb-6"
          />

          <div className="flex flex-wrap justify-center gap-3">
            {["Malaysia", "Singapore", "Indonesia", "Thailand", "India", "UAE", "Philippines", "Vietnam"].map((country, idx) => (
              <div
                key={idx}
                className="px-4 py-1.5  bg-[#CA1C69]/5 border border-[#CA1C69]/20"
              >
                <span
                  className="text-[#CA1C69] text-[clamp(10px,1vw+0.2rem,12px)] tracking-wide"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}
                >
                  {country}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
