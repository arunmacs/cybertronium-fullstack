"use client";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ISOStrips from "@/components/ISOStrips";
import FourPillarsSection from "@/components/FourPillarsSection";
import ServiceDetailsSection from "@/components/ServiceDetailsSection";
import TrainingsSection from "@/components/TrainingsSection";
import WhySection from "@/components/WhySection";
import LeadershipSection from "@/components/LeadershipSection";
import AwardsSection from "@/components/AwardsSection";
import Footer from "@/components/Footer";
import HomePageHero from "@/assets/home/home-hero-slide-1.webp";
import HomePageHero2 from "@/assets/home/home-hero-slide-2.webp";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import SecureControlSvg from "@assets/icons/glyph.svg";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        id="hero"
        image={HomePageHero}
        transitionDirection="horizontal"
        slides={[
          {
            image: HomePageHero,
            badge: "Security Outcomes Partner",
            titlePart1: "Your",
            titlePart2: "Cybersecurity & Data",
            titlePart3: "Command Centre",
            description: "Delivering Business Risk Reduction, Continuous Assurance & Security Maturity for Mid-Market and Enterprises.",
            children: (
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a href="#services" className="px-6 py-2 rounded-full bg-gradient-cta text-white text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                  Explore Services
                </a>
                <Link href="/contact" className="px-6 py-2 rounded-full border border-primary text-white text-sm hover:bg-white/10 transition-colors">
                  Request a Demo
                </Link>
              </div>
            ),
            badgeIcon: (
              <div className="w-7 h-7 flex items-center justify-center bg-white/30 rounded-full">
                <img src={SecureControlSvg} alt="Secure Control" className="w-5 h-5 filter invert brightness-0" />
              </div>
            )
          },
          {
            image: HomePageHero2,
            badge: "The Security Outcomes Partner for the AI Era",
            titlePart1: "Secure what you build.",
            titlePart2: "Defend what you scale.",
            description: "Cybertronium unifies SOC, AI Security, CTEM and Crisis Resilience under one accountable command center — engineered for boards, regulators and adversaries that don't sleep.",
            children: (
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/services/ai-security" className="px-6 py-2 rounded-full bg-gradient-cta text-white text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                  Explore AI Security
                  {/* <ArrowRight className="w-4 h-4" /> */}
                </Link>
                <Link href="/contact" className="px-6 py-2 rounded-full border border-primary text-white text-sm hover:bg-white/10 transition-colors">
                  Talk to a strategist
                </Link>
              </div>
            ),
            badgeIcon: <Sparkles className="w-4 h-4 text-white" />
          }
        ]}
      />
      <ISOStrips />
      <FourPillarsSection />
      <ServiceDetailsSection />
      <TrainingsSection />
      <WhySection />
      <LeadershipSection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default Index;
