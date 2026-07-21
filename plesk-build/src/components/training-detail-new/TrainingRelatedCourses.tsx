"use client";
import { useState, useMemo, useEffect, useRef, memo } from "react";
import Link from "next/link";;
import { ChevronRight, ArrowRight } from "lucide-react";
import Certification from "@/assets/training/certification.svg?react";
import CertificationFeatured from "@/assets/training/certification-featured.svg?react";
import { cn } from "@/lib/utils";
import { TabBar } from "@/components/ui/TabBar";

export interface TrainingRelatedCoursesProps {
  featured?: {
    title: string;
    description: string;
    image: string;
    duration: string;
    link: string;
    target?: string;
  };
  categories?: string[];
  coursesByCategory?: Record<string, {
    title: string;
    description: string;
    image: string;
    link: string;
    target?: string;
  }[]>;
  courses?: {
    title: string;
    description: string;
    image: string;
    link: string;
    target?: string;
  }[];
}

const TrainingRelatedCourses = ({ featured, categories, coursesByCategory, courses }: TrainingRelatedCoursesProps) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const [navbarVisible, setNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine which courses to display based on active tab
  const displayedCourses = useMemo(() => {
    if (coursesByCategory && categories && categories.length > 0) {
      const activeCategoryName = categories[activeCategory];
      return coursesByCategory[activeCategoryName] || [];
    }
    // Fallback to flat courses array
    return courses || [];
  }, [coursesByCategory, categories, activeCategory, courses]);

  // Hide section entirely if nothing to show (no courses in any category and no flat courses)
  const hasAnyCourses = useMemo(() => {
    if (coursesByCategory) {
      return Object.values(coursesByCategory).some(c => c.length > 0);
    }
    return courses && courses.length > 0;
  }, [coursesByCategory, courses]);

  if (!hasAnyCourses && !featured) return null;

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto md:px-6 lg:px-20 max-w-[1200px]">
        <div className="text-center mb-16">
          <div className="w-12 h-0.5 bg-orange-400/50 mx-auto mb-3 rounded-full"></div>
          <div className="text-gradient-primary text-fluid-base font-semibold text-[#3B194E] tracking-widest uppercase mb-4">
            More Like This
          </div>
          <h2 className="text-fluid-4xl font-bold leading-tight text-gradient-primary mb-6">
            Related Courses
          </h2>
          <p className="text-fluid-base text-gray-500 max-w-3xl mx-auto leading-[1.6]">
            Expand your cybersecurity expertise with advanced training programs designed to strengthen offensive security, defensive operations, cloud security, and real-world threat management skills.
          </p>
        </div>

        {/* Featured Top Course */}
        {featured && (
          <div className="bg-white rounded-[16px] overflow-hidden border border-gray-100 shadow-sm flex flex-col md:flex-row mb-8">
            <div className="md:w-1/2 relative bg-gray-900">
              <img src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover min-h-[300px]"
                loading="lazy" decoding="async"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%230F172A"/><stop offset="100%" stop-color="%23CA1C69"/></linearGradient></defs><rect width="800" height="600" fill="url(%23g)"/></svg>';
                }}
              />
            </div>
            <div className="md:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
              <h3 className="text-fluid-2xl font-bold text-[#3B194E] mb-4 leading-tight">
                {featured.title}
              </h3>
              <p className="text-fluid-base text-gray-500 leading-[1.6] mb-8">
                {featured.description}
              </p>
              <div className="mb-8 pl-4 border-l-2 border-[#F37A3A]">
                <div className="text-fluid-sm text-gray-500 mb-1">Duration</div>
                <div className="text-fluid-3xl font-bold text-primary leading-none">{featured.duration}</div>
              </div>
              <Link href={featured.link} target={featured?.target || "_self"} className="text-primary text-fluid-base font-bold flex items-center hover:opacity-80 transition-opacity">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        )}

        {/* Category Tabs */}
        {categories && categories.length > 0 && (
          <TabBar
            tabs={categories.map((c, idx) => ({ id: idx, label: c }))}
            activeTab={activeCategory}
            onTabChange={(id) => setActiveCategory(id as number)}
            navbarVisible={navbarVisible}
            className="my-10 bg-white/95"
          />
        )}

        {/* Grid of Courses (filtered by category) */}
        {displayedCourses.length > 0 ? (
          <div className={cn("grid gap-6", displayedCourses.length === 1 && "grid-cols-1", displayedCourses.length === 2 && "grid-cols-1 md:grid-cols-2", displayedCourses.length >= 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3")}>
            {displayedCourses.map((course, idx) => (
              <Link
                href={course.link}
                target={course?.target || "_self"}
                key={idx}
                className="group relative overflow-hidden bg-white/50 backdrop-blur-sm border border-[#010A09]/10 rounded-md p-6 shadow-sm transition-all duration-500 hover:shadow-xl flex flex-col h-full bg-white"
              >
                {/* Top Gradient Border on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#CA1C69] to-[#F37A3A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative w-[48px] h-[48px] mb-4">
                  <Certification className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
                  <CertificationFeatured className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </div>

                <h3 className="text-fluid-lg font-bold text-[#3B194E] mb-3 leading-snug group-hover:text-primary transition-colors">
                  {course.title}
                </h3>

                <p className="text-fluid-base leading-[1.6] text-gray-500 mb-6 flex-grow">
                  {course.description}
                </p>

                {/* Tags (if any exist in data) */}
                {(course as any).tags && (course as any).tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(course as any).tags.map((tag: string, tIdx: number) => (
                      <span
                        key={tIdx}
                        className="text-fluid-xs font-mono font-medium px-2.5 py-1 bg-[#FDF2F8] text-[#C01E6C] border border-[#FBCFE8] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-1 text-primary text-fluid-sm font-bold mt-auto">
                  <span>Learn More</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-sm">Coming soon — stay tuned for new training programs in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(TrainingRelatedCourses);
