"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./page.css";
import cyberLogo from "@/assets/updatedLogo.svg";
import { AGENTIC_SOC_FORM_FIELD_IDS } from "@/constants";

const AgenticAISOCEvent = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // --- EXACT SCRIPT FROM ORIGINAL HTML ---
    const feed = document.getElementById('feed');
    const remainingEl = document.getElementById('statRemaining');
    const triagedEl = document.getElementById('statTriaged');
    if (!feed) return;
    feed.innerHTML = ''; // Ensure clean slate for React StrictMode remounts

    const lines = [
      { id: 'ALRT-04812', src: 'SRV-FIN-02', txt: 'Suspicious PowerShell — encoded command', v: 'TRUE POSITIVE · ESCALATE P2 · T1059.001', c: 'v-esc' },
      { id: 'ALRT-04813', src: 'IDP-AZUREAD', txt: 'Impossible travel — KL → Frankfurt', v: 'FALSE POSITIVE · known VPN egress + MFA pass', c: 'v-close' },
      { id: 'ALRT-04814', src: 'FW-EDGE-01', txt: 'Brute force attempts on VPN gateway', v: 'TRUE POSITIVE · ESCALATE P3 · T1110', c: 'v-esc' },
      { id: 'ALRT-04815', src: 'DLP-CORE', txt: 'Bulk file download — 4.2 GB outbound', v: 'BENIGN · scheduled backup, change ticket CHG-2291', c: 'v-close' },
      { id: 'ALRT-04816', src: 'EDR-FLEET', txt: 'Malware hash match — quarantined by EDR', v: 'CLOSED · no lateral movement found', c: 'v-close' },
      { id: 'ALRT-04817', src: 'AD-DC-01', txt: 'New admin account created at 02:14', v: 'TRUE POSITIVE · ESCALATE P1 · T1136.001', c: 'v-esc' },
      { id: 'ALRT-04818', src: 'DNS-RES-03', txt: 'Beaconing pattern to rare domain', v: 'SUPPRESSED · CDN health check — tuning rule proposed', c: 'v-tune' },
      { id: 'ALRT-04819', src: 'O365-MAIL', txt: 'Inbox rule forwarding to external address', v: 'TRUE POSITIVE · ESCALATE P2 · T1114.003', c: 'v-esc' },
      { id: 'ALRT-04820', src: 'WAF-PROD', txt: 'SQLi signatures on /api/login', v: 'FALSE POSITIVE · pentest window, ticket SEC-118', c: 'v-close' },
      { id: 'ALRT-04821', src: 'PROXY-GW', txt: 'Upload to unsanctioned cloud storage', v: 'BENIGN · approved vendor portal — allowlist proposed', c: 'v-tune' }
    ];

    let remaining = 1847, triaged = 0, i = 0;
    const fmt = (n: number) => n.toLocaleString('en-US');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function clock() {
      // Hardcoded to match the exact static screenshot reference
      return '13:49:26';
    }

    function render(item: any, instant: boolean) {
      const row = document.createElement('div');
      row.className = 'feed-line';
      row.innerHTML = '<span class="feed-meta">[' + clock() + '] ' + item.id + ' · ' + item.src + '</span><br>' +
        '<span class="feed-alert">' + item.txt + '</span><br>';
      feed!.appendChild(row);
      const stamp = () => {
        const b = document.createElement('span');
        b.className = 'verdict ' + item.c;
        b.textContent = item.v;
        row.appendChild(b);
        remaining--; triaged++;
        if (remainingEl) remainingEl.textContent = fmt(remaining);
        if (triagedEl) triagedEl.textContent = fmt(triaged);
      };
      instant ? stamp() : setTimeout(stamp, 750);
      while (feed!.children.length > 6) feed!.removeChild(feed!.firstChild!);
    }

    if (reduced) {
      for (let k = 0; k < 5; k++) render(lines[k], true);
      return;
    }
    render(lines[i++ % lines.length], false);
    const interval = setInterval(() => render(lines[i++ % lines.length], false), 2300);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);

    try {
      // 1. Google Form Submission
      const googleFormUrl = process.env.NEXT_PUBLIC_AGENTIC_SOC_FORM_URL;
      if (googleFormUrl && googleFormUrl !== "https://docs.google.com/forms/d/e/PLACEHOLDER/formResponse") {
        const timestamp = new Date()?.toLocaleString();
        const googleFormData = new FormData();

        googleFormData.append(AGENTIC_SOC_FORM_FIELD_IDS.firstName, formData.get('first_name') as string || "");
        googleFormData.append(AGENTIC_SOC_FORM_FIELD_IDS.lastName, formData.get('last_name') as string || "");
        googleFormData.append(AGENTIC_SOC_FORM_FIELD_IDS.email, formData.get('email') as string || "");
        googleFormData.append(AGENTIC_SOC_FORM_FIELD_IDS.phone, formData.get('phone') as string || "");
        googleFormData.append(AGENTIC_SOC_FORM_FIELD_IDS.jobTitle, formData.get('job_title') as string || "");
        googleFormData.append(AGENTIC_SOC_FORM_FIELD_IDS.company, formData.get('company') as string || "");
        googleFormData.append(AGENTIC_SOC_FORM_FIELD_IDS.country, formData.get('country') as string || "");
        googleFormData.append(AGENTIC_SOC_FORM_FIELD_IDS.siem, formData.get('siem') as string || "");
        googleFormData.append(AGENTIC_SOC_FORM_FIELD_IDS.alerts, formData.get('alerts') as string || "");
        googleFormData.append(AGENTIC_SOC_FORM_FIELD_IDS.backlog, formData.get('backlog') as string || "");
        googleFormData.append(AGENTIC_SOC_FORM_FIELD_IDS.notes, formData.get('notes') as string || "");
        googleFormData.append(AGENTIC_SOC_FORM_FIELD_IDS.timestamp, timestamp || "");

        await fetch(googleFormUrl, {
          method: 'POST',
          body: googleFormData,
          mode: 'no-cors' // Google Forms requires no-cors mode
        });
      }

      // 2. EmailJS Submission (Reusable Event Template)
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_EVENT_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey && templateId !== "template_placeholder") {
        const eventDetails = [
          `Job Title: ${formData.get('job_title') || '-'}`,
          `SIEM / Log Platform: ${formData.get('siem') || '-'}`,
          `Approx. Alerts Per Day: ${formData.get('alerts') || '-'}`,
          `Current Backlog Size: ${formData.get('backlog') || '-'}`,
          `Notes: ${formData.get('notes') || '-'}`
        ].join('\n');

        // Use dynamically imported emailjs to avoid blocking the main bundle
        const emailjs = (await import('@emailjs/browser')).default;

        await emailjs.send(
          serviceId,
          templateId,
          {
            event_name: "The Agentic AI SOC Challenge",
            event_subtitle: "Alert Backlog Challenge",
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            company: formData.get('company'),
            country: formData.get('country'),
            event_details: eventDetails,
            timestamp: new Date().toLocaleString()
          },
          publicKey
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }

    setIsSuccess(true);
  };

  return (
    <div className="agentic-soc-page">
      <div className="topbar">Live at the <strong>National Cyber Security Summit 2026</strong> · 7–9 July · PICC, Putrajaya — take the challenge at the Cybertronium booth</div>

      <header>
        <div className="header-in">
          <Link href="/" aria-label="Cybertronium home" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src={cyberLogo} alt="Cybertronium" width={200} height={40} style={{ height: '40px', width: 'auto' }} />
          </Link>
          <span className="partner-chip"><span className="partner-dot" aria-hidden="true"></span>Delivered by <b>CYBERTRONIUM</b>&nbsp;· Authorized Strike48 Partner</span>
          <Link className="logo-chip" href="#" aria-label="Strike48 home">
            <img className="s48-logo" src="data:image/png;base64,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" alt="Strike48" width="637" height="163" />
          </Link>
        </div>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow">The Alert Backlog Challenge</p>
              <h1>We'll triage <span className="hl">every alert in your backlog</span> — or we pay you.</h1>
              <div className="payout">
                <span className="payout-amt">$10,000</span>
                <span className="badge-14">14-Day Guarantee</span>
              </div>
              <p className="hero-sub">If our agents can't work <b>100% of your open alerts to a verdict with evidence</b> within 14 days, we'll send you $10,000 USD.</p>
              <p className="hero-lede">How many alerts did your SOC never get to this month? Strike48's <b>Prospector Studio</b> deploys agentic SOC analysts against your live SIEM data — read-only, zero production impact — and disposes every open alert: verdict, severity, MITRE ATT&amp;CK mapping, and the evidence behind each call. <b>Free of charge, no obligation — keep the full triage report either way.</b></p>
              <div className="cta-row">
                <a className="btn btn-gold" href="#register">Register for the challenge</a>
                <span className="cta-note"><b>Free</b> · limited slots · read-only, zero disruption</span>
              </div>
            </div>

            {/* signature element: live triage console */}
            <div className="console-wrap" aria-hidden="true">
              <div className="console">
                <div className="console-head">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  <span className="console-title"><b>prospector-studio</b> · soc-l1-agent · read-only</span>
                </div>
                <div className="console-stats">
                  <div className="cstat">
                    <div className="cstat-label">Backlog remaining</div>
                    <div className="cstat-num" id="statRemaining">1,847</div>
                  </div>
                  <div className="cstat">
                    <div className="cstat-label">Triaged · evidenced</div>
                    <div className="cstat-num gold" id="statTriaged">0</div>
                  </div>
                </div>
                <div className="console-feed" id="feed">
                  {/* Dynamic feed injected via the exact original script in useEffect */}
                </div>
                <div className="console-foot">
                  <span className="live">● live triage feed</span>
                  <span>every verdict carries evidence<span className="blink">_</span></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROOF STRIP ================= */}
        <div className="proof">
          <div className="wrap proof-grid">
            <div className="proof-item">
              <p className="proof-kicker">Coverage</p>
              <p><b>100% of alerts</b> receive a verdict — not just the ones your queue reached.</p>
            </div>
            <div className="proof-item">
              <p className="proof-kicker">Evidence</p>
              <p><b>Every call is backed</b> by the log trail and ATT&amp;CK mapping behind it.</p>
            </div>
            <div className="proof-item">
              <p className="proof-kicker">Safety</p>
              <p><b>Read-only API access.</b> No agents installed, nothing changed in production.</p>
            </div>
            <div className="proof-item">
              <p className="proof-kicker">Control</p>
              <p><b>Your analysts stay in the loop.</b> Agents recommend; your team decides.</p>
            </div>
          </div>
        </div>

        {/* ================= HOW IT WORKS ================= */}
        <section id="how">
          <div className="wrap">
            <p className="sec-eyebrow">// How the challenge runs</p>
            <h2>Three steps. Fourteen days. One verdict.</h2>
            <p className="sec-sub">The same rollout our customers use in production — scoped down to a proof of value with a guarantee attached.</p>
            <div className="steps">
              <div className="step">
                <span className="step-num">STEP 01</span>
                <h3>Connect in minutes</h3>
                <p>A scoped, <b>read-only API token</b> to your SIEM — Devo, Splunk, Microsoft Sentinel, CrowdStrike, Elastic and more. No agents installed, no rerouting, no schema changes. Your pipeline never notices we're there.</p>
              </div>
              <div className="step">
                <span className="step-num">STEP 02</span>
                <h3>14 days of agentic triage</h3>
                <p>Strike48 SOC agents work <b>every open alert to a verdict</b>: true or false positive, severity, MITRE ATT&amp;CK technique, and the full evidence trail. Your analysts review the calls — we never act on your systems.</p>
              </div>
              <div className="step">
                <span className="step-num">STEP 03</span>
                <h3>Get the verdict</h3>
                <p>A complete triage report — every alert dispositioned, escalations flagged, noise quantified — <b>or your $10,000</b>. The report is yours to keep, no obligation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHO QUALIFIES ================= */}
        <section id="qualify" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <p className="sec-eyebrow">// Eligibility</p>
            <h2>Who qualifies</h2>
            <div className="qual-grid">
              <div className="card">
                <h3>The challenge is open to organizations with:</h3>
                <ul className="check-list">
                  <li><span className="check">✓</span><span>A <b>production SIEM or log platform</b> — Devo, Splunk, Microsoft Sentinel, CrowdStrike, Elastic, QRadar or similar — with 90+ days of searchable retention.</span></li>
                  <li><span className="check">✓</span><span>A live alert pipeline of roughly <b>200+ alerts per day</b>, or a standing backlog of <b>500+ unworked alerts</b>.</span></li>
                  <li><span className="check">✓</span><span>An existing security operation — <b>in-house SOC or MSSP-managed</b>.</span></li>
                  <li><span className="check">✓</span><span><b>New to Strike48 Prospector Studio</b>, and not currently running agentic triage tooling.</span></li>
                  <li><span className="check">✓</span><span>A registered business able to complete the <b>14-day Proof of Value</b>, including a technical readout with the Strike48 and Cybertronium teams.</span></li>
                </ul>
                <p className="qual-note">Signing up does not guarantee participation — our team confirms eligibility against the official Strike48 challenge rules.</p>
              </div>
              <div className="card keep-card">
                <h3>What you keep, either way</h3>
                <ul className="keep-list">
                  <li><b>Full disposition ledger</b> — every alert, its verdict, and the evidence chain.</li>
                  <li><b>Escalation dossier</b> — true positives your queue hadn't reached, ready for response.</li>
                  <li><b>Noise analysis</b> — which detections generate the noise, quantified.</li>
                  <li><b>Tuning recommendations</b> — proposed rule changes to stop the backlog re-forming.</li>
                  <li><b>MITRE ATT&amp;CK view</b> — your alert landscape mapped to techniques.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TRUST STRIP ================= */}
        <div className="trust">
          <div className="wrap trust-grid">
            <div className="trust-item"><span className="trust-ico">S48</span><p><b>Strike48</b>Agentic Log Intelligence Platform</p></div>
            <div className="trust-item"><span className="trust-ico">MY</span><p><b>Cybertronium</b>NACSA CSSP-Licensed MSSP</p></div>
            <div className="trust-item"><span className="trust-ico">24×7</span><p><b>SOC / MDR</b>Round-the-clock operations — Malaysia</p></div>
            <div className="trust-item"><span className="trust-ico">ISO</span><p><b>ISO 17024</b>Accredited cybersecurity training</p></div>
          </div>
        </div>

        {/* ================= FORM ================= */}
        <section className="form-sec" id="register">
          <div className="wrap form-grid">
            <div className="form-side">
              <p className="sec-eyebrow">// Register</p>
              <h2>Take the challenge — your backlog against our agents.</h2>
              <p className="sec-sub">Tell us a few details and our team will reach out to confirm eligibility and schedule your free 14-day assessment.</p>
              <ul className="mini-steps">
                <li><span className="mono">DAY 0</span><span><b>Scoping call</b> — success criteria agreed in writing before we start.</span></li>
                <li><span className="mono">DAY 1</span><span><b>Read-only token issued</b> — agents connect, triage begins.</span></li>
                <li><span className="mono">DAY 14</span><span><b>Technical readout</b> — the full report, or the payout.</span></li>
              </ul>
            </div>

            <form className="card" id="challengeForm" noValidate onSubmit={handleSubmit}>
              {!isSuccess ? (
                <>
                  <div className="f-row">
                    <div className="f-field"><label htmlFor="first_name">First name <span className="req">*</span></label><input id="first_name" name="first_name" type="text" required autoComplete="given-name" /></div>
                    <div className="f-field"><label htmlFor="last_name">Last name <span className="req">*</span></label><input id="last_name" name="last_name" type="text" required autoComplete="family-name" /></div>
                  </div>
                  <div className="f-field full"><label htmlFor="email">Business email <span className="req">*</span></label><input id="email" name="email" type="email" placeholder="you@company.com" required autoComplete="email" /></div>
                  <div className="f-row">
                    <div className="f-field"><label htmlFor="phone">Phone <span className="req">*</span></label><input id="phone" name="phone" type="tel" placeholder="+60 12-345 6789" required autoComplete="tel" /></div>
                    <div className="f-field"><label htmlFor="job_title">Job title</label><input id="job_title" name="job_title" type="text" autoComplete="organization-title" /></div>
                  </div>
                  <div className="f-row">
                    <div className="f-field"><label htmlFor="company">Company <span className="req">*</span></label><input id="company" name="company" type="text" required autoComplete="organization" /></div>
                    <div className="f-field"><label htmlFor="country">Country <span className="req">*</span></label>
                      <select id="country" name="country" required defaultValue="">
                        <option value="" disabled>Select…</option>
                        <option>Malaysia</option><option>Singapore</option><option>Indonesia</option><option>Thailand</option><option>Philippines</option><option>Vietnam</option><option>Brunei</option><option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="f-row">
                    <div className="f-field"><label htmlFor="siem">SIEM / log platform</label>
                      <select id="siem" name="siem" defaultValue="">
                        <option value="" disabled>Select…</option>
                        <option>Devo</option><option>Splunk</option><option>Microsoft Sentinel</option><option>CrowdStrike (LogScale / NG-SIEM)</option><option>Elastic Security</option><option>IBM QRadar</option><option>Google SecOps (Chronicle)</option><option>Sumo Logic</option><option>Other / multiple</option>
                      </select>
                    </div>
                    <div className="f-field"><label htmlFor="alerts">Approx. alerts per day</label><input id="alerts" name="alerts" type="text" placeholder="e.g. 400" /></div>
                  </div>
                  <div className="f-field full"><label htmlFor="backlog">Current backlog size (estimate)</label><input id="backlog" name="backlog" type="text" placeholder="e.g. 2,000 unworked alerts" /></div>
                  <div className="f-field full"><label htmlFor="notes">Anything else we should know?</label><textarea id="notes" name="notes" placeholder="SOC setup, current tooling, pain points, timeline…"></textarea></div>
                  <label className="consent"><input type="checkbox" id="consent" required />
                    <span>I agree to be contacted by Cybertronium and Strike48 regarding this free alert backlog assessment, and I consent to the processing of my details for this purpose.</span>
                  </label>
                  <button className="btn btn-gold form-cta" type="submit">Claim my free backlog assessment →</button>
                  <p className="form-note">Free · limited slots · read-only access only</p>
                </>
              ) : (
                <div className="form-success" id="formSuccess">
                  <div className="success-ico">✓</div>
                  <p className="big">Challenge accepted.</p>
                  <p>Thanks — our team will reach out within one business day to confirm eligibility and book your scoping call.</p>
                </div>
              )}
            </form>
          </div>
        </section>

        {/* ================= FINE PRINT ================= */}
        <div className="fine">
          <div className="wrap">
            <p>The US$10,000 Alert Backlog Challenge is a promotion by Strike48, Inc., delivered locally by Cybertronium as an authorized Strike48 partner. Eligibility: production SIEM environments generating approximately 200 or more alerts per day, or holding a standing backlog of 500 or more unworked alerts; participants must be new to Strike48 Prospector Studio and complete the 14-day Proof of Value process, including a technical readout. The assessment operates exclusively through scoped, read-only API access; no changes are made to production systems. Success criteria are agreed in writing prior to commencement. Signing up does not guarantee participation. Full rules at the official Strike48 challenge page. Strike48, Inc. reserves the right to modify or terminate this promotion at any time, at its sole discretion.</p>
          </div>
        </div>

      </main>

      <footer>
        <div className="wrap foot-in">
          <div className="foot-left">
            <Link href="/" aria-label="Cybertronium home" style={{ display: 'flex', alignItems: 'center' }}>
              <Image src={cyberLogo} alt="Cybertronium" width={200} height={40} style={{ height: '40px', width: 'auto' }} />
            </Link>
            <span className="foot-sep">|</span>
            <p>www.cybertronium.com · +603-2201-3393</p>
          </div>
          <div className="foot-right" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <p>www.strike48.com · Agentic Log Intelligence</p>
            <span className="foot-sep">|</span>
            <span className="logo-chip sm"><img className="s48-logo" src="data:image/png;base64,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" alt="Strike48" width="637" height="163" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AgenticAISOCEvent;
