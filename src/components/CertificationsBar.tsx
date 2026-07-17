const certifications = [
  "AICPA SOC 2 Audited",
  "SOC 2 Type II Certified",
  "ISO 27001 Certified",
  "CREST Accredited",
];

const partners = [
  { name: "logoipsum", logo: "⬢" },
  { name: "logoipsum", logo: "▲" },
  { name: "logoipsum", logo: "■" },
  { name: "logoipsum", logo: "◆" },
  { name: "logoipsum", logo: "★" },
];

const CertificationsBar = () => {
  return (
    <section className="py-16 border-b border-gray-200 bg-white/50">
      <div className="container mx-auto">
        <div className="mb-12">
          <p className="text-xs font-display tracking-widest text-gray-500 uppercase text-center font-semibold mb-6">
            Certified by 20+ Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="h-14 px-6 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center hover:border-gray-300 hover:bg-gray-50 transition-all cursor-pointer"
              >
                <span className="text-3xl text-gray-300">{partner.logo}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-center">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="text-xs font-display tracking-wider text-gray-600 uppercase hover:text-pink-600 transition-colors"
            >
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsBar;
