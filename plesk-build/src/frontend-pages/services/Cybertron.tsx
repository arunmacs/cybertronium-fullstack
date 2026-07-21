"use client";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicesData } from "@/data/servicesData";

const CybertronPage = () => {
  const data = servicesData["cybertron"];
  return <ServicePageTemplate {...data} />;
};

export default CybertronPage;
