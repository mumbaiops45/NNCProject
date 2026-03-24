"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import { getServiceSchema } from "../lib/schema";
import SchemaMarkup from "../components/SchemaMarkup";

// ─── EmailJS Config ────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_pklyrv6";
const EMAILJS_TEMPLATE_ID = "template_de6srqh";
const EMAILJS_PUBLIC_KEY = "oY8s46fogw6l5q1b4";

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = "#00C9A7";
const TD = "#00a07a";
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";

// ─── Data ─────────────────────────────────────────────────────────────────────
const LOGOS = ["clients1.png", "clients2.png", "clients3.png", "clients4.png", "clients5.png",
  "clients6.png", "clients7.png", "clients8.png", "clients9.png", "clients10.png", "clients11.png",
  "clients12.png", "clients13.png", "clients14.png", "clients15.png", "clients16.png", "clients17.png", "clients18.png"];

const SUCCESS_STORIES = [
  { industry: "Manufacturing", icon: "🏭", result: "35% Efficiency Gain", title: "SEO & Lead Generation for a Canadian Manufacturer", description: "A multi-location industrial supplier was invisible online. We built a keyword strategy targeting procurement managers, optimised their site, and ran targeted Google Ads.", metrics: [{ l: "Organic Traffic", v: "+320%", i: "📈" }, { l: "Qualified Leads", v: "+210%", i: "✅" }, { l: "ROI", v: "412%", i: "💰" }] },
  { industry: "Healthcare", icon: "🏥", result: "42% More Bookings", title: "Local SEO for a UK Healthcare Provider", description: "A private clinic group was losing patients to competitors. We optimised for 'near me' searches, managed Google Business Profiles, and ran local service ads.", metrics: [{ l: "Bookings", v: "+42%", i: "📅" }, { l: "Local Rank", v: "#1-3", i: "📍" }, { l: "Website Clicks", v: "+158%", i: "🖱️" }] },
  { industry: "D2C Retail", icon: "🛍️", result: "2.4× Conversion Rate", title: "E-Commerce SEO & Ads for a US D2C Brand", description: "A D2C brand was struggling with CAC. We implemented a full-funnel strategy: SEO for organic, Meta for prospecting, and Google Shopping for high-intent traffic.", metrics: [{ l: "Conversion Rate", v: "2.4×", i: "📈" }, { l: "Revenue", v: "+89%", i: "💰" }, { l: "CAC", v: "-43%", i: "📉" }] },
];

const SERVICES = [
  { icon: "🔍", title: "Search Engine Optimisation (SEO)", desc: "Data-driven SEO that improves rankings, drives qualified traffic, and builds sustainable growth.", tag: "SEO", slug: "seo" },
  { icon: "📍", title: "Local SEO (CA, US, UK)", desc: "Dominate local search results, Google Maps, and 'near me' queries to attract nearby customers.", tag: "Local", slug: "local-seo" },
  { icon: "🎯", title: "Google Ads", desc: "High-converting PPC campaigns across Search, Shopping, Display, and YouTube, managed by certified specialists.", tag: "PPC", slug: "google-ads" },
  { icon: "📘", title: "Meta (Facebook/Instagram) Ads", desc: "Creative-driven campaigns that build brand awareness and drive sales on the world's largest social platforms.", tag: "Social", slug: "meta-ads" },
  { icon: "💼", title: "LinkedIn Ads", desc: "Precision B2B targeting to reach decision-makers with lead-gen forms and sponsored content.", tag: "B2B", slug: "linkedin-ads" },
  { icon: "📝", title: "Content Marketing", desc: "Authority-building content that ranks: blogs, whitepapers, case studies, and pillar pages.", tag: "Content", slug: "content-marketing" },
  { icon: "🔧", title: "Technical SEO Audit", desc: "Comprehensive crawl analysis, Core Web Vitals, site structure, and indexation fixes.", tag: "Technical", slug: "technical-seo" },
  { icon: "📈", title: "Conversion Rate Optimisation", desc: "Turn more visitors into customers with A/B testing, UX improvements, and data-backed CRO.", tag: "CRO", slug: "cro" },
  { icon: "📊", title: "Analytics & Reporting", desc: "Custom dashboards, goal tracking, and transparent reporting — no vanity metrics.", tag: "Analytics", slug: "analytics-reporting" },
];

const BENEFITS = [
  { num: "01", icon: "🎯", title: "Qualified Traffic", desc: "We don't chase vanity metrics. Every campaign is designed to attract users actively searching for your products or services.", tags: ["Intent-based", "High Quality", "Buyer Keywords"] },
  { num: "02", icon: "🔗", title: "CRM Attribution", desc: "Connect your marketing directly to revenue. We integrate with your CRM to track leads from first click to closed deal.", tags: ["Salesforce", "HubSpot", "Closed-loop"] },
  { num: "03", icon: "📍", title: "Local Search Dominance", desc: "For multi-location businesses in Canada, the USA, and the UK, we dominate local packs and Google Maps with hyper-local strategies.", tags: ["Google Maps", "Local Packs", "Reviews"] },
  { num: "04", icon: "📊", title: "No Vanity Metrics", desc: "We focus on what matters: organic traffic to money pages, conversion rates, cost per lead, and return on ad spend.", tags: ["ROAS", "CPL", "Real KPIs"] },
];

const TOOLS = [
  { icon: "🔎", name: "Google Search Console", purpose: "Enterprise-grade SEO monitoring.", clr: "rgba(66,133,244,.08)", bd: "rgba(66,133,244,.22)" },
  { icon: "📊", name: "Ahrefs", purpose: "Best-in-class for backlink analysis.", clr: "rgba(255,74,74,.08)", bd: "rgba(255,74,74,.22)" },
  { icon: "🔍", name: "SEMrush", purpose: "Enterprise-grade keyword research.", clr: "rgba(255,122,0,.08)", bd: "rgba(255,122,0,.22)" },
  { icon: "🎯", name: "Google Ads", purpose: "Best-in-class for PPC management.", clr: "rgba(251,188,4,.08)", bd: "rgba(251,188,4,.22)" },
  { icon: "📘", name: "Meta Business Suite", purpose: "Enterprise-grade social ads.", clr: "rgba(36,103,177,.08)", bd: "rgba(36,103,177,.22)" },
  { icon: "💼", name: "LinkedIn Campaign Manager", purpose: "Best-in-class for B2B advertising.", clr: "rgba(10,102,194,.08)", bd: "rgba(10,102,194,.22)" },
  { icon: "📈", name: "Google Analytics 4", purpose: "Enterprise-grade analytics.", clr: "rgba(251,188,4,.08)", bd: "rgba(251,188,4,.22)" },
  { icon: "🔥", name: "Hotjar", purpose: "Best-in-class for UX & behaviour.", clr: "rgba(255,59,59,.08)", bd: "rgba(255,59,59,.22)" },
];

const HIRE_LEFT = [
  { icon: "🏢", title: "Enterprises", desc: "Enterprise-scale SEO and media buying with complex attribution, multi-location strategies, and board-level reporting." },
  { icon: "🚀", title: "Start-ups", desc: "Growth-focused marketing that scales with you — from building initial organic traction to scaling paid channels efficiently." },
  { icon: "🎯", title: "Agencies", desc: "White-label SEO and PPC services for agencies. Detailed reporting, client-ready dashboards, and seamless handoff." },
];
const HIRE_RIGHT = [
  { icon: "📊", title: "Analytical Marketing", desc: "Data-first strategies where every channel is measured, attributed, and optimised based on hard revenue data, not guesses." },
  { icon: "⚙️", title: "Performance Marketing", desc: "Relentless focus on ROAS, CPA, and conversion rate optimisation across paid search, social, and display." },
  { icon: "🤝", title: "Brand & Content Marketing", desc: "Build long-term authority and trust through high-quality content, PR-style link building, and audience engagement." },
];

const AI_FEATS = [
  { icon: "🧠", title: "AI Data Analysis", desc: "Uncover hidden opportunities in your search and ad data with AI-driven pattern recognition and competitive analysis." },
  { icon: "🔮", title: "Predictive Insights", desc: "Forecast keyword trends, ad performance, and seasonality with machine learning models to stay ahead of competitors." },
  { icon: "🤖", title: "Automation at Scale", desc: "Automate bid management, ad copy testing, and reporting workflows — freeing your team for strategy and creativity." },
  { icon: "📈", title: "Real-Time Dashboards", desc: "Live dashboards tracking every KPI that matters: rankings, traffic, conversions, and revenue — updated in real time." },
];

const WCU_POINTS = [
  { icon: "🏆", text: "8+ years of proven digital excellence" },
  { icon: "🌍", text: "Serving Canada, USA & UK markets" },
  { icon: "⚡", text: "565+ projects delivered globally" },
  { icon: "🤝", text: "Client-first culture, enterprise-grade quality" },
  { icon: "🔒", text: "GDPR, PIPEDA & CCPA compliant delivery" },
  { icon: "📊", text: "Full-funnel: SEO, PPC, Social, Content, CRO" },
];
const WCU_STATS = [{ n: 1500, s: "+", l: "Projects Delivered" }, { n: 1800, s: "+", l: "IT Talents" }, { n: 98, s: "%", l: "Retention Rate" }, { n: 25, s: "+", l: "Industries" }];

const SERVICES_LIST = ["SEO", "Local SEO", "Google Ads", "Meta Ads", "LinkedIn Ads", "Content Marketing", "Technical SEO Audit", "CRO", "Other"];
const DIAL_CODES = [{ code: "+1", flag: "🇨🇦" }, { code: "+1", flag: "🇺🇸" }, { code: "+44", flag: "🇬🇧" }, { code: "+91", flag: "🇮🇳" }];

// ─── Validation helpers ────────────────────────────────────────────────────────
const vName = (v: string) => { if (!v.trim()) return "Name is required"; if (!/^[A-Za-z\s]{2,60}$/.test(v.trim())) return "Letters only (min 2 chars)"; return ""; };
const vEmail = (v: string) => { if (!v.trim()) return "Email is required"; if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)) return "Enter a valid email"; return ""; };
const vPhone = (v: string, cc: string) => {
  const d = v.replace(/\D/g, ""); if (!d) return "Phone is required";
  const rules: Record<string, [number, number]> = { "+1": [10, 10], "+44": [10, 11], "+91": [10, 10] };
  const [mn, mx] = rules[cc] ?? [7, 15];
  if (d.length < mn || d.length > mx) return `Must be ${mn === mx ? mn : mn + "–" + mx} digits`;
  return "";
};
const vMsg = (v: string) => { if (!v.trim()) return "Message is required"; if (v.trim().length < 10) return "At least 10 characters"; return ""; };

// ─── Build EmailJS templateParams ─────────────────────────────────────────────
function buildParams(data: { firstName: string; lastName: string; email: string; phone: string; service: string; message: string }) {
  return {
    first_name: data.firstName,
    last_name: data.lastName || "—",
    email: data.email,
    phone: data.phone,
    service: data.service || "Not specified",
    message: data.message,
    submission_time: new Date().toLocaleString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
    name: `${data.firstName} ${data.lastName}`.trim(),
    title: `New SEO & Marketing Enquiry from ${data.firstName} ${data.lastName}`.trim(),
    reply_to: data.email,
  };
}

// ─── Inline field error ────────────────────────────────────────────────────────
function FieldErr({ msg }: { msg: string }) {
  if (!msg) return null;
  return (
    <p style={{ color: "#ff6b6b", fontSize: 11, marginTop: 4, fontFamily: "'Poppins',sans-serif", display: "flex", alignItems: "center", gap: 4 }}>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      {msg}
    </p>
  );
}

// ─── Helper Components ────────────────────────────────────────────────────────
function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d")!;
    let W = c.width = c.offsetWidth, H = c.height = c.offsetHeight;
    const pts = Array.from({ length: 50 }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22, r: Math.random() * 1.4 + .3, a: Math.random() * .38 + .07 }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => { p.x += p.vx; p.y += p.vy; if (p.x < 0) p.x = W; if (p.x > W) p.x = 0; if (p.y < 0) p.y = H; if (p.y > H) p.y = 0; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(0,201,167,${p.a})`; ctx.fill(); });
      for (let i = 0; i < pts.length; i++)for (let j = i + 1; j < pts.length; j++) { const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy); if (d < 90) { ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.strokeStyle = `rgba(0,201,167,${.06 * (1 - d / 90)})`; ctx.lineWidth = .5; ctx.stroke(); } }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const rz = () => { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; };
    window.addEventListener("resize", rz);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", rz); };
  }, []);
  return <canvas ref={ref} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} />;
}

function Counter({ to, sfx = "" }: { to: number; sfx?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started.current) { started.current = true; let step = 0; const t = setInterval(() => { step++; const ease = 1 - Math.pow(1 - step / 70, 3); setV(Math.round(ease * to)); if (step >= 70) { setV(to); clearInterval(t); } }, 1800 / 70); } }, { threshold: .25 });
    obs.observe(el); return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{v}{sfx}</span>;
}

function SectionBadge({ label }: { label: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.22)", borderRadius: 100, padding: "6px 18px", marginBottom: 16 }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: T, display: "block", boxShadow: `0 0 8px ${T}` }} />
      <span style={{ color: T, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>{label}</span>
    </div>
  );
}

function SectionH2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: "clamp(20px,3vw,40px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 14 }}>{children}</h2>;
}

function GradText({ children }: { children: React.ReactNode }) {
  return <span style={{ background: `linear-gradient(135deg,${T},#1fd1b5)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{children}</span>;
}

function AccItem({ item, open, toggle }: { item: { icon: string; title: string; desc: string }; open: boolean; toggle: () => void }) {
  return (
    <div onClick={toggle} style={{ borderRadius: 14, border: `1px solid ${open ? "rgba(0,201,167,0.4)" : "rgba(255,255,255,0.08)"}`, background: open ? "rgba(0,201,167,0.06)" : "rgba(255,255,255,0.02)", overflow: "hidden", cursor: "pointer", transition: "border-color .25s,background .25s" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 18px", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, flexShrink: 0, background: open ? "rgba(0,201,167,0.15)" : "rgba(255,255,255,0.05)", border: `1px solid ${open ? "rgba(0,201,167,0.3)" : "rgba(255,255,255,0.1)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, transition: "background .25s" }}>{item.icon}</div>
          <span style={{ fontSize: 14, fontWeight: 700, color: open ? "#fff" : "rgba(255,255,255,0.72)", fontFamily: "'Poppins',sans-serif", transition: "color .2s" }}>{item.title}</span>
        </div>
        <div style={{ width: 26, height: 26, borderRadius: "50%", flexShrink: 0, background: open ? T : "rgba(255,255,255,0.07)", border: `1px solid ${open ? T : "rgba(255,255,255,0.14)"}`, display: "flex", alignItems: "center", justifyContent: "center", color: open ? "#000" : "rgba(255,255,255,0.55)", fontSize: 17, fontWeight: 700, lineHeight: 1, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
      </div>
      <div style={{ maxHeight: open ? 220 : 0, overflow: "hidden", transition: "max-height .35s ease" }}>
        <p style={{ padding: "0 18px 18px 70px", color: "rgba(255,255,255,0.5)", fontSize: 13.5, lineHeight: 1.75, fontFamily: "'Poppins',sans-serif", fontWeight: 400, margin: 0 }}>{item.desc}</p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function SEOandDigitalMarketingPage() {
  const serviceSchema = getServiceSchema(
    "SEO & Digital Marketing",
    "SEO & Digital Marketing That Drives Qualified Traffic and Measurable Revenue for businesses in Canada, USA & UK. We build data-driven marketing strategies that make your business visible online."
  );

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const h = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  const isMobile = windowWidth <= 640;
  const isTablet = windowWidth > 640 && windowWidth <= 1024;

  // Init EmailJS once
  useEffect(() => { emailjs.init(EMAILJS_PUBLIC_KEY); }, []);

  // ── HERO FORM state ──────────────────────────────────────────────────────────
  const [hForm, setHForm] = useState({ firstName: "", lastName: "", phone: "", dialCode: "+1", email: "", service: "", message: "" });
  const [hErr, setHErr] = useState({ firstName: "", phone: "", email: "", message: "" });
  const [hTouched, setHTouched] = useState({ firstName: false, phone: false, email: false, message: false });
  const [hSubmitted, setHSubmitted] = useState(false);
  const [hLoading, setHLoading] = useState(false);

  const hRunValidate = (k: string, v: string) => { const msgs: Record<string, string> = { firstName: vName(v), phone: vPhone(v, hForm.dialCode), email: vEmail(v), message: vMsg(v) }; if (k in msgs) { setHErr(p => ({ ...p, [k]: msgs[k] })); return !msgs[k]; } return true; };
  // const setH=(k:string,v:string)=>{ setHForm(f=>({...f,[k]:v}));if(hTouched[k as keyof typeof hTouched])hRunValidate(k,v); };
  const setH = (k: string, v: string) => {
    let value = v;

    // STRICT INPUT FILTERING
    if (k === "firstName") {
      // Allow ONLY letters (A-Z, a-z) and spaces
      value = value.replace(/[^A-Za-z\s]/g, '');
      // Prevent multiple consecutive spaces
      value = value.replace(/\s+/g, ' ');
      // Prevent leading spaces
      if (value.startsWith(' ')) value = value.trimStart();
      // Limit length
      if (value.length > 60) value = value.slice(0, 60);
    }
    else if (k === "lastName") {
      // Allow ONLY letters (A-Z, a-z) and spaces
      value = value.replace(/[^A-Za-z\s]/g, '');
      value = value.replace(/\s+/g, ' ');
      if (value.startsWith(' ')) value = value.trimStart();
      if (value.length > 60) value = value.slice(0, 60);
    }
    else if (k === "phone") {
      // Allow ONLY digits (0-9)
      value = value.replace(/[^\d]/g, '');
      let maxLength = 10; // Default for US/Canada/India
      if (hForm.dialCode === "+44") maxLength = 11; // UK
      if (value.length > maxLength) value = value.slice(0, maxLength);
    }
    else if (k === "email") {
      // Email - just basic sanitization (no spaces)
      value = value.replace(/\s/g, '');
      if (value.length > 100) value = value.slice(0, 100);
    }
    else if (k === "message") {
      // Message - just limit length
      if (value.length > 2000) value = value.slice(0, 2000);
    }

    setHForm(f => ({ ...f, [k]: value }));
    if (hTouched[k as keyof typeof hTouched]) hRunValidate(k, value);
  };
  const hBlur = (k: string) => () => { setHTouched(p => ({ ...p, [k]: true })); hRunValidate(k, hForm[k as keyof typeof hForm] as string); };
  const hValidateAll = () => { setHTouched({ firstName: true, phone: true, email: true, message: true }); const e = { firstName: vName(hForm.firstName), phone: vPhone(hForm.phone, hForm.dialCode), email: vEmail(hForm.email), message: vMsg(hForm.message) }; setHErr(e); return Object.values(e).every(v => !v); };
  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); if (!hValidateAll()) return; setHLoading(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, buildParams({ firstName: hForm.firstName, lastName: hForm.lastName, email: hForm.email, phone: `${hForm.dialCode} ${hForm.phone}`, service: hForm.service, message: hForm.message }));
      setHSubmitted(true); setHForm({ firstName: "", lastName: "", phone: "", dialCode: "+1", email: "", service: "", message: "" }); setHTouched({ firstName: false, phone: false, email: false, message: false }); setHErr({ firstName: "", phone: "", email: "", message: "" });
    } catch (err) { console.error("EmailJS hero:", err); alert("Failed to send. Please try again."); }
    finally { setHLoading(false); }
  };

  // ── CONTACT FORM (M13) state ─────────────────────────────────────────────────
  const [cForm, setCForm] = useState({ name: "", phone: "", dialCode: "+1", email: "", service: "", project: "" });
  const [cErr, setCErr] = useState({ name: "", phone: "", email: "", project: "" });
  const [cTouched, setCTouched] = useState({ name: false, phone: false, email: false, project: false });
  const [cSubmitted, setCSubmitted] = useState(false);
  const [cLoading, setCLoading] = useState(false);

  const cRunValidate = (k: string, v: string) => { const msgs: Record<string, string> = { name: vName(v), phone: vPhone(v, cForm.dialCode), email: vEmail(v), project: vMsg(v) }; if (k in msgs) { setCErr(p => ({ ...p, [k]: msgs[k] })); return !msgs[k]; } return true; };
  // const setC=(k:string,v:string)=>{ setCForm(f=>({...f,[k]:v}));if(cTouched[k as keyof typeof cTouched])cRunValidate(k,v); };
  const setC = (k: string, v: string) => {
    let value = v;

    // STRICT INPUT FILTERING
    if (k === "name") {
      // Allow ONLY letters (A-Z, a-z) and spaces
      value = value.replace(/[^A-Za-z\s]/g, '');
      // Prevent multiple consecutive spaces
      value = value.replace(/\s+/g, ' ');
      // Prevent leading spaces
      if (value.startsWith(' ')) value = value.trimStart();
      // Limit length
      if (value.length > 60) value = value.slice(0, 60);
    }
    else if (k === "phone") {
      // Allow ONLY digits (0-9)
      value = value.replace(/[^\d]/g, '');
      let maxLength = 10; // Default for US/Canada/India
      if (cForm.dialCode === "+44") maxLength = 11; // UK
      if (value.length > maxLength) value = value.slice(0, maxLength);
    }
    else if (k === "email") {
      // Email - just basic sanitization (no spaces)
      value = value.replace(/\s/g, '');
      if (value.length > 100) value = value.slice(0, 100);
    }
    else if (k === "project") {
      // Project description - just limit length
      if (value.length > 2000) value = value.slice(0, 2000);
    }

    setCForm(f => ({ ...f, [k]: value }));
    if (cTouched[k as keyof typeof cTouched]) cRunValidate(k, value);
  };
  const cBlur = (k: string) => () => { setCTouched(p => ({ ...p, [k]: true })); cRunValidate(k, cForm[k as keyof typeof cForm] as string); };
  const cValidateAll = () => { setCTouched({ name: true, phone: true, email: true, project: true }); const e = { name: vName(cForm.name), phone: vPhone(cForm.phone, cForm.dialCode), email: vEmail(cForm.email), project: vMsg(cForm.project) }; setCErr(e); return Object.values(e).every(v => !v); };
  const handleCSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); if (!cValidateAll()) return; setCLoading(true);
    try {
      const nameParts = cForm.name.trim().split(" ");
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, buildParams({ firstName: nameParts[0], lastName: nameParts.slice(1).join(" "), email: cForm.email, phone: `${cForm.dialCode} ${cForm.phone}`, service: cForm.service, message: cForm.project }));
      setCSubmitted(true); setCForm({ name: "", phone: "", dialCode: "+1", email: "", service: "", project: "" }); setCTouched({ name: false, phone: false, email: false, project: false }); setCErr({ name: "", phone: "", email: "", project: "" });
    } catch (err) { console.error("EmailJS contact:", err); alert("Failed to send. Please try again."); }
    finally { setCLoading(false); }
  };

  // ── Other UI state ───────────────────────────────────────────────────────────
  const [story, setStory] = useState(0);
  const [hireL, setHireL] = useState<number | null>(0);
  const [hireR, setHireR] = useState<number | null>(0);
  const [faq, setFaq] = useState<number | null>(0);
  const [gTab, setGTab] = useState<"int" | "india">("int");

  const getSectionPadding = () => { if (isMobile) return "40px 16px"; if (isTablet) return "60px 32px"; return "40px 48px"; };

  // ── Input styles ─────────────────────────────────────────────────────────────
  const iS: React.CSSProperties = { width: "100%", padding: isMobile ? "10px 12px" : "11px 14px", borderRadius: 9, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", color: "#fff", fontSize: isMobile ? "13px" : "13.5px", fontFamily: "'Poppins',sans-serif", outline: "none", boxSizing: "border-box", transition: "border-color .2s,background .2s" };
  const iSE: React.CSSProperties = { ...iS, borderColor: "#ff4444", background: "rgba(255,68,68,.08)" };
  const iSLg: React.CSSProperties = { ...iS, padding: isMobile ? "12px 14px" : "13px 16px", fontSize: isMobile ? "14px" : "14.5px" };
  const iSLgE: React.CSSProperties = { ...iSLg, borderColor: "#ff4444", background: "rgba(255,68,68,.08)" };
  const taS: React.CSSProperties = { ...iSLg, minHeight: isMobile ? 80 : 110, resize: "vertical" as const };
  const taErr: React.CSSProperties = { ...taS, borderColor: "#ff4444", background: "rgba(255,68,68,.08)" };

  return (
    <>
      <Navbar />
      <SchemaMarkup schema={serviceSchema} id="seo-digital-marketing-schema" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        *,*::before,*::after{box-sizing:border-box;}

        @keyframes heroPulse  {0%,100%{opacity:.7;transform:translateY(-50%) scale(1)}50%{opacity:1;transform:translateY(-50%) scale(1.04)}}
        @keyframes heroSpin   {from{transform:translateY(-50%) rotate(0deg)}to{transform:translateY(-50%) rotate(360deg)}}
        @keyframes heroGlow   {0%,100%{box-shadow:0 0 0 rgba(0,201,167,0)}50%{box-shadow:0 0 20px rgba(0,201,167,.2)}}
        @keyframes heroFadeUp {from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        @keyframes heroBlink  {0%,100%{opacity:1}50%{opacity:.35}}
        @keyframes ctaBgShift {0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        @keyframes sbFadeUp   {from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes clScroll   {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes marqueeReverse{from{transform:translateX(-50%)}to{transform:translateX(0)}}

        .cl-track{display:flex;width:max-content;animation:clScroll 32s linear infinite;}
        .cl-track:hover{animation-play-state:paused;}

        .hero-layout{display:grid;grid-template-columns:1fr 420px;gap:40px;max-width:1280px;margin:0 auto;width:100%;position:relative;z-index:3;align-items:center;}
        @media(max-width:768px){.hero-layout{grid-template-columns:1fr;gap:32px;}}

        .two-col{display:grid;grid-template-columns:1fr 1fr;gap:24px;}
        @media(max-width:768px){.two-col{grid-template-columns:1fr;gap:16px;}}

        .svc-grid{display:grid;gap:20px;grid-template-columns:repeat(3,1fr);}
        @media(max-width:1024px){.svc-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:640px){.svc-grid{grid-template-columns:1fr;}}
        .svc-card{display:flex;flex-direction:column;gap:14px;padding:24px;border-radius:18px;border:1px solid rgba(255,255,255,0.07);background:rgba(255,255,255,0.02);transition:transform .3s,border-color .3s,background .3s;animation:heroFadeUp .6s ease both;cursor:pointer;text-decoration:none;}
        .svc-card:hover{transform:translateY(-6px);border-color:rgba(0,201,167,0.3);background:rgba(0,201,167,0.04);}
        .svc-card:hover .svc-icon{background:rgba(0,201,167,0.2)!important;transform:scale(1.1);}

        .kb-grid{display:grid;gap:20px;grid-template-columns:repeat(4,1fr);}
        @media(max-width:960px){.kb-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:640px){.kb-grid{grid-template-columns:1fr;}}
        .kb-card{display:flex;gap:20px;padding:28px 24px;border-radius:18px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.02);transition:transform .3s,border-color .3s,background .3s;animation:heroFadeUp .6s ease both;}
        .kb-card:hover{transform:translateY(-4px);border-color:rgba(0,201,167,0.2);background:rgba(0,201,167,0.04);}

        .pt-grid{display:grid;gap:16px;grid-template-columns:repeat(4,1fr);}
        @media(max-width:768px){.pt-grid{grid-template-columns:repeat(3,1fr);}}
        @media(max-width:480px){.pt-grid{grid-template-columns:repeat(2,1fr);}}
        .pt-card{display:flex;flex-direction:column;padding:24px 20px;border-radius:16px;text-align:center;align-items:center;transition:transform .3s,box-shadow .3s;}
        .pt-card:hover{transform:translateY(-6px);box-shadow:0 20px 40px rgba(0,0,0,0.3);}
        .pt-card:hover .pt-icon{transform:scale(1.15)!important;}

        .cf-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;}
        @media(max-width:768px){.cf-grid{grid-template-columns:1fr;gap:24px;}}
        .cf-name{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
        @media(max-width:480px){.cf-name{grid-template-columns:1fr;gap:12px;}}

        .ss-tab{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:100px;border:1px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.6);font-size:13px;font-weight:600;font-family:'Poppins',sans-serif;cursor:pointer;transition:all .22s;}
        .ss-tab:hover{border-color:rgba(0,201,167,0.35);background:rgba(0,201,167,0.06);color:#fff;}
        .ss-tab.act{border-color:rgba(0,201,167,0.6);background:rgba(0,201,167,0.12);color:#fff;}

        .wcu-point:hover{border-color:rgba(0,201,167,0.25)!important;background:rgba(0,201,167,0.06)!important;transform:translateX(6px)!important;}
        .wcu-stat:hover{transform:translateY(-4px)!important;background:rgba(0,201,167,0.1)!important;}
        .btn-teal:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(0,201,167,.25);}
        .h-teal:hover{color:#00C9A7!important;}
        .fi:focus{border-color:rgba(0,201,167,0.5)!important;background:rgba(0,201,167,0.05)!important;}
        .fi-err:focus{border-color:#ff4444!important;}
        input:hover,select:hover,textarea:hover{border-color:${T}!important;}
      `}</style>

      {/* ══ M1 — HERO ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: "clamp(10px,5vw,60px) clamp(16px,4vw,48px) clamp(28px,5vw,52px)", background: `linear-gradient(135deg,${N0} 0%,#041628 45%,${N0} 100%)`, position: "relative", overflow: "hidden", minHeight: "unset", display: "flex", alignItems: "flex-start" }}>
        <Particles />
        <div style={{ position: "absolute", width: 650, height: 650, borderRadius: "50%", background: `radial-gradient(circle,rgba(0,201,167,.14) 0%,transparent 65%)`, top: "40%", left: "-10%", transform: "translateY(-50%)", animation: "heroPulse 8s ease-in-out infinite", pointerEvents: "none", zIndex: 1 }} />
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 65%)", top: "10%", right: "5%", animation: "heroPulse 10s ease-in-out infinite .5s", pointerEvents: "none", zIndex: 1 }} />
        <div style={{ position: "absolute", width: 520, height: 520, borderRadius: "50%", border: "1px dashed rgba(0,201,167,.08)", top: "50%", left: "-12%", transform: "translateY(-50%)", animation: "heroSpin 55s linear infinite", pointerEvents: "none", zIndex: 1 }} />

        <div className="hero-layout">
          {/* Left */}
          <div style={{ animation: "heroFadeUp .7s ease both" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.25)", borderRadius: 100, padding: isMobile ? "6px 14px" : "7px 18px", marginBottom: isMobile ? 20 : 28, animation: "heroGlow 3s ease-in-out infinite,heroFadeUp .7s ease both" }}>
              <span style={{ width: isMobile ? 6 : 7, height: isMobile ? 6 : 7, borderRadius: "50%", background: T, boxShadow: `0 0 10px ${T}`, animation: "heroBlink 1.4s ease-in-out infinite" }} />
              <span style={{ color: T, fontSize: isMobile ? "10px" : "11.5px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>SEO & Digital Marketing — Canada, USA &amp; UK</span>
            </div>
            <h1 style={{ fontSize: isMobile ? "28px" : isTablet ? "36px" : "48px", fontWeight: 900, lineHeight: 1.12, marginBottom: isMobile ? 14 : 22, letterSpacing: "-0.025em", color: "#fff", animation: "heroFadeUp .7s ease .12s both" }}>
              SEO & Digital Marketing That Drives <GradText>Qualified Traffic</GradText> and Measurable Revenue
            </h1>
            <p style={{ color: "rgba(255,255,255,0.52)", fontSize: isMobile ? "14px" : isTablet ? "15px" : "16.5px", lineHeight: 1.85, marginBottom: isMobile ? 18 : 28, maxWidth: 600, animation: "heroFadeUp .7s ease .22s both" }}>
              Most businesses in Canada, the USA, and the UK are invisible online — not because their services aren't great, but because their digital presence hasn't been built to be found.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 6 : 8, marginBottom: isMobile ? 20 : 36, animation: "heroFadeUp .7s ease .32s both" }}>
              {[{ i: "🔵", l: "Google Partner" }, { i: "🏆", l: "ISO Certified" }, { i: "🔒", l: "GDPR Compliant" }, { i: "🍁", l: "PIPEDA Ready" }, { i: "⭐", l: "Clutch Top Agency" }].map(b => (
                <span key={b.l} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: isMobile ? "5px 12px" : "6px 13px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.65)", fontSize: isMobile ? 11 : 12.5, fontWeight: 600, cursor: "default" }}>{b.i} {b.l}</span>
              ))}
            </div>
          </div>

          {/* Hero Form — EmailJS */}
          <div style={{ background: "rgba(8,20,40,0.85)", border: "1px solid rgba(0,201,167,0.22)", borderRadius: 20, padding: isMobile ? "24px 20px" : "32px 28px", backdropFilter: "blur(16px)", boxShadow: "0 32px 80px rgba(0,0,0,0.5),0 0 40px rgba(0,201,167,0.06)", position: "relative", overflow: "hidden", animation: "heroFadeUp .7s ease .15s both" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${T},transparent)` }} />
            {hSubmitted ? (
              <div style={{ textAlign: "center", padding: isMobile ? "30px 0" : "40px 0" }}>
                <div style={{ fontSize: isMobile ? 44 : 52, marginBottom: 16 }}>✅</div>
                <h3 style={{ color: "#fff", fontSize: isMobile ? 18 : 20, fontWeight: 800, marginBottom: 10 }}>Request Received!</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 13 : 14, lineHeight: 1.7, marginBottom: 24 }}>We'll contact you within 24 hours to discuss your marketing goals.</p>
                <button onClick={() => setHSubmitted(false)} style={{ padding: isMobile ? "10px 22px" : "11px 26px", borderRadius: 9, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: isMobile ? "13px" : "14px", fontFamily: "'Poppins',sans-serif", cursor: "pointer" }}>Send Another →</button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: isMobile ? 14 : 22 }}>
                  <p style={{ color: T, fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 4 }}>Free Consultation</p>
                  <h2 style={{ color: "#fff", fontSize: isMobile ? 16 : 18, fontWeight: 800, margin: 0, lineHeight: 1.3 }}>Get a Free SEO & Marketing Audit</h2>
                </div>
                <form onSubmit={handleHeroSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
                  <div className="cf-name">
                    <div>
                      <label style={{ display: "block", fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>First Name *</label>
                      <input className={`fi${hTouched.firstName && hErr.firstName ? " fi-err" : ""}`} style={hTouched.firstName && hErr.firstName ? iSE : iS} placeholder="Jane" value={hForm.firstName} onChange={e => setH("firstName", e.target.value)} onBlur={hBlur("firstName")} />
                      {hTouched.firstName && <FieldErr msg={hErr.firstName} />}
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Last Name</label>
                      <input
                        className="fi"
                        style={iS}
                        placeholder="Smith"
                        value={hForm.lastName}
                        onChange={e => setH("lastName", e.target.value)}
                        onBlur={hBlur("lastName")}
                      />
                      {/* <input className="fi" style={iS} placeholder="Smith" value={hForm.lastName} onChange={e=>setH("lastName",e.target.value)}/> */}
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Phone *</label>
                    <div style={{ display: "flex", gap: 8, flexDirection: isMobile ? "column" : "row" }}>
                      <select className="fi" style={{ ...iS, width: isMobile ? "100%" : 82, flexShrink: 0, padding: isMobile ? "10px 12px" : "11px 6px", cursor: "pointer" }} value={hForm.dialCode} onChange={e => setH("dialCode", e.target.value)}>
                        {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                      </select>
                      <input className={`fi${hTouched.phone && hErr.phone ? " fi-err" : ""}`} style={{ ...(hTouched.phone && hErr.phone ? iSE : iS), flex: 1 }} type="tel" placeholder="647 XXX XXXX" value={hForm.phone} onChange={e => setH("phone", e.target.value)} onBlur={hBlur("phone")} />
                    </div>
                    {hTouched.phone && <FieldErr msg={hErr.phone} />}
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Business Email *</label>
                    <input className={`fi${hTouched.email && hErr.email ? " fi-err" : ""}`} style={hTouched.email && hErr.email ? iSE : iS} type="email" placeholder="jane@company.com" value={hForm.email} onChange={e => setH("email", e.target.value)} onBlur={hBlur("email")} />
                    {hTouched.email && <FieldErr msg={hErr.email} />}
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Service</label>
                    <select className="fi" style={{ ...iS, cursor: "pointer" }} value={hForm.service} onChange={e => setH("service", e.target.value)}>
                      <option value="">Select...</option>
                      {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Message *</label>
                    <textarea className={`fi${hTouched.message && hErr.message ? " fi-err" : ""}`} style={{ ...(hTouched.message && hErr.message ? iSE : iS), minHeight: isMobile ? 70 : 76, resize: "vertical" as const }} placeholder="Tell us about your marketing goals and target audience..." value={hForm.message} onChange={e => setH("message", e.target.value)} onBlur={hBlur("message")} />
                    {hTouched.message && <FieldErr msg={hErr.message} />}
                  </div>
                  <button className="btn-teal" type="submit" disabled={hLoading} style={{ padding: isMobile ? "12px" : "13px", borderRadius: 10, border: "none", marginTop: 4, background: hLoading ? "rgba(0,201,167,0.5)" : `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 800, fontSize: isMobile ? "13px" : "14.5px", fontFamily: "'Poppins',sans-serif", cursor: hLoading ? "wait" : "pointer", opacity: hLoading ? .7 : 1, transition: "transform .2s,box-shadow .2s" }}>
                    {hLoading ? "Sending…" : "📊 Get Free Marketing Audit →"}
                  </button>
                  <p style={{ color: "rgba(255,255,255,0.28)", fontSize: isMobile ? 10 : 11, textAlign: "center", margin: 0 }}>🔒 Secure &amp; confidential. No spam, ever.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ══ M2 — CLIENT LOGOS ══════════════════════════════════════════════════ */}
      <section style={{ padding: isMobile ? "40px 0" : "60px 0", background: N0, overflow: "hidden", borderTop: "1px solid rgba(0,201,167,.1)", borderBottom: "1px solid rgba(0,201,167,.1)" }}>
        <div style={{ textAlign: "center", marginBottom: isMobile ? 30 : 40, padding: "0 24px" }}>
          <p style={{ fontWeight: 600, fontSize: isMobile ? 10 : 11.5, color: "rgba(255,255,255,.28)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>Our Happy Clients</p>
          <h2 style={{ fontSize: isMobile ? "22px" : "28px", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.25, margin: 0 }}>Trusted by Businesses Across <GradText>North America &amp; the UK</GradText></h2>
        </div>
        {[{ logos: LOGOS.slice(0, 6), dur: "30s", dir: "marquee" }, { logos: LOGOS.slice(6, 12), dur: "35s", dir: "marqueeReverse" }, { logos: LOGOS.slice(12, 18), dur: "40s", dir: "marquee" }].map((row, ri) => (
          <div key={ri} style={{ overflow: "hidden", marginBottom: ri < 2 ? (isMobile ? 16 : 20) : 0 }}>
            <div className="cl-track" style={{ animation: `${row.dir} ${row.dur} linear infinite` }}>
              {[...row.logos, ...row.logos].map((logo, i) => (
                <div key={i} style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", height: isMobile ? 60 : 70, padding: isMobile ? "8px 14px" : "10px 18px", background: "#fff", borderRadius: 10, margin: "0 8px", boxShadow: "0 6px 20px rgba(0,0,0,0.15)", opacity: .9, transition: "transform .3s,box-shadow .3s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "scale(1.08)"; el.style.boxShadow = "0 10px 28px rgba(0,0,0,0.25)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)"; }}>
                  <img src={`/${logo}`} alt="" style={{ height: isMobile ? 30 : 40, width: "auto", maxWidth: isMobile ? 90 : 120, objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ══ M3 — SUCCESS STORIES ═══════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N2} 0%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(0,201,167,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.02) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 28 }}>
            <SectionBadge label="Proven Results" />
            <SectionH2>SEO & Digital Marketing <GradText>Success Stories</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? "13px" : "14px", lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>Real results for businesses in Canada, USA &amp; UK.</p>
          </div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: isMobile ? 24 : 32, flexWrap: "wrap" }}>
            {SUCCESS_STORIES.map((c, i) => (
              <button key={i} className={`ss-tab${story === i ? " act" : ""}`} onClick={() => setStory(i)} style={{ padding: isMobile ? "6px 14px" : "8px 18px", fontSize: isMobile ? "11px" : "13px" }}><span>{c.icon}</span>{c.industry} — {c.result}</button>
            ))}
          </div>
          <div key={story} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,201,167,.3)", borderRadius: 24, overflow: "hidden", animation: "sbFadeUp .45s ease both" }}>
            <div style={{ height: 3, background: `linear-gradient(90deg,transparent,${T},transparent)` }} />
            <div style={{ padding: isMobile ? "20px" : "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
                <div style={{ width: isMobile ? 48 : 52, height: isMobile ? 48 : 52, borderRadius: 14, fontSize: isMobile ? 24 : 26, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,201,167,0.12)", border: "1px solid rgba(0,201,167,.3)" }}>{SUCCESS_STORIES[story].icon}</div>
                <span style={{ padding: isMobile ? "3px 12px" : "4px 14px", borderRadius: 100, fontSize: isMobile ? 10 : 12, fontWeight: 700, background: "rgba(0,201,167,0.12)", border: "1px solid rgba(0,201,167,.3)", color: T, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{SUCCESS_STORIES[story].result}</span>
              </div>
              <h3 style={{ color: "#fff", fontSize: isMobile ? "18px" : "22px", fontWeight: 800, marginBottom: isMobile ? 14 : 22, lineHeight: 1.3 }}>{SUCCESS_STORIES[story].title}</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "13px" : "14px", lineHeight: 1.7, marginBottom: isMobile ? 20 : 28 }}>{SUCCESS_STORIES[story].description}</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: isMobile ? 8 : 12 }}>
                {SUCCESS_STORIES[story].metrics.map((m, i) => (
                  <div key={i} style={{ textAlign: "center", padding: isMobile ? "12px 8px" : "18px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", transition: "transform .25s,background .25s", cursor: "default" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,0.06)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; }}>
                    <div style={{ fontSize: isMobile ? 16 : 20, marginBottom: 6 }}>{m.i}</div>
                    <div style={{ fontSize: isMobile ? "18px" : "24px", fontWeight: 900, marginBottom: 4, background: `linear-gradient(135deg,#fff 30%,${T})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{m.v}</div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 10 : 11, fontWeight: 500 }}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
            {SUCCESS_STORIES.map((_, i) => (<button key={i} onClick={() => setStory(i)} style={{ width: story === i ? 24 : 8, height: 8, borderRadius: 100, background: story === i ? T : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", transition: "all .3s ease" }} />))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: isMobile ? 28 : 36 }}>
            <a href="/case-studies" className="btn-teal" style={{ padding: isMobile ? "12px 28px" : "14px 36px", borderRadius: 10, background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: isMobile ? "13px" : "15px", fontFamily: "'Poppins',sans-serif", cursor: "pointer", textDecoration: "none", transition: "transform .2s,box-shadow .2s" }}>View All Case Studies →</a>
          </div>
        </div>
      </section>

      {/* ══ M4 — SERVICES ══════════════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 60%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(0,201,167,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.025) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 36 }}>
            <SectionBadge label="What We Deliver" />
            <SectionH2>SEO & Digital Marketing <GradText>Services We Offer</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "13px" : "14px", lineHeight: 1.75, maxWidth: 580, margin: "0 auto" }}>Data-driven marketing strategies for businesses across Canada, USA &amp; UK.</p>
          </div>
          <div className="svc-grid">
            {SERVICES.map(s => (
              <a key={s.title} href={``} className="svc-card" style={{ padding: isMobile ? "20px" : "24px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                  <div className="svc-icon" style={{ width: isMobile ? 48 : 52, height: isMobile ? 48 : 52, borderRadius: 14, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 22 : 24, flexShrink: 0, transition: "background .3s,transform .3s" }}>{s.icon}</div>
                  <span style={{ padding: isMobile ? "2px 8px" : "3px 10px", borderRadius: 100, fontSize: isMobile ? 9 : 10.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: T, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.18)" }}>{s.tag}</span>
                </div>
                <h3 style={{ fontSize: isMobile ? "15px" : "17px", fontWeight: 700, color: "#fff", lineHeight: 1.3, margin: 0 }}>{s.title}</h3>
                <p style={{ fontSize: isMobile ? "12px" : "13.5px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                {/* <span style={{display:"inline-flex",alignItems:"center",gap:6,color:T,fontSize:isMobile?"12px":"13px",fontWeight:600,marginTop:"auto"}}>Learn More <span>→</span></span> */}
              </a>
            ))}
          </div>
          {/* <div style={{display:"flex",justifyContent:"center",marginTop:isMobile?32:40}}>
            <a href="/services" className="btn-teal" style={{padding:isMobile?"12px 28px":"14px 36px",borderRadius:10,background:`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:700,fontSize:isMobile?"13px":"15px",fontFamily:"'Poppins',sans-serif",cursor:"pointer",textDecoration:"none",transition:"transform .2s,box-shadow .2s"}}>View All Services →</a>
          </div> */}
        </div>
      </section>

      {/* ══ M5 — BENEFITS ══════════════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 36 }}>
            <SectionBadge label="Why Market With Us" />
            <SectionH2>Key Benefits of <GradText>SEO & Digital Marketing</GradText></SectionH2>
          </div>
          <div className="kb-grid">
            {BENEFITS.map((b, i) => (
              <div key={i} className="kb-card" style={{ padding: isMobile ? "16px" : "20px", flexDirection: isMobile ? "column" : "row" }}>
                <div style={{ fontSize: isMobile ? "36px" : "42px", fontWeight: 900, lineHeight: 1, background: "linear-gradient(135deg,rgba(0,201,167,0.15) 0%,rgba(0,201,167,0.05) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", flexShrink: 0, width: isMobile ? "auto" : 72, textAlign: "center" }}>{b.num}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}><span style={{ fontSize: 20 }}>{b.icon}</span><h3 style={{ color: "#fff", fontSize: isMobile ? "16px" : "18px", fontWeight: 800, margin: 0 }}>{b.title}</h3></div>
                  <p style={{ color: "rgba(255,255,255,0.52)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.7, margin: "0 0 12px" }}>{b.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{b.tags.map(tag => <span key={tag} style={{ padding: isMobile ? "2px 8px" : "3px 10px", borderRadius: 100, fontSize: isMobile ? 9 : 10.5, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase" as const, color: T, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.18)" }}>{tag}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: isMobile ? 32 : 40 }}>
            <a href="/contact" className="btn-teal" style={{ padding: isMobile ? "12px 28px" : "14px 36px", borderRadius: 10, background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: isMobile ? "13px" : "15px", fontFamily: "'Poppins',sans-serif", cursor: "pointer", textDecoration: "none", transition: "transform .2s,box-shadow .2s" }}>Get Your Free Audit →</a>
          </div>
        </div>
      </section>

      {/* ══ M6 — TOOLS ═════════════════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: N1, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 32 }}>
            <SectionBadge label="Our Tech Stack" />
            <SectionH2>Leading Platform Tools <GradText>That We Use</GradText></SectionH2>
          </div>
          <div className="pt-grid">
            {TOOLS.map((tool, i) => (
              <div key={i} className="pt-card" style={{ background: tool.clr, border: `1px solid ${tool.bd}`, padding: isMobile ? "16px 12px" : "20px 16px" }}>
                <div className="pt-icon" style={{ width: isMobile ? 48 : 56, height: isMobile ? 48 : 56, borderRadius: 15, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 22 : 26, marginBottom: isMobile ? 12 : 16, background: "rgba(255,255,255,0.05)", border: `1px solid ${tool.bd}`, transition: "transform .25s" }}>{tool.icon}</div>
                <h3 style={{ color: "#fff", fontSize: isMobile ? "14px" : "16px", fontWeight: 700, marginBottom: 6 }}>{tool.name}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "11px" : "13px", lineHeight: 1.6, margin: 0 }}>{tool.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ M7 — ACCORDION ═════════════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 32 }}>
            <SectionBadge label="Tailored Approach" />
            <SectionH2>Hire Developers <GradText>Tailored to Your Needs</GradText></SectionH2>
          </div>
          <div className="two-col" style={{ marginBottom: isMobile ? 12 : 16 }}>
            <p style={{ color: T, fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>By Business Type</p>
            <p style={{ color: T, fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>By Marketing Type</p>
          </div>
          <div className="two-col">
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>{HIRE_LEFT.map((item, i) => <AccItem key={item.title} item={item} open={hireL === i} toggle={() => setHireL(hireL === i ? null : i)} />)}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>{HIRE_RIGHT.map((item, i) => <AccItem key={item.title} item={item} open={hireR === i} toggle={() => setHireR(hireR === i ? null : i)} />)}</div>
          </div>
          <div style={{ display: "flex", gap: isMobile ? 12 : 16, marginTop: isMobile ? 32 : 40, justifyContent: "center", flexWrap: "wrap" }}>
            {/* <a href="/free-marketing-plan" className="btn-teal" style={{padding:isMobile?"12px 24px":"14px 32px",borderRadius:10,background:`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:700,fontSize:isMobile?"13px":"15px",fontFamily:"'Poppins',sans-serif",cursor:"pointer",textDecoration:"none",transition:"transform .2s,box-shadow .2s"}}>📊 Get a Free Marketing Plan</a> */}
            <a href="/pricing" style={{ padding: isMobile ? "12px 24px" : "14px 32px", borderRadius: 10, border: "1.5px solid rgba(0,201,167,0.35)", background: "transparent", color: T, fontWeight: 600, fontSize: isMobile ? "13px" : "15px", fontFamily: "'Poppins',sans-serif", cursor: "pointer", textDecoration: "none", transition: "border-color .2s,background .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = T; (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,0.07)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,167,0.35)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>View Pricing →</a>
          </div>
        </div>
      </section>

      {/* ══ M8 — AI SOLUTIONS ══════════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N2} 0%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ marginBottom: isMobile ? 24 : 32, maxWidth: 620, marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
            <SectionBadge label="AI-Powered" />
            <SectionH2>Leverage <GradText>AI-Powered SEO & Digital Marketing</GradText> Solutions</SectionH2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "13px" : "14px", lineHeight: 1.8 }}>We use AI to analyse data, predict trends, automate campaigns, and deliver real-time insights for better ROI.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: isMobile ? 16 : 20 }}>
            {AI_FEATS.map((f, i) => (
              <div key={i} style={{ background: "rgba(0,201,167,0.05)", border: "1px solid rgba(0,201,167,0.15)", borderRadius: 16, padding: isMobile ? "20px 16px" : "28px 20px", textAlign: "center" }}>
                <div style={{ fontSize: isMobile ? 30 : 36, marginBottom: isMobile ? 12 : 16 }}>{f.icon}</div>
                <h3 style={{ color: "#fff", fontSize: isMobile ? "14px" : "16px", fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.52)", fontSize: isMobile ? "11px" : "13px", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ M9 — CTA BANNER ════════════════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ background: "linear-gradient(135deg,#0055b3 0%,#0077cc 35%,#0055b3 100%)", backgroundSize: "300% 300%", animation: "ctaBgShift 8s ease infinite", padding: isMobile ? "60px 20px" : "80px 48px", textAlign: "center", position: "relative" }}>
          <div style={{ position: "relative", zIndex: 2, maxWidth: isMobile ? "100%" : 800, margin: "0 auto" }}>
            <h2 style={{ fontSize: isMobile ? "clamp(22px,6vw,28px)" : isTablet ? "32px" : "clamp(36px,4vw,48px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Want <span style={{ textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.4)" }}>SEO & DIGITAL MARKETING solutions</span> that take your business to the next level?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: isMobile ? "16px" : "18px", lineHeight: 1.6, marginBottom: isMobile ? 28 : 36, fontWeight: 500 }}>Connect with NNC Digital today.</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "14px 32px" : "16px 40px", borderRadius: "8px", background: "#fff", color: "#0055b3", fontWeight: 700, fontSize: isMobile ? "15px" : "16px", fontFamily: "'Poppins',sans-serif", border: "none", cursor: "pointer", textDecoration: "none", transition: "transform .2s,box-shadow .2s", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 30px rgba(0,0,0,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"; }}>Connect Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ M10 — WHY CHOOSE US ════════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 32 }}>
            <SectionBadge label="Our Story" />
            <SectionH2>Why Choose Us as Your <GradText>Digital Marketing</GradText> Partner?</SectionH2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "13px" : "15px", lineHeight: 1.8, maxWidth: 700, margin: "0 auto 8px" }}>Backed by <span style={{ color: "#fff", fontWeight: 600 }}>Nakshatra Namaha Creations Pvt. Ltd.</span> — one of Bangalore's most respected digital studios with <span style={{ color: T, fontWeight: 600 }}>8+ years of experience</span> and <span style={{ color: T, fontWeight: 600 }}>565+ projects delivered</span>.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)", gap: 12, marginBottom: isMobile ? 24 : 40 }}>
            {WCU_POINTS.map((p, i) => (
              <div key={i} className="wcu-point" style={{ display: "flex", alignItems: "center", gap: 14, padding: isMobile ? "12px 14px" : "14px 18px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", transition: "border-color .2s,background .2s,transform .2s", cursor: "default" }}>
                <span style={{ fontSize: isMobile ? 16 : 18, flexShrink: 0 }}>{p.icon}</span>
                <span style={{ color: "rgba(255,255,255,0.72)", fontSize: isMobile ? "12px" : "14px", fontWeight: 500 }}>{p.text}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: 16, marginBottom: isMobile ? 24 : 40 }}>
            {WCU_STATS.map(st => (
              <div key={st.l} className="wcu-stat" style={{ textAlign: "center", padding: isMobile ? "16px 10px" : "22px 14px", borderRadius: 14, border: "1px solid rgba(0,201,167,0.15)", background: "rgba(0,201,167,0.05)", transition: "transform .25s,background .25s", cursor: "default" }}>
                <div style={{ fontSize: isMobile ? "18px" : "24px", fontWeight: 900, marginBottom: 4, background: `linear-gradient(135deg,#fff 30%,${T})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}><Counter to={st.n} sfx={st.s} /></div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? 10 : 11, fontWeight: 500 }}>{st.l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: isMobile ? 12 : 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" className="btn-teal" style={{ padding: isMobile ? "12px 24px" : "14px 32px", borderRadius: 10, background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: isMobile ? "13px" : "15px", fontFamily: "'Poppins',sans-serif", cursor: "pointer", textDecoration: "none", transition: "transform .2s,box-shadow .2s" }}>📅 Book a Strategy Call</a>
            <a href="/case-studies" style={{ padding: isMobile ? "12px 24px" : "14px 32px", borderRadius: 10, border: "1.5px solid rgba(0,201,167,0.35)", background: "transparent", color: T, fontWeight: 600, fontSize: isMobile ? "13px" : "15px", fontFamily: "'Poppins',sans-serif", cursor: "pointer", textDecoration: "none", transition: "border-color .2s,background .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = T; (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,0.07)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,167,0.35)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>Our Work →</a>
          </div>
        </div>
      </section>

      {/* ══ M11 — GLOBAL PRESENCE ══════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N0} 0%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h2 style={{ fontSize: isMobile ? "32px" : "48px", fontWeight: 800, color: "#fff", textAlign: "center", margin: "0 0 20px", letterSpacing: "-0.02em" }}>
            Global <span style={{ background: `linear-gradient(135deg,${T},#fff)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Presence</span>
          </h2>
          <div style={{ width: 120, height: 4, background: `linear-gradient(90deg,transparent,${T},transparent)`, margin: "0 auto 40px", borderRadius: 2 }} />
          <div style={{ display: "flex", gap: isMobile ? 8 : 12, justifyContent: "center", marginBottom: isMobile ? 30 : 40, flexWrap: "wrap" }}>
            {[{ key: "int", label: "North America & UK", icon: "🌎" }, { key: "india", label: "India (HQ)", icon: "🇮🇳" }].map(t => (
              <button key={t.key} onClick={() => setGTab(t.key as "int" | "india")} style={{ padding: isMobile ? "12px 24px" : "14px 32px", borderRadius: 50, border: "none", background: gTab === t.key ? `linear-gradient(135deg,${T},${TD})` : "rgba(255,255,255,0.05)", color: gTab === t.key ? "#000" : "#fff", fontSize: isMobile ? 14 : 16, fontWeight: 600, cursor: "pointer", transition: "all 0.3s ease", boxShadow: gTab === t.key ? `0 8px 20px ${T}40` : "none", display: "flex", alignItems: "center", gap: 8 }}
                onMouseEnter={e => { if (gTab !== t.key) { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
                onMouseLeave={e => { if (gTab !== t.key) { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateY(0)"; } }}><span>{t.icon}</span>{t.label}</button>
            ))}
          </div>
          {[
            { tab: "int", items: [{ city: "Toronto, Canada", phone: "+91 9900566466", flag: "🇨🇦" }, { city: "New York, USA", phone: "+91 9900566466", flag: "🇺🇸" }, { city: "London, UK", phone: "+91 9900566466", flag: "🇬🇧" }], cardStyle: { background: "linear-gradient(145deg,rgba(255,255,255,.03),rgba(255,255,255,.01))", border: `1px solid ${T}20` } },
            { tab: "india", items: [{ city: "Bangalore HQ", phone: "+91 9900566466", flag: "🇮🇳" }, { city: "Mysore", phone: "+91 9900566466", flag: "🇮🇳" }, { city: "Mumbai", phone: "+91 9900566466", flag: "🇮🇳" }, { city: "Hyderabad", phone: "+91 9900566466", flag: "🇮🇳" }], cardStyle: { background: `linear-gradient(145deg,${T}05,${T}02)`, border: `1px solid ${T}30` } },
          ].map(panel => gTab === panel.tab && (
            <div key={panel.tab} style={{ ...panel.cardStyle, borderRadius: 24, padding: isMobile ? 24 : 36, backdropFilter: "blur(10px)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {panel.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: 16, background: "rgba(255,255,255,.02)", borderRadius: 16, border: "1px solid rgba(255,255,255,.05)", transition: "all .3s ease", cursor: "default" }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateX(8px)"; el.style.background = `${T}08`; el.style.borderColor = `${T}40`; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.background = "rgba(255,255,255,.02)"; el.style.borderColor = "rgba(255,255,255,.05)"; }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: `${T}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{item.flag}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 600, fontSize: isMobile ? 15 : 16, color: "#fff", margin: 0, marginBottom: 4 }}>{item.city}</p>
                      <p style={{ color: T, fontSize: isMobile ? 14 : 15, fontWeight: 500, margin: 0 }}>📞 {item.phone}</p>
                    </div>
                  </div>
                ))}
                {panel.tab === "india" && (
                  <div style={{ marginTop: 8, padding: 20, background: `${T}08`, borderRadius: 16, border: `1px dashed ${T}40`, textAlign: "center" }}>
                    <span style={{ color: T, fontSize: isMobile ? 14 : 16, fontWeight: 600 }}>✉ info@nakshatranamahacreations.com</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ M12 — FAQS ═════════════════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 32 }}>
            <SectionBadge label="FAQs" />
            <SectionH2>Frequently Asked <GradText>Questions</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? "13px" : "15px", lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>Everything you need to know about SEO & digital marketing for businesses in Canada, USA &amp; UK.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
            {[
              { q: "How long does SEO take to show results in Canada or the UK?", a: "Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process." },
              { q: "Do you manage Google Ads in the USA and Canada?", a: "Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process." },
              { q: "Can you audit our existing website's SEO?", a: "Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process." },
              { q: "What is your local SEO approach for Toronto or London?", a: "Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process." },
            ].map((f, i) => (
              <div key={i} onClick={() => setFaq(faq === i ? null : i)} style={{ border: `1px solid ${faq === i ? "rgba(0,201,167,0.4)" : "rgba(255,255,255,0.08)"}`, borderRadius: 16, background: faq === i ? "rgba(0,201,167,0.06)" : "rgba(255,255,255,0.02)", overflow: "hidden", cursor: "pointer", transition: "all .25s ease" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: isMobile ? 12 : 16, padding: isMobile ? "14px 16px" : "20px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 12 }}>
                    <span style={{ color: T, fontSize: isMobile ? 12 : 13, fontWeight: 800, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", borderRadius: 8, padding: isMobile ? "3px 8px" : "4px 10px", flexShrink: 0 }}>Q{i + 1}</span>
                    <span style={{ fontSize: isMobile ? "13px" : "15px", fontWeight: 700, color: faq === i ? "#fff" : "rgba(255,255,255,0.78)", lineHeight: 1.4 }}>{f.q}</span>
                  </div>
                  <div style={{ width: isMobile ? 26 : 30, height: isMobile ? 26 : 30, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 15 : 17, fontWeight: 700, lineHeight: 1, background: faq === i ? T : "rgba(255,255,255,0.07)", border: `1px solid ${faq === i ? T : "rgba(255,255,255,0.12)"}`, color: faq === i ? "#000" : "rgba(255,255,255,0.5)", transform: faq === i ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
                </div>
                <div style={{ maxHeight: faq === i ? 500 : 0, overflow: "hidden", transition: "max-height .38s ease" }}>
                  <p style={{ padding: isMobile ? "0 16px 14px 48px" : "0 22px 22px 60px", color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.7, margin: 0 }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: isMobile ? 28 : 36 }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? 12 : 14, marginBottom: 16, textAlign: "center" }}>Still have questions? We respond within 24 hours.</p>
            <Link href="/contact" className="btn-teal" style={{ padding: isMobile ? "12px 28px" : "13px 32px", borderRadius: 10, background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: isMobile ? "13px" : "15px", fontFamily: "'Poppins',sans-serif", cursor: "pointer", textDecoration: "none", transition: "transform .2s,box-shadow .2s" }}>Ask Us Anything →</Link>
          </div>
        </div>
      </section>

      {/* ══ M13 — CONTACT FORM — EmailJS integrated ════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N2} 0%,${N0} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 32 }}>
            <SectionBadge label="Get In Touch" />
            <SectionH2>Ready to Build <GradText>Next-Level</GradText> Custom Digital Solutions?</SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? "13px" : "15px", lineHeight: 1.75, maxWidth: 540, margin: "0 auto" }}>Tell us about your marketing goals. We'll respond within 24 hours with a free audit and honest advice.</p>
          </div>
          <div className="cf-grid">
            {/* Left — Form */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: isMobile ? "20px" : "36px" }}>
              {cSubmitted ? (
                <div style={{ textAlign: "center", padding: isMobile ? "30px 0" : "48px 0" }}>
                  <div style={{ fontSize: isMobile ? 48 : 56, marginBottom: 16 }}>✅</div>
                  <h3 style={{ color: "#fff", fontSize: isMobile ? 18 : 22, fontWeight: 800, marginBottom: 8 }}>Message Sent!</h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 13 : 15, lineHeight: 1.7, marginBottom: 20 }}>Thank you — we'll contact you within 24 hours with your free marketing audit.</p>
                  <button onClick={() => setCSubmitted(false)} style={{ padding: isMobile ? "10px 22px" : "12px 28px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: isMobile ? "13px" : "14px", fontFamily: "'Poppins',sans-serif", cursor: "pointer" }}>Send Another →</button>
                </div>
              ) : (
                <form onSubmit={handleCSubmit} noValidate>
                  <div className="cf-name" style={{ marginBottom: isMobile ? 12 : 16 }}>
                    <div>
                      <label style={{ display: "block", fontSize: isMobile ? 11 : 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Full Name *</label>
                      <input className={`fi${cTouched.name && cErr.name ? " fi-err" : ""}`} style={cTouched.name && cErr.name ? iSLgE : iSLg} placeholder="Jane Smith" value={cForm.name} onChange={e => setC("name", e.target.value)} onBlur={cBlur("name")} />
                      {cTouched.name && <FieldErr msg={cErr.name} />}
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: isMobile ? 11 : 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Phone *</label>
                      <div style={{ display: "flex", gap: 8, flexDirection: isMobile ? "column" : "row" }}>
                        <select className="fi" style={{ ...iSLg, width: isMobile ? "100%" : 90, flexShrink: 0, padding: isMobile ? "12px 14px" : "13px 8px", cursor: "pointer" }} value={cForm.dialCode} onChange={e => setC("dialCode", e.target.value)}>
                          {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                        </select>
                        <input className={`fi${cTouched.phone && cErr.phone ? " fi-err" : ""}`} style={{ ...(cTouched.phone && cErr.phone ? iSLgE : iSLg), flex: 1 }} type="tel" placeholder="647 XXX XXXX" value={cForm.phone} onChange={e => setC("phone", e.target.value)} onBlur={cBlur("phone")} />
                      </div>
                      {cTouched.phone && <FieldErr msg={cErr.phone} />}
                    </div>
                  </div>
                  <div style={{ marginBottom: isMobile ? 12 : 16 }}>
                    <label style={{ display: "block", fontSize: isMobile ? 11 : 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Business Email *</label>
                    <input className={`fi${cTouched.email && cErr.email ? " fi-err" : ""}`} style={cTouched.email && cErr.email ? iSLgE : iSLg} type="email" placeholder="jane@yourcompany.com" value={cForm.email} onChange={e => setC("email", e.target.value)} onBlur={cBlur("email")} />
                    {cTouched.email && <FieldErr msg={cErr.email} />}
                  </div>
                  <div style={{ marginBottom: isMobile ? 12 : 16 }}>
                    <label style={{ display: "block", fontSize: isMobile ? 11 : 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Service of Interest</label>
                    <select className="fi" style={{ ...iSLg, cursor: "pointer" }} value={cForm.service} onChange={e => setC("service", e.target.value)}>
                      <option value="">Select...</option>
                      {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom: isMobile ? 16 : 20 }}>
                    <label style={{ display: "block", fontSize: isMobile ? 11 : 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Project Description *</label>
                    <textarea className={`fi${cTouched.project && cErr.project ? " fi-err" : ""}`} style={cTouched.project && cErr.project ? taErr : taS} placeholder="Tell us about your business, target audience, and marketing goals..." value={cForm.project} onChange={e => setC("project", e.target.value)} onBlur={cBlur("project")} />
                    {cTouched.project && <FieldErr msg={cErr.project} />}
                  </div>
                  <button className="btn-teal" type="submit" disabled={cLoading} style={{ width: "100%", padding: isMobile ? "13px" : "15px", borderRadius: 10, border: "none", background: cLoading ? "rgba(0,201,167,0.5)" : `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 800, fontSize: isMobile ? "14px" : "15px", fontFamily: "'Poppins',sans-serif", cursor: cLoading ? "wait" : "pointer", opacity: cLoading ? .7 : 1, transition: "transform .2s,box-shadow .2s" }}>
                    {cLoading ? "Sending…" : "Submit — Get My Free Audit →"}
                  </button>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: isMobile ? 10 : 11.5, textAlign: "center", marginTop: 12 }}>🔒 Your information is 100% secure and never shared.</p>
                </form>
              )}
            </div>

            {/* Right — Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 16 : 20 }}>
              <div style={{ background: "rgba(0,201,167,0.05)", border: "1px solid rgba(0,201,167,0.18)", borderRadius: 18, padding: isMobile ? "20px" : "28px" }}>
                <h3 style={{ color: "#fff", fontSize: isMobile ? "15px" : "16px", fontWeight: 800, marginBottom: isMobile ? 14 : 18 }}>What Happens After You Submit?</h3>
                {[{ s: "1", text: "We review your marketing goals within a few hours." }, { s: "2", text: "A senior marketing strategist calls you within 24 hours." }, { s: "3", text: "We prepare a free audit report with actionable recommendations." }, { s: "4", text: "You decide — no pressure, no obligation." }].map((st, i) => (
                  <div key={i} style={{ display: "flex", gap: isMobile ? 10 : 14, alignItems: "flex-start", marginBottom: i < 3 ? (isMobile ? 12 : 16) : 0, padding: isMobile ? "8px 12px" : "12px 14px", borderRadius: 10, background: "rgba(255,255,255,0.03)", transition: "background .2s", cursor: "default" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,0.07)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"}>
                    <div style={{ width: isMobile ? 28 : 32, height: isMobile ? 28 : 32, borderRadius: "50%", flexShrink: 0, background: `linear-gradient(135deg,${T},${TD})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 10 : 11, fontWeight: 900, color: "#000" }}>{st.s}</div>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.6, margin: 0 }}>{st.text}</p>
                  </div>
                ))}
              </div>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: isMobile ? "20px" : "26px" }}>
                <h3 style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: isMobile ? 14 : 18 }}>Direct Contacts</h3>
                {[{ flag: "🇨🇦", label: "Canada", phone: "+91 9900566466" }, { flag: "🇺🇸", label: "USA", phone: "+91 9900566466" }, { flag: "🇬🇧", label: "UK", phone: "+91 9900566466" }].map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: isMobile ? "8px 0" : "12px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none", flexWrap: "wrap", gap: 8 }}>
                    <span style={{ color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "12px" : "14px", fontWeight: 500 }}>{c.flag} {c.label}</span>
                    <a href={`tel:${c.phone.replace(/\s|-/g, "")}`} className="h-teal" style={{ color: T, fontSize: isMobile ? "12px" : "14px", fontWeight: 700, textDecoration: "none" }}>{c.phone}</a>
                  </div>
                ))}
                <div style={{ marginTop: isMobile ? 12 : 16, paddingTop: isMobile ? 12 : 16, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <a href="mailto:hello@nncdigital.com" className="h-teal" style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "12px" : "14px", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>✉️ hello@nncdigital.com</a>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["🔵 Google Partner", "🏆 ISO Certified", "🔒 GDPR Compliant", "🍁 PIPEDA Ready", "⭐ Clutch Top Agency"].map(b => (
                  <span key={b} style={{ padding: isMobile ? "4px 10px" : "6px 12px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "10px" : "12px", fontWeight: 500 }}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}