

// "use client";
// import { useState, CSSProperties } from "react";
// import { T } from "./tokens";
// import Reveal from "./Reveal";

// const CONTACTS = [
//   { label: "USA",    value: "+1 631-XXX-XXXX" },
//   { label: "Canada", value: "+1 647-XXX-XXXX" },
//   { label: "UK",     value: "+44 20-XXX-XXXX" },
//   { label: "Email",  value: "hello@nncdigital.com" },
// ];

// const DIAL_CODES = [
//   { flag: "🇺🇸", code: "+1",  country: "USA" },
//   { flag: "🇨🇦", code: "+1",  country: "CA" },
//   { flag: "🇬🇧", code: "+44", country: "UK" },
//   { flag: "🇦🇺", code: "+61", country: "AU" },
//   { flag: "🇮🇳", code: "+91", country: "IN" },
//   { flag: "🇦🇪", code: "+971",country: "UAE" },
// ];

// const inpW: CSSProperties = {
//   width: "100%", borderRadius: 8, padding: "12px 16px", fontSize: 13.5,
//   fontFamily: "'Outfit',sans-serif", outline: "none", boxSizing: "border-box",
//   background: "rgba(0,0,0,.04)", border: "1px solid rgba(0,0,0,.12)",
//   color: "#030B18", transition: "border-color .2s",
// };

// const selW: CSSProperties = {
//   borderRadius: 8, padding: "12px 10px", fontSize: 13.5,
//   fontFamily: "'Outfit',sans-serif", outline: "none",
//   background: "rgba(0,0,0,.04)", border: "1px solid rgba(0,0,0,.12)",
//   color: "#030B18", cursor: "pointer", flexShrink: 0,
//   transition: "border-color .2s", appearance: "none" as const,
//   WebkitAppearance: "none" as const,
// };

// export default function ContactForm() {
//   const [form, setForm]     = useState({ name: "", phone: "", email: "", desc: "" });
//   const [dialCode, setDial] = useState("+1");
//   const [done, setDone]     = useState(false);

//   const set = (k: string) =>
//     (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
//       setForm(f => ({ ...f, [k]: e.target.value }));

//   return (
//     <section id="contact" style={{
//       padding: "40px 48px", fontFamily: "'Outfit',sans-serif",
//       background: `linear-gradient(135deg,${T.tealDark} 0%,#006b52 30%,${T.navy1} 65%,${T.navy0} 100%)`,
//       position: "relative", overflow: "hidden",
//     }}>
//       <style>{`
//         @keyframes ringPulse {
//           0%,100% { opacity:.06; transform:translate(-50%,-50%) scale(1) }
//           50%      { opacity:.12; transform:translate(-50%,-50%) scale(1.06) }
//         }
//         .contact-inp:focus { border-color: rgba(0,201,167,.6) !important; outline: none; }
//         .contact-sel:focus { border-color: rgba(0,201,167,.6) !important; outline: none; }
//         .submit-btn { transition: transform .2s ease, box-shadow .2s ease; cursor: pointer; border: none; font-family: 'Outfit',sans-serif; }
//         .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,201,167,.4); }
//       `}</style>

//       {[240, 400, 560].map((sz, i) => (
//         <div key={sz} style={{
//           position: "absolute", top: "50%", left: "50%",
//           transform: "translate(-50%,-50%)",
//           width: sz, height: sz, borderRadius: "50%",
//           border: "1px solid rgba(255,255,255,.15)",
//           animation: `ringPulse ${5 + i * 1.5}s ease-in-out infinite`,
//           animationDelay: `${i * 0.8}s`, pointerEvents: "none",
//         }} />
//       ))}

//       <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1 }}>
//         <Reveal style={{ textAlign: "center", marginBottom: 52 }}>
//           <p style={{
//             fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
//             textTransform: "uppercase", color: "rgba(255,255,255,.65)", marginBottom: 14,
//           }}>— Get Started —</p>
//           <h2 style={{ fontSize: "clamp(26px,3vw,42px)", fontWeight: 900, color: "#fff" }}>
//             Ready to Build Next-Level{" "}
//             <span style={{ color: "rgba(255,255,255,.8)", fontStyle: "italic" }}>Custom Digital Solutions?</span>
//           </h2>
//         </Reveal>

//         <Reveal delay={0.1}>
//           <div style={{
//             background: "rgba(255,255,255,.97)", borderRadius: 24,
//             padding: "56px 52px", position: "relative", overflow: "hidden",
//             boxShadow: "0 24px 80px rgba(0,0,0,.3)",
//           }}>
//             <div style={{
//               position: "absolute", top: 0, left: 0, right: 0, height: 4,
//               background: `linear-gradient(90deg,${T.teal},${T.tealLight},${T.tealDark})`,
//             }} />

//             {done ? (
//               <div style={{ textAlign: "center", padding: "48px 0" }}>
//                 <div style={{ fontSize: 52, marginBottom: 20 }}>✅</div>
//                 <p style={{ fontWeight: 700, fontSize: 22, color: T.navy1, marginBottom: 10 }}>Message Received!</p>
//                 <p style={{ color: "rgba(1,8,18,.5)", fontSize: 15 }}>We&apos;ll get back to you within 24 business hours.</p>
//               </div>
//             ) : (
//               <div>
//                 {/* Row 1: Name + Phone with dial code */}
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
//                   <input
//                     className="contact-inp" style={inpW}
//                     placeholder="Your Name *" value={form.name} onChange={set("name")}
//                   />
//                   {/* Phone with dial code selector */}
//                   <div style={{ display: "flex", gap: 8 }}>
//                     <select
//                       className="contact-sel"
//                       style={selW}
//                       value={dialCode}
//                       onChange={e => setDial(e.target.value)}
//                     >
//                       {DIAL_CODES.map(d => (
//                         <option key={d.country} value={d.code}>
//                           {d.flag} {d.code} {d.country}
//                         </option>
//                       ))}
//                     </select>
//                     <input
//                       className="contact-inp"
//                       style={{ ...inpW, flex: 1 }}
//                       placeholder="Phone Number"
//                       value={form.phone}
//                       onChange={set("phone")}
//                       type="tel"
//                     />
//                   </div>
//                 </div>

//                 {/* Row 2: Email */}
//                 <input
//                   className="contact-inp"
//                   style={{ ...inpW, display: "block", marginBottom: 16 }}
//                   type="email" placeholder="Business Email *"
//                   value={form.email} onChange={set("email")}
//                 />

//                 {/* Row 3: Project description */}
//                 <textarea
//                   className="contact-inp"
//                   style={{ ...inpW, resize: "vertical", minHeight: 120, display: "block", marginBottom: 20 }}
//                   rows={4} placeholder="Tell us about your project…"
//                   value={form.desc} onChange={set("desc")}
//                 />

//                 {/* Submit */}
//                 <button
//                   className="submit-btn"
//                   onClick={() => form.name && form.email && setDone(true)}
//                   style={{
//                     width: "100%", padding: 15, borderRadius: 10,
//                     background: `linear-gradient(135deg,${T.teal},${T.tealDark})`,
//                     color: "#000", fontWeight: 700, fontSize: 15, marginBottom: 20,
//                   }}>
//                   🚀 Submit Project Brief
//                 </button>

//                 {/* Contact details */}
//                 <div style={{
//                   display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20,
//                   paddingTop: 16, borderTop: "1px solid rgba(1,8,18,.08)",
//                 }}>
//                   {CONTACTS.map(c => (
//                     <div key={c.label} style={{ textAlign: "center" }}>
//                       <p style={{
//                         fontSize: 10, fontWeight: 700, color: "rgba(1,8,18,.35)",
//                         letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3,
//                       }}>{c.label}</p>
//                       <p style={{ fontSize: 13, fontWeight: 600, color: T.tealDark }}>{c.value}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState, useEffect, useRef, CSSProperties } from "react";
import emailjs from "@emailjs/browser";
import { T } from "./tokens";
import Reveal from "./Reveal";

// ── EmailJS Config (same credentials as HeroSection) ─────────────────────────
const EMAILJS_SERVICE_ID  = "service_pklyrv6";
const EMAILJS_TEMPLATE_ID = "template_de6srqh";
const EMAILJS_PUBLIC_KEY  = "oY8s46fogw6l5q1b4";

// ── Contact info strip ────────────────────────────────────────────────────────
const CONTACTS = [
  { label: "USA",    value: "+1 631-XXX-XXXX" },
  { label: "Canada", value: "+1 647-XXX-XXXX" },
  { label: "UK",     value: "+44 20-XXX-XXXX" },
  { label: "Email",  value: "hello@nncdigital.com" },
];

const DIAL_CODES = [
  { flag: "🇺🇸", code: "+1",   country: "USA" },
  { flag: "🇨🇦", code: "+1",   country: "CA"  },
  { flag: "🇬🇧", code: "+44",  country: "UK"  },
  { flag: "🇦🇺", code: "+61",  country: "AU"  },
  { flag: "🇮🇳", code: "+91",  country: "IN"  },
  { flag: "🇦🇪", code: "+971", country: "UAE" },
];

const SERVICES = [
  "CRM Development", "ERP Development", "Web Development",
  "Mobile App Development", "Marketing Automation",
  "Salesforce CRM", "Digital Transformation", "SEO & Digital Marketing",
];

// ── Validation ────────────────────────────────────────────────────────────────
const validateName = (v: string) => {
  if (!v.trim())                             return "Name is required";
  if (!/^[A-Za-z\s]{2,60}$/.test(v.trim())) return "Only letters allowed (min 2 chars)";
  return "";
};
const validatePhone = (v: string, cc: string) => {
  const d = v.replace(/\D/g, "");
  if (!d) return "Phone number is required";
  const rules: Record<string, [number, number]> = {
    "+1": [10,10], "+44": [10,11], "+61": [9,10], "+91": [10,10], "+971": [9,9],
  };
  const [min, max] = rules[cc] ?? [7, 15];
  if (d.length < min || d.length > max) return `Must be ${min === max ? min : `${min}–${max}`} digits`;
  return "";
};
const validateEmail = (v: string) => {
  if (!v.trim()) return "Email is required";
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)) return "Enter a valid email";
  return "";
};
const validateDesc = (v: string) => {
  if (!v.trim())         return "Please describe your project";
  if (v.trim().length < 10) return "At least 10 characters";
  if (v.trim().length > 1000) return "Max 1000 characters";
  return "";
};

// ── Email-format check for the floating-label field ──────────────────────────
const isEmailValid = (v: string) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v) && !v.includes(" ");

// ── Shared input base style ───────────────────────────────────────────────────
const inpBase: CSSProperties = {
  width: "100%", borderRadius: 8, padding: "12px 16px", fontSize: 13.5,
  fontFamily: "'Outfit',sans-serif", outline: "none", boxSizing: "border-box",
  background: "rgba(0,0,0,.04)", border: "1px solid rgba(0,0,0,.12)",
  color: "#030B18", transition: "border-color .2s, background .2s",
};
const inpErr: CSSProperties = {
  ...inpBase, borderColor: "#e53e3e", background: "rgba(229,62,62,.05)",
};
const errTxt: CSSProperties = {
  color: "#e53e3e", fontSize: 11, marginTop: 4,
  fontFamily: "'Outfit',sans-serif", display: "flex", alignItems: "center", gap: 4,
};
const selBase: CSSProperties = {
  borderRadius: 8, padding: "12px 10px", fontSize: 13.5,
  fontFamily: "'Outfit',sans-serif", outline: "none",
  background: "rgba(0,0,0,.04)", border: "1px solid rgba(0,0,0,.12)",
  color: "#030B18", cursor: "pointer", flexShrink: 0,
  transition: "border-color .2s", appearance: "none" as const,
  WebkitAppearance: "none" as const,
};

// ── Professional Email Field (floating label + domain hints + tick) ───────────
function EmailField({
  value, onChange, onBlur, hasError, errMsg,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  hasError: boolean;
  errMsg: string;
}) {
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const showChips = focused && value.includes("@") && !value.split("@")[1];
  const valid = isEmailValid(value);
  const appendDomain = (d: string) => {
    onChange({ target: { value: `${value.split("@")[0]}@${d}` } } as React.ChangeEvent<HTMLInputElement>);
    ref.current?.focus();
  };
  return (
    <div style={{ position: "relative", marginBottom: 0 }}>
      <input
        ref={ref}
        className={["cf-email", hasError ? "cf-email-err" : "", valid && !hasError && value ? "cf-email-ok" : ""].filter(Boolean).join(" ")}
        type="email" placeholder=" " value={value} onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => { setFocused(false); onBlur(); }}
        autoComplete="email" inputMode="email"
      />
      <label className="cf-email-lbl">Business Email *</label>
      {/* envelope icon */}
      <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", display: "flex", alignItems: "center" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke={hasError ? "#e53e3e" : focused ? "#00C9A7" : "rgba(3,11,24,.3)"}
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          style={{ transition: "stroke .2s" }}>
          <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
        </svg>
      </span>
      {/* valid tick */}
      {valid && !hasError && value && (
        <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="#00a07a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </span>
      )}
      {/* focus underline */}
      <span className="cf-email-line"/>
      {/* domain chips */}
      {showChips && (
        <span style={{ position: "absolute", right: valid ? 36 : 12, top: "50%", transform: "translateY(-50%)", display: "flex", gap: 4, zIndex: 10 }}>
          {["gmail.com","outlook.com","yahoo.com"].map(d => (
            <button key={d} type="button"
              style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, padding: "2px 7px", borderRadius: 100, background: "rgba(0,201,167,.1)", border: "1px solid rgba(0,201,167,.3)", color: "#00a07a", cursor: "pointer" }}
              onMouseDown={e => { e.preventDefault(); appendDomain(d); }}>{d}</button>
          ))}
        </span>
      )}
      {hasError && errMsg && (
        <p style={errTxt}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          {errMsg}
        </p>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", desc: "" });
  const [dialCode, setDial] = useState("+1");
  const [done, setDone]     = useState(false);
  const [loading, setLoading] = useState(false);

  // per-field errors & touched state
  const [errors, setErrors]   = useState({ name: "", phone: "", email: "", service: "", desc: "" });
  const [touched, setTouched] = useState({ name: false, phone: false, email: false, service: false, desc: false });

  useEffect(() => { emailjs.init(EMAILJS_PUBLIC_KEY); }, []);

  const set = (k: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = e.target.value;
      setForm(f => ({ ...f, [k]: value }));
      if (touched[k as keyof typeof touched]) validateField(k, value);
    };

  const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm(f => ({ ...f, email: value }));
    if (touched.email) validateField("email", value);
  };

  const validateField = (k: string, v: string): boolean => {
    let msg = "";
    switch (k) {
      case "name":    msg = validateName(v);         break;
      case "phone":   msg = validatePhone(v, dialCode); break;
      case "email":   msg = validateEmail(v);        break;
      case "desc":    msg = validateDesc(v);         break;
      case "service": msg = v ? "" : "Please select a service"; break;
    }
    setErrors(p => ({ ...p, [k]: msg }));
    return !msg;
  };

  const blur = (k: string) => () => {
    setTouched(p => ({ ...p, [k]: true }));
    validateField(k, form[k as keyof typeof form]);
  };

  const validateAll = (): boolean => {
    setTouched({ name: true, phone: true, email: true, service: true, desc: true });
    const e = {
      name:    validateName(form.name),
      phone:   validatePhone(form.phone, dialCode),
      email:   validateEmail(form.email),
      service: form.service ? "" : "Please select a service",
      desc:    validateDesc(form.desc),
    };
    setErrors(e);
    return Object.values(e).every(v => !v);
  };

  const handleSubmit = async () => {
    if (!validateAll()) {
      const el = document.querySelector(".cf-field-error");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        // ── Match template variables exactly ──────────────────────────────
        first_name:      form.name.split(" ")[0],
        last_name:       form.name.split(" ").slice(1).join(" ") || "—",
        email:           form.email,
        phone:           `${dialCode} ${form.phone}`,
        service:         form.service || "Not specified",
        message:         form.desc,
        submission_time: new Date().toLocaleString("en-US", {
                           weekday: "short", year: "numeric", month: "short",
                           day: "numeric", hour: "2-digit", minute: "2-digit",
                         }),
        // ── Legacy Subject line variables ─────────────────────────────────
        name:  form.name,
        title: `New Project Brief from ${form.name}`,
        reply_to: form.email,
      });
      setDone(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Failed to send. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  const ErrMsg = ({ field }: { field: keyof typeof errors }) =>
    touched[field] && errors[field] ? (
      <p className="cf-field-error" style={errTxt}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        {errors[field]}
      </p>
    ) : null;

  return (
    <section id="contact" style={{
      padding: "80px 48px", fontFamily: "'Outfit',sans-serif",
      background: `linear-gradient(135deg,${T.tealDark} 0%,#006b52 30%,${T.navy1} 65%,${T.navy0} 100%)`,
      position: "relative", overflow: "hidden",
    }}>
      <style>{`
        @keyframes ringPulse {
          0%,100% { opacity:.06; transform:translate(-50%,-50%) scale(1) }
          50%      { opacity:.12; transform:translate(-50%,-50%) scale(1.06) }
        }

        /* ── Base input focus ── */
        .contact-inp:focus { border-color:rgba(0,201,167,.65) !important; background:rgba(0,201,167,.03) !important; outline:none; }
        .contact-sel:focus { border-color:rgba(0,201,167,.65) !important; outline:none; }
        .contact-sel { min-width:110px; }

        /* ── Submit button ── */
        .submit-btn { transition:transform .2s ease,box-shadow .2s ease; cursor:pointer; border:none; font-family:'Outfit',sans-serif; }
        .submit-btn:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 10px 36px rgba(0,201,167,.45); }
        .submit-btn:disabled { opacity:.65; cursor:not-allowed; }

        /* ── Professional Email Field ── */
        .cf-email {
          width:100%; padding:20px 38px 8px 36px;
          border-radius:8px; font-size:13.5px;
          font-family:'Outfit',sans-serif;
          color:#030B18; background:rgba(0,0,0,.04);
          border:1px solid rgba(0,0,0,.12); outline:none;
          box-sizing:border-box;
          transition:border-color .2s,background .2s,box-shadow .2s;
          caret-color:#00C9A7;
        }
        .cf-email::placeholder { color:transparent; }
        .cf-email:hover  { border-color:rgba(0,201,167,.45); background:rgba(0,201,167,.03); }
        .cf-email:focus  { border-color:rgba(0,201,167,.65); background:rgba(0,201,167,.04); box-shadow:0 0 0 3px rgba(0,201,167,.08); }
        .cf-email.cf-email-err { border-color:#e53e3e; background:rgba(229,62,62,.04); }
        .cf-email.cf-email-ok  { border-color:rgba(0,160,122,.45); }

        .cf-email-lbl {
          position:absolute; left:36px; top:50%;
          transform:translateY(-50%);
          font-family:'Outfit',sans-serif; font-size:13.5px; font-weight:500;
          color:rgba(3,11,24,.4); pointer-events:none;
          transition:top .2s cubic-bezier(.4,0,.2,1),font-size .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);
          white-space:nowrap;
        }
        .cf-email:focus ~ .cf-email-lbl,
        .cf-email:not(:placeholder-shown) ~ .cf-email-lbl {
          top:10px; font-size:9px; font-weight:700;
          color:#00a07a; letter-spacing:.09em; text-transform:uppercase;
        }
        .cf-email.cf-email-err ~ .cf-email-lbl { color:#e53e3e; }

        .cf-email-line {
          position:absolute; bottom:0; left:50%; width:0; height:2px;
          border-radius:0 0 8px 8px;
          background:linear-gradient(90deg,transparent,#00C9A7,transparent);
          transition:width .28s cubic-bezier(.4,0,.2,1),left .28s cubic-bezier(.4,0,.2,1);
          pointer-events:none;
        }
        .cf-email:focus ~ .cf-email-line { width:100%; left:0; }

        /* ── Character counter for textarea ── */
        .cf-char-count { font-size:10.5px; color:rgba(3,11,24,.35); text-align:right; margin-top:3px; font-family:'Outfit',sans-serif; }
        .cf-char-count.cf-char-warn { color:#e53e3e; }

        /* ── Mobile responsive ── */
        @media (max-width:640px) {
          .cf-grid-2 { grid-template-columns:1fr !important; }
          .cf-phone-row { flex-direction:column !important; }
          .cf-section { padding:40px 20px !important; }
          .cf-card { padding:28px 20px !important; }
        }
      `}</style>

      {/* Decorative rings */}
      {[240, 400, 560].map((sz, i) => (
        <div key={sz} style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: sz, height: sz, borderRadius: "50%",
          border: "1px solid rgba(255,255,255,.15)",
          animation: `ringPulse ${5 + i * 1.5}s ease-in-out infinite`,
          animationDelay: `${i * 0.8}s`, pointerEvents: "none",
        }} />
      ))}

      <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── Heading ── */}
        <Reveal style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,.65)", marginBottom: 14 }}>
            — Get Started —
          </p>
          <h2 style={{ fontSize: "clamp(26px,3vw,42px)", fontWeight: 900, color: "#fff" }}>
            Ready to Build Next-Level{" "}
            <span style={{ color: "rgba(255,255,255,.8)", fontStyle: "italic" }}>Custom Digital Solutions?</span>
          </h2>
        </Reveal>

        {/* ── Card ── */}
        <Reveal delay={0.1}>
          <div className="cf-card" style={{
            background: "rgba(255,255,255,.97)", borderRadius: 24,
            padding: "52px 48px", position: "relative", overflow: "hidden",
            boxShadow: "0 24px 80px rgba(0,0,0,.3)",
          }}>
            {/* Top accent bar */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 4,
              background: `linear-gradient(90deg,${T.teal},${T.tealLight},${T.tealDark})`,
            }} />

            {done ? (
              /* ── Success state ── */
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
                <p style={{ fontWeight: 700, fontSize: 22, color: T.navy1, marginBottom: 10 }}>Message Received!</p>
                <p style={{ color: "rgba(1,8,18,.5)", fontSize: 15, marginBottom: 28 }}>
                  We&apos;ll get back to you within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setDone(false);
                    setForm({ name: "", phone: "", email: "", service: "", desc: "" });
                    setErrors({ name: "", phone: "", email: "", service: "", desc: "" });
                    setTouched({ name: false, phone: false, email: false, service: false, desc: false });
                  }}
                  style={{
                    padding: "11px 28px", borderRadius: 10, border: "1.5px solid rgba(0,160,122,.4)",
                    background: "transparent", color: T.tealDark, fontWeight: 600, fontSize: 13.5,
                    fontFamily: "'Outfit',sans-serif", cursor: "pointer",
                  }}>
                  Send Another →
                </button>
              </div>
            ) : (
              <div>

                {/* ── Row 1: Name + Phone ── */}
                <div className="cf-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>

                  {/* Name */}
                  <div>
                    <input className="contact-inp"
                      style={touched.name && errors.name ? inpErr : inpBase}
                      placeholder="Full Name *" value={form.name}
                      onChange={set("name")} onBlur={blur("name")} />
                    <ErrMsg field="name" />
                  </div>

                  {/* Phone */}
                  <div>
                    <div className="cf-phone-row" style={{ display: "flex", gap: 8 }}>
                      <select className="contact-sel" style={selBase} value={dialCode}
                        onChange={e => { setDial(e.target.value); if (touched.phone) validateField("phone", form.phone); }}>
                        {DIAL_CODES.map(d => (
                          <option key={d.country} value={d.code}>{d.flag} {d.code} {d.country}</option>
                        ))}
                      </select>
                      <input className="contact-inp"
                        style={{ ...(touched.phone && errors.phone ? inpErr : inpBase), flex: 1 }}
                        placeholder="Phone Number *" value={form.phone}
                        onChange={set("phone")} onBlur={blur("phone")} type="tel"
                        inputMode="numeric" />
                    </div>
                    <ErrMsg field="phone" />
                  </div>
                </div>

                {/* ── Row 2: Professional Email Field ── */}
                <div style={{ marginBottom: 16 }}>
                  <EmailField
                    value={form.email}
                    onChange={setEmail}
                    onBlur={blur("email")}
                    hasError={!!(touched.email && errors.email)}
                    errMsg={errors.email}
                  />
                </div>

                {/* ── Row 3: Service dropdown ── */}
                <div style={{ marginBottom: 16 }}>
                  <select className="contact-sel"
                    style={{
                      ...selBase, width: "100%", padding: "12px 16px",
                      color: form.service ? "#030B18" : "rgba(3,11,24,.4)",
                      ...(touched.service && errors.service
                        ? { borderColor: "#e53e3e", background: "rgba(229,62,62,.05)" }
                        : {}),
                    }}
                    value={form.service}
                    onChange={set("service")}
                    onBlur={blur("service")}>
                    <option value="">Service of Interest *</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <ErrMsg field="service" />
                </div>

                {/* ── Row 4: Project description ── */}
                <div style={{ marginBottom: 20 }}>
                  <textarea className="contact-inp"
                    style={{
                      ...(touched.desc && errors.desc ? inpErr : inpBase),
                      resize: "vertical", minHeight: 110, display: "block",
                    }}
                    rows={4} placeholder="Tell us about your project… *"
                    value={form.desc} onChange={set("desc")} onBlur={blur("desc")} />
                  {/* character counter */}
                  <p className={`cf-char-count${form.desc.length > 900 ? " cf-char-warn" : ""}`}>
                    {form.desc.length} / 1000
                  </p>
                  <ErrMsg field="desc" />
                </div>

                {/* ── Submit ── */}
                <button
                  className="submit-btn"
                  onClick={handleSubmit}
                  disabled={loading}
                  style={{
                    width: "100%", padding: 15, borderRadius: 10,
                    background: `linear-gradient(135deg,${T.teal},${T.tealDark})`,
                    color: "#000", fontWeight: 700, fontSize: 15, marginBottom: 20,
                  }}>
                  {loading ? "Sending…" : "🚀 Submit Project Brief"}
                </button>

                {/* ── GDPR note ── */}
                <p style={{ textAlign: "center", fontSize: 11, color: "rgba(1,8,18,.35)", marginBottom: 20, fontFamily: "'Outfit',sans-serif" }}>
                  🔒 100% Secure · GDPR &amp; PIPEDA Compliant · No spam, ever.
                </p>

                {/* ── Contact strip ── */}
                <div style={{
                  display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20,
                  paddingTop: 16, borderTop: "1px solid rgba(1,8,18,.08)",
                }}>
                  {CONTACTS.map(c => (
                    <div key={c.label} style={{ textAlign: "center" }}>
                      <p style={{ fontSize: 10, fontWeight: 700, color: "rgba(1,8,18,.35)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3 }}>
                        {c.label}
                      </p>
                      <p style={{ fontSize: 13, fontWeight: 600, color: T.tealDark }}>{c.value}</p>
                    </div>
                  ))}
                </div>

              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}