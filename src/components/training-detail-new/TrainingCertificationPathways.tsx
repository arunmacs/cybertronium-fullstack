"use client";
import Link from "next/link";;
import CertificationIcon from "@/assets/training/certifications.svg?react";


export interface TrainingCertificationPathwaysProps {
  sectionDescription?: string;
  cards: {
    bannerImage: string;
    title: string;
    badge: string;
    description: string;
    features: { label: string; value: string }[];
  }[];
}

const TrainingCertificationPathways = ({ sectionDescription, cards }: TrainingCertificationPathwaysProps) => {
  if (!cards || cards.length === 0) return null;

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto md:px-6 lg:px-10 max-w-[1100px]">
        <div className="text-center mb-12">
          <div className="w-12 h-0.5 bg-orange-400/50 mx-auto mb-3 rounded-full"></div>
          <div className="text-fluid-base text-primary mb-3 uppercase tracking-wide">Industry Certifications</div>
          <h2 className="text-fluid-4xl font-bold leading-tight bg-clip-text text-transparent mb-4" style={{ backgroundImage: "linear-gradient(90deg, #CA1C69 0%, #F37A3A 100%)" }}>
            Examination Platforms
          </h2>
          {sectionDescription && (
            <p className="text-fluid-base text-gray-500 max-w-3xl mx-auto leading-[1.6]">
              {sectionDescription}
            </p>
          )}
        </div>

        <div className={`grid gap-8 ${cards.length > 1 ? 'lg:grid-cols-2' : 'max-w-6xl mx-auto'}`}>
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-[16px] border border-gray-100 overflow-hidden shadow-sm flex flex-col">
              <div className="h-[120px] bg-white border-b border-gray-100 flex items-center px-8 relative overflow-hidden">
                <div className="absolute inset-0">
                  <img src={card.bannerImage} alt={card.title} className="w-full h-full object-cover object-[10%_50%]" loading="lazy" decoding="async" />
                </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-fluid-2xl font-bold text-[#3B194E] mb-4 leading-[1.1]">{card.title}</h3>
                {/* <div className="mb-4">
                  <span className="inline-block border border-[#F37A3A]/50 text-[#3B194E] text-fluid-base px-4 py-1.5 rounded-full">
                    {card.badge}
                  </span>
                </div> */}

                <p className="text-fluid-base text-gray-500 leading-[1.6] mb-6">
                  {card.description}
                </p>

                <div className="space-y-4 mb-6 flex-grow">
                  {card.features.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CertificationIcon className="w-5 h-[22px] flex-shrink-0 mt-0.5" />
                      <div className="text-fluid-base leading-[1.5]">
                        <span className="font-bold text-gray-700">{item.label}: </span>
                        <span className="text-gray-500">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <Link href="/contact" className="text-[#CA1C69] text-fluid-sm font-medium flex items-center hover:opacity-80 transition-opacity">
                  Learn More <span className="ml-2">›</span>
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingCertificationPathways;
