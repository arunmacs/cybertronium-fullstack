"use client";
import serviceHero from "@/assets/services/serviceHero.webp";
import ServicesCoreSolutionSection from "@/components/ServicesCoreSolutionSection";
import ServicesWhyChooseUs from "@/components/ServicesWhyChooseUs";
import ServicesIndustries from "@/components/ServicesIndustries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";


const ServicesPage = () => {

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <PageHero
        image={serviceHero}
        titlePart1={"Proactive"}
        titlePart2={"Cyber Defense"}
        description="Stay ahead of cyber threats with intelligent, enterprise-grade security built for real-time protection and resilience."
        showStats={true}
        stats={[
          { label: ["Security & Penetration", "Assessments Completed"], value: "1,500+" },
          { label: [" Cybersecurity Consulting", "Engagements Delivered"], value: "500+" },
          { label: ["AI Security", "Assessments Conducted"], value: "30+" },
          { label: ["Customer Retention", "Rate"], value: "98%" },
        ]}
      />
      <ServicesCoreSolutionSection />
      <ServicesWhyChooseUs />
      <ServicesIndustries />


      <Footer />
    </div>
  );
};

export default ServicesPage;
