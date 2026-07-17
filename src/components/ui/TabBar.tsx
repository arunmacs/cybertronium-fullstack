"use client";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string | number;
  label: string;
}

interface TabBarProps {
  tabs: TabItem[];
  activeTab: string | number;
  onTabChange: (id: string | number) => void;
  className?: string; // Additional classes for the sticky container
  navbarVisible?: boolean; // Controls sticky top offset
}

export const TabBar = ({
  tabs,
  activeTab,
  onTabChange,
  className,
  navbarVisible = true,
}: TabBarProps) => {
  return (
    <div
      className={cn(
        "sticky z-40 flex md:justify-center mb-4 md:mb-6 overflow-x-auto scrollbar-hide -mx-4 px-4 bg-[#F8F8F8]/95 backdrop-blur-sm pb-3 pt-3 transition-all duration-500 ease-in-out",
        className
      )}
      style={{ top: navbarVisible ? '72px' : '0px' }}
    >
      <div className="inline-flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-full shadow-sm flex-shrink-0">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "px-4 py-2.5 md:px-6 md:py-2.5 rounded-full text-[clamp(12px,1vw+0.2rem,14px)] font-bold transition-all flex-shrink-0",
                isActive
                  ? "bg-gradient-cta text-white shadow-md"
                  : "text-gray-500 hover:text-[#4D124E]"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
