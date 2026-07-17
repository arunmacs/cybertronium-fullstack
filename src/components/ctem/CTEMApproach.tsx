"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ctemglance from "@assets/CTEM/glance.webp"
import Checkmark from "@assets/CTEM/check-mark.svg?react"



const CTEMApproach = () => {
  return (
    <section className="py-6 lg:py-10 bg-white relative">
      <div className="container mx-auto md:px-8 lg:px-16 max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            <div className="w-12 h-0.5 bg-orange-400/50 mb-3 rounded-full"></div>
            <div className="text-[14px] font-semibold text-[#CA1C69] tracking-wide mb-4">
              CTEM at a Glance
            </div>
            <h2
              className="text-[32px] md:text-[40px] lg:text-[42px] font-bold leading-[1.1] tracking-tight mb-6 bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(270.09deg, #F37A3A 16.02%, #CA1C69 91.5%)' }}
            >
              A continuous,<br />
              risk-based approach to<br />
              Cyber Resilience
            </h2>
            <p className="text-[15px] leading-[1.6] text-gray-600 mb-8 max-w-[480px]">
              CTEM helps organizations manage cyber exposures across the entire attack surface and dramatically reduce the likelihood and impact of cyber incidents.
            </p>

            <ul className="space-y-4">
              {[
                "Complete visibility of exposures",
                "Risk prioritized by business impact",
                "Continuous validation of real-world risk",
                "Faster remediation with measurable outcomes",
                "Executive reporting in business terms",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <Checkmark className="w-5 h-5" />
                  </div>
                  <span className="text-[15px] font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-[32px] overflow-hidden flex items-center justify-center max-w-[500px] mx-auto w-full shadow-2xl"
          >
            <img src={ctemglance}
              alt="CTEM Lifecycle"
              className="relative z-10 w-full h-auto object-cover"
              loading="lazy" decoding="async"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white"><text x="50" y="50" font-size="10" text-anchor="middle" fill="white">CTEM Lifecycle Image Placeholder</text></svg>';
                (e.target as HTMLImageElement).style.opacity = '0.5';
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTEMApproach;
