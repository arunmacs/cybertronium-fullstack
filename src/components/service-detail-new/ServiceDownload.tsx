"use client";
import React from "react";
import GroupBgGradient from "@assets/services/assessment/Group.webp";
import Link from "next/link";;

interface ServiceDownloadProps {
  title: string;
  description: string;
}

const ServiceDownload: React.FC<ServiceDownloadProps> = ({
  title,
  description,
}) => {
  return (
    <section
      className="relative py-16 overflow-hidden text-white"
      style={{ background: "linear-gradient(180deg, #461148 0%, rgba(70, 17, 72, 0.8) 139.9%, rgba(70, 17, 72, 0) 174.17%), linear-gradient(0deg, #FFFFFF, #FFFFFF)" }}
    >
      {/* Background Abstract Lines */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img src={GroupBgGradient} alt="" className="w-full h-full object-cover opacity-80" loading="lazy" decoding="async" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Text */}
        <div className="md:w-1/2 w-full">
          <h2 className="!text-fluid-5xl font-bold leading-tight mb-4">
            {title}
          </h2>
          <p className="text-gray-200 !text-fluid-sm leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* Right Buttons */}
        <div className="md:w-1/2 w-full flex flex-col sm:flex-row gap-4 justify-end">
          <Link href={"https://play.google.com/store/apps/details?id=com.zimperium.zips"} target="_blank" className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
            <svg viewBox="0 0 512 512" className="w-8 h-8">
              <path fill="#4caf50" d="M32.8 54L251.2 272.4 32.8 490.8C25.4 484 20 472.6 20 458.7V76.1c0-13.9 5.4-25.3 12.8-32.1z" />
              <path fill="#ffc107" d="M331 352.2L251.2 272.4 331 192.6 422 244.4c17.5 10 26.2 20 26.2 38s-8.7 28-26.2 38L331 352.2z" />
              <path fill="#f44336" d="M32.8 490.8l218.4-218.4L331 352.2 60 506c-9.1 5.2-18 4.2-27.2-15.2z" />
              <path fill="#2196f3" d="M32.8 54C42 34.8 51 33.8 60 39l271 153.6-79.8 79.8L32.8 54z" />
            </svg>
            <div className="flex flex-col">
              <span className="!text-fluid-xs uppercase font-bold leading-none text-gray-600">GET IT ON</span>
              <span className="!text-fluid-xl font-bold leading-none -mt-1 tracking-tight">Google Play</span>
            </div>
          </Link>

          <Link href={"https://apps.apple.com/us/app/zimperium-mtd/id1030924459"} target="_blank" className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
            <svg viewBox="0 0 384 512" className="w-8 h-8" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <div className="flex flex-col">
              <span className="!text-fluid-xs font-bold leading-none text-gray-600">Download on the</span>
              <span className="!text-fluid-xl font-bold leading-none tracking-tight">App Store</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceDownload;
