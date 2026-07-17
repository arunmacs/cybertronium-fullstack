"use client";
import { ArrowRight, ChevronRight } from "lucide-react";
import grdientwaves from "@assets/CTEM/gradient-waves.webp"
import Link from "next/link";;

const CTEMCTA = () => {
  return (
    <section className="py-10 px-20 bg-[#3B194E] relative overflow-hidden">
      {/* Decorative background abstract lines placeholder */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={grdientwaves} alt="gradient-waves" className="w-full h-full object-cover" loading="lazy" decoding="async" />
      </div>

      <div className="container mx-auto md:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <h2 className="text-[24px] md:text-[36px] font-bold text-white leading-tight mb-4 max-w-[1200px]">
              Continuous Visibility.<br />Smarter Priorities. Real Risk Reduction.
            </h2>
            <p className="text-base text-white">
              Let's build your cyber resilience — together.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:gap-2 shrink-0">
            <button className="bg-gradient-cta text-white text-[14px] font-medium px-4 py-2 rounded-full transition-colors flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <Link href={"/contact"} className="border border-white hover:bg-white/10 text-white text-[14px] font-medium px-4 py-2 rounded-full transition-colors">
              Talk To An Expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTEMCTA;
