"use client";

import React, { useState, KeyboardEvent } from "react";
import { Input } from "./input";
import { X } from "lucide-react";

interface TagInputProps {
  name: string;
  defaultValue?: string;
  placeholder?: string;
}

export function TagInput({ name, defaultValue = "", placeholder = "Add a tag..." }: TagInputProps) {
  const [tags, setTags] = useState<string[]>(
    defaultValue.split(",").map(t => t.trim()).filter(Boolean)
  );
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newTag = inputValue.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <div
            key={tag}
            className="flex items-center gap-1 bg-slate-100 text-slate-800 px-2 py-1 rounded-md text-xs font-medium dark:bg-slate-800 dark:text-slate-200"
          >
            <span>{tag}</span>
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>
      <Input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="h-9 text-sm"
        onBlur={() => {
          const newTag = inputValue.trim();
          if (newTag && !tags.includes(newTag)) {
            setTags([...tags, newTag]);
          }
          setInputValue("");
        }}
      />
      <input type="hidden" name={name} value={tags.join(", ")} />
    </div>
  );
}
