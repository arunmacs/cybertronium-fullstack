"use client";

import React, { useState } from "react";
import Link from "next/link";
import UpdateLogo from "@/assets/updatedLogo.svg?react";
import emailjs from "@emailjs/browser";
import { EMAIL_CHALLENGE_FORM_FIELD_IDS } from "@/constants";
import "./page.css";

type Rule = {
  re?: RegExp;
  req: boolean;
  label: string;
  max?: number;
};

const RULES: Record<string, Rule> = {
  first_name: { re: /^[\p{L}\p{M}'’ .\-]{1,100}$/u, req: true, label: 'First name' },
  last_name: { re: /^[\p{L}\p{M}'’ .\-]{1,100}$/u, req: true, label: 'Last name' },
  email: { re: /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@.]{2,24}$/, req: true, label: 'Business email' },
  phone: { re: /^[0-9+()\-\s.]{6,32}$/, req: true, label: 'Phone' },
  job_title: { re: /^[\p{L}\p{M}\p{N}'’ .,()\/&\-]{0,150}$/u, req: false, label: 'Job title' },
  company: { re: /^[\p{L}\p{M}\p{N}'’ .,()\/&+\-]{1,200}$/u, req: true, label: 'Company' },
  mailboxes: { re: /^[0-9,.\s~+\-]{0,20}$/, req: false, label: 'Approx. mailboxes' },
  notes: { max: 2000, req: false, label: 'Notes' }
};

export default function EmailSecurityChallengePage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    job_title: "",
    company: "",
    country: "",
    company_size: "",
    email_platform: "",
    mailboxes: "",
    notes: "",
    consent: false,
    website: "",
  });

  const [status, setStatus] = useState<{ type: "success" | "error" | null; text: string }>({ type: null, text: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    if (formData.website) return "Invalid submission."; // Honeypot check
    for (const [name, rule] of Object.entries(RULES)) {
      const v = (formData as any)[name] || "";
      if (rule.req && v.trim() === "") return `${rule.label} is required.`;
      if (v.trim() === "") continue;
      if (rule.re && !rule.re.test(v)) return `${rule.label} contains invalid characters.`;
      if (rule.max && v.length > rule.max) return `${rule.label} is too long.`;
    }
    if (!formData.country) return "Country is required.";
    if (!formData.consent) return "Please tick the consent box.";
    return null;
  };

  const handleGoogleFormSubmit = async () => {
    try {
      const googleFormApiUrl = process.env.NEXT_PUBLIC_EMAIL_CHALLENGE_FORM_URL;
      const timestamp = new Date()?.toLocaleString();
      const googleFormData = new FormData();

      googleFormData.append(EMAIL_CHALLENGE_FORM_FIELD_IDS.firstName, formData.first_name);
      googleFormData.append(EMAIL_CHALLENGE_FORM_FIELD_IDS.lastName, formData.last_name);
      googleFormData.append(EMAIL_CHALLENGE_FORM_FIELD_IDS.email, formData.email);
      googleFormData.append(EMAIL_CHALLENGE_FORM_FIELD_IDS.phone, formData.phone);
      googleFormData.append(EMAIL_CHALLENGE_FORM_FIELD_IDS.jobTitle, formData.job_title);
      googleFormData.append(EMAIL_CHALLENGE_FORM_FIELD_IDS.company, formData.company);
      googleFormData.append(EMAIL_CHALLENGE_FORM_FIELD_IDS.country, formData.country);
      googleFormData.append(EMAIL_CHALLENGE_FORM_FIELD_IDS.companySize, formData.company_size);
      googleFormData.append(EMAIL_CHALLENGE_FORM_FIELD_IDS.emailPlatform, formData.email_platform);
      googleFormData.append(EMAIL_CHALLENGE_FORM_FIELD_IDS.mailboxes, formData.mailboxes);
      googleFormData.append(EMAIL_CHALLENGE_FORM_FIELD_IDS.notes, formData.notes);
      googleFormData.append(EMAIL_CHALLENGE_FORM_FIELD_IDS.timestamp, timestamp || "");

      if (googleFormApiUrl) {
        await fetch(googleFormApiUrl, {
          method: "POST",
          body: googleFormData,
          mode: "no-cors",
        });
      }
    } catch (error) {
      console.error("Error submitting Google form:", error);
    }
  };

  const handleEmailSubmit = async () => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_EVENT_TEMPLATE_ID;

    // Fail safely if unconfigured
    if (!publicKey || !serviceId || !templateId) {
      console.warn("EmailJS configuration missing or using placeholder.");
      return;
    }

    // Prevent execution if placeholder is still active
    if (templateId === "YOUR_TEMPLATE_ID_HERE" || templateId === "template_placeholder") {
      console.log("EmailJS template ID is placeholder. Skipping email send.");
      return;
    }

    try {
      emailjs.init(publicKey);

      const eventDetails = [
        `Job Title: ${formData.job_title || '-'}`,
        `Company Size: ${formData.company_size || '-'}`,
        `Email Platform: ${formData.email_platform || '-'}`,
        `Approx. Mailboxes: ${formData.mailboxes || '-'}`,
        `Notes: ${formData.notes || '-'}`
      ].join('\n');

      const emailPayload = {
        event_name: "The Email Security Challenge",
        event_subtitle: "14-day challenge",
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        country: formData.country,
        event_details: eventDetails,
        timestamp: new Date().toLocaleString(),
      };

      await emailjs.send(serviceId, templateId, emailPayload);
    } catch (error) {
      console.error("Error in submitting email :", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, text: "" });

    const errorMsg = validate();
    if (errorMsg) {
      setStatus({ type: "error", text: errorMsg });
      return;
    }

    setIsLoading(true);

    try {
      await Promise.all([
        handleGoogleFormSubmit(),
        handleEmailSubmit(),
      ]);

      setStatus({
        type: "success",
        text: `✓ Thank you, ${formData.first_name} — your registration is in. Our team will contact you at ${formData.email} to schedule your 14-day challenge.`,
      });

      // Reset form
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        job_title: "",
        company: "",
        country: "",
        company_size: "",
        email_platform: "",
        mailboxes: "",
        notes: "",
        consent: false,
        website: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        text: "✕ Failed to send your message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="wrapper">
      {/* EVENT RIBBON — remove this block after NCSS 2026 */}
      <div className="ribbon">Live at the <b>National Cyber Security Summit 2026</b> · 7–9 July · PICC, Putrajaya — visit the Cybertronium booth to take the challenge</div>

      <div className="wrap">
        <header className="top">
          <div className="brand">
            <a href="/">
              <UpdateLogo className="h-[52px] w-auto drop-shadow-xl" aria-label="Cybertronium" />
            </a>
          </div>
          <div className="cpchip"><span className="dot"></span>Powered by <b>Check&nbsp;Point</b> Harmony Email &amp; Collaboration</div>
        </header>

        <section className="hero">
          <div>
            <span className="eyebrow rise">The Email Security Challenge</span>

            <h1 className="rise d1">We'll find the threats your <em>email security missed</em> — or we pay you.</h1>

            <div className="money rise d2">
              <div className="amt">$10,000</div>
              <div className="side">
                <span className="gtag">14-Day Guarantee</span><br />
                If we <b>can't uncover threats</b> your current provider let through within 14 days, we'll send you <b>$10,000 USD.</b>
              </div>
            </div>

            <p className="lede rise d3">
              <b>How do you really secure Microsoft 365 or Google Workspace?</b><br />
              Cybertronium, an authorized Check Point partner in Malaysia, runs a patented, API-based
              health check on your live email and exposes the <span className="hl">phishing &amp; malware</span>
              slipping past your existing defenses. Free of charge, no obligation — keep the full report either way.
            </p>

            <div className="heroctas rise d3">
              <a className="btnjump" href="#register">Register for the challenge</a>
              <span className="freechip"><b>Free</b> · limited slots · zero disruption to mail flow</span>
            </div>

            <div className="steps">
              <div className="step"><div className="n">1</div><h3>Connect in minutes</h3><p>API-based — no MX changes, no downtime, no impact on mail flow.</p></div>
              <div className="step"><div className="n">2</div><h3>14-day health check</h3><p>We scan inbound, outbound &amp; internal email on your live M365 / Workspace.</p></div>
              <div className="step"><div className="n">3</div><h3>Get the verdict</h3><p>A full report of what got through — or your $10,000. Yours to keep, no obligation.</p></div>
            </div>

            <div className="elig">
              <h2>Who qualifies</h2>
              <ul>
                <li><span className="tick">✓</span><span>A <b>production Microsoft 365 or Google Workspace</b> environment with <b>50+ mailboxes</b>.</span></li>
                <li><span className="tick">✓</span><span>An <b>existing enterprise-grade email security solution</b> in place (e.g. Proofpoint, Mimecast, Cisco).</span></li>
                <li><span className="tick">✓</span><span><b>New to Check Point</b> Harmony Email &amp; Collaboration, and not currently using API-based tools such as Abnormal or IRONSCALES.</span></li>
                <li><span className="tick">✓</span><span>A <b>registered business</b> in continuous operation for at least one year.</span></li>
                <li><span className="tick">✓</span><span>Able to complete the <b>14-day Proof of Value</b>, including a short technical walkthrough with the Check Point team.</span></li>
              </ul>
              <p className="note">Signing up does not guarantee participation — our team will confirm your eligibility against Check Point's official challenge rules.</p>
            </div>

            <div className="why">
              <span>NACSA CSSP-Licensed MSSP</span>
              <span>24×7 SOC / MDR — Malaysia</span>
              <span>Authorized Check Point Partner</span>
              <span>ISO 17024-Accredited Training</span>
            </div>
          </div>

          <div className="card" id="register">
            <h2>Take the challenge — <em>register now</em></h2>
            <p className="sub">Tell us a few details and our team will reach out to schedule your free 14-day assessment.</p>

            <form id="assessmentForm" noValidate onSubmit={handleSubmit}>
              {/* honeypot: humans never see or fill this; bots do */}
              <div className="hp" aria-hidden="true">
                <label htmlFor="hp_website">Website</label>
                <input id="hp_website" type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid2">
                <div className="field">
                  <label htmlFor="f_first">First name <span className="req">*</span></label>
                  <input id="f_first" type="text" name="first_name" autoComplete="given-name"
                    maxLength={100} required value={formData.first_name} onChange={handleChange} />
                </div>
                <div className="field">
                  <label htmlFor="f_last">Last name <span className="req">*</span></label>
                  <input id="f_last" type="text" name="last_name" autoComplete="family-name"
                    maxLength={100} required value={formData.last_name} onChange={handleChange} />
                </div>
              </div>

              <div className="field">
                <label htmlFor="f_email">Business email <span className="req">*</span></label>
                <input id="f_email" type="email" name="email" placeholder="you@company.com"
                  autoComplete="email" maxLength={254} required value={formData.email} onChange={handleChange} />
              </div>

              <div className="grid2">
                <div className="field">
                  <label htmlFor="f_phone">Phone <span className="req">*</span></label>
                  <input id="f_phone" type="tel" name="phone" placeholder="+60 12-345 6789"
                    autoComplete="tel" maxLength={32} title="Digits, spaces and + ( ) - . only" required value={formData.phone} onChange={handleChange} />
                </div>
                <div className="field">
                  <label htmlFor="f_title">Job title</label>
                  <input id="f_title" type="text" name="job_title" autoComplete="organization-title" maxLength={150} value={formData.job_title} onChange={handleChange} />
                </div>
              </div>

              <div className="field">
                <label htmlFor="f_company">Company <span className="req">*</span></label>
                <input id="f_company" type="text" name="company" autoComplete="organization" maxLength={200} required value={formData.company} onChange={handleChange} />
              </div>

              <div className="grid2">
                <div className="field">
                  <label htmlFor="f_country">Country <span className="req">*</span></label>
                  <select id="f_country" name="country" required value={formData.country} onChange={handleChange}>
                    <option value="">Select…</option>
                    <option>Malaysia</option>
                    <option>Singapore</option>
                    <option>Indonesia</option>
                    <option>Philippines</option>
                    <option>Thailand</option>
                    <option>Vietnam</option>
                    <option>Brunei</option>
                    <option>India</option>
                    <option>United Arab Emirates</option>
                    <option>Saudi Arabia</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="f_size">Company size</label>
                  <select id="f_size" name="company_size" value={formData.company_size} onChange={handleChange}>
                    <option value="">Select…</option>
                    <option>50–200</option>
                    <option>201–500</option>
                    <option>501–1,000</option>
                    <option>1,001–5,000</option>
                    <option>5,000+</option>
                  </select>
                </div>
              </div>

              <div className="grid2">
                <div className="field">
                  <label htmlFor="f_platform">Email platform</label>
                  <select id="f_platform" name="email_platform" value={formData.email_platform} onChange={handleChange}>
                    <option value="">Select…</option>
                    <option>Microsoft 365</option>
                    <option>Google Workspace</option>
                    <option>On-prem Exchange</option>
                    <option>Mixed / Other</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="f_mailboxes">Approx. mailboxes</label>
                  <input id="f_mailboxes" type="text" name="mailboxes" placeholder="e.g. 350"
                    inputMode="numeric" maxLength={20} title="Numbers only, e.g. 350 or 300-400" value={formData.mailboxes} onChange={handleChange} />
                </div>
              </div>

              <div className="field">
                <label htmlFor="f_notes">Anything else we should know?</label>
                <textarea id="f_notes" name="notes" maxLength={2000}
                  placeholder="Current email security in place, pain points, timeline…" value={formData.notes} onChange={handleChange}></textarea>
              </div>

              <label className="consent">
                <input type="checkbox" name="consent" required checked={formData.consent} onChange={handleChange} />
                <span>I agree to be contacted by Cybertronium and Check Point regarding this free email
                  security assessment, and I consent to the processing of my details for this purpose.</span>
              </label>

              <button className="btn" type="submit" id="submitBtn" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Claim my free assessment →"}
              </button>

              {status.type && (
                <div className={`msg ${status.type === "success" ? "ok" : "err"}`} role="status" aria-live="polite">
                  {status.text}
                </div>
              )}
            </form>
          </div>
        </section>

        <p className="fineprint">
          The $10,000 Email Security Challenge is a promotion by Check Point Software Technologies Ltd.,
          delivered locally by Cybertronium as an authorized Check Point partner. Eligibility: production
          Microsoft 365 or Google Workspace environments with 50 or more users running a recognized
          enterprise-grade email security solution; participants must be new to Harmony Email &amp;
          Collaboration and complete the 14-day Proof of Value process.
          Signing up does not guarantee participation. Full rules at the {" "}
          <a className="underline" href="https://emailsecurity.checkpoint.com/hec_10kchallenge_emea_apac" target="_blank" rel="noopener noreferrer">official Check Point challenge page</a>.
          Check Point Software Technologies Ltd. reserves the right to modify or terminate this promotion
          at any time, at its sole discretion.
        </p>

        <footer className="pagefoot">
          <div><b>Cybertronium</b> &nbsp;·&nbsp; <span className="m">www.cybertronium.com</span> &nbsp;·&nbsp; +603&#8209;2201&#8209;3393</div>
          <div>UOA Business Park, Shah Alam, Selangor, Malaysia</div>
        </footer>

      </div>
    </div>
  );
}
