import { useQuery } from "@tanstack/react-query";
import { API_BASE_URL } from "../config/api";

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  thumbnailImage: string | null;
  publishedAt: string | null;
  createdAt: string;
  author: {
    name: string;
    email: string;
    image: string | null;
    bio: string | null;
    website: string | null;
    twitter?: string | null;
    linkedin?: string | null;
    github?: string | null;
  } | null;
  tags: {
    name: string;
    slug: string;
  }[];
}

interface PostsResponse {
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
  posts: Post[];
}

export const fetchPosts = async (params: { page?: number; limit?: number; q?: string; tag?: string; mock?: boolean }): Promise<PostsResponse> => {
  const query = new URLSearchParams();
  if (params.page) query.append("page", params.page.toString());
  if (params.limit) query.append("limit", params.limit.toString());
  if (params.q) query.append("q", params.q);
  if (params.tag) query.append("tag", params.tag);
  if (params.mock) query.append("mock", "true");

  const queryString = query.toString() ? `?${query.toString()}` : "";
  const url = `${API_BASE_URL}/api/v1/posts${queryString}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

export const fetchPost = async (slug: string): Promise<{ post: Post }> => {
  const response = await fetch(`${API_BASE_URL}/api/v1/posts/${slug}`);
  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  return response.json();
};

export const usePosts = (params: { page?: number; limit?: number; q?: string; tag?: string; mock?: boolean }) => {
  return useQuery({
    queryKey: ["posts", params],
    queryFn: () => fetchPosts(params),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });
};

export const usePost = (slug: string) => {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!slug,
    retry: 1,
  });
};
