"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import trainingBg from "@/assets/training/iso-hero.webp";
import isoBadge from "@/assets/training/iso-about.webp";

import TextSection from "@/components/page-sections/TextSection";
import OverviewSection from "@/components/page-sections/OverviewSection";
import CertificationsSection from "@/components/page-sections/CertificationsSection";
import SharedFAQ from "@/components/ui/SharedFAQ";

import { iso17024Certifications, iso17024Faqs, iso17024PageData } from "@/data/accreditationData";

const ISO17024Page = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />

      <PageHero
        image={trainingBg}
        titlePart1={iso17024PageData.hero.titlePart1}
        titlePart2={<span className="text-white">{iso17024PageData.hero.titlePart2}</span>}
        titlePart3={
          <span className="text-gradient-primary">
            {iso17024PageData.hero.titlePart3}
          </span>
        }
        description={iso17024PageData.hero.description}
        showStats={false}
      />

      <TextSection
        subheading={iso17024PageData.textSection.subheading}
        headingLine1={iso17024PageData.textSection.headingLine1}
        headingLine2={iso17024PageData.textSection.headingLine2}
        paragraphs={iso17024PageData.textSection.paragraphs}
      />

      <OverviewSection
        subheading={iso17024PageData.overviewSection.subheading}
        heading={iso17024PageData.overviewSection.heading}
        description={iso17024PageData.overviewSection.description}
        image={isoBadge}
        sideContent={iso17024PageData.overviewSection.sideContent}
        listItems={iso17024PageData.overviewSection.listItems}
        useBadgeIcon={iso17024PageData.overviewSection.useBadgeIcon}
      />

      <CertificationsSection
        headingLine1={iso17024PageData.certificationsSection.headingLine1}
        headingLine2={iso17024PageData.certificationsSection.headingLine2}
        headingLine3={iso17024PageData.certificationsSection.headingLine3}
        description={iso17024PageData.certificationsSection.description}
        certifications={iso17024Certifications}
      />

      <SharedFAQ
        title={iso17024PageData.faqSection.title}
        subtitle={iso17024PageData.faqSection.subtitle}
        faqs={iso17024Faqs}
        ctaTitle={iso17024PageData.faqSection.ctaTitle}
        ctaSubtitle={iso17024PageData.faqSection.ctaSubtitle}
        ctaButtonText={iso17024PageData.faqSection.ctaButtonText}
        ctaButtonLink={iso17024PageData.faqSection.ctaButtonLink}
      />

      <Footer />
    </div>
  );
};

export default ISO17024Page;

