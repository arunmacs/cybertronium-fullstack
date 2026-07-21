"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Footer from "@/components/Footer";
import contactHero from "@/assets/ContactSection/contactbg.webp";
import emailjs from "@emailjs/browser";
import { GOOGLE_FORM_FIELD_IDS } from "../constants";
import { usePhoneNumberDetails } from "../hooks/usePhoneNumberDetails";
import { useLocationPath } from "../hooks/useLocationPath";
import PhoneInput, { isValidPhoneNumber, parsePhoneNumber, type Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactPage = () => {
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
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      <PageHero
        image={contactHero}
        titlePart1="Looking for"
        titlePart2="Assistance?"
        description="Got a question? We'd love to hear from you."
        showStats={true}
      />

      {/* ── Contact Form + Info ── */}
      <main className="container mx-auto px-4 pt-10 pb-16 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <SectionHeader
              align="left"
              subtitle="GET IN TOUCH"
              titlePart1="We're Here To Help"
              description="Have questions about the program, pricing, or enrollment process? Reach out and our team will respond with clear guidance to help you move forward confidently."
              className="mb-4 lg:pr-8"
              showBar={false}
            />

            {status.type && (
              <div
                className={`p-4 mb-2 rounded-md text-sm ${status.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
                  }`}
              >
                {status.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[clamp(13px,1vw+0.4rem,14px)] font-semibold text-[#C01E6C] tracking-[-0.02em] leading-[1.2]">Full Name</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-[#F4F4F4] dark:bg-slate-900 border-none rounded-lg px-4 py-3 text-[clamp(12px,1vw+0.2rem,14px)] dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#C01E6C]/30 transition-all outline-none"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[clamp(13px,1vw+0.4rem,14px)] font-semibold text-[#C01E6C] tracking-[-0.02em] leading-[1.2]">Email Address</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full bg-[#F4F4F4] dark:bg-slate-900 border-none rounded-lg px-4 py-3 text-[clamp(12px,1vw+0.2rem,14px)] dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#C01E6C]/30 transition-all outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[clamp(13px,1vw+0.4rem,14px)] font-semibold text-[#C01E6C] tracking-[-0.02em] leading-[1.2]">Subject</label>
                  <input
                    type="text" name="subject" value={formData.subject} onChange={handleChange}
                    placeholder="What's your message about?"
                    className="w-full bg-[#F4F4F4] dark:bg-slate-900 border-none rounded-lg px-4 py-3 text-[clamp(12px,1vw+0.2rem,14px)] dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#C01E6C]/30 transition-all outline-none"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[clamp(13px,1vw+0.4rem,14px)] font-semibold text-[#C01E6C] tracking-[-0.02em] leading-[1.2]">Phone Number</label>
                  <div className="w-full bg-[#F4F4F4] dark:bg-slate-900 border-none rounded-lg px-4 py-3 text-[clamp(12px,1vw+0.2rem,14px)] dark:text-white focus-within:ring-2 focus-within:ring-[#C01E6C]/30 transition-all outline-none flex items-center">
                    <PhoneInput
                      international
                      defaultCountry="MY"
                      value={formData.mobile}
                      onChange={handlePhoneChange}
                      onBlur={validatePhone}
                      limitMaxLength
                      countryCallingCodeEditable={false}
                      required
                      className="phone-input bg-transparent w-full outline-none [&>input]:bg-transparent [&>input]:border-none [&>input]:outline-none [&>input]:text-[clamp(12px,1vw+0.2rem,14px)]"
                      placeholder="Enter mobile number"
                    />
                  </div>
                  {phoneError && <p className="text-red-400 text-xs mt-1">{phoneError}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[clamp(13px,1vw+0.4rem,14px)] font-semibold text-[#C01E6C] tracking-[-0.02em] leading-[1.2]">Message</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange}
                  rows={4} placeholder="Write your message here..."
                  className="w-full bg-[#F4F4F4] dark:bg-slate-900 border-none rounded-lg px-4 py-3 text-[clamp(12px,1vw+0.2rem,14px)] dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#C01E6C]/30 transition-all outline-none resize-none"
                  required
                />
              </div>

              <div className="w-full flex justify-end items-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-[#511F5E] to-[#C01E6C] hover:opacity-90 text-white px-7 py-2.5 rounded-full text-[clamp(12px,1vw+0.2rem,14px)] font-bold tracking-wide transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-pink-900/10 uppercase disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  <>
                    {isLoading ? "SENDING..." : "SEND MESSAGE"}
                  </>
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#FAFAFA] dark:bg-slate-900/40 border border-gray-100 dark:border-slate-800 rounded-3xl p-2 md:p-4 space-y-3 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-5">
                <div className="space-y-1.5">
                  <h4 className="text-[clamp(14px,1vw+0.4rem,16px)] font-semibold text-[#C01E6C] uppercase">Office Address</h4>
                  <p className="text-[#461148] dark:text-gray-300 text-[clamp(12px,1.2vw+0.5rem,14px)] leading-relaxed font-medium">
                    U1, UOA Business Park, 5-13A-01, Penthouse, Tower 5, 51A, Jalan Pengaturcara, Seksyen U1, 40150 Shah Alam, Selangor, Malaysia
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-[clamp(14px,1vw+0.4rem,16px)] font-semibold text-[#C01E6C] uppercase">Phone</h4>
                  <p className="text-[#461148] dark:text-gray-300 text-[clamp(12px,1.2vw+0.5rem,14px)] font-medium">+603 2201 3393</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-[clamp(14px,1vw+0.4rem,16px)] text-[#C01E6C] font-semibold dark:text-gray-400 uppercase tracking-wider block">OFFICE LOCATION</span>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12138.8471177568!2d101.5686035636097!3d3.0861676674092564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc498954afe4ed%3A0xca519180d6fc394d!2sCybertronium%20Sdn.%20Bhd.!5e1!3m2!1sen!2sin!4v1780496186441!5m2!1sen!2sin"
                  className="w-full aspect-square rounded-[16px] shadow-sm border border-gray-200 dark:border-slate-800"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* ── Footer Section ── */}
      <Footer />
    </div>
  );
};

export default ContactPage;
