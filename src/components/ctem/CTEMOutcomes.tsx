"use client";
import { motion } from "framer-motion";
import riskreduce from "@assets/CTEM/riskreduce.webp"
import optimize from "@assets/CTEM/optimize.webp"
import resilience from "@assets/CTEM/rsiliencs.webp"
import demonstrate from "@assets/CTEM/demonstrate.webp"

const CTEMOutcomes = () => {
  return (
    <section className="py-6 lg:py-10 bg-white">
      <div className="container mx-auto md:px-6 lg:px-10 max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-12 h-[2px] bg-orange-400/50 mx-auto mb-3 rounded-full"></div>
          <p className="text-[14px] font-semibold text-[#CA1C69] tracking-wide mb-4">
            Business Outcomes
          </p>
          <h2 className="text-[36px] md:text-[48px] font-extrabold leading-[1.2] bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #CA1C69 0%, #F37A3A 100%)" }}>
            Measurable value to the<br />Business
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            {
              img: riskreduce,
              title: "Reduce Risk Continuously",
              desc: "Continuously reduce exploitable exposures and breach likelihood."
            },
            {
              img: optimize,
              title: "Optimize Security Investments",
              desc: "Focus budget and resources on what matters most."
            },
            {
              img: resilience,
              title: "Improve Resilience & Trust",
              desc: "Strengthen cyber resilience and stakeholder confidence."
            },
            {
              img: demonstrate,
              title: "Demonstrate Compliance",
              desc: "Meet regulatory expectations with evidence and reporting."
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col group"
            >
              <div className="rounded-[16px] overflow-hidden mb-6 aspect-[16/9] bg-[#0A0A10] relative shadow-md">
                <img src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy" decoding="async" />
              </div>

              <h3 className="text-[16px] font-bold text-[#3B194E] mb-2">
                {card.title}
              </h3>
              <p className="text-[13px] leading-[1.6] text-gray-500">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTEMOutcomes;
