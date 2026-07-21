"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Share2, ArrowLeft, Link as LinkIcon, Home } from "lucide-react";
const XLogo = ({ className }: { className?: string }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>);
const Linkedin = ({ className }: { className?: string }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>);
const Github = ({ className }: { className?: string }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>);
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePost, usePosts } from "@/hooks/usePosts";
import MarkdownPreview from "@uiw/react-markdown-preview";

import SmartImage from "@/components/ui/SmartImage";
import SEOUpdater from "@/components/SEOUpdater";
import TableOfContents from "@/components/TableOfContents";
import Comments from "@/components/Comments";

import defaultImg from "@/assets/Blogs/Frame 2147226754.webp";
import aiHackImg from "@/assets/services/ai-security.svg";

const BlogDetail = () => {
  const { slug } = useParams();

  const { data, isLoading, isError } = usePost(slug as string);
  const post = data?.post;

  const { data: tagPostsData, isLoading: isTagLoading } = usePosts({
    limit: 6,
    tag: post?.tags?.[0]?.slug
  });

  const { data: genericPostsData, isLoading: isGenericLoading } = usePosts({
    limit: 6,
  });

  const rawTagPosts = tagPostsData?.posts || [];
  const rawGenericPosts = genericPostsData?.posts || [];

  let filteredRelated = rawTagPosts.filter(p => p?.slug !== slug);

  if (filteredRelated.length === 0 && rawGenericPosts.length > 0) {
    filteredRelated = rawGenericPosts.filter(p => p?.slug !== slug);
  }

  const isRelatedLoading = isTagLoading || (rawTagPosts.length <= 1 && isGenericLoading);
  const hasRelatedPosts = filteredRelated.length > 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return "Unknown Date";
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getValidUrl = (url?: string | null) => {
    if (!url) return null;
    const t = url.trim();
    if (t === "" || t === "#" || t.toLowerCase() === "null" || t.toLowerCase() === "n/a" || t === "-" || t === "http://" || t === "https://") return null;
    if (t.length < 4) return null;
    return t.startsWith("http") ? t : `https://${t}`;
  };

  const validTwitter = getValidUrl(post?.author?.twitter);
  const validLinkedin = getValidUrl(post?.author?.linkedin);
  const validGithub = getValidUrl(post?.author?.github);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const shareOnX = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post?.title || "");
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  const getReadingTime = (content?: string) => {
    if (!content) return "1 min read";
    const words = content.trim().split(/\s+/).length;
    const time = Math.ceil(words / 200);
    return `${time} min read`;
  };

  const RelatedBlogsList = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
      className="bg-[#F8F9FB] rounded-3xl p-3 border border-gray-100 shadow-sm"
    >
      <h3 className="text-lg font-bold text-[#461148] mb-2">Related Blogs</h3>

      {isRelatedLoading ? (
        <div className="space-y-4 animate-pulse">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex flex-col border-b border-gray-200/60 pb-4">
              <div className="h-4 bg-gray-200 rounded w-full mb-2" />
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
              <div className="h-3 bg-gray-200 rounded w-20" />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filteredRelated.slice(0, 5).map((p) => (
            <a
              href={`/blog/${p.slug}`}
              key={p.id}
              className="flex flex-col gap-3 border-b border-gray-200/60 pb-3 last:border-0 last:pb-0 group cursor-pointer"
            >
              <div className="w-full shrink-0 rounded-[12px] overflow-hidden relative border border-gray-100">
                <SmartImage
                  src={p.thumbnailImage || p.coverImage}
                  fallbackSrc={defaultImg}
                  alt={p.title}
                  className="w-full h-[100px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col flex-1 w-full">
                <h4 className="text-[15px] font-semibold text-[#461148] mb-2 leading-[1.4] group-hover:text-[#C01E6C] transition-colors">
                  {p.title}
                </h4>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[12px] text-gray-500 font-medium">{formatDate(p.publishedAt)}</span>
                  <span className="text-[12px] font-semibold text-[#C01E6C] group-hover:opacity-80 inline-flex items-center">
                    Read <ChevronRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar alwaysSolid={true} />

      {post && (
        <SEOUpdater
          title={`${post.title} | Cybertronium`}
          description={post.excerpt || `Read ${post.title} on Cybertronium.`}
          image={post.coverImage || undefined}
          type="article"
          schema={{
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "image": post.coverImage ? [post.coverImage] : [],
            "datePublished": post.publishedAt,
            "author": [{
              "@type": "Person",
              "name": post.author?.name || "Cybertronium"
            }]
          }}
        />
      )}

      <main className="container mx-auto px-2 lg:px-10 pt-28 pb-10 max-w-[1200px]">

        {isLoading ? (
          // Skeleton for Detail Page
          <div className="flex flex-col lg:flex-row gap-12 animate-pulse">
            <div className="lg:w-[68%]">
              <div className="h-12 bg-gray-200 rounded w-3/4 mb-4" />
              <div className="flex items-center justify-between border-y border-gray-100 py-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-24" />
                    <div className="h-3 bg-gray-200 rounded w-16" />
                  </div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-32" />
              </div>
              <div className="h-64 md:h-[400px] bg-gray-200 rounded-[16px] mb-10" />
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
              </div>
            </div>
            <div className="lg:w-[32%]">
              <div className="rounded-[16px] p-6 h-[500px] bg-gray-100" />
            </div>
          </div>
        ) : isError || !post ? (
          // Error state
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-[#461148] mb-4">Post Not Found</h2>
            <p className="text-gray-500 mb-8">The blog post you are looking for does not exist or has been removed.</p>
            <Link href="/blogs" className="inline-flex items-center bg-gradient-cta text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blogs
            </Link>
          </div>
        ) : (
          <>
            {/* 3-Column Layout */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center">

              {/* Left Column: Table of Contents (Desktop) */}
              <div className="hidden lg:block lg:w-[20%] shrink-0">
                <div className="sticky top-[100px] max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-hide">
                  <TableOfContents content={post.content} />
                </div>
              </div>

              {/* Center Column: Main Content */}
              <div className="w-full lg:w-[55%] xl:w-[60%] shrink-0">

                {/* Mobile ToC */}
                <div className="lg:hidden mb-8">
                  <TableOfContents content={post.content} />
                </div>

                {/* Breadcrumbs */}
                <nav className="flex items-center text-sm text-gray-500 mb-4 font-medium">
                  <Link href="/" className="hover:text-[#C01E6C] transition-colors"><Home className="w-4 h-4" /></Link>
                  <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                  <Link href="/blogs" className="hover:text-[#C01E6C] transition-colors">Blogs</Link>
                  <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                  <span className="text-[#333333] truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
                </nav>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="text-[32px] md:text-[40px] leading-[1.2] font-bold bg-gradient-to-r from-[#E21F55] to-[#F15A24] text-transparent bg-clip-text mb-4"
                >
                  {post.title}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                  className="mb-6"
                >
                  {/* Author Info Card */}
                  <div className="flex items-center gap-4 bg-[#F8F9FB] p-4 sm:p-3 rounded-[20px] border border-gray-100 mb-3">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white shrink-0 shadow-sm">
                      <SmartImage
                        src={post.author?.image}
                        fallbackSrc="https://i.pravatar.cc/150?img=11"
                        alt={post.author?.name || "Author"}
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-[16px] sm:text-[18px] font-bold text-[#461148] leading-tight mb-1">{post.author?.name || "Admin"}</span>
                      <span className="text-[13px] sm:text-[14px] text-[#828282]">{post.author?.bio || "Cybersecurity Expert"}</span>

                      {(validTwitter || validLinkedin || validGithub) && (
                        <div className="flex items-center gap-3 mt-2">
                          {validTwitter && (
                            <a href={validTwitter} target="_blank" rel="noopener noreferrer" className="text-[#828282] hover:text-[#1DA1F2] transition-colors" title="X">
                              <XLogo className="w-4 h-4" />
                            </a>
                          )}
                          {validLinkedin && (
                            <a href={validLinkedin} target="_blank" rel="noopener noreferrer" className="text-[#828282] hover:text-[#0077b5] transition-colors" title="LinkedIn">
                              <Linkedin className="w-4 h-4" />
                            </a>
                          )}
                          {validGithub && (
                            <a href={validGithub} target="_blank" rel="noopener noreferrer" className="text-[#828282] hover:text-[#333] transition-colors" title="GitHub">
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Meta & Actions Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 mb-3">
                    <div className="flex items-center gap-2 text-[14px] font-medium text-[#828282]">
                      <span className="text-[13px] sm:text-[14px] px-1 text-[#828282]">
                        Published on &nbsp; <span className="text-[#333333] font-semibold">{formatDate(post.publishedAt)}</span>
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="text-[13px] sm:text-[14px] text-[#828282]">
                        {getReadingTime(post.content)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {validLinkedin && (
                        <button onClick={shareOnLinkedIn} className="text-[#828282] hover:text-[#0077b5] transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </button>
                      )}
                      {validTwitter && (
                        <button onClick={shareOnX} className="text-[#828282] hover:text-[#1DA1F2] transition-colors">
                          <XLogo className="w-5 h-5" />
                        </button>
                      )}
                      <button onClick={handleShare} className="text-[#828282] hover:text-[#C01E6C] transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Tags Row */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex items-center gap-3">
                      <span className="text-[13px] font-semibold text-[#828282]">Tags:</span>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                          <span key={tag.slug} className="px-3 py-0.5 bg-gray-100 border border-gray-200 text-[#4F4F4F] hover:bg-[#FDF0F5] hover:border-[#F9D6E4] hover:text-[#C01E6C] transition-colors text-[12px] font-medium rounded-full cursor-default">
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <hr className="my-8 border-gray-100" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  {post.excerpt && (
                    <p className="text-[#4F4F4F] text-base leading-[1.8] mb-8 font-normal">
                      {post.excerpt}
                    </p>
                  )}

                  {post.coverImage && (
                    <SmartImage
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-auto md:h-[400px] rounded-[16px] mb-10 shadow-sm border border-gray-100"
                    />
                  )}

                  {/* Markdown Content Renderer */}
                  <div className="prose prose-lg max-w-none text-[#4F4F4F] prose-headings:text-[#333333] prose-a:text-[#C01E6C] prose-img:w-full prose-img:h-auto prose-img:rounded-[16px] prose-img:shadow-sm prose-img:my-10 prose-img:border prose-img:border-gray-100 [&_a.anchor]:!hidden [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-6 [&_ol]:pl-6 [&_li]:ml-2 [&_li]:mb-2 [&_ul]:my-4 [&_ol]:my-4 [&_li>p]:my-1 [&_ul_li::marker]:text-[#C01E6C] [&_ol_li::marker]:text-[#C01E6C] [&_ol_li::marker]:font-semibold [&_ul>li]:pl-1 [&_ol>li]:pl-1">
                    <MarkdownPreview
                      source={post.content}
                      style={{ backgroundColor: 'transparent', color: '#4F4F4F', fontSize: '16px', fontWeight: 400, lineHeight: 1.8 }}
                      wrapperElement={{
                        "data-color-mode": "light"
                      }}
                    />
                  </div>
                  {/* Mobile Related Blogs */}
                  {hasRelatedPosts && (
                    <div className="lg:hidden mt-16 mb-8">
                      <RelatedBlogsList />
                    </div>
                  )}

                  {/* Comments Section */}
                  <Comments postSlug={post.slug} initialComments={(post as any).comments} />

                </motion.div>
              </div>

              {/* Right Column: Related Blogs (Desktop) */}
              {hasRelatedPosts && (
                <div className="hidden lg:block lg:w-[20%] shrink-0">
                  <div className="sticky top-[100px] max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-hide">
                    <RelatedBlogsList />
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
