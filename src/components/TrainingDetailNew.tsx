import { useEffect, useState } from "react";
import Link from "next/link";;
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrainingOverview from "./training-detail-new/TrainingOverview";
import TrainingSyllabus from "./training-detail-new/TrainingSyllabus";
import TrainingCertificationPathways from "./training-detail-new/TrainingCertificationPathways";
import TrainingTestimonials from "./training-detail-new/TrainingTestimonials";
import TrainingFaq from "./training-detail-new/TrainingFaq";
import TrainingRelatedCourses from "./training-detail-new/TrainingRelatedCourses";
import { trainingDetailNewData } from "@/data/trainingDetailNewData";
import HrdCorpImg from "@/assets/training/hrd-corp.webp";
import cecauimg from "@/assets/training/cecauimg.webp";
import TBA from "@/assets/training/TBA.webp";
import CheckIcon from "@/assets/training/check_3472620 1.svg?react";


interface ExperientialActivity {
  number: string;
  title: string;
  objective: string;
  threats: string;
  probablePath: string;
  duration: string;
}

const experientialActivities: ExperientialActivity[] = [
  {
    number: "01",
    title: "Experiential Activity 1 - Voice in the Shell",
    objective: "To introduce learners to AI-based attacks, guide them in creating voice clones, and demonstrate the technology's capabilities through group activities.",
    threats: "Social Engineering . Deepfake . Voice Cloning",
    probablePath: "affects both organization/individuals resulting in monetary loss, data loss and process manipulations resulting in IP loss. (Individual ==> Organization)",
    duration: "15 Mins"
  },
  {
    number: "02",
    title: "Experiential Activity 2 - The Code Caper",
    objective: "To show how malicious files can be hidden inside common office documents, triggering reverse shells and remote access.",
    threats: "Malicious macros . Remote Code Execution . Office trojans",
    probablePath: "User opens seemingly clean document ==> reverse connection established ==> attacker gains control of endpoint. (Individual ==> Organization)",
    duration: "15 Mins"
  },
  {
    number: "03",
    title: "Experiential Activity 3 - The Download Disaster",
    objective: "To simulate drive-by download attacks and teach users browser security settings to defend against them.",
    threats: "Drive-by downloads . Outdated browser exploits . Unapproved software installs",
    probablePath: "User visits compromised site ==> malware automatically downloads and runs in background ==> corporate network compromise. (Individual ==> Organization)",
    duration: "15 Mins"
  },
  {
    number: "04",
    title: "Experiential Activity 4 - Form Jacking Pirates",
    objective: "To demonstrate how attackers inject malicious scripts into payment or login forms to harvest credentials in real-time.",
    threats: "Form jacking . Magecart attacks . E-commerce credential harvesting",
    probablePath: "Customer enters payment details on compromised web page ==> credentials silently exfiltrated to attacker server. (Individual ==> Organization)",
    duration: "15 Mins"
  },
  {
    number: "05",
    title: "Experiential Activity 5 - AITM Attack: Friend or Foe?",
    objective: "To show how Adversary-in-the-Middle attacks bypass Multi-Factor Authentication (MFA) using proxy techniques.",
    threats: "AiTM phishing . MFA bypass . Session hijacking",
    probablePath: "User logs into proxy page ==> attacker intercepts session cookie ==> signs in directly bypassing MFA. (Individual ==> Organization)",
    duration: "15 Mins"
  },
  {
    number: "06",
    title: "Experiential Activity 6 - The Scam Corner",
    objective: "To explore different types of online scams, social media fraud, and social engineering tricks.",
    threats: "Social engineering . Impersonation scams . Financial fraud",
    probablePath: "Scammer builds trust through impersonation ==> requests urgent wire transfer or credential verification. (Individual ==> Organization)",
    duration: "15 Mins"
  },
  {
    number: "07",
    title: "Experiential Activity 7 - Inbox Bites Back!",
    objective: "To highlight business email compromise (BEC) and email spoofing techniques.",
    threats: "BEC . Email spoofing . Invoice fraud",
    probablePath: "Spoofed email sent from CEO's name requesting urgent payment ==> finance team processes transaction without verification. (Individual ==> Organization)",
    duration: "15 Mins"
  },
  {
    number: "08",
    title: "Experiential Activity 8 - Zero Day, Dooms Day",
    objective: "To explain zero-day exploits, patches, and threat mitigation strategies.",
    threats: "Zero-day vulnerabilities . Unpatched systems . System compromise",
    probablePath: "Attacker exploits unpatched system software ==> gains full control before patch is available. (Individual ==> Organization)",
    duration: "15 Mins"
  },
  {
    number: "09",
    title: "Experiential Activity 9 - MITM: Woes at Every Corner!",
    objective: "To demonstrate how insecure public Wi-Fi networks allow attackers to capture network traffic.",
    threats: "Man-in-the-Middle (MITM) . Wi-Fi eavesdropping . Unencrypted communication",
    probablePath: "User connects to rogue hotspot ==> attacker intercepts passwords and browsing sessions. (Individual ==> Organization)",
    duration: "15 Mins"
  },
  {
    number: "10",
    title: "Experiential Activity 10 - Pictures and Mayhem!",
    objective: "To demonstrate the effects of image-based malware on both mobile and laptop devices, while providing guidance on preventive measures and defense strategies.",
    threats: "Corporate/personal group Whatsapp images embedded with malware",
    probablePath: "Affects both Organizations and individuals resulting in data loss. (Individual ==> Organisation)",
    duration: "15 Mins"
  },
  {
    number: "11",
    title: "Experiential Activity 11 - Doppelganger Gala",
    objective: "To explore look-alike domains and typo-squatting, demonstrating how users are tricked into entering credentials.",
    threats: "Typosquatting . Brand impersonation . Credential theft",
    probablePath: "User makes typo in URL ==> lands on look-alike domain ==> inputs corporate password. (Individual ==> Organization)",
    duration: "15 Mins"
  },
  {
    number: "12",
    title: "Experiential Activity 12 - Phish-market",
    objective: "To analyze real-world phishing emails, headers, and malicious payloads.",
    threats: "Phishing links . Malicious attachments . Credential harvesting",
    probablePath: "User clicks link in phishing email ==> inputs login credentials on fake portal ==> account compromised. (Individual ==> Organization)",
    duration: "15 Mins"
  },
  {
    number: "13",
    title: "Experiential Activity 13 - U.S. Be careful",
    objective: "To demonstrate the threat of USB-based attacks and device hijacking via rubber ducky or malicious drop drives.",
    threats: "Malicious USB devices . Rubber Ducky . Autoplay exploits",
    probablePath: "User inserts found USB into company laptop ==> keyboard emulation script executes commands ==> backdoor installed. (Individual ==> Organization)",
    duration: "15 Mins"
  },
  {
    number: "14",
    title: "Experiential Activity 14 - Oh My Cable",
    objective: "To raise awareness about malicious charging cables (OMG Cable) that log keystrokes or run payloads when plugged in.",
    threats: "OMG Cable . Hardware keyloggers . Keystroke injection",
    probablePath: "User charges device with unknown cable ==> cable executes pre-configured payload on computer. (Individual ==> Organization)",
    duration: "15 Mins"
  },
  {
    number: "15",
    title: "Experiential Activity 15 - Drive-by Download Disaster",
    objective: "To simulate a complete drive-by download compromise with ransomware deployment.",
    threats: "Drive-by downloads . Ransomware . File locking",
    probablePath: "User visits hacked site ==> background script runs exploit ==> files locked with ransom note displayed. (Individual ==> Organization)",
    duration: "15 Mins"
  },
  {
    number: "16",
    title: "Experiential Activity 16 - Big Foot Trails",
    objective: "To investigate metadata left behind in public files (PDFs, images) and how attackers collect OSINT.",
    threats: "OSINT . Metadata leakage . Document privacy leaks",
    probablePath: "Publicly shared company files scanned for metadata ==> username and software details exposed. (Individual ==> Organization)",
    duration: "15 Mins"
  },
  {
    number: "17",
    title: "Experiential Activity 17 - NFC Hijacked!",
    objective: "To demonstrate how RFID/NFC cards can be cloned using tools like Flipper Zero.",
    threats: "NFC cloning . RFID reading . Physical security bypass",
    probablePath: "Attacker scans employee badge closely ==> clones badge ==> accesses physical facilities. (Individual ==> Organization)",
    duration: "15 Mins"
  },
  {
    number: "18",
    title: "Experiential Activity 18 - SMS Frights!",
    objective: "To demonstrate SMS spoofing and Smishing (SMS Phishing) attacks that bypass trusted contact bubbles.",
    threats: "Smishing . SMS spoofing . Bank impersonation links",
    probablePath: "Spoofed SMS received in bank chat thread ==> user clicks malicious link ==> logs into phishing bank portal. (Individual ==> Organization)",
    duration: "15 Mins"
  }
];

interface TrainingDetailNewProps {
  trainingId: string;
}

const TrainingDetailNew = ({ trainingId }: TrainingDetailNewProps) => {
  const data = trainingDetailNewData[trainingId];
  const [expandedActivities, setExpandedActivities] = useState<Record<number, boolean>>({ 0: true, 9: true });

  const toggleActivity = (idx: number) => {
    setExpandedActivities((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [trainingId]);

  if (!data) {
    return (
      <div className="min-h-screen bg-white flex flex-col ">
        <Navbar />
        <div className="flex-grow flex items-center justify-center pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#3B194E] mb-4">Training Not Found</h1>
            <p className="text-gray-500">The training program you are looking for does not exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col w-full">
      <Navbar />

      {/* Custom Centered Hero for Training Detail */}
      {trainingId === "certified-experiential-cybersecurity-aware-user" ? (
        <>
          <section className="relative flex flex-col bg-[#0B0315] text-left pt-28 pb-12 lg:min-h-[85vh] lg:justify-center lg:items-start lg:overflow-hidden lg:pb-20">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
              {/* Mobile/iPad Background */}
              {data.heroImageBase && (
                <img src={data.heroImageBase} className="w-full h-full object-cover object-left lg:hidden opacity-100" alt="Background" loading="lazy" />
              )}
              {/* Desktop Background */}
              <img src={data.heroImage}
                alt={`${data.overview.titleLine1} ${data.overview.titleLine2}`}
                className="hidden lg:block w-full h-full object-cover lg:object-right opacity-100"
                loading="lazy" decoding="async" />
              <div className="hidden lg:block absolute inset-0 bg-[#0B0315]/10 z-10" />
            </div>

            <div className="px-5 py-4 md:px-12 lg:py-0 max-w-6xl relative z-20 flex flex-col items-start text-left w-full">
              <h1 className="text-fluid-5xl font-bold text-white leading-[1.15] tracking-tight mb-6 lg:max-w-[1000px]">
                {data.overview.titleLine1}
                <br className="hidden lg:block" />
                <span className="inline lg:hidden"> </span>
                {data.overview.titleLine2}
              </h1>

              <p className="text-fluid-base text-white/90 tracking-tight lg:max-w-[600px] mb-4 font-bold">
                An Immersive learning that enables experience to become Knowledge and Ultimately, Wisdom.
              </p>

              <p className="text-fluid-base text-white/80 tracking-tight lg:max-w-[600px] mb-6 font-light leading-relaxed">
                <span className="font-bold text-white">Human attention span is 8.25 seconds! Short-term human memory lasts seconds to hours! Long-term knowledge retention is challenging! </span>
                Experiential learning with latest attack scenarios and real-life cybersecurity engagement offers a transformative approach.
              </p>

              <div className="flex flex-col items-start gap-4 mb-6 w-full">
                <div
                  className="relative rounded-[20px] lg:rounded-full px-5 py-4 lg:py-2.5 text-white text-fluid-xs flex items-center justify-start lg:max-w-4xl backdrop-blur-sm"
                  style={{
                    background: "linear-gradient(142.13deg, rgba(255, 255, 255, 0.1) 1.8%, rgba(255, 255, 255, 0) 99.75%)",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-[20px] lg:rounded-full pointer-events-none"
                    style={{
                      padding: "1.5px",
                      background: "linear-gradient(90deg, #FF9A3C 0%, #CA1C69 100%)",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />
                  <span className="relative z-10 text-white/95 font-medium leading-snug lg:leading-normal">
                    "Tell me and I forget, teach me and I may remember, involve me and I learn." - Benjamin Franklin
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-start w-full gap-4 mb-10 lg:mb-0">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto text-center px-6 py-3 rounded-full text-white text-fluid-base font-medium transition-all hover:opacity-90 hover:scale-105"
                  style={{
                    background: "linear-gradient(101.67deg, #511F5E 0%, #C01E6C 100%)",
                    border: "1px solid #CC1F68"
                  }}
                >
                  Enroll now
                </Link>
                {data?.downloadBroucher?.links ? (
                  data.downloadBroucher.links
                    .filter((dl) => dl.url && dl.url !== "#")
                    .map((dl, idx) => (
                      <a
                        key={idx}
                        href={dl.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto text-center px-6 py-3 rounded-full text-white border border-white hover:bg-white/10 text-fluid-sm font-medium transition-all hover:scale-105"
                        download
                      >
                        {dl.label}
                      </a>
                    ))
                ) : data?.downloadBroucher?.link && data.downloadBroucher.link !== "#" ? (
                  <a
                    href={data.downloadBroucher.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center px-6 py-3 rounded-full text-white border border-white hover:bg-white/10 text-fluid-sm font-medium transition-all hover:scale-105"
                    download
                  >
                    {data.downloadBroucher.title || "Download Brochure"}
                  </a>
                ) : null}
              </div>

              {/* Mobile/Tablet Only: The "Experience the Attack" text and awards image */}
              {data.heroImageMobile && (
                <div className="lg:hidden flex flex-col w-full mt-4">
                  <h2 className="text-[26px] tracking-tight font-medium text-white leading-[1.2] mb-8">
                    Experience the Attack!<br />
                    Understand the Impact!<br />
                    Learn To Defend!
                  </h2>
                  <img src={data.heroImageMobile} alt="Awards and Badges" className="w-full h-auto object-contain" />
                </div>
              )}
            </div>
          </section>

          {/* 3 Reasons Section */}
          <section className="py-10 bg-white relative overflow-hidden">
            <div className="container mx-auto md:px-6 max-w-[1200px] text-center relative z-10">
              <div className="w-12 h-0.5 bg-orange-400/50 mx-auto mb-3 rounded-full"></div>
              <p className="text-[#C01E6C] font-semibold text-fluid-base uppercase tracking-wide mb-4">
                Experience . Learn . Evolve
              </p>
              <h2 className="text-fluid-4xl font-extrabold tracking-tight leading-tight mb-4 text-[#3B194E]">
                <span className="bg-gradient-to-r from-[#CA1C69] via-[#F37A3A] to-[#F37A3A] bg-clip-text text-transparent">
                  3 Reasons to Ditch Boring Training and
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#CA1C69] via-[#F37A3A] to-[#F37A3A] bg-clip-text text-transparent">
                  Become a Cyber Bishop
                </span>
              </h2>
              <p className="text-gray-500 max-w-4xl mx-auto text-fluid-base leading-relaxed mb-12">
                Ready to unleash your inner cyber ninja? The choice is yours. Level up your cyber awareness, and become the hero your organization needs!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  {
                    number: "01",
                    title: "Hacker Instincts",
                    description: "Train yourself to think like a hacker, spotting red flags, and defending against cyber threats. Every click is a thrilling battle where you're the ultimate defender against the rising cyber threats."
                  },
                  {
                    number: "02",
                    title: "Controlled Chaos",
                    description: "Dive into a choose-your-own-adventure with real-world consequences, learning from mistakes in a safe space with expert guidance. It's an immersive experience that sticks with you like digital superglue."
                  },
                  {
                    number: "03",
                    title: "From Prey to Protector",
                    description: "Transform from a passive listener to an active cyber defender, ready to tackle the digital dark side head-on. Become the ultimate weapon in your organization's cyber arsenal, shifting from prey to predator."
                  }
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className="relative bg-white rounded-[16px] p-2 md:p-4 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full border border-gray-100/50"
                  >
                    {/* Gradient Border Pseudo-element */}
                    <div
                      className="absolute inset-0 rounded-[16px] border border-transparent pointer-events-none"
                      style={{
                        padding: '1px',
                        background: 'radial-gradient(78.99% 95.57% at 17.38% 2.08%, rgba(255, 154, 60, 0.4) 0%, rgba(192, 30, 108, 0.4) 100%)',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }}
                    />

                    {/* Number Badge */}
                    <div
                      className="relative w-14 h-14 flex items-center justify-center mx-auto mb-6 rounded-xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(202, 28, 105, 0.08) 0%, rgba(255, 154, 60, 0.08) 100%)',
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-xl border border-transparent"
                        style={{
                          padding: '1.5px',
                          background: 'linear-gradient(135deg, #CA1C69 0%, #FF9A3C 100%)',
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                        }}
                      />
                      <span className="text-fluid-2xl font-extrabold bg-gradient-to-r from-[#CA1C69] to-[#FF9A3C] bg-clip-text text-transparent font-['Manrope']">
                        {card.number}
                      </span>
                    </div>

                    <h3 className="text-fluid-lg font-bold text-[#3B194E] mb-3 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-fluid-base leading-[1.6] text-gray-500">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experiential Learning Activities Section */}
          <section className="py-10 bg-[#F8F8F8] relative overflow-hidden">
            <div className="container mx-auto md:px-6 max-w-[1200px] text-center relative z-10">
              <div className="w-12 h-0.5 bg-orange-400/50 mx-auto mb-3 rounded-full"></div>
              <p className="text-[#C01E6C] font-semibold text-fluid-base uppercase tracking-wide mb-4">
                Experience . Implement . Automate
              </p>
              <h2 className="text-fluid-4xl font-extrabold tracking-tight leading-[1.1] mb-6">
                <span className="bg-gradient-to-r from-[#CA1C69] via-[#F37A3A] to-[#F37A3A] bg-clip-text text-transparent">
                  Experiential Learning Activities
                </span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-fluid-base leading-relaxed mb-12">
                Ready? Set, Go!
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {/* Left Column (Activities 1-9) */}
                <div className="space-y-4">
                  {experientialActivities.slice(0, 9).map((activity, idx) => {
                    const actualIdx = idx; // 0 to 8
                    const isExpanded = !!expandedActivities[actualIdx];
                    return (
                      <div
                        key={actualIdx}
                        onClick={() => toggleActivity(actualIdx)}
                        className={`relative rounded-[12px] p-5 transition-all duration-300 cursor-pointer text-left ${isExpanded
                          ? "shadow-md"
                          : "shadow-sm border border-gray-100 hover:border-gray-200 bg-white"
                          }`}
                        style={isExpanded ? {
                          border: '1px solid transparent',
                          background: 'linear-gradient(white, white) padding-box, radial-gradient(78.99% 95.57% at 17.38% 2.08%, #FF9A3C 0%, #461148 100%) border-box',
                        } : undefined}
                      >

                        <div className="flex justify-between items-center relative z-10">
                          <span className={`text-fluid-lg font-bold ${isExpanded ? "text-[#522546]" : "text-[#3B194E]"}`}>
                            {activity.title}
                          </span>
                          <span className="text-fluid-xl font-light text-gray-400 select-none">
                            {isExpanded ? "−" : "+"}
                          </span>
                        </div>

                        {isExpanded && (
                          <div className="space-y-4 text-left mt-5 text-fluid-base leading-relaxed border-t border-gray-100 pt-4 relative z-10">
                            <div>
                              <h4 className="font-extrabold text-[#3B194E] mb-1">Objective</h4>
                              <p className="text-gray-500 font-normal">{activity.objective}</p>
                            </div>
                            <div>
                              <h4 className="font-extrabold text-[#3B194E] mb-1">Threats for Organization / Individuals</h4>
                              <p className="text-gray-500 font-normal">{activity.threats}</p>
                            </div>
                            <div>
                              <h4 className="font-extrabold text-[#3B194E] mb-1">Probable Attack Path / Transition</h4>
                              <p className="text-gray-500 font-normal">{activity.probablePath}</p>
                            </div>
                            <div>
                              <h4 className="font-extrabold text-[#3B194E] mb-1">Hands-on Duration</h4>
                              <p className="text-gray-500 font-normal">{activity.duration}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Right Column (Activities 10-18) */}
                <div className="space-y-4">
                  {experientialActivities.slice(9, 18).map((activity, idx) => {
                    const actualIdx = idx + 9; // 9 to 17
                    const isExpanded = !!expandedActivities[actualIdx];
                    return (
                      <div
                        key={actualIdx}
                        onClick={() => toggleActivity(actualIdx)}
                        className={`relative rounded-[12px] p-5 transition-all duration-300 cursor-pointer text-left ${isExpanded
                          ? "shadow-md"
                          : "shadow-sm border border-gray-100 hover:border-gray-200 bg-white"
                          }`}
                        style={isExpanded ? {
                          border: '1px solid transparent',
                          background: 'linear-gradient(white, white) padding-box, radial-gradient(78.99% 95.57% at 17.38% 2.08%, #FF9A3C 0%, #461148 100%) border-box',
                        } : undefined}
                      >

                        <div className="flex justify-between items-center relative z-10">
                          <span className={`text-fluid-lg font-bold ${isExpanded ? "text-[#522546]" : "text-[#3B194E]"}`}>
                            {activity.title}
                          </span>
                          <span className="text-fluid-xl font-light text-gray-400 select-none">
                            {isExpanded ? "−" : "+"}
                          </span>
                        </div>

                        {isExpanded && (
                          <div className="space-y-4 text-left mt-5 text-fluid-base leading-relaxed border-t border-gray-100 pt-4 relative z-10">
                            <div>
                              <h4 className="font-extrabold text-[#3B194E] mb-1">Objective</h4>
                              <p className="text-gray-500 font-normal">{activity.objective}</p>
                            </div>
                            <div>
                              <h4 className="font-extrabold text-[#3B194E] mb-1">Threats for Organization / Individuals</h4>
                              <p className="text-gray-500 font-normal">{activity.threats}</p>
                            </div>
                            <div>
                              <h4 className="font-extrabold text-[#3B194E] mb-1">Probable Attack Path / Transition</h4>
                              <p className="text-gray-500 font-normal">{activity.probablePath}</p>
                            </div>
                            <div>
                              <h4 className="font-extrabold text-[#3B194E] mb-1">Hands-on Duration</h4>
                              <p className="text-gray-500 font-normal">{activity.duration}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Launched in Singapore Section */}
          <section className="py-10 bg-white relative overflow-hidden">
            <div className="container mx-auto md:px-6 max-w-6xl relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column: Image */}
                <div className="w-full flex justify-center">
                  <div className="relative max-w-lg lg:max-w-none w-full">
                    <img
                      src={cecauimg}
                      alt="Launched in Singapore"
                      className="w-full h-auto rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] object-cover border border-gray-100"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Right Column: Timeline details */}
                <div className="w-full text-left">
                  <h2 className="text-fluid-4xl font-extrabold tracking-tight leading-tight mb-2 bg-[linear-gradient(270.09deg,#F37A3A_16.02%,#CA1C69_91.5%)] bg-clip-text text-transparent">
                    Launched in Singapore
                  </h2>
                  <p className="text-[#646464] font-medium text-fluid-base md:text-base mb-8">
                    in partnership with NTUC LearningHub
                  </p>

                  <div className="space-y-6">
                    {/* Item 1 */}
                    <div className="flex gap-4 items-start">
                      <CheckIcon className="flex-shrink-0 w-6 h-6 mt-0.5" />
                      <p className="text-fluid-base text-gray-500 leading-relaxed">
                        17 November 2025, CSA Appointment as Advocates under SG Cyber Safe Partnership Programme. Experiential Cybersecurity Awareness cert course will normalise Singapore Cybersecurity Agency Logo.
                      </p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex gap-4 items-start">
                      <CheckIcon className="flex-shrink-0 w-6 h-6 mt-0.5" />
                      <p className="text-fluid-base text-gray-500 leading-relaxed">
                        20 November 2025, Pilot classes started for major government agencies and banks.
                      </p>
                    </div>

                    {/* Item 3 */}
                    <div className="flex gap-4 items-start">
                      <CheckIcon className="flex-shrink-0 w-6 h-6 mt-0.5" />
                      <p className="text-fluid-base text-gray-500 leading-relaxed">
                        19 January 2026, NTUC LearningHub signed agreement with major industry players and banks and announced the yearly target of 2500 cyberaware users.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Get Ready For An Immersive Experience (Date TBA) CTA Banner */}
          <section
            className="relative w-full py-10 text-white flex flex-col items-center justify-center overflow-hidden bg-[#0F051D]"
            style={{
              backgroundImage: `url(${TBA})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto px-4 text-center">
              {/* Shield Icon */}
              <div className="mb-3 text-[#FF8A00]">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>

              <h2 className="text-fluid-4xl font-bold text-white mb-2 text-center">
                Get Ready For An Immersive Experience(Date TBA)
              </h2>

              <p className="text-white/70 text-fluid-base font-normal mb-8 max-w-2xl">
                FREE 1 Year Mobile Threat Defense (MTD) & Cybertron platform License.
              </p>

              <Link
                href="/contact"
                className="px-10 py-3 rounded-full text-white text-fluid-sm font-semibold transition-all hover:opacity-95 hover:scale-105 shadow-[0_4px_20px_rgba(120,26,96,0.3)] hover:shadow-[0_6px_24px_rgba(120,26,96,0.5)] bg-gradient-cta"
              >
                Register Now
              </Link>
            </div>
          </section>
        </>
      ) : (
        <section className="relative flex flex-col bg-[#1A0A2E] pt-24 md:pt-28 pb-28 md:pb-16 text-center md:justify-center md:items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 bg-[#1A0A2E]">
            <img src={data.heroImage}
              alt={`${data.overview.titleLine1} ${data.overview.titleLine2}`}
              className="w-full h-full object-cover object-[80%_center] lg:object-center opacity-40"
              loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1A0A2E] via-transparent to-[#1A0A2E] opacity-70 z-10" />
          </div>

          {data.showHrdCorpBadge && (
            <div className="hidden md:block absolute right-6 bottom-0 md:right-12 md:bottom-0 lg:right-20 lg:bottom-0 z-20 rounded-tr-md rounded-tl-md py-4 px-2 bg-white/10 backdrop-blur-md border-t-2 border-r-2 border-l-2 border-b-0 border-white/50 shadow-xl">
              <img src={HrdCorpImg} alt="HRD Corp Claimable" className="w-[60px] lg:w-[80px] h-auto object-contain" />
            </div>
          )}

          {data.showHrdCorpBadge && (
            <div className="md:hidden absolute right-4 bottom-0 z-20 rounded-tr-md rounded-tl-md py-2 px-2 bg-white/10 backdrop-blur-md border-t border-r border-l border-b-0 border-white/50 shadow-xl">
              <img src={HrdCorpImg} alt="HRD Corp Claimable" className="w-[50px] h-auto object-contain" />
            </div>
          )}

          <div className="container mx-auto px-4 relative z-20 flex flex-col items-center">
            <h1 className="text-fluid-5xl font-bold text-white leading-[1.15] tracking-tight mb-5 max-w-4xl drop-shadow-md">
              {data.overview.titleLine1} {data.overview.titleLine2}
            </h1>
            {data.overview.description1 && (
              <p className="text-fluid-sm text-white/95 tracking-normal max-w-4xl mb-4 font-medium leading-[1.6]">
                {data.overview.description1}
              </p>
            )}
            {data.overview.description2 && (
              <p className="text-fluid-sm text-white/85 tracking-normal max-w-4xl mb-3 leading-[1.6]">
                {data.overview.description2}
              </p>
            )}
            {data.overview.description && (
              <p className="text-fluid-base text-white/80 tracking-normal max-w-3xl mb-6 leading-[1.6] font-medium">
                {data.overview.description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-full max-w-sm sm:max-w-none mx-auto gap-4 mt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-full text-white text-fluid-base font-medium transition-all hover:opacity-90 hover:scale-105 shadow-lg"
                style={{
                  background: "linear-gradient(101.67deg, #511F5E 0%, #C01E6C 100%)",
                  border: "1px solid #CC1F68"
                }}
              >
                Enroll now
              </Link>
              {data?.downloadBroucher?.links ? (
                data.downloadBroucher.links
                  .filter((dl) => dl.url && dl.url !== "#")
                  .map((dl, idx) => (
                    <a
                      key={idx}
                      href={dl.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center px-6 py-3 rounded-full text-white border border-white/40 hover:bg-white/10 hover:border-white text-fluid-sm font-medium transition-all hover:scale-105 backdrop-blur-sm"
                      download
                    >
                      {dl.label}
                    </a>
                  ))
              ) : data?.downloadBroucher?.link && data.downloadBroucher.link !== "#" ? (
                <a
                  href={data.downloadBroucher.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-6 py-3 rounded-full text-white border border-white/40 hover:bg-white/10 hover:border-white text-fluid-sm font-medium transition-all hover:scale-105 backdrop-blur-sm"
                  download
                >
                  {data.downloadBroucher.title || "Download Brochure"}
                </a>
              ) : null}
            </div>
          </div>
        </section>
      )}

      <main className="flex-grow w-full">
        <TrainingOverview {...data.overview} downloadBroucher={data?.downloadBroucher} />

        {data.syllabus && data.syllabus.length > 0 && trainingId !== "certified-experiential-cybersecurity-aware-user" && (
          <TrainingSyllabus syllabus={data.syllabus} duration={data.overview.duration} />
        )}

        {data.certificationPathways && data.certificationPathways.cards.length > 0 && (
          <TrainingCertificationPathways {...data.certificationPathways} />
        )}

        {/* {data?.downloadBroucher?.link && (
          <TrainingDownloadBroucher {...data.downloadBroucher} />
        )} */}

        {data.testimonials && data.testimonials.length > 0 && (
          <TrainingTestimonials testimonials={data.testimonials} />
        )}

        {data.faqs && data.faqs.length > 0 && (
          <TrainingFaq faqs={data.faqs} cta={data.faqCta} />
        )}

        {data.relatedCourses && (
          <TrainingRelatedCourses {...data.relatedCourses} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default TrainingDetailNew;
