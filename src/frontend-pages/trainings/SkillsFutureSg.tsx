"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

import SSGOverviewSection from "@/components/page-sections/SSGOverviewSection";
import SSGApprovalSection from "@/components/page-sections/SSGApprovalSection";
import SSGWhyTrainSection from "@/components/page-sections/SSGWhyTrainSection";
import SSGHero from "@assets/training/ssg-hero.webp"

import {
  skillsFutureSgHeroData,
  skillsFutureSgOverviewData,
  skillsFutureSgApprovalData,
  skillsFutureSgWhyTrainData,
} from "@/data/skillsFutureSgData";

const SkillsFutureSgPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />

      <PageHero
        image={SSGHero}
        titlePart1={skillsFutureSgHeroData.titlePart1}
        titlePart2={skillsFutureSgHeroData.titlePart2}
        description={skillsFutureSgHeroData.description}
        showStats={false}
        resourceImg=""
      />

      <SSGOverviewSection
        subheading={skillsFutureSgOverviewData.subheading}
        heading={skillsFutureSgOverviewData.heading}
        description={skillsFutureSgOverviewData.description}
        listItems={skillsFutureSgOverviewData.listItems}
        bottomParagraph={skillsFutureSgOverviewData.bottomParagraph}
      />

      <SSGApprovalSection
        subheading={skillsFutureSgApprovalData.subheading}
        heading={skillsFutureSgApprovalData.heading}
        cards={skillsFutureSgApprovalData.cards}
        footerText={skillsFutureSgApprovalData.footerText}
        footerLinkText={skillsFutureSgApprovalData.footerLinkText}
        footerLinkUrl={skillsFutureSgApprovalData.footerLinkUrl}
      />

      <SSGWhyTrainSection
        heading={skillsFutureSgWhyTrainData.heading}
        description={skillsFutureSgWhyTrainData.description}
        listItems={skillsFutureSgWhyTrainData.listItems}
        bottomParagraph={skillsFutureSgWhyTrainData.bottomParagraph}
        commitmentHeading={skillsFutureSgWhyTrainData.commitmentHeading}
        commitmentDescription={skillsFutureSgWhyTrainData.commitmentDescription}
      />

      <Footer />
    </div>
  );
};

export default SkillsFutureSgPage;
