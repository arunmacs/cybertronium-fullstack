import clementImg from "@/assets/home/clementt.webp";
import hadiImg from "@/assets/home/Hadi.webp";
import jakanathImg from "@/assets/home/jakanathsecops.webp";
import neenuImg from "@/assets/home/nenu.webp";
import leaderBg from "@/assets/home/leadership.webp";
import { SectionHeader } from "@/components/ui/SectionHeader";

const team = [
  {
    name: "Dr. Clement Arul",
    role: "Founder & CEO",
    image: clementImg,
    bio: `Globally recognized cybersecurity and AI security leader with over 20 years of experience advising governments, boards, and enterprises on cyber resilience, critical infrastructure security, and digital transformation. An award-winning strategist and national-level contributor, he combines executive leadership with deep technical expertise to shape the future of cybersecurity across Asia and beyond.`,
    featured: true,
  },
  {
    name: "Jakanath Shanmogam",
    role: "Head - Security Operations",
    image: jakanathImg,
    bio: `Head of Security Operations, overseeing threat detection, incident response, and end-to-end cybersecurity service delivery for enterprise clients.
    
    He has strong expertise in SOC operations, security architecture, risk management, and cybersecurity consulting, enabling him to strengthen organizational security posture and operational resilience.`,
  },
  {
    name: "Hadi Nazrulhaq",
    role: "Head - Assessment Services",
    image: hadiImg,
    bio: `Head of Assessment and Validation Services at Cybertronium, where he leads initiatives to identify security weaknesses and evaluate organizational defenses.
    
    He specializes in red teaming, security assessments, and validation exercises, helping enterprises strengthen their cybersecurity posture through effective remediation strategies and risk reduction measures.`,
  },
  {
    name: "Neenu Maria Thankachan",
    role: "Head - Consulting Services",
    image: neenuImg,
    bio: `Cybersecurity leader and AI security specialist with expertise in cyber risk management, threat intelligence, governance, compliance, and Zero Trust security.
    
    She is recognized for translating complex security challenges into actionable strategies that strengthen cyber resilience and support business objectives.`,
  },
];

const LeadershipSection = () => {
  const featuredLeader = team.find(l => l.featured)!;
  const otherLeaders = team.filter(l => !l.featured);

  return (
    <section id="leadership" className="py-12 bg-[#F8F8F8] overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <SectionHeader
          subtitle="The Cybertronians"
          titlePart2="Leadership Team"
          description="Award Winning experts leading the charge in cybersecurity innovation across Asia and beyond"
        />

        {/* Featured Leader Card */}
        <div className="max-w-5xl mx-auto mb-20 md:mb-24 mt-12 md:mt-16">
          <div className="relative flex flex-col md:flex-row items-center w-full">
            {/* Background Mesh Box - Spreads full width */}
            <div className="absolute inset-y-6 md:inset-y-10 left-0 right-0 rounded-[24px] overflow-hidden z-0 shadow-2xl bg-[#0b0314]">
              {/* Rotated background layer for desktop */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-[150%] md:h-[400%] lg:h-[550%] bg-cover bg-no-repeat bg-left md:-rotate-90"
                style={{ backgroundImage: `url(${leaderBg})` }}
              />
              {/* Vibrant gradient overlay to soften the bottom edge */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0314]/80 via-transparent to-[#CA1C69]/20 hidden md:block pointer-events-none" />
            </div>

            {/* Image Container - Breaks out vertically */}
            <div className="relative z-20 w-[85%] md:w-[320px] shrink-0 mx-auto md:ml-12 lg:ml-20 bg-white p-0 shadow-[13px_10px_4px_0_rgba(0,0,0,0.25)]">
              <img src={featuredLeader.image} alt={featuredLeader.name} className="w-full h-auto object-cover" loading="lazy" decoding="async" />
            </div>

            {/* Info Container */}
            <div className="relative z-20 flex-1 p-8 md:pl-16 py-12 md:py-0 text-white mt-4 md:mt-0">
              <h3 className="text-[clamp(30px,4vw+0.8rem,36px)] font-semibold mb-3 tracking-tight drop-shadow-sm">{featuredLeader.name}</h3>
              <p className="text-white/90 text-[clamp(18px,2vw+0.5rem,20px)] mb-6">{featuredLeader.role}</p>
              <p className="text-white/90 text-[clamp(12px,1.2vw+0.4rem,15px)] leading-relaxed tracking-wider whitespace-pre-line text-justify">
                {featuredLeader.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {otherLeaders.map((leader) => (
            <div key={leader.name} className="text-center group">
              <div className="relative mb-6 rounded-[24px] overflow-hidden shadow-lg transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl">
                <img src={leader.image} alt={leader.name} className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-[clamp(20px,2vw+0.8rem,22px)] font-medium text-[#3B0A33] mb-0.5">{leader.name}</h4>
              <p className="text-[#CA1C69] text-[clamp(14px,1vw+0.5rem,15px)] font-normal mb-2">{leader.role}</p>
              <div className="w-[80%] max-w-[240px] h-[1px] bg-[#3B0A33]/20 mx-auto mb-3" />
              <p className="text-gray-500 text-[clamp(10px,1vw+0.4rem,12px)] leading-relaxed mx-auto opacity-90 tracking-wider whitespace-pre-line text-justify">
                {leader.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
