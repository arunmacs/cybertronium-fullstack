"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import globalAceCert from "@/assets/training/globalace-hero.webp";
import globalaceabout from "@/assets/training/globalace-about.webp";

import TextSection from "@/components/page-sections/TextSection";
import OverviewSection from "@/components/page-sections/OverviewSection";
import CertificationsSection from "@/components/page-sections/CertificationsSection";
import SharedFAQ from "@/components/ui/SharedFAQ";

import { globalAceFaqs, globalAcePageData, globalaceCertifications } from "@/data/accreditationData";

const GlobalACEPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />

      <PageHero
        image={globalAceCert}
        titlePart1={globalAcePageData.hero.titlePart1}
        titlePart2={globalAcePageData.hero.titlePart2}
        description={globalAcePageData.hero.description}
        showStats={false}
      />

      <TextSection
        subheading={globalAcePageData.textSection.subheading}
        headingLine1={globalAcePageData.textSection.headingLine1}
        headingLine2={globalAcePageData.textSection.headingLine2}
        paragraphs={globalAcePageData.textSection.paragraphs}
      />

      <OverviewSection
        subheading={globalAcePageData.overviewSection.subheading}
        heading={globalAcePageData.overviewSection.heading}
        description={globalAcePageData.overviewSection.description}
        image={globalaceabout}
        sideContent={globalAcePageData.overviewSection.sideContent}
        listItems={globalAcePageData.overviewSection.listItems}
        bottomDescription={globalAcePageData.overviewSection.bottomDescription}
      />

      <CertificationsSection
        headingLine1={globalAcePageData.certificationsSection.headingLine1}
        headingLine2={globalAcePageData.certificationsSection.headingLine2}
        headingLine3={globalAcePageData.certificationsSection.headingLine3}
        description={globalAcePageData.certificationsSection.description}
        certifications={globalaceCertifications}
      />

      <SharedFAQ
        title={globalAcePageData.faqSection.title}
        subtitle={globalAcePageData.faqSection.subtitle}
        faqs={globalAceFaqs}
        ctaTitle={globalAcePageData.faqSection.ctaTitle}
        ctaSubtitle={globalAcePageData.faqSection.ctaSubtitle}
        ctaButtonText={globalAcePageData.faqSection.ctaButtonText}
        ctaButtonLink={globalAcePageData.faqSection.ctaButtonLink}
      />

      <Footer />
    </div>
  );
};

export default GlobalACEPage;
