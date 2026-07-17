"use client";
const stats = [
  { label: "Certified professionals", value: "11,000+", description: "Security professionals trained and certified globally" },
  { label: "Pass rate", value: "98%", description: "Exceptional certification success across all programs" },
  { label: "Training partners", value: "18", description: "Enterprise organizations delivering CogniShield training" },
  { label: "Specialized courses", value: "10+", description: "Comprehensive curriculum covering modern concepts" },
];

const ProvenResults = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-white">
      {/* Subtle decorative wave bg placeholder */}
      <div className="absolute top-0 right-0 w-[50%] h-full opacity-5" style={{
        background: "radial-gradient(ellipse at 80% 30%, rgba(202, 28, 105, 0.3) 0%, transparent 60%)",
      }} />

      <div className="container mx-auto md:px-6 lg:px-20 max-w-[1200px] relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left — Heading + Description */}
          <div className="w-full lg:w-[35%] pt-4">
            <div className="w-12 h-0.5 bg-orange-400/50 mb-3 rounded-full"></div>
            <p className="text-[#CA1C69]  font-semibold text-[13px] tracking-wide mb-4">
              Impact
            </p>
            <h2 className="text-[36px] md:text-[38px]  font-bold leading-[1.1] mb-4">
              <span className="bg-gradient-to-r from-[#CA1C69] to-[#F37A3A] bg-clip-text text-transparent">
                Proven Results<br />From Our<br />Community
              </span>
            </h2>
            <p className="text-gray-500 text-sm  leading-[1.6] max-w-[320px]">
              Our learners achieve measurable success through rigorous training and industry-recognized credentials. Join thousands advancing their careers in cybersecurity.
            </p>
          </div>

          {/* Right — 2×2 Stat Cards */}
          <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] border border-[#CA1C69]/40 shadow-sm p-8 hover:shadow-md transition-shadow"
              >
                <p className="text-[#CA1C69]  font-semibold text-[14px] mb-8">
                  {stat.label}
                </p>
                <div className="text-center md:text-right">
                  <div className=" text-[42px] md:text-[52px] font-extrabold text-[#3B194E] leading-none mb-6">
                    {stat.value}
                  </div>
                </div>

                <div className="h-[2px] bg-[#CA1C69]/30 w-full mb-2" />

                <p className="text-gray-500 text-[12px]  leading-[1.6]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;
