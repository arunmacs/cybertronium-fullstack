"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function PostFilters({ tags }: { tags: { id: string; name: string; slug: string }[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentSearch = searchParams.get("q") || "";
  const currentTag = searchParams.get("tag") || "";

  const [search, setSearch] = useState(currentSearch);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      params.delete("page"); // Reset page when filtering
      return params.toString();
    },
    [searchParams]
  );

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search !== currentSearch) {
        startTransition(() => {
          router.push(`/cms-admin/dashboard/posts?${createQueryString("q", search)}`);
        });
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [search, currentSearch, router, createQueryString]);

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center w-full">
      <div className="relative flex-1 w-full">
        <Search className="absolute left-3 top-2 h-4 w-4 text-slate-500" />
        <Input
          type="text"
          placeholder="Search posts..."
          className="pl-10 py-2 bg-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="w-full sm:w-48">
        <select
          className="flex h-8 w-full rounded-md border border-slate-200 bg-white px-3 py-1 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
          value={currentTag}
          onChange={(e) => {
            startTransition(() => {
              router.push(`/cms-admin/dashboard/posts?${createQueryString("tag", e.target.value)}`);
            });
          }}
        >
          <option value="">All Categories</option>
          {tags.map((t) => (
            <option key={t.id} value={t.slug}>
              {t.name}
            </option>
          ))}
        </select>
      </div>

      {isPending && <span className="text-xs text-slate-500">Updating...</span>}
    </div>
  );
}
