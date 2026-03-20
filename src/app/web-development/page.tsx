

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
  { icon: "🏢", title: "Enterprise Website Development", desc: "Scalable, high-performance websites for enterprises in Canada, USA & UK. Built for growth.", tag: "Enterprise", slug: "enterprise-website" },
  { icon: "🛒", title: "E-Commerce Development", desc: "Custom online stores with seamless checkout, inventory sync, and conversion-focused design.", tag: "E-Commerce", slug: "ecommerce-development" },
  { icon: "🎯", title: "Landing Page & Funnel Dev", desc: "High-converting landing pages and sales funnels designed to turn traffic into qualified leads.", tag: "Conversion", slug: "landing-page-funnel" },
  { icon: "🎨", title: "UI/UX Design & Prototyping", desc: "User-first design systems, wireframes, and clickable prototypes before a single line of code is written.", tag: "Design", slug: "ui-ux-design" },
  { icon: "🔧", title: "Website Maintenance & Support", desc: "Ongoing updates, security patches, performance monitoring, and 24/7 technical support.", tag: "Support", slug: "website-maintenance" },
  { icon: "⚙️", title: "Custom Web Application", desc: "Bespoke web apps with complex business logic, APIs, and integrations built for your exact process.", tag: "Custom", slug: "custom-web-app" },
  { icon: "📝", title: "WordPress Development", desc: "Custom WordPress themes, plugins, and enterprise CMS solutions — fully managed and optimised.", tag: "WordPress", slug: "wordpress-development" },
  { icon: "🌐", title: "Web Portal Development", desc: "Client portals, partner dashboards, and self-service platforms that reduce support load.", tag: "Portal", slug: "web-portal" },
  { icon: "🔄", title: "Website Redesign", desc: "Modernise your existing website — improved UX, faster load times, and better SEO rankings.", tag: "Redesign", slug: "website-redesign" },
  { icon: "📱", title: "Progressive Web Apps", desc: "App-like web experiences that work offline, load instantly, and are installable from the browser.", tag: "PWA", slug: "pwa-development" },
  { icon: "🔗", title: "API & Integration Services", desc: "Connect your website to CRM, ERP, payment gateways, and third-party platforms via REST & GraphQL.", tag: "Integration", slug: "api-integration" },
  { icon: "🔍", title: "SEO & Performance Optimisation", desc: "Core Web Vitals, structured data, on-page SEO, and technical audits to dominate search rankings.", tag: "SEO", slug: "seo-optimisation" },
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
export default function WebDevelopmentPage() {
  const serviceSchema = getServiceSchema(
    "Web Development",
    "Web Development Services That Drive Real Business Results in Canada, USA & UK. Enterprise websites and custom web apps that are fast, mobile-optimised, SEO-ready, and built to convert visitors into paying customers."
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

  // Responsive section padding
  const getSectionPadding = () => {
    if (isMobile) return "20px 16px";
    if (isTablet) return "60px 32px";
    return "40px 48px";
  };

  const getHeroPadding = () => {
    if (isMobile) return "40px 16px 60px";
    if (isTablet) return "80px 32px 80px";
    return "90px 48px 80px";
  };

  const getHeroFontSize = () => {
    if (isMobile) return "28px";
    if (isTablet) return "36px";
    return "48px";
  };

  const getGridColumns = (mobile: number, tablet: number, desktop: number) => {
    if (isMobile) return `repeat(${mobile}, 1fr)`;
    if (isTablet) return `repeat(${tablet}, 1fr)`;
    return `repeat(${desktop}, 1fr)`;
  };

  return (
    <>
      <Navbar />
      <SchemaMarkup schema={serviceSchema} id="web-development-schema" />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        @keyframes heroFadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
        @keyframes heroBlink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes heroGlow{0%,100%{box-shadow:0 0 16px rgba(0,201,167,.18)}50%{box-shadow:0 0 40px rgba(0,201,167,.45)}}
        @keyframes heroPulse{0%,100%{opacity:.1;transform:scale(1)}50%{opacity:.22;transform:scale(1.08)}}
        @keyframes heroSpin{from{transform:translateY(-50%) rotate(0deg)}to{transform:translateY(-50%) rotate(360deg)}}
        @keyframes heroScan{0%{top:-2px}100%{top:100%}}
        @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes sbFadeUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
        @keyframes sbLineGrow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
        @keyframes ctaBgShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        @keyframes aiScan{0%{top:10%}100%{top:90%}}
        @keyframes aiPulse{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}
        @keyframes wcuPulse{0%,100%{box-shadow:0 0 0 12px rgba(0,201,167,.15),0 0 0 24px rgba(0,201,167,.07)}50%{box-shadow:0 0 0 18px rgba(0,201,167,.2),0 0 0 36px rgba(0,201,167,.06)}}
        @keyframes kbFadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
        @keyframes flowPulse{0%,100%{opacity:.4;transform:scale(1)}50%{opacity:1;transform:scale(1.04)}}
        @keyframes flowLine{0%{width:0}100%{width:100%}}
        
        /* Responsive button styles */
        .btn-teal, .btn-outline {
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
          .btn-teal, .btn-outline {
            padding: 14px 32px;
            font-size: 15px;
            min-width: 160px;
          }
        }
        
        @media (max-width: 640px) {
          .btn-teal, .btn-outline {
            width: 100%;
            min-width: 0;
          }
        }
        
        .btn-teal {
          background: linear-gradient(135deg, ${T}, ${TD});
          color: #000;
          border: none;
        }
        .btn-teal:hover { transform:translateY(-3px); box-shadow:0 12px 32px rgba(0,201,167,.25); }
        .btn-outline {
          background:transparent;
          color:${T};
          border:1.5px solid rgba(0,201,167,0.35);
        }
        .btn-outline:hover { border-color:${T}; background:rgba(0,201,167,0.07); }
        
        .h-teal:hover{color:${T}!important;}
        .fi:focus{border-color:rgba(0,201,167,0.5)!important;background:rgba(0,201,167,0.06)!important;}
        .fi::placeholder{color:rgba(255,255,255,0.28);}
        .fi option{background:#0a1f38;color:#fff;}
        .web-badge:hover{background:rgba(0,201,167,0.12)!important;border-color:rgba(0,201,167,0.35)!important;color:#fff!important;}
        .cl-track{display:flex;gap:64px;width:max-content;animation:marquee 32s linear infinite;}
        .cl-track:hover{animation-play-state:paused;}
        .ss-tab{padding:10px 20px;border-radius:100px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.5);font-size:13.5px;font-weight:600;font-family:'Poppins',sans-serif;cursor:pointer;transition:all .22s ease;display:flex;align-items:center;gap:8px;}
        .ss-tab.act{border-color:rgba(0,201,167,0.45);background:rgba(0,201,167,0.1);color:${T};}
        .ss-tab:hover:not(.act){border-color:rgba(255,255,255,0.2);color:rgba(255,255,255,0.8);}
        
        .svc-card{position:relative;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:18px;padding:24px 20px;display:flex;flex-direction:column;gap:12px;transition:transform .3s,box-shadow .3s,border-color .3s,background .3s;cursor:default;overflow:hidden;}
        .svc-card:hover{transform:translateY(-6px);border-color:rgba(0,201,167,0.35);background:rgba(0,201,167,0.04);box-shadow:0 20px 60px rgba(0,0,0,0.4);}
        .svc-card::after{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,${T},transparent);border-radius:18px 18px 0 0;opacity:0;transition:opacity .3s;}
        .svc-card:hover::after{opacity:1;}
        .svc-card:hover .svc-icon{background:rgba(0,201,167,0.18)!important;transform:scale(1.08);}
        
        .pt-card{border-radius:18px;padding:20px 16px;position:relative;overflow:hidden;transition:transform .28s,box-shadow .28s;cursor:default;}
        .pt-card:hover{transform:translateY(-7px);box-shadow:0 20px 50px rgba(0,0,0,0.4);}
        .pt-card::after{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,${T},transparent);opacity:0;transition:opacity .28s;}
        .pt-card:hover::after{opacity:1;}
        .pt-card:hover .pt-icon{transform:scale(1.1) rotate(-5deg)!important;}
        
        .kb-card{position:relative;display:flex;gap:20px;align-items:flex-start;padding:24px 20px;border-radius:20px;border:1px solid rgba(255,255,255,0.07);background:rgba(255,255,255,0.02);transition:transform .3s,border-color .3s,background .3s,box-shadow .3s;cursor:default;animation:kbFadeUp .6s ease both;}
        .kb-card:hover{transform:translateY(-6px);border-color:rgba(0,201,167,0.3);background:rgba(0,201,167,0.04);box-shadow:0 20px 56px rgba(0,0,0,0.35);}
        .kb-card::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;border-radius:20px 20px 0 0;background:linear-gradient(90deg,transparent,${T},transparent);opacity:0;transition:opacity .3s;}
        .kb-card:hover::before{opacity:1;}
        
        .ai-feat-card:hover{transform:translateX(6px)!important;box-shadow:0 8px 32px rgba(0,0,0,0.3)!important;}
        .ai-feat-card:hover .ai-icon-w{transform:scale(1.1) rotate(-4deg)!important;}
        .wcu-point:hover{border-color:rgba(0,201,167,0.25)!important;background:rgba(0,201,167,0.04)!important;transform:translateX(6px)!important;}
        .wcu-stat:hover{transform:translateY(-4px)!important;background:rgba(0,201,167,0.1)!important;}
        .faq-item{border-radius:14px;border:1px solid rgba(255,255,255,0.07);background:rgba(255,255,255,0.02);overflow:hidden;transition:border-color .25s,background .25s;cursor:pointer;}
        .faq-item.fopen{border-color:rgba(0,201,167,0.35);background:rgba(0,201,167,0.04);}
        .faq-item:hover{border-color:rgba(0,201,167,0.22);}
        .gp-card:hover{transform:translateY(-5px)!important;box-shadow:0 20px 48px rgba(0,0,0,0.4)!important;border-color:rgba(0,201,167,0.3)!important;}
        .gp-ind:hover{background:rgba(0,201,167,0.06)!important;border-color:rgba(0,201,167,0.2)!important;}
        .flow-node:hover{border-color:rgba(0,201,167,0.5)!important;background:rgba(0,201,167,0.1)!important;transform:translateY(-3px)!important;}
        .card-hover:hover{transform:translateY(-6px)!important;border-color:rgba(0,201,167,0.3)!important;background:rgba(0,201,167,0.04)!important;box-shadow:0 20px 56px rgba(0,0,0,0.35)!important;}

        /* Responsive grid layouts */
        .hero-layout{display:grid;grid-template-columns:1fr 460px;gap:56px;align-items:center;max-width:1280px;margin:0 auto;position:relative;z-index:2;width:100%;padding:0 24px;}
        .svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .pt-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
        .kb-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;}
        .two-col{display:grid;grid-template-columns:1fr 1fr;gap:32px;}
        .two-col-wide{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;}
        .stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:1200px;margin:0 auto;}
        .wcu-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;}
        .gp-offices{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
        .gp-ind-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
        .gp-india-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;}
        .cf-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;}
        .cf-name{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
        
        /* Responsive breakpoints */
        @media(max-width:1200px){
          .hero-layout{grid-template-columns:1fr 400px;gap:40px;}
        }
        @media(max-width:1024px){
          .hero-layout{grid-template-columns:1fr!important;gap:40px!important;}
          .pt-grid{grid-template-columns:repeat(3,1fr)!important;}
          .two-col-wide{gap:40px!important;}
        }
        @media(max-width:960px){
          .svc-grid{grid-template-columns:repeat(2,1fr)!important;}
          .two-col-wide{grid-template-columns:1fr!important;gap:40px!important;}
          .wcu-stats{grid-template-columns:1fr 1fr!important;}
          .gp-offices{grid-template-columns:1fr!important;}
          .gp-india-stats{grid-template-columns:repeat(2,1fr)!important;}
        }
        @media(max-width:768px){
          section{padding:60px 24px!important;}
          .two-col{grid-template-columns:1fr!important;gap:20px!important;}
          .kb-grid{grid-template-columns:1fr!important;}
          .cf-grid{grid-template-columns:1fr!important;gap:40px!important;}
          .gp-ind-grid{grid-template-columns:1fr!important;}
          .cf-name{grid-template-columns:1fr!important;gap:12px!important;}
        }
        @media(max-width:720px){
          .pt-grid{grid-template-columns:repeat(2,1fr)!important;}
        }
        @media(max-width:640px){
          section{padding:40px 20px!important;}
          .stats-row{grid-template-columns:repeat(2,1fr)!important;}
          .hero-layout{padding:0!important;}
        }
        @media(max-width:580px){
          .svc-grid{grid-template-columns:1fr!important;}
        }
        @media(max-width:480px){
          .pt-grid{grid-template-columns:1fr!important;}
          .gp-india-stats{grid-template-columns:1fr 1fr!important;}
          .ss-tab{width:100%;justify-content:center;font-size:12px;padding:8px 14px;}
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════
    M1 — HERO
══════════════════════════════════════════════════════ */}
      <section style={{ padding: getHeroPadding(), background: `linear-gradient(135deg,${N0} 0%,#041628 45%,${N0} 100%)`, position: "relative", overflow: "hidden", minHeight: isMobile ? "auto" : "90vh", display: "flex", alignItems: "center" }}>
        <Particles />
        {/* <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, backgroundImage: `linear-gradient(rgba(0,201,167,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.035) 1px,transparent 1px)`, backgroundSize: "60px 60px" }} /> */}
        {!isMobile && (
          <>
            <div style={{ position: "absolute", width: isTablet ? 500 : 650, height: isTablet ? 500 : 650, borderRadius: "50%", background: `radial-gradient(circle,rgba(0,201,167,.14) 0%,transparent 65%)`, top: "40%", left: "-10%", transform: "translateY(-50%)", animation: "heroPulse 8s ease-in-out infinite", pointerEvents: "none", zIndex: 1 }} />
            <div style={{ position: "absolute", width: isTablet ? 300 : 400, height: isTablet ? 300 : 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 65%)", top: "10%", right: "5%", animation: "heroPulse 10s ease-in-out infinite .5s", pointerEvents: "none", zIndex: 1 }} />
            <div style={{ position: "absolute", width: isTablet ? 400 : 520, height: isTablet ? 400 : 520, borderRadius: "50%", border: "1px dashed rgba(0,201,167,.08)", top: "50%", left: "-12%", transform: "translateY(-50%)", animation: "heroSpin 55s linear infinite", pointerEvents: "none", zIndex: 1 }} />
            {/* <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(0,201,167,.28),transparent)", animation: "heroScan 7s linear infinite", pointerEvents: "none", zIndex: 2 }} /> */}
          </>
        )}

        <div className="hero-layout">
          <div style={{ animation: "heroFadeUp .7s ease both" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.25)", borderRadius: 100, padding: isMobile ? "6px 14px" : "7px 18px", marginBottom: isMobile ? 16 : 28, animation: "heroGlow 3s ease-in-out infinite" }}>
              <span style={{ width: isMobile ? 6 : 7, height: isMobile ? 6 : 7, borderRadius: "50%", background: T, boxShadow: `0 0 10px ${T}`, animation: "heroBlink 1.4s ease-in-out infinite" }} />
              <span style={{ color: T, fontSize: isMobile ? 10 : 11.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>Web Development — Canada, USA &amp; UK</span>
            </div>
            <h1 style={{ fontSize: getHeroFontSize(), fontWeight: 900, lineHeight: 1.12, marginBottom: isMobile ? 14 : 22, letterSpacing: "-0.025em", color: "#fff" }}>
              Web Development Services That Drive<br /><GradText>Real Business Results</GradText> in Canada, USA &amp; UK
            </h1>
            <p style={{ color: "rgba(255,255,255,0.52)", fontSize: isMobile ? "14px" : isTablet ? "15px" : "16.5px", lineHeight: 1.85, marginBottom: isMobile ? 18 : 32, maxWidth: 600 }}>
              Your website is your most important salesperson. We build enterprise websites and custom web apps that are fast, mobile-optimised, SEO-ready, and built to convert visitors into paying customers.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: isMobile ? 20 : 36 }}>
              {[{ i: "🔵", l: "Google Partner" }, { i: "🏆", l: "ISO Certified" }, { i: "🔒", l: "GDPR Compliant" }, { i: "🍁", l: "PIPEDA Ready" }, { i: "⭐", l: "Clutch Top Agency" }].map(b => (
                <span key={b.l} className="web-badge" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: isMobile ? "5px 11px" : "6px 13px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.65)", fontSize: isMobile ? 11 : 12.5, fontWeight: 600, transition: "all .2s", cursor: "default" }}>{b.i} {b.l}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {[{ flag: "🇨🇦", label: "CA:", phone: "+1 647-XXX-XXXX" }, { flag: "🇬🇧", label: "UK:", phone: "+44 20-XXXX-XXXX" }].map(p => (
                <a key={p.phone} href={`tel:${p.phone.replace(/\s|-/g, "")}`} className="h-teal" style={{ display: "flex", alignItems: "center", gap: 7, color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 12 : 13.5, fontWeight: 600, textDecoration: "none", transition: "color .2s" }}>
                  <span>{p.flag}</span><span style={{ color: "rgba(255,255,255,0.3)" }}>{p.label}</span><span style={{ color: T }}>{p.phone}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Hero Form */}
          <div style={{ background: "rgba(8,20,40,0.85)", border: "1px solid rgba(0,201,167,0.22)", borderRadius: 20, padding: isMobile ? "24px 16px" : "32px 28px", backdropFilter: "blur(16px)", boxShadow: "0 32px 80px rgba(0,0,0,0.5),0 0 40px rgba(0,201,167,0.06)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${T},transparent)` }} />
            {submitted ? (
              <div style={{ textAlign: "center", padding: isMobile ? "20px 0" : "40px 0" }}>
                <div style={{ fontSize: isMobile ? 44 : 52, marginBottom: 16 }}>✅</div>
                <h3 style={{ color: "#fff", fontSize: isMobile ? 18 : 20, fontWeight: 800, marginBottom: 10 }}>Request Received!</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 13 : 14, lineHeight: 1.7, marginBottom: 24 }}>We&apos;ll contact you within 24 hours with a free consultation.</p>
                <Link href="/web-development">
                  <button onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", phone: "", dialCode: "+1", email: "", service: "", message: "" }); }} className="btn-teal" style={{ minWidth: "auto", padding: isMobile ? "10px 22px" : "11px 26px", fontSize: isMobile ? "13px" : "14px" }}>Send Another →</button>
                </Link>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: isMobile ? 14 : 22 }}>
                  <p style={{ color: T, fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 4 }}>Free Consultation</p>
                  <h2 style={{ color: "#fff", fontSize: isMobile ? 16 : 18, fontWeight: 800, margin: 0, lineHeight: 1.3 }}>Get a Free Web Strategy Call</h2>
                </div>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
                  <div className="cf-name">
                    <div><label style={{ display: "block", fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>First Name *</label><input className="fi" required style={iS} placeholder="Jane" value={form.firstName} onChange={e => setF("firstName", e.target.value)} /></div>
                    <div><label style={{ display: "block", fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Last Name</label><input className="fi" style={iS} placeholder="Smith" value={form.lastName} onChange={e => setF("lastName", e.target.value)} /></div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Phone</label>
                    <div style={{ display: "flex", gap: 8, flexDirection: isMobile ? "column" : "row" }}>
                      <select className="fi" style={{ ...iS, width: isMobile ? "100%" : 82, flexShrink: 0, padding: isMobile ? "10px 12px" : "11px 6px", cursor: "pointer" }} value={form.dialCode} onChange={e => setF("dialCode", e.target.value)}>
                        {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                      </select>
                      <input className="fi" style={iS} type="tel" placeholder="647 XXX XXXX" value={form.phone} onChange={e => setF("phone", e.target.value)} />
                    </div>
                  </div>
                  <div><label style={{ display: "block", fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Business Email *</label><input className="fi" required type="email" style={iS} placeholder="jane@company.com" value={form.email} onChange={e => setF("email", e.target.value)} /></div>
                  <div>
                    <label style={{ display: "block", fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Service</label>
                    <select className="fi" style={{ ...iS, cursor: "pointer" }} value={form.service} onChange={e => setF("service", e.target.value)}>
                      <option value="">Select service...</option>
                      {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div><label style={{ display: "block", fontSize: isMobile ? 10 : 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Message</label><textarea className="fi" style={{ ...iS, minHeight: isMobile ? 70 : 76, resize: "vertical" as const }} placeholder="Tell us about your project..." value={form.message} onChange={e => setF("message", e.target.value)} /></div>
                  <button className="btn-teal" type="submit" disabled={loading} style={{ marginTop: 4, opacity: loading ? 0.6 : 1, cursor: loading ? "wait" : "pointer", width: "100%" }}>
                    {loading ? "Sending..." : "📅 Get Free Consultation →"}
                  </button>
                  <p style={{ color: "rgba(255,255,255,0.28)", fontSize: isMobile ? 10 : 11, textAlign: "center", margin: 0 }}>🔒 Secure &amp; confidential. No spam, ever.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M2 — CLIENT LOGOS
══════════════════════════════════════════════════ */}
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


      {/* ══════════════════════════════════════════════════
    STATS BAR
══════════════════════════════════════════════════ */}
      {/* <section style={{ position: "relative", overflow: "hidden", background: `linear-gradient(180deg,${N2} 0%,${N1} 60%,${N2} 100%)`, borderTop: `1px solid rgba(0,201,167,0.12)`, borderBottom: `1px solid rgba(0,201,167,0.12)`, padding: isMobile ? "50px 20px" : "72px 48px" }}>
        <div />
        <div className="stats-row">
          {STATS_TOP.map((s, i) => (
            <div key={i} className="card-hover" style={{ position: "relative", textAlign: "center", padding: isMobile ? "24px 16px" : "44px 28px", borderRadius: 20, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.2)", transition: "transform .3s,box-shadow .3s", cursor: "default", animation: `sbFadeUp .7s ease ${i * .12}s both` }}>
              <div style={{ width: isMobile ? 44 : 52, height: isMobile ? 44 : 52, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", fontSize: isMobile ? 20 : 24 }}>{s.icon}</div>
              <div style={{ fontSize: isMobile ? "32px" : "48px", fontWeight: 900, lineHeight: 1, marginBottom: 8, background: "linear-gradient(135deg,#fff 30%,#00C9A7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "'Poppins',sans-serif" }}>
                <Counter to={s.val} sfx={s.sfx} />
              </div>
              <div style={{ fontSize: isMobile ? 13 : 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: isMobile ? 11 : 12.5, color: "rgba(255,255,255,0.38)", fontWeight: 500 }}>{s.sub}</div>
              <div style={{ position: "absolute", bottom: 0, left: "25%", right: "25%", height: 2, background: `linear-gradient(90deg,transparent,${T},transparent)`, borderRadius: 2, animation: `sbLineGrow .6s ease ${.5 + i * .1}s both` }} />
            </div>
          ))}
        </div>
      </section> */}

      {/* ══════════════════════════════════════════════════
    M3 — SUCCESS STORIES
══════════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N2} 0%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(0,201,167,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.02) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 48 }}>
            <SectionBadge label="Proven Results" />
            <SectionH2>Web Development <GradText>Success Stories</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 13 : 15, lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>Real results for real businesses across Canada, USA &amp; UK.</p>
          </div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: isMobile ? 30 : 40, flexWrap: "wrap" }}>
            {CASES.map((c, i) => (
              <button key={i} className={`ss-tab${story === i ? " act" : ""}`} onClick={() => setStory(i)} style={{ padding: isMobile ? "8px 14px" : "10px 20px", fontSize: isMobile ? "12px" : "13.5px" }}><span>{c.icon}</span>{c.industry}</button>
            ))}
          </div>
          <div key={story} style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${CASES[story].tagBd}`, borderRadius: 24, overflow: "hidden", animation: "sbFadeUp .45s ease both" }}>
            <div style={{ height: 3, background: `linear-gradient(90deg,transparent,${CASES[story].tagClr},transparent)` }} />
            <div style={{ padding: isMobile ? "20px" : "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
                <div style={{ width: isMobile ? 48 : 52, height: isMobile ? 48 : 52, borderRadius: 14, fontSize: isMobile ? 24 : 26, display: "flex", alignItems: "center", justifyContent: "center", background: CASES[story].tagBg, border: `1px solid ${CASES[story].tagBd}` }}>{CASES[story].icon}</div>
                <span style={{ padding: isMobile ? "3px 12px" : "4px 14px", borderRadius: 100, fontSize: isMobile ? 10 : 12, fontWeight: 700, background: CASES[story].tagBg, border: `1px solid ${CASES[story].tagBd}`, color: CASES[story].tagClr, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{CASES[story].tag}</span>
              </div>
              <h3 style={{ color: "#fff", fontSize: isMobile ? "18px" : "22px", fontWeight: 800, marginBottom: isMobile ? 16 : 28, lineHeight: 1.3 }}>{CASES[story].title}</h3>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 16 : 20, marginBottom: isMobile ? 24 : 32 }}>
                {[{ label: "Challenge", text: CASES[story].challenge, icon: "⚠️" }, { label: "Solution", text: CASES[story].solution, icon: "💡" }].map(col => (
                  <div key={col.label} style={{ padding: isMobile ? "14px" : "20px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <p style={{ color: T, fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 8 }}>{col.icon} {col.label}</p>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 12 : 14, lineHeight: 1.7, margin: 0 }}>{col.text}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: isMobile ? 10 : 14 }}>
                {CASES[story].metrics.map((m, i) => (
                  <div key={i} style={{ textAlign: "center", padding: isMobile ? "12px 8px" : "18px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", transition: "transform .25s,background .25s", cursor: "default" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,0.06)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; }}>
                    <div style={{ fontSize: isMobile ? 18 : 22, marginBottom: 6 }}>{m.i}</div>
                    <div style={{ fontSize: isMobile ? "20px" : "26px", fontWeight: 900, marginBottom: 4, background: `linear-gradient(135deg,#fff 30%,${T})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{m.v}</div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 10 : 12, fontWeight: 500 }}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
            {CASES.map((_, i) => (
              <button key={i} onClick={() => setStory(i)} style={{ width: story === i ? 24 : 8, height: 8, borderRadius: 100, background: story === i ? T : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", transition: "all .3s ease" }} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: isMobile ? 32 : 44 }}>
            <Link href="/case-studies" className="btn-teal">View All Case Studies →</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M4 — SERVICES
══════════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 60%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(0,201,167,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.025) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 48 }}>
            <SectionBadge label="What We Build" />
            <SectionH2>Web Development Services <GradText>We Offer</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 13 : 15, lineHeight: 1.75, maxWidth: 580, margin: "0 auto" }}>A comprehensive lineup of web development solutions for clients across Canada, USA &amp; UK.</p>
          </div>
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <Link key={s.title} href={`/services/${s.slug}`} style={{ textDecoration: "none" }}>
                <div className="svc-card" style={{ padding: isMobile ? "20px" : "24px 20px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                    <div className="svc-icon" style={{ width: isMobile ? 48 : 52, height: isMobile ? 48 : 52, borderRadius: 14, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 22 : 24, flexShrink: 0, transition: "background .3s,transform .3s" }}>{s.icon}</div>
                    <span style={{ padding: "3px 10px", borderRadius: 100, fontSize: isMobile ? 9 : 10.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: T, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.18)" }}>{s.tag}</span>
                  </div>
                  <h3 style={{ fontSize: isMobile ? "15px" : "17px", fontWeight: 700, color: "#fff", lineHeight: 1.3, margin: 0 }}>{s.title}</h3>
                  <p style={{ fontSize: isMobile ? "12px" : "13.5px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                  {/* <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: T, fontSize: isMobile ? "12px" : "13px", fontWeight: 600, marginTop: "auto" }}>Learn More <span>→</span></span> */}
                </div>
              </Link>
            ))}
          </div>
          {/* <div style={{ textAlign: "center", marginTop: isMobile ? 32 : 48 }}>
            <Link href="/services" className="btn-teal">View All Services →</Link>
          </div> */}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M5 — KEY BENEFITS
══════════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(0,201,167,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.025) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 48 }}>
            <SectionBadge label="Why It Matters" />
            <SectionH2>Key Benefits of <GradText>Web Development</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 13 : 15, lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>Here&apos;s what you gain when your website is built by a team that prioritises performance, conversion, and compliance.</p>
          </div>
          <div className="kb-grid">
            {BENEFITS.map((b, i) => (
              <div key={i} className="kb-card" style={{ padding: isMobile ? "16px" : "24px 20px", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 12 : 20 }}>
                <div style={{ fontSize: isMobile ? "42px" : "52px", fontWeight: 900, lineHeight: 1, background: "linear-gradient(135deg,rgba(0,201,167,0.15) 0%,rgba(0,201,167,0.05) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", flexShrink: 0, width: isMobile ? "100%" : 72, textAlign: "center" }}>{b.num}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}><span style={{ fontSize: isMobile ? 20 : 22 }}>{b.icon}</span><h3 style={{ color: "#fff", fontSize: isMobile ? "16px" : "18px", fontWeight: 800, margin: 0 }}>{b.title}</h3></div>
                  <p style={{ color: "rgba(255,255,255,0.52)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.7, margin: "0 0 12px" }}>{b.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {b.tags.map(tag => <span key={tag} style={{ padding: "3px 8px", borderRadius: 100, fontSize: isMobile ? 9 : 10.5, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase" as const, color: T, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.18)" }}>{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: isMobile ? 32 : 48 }}>
            <Link href="/contact" className="btn-teal">Start Your Web Project →</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M6 — PLATFORM TOOLS
══════════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: N1, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: isMobile ? 300 : 600, height: isMobile ? 200 : 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 48 }}>
            <SectionBadge label="Our Tech Stack" />
            <SectionH2>Leading Platform Tools <GradText>That We Use</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 13 : 15, lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>A modern, production-proven stack chosen for performance, scalability, and long-term maintainability.</p>
          </div>
          <div className="pt-grid">
            {TOOLS.map((tool, i) => (
              <div key={i} className="pt-card" style={{ background: tool.clr, border: `1px solid ${tool.bd}`, padding: isMobile ? "16px 12px" : "20px 16px" }}>
                <div className="pt-icon" style={{ width: isMobile ? 48 : 56, height: isMobile ? 48 : 56, borderRadius: 15, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 24 : 26, marginBottom: isMobile ? 12 : 16, background: "rgba(255,255,255,0.05)", border: `1px solid ${tool.bd}`, transition: "transform .25s" }}>{tool.icon}</div>
                <h3 style={{ color: "#fff", fontSize: isMobile ? "14px" : "16px", fontWeight: 700, marginBottom: 6, lineHeight: 1.3 }}>{tool.name}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? "11px" : "13px", lineHeight: 1.6, margin: 0 }}>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M6B — CAPABILITIES ACCORDION
══════════════════════════════════════════════════ */}
      {/* <section style={{ padding: getSectionPadding(), background: N0, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: "10%", left: "50%", transform: "translateX(-50%)", width: isMobile ? 400 : 600, height: isMobile ? 200 : 300, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 48 }}>
            <SectionBadge label="Web Capabilities" />
            <SectionH2>Everything Your Website <GradText>Needs to Perform</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 13 : 15, lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>Explore the full set of capabilities we bring to every web project for businesses in Canada, USA &amp; UK.</p>
          </div>
          <div className="two-col">
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
              {ACCORDION_L.map((item, i) => <AccItem key={item.title} item={item} open={accL === i} toggle={() => setAccL(accL === i ? null : i)} isMobile={isMobile} />)}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
              {ACCORDION_R.map((item, i) => <AccItem key={item.title} item={item} open={accR === i} toggle={() => setAccR(accR === i ? null : i)} isMobile={isMobile} />)}
            </div>
          </div>
        </div>
      </section> */}

      {/* ══════════════════════════════════════════════════
    M7 — HIRE DEVELOPERS
══════════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", left: "5%", width: isMobile ? 200 : 400, height: isMobile ? 200 : 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 48 }}>
            <SectionBadge label="Hire Developers" />
            <SectionH2>Hire Web Developers <GradText>Tailored to Your Needs</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 13 : 15, lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>Whether you&apos;re an enterprise, start-up, or agency — we have the right web developer for your project.</p>
          </div>
          <div className="two-col" style={{ marginBottom: isMobile ? 12 : 16 }}>
            <p style={{ color: T, fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>By Business Type</p>
            <p style={{ color: T, fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>By Project Type</p>
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
            <Link href="/hire-developers" className="btn-teal">📅 Hire a Web Developer</Link>
            <Link href="/pricing" className="btn-outline">View Pricing →</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
    M8 — AI-POWERED
══════════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N2} 0%,${N1} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "0%", left: "50%", transform: "translateX(-50%)", width: isMobile ? 400 : 700, height: isMobile ? 200 : 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ marginBottom: isMobile ? 32 : 40, maxWidth: 620, marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
            <SectionBadge label="AI-Powered" />
            <SectionH2>Leverage <GradText>AI-Powered Web</GradText> Solutions</SectionH2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 13 : 15, lineHeight: 1.8 }}>We build AI into your website from day one — personalisation, automation, and real-time analytics that turn visitors into revenue.</p>
          </div>
          <div className="two-col-wide">
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 12 : 16 }}>
              {AI_FEATS.map((f, i) => (
                <div key={i} className="ai-feat-card" style={{ display: "flex", gap: isMobile ? 12 : 18, alignItems: "flex-start", padding: isMobile ? "16px" : "24px 22px", borderRadius: 16, background: f.clr, border: `1px solid ${f.bd}`, transition: "transform .25s,box-shadow .25s", cursor: "default" }}>
                  <div className="ai-icon-w" style={{ width: isMobile ? 44 : 52, height: isMobile ? 44 : 52, borderRadius: 14, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 22 : 24, background: f.clr, border: `1px solid ${f.bd}`, transition: "transform .25s" }}>{f.icon}</div>
                  <div>
                    <h3 style={{ color: "#fff", fontSize: isMobile ? "15px" : "17px", fontWeight: 700, marginBottom: 6, lineHeight: 1.3 }}>{f.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.52)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
              {/* <Link href="/ai-solutions" className="btn-teal" style={{ marginTop: 8, alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 10 }}>🤖 Explore AI Web Solutions →</Link> */}
            </div>
            {/* AI Visual */}
            <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", background: "linear-gradient(135deg,#0a1f38 0%,#061425 100%)", border: "1px solid rgba(0,201,167,0.15)", minHeight: isMobile ? "auto" : 460, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: isMobile ? "20px" : "36px 32px" }}>
              {/* <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(0,201,167,0.5),transparent)", animation: "aiScan 3s linear infinite" }} /> */}
              <div style={{ position: "absolute", top: "5%", right: "5%", width: isMobile ? 120 : 180, height: isMobile ? 120 : 180, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.12) 0%,transparent 70%)", animation: "aiPulse 4s ease-in-out infinite", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 2 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <div style={{ width: isMobile ? 8 : 10, height: isMobile ? 8 : 10, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 10px #22c55e" }} />
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 11 : 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>AI Engine — Live</span>
                </div>
                {[{ label: "Personalisation accuracy", val: "96%", color: T }, { label: "Conversion optimisation", val: "89%", color: "#818cf8" }, { label: "Page speed score", val: "98/100", color: T }, { label: "SEO visibility", val: "94%", color: "#f59e0b" }].map((row, i) => (
                  <div key={i} style={{ marginBottom: isMobile ? 10 : 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><span style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 11 : 12.5, fontWeight: 500 }}>{row.label}</span><span style={{ color: row.color, fontSize: isMobile ? 11 : 12.5, fontWeight: 700 }}>{row.val}</span></div>
                    <div style={{ height: 4, borderRadius: 4, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}><div style={{ height: "100%", borderRadius: 4, background: `linear-gradient(90deg,${row.color},${row.color}88)`, width: row.val === "98/100" ? "98%" : row.val }} /></div>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: isMobile ? 8 : 12, position: "relative", zIndex: 2, marginTop: isMobile ? 16 : 0 }}>
                {[{ label: "Visitors Tracked", val: "124K", icon: "👁️" }, { label: "Leads Generated", val: "3,842", icon: "🎯" }, { label: "Avg Load Time", val: "0.8s", icon: "⚡" }].map((m, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: isMobile ? "10px 6px" : "14px 12px", textAlign: "center" }}>
                    <div style={{ fontSize: isMobile ? 18 : 20, marginBottom: 4 }}>{m.icon}</div>
                    <div style={{ color: "#fff", fontSize: isMobile ? "14px" : "16px", fontWeight: 800, marginBottom: 2 }}>{m.val}</div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? 10 : 11, fontWeight: 500 }}>{m.label}</div>
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
          <div style={{ background: "linear-gradient(135deg, #0055b3 0%, #0077cc 35%, #0055b3 100%)", backgroundSize: "300% 300%", animation: "ctaBgShift 8s ease infinite", padding: isMobile ? "60px 20px" : "80px 48px", textAlign: "center", position: "relative" }}>
            <div style={{ position: "absolute", top: "-20%", left: "-5%", width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.1) 0%,transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-20%", right: "-5%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 2, maxWidth: isMobile ? "100%" : 800, margin: "0 auto" }}>
              <h2 style={{ fontSize: isMobile ? "clamp(22px, 6vw, 28px)" : isTablet ? "32px" : "clamp(36px, 4vw, 48px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Want <span style={{ textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.4)" }}>WEB DEVELOPMENT solutions</span> that take your business to the next level?
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

      {/* ══════════════════════════════════════════════════
    M10 — WHY CHOOSE US (VIDEO REMOVED)
══════════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", right: "-5%", width: isMobile ? 200 : 400, height: isMobile ? 200 : 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div className="two-col-wide">
            <div>
              <SectionBadge label="Our Story" />
              <SectionH2>Why Choose Us as Your <GradText>Web Development</GradText> Partner?</SectionH2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "13px" : "15px", lineHeight: 1.8, marginBottom: 16 }}>NNC Digital Solutions is backed by <span style={{ color: "#fff", fontWeight: 600 }}>Nakshatra Namaha Creations Pvt. Ltd.</span> — one of Bangalore&apos;s most respected digital studios with <span style={{ color: T, fontWeight: 600 }}>8+ years of experience</span> and <span style={{ color: T, fontWeight: 600 }}>565+ projects delivered</span>.</p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "13px" : "15px", lineHeight: 1.8, marginBottom: isMobile ? 24 : 32 }}>We launched NNC Digital as our international arm — bringing the same proven technical excellence to Canadian, US, and UK markets with transparent pricing, dedicated client-facing teams, and long-term partnership.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 8 : 10, marginBottom: 30 }}>
                {WCU_POINTS.map((p, i) => (
                  <div key={i} className="wcu-point" style={{ display: "flex", alignItems: "center", gap: 14, padding: isMobile ? "12px 14px" : "14px 18px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", transition: "border-color .2s,background .2s,transform .2s", cursor: "default" }}>
                    <span style={{ fontSize: isMobile ? 16 : 18, flexShrink: 0 }}>{p.icon}</span>
                    <span style={{ color: "rgba(255,255,255,0.72)", fontSize: isMobile ? "12px" : "14px", fontWeight: 500 }}>{p.text}</span>
                  </div>
                ))}
              </div>
              <div className="wcu-stats">
                {WCU_STATS.map(st => (
                  <div key={st.l} className="wcu-stat" style={{ textAlign: "center", padding: isMobile ? "14px 10px" : "22px 14px", borderRadius: 14, border: "1px solid rgba(0,201,167,0.15)", background: "rgba(0,201,167,0.05)", transition: "transform .25s,background .25s", cursor: "default" }}>
                    <div style={{ fontSize: isMobile ? "18px" : "24px", fontWeight: 900, marginBottom: 4, background: `linear-gradient(135deg,#fff 30%,${T})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}><Counter to={st.n} sfx={st.s} /></div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? 10 : 11, fontWeight: 500 }}>{st.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {/* Video removed - replaced with CTA card */}
              <div style={{ background: "rgba(0,201,167,0.05)", border: "1px solid rgba(0,201,167,0.15)", borderRadius: 24, padding: isMobile ? "30px 20px" : "40px 30px", textAlign: "center" }}>
                <div style={{ fontSize: isMobile ? 48 : 64, marginBottom: 16 }}>🌐</div>
                <h3 style={{ color: "#fff", fontSize: isMobile ? "20px" : "24px", fontWeight: 800, marginBottom: 12 }}>Ready to Build Your Website?</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "14px" : "16px", lineHeight: 1.7, marginBottom: 24 }}>
                  Join 1500+ businesses that have transformed their online presence with NNC Digital.
                </p>
                <Link href="/contact" className="btn-teal" style={{ width: isMobile ? "100%" : "auto" }}>Get Started Today →</Link>
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 20, flexWrap: "wrap" }}>
                {["🇨🇦 Canada", "🇺🇸 USA", "🇬🇧 UK", "🇮🇳 India"].map(b => (
                  <span key={b} style={{ padding: isMobile ? "5px 12px" : "6px 14px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "11px" : "12.5px", fontWeight: 500 }}>{b}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: isMobile ? 10 : 12, marginTop: 20 }}>
                <Link href="/book-consultation" className="btn-teal" style={{ flex: 1, padding: isMobile ? "11px 16px" : "13px 20px" }}>📅 Book a Free Strategy Call</Link>
                <Link href="/portfolio" className="btn-outline" style={{ flex: 1, padding: isMobile ? "11px 16px" : "13px 20px" }}>Our Portfolio →</Link>
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

      {/* ══════════════════════════════════════════════════
    M12 — FAQ
══════════════════════════════════════════════════ */}
     {/* M12 — FAQS */}
<section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N1} 0%,${N2} 100%)`, position: "relative", overflow: "hidden" }}>
  <div style={{ position: "absolute", top: "30%", right: "-5%", width: isMobile ? 200 : 400, height: isMobile ? 200 : 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
  <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 2 }}>
    <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 40 }}>
      <SectionBadge label="FAQs" />
      <SectionH2>FAQs</SectionH2>
      <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? "13px" : "15px", lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>Everything you need to know about web development for businesses in Canada, USA &amp; UK.</p>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
      
      {/* Q1: What technologies do you build with? */}
      <div className={`faq-item${faq === 0 ? " fopen" : ""}`} onClick={() => setFaq(faq === 0 ? null : 0)}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: isMobile ? 12 : 16, padding: isMobile ? "14px 16px" : "20px 22px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 14 }}>
            <span style={{ color: T, fontSize: isMobile ? 12 : 13, fontWeight: 800, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", borderRadius: 8, padding: isMobile ? "3px 8px" : "4px 10px", flexShrink: 0 }}>Q1</span>
            <span style={{ fontSize: isMobile ? "13px" : "15px", fontWeight: 700, color: faq === 0 ? "#fff" : "rgba(255,255,255,0.78)", lineHeight: 1.4 }}>What technologies do you build with?</span>
          </div>
          <div style={{ width: isMobile ? 26 : 30, height: isMobile ? 26 : 30, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 15 : 17, fontWeight: 700, lineHeight: 1, background: faq === 0 ? T : "rgba(255,255,255,0.07)", border: `1px solid ${faq === 0 ? T : "rgba(255,255,255,0.12)"}`, color: faq === 0 ? "#000" : "rgba(255,255,255,0.5)", transform: faq === 0 ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
        </div>
        <div style={{ maxHeight: faq === 0 ? 500 : 0, overflow: "hidden", transition: "max-height .38s ease" }}>
          <p style={{ padding: isMobile ? "0 16px 14px 48px" : "0 22px 22px 60px", color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.7, margin: 0 }}>
            Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process.
          </p>
        </div>
      </div>

      {/* Q2: How long does a website take to build? */}
      <div className={`faq-item${faq === 1 ? " fopen" : ""}`} onClick={() => setFaq(faq === 1 ? null : 1)}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: isMobile ? 12 : 16, padding: isMobile ? "14px 16px" : "20px 22px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 14 }}>
            <span style={{ color: T, fontSize: isMobile ? 12 : 13, fontWeight: 800, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", borderRadius: 8, padding: isMobile ? "3px 8px" : "4px 10px", flexShrink: 0 }}>Q2</span>
            <span style={{ fontSize: isMobile ? "13px" : "15px", fontWeight: 700, color: faq === 1 ? "#fff" : "rgba(255,255,255,0.78)", lineHeight: 1.4 }}>How long does a website take to build?</span>
          </div>
          <div style={{ width: isMobile ? 26 : 30, height: isMobile ? 26 : 30, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 15 : 17, fontWeight: 700, lineHeight: 1, background: faq === 1 ? T : "rgba(255,255,255,0.07)", border: `1px solid ${faq === 1 ? T : "rgba(255,255,255,0.12)"}`, color: faq === 1 ? "#000" : "rgba(255,255,255,0.5)", transform: faq === 1 ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
        </div>
        <div style={{ maxHeight: faq === 1 ? 500 : 0, overflow: "hidden", transition: "max-height .38s ease" }}>
          <p style={{ padding: isMobile ? "0 16px 14px 48px" : "0 22px 22px 60px", color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.7, margin: 0 }}>
            Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process.
          </p>
        </div>
      </div>

      {/* Q3: Do you do SEO as part of the website build? */}
      <div className={`faq-item${faq === 2 ? " fopen" : ""}`} onClick={() => setFaq(faq === 2 ? null : 2)}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: isMobile ? 12 : 16, padding: isMobile ? "14px 16px" : "20px 22px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 14 }}>
            <span style={{ color: T, fontSize: isMobile ? 12 : 13, fontWeight: 800, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", borderRadius: 8, padding: isMobile ? "3px 8px" : "4px 10px", flexShrink: 0 }}>Q3</span>
            <span style={{ fontSize: isMobile ? "13px" : "15px", fontWeight: 700, color: faq === 2 ? "#fff" : "rgba(255,255,255,0.78)", lineHeight: 1.4 }}>Do you do SEO as part of the website build?</span>
          </div>
          <div style={{ width: isMobile ? 26 : 30, height: isMobile ? 26 : 30, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 15 : 17, fontWeight: 700, lineHeight: 1, background: faq === 2 ? T : "rgba(255,255,255,0.07)", border: `1px solid ${faq === 2 ? T : "rgba(255,255,255,0.12)"}`, color: faq === 2 ? "#000" : "rgba(255,255,255,0.5)", transform: faq === 2 ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
        </div>
        <div style={{ maxHeight: faq === 2 ? 500 : 0, overflow: "hidden", transition: "max-height .38s ease" }}>
          <p style={{ padding: isMobile ? "0 16px 14px 48px" : "0 22px 22px 60px", color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.7, margin: 0 }}>
            Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process.
          </p>
        </div>
      </div>

      {/* Q4: Can you redesign our existing website? */}
      <div className={`faq-item${faq === 3 ? " fopen" : ""}`} onClick={() => setFaq(faq === 3 ? null : 3)}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: isMobile ? 12 : 16, padding: isMobile ? "14px 16px" : "20px 22px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 14 }}>
            <span style={{ color: T, fontSize: isMobile ? 12 : 13, fontWeight: 800, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", borderRadius: 8, padding: isMobile ? "3px 8px" : "4px 10px", flexShrink: 0 }}>Q4</span>
            <span style={{ fontSize: isMobile ? "13px" : "15px", fontWeight: 700, color: faq === 3 ? "#fff" : "rgba(255,255,255,0.78)", lineHeight: 1.4 }}>Can you redesign our existing website?</span>
          </div>
          <div style={{ width: isMobile ? 26 : 30, height: isMobile ? 26 : 30, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 15 : 17, fontWeight: 700, lineHeight: 1, background: faq === 3 ? T : "rgba(255,255,255,0.07)", border: `1px solid ${faq === 3 ? T : "rgba(255,255,255,0.12)"}`, color: faq === 3 ? "#000" : "rgba(255,255,255,0.5)", transform: faq === 3 ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
        </div>
        <div style={{ maxHeight: faq === 3 ? 500 : 0, overflow: "hidden", transition: "max-height .38s ease" }}>
          <p style={{ padding: isMobile ? "0 16px 14px 48px" : "0 22px 22px 60px", color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.7, margin: 0 }}>
            Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process.
          </p>
        </div>
      </div>

      {/* Q5: Do you offer website maintenance? */}
      <div className={`faq-item${faq === 4 ? " fopen" : ""}`} onClick={() => setFaq(faq === 4 ? null : 4)}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: isMobile ? 12 : 16, padding: isMobile ? "14px 16px" : "20px 22px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 14 }}>
            <span style={{ color: T, fontSize: isMobile ? 12 : 13, fontWeight: 800, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", borderRadius: 8, padding: isMobile ? "3px 8px" : "4px 10px", flexShrink: 0 }}>Q5</span>
            <span style={{ fontSize: isMobile ? "13px" : "15px", fontWeight: 700, color: faq === 4 ? "#fff" : "rgba(255,255,255,0.78)", lineHeight: 1.4 }}>Do you offer website maintenance?</span>
          </div>
          <div style={{ width: isMobile ? 26 : 30, height: isMobile ? 26 : 30, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 15 : 17, fontWeight: 700, lineHeight: 1, background: faq === 4 ? T : "rgba(255,255,255,0.07)", border: `1px solid ${faq === 4 ? T : "rgba(255,255,255,0.12)"}`, color: faq === 4 ? "#000" : "rgba(255,255,255,0.5)", transform: faq === 4 ? "rotate(45deg)" : "rotate(0deg)", transition: "all .25s ease" }}>+</div>
        </div>
        <div style={{ maxHeight: faq === 4 ? 500 : 0, overflow: "hidden", transition: "max-height .38s ease" }}>
          <p style={{ padding: isMobile ? "0 16px 14px 48px" : "0 22px 22px 60px", color: "rgba(255,255,255,0.55)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.7, margin: 0 }}>
            Detailed answer tailored for businesses in Canada, USA, and UK — covering timeline, cost, compliance, and process.
          </p>
        </div>
      </div>
    </div>
    
    <div style={{ textAlign: "center", marginTop: isMobile ? 32 : 40 }}>
      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? 12 : 14, marginBottom: 16 }}>Still have questions? We respond within 24 hours.</p>
      <Link href="/contact" className="btn-teal">Ask Us Anything →</Link>
    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════════════
    M13 — CONTACT FORM
══════════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(180deg,${N2} 0%,${N0} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: isMobile ? 400 : 700, height: isMobile ? 200 : 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
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
                  <Link href="/web-development">
                    <button onClick={() => { setCSubmitted(false); setCForm({ name: "", phone: "", dialCode: "+1", email: "", service: "", project: "" }); }} className="btn-teal" style={{ minWidth: "auto", padding: isMobile ? "10px 22px" : "12px 28px", fontSize: isMobile ? "13px" : "14px" }}>Send Another →</button>
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
                    <label style={{ display: "block", fontSize: isMobile ? 11 : 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Service of Interest</label>
                    <select className="fi" style={{ ...iSLg, cursor: "pointer" }} value={cForm.service} onChange={e => setCF("service", e.target.value)}>
                      <option value="">Select a service...</option>
                      {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom: 20 }}><label style={{ display: "block", fontSize: isMobile ? 11 : 12.5, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5, textTransform: "uppercase" as const, letterSpacing: "0.04em" }}>Project Description</label><textarea className="fi" style={{ ...iSLg, minHeight: isMobile ? 80 : 110, resize: "vertical" as const }} placeholder="Briefly describe your project, goals, and timeline..." value={cForm.project} onChange={e => setCF("project", e.target.value)} /></div>
                  <button className="btn-teal" type="submit" disabled={cLoading} style={{ width: "100%", opacity: cLoading ? 0.6 : 1, cursor: cLoading ? "wait" : "pointer" }}>{cLoading ? "Sending..." : "Submit — Get Free Consultation →"}</button>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: isMobile ? 10 : 11.5, textAlign: "center", marginTop: 12 }}>🔒 Your information is 100% secure and never shared.</p>
                </form>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 16 : 20 }}>
              <div style={{ background: "rgba(0,201,167,0.05)", border: "1px solid rgba(0,201,167,0.18)", borderRadius: 18, padding: isMobile ? "20px" : "28px 26px" }}>
                <h3 style={{ color: "#fff", fontSize: isMobile ? "15px" : "16px", fontWeight: 800, marginBottom: isMobile ? 14 : 18 }}>What Happens After You Submit?</h3>
                {[{ s: "1", text: "We review your project within a few hours — no bots." }, { s: "2", text: "A senior web consultant calls you within 24 hours." }, { s: "3", text: "We send a free scoping document with timeline & cost." }, { s: "4", text: "You decide — no pressure, no obligation." }].map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: isMobile ? 10 : 14, alignItems: "flex-start", marginBottom: i < 3 ? (isMobile ? 12 : 16) : 0, padding: isMobile ? "8px 12px" : "12px 14px", borderRadius: 10, background: "rgba(255,255,255,0.03)", transition: "background .2s", cursor: "default" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,0.07)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"}>
                    <div style={{ width: isMobile ? 28 : 32, height: isMobile ? 28 : 32, borderRadius: "50%", flexShrink: 0, background: `linear-gradient(135deg,${T},${TD})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 10 : 11, fontWeight: 900, color: "#000" }}>{s.s}</div>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: isMobile ? "12px" : "14px", lineHeight: 1.6, margin: 0 }}>{s.text}</p>
                  </div>
                ))}
              </div>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: isMobile ? "20px" : "26px" }}>
                <h3 style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: isMobile ? 14 : 18 }}>Direct Contacts</h3>
                {[{ flag: "🇨🇦", label: "Canada", phone: "+1 647-XXX-XXXX" }, { flag: "🇺🇸", label: "USA", phone: "+1 631-XXX-XXXX" }, { flag: "🇬🇧", label: "UK", phone: "+44 20-XXXX-XXXX" }].map((c, i) => (
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