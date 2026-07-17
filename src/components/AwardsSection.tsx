import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Trophy from "@assets/home/trophy.svg?react";
import placeholderAward from "@/assets/home/Placeholder Image.webp";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Awards 2019
import Award2019 from "@assets/home/awards&accolades/2019/WINNER_gold_2019.png";
import CSAward2019 from "@assets/home/awards&accolades/2019/CSAward.jpg";
// Awards 2020
import Award2020 from "@assets/home/awards&accolades/2020/badge_gold_2020.png"
// Awards 2021
import Award2021 from "@assets/home/awards&accolades/2021/cybersecurity_award_2021_Winner_Gold.png"
import CSAward2021 from "@assets/home/awards&accolades/2021/cybersecurityawrads.png"
// Awards 2022
import Award2022 from "@assets/home/awards&accolades/2022/badges_2022_Gold.png"
import CSAward2022 from "@assets/home/awards&accolades/2022/CSAward_1.jpg"
import GlobalAward2022 from "@assets/home/awards&accolades/2022/Globee-Awards-logo-PNG.webp"
// Awards 2023
import Award2023 from "@assets/home/awards&accolades/2023/badges_2023_Gold.png"
import PrimeAward2023 from "@assets/home/awards&accolades/2023/primeawards.png"
// Awards 2024
import Award2024 from "@assets/home/awards&accolades/2024/cybersecurity_awards_2024.png"
// Awards 2025
import Award2025 from "@assets/home/awards&accolades/2025/cybersecurity_awards_2025_gold.png"
// Awards 2026
import Award2026 from "@assets/home/awards&accolades/2026/cybersecurity_awards_2026_gold.png"
import AwardSilver2026 from "@assets/home/awards&accolades/2026/cybersecurity_awards_2026_silver.png"
import AwardFinalist2026 from "@assets/home/awards&accolades/2026/cybersecurity_awards_2026_finalist.png"

const years = ["2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019"];

const awardsData: Record<string, { awardee: string; title: string; subtitle: string; image?: any }[]> = {
  "2026": [
    { awardee: "Cybertronium Sdn. Bhd.", title: "2026", subtitle: "Most Innovative Cybersecurity Company", image: AwardFinalist2026 },
    { awardee: "Cybertronium Sdn. Bhd.", title: "2026", subtitle: "Continuous Threat Exposure Management (CTEM)", image: AwardSilver2026 },
    { awardee: "Dr. Clement Arul", title: "2026", subtitle: "AI Security Innovator of the Year", image: Award2026 },
    { awardee: "Neenu Maria Thankachan", title: "2026", subtitle: "Cybersecurity Consultant of the Year", image: Award2026 },
    { awardee: "Ain Nurlisa Binti Zailan (Lisa Zailan)", title: "2026", subtitle: "Cybersecurity Professional of the Year", image: AwardSilver2026 },
    { awardee: "Md Amin Ullah Sheikh", title: "2026", subtitle: "Cybersecurity Professional of the Year", image: AwardSilver2026 },
    { awardee: "Sivagurunathan Chakrapani", title: "2026", subtitle: "Cybersecurity Architect of the Year", image: AwardSilver2026 },
  ],
  "2025": [
    { awardee: "Cybertronium Sdn. Bhd.", title: "2025", subtitle: "Best cybersecurity company", image: Award2025 },
    { awardee: "Cybertron", title: "2025", subtitle: "Best Cybersecurity Awareness Program ", image: Award2025 },
    { awardee: "Dr. Clement Arul", title: "2025", subtitle: "Global Cybersecurity Advocate", image: Award2025 },
    { awardee: "Neenu Maria Thankachan", title: "2025", subtitle: "Cybersecurity Educator of the Year", image: Award2025 },
    { awardee: "Neenu Maria Thankachan", title: "2025", subtitle: "Cybersecurity Professional of the Year", image: Award2025 },
    { awardee: "Jakanath Shanmogam Sundaram", title: "2025", subtitle: "Chief Information Security Officer of the Year (CISO)", image: Award2025 },
    { awardee: "Hadi Nasrulhaq", title: "2025", subtitle: "Cybersecurity Vulnerability Management Professional of the Year", image: Award2025 },
    { awardee: "Sivagurunathan Chakrapani", title: "2025", subtitle: "Cybersecurity Product Leader of the Year", image: placeholderAward },
    { awardee: "Kaveerooban Krishnan", title: "2025", subtitle: "Cybersecurity Educator of the Year", image: Award2025 },
    { awardee: "Sarvinrao Muniandy", title: "2025", subtitle: "Cybersecurity Consultant of the Year", image: Award2025 },
  ],
  "2024": [
    { awardee: "Cybertronium", title: "2024", subtitle: "Best Cybersecurity company of the year.", image: Award2024 },
    { awardee: "Cybertronians", title: "2024", subtitle: "Best Cybersecurity Team of the year.", image: Award2024 },
    { awardee: "Cybertron", title: "2024", subtitle: "Best Cybersecurity Conference", image: Award2024 },
    { awardee: "Certified Experiential Cybersecurity Aware User", title: "2024", subtitle: "Best Cybersecurity Awareness programme.", image: Award2024 },
    { awardee: "Dr. Clement Arul", title: "2024", subtitle: "Global cybersecurity visionary of the year.", image: Award2024 },
    { awardee: "Mr. Jakanath Shanmogam", title: "2024", subtitle: "Chief Information Security Officer of the Year", image: Award2024 },
    { awardee: "Ms. Subashini Kalaiarasu", title: "2024", subtitle: "Cybersecurity Consultant of the Year", image: Award2024 },
    { awardee: "Mr. Kaveerooban Krishnan", title: "2024", subtitle: "Cybersecurity Educator of the Year", image: Award2024 },
    { awardee: "Mr. Hadi Nasrulhaq", title: "2024", subtitle: "Cybersecurity Consultant of the Year", image: Award2024 },
    { awardee: "Mr. Tirnesh Ragu", title: "2024", subtitle: "Cybersecurity Professional of the Year", image: Award2024 },
    { awardee: "Dr. Clement Arul", title: "2024", subtitle: "Cybersecurity Innovator of the Year", image: Award2024 },
    { awardee: "Mr. Sivagurunathan Chakrapnai", title: "2024", subtitle: "Cybersecurity Professional of the Year", image: Award2024 },
  ],
  "2023": [
    { awardee: "Cybertronium", title: "2023", subtitle: "Best Cybersecurity Company of the Year - Asia", image: Award2023 },
    { awardee: "Cybertronians", title: "2023", subtitle: "Best Cybersecurity Team of the Year - Asia", image: Award2023 },
    { awardee: "Cybertronium", title: "2023", subtitle: "Cybersecurity Service Provider of the Year - Asia", image: Award2023 },
    { awardee: "Cybertronium", title: "2023", subtitle: "Excellence in Innovation - Cybersecurity", image: PrimeAward2023 },
    { awardee: "Mr. Clement Arul", title: "2023", subtitle: "Chief Executive Officer of the Year - ASIA", image: Award2023 },
    { awardee: "Mr. Jakanath Shanmogam", title: "2023", subtitle: "Chief Information Security Officer of the Year - Asia", image: Award2023 },
    { awardee: "Ms. Priyanka Jayakumar", title: "2023", subtitle: "Cybersecurity Woman of the Year - Asia", image: Award2023 },
    { awardee: "Ms. Priyanka Jayakumar", title: "2023", subtitle: "Cybersecurity Consultant of the Year - Asia", image: Award2023 },
  ],
  "2022": [
    { awardee: "Cybertronium", title: "2022", subtitle: "Best Cybersecurity Company of the Year - Asia", image: Award2022 },
    { awardee: "Cybertronium", title: "2022", subtitle: "Best Cybersecurity Education Provider of the Year - Asia", image: Award2022 },
    { awardee: "Cybertronium", title: "2022", subtitle: "Cybersecurity Service Provider of the Year - Asia", image: Award2022 },
    { awardee: "Cybertronium", title: "2022", subtitle: "Defensive Cyberspace Operations Service Provider - Asia", image: Award2022 },
    { awardee: "Cybertronium", title: "2022", subtitle: "Most Innovative Cybersecurity Company - ASIA", image: Award2022 },
    { awardee: "Cybertronium", title: "2022", subtitle: "Excellence in Cybersecurity Services", image: GlobalAward2022 },
    { awardee: "Cybertronium", title: "2022", subtitle: "Cybersecurity Innovation of the Year", image: CSAward2022 },
    { awardee: "Mr. Jakanath Shanmogam", title: "2022", subtitle: "Cybersecurity Professional of the Year - Asia", image: Award2022 },
  ],
  "2021": [
    { awardee: "Cybertronium", title: "2021", subtitle: "Best Cybersecurity Education Provider of the Year - Asia", image: Award2021 },
    { awardee: "Mr. Clement Arul", title: "2021", subtitle: "Cybersecurity Influencer of the Year", image: CSAward2021 },
    { awardee: "Kalam (Cybertron)", title: "2021", subtitle: "Cybersecurity Education Platform of the Year - Asia", image: Award2021 },
    { awardee: "Mr. Clement Arul", title: "2021", subtitle: "Cybersecurity Professional of the Year - Asia", image: Award2021 },
    { awardee: "Mr. Clement Arul", title: "2021", subtitle: "Cybersecurity Educator of the Year - ASIA", image: Award2021 },
    { awardee: "Ms. Priyanka Jayakumar", title: "2021", subtitle: "Cybersecurity Blogger of the Year - Asia", image: Award2021 },
  ],
  "2020": [
    { awardee: "Cybertronium", title: "2020", subtitle: "Best Cybersecurity Education Provider of the Year - Asia", image: Award2020 },
    { awardee: "Cybertronium", title: "2020", subtitle: "Cybersecurity Service Provider of the Year - Asia", image: Award2020 },
    { awardee: "Mr. Clement Arul", title: "2020", subtitle: "Cybersecurity Educator of the Year - Asia", image: Award2020 },
    { awardee: "Mr. Clement Arul", title: "2020", subtitle: "Cybersecurity Professional of the Year - Asia", image: Award2020 },
  ],
  "2019": [
    { awardee: "Cybertronium", title: "2019", subtitle: "Best Cybersecurity Education Provider of the Year - Asia Pacific", image: Award2019 },
    { awardee: "Kalam (Cybertron)", title: "2019", subtitle: "Cybersecurity Innovation of the Year", image: CSAward2019 },
    { awardee: "Mr. Clement Arul", title: "2019", subtitle: "Cybersecurity Educator of the Year - Asia", image: Award2019 },
    { awardee: "Mr. Clement Arul", title: "2019", subtitle: "Cybersecurity Professional of the Year - Asia", image: Award2019 },
  ],
};

const AwardsSection = () => {
  const [activeYear, setActiveYear] = useState("2026");

  return (
    <section className="py-6 md:py-10 bg-white overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <SectionHeader
          subtitle="Growing Recognition"
          titlePart2="Awards & Accolades"
          description={
            <>
              {years?.length} consecutive years of recognition — 50+ awards and counting.
            </>
          }
        />

        {/* Year Tabs */}
        <div className="flex justify-center mb-16 relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#4D124E]/30 -translate-y-1/2 z-0 hidden md:block w-[80%] max-w-[800px] mx-auto" />

          <div className="relative z-10 flex flex-wrap justify-center gap-4 md:gap-8 px-4">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-2 md:px-4 py-1 md:py-1.5 rounded-full text-[clamp(13px,1vw+0.5rem,15px)] font-medium transition-all border ${activeYear === year
                  ? "bg-[#4D124E] text-white border-[#4D124E] shadow-md"
                  : "bg-white text-[#4D124E] border-[#4D124E]/40 hover:bg-purple-50"
                  }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Awards Grid UI */}
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {awardsData[activeYear]?.map((award, index) => (
                <div
                  key={index}
                  className="rounded-[16px] p-[1px] bg-gradient-to-br from-[#F37A3A]/70 via-[#CA1C69]/50 to-[#4D124E]/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 h-full"
                >
                  <div className="bg-white rounded-[14px] h-full p-2 md:p-3 flex flex-row items-center gap-4">
                    {/* Badge Image */}
                    <div className="shrink-0">
                      <Trophy className="size-[clamp(40px,2vw+2rem,45px)]" />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-center text-left flex-1 min-w-0 pr-2">
                      <h4 title={award.awardee} className="text-[clamp(12px,1.2vw+0.4rem,14px)] font-medium text-[#CA1C69] leading-tight mb-1 truncate">
                        {award.awardee}
                      </h4>
                      <p title={award.subtitle} className="text-[clamp(10px,1vw+0.2rem,11px)] text-gray-500 leading-[1.3] line-clamp-2">
                        {award.subtitle}
                      </p>
                    </div>

                    {/* Placeholder Image */}
                    <div className="shrink-0 w-[40px] md:w-[48px]">
                      <img src={award?.image || placeholderAward} alt="Award Winner" className="w-full h-auto object-contain" loading="lazy" decoding="async" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
