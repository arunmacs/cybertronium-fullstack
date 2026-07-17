import { useQuery } from "@tanstack/react-query";
import { API_BASE_URL } from "../config/api";

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export const fetchTags = async (): Promise<{ tags: Tag[] }> => {
  const response = await fetch(`${API_BASE_URL}/api/v1/tags`);
  if (!response.ok) {
    throw new Error("Failed to fetch tags");
  }
  return response.json();
};

export const useTags = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: 1,
  });
};
