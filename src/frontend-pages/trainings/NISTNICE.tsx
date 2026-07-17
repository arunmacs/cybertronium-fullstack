"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

import TextSection from "@/components/page-sections/TextSection";
import OverviewSection from "@/components/page-sections/OverviewSection";
import CertificationsSection from "@/components/page-sections/CertificationsSection";
import Nistnicehero from "@assets/training/nist-nice-hero.webp"
import Nistniceheroabout from "@assets/training/nist-nice-about.webp"
import Nistniceheroabout2 from "@assets/training/nist-nice-about-1.webp"

import { nistNicePageData, nistNiceCertifications } from "@/data/frameworkMapping";

const NISTNICEPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />

      <PageHero
        image={Nistnicehero}
        titlePart1={nistNicePageData.hero.titlePart1}
        titlePart2={nistNicePageData.hero.titlePart2}
        titlePart3={nistNicePageData.hero.titlePart3}
        description={nistNicePageData.hero.description}
        showStats={false}
      />

      <TextSection
        subheading={nistNicePageData.textSection.subheading}
        headingLine1={nistNicePageData.textSection.headingLine1}
        headingLine2={nistNicePageData.textSection.headingLine2}
        paragraphs={nistNicePageData.textSection.paragraphs}
      />

      <OverviewSection
        subheading={nistNicePageData.overviewSection.subheading}
        heading={nistNicePageData.overviewSection.heading}
        description={nistNicePageData.overviewSection.description}
        image={Nistniceheroabout2}
        sideContent={
          <div className="space-y-6 text-left">
            {nistNicePageData.overviewSection.sideContent.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="text-sm text-[#CA1C69]">
              {nistNicePageData.overviewSection.sideContent.linkText}
              <a href={nistNicePageData.overviewSection.sideContent.linkUrl} className="hover:underline text-blue-600">
                {nistNicePageData.overviewSection.sideContent.linkUrl}
              </a>
            </p>
          </div>
        }
        listItems={nistNicePageData.overviewSection.listItems}
        bottomDescription={
          <div className="mt-8">
              <img src={Nistniceheroabout} alt={nistNicePageData.overviewSection.bottomImageAlt} className="w-full h-auto object-contain mx-auto" loading="lazy" decoding="async" />
          </div>
        }
      />

      <CertificationsSection
        headingLine1={nistNicePageData.certificationsSection.headingLine1}
        headingLine2={nistNicePageData.certificationsSection.headingLine2}
        headingLine3={nistNicePageData.certificationsSection.headingLine3}
        description={nistNicePageData.certificationsSection.description}
        certifications={nistNiceCertifications}
      />

      <Footer />
    </div>
  );
};

export default NISTNICEPage;
