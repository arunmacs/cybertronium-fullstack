"use client";
import PageHero from "@/components/PageHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ctemHero1 from "@assets/CTEM/ctem-hero-1.webp"

// CTEM Sub-components
import CTEMApproach from "@/components/ctem/CTEMApproach";
import CTEMStrengths from "@/components/ctem/CTEMStrengths";
import CTEMOutcomes from "@/components/ctem/CTEMOutcomes";
import CTEMMetrics from "@/components/ctem/CTEMMetrics";
import CTEMLifecycle from "@/components/ctem/CTEMLifecycle";
import CTEMAttackPath from "@/components/ctem/CTEMAttackPath";
import CTEMOfferings from "@/components/ctem/CTEMOfferings";
import CTEMPartner from "@/components/ctem/CTEMPartner";
import CTEMFAQ from "@/components/ctem/CTEMFAQ";
import CTEMCTA from "@/components/ctem/CTEMCTA";
import Link from "next/link";;


const CTEMPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col ">
      <Navbar />

      {/* Hero Section */}
      <PageHero
        image={ctemHero1}
        titlePart1="Continuous Threat"
        titlePart2="Exposure Management"
        description="Continuously discover. Prioritize intelligently. Validate continuously. Remediate with confidence. Reduce cyber risk — continuously."
        showStats={true}
        badge="CTEM as a Service"
      >
        <div className="flex flex-col gap-6 mt-8">
          {/* Tags */}
          <div className="flex items-center gap-3 flex-wrap">
            {["Continuous", "Risk-Based", "Business Aligned", "Measurable Impact"].map((b) => (
              <div
                key={b}
                className="p-[1px] rounded-lg bg-gradient-to-b from-[#FF9A3C] to-[#CA1C69] inline-flex"
              >
                <div
                  className="rounded-lg px-4 py-2 flex items-center justify-center"
                  style={{ background: 'linear-gradient(142.13deg, rgba(255, 255, 255, 0.168) 1.8%, rgba(255, 255, 255, 0) 99.75%), rgba(28, 31, 42, 1)' }}
                >
                  <span className="text-[15px] font-medium text-white">
                    {b}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <Link
              href={"/contact"}
              className="hover:opacity-90 transition-opacity text-white rounded-full px-6 py-2.5 text-sm font-semibold bg-gradient-cta"
            >
              Request a CTEM Assessment
            </Link>
          </div>
        </div>
      </PageHero>

      <CTEMApproach />
      <CTEMStrengths />
      <CTEMOutcomes />
      <CTEMMetrics />
      <CTEMLifecycle />
      <CTEMAttackPath />
      <CTEMOfferings />
      <CTEMPartner />
      {/* <CTEMCTA /> */}
      <CTEMFAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CTEMPage;
