"use client";
import React from "react";
import Link from "next/link";;
import { ChevronRight } from "lucide-react";
import Certification from "@/assets/training/certification.svg?react";
import CertificationFeatured from "@/assets/training/certification-featured.svg?react";

export interface TrainingCardProps {
  title: string;
  description: string;
  link: string;
  target?: string;
  tags: string[];
}

const TrainingCard: React.FC<TrainingCardProps> = ({ title, description, link, target = "_self", tags }) => {
  return (
    <Link
      href={link}
      target={target}
      className="group relative overflow-hidden bg-white/50 backdrop-blur-sm border border-[#010A09]/10 rounded-md p-6 shadow-sm transition-all duration-500 hover:shadow-xl flex flex-col h-full bg-white"
    >
      {/* Top Gradient Border on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#CA1C69] to-[#F37A3A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative w-[48px] h-[48px] mb-4">
        <Certification className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
        <CertificationFeatured className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      </div>

      <h3 className="text-[clamp(16px,1.5vw+0.5rem,18px)] font-bold text-[#3B194E] mb-3 leading-snug transition-colors">
        {title}
      </h3>

      <p className="text-[clamp(11px,1vw+0.4rem,13px)] leading-[1.6] text-gray-500 mb-6 flex-grow">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, tIdx) => (
          <span
            key={tIdx}
            className="text-[clamp(10px,0.8vw+0.4rem,12px)] font-mono font-medium px-2.5 py-1 bg-[#FDF2F8] text-[#C01E6C] border border-[#FBCFE8] rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-1 text-[#CA1C69] text-[clamp(13px,1vw+0.4rem,14px)] font-bold mt-auto">
        <span>Learn More</span>
        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default TrainingCard;
