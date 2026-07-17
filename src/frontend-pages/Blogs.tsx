"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import blogsHero from "@/assets/Blogs/Blogbg.webp";
import { ChevronLeft, ChevronRight, Search, ChevronDown, X, CloudOff, SearchX } from "lucide-react";
import Link from "next/link";;
import { usePosts } from "@/hooks/usePosts";
import { useTags } from "@/hooks/useTags";
import { useDebounce } from "@/hooks/useDebounce";
import SmartImage from "@/components/ui/SmartImage";

const POSTS_PER_PAGE = 6;

// Code-level toggle for mock data testing
const USE_MOCK_DATA = false;

const PostTags = ({ tags }: { tags: { slug: string; name: string }[] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (!tags || tags.length === 0) return null;

  const INITIAL_TAGS_COUNT = 2;
  const hasMore = tags.length > INITIAL_TAGS_COUNT;

  return (
    <div 
      className={`flex flex-wrap gap-2 mb-3 pb-1 ${
        isExpanded ? 'max-h-[64px] overflow-y-auto' : ''
      }`}
      style={isExpanded ? {
        scrollbarWidth: 'thin',
        scrollbarColor: '#F9D6E4 transparent'
      } : {}}
    >
      {(isExpanded ? tags : tags.slice(0, INITIAL_TAGS_COUNT)).map((tag) => (
        <span
          key={tag.slug}
          className="whitespace-nowrap text-xs font-medium px-2.5 py-0.5 bg-[#FDF0F5] text-[#C01E6C] rounded-full border border-[#F9D6E4]"
        >
          {tag.name}
        </span>
      ))}
      {!isExpanded && hasMore && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsExpanded(true);
          }}
          className="whitespace-nowrap text-xs font-medium px-2.5 py-0.5 text-[#C01E6C] hover:bg-[#FDF0F5] rounded-full transition-colors cursor-pointer"
        >
          +{tags.length - INITIAL_TAGS_COUNT} view more
        </button>
      )}
    </div>
  );
};

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const { data: tagsData } = useTags();

  const { data, isLoading, isError, error } = usePosts({
    page: currentPage,
    limit: POSTS_PER_PAGE,
    q: debouncedSearchQuery,
    tag: selectedCategory || undefined,
    mock: USE_MOCK_DATA,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalPages = data?.pagination.pages || 1;
  const filteredPosts = data?.posts || [];
  const showingEnd = Math.min(currentPage * POSTS_PER_PAGE, data?.pagination.total || 0);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Unknown Date";
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <PageHero
        image={blogsHero}
        titlePart1="Building a"
        titlePart2="Cyber-Secure"
        titlePart3="Workplace"
        description="Upgrade Your Security Skills with latest blogs."
        showStats={true}
      />

      {/* Search and Filter Sticky Wrapper */}
      <div
        className="px-6 lg:px-20 py-2 sticky z-40 bg-white backdrop-blur-sm mb-2 md:mb-4 transition-all duration-500 ease-in-out"
        style={{ top: isNavVisible ? '74px' : '0px' }}
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden w-full">

            {/* Category Dropdown */}
            <div className="relative flex items-center border-b sm:border-b-0 sm:border-r border-gray-200 bg-gray-50/50 sm:min-w-[180px] shrink-0">
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full h-full bg-transparent appearance-none py-3 pl-4 pr-10 text-[14px] text-[#461148] outline-none font-medium cursor-pointer"
              >
                <option value="">All Categories</option>
                {tagsData?.tags?.map(tag => (
                  <option key={tag.id} value={tag.slug}>{tag.name}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-[#C01E6C] absolute right-4 pointer-events-none" />
            </div>

            {/* Search Input */}
            <div className="flex-1 flex items-center px-4 py-3 sm:py-3 bg-white">
              <Search className="w-[18px] h-[18px] text-[#C01E6C] mr-3 flex-shrink-0" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-transparent border-none outline-none text-[#333] placeholder:text-[#4F4F4F] text-[15px]"
              />

              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setCurrentPage(1);
                  }}
                  className="p-1 hover:bg-gray-100 rounded-full text-gray-400 hover:text-[#C01E6C] transition-colors ml-2"
                >
                  <X className="w-[16px] h-[16px]" strokeWidth={2} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto py-2 md:py-4 max-w-[1100px]">

        {isLoading ? (
          // Skeleton Loader
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 px-4 lg:px-0">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-[24px] border border-gray-200 overflow-hidden flex flex-col h-[380px] animate-pulse">
                <div className="w-full h-[140px] bg-gray-200" />
                <div className="p-4 flex flex-col flex-1">
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-4" />
                  <div className="h-5 bg-gray-200 rounded w-1/2 mb-4" />
                  <div className="space-y-2 mb-4">
                    <div className="h-3 bg-gray-200 rounded" />
                    <div className="h-3 bg-gray-200 rounded" />
                    <div className="h-3 bg-gray-200 rounded w-5/6" />
                  </div>
                  <div className="mt-auto flex justify-between">
                    <div className="h-4 bg-gray-200 rounded w-1/3" />
                    <div className="h-4 bg-gray-200 rounded w-1/4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : isError ? (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-gray-50/50 rounded-2xl border border-gray-100 mx-4 lg:mx-0 mb-8">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
              <CloudOff className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-[#461148] mb-2">Unable to load blogs</h3>
            <p className="text-gray-500 text-[15px] max-w-md mx-auto mb-6">
              We're having trouble connecting to the server. Please check your internet connection or try again in a moment.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-white border border-gray-200 text-[#C01E6C] font-medium rounded-lg hover:bg-[#FDF0F5] hover:border-[#FDF0F5] transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : filteredPosts.length > 0 ? (
          <>
            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 px-4 lg:px-0">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-[24px] border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 h-full"
                >
                  {/* Image */}
                  <div className="w-full h-[150px] relative">
                    <SmartImage
                      src={post.thumbnailImage || post.coverImage}
                      fallbackSrc={`https://placehold.co/800x250/FDF0F5/C01E6C?text=${encodeURIComponent(post.title.substring(0, 20))}...`}
                      alt={post.title}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1">
                    {/* Tags */}
                    <PostTags tags={post.tags} />

                    <Link href={`/blog/${post.slug}`} className="group-hover:text-[#C01E6C] transition-colors">
                      <h3 className="font-semibold text-lg leading-[1.4] text-[#461148] mb-4 group-hover:text-[#C01E6C]">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-[#828282] text-sm leading-[1.6] mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto">
                      <div className="flex items-center mb-4">
                        <span className="text-[#333333] font-semibold text-base">{post.author?.name || "Admin"}</span>
                        <div className="flex-1 h-[1px] bg-gray-200 mx-4" />
                        <span className="text-gray-400 text-sm font-semibold whitespace-nowrap">{formatDate(post.publishedAt)}</span>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-[#C01E6C] font-semibold text-sm hover:opacity-80 transition-opacity"
                      >
                        View Post <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination Element */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-4 px-4 lg:px-0">
              <span className="text-[#4F4F4F] text-sm mb-4 md:mb-0">
                Showing {showingEnd} of {data?.pagination.total || 0} Blogs
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-[6px] flex items-center justify-center border border-gray-200 text-[#4F4F4F] hover:bg-gray-50 disabled:text-[#D1D5DB] disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-[20px] h-[20px]" strokeWidth={1.5} />
                </button>

                {[...Array(Math.max(1, totalPages))].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    disabled={totalPages <= 1}
                    className={`w-10 h-10 flex items-center justify-center text-[15px] font-medium transition-colors ${currentPage === i + 1 && totalPages > 1
                        ? "bg-[#FDF0F5] text-[#C01E6C] rounded-full"
                        : totalPages <= 1
                          ? "text-[#D1D5DB] cursor-not-allowed"
                          : "text-[#4F4F4F] hover:text-[#C01E6C]"
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.max(1, totalPages)))}
                  disabled={currentPage === totalPages || totalPages <= 1}
                  className="w-10 h-10 rounded-[6px] flex items-center justify-center border border-gray-200 text-[#4F4F4F] hover:bg-gray-50 disabled:text-[#D1D5DB] disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-[20px] h-[20px]" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </>
        ) : !isLoading ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-10 px-4 text-center bg-gray-50/50 rounded-2xl border border-gray-100 mx-4 lg:mx-0"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
              <SearchX className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-[#461148] mb-2">No matching blogs found</h3>
            <p className="text-gray-500 text-[15px] max-w-md mx-auto mb-6">
              We couldn't find any blogs matching your current search or category filters. Try adjusting them to see more results.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("");
                setCurrentPage(1);
              }}
              className="px-6 py-2.5 bg-white border border-gray-200 text-[#C01E6C] font-medium rounded-lg hover:bg-[#FDF0F5] hover:border-[#FDF0F5] transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        ) : null}
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;
