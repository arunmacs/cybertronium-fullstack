import isoStripsImg from "@/assets/home/ISO-strip-crest-home.svg";

const ISOStrips = ({ img = isoStripsImg, containerClass = "bg-[#F8F8F8]", className = "" }) => {
  return (
    <section className={`relative z-40 -mt-[1px] ${containerClass}`}>
      <div className="container mx-auto">
        <div className={`max-w-[1000px] mx-auto rounded-b-[24px] p-[1px] bg-gradient-to-r from-[#F37A3A]/40 via-[#CA1C69]/40 to-[#4D124E]/40 pt-0 ${className}`}>
          <div className="rounded-b-[23px] p-1 md:p-2 bg-white flex justify-center w-full shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <img
              src={img}
              alt="Certifications"
              className="max-w-[1000px] w-full object-cover max-h-[80px] md:max-h-[120px]"
              loading="lazy" decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ISOStrips;
