import { useSEO, SEOOverrides } from "@/hooks/useSEO";

const SEOUpdater = (props: SEOOverrides) => {
  useSEO(props);
  return null;
};

export default SEOUpdater;
