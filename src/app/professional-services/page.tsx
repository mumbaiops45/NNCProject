"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = "#00C9A7";
const TD = "#00a07a";
const P = "#8B5CF6";
const G = "#10B981";
const O = "#F59E0B";
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";

// ─── Data ─────────────────────────────────────────────────────────────────────
const LOGOS = [
  "clients1.png", "clients2.png", "clients3.png", "clients4.png", "clients5.png",
  "clients6.png", "clients7.png", "clients8.png", "clients9.png", "clients10.png",
  "clients11.png", "clients12.png"
];

const SUCCESS_STORIES = [
  {
    id: 1,
    icon: "⚖️",
    title: "38% Faster Matter Resolution for Toronto Law Firm",
    description: "A mid-sized law firm implemented our matter management CRM with document automation and client portal, reducing admin time.",
    metrics: [
      { label: "Resolution", value: "-38%" },
      { label: "Billable Hours", value: "+24%" },
      { label: "Client Satisfaction", value: "4.9★" }
    ],
    tags: ["Legal", "CRM", "Canada"]
  },
  {
    id: 2,
    icon: "📊",
    title: "52% Faster Client Onboarding for NYC Consultancy",
    description: "A management consultancy automated their KYC/AML workflows and client onboarding, cutting intake time by more than half.",
    metrics: [
      { label: "Onboarding", value: "-52%" },
      { label: "Errors", value: "-89%" },
      { label: "Pipeline", value: "+43%" }
    ],
    tags: ["Consulting", "Automation", "USA"]
  },
  {
    id: 3,
    icon: "💰",
    title: "2.3× Billable Utilization for London Accountancy",
    description: "Time & billing integration with practice management software increased billable utilization across the firm.",
    metrics: [
      { label: "Utilization", value: "2.3×" },
      { label: "Invoicing", value: "-67%" },
      { label: "Cash Flow", value: "+34%" }
    ],
    tags: ["Accountancy", "Billing", "UK"]
  }
];

const SOLUTIONS = [
  { icon: "👥", title: "Client Relationship CRM", desc: "Complete client history, contact management, and communication tracking for professional services firms." },
  { icon: "📋", title: "Matter & Project Management Integration", desc: "Track projects, matters, and engagements with time tracking and deliverable management." },
  { icon: "🚀", title: "Client Onboarding Automation", desc: "Automated intake forms, KYC/AML checks, engagement letters, and welcome sequences." },
  { icon: "📈", title: "Business Development Pipeline", desc: "Track opportunities, pursuits, and BD activities with partner-level pipeline visibility." },
  { icon: "📄", title: "Document Management & e-Signature", desc: "Secure document storage, version control, and integrated e-signature workflows." },
  { icon: "🔑", title: "Client Portal Development", desc: "Self-service portals for clients to access documents, track matters, and communicate securely." },
  { icon: "⏱️", title: "Time & Billing Integration", desc: "Seamless sync with practice management and accounting systems for accurate billing." },
  { icon: "🔍", title: "KYC/AML Workflow Automation", desc: "Automated identity verification, risk assessment, and compliance documentation." },
  { icon: "📊", title: "Partner Performance Reporting", desc: "Real-time dashboards for billable hours, realization rates, and pipeline health by partner." }
];

const COMPLIANCE = [
  {
    region: "AML/KYC",
    flag: "🔍",
    title: "AML/KYC Compliance",
    desc: "Built-in KYC and AML workflow support for law firms, accountancies, and financial services in Canada, USA and UK."
  },
  {
    region: "Data Protection",
    flag: "🔒",
    title: "GDPR & PIPEDA",
    desc: "Client data handled to GDPR (UK/EU) and PIPEDA (Canada) standards across all modules with consent management."
  },
  {
    region: "Regulatory",
    flag: "⚖️",
    title: "SRA & Law Society Standards",
    desc: "Document and matter management aligned with SRA (UK) and Law Society (Canada) regulatory requirements."
  }
];

const FAQS = [
  {
    q: "How long does a professional services CRM implementation take?",
    a: "A focused professional services CRM typically takes 8-14 weeks. This includes client onboarding automation, matter/project management setup, and integration with existing practice management or accounting systems. For law firms, we ensure SRA/Law Society compliance; for accountancies, we align with KYC/AML requirements."
  },
  {
    q: "Can you integrate with our existing practice management or accounting software?",
    a: "Yes. We specialize in integrating CRMs with professional services tools including Clio, Xero, QuickBooks, Thomson Reuters, and custom practice management systems. Integration covers time tracking, billing, client data sync, and document management — eliminating double-entry and ensuring accurate financial data."
  },
  {
    q: "What does a professional services CRM cost in Canada or the UK?",
    a: "A comprehensive CRM for professional services starts from CAD $22,000–$38,000 / £16,000–£28,000. This includes client onboarding, matter management, document management, and basic reporting. Enterprise solutions with KYC/AML automation, client portals, and partner dashboards range from CAD $40,000–$75,000 / £30,000–£55,000. All quotes fixed-price with milestone billing."
  },
  {
    q: "Do you offer client portals and e-signatures?",
    a: "Yes. We build secure client portals where clients can access documents, track matter progress, and communicate with your team. Integrated e-signature workflows (using platforms like DocuSign or custom solutions) allow for seamless signing of engagement letters, contracts, and deliverables — all tracked in the CRM."
  }
];

const WCU_POINTS = [
  { icon: "⚖️", text: "8+ years of professional services expertise" },
  { icon: "🌍", text: "Serving Canada, USA & UK markets" },
  { icon: "⚡", text: "565+ projects delivered globally" },
  { icon: "🔗", text: "Practice management integration specialists" },
  { icon: "🤝", text: "Dedicated client teams in your time zone" },
  { icon: "📱", text: "Full-stack: Web, Mobile, CRM, Portals" }
];

const WCU_STATS = [
  { n: 8, s: "+", l: "Years" },
  { n: 565, s: "+", l: "Projects" },
  { n: 100, s: "+", l: "Team" },
  { n: 40, s: "+", l: "Professional Services Clients" }
];

const PROFESSIONAL_STATS = [
  { value: "38%", label: "Faster Resolution", icon: "⚡" },
  { value: "52%", label: "Faster Onboarding", icon: "🚀" },
  { value: "2.3×", label: "Billable Utilization", icon: "💰" },
  { value: "99%", label: "Data Accuracy", icon: "✅" }
];

const INT_OFFICES = [
  { flag: "🇨🇦", city: "Toronto, Canada", phone: "+1 647-XXX-XXXX", email: "professional@nncdigital.com", tz: "EST / EDT" },
  { flag: "🇺🇸", city: "New York, USA", phone: "+1 631-XXX-XXXX", email: "professional@nncdigital.com", tz: "EST / EDT" },
  { flag: "🇬🇧", city: "London, UK", phone: "+44 20-XXXX-XXXX", email: "professional@nncdigital.com", tz: "GMT / BST" }
];

const INDIA_OFFICES = [
  { city: "Bangalore (HQ)", phone: "+91 9900566466", note: "Primary engineering hub" },
  { city: "Mysore", phone: null, note: "Design & QA" },
  { city: "Mumbai", phone: null, note: "Sales & partnerships" },
  { city: "Hyderabad", phone: null, note: "Mobile & cloud" }
];

const SERVICES_LIST = [
  "Client CRM", "Matter Management", "Onboarding Automation",
  "Document Management", "Client Portal", "KYC/AML", "Other"
];

const DIAL_CODES = [
  { code: "+1", flag: "🇨🇦" },
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+91", flag: "🇮🇳" }
];

// ─── Helper Components ────────────────────────────────────────────────────────

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
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
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
          step++; const ease = 1 - Math.pow(1 - step / 70, 3);
          setV(Math.round(ease * to));
          if (step >= 70) { setV(to); clearInterval(t); }
        }, 1800 / 70);
      }
    }, { threshold: .25 });
    obs.observe(el); return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{v}{sfx}</span>;
}

function SectionBadge({ label }: { label: string }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.22)",
      borderRadius: 100, padding: "6px 18px", marginBottom: 16
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: T, display: "block", boxShadow: `0 0 8px ${T}` }} />
      <span style={{ color: T, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

function SectionH2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: "clamp(24px, 5vw, 40px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 14 }}>{children}</h2>;
}

function GradText({ children }: { children: React.ReactNode }) {
  return <span style={{ background: `linear-gradient(135deg,${T},#1fd1b5)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{children}</span>;
}

// Stats Dashboard Component
function StatsDashboard() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <div style={{
      background: `linear-gradient(135deg, ${N2} 0%, ${N1} 100%)`,
      borderRadius: 24,
      padding: "clamp(20px, 4vw, 32px)",
      border: `1px solid ${T}30`,
      boxShadow: `0 20px 40px rgba(0,0,0,0.4)`,
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute",
        top: "-50%",
        right: "-20%",
        width: 300,
        height: 300,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${T}20 0%, transparent 70%)`,
        pointerEvents: "none"
      }} />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "clamp(12px, 3vw, 24px)",
        marginBottom: "clamp(16px, 3vw, 24px)"
      }}>
        {PROFESSIONAL_STATS.map((stat, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredStat(i)}
            onMouseLeave={() => setHoveredStat(null)}
            style={{
              background: hoveredStat === i ? `rgba(0,201,167,0.15)` : "rgba(255,255,255,0.03)",
              border: `1px solid ${hoveredStat === i ? T : "rgba(255,255,255,0.05)"}`,
              borderRadius: 16,
              padding: "clamp(12px, 2.5vw, 20px) clamp(8px, 2vw, 16px)",
              textAlign: "center",
              transition: "all 0.3s ease",
              transform: hoveredStat === i ? "translateY(-4px)" : "none",
              cursor: "default"
            }}
          >
            <div style={{ fontSize: "clamp(24px, 4vw, 32px)", marginBottom: 8 }}>{stat.icon}</div>
            <div style={{ fontSize: "clamp(18px, 3.5vw, 28px)", fontWeight: 900, color: T, marginBottom: 4 }}>{stat.value}</div>
            <div style={{ fontSize: "clamp(11px, 2vw, 13px)", color: "rgba(255,255,255,0.6)" }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: 16,
        padding: "clamp(12px, 2.5vw, 20px)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
          <span style={{ fontSize: "clamp(20px, 3vw, 24px)" }}>📊</span>
          <span style={{ color: T, fontSize: "clamp(12px, 2vw, 14px)", fontWeight: 700 }}>PRACTICE METRICS</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(8px, 2vw, 12px)" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, flexWrap: "wrap", gap: 4 }}>
              <span style={{ fontSize: "clamp(11px, 2vw, 12px)", color: "rgba(255,255,255,0.5)" }}>Billable Utilization Rate</span>
              <span style={{ fontSize: "clamp(11px, 2vw, 12px)", color: T, fontWeight: 600 }}>78%</span>
            </div>
            <div style={{ height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 3 }}>
              <div style={{ width: "78%", height: "100%", background: T, borderRadius: 3 }} />
            </div>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, flexWrap: "wrap", gap: 4 }}>
              <span style={{ fontSize: "clamp(11px, 2vw, 12px)", color: "rgba(255,255,255,0.5)" }}>Realization Rate</span>
              <span style={{ fontSize: "clamp(11px, 2vw, 12px)", color: T, fontWeight: 600 }}>92%</span>
            </div>
            <div style={{ height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 3 }}>
              <div style={{ width: "92%", height: "100%", background: T, borderRadius: 3 }} />
            </div>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, flexWrap: "wrap", gap: 4 }}>
              <span style={{ fontSize: "clamp(11px, 2vw, 12px)", color: "rgba(255,255,255,0.5)" }}>Client Retention Rate</span>
              <span style={{ fontSize: "clamp(11px, 2vw, 12px)", color: T, fontWeight: 600 }}>94%</span>
            </div>
            <div style={{ height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 3 }}>
              <div style={{ width: "94%", height: "100%", background: T, borderRadius: 3 }} />
            </div>
          </div>
        </div>
      </div>

      <div style={{
        marginTop: "clamp(12px, 2.5vw, 20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        flexWrap: "wrap"
      }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
        <span style={{ fontSize: "clamp(11px, 2vw, 12px)", color: "rgba(255,255,255,0.5)" }}>Practice connected · Live data</span>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ProfessionalServicesIndustryPage() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", dialCode: "+1", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const setF = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200); };

  const [cForm, setCForm] = useState({ name: "", phone: "", dialCode: "+1", email: "", project: "" });
  const [cSubmitted, setCSubmitted] = useState(false);
  const [cLoading, setCLoading] = useState(false);
  const setCF = (k: string, v: string) => setCForm(f => ({ ...f, [k]: v }));
  const handleCSubmit = (e: React.FormEvent) => { e.preventDefault(); setCLoading(true); setTimeout(() => { setCLoading(false); setCSubmitted(true); }, 1200); };

  const [story, setStory] = useState(0);
  const [faq, setFaq] = useState<number | null>(0);
  const [gTab, setGTab] = useState<"int" | "india">("int");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 640;
  const isTablet = windowWidth > 640 && windowWidth <= 1024;
  const isDesktop = windowWidth > 1024;

  const getSectionPadding = () => {
    if (isMobile) return "20px 16px";
    if (isTablet) return "60px 32px";
    return "50px 48px";
  };

  const getGridColumns = (mobile: number, tablet: number, desktop: number) => {
    if (isMobile) return `repeat(${mobile}, 1fr)`;
    if (isTablet) return `repeat(${tablet}, 1fr)`;
    return `repeat(${desktop}, 1fr)`;
  };

  const iS: React.CSSProperties = {
    width: "100%",
    padding: isMobile ? "10px 12px" : "12px 16px",
    borderRadius: 10,
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.14)",
    color: "#fff",
    fontSize: isMobile ? 13 : 14,
    fontFamily: "'Poppins', sans-serif",
    outline: "none",
    transition: "all 0.3s ease"
  };

  const iSLg: React.CSSProperties = { ...iS, padding: isMobile ? "12px 14px" : "14px 18px", fontSize: isMobile ? 14 : 15 };

  return (
    <>
      <Navbar />

      {/* MODULE 1 — HERO + INLINE FORM */}
      <section style={{
        padding: isMobile ? "40px 16px 40px" : isTablet ? "80px 32px 60px" : "90px 48px 80px",
        background: `linear-gradient(135deg, ${N0} 0%, #041628 50%, ${N0} 100%)`,
        position: "relative", overflow: "hidden", minHeight: isMobile ? "auto" : "90vh",
        display: "flex", alignItems: "center"
      }}>
        <Particles />
        {/* <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
          backgroundImage: `linear-gradient(rgba(0,201,167,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.035) 1px,transparent 1px)`,
          backgroundSize: "60px 60px"
        }} /> */}
        {!isMobile && (
          <>
            <div style={{
              position: "absolute", width: isTablet ? 500 : 650, height: isTablet ? 500 : 650, borderRadius: "50%",
              background: `radial-gradient(circle,${T}18 0%,transparent 65%)`,
              top: "40%", left: "-10%", transform: "translateY(-50%)",
              animation: "pulse 8s ease-in-out infinite", pointerEvents: "none", zIndex: 1
            }} />
            <div style={{
              position: "absolute", width: isTablet ? 300 : 400, height: isTablet ? 300 : 400, borderRadius: "50%",
              background: "radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 65%)",
              top: "10%", right: "5%", animation: "pulse 10s ease-in-out infinite", pointerEvents: "none", zIndex: 1
            }} />
          </>
        )}

        <div style={{
          maxWidth: 1280, margin: "0 auto", width: "100%",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 32 : isTablet ? 40 : 60,
          alignItems: "center",
          position: "relative",
          zIndex: 3
        }}>
          {/* Left - Hero Text */}
          <div>
            <SectionBadge label="Professional Services Technology" />
            <h1 style={{
              fontSize: isMobile ? "clamp(24px, 7vw, 28px)" : isTablet ? "clamp(28px, 4vw, 32px)" : "clamp(36px, 4vw, 48px)",
              fontWeight: 900, lineHeight: 1.2, marginBottom: isMobile ? 16 : 20, color: "#fff"
            }}>
              Digital Systems for <GradText>Professional Services Firms</GradText> in Canada, USA & UK
            </h1>
            <p style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: isMobile ? 14 : isTablet ? 15 : 16,
              lineHeight: 1.8, marginBottom: isMobile ? 24 : 32,
              maxWidth: isMobile ? "100%" : 540
            }}>
              Law firms, accountancies, consultancies, and agencies share a common challenge: managing complex client relationships, billable time, project delivery, and business development simultaneously.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: isMobile ? 20 : 32 }}>
              {[
                { icon: "⚖️", label: "Legal" },
                { icon: "📊", label: "Consulting" },
                { icon: "💰", label: "Accountancy" },
                { icon: "🎯", label: "Agencies" }
              ].map((b, i) => (
                <span key={i} style={{
                  padding: isMobile ? "4px 8px" : "6px 12px", borderRadius: 100,
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.8)", fontSize: isMobile ? 11 : 12, fontWeight: 500,
                  display: "flex", alignItems: "center", gap: 4
                }}>
                  <span>{b.icon}</span> {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Lead Form */}
          <div style={{
            background: "rgba(8,20,40,0.85)", border: `1px solid ${T}30`,
            borderRadius: 24, padding: isMobile ? "20px 16px" : isTablet ? "24px 20px" : "28px 24px",
            backdropFilter: "blur(16px)", boxShadow: "0 32px 64px rgba(0,0,0,0.5)"
          }}>
            <h3 style={{ fontSize: isMobile ? 18 : isTablet ? 20 : 22, fontWeight: 700, marginBottom: isMobile ? 16 : 20 }}>
              Get a Free <span style={{ color: T }}>Consultation</span>
            </h3>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: isMobile ? 40 : 48, marginBottom: 16 }}>⚖️</div>
                <h4 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, marginBottom: 8 }}>Request Received!</h4>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 13 : 14, marginBottom: 20 }}>
                  A professional services specialist will contact you within 24 hours.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", dialCode: "+1", email: "", service: "", message: "" }); }} style={{
                  padding: "8px 16px", borderRadius: 100, border: "none",
                  background: T, color: "#000", fontWeight: 600, fontSize: isMobile ? 13 : 14, cursor: "pointer"
                }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
                <input style={iS} placeholder="Full Name *" required value={form.name} onChange={e => setF("name", e.target.value)} />
                <div style={{ display: "flex", gap: 8, flexDirection: isMobile ? "column" : "row" }}>
                  <select style={{ ...iS, width: isMobile ? "100%" : 100 }} value={form.dialCode} onChange={e => setF("dialCode", e.target.value)}>
                    {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                  </select>
                  <input style={{ ...iS, flex: 1 }} type="tel" placeholder="Phone Number *" required value={form.phone} onChange={e => setF("phone", e.target.value)} />
                </div>
                <input style={iS} type="email" placeholder="Business Email *" required value={form.email} onChange={e => setF("email", e.target.value)} />
                <select style={iS} value={form.service} onChange={e => setF("service", e.target.value)}>
                  <option value="">Service of Interest</option>
                  {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <textarea style={{ ...iS, minHeight: isMobile ? 60 : 80, resize: "vertical" }} placeholder="Message" value={form.message} onChange={e => setF("message", e.target.value)} />
                <button type="submit" disabled={loading} style={{
                  width: "100%", padding: "12px", borderRadius: 100, border: "none",
                  background: loading ? T + "80" : `linear-gradient(135deg, ${T}, ${TD})`,
                  color: "#000", fontWeight: 700, fontSize: isMobile ? 14 : 15, cursor: loading ? "wait" : "pointer"
                }}>
                  {loading ? "Sending..." : "Get Free Consultation →"}
                </button>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: isMobile ? 10 : 11, textAlign: "center" }}>🔒 No spam. Ever.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MODULE 2 — OUR HAPPY CLIENTS + SUCCESS STORIES */}
      <section style={{ padding: getSectionPadding(), background: N1 }}>
        {/* Client Logos */}
        <div style={{ marginBottom: isMobile ? 40 : 60 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 24 }}>
            <SectionBadge label="Our Happy Clients" />
            <SectionH2>Trusted by <GradText>Professional Services Firms</GradText> Across North America & UK</SectionH2>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div style={{
              display: "flex", gap: isMobile ? 20 : 40, animation: "marquee 30s linear infinite",
              width: "fit-content"
            }}>
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <div
                  key={i}
                  style={{
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: isMobile ? 60 : 70,
                    padding: "10px 18px",
                    background: "#ffffff",
                    borderRadius: 10,
                    margin: "0 6px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.12)"
                  }}
                >
                  <img
                    src={`/${logo}`}
                    alt="Client"
                    style={{
                      height: isMobile ? 32 : 40,
                      width: "auto",
                      maxWidth: isMobile ? 90 : 120,
                      objectFit: "contain"
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 24 }}>
            <SectionBadge label="Success Stories" />
            <SectionH2>Professional Services <GradText>Success Stories</GradText></SectionH2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: getGridColumns(1, 2, 3),
            gap: isMobile ? 16 : isTablet ? 20 : 24
          }}>
            {SUCCESS_STORIES.map((s, i) => (
              <div key={i} onMouseEnter={() => setHoveredCard(i)} onMouseLeave={() => setHoveredCard(null)} style={{
                background: "rgba(255,255,255,0.02)", border: `1px solid ${hoveredCard === i ? T : "rgba(255,255,255,0.05)"}`,
                borderRadius: 24, padding: isMobile ? 16 : 20, transition: "all 0.3s ease",
                transform: hoveredCard === i && !isMobile ? "translateY(-4px)" : "none"
              }}>
                <div style={{ fontSize: isMobile ? 40 : 48, marginBottom: isMobile ? 12 : 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: isMobile ? 14 : 16, fontWeight: 700, color: T, marginBottom: isMobile ? 8 : 12 }}>{s.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 12 : 14, lineHeight: 1.6, marginBottom: isMobile ? 16 : 20 }}>{s.description}</p>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: isMobile ? 12 : 16 }}>
                  {s.metrics.map((m, j) => (
                    <div key={j} style={{ textAlign: "center" }}>
                      <div style={{ color: T, fontSize: isMobile ? 14 : 18, fontWeight: 700 }}>{m.value}</div>
                      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? 9 : 11 }}>{m.label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                  {s.tags.map((tag, j) => (
                    <span key={j} style={{
                      padding: "4px 8px", borderRadius: 100, background: "rgba(0,201,167,0.1)",
                      border: `1px solid ${T}30`, color: T, fontSize: isMobile ? 9 : 11, fontWeight: 600
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: isMobile ? 16 : 20 }}>
            {SUCCESS_STORIES.map((_, i) => (
              <button key={i} onClick={() => setStory(i)} style={{
                width: story === i ? 24 : 8, height: 8, borderRadius: 100,
                background: story === i ? T : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer"
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* MODULE 3 — DIGITAL SOLUTIONS WE BUILD */}
      <section style={{ padding: getSectionPadding(), background: N2 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 24 }}>
            <SectionBadge label="What We Build" />
            <SectionH2>Professional Services <GradText>Digital Solutions</GradText> We Build</SectionH2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: getGridColumns(1, 2, 3),
            gap: isMobile ? 16 : isTablet ? 20 : 24
          }}>
            {SOLUTIONS.map((s, i) => (
              <div key={i} onMouseEnter={() => setHoveredCard(i + 10)} onMouseLeave={() => setHoveredCard(null)} style={{
                background: "rgba(255,255,255,0.02)", border: `1px solid ${hoveredCard === i + 10 ? T : "rgba(255,255,255,0.05)"}`,
                borderRadius: 20, padding: isMobile ? 16 : 20, transition: "all 0.3s ease",
                transform: hoveredCard === i + 10 && !isMobile ? "translateY(-4px)" : "none"
              }}>
                <div style={{ fontSize: isMobile ? 28 : 36, marginBottom: isMobile ? 12 : 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: isMobile ? 14 : 16, fontWeight: 700, color: "#fff", marginBottom: isMobile ? 6 : 8 }}>{s.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 12 : 13, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULE 4 — COMPLIANCE & DATA SECURITY */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(135deg, ${N1} 0%, ${N0} 100%)` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 24 }}>
            <SectionBadge label="Compliance & Security" />
            <SectionH2>Built for <GradText>Regulatory Requirements</GradText> in Canada, USA & UK</SectionH2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: getGridColumns(1, 2, 3),
            gap: isMobile ? 16 : isTablet ? 20 : 24
          }}>
            {COMPLIANCE.map((c, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: 20, padding: isMobile ? 16 : 20, textAlign: "center"
              }}>
                <div style={{ fontSize: isMobile ? 40 : 48, marginBottom: isMobile ? 12 : 16 }}>{c.flag}</div>
                <h3 style={{ color: T, fontSize: isMobile ? 16 : 20, fontWeight: 700, marginBottom: 4 }}>{c.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: isMobile ? 13 : 14, marginBottom: 8 }}>{c.region}</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 12 : 13, lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULE 5 — WHY CHOOSE US | GLOBAL PRESENCE | FAQS | CTA */}
      <section style={{ padding: getSectionPadding(), background: N1 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Why Choose Us */}
          <div style={{ marginBottom: isMobile ? 40 : 60 }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 24 }}>
              <SectionBadge label="Why Choose Us" />
              <SectionH2>Your Trusted <GradText>Professional Services Technology</GradText> Partner</SectionH2>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? 32 : isTablet ? 32 : 48,
              alignItems: "center"
            }}>
              <div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: isMobile ? 14 : 15, lineHeight: 1.7, marginBottom: 20 }}>
                  Backed by <strong style={{ color: T }}>Nakshatra Namaha Creations Pvt. Ltd.</strong> — 8+ years of experience, 565+ projects delivered. Dedicated client teams in Canada, USA, and UK. Practice management integration specialists. Long-term partnership focused on your success.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                  {WCU_POINTS.map((p, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 16 }}>{p.icon}</span>
                      <span style={{ color: "rgba(255,255,255,0.8)", fontSize: isMobile ? 13 : 14 }}>{p.text}</span>
                    </div>
                  ))}
                </div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
                  gap: isMobile ? 8 : 12
                }}>
                  {WCU_STATS.map((s, i) => (
                    <div key={i} style={{ textAlign: "center", padding: isMobile ? "8px" : "0" }}>
                      <div style={{ fontSize: isMobile ? 16 : 22, fontWeight: 900, color: T }}><Counter to={s.n} sfx={s.s} /></div>
                      <div style={{ fontSize: isMobile ? 9 : 11, color: "rgba(255,255,255,0.4)" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* StatsDashboard */}
              <StatsDashboard />
            </div>
          </div>

          {/* Global Presence */}
          <div style={{ marginBottom: isMobile ? 40 : 60 }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 24 }}>
              <SectionBadge label="Our Reach" />
              <SectionH2>Global <GradText>Presence</GradText></SectionH2>
            </div>

            <div style={{
              display: "flex", gap: 8, justifyContent: "center", marginBottom: isMobile ? 20 : 24, flexWrap: "wrap"
            }}>
              {[
                { key: "int", label: "🌍 North America & UK" },
                { key: "india", label: "🇮🇳 India (Engineering HQ)" }
              ].map(t => (
                <button key={t.key} onClick={() => setGTab(t.key as "int" | "india")} style={{
                  padding: isMobile ? "6px 12px" : "8px 16px", borderRadius: 100,
                  border: `1px solid ${gTab === t.key ? T : "rgba(255,255,255,0.1)"}`,
                  background: gTab === t.key ? "rgba(0,201,167,0.1)" : "transparent",
                  color: gTab === t.key ? T : "rgba(255,255,255,0.7)",
                  fontSize: isMobile ? 12 : 13, fontWeight: 600, cursor: "pointer"
                }}>{t.label}</button>
              ))}
            </div>

            {gTab === "int" && (
              <div style={{
                display: "grid",
                gridTemplateColumns: getGridColumns(1, 2, 3),
                gap: isMobile ? 16 : isTablet ? 20 : 24
              }}>
                {INT_OFFICES.map((o, i) => (
                  <div key={i} style={{
                    background: "rgba(0,201,167,0.05)", border: `1px solid ${T}20`,
                    borderRadius: 20, padding: isMobile ? 16 : 20
                  }}>
                    <div style={{ fontSize: isMobile ? 28 : 32, marginBottom: 8 }}>{o.flag}</div>
                    <h3 style={{ fontSize: isMobile ? 14 : 16, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{o.city}</h3>
                    <p style={{ color: T, fontSize: isMobile ? 10 : 11, marginBottom: 8 }}>{o.tz}</p>
                    <a href={`tel:${o.phone}`} style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: isMobile ? 12 : 13, marginBottom: 4, textDecoration: "none" }}>📞 {o.phone}</a>
                    <a href={`mailto:${o.email}`} style={{ color: T, fontSize: isMobile ? 12 : 13, textDecoration: "none" }}>✉️ {o.email}</a>
                  </div>
                ))}
              </div>
            )}

            {gTab === "india" && (
              <div style={{
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: 20, padding: isMobile ? 16 : 20
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
                  <span style={{ fontSize: isMobile ? 28 : 32 }}>🇮🇳</span>
                  <h3 style={{ fontSize: isMobile ? 14 : 18, fontWeight: 700, color: "#fff" }}>Nakshatra Namaha Creations Pvt. Ltd.</h3>
                </div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                  gap: isMobile ? 12 : 16
                }}>
                  {INDIA_OFFICES.map((o, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 16 }}>🇮🇳</span>
                      <div>
                        <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 600, color: "#fff", margin: 0 }}>{o.city}</p>
                        {o.phone && <p style={{ fontSize: isMobile ? 11 : 12, color: T, margin: "2px 0 0" }}>{o.phone}</p>}
                        <p style={{ fontSize: isMobile ? 9 : 11, color: "rgba(255,255,255,0.4)", margin: 0 }}>{o.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* FAQs */}
          <div style={{ marginBottom: isMobile ? 40 : 60 }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 24 }}>
              <SectionBadge label="FAQs" />
              <SectionH2>Frequently Asked <GradText>Questions</GradText></SectionH2>
            </div>

            <div style={{ maxWidth: 800, margin: "0 auto" }}>
              {FAQS.map((item, i) => (
                <div key={i} style={{
                  marginBottom: 12, border: `1px solid ${faq === i ? T : "rgba(255,255,255,0.05)"}`,
                  borderRadius: 16, background: faq === i ? "rgba(0,201,167,0.05)" : "rgba(255,255,255,0.02)",
                  overflow: "hidden"
                }}>
                  <button onClick={() => setFaq(faq === i ? null : i)} style={{
                    width: "100%", padding: isMobile ? "12px 16px" : "16px 20px",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    background: "transparent", border: "none", color: "#fff",
                    fontSize: isMobile ? 13 : 14, fontWeight: 600, textAlign: "left", cursor: "pointer"
                  }}>
                    <span>{item.q}</span>
                    <span style={{ color: T, fontSize: isMobile ? 18 : 20 }}>{faq === i ? "−" : "+"}</span>
                  </button>
                  {faq === i && (
                    <div style={{ padding: isMobile ? "0 16px 16px 16px" : "0 20px 20px 20px" }}>
                      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 12 : 13, lineHeight: 1.6, margin: 0 }}>{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Form */}
          <div style={{
            background: `linear-gradient(135deg, ${T}10, #8B5CF610)`,
            border: `1px solid ${T}30`, borderRadius: 32,
            padding: isMobile ? "24px 16px" : isTablet ? "28px 20px" : "32px 24px",
            textAlign: "center"
          }}>
            <SectionBadge label="Get Started" />
            <SectionH2>Ready to Build Your <GradText>Professional Services Solution?</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 13 : 14, marginBottom: 20 }}>
              Tell us about your project. We'll respond within 24 hours with a free consultation.
            </p>

            {cSubmitted ? (
              <div style={{ padding: "20px 0" }}>
                <div style={{ fontSize: isMobile ? 40 : 48, marginBottom: 16 }}>⚖️</div>
                <h4 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, marginBottom: 8 }}>Message Sent!</h4>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 13 : 14, marginBottom: 20 }}>
                  A professional services specialist will contact you within 24 hours.
                </p>
                <button onClick={() => { setCSubmitted(false); setCForm({ name: "", phone: "", dialCode: "+1", email: "", project: "" }); }} style={{
                  padding: "8px 16px", borderRadius: 100, border: "none",
                  background: T, color: "#000", fontWeight: 600, fontSize: isMobile ? 13 : 14, cursor: "pointer"
                }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleCSubmit} style={{ maxWidth: 500, margin: "0 auto" }}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: 12,
                  marginBottom: 12
                }}>
                  <input style={iSLg} placeholder="Full Name *" required value={cForm.name} onChange={e => setCF("name", e.target.value)} />
                  <div style={{ display: "flex", gap: 8, flexDirection: isMobile ? "column" : "row" }}>
                    <select style={{ ...iSLg, width: isMobile ? "100%" : 100 }} value={cForm.dialCode} onChange={e => setCF("dialCode", e.target.value)}>
                      {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                    </select>
                    <input style={{ ...iSLg, flex: 1 }} type="tel" placeholder="Phone" value={cForm.phone} onChange={e => setCF("phone", e.target.value)} />
                  </div>
                </div>
                <input style={{ ...iSLg, marginBottom: 12 }} type="email" placeholder="Business Email *" required value={cForm.email} onChange={e => setCF("email", e.target.value)} />
                <textarea style={{ ...iSLg, minHeight: isMobile ? 80 : 100, marginBottom: 16, resize: "vertical" }} placeholder="Project Description" value={cForm.project} onChange={e => setCF("project", e.target.value)} />
                <button type="submit" disabled={cLoading} style={{
                  width: "100%", padding: "12px", borderRadius: 100, border: "none",
                  background: cLoading ? T + "80" : `linear-gradient(135deg, ${T}, ${TD})`,
                  color: "#000", fontWeight: 700, fontSize: isMobile ? 14 : 15, cursor: cLoading ? "wait" : "pointer"
                }}>
                  {cLoading ? "Sending..." : "Submit — Free Consultation"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:.4} 50%{opacity:.8} }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      `}</style>

    </>
  );
}