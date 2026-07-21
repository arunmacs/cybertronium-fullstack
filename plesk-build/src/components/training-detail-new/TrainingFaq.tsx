"use client";
import SharedFAQ from "@/components/ui/SharedFAQ";

export interface TrainingFaqProps {
  faqs: {
    question: string;
    answer: string;
  }[];
  cta?: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
}

const TrainingFaq = ({ faqs, cta }: TrainingFaqProps) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <SharedFAQ 
      faqs={faqs}
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about the certification program and your path forward."
      ctaTitle={cta?.title || "Need more guidance?"}
      ctaSubtitle={cta?.subtitle || "Our advisors are ready to discuss your security career."}
      ctaButtonText={cta?.buttonText || "Contact Us"}
      ctaButtonLink={cta?.buttonLink || "/contact"}
    />
  );
};

export default TrainingFaq;
