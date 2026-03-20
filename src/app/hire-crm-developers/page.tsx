
"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { getServiceSchema } from "../lib/schema";
import SchemaMarkup from "../components/SchemaMarkup";
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
  { icon: "👨‍💻", title: "Full-Time Dedicated Developer (160 hrs/mo)", desc: "Tailored for businesses in Canada, USA & UK.", tag: "Full-Time" },
  { icon: "⏱️", title: "Part-Time Dedicated Developer (80 hrs/mo)", desc: "Tailored for businesses in Canada, USA & UK.", tag: "Part-Time" },
  { icon: "📋", title: "Project-Based Engagement", desc: "Tailored for businesses in Canada, USA & UK.", tag: "Project" },
  { icon: "💼", title: "CRM Consulting Retainer", desc: "Tailored for businesses in Canada, USA & UK.", tag: "Consulting" },
];

const BENEFITS = [
  { num: "01", icon: "✅", title: "Vetted Developers", desc: "Every developer passes technical assessments, code reviews, and soft-skill interviews. 98% trial-to-hire success rate.", tags: ["3-Step Vetting", "Technical Tests", "Culture Fit"] },
  { num: "02", icon: "🔄", title: "Flexible Models", desc: "Full-time, part-time, project-based, or retainer. Scale up or down as your needs change — no long-term lock-in.", tags: ["Full-Time", "Part-Time", "Project"] },
  { num: "03", icon: "🌎", title: "Time Zone Overlap", desc: "Developers work overlapping hours with Canada, USA & UK time zones. Morning standups, real-time collaboration, and async updates.", tags: ["4+ Hours Overlap", "Real-Time", "Flexible"] },
  { num: "04", icon: "⚡", title: "Start in 48 Hours", desc: "Submit a brief, interview candidates, and have a developer starting within 48 hours. Urgent projects move even faster.", tags: ["Quick Start", "48hr Turnaround", "Urgent OK"] },
];

const TOOLS = [
  { icon: "☁️", name: "Salesforce", purpose: "Enterprise-grade integration.", clr: "rgba(0,161,224,.08)", bd: "rgba(0,161,224,.22)" },
  { icon: "🟠", name: "HubSpot", purpose: "Best-in-class for performance.", clr: "rgba(255,122,0,.08)", bd: "rgba(255,122,0,.22)" },
  { icon: "🦎", name: "Zoho CRM", purpose: "Enterprise-grade integration.", clr: "rgba(200,50,80,.08)", bd: "rgba(200,50,80,.22)" },
  { icon: "🏢", name: "MS Dynamics 365", purpose: "Best-in-class for performance.", clr: "rgba(0,120,215,.08)", bd: "rgba(0,120,215,.22)" },
  { icon: "📈", name: "Pipedrive", purpose: "Enterprise-grade integration.", clr: "rgba(0,150,130,.08)", bd: "rgba(0,150,130,.22)" },
  { icon: "⚛️", name: "Custom CRM (React/Node)", purpose: "Best-in-class for performance.", clr: "rgba(97,218,251,.08)", bd: "rgba(97,218,251,.22)" },
  { icon: "🐍", name: "Custom CRM (Python/Django)", purpose: "Enterprise-grade integration.", clr: "rgba(53,114,165,.08)", bd: "rgba(53,114,165,.22)" },
  { icon: "🐘", name: "Custom CRM (Laravel/PHP)", purpose: "Best-in-class for performance.", clr: "rgba(255,45,32,.08)", bd: "rgba(255,45,32,.22)" },
  { icon: "💬", name: "WhatsApp API", purpose: "Enterprise-grade integration.", clr: "rgba(37,211,102,.08)", bd: "rgba(37,211,102,.22)" },
  { icon: "🔌", name: "REST & GraphQL", purpose: "Best-in-class for API integration.", clr: "rgba(226,77,141,.08)", bd: "rgba(226,77,141,.22)" },
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
    a: "Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process."
  },
  {
    q: "What CRM platforms do your developers work with?",
    a: "Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process."
  },
  {
    q: "Can I trial a developer before committing?",
    a: "Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process."
  },
  {
    q: "What does a dedicated CRM developer cost per month?",
    a: "Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process."
  },
];

const INT_OFFICES = [
  { city: "Toronto, Canada — +1 647-XXX-XXXX", flag: "🇨🇦", bullet: "■■" },
  { city: "New York, USA — +1 631-XXX-XXXX", flag: "🇺🇸", bullet: "■■" },
  { city: "London, UK — +44 20-XXXX-XXXX", flag: "🇬🇧", bullet: "■■" },
];

const INDIA_OFFICES = [
  { city: "Bangalore HQ — +91 9900566466", flag: "🇮🇳", bullet: "■■" },
  { city: "Mysore | Mumbai | Hyderabad", flag: "🇮🇳", bullet: "■■" },
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
  const serviceSchema = getServiceSchema(
    "Hire CRM Developers",
    "Hire Dedicated CRM Developers for Your Business in Canada, USA & UK. Need experienced CRM developers without building an in-house team? NNC Digital provides dedicated developers who integrate with your workflow and deliver results — from Salesforce to HubSpot to custom CRM."
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
  const isDesktop = windowWidth > 1024;

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

  const [cForm, setCForm] = useState({ name: "", phone: "", dialCode: "+1", email: "", service: "", project: "" });
  const [cSubmitted, setCSubmitted] = useState(false);
  const [cLoading, setCLoading] = useState(false);
  const setCF = (k: string, v: string) => setCForm(f => ({ ...f, [k]: v }));
  const handleCSubmit = (e: React.FormEvent) => { e.preventDefault(); setCLoading(true); setTimeout(() => { setCLoading(false); setCSubmitted(true); }, 1200); };

  // Responsive styles
  const getSectionPadding = () => {
    if (isMobile) return "20px, 20px";
    if (isTablet) return "80px 32px";
    return "20px 48px";
  };

  const getHeroPadding = () => {
    if (isMobile) return "2px 20px 60px";
    if (isTablet) return "80px 32px 70px";
    return "90px 48px 80px";
  };

  const getGridColumns = (mobile: number, tablet: number, desktop: number) => {
    if (isMobile) return `repeat(${mobile}, 1fr)`;
    if (isTablet) return `repeat(${tablet}, 1fr)`;
    return `repeat(${desktop}, 1fr)`;
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

  return (
    <>
      <Navbar />
      <SchemaMarkup schema={serviceSchema} id="hire-crm-developers-schema" />
      <style jsx global>{`
        @keyframes heroFadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes heroGlow { 0%,100% { box-shadow: 0 0 20px rgba(0,201,167,.15); } 50% { box-shadow: 0 0 40px rgba(0,201,167,.38); } }
        @keyframes heroBlink { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes heroPulse { 0%,100% { opacity: .2; transform: scale(1); } 50% { opacity: .4; transform: scale(1.05); } }
        @keyframes heroSpin { from { transform: translateY(-50%) rotate(0deg); } to { transform: translateY(-50%) rotate(360deg); } }
        @keyframes heroScan { 0% { top: 0; } 100% { top: 100%; } }
        @keyframes sbFadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes wcuPulse { 0%,100% { transform: scale(1); box-shadow: 0 0 20px var(--teal); } 50% { transform: scale(1.1); box-shadow: 0 0 40px var(--teal); } }
        @keyframes ctaBgShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        
        .btn-teal {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .btn-teal:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(0,201,167,0.5);
        }
        
        .cl-track {
          display: flex;
          gap: 40px;
          animation: marquee 30s linear infinite;
          width: fit-content;
        }
        .cl-track:hover { animation-play-state: paused; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 960px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .svc-grid { grid-template-columns: 1fr !important; }
        }
        
        .svc-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 20px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: all 0.3s ease;
          animation: sbFadeUp 0.5s ease both;
        }
        .svc-card:hover {
          transform: translateY(-6px);
          border-color: ${T};
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .svc-card:hover .svc-icon {
          transform: scale(1.1);
          background: rgba(0,201,167,0.2);
        }
        
        .kb-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 960px) {
          .kb-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .kb-grid { grid-template-columns: 1fr !important; }
        }
        
        .kb-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 20px;
          padding: 24px;
          display: flex;
          gap: 16px;
          transition: all 0.3s ease;
          animation: sbFadeUp 0.5s ease both;
        }
        .kb-card:hover {
          transform: translateY(-4px);
          border-color: ${T};
        }
        
        .pt-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        @media (max-width: 1024px) {
          .pt-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .pt-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .pt-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        
        .pt-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          padding: 20px 16px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .pt-card:hover {
          transform: translateY(-4px);
          border-color: ${T};
        }
        .pt-card:hover .pt-icon {
          transform: scale(1.1);
        }
        
        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
        
        .two-col-wide {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 960px) {
          .two-col-wide { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        
        .ai-feat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 960px) {
          .ai-feat-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .ai-feat-grid { grid-template-columns: 1fr !important; }
        }
        
        .gp-offices {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 768px) {
          .gp-offices { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .gp-offices { grid-template-columns: 1fr !important; }
        }
        
        .gp-card {
          padding: 24px;
          border-radius: 18px;
          background: rgba(0,201,167,0.05);
          border: 1px solid rgba(0,201,167,0.18);
          transition: all 0.25s;
        }
        .gp-card:hover {
          transform: translateY(-4px);
          border-color: ${T};
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        
        .cf-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        @media (max-width: 768px) {
          .cf-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
        
        .cf-name {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 480px) {
          .cf-name { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
        
        .hero-layout {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 3;
          padding: 0 24px;
        }
        @media (max-width: 768px) {
          .hero-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        
        .wcu-point {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          transition: all 0.2s;
        }
        .wcu-point:hover {
          border-color: ${T};
          background: rgba(0,201,167,0.05);
        }
        
        .wcu-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        @media (max-width: 640px) {
          .wcu-stats { grid-template-columns: repeat(2, 1fr) !important; }
        }
        
        .wcu-stat {
          text-align: center;
          padding: 22px 14px;
          border-radius: 14px;
          border: 1px solid rgba(0,201,167,0.15);
          background: rgba(0,201,167,0.05);
          transition: all 0.25s;
        }
        .wcu-stat:hover {
          transform: translateY(-4px);
          background: rgba(0,201,167,0.12);
        }
        
        .faq-item {
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          background: rgba(255,255,255,0.02);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .faq-item.fopen {
          border-color: rgba(0,201,167,0.4);
          background: rgba(0,201,167,0.06);
        }
        
        .ss-tab {
          padding: 8px 18px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          color: rgba(255,255,255,0.6);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .ss-tab.act {
          background: rgba(0,201,167,0.15);
          border-color: ${T};
          color: ${T};
        }
        
        .gp-tab {
          padding: 11px 24px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          color: rgba(255,255,255,0.55);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.22s;
        }
        .gp-tab:hover {
          border-color: ${T}50;
          color: ${T};
        }
        .gp-tab.act {
          border-color: ${T}80;
          background: rgba(0,201,167,0.12);
          color: ${T};
          box-shadow: 0 4px 20px rgba(0,201,167,0.12);
        }
        
        .h-teal:hover {
          color: ${T} !important;
        }
      `}</style>

      {/* M1 — HERO + INLINE LEAD FORM */}
      <section style={{
        padding: getHeroPadding(),
        background: `linear-gradient(135deg,${N0} 0%,#041628 45%,${N0} 100%)`,
        position: "relative",
        overflow: "hidden",
        minHeight: isMobile ? "auto" : "90vh",
        display: "flex",
        alignItems: "center"
      }}>
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
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.25)", borderRadius: 100, padding: isMobile ? "6px 14px" : "7px 18px", marginBottom: isMobile ? 20 : 28, animation: "heroGlow 3s ease-in-out infinite" }}>
              <span style={{ width: isMobile ? 6 : 7, height: isMobile ? 6 : 7, borderRadius: "50%", background: T, boxShadow: `0 0 10px ${T}`, animation: "heroBlink 1.4s ease-in-out infinite" }} />
              <span style={{ color: T, fontSize: isMobile ? 10 : 11.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>Hire CRM Developers — Canada, USA &amp; UK</span>
            </div>
            <h1 style={{ fontSize: isMobile ? "32px" : isTablet ? "42px" : "54px", fontWeight: 900, lineHeight: 1.12, marginBottom: isMobile ? 16 : 22, letterSpacing: "-0.025em", color: "#fff" }}>
              Hire Dedicated <GradText>CRM Developers</GradText><br />for Your Business in Canada, USA &amp; UK
            </h1>
            <p style={{ color: "rgba(255,255,255,0.52)", fontSize: isMobile ? "14px" : isTablet ? "15px" : "16.5px", lineHeight: 1.85, marginBottom: isMobile ? 20 : 28, maxWidth: isMobile ? "100%" : 600 }}>
              Need experienced CRM developers without building an in-house team? NNC Digital provides dedicated developers who integrate with your workflow and deliver results.
            </p>

            {/* <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: isMobile ? 20 : 28 }}>
              {[{ i: "👨‍💻", l: "Full-Time (160hrs/mo)" }, { i: "⏱️", l: "Part-Time (80hrs/mo)" }, { i: "📋", l: "Project-Based" }, { i: "💼", l: "Retainer" }].map(b => (
                <span key={b.l} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: isMobile ? "5px 12px" : "6px 14px", borderRadius: 100, border: "1px solid rgba(0,201,167,0.25)", background: "rgba(0,201,167,0.06)", color: "rgba(255,255,255,0.8)", fontSize: isMobile ? "11px" : "12.5px", fontWeight: 600 }}>{b.i} {b.l}</span>
              ))}
            </div> */}

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: isMobile ? 24 : 36 }}>
              {[{ i: "🔵", l: "Google Partner" }, { i: "🏆", l: "ISO Certified" }, { i: "🔒", l: "GDPR Compliant" }, { i: "🍁", l: "PIPEDA Ready" }, { i: "⭐", l: "Clutch Top Agency" }].map(b => (
                <span key={b.l} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: isMobile ? "5px 12px" : "6px 13px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.65)", fontSize: isMobile ? "11px" : "12.5px", fontWeight: 600 }}>{b.i} {b.l}</span>
              ))}
            </div>
            {/* <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {[{ flag: "🇨🇦", label: "CA:", phone: "+1 647-XXX-XXXX" }, { flag: "🇬🇧", label: "UK:", phone: "+44 20-XXXX-XXXX" }].map(p => (
                <a key={p.phone} href={`tel:${p.phone.replace(/\s|-/g, "")}`} className="h-teal" style={{ display: "flex", alignItems: "center", gap: 7, color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "12px" : "13.5px", fontWeight: 600, textDecoration: "none", transition: "color .2s" }}>
                  <span>{p.flag}</span><span style={{ color: "rgba(255,255,255,0.3)" }}>{p.label}</span><span style={{ color: T }}>{p.phone}</span>
                </a>
              ))}
            </div> */}
          </div>

          {/* Hero Form */}
          <div style={{ background: "rgba(8,20,40,0.85)", border: "1px solid rgba(0,201,167,0.22)", borderRadius: 20, padding: isMobile ? "24px 20px" : "32px 28px", backdropFilter: "blur(16px)", boxShadow: "0 32px 80px rgba(0,0,0,0.5),0 0 40px rgba(0,201,167,0.06)", position: "relative", overflow: "hidden", animation: "heroFadeUp .7s ease .15s both" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${T},transparent)` }} />
            {submitted ? (
              <div style={{ textAlign: "center", padding: isMobile ? "30px 0" : "40px 0" }}>
                <div style={{ fontSize: isMobile ? 44 : 52, marginBottom: 16 }}>✅</div>
                <h3 style={{ color: "#fff", fontSize: isMobile ? 18 : 20, fontWeight: 800, marginBottom: 10 }}>Request Received!</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 13 : 14, lineHeight: 1.7, marginBottom: 24 }}>We&apos;ll contact you within 24 hours to discuss your developer needs.</p>
                <Link href="/hire-crm-developers">
                  <button onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", phone: "", dialCode: "+1", email: "", service: "", message: "" }); }} style={{ padding: isMobile ? "10px 22px" : "11px 26px", borderRadius: 9, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: isMobile ? "13px" : "14px", fontFamily: "'Poppins',sans-serif", cursor: "pointer" }}>Send Another →</button>
                </Link>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: 20 }}>
                  <p style={{ color: T, fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 4 }}>Hire a Developer</p>
                  <h2 style={{ color: "#fff", fontSize: isMobile ? 16 : 18, fontWeight: 800, margin: 0, lineHeight: 1.3 }}>Get a Free Developer Match in 24 Hours</h2>
                </div>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
                  <div className="cf-name">
                    <div><label style={{ display: "block", fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>First Name *</label><input className="fi" required style={iS} placeholder="Jane" value={form.firstName} onChange={e => setF("firstName", e.target.value)} /></div>
                    <div><label style={{ display: "block", fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Last Name</label><input className="fi" style={iS} placeholder="Smith" value={form.lastName} onChange={e => setF("lastName", e.target.value)} /></div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Phone</label>
                    <div style={{ display: "flex", gap: 8, flexDirection: isMobile ? "column" : "row" }}>
                      <select style={{ ...iS, width: isMobile ? "100%" : 82, flexShrink: 0, padding: isMobile ? "10px 12px" : "11px 6px", cursor: "pointer" }} value={form.dialCode} onChange={e => setF("dialCode", e.target.value)}>
                        {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                      </select>
                      <input className="fi" style={iS} type="tel" placeholder="647 XXX XXXX" value={form.phone} onChange={e => setF("phone", e.target.value)} />
                    </div>
                  </div>
                  <div><label style={{ display: "block", fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Business Email *</label><input className="fi" required type="email" style={iS} placeholder="jane@company.com" value={form.email} onChange={e => setF("email", e.target.value)} /></div>
                  <div>
                    <label style={{ display: "block", fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Developer Need</label>
                    <select className="fi" style={{ ...iS, cursor: "pointer" }} value={form.service} onChange={e => setF("service", e.target.value)}>
                      <option value="">Select...</option>
                      {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div><label style={{ display: "block", fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Message</label><textarea className="fi" style={{ ...iS, minHeight: isMobile ? 70 : 76, resize: "vertical" as const }} placeholder="Tell us about your CRM platform and developer requirements..." value={form.message} onChange={e => setF("message", e.target.value)} /></div>
                  <button className="btn-teal" type="submit" disabled={loading} style={{ padding: isMobile ? "12px" : "13px", borderRadius: 10, border: "none", marginTop: 4, background: loading ? "rgba(0,201,167,0.5)" : `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 800, fontSize: isMobile ? "13px" : "14.5px", fontFamily: "'Poppins',sans-serif", cursor: loading ? "wait" : "pointer" }}>
                    {loading ? "Sending..." : "👨‍💻 Get Free Developer Match →"}
                  </button>
                  <p style={{ color: "rgba(255,255,255,0.28)", fontSize: isMobile ? 10 : 11, textAlign: "center", margin: 0 }}>🔒 Secure &amp; confidential. No spam, ever.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* M2 — CLIENT LOGOS */}
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
            <SectionH2>CRM Developer <GradText>Success Stories</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 13 : 14, lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>Real results from dedicated CRM developers working with businesses in Canada, USA &amp; UK.</p>
          </div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: isMobile ? 30 : 40, flexWrap: "wrap" }}>
            {SUCCESS_STORIES.map((c, i) => (
              <button key={i} className={`ss-tab${story === i ? " act" : ""}`} onClick={() => setStory(i)} style={{ padding: isMobile ? "6px 14px" : "8px 18px", fontSize: isMobile ? "11px" : "13px" }}><span>{c.icon}</span>{c.industry} — {c.result}</button>
            ))}
          </div>
          <div key={story} style={{ background: "rgba(255,255,255,0.02)", border: `1px solid rgba(0,201,167,.3)`, borderRadius: 24, overflow: "hidden", animation: "sbFadeUp .45s ease both" }}>
            <div style={{ height: 3, background: `linear-gradient(90deg,transparent,${T},transparent)` }} />
            <div style={{ padding: isMobile ? "24px 20px" : "36px 36px 32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
                <div style={{ width: isMobile ? 48 : 52, height: isMobile ? 48 : 52, borderRadius: 14, fontSize: isMobile ? 24 : 26, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,201,167,0.12)", border: `1px solid rgba(0,201,167,.3)` }}>{SUCCESS_STORIES[story].icon}</div>
                <span style={{ padding: isMobile ? "3px 12px" : "4px 14px", borderRadius: 100, fontSize: isMobile ? 10 : 12, fontWeight: 700, background: "rgba(0,201,167,0.12)", border: `1px solid rgba(0,201,167,.3)`, color: T, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{SUCCESS_STORIES[story].result}</span>
              </div>
              <h3 style={{ color: "#fff", fontSize: isMobile ? "18px" : isTablet ? "20px" : "24px", fontWeight: 800, marginBottom: 16, lineHeight: 1.3 }}>{SUCCESS_STORIES[story].title}</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "13px" : "14px", lineHeight: 1.7, marginBottom: 24 }}>{SUCCESS_STORIES[story].description}</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: isMobile ? 10 : 14 }}>
                {SUCCESS_STORIES[story].metrics.map((m, i) => (
                  <div key={i} style={{ textAlign: "center", padding: isMobile ? "14px 10px" : "18px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", transition: "transform .25s,background .25s", cursor: "default" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,0.06)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; }}>
                    <div style={{ fontSize: isMobile ? 18 : 22, marginBottom: 6 }}>{m.i}</div>
                    <div style={{ fontSize: isMobile ? "20px" : "26px", fontWeight: 900, marginBottom: 4, background: `linear-gradient(135deg,#fff 30%,${T})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{m.v}</div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 10 : 11, fontWeight: 500 }}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
            {SUCCESS_STORIES.map((_, i) => (
              <button key={i} onClick={() => setStory(i)} style={{ width: story === i ? 24 : 8, height: 8, borderRadius: 100, background: story === i ? T : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", transition: "all .3s ease" }} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/case-studies">
              <button className="btn-teal" style={{ padding: isMobile ? "12px 28px" : "14px 36px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: isMobile ? "13px" : "15px", fontFamily: "'Poppins',sans-serif", cursor: "pointer" }}>View All Case Studies →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* M4 — SERVICES WE OFFER */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 60%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(0,201,167,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.025) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 48 }}>
            <SectionBadge label="Hire CRM Developers" />
            <SectionH2>Hire CRM Developers <GradText>Services We Offer</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "13px" : "14px", lineHeight: 1.75, maxWidth: 580, margin: "0 auto" }}>Flexible engagement models for businesses across Canada, USA &amp; UK.</p>
          </div>
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="svc-card" style={{ padding: isMobile ? "20px" : "28px 24px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <div className="svc-icon" style={{ width: isMobile ? 48 : 52, height: isMobile ? 48 : 52, borderRadius: 14, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 22 : 24, flexShrink: 0 }}>{s.icon}</div>
                  <span style={{ padding: "3px 10px", borderRadius: 100, fontSize: isMobile ? 9 : 10.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: T, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.18)" }}>{s.tag}</span>
                </div>
                <h3 style={{ fontSize: isMobile ? "15px" : "17px", fontWeight: 700, color: "#fff", lineHeight: 1.3, margin: 0 }}>{s.title}</h3>
                <p style={{ fontSize: isMobile ? "12px" : "13.5px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                <Link href="/services">
                  {/* <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.3)", fontSize: isMobile ? "12px" : "13px", fontWeight: 600, marginTop: "auto", cursor: "pointer", transition: "color .2s, gap .2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = T; (e.currentTarget as HTMLElement).style.gap = "12px"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)"; (e.currentTarget as HTMLElement).style.gap = "6px"; }}>Learn More <span>→</span>
                  </span> */}
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            {/* <Link href="">
              <button className="btn-teal" style={{ padding: isMobile ? "12px 28px" : "14px 36px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: isMobile ? "13px" : "15px", fontFamily: "'Poppins',sans-serif", cursor: "pointer" }}>View All Engagement Models →</button>
            </Link> */}
          </div>
        </div>
      </section>

      {/* M5 — KEY BENEFITS */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(0,201,167,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.025) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 48 }}>
            <SectionBadge label="Why Hire With Us" />
            <SectionH2>Key Benefits of Hiring <GradText>CRM Developers</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? "13px" : "14px", lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>Here&apos;s what you gain when you hire dedicated CRM developers from NNC Digital.</p>
          </div>
          <div className="kb-grid">
            {BENEFITS.map((b, i) => (
              <div key={i} className="kb-card" style={{ padding: isMobile ? "16px" : "20px", flexDirection: isMobile ? "column" : "row" }}>
                <div style={{ fontSize: isMobile ? "32px" : "42px", fontWeight: 900, lineHeight: 1, background: "linear-gradient(135deg,rgba(0,201,167,0.15) 0%,rgba(0,201,167,0.05) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", flexShrink: 0, textAlign: "center" }}>{b.num}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}><span style={{ fontSize: 20 }}>{b.icon}</span><h3 style={{ color: "#fff", fontSize: isMobile ? "16px" : "18px", fontWeight: 800, margin: 0 }}>{b.title}</h3></div>
                  <p style={{ color: "rgba(255,255,255,0.52)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.7, margin: "0 0 12px" }}>{b.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {b.tags.map(tag => <span key={tag} style={{ padding: "3px 10px", borderRadius: 100, fontSize: isMobile ? 9 : 10.5, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase" as const, color: T, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.18)" }}>{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="">
              <button className="btn-teal" style={{ padding: isMobile ? "12px 28px" : "14px 36px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: isMobile ? "13px" : "15px", fontFamily: "'Poppins',sans-serif", cursor: "pointer" }}>Find Your Developer →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* M6 — PLATFORM TOOLS */}
      <section style={{ padding: getSectionPadding(), background: N1, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: isMobile ? 400 : 600, height: isMobile ? 300 : 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 48 }}>
            <SectionBadge label="Developer Expertise" />
            <SectionH2>Leading Platform Tools <GradText>Our Developers Use</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? "13px" : "14px", lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>Our developers are experts across all major CRM platforms and technologies.</p>
          </div>
          <div className="pt-grid">
            {TOOLS.map((tool, i) => (
              <div key={i} className="pt-card" style={{ background: tool.clr, border: `1px solid ${tool.bd}`, padding: isMobile ? "16px 12px" : "20px 16px" }}>
                <div className="pt-icon" style={{ width: isMobile ? 48 : 56, height: isMobile ? 48 : 56, borderRadius: 15, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 22 : 26, marginBottom: isMobile ? 12 : 16, background: "rgba(255,255,255,0.05)", border: `1px solid ${tool.bd}` }}>{tool.icon}</div>
                <h3 style={{ color: "#fff", fontSize: isMobile ? "14px" : "16px", fontWeight: 700, marginBottom: 6 }}>{tool.name}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "11px" : "12.5px", lineHeight: 1.6, margin: 0 }}>{tool.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M7 — HIRE DEVELOPERS ACCORDION */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", left: "5%", width: isMobile ? 200 : 400, height: isMobile ? 200 : 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 48 }}>
            <SectionBadge label="Tailored Matching" />
            <SectionH2>Hire Developers <GradText>Tailored to Your Needs</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? "13px" : "14px", lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>Whether you&apos;re an enterprise, start-up, or agency — we match you with the right CRM developer for your exact challenge.</p>
          </div>
          <div className="two-col" style={{ marginBottom: 16 }}>
            <p style={{ color: T, fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>By Business Type</p>
            <p style={{ color: T, fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>By CRM Type</p>
          </div>
          <div className="two-col">
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
              {HIRE_LEFT.map((item, i) => <AccItem key={item.title} item={item} open={hireL === i} toggle={() => setHireL(hireL === i ? null : i)} />)}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
              {HIRE_RIGHT.map((item, i) => <AccItem key={item.title} item={item} open={hireR === i} toggle={() => setHireR(hireR === i ? null : i)} />)}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: isMobile ? 12 : 16,
              marginTop: 40,
              justifyContent: "center",
              flexWrap: "wrap"
            }}
          >
            <Link href="/hire-developers">
              <button
                className="btn-teal"
                style={{
                  width: isMobile ? 210 : 260,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: isMobile ? "12px 0" : "14px 0",
                  borderRadius: 10,
                  border: "none",
                  background: `linear-gradient(135deg,${T},${TD})`,
                  color: "#000",
                  fontWeight: 700,
                  fontSize: isMobile ? "13px" : "15px",
                  fontFamily: "'Poppins',sans-serif",
                  cursor: "pointer"
                }}
              >
                👨‍💻 Hire a CRM Developer
              </button>
            </Link>

            <Link href="/pricing">
              <button
                style={{
                  width: isMobile ? 210 : 260,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: isMobile ? "12px 0" : "14px 0",
                  borderRadius: 10,
                  border: "1.5px solid rgba(0,201,167,0.35)",
                  background: "transparent",
                  color: T,
                  fontWeight: 700,
                  fontSize: isMobile ? "13px" : "15px",
                  fontFamily: "'Poppins',sans-serif",
                  cursor: "pointer",
                  transition: "border-color .2s,background .2s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = T;
                  e.currentTarget.style.background = "rgba(0,201,167,0.07)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,201,167,0.35)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                View Pricing →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* M8 — AI-POWERED SOLUTIONS */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N2} 0%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "0%", left: "50%", transform: "translateX(-50%)", width: isMobile ? 600 : 700, height: isMobile ? 200 : 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ marginBottom: 40, maxWidth: 620, marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
            <SectionBadge label="AI-Powered" />
            <SectionH2>Leverage <GradText>AI-Powered Hire CRM</GradText> Developers Solutions</SectionH2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "13px" : "14px", lineHeight: 1.8 }}>Our developers build AI capabilities directly into your CRM — predictive analytics, automation, and intelligent insights.</p>
          </div>
          <div className="ai-feat-grid">
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

      {/* M9 — FULL-WIDTH CTA BANNER */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ background: "linear-gradient(135deg, #0055b3 0%, #0077cc 35%, #0055b3 100%)", backgroundSize: "300% 300%", animation: "ctaBgShift 8s ease infinite", padding: isMobile ? "60px 20px" : "80px 48px", textAlign: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: "-20%", left: "-5%", width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.1) 0%,transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-20%", right: "-5%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 2, maxWidth: isMobile ? "100%" : 800, margin: "0 auto" }}>
            <h2 style={{ fontSize: isMobile ? "clamp(22px, 6vw, 28px)" : isTablet ? "32px" : "clamp(36px, 4vw, 48px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Want <span style={{ textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.4)" }}>HIRE CRM DEVELOPERS solutions</span> that take your business to the next level?
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

      {/* M10 — WHY CHOOSE US - VIDEO COMPLETELY REMOVED */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", right: "-5%", width: isMobile ? 200 : 400, height: isMobile ? 200 : 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div className="two-col-wide">
            <div>
              <SectionBadge label="Our Story" />
              <SectionH2>Why Choose Us as Your <GradText>CRM Development</GradText> Partner?</SectionH2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "13px" : "15px", lineHeight: 1.8, marginBottom: 16 }}>Backed by <span style={{ color: "#fff", fontWeight: 600 }}>Nakshatra Namaha Creations Pvt. Ltd.</span> — one of Bangalore&apos;s most respected digital studios with <span style={{ color: T, fontWeight: 600 }}>8+ years of experience</span> and <span style={{ color: T, fontWeight: 600 }}>565+ projects delivered</span>.</p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "13px" : "15px", lineHeight: 1.8, marginBottom: 28 }}>We launched NNC Digital as our international arm — bringing the same proven expertise to Canadian, US, and UK markets with dedicated client-facing teams, transparent pricing, and long-term partnership.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 8 : 10, marginBottom: 30 }}>
                {WCU_POINTS.map((p, i) => (
                  <div key={i} className="wcu-point" style={{ padding: isMobile ? "12px 14px" : "14px 18px" }}>
                    <span style={{ fontSize: isMobile ? 16 : 18, flexShrink: 0 }}>{p.icon}</span>
                    <span style={{ color: "rgba(255,255,255,0.72)", fontSize: isMobile ? "12px" : "14px", fontWeight: 500 }}>{p.text}</span>
                  </div>
                ))}
              </div>
              <div className="wcu-stats">
                {WCU_STATS.map(st => (
                  <div key={st.l} className="wcu-stat" style={{ padding: isMobile ? "16px 10px" : "22px 14px" }}>
                    <div style={{ fontSize: isMobile ? "18px" : "24px", fontWeight: 900, marginBottom: 2, background: `linear-gradient(135deg,#fff 30%,${T})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}><Counter to={st.n} sfx={st.s} /></div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? "10px" : "11.5px", fontWeight: 500 }}>{st.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {/* Video section completely removed - replaced with stats or additional content if needed */}
              <div style={{
                background: "rgba(0,201,167,0.05)",
                border: "1px solid rgba(0,201,167,0.15)",
                borderRadius: 24,
                padding: isMobile ? "30px 20px" : "40px 30px",
                textAlign: "center"
              }}>
                <div style={{ fontSize: isMobile ? 48 : 64, marginBottom: 16 }}>🚀</div>
                <h3 style={{ color: "#fff", fontSize: isMobile ? "20px" : "24px", fontWeight: 800, marginBottom: 12 }}>Start Your CRM Journey Today</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "14px" : "16px", lineHeight: 1.7, marginBottom: 24 }}>
                  Join 1500+ businesses that have transformed their operations with our dedicated CRM developers.
                </p>
                <Link href="/hire-developers">
                  <button className="btn-teal" style={{ padding: isMobile ? "12px 28px" : "14px 36px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: isMobile ? "13px" : "15px", fontFamily: "'Poppins',sans-serif", cursor: "pointer" }}>
                    Get Started Today →
                  </button>
                </Link>
              </div>

              <div style={{ display: "flex", gap: 10, marginTop: 20, flexWrap: "wrap" }}>
                {["🇨🇦 Canada", "🇺🇸 USA", "🇬🇧 UK", "🇮🇳 India"].map(b => (
                  <span key={b} style={{ padding: isMobile ? "5px 12px" : "6px 14px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "11px" : "12.5px", fontWeight: 500 }}>{b}</span>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  gap: isMobile ? 12 : 16,
                  marginTop: 40,
                  justifyContent: "center",
                  flexWrap: "wrap"
                }}
              >
                <Link href="/hire-developers">
                  <button
                    className="btn-teal"
                    style={{
                      width: isMobile ? 220 : 260,
                      padding: isMobile ? "12px 24px" : "14px 32px",
                      borderRadius: 10,
                      border: "none",
                      background: `linear-gradient(135deg,${T},${TD})`,
                      color: "#000",
                      fontWeight: 700,
                      fontSize: isMobile ? "13px" : "15px",
                      fontFamily: "'Poppins',sans-serif",
                      cursor: "pointer"
                    }}
                  >
                    👨‍💻 Hire a CRM Developer
                  </button>
                </Link>

                <Link href="/pricing">
                  <button
                    style={{
                      width: isMobile ? 220 : 260,
                      padding: isMobile ? "12px 24px" : "14px 32px",
                      borderRadius: 10,
                      border: "1.5px solid rgba(0,201,167,0.35)",
                      background: "transparent",
                      color: T,
                      fontWeight: 700,
                      fontSize: isMobile ? "13px" : "15px",
                      fontFamily: "'Poppins',sans-serif",
                      cursor: "pointer",
                      transition: "border-color .2s,background .2s"
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = T;
                      (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,0.07)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,167,0.35)";
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    View Pricing →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* M11 — GLOBAL PRESENCE */}
      <section style={{ padding: isMobile ? "40px 16px" : isTablet ? "60px 32px" : "80px 48px", background: `linear-gradient(180deg,${N0} 0%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: isMobile ? 400 : 600, height: isMobile ? 200 : 300, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
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
                  { city: "Toronto, Canada", phone: "+91 9900566466", flag: "🇨🇦" },
                  { city: "New York, USA", phone: "+91 9900566466", flag: "🇺🇸" },
                  { city: "London, UK", phone: "+91 9900566466", flag: "🇬🇧" }
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
                        📞 {item.phone}
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
                {/* Bangalore HQ */}
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
                    <p style={{ color: T, fontSize: isMobile ? 14 : 15, fontWeight: 500, margin: 0 }}>📞 +91 9900566466</p>
                  </div>
                  <span style={{ color: T, fontSize: 20, opacity: 0.5 }}>■■</span>
                </div>

                {/* Mysore */}
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
                    <p style={{ fontWeight: 600, fontSize: isMobile ? 15 : 16, color: "#fff", margin: 0, marginBottom: 4 }}>Mysore</p>
                    <p style={{ color: T, fontSize: isMobile ? 14 : 15, fontWeight: 500, margin: 0 }}>📞 +91 9900566466</p>
                  </div>
                  <span style={{ color: T, fontSize: 20, opacity: 0.5 }}>■■</span>
                </div>

                {/* Mumbai */}
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
                    <p style={{ fontWeight: 600, fontSize: isMobile ? 15 : 16, color: "#fff", margin: 0, marginBottom: 4 }}>Mumbai</p>
                    <p style={{ color: T, fontSize: isMobile ? 14 : 15, fontWeight: 500, margin: 0 }}>📞 +91 9900566466</p>
                  </div>
                  <span style={{ color: T, fontSize: 20, opacity: 0.5 }}>■■</span>
                </div>

                {/* Hyderabad */}
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
                    <p style={{ fontWeight: 600, fontSize: isMobile ? 15 : 16, color: "#fff", margin: 0, marginBottom: 4 }}>Hyderabad</p>
                    <p style={{ color: T, fontSize: isMobile ? 14 : 15, fontWeight: 500, margin: 0 }}>📞 +91 9900566466</p>
                  </div>
                  <span style={{ color: T, fontSize: 20, opacity: 0.5 }}>■■</span>
                </div>

                {/* Email Section */}
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

      {/* M12 — FAQS */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "30%", right: "-5%", width: isMobile ? 200 : 400, height: isMobile ? 200 : 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 40 }}>
            <SectionBadge label="FAQs" />
            <SectionH2>FAQs</SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? "13px" : "15px", lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>Everything you need to know about hiring CRM developers for businesses in Canada, USA &amp; UK.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>

            {/* Q1: How quickly can a developer start? */}
            <div className={`faq-item${faq === 0 ? " fopen" : ""}`} onClick={() => setFaq(faq === 0 ? null : 0)}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: isMobile ? "14px 16px" : "20px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 14 }}>
                  <span style={{ color: T, fontSize: isMobile ? 12 : 13, fontWeight: 800, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", borderRadius: 8, padding: isMobile ? "3px 8px" : "4px 10px", flexShrink: 0 }}>Q1</span>
                  <span style={{ fontSize: isMobile ? "13px" : "15px", fontWeight: 700, color: faq === 0 ? "#fff" : "rgba(255,255,255,0.78)", lineHeight: 1.4 }}>How quickly can a developer start?</span>
                </div>
                <div style={{ width: isMobile ? 26 : 30, height: isMobile ? 26 : 30, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 15 : 17, fontWeight: 700, lineHeight: 1, background: faq === 0 ? T : "rgba(255,255,255,0.07)", border: `1px solid ${faq === 0 ? T : "rgba(255,255,255,0.12)"}`, color: faq === 0 ? "#000" : "rgba(255,255,255,0.5)", transform: faq === 0 ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
              </div>
              <div style={{ maxHeight: faq === 0 ? 500 : 0, overflow: "hidden", transition: "max-height .38s ease" }}>
                <p style={{ padding: isMobile ? "0 16px 14px 54px" : "0 22px 22px 80px", color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.7, margin: 0 }}>
                  Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process.
                </p>
              </div>
            </div>

            {/* Q2: What CRM platforms do your developers work with? */}
            <div className={`faq-item${faq === 1 ? " fopen" : ""}`} onClick={() => setFaq(faq === 1 ? null : 1)}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: isMobile ? "14px 16px" : "20px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 14 }}>
                  <span style={{ color: T, fontSize: isMobile ? 12 : 13, fontWeight: 800, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", borderRadius: 8, padding: isMobile ? "3px 8px" : "4px 10px", flexShrink: 0 }}>Q2</span>
                  <span style={{ fontSize: isMobile ? "13px" : "15px", fontWeight: 700, color: faq === 1 ? "#fff" : "rgba(255,255,255,0.78)", lineHeight: 1.4 }}>What CRM platforms do your developers work with?</span>
                </div>
                <div style={{ width: isMobile ? 26 : 30, height: isMobile ? 26 : 30, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 15 : 17, fontWeight: 700, lineHeight: 1, background: faq === 1 ? T : "rgba(255,255,255,0.07)", border: `1px solid ${faq === 1 ? T : "rgba(255,255,255,0.12)"}`, color: faq === 1 ? "#000" : "rgba(255,255,255,0.5)", transform: faq === 1 ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
              </div>
              <div style={{ maxHeight: faq === 1 ? 500 : 0, overflow: "hidden", transition: "max-height .38s ease" }}>
                <p style={{ padding: isMobile ? "0 16px 14px 54px" : "0 22px 22px 80px", color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.7, margin: 0 }}>
                  Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process.
                </p>
              </div>
            </div>

            {/* Q3: Can I trial a developer before committing? */}
            <div className={`faq-item${faq === 2 ? " fopen" : ""}`} onClick={() => setFaq(faq === 2 ? null : 2)}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: isMobile ? "14px 16px" : "20px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 14 }}>
                  <span style={{ color: T, fontSize: isMobile ? 12 : 13, fontWeight: 800, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", borderRadius: 8, padding: isMobile ? "3px 8px" : "4px 10px", flexShrink: 0 }}>Q3</span>
                  <span style={{ fontSize: isMobile ? "13px" : "15px", fontWeight: 700, color: faq === 2 ? "#fff" : "rgba(255,255,255,0.78)", lineHeight: 1.4 }}>Can I trial a developer before committing?</span>
                </div>
                <div style={{ width: isMobile ? 26 : 30, height: isMobile ? 26 : 30, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 15 : 17, fontWeight: 700, lineHeight: 1, background: faq === 2 ? T : "rgba(255,255,255,0.07)", border: `1px solid ${faq === 2 ? T : "rgba(255,255,255,0.12)"}`, color: faq === 2 ? "#000" : "rgba(255,255,255,0.5)", transform: faq === 2 ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
              </div>
              <div style={{ maxHeight: faq === 2 ? 500 : 0, overflow: "hidden", transition: "max-height .38s ease" }}>
                <p style={{ padding: isMobile ? "0 16px 14px 54px" : "0 22px 22px 80px", color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.7, margin: 0 }}>
                  Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process.
                </p>
              </div>
            </div>

            {/* Q4: What does a dedicated CRM developer cost per month? */}
            <div className={`faq-item${faq === 3 ? " fopen" : ""}`} onClick={() => setFaq(faq === 3 ? null : 3)}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: isMobile ? "14px 16px" : "20px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 14 }}>
                  <span style={{ color: T, fontSize: isMobile ? 12 : 13, fontWeight: 800, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", borderRadius: 8, padding: isMobile ? "3px 8px" : "4px 10px", flexShrink: 0 }}>Q4</span>
                  <span style={{ fontSize: isMobile ? "13px" : "15px", fontWeight: 700, color: faq === 3 ? "#fff" : "rgba(255,255,255,0.78)", lineHeight: 1.4 }}>What does a dedicated CRM developer cost per month?</span>
                </div>
                <div style={{ width: isMobile ? 26 : 30, height: isMobile ? 26 : 30, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 15 : 17, fontWeight: 700, lineHeight: 1, background: faq === 3 ? T : "rgba(255,255,255,0.07)", border: `1px solid ${faq === 3 ? T : "rgba(255,255,255,0.12)"}`, color: faq === 3 ? "#000" : "rgba(255,255,255,0.5)", transform: faq === 3 ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
              </div>
              <div style={{ maxHeight: faq === 3 ? 500 : 0, overflow: "hidden", transition: "max-height .38s ease" }}>
                <p style={{ padding: isMobile ? "0 16px 14px 54px" : "0 22px 22px 80px", color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.7, margin: 0 }}>
                  Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process.
                </p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? "12px" : "14px", marginBottom: 16 }}>Still have questions? We respond within 24 hours.</p>
            <Link href="/contact">
              <button className="btn-teal" style={{ padding: isMobile ? "12px 28px" : "13px 32px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: isMobile ? "13px" : "15px", fontFamily: "'Poppins',sans-serif", cursor: "pointer" }}>Ask Us Anything →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* M13 — CONTACT FORM */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N2} 0%,${N0} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: isMobile ? 400 : 700, height: isMobile ? 200 : 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 40 }}>
            <SectionBadge label="Get In Touch" />
            <SectionH2>Ready to Hire Your <GradText>CRM Developer?</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? "13px" : "15px", lineHeight: 1.75, maxWidth: 540, margin: "0 auto" }}>Tell us about your CRM platform and developer requirements. We'll match you with pre-vetted candidates within 48 hours.</p>
          </div>
          <div className="cf-grid">
            {/* Left — Form */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: isMobile ? "24px 20px" : "36px 32px" }}>
              {cSubmitted ? (
                <div style={{ textAlign: "center", padding: isMobile ? "30px 0" : "48px 0" }}>
                  <div style={{ fontSize: isMobile ? 48 : 56, marginBottom: 16 }}>✅</div>
                  <h3 style={{ color: "#fff", fontSize: isMobile ? "18px" : "22px", fontWeight: 800, marginBottom: 10 }}>Request Sent!</h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "13px" : "15px", lineHeight: 1.7, marginBottom: 24 }}>Thank you — we'll match you with pre-vetted CRM developers within 48 hours.</p>
                  <Link href="/hire-crm-developers">
                    <button onClick={() => { setCSubmitted(false); setCForm({ name: "", phone: "", dialCode: "+1", email: "", service: "", project: "" }); }} style={{ padding: isMobile ? "10px 22px" : "12px 28px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: isMobile ? "13px" : "14px", fontFamily: "'Poppins',sans-serif", cursor: "pointer" }}>Send Another →</button>
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleCSubmit}>
                  <div className="cf-name" style={{ marginBottom: isMobile ? 12 : 16 }}>
                    <div><label style={{ display: "block", fontSize: isMobile ? 11 : 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Full Name *</label><input className="fi" required style={iSLg} placeholder="Jane Smith" value={cForm.name} onChange={e => setCF("name", e.target.value)} /></div>
                    <div>
                      <label style={{ display: "block", fontSize: isMobile ? 11 : 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Phone</label>
                      <div style={{ display: "flex", gap: 8, flexDirection: isMobile ? "column" : "row" }}>
                        <select className="fi" style={{ ...iSLg, width: isMobile ? "100%" : 90, flexShrink: 0, padding: isMobile ? "12px 14px" : "13px 8px", cursor: "pointer" }} value={cForm.dialCode} onChange={e => setCF("dialCode", e.target.value)}>
                          {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                        </select>
                        <input className="fi" style={iSLg} type="tel" placeholder="647 XXX XXXX" value={cForm.phone} onChange={e => setCF("phone", e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: isMobile ? 12 : 16 }}><label style={{ display: "block", fontSize: isMobile ? 11 : 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Business Email *</label><input className="fi" required type="email" style={iSLg} placeholder="jane@yourcompany.com" value={cForm.email} onChange={e => setCF("email", e.target.value)} /></div>
                  <div style={{ marginBottom: isMobile ? 12 : 16 }}>
                    <label style={{ display: "block", fontSize: isMobile ? 11 : 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Developer Need</label>
                    <select className="fi" style={{ ...iSLg, cursor: "pointer" }} value={cForm.service} onChange={e => setCF("service", e.target.value)}>
                      <option value="">Select...</option>
                      {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom: 20 }}><label style={{ display: "block", fontSize: isMobile ? 11 : 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Project Description</label><textarea className="fi" style={{ ...iSLg, minHeight: isMobile ? 90 : 110, resize: "vertical" as const }} placeholder="Describe your CRM platform, skills needed, and engagement model preference..." value={cForm.project} onChange={e => setCF("project", e.target.value)} /></div>
                  <button className="btn-teal" type="submit" disabled={cLoading} style={{ width: "100%", padding: isMobile ? "13px" : "15px", borderRadius: 10, border: "none", background: cLoading ? "rgba(0,201,167,0.5)" : `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 800, fontSize: isMobile ? "14px" : "15px", fontFamily: "'Poppins',sans-serif", cursor: cLoading ? "wait" : "pointer" }}>{cLoading ? "Sending..." : "Submit — Find My Developer →"}</button>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: isMobile ? "10px" : "11.5px", textAlign: "center", marginTop: 12 }}>🔒 Your information is 100% secure and never shared.</p>
                </form>
              )}
            </div>

            {/* Right — Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 16 : 20 }}>
              <div style={{ background: "rgba(0,201,167,0.05)", border: "1px solid rgba(0,201,167,0.18)", borderRadius: 18, padding: isMobile ? "20px 18px" : "28px 26px" }}>
                <h3 style={{ color: "#fff", fontSize: isMobile ? "15px" : "16px", fontWeight: 800, marginBottom: isMobile ? 14 : 18 }}>What Happens After You Submit?</h3>
                {[{ s: "1", text: "We review your requirements within a few hours." }, { s: "2", text: "We match you with 2-3 pre-vetted developers (24-48hrs)." }, { s: "3", text: "Interview candidates and choose your preferred developer." }, { s: "4", text: "Start with a paid trial or full engagement — your choice." }].map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: isMobile ? 10 : 14, alignItems: "flex-start", marginBottom: i < 3 ? isMobile ? 12 : 16 : 0, padding: isMobile ? "10px 12px" : "12px 14px", borderRadius: 10, background: "rgba(255,255,255,0.03)", transition: "background .2s", cursor: "default" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,0.07)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"}>
                    <div style={{ width: isMobile ? 28 : 32, height: isMobile ? 28 : 32, borderRadius: "50%", flexShrink: 0, background: `linear-gradient(135deg,${T},${TD})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 10 : 11, fontWeight: 900, color: "#000" }}>{s.s}</div>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.6, margin: 0 }}>{s.text}</p>
                  </div>
                ))}
              </div>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: isMobile ? "20px 18px" : "26px 26px" }}>
                <h3 style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: isMobile ? 14 : 18 }}>Direct Contacts</h3>
                {[{ flag: "🇨🇦", label: "Canada", phone: "+91 9900566466" }, { flag: "🇺🇸", label: "USA", phone: "+91 9900566466" }, { flag: "🇬🇧", label: "UK", phone: "+91 9900566466" }].map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: isMobile ? "10px 0" : "12px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none", flexWrap: "wrap", gap: 8 }}>
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
                  <span key={b} style={{ padding: isMobile ? "5px 10px" : "6px 12px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "10px" : "12px", fontWeight: 500 }}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}