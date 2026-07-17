"use client";

import { useState } from "react";

interface ExpandableTextProps {
  text: string;
  maxLength?: number;
  className?: string;
}

export function ExpandableText({ text, maxLength = 250, className = "" }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxLength) {
    return <div className={className}>{text}</div>;
  }

  return (
    <div title={!isExpanded ? text : undefined}>
      <div className={`${className} ${isExpanded ? 'max-h-[200px] overflow-y-auto pr-2' : ''}`}>
        {isExpanded ? text : `${text.slice(0, maxLength)}...`}
      </div>
      <button
        type="button"
        title={isExpanded ? "Collapse comment" : "Expand comment"}
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 mt-1 focus:outline-none transition-colors"
      >
        {isExpanded ? "See Less" : "See More"}
      </button>
    </div>
  );
}
