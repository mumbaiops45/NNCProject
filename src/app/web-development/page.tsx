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

const STATS_TOP = [
  { val: 200, sfx: "+", label: "Web Projects Delivered", sub: "Across 12 countries", icon: "🌐" },
  { val: 10, sfx: "+", label: "Years of Expertise", sub: "Deep tech since 2014", icon: "💡" },
  { val: 50, sfx: "+", label: "Clients Globally", sub: "CA · USA · UK · IN", icon: "🌍" },
  { val: 98, sfx: "%", label: "Client Retention", sub: "Long-term partnerships", icon: "🤝" },
];

const CASES = [
  {
    industry: "Manufacturing", icon: "🏭", tag: "Operations", tagClr: "#818cf8", tagBg: "rgba(99,102,241,.15)", tagBd: "rgba(99,102,241,.35)",
    title: "35% Efficiency Boost for a Canadian Manufacturer",
    challenge: "An outdated, slow website with no mobile support was costing leads and damaging brand credibility with enterprise buyers.",
    solution: "We rebuilt their site on a modern React + Next.js stack with a CMS, fast load times, and an integrated quote request system.",
    metrics: [{ l: "Lead Growth", v: "+35%", i: "⚡" }, { l: "Page Speed", v: "98/100", i: "✅" }, { l: "Go-live Time", v: "6 wks", i: "🚀" }]
  },
  {
    industry: "Healthcare", icon: "🏥", tag: "Healthcare", tagClr: "#22c55e", tagBg: "rgba(34,197,94,.12)", tagBd: "rgba(34,197,94,.3)",
    title: "42% More Bookings for a UK Healthcare Provider",
    challenge: "A multi-location clinic had a fragmented web presence with no online booking, poor mobile UX, and zero SEO visibility.",
    solution: "NNC built a GDPR-compliant healthcare portal with online booking, patient FAQs, and location-specific SEO landing pages.",
    metrics: [{ l: "More Bookings", v: "+42%", i: "📅" }, { l: "Organic Traffic", v: "+3×", i: "✅" }, { l: "Patient Score", v: "4.8★", i: "⭐" }]
  },
  {
    industry: "D2C E-Commerce", icon: "🛒", tag: "E-Commerce", tagClr: T, tagBg: "rgba(0,201,167,.12)", tagBd: "rgba(0,201,167,.3)",
    title: "2.4× Conversion Rate for a US D2C Brand",
    challenge: "A direct-to-consumer brand had a slow, poorly structured Shopify store losing customers at checkout with high bounce rates.",
    solution: "We rebuilt the storefront with custom UI/UX, speed optimisation, and full funnel conversion tracking integrated into HubSpot.",
    metrics: [{ l: "Conversion", v: "2.4×", i: "📈" }, { l: "Revenue", v: "+68%", i: "💰" }, { l: "Bounce Rate", v: "−44%", i: "✅" }]
  },
];

const SERVICES = [
  { icon: "🏢", title: "Enterprise Website Development", desc: "Scalable, high-performance websites for enterprises in Canada, USA & UK. Built for growth.", tag: "Enterprise" },
  { icon: "🛒", title: "E-Commerce Development", desc: "Custom online stores with seamless checkout, inventory sync, and conversion-focused design.", tag: "E-Commerce" },
  { icon: "🎯", title: "Landing Page & Funnel Dev", desc: "High-converting landing pages and sales funnels designed to turn traffic into qualified leads.", tag: "Conversion" },
  { icon: "🎨", title: "UI/UX Design & Prototyping", desc: "User-first design systems, wireframes, and clickable prototypes before a single line of code is written.", tag: "Design" },
  { icon: "🔧", title: "Website Maintenance & Support", desc: "Ongoing updates, security patches, performance monitoring, and 24/7 technical support.", tag: "Support" },
  { icon: "⚙️", title: "Custom Web Application", desc: "Bespoke web apps with complex business logic, APIs, and integrations built for your exact process.", tag: "Custom" },
  { icon: "📝", title: "WordPress Development", desc: "Custom WordPress themes, plugins, and enterprise CMS solutions — fully managed and optimised.", tag: "WordPress" },
  { icon: "🌐", title: "Web Portal Development", desc: "Client portals, partner dashboards, and self-service platforms that reduce support load.", tag: "Portal" },
  { icon: "🔄", title: "Website Redesign", desc: "Modernise your existing website — improved UX, faster load times, and better SEO rankings.", tag: "Redesign" },
  { icon: "📱", title: "Progressive Web Apps", desc: "App-like web experiences that work offline, load instantly, and are installable from the browser.", tag: "PWA" },
  { icon: "🔗", title: "API & Integration Services", desc: "Connect your website to CRM, ERP, payment gateways, and third-party platforms via REST & GraphQL.", tag: "Integration" },
  { icon: "🔍", title: "SEO & Performance Optimisation", desc: "Core Web Vitals, structured data, on-page SEO, and technical audits to dominate search rankings.", tag: "SEO" },
];

const BENEFITS = [
  { num: "01", icon: "⚡", title: "Core Web Vitals Optimised", desc: "Every site we build scores 90+ on Google PageSpeed. Fast load times reduce bounce rates and directly improve SEO rankings and ad quality scores.", tags: ["PageSpeed", "LCP", "CLS"] },
  { num: "02", icon: "📱", title: "Mobile-First Design", desc: "Over 60% of web traffic is mobile. We design and build mobile-first — ensuring pixel-perfect experiences on every device and screen size.", tags: ["Responsive", "Mobile", "Cross-Browser"] },
  { num: "03", icon: "🔍", title: "SEO-Ready Architecture", desc: "Clean code, semantic HTML, structured data, fast server response, and optimised metadata — so your site is search-engine-ready from day one.", tags: ["Technical SEO", "Schema", "Sitemap"] },
  { num: "04", icon: "🔒", title: "Security First", desc: "SSL, GDPR consent management, PIPEDA compliance, CCPA data handling, regular security audits, and DDoS protection built into every project we deliver.", tags: ["GDPR", "PIPEDA", "SSL"] },
];

const TOOLS = [
  { icon: "⚛️", name: "React / Next.js", desc: "Enterprise-grade React apps with SSR, ISR, and edge rendering for maximum performance.", clr: "rgba(97,218,251,.08)", bd: "rgba(97,218,251,.22)" },
  { icon: "🟢", name: "Node.js", desc: "Scalable server-side JavaScript — ideal for APIs, real-time apps, and microservices.", clr: "rgba(104,160,99,.08)", bd: "rgba(104,160,99,.22)" },
  { icon: "🔴", name: "Laravel / PHP", desc: "Battle-tested PHP framework for complex web portals, CMS, and SaaS platforms.", clr: "rgba(255,45,32,.08)", bd: "rgba(255,45,32,.22)" },
  { icon: "📝", name: "WordPress", desc: "Custom themes, ACF, WooCommerce, and headless WordPress for content-driven sites.", clr: "rgba(0,117,178,.08)", bd: "rgba(0,117,178,.22)" },
  { icon: "🐍", name: "Python / Django", desc: "Python-powered web applications for AI-integrated platforms and data-heavy portals.", clr: "rgba(55,118,171,.08)", bd: "rgba(55,118,171,.22)" },
  { icon: "🗃️", name: "MySQL / PostgreSQL", desc: "Reliable relational databases powering scalable, high-performance web applications.", clr: "rgba(0,121,107,.08)", bd: "rgba(0,121,107,.22)" },
  { icon: "☁️", name: "AWS / Azure", desc: "Cloud hosting, CDN, auto-scaling, and CI/CD pipelines for enterprise-grade reliability.", clr: "rgba(255,153,0,.08)", bd: "rgba(255,153,0,.22)" },
  { icon: "🌩️", name: "Google Cloud", desc: "Firebase, Cloud Run, and BigQuery for modern, scalable web infrastructure.", clr: "rgba(66,133,244,.08)", bd: "rgba(66,133,244,.22)" },
];

const HIRE_LEFT = [
  { icon: "🏢", title: "Enterprises", desc: "Multi-location businesses needing scalable web infrastructure, custom integrations, and enterprise CMS with role-based access control." },
  { icon: "🚀", title: "Start-ups", desc: "Lightweight, fast-to-market web apps that scale as you grow. We help you launch quickly without technical debt from day one." },
  { icon: "🎯", title: "Agencies", desc: "White-label web development for agencies — on-time delivery, clean handoff, and documentation your clients will love." },
];
const HIRE_RIGHT = [
  { icon: "📊", title: "Analytical", desc: "Data-first websites with built-in analytics, heatmaps, A/B testing, and conversion dashboards — turning traffic into business intelligence." },
  { icon: "⚙️", title: "Operational", desc: "Automate enquiry routing, lead capture, booking flows, and customer onboarding through your website — reducing manual effort." },
  { icon: "🤝", title: "Collaborative", desc: "Unify your marketing, sales, and support teams around a single web platform with shared dashboards, CMS access, and live chat." },
];

const AI_FEATS = [
  { icon: "🧠", title: "AI-Powered Personalisation", desc: "Dynamically personalise website content, CTAs, and product recommendations based on visitor behaviour, location, and intent signals in real time.", clr: "rgba(0,201,167,.08)", bd: "rgba(0,201,167,.2)" },
  { icon: "🎯", title: "Predictive Analytics & Insights", desc: "AI analyses visitor journeys, identifies drop-off points, and surfaces actionable insights — so your team optimises conversion without guesswork.", clr: "rgba(99,102,241,.08)", bd: "rgba(99,102,241,.2)" },
  { icon: "🤖", title: "Chatbot & Automation at Scale", desc: "Deploy AI chatbots that qualify leads, answer FAQs, and book consultations 24/7 — integrated directly into your website and CRM pipeline.", clr: "rgba(0,201,167,.08)", bd: "rgba(0,201,167,.2)" },
];

const ACCORDION_L = [
  { icon: "🔍", title: "SEO & Content Architecture", desc: "Clean URL structures, semantic HTML5, schema markup, XML sitemaps, and page speed optimisation — built for Google from the ground up." },
  { icon: "🔒", title: "Security & Compliance", desc: "SSL certificates, GDPR consent banners, PIPEDA-compliant data handling, CCPA opt-outs, WAF protection, and regular penetration testing." },
  { icon: "📊", title: "Analytics & Conversion Tracking", desc: "Google Analytics 4, Google Tag Manager, Facebook Pixel, heatmaps, and goal funnels — so you see exactly what drives revenue." },
  { icon: "⚡", title: "Performance & Speed", desc: "Image optimisation, lazy loading, CDN delivery, critical CSS inlining, and server-side caching — all targeting 90+ PageSpeed scores." },
];
const ACCORDION_R = [
  { icon: "🎨", title: "CMS & Content Management", desc: "Easy-to-use CMS so your team can update pages, blogs, and landing pages without touching code — built on WordPress, Contentful, or custom." },
  { icon: "🔗", title: "CRM & Tool Integrations", desc: "Connect your website to HubSpot, Salesforce, Mailchimp, Stripe, Shopify, and 100+ platforms via native APIs and webhooks." },
  { icon: "📱", title: "Mobile & Cross-Device", desc: "Fully responsive, tested across 30+ device/browser combinations — iPhone, Android, tablet, desktop, and emerging screen formats." },
  { icon: "🌍", title: "Multi-Language & Multi-Region", desc: "Localised websites for Canadian, US, and UK markets — with hreflang, currency switching, region-specific landing pages, and local SEO." },
];

const FAQS = [
  {
    q: "What technologies do you build with?",
    a: "We build with a modern, production-proven stack: React / Next.js, Node.js, Laravel, WordPress, Python/Django, and Flutter for PWAs. For infrastructure we use AWS, Azure, and Google Cloud with CI/CD pipelines. The right technology is chosen based on your business goals, expected traffic, and integration requirements — not what's fashionable. All builds follow GDPR (UK/EU), PIPEDA (Canada), and CCPA (USA) compliance standards."
  },
  {
    q: "How long does a website take to build?",
    a: "A brochure or marketing website typically takes 4–8 weeks. A custom web application or e-commerce platform runs 10–20 weeks depending on complexity. Enterprise portals with CRM/ERP integration are scoped individually — usually 16–36 weeks. Every project starts with a fixed scope, timeline, and milestone plan before any work begins, so there are no surprises mid-project."
  },
  {
    q: "Do you do SEO as part of the website build?",
    a: "Yes — technical SEO is baked into every build. This includes clean URL structures, semantic HTML5, schema markup, XML sitemaps, robots.txt, page speed optimisation, Core Web Vitals targeting, and metadata templates. For Canadian clients we cover local SEO for Google Business Profile. For UK clients we ensure hreflang and region-specific indexing. Ongoing content SEO and link-building are available as a separate retainer."
  },
  {
    q: "Can you redesign our existing website?",
    a: "Yes. Website redesigns are one of our most requested services for businesses in Canada, USA, and the UK. We start with a full audit of your current site — covering UX, performance, SEO, and conversion rates. We then redesign with your brand, improve navigation, rebuild in modern code, and migrate all content with zero SEO loss. Existing rankings are protected through redirect mapping and technical migration plans."
  },
  {
    q: "Do you offer website maintenance?",
    a: "Yes. All websites include a 30-day hypercare period after launch. Beyond that, we offer flexible maintenance plans: monthly retainer covering updates, security patches, backups, and performance monitoring; pay-as-you-go hourly support; and a dedicated account manager for enterprise clients. We operate in your time zone — Canada EST, UK GMT — and our 98% retention rate reflects how we treat long-term clients."
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

const SERVICES_LIST = ["Web Development", "E-Commerce Development", "Landing Page / Funnel", "UI/UX Design", "Website Redesign", "CRM Development", "ERP Development", "Mobile App Development", "Other"];
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
      <div style={{ maxHeight: open ? 200 : 0, overflow: "hidden", transition: "max-height .35s ease" }}>
        <p style={{ padding: "0 22px 20px 80px", color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.75, fontFamily: "'Poppins',sans-serif", fontWeight: 400, margin: 0 }}>{item.desc}</p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function WebDevelopmentPage() {

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

  const iS: React.CSSProperties = { width: "100%", padding: "11px 14px", borderRadius: 9, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", color: "#fff", fontSize: 13.5, fontFamily: "'Poppins',sans-serif", outline: "none", boxSizing: "border-box", transition: "border-color .2s,background .2s" };
  const iSLg: React.CSSProperties = { ...iS, padding: "13px 16px", fontSize: 14.5 };

  return (
    <>
      <Navbar />


      {/* ══════════════════════════════════════════════════════
    M1 — HERO
══════════════════════════════════════════════════════ */}
      <section style={{ padding: "96px 48px 80px", background: `linear-gradient(135deg,${N0} 0%,#041628 45%,${N0} 100%)`, position: "relative", overflow: "hidden", minHeight: "90vh", display: "flex", alignItems: "center" }}>
        <Particles />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, backgroundImage: `linear-gradient(rgba(0,201,167,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.035) 1px,transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div style={{ position: "absolute", width: 650, height: 650, borderRadius: "50%", background: `radial-gradient(circle,rgba(0,201,167,.14) 0%,transparent 65%)`, top: "40%", left: "-10%", transform: "translateY(-50%)", animation: "heroPulse 8s ease-in-out infinite", pointerEvents: "none", zIndex: 1 }} />
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 65%)", top: "10%", right: "5%", animation: "heroPulse 10s ease-in-out infinite .5s", pointerEvents: "none", zIndex: 1 }} />
        <div style={{ position: "absolute", width: 520, height: 520, borderRadius: "50%", border: "1px dashed rgba(0,201,167,.08)", top: "50%", left: "-12%", transform: "translateY(-50%)", animation: "heroSpin 55s linear infinite", pointerEvents: "none", zIndex: 1 }} />
        <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(0,201,167,.28),transparent)", animation: "heroScan 7s linear infinite", pointerEvents: "none", zIndex: 2 }} />

        <div className="hero-layout">
          <div style={{ animation: "heroFadeUp .7s ease both" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.25)", borderRadius: 100, padding: "7px 18px", marginBottom: 28, animation: "heroGlow 3s ease-in-out infinite,heroFadeUp .7s ease both" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: T, boxShadow: `0 0 10px ${T}`, animation: "heroBlink 1.4s ease-in-out infinite" }} />
              <span style={{ color: T, fontSize: 11.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>Web Development — Canada, USA &amp; UK</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px,3.8vw,54px)", fontWeight: 900, lineHeight: 1.12, marginBottom: 22, letterSpacing: "-0.025em", color: "#fff", animation: "heroFadeUp .7s ease .12s both" }}>
              Web Development Services That Drive<br /><GradText>Real Business Results</GradText> in Canada, USA &amp; UK
            </h1>
            <p style={{ color: "rgba(255,255,255,0.52)", fontSize: "clamp(14px,1.3vw,16.5px)", lineHeight: 1.85, marginBottom: 32, maxWidth: 600, animation: "heroFadeUp .7s ease .22s both" }}>
              Your website is your most important salesperson. We build enterprise websites and custom web apps that are fast, mobile-optimised, SEO-ready, and built to convert visitors into paying customers.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36, animation: "heroFadeUp .7s ease .32s both" }}>
              {[{ i: "🔵", l: "Google Partner" }, { i: "🏆", l: "ISO Certified" }, { i: "🔒", l: "GDPR Compliant" }, { i: "🍁", l: "PIPEDA Ready" }, { i: "⭐", l: "Clutch Top Agency" }].map(b => (
                <span key={b.l} className="web-badge" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 13px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.65)", fontSize: 12.5, fontWeight: 600, transition: "all .2s", cursor: "default" }}>{b.i} {b.l}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", animation: "heroFadeUp .7s ease .32s both" }}>
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
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>We&apos;ll contact you within 24 hours with a free consultation.</p>
                <button onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", phone: "", dialCode: "+1", email: "", service: "", message: "" }); }} style={{ padding: "11px 26px", borderRadius: 9, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: 14, fontFamily: "'Poppins',sans-serif", cursor: "pointer" }}>Send Another →</button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: 22 }}>
                  <p style={{ color: T, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 4 }}>Free Consultation</p>
                  <h2 style={{ color: "#fff", fontSize: 18, fontWeight: 800, margin: 0, lineHeight: 1.3 }}>Get a Free Web Strategy Call</h2>
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
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Service</label>
                    <select className="fi" style={{ ...iS, cursor: "pointer" }} value={form.service} onChange={e => setF("service", e.target.value)}>
                      <option value="">Select service...</option>
                      {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div><label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Message</label><textarea className="fi" style={{ ...iS, minHeight: 76, resize: "vertical" as const }} placeholder="Tell us about your project..." value={form.message} onChange={e => setF("message", e.target.value)} /></div>
                  <button className="btn-teal" type="submit" disabled={loading} style={{ padding: "13px", borderRadius: 10, border: "none", marginTop: 4, background: loading ? "rgba(0,201,167,0.5)" : `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 800, fontSize: 14.5, fontFamily: "'Poppins',sans-serif", cursor: loading ? "wait" : "pointer", transition: "transform .2s,box-shadow .2s" }}>
                    {loading ? "Sending..." : "📅 Get Free Consultation →"}
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
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 70,
                  padding: "10px 18px",
                  background: "#fff",
                  borderRadius: 10,
                  margin: "0 10px",
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
                    height: 40,
                    width: "auto",
                    maxWidth: 120,
                    objectFit: "contain"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    STATS BAR
══════════════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden", background: `linear-gradient(180deg,${N2} 0%,${N1} 60%,${N2} 100%)`, borderTop: `1px solid rgba(0,201,167,0.12)`, borderBottom: `1px solid rgba(0,201,167,0.12)`, padding: "72px 48px" }}>
        <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent 0%,rgba(0,201,167,0.3) 50%,transparent 100%)", animation: "heroScan 4s linear infinite", pointerEvents: "none" }} />
        <div className="stats-row">
          {STATS_TOP.map((s, i) => (
            <div key={i} className="card-hover" style={{ position: "relative", textAlign: "center", padding: "44px 28px", borderRadius: 20, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.2)", transition: "transform .3s,box-shadow .3s", cursor: "default", animation: `sbFadeUp .7s ease ${i * .12}s both` }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", fontSize: 24 }}>{s.icon}</div>
              <div style={{ fontSize: "clamp(40px,4.5vw,56px)", fontWeight: 900, lineHeight: 1, marginBottom: 10, background: "linear-gradient(135deg,#fff 30%,#00C9A7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "'Poppins',sans-serif" }}>
                <Counter to={s.val} sfx={s.sfx} />
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.38)", fontWeight: 500 }}>{s.sub}</div>
              <div style={{ position: "absolute", bottom: 0, left: "25%", right: "25%", height: 2, background: `linear-gradient(90deg,transparent,${T},transparent)`, borderRadius: 2, animation: `sbLineGrow .6s ease ${.5 + i * .1}s both` }} />
            </div>
          ))}
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
            <SectionH2>Web Development <GradText>Success Stories</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>Real results for real businesses across Canada, USA &amp; UK.</p>
          </div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 40, flexWrap: "wrap" }}>
            {CASES.map((c, i) => (
              <button key={i} className={`ss-tab${story === i ? " act" : ""}`} onClick={() => setStory(i)}><span>{c.icon}</span>{c.industry}</button>
            ))}
          </div>
          <div key={story} style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${CASES[story].tagBd}`, borderRadius: 24, overflow: "hidden", animation: "sbFadeUp .45s ease both" }}>
            <div style={{ height: 3, background: `linear-gradient(90deg,transparent,${CASES[story].tagClr},transparent)` }} />
            <div style={{ padding: "36px 36px 32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, fontSize: 26, display: "flex", alignItems: "center", justifyContent: "center", background: CASES[story].tagBg, border: `1px solid ${CASES[story].tagBd}` }}>{CASES[story].icon}</div>
                <span style={{ padding: "4px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, background: CASES[story].tagBg, border: `1px solid ${CASES[story].tagBd}`, color: CASES[story].tagClr, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{CASES[story].tag}</span>
              </div>
              <h3 style={{ color: "#fff", fontSize: "clamp(18px,2vw,24px)", fontWeight: 800, marginBottom: 28, lineHeight: 1.3 }}>{CASES[story].title}</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 32 }}>
                {[{ label: "Challenge", text: CASES[story].challenge, icon: "⚠️" }, { label: "Solution", text: CASES[story].solution, icon: "💡" }].map(col => (
                  <div key={col.label} style={{ padding: 20, borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <p style={{ color: T, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 8 }}>{col.icon} {col.label}</p>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{col.text}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
                {CASES[story].metrics.map((m, i) => (
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
            {CASES.map((_, i) => (
              <button key={i} onClick={() => setStory(i)} style={{ width: story === i ? 24 : 8, height: 8, borderRadius: 100, background: story === i ? T : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", transition: "all .3s ease" }} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <button className="btn-teal" style={{ padding: "14px 36px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: 15, fontFamily: "'Poppins',sans-serif", cursor: "pointer", transition: "transform .2s,box-shadow .2s" }}>View All Case Studies →</button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M4 — SERVICES
══════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 48px 48px", background: `linear-gradient(180deg,${N1} 0%,${N2} 60%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(0,201,167,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.025) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <SectionBadge label="What We Build" />
            <SectionH2>Web Development Services <GradText>We Offer</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.75, maxWidth: 580, margin: "0 auto" }}>A comprehensive lineup of web development solutions for clients across Canada, USA &amp; UK.</p>
          </div>
          <div className="svc-grid">
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
            <button className="btn-teal" style={{ padding: "14px 36px", borderRadius: 10, background: `linear-gradient(135deg,${T},${TD})`, border: "none", color: "#000", fontWeight: 700, fontSize: 15, fontFamily: "'Poppins',sans-serif", cursor: "pointer", transition: "transform .2s,box-shadow .2s" }}>View All Services →</button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M5 — KEY BENEFITS
══════════════════════════════════════════════════ */}
      <section style={{ padding: "88px 48px", background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(0,201,167,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.025) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <SectionBadge label="Why It Matters" />
            <SectionH2>Key Benefits of <GradText>Web Development</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>Here&apos;s what you gain when your website is built by a team that prioritises performance, conversion, and compliance.</p>
          </div>
          <div className="kb-grid">
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
            <button className="btn-teal" style={{ padding: "14px 36px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: 15, fontFamily: "'Poppins',sans-serif", cursor: "pointer", transition: "transform .2s,box-shadow .2s" }}>Start Your Web Project →</button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M6 — PLATFORM TOOLS
══════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 48px", background: N1, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionBadge label="Our Tech Stack" />
            <SectionH2>Leading Platform Tools <GradText>That We Use</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>A modern, production-proven stack chosen for performance, scalability, and long-term maintainability.</p>
          </div>
          <div className="pt-grid">
            {TOOLS.map((tool, i) => (
              <div key={i} className="pt-card" style={{ background: tool.clr, border: `1px solid ${tool.bd}` }}>
                <div className="pt-icon" style={{ width: 56, height: 56, borderRadius: 15, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 16, background: "rgba(255,255,255,0.05)", border: `1px solid ${tool.bd}`, transition: "transform .25s" }}>{tool.icon}</div>
                <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>{tool.name}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M6B — CAPABILITIES ACCORDION
══════════════════════════════════════════════════ */}
      <section style={{ padding: "96px 48px", background: N0, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: "10%", left: "50%", transform: "translateX(-50%)", width: 600, height: 300, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <SectionBadge label="Web Capabilities" />
            <SectionH2>Everything Your Website <GradText>Needs to Perform</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>Explore the full set of capabilities we bring to every web project for businesses in Canada, USA &amp; UK.</p>
          </div>
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

      {/* ══════════════════════════════════════════════════
    M7 — HIRE DEVELOPERS
══════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 48px", background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionBadge label="Hire Developers" />
            <SectionH2>Hire Web Developers <GradText>Tailored to Your Needs</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>Whether you&apos;re an enterprise, start-up, or agency — we have the right web developer for your project.</p>
          </div>
          <div className="two-col" style={{ marginBottom: 16 }}>
            <p style={{ color: T, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>By Business Type</p>
            <p style={{ color: T, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>By Project Type</p>
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
            <button className="btn-teal" style={{ padding: "14px 32px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: 15, fontFamily: "'Poppins',sans-serif", cursor: "pointer", transition: "transform .2s,box-shadow .2s" }}>📅 Hire a Web Developer</button>
            <button style={{ padding: "14px 32px", borderRadius: 10, border: "1.5px solid rgba(0,201,167,0.35)", background: "transparent", color: T, fontWeight: 600, fontSize: 15, fontFamily: "'Poppins',sans-serif", cursor: "pointer", transition: "border-color .2s,background .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = T; (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,0.07)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,167,0.35)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
              View Pricing →
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M8 — AI-POWERED
══════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 48px", background: `linear-gradient(180deg,${N2} 0%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "0%", left: "50%", transform: "translateX(-50%)", width: 700, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          {/* <div style={{marginBottom:52,maxWidth:620}}> */}
          <div style={{
            marginBottom: 52,
            maxWidth: 620,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center"
          }}>

            <SectionBadge label="AI-Powered" />
            <SectionH2>Leverage <GradText>AI-Powered Web</GradText> Solutions</SectionH2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.8 }}>We build AI into your website from day one — personalisation, automation, and real-time analytics that turn visitors into revenue.</p>
          </div>
          <div className="two-col-wide">
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {AI_FEATS.map((f, i) => (
                <div key={i} className="ai-feat-card" style={{ display: "flex", gap: 18, alignItems: "flex-start", padding: "24px 22px", borderRadius: 16, background: f.clr, border: `1px solid ${f.bd}`, transition: "transform .25s,box-shadow .25s", cursor: "default" }}>
                  <div className="ai-icon-w" style={{ width: 52, height: 52, borderRadius: 14, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, background: f.clr, border: `1px solid ${f.bd}`, transition: "transform .25s" }}>{f.icon}</div>
                  <div>
                    <h3 style={{ color: "#fff", fontSize: 17, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>{f.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.52)", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
              <button className="btn-teal" style={{ marginTop: 8, alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 10, padding: "13px 28px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: 14, fontFamily: "'Poppins',sans-serif", cursor: "pointer", transition: "transform .2s,box-shadow .2s" }}>🤖 Explore AI Web Solutions →</button>
            </div>
            {/* AI Visual */}
            <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", background: "linear-gradient(135deg,#0a1f38 0%,#061425 100%)", border: "1px solid rgba(0,201,167,0.15)", minHeight: 460, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "36px 32px" }}>
              <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(0,201,167,0.5),transparent)", animation: "aiScan 3s linear infinite" }} />
              <div style={{ position: "absolute", top: "5%", right: "5%", width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.12) 0%,transparent 70%)", animation: "aiPulse 4s ease-in-out infinite", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 2 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 10px #22c55e" }} />
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>AI Engine — Live</span>
                </div>
                {[{ label: "Personalisation accuracy", val: "96%", color: T }, { label: "Conversion optimisation", val: "89%", color: "#818cf8" }, { label: "Page speed score", val: "98/100", color: T }, { label: "SEO visibility", val: "94%", color: "#f59e0b" }].map((row, i) => (
                  <div key={i} style={{ marginBottom: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}><span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12.5, fontWeight: 500 }}>{row.label}</span><span style={{ color: row.color, fontSize: 12.5, fontWeight: 700 }}>{row.val}</span></div>
                    <div style={{ height: 4, borderRadius: 4, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}><div style={{ height: "100%", borderRadius: 4, background: `linear-gradient(90deg,${row.color},${row.color}88)`, width: row.val === "98/100" ? "98%" : row.val }} /></div>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, position: "relative", zIndex: 2 }}>
                {[{ label: "Visitors Tracked", val: "124K", icon: "👁️" }, { label: "Leads Generated", val: "3,842", icon: "🎯" }, { label: "Avg Load Time", val: "0.8s", icon: "⚡" }].map((m, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "14px 12px", textAlign: "center" }}>
                    <div style={{ fontSize: 20, marginBottom: 6 }}>{m.icon}</div>
                    <div style={{ color: "#fff", fontSize: 16, fontWeight: 800, marginBottom: 2 }}>{m.val}</div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 500 }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M9 — CTA BANNER
══════════════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ background: "linear-gradient(135deg,#0055b3 0%,#0077cc 35%,#00a07a 65%,#00C9A7 100%)", backgroundSize: "300% 300%", animation: "ctaBgShift 8s ease infinite", padding: "88px 48px", textAlign: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: "-20%", left: "-5%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.1) 0%,transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-20%", right: "-5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
          <div style={{ position: "relative", zIndex: 2, maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 100, padding: "6px 18px", marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff", display: "block" }} />
              <span style={{ color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>Get Started Today</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,48px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 20 }}>
              Want Web Development Solutions That Take Your<br />Business to the <span style={{ textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.4)" }}>Next Level?</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 17, lineHeight: 1.75, marginBottom: 40 }}>Connect with NNC Digital today and let&apos;s build something extraordinary together.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <button style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 40px", borderRadius: 12, background: "#fff", color: "#0055b3", fontWeight: 800, fontSize: 16, fontFamily: "'Poppins',sans-serif", border: "none", cursor: "pointer", transition: "transform .2s,box-shadow .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.25)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}>✦ Connect Now</button>
              <button style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 36px", borderRadius: 12, background: "transparent", color: "#fff", fontWeight: 700, fontSize: 16, fontFamily: "'Poppins',sans-serif", border: "2px solid rgba(255,255,255,0.5)", cursor: "pointer", transition: "border-color .2s,background .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#fff"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.5)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>📅 Book a Free Call →</button>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 28 }}>🇨🇦 Canada &nbsp;·&nbsp; 🇺🇸 USA &nbsp;·&nbsp; 🇬🇧 UK &nbsp;·&nbsp; 🇮🇳 India &nbsp;&nbsp;|&nbsp;&nbsp; hello@nncdigital.com</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M10 — WHY CHOOSE US
══════════════════════════════════════════════════ */}
      <section style={{ padding: "88px 48px", background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div className="two-col-wide">
            <div>
              <SectionBadge label="Our Story" />
              <SectionH2>Why Choose Us as Your <GradText>Web Development</GradText> Partner?</SectionH2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>NNC Digital Solutions is backed by <span style={{ color: "#fff", fontWeight: 600 }}>Nakshatra Namaha Creations Pvt. Ltd.</span> — one of Bangalore&apos;s most respected digital studios with <span style={{ color: T, fontWeight: 600 }}>8+ years of experience</span> and <span style={{ color: T, fontWeight: 600 }}>565+ projects delivered</span>.</p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>We launched NNC Digital as our international arm — bringing the same proven technical excellence to Canadian, US, and UK markets with transparent pricing, dedicated client-facing teams, and long-term partnership.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 36 }}>
                {WCU_POINTS.map((p, i) => (
                  <div key={i} className="wcu-point" style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", transition: "border-color .2s,background .2s,transform .2s", cursor: "default" }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{p.icon}</span>
                    <span style={{ color: "rgba(255,255,255,0.72)", fontSize: 14, fontWeight: 500 }}>{p.text}</span>
                  </div>
                ))}
              </div>
              <div className="wcu-stats">
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
                <button className="btn-teal" style={{ flex: 1, padding: "13px 20px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: 14, fontFamily: "'Poppins',sans-serif", cursor: "pointer", transition: "transform .2s,box-shadow .2s" }}>📅 Book a Free Strategy Call</button>
                <button style={{ flex: 1, padding: "13px 20px", borderRadius: 10, border: "1.5px solid rgba(0,201,167,0.35)", background: "transparent", color: T, fontWeight: 600, fontSize: 14, fontFamily: "'Poppins',sans-serif", cursor: "pointer", transition: "border-color .2s,background .2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = T; (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,0.07)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,167,0.35)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>Our Portfolio →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M11 — GLOBAL PRESENCE
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
                <div className="gp-ind-grid">
                  {INDIA_OFFICES.map((o, i) => (
                    <div key={i} className="gp-ind" style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 18px", borderRadius: 12, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", transition: "background .2s,border-color .2s", cursor: "default" }}>
                      <span style={{ fontSize: 22 }}>🇮🇳</span>
                      <div><p style={{ color: "#fff", fontSize: 14, fontWeight: 700, margin: 0 }}>{o.city}</p><p style={{ color: "rgba(255,255,255,0.38)", fontSize: 12, margin: "2px 0 0" }}>{o.note}</p>{o.phone && <p style={{ color: T, fontSize: 12.5, fontWeight: 600, margin: "4px 0 0" }}>{o.phone}</p>}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.07)" }}><p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, margin: 0 }}>✉️ info@nakshatranamahacreations.com</p></div>
              </div>
              <div className="gp-india-stats">
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
    M12 — FAQ
══════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 48px", background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "30%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <SectionBadge label="FAQs" />
            <SectionH2>Frequently Asked <GradText>Questions</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>Everything you need to know about web development for businesses in Canada, USA &amp; UK.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQS.map((f, i) => (
              <div key={i} className={`faq-item${faq === i ? " fopen" : ""}`} onClick={() => setFaq(faq === i ? null : i)}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "20px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ color: T, fontSize: 13, fontWeight: 800, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", borderRadius: 8, padding: "4px 10px", flexShrink: 0 }}>Q{i + 1}</span>
                    <span style={{ fontSize: 15.5, fontWeight: 700, color: faq === i ? "#fff" : "rgba(255,255,255,0.78)", lineHeight: 1.4, transition: "color .2s" }}>{f.q}</span>
                  </div>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 700, lineHeight: 1, background: faq === i ? T : "rgba(255,255,255,0.07)", border: `1px solid ${faq === i ? T : "rgba(255,255,255,0.12)"}`, color: faq === i ? "#000" : "rgba(255,255,255,0.5)", transform: faq === i ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
                </div>
                <div style={{ maxHeight: faq === i ? 500 : 0, overflow: "hidden", transition: "max-height .38s ease" }}>
                  <p style={{ padding: "0 22px 22px 60px", color: "rgba(255,255,255,0.55)", fontSize: 14.5, lineHeight: 1.8, margin: 0 }}>{f.a}</p>
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
    M13 — CONTACT FORM
══════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 48px", background: `linear-gradient(180deg,${N2} 0%,${N0} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 700, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionBadge label="Get In Touch" />
            <SectionH2>Ready to Build <GradText>Next-Level</GradText> Custom Digital Solutions?</SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15.5, lineHeight: 1.75, maxWidth: 540, margin: "0 auto" }}>Tell us about your project. We respond within 24 hours with a free consultation and honest advice.</p>
          </div>
          <div className="cf-grid">
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "36px 32px" }}>
              {cSubmitted ? (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
                  <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>Thank you — we&apos;ll respond within 24 hours with practical advice.</p>
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
                    <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 7, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Service of Interest</label>
                    <select className="fi" style={{ ...iSLg, cursor: "pointer" }} value={cForm.service} onChange={e => setCF("service", e.target.value)}>
                      <option value="">Select a service...</option>
                      {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom: 24 }}><label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 7, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Project Description</label><textarea className="fi" style={{ ...iSLg, minHeight: 110, resize: "vertical" as const }} placeholder="Briefly describe your project, goals, and timeline..." value={cForm.project} onChange={e => setCF("project", e.target.value)} /></div>
                  <button className="btn-teal" type="submit" disabled={cLoading} style={{ width: "100%", padding: 15, borderRadius: 10, border: "none", background: cLoading ? "rgba(0,201,167,0.5)" : `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 800, fontSize: 15, fontFamily: "'Poppins',sans-serif", cursor: cLoading ? "wait" : "pointer", transition: "transform .2s,box-shadow .2s" }}>{cLoading ? "Sending..." : "Submit — Get Free Consultation →"}</button>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11.5, textAlign: "center", marginTop: 12 }}>🔒 Your information is 100% secure and never shared.</p>
                </form>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ background: "rgba(0,201,167,0.05)", border: "1px solid rgba(0,201,167,0.18)", borderRadius: 18, padding: "28px 26px" }}>
                <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 800, marginBottom: 18 }}>What Happens After You Submit?</h3>
                {[{ s: "1", text: "We review your project within a few hours — no bots." }, { s: "2", text: "A senior web consultant calls you within 24 hours." }, { s: "3", text: "We send a free scoping document with timeline & cost." }, { s: "4", text: "You decide — no pressure, no obligation." }].map((s, i) => (
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