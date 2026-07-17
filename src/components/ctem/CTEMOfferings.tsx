"use client";
import offerrings from "@assets/CTEM/offerings.webp"
import Checkmark from "@assets/CTEM/check-mark.svg?react";


const CTEMOfferings = () => {
  return (
    <section className="py-6 lg:py-10 bg-white">
      <div className="container mx-auto md:px-6 lg:px-16 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Image */}
          <div className="w-full lg:w-[35%]">
            <div className="rounded-[24px] overflow-hidden aspect-[9/12] max-h-[500px] w-full max-w-[400px] mx-auto bg-gray-900 relative">
              <img src={offerrings}
                alt="CTEM as a Service"
                className="w-full h-full object-cover"
                loading="lazy" decoding="async"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="gray"><rect width="100" height="100"/></svg>';
                }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[65%]">
            <div className="w-12 h-0.5 bg-orange-400/50 mb-2 rounded-full"></div>
            <div className="text-[14px] font-semibold text-[#CA1C69] tracking-wide mb-4">
              CTEM as a Service
            </div>
            <h2 className="text-[48px] md:text-[64px] font-bold leading-tight bg-clip-text text-transparent mb-6" style={{ backgroundImage: "linear-gradient(90deg, #CA1C69 0%, #F37A3A 100%)" }}>
              Our Offerings
            </h2>
            <p className="text-[14px] text-gray-500 mb-10">
              End-to-end CTEM capabilities — from program design to fully managed lifecycle.
            </p>

            <div className="grid md:grid-cols-2 gap-y-6 gap-x-10">
              {[
                "CTEM Program Design & Advisory",
                "Remediation as a Service",
                "External Attack Surface Management",
                "Continuous Validation (BAS / Red Team)",
                "Continuous Vulnerability & Exposure Mgmt",
                "Third-Party / Supply Chain Exposure Mgmt",
                "Threat Intelligence & Risk Prioritization",
                "CTEM Managed Service (Full Lifecycle)",
                "Attack Path Analysis & Breach Simulation",
                "Reporting & Board-Level Insights"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <Checkmark className="w-5 h-5" />
                  </div>
                  <span className="text-[13px] lg:text-[14px] xl:text-[15px] font-semibold text-[#646464]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTEMOfferings;
