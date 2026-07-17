"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import Link from "next/link";;
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface SharedFAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
}

const SharedFAQ = ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle,
  ctaTitle,
  ctaSubtitle,
  ctaButtonText,
  ctaButtonLink,
}: SharedFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number>();

  return (
    <section className="py-10 bg-[#FAFAFA]">
      <div className="container mx-auto md:px-6 lg:px-10 max-w-[1100px]">
        <div className="text-center mb-10">
          <h2 className="text-fluid-4xl font-bold leading-tight bg-clip-text text-transparent mb-4" style={{ backgroundImage: "linear-gradient(90deg, #CA1C69 0%, #F37A3A 100%)" }}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-fluid-base text-gray-500">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-0 mb-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`border-b border-gray-200 ${idx === 0 ? "border-t" : ""}`}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-fluid-base font-medium text-[#3B194E]">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#3B194E] flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#3B194E] flex-shrink-0 ml-4" />
                  )}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 text-fluid-base text-gray-500 leading-[1.6] whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {(ctaTitle || ctaButtonText) && (
          <div className="text-center">
            {ctaTitle && (
              <h3 className="text-fluid-3xl font-bold bg-clip-text text-transparent mb-4" style={{ backgroundImage: "linear-gradient(90deg, #CA1C69 0%, #F37A3A 100%)" }}>
                {ctaTitle}
              </h3>
            )}
            {ctaSubtitle && (
              <p className="text-fluid-base text-gray-500 mb-8">
                {ctaSubtitle}
              </p>
            )}
            {ctaButtonText && ctaButtonLink && (
              <Link
                href={ctaButtonLink}
                className="bg-gradient-cta inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white transition-colors text-fluid-sm font-medium"
              >
                {ctaButtonText} <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default SharedFAQ;