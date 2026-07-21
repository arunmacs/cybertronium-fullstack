"use client";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicesData } from "@/data/servicesData";

const ZeroTrustImplementationPage = () => {
  const data = servicesData["zero-trust-implementation"];
  return <ServicePageTemplate {...data} />;
};

export default ZeroTrustImplementationPage;
