import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CoreStrategySection = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT: Large gradient card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[520px] rounded-3xl bg-gradient-to-br from-[#E61E8C] via-[#C41E87] to-[#A01E82] p-12 text-white shadow-2xl border border-pink-400/20 overflow-hidden group"
          >
            {/* Grid pattern background */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid-main" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid-main)" />
              </svg>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <p className="text-xs font-display tracking-[0.3em] uppercase opacity-90 mb-4">Core Strategy</p>
                <h2 className="text-5xl font-display font-extrabold leading-tight mb-6">
                  Cybersecurity as<br />Managed<br />Outcome
                </h2>
              </div>
              <div>
                <p className="text-lg opacity-95 leading-relaxed mb-8 max-w-sm">
                  Your outsourced cybersecurity, AI Security & Compliances partner for Mid-Market and enterprises
                </p>
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Stack of 3 cards */}
          <div className="space-y-6">
            {/* Card 1: Bundle-Based Model */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-2xl bg-white border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all overflow-hidden group"
            >
              {/* Purple stripes pattern */}
              <svg className="absolute top-0 right-0 w-96 h-full opacity-5 pointer-events-none" viewBox="0 0 200 400" preserveAspectRatio="none">
                <defs>
                  <pattern id="stripes-bundle" x="0" y="0" width="20" height="400" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="10" height="400" fill="#A855F7" />
                  </pattern>
                </defs>
                <rect width="200" height="400" fill="url(#stripes-bundle)" />
              </svg>

              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold text-pink-600 mb-3 leading-tight">
                  Bundle-Based<br />Model
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Mid-market buys BUNDLES not individual services. Solutioning = Red Team + Blue Team + Purple Team + GRC as a managed cycle makes switching away difficult for customers.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Security Outcomes Partner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl bg-white border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all overflow-hidden group"
            >
              {/* Green mesh pattern */}
              <svg className="absolute top-4 right-4 w-56 h-56 opacity-5 pointer-events-none" viewBox="0 0 200 200">
                <defs>
                  <pattern id="mesh-security" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                    <circle cx="15" cy="15" r="2" fill="none" stroke="#22C55E" strokeWidth="0.5" />
                    <path d="M 15 15 L 30 30 M 30 15 L 15 30" stroke="#22C55E" strokeWidth="0.5" fill="none" />
                  </pattern>
                </defs>
                <circle cx="100" cy="100" r="90" fill="none" stroke="#22C55E" strokeWidth="1" opacity="0.3" />
                <rect width="200" height="200" fill="url(#mesh-security)" />
              </svg>

              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold text-pink-600 mb-3 leading-tight">
                  Security<br />Outcomes Partner
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Sell business risk reduction, continuous assurance, and security maturity improvement — not just tools or hours.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Subscription Programme */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative rounded-2xl bg-white border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all overflow-hidden group"
            >
              {/* Blue swirl pattern */}
              <svg className="absolute top-0 right-0 w-48 h-48 opacity-5 pointer-events-none" viewBox="0 0 150 150">
                <defs>
                  <pattern id="swirl-subscription" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                    <path d="M 75 20 Q 125 75 75 130 Q 25 75 75 20 M 75 40 Q 110 75 75 110 Q 40 75 75 40 M 75 60 Q 95 75 75 90 Q 55 75 75 60" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
                  </pattern>
                </defs>
                <rect width="150" height="150" fill="url(#swirl-subscription)" />
              </svg>

              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold text-pink-600 mb-3 leading-tight">
                  Subscription<br />Programme
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Package the bundle as a subscription-based security program for predictable recurring revenue and deeper client relationships.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreStrategySection;
