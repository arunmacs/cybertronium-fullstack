"use client";
import SharedTestimonials from "@/components/ui/SharedTestimonials";

export interface TrainingTestimonialsProps {
  testimonials: {
    text: string;
    name: string;
    role: string;
    image: string;
  }[];
}

const TrainingTestimonials = ({ testimonials }: TrainingTestimonialsProps) => {
  if (!testimonials || testimonials.length === 0) return null;
  
  return (
    <SharedTestimonials 
      testimonials={testimonials}
      title="Testimonials"
      subtitle="See what our students have to say about this course"
    />
  );
};

export default TrainingTestimonials;
