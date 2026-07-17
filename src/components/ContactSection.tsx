import instaIcon from "@/assets/Footer/instaicon.png";
import linkedinIcon from "@/assets/Footer/linkedlnicon.png";
import xIcon from "@/assets/Footer/xicon.png";
import youtubeIcon from "@/assets/Footer/youtubeicon.png";
import footerBg from "@/assets/Footer/footerbg.webp";
import { useState } from "react";

import emailjs from "@emailjs/browser";
import { GOOGLE_FORM_FIELD_IDS } from "../constants";
import { usePhoneNumberDetails } from "../hooks/usePhoneNumberDetails";
import { useLocationPath } from "../hooks/useLocationPath";
import PhoneInput, { isValidPhoneNumber, parsePhoneNumber, type Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactSection = () => {
  const { getNumberDetails } = usePhoneNumberDetails();
  const { pageName } = useLocationPath();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    mobile: "",
  });
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; text: string }>({ type: null, text: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: Value) => {
    setFormData((prev) => ({ ...prev, mobile: value || "" }));
    if (phoneError) setPhoneError(null);
  };

  const validatePhone = () => {
    const value = formData.mobile;
    if (!value) { setPhoneError("Mobile number is required"); return false; }
    if (!isValidPhoneNumber(value)) { setPhoneError("Enter a valid mobile number"); return false; }
    const phone = parsePhoneNumber(value);
    if (!phone) { setPhoneError("Invalid phone number format"); return false; }
    setPhoneError(null); return true;
  };

  const handleGoogleFormSubmit = async () => {
    try {
      const googleFormApiUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_API_URL;
      const { countryName } = getNumberDetails(formData.mobile);
      const timestamp = new Date()?.toLocaleString();
      const googleFormData = new FormData();

      googleFormData.append(GOOGLE_FORM_FIELD_IDS.fullName, formData.name);
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.email, formData.email);
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.subject, formData.subject);
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.mobile, formData.mobile);
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.message, formData.message);
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.page, pageName);
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.country, countryName || "");
      googleFormData.append(GOOGLE_FORM_FIELD_IDS.timestamp, timestamp || "");

      await fetch(googleFormApiUrl as string, {
        method: "POST",
        body: googleFormData,
        mode: "no-cors",
      });
    } catch (error) {
      console.error("Error submitting Google form:", error);
    }
  };

  const handleEmailSubmit = async () => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    if (!publicKey || !serviceId || !templateId) {
      throw new Error("EmailJS configuration missing");
    }

    try {
      emailjs.init(publicKey);
      const { countryName } = getNumberDetails(formData.mobile);
      const emailPayload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        mobile_number: formData.mobile,
        message: formData.message,
        from_page: pageName,
        country_name: countryName,
      };

      await emailjs.send(serviceId, templateId, emailPayload);
    } catch (error) {
      console.log("Error in submitting email :", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message || !formData.mobile) {
      setStatus({
        type: "error",
        text: "Please fill in all required fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    if (!validatePhone()) return;

    setIsLoading(true);
    setStatus({ type: null, text: "" });

    try {
      await handleEmailSubmit();
      await handleGoogleFormSubmit();
      setStatus({
        type: "success",
        text: "Your message has been sent successfully! We will get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "", mobile: "" });
    } catch (error) {
      setStatus({
        type: "error",
        text: "Failed to send your message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative bg-[#0b0d17] overflow-hidden px-6 md:px-10 lg:px-20">
      {/* Atmospheric background */}
      <img src={footerBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-90"
        loading="lazy" decoding="async" />

      <div className="container mx-auto px-4 relative z-10 max-w-[1000px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-[120px] pb-[160px] md:pb-[200px]">

          {/* ── Left: Contact Info ── */}
          <div className="space-y-10 my-auto">

            {/* Heading block */}
            <div className="space-y-4">
              <h3
                className="font-display font-extrabold text-white leading-tight"
                style={{ fontSize: "clamp(25px, 4vw, 35px)" }}
              >
                Send Us a Message
              </h3>
              <p className="text-white/60 text-base leading-relaxed max-w-md">
                Have a technical question, media inquiry, or want a demo?<br />
                Fill out the form and we'll be in touch.
              </p>
            </div>

            {/* Info grid — matches image 1 layout exactly */}
            <div className="grid grid-cols-2 gap-x-6">

              <div className="space-y-2">
                <h4 className="font-display text-base font-bold text-white">Office Address</h4>
                <p className="text-white/70 text-sm font-medium leading-relaxed">
                  U1, UOA Business Park, 5-13A-01, Penthouse, Tower 5, 51A, Jalan Pengaturcara, Seksyen U1, 40150 Shah Alam, Selangor, Malaysia
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-display text-base font-bold text-white">Phone</h4>
                <p className="text-white/70 text-sm font-medium">+603 2201 3393</p>
              </div>

            </div>

            {/* Social icons */}
            <div className="flex items-center gap-6">
              {[
                { icon: instaIcon, alt: "Instagram", href: "https://www.instagram.com/cybertronium_group?igsh=aDlrY3k2anRyZXU0" },
                { icon: linkedinIcon, alt: "LinkedIn", href: "https://www.linkedin.com/company/cybertronium/" },
                // { icon: xIcon, alt: "X", href: "#" },
                { icon: youtubeIcon, alt: "YouTube", href: "https://www.youtube.com/@cybertronium2069" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <img src={social.icon} alt={social.alt} className="w-8 h-8 object-contain" loading="lazy" decoding="async" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Form card ── */}
          <div
            className="rounded-[20px] p-2 md:p-4 lg:p-6"
            style={{
              background: "rgba(70, 17, 72, 0.7)",
            }}
          >
            {status.type && (
              <div
                className={`p-4 mb-4 rounded-md text-sm ${status.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
                  }`}
              >
                {status.text}
              </div>
            )}
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="contact-input placeholder:text-white/70"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="contact-input placeholder:text-white/70"
              />
              <div>
                <PhoneInput
                  international
                  defaultCountry="MY"
                  value={formData.mobile}
                  onChange={handlePhoneChange}
                  onBlur={validatePhone}
                  limitMaxLength
                  countryCallingCodeEditable={false}
                  required
                  className="contact-input flex items-center focus-within:border-primary [&>input]:bg-transparent [&>input]:border-none [&>input]:outline-none [&>input]:text-white [&>input]:placeholder:text-white/40"
                  placeholder="Phone Number"
                />
                {phoneError && <p className="text-red-400 text-xs mt-1">{phoneError}</p>}
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="contact-input placeholder:text-white/70"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Message"
                required
                className="contact-input resize-none placeholder:text-white/70"
              />

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-cta text-primary-foreground px-4 py-2.5 rounded-full text-base  font-medium text-center leading-none tracking-normal hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : "Request a Demo"}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;
