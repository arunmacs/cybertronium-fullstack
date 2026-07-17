"use client";
const metricsData = [
  {
    title: "MTTR Reduction",
    value: "70%",
    description: "Mean-time-to-remediate critical vulnerabilities drops 50-80%.",
    source: "VECTRA AI / SAFEBREACH BENCHMARKS"
  },
  {
    title: "Critical Exposure Reduction",
    value: "84%",
    description: "84% fewer false-urgency findings — focus on the ~2% of CVEs that actually reach crown-jewel assets.",
    source: "GARTNER CTEM RESEARCH, 2025"
  },
  {
    title: "Attack Surface Reduction",
    value: "40%",
    description: "30-40% more shadow/unknown assets discovered and decommissioned.",
    source: "XM CYBER STATE OF EXPOSURE"
  },
  {
    title: "Security Incident Reduction",
    value: "65%",
    description: "Organizations adopting CTEM are 3× less likely to suffer a material breach.",
    source: "GARTNER, 2025"
  },
  {
    title: "Audit Readiness Improvement",
    value: "60%",
    description: "50-70% reduction in audit prep time via continuous evidence collection.",
    source: "ISACA / CUSTOMER BENCHMARKS"
  }
];

const MetricCard = ({ title, value, description, source }: { title: string, value: string, description: string, source: string }) => (
  <div
    className="rounded-[8px] p-[1px] shadow-sm hover:shadow-md transition-shadow h-full"
    style={{ background: 'linear-gradient(270.09deg, #F37A3A 16.02%, #CA1C69 91.5%)' }}
  >
    <div className="bg-white rounded-[7px] p-2 md:p-4 flex flex-col justify-between min-h-[240px] h-full">
      <div className="text-sm font-bold text-[#CA1C69] mb-4">
        {title}
      </div>
      <div className="text-[56px] md:text-[64px] font-bold leading-none text-[#3B194E] ml-auto mb-6">
        {value}
      </div>
      <div className="w-full h-[1px] bg-[#CA1C69]/20 mb-5"></div>
      <p className="text-[12px] leading-[1.6] text-gray-500 mb-4 flex-grow">
        {description}
      </p>
      <div className="text-[10px] font-medium tracking-widest uppercase text-[#3B194E]">
        {source}
      </div>
    </div>
  </div>
);

const CTEMMetrics = () => {
  return (
    <section className="py-10 lg:py-16 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto md:px-6 lg:px-16 max-w-[1200px]">

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Title Block (occupies first cell) */}
          <div className="flex flex-col justify-start lg:pr-6 mb-8 lg:mb-0 pt-2">
            <h2 className="text-[32px] md:text-[43px] font-bold leading-[1.1] bg-clip-text text-transparent mb-6" style={{ backgroundImage: "linear-gradient(90deg, #CA1C69 0%, #F37A3A 100%)" }}>
              CTEM <br />
              <span className="text-[24px] md:text-[32px]">by the Numbers</span>
            </h2>
            <p className="text-[13px] leading-[1.6] text-gray-500 ">
              Global benchmarks from organizations operating mature CTEM programs. Source-backed KPIs across remediation, exposure, attack surface, incidents and audit readiness.
            </p>
          </div>

          {metricsData.map((metric, idx) => (
            <MetricCard key={idx} {...metric} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default CTEMMetrics;
