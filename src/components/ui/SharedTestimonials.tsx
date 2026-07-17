"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface TestimonialItem {
  text: string;
  name: string;
  role: string;
  industry?: string;
  image: string;
}

interface SharedTestimonialsProps {
  testimonials: TestimonialItem[];
  title?: string;
  subtitle?: string;
}

const SharedTestimonials = ({
  testimonials = [],
  title = "Testimonials",
  subtitle
}: SharedTestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isScrollable = testimonials.length > 3;

  const next = () => {
    if (isScrollable) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prev = () => {
    if (isScrollable) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  // If scrollable, smoothly loop by duplicating array and slicing 3 items at a time
  const visibleTestimonials = isScrollable
    ? [...testimonials, ...testimonials].slice(currentIndex, currentIndex + 3)
    : testimonials;

  if (testimonials.length === 0) return null;

  return (
    <section className="py-10 bg-[#FAFAFA]">
      <div className="container mx-auto md:px-6 lg:px-20 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-fluid-4xl font-bold leading-tight bg-clip-text text-transparent mb-4" style={{ backgroundImage: "linear-gradient(90deg, #CA1C69 0%, #F37A3A 100%)" }}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-fluid-base text-gray-500">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visibleTestimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-transparent rounded-[8px] p-2 md:p-4 border border-[#00000026] flex flex-col h-full">
              <p className="text-fluid-base text-gray-500 leading-[1.7] mb-8 flex-grow">
                {testimonial.text}
              </p>
              <div className="mt-auto">
                <h4 className="text-fluid-base font-semibold text-[#511F5E] mb-1">{testimonial.name}</h4>
                <p className="text-fluid-sm text-gray-500">{testimonial.role}</p>
                {testimonial.industry && <p className="text-fluid-sm text-gray-500">{testimonial.industry}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {isScrollable && testimonials.map((_, dot) => (
              <div
                key={dot}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${dot === currentIndex ? 'bg-[#CA1C69]' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              disabled={!isScrollable}
              className={`w-10 h-10 rounded-full border border-[#CA1C69] flex items-center justify-center transition-colors ${!isScrollable
                ? 'opacity-40 cursor-not-allowed text-primary'
                : 'text-primary hover:bg-[#FFF0F4]'
                }`}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              disabled={!isScrollable}
              className={`w-10 h-10 rounded-full border border-[#CA1C69] flex items-center justify-center transition-colors ${!isScrollable
                ? 'opacity-40 cursor-not-allowed text-primary'
                : 'text-primary hover:bg-[#FFF0F4]'
                }`}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SharedTestimonials;
