"use client";
import { useState, useRef, useEffect, CSSProperties } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import emailjs from '@emailjs/browser';

const TEAL = "#00C9A7";
const TEAL_DARK = "#00a07a";
const NAVY0 = "#010812";
const NAVY1 = "#030B18";
const NAVY2 = "#061425";

// ── EmailJS Config ────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_pklyrv6";
const EMAILJS_TEMPLATE_ID = "template_de6srqh";
const EMAILJS_PUBLIC_KEY = "oY8s46fogw6l5q1b4";

// ── Validation ────────────────────────────────────────────────────────────────
const validateName = (name: string): { isValid: boolean; message: string } => {
  if (!name.trim()) return { isValid: false, message: "This field is required" };
  if (!/^[A-Za-z\s]{2,30}$/.test(name.trim())) return { isValid: false, message: "Only letters (A-Z, a-z) allowed, minimum 2 characters" };
  return { isValid: true, message: "" };
};
const validatePhone = (phone: string, countryCode: string): { isValid: boolean; message: string } => {
  const cleanPhone = phone.replace(/\D/g, '');
  if (!cleanPhone) return { isValid: false, message: "Phone number is required" };
  const phoneRules: { [key: string]: { min: number; max: number; message: string } } = {
    "+1": { min: 10, max: 10, message: "US/Canada phone number must be exactly 10 digits" },
    "+44": { min: 10, max: 11, message: "UK phone number must be 10-11 digits" },
    "+91": { min: 10, max: 10, message: "Indian phone number must be exactly 10 digits" },
    "+1us": { min: 10, max: 10, message: "US phone number must be exactly 10 digits" },
  };
  const rule = phoneRules[countryCode] || phoneRules["+1"];
  if (cleanPhone.length < rule.min) return { isValid: false, message: `${rule.message} (got ${cleanPhone.length} digits)` };
  if (cleanPhone.length > rule.max) return { isValid: false, message: `${rule.message} (got ${cleanPhone.length} digits)` };
  if (!/^\d+$/.test(cleanPhone)) return { isValid: false, message: "Phone number should only contain numbers" };
  return { isValid: true, message: "" };
};
const validateEmail = (email: string): { isValid: boolean; message: string } => {
  if (!email.trim()) return { isValid: false, message: "Email is required" };
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) return { isValid: false, message: "Please enter a valid email (e.g., name@domain.com)" };
  if (email.includes(' ')) return { isValid: false, message: "Email should not contain spaces" };
  return { isValid: true, message: "" };
};
const validateMessage = (message: string): { isValid: boolean; message: string } => {
  if (!message.trim()) return { isValid: false, message: "Message is required" };
  if (message.trim().length < 10) return { isValid: false, message: "Message must be at least 10 characters" };
  if (message.trim().length > 1000) return { isValid: false, message: "Message must be less than 1000 characters" };
  if (/^[\d\W]+$/.test(message.trim())) return { isValid: false, message: "Please provide a meaningful message (not just numbers or symbols)" };
  return { isValid: true, message: "" };
};
const validateService = (service: string): { isValid: boolean; message: string } => {
  if (!service) return { isValid: false, message: "Please select a service of interest" };
  return { isValid: true, message: "" };
};

// ── Email format check (ProfessionalEmailField) ───────────────────────────────
const isEmailFormatValid = (v: string) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v) && !v.includes(" ");

// ── Professional Email Field ──────────────────────────────────────────────────
function ProfessionalEmailField({
  value, onChange, onBlur, hasError, errorMessage,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  hasError: boolean;
  errorMessage: string;
}) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const showDomainHints = focused && value.includes("@") && !value.split("@")[1];
  const commonDomains = ["gmail.com", "outlook.com", "yahoo.com"];
  const isValid = isEmailFormatValid(value);
  const appendDomain = (domain: string) => {
    onChange({ target: { value: `${value.split("@")[0]}@${domain}` } } as React.ChangeEvent<HTMLInputElement>);
    inputRef.current?.focus();
  };
  return (
    <div className="ef-wrap">
      <input ref={inputRef}
        className={["ef-input h-inp", hasError ? "ef-error" : "", isValid && !hasError && value ? "ef-valid" : ""].filter(Boolean).join(" ")}
        type="email" placeholder=" " value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => { setFocused(false); onBlur(); }}
        autoComplete="email" inputMode="email" />
      <label className="ef-label">Business Email *</label>
      <span className="ef-icon">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
          className={focused ? "ef-icon-svg focused" : "ef-icon-svg"}
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" />
        </svg>
      </span>
      <span className="ef-tick">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={TEAL} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
      <span className="ef-line" />
      <span className={`ef-chips${showDomainHints ? " ef-chips-show" : ""}`}>
        {commonDomains.map((d) => (
          <button key={d} type="button" className="ef-chip" onMouseDown={(e) => { e.preventDefault(); appendDomain(d); }}>{d}</button>
        ))}
      </span>
      {hasError && errorMessage && (
        <p className="error-message ef-err-msg">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {errorMessage}
        </p>
      )}
    </div>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return [ref, inView] as const;
}
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [ref, inView] = useInView();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let cur = 0; const step = to / 60;
    const t = setInterval(() => { cur += step; if (cur >= to) { setV(to); clearInterval(t); } else setV(Math.round(cur)); }, 16);
    return () => clearInterval(t);
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

// ── Styles ────────────────────────────────────────────────────────────────────
const inp: CSSProperties = { width: "100%", borderRadius: 9, padding: "13px 16px", fontSize: 14, fontFamily: "'Poppins', sans-serif", outline: "none", boxSizing: "border-box", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", transition: "border-color .2s" };
const errorInputStyle: CSSProperties = { ...inp, borderColor: "#ff4444", background: "rgba(255,68,68,.1)" };
const errorMessageStyle: CSSProperties = { color: "#ff4444", fontSize: "11px", marginTop: "4px", marginBottom: "0", fontFamily: "'Poppins', sans-serif" };

// ── Constants ─────────────────────────────────────────────────────────────────
const TRUST_BADGES = [
  { icon: "🔵", label: "Google Partner" }, { icon: "🏆", label: "ISO Certified" },
  { icon: "🔒", label: "GDPR Compliant" }, { icon: "🍁", label: "PIPEDA Compliant" },
  { icon: "⭐", label: "Clutch Top Agency" },
];
const SERVICES = [
  "CRM Development", "ERP Development", "Web Development", "Mobile App Development",
  "Marketing Automation", "Salesforce CRM", "Digital Transformation", "SEO & Digital Marketing",
];

// ── Main Component ────────────────────────────────────────────────────────────
export default function HeroSection() {
  const router = useRouter();
  const [form, setForm] = useState({ fname: "", lname: "", cc: "+1", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [cursorBig, setCursorBig] = useState(false);
  const [errors, setErrors] = useState({ fname: "", lname: "", phone: "", email: "", service: "", message: "" });
  const [touched, setTouched] = useState({ fname: false, lname: false, phone: false, email: false, service: false, message: false });

  useEffect(() => { emailjs.init(EMAILJS_PUBLIC_KEY); }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => { window.removeEventListener("resize", handleResize); window.removeEventListener("mousemove", move); };
  }, []);

  const isMobile = windowWidth > 0 && windowWidth <= 480;
  const isSmall = windowWidth > 480 && windowWidth <= 600;
  const isTablet = windowWidth > 600 && windowWidth <= 960;
  const isLaptop = windowWidth > 960 && windowWidth <= 1280;
  const isAnyMobile = windowWidth > 0 && windowWidth <= 600;

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field, form[field as keyof typeof form]);
  };
  const validateField = (field: string, value: string): boolean => {
    switch (field) {
      case "fname": { const r = validateName(value); setErrors(p => ({ ...p, fname: r.message })); return r.isValid; }
      case "lname": { if (value) { const r = validateName(value); setErrors(p => ({ ...p, lname: r.message })); return r.isValid; } setErrors(p => ({ ...p, lname: "" })); return true; }
      case "phone": { const r = validatePhone(value, form.cc); setErrors(p => ({ ...p, phone: r.message })); return r.isValid; }
      case "email": { const r = validateEmail(value); setErrors(p => ({ ...p, email: r.message })); return r.isValid; }
      case "service": { const r = validateService(value); setErrors(p => ({ ...p, service: r.message })); return r.isValid; }
      case "message": { const r = validateMessage(value); setErrors(p => ({ ...p, message: r.message })); return r.isValid; }
      default: return true;
    }
  };
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    let value = e.target.value;

    // STRICT INPUT FILTERING - Blocks invalid characters immediately
    if (k === "fname" || k === "lname") {
      // Allow ONLY letters (A-Z, a-z) and spaces
      value = value.replace(/[^A-Za-z\s]/g, '');
      // Prevent multiple consecutive spaces
      value = value.replace(/\s+/g, ' ');
      // Prevent leading spaces
      if (value.startsWith(' ')) value = value.trimStart();
    }
    else if (k === "phone") {
      // Allow ONLY digits (0-9)
      value = value.replace(/[^\d]/g, '');
      // Limit phone length based on country code
      let maxLength = 10; // Default for US/Canada/India
      if (form.cc === "+44") maxLength = 11; // UK allows 10-11 digits
      if (value.length > maxLength) {
        value = value.slice(0, maxLength);
      }
    }

    setForm(f => ({ ...f, [k]: value }));
    if (touched[k as keyof typeof touched]) validateField(k, value);
  };
  const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm(f => ({ ...f, email: value }));
    if (touched.email) validateField("email", value);
  };
  const validateForm = (): boolean => {
    setTouched({ fname: true, lname: true, phone: true, email: true, service: true, message: true });
    return (
      validateField("fname", form.fname) &&
      (form.lname ? validateField("lname", form.lname) : true) &&
      validateField("phone", form.phone) &&
      validateField("email", form.email) &&
      validateField("service", form.service) &&
      validateField("message", form.message)
    );
  };
  const resetForm = () => {
    setForm({ fname: "", lname: "", cc: "+1", phone: "", email: "", service: "", message: "" });
    setErrors({ fname: "", lname: "", phone: "", email: "", service: "", message: "" });
    setTouched({ fname: false, lname: false, phone: false, email: false, service: false, message: false });
  };

  // ── handleSubmit ──────────────────────────────────────────────────────────
  // NOTE: Every key here MUST match a {{variable}} in the EmailJS template HTML
  const handleSubmit = async () => {
    if (!validateForm()) {
      const firstError = document.querySelector('.error-message');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setIsSubmitting(true);
    try {
      const templateParams = {
        // ── NEW template variables (match emailjs-template.html exactly) ──
        first_name: form.fname,
        last_name: form.lname || "—",
        email: form.email,
        phone: `${form.cc} ${form.phone}`,
        service: form.service,
        message: form.message,
        submission_time: new Date().toLocaleString('en-US', {
          weekday: 'short', year: 'numeric', month: 'short',
          day: 'numeric', hour: '2-digit', minute: '2-digit',
        }),
        // ── Legacy variables kept for the Subject line {{title}} / {{name}} ──
        name: `${form.fname} ${form.lname}`.trim(),
        title: `New Consultation Request from ${form.fname} ${form.lname}`.trim(),
        reply_to: form.email,
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      setSubmitted(true);
      resetForm();
      setSubmitted(true); // keep success state after resetForm clears it
    } catch (error: any) {
      console.error("EmailJS error:", error);
      alert("Failed to send your request. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookCall = () => { router.push('/contact'); };

  // ── Responsive helpers ────────────────────────────────────────────────────
  const getHeroPadding = () => isMobile ? "10px 14px 16px" : isSmall ? "16px 18px 22px" : isTablet ? "44px 24px 44px" : isLaptop ? "60px 36px 56px" : "90px 48px 80px";
  const getTitleSize = () => isMobile ? "clamp(20px,5.8vw,25px)" : isSmall ? "clamp(24px,5.5vw,30px)" : isTablet ? "clamp(32px,5vw,42px)" : isLaptop ? "clamp(38px,4vw,46px)" : "clamp(46px,4vw,58px)";
  const getTitleMB = () => isMobile ? 6 : isSmall ? 8 : isTablet ? 18 : 22;
  const getBadgeMB = () => isMobile ? 7 : isSmall ? 9 : isTablet ? 20 : 26;
  const getSubtextMB = () => isMobile ? 12 : isSmall ? 14 : isTablet ? 28 : 32;
  const getCTAMB = () => isMobile ? 12 : isSmall ? 14 : isTablet ? 30 : 34;
  const getSubtextSize = () => isMobile ? 11.5 : isSmall ? 13 : isTablet ? 14.5 : 16;
  const getFormPadding = () => isMobile ? "14px 13px" : isSmall ? "20px 18px" : isTablet ? "28px 24px" : "34px 30px";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=DM+Mono:wght@400;500&display=swap');
        @media (min-width:961px){*{cursor:none !important;}}
        .nnc-cursor-dot{position:fixed;width:10px;height:10px;border-radius:50%;background:${TEAL};pointer-events:none;z-index:99999;transform:translate(-50%,-50%);mix-blend-mode:difference;transition:width .15s,height .15s;}
        .nnc-cursor-ring{position:fixed;width:36px;height:36px;border-radius:50%;border:2px solid ${TEAL};pointer-events:none;z-index:99998;transform:translate(-50%,-50%);opacity:.55;transition:width .25s,height .25s,border-color .25s,left .08s,top .08s;}
        .nnc-cursor-ring.big{width:56px;height:56px;border-color:rgba(0,201,167,.4);}
        @keyframes orbPulse{0%,100%{opacity:.35;transform:scale(1)}50%{opacity:.8;transform:scale(1.1)}}
        @keyframes shimmer{from{left:-100%}to{left:120%}}
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(1.6)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        @keyframes badgeIn{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
        .hero-fade{animation:fadeUp .65s ease both;}
        .hero-fade-1{animation-delay:.08s;}.hero-fade-2{animation-delay:.2s;}
        .hero-fade-3{animation-delay:.34s;}.hero-fade-4{animation-delay:.48s;}
        .hero-fade-5{animation-delay:.62s;}
        .pulse-dot{animation:pulse 2s ease-in-out infinite;}
        .h-inp:focus{border-color:rgba(0,201,167,.7) !important;box-shadow:0 0 0 3px rgba(0,201,167,.08);}
        .h-inp option{background:#0a1f38;color:#fff;}
        .hero-btn-primary{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:13px 24px;border-radius:10px;background:linear-gradient(135deg,${TEAL},${TEAL_DARK});color:#000;font-weight:700;font-size:13.5px;font-family:'Poppins',sans-serif;border:none;transition:transform .2s,box-shadow .2s;white-space:nowrap;cursor:pointer;}
        .hero-btn-primary:hover{transform:translateY(-2px);box-shadow:0 14px 40px rgba(0,201,167,.4);}
        .hero-btn-outline{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:13px 24px;border-radius:10px;background:transparent;border:1.5px solid rgba(0,201,167,.4);color:${TEAL};font-weight:600;font-size:13.5px;font-family:'Poppins',sans-serif;transition:border-color .2s,background .2s;white-space:nowrap;cursor:pointer;}
        .hero-btn-outline:hover{border-color:${TEAL};background:rgba(0,201,167,.07);}
        .form-cta{width:100%;padding:13px;border-radius:10px;background:linear-gradient(135deg,${TEAL},${TEAL_DARK});border:none;color:#000;font-weight:700;font-size:14px;font-family:'Poppins',sans-serif;transition:transform .2s,box-shadow .2s;cursor:pointer;}
        .form-cta:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 12px 36px rgba(0,201,167,.4);}
        .form-cta:disabled{opacity:0.7;cursor:not-allowed;}
        .trust-badge{display:inline-flex;align-items:center;gap:5px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:100px;padding:5px 11px;font-size:11px;color:rgba(255,255,255,.7);font-weight:500;font-family:'Poppins',sans-serif;transition:border-color .2s,background .2s;animation:badgeIn .5s ease both;}
        .trust-badge:hover{border-color:rgba(0,201,167,.4);background:rgba(0,201,167,.05);color:#fff;}
        /* ── Professional Email Field ── */
        .ef-wrap{position:relative;}
        .ef-input{width:100% !important;padding:22px 42px 8px 44px !important;border-radius:12px !important;font-size:13.5px !important;font-family:'DM Mono','Courier New',monospace !important;font-weight:400 !important;letter-spacing:.03em !important;color:#fff !important;background:rgba(0,201,167,.04) !important;border:1.5px solid rgba(0,201,167,.18) !important;outline:none !important;box-sizing:border-box !important;transition:border-color .22s,background .22s,box-shadow .22s !important;caret-color:${TEAL} !important;}
        .ef-input::placeholder{color:transparent !important;}
        .ef-input:hover{border-color:rgba(0,201,167,.35) !important;background:rgba(0,201,167,.06) !important;}
        .ef-input:focus{border-color:rgba(0,201,167,.75) !important;background:rgba(0,201,167,.08) !important;box-shadow:0 0 0 3px rgba(0,201,167,.10),0 0 24px rgba(0,201,167,.07) !important;}
        .ef-input.ef-error{border-color:#ff4444 !important;background:rgba(255,68,68,.07) !important;box-shadow:0 0 0 3px rgba(255,68,68,.08) !important;}
        .ef-input.ef-valid{border-color:rgba(0,201,167,.45) !important;}
        .ef-label{position:absolute;left:44px;top:50%;transform:translateY(-50%);font-family:'Poppins',sans-serif;font-size:13px;font-weight:500;color:rgba(255,255,255,.35);pointer-events:none;transition:top .22s cubic-bezier(.4,0,.2,1),font-size .22s cubic-bezier(.4,0,.2,1),color .22s cubic-bezier(.4,0,.2,1);white-space:nowrap;}
        .ef-input:focus ~ .ef-label,.ef-input:not(:placeholder-shown) ~ .ef-label{top:11px;font-size:9px;font-weight:700;color:${TEAL};letter-spacing:.1em;text-transform:uppercase;}
        .ef-input.ef-error ~ .ef-label{color:#ff6b6b;}
        .ef-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);display:flex;align-items:center;pointer-events:none;}
        .ef-icon-svg{stroke:rgba(255,255,255,.3);transition:stroke .22s;}
        .ef-input:focus ~ .ef-icon .ef-icon-svg,.ef-icon-svg.focused{stroke:${TEAL};}
        .ef-tick{position:absolute;right:14px;top:50%;transform:translateY(-50%) scale(0);opacity:0;transition:transform .25s cubic-bezier(.34,1.56,.64,1),opacity .2s;pointer-events:none;}
        .ef-input.ef-valid ~ .ef-tick{transform:translateY(-50%) scale(1);opacity:1;}
        .ef-line{position:absolute;bottom:0;left:50%;width:0;height:2px;border-radius:0 0 12px 12px;background:linear-gradient(90deg,transparent,${TEAL},transparent);transition:width .3s cubic-bezier(.4,0,.2,1),left .3s cubic-bezier(.4,0,.2,1);pointer-events:none;}
        .ef-input:focus ~ .ef-line{width:100%;left:0;}
        .ef-chips{position:absolute;right:42px;top:50%;transform:translateY(-50%);display:flex;gap:4px;pointer-events:none;opacity:0;transition:opacity .2s;}
        .ef-chips-show{opacity:1 !important;pointer-events:auto !important;}
        .ef-chip{font-family:'DM Mono',monospace;font-size:10px;padding:2px 7px;border-radius:100px;background:rgba(0,201,167,.1);border:1px solid rgba(0,201,167,.25);color:rgba(0,201,167,.75);cursor:pointer;transition:background .15s,color .15s;}
        .ef-chip:hover{background:rgba(0,201,167,.22);color:${TEAL};}
        .ef-err-msg{display:flex !important;align-items:center;gap:5px;color:#ff6b6b !important;font-size:11px !important;margin-top:5px !important;padding-left:4px;font-family:'Poppins',sans-serif !important;animation:fadeUp .2s ease both;}
        /* ── Responsive ── */
        @media (max-width:480px){
          .hero-section{padding-top:0 !important;}
          .hero-grid{grid-template-columns:1fr !important;gap:16px !important;}
          .hero-form-col{padding:14px 13px !important;border-radius:12px !important;}
          .hero-btns{flex-direction:column !important;gap:8px !important;width:100% !important;}
          .hero-btn-primary,.hero-btn-outline{width:100% !important;font-size:12.5px !important;padding:11px 14px !important;}
          .trust-badge{font-size:9px !important;padding:3px 7px !important;gap:3px !important;}
          .phone-row{flex-direction:column !important;gap:5px !important;}
          .form-grid-2{grid-template-columns:1fr !important;}
          .phone-grid{grid-template-columns:1fr !important;}
          .hero-badge-text{font-size:7.5px !important;letter-spacing:0.05em !important;}
          .h-inp{padding:10px 12px !important;font-size:13px !important;}
          .ef-input{padding:20px 14px 7px 40px !important;font-size:12.5px !important;border-radius:10px !important;}
          .ef-label{font-size:12.5px;left:40px;}
          .ef-input:focus ~ .ef-label,.ef-input:not(:placeholder-shown) ~ .ef-label{top:9px;font-size:9px;}
          .ef-icon{left:12px;}
        }
        @media (min-width:481px) and (max-width:600px){
          .hero-grid{grid-template-columns:1fr !important;gap:18px !important;}
          .hero-form-col{padding:20px 18px !important;}
          .hero-btns{flex-direction:column !important;gap:9px !important;width:100% !important;}
          .hero-btn-primary,.hero-btn-outline{width:100% !important;font-size:13px !important;padding:12px 18px !important;}
          .trust-badge{font-size:10px !important;padding:4px 9px !important;}
          .phone-row{flex-direction:column !important;gap:6px !important;}
          .form-grid-2{grid-template-columns:1fr !important;}
          .phone-grid{grid-template-columns:80px 1fr !important;}
        }
        @media (min-width:601px) and (max-width:960px){
          .hero-grid{grid-template-columns:1fr !important;gap:36px !important;}
          .hero-form-col{max-width:540px !important;margin:0 auto !important;}
          .hero-btns{flex-direction:row !important;gap:14px !important;}
          .form-grid-2{grid-template-columns:1fr 1fr !important;}
          .phone-grid{grid-template-columns:90px 1fr !important;}
        }
        @media (min-width:961px) and (max-width:1280px){
          .hero-grid{grid-template-columns:1fr 400px !important;gap:40px !important;}
          .hero-btn-primary,.hero-btn-outline{padding:13px 22px !important;font-size:13.5px !important;}
        }
        @media (max-width:960px){.nnc-cursor-dot,.nnc-cursor-ring{display:none !important;}}
      `}</style>

      {!isAnyMobile && !isTablet && (
        <>
          <div className="nnc-cursor-dot" style={{ left: cursor.x, top: cursor.y }} />
          <div className={`nnc-cursor-ring${cursorBig ? " big" : ""}`} style={{ left: cursor.x, top: cursor.y }} />
        </>
      )}

      <section className="hero-section" style={{ position: "relative", minHeight: isAnyMobile ? "auto" : "100vh", display: "flex", alignItems: isMobile ? "flex-start" : "center", overflow: "hidden", background: `linear-gradient(150deg,${NAVY0} 0%,${NAVY1} 55%,${NAVY2} 100%)`, fontFamily: "'Poppins',sans-serif" }}>

        {!isAnyMobile && [
          { left: "2%", top: "5%", size: isLaptop ? 580 : 680, color: "rgba(0,201,167,.07)", dur: 8 },
          { left: "60%", top: "50%", size: isLaptop ? 380 : 480, color: "rgba(31,209,181,.05)", dur: 10 },
          { left: "40%", top: "80%", size: isLaptop ? 240 : 290, color: "rgba(0,160,122,.06)", dur: 6 },
        ].map((o, i) => (
          <div key={i} style={{ position: "absolute", left: o.left, top: o.top, width: o.size, height: o.size, borderRadius: "50%", background: `radial-gradient(circle,${o.color} 0%,transparent 65%)`, animation: `orbPulse ${o.dur}s ease-in-out infinite`, animationDelay: `${i * 2}s`, pointerEvents: "none", zIndex: 0 }} />
        ))}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", backgroundImage: `linear-gradient(rgba(0,201,167,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.03) 1px,transparent 1px)`, backgroundSize: isAnyMobile ? "34px 34px" : "58px 58px" }} />

        <div className="hero-inner" style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: 1320, margin: "0 auto", padding: getHeroPadding() }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: isAnyMobile || isTablet ? "1fr" : "1fr 430px", gap: isMobile ? 16 : isSmall ? 18 : isTablet ? 36 : 56, alignItems: "center" }}>

            {/* ── LEFT ── */}
            <div>
              <div className="hero-fade hero-fade-1" style={{ display: "inline-flex", alignItems: "center", gap: isMobile ? 5 : 8, background: "rgba(0,201,167,.08)", border: "1px solid rgba(0,201,167,.28)", borderRadius: 100, padding: isMobile ? "3px 9px" : isSmall ? "4px 11px" : "7px 18px", marginBottom: getBadgeMB() }}>
                <span className="pulse-dot" style={{ width: isMobile ? 5 : 6, height: isMobile ? 5 : 6, borderRadius: "50%", background: TEAL, display: "block", flexShrink: 0 }} />
                <span className="hero-badge-text" style={{ color: TEAL, fontSize: isMobile ? 7.5 : isSmall ? 9 : 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase" }}>CANADA · USA · UK — POWERED BY INDIA</span>
              </div>
              <h1 className="hero-fade hero-fade-2" style={{ fontSize: getTitleSize(), fontWeight: 900, lineHeight: isMobile ? 1.18 : 1.1, marginBottom: getTitleMB(), color: "#fff", letterSpacing: "-0.02em" }}>
                Build Once.{" "}
                <span style={{ background: `linear-gradient(135deg,${TEAL},#1fd1b5)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Scale Everywhere.</span>{" "}
                Automate Everything.
              </h1>
              <p className="hero-fade hero-fade-3" style={{ color: "rgba(255,255,255,.62)", fontSize: getSubtextSize(), lineHeight: isMobile ? 1.6 : 1.8, maxWidth: isAnyMobile ? "100%" : 580, marginBottom: getSubtextMB() }}>
                We design and develop custom CRM, ERP, web, and mobile systems that automate your operations and accelerate revenue — for businesses across Canada, USA, and the UK. Backed by{" "}
                <span style={{ color: TEAL, fontWeight: 600 }}>10+ years of deep tech expertise</span>{" "}
                from India&apos;s most trusted digital studio.
              </p>
              <div className="hero-btns hero-fade hero-fade-4" style={{ display: "flex", gap: isMobile ? 8 : isSmall ? 9 : 14, flexDirection: isAnyMobile ? "column" : "row", marginBottom: getCTAMB() }}
                onMouseEnter={() => !isAnyMobile && !isTablet && setCursorBig(true)}
                onMouseLeave={() => !isAnyMobile && !isTablet && setCursorBig(false)}>
                <button className="hero-btn-primary" onClick={handleBookCall} style={{ width: isAnyMobile ? "100%" : "auto" }}><span>📅</span> Book a Free Strategy Call</button>
                <Link href="/#aiPowered" style={{ textDecoration: "none", width: isAnyMobile ? "100%" : "auto" }}>
                  <button className="hero-btn-outline" style={{ width: isAnyMobile ? "100%" : "auto" }}>Explore Our Solutions →</button>
                </Link>
              </div>
              <div className="hero-fade hero-fade-5" style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 4 : 6, justifyContent: isAnyMobile ? "center" : "flex-start", marginBottom: isMobile ? 10 : 0 }}>
                {TRUST_BADGES.map((b, i) => <span key={b.label} className="trust-badge" style={{ animationDelay: `${.62 + i * .07}s` }}>{b.icon} {b.label}</span>)}
              </div>
              {/* <div className="phone-row hero-fade hero-fade-5" style={{ display: "flex", gap: isMobile ? 5 : isSmall ? 7 : 20, marginTop: isMobile ? 10 : 20, flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center" }}>
                {[{ flag: "🇨🇦", label: "CA:", num: "+1 647-XXX-XXXX" }, { flag: "🇬🇧", label: "UK:", num: "+44 20-XXXX-XXXX" }].map(p => (
                  <a key={p.num} href={`tel:${p.num}`} style={{ display: "inline-flex", alignItems: "center", gap: isMobile ? 4 : 6, color: "rgba(255,255,255,.5)", fontSize: isMobile ? 11 : isSmall ? 12 : 13, textDecoration: "none", fontWeight: 500, transition: "color .2s" }}
                    onMouseEnter={e => !isAnyMobile && !isTablet && (e.currentTarget.style.color = TEAL)}
                    onMouseLeave={e => !isAnyMobile && !isTablet && (e.currentTarget.style.color = "rgba(255,255,255,.5)")}>
                    <span>{p.flag}</span><span style={{ color: "rgba(255,255,255,.3)" }}>{p.label}</span><span>{p.num}</span>
                  </a>
                ))}
              </div> */}
            </div>

            {/* ── RIGHT — FORM ── */}
            <div className="hero-form-col" style={{ background: "rgba(6,20,37,.92)", border: "1px solid rgba(0,201,167,.18)", borderRadius: isMobile ? 12 : 20, padding: getFormPadding(), backdropFilter: "blur(24px)", boxShadow: "0 0 80px rgba(0,201,167,.07)", position: "relative", overflow: "hidden", width: "100%", maxWidth: isAnyMobile ? "100%" : isTablet ? "520px" : "430px", margin: "0 auto" }}>
              <div style={{ position: "absolute", top: 0, left: 0, height: 2, width: "60%", background: "linear-gradient(90deg,transparent,#00C9A7,transparent)", animation: "shimmer 3s linear infinite" }} />
              <p style={{ color: TEAL, fontSize: isMobile ? 9 : 10.5, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", marginBottom: 3 }}>Free Strategy Consultation</p>
              <h3 style={{ fontWeight: 700, fontSize: isMobile ? 16 : 20, marginBottom: 3, color: "#fff" }}>Get a Free Consultation</h3>
              <p style={{ color: "rgba(255,255,255,.38)", fontSize: isMobile ? 10.5 : 12, marginBottom: isMobile ? 10 : 18 }}>Response within 24 hours · No commitment</p>

              {submitted ? (
                <div style={{ textAlign: "center", padding: isMobile ? "14px 0" : "36px 0" }}>
                  <div style={{ fontSize: isMobile ? 36 : 50, marginBottom: 10 }}>✅</div>
                  <p style={{ color: TEAL, fontSize: isMobile ? 15 : 18, fontWeight: 700, marginBottom: 5 }}>We&apos;ll be in touch!</p>
                  <p style={{ color: "rgba(255,255,255,.4)", fontSize: isMobile ? 11 : 12.5 }}>Expect a reply within 24 business hours.</p>
                  <button onClick={() => { resetForm(); setSubmitted(false); }} className="form-cta" style={{ marginTop: 12, width: "auto", padding: "10px 20px" }}>Send Another</button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 8 : 10 }}>
                  {/* Name */}
                  <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 8 : 10 }}>
                    <div>
                      <input className="h-inp" style={touched.fname && errors.fname ? errorInputStyle : inp} placeholder="First Name *" value={form.fname} onChange={set("fname")} onBlur={() => handleBlur("fname")} />
                      {touched.fname && errors.fname && <p className="error-message" style={errorMessageStyle}>{errors.fname}</p>}
                    </div>
                    <div>
                      <input className="h-inp" style={touched.lname && errors.lname ? errorInputStyle : inp} placeholder="Last Name" value={form.lname} onChange={set("lname")} onBlur={() => handleBlur("lname")} />
                      {touched.lname && errors.lname && <p className="error-message" style={errorMessageStyle}>{errors.lname}</p>}
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="phone-grid" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "88px 1fr", gap: isMobile ? 8 : 10 }}>
                    <select className="h-inp" style={{ ...inp, padding: "13px 8px" }} value={form.cc} onChange={set("cc")}>
                      <option value="+1">🇨🇦 +1 (Canada/US)</option>
                      <option value="+44">🇬🇧 +44 (UK)</option>
                      <option value="+91">🇮🇳 +91 (India)</option>
                      <option value="+1us">🇺🇸 +1 (US)</option>
                    </select>
                    <div>
                      <input className="h-inp" style={touched.phone && errors.phone ? errorInputStyle : inp} placeholder="Phone Number *" value={form.phone} onChange={set("phone")} onBlur={() => handleBlur("phone")} />
                      {touched.phone && errors.phone && <p className="error-message" style={errorMessageStyle}>{errors.phone}</p>}
                    </div>
                  </div>
                  {/* Email */}
                  <ProfessionalEmailField value={form.email} onChange={setEmail} onBlur={() => handleBlur("email")} hasError={!!(touched.email && errors.email)} errorMessage={errors.email} />
                  {/* Service */}
                  <div>
                    <select className="h-inp" style={{ ...inp, color: form.service ? "#fff" : "rgba(255,255,255,.35)", ...(touched.service && errors.service ? errorInputStyle : {}) }} value={form.service} onChange={set("service")} onBlur={() => handleBlur("service")}>
                      <option value="">Service of Interest *</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {touched.service && errors.service && <p className="error-message" style={errorMessageStyle}>{errors.service}</p>}
                  </div>
                  {/* Message */}
                  <div>
                    <textarea className="h-inp" style={{ ...inp, resize: "vertical", minHeight: isMobile ? 60 : 76, ...(touched.message && errors.message ? errorInputStyle : {}) }} rows={3} placeholder="Tell us about your project… *" value={form.message} onChange={set("message")} onBlur={() => handleBlur("message")} />
                    {touched.message && errors.message && <p className="error-message" style={errorMessageStyle}>{errors.message}</p>}
                  </div>
                  <button className="form-cta" onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "🚀 Get Free Consultation"}
                  </button>
                  <p style={{ textAlign: "center", color: "rgba(255,255,255,.22)", fontSize: isMobile ? 9 : 11, marginTop: 1 }}>🔒 100% Secure · GDPR &amp; PIPEDA Compliant</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}