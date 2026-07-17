"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Checkmark from "@assets/CTEM/check-mark.svg?react";
import { cn } from "@/lib/utils";

interface ScopeItemContent {
  title: string;
  text: string;
}

interface ScopeItem {
  title: string;
  content: string | ScopeItemContent[];
}

interface ScopeGroup {
  groupTitle: string;
  items: ScopeItem[];
}

interface ServiceScopeProps {
  titlePart1: string;
  titlePart2: string;
  subtitle: string;
  description?: string;
  items?: ScopeItem[];
  groups?: ScopeGroup[];
  useGradientTitle?: boolean;
  title1ClassName?: string;
  title2ClassName?: string;
}

const renderContent = (content: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = content.split(urlRegex);
  return parts.map((part, idx) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={idx}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline cursor-pointer"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

const ServiceScope: React.FC<ServiceScopeProps> = ({
  titlePart1,
  titlePart2,
  subtitle,
  description,
  items,
  groups,
  useGradientTitle,
  title1ClassName,
  title2ClassName
}) => {
  // Open the first item by default, you can configure this as needed.
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    "0-0": false,
    "0": false,
  });

  const toggleItem = (key: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderAccordionItem = (item: ScopeItem, key: string) => {
    const isOpen = !!expandedItems[key];

    return (
      <div
        key={key}
        className="border border-[#C01E6C]/60 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md mb-4 bg-white"
      >
        <button
          onClick={() => toggleItem(key)}
          className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
        >
          <span className="text-fluid-lg font-bold text-[#3B194E] pr-8">
            {item.title}
          </span>
          <div className="flex-shrink-0 text-[#2D0A31]">
            {isOpen ? (
              <Minus className="w-5 h-5" strokeWidth={2.5} />
            ) : (
              <Plus className="w-5 h-5" strokeWidth={2.5} />
            )}
          </div>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="px-6 pb-6 pt-0 bg-white">
            {typeof item.content === "string" ? (
              <p className="text-gray-500 text-fluid-sm leading-relaxed font-medium whitespace-pre-wrap">
                {renderContent(item.content)}
              </p>
            ) : (
              <ul className="space-y-4">
                {item.content.map((listItem, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4 text-primary">
                      <Checkmark className="w-[18px] h-[18px]" />
                    </div>
                    <div className="text-fluid-sm leading-relaxed font-medium text-gray-500">
                      <span className="text-gray-700 font-bold mr-1">{listItem.title}:</span>
                      {listItem.text}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-10 bg-white ">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-10">
          {useGradientTitle ? (
            <h2
              className="text-fluid-4xl font-bold mb-3 bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(270.09deg, #F37A3A 16.02%, #CA1C69 91.5%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {titlePart1} {titlePart2}
            </h2>
          ) : (
            <h2 className={cn("!text-fluid-5xl font-bold text-[#2D0A31] mb-3", title1ClassName)}>
              {titlePart1} <span className={cn("text-[#F37A3A]", title2ClassName)}>{titlePart2}</span>
            </h2>
          )}
          <p className="text-primary text-fluid-sm font-semibold mb-4 tracking-wide">
            {subtitle}
          </p>
          {description && (
            <p className="text-gray-500 text-fluid-sm max-w-7xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Flat Accordion List */}
        {items && items.length > 0 && (
          <div className="space-y-4">
            {items.map((item, idx) => renderAccordionItem(item, idx.toString()))}
          </div>
        )}

        {/* Grouped Accordion List */}
        {groups && groups.length > 0 && (
          <div className="space-y-12">
            {groups.map((group, groupIdx) => (
              <div key={groupIdx}>
                <h3 className="text-primary text-fluid-xl font-bold text-center mb-6">
                  {group.groupTitle}
                </h3>
                <div className="space-y-4">
                  {group.items.map((item, itemIdx) =>
                    renderAccordionItem(item, `${groupIdx}-${itemIdx}`)
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceScope;
