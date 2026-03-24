"use client";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

// ─── EmailJS Config ────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_pklyrv6";
const EMAILJS_TEMPLATE_ID = "template_de6srqh";
const EMAILJS_PUBLIC_KEY = "oY8s46fogw6l5q1b4";

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
const LOGOS = ["clients1.png", "clients2.png", "clients3.png", "clients4.png", "clients5.png",
  "clients6.png", "clients7.png", "clients8.png", "clients9.png", "clients10.png", "clients11.png",
  "clients12.png", "clients13.png", "clients14.png", "clients15.png", "clients16.png", "clients17.png", "clients18.png"];

const SUCCESS_STORIES = [
  { id: 1, icon: "⚖️", title: "38% Faster Matter Resolution for Toronto Law Firm", description: "A mid-sized law firm implemented our matter management CRM with document automation and client portal, reducing admin time.", metrics: [{ label: "Resolution", value: "-38%" }, { label: "Billable Hours", value: "+24%" }, { label: "Client Satisfaction", value: "4.9★" }], tags: ["Legal", "CRM", "Canada"] },
  { id: 2, icon: "📊", title: "52% Faster Client Onboarding for NYC Consultancy", description: "A management consultancy automated their KYC/AML workflows and client onboarding, cutting intake time by more than half.", metrics: [{ label: "Onboarding", value: "-52%" }, { label: "Errors", value: "-89%" }, { label: "Pipeline", value: "+43%" }], tags: ["Consulting", "Automation", "USA"] },
  { id: 3, icon: "💰", title: "2.3× Billable Utilization for London Accountancy", description: "Time & billing integration with practice management software increased billable utilization across the firm.", metrics: [{ label: "Utilization", value: "2.3×" }, { label: "Invoicing", value: "-67%" }, { label: "Cash Flow", value: "+34%" }], tags: ["Accountancy", "Billing", "UK"] },
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
  { icon: "📊", title: "Partner Performance Reporting", desc: "Real-time dashboards for billable hours, realization rates, and pipeline health by partner." },
];

const COMPLIANCE = [
  { region: "AML/KYC", flag: "🔍", title: "AML/KYC Compliance", desc: "Built-in KYC and AML workflow support for law firms, accountancies, and financial services in Canada, USA and UK." },
  { region: "Data Protection", flag: "🔒", title: "GDPR & PIPEDA", desc: "Client data handled to GDPR (UK/EU) and PIPEDA (Canada) standards across all modules with consent management." },
  { region: "Regulatory", flag: "⚖️", title: "SRA & Law Society Standards", desc: "Document and matter management aligned with SRA (UK) and Law Society (Canada) regulatory requirements." },
];

const FAQS = [
  { q: "How long does a professional services CRM implementation take?", a: "A focused professional services CRM typically takes 8-14 weeks. This includes client onboarding automation, matter/project management setup, and integration with existing practice management or accounting systems. For law firms, we ensure SRA/Law Society compliance; for accountancies, we align with KYC/AML requirements." },
  { q: "Can you integrate with our existing practice management or accounting software?", a: "Yes. We specialize in integrating CRMs with professional services tools including Clio, Xero, QuickBooks, Thomson Reuters, and custom practice management systems. Integration covers time tracking, billing, client data sync, and document management — eliminating double-entry and ensuring accurate financial data." },
  { q: "What does a professional services CRM cost in Canada or the UK?", a: "A comprehensive CRM for professional services starts from CAD $22,000–$38,000 / £16,000–£28,000. This includes client onboarding, matter management, document management, and basic reporting. Enterprise solutions with KYC/AML automation, client portals, and partner dashboards range from CAD $40,000–$75,000 / £30,000–£55,000. All quotes fixed-price with milestone billing." },
  { q: "Do you offer client portals and e-signatures?", a: "Yes. We build secure client portals where clients can access documents, track matter progress, and communicate with your team. Integrated e-signature workflows (using platforms like DocuSign or custom solutions) allow for seamless signing of engagement letters, contracts, and deliverables — all tracked in the CRM." },
];

const WCU_POINTS = [
  { icon: "⚖️", text: "8+ years of professional services expertise" },
  { icon: "🌍", text: "Serving Canada, USA & UK markets" },
  { icon: "⚡", text: "565+ projects delivered globally" },
  { icon: "🔗", text: "Practice management integration specialists" },
  { icon: "🤝", text: "Dedicated client teams in your time zone" },
  { icon: "📱", text: "Full-stack: Web, Mobile, CRM, Portals" },
];

const WCU_STATS = [
  { n: 8, s: "+", l: "Years" },
  { n: 565, s: "+", l: "Projects" },
  { n: 100, s: "+", l: "Team" },
  { n: 40, s: "+", l: "Professional Services Clients" },
];

const PROFESSIONAL_STATS = [
  { value: "38%", label: "Faster Resolution", icon: "⚡" },
  { value: "52%", label: "Faster Onboarding", icon: "🚀" },
  { value: "2.3×", label: "Billable Utilization", icon: "💰" },
  { value: "99%", label: "Data Accuracy", icon: "✅" },
];

const INT_OFFICES = [
  { flag: "🇨🇦", city: "Toronto, Canada", phone: "+91 9900566466", email: "professional@nncdigital.com", tz: "EST / EDT" },
  { flag: "🇺🇸", city: "New York, USA", phone: "+91 9900566466", email: "professional@nncdigital.com", tz: "EST / EDT" },
  { flag: "🇬🇧", city: "London, UK", phone: "+91 9900566466", email: "professional@nncdigital.com", tz: "GMT / BST" },
];

const INDIA_OFFICES = [
  { city: "Bangalore (HQ)", phone: "+91 9900566466", note: "Primary engineering hub" },
  { city: "Mysore", phone: "+91 9900566466", note: "Design & QA" },
  { city: "Mumbai", phone: "+91 9900566466", note: "Sales & partnerships" },
  { city: "Hyderabad", phone: "+91 9900566466", note: "Mobile & cloud" },
];

const SERVICES_LIST = [
  "Client CRM", "Matter Management", "Onboarding Automation",
  "Document Management", "Client Portal", "KYC/AML", "Other",
];

const DIAL_CODES = [
  { code: "+1", flag: "🇨🇦" },
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+91", flag: "🇮🇳" },
];

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
function buildParams(data: { firstName: string; lastName: string; email: string; phone: string; service: string; message: string; title: string }) {
  return {
    first_name: data.firstName,
    last_name: data.lastName || "—",
    email: data.email,
    phone: data.phone,
    service: data.service || "Not specified",
    message: data.message,
    submission_time: new Date().toLocaleString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
    name: `${data.firstName} ${data.lastName}`.trim(),
    title: data.title,
    reply_to: data.email,
  };
}

// ─── Inline field error ────────────────────────────────────────────────────────
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

// ─── Helper Components ────────────────────────────────────────────────────────
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
      pts.forEach(p => { p.x += p.vx; p.y += p.vy; if (p.x < 0) p.x = W; if (p.x > W) p.x = 0; if (p.y < 0) p.y = H; if (p.y > H) p.y = 0; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(0,201,167,${p.a})`; ctx.fill(); });
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) { const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy); if (d < 90) { ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.strokeStyle = `rgba(0,201,167,${.06 * (1 - d / 90)})`; ctx.lineWidth = .5; ctx.stroke(); } }
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

function SectionBadge({ label }: { label: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.22)", borderRadius: 100, padding: "6px 18px", marginBottom: 16 }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: T, display: "block", boxShadow: `0 0 8px ${T}` }} />
      <span style={{ color: T, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>{label}</span>
    </div>
  );
}

function SectionH2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: "clamp(24px,5vw,40px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 14 }}>{children}</h2>;
}

function GradText({ children }: { children: React.ReactNode }) {
  return <span style={{ background: `linear-gradient(135deg,${T},#1fd1b5)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{children}</span>;
}

function StatsDashboard() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  return (
    <div style={{ background: `linear-gradient(135deg,${N2} 0%,${N1} 100%)`, borderRadius: 24, padding: "clamp(20px,4vw,32px)", border: `1px solid ${T}30`, boxShadow: "0 20px 40px rgba(0,0,0,0.4)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-50%", right: "-20%", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle,${T}20 0%,transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "clamp(12px,3vw,24px)", marginBottom: "clamp(16px,3vw,24px)" }}>
        {PROFESSIONAL_STATS.map((stat, i) => (
          <div key={i} onMouseEnter={() => setHoveredStat(i)} onMouseLeave={() => setHoveredStat(null)} style={{ background: hoveredStat === i ? "rgba(0,201,167,0.15)" : "rgba(255,255,255,0.03)", border: `1px solid ${hoveredStat === i ? T : "rgba(255,255,255,0.05)"}`, borderRadius: 16, padding: "clamp(12px,2.5vw,20px) clamp(8px,2vw,16px)", textAlign: "center", transition: "all 0.3s ease", transform: hoveredStat === i ? "translateY(-4px)" : "none", cursor: "default" }}>
            <div style={{ fontSize: "clamp(24px,4vw,32px)", marginBottom: 8 }}>{stat.icon}</div>
            <div style={{ fontSize: "clamp(18px,3.5vw,28px)", fontWeight: 900, color: T, marginBottom: 4 }}>{stat.value}</div>
            <div style={{ fontSize: "clamp(11px,2vw,13px)", color: "rgba(255,255,255,0.6)" }}>{stat.label}</div>
          </div>
        ))}
      </div>
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 16, padding: "clamp(12px,2.5vw,20px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
          <span style={{ fontSize: "clamp(20px,3vw,24px)" }}>📊</span>
          <span style={{ color: T, fontSize: "clamp(12px,2vw,14px)", fontWeight: 700 }}>PRACTICE METRICS</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(8px,2vw,12px)" }}>
          {[{ label: "Billable Utilization Rate", val: "78%", w: "78%" }, { label: "Realization Rate", val: "92%", w: "92%" }, { label: "Client Retention Rate", val: "94%", w: "94%" }].map((row, i) => (
            <div key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, flexWrap: "wrap", gap: 4 }}>
                <span style={{ fontSize: "clamp(11px,2vw,12px)", color: "rgba(255,255,255,0.5)" }}>{row.label}</span>
                <span style={{ fontSize: "clamp(11px,2vw,12px)", color: T, fontWeight: 600 }}>{row.val}</span>
              </div>
              <div style={{ height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 3 }}>
                <div style={{ width: row.w, height: "100%", background: T, borderRadius: 3 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "clamp(12px,2.5vw,20px)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
        <span style={{ fontSize: "clamp(11px,2vw,12px)", color: "rgba(255,255,255,0.5)" }}>Practice connected · Live data</span>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ProfessionalServicesIndustryPage() {
  const [windowWidth, setWindowWidth] = useState(0);

  // ── Hero Form state ──────────────────────────────────────────────────────────
  const [hForm, setHForm] = useState({ name: "", phone: "", dialCode: "+1", email: "", service: "", message: "" });
  const [hErr, setHErr] = useState({ name: "", phone: "", email: "", message: "" });
  const [hTouched, setHTouched] = useState({ name: false, phone: false, email: false, message: false });
  const [hSubmitted, setHSubmitted] = useState(false);
  const [hLoading, setHLoading] = useState(false);

  // ── CTA Form state ───────────────────────────────────────────────────────────
  const [cForm, setCForm] = useState({ name: "", phone: "", dialCode: "+1", email: "", project: "" });
  const [cErr, setCErr] = useState({ name: "", phone: "", email: "", project: "" });
  const [cTouched, setCTouched] = useState({ name: false, phone: false, email: false, project: false });
  const [cSubmitted, setCSubmitted] = useState(false);
  const [cLoading, setCLoading] = useState(false);

  const [story, setStory] = useState(0);
  const [faq, setFaq] = useState<number | null>(0);
  const [gTab, setGTab] = useState<"int" | "india">("int");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Init EmailJS
  useEffect(() => { emailjs.init(EMAILJS_PUBLIC_KEY); }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const h = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  const isMobile = windowWidth <= 640;
  const isTablet = windowWidth > 640 && windowWidth <= 1024;

  // ── Hero Form validation & submit ────────────────────────────────────────────
  // ── Hero Form validation & submit ────────────────────────────────────────────
  const hRunValidate = (k: string, v: string) => {
    const msgs: Record<string, string> = { name: vName(v), phone: vPhone(v, hForm.dialCode), email: vEmail(v), message: vMsg(v) };
    if (k in msgs) { setHErr(p => ({ ...p, [k]: msgs[k] })); return !msgs[k]; }
    return true;
  };

  // Hero Form setH with filtering (KEEP THIS ONE)
  const setH = (k: string, v: string) => {
    let value = v;

    // STRICT INPUT FILTERING
    if (k === "name") {
      value = value.replace(/[^A-Za-z\s]/g, '');
      value = value.replace(/\s+/g, ' ');
      if (value.startsWith(' ')) value = value.trimStart();
      if (value.length > 60) value = value.slice(0, 60);
    }
    else if (k === "phone") {
      value = value.replace(/[^\d]/g, '');
      let maxLength = 10;
      if (hForm.dialCode === "+44") maxLength = 11;
      if (value.length > maxLength) value = value.slice(0, maxLength);
    }

    setHForm(f => ({ ...f, [k]: value }));
    if (hTouched[k as keyof typeof hTouched]) hRunValidate(k, value);
  };

  const hBlur = (k: string) => () => {
    setHTouched(p => ({ ...p, [k]: true }));
    hRunValidate(k, hForm[k as keyof typeof hForm] as string);
  };

  const hValidateAll = () => {
    setHTouched({ name: true, phone: true, email: true, message: true });
    const e = { name: vName(hForm.name), phone: vPhone(hForm.phone, hForm.dialCode), email: vEmail(hForm.email), message: vMsg(hForm.message) };
    setHErr(e);
    return Object.values(e).every(v => !v);
  };

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hValidateAll()) return;
    setHLoading(true);
    try {
      const parts = hForm.name.trim().split(" ");
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, buildParams({
        firstName: parts[0],
        lastName: parts.slice(1).join(" "),
        email: hForm.email,
        phone: `${hForm.dialCode} ${hForm.phone}`,
        service: hForm.service,
        message: hForm.message,
        title: `New Professional Services Enquiry from ${hForm.name}`
      }));
      setHSubmitted(true);
      setHForm({ name: "", phone: "", dialCode: "+1", email: "", service: "", message: "" });
      setHTouched({ name: false, phone: false, email: false, message: false });
      setHErr({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS hero:", err);
      alert("Failed to send. Please try again.");
    } finally {
      setHLoading(false);
    }
  };

  // ── CTA Form validation & submit ─────────────────────────────────────────────
  const cRunValidate = (k: string, v: string) => {
    const msgs: Record<string, string> = { name: vName(v), phone: vPhone(v, cForm.dialCode), email: vEmail(v), project: vMsg(v) };
    if (k in msgs) { setCErr(p => ({ ...p, [k]: msgs[k] })); return !msgs[k]; }
    return true;
  };

  // CTA Form setC with filtering (KEEP THIS ONE)
  const setC = (k: string, v: string) => {
    let value = v;

    // STRICT INPUT FILTERING
    if (k === "name") {
      value = value.replace(/[^A-Za-z\s]/g, '');
      value = value.replace(/\s+/g, ' ');
      if (value.startsWith(' ')) value = value.trimStart();
      if (value.length > 60) value = value.slice(0, 60);
    }
    else if (k === "phone") {
      value = value.replace(/[^\d]/g, '');
      let maxLength = 10;
      if (cForm.dialCode === "+44") maxLength = 11;
      if (value.length > maxLength) value = value.slice(0, maxLength);
    }

    setCForm(f => ({ ...f, [k]: value }));
    if (cTouched[k as keyof typeof cTouched]) cRunValidate(k, value);
  };

  const cBlur = (k: string) => () => {
    setCTouched(p => ({ ...p, [k]: true }));
    cRunValidate(k, cForm[k as keyof typeof cForm] as string);
  };

  const cValidateAll = () => {
    setCTouched({ name: true, phone: true, email: true, project: true });
    const e = { name: vName(cForm.name), phone: vPhone(cForm.phone, cForm.dialCode), email: vEmail(cForm.email), project: vMsg(cForm.project) };
    setCErr(e);
    return Object.values(e).every(v => !v);
  };

  const handleCSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cValidateAll()) return;
    setCLoading(true);
    try {
      const parts = cForm.name.trim().split(" ");
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, buildParams({
        firstName: parts[0],
        lastName: parts.slice(1).join(" "),
        email: cForm.email,
        phone: `${cForm.dialCode} ${cForm.phone}`,
        service: "Professional Services CTA",
        message: cForm.project,
        title: `New Professional Services CTA from ${cForm.name}`
      }));
      setCSubmitted(true);
      setCForm({ name: "", phone: "", dialCode: "+1", email: "", project: "" });
      setCTouched({ name: false, phone: false, email: false, project: false });
      setCErr({ name: "", phone: "", email: "", project: "" });
    } catch (err) {
      console.error("EmailJS CTA:", err);
      alert("Failed to send. Please try again.");
    } finally {
      setCLoading(false);
    }
  };

  const getSP = () => isMobile ? "20px 16px" : isTablet ? "60px 32px" : "50px 48px";
  const getGrid = (m: number, t: number, d: number) => isMobile ? `repeat(${m},1fr)` : isTablet ? `repeat(${t},1fr)` : `repeat(${d},1fr)`;

  const iS: React.CSSProperties = { width: "100%", padding: isMobile ? "10px 12px" : "12px 16px", borderRadius: 10, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", color: "#fff", fontSize: isMobile ? 13 : 14, fontFamily: "'Poppins',sans-serif", outline: "none", transition: "all 0.3s ease" };
  const iSE: React.CSSProperties = { ...iS, borderColor: "#ff4444", background: "rgba(255,68,68,.08)" };
  const iSLg: React.CSSProperties = { ...iS, padding: isMobile ? "12px 14px" : "14px 18px", fontSize: isMobile ? 14 : 15 };
  const iSLgE: React.CSSProperties = { ...iSLg, borderColor: "#ff4444", background: "rgba(255,68,68,.08)" };
  const taLg: React.CSSProperties = { ...iSLg, minHeight: isMobile ? 80 : 100, resize: "vertical" as const };
  const taLgE: React.CSSProperties = { ...taLg, borderColor: "#ff4444", background: "rgba(255,68,68,.08)" };

  return (
    <>
      <Navbar />

      {/* ══ MODULE 1 — HERO + INLINE FORM ═════════════════════════════════════ */}
      <section style={{ padding: isMobile ? "40px 16px 40px" : isTablet ? "80px 32px 60px" : "90px 48px 80px", background: `linear-gradient(135deg,${N0} 0%,#041628 50%,${N0} 100%)`, position: "relative", overflow: "hidden", minHeight: isMobile ? "auto" : "90vh", display: "flex", alignItems: "center" }}>
        <Particles />
        {!isMobile && (
          <>
            <div style={{ position: "absolute", width: isTablet ? 500 : 650, height: isTablet ? 500 : 650, borderRadius: "50%", background: `radial-gradient(circle,${T}18 0%,transparent 65%)`, top: "40%", left: "-10%", transform: "translateY(-50%)", animation: "pulse 8s ease-in-out infinite", pointerEvents: "none", zIndex: 1 }} />
            <div style={{ position: "absolute", width: isTablet ? 300 : 400, height: isTablet ? 300 : 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 65%)", top: "10%", right: "5%", animation: "pulse 10s ease-in-out infinite", pointerEvents: "none", zIndex: 1 }} />
          </>
        )}

        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : isTablet ? 40 : 60, alignItems: "center", position: "relative", zIndex: 3 }}>
          {/* Left — Hero Text */}
          <div>
            <SectionBadge label="Professional Services Technology" />
            <h1 style={{ fontSize: isMobile ? "clamp(24px,7vw,28px)" : isTablet ? "clamp(28px,4vw,32px)" : "clamp(36px,4vw,48px)", fontWeight: 900, lineHeight: 1.2, marginBottom: isMobile ? 16 : 20, color: "#fff" }}>
              Digital Systems for <GradText>Professional Services Firms</GradText> in Canada, USA & UK
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 14 : isTablet ? 15 : 16, lineHeight: 1.8, marginBottom: isMobile ? 24 : 32, maxWidth: isMobile ? "100%" : 540 }}>
              Law firms, accountancies, consultancies, and agencies share a common challenge: managing complex client relationships, billable time, project delivery, and business development simultaneously.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: isMobile ? 20 : 32 }}>
              {[{ icon: "⚖️", label: "Legal" }, { icon: "📊", label: "Consulting" }, { icon: "💰", label: "Accountancy" }, { icon: "🎯", label: "Agencies" }].map((b, i) => (
                <span key={i} style={{ padding: isMobile ? "4px 8px" : "6px 12px", borderRadius: 100, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.8)", fontSize: isMobile ? 11 : 12, fontWeight: 500, display: "flex", alignItems: "center", gap: 4 }}>
                  <span>{b.icon}</span> {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Hero Form with EmailJS */}
          <div style={{ background: "rgba(8,20,40,0.85)", border: `1px solid ${T}30`, borderRadius: 24, padding: isMobile ? "20px 16px" : isTablet ? "24px 20px" : "28px 24px", backdropFilter: "blur(16px)", boxShadow: "0 32px 64px rgba(0,0,0,0.5)" }}>
            <h3 style={{ fontSize: isMobile ? 18 : isTablet ? 20 : 22, fontWeight: 700, marginBottom: isMobile ? 16 : 20 }}>
              Get a Free <span style={{ color: T }}>Consultation</span>
            </h3>
            {hSubmitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: isMobile ? 40 : 48, marginBottom: 16 }}>⚖️</div>
                <h4 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, marginBottom: 8 }}>Request Received!</h4>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 13 : 14, marginBottom: 20 }}>A professional services specialist will contact you within 24 hours.</p>
                <button onClick={() => setHSubmitted(false)} style={{ padding: "8px 16px", borderRadius: 100, border: "none", background: T, color: "#000", fontWeight: 600, fontSize: isMobile ? 13 : 14, cursor: "pointer" }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleHeroSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 12 }}>
                <div>
                  <input className="fi" style={hTouched.name && hErr.name ? iSE : iS} placeholder="Full Name *" value={hForm.name} onChange={e => setH("name", e.target.value)} onBlur={hBlur("name")} />
                  {hTouched.name && <FieldErr msg={hErr.name} />}
                </div>
                <div>
                  <div style={{ display: "flex", gap: 8, flexDirection: isMobile ? "column" : "row" }}>
                    <select className="fi" style={{ ...iS, width: isMobile ? "100%" : 100 }} value={hForm.dialCode} onChange={e => setH("dialCode", e.target.value)}>
                      {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                    </select>
                    <input className="fi" type="tel" style={hTouched.phone && hErr.phone ? { ...iSE, flex: 1 } : { ...iS, flex: 1 }} placeholder="Phone Number *" value={hForm.phone} onChange={e => setH("phone", e.target.value)} onBlur={hBlur("phone")} />
                  </div>
                  {hTouched.phone && <FieldErr msg={hErr.phone} />}
                </div>
                <div>
                  <input className="fi" type="email" style={hTouched.email && hErr.email ? iSE : iS} placeholder="Business Email *" value={hForm.email} onChange={e => setH("email", e.target.value)} onBlur={hBlur("email")} />
                  {hTouched.email && <FieldErr msg={hErr.email} />}
                </div>
                <select className="fi" style={iS} value={hForm.service} onChange={e => setH("service", e.target.value)}>
                  <option value="">Service of Interest</option>
                  {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <div>
                  <textarea className="fi" style={{ ...(hTouched.message && hErr.message ? iSE : iS), minHeight: isMobile ? 60 : 80, resize: "vertical" as const }} placeholder="Message *" value={hForm.message} onChange={e => setH("message", e.target.value)} onBlur={hBlur("message")} />
                  {hTouched.message && <FieldErr msg={hErr.message} />}
                </div>
                <button type="submit" disabled={hLoading} style={{ width: "100%", padding: "12px", borderRadius: 100, border: "none", background: hLoading ? T + "80" : `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: isMobile ? 14 : 15, cursor: hLoading ? "wait" : "pointer", opacity: hLoading ? 0.7 : 1 }}>
                  {hLoading ? "Sending…" : "Get Free Consultation →"}
                </button>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: isMobile ? 10 : 11, textAlign: "center" }}>🔒 No spam. Ever.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ══ MODULE 2 — CLIENTS + SUCCESS STORIES ══════════════════════════════ */}
      <section style={{ padding: getSP(), background: N1 }}>
        {/* Logos */}
        <div style={{ textAlign: "center", marginBottom: isMobile ? 30 : 40, padding: "0 24px" }}>
          <p style={{ fontWeight: 600, fontSize: isMobile ? 10 : 11.5, color: "rgba(255,255,255,.28)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>Our Happy Clients</p>
          <h2 style={{ fontSize: isMobile ? "22px" : "28px", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.25, margin: 0 }}>
            Trusted by Businesses Across <GradText>North America &amp; the UK</GradText>
          </h2>
        </div>

        {/* Row 1 */}
        <div style={{ overflow: "hidden", marginBottom: isMobile ? 16 : 20 }}>
          <div className="cl-track" style={{ animation: "marquee 30s linear infinite" }}>
            {[...LOGOS.slice(0, 6), ...LOGOS.slice(0, 6)].map((logo, i) => (
              <div key={i} style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", height: isMobile ? 60 : 70, padding: isMobile ? "8px 14px" : "10px 18px", background: "#fff", borderRadius: 10, margin: "0 8px", boxShadow: "0 6px 20px rgba(0,0,0,0.15)", opacity: .9, transition: "transform .3s,box-shadow .3s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "scale(1.08)"; el.style.boxShadow = "0 10px 28px rgba(0,0,0,0.25)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)"; }}>
                <img src={`/${logo}`} alt="" style={{ height: isMobile ? 30 : 40, width: "auto", maxWidth: isMobile ? 90 : 120, objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div style={{ overflow: "hidden", marginBottom: isMobile ? 16 : 20 }}>
          <div className="cl-track" style={{ animation: "marqueeReverse 35s linear infinite" }}>
            {[...LOGOS.slice(6, 12), ...LOGOS.slice(6, 12)].map((logo, i) => (
              <div key={i} style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", height: isMobile ? 60 : 70, padding: isMobile ? "8px 14px" : "10px 18px", background: "#fff", borderRadius: 10, margin: "0 8px", boxShadow: "0 6px 20px rgba(0,0,0,0.15)", opacity: .9, transition: "transform .3s,box-shadow .3s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "scale(1.08)"; el.style.boxShadow = "0 10px 28px rgba(0,0,0,0.25)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)"; }}>
                <img src={`/${logo}`} alt="" style={{ height: isMobile ? 30 : 40, width: "auto", maxWidth: isMobile ? 90 : 120, objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div style={{ overflow: "hidden" }}>
          <div className="cl-track" style={{ animation: "marquee 40s linear infinite" }}>
            {[...LOGOS.slice(12, 18), ...LOGOS.slice(12, 18)].map((logo, i) => (
              <div key={i} style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", height: isMobile ? 60 : 70, padding: isMobile ? "8px 14px" : "10px 18px", background: "#fff", borderRadius: 10, margin: "0 8px", boxShadow: "0 6px 20px rgba(0,0,0,0.15)", opacity: .9, transition: "transform .3s,box-shadow .3s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "scale(1.08)"; el.style.boxShadow = "0 10px 28px rgba(0,0,0,0.25)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)"; }}>
                <img src={`/${logo}`} alt="" style={{ height: isMobile ? 30 : 40, width: "auto", maxWidth: isMobile ? 90 : 120, objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: getSP(), background: N1 }}>

        {/* Success Stories */}
        <div>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 24 }}>
            <SectionBadge label="Success Stories" />
            <SectionH2>Professional Services <GradText>Success Stories</GradText></SectionH2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: getGrid(1, 2, 3), gap: isMobile ? 16 : isTablet ? 20 : 24 }}>
            {SUCCESS_STORIES.map((s, i) => (
              <div key={i} onMouseEnter={() => setHoveredCard(i)} onMouseLeave={() => setHoveredCard(null)} style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${hoveredCard === i ? T : "rgba(255,255,255,0.05)"}`, borderRadius: 24, padding: isMobile ? 16 : 20, transition: "all 0.3s ease", transform: hoveredCard === i && !isMobile ? "translateY(-4px)" : "none" }}>
                <div style={{ fontSize: isMobile ? 40 : 48, marginBottom: isMobile ? 12 : 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: isMobile ? 14 : 16, fontWeight: 700, color: T, marginBottom: isMobile ? 8 : 12 }}>{s.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 12 : 14, lineHeight: 1.6, marginBottom: isMobile ? 16 : 20 }}>{s.description}</p>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: isMobile ? 12 : 16 }}>
                  {s.metrics.map((m, j) => (<div key={j} style={{ textAlign: "center" }}><div style={{ color: T, fontSize: isMobile ? 14 : 18, fontWeight: 700 }}>{m.value}</div><div style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? 9 : 11 }}>{m.label}</div></div>))}
                </div>
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                  {s.tags.map((tag, j) => (<span key={j} style={{ padding: "4px 8px", borderRadius: 100, background: "rgba(0,201,167,0.1)", border: `1px solid ${T}30`, color: T, fontSize: isMobile ? 9 : 11, fontWeight: 600 }}>{tag}</span>))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: isMobile ? 16 : 20 }}>
            {SUCCESS_STORIES.map((_, i) => (<button key={i} onClick={() => setStory(i)} style={{ width: story === i ? 24 : 8, height: 8, borderRadius: 100, background: story === i ? T : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer" }} />))}
          </div>
        </div>
      </section>

      {/* ══ MODULE 3 — SOLUTIONS ══════════════════════════════════════════════ */}
      <section style={{ padding: getSP(), background: N2 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 24 }}>
            <SectionBadge label="What We Build" />
            <SectionH2>Professional Services <GradText>Digital Solutions</GradText> We Build</SectionH2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: getGrid(1, 2, 3), gap: isMobile ? 16 : isTablet ? 20 : 24 }}>
            {SOLUTIONS.map((s, i) => (
              <div key={i} onMouseEnter={() => setHoveredCard(i + 10)} onMouseLeave={() => setHoveredCard(null)} style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${hoveredCard === i + 10 ? T : "rgba(255,255,255,0.05)"}`, borderRadius: 20, padding: isMobile ? 16 : 20, transition: "all 0.3s ease", transform: hoveredCard === i + 10 && !isMobile ? "translateY(-4px)" : "none" }}>
                <div style={{ fontSize: isMobile ? 28 : 36, marginBottom: isMobile ? 12 : 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: isMobile ? 14 : 16, fontWeight: 700, color: "#fff", marginBottom: isMobile ? 6 : 8 }}>{s.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 12 : 13, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MODULE 4 — COMPLIANCE ════════════════════════════════════════════ */}
      <section style={{ padding: getSP(), background: `linear-gradient(135deg,${N1} 0%,${N0} 100%)` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 24 }}>
            <SectionBadge label="Compliance & Security" />
            <SectionH2>Built for <GradText>Regulatory Requirements</GradText> in Canada, USA & UK</SectionH2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: getGrid(1, 2, 3), gap: isMobile ? 16 : isTablet ? 20 : 24 }}>
            {COMPLIANCE.map((c, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 20, padding: isMobile ? 16 : 20, textAlign: "center" }}>
                <div style={{ fontSize: isMobile ? 40 : 48, marginBottom: isMobile ? 12 : 16 }}>{c.flag}</div>
                <h3 style={{ color: T, fontSize: isMobile ? 16 : 20, fontWeight: 700, marginBottom: 4 }}>{c.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: isMobile ? 13 : 14, marginBottom: 8 }}>{c.region}</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 12 : 13, lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MODULE 5 — WHY US | PRESENCE | FAQs | CTA ═════════════════════════ */}
      <section style={{ padding: getSP(), background: N1 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* Why Choose Us */}
          <div style={{ marginBottom: isMobile ? 40 : 60 }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 24 }}>
              <SectionBadge label="Why Choose Us" />
              <SectionH2>Your Trusted <GradText>Professional Services Technology</GradText> Partner</SectionH2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : isTablet ? 32 : 48, alignItems: "center" }}>
              <div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: isMobile ? 14 : 15, lineHeight: 1.7, marginBottom: 20 }}>
                  Backed by <strong style={{ color: T }}>Nakshatra Namaha Creations Pvt. Ltd.</strong> — 8+ years of experience, 565+ projects delivered. Dedicated client teams in Canada, USA, and UK. Practice management integration specialists.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                  {WCU_POINTS.map((p, i) => (<div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}><span style={{ fontSize: 16 }}>{p.icon}</span><span style={{ color: "rgba(255,255,255,0.8)", fontSize: isMobile ? 13 : 14 }}>{p.text}</span></div>))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: isMobile ? 8 : 12 }}>
                  {WCU_STATS.map((s, i) => (<div key={i} style={{ textAlign: "center", padding: isMobile ? "8px" : "0" }}><div style={{ fontSize: isMobile ? 16 : 22, fontWeight: 900, color: T }}><Counter to={s.n} sfx={s.s} /></div><div style={{ fontSize: isMobile ? 9 : 11, color: "rgba(255,255,255,0.4)" }}>{s.l}</div></div>))}
                </div>
              </div>
              <StatsDashboard />
            </div>
          </div>

          {/* Global Presence */}
          <div style={{ marginBottom: isMobile ? 40 : 60 }}>
            <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>
              <h2 style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 800, color: "#fff", textAlign: "center", margin: "0 0 20px", letterSpacing: "-0.02em" }}>
                Global <span style={{ background: `linear-gradient(135deg,${T},#fff)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Presence</span>
              </h2>
              <div style={{ width: 120, height: 4, background: `linear-gradient(90deg,transparent,${T},transparent)`, margin: "0 auto 40px", borderRadius: 2 }} />
              <div style={{ display: "flex", gap: isMobile ? 8 : 12, justifyContent: "center", marginBottom: isMobile ? 30 : 40, flexWrap: "wrap" }}>
                {[{ key: "int", label: "North America & UK", icon: "🌎" }, { key: "india", label: "India (HQ)", icon: "🇮🇳" }].map(t => (
                  <button key={t.key} onClick={() => setGTab(t.key as "int" | "india")} style={{ padding: isMobile ? "12px 24px" : "14px 32px", borderRadius: 50, border: "none", background: gTab === t.key ? `linear-gradient(135deg,${T},${TD})` : "rgba(255,255,255,0.05)", color: gTab === t.key ? "#000" : "#fff", fontSize: isMobile ? 14 : 16, fontWeight: 600, cursor: "pointer", transition: "all 0.3s ease", boxShadow: gTab === t.key ? `0 8px 20px ${T}40` : "none", display: "flex", alignItems: "center", gap: 8 }}
                    onMouseEnter={e => { if (gTab !== t.key) { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
                    onMouseLeave={e => { if (gTab !== t.key) { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateY(0)"; } }}>
                    <span>{t.icon}</span> {t.label}
                  </button>
                ))}
              </div>
              {[
                { tab: "int", items: [{ city: "Toronto, Canada", phone: "+91 9900566466", flag: "🇨🇦" }, { city: "New York, USA", phone: "+91 9900566466", flag: "🇺🇸" }, { city: "London, UK", phone: "+91 9900566466", flag: "🇬🇧" }], cardStyle: { background: "linear-gradient(145deg,rgba(255,255,255,.03),rgba(255,255,255,.01))", border: `1px solid ${T}20` } },
                { tab: "india", items: [{ city: "Bangalore HQ", phone: "+91 9900566466", flag: "🇮🇳" }, { city: "Mysore", phone: "+91 9900566466", flag: "🇮🇳" }, { city: "Mumbai", phone: "+91 9900566466", flag: "🇮🇳" }, { city: "Hyderabad", phone: "+91 9900566466", flag: "🇮🇳" }], cardStyle: { background: `linear-gradient(145deg,${T}05,${T}02)`, border: `1px solid ${T}30` } },
              ].map(panel => gTab === panel.tab && (
                <div key={panel.tab} style={{ ...panel.cardStyle, borderRadius: 24, padding: isMobile ? 24 : 36, backdropFilter: "blur(10px)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {panel.items.map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: 16, background: "rgba(255,255,255,.02)", borderRadius: 16, border: "1px solid rgba(255,255,255,.05)", transition: "all .3s ease", cursor: "default" }}
                        onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateX(8px)"; el.style.background = `${T}08`; el.style.borderColor = `${T}40`; }}
                        onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.background = "rgba(255,255,255,.02)"; el.style.borderColor = "rgba(255,255,255,.05)"; }}>
                        <div style={{ width: 48, height: 48, borderRadius: 14, background: `${T}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{item.flag}</div>
                        <div style={{ flex: 1 }}>
                          <p style={{ fontWeight: 600, fontSize: isMobile ? 15 : 16, color: "#fff", margin: 0, marginBottom: 4 }}>{item.city}</p>
                          <p style={{ color: T, fontSize: isMobile ? 14 : 15, fontWeight: 500, margin: 0 }}>📞 {item.phone}</p>
                        </div>
                      </div>
                    ))}
                    {panel.tab === "india" && (
                      <div style={{ marginTop: 8, padding: 20, background: `${T}08`, borderRadius: 16, border: `1px dashed ${T}40`, textAlign: "center" }}>
                        <span style={{ color: T, fontSize: isMobile ? 14 : 16, fontWeight: 600 }}>✉ info@nakshatranamahacreations.com</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div style={{ marginBottom: isMobile ? 40 : 60 }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 24 }}>
              <SectionBadge label="FAQs" />
              <SectionH2>Frequently Asked <GradText>Questions</GradText></SectionH2>
            </div>
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
              {FAQS.map((item, i) => (
                <div key={i} style={{ marginBottom: 12, border: `1px solid ${faq === i ? T : "rgba(255,255,255,0.05)"}`, borderRadius: 16, background: faq === i ? "rgba(0,201,167,0.05)" : "rgba(255,255,255,0.02)", overflow: "hidden" }}>
                  <button onClick={() => setFaq(faq === i ? null : i)} style={{ width: "100%", padding: isMobile ? "12px 16px" : "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "transparent", border: "none", color: "#fff", fontSize: isMobile ? 13 : 14, fontWeight: 600, textAlign: "left" as const, cursor: "pointer" }}>
                    <span>{item.q}</span>
                    <span style={{ color: T, fontSize: isMobile ? 18 : 20 }}>{faq === i ? "−" : "+"}</span>
                  </button>
                  {faq === i && (<div style={{ padding: isMobile ? "0 16px 16px 16px" : "0 20px 20px 20px" }}><p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 12 : 13, lineHeight: 1.6, margin: 0 }}>{item.a}</p></div>)}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Form with EmailJS */}
          <div style={{ background: `linear-gradient(135deg,${T}10,#8B5CF610)`, border: `1px solid ${T}30`, borderRadius: 32, padding: isMobile ? "24px 16px" : isTablet ? "28px 20px" : "32px 24px", textAlign: "center" }}>
            <SectionBadge label="Get Started" />
            <SectionH2>Ready to Build Your <GradText>Professional Services Solution?</GradText></SectionH2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 13 : 14, marginBottom: 20 }}>Tell us about your project. We'll respond within 24 hours with a free consultation.</p>

            {cSubmitted ? (
              <div style={{ padding: "20px 0" }}>
                <div style={{ fontSize: isMobile ? 40 : 48, marginBottom: 16 }}>⚖️</div>
                <h4 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, marginBottom: 8 }}>Message Sent!</h4>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 13 : 14, marginBottom: 20 }}>A professional services specialist will contact you within 24 hours.</p>
                <button onClick={() => setCSubmitted(false)} style={{ padding: "8px 16px", borderRadius: 100, border: "none", background: T, color: "#000", fontWeight: 600, fontSize: isMobile ? 13 : 14, cursor: "pointer" }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleCSubmit} noValidate style={{ maxWidth: 500, margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12, marginBottom: 12 }}>
                  <div>
                    <input className="fi" style={cTouched.name && cErr.name ? iSLgE : iSLg} placeholder="Full Name *" value={cForm.name} onChange={e => setC("name", e.target.value)} onBlur={cBlur("name")} />
                    {cTouched.name && <FieldErr msg={cErr.name} />}
                  </div>
                  <div>
                    <div style={{ display: "flex", gap: 8, flexDirection: isMobile ? "column" : "row" }}>
                      <select className="fi" style={{ ...iSLg, width: isMobile ? "100%" : 100 }} value={cForm.dialCode} onChange={e => setC("dialCode", e.target.value)}>
                        {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                      </select>
                      <input className="fi" type="tel" style={cTouched.phone && cErr.phone ? { ...iSLgE, flex: 1 } : { ...iSLg, flex: 1 }} placeholder="Phone *" value={cForm.phone} onChange={e => setC("phone", e.target.value)} onBlur={cBlur("phone")} />
                    </div>
                    {cTouched.phone && <FieldErr msg={cErr.phone} />}
                  </div>
                </div>
                <div style={{ marginBottom: 12 }}>
                  <input className="fi" type="email" style={cTouched.email && cErr.email ? iSLgE : iSLg} placeholder="Business Email *" value={cForm.email} onChange={e => setC("email", e.target.value)} onBlur={cBlur("email")} />
                  {cTouched.email && <FieldErr msg={cErr.email} />}
                </div>
                <div style={{ marginBottom: 16 }}>
                  <textarea className="fi" style={cTouched.project && cErr.project ? taLgE : taLg} placeholder="Project Description *" value={cForm.project} onChange={e => setC("project", e.target.value)} onBlur={cBlur("project")} />
                  {cTouched.project && <FieldErr msg={cErr.project} />}
                </div>
                <button type="submit" disabled={cLoading} style={{ width: "100%", padding: "12px", borderRadius: 100, border: "none", background: cLoading ? T + "80" : `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: isMobile ? 14 : 15, cursor: cLoading ? "wait" : "pointer", opacity: cLoading ? 0.7 : 1 }}>
                  {cLoading ? "Sending…" : "Submit — Free Consultation"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse   { 0%,100%{opacity:.4} 50%{opacity:.8} }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .fi::placeholder { color:rgba(255,255,255,0.28); }
        .fi option       { background:#0a1f38; color:#fff; }
        .fi:focus        { border-color:rgba(0,201,167,0.5)!important; background:rgba(0,201,167,0.06)!important; }
        input:hover, select:hover, textarea:hover { border-color:${T}!important; }
       @keyframes marqueeReverse { 
  0% { transform: translateX(-50%); } 
  100% { transform: translateX(0); } 
}
      `}</style>
    </>
  );
}