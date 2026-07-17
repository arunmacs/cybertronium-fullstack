"use client";
import React from "react";
import AgenticLibImg from "@assets/services/agentic-lib-img.webp"

import Phishing from "@assets/services/pishing.svg?react"
import Alert from "@assets/services/Database.svg?react"
import Shield from "@assets/services/Shield.svg?react"
import UserCheck from "@assets/services/User check.svg?react"
import Bell from "@assets/services/Bell.svg?react"
import AlertOctagon from "@assets/services/Alert octagon.svg?react"
import Circlecheck from "@assets/services/Check circle.svg?react"
import UserPlus from "@assets/services/User plus.svg?react"
import Volume from "@assets/services/Volume 2.svg?react"
import Crosshair from "@assets/services/Crosshair.svg?react"

interface AgentCard {
  icon: string;
  title: string;
  description: string;
}

interface SocAgentLibraryProps {
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  agents: AgentCard[];
}

const agentIconMap: Record<string, React.ReactNode> = {
  phishing: <Phishing className="w-8 h-8" />,
  alertTriage: <Alert className="w-8 h-8" />,
  fraud: <UserCheck className="w-8 h-8" />,
  threatIntel: <Bell className="w-8 h-8" />,
  vulnerability: <AlertOctagon className="w-8 h-8" />,
  insiderRisk: <Circlecheck className="w-8 h-8" />,
  cyberAdvisory: <Shield className="w-8 h-8" />,
  agentCreation: <UserPlus className="w-8 h-8" />,
  incidentResponse: <Volume className="w-8 h-8" />,
  socManager: <Crosshair className="w-8 h-8" />,
};

/* Gradient-border card wrapper — full gradient border */
const GradientBottomCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`relative rounded-xl bg-white ${className}`}>
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        padding: "1px",
        background: "linear-gradient(135deg, #F37A3A 0%, #CA1C69 100%)",
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        borderRadius: "inherit",
      }}
    />
    <div className="relative z-10 h-full">{children}</div>
  </div>
);

const SocAgentLibrary: React.FC<SocAgentLibraryProps> = ({
  subtitle,
  titleLine1,
  titleLine2,
  description,
  agents,
}) => {
  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header — left text + right image placeholder */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-14">
          <div className="md:w-1/2">
            <div className="w-16 h-0.5 bg-orange-400/50 mb-3 rounded-full"></div>
            <p className="text-primary !text-fluid-sm font-semibold tracking-wide mb-2">
              {subtitle}
            </p>
            <h2 className="!text-fluid-4xl font-bold text-[#2D0A31] leading-tight mb-2">
              {titleLine1}
            </h2>
            <h2 className="!text-fluid-4xl font-bold text-gradient-primary leading-tight mb-4">
              {titleLine2}
            </h2>
            <p className="text-gray-500 !text-fluid-sm leading-relaxed max-w-lg">
              {description}
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            {/* Image placeholder */}
            <img src={AgenticLibImg} alt="Agentic Library" />
          </div>
        </div>

        {/* Agent Cards Grid — row 1: 3, row 2: 3, row 3: 2 centered, row 4: 2 centered */}
        <div className="space-y-6">
          {/* Row 1: first 3 agents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agents.slice(0, 3).map((agent, idx) => (
              <AgentCardItem key={idx} agent={agent} />
            ))}
          </div>
          {/* Row 2: next 3 agents */}
          {agents.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {agents.slice(3, 6).map((agent, idx) => (
                <AgentCardItem key={idx + 3} agent={agent} />
              ))}
            </div>
          )}
          {/* Row 3: next 2 agents centered */}
          {agents.length > 6 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {agents.slice(6, 8).map((agent, idx) => (
                <AgentCardItem key={idx + 6} agent={agent} />
              ))}
            </div>
          )}
          {/* Row 4: next 2 agents centered */}
          {agents.length > 8 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {agents.slice(8, 10).map((agent, idx) => (
                <AgentCardItem key={idx + 8} agent={agent} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const AgentCardItem: React.FC<{ agent: AgentCard }> = ({ agent }) => (
  <GradientBottomCard className="p-2 md:p-4 text-center">
    <div className="flex justify-center mb-4">
      {agentIconMap[agent.icon] || (
        <div className="w-8 h-8 rounded border border-dashed border-gray-300 flex items-center justify-center text-[8px] text-gray-400">
          Icon
        </div>
      )}
    </div>
    <h3 className="!text-fluid-base font-bold text-[#2D0A31] mb-2">
      {agent.title}
    </h3>
    <p className="text-gray-500 !text-fluid-xs leading-relaxed">
      {agent.description}
    </p>
  </GradientBottomCard>
);

export default SocAgentLibrary;
