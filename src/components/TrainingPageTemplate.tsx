import { useState, useCallback, memo } from "react";
import Link from "next/link";;

import { ChevronRight, Check, GraduationCap, Award, FlaskConical, Globe, Cpu, Briefcase, ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageHero from "./PageHero";
import trainingBg from "@/assets/training/Background.webp";
import awarenessImg from "@/assets/training/awareness.webp";
import defenseImg from "@/assets/training/defence.webp";
import offensiveImg from "@/assets/training/offensive.webp";
import cloudImg from "@/assets/training/sevurity.webp";
import devopsImg from "@/assets/training/devops.webp";
import expertImg from "@/assets/training/cyberexpert.webp";
import modesImg from "@/assets/training/training modes.webp";
import lineBg from "@/assets/services/linebg.webp";
import cardImg from "@/assets/training/card.svg";
import subtractBg from "@/assets/training/Subtract.svg";
import cardBg from "@/assets/training/card.svg";
import icon30 from "@/assets/icons/Rectangle 34624430.webp";
import icon31 from "@/assets/icons/Rectangle 34624431.png";
import icon32 from "@/assets/icons/Rectangle 34624432.png";
import icon33 from "@/assets/icons/Rectangle 34624433.png";
import scheduleIcon1 from "@/assets/training/schedule (1) 1.png";
import scheduleIcon3 from "@/assets/training/schedule (1) 3.png";
import attendanceIcon from "@/assets/training/attendance 1.png";
import frameBg from "@/assets/training/Frame 2.svg";
import { ArrowRight, Monitor, Users, Building2, Play, CheckCircle2, Quote, ChevronLeft, Clock, Calendar, MapPin } from "lucide-react";
import ProfessionalTrainerIcon from "@/assets/training/professional-trainers.svg?react";
import InternationalCertificationBodyIcon from "@/assets/training/international-certification.svg?react";
import DeepDiveHandsOnLabsIcon from "@/assets/training/deep-dive.svg?react";
import GlobalACECertificationIcon from "@/assets/training/global-ace-cert.svg?react";
import LatestToolsMethodologiesIcon from "@/assets/training/latest-tools-methodologies.svg?react";
import GoodJobOpportunitiesIcon from "@/assets/training/good-job-opp.svg?react";

interface TrainingPageProps {
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

const TrainingPageTemplate: React.FC<TrainingPageProps> = ({
  title,
  description,
  keyPoints,
  duration,
  image,
  sections,
  testimonials,
  faqs,
  pageHero,
}) => {
  const [activeMode, setActiveMode] = useState(1);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFAQs, setExpandedFAQs] = useState<Record<number, boolean>>({});

  const toggleFAQ = useCallback((index: number) => {
    setExpandedFAQs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }, []);


  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      <PageHero
        image={trainingBg}
        titlePart1={pageHero?.titlePart1 || title}
        titlePart2={pageHero?.titlePart2 || ""}
        titlePart3={pageHero?.titlePart3}
        description={description}
        showStats={true}
      />

      {/* Special Features Section */}
      <section className="py-10 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[#B3346F] font-semibold mb-1 uppercase tracking-widest text-[10px]">Trainings</p>
            <h2 className="text-2xl md:text-[32px] font-bold text-gray-900 dark:text-white mb-2">
              What Makes Our{" "}
              <span className="bg-gradient-to-r from-[#B3346F] to-[#FF8E53] bg-clip-text text-transparent">
                Courses Special?
              </span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#B3346F] to-[#FF8E53] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Professional Trainers",
                description: "Our Trainers are seasoned consultants with decades of industry experience",
                icon: <ProfessionalTrainerIcon className="w-12 h-12" />,
              },
              {
                title: "International Certification Body",
                description: "ISO 17024 audited and NICE framework mapped certification courses",
                icon: <InternationalCertificationBodyIcon className="w-12 h-12" />,
              },
              {
                title: "Deep-Dive Hands-on Labs",
                description: "100% real-world case studies with a microscopic view",
                icon: <DeepDiveHandsOnLabsIcon className="w-12 h-12" />,
              },
              {
                title: "GlobalACE Certification",
                description: "Certificates are recognized in 64+ Countries worldwide",
                icon: <GlobalACECertificationIcon className="w-12 h-12" />,
              },
              {
                title: "Latest Tools & Methodologies",
                description: "Cyber-arena changes very often, we keep our contents updated with latest attacks and tools.",
                icon: <LatestToolsMethodologiesIcon className="w-12 h-12" />,
              },
              {
                title: "Good Job Opportunities",
                description: "Mentorship & Career guidance",
                icon: <GoodJobOpportunitiesIcon className="w-12 h-12" />,
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="relative group h-[210px] w-full max-w-[320px] mx-auto transition-all duration-300 hover:-translate-y-1"
              >
                {/* Custom SVG Background */}
                <div className="absolute inset-0 z-0">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 400 373"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M400 54C400 62.8366 392.837 70 384 70C375.163 70 368 77.1634 368 86V164C368 172.837 375.163 180 384 180C392.837 180 400 187.163 400 196V329C400 337.837 392.837 345 384 345H344C336.268 345 330 351.268 330 359C330 366.732 323.732 373 316 373H16C7.16345 373 0 365.837 0 357V16C0 7.16344 7.16344 0 16 0H384C392.837 0 400 7.16344 400 16V54Z"
                      className="fill-[#F8F7FF] dark:fill-slate-900 group-hover:fill-[url(#gradient-hover)] transition-colors duration-300"
                    />
                    <defs>
                      <linearGradient
                        id="gradient-hover"
                        x1="200"
                        y1="0"
                        x2="200"
                        y2="386.987"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#461148" />
                        <stop offset="1" stopColor="#C01E6C" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <h3 className="text-sm font-bold mb-3 text-[#4D124E] dark:text-white leading-tight group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <div className="mb-3 flex-grow flex items-center">
                    {feature.icon}
                  </div>

                  <p className="text-[10px] leading-relaxed text-[#B3346F] dark:text-pink-300 font-semibold group-hover:text-white/90 transition-colors duration-300 line-clamp-3">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cybertronium Certifications Section */}
      <section className="py-8 bg-[#FAFAFA] dark:bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-[#B3346F] font-semibold mb-1 uppercase tracking-widest text-[9px]">Career Path</p>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              Cybertronium{" "}
              <span className="bg-gradient-to-r from-[#B3346F] to-[#FF8E53] bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-lg mx-auto text-[10px]">
              Let us Transform you in to a Cyber Ninja!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto">
            {[
              {
                title: "Awareness / New to Cyber",
                image: awarenessImg,
                certs: [
                  { id: "CSAU", desc: "Certified Security Aware User", link: "/trainings/certified-security-aware-user" },
                  { id: "CSACxO", desc: "Certified Security Aware CxO", link: "/trainings/certified-security-aware-cxo" },
                  { id: "Customized Awareness Trainings", desc: "Customized Trainings for Healthcare, Finance, Manufacturing", link: "/contact" },
                ],
              },
              {
                title: "Cyber Defense & Response",
                image: defenseImg,
                certs: [
                  { id: "CSOCA", desc: "Certified Security Operations Center (SOC) Analyst", link: "/trainings/certified-soc-analyst" },
                  { id: "CRTP", desc: "Certified Blue Team Professional", link: "/trainings/certified-red-team-professional" },
                  { id: "CCTIA", desc: "Certified Cyber Threat Intelligence Analyst", link: "/trainings/certified-cyber-threat-intelligence-analyst" },
                ],
              },
              {
                title: "Offensive Cybersecurity",
                image: offensiveImg,
                certs: [
                  { id: "CPT", desc: "Certified Penetration Tester", link: "/trainings/certified-penetration-tester" },
                  { id: "CRTP", desc: "Certified Red Team Professional", link: "/trainings/certified-red-team-professional" },
                  { id: "CCTIA", desc: "Certified Cyber Threat Intelligence Analyst", link: "/trainings/certified-cyber-threat-intelligence-analyst" },
                ],
              },
              {
                title: "Cloud Security",
                image: cloudImg,
                certs: [
                  { id: "CCSP", desc: "Certified Cloud Security Professional - Microsoft", link: "/trainings/certified-cloud-security-professional" },
                  {
                    id: "A 5-day, 100% hands-on Microsoft security technologies course covering:",
                    desc: "Microsoft Defender for Cloud, Office 365, Endpoint, Identity, Azure Security Center, Sentinel, etc.",
                    type: 'list',
                    listItems: [
                      "Windows 10 & 11 Security",
                      "Windows Server 2019 and 2022 Security",
                      "Microsoft Defender for Endpoint",
                      "Microsoft Defender for Identity",

                      "Microsoft Defender for Cloud",
                      "Microsoft Defender for Office 365",
                      "Microsoft Azure Security Center",
                      "Microsoft Sentinel",
                    ],
                    link: "/contact"
                  },
                ],
              },
              {
                title: "DevSecOps",
                image: devopsImg,
                certs: [
                  { id: "CSD", desc: "Certified Secure Developer", link: "/trainings/certified-secure-developer" },
                  { id: "CRD", desc: "Certified R Developer", link: "/contact" },
                  { id: "CBAP", desc: "Certified Analytics Professional", link: "/contact" },
                ],
              },
              {
                title: "Cyber Expert",
                subtitle: "Simulated Labs / Cyber Range",
                image: expertImg,
                certs: [
                  { id: "CRTE", desc: "Certified Red Team Expert", link: "/contact" },
                  { id: "CBTE", desc: "Certified Blue Team Expert", link: "/contact" },
                  { id: "CCSE", desc: "Certified Cloud Security Expert - Microsoft", link: "/contact" },
                ],
              },
            ].map((category, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700 shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl">
                {/* Header Image */}
                <div className="relative h-24 overflow-hidden">
                  <img src={category.image} alt={category.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[1px] flex items-center justify-center p-4">
                    <h3 className="text-base font-bold text-white text-center leading-tight">{category.title}</h3>
                  </div>
                </div>

                {/* Certifications List */}
                <div className="flex flex-col divide-y divide-gray-50 dark:divide-gray-700">
                  {category.certs.map((cert: any, cIdx: number) => {
                    if (cert.type === 'list') {
                      return (
                        <Link
                          href={cert.link || "#"}
                          key={cIdx}
                          className="group cursor-pointer py-3 px-6 flex flex-col hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1 pr-4 mb-2">
                              <h4 className="text-[14px] font-bold text-[#4D124E] dark:text-white mb-0.5 transition-colors">{cert.id}</h4>
                              {/* <p className="text-[11px] text-[#CA1C69] dark:text-pink-400 font-medium">{cert.desc}</p> */}
                            </div>
                            <ArrowRight className="w-4 h-4 text-[#F37A3A] shrink-0 transform group-hover:translate-x-1 transition-all mt-0.5" />
                          </div>
                          {cert.listItems && cert.listItems.length > 0 && (
                            <ul className="mb-1 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                              {cert.listItems.map((item: string, i: number) => (
                                <li key={i} className="text-[11px] text-[#CA1C69] dark:text-pink-400  font-medium">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </Link>
                      );
                    }

                    return (
                      <Link
                        href={cert.link}
                        key={cIdx}
                        className="group cursor-pointer py-3 px-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
                      >
                        <div className="flex-1 pr-4">
                          <h4 className="text-[14px] font-bold text-[#4D124E] dark:text-white mb-0.5 transition-colors">{cert.id}</h4>
                          <p className="text-[11px] text-[#CA1C69] dark:text-pink-400 font-medium line-clamp-1">{cert.desc}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#F37A3A] shrink-0 transform group-hover:translate-x-1 transition-all" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methods Section */}
      <section className="py-8 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6">
            <div className="w-6 h-1 bg-[#F37A3A] mx-auto mb-3 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#4D124E] dark:text-white">
              Cybertronium Certification{" "}
              <span className="text-[#F37A3A]">Training Modes</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-lg mx-auto text-[11px]">
              Learn the way you want to
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto relative">
            {/* Left side: Modes */}
            <div className="lg:w-[55%] space-y-3 relative z-20">
              {[
                { title: "In-Person", icon: <Users className="w-6 h-6" /> },
                {
                  title: "Live Online",
                  icon: <Monitor className="w-6 h-6" />,
                  description: "Cybertronium runs live, interactive sessions for all our certifications and trainings with full access to labs and demo environments.",
                },
                { title: "On-Site", icon: <Building2 className="w-6 h-6" /> },
                { title: "On-Demand", icon: <Play className="w-6 h-6" /> },
              ].map((mode, idx) => {
                const isActive = activeMode === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveMode(idx)}
                    className={`p-4 rounded-xl border transition-all duration-500 flex items-start gap-4 cursor-pointer relative overflow-hidden group ${isActive
                      ? "bg-white dark:bg-slate-900 border-transparent shadow-xl translate-x-4 lg:translate-x-12 w-full lg:w-[105%]"
                      : "bg-white dark:bg-slate-900 border-gray-100 dark:border-gray-800 hover:border-transparent h-[64px] hover:h-auto"
                      }`}
                  >
                    {isActive && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-blue-100/60 dark:to-blue-900/20 pointer-events-none" />
                        <div className="absolute inset-0 border border-transparent rounded-xl" style={{
                          background: 'linear-gradient(to right, #F37A3A, #CA1C69) border-box',
                          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'destination-out',
                          maskComposite: 'exclude'
                        }} />
                      </>
                    )}
                    <div className={`flex-shrink-0 transition-colors duration-300 ${isActive ? "text-[#CA1C69]" : "text-gray-300"
                      }`}>
                      {mode.icon}
                    </div>
                    <div className="relative z-10 flex-grow">
                      <h4 className={`text-base font-bold transition-colors duration-300 ${isActive ? "text-[#4D124E]" : "text-[#4D124E]/80"
                        }`}>
                        {mode.title}
                      </h4>
                      <div className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-[200px] opacity-100 mt-1" : "max-h-0 opacity-0"}`}>
                        {mode.description && (
                          <p className="text-[10px] text-[#CA1C69] leading-relaxed">
                            {mode.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right side: Image with Stats */}
            <div className="lg:w-[45%] relative group z-10 max-w-[450px]">
              <div className="relative rounded-[20px] overflow-hidden shadow-2xl">
                <img src={modesImg} alt="Training Modes" className="w-full h-auto object-cover" loading="lazy" decoding="async" />
              </div>

              {/* Stats Overlay - Moved outside overflow-hidden */}
              <div className="absolute -bottom-6 left-2 right-2 grid grid-cols-4 gap-2 z-20">
                {[
                  { label: "Courses", value: "10" },
                  { label: "Training Partners", value: "18" },
                  { label: "Pass Rate", value: "98%" },
                  { label: "Certified Cybertroniums", value: "11025" },
                ].map((stat, sIdx) => (
                  <div
                    key={sIdx}
                    className="relative h-20 flex flex-col items-center justify-center rounded-lg overflow-hidden shadow-2xl border-transparent backdrop-blur-xl"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(155, 103, 156, 0.93) 50%, rgba(255, 255, 255, 0.4) 100%)',
                    }}
                  >
                    {/* Gradient Border Mask */}
                    <div className="absolute inset-0 border border-transparent rounded-lg" style={{
                      background: 'linear-gradient(to bottom, #F37A3A, #CA1C69) border-box',
                      WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'destination-out',
                      maskComposite: 'exclude'
                    }} />

                    <div className="relative z-10 text-center px-1">
                      <div className="text-lg font-bold text-white mb-0.5 leading-none">{stat.value}</div>
                      <div className="text-[7px] text-[#4D124E] font-bold uppercase tracking-tighter leading-tight max-w-[60px] mx-auto">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section
          className="py-8 relative overflow-hidden bg-white dark:bg-slate-950"
          style={{
            backgroundImage: `url(${lineBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/80 z-0"></div>

          <div className="container mx-auto relative z-10">
            <div className="text-center mb-6">
              <p className="text-[#B3346F] font-semibold mb-1 uppercase tracking-widest text-[9px]">What our customers say</p>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                Testimonials
              </h2>
            </div>

            <div className="max-w-2xl mx-auto relative group">
              <div className="bg-white dark:bg-slate-900 rounded-[20px] p-5 md:p-8 shadow-lg border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                <div className="flex flex-col items-start gap-4">
                  <div className="bg-[#B3346F]/10 p-2 rounded-lg">
                    <Quote className="w-5 h-5 text-[#B3346F]" fill="currentColor" />
                  </div>

                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed font-medium italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  <div className="flex items-center gap-3 mt-1">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#B3346F]/20">
                      <img src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-cover"
                        loading="lazy" decoding="async" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[12px] text-gray-900 dark:text-white leading-none mb-1">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-[9px] text-gray-500 dark:text-gray-400">{testimonials[currentTestimonial].role} | {testimonials[currentTestimonial].industry}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -left-3 md:-left-10">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 shadow-md border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#B3346F] transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -right-3 md:-right-10">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="w-8 h-8 rounded-full bg-[#B3346F] shadow-md flex items-center justify-center text-white hover:bg-[#9e2d62] transition-all"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-1.5 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-1 h-1 rounded-full transition-all duration-300 ${currentTestimonial === idx ? "w-4 bg-[#B3346F]" : "bg-gray-300 dark:bg-gray-700"
                    }`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 bg-white dark:bg-slate-950 mb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[#B3346F] font-bold mb-2 uppercase tracking-widest text-[10px]">Trending Courses</p>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-3">
              Our Popular{" "}
              <span className="bg-gradient-to-r from-[#B3346F] to-[#FF8E53] bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-xs">
              Learn the way you want to
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-start">
            {/* Left side: Popular Certifications */}
            <div
              className="lg:w-[55%] overflow-hidden flex flex-col relative"
            >
              {/* Use <img> instead of CSS background-image to prevent Vite's
                  data-URI inlining from breaking the SVG's internal gradient
                  reference (fill="url(#a)") in production builds. */}
              <img src={subtractBg}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none"
                loading="lazy" decoding="async" />
              <div className="p-12 md:p-20 md:pb-30 space-y-10 relative z-10">
                {[
                  {
                    title: "Certified Security Aware User",
                    desc: "A Certified Security Aware User is someone who has been trained and officially recognized for understanding basic cybersecurity practices and how to protect digital information.",
                    students: "7865",
                    duration: "01 Day",
                    image: icon30,
                    link: "/trainings/certified-security-aware-user"
                  },
                  {
                    title: "Certified Penetration Tester",
                    desc: "A Certified Security Aware User is someone who has been trained and officially recognized for understanding basic cybersecurity practices and how to protect digital information.",
                    students: "1200",
                    duration: "05 Days",
                    image: icon31,
                    link: "/trainings/certified-penetration-tester"
                  },
                  {
                    title: "Certified Secure Developer",
                    desc: "A Certified Security Aware User is someone who has been trained and officially recognized for understanding basic cybersecurity practices and how to protect digital information.",
                    students: "530",
                    duration: "03 Days",
                    image: icon32,
                    link: "/trainings/certified-secure-developer"
                  },
                  {
                    title: "Certified SOC Analyst",
                    desc: "A Certified Security Aware User is someone who has been trained and officially recognized for understanding basic cybersecurity practices and how to protect digital information.",
                    students: "287",
                    duration: "05 Days",
                    image: icon33,
                    link: "/trainings/certified-soc-analyst"
                  },
                ].map((course, cIdx) => (
                  <Link href={course.link} key={cIdx} className={`group cursor-pointer block ${cIdx !== 3 ? "border-b border-white/10 pb-10" : ""}`}>
                    <div className="rounded-xl overflow-hidden mb-6 h-40">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                    <p className="text-[11px] text-white/80 leading-relaxed mb-6 font-medium">
                      {course.desc}
                    </p>
                    <div className="flex items-center gap-10">
                      <div className="flex items-center gap-3 text-white">
                        <Users className="w-6 h-6 text-[#FF8E53]" />
                        <div className="flex flex-col">
                          <span className="text-xs font-bold leading-none mb-0.5">{course.students}</span>
                          <span className="text-[9px] text-white/60 font-medium">Students</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-white">
                        <Clock className="w-6 h-6 text-[#FF8E53]" />
                        <div className="flex flex-col">
                          <span className="text-xs font-bold leading-none mb-0.5">{course.duration}</span>
                          <span className="text-[9px] text-white/60 font-medium">Days</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side: Upcoming Trainings */}
            <div className="lg:w-[40%] flex">
              <div className="w-full relative overflow-hidden flex flex-col bg-[#FDF2F7] dark:bg-slate-900 shadow-sm border border-rose-50/50 dark:border-slate-800">
                {/* Custom frame gradient background */}
                <img src={frameBg} alt="Gradient" className="absolute bottom-0 left-0 right-0 w-full h-auto pointer-events-none" loading="lazy" decoding="async" />

                <div className="p-4 md:p-6 lg:p-10 relative z-10">
                  <h3 className="text-xl font-bold text-[#4D124E] dark:text-white mb-12">Upcoming Trainings</h3>

                  <div className="space-y-10 pb-64">
                    {[
                      {
                        date: "April 25 - 27",
                        year: "2026",
                        title: "Certified Cybersecurity Threat Intelligence Analyst",
                        location: "Infotek, Amcorp Mall",
                        icon: scheduleIcon1,
                        link: "/trainings/certified-cyber-threat-intelligence-analyst"
                      },
                      {
                        date: "May 09 - 11",
                        year: "2026",
                        title: "Capstone Project",
                        location: "NTUC - Virtual",
                        icon: scheduleIcon3,
                        link: "/contact"
                      },
                      {
                        date: "May 25, 26, 29, 30",
                        year: "2026",
                        title: "Certified Cybersecurity Threat Intelligence Analyst",
                        location: "Infotek, Amcorp Mall",
                        icon: attendanceIcon,
                        link: "/trainings/certified-cyber-threat-intelligence-analyst"
                      },
                    ].map((training, tIdx) => (
                      <Link href={training.link} key={tIdx} className={`block space-y-3 ${tIdx !== 2 ? "border-b border-gray-200/50 dark:border-slate-800 pb-10" : ""}`}>
                        <div className="flex items-start gap-4">
                          <img src={training.icon} alt="Icon" className="w-10 h-10 object-contain" loading="lazy" decoding="async" />
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-[#4D124E] dark:text-white leading-none">{training.date}</span>
                            <span className="text-[11px] font-medium text-gray-500 mt-1">{training.year}</span>
                          </div>
                        </div>

                        <h4 className="text-sm font-bold text-[#B3346F] leading-tight">
                          {training.title}
                        </h4>

                        <div className="flex items-center gap-2 text-gray-400">
                          <span className="text-[11px] font-medium">{training.location}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default memo(TrainingPageTemplate);
