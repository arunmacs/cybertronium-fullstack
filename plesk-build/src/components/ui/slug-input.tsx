"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";

interface SlugInputProps {
  initialValue?: string;
  sourceId: string; // The ID of the input to generate slug from (e.g. 'title')
}

export function SlugInput({ initialValue = "", sourceId }: SlugInputProps) {
  const [slug, setSlug] = useState(initialValue);
  const [isPristine, setIsPristine] = useState(!initialValue);

  // Auto-generate when the source input loses focus (blur) if the user hasn't manually edited the slug yet.
  useEffect(() => {
    const sourceEl = document.getElementById(sourceId) as HTMLInputElement;
    if (!sourceEl) return;

    const handleBlur = () => {
      if (isPristine && sourceEl.value) {
        const generated = sourceEl.value
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "");
        setSlug(generated);
      }
    };

    sourceEl.addEventListener("blur", handleBlur);
    return () => sourceEl.removeEventListener("blur", handleBlur);
  }, [sourceId, isPristine]);

  const generateSlug = () => {
    const sourceEl = document.getElementById(sourceId) as HTMLInputElement;
    if (sourceEl && sourceEl.value) {
      const generated = sourceEl.value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setSlug(generated);
      setIsPristine(false);
    }
  };

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <Label htmlFor="slug" className="text-xs">
          Slug <span className="text-slate-400">(unique URL identifier)</span>
        </Label>
      </div>
      <div className="flex items-center gap-1">
        <Input 
          id="slug" 
          name="slug" 
          placeholder="my-awesome-post" 
          className="h-9 text-sm font-mono" 
          value={slug}
          onChange={(e) => {
            setSlug(e.target.value);
            setIsPristine(false);
          }}
        />
        <Button 
          type="button"
          variant="secondary" 
          size="sm" 
          className="h-9 px-2 shrink-0"
          onClick={generateSlug}
          title="Generate from Title"
        >
          <Wand2 className="w-4 h-4 mr-1.5" />
          Generate
        </Button>
      </div>
    </div>
  );
}
