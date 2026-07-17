"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const testimonials = [
  {
    text: "The hands-on labs gave me real confidence to handle incidents in my SOC role. This training changed everything.",
    name: "Syed Amirul Hakim",
    role: "Security analyst",
    industry: "Technology",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
  },
  {
    text: "I earned my certification and landed a promotion within three months. The curriculum is exactly what the industry needs.",
    name: "Farah Nabilah Ahmad",
    role: "Penetration tester",
    industry: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
  },
  {
    text: "The instructors brought real-world experience that you can't find in textbooks. Absolutely worth the investment.",
    name: "Farah Nabilah Ahmad",
    role: "Security consultant",
    industry: "Professional Services",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
  },
  // {
  //   text: "Comprehensive coverage of modern threat landscapes. The labs were particularly effective for hands-on learning.",
  //   name: "Emily Park",
  //   role: "SOC Manager",
  //   industry: "CyberGuard",
  //   image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
  // },
  // {
  //   text: "Best cybersecurity training I've attended. The real-world scenarios made all the difference in my daily work.",
  //   name: "David Okafor",
  //   role: "Threat analyst",
  //   industry: "GlobalSec",
  //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
  // },
];



const LearnerSuccessStories = () => {
  const [page, setPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);
  const visibleCards = testimonials.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section className="py-6 lg:py-10 bg-white overflow-hidden">
      <div className="container mx-auto md:px-6 lg:px-20 max-w-[1200px]">
        <SectionHeader
          titlePart2={<>Learner<br />Success Stories</>}
          description="Hear from professionals who transformed their careers through CogniShield training."
          showBar={false}
          className="mb-16"
        />

        {/* 3 Testimonial Cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {visibleCards.map((t, idx) => (
            <div
              key={`${page}-${idx}`}
              className="bg-white rounded-[16px] border border-gray-200 shadow-sm p-8 flex flex-col justify-between min-h-[220px]"
            >
              <p className="text-[clamp(11px,1vw+0.4rem,13px)] text-gray-500 leading-[1.6] font-medium mb-8">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                {/* <div className="w-[40px] h-[40px] rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div> */}
                <div>
                  <h4 className=" font-bold text-[clamp(14px,1vw+0.4rem,16px)] text-[#3B194E] leading-none mb-1.5">
                    {t.name}
                  </h4>
                  <p className="text-[clamp(10px,0.8vw+0.4rem,12px)] text-gray-500 ">
                    {t.role} {t.industry ? `| ${t.industry}` : ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination — dots left, arrows right */}
        <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx)}
                className={`rounded-full transition-all duration-300 ${page === idx
                  ? "w-2.5 h-2.5 bg-[#CA1C69]"
                  : "w-2.5 h-2.5 bg-gray-200"
                  }`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#CA1C69] flex items-center justify-center text-[#CA1C69] hover:bg-[#CA1C69]/5 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#CA1C69] flex items-center justify-center text-[#CA1C69] hover:bg-[#CA1C69]/5 transition-all"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnerSuccessStories;
