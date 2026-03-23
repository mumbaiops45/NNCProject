// "use client";
// import { useState, useEffect, useRef } from "react";
// import Navbar from "@/app/components/Navbar";
// import Footer from "@/app/components/Footer";

// // ─── Design tokens ────────────────────────────────────────────────────────────
// const T = "#00C9A7";
// const TD = "#00a07a";
// const P = "#8B5CF6"; // Purple accent
// const G = "#10B981"; // Green accent
// const N0 = "#010812";
// const N1 = "#030B18";
// const N2 = "#061425";

// // ─── Data ─────────────────────────────────────────────────────────────────────
// const LOGOS = [
//   "clients1.png", "clients2.png", "clients3.png", "clients4.png", "clients5.png",
//   "clients6.png", "clients7.png", "clients8.png", "clients9.png", "clients10.png",
//   "clients11.png", "clients12.png"
// ];

// const SUCCESS_STORIES = [
//   {
//     id: 1,
//     icon: "🏥",
//     title: "42% More Bookings for UK Healthcare Provider",
//     description: "A multi-location clinic group implemented a patient CRM with automated reminders and online booking, reducing no-shows by 67%.",
//     metrics: [
//       { label: "Bookings", value: "+42%" },
//       { label: "No-shows", value: "-67%" },
//       { label: "Satisfaction", value: "4.9★" }
//     ],
//     tags: ["Healthcare", "CRM", "UK"]
//   },
//   {
//     id: 2,
//     icon: "🩺",
//     title: "55% Faster Patient Onboarding for Canadian Clinic",
//     description: "Digital intake forms and automated verification reduced admin time and eliminated paper-based processes.",
//     metrics: [
//       { label: "Onboarding", value: "-55%" },
//       { label: "Errors", value: "-92%" },
//       { label: "ROI", value: "312%" }
//     ],
//     tags: ["Healthcare", "Automation", "Canada"]
//   },
//   {
//     id: 3,
//     icon: "💊",
//     title: "2.8× Referral Conversion for US Specialty Practice",
//     description: "Referral management system with automated tracking and follow-ups dramatically improved conversion rates.",
//     metrics: [
//       { label: "Conversion", value: "2.8×" },
//       { label: "Response", value: "-78%" },
//       { label: "Referrals", value: "+145%" }
//     ],
//     tags: ["Healthcare", "Referrals", "USA"]
//   }
// ];

// const SOLUTIONS = [
//   { icon: "👥", title: "Patient Management CRM", desc: "Complete patient history, treatment tracking, and communication logs. Purpose-built for Canada, USA & UK healthcare providers." },
//   { icon: "📅", title: "Appointment Booking System", desc: "Online scheduling, automated reminders, and calendar integration with two-way sync." },
//   { icon: "💻", title: "Telehealth & Patient Portal", desc: "Secure video consultations, messaging, and document sharing with end-to-end encryption." },
//   { icon: "📱", title: "Healthcare Mobile Apps", desc: "iOS and Android apps for patients and providers with offline capability and push notifications." },
//   { icon: "🔄", title: "Referral Management System", desc: "Track referrals, automate follow-ups, and measure conversion rates in real-time." },
//   { icon: "📊", title: "Healthcare Analytics & Reporting", desc: "Real-time dashboards for patient outcomes, operational KPIs, and revenue trends." },
//   { icon: "🔗", title: "EMR/EHR Integration", desc: "Seamless integration with Epic, Cerner, Allscripts, and other major EMR systems." },
//   { icon: "💬", title: "WhatsApp Patient Communication", desc: "Automated appointment reminders, two-way messaging, and broadcast capabilities." },
//   { icon: "☁️", title: "HIPAA-Compliant Cloud Storage", desc: "Encrypted storage with access controls, audit logging, and automatic backups." }
// ];

// const COMPLIANCE = [
//   {
//     region: "USA",
//     flag: "🇺🇸",
//     title: "HIPAA",
//     desc: "All patient data encrypted in transit and at rest. Role-based access, audit logging, and Business Associate Agreement (BAA) support."
//   },
//   {
//     region: "Canada",
//     flag: "🇨🇦",
//     title: "PIPEDA",
//     desc: "Systems built to comply with Canada's Personal Information Protection and Electronic Documents Act from the ground up."
//   },
//   {
//     region: "UK",
//     flag: "🇬🇧",
//     title: "NHS Data Security",
//     desc: "Aligned with NHS DSPT requirements and UK GDPR for healthcare data, including Data Protection Impact Assessments."
//   }
// ];

// const FAQS = [
//   {
//     q: "How long does a healthcare CRM implementation take?",
//     a: "A focused patient management system typically takes 8-14 weeks. This includes requirements gathering, development, compliance validation, and staff training. For UK clients, we align with NHS timelines; for Canadian clients, we ensure PIPEDA compliance throughout. Enterprise systems with EMR integration can take 16-24 weeks."
//   },
//   {
//     q: "Are your systems HIPAA, PIPEDA, and NHS compliant?",
//     a: "Yes. Every healthcare system we build is compliant by design. For US clients: HIPAA with BAA support. For Canadian clients: full PIPEDA compliance including consent management and data residency options. For UK clients: NHS DSPT and UK GDPR alignment. We provide documentation and audit trails for regulatory review."
//   },
//   {
//     q: "Can you integrate with our existing EMR/EHR?",
//     a: "Absolutely. We've integrated with major EMR systems including Epic, Cerner, Allscripts, Athenahealth, and custom hospital systems. Using HL7/FHIR standards, we ensure secure, real-time data exchange between your CRM and existing clinical systems without disrupting workflows."
//   },
//   {
//     q: "What does a healthcare CRM cost in Canada or the UK?",
//     a: "A comprehensive patient management CRM starts from CAD $25,000–$45,000 / £18,000–£32,000. This includes compliance features, appointment management, and patient portal. Enterprise systems with EMR integration, telehealth, and multi-location support are scoped individually. All quotes include compliance validation and are fixed-price."
//   }
// ];

// const WCU_POINTS = [
//   { icon: "🏥", text: "8+ years of healthcare technology expertise" },
//   { icon: "🌍", text: "Serving Canada, USA & UK markets" },
//   { icon: "⚡", text: "565+ projects delivered globally" },
//   { icon: "🔒", text: "HIPAA, PIPEDA & NHS compliant delivery" },
//   { icon: "🤝", text: "Dedicated client teams in your time zone" },
//   { icon: "📱", text: "Full-stack: Web, Mobile, CRM, EMR integration" }
// ];

// const WCU_STATS = [
//   { n: 8, s: "+", l: "Years" },
//   { n: 565, s: "+", l: "Projects" },
//   { n: 100, s: "+", l: "Team" },
//   { n: 12, s: "+", l: "Healthcare Clients" }
// ];

// const HEALTHCARE_STATS = [
//   { value: "98.5%", label: "Data Uptime", icon: "📊" },
//   { value: "24/7", label: "Patient Access", icon: "⏰" },
//   { value: "99.9%", label: "Compliance Rate", icon: "🔒" },
//   { value: "45min", label: "Avg Response", icon: "⚡" }
// ];

// const INT_OFFICES = [
//   { flag: "🇨🇦", city: "Toronto, Canada", phone: "+1 647-XXX-XXXX", email: "healthcare@nncdigital.com", tz: "EST / EDT" },
//   { flag: "🇺🇸", city: "New York, USA", phone: "+1 631-XXX-XXXX", email: "healthcare@nncdigital.com", tz: "EST / EDT" },
//   { flag: "🇬🇧", city: "London, UK", phone: "+44 20-XXXX-XXXX", email: "healthcare@nncdigital.com", tz: "GMT / BST" }
// ];

// const INDIA_OFFICES = [
//   { city: "Bangalore (HQ)", phone: "+91 9900566466", note: "Primary engineering hub" },
//   { city: "Mysore", phone: null, note: "Design & QA" },
//   { city: "Mumbai", phone: null, note: "Sales & partnerships" },
//   { city: "Hyderabad", phone: null, note: "Mobile & cloud" }
// ];

// const SERVICES_LIST = [
//   "Patient Management CRM", "Appointment System", "Telehealth Portal",
//   "Healthcare Mobile App", "Referral System", "EMR Integration", "Other"
// ];

// const DIAL_CODES = [
//   { code: "+1", flag: "🇨🇦" },
//   { code: "+1", flag: "🇺🇸" },
//   { code: "+44", flag: "🇬🇧" },
//   { code: "+91", flag: "🇮🇳" }
// ];

// // ─── Helper Components ────────────────────────────────────────────────────────

// function Particles() {
//   const ref = useRef<HTMLCanvasElement>(null);
//   useEffect(() => {
//     const c = ref.current; if (!c) return;
//     const ctx = c.getContext("2d")!;
//     let W = c.width = c.offsetWidth, H = c.height = c.offsetHeight;
//     const pts = Array.from({ length: 50 }, () => ({
//       x: Math.random() * W, y: Math.random() * H,
//       vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22,
//       r: Math.random() * 1.4 + .3, a: Math.random() * .38 + .07
//     }));
//     let raf: number;
//     const draw = () => {
//       ctx.clearRect(0, 0, W, H);
//       pts.forEach(p => {
//         p.x += p.vx; p.y += p.vy;
//         if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
//         if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
//         ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(0,201,167,${p.a})`; ctx.fill();
//       });
//       for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
//         const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy);
//         if (d < 90) {
//           ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
//           ctx.strokeStyle = `rgba(0,201,167,${.06 * (1 - d / 90)})`; ctx.lineWidth = .5; ctx.stroke();
//         }
//       }
//       raf = requestAnimationFrame(draw);
//     };
//     draw();
//     const rz = () => { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; };
//     window.addEventListener("resize", rz);
//     return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", rz); };
//   }, []);
//   return <canvas ref={ref} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} />;
// }

// function Counter({ to, sfx = "" }: { to: number; sfx?: string }) {
//   const ref = useRef<HTMLSpanElement>(null);
//   const [v, setV] = useState(0);
//   const started = useRef(false);
//   useEffect(() => {
//     const el = ref.current; if (!el) return;
//     const obs = new IntersectionObserver(([e]) => {
//       if (e.isIntersecting && !started.current) {
//         started.current = true;
//         let step = 0;
//         const t = setInterval(() => {
//           step++; const ease = 1 - Math.pow(1 - step / 70, 3);
//           setV(Math.round(ease * to));
//           if (step >= 70) { setV(to); clearInterval(t); }
//         }, 1800 / 70);
//       }
//     }, { threshold: .25 });
//     obs.observe(el); return () => obs.disconnect();
//   }, [to]);
//   return <span ref={ref}>{v}{sfx}</span>;
// }

// function SectionBadge({ label }: { label: string }) {
//   return (
//     <div style={{
//       display: "inline-flex", alignItems: "center", gap: 8,
//       background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.22)",
//       borderRadius: 100, padding: "6px 18px", marginBottom: 16
//     }}>
//       <span style={{ width: 6, height: 6, borderRadius: "50%", background: T, display: "block", boxShadow: `0 0 8px ${T}` }} />
//       <span style={{ color: T, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>{label}</span>
//     </div>
//   );
// }

// function SectionH2({ children }: { children: React.ReactNode }) {
//   return <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 14 }}>{children}</h2>;
// }

// function GradText({ children }: { children: React.ReactNode }) {
//   return <span style={{ background: `linear-gradient(135deg,${T},#1fd1b5)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{children}</span>;
// }

// // Responsive Stats Dashboard Component
// function StatsDashboard() {
//   const [hoveredStat, setHoveredStat] = useState<number | null>(null);

//   return (
//     <div style={{
//       background: `linear-gradient(135deg, ${N2} 0%, ${N1} 100%)`,
//       borderRadius: 24,
//       padding: "clamp(20px, 3vw, 32px)",
//       border: `1px solid ${T}30`,
//       boxShadow: `0 20px 40px rgba(0,0,0,0.4)`,
//       position: "relative",
//       overflow: "hidden"
//     }}>
//       <div style={{
//         position: "absolute",
//         top: "-50%",
//         right: "-20%",
//         width: 300,
//         height: 300,
//         borderRadius: "50%",
//         background: `radial-gradient(circle, ${T}20 0%, transparent 70%)`,
//         pointerEvents: "none"
//       }} />

//       <div style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(2, 1fr)",
//         gap: "clamp(12px, 2vw, 24px)",
//         marginBottom: "clamp(16px, 2.5vw, 24px)"
//       }}>
//         {HEALTHCARE_STATS.map((stat, i) => (
//           <div
//             key={i}
//             onMouseEnter={() => setHoveredStat(i)}
//             onMouseLeave={() => setHoveredStat(null)}
//             style={{
//               background: hoveredStat === i ? `rgba(0,201,167,0.15)` : "rgba(255,255,255,0.03)",
//               border: `1px solid ${hoveredStat === i ? T : "rgba(255,255,255,0.05)"}`,
//               borderRadius: 16,
//               padding: "clamp(16px, 2vw, 20px) clamp(12px, 1.5vw, 16px)",
//               textAlign: "center",
//               transition: "all 0.3s ease",
//               transform: hoveredStat === i ? "translateY(-4px)" : "none"
//             }}
//           >
//             <div style={{ fontSize: "clamp(24px, 3vw, 32px)", marginBottom: 8 }}>{stat.icon}</div>
//             <div style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 900, color: T, marginBottom: 4 }}>{stat.value}</div>
//             <div style={{ fontSize: "clamp(11px, 1.5vw, 13px)", color: "rgba(255,255,255,0.6)" }}>{stat.label}</div>
//           </div>
//         ))}
//       </div>

//       <div style={{
//         background: "rgba(255,255,255,0.02)",
//         border: "1px solid rgba(255,255,255,0.05)",
//         borderRadius: 16,
//         padding: "clamp(16px, 2vw, 20px)"
//       }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
//           <span style={{ fontSize: "clamp(20px, 2.5vw, 24px)" }}>📈</span>
//           <span style={{ color: T, fontSize: "clamp(12px, 1.5vw, 14px)", fontWeight: 700 }}>REAL-TIME METRICS</span>
//         </div>

//         <div style={{ display: "flex", flexDirection: "column", gap: "clamp(8px, 1.5vw, 12px)" }}>
//           <div>
//             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
//               <span style={{ fontSize: "clamp(11px, 1.3vw, 12px)", color: "rgba(255,255,255,0.5)" }}>System Uptime</span>
//               <span style={{ fontSize: "clamp(11px, 1.3vw, 12px)", color: T, fontWeight: 600 }}>99.97%</span>
//             </div>
//             <div style={{ height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 3 }}>
//               <div style={{ width: "99.7%", height: "100%", background: T, borderRadius: 3 }} />
//             </div>
//           </div>

//           <div>
//             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
//               <span style={{ fontSize: "clamp(11px, 1.3vw, 12px)", color: "rgba(255,255,255,0.5)" }}>Patient Satisfaction</span>
//               <span style={{ fontSize: "clamp(11px, 1.3vw, 12px)", color: T, fontWeight: 600 }}>94%</span>
//             </div>
//             <div style={{ height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 3 }}>
//               <div style={{ width: "94%", height: "100%", background: T, borderRadius: 3 }} />
//             </div>
//           </div>

//           <div>
//             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
//               <span style={{ fontSize: "clamp(11px, 1.3vw, 12px)", color: "rgba(255,255,255,0.5)" }}>Data Security Score</span>
//               <span style={{ fontSize: "clamp(11px, 1.3vw, 12px)", color: T, fontWeight: 600 }}>100%</span>
//             </div>
//             <div style={{ height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 3 }}>
//               <div style={{ width: "100%", height: "100%", background: T, borderRadius: 3 }} />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div style={{
//         marginTop: "clamp(16px, 2vw, 20px)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         gap: 8
//       }}>
//         <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
//         <span style={{ fontSize: "clamp(11px, 1.3vw, 12px)", color: "rgba(255,255,255,0.5)" }}>All systems operational</span>
//       </div>
//     </div>
//   );
// }

// // ─── Main Component ───────────────────────────────────────────────────────────
// export default function HealthcareIndustryPage() {
//   const [windowWidth, setWindowWidth] = useState(0);
//   const [form, setForm] = useState({ name: "", phone: "", dialCode: "+1", email: "", service: "", message: "" });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const setF = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
//   const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200); };

//   const [cForm, setCForm] = useState({ name: "", phone: "", dialCode: "+1", email: "", project: "" });
//   const [cSubmitted, setCSubmitted] = useState(false);
//   const [cLoading, setCLoading] = useState(false);
//   const setCF = (k: string, v: string) => setCForm(f => ({ ...f, [k]: v }));
//   const handleCSubmit = (e: React.FormEvent) => { e.preventDefault(); setCLoading(true); setTimeout(() => { setCLoading(false); setCSubmitted(true); }, 1200); };

//   const [story, setStory] = useState(0);
//   const [faq, setFaq] = useState<number | null>(0);
//   const [gTab, setGTab] = useState<"int" | "india">("int");
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   useEffect(() => {
//     setWindowWidth(window.innerWidth);
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const isMobile = windowWidth <= 640;
//   const isTablet = windowWidth > 640 && windowWidth <= 1024;
//   const isDesktop = windowWidth > 1024;

//   const getSectionPadding = () => {
//     if (isMobile) return "30px 20px";
//     if (isTablet) return "80px 32px";
//     return "50px 48px";
//   };

//   const getGridColumns = (mobile: number, tablet: number, desktop: number) => {
//     if (isMobile) return `repeat(${mobile}, 1fr)`;
//     if (isTablet) return `repeat(${tablet}, 1fr)`;
//     return `repeat(${desktop}, 1fr)`;
//   };

//   const iS: React.CSSProperties = {
//     width: "100%",
//     padding: isMobile ? "10px 14px" : "12px 16px",
//     borderRadius: 10,
//     background: "rgba(255,255,255,0.07)",
//     border: "1px solid rgba(255,255,255,0.14)",
//     color: "#fff",
//     fontSize: isMobile ? 13 : 14,
//     fontFamily: "'Poppins', sans-serif",
//     outline: "none",
//     transition: "all 0.3s ease"
//   };

//   const iSLg: React.CSSProperties = { ...iS, padding: isMobile ? "12px 16px" : "14px 18px", fontSize: isMobile ? 14 : 15 };

//   return (
//     <>
//       <Navbar />

//       {/* MODULE 1 — HERO + INLINE FORM */}
//       <section style={{
//         padding: isMobile ? "40px 20px 60px" : isTablet ? "100px 32px 70px" : "60px 48px 80px",
//         background: `linear-gradient(135deg, ${N0} 0%, #041628 50%, ${N0} 100%)`,
//         position: "relative", overflow: "hidden", minHeight: isMobile ? "auto" : "90vh",
//         display: "flex", alignItems: "center"
//       }}>
//         <Particles />
//         {/* <div style={{
//           position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
//           backgroundImage: `linear-gradient(rgba(0,201,167,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.035) 1px,transparent 1px)`,
//           backgroundSize: "60px 60px"
//         }} /> */}
//         {!isMobile && (
//           <>
//             <div style={{
//               position: "absolute", width: isTablet ? 500 : 650, height: isTablet ? 500 : 650, borderRadius: "50%",
//               background: `radial-gradient(circle,${T}18 0%,transparent 65%)`,
//               top: "40%", left: "-10%", transform: "translateY(-50%)",
//               animation: "pulse 8s ease-in-out infinite", pointerEvents: "none", zIndex: 1
//             }} />
//             <div style={{
//               position: "absolute", width: isTablet ? 300 : 400, height: isTablet ? 300 : 400, borderRadius: "50%",
//               background: "radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 65%)",
//               top: "10%", right: "5%", animation: "pulse 10s ease-in-out infinite", pointerEvents: "none", zIndex: 1
//             }} />
//           </>
//         )}

//         <div style={{
//           maxWidth: 1280, margin: "0 auto", width: "100%",
//           display: "grid",
//           gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
//           gap: isMobile ? 40 : isTablet ? 40 : 60,
//           alignItems: "center",
//           position: "relative",
//           zIndex: 3
//         }}>
//           {/* Left - Hero Text */}
//           <div>
//             <SectionBadge label="Healthcare Technology" />
//             <h1 style={{
//               fontSize: isMobile ? "clamp(28px, 7vw, 32px)" : isTablet ? "clamp(32px, 4vw, 38px)" : "clamp(42px, 4vw, 54px)",
//               fontWeight: 900, lineHeight: 1.2, marginBottom: isMobile ? 16 : 20, color: "#fff"
//             }}>
//               Digital Systems for <GradText>Healthcare Providers</GradText> in Canada, USA & UK
//             </h1>
//             <p style={{
//               color: "rgba(255,255,255,0.6)",
//               fontSize: isMobile ? 14 : isTablet ? 15 : 16,
//               lineHeight: 1.8, marginBottom: isMobile ? 24 : 32,
//               maxWidth: isMobile ? "100%" : 540
//             }}>
//               Healthcare organisations face unique challenges — patient data privacy, appointment management, referral tracking, and regulatory compliance. We build custom digital systems that address these head-on.
//             </p>
//             <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: isMobile ? 24 : 32 }}>
//               {[
//                 { icon: "🔒", label: "HIPAA Ready" },
//                 { icon: "🍁", label: "PIPEDA Compliant" },
//                 { icon: "🇬🇧", label: "NHS Aligned" },
//                 { icon: "🏥", label: "HL7/FHIR" }
//               ].map((b, i) => (
//                 <span key={i} style={{
//                   padding: isMobile ? "5px 10px" : "6px 12px", borderRadius: 100,
//                   background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
//                   color: "rgba(255,255,255,0.8)", fontSize: isMobile ? 11 : 12, fontWeight: 500,
//                   display: "flex", alignItems: "center", gap: 4
//                 }}>
//                   <span>{b.icon}</span> {b.label}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Right - Lead Form */}
//           <div style={{
//             background: "rgba(8,20,40,0.85)", border: `1px solid ${T}30`,
//             borderRadius: 24, padding: isMobile ? "20px 16px" : isTablet ? "28px 24px" : "32px 28px",
//             backdropFilter: "blur(16px)", boxShadow: "0 32px 64px rgba(0,0,0,0.5)"
//           }}>
//             <h3 style={{ fontSize: isMobile ? 18 : isTablet ? 20 : 22, fontWeight: 700, marginBottom: isMobile ? 16 : 20 }}>
//               Get a Free <span style={{ color: T }}>Consultation</span>
//             </h3>

//             {submitted ? (
//               <div style={{ textAlign: "center", padding: "20px 0" }}>
//                 <div style={{ fontSize: isMobile ? 40 : 48, marginBottom: 16 }}>🏥</div>
//                 <h4 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, marginBottom: 8 }}>Request Received!</h4>
//                 <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 13 : 14, marginBottom: 20 }}>
//                   A healthcare specialist will contact you within 24 hours.
//                 </p>
//                 <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", dialCode: "+1", email: "", service: "", message: "" }); }} style={{
//                   padding: "8px 16px", borderRadius: 100, border: "none",
//                   background: T, color: "#000", fontWeight: 600, fontSize: isMobile ? 13 : 14, cursor: "pointer"
//                 }}>Send Another</button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: isMobile ? 12 : 16 }}>
//                 <input style={iS} placeholder="Full Name *" required value={form.name} onChange={e => setF("name", e.target.value)} />
//                 <div style={{ display: "flex", gap: 8, flexDirection: isMobile ? "column" : "row" }}>
//                   <select style={{ ...iS, width: isMobile ? "100%" : 100 }} value={form.dialCode} onChange={e => setF("dialCode", e.target.value)}>
//                     {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
//                   </select>
//                   <input style={{ ...iS, flex: 1 }} type="tel" placeholder="Phone Number *" required value={form.phone} onChange={e => setF("phone", e.target.value)} />
//                 </div>
//                 <input style={iS} type="email" placeholder="Business Email *" required value={form.email} onChange={e => setF("email", e.target.value)} />
//                 <select style={iS} value={form.service} onChange={e => setF("service", e.target.value)}>
//                   <option value="">Service of Interest</option>
//                   {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
//                 </select>
//                 <textarea style={{ ...iS, minHeight: isMobile ? 60 : 80, resize: "vertical" }} placeholder="Message" value={form.message} onChange={e => setF("message", e.target.value)} />
//                 <button type="submit" disabled={loading} style={{
//                   width: "100%", padding: "12px", borderRadius: 100, border: "none",
//                   background: loading ? T + "80" : `linear-gradient(135deg, ${T}, ${TD})`,
//                   color: "#000", fontWeight: 700, fontSize: isMobile ? 14 : 15, cursor: loading ? "wait" : "pointer"
//                 }}>
//                   {loading ? "Sending..." : "Get Free Consultation →"}
//                 </button>
//                 <p style={{ color: "rgba(255,255,255,0.3)", fontSize: isMobile ? 10 : 11, textAlign: "center" }}>🔒 No spam. Ever.</p>
//               </form>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* MODULE 2 — OUR HAPPY CLIENTS + SUCCESS STORIES */}
//       <section style={{ padding: getSectionPadding(), background: N1 }}>
//         {/* Client Logos */}
//         <div style={{ marginBottom: isMobile ? 40 : 60 }}>
//           <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 32 }}>
//             <SectionBadge label="Our Happy Clients" />
//             <SectionH2>Trusted by <GradText>Healthcare Providers</GradText> Across North America & UK</SectionH2>
//           </div>
//           <div style={{ overflow: "hidden" }}>
//             <div style={{
//               display: "flex", gap: isMobile ? 20 : 40, animation: "marquee 30s linear infinite",
//               width: "fit-content"
//             }}>
//               {[...LOGOS, ...LOGOS].map((logo, i) => (
//                 <div
//                   key={i}
//                   style={{
//                     flexShrink: 0,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     height: isMobile ? 60 : 70,
//                     padding: "10px 18px",
//                     background: "#ffffff",
//                     borderRadius: 10,
//                     margin: "0 6px",
//                     boxShadow: "0 4px 12px rgba(0,0,0,0.12)"
//                   }}
//                 >
//                   <img
//                     src={`/${logo}`}
//                     alt="Client"
//                     style={{
//                       height: isMobile ? 32 : 40,
//                       width: "auto",
//                       maxWidth: isMobile ? 90 : 120,
//                       objectFit: "contain"
//                     }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Success Stories */}
//         <div>
//           <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 32 }}>
//             <SectionBadge label="Success Stories" />
//             <SectionH2>Healthcare <GradText>Success Stories</GradText></SectionH2>
//           </div>

//           <div style={{
//             display: "grid",
//             gridTemplateColumns: getGridColumns(1, 2, 3),
//             gap: isMobile ? 16 : isTablet ? 20 : 24
//           }}>
//             {SUCCESS_STORIES.map((s, i) => (
//               <div key={i} onMouseEnter={() => setHoveredCard(i)} onMouseLeave={() => setHoveredCard(null)} style={{
//                 background: "rgba(255,255,255,0.02)", border: `1px solid ${hoveredCard === i ? T : "rgba(255,255,255,0.05)"}`,
//                 borderRadius: 24, padding: isMobile ? 20 : 24, transition: "all 0.3s ease",
//                 transform: hoveredCard === i && !isMobile ? "translateY(-4px)" : "none"
//               }}>
//                 <div style={{ fontSize: isMobile ? 40 : 48, marginBottom: isMobile ? 12 : 16 }}>{s.icon}</div>
//                 <h3 style={{ fontSize: isMobile ? 15 : 16, fontWeight: 700, color: T, marginBottom: isMobile ? 8 : 12 }}>{s.title}</h3>
//                 <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 13 : 14, lineHeight: 1.7, marginBottom: isMobile ? 16 : 20 }}>{s.description}</p>
//                 <div style={{ display: "flex", justifyContent: "space-between", marginBottom: isMobile ? 12 : 16 }}>
//                   {s.metrics.map((m, j) => (
//                     <div key={j} style={{ textAlign: "center" }}>
//                       <div style={{ color: T, fontSize: isMobile ? 16 : 18, fontWeight: 700 }}>{m.value}</div>
//                       <div style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? 10 : 11 }}>{m.label}</div>
//                     </div>
//                   ))}
//                 </div>
//                 <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
//                   {s.tags.map((tag, j) => (
//                     <span key={j} style={{
//                       padding: "4px 8px", borderRadius: 100, background: "rgba(0,201,167,0.1)",
//                       border: `1px solid ${T}30`, color: T, fontSize: isMobile ? 10 : 11, fontWeight: 600
//                     }}>{tag}</span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: isMobile ? 20 : 28 }}>
//             {SUCCESS_STORIES.map((_, i) => (
//               <button key={i} onClick={() => setStory(i)} style={{
//                 width: story === i ? 24 : 8, height: 8, borderRadius: 100,
//                 background: story === i ? T : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer"
//               }} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* MODULE 3 — DIGITAL SOLUTIONS WE BUILD */}
//       <section style={{ padding: getSectionPadding(), background: N2 }}>
//         <div style={{ maxWidth: 1280, margin: "0 auto" }}>
//           <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 32 }}>
//             <SectionBadge label="What We Build" />
//             <SectionH2>Healthcare <GradText>Digital Solutions</GradText> We Build</SectionH2>
//           </div>

//           <div style={{
//             display: "grid",
//             gridTemplateColumns: getGridColumns(1, 2, 3),
//             gap: isMobile ? 16 : isTablet ? 20 : 24
//           }}>
//             {SOLUTIONS.map((s, i) => (
//               <div key={i} onMouseEnter={() => setHoveredCard(i + 10)} onMouseLeave={() => setHoveredCard(null)} style={{
//                 background: "rgba(255,255,255,0.02)", border: `1px solid ${hoveredCard === i + 10 ? T : "rgba(255,255,255,0.05)"}`,
//                 borderRadius: 20, padding: isMobile ? 16 : 20, transition: "all 0.3s ease",
//                 transform: hoveredCard === i + 10 && !isMobile ? "translateY(-4px)" : "none"
//               }}>
//                 <div style={{ fontSize: isMobile ? 28 : 36, marginBottom: isMobile ? 12 : 16 }}>{s.icon}</div>
//                 <h3 style={{ fontSize: isMobile ? 15 : 16, fontWeight: 700, color: "#fff", marginBottom: isMobile ? 6 : 8 }}>{s.title}</h3>
//                 <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 12 : 13, lineHeight: 1.6 }}>{s.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* MODULE 4 — COMPLIANCE & DATA SECURITY */}
//       <section style={{ padding: getSectionPadding(), background: `linear-gradient(135deg, ${N1} 0%, ${N0} 100%)` }}>
//         <div style={{ maxWidth: 1000, margin: "0 auto" }}>
//           <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 32 }}>
//             <SectionBadge label="Compliance First" />
//             <SectionH2>Built for Compliance in <GradText>Canada, USA & UK</GradText></SectionH2>
//           </div>

//           <div style={{
//             display: "grid",
//             gridTemplateColumns: getGridColumns(1, 2, 3),
//             gap: isMobile ? 16 : isTablet ? 20 : 24
//           }}>
//             {COMPLIANCE.map((c, i) => (
//               <div key={i} style={{
//                 background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
//                 borderRadius: 20, padding: isMobile ? 20 : 24, textAlign: "center"
//               }}>
//                 <div style={{ fontSize: isMobile ? 40 : 48, marginBottom: isMobile ? 12 : 16 }}>{c.flag}</div>
//                 <h3 style={{ color: T, fontSize: isMobile ? 18 : 20, fontWeight: 700, marginBottom: 4 }}>{c.title}</h3>
//                 <p style={{ color: "rgba(255,255,255,0.8)", fontSize: isMobile ? 13 : 14, marginBottom: 8 }}>{c.region}</p>
//                 <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 12 : 13, lineHeight: 1.6 }}>{c.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* MODULE 5 — WHY CHOOSE US | GLOBAL PRESENCE | FAQS | CTA */}
//       <section style={{ padding: getSectionPadding(), background: N1 }}>
//         <div style={{ maxWidth: 1280, margin: "0 auto" }}>
//           {/* Why Choose Us - Now with Stats Dashboard instead of Video */}
//           <div style={{ marginBottom: isMobile ? 40 : 60 }}>
//             <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 32 }}>
//               <SectionBadge label="Why Choose Us" />
//               <SectionH2>Your Trusted <GradText>Healthcare Technology</GradText> Partner</SectionH2>
//             </div>

//             <div style={{
//               display: "grid",
//               gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
//               gap: isMobile ? 32 : isTablet ? 32 : 48,
//               alignItems: "center"
//             }}>
//               <div>
//                 <p style={{ color: "rgba(255,255,255,0.7)", fontSize: isMobile ? 14 : 15, lineHeight: 1.8, marginBottom: 20 }}>
//                   Backed by <strong style={{ color: T }}>Nakshatra Namaha Creations Pvt. Ltd.</strong> — 8+ years of experience, 565+ projects delivered. Dedicated client teams in Canada, USA, and UK. Fully compliant with HIPAA, PIPEDA, and NHS standards. Long-term partnership focused on your success.
//                 </p>
//                 <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
//                   {WCU_POINTS.map((p, i) => (
//                     <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
//                       <span style={{ fontSize: 18 }}>{p.icon}</span>
//                       <span style={{ color: "rgba(255,255,255,0.8)", fontSize: isMobile ? 13 : 14 }}>{p.text}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <div style={{
//                   display: "grid",
//                   gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
//                   gap: isMobile ? 8 : 12
//                 }}>
//                   {WCU_STATS.map((s, i) => (
//                     <div key={i} style={{ textAlign: "center", padding: isMobile ? "8px" : "0" }}>
//                       <div style={{ fontSize: isMobile ? 18 : 22, fontWeight: 900, color: T }}><Counter to={s.n} sfx={s.s} /></div>
//                       <div style={{ fontSize: isMobile ? 10 : 11, color: "rgba(255,255,255,0.4)" }}>{s.l}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* StatsDashboard */}
//               <StatsDashboard />
//             </div>
//           </div>

//           {/* Global Presence */}
//           <div style={{ marginBottom: isMobile ? 40 : 60 }}>
//             <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 32 }}>
//               <SectionBadge label="Our Reach" />
//               <SectionH2>Global <GradText>Presence</GradText></SectionH2>
//             </div>

//             <div style={{
//               display: "flex", gap: 8, justifyContent: "center", marginBottom: isMobile ? 24 : 32, flexWrap: "wrap"
//             }}>
//               {[
//                 { key: "int", label: "🌍 North America & UK" },
//                 { key: "india", label: "🇮🇳 India (Engineering HQ)" }
//               ].map(t => (
//                 <button key={t.key} onClick={() => setGTab(t.key as "int" | "india")} style={{
//                   padding: isMobile ? "6px 12px" : "8px 16px", borderRadius: 100,
//                   border: `1px solid ${gTab === t.key ? T : "rgba(255,255,255,0.1)"}`,
//                   background: gTab === t.key ? "rgba(0,201,167,0.1)" : "transparent",
//                   color: gTab === t.key ? T : "rgba(255,255,255,0.7)",
//                   fontSize: isMobile ? 12 : 13, fontWeight: 600, cursor: "pointer"
//                 }}>{t.label}</button>
//               ))}
//             </div>

//             {gTab === "int" && (
//               <div style={{
//                 display: "grid",
//                 gridTemplateColumns: getGridColumns(1, 2, 3),
//                 gap: isMobile ? 16 : isTablet ? 20 : 24
//               }}>
//                 {INT_OFFICES.map((o, i) => (
//                   <div key={i} style={{
//                     background: "rgba(0,201,167,0.05)", border: `1px solid ${T}20`,
//                     borderRadius: 20, padding: isMobile ? 16 : 20
//                   }}>
//                     <div style={{ fontSize: isMobile ? 28 : 32, marginBottom: 8 }}>{o.flag}</div>
//                     <h3 style={{ fontSize: isMobile ? 15 : 16, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{o.city}</h3>
//                     <p style={{ color: T, fontSize: isMobile ? 10 : 11, marginBottom: 8 }}>{o.tz}</p>
//                     <a href={`tel:${o.phone}`} style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: isMobile ? 12 : 13, marginBottom: 4, textDecoration: "none" }}>📞 {o.phone}</a>
//                     <a href={`mailto:${o.email}`} style={{ color: T, fontSize: isMobile ? 12 : 13, textDecoration: "none" }}>✉️ {o.email}</a>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {gTab === "india" && (
//               <div style={{
//                 background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
//                 borderRadius: 20, padding: isMobile ? 20 : 24
//               }}>
//                 <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
//                   <span style={{ fontSize: isMobile ? 28 : 32 }}>🇮🇳</span>
//                   <h3 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, color: "#fff" }}>Nakshatra Namaha Creations Pvt. Ltd.</h3>
//                 </div>
//                 <div style={{
//                   display: "grid",
//                   gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
//                   gap: isMobile ? 12 : 16
//                 }}>
//                   {INDIA_OFFICES.map((o, i) => (
//                     <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
//                       <span style={{ fontSize: 18 }}>🇮🇳</span>
//                       <div>
//                         <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 600, color: "#fff", margin: 0 }}>{o.city}</p>
//                         {o.phone && <p style={{ fontSize: isMobile ? 11 : 12, color: T, margin: "2px 0 0" }}>{o.phone}</p>}
//                         <p style={{ fontSize: isMobile ? 10 : 11, color: "rgba(255,255,255,0.4)", margin: 0 }}>{o.note}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* FAQs */}
//           <div style={{ marginBottom: isMobile ? 40 : 60 }}>
//             <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 32 }}>
//               <SectionBadge label="FAQs" />
//               <SectionH2>Frequently Asked <GradText>Questions</GradText></SectionH2>
//             </div>

//             <div style={{ maxWidth: 800, margin: "0 auto" }}>
//               {FAQS.map((item, i) => (
//                 <div key={i} style={{
//                   marginBottom: 12, border: `1px solid ${faq === i ? T : "rgba(255,255,255,0.05)"}`,
//                   borderRadius: 16, background: faq === i ? "rgba(0,201,167,0.05)" : "rgba(255,255,255,0.02)",
//                   overflow: "hidden"
//                 }}>
//                   <button onClick={() => setFaq(faq === i ? null : i)} style={{
//                     width: "100%", padding: isMobile ? "14px 16px" : "16px 20px",
//                     display: "flex", justifyContent: "space-between", alignItems: "center",
//                     background: "transparent", border: "none", color: "#fff",
//                     fontSize: isMobile ? 13 : 14, fontWeight: 600, textAlign: "left", cursor: "pointer"
//                   }}>
//                     <span>{item.q}</span>
//                     <span style={{ color: T, fontSize: isMobile ? 18 : 20 }}>{faq === i ? "−" : "+"}</span>
//                   </button>
//                   {faq === i && (
//                     <div style={{ padding: isMobile ? "0 16px 16px 16px" : "0 20px 20px 20px" }}>
//                       <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 12 : 13, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Final CTA Form */}
//           <div style={{
//             background: `linear-gradient(135deg, ${T}10, #8B5CF610)`,
//             border: `1px solid ${T}30`, borderRadius: 32,
//             padding: isMobile ? "24px 16px" : isTablet ? "32px 24px" : "40px",
//             textAlign: "center"
//           }}>
//             <SectionBadge label="Get Started" />
//             <SectionH2>Ready to Build Your <GradText>Healthcare Solution?</GradText></SectionH2>
//             <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 13 : 14, marginBottom: 24 }}>
//               Tell us about your project. We'll respond within 24 hours with a free consultation.
//             </p>

//             {cSubmitted ? (
//               <div style={{ padding: "20px 0" }}>
//                 <div style={{ fontSize: isMobile ? 40 : 48, marginBottom: 16 }}>🏥</div>
//                 <h4 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, marginBottom: 8 }}>Message Sent!</h4>
//                 <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 13 : 14, marginBottom: 20 }}>
//                   A healthcare specialist will contact you within 24 hours.
//                 </p>
//                 <button onClick={() => { setCSubmitted(false); setCForm({ name: "", phone: "", dialCode: "+1", email: "", project: "" }); }} style={{
//                   padding: "8px 16px", borderRadius: 100, border: "none",
//                   background: T, color: "#000", fontWeight: 600, fontSize: isMobile ? 13 : 14, cursor: "pointer"
//                 }}>Send Another</button>
//               </div>
//             ) : (
//               <form onSubmit={handleCSubmit} style={{ maxWidth: 500, margin: "0 auto" }}>
//                 <div style={{
//                   display: "grid",
//                   gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
//                   gap: 12,
//                   marginBottom: 12
//                 }}>
//                   <input style={iSLg} placeholder="Full Name *" required value={cForm.name} onChange={e => setCF("name", e.target.value)} />
//                   <div style={{ display: "flex", gap: 8, flexDirection: isMobile ? "column" : "row" }}>
//                     <select style={{ ...iSLg, width: isMobile ? "100%" : 100 }} value={cForm.dialCode} onChange={e => setCF("dialCode", e.target.value)}>
//                       {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
//                     </select>
//                     <input style={{ ...iSLg, flex: 1 }} type="tel" placeholder="Phone" value={cForm.phone} onChange={e => setCF("phone", e.target.value)} />
//                   </div>
//                 </div>
//                 <input style={{ ...iSLg, marginBottom: 12 }} type="email" placeholder="Business Email *" required value={cForm.email} onChange={e => setCF("email", e.target.value)} />
//                 <textarea style={{ ...iSLg, minHeight: isMobile ? 80 : 100, marginBottom: 20, resize: "vertical" }} placeholder="Project Description" value={cForm.project} onChange={e => setCF("project", e.target.value)} />
//                 <button type="submit" disabled={cLoading} style={{
//                   width: "100%", padding: "12px", borderRadius: 100, border: "none",
//                   background: cLoading ? T + "80" : `linear-gradient(135deg, ${T}, ${TD})`,
//                   color: "#000", fontWeight: 700, fontSize: isMobile ? 14 : 15, cursor: cLoading ? "wait" : "pointer"
//                 }}>
//                   {cLoading ? "Sending..." : "Submit — Free Consultation"}
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </section>

//       <style>{`
//         @keyframes pulse { 0%,100%{opacity:.4} 50%{opacity:.8} }
//         @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
//       `}</style>

//     </>
//   );
// }


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
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";

// ─── Data ─────────────────────────────────────────────────────────────────────
const LOGOS = ["clients1.png", "clients2.png", "clients3.png", "clients4.png", "clients5.png",
  "clients6.png", "clients7.png", "clients8.png", "clients9.png", "clients10.png", "clients11.png",
  "clients12.png", "clients13.png", "clients14.png", "clients15.png", "clients16.png", "clients17.png", "clients18.png"];

const SUCCESS_STORIES = [
  {
    id: 1, icon: "🏥", result: "35% Efficiency Gain",
    title: "42% More Bookings for UK Healthcare Provider",
    description: "A multi-location clinic group implemented a patient CRM with automated reminders and online booking, reducing no-shows by 67%.",
    metrics: [{ label: "Bookings", value: "+42%" }, { label: "No-shows", value: "-67%" }, { label: "Satisfaction", value: "4.9★" }],
    tags: ["Healthcare", "CRM", "UK"],
  },
  {
    id: 2, icon: "🩺", result: "55% Faster Onboarding",
    title: "55% Faster Patient Onboarding for Canadian Clinic",
    description: "Digital intake forms and automated verification reduced admin time and eliminated paper-based processes.",
    metrics: [{ label: "Onboarding", value: "-55%" }, { label: "Errors", value: "-92%" }, { label: "ROI", value: "312%" }],
    tags: ["Healthcare", "Automation", "Canada"],
  },
  {
    id: 3, icon: "💊", result: "2.8× Referral Conversion",
    title: "2.8× Referral Conversion for US Specialty Practice",
    description: "Referral management system with automated tracking and follow-ups dramatically improved conversion rates.",
    metrics: [{ label: "Conversion", value: "2.8×" }, { label: "Response", value: "-78%" }, { label: "Referrals", value: "+145%" }],
    tags: ["Healthcare", "Referrals", "USA"],
  },
];

const SOLUTIONS = [
  { icon: "👥", title: "Patient Management CRM", desc: "Complete patient history, treatment tracking, and communication logs. Purpose-built for Canada, USA & UK healthcare providers." },
  { icon: "📅", title: "Appointment Booking System", desc: "Online scheduling, automated reminders, and calendar integration with two-way sync." },
  { icon: "💻", title: "Telehealth & Patient Portal", desc: "Secure video consultations, messaging, and document sharing with end-to-end encryption." },
  { icon: "📱", title: "Healthcare Mobile Apps", desc: "iOS and Android apps for patients and providers with offline capability and push notifications." },
  { icon: "🔄", title: "Referral Management System", desc: "Track referrals, automate follow-ups, and measure conversion rates in real-time." },
  { icon: "📊", title: "Healthcare Analytics & Reporting", desc: "Real-time dashboards for patient outcomes, operational KPIs, and revenue trends." },
  { icon: "🔗", title: "EMR/EHR Integration", desc: "Seamless integration with Epic, Cerner, Allscripts, and other major EMR systems." },
  { icon: "💬", title: "WhatsApp Patient Communication", desc: "Automated appointment reminders, two-way messaging, and broadcast capabilities." },
  { icon: "☁️", title: "HIPAA-Compliant Cloud Storage", desc: "Encrypted storage with access controls, audit logging, and automatic backups." },
];

const COMPLIANCE = [
  { region: "USA", flag: "🇺🇸", title: "HIPAA", desc: "All patient data encrypted in transit and at rest. Role-based access, audit logging, and Business Associate Agreement (BAA) support." },
  { region: "Canada", flag: "🇨🇦", title: "PIPEDA", desc: "Systems built to comply with Canada's Personal Information Protection and Electronic Documents Act from the ground up." },
  { region: "UK", flag: "🇬🇧", title: "NHS Data Security", desc: "Aligned with NHS DSPT requirements and UK GDPR for healthcare data, including Data Protection Impact Assessments." },
];

const FAQS = [
  { q: "How long does a healthcare CRM implementation take?", a: "A focused patient management system typically takes 8-14 weeks. This includes requirements gathering, development, compliance validation, and staff training. For UK clients, we align with NHS timelines; for Canadian clients, we ensure PIPEDA compliance throughout. Enterprise systems with EMR integration can take 16-24 weeks." },
  { q: "Are your systems HIPAA, PIPEDA, and NHS compliant?", a: "Yes. Every healthcare system we build is compliant by design. For US clients: HIPAA with BAA support. For Canadian clients: full PIPEDA compliance including consent management and data residency options. For UK clients: NHS DSPT and UK GDPR alignment. We provide documentation and audit trails for regulatory review." },
  { q: "Can you integrate with our existing EMR/EHR?", a: "Absolutely. We've integrated with major EMR systems including Epic, Cerner, Allscripts, Athenahealth, and custom hospital systems. Using HL7/FHIR standards, we ensure secure, real-time data exchange between your CRM and existing clinical systems without disrupting workflows." },
  { q: "What does a healthcare CRM cost in Canada or the UK?", a: "A comprehensive patient management CRM starts from CAD $25,000–$45,000 / £18,000–£32,000. This includes compliance features, appointment management, and patient portal. Enterprise systems with EMR integration, telehealth, and multi-location support are scoped individually. All quotes include compliance validation and are fixed-price." },
];

const WCU_POINTS = [
  { icon: "🏥", text: "8+ years of healthcare technology expertise" },
  { icon: "🌍", text: "Serving Canada, USA & UK markets" },
  { icon: "⚡", text: "565+ projects delivered globally" },
  { icon: "🔒", text: "HIPAA, PIPEDA & NHS compliant delivery" },
  { icon: "🤝", text: "Dedicated client teams in your time zone" },
  { icon: "📱", text: "Full-stack: Web, Mobile, CRM, EMR integration" },
];

const WCU_STATS = [
  { n: 8, s: "+", l: "Years" },
  { n: 565, s: "+", l: "Projects" },
  { n: 100, s: "+", l: "Team" },
  { n: 12, s: "+", l: "Healthcare Clients" },
];

const HEALTHCARE_STATS = [
  { value: "98.5%", label: "Data Uptime", icon: "📊" },
  { value: "24/7", label: "Patient Access", icon: "⏰" },
  { value: "99.9%", label: "Compliance Rate", icon: "🔒" },
  { value: "45min", label: "Avg Response", icon: "⚡" },
];

const INT_OFFICES = [
  { flag: "🇨🇦", city: "Toronto, Canada", phone: "+1 647-XXX-XXXX", email: "healthcare@nncdigital.com", tz: "EST / EDT" },
  { flag: "🇺🇸", city: "New York, USA", phone: "+1 631-XXX-XXXX", email: "healthcare@nncdigital.com", tz: "EST / EDT" },
  { flag: "🇬🇧", city: "London, UK", phone: "+44 20-XXXX-XXXX", email: "healthcare@nncdigital.com", tz: "GMT / BST" },
];

const INDIA_OFFICES = [
  { city: "Bangalore (HQ)", phone: "+91 9900566466", note: "Primary engineering hub" },
  { city: "Mysore", phone: null, note: "Design & QA" },
  { city: "Mumbai", phone: null, note: "Sales & partnerships" },
  { city: "Hyderabad", phone: null, note: "Mobile & cloud" },
];

const SERVICES_LIST = [
  "Patient Management CRM", "Appointment System", "Telehealth Portal",
  "Healthcare Mobile App", "Referral System", "EMR Integration", "Other",
];

const DIAL_CODES = [
  { code: "+1", flag: "🇨🇦" },
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+91", flag: "🇮🇳" },
];

// ─── Validation helpers ────────────────────────────────────────────────────────
const vName = (v: string) => { if (!v.trim()) return "Name is required"; if (v.trim().length < 2) return "Min 2 characters"; return ""; };
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
function buildParams(data: { firstName: string; lastName: string; email: string; phone: string; service: string; message: string }) {
  return {
    first_name: data.firstName,
    last_name: data.lastName || "—",
    email: data.email,
    phone: data.phone,
    service: data.service || "Not specified",
    message: data.message,
    submission_time: new Date().toLocaleString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
    name: `${data.firstName} ${data.lastName}`.trim(),
    title: `New Healthcare Consultation from ${data.firstName} ${data.lastName}`.trim(),
    reply_to: data.email,
  };
}

// ─── Inline error ──────────────────────────────────────────────────────────────
function FieldErr({ msg }: { msg: string }) {
  if (!msg) return null;
  return (
    <p style={{ color: "#ff6b6b", fontSize: 11, marginTop: 3, fontFamily: "'Poppins',sans-serif", display: "flex", alignItems: "center", gap: 4 }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
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
      <span style={{ color: T, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

function SectionH2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 14 }}>{children}</h2>;
}

function GradText({ children }: { children: React.ReactNode }) {
  return <span style={{ background: `linear-gradient(135deg,${T},#1fd1b5)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{children}</span>;
}

function StatsDashboard() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  return (
    <div style={{ background: `linear-gradient(135deg,${N2} 0%,${N1} 100%)`, borderRadius: 24, padding: "clamp(20px,3vw,32px)", border: `1px solid ${T}30`, boxShadow: `0 20px 40px rgba(0,0,0,0.4)`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-50%", right: "-20%", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle,${T}20 0%,transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "clamp(12px,2vw,24px)", marginBottom: "clamp(16px,2.5vw,24px)" }}>
        {HEALTHCARE_STATS.map((stat, i) => (
          <div key={i} onMouseEnter={() => setHoveredStat(i)} onMouseLeave={() => setHoveredStat(null)} style={{ background: hoveredStat === i ? `rgba(0,201,167,0.15)` : "rgba(255,255,255,0.03)", border: `1px solid ${hoveredStat === i ? T : "rgba(255,255,255,0.05)"}`, borderRadius: 16, padding: "clamp(16px,2vw,20px) clamp(12px,1.5vw,16px)", textAlign: "center", transition: "all 0.3s ease", transform: hoveredStat === i ? "translateY(-4px)" : "none" }}>
            <div style={{ fontSize: "clamp(24px,3vw,32px)", marginBottom: 8 }}>{stat.icon}</div>
            <div style={{ fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 900, color: T, marginBottom: 4 }}>{stat.value}</div>
            <div style={{ fontSize: "clamp(11px,1.5vw,13px)", color: "rgba(255,255,255,0.6)" }}>{stat.label}</div>
          </div>
        ))}
      </div>
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 16, padding: "clamp(16px,2vw,20px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <span style={{ fontSize: "clamp(20px,2.5vw,24px)" }}>📈</span>
          <span style={{ color: T, fontSize: "clamp(12px,1.5vw,14px)", fontWeight: 700 }}>REAL-TIME METRICS</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(8px,1.5vw,12px)" }}>
          {[{ label: "System Uptime", val: "99.97%", pct: "99.7%" }, { label: "Patient Satisfaction", val: "94%", pct: "94%" }, { label: "Data Security Score", val: "100%", pct: "100%" }].map((row, i) => (
            <div key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontSize: "clamp(11px,1.3vw,12px)", color: "rgba(255,255,255,0.5)" }}>{row.label}</span>
                <span style={{ fontSize: "clamp(11px,1.3vw,12px)", color: T, fontWeight: 600 }}>{row.val}</span>
              </div>
              <div style={{ height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 3 }}>
                <div style={{ width: row.pct, height: "100%", background: T, borderRadius: 3 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "clamp(16px,2vw,20px)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
        <span style={{ fontSize: "clamp(11px,1.3vw,12px)", color: "rgba(255,255,255,0.5)" }}>All systems operational</span>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function HealthcareIndustryPage() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const r = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
  }, []);

  useEffect(() => { emailjs.init(EMAILJS_PUBLIC_KEY); }, []);

  const isMobile = windowWidth <= 640;
  const isTablet = windowWidth > 640 && windowWidth <= 1024;
  const isDesktop = windowWidth > 1024;

  // ── HERO FORM state ────────────────────────────────────────────────────────
  const [form, setForm] = useState({ name: "", phone: "", dialCode: "+1", email: "", service: "", message: "" });
  const [hErr, setHErr] = useState({ name: "", phone: "", email: "", message: "" });
  const [hTouched, setHTouched] = useState({ name: false, phone: false, email: false, message: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const hRunValidate = (k: string, v: string): boolean => {
    const msgs: Record<string, string> = { name: vName(v), phone: vPhone(v, form.dialCode), email: vEmail(v), message: vMsg(v) };
    if (k in msgs) { setHErr(p => ({ ...p, [k]: msgs[k] })); return !msgs[k]; }
    return true;
  };
  const setF = (k: string, v: string) => { setForm(f => ({ ...f, [k]: v })); if (hTouched[k as keyof typeof hTouched]) hRunValidate(k, v); };
  const hBlur = (k: string) => () => { setHTouched(p => ({ ...p, [k]: true })); hRunValidate(k, form[k as keyof typeof form]); };
  const hValidateAll = (): boolean => {
    setHTouched({ name: true, phone: true, email: true, message: true });
    const e = { name: vName(form.name), phone: vPhone(form.phone, form.dialCode), email: vEmail(form.email), message: vMsg(form.message) };
    setHErr(e); return Object.values(e).every(v => !v);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hValidateAll()) return;
    setLoading(true);
    try {
      const parts = form.name.trim().split(" ");
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, buildParams({
        firstName: parts[0], lastName: parts.slice(1).join(" "),
        email: form.email, phone: `${form.dialCode} ${form.phone}`,
        service: form.service, message: form.message || "(no message)",
      }));
      setSubmitted(true);
      setForm({ name: "", phone: "", dialCode: "+1", email: "", service: "", message: "" });
    } catch (err) { console.error("EmailJS hero:", err); alert("Failed to send. Please try again."); }
    finally { setLoading(false); }
  };

  // ── CTA FORM state ─────────────────────────────────────────────────────────
  const [cForm, setCForm] = useState({ name: "", phone: "", dialCode: "+1", email: "", project: "" });
  const [cErr, setCErr] = useState({ name: "", phone: "", email: "", project: "" });
  const [cTouched, setCTouched] = useState({ name: false, phone: false, email: false, project: false });
  const [cSubmitted, setCSubmitted] = useState(false);
  const [cLoading, setCLoading] = useState(false);

  const cRunValidate = (k: string, v: string): boolean => {
    const msgs: Record<string, string> = { name: vName(v), phone: vPhone(v, cForm.dialCode), email: vEmail(v), project: vMsg(v) };
    if (k in msgs) { setCErr(p => ({ ...p, [k]: msgs[k] })); return !msgs[k]; }
    return true;
  };
  const setCF = (k: string, v: string) => { setCForm(f => ({ ...f, [k]: v })); if (cTouched[k as keyof typeof cTouched]) cRunValidate(k, v); };
  const cBlur = (k: string) => () => { setCTouched(p => ({ ...p, [k]: true })); cRunValidate(k, cForm[k as keyof typeof cForm]); };
  const cValidateAll = (): boolean => {
    setCTouched({ name: true, phone: true, email: true, project: true });
    const e = { name: vName(cForm.name), phone: vPhone(cForm.phone, cForm.dialCode), email: vEmail(cForm.email), project: vMsg(cForm.project) };
    setCErr(e); return Object.values(e).every(v => !v);
  };
  const handleCSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cValidateAll()) return;
    setCLoading(true);
    try {
      const parts = cForm.name.trim().split(" ");
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, buildParams({
        firstName: parts[0], lastName: parts.slice(1).join(" "),
        email: cForm.email, phone: `${cForm.dialCode} ${cForm.phone}`,
        service: "Healthcare Consultation", message: cForm.project,
      }));
      setCSubmitted(true);
      setCForm({ name: "", phone: "", dialCode: "+1", email: "", project: "" });
    } catch (err) { console.error("EmailJS CTA:", err); alert("Failed to send. Please try again."); }
    finally { setCLoading(false); }
  };

  // ── Other UI state ─────────────────────────────────────────────────────────
  const [story, setStory] = useState(0);
  const [faq, setFaq] = useState<number | null>(0);
  const [gTab, setGTab] = useState<"int" | "india">("int");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getSectionPadding = () => isMobile ? "30px 20px" : isTablet ? "80px 32px" : "50px 48px";
  const getGridColumns = (mobile: number, tablet: number, desktop: number) =>
    isMobile ? `repeat(${mobile},1fr)` : isTablet ? `repeat(${tablet},1fr)` : `repeat(${desktop},1fr)`;

  const iS: React.CSSProperties = { width: "100%", padding: isMobile ? "10px 14px" : "12px 16px", borderRadius: 10, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", color: "#fff", fontSize: isMobile ? 13 : 14, fontFamily: "'Poppins',sans-serif", outline: "none", transition: "all 0.3s ease" };
  const iSE: React.CSSProperties = { ...iS, borderColor: "#ff4444", background: "rgba(255,68,68,.08)" };
  const iSLg: React.CSSProperties = { ...iS, padding: isMobile ? "12px 16px" : "14px 18px", fontSize: isMobile ? 14 : 15 };
  const iSLgE: React.CSSProperties = { ...iSLg, borderColor: "#ff4444", background: "rgba(255,68,68,.08)" };

  return (
    <>
      <Navbar />

      {/* ══ MODULE 1 — HERO + INLINE FORM ══════════════════════════════════════ */}
      <section style={{ padding: isMobile ? "40px 20px 60px" : isTablet ? "100px 32px 70px" : "60px 48px 80px", background: `linear-gradient(135deg,${N0} 0%,#041628 50%,${N0} 100%)`, position: "relative", overflow: "hidden", minHeight: isMobile ? "auto" : "90vh", display: "flex", alignItems: "center" }}>
        <Particles />
        {!isMobile && (
          <>
            <div style={{ position: "absolute", width: isTablet ? 500 : 650, height: isTablet ? 500 : 650, borderRadius: "50%", background: `radial-gradient(circle,${T}18 0%,transparent 65%)`, top: "40%", left: "-10%", transform: "translateY(-50%)", animation: "pulse 8s ease-in-out infinite", pointerEvents: "none", zIndex: 1 }} />
            <div style={{ position: "absolute", width: isTablet ? 300 : 400, height: isTablet ? 300 : 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 65%)", top: "10%", right: "5%", animation: "pulse 10s ease-in-out infinite", pointerEvents: "none", zIndex: 1 }} />
          </>
        )}
        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : isTablet ? 40 : 60, alignItems: "center", position: "relative", zIndex: 3 }}>
          {/* Left */}
          <div>
            <SectionBadge label="Healthcare Technology" />
            <h1 style={{ fontSize: isMobile ? "clamp(28px,7vw,32px)" : isTablet ? "clamp(32px,4vw,38px)" : "clamp(42px,4vw,54px)", fontWeight: 900, lineHeight: 1.2, marginBottom: isMobile ? 16 : 20, color: "#fff" }}>
              Digital Systems for <GradText>Healthcare Providers</GradText> in Canada, USA & UK
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 14 : isTablet ? 15 : 16, lineHeight: 1.8, marginBottom: isMobile ? 24 : 32, maxWidth: isMobile ? "100%" : 540 }}>
              Healthcare organisations face unique challenges — patient data privacy, appointment management, referral tracking, and regulatory compliance. We build custom digital systems that address these head-on.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: isMobile ? 24 : 32 }}>
              {[{ icon: "🔒", label: "HIPAA Ready" }, { icon: "🍁", label: "PIPEDA Compliant" }, { icon: "🇬🇧", label: "NHS Aligned" }, { icon: "🏥", label: "HL7/FHIR" }].map((b, i) => (
                <span key={i} style={{ padding: isMobile ? "5px 10px" : "6px 12px", borderRadius: 100, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.8)", fontSize: isMobile ? 11 : 12, fontWeight: 500, display: "flex", alignItems: "center", gap: 4 }}>
                  <span>{b.icon}</span>{b.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Hero Form */}
          <div style={{ background: "rgba(8,20,40,0.85)", border: `1px solid ${T}30`, borderRadius: 24, padding: isMobile ? "20px 16px" : isTablet ? "28px 24px" : "32px 28px", backdropFilter: "blur(16px)", boxShadow: "0 32px 64px rgba(0,0,0,0.5)" }}>
            <h3 style={{ fontSize: isMobile ? 18 : isTablet ? 20 : 22, fontWeight: 700, marginBottom: isMobile ? 16 : 20 }}>
              Get a Free <span style={{ color: T }}>Consultation</span>
            </h3>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: isMobile ? 40 : 48, marginBottom: 16 }}>🏥</div>
                <h4 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, marginBottom: 8 }}>Request Received!</h4>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 13 : 14, marginBottom: 20 }}>A healthcare specialist will contact you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} style={{ padding: "8px 16px", borderRadius: 100, border: "none", background: T, color: "#000", fontWeight: 600, fontSize: isMobile ? 13 : 14, cursor: "pointer" }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: isMobile ? 12 : 16 }}>
                <div>
                  <input className="fi-hc" style={hTouched.name && hErr.name ? iSE : iS} placeholder="Full Name *" value={form.name} onChange={e => setF("name", e.target.value)} onBlur={hBlur("name")} />
                  {hTouched.name && <FieldErr msg={hErr.name} />}
                </div>
                <div>
                  <div style={{ display: "flex", gap: 8, flexDirection: isMobile ? "column" : "row" }}>
                    <select style={{ ...iS, width: isMobile ? "100%" : 100 }} value={form.dialCode} onChange={e => setF("dialCode", e.target.value)}>
                      {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                    </select>
                    <input className="fi-hc" style={{ ...(hTouched.phone && hErr.phone ? iSE : iS), flex: 1 }} type="tel" placeholder="Phone Number *" value={form.phone} onChange={e => setF("phone", e.target.value)} onBlur={hBlur("phone")} />
                  </div>
                  {hTouched.phone && <FieldErr msg={hErr.phone} />}
                </div>
                <div>
                  <input className="fi-hc" style={hTouched.email && hErr.email ? iSE : iS} type="email" placeholder="Business Email *" value={form.email} onChange={e => setF("email", e.target.value)} onBlur={hBlur("email")} />
                  {hTouched.email && <FieldErr msg={hErr.email} />}
                </div>
                <select style={iS} value={form.service} onChange={e => setF("service", e.target.value)}>
                  <option value="">Service of Interest</option>
                  {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <div>
                  <textarea className="fi-hc" style={{ ...(hTouched.message && hErr.message ? iSE : iS), minHeight: isMobile ? 60 : 80, resize: "vertical" }} placeholder="Message *" value={form.message} onChange={e => setF("message", e.target.value)} onBlur={hBlur("message")} />
                  {hTouched.message && <FieldErr msg={hErr.message} />}
                </div>
                <button type="submit" disabled={loading} style={{ width: "100%", padding: "12px", borderRadius: 100, border: "none", background: loading ? T + "80" : `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: isMobile ? 14 : 15, cursor: loading ? "wait" : "pointer" }}>
                  {loading ? "Sending…" : "Get Free Consultation →"}
                </button>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: isMobile ? 10 : 11, textAlign: "center" }}>🔒 No spam. Ever.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ══ MODULE 2 — CLIENT LOGOS ═════════════════════════════════════════════ */}
      <section style={{padding:getSectionPadding(),background:N1}}>
        <div style={{textAlign:"center",marginBottom:isMobile?30:40,padding:"0 24px"}}>
          <p style={{fontWeight:600,fontSize:isMobile?10:11.5,color:"rgba(255,255,255,.28)",letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:12}}>Our Happy Clients</p>
          <h2 style={{fontSize:isMobile?"22px":"28px",fontWeight:800,color:"#fff",letterSpacing:"-0.02em",lineHeight:1.25,margin:0}}>
            Trusted by Businesses Across <GradText>North America &amp; the UK</GradText>
          </h2>
        </div>

        {/* Row 1 */}
        <div style={{overflow:"hidden",marginBottom:isMobile?16:20}}>
          <div className="cl-track" style={{animation:"marquee 30s linear infinite"}}>
            {[...LOGOS.slice(0,6),...LOGOS.slice(0,6)].map((logo,i)=>(
              <div key={i} style={{flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",height:isMobile?60:70,padding:isMobile?"8px 14px":"10px 18px",background:"#fff",borderRadius:10,margin:"0 8px",boxShadow:"0 6px 20px rgba(0,0,0,0.15)",opacity:.9,transition:"transform .3s,box-shadow .3s"}}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="scale(1.08)";el.style.boxShadow="0 10px 28px rgba(0,0,0,0.25)";}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="";el.style.boxShadow="0 6px 20px rgba(0,0,0,0.15)";}}>
                <img src={`/${logo}`} alt="" style={{height:isMobile?30:40,width:"auto",maxWidth:isMobile?90:120,objectFit:"contain"}}/>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div style={{overflow:"hidden",marginBottom:isMobile?16:20}}>
          <div className="cl-track" style={{animation:"marqueeReverse 35s linear infinite"}}>
            {[...LOGOS.slice(6,12),...LOGOS.slice(6,12)].map((logo,i)=>(
              <div key={i} style={{flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",height:isMobile?60:70,padding:isMobile?"8px 14px":"10px 18px",background:"#fff",borderRadius:10,margin:"0 8px",boxShadow:"0 6px 20px rgba(0,0,0,0.15)",opacity:.9,transition:"transform .3s,box-shadow .3s"}}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="scale(1.08)";el.style.boxShadow="0 10px 28px rgba(0,0,0,0.25)";}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="";el.style.boxShadow="0 6px 20px rgba(0,0,0,0.15)";}}>
                <img src={`/${logo}`} alt="" style={{height:isMobile?30:40,width:"auto",maxWidth:isMobile?90:120,objectFit:"contain"}}/>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div style={{overflow:"hidden"}}>
          <div className="cl-track" style={{animation:"marquee 40s linear infinite"}}>
            {[...LOGOS.slice(12,18),...LOGOS.slice(12,18)].map((logo,i)=>(
              <div key={i} style={{flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",height:isMobile?60:70,padding:isMobile?"8px 14px":"10px 18px",background:"#fff",borderRadius:10,margin:"0 8px",boxShadow:"0 6px 20px rgba(0,0,0,0.15)",opacity:.9,transition:"transform .3s,box-shadow .3s"}}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="scale(1.08)";el.style.boxShadow="0 10px 28px rgba(0,0,0,0.25)";}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="";el.style.boxShadow="0 6px 20px rgba(0,0,0,0.15)";}}>
                <img src={`/${logo}`} alt="" style={{height:isMobile?30:40,width:"auto",maxWidth:isMobile?90:120,objectFit:"contain"}}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MODULE 2b — SUCCESS STORIES ════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: N1 }}>
        <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 32 }}>
          <SectionBadge label="Success Stories" />
          <SectionH2>Healthcare <GradText>Success Stories</GradText></SectionH2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: getGridColumns(1, 2, 3), gap: isMobile ? 16 : isTablet ? 20 : 24 }}>
          {SUCCESS_STORIES.map((s, i) => (
            <div key={i} onMouseEnter={() => setHoveredCard(i)} onMouseLeave={() => setHoveredCard(null)} style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${hoveredCard === i ? T : "rgba(255,255,255,0.05)"}`, borderRadius: 24, padding: isMobile ? 20 : 24, transition: "all 0.3s ease", transform: hoveredCard === i && !isMobile ? "translateY(-4px)" : "none" }}>
              <div style={{ fontSize: isMobile ? 40 : 48, marginBottom: isMobile ? 12 : 16 }}>{s.icon}</div>
              <h3 style={{ fontSize: isMobile ? 15 : 16, fontWeight: 700, color: T, marginBottom: isMobile ? 8 : 12 }}>{s.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 13 : 14, lineHeight: 1.7, marginBottom: isMobile ? 16 : 20 }}>{s.description}</p>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: isMobile ? 12 : 16 }}>
                {s.metrics.map((m, j) => (
                  <div key={j} style={{ textAlign: "center" }}>
                    <div style={{ color: T, fontSize: isMobile ? 16 : 18, fontWeight: 700 }}>{m.value}</div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: isMobile ? 10 : 11 }}>{m.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {s.tags.map((tag, j) => (
                  <span key={j} style={{ padding: "4px 8px", borderRadius: 100, background: "rgba(0,201,167,0.1)", border: `1px solid ${T}30`, color: T, fontSize: isMobile ? 10 : 11, fontWeight: 600 }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: isMobile ? 20 : 28 }}>
          {SUCCESS_STORIES.map((_, i) => (
            <button key={i} onClick={() => setStory(i)} style={{ width: story === i ? 24 : 8, height: 8, borderRadius: 100, background: story === i ? T : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer" }} />
          ))}
        </div>
      </section>

      {/* ══ MODULE 3 — DIGITAL SOLUTIONS ═══════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: N2 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 32 }}>
            <SectionBadge label="What We Build" />
            <SectionH2>Healthcare <GradText>Digital Solutions</GradText> We Build</SectionH2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: getGridColumns(1, 2, 3), gap: isMobile ? 16 : isTablet ? 20 : 24 }}>
            {SOLUTIONS.map((s, i) => (
              <div key={i} onMouseEnter={() => setHoveredCard(i + 10)} onMouseLeave={() => setHoveredCard(null)} style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${hoveredCard === i + 10 ? T : "rgba(255,255,255,0.05)"}`, borderRadius: 20, padding: isMobile ? 16 : 20, transition: "all 0.3s ease", transform: hoveredCard === i + 10 && !isMobile ? "translateY(-4px)" : "none" }}>
                <div style={{ fontSize: isMobile ? 28 : 36, marginBottom: isMobile ? 12 : 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: isMobile ? 15 : 16, fontWeight: 700, color: "#fff", marginBottom: isMobile ? 6 : 8 }}>{s.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 12 : 13, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MODULE 4 — COMPLIANCE ══════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: `linear-gradient(135deg,${N1} 0%,${N0} 100%)` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 32 }}>
            <SectionBadge label="Compliance First" />
            <SectionH2>Built for Compliance in <GradText>Canada, USA & UK</GradText></SectionH2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: getGridColumns(1, 2, 3), gap: isMobile ? 16 : isTablet ? 20 : 24 }}>
            {COMPLIANCE.map((c, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 20, padding: isMobile ? 20 : 24, textAlign: "center" }}>
                <div style={{ fontSize: isMobile ? 40 : 48, marginBottom: isMobile ? 12 : 16 }}>{c.flag}</div>
                <h3 style={{ color: T, fontSize: isMobile ? 18 : 20, fontWeight: 700, marginBottom: 4 }}>{c.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: isMobile ? 13 : 14, marginBottom: 8 }}>{c.region}</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 12 : 13, lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MODULE 5 — WHY CHOOSE US ════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: N1 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 32 }}>
            <SectionBadge label="Why Choose Us" />
            <SectionH2>Your Trusted <GradText>Healthcare Technology</GradText> Partner</SectionH2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : isTablet ? 32 : 48, alignItems: "center" }}>
            <div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: isMobile ? 14 : 15, lineHeight: 1.8, marginBottom: 20 }}>
                Backed by <strong style={{ color: T }}>Nakshatra Namaha Creations Pvt. Ltd.</strong> — 8+ years of experience, 565+ projects delivered. Dedicated client teams in Canada, USA, and UK. Fully compliant with HIPAA, PIPEDA, and NHS standards. Long-term partnership focused on your success.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                {WCU_POINTS.map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 18 }}>{p.icon}</span>
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: isMobile ? 13 : 14 }}>{p.text}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: isMobile ? 8 : 12 }}>
                {WCU_STATS.map((s, i) => (
                  <div key={i} style={{ textAlign: "center", padding: isMobile ? "8px" : "0" }}>
                    <div style={{ fontSize: isMobile ? 18 : 22, fontWeight: 900, color: T }}><Counter to={s.n} sfx={s.s} /></div>
                    <div style={{ fontSize: isMobile ? 10 : 11, color: "rgba(255,255,255,0.4)" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <StatsDashboard />
          </div>
        </div>
      </section>

      {/* ══ MODULE 6 — GLOBAL PRESENCE ═════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: N1 }}>
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
      </section>

      {/* ══ MODULE 7 — FAQS ════════════════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: N1 }}>
        <div style={{ marginBottom: isMobile ? 40 : 60 }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 24 : 32 }}>
            <SectionBadge label="FAQs" />
            <SectionH2>Frequently Asked <GradText>Questions</GradText></SectionH2>
          </div>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            {FAQS.map((item, i) => (
              <div key={i} style={{ marginBottom: 12, border: `1px solid ${faq === i ? T : "rgba(255,255,255,0.05)"}`, borderRadius: 16, background: faq === i ? "rgba(0,201,167,0.05)" : "rgba(255,255,255,0.02)", overflow: "hidden" }}>
                <button onClick={() => setFaq(faq === i ? null : i)} style={{ width: "100%", padding: isMobile ? "14px 16px" : "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "transparent", border: "none", color: "#fff", fontSize: isMobile ? 13 : 14, fontWeight: 600, textAlign: "left", cursor: "pointer" }}>
                  <span>{item.q}</span>
                  <span style={{ color: T, fontSize: isMobile ? 18 : 20 }}>{faq === i ? "−" : "+"}</span>
                </button>
                {faq === i && (
                  <div style={{ padding: isMobile ? "0 16px 16px" : "0 20px 20px" }}>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 12 : 13, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MODULE 8 — FINAL CTA FORM ══════════════════════════════════════════ */}
      <section style={{ padding: getSectionPadding(), background: N1 }}>
        <div style={{ background: `linear-gradient(135deg,${T}10,#8B5CF610)`, border: `1px solid ${T}30`, borderRadius: 32, padding: isMobile ? "24px 16px" : isTablet ? "32px 24px" : "40px", textAlign: "center" }}>
          <SectionBadge label="Get Started" />
          <SectionH2>Ready to Build Your <GradText>Healthcare Solution?</GradText></SectionH2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 13 : 14, marginBottom: 24 }}>
            Tell us about your project. We&apos;ll respond within 24 hours with a free consultation.
          </p>
          {cSubmitted ? (
            <div style={{ padding: "20px 0" }}>
              <div style={{ fontSize: isMobile ? 40 : 48, marginBottom: 16 }}>🏥</div>
              <h4 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, marginBottom: 8 }}>Message Sent!</h4>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? 13 : 14, marginBottom: 20 }}>A healthcare specialist will contact you within 24 hours.</p>
              <button onClick={() => setCSubmitted(false)} style={{ padding: "8px 16px", borderRadius: 100, border: "none", background: T, color: "#000", fontWeight: 600, fontSize: isMobile ? 13 : 14, cursor: "pointer" }}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleCSubmit} noValidate style={{ maxWidth: 500, margin: "0 auto" }}>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12, marginBottom: 12 }}>
                <div>
                  <input className="fi-hc" style={cTouched.name && cErr.name ? iSLgE : iSLg} placeholder="Full Name *" value={cForm.name} onChange={e => setCF("name", e.target.value)} onBlur={cBlur("name")} />
                  {cTouched.name && <FieldErr msg={cErr.name} />}
                </div>
                <div>
                  <div style={{ display: "flex", gap: 8, flexDirection: isMobile ? "column" : "row" }}>
                    <select style={{ ...iSLg, width: isMobile ? "100%" : 100 }} value={cForm.dialCode} onChange={e => setCF("dialCode", e.target.value)}>
                      {DIAL_CODES.map((d, i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                    </select>
                    <input className="fi-hc" style={{ ...(cTouched.phone && cErr.phone ? iSLgE : iSLg), flex: 1 }} type="tel" placeholder="Phone" value={cForm.phone} onChange={e => setCF("phone", e.target.value)} onBlur={cBlur("phone")} />
                  </div>
                  {cTouched.phone && <FieldErr msg={cErr.phone} />}
                </div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <input className="fi-hc" style={cTouched.email && cErr.email ? iSLgE : iSLg} type="email" placeholder="Business Email *" value={cForm.email} onChange={e => setCF("email", e.target.value)} onBlur={cBlur("email")} />
                {cTouched.email && <FieldErr msg={cErr.email} />}
              </div>
              <div style={{ marginBottom: 20 }}>
                <textarea className="fi-hc" style={{ ...(cTouched.project && cErr.project ? iSLgE : iSLg), minHeight: isMobile ? 80 : 100, resize: "vertical" }} placeholder="Project Description *" value={cForm.project} onChange={e => setCF("project", e.target.value)} onBlur={cBlur("project")} />
                {cTouched.project && <FieldErr msg={cErr.project} />}
              </div>
              <button type="submit" disabled={cLoading} style={{ width: "100%", padding: "12px", borderRadius: 100, border: "none", background: cLoading ? T + "80" : `linear-gradient(135deg,${T},${TD})`, color: "#000", fontWeight: 700, fontSize: isMobile ? 14 : 15, cursor: cLoading ? "wait" : "pointer" }}>
                {cLoading ? "Sending…" : "Submit — Free Consultation"}
              </button>
            </form>
          )}
        </div>
      </section>

      <style>{`
        @keyframes pulse   { 0%,100%{opacity:.4} 50%{opacity:.8} }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes marqueeReverse { from{transform:translateX(-50%)} to{transform:translateX(0)} }
        .cl-track { display:flex; width:max-content; animation:marquee 30s linear infinite; }
        .cl-track:hover { animation-play-state:paused; }
        .fi-hc:focus { border-color:rgba(0,201,167,0.5)!important; background:rgba(0,201,167,0.06)!important; }
        .fi-hc::placeholder { color:rgba(255,255,255,0.28); }
        input:hover,select:hover,textarea:hover { border-color:rgba(0,201,167,0.4)!important; }
      `}</style>
    </>
  );
}