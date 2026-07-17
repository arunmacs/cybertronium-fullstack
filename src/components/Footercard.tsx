import logo from "@/assets/Footer/UpdateLogo.svg";
import instaIcon from "@/assets/Footer/Instagram.png";
import linkedinIcon from "@/assets/Footer/LinkedIn.png";
import youtubeIcon from "@/assets/Footer/Youtube.png";
import Link from "next/link";;

const FooterCard = () => {
  return (
    <>
      {/* White card — overlaps upward into ContactSection and straddles the white subfooter background */}
      <div className="container mx-auto px-4 md:px-10 lg:px-20 relative z-30 -mt-[140px] md:-mt-[160px]">
        <div className="bg-white rounded-xl p-4 sm:p-6 lg:px-6 lg:py-4 flex flex-col lg:flex-row justify-between gap-4 md:gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
          <div className="w-full lg:max-w-xs flex flex-col justify-center items-center mx-auto lg:ml-6 mb-2 lg:mb-0">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <img src={logo} alt="Cybertronium" className="h-20 md:h-28 w-auto object-contain object-center" loading="lazy" decoding="async" />
            </div>
            <h2 className="text-sm md:text-base font-semibold text-[#4D124E] tracking-wide text-center">
              Your Outsourced
              <br />
              Cybersecurity & Data
              <br />
              Command Centre.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_2fr_2fr] gap-4 lg:gap-6 w-full lg:w-auto">
            <div>
              <h4 className="text-sm font-bold text-[#4D124E] mb-2">Company</h4>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "Trainings", href: "/trainings" },
                  { label: "Services", href: "/services" },
                  { label: "About Us", href: "/about-us" },
                  { label: "Contact", href: "/contact" },
                  { label: "Blog", href: "/blogs" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-xs md:text-sm font-semibold text-[#4D124E] opacity-70 hover:opacity-100 hover:text-primary transition-all"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#4D124E] mb-2">Featured Services</h4>
              <ul className="space-y-2">
                {[
                  { label: "CTEM as a Service", href: "/ctem" },
                  { label: "AI Security", href: "/services/ai-security" },
                  { label: "Strategy & Consulting", href: "/services/strategy-consulting" },
                  { label: "Cloud Security Consulting", href: "/services/cloud-security-consulting" },
                  { label: "SOC as a Service", href: "/services/soc-as-a-service" },
                  { label: "SOC for SME", href: "/services/soc-for-sme" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-xs md:text-sm font-semibold text-[#4D124E] opacity-70 hover:opacity-100 hover:text-primary transition-all"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#4D124E] mb-2">Featured Trainings</h4>
              <ul className="space-y-2">
                {[
                  { label: "AI Security Certifications", href: "https://axiom-prime.ai/certifications" },
                  { label: "Certified Penetration Tester", href: "/trainings/certified-penetration-tester" },
                  { label: "Certified SOC Analyst", href: "/trainings/certified-soc-analyst" },
                  { label: "Certified Red Team Professional", href: "/trainings/certified-red-team-professional" },
                  { label: "Certified Threat Intelligence Analyst", href: "/trainings/certified-cyber-threat-intelligence-analyst" },
                  { label: "Certified Cloud Security Professional", href: "/trainings/certified-cloud-security-professional" },
                  { label: "Certified Secure Developer", href: "/trainings/certified-secure-developer" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-xs md:text-sm font-semibold text-[#4D124E] opacity-70 hover:opacity-100 hover:text-primary transition-all"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="container mx-auto px-4 md:px-12 lg:px-24 max-w-7xl pb-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-6 pt-6">
          <p className="text-xs md:text-sm text-[#4D124E] font-medium text-center lg:text-left order-3 lg:order-1 mt-2 lg:mt-0">
            © {new Date().getFullYear()} by Cybertronium Sdn. Bhd. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 order-1 lg:order-2">
            {[
              { label: "Privacy policy", path: "/privacy-policy" },
              { label: "Terms of service", path: "/terms-of-use" },
              // { label: "Cookie settings", path: "#" }
            ].map((item) => (
              item.path.startsWith("/") ? (
                <Link key={item.label} href={item.path} className="text-xs md:text-sm text-[#4D124E] font-medium hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.path} className="text-xs md:text-sm text-[#4D124E] font-medium hover:text-primary transition-colors">
                  {item.label}
                </a>
              )
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5 order-2 lg:order-3">
            {[
              // { icon: facebookIcon, alt: "Facebook", href: "#" },
              { icon: instaIcon, alt: "Instagram", href: "https://www.instagram.com/cybertronium_group?igsh=aDlrY3k2anRyZXU0" },
              // { icon: xIcon, alt: "X", href: "#" },
              { icon: linkedinIcon, alt: "LinkedIn", href: "https://www.linkedin.com/company/cybertronium/" },
              { icon: youtubeIcon, alt: "YouTube", href: "https://www.youtube.com/@cybertronium2069" },
            ].map((social, i) => (
              <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center opacity-80 hover:opacity-100 hover:-translate-y-0.5 transition-all">
                <img src={social.icon} alt={social.alt} className="w-8 h-8 object-contain brightness-0" loading="lazy" decoding="async" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCard;
