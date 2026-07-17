"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import globalAceCert from "@/assets/training/globalace-hero.webp";
import globalaceabout from "@/assets/training/globalace-frmwk-about.webp";

import TextSection from "@/components/page-sections/TextSection";
import OverviewSection from "@/components/page-sections/OverviewSection";
import CertificationsSection from "@/components/page-sections/CertificationsSection";

import { globalAceFrameworkPageData, globalAceFrameworkCertifications } from "@/data/frameworkMapping";

const GlobalACEFrameworkPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />

      <PageHero
        image={globalAceCert}
        titlePart1={globalAceFrameworkPageData.hero.titlePart1}
        titlePart2={globalAceFrameworkPageData.hero.titlePart2}
        titlePart3={globalAceFrameworkPageData.hero.titlePart3}
        description={globalAceFrameworkPageData.hero.description}
        showStats={false}
      />

      <TextSection
        subheading={globalAceFrameworkPageData.textSection.subheading}
        headingLine1={globalAceFrameworkPageData.textSection.headingLine1}
        headingLine2={globalAceFrameworkPageData.textSection.headingLine2}
        paragraphs={globalAceFrameworkPageData.textSection.paragraphs}
      />

      <OverviewSection
        subheading={globalAceFrameworkPageData.overviewSection.subheading}
        heading={globalAceFrameworkPageData.overviewSection.heading}
        description={globalAceFrameworkPageData.overviewSection.description}
        image={globalaceabout}
        sideContent={
          <div className="space-y-6 text-left">
            {globalAceFrameworkPageData.overviewSection.sideContent.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        }
        listItems={globalAceFrameworkPageData.overviewSection.listItems}
      />

      <CertificationsSection
        headingLine1={globalAceFrameworkPageData.certificationsSection.headingLine1}
        headingLine2={globalAceFrameworkPageData.certificationsSection.headingLine2}
        headingLine3={globalAceFrameworkPageData.certificationsSection.headingLine3}
        description={globalAceFrameworkPageData.certificationsSection.description}
        certifications={globalAceFrameworkCertifications}
      />

      <Footer />
    </div>
  );
};

export default GlobalACEFrameworkPage;
