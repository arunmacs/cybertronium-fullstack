"use client";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import ExploreTrainingPrograms from "@/components/trainings-landing/ExploreTrainingPrograms";
import WhyChooseOurTraining from "@/components/trainings-landing/WhyChooseOurTraining";
import GloballyRecognizedStandards from "@/components/trainings-landing/GloballyRecognizedStandards";
import IndustryFrameworks from "@/components/trainings-landing/IndustryFrameworks";
import FlexibleLearningModels from "@/components/trainings-landing/FlexibleLearningModels";
import LearnerSuccessStories from "@/components/trainings-landing/LearnerSuccessStories";
import trainingBg from "@/assets/training/trainings-landing-bg.webp";

const TrainingsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        image={trainingBg}
        titlePart1="Trainings and"
        titlePart2="Certifications"
        description="Master hands-on security skills through real-world labs and globally recognized certifications. Learn from industry experts using vendor-neutral training aligned with international standards."
        showStats={true}
        stats={[
          { label: ["Certified", "professionals"], value: "20,000+" },
          { label: ["Pass", "rate"], value: "98%" },
          { label: ["Training", "partners"], value: "18+" },
          { label: ["Specialized", "courses"], value: "14+" },
        ]}
        showHrdCorpBadge={false}
      />

      <ExploreTrainingPrograms />
      <WhyChooseOurTraining />
      <GloballyRecognizedStandards />
      <IndustryFrameworks />
      {/* <ProvenResults /> */}
      <FlexibleLearningModels />
      <LearnerSuccessStories />
      {/* <TrainingPrograms /> */}

      <Footer />
    </div>
  );
};

export default TrainingsPage;
