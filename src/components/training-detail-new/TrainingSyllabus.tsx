"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface TrainingSyllabusProps {
  syllabus: {
    day: string;
    modules: {
      title: string;
      content?: string;
      bullets?: (string | { text: string; subItems: string[] })[];
      sections?: {
        title: string;
        bullets?: string[];
      }[];
    }[];
  }[];
  duration?: string;
}

const TrainingSyllabus = ({ syllabus, duration }: TrainingSyllabusProps) => {
  const [openModule, setOpenModule] = useState<number>();

  if (!syllabus || syllabus.length === 0) return null;

  // Flatten the modules from all days into a single array
  const allModules = syllabus.flatMap(day => day.modules);

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-0 max-w-[1000px]">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-8 border-b border-transparent">
          <div className="max-w-2xl">
            <div className="w-12 h-0.5 bg-orange-400/50 mb-3 rounded-full"></div>
            <div className="text-fluid-base text-primary mb-4 font-medium">
              Overview
            </div>
            <h2
              className="text-fluid-4xl font-bold leading-tight bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #CA1C69 0%, #F37A3A 100%)" }}
            >
              What You'll Learn
            </h2>
            <p className="text-fluid-base text-gray-500 mt-4 leading-[1.6]">
              Explore a complete suite of cybersecurity services designed to protect, detect, and respond to modern threats across your organization.
            </p>
          </div>

          {duration && (
            <div className="md:pl-8 md:border-l border-[#FF9A3C] shrink-0">
              <div className="text-fluid-base text-gray-800 mb-1">Duration</div>
              <div
                className="text-fluid-4xl font-bold leading-none bg-clip-text text-transparent tracking-tight"
                style={{ backgroundImage: "linear-gradient(90deg, #CA1C69 0%, #F37A3A 100%)" }}
              >
                {duration}
              </div>
            </div>
          )}
        </div>

        {/* Accordion Section */}
        <div className="space-y-4">
          {allModules.map((mod, idx) => {
            const isOpen = openModule === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-[8px] overflow-hidden transition-all duration-300 border ${isOpen ? "border-[#CA1C69]" : "border-gray-200 hover:border-[#CA1C69]/50"
                  }`}
              >
                <button
                  onClick={() => setOpenModule(isOpen ? -1 : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white cursor-pointer"
                >
                  <span className={`text-fluid-lg font-bold tracking-tight text-left pr-4 ${isOpen ? "text-[#511F5E]" : "text-[#511F5E]"}`}>
                    {mod.title}
                  </span>
                  <div className="shrink-0 text-gray-400">
                    {isOpen ? <Minus className="w-5 h-5" strokeWidth={1.5} /> : <Plus className="w-5 h-5" strokeWidth={1.5} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        {mod.content && (
                          <p className="text-fluid-base text-gray-500 leading-[1.6] mb-4">
                            {mod.content}
                          </p>
                        )}
                        {mod.bullets && (
                          <ul className="space-y-3">
                            {mod.bullets.map((bullet, bIdx) =>
                              typeof bullet === "string" ? (
                                <li key={bIdx} className="text-fluid-base text-gray-400 flex items-start">
                                  <span className="mr-3 text-gray-300 mt-1.5 text-fluid-base">●</span>
                                  <span className="leading-[1.6]">{bullet}</span>
                                </li>
                              ) : (
                                <li key={bIdx} className="text-fluid-base text-gray-400">
                                  <div className="flex items-start">
                                    <span className="mr-3 text-gray-300 mt-1.5 text-fluid-base">●</span>
                                    <span className="leading-[1.6]">{bullet.text}</span>
                                  </div>
                                  {bullet.subItems && (
                                    <ul className="space-y-1 mt-1">
                                      {bullet.subItems.map((sub, sIdx) => (
                                        <li key={sIdx} className="text-fluid-base text-gray-400 flex items-start pl-5">
                                          <span className="mr-2 text-gray-300 mt-1.5 text-[8px]">○</span>
                                          <span className="leading-[1.6]">{sub}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              )
                            )}
                          </ul>
                        )}
                        {mod.sections && (
                          <div className="space-y-5">
                            {mod.sections.map((section, sIdx) => (
                              <div key={sIdx}>
                                <p className="text-fluid-base font-semibold text-[#511F5E] mb-2 leading-[1.5]">
                                  {section.title}
                                </p>
                                {section.bullets && (
                                  <ul className="space-y-2">
                                    {section.bullets.map((bullet, bIdx) => (
                                      <li key={bIdx} className="text-fluid-base text-gray-400 flex items-start pl-3">
                                        <span className="mr-2 text-gray-300 mt-1.5 text-[8px]">○</span>
                                        <span className="leading-[1.6]">{bullet}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TrainingSyllabus;
