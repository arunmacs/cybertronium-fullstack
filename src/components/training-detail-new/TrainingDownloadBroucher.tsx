"use client";
import { Download } from "lucide-react";
import IndustriesWeServedBg from "@/assets/training/why-choose-training.webp";

export interface TrainingDownloadBroucherProps {
  title?: string;
  description?: string;
  link?: string;
  links?: { label: string; url: string }[];
}

const TrainingDownloadBroucher = ({
  title = "Download Brochure",
  description = "Get complete course information, curriculum details, certification pathways, training structure, and learning outcomes in a comprehensive downloadable brochure designed to help you understand the program better.",
  link,
  links
}: TrainingDownloadBroucherProps) => {
  return (
    <section className="py-10 relative overflow-hidden bg-[#3E1645]">
      {/* Background image */}
      <div className="absolute inset-0 bg-[#2A0A30]">
        <img src={IndustriesWeServedBg} alt="Background" className="object-cover w-full h-full z-0" loading="lazy" decoding="async" />
      </div>

      <div className="container mx-auto md:px-6 lg:px-20 relative z-10 text-center">
        <h2 className="text-fluid-5xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h2>
        <p className="text-fluid-sm text-white/80 max-w-3xl mx-auto mb-10 leading-[1.6]">
          {description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {links && links.length > 0 ? (
            links.map((l, i) => (
              <a key={i} href={l.url} className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white border border-white hover:bg-white/10 transition-colors text-fluid-sm font-medium" download>
                {l.label} <Download className="w-4 h-4" />
              </a>
            ))
          ) : link ? (
            <a href={link} className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white border border-white hover:bg-white/10 transition-colors text-fluid-sm font-medium" download>
              {title} <Download className="w-4 h-4" />
            </a>
          ) : (
            <button className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white border border-white hover:bg-white/10 transition-colors text-fluid-sm font-medium">
              {title} <Download className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrainingDownloadBroucher;
