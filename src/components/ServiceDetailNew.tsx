import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServiceWhyUs from "./service-detail-new/ServiceWhyUs";
import ServiceStatistics from "./service-detail-new/ServiceStatistics";
import ServiceScope from "./service-detail-new/ServiceScope";
import ServiceApproach from "./service-detail-new/ServiceApproach";
import ServiceFeature from "./service-detail-new/ServiceFeature";
import ServiceSidebarGrid from "./service-detail-new/ServiceSidebarGrid";
// import ServiceSignUp from "./service-detail-new/ServiceSignUp";
import ServicePartners from "./service-detail-new/ServicePartners";
import ServiceBentoGrid from "./service-detail-new/ServiceBentoGrid";
import ServicePricing from "./service-detail-new/ServicePricing";
import ServiceImageApproach from "./service-detail-new/ServiceImageApproach";
import ServiceImageBullets from "./service-detail-new/ServiceImageBullets";
import ServiceAdvantageCards from "./service-detail-new/ServiceAdvantageCards";
import ServiceDownload from "./service-detail-new/ServiceDownload";
import ServiceCyberLandscape from "./service-detail-new/ServiceCyberLandscape";
import ServiceMDROfferings from "./service-detail-new/ServiceMDROfferings";
import { SectionHeader } from "@/components/ui/SectionHeader";
import SocProblemCards from "./service-detail-new/SocProblemCards";
import SocDataBreakdown from "./service-detail-new/SocDataBreakdown";
import SocPlatformGrid from "./service-detail-new/SocPlatformGrid";
import SocAgentLibrary from "./service-detail-new/SocAgentLibrary";
import SocWorkflow from "./service-detail-new/SocWorkflow";
import SocServiceTiers from "./service-detail-new/SocServiceTiers";
import SocCompliance from "./service-detail-new/SocCompliance";
import { servicesDetailNewData } from "@/data/servicesDetailNewData";
import { getServiceFaqs } from "@/data/faqsData";
import ISOStrips from "./ISOStrips";
import socisoawards from "@assets/services/awards-iso.webp";
import SharedFAQ from "@/components/ui/SharedFAQ";

interface ServiceDetailNewProps {
  serviceId: string;
  customHero?: React.ReactNode;
  children?: React.ReactNode;
}

const ServiceDetailNew = ({ serviceId, customHero, children }: ServiceDetailNewProps) => {
  const data = servicesDetailNewData[serviceId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!data) {
    return (
      <div className="min-h-screen bg-white flex flex-col ">
        <Navbar />
        <div className="flex-grow flex items-center justify-center pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#3B194E] mb-4">Service Not Found</h1>
            <p className="text-gray-500">The service you are looking for does not exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const heroStatsConfig: Record<string, { badge: string; stats: { label: string[]; value: string }[] }> = {
    "soc-as-a-service": {
      badge: "SOC as a Service",
      stats: [
        { label: ["Always On", "Monitoring"], value: "24×7" },
        { label: ["Mean Time", "to Detect"], value: "<5 min" },
        { label: ["Faster", "Response"], value: "10×" },
        { label: ["Lower TCO", "vs Legacy SIEM"], value: "65%" },
      ],
    },
    // "soc-for-sme": {
    //   badge: "SOC for SME",
    //   stats: [
    //     { label: ["Security Events", "Investigated Monthly"], value: "500,000+" },
    //     { label: ["Threats Validated", "& Escalated"], value: "5,000+" },
    //     { label: ["Mean Time", "to Detect (MTTD)"], value: "<15 Min" },
    //     { label: ["Mean Time", "to Respond (MTTR)"], value: "<30 Min" },
    //     { label: ["Incident Response", "Engagements Completed"], value: "600+" },
    //     { label: ["SLA", "Adherence"], value: "99.9%" },
    //   ],
    // },
  };

  const heroConfig = heroStatsConfig[serviceId];

  return (
    <div className="min-h-screen bg-white flex flex-col  overflow-x-hidden w-full">
      <Navbar />

      {customHero ? (
        customHero
      ) : (
        <PageHero
          titlePart1={data.pageHero.titlePart1}
          titlePart2={data.pageHero.titlePart2}
          description={data.pageHero.description}
          image={data.pageHero.image}
          showStats={!!data.pageHero.stats || serviceId === "soc-as-a-service"}
          stats={data.pageHero.stats || (serviceId === "soc-as-a-service" ? [
            { label: ["Always On", "Monitoring"], value: "24×7" },
            { label: ["Mean Time", "to Detect"], value: "<5 min" },
            { label: ["Faster", "Response"], value: "10×" },
            { label: ["Lower TCO", "vs Legacy SIEM"], value: "65%" },
          ] : undefined)}
          resourceImg={data?.pageHero?.resourceImg}
          badge={data.pageHero.badge || (serviceId === "soc-as-a-service" ? "SOC as a Service" : undefined)}
          isCompact={serviceId !== "soc-as-a-service"}
        >
          {data.pageHero.buttonText && (
            <a
              href={data.pageHero.buttonLink || "/contact"}
              className="inline-block mt-4 text-white px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90 bg-gradient-cta"
            >
              {data.pageHero.buttonText}
            </a>
          )}
        </PageHero>
      )}
      {["soc-for-sme",
        // "soc-for-enterprise"
      ]?.includes(serviceId) && <ISOStrips img={socisoawards} containerClass="bg-white" />}

      {data.cyberLandscapeSection && (
        <ServiceCyberLandscape {...data.cyberLandscapeSection} />
      )}

      <main className="flex-grow w-full">
        {data.whyUsSection && (
          <ServiceWhyUs {...data.whyUsSection} />
        )}

        {data.advantageCards && data.advantageCards.length > 0 && (
          <ServiceAdvantageCards cards={data.advantageCards} />
        )}

        {data.statisticsSection && (
          <ServiceStatistics {...data.statisticsSection} />
        )}


        {data.mdrOfferingsSection && (
          <ServiceMDROfferings {...data.mdrOfferingsSection} />
        )}

        {data.approachSection && (
          <ServiceApproach {...data.approachSection} />
        )}

        {data.imageApproachSection && (
          <ServiceImageApproach {...data.imageApproachSection} />
        )}

        {data.imageBulletsSection && (
          <ServiceImageBullets {...data.imageBulletsSection} />
        )}

        {data.scopeSection && (
          <ServiceScope {...data.scopeSection} />
        )}

        {serviceId === 'soc-as-a-service' ? (
          <>
            {data.socProblemSection && (
              <SocProblemCards {...data.socProblemSection} />
            )}

            {data.socDataBreakdownSection && (
              <SocDataBreakdown {...data.socDataBreakdownSection} />
            )}

            {data.socPlatformGridSection && (
              <SocPlatformGrid {...data.socPlatformGridSection} />
            )}

            {data.socAgentLibrarySection && (
              <SocAgentLibrary {...data.socAgentLibrarySection} />
            )}

            {data.socWorkflowSection && (
              <SocWorkflow {...data.socWorkflowSection} />
            )}

            {data.socServiceTiersSection && (
              <SocServiceTiers {...data.socServiceTiersSection} />
            )}

            {data.socComplianceSection && (
              <SocCompliance {...data.socComplianceSection} />
            )}

            {/* {data.signUpSection && (
              <ServiceSignUp {...data.signUpSection} />
            )} */}

            {data.partnersSection && (
              <ServicePartners {...data.partnersSection} />
            )}
          </>
        ) : serviceId === 'firmware-security' ? (
          <>
            {data.featureSections && data.featureSections[0] && (
              <ServiceFeature {...data.featureSections[0]} />
            )}

            {data.sidebarGridSection && (
              <ServiceSidebarGrid {...data.sidebarGridSection} />
            )}

            {data.featureSections && data.featureSections[1] && (
              <ServiceFeature {...data.featureSections[1]} />
            )}

            {/* {data.signUpSection && (
              <ServiceSignUp {...data.signUpSection} />
            )} */}

            {data.partnersSection && (
              <ServicePartners {...data.partnersSection} />
            )}
          </>
        ) : serviceId === 'mobile-threat-defense' ? (
          <>
            {data.sidebarGridSection && (
              <ServiceSidebarGrid {...data.sidebarGridSection} />
            )}

            {data.bentoGridSection && (
              <ServiceBentoGrid {...data.bentoGridSection} />
            )}

            {data.featureSections && data.featureSections.map((feature, idx) => (
              <ServiceFeature key={idx} {...feature} />
            ))}

            {data.downloadSection && (
              <ServiceDownload {...data.downloadSection} />
            )}

            {data.pricingSection && (
              <ServicePricing {...data.pricingSection} />
            )}

            {/* {data.signUpSection && (
              <ServiceSignUp {...data.signUpSection} />
            )} */}

            {data.partnersSection && (
              <ServicePartners {...data.partnersSection} />
            )}
          </>
        ) : (
          <>
            {data.featureSectionHeader && (
              <div className="pt-14 pb-4 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                  <SectionHeader
                    subtitle={data.featureSectionHeader.subtitle}
                    titlePart1={data.featureSectionHeader.titlePart2}
                    titlePart2={data.featureSectionHeader.titlePart1}
                    showBar={false}
                  />
                </div>
              </div>
            )}

            {data.featureSections && data.featureSections.map((feature, idx) => (
              <ServiceFeature key={idx} {...feature} useGradientTitle={serviceId === "cloud-security-consulting"} />
            ))}

            {data.sidebarGridSection && (
              <ServiceSidebarGrid {...data.sidebarGridSection} />
            )}

            {/* {data.signUpSection && (
              <ServiceSignUp {...data.signUpSection} />
            )} */}

            {data.partnersSection && (
              <ServicePartners {...data.partnersSection} />
            )}
          </>
        )}

        {getServiceFaqs(serviceId)?.length > 0 && (
          <SharedFAQ faqs={getServiceFaqs(serviceId)} />
        )}

        {children}
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetailNew;
