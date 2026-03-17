

"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getServiceSchema } from "../lib/schema";
import SchemaMarkup from "../components/SchemaMarkup";
import Navbar from "../components/Navbar";

// ─── Data ─────────────────────────────────────────────────────────────────────
const LOGOS = ["clients1.png", "clients2.png", "clients3.png", "clients4.png", "clients5.png",
  "clients6.png", "clients7.png", "clients8.png", "clients9.png", "clients10.png", "clients11.png"];

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

const SERVICES = [
  { icon: "🗂️", title: "CRM Consulting", desc: "Tailored CRM strategy for your North American and UK market.", tag: "Strategy", slug: "crm-consulting" },
  { icon: "⚙️", title: "CRM Implementation", desc: "End-to-end CRM setup, configuration, and launch.", tag: "Setup", slug: "crm-implementation" },
  { icon: "🎛️", title: "CRM Customization", desc: "Custom CRM solutions tailored for your exact workflow.", tag: "Custom", slug: "crm-customization" },
  { icon: "🌐", title: "CRM Portal Development", desc: "Client-facing portals and self-service dashboards.", tag: "Development", slug: "crm-portal" },
  { icon: "🚀", title: "CRM Deployment", desc: "Administer technology, people, and processes for CRM success.", tag: "Deployment", slug: "crm-deployment" },
  { icon: "📱", title: "CRM Mobile App Dev", desc: "Native and cross-platform mobile CRM apps for field teams.", tag: "Mobile", slug: "crm-mobile-app" },
  { icon: "🎨", title: "CRM UI/UX Design", desc: "User-friendly interfaces for modern customer expectations.", tag: "Design", slug: "crm-ui-ux" },
  { icon: "🔗", title: "CRM Integration", desc: "Seamlessly connect your CRM with ERP and third-party tools.", tag: "Integration", slug: "crm-integration" },
  { icon: "🔄", title: "CRM Migration", desc: "Securely transfer data from legacy systems with zero loss.", tag: "Migration", slug: "crm-migration" },
  { icon: "💼", title: "IT Mgmt Consulting", desc: "Strategic IT management and advisory for growing businesses.", tag: "Consulting", slug: "it-consulting" },
  { icon: "🔁", title: "Digital Transformation", desc: "End-to-end execution of your digital transformation roadmap.", tag: "Transform", slug: "digital-transformation" },
  { icon: "🤖", title: "Marketing Automation", desc: "Automate lead nurturing, campaigns, and customer journeys at scale.", tag: "Automation", slug: "marketing-automation" },
];

const BENEFITS = [
  { num: "01", icon: "🔒", title: "Secure Data", desc: "GDPR / PIPEDA / CCPA compliance built-in. Zero data loss guarantee.", tags: ["GDPR", "PIPEDA", "CCPA"] },
  { num: "02", icon: "🎯", title: "Lead Management", desc: "All customer data in one CRM. Priority pipelines with intelligent scoring and automated follow-ups.", tags: ["Pipeline", "Scoring", "Automation"] },
  { num: "03", icon: "🔗", title: "Easy Integration", desc: "Seamless plugins for every department — marketing, finance, support, and ops.", tags: ["Plugins", "API", "No Silos"] },
  { num: "04", icon: "🤝", title: "Relentless Support", desc: "Ongoing support after go-live. Dedicated team ensuring maximum CRM adoption every day.", tags: ["24/7", "Training", "Go-Live"] },
];

const TOOLS = [
  { icon: "☁️", name: "Salesforce", desc: "World's #1 CRM — configured for your exact sales process.", bg: "rgba(0,161,224,.1)", bd: "rgba(0,161,224,.25)" },
  { icon: "🧲", name: "HubSpot", desc: "Inbound-focused CRM ideal for marketing-led growth.", bg: "rgba(255,122,0,.08)", bd: "rgba(255,122,0,.22)" },
  { icon: "🏢", name: "MS Dynamics 365", desc: "Enterprise CRM integrated with Microsoft 365 & Azure.", bg: "rgba(0,120,215,.08)", bd: "rgba(0,120,215,.22)" },
  { icon: "🔶", name: "Zoho CRM", desc: "Flexible, cost-effective CRM for scaling SMEs.", bg: "rgba(227,77,38,.08)", bd: "rgba(227,77,38,.22)" },
  { icon: "🍬", name: "SugarCRM", desc: "Open-source CRM for sales force automation.", bg: "rgba(229,57,53,.08)", bd: "rgba(229,57,53,.22)" },
  { icon: "🧩", name: "SuiteCRM", desc: "Community edition — conversions and customer interactions.", bg: "rgba(0,201,167,.08)", bd: "rgba(0,201,167,.22)" },
  { icon: "🚿", name: "Pipedrive", desc: "Visual pipeline CRM ideal for SME sales teams.", bg: "rgba(38,166,91,.08)", bd: "rgba(38,166,91,.22)" },
  { icon: "⚡", name: "Custom CRM", desc: "100% bespoke when off-the-shelf doesn't fit your workflows.", bg: "rgba(0,201,167,.1)", bd: "rgba(0,201,167,.28)", bespoke: true },
];

const HIRE_LEFT = [
  { icon: "🏢", title: "Enterprises", desc: "Complex multi-location operations with enterprise-grade integrations and permission hierarchies." },
  { icon: "🎯", title: "Agencies", desc: "Client pipelines, retainer billing, and performance dashboards — CRM designed to grow your book of business." },
  { icon: "🚀", title: "Start-ups", desc: "CRM that scales without outgrowing in 12 months. Lightweight to start, powerful when you need it." },
];
const HIRE_RIGHT = [
  { icon: "📊", title: "Analytical CRM", desc: "Turn raw customer data into business intelligence. Identify trends, segment audiences, and make data-driven decisions." },
  { icon: "🤝", title: "Collaborative CRM", desc: "Unify sales, support, marketing, and ops around a single customer view — breaking silos and improving alignment." },
  { icon: "⚙️", title: "Operational CRM", desc: "Automate day-to-day sales and service processes so your team can focus on what matters most." },
];

const AI_FEATS = [
  { icon: "🧠", title: "AI Data Analysis", desc: "AI analyses vast volumes of client data from email, social, and purchases — surfacing insights your team can act on.", bg: "rgba(0,201,167,.08)", bd: "rgba(0,201,167,.2)" },
  { icon: "🎯", title: "Predictive Lead Scoring", desc: "Automatically rank leads based on behaviour and deal size so sales always focuses on highest-value opportunities.", bg: "rgba(99,102,241,.08)", bd: "rgba(99,102,241,.2)" },
  { icon: "🤖", title: "AI Chatbot & WhatsApp", desc: "Deploy AI-powered chatbots and WhatsApp flows that qualify leads and book appointments — 24/7, without human input.", bg: "rgba(0,201,167,.08)", bd: "rgba(0,201,167,.2)" },
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

const FAQS = [
  {
    q: "What is custom CRM software vs off-the-shelf?",
    a: "Off-the-shelf tools may not perfectly match your workflows. A custom CRM is built specifically around your sales stages, compliance requirements (GDPR in the UK, PIPEDA in Canada, CCPA in the US), and team structure. For businesses in Canada, USA, and UK, custom CRM means faster adoption, lower licensing costs, and a system your team actually uses."
  },
  {
    q: "What features can be customised?",
    a: "Virtually everything: sales pipeline stages, lead scoring rules, automation triggers, dashboards, reporting, user roles, WhatsApp and email integrations, mobile app experience, multi-currency support, custom fields, third-party integrations (accounting, ERP, marketing tools), and compliance workflows for GDPR, PIPEDA, and CCPA."
  },
  {
    q: "How long does CRM development take?",
    a: "A basic custom CRM takes 6–10 weeks. Mid-complexity builds with integrations and automation typically run 12–20 weeks. Enterprise-grade CRM is scoped individually — usually 20–36 weeks. We provide a fixed timeline and milestone plan before any work begins."
  },
  {
    q: "What does CRM development cost in Canada or the UK?",
    a: "A basic CRM starts from CAD $8,000–$15,000 / £6,000–£12,000. Mid-complexity builds range from CAD $18,000–$45,000 / £14,000–£36,000. Enterprise builds are scoped on request. All quotes are fixed-price. Our Bangalore-based engineering team allows us to deliver at 40–60% less than equivalent local agencies, without any reduction in quality."
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes — all CRM builds include a 30-day hypercare period after go-live. Beyond that, we offer flexible support plans: monthly retainer, pay-as-you-go, or a dedicated account manager for enterprise clients. We train your team, provide documentation, and remain available in your time zone. Our retention rate is 98%."
  },
  {
    q: "Are your solutions GDPR, PIPEDA, and CCPA compliant?",
    a: "Yes. Compliance is built into every system — not bolted on afterwards. For UK and EU clients we implement GDPR-ready consent management, data retention rules, and audit trails. For Canadian clients we follow PIPEDA. For US clients we implement CCPA-compliant data handling. Compliance documentation is included with every delivery."
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

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = "#00C9A7";
const TD = "#00a07a";
const P = "#8B5CF6";
const G = "#10B981";
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";

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

function SectionHeader({ badge, title, sub, maxW = 520 }: { badge: string; title: React.ReactNode; sub?: string; maxW?: number }) {
  return (
    <div className="sec-header">
      <div className="section-badge"><span className="section-badge__dot" /><span className="section-badge__text">{badge}</span></div>
      <h2 className="section-h2">{title}</h2>
      {sub && <p className="text-dim text-muted" style={{ maxWidth: maxW, margin: "0 auto" }}>{sub}</p>}
    </div>
  );
}

function GradText({ children }: { children: React.ReactNode }) {
  return <span className="grad-text">{children}</span>;
}

function AccItem({ item, open, toggle, isMobile }: { item: { icon: string; title: string; desc: string }; open: boolean; toggle: () => void; isMobile: boolean }) {
  return (
    <div className={`acc-item${open ? " open" : ""}`} onClick={toggle}>
      <div className="acc-item__header" style={{ padding: isMobile ? "14px 16px" : "16px 18px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 12 }}>
          <div className="acc-item__icon-wrap" style={{ width: isMobile ? 36 : 40, height: isMobile ? 36 : 40, fontSize: isMobile ? 16 : 18 }}>{item.icon}</div>
          <span className="acc-item__title" style={{ fontSize: isMobile ? 13 : 14 }}>{item.title}</span>
        </div>
        <div className="acc-item__toggle" style={{
          width: isMobile ? 24 : 28,
          height: isMobile ? 24 : 28,
          background: open ? "var(--teal)" : "rgba(255,255,255,.07)",
          border: `1px solid ${open ? "var(--teal)" : "rgba(255,255,255,.14)"}`,
          color: open ? "#000" : "rgba(255,255,255,.55)",
          transform: open ? "rotate(45deg)" : "none",
        }}>+</div>
      </div>
      <div className="acc-item__body" style={{ maxHeight: open ? 200 : 0 }}>
        <p style={{ fontSize: isMobile ? 12 : 13 }}>{item.desc}</p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function CRMHero() {
   const serviceSchema = getServiceSchema(
    "CRM Development", 
    "Best and Most Reliable CRM Development Services for Canada, USA & UK. Custom CRM solutions that transform how your business manages customers, automates sales, and drives revenue growth."
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

  // Responsive input styles
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

  // Responsive spacing
  const getSectionPadding = () => {
    if (isMobile) return "40px 16px";
    if (isTablet) return "60px 32px";
    return "40px 48px";
  };

  const getHeroPadding = () => {
    if (isMobile) return "10px 16px 60px";
    if (isTablet) return "80px 32px 80px";
    return "90px 48px 80px";
  };

  const getGridColumns = (mobile: number, tablet: number, desktop: number) => {
    if (isMobile) return `repeat(${mobile}, 1fr)`;
    if (isTablet) return `repeat(${tablet}, 1fr)`;
    return `repeat(${desktop}, 1fr)`;
  };

  return (
    <>
      <Navbar />
      <SchemaMarkup schema={serviceSchema} id="crm-service-schema" />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        :root {
          --teal: #00C9A7;
          --teal-dark: #00a07a;
          --purple: #8B5CF6;
          --green: #10B981;
          --n0: #010812;
          --n1: #030B18;
          --n2: #061425;
          --n3: #0a1f38;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes heroFadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes heroBlink { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes heroGlow { 0%,100% { box-shadow: 0 0 20px rgba(0,201,167,0.15); } 50% { box-shadow: 0 0 40px rgba(0,201,167,0.38); } }
        @keyframes heroPulse { 0%,100% { opacity: .2; transform: scale(1); } 50% { opacity: .4; transform: scale(1.05); } }
        @keyframes heroSpin { from { transform: translateY(-50%) rotate(0deg); } to { transform: translateY(-50%) rotate(360deg); } }
        @keyframes heroScan { 0% { top: 0; } 100% { top: 100%; } }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes sbFadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes aiScan { 0% { top: 10%; } 100% { top: 90%; } }
        @keyframes aiPulse { 0%,100% { opacity: .5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.08); } }
        @keyframes ctaBgShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }

        /* Responsive button styles */
        .btn-teal, .btn-outline, .btn-white, .btn-cta-outline {
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
          .btn-teal, .btn-outline, .btn-white, .btn-cta-outline {
            padding: 14px 32px;
            font-size: 15px;
            min-width: 160px;
          }
        }

        @media (max-width: 640px) {
          .btn-teal, .btn-outline, .btn-white, .btn-cta-outline {
            width: 100%;
            min-width: 0;
          }
        }

        .btn-teal {
          background: linear-gradient(135deg, var(--teal), var(--teal-dark));
          color: #000;
          border: none;
        }
        .btn-teal:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,201,167,0.25); }

        .btn-outline {
          background: transparent;
          color: var(--teal);
          border: 1.5px solid rgba(0,201,167,0.35);
        }
        .btn-outline:hover { border-color: var(--teal); background: rgba(0,201,167,0.07); }

        .btn-white {
          background: #fff;
          color: #0055b3;
          border: none;
        }
        .btn-white:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(0,0,0,0.25); }

        .btn-cta-outline {
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255,255,255,0.5);
        }
        .btn-cta-outline:hover { border-color: #fff; background: rgba(255,255,255,0.1); }

        .h-teal:hover { color: var(--teal) !important; }
        .teal { color: var(--teal); }

        .fi:focus { border-color: rgba(0,201,167,0.5) !important; background: rgba(0,201,167,0.06) !important; }
        .fi::placeholder { color: rgba(255,255,255,0.28); }
        .fi option { background: #0a1f38; color: #fff; }

        .cl-track { display: flex; gap: 40px; width: max-content; animation: marquee 30s linear infinite; }
        .cl-track:hover { animation-play-state: paused; }

        .badge { display: inline-block; padding: 5px 12px; border-radius: 100px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.7); font-size: 11px; font-weight: 600; }
        .badge-soft { background: rgba(0,201,167,0.06); border: 1px solid rgba(0,201,167,0.2); color: var(--teal); }
        .badge-sm { padding: 3px 10px; border-radius: 100px; font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }

        .label-upper { display: block; font-size: 10px; font-weight: 600; color: rgba(255,255,255,0.45); margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.06em; }
        .label-upper-lg { font-size: 11px; margin-bottom: 6px; }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0,201,167,0.08);
          border: 1px solid rgba(0,201,167,0.22);
          border-radius: 100px;
          padding: 6px 18px;
          margin-bottom: 16px;
        }
        .section-badge__dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--teal);
          display: block;
          box-shadow: 0 0 8px var(--teal);
        }
        .section-badge__text {
          color: var(--teal);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

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

        .stat-card {
          position: relative;
          text-align: center;
          padding: 28px 20px;
          border-radius: 20px;
          background: rgba(0,201,167,0.08);
          border: 1px solid rgba(0,201,167,0.2);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: default;
          animation: sbFadeUp 0.7s ease both;
        }
        @media (min-width: 768px) {
          .stat-card { padding: 44px 28px; }
        }
        .stat-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .stat-card__icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
          background: rgba(0,201,167,0.1);
          border: 1px solid rgba(0,201,167,0.2);
          font-size: 20px;
        }
        @media (min-width: 768px) {
          .stat-card__icon { width: 52px; height: 52px; font-size: 24px; margin-bottom: 18px; }
        }
        .stat-card__val {
          font-size: 32px;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #fff 30%, var(--teal) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @media (min-width: 768px) {
          .stat-card__val { font-size: 48px; margin-bottom: 10px; }
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
        .ss-tab:hover:not(.act) { border-color: rgba(255,255,255,0.2); color: rgba(255,255,255,0.8); }

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
        .svc-card__icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(0,201,167,0.1);
          border: 1px solid rgba(0,201,167,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
          transition: transform 0.3s;
        }
        @media (min-width: 768px) {
          .svc-card__icon { width: 52px; height: 52px; font-size: 24px; }
        }
        .svc-card__tag {
          padding: 3px 8px;
          border-radius: 100px;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--teal);
          background: rgba(0,201,167,0.08);
          border: 1px solid rgba(0,201,167,0.18);
        }
        @media (min-width: 768px) {
          .svc-card__tag { font-size: 10.5px; padding: 3px 10px; }
        }
        .svc-card__title { font-size: 15px; font-weight: 700; color: #fff; line-height: 1.3; margin: 0; }
        @media (min-width: 768px) {
          .svc-card__title { font-size: 17px; }
        }
        .svc-card__desc { font-size: 12px; color: rgba(255,255,255,0.5); line-height: 1.7; margin: 0; }
        @media (min-width: 768px) {
          .svc-card__desc { font-size: 13.5px; }
        }
        .svc-card__link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--teal);
          font-size: 12px;
          font-weight: 600;
          margin-top: auto;
        }
        @media (min-width: 768px) {
          .svc-card__link { font-size: 13px; }
        }

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
        .pt-card__name { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 6px; }
        @media (min-width: 768px) {
          .pt-card__name { font-size: 16px; }
        }
        .pt-card__desc { font-size: 11px; color: rgba(255,255,255,0.5); line-height: 1.6; margin: 0; }
        @media (min-width: 768px) {
          .pt-card__desc { font-size: 13px; }
        }

        .kb-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 16px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          transition: all 0.3s;
          cursor: default;
          animation: sbFadeUp 0.6s ease both;
        }
        @media (min-width: 768px) {
          .kb-card { flex-direction: row; padding: 20px; gap: 16px; }
        }
        .kb-card:hover { transform: translateY(-4px); border-color: rgba(0,201,167,0.3); background: rgba(0,201,167,0.04); }
        .kb-card__num {
          font-size: 42px;
          font-weight: 900;
          line-height: 1;
          background: linear-gradient(135deg, rgba(0,201,167,0.15) 0%, rgba(0,201,167,0.05) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          flex-shrink: 0;
          text-align: center;
        }
        @media (min-width: 768px) {
          .kb-card__num { font-size: 52px; width: 72px; }
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
        .wcu-stat__val {
          font-size: 20px;
          font-weight: 900;
          margin-bottom: 4px;
          background: linear-gradient(135deg, #fff 30%, var(--teal) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @media (min-width: 768px) {
          .wcu-stat__val { font-size: 26px; margin-bottom: 8px; }
        }

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

        .gp-ind {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          transition: all 0.2s;
          cursor: default;
        }
        @media (min-width: 768px) {
          .gp-ind { gap: 14px; padding: 16px 18px; }
        }
        .gp-ind:hover { background: rgba(0,201,167,0.06); border-color: rgba(0,201,167,0.2); }

        .step-circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          flex-shrink: 0;
          background: linear-gradient(135deg, var(--teal), var(--teal-dark));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 900;
          color: #000;
        }
        @media (min-width: 768px) {
          .step-circle { width: 32px; height: 32px; font-size: 11px; }
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
        }
        @media (min-width: 768px) {
          .live-dot { width: 10px; height: 10px; }
        }

        /* Layout grids */
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
        @media (min-width: 1024px) {
          .hero-layout { gap: 60px; }
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .stats-row { grid-template-columns: repeat(4, 1fr); gap: 20px; }
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

        .kb-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 768px) {
          .kb-grid { grid-template-columns: 1fr; }
        }
        @media (min-width: 1024px) {
          .kb-grid { grid-template-columns: 1fr 1fr; }
        }

        .two-col {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 768px) {
          .two-col { grid-template-columns: 1fr 1fr; gap: 20px; }
        }
        @media (min-width: 1024px) {
          .two-col { gap: 32px; }
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
        @media (min-width: 1024px) {
          .two-col-wide { gap: 64px; }
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

        .gp-ind-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 768px) {
          .gp-ind-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .gp-india-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media (min-width: 768px) {
          .gp-india-stats { grid-template-columns: repeat(4, 1fr); }
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

        .btn-row {
          display: flex;
          gap: 12px;
          flex-direction: column;
          flex-wrap: wrap;
        }
        @media (min-width: 768px) {
          .btn-row { flex-direction: row; gap: 16px; }
        }

        .badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .sec { padding: 50px 20px; position: relative; overflow: hidden; }
        @media (min-width: 768px) { .sec { padding: 70px 32px; } }
        @media (min-width: 1024px) { .sec { padding: 100px 48px; } }

        .sec-hero { min-height: auto; }
        @media (min-width: 768px) { .sec-hero { min-height: 90vh; } }

        .sec-dark { background: var(--n1); }
        .sec-mid { background: var(--n2); }
        .sec-grad-n1n2-n1 { background: linear-gradient(180deg, var(--n1) 0%, var(--n2) 50%, var(--n1) 100%); }
        .sec-grad-up { background: linear-gradient(180deg, var(--n2) 0%, var(--n1) 100%); }
        .sec-grad-down { background: linear-gradient(180deg, var(--n1) 0%, var(--n2) 100%); }
        .sec-grad-n0n1 { background: linear-gradient(135deg, var(--n0) 0%, var(--n1) 100%); }

        .sec-content { max-width: 1280px; margin: 0 auto; position: relative; z-index: 2; }
        .sec-content-sm { max-width: 860px; margin: 0 auto; }
        .sec-content-1180 { max-width: 1180px; margin: 0 auto; }

        .bg-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: linear-gradient(rgba(0,201,167,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,201,167,0.02) 1px, transparent 1px);
          background-size: 56px 56px;
        }

        .hero-form {
          background: rgba(8,20,40,0.85);
          border: 1px solid rgba(0,201,167,0.22);
          border-radius: 20px;
          padding: 24px 16px;
          backdrop-filter: blur(16px);
          box-shadow: 0 32px 80px rgba(0,0,0,0.5);
          position: relative;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .hero-form { padding: 32px 28px; }
        }
        .hero-form__top {
          position: absolute;
          top: 0;
          left: 20%;
          right: 20%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--teal), transparent);
        }

        .fade-up { animation: heroFadeUp 0.7s ease both; }

        .card-teal {
          background: rgba(0,201,167,0.05);
          border: 1px solid rgba(0,201,167,0.18);
          border-radius: 18px;
        }

        .fi {
          width: 100%;
          padding: 10px 12px;
          border-radius: 9px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.14);
          color: #fff;
          font-size: 13px;
          font-family: 'Poppins', sans-serif;
          outline: none;
          transition: all 0.3s;
        }
        @media (min-width: 768px) {
          .fi { padding: 11px 14px; font-size: 13.5px; }
        }
        .fi-lg {
          padding: 12px 14px;
          font-size: 14px;
        }
        @media (min-width: 768px) {
          .fi-lg { padding: 13px 16px; font-size: 14.5px; }
        }
        .fi-dial { width: 100%; }
        @media (min-width: 768px) {
          .fi-dial { width: 82px; }
        }
        .fi-dial-lg { width: 100%; }
        @media (min-width: 768px) {
          .fi-dial-lg { width: 90px; }
        }
        .fi-select { cursor: pointer; }
        .fi-textarea { min-height: 70px; resize: vertical; }
        @media (min-width: 768px) {
          .fi-textarea { min-height: 76px; }
        }
        .fi-textarea-lg { min-height: 80px; resize: vertical; }
        @media (min-width: 768px) {
          .fi-textarea-lg { min-height: 110px; }
        }

        .ai-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 20px 16px;
          border-radius: 16px;
          transition: all 0.25s;
        }
        @media (min-width: 768px) {
          .ai-card { padding: 24px 22px; gap: 18px; }
        }
        .ai-card:hover { transform: translateX(4px); box-shadow: 0 8px 32px rgba(0,0,0,0.3); }
        .ai-card__icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          transition: transform 0.25s;
        }
        @media (min-width: 768px) {
          .ai-card__icon { width: 52px; height: 52px; font-size: 24px; }
        }
        .ai-card:hover .ai-card__icon { transform: scale(1.1) rotate(-4deg); }

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

        .acc-item {
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.02);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.25s;
        }
        .acc-item.open { border-color: rgba(0,201,167,0.4); background: rgba(0,201,167,0.06); }
        .acc-item__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
        }
        @media (min-width: 768px) {
          .acc-item__header { padding: 16px 18px; }
        }
        .acc-item__icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,201,167,0.1);
          border: 1px solid rgba(0,201,167,0.2);
          font-size: 16px;
          transition: background 0.25s;
        }
        @media (min-width: 768px) {
          .acc-item__icon-wrap { width: 40px; height: 40px; font-size: 18px; }
        }
        .acc-item.open .acc-item__icon-wrap { background: rgba(0,201,167,0.2); border-color: rgba(0,201,167,0.3); }
        .acc-item__title {
          font-size: 13px;
          font-weight: 700;
          color: rgba(255,255,255,0.72);
          transition: color 0.2s;
        }
        @media (min-width: 768px) {
          .acc-item__title { font-size: 14px; }
        }
        .acc-item.open .acc-item__title { color: #fff; }
        .acc-item__toggle {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 700;
          transition: all 0.25s;
          flex-shrink: 0;
        }
        @media (min-width: 768px) {
          .acc-item__toggle { width: 28px; height: 28px; font-size: 18px; }
        }
        .acc-item__body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease;
        }
        .acc-item.open .acc-item__body { max-height: 220px; }
        .acc-item__body p {
          padding: 0 16px 14px 64px;
          color: rgba(255,255,255,0.5);
          font-size: 12px;
          line-height: 1.75;
          margin: 0;
        }
        @media (min-width: 768px) {
          .acc-item__body p { padding: 0 18px 16px 76px; font-size: 13px; }
        }
      `}</style>

      <div style={{ fontFamily: "'Poppins',sans-serif" }}>

        {/* M1 — HERO */}
        <section className="sec sec-hero" style={{ padding: getHeroPadding(), background: `linear-gradient(135deg,${N0} 0%,#041628 45%,${N0} 100%)` }}>
          <Particles />
          {!isMobile && (
            <>
              <div style={{ position: "absolute", width: isTablet ? 500 : 650, height: isTablet ? 500 : 650, borderRadius: "50%", background: `radial-gradient(circle,rgba(0,201,167,.14) 0%,transparent 65%)`, top: "40%", left: "-10%", transform: "translateY(-50%)", animation: "heroPulse 8s ease-in-out infinite", pointerEvents: "none", zIndex: 1 }} />
              <div style={{ position: "absolute", width: isTablet ? 300 : 400, height: isTablet ? 300 : 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 65%)", top: "10%", right: "5%", animation: "heroPulse 10s ease-in-out infinite .5s", pointerEvents: "none", zIndex: 1 }} />
              <div style={{ position: "absolute", width: isTablet ? 400 : 520, height: isTablet ? 400 : 520, borderRadius: "50%", border: "1px dashed rgba(0,201,167,.08)", top: "50%", left: "-12%", transform: "translateY(-50%)", animation: "heroSpin 55s linear infinite", pointerEvents: "none", zIndex: 1 }} />
              <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(0,201,167,.28),transparent)", animation: "heroScan 7s linear infinite", pointerEvents: "none", zIndex: 2 }} />
            </>
          )}

          <div className="hero-layout">
            {/* Left */}
            <div className="fade-up">
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,201,167,.08)", border: "1px solid rgba(0,201,167,.25)", borderRadius: 100, padding: isMobile ? "6px 14px" : "7px 18px", marginBottom: isMobile ? 16 : 28, animation: "heroGlow 3s ease-in-out infinite" }}>
                <span style={{ width: isMobile ? 6 : 7, height: isMobile ? 6 : 7, borderRadius: "50%", background: "var(--teal)", boxShadow: "0 0 10px var(--teal)", animation: "heroBlink 1.4s ease-in-out infinite" }} />
                <span style={{ color: "var(--teal)", fontSize: isMobile ? 10 : 11.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>CRM Development — Canada, USA &amp; UK</span>
              </div>
              <h1 style={{ fontSize: isMobile ? "28px" : isTablet ? "36px" : "48px", fontWeight: 900, lineHeight: 1.12, marginBottom: isMobile ? 14 : 22, letterSpacing: "-0.025em", color: "#fff" }}>
                Best and Most Reliable{" "}<GradText>CRM Development Services</GradText>{" "}for Canada, USA &amp; UK
              </h1>
              <p style={{ color: "rgba(255,255,255,.52)", fontSize: isMobile ? "14px" : isTablet ? "15px" : "16.5px", lineHeight: 1.85, marginBottom: isMobile ? 18 : 28, maxWidth: 600 }}>
                At NNC Digital Solutions, we offer reliable, easy-to-understand CRM solutions that transform how your business manages customers, automates sales, and drives revenue growth.
              </p>
              <div className="badge-row" style={{ marginBottom: isMobile ? 20 : 36 }}>
                {[{ i: "🔵", l: "Google Partner" }, { i: "🏆", l: "ISO Certified" }, { i: "🔒", l: "GDPR Compliant" }, { i: "🍁", l: "PIPEDA Ready" }, { i: "⭐", l: "Clutch Top Agency" }].map(b => (
                  <span key={b.l} className="badge badge-soft" style={{ padding: isMobile ? "5px 10px" : "6px 13px", fontSize: isMobile ? 11 : 12.5 }}>{b.i} {b.l}</span>
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
            <div className="hero-form">
              <div className="hero-form__top" />
              {submitted ? (
                <div style={{ textAlign: "center", padding: isMobile ? "20px 0" : "40px 0" }}>
                  <div style={{ fontSize: isMobile ? 44 : 52, marginBottom: 16 }}>✅</div>
                  <h3 style={{ color: "#fff", fontSize: isMobile ? 18 : 20, fontWeight: 800, marginBottom: 10 }}>Request Received!</h3>
                  <p style={{ color: "rgba(255,255,255,.5)", fontSize: isMobile ? 13 : 14, lineHeight: 1.7, marginBottom: 24 }}>We&apos;ll contact you within 24 hours with a free consultation.</p>
                  <Link href="/crm-development">
                    <button onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", phone: "", dialCode: "+1", email: "", service: "", message: "", }); }} className="btn-teal" style={{ padding: isMobile ? "10px 22px" : "11px 26px", fontSize: isMobile ? 13 : 14 }}>Send Another →</button>
                  </Link>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: isMobile ? 14 : 22 }}>
                    <p className="teal" style={{ fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Free Consultation</p>
                    <h2 style={{ color: "#fff", fontSize: isMobile ? 16 : 18, fontWeight: 800, margin: 0, lineHeight: 1.3 }}>Get a Free CRM Strategy Call</h2>
                  </div>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
                    <div className="cf-name">
                      <div><label className="label-upper">First Name *</label><input className="fi" required placeholder="Jane" value={form.firstName} onChange={e => setF("firstName", e.target.value)} /></div>
                      <div><label className="label-upper">Last Name</label><input className="fi" placeholder="Smith" value={form.lastName} onChange={e => setF("lastName", e.target.value)} /></div>
                    </div>
                    <div>
                      <label className="label-upper">Phone</label>
                      <div className="phone-row">
                        <select className="fi fi-dial fi-select" style={{ width: isMobile ? "100%" : "82px" }} value={form.dialCode} onChange={e => setF("dialCode", e.target.value)}>
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
                    <div><label className="label-upper">Message</label><textarea className="fi fi-textarea" placeholder="Tell us about your project..." value={form.message} onChange={e => setF("message", e.target.value)} /></div>
                    <button className="btn-teal" type="submit" disabled={loading} style={{ marginTop: 4, width: "100%", opacity: loading ? .6 : 1, cursor: loading ? "wait" : "pointer" }}>
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
        <section className="sec-dark" style={{ padding: isMobile ? "40px 0" : "60px 0", overflow: "hidden", borderTop: "1px solid rgba(0,201,167,.1)", borderBottom: "1px solid rgba(0,201,167,.1)" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 30 : 40, padding: "0 24px" }}>
            <p style={{ fontWeight: 600, fontSize: isMobile ? 10 : 11.5, color: "rgba(255,255,255,.28)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>Our Happy Clients</p>
            <h2 style={{ fontSize: isMobile ? "22px" : "28px", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.25, margin: 0 }}>
              Trusted by Businesses Across <GradText>North America &amp; the UK</GradText>
            </h2>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="cl-track">
              {[...LOGOS, ...LOGOS].map((f, i) => (
                <div
                  key={i}
                  style={{
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: isMobile ? 60 : 70,
                    padding: isMobile ? "8px 14px" : "10px 18px",
                    background: "#fff",
                    borderRadius: 10,
                    margin: "0 8px",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                    opacity: .9,
                    transition: "transform .3s, box-shadow .3s"
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = "scale(1.08)"
                    el.style.boxShadow = "0 10px 28px rgba(0,0,0,0.25)"
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = ""
                    el.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)"
                  }}
                >
                  <img
                    src={`/${f}`}
                    alt={`Client ${i + 1}`}
                    style={{
                      height: isMobile ? 30 : 40,
                      width: "auto",
                      maxWidth: isMobile ? 90 : 120,
                      objectFit: "contain"
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* M3 — STATS */}
        <section className="sec sec-grad-n1n2-n1" style={{ borderTop: "1px solid rgba(0,201,167,.12)", borderBottom: "1px solid rgba(0,201,167,.12)" }}>
          <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(0,201,167,.3),transparent)", animation: "heroScan 4s linear infinite", pointerEvents: "none" }} />
          <div className="stats-row">
            {STATS.map((s, i) => (
              <div key={i} className="stat-card" style={{ animationDelay: `${i * .12}s` }}>
                <div className="stat-card__icon">{s.icon}</div>
                <div className="stat-card__val"><Counter to={s.val} sfx={s.sfx} /></div>
                <div style={{ fontSize: isMobile ? 13 : 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: isMobile ? 11 : 12.5, color: "rgba(255,255,255,.38)", fontWeight: 500 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* M4 — SUCCESS STORIES */}
        <section className="sec sec-grad-up" style={{ padding: getSectionPadding() }}>
          <div className="bg-grid" />
          <div className="sec-content">
            <SectionHeader badge="Proven Results" title={<>Success <GradText>Stories</GradText></>} sub="Real results for real businesses across Canada, USA & UK." maxW={500} />
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
                  <span className="badge-sm" style={{ background: CASES[story].tagBg, border: `1px solid ${CASES[story].tagBd}`, color: CASES[story].tagClr, fontSize: isMobile ? 9 : 10 }}>{CASES[story].tag}</span>
                </div>
                <h3 style={{ color: "#fff", fontSize: isMobile ? "18px" : "22px", fontWeight: 800, marginBottom: isMobile ? 16 : 28, lineHeight: 1.3 }}>{CASES[story].title}</h3>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 16 : 20, marginBottom: isMobile ? 24 : 32 }}>
                  {[{ label: "Challenge", text: CASES[story].challenge, icon: "⚠️" }, { label: "Solution", text: CASES[story].solution, icon: "💡" }].map(col => (
                    <div key={col.label} style={{ padding: isMobile ? "14px" : "20px", borderRadius: 14, background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)" }}>
                      <p className="teal" style={{ fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>{col.icon} {col.label}</p>
                      <p style={{ color: "rgba(255,255,255,.6)", fontSize: isMobile ? 12 : 14, lineHeight: 1.7, margin: 0 }}>{col.text}</p>
                    </div>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: isMobile ? 10 : 14 }}>
                  {CASES[story].metrics.map((m, i) => (
                    <div key={i} className="metric-card" style={{ textAlign: "center", padding: isMobile ? "12px 8px" : "18px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
                      <div style={{ fontSize: isMobile ? 18 : 22, marginBottom: 6 }}>{m.i}</div>
                      <div className="metric-card__val" style={{ fontSize: isMobile ? "20px" : "26px", fontWeight: 900, marginBottom: 4, background: `linear-gradient(135deg,#fff 30%,var(--teal))`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{m.v}</div>
                      <div className="metric-card__label" style={{ fontSize: isMobile ? 10 : 11, color: "rgba(255,255,255,0.45)" }}>{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
              {CASES.map((_, i) => (
                <button key={i} onClick={() => setStory(i)} style={{ width: story === i ? 24 : 8, height: 8, borderRadius: 100, background: story === i ? "var(--teal)" : "rgba(255,255,255,.2)", border: "none", cursor: "pointer", transition: "all .3s ease" }} />
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: isMobile ? 32 : 44 }}>
              <Link href="/case-studies" className="btn-teal">View All Case Studies →</Link>
            </div>
          </div>
        </section>

        {/* M5 — SERVICES */}
        <section className="sec sec-grad-n1n2-n1" style={{ padding: getSectionPadding() }}>
          <div className="bg-grid" />
          <div className="sec-content">
            <SectionHeader badge="What We Build" title={<>CRM Services <GradText>We Offer</GradText></>} sub="A comprehensive lineup of CRM and digital solutions for clients across Canada, USA & UK." maxW={580} />
            <div className="svc-grid">
              {SERVICES.map((s, i) => (
                <Link key={s.title} href={`/services/${s.slug}`} style={{ textDecoration: "none" }}>
                  <div className="svc-card">
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                      <div className="svc-card__icon">{s.icon}</div>
                      <span className="svc-card__tag">{s.tag}</span>
                    </div>
                    <h3 className="svc-card__title">{s.title}</h3>
                    <p className="svc-card__desc">{s.desc}</p>
                    <span className="svc-card__link">Learn More <span>→</span></span>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: isMobile ? 32 : 48 }}>
              <Link href="/services" className="btn-teal">View All Services →</Link>
            </div>
          </div>
        </section>

        {/* M6 — ACCORDION */}
        <section className="sec sec-mid" style={{ padding: getSectionPadding() }}>
          <div className="sec-content">
            <SectionHeader badge="CRM Capabilities" title={<>A Good CRM Always <GradText>Allows You to Do More</GradText></>} sub="Explore the key capabilities that make our CRM solutions stand out for businesses in Canada, USA & UK." maxW={520} />
            <div className="two-col">
              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
                {ACCORDION_L.map((item, i) => <AccItem key={item.title} item={item} open={accL === i} toggle={() => setAccL(accL === i ? null : i)} isMobile={isMobile} />)}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
                {ACCORDION_R.map((item, i) => <AccItem key={item.title} item={item} open={accR === i} toggle={() => setAccR(accR === i ? null : i)} isMobile={isMobile} />)}
              </div>
            </div>
          </div>
        </section>

        {/* M7 — KEY BENEFITS */}
        <section className="sec sec-grad-down" style={{ padding: getSectionPadding() }}>
          <div className="bg-grid" />
          <div className="sec-content">
            <SectionHeader badge="Why It Matters" title={<>Key Benefits of <GradText>CRM Development</GradText></>} sub="Here's what you gain with advanced, next-gen CRM development services." />
            <div className="kb-grid">
              {BENEFITS.map((b, i) => (
                <div key={i} className="kb-card">
                  <div className="kb-card__num">{b.num}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}><span style={{ fontSize: isMobile ? 20 : 22 }}>{b.icon}</span><h3 style={{ color: "#fff", fontSize: isMobile ? "16px" : "18px", fontWeight: 800, margin: 0 }}>{b.title}</h3></div>
                    <p style={{ color: "rgba(255,255,255,.52)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.7, margin: "0 0 12px" }}>{b.desc}</p>
                    <div className="badge-row">
                      {b.tags.map(tag => <span key={tag} className="badge" style={{ fontSize: isMobile ? 9 : 10.5 }}>{tag}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: isMobile ? 32 : 48 }}>
              <Link href="/contact" className="btn-teal">Start Your CRM Journey →</Link>
            </div>
          </div>
        </section>

        {/* M8 — PLATFORMS */}
        <section className="sec sec-mid" style={{ padding: getSectionPadding() }}>
          <div className="bg-grid" />
          <div className="sec-content">
            <SectionHeader badge="Our Tech Stack" title={<>Leading CRM Platform Tools <GradText>That We Use</GradText></>} sub="Here is a closer look at some of the tools we leverage for the best possible business outcomes." maxW={560} />
            <div className="pt-grid">
              {TOOLS.map((tool, i) => (
                <div key={i} className="pt-card" style={{ background: tool.bg, border: `1px solid ${tool.bd}` }}>
                  <div className="pt-card__icon" style={{ border: `1px solid ${tool.bd}` }}>{tool.icon}</div>
                  <h3 className="pt-card__name">{tool.name}</h3>
                  <p className="pt-card__desc">{tool.desc}</p>
                  {tool.bespoke && <div className="badge" style={{ marginTop: 10, fontSize: isMobile ? 9 : 10.5 }}>⚡ Fully Bespoke</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* M9 — HIRE */}
        <section className="sec sec-grad-n0n1" style={{ padding: getSectionPadding() }}>
          <div className="sec-content">
            <SectionHeader badge="Hire Developers" title={<>Hire CRM Developers <GradText>Tailored to Your Needs</GradText></>} sub="Whether you're an enterprise, agency, or start-up — we have the right CRM developer for your exact challenge." maxW={560} />
            <div className="two-col" style={{ marginBottom: isMobile ? 12 : 16 }}>
              <p className="teal" style={{ fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>By Business Type</p>
              <p className="teal" style={{ fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>By CRM Type</p>
            </div>
            <div className="two-col">
              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
                {HIRE_LEFT.map((item, i) => <AccItem key={item.title} item={item} open={hireL === i} toggle={() => setHireL(hireL === i ? null : i)} isMobile={isMobile} />)}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
                {HIRE_RIGHT.map((item, i) => <AccItem key={item.title} item={item} open={hireR === i} toggle={() => setHireR(hireR === i ? null : i)} isMobile={isMobile} />)}
              </div>
            </div>
            <div className="btn-row" style={{ marginTop: isMobile ? 32 : 48, justifyContent: "center" }}>
              <Link href="/hire-developers" className="btn-teal">📅 Hire a CRM Developer</Link>
              <Link href="/pricing" className="btn-outline">View Pricing →</Link>
            </div>
          </div>
        </section>

        {/* M10 — AI CRM (Video Removed) */}
        <section className="sec sec-grad-up" style={{ padding: getSectionPadding() }}>
          <div className="sec-content">
            <div style={{ marginBottom: isMobile ? 32 : 40, maxWidth: 620, marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
              <div className="section-badge"><span className="section-badge__dot" /><span className="section-badge__text">AI-Powered</span></div>
              <h2 className="section-h2">Leverage <GradText>AI-Powered CRM</GradText> Solutions</h2>
              <p style={{ color: "rgba(255,255,255,.5)", fontSize: isMobile ? 14 : 15, lineHeight: 1.8 }}>Our AI-backed CRM solutions aim at simplification and higher efficiency for your workflows.</p>
            </div>
            <div className="two-col-wide">
              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 12 : 16 }}>
                {AI_FEATS.map((f, i) => (
                  <div key={i} className="ai-card" style={{ background: f.bg, border: `1px solid ${f.bd}` }}>
                    <div className="ai-card__icon" style={{ background: f.bg, border: `1px solid ${f.bd}` }}>{f.icon}</div>
                    <div>
                      <h3 style={{ color: "#fff", fontSize: isMobile ? "15px" : "17px", fontWeight: 700, marginBottom: 6, lineHeight: 1.3 }}>{f.title}</h3>
                      <p style={{ color: "rgba(255,255,255,.52)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
                <Link href="/ai-solutions" className="btn-teal" style={{ marginTop: 8, alignSelf: "flex-start" }}>🤖 Explore AI Solutions →</Link>
              </div>

              {/* AI Visual Panel */}
              <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", background: "linear-gradient(135deg,#0a1f38,#061425)", border: "1px solid rgba(0,201,167,.15)", minHeight: isMobile ? "auto" : 460, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: isMobile ? "20px" : "36px 32px" }}>
                <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(0,201,167,.5),transparent)", animation: "aiScan 3s linear infinite" }} />
                <div style={{ position: "absolute", top: "5%", right: "5%", width: isMobile ? 120 : 180, height: isMobile ? 120 : 180, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,.12) 0%,transparent 70%)", animation: "aiPulse 4s ease-in-out infinite", pointerEvents: "none" }} />
                <div style={{ position: "relative", zIndex: 2 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: isMobile ? 16 : 24 }}>
                    <div className="live-dot" />
                    <span style={{ color: "rgba(255,255,255,.5)", fontSize: isMobile ? 11 : 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>AI Engine — Live</span>
                  </div>
                  {[{ label: "Analysing customer data", val: "100%", color: "var(--teal)" }, { label: "Lead scoring model", val: "94%", color: "#818cf8" }, { label: "Chatbot automation", val: "87%", color: "var(--teal)" }, { label: "Pipeline prediction", val: "91%", color: "#f59e0b" }].map((row, i) => (
                    <div key={i} style={{ marginBottom: isMobile ? 10 : 16 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                        <span style={{ color: "rgba(255,255,255,.6)", fontSize: isMobile ? 11 : 12.5, fontWeight: 500 }}>{row.label}</span>
                        <span style={{ color: row.color, fontSize: isMobile ? 11 : 12.5, fontWeight: 700 }}>{row.val}</span>
                      </div>
                      <div style={{ height: 4, borderRadius: 4, background: "rgba(255,255,255,.06)", overflow: "hidden" }}>
                        <div style={{ height: "100%", borderRadius: 4, background: `linear-gradient(90deg,${row.color},${row.color}88)`, width: row.val }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: isMobile ? 8 : 12, position: "relative", zIndex: 2, marginTop: isMobile ? 16 : 0 }}>
                  {[{ label: "Leads Scored", val: "2,847", icon: "🎯" }, { label: "Chats Automated", val: "1,203", icon: "💬" }, { label: "Accuracy", val: "96.4%", icon: "✅" }].map((m, i) => (
                    <div key={i} style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: isMobile ? "10px 6px" : "14px 12px", textAlign: "center" }}>
                      <div style={{ fontSize: isMobile ? 18 : 20, marginBottom: 4 }}>{m.icon}</div>
                      <div style={{ color: "#fff", fontSize: isMobile ? "14px" : "16px", fontWeight: 800, marginBottom: 2 }}>{m.val}</div>
                      <div style={{ color: "rgba(255,255,255,.4)", fontSize: isMobile ? 10 : 11, fontWeight: 500 }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* M11 — CTA BANNER */}
        <section style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ background: "linear-gradient(135deg,#0055b3 0%,#0077cc 35%,#00a07a 65%,#00C9A7 100%)", backgroundSize: "300% 300%", animation: "ctaBgShift 8s ease infinite", padding: isMobile ? "50px 20px" : "80px 48px", textAlign: "center", position: "relative" }}>
            <div style={{ position: "absolute", top: "-20%", left: "-5%", width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,.1) 0%,transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-20%", right: "-5%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
            <div style={{ position: "relative", zIndex: 2, maxWidth: isMobile ? "100%" : 760, margin: "0 auto" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.3)", borderRadius: 100, padding: isMobile ? "5px 14px" : "6px 18px", marginBottom: 20 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff", display: "block" }} />
                <span style={{ color: "#fff", fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Get Started Today</span>
              </div>
              <h2 style={{ fontSize: isMobile ? "24px" : isTablet ? "36px" : "42px", fontWeight: 900, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Want CRM Solutions That Take Your<br />Business to the <span style={{ textDecoration: "underline", textDecorationColor: "rgba(255,255,255,.4)" }}>Next Level?</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,.82)", fontSize: isMobile ? "14px" : isTablet ? "15px" : "17px", lineHeight: 1.75, marginBottom: isMobile ? 28 : 32 }}>Connect with NNC Digital today and let&apos;s build something extraordinary together.</p>
              <div className="btn-row" style={{ justifyContent: "center" }}>
                <Link href="/contact" className="btn-white">✦ Connect Now</Link>
                <Link href="/book-consultation" className="btn-cta-outline">📅 Book a Free Call →</Link>
              </div>
              <p style={{ color: "rgba(255,255,255,.5)", fontSize: isMobile ? 11 : 13, marginTop: 20 }}>🇨🇦 Canada &nbsp;·&nbsp; 🇺🇸 USA &nbsp;·&nbsp; 🇬🇧 UK &nbsp;·&nbsp; 🇮🇳 India &nbsp;&nbsp;|&nbsp;&nbsp; hello@nncdigital.com</p>
            </div>
          </div>
        </section>

        {/* M12 — WHY CHOOSE US (Video Removed) */}
        <section className="sec sec-grad-down" style={{ padding: getSectionPadding() }}>
          <div className="sec-content">
            <div className="two-col-wide">
              <div>
                <div className="section-badge"><span className="section-badge__dot" /><span className="section-badge__text">Our Story</span></div>
                <h2 className="section-h2">Why Choose Us as Your <GradText>CRM Development</GradText> Agency?</h2>
                <p style={{ color: "rgba(255,255,255,.55)", fontSize: isMobile ? "13px" : "15px", lineHeight: 1.8, marginBottom: 16 }}>NNC Digital Solutions is backed by <strong style={{ color: "#fff" }}>Nakshatra Namaha Creations Pvt. Ltd.</strong> — one of Bangalore&apos;s most respected digital studios with <span className="teal" style={{ fontWeight: 600 }}>8+ years of experience</span> and <span className="teal" style={{ fontWeight: 600 }}>565+ projects delivered</span>.</p>
                <p style={{ color: "rgba(255,255,255,.55)", fontSize: isMobile ? "13px" : "15px", lineHeight: 1.8, marginBottom: isMobile ? 24 : 32 }}>We launched NNC Digital as our international arm — bringing the same proven technical expertise to the Canadian, US, and UK markets with transparent pricing and long-term partnership.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 8 : 10, marginBottom: isMobile ? 24 : 36 }}>
                  {WCU_POINTS.map((p, i) => (
                    <div key={i} className="wcu-point">
                      <span style={{ fontSize: isMobile ? 16 : 18, flexShrink: 0 }}>{p.icon}</span>
                      <span style={{ color: "rgba(255,255,255,.72)", fontSize: isMobile ? "12px" : "14px", fontWeight: 500 }}>{p.text}</span>
                    </div>
                  ))}
                </div>
                <div className="wcu-stats">
                  {WCU_STATS.map(st => (
                    <div key={st.l} className="wcu-stat">
                      <div className="wcu-stat__val"><Counter to={st.n} sfx={st.s} /></div>
                      <div style={{ fontSize: isMobile ? 10 : 11, color: "rgba(255,255,255,.4)" }}>{st.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                {/* Video removed - replaced with CTA card */}
                <div className="card-teal" style={{ padding: isMobile ? "30px 20px" : "40px 30px", textAlign: "center" }}>
                  <div style={{ fontSize: isMobile ? 48 : 64, marginBottom: 16 }}>💼</div>
                  <h3 style={{ color: "#fff", fontSize: isMobile ? "20px" : "24px", fontWeight: 800, marginBottom: 12 }}>Ready to Transform Your CRM?</h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "14px" : "16px", lineHeight: 1.7, marginBottom: 24 }}>
                    Join 1500+ businesses that have streamlined their operations with our custom CRM solutions.
                  </p>
                  <Link href="/contact" className="btn-teal" style={{ width: isMobile ? "100%" : "auto" }}>Get Started Today →</Link>
                </div>
                <div className="badge-row" style={{ marginTop: 20 }}>
                  {["🇨🇦 Canada", "🇺🇸 USA", "🇬🇧 UK", "🇮🇳 India"].map(b => (
                    <span key={b} className="badge badge-soft" style={{ fontSize: isMobile ? 11 : 12.5, padding: isMobile ? "5px 10px" : "6px 14px" }}>{b}</span>
                  ))}
                </div>
                <div className="btn-row" style={{ marginTop: 20 }}>
                  <Link href="/book-consultation" className="btn-teal" style={{ flex: 1 }}>📅 Book a Free Strategy Call</Link>
                  <Link href="/portfolio" className="btn-outline" style={{ flex: 1 }}>Our Portfolio →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* M13 — GLOBAL PRESENCE */}
        <section className="sec sec-grad-n0n1" style={{ padding: getSectionPadding() }}>
          <div className="sec-content-1180">
            <SectionHeader badge="Our Reach" title={<>Global <GradText>Presence</GradText></>} sub="Client-facing offices in North America & the UK. Engineering headquarters in Bangalore, India." maxW={500} />
            <div style={{ display: "flex", gap: isMobile ? 8 : 12, justifyContent: "center", marginBottom: isMobile ? 30 : 40, flexWrap: "wrap" }}>
              {[{ key: "int", label: "🌍 North America & UK" }, { key: "india", label: "🇮🇳 India (Engineering HQ)" }].map(t => (
                <button key={t.key} className={`gp-tab${gTab === t.key ? " act" : ""}`} onClick={() => setGTab(t.key as "int" | "india")}>{t.label}</button>
              ))}
            </div>
            {gTab === "int" && (
              <div>
                <div className="gp-offices" style={{ marginBottom: 24 }}>
                  {INT_OFFICES.map((o, i) => (
                    <div key={i} className="gp-card">
                      <div style={{ fontSize: isMobile ? 32 : 36, marginBottom: isMobile ? 10 : 14 }}>{o.flag}</div>
                      <h3 style={{ color: "#fff", fontSize: isMobile ? "16px" : "18px", fontWeight: 800, marginBottom: 4 }}>{o.city}</h3>
                      <p className="teal" style={{ fontSize: isMobile ? 10 : 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: isMobile ? 12 : 16 }}>{o.tz}</p>
                      <Link href={`tel:${o.phone.replace(/\s|-/g, "")}`} className="h-teal" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,.7)", fontSize: isMobile ? 12 : 14, fontWeight: 600, textDecoration: "none", marginBottom: 8 }}>📞 {o.phone}</Link>
                      <Link href={`mailto:${o.email}`} className="h-teal" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,.5)", fontSize: isMobile ? 11 : 13, textDecoration: "none" }}>✉️ {o.email}</Link>
                    </div>
                  ))}
                </div>
                <div style={{ borderRadius: 14, padding: isMobile ? "16px 20px" : "20px 28px", background: "rgba(0,201,167,.05)", border: "1px solid rgba(0,201,167,.15)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}><div className="live-dot" /><span style={{ color: "rgba(255,255,255,.6)", fontSize: isMobile ? 12 : 14, fontWeight: 500 }}>Available Mon–Fri, 9am–6pm in your time zone</span></div>
                  <Link href="mailto:hello@nncdigital.com" className="h-teal teal" style={{ fontSize: isMobile ? 12 : 14, fontWeight: 700, textDecoration: "none" }}>hello@nncdigital.com →</Link>
                </div>
              </div>
            )}
            {gTab === "india" && (
              <div>
                <div style={{ borderRadius: 20, padding: isMobile ? "24px 20px" : "36px", background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.08)", marginBottom: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 14, marginBottom: isMobile ? 20 : 24, flexWrap: "wrap" }}>
                    <span style={{ fontSize: isMobile ? 28 : 32 }}>🇮🇳</span>
                    <div>
                      <h3 style={{ color: "#fff", fontSize: isMobile ? "16px" : "18px", fontWeight: 800, margin: 0 }}>Nakshatra Namaha Creations Pvt. Ltd.</h3>
                      <p style={{ color: "rgba(255,255,255,.4)", fontSize: isMobile ? 12 : 13, margin: "4px 0 0" }}>Engineering &amp; Delivery HQ — Bangalore, India</p>
                    </div>
                  </div>
                  <div className="gp-ind-grid">
                    {INDIA_OFFICES.map((o, i) => (
                      <div key={i} className="gp-ind">
                        <span style={{ fontSize: isMobile ? 20 : 22 }}>🇮🇳</span>
                        <div>
                          <p style={{ color: "#fff", fontSize: isMobile ? "13px" : "14px", fontWeight: 700, margin: 0 }}>{o.city}</p>
                          <p style={{ color: "rgba(255,255,255,.38)", fontSize: isMobile ? 10 : 12, margin: "2px 0 0" }}>{o.note}</p>
                          {o.phone && <p className="teal" style={{ fontSize: isMobile ? 11 : 12.5, fontWeight: 600, margin: "4px 0 0" }}>{o.phone}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: isMobile ? 16 : 24, paddingTop: isMobile ? 16 : 20, borderTop: "1px solid rgba(255,255,255,.07)" }}>
                    <p style={{ color: "rgba(255,255,255,.35)", fontSize: isMobile ? 12 : 13, margin: 0 }}>✉️ info@nakshatranamahacreations.com</p>
                  </div>
                </div>
                <div className="gp-india-stats">
                  {[{ n: "8+", l: "Years Active" }, { n: "565+", l: "Projects" }, { n: "100+", l: "Team Members" }, { n: "4", l: "India Offices" }].map((s, i) => (
                    <div key={i} style={{ textAlign: "center", padding: isMobile ? "14px 8px" : "20px 12px", borderRadius: 14, background: "rgba(0,201,167,.06)", border: "1px solid rgba(0,201,167,.15)", transition: "transform .25s,background .25s", cursor: "default" }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-4px)"; el.style.background = "rgba(0,201,167,.12)"; }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.background = "rgba(0,201,167,.06)"; }}>
                      <p className="teal" style={{ fontSize: isMobile ? "22px" : "26px", fontWeight: 900, margin: 0 }}>{s.n}</p>
                      <p style={{ fontSize: isMobile ? 9 : 11, color: "rgba(255,255,255,.4)", margin: "4px 0 0", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* M14 — FAQ */}
        <section className="sec sec-grad-down" style={{ padding: getSectionPadding() }}>
          <div className="sec-content-sm">
            <SectionHeader badge="FAQs" title={<>Frequently Asked <GradText>Questions</GradText></>} sub="Everything you need to know about custom CRM development for businesses in Canada, USA & UK." />
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
              <p style={{ color: "rgba(255,255,255,.4)", fontSize: isMobile ? 12 : 14, marginBottom: 16 }}>Still have questions? We respond within 24 hours.</p>
              <Link href="/contact" className="btn-teal">Ask Us Anything →</Link>
            </div>
          </div>
        </section>

        {/* M15 — CONTACT FORM */}
        <section className="sec sec-grad-up" style={{ padding: getSectionPadding(), background: "linear-gradient(180deg,var(--n2) 0%,var(--n0) 100%)" }}>
          <div className="sec-content-1180">
            <SectionHeader badge="Get In Touch" title={<>Ready to Build <GradText>Next-Level</GradText> Custom Digital Solutions?</>} sub="Tell us about your project. We respond within 24 hours with a free consultation and honest advice." maxW={540} />
            <div className="cf-grid">
              <div style={{ background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 20, padding: isMobile ? "20px" : "36px" }}>
                {cSubmitted ? (
                  <div style={{ textAlign: "center", padding: isMobile ? "20px 0" : "40px 0" }}>
                    <div style={{ fontSize: isMobile ? 48 : 56, marginBottom: 16 }}>✅</div>
                    <h3 style={{ color: "#fff", fontSize: isMobile ? 18 : 22, fontWeight: 800, marginBottom: 8 }}>Message Sent!</h3>
                    <p style={{ color: "rgba(255,255,255,.5)", fontSize: isMobile ? 13 : 15, lineHeight: 1.7, marginBottom: 20 }}>Thank you — we&apos;ll respond within 24 hours with practical advice.</p>
                    <Link href="/crm-development">
                      <button onClick={() => { setCSubmitted(false); setCForm({ name: "", phone: "", dialCode: "+1", email: "", service: "", project: "", }); }} className="btn-teal" style={{ minWidth: "auto", padding: isMobile ? "10px 22px" : "12px 28px", fontSize: isMobile ? "13px" : "14px" }}>Send Another →</button>
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleCSubmit}>
                    <div className="cf-name" style={{ marginBottom: isMobile ? 12 : 16 }}>
                      <div><label className="label-upper-lg">Full Name *</label><input className="fi fi-lg" required placeholder="Jane Smith" value={cForm.name} onChange={e => setCF("name", e.target.value)} /></div>
                      <div>
                        <label className="label-upper-lg">Phone</label>
                        <div className="phone-row">
                          <select className="fi fi-lg fi-dial-lg fi-select" style={{ width: isMobile ? "100%" : "90px" }} value={cForm.dialCode} onChange={e => setCF("dialCode", e.target.value)}>
                            {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                          </select>
                          <input className="fi fi-lg" type="tel" placeholder="647 XXX XXXX" value={cForm.phone} onChange={e => setCF("phone", e.target.value)} />
                        </div>
                      </div>
                    </div>
                    <div style={{ marginBottom: isMobile ? 12 : 16 }}><label className="label-upper-lg">Business Email *</label><input className="fi fi-lg" required type="email" placeholder="jane@yourcompany.com" value={cForm.email} onChange={e => setCF("email", e.target.value)} /></div>
                    <div style={{ marginBottom: isMobile ? 12 : 16 }}>
                      <label className="label-upper-lg">Service of Interest</label>
                      <select className="fi fi-lg fi-select" value={cForm.service} onChange={e => setCF("service", e.target.value)}>
                        <option value="">Select a service...</option>
                        {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div style={{ marginBottom: 20 }}><label className="label-upper-lg">Project Description</label><textarea className="fi fi-lg fi-textarea-lg" placeholder="Briefly describe your project, goals, and timeline..." value={cForm.project} onChange={e => setCF("project", e.target.value)} /></div>
                    <button className="btn-teal" type="submit" disabled={cLoading} style={{ width: "100%", opacity: cLoading ? .6 : 1, cursor: cLoading ? "wait" : "pointer" }}>{cLoading ? "Sending..." : "Submit — Get Free Consultation →"}</button>
                    <p style={{ color: "rgba(255,255,255,.3)", fontSize: isMobile ? 10 : 11.5, textAlign: "center", marginTop: 12 }}>🔒 Your information is 100% secure and never shared.</p>
                  </form>
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 16 : 20 }}>
                <div className="card-teal" style={{ padding: isMobile ? "20px" : "28px" }}>
                  <h3 style={{ color: "#fff", fontSize: isMobile ? "15px" : "16px", fontWeight: 800, marginBottom: isMobile ? 14 : 18 }}>What Happens After You Submit?</h3>
                  {[{ s: "1", text: "We review your project within a few hours — no bots." }, { s: "2", text: "A senior consultant calls you within 24 hours." }, { s: "3", text: "We send a free scoping document with timeline & cost." }, { s: "4", text: "You decide — no pressure, no obligation." }].map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: isMobile ? 10 : 14, alignItems: "flex-start", marginBottom: i < 3 ? (isMobile ? 12 : 16) : 0, padding: isMobile ? "8px 12px" : "12px 14px", borderRadius: 10, background: "rgba(255,255,255,.03)" }}>
                      <div className="step-circle">{step.s}</div>
                      <p style={{ color: "rgba(255,255,255,.65)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.6, margin: 0 }}>{step.text}</p>
                    </div>
                  ))}
                </div>
                <div style={{ background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 18, padding: isMobile ? "20px" : "26px" }}>
                  <h3 style={{ color: "rgba(255,255,255,.4)", fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: isMobile ? 14 : 18 }}>Direct Contacts</h3>
                  {[{ flag: "🇨🇦", label: "Canada", phone: "+1 647-XXX-XXXX" }, { flag: "🇺🇸", label: "USA", phone: "+1 631-XXX-XXXX" }, { flag: "🇬🇧", label: "UK", phone: "+44 20-XXXX-XXXX" }].map((c, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: isMobile ? "8px 0" : "12px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,.06)" : "none", flexWrap: "wrap", gap: 8 }}>
                      <span style={{ color: "rgba(255,255,255,.55)", fontSize: isMobile ? "12px" : "14px", fontWeight: 500 }}>{c.flag} {c.label}</span>
                      <Link href={`tel:${c.phone.replace(/\s|-/g, "")}`} className="h-teal teal" style={{ fontSize: isMobile ? "12px" : "14px", fontWeight: 700, textDecoration: "none" }}>{c.phone}</Link>
                    </div>
                  ))}
                  <div style={{ marginTop: isMobile ? 12 : 16, paddingTop: isMobile ? 12 : 16, borderTop: "1px solid rgba(255,255,255,.06)" }}>
                    <Link href="mailto:hello@nncdigital.com" className="h-teal" style={{ color: "rgba(255,255,255,.5)", fontSize: isMobile ? "12px" : "14px", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>✉️ hello@nncdigital.com</Link>
                  </div>
                </div>
                <div className="badge-row">
                  {["🔵 Google Partner", "🏆 ISO Certified", "🔒 GDPR Compliant", "🍁 PIPEDA Ready", "⭐ Clutch Top Agency"].map(b => (
                    <span key={b} className="badge badge-soft" style={{ fontSize: isMobile ? 10 : 12, padding: isMobile ? "4px 10px" : "6px 12px" }}>{b}</span>
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