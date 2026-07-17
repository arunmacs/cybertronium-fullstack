import WhyChooseUs from "@assets/services/why-choose-service.webp";
import AI from "@assets/services/artificial-intelligence-why-service.svg?react"
import Verified from "@assets/services/verified.svg?react"
import { SectionHeader } from "@/components/ui/SectionHeader";

const ServicesWhyChooseUs = () => {
  return (
    <section className="py-10 bg-[#F8F8F8]">
      <div className="container mx-auto md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          {/* Left Content */}
          <div className="w-full lg:w-5/12">
            <SectionHeader
              align="left"
              titlePart2={<>Why Choose Our<br />Services?</>}
              description="We deliver intelligent, enterprise-grade cybersecurity services built to stay ahead of evolving threats. By combining proactive strategies with real-time monitoring, we help organizations strengthen their security posture and ensure continuous protection across all digital environments."
              showBar={false}
              className="mb-12 max-w-md"
            />

            <div className="grid grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col gap-2">
                <div>
                  <AI className="w-10 h-10" />
                </div>
                <p className="text-[clamp(11px,1vw+0.2rem,12px)] text-gray-500 leading-snug pr-4">
                  AI-driven threat detection with rapid response capabilities
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col gap-2">
                <div>
                  <Verified className="w-10 h-10" />
                </div>
                <p className="text-[clamp(11px,1vw+0.2rem,12px)] text-gray-500 leading-snug pr-4">
                  End-to-end security solutions tailored for scalable business growth
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Graphic Card */}
          <div>
            <img src={WhyChooseUs} alt="Why Choose Us" className="w-[400px] object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWhyChooseUs;
