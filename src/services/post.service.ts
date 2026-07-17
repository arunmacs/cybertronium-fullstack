import { prisma } from "@/lib/prisma";

export interface GetPostsOptions {
  page?: number;
  limit?: number;
  q?: string;
  tag?: string;
  useMock?: boolean;
}

export class PostService {
  static async getPublicPosts(options: GetPostsOptions) {
    const { page = 1, limit = 10, q, tag, useMock = false } = options;
    const skip = (page - 1) * limit;

    const whereClause: any = { status: "PUBLISHED", deletedAt: null };
    
    if (q) {
      whereClause.OR = [
        { title: { contains: q } },
        { excerpt: { contains: q } },
        { content: { contains: q } },
      ];
    }
    
    if (tag) {
      whereClause.tags = { some: { slug: tag } };
    }

    // Mock data for pagination testing
    let filteredMock: any[] = [];
    if (useMock) {
      const mockPosts = Array.from({ length: 45 }).map((_, i) => ({
        id: `mock-id-${i + 1}`,
        title: `Mock Blog Post ${i + 1} for Pagination`,
        slug: `mock-blog-post-${i + 1}`,
        excerpt: `This is a mock excerpt for post ${i + 1} to test pagination behavior on the client side without database records.`,
        coverImage: null,
        thumbnailImage: null,
        publishedAt: new Date(Date.now() - i * 86400000).toISOString(),
        createdAt: new Date(Date.now() - i * 86400000).toISOString(),
        author: {
          name: "Test Admin",
          image: null,
          bio: null,
          website: null,
          twitter: null,
          linkedin: null,
          github: null,
        },
        tags: [{ name: "Mock", slug: "mock" }],
      }));

      filteredMock = mockPosts;
      if (q) {
        filteredMock = filteredMock.filter(p => 
          p.title.toLowerCase().includes(q.toLowerCase()) || 
          p.excerpt.toLowerCase().includes(q.toLowerCase())
        );
      }
      if (tag) {
        filteredMock = filteredMock.filter(p => p.tags.some((t: any) => t.slug === tag));
      }
    }

    const dbTotal = await prisma.post.count({ where: whereClause });
    const totalMock = filteredMock.length;
    const total = dbTotal + totalMock;

    let dbFetchSkip = skip;
    let dbFetchTake = limit;
    let mockFetchSkip = 0;
    let mockFetchTake = 0;

    if (skip < dbTotal) {
      dbFetchTake = Math.min(limit, dbTotal - skip);
      mockFetchSkip = 0;
      mockFetchTake = limit - dbFetchTake;
    } else {
      dbFetchTake = 0;
      mockFetchSkip = skip - dbTotal;
      mockFetchTake = limit;
    }

    const dbPosts = dbFetchTake > 0 ? await prisma.post.findMany({
      where: whereClause,
      orderBy: { publishedAt: "desc" },
      skip: dbFetchSkip,
      take: dbFetchTake,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        thumbnailImage: true,
        publishedAt: true,
        createdAt: true,
        author: {
          select: {
            name: true,
            image: true,
            bio: true,
            website: true,
            twitter: true,
            linkedin: true,
            github: true,
          },
        },
        tags: { 
          where: { deletedAt: null },
          select: { name: true, slug: true } 
        },
      },
    }) : [];

    const mockPostsToReturn = filteredMock.slice(mockFetchSkip, mockFetchSkip + mockFetchTake);
    const posts = [...dbPosts, ...mockPostsToReturn];

    return {
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
      posts,
    };
  }

  static async getPublicPostBySlug(slug: string) {
    return prisma.post.findFirst({
      where: { slug, status: "PUBLISHED", deletedAt: null },
      select: {
        id: true,
        title: true,
        slug: true,
        content: true,
        excerpt: true,
        coverImage: true,
        thumbnailImage: true,
        publishedAt: true,
        createdAt: true,
        author: {
          select: {
            name: true,
            // email removed for privacy
            image: true,
            bio: true,
            website: true,
            twitter: true,
            linkedin: true,
            github: true,
          },
        },
        tags: { 
          where: { deletedAt: null },
          select: { name: true, slug: true } 
        },
        comments: {
          where: { status: "APPROVED", deletedAt: null },
          orderBy: { createdAt: "desc" },
          select: {
            id: true,
            content: true,
            guestName: true,
            createdAt: true,
            author: {
              select: {
                name: true,
                image: true
              }
            }
          }
        }
      },
    });
  }
}
