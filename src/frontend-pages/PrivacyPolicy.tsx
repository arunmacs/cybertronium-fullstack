"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPolicyImg from "@assets/privacy-policy.webp"

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Hero section */}
      <div
        className="relative pt-40 pb-32 px-4 md:px-8 bg-cover bg-[80%_center] md:bg-center"
        style={{ backgroundImage: `url(${PrivacyPolicyImg})` }}
      >
        <div className="absolute inset-0 bg-[#1C0E2D]/30"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Privacy Policy</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow container mx-auto max-w-5xl px-2 md:px-6 py-10">
        <div className="bg-white rounded-[20px] shadow-sm p-6 md:p-10 text-gray-700 text-[14px] md:text-[16px]">
          <p className="mb-6 leading-relaxed">
            Cybertronium is committed to protecting your privacy and developing technology
            that gives you the most powerful and safe online experience. This Statement of Privacy
            applies to the Cybertronium site and governs data collection and usage.
            By using the Cybertronium site, you consent to the data practices described
            in this statement.
          </p>

          <h2 className="text-2xl font-bold text-[#3B194E] mt-10 mb-4 uppercase">Collection of your Personal Information</h2>
          <p className="mb-4 leading-relaxed">
            Cybertronium collects personally identifiable information, such as your email
            address, name, home or work address or telephone number. Cybertronium also
            collects anonymous demographic information, which is not unique to you, such as
            your ZIP code, age, gender, preferences, interests and favorites.
          </p>
          <p className="mb-4 leading-relaxed">
            There is also information about your computer hardware and software that is automatically
            collected by Cybertronium. This information can include: your IP address,
            browser type, domain names, access times and referring website addresses. This
            information is used by Cybertronium for the operation of the service, to
            maintain quality of the service, and to provide general statistics regarding use
            of the Cybertronium site.
          </p>
          <p className="mb-4 leading-relaxed">
            Please keep in mind that if you directly disclose personally identifiable information
            or personally sensitive data through Cybertronium public message boards,
            this information may be collected and used by others. Note: Cybertronium
            does not read any of your private online communications.
          </p>
          <p className="mb-6 leading-relaxed">
            Cybertronium encourages you to review the privacy statements of Web sites
            you choose to link to from Cybertronium so that you can understand how those
            Web sites collect, use and share your information. Cybertronium is not responsible
            for the privacy statements or other content on Web sites outside of the Cybertronium
            and Cybertronium family of Web sites.
          </p>

          <h2 className="text-2xl font-bold text-[#3B194E] mt-10 mb-4 uppercase">Use of your Personal Information</h2>
          <p className="mb-4 leading-relaxed">
            Cybertronium collects and uses your personal information to operate the Cybertronium
            Web site and deliver the services you have requested. Cybertronium also uses
            your personally identifiable information to inform you of other products or services
            available from Cybertronium and its affiliates. Cybertronium may also
            contact you via surveys to conduct research about your opinion of current services
            or of potential new services that may be offered.
          </p>
          <p className="mb-4 leading-relaxed">
            Cybertronium does not sell, rent or lease its customer lists to third parties.
            Cybertronium may, from time to time, contact you on behalf of external business
            partners about a particular offering that may be of interest to you. In those cases,
            your unique personally identifiable information (e-mail, name, address, telephone
            number) is not transferred to the third party. In addition, Cybertronium
            may share data with trusted partners to help us perform statistical analysis, send
            you email or postal mail, provide customer support, or arrange for deliveries. All
            such third parties are prohibited from using your personal information except to
            provide these services to Cybertronium, and they are required to maintain
            the confidentiality of your information.
          </p>
          <p className="mb-4 leading-relaxed">
            Cybertronium does not use or disclose sensitive personal information, such
            as race, religion, or political affiliations, without your explicit consent.
          </p>
          <p className="mb-4 leading-relaxed">
            Cybertronium keeps track of the Web sites and pages our customers visit within
            Cybertronium, in order to determine what Cybertronium services are
            the most popular. This data is used to deliver customized content and advertising
            within Cybertronium to customers whose behavior indicates that they are interested
            in a particular subject area.
          </p>
          <p className="mb-6 leading-relaxed">
            Cybertronium Web sites will disclose your personal information, without notice,
            only if required to do so by law or in the good faith belief that such action is
            necessary to: (a) conform to the edicts of the law or comply with legal process
            served on Cybertronium or the site; (b) protect and defend the rights or
            property of Cybertronium; and, (c) act under exigent circumstances to protect
            the personal safety of users of Cybertronium, or the public.
          </p>

          <h2 className="text-2xl font-bold text-[#3B194E] mt-10 mb-4 uppercase">Use of Cookies</h2>
          <p className="mb-4 leading-relaxed">
            The Cybertronium Web site use "cookies" to help you personalize your online
            experience. A cookie is a text file that is placed on your hard disk by a Web page
            server. Cookies cannot be used to run programs or deliver viruses to your computer.
            Cookies are uniquely assigned to you, and can only be read by a web server in the
            domain that issued the cookie to you.
          </p>
          <p className="mb-4 leading-relaxed">
            One of the primary purposes of cookies is to provide a convenience feature to save
            you time. The purpose of a cookie is to tell the Web server that you have returned
            to a specific page. For example, if you personalize Cybertronium pages, or
            register with Cybertronium site or services, a cookie helps Cybertronium
            to recall your specific information on subsequent visits. This simplifies the process
            of recording your personal information, such as billing addresses, shipping addresses,
            and so on. When you return to the same Cybertronium Web site, the information
            you previously provided can be retrieved, so you can easily use the Cybertronium
            features that you customized.
          </p>
          <p className="mb-6 leading-relaxed">
            You have the ability to accept or decline cookies. Most Web browsers automatically
            accept cookies, but you can usually modify your browser setting to decline cookies
            if you prefer. If you choose to decline cookies, you may not be able to fully experience
            the interactive features of the Cybertronium services or Web sites you visit.
          </p>

          <h2 className="text-2xl font-bold text-[#3B194E] mt-10 mb-4 uppercase">Security of your Personal Information</h2>
          <p className="mb-6 leading-relaxed">
            Cybertronium secures your personal information from unauthorized access,
            use or disclosure. Cybertronium secures the personally identifiable information
            you provide on computer servers in a controlled, secure environment, protected from
            unauthorized access, use or disclosure. When personal information (such as a credit
            card number) is transmitted to other Web sites, it is protected through the use
            of encryption, such as the Secure Socket Layer (SSL) protocol.
          </p>

          <h2 className="text-2xl font-bold text-[#3B194E] mt-10 mb-4 uppercase">Changes to this Statement</h2>
          <p className="mb-6 leading-relaxed">
            Cybertronium will occasionally update this Statement of Privacy to reflect
            company and customer feedback. Cybertronium encourages you to periodically
            review this Statement to be informed of how Cybertronium is protecting your
            information.
          </p>

          <h2 className="text-2xl font-bold text-[#3B194E] mt-10 mb-4 uppercase">Contact Information</h2>
          <p className="mb-6 leading-relaxed">
            Cybertronium welcomes your comments regarding this Statement of Privacy.
            If you believe that Cybertronium has not adhered to this Statement, please
            contact Cybertronium at <a href="mailto:clementarul@cybertronium.com" className="text-[#CA1C69] font-medium hover:underline">clementarul@cybertronium.com</a>.
            We will use commercially reasonable efforts to promptly determine and remedy the
            problem.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
