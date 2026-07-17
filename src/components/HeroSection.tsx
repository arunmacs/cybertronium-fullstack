import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Background image (right side only) */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
          style={{ maskImage: "linear-gradient(to left, black 40%, transparent 80%)" }}
          loading="eager"
          // @ts-expect-error React 18 types don't support fetchpriority yet
          fetchpriority="high"
          decoding="sync"
        />
      </div>

      <div className="relative z-10 container mx-auto pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-medium text-primary">
                Security Outcomes Partner
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[1.1] mb-6">
              <span className="text-white">Your Outsourced </span>
              <span className="text-gradient-primary">Cybersecurity</span>
              <br />
              <span className="text-white">Command Centre</span>
            </h1>

            <p className="text-lg text-white/80 max-w-lg mb-8 leading-relaxed">
              Shifting from service vendor to Security Outcomes Partner — delivering Business Risk Reduction,
              Continuous Assurance & Security Maturity for Mid-Market and Enterprises.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mb-10">
              {["AICPA SOC Audited", "ISO 27001 Certified", "CREST Accredited"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-cta text-primary-foreground px-8 py-4 rounded-full font-display text-sm font-semibold hover:opacity-90 transition-all"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-display text-sm font-semibold hover:border-primary hover:text-primary transition-all"
              >
                Request a Demo
              </a>
            </div>
          </div>

          {/* Right — stats */}
          <div
            className="grid grid-cols-2 gap-5"
          >
            {[
              { label: "Years in Cybersecurity", value: "8+" },
              { label: "Awards Won", value: "50+" },
              { label: "Clients Secured", value: "200+" },
              { label: "SOC Uptime", value: "24/7" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-6 bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all"
              >
                <div className="font-display text-4xl font-extrabold text-gradient-primary">{stat.value}</div>
                <div className="text-sm text-white/70 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

