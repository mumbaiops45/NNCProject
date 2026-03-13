"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";

// ─── Data ─────────────────────────────────────────────────────────────────────
const LOGOS = ["clients1.png", "clients2.png", "clients3.png", "clients4.png", "clients5.png",
  "clients6.png", "clients7.png", "clients8.png", "clients9.png", "clients10.png", "clients11.png"];

const SUCCESS_STORIES = [
  {
    industry: "Manufacturing", icon: "🏭", result: "35% Efficiency Gain",
    title: "Streamlined Operations for a Canadian Manufacturer",
    description: "Custom Salesforce implementation connecting production, inventory, and sales teams in real-time.",
    metrics: [{ l: "Efficiency", v: "+35%", i: "⚡" }, { l: "Response Time", v: "-52%", i: "⏱️" }, { l: "Data Accuracy", v: "99%", i: "✅" }]
  },
  {
    industry: "Healthcare", icon: "🏥", result: "42% More Bookings",
    title: "Patient Engagement Platform for a UK Hospital Group",
    description: "Salesforce Health Cloud implementation with automated appointments, follow-ups, and compliance tracking.",
    metrics: [{ l: "Bookings", v: "+42%", i: "📅" }, { l: "No-shows", v: "-67%", i: "📉" }, { l: "Patient Satisfaction", v: "94%", i: "⭐" }]
  },
  {
    industry: "D2C Retail", icon: "🛍️", result: "2.4× Conversion Rate",
    title: "Unified Customer View for a US D2C Brand",
    description: "Salesforce Marketing Cloud + Sales Cloud integration delivering personalized journeys across channels.",
    metrics: [{ l: "Conversion", v: "2.4×", i: "📈" }, { l: "Revenue/Visit", v: "+89%", i: "💰" }, { l: "ROI", v: "312%", i: "🚀" }]
  },
];

const SERVICES = [
  { icon: "📈", title: "Salesforce Sales Cloud", desc: "Tailored for businesses in Canada, USA & UK. Automate sales processes, track opportunities, and close deals faster.", tag: "Sales" },
  { icon: "🎧", title: "Salesforce Service Cloud", desc: "Tailored for businesses in Canada, USA & UK. Omnichannel support, case management, and customer service automation.", tag: "Service" },
  { icon: "📱", title: "Salesforce Marketing Cloud", desc: "Tailored for businesses in Canada, USA & UK. Personalized journeys, email marketing, and engagement tracking.", tag: "Marketing" },
  { icon: "💰", title: "Salesforce CPQ", desc: "Tailored for businesses in Canada, USA & UK. Configure, price, quote — with approvals and contract management.", tag: "CPQ" },
  { icon: "⚡", title: "Apex & Lightning Development", desc: "Tailored for businesses in Canada, USA & UK. Custom logic, Lightning components, and complex automations.", tag: "Dev" },
  { icon: "🔗", title: "Salesforce Integration", desc: "Tailored for businesses in Canada, USA & UK. Connect ERP, e-commerce, marketing tools, and legacy systems.", tag: "Integration" },
  { icon: "🔄", title: "Data Migration", desc: "Tailored for businesses in Canada, USA & UK. Zero-loss migration from HubSpot, Pipedrive, Excel, or legacy CRMs.", tag: "Migration" },
  { icon: "📚", title: "Training & Adoption", desc: "Tailored for businesses in Canada, USA & UK. User training, change management, and post-launch support.", tag: "Training" },
  { icon: "🧩", title: "AppExchange Development", desc: "Tailored for businesses in Canada, USA & UK. Custom AppExchange apps for your specific industry needs.", tag: "Apps" },
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
  { icon: "⚡", text: "565+ projects delivered across India" },
  { icon: "🤝", text: "Client-first culture, enterprise-grade quality" },
  { icon: "🔒", text: "GDPR, PIPEDA & CCPA compliant delivery" },
  { icon: "📱", text: "Full-stack: Web, Mobile, CRM, ERP, AI" },
];
const WCU_STATS = [{ n: 1500, s: "+", l: "Web Projects" }, { n: 500, s: "+", l: "Mobile Apps" }, { n: 1800, s: "+", l: "IT Talents" }, { n: 25, s: "+", l: "Industries" }];

const FAQS = [
  {
    q: "Are you a certified Salesforce partner?",
    a: "Yes — our senior developers hold active Salesforce certifications including Administrator, Platform Developer I & II, Sales Cloud Consultant, and Service Cloud Consultant. For clients in Canada, USA, and UK, we bring certified expertise with local accountability."
  },
  {
    q: "Can you migrate us from HubSpot to Salesforce?",
    a: "Absolutely. We've migrated dozens of businesses from HubSpot, Pipedrive, Zoho, and Excel to Salesforce. Our process includes data cleansing, field mapping, historical data preservation, and a zero-downtime cutover — typically completed in 4–8 weeks."
  },
  {
    q: "How long does a Salesforce implementation take?",
    a: "A standard Sales Cloud implementation takes 6–12 weeks. Complex projects with CPQ, Marketing Cloud, or custom integrations run 12–20 weeks. For UK and EU clients, we include GDPR compliance configuration from day one. All timelines are fixed-price and guaranteed."
  },
  {
    q: "Do you offer Salesforce training?",
    a: "Yes — we believe training is the difference between adoption and abandonment. We provide role-based training for sales reps, managers, and admins, plus documentation, video tutorials, and a 30-day post-launch hypercare period."
  },
  {
    q: "What's the cost of Salesforce implementation in Canada or the UK?",
    a: "A focused Sales Cloud implementation starts from CAD $15,000–$25,000 / £12,000–£20,000. Complex builds with Marketing Cloud, CPQ, or integrations range from CAD $35,000–$75,000 / £28,000–£60,000. All quotes include data migration and training."
  },
  {
    q: "Can you integrate Salesforce with our ERP or e-commerce platform?",
    a: "Yes — we specialise in integrating Salesforce with ERP systems (SAP, NetSuite, Dynamics), e-commerce platforms (Shopify, Magento, WooCommerce), and marketing tools. Using MuleSoft or custom APIs, we ensure real-time sync across your entire stack."
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

const SERVICES_LIST = ["Salesforce Sales Cloud", "Salesforce Service Cloud", "Salesforce Marketing Cloud", "Salesforce CPQ", "Integration", "Data Migration", "Training", "Other"];
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
        ctx.fillStyle = `rgba(0,161,224,${p.a})`; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 90) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(0,161,224,${.06 * (1 - d / 90)})`; ctx.lineWidth = .5; ctx.stroke();
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
  return <span className="grad-text" style={{ background: "linear-gradient(135deg,#00A1E0,#00C9A7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{children}</span>;
}

function Badge({ label }: { label: string }) {
  return (
    <div className="section-badge">
      <span className="section-badge__dot" style={{ background: "#00A1E0" }} />
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
          background: open ? "#00A1E0" : "rgba(255,255,255,.07)",
          border: `1px solid ${open ? "#00A1E0" : "rgba(255,255,255,.14)"}`,
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
export default function SalesforcePage() {
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

  return (
    <>
      <Navbar />
      <div>

        {/* ══ M1 — HERO + INLINE LEAD FORM ═══════════════════════════════════════════ */}
        <section className="sec sec-hero">
          <Particles />
          <div className="bg-grid-hero" />
          <div className="bg-orb" style={{ width: 650, height: 650, background: "radial-gradient(circle,rgba(0,161,224,.14) 0%,transparent 65%)", top: "40%", left: "-10%", transform: "translateY(-50%)", animation: "heroPulse 8s ease-in-out infinite", zIndex: 1 }} />
          <div className="bg-orb" style={{ width: 400, height: 400, background: "radial-gradient(circle,rgba(0,201,167,.1) 0%,transparent 65%)", top: "10%", right: "5%", animation: "heroPulse 10s ease-in-out infinite .5s", zIndex: 1 }} />
          <div className="bg-orb" style={{ width: 520, height: 520, border: "1px dashed rgba(0,161,224,.08)", top: "50%", left: "-12%", transform: "translateY(-50%)", animation: "heroSpin 55s linear infinite", zIndex: 1 }} />
          <div className="bg-scan" />

          <div className="hero-layout">
            {/* Left */}
            <div className="fade-up">
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,161,224,.08)", border: "1px solid rgba(0,161,224,.25)", borderRadius: 100, padding: "7px 18px", marginBottom: 28, animation: "heroGlow 3s ease-in-out infinite" }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00A1E0", boxShadow: "0 0 10px #00A1E0", animation: "heroBlink 1.4s ease-in-out infinite" }} />
                <span className="section-badge__text">Salesforce CRM — Canada, USA &amp; UK</span>
              </div>
              <h1 style={{ fontSize: "clamp(28px,3.8vw,54px)", fontWeight: 900, lineHeight: 1.12, marginBottom: 22, letterSpacing: "-0.025em", color: "#fff" }}>
                Salesforce CRM Development, <GradText>Customisation & Implementation</GradText> for Canada, USA & UK
              </h1>
              <p style={{ color: "rgba(255,255,255,.52)", fontSize: "clamp(14px,1.3vw,16.5px)", lineHeight: 1.85, marginBottom: 32, maxWidth: 600 }}>
                Salesforce is the world's most powerful CRM platform — but out of the box, it's designed for everyone, which means it's optimised for no one. Our specialists configure and customise it for you.
              </p>
              <div className="badge-row" style={{ marginBottom: 36 }}>
                {[{ i: "🔵", l: "Google Partner" }, { i: "🏆", l: "ISO Certified" }, { i: "🔒", l: "GDPR Compliant" }, { i: "🍁", l: "PIPEDA Ready" }, { i: "⭐", l: "Clutch Top Agency" }].map(b => (
                  <span key={b.l} className="badge badge-soft">{b.i} {b.l}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {[{ flag: "🇨🇦", label: "CA:", phone: "+1 647-XXX-XXXX" }, { flag: "🇬🇧", label: "UK:", phone: "+44 20-XXXX-XXXX" }].map(p => (
                  <a key={p.phone} href={`tel:${p.phone.replace(/\s|-/g, "")}`} className="h-teal" style={{ display: "flex", alignItems: "center", gap: 7, color: "rgba(255,255,255,.5)", fontSize: 13.5, fontWeight: 600, textDecoration: "none" }}>
                    <span>{p.flag}</span><span style={{ color: "rgba(255,255,255,.3)" }}>{p.label}</span><span style={{ color: "#00A1E0" }}>{p.phone}</span>
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
                  <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>We'll contact you within 24 hours with a free consultation.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", phone: "", dialCode: "+1", email: "", service: "", message: "", }); }} className="btn-salesforce btn" style={{ padding: "11px 26px", fontSize: 14 }}>Send Another →</button>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: 22 }}>
                    <p style={{ color: "#00A1E0", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Free Consultation</p>
                    <h2 style={{ color: "#fff", fontSize: 18, fontWeight: 800, margin: 0, lineHeight: 1.3 }}>Get a Free Salesforce Strategy Call</h2>
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
                    <div><label className="label-upper">Message</label><textarea className="fi fi-textarea" placeholder="Tell us about your Salesforce project..." value={form.message} onChange={e => setF("message", e.target.value)} /></div>
                    <button className="btn-salesforce btn" type="submit" disabled={loading} style={{ padding: "13px", marginTop: 4, width: "100%", opacity: loading ? .6 : 1, cursor: loading ? "wait" : "pointer" }}>
                      {loading ? "Sending..." : "📅 Get Free Salesforce Consultation →"}
                    </button>
                    <p style={{ color: "rgba(255,255,255,.28)", fontSize: 11, textAlign: "center", margin: 0 }}>🔒 Secure &amp; confidential. No spam, ever.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ══ M2 — CLIENTS (SCROLLING LOGO STRIP) ════════════════════════════════════ */}
        <section className="sec-dark" style={{ padding: "60px 0", overflow: "hidden", borderTop: "1px solid rgba(0,161,224,.1)", borderBottom: "1px solid rgba(0,161,224,.1)" }}>
          <div style={{ textAlign: "center", marginBottom: 40, padding: "0 24px" }}>
            <p style={{ fontWeight: 600, fontSize: 11.5, color: "rgba(255,255,255,.28)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>Our Happy Clients</p>
            <h2 style={{ fontSize: "clamp(20px,2.6vw,32px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.25, margin: 0 }}>
              Trusted by Businesses Across <GradText>North America &amp; the UK</GradText>
            </h2>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="cl-track">
              {[...LOGOS, ...LOGOS].map((f, i) => (
                <div key={i} style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", height: 60, padding: "0 8px", opacity: .85, transition: "opacity .3s,transform .3s", filter: "grayscale(100%)" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = "scale(1.08)"; el.style.filter = "grayscale(0%)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = ".85"; el.style.transform = ""; el.style.filter = "grayscale(100%)"; }}>
                  <img src={`/${f}`} alt={`Client ${i + 1}`} style={{ height: 48, width: "auto", maxWidth: 140, objectFit: "contain" }} onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ M3 — SUCCESS STORIES (SLIDER) ═══════════════════════════════════════════ */}
        <section className="sec sec-grad-up">
          <div className="bg-grid" />
          <div className="sec-content">
            <SectionHeader badge="Proven Results" title={<>Salesforce Success <GradText>Stories</GradText></>} sub="Real results for real businesses across Canada, USA & UK." narrow />
            <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 40, flexWrap: "wrap" }}>
              {SUCCESS_STORIES.map((c, i) => (
                <button key={i} className={`ss-tab${story === i ? " act" : ""}`} onClick={() => setStory(i)}><span>{c.icon}</span>{c.industry} — {c.result}</button>
              ))}
            </div>
            <div key={story} style={{ background: "rgba(255,255,255,.02)", border: "1px solid rgba(0,161,224,.3)", borderRadius: 24, overflow: "hidden", animation: "sbFadeUp .45s ease both" }}>
              <div style={{ height: 3, background: `linear-gradient(90deg,transparent,#00A1E0,transparent)` }} />
              <div style={{ padding: "36px 36px 32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, fontSize: 26, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,161,224,.12)", border: "1px solid rgba(0,161,224,.3)" }}>{SUCCESS_STORIES[story].icon}</div>
                  <span className="badge-sm" style={{ background: "rgba(0,161,224,.12)", border: "1px solid rgba(0,161,224,.3)", color: "#00A1E0" }}>{SUCCESS_STORIES[story].result}</span>
                </div>
                <h3 style={{ color: "#fff", fontSize: "clamp(18px,2vw,24px)", fontWeight: 800, marginBottom: 16, lineHeight: 1.3 }}>{SUCCESS_STORIES[story].title}</h3>
                <p style={{ color: "rgba(255,255,255,.6)", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>{SUCCESS_STORIES[story].description}</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
                  {SUCCESS_STORIES[story].metrics.map((m, i) => (
                    <div key={i} className="metric-card">
                      <div style={{ fontSize: 22, marginBottom: 8 }}>{m.i}</div>
                      <div className="metric-card__val" style={{ color: "#00A1E0" }}>{m.v}</div>
                      <div className="metric-card__label">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
              {SUCCESS_STORIES.map((_, i) => (
                <button key={i} onClick={() => setStory(i)} style={{ width: story === i ? 24 : 8, height: 8, borderRadius: 100, background: story === i ? "#00A1E0" : "rgba(255,255,255,.2)", border: "none", cursor: "pointer", transition: "all .3s ease" }} />
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 44 }}><button className="btn-salesforce btn">View All Case Studies →</button></div>
          </div>
        </section>

        {/* ══ M4 — SERVICES WE OFFER ═════════════════════════════════════════════════ */}
        <section className="sec sec-grad-n1n2-n1">
          <div className="bg-grid" />
          <div className="sec-content">
            <SectionHeader badge="What We Build" title={<>Salesforce CRM Services <GradText>We Offer</GradText></>} sub="A comprehensive lineup of Salesforce solutions for clients across Canada, USA & UK." />
            <div className="svc-grid">
              {SERVICES.map(s => (
                <div key={s.title} className="svc-card">
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                    <div className="svc-card__icon">{s.icon}</div>
                    <span className="svc-card__tag" style={{ color: "#00A1E0", borderColor: "rgba(0,161,224,.3)" }}>{s.tag}</span>
                  </div>
                  <h3 className="svc-card__title">{s.title}</h3>
                  <p className="svc-card__desc">{s.desc}</p>
                  <span className="svc-card__link" style={{ color: "#00A1E0" }}>Learn More <span>→</span></span>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 56 }}><button className="btn-salesforce btn">View All Salesforce Services →</button></div>
          </div>
        </section>

        {/* ══ M5 — KEY BENEFITS (LINEAR NUMBERED) ════════════════════════════════════ */}
        <section className="sec sec-mid">
          <div className="bg-grid" />
          <div className="sec-content">
            <SectionHeader badge="Why It Matters" title={<>Key Benefits of <GradText>Salesforce CRM</GradText></>} sub="Here's what you gain when your sales processes run on a properly configured Salesforce." narrow />
            <div className="kb-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
              {BENEFITS.map((b, i) => (
                <div key={i} className="kb-card" style={{ animationDelay: `${i * .12}s` }}>
                  <div className="kb-card__num" style={{ color: "#00A1E0", borderColor: "rgba(0,161,224,.3)" }}>{b.num}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}><span style={{ fontSize: 22 }}>{b.icon}</span><h3 style={{ color: "#fff", fontSize: 19, fontWeight: 800, margin: 0 }}>{b.title}</h3></div>
                    <p style={{ color: "rgba(255,255,255,.52)", fontSize: 14.5, lineHeight: 1.75, margin: "0 0 14px" }}>{b.desc}</p>
                    <div className="badge-row">{b.tags.map(tag => <span key={tag} className="badge">{tag}</span>)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 52 }}><button className="btn-salesforce btn">Start Your Salesforce Journey →</button></div>
          </div>
        </section>

        {/* ══ M6 — PLATFORM TOOLS (ICON GRID) ════════════════════════════════════════ */}
        <section className="sec sec-grad-down">
          <div className="sec-content">
            <SectionHeader badge="Our Tech Stack" title={<>Leading Platform Tools <GradText>That We Use</GradText></>} sub="Here is a closer look at the Salesforce tools we leverage for the best possible business outcomes." />
            <div className="pt-grid" style={{ gridTemplateColumns: "repeat(5,1fr)" }}>
              {TOOLS.map((tool, i) => (
                <div key={i} className="pt-card" style={{ background: tool.clr, border: `1px solid ${tool.bd}` }}>
                  <div className="pt-card__icon" style={{ border: `1px solid ${tool.bd}` }}>{tool.icon}</div>
                  <h3 className="pt-card__name">{tool.name}</h3>
                  <p className="pt-card__desc">{tool.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ M7 — HIRE DEVELOPERS / WHY CHOOSE US (DARK ACCORDION) ══════════════════ */}
        <section className="sec sec-grad-n0n1">
          <div className="sec-content">
            <SectionHeader badge="Hire Developers" title={<>Hire Salesforce Developers <GradText>Tailored to Your Needs</GradText></>} sub="Whether you're an enterprise, start-up, or agency — we have the right Salesforce expert for your exact challenge." />
            <div className="two-col" style={{ marginBottom: 16 }}>
              <p style={{ color: "#00A1E0", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>By Business Type</p>
              <p style={{ color: "#00A1E0", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>By CRM Type</p>
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
              <button className="btn-salesforce btn">📅 Hire a Salesforce Developer</button>
              <button className="btn-outline btn">View Pricing →</button>
            </div>
          </div>
        </section>

        {/* ══ M8 — AI-POWERED SOLUTIONS ══════════════════════════════════════════════ */}
        <section className="sec sec-grad-up">
          <div className="sec-content">
            <SectionHeader badge="AI-Powered" title={<>Leverage <GradText>AI-Powered Salesforce</GradText> Solutions</>} sub="Einstein AI and machine learning capabilities built into your Salesforce implementation." narrow />
            <div className="ai-feat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, marginTop: 40 }}>
              {AI_FEATS.map((f, i) => (
                <div key={i} style={{ background: "rgba(0,161,224,.05)", border: "1px solid rgba(0,161,224,.15)", borderRadius: 16, padding: "28px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                  <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{f.title}</h3>
                  <p style={{ color: "rgba(255,255,255,.52)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ M9 — FULL-WIDTH CTA BANNER ════════════════════════════════════════════ */}
        <section style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ background: "linear-gradient(135deg,#0066b3 0%,#0088cc 35%,#00A1E0 65%,#00C9A7 100%)", backgroundSize: "300% 300%", animation: "ctaBgShift 8s ease infinite", padding: "88px 48px", textAlign: "center", position: "relative" }}>
            <div style={{ position: "absolute", top: "-20%", left: "-5%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,.1) 0%,transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-20%", right: "-5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 2, maxWidth: 760, margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(26px,3.5vw,48px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 20 }}>
                Want Salesforce CRM solutions that take your<br />business to the next level?
              </h2>
              <p style={{ color: "rgba(255,255,255,.82)", fontSize: 17, lineHeight: 1.75, marginBottom: 40 }}>Connect with NNC Digital today and let's build your custom Salesforce together.</p>
              <div className="btn-row" style={{ justifyContent: "center" }}>
                <button className="btn-white">✦ Connect Now</button>
                <button className="btn-cta-outline">📅 Book a Free Call →</button>
              </div>
              <p style={{ color: "rgba(255,255,255,.5)", fontSize: 13, marginTop: 28 }}>🇨🇦 Canada &nbsp;·&nbsp; 🇺🇸 USA &nbsp;·&nbsp; 🇬🇧 UK &nbsp;·&nbsp; 🇮🇳 India &nbsp;&nbsp;|&nbsp;&nbsp; hello@nncdigital.com</p>
            </div>
          </div>
        </section>

        {/* ══ M10 — WHY CHOOSE US (SPLIT: TEXT + VIDEO) ══════════════════════════════ */}
        <section className="sec sec-grad-down">
          <div className="sec-content">
            <div className="two-col-wide">
              <div>
                <Badge label="Our Story" />
                <h2 className="section-h2">Why Choose Us as Your <GradText>Salesforce Partner</GradText>?</h2>
                <p style={{ color: "rgba(255,255,255,.55)", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                  Backed by <strong style={{ color: "#fff" }}>Nakshatra Namaha Creations Pvt. Ltd.</strong> — one of Bangalore's most respected digital studios with <span style={{ color: "#00A1E0", fontWeight: 600 }}>8+ years of experience</span> and <span style={{ color: "#00A1E0", fontWeight: 600 }}>565+ projects delivered</span>.
                </p>
                <p style={{ color: "rgba(255,255,255,.55)", fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
                  We launched NNC Digital as our international arm — bringing proven technical expertise to the Canadian, US, and UK markets with dedicated client-facing teams, transparent pricing, and long-term partnership.
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
                <div onClick={() => setVidPlay(true)} style={{ position: "relative", borderRadius: 24, overflow: "hidden", border: "1px solid rgba(0,161,224,.2)", background: "linear-gradient(135deg,#0a2540,#061425)", aspectRatio: "16/10", cursor: "pointer" }}>
                  {!vidPlay ? (
                    <>
                      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,161,224,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,161,224,.04) 1px,transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
                      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
                        <button style={{ width: 72, height: 72, borderRadius: "50%", background: "#00A1E0", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, animation: "wcuPulse 2.5s ease-in-out infinite" }}>▶</button>
                        <p style={{ color: "rgba(255,255,255,.6)", fontSize: 14, fontWeight: 600, margin: 0 }}>Watch Our Story</p>
                      </div>
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px", background: "linear-gradient(0deg,rgba(3,11,24,.95),transparent)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div><p style={{ color: "#fff", fontSize: 14, fontWeight: 700, margin: 0 }}>NNC Digital Solutions</p><p style={{ color: "rgba(255,255,255,.4)", fontSize: 12, margin: 0 }}>Founder's Story · 3 min</p></div>
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
                  <button className="btn-salesforce btn" style={{ flex: 1 }}>📅 Book a Free Salesforce Strategy Call</button>
                  <button className="btn-outline btn" style={{ flex: 1 }}>Our Portfolio →</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ M11 — GLOBAL PRESENCE (DARK BLUE TABS) ════════════════════════════════ */}
        <section className="sec sec-grad-n0n1">
          <div className="sec-content-1180">
            <SectionHeader badge="Our Reach" title={<>Global <GradText>Presence</GradText></>} sub="Client-facing offices in North America & the UK. Engineering headquarters in Bangalore, India." narrow />
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 40 }}>
              {[{ key: "int", label: "🌍 North America & UK" }, { key: "india", label: "🇮🇳 India (Engineering HQ)" }].map(t => (
                <button key={t.key} className={`gp-tab${gTab === t.key ? " act" : ""}`} onClick={() => setGTab(t.key as "int" | "india")} style={{ borderColor: gTab === t.key ? "#00A1E0" : "rgba(255,255,255,.2)" }}>{t.label}</button>
              ))}
            </div>
            {gTab === "int" && (
              <div>
                <div className="gp-offices" style={{ marginBottom: 24 }}>
                  {INT_OFFICES.map((o, i) => (
                    <div key={i} className="gp-card">
                      <div style={{ fontSize: 36, marginBottom: 14 }}>{o.flag}</div>
                      <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{o.city}</h3>
                      <p style={{ color: "#00A1E0", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>{o.tz}</p>
                      <a href={`tel:${o.phone.replace(/\s|-/g, "")}`} className="h-teal" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,.7)", fontSize: 14, fontWeight: 600, textDecoration: "none", marginBottom: 8 }}>📞 {o.phone}</a>
                      <a href={`mailto:${o.email}`} className="h-teal" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,.5)", fontSize: 13, textDecoration: "none" }}>✉️ {o.email}</a>
                    </div>
                  ))}
                </div>
                <div style={{ borderRadius: 14, padding: "20px 28px", background: "rgba(0,161,224,.05)", border: "1px solid rgba(0,161,224,.15)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}><div className="live-dot" style={{ background: "#00A1E0" }} /><span style={{ color: "rgba(255,255,255,.6)", fontSize: 14, fontWeight: 500 }}>Available Mon–Fri, 9am–6pm in your time zone</span></div>
                  <a href="mailto:hello@nncdigital.com" className="h-teal" style={{ color: "#00A1E0", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>hello@nncdigital.com →</a>
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
                          {o.phone && <p style={{ color: "#00A1E0", fontSize: 12.5, fontWeight: 600, margin: "4px 0 0" }}>{o.phone}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.07)" }}>
                    <p style={{ color: "rgba(255,255,255,.35)", fontSize: 13, margin: 0 }}>✉️ info@nakshatranamahacreations.com</p>
                  </div>
                </div>
                <div className="gp-india-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
                  {[{ n: "8+", l: "Years Active" }, { n: "565+", l: "Projects" }, { n: "100+", l: "Team Members" }, { n: "4", l: "India Offices" }].map((s, i) => (
                    <div key={i} style={{ textAlign: "center", padding: "20px 12px", borderRadius: 14, background: "rgba(0,161,224,.06)", border: "1px solid rgba(0,161,224,.15)", transition: "transform .25s,background .25s", cursor: "default" }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-4px)"; el.style.background = "rgba(0,161,224,.12)"; }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.background = "rgba(0,161,224,.06)"; }}>
                      <p style={{ color: "#00A1E0", fontSize: 26, fontWeight: 900, margin: 0 }}>{s.n}</p>
                      <p style={{ fontSize: 11, color: "rgba(255,255,255,.4)", margin: "4px 0 0", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ══ M12 — FAQS (ACCORDION) ════════════════════════════════════════════════ */}
        <section className="sec sec-grad-down">
          <div className="sec-content-sm">
            <SectionHeader badge="FAQs" title={<>Frequently Asked <GradText>Questions</GradText></>} sub="Everything you need to know about Salesforce implementation for businesses in Canada, USA & UK." narrow />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {FAQS.map((f, i) => (
                <div key={i} className={`faq-item${faq === i ? " fopen" : ""}`} onClick={() => setFaq(faq === i ? null : i)}>
                  <div className="faq-item__q">
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span className="faq-item__tag" style={{ color: "#00A1E0", borderColor: "rgba(0,161,224,.3)" }}>Q{i + 1}</span>
                      <span className="faq-item__text">{f.q}</span>
                    </div>
                    <div className="faq-item__icon" style={{
                      background: faq === i ? "#00A1E0" : "rgba(255,255,255,.07)",
                      border: `1px solid ${faq === i ? "#00A1E0" : "rgba(255,255,255,.12)"}`,
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
              <button className="btn-salesforce btn">Ask Us Anything →</button>
            </div>
          </div>
        </section>

        {/* ══ M13 — READY TO BUILD + CONTACT FORM ════════════════════════════════════ */}
        <section className="sec" style={{ background: "linear-gradient(180deg,var(--n2) 0%,var(--n0) 100%)" }}>
          <div className="sec-content-1180">
            <SectionHeader badge="Get In Touch" title={<>Ready to Build <GradText>Next-Level</GradText> Custom Salesforce Solutions?</>} sub="Tell us about your project. We respond within 24 hours with a free consultation and honest advice." />
            <div className="cf-grid">
              <div style={{ background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 20, padding: "36px 32px" }}>
                {cSubmitted ? (
                  <div style={{ textAlign: "center", padding: "48px 0" }}>
                    <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
                    <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Message Sent!</h3>
                    <p style={{ color: "rgba(255,255,255,.5)", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>Thank you — we'll respond within 24 hours with practical advice.</p>
                    <button onClick={() => { setCSubmitted(false); setCForm({ name: "", phone: "", dialCode: "+1", email: "", service: "", project: "", }); }} className="btn-salesforce btn" style={{ padding: "12px 28px", fontSize: 14 }}>Send Another →</button>
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
                    <div style={{ marginBottom: 24 }}><label className="label-upper-lg">Project Description</label><textarea className="fi fi-lg fi-textarea-lg" placeholder="Briefly describe your Salesforce project, goals, and timeline..." value={cForm.project} onChange={e => setCF("project", e.target.value)} /></div>
                    <button className="btn-salesforce btn" type="submit" disabled={cLoading} style={{ width: "100%", padding: 15, opacity: cLoading ? .6 : 1, cursor: cLoading ? "wait" : "pointer" }}>{cLoading ? "Sending..." : "Submit — Get Free Salesforce Consultation →"}</button>
                    <p style={{ color: "rgba(255,255,255,.3)", fontSize: 11.5, textAlign: "center", marginTop: 12 }}>🔒 Your information is 100% secure and never shared.</p>
                  </form>
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div className="card-teal" style={{ padding: "28px 26px", borderColor: "rgba(0,161,224,.3)" }}>
                  <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 800, marginBottom: 18 }}>What Happens After You Submit?</h3>
                  {[{ s: "1", text: "We review your project within a few hours — no bots." }, { s: "2", text: "A senior Salesforce consultant calls you within 24 hours." }, { s: "3", text: "We send a free scoping document with timeline & cost." }, { s: "4", text: "You decide — no pressure, no obligation." }].map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: i < 3 ? 16 : 0, padding: "12px 14px", borderRadius: 10, background: "rgba(255,255,255,.03)", transition: "background .2s", cursor: "default" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(0,161,224,.07)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.03)"}>
                      <div className="step-circle" style={{ background: "#00A1E0", color: "#000" }}>{step.s}</div>
                      <p style={{ color: "rgba(255,255,255,.65)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{step.text}</p>
                    </div>
                  ))}
                </div>
                <div style={{ background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 18, padding: "26px" }}>
                  <h3 style={{ color: "rgba(255,255,255,.4)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>Direct Contacts</h3>
                  {[{ flag: "🇨🇦", label: "Canada", phone: "+1 647-XXX-XXXX" }, { flag: "🇺🇸", label: "USA", phone: "+1 631-XXX-XXXX" }, { flag: "🇬🇧", label: "UK", phone: "+44 20-XXXX-XXXX" }].map((c, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,.06)" : "none" }}>
                      <span style={{ color: "rgba(255,255,255,.55)", fontSize: 14, fontWeight: 500 }}>{c.flag} {c.label}</span>
                      <a href={`tel:${c.phone.replace(/\s|-/g, "")}`} className="h-teal" style={{ color: "#00A1E0", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>{c.phone}</a>
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

        <style jsx>{`
          .btn-salesforce {
            background: #00A1E0;
            color: #000;
            font-weight: 700;
            border: none;
            border-radius: 100px;
            padding: 12px 28px;
            cursor: pointer;
            transition: all .3s ease;
          }
          .btn-salesforce:hover {
            background: #0088cc;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0,161,224,.3);
          }
        `}</style>

      </div>
    </>
  );
}