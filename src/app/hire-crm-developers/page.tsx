"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = "#00C9A7";
const TD = "#00a07a";
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";

// ─── Data ─────────────────────────────────────────────────────────────────────
const LOGOS = ["clients1.png", "clients2.png", "clients3.png", "clients4.png", "clients5.png",
  "clients6.png", "clients7.png", "clients8.png", "clients9.png", "clients10.png", "clients11.png"];

const SUCCESS_STORIES = [
  {
    industry: "Manufacturing", icon: "🏭", result: "35% Efficiency Gain",
    title: "Dedicated CRM Developer for a Canadian Manufacturer",
    description: "A dedicated Salesforce developer integrated with their ERP, automating inventory tracking and sales processes across 5 facilities.",
    metrics: [{ l: "Efficiency", v: "+35%", i: "⚡" }, { l: "Dev Time", v: "-52%", i: "⏱️" }, { l: "ROI", v: "312%", i: "💰" }]
  },
  {
    industry: "Healthcare", icon: "🏥", result: "42% More Bookings",
    title: "HubSpot Developer for a UK Healthcare Provider",
    description: "A dedicated HubSpot developer built custom objects, automated patient journeys, and integrated with their NHS systems.",
    metrics: [{ l: "Bookings", v: "+42%", i: "📅" }, { l: "Engagement", v: "+67%", i: "📈" }, { l: "Patient Satisfaction", v: "4.9★", i: "⭐" }]
  },
  {
    industry: "D2C Retail", icon: "🛍️", result: "2.4× Conversion Rate",
    title: "Zoho CRM Developer for a US D2C Brand",
    description: "A dedicated Zoho developer built custom modules, automated lead scoring, and integrated with Shopify for real-time sync.",
    metrics: [{ l: "Conversion", v: "2.4×", i: "📈" }, { l: "Revenue", v: "+89%", i: "💰" }, { l: "Leads/mo", v: "+145%", i: "🚀" }]
  },
];

const SERVICES = [
  { icon: "👨‍💻", title: "Full-Time Dedicated Developer (160 hrs/mo)", desc: "Tailored for businesses in Canada, USA & UK. A full-time remote developer who works exclusively on your CRM projects.", tag: "Full-Time" },
  { icon: "⏱️", title: "Part-Time Dedicated Developer (80 hrs/mo)", desc: "Tailored for businesses in Canada, USA & UK. Perfect for ongoing maintenance, smaller projects, or budget-conscious teams.", tag: "Part-Time" },
  { icon: "📋", title: "Project-Based Engagement", desc: "Tailored for businesses in Canada, USA & UK. Fixed-scope, fixed-price CRM development with a dedicated team for your specific project.", tag: "Project" },
  { icon: "💼", title: "CRM Consulting Retainer", desc: "Tailored for businesses in Canada, USA & UK. Monthly consulting hours for strategy, architecture, and technical guidance.", tag: "Consulting" },
  { icon: "🔄", title: "CRM Migration Team", desc: "Tailored for businesses in Canada, USA & UK. Dedicated developers to handle end-to-end migration from legacy systems.", tag: "Migration" },
  { icon: "🔧", title: "CRM Integration Specialists", desc: "Tailored for businesses in Canada, USA & UK. Developers focused on connecting your CRM with ERP, e-commerce, and marketing tools.", tag: "Integration" },
  { icon: "📊", title: "CRM Customisation Experts", desc: "Tailored for businesses in Canada, USA & UK. Custom objects, fields, workflows, and automations built to your exact specs.", tag: "Custom" },
  { icon: "📈", title: "Salesforce Development Team", desc: "Tailored for businesses in Canada, USA & UK. Certified Salesforce developers for Sales Cloud, Service Cloud, and Marketing Cloud.", tag: "Salesforce" },
  { icon: "🎯", title: "HubSpot Development Team", desc: "Tailored for businesses in Canada, USA & UK. HubSpot-certified developers for custom modules, integrations, and automations.", tag: "HubSpot" },
];

const BENEFITS = [
  { num: "01", icon: "✅", title: "Vetted Developers", desc: "Every developer passes technical assessments, code reviews, and soft-skill interviews. 98% trial-to-hire success rate.", tags: ["3-Step Vetting", "Technical Tests", "Culture Fit"] },
  { num: "02", icon: "🔄", title: "Flexible Models", desc: "Full-time, part-time, project-based, or retainer. Scale up or down as your needs change — no long-term lock-in.", tags: ["Full-Time", "Part-Time", "Project"] },
  { num: "03", icon: "🌎", title: "Time Zone Overlap", desc: "Developers work overlapping hours with Canada, USA & UK time zones. Morning standups, real-time collaboration, and async updates.", tags: ["4+ Hours Overlap", "Real-Time", "Flexible"] },
  { num: "04", icon: "⚡", title: "Start in 48 Hours", desc: "Submit a brief, interview candidates, and have a developer starting within 48 hours. Urgent projects move even faster.", tags: ["Quick Start", "48hr Turnaround", "Urgent OK"] },
];

const TOOLS = [
  { icon: "☁️", name: "Salesforce", purpose: "Enterprise-grade CRM development.", clr: "rgba(0,161,224,.08)", bd: "rgba(0,161,224,.22)" },
  { icon: "🟠", name: "HubSpot", purpose: "Best-in-class marketing & sales CRM.", clr: "rgba(255,122,0,.08)", bd: "rgba(255,122,0,.22)" },
  { icon: "🦎", name: "Zoho CRM", purpose: "Affordable, customisable CRM platform.", clr: "rgba(200,50,80,.08)", bd: "rgba(200,50,80,.22)" },
  { icon: "🏢", name: "MS Dynamics 365", purpose: "Enterprise-grade integration.", clr: "rgba(0,120,215,.08)", bd: "rgba(0,120,215,.22)" },
  { icon: "📈", name: "Pipedrive", purpose: "Best-in-class for sales pipelines.", clr: "rgba(0,150,130,.08)", bd: "rgba(0,150,130,.22)" },
  { icon: "⚛️", name: "Custom CRM (React/Node)", purpose: "Best-in-class for performance.", clr: "rgba(97,218,251,.08)", bd: "rgba(97,218,251,.22)" },
  { icon: "🐍", name: "Custom CRM (Python/Django)", purpose: "Enterprise-grade integration.", clr: "rgba(53,114,165,.08)", bd: "rgba(53,114,165,.22)" },
  { icon: "📱", name: "WhatsApp API", purpose: "Best-in-class for messaging.", clr: "rgba(37,211,102,.08)", bd: "rgba(37,211,102,.22)" },
  { icon: "🔌", name: "REST & GraphQL", purpose: "Best-in-class for API integration.", clr: "rgba(226,77,141,.08)", bd: "rgba(226,77,141,.22)" },
  { icon: "🐘", name: "Laravel/PHP", purpose: "Enterprise-grade custom CRM.", clr: "rgba(255,45,32,.08)", bd: "rgba(255,45,32,.22)" },
];

const HIRE_LEFT = [
  { icon: "🏢", title: "Enterprises", desc: "Complex multi-location operations with enterprise-grade security, approvals, and permission hierarchies across Salesforce, HubSpot, or custom CRMs." },
  { icon: "🚀", title: "Start-ups", desc: "Scalable CRM systems from day one — start simple, add automation and AI as you grow without re-platforming." },
  { icon: "🎯", title: "Agencies", desc: "White-label CRM development for agencies. Clean code, full documentation, and seamless handoff to your team." },
];
const HIRE_RIGHT = [
  { icon: "📊", title: "Analytical CRM", desc: "Data-first CRM development with built-in analytics, custom reporting, and real-time dashboards that drive business decisions." },
  { icon: "⚙️", title: "Operational CRM", desc: "Automate daily workflows — from lead assignment to quote generation — so your team focuses on selling, not data entry." },
  { icon: "🤝", title: "Collaborative CRM", desc: "Unify sales, service, and marketing around a single customer view — eliminating silos and duplication across departments." },
];

const AI_FEATS = [
  { icon: "🧠", title: "AI Data Analysis", desc: "Our CRM developers integrate AI tools that analyse customer data — predicting which leads are most likely to convert and why.", clr: "rgba(0,201,167,.08)", bd: "rgba(0,201,167,.2)" },
  { icon: "🔮", title: "Predictive Insights", desc: "Build predictive models into your CRM — forecast revenue, identify at-risk accounts, and get next-best-action recommendations.", clr: "rgba(99,102,241,.08)", bd: "rgba(99,102,241,.2)" },
  { icon: "🤖", title: "Automation at Scale", desc: "Developers build AI-powered bots that handle lead scoring, email follow-ups, and data entry — 24/7, without human intervention.", clr: "rgba(0,201,167,.08)", bd: "rgba(0,201,167,.2)" },
  { icon: "📈", title: "Real-Time Dashboards", desc: "Custom dashboards with live KPIs, pipeline velocity, and team performance metrics — updated instantly as deals progress.", clr: "rgba(255,159,28,.08)", bd: "rgba(255,159,28,.2)" },
];

const WCU_POINTS = [
  { icon: "🏆", text: "8+ years of proven digital excellence" },
  { icon: "🌍", text: "Serving Canada, USA & UK markets" },
  { icon: "⚡", text: "565+ projects delivered globally" },
  { icon: "🤝", text: "Client-first culture, enterprise-grade quality" },
  { icon: "🔒", text: "GDPR, PIPEDA & CCPA compliant delivery" },
  { icon: "📱", text: "Full-stack: Salesforce, HubSpot, Zoho, Custom CRM" },
];
const WCU_STATS = [{ n: 1500, s: "+", l: "Projects Delivered" }, { n: 1800, s: "+", l: "IT Talents" }, { n: 98, s: "%", l: "Retention Rate" }, { n: 25, s: "+", l: "Industries" }];

const FAQS = [
  {
    q: "How quickly can a developer start?",
    a: "We can have a developer starting within 48 hours for urgent requirements. Standard process: submit a brief → interview pre-vetted candidates (24-48hrs) → select and onboard (24hrs). For clients in Canada, USA, and UK, we ensure time zone overlap and a smooth handoff from day one."
  },
  {
    q: "What CRM platforms do your developers work with?",
    a: "Our developers specialise in all major CRM platforms: Salesforce (Sales Cloud, Service Cloud, Marketing Cloud), HubSpot (all hubs), Zoho CRM, Microsoft Dynamics 365, Pipedrive, and custom CRM development using React, Node, Python/Django, Laravel/PHP, and more. We match you with developers who have platform-specific certifications and proven experience."
  },
  {
    q: "Can I trial a developer before committing?",
    a: "Yes — we offer a 40-hour paid trial (5 days) so you can evaluate technical skills, communication, and culture fit before committing to a long-term engagement. 98% of trials convert to full engagements. For clients in Canada, USA, and UK, we schedule trial hours during your business day for real-time collaboration."
  },
  {
    q: "What does a dedicated CRM developer cost per month?",
    a: "Pricing varies by experience level and engagement model: Junior/Mid-level Full-Time Developer (160 hrs/mo) starts from CAD $4,500–$6,500 / £3,200–£4,800. Senior/Lead Full-Time Developer starts from CAD $6,500–$9,500 / £4,800–£7,200. Part-time (80 hrs/mo) and project-based options are also available — typically 40-60% less than equivalent local hiring costs. All engagements are transparent, with no hidden fees."
  },
  {
    q: "How do you ensure code quality and security?",
    a: "Every developer follows our quality framework: mandatory code reviews for all pull requests, automated testing where applicable, security audits for data handling, GDPR/PIPEDA/CCPA compliance checks, and weekly progress reports. For enterprise clients, we can also implement your existing security policies and access controls."
  },
  {
    q: "Can I scale the team up or down?",
    a: "Absolutely. Our engagement model is designed for flexibility — you can increase hours, add developers, or scale down as your needs change. Need an extra developer for a month-long project? Done. Want to reduce from full-time to part-time after launch? Simple. No long-term contracts, no penalties."
  },
];

const INT_OFFICES = [
  { flag: "🇨🇦", city: "Toronto, Canada", phone: "+1 647-XXX-XXXX", email: "hello@nncdigital.com", tz: "EST / EDT" },
  { flag: "🇺🇸", city: "New York, USA", phone: "+1 631-XXX-XXXX", email: "hello@nncdigital.com", tz: "EST / EDT" },
  { flag: "🇬🇧", city: "London, UK", phone: "+44 20-XXXX-XXXX", email: "hello@nncdigital.com", tz: "GMT / BST" },
];
const INDIA_OFFICES = [
  { city: "Bangalore (HQ)", phone: "+91 9900566466", note: "Primary engineering hub" },
  { city: "Mysore", phone: null, note: "Design & QA" },
  { city: "Mumbai", phone: null, note: "Sales & partnerships" },
  { city: "Hyderabad", phone: null, note: "Mobile & cloud" },
];

const SERVICES_LIST = ["Full-Time Developer", "Part-Time Developer", "Project-Based", "CRM Consulting", "Salesforce Development", "HubSpot Development", "Zoho Development", "Custom CRM Development", "Other"];
const DIAL_CODES = [{ code: "+1", flag: "🇨🇦" }, { code: "+1", flag: "🇺🇸" }, { code: "+44", flag: "🇬🇧" }, { code: "+91", flag: "🇮🇳" }];

// ─── Helpers ──────────────────────────────────────────────────────────────────
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
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy; if (p.x < 0) p.x = W; if (p.x > W) p.x = 0; if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(0,201,167,${p.a})`; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 90) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(0,201,167,${.06 * (1 - d / 90)})`; ctx.lineWidth = .5; ctx.stroke();
        }
      }
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
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let step = 0; const t = setInterval(() => { step++; const ease = 1 - Math.pow(1 - step / 70, 3); setV(Math.round(ease * to)); if (step >= 70) { setV(to); clearInterval(t); } }, 1800 / 70);
      }
    }, { threshold: .25 });
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
  return <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 14 }}>{children}</h2>;
}

function GradText({ children }: { children: React.ReactNode }) {
  return <span style={{ background: `linear-gradient(135deg,${T},#1fd1b5)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{children}</span>;
}

function AccItem({ item, open, toggle }: { item: { icon: string; title: string; desc: string }; open: boolean; toggle: () => void }) {
  return (
    <div onClick={toggle} style={{ borderRadius: 14, border: `1px solid ${open ? "rgba(0,201,167,0.4)" : "rgba(255,255,255,0.08)"}`, background: open ? "rgba(0,201,167,0.06)" : "rgba(255,255,255,0.02)", overflow: "hidden", cursor: "pointer", transition: "border-color .25s,background .25s" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, flexShrink: 0, background: open ? "rgba(0,201,167,0.15)" : "rgba(255,255,255,0.05)", border: `1px solid ${open ? "rgba(0,201,167,0.3)" : "rgba(255,255,255,0.1)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, transition: "background .25s" }}>{item.icon}</div>
          <span style={{ fontSize: 15, fontWeight: 700, color: open ? "#fff" : "rgba(255,255,255,0.72)", fontFamily: "'Poppins',sans-serif", transition: "color .2s" }}>{item.title}</span>
        </div>
        <div style={{ width: 28, height: 28, borderRadius: "50%", flexShrink: 0, background: open ? T : "rgba(255,255,255,0.07)", border: `1px solid ${open ? T : "rgba(255,255,255,0.14)"}`, display: "flex", alignItems: "center", justifyContent: "center", color: open ? "#000" : "rgba(255,255,255,0.55)", fontSize: 18, fontWeight: 700, lineHeight: 1, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
      </div>
      <div style={{ maxHeight: open ? 220 : 0, overflow: "hidden", transition: "max-height .35s ease" }}>
        <p style={{ padding: "0 22px 20px 80px", color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.75, fontFamily: "'Poppins',sans-serif", fontWeight: 400, margin: 0 }}>{item.desc}</p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function HireCRMDevelopersPage() {

  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", dialCode: "+1", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const setF = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200); };

  const [story, setStory] = useState(0);
  const [hireL, setHireL] = useState<number | null>(0);
  const [hireR, setHireR] = useState<number | null>(0);
  const [faq, setFaq] = useState<number | null>(0);
  const [gTab, setGTab] = useState<"int" | "india">("int");
  const [vidPlay, setVidPlay] = useState(false);

  const [cForm, setCForm] = useState({ name: "", phone: "", dialCode: "+1", email: "", service: "", project: "" });
  const [cSubmitted, setCSubmitted] = useState(false);
  const [cLoading, setCLoading] = useState(false);
  const setCF = (k: string, v: string) => setCForm(f => ({ ...f, [k]: v }));
  const handleCSubmit = (e: React.FormEvent) => { e.preventDefault(); setCLoading(true); setTimeout(() => { setCLoading(false); setCSubmitted(true); }, 1200); };

  const iS: React.CSSProperties = { width: "100%", padding: "11px 14px", borderRadius: 9, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", color: "#fff", fontSize: 13.5, fontFamily: "'Poppins',sans-serif", outline: "none", boxSizing: "border-box", transition: "border-color .2s,background .2s" };
  const iSLg: React.CSSProperties = { ...iS, padding: "13px 16px", fontSize: 14.5 };

  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════════════
    M1 — HERO + INLINE LEAD FORM
══════════════════════════════════════════════════ */}
      <section style={{ padding: "96px 48px 80px", background: `linear-gradient(135deg,${N0} 0%,#041628 45%,${N0} 100%)`, position: "relative", overflow: "hidden", minHeight: "90vh", display: "flex", alignItems: "center" }}>
        <Particles />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, backgroundImage: `linear-gradient(rgba(0,201,167,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.035) 1px,transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div style={{ position: "absolute", width: 650, height: 650, borderRadius: "50%", background: `radial-gradient(circle,rgba(0,201,167,.14) 0%,transparent 65%)`, top: "40%", left: "-10%", transform: "translateY(-50%)", animation: "heroPulse 8s ease-in-out infinite", pointerEvents: "none", zIndex: 1 }} />
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 65%)", top: "10%", right: "5%", animation: "heroPulse 10s ease-in-out infinite .5s", pointerEvents: "none", zIndex: 1 }} />
        <div style={{ position: "absolute", width: 520, height: 520, borderRadius: "50%", border: "1px dashed rgba(0,201,167,.08)", top: "50%", left: "-12%", transform: "translateY(-50%)", animation: "heroSpin 55s linear infinite", pointerEvents: "none", zIndex: 1 }} />
        <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(0,201,167,.28),transparent)", animation: "heroScan 7s linear infinite", pointerEvents: "none", zIndex: 2 }} />

        <div className="hero-layout">
          {/* Left */}
          <div style={{ animation: "heroFadeUp .7s ease both" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.25)", borderRadius: 100, padding: "7px 18px", marginBottom: 28, animation: "heroGlow 3s ease-in-out infinite,heroFadeUp .7s ease both" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: T, boxShadow: `0 0 10px ${T}`, animation: "heroBlink 1.4s ease-in-out infinite" }} />
              <span style={{ color: T, fontSize: 11.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>Hire CRM Developers — Canada, USA &amp; UK</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px,3.8vw,54px)", fontWeight: 900, lineHeight: 1.12, marginBottom: 22, letterSpacing: "-0.025em", color: "#fff", animation: "heroFadeUp .7s ease .12s both" }}>
              Hire Dedicated <GradText>CRM Developers</GradText> for Your Business in Canada, USA &amp; UK
            </h1>
            <p style={{ color: "rgba(255,255,255,0.52)", fontSize: "clamp(14px,1.3vw,16.5px)", lineHeight: 1.85, marginBottom: 28, maxWidth: 600, animation: "heroFadeUp .7s ease .22s both" }}>
              Need experienced CRM developers without building an in-house team? NNC Digital provides dedicated developers who integrate with your workflow and deliver results — from Salesforce to HubSpot to custom CRM.
            </p>

            {/* Engagement pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28, animation: "heroFadeUp .7s ease .27s both" }}>
              {[{ i: "👨‍💻", l: "Full-Time (160hrs/mo)" }, { i: "⏱️", l: "Part-Time (80hrs/mo)" }, { i: "📋", l: "Project-Based" }, { i: "💼", l: "Retainer" }].map(b => (
                <span key={b.l} className="platform-pill" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 100, border: "1px solid rgba(0,201,167,0.25)", background: "rgba(0,201,167,0.06)", color: "rgba(255,255,255,0.8)", fontSize: 12.5, fontWeight: 600 }}>{b.i} {b.l}</span>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36, animation: "heroFadeUp .7s ease .32s both" }}>
              {[{ i: "🔵", l: "Google Partner" }, { i: "🏆", l: "ISO Certified" }, { i: "🔒", l: "GDPR Compliant" }, { i: "🍁", l: "PIPEDA Ready" }, { i: "⭐", l: "Clutch Top Agency" }].map(b => (
                <span key={b.l} className="mob-badge" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 13px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.65)", fontSize: 12.5, fontWeight: 600, transition: "all .2s", cursor: "default" }}>{b.i} {b.l}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", animation: "heroFadeUp .7s ease .36s both" }}>
              {[{ flag: "🇨🇦", label: "CA:", phone: "+1 647-XXX-XXXX" }, { flag: "🇬🇧", label: "UK:", phone: "+44 20-XXXX-XXXX" }].map(p => (
                <a key={p.phone} href={`tel:${p.phone.replace(/\s|-/g, "")}`} className="h-teal" style={{ display: "flex", alignItems: "center", gap: 7, color: "rgba(255,255,255,0.5)", fontSize: 13.5, fontWeight: 600, textDecoration: "none", transition: "color .2s" }}>
                  <span>{p.flag}</span><span style={{ color: "rgba(255,255,255,0.3)" }}>{p.label}</span><span style={{ color: T }}>{p.phone}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Hero Form */}
          <div style={{ background: "rgba(8,20,40,0.85)", border: "1px solid rgba(0,201,167,0.22)", borderRadius: 20, padding: "32px 28px", backdropFilter: "blur(16px)", boxShadow: "0 32px 80px rgba(0,0,0,0.5),0 0 40px rgba(0,201,167,0.06)", position: "relative", overflow: "hidden", animation: "heroFadeUp .7s ease .15s both" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${T},transparent)` }} />
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
                <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 800, marginBottom: 10 }}>Request Received!</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>We&apos;ll contact you within 24 hours to discuss your developer needs.</p>
                <button onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", phone: "", dialCode: "+1", email: "", service: "", message: "" }); }} style={{ padding: "11px 26px", borderRadius: 9, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: 14, fontFamily: "'Poppins',sans-serif", cursor: "pointer" }}>Send Another →</button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: 22 }}>
                  <p style={{ color: T, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 4 }}>Hire a Developer</p>
                  <h2 style={{ color: "#fff", fontSize: 18, fontWeight: 800, margin: 0, lineHeight: 1.3 }}>Get a Free Developer Match in 24 Hours</h2>
                </div>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div className="cf-name">
                    <div><label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>First Name *</label><input className="fi" required style={iS} placeholder="Jane" value={form.firstName} onChange={e => setF("firstName", e.target.value)} /></div>
                    <div><label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Last Name</label><input className="fi" style={iS} placeholder="Smith" value={form.lastName} onChange={e => setF("lastName", e.target.value)} /></div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Phone</label>
                    <div style={{ display: "flex", gap: 8 }}>
                      <select className="fi" style={{ ...iS, width: 82, flexShrink: 0, padding: "11px 6px", cursor: "pointer" }} value={form.dialCode} onChange={e => setF("dialCode", e.target.value)}>
                        {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                      </select>
                      <input className="fi" style={iS} type="tel" placeholder="647 XXX XXXX" value={form.phone} onChange={e => setF("phone", e.target.value)} />
                    </div>
                  </div>
                  <div><label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Business Email *</label><input className="fi" required type="email" style={iS} placeholder="jane@company.com" value={form.email} onChange={e => setF("email", e.target.value)} /></div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Developer Need</label>
                    <select className="fi" style={{ ...iS, cursor: "pointer" }} value={form.service} onChange={e => setF("service", e.target.value)}>
                      <option value="">Select...</option>
                      {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div><label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Message</label><textarea className="fi" style={{ ...iS, minHeight: 76, resize: "vertical" as const }} placeholder="Tell us about your CRM platform and developer requirements..." value={form.message} onChange={e => setF("message", e.target.value)} /></div>
                  <button className="btn-teal" type="submit" disabled={loading} style={{ padding: "13px", borderRadius: 10, border: "none", marginTop: 4, background: loading ? "rgba(0,201,167,0.5)" : `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 800, fontSize: 14.5, fontFamily: "'Poppins',sans-serif", cursor: loading ? "wait" : "pointer", transition: "transform .2s,box-shadow .2s" }}>
                    {loading ? "Sending..." : "👨‍💻 Get Free Developer Match →"}
                  </button>
                  <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 11, textAlign: "center", margin: 0 }}>🔒 Secure &amp; confidential. No spam, ever.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M2 — CLIENT LOGOS
══════════════════════════════════════════════════ */}
      <section style={{ padding: "60px 0", background: N0, overflow: "hidden", borderTop: `1px solid rgba(0,201,167,.1)`, borderBottom: `1px solid rgba(0,201,167,.1)` }}>
        <div style={{ textAlign: "center", marginBottom: 40, padding: "0 24px" }}>
          <p style={{ fontWeight: 600, fontSize: 11.5, color: "rgba(255,255,255,.28)", letterSpacing: "0.14em", textTransform: "uppercase" as const, marginBottom: 12 }}>Our Happy Clients</p>
          <h2 style={{ fontSize: "clamp(20px,2.6vw,32px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.25, margin: 0 }}>
            Trusted by Businesses Across <GradText>North America &amp; the UK</GradText>
          </h2>
        </div>
        <div style={{ overflow: "hidden" }}>
          <div className="cl-track">
            {[...LOGOS, ...LOGOS].map((f, i) => (
              <div key={i} style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", height: 60, padding: "0 8px", opacity: .85, transition: "opacity .3s,transform .3s", filter: "grayscale(100%)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "scale(1.08)"; (e.currentTarget as HTMLElement).style.filter = "grayscale(0%)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = ".85"; (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.filter = "grayscale(100%)"; }}
              >
                <img src={`/${f}`} alt={`Client ${i + 1}`} style={{ height: 48, width: "auto", maxWidth: 140, objectFit: "contain" as const }} onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M3 — SUCCESS STORIES
══════════════════════════════════════════════════ */}
      <section style={{ padding: "88px 48px", background: `linear-gradient(180deg,${N2} 0%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(0,201,167,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.02) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <SectionBadge label="Proven Results" />
            <SectionH2>CRM Developer <GradText>Success Stories</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>Real results from dedicated CRM developers working with businesses in Canada, USA &amp; UK.</p>
          </div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 40, flexWrap: "wrap" }}>
            {SUCCESS_STORIES.map((c, i) => (
              <button key={i} className={`ss-tab${story === i ? " act" : ""}`} onClick={() => setStory(i)}><span>{c.icon}</span>{c.industry} — {c.result}</button>
            ))}
          </div>
          <div key={story} style={{ background: "rgba(255,255,255,0.02)", border: `1px solid rgba(0,201,167,.3)`, borderRadius: 24, overflow: "hidden", animation: "sbFadeUp .45s ease both" }}>
            <div style={{ height: 3, background: `linear-gradient(90deg,transparent,${T},transparent)` }} />
            <div style={{ padding: "36px 36px 32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, fontSize: 26, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,201,167,0.12)", border: `1px solid rgba(0,201,167,.3)` }}>{SUCCESS_STORIES[story].icon}</div>
                <span style={{ padding: "4px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, background: "rgba(0,201,167,0.12)", border: `1px solid rgba(0,201,167,.3)`, color: T, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{SUCCESS_STORIES[story].result}</span>
              </div>
              <h3 style={{ color: "#fff", fontSize: "clamp(18px,2vw,24px)", fontWeight: 800, marginBottom: 16, lineHeight: 1.3 }}>{SUCCESS_STORIES[story].title}</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>{SUCCESS_STORIES[story].description}</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
                {SUCCESS_STORIES[story].metrics.map((m, i) => (
                  <div key={i} style={{ textAlign: "center", padding: "18px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", transition: "transform .25s,background .25s", cursor: "default" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,0.06)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; }}>
                    <div style={{ fontSize: 22, marginBottom: 8 }}>{m.i}</div>
                    <div style={{ fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 900, marginBottom: 4, background: `linear-gradient(135deg,#fff 30%,${T})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{m.v}</div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, fontWeight: 500 }}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
            {SUCCESS_STORIES.map((_, i) => (
              <button key={i} onClick={() => setStory(i)} style={{ width: story === i ? 24 : 8, height: 8, borderRadius: 100, background: story === i ? T : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", transition: "all .3s ease" }} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <button className="btn-teal" style={{ padding: "14px 36px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: 15, fontFamily: "'Poppins',sans-serif", cursor: "pointer", transition: "transform .2s,box-shadow .2s" }}>View All Case Studies →</button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M4 — SERVICES WE OFFER
══════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 48px 48px", background: `linear-gradient(180deg,${N1} 0%,${N2} 60%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(0,201,167,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.025) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <SectionBadge label="Hire CRM Developers" />
            <SectionH2>Hire CRM Developers <GradText>Services We Offer</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.75, maxWidth: 580, margin: "0 auto" }}>Flexible engagement models for businesses across Canada, USA &amp; UK.</p>
          </div>
          <div className="svc-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {SERVICES.map((s, i) => (
              <div key={s.title} className="svc-card" style={{ animationDelay: `${i * .06}s` }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                  <div className="svc-icon" style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0, transition: "background .3s,transform .3s" }}>{s.icon}</div>
                  <span style={{ padding: "3px 10px", borderRadius: 100, fontSize: 10.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: T, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.18)" }}>{s.tag}</span>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", lineHeight: 1.3, margin: 0 }}>{s.title}</h3>
                <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.3)", fontSize: 13, fontWeight: 600, marginTop: "auto" }}>Learn More <span>→</span></span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <button className="btn-teal" style={{ padding: "14px 36px", borderRadius: 10, background: `linear-gradient(135deg,${T},${TD})`, border: "none", color: "#000", fontWeight: 700, fontSize: 15, fontFamily: "'Poppins',sans-serif", cursor: "pointer", transition: "transform .2s,box-shadow .2s" }}>View All Engagement Models →</button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M5 — KEY BENEFITS (LINEAR NUMBERED)
══════════════════════════════════════════════════ */}
      <section style={{ padding: "88px 48px", background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(0,201,167,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.025) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <SectionBadge label="Why Hire With Us" />
            <SectionH2>Key Benefits of Hiring <GradText>CRM Developers</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>Here&apos;s what you gain when you hire dedicated CRM developers from NNC Digital.</p>
          </div>
          <div className="kb-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
            {BENEFITS.map((b, i) => (
              <div key={i} className="kb-card" style={{ animationDelay: `${i * .12}s` }}>
                <div style={{ fontSize: "clamp(42px,5vw,64px)", fontWeight: 900, lineHeight: 1, background: "linear-gradient(135deg,rgba(0,201,167,0.15) 0%,rgba(0,201,167,0.05) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", flexShrink: 0, width: 72, textAlign: "center" }}>{b.num}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}><span style={{ fontSize: 22 }}>{b.icon}</span><h3 style={{ color: "#fff", fontSize: 19, fontWeight: 800, margin: 0 }}>{b.title}</h3></div>
                  <p style={{ color: "rgba(255,255,255,0.52)", fontSize: 14.5, lineHeight: 1.75, margin: "0 0 14px" }}>{b.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {b.tags.map(tag => <span key={tag} style={{ display: "inline-flex", alignItems: "center", padding: "3px 10px", borderRadius: 100, fontSize: 10.5, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase" as const, color: T, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.18)" }}>{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 52 }}>
            <button className="btn-teal" style={{ padding: "14px 36px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: 15, fontFamily: "'Poppins',sans-serif", cursor: "pointer", transition: "transform .2s,box-shadow .2s" }}>Find Your Developer →</button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M6 — PLATFORM TOOLS (ICON GRID)
══════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 48px", background: N1, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionBadge label="Developer Expertise" />
            <SectionH2>Leading Platform Tools <GradText>Our Developers Use</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>Our developers are experts across all major CRM platforms and technologies.</p>
          </div>
          <div className="pt-grid" style={{ gridTemplateColumns: "repeat(5,1fr)" }}>
            {TOOLS.map((tool, i) => (
              <div key={i} className="pt-card" style={{ background: tool.clr, border: `1px solid ${tool.bd}` }}>
                <div className="pt-icon" style={{ width: 56, height: 56, borderRadius: 15, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 16, background: "rgba(255,255,255,0.05)", border: `1px solid ${tool.bd}`, transition: "transform .25s" }}>{tool.icon}</div>
                <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>{tool.name}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>{tool.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M7 — HIRE DEVELOPERS / WHY CHOOSE US (DARK ACCORDION)
══════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 48px", background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionBadge label="Tailored Matching" />
            <SectionH2>Hire Developers <GradText>Tailored to Your Needs</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>Whether you&apos;re an enterprise, start-up, or agency — we match you with the right CRM developer for your exact challenge.</p>
          </div>
          <div className="two-col" style={{ marginBottom: 16 }}>
            <p style={{ color: T, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>By Business Type</p>
            <p style={{ color: T, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>By CRM Type</p>
          </div>
          <div className="two-col">
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {HIRE_LEFT.map((item, i) => <AccItem key={item.title} item={item} open={hireL === i} toggle={() => setHireL(hireL === i ? null : i)} />)}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {HIRE_RIGHT.map((item, i) => <AccItem key={item.title} item={item} open={hireR === i} toggle={() => setHireR(hireR === i ? null : i)} />)}
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 48, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-teal" style={{ padding: "14px 32px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: 15, fontFamily: "'Poppins',sans-serif", cursor: "pointer", transition: "transform .2s,box-shadow .2s" }}>👨‍💻 Hire a CRM Developer</button>
            <button style={{ padding: "14px 32px", borderRadius: 10, border: "1.5px solid rgba(0,201,167,0.35)", background: "transparent", color: T, fontWeight: 600, fontSize: 15, fontFamily: "'Poppins',sans-serif", cursor: "pointer", transition: "border-color .2s,background .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = T; (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,0.07)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,167,0.35)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
              View Pricing →
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M8 — AI-POWERED SOLUTIONS
══════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 48px", background: `linear-gradient(180deg,${N2} 0%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "0%", left: "50%", transform: "translateX(-50%)", width: 700, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ marginBottom: 52, maxWidth: 620 }}>
            <SectionBadge label="AI-Powered" />
            <SectionH2>Leverage <GradText>AI-Powered CRM</GradText> Development</SectionH2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.8 }}>Our developers build AI capabilities directly into your CRM — predictive analytics, automation, and intelligent insights.</p>
          </div>
          <div className="ai-feat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {AI_FEATS.map((f, i) => (
              <div key={i} style={{ background: "rgba(0,201,167,0.05)", border: "1px solid rgba(0,201,167,0.15)", borderRadius: 16, padding: "28px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.52)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M9 — FULL-WIDTH CTA BANNER
══════════════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ background: "linear-gradient(135deg,#0055b3 0%,#0077cc 35%,#00a07a 65%,#00C9A7 100%)", backgroundSize: "300% 300%", animation: "ctaBgShift 8s ease infinite", padding: "88px 48px", textAlign: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: "-20%", left: "-5%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.1) 0%,transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-20%", right: "-5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
          <div style={{ position: "relative", zIndex: 2, maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 100, padding: "6px 18px", marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff", display: "block" }} />
              <span style={{ color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>Hire Today</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,48px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 20 }}>
              Want CRM Developers That Take Your<br />Business to the <span style={{ textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.4)" }}>Next Level?</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 17, lineHeight: 1.75, marginBottom: 40 }}>Connect with NNC Digital today — Salesforce, HubSpot, Zoho, or custom CRM. Let's find your perfect developer.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <button style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 40px", borderRadius: 12, background: "#fff", color: "#0055b3", fontWeight: 800, fontSize: 16, fontFamily: "'Poppins',sans-serif", border: "none", cursor: "pointer", transition: "transform .2s,box-shadow .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.25)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}>✦ Connect Now</button>
              <button style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 36px", borderRadius: 12, background: "transparent", color: "#fff", fontWeight: 700, fontSize: 16, fontFamily: "'Poppins',sans-serif", border: "2px solid rgba(255,255,255,0.5)", cursor: "pointer", transition: "border-color .2s,background .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#fff"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.5)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>📅 Find a Developer →</button>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 28 }}>🇨🇦 Canada &nbsp;·&nbsp; 🇺🇸 USA &nbsp;·&nbsp; 🇬🇧 UK &nbsp;·&nbsp; 🇮🇳 India &nbsp;&nbsp;|&nbsp;&nbsp; hello@nncdigital.com</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M10 — WHY CHOOSE US (SPLIT: TEXT + VIDEO)
══════════════════════════════════════════════════ */}
      <section style={{ padding: "88px 48px", background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div className="two-col-wide">
            <div>
              <SectionBadge label="Our Story" />
              <SectionH2>Why Choose Us as Your <GradText>CRM Development</GradText> Partner?</SectionH2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>Backed by <span style={{ color: "#fff", fontWeight: 600 }}>Nakshatra Namaha Creations Pvt. Ltd.</span> — one of Bangalore&apos;s most respected digital studios with <span style={{ color: T, fontWeight: 600 }}>8+ years of experience</span> and <span style={{ color: T, fontWeight: 600 }}>565+ projects delivered</span>.</p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>We launched NNC Digital as our international arm — bringing the same proven expertise to Canadian, US, and UK markets with dedicated client-facing teams, transparent pricing, and long-term partnership.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 36 }}>
                {WCU_POINTS.map((p, i) => (
                  <div key={i} className="wcu-point" style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", transition: "border-color .2s,background .2s,transform .2s", cursor: "default" }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{p.icon}</span>
                    <span style={{ color: "rgba(255,255,255,0.72)", fontSize: 14, fontWeight: 500 }}>{p.text}</span>
                  </div>
                ))}
              </div>
              <div className="wcu-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
                {WCU_STATS.map(st => (
                  <div key={st.l} className="wcu-stat" style={{ textAlign: "center", padding: "22px 14px", borderRadius: 14, border: "1px solid rgba(0,201,167,0.15)", background: "rgba(0,201,167,0.05)", transition: "transform .25s,background .25s", cursor: "default" }}>
                    <div style={{ fontSize: "clamp(20px,2.2vw,28px)", fontWeight: 900, marginBottom: 4, background: `linear-gradient(135deg,#fff 30%,${T})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}><Counter to={st.n} sfx={st.s} /></div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11.5, fontWeight: 500 }}>{st.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div onClick={() => setVidPlay(true)} style={{ position: "relative", borderRadius: 24, overflow: "hidden", border: "1px solid rgba(0,201,167,0.2)", background: "linear-gradient(135deg,#0a2540,#061425)", aspectRatio: "16/10", cursor: "pointer" }}>
                {!vidPlay ? (
                  <>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,201,167,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.04) 1px,transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
                      <button style={{ width: 72, height: 72, borderRadius: "50%", background: T, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, animation: "wcuPulse 2.5s ease-in-out infinite" }}>▶</button>
                      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, fontWeight: 600, margin: 0 }}>Watch Our Story</p>
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px", background: "linear-gradient(0deg,rgba(3,11,24,0.95),transparent)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div><p style={{ color: "#fff", fontSize: 14, fontWeight: 700, margin: 0 }}>NNC Digital Solutions</p><p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, margin: 0 }}>Founder&apos;s Story · 3 min</p></div>
                      <div style={{ padding: "5px 12px", borderRadius: 100, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.3)", color: T, fontSize: 11, fontWeight: 700 }}>▶ Play</div>
                    </div>
                  </>
                ) : (
                  <iframe src="https://www.youtube.com/embed/?autoplay=1" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} allow="autoplay;fullscreen" />
                )}
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 20, flexWrap: "wrap" }}>
                {["🇨🇦 Canada", "🇺🇸 USA", "🇬🇧 UK", "🇮🇳 India"].map(b => (
                  <span key={b} style={{ padding: "6px 14px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.6)", fontSize: 12.5, fontWeight: 500 }}>{b}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
                <button className="btn-teal" style={{ flex: 1, padding: "13px 20px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: 14, fontFamily: "'Poppins',sans-serif", cursor: "pointer", transition: "transform .2s,box-shadow .2s" }}>📅 Find Your Developer</button>
                <button style={{ flex: 1, padding: "13px 20px", borderRadius: 10, border: "1.5px solid rgba(0,201,167,0.35)", background: "transparent", color: T, fontWeight: 600, fontSize: 14, fontFamily: "'Poppins',sans-serif", cursor: "pointer", transition: "border-color .2s,background .2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = T; (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,0.07)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,167,0.35)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>Our Developers →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M11 — GLOBAL PRESENCE (DARK BLUE TABS)
══════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 48px", background: `linear-gradient(180deg,${N0} 0%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 300, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <SectionBadge label="Our Reach" />
            <SectionH2>Global <GradText>Presence</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, lineHeight: 1.75, maxWidth: 500, margin: "0 auto" }}>Client-facing offices in North America &amp; the UK. Engineering headquarters in Bangalore, India.</p>
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 40 }}>
            {[{ key: "int", label: "🌍 North America & UK" }, { key: "india", label: "🇮🇳 India (Engineering HQ)" }].map(t => (
              <button key={t.key} className="gp-tab" onClick={() => setGTab(t.key as "int" | "india")} style={{ padding: "11px 24px", borderRadius: 10, border: `1px solid ${gTab === t.key ? "rgba(0,201,167,0.5)" : "rgba(255,255,255,0.1)"}`, background: gTab === t.key ? "rgba(0,201,167,0.12)" : "rgba(255,255,255,0.03)", color: gTab === t.key ? T : "rgba(255,255,255,0.55)", fontSize: 14, fontWeight: 700, fontFamily: "'Poppins',sans-serif", cursor: "pointer", transition: "all .22s", boxShadow: gTab === t.key ? "0 4px 20px rgba(0,201,167,0.12)" : "none" }}>{t.label}</button>
            ))}
          </div>
          {gTab === "int" && (
            <div>
              <div className="gp-offices" style={{ marginBottom: 24 }}>
                {INT_OFFICES.map((o, i) => (
                  <div key={i} className="gp-card" style={{ padding: "28px 24px", borderRadius: 18, background: "rgba(0,201,167,0.05)", border: "1px solid rgba(0,201,167,0.18)", transition: "transform .25s,box-shadow .25s,border-color .25s", cursor: "default" }}>
                    <div style={{ fontSize: 36, marginBottom: 14 }}>{o.flag}</div>
                    <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{o.city}</h3>
                    <p style={{ color: T, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: 16 }}>{o.tz}</p>
                    <a href={`tel:${o.phone.replace(/\s|-/g, "")}`} className="h-teal" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: 600, textDecoration: "none", marginBottom: 8, transition: "color .2s" }}>📞 {o.phone}</a>
                    <a href={`mailto:${o.email}`} className="h-teal" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.5)", fontSize: 13, textDecoration: "none", transition: "color .2s" }}>✉️ {o.email}</a>
                  </div>
                ))}
              </div>
              <div style={{ borderRadius: 14, padding: "20px 28px", background: "rgba(0,201,167,0.05)", border: "1px solid rgba(0,201,167,0.15)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}><div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} /><span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, fontWeight: 500 }}>Available Mon–Fri, 9am–6pm in your time zone</span></div>
                <a href="mailto:hello@nncdigital.com" className="h-teal" style={{ color: T, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>hello@nncdigital.com →</a>
              </div>
            </div>
          )}
          {gTab === "india" && (
            <div>
              <div style={{ borderRadius: 20, padding: "36px 36px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
                  <span style={{ fontSize: 32 }}>🇮🇳</span>
                  <div><h3 style={{ color: "#fff", fontSize: 18, fontWeight: 800, margin: 0 }}>Nakshatra Namaha Creations Pvt. Ltd.</h3><p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: "4px 0 0" }}>Engineering &amp; Delivery HQ — Bangalore, India</p></div>
                </div>
                <div className="gp-ind-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
                  {INDIA_OFFICES.map((o, i) => (
                    <div key={i} className="gp-ind" style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 18px", borderRadius: 12, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", transition: "background .2s,border-color .2s", cursor: "default" }}>
                      <span style={{ fontSize: 22 }}>🇮🇳</span>
                      <div><p style={{ color: "#fff", fontSize: 14, fontWeight: 700, margin: 0 }}>{o.city}</p><p style={{ color: "rgba(255,255,255,0.38)", fontSize: 12, margin: "2px 0 0" }}>{o.note}</p>{o.phone && <p style={{ color: T, fontSize: 12.5, fontWeight: 600, margin: "4px 0 0" }}>{o.phone}</p>}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.07)" }}><p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, margin: 0 }}>✉️ info@nakshatranamahacreations.com</p></div>
              </div>
              <div className="gp-india-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
                {[{ n: "8+", l: "Years Active" }, { n: "565+", l: "Projects" }, { n: "100+", l: "Team Members" }, { n: "4", l: "India Offices" }].map((s, i) => (
                  <div key={i} style={{ textAlign: "center", padding: "20px 12px", borderRadius: 14, background: "rgba(0,201,167,0.06)", border: "1px solid rgba(0,201,167,0.15)", transition: "transform .25s,background .25s", cursor: "default" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,0.12)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,0.06)"; }}>
                    <p style={{ fontSize: 26, fontWeight: 900, color: T, margin: 0 }}>{s.n}</p>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", margin: "4px 0 0", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M12 — FAQS (ACCORDION)
══════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 48px", background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "30%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <SectionBadge label="FAQs" />
            <SectionH2>Frequently Asked <GradText>Questions</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>Everything you need to know about hiring CRM developers for businesses in Canada, USA &amp; UK.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQS.map((f, i) => (
              <div key={i} className={`faq-item${faq === i ? " fopen" : ""}`} onClick={() => setFaq(faq === i ? null : i)} style={{ border: `1px solid ${faq === i ? "rgba(0,201,167,0.4)" : "rgba(255,255,255,0.08)"}`, borderRadius: 16, background: faq === i ? "rgba(0,201,167,0.06)" : "rgba(255,255,255,0.02)", overflow: "hidden", cursor: "pointer", transition: "all .25s ease" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "20px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ color: T, fontSize: 13, fontWeight: 800, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", borderRadius: 8, padding: "4px 10px", flexShrink: 0 }}>Q{i + 1}</span>
                    <span style={{ fontSize: 15.5, fontWeight: 700, color: faq === i ? "#fff" : "rgba(255,255,255,0.78)", lineHeight: 1.4, transition: "color .2s" }}>{f.q}</span>
                  </div>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 700, lineHeight: 1, background: faq === i ? T : "rgba(255,255,255,0.07)", border: `1px solid ${faq === i ? T : "rgba(255,255,255,0.12)"}`, color: faq === i ? "#000" : "rgba(255,255,255,0.5)", transform: faq === i ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
                </div>
                <div style={{ maxHeight: faq === i ? 500 : 0, overflow: "hidden", transition: "max-height .38s ease" }}>
                  <p style={{ padding: "0 22px 22px 82px", color: "rgba(255,255,255,0.55)", fontSize: 14.5, lineHeight: 1.8, margin: 0 }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, marginBottom: 20 }}>Still have questions? We respond within 24 hours.</p>
            <button className="btn-teal" style={{ padding: "13px 32px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: 15, fontFamily: "'Poppins',sans-serif", cursor: "pointer", transition: "transform .2s,box-shadow .2s" }}>Ask Us Anything →</button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M13 — READY TO BUILD + CONTACT FORM
══════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 48px", background: `linear-gradient(180deg,${N2} 0%,${N0} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 700, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionBadge label="Get In Touch" />
            <SectionH2>Ready to Hire Your <GradText>CRM Developer?</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15.5, lineHeight: 1.75, maxWidth: 540, margin: "0 auto" }}>Tell us about your CRM platform and developer requirements. We'll match you with pre-vetted candidates within 48 hours.</p>
          </div>
          <div className="cf-grid">
            {/* Left — Form */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "36px 32px" }}>
              {cSubmitted ? (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
                  <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Request Sent!</h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>Thank you — we'll match you with pre-vetted CRM developers within 48 hours.</p>
                  <button onClick={() => { setCSubmitted(false); setCForm({ name: "", phone: "", dialCode: "+1", email: "", service: "", project: "" }); }} style={{ padding: "12px 28px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: 14, fontFamily: "'Poppins',sans-serif", cursor: "pointer" }}>Send Another →</button>
                </div>
              ) : (
                <form onSubmit={handleCSubmit}>
                  <div className="cf-name" style={{ marginBottom: 16 }}>
                    <div><label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 7, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Full Name *</label><input className="fi" required style={iSLg} placeholder="Jane Smith" value={cForm.name} onChange={e => setCF("name", e.target.value)} /></div>
                    <div>
                      <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 7, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Phone</label>
                      <div style={{ display: "flex", gap: 8 }}>
                        <select className="fi" style={{ ...iSLg, width: 90, flexShrink: 0, padding: "13px 8px", cursor: "pointer" }} value={cForm.dialCode} onChange={e => setCF("dialCode", e.target.value)}>
                          {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                        </select>
                        <input className="fi" style={iSLg} type="tel" placeholder="647 XXX XXXX" value={cForm.phone} onChange={e => setCF("phone", e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: 16 }}><label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 7, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Business Email *</label><input className="fi" required type="email" style={iSLg} placeholder="jane@yourcompany.com" value={cForm.email} onChange={e => setCF("email", e.target.value)} /></div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 7, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Developer Need</label>
                    <select className="fi" style={{ ...iSLg, cursor: "pointer" }} value={cForm.service} onChange={e => setCF("service", e.target.value)}>
                      <option value="">Select...</option>
                      {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom: 24 }}><label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 7, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Project Description</label><textarea className="fi" style={{ ...iSLg, minHeight: 110, resize: "vertical" as const }} placeholder="Describe your CRM platform, skills needed, and engagement model preference..." value={cForm.project} onChange={e => setCF("project", e.target.value)} /></div>
                  <button className="btn-teal" type="submit" disabled={cLoading} style={{ width: "100%", padding: 15, borderRadius: 10, border: "none", background: cLoading ? "rgba(0,201,167,0.5)" : `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 800, fontSize: 15, fontFamily: "'Poppins',sans-serif", cursor: cLoading ? "wait" : "pointer", transition: "transform .2s,box-shadow .2s" }}>{cLoading ? "Sending..." : "Submit — Find My Developer →"}</button>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11.5, textAlign: "center", marginTop: 12 }}>🔒 Your information is 100% secure and never shared.</p>
                </form>
              )}
            </div>

            {/* Right — Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ background: "rgba(0,201,167,0.05)", border: "1px solid rgba(0,201,167,0.18)", borderRadius: 18, padding: "28px 26px" }}>
                <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 800, marginBottom: 18 }}>What Happens After You Submit?</h3>
                {[{ s: "1", text: "We review your requirements within a few hours." }, { s: "2", text: "We match you with 2-3 pre-vetted developers (24-48hrs)." }, { s: "3", text: "Interview candidates and choose your preferred developer." }, { s: "4", text: "Start with a paid trial or full engagement — your choice." }].map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: i < 3 ? 16 : 0, padding: "12px 14px", borderRadius: 10, background: "rgba(255,255,255,0.03)", transition: "background .2s", cursor: "default" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,0.07)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", flexShrink: 0, background: `linear-gradient(135deg,${T},${TD})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900, color: "#000" }}>{s.s}</div>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{s.text}</p>
                  </div>
                ))}
              </div>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "26px 26px" }}>
                <h3 style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 18 }}>Direct Contacts</h3>
                {[{ flag: "🇨🇦", label: "Canada", phone: "+1 647-XXX-XXXX" }, { flag: "🇺🇸", label: "USA", phone: "+1 631-XXX-XXXX" }, { flag: "🇬🇧", label: "UK", phone: "+44 20-XXXX-XXXX" }].map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                    <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, fontWeight: 500 }}>{c.flag} {c.label}</span>
                    <a href={`tel:${c.phone.replace(/\s|-/g, "")}`} className="h-teal" style={{ color: T, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>{c.phone}</a>
                  </div>
                ))}
                <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <a href="mailto:hello@nncdigital.com" className="h-teal" style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>✉️ hello@nncdigital.com</a>
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