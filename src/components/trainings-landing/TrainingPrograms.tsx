"use client";
import Link from "next/link";;
import { ChevronRight, ArrowRight } from "lucide-react";
import operations from "@/assets/training/Placeholder Image.webp";
import bootcamp from "@/assets/training/Placeholder Image (1).webp";
import security from "@/assets/training/Placeholder Image (2).webp";

const programs = [
  {
    dayOfWeek: "Mon",
    date: "24",
    monthYear: "Feb 2025",
    image: operations,
    tag: "Online",
    title: "SOC operations fundamentals",
    location: "Virtual",
    description: "Live online instruction with hands-on incident response labs and real-time instructor support.",
    link: "/trainings/certified-soc-analyst",
  },
  {
    dayOfWeek: "Wed",
    date: "26",
    monthYear: "Feb 2025",
    image: bootcamp,
    tag: "Classroom",
    title: "Ethical hacking bootcamp",
    location: "Singapore",
    description: "Intensive in-person program with penetration testing labs and network security exercises.",
    link: "/trainings/certified-penetration-tester",
  },
  {
    dayOfWeek: "Fri",
    date: "28",
    monthYear: "Feb 2025",
    image: security,
    tag: "Corporate",
    title: "Cloud security essentials",
    location: "On-site",
    description: "Customized training for enterprise teams covering AWS, Azure, and Google Cloud security.",
    link: "/trainings/certified-cloud-security-professional",
  },
];

const TrainingPrograms = () => {
  return (
    <section className="py-6 lg:py-10 bg-white overflow-hidden">
      <div className="container mx-auto md:px-6 lg:px-20 max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-12 h-0.5 bg-orange-400/50 mx-auto mb-3 rounded-full"></div>
          <p className="text-[#CA1C69]  font-semibold text-[13px] tracking-wide mb-4">
            Schedule
          </p>
          <h2 className="text-[36px] md:text-[48px]  font-extrabold leading-tight mb-4">
            <span className="bg-gradient-to-r from-[#CA1C69] to-[#F37A3A] bg-clip-text text-transparent">
              Programs
            </span>
          </h2>
          <p className="text-gray-500 text-[14px]  max-w-lg mx-auto">
            Secure your spot in upcoming training sessions across multiple locations and formats.
          </p>
        </div>

        {/* Schedule Cards — 3 in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-14">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] border border-gray-200 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500 group flex flex-col"
            >
              {/* Image with date badge */}
              <div className="relative h-[220px] overflow-hidden shrink-0">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                {/* Dark overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0514]/80 to-transparent pointer-events-none opacity-60" />

                {/* Date badge — top right */}
                <div className="absolute top-4 right-4 bg-white rounded-xl shadow-lg px-4 py-3 text-center min-w-[70px]">
                  <div className="text-[10px]  font-semibold text-[#CA1C69] uppercase tracking-wider leading-none mb-1">
                    {prog.dayOfWeek}
                  </div>
                  <div className="text-[28px]  font-extrabold text-[#CA1C69] leading-none mb-1.5">
                    {prog.date}
                  </div>
                  <div className="text-[9px]  font-medium text-gray-400 uppercase tracking-wider leading-none">
                    {prog.monthYear}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Tag badge */}
                <span className="self-start text-[10px] font-mono font-medium px-2 py-0.5 bg-[#FFF0F4] text-[#CA1C69] border border-[#FFE0E8] rounded-sm mb-2">
                  {prog.tag}
                </span>

                <h3 className="text-[18px]  font-bold text-[#3B194E] mb-2 leading-snug">
                  {prog.title}
                </h3>
                <p className="text-[13px]  font-semibold text-[#CA1C69] mb-2">
                  {prog.location}
                </p>
                <p className="text-[13px] text-gray-500  leading-[1.6] mb-4 flex-grow">
                  {prog.description}
                </p>

                <Link
                  href={prog.link}
                  className="inline-flex items-center gap-1 text-[#3B194E] text-[13px]  font-bold hover:text-[#CA1C69] transition-colors mt-auto"
                >
                  <span>Register</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/trainings"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white text-[14px]  font-semibold hover:opacity-90 transition-opacity"
            style={{
              background: "linear-gradient(90deg, #8A1A59 0%, #C81A67 100%)",
            }}
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
