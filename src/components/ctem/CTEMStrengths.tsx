"use client";
import { motion } from "framer-motion";
import { Globe, DollarSign, AlertTriangle, Users } from "lucide-react";
import Quote from "@assets/CTEM/quote.svg?react"

const CTEMStrengths = () => {
  return (
    <section className="py-6 lg:py-10 bg-white">
      <div className="container mx-auto md:px-8 lg:px-10 max-w-[1200px]">
        <div className="text-center mb-16">
          <div className="w-12 h-0.5 bg-orange-400/50 mx-auto mb-3 rounded-full"></div>
          <div className="text-[14px] font-semibold text-[#CA1C69] tracking-wide mb-4">
            Why CTEM, Why Now?
          </div>
          <h2 className="text-[32px] md:text-[40px] lg:text-[42px] font-bold leading-tight bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #CA1C69 0%, #F37A3A 100%)" }}>
            The threat landscape has <br /> changed
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {[
            {
              icon: Globe,
              title: "Attack Surface Explosion",
              desc: "Digital transformation and cloud adoption are expanding exposures rapidly."
            },
            {
              icon: DollarSign,
              title: "Breach Economics",
              desc: "The average global cost of a data breach is USD 4.88M (IBM 2025)."
            },
            {
              icon: AlertTriangle,
              title: "Ineffective Controls",
              desc: "~60% of breaches involve known vulnerabilities or misconfigurations."
            },
            {
              icon: Users,
              title: "Board-Level Expectations",
              desc: "Regulators and boards demand continuous risk visibility and measurable controls."
            }
          ].map((strength, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-6 flex items-center justify-center">
                {/* Using lucide icons styled with gradient color for placeholder */}
                <strength.icon className="w-10 h-10 text-[#CA1C69]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[18px] font-bold text-[#3B194E] mb-4">
                {strength.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-gray-500">
                {strength.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <div className="inline-flex items-start">
            <Quote className="w-10 h-10" />
            <p className="text-[18px] md:text-[20px] font-medium text-gray-600 max-w-[800px] text-center">
              CTEM shifts you from reactive to proactive, from siloed tools to a continuous, integrated program.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTEMStrengths;
