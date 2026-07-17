import DemoBanner from "@/components/Demobanner";
import ContactSection from "@/components/ContactSection";
import FooterCard from "@/components/Footercard";
import { usePathname } from "next/navigation";;

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className="relative bg-white pt-32">
      {pathname == "/contact" ? <></> :
        (
          <>
            <div className="container mx-auto max-w-6xl relative z-20" style={{ marginTop: "-80px" }}>
              <DemoBanner />
            </div>
            <div style={{ marginTop: "-80px" }}>
              <ContactSection />
            </div>
          </>)
      }
      <FooterCard />
    </div>
  );
};

export default Footer;
