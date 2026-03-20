"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getServiceSchema } from "../lib/schema";
import SchemaMarkup from "../components/SchemaMarkup";
import Navbar from "../components/Navbar";

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

const STATS = [
  { val: 100, sfx: "+", label: "Projects Delivered", sub: "Across 12 countries", icon: "🚀" },
  { val: 10, sfx: "+", label: "Years of Expertise", sub: "Deep tech since 2014", icon: "💡" },
  { val: 50, sfx: "+", label: "Clients Globally", sub: "CA · USA · UK · IN", icon: "🌍" },
  { val: 98, sfx: "%", label: "Client Retention", sub: "Long-term partnerships", icon: "🤝" },
];

const CASES = [
  {
    industry: "Manufacturing", icon: "🏭", tag: "Operations", tagClr: "#818cf8", tagBg: "rgba(99,102,241,.15)", tagBd: "rgba(99,102,241,.35)",
    title: "35% Efficiency Boost for a Canadian Manufacturer",
    challenge: "Manual data entry across 3 legacy systems was causing delays and costly errors in production scheduling.",
    solution: "We built a custom CRM integrated with their ERP, automating workflows from lead to delivery.",
    metrics: [{ l: "Efficiency Gain", v: "35%", i: "⚡" }, { l: "Data Errors", v: "−90%", i: "✅" }, { l: "Go-live Time", v: "8 wks", i: "🚀" }]
  },
  {
    industry: "Healthcare", icon: "🏥", tag: "Healthcare", tagClr: "#22c55e", tagBg: "rgba(34,197,94,.12)", tagBd: "rgba(34,197,94,.3)",
    title: "42% More Bookings for a UK Healthcare Provider",
    challenge: "A multi-location clinic was losing patients due to manual appointment processes and poor follow-up systems.",
    solution: "NNC deployed a Salesforce Health Cloud CRM with automated WhatsApp reminders and a patient self-service portal.",
    metrics: [{ l: "More Bookings", v: "+42%", i: "📅" }, { l: "No-shows", v: "−60%", i: "✅" }, { l: "Patient Score", v: "4.8★", i: "⭐" }]
  },
  {
    industry: "D2C E-Commerce", icon: "🛒", tag: "E-Commerce", tagClr: "#00C9A7", tagBg: "rgba(0,201,167,.12)", tagBd: "rgba(0,201,167,.3)",
    title: "2.4× Conversion Rate for a US D2C Brand",
    challenge: "A direct-to-consumer brand had no unified view of customer behaviour across email, social, and checkout.",
    solution: "We integrated HubSpot CRM with Klaviyo and Shopify — enabling full-funnel visibility and AI-powered segmentation.",
    metrics: [{ l: "Conversion", v: "2.4×", i: "📈" }, { l: "Revenue", v: "+68%", i: "💰" }, { l: "CAC Reduction", v: "−38%", i: "✅" }]
  },
];

// MODULE 4 — SERVICES (Corrected to match document exactly)
const SERVICES = [
  { icon: "🗂️", title: "CRM Consulting", desc: "Tailored for businesses in Canada, USA & UK.", tag: "Strategy", slug: "crm-consulting" },
  { icon: "⚙️", title: "CRM Implementation", desc: "Tailored for businesses in Canada, USA & UK.", tag: "Setup", slug: "crm-implementation" },
  { icon: "🎛️", title: "CRM Customization", desc: "Tailored for businesses in Canada, USA & UK.", tag: "Custom", slug: "crm-customization" },
  { icon: "🌐", title: "CRM Portal Development", desc: "Tailored for businesses in Canada, USA & UK.", tag: "Portal", slug: "crm-portal" },
  { icon: "🚀", title: "CRM Deployment", desc: "Tailored for businesses in Canada, USA & UK.", tag: "Deployment", slug: "crm-deployment" },
  { icon: "📱", title: "CRM Mobile App Development", desc: "Tailored for businesses in Canada, USA & UK.", tag: "Mobile", slug: "crm-mobile-app" },
  { icon: "🎨", title: "CRM UI/UX Design", desc: "Tailored for businesses in Canada, USA & UK.", tag: "Design", slug: "crm-ui-ux" },
  { icon: "🔗", title: "CRM Integration", desc: "Tailored for businesses in Canada, USA & UK.", tag: "Integration", slug: "crm-integration" },
  { icon: "🔄", title: "CRM Migration", desc: "Tailored for businesses in Canada, USA & UK.", tag: "Migration", slug: "crm-migration" },
  { icon: "💼", title: "IT Management Consulting", desc: "Tailored for businesses in Canada, USA & UK.", tag: "Consulting", slug: "it-consulting" },
  { icon: "🔁", title: "Digital Transformation", desc: "Tailored for businesses in Canada, USA & UK.", tag: "Transform", slug: "digital-transformation" },
  { icon: "🤖", title: "Marketing Automation", desc: "Tailored for businesses in Canada, USA & UK.", tag: "Automation", slug: "marketing-automation" },
];

const BENEFITS = [
  { num: "01", icon: "🔒", title: "Secure Data", desc: "GDPR / PIPEDA / CCPA compliance built-in. Zero data loss guarantee.", tags: ["GDPR", "PIPEDA", "CCPA"] },
  { num: "02", icon: "🎯", title: "Lead Management", desc: "All customer data in one CRM. Priority pipelines with intelligent scoring and automated follow-ups.", tags: ["Pipeline", "Scoring", "Automation"] },
  { num: "03", icon: "🔗", title: "Easy Integration", desc: "Seamless plugins for every department — marketing, finance, support, and ops.", tags: ["Plugins", "API", "No Silos"] },
  { num: "04", icon: "🤝", title: "Relentless Support", desc: "Ongoing support after go-live. Dedicated team ensuring maximum CRM adoption every day.", tags: ["24/7", "Training", "Go-Live"] },
];

// MODULE 6 — PLATFORM TOOLS (Corrected to match document exactly)
const TOOLS = [
  { icon: "☁️", name: "Salesforce", purpose: "Enterprise-grade integration.", bg: "rgba(0,161,224,.1)", bd: "rgba(0,161,224,.25)" },
  { icon: "🧲", name: "HubSpot", purpose: "Best-in-class for performance.", bg: "rgba(255,122,0,.08)", bd: "rgba(255,122,0,.22)" },
  { icon: "🏢", name: "MS Dynamics 365", purpose: "Enterprise-grade integration.", bg: "rgba(0,120,215,.08)", bd: "rgba(0,120,215,.22)" },
  { icon: "🔶", name: "Zoho CRM", purpose: "Best-in-class for performance.", bg: "rgba(227,77,38,.08)", bd: "rgba(227,77,38,.22)" },
  { icon: "🍬", name: "SugarCRM", purpose: "Enterprise-grade integration.", bg: "rgba(229,57,53,.08)", bd: "rgba(229,57,53,.22)" },
  { icon: "🧩", name: "SuiteCRM", purpose: "Best-in-class for performance.", bg: "rgba(0,201,167,.08)", bd: "rgba(0,201,167,.22)" },
  { icon: "🚿", name: "Pipedrive", purpose: "Enterprise-grade integration.", bg: "rgba(38,166,91,.08)", bd: "rgba(38,166,91,.22)" },
  { icon: "⚡", name: "Custom-Built CRM", purpose: "Best-in-class for performance.", bg: "rgba(0,201,167,.1)", bd: "rgba(0,201,167,.28)", bespoke: true },
];

const HIRE_LEFT = [
  { icon: "🏢", title: "Enterprises", desc: "Complex multi-location operations with enterprise-grade integrations and permission hierarchies." },
  { icon: "🚀", title: "Start-ups", desc: "CRM that scales without outgrowing in 12 months. Lightweight to start, powerful when you need it." },
  { icon: "🎯", title: "Agencies", desc: "Client pipelines, retainer billing, and performance dashboards — CRM designed to grow your book of business." },
];
const HIRE_RIGHT = [
  { icon: "📊", title: "Analytical", desc: "Turn raw customer data into business intelligence. Identify trends, segment audiences, and make data-driven decisions." },
  { icon: "⚙️", title: "Operational", desc: "Automate day-to-day sales and service processes so your team can focus on what matters most." },
  { icon: "🤝", title: "Collaborative", desc: "Unify sales, support, marketing, and ops around a single customer view — breaking silos and improving alignment." },
];

const AI_FEATS = [
  { icon: "🧠", title: "AI Data Analysis", desc: "AI analyses vast volumes of client data from email, social, and purchases — surfacing insights your team can act on.", bg: "rgba(0,201,167,.08)", bd: "rgba(0,201,167,.2)" },
  { icon: "🔮", title: "Predictive Insights", desc: "Automatically rank leads based on behaviour and deal size so sales always focuses on highest-value opportunities.", bg: "rgba(99,102,241,.08)", bd: "rgba(99,102,241,.2)" },
  { icon: "🤖", title: "Automation at Scale", desc: "Deploy AI-powered chatbots and WhatsApp flows that qualify leads and book appointments — 24/7, without human input.", bg: "rgba(0,201,167,.08)", bd: "rgba(0,201,167,.2)" },
  { icon: "📈", title: "Real-Time Dashboards", desc: "Custom dashboards with live KPIs, pipeline velocity, and team performance metrics — updated instantly as deals progress.", bg: "rgba(255,159,28,.08)", bd: "rgba(255,159,28,.2)" },
];

const ACCORDION_L = [
  { icon: "📧", title: "Email Integration", desc: "Sync your inbox with your CRM — track every email, automate follow-ups, and never lose a client conversation." },
  { icon: "✅", title: "Workflow and Approvals", desc: "Automate multi-step approval workflows across sales, finance, and operations. Reduce manual handoffs." },
  { icon: "📊", title: "Reports and Dashboards", desc: "Build real-time dashboards and custom reports to monitor KPIs, pipeline health, and team performance." },
  { icon: "📈", title: "Sales Forecasting", desc: "Use historical data and AI-driven models to predict revenue, identify risks, and plan resources with confidence." },
];
const ACCORDION_R = [
  { icon: "🛠️", title: "Field Service", desc: "Equip field teams with mobile CRM tools, job scheduling, and real-time updates for exceptional on-site service." },
  { icon: "💰", title: "CPQ and Billing", desc: "Configure, price, and quote accurately every time. Streamline billing cycles and eliminate pricing errors." },
  { icon: "🎯", title: "Lead Scoring & Priority", desc: "Automatically score and rank leads based on behaviour so sales always focuses on the highest-value opportunities." },
  { icon: "💬", title: "WhatsApp Integration", desc: "Connect WhatsApp Business to your CRM for seamless customer communication and conversation tracking." },
];

// MODULE 12 — FAQS (Corrected to 5 questions as per document)
const FAQS = [
  {
    q: "What is custom CRM software vs off-the-shelf?",
    a: "Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process."
  },
  {
    q: "What features can be customised?",
    a: "Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process."
  },
  {
    q: "How long does CRM development take?",
    a: "Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process."
  },
  {
    q: "What does CRM development cost in Canada or UK?",
    a: "Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process."
  },
  {
    q: "Do you offer post-launch support?",
    a: "Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process."
  },
];

// MODULE 11 — GLOBAL PRESENCE (Corrected)
const INT_OFFICES = [
  { city: "Toronto, Canada — +1 647-XXX-XXXX", bullet: "■■" },
  { city: "New York, USA — +1 631-XXX-XXXX", bullet: "■■" },
  { city: "London, UK — +44 20-XXXX-XXXX", bullet: "■■" },
];

const INDIA_OFFICES = [
  { city: "Bangalore HQ — +91 9900566466", bullet: "■■" },
  { city: "Mysore | Mumbai | Hyderabad", bullet: "■■" },
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

const SERVICES_LIST = ["CRM Development", "ERP Development", "Web Development", "Mobile App Development", "Marketing Automation", "Salesforce CRM", "Digital Transformation", "Other"];
const DIAL_CODES = [{ code: "+1", flag: "🇨🇦" }, { code: "+1", flag: "🇺🇸" }, { code: "+44", flag: "🇬🇧" }, { code: "+91", flag: "🇮🇳" }];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d")!;
    let W = c.width = c.offsetWidth, H = c.height = c.offsetHeight;
    const pts = Array.from({ length: 50 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22,
      r: Math.random() * 1.4 + .3, a: Math.random() * .38 + .07
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
        const t = setInterval(() => {
          step++;
          const ease = 1 - Math.pow(1 - step / 70, 3);
          setV(Math.round(ease * to));
          if (step >= 70) { setV(to); clearInterval(t); }
        }, 1800 / 70);
      }
    }, { threshold: .25 });
    obs.observe(el);
    return () => obs.disconnect();
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

function AccItem({ item, open, toggle, isMobile }: { item: { icon: string; title: string; desc: string }; open: boolean; toggle: () => void; isMobile: boolean }) {
  return (
    <div onClick={toggle} style={{ borderRadius: 14, border: `1px solid ${open ? "rgba(0,201,167,0.4)" : "rgba(255,255,255,0.08)"}`, background: open ? "rgba(0,201,167,0.06)" : "rgba(255,255,255,0.02)", overflow: "hidden", cursor: "pointer", transition: "border-color .25s,background .25s" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: isMobile ? "14px 16px" : "18px 22px", gap: isMobile ? 10 : 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 14 }}>
          <div style={{ width: isMobile ? 40 : 44, height: isMobile ? 40 : 44, borderRadius: 12, flexShrink: 0, background: open ? "rgba(0,201,167,0.15)" : "rgba(255,255,255,0.05)", border: `1px solid ${open ? "rgba(0,201,167,0.3)" : "rgba(255,255,255,0.1)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 18 : 20, transition: "background .25s" }}>{item.icon}</div>
          <span style={{ fontSize: isMobile ? 13 : 15, fontWeight: 700, color: open ? "#fff" : "rgba(255,255,255,0.72)", fontFamily: "'Poppins',sans-serif", transition: "color .2s" }}>{item.title}</span>
        </div>
        <div style={{ width: isMobile ? 24 : 28, height: isMobile ? 24 : 28, borderRadius: "50%", flexShrink: 0, background: open ? T : "rgba(255,255,255,0.07)", border: `1px solid ${open ? T : "rgba(255,255,255,0.14)"}`, display: "flex", alignItems: "center", justifyContent: "center", color: open ? "#000" : "rgba(255,255,255,0.55)", fontSize: isMobile ? 16 : 18, fontWeight: 700, lineHeight: 1, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
      </div>
      <div style={{ maxHeight: open ? 220 : 0, overflow: "hidden", transition: "max-height .35s ease" }}>
        <p style={{ padding: isMobile ? "0 16px 14px 60px" : "0 22px 20px 80px", color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 12 : 14, lineHeight: 1.75, fontFamily: "'Poppins',sans-serif", fontWeight: 400, margin: 0 }}>{item.desc}</p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function CRMDevelopmentPage() {
  const serviceSchema = getServiceSchema(
    "CRM Development",
    "Custom CRM Development Services for Canada, USA & UK. NNC Digital Solutions builds custom CRM software for businesses in Canada, USA, and UK. Sales pipeline automation, WhatsApp integration, Salesforce customisation, and more. Get a free consultation."
  );
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 640;
  const isTablet = windowWidth > 640 && windowWidth <= 1024;

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
  const [cForm, setCForm] = useState({ name: "", phone: "", dialCode: "+1", email: "", service: "", project: "" });
  const [cSubmitted, setCSubmitted] = useState(false);
  const [cLoading, setCLoading] = useState(false);
  const setCF = (k: string, v: string) => setCForm(f => ({ ...f, [k]: v }));
  const handleCSubmit = (e: React.FormEvent) => { e.preventDefault(); setCLoading(true); setTimeout(() => { setCLoading(false); setCSubmitted(true); }, 1200); };

  // Responsive styles
  const getSectionPadding = () => {
    if (isMobile) return "20px 16px";
    if (isTablet) return "60px 32px";
    return "20px 48px";
  };

  const getHeroPadding = () => {
    if (isMobile) return "10px 16px 60px";
    if (isTablet) return "80px 32px 80px";
    return "90px 48px 80px";
  };

  const iS: React.CSSProperties = {
    width: "100%",
    padding: isMobile ? "10px 12px" : "11px 14px",
    borderRadius: 9,
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.14)",
    color: "#fff",
    fontSize: isMobile ? "13px" : "13.5px",
    fontFamily: "'Poppins',sans-serif",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color .2s,background .2s"
  };

  const iSLg: React.CSSProperties = {
    ...iS,
    padding: isMobile ? "12px 14px" : "13px 16px",
    fontSize: isMobile ? "14px" : "14.5px"
  };

  const btnT: React.CSSProperties = {
    display: "inline-block",
    padding: isMobile ? "12px 20px" : "13px 28px",
    borderRadius: 10,
    border: "none",
    background: `linear-gradient(135deg,${T},${TD})`,
    color: "#000",
    fontWeight: 700,
    fontSize: isMobile ? "14px" : "15px",
    fontFamily: "'Poppins',sans-serif",
    cursor: "pointer",
    textDecoration: "none",
    transition: "transform .2s,box-shadow .2s"
  };

  const btnWhite: React.CSSProperties = {
    display: "inline-block",
    padding: isMobile ? "12px 20px" : "13px 28px",
    borderRadius: 10,
    border: "none",
    background: "#fff",
    color: "#0055b3",
    fontWeight: 700,
    fontSize: isMobile ? "14px" : "15px",
    fontFamily: "'Poppins',sans-serif",
    cursor: "pointer",
    textDecoration: "none",
    transition: "transform .2s,box-shadow .2s"
  };

  return (
    <>
      <Navbar />
      <SchemaMarkup schema={serviceSchema} id="crm-service-schema" />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        @keyframes heroFadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes heroBlink { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes heroGlow { 0%,100% { box-shadow: 0 0 20px rgba(0,201,167,0.15); } 50% { box-shadow: 0 0 40px rgba(0,201,167,0.38); } }
        @keyframes heroPulse { 0%,100% { opacity: .2; transform: scale(1); } 50% { opacity: .4; transform: scale(1.05); } }
        @keyframes heroSpin { from { transform: translateY(-50%) rotate(0deg); } to { transform: translateY(-50%) rotate(360deg); } }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes sbFadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes aiScan { 0% { top: 10%; } 100% { top: 90%; } }
        @keyframes aiPulse { 0%,100% { opacity: .5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.08); } }
        @keyframes ctaBgShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }

        .btn-teal, .btn-white {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s;
          min-width: 140px;
        }
        @media (min-width: 768px) {
          .btn-teal, .btn-white { padding: 14px 32px; font-size: 15px; min-width: 160px; }
        }
        @media (max-width: 640px) {
          .btn-teal, .btn-white { width: 100%; min-width: 0; }
        }
        .btn-teal {
          background: linear-gradient(135deg, var(--teal), var(--teal-dark));
          color: #000;
          border: none;
        }
        .btn-teal:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,201,167,0.25); }
        .btn-white {
          background: #fff;
          color: #0055b3;
          border: none;
        }
        .btn-white:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(0,0,0,0.25); }

        .h-teal:hover { color: var(--teal) !important; }
        .teal { color: var(--teal); }

        .fi:focus { border-color: rgba(0,201,167,0.5) !important; background: rgba(0,201,167,0.06) !important; }
        .fi::placeholder { color: rgba(255,255,255,0.28); }
        .fi option { background: #0a1f38; color: #fff; }

        .cl-track { display: flex; gap: 40px; width: max-content; animation: marquee 30s linear infinite; }
        .cl-track:hover { animation-play-state: paused; }

        .badge { display: inline-block; padding: 5px 12px; border-radius: 100px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.7); font-size: 11px; font-weight: 600; }
        .badge-soft { background: rgba(0,201,167,0.06); border: 1px solid rgba(0,201,167,0.2); color: var(--teal); }

        .section-h2 {
          font-size: clamp(24px, 3vw, 40px);
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 14px;
        }

        .grad-text {
          background: linear-gradient(135deg, var(--teal), #1fd1b5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ss-tab {
          padding: 8px 14px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          color: rgba(255,255,255,0.6);
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.22s;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        @media (min-width: 768px) {
          .ss-tab { padding: 10px 20px; font-size: 13.5px; }
        }
        .ss-tab.act { border-color: rgba(0,201,167,0.45); background: rgba(0,201,167,0.1); color: var(--teal); }

        .svc-card {
          position: relative;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          padding: 20px 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: all 0.3s;
          cursor: default;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .svc-card { padding: 24px 20px; }
        }
        .svc-card:hover { transform: translateY(-4px); border-color: rgba(0,201,167,0.35); background: rgba(0,201,167,0.04); box-shadow: 0 20px 40px rgba(0,0,0,0.4); }

        .pt-card {
          border-radius: 16px;
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          text-align: center;
          align-items: center;
          transition: all 0.3s;
        }
        @media (min-width: 768px) {
          .pt-card { padding: 20px 16px; }
        }
        .pt-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
        .pt-card__icon {
          width: 48px;
          height: 48px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: 12px;
          background: rgba(255,255,255,0.05);
          transition: transform 0.25s;
        }
        @media (min-width: 768px) {
          .pt-card__icon { width: 56px; height: 56px; font-size: 26px; margin-bottom: 16px; }
        }

        .wcu-point {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          transition: all 0.2s;
          cursor: default;
        }
        @media (min-width: 768px) {
          .wcu-point { padding: 14px 18px; gap: 14px; }
        }
        .wcu-point:hover { border-color: rgba(0,201,167,0.25); background: rgba(0,201,167,0.04); transform: translateX(6px); }

        .wcu-stat {
          text-align: center;
          padding: 14px 8px;
          border-radius: 14px;
          border: 1px solid rgba(0,201,167,0.15);
          background: rgba(0,201,167,0.05);
          transition: all 0.25s;
          cursor: default;
        }
        @media (min-width: 768px) {
          .wcu-stat { padding: 20px 12px; }
        }
        .wcu-stat:hover { transform: translateY(-4px); background: rgba(0,201,167,0.1); }

        .gp-card {
          padding: 20px 16px;
          border-radius: 18px;
          background: rgba(0,201,167,0.05);
          border: 1px solid rgba(0,201,167,0.18);
          transition: all 0.25s;
          cursor: default;
        }
        @media (min-width: 768px) {
          .gp-card { padding: 28px 24px; }
        }
        .gp-card:hover { transform: translateY(-4px); border-color: var(--teal); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }

        .faq-item {
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.25s;
        }
        .faq-item.fopen { border-color: rgba(0,201,167,0.35); background: rgba(0,201,167,0.04); }
        .faq-item__q {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 16px;
        }
        @media (min-width: 768px) {
          .faq-item__q { padding: 20px 22px; gap: 16px; }
        }
        .faq-item__tag {
          color: var(--teal);
          font-size: 11px;
          font-weight: 800;
          background: rgba(0,201,167,0.1);
          border: 1px solid rgba(0,201,167,0.2);
          border-radius: 8px;
          padding: 3px 8px;
          flex-shrink: 0;
        }
        @media (min-width: 768px) {
          .faq-item__tag { font-size: 13px; padding: 4px 10px; }
        }
        .faq-item__text {
          font-size: 13px;
          font-weight: 700;
          color: rgba(255,255,255,0.78);
          line-height: 1.4;
        }
        @media (min-width: 768px) {
          .faq-item__text { font-size: 15px; }
        }
        .faq-item.fopen .faq-item__text { color: #fff; }
        .faq-item__icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-weight: 700;
          line-height: 1;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.5);
          transition: all 0.25s;
          flex-shrink: 0;
        }
        @media (min-width: 768px) {
          .faq-item__icon { width: 30px; height: 30px; font-size: 17px; }
        }
        .faq-item.fopen .faq-item__icon { background: var(--teal); border-color: var(--teal); color: #000; transform: rotate(45deg); }
        .faq-item__a {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.38s ease;
        }
        .faq-item.fopen .faq-item__a { max-height: 400px; }
        .faq-item__a p {
          padding: 0 16px 14px 56px;
          color: rgba(255,255,255,0.55);
          font-size: 12px;
          line-height: 1.7;
          margin: 0;
        }
        @media (min-width: 768px) {
          .faq-item__a p { padding: 0 22px 22px 76px; font-size: 14px; }
        }

        .gp-tab {
          padding: 8px 16px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          color: rgba(255,255,255,0.55);
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.22s;
        }
        @media (min-width: 768px) {
          .gp-tab { padding: 11px 24px; font-size: 14px; }
        }
        .gp-tab.act { border-color: rgba(0,201,167,0.5); background: rgba(0,201,167,0.12); color: var(--teal); box-shadow: 0 4px 20px rgba(0,201,167,0.12); }
        .gp-tab:hover { border-color: rgba(0,201,167,0.3); color: var(--teal); }

        .hero-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 0 16px;
        }
        @media (min-width: 768px) {
          .hero-layout { grid-template-columns: 1fr 460px; gap: 40px; padding: 0 24px; }
        }

        .svc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 768px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (min-width: 1024px) {
          .svc-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
        }

        .pt-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (min-width: 768px) {
          .pt-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1024px) {
          .pt-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .two-col {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 768px) {
          .two-col { grid-template-columns: 1fr 1fr; gap: 20px; }
        }

        .two-col-wide {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: start;
        }
        @media (min-width: 768px) {
          .two-col-wide { grid-template-columns: 1fr 1fr; gap: 40px; }
        }

        .wcu-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media (min-width: 768px) {
          .wcu-stats { grid-template-columns: repeat(4, 1fr); }
        }

        .gp-offices {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 768px) {
          .gp-offices { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .gp-offices { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }

        .cf-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 768px) {
          .cf-grid { grid-template-columns: 1fr; }
        }
        @media (min-width: 1024px) {
          .cf-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
        }

        .cf-name {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 768px) {
          .cf-name { grid-template-columns: 1fr 1fr; gap: 16px; }
        }

        .phone-row {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        @media (min-width: 768px) {
          .phone-row { flex-direction: row; gap: 8px; }
        }

        .badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
          
      `}</style>

      <div style={{ fontFamily: "'Poppins',sans-serif" }}>

        {/* M1 — HERO */}
        <section style={{ padding: getHeroPadding(), background: `linear-gradient(135deg,${N0} 0%,#041628 45%,${N0} 100%)`, position: "relative", overflow: "hidden", minHeight: isMobile ? "auto" : "90vh", display: "flex", alignItems: "center" }}>
          <Particles />
          {!isMobile && (
            <>
              <div style={{ position: "absolute", width: isTablet ? 500 : 650, height: isTablet ? 500 : 650, borderRadius: "50%", background: `radial-gradient(circle,rgba(0,201,167,.14) 0%,transparent 65%)`, top: "40%", left: "-10%", transform: "translateY(-50%)", animation: "heroPulse 8s ease-in-out infinite", pointerEvents: "none", zIndex: 1 }} />
              <div style={{ position: "absolute", width: isTablet ? 300 : 400, height: isTablet ? 300 : 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 65%)", top: "10%", right: "5%", animation: "heroPulse 10s ease-in-out infinite .5s", pointerEvents: "none", zIndex: 1 }} />
              <div style={{ position: "absolute", width: isTablet ? 400 : 520, height: isTablet ? 400 : 520, borderRadius: "50%", border: "1px dashed rgba(0,201,167,.08)", top: "50%", left: "-12%", transform: "translateY(-50%)", animation: "heroSpin 55s linear infinite", pointerEvents: "none", zIndex: 1 }} />
            </>
          )}

          <div className="hero-layout">
            {/* Left */}
            <div style={{ animation: "heroFadeUp .7s ease both" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,201,167,.08)", border: "1px solid rgba(0,201,167,.25)", borderRadius: 100, padding: isMobile ? "6px 14px" : "7px 18px", marginBottom: isMobile ? 16 : 28, animation: "heroGlow 3s ease-in-out infinite" }}>
                <span style={{ width: isMobile ? 6 : 7, height: isMobile ? 6 : 7, borderRadius: "50%", background: T, boxShadow: `0 0 10px ${T}`, animation: "heroBlink 1.4s ease-in-out infinite" }} />
                <span style={{ color: T, fontSize: isMobile ? 10 : 11.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>CRM Development — Canada, USA &amp; UK</span>
              </div>
              <h1 style={{ fontSize: isMobile ? "28px" : isTablet ? "36px" : "48px", fontWeight: 900, lineHeight: 1.12, marginBottom: isMobile ? 14 : 22, letterSpacing: "-0.025em", color: "#fff" }}>
                Best and Most Reliable{" "}<GradText>CRM Development Services</GradText>{" "}for Canada, USA &amp; UK
              </h1>
              <p style={{ color: "rgba(255,255,255,.52)", fontSize: isMobile ? "14px" : isTablet ? "15px" : "16.5px", lineHeight: 1.85, marginBottom: isMobile ? 18 : 28, maxWidth: 600 }}>
                At NNC Digital Solutions, we offer reliable, easy-to-understand CRM solutions that transform how your business manages customers, automates sales, and drives revenue growth.
              </p>
              <div className="badge-row" style={{ marginBottom: isMobile ? 20 : 36 }}>
                {[{ i: "🔵", l: "Google Partner" }, { i: "🏆", l: "ISO Certified" }, { i: "🔒", l: "GDPR Compliant" }, { i: "🍁", l: "PIPEDA Ready" }, { i: "⭐", l: "Clutch Top Agency" }].map(b => (
                  <span key={b.l} className="badge" style={{ padding: isMobile ? "5px 10px" : "6px 13px", fontSize: isMobile ? 11 : 12.5 }}>{b.i} {b.l}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {[{ flag: "🇨🇦", label: "CA:", phone: "+1 647-XXX-XXXX" }, { flag: "🇬🇧", label: "UK:", phone: "+44 20-XXXX-XXXX" }].map(p => (
                  <Link key={p.phone} href={`tel:${p.phone.replace(/\s|-/g, "")}`} className="h-teal" style={{ display: "flex", alignItems: "center", gap: 7, color: "rgba(255,255,255,.5)", fontSize: isMobile ? 12 : 13.5, fontWeight: 600, textDecoration: "none", transition: "color .2s" }}>
                    <span>{p.flag}</span><span style={{ color: "rgba(255,255,255,.3)" }}>{p.label}</span><span className="teal">{p.phone}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div style={{ background: "rgba(8,20,40,0.85)", border: "1px solid rgba(0,201,167,0.22)", borderRadius: 20, padding: isMobile ? "24px 20px" : "32px 28px", backdropFilter: "blur(16px)", boxShadow: "0 32px 80px rgba(0,0,0,0.5),0 0 40px rgba(0,201,167,0.06)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${T},transparent)` }} />
              {submitted ? (
                <div style={{ textAlign: "center", padding: isMobile ? "20px 0" : "40px 0" }}>
                  <div style={{ fontSize: isMobile ? 44 : 52, marginBottom: 16 }}>✅</div>
                  <h3 style={{ color: "#fff", fontSize: isMobile ? 18 : 20, fontWeight: 800, marginBottom: 10 }}>Request Received!</h3>
                  <p style={{ color: "rgba(255,255,255,.5)", fontSize: isMobile ? 13 : 14, lineHeight: 1.7, marginBottom: 24 }}>We&apos;ll contact you within 24 hours with a free consultation.</p>
                  <Link href="/crm-development">
                    <button onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", phone: "", dialCode: "+1", email: "", service: "", message: "", }); }} style={{ padding: isMobile ? "10px 22px" : "11px 26px", borderRadius: 9, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: isMobile ? 13 : 14, fontFamily: "'Poppins',sans-serif", cursor: "pointer" }}>Send Another →</button>
                  </Link>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: isMobile ? 14 : 22 }}>
                    <p style={{ color: T, fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Free Consultation</p>
                    <h2 style={{ color: "#fff", fontSize: isMobile ? 16 : 18, fontWeight: 800, margin: 0, lineHeight: 1.3 }}>Get a Free CRM Strategy Call</h2>
                  </div>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
                    <div className="cf-name">
                      <div><p style={{ fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.04em" }}>First Name *</p><input className="fi" required placeholder="Jane" value={form.firstName} onChange={e => setF("firstName", e.target.value)} /></div>
                      <div><p style={{ fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.04em" }}>Last Name</p><input className="fi" placeholder="Smith" value={form.lastName} onChange={e => setF("lastName", e.target.value)} /></div>
                    </div>
                    <div>
                      <p style={{ fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.04em" }}>Phone</p>
                      <div className="phone-row">
                        <select className="fi" style={{ width: isMobile ? "100%" : "82px" }} value={form.dialCode} onChange={e => setF("dialCode", e.target.value)}>
                          {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                        </select>
                        <input className="fi" type="tel" placeholder="647 XXX XXXX" value={form.phone} onChange={e => setF("phone", e.target.value)} />
                      </div>
                    </div>
                    <div><p style={{ fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.04em" }}>Business Email *</p><input className="fi" required type="email" placeholder="jane@company.com" value={form.email} onChange={e => setF("email", e.target.value)} /></div>
                    <div>
                      <p style={{ fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.04em" }}>Service</p>
                      <select className="fi" style={{ cursor: "pointer" }} value={form.service} onChange={e => setF("service", e.target.value)}>
                        <option value="">Select service...</option>
                        {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div><p style={{ fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.04em" }}>Message</p><textarea className="fi" style={{ minHeight: isMobile ? 70 : 76, resize: "vertical" }} placeholder="Tell us about your project..." value={form.message} onChange={e => setF("message", e.target.value)} /></div>
                    <button style={{ ...btnT, width: "100%", marginTop: 4, opacity: loading ? .6 : 1, cursor: loading ? "wait" : "pointer" }}>
                      {loading ? "Sending..." : "📅 Get Free Consultation →"}
                    </button>
                    <p style={{ color: "rgba(255,255,255,.28)", fontSize: isMobile ? 10 : 11, textAlign: "center", margin: 0 }}>🔒 Secure &amp; confidential. No spam, ever.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* M2 — CLIENTS */}
        {/* MODULE 2 — OUR HAPPY CLIENTS — 3 Rows of 6 Logos */}
        <section style={{ padding: isMobile ? "40px 0" : "60px 0", background: N0, overflow: "hidden", borderTop: "1px solid rgba(0,201,167,.1)", borderBottom: "1px solid rgba(0,201,167,.1)" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 30 : 40, padding: "0 24px" }}>
            <p style={{ fontWeight: 600, fontSize: isMobile ? 10 : 11.5, color: "rgba(255,255,255,.28)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>Our Happy Clients</p>
            <h2 style={{ fontSize: isMobile ? "22px" : "28px", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.25, margin: 0 }}>
              Trusted by Businesses Across <GradText>North America &amp; the UK</GradText>
            </h2>
          </div>

          {/* Row 1 - Sliding Left to Right */}
          <div style={{ overflow: "hidden", marginBottom: isMobile ? 16 : 20 }}>
            <div className="cl-track" style={{ animation: "marquee 30s linear infinite" }}>
              {LOGOS.slice(0, 6).map((logo, i) => (
                <div key={`row1-${i}`} style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", height: isMobile ? 60 : 70, padding: isMobile ? "8px 14px" : "10px 18px", background: "#fff", borderRadius: 10, margin: "0 8px", boxShadow: "0 6px 20px rgba(0,0,0,0.15)", opacity: .9, transition: "transform .3s, box-shadow .3s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "scale(1.08)"; el.style.boxShadow = "0 10px 28px rgba(0,0,0,0.25)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)"; }}>
                  <img src={`/${logo}`} alt={`Client ${i + 1}`} style={{ height: isMobile ? 30 : 40, width: "auto", maxWidth: isMobile ? 90 : 120, objectFit: "contain" }} />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {LOGOS.slice(0, 6).map((logo, i) => (
                <div key={`row1-duplicate-${i}`} style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", height: isMobile ? 60 : 70, padding: isMobile ? "8px 14px" : "10px 18px", background: "#fff", borderRadius: 10, margin: "0 8px", boxShadow: "0 6px 20px rgba(0,0,0,0.15)", opacity: .9, transition: "transform .3s, box-shadow .3s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "scale(1.08)"; el.style.boxShadow = "0 10px 28px rgba(0,0,0,0.25)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)"; }}>
                  <img src={`/${logo}`} alt={`Client ${i + 1}`} style={{ height: isMobile ? 30 : 40, width: "auto", maxWidth: isMobile ? 90 : 120, objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Sliding Right to Left (reverse direction) */}
          <div style={{ overflow: "hidden", marginBottom: isMobile ? 16 : 20 }}>
            <div className="cl-track" style={{ animation: "marqueeReverse 35s linear infinite" }}>
              {LOGOS.slice(6, 12).map((logo, i) => (
                <div key={`row2-${i}`} style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", height: isMobile ? 60 : 70, padding: isMobile ? "8px 14px" : "10px 18px", background: "#fff", borderRadius: 10, margin: "0 8px", boxShadow: "0 6px 20px rgba(0,0,0,0.15)", opacity: .9, transition: "transform .3s, box-shadow .3s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "scale(1.08)"; el.style.boxShadow = "0 10px 28px rgba(0,0,0,0.25)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)"; }}>
                  <img src={`/${logo}`} alt={`Client ${i + 7}`} style={{ height: isMobile ? 30 : 40, width: "auto", maxWidth: isMobile ? 90 : 120, objectFit: "contain" }} />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {LOGOS.slice(6, 12).map((logo, i) => (
                <div key={`row2-duplicate-${i}`} style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", height: isMobile ? 60 : 70, padding: isMobile ? "8px 14px" : "10px 18px", background: "#fff", borderRadius: 10, margin: "0 8px", boxShadow: "0 6px 20px rgba(0,0,0,0.15)", opacity: .9, transition: "transform .3s, box-shadow .3s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "scale(1.08)"; el.style.boxShadow = "0 10px 28px rgba(0,0,0,0.25)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)"; }}>
                  <img src={`/${logo}`} alt={`Client ${i + 7}`} style={{ height: isMobile ? 30 : 40, width: "auto", maxWidth: isMobile ? 90 : 120, objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Sliding Left to Right (different speed) */}
          <div style={{ overflow: "hidden" }}>
            <div className="cl-track" style={{ animation: "marquee 40s linear infinite" }}>
              {LOGOS.slice(12, 18).map((logo, i) => (
                <div key={`row3-${i}`} style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", height: isMobile ? 60 : 70, padding: isMobile ? "8px 14px" : "10px 18px", background: "#fff", borderRadius: 10, margin: "0 8px", boxShadow: "0 6px 20px rgba(0,0,0,0.15)", opacity: .9, transition: "transform .3s, box-shadow .3s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "scale(1.08)"; el.style.boxShadow = "0 10px 28px rgba(0,0,0,0.25)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)"; }}>
                  <img src={`/${logo}`} alt={`Client ${i + 13}`} style={{ height: isMobile ? 30 : 40, width: "auto", maxWidth: isMobile ? 90 : 120, objectFit: "contain" }} />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {LOGOS.slice(12, 18).map((logo, i) => (
                <div key={`row3-duplicate-${i}`} style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", height: isMobile ? 60 : 70, padding: isMobile ? "8px 14px" : "10px 18px", background: "#fff", borderRadius: 10, margin: "0 8px", boxShadow: "0 6px 20px rgba(0,0,0,0.15)", opacity: .9, transition: "transform .3s, box-shadow .3s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "scale(1.08)"; el.style.boxShadow = "0 10px 28px rgba(0,0,0,0.25)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)"; }}>
                  <img src={`/${logo}`} alt={`Client ${i + 13}`} style={{ height: isMobile ? 30 : 40, width: "auto", maxWidth: isMobile ? 90 : 120, objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* M3 — SUCCESS STORIES */}
        <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N2} 0%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(0,201,167,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.02) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
          <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 48 }}>
              <SectionBadge label="Proven Results" />
              <SectionH2>Success <GradText>Stories</GradText></SectionH2>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 13 : 14, lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>Real results for real businesses across Canada, USA & UK.</p>
            </div>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: isMobile ? 30 : 40, flexWrap: "wrap" }}>
              {CASES.map((c, i) => (
                <button key={i} className={`ss-tab${story === i ? " act" : ""}`} onClick={() => setStory(i)}><span>{c.icon}</span>{c.industry}</button>
              ))}
            </div>
            <div key={story} style={{ background: "rgba(255,255,255,.02)", border: `1px solid ${CASES[story].tagBd}`, borderRadius: 24, overflow: "hidden", animation: "sbFadeUp .45s ease both" }}>
              <div style={{ height: 3, background: `linear-gradient(90deg,transparent,${CASES[story].tagClr},transparent)` }} />
              <div style={{ padding: isMobile ? "20px" : "36px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
                  <div style={{ width: isMobile ? 48 : 52, height: isMobile ? 48 : 52, borderRadius: 14, fontSize: isMobile ? 24 : 26, display: "flex", alignItems: "center", justifyContent: "center", background: CASES[story].tagBg, border: `1px solid ${CASES[story].tagBd}` }}>{CASES[story].icon}</div>
                  <span style={{ padding: isMobile ? "3px 12px" : "4px 14px", borderRadius: 100, fontSize: isMobile ? 10 : 12, fontWeight: 700, background: CASES[story].tagBg, border: `1px solid ${CASES[story].tagBd}`, color: CASES[story].tagClr, textTransform: "uppercase", letterSpacing: "0.08em" }}>{CASES[story].tag}</span>
                </div>
                <h3 style={{ color: "#fff", fontSize: isMobile ? "18px" : "22px", fontWeight: 800, marginBottom: isMobile ? 16 : 28, lineHeight: 1.3 }}>{CASES[story].title}</h3>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 16 : 20, marginBottom: isMobile ? 24 : 32 }}>
                  {[{ label: "Challenge", text: CASES[story].challenge, icon: "⚠️" }, { label: "Solution", text: CASES[story].solution, icon: "💡" }].map(col => (
                    <div key={col.label} style={{ padding: isMobile ? "14px" : "20px", borderRadius: 14, background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)" }}>
                      <p style={{ color: T, fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>{col.icon} {col.label}</p>
                      <p style={{ color: "rgba(255,255,255,.6)", fontSize: isMobile ? 12 : 14, lineHeight: 1.7, margin: 0 }}>{col.text}</p>
                    </div>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: isMobile ? 10 : 14 }}>
                  {CASES[story].metrics.map((m, i) => (
                    <div key={i} style={{ textAlign: "center", padding: isMobile ? "12px 8px" : "18px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
                      <div style={{ fontSize: isMobile ? 18 : 22, marginBottom: 6 }}>{m.i}</div>
                      <div style={{ fontSize: isMobile ? "20px" : "26px", fontWeight: 900, marginBottom: 4, background: `linear-gradient(135deg,#fff 30%,${T})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{m.v}</div>
                      <div style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 10 : 11 }}>{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
              {CASES.map((_, i) => (
                <button key={i} onClick={() => setStory(i)} style={{ width: story === i ? 24 : 8, height: 8, borderRadius: 100, background: story === i ? T : "rgba(255,255,255,.2)", border: "none", cursor: "pointer", transition: "all .3s ease" }} />
              ))}
            </div>
            {/* <div style={{ textAlign: "center", marginTop: isMobile ? 32 : 44 }}>
              <Link href="/case-studies" style={btnT}>View All Case Studies →</Link>
            </div> */}
          </div>
        </section>

        {/* M4 — SERVICES */}
        <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 60%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(0,201,167,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.025) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 48 }}>
              <SectionBadge label="What We Build" />
              <SectionH2>CRM DEVELOPMENT Services <GradText>We Offer</GradText></SectionH2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 13 : 14, lineHeight: 1.75, maxWidth: 580, margin: "0 auto" }}>A comprehensive lineup of CRM solutions for clients across Canada, USA & UK.</p>
            </div>
            <div className="svc-grid">
              {SERVICES.map((s, i) => (
                <Link key={s.title} href={``} style={{ textDecoration: "none" }}>
                  <div className="svc-card">
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                      <div style={{ width: isMobile ? 48 : 52, height: isMobile ? 48 : 52, borderRadius: 14, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 22 : 24, flexShrink: 0 }}>{s.icon}</div>
                      <span style={{ padding: "3px 10px", borderRadius: 100, fontSize: isMobile ? 9 : 10.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.18)" }}>{s.tag}</span>
                    </div>
                    <h3 style={{ fontSize: isMobile ? "15px" : "17px", fontWeight: 700, color: "#fff", lineHeight: 1.3, margin: 0 }}>{s.title}</h3>
                    <p style={{ fontSize: isMobile ? "12px" : "13.5px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                    {/* <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: T, fontSize: isMobile ? "12px" : "13px", fontWeight: 600, marginTop: "auto" }}>Learn More →</span> */}
                  </div>
                </Link>
              ))}
            </div>
            {/* <div style={{ textAlign: "center", marginTop: isMobile ? 32 : 48 }}>
              <Link href="/services" style={btnT}>View All Services →</Link>
            </div> */}
          </div>
        </section>

        {/* M5 — KEY BENEFITS */}
        <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(0,201,167,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.025) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 48 }}>
              <SectionBadge label="Why It Matters" />
              <SectionH2>Key Benefits of <GradText>CRM DEVELOPMENT</GradText></SectionH2>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 13 : 14, lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>Here's what you gain with advanced, next-gen CRM development services.</p>
            </div>
            <div className="kb-grid" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: isMobile ? 16 : 20 }}>
              {BENEFITS.map((b, i) => (
                <div key={i} className="wcu-stat" style={{ padding: isMobile ? "20px" : "28px 20px" }}>
                  <div style={{ fontSize: isMobile ? "32px" : "40px", marginBottom: 10 }}>{b.icon}</div>
                  <h3 style={{ color: "#fff", fontSize: isMobile ? "16px" : "18px", fontWeight: 800, marginBottom: 8 }}>{b.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.52)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.7, margin: "0 0 12px" }}>{b.desc}</p>
                  <div className="badge-row" style={{ justifyContent: "center" }}>
                    {b.tags.map(tag => <span key={tag} className="badge" style={{ fontSize: isMobile ? 9 : 10.5 }}>{tag}</span>)}
                  </div>
                </div>
              ))}
            </div>
            {/* <div style={{ textAlign: "center", marginTop: isMobile ? 32 : 48 }}>
              <Link href="/contact" style={btnT}>Start Your CRM Journey →</Link>
            </div> */}
          </div>
        </section>

        {/* M6 — PLATFORM TOOLS */}
        <section style={{ padding: getSectionPadding(), background: N1, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: isMobile ? 400 : 600, height: isMobile ? 300 : 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 48 }}>
              <SectionBadge label="Our Tech Stack" />
              <SectionH2>Leading Platform Tools <GradText>That We Use</GradText></SectionH2>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 13 : 14, lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>Here is a closer look at some of the tools we leverage for the best possible business outcomes.</p>
            </div>
            <div className="pt-grid">
              {TOOLS.map((tool, i) => (
                <div key={i} className="pt-card" style={{ background: tool.bg, border: `1px solid ${tool.bd}` }}>
                  <div className="pt-card__icon" style={{ border: `1px solid ${tool.bd}` }}>{tool.icon}</div>
                  <h3 style={{ color: "#fff", fontSize: isMobile ? "14px" : "16px", fontWeight: 700, marginBottom: 6 }}>{tool.name}</h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "11px" : "12.5px", lineHeight: 1.6, margin: 0 }}>{tool.purpose}</p>
                  {tool.bespoke && <div className="badge" style={{ marginTop: 10, fontSize: isMobile ? 9 : 10.5 }}>⚡ Fully Bespoke</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* M7 — HIRE DEVELOPERS */}
        <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 48 }}>
              <SectionBadge label="Hire Developers" />
              <SectionH2>Hire Developers <GradText>Tailored to Your Needs</GradText></SectionH2>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 13 : 14, lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>Whether you're an enterprise, start-up, or agency — we have the right CRM developer for your exact challenge.</p>
            </div>
            <div className="two-col" style={{ marginBottom: isMobile ? 12 : 16 }}>
              <p style={{ color: T, fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Left</p>
              <p style={{ color: T, fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Right</p>
            </div>
            <div className="two-col">
              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
                {HIRE_LEFT.map((item, i) => <AccItem key={item.title} item={item} open={hireL === i} toggle={() => setHireL(hireL === i ? null : i)} isMobile={isMobile} />)}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
                {HIRE_RIGHT.map((item, i) => <AccItem key={item.title} item={item} open={hireR === i} toggle={() => setHireR(hireR === i ? null : i)} isMobile={isMobile} />)}
              </div>
            </div>
            <div style={{ display: "flex", gap: isMobile ? 12 : 16, marginTop: isMobile ? 32 : 48, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/hire-developers" style={btnT}>📅 Hire a CRM Developer</Link>
              <Link href="/pricing" style={{ ...btnT, background: "transparent", border: "1.5px solid rgba(0,201,167,0.35)", color: T }}>View Pricing →</Link>
            </div>
          </div>
        </section>

        {/* M8 — AI-POWERED SOLUTIONS */}
        <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N2} 0%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "0%", left: "50%", transform: "translateX(-50%)", width: isMobile ? 600 : 700, height: isMobile ? 200 : 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ marginBottom: isMobile ? 32 : 40, maxWidth: 620, marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
              <SectionBadge label="AI-Powered" />
              <SectionH2>Leverage <GradText>AI-Powered CRM DEVELOPMENT</GradText> Solutions</SectionH2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 13 : 14, lineHeight: 1.8 }}>Our AI-backed CRM solutions aim at simplification and higher efficiency for your workflows.</p>
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

        {/* M9 — FULL-WIDTH CTA BANNER (Corrected: Single button, exact text) */}
        <section style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ background: "linear-gradient(135deg, #0055b3 0%, #0077cc 35%, #0055b3 100%)", backgroundSize: "300% 300%", animation: "ctaBgShift 8s ease infinite", padding: isMobile ? "60px 20px" : "80px 48px", textAlign: "center", position: "relative" }}>
            <div style={{ position: "absolute", top: "-20%", left: "-5%", width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.1) 0%,transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-20%", right: "-5%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 2, maxWidth: isMobile ? "100%" : 800, margin: "0 auto" }}>
              <h2 style={{ fontSize: isMobile ? "clamp(22px, 6vw, 28px)" : isTablet ? "32px" : "clamp(36px, 4vw, 48px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Want <span style={{ textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.4)" }}>CRM DEVELOPMENT solutions</span> that take your business to the next level?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: isMobile ? "16px" : "18px", lineHeight: 1.6, marginBottom: isMobile ? 28 : 36, fontWeight: 500 }}>
                Connect with NNC Digital today.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link href="/contact" className="btn-white">Connect Now</Link>
              </div>
            </div>
          </div>
        </section>

        {/* M10 — WHY CHOOSE US (Video Removed) */}
        <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "20%", right: "-5%", width: isMobile ? 200 : 400, height: isMobile ? 200 : 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div className="two-col-wide">
              <div>
                <SectionBadge label="Our Story" />
                <SectionH2>Why Choose Us as Your <GradText>Partner?</GradText></SectionH2>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "13px" : "15px", lineHeight: 1.8, marginBottom: 16 }}>Backed by <span style={{ color: "#fff", fontWeight: 600 }}>Nakshatra Namaha Creations Pvt. Ltd.</span> — one of Bangalore&apos;s most respected digital studios with <span style={{ color: T, fontWeight: 600 }}>8+ years of experience</span> and <span style={{ color: T, fontWeight: 600 }}>565+ projects delivered</span>.</p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "13px" : "15px", lineHeight: 1.8, marginBottom: isMobile ? 24 : 32 }}>We launched NNC Digital as our international arm — bringing the same proven technical expertise to the Canadian, US, and UK markets with dedicated client-facing teams, transparent pricing, and long-term partnership.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 8 : 10, marginBottom: isMobile ? 24 : 36 }}>
                  {WCU_POINTS.map((p, i) => (
                    <div key={i} className="wcu-point">
                      <span style={{ fontSize: isMobile ? 16 : 18, flexShrink: 0 }}>{p.icon}</span>
                      <span style={{ color: "rgba(255,255,255,0.72)", fontSize: isMobile ? "12px" : "14px", fontWeight: 500 }}>{p.text}</span>
                    </div>
                  ))}
                </div>
                <div className="wcu-stats">
                  {WCU_STATS.map(st => (
                    <div key={st.l} className="wcu-stat">
                      <div style={{ fontSize: isMobile ? "18px" : "24px", fontWeight: 900, marginBottom: 4, background: `linear-gradient(135deg,#fff 30%,${T})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}><Counter to={st.n} sfx={st.s} /></div>
                      <div style={{ fontSize: isMobile ? 10 : 11, color: "rgba(255,255,255,.4)" }}>{st.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                {/* Video removed - replaced with CTA card */}
                <div style={{ background: "rgba(0,201,167,0.05)", border: "1px solid rgba(0,201,167,0.15)", borderRadius: 24, padding: isMobile ? "30px 20px" : "40px 30px", textAlign: "center" }}>
                  <div style={{ fontSize: isMobile ? 48 : 64, marginBottom: 16 }}>💼</div>
                  <h3 style={{ color: "#fff", fontSize: isMobile ? "20px" : "24px", fontWeight: 800, marginBottom: 12 }}>Ready to Transform Your CRM?</h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "14px" : "16px", lineHeight: 1.7, marginBottom: 24 }}>
                    Join 1500+ businesses that have streamlined their operations with our custom CRM solutions.
                  </p>
                  <Link href="/contact" style={{ ...btnT, width: isMobile ? "100%" : "auto" }}>Get Started Today →</Link>
                </div>
                <div className="badge-row" style={{ marginTop: 20 }}>
                  {["🇨🇦 Canada", "🇺🇸 USA", "🇬🇧 UK", "🇮🇳 India"].map(b => (
                    <span key={b} className="badge" style={{ fontSize: isMobile ? 11 : 12.5, padding: isMobile ? "5px 10px" : "6px 14px" }}>{b}</span>
                  ))}
                </div>
                <div style={{
                  display: "flex",
                  gap: isMobile ? 10 : 12,
                  marginTop: 20,
                  justifyContent: "center",
                  flexWrap: "wrap"
                }}>
                  <Link
                    href="/book-consultation"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: isMobile ? "6px 16px" : "8px 20px",
                      borderRadius: 30,
                      border: "none",
                      background: `linear-gradient(135deg,${T},${TD})`,
                      color: "#000",
                      fontWeight: 500,
                      fontSize: isMobile ? "12px" : "13px",
                      fontFamily: "'Poppins',sans-serif",
                      cursor: "pointer",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      width: "auto",
                      minWidth: "100px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      letterSpacing: "0.3px"
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,201,167,0.25)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                    }}
                  >
                    📅 Book a Strategy Call
                  </Link>
                  {/* <Link href="/portfolio" style={{ ...btnT, background: "transparent", border: "1.5px solid rgba(0,201,167,0.35)", color: T, flex: 1 }}>Our Portfolio →</Link> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MODULE 11 — GLOBAL PRESENCE — Dark blue tabs (Enhanced Design) */}
        <section style={{ padding: getSectionPadding(), background: `linear-gradient(145deg, ${N0} 0%, #041628 50%, ${N1} 100%)`, position: "relative", overflow: "hidden" }}>

          {/* Background decorative elements */}
          <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "300px", height: "300px", borderRadius: "50%", background: `radial-gradient(circle, ${T}15 0%, transparent 70%)`, pointerEvents: "none", zIndex: 0 }} />
          <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: "250px", height: "250px", borderRadius: "50%", background: `radial-gradient(circle, ${T}10 0%, transparent 70%)`, pointerEvents: "none", zIndex: 0 }} />

          {/* Grid overlay */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(0,201,167,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,201,167,0.02) 1px, transparent 1px)`, backgroundSize: "60px 60px", pointerEvents: "none", zIndex: 0 }} />

          <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>


            {/* Heading with gradient and underline */}
            <h2 style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              color: "#fff",
              textAlign: "center",
              margin: "0 0 20px 0",
              letterSpacing: "-0.02em"
            }}>
              Global <span style={{ background: `linear-gradient(135deg, ${T}, #fff)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Presence</span>
            </h2>
            <div style={{ width: "120px", height: "4px", background: `linear-gradient(90deg, transparent, ${T}, transparent)`, margin: "0 auto 40px", borderRadius: "2px" }} />

            {/* Tabs with enhanced styling */}
            <div style={{ display: "flex", gap: isMobile ? 8 : 12, justifyContent: "center", marginBottom: isMobile ? 30 : 40, flexWrap: "wrap" }}>
              {[
                { key: "int", label: "North America & UK", icon: "🌎" },
                { key: "india", label: "India (HQ)", icon: "🇮🇳" }
              ].map(t => (
                <button
                  key={t.key}
                  className={`gp-tab${gTab === t.key ? " act" : ""}`}
                  onClick={() => setGTab(t.key as "int" | "india")}
                  style={{
                    padding: isMobile ? "12px 24px" : "14px 32px",
                    borderRadius: "50px",
                    border: "none",
                    background: gTab === t.key ? `linear-gradient(135deg, ${T}, ${TD})` : "rgba(255,255,255,0.05)",
                    color: gTab === t.key ? "#000" : "#fff",
                    fontSize: isMobile ? 14 : 16,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: gTab === t.key ? `0 8px 20px ${T}40` : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    backdropFilter: "blur(10px)"
                  }}
                  onMouseEnter={e => {
                    if (gTab !== t.key) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (gTab !== t.key) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }
                  }}
                >
                  <span>{t.icon}</span> {t.label}
                </button>
              ))}
            </div>

            {/* Content Cards */}
            {gTab === "int" && (
              <div style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                borderRadius: 24,
                padding: isMobile ? 24 : 36,
                border: `1px solid ${T}20`,
                backdropFilter: "blur(10px)",
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.5)"
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    { city: "Toronto, Canada", phone: "+1 647-XXX-XXXX", flag: "🇨🇦" },
                    { city: "New York, USA", phone: "+1 631-XXX-XXXX", flag: "🇺🇸" },
                    { city: "London, UK", phone: "+44 20-XXXX-XXXX", flag: "🇬🇧" }
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "16px",
                      background: "rgba(255,255,255,0.02)",
                      borderRadius: 16,
                      border: "1px solid rgba(255,255,255,0.05)",
                      transition: "all 0.3s ease",
                      cursor: "default"
                    }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = "translateX(8px)";
                        e.currentTarget.style.background = `${T}08`;
                        e.currentTarget.style.borderColor = `${T}40`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = "translateX(0)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                      }}>
                      <div style={{
                        width: 48,
                        height: 48,
                        borderRadius: "14px",
                        background: `${T}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 24
                      }}>
                        {item.flag}
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontWeight: 600, fontSize: isMobile ? 15 : 16, color: "#fff", margin: 0, marginBottom: 4 }}>
                          {item.city}
                        </p>
                        <p style={{ color: T, fontSize: isMobile ? 14 : 15, fontWeight: 500, margin: 0 }}>
                          {item.phone}
                        </p>
                      </div>
                      <span style={{ color: T, fontSize: 20, opacity: 0.5 }}>■■</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {gTab === "india" && (
              <div style={{
                background: `linear-gradient(145deg, ${T}05, ${T}02)`,
                borderRadius: 24,
                padding: isMobile ? 24 : 36,
                border: `1px solid ${T}30`,
                backdropFilter: "blur(10px)",
                boxShadow: `0 20px 40px -15px ${T}20`
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "16px",
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.05)",
                    transition: "all 0.3s ease"
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateX(8px)";
                      e.currentTarget.style.background = `${T}10`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    }}>
                    <div style={{ width: 48, height: 48, borderRadius: "14px", background: `${T}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>🇮🇳</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 600, fontSize: isMobile ? 15 : 16, color: "#fff", margin: 0, marginBottom: 4 }}>Bangalore HQ</p>
                      <p style={{ color: T, fontSize: isMobile ? 14 : 15, fontWeight: 500, margin: 0 }}>+91 9900566466</p>
                    </div>
                    <span style={{ color: T, fontSize: 20, opacity: 0.5 }}>■■</span>
                  </div>

                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "16px",
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.05)",
                    transition: "all 0.3s ease"
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateX(8px)";
                      e.currentTarget.style.background = `${T}10`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    }}>
                    <div style={{ width: 48, height: 48, borderRadius: "14px", background: `${T}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>🇮🇳</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 600, fontSize: isMobile ? 15 : 16, color: "#fff", margin: 0 }}>Mysore | Mumbai | Hyderabad</p>
                    </div>
                    <span style={{ color: T, fontSize: 20, opacity: 0.5 }}>■■</span>
                  </div>

                  <div style={{
                    marginTop: 20,
                    padding: "20px",
                    background: `${T}08`,
                    borderRadius: 16,
                    border: `1px dashed ${T}40`,
                    textAlign: "center"
                  }}>
                    <span style={{ color: T, fontSize: isMobile ? 14 : 16, fontWeight: 600, letterSpacing: "0.5px" }}>
                      ✉ info@nakshatranamahacreations.com
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Decorative bottom dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 40 }}>
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: T, opacity: 0.2 + (i * 0.1) }} />
              ))}
            </div>
          </div>
        </section>



        {/* M12 — FAQ (Corrected: 5 questions as per document) */}
        <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 40 }}>
              <SectionBadge label="FAQs" />
              <SectionH2>FAQs</SectionH2>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? "13px" : "15px", lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>Everything you need to know about custom CRM development for businesses in Canada, USA & UK.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
              {FAQS.map((f, i) => (
                <div key={i} className={`faq-item${faq === i ? " fopen" : ""}`} onClick={() => setFaq(faq === i ? null : i)}>
                  <div className="faq-item__q">
                    <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 14 }}>
                      <span className="faq-item__tag">Q{i + 1}</span>
                      <span className="faq-item__text">{f.q}</span>
                    </div>
                    <div className="faq-item__icon">+</div>
                  </div>
                  <div className="faq-item__a">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: isMobile ? 32 : 40 }}>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? 12 : 14, marginBottom: 16 }}>Still have questions? We respond within 24 hours.</p>
              <Link href="/contact" style={btnT}>Ask Us Anything →</Link>
            </div>
          </div>
        </section>

        {/* M13 — CONTACT FORM (Corrected: "Name" field, exact heading) */}
        <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N2} 0%,${N0} 100%)`, position: "relative", overflow: "hidden" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 40 }}>
              <SectionBadge label="Get In Touch" />
              <SectionH2>Ready to Build <GradText>Next-Level</GradText> Custom Digital Solutions?</SectionH2>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? "13px" : "15px", lineHeight: 1.75, maxWidth: 540, margin: "0 auto" }}>Tell us about your project. We respond within 24 hours with a free consultation and honest advice.</p>
            </div>
            <div className="cf-grid">
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: isMobile ? "20px" : "36px" }}>
                {cSubmitted ? (
                  <div style={{ textAlign: "center", padding: isMobile ? "20px 0" : "40px 0" }}>
                    <div style={{ fontSize: isMobile ? 48 : 56, marginBottom: 16 }}>✅</div>
                    <h3 style={{ color: "#fff", fontSize: isMobile ? 18 : 22, fontWeight: 800, marginBottom: 8 }}>Message Sent!</h3>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 13 : 15, lineHeight: 1.7, marginBottom: 20 }}>Thank you — we&apos;ll respond within 24 hours with practical advice.</p>
                    <Link href="/crm-development">
                      <button onClick={() => { setCSubmitted(false); setCForm({ name: "", phone: "", dialCode: "+1", email: "", service: "", project: "", }); }} style={{ ...btnT, minWidth: "auto", padding: isMobile ? "10px 22px" : "12px 28px", fontSize: isMobile ? "13px" : "14px" }}>Send Another →</button>
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleCSubmit}>
                    <div className="cf-name" style={{ marginBottom: isMobile ? 12 : 16 }}>
                      <div><p style={{ fontSize: isMobile ? 11 : 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.04em" }}>Name *</p><input className="fi" style={iSLg} required placeholder="Jane Smith" value={cForm.name} onChange={e => setCF("name", e.target.value)} /></div>
                      <div>
                        <p style={{ fontSize: isMobile ? 11 : 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.04em" }}>Phone</p>
                        <div className="phone-row">
                          <select className="fi" style={{ width: isMobile ? "100%" : "90px", padding: isMobile ? "12px 14px" : "13px 8px" }} value={cForm.dialCode} onChange={e => setCF("dialCode", e.target.value)}>
                            {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                          </select>
                          <input className="fi" style={iSLg} type="tel" placeholder="647 XXX XXXX" value={cForm.phone} onChange={e => setCF("phone", e.target.value)} />
                        </div>
                      </div>
                    </div>
                    <div style={{ marginBottom: isMobile ? 12 : 16 }}><p style={{ fontSize: isMobile ? 11 : 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.04em" }}>Business Email *</p><input className="fi" style={iSLg} required type="email" placeholder="jane@yourcompany.com" value={cForm.email} onChange={e => setCF("email", e.target.value)} /></div>
                    <div style={{ marginBottom: isMobile ? 12 : 16 }}>
                      <p style={{ fontSize: isMobile ? 11 : 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.04em" }}>Service of Interest</p>
                      <select className="fi" style={{ ...iSLg, cursor: "pointer" }} value={cForm.service} onChange={e => setCF("service", e.target.value)}>
                        <option value="">Select a service...</option>
                        {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div style={{ marginBottom: 20 }}><p style={{ fontSize: isMobile ? 11 : 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.04em" }}>Project Description</p><textarea className="fi" style={{ ...iSLg, minHeight: isMobile ? 80 : 110, resize: "vertical" }} placeholder="Briefly describe your project, goals, and timeline..." value={cForm.project} onChange={e => setCF("project", e.target.value)} /></div>
                    <button className="btn-teal" type="submit" disabled={cLoading} style={{ width: "100%", padding: "15px", opacity: cLoading ? .6 : 1, cursor: cLoading ? "wait" : "pointer" }}>{cLoading ? "Sending..." : "Submit — Get Free Consultation →"}</button>
                    <p style={{ color: "rgba(255,255,255,0.3)", fontSize: isMobile ? 10 : 11.5, textAlign: "center", marginTop: 12 }}>🔒 Your information is 100% secure and never shared.</p>
                  </form>
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 16 : 20 }}>
                <div style={{ background: "rgba(0,201,167,0.05)", border: "1px solid rgba(0,201,167,0.18)", borderRadius: 18, padding: isMobile ? "20px" : "28px" }}>
                  <h3 style={{ color: "#fff", fontSize: isMobile ? "15px" : "16px", fontWeight: 800, marginBottom: isMobile ? 14 : 18 }}>What Happens After You Submit?</h3>
                  {[{ s: "1", text: "We review your project within a few hours — no bots." }, { s: "2", text: "A senior consultant calls you within 24 hours." }, { s: "3", text: "We send a free scoping document with timeline & cost." }, { s: "4", text: "You decide — no pressure, no obligation." }].map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: isMobile ? 10 : 14, alignItems: "flex-start", marginBottom: i < 3 ? (isMobile ? 12 : 16) : 0, padding: isMobile ? "8px 12px" : "12px 14px", borderRadius: 10, background: "rgba(255,255,255,0.03)" }}>
                      <div style={{ width: isMobile ? 28 : 32, height: isMobile ? 28 : 32, borderRadius: "50%", flexShrink: 0, background: `linear-gradient(135deg,${T},${TD})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 10 : 11, fontWeight: 900, color: "#000" }}>{step.s}</div>
                      <p style={{ color: "rgba(255,255,255,0.65)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.6, margin: 0 }}>{step.text}</p>
                    </div>
                  ))}
                </div>
                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: isMobile ? "20px" : "26px" }}>
                  <h3 style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: isMobile ? 14 : 18 }}>Direct Contacts</h3>
                  {[
                    { flag: "🇺🇸", label: "USA", phone: "+1 631-XXX-XXXX" },
                    { flag: "🇨🇦", label: "Canada", phone: "+1 647-XXX-XXXX" },
                    { flag: "🇬🇧", label: "UK", phone: "+44 20-XXXX-XXXX" }
                  ].map((c, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: isMobile ? "8px 0" : "12px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none", flexWrap: "wrap", gap: 8 }}>
                      <span style={{ color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "12px" : "14px", fontWeight: 500 }}>{c.flag} {c.label}</span>
                      <Link href={`tel:${c.phone.replace(/\s|-/g, "")}`} className="h-teal" style={{ color: T, fontSize: isMobile ? "12px" : "14px", fontWeight: 700, textDecoration: "none" }}>{c.phone}</Link>
                    </div>
                  ))}
                  <div style={{ marginTop: isMobile ? 12 : 16, paddingTop: isMobile ? 12 : 16, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <Link href="mailto:hello@nncdigital.com" className="h-teal" style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "12px" : "14px", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>✉️ hello@nncdigital.com</Link>
                  </div>
                </div>
                <div className="badge-row">
                  {["🔵 Google Partner", "🏆 ISO Certified", "🔒 GDPR Compliant", "🍁 PIPEDA Ready", "⭐ Clutch Top Agency"].map(b => (
                    <span key={b} className="badge" style={{ fontSize: isMobile ? 10 : 12, padding: isMobile ? "4px 10px" : "6px 12px" }}>{b}</span>
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