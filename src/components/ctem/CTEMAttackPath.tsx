"use client";
import { Globe, Lock, TrendingUp, Network, Database, AlertTriangle } from "lucide-react";
import attackgradientwave from "@assets/CTEM/bg.webp";
import CustomCheckMark from "@assets/CTEM/check-mark_12503776 1.svg?react";

const CTEMAttackPath = () => {
  return (
    <section className="py-10 lg:py-16 relative overflow-hidden bg-[#24133A]">
      {/* Decorative background abstract lines placeholder */}
      <div className="absolute inset-0 z-0">
        <img src={attackgradientwave} alt="Background abstract lines" className="w-full h-full object-cover mix-blend-screen" loading="lazy" decoding="async" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.42) 139.9%, rgba(0, 0, 0, 0) 174.17%)'
          }}
        />
      </div>

      <div className="container mx-auto md:px-6 lg:px-20 relative z-10">
        <div className="text-center mb-16">
          <div className="w-12 h-0.5 bg-white mx-auto mb-3 rounded-full"></div>
          <div className="text-[14px] font-semibold text-white/80 tracking-wide mb-4">
            Attack Path Example
          </div>
          <h2 className="text-[36px] md:text-[48px] font-bold leading-tight text-white">
            From Initial Access to Impact
          </h2>
        </div>

        {/* Path Chain */}
        <div className="relative max-w-[1200px] mx-auto mb-20 mt-10">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[80px] left-[5%] right-[5%] h-[4px] bg-[#FFB773] z-0"></div>

          <div className="flex items-start justify-between flex-wrap gap-y-10 relative z-10">
            {[
              { icon: Globe, label: "External Exposure", sub: "(Open RDP)" },
              { icon: Lock, label: "Initial Access", sub: "(Brute Force)" },
              { icon: TrendingUp, label: "Privilege Escalation", sub: "(Credential Theft)" },
              { icon: Network, label: "Lateral Movement", sub: "(RDP/SMB)" },
              { icon: Database, label: "Data Access", sub: "(File Server)" },
              { icon: AlertTriangle, label: "Impact", sub: "(Ransomware)" },
            ].map((node, i) => (
              <div key={i} className="flex flex-col items-center w-[45%] md:flex-1 md:w-auto relative group">
                <div className="h-[40px] flex items-end mb-6 relative z-10">
                  <div className="px-2 group-hover:-translate-y-2 transition-transform duration-300">
                    <node.icon className="w-9 h-9 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                {/* Dot on line with visual gap mask */}
                <div className="hidden md:flex items-center justify-center w-[36px] h-[36px] rounded-full mb-6 relative z-10 group-hover:scale-125 transition-transform duration-300">
                  <div
                    className="w-[18px] h-[18px] rounded-full shadow-[0_0_15px_rgba(202,28,105,0.6)]"
                    style={{ background: "linear-gradient(270.09deg, #F37A3A 16.02%, #CA1C69 91.5%)" }}
                  ></div>
                </div>
                <div className="text-center px-2">
                  <div className="text-[14px] md:text-[15px] font-bold text-white mb-1">{node.label}</div>
                  <div className="text-[12px] md:text-[13px] text-white font-medium">{node.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-10">
          <h3 className="text-[28px] md:text-[36px] font-bold text-white">
            How CTEM Breaks the Chain!
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {[
            "Eliminates unnecessary external exposure",
            "Validates credentials and access risks",
            "Stops privilege escalation opportunities",
            "Detects lateral movement paths",
            "Protects sensitive data access",
            "Validates controls and reduces impact"
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-[16px] p-[1px]"
              style={{ background: "linear-gradient(180deg, #FF9A3C 0%, #CA1C69 100%)" }}
            >
              <div
                className="rounded-[16px] p-5 md:py-6 md:px-6 flex items-center gap-4 h-full w-full backdrop-blur-[2px]"
                style={{ background: "linear-gradient(142.13deg, rgba(255, 255, 255, 0.168) 1.8%, rgba(255, 255, 255, 0) 99.75%), #24133A" }}
              >
                <div className="flex-shrink-0">
                  <CustomCheckMark className="w-7 h-7 text-white" />
                </div>
                <span className="text-[14px] lg:text-[15px] xl:text-[15px] text-white font-medium">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTEMAttackPath;
