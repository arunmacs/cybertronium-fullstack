"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import GroupBgGradient from "@assets/services/assessment/Group.webp";

interface ServiceSignUpProps {
  title: string;
  description: string;
}

const ServiceSignUp: React.FC<ServiceSignUpProps> = ({
  title,
  description,
}) => {
  return (
    <section
      className="relative py-10 overflow-hidden text-white"
      style={{ background: "linear-gradient(180deg, #461148 0%, rgba(70, 17, 72, 0.8) 139.9%, rgba(70, 17, 72, 0) 174.17%), linear-gradient(0deg, #FFFFFF, #FFFFFF)" }}
    >
      {/* Background Abstract Lines */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img src={GroupBgGradient} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Text */}
        <div className="lg:w-1/2 w-full">
          <h2 className="!text-fluid-5xl font-bold leading-tight mb-4">
            {title}
          </h2>
          <p className="text-gray-200 !text-fluid-sm leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* Right Form */}
        <div className="lg:w-1/2 w-full">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="!text-fluid-sm font-bold">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="bg-white/10 border border-white/20 rounded-md px-4 py-3 !text-fluid-sm focus:outline-none focus:border-primary text-white placeholder-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="!text-fluid-sm font-bold">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="bg-white/10 border border-white/20 rounded-md px-4 py-3 !text-fluid-sm focus:outline-none focus:border-primary text-white placeholder-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="!text-fluid-sm font-bold">Company Name</label>
              <input
                type="text"
                placeholder="Enter your Company Name"
                className="bg-white/10 border border-white/20 rounded-md px-4 py-3 !text-fluid-sm focus:outline-none focus:border-primary text-white placeholder-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="!text-fluid-sm font-bold">Designation</label>
              <input
                type="text"
                placeholder="Enter your Designation"
                className="bg-white/10 border border-white/20 rounded-md px-4 py-3 !text-fluid-sm focus:outline-none focus:border-primary text-white placeholder-gray-300"
              />
            </div>
            <div className="md:col-span-2 mt-2">
              <button
                type="submit"
                className="bg-gradient-cta transition-colors text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 !text-fluid-sm"
              >
                Sign Up <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServiceSignUp;
