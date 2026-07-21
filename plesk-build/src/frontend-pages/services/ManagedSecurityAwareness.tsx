"use client";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicesData } from "@/data/servicesData";

const ManagedSecurityAwarenessPage = () => {
  const data = servicesData["managed-security-awareness"];
  return <ServicePageTemplate {...data} />;
};

export default ManagedSecurityAwarenessPage;
