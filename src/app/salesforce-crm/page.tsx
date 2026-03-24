"use client";
import { useState, useEffect, useRef, CSSProperties } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import { getServiceSchema } from "../lib/schema";
import SchemaMarkup from "../components/SchemaMarkup";
import Link from "next/link";

// ─── EmailJS Config ────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_pklyrv6";
const EMAILJS_TEMPLATE_ID = "template_de6srqh";
const EMAILJS_PUBLIC_KEY = "oY8s46fogw6l5q1b4";

// ─── Design tokens ─────────────────────────────────────────────────────────────
const A = "#00A1E0";
const AD = "#0088cc";
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";
const TD = "#00a07a";
const T = "#00C9A7";

// ─── Data ──────────────────────────────────────────────────────────────────────
const LOGOS = ["clients1.png", "clients2.png", "clients3.png", "clients4.png", "clients5.png",
  "clients6.png", "clients7.png", "clients8.png", "clients9.png", "clients10.png", "clients11.png",
  "clients12.png", "clients13.png", "clients14.png", "clients15.png", "clients16.png", "clients17.png", "clients18.png"];

const SUCCESS_STORIES = [
  {
    industry: "Manufacturing", icon: "🏭", result: "35% Efficiency Gain",
    title: "Streamlined Operations for a Canadian Manufacturer",
    description: "Custom Salesforce implementation connecting production, inventory, and sales teams in real-time.",
    metrics: [{ l: "Efficiency", v: "+35%", i: "⚡" }, { l: "Response Time", v: "-52%", i: "⏱️" }, { l: "Data Accuracy", v: "99%", i: "✅" }],
  },
  {
    industry: "Healthcare", icon: "🏥", result: "42% More Bookings",
    title: "Patient Engagement Platform for a UK Hospital Group",
    description: "Salesforce Health Cloud implementation with automated appointments, follow-ups, and compliance tracking.",
    metrics: [{ l: "Bookings", v: "+42%", i: "📅" }, { l: "No-shows", v: "-67%", i: "📉" }, { l: "Patient Satisfaction", v: "94%", i: "⭐" }],
  },
  {
    industry: "D2C Retail", icon: "🛍️", result: "2.4× Conversion Rate",
    title: "Unified Customer View for a US D2C Brand",
    description: "Salesforce Marketing Cloud + Sales Cloud integration delivering personalized journeys across channels.",
    metrics: [{ l: "Conversion", v: "2.4×", i: "📈" }, { l: "Revenue/Visit", v: "+89%", i: "💰" }, { l: "ROI", v: "312%", i: "🚀" }],
  },
];

const SERVICES = [
  { icon: "📈", title: "Salesforce Sales Cloud", desc: "Automate sales processes, track opportunities, and close deals faster with intelligent pipeline management.", tag: "Sales", slug: "sales-cloud" },
  { icon: "🎧", title: "Salesforce Service Cloud", desc: "Omnichannel support, case management, and customer service automation for world-class experiences.", tag: "Service", slug: "service-cloud" },
  { icon: "📱", title: "Salesforce Marketing Cloud", desc: "Personalized journeys, email marketing, and cross-channel engagement tracking at scale.", tag: "Marketing", slug: "marketing-cloud" },
  { icon: "💰", title: "Salesforce CPQ", desc: "Configure, price, quote — with smart approvals, contract management, and renewal automation.", tag: "CPQ", slug: "cpq" },
  { icon: "⚡", title: "Apex & Lightning Development", desc: "Custom logic, Lightning components, and complex automations built by certified developers.", tag: "Dev", slug: "apex-lightning" },
  { icon: "🔗", title: "Salesforce Integration", desc: "Connect ERP, e-commerce, marketing tools, and legacy systems into a unified data layer.", tag: "Integration", slug: "integration" },
  { icon: "🔄", title: "Data Migration", desc: "Zero-loss migration from HubSpot, Pipedrive, Excel, or legacy CRMs with full validation.", tag: "Migration", slug: "data-migration" },
  { icon: "📚", title: "Training & Adoption", desc: "Role-based training, change management, and post-launch hypercare for maximum adoption.", tag: "Training", slug: "training" },
  { icon: "🧩", title: "AppExchange Development", desc: "Custom AppExchange apps built and listed for your specific industry needs.", tag: "Apps", slug: "appexchange" },
];

const BENEFITS = [
  { num: "01", icon: "🎯", title: "Tailored to Your Process", desc: "We don't force you into Salesforce defaults. Every object, field, and workflow matches your exact sales methodology.", tags: ["Custom Objects", "Workflows", "Approvals"] },
  { num: "02", icon: "⚙️", title: "Full Platform Expertise", desc: "From Sales Cloud to Marketing Cloud, CPQ to Experience Cloud — we work across the entire Salesforce ecosystem.", tags: ["Sales Cloud", "Service Cloud", "Marketing Cloud"] },
  { num: "03", icon: "🧹", title: "Clean Data Migration", desc: "Deduplication, mapping, validation, and zero-downtime cutover from any source — HubSpot, Pipedrive, Excel, or legacy CRM.", tags: ["No Data Loss", "Validation", "Mapping"] },
  { num: "04", icon: "🚀", title: "High User Adoption", desc: "Beautiful Lightning interfaces, automated data entry, and hands-on training so your team actually wants to use Salesforce.", tags: ["Lightning UI", "Automation", "Training"] },
];

const TOOLS = [
  { icon: "📊", name: "Sales Cloud", purpose: "Enterprise-grade sales automation.", clr: "rgba(0,161,224,.08)", bd: "rgba(0,161,224,.22)" },
  { icon: "🎧", name: "Service Cloud", purpose: "Best-in-class customer service platform.", clr: "rgba(0,171,132,.08)", bd: "rgba(0,171,132,.22)" },
  { icon: "📱", name: "Marketing Cloud", purpose: "Enterprise-grade engagement at scale.", clr: "rgba(242,120,159,.08)", bd: "rgba(242,120,159,.22)" },
  { icon: "🌐", name: "Experience Cloud", purpose: "Best-in-class for portals & communities.", clr: "rgba(171,115,196,.08)", bd: "rgba(171,115,196,.22)" },
  { icon: "🤝", name: "Pardot", purpose: "B2B marketing automation powerhouse.", clr: "rgba(255,154,60,.08)", bd: "rgba(255,154,60,.22)" },
  { icon: "📈", name: "Tableau", purpose: "Best-in-class analytics & visualisation.", clr: "rgba(69,133,255,.08)", bd: "rgba(69,133,255,.22)" },
  { icon: "🔌", name: "MuleSoft", purpose: "Enterprise-grade integration framework.", clr: "rgba(119,119,255,.08)", bd: "rgba(119,119,255,.22)" },
  { icon: "⚡", name: "Apex", purpose: "Best-in-class for backend logic.", clr: "rgba(0,201,167,.08)", bd: "rgba(0,201,167,.22)" },
  { icon: "🧩", name: "Lightning Web Components", purpose: "Enterprise-grade component framework.", clr: "rgba(236,185,57,.08)", bd: "rgba(236,185,57,.22)" },
  { icon: "📱", name: "Mobile SDK", purpose: "Best-in-class for mobile Salesforce apps.", clr: "rgba(0,120,215,.08)", bd: "rgba(0,120,215,.22)" },
];

const HIRE_L = [
  { icon: "🏢", title: "Enterprises", desc: "Complex multi-location operations with enterprise-grade security, approvals, and permission hierarchies." },
  { icon: "🚀", title: "Start-ups", desc: "Scalable systems from day one — start simple, add automation and AI as you grow without re-platforming." },
  { icon: "🎯", title: "Agencies", desc: "Client management, project billing, retainer tracking, and performance dashboards — Salesforce for agencies." },
];
const HIRE_R = [
  { icon: "📊", title: "Analytical CRM", desc: "Turn raw customer data into actionable intelligence. Identify trends, reduce churn, and make confident decisions." },
  { icon: "⚙️", title: "Operational CRM", desc: "Automate daily workflows — from lead assignment to quote generation — so your team focuses on selling." },
  { icon: "🤝", title: "Collaborative CRM", desc: "Unify sales, service, and marketing around a single customer view — eliminating silos and duplication." },
];

const AI_FEATS = [
  { icon: "📊", title: "AI Data Analysis", desc: "Einstein Analytics uncovers patterns in your sales data — predicting which deals are most likely to close and why." },
  { icon: "🔮", title: "Predictive Insights", desc: "Forecast revenue, identify at-risk accounts, and get next-best-action recommendations powered by machine learning." },
  { icon: "🤖", title: "Automation at Scale", desc: "AI-powered bots handle lead scoring, email follow-ups, and data entry — 24/7, without human intervention." },
  { icon: "📈", title: "Real-Time Dashboards", desc: "Live KPIs, pipeline velocity, and team performance metrics — updated instantly as deals progress." },
];

const WCU_POINTS = [
  { icon: "🏆", text: "8+ years of proven digital excellence" },
  { icon: "🌍", text: "Serving Canada, USA & UK markets" },
  { icon: "⚡", text: "565+ projects delivered globally" },
  { icon: "🤝", text: "Client-first culture, enterprise-grade quality" },
  { icon: "🔒", text: "GDPR, PIPEDA & CCPA compliant delivery" },
  { icon: "📱", text: "Full-stack: Web, Mobile, CRM, ERP, AI" },
];
const WCU_STATS = [{ n: 1500, s: "+", l: "Web Projects" }, { n: 500, s: "+", l: "Mobile Apps" }, { n: 1800, s: "+", l: "IT Talents" }, { n: 25, s: "+", l: "Industries" }];

const FAQS = [
  { q: "Are you a certified Salesforce partner?", a: "Yes — our senior developers hold active Salesforce certifications including Administrator, Platform Developer I & II, Sales Cloud Consultant, and Service Cloud Consultant. For clients in Canada, USA, and UK, we bring certified expertise with local accountability." },
  { q: "Can you migrate us from HubSpot to Salesforce?", a: "Absolutely. We've migrated dozens of businesses from HubSpot, Pipedrive, Zoho, and Excel to Salesforce. Our process includes data cleansing, field mapping, historical data preservation, and a zero-downtime cutover — typically completed in 4–8 weeks." },
  { q: "How long does a Salesforce implementation take?", a: "A standard Sales Cloud implementation takes 6–12 weeks. Complex projects with CPQ, Marketing Cloud, or custom integrations run 12–20 weeks. For UK and EU clients, we include GDPR compliance configuration from day one. All timelines are fixed-price and guaranteed." },
  { q: "Do you offer Salesforce training?", a: "Yes — we believe training is the difference between adoption and abandonment. We provide role-based training for sales reps, managers, and admins, plus documentation, video tutorials, and a 30-day post-launch hypercare period." },
  { q: "What's the cost of Salesforce implementation in Canada or the UK?", a: "A focused Sales Cloud implementation starts from CAD $15,000–$25,000 / £12,000–£20,000. Complex builds with Marketing Cloud, CPQ, or integrations range from CAD $35,000–$75,000 / £28,000–£60,000. All quotes include data migration and training." },
  { q: "Can you integrate Salesforce with our ERP or e-commerce platform?", a: "Yes — we specialise in integrating Salesforce with ERP systems (SAP, NetSuite, Dynamics), e-commerce platforms (Shopify, Magento, WooCommerce), and marketing tools. Using MuleSoft or custom APIs, we ensure real-time sync across your entire stack." },
];

const SERVICES_LIST = ["Salesforce Sales Cloud", "Salesforce Service Cloud", "Salesforce Marketing Cloud", "Salesforce CPQ", "Integration", "Data Migration", "Training", "Other"];
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
    title: `New Salesforce Consultation from ${data.firstName} ${data.lastName}`.trim(),
    reply_to: data.email,
  };
}

// ─── Inline error ──────────────────────────────────────────────────────────────
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

// ─── Helpers ───────────────────────────────────────────────────────────────────
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
      pts.forEach(p => { p.x += p.vx; p.y += p.vy; if (p.x < 0) p.x = W; if (p.x > W) p.x = 0; if (p.y < 0) p.y = H; if (p.y > H) p.y = 0; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(0,161,224,${p.a})`; ctx.fill(); });
      for (let i = 0; i < pts.length; i++)for (let j = i + 1; j < pts.length; j++) { const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy); if (d < 90) { ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.strokeStyle = `rgba(0,161,224,${.06 * (1 - d / 90)})`; ctx.lineWidth = .5; ctx.stroke(); } }
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

function GradText({ children }: { children: React.ReactNode }) {
  return <span style={{ background: "linear-gradient(135deg,#00A1E0,#00C9A7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{children}</span>;
}

function SectionBadge({ label }: { label: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,161,224,0.08)", border: "1px solid rgba(0,161,224,0.22)", borderRadius: 100, padding: "6px 18px", marginBottom: 14 }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: A, display: "block", boxShadow: `0 0 8px ${A}` }} />
      <span style={{ color: A, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>{label}</span>
    </div>
  );
}

function SectionH2({ children, fontSize }: { children: React.ReactNode; fontSize?: string }) {
  return <h2 style={{ fontSize: fontSize || "clamp(22px,3vw,38px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 12 }}>{children}</h2>;
}

function AccItem({ item, open, toggle }: { item: { icon: string; title: string; desc: string }; open: boolean; toggle: () => void }) {
  return (
    <div onClick={toggle} style={{ borderRadius: 14, border: `1px solid ${open ? "rgba(0,161,224,0.4)" : "rgba(255,255,255,0.08)"}`, background: open ? "rgba(0,161,224,0.06)" : "rgba(255,255,255,0.02)", overflow: "hidden", cursor: "pointer", transition: "border-color .25s,background .25s" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 18px", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, flexShrink: 0, background: open ? "rgba(0,161,224,0.15)" : "rgba(255,255,255,0.05)", border: `1px solid ${open ? "rgba(0,161,224,0.3)" : "rgba(255,255,255,0.1)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, transition: "background .25s" }}>{item.icon}</div>
          <span style={{ fontSize: 14, fontWeight: 700, color: open ? "#fff" : "rgba(255,255,255,0.72)", fontFamily: "'Poppins',sans-serif", transition: "color .2s" }}>{item.title}</span>
        </div>
        <div style={{ width: 26, height: 26, borderRadius: "50%", flexShrink: 0, background: open ? A : "rgba(255,255,255,0.07)", border: `1px solid ${open ? A : "rgba(255,255,255,0.14)"}`, display: "flex", alignItems: "center", justifyContent: "center", color: open ? "#000" : "rgba(255,255,255,0.55)", fontSize: 17, fontWeight: 700, lineHeight: 1, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
      </div>
      <div style={{ maxHeight: open ? 220 : 0, overflow: "hidden", transition: "max-height .35s ease" }}>
        <p style={{ padding: "0 18px 18px 70px", color: "rgba(255,255,255,0.5)", fontSize: 13.5, lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function SalesforcePage() {
  const serviceSchema = getServiceSchema(
    "Salesforce CRM",
    "Salesforce CRM Development, Customisation & Implementation for Canada, USA & UK. Our certified specialists configure and customise Salesforce to match your exact business processes."
  );

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const r = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
  }, []);
  const isMobile = windowWidth <= 640;
  const isTablet = windowWidth > 640 && windowWidth <= 1024;

  // Init EmailJS once
  useEffect(() => { emailjs.init(EMAILJS_PUBLIC_KEY); }, []);

  const sp = () => isMobile ? "50px 20px" : isTablet ? "70px 32px" : "20px 48px";
  const heroFS = () => isMobile ? "32px" : isTablet ? "44px" : "54px";
  const h2FS = () => isMobile ? "26px" : isTablet ? "32px" : "38px";
  const bodyFS = () => isMobile ? "14px" : isTablet ? "15px" : "16px";
  const cardP = () => isMobile ? "20px" : isTablet ? "24px" : "28px";
  const grid3 = () => isMobile ? "1fr" : isTablet ? "repeat(2,1fr)" : "repeat(3,1fr)";
  const grid4 = () => isMobile ? "1fr" : isTablet ? "repeat(2,1fr)" : "repeat(4,1fr)";

  // ── HERO FORM state ────────────────────────────────────────────────────────
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", dialCode: "+1", email: "", service: "", message: "" });
  const [hErr, setHErr] = useState({ firstName: "", phone: "", email: "", message: "" });
  const [hTouched, setHTouched] = useState({ firstName: false, phone: false, email: false, message: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const hRunValidate = (k: string, v: string): boolean => {
    const msgs: Record<string, string> = { firstName: vName(v), phone: vPhone(v, form.dialCode), email: vEmail(v), message: vMsg(v) };
    if (k in msgs) { setHErr(p => ({ ...p, [k]: msgs[k] })); return !msgs[k]; }
    return true;
  };
  const setF = (k: string, v: string) => {
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
      if (form.dialCode === "+44") maxLength = 11; // UK
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

    setForm(f => ({ ...f, [k]: value }));
    if (hTouched[k as keyof typeof hTouched]) hRunValidate(k, value);
  };
  // const setF=(k:string,v:string)=>{setForm(f=>({...f,[k]:v}));if(hTouched[k as keyof typeof hTouched])hRunValidate(k,v);};
  const hBlur = (k: string) => () => { setHTouched(p => ({ ...p, [k]: true })); hRunValidate(k, form[k as keyof typeof form]); };
  const hValidateAll = (): boolean => {
    setHTouched({ firstName: true, phone: true, email: true, message: true });
    const e = { firstName: vName(form.firstName), phone: vPhone(form.phone, form.dialCode), email: vEmail(form.email), message: vMsg(form.message) };
    setHErr(e); return Object.values(e).every(v => !v);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hValidateAll()) return;
    setLoading(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, buildParams({
        firstName: form.firstName, lastName: form.lastName, email: form.email,
        phone: `${form.dialCode} ${form.phone}`, service: form.service, message: form.message,
      }));
      setSubmitted(true);
      setForm({ firstName: "", lastName: "", phone: "", dialCode: "+1", email: "", service: "", message: "" });
    } catch (err) { console.error("EmailJS hero:", err); alert("Failed to send. Please try again."); }
    finally { setLoading(false); }
  };

  // ── CONTACT FORM (M13) state ───────────────────────────────────────────────
  const [cForm, setCForm] = useState({ name: "", phone: "", dialCode: "+1", email: "", service: "", project: "" });
  const [cErr, setCErr] = useState({ name: "", phone: "", email: "", project: "" });
  const [cTouched, setCTouched] = useState({ name: false, phone: false, email: false, project: false });
  const [cSubmitted, setCSubmitted] = useState(false);
  const [cLoading, setCLoading] = useState(false);

  const cRunValidate = (k: string, v: string): boolean => {
    const msgs: Record<string, string> = { name: vName(v), phone: vPhone(v, cForm.dialCode), email: vEmail(v), project: vMsg(v) };
    if (k in msgs) { setCErr(p => ({ ...p, [k]: msgs[k] })); return !msgs[k]; }
    return true;
  };
  const setCF = (k: string, v: string) => {
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
  // const setCF=(k:string,v:string)=>{setCForm(f=>({...f,[k]:v}));if(cTouched[k as keyof typeof cTouched])cRunValidate(k,v);};
  const cBlur = (k: string) => () => { setCTouched(p => ({ ...p, [k]: true })); cRunValidate(k, cForm[k as keyof typeof cForm]); };
  const cValidateAll = (): boolean => {
    setCTouched({ name: true, phone: true, email: true, project: true });
    const e = { name: vName(cForm.name), phone: vPhone(cForm.phone, cForm.dialCode), email: vEmail(cForm.email), project: vMsg(cForm.project) };
    setCErr(e); return Object.values(e).every(v => !v);
  };
  const handleCSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cValidateAll()) return;
    setCLoading(true);
    try {
      const parts = cForm.name.trim().split(" ");
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, buildParams({
        firstName: parts[0], lastName: parts.slice(1).join(" "),
        email: cForm.email, phone: `${cForm.dialCode} ${cForm.phone}`,
        service: cForm.service, message: cForm.project,
      }));
      setCSubmitted(true);
      setCForm({ name: "", phone: "", dialCode: "+1", email: "", service: "", project: "" });
    } catch (err) { console.error("EmailJS contact:", err); alert("Failed to send. Please try again."); }
    finally { setCLoading(false); }
  };

  // ── Other UI state ─────────────────────────────────────────────────────────
  const [story, setStory] = useState(0);
  const [hireL, setHireL] = useState<number | null>(0);
  const [hireR, setHireR] = useState<number | null>(0);
  const [faq, setFaq] = useState<number | null>(0);
  const [gTab, setGTab] = useState<"int" | "india">("int");

  // ── Input styles ───────────────────────────────────────────────────────────
  const iS: CSSProperties = { width: "100%", padding: isMobile ? "10px 12px" : "12px 14px", borderRadius: 9, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", color: "#fff", fontSize: isMobile ? "14px" : "15px", fontFamily: "'Poppins',sans-serif", outline: "none", boxSizing: "border-box", transition: "border-color .2s,background .2s" };
  const iSE: CSSProperties = { ...iS, borderColor: "#ff4444", background: "rgba(255,68,68,.08)" };
  const iSLg: CSSProperties = { ...iS, padding: isMobile ? "11px 14px" : "13px 16px", fontSize: isMobile ? "14px" : "15px" };
  const iSLgE: CSSProperties = { ...iSLg, borderColor: "#ff4444", background: "rgba(255,68,68,.08)" };

  const btnSF: CSSProperties = { display: "inline-block", padding: isMobile ? "12px 22px" : "13px 28px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${A},${AD})`, color: "#000", fontWeight: 700, fontSize: isMobile ? "14px" : "15px", fontFamily: "'Poppins',sans-serif", cursor: "pointer", textDecoration: "none", transition: "transform .2s,box-shadow .2s" };
  const btnOut: CSSProperties = { display: "inline-block", padding: isMobile ? "12px 22px" : "13px 28px", borderRadius: 10, border: `1.5px solid rgba(0,161,224,0.35)`, background: "transparent", color: A, fontWeight: 600, fontSize: isMobile ? "14px" : "15px", fontFamily: "'Poppins',sans-serif", cursor: "pointer", textDecoration: "none", transition: "border-color .2s,background .2s" };

  const heroPaddingTop = isMobile ? "20px" : isTablet ? "24px" : "28px";
  const heroPaddingBot = isMobile ? "40px" : isTablet ? "50px" : "56px";
  const heroPaddingLR = isMobile ? "20px" : isTablet ? "32px" : "48px";

  return (
    <>
      <Navbar />
      <SchemaMarkup schema={serviceSchema} id="salesforce-schema" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        *,*::before,*::after{box-sizing:border-box;}
        body{font-family:'Poppins',sans-serif;}

        @keyframes heroPulse  {0%,100%{opacity:.7;transform:translateY(-50%) scale(1)}50%{opacity:1;transform:translateY(-50%) scale(1.04)}}
        @keyframes heroSpin   {from{transform:translateY(-50%) rotate(0deg)}to{transform:translateY(-50%) rotate(360deg)}}
        @keyframes heroGlow   {0%,100%{box-shadow:0 0 0 rgba(0,161,224,0)}50%{box-shadow:0 0 20px rgba(0,161,224,.2)}}
        @keyframes heroFadeUp {from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        @keyframes heroBlink  {0%,100%{opacity:1}50%{opacity:.35}}
        @keyframes ctaBgShift {0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        @keyframes sbFadeUp   {from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes clScroll   {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes marquee    {from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes marqueeReverse{from{transform:translateX(-50%)}to{transform:translateX(0)}}

        .cl-track{display:flex;width:max-content;animation:clScroll 32s linear infinite;}
        .cl-track:hover{animation-play-state:paused;}

        .svc-card:hover {transform:translateY(-6px);border-color:rgba(0,161,224,0.3)!important;background:rgba(0,161,224,0.04)!important;}
        .kb-card:hover  {transform:translateY(-4px);border-color:rgba(0,161,224,0.2)!important;}
        .pt-card:hover  {transform:translateY(-6px);box-shadow:0 20px 40px rgba(0,0,0,0.3);}
        .gp-card:hover  {transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,0.3);border-color:rgba(0,161,224,0.35)!important;}
        .wcu-point:hover{border-color:rgba(0,161,224,0.25)!important;background:rgba(0,161,224,0.06)!important;transform:translateX(6px)!important;}
        .wcu-stat:hover {transform:translateY(-4px)!important;background:rgba(0,161,224,0.1)!important;}
        .btn-sf:hover   {transform:translateY(-3px);box-shadow:0 12px 32px rgba(0,161,224,.25);}
        .btn-out:hover  {border-color:${A}!important;background:rgba(0,161,224,0.07)!important;}
        .h-blue:hover   {color:${A}!important;}
        .fi:focus       {border-color:rgba(0,161,224,0.5)!important;background:rgba(0,161,224,0.05)!important;}
        .fi-err:focus   {border-color:#ff4444!important;}
        .ss-tab:hover   {border-color:rgba(0,161,224,0.35);background:rgba(0,161,224,0.06);color:#fff;}
        .ss-tab.act     {border-color:rgba(0,161,224,0.6);background:rgba(0,161,224,0.12);color:#fff;}
        .gp-tab.act     {background:rgba(0,161,224,0.12);color:${A};box-shadow:0 4px 20px rgba(0,161,224,0.12);}
        .faq-item       {border-radius:16px;overflow:hidden;cursor:pointer;transition:all .25s ease;}
        input:hover,select:hover,textarea:hover{border-color:${A}!important;}

        .ss-tab{display:inline-flex;align-items:center;gap:8px;padding:8px 18px;border-radius:100px;border:1px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.6);font-size:13px;font-weight:600;font-family:'Poppins',sans-serif;cursor:pointer;transition:all .2s ease;}
        .gp-tab{display:inline-flex;align-items:center;gap:8px;padding:10px 24px;border-radius:100px;border:1px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.6);font-size:14px;font-weight:600;font-family:'Poppins',sans-serif;cursor:pointer;transition:all .2s ease;}
      `}</style>

      {/* ══ M1 HERO ════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: heroPaddingTop, paddingBottom: heroPaddingBot, paddingLeft: heroPaddingLR, paddingRight: heroPaddingLR, background: `linear-gradient(135deg,${N0} 0%,#041628 45%,${N0} 100%)`, position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-start" }}>
        <Particles />
        <div style={{ position: "absolute", width: 650, height: 650, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,161,224,.14) 0%,transparent 65%)", top: "40%", left: "-10%", transform: "translateY(-50%)", animation: "heroPulse 8s ease-in-out infinite", pointerEvents: "none", zIndex: 1 }} />
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,.1) 0%,transparent 65%)", top: "10%", right: "5%", animation: "heroPulse 10s ease-in-out infinite .5s", pointerEvents: "none", zIndex: 1 }} />
        <div style={{ position: "absolute", width: 520, height: 520, borderRadius: "50%", border: "1px dashed rgba(0,161,224,.08)", top: "50%", left: "-12%", transform: "translateY(-50%)", animation: "heroSpin 55s linear infinite", pointerEvents: "none", zIndex: 1 }} />

        <div style={{ display: "grid", gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr 420px", gap: isMobile ? "24px" : isTablet ? "32px" : "40px", maxWidth: 1280, margin: "0 auto", width: "100%", position: "relative", zIndex: 3, alignItems: "center" }}>
          {/* Left */}
          <div style={{ animation: "heroFadeUp .7s ease both" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,161,224,0.08)", border: "1px solid rgba(0,161,224,0.25)", borderRadius: 100, padding: isMobile ? "6px 14px" : "7px 18px", marginBottom: isMobile ? 16 : 22, animation: "heroGlow 3s ease-in-out infinite" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: A, boxShadow: `0 0 10px ${A}`, animation: "heroBlink 1.4s ease-in-out infinite" }} />
              <span style={{ color: A, fontSize: isMobile ? "10px" : isTablet ? "11px" : "11.5px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>Salesforce CRM — Canada, USA &amp; UK</span>
            </div>
            <h1 style={{ fontSize: heroFS(), fontWeight: 900, lineHeight: 1.12, marginBottom: isMobile ? 14 : 20, letterSpacing: "-0.025em", color: "#fff", marginTop: 0 }}>
              Salesforce CRM Development, <GradText>Customisation &amp; Implementation</GradText> for Canada, USA &amp; UK
            </h1>
            <p style={{ color: "rgba(255,255,255,0.52)", fontSize: bodyFS(), lineHeight: 1.85, marginBottom: isMobile ? 18 : 24, maxWidth: 600 }}>
              {isMobile ? "Salesforce is the world's most powerful CRM — configured and customised for your business by our certified specialists." : "Salesforce is the world's most powerful CRM platform — but out of the box, it's designed for everyone, which means it's optimised for no one. Our specialists configure and customise it for you."}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 6 : 8, marginBottom: isMobile ? 18 : 24 }}>
              {[{ i: "🔵", l: "Google Partner" }, { i: "🏆", l: "ISO Certified" }, { i: "🔒", l: "GDPR Compliant" }, { i: "🍁", l: "PIPEDA Ready" }, { i: "⭐", l: "Clutch Top Agency" }].map(b => (
                <span key={b.l} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: isMobile ? "5px 10px" : "6px 13px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.65)", fontSize: isMobile ? "11px" : "12.5px", fontWeight: 600 }}>{b.i} {b.l}</span>
              ))}
            </div>
          </div>

          {/* Hero Form */}
          <div style={{ background: "rgba(8,20,40,0.85)", border: "1px solid rgba(0,161,224,0.22)", borderRadius: 20, padding: isMobile ? "24px 18px" : "32px 28px", backdropFilter: "blur(16px)", boxShadow: "0 32px 80px rgba(0,0,0,0.5),0 0 40px rgba(0,161,224,0.06)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${A},transparent)` }} />
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
                <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 800, marginBottom: 10 }}>Request Received!</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>We&apos;ll contact you within 24 hours with a free consultation.</p>
                <button onClick={() => setSubmitted(false)} style={{ ...btnSF, fontSize: 14 }}>Send Another →</button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: 20 }}>
                  <p style={{ color: A, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 4 }}>Free Consultation</p>
                  <h2 style={{ color: "#fff", fontSize: 18, fontWeight: 800, margin: 0, lineHeight: 1.3 }}>Get a Free Salesforce Strategy Call</h2>
                </div>
                <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 12 }}>

                  {/* First + Last */}
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 10 : 12 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>First Name *</label>
                      <input className={`fi${hTouched.firstName && hErr.firstName ? " fi-err" : ""}`} style={hTouched.firstName && hErr.firstName ? iSE : iS} placeholder="Jane" value={form.firstName} onChange={e => setF("firstName", e.target.value)} onBlur={hBlur("firstName")} />
                      {hTouched.firstName && <FieldErr msg={hErr.firstName} />}
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Last Name</label>
                      <input
                        className="fi"
                        style={iS}
                        placeholder="Smith"
                        value={form.lastName}
                        onChange={e => setF("lastName", e.target.value)}
                        onBlur={hBlur("lastName")}
                      />
                      {/* <input className="fi" style={iS} placeholder="Smith" value={form.lastName} onChange={e=>setF("lastName",e.target.value)}/> */}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Phone *</label>
                    <div style={{ display: "flex", gap: 8 }}>
                      <select className="fi" style={{ ...iS, width: 82, flexShrink: 0, padding: "11px 6px", cursor: "pointer" }} value={form.dialCode} onChange={e => setF("dialCode", e.target.value)}>
                        {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                      </select>
                      <input className={`fi${hTouched.phone && hErr.phone ? " fi-err" : ""}`} style={{ ...(hTouched.phone && hErr.phone ? iSE : iS), flex: 1 }} type="tel" placeholder="647 XXX XXXX" value={form.phone} onChange={e => setF("phone", e.target.value)} onBlur={hBlur("phone")} />
                    </div>
                    {hTouched.phone && <FieldErr msg={hErr.phone} />}
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Business Email *</label>
                    <input className={`fi${hTouched.email && hErr.email ? " fi-err" : ""}`} style={hTouched.email && hErr.email ? iSE : iS} type="email" placeholder="jane@company.com" value={form.email} onChange={e => setF("email", e.target.value)} onBlur={hBlur("email")} />
                    {hTouched.email && <FieldErr msg={hErr.email} />}
                  </div>

                  {/* Service */}
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Service</label>
                    <select className="fi" style={{ ...iS, cursor: "pointer" }} value={form.service} onChange={e => setF("service", e.target.value)}>
                      <option value="">Select service...</option>
                      {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Message *</label>
                    <textarea className={`fi${hTouched.message && hErr.message ? " fi-err" : ""}`} style={{ ...(hTouched.message && hErr.message ? iSE : iS), minHeight: 72, resize: "vertical" as const }} placeholder="Tell us about your Salesforce project..." value={form.message} onChange={e => setF("message", e.target.value)} onBlur={hBlur("message")} />
                    {hTouched.message && <FieldErr msg={hErr.message} />}
                  </div>

                  <button className="btn-sf" type="submit" disabled={loading} style={{ ...btnSF, width: "100%", marginTop: 4, opacity: loading ? .6 : 1, cursor: loading ? "wait" : "pointer" }}>
                    {loading ? "Sending…" : "📅 Get Free Salesforce Consultation →"}
                  </button>
                  <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 11, textAlign: "center", margin: 0 }}>🔒 Secure &amp; confidential. No spam, ever.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ══ M2 CLIENT LOGOS ════════════════════════════════════════════════════ */}
      <section style={{ padding: isMobile ? "40px 0" : "60px 0", background: N0, overflow: "hidden", borderTop: "1px solid rgba(0,201,167,.1)", borderBottom: "1px solid rgba(0,201,167,.1)" }}>
        <div style={{ textAlign: "center", marginBottom: isMobile ? 30 : 40, padding: "0 24px" }}>
          <p style={{ fontWeight: 600, fontSize: isMobile ? 10 : 11.5, color: "rgba(255,255,255,.28)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>Our Happy Clients</p>
          <h2 style={{ fontSize: isMobile ? "22px" : "28px", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.25, margin: 0 }}>
            Trusted by Businesses Across <GradText>North America &amp; the UK</GradText>
          </h2>
        </div>
        {[
          { logos: LOGOS.slice(0, 6), dur: "30s", anim: "marquee" },
          { logos: LOGOS.slice(6, 12), dur: "35s", anim: "marqueeReverse" },
          { logos: LOGOS.slice(12, 18), dur: "40s", anim: "marquee" },
        ].map((row, ri) => (
          <div key={ri} style={{ overflow: "hidden", marginBottom: ri < 2 ? (isMobile ? 16 : 20) : 0 }}>
            <div className="cl-track" style={{ animation: `${row.anim} ${row.dur} linear infinite` }}>
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

      {/* ══ M3 SUCCESS STORIES ═════════════════════════════════════════════════ */}
      <section style={{ padding: sp(), background: `linear-gradient(180deg,${N2} 0%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(0,161,224,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,161,224,.02) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 32 }}>
            <SectionBadge label="Proven Results" />
            <SectionH2 fontSize={h2FS()}>Salesforce <GradText>Success Stories</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(13px,1.2vw,16px)", lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>Real results for businesses in Canada, USA &amp; UK.</p>
          </div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 32, flexWrap: "wrap" }}>
            {SUCCESS_STORIES.map((c, i) => (
              <button key={i} className={`ss-tab${story === i ? " act" : ""}`} onClick={() => setStory(i)}><span>{c.icon}</span>{c.industry} — {c.result}</button>
            ))}
          </div>
          <div key={story} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,161,224,.3)", borderRadius: 24, overflow: "hidden", animation: "sbFadeUp .45s ease both" }}>
            <div style={{ height: 3, background: `linear-gradient(90deg,transparent,${A},transparent)` }} />
            <div style={{ padding: isMobile ? "16px" : isTablet ? "24px" : "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18, flexWrap: "wrap" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, fontSize: 26, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,161,224,0.12)", border: "1px solid rgba(0,161,224,.3)" }}>{SUCCESS_STORIES[story].icon}</div>
                <span style={{ padding: "4px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, background: "rgba(0,161,224,0.12)", border: "1px solid rgba(0,161,224,.3)", color: A, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{SUCCESS_STORIES[story].result}</span>
              </div>
              <h3 style={{ color: "#fff", fontSize: isMobile ? "16px" : isTablet ? "20px" : "24px", fontWeight: 800, marginBottom: 14, lineHeight: 1.3 }}>{SUCCESS_STORIES[story].title}</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: bodyFS(), lineHeight: 1.7, marginBottom: 24 }}>{SUCCESS_STORIES[story].description}</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                {SUCCESS_STORIES[story].metrics.map((m, i) => (
                  <div key={i} style={{ textAlign: "center", padding: "clamp(12px,2vw,18px) 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", transition: "transform .25s,background .25s", cursor: "default" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.background = "rgba(0,161,224,0.06)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; }}>
                    <div style={{ fontSize: isMobile ? "15px" : isTablet ? "18px" : "22px", marginBottom: 8 }}>{m.i}</div>
                    <div style={{ fontSize: isMobile ? "18px" : isTablet ? "24px" : "30px", fontWeight: 900, marginBottom: 4, color: A }}>{m.v}</div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(11px,1vw,12px)", fontWeight: 500 }}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
            {SUCCESS_STORIES.map((_, i) => <button key={i} onClick={() => setStory(i)} style={{ width: story === i ? 24 : 8, height: 8, borderRadius: 100, background: story === i ? A : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", transition: "all .3s ease" }} />)}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 10 : 14, alignItems: isMobile ? "stretch" : "center", justifyContent: "center", marginTop: 36 }}>
            <a href="/case-studies" className="btn-sf" style={btnSF}>View All Case Studies →</a>
          </div>
        </div>
      </section>

      {/* ══ M4 SERVICES ════════════════════════════════════════════════════════ */}
      <section style={{ padding: sp(), background: `linear-gradient(180deg,${N1} 0%,${N2} 60%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(0,161,224,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,161,224,.02) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 32 }}>
            <SectionBadge label="What We Build" />
            <SectionH2 fontSize={h2FS()}>Salesforce CRM Services <GradText>We Offer</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: bodyFS(), lineHeight: 1.75, maxWidth: 580, margin: "0 auto" }}>A comprehensive lineup of Salesforce solutions for clients across Canada, USA &amp; UK.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: grid3(), gap: isMobile ? 16 : 20 }}>
            {SERVICES.map(s => (
              <a key={s.title} href="" className="svc-card" style={{ display: "flex", flexDirection: "column", gap: 14, padding: cardP(), borderRadius: 18, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", transition: "transform .3s,border-color .3s,background .3s", textDecoration: "none", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(0,161,224,0.1)", border: "1px solid rgba(0,161,224,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0, transition: "background .3s" }}>{s.icon}</div>
                  <span style={{ padding: "3px 10px", borderRadius: 100, fontSize: 10.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: A, background: "rgba(0,161,224,0.08)", border: "1px solid rgba(0,161,224,0.18)" }}>{s.tag}</span>
                </div>
                <h3 style={{ fontSize: isMobile ? "14px" : isTablet ? "15px" : "17px", fontWeight: 700, color: "#fff", lineHeight: 1.3, margin: 0 }}>{s.title}</h3>
                <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ M5 KEY BENEFITS ════════════════════════════════════════════════════ */}
      <section style={{ padding: sp(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(0,161,224,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,161,224,.02) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 32 }}>
            <SectionBadge label="Why It Matters" />
            <SectionH2 fontSize={h2FS()}>Key Benefits of <GradText>Salesforce CRM</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: bodyFS(), lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>Here&apos;s what you gain when your sales processes run on a properly configured Salesforce.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: grid4(), gap: isMobile ? 14 : 20 }}>
            {BENEFITS.map((b, i) => (
              <div key={i} className="kb-card" style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 14 : 20, padding: cardP(), borderRadius: 18, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", transition: "transform .3s,border-color .3s" }}>
                <div style={{ fontSize: isMobile ? "32px" : isTablet ? "44px" : "60px", fontWeight: 900, lineHeight: 1, color: A, opacity: .25, flexShrink: 0, width: 64, textAlign: "center" }}>{b.num}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}><span style={{ fontSize: 22 }}>{b.icon}</span><h3 style={{ color: "#fff", fontSize: isMobile ? "15px" : isTablet ? "16px" : "18px", fontWeight: 800, margin: 0 }}>{b.title}</h3></div>
                  <p style={{ color: "rgba(255,255,255,0.52)", fontSize: isMobile ? "13px" : "14.5px", lineHeight: 1.75, margin: "0 0 12px" }}>{b.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {b.tags.map(tag => <span key={tag} style={{ padding: "3px 10px", borderRadius: 100, fontSize: 10.5, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase" as const, color: A, background: "rgba(0,161,224,0.08)", border: "1px solid rgba(0,161,224,0.18)" }}>{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 10 : 14, alignItems: isMobile ? "stretch" : "center", justifyContent: "center", marginTop: 40 }}>
            <a href="/contact" className="btn-sf" style={btnSF}>Start Your Salesforce Journey →</a>
          </div>
        </div>
      </section>

      {/* ══ M6 PLATFORM TOOLS ══════════════════════════════════════════════════ */}
      <section style={{ padding: sp(), background: N1, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,161,224,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 32 }}>
            <SectionBadge label="Our Tech Stack" />
            <SectionH2 fontSize={h2FS()}>Leading Platform Tools <GradText>That We Use</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: bodyFS(), lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>A closer look at the Salesforce tools we leverage for the best possible business outcomes.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : isTablet ? "repeat(4,1fr)" : "repeat(5,1fr)", gap: isMobile ? 12 : 16 }}>
            {TOOLS.map((tool, i) => (
              <div key={i} className="pt-card" style={{ display: "flex", flexDirection: "column", padding: isMobile ? "18px 14px" : "24px 20px", borderRadius: 16, textAlign: "center", alignItems: "center", transition: "transform .3s,box-shadow .3s", background: tool.clr, border: `1px solid ${tool.bd}` }}>
                <div style={{ width: 56, height: 56, borderRadius: 15, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 14, background: "rgba(255,255,255,0.05)", border: `1px solid ${tool.bd}`, transition: "transform .25s" }}>{tool.icon}</div>
                <h3 style={{ color: "#fff", fontSize: isMobile ? "12px" : isTablet ? "13px" : "15px", fontWeight: 700, marginBottom: 6, lineHeight: 1.3 }}>{tool.name}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12.5, lineHeight: 1.65, margin: 0 }}>{tool.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ M7 HIRE DEVELOPERS ═════════════════════════════════════════════════ */}
      <section style={{ padding: sp(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 32 }}>
            <SectionBadge label="Hire Developers" />
            <SectionH2 fontSize={h2FS()}>Hire Salesforce Developers <GradText>Tailored to Your Needs</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: bodyFS(), lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>Whether you&apos;re an enterprise, start-up, or agency — we have the right Salesforce expert for your challenge.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 12 : 24, marginBottom: 14 }}>
            <p style={{ color: A, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, margin: 0 }}>By Business Type</p>
            <p style={{ color: A, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, margin: 0 }}>By CRM Type</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 12 : 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {HIRE_L.map((item, i) => <AccItem key={item.title} item={item} open={hireL === i} toggle={() => setHireL(hireL === i ? null : i)} />)}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {HIRE_R.map((item, i) => <AccItem key={item.title} item={item} open={hireR === i} toggle={() => setHireR(hireR === i ? null : i)} />)}
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 10 : 14, alignItems: isMobile ? "stretch" : "center", marginTop: 40, justifyContent: "center" }}>
            {/* <a href="/hire-salesforce-developer" className="btn-sf" style={btnSF}>📅 Hire a Salesforce Developer</a> */}
            <a href="/pricing" className="btn-out" style={btnOut}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = A; (e.currentTarget as HTMLElement).style.background = "rgba(0,161,224,0.07)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,161,224,0.35)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>View Pricing →</a>
          </div>
        </div>
      </section>

      {/* ══ M8 AI-POWERED ══════════════════════════════════════════════════════ */}
      <section style={{ padding: sp(), background: `linear-gradient(180deg,${N2} 0%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 32, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
            <SectionBadge label="AI-Powered" />
            <SectionH2 fontSize={h2FS()}>Leverage <GradText>AI-Powered Salesforce</GradText> Solutions</SectionH2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: bodyFS(), lineHeight: 1.8 }}>Einstein AI and machine learning capabilities built into your Salesforce implementation.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: grid4(), gap: isMobile ? 14 : 20 }}>
            {AI_FEATS.map((f, i) => (
              <div key={i} style={{ background: "rgba(0,161,224,0.05)", border: "1px solid rgba(0,161,224,0.15)", borderRadius: 16, padding: `${isMobile ? "18px" : isTablet ? "22px" : "28px"} 20px`, textAlign: "center" }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ color: "#fff", fontSize: bodyFS(), fontWeight: 700, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.52)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ M9 CTA BANNER ══════════════════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ background: "linear-gradient(135deg,#0055b3 0%,#0077cc 35%,#0055b3 100%)", backgroundSize: "300% 300%", animation: "ctaBgShift 8s ease infinite", padding: isMobile ? "60px 20px" : "80px 48px", textAlign: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: "-20%", left: "-5%", width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.1) 0%,transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-20%", right: "-5%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 2, maxWidth: isMobile ? "100%" : 800, margin: "0 auto" }}>
            <h2 style={{ fontSize: isMobile ? "clamp(22px,6vw,28px)" : isTablet ? "32px" : "clamp(36px,4vw,48px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Want <span style={{ textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.4)" }}> SALESFORCE CRM solutions</span> that take your business to the next level?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: isMobile ? "16px" : "18px", lineHeight: 1.6, marginBottom: isMobile ? 28 : 36, fontWeight: 500 }}>Connect with NNC Digital today.</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "14px 32px" : "16px 40px", borderRadius: "8px", background: "#fff", color: "#0055b3", fontWeight: 700, fontSize: isMobile ? "15px" : "16px", fontFamily: "'Poppins',sans-serif", border: "none", cursor: "pointer", textDecoration: "none", transition: "transform .2s,box-shadow .2s", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 30px rgba(0,0,0,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"; }}>
                Connect Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ M10 WHY CHOOSE US ══════════════════════════════════════════════════ */}
      <section style={{ padding: sp(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,161,224,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 32 }}>
            <SectionBadge label="Our Story" />
            <SectionH2 fontSize={h2FS()}>Why Choose Us as Your <GradText>Salesforce Partner</GradText>?</SectionH2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: bodyFS(), lineHeight: 1.8, maxWidth: 700, margin: "0 auto 6px" }}>Backed by <span style={{ color: "#fff", fontWeight: 600 }}>Nakshatra Namaha Creations Pvt. Ltd.</span> — one of Bangalore&apos;s most respected digital studios with <span style={{ color: A, fontWeight: 600 }}>8+ years of experience</span> and <span style={{ color: A, fontWeight: 600 }}>565+ projects delivered</span>.</p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: bodyFS(), lineHeight: 1.8, maxWidth: 700, margin: "0 auto" }}>We launched NNC Digital as our international arm — bringing proven technical expertise to Canadian, US, and UK markets with dedicated client-facing teams, transparent pricing, and long-term partnership.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)", gap: 12, marginBottom: 32 }}>
            {WCU_POINTS.map((p, i) => (
              <div key={i} className="wcu-point" style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", transition: "border-color .2s,background .2s,transform .2s", cursor: "default" }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>{p.icon}</span>
                <span style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(12px,1.1vw,14px)", fontWeight: 500 }}>{p.text}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : isTablet ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: 14, marginBottom: 36 }}>
            {WCU_STATS.map(st => (
              <div key={st.l} className="wcu-stat" style={{ textAlign: "center", padding: isMobile ? "14px 10px" : "20px 14px", borderRadius: 14, border: "1px solid rgba(0,161,224,0.15)", background: "rgba(0,161,224,0.05)", transition: "transform .25s,background .25s", cursor: "default" }}>
                <div style={{ fontSize: "clamp(18px,2.2vw,28px)", fontWeight: 900, marginBottom: 4, color: A }}><Counter to={st.n} sfx={st.s} /></div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 500 }}>{st.l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 10 : 14, alignItems: isMobile ? "stretch" : "center", justifyContent: "center" }}>
            <a href="/contact" className="btn-sf" style={btnSF}>📅 Book a Strategy Call</a>
            <a href="/case-studies" className="btn-out" style={btnOut}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = A; (e.currentTarget as HTMLElement).style.background = "rgba(0,161,224,0.07)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,161,224,0.35)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>Our Work →</a>
          </div>
        </div>
      </section>

      {/* ══ M11 GLOBAL PRESENCE ════════════════════════════════════════════════ */}
      <section style={{ background: `linear-gradient(145deg,${N0} 0%,#041628 50%,${N1} 100%)`, position: "relative", overflow: "hidden", padding: sp() }}>
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle,${T}15 0%,transparent 70%)`, pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: 250, height: 250, borderRadius: "50%", background: `radial-gradient(circle,${T}10 0%,transparent 70%)`, pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(0,201,167,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,0.02) 1px,transparent 1px)`, backgroundSize: "60px 60px", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h2 style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 800, color: "#fff", textAlign: "center", margin: "0 0 20px", letterSpacing: "-0.02em" }}>
            Global <span style={{ background: `linear-gradient(135deg,${T},#fff)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Presence</span>
          </h2>
          <div style={{ width: 120, height: 4, background: `linear-gradient(90deg,transparent,${T},transparent)`, margin: "0 auto 40px", borderRadius: 2 }} />
          <div style={{ display: "flex", gap: isMobile ? 8 : 12, justifyContent: "center", marginBottom: isMobile ? 30 : 40, flexWrap: "wrap" }}>
            {[{ key: "int", label: "North America & UK", icon: "🌎" }, { key: "india", label: "India (HQ)", icon: "🇮🇳" }].map(t => (
              <button key={t.key} className={`gp-tab${gTab === t.key ? " act" : ""}`} onClick={() => setGTab(t.key as "int" | "india")}
                style={{ padding: isMobile ? "12px 24px" : "14px 32px", borderRadius: 50, border: "none", background: gTab === t.key ? `linear-gradient(135deg,${T},${TD})` : "rgba(255,255,255,0.05)", color: gTab === t.key ? "#000" : "#fff", fontSize: isMobile ? 14 : 16, fontWeight: 600, cursor: "pointer", transition: "all .3s ease", boxShadow: gTab === t.key ? `0 8px 20px ${T}40` : "none", display: "flex", alignItems: "center", gap: 8, backdropFilter: "blur(10px)" }}
                onMouseEnter={e => { if (gTab !== t.key) { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
                onMouseLeave={e => { if (gTab !== t.key) { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateY(0)"; } }}
              ><span>{t.icon}</span>{t.label}</button>
            ))}
          </div>
          {gTab === "int" && (
            <div style={{ background: "linear-gradient(145deg,rgba(255,255,255,.03),rgba(255,255,255,.01))", borderRadius: 24, padding: isMobile ? 24 : 36, border: `1px solid ${T}20`, backdropFilter: "blur(10px)", boxShadow: "0 20px 40px -15px rgba(0,0,0,0.5)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[{ city: "Toronto, Canada", phone: "+91 9900566466", flag: "🇨🇦" }, { city: "New York, USA", phone: "+91 9900566466", flag: "🇺🇸" }, { city: "London, UK", phone: "+91 9900566466", flag: "🇬🇧" }].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: 16, background: "rgba(255,255,255,.02)", borderRadius: 16, border: "1px solid rgba(255,255,255,.05)", transition: "all .3s ease", cursor: "default" }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateX(8px)"; el.style.background = `${T}08`; el.style.borderColor = `${T}40`; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.background = "rgba(255,255,255,.02)"; el.style.borderColor = "rgba(255,255,255,.05)"; }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: `${T}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{item.flag}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 600, fontSize: isMobile ? 15 : 16, color: "#fff", margin: 0, marginBottom: 4 }}>{item.city}</p>
                      <p style={{ color: T, fontSize: isMobile ? 14 : 15, fontWeight: 500, margin: 0 }}>📞 {item.phone}</p>
                    </div>
                    <span style={{ color: T, fontSize: 20, opacity: .5 }}>■■</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {gTab === "india" && (
            <div style={{ background: `linear-gradient(145deg,${T}05,${T}02)`, borderRadius: 24, padding: isMobile ? 24 : 36, border: `1px solid ${T}30`, backdropFilter: "blur(10px)", boxShadow: `0 20px 40px -15px ${T}20` }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[{ city: "Bangalore HQ", flag: "🇮🇳", phone: "+91 9900566466" }, { city: "Mysore", flag: "🇮🇳", phone: "+91 9900566466" }, { city: "Mumbai", flag: "🇮🇳", phone: "+91 9900566466" }, { city: "Hyderabad", flag: "🇮🇳", phone: "+91 9900566466" }].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: 16, background: "rgba(255,255,255,.02)", borderRadius: 16, border: "1px solid rgba(255,255,255,.05)", transition: "all .3s ease", cursor: "default" }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateX(8px)"; el.style.background = `${T}10`; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.background = "rgba(255,255,255,.02)"; }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: `${T}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{item.flag}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 600, fontSize: isMobile ? 15 : 16, color: "#fff", margin: 0, marginBottom: 4 }}>{item.city}</p>
                      <p style={{ color: T, fontSize: isMobile ? 14 : 15, fontWeight: 500, margin: 0 }}>📞 {item.phone}</p>
                    </div>
                    <span style={{ color: T, fontSize: 20, opacity: .5 }}>■■</span>
                  </div>
                ))}
                <div style={{ marginTop: 8, padding: 20, background: `${T}08`, borderRadius: 16, border: `1px dashed ${T}40`, textAlign: "center" }}>
                  <span style={{ color: T, fontSize: isMobile ? 14 : 16, fontWeight: 600, letterSpacing: "0.5px" }}>✉ info@nakshatranamahacreations.com</span>
                </div>
              </div>
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 40 }}>
            {[1, 2, 3, 4, 5].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: T, opacity: .2 + (i * .1) }} />)}
          </div>
        </div>
      </section>

      {/* ══ M12 FAQS ═══════════════════════════════════════════════════════════ */}
      <section style={{ padding: sp(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "30%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,161,224,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 32 }}>
            <SectionBadge label="FAQs" />
            <SectionH2 fontSize={h2FS()}>FAQs</SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: bodyFS(), lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>Everything you need to know about Salesforce implementation for businesses in Canada, USA &amp; UK.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Q1 */}
            <div key="faq-1" className="faq-item" onClick={() => setFaq(faq === 0 ? null : 0)} style={{ border: `1px solid ${faq === 0 ? "rgba(0,161,224,0.4)" : "rgba(255,255,255,0.08)"}`, background: faq === 0 ? "rgba(0,161,224,0.06)" : "rgba(255,255,255,0.02)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "clamp(14px,2vw,20px) clamp(14px,2vw,22px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ color: A, fontSize: 12, fontWeight: 800, background: "rgba(0,161,224,0.1)", border: "1px solid rgba(0,161,224,0.2)", borderRadius: 8, padding: "4px 10px", flexShrink: 0 }}>Q1</span>
                  <span style={{ fontSize: "clamp(13px,1.3vw,15px)", fontWeight: 700, color: faq === 0 ? "#fff" : "rgba(255,255,255,0.78)", lineHeight: 1.4, transition: "color .2s" }}>Are you a certified Salesforce partner?</span>
                </div>
                <div style={{ width: 28, height: 28, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 700, background: faq === 0 ? A : "rgba(255,255,255,0.07)", border: `1px solid ${faq === 0 ? A : "rgba(255,255,255,0.12)"}`, color: faq === 0 ? "#000" : "rgba(255,255,255,0.5)", transform: faq === 0 ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
              </div>
              <div style={{ maxHeight: faq === 0 ? 500 : 0, overflow: "hidden", transition: "max-height .38s ease" }}>
                <p style={{ padding: "0 clamp(14px,2vw,22px) 20px clamp(50px,6vw,80px)", color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "13px" : "14.5px", lineHeight: 1.8, margin: 0 }}>
                  Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process.
                </p>
              </div>
            </div>
            {/* Q2 */}
            <div key="faq-2" className="faq-item" onClick={() => setFaq(faq === 1 ? null : 1)} style={{ border: `1px solid ${faq === 1 ? "rgba(0,161,224,0.4)" : "rgba(255,255,255,0.08)"}`, background: faq === 1 ? "rgba(0,161,224,0.06)" : "rgba(255,255,255,0.02)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "clamp(14px,2vw,20px) clamp(14px,2vw,22px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ color: A, fontSize: 12, fontWeight: 800, background: "rgba(0,161,224,0.1)", border: "1px solid rgba(0,161,224,0.2)", borderRadius: 8, padding: "4px 10px", flexShrink: 0 }}>Q2</span>
                  <span style={{ fontSize: "clamp(13px,1.3vw,15px)", fontWeight: 700, color: faq === 1 ? "#fff" : "rgba(255,255,255,0.78)", lineHeight: 1.4, transition: "color .2s" }}>Can you migrate us from HubSpot to Salesforce?</span>
                </div>
                <div style={{ width: 28, height: 28, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 700, background: faq === 1 ? A : "rgba(255,255,255,0.07)", border: `1px solid ${faq === 1 ? A : "rgba(255,255,255,0.12)"}`, color: faq === 1 ? "#000" : "rgba(255,255,255,0.5)", transform: faq === 1 ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
              </div>
              <div style={{ maxHeight: faq === 1 ? 500 : 0, overflow: "hidden", transition: "max-height .38s ease" }}>
                <p style={{ padding: "0 clamp(14px,2vw,22px) 20px clamp(50px,6vw,80px)", color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "13px" : "14.5px", lineHeight: 1.8, margin: 0 }}>
                  Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process.
                </p>
              </div>
            </div>
            {/* Q3 */}
            <div key="faq-3" className="faq-item" onClick={() => setFaq(faq === 2 ? null : 2)} style={{ border: `1px solid ${faq === 2 ? "rgba(0,161,224,0.4)" : "rgba(255,255,255,0.08)"}`, background: faq === 2 ? "rgba(0,161,224,0.06)" : "rgba(255,255,255,0.02)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "clamp(14px,2vw,20px) clamp(14px,2vw,22px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ color: A, fontSize: 12, fontWeight: 800, background: "rgba(0,161,224,0.1)", border: "1px solid rgba(0,161,224,0.2)", borderRadius: 8, padding: "4px 10px", flexShrink: 0 }}>Q3</span>
                  <span style={{ fontSize: "clamp(13px,1.3vw,15px)", fontWeight: 700, color: faq === 2 ? "#fff" : "rgba(255,255,255,0.78)", lineHeight: 1.4, transition: "color .2s" }}>How long does a Salesforce implementation take?</span>
                </div>
                <div style={{ width: 28, height: 28, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 700, background: faq === 2 ? A : "rgba(255,255,255,0.07)", border: `1px solid ${faq === 2 ? A : "rgba(255,255,255,0.12)"}`, color: faq === 2 ? "#000" : "rgba(255,255,255,0.5)", transform: faq === 2 ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
              </div>
              <div style={{ maxHeight: faq === 2 ? 500 : 0, overflow: "hidden", transition: "max-height .38s ease" }}>
                <p style={{ padding: "0 clamp(14px,2vw,22px) 20px clamp(50px,6vw,80px)", color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "13px" : "14.5px", lineHeight: 1.8, margin: 0 }}>
                  Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process.
                </p>
              </div>
            </div>
            {/* Q4 */}
            <div key="faq-4" className="faq-item" onClick={() => setFaq(faq === 3 ? null : 3)} style={{ border: `1px solid ${faq === 3 ? "rgba(0,161,224,0.4)" : "rgba(255,255,255,0.08)"}`, background: faq === 3 ? "rgba(0,161,224,0.06)" : "rgba(255,255,255,0.02)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "clamp(14px,2vw,20px) clamp(14px,2vw,22px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ color: A, fontSize: 12, fontWeight: 800, background: "rgba(0,161,224,0.1)", border: "1px solid rgba(0,161,224,0.2)", borderRadius: 8, padding: "4px 10px", flexShrink: 0 }}>Q4</span>
                  <span style={{ fontSize: "clamp(13px,1.3vw,15px)", fontWeight: 700, color: faq === 3 ? "#fff" : "rgba(255,255,255,0.78)", lineHeight: 1.4, transition: "color .2s" }}>Do you offer Salesforce training?</span>
                </div>
                <div style={{ width: 28, height: 28, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 700, background: faq === 3 ? A : "rgba(255,255,255,0.07)", border: `1px solid ${faq === 3 ? A : "rgba(255,255,255,0.12)"}`, color: faq === 3 ? "#000" : "rgba(255,255,255,0.5)", transform: faq === 3 ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
              </div>
              <div style={{ maxHeight: faq === 3 ? 500 : 0, overflow: "hidden", transition: "max-height .38s ease" }}>
                <p style={{ padding: "0 clamp(14px,2vw,22px) 20px clamp(50px,6vw,80px)", color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "13px" : "14.5px", lineHeight: 1.8, margin: 0 }}>
                  Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process.
                </p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, marginBottom: 16 }}>Still have questions? We respond within 24 hours.</p>
            <div style={{ display: "flex", flexWrap: "wrap", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 10 : 14, alignItems: isMobile ? "stretch" : "center", justifyContent: "center" }}>
              <a href="/contact" className="btn-sf" style={btnSF}>Ask Us Anything →</a>
            </div>
          </div>
        </div>
      </section>


      {/* ══ M13 CONTACT FORM ═══════════════════════════════════════════════════ */}
      <section style={{ padding: sp(), background: `linear-gradient(180deg,${N2} 0%,${N0} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 700, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,161,224,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 32 }}>
            <SectionBadge label="Get In Touch" />
            <SectionH2 fontSize={h2FS()}>Ready to Build <GradText>Next-Level</GradText> Custom Salesforce Solutions?</SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(13px,1.3vw,15.5px)", lineHeight: 1.75, maxWidth: 540, margin: "0 auto" }}>Tell us about your project. We respond within 24 hours with a free consultation and honest advice.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr 1fr", gap: isMobile ? 24 : 40 }}>

            {/* Left — Contact Form */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: isMobile ? "16px" : isTablet ? "24px" : "36px" }}>
              {cSubmitted ? (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
                  <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>Thank you — we&apos;ll respond within 24 hours with practical advice.</p>
                  <button onClick={() => setCSubmitted(false)} style={{ ...btnSF, fontSize: 14 }}>Send Another →</button>
                </div>
              ) : (
                <form onSubmit={handleCSubmit} noValidate>

                  {/* Name + Phone */}
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 10 : 14, marginBottom: 16 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 7, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Full Name *</label>
                      <input className={`fi${cTouched.name && cErr.name ? " fi-err" : ""}`} style={cTouched.name && cErr.name ? iSLgE : iSLg} placeholder="Jane Smith" value={cForm.name} onChange={e => setCF("name", e.target.value)} onBlur={cBlur("name")} />
                      {cTouched.name && <FieldErr msg={cErr.name} />}
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 7, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Phone *</label>
                      <div style={{ display: "flex", gap: 8 }}>
                        <select className="fi" style={{ ...iSLg, width: 90, flexShrink: 0, padding: "13px 8px", cursor: "pointer" }} value={cForm.dialCode} onChange={e => setCF("dialCode", e.target.value)}>
                          {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                        </select>
                        <input className={`fi${cTouched.phone && cErr.phone ? " fi-err" : ""}`} style={{ ...(cTouched.phone && cErr.phone ? iSLgE : iSLg), flex: 1 }} type="tel" placeholder="647 XXX XXXX" value={cForm.phone} onChange={e => setCF("phone", e.target.value)} onBlur={cBlur("phone")} />
                      </div>
                      {cTouched.phone && <FieldErr msg={cErr.phone} />}
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 7, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Business Email *</label>
                    <input className={`fi${cTouched.email && cErr.email ? " fi-err" : ""}`} style={cTouched.email && cErr.email ? iSLgE : iSLg} type="email" placeholder="jane@yourcompany.com" value={cForm.email} onChange={e => setCF("email", e.target.value)} onBlur={cBlur("email")} />
                    {cTouched.email && <FieldErr msg={cErr.email} />}
                  </div>

                  {/* Service */}
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 7, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Service of Interest</label>
                    <select className="fi" style={{ ...iSLg, cursor: "pointer" }} value={cForm.service} onChange={e => setCF("service", e.target.value)}>
                      <option value="">Select a service...</option>
                      {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Project description */}
                  <div style={{ marginBottom: 22 }}>
                    <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 7, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Project Description *</label>
                    <textarea className={`fi${cTouched.project && cErr.project ? " fi-err" : ""}`} style={{ ...(cTouched.project && cErr.project ? iSLgE : iSLg), minHeight: 110, resize: "vertical" as const }} placeholder="Briefly describe your Salesforce project, goals, and timeline..." value={cForm.project} onChange={e => setCF("project", e.target.value)} onBlur={cBlur("project")} />
                    {cTouched.project && <FieldErr msg={cErr.project} />}
                  </div>

                  <button className="btn-sf" type="submit" disabled={cLoading} style={{ ...btnSF, width: "100%", padding: "15px", opacity: cLoading ? .6 : 1, cursor: cLoading ? "wait" : "pointer" }}>
                    {cLoading ? "Sending…" : "Submit — Get Free Salesforce Consultation →"}
                  </button>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11.5, textAlign: "center", marginTop: 12 }}>🔒 Your information is 100% secure and never shared.</p>
                </form>
              )}
            </div>

            {/* Right — Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ background: "rgba(0,161,224,0.05)", border: "1px solid rgba(0,161,224,0.18)", borderRadius: 18, padding: "26px" }}>
                <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 800, marginBottom: 16 }}>What Happens After You Submit?</h3>
                {[{ s: "1", text: "We review your project within a few hours — no bots." }, { s: "2", text: "A senior Salesforce consultant calls you within 24 hours." }, { s: "3", text: "We send a free scoping document with timeline & cost." }, { s: "4", text: "You decide — no pressure, no obligation." }].map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: i < 3 ? 14 : 0, padding: "12px 14px", borderRadius: 10, background: "rgba(255,255,255,0.03)", transition: "background .2s", cursor: "default" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(0,161,224,0.07)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"}>
                    <div style={{ width: 30, height: 30, borderRadius: "50%", flexShrink: 0, background: A, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900, color: "#000" }}>{step.s}</div>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{step.text}</p>
                  </div>
                ))}
              </div>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "24px" }}>
                <h3 style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 16 }}>Direct Contacts</h3>
                {[{ flag: "🇨🇦", label: "Canada", phone: "+91 9900566466" }, { flag: "🇺🇸", label: "USA", phone: "+91 9900566466" }, { flag: "🇬🇧", label: "UK", phone: "+91 9900566466" }].map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                    <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, fontWeight: 500 }}>{c.flag} {c.label}</span>
                    <a href={`tel:${c.phone.replace(/\s|-/g, "")}`} className="h-blue" style={{ color: A, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>{c.phone}</a>
                  </div>
                ))}
                <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <a href="mailto:hello@nncdigital.com" className="h-blue" style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>✉️ hello@nncdigital.com</a>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["🔵 Google Partner", "🏆 ISO Certified", "🔒 GDPR Compliant", "🍁 PIPEDA Ready", "⭐ Clutch Top Agency"].map(b => (
                  <span key={b} style={{ padding: "6px 12px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 500 }}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}