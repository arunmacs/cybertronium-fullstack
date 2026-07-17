import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SecureControl from "@assets/icons/glyph.svg?react";
import { useShowStats } from "@/hooks/useShowStats";
import HrdCorpImg from "@assets/training/hrd-corp.webp";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";;

export interface PageHeroSlide {
  image?: string;
  titlePart1: React.ReactNode;
  titlePart2: React.ReactNode;
  titlePart3?: React.ReactNode;
  description: string | string[];
  badge?: string;
  badgeIcon?: React.ReactNode;
  children?: React.ReactNode;
  stats?: { label: string[]; value: string }[];
}

interface PageHeroProps {
  image?: string;
  titlePart1?: React.ReactNode;
  titlePart2?: React.ReactNode;
  titlePart3?: React.ReactNode;
  description?: string | string[];
  showStats?: boolean;
  stats?: { label: string[]; value: string }[];
  badge?: string;
  badgeIcon?: React.ReactNode;
  children?: React.ReactNode;
  id?: string;
  resourceImg?: string;
  showHrdCorpBadge?: boolean;
  slides?: PageHeroSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  transitionDirection?: "vertical" | "horizontal";
  bottomRightImage?: string;
  rightContent?: React.ReactNode;
  gridClassName?: string;
  isCompact?: boolean;
}

const defaultStats = [
  { label: ["Years in", "Cybersecurity"], value: "8+" },
  { label: ["Industries", "Served"], value: "18+" },
  { label: ["Awards", "Won"], value: "50+" },
  { label: ["Clients", "Secured"], value: "200+" },
  { label: ["SOC", "Uptime"], value: "24/7" },
];

const PageHero = ({
  image,
  titlePart1,
  titlePart2,
  titlePart3,
  description,
  showStats = true,
  stats = defaultStats,
  badge,
  badgeIcon,
  children,
  id,
  resourceImg,
  showHrdCorpBadge = false,
  slides,
  autoPlay = true,
  autoPlayInterval = 8000,
  transitionDirection = "vertical",
  bottomRightImage,
  rightContent,
  gridClassName,
  isCompact = false,
}: PageHeroProps) => {
  const shouldShowStats = useShowStats(showStats);
  const pathname = usePathname();

  const [currentIndex, setCurrentIndex] = useState(0);

  const resolvedSlides = slides && slides.length > 0
    ? slides
    : [{
      image,
      titlePart1,
      titlePart2,
      titlePart3,
      description,
      badge,
      badgeIcon,
      children,
      stats
    } as PageHeroSlide];

  const currentSlide = resolvedSlides[currentIndex];
  const slideImage = currentSlide.image || image;
  const currentStats = currentSlide.stats || stats;

  const initialAnim = transitionDirection === "vertical" ? { opacity: 0, y: 20 } : { opacity: 0, x: 20 };
  const animateAnim = transitionDirection === "vertical" ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 };
  const exitAnim = transitionDirection === "vertical" ? { opacity: 0, y: -20 } : { opacity: 0, x: -20 };

  useEffect(() => {
    if (!autoPlay || resolvedSlides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % resolvedSlides.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, resolvedSlides.length]);

  const renderSlideContent = (slide: PageHeroSlide, isGhost: boolean = false) => (
    <>
      {slide.badge && (
        <div className="w-fit inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-1 pr-3 py-1 mb-4 ml-4">
          <div className="w-7 h-7 flex items-center justify-center bg-white/30 rounded-full">
            {!isGhost && (slide.badgeIcon ? slide.badgeIcon : <SecureControl className="w-5 h-5 text-white" />)}
          </div>
          <span className="text-xs font-medium text-white">
            {slide.badge}
          </span>
        </div>
      )}
      <h1 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-normal mb-3 ml-4">
        <span className="text-white">{slide.titlePart1} </span>
        <br />
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: "radial-gradient(50% 50% at 50% 50%, #F37A3A 0%, #CA1C69 100%)" }}
        >
          {slide.titlePart2}
        </span>
        {slide.titlePart3 && (
          <>
            <br />
            <span className="text-white">{slide.titlePart3}</span>
          </>
        )}
      </h1>
      {Array.isArray(slide.description) ? (
        <>
          {slide.description.length > 0 && (
            <p className="text-base font-medium leading-[1.4] tracking-normal text-[#fff] max-w-md mb-4 ml-4 whitespace-pre-line">
              {slide.description[0]}
            </p>
          )}
          {slide.description.length > 1 && (
            <ul className="text-base font-medium leading-[1.6] tracking-normal text-[#DBDBDB] max-w-md mb-4 ml-8 list-disc list-outside space-y-1">
              {slide.description.slice(1).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <p className="text-base font-medium leading-[1.4] tracking-normal text-[#fff] max-w-md mb-4 ml-4 whitespace-pre-line">
          {slide.description}
        </p>
      )}

      {resourceImg && (
        <div className="ml-4">
          <img
            src={resourceImg}
            alt="Resource"
            className="w-65 h-20 object-contain"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
        </div>
      )}
      {slide.children && (
        <div className="ml-4">
          {slide.children}
        </div>
      )}

      {/* Mobile-only view for awards/badges below the content */}
      {bottomRightImage && !isGhost && (
        <div className="md:hidden w-full mt-8 pl-4 pr-4">
          <img
            src={bottomRightImage}
            alt="Awards and Badges"
            className="w-full h-auto object-contain max-w-[400px]"
            loading="eager"
          />
        </div>
      )}
    </>
  );

  return (
    <section id={id} className={cn(
      "relative flex flex-col overflow-hidden bg-[#222222]",
      isCompact ? "pt-12 pb-6 md:pt-16 md:pb-8 lg:pt-20 lg:pb-10" : "min-h-[70vh] pt-10"
    )}>
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slideImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 z-0"
        >
          {slideImage && (
            <img
              src={slideImage}
              alt="Hero Background"
              className={cn(
                "w-full h-full object-cover",
                pathname === "/services/managed-security-awareness"
                  ? "opacity-70 object-[50%_center] md:object-center"
                  : cn(
                    "opacity-70",
                    pathname === "/trainings/certified-experiential-cybersecurity-aware-user" || !!bottomRightImage
                      ? "object-left md:object-center"
                      : "object-[80%_center] md:object-center"
                  )
              )}
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {showHrdCorpBadge && !bottomRightImage && (
        <div className="absolute right-6 bottom-16 md:right-12 md:bottom-24 lg:right-20 lg:bottom-32 z-20 rounded-[20px] p-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
          <img src={HrdCorpImg} alt="HRD Corp Claimable" className="w-[100px] md:w-[140px] h-auto object-contain" />
        </div>
      )}

      {bottomRightImage && (
        <img
          src={bottomRightImage}
          alt="Hero Badge"
          className="absolute right-[8%] md:right-[10%] lg:right-[4%] top-[20%] md:top-[22%] lg:top-[20%] z-20 h-[200px] md:h-[300px] lg:h-[350px] w-auto object-contain hidden md:block"
        />
      )}

      <div className="flex-1 flex flex-col justify-center w-full relative z-20">
        <div className={cn("container mx-auto", isCompact ? "pt-6 pb-4" : "pt-16 pb-10")}>
          <div className={cn("grid grid-cols-1 gap-10 items-center", gridClassName || "lg:grid-cols-[2fr_1fr]")}>
            {/* Left — content */}
            <div className={cn("grid md:pl-10 lg:pl-20", isCompact ? "min-h-[150px]" : "min-h-[300px]")}>
              {/* Invisible footprint of all slides to perfectly stabilize container height */}
              {resolvedSlides.length > 1 && resolvedSlides.map((slide, idx) => (
                <div key={`ghost-${idx}`} className="col-start-1 row-start-1 invisible opacity-0 pointer-events-none flex flex-col justify-center" aria-hidden="true">
                  {renderSlideContent(slide, true)}
                </div>
              ))}

              <AnimatePresence>
                <motion.div
                  key={currentIndex}
                  className="col-start-1 row-start-1 flex flex-col justify-center"
                  initial={initialAnim}
                  animate={animateAnim}
                  exit={exitAnim}
                  transition={{ duration: 0.5 }}
                >
                  {renderSlideContent(currentSlide, false)}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right content */}
            {rightContent && (
              <div className="relative z-20 h-full flex flex-col justify-center lg:pl-8 mt-8 lg:mt-0">
                {rightContent}
              </div>
            )}
          </div>

          {/* Carousel Indicators */}
          {resolvedSlides.length > 1 && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-30">
              {resolvedSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    currentIndex === idx ? "bg-[#CA1C69] w-8" : "bg-white/50 hover:bg-white/80"
                  )}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {shouldShowStats && (
        <div className="container mx-auto relative z-30 translate-y-[1px] mt-10 lg:mt-0">
          <div className={cn("max-w-[1000px] mx-auto rounded-t-[24px] p-[1px] bg-gradient-to-r from-[#F37A3A]/40 via-[#CA1C69]/40 to-[#4D124E]/40 pb-0", (pathname.startsWith("/services") || pathname.startsWith("/trainings")) && "bg-gradient-to-r from-[#F37A3A]/40 via-[#CA1C69]/40 to-[#4D124E]/40")}>
            <div className={cn("rounded-t-[23px] bg-[#1A1A1A]/60 backdrop-blur-sm h-full w-full", (pathname.startsWith("/services") || pathname.startsWith("/trainings")) ? "px-3 py-2 md:px-5 md:py-4" : "px-3 py-4 md:px-4 md:py-8")}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={JSON.stringify(currentStats)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "grid grid-cols-2 gap-2",
                    currentStats.length === 4 && "md:grid-cols-4 gap-4",
                    currentStats.length === 5 && "md:grid-cols-5 gap-2",
                    currentStats.length === 6 && "md:grid-cols-3 lg:grid-cols-6 gap-2"
                  )}
                >
                  {currentStats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-center gap-4 border border-t-0 border-b-0 border-l-0 border-r-1 border-white/20 last:border-r-0">
                      <div className={cn("flex items-center gap-2 text-center", (pathname.startsWith("/services") || pathname.startsWith("/trainings")) && "flex-col")}>
                        <div className={cn("font-bold text-white leading-none", pathname.includes("soc-as-a-service") ? "text-lg md:text-xl" : "text-2xl md:text-3xl")}>{stat.value}</div>
                        <div className={cn("font-light text-white/80", pathname.includes("soc-as-a-service") ? "text-[9px] md:text-[11px] leading-tight tracking-normal" : "text-xs md:text-sm leading-snug tracking-wider")}>
                          {stat.label.map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PageHero;

