"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

import TextSection from "@/components/page-sections/TextSection";
import OverviewSection from "@/components/page-sections/OverviewSection";
import CertificationsSection from "@/components/page-sections/CertificationsSection";
import mitreatackhero from "@assets/training/mitre-attak-hero.webp"
import mitreatackabout from "@assets/training/mitre-attak-about.webp"

import { mitreAttackPageData, mitreAttackCertifications } from "@/data/frameworkMapping";

const MitreAttackPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />

      <PageHero
        image={mitreatackhero}
        titlePart1={mitreAttackPageData.hero.titlePart1}
        titlePart2={mitreAttackPageData.hero.titlePart2}
        titlePart3={mitreAttackPageData.hero.titlePart3}
        description={mitreAttackPageData.hero.description}
        showStats={false}
      />

      <TextSection
        subheading={mitreAttackPageData.textSection.subheading}
        headingLine1={mitreAttackPageData.textSection.headingLine1}
        headingLine2={mitreAttackPageData.textSection.headingLine2}
        paragraphs={mitreAttackPageData.textSection.paragraphs}
      />

      <OverviewSection
        subheading={mitreAttackPageData.overviewSection.subheading}
        heading={mitreAttackPageData.overviewSection.heading}
        description={mitreAttackPageData.overviewSection.description}
        image={mitreatackabout}
        sideContent={
          <div className="space-y-6 text-left">
            {mitreAttackPageData.overviewSection.sideContent.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        }
        listItems={mitreAttackPageData.overviewSection.listItems}
      />

      <CertificationsSection
        headingLine1={mitreAttackPageData.certificationsSection.headingLine1}
        headingLine2={mitreAttackPageData.certificationsSection.headingLine2}
        headingLine3={mitreAttackPageData.certificationsSection.headingLine3}
        description={mitreAttackPageData.certificationsSection.description}
        certifications={mitreAttackCertifications}
      />

      <Footer />
    </div>
  );
};

export default MitreAttackPage;
