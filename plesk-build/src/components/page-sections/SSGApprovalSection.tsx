"use client";
import React from "react";
import SSGLogo from "@assets/training/ssg-logo.webp"
import GroupBgGradient from "@assets/services/assessment/Group.webp";
import GroupBgGradient2 from "@assets/services/assessment/Group(1).webp";


interface SSGApprovalCard {
  title: string;
  description: string;
  items?: string[];
}

interface SSGApprovalSectionProps {
  subheading: string;
  heading: string;
  cards: SSGApprovalCard[];
  footerText: string;
  footerLinkText: string;
  footerLinkUrl: string;
  footerLogo?: string;
}

const SSGApprovalSection: React.FC<SSGApprovalSectionProps> = ({
  subheading,
  heading,
  cards,
  footerText,
  footerLinkText,
  footerLinkUrl,
  footerLogo,
}) => {
  // Split cards: first 3 go left column, last 2 go right column
  const leftCards = cards.slice(0, 3);
  const rightCards = cards.slice(3);

  return (
    <section className="py-8 md:py-10 bg-white">

      {/* Cards area — bg images scoped here only */}
      <div className="relative overflow-hidden">
        {/* Top decorative background image — positioned top-right */}
        <div
          className="absolute right-16 top-40 z-0 pointer-events-none"
          style={{ width: '65%', maxWidth: '900px', transform: 'translate(10%, -18%)' }}
        >
          <img src={GroupBgGradient} alt="" className="w-full h-auto object-contain opacity-70" loading="lazy" decoding="async" />
        </div>

        {/* Bottom decorative background image — positioned bottom-left */}
        <div
          className="absolute left-0 bottom-28 z-0 pointer-events-none"
          style={{ width: '65%', maxWidth: '900px', transform: 'translate(-10%, 18%)' }}
        >
          <img src={GroupBgGradient2} alt="" className="w-full h-auto object-contain opacity-60" loading="lazy" decoding="async" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Section header */}
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-orange-400/50 mx-auto mb-3 rounded-full" />
            <p className="text-[#CA1C69] font-medium text-[13px] mb-2">
              {subheading}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-[#CA1C69] to-[#F37A3A] bg-clip-text text-transparent">
                {heading}
              </span>
            </h2>
          </div>

          {/* Bento grid — asymmetric: ~37% left, ~63% right */}
          <div className="grid md:grid-cols-[5fr_7fr] gap-5 items-stretch">
            {/* Left column — 3 stacked cards */}
            <div className="flex flex-col gap-5">
              {leftCards.map((card, idx) => (
                <ApprovalCard key={idx} card={card} />
              ))}
            </div>

            {/* Right column — 2 larger cards */}
            <div className="flex flex-col gap-5">
              {rightCards.map((card, idx) => (
                <ApprovalCard key={idx} card={card} variant="large" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer — Logo + eligibility text (outside bg image scope) */}
      <div className="container mx-auto px-4 max-w-6xl mt-10 mb-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="w-[280px] md:w-[380px] lg:w-[480px] flex-shrink-0">
            <img
              src={SSGLogo}
              alt="SkillsFuture SG"
              className="w-full h-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          <p className="text-gray-500 text-xs md:text-sm lg:text-[15px] font-medium text-center md:text-left max-w-xl">
            {footerText}{" "}
            <a
              href={footerLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CA1C69] hover:underline font-semibold"
            >
              {footerLinkText}
            </a>
          </p>
        </div>
      </div>

    </section>
  );
};

// ─── Internal Card Component ─────────────────────────────────────────────────

interface ApprovalCardProps {
  card: SSGApprovalCard;
  variant?: "default" | "large";
}

const ApprovalCard: React.FC<ApprovalCardProps> = ({
  card,
  variant = "default",
}) => {
  return (
    <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-[#F37A3A]/25 via-[#CA1C69]/15 to-[#F37A3A]/10 flex-1 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
      <div
        className={`bg-white rounded-[11px] p-4 lg:p-6 h-full ${variant === "large" ? "flex flex-col justify-start" : ""
          }`}
      >
        <h3
          className={`font-bold text-[#3B194E] mb-3 leading-snug ${variant === "large"
            ? "text-xl md:text-2xl lg:text-[26px]"
            : "text-base md:text-lg"
            }`}
        >
          {card.title}
        </h3>

        <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed font-light mb-4 whitespace-pre-line">
          {card.description}
        </p>

        {card.items && card.items.length > 0 && (
          <ul className="space-y-1.5">
            {card.items.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-[13px] md:text-sm text-gray-500 font-light"
              >
                <span className="text-gray-400 mt-0.5 shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SSGApprovalSection;

