"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";

// ─── Data ─────────────────────────────────────────────────────────────────────
const LOGOS = ["clients1.png", "clients2.png", "clients3.png", "clients4.png", "clients5.png",
  "clients6.png", "clients7.png", "clients8.png", "clients9.png", "clients10.png", "clients11.png"];

const STATS = [
  { val: 150, sfx: "+", label: "ERP Projects Delivered", sub: "Across 12 countries", icon: "🚀" },
  { val: 10, sfx: "+", label: "Years of Expertise", sub: "Deep tech since 2014", icon: "💡" },
  { val: 50, sfx: "+", label: "Clients Globally", sub: "CA · USA · UK · IN", icon: "🌍" },
  { val: 98, sfx: "%", label: "Client Retention", sub: "Long-term partnerships", icon: "🤝" },
];

const CASES = [
  {
    industry: "Manufacturing", icon: "🏭", tag: "Operations", tagClr: "#818cf8", tagBg: "rgba(99,102,241,.15)", tagBd: "rgba(99,102,241,.35)",
    title: "40% Cost Reduction for a Canadian Manufacturer",
    challenge: "Disconnected inventory, procurement, and production systems caused costly delays and stock-outs across 5 facilities.",
    solution: "We built a unified ERP integrating procurement, inventory, and production scheduling with real-time dashboards.",
    metrics: [{ l: "Cost Reduction", v: "40%", i: "💰" }, { l: "Stock Accuracy", v: "99.2%", i: "✅" }, { l: "Go-live Time", v: "10 wks", i: "🚀" }]
  },
  {
    industry: "Healthcare", icon: "🏥", tag: "Healthcare", tagClr: "#22c55e", tagBg: "rgba(34,197,94,.12)", tagBd: "rgba(34,197,94,.3)",
    title: "55% Faster Billing for a UK Hospital Group",
    challenge: "A multi-site NHS partner was losing revenue due to manual billing, fragmented patient records, and compliance gaps.",
    solution: "NNC deployed a custom Healthcare ERP with automated billing, GDPR-compliant records, and integrated appointment management.",
    metrics: [{ l: "Faster Billing", v: "+55%", i: "📅" }, { l: "Revenue Leakage", v: "−70%", i: "✅" }, { l: "Compliance", v: "100%", i: "⭐" }]
  },
  {
    industry: "Retail & E-Commerce", icon: "🛒", tag: "Retail", tagClr: "#00C9A7", tagBg: "rgba(0,201,167,.12)", tagBd: "rgba(0,201,167,.3)",
    title: "3× Inventory Turnover for a US Retailer",
    challenge: "A multi-channel retailer had no real-time visibility into stock levels across warehouses, leading to overselling and write-offs.",
    solution: "We built a custom ERP integrating Shopify, 3PL partners, and accounting — delivering live inventory across all channels.",
    metrics: [{ l: "Inventory Turns", v: "3×", i: "📈" }, { l: "Oversell Rate", v: "−95%", i: "✅" }, { l: "Fulfilment Speed", v: "+60%", i: "🚀" }]
  },
];

const SERVICES = [
  { icon: "🗂️", title: "ERP Consulting", desc: "Tailored ERP strategy aligned to your operations across North America and the UK.", tag: "Strategy" },
  { icon: "⚙️", title: "ERP Implementation", desc: "End-to-end ERP setup, configuration, data migration, and launch.", tag: "Setup" },
  { icon: "🎛️", title: "ERP Customization", desc: "Custom ERP modules built precisely around your workflows and business logic.", tag: "Custom" },
  { icon: "📦", title: "Inventory Management", desc: "Real-time inventory tracking across warehouses, locations, and sales channels.", tag: "Inventory" },
  { icon: "👥", title: "HR & Payroll Module", desc: "Automated HR, attendance, payroll, and compliance — built into your ERP.", tag: "HR" },
  { icon: "💼", title: "Finance & Accounting", desc: "Integrated financial reporting, budgeting, invoicing, and multi-currency support.", tag: "Finance" },
  { icon: "🔗", title: "ERP Integration", desc: "Connect your ERP with CRM, e-commerce, logistics, and third-party platforms.", tag: "Integration" },
  { icon: "🔄", title: "ERP Migration", desc: "Secure, zero-loss migration from SAP, Oracle, legacy systems, or spreadsheets.", tag: "Migration" },
  { icon: "📱", title: "ERP Mobile Apps", desc: "Native and cross-platform mobile ERP apps for field teams and remote operations.", tag: "Mobile" },
  { icon: "🏭", title: "Manufacturing Module", desc: "Production planning, BOM management, shop floor control, and quality tracking.", tag: "Manufacturing" },
  { icon: "🚚", title: "Vendor Management", desc: "Streamline supplier onboarding, procurement, PO management, and vendor scorecards.", tag: "Procurement" },
  { icon: "🛠️", title: "ERP Support & Optimisation", desc: "Ongoing ERP administration, performance tuning, and user training post go-live.", tag: "Support" },
];

const ACCORDION_L = [
  { icon: "📦", title: "Inventory & Warehouse", desc: "Real-time stock tracking, multi-location inventory, barcode scanning, and automated reorder triggers across all your warehouses." },
  { icon: "💰", title: "Finance & Accounting", desc: "Integrated ledger, AP/AR automation, multi-currency, tax compliance, and real-time P&L across entities." },
  { icon: "📊", title: "Reports & Dashboards", desc: "Custom KPI dashboards, financial reports, inventory analytics, and executive summaries — refreshed in real time." },
  { icon: "📈", title: "Revenue Forecasting", desc: "AI-driven revenue models combining pipeline data, historical trends, and seasonality for confident business planning." },
];
const ACCORDION_R = [
  { icon: "🏭", title: "Manufacturing & BOM", desc: "Bill of Materials management, production planning, shop floor scheduling, and quality control — all in one ERP." },
  { icon: "🚚", title: "Procurement & Supply Chain", desc: "Automate supplier onboarding, purchase orders, goods receipt, and three-way matching to eliminate procurement delays." },
  { icon: "👥", title: "HR & Payroll", desc: "Employee records, attendance, leave management, payroll processing, and compliance reporting — fully integrated." },
  { icon: "🔗", title: "Third-Party Integrations", desc: "Native connectors for Shopify, WooCommerce, Salesforce, QuickBooks, Stripe, and 100+ platforms via REST API." },
];

const BENEFITS = [
  { num: "01", icon: "🔒", title: "Secure & Compliant", desc: "GDPR / PIPEDA / CCPA compliance built-in. Role-based access, audit trails, and zero data loss guarantee.", tags: ["GDPR", "PIPEDA", "CCPA"] },
  { num: "02", icon: "📊", title: "Real-Time Visibility", desc: "One dashboard across finance, inventory, HR, and operations. Live KPIs and cross-department reporting at a glance.", tags: ["Dashboard", "KPIs", "Reports"] },
  { num: "03", icon: "🔗", title: "Seamless Integration", desc: "Native connectors for Shopify, QuickBooks, Salesforce, Microsoft 365, and 100+ third-party tools.", tags: ["API", "Plugins", "No Silos"] },
  { num: "04", icon: "🤝", title: "Dedicated Support", desc: "Hypercare period after go-live. Dedicated team ensuring maximum ERP adoption and continuous optimisation.", tags: ["24/7", "Training", "Go-Live"] },
];

const TOOLS = [
  { icon: "🔷", name: "SAP Business One", desc: "Enterprise-grade ERP for mid-market and large businesses.", clr: "rgba(0,121,255,.08)", bd: "rgba(0,121,255,.22)" },
  { icon: "🟠", name: "Oracle NetSuite", desc: "Cloud ERP ideal for fast-growing, multi-entity businesses.", clr: "rgba(255,122,0,.08)", bd: "rgba(255,122,0,.22)" },
  { icon: "🏢", name: "MS Dynamics 365", desc: "Integrated ERP + CRM with Microsoft 365 and Azure ecosystem.", clr: "rgba(0,120,215,.08)", bd: "rgba(0,120,215,.22)" },
  { icon: "🔶", name: "Odoo ERP", desc: "Open-source, modular ERP for businesses of all sizes.", clr: "rgba(114,46,209,.08)", bd: "rgba(114,46,209,.22)" },
  { icon: "🌐", name: "ERPNext", desc: "Free, open-source ERP with strong manufacturing and accounting modules.", clr: "rgba(38,166,91,.08)", bd: "rgba(38,166,91,.22)" },
  { icon: "🎯", name: "Epicor ERP", desc: "Industry-focused ERP for manufacturing, distribution, and retail.", clr: "rgba(234,88,12,.08)", bd: "rgba(234,88,12,.22)" },
  { icon: "🔵", name: "Infor CloudSuite", desc: "Cloud ERP for healthcare, manufacturing, and services sectors.", clr: "rgba(37,99,235,.08)", bd: "rgba(37,99,235,.22)" },
  { icon: "⚡", name: "Custom ERP", desc: "100% bespoke when off-the-shelf doesn't fit your exact workflows.", clr: "rgba(0,201,167,.1)", bd: "rgba(0,201,167,.28)", bespoke: true },
];

const HIRE_L = [
  { icon: "🏢", title: "Enterprises", desc: "Complex multi-location operations with enterprise-grade integrations, multi-currency, and permission hierarchies." },
  { icon: "🎯", title: "Agencies", desc: "Client project tracking, resource billing, retainer management, and performance dashboards — ERP designed for agency growth." },
  { icon: "🚀", title: "Start-ups", desc: "Lightweight ERP that scales without outgrowing in 12 months. Start simple, expand modules as you grow." },
];
const HIRE_R = [
  { icon: "📊", title: "Analytical ERP", desc: "Turn raw business data into actionable intelligence. Identify trends, reduce costs, and make confident data-driven decisions." },
  { icon: "🤝", title: "Collaborative ERP", desc: "Unify sales, finance, supply chain, HR, and operations around a single source of truth — eliminating silos." },
  { icon: "⚙️", title: "Operational ERP", desc: "Automate day-to-day business processes from procurement to invoicing so your team focuses on what matters most." },
];

const AI_FEATS = [
  { icon: "🧠", title: "AI Demand Forecasting", desc: "AI analyses historical orders, seasonality, and market signals — predicting demand so you never over-stock or stock-out again.", clr: "rgba(0,201,167,.08)", bd: "rgba(0,201,167,.2)" },
  { icon: "🎯", title: "Predictive Maintenance", desc: "ERP-embedded AI monitors equipment usage data and predicts failures before they happen — cutting unplanned downtime by up to 60%.", clr: "rgba(99,102,241,.08)", bd: "rgba(99,102,241,.2)" },
  { icon: "🤖", title: "Intelligent Process Automation", desc: "AI-powered bots handle purchase orders, invoice matching, expense approvals, and HR workflows — 24/7, without human intervention.", clr: "rgba(0,201,167,.08)", bd: "rgba(0,201,167,.2)" },
];

const AI_ROWS = [
  { label: "Demand forecast accuracy", val: "97%", color: "var(--teal)" },
  { label: "Inventory optimisation", val: "92%", color: "#818cf8" },
  { label: "Process automation", val: "88%", color: "var(--teal)" },
  { label: "Predictive maintenance", val: "94%", color: "#f59e0b" },
];

const WCU_POINTS = [
  { icon: "🏆", text: "8+ years of proven digital excellence" },
  { icon: "🌍", text: "Serving Canada, USA & UK markets" },
  { icon: "⚡", text: "565+ projects delivered across India" },
  { icon: "🤝", text: "Client-first culture, enterprise-grade quality" },
  { icon: "🔒", text: "GDPR, PIPEDA & CCPA compliant delivery" },
  { icon: "📱", text: "Full-stack: Web, Mobile, CRM, ERP, AI" },
];
const WCU_STATS = [{ n: 1500, s: "+", l: "Web Projects" }, { n: 500, s: "+", l: "Mobile Apps" }, { n: 1800, s: "+", l: "IT Talents" }, { n: 25, s: "+", l: "Industries" }];

const FAQS = [
  {
    q: "What is custom ERP software vs off-the-shelf?",
    a: "Off-the-shelf ERP tools like SAP or Oracle are powerful but often require expensive licences and force you to adapt your processes to the software. A custom ERP is built around your exact workflows, compliance requirements, and team structure — resulting in faster adoption and lower ongoing costs."
  },
  {
    q: "What modules can be included in a custom ERP?",
    a: "Virtually any business function: finance & accounting, inventory & warehouse management, procurement & supply chain, HR & payroll, manufacturing & BOM, project management, CRM integration, e-commerce connectivity, and compliance modules for GDPR, PIPEDA, and CCPA."
  },
  {
    q: "How long does ERP development take?",
    a: "A focused custom ERP (3–5 modules) typically takes 10–16 weeks. Mid-complexity builds run 18–28 weeks. Enterprise ERP is scoped individually — typically 28–48 weeks. We provide a fixed timeline before any work begins."
  },
  {
    q: "What does custom ERP development cost in Canada or the UK?",
    a: "A focused ERP starts from CAD $18,000–$35,000 / £14,000–£28,000. Mid-complexity builds range from CAD $40,000–$90,000 / £32,000–£72,000. All quotes are fixed-price."
  },
  {
    q: "Can you migrate data from our existing system?",
    a: "Yes. We handle full data migration from SAP, Oracle, Microsoft Dynamics, legacy systems, and spreadsheets — including data mapping, cleaning, validation, and a zero-downtime cutover plan."
  },
  {
    q: "Are your ERP solutions GDPR, PIPEDA, and CCPA compliant?",
    a: "Yes. Compliance is built in from day one. For UK/EU clients we implement GDPR-ready consent management and audit trails. For Canadian clients we follow PIPEDA. For US clients we implement CCPA-compliant data handling."
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

const SERVICES_LIST = ["ERP Development", "CRM Development", "Web Development", "Mobile App Development", "Marketing Automation", "Salesforce CRM", "Digital Transformation", "Other"];
const DIAL_CODES = [{ code: "+1", flag: "🇨🇦" }, { code: "+1", flag: "🇺🇸" }, { code: "+44", flag: "🇬🇧" }, { code: "+91", flag: "🇮🇳" }];

// ─── Shared helpers ────────────────────────────────────────────────────────────
function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d")!;
    let W = c.width = c.offsetWidth, H = c.height = c.offsetHeight;
    const pts = Array.from({ length: 50 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22,
      r: Math.random() * 1.4 + .3, a: Math.random() * .38 + .07,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0; if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,201,167,${p.a})`; ctx.fill();
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
        let step = 0;
        const t = setInterval(() => { step++; const ease = 1 - Math.pow(1 - step / 70, 3); setV(Math.round(ease * to)); if (step >= 70) { setV(to); clearInterval(t); } }, 1800 / 70);
      }
    }, { threshold: .25 });
    obs.observe(el); return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{v}{sfx}</span>;
}

function GradText({ children }: { children: React.ReactNode }) {
  return <span className="grad-text">{children}</span>;
}

function Badge({ label }: { label: string }) {
  return (
    <div className="section-badge">
      <span className="section-badge__dot" />
      <span className="section-badge__text">{label}</span>
    </div>
  );
}

function SectionHeader({ badge, title, sub, narrow }: { badge: string; title: React.ReactNode; sub?: string; narrow?: boolean }) {
  return (
    <div className="sec-header">
      <Badge label={badge} />
      <h2 className="section-h2">{title}</h2>
      {sub && <p className="text-dim text-muted" style={{ maxWidth: narrow ? 520 : 580, margin: "0 auto" }}>{sub}</p>}
    </div>
  );
}

function AccItem({ item, open, toggle }: { item: { icon: string; title: string; desc: string }; open: boolean; toggle: () => void }) {
  return (
    <div className={`acc-item${open ? " open" : ""}`} onClick={toggle}>
      <div className="acc-item__header">
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div className="acc-item__icon-wrap">{item.icon}</div>
          <span className="acc-item__title">{item.title}</span>
        </div>
        <div className="acc-item__toggle" style={{
          background: open ? "var(--teal)" : "rgba(255,255,255,.07)",
          border: `1px solid ${open ? "var(--teal)" : "rgba(255,255,255,.14)"}`,
          color: open ? "#000" : "rgba(255,255,255,.55)",
          transform: open ? "rotate(45deg)" : "none",
        }}>+</div>
      </div>
      <div className="acc-item__body" style={{ maxHeight: open ? 200 : 0 }}>
        <p>{item.desc}</p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ERPPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", dialCode: "+1", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const setF = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200); };

  const [story, setStory] = useState(0);
  const [accL, setAccL] = useState<number | null>(0);
  const [accR, setAccR] = useState<number | null>(0);
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

  return (
    <>
      <Navbar />
      <div>

        {/* ══ M1 — HERO ══════════════════════════════════════════════════════════════ */}
        <section className="sec sec-hero">
          <Particles />
          <div className="bg-grid-hero" />
          <div className="bg-orb" style={{ width: 650, height: 650, background: "radial-gradient(circle,rgba(0,201,167,.14) 0%,transparent 65%)", top: "40%", left: "-10%", transform: "translateY(-50%)", animation: "heroPulse 8s ease-in-out infinite", zIndex: 1 }} />
          <div className="bg-orb" style={{ width: 400, height: 400, background: "radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 65%)", top: "10%", right: "5%", animation: "heroPulse 10s ease-in-out infinite .5s", zIndex: 1 }} />
          <div className="bg-orb" style={{ width: 520, height: 520, border: "1px dashed rgba(0,201,167,.08)", top: "50%", left: "-12%", transform: "translateY(-50%)", animation: "heroSpin 55s linear infinite", zIndex: 1 }} />
          <div className="bg-scan" />

          <div className="hero-layout">
            {/* Left */}
            <div className="fade-up">
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,201,167,.08)", border: "1px solid rgba(0,201,167,.25)", borderRadius: 100, padding: "7px 18px", marginBottom: 28, animation: "heroGlow 3s ease-in-out infinite" }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--teal)", boxShadow: "0 0 10px var(--teal)", animation: "heroBlink 1.4s ease-in-out infinite" }} />
                <span className="section-badge__text">ERP Development — Canada, USA &amp; UK</span>
              </div>
              <h1 style={{ fontSize: "clamp(28px,3.8vw,54px)", fontWeight: 900, lineHeight: 1.12, marginBottom: 22, letterSpacing: "-0.025em", color: "#fff" }}>
                Custom <GradText>ERP Development Services</GradText> for Growing Businesses in Canada, USA &amp; UK
              </h1>
              <p style={{ color: "rgba(255,255,255,.52)", fontSize: "clamp(14px,1.3vw,16.5px)", lineHeight: 1.85, marginBottom: 32, maxWidth: 600 }}>
                Running your business on spreadsheets and disconnected tools is costing you more than you think. NNC Digital builds custom ERP systems that unify inventory, finance, HR, and operations into one powerful platform.
              </p>
              <div className="badge-row" style={{ marginBottom: 36 }}>
                {[{ i: "🔵", l: "Google Partner" }, { i: "🏆", l: "ISO Certified" }, { i: "🔒", l: "GDPR Compliant" }, { i: "🍁", l: "PIPEDA Ready" }, { i: "⭐", l: "Clutch Top Agency" }].map(b => (
                  <span key={b.l} className="badge badge-soft">{b.i} {b.l}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {[{ flag: "🇨🇦", label: "CA:", phone: "+1 647-XXX-XXXX" }, { flag: "🇬🇧", label: "UK:", phone: "+44 20-XXXX-XXXX" }].map(p => (
                  <a key={p.phone} href={`tel:${p.phone.replace(/\s|-/g, "")}`} className="h-teal" style={{ display: "flex", alignItems: "center", gap: 7, color: "rgba(255,255,255,.5)", fontSize: 13.5, fontWeight: 600, textDecoration: "none" }}>
                    <span>{p.flag}</span><span style={{ color: "rgba(255,255,255,.3)" }}>{p.label}</span><span className="teal">{p.phone}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="hero-form">
              <div className="hero-form__top" />
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
                  <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 800, marginBottom: 10 }}>Request Received!</h3>
                  <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>We&apos;ll contact you within 24 hours with a free consultation.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", phone: "", dialCode: "+1", email: "", service: "", message: "", }); }} className="btn-teal btn" style={{ padding: "11px 26px", fontSize: 14 }}>Send Another →</button>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: 22 }}>
                    <p className="teal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Free Consultation</p>
                    <h2 style={{ color: "#fff", fontSize: 18, fontWeight: 800, margin: 0, lineHeight: 1.3 }}>Get a Free ERP Strategy Call</h2>
                  </div>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div className="cf-name">
                      <div><label className="label-upper">First Name *</label><input className="fi" required placeholder="Jane" value={form.firstName} onChange={e => setF("firstName", e.target.value)} /></div>
                      <div><label className="label-upper">Last Name</label><input className="fi" placeholder="Smith" value={form.lastName} onChange={e => setF("lastName", e.target.value)} /></div>
                    </div>
                    <div>
                      <label className="label-upper">Phone</label>
                      <div className="phone-row">
                        <select className="fi fi-dial fi-select" value={form.dialCode} onChange={e => setF("dialCode", e.target.value)}>
                          {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                        </select>
                        <input className="fi" type="tel" placeholder="647 XXX XXXX" value={form.phone} onChange={e => setF("phone", e.target.value)} />
                      </div>
                    </div>
                    <div><label className="label-upper">Business Email *</label><input className="fi" required type="email" placeholder="jane@company.com" value={form.email} onChange={e => setF("email", e.target.value)} /></div>
                    <div>
                      <label className="label-upper">Service</label>
                      <select className="fi fi-select" value={form.service} onChange={e => setF("service", e.target.value)}>
                        <option value="">Select service...</option>
                        {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div><label className="label-upper">Message</label><textarea className="fi fi-textarea" placeholder="Tell us about your ERP project..." value={form.message} onChange={e => setF("message", e.target.value)} /></div>
                    <button className="btn-teal btn" type="submit" disabled={loading} style={{ padding: "13px", marginTop: 4, width: "100%", opacity: loading ? .6 : 1, cursor: loading ? "wait" : "pointer" }}>
                      {loading ? "Sending..." : "📅 Get Free ERP Consultation →"}
                    </button>
                    <p style={{ color: "rgba(255,255,255,.28)", fontSize: 11, textAlign: "center", margin: 0 }}>🔒 Secure &amp; confidential. No spam, ever.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ══ M2 — CLIENTS ═══════════════════════════════════════════════════════════ */}
        <section className="sec-dark" style={{ padding: "60px 0", overflow: "hidden", borderTop: "1px solid rgba(0,201,167,.1)", borderBottom: "1px solid rgba(0,201,167,.1)" }}>
          <div style={{ textAlign: "center", marginBottom: 40, padding: "0 24px" }}>
            <p style={{ fontWeight: 600, fontSize: 11.5, color: "rgba(255,255,255,.28)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>Our Happy Clients</p>
            <h2 style={{ fontSize: "clamp(20px,2.6vw,32px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.25, margin: 0 }}>
              Trusted by Businesses Across <GradText>North America &amp; the UK</GradText>
            </h2>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="cl-track">
              {[...LOGOS, ...LOGOS].map((f, i) => (
                <div key={i} style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", height: 60, padding: "0 8px", opacity: .85, transition: "opacity .3s,transform .3s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = "scale(1.08)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = ".85"; el.style.transform = ""; }}>
                  <img src={`/${f}`} alt={`Client ${i + 1}`} style={{ height: 48, width: "auto", maxWidth: 140, objectFit: "contain" }} onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ M3 — STATS ════════════════════════════════════════════════════════════ */}
        <section className="sec sec-grad-n1n2-n1" style={{ borderTop: "1px solid rgba(0,201,167,.12)", borderBottom: "1px solid rgba(0,201,167,.12)" }}>
          <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(0,201,167,.3),transparent)", animation: "heroScan 4s linear infinite", pointerEvents: "none" }} />
          <div className="stats-row">
            {STATS.map((s, i) => (
              <div key={i} className="stat-card" style={{ animationDelay: `${i * .12}s` }}>
                <div className="stat-card__icon">{s.icon}</div>
                <div className="stat-card__val"><Counter to={s.val} sfx={s.sfx} /></div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 12.5, color: "rgba(255,255,255,.38)", fontWeight: 500 }}>{s.sub}</div>
                <div className="stat-card__line" style={{ animationDelay: `${.5 + i * .1}s` }} />
              </div>
            ))}
          </div>
        </section>

        {/* ══ M4 — SUCCESS STORIES ═══════════════════════════════════════════════════ */}
        <section className="sec sec-grad-up">
          <div className="bg-grid" />
          <div className="sec-content">
            <SectionHeader badge="Proven Results" title={<>ERP Success <GradText>Stories</GradText></>} sub="Real results for real businesses across Canada, USA & UK." narrow />
            <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 40, flexWrap: "wrap" }}>
              {CASES.map((c, i) => (
                <button key={i} className={`ss-tab${story === i ? " act" : ""}`} onClick={() => setStory(i)}><span>{c.icon}</span>{c.industry}</button>
              ))}
            </div>
            <div key={story} style={{ background: "rgba(255,255,255,.02)", border: `1px solid ${CASES[story].tagBd}`, borderRadius: 24, overflow: "hidden", animation: "sbFadeUp .45s ease both" }}>
              <div style={{ height: 3, background: `linear-gradient(90deg,transparent,${CASES[story].tagClr},transparent)` }} />
              <div style={{ padding: "36px 36px 32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, fontSize: 26, display: "flex", alignItems: "center", justifyContent: "center", background: CASES[story].tagBg, border: `1px solid ${CASES[story].tagBd}` }}>{CASES[story].icon}</div>
                  <span className="badge-sm" style={{ background: CASES[story].tagBg, border: `1px solid ${CASES[story].tagBd}`, color: CASES[story].tagClr }}>{CASES[story].tag}</span>
                </div>
                <h3 style={{ color: "#fff", fontSize: "clamp(18px,2vw,24px)", fontWeight: 800, marginBottom: 28, lineHeight: 1.3 }}>{CASES[story].title}</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 32 }}>
                  {[{ label: "Challenge", text: CASES[story].challenge, icon: "⚠️" }, { label: "Solution", text: CASES[story].solution, icon: "💡" }].map(col => (
                    <div key={col.label} style={{ padding: 20, borderRadius: 14, background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)" }}>
                      <p className="teal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>{col.icon} {col.label}</p>
                      <p style={{ color: "rgba(255,255,255,.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{col.text}</p>
                    </div>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
                  {CASES[story].metrics.map((m, i) => (
                    <div key={i} className="metric-card">
                      <div style={{ fontSize: 22, marginBottom: 8 }}>{m.i}</div>
                      <div className="metric-card__val">{m.v}</div>
                      <div className="metric-card__label">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
              {CASES.map((_, i) => (
                <button key={i} onClick={() => setStory(i)} style={{ width: story === i ? 24 : 8, height: 8, borderRadius: 100, background: story === i ? "var(--teal)" : "rgba(255,255,255,.2)", border: "none", cursor: "pointer", transition: "all .3s ease" }} />
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 44 }}><button className="btn-teal btn">View All Case Studies →</button></div>
          </div>
        </section>

        {/* ══ M5 — SERVICES ═════════════════════════════════════════════════════════ */}
        <section className="sec sec-grad-n1n2-n1">
          <div className="bg-grid" />
          <div className="sec-content">
            <SectionHeader badge="What We Build" title={<>ERP Services <GradText>We Offer</GradText></>} sub="A comprehensive lineup of ERP and digital solutions for clients across Canada, USA & UK." />
            <div className="svc-grid">
              {SERVICES.map(s => (
                <div key={s.title} className="svc-card">
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                    <div className="svc-card__icon">{s.icon}</div>
                    <span className="svc-card__tag">{s.tag}</span>
                  </div>
                  <h3 className="svc-card__title">{s.title}</h3>
                  <p className="svc-card__desc">{s.desc}</p>
                  <span className="svc-card__link">Learn More <span>→</span></span>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 56 }}><button className="btn-teal btn">View All ERP Services →</button></div>
          </div>
        </section>

        {/* ══ M6 — ACCORDION ════════════════════════════════════════════════════════ */}
        <section className="sec sec-mid">
          <div className="sec-content">
            <SectionHeader badge="ERP Capabilities" title={<>A Great ERP Always <GradText>Enables You to Do More</GradText></>} sub="Explore the key capabilities that make our ERP solutions stand out for businesses in Canada, USA & UK." narrow />
            <div className="two-col">
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {ACCORDION_L.map((item, i) => <AccItem key={item.title} item={item} open={accL === i} toggle={() => setAccL(accL === i ? null : i)} />)}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {ACCORDION_R.map((item, i) => <AccItem key={item.title} item={item} open={accR === i} toggle={() => setAccR(accR === i ? null : i)} />)}
              </div>
            </div>
          </div>
        </section>

        {/* ══ M7 — BENEFITS ═════════════════════════════════════════════════════════ */}
        <section className="sec sec-grad-down">
          <div className="bg-grid" />
          <div className="sec-content">
            <SectionHeader badge="Why It Matters" title={<>Key Benefits of <GradText>ERP Development</GradText></>} sub="Here's what you gain when your operations run on a modern, custom-built ERP." narrow />
            <div className="kb-grid">
              {BENEFITS.map((b, i) => (
                <div key={i} className="kb-card" style={{ animationDelay: `${i * .12}s` }}>
                  <div className="kb-card__num">{b.num}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}><span style={{ fontSize: 22 }}>{b.icon}</span><h3 style={{ color: "#fff", fontSize: 19, fontWeight: 800, margin: 0 }}>{b.title}</h3></div>
                    <p style={{ color: "rgba(255,255,255,.52)", fontSize: 14.5, lineHeight: 1.75, margin: "0 0 14px" }}>{b.desc}</p>
                    <div className="badge-row">{b.tags.map(tag => <span key={tag} className="badge">{tag}</span>)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 52 }}><button className="btn-teal btn">Start Your ERP Journey →</button></div>
          </div>
        </section>

        {/* ══ M8 — TOOLS ════════════════════════════════════════════════════════════ */}
        <section className="sec sec-mid">
          <div className="bg-grid" />
          <div className="sec-content">
            <SectionHeader badge="Our Tech Stack" title={<>Leading ERP Platform Tools <GradText>That We Use</GradText></>} sub="Here is a closer look at some of the platforms we leverage for the best possible business outcomes." />
            <div className="pt-grid">
              {TOOLS.map((tool, i) => (
                <div key={i} className="pt-card" style={{ background: tool.clr, border: `1px solid ${tool.bd}` }}>
                  <div className="pt-card__icon" style={{ border: `1px solid ${tool.bd}` }}>{tool.icon}</div>
                  <h3 className="pt-card__name">{tool.name}</h3>
                  <p className="pt-card__desc">{tool.desc}</p>
                  {tool.bespoke && <div className="badge" style={{ marginTop: 14 }}>⚡ Fully Bespoke</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ M9 — HIRE ════════════════════════════════════════════════════════════ */}
        <section className="sec sec-grad-n0n1">
          <div className="sec-content">
            <SectionHeader badge="Hire Developers" title={<>Hire ERP Developers <GradText>Tailored to Your Needs</GradText></>} sub="Whether you're an enterprise, agency, or start-up — we have the right ERP developer for your exact challenge." />
            <div className="two-col" style={{ marginBottom: 16 }}>
              <p className="teal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>By Business Type</p>
              <p className="teal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>By ERP Type</p>
            </div>
            <div className="two-col">
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {HIRE_L.map((item, i) => <AccItem key={item.title} item={item} open={hireL === i} toggle={() => setHireL(hireL === i ? null : i)} />)}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {HIRE_R.map((item, i) => <AccItem key={item.title} item={item} open={hireR === i} toggle={() => setHireR(hireR === i ? null : i)} />)}
              </div>
            </div>
            <div className="btn-row" style={{ marginTop: 48, justifyContent: "center" }}>
              <button className="btn-teal btn">📅 Hire an ERP Developer</button>
              <button className="btn-outline btn">View Pricing →</button>
            </div>
          </div>
        </section>

        {/* ══ M10 — AI SECTION ═════════════════════════════════════════════════════ */}
        <section className="sec sec-grad-up">
          <div className="sec-content">
            <div style={{ marginBottom: 52, maxWidth: 620 }}>
              <Badge label="AI-Powered" />
              <h2 className="section-h2">Leverage <GradText>AI-Powered ERP</GradText> Solutions</h2>
              <p style={{ color: "rgba(255,255,255,.5)", fontSize: 16, lineHeight: 1.8 }}>Our AI-backed ERP solutions automate decisions, predict failures, and accelerate business operations at scale.</p>
            </div>
            <div className="two-col-wide">
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {AI_FEATS.map((f, i) => (
                  <div key={i} className="ai-card" style={{ background: f.clr, border: `1px solid ${f.bd}` }}>
                    <div className="ai-card__icon" style={{ background: f.clr, border: `1px solid ${f.bd}` }}>{f.icon}</div>
                    <div>
                      <h3 style={{ color: "#fff", fontSize: 17, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>{f.title}</h3>
                      <p style={{ color: "rgba(255,255,255,.52)", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
                <button className="btn-teal btn" style={{ marginTop: 8, alignSelf: "flex-start" }}>🤖 Explore AI-ERP Solutions →</button>
              </div>

              {/* AI Live Panel */}
              <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", background: "linear-gradient(135deg,#0a1f38,#061425)", border: "1px solid rgba(0,201,167,.15)", minHeight: 460, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "36px 32px" }}>
                <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(0,201,167,.5),transparent)", animation: "aiScan 3s linear infinite" }} />
                <div style={{ position: "absolute", top: "5%", right: "5%", width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,.12) 0%,transparent 70%)", animation: "aiPulse 4s ease-in-out infinite", pointerEvents: "none" }} />
                <div style={{ position: "relative", zIndex: 2 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                    <div className="live-dot" />
                    <span style={{ color: "rgba(255,255,255,.5)", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>AI Engine — Live</span>
                  </div>
                  {AI_ROWS.map((row, i) => (
                    <div key={i} style={{ marginBottom: 16 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                        <span style={{ color: "rgba(255,255,255,.6)", fontSize: 12.5, fontWeight: 500 }}>{row.label}</span>
                        <span style={{ color: row.color, fontSize: 12.5, fontWeight: 700 }}>{row.val}</span>
                      </div>
                      <div style={{ height: 4, borderRadius: 4, background: "rgba(255,255,255,.06)", overflow: "hidden" }}>
                        <div style={{ height: "100%", borderRadius: 4, background: `linear-gradient(90deg,${row.color},${row.color}88)`, width: row.val }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, position: "relative", zIndex: 2 }}>
                  {[{ label: "POs Automated", val: "4,210", icon: "📦" }, { label: "Hours Saved/mo", val: "1,840", icon: "⏱️" }, { label: "Accuracy", val: "97.2%", icon: "✅" }].map((m, i) => (
                    <div key={i} style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: "14px 12px", textAlign: "center" }}>
                      <div style={{ fontSize: 20, marginBottom: 6 }}>{m.icon}</div>
                      <div style={{ color: "#fff", fontSize: 16, fontWeight: 800, marginBottom: 2 }}>{m.val}</div>
                      <div style={{ color: "rgba(255,255,255,.4)", fontSize: 11, fontWeight: 500 }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ M11 — CTA BANNER ═════════════════════════════════════════════════════ */}
        <section style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ background: "linear-gradient(135deg,#0055b3 0%,#0077cc 35%,#00a07a 65%,#00C9A7 100%)", backgroundSize: "300% 300%", animation: "ctaBgShift 8s ease infinite", padding: "88px 48px", textAlign: "center", position: "relative" }}>
            <div style={{ position: "absolute", top: "-20%", left: "-5%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,.1) 0%,transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-20%", right: "-5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
            <div style={{ position: "relative", zIndex: 2, maxWidth: 760, margin: "0 auto" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.3)", borderRadius: 100, padding: "6px 18px", marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff", display: "block" }} />
                <span style={{ color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Get Started Today</span>
              </div>
              <h2 style={{ fontSize: "clamp(26px,3.5vw,48px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 20 }}>
                Ready to Unify Your Business on a<br />Single, Powerful <span style={{ textDecoration: "underline", textDecorationColor: "rgba(255,255,255,.4)" }}>ERP Platform?</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,.82)", fontSize: 17, lineHeight: 1.75, marginBottom: 40 }}>Connect with NNC Digital today and let&apos;s build your custom ERP together.</p>
              <div className="btn-row" style={{ justifyContent: "center" }}>
                <button className="btn-white">✦ Connect Now</button>
                <button className="btn-cta-outline">📅 Book a Free Call →</button>
              </div>
              <p style={{ color: "rgba(255,255,255,.5)", fontSize: 13, marginTop: 28 }}>🇨🇦 Canada &nbsp;·&nbsp; 🇺🇸 USA &nbsp;·&nbsp; 🇬🇧 UK &nbsp;·&nbsp; 🇮🇳 India &nbsp;&nbsp;|&nbsp;&nbsp; hello@nncdigital.com</p>
            </div>
          </div>
        </section>

        {/* ══ M12 — WHY CHOOSE US ══════════════════════════════════════════════════ */}
        <section className="sec sec-grad-down">
          <div className="sec-content">
            <div className="two-col-wide">
              <div>
                <Badge label="Our Story" />
                <h2 className="section-h2">Why Choose Us as Your <GradText>ERP Development</GradText> Partner?</h2>
                <p style={{ color: "rgba(255,255,255,.55)", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                  NNC Digital Solutions is backed by <strong style={{ color: "#fff" }}>Nakshatra Namaha Creations Pvt. Ltd.</strong> — one of Bangalore&apos;s most respected digital studios with <span className="teal" style={{ fontWeight: 600 }}>8+ years of experience</span> and <span className="teal" style={{ fontWeight: 600 }}>565+ projects delivered</span>.
                </p>
                <p style={{ color: "rgba(255,255,255,.55)", fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
                  We launched NNC Digital as our international arm — bringing proven technical expertise to the Canadian, US, and UK markets with transparent pricing and long-term partnership.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 36 }}>
                  {WCU_POINTS.map((p, i) => (
                    <div key={i} className="wcu-point">
                      <span style={{ fontSize: 18, flexShrink: 0 }}>{p.icon}</span>
                      <span style={{ color: "rgba(255,255,255,.72)", fontSize: 14, fontWeight: 500 }}>{p.text}</span>
                    </div>
                  ))}
                </div>
                <div className="wcu-stats">
                  {WCU_STATS.map(st => (
                    <div key={st.l} className="wcu-stat">
                      <div className="wcu-stat__val"><Counter to={st.n} sfx={st.s} /></div>
                      <div style={{ color: "rgba(255,255,255,.4)", fontSize: 11.5, fontWeight: 500 }}>{st.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div onClick={() => setVidPlay(true)} style={{ position: "relative", borderRadius: 24, overflow: "hidden", border: "1px solid rgba(0,201,167,.2)", background: "linear-gradient(135deg,#0a2540,#061425)", aspectRatio: "16/10", cursor: "pointer" }}>
                  {!vidPlay ? (
                    <>
                      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,201,167,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.04) 1px,transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
                      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
                        <button style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--teal)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, animation: "wcuPulse 2.5s ease-in-out infinite" }}>▶</button>
                        <p style={{ color: "rgba(255,255,255,.6)", fontSize: 14, fontWeight: 600, margin: 0 }}>Watch Our Story</p>
                      </div>
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px", background: "linear-gradient(0deg,rgba(3,11,24,.95),transparent)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div><p style={{ color: "#fff", fontSize: 14, fontWeight: 700, margin: 0 }}>NNC Digital Solutions</p><p style={{ color: "rgba(255,255,255,.4)", fontSize: 12, margin: 0 }}>Founder&apos;s Story · 3 min</p></div>
                        <div className="badge" style={{ padding: "5px 12px" }}>▶ Play</div>
                      </div>
                    </>
                  ) : (
                    <iframe src="https://www.youtube.com/embed/?autoplay=1" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} allow="autoplay;fullscreen" />
                  )}
                </div>
                <div className="badge-row" style={{ marginTop: 20 }}>
                  {["🇨🇦 Canada", "🇺🇸 USA", "🇬🇧 UK", "🇮🇳 India"].map(b => (
                    <span key={b} className="badge badge-soft">{b}</span>
                  ))}
                </div>
                <div className="btn-row" style={{ marginTop: 24 }}>
                  <button className="btn-teal btn" style={{ flex: 1 }}>📅 Book a Free ERP Strategy Call</button>
                  <button className="btn-outline btn" style={{ flex: 1 }}>Our Portfolio →</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ M13 — GLOBAL PRESENCE ════════════════════════════════════════════════ */}
        <section className="sec sec-grad-n0n1">
          <div className="sec-content-1180">
            <SectionHeader badge="Our Reach" title={<>Global <GradText>Presence</GradText></>} sub="Client-facing offices in North America & the UK. Engineering headquarters in Bangalore, India." narrow />
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 40 }}>
              {[{ key: "int", label: "🌍 North America & UK" }, { key: "india", label: "🇮🇳 India (Engineering HQ)" }].map(t => (
                <button key={t.key} className={`gp-tab${gTab === t.key ? " act" : ""}`} onClick={() => setGTab(t.key as "int" | "india")}>{t.label}</button>
              ))}
            </div>
            {gTab === "int" && (
              <div>
                <div className="gp-offices" style={{ marginBottom: 24 }}>
                  {INT_OFFICES.map((o, i) => (
                    <div key={i} className="gp-card">
                      <div style={{ fontSize: 36, marginBottom: 14 }}>{o.flag}</div>
                      <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{o.city}</h3>
                      <p className="teal" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>{o.tz}</p>
                      <a href={`tel:${o.phone.replace(/\s|-/g, "")}`} className="h-teal" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,.7)", fontSize: 14, fontWeight: 600, textDecoration: "none", marginBottom: 8 }}>📞 {o.phone}</a>
                      <a href={`mailto:${o.email}`} className="h-teal" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,.5)", fontSize: 13, textDecoration: "none" }}>✉️ {o.email}</a>
                    </div>
                  ))}
                </div>
                <div style={{ borderRadius: 14, padding: "20px 28px", background: "rgba(0,201,167,.05)", border: "1px solid rgba(0,201,167,.15)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}><div className="live-dot" /><span style={{ color: "rgba(255,255,255,.6)", fontSize: 14, fontWeight: 500 }}>Available Mon–Fri, 9am–6pm in your time zone</span></div>
                  <a href="mailto:hello@nncdigital.com" className="h-teal teal" style={{ fontSize: 14, fontWeight: 700, textDecoration: "none" }}>hello@nncdigital.com →</a>
                </div>
              </div>
            )}
            {gTab === "india" && (
              <div>
                <div style={{ borderRadius: 20, padding: "36px", background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.08)", marginBottom: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
                    <span style={{ fontSize: 32 }}>🇮🇳</span>
                    <div>
                      <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 800, margin: 0 }}>Nakshatra Namaha Creations Pvt. Ltd.</h3>
                      <p style={{ color: "rgba(255,255,255,.4)", fontSize: 13, margin: "4px 0 0" }}>Engineering &amp; Delivery HQ — Bangalore, India</p>
                    </div>
                  </div>
                  <div className="gp-ind-grid">
                    {INDIA_OFFICES.map((o, i) => (
                      <div key={i} className="gp-ind">
                        <span style={{ fontSize: 22 }}>🇮🇳</span>
                        <div>
                          <p style={{ color: "#fff", fontSize: 14, fontWeight: 700, margin: 0 }}>{o.city}</p>
                          <p style={{ color: "rgba(255,255,255,.38)", fontSize: 12, margin: "2px 0 0" }}>{o.note}</p>
                          {o.phone && <p className="teal" style={{ fontSize: 12.5, fontWeight: 600, margin: "4px 0 0" }}>{o.phone}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.07)" }}>
                    <p style={{ color: "rgba(255,255,255,.35)", fontSize: 13, margin: 0 }}>✉️ info@nakshatranamahacreations.com</p>
                  </div>
                </div>
                <div className="gp-india-stats">
                  {[{ n: "8+", l: "Years Active" }, { n: "565+", l: "Projects" }, { n: "100+", l: "Team Members" }, { n: "4", l: "India Offices" }].map((s, i) => (
                    <div key={i} style={{ textAlign: "center", padding: "20px 12px", borderRadius: 14, background: "rgba(0,201,167,.06)", border: "1px solid rgba(0,201,167,.15)", transition: "transform .25s,background .25s", cursor: "default" }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-4px)"; el.style.background = "rgba(0,201,167,.12)"; }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.background = "rgba(0,201,167,.06)"; }}>
                      <p className="teal" style={{ fontSize: 26, fontWeight: 900, margin: 0 }}>{s.n}</p>
                      <p style={{ fontSize: 11, color: "rgba(255,255,255,.4)", margin: "4px 0 0", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ══ M14 — FAQ ════════════════════════════════════════════════════════════ */}
        <section className="sec sec-grad-down">
          <div className="sec-content-sm">
            <SectionHeader badge="FAQs" title={<>Frequently Asked <GradText>Questions</GradText></>} sub="Everything you need to know about custom ERP development for businesses in Canada, USA & UK." narrow />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {FAQS.map((f, i) => (
                <div key={i} className={`faq-item${faq === i ? " fopen" : ""}`} onClick={() => setFaq(faq === i ? null : i)}>
                  <div className="faq-item__q">
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span className="faq-item__tag">Q{i + 1}</span>
                      <span className="faq-item__text">{f.q}</span>
                    </div>
                    <div className="faq-item__icon" style={{
                      background: faq === i ? "var(--teal)" : "rgba(255,255,255,.07)",
                      border: `1px solid ${faq === i ? "var(--teal)" : "rgba(255,255,255,.12)"}`,
                      color: faq === i ? "#000" : "rgba(255,255,255,.5)",
                      transform: faq === i ? "rotate(45deg)" : "none",
                    }}>+</div>
                  </div>
                  <div className="faq-item__a" style={{ maxHeight: faq === i ? 400 : 0 }}>
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <p style={{ color: "rgba(255,255,255,.4)", fontSize: 14, marginBottom: 20 }}>Still have questions? We respond within 24 hours.</p>
              <button className="btn-teal btn">Ask Us Anything →</button>
            </div>
          </div>
        </section>

        {/* ══ M15 — CONTACT FORM ════════════════════════════════════════════════════ */}
        <section className="sec" style={{ background: "linear-gradient(180deg,var(--n2) 0%,var(--n0) 100%)" }}>
          <div className="sec-content-1180">
            <SectionHeader badge="Get In Touch" title={<>Ready to Build <GradText>Your Custom ERP</GradText> Solution?</>} sub="Tell us about your project. We respond within 24 hours with a free consultation and honest advice." />
            <div className="cf-grid">
              <div style={{ background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 20, padding: "36px 32px" }}>
                {cSubmitted ? (
                  <div style={{ textAlign: "center", padding: "48px 0" }}>
                    <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
                    <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Message Sent!</h3>
                    <p style={{ color: "rgba(255,255,255,.5)", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>Thank you — we&apos;ll respond within 24 hours with practical advice.</p>
                    <button onClick={() => { setCSubmitted(false); setCForm({ name: "", phone: "", dialCode: "+1", email: "", service: "", project: "", }); }} className="btn-teal btn" style={{ padding: "12px 28px", fontSize: 14 }}>Send Another →</button>
                  </div>
                ) : (
                  <form onSubmit={handleCSubmit}>
                    <div className="cf-name" style={{ marginBottom: 16 }}>
                      <div><label className="label-upper-lg">Full Name *</label><input className="fi fi-lg" required placeholder="Jane Smith" value={cForm.name} onChange={e => setCF("name", e.target.value)} /></div>
                      <div>
                        <label className="label-upper-lg">Phone</label>
                        <div className="phone-row">
                          <select className="fi fi-lg fi-dial-lg fi-select" value={cForm.dialCode} onChange={e => setCF("dialCode", e.target.value)}>
                            {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                          </select>
                          <input className="fi fi-lg" type="tel" placeholder="647 XXX XXXX" value={cForm.phone} onChange={e => setCF("phone", e.target.value)} />
                        </div>
                      </div>
                    </div>
                    <div style={{ marginBottom: 16 }}><label className="label-upper-lg">Business Email *</label><input className="fi fi-lg" required type="email" placeholder="jane@yourcompany.com" value={cForm.email} onChange={e => setCF("email", e.target.value)} /></div>
                    <div style={{ marginBottom: 16 }}>
                      <label className="label-upper-lg">Service of Interest</label>
                      <select className="fi fi-lg fi-select" value={cForm.service} onChange={e => setCF("service", e.target.value)}>
                        <option value="">Select a service...</option>
                        {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div style={{ marginBottom: 24 }}><label className="label-upper-lg">Project Description</label><textarea className="fi fi-lg fi-textarea-lg" placeholder="Briefly describe your ERP project, goals, and timeline..." value={cForm.project} onChange={e => setCF("project", e.target.value)} /></div>
                    <button className="btn-teal btn" type="submit" disabled={cLoading} style={{ width: "100%", padding: 15, opacity: cLoading ? .6 : 1, cursor: cLoading ? "wait" : "pointer" }}>{cLoading ? "Sending..." : "Submit — Get Free ERP Consultation →"}</button>
                    <p style={{ color: "rgba(255,255,255,.3)", fontSize: 11.5, textAlign: "center", marginTop: 12 }}>🔒 Your information is 100% secure and never shared.</p>
                  </form>
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div className="card-teal" style={{ padding: "28px 26px" }}>
                  <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 800, marginBottom: 18 }}>What Happens After You Submit?</h3>
                  {[{ s: "1", text: "We review your project within a few hours — no bots." }, { s: "2", text: "A senior ERP consultant calls you within 24 hours." }, { s: "3", text: "We send a free scoping document with timeline & cost." }, { s: "4", text: "You decide — no pressure, no obligation." }].map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: i < 3 ? 16 : 0, padding: "12px 14px", borderRadius: 10, background: "rgba(255,255,255,.03)", transition: "background .2s", cursor: "default" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.07)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.03)"}>
                      <div className="step-circle">{step.s}</div>
                      <p style={{ color: "rgba(255,255,255,.65)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{step.text}</p>
                    </div>
                  ))}
                </div>
                <div style={{ background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 18, padding: "26px" }}>
                  <h3 style={{ color: "rgba(255,255,255,.4)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>Direct Contacts</h3>
                  {[{ flag: "🇨🇦", label: "Canada", phone: "+1 647-XXX-XXXX" }, { flag: "🇺🇸", label: "USA", phone: "+1 631-XXX-XXXX" }, { flag: "🇬🇧", label: "UK", phone: "+44 20-XXXX-XXXX" }].map((c, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,.06)" : "none" }}>
                      <span style={{ color: "rgba(255,255,255,.55)", fontSize: 14, fontWeight: 500 }}>{c.flag} {c.label}</span>
                      <a href={`tel:${c.phone.replace(/\s|-/g, "")}`} className="h-teal teal" style={{ fontSize: 14, fontWeight: 700, textDecoration: "none" }}>{c.phone}</a>
                    </div>
                  ))}
                  <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,.06)" }}>
                    <a href="mailto:hello@nncdigital.com" className="h-teal" style={{ color: "rgba(255,255,255,.5)", fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>✉️ hello@nncdigital.com</a>
                  </div>
                </div>
                <div className="badge-row">
                  {["🔵 Google Partner", "🏆 ISO Certified", "🔒 GDPR Compliant", "🍁 PIPEDA Ready", "⭐ Clutch Top Agency"].map(b => (
                    <span key={b} className="badge badge-soft">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}