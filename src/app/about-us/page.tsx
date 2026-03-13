// // // // // "use client";
// // // // // import { useState } from "react";
// // // // // import Image from "next/image";
// // // // // import { T } from "../components/tokens";
// // // // // import Reveal from "../components/Reveal";
// // // // // import Navbar from "../components/Navbar";
// // // // // import Footer from "../components/Footer";

// // // // // const VALUES = [
// // // // //   { icon: "🎯", title: "Outcomes Over Outputs",   desc: "Results, not features shipped." },
// // // // //   { icon: "🔒", title: "Compliance First",         desc: "GDPR / PIPEDA / CCPA in every system." },
// // // // //   { icon: "💡", title: "Radical Transparency",     desc: "Fixed prices. Weekly demos. No jargon." },
// // // // //   { icon: "🤝", title: "People Before Technology", desc: "Training & adoption matter." },
// // // // //   { icon: "🏗️", title: "Long-Term Thinking",       desc: "Systems designed to last 5+ years." },
// // // // //   { icon: "⭐", title: "Client First, Always",      desc: "Every decision starts with the client." },
// // // // // ];

// // // // // const STATS = [
// // // // //   { value: "8+",   label: "Years of Excellence" },
// // // // //   { value: "565+", label: "Projects Delivered" },
// // // // //   { value: "100+", label: "Team Members" },
// // // // //   { value: "3",    label: "International Markets" },
// // // // // ];

// // // // // const PARENT_SERVICES = [
// // // // //   "Website Development", "Mobile App Development", "Digital Marketing",
// // // // //   "Graphic Design", "2D Animation", "Corporate Video Production",
// // // // //   "B2B Marketing", "SEO & Performance Marketing",
// // // // // ];

// // // // // const COMPARISON = [
// // // // //   { metric: "Years in Business",  parent: "8+ Years",                               nnc: "Launched for CA/US/UK Market" },
// // // // //   { metric: "Projects Delivered", parent: "565+",                                   nnc: "Growing Portfolio in NA & UK" },
// // // // //   { metric: "Team Size",          parent: "100+ Members",                           nnc: "Dedicated International Team" },
// // // // //   { metric: "Offices",            parent: "Bangalore · Mysore · Mumbai · Hyderabad", nnc: "Toronto · New York · London" },
// // // // // ];

// // // // // const INT_OFFICES = [
// // // // //   { flag: "🇨🇦", city: "Toronto, Canada", phone: "+1 647-XXX-XXXX" },
// // // // //   { flag: "🇺🇸", city: "New York, USA",   phone: "+1 631-XXX-XXXX" },
// // // // //   { flag: "🇬🇧", city: "London, UK",      phone: "+44 20-XXXX-XXXX" },
// // // // // ];

// // // // // const INDIA_OFFICES = [
// // // // //   { flag: "🇮🇳", city: "Bangalore HQ", phone: "+91 9900566466" },
// // // // //   { flag: "🇮🇳", city: "Mysore",       phone: null },
// // // // //   { flag: "🇮🇳", city: "Mumbai",       phone: null },
// // // // //   { flag: "🇮🇳", city: "Hyderabad",    phone: null },
// // // // // ];

// // // // // const WHY_SOLUTIONS = [
// // // // //   "Dedicated project managers in North American and UK time zones",
// // // // //   "GDPR, PIPEDA, and CCPA-compliant systems from day one",
// // // // //   "Full creative and technical capability of a 100+ person studio",
// // // // //   "Transparent, fixed-price proposals — no surprises",
// // // // //   "Long-term partnership, not one-and-done project delivery",
// // // // // ];

// // // // // export default function AboutPage() {
// // // // //   const [hoveredVal, setHoveredVal] = useState<number | null>(null);

// // // // //   return (
// // // // //     <>
// // // // //       <Navbar />

// // // // //       <main style={{
// // // // //         background: T.navy0,
// // // // //         fontFamily: "'Outfit', sans-serif",
// // // // //         color: "#fff",
// // // // //         overflowX: "hidden",
// // // // //       }}>
// // // // //         <style>{`
// // // // //           @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
// // // // //           @keyframes heroFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
// // // // //           @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
// // // // //           @keyframes pulse { 0%,100%{transform:scale(1);opacity:.15} 50%{transform:scale(1.08);opacity:.28} }
// // // // //           .about-cta-btn {
// // // // //             padding: 15px 36px; border-radius: 10px; font-family:'Outfit',sans-serif;
// // // // //             font-weight:700; font-size:15px; cursor:pointer;
// // // // //             transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
// // // // //           }
// // // // //           .about-cta-btn:hover { transform: translateY(-3px); }
// // // // //           .val-card { transition: transform .25s ease, border-color .25s ease, background .25s ease; }
// // // // //           .val-card:hover { transform: translateY(-5px); }
// // // // //           .comp-row:nth-child(even) { background: rgba(255,255,255,.02); }
// // // // //           .why-item { transition: transform .2s ease; }
// // // // //           .why-item:hover { transform: translateX(6px); }
// // // // //         `}</style>

// // // // //         {/* ── MODULE 1 HERO ── */}
// // // // //         <section style={{
// // // // //           minHeight: "92vh", display: "flex", alignItems: "center",
// // // // //           padding: "120px 48px 80px",
// // // // //           background: `linear-gradient(135deg, #030d1e 0%, #051628 40%, ${T.navy0} 100%)`,
// // // // //           position: "relative", overflow: "hidden",
// // // // //         }}>
// // // // //           {/* Grid lines */}
// // // // //           <div style={{
// // // // //             position: "absolute", inset: 0, pointerEvents: "none",
// // // // //             backgroundImage: `linear-gradient(rgba(0,201,167,.04) 1px, transparent 1px),
// // // // //                               linear-gradient(90deg, rgba(0,201,167,.04) 1px, transparent 1px)`,
// // // // //             backgroundSize: "60px 60px",
// // // // //           }} />

// // // // //           {/* Glow orb */}
// // // // //           <div style={{
// // // // //             position: "absolute", width: 700, height: 700, borderRadius: "50%",
// // // // //             background: `radial-gradient(circle, ${T.teal}20 0%, transparent 65%)`,
// // // // //             top: "50%", right: -200, transform: "translateY(-50%)",
// // // // //             animation: "pulse 7s ease-in-out infinite", pointerEvents: "none",
// // // // //           }} />

// // // // //           {/* Rotating ring */}
// // // // //           <div style={{
// // // // //             position: "absolute", width: 500, height: 500, borderRadius: "50%",
// // // // //             border: "1px dashed rgba(0,201,167,.12)",
// // // // //             top: "50%", right: -100, transform: "translateY(-50%)",
// // // // //             animation: "spin 40s linear infinite", pointerEvents: "none",
// // // // //           }} />

// // // // //           <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
// // // // //             <Reveal>
// // // // //               <div style={{ maxWidth: 760 }}>
// // // // //                 <div style={{
// // // // //                   display: "inline-flex", alignItems: "center", gap: 10,
// // // // //                   background: "rgba(0,201,167,.08)", border: "1px solid rgba(0,201,167,.25)",
// // // // //                   borderRadius: 30, padding: "7px 18px", marginBottom: 32,
// // // // //                 }}>
// // // // //                   <div style={{ width: 7, height: 7, borderRadius: "50%", background: T.teal, boxShadow: `0 0 8px ${T.teal}` }} />
// // // // //                   <span style={{ fontSize: 11.5, fontWeight: 700, color: T.teal, letterSpacing: "0.1em", textTransform: "uppercase" }}>
// // // // //                     About NNC Digital Solutions
// // // // //                   </span>
// // // // //                 </div>

// // // // //                 <h1 style={{
// // // // //                   fontSize: "clamp(32px,4.5vw,62px)", fontWeight: 900,
// // // // //                   lineHeight: 1.12, marginBottom: 28, letterSpacing: "-0.02em",
// // // // //                   fontFamily: "'Outfit', sans-serif",
// // // // //                 }}>
// // // // //                   Built on{" "}
// // // // //                   <span style={{
// // // // //                     background: `linear-gradient(135deg,${T.teal},${T.tealLight})`,
// // // // //                     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
// // // // //                   }}>Indian Tech Excellence.</span>
// // // // //                   <br />Built for Canadian,{" "}
// // // // //                   <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "rgba(255,255,255,.85)" }}>
// // // // //                     US & UK Business.
// // // // //                   </span>
// // // // //                 </h1>

// // // // //                 <p style={{
// // // // //                   fontSize: "clamp(15px,1.4vw,18px)", color: "rgba(255,255,255,.55)",
// // // // //                   lineHeight: 1.85, marginBottom: 44, maxWidth: 620,
// // // // //                 }}>
// // // // //                   NNC Digital Solutions is the international technology arm of Nakshatra Namaha Creations Pvt. Ltd. — one of Bangalore&apos;s most respected digital studios. We were born from a belief that the deep technology expertise that has transformed thousands of Indian businesses deserves to be accessible to growing companies in Canada, the USA, and the United Kingdom.
// // // // //                 </p>

// // // // //                 <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
// // // // //                   <button className="about-cta-btn" style={{
// // // // //                     background: `linear-gradient(135deg,${T.teal},${T.tealDark})`,
// // // // //                     color: "#000", border: "none",
// // // // //                     boxShadow: `0 8px 32px rgba(0,201,167,.3)`,
// // // // //                   }}>Book a Free Consultation</button>
// // // // //                   <button className="about-cta-btn" style={{
// // // // //                     background: "transparent", color: "#fff",
// // // // //                     border: "1px solid rgba(255,255,255,.2)",
// // // // //                   }}>View Our Work →</button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </Reveal>

// // // // //             {/* Stat strip */}
// // // // //             <Reveal delay={0.2}>
// // // // //               <div style={{
// // // // //                 display: "grid", gridTemplateColumns: "repeat(4,1fr)",
// // // // //                 gap: 1, marginTop: 72,
// // // // //                 background: "rgba(255,255,255,.06)",
// // // // //                 borderRadius: 16, overflow: "hidden",
// // // // //                 border: "1px solid rgba(255,255,255,.08)",
// // // // //               }}>
// // // // //                 {STATS.map((s, i) => (
// // // // //                   <div key={i} style={{
// // // // //                     padding: "28px 24px", textAlign: "center",
// // // // //                     background: "rgba(5,14,30,.8)",
// // // // //                     borderRight: i < 3 ? "1px solid rgba(255,255,255,.06)" : "none",
// // // // //                   }}>
// // // // //                     <p style={{
// // // // //                       fontSize: "clamp(28px,3vw,40px)", fontWeight: 900, margin: 0,
// // // // //                       background: `linear-gradient(135deg,${T.teal},${T.tealLight})`,
// // // // //                       WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
// // // // //                     }}>{s.value}</p>
// // // // //                     <p style={{ fontSize: 12, color: "rgba(255,255,255,.4)", margin: "6px 0 0", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</p>
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </Reveal>
// // // // //           </div>
// // // // //         </section>

// // // // //         {/* ── MODULE 2 THE NNC STORY ── */}
// // // // //         <section style={{ padding: "100px 48px", background: T.navy0 }}>
// // // // //           <div style={{ maxWidth: 1100, margin: "0 auto" }}>
// // // // //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>

// // // // //               <Reveal>
// // // // //                 <div>
// // // // //                   <p style={{ color: T.teal, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>— Our Story —</p>
// // // // //                   <h2 style={{ fontSize: "clamp(24px,2.8vw,38px)", fontWeight: 900, lineHeight: 1.2, marginBottom: 28 }}>
// // // // //                     From Bangalore to Canada —{" "}
// // // // //                     <span style={{ background: `linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
// // // // //                       The NNC Digital Story
// // // // //                     </span>
// // // // //                   </h2>
// // // // //                   <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
// // // // //                     {[
// // // // //                       "Nakshatra Namaha Creations Pvt. Ltd. was founded in Bangalore, India — a city synonymous with world-class software engineering. Over 8+ years, the company built a reputation as one of Karnataka's most trusted digital studios, delivering 565+ projects across website development, mobile apps, digital marketing, corporate video, 2D animation, B2B marketing, and more.",
// // // // //                       "In response to increasing demand from businesses in Canada, the United States, and the United Kingdom who needed a trustworthy offshore technology partner — NNC Digital Solutions was launched as Nakshatra Namaha Creations' dedicated international brand.",
// // // // //                       "NNC Digital is not a new company trying to build a reputation. It is the international expression of a decade of proven capability — backed by the people, processes, and portfolio of one of India's most capable digital studios.",
// // // // //                     ].map((para, i) => (
// // // // //                       <p key={i} style={{ color: "rgba(255,255,255,.52)", fontSize: 14.5, lineHeight: 1.85, margin: 0 }}>{para}</p>
// // // // //                     ))}
// // // // //                   </div>

// // // // //                   <div style={{
// // // // //                     marginTop: 32, padding: "18px 22px", borderRadius: 12,
// // // // //                     background: "rgba(0,201,167,.06)", border: "1px solid rgba(0,201,167,.2)",
// // // // //                     display: "flex", alignItems: "center", gap: 14,
// // // // //                   }}>
// // // // //                     <span style={{ fontSize: 28 }}>🇮🇳</span>
// // // // //                     <div>
// // // // //                       <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: 0 }}>Bangalore → Toronto · New York · London</p>
// // // // //                       <p style={{ fontSize: 12, color: "rgba(255,255,255,.4)", margin: "3px 0 0" }}>One trusted studio. Three international markets.</p>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </Reveal>

// // // // //               {/* Visual side */}
// // // // //               <Reveal delay={0.15}>
// // // // //                 <div style={{ position: "relative" }}>
// // // // //                   <div style={{
// // // // //                     borderRadius: 24, overflow: "hidden",
// // // // //                     border: "1px solid rgba(0,201,167,.2)",
// // // // //                     boxShadow: `0 32px 80px rgba(0,0,0,.5), 0 0 60px rgba(0,201,167,.1)`,
// // // // //                     position: "relative", aspectRatio: "4/3",
// // // // //                   }}>
// // // // //                     <Image
// // // // //                       src="/NNCLOGO.jpg"
// // // // //                       alt="NNC Digital Solutions"
// // // // //                       fill
// // // // //                       style={{ objectFit: "cover" }}
// // // // //                     />
// // // // //                     <div style={{
// // // // //                       position: "absolute", inset: 0,
// // // // //                       background: "linear-gradient(to top, rgba(5,14,30,.85) 0%, transparent 50%)",
// // // // //                     }} />
// // // // //                     <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
// // // // //                       <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: 0 }}>NNC Digital Solutions</p>
// // // // //                       <p style={{ fontSize: 11.5, color: T.teal, margin: "4px 0 0" }}>A Nakshatra Namaha Creations Company</p>
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   {/* Floating badge top */}
// // // // //                   <div style={{
// // // // //                     position: "absolute", top: -18, right: -18,
// // // // //                     background: `linear-gradient(135deg,${T.teal},${T.tealDark})`,
// // // // //                     borderRadius: 16, padding: "14px 18px", textAlign: "center",
// // // // //                     boxShadow: `0 8px 32px rgba(0,201,167,.4)`,
// // // // //                     animation: "heroFloat 4s ease-in-out infinite",
// // // // //                   }}>
// // // // //                     <p style={{ fontSize: 22, fontWeight: 900, color: "#000", margin: 0, lineHeight: 1 }}>565+</p>
// // // // //                     <p style={{ fontSize: 10, fontWeight: 700, color: "rgba(0,0,0,.65)", margin: "3px 0 0", letterSpacing: "0.06em" }}>PROJECTS</p>
// // // // //                   </div>

// // // // //                   {/* Floating badge bottom */}
// // // // //                   <div style={{
// // // // //                     position: "absolute", bottom: -18, left: -18,
// // // // //                     background: "rgba(5,14,30,.95)", border: "1px solid rgba(0,201,167,.3)",
// // // // //                     borderRadius: 14, padding: "12px 16px",
// // // // //                     boxShadow: "0 8px 32px rgba(0,0,0,.4)",
// // // // //                     animation: "heroFloat 5s ease-in-out infinite",
// // // // //                     animationDelay: "1.5s",
// // // // //                   }}>
// // // // //                     <p style={{ fontSize: 12, fontWeight: 700, color: "#fff", margin: 0 }}>🏙️ Bangalore · Toronto · London</p>
// // // // //                     <p style={{ fontSize: 10.5, color: "rgba(255,255,255,.4)", margin: "3px 0 0" }}>8+ years of global delivery</p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </Reveal>
// // // // //             </div>
// // // // //           </div>
// // // // //         </section>

// // // // //         {/* ── MODULE 3 PARENT COMPANY ── */}
// // // // //         <section style={{
// // // // //           padding: "100px 48px",
// // // // //           background: "linear-gradient(180deg, #040e1f 0%, #030b19 100%)",
// // // // //           position: "relative", overflow: "hidden",
// // // // //         }}>
// // // // //           <div style={{
// // // // //             position: "absolute", inset: 0, pointerEvents: "none",
// // // // //             backgroundImage: `radial-gradient(rgba(0,201,167,.06) 1px, transparent 1px)`,
// // // // //             backgroundSize: "32px 32px",
// // // // //           }} />

// // // // //           <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
// // // // //             <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
// // // // //               <p style={{ color: T.teal, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>— Backed By —</p>
// // // // //               <h2 style={{ fontSize: "clamp(24px,2.8vw,38px)", fontWeight: 900, marginBottom: 12 }}>
// // // // //                 Our Parent Company —{" "}
// // // // //                 <span style={{ background: `linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
// // // // //                   Nakshatra Namaha Creations Pvt. Ltd.
// // // // //                 </span>
// // // // //               </h2>
// // // // //               <h3 style={{ fontSize: 16, fontWeight: 500, color: "rgba(255,255,255,.45)", margin: 0 }}>
// // // // //                 8+ Years of Digital Excellence from Bangalore, India
// // // // //               </h3>
// // // // //             </Reveal>

// // // // //             {/* Highlight box */}
// // // // //             <Reveal delay={0.1}>
// // // // //               <div style={{
// // // // //                 borderRadius: 20, padding: "40px 44px",
// // // // //                 background: "rgba(0,201,167,.05)", border: "1px solid rgba(0,201,167,.2)",
// // // // //                 marginBottom: 52,
// // // // //                 display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center",
// // // // //               }}>
// // // // //                 <div>
// // // // //                   <p style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.85, margin: 0 }}>
// // // // //                     Headquartered in <strong style={{ color: "#fff" }}>Bengaluru, Karnataka</strong> — India&apos;s Silicon Valley — with offices in Mysore, Mumbai, and Hyderabad. A full-spectrum digital studio combining creative excellence with engineering rigour.
// // // // //                   </p>
// // // // //                   <a href="https://www.nakshatranamahacreations.com" target="_blank" rel="noopener noreferrer" style={{
// // // // //                     display: "inline-flex", alignItems: "center", gap: 8, marginTop: 20,
// // // // //                     fontSize: 13.5, fontWeight: 700, color: T.teal, textDecoration: "none",
// // // // //                   }}>
// // // // //                     🌐 www.nakshatranamahacreations.com →
// // // // //                   </a>
// // // // //                 </div>
// // // // //                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
// // // // //                   {[
// // // // //                     { n: "8+",   l: "Years Active" },
// // // // //                     { n: "565+", l: "Projects" },
// // // // //                     { n: "100+", l: "Team Size" },
// // // // //                     { n: "4",    l: "Indian Offices" },
// // // // //                   ].map((s, i) => (
// // // // //                     <div key={i} style={{
// // // // //                       textAlign: "center", padding: "20px 12px", borderRadius: 14,
// // // // //                       background: "rgba(0,201,167,.06)", border: "1px solid rgba(0,201,167,.15)",
// // // // //                     }}>
// // // // //                       <p style={{ fontSize: 28, fontWeight: 900, color: T.teal, margin: 0 }}>{s.n}</p>
// // // // //                       <p style={{ fontSize: 11, color: "rgba(255,255,255,.4)", margin: "4px 0 0", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.l}</p>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </Reveal>

// // // // //             {/* Services tags */}
// // // // //             <Reveal delay={0.15}>
// // // // //               <div style={{ marginBottom: 52 }}>
// // // // //                 <h3 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,.35)", marginBottom: 20 }}>
// // // // //                   Parent Company Services That Power NNC Digital
// // // // //                 </h3>
// // // // //                 <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
// // // // //                   {PARENT_SERVICES.map(s => (
// // // // //                     <span key={s} style={{
// // // // //                       fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,.7)",
// // // // //                       background: "rgba(255,255,255,.05)",
// // // // //                       border: "1px solid rgba(255,255,255,.1)",
// // // // //                       padding: "8px 16px", borderRadius: 30,
// // // // //                     }}>{s}</span>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </Reveal>

// // // // //             {/* Comparison table */}
// // // // //             <Reveal delay={0.2}>
// // // // //               <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,.08)" }}>
// // // // //                 <div style={{
// // // // //                   display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr",
// // // // //                   background: "rgba(0,201,167,.08)", borderBottom: "1px solid rgba(0,201,167,.2)",
// // // // //                   padding: "16px 24px",
// // // // //                 }}>
// // // // //                   <p style={{ fontSize: 11, fontWeight: 700, color: T.teal, textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>Metric</p>
// // // // //                   <p style={{ fontSize: 11, fontWeight: 700, color: T.teal, textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>Nakshatra Namaha Creations</p>
// // // // //                   <p style={{ fontSize: 11, fontWeight: 700, color: T.teal, textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>NNC Digital (International)</p>
// // // // //                 </div>
// // // // //                 {COMPARISON.map((row, i) => (
// // // // //                   <div key={i} className="comp-row" style={{
// // // // //                     display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr",
// // // // //                     padding: "18px 24px",
// // // // //                     borderBottom: i < COMPARISON.length - 1 ? "1px solid rgba(255,255,255,.05)" : "none",
// // // // //                   }}>
// // // // //                     <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,.6)", margin: 0 }}>{row.metric}</p>
// // // // //                     <p style={{ fontSize: 13, color: "rgba(255,255,255,.85)", margin: 0 }}>{row.parent}</p>
// // // // //                     <p style={{ fontSize: 13, color: T.teal, fontWeight: 600, margin: 0 }}>{row.nnc}</p>
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </Reveal>
// // // // //           </div>
// // // // //         </section>

// // // // //         {/* ── MODULE 4 WHY WE LAUNCHED ── */}
// // // // //         <section style={{ padding: "100px 48px", background: T.navy0 }}>
// // // // //           <div style={{ maxWidth: 1100, margin: "0 auto" }}>
// // // // //             <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
// // // // //               <p style={{ color: T.teal, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>— Our Purpose —</p>
// // // // //               <h2 style={{ fontSize: "clamp(24px,2.8vw,38px)", fontWeight: 900, margin: 0 }}>
// // // // //                 Why We Launched NNC Digital for the{" "}
// // // // //                 <span style={{ background: `linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
// // // // //                   North American & UK Market
// // // // //                 </span>
// // // // //               </h2>
// // // // //             </Reveal>

// // // // //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
// // // // //               <Reveal delay={0.08}>
// // // // //                 <div style={{
// // // // //                   borderRadius: 20, padding: "40px 36px", height: "100%",
// // // // //                   background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.08)",
// // // // //                 }}>
// // // // //                   <div style={{
// // // // //                     width: 48, height: 48, borderRadius: 14, marginBottom: 24,
// // // // //                     background: "rgba(255,80,80,.1)", border: "1px solid rgba(255,80,80,.2)",
// // // // //                     display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
// // // // //                   }}>🔍</div>
// // // // //                   <h3 style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 16 }}>The Gap We Saw</h3>
// // // // //                   <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14.5, lineHeight: 1.85, margin: 0 }}>
// // // // //                     Businesses in Canada, the USA, and the UK face a common challenge: local agencies charge premium prices for work that can be delivered at a fraction of the cost — without any quality reduction — by the right offshore partner.
// // // // //                   </p>
// // // // //                   <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14.5, lineHeight: 1.85, marginTop: 14, marginBottom: 0 }}>
// // // // //                     Most offshore agencies fail because they don&apos;t understand the regulatory environment, commercial culture, or specific needs of Western businesses.
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </Reveal>

// // // // //               <Reveal delay={0.14}>
// // // // //                 <div style={{
// // // // //                   borderRadius: 20, padding: "40px 36px", height: "100%",
// // // // //                   background: "rgba(0,201,167,.04)", border: "1px solid rgba(0,201,167,.18)",
// // // // //                 }}>
// // // // //                   <div style={{
// // // // //                     width: 48, height: 48, borderRadius: 14, marginBottom: 24,
// // // // //                     background: "rgba(0,201,167,.1)", border: "1px solid rgba(0,201,167,.3)",
// // // // //                     display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
// // // // //                   }}>✅</div>
// // // // //                   <h3 style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 20 }}>The Solution We Built</h3>
// // // // //                   <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// // // // //                     {WHY_SOLUTIONS.map((item, i) => (
// // // // //                       <div key={i} className="why-item" style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
// // // // //                         <div style={{
// // // // //                           width: 22, height: 22, borderRadius: "50%", flexShrink: 0, marginTop: 1,
// // // // //                           background: `linear-gradient(135deg,${T.teal},${T.tealDark})`,
// // // // //                           display: "flex", alignItems: "center", justifyContent: "center",
// // // // //                           fontSize: 11, color: "#000", fontWeight: 900,
// // // // //                         }}>✓</div>
// // // // //                         <p style={{ color: "rgba(255,255,255,.7)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{item}</p>
// // // // //                       </div>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </Reveal>
// // // // //             </div>
// // // // //           </div>
// // // // //         </section>

// // // // //         {/* ── MODULE 5 VALUES ── */}
// // // // //         <section style={{
// // // // //           padding: "100px 48px",
// // // // //           background: "linear-gradient(180deg, #040e1f 0%, #030b19 100%)",
// // // // //         }}>
// // // // //           <div style={{ maxWidth: 1100, margin: "0 auto" }}>
// // // // //             <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
// // // // //               <p style={{ color: T.teal, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>— Our Values —</p>
// // // // //               <h2 style={{ fontSize: "clamp(24px,2.8vw,38px)", fontWeight: 900, margin: 0 }}>
// // // // //                 What We{" "}
// // // // //                 <span style={{ background: `linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
// // // // //                   Stand For
// // // // //                 </span>
// // // // //               </h2>
// // // // //             </Reveal>

// // // // //             <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginBottom: 80 }}>
// // // // //               {VALUES.map((v, i) => (
// // // // //                 <Reveal key={i} delay={0.06 * i}>
// // // // //                   <div
// // // // //                     className="val-card"
// // // // //                     onMouseEnter={() => setHoveredVal(i)}
// // // // //                     onMouseLeave={() => setHoveredVal(null)}
// // // // //                     style={{
// // // // //                       borderRadius: 18, padding: "32px 28px",
// // // // //                       background: hoveredVal === i ? "rgba(0,201,167,.07)" : "rgba(255,255,255,.03)",
// // // // //                       border: `1px solid ${hoveredVal === i ? "rgba(0,201,167,.35)" : "rgba(255,255,255,.08)"}`,
// // // // //                       cursor: "default",
// // // // //                     }}
// // // // //                   >
// // // // //                     <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
// // // // //                     <p style={{ fontSize: 15.5, fontWeight: 800, color: "#fff", marginBottom: 8 }}>{v.title}</p>
// // // // //                     <p style={{ fontSize: 13.5, color: "rgba(255,255,255,.45)", lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
// // // // //                   </div>
// // // // //                 </Reveal>
// // // // //               ))}
// // // // //             </div>

// // // // //             {/* Global Offices */}
// // // // //             <Reveal>
// // // // //               <h2 style={{ fontSize: "clamp(22px,2.4vw,32px)", fontWeight: 900, marginBottom: 32, textAlign: "center" }}>
// // // // //                 Global{" "}
// // // // //                 <span style={{ background: `linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
// // // // //                   Offices
// // // // //                 </span>
// // // // //               </h2>
// // // // //             </Reveal>

// // // // //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 72 }}>
// // // // //               <Reveal delay={0.08}>
// // // // //                 <div style={{
// // // // //                   borderRadius: 20, padding: "36px 32px",
// // // // //                   background: "rgba(0,201,167,.05)", border: "1px solid rgba(0,201,167,.2)",
// // // // //                 }}>
// // // // //                   <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.teal, marginBottom: 24 }}>International Offices</p>
// // // // //                   <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
// // // // //                     {INT_OFFICES.map(o => (
// // // // //                       <div key={o.city} style={{ display: "flex", alignItems: "center", gap: 12 }}>
// // // // //                         <span style={{ fontSize: 20 }}>{o.flag}</span>
// // // // //                         <div>
// // // // //                           <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: 0 }}>{o.city}</p>
// // // // //                           <p style={{ fontSize: 12.5, color: T.teal, margin: "2px 0 0", fontWeight: 600 }}>{o.phone}</p>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </Reveal>

// // // // //               <Reveal delay={0.14}>
// // // // //                 <div style={{
// // // // //                   borderRadius: 20, padding: "36px 32px",
// // // // //                   background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.08)",
// // // // //                 }}>
// // // // //                   <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,.4)", marginBottom: 24 }}>
// // // // //                     India Offices — Nakshatra Namaha Creations
// // // // //                   </p>
// // // // //                   <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
// // // // //                     {INDIA_OFFICES.map(o => (
// // // // //                       <div key={o.city} style={{ display: "flex", alignItems: "center", gap: 12 }}>
// // // // //                         <span style={{ fontSize: 20 }}>{o.flag}</span>
// // // // //                         <div>
// // // // //                           <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: 0 }}>{o.city}</p>
// // // // //                           {o.phone && <p style={{ fontSize: 12.5, color: "rgba(255,255,255,.4)", margin: "2px 0 0" }}>{o.phone}</p>}
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     ))}
// // // // //                     <div style={{ marginTop: 8, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,.07)" }}>
// // // // //                       <p style={{ fontSize: 12.5, color: "rgba(255,255,255,.35)", margin: 0 }}>✉️ info@nakshatranamahacreations.com</p>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </Reveal>
// // // // //             </div>

// // // // //             {/* Final CTA */}
// // // // //             <Reveal delay={0.1}>
// // // // //               <div style={{
// // // // //                 borderRadius: 24, padding: "60px 52px", textAlign: "center",
// // // // //                 background: `linear-gradient(135deg, ${T.tealDark}22 0%, rgba(5,14,30,.9) 50%, ${T.navy0} 100%)`,
// // // // //                 border: "1px solid rgba(0,201,167,.2)",
// // // // //                 position: "relative", overflow: "hidden",
// // // // //               }}>
// // // // //                 <div style={{
// // // // //                   position: "absolute", width: 400, height: 400, borderRadius: "50%",
// // // // //                   background: `radial-gradient(circle, ${T.teal}12 0%, transparent 65%)`,
// // // // //                   top: "50%", left: "50%", transform: "translate(-50%,-50%)",
// // // // //                   pointerEvents: "none",
// // // // //                 }} />
// // // // //                 <div style={{ position: "relative", zIndex: 1 }}>
// // // // //                   <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: T.teal, marginBottom: 16 }}>— Get Started —</p>
// // // // //                   <h2 style={{ fontSize: "clamp(22px,2.6vw,36px)", fontWeight: 900, marginBottom: 16 }}>
// // // // //                     Ready to Start a Conversation?
// // // // //                   </h2>
// // // // //                   <p style={{ color: "rgba(255,255,255,.5)", fontSize: 15.5, lineHeight: 1.75, maxWidth: 520, margin: "0 auto 36px" }}>
// // // // //                     Whether you have a fully scoped project or just a problem you&apos;re trying to solve — we&apos;d love to talk. We&apos;ll respond within 24 hours with honest, practical advice.
// // // // //                   </p>
// // // // //                   <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
// // // // //                     <button className="about-cta-btn" style={{
// // // // //                       background: `linear-gradient(135deg,${T.teal},${T.tealDark})`,
// // // // //                       color: "#000", border: "none",
// // // // //                       boxShadow: `0 8px 32px rgba(0,201,167,.35)`,
// // // // //                     }}>Book a Free Consultation</button>
// // // // //                     <button className="about-cta-btn" style={{
// // // // //                       background: "transparent", color: "#fff",
// // // // //                       border: "1px solid rgba(255,255,255,.2)",
// // // // //                     }}>View Our Work →</button>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </Reveal>
// // // // //           </div>
// // // // //         </section>

// // // // //       </main>

// // // // //       <Footer />
// // // // //     </>
// // // // //   );
// // // // // }

// // // // "use client";
// // // // import { useState } from "react";
// // // // import Image from "next/image";
// // // // import { T } from "../components/tokens";
// // // // import Navbar from "../components/Navbar";

// // // // const VALUES = [
// // // //   { icon: "🎯", title: "Outcomes Over Outputs",   desc: "Results, not features shipped." },
// // // //   { icon: "🔒", title: "Compliance First",         desc: "GDPR / PIPEDA / CCPA in every system." },
// // // //   { icon: "💡", title: "Radical Transparency",     desc: "Fixed prices. Weekly demos. No jargon." },
// // // //   { icon: "🤝", title: "People Before Technology", desc: "Training & adoption matter." },
// // // //   { icon: "🏗️", title: "Long-Term Thinking",       desc: "Systems designed to last 5+ years." },
// // // //   { icon: "⭐", title: "Client First, Always",      desc: "Every decision starts with the client." },
// // // // ];

// // // // const STATS = [
// // // //   { value: "8+",   label: "Years of Excellence" },
// // // //   { value: "565+", label: "Projects Delivered" },
// // // //   { value: "100+", label: "Team Members" },
// // // //   { value: "3",    label: "International Markets" },
// // // // ];

// // // // const PARENT_SERVICES = [
// // // //   "Website Development", "Mobile App Development", "Digital Marketing",
// // // //   "Graphic Design", "2D Animation", "Corporate Video Production",
// // // //   "B2B Marketing", "SEO & Performance Marketing",
// // // // ];

// // // // const COMPARISON = [
// // // //   { metric: "Years in Business",  parent: "8+ Years",                                nnc: "Launched for CA/US/UK Market" },
// // // //   { metric: "Projects Delivered", parent: "565+",                                    nnc: "Growing Portfolio in NA & UK" },
// // // //   { metric: "Team Size",          parent: "100+ Members",                            nnc: "Dedicated International Team" },
// // // //   { metric: "Offices",            parent: "Bangalore · Mysore · Mumbai · Hyderabad", nnc: "Toronto · New York · London" },
// // // // ];

// // // // const INT_OFFICES = [
// // // //   { flag: "🇨🇦", city: "Toronto, Canada", phone: "+1 647-XXX-XXXX" },
// // // //   { flag: "🇺🇸", city: "New York, USA",   phone: "+1 631-XXX-XXXX" },
// // // //   { flag: "🇬🇧", city: "London, UK",      phone: "+44 20-XXXX-XXXX" },
// // // // ];

// // // // const INDIA_OFFICES = [
// // // //   { flag: "🇮🇳", city: "Bangalore HQ", phone: "+91 9900566466" },
// // // //   { flag: "🇮🇳", city: "Mysore",       phone: null },
// // // //   { flag: "🇮🇳", city: "Mumbai",       phone: null },
// // // //   { flag: "🇮🇳", city: "Hyderabad",    phone: null },
// // // // ];

// // // // const WHY_SOLUTIONS = [
// // // //   "Dedicated project managers in North American and UK time zones",
// // // //   "GDPR, PIPEDA, and CCPA-compliant systems from day one",
// // // //   "Full creative and technical capability of a 100+ person studio",
// // // //   "Transparent, fixed-price proposals — no surprises",
// // // //   "Long-term partnership, not one-and-done project delivery",
// // // // ];

// // // // export default function AboutPage() {
// // // //   const [hoveredVal, setHoveredVal] = useState<number | null>(null);

// // // //   return (
// // // //     <>
// // // //       <Navbar />

// // // //       <main style={{
// // // //         background: T.navy0,
// // // //         fontFamily: "'Poppins', sans-serif",
// // // //         color: "#fff",
// // // //         overflowX: "hidden",
// // // //       }}>
// // // //         <style>{`
// // // //           @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

// // // //           @keyframes heroFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
// // // //           @keyframes spin      { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
// // // //           @keyframes abPulse   { 0%,100%{transform:scale(1);opacity:.15} 50%{transform:scale(1.08);opacity:.28} }
// // // //           @keyframes abFadeUp  { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }

// // // //           .ab-section { animation: abFadeUp .7s ease both; }

// // // //           .ab-cta-btn {
// // // //             padding: 14px 34px; border-radius: 10px;
// // // //             font-family: 'Poppins', sans-serif;
// // // //             font-weight: 700; font-size: 15px; cursor: pointer;
// // // //             transition: transform .2s ease, box-shadow .2s ease;
// // // //           }
// // // //           .ab-cta-btn:hover { transform: translateY(-3px); }

// // // //           .ab-val-card {
// // // //             transition: transform .25s ease, border-color .25s ease, background .25s ease;
// // // //           }
// // // //           .ab-val-card:hover { transform: translateY(-5px); }

// // // //           .ab-comp-row:nth-child(even) { background: rgba(255,255,255,.02); }

// // // //           .ab-why-item { transition: transform .2s ease; }
// // // //           .ab-why-item:hover { transform: translateX(6px); }

// // // //           .ab-stat-strip {
// // // //             display: grid;
// // // //             grid-template-columns: repeat(4,1fr);
// // // //           }

// // // //           .ab-values-grid {
// // // //             display: grid;
// // // //             grid-template-columns: repeat(3,1fr);
// // // //             gap: 18px;
// // // //           }

// // // //           .ab-story-grid     { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
// // // //           .ab-parent-grid    { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
// // // //           .ab-parent-stats   { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
// // // //           .ab-why-grid       { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
// // // //           .ab-offices-grid   { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
// // // //           .ab-comp-table     { display: grid; grid-template-columns: 1.2fr 1fr 1fr; }

// // // //           @media (max-width: 960px) {
// // // //             .ab-story-grid   { grid-template-columns: 1fr !important; gap: 40px !important; }
// // // //             .ab-parent-grid  { grid-template-columns: 1fr !important; }
// // // //             .ab-why-grid     { grid-template-columns: 1fr !important; }
// // // //             .ab-offices-grid { grid-template-columns: 1fr !important; }
// // // //             .ab-stat-strip   { grid-template-columns: repeat(2,1fr) !important; }
// // // //           }
// // // //           @media (max-width: 720px) {
// // // //             .ab-values-grid  { grid-template-columns: 1fr 1fr !important; }
// // // //             .ab-comp-table   { grid-template-columns: 1fr !important; }
// // // //           }
// // // //           @media (max-width: 480px) {
// // // //             .ab-values-grid  { grid-template-columns: 1fr !important; }
// // // //             .ab-hero-section { padding: 100px 20px 60px !important; }
// // // //             .ab-section-pad  { padding: 60px 20px !important; }
// // // //             .ab-stat-strip   { grid-template-columns: 1fr 1fr !important; }
// // // //             .ab-cta-section  { padding: 40px 24px !important; }
// // // //           }
// // // //         `}</style>

// // // //         {/* ══════════════════════════════════════
// // // //             MODULE 1 — HERO
// // // //         ══════════════════════════════════════ */}
// // // //         <section className="ab-hero-section" style={{
// // // //           minHeight: "90vh", display: "flex", alignItems: "center",
// // // //           padding: "120px 48px 80px",
// // // //           background: `linear-gradient(135deg, #020d1e 0%, #051628 40%, ${T.navy0} 100%)`,
// // // //           position: "relative", overflow: "hidden",
// // // //         }}>
// // // //           {/* Grid */}
// // // //           <div style={{
// // // //             position:"absolute", inset:0, pointerEvents:"none",
// // // //             backgroundImage:`linear-gradient(rgba(0,201,167,.04) 1px,transparent 1px),
// // // //                              linear-gradient(90deg,rgba(0,201,167,.04) 1px,transparent 1px)`,
// // // //             backgroundSize:"60px 60px",
// // // //           }}/>

// // // //           {/* Glow orb */}
// // // //           <div style={{
// // // //             position:"absolute", width:700, height:700, borderRadius:"50%",
// // // //             background:`radial-gradient(circle,${T.teal}20 0%,transparent 65%)`,
// // // //             top:"50%", right:-200, transform:"translateY(-50%)",
// // // //             animation:"abPulse 7s ease-in-out infinite", pointerEvents:"none",
// // // //           }}/>

// // // //           {/* Rotating ring */}
// // // //           <div style={{
// // // //             position:"absolute", width:500, height:500, borderRadius:"50%",
// // // //             border:"1px dashed rgba(0,201,167,.1)",
// // // //             top:"50%", right:-100, transform:"translateY(-50%)",
// // // //             animation:"spin 40s linear infinite", pointerEvents:"none",
// // // //           }}/>

// // // //           <div style={{ maxWidth:1180, margin:"0 auto", position:"relative", zIndex:1, width:"100%" }}>

// // // //             <div style={{ maxWidth:780, animation:"abFadeUp .7s ease both" }}>
// // // //               {/* Badge */}
// // // //               <div style={{
// // // //                 display:"inline-flex", alignItems:"center", gap:10,
// // // //                 background:"rgba(0,201,167,.08)", border:"1px solid rgba(0,201,167,.25)",
// // // //                 borderRadius:30, padding:"7px 18px", marginBottom:32,
// // // //               }}>
// // // //                 <div style={{ width:7, height:7, borderRadius:"50%", background:T.teal, boxShadow:`0 0 8px ${T.teal}` }}/>
// // // //                 <span style={{ fontSize:11.5, fontWeight:700, color:T.teal, letterSpacing:"0.1em", textTransform:"uppercase" }}>
// // // //                   About NNC Digital Solutions
// // // //                 </span>
// // // //               </div>

// // // //               <h1 style={{
// // // //                 fontSize:"clamp(32px,4.5vw,62px)", fontWeight:900,
// // // //                 lineHeight:1.12, marginBottom:28, letterSpacing:"-0.02em",
// // // //               }}>
// // // //                 Built on{" "}
// // // //                 <span style={{
// // // //                   background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,
// // // //                   WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
// // // //                 }}>
// // // //                   Indian Tech Excellence.
// // // //                 </span>
// // // //                 <br />
// // // //                 Built for Canadian,{" "}
// // // //                 <span style={{ color:"rgba(255,255,255,.8)", fontStyle:"italic" }}>
// // // //                   US &amp; UK Business.
// // // //                 </span>
// // // //               </h1>

// // // //               <p style={{
// // // //                 fontSize:"clamp(15px,1.4vw,18px)", color:"rgba(255,255,255,.52)",
// // // //                 lineHeight:1.85, marginBottom:44, maxWidth:640,
// // // //               }}>
// // // //                 NNC Digital Solutions is the international technology arm of Nakshatra Namaha Creations Pvt. Ltd. — one of Bangalore&apos;s most respected digital studios. We were born from a belief that the deep technology expertise that has transformed thousands of Indian businesses deserves to be accessible to growing companies in Canada, the USA, and the United Kingdom.
// // // //               </p>

// // // //               <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
// // // //                 <button className="ab-cta-btn" style={{
// // // //                   background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
// // // //                   color:"#000", border:"none",
// // // //                   boxShadow:`0 8px 32px rgba(0,201,167,.3)`,
// // // //                 }}>
// // // //                   Book a Free Consultation
// // // //                 </button>
// // // //                 <button className="ab-cta-btn" style={{
// // // //                   background:"transparent", color:"#fff",
// // // //                   border:"1px solid rgba(255,255,255,.2)",
// // // //                 }}>
// // // //                   View Our Work →
// // // //                 </button>
// // // //               </div>
// // // //             </div>

// // // //             {/* Stat strip */}
// // // //             <div className="ab-stat-strip" style={{
// // // //               gap:1, marginTop:72,
// // // //               background:"rgba(255,255,255,.06)",
// // // //               borderRadius:16, overflow:"hidden",
// // // //               border:"1px solid rgba(255,255,255,.08)",
// // // //             }}>
// // // //               {STATS.map((s, i) => (
// // // //                 <div key={i} style={{
// // // //                   padding:"28px 24px", textAlign:"center",
// // // //                   background:"rgba(5,14,30,.8)",
// // // //                   borderRight: i < 3 ? "1px solid rgba(255,255,255,.06)" : "none",
// // // //                 }}>
// // // //                   <p style={{
// // // //                     fontSize:"clamp(26px,3vw,40px)", fontWeight:900, margin:0,
// // // //                     background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,
// // // //                     WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
// // // //                   }}>{s.value}</p>
// // // //                   <p style={{ fontSize:12, color:"rgba(255,255,255,.4)", margin:"6px 0 0", fontWeight:600, letterSpacing:"0.06em", textTransform:"uppercase" }}>
// // // //                     {s.label}
// // // //                   </p>
// // // //                 </div>
// // // //               ))}
// // // //             </div>

// // // //           </div>
// // // //         </section>

// // // //         {/* ══════════════════════════════════════
// // // //             MODULE 2 — THE NNC STORY
// // // //         ══════════════════════════════════════ */}
// // // //         <section className="ab-section-pad" style={{ padding:"100px 48px", background:T.navy0 }}>
// // // //           <div style={{ maxWidth:1180, margin:"0 auto" }}>
// // // //             <div className="ab-story-grid">

// // // //               {/* Text */}
// // // //               <div>
// // // //                 <p style={{ color:T.teal, fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:14 }}>
// // // //                   — Our Story —
// // // //                 </p>
// // // //                 <h2 style={{ fontSize:"clamp(24px,2.8vw,38px)", fontWeight:900, lineHeight:1.2, marginBottom:28 }}>
// // // //                   From Bangalore to Canada —{" "}
// // // //                   <span style={{ background:`linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
// // // //                     The NNC Digital Story
// // // //                   </span>
// // // //                 </h2>
// // // //                 <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
// // // //                   {[
// // // //                     "Nakshatra Namaha Creations Pvt. Ltd. was founded in Bangalore, India — a city synonymous with world-class software engineering. Over 8+ years, the company built a reputation as one of Karnataka's most trusted digital studios, delivering 565+ projects across website development, mobile apps, digital marketing, corporate video, 2D animation, B2B marketing, and more.",
// // // //                     "In response to increasing demand from businesses in Canada, the United States, and the United Kingdom who needed a trustworthy offshore technology partner — NNC Digital Solutions was launched as Nakshatra Namaha Creations' dedicated international brand.",
// // // //                     "NNC Digital is not a new company trying to build a reputation. It is the international expression of a decade of proven capability — backed by the people, processes, and portfolio of one of India's most capable digital studios.",
// // // //                   ].map((para, i) => (
// // // //                     <p key={i} style={{ color:"rgba(255,255,255,.52)", fontSize:14.5, lineHeight:1.85, margin:0 }}>{para}</p>
// // // //                   ))}
// // // //                 </div>

// // // //                 {/* City pill */}
// // // //                 <div style={{
// // // //                   marginTop:32, padding:"18px 22px", borderRadius:12,
// // // //                   background:"rgba(0,201,167,.06)", border:"1px solid rgba(0,201,167,.2)",
// // // //                   display:"flex", alignItems:"center", gap:14,
// // // //                 }}>
// // // //                   <span style={{ fontSize:28 }}>🇮🇳</span>
// // // //                   <div>
// // // //                     <p style={{ fontSize:13, fontWeight:700, color:"#fff", margin:0 }}>Bangalore → Toronto · New York · London</p>
// // // //                     <p style={{ fontSize:12, color:"rgba(255,255,255,.4)", margin:"3px 0 0" }}>One trusted studio. Three international markets.</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Visual */}
// // // //               <div style={{ position:"relative" }}>
// // // //                 <div style={{
// // // //                   borderRadius:24, overflow:"hidden",
// // // //                   border:"1px solid rgba(0,201,167,.2)",
// // // //                   boxShadow:`0 32px 80px rgba(0,0,0,.5), 0 0 60px rgba(0,201,167,.08)`,
// // // //                   position:"relative", aspectRatio:"4/3",
// // // //                 }}>
// // // //                   <Image src="/NNCLOGO.jpg" alt="NNC Digital Solutions" fill style={{ objectFit:"cover" }}/>
// // // //                   <div style={{
// // // //                     position:"absolute", inset:0,
// // // //                     background:"linear-gradient(to top, rgba(5,14,30,.85) 0%, transparent 50%)",
// // // //                   }}/>
// // // //                   <div style={{ position:"absolute", bottom:24, left:24, right:24 }}>
// // // //                     <p style={{ fontSize:13, fontWeight:700, color:"#fff", margin:0 }}>NNC Digital Solutions</p>
// // // //                     <p style={{ fontSize:11.5, color:T.teal, margin:"4px 0 0" }}>A Nakshatra Namaha Creations Company</p>
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Floating badge — top right */}
// // // //                 <div style={{
// // // //                   position:"absolute", top:-18, right:-18,
// // // //                   background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
// // // //                   borderRadius:16, padding:"14px 18px", textAlign:"center",
// // // //                   boxShadow:`0 8px 32px rgba(0,201,167,.4)`,
// // // //                   animation:"heroFloat 4s ease-in-out infinite",
// // // //                 }}>
// // // //                   <p style={{ fontSize:22, fontWeight:900, color:"#000", margin:0, lineHeight:1 }}>565+</p>
// // // //                   <p style={{ fontSize:10, fontWeight:700, color:"rgba(0,0,0,.65)", margin:"3px 0 0", letterSpacing:"0.06em" }}>PROJECTS</p>
// // // //                 </div>

// // // //                 {/* Floating badge — bottom left */}
// // // //                 <div style={{
// // // //                   position:"absolute", bottom:-18, left:-18,
// // // //                   background:"rgba(5,14,30,.95)", border:"1px solid rgba(0,201,167,.3)",
// // // //                   borderRadius:14, padding:"12px 16px",
// // // //                   boxShadow:"0 8px 32px rgba(0,0,0,.4)",
// // // //                   animation:"heroFloat 5s ease-in-out infinite",
// // // //                   animationDelay:"1.5s",
// // // //                 }}>
// // // //                   <p style={{ fontSize:12, fontWeight:700, color:"#fff", margin:0 }}>🏙️ Bangalore · Toronto · London</p>
// // // //                   <p style={{ fontSize:10.5, color:"rgba(255,255,255,.4)", margin:"3px 0 0" }}>8+ years of global delivery</p>
// // // //                 </div>
// // // //               </div>

// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ══════════════════════════════════════
// // // //             MODULE 3 — PARENT COMPANY
// // // //         ══════════════════════════════════════ */}
// // // //         <section className="ab-section-pad" style={{
// // // //           padding:"100px 48px",
// // // //           background:"linear-gradient(180deg,#040e1f 0%,#030b19 100%)",
// // // //           position:"relative", overflow:"hidden",
// // // //         }}>
// // // //           {/* Dot grid */}
// // // //           <div style={{
// // // //             position:"absolute", inset:0, pointerEvents:"none",
// // // //             backgroundImage:`radial-gradient(rgba(0,201,167,.06) 1px, transparent 1px)`,
// // // //             backgroundSize:"32px 32px",
// // // //           }}/>

// // // //           <div style={{ maxWidth:1180, margin:"0 auto", position:"relative", zIndex:1 }}>

// // // //             {/* Heading */}
// // // //             <div style={{ textAlign:"center", marginBottom:56 }}>
// // // //               <p style={{ color:T.teal, fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:14 }}>— Backed By —</p>
// // // //               <h2 style={{ fontSize:"clamp(24px,2.8vw,38px)", fontWeight:900, marginBottom:12 }}>
// // // //                 Our Parent Company —{" "}
// // // //                 <span style={{ background:`linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
// // // //                   Nakshatra Namaha Creations Pvt. Ltd.
// // // //                 </span>
// // // //               </h2>
// // // //               <h3 style={{ fontSize:16, fontWeight:500, color:"rgba(255,255,255,.45)", margin:0 }}>
// // // //                 8+ Years of Digital Excellence from Bangalore, India
// // // //               </h3>
// // // //             </div>

// // // //             {/* Highlight box */}
// // // //             <div style={{
// // // //               borderRadius:20, padding:"40px 44px",
// // // //               background:"rgba(0,201,167,.05)", border:"1px solid rgba(0,201,167,.2)",
// // // //               marginBottom:48,
// // // //             }}>
// // // //               <div className="ab-parent-grid">
// // // //                 <div>
// // // //                   <p style={{ fontSize:15, color:"rgba(255,255,255,.55)", lineHeight:1.85, margin:0 }}>
// // // //                     Headquartered in <strong style={{ color:"#fff" }}>Bengaluru, Karnataka</strong> — India&apos;s Silicon Valley — with offices in Mysore, Mumbai, and Hyderabad. A full-spectrum digital studio combining creative excellence with engineering rigour.
// // // //                   </p>
// // // //                   <a href="https://www.nakshatranamahacreations.com" target="_blank" rel="noopener noreferrer" style={{
// // // //                     display:"inline-flex", alignItems:"center", gap:8, marginTop:20,
// // // //                     fontSize:13.5, fontWeight:700, color:T.teal, textDecoration:"none",
// // // //                   }}>
// // // //                     🌐 www.nakshatranamahacreations.com →
// // // //                   </a>
// // // //                 </div>
// // // //                 <div className="ab-parent-stats">
// // // //                   {[
// // // //                     { n:"8+",   l:"Years Active" },
// // // //                     { n:"565+", l:"Projects" },
// // // //                     { n:"100+", l:"Team Size" },
// // // //                     { n:"4",    l:"Indian Offices" },
// // // //                   ].map((s, i) => (
// // // //                     <div key={i} style={{
// // // //                       textAlign:"center", padding:"20px 12px", borderRadius:14,
// // // //                       background:"rgba(0,201,167,.06)", border:"1px solid rgba(0,201,167,.15)",
// // // //                     }}>
// // // //                       <p style={{ fontSize:28, fontWeight:900, color:T.teal, margin:0 }}>{s.n}</p>
// // // //                       <p style={{ fontSize:11, color:"rgba(255,255,255,.4)", margin:"4px 0 0", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.06em" }}>{s.l}</p>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Services tags */}
// // // //             <div style={{ marginBottom:48 }}>
// // // //               <h3 style={{ fontSize:12, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(255,255,255,.35)", marginBottom:20 }}>
// // // //                 Parent Company Services That Power NNC Digital
// // // //               </h3>
// // // //               <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
// // // //                 {PARENT_SERVICES.map(s => (
// // // //                   <span key={s} style={{
// // // //                     fontSize:13, fontWeight:600, color:"rgba(255,255,255,.7)",
// // // //                     background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.1)",
// // // //                     padding:"8px 16px", borderRadius:30,
// // // //                   }}>{s}</span>
// // // //                 ))}
// // // //               </div>
// // // //             </div>

// // // //             {/* Comparison table */}
// // // //             <div style={{ borderRadius:16, overflow:"hidden", border:"1px solid rgba(255,255,255,.08)" }}>
// // // //               {/* Header */}
// // // //               <div className="ab-comp-table" style={{
// // // //                 background:"rgba(0,201,167,.08)", borderBottom:"1px solid rgba(0,201,167,.2)",
// // // //                 padding:"16px 24px",
// // // //               }}>
// // // //                 {["Metric","Nakshatra Namaha Creations","NNC Digital (International)"].map(h => (
// // // //                   <p key={h} style={{ fontSize:11, fontWeight:700, color:T.teal, textTransform:"uppercase", letterSpacing:"0.1em", margin:0 }}>{h}</p>
// // // //                 ))}
// // // //               </div>
// // // //               {COMPARISON.map((row, i) => (
// // // //                 <div key={i} className="ab-comp-row ab-comp-table" style={{
// // // //                   padding:"18px 24px",
// // // //                   borderBottom: i < COMPARISON.length - 1 ? "1px solid rgba(255,255,255,.05)" : "none",
// // // //                 }}>
// // // //                   <p style={{ fontSize:13, fontWeight:700, color:"rgba(255,255,255,.6)", margin:0 }}>{row.metric}</p>
// // // //                   <p style={{ fontSize:13, color:"rgba(255,255,255,.85)", margin:0 }}>{row.parent}</p>
// // // //                   <p style={{ fontSize:13, color:T.teal, fontWeight:600, margin:0 }}>{row.nnc}</p>
// // // //                 </div>
// // // //               ))}
// // // //             </div>

// // // //           </div>
// // // //         </section>

// // // //         {/* ══════════════════════════════════════
// // // //             MODULE 4 — WHY WE LAUNCHED
// // // //         ══════════════════════════════════════ */}
// // // //         <section className="ab-section-pad" style={{ padding:"100px 48px", background:T.navy0 }}>
// // // //           <div style={{ maxWidth:1180, margin:"0 auto" }}>

// // // //             <div style={{ textAlign:"center", marginBottom:56 }}>
// // // //               <p style={{ color:T.teal, fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:14 }}>— Our Purpose —</p>
// // // //               <h2 style={{ fontSize:"clamp(24px,2.8vw,38px)", fontWeight:900, margin:0 }}>
// // // //                 Why We Launched NNC Digital for the{" "}
// // // //                 <span style={{ background:`linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
// // // //                   North American &amp; UK Market
// // // //                 </span>
// // // //               </h2>
// // // //             </div>

// // // //             <div className="ab-why-grid">

// // // //               {/* The Gap */}
// // // //               <div style={{
// // // //                 borderRadius:20, padding:"40px 36px",
// // // //                 background:"rgba(255,255,255,.02)", border:"1px solid rgba(255,255,255,.08)",
// // // //               }}>
// // // //                 <div style={{
// // // //                   width:48, height:48, borderRadius:14, marginBottom:24,
// // // //                   background:"rgba(255,80,80,.1)", border:"1px solid rgba(255,80,80,.2)",
// // // //                   display:"flex", alignItems:"center", justifyContent:"center", fontSize:22,
// // // //                 }}>🔍</div>
// // // //                 <h3 style={{ fontSize:18, fontWeight:800, color:"#fff", marginBottom:16 }}>The Gap We Saw</h3>
// // // //                 <p style={{ color:"rgba(255,255,255,.5)", fontSize:14.5, lineHeight:1.85, margin:"0 0 14px" }}>
// // // //                   Businesses in Canada, the USA, and the UK face a common challenge: local agencies charge premium prices for work that can be delivered at a fraction of the cost — without any quality reduction — by the right offshore partner.
// // // //                 </p>
// // // //                 <p style={{ color:"rgba(255,255,255,.5)", fontSize:14.5, lineHeight:1.85, margin:0 }}>
// // // //                   Most offshore agencies fail because they don&apos;t understand the regulatory environment, commercial culture, or specific needs of Western businesses.
// // // //                 </p>
// // // //               </div>

// // // //               {/* The Solution */}
// // // //               <div style={{
// // // //                 borderRadius:20, padding:"40px 36px",
// // // //                 background:"rgba(0,201,167,.04)", border:"1px solid rgba(0,201,167,.18)",
// // // //               }}>
// // // //                 <div style={{
// // // //                   width:48, height:48, borderRadius:14, marginBottom:24,
// // // //                   background:"rgba(0,201,167,.1)", border:"1px solid rgba(0,201,167,.3)",
// // // //                   display:"flex", alignItems:"center", justifyContent:"center", fontSize:22,
// // // //                 }}>✅</div>
// // // //                 <h3 style={{ fontSize:18, fontWeight:800, color:"#fff", marginBottom:20 }}>The Solution We Built</h3>
// // // //                 <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
// // // //                   {WHY_SOLUTIONS.map((item, i) => (
// // // //                     <div key={i} className="ab-why-item" style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
// // // //                       <div style={{
// // // //                         width:22, height:22, borderRadius:"50%", flexShrink:0, marginTop:1,
// // // //                         background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
// // // //                         display:"flex", alignItems:"center", justifyContent:"center",
// // // //                         fontSize:11, color:"#000", fontWeight:900,
// // // //                       }}>✓</div>
// // // //                       <p style={{ color:"rgba(255,255,255,.7)", fontSize:14, lineHeight:1.65, margin:0 }}>{item}</p>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>

// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ══════════════════════════════════════
// // // //             MODULE 5 — VALUES, OFFICES + CTA
// // // //         ══════════════════════════════════════ */}
// // // //         <section className="ab-section-pad" style={{
// // // //           padding:"100px 48px",
// // // //           background:"linear-gradient(180deg,#040e1f 0%,#030b19 100%)",
// // // //         }}>
// // // //           <div style={{ maxWidth:1180, margin:"0 auto" }}>

// // // //             {/* Values heading */}
// // // //             <div style={{ textAlign:"center", marginBottom:52 }}>
// // // //               <p style={{ color:T.teal, fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:14 }}>— Our Values —</p>
// // // //               <h2 style={{ fontSize:"clamp(24px,2.8vw,38px)", fontWeight:900, margin:0 }}>
// // // //                 What We{" "}
// // // //                 <span style={{ background:`linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
// // // //                   Stand For
// // // //                 </span>
// // // //               </h2>
// // // //             </div>

// // // //             {/* Values grid */}
// // // //             <div className="ab-values-grid" style={{ marginBottom:80 }}>
// // // //               {VALUES.map((v, i) => (
// // // //                 <div
// // // //                   key={i}
// // // //                   className="ab-val-card"
// // // //                   onMouseEnter={() => setHoveredVal(i)}
// // // //                   onMouseLeave={() => setHoveredVal(null)}
// // // //                   style={{
// // // //                     borderRadius:18, padding:"32px 28px",
// // // //                     background: hoveredVal === i ? "rgba(0,201,167,.07)" : "rgba(255,255,255,.03)",
// // // //                     border:`1px solid ${hoveredVal === i ? "rgba(0,201,167,.35)" : "rgba(255,255,255,.08)"}`,
// // // //                     cursor:"default",
// // // //                   }}
// // // //                 >
// // // //                   <div style={{ fontSize:32, marginBottom:16 }}>{v.icon}</div>
// // // //                   <p style={{ fontSize:15.5, fontWeight:800, color:"#fff", marginBottom:8 }}>{v.title}</p>
// // // //                   <p style={{ fontSize:13.5, color:"rgba(255,255,255,.45)", lineHeight:1.7, margin:0 }}>{v.desc}</p>
// // // //                 </div>
// // // //               ))}
// // // //             </div>

// // // //             {/* Offices heading */}
// // // //             <div style={{ textAlign:"center", marginBottom:36 }}>
// // // //               <h2 style={{ fontSize:"clamp(22px,2.4vw,34px)", fontWeight:900 }}>
// // // //                 Global{" "}
// // // //                 <span style={{ background:`linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
// // // //                   Offices
// // // //                 </span>
// // // //               </h2>
// // // //             </div>

// // // //             {/* Offices grid */}
// // // //             <div className="ab-offices-grid" style={{ marginBottom:72 }}>

// // // //               {/* International */}
// // // //               <div style={{
// // // //                 borderRadius:20, padding:"36px 32px",
// // // //                 background:"rgba(0,201,167,.05)", border:"1px solid rgba(0,201,167,.2)",
// // // //               }}>
// // // //                 <p style={{ fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:T.teal, marginBottom:24 }}>
// // // //                   International Offices
// // // //                 </p>
// // // //                 <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
// // // //                   {INT_OFFICES.map(o => (
// // // //                     <div key={o.city} style={{ display:"flex", alignItems:"center", gap:14 }}>
// // // //                       <span style={{ fontSize:22 }}>{o.flag}</span>
// // // //                       <div>
// // // //                         <p style={{ fontSize:14, fontWeight:700, color:"#fff", margin:0 }}>{o.city}</p>
// // // //                         <p style={{ fontSize:13, color:T.teal, margin:"2px 0 0", fontWeight:600 }}>{o.phone}</p>
// // // //                       </div>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>

// // // //               {/* India */}
// // // //               <div style={{
// // // //                 borderRadius:20, padding:"36px 32px",
// // // //                 background:"rgba(255,255,255,.02)", border:"1px solid rgba(255,255,255,.08)",
// // // //               }}>
// // // //                 <p style={{ fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(255,255,255,.4)", marginBottom:24 }}>
// // // //                   India Offices — Nakshatra Namaha Creations
// // // //                 </p>
// // // //                 <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
// // // //                   {INDIA_OFFICES.map(o => (
// // // //                     <div key={o.city} style={{ display:"flex", alignItems:"center", gap:14 }}>
// // // //                       <span style={{ fontSize:22 }}>{o.flag}</span>
// // // //                       <div>
// // // //                         <p style={{ fontSize:14, fontWeight:700, color:"#fff", margin:0 }}>{o.city}</p>
// // // //                         {o.phone && <p style={{ fontSize:13, color:"rgba(255,255,255,.4)", margin:"2px 0 0" }}>{o.phone}</p>}
// // // //                       </div>
// // // //                     </div>
// // // //                   ))}
// // // //                   <div style={{ marginTop:4, paddingTop:16, borderTop:"1px solid rgba(255,255,255,.07)" }}>
// // // //                     <p style={{ fontSize:12.5, color:"rgba(255,255,255,.35)", margin:0 }}>
// // // //                       ✉️ info@nakshatranamahacreations.com
// // // //                     </p>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //             </div>

// // // //             {/* Final CTA */}
// // // //             <div className="ab-cta-section" style={{
// // // //               borderRadius:24, padding:"64px 52px", textAlign:"center",
// // // //               background:`linear-gradient(135deg,${T.tealDark}22 0%,rgba(5,14,30,.9) 50%,${T.navy0} 100%)`,
// // // //               border:"1px solid rgba(0,201,167,.2)",
// // // //               position:"relative", overflow:"hidden",
// // // //             }}>
// // // //               <div style={{
// // // //                 position:"absolute", width:400, height:400, borderRadius:"50%",
// // // //                 background:`radial-gradient(circle,${T.teal}12 0%,transparent 65%)`,
// // // //                 top:"50%", left:"50%", transform:"translate(-50%,-50%)",
// // // //                 pointerEvents:"none",
// // // //               }}/>
// // // //               <div style={{ position:"relative", zIndex:1 }}>
// // // //                 <p style={{ fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:T.teal, marginBottom:16 }}>
// // // //                   — Get Started —
// // // //                 </p>
// // // //                 <h2 style={{ fontSize:"clamp(22px,2.6vw,38px)", fontWeight:900, marginBottom:16 }}>
// // // //                   Ready to Start a Conversation?
// // // //                 </h2>
// // // //                 <p style={{ color:"rgba(255,255,255,.5)", fontSize:15.5, lineHeight:1.8, maxWidth:540, margin:"0 auto 40px" }}>
// // // //                   Whether you have a fully scoped project or just a problem you&apos;re trying to solve — we&apos;d love to talk. We&apos;ll respond within 24 hours with honest, practical advice.
// // // //                 </p>
// // // //                 <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
// // // //                   <button className="ab-cta-btn" style={{
// // // //                     background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
// // // //                     color:"#000", border:"none",
// // // //                     boxShadow:`0 8px 32px rgba(0,201,167,.35)`,
// // // //                   }}>
// // // //                     Book a Free Consultation
// // // //                   </button>
// // // //                   <button className="ab-cta-btn" style={{
// // // //                     background:"transparent", color:"#fff",
// // // //                     border:"1px solid rgba(255,255,255,.2)",
// // // //                   }}>
// // // //                     View Our Work →
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //           </div>
// // // //         </section>

// // // //       </main>
// // // //     </>
// // // //   );

// // // // }


// // // "use client";
// // // import { useState, useEffect, useRef, useCallback } from "react";
// // // import Image from "next/image";
// // // import { T } from "../components/tokens";
// // // import Navbar from "../components/Navbar";

// // // /* ─── Data ─── */
// // // const VALUES = [
// // //   { icon:"🎯", title:"Outcomes Over Outputs",   desc:"Results, not features shipped." },
// // //   { icon:"🔒", title:"Compliance First",         desc:"GDPR / PIPEDA / CCPA in every system." },
// // //   { icon:"💡", title:"Radical Transparency",     desc:"Fixed prices. Weekly demos. No jargon." },
// // //   { icon:"🤝", title:"People Before Technology", desc:"Training & adoption matter." },
// // //   { icon:"🏗️", title:"Long-Term Thinking",       desc:"Systems designed to last 5+ years." },
// // //   { icon:"⭐", title:"Client First, Always",      desc:"Every decision starts with the client." },
// // // ];
// // // const STATS = [
// // //   { value:8,   suffix:"+", label:"Years of Excellence" },
// // //   { value:565, suffix:"+", label:"Projects Delivered" },
// // //   { value:100, suffix:"+", label:"Team Members" },
// // //   { value:3,   suffix:"",  label:"International Markets" },
// // // ];
// // // const PARENT_SERVICES = [
// // //   "Website Development","Mobile App Development","Digital Marketing",
// // //   "Graphic Design","2D Animation","Corporate Video Production",
// // //   "B2B Marketing","SEO & Performance Marketing",
// // // ];
// // // const COMPARISON = [
// // //   { metric:"Years in Business",  parent:"8+ Years",                                nnc:"Launched for CA/US/UK Market" },
// // //   { metric:"Projects Delivered", parent:"565+",                                    nnc:"Growing Portfolio in NA & UK" },
// // //   { metric:"Team Size",          parent:"100+ Members",                            nnc:"Dedicated International Team" },
// // //   { metric:"Offices",            parent:"Bangalore · Mysore · Mumbai · Hyderabad", nnc:"Toronto · New York · London" },
// // // ];
// // // const INT_OFFICES = [
// // //   { flag:"🇨🇦", city:"Toronto, Canada", phone:"+1 647-XXX-XXXX" },
// // //   { flag:"🇺🇸", city:"New York, USA",   phone:"+1 631-XXX-XXXX" },
// // //   { flag:"🇬🇧", city:"London, UK",      phone:"+44 20-XXXX-XXXX" },
// // // ];
// // // const INDIA_OFFICES = [
// // //   { flag:"🇮🇳", city:"Bangalore HQ", phone:"+91 9900566466" },
// // //   { flag:"🇮🇳", city:"Mysore",       phone:null },
// // //   { flag:"🇮🇳", city:"Mumbai",       phone:null },
// // //   { flag:"🇮🇳", city:"Hyderabad",    phone:null },
// // // ];
// // // const WHY_SOLUTIONS = [
// // //   "Dedicated project managers in North American and UK time zones",
// // //   "GDPR, PIPEDA, and CCPA-compliant systems from day one",
// // //   "Full creative and technical capability of a 100+ person studio",
// // //   "Transparent, fixed-price proposals — no surprises",
// // //   "Long-term partnership, not one-and-done project delivery",
// // // ];

// // // /* ─── useInView ─── */
// // // function useInView(threshold = 0.18) {
// // //   const ref = useRef<HTMLDivElement>(null);
// // //   const [visible, setVisible] = useState(false);
// // //   useEffect(() => {
// // //     const el = ref.current; if (!el) return;
// // //     const obs = new IntersectionObserver(
// // //       ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
// // //       { threshold }
// // //     );
// // //     obs.observe(el);
// // //     return () => obs.disconnect();
// // //   }, [threshold]);
// // //   return { ref, visible };
// // // }

// // // /* ─── Animated counter ─── */
// // // function Counter({ to, suffix, active }: { to: number; suffix: string; active: boolean }) {
// // //   const [v, setV] = useState(0);
// // //   const done = useRef(false);
// // //   useEffect(() => {
// // //     if (!active || done.current) return;
// // //     done.current = true;
// // //     let start: number | null = null;
// // //     const dur = 1800;
// // //     const tick = (ts: number) => {
// // //       if (!start) start = ts;
// // //       const p = Math.min((ts - start) / dur, 1);
// // //       const ease = 1 - Math.pow(1 - p, 4);
// // //       setV(Math.round(ease * to));
// // //       if (p < 1) requestAnimationFrame(tick);
// // //     };
// // //     requestAnimationFrame(tick);
// // //   }, [active, to]);
// // //   return <span>{v}{suffix}</span>;
// // // }

// // // /* ─── Typewriter ─── */
// // // function Typewriter({ text, active }: { text: string; active: boolean }) {
// // //   const [out, setOut] = useState("");
// // //   const [blink, setBlink] = useState(true);
// // //   useEffect(() => {
// // //     if (!active) return;
// // //     let i = 0;
// // //     const t = setInterval(() => { setOut(text.slice(0, ++i)); if (i >= text.length) clearInterval(t); }, 40);
// // //     const c = setInterval(() => setBlink(b => !b), 520);
// // //     return () => { clearInterval(t); clearInterval(c); };
// // //   }, [active, text]);
// // //   return <>{out}<span style={{ opacity: blink ? 1 : 0, color: T.teal }}>|</span></>;
// // // }

// // // /* ─── Particle canvas ─── */
// // // function Particles() {
// // //   const ref = useRef<HTMLCanvasElement>(null);
// // //   useEffect(() => {
// // //     const c = ref.current; if (!c) return;
// // //     const ctx = c.getContext("2d")!;
// // //     let W = c.width = c.offsetWidth, H = c.height = c.offsetHeight;
// // //     const pts = Array.from({ length: 60 }, () => ({
// // //       x: Math.random()*W, y: Math.random()*H,
// // //       vx: (Math.random()-.5)*.3, vy: (Math.random()-.5)*.3,
// // //       r: Math.random()*1.5+.3, a: Math.random()*.45+.08,
// // //     }));
// // //     let raf: number;
// // //     const draw = () => {
// // //       ctx.clearRect(0,0,W,H);
// // //       pts.forEach(p => {
// // //         p.x+=p.vx; p.y+=p.vy;
// // //         if(p.x<0)p.x=W; if(p.x>W)p.x=0;
// // //         if(p.y<0)p.y=H; if(p.y>H)p.y=0;
// // //         ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
// // //         ctx.fillStyle=`rgba(0,201,167,${p.a})`; ctx.fill();
// // //       });
// // //       for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++) {
// // //         const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy);
// // //         if(d<110){ ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y);
// // //           ctx.strokeStyle=`rgba(0,201,167,${.06*(1-d/110)})`; ctx.lineWidth=.5; ctx.stroke(); }
// // //       }
// // //       raf=requestAnimationFrame(draw);
// // //     };
// // //     draw();
// // //     const resize=()=>{W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;};
// // //     window.addEventListener("resize",resize);
// // //     return ()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",resize);};
// // //   },[]);
// // //   return <canvas ref={ref} style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}}/>;
// // // }

// // // /* ─── FadeUp wrapper ─── */
// // // function FadeUp({ children, delay=0, style: ext }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
// // //   const {ref,visible}=useInView();
// // //   return (
// // //     <div ref={ref} style={{ opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(32px)", transition:`opacity .7s ease ${delay}s,transform .7s ease ${delay}s`, ...ext }}>
// // //       {children}
// // //     </div>
// // //   );
// // // }

// // // /* ─── Magnetic button ─── */
// // // function MagBtn({ children, primary, style: ext }: { children: React.ReactNode; primary?: boolean; style?: React.CSSProperties }) {
// // //   const ref = useRef<HTMLButtonElement>(null);
// // //   const mv = useCallback((e: React.MouseEvent) => {
// // //     const el=ref.current; if(!el) return;
// // //     const r=el.getBoundingClientRect();
// // //     el.style.transform=`translate(${(e.clientX-(r.left+r.width/2))*.3}px,${(e.clientY-(r.top+r.height/2))*.3}px) scale(1.05)`;
// // //   },[]);
// // //   const lv = useCallback(()=>{ if(ref.current) ref.current.style.transform=""; },[]);
// // //   return (
// // //     <button ref={ref} onMouseMove={mv} onMouseLeave={lv} style={{
// // //       padding:"14px 34px", borderRadius:10, cursor:"pointer",
// // //       fontFamily:"'Poppins',sans-serif", fontWeight:700, fontSize:15,
// // //       transition:"transform .25s ease, box-shadow .25s ease",
// // //       ...(primary ? {
// // //         background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
// // //         color:"#000", border:"none", boxShadow:`0 8px 32px rgba(0,201,167,.3)`,
// // //       } : {
// // //         background:"transparent", color:"#fff", border:"1.5px solid rgba(255,255,255,.22)",
// // //       }),
// // //       ...ext,
// // //     }}>{children}</button>
// // //   );
// // // }

// // // /* ─── Main ─── */
// // // export default function AboutPage() {
// // //   const [hoveredVal,setHoveredVal] = useState<number|null>(null);
// // //   const [mouse,setMouse]           = useState({x:0,y:0});
// // //   const statsIO   = useInView(.3);
// // //   const heroTWIO  = useInView(.3);

// // //   useEffect(()=>{
// // //     const f=(e:MouseEvent)=>setMouse({x:e.clientX/window.innerWidth,y:e.clientY/window.innerHeight});
// // //     window.addEventListener("mousemove",f); return ()=>window.removeEventListener("mousemove",f);
// // //   },[]);

// // //   return (
// // //     <>
// // //       <Navbar/>
// // //       <main style={{background:T.navy0,fontFamily:"'Poppins',sans-serif",color:"#fff",overflowX:"hidden"}}>
// // //         <style>{`
// // //           @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

// // //           @keyframes abFloat    {0%,100%{transform:translateY(0)}    50%{transform:translateY(-14px)}}
// // //           @keyframes abFloat2   {0%,100%{transform:translateY(-8px)} 50%{transform:translateY(8px)}}
// // //           @keyframes abSpin     {from{transform:rotate(0)} to{transform:rotate(360deg)}}
// // //           @keyframes abSpinR    {from{transform:rotate(0)} to{transform:rotate(-360deg)}}
// // //           @keyframes abPulse    {0%,100%{opacity:.12;transform:scale(1)} 50%{opacity:.26;transform:scale(1.08)}}
// // //           @keyframes abScan     {0%{top:-2px} 100%{top:100%}}
// // //           @keyframes abBlink    {0%,100%{opacity:1} 50%{opacity:0}}
// // //           @keyframes abBadgePop {0%{transform:scale(0) rotate(-12deg);opacity:0} 70%{transform:scale(1.08) rotate(2deg)} 100%{transform:scale(1) rotate(0);opacity:1}}
// // //           @keyframes abRowIn    {from{opacity:0;transform:translateX(-14px)} to{opacity:1;transform:translateX(0)}}
// // //           @keyframes abGlow     {0%,100%{box-shadow:0 0 18px rgba(0,201,167,.18)} 50%{box-shadow:0 0 44px rgba(0,201,167,.45)}}
// // //           @keyframes abTagDrift {0%{transform:translateX(0)} 100%{transform:translateX(-50%)}}
// // //           @keyframes abShimmer  {0%{background-position:-200% center} 100%{background-position:200% center}}

// // //           .ab-shimmer {
// // //             background:linear-gradient(90deg,#fff 0%,${T.teal} 38%,#fff 56%,${T.teal} 100%);
// // //             background-size:200% auto;
// // //             -webkit-background-clip:text; -webkit-text-fill-color:transparent;
// // //             animation:abShimmer 4s linear infinite;
// // //           }
// // //           .ab-tag-track { display:flex; gap:12px; animation:abTagDrift 20s linear infinite; width:max-content; }
// // //           .ab-tag-track:hover { animation-play-state:paused; }

// // //           .ab-val-card { border-radius:18px; padding:32px 26px; cursor:default; position:relative; overflow:hidden;
// // //             transition:transform .3s,border-color .3s,background .3s,box-shadow .3s; }
// // //           .ab-val-card::before { content:""; position:absolute; top:0; left:-100%; width:55%; height:100%;
// // //             background:linear-gradient(90deg,transparent,rgba(0,201,167,.06),transparent);
// // //             transition:left .55s ease; }
// // //           .ab-val-card:hover::before { left:160%; }
// // //           .ab-val-card:hover { transform:translateY(-8px) scale(1.02); box-shadow:0 24px 60px rgba(0,0,0,.45); }

// // //           .ab-comp-row { transition:background .2s; }
// // //           .ab-comp-row:hover { background:rgba(0,201,167,.04) !important; }
// // //           .ab-comp-row:nth-child(even) { background:rgba(255,255,255,.02); }
// // //           .ab-why-item { transition:transform .2s,background .2s; }
// // //           .ab-why-item:hover { transform:translateX(8px); background:rgba(0,201,167,.08) !important; }
// // //           .ab-office-row { transition:background .2s,transform .2s; cursor:default; }
// // //           .ab-office-row:hover { background:rgba(0,201,167,.09) !important; transform:translateX(6px); }

// // //           .ab-section-pad  { padding:100px 48px; }
// // //           .ab-stat-strip   { display:grid; grid-template-columns:repeat(4,1fr); }
// // //           .ab-stat-cell:not(:last-child) { border-right:1px solid rgba(255,255,255,.06); }
// // //           .ab-story-grid   { display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:center; }
// // //           .ab-parent-grid  { display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:center; }
// // //           .ab-parent-stats { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
// // //           .ab-why-grid     { display:grid; grid-template-columns:1fr 1fr; gap:32px; }
// // //           .ab-values-grid  { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
// // //           .ab-offices-grid { display:grid; grid-template-columns:1fr 1fr; gap:24px; }
// // //           .ab-comp-cols    { display:grid; grid-template-columns:1.2fr 1fr 1fr; }

// // //           @media (max-width:960px) {
// // //             .ab-story-grid,.ab-parent-grid,.ab-why-grid,.ab-offices-grid{grid-template-columns:1fr!important;}
// // //             .ab-stat-strip{grid-template-columns:repeat(2,1fr)!important;}
// // //           }
// // //           @media (max-width:720px) {
// // //             .ab-values-grid{grid-template-columns:1fr 1fr!important;}
// // //             .ab-comp-cols{grid-template-columns:1fr!important;}
// // //           }
// // //           @media (max-width:480px) {
// // //             .ab-values-grid{grid-template-columns:1fr!important;}
// // //             .ab-section-pad{padding:60px 20px!important;}
// // //             .ab-hero-wrap{padding:100px 20px 64px!important;}
// // //             .ab-stat-strip{grid-template-columns:1fr 1fr!important;}
// // //             .ab-cta-inner{padding:44px 22px!important;}
// // //           }
// // //         `}</style>

// // //         {/* ══ HERO ══ */}
// // //         <section className="ab-hero-wrap" style={{
// // //           minHeight:"92vh", display:"flex", alignItems:"center",
// // //           padding:"120px 48px 80px",
// // //           background:`linear-gradient(135deg,#020d1e 0%,#051628 40%,${T.navy0} 100%)`,
// // //           position:"relative", overflow:"hidden",
// // //         }}>
// // //           <Particles/>
// // //           <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:1,
// // //             backgroundImage:`linear-gradient(rgba(0,201,167,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.035) 1px,transparent 1px)`,
// // //             backgroundSize:"60px 60px"}}/>

// // //           {/* Parallax orbs */}
// // //           <div style={{position:"absolute",width:700,height:700,borderRadius:"50%",
// // //             background:`radial-gradient(circle,${T.teal}18 0%,transparent 65%)`,
// // //             top:"50%",right:-200,
// // //             transform:`translateY(-50%) translate(${mouse.x*-28}px,${mouse.y*-20}px)`,
// // //             transition:"transform .4s ease",
// // //             animation:"abPulse 7s ease-in-out infinite",pointerEvents:"none",zIndex:1}}/>
// // //           <div style={{position:"absolute",width:420,height:420,borderRadius:"50%",
// // //             background:"radial-gradient(circle,rgba(99,102,241,.12) 0%,transparent 65%)",
// // //             top:"10%",left:"-6%",
// // //             transform:`translate(${mouse.x*18}px,${mouse.y*14}px)`,
// // //             transition:"transform .45s ease",
// // //             animation:"abPulse 9s ease-in-out infinite .5s",pointerEvents:"none",zIndex:1}}/>

// // //           {/* Rings */}
// // //           <div style={{position:"absolute",width:560,height:560,borderRadius:"50%",
// // //             border:"1px dashed rgba(0,201,167,.1)",
// // //             top:"50%",right:-120,transform:"translateY(-50%)",
// // //             animation:"abSpin 50s linear infinite",pointerEvents:"none",zIndex:1}}/>
// // //           <div style={{position:"absolute",width:380,height:380,borderRadius:"50%",
// // //             border:"1px dashed rgba(0,201,167,.06)",
// // //             top:"50%",right:-50,transform:"translateY(-50%)",
// // //             animation:"abSpinR 32s linear infinite",pointerEvents:"none",zIndex:1}}/>

// // //           {/* Scan line */}
// // //           {/* <div style={{position:"absolute",left:0,right:0,height:1,zIndex:2,pointerEvents:"none",
// // //             background:"linear-gradient(90deg,transparent,rgba(0,201,167,.3),transparent)",
// // //             animation:"abScan 6s linear infinite"}}/> */}

// // //           <div style={{maxWidth:1180,margin:"0 auto",position:"relative",zIndex:3,width:"100%"}}>
// // //             <div style={{maxWidth:820}} ref={heroTWIO.ref}>

// // //               <FadeUp>
// // //                 <div style={{
// // //                   display:"inline-flex",alignItems:"center",gap:10,
// // //                   background:"rgba(0,201,167,.08)",border:"1px solid rgba(0,201,167,.25)",
// // //                   borderRadius:30,padding:"7px 18px",marginBottom:32,
// // //                   animation:"abGlow 3s ease-in-out infinite",
// // //                 }}>
// // //                   <div style={{width:7,height:7,borderRadius:"50%",background:T.teal,
// // //                     boxShadow:`0 0 10px ${T.teal}`,animation:"abBlink 1.4s ease-in-out infinite"}}/>
// // //                   <span style={{fontSize:11.5,fontWeight:700,color:T.teal,letterSpacing:"0.1em",textTransform:"uppercase"}}>
// // //                     About NNC Digital Solutions
// // //                   </span>
// // //                 </div>
// // //               </FadeUp>

// // //               <FadeUp delay={0.1}>
// // //                 <h1 style={{fontSize:"clamp(32px,4.5vw,64px)",fontWeight:900,lineHeight:1.12,marginBottom:28,letterSpacing:"-0.02em"}}>
// // //                   Built on{" "}
// // //                   <span style={{background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
// // //                     Indian Tech Excellence.
// // //                   </span>
// // //                   <br/>
// // //                   <Typewriter text="Built for Canadian, US & UK Business." active={heroTWIO.visible}/>
// // //                 </h1>
// // //               </FadeUp>

// // //               <FadeUp delay={0.2}>
// // //                 <p style={{fontSize:"clamp(15px,1.4vw,18px)",color:"rgba(255,255,255,.52)",lineHeight:1.85,marginBottom:44,maxWidth:640}}>
// // //                   NNC Digital Solutions is the international technology arm of Nakshatra Namaha Creations Pvt. Ltd. — one of Bangalore&apos;s most respected digital studios. We were born from a belief that the deep technology expertise that has transformed thousands of Indian businesses deserves to be accessible to growing companies in Canada, the USA, and the United Kingdom.
// // //                 </p>
// // //               </FadeUp>

// // //               <FadeUp delay={0.3}>
// // //                 <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
// // //                   <MagBtn primary>Book a Free Consultation</MagBtn>
// // //                   <MagBtn>View Our Work →</MagBtn>
// // //                 </div>
// // //               </FadeUp>
// // //             </div>

// // //             {/* Stat strip */}
// // //             <FadeUp delay={0.42}>
// // //               <div ref={statsIO.ref}>
// // //                 <div className="ab-stat-strip" style={{
// // //                   marginTop:72,background:"rgba(255,255,255,.06)",
// // //                   borderRadius:16,overflow:"hidden",border:"1px solid rgba(255,255,255,.08)",gap:1,
// // //                 }}>
// // //                   {STATS.map((s,i)=>(
// // //                     <div key={i} className="ab-stat-cell" style={{padding:"28px 20px",textAlign:"center",
// // //                       background:"rgba(5,14,30,.85)",position:"relative",overflow:"hidden",
// // //                       transition:"background .3s",cursor:"default"}}
// // //                       onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,.08)"}
// // //                       onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="rgba(5,14,30,.85)"}
// // //                     >
// // //                       <p style={{fontSize:"clamp(26px,3vw,44px)",fontWeight:900,margin:0,
// // //                         background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,
// // //                         WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
// // //                         <Counter to={s.value} suffix={s.suffix} active={statsIO.visible}/>
// // //                       </p>
// // //                       <p style={{fontSize:11.5,color:"rgba(255,255,255,.4)",margin:"6px 0 0",fontWeight:600,letterSpacing:"0.07em",textTransform:"uppercase"}}>
// // //                         {s.label}
// // //                       </p>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </FadeUp>
// // //           </div>
// // //         </section>

// // //         {/* ══ STORY ══ */}
// // //         <section className="ab-section-pad" style={{background:T.navy0}}>
// // //           <div style={{maxWidth:1180,margin:"0 auto"}}>
// // //             <div className="ab-story-grid">

// // //               <FadeUp>
// // //                 <div>
// // //                   <p style={{color:T.teal,fontSize:11,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:14}}>— Our Story —</p>
// // //                   <h2 style={{fontSize:"clamp(24px,2.8vw,38px)",fontWeight:900,lineHeight:1.2,marginBottom:28}}>
// // //                     From Bangalore to Canada —{" "}
// // //                     <span style={{background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
// // //                       The NNC Digital Story
// // //                     </span>
// // //                   </h2>
// // //                   {[
// // //                     "Nakshatra Namaha Creations Pvt. Ltd. was founded in Bangalore, India — a city synonymous with world-class software engineering. Over 8+ years, the company built a reputation as one of Karnataka's most trusted digital studios, delivering 565+ projects across website development, mobile apps, digital marketing, corporate video, 2D animation, B2B marketing, and more.",
// // //                     "In response to increasing demand from businesses in Canada, the United States, and the United Kingdom who needed a trustworthy offshore technology partner — NNC Digital Solutions was launched as Nakshatra Namaha Creations' dedicated international brand.",
// // //                     "NNC Digital is not a new company trying to build a reputation. It is the international expression of a decade of proven capability — backed by the people, processes, and portfolio of one of India's most capable digital studios.",
// // //                   ].map((para,i)=>(
// // //                     <p key={i} style={{color:"rgba(255,255,255,.52)",fontSize:14.5,lineHeight:1.85,
// // //                       margin:"0 0 18px",opacity:0,animation:`abRowIn .6s ease ${.1+i*.15}s both`}}>
// // //                       {para}
// // //                     </p>
// // //                   ))}
// // //                   <div style={{
// // //                     marginTop:22,padding:"18px 22px",borderRadius:12,
// // //                     background:"rgba(0,201,167,.06)",border:"1px solid rgba(0,201,167,.2)",
// // //                     display:"flex",alignItems:"center",gap:14,
// // //                     transition:"transform .25s,background .25s",cursor:"default",
// // //                   }}
// // //                     onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateX(6px)";(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,.1)";}}
// // //                     onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,.06)";}}
// // //                   >
// // //                     <span style={{fontSize:28}}>🇮🇳</span>
// // //                     <div>
// // //                       <p style={{fontSize:13,fontWeight:700,color:"#fff",margin:0}}>Bangalore → Toronto · New York · London</p>
// // //                       <p style={{fontSize:12,color:"rgba(255,255,255,.4)",margin:"3px 0 0"}}>One trusted studio. Three international markets.</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </FadeUp>

// // //               <FadeUp delay={0.15}>
// // //                 <div style={{position:"relative"}}>
// // //                   <div style={{
// // //                     borderRadius:24,overflow:"hidden",
// // //                     border:"1px solid rgba(0,201,167,.2)",
// // //                     boxShadow:`0 32px 80px rgba(0,0,0,.5),0 0 60px rgba(0,201,167,.08)`,
// // //                     position:"relative",aspectRatio:"4/3",
// // //                     transition:"transform .4s ease,box-shadow .4s ease",
// // //                   }}
// // //                     onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="scale(1.02) rotateY(-2deg)";(e.currentTarget as HTMLElement).style.boxShadow=`0 40px 100px rgba(0,0,0,.6),0 0 80px rgba(0,201,167,.15)`;}}
// // //                     onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.boxShadow=`0 32px 80px rgba(0,0,0,.5),0 0 60px rgba(0,201,167,.08)`;}}
// // //                   >
// // //                     <Image src="/NNCLOGO.jpg" alt="NNC Digital" fill style={{objectFit:"cover"}}/>
// // //                     <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(5,14,30,.85) 0%,transparent 50%)"}}/>
// // //                     <div style={{position:"absolute",left:0,right:0,height:2,pointerEvents:"none",
// // //                       background:"linear-gradient(90deg,transparent,rgba(0,201,167,.5),transparent)",
// // //                       animation:"abScan 4s linear infinite"}}/>
// // //                     <div style={{position:"absolute",bottom:24,left:24,right:24}}>
// // //                       <p style={{fontSize:13,fontWeight:700,color:"#fff",margin:0}}>NNC Digital Solutions</p>
// // //                       <p style={{fontSize:11.5,color:T.teal,margin:"4px 0 0"}}>A Nakshatra Namaha Creations Company</p>
// // //                     </div>
// // //                   </div>
// // //                   {/* badge top */}
// // //                   <div style={{
// // //                     position:"absolute",top:-18,right:-18,
// // //                     background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
// // //                     borderRadius:16,padding:"14px 18px",textAlign:"center",
// // //                     boxShadow:`0 8px 32px rgba(0,201,167,.45)`,
// // //                     animation:"abFloat 4s ease-in-out infinite,abBadgePop .8s ease .3s both",
// // //                   }}>
// // //                     <p style={{fontSize:24,fontWeight:900,color:"#000",margin:0,lineHeight:1}}>565+</p>
// // //                     <p style={{fontSize:10,fontWeight:700,color:"rgba(0,0,0,.65)",margin:"3px 0 0",letterSpacing:"0.06em"}}>PROJECTS</p>
// // //                   </div>
// // //                   {/* badge bottom */}
// // //                   <div style={{
// // //                     position:"absolute",bottom:-18,left:-18,
// // //                     background:"rgba(5,14,30,.95)",border:"1px solid rgba(0,201,167,.3)",
// // //                     borderRadius:14,padding:"12px 16px",
// // //                     boxShadow:"0 8px 32px rgba(0,0,0,.45)",
// // //                     animation:"abFloat2 5s ease-in-out infinite,abBadgePop .8s ease .6s both",
// // //                   }}>
// // //                     <p style={{fontSize:12,fontWeight:700,color:"#fff",margin:0}}>🏙️ Bangalore · Toronto · London</p>
// // //                     <p style={{fontSize:10.5,color:"rgba(255,255,255,.4)",margin:"3px 0 0"}}>8+ years of global delivery</p>
// // //                   </div>
// // //                 </div>
// // //               </FadeUp>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ══ PARENT COMPANY ══ */}
// // //         <section className="ab-section-pad" style={{
// // //           background:"linear-gradient(180deg,#040e1f 0%,#030b19 100%)",
// // //           position:"relative",overflow:"hidden",
// // //         }}>
// // //           <div style={{position:"absolute",inset:0,pointerEvents:"none",
// // //             backgroundImage:`radial-gradient(rgba(0,201,167,.06) 1px,transparent 1px)`,backgroundSize:"32px 32px"}}/>
// // //           <div style={{maxWidth:1180,margin:"0 auto",position:"relative",zIndex:1}}>

// // //             <FadeUp style={{textAlign:"center",marginBottom:56}as React.CSSProperties}>
// // //               <p style={{color:T.teal,fontSize:11,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:14}}>— Backed By —</p>
// // //               <h2 style={{fontSize:"clamp(24px,2.8vw,38px)",fontWeight:900,marginBottom:12}}>
// // //                 Our Parent Company —{" "}
// // //                 <span className="ab-shimmer">Nakshatra Namaha Creations Pvt. Ltd.</span>
// // //               </h2>
// // //               <h3 style={{fontSize:16,fontWeight:500,color:"rgba(255,255,255,.45)",margin:0}}>8+ Years of Digital Excellence from Bangalore, India</h3>
// // //             </FadeUp>

// // //             <FadeUp delay={0.1}>
// // //               <div style={{
// // //                 borderRadius:20,padding:"40px 44px",marginBottom:48,
// // //                 background:"rgba(0,201,167,.05)",border:"1px solid rgba(0,201,167,.2)",
// // //                 transition:"box-shadow .3s",
// // //               }}
// // //                 onMouseEnter={e=>(e.currentTarget as HTMLElement).style.boxShadow="0 24px 64px rgba(0,0,0,.4)"}
// // //                 onMouseLeave={e=>(e.currentTarget as HTMLElement).style.boxShadow=""}
// // //               >
// // //                 <div className="ab-parent-grid">
// // //                   <div>
// // //                     <p style={{fontSize:15,color:"rgba(255,255,255,.55)",lineHeight:1.85,margin:0}}>
// // //                       Headquartered in <strong style={{color:"#fff"}}>Bengaluru, Karnataka</strong> — India&apos;s Silicon Valley — with offices in Mysore, Mumbai, and Hyderabad. A full-spectrum digital studio combining creative excellence with engineering rigour.
// // //                     </p>
// // //                     <a href="https://www.nakshatranamahacreations.com" target="_blank" rel="noopener noreferrer"
// // //                       style={{display:"inline-flex",alignItems:"center",gap:8,marginTop:20,fontSize:13.5,fontWeight:700,color:T.teal,textDecoration:"none",transition:"gap .2s"}}
// // //                       onMouseEnter={e=>(e.currentTarget as HTMLElement).style.gap="16px"}
// // //                       onMouseLeave={e=>(e.currentTarget as HTMLElement).style.gap="8px"}
// // //                     >🌐 www.nakshatranamahacreations.com →</a>
// // //                   </div>
// // //                   <div className="ab-parent-stats">
// // //                     {[{n:"8+",l:"Years Active"},{n:"565+",l:"Projects"},{n:"100+",l:"Team Size"},{n:"4",l:"Indian Offices"}].map((s,i)=>(
// // //                       <div key={i} style={{
// // //                         textAlign:"center",padding:"20px 12px",borderRadius:14,
// // //                         background:"rgba(0,201,167,.06)",border:"1px solid rgba(0,201,167,.15)",
// // //                         transition:"transform .25s,background .25s",cursor:"default",
// // //                       }}
// // //                         onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-6px)";(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,.12)";}}
// // //                         onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,.06)";}}
// // //                       >
// // //                         <p style={{fontSize:28,fontWeight:900,color:T.teal,margin:0}}>{s.n}</p>
// // //                         <p style={{fontSize:11,color:"rgba(255,255,255,.4)",margin:"4px 0 0",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"}}>{s.l}</p>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </FadeUp>

// // //             {/* Marquee tags */}
// // //             <FadeUp delay={0.15}>
// // //               <h3 style={{fontSize:12,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,.35)",marginBottom:16}}>Parent Company Services</h3>
// // //               <div style={{overflow:"hidden",marginBottom:48}}>
// // //                 <div className="ab-tag-track">
// // //                   {[...PARENT_SERVICES,...PARENT_SERVICES].map((s,i)=>(
// // //                     <span key={i} style={{
// // //                       flexShrink:0,fontSize:13,fontWeight:600,color:"rgba(255,255,255,.72)",
// // //                       background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.1)",
// // //                       padding:"8px 18px",borderRadius:30,whiteSpace:"nowrap",
// // //                       transition:"background .2s,color .2s",cursor:"default",
// // //                     }}
// // //                       onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,.1)";(e.currentTarget as HTMLElement).style.color=T.teal;}}
// // //                       onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.05)";(e.currentTarget as HTMLElement).style.color="rgba(255,255,255,.72)";}}
// // //                     >{s}</span>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </FadeUp>

// // //             {/* Comparison table */}
// // //             <FadeUp delay={0.2}>
// // //               <div style={{borderRadius:16,overflow:"hidden",border:"1px solid rgba(255,255,255,.08)"}}>
// // //                 <div className="ab-comp-cols" style={{background:"rgba(0,201,167,.08)",borderBottom:"1px solid rgba(0,201,167,.2)",padding:"16px 24px"}}>
// // //                   {["Metric","Nakshatra Namaha Creations","NNC Digital (International)"].map(h=>(
// // //                     <p key={h} style={{fontSize:11,fontWeight:700,color:T.teal,textTransform:"uppercase",letterSpacing:"0.1em",margin:0}}>{h}</p>
// // //                   ))}
// // //                 </div>
// // //                 {COMPARISON.map((row,i)=>(
// // //                   <div key={i} className="ab-comp-row ab-comp-cols" style={{
// // //                     padding:"18px 24px",
// // //                     borderBottom:i<COMPARISON.length-1?"1px solid rgba(255,255,255,.05)":"none",
// // //                     animation:`abRowIn .5s ease ${i*.1}s both`,
// // //                   }}>
// // //                     <p style={{fontSize:13,fontWeight:700,color:"rgba(255,255,255,.6)",margin:0}}>{row.metric}</p>
// // //                     <p style={{fontSize:13,color:"rgba(255,255,255,.85)",margin:0}}>{row.parent}</p>
// // //                     <p style={{fontSize:13,color:T.teal,fontWeight:600,margin:0}}>{row.nnc}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </FadeUp>
// // //           </div>
// // //         </section>

// // //         {/* ══ WHY WE LAUNCHED ══ */}
// // //         <section className="ab-section-pad" style={{background:T.navy0}}>
// // //           <div style={{maxWidth:1180,margin:"0 auto"}}>
// // //             <FadeUp style={{textAlign:"center",marginBottom:56}as React.CSSProperties}>
// // //               <p style={{color:T.teal,fontSize:11,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:14}}>— Our Purpose —</p>
// // //               <h2 style={{fontSize:"clamp(24px,2.8vw,38px)",fontWeight:900,margin:0}}>
// // //                 Why We Launched NNC Digital for the{" "}
// // //                 <span style={{background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
// // //                   North American &amp; UK Market
// // //                 </span>
// // //               </h2>
// // //             </FadeUp>

// // //             <div className="ab-why-grid">
// // //               <FadeUp delay={0.08}>
// // //                 <div style={{
// // //                   borderRadius:20,padding:"40px 36px",height:"100%",
// // //                   background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.08)",
// // //                   transition:"border-color .3s,transform .3s",
// // //                 }}
// // //                   onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,80,80,.28)";(e.currentTarget as HTMLElement).style.transform="translateY(-4px)";}}
// // //                   onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,.08)";(e.currentTarget as HTMLElement).style.transform="";}}
// // //                 >
// // //                   <div style={{width:48,height:48,borderRadius:14,marginBottom:24,background:"rgba(255,80,80,.1)",border:"1px solid rgba(255,80,80,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>🔍</div>
// // //                   <h3 style={{fontSize:18,fontWeight:800,color:"#fff",marginBottom:16}}>The Gap We Saw</h3>
// // //                   <p style={{color:"rgba(255,255,255,.5)",fontSize:14.5,lineHeight:1.85,margin:"0 0 14px"}}>
// // //                     Businesses in Canada, the USA, and the UK face a common challenge: local agencies charge premium prices for work that can be delivered at a fraction of the cost — without any quality reduction — by the right offshore partner.
// // //                   </p>
// // //                   <p style={{color:"rgba(255,255,255,.5)",fontSize:14.5,lineHeight:1.85,margin:0}}>
// // //                     Most offshore agencies fail because they don&apos;t understand the regulatory environment, commercial culture, or specific needs of Western businesses.
// // //                   </p>
// // //                 </div>
// // //               </FadeUp>

// // //               <FadeUp delay={0.14}>
// // //                 <div style={{
// // //                   borderRadius:20,padding:"40px 36px",height:"100%",
// // //                   background:"rgba(0,201,167,.04)",border:"1px solid rgba(0,201,167,.18)",
// // //                   transition:"border-color .3s,transform .3s",
// // //                 }}
// // //                   onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(0,201,167,.4)";(e.currentTarget as HTMLElement).style.transform="translateY(-4px)";}}
// // //                   onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(0,201,167,.18)";(e.currentTarget as HTMLElement).style.transform="";}}
// // //                 >
// // //                   <div style={{width:48,height:48,borderRadius:14,marginBottom:24,background:"rgba(0,201,167,.1)",border:"1px solid rgba(0,201,167,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>✅</div>
// // //                   <h3 style={{fontSize:18,fontWeight:800,color:"#fff",marginBottom:20}}>The Solution We Built</h3>
// // //                   <div style={{display:"flex",flexDirection:"column",gap:12}}>
// // //                     {WHY_SOLUTIONS.map((item,i)=>(
// // //                       <div key={i} className="ab-why-item" style={{
// // //                         display:"flex",gap:12,alignItems:"flex-start",
// // //                         padding:"10px 12px",borderRadius:10,
// // //                         background:"rgba(0,201,167,.03)",
// // //                         animation:`abRowIn .5s ease ${.2+i*.1}s both`,
// // //                       }}>
// // //                         <div style={{
// // //                           width:22,height:22,borderRadius:"50%",flexShrink:0,marginTop:1,
// // //                           background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
// // //                           display:"flex",alignItems:"center",justifyContent:"center",
// // //                           fontSize:11,color:"#000",fontWeight:900,
// // //                         }}>✓</div>
// // //                         <p style={{color:"rgba(255,255,255,.7)",fontSize:14,lineHeight:1.65,margin:0}}>{item}</p>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </FadeUp>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ══ VALUES + OFFICES + CTA ══ */}
// // //         <section className="ab-section-pad" style={{background:"linear-gradient(180deg,#040e1f 0%,#030b19 100%)",position:"relative"}}>
// // //           <div style={{maxWidth:1180,margin:"0 auto"}}>

// // //             <FadeUp style={{textAlign:"center",marginBottom:52}as React.CSSProperties}>
// // //               <p style={{color:T.teal,fontSize:11,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:14}}>— Our Values —</p>
// // //               <h2 style={{fontSize:"clamp(24px,2.8vw,38px)",fontWeight:900,margin:0}}>
// // //                 What We{" "}
// // //                 <span style={{background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Stand For</span>
// // //               </h2>
// // //             </FadeUp>

// // //             <div className="ab-values-grid" style={{marginBottom:88}}>
// // //               {VALUES.map((v,i)=>(
// // //                 <FadeUp key={i} delay={0.06*i}>
// // //                   <div className="ab-val-card"
// // //                     onMouseEnter={()=>setHoveredVal(i)} onMouseLeave={()=>setHoveredVal(null)}
// // //                     style={{
// // //                       background:hoveredVal===i?"rgba(0,201,167,.07)":"rgba(255,255,255,.03)",
// // //                       border:`1px solid ${hoveredVal===i?"rgba(0,201,167,.38)":"rgba(255,255,255,.08)"}`,
// // //                       boxShadow:hoveredVal===i?"0 24px 60px rgba(0,0,0,.45)":"none",
// // //                     }}
// // //                   >
// // //                     {hoveredVal===i && <div style={{position:"absolute",top:0,left:0,right:0,height:2,borderRadius:"18px 18px 0 0",background:`linear-gradient(90deg,transparent,${T.teal},transparent)`}}/>}
// // //                     <div style={{fontSize:34,marginBottom:16,display:"inline-block",transition:"transform .3s",transform:hoveredVal===i?"scale(1.22) rotate(-5deg)":"scale(1)"}}>{v.icon}</div>
// // //                     <p style={{fontSize:15.5,fontWeight:800,color:"#fff",marginBottom:8}}>{v.title}</p>
// // //                     <p style={{fontSize:13.5,color:"rgba(255,255,255,.45)",lineHeight:1.7,margin:0}}>{v.desc}</p>
// // //                   </div>
// // //                 </FadeUp>
// // //               ))}
// // //             </div>

// // //             {/* Offices */}
// // //             <FadeUp style={{textAlign:"center",marginBottom:36}as React.CSSProperties}>
// // //               <h2 style={{fontSize:"clamp(22px,2.4vw,34px)",fontWeight:900}}>
// // //                 Global{" "}
// // //                 <span style={{background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Offices</span>
// // //               </h2>
// // //             </FadeUp>

// // //             <div className="ab-offices-grid" style={{marginBottom:80}}>
// // //               <FadeUp delay={0.08}>
// // //                 <div style={{borderRadius:20,padding:"36px 32px",background:"rgba(0,201,167,.05)",border:"1px solid rgba(0,201,167,.2)",transition:"transform .3s,box-shadow .3s"}}
// // //                   onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-4px)";(e.currentTarget as HTMLElement).style.boxShadow="0 20px 50px rgba(0,0,0,.35)";}}
// // //                   onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.boxShadow="";}}
// // //                 >
// // //                   <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:T.teal,marginBottom:24}}>International Offices</p>
// // //                   <div style={{display:"flex",flexDirection:"column",gap:12}}>
// // //                     {INT_OFFICES.map((o,i)=>(
// // //                       <div key={i} className="ab-office-row" style={{
// // //                         display:"flex",alignItems:"center",gap:14,
// // //                         padding:"12px 14px",borderRadius:12,
// // //                         background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)",
// // //                         animation:`abRowIn .5s ease ${.1+i*.1}s both`,
// // //                       }}>
// // //                         <span style={{fontSize:24}}>{o.flag}</span>
// // //                         <div>
// // //                           <p style={{fontSize:14,fontWeight:700,color:"#fff",margin:0}}>{o.city}</p>
// // //                           <p style={{fontSize:13,color:T.teal,margin:"2px 0 0",fontWeight:600}}>{o.phone}</p>
// // //                         </div>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </FadeUp>

// // //               <FadeUp delay={0.14}>
// // //                 <div style={{borderRadius:20,padding:"36px 32px",background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.08)",transition:"transform .3s,box-shadow .3s"}}
// // //                   onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-4px)";(e.currentTarget as HTMLElement).style.boxShadow="0 20px 50px rgba(0,0,0,.35)";}}
// // //                   onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.boxShadow="";}}
// // //                 >
// // //                   <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(255,255,255,.38)",marginBottom:24}}>India Offices — Nakshatra Namaha Creations</p>
// // //                   <div style={{display:"flex",flexDirection:"column",gap:12}}>
// // //                     {INDIA_OFFICES.map((o,i)=>(
// // //                       <div key={i} className="ab-office-row" style={{
// // //                         display:"flex",alignItems:"center",gap:14,
// // //                         padding:"12px 14px",borderRadius:12,
// // //                         background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.05)",
// // //                         animation:`abRowIn .5s ease ${.1+i*.1}s both`,
// // //                       }}>
// // //                         <span style={{fontSize:24}}>{o.flag}</span>
// // //                         <div>
// // //                           <p style={{fontSize:14,fontWeight:700,color:"#fff",margin:0}}>{o.city}</p>
// // //                           {o.phone&&<p style={{fontSize:12.5,color:"rgba(255,255,255,.4)",margin:"2px 0 0"}}>{o.phone}</p>}
// // //                         </div>
// // //                       </div>
// // //                     ))}
// // //                     <div style={{paddingTop:14,borderTop:"1px solid rgba(255,255,255,.07)"}}>
// // //                       <p style={{fontSize:12.5,color:"rgba(255,255,255,.35)",margin:0}}>✉️ info@nakshatranamahacreations.com</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </FadeUp>
// // //             </div>

// // //             {/* Final CTA */}
// // //             <FadeUp delay={0.1}>
// // //               <div className="ab-cta-inner" style={{
// // //                 borderRadius:24,padding:"64px 52px",textAlign:"center",
// // //                 background:`linear-gradient(135deg,${T.tealDark}22 0%,rgba(5,14,30,.9) 50%,${T.navy0} 100%)`,
// // //                 border:"1px solid rgba(0,201,167,.22)",
// // //                 position:"relative",overflow:"hidden",
// // //                 transition:"box-shadow .4s",
// // //               }}
// // //                 onMouseEnter={e=>(e.currentTarget as HTMLElement).style.boxShadow="0 40px 100px rgba(0,0,0,.5),0 0 80px rgba(0,201,167,.1)"}
// // //                 onMouseLeave={e=>(e.currentTarget as HTMLElement).style.boxShadow=""}
// // //               >
// // //                 <div style={{position:"absolute",width:500,height:500,borderRadius:"50%",
// // //                   background:`radial-gradient(circle,${T.teal}12 0%,transparent 65%)`,
// // //                   top:"50%",left:"50%",transform:"translate(-50%,-50%)",
// // //                   animation:"abPulse 5s ease-in-out infinite",pointerEvents:"none"}}/>
// // //                 <div style={{position:"absolute",width:300,height:300,borderRadius:"50%",
// // //                   border:"1px dashed rgba(0,201,167,.1)",
// // //                   top:"50%",left:"50%",transform:"translate(-50%,-50%)",
// // //                   animation:"abSpin 25s linear infinite",pointerEvents:"none"}}/>
// // //                 <div style={{position:"relative",zIndex:1}}>
// // //                   <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:T.teal,marginBottom:16}}>— Get Started —</p>
// // //                   <h2 style={{fontSize:"clamp(22px,2.6vw,38px)",fontWeight:900,marginBottom:16}}>
// // //                     Ready to Start a{" "}
// // //                     <span style={{background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Conversation?</span>
// // //                   </h2>
// // //                   <p style={{color:"rgba(255,255,255,.5)",fontSize:15.5,lineHeight:1.8,maxWidth:540,margin:"0 auto 40px"}}>
// // //                     Whether you have a fully scoped project or just a problem you&apos;re trying to solve — we&apos;d love to talk. We&apos;ll respond within 24 hours with honest, practical advice.
// // //                   </p>
// // //                   <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
// // //                     <MagBtn primary>Book a Free Consultation</MagBtn>
// // //                     <MagBtn>View Our Work →</MagBtn>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </FadeUp>

// // //           </div>
// // //         </section>
// // //       </main>
      
// // //     </>

// // //   );
// // // }

// // "use client";
// // import { useState, useEffect, useRef, useCallback } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";

// // /* ── Tokens ── */
// // const TEAL      = "#00C9A7";
// // const TEAL_D    = "#00a07a";
// // const TEAL_L    = "#4fffd4";
// // const NAVY      = "#030B18";
// // const NAVY_2    = "#061425";
// // const NAVY_3    = "#040e1f";

// // /* ── Data ── */
// // const STATS = [
// //   { n: 8,   s: "+",  label: "Years of Excellence",   icon: "🏆" },
// //   { n: 565, s: "+",  label: "Projects Delivered",     icon: "🚀" },
// //   { n: 100, s: "+",  label: "Team Members",           icon: "👥" },
// //   { n: 3,   s: "",   label: "International Markets",  icon: "🌍" },
// // ];

// // const VALUES = [
// //   { icon: "🎯", title: "Outcomes Over Outputs",   desc: "We measure success by the results you achieve, not the features we ship." },
// //   { icon: "🔒", title: "Compliance First",         desc: "GDPR, PIPEDA & CCPA built into every system from day one." },
// //   { icon: "💡", title: "Radical Transparency",     desc: "Fixed prices, weekly demos, plain English — no jargon, no surprises." },
// //   { icon: "🤝", title: "People Before Technology", desc: "Training and adoption matter as much as the software itself." },
// //   { icon: "🏗️", title: "Long-Term Thinking",       desc: "We architect systems designed to scale and last 5+ years." },
// //   { icon: "⭐", title: "Client First, Always",      desc: "Every decision — from design to delivery — starts with your success." },
// // ];

// // const COMPARISON = [
// //   { metric: "Years in Business",  parent: "8+ Years",                                nnc: "Launched for CA / US / UK" },
// //   { metric: "Projects Delivered", parent: "565+",                                    nnc: "Growing NA & UK Portfolio" },
// //   { metric: "Team Size",          parent: "100+ Members",                            nnc: "Dedicated International Team" },
// //   { metric: "Offices",            parent: "Bangalore · Mysore · Mumbai · Hyderabad", nnc: "Toronto · New York · London" },
// // ];

// // const PARENT_SERVICES = [
// //   "Website Development", "Mobile App Development", "Digital Marketing",
// //   "Graphic Design", "2D Animation", "Corporate Video Production",
// //   "B2B Marketing", "SEO & Performance Marketing",
// // ];

// // const INT_OFFICES = [
// //   { flag: "🇨🇦", city: "Toronto, Canada",  phone: "+1 647-XXX-XXXX",    tz: "EST" },
// //   { flag: "🇺🇸", city: "New York, USA",    phone: "+1 631-XXX-XXXX",    tz: "EST" },
// //   { flag: "🇬🇧", city: "London, UK",       phone: "+44 20-XXXX-XXXX",   tz: "GMT" },
// // ];

// // const INDIA_OFFICES = [
// //   { flag: "🇮🇳", city: "Bangalore HQ",  phone: "+91 9900566466" },
// //   { flag: "🇮🇳", city: "Mysore",        phone: null },
// //   { flag: "🇮🇳", city: "Mumbai",        phone: null },
// //   { flag: "🇮🇳", city: "Hyderabad",     phone: null },
// // ];

// // const WHY_LIST = [
// //   "Project managers operating in North American and UK time zones",
// //   "GDPR, PIPEDA & CCPA-compliant systems from day one",
// //   "Full creative and technical capability of a 100+ person studio",
// //   "Transparent, fixed-price proposals — zero hidden costs",
// //   "Long-term partnership culture, not one-off project delivery",
// // ];

// // /* ── Hooks ── */
// // function useInView(threshold = 0.15) {
// //   const ref = useRef<HTMLDivElement>(null);
// //   const [vis, setVis] = useState(false);
// //   useEffect(() => {
// //     const el = ref.current; if (!el) return;
// //     const ob = new IntersectionObserver(([e]) => {
// //       if (e.isIntersecting) { setVis(true); ob.disconnect(); }
// //     }, { threshold });
// //     ob.observe(el); return () => ob.disconnect();
// //   }, [threshold]);
// //   return { ref, vis };
// // }

// // /* ── Animated Counter ── */
// // function Counter({ to, suffix, run }: { to: number; suffix: string; run: boolean }) {
// //   const [v, setV] = useState(0);
// //   const done = useRef(false);
// //   useEffect(() => {
// //     if (!run || done.current) return;
// //     done.current = true;
// //     let s: number | null = null;
// //     const dur = 2000;
// //     const tick = (ts: number) => {
// //       if (!s) s = ts;
// //       const p = Math.min((ts - s) / dur, 1);
// //       const e = 1 - Math.pow(1 - p, 4);
// //       setV(Math.round(e * to));
// //       if (p < 1) requestAnimationFrame(tick);
// //       else setV(to);
// //     };
// //     requestAnimationFrame(tick);
// //   }, [run, to]);
// //   return <>{v}{suffix}</>;
// // }

// // /* ── Fade‑in wrapper ── */
// // function Fade({ children, delay = 0, up = true }: { children: React.ReactNode; delay?: number; up?: boolean }) {
// //   const { ref, vis } = useInView();
// //   return (
// //     <div ref={ref} style={{
// //       opacity: vis ? 1 : 0,
// //       transform: vis ? "translateY(0)" : up ? "translateY(28px)" : "translateY(0)",
// //       transition: `opacity .75s ease ${delay}s, transform .75s ease ${delay}s`,
// //     }}>
// //       {children}
// //     </div>
// //   );
// // }

// // /* ── Main Component ── */
// // export default function AboutPage() {
// //   const [hov, setHov] = useState<number | null>(null);
// //   const statsIO = useInView(0.3);
// //   const [mouseX, setMouseX] = useState(0.5);
// //   const [mouseY, setMouseY] = useState(0.5);

// //   useEffect(() => {
// //     const h = (e: MouseEvent) => {
// //       setMouseX(e.clientX / window.innerWidth);
// //       setMouseY(e.clientY / window.innerHeight);
// //     };
// //     window.addEventListener("mousemove", h);
// //     return () => window.removeEventListener("mousemove", h);
// //   }, []);

// //   return (
// //     <>
// //       <Navbar />
// //       <main style={{ background: NAVY, color: "#fff", fontFamily: "'Poppins', sans-serif", overflowX: "hidden" }}>
// //         <style>{`
// //           @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@700;800&display=swap');

// //           @keyframes floatA  { 0%,100%{transform:translateY(0px)}   50%{transform:translateY(-16px)} }
// //           @keyframes floatB  { 0%,100%{transform:translateY(-8px)}  50%{transform:translateY(10px)} }
// //           @keyframes spinFwd { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
// //           @keyframes spinRev { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
// //           @keyframes pulseGl { 0%,100%{opacity:.12;transform:scale(1)} 50%{opacity:.28;transform:scale(1.1)} }
// //           @keyframes scanLine{ 0%{top:-1px} 100%{top:100%} }
// //           @keyframes popIn   { 0%{transform:scale(0) rotate(-10deg);opacity:0} 70%{transform:scale(1.06) rotate(2deg)} 100%{transform:scale(1);opacity:1} }
// //           @keyframes slideR  { from{opacity:0;transform:translateX(-18px)} to{opacity:1;transform:translateX(0)} }
// //           @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
// //           @keyframes shimmer { 0%{background-position:-300% center} 100%{background-position:300% center} }
// //           @keyframes borderPulse { 0%,100%{border-color:rgba(0,201,167,.2)} 50%{border-color:rgba(0,201,167,.55)} }
// //           @keyframes dotBlink { 0%,100%{opacity:1} 50%{opacity:.2} }
// //           @keyframes gradShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}

// //           /* Utility */
// //           .nnc-ab * { box-sizing: border-box; }

// //           /* Shimmer text */
// //           .sh-text {
// //             background: linear-gradient(90deg, #fff 0%, ${TEAL} 30%, ${TEAL_L} 50%, #fff 70%, ${TEAL} 100%);
// //             background-size: 300% auto;
// //             -webkit-background-clip: text;
// //             -webkit-text-fill-color: transparent;
// //             animation: shimmer 5s linear infinite;
// //           }

// //           /* Section chip */
// //           .sec-chip {
// //             display: inline-flex; align-items: center; gap: 8px;
// //             background: rgba(0,201,167,.08);
// //             border: 1px solid rgba(0,201,167,.25);
// //             border-radius: 100px; padding: 6px 16px;
// //             font-size: 10.5px; font-weight: 700;
// //             letter-spacing: .12em; text-transform: uppercase; color: ${TEAL};
// //             animation: borderPulse 3s ease-in-out infinite;
// //           }
// //           .sec-chip-dot {
// //             width: 6px; height: 6px; border-radius: 50%; background: ${TEAL};
// //             box-shadow: 0 0 8px ${TEAL}; animation: dotBlink 1.6s ease-in-out infinite;
// //           }

// //           /* Stat card */
// //           .stat-card {
// //             padding: 32px 20px; text-align: center; cursor: default;
// //             background: rgba(5,14,30,.9); position: relative; overflow: hidden;
// //             transition: background .3s;
// //           }
// //           .stat-card:not(:last-child) { border-right: 1px solid rgba(255,255,255,.06); }
// //           .stat-card:hover { background: rgba(0,201,167,.07); }
// //           .stat-card::after {
// //             content:""; position:absolute; bottom:0; left:10%; right:10%; height:2px;
// //             background: linear-gradient(90deg,transparent,${TEAL},transparent);
// //             opacity:0; transition:opacity .3s;
// //           }
// //           .stat-card:hover::after { opacity: 1; }

// //           /* Value card */
// //           .val-card {
// //             border-radius: 20px; padding: 32px 28px; cursor: default;
// //             position: relative; overflow: hidden;
// //             transition: transform .35s cubic-bezier(.34,1.56,.64,1), border-color .3s, background .3s, box-shadow .35s;
// //           }
// //           .val-card::before {
// //             content: ""; position: absolute; inset: 0; opacity: 0;
// //             background: radial-gradient(circle at 30% 30%, rgba(0,201,167,.08) 0%, transparent 60%);
// //             transition: opacity .4s;
// //           }
// //           .val-card:hover { transform: translateY(-10px) scale(1.01); }
// //           .val-card:hover::before { opacity: 1; }
// //           .val-icon { transition: transform .35s cubic-bezier(.34,1.56,.64,1); display: inline-block; }
// //           .val-card:hover .val-icon { transform: scale(1.3) rotate(-8deg); }

// //           /* Office card rows */
// //           .off-row {
// //             display: flex; align-items: center; gap: 14px;
// //             padding: 14px 16px; border-radius: 12px;
// //             border: 1px solid rgba(255,255,255,.06);
// //             background: rgba(255,255,255,.02);
// //             transition: background .2s, transform .2s, border-color .2s;
// //             cursor: default;
// //           }
// //           .off-row:hover { background: rgba(0,201,167,.07); transform: translateX(6px); border-color: rgba(0,201,167,.2); }

// //           /* Comparison row */
// //           .comp-row { transition: background .2s; }
// //           .comp-row:nth-child(even) { background: rgba(255,255,255,.02); }
// //           .comp-row:hover { background: rgba(0,201,167,.05) !important; }

// //           /* Why item */
// //           .why-item {
// //             display: flex; gap: 12px; align-items: flex-start;
// //             padding: 12px 14px; border-radius: 12px;
// //             border: 1px solid rgba(255,255,255,.05);
// //             background: rgba(255,255,255,.02);
// //             transition: background .2s, transform .2s, border-color .2s;
// //             cursor: default;
// //           }
// //           .why-item:hover { background: rgba(0,201,167,.07); transform: translateX(8px); border-color: rgba(0,201,167,.2); }

// //           /* Tag marquee */
// //           .tag-track { display: flex; gap: 12px; animation: marquee 22s linear infinite; width: max-content; }
// //           .tag-track:hover { animation-play-state: paused; }
// //           .tag-pill {
// //             flex-shrink: 0; padding: 8px 18px; border-radius: 100px;
// //             font-size: 12.5px; font-weight: 600;
// //             background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1);
// //             color: rgba(255,255,255,.72); white-space: nowrap; cursor: default;
// //             transition: background .2s, color .2s, border-color .2s;
// //           }
// //           .tag-pill:hover { background: rgba(0,201,167,.12); color: ${TEAL}; border-color: rgba(0,201,167,.3); }

// //           /* CTA section */
// //           .cta-wrap {
// //             border-radius: 28px; padding: 72px 56px; text-align: center;
// //             position: relative; overflow: hidden;
// //             background: linear-gradient(135deg, ${TEAL_D}22 0%, rgba(5,14,30,.92) 50%, ${NAVY} 100%);
// //             border: 1px solid rgba(0,201,167,.22);
// //             transition: box-shadow .4s;
// //           }
// //           .cta-wrap:hover { box-shadow: 0 48px 120px rgba(0,0,0,.55), 0 0 80px rgba(0,201,167,.08); }

// //           /* Primary button */
// //           .btn-primary {
// //             padding: 14px 36px; border-radius: 12px; border: none; cursor: pointer;
// //             font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 15px;
// //             background: linear-gradient(135deg, ${TEAL}, ${TEAL_D});
// //             color: #000; transition: transform .2s, box-shadow .2s;
// //             box-shadow: 0 6px 24px rgba(0,201,167,.28);
// //           }
// //           .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(0,201,167,.4); }

// //           /* Ghost button */
// //           .btn-ghost {
// //             padding: 14px 36px; border-radius: 12px; cursor: pointer;
// //             font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 15px;
// //             background: transparent; color: rgba(255,255,255,.85);
// //             border: 1.5px solid rgba(255,255,255,.2);
// //             transition: border-color .2s, background .2s, transform .2s;
// //           }
// //           .btn-ghost:hover { border-color: ${TEAL}; background: rgba(0,201,167,.07); transform: translateY(-3px); }

// //           /* Divider line */
// //           .divider { height: 1px; background: linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent); margin: 0; }

// //           /* Responsive grid helpers */
// //           .grid-2    { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
// //           .grid-3    { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
// //           .grid-4    { display: grid; grid-template-columns: repeat(4,1fr); }
// //           .grid-off  { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
// //           .grid-par  { display: grid; grid-template-columns: 1fr 1fr; gap: 44px; align-items: center; }
// //           .grid-ps   { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
// //           .comp-grid { display: grid; grid-template-columns: 1.3fr 1fr 1fr; }

// //           @media (max-width: 960px) {
// //             .grid-2, .grid-par, .grid-off { grid-template-columns: 1fr !important; gap: 36px !important; }
// //             .grid-4 { grid-template-columns: 1fr 1fr !important; }
// //           }
// //           @media (max-width: 720px) {
// //             .grid-3 { grid-template-columns: 1fr 1fr !important; }
// //             .comp-grid { grid-template-columns: 1fr !important; }
// //           }
// //           @media (max-width: 480px) {
// //             .grid-3 { grid-template-columns: 1fr !important; }
// //             .cta-wrap { padding: 48px 24px !important; }
// //             .ab-sec { padding: 64px 20px !important; }
// //             .hero-sec { padding: 110px 20px 72px !important; }
// //           }
// //         `}</style>

// //         <div className="nnc-ab">

// //           {/* ══════════════ HERO ══════════════ */}
// //           <section className="hero-sec" style={{
// //             minHeight: "93vh", display: "flex", alignItems: "center",
// //             padding: "130px 48px 88px",
// //             background: `linear-gradient(145deg, #020c1b 0%, #041220 45%, ${NAVY} 100%)`,
// //             position: "relative", overflow: "hidden",
// //           }}>
// //             {/* Grid overlay */}
// //             <div style={{ position:"absolute",inset:0,pointerEvents:"none",zIndex:0,
// //               backgroundImage:`linear-gradient(rgba(0,201,167,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.03) 1px,transparent 1px)`,
// //               backgroundSize:"56px 56px" }} />

// //             {/* Parallax glow orbs */}
// //             <div style={{ position:"absolute",width:680,height:680,borderRadius:"50%",zIndex:0,pointerEvents:"none",
// //               background:`radial-gradient(circle, rgba(0,201,167,.14) 0%, transparent 65%)`,
// //               top:"50%", right:"-12%",
// //               transform:`translateY(-50%) translate(${(mouseX-.5)*-32}px,${(mouseY-.5)*-22}px)`,
// //               transition:"transform .5s ease",
// //               animation:"pulseGl 8s ease-in-out infinite" }} />
// //             <div style={{ position:"absolute",width:380,height:380,borderRadius:"50%",zIndex:0,pointerEvents:"none",
// //               background:"radial-gradient(circle, rgba(99,102,241,.1) 0%, transparent 65%)",
// //               top:"8%", left:"-6%",
// //               transform:`translate(${(mouseX-.5)*22}px,${(mouseY-.5)*16}px)`,
// //               transition:"transform .5s ease",
// //               animation:"pulseGl 10s ease-in-out infinite .8s" }} />

// //             {/* Decorative rings */}
// //             <div style={{ position:"absolute",width:580,height:580,borderRadius:"50%",zIndex:0,pointerEvents:"none",
// //               border:"1px dashed rgba(0,201,167,.09)",top:"50%",right:"-14%",transform:"translateY(-50%)",
// //               animation:"spinFwd 55s linear infinite" }} />
// //             <div style={{ position:"absolute",width:360,height:360,borderRadius:"50%",zIndex:0,pointerEvents:"none",
// //               border:"1px dashed rgba(0,201,167,.05)",top:"50%",right:"-6%",transform:"translateY(-50%)",
// //               animation:"spinRev 35s linear infinite" }} />

// //             <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:2, width:"100%" }}>

// //               <Fade>
// //                 <span className="sec-chip" style={{ marginBottom:28, display:"inline-flex" }}>
// //                   <span className="sec-chip-dot" />
// //                   About NNC Digital Solutions
// //                 </span>
// //               </Fade>

// //               <Fade delay={0.1}>
// //                 <h1 style={{
// //                   fontSize:"clamp(34px,5vw,68px)", fontWeight:900,
// //                   lineHeight:1.1, marginBottom:0, letterSpacing:"-0.025em",
// //                   maxWidth:840,
// //                 }}>
// //                   Built on{" "}
// //                   <span style={{ background:`linear-gradient(135deg,${TEAL},${TEAL_L})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
// //                     Indian Tech Excellence.
// //                   </span>
// //                 </h1>
// //               </Fade>

// //               <Fade delay={0.18}>
// //                 <h1 style={{
// //                   fontSize:"clamp(28px,4vw,58px)", fontWeight:900,
// //                   lineHeight:1.15, marginBottom:32, letterSpacing:"-0.02em",
// //                   color:"rgba(255,255,255,.72)", maxWidth:840,
// //                 }}>
// //                   Built for Canadian, US &amp; UK Business.
// //                 </h1>
// //               </Fade>

// //               <Fade delay={0.26}>
// //                 <p style={{
// //                   fontSize:"clamp(15px,1.4vw,18px)", color:"rgba(255,255,255,.5)",
// //                   lineHeight:1.9, marginBottom:44, maxWidth:620,
// //                 }}>
// //                   NNC Digital Solutions is the international technology arm of Nakshatra Namaha
// //                   Creations Pvt. Ltd. — one of Bangalore&apos;s most respected digital studios.
// //                   We bring 8+ years of proven expertise directly to businesses in Canada, the USA,
// //                   and the United Kingdom.
// //                 </p>
// //               </Fade>

// //               <Fade delay={0.34}>
// //                 <div style={{ display:"flex", gap:14, flexWrap:"wrap", marginBottom:72 }}>
// //                   <Link href="/contact">
// //                     <button className="btn-primary">Book a Free Consultation</button>
// //                   </Link>
// //                   <Link href="/case-studies">
// //                     <button className="btn-ghost">View Our Work →</button>
// //                   </Link>
// //                 </div>
// //               </Fade>

// //               {/* Stat strip */}
// //               <Fade delay={0.44}>
// //                 <div ref={statsIO.ref}>
// //                   <div className="grid-4" style={{
// //                     borderRadius:20, overflow:"hidden",
// //                     border:"1px solid rgba(255,255,255,.07)",
// //                     background:"rgba(255,255,255,.05)",
// //                     gap:1,
// //                   }}>
// //                     {STATS.map((s, i) => (
// //                       <div key={i} className="stat-card">
// //                         <div style={{ fontSize:22, marginBottom:8 }}>{s.icon}</div>
// //                         <p style={{
// //                           fontSize:"clamp(28px,3.2vw,48px)", fontWeight:900, margin:0,
// //                           background:`linear-gradient(135deg,#fff 20%,${TEAL})`,
// //                           WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
// //                           lineHeight:1,
// //                         }}>
// //                           <Counter to={s.n} suffix={s.s} run={statsIO.vis} />
// //                         </p>
// //                         <p style={{ fontSize:11, color:"rgba(255,255,255,.38)", margin:"8px 0 0", fontWeight:600, letterSpacing:"0.09em", textTransform:"uppercase" }}>
// //                           {s.label}
// //                         </p>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </Fade>

// //             </div>
// //           </section>

// //           <div className="divider" />

// //           {/* ══════════════ STORY ══════════════ */}
// //           <section className="ab-sec" style={{ padding:"108px 48px", background:NAVY }}>
// //             <div style={{ maxWidth:1200, margin:"0 auto" }}>
// //               <div className="grid-2" style={{ gap:80 }}>

// //                 <Fade>
// //                   <div>
// //                     <span className="sec-chip" style={{ marginBottom:24, display:"inline-flex" }}>
// //                       <span className="sec-chip-dot" /> Our Story
// //                     </span>
// //                     <h2 style={{ fontSize:"clamp(26px,3vw,42px)", fontWeight:900, lineHeight:1.18, marginBottom:32, letterSpacing:"-0.02em" }}>
// //                       From Bangalore to{" "}
// //                       <span style={{ background:`linear-gradient(135deg,${TEAL},${TEAL_L})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
// //                         Canada, USA &amp; UK
// //                       </span>
// //                     </h2>

// //                     {[
// //                       "Nakshatra Namaha Creations Pvt. Ltd. was founded in Bangalore — India's Silicon Valley. Over 8+ years, we built a reputation as one of Karnataka's most trusted digital studios, delivering 565+ projects across web, mobile, marketing, CRM, ERP, animation, and more.",
// //                       "As demand from businesses in Canada, the USA, and the UK grew, we launched NNC Digital Solutions as our dedicated international brand — bringing the same proven talent, processes, and quality to Western markets.",
// //                       "NNC Digital is not a startup trying to build a track record. It is the international expression of a decade of proven capability.",
// //                     ].map((p, i) => (
// //                       <p key={i} style={{
// //                         color:"rgba(255,255,255,.55)", fontSize:15, lineHeight:1.88,
// //                         marginBottom:i < 2 ? 18 : 0,
// //                         opacity:0, animation:`slideR .6s ease ${.1+i*.15}s both`,
// //                       }}>{p}</p>
// //                     ))}

// //                     <div style={{
// //                       marginTop:32, padding:"18px 22px", borderRadius:14,
// //                       background:"rgba(0,201,167,.06)", border:"1px solid rgba(0,201,167,.2)",
// //                       display:"flex", alignItems:"center", gap:14,
// //                       transition:"transform .25s, background .25s", cursor:"default",
// //                     }}
// //                       onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform="translateX(6px)"; (e.currentTarget as HTMLElement).style.background="rgba(0,201,167,.1)"; }}
// //                       onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform=""; (e.currentTarget as HTMLElement).style.background="rgba(0,201,167,.06)"; }}
// //                     >
// //                       <span style={{ fontSize:28, flexShrink:0 }}>🇮🇳</span>
// //                       <div>
// //                         <p style={{ fontSize:13.5, fontWeight:700, color:"#fff", margin:0 }}>Bangalore → Toronto · New York · London</p>
// //                         <p style={{ fontSize:12, color:"rgba(255,255,255,.38)", margin:"3px 0 0" }}>One trusted studio. Three international markets.</p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </Fade>

// //                 <Fade delay={0.15}>
// //                   <div style={{ position:"relative" }}>
// //                     {/* Main image */}
// //                     <div style={{
// //                       borderRadius:24, overflow:"hidden",
// //                       border:"1px solid rgba(0,201,167,.2)",
// //                       boxShadow:`0 40px 100px rgba(0,0,0,.55), 0 0 60px rgba(0,201,167,.07)`,
// //                       aspectRatio:"4/3", position:"relative",
// //                       transition:"transform .4s ease, box-shadow .4s ease",
// //                     }}
// //                       onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform="scale(1.02)"; (e.currentTarget as HTMLElement).style.boxShadow=`0 50px 120px rgba(0,0,0,.65),0 0 80px rgba(0,201,167,.14)`; }}
// //                       onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform=""; (e.currentTarget as HTMLElement).style.boxShadow=`0 40px 100px rgba(0,0,0,.55),0 0 60px rgba(0,201,167,.07)`; }}
// //                     >
// //                       <Image src="/NNCLOGO.jpg" alt="NNC Digital Solutions" fill style={{ objectFit:"cover" }} />
// //                       {/* Dark gradient overlay */}
// //                       <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(3,11,24,.88) 0%, rgba(3,11,24,.2) 50%, transparent 100%)" }} />
// //                       {/* Scan line effect */}
// //                       <div style={{ position:"absolute", left:0, right:0, height:2, pointerEvents:"none",
// //                         background:`linear-gradient(90deg,transparent,rgba(0,201,167,.5),transparent)`,
// //                         animation:"scanLine 5s linear infinite" }} />
// //                       {/* Image caption */}
// //                       <div style={{ position:"absolute", bottom:24, left:24, right:24 }}>
// //                         <p style={{ fontSize:14, fontWeight:700, color:"#fff", margin:0 }}>NNC Digital Solutions</p>
// //                         <p style={{ fontSize:12, color:TEAL, margin:"4px 0 0" }}>A Nakshatra Namaha Creations Company</p>
// //                       </div>
// //                     </div>

// //                     {/* Floating badge — top right */}
// //                     <div style={{
// //                       position:"absolute", top:-20, right:-20,
// //                       background:`linear-gradient(135deg,${TEAL},${TEAL_D})`,
// //                       borderRadius:18, padding:"16px 20px", textAlign:"center",
// //                       boxShadow:`0 12px 40px rgba(0,201,167,.5)`,
// //                       animation:"floatA 4.5s ease-in-out infinite, popIn .7s ease .3s both",
// //                     }}>
// //                       <p style={{ fontSize:26, fontWeight:900, color:"#000", margin:0, lineHeight:1 }}>565+</p>
// //                       <p style={{ fontSize:10, fontWeight:700, color:"rgba(0,0,0,.6)", margin:"4px 0 0", letterSpacing:"0.08em" }}>PROJECTS</p>
// //                     </div>

// //                     {/* Floating badge — bottom left */}
// //                     <div style={{
// //                       position:"absolute", bottom:-20, left:-20,
// //                       background:"rgba(4,14,31,.97)", border:`1px solid rgba(0,201,167,.35)`,
// //                       borderRadius:16, padding:"14px 18px",
// //                       boxShadow:"0 12px 40px rgba(0,0,0,.5)",
// //                       animation:"floatB 5.5s ease-in-out infinite, popIn .7s ease .55s both",
// //                     }}>
// //                       <p style={{ fontSize:12.5, fontWeight:700, color:"#fff", margin:0 }}>🏙️ Bangalore · Toronto · London</p>
// //                       <p style={{ fontSize:11, color:"rgba(255,255,255,.38)", margin:"3px 0 0" }}>8+ years of global delivery</p>
// //                     </div>
// //                   </div>
// //                 </Fade>

// //               </div>
// //             </div>
// //           </section>

// //           <div className="divider" />

// //           {/* ══════════════ PARENT COMPANY ══════════════ */}
// //           <section className="ab-sec" style={{
// //             padding:"108px 48px",
// //             background:`linear-gradient(180deg, ${NAVY_3} 0%, ${NAVY_2} 100%)`,
// //             position:"relative", overflow:"hidden",
// //           }}>
// //             <div style={{ position:"absolute",inset:0,pointerEvents:"none",
// //               backgroundImage:`radial-gradient(rgba(0,201,167,.05) 1px, transparent 1px)`,
// //               backgroundSize:"30px 30px" }} />
// //             <div style={{ position:"absolute",width:600,height:600,borderRadius:"50%",pointerEvents:"none",
// //               background:"radial-gradient(circle,rgba(0,201,167,.04) 0%,transparent 65%)",
// //               bottom:"-20%",right:"-10%",animation:"pulseGl 10s ease-in-out infinite" }} />

// //             <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1 }}>

// //               <Fade style={{ textAlign:"center", marginBottom:60 } as React.CSSProperties}>
// //                 <span className="sec-chip" style={{ marginBottom:20, display:"inline-flex" }}>
// //                   <span className="sec-chip-dot" /> Backed By
// //                 </span>
// //                 <h2 style={{ fontSize:"clamp(26px,3vw,44px)", fontWeight:900, lineHeight:1.15, marginBottom:12, letterSpacing:"-0.02em" }}>
// //                   Our Parent Company —{" "}
// //                   <span className="sh-text">Nakshatra Namaha Creations Pvt. Ltd.</span>
// //                 </h2>
// //                 <p style={{ fontSize:16, fontWeight:500, color:"rgba(255,255,255,.4)", margin:0 }}>
// //                   8+ Years of Digital Excellence from Bangalore, India
// //                 </p>
// //               </Fade>

// //               {/* Highlight card */}
// //               <Fade delay={0.1}>
// //                 <div style={{
// //                   borderRadius:24, padding:"44px 48px", marginBottom:52,
// //                   background:"rgba(0,201,167,.04)", border:"1px solid rgba(0,201,167,.18)",
// //                   transition:"box-shadow .35s",
// //                 }}
// //                   onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow="0 28px 72px rgba(0,0,0,.45)"}
// //                   onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow=""}
// //                 >
// //                   <div className="grid-par">
// //                     <div>
// //                       <p style={{ fontSize:15, color:"rgba(255,255,255,.55)", lineHeight:1.9, margin:"0 0 20px" }}>
// //                         Headquartered in{" "}
// //                         <strong style={{ color:"#fff" }}>Bengaluru, Karnataka</strong> — India&apos;s Silicon Valley — with offices in Mysore, Mumbai, and Hyderabad. A full-spectrum digital studio combining creative excellence with engineering rigour.
// //                       </p>
// //                       <a href="https://www.nakshatranamahacreations.com" target="_blank" rel="noopener noreferrer"
// //                         style={{ display:"inline-flex", alignItems:"center", gap:8, fontSize:13.5, fontWeight:700, color:TEAL, textDecoration:"none", transition:"gap .2s" }}
// //                         onMouseEnter={e => (e.currentTarget as HTMLElement).style.gap="14px"}
// //                         onMouseLeave={e => (e.currentTarget as HTMLElement).style.gap="8px"}
// //                       >
// //                         🌐 nakshatranamahacreations.com →
// //                       </a>
// //                     </div>
// //                     <div className="grid-ps">
// //                       {[{n:"8+",l:"Years Active"},{n:"565+",l:"Projects"},{n:"100+",l:"Team Size"},{n:"4",l:"Indian Offices"}].map((s,i) => (
// //                         <div key={i} style={{
// //                           textAlign:"center", padding:"22px 14px", borderRadius:16,
// //                           background:"rgba(0,201,167,.06)", border:"1px solid rgba(0,201,167,.14)",
// //                           transition:"transform .3s,background .3s", cursor:"default",
// //                         }}
// //                           onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform="translateY(-8px)"; (e.currentTarget as HTMLElement).style.background="rgba(0,201,167,.13)"; }}
// //                           onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform=""; (e.currentTarget as HTMLElement).style.background="rgba(0,201,167,.06)"; }}
// //                         >
// //                           <p style={{ fontSize:30, fontWeight:900, color:TEAL, margin:0, lineHeight:1 }}>{s.n}</p>
// //                           <p style={{ fontSize:10.5, color:"rgba(255,255,255,.38)", margin:"6px 0 0", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.08em" }}>{s.l}</p>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </Fade>

// //               {/* Services marquee */}
// //               <Fade delay={0.15}>
// //                 <p style={{ fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(255,255,255,.3)", marginBottom:14 }}>
// //                   Parent Company Services That Power NNC Digital
// //                 </p>
// //                 <div style={{ overflow:"hidden", marginBottom:52, paddingBottom:4 }}>
// //                   <div className="tag-track">
// //                     {[...PARENT_SERVICES, ...PARENT_SERVICES].map((s, i) => (
// //                       <span key={i} className="tag-pill">{s}</span>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </Fade>

// //               {/* Comparison table */}
// //               <Fade delay={0.2}>
// //                 <div style={{ borderRadius:20, overflow:"hidden", border:"1px solid rgba(255,255,255,.08)" }}>
// //                   {/* Table header */}
// //                   <div className="comp-grid" style={{
// //                     background:"rgba(0,201,167,.08)", borderBottom:"1px solid rgba(0,201,167,.2)",
// //                     padding:"16px 28px",
// //                   }}>
// //                     {["Metric", "Nakshatra Namaha Creations", "NNC Digital (International)"].map(h => (
// //                       <p key={h} style={{ fontSize:10.5, fontWeight:700, color:TEAL, textTransform:"uppercase", letterSpacing:"0.1em", margin:0 }}>{h}</p>
// //                     ))}
// //                   </div>
// //                   {COMPARISON.map((row, i) => (
// //                     <div key={i} className="comp-row comp-grid" style={{
// //                       padding:"18px 28px",
// //                       borderBottom: i < COMPARISON.length - 1 ? "1px solid rgba(255,255,255,.05)" : "none",
// //                     }}>
// //                       <p style={{ fontSize:13.5, fontWeight:700, color:"rgba(255,255,255,.55)", margin:0 }}>{row.metric}</p>
// //                       <p style={{ fontSize:13.5, color:"rgba(255,255,255,.82)", margin:0 }}>{row.parent}</p>
// //                       <p style={{ fontSize:13.5, color:TEAL, fontWeight:700, margin:0 }}>{row.nnc}</p>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </Fade>
// //             </div>
// //           </section>

// //           <div className="divider" />

// //           {/* ══════════════ WHY WE LAUNCHED ══════════════ */}
// //           <section className="ab-sec" style={{ padding:"108px 48px", background:NAVY }}>
// //             <div style={{ maxWidth:1200, margin:"0 auto" }}>
// //               <Fade style={{ textAlign:"center", marginBottom:60 } as React.CSSProperties}>
// //                 <span className="sec-chip" style={{ marginBottom:20, display:"inline-flex" }}>
// //                   <span className="sec-chip-dot" /> Our Purpose
// //                 </span>
// //                 <h2 style={{ fontSize:"clamp(26px,3vw,44px)", fontWeight:900, letterSpacing:"-0.02em", margin:0, lineHeight:1.18 }}>
// //                   Why We Launched NNC Digital for{" "}
// //                   <span style={{ background:`linear-gradient(135deg,${TEAL},${TEAL_L})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
// //                     North America &amp; UK
// //                   </span>
// //                 </h2>
// //               </Fade>

// //               <div className="grid-2">
// //                 {/* The Gap */}
// //                 <Fade delay={0.07}>
// //                   <div style={{
// //                     borderRadius:22, padding:"44px 40px", height:"100%",
// //                     background:"rgba(255,255,255,.025)", border:"1px solid rgba(255,255,255,.08)",
// //                     transition:"border-color .3s, transform .3s, box-shadow .3s",
// //                   }}
// //                     onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor="rgba(239,68,68,.3)"; (e.currentTarget as HTMLElement).style.transform="translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow="0 28px 72px rgba(0,0,0,.4)"; }}
// //                     onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,.08)"; (e.currentTarget as HTMLElement).style.transform=""; (e.currentTarget as HTMLElement).style.boxShadow=""; }}
// //                   >
// //                     <div style={{ width:52,height:52,borderRadius:16,marginBottom:28,background:"rgba(239,68,68,.1)",border:"1px solid rgba(239,68,68,.22)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24 }}>🔍</div>
// //                     <h3 style={{ fontSize:20, fontWeight:800, color:"#fff", marginBottom:18 }}>The Gap We Saw</h3>
// //                     <p style={{ color:"rgba(255,255,255,.5)", fontSize:15, lineHeight:1.88, margin:"0 0 16px" }}>
// //                       Businesses in Canada, the USA, and the UK routinely overpay local agencies for work that can be delivered at a fraction of the cost — at equal or higher quality — by the right offshore partner.
// //                     </p>
// //                     <p style={{ color:"rgba(255,255,255,.5)", fontSize:15, lineHeight:1.88, margin:0 }}>
// //                       Most offshore agencies fail because they don&apos;t understand Western regulatory environments, commercial culture, or business expectations.
// //                     </p>
// //                   </div>
// //                 </Fade>

// //                 {/* The Solution */}
// //                 <Fade delay={0.14}>
// //                   <div style={{
// //                     borderRadius:22, padding:"44px 40px", height:"100%",
// //                     background:"rgba(0,201,167,.04)", border:"1px solid rgba(0,201,167,.18)",
// //                     transition:"border-color .3s, transform .3s, box-shadow .3s",
// //                   }}
// //                     onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor="rgba(0,201,167,.45)"; (e.currentTarget as HTMLElement).style.transform="translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow="0 28px 72px rgba(0,0,0,.4)"; }}
// //                     onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor="rgba(0,201,167,.18)"; (e.currentTarget as HTMLElement).style.transform=""; (e.currentTarget as HTMLElement).style.boxShadow=""; }}
// //                   >
// //                     <div style={{ width:52,height:52,borderRadius:16,marginBottom:28,background:`rgba(0,201,167,.1)`,border:`1px solid rgba(0,201,167,.3)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24 }}>✅</div>
// //                     <h3 style={{ fontSize:20, fontWeight:800, color:"#fff", marginBottom:24 }}>The Solution We Built</h3>
// //                     <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
// //                       {WHY_LIST.map((item, i) => (
// //                         <div key={i} className="why-item">
// //                           <div style={{
// //                             width:24, height:24, borderRadius:"50%", flexShrink:0, marginTop:1,
// //                             background:`linear-gradient(135deg,${TEAL},${TEAL_D})`,
// //                             display:"flex", alignItems:"center", justifyContent:"center",
// //                             fontSize:12, color:"#000", fontWeight:900,
// //                           }}>✓</div>
// //                           <p style={{ color:"rgba(255,255,255,.72)", fontSize:14.5, lineHeight:1.7, margin:0 }}>{item}</p>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </Fade>
// //               </div>
// //             </div>
// //           </section>

// //           <div className="divider" />

// //           {/* ══════════════ VALUES ══════════════ */}
// //           <section className="ab-sec" style={{
// //             padding:"108px 48px",
// //             background:`linear-gradient(180deg, ${NAVY_3} 0%, ${NAVY_2} 100%)`,
// //           }}>
// //             <div style={{ maxWidth:1200, margin:"0 auto" }}>
// //               <Fade style={{ textAlign:"center", marginBottom:60 } as React.CSSProperties}>
// //                 <span className="sec-chip" style={{ marginBottom:20, display:"inline-flex" }}>
// //                   <span className="sec-chip-dot" /> Our Values
// //                 </span>
// //                 <h2 style={{ fontSize:"clamp(26px,3vw,44px)", fontWeight:900, letterSpacing:"-0.02em", margin:0 }}>
// //                   What We{" "}
// //                   <span style={{ background:`linear-gradient(135deg,${TEAL},${TEAL_L})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
// //                     Stand For
// //                   </span>
// //                 </h2>
// //               </Fade>

// //               <div className="grid-3" style={{ marginBottom:96 }}>
// //                 {VALUES.map((v, i) => (
// //                   <Fade key={i} delay={0.07 * i}>
// //                     <div className="val-card"
// //                       onMouseEnter={() => setHov(i)}
// //                       onMouseLeave={() => setHov(null)}
// //                       style={{
// //                         background: hov === i ? "rgba(0,201,167,.07)" : "rgba(255,255,255,.03)",
// //                         border: `1px solid ${hov === i ? "rgba(0,201,167,.4)" : "rgba(255,255,255,.08)"}`,
// //                         boxShadow: hov === i ? "0 28px 72px rgba(0,0,0,.5)" : "none",
// //                       }}
// //                     >
// //                       {hov === i && (
// //                         <div style={{ position:"absolute",top:0,left:0,right:0,height:2,borderRadius:"20px 20px 0 0",
// //                           background:`linear-gradient(90deg,transparent,${TEAL},transparent)` }} />
// //                       )}
// //                       <div className="val-icon" style={{ fontSize:36, marginBottom:20 }}>{v.icon}</div>
// //                       <p style={{ fontSize:16, fontWeight:800, color:"#fff", marginBottom:10 }}>{v.title}</p>
// //                       <p style={{ fontSize:14, color:"rgba(255,255,255,.45)", lineHeight:1.75, margin:0 }}>{v.desc}</p>
// //                     </div>
// //                   </Fade>
// //                 ))}
// //               </div>

// //               {/* ══ Global Offices ══ */}
// //               <Fade style={{ textAlign:"center", marginBottom:44 } as React.CSSProperties}>
// //                 <h2 style={{ fontSize:"clamp(24px,2.6vw,38px)", fontWeight:900, letterSpacing:"-0.02em" }}>
// //                   Global{" "}
// //                   <span style={{ background:`linear-gradient(135deg,${TEAL},${TEAL_L})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
// //                     Offices
// //                   </span>
// //                 </h2>
// //               </Fade>

// //               <div className="grid-off" style={{ marginBottom:88 }}>

// //                 {/* International */}
// //                 <Fade delay={0.08}>
// //                   <div style={{
// //                     borderRadius:22, padding:"36px 32px",
// //                     background:"rgba(0,201,167,.05)", border:"1px solid rgba(0,201,167,.18)",
// //                     transition:"transform .3s,box-shadow .3s",
// //                   }}
// //                     onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform="translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow="0 24px 64px rgba(0,0,0,.38)"; }}
// //                     onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform=""; (e.currentTarget as HTMLElement).style.boxShadow=""; }}
// //                   >
// //                     <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:28 }}>
// //                       <div style={{ width:4,height:24,borderRadius:4,background:`linear-gradient(${TEAL},${TEAL_D})` }} />
// //                       <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:TEAL,margin:0 }}>International Offices</p>
// //                     </div>
// //                     <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
// //                       {INT_OFFICES.map((o, i) => (
// //                         <div key={i} className="off-row" style={{ animation:`slideR .5s ease ${.1+i*.12}s both` }}>
// //                           <span style={{ fontSize:26, flexShrink:0 }}>{o.flag}</span>
// //                           <div style={{ flex:1 }}>
// //                             <p style={{ fontSize:14.5, fontWeight:700, color:"#fff", margin:0 }}>{o.city}</p>
// //                             <p style={{ fontSize:13, color:TEAL, margin:"2px 0 0", fontWeight:600 }}>{o.phone}</p>
// //                           </div>
// //                           <span style={{ fontSize:11, fontWeight:700, color:"rgba(255,255,255,.25)", padding:"4px 10px", borderRadius:100, border:"1px solid rgba(255,255,255,.1)", letterSpacing:"0.06em" }}>{o.tz}</span>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </Fade>

// //                 {/* India */}
// //                 <Fade delay={0.15}>
// //                   <div style={{
// //                     borderRadius:22, padding:"36px 32px",
// //                     background:"rgba(255,255,255,.025)", border:"1px solid rgba(255,255,255,.08)",
// //                     transition:"transform .3s,box-shadow .3s",
// //                   }}
// //                     onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform="translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow="0 24px 64px rgba(0,0,0,.38)"; }}
// //                     onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform=""; (e.currentTarget as HTMLElement).style.boxShadow=""; }}
// //                   >
// //                     <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:28 }}>
// //                       <div style={{ width:4,height:24,borderRadius:4,background:"rgba(255,255,255,.2)" }} />
// //                       <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(255,255,255,.38)",margin:0 }}>
// //                         India Offices — Nakshatra Namaha Creations
// //                       </p>
// //                     </div>
// //                     <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
// //                       {INDIA_OFFICES.map((o, i) => (
// //                         <div key={i} className="off-row" style={{ animation:`slideR .5s ease ${.1+i*.12}s both` }}>
// //                           <span style={{ fontSize:26, flexShrink:0 }}>{o.flag}</span>
// //                           <div>
// //                             <p style={{ fontSize:14.5, fontWeight:700, color:"#fff", margin:0 }}>{o.city}</p>
// //                             {o.phone && <p style={{ fontSize:13, color:"rgba(255,255,255,.38)", margin:"2px 0 0" }}>{o.phone}</p>}
// //                           </div>
// //                         </div>
// //                       ))}
// //                       <div style={{ paddingTop:16, marginTop:4, borderTop:"1px solid rgba(255,255,255,.06)" }}>
// //                         <p style={{ fontSize:13, color:"rgba(255,255,255,.32)", margin:0 }}>✉️ info@nakshatranamahacreations.com</p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </Fade>

// //               </div>

// //               {/* ══ Final CTA ══ */}
// //               <Fade delay={0.1}>
// //                 <div className="cta-wrap">
// //                   {/* Background decoration */}
// //                   <div style={{ position:"absolute",width:540,height:540,borderRadius:"50%",
// //                     background:`radial-gradient(circle,${TEAL}10 0%,transparent 65%)`,
// //                     top:"50%",left:"50%",transform:"translate(-50%,-50%)",
// //                     animation:"pulseGl 6s ease-in-out infinite",pointerEvents:"none" }} />
// //                   <div style={{ position:"absolute",width:320,height:320,borderRadius:"50%",
// //                     border:"1px dashed rgba(0,201,167,.09)",
// //                     top:"50%",left:"50%",transform:"translate(-50%,-50%)",
// //                     animation:"spinFwd 28s linear infinite",pointerEvents:"none" }} />
// //                   <div style={{ position:"absolute",width:180,height:180,borderRadius:"50%",
// //                     border:"1px dashed rgba(0,201,167,.06)",
// //                     top:"50%",left:"50%",transform:"translate(-50%,-50%)",
// //                     animation:"spinRev 18s linear infinite",pointerEvents:"none" }} />

// //                   <div style={{ position:"relative", zIndex:2 }}>
// //                     <span className="sec-chip" style={{ marginBottom:24, display:"inline-flex" }}>
// //                       <span className="sec-chip-dot" /> Get Started
// //                     </span>
// //                     <h2 style={{ fontSize:"clamp(24px,3vw,44px)", fontWeight:900, marginBottom:18, letterSpacing:"-0.02em" }}>
// //                       Ready to Start a{" "}
// //                       <span style={{ background:`linear-gradient(135deg,${TEAL},${TEAL_L})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
// //                         Conversation?
// //                       </span>
// //                     </h2>
// //                     <p style={{ color:"rgba(255,255,255,.5)", fontSize:16, lineHeight:1.85, maxWidth:520, margin:"0 auto 44px" }}>
// //                       Whether you have a fully scoped project or just a problem you&apos;re trying to solve — we&apos;d love to talk. We respond within 24 hours with practical, honest advice.
// //                     </p>
// //                     <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
// //                       <Link href="/contact">
// //                         <button className="btn-primary">📅 Book a Free Consultation</button>
// //                       </Link>
// //                       <Link href="/case-studies">
// //                         <button className="btn-ghost">View Our Work →</button>
// //                       </Link>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </Fade>

// //             </div>
// //           </section>

// //         </div>
// //       </main>
// //       <Footer />
// //     </>
// //   );
// // }

// "use client";
// import { useState, useEffect, useRef, useCallback } from "react";
// import Image from "next/image";
// import { T } from "../components/tokens";
// import Navbar from "../components/Navbar";

// /* ─── Data ─── */
// const VALUES = [
//   { icon: "🎯", title: "Outcomes Over Outputs",   desc: "Results, not features shipped." },
//   { icon: "🔒", title: "Compliance First",         desc: "GDPR / PIPEDA / CCPA in every system." },
//   { icon: "💡", title: "Radical Transparency",     desc: "Fixed prices. Weekly demos. No jargon." },
//   { icon: "🤝", title: "People Before Technology", desc: "Training & adoption matter." },
//   { icon: "🏗️", title: "Long-Term Thinking",       desc: "Systems designed to last 5+ years." },
//   { icon: "⭐", title: "Client First, Always",      desc: "Every decision starts with the client." },
// ];

// const STATS = [
//   { value: 8,   suffix: "+", label: "Years of Excellence" },
//   { value: 565, suffix: "+", label: "Projects Delivered" },
//   { value: 100, suffix: "+", label: "Team Members" },
//   { value: 3,   suffix: "",  label: "International Markets" },
// ];

// const PARENT_SERVICES = [
//   "Website Development", "Mobile App Development", "Digital Marketing",
//   "Graphic Design", "2D Animation", "Corporate Video Production",
//   "B2B Marketing", "SEO & Performance Marketing",
// ];

// const COMPARISON = [
//   { metric: "Years in Business",  parent: "8+ Years",                                nnc: "Launched for CA/US/UK Market" },
//   { metric: "Projects Delivered", parent: "565+",                                    nnc: "Growing Portfolio in NA & UK" },
//   { metric: "Team Size",          parent: "100+ Members",                            nnc: "Dedicated International Team" },
//   { metric: "Offices",            parent: "Bangalore · Mysore · Mumbai · Hyderabad", nnc: "Toronto · New York · London" },
// ];

// const INT_OFFICES = [
//   { flag: "🇨🇦", city: "Toronto, Canada", phone: "+1 647-XXX-XXXX" },
//   { flag: "🇺🇸", city: "New York, USA",   phone: "+1 631-XXX-XXXX" },
//   { flag: "🇬🇧", city: "London, UK",      phone: "+44 20-XXXX-XXXX" },
// ];

// const INDIA_OFFICES = [
//   { flag: "🇮🇳", city: "Bangalore HQ", phone: "+91 9900566466" },
//   { flag: "🇮🇳", city: "Mysore",       phone: null },
//   { flag: "🇮🇳", city: "Mumbai",       phone: null },
//   { flag: "🇮🇳", city: "Hyderabad",    phone: null },
// ];

// const WHY_SOLUTIONS = [
//   "Dedicated project managers in North American and UK time zones",
//   "GDPR, PIPEDA, and CCPA-compliant systems from day one",
//   "Full creative and technical capability of a 100+ person studio",
//   "Transparent, fixed-price proposals — no surprises",
//   "Long-term partnership, not one-and-done project delivery",
// ];

// /* ─── useInView ─── */
// function useInView(threshold = 0.15) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const el = ref.current; if (!el) return;
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
//       { threshold }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return { ref, visible };
// }

// /* ─── Animated counter ─── */
// function Counter({ to, suffix, active }: { to: number; suffix: string; active: boolean }) {
//   const [v, setV] = useState(0);
//   const done = useRef(false);
//   useEffect(() => {
//     if (!active || done.current) return;
//     done.current = true;
//     let start: number | null = null;
//     const dur = 2000;
//     const tick = (ts: number) => {
//       if (!start) start = ts;
//       const p = Math.min((ts - start) / dur, 1);
//       const ease = 1 - Math.pow(1 - p, 3);
//       setV(Math.round(ease * to));
//       if (p < 1) requestAnimationFrame(tick);
//     };
//     requestAnimationFrame(tick);
//   }, [active, to]);
//   return <span>{v}{suffix}</span>;
// }

// /* ─── Particle canvas ─── */
// function Particles() {
//   const ref = useRef<HTMLCanvasElement>(null);
//   useEffect(() => {
//     const c = ref.current; if (!c) return;
//     const ctx = c.getContext("2d")!;
//     let W = c.width = c.offsetWidth, H = c.height = c.offsetHeight;
//     const pts = Array.from({ length: 55 }, () => ({
//       x: Math.random() * W, y: Math.random() * H,
//       vx: (Math.random() - .5) * .28, vy: (Math.random() - .5) * .28,
//       r: Math.random() * 1.4 + .4, a: Math.random() * .38 + .06,
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
//         if (d < 105) {
//           ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
//           ctx.strokeStyle = `rgba(0,201,167,${.055 * (1 - d / 105)})`; ctx.lineWidth = .4; ctx.stroke();
//         }
//       }
//       raf = requestAnimationFrame(draw);
//     };
//     draw();
//     const resize = () => { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; };
//     window.addEventListener("resize", resize);
//     return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
//   }, []);
//   return (
//     <canvas ref={ref} style={{
//       position: "absolute", inset: 0, width: "100%", height: "100%",
//       pointerEvents: "none", zIndex: 0,
//     }} />
//   );
// }

// /* ─── FadeUp ─── */
// function FadeUp({ children, delay = 0, style: ext }: {
//   children: React.ReactNode; delay?: number; style?: React.CSSProperties;
// }) {
//   const { ref, visible } = useInView();
//   return (
//     <div ref={ref} style={{
//       opacity: visible ? 1 : 0,
//       transform: visible ? "translateY(0)" : "translateY(28px)",
//       transition: `opacity .75s cubic-bezier(.16,1,.3,1) ${delay}s, transform .75s cubic-bezier(.16,1,.3,1) ${delay}s`,
//       ...ext,
//     }}>
//       {children}
//     </div>
//   );
// }

// /* ─── Magnetic Button ─── */
// function MagBtn({ children, primary, style: ext }: {
//   children: React.ReactNode; primary?: boolean; style?: React.CSSProperties;
// }) {
//   const ref = useRef<HTMLButtonElement>(null);
//   const mv = useCallback((e: React.MouseEvent) => {
//     const el = ref.current; if (!el) return;
//     const r = el.getBoundingClientRect();
//     el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * .28}px,${(e.clientY - (r.top + r.height / 2)) * .28}px) scale(1.04)`;
//   }, []);
//   const lv = useCallback(() => { if (ref.current) ref.current.style.transform = ""; }, []);
//   return (
//     <button ref={ref} onMouseMove={mv} onMouseLeave={lv} style={{
//       padding: "15px 38px", borderRadius: 12, cursor: "pointer",
//       fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
//       letterSpacing: ".01em",
//       transition: "transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease",
//       ...(primary ? {
//         background: `linear-gradient(135deg, ${T.teal} 0%, ${T.tealDark} 100%)`,
//         color: "#001a14", border: "none",
//         boxShadow: `0 6px 28px rgba(0,201,167,.35), inset 0 1px 0 rgba(255,255,255,.2)`,
//       } : {
//         background: "rgba(255,255,255,.04)",
//         color: "#fff",
//         border: "1px solid rgba(255,255,255,.18)",
//         backdropFilter: "blur(10px)",
//       }),
//       ...ext,
//     }}>{children}</button>
//   );
// }

// /* ─── Section Label ─── */
// function SectionLabel({ children }: { children: React.ReactNode }) {
//   return (
//     <div style={{
//       display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 18,
//     }}>
//       <div style={{ width: 28, height: 1, background: T.teal, opacity: .7 }} />
//       <span style={{
//         fontSize: 11, fontWeight: 700, color: T.teal,
//         letterSpacing: "0.16em", textTransform: "uppercase",
//       }}>{children}</span>
//       <div style={{ width: 28, height: 1, background: T.teal, opacity: .7 }} />
//     </div>
//   );
// }

// /* ─── Gradient text ─── */
// const gradText: React.CSSProperties = {
//   background: `linear-gradient(120deg, ${T.teal} 0%, #7fffd4 60%, ${T.teal} 100%)`,
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
//   backgroundSize: "200% auto",
// };

// /* ═══════════════ MAIN ═══════════════ */
// export default function AboutPage() {
//   const [hoveredVal, setHoveredVal] = useState<number | null>(null);
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });
//   const statsIO = useInView(.3);
//   const heroIO = useInView(.2);

//   useEffect(() => {
//     const f = (e: MouseEvent) =>
//       setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
//     window.addEventListener("mousemove", f);
//     return () => window.removeEventListener("mousemove", f);
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <main style={{
//         background: "#020c1a",
//         fontFamily: "'DM Sans', sans-serif",
//         color: "#fff",
//         overflowX: "hidden",
//       }}>
//         <style>{`
//           @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,600&display=swap');

//           *, *::before, *::after { box-sizing: border-box; }

//           @keyframes floatA   { 0%,100%{transform:translateY(0)}   50%{transform:translateY(-14px)} }
//           @keyframes floatB   { 0%,100%{transform:translateY(-8px)} 50%{transform:translateY(10px)} }
//           @keyframes spinCW   { from{transform:rotate(0)} to{transform:rotate(360deg)} }
//           @keyframes spinCCW  { from{transform:rotate(0)} to{transform:rotate(-360deg)} }
//           @keyframes pulseOrb { 0%,100%{opacity:.1;transform:scale(1)} 50%{opacity:.22;transform:scale(1.1)} }
//           @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }
//           @keyframes popIn    { 0%{transform:scale(0) rotate(-15deg);opacity:0} 70%{transform:scale(1.06) rotate(2deg)} 100%{transform:scale(1) rotate(0);opacity:1} }
//           @keyframes slideIn  { from{opacity:0;transform:translateX(-16px)} to{opacity:1;transform:translateX(0)} }
//           @keyframes scanLine { 0%{top:0} 100%{top:100%} }
//           @keyframes tagScroll{ 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
//           @keyframes shimmer  { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
//           @keyframes glowPulse{ 0%,100%{box-shadow:0 0 20px rgba(0,201,167,.15)} 50%{box-shadow:0 0 40px rgba(0,201,167,.38)} }
//           @keyframes heroText { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

//           .nnc-shimmer-text {
//             background: linear-gradient(90deg, #00c9a7, #7fffd4, #00c9a7, #7fffd4);
//             background-size: 300% 100%;
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//             animation: shimmer 4s ease infinite;
//           }

//           .nnc-hero-h1 { animation: heroText .9s cubic-bezier(.16,1,.3,1) .3s both; }
//           .nnc-hero-p  { animation: heroText .9s cubic-bezier(.16,1,.3,1) .5s both; }
//           .nnc-hero-btns { animation: heroText .9s cubic-bezier(.16,1,.3,1) .65s both; }

//           .nnc-val-card {
//             border-radius: 20px;
//             padding: 34px 28px;
//             cursor: default;
//             position: relative;
//             overflow: hidden;
//             transition: transform .35s cubic-bezier(.16,1,.3,1), border-color .3s, background .3s, box-shadow .35s;
//           }
//           .nnc-val-card::after {
//             content: "";
//             position: absolute;
//             inset: 0;
//             border-radius: 20px;
//             background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(0,201,167,.08), transparent 60%);
//             opacity: 0;
//             transition: opacity .3s;
//           }
//           .nnc-val-card:hover::after { opacity: 1; }
//           .nnc-val-card:hover { transform: translateY(-8px) scale(1.02); }

//           .nnc-tag-belt { display: flex; gap: 12px; width: max-content; animation: tagScroll 22s linear infinite; }
//           .nnc-tag-belt:hover { animation-play-state: paused; }

//           .nnc-comp-row { transition: background .2s; }
//           .nnc-comp-row:hover { background: rgba(0,201,167,.05) !important; }

//           .nnc-why-item {
//             transition: transform .22s ease, background .22s ease;
//             border-radius: 12px;
//             padding: 12px 14px;
//           }
//           .nnc-why-item:hover { transform: translateX(8px); background: rgba(0,201,167,.07) !important; }

//           .nnc-office-row {
//             transition: background .2s, transform .22s;
//             border-radius: 12px;
//           }
//           .nnc-office-row:hover { background: rgba(0,201,167,.08) !important; transform: translateX(5px); }

//           .nnc-stat-cell { transition: background .3s; cursor: default; }
//           .nnc-stat-cell:hover { background: rgba(0,201,167,.1) !important; }

//           /* Layout */
//           .nnc-section { padding: 108px 48px; }
//           .nnc-stat-grid { display: grid; grid-template-columns: repeat(4,1fr); }
//           .nnc-story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 76px; align-items: center; }
//           .nnc-parent-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 44px; align-items: center; }
//           .nnc-mini-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
//           .nnc-why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
//           .nnc-values-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
//           .nnc-offices-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
//           .nnc-comp-grid { display: grid; grid-template-columns: 1.2fr 1fr 1fr; }

//           /* Divider line */
//           .nnc-divider {
//             height: 1px;
//             background: linear-gradient(90deg, transparent, rgba(0,201,167,.25), transparent);
//             margin: 0 48px;
//           }

//           @media (max-width: 960px) {
//             .nnc-story-grid, .nnc-parent-grid, .nnc-why-grid, .nnc-offices-grid { grid-template-columns: 1fr !important; }
//             .nnc-stat-grid { grid-template-columns: repeat(2,1fr) !important; }
//             .nnc-section { padding: 72px 32px; }
//           }
//           @media (max-width: 720px) {
//             .nnc-values-grid { grid-template-columns: 1fr 1fr !important; }
//             .nnc-comp-grid { grid-template-columns: 1fr !important; }
//           }
//           @media (max-width: 520px) {
//             .nnc-values-grid { grid-template-columns: 1fr !important; }
//             .nnc-section { padding: 56px 20px; }
//             .nnc-stat-grid { grid-template-columns: 1fr 1fr !important; }
//           }
//         `}</style>

//         {/* ══════════════════════════════
//             HERO
//         ══════════════════════════════ */}
//         <section style={{
//           minHeight: "94vh",
//           display: "flex",
//           alignItems: "center",
//           padding: "130px 48px 90px",
//           background: "linear-gradient(140deg, #010b17 0%, #021424 45%, #020c1a 100%)",
//           position: "relative",
//           overflow: "hidden",
//         }}>
//           <Particles />

//           {/* Grid overlay */}
//           <div style={{
//             position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
//             backgroundImage: `linear-gradient(rgba(0,201,167,.03) 1px,transparent 1px),
//                               linear-gradient(90deg,rgba(0,201,167,.03) 1px,transparent 1px)`,
//             backgroundSize: "64px 64px",
//           }} />

//           {/* Noise texture */}
//           <div style={{
//             position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, opacity: .018,
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
//             backgroundSize: "180px",
//           }} />

//           {/* Parallax orb — teal center-right */}
//           <div style={{
//             position: "absolute", width: 750, height: 750, borderRadius: "50%", pointerEvents: "none", zIndex: 1,
//             background: `radial-gradient(circle, rgba(0,201,167,.12) 0%, transparent 65%)`,
//             top: "50%", left: "55%",
//             transform: `translate(-50%, -50%) translate(${mouse.x * -20}px, ${mouse.y * -16}px)`,
//             transition: "transform .45s ease",
//             animation: "pulseOrb 8s ease-in-out infinite",
//           }} />

//           {/* Orb — indigo left */}
//           <div style={{
//             position: "absolute", width: 500, height: 500, borderRadius: "50%", pointerEvents: "none", zIndex: 1,
//             background: "radial-gradient(circle, rgba(99,102,241,.1) 0%, transparent 65%)",
//             top: "15%", left: "-8%",
//             transform: `translate(${mouse.x * 16}px, ${mouse.y * 12}px)`,
//             transition: "transform .5s ease",
//             animation: "pulseOrb 11s ease-in-out infinite 1s",
//           }} />

//           {/* Rings — centered behind hero */}
//           <div style={{
//             position: "absolute", width: 700, height: 700, borderRadius: "50%", pointerEvents: "none", zIndex: 1,
//             border: "1px dashed rgba(0,201,167,.07)",
//             top: "50%", left: "50%", transform: "translate(-50%,-50%)",
//             animation: "spinCW 55s linear infinite",
//           }} />
//           <div style={{
//             position: "absolute", width: 460, height: 460, borderRadius: "50%", pointerEvents: "none", zIndex: 1,
//             border: "1px dashed rgba(0,201,167,.045)",
//             top: "50%", left: "50%", transform: "translate(-50%,-50%)",
//             animation: "spinCCW 35s linear infinite",
//           }} />

//           <div style={{ maxWidth: 1220, margin: "0 auto", position: "relative", zIndex: 3, width: "100%" }}>
//             <div ref={heroIO.ref} style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>

//               {/* Badge */}
//               <div style={{
//                 display: "inline-flex", alignItems: "center", gap: 10,
//                 background: "rgba(0,201,167,.07)", border: "1px solid rgba(0,201,167,.22)",
//                 borderRadius: 40, padding: "8px 20px", marginBottom: 36,
//                 animation: "glowPulse 3.5s ease-in-out infinite",
//               }}>
//                 <div style={{
//                   width: 7, height: 7, borderRadius: "50%", background: T.teal,
//                   boxShadow: `0 0 10px ${T.teal}`,
//                   animation: "blink 1.5s ease-in-out infinite",
//                 }} />
//                 <span style={{
//                   fontSize: 11, fontWeight: 700, color: T.teal,
//                   letterSpacing: "0.14em", textTransform: "uppercase",
//                 }}>About NNC Digital Solutions</span>
//               </div>

//               {/* H1 */}
//               <h1 className="nnc-hero-h1" style={{
//                 fontFamily: "'Fraunces', serif",
//                 fontSize: "clamp(36px, 5.2vw, 72px)",
//                 fontWeight: 700,
//                 lineHeight: 1.12,
//                 marginBottom: 30,
//                 marginTop: 0,
//                 letterSpacing: "-.03em",
//                 maxWidth: 900,
//               }}>
//                 Built on{" "}
//                 <em style={{ fontStyle: "italic", ...gradText as object }}>
//                   Indian Tech Excellence.
//                 </em>
//                 <br />
//                 Built for{" "}
//                 <span style={{ color: "rgba(255,255,255,.92)" }}>Canadian,</span>
//                 {" "}
//                 <em style={{ fontStyle: "italic", color: "rgba(255,255,255,.55)" }}>
//                   US &amp; UK Business.
//                 </em>
//               </h1>

//               {/* Body */}
//               <p className="nnc-hero-p" style={{
//                 fontSize: "clamp(15px, 1.35vw, 18px)", color: "rgba(255,255,255,.48)",
//                 lineHeight: 1.9, marginBottom: 46, maxWidth: 620, marginTop: 0,
//               }}>
//                 NNC Digital Solutions is the international technology arm of Nakshatra Namaha Creations Pvt. Ltd. — one of Bangalore&apos;s most respected digital studios. We were born from a belief that the deep technology expertise that has transformed thousands of Indian businesses deserves to be accessible to growing companies in Canada, the USA, and the United Kingdom.
//               </p>

//               {/* CTAs */}
//               <div className="nnc-hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
//                 <MagBtn primary>Book a Free Consultation</MagBtn>
//                 <MagBtn>View Our Work →</MagBtn>
//               </div>
//             </div>

//             {/* ── STAT STRIP ── */}
//             <FadeUp delay={0.4}>
//               <div ref={statsIO.ref}>
//                 <div className="nnc-stat-grid" style={{
//                   marginTop: 80,
//                   borderRadius: 20,
//                   overflow: "hidden",
//                   border: "1px solid rgba(255,255,255,.07)",
//                   background: "rgba(255,255,255,.025)",
//                   backdropFilter: "blur(12px)",
//                 }}>
//                   {STATS.map((s, i) => (
//                     <div key={i} className="nnc-stat-cell" style={{
//                       padding: "32px 24px", textAlign: "center",
//                       background: "rgba(5,16,32,.7)",
//                       borderRight: i < 3 ? "1px solid rgba(255,255,255,.05)" : "none",
//                       position: "relative",
//                     }}>
//                       {/* top accent */}
//                       <div style={{
//                         position: "absolute", top: 0, left: "20%", right: "20%", height: 2,
//                         background: `linear-gradient(90deg, transparent, ${T.teal}, transparent)`,
//                         opacity: .5,
//                       }} />
//                       <p style={{
//                         fontFamily: "'Fraunces', serif",
//                         fontSize: "clamp(28px, 3.2vw, 48px)",
//                         fontWeight: 700, margin: 0,
//                         ...gradText as object,
//                       }}>
//                         <Counter to={s.value} suffix={s.suffix} active={statsIO.visible} />
//                       </p>
//                       <p style={{
//                         fontSize: 11, color: "rgba(255,255,255,.38)",
//                         margin: "8px 0 0", fontWeight: 600,
//                         letterSpacing: "0.08em", textTransform: "uppercase",
//                       }}>{s.label}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </FadeUp>
//           </div>
//         </section>

//         <div className="nnc-divider" />

//         {/* ══════════════════════════════
//             THE NNC STORY
//         ══════════════════════════════ */}
//         <section className="nnc-section" style={{ background: "#020c1a" }}>
//           <div style={{ maxWidth: 1220, margin: "0 auto" }}>
//             <div className="nnc-story-grid">

//               {/* Text */}
//               <FadeUp>
//                 <div>
//                   <SectionLabel>Our Story</SectionLabel>
//                   <h2 style={{
//                     fontFamily: "'Fraunces', serif",
//                     fontSize: "clamp(26px, 2.9vw, 40px)",
//                     fontWeight: 600, lineHeight: 1.2, marginBottom: 30, marginTop: 0,
//                   }}>
//                     From Bangalore to Canada —{" "}
//                     <span style={gradText as object}>The NNC Digital Story</span>
//                   </h2>

//                   {[
//                     "Nakshatra Namaha Creations Pvt. Ltd. was founded in Bangalore, India — a city synonymous with world-class software engineering. Over 8+ years, the company built a reputation as one of Karnataka's most trusted digital studios, delivering 565+ projects across website development, mobile apps, digital marketing, corporate video, 2D animation, B2B marketing, and more.",
//                     "In response to increasing demand from businesses in Canada, the United States, and the United Kingdom who needed a trustworthy offshore technology partner — NNC Digital Solutions was launched as Nakshatra Namaha Creations' dedicated international brand.",
//                     "NNC Digital is not a new company trying to build a reputation. It is the international expression of a decade of proven capability — backed by the people, processes, and portfolio of one of India's most capable digital studios.",
//                   ].map((para, i) => (
//                     <p key={i} style={{
//                       color: "rgba(255,255,255,.5)", fontSize: 15, lineHeight: 1.88,
//                       marginBottom: 18,
//                       animation: `slideIn .6s ease ${.15 + i * .15}s both`,
//                     }}>{para}</p>
//                   ))}

//                   {/* Pill */}
//                   <div style={{
//                     marginTop: 26, padding: "18px 22px", borderRadius: 14,
//                     background: "rgba(0,201,167,.05)", border: "1px solid rgba(0,201,167,.18)",
//                     display: "flex", alignItems: "center", gap: 16,
//                     transition: "transform .25s, background .25s", cursor: "default",
//                   }}
//                     onMouseEnter={e => {
//                       (e.currentTarget as HTMLElement).style.transform = "translateX(6px)";
//                       (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.09)";
//                     }}
//                     onMouseLeave={e => {
//                       (e.currentTarget as HTMLElement).style.transform = "";
//                       (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.05)";
//                     }}
//                   >
//                     <span style={{ fontSize: 28 }}>🇮🇳</span>
//                     <div>
//                       <p style={{ fontSize: 13.5, fontWeight: 700, color: "#fff", margin: 0 }}>
//                         Bangalore → Toronto · New York · London
//                       </p>
//                       <p style={{ fontSize: 12, color: "rgba(255,255,255,.38)", margin: "3px 0 0" }}>
//                         One trusted studio. Three international markets.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </FadeUp>

//               {/* Image side */}
//               <FadeUp delay={0.18}>
//                 <div style={{ position: "relative" }}>
//                   <div style={{
//                     borderRadius: 28, overflow: "hidden",
//                     border: "1px solid rgba(0,201,167,.18)",
//                     boxShadow: `0 36px 90px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.04)`,
//                     position: "relative", aspectRatio: "4/3",
//                     transition: "transform .45s cubic-bezier(.16,1,.3,1), box-shadow .45s ease",
//                   }}
//                     onMouseEnter={e => {
//                       (e.currentTarget as HTMLElement).style.transform = "scale(1.02) perspective(800px) rotateY(-2deg)";
//                       (e.currentTarget as HTMLElement).style.boxShadow = `0 48px 110px rgba(0,0,0,.65), 0 0 80px rgba(0,201,167,.12)`;
//                     }}
//                     onMouseLeave={e => {
//                       (e.currentTarget as HTMLElement).style.transform = "";
//                       (e.currentTarget as HTMLElement).style.boxShadow = `0 36px 90px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.04)`;
//                     }}
//                   >
//                     <Image src="/NNCLOGO.jpg" alt="NNC Digital Solutions" fill style={{ objectFit: "cover" }} />
//                     <div style={{
//                       position: "absolute", inset: 0,
//                       background: "linear-gradient(to top, rgba(2,12,26,.88) 0%, rgba(2,12,26,.2) 55%, transparent 100%)",
//                     }} />
//                     {/* scan line */}
//                     <div style={{
//                       position: "absolute", left: 0, right: 0, height: 2, pointerEvents: "none",
//                       background: "linear-gradient(90deg, transparent, rgba(0,201,167,.55), transparent)",
//                       animation: "scanLine 4.5s linear infinite",
//                     }} />
//                     <div style={{ position: "absolute", bottom: 26, left: 26, right: 26 }}>
//                       <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: 0 }}>NNC Digital Solutions</p>
//                       <p style={{ fontSize: 12, color: T.teal, margin: "5px 0 0", fontWeight: 500 }}>A Nakshatra Namaha Creations Company</p>
//                     </div>
//                   </div>

//                   {/* Badge — top right */}
//                   <div style={{
//                     position: "absolute", top: -20, right: -20,
//                     background: `linear-gradient(135deg, ${T.teal}, ${T.tealDark})`,
//                     borderRadius: 18, padding: "16px 20px", textAlign: "center",
//                     boxShadow: `0 10px 36px rgba(0,201,167,.5)`,
//                     animation: "floatA 4.2s ease-in-out infinite, popIn .85s ease .3s both",
//                   }}>
//                     <p style={{ fontFamily: "'Fraunces', serif", fontSize: 26, fontWeight: 700, color: "#001a14", margin: 0, lineHeight: 1 }}>565+</p>
//                     <p style={{ fontSize: 10, fontWeight: 700, color: "rgba(0,26,20,.65)", margin: "4px 0 0", letterSpacing: "0.08em" }}>PROJECTS</p>
//                   </div>

//                   {/* Badge — bottom left */}
//                   <div style={{
//                     position: "absolute", bottom: -20, left: -20,
//                     background: "rgba(2,14,28,.96)", border: "1px solid rgba(0,201,167,.28)",
//                     borderRadius: 16, padding: "13px 18px",
//                     boxShadow: "0 10px 36px rgba(0,0,0,.5)",
//                     animation: "floatB 5.5s ease-in-out infinite, popIn .85s ease .55s both",
//                   }}>
//                     <p style={{ fontSize: 12.5, fontWeight: 700, color: "#fff", margin: 0 }}>🏙️ Bangalore · Toronto · London</p>
//                     <p style={{ fontSize: 11, color: "rgba(255,255,255,.38)", margin: "4px 0 0" }}>8+ years of global delivery</p>
//                   </div>
//                 </div>
//               </FadeUp>
//             </div>
//           </div>
//         </section>

//         <div className="nnc-divider" />

//         {/* ══════════════════════════════
//             PARENT COMPANY
//         ══════════════════════════════ */}
//         <section className="nnc-section" style={{
//           background: "linear-gradient(180deg, #030f20 0%, #02101f 100%)",
//           position: "relative", overflow: "hidden",
//         }}>
//           {/* dot grid */}
//           <div style={{
//             position: "absolute", inset: 0, pointerEvents: "none",
//             backgroundImage: `radial-gradient(rgba(0,201,167,.055) 1px, transparent 1px)`,
//             backgroundSize: "30px 30px",
//           }} />

//           <div style={{ maxWidth: 1220, margin: "0 auto", position: "relative", zIndex: 1 }}>

//             <FadeUp style={{ textAlign: "center", marginBottom: 60 } as React.CSSProperties}>
//               <SectionLabel>Backed By</SectionLabel>
//               <h2 style={{
//                 fontFamily: "'Fraunces', serif",
//                 fontSize: "clamp(26px, 2.9vw, 42px)",
//                 fontWeight: 600, marginBottom: 12, marginTop: 0,
//               }}>
//                 Our Parent Company —{" "}
//                 <span className="nnc-shimmer-text">Nakshatra Namaha Creations Pvt. Ltd.</span>
//               </h2>
//               <p style={{ fontSize: 16, color: "rgba(255,255,255,.4)", margin: 0, fontWeight: 400 }}>
//                 8+ Years of Digital Excellence from Bangalore, India
//               </p>
//             </FadeUp>

//             {/* Main info block */}
//             <FadeUp delay={0.1}>
//               <div style={{
//                 borderRadius: 24, padding: "44px 48px", marginBottom: 50,
//                 background: "rgba(0,201,167,.04)",
//                 border: "1px solid rgba(0,201,167,.18)",
//                 transition: "box-shadow .35s",
//               }}
//                 onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 28px 70px rgba(0,0,0,.45)"}
//                 onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = ""}
//               >
//                 <div className="nnc-parent-grid">
//                   <div>
//                     <p style={{ fontSize: 15.5, color: "rgba(255,255,255,.52)", lineHeight: 1.88, margin: "0 0 24px" }}>
//                       Headquartered in <strong style={{ color: "#fff", fontWeight: 700 }}>Bengaluru, Karnataka</strong> — India&apos;s Silicon Valley — with offices in Mysore, Mumbai, and Hyderabad. A full-spectrum digital studio combining creative excellence with engineering rigour.
//                     </p>
//                     <a
//                       href="https://www.nakshatranamahacreations.com"
//                       target="_blank" rel="noopener noreferrer"
//                       style={{
//                         display: "inline-flex", alignItems: "center", gap: 10,
//                         fontSize: 14, fontWeight: 700, color: T.teal,
//                         textDecoration: "none",
//                         padding: "10px 18px", borderRadius: 10,
//                         background: "rgba(0,201,167,.08)", border: "1px solid rgba(0,201,167,.2)",
//                         transition: "background .2s, gap .2s",
//                       }}
//                       onMouseEnter={e => {
//                         (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.14)";
//                         (e.currentTarget as HTMLElement).style.gap = "16px";
//                       }}
//                       onMouseLeave={e => {
//                         (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.08)";
//                         (e.currentTarget as HTMLElement).style.gap = "10px";
//                       }}
//                     >
//                       🌐 www.nakshatranamahacreations.com →
//                     </a>
//                   </div>

//                   <div className="nnc-mini-stats">
//                     {[
//                       { n: "8+", l: "Years Active" },
//                       { n: "565+", l: "Projects" },
//                       { n: "100+", l: "Team Size" },
//                       { n: "4", l: "Indian Offices" },
//                     ].map((s, i) => (
//                       <div key={i} style={{
//                         textAlign: "center", padding: "22px 14px", borderRadius: 16,
//                         background: "rgba(0,201,167,.06)", border: "1px solid rgba(0,201,167,.13)",
//                         transition: "transform .28s, background .28s", cursor: "default",
//                       }}
//                         onMouseEnter={e => {
//                           (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
//                           (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.13)";
//                         }}
//                         onMouseLeave={e => {
//                           (e.currentTarget as HTMLElement).style.transform = "";
//                           (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.06)";
//                         }}
//                       >
//                         <p style={{
//                           fontFamily: "'Fraunces', serif",
//                           fontSize: 30, fontWeight: 700, color: T.teal, margin: 0,
//                         }}>{s.n}</p>
//                         <p style={{
//                           fontSize: 10.5, color: "rgba(255,255,255,.38)",
//                           margin: "5px 0 0", fontWeight: 600,
//                           textTransform: "uppercase", letterSpacing: "0.07em",
//                         }}>{s.l}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </FadeUp>

//             {/* Marquee service tags */}
//             <FadeUp delay={0.15}>
//               <p style={{
//                 fontSize: 11, fontWeight: 700, letterSpacing: "0.13em",
//                 textTransform: "uppercase", color: "rgba(255,255,255,.3)", marginBottom: 14,
//               }}>Parent Company Services That Power NNC Digital</p>
//               <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)", marginBottom: 50 }}>
//                 <div className="nnc-tag-belt">
//                   {[...PARENT_SERVICES, ...PARENT_SERVICES].map((s, i) => (
//                     <span key={i} style={{
//                       flexShrink: 0, fontSize: 13, fontWeight: 600,
//                       color: "rgba(255,255,255,.68)",
//                       background: "rgba(255,255,255,.04)",
//                       border: "1px solid rgba(255,255,255,.09)",
//                       padding: "9px 20px", borderRadius: 40, whiteSpace: "nowrap",
//                       transition: "background .2s, color .2s, border-color .2s", cursor: "default",
//                     }}
//                       onMouseEnter={e => {
//                         (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.1)";
//                         (e.currentTarget as HTMLElement).style.color = T.teal;
//                         (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,167,.28)";
//                       }}
//                       onMouseLeave={e => {
//                         (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.04)";
//                         (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.68)";
//                         (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.09)";
//                       }}
//                     >{s}</span>
//                   ))}
//                 </div>
//               </div>
//             </FadeUp>

//             {/* Comparison table */}
//             <FadeUp delay={0.2}>
//               <div style={{
//                 borderRadius: 18, overflow: "hidden",
//                 border: "1px solid rgba(255,255,255,.07)",
//                 boxShadow: "0 20px 60px rgba(0,0,0,.3)",
//               }}>
//                 <div className="nnc-comp-grid" style={{
//                   background: "rgba(0,201,167,.07)",
//                   borderBottom: "1px solid rgba(0,201,167,.18)",
//                   padding: "16px 28px",
//                 }}>
//                   {["Metric", "Nakshatra Namaha Creations", "NNC Digital (International)"].map(h => (
//                     <p key={h} style={{
//                       fontSize: 10.5, fontWeight: 700, color: T.teal,
//                       textTransform: "uppercase", letterSpacing: "0.11em", margin: 0,
//                     }}>{h}</p>
//                   ))}
//                 </div>
//                 {COMPARISON.map((row, i) => (
//                   <div key={i} className="nnc-comp-row nnc-comp-grid" style={{
//                     padding: "19px 28px",
//                     background: i % 2 === 0 ? "rgba(255,255,255,.015)" : "transparent",
//                     borderBottom: i < COMPARISON.length - 1 ? "1px solid rgba(255,255,255,.04)" : "none",
//                   }}>
//                     <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,.55)", margin: 0 }}>{row.metric}</p>
//                     <p style={{ fontSize: 13, color: "rgba(255,255,255,.82)", margin: 0 }}>{row.parent}</p>
//                     <p style={{ fontSize: 13, color: T.teal, fontWeight: 600, margin: 0 }}>{row.nnc}</p>
//                   </div>
//                 ))}
//               </div>
//             </FadeUp>
//           </div>
//         </section>

//         <div className="nnc-divider" />

//         {/* ══════════════════════════════
//             WHY WE LAUNCHED
//         ══════════════════════════════ */}
//         <section className="nnc-section" style={{ background: "#020c1a" }}>
//           <div style={{ maxWidth: 1220, margin: "0 auto" }}>

//             <FadeUp style={{ textAlign: "center", marginBottom: 60 } as React.CSSProperties}>
//               <SectionLabel>Our Purpose</SectionLabel>
//               <h2 style={{
//                 fontFamily: "'Fraunces', serif",
//                 fontSize: "clamp(26px, 2.9vw, 42px)",
//                 fontWeight: 600, margin: 0,
//               }}>
//                 Why We Launched NNC Digital for the{" "}
//                 <span style={gradText as object}>North American &amp; UK Market</span>
//               </h2>
//             </FadeUp>

//             <div className="nnc-why-grid">

//               {/* Gap card */}
//               <FadeUp delay={0.08}>
//                 <div style={{
//                   borderRadius: 22, padding: "42px 38px", height: "100%",
//                   background: "rgba(255,255,255,.025)",
//                   border: "1px solid rgba(255,255,255,.07)",
//                   transition: "border-color .3s, transform .32s",
//                 }}
//                   onMouseEnter={e => {
//                     (e.currentTarget as HTMLElement).style.borderColor = "rgba(239,68,68,.28)";
//                     (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
//                   }}
//                   onMouseLeave={e => {
//                     (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.07)";
//                     (e.currentTarget as HTMLElement).style.transform = "";
//                   }}
//                 >
//                   <div style={{
//                     width: 50, height: 50, borderRadius: 14, marginBottom: 26,
//                     background: "rgba(239,68,68,.1)", border: "1px solid rgba(239,68,68,.2)",
//                     display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
//                   }}>🔍</div>
//                   <h3 style={{
//                     fontFamily: "'Fraunces', serif",
//                     fontSize: 20, fontWeight: 600, color: "#fff", marginBottom: 18, marginTop: 0,
//                   }}>The Gap We Saw</h3>
//                   <p style={{ color: "rgba(255,255,255,.48)", fontSize: 15, lineHeight: 1.88, margin: "0 0 16px" }}>
//                     Businesses in Canada, the USA, and the UK face a common challenge: local agencies charge premium prices for work that can be delivered at a fraction of the cost — without any quality reduction — by the right offshore partner.
//                   </p>
//                   <p style={{ color: "rgba(255,255,255,.48)", fontSize: 15, lineHeight: 1.88, margin: 0 }}>
//                     Most offshore agencies fail because they don&apos;t understand the regulatory environment, commercial culture, or specific needs of Western businesses.
//                   </p>
//                 </div>
//               </FadeUp>

//               {/* Solution card */}
//               <FadeUp delay={0.15}>
//                 <div style={{
//                   borderRadius: 22, padding: "42px 38px", height: "100%",
//                   background: "rgba(0,201,167,.035)",
//                   border: "1px solid rgba(0,201,167,.16)",
//                   transition: "border-color .3s, transform .32s",
//                   position: "relative", overflow: "hidden",
//                 }}
//                   onMouseEnter={e => {
//                     (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,167,.38)";
//                     (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
//                   }}
//                   onMouseLeave={e => {
//                     (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,167,.16)";
//                     (e.currentTarget as HTMLElement).style.transform = "";
//                   }}
//                 >
//                   <div style={{
//                     position: "absolute", top: 0, left: 0, right: 0, height: 2, borderRadius: "22px 22px 0 0",
//                     background: `linear-gradient(90deg, transparent, ${T.teal}, transparent)`, opacity: .6,
//                   }} />
//                   <div style={{
//                     width: 50, height: 50, borderRadius: 14, marginBottom: 26,
//                     background: "rgba(0,201,167,.1)", border: "1px solid rgba(0,201,167,.28)",
//                     display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
//                   }}>✅</div>
//                   <h3 style={{
//                     fontFamily: "'Fraunces', serif",
//                     fontSize: 20, fontWeight: 600, color: "#fff", marginBottom: 22, marginTop: 0,
//                   }}>The Solution We Built</h3>
//                   <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//                     {WHY_SOLUTIONS.map((item, i) => (
//                       <div key={i} className="nnc-why-item" style={{
//                         display: "flex", gap: 13, alignItems: "flex-start",
//                         background: "rgba(0,201,167,.03)",
//                         animation: `slideIn .5s ease ${.2 + i * .1}s both`,
//                       }}>
//                         <div style={{
//                           width: 22, height: 22, borderRadius: "50%", flexShrink: 0, marginTop: 1,
//                           background: `linear-gradient(135deg, ${T.teal}, ${T.tealDark})`,
//                           display: "flex", alignItems: "center", justifyContent: "center",
//                           fontSize: 11, color: "#001a14", fontWeight: 900,
//                         }}>✓</div>
//                         <p style={{ color: "rgba(255,255,255,.7)", fontSize: 14.5, lineHeight: 1.7, margin: 0 }}>{item}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </FadeUp>
//             </div>
//           </div>
//         </section>

//         <div className="nnc-divider" />

//         {/* ══════════════════════════════
//             VALUES + OFFICES + CTA
//         ══════════════════════════════ */}
//         <section className="nnc-section" style={{
//           background: "linear-gradient(180deg, #030f20 0%, #020c1a 100%)",
//           position: "relative",
//         }}>
//           <div style={{ maxWidth: 1220, margin: "0 auto" }}>

//             {/* Values heading */}
//             <FadeUp style={{ textAlign: "center", marginBottom: 56 } as React.CSSProperties}>
//               <SectionLabel>Our Values</SectionLabel>
//               <h2 style={{
//                 fontFamily: "'Fraunces', serif",
//                 fontSize: "clamp(26px, 2.9vw, 42px)",
//                 fontWeight: 600, margin: 0,
//               }}>
//                 What We{" "}
//                 <span style={gradText as object}>Stand For</span>
//               </h2>
//             </FadeUp>

//             {/* Values grid */}
//             <div className="nnc-values-grid" style={{ marginBottom: 96 }}>
//               {VALUES.map((v, i) => (
//                 <FadeUp key={i} delay={0.07 * i}>
//                   <div
//                     className="nnc-val-card"
//                     onMouseEnter={() => setHoveredVal(i)}
//                     onMouseLeave={() => setHoveredVal(null)}
//                     style={{
//                       background: hoveredVal === i ? "rgba(0,201,167,.065)" : "rgba(255,255,255,.025)",
//                       border: `1px solid ${hoveredVal === i ? "rgba(0,201,167,.35)" : "rgba(255,255,255,.07)"}`,
//                       boxShadow: hoveredVal === i ? "0 28px 65px rgba(0,0,0,.5)" : "none",
//                     }}
//                   >
//                     {/* top accent line */}
//                     {hoveredVal === i && (
//                       <div style={{
//                         position: "absolute", top: 0, left: 0, right: 0, height: 2,
//                         borderRadius: "20px 20px 0 0",
//                         background: `linear-gradient(90deg, transparent, ${T.teal}, transparent)`,
//                       }} />
//                     )}
//                     <div style={{
//                       fontSize: 36, marginBottom: 18, display: "inline-block",
//                       transition: "transform .35s cubic-bezier(.16,1,.3,1)",
//                       transform: hoveredVal === i ? "scale(1.25) rotate(-6deg)" : "scale(1)",
//                     }}>{v.icon}</div>
//                     <p style={{ fontSize: 15.5, fontWeight: 700, color: "#fff", marginBottom: 8, marginTop: 0 }}>{v.title}</p>
//                     <p style={{ fontSize: 13.5, color: "rgba(255,255,255,.42)", lineHeight: 1.75, margin: 0 }}>{v.desc}</p>
//                   </div>
//                 </FadeUp>
//               ))}
//             </div>

//             {/* Offices heading */}
//             <FadeUp style={{ textAlign: "center", marginBottom: 38 } as React.CSSProperties}>
//               <h2 style={{
//                 fontFamily: "'Fraunces', serif",
//                 fontSize: "clamp(24px, 2.5vw, 36px)",
//                 fontWeight: 600, margin: 0,
//               }}>
//                 Global{" "}
//                 <span style={gradText as object}>Offices</span>
//               </h2>
//             </FadeUp>

//             {/* Offices grid */}
//             <div className="nnc-offices-grid" style={{ marginBottom: 88 }}>

//               {/* International */}
//               <FadeUp delay={0.08}>
//                 <div style={{
//                   borderRadius: 22, padding: "38px 34px",
//                   background: "rgba(0,201,167,.04)", border: "1px solid rgba(0,201,167,.18)",
//                   transition: "transform .3s, box-shadow .3s",
//                 }}
//                   onMouseEnter={e => {
//                     (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
//                     (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 56px rgba(0,0,0,.4)";
//                   }}
//                   onMouseLeave={e => {
//                     (e.currentTarget as HTMLElement).style.transform = "";
//                     (e.currentTarget as HTMLElement).style.boxShadow = "";
//                   }}
//                 >
//                   <p style={{
//                     fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em",
//                     textTransform: "uppercase", color: T.teal, marginBottom: 26, marginTop: 0,
//                   }}>International Offices</p>
//                   <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//                     {INT_OFFICES.map((o, i) => (
//                       <div key={i} className="nnc-office-row" style={{
//                         display: "flex", alignItems: "center", gap: 15,
//                         padding: "13px 15px",
//                         background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.05)",
//                         animation: `slideIn .5s ease ${.1 + i * .1}s both`,
//                       }}>
//                         <span style={{ fontSize: 24 }}>{o.flag}</span>
//                         <div>
//                           <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: 0 }}>{o.city}</p>
//                           <p style={{ fontSize: 13, color: T.teal, margin: "2px 0 0", fontWeight: 600 }}>{o.phone}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </FadeUp>

//               {/* India */}
//               <FadeUp delay={0.15}>
//                 <div style={{
//                   borderRadius: 22, padding: "38px 34px",
//                   background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.07)",
//                   transition: "transform .3s, box-shadow .3s",
//                 }}
//                   onMouseEnter={e => {
//                     (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
//                     (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 56px rgba(0,0,0,.4)";
//                   }}
//                   onMouseLeave={e => {
//                     (e.currentTarget as HTMLElement).style.transform = "";
//                     (e.currentTarget as HTMLElement).style.boxShadow = "";
//                   }}
//                 >
//                   <p style={{
//                     fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em",
//                     textTransform: "uppercase", color: "rgba(255,255,255,.35)", marginBottom: 26, marginTop: 0,
//                   }}>India Offices — Nakshatra Namaha Creations</p>
//                   <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//                     {INDIA_OFFICES.map((o, i) => (
//                       <div key={i} className="nnc-office-row" style={{
//                         display: "flex", alignItems: "center", gap: 15,
//                         padding: "13px 15px",
//                         background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.05)",
//                         animation: `slideIn .5s ease ${.1 + i * .1}s both`,
//                       }}>
//                         <span style={{ fontSize: 24 }}>{o.flag}</span>
//                         <div>
//                           <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: 0 }}>{o.city}</p>
//                           {o.phone && <p style={{ fontSize: 12.5, color: "rgba(255,255,255,.38)", margin: "2px 0 0" }}>{o.phone}</p>}
//                         </div>
//                       </div>
//                     ))}
//                     <div style={{ paddingTop: 16, borderTop: "1px solid rgba(255,255,255,.06)" }}>
//                       <p style={{ fontSize: 12.5, color: "rgba(255,255,255,.32)", margin: 0 }}>
//                         ✉️ info@nakshatranamahacreations.com
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </FadeUp>
//             </div>

//             {/* ── FINAL CTA ── */}
//             <FadeUp delay={0.1}>
//               <div style={{
//                 borderRadius: 28, padding: "72px 60px", textAlign: "center",
//                 background: "linear-gradient(135deg, rgba(0,201,167,.07) 0%, rgba(5,18,34,.9) 50%, rgba(2,12,26,.95) 100%)",
//                 border: "1px solid rgba(0,201,167,.2)",
//                 position: "relative", overflow: "hidden",
//                 transition: "box-shadow .4s",
//               }}
//                 onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 48px 110px rgba(0,0,0,.55), 0 0 90px rgba(0,201,167,.1)"}
//                 onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = ""}
//               >
//                 {/* background orb */}
//                 <div style={{
//                   position: "absolute", width: 550, height: 550, borderRadius: "50%",
//                   background: `radial-gradient(circle, rgba(0,201,167,.1) 0%, transparent 65%)`,
//                   top: "50%", left: "50%", transform: "translate(-50%,-50%)",
//                   animation: "pulseOrb 6s ease-in-out infinite", pointerEvents: "none",
//                 }} />
//                 {/* Decorative ring */}
//                 <div style={{
//                   position: "absolute", width: 320, height: 320, borderRadius: "50%",
//                   border: "1px dashed rgba(0,201,167,.1)",
//                   top: "50%", left: "50%", transform: "translate(-50%,-50%)",
//                   animation: "spinCW 28s linear infinite", pointerEvents: "none",
//                 }} />

//                 <div style={{ position: "relative", zIndex: 1 }}>
//                   <SectionLabel>Get Started</SectionLabel>
//                   <h2 style={{
//                     fontFamily: "'Fraunces', serif",
//                     fontSize: "clamp(24px, 2.8vw, 42px)",
//                     fontWeight: 600, marginBottom: 18, marginTop: 0,
//                   }}>
//                     Ready to Start a{" "}
//                     <span style={gradText as object}>Conversation?</span>
//                   </h2>
//                   <p style={{
//                     color: "rgba(255,255,255,.48)", fontSize: 16, lineHeight: 1.8,
//                     maxWidth: 560, margin: "0 auto 44px",
//                   }}>
//                     Whether you have a fully scoped project or just a problem you&apos;re trying to solve — we&apos;d love to talk. We&apos;ll respond within 24 hours with honest, practical advice.
//                   </p>
//                   <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
//                     <MagBtn primary>Book a Free Consultation</MagBtn>
//                     <MagBtn>View Our Work →</MagBtn>
//                   </div>
//                 </div>
//               </div>
//             </FadeUp>

//           </div>
//         </section>
//       </main>
//     </>
//   );
// }


"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { T } from "../components/tokens";
import Navbar from "../components/Navbar";

/* ─── Data ─── */
const VALUES = [
  { icon: "🎯", title: "Outcomes Over Outputs",   desc: "Results, not features shipped." },
  { icon: "🔒", title: "Compliance First",         desc: "GDPR / PIPEDA / CCPA in every system." },
  { icon: "💡", title: "Radical Transparency",     desc: "Fixed prices. Weekly demos. No jargon." },
  { icon: "🤝", title: "People Before Technology", desc: "Training & adoption matter." },
  { icon: "🏗️", title: "Long-Term Thinking",       desc: "Systems designed to last 5+ years." },
  { icon: "⭐", title: "Client First, Always",      desc: "Every decision starts with the client." },
];

const STATS = [
  { value: 8,   suffix: "+", label: "Years of Excellence" },
  { value: 565, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Team Members" },
  { value: 3,   suffix: "",  label: "International Markets" },
];

const PARENT_SERVICES = [
  "Website Development", "Mobile App Development", "Digital Marketing",
  "Graphic Design", "2D Animation", "Corporate Video Production",
  "B2B Marketing", "SEO & Performance Marketing",
];

const COMPARISON = [
  { metric: "Years in Business",  parent: "8+ Years",                                nnc: "Launched for CA/US/UK Market" },
  { metric: "Projects Delivered", parent: "565+",                                    nnc: "Growing Portfolio in NA & UK" },
  { metric: "Team Size",          parent: "100+ Members",                            nnc: "Dedicated International Team" },
  { metric: "Offices",            parent: "Bangalore · Mysore · Mumbai · Hyderabad", nnc: "Toronto · New York · London" },
];

const INT_OFFICES = [
  { flag: "🇨🇦", city: "Toronto, Canada", phone: "+1 647-XXX-XXXX" },
  { flag: "🇺🇸", city: "New York, USA",   phone: "+1 631-XXX-XXXX" },
  { flag: "🇬🇧", city: "London, UK",      phone: "+44 20-XXXX-XXXX" },
];

const INDIA_OFFICES = [
  { flag: "🇮🇳", city: "Bangalore HQ", phone: "+91 9900566466" },
  { flag: "🇮🇳", city: "Mysore",       phone: null },
  { flag: "🇮🇳", city: "Mumbai",       phone: null },
  { flag: "🇮🇳", city: "Hyderabad",    phone: null },
];

const WHY_SOLUTIONS = [
  "Dedicated project managers in North American and UK time zones",
  "GDPR, PIPEDA, and CCPA-compliant systems from day one",
  "Full creative and technical capability of a 100+ person studio",
  "Transparent, fixed-price proposals — no surprises",
  "Long-term partnership, not one-and-done project delivery",
];

/* ─── useInView ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Animated counter ─── */
function Counter({ to, suffix, active }: { to: number; suffix: string; active: boolean }) {
  const [v, setV] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    if (!active || done.current) return;
    done.current = true;
    let start: number | null = null;
    const dur = 2000;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setV(Math.round(ease * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, to]);
  return <span>{v}{suffix}</span>;
}

/* ─── Particle canvas ─── */
function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d")!;
    let W = c.width = c.offsetWidth, H = c.height = c.offsetHeight;
    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .28, vy: (Math.random() - .5) * .28,
      r: Math.random() * 1.4 + .4, a: Math.random() * .38 + .06,
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
        if (d < 105) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(0,201,167,${.055 * (1 - d / 105)})`; ctx.lineWidth = .4; ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return (
    <canvas ref={ref} style={{
      position: "absolute", inset: 0, width: "100%", height: "100%",
      pointerEvents: "none", zIndex: 0,
    }} />
  );
}

/* ─── FadeUp ─── */
function FadeUp({ children, delay = 0, style: ext }: {
  children: React.ReactNode; delay?: number; style?: React.CSSProperties;
}) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity .75s cubic-bezier(.16,1,.3,1) ${delay}s, transform .75s cubic-bezier(.16,1,.3,1) ${delay}s`,
      ...ext,
    }}>
      {children}
    </div>
  );
}

/* ─── Magnetic Button ─── */
function MagBtn({ children, primary, style: ext }: {
  children: React.ReactNode; primary?: boolean; style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const mv = useCallback((e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * .28}px,${(e.clientY - (r.top + r.height / 2)) * .28}px) scale(1.04)`;
  }, []);
  const lv = useCallback(() => { if (ref.current) ref.current.style.transform = ""; }, []);
  return (
    <button ref={ref} onMouseMove={mv} onMouseLeave={lv} style={{
      padding: "15px 38px", borderRadius: 12, cursor: "pointer",
      fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15,
      letterSpacing: ".01em",
      transition: "transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease",
      ...(primary ? {
        background: `linear-gradient(135deg, ${T.teal} 0%, ${T.tealDark} 100%)`,
        color: "#001a14", border: "none",
        boxShadow: `0 6px 28px rgba(0,201,167,.35), inset 0 1px 0 rgba(255,255,255,.2)`,
      } : {
        background: "rgba(255,255,255,.04)",
        color: "#fff",
        border: "1px solid rgba(255,255,255,.18)",
        backdropFilter: "blur(10px)",
      }),
      ...ext,
    }}>{children}</button>
  );
}

/* ─── Section Label ─── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 18,
    }}>
      <div style={{ width: 28, height: 1, background: T.teal, opacity: .7 }} />
      <span style={{
        fontSize: 11, fontWeight: 700, color: T.teal,
        letterSpacing: "0.16em", textTransform: "uppercase",
      }}>{children}</span>
      <div style={{ width: 28, height: 1, background: T.teal, opacity: .7 }} />
    </div>
  );
}

/* ─── Gradient text ─── */
const gradText: React.CSSProperties = {
  background: `linear-gradient(120deg, ${T.teal} 0%, #7fffd4 60%, ${T.teal} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundSize: "200% auto",
};

/* ═══════════════ MAIN ═══════════════ */
export default function AboutPage() {
  const [hoveredVal, setHoveredVal] = useState<number | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const statsIO = useInView(.3);
  const heroIO = useInView(.2);

  useEffect(() => {
    const f = (e: MouseEvent) =>
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("mousemove", f);
    return () => window.removeEventListener("mousemove", f);
  }, []);

  return (
    <>
      <Navbar />
      <main style={{
        background: "#020c1a",
        fontFamily: "'Poppins', sans-serif",
        color: "#fff",
        overflowX: "hidden",
      }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,600;1,700&display=swap');

          *, *::before, *::after { box-sizing: border-box; }

          @keyframes floatA   { 0%,100%{transform:translateY(0)}   50%{transform:translateY(-14px)} }
          @keyframes floatB   { 0%,100%{transform:translateY(-8px)} 50%{transform:translateY(10px)} }
          @keyframes spinCW   { from{transform:rotate(0)} to{transform:rotate(360deg)} }
          @keyframes spinCCW  { from{transform:rotate(0)} to{transform:rotate(-360deg)} }
          @keyframes pulseOrb { 0%,100%{opacity:.1;transform:scale(1)} 50%{opacity:.22;transform:scale(1.1)} }
          @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }
          @keyframes popIn    { 0%{transform:scale(0) rotate(-15deg);opacity:0} 70%{transform:scale(1.06) rotate(2deg)} 100%{transform:scale(1) rotate(0);opacity:1} }
          @keyframes slideIn  { from{opacity:0;transform:translateX(-16px)} to{opacity:1;transform:translateX(0)} }
          @keyframes scanLine { 0%{top:0} 100%{top:100%} }
          @keyframes tagScroll{ 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          @keyframes shimmer  { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
          @keyframes glowPulse{ 0%,100%{box-shadow:0 0 20px rgba(0,201,167,.15)} 50%{box-shadow:0 0 40px rgba(0,201,167,.38)} }
          @keyframes heroText { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

          .nnc-shimmer-text {
            background: linear-gradient(90deg, #00c9a7, #7fffd4, #00c9a7, #7fffd4);
            background-size: 300% 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 4s ease infinite;
          }

          .nnc-hero-h1 { animation: heroText .9s cubic-bezier(.16,1,.3,1) .3s both; }
          .nnc-hero-p  { animation: heroText .9s cubic-bezier(.16,1,.3,1) .5s both; }
          .nnc-hero-btns { animation: heroText .9s cubic-bezier(.16,1,.3,1) .65s both; }

          .nnc-val-card {
            border-radius: 20px;
            padding: 34px 28px;
            cursor: default;
            position: relative;
            overflow: hidden;
            transition: transform .35s cubic-bezier(.16,1,.3,1), border-color .3s, background .3s, box-shadow .35s;
          }
          .nnc-val-card::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 20px;
            background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(0,201,167,.08), transparent 60%);
            opacity: 0;
            transition: opacity .3s;
          }
          .nnc-val-card:hover::after { opacity: 1; }
          .nnc-val-card:hover { transform: translateY(-8px) scale(1.02); }

          .nnc-tag-belt { display: flex; gap: 12px; width: max-content; animation: tagScroll 22s linear infinite; }
          .nnc-tag-belt:hover { animation-play-state: paused; }

          .nnc-comp-row { transition: background .2s; }
          .nnc-comp-row:hover { background: rgba(0,201,167,.05) !important; }

          .nnc-why-item {
            transition: transform .22s ease, background .22s ease;
            border-radius: 12px;
            padding: 12px 14px;
          }
          .nnc-why-item:hover { transform: translateX(8px); background: rgba(0,201,167,.07) !important; }

          .nnc-office-row {
            transition: background .2s, transform .22s;
            border-radius: 12px;
          }
          .nnc-office-row:hover { background: rgba(0,201,167,.08) !important; transform: translateX(5px); }

          .nnc-stat-cell { transition: background .3s; cursor: default; }
          .nnc-stat-cell:hover { background: rgba(0,201,167,.1) !important; }

          /* Layout */
          .nnc-section { padding: 108px 48px; }
          .nnc-stat-grid { display: grid; grid-template-columns: repeat(4,1fr); }
          .nnc-story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 76px; align-items: center; }
          .nnc-parent-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 44px; align-items: center; }
          .nnc-mini-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
          .nnc-why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
          .nnc-values-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
          .nnc-offices-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
          .nnc-comp-grid { display: grid; grid-template-columns: 1.2fr 1fr 1fr; }

          /* Divider line */
          .nnc-divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(0,201,167,.25), transparent);
            margin: 0 48px;
          }

          @media (max-width: 960px) {
            .nnc-story-grid, .nnc-parent-grid, .nnc-why-grid, .nnc-offices-grid { grid-template-columns: 1fr !important; }
            .nnc-stat-grid { grid-template-columns: repeat(2,1fr) !important; }
            .nnc-section { padding: 72px 32px; }
          }
          @media (max-width: 720px) {
            .nnc-values-grid { grid-template-columns: 1fr 1fr !important; }
            .nnc-comp-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 520px) {
            .nnc-values-grid { grid-template-columns: 1fr !important; }
            .nnc-section { padding: 56px 20px; }
            .nnc-stat-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>

        {/* ══════════════════════════════
            HERO
        ══════════════════════════════ */}
        <section style={{
          minHeight: "94vh",
          display: "flex",
          alignItems: "center",
          padding: "130px 48px 90px",
          background: "linear-gradient(140deg, #010b17 0%, #021424 45%, #020c1a 100%)",
          position: "relative",
          overflow: "hidden",
        }}>
          <Particles />

          {/* Grid overlay */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
            backgroundImage: `linear-gradient(rgba(0,201,167,.03) 1px,transparent 1px),
                              linear-gradient(90deg,rgba(0,201,167,.03) 1px,transparent 1px)`,
            backgroundSize: "64px 64px",
          }} />

          {/* Noise texture */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, opacity: .018,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "180px",
          }} />

          {/* Parallax orb — teal center-right */}
          <div style={{
            position: "absolute", width: 750, height: 750, borderRadius: "50%", pointerEvents: "none", zIndex: 1,
            background: `radial-gradient(circle, rgba(0,201,167,.12) 0%, transparent 65%)`,
            top: "50%", left: "55%",
            transform: `translate(-50%, -50%) translate(${mouse.x * -20}px, ${mouse.y * -16}px)`,
            transition: "transform .45s ease",
            animation: "pulseOrb 8s ease-in-out infinite",
          }} />

          {/* Orb — indigo left */}
          <div style={{
            position: "absolute", width: 500, height: 500, borderRadius: "50%", pointerEvents: "none", zIndex: 1,
            background: "radial-gradient(circle, rgba(99,102,241,.1) 0%, transparent 65%)",
            top: "15%", left: "-8%",
            transform: `translate(${mouse.x * 16}px, ${mouse.y * 12}px)`,
            transition: "transform .5s ease",
            animation: "pulseOrb 11s ease-in-out infinite 1s",
          }} />

          {/* Rings — centered behind hero */}
          <div style={{
            position: "absolute", width: 700, height: 700, borderRadius: "50%", pointerEvents: "none", zIndex: 1,
            border: "1px dashed rgba(0,201,167,.07)",
            top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            animation: "spinCW 55s linear infinite",
          }} />
          <div style={{
            position: "absolute", width: 460, height: 460, borderRadius: "50%", pointerEvents: "none", zIndex: 1,
            border: "1px dashed rgba(0,201,167,.045)",
            top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            animation: "spinCCW 35s linear infinite",
          }} />

          <div style={{ maxWidth: 1220, margin: "0 auto", position: "relative", zIndex: 3, width: "100%" }}>
            <div ref={heroIO.ref} style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>

              {/* Badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "rgba(0,201,167,.07)", border: "1px solid rgba(0,201,167,.22)",
                borderRadius: 40, padding: "8px 20px", marginBottom: 36,
                animation: "glowPulse 3.5s ease-in-out infinite",
              }}>
                <div style={{
                  width: 7, height: 7, borderRadius: "50%", background: T.teal,
                  boxShadow: `0 0 10px ${T.teal}`,
                  animation: "blink 1.5s ease-in-out infinite",
                }} />
                <span style={{
                  fontSize: 11, fontWeight: 700, color: T.teal,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                }}>About NNC Digital Solutions</span>
              </div>

              {/* H1 */}
              <h1 className="nnc-hero-h1" style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(34px, 4.8vw, 64px)",
                fontWeight: 800,
                lineHeight: 1.12,
                marginBottom: 30,
                marginTop: 0,
                letterSpacing: "-.02em",
                maxWidth: 900,
              }}>
                Built on{" "}
                <em style={{ fontStyle: "italic", ...gradText as object }}>
                  Indian Tech Excellence.
                </em>
                <br />
                Built for{" "}
                <span style={{ color: "rgba(255,255,255,.92)" }}>Canadian,</span>
                {" "}
                <em style={{ fontStyle: "italic", color: "rgba(255,255,255,.55)" }}>
                  US &amp; UK Business.
                </em>
              </h1>

              {/* Body */}
              <p className="nnc-hero-p" style={{
                fontSize: "clamp(15px, 1.35vw, 18px)", color: "rgba(255,255,255,.48)",
                lineHeight: 1.9, marginBottom: 46, maxWidth: 620, marginTop: 0,
              }}>
                NNC Digital Solutions is the international technology arm of Nakshatra Namaha Creations Pvt. Ltd. — one of Bangalore&apos;s most respected digital studios. We were born from a belief that the deep technology expertise that has transformed thousands of Indian businesses deserves to be accessible to growing companies in Canada, the USA, and the United Kingdom.
              </p>

              {/* CTAs */}
              <div className="nnc-hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
                <MagBtn primary>Book a Free Consultation</MagBtn>
                <MagBtn>View Our Work →</MagBtn>
              </div>
            </div>

            {/* ── STAT STRIP ── */}
            <FadeUp delay={0.4}>
              <div ref={statsIO.ref}>
                <div className="nnc-stat-grid" style={{
                  marginTop: 80,
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,.07)",
                  background: "rgba(255,255,255,.025)",
                  backdropFilter: "blur(12px)",
                }}>
                  {STATS.map((s, i) => (
                    <div key={i} className="nnc-stat-cell" style={{
                      padding: "32px 24px", textAlign: "center",
                      background: "rgba(5,16,32,.7)",
                      borderRight: i < 3 ? "1px solid rgba(255,255,255,.05)" : "none",
                      position: "relative",
                    }}>
                      {/* top accent */}
                      <div style={{
                        position: "absolute", top: 0, left: "20%", right: "20%", height: 2,
                        background: `linear-gradient(90deg, transparent, ${T.teal}, transparent)`,
                        opacity: .5,
                      }} />
                      <p style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "clamp(28px, 3.2vw, 48px)",
                        fontWeight: 700, margin: 0,
                        ...gradText as object,
                      }}>
                        <Counter to={s.value} suffix={s.suffix} active={statsIO.visible} />
                      </p>
                      <p style={{
                        fontSize: 11, color: "rgba(255,255,255,.38)",
                        margin: "8px 0 0", fontWeight: 600,
                        letterSpacing: "0.08em", textTransform: "uppercase",
                      }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <div className="nnc-divider" />

        {/* ══════════════════════════════
            THE NNC STORY
        ══════════════════════════════ */}
        <section className="nnc-section" style={{ background: "#020c1a" }}>
          <div style={{ maxWidth: 1220, margin: "0 auto" }}>
            <div className="nnc-story-grid">

              {/* Text */}
              <FadeUp>
                <div>
                  <SectionLabel>Our Story</SectionLabel>
                  <h2 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "clamp(26px, 2.9vw, 40px)",
                    fontWeight: 700, lineHeight: 1.2, marginBottom: 30, marginTop: 0,
                  }}>
                    From Bangalore to Canada —{" "}
                    <span style={gradText as object}>The NNC Digital Story</span>
                  </h2>

                  {[
                    "Nakshatra Namaha Creations Pvt. Ltd. was founded in Bangalore, India — a city synonymous with world-class software engineering. Over 8+ years, the company built a reputation as one of Karnataka's most trusted digital studios, delivering 565+ projects across website development, mobile apps, digital marketing, corporate video, 2D animation, B2B marketing, and more.",
                    "In response to increasing demand from businesses in Canada, the United States, and the United Kingdom who needed a trustworthy offshore technology partner — NNC Digital Solutions was launched as Nakshatra Namaha Creations' dedicated international brand.",
                    "NNC Digital is not a new company trying to build a reputation. It is the international expression of a decade of proven capability — backed by the people, processes, and portfolio of one of India's most capable digital studios.",
                  ].map((para, i) => (
                    <p key={i} style={{
                      color: "rgba(255,255,255,.5)", fontSize: 15, lineHeight: 1.88,
                      marginBottom: 18,
                      animation: `slideIn .6s ease ${.15 + i * .15}s both`,
                    }}>{para}</p>
                  ))}

                  {/* Pill */}
                  <div style={{
                    marginTop: 26, padding: "18px 22px", borderRadius: 14,
                    background: "rgba(0,201,167,.05)", border: "1px solid rgba(0,201,167,.18)",
                    display: "flex", alignItems: "center", gap: 16,
                    transition: "transform .25s, background .25s", cursor: "default",
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.transform = "translateX(6px)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.09)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.transform = "";
                      (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.05)";
                    }}
                  >
                    <span style={{ fontSize: 28 }}>🇮🇳</span>
                    <div>
                      <p style={{ fontSize: 13.5, fontWeight: 700, color: "#fff", margin: 0 }}>
                        Bangalore → Toronto · New York · London
                      </p>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,.38)", margin: "3px 0 0" }}>
                        One trusted studio. Three international markets.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* Image side */}
              <FadeUp delay={0.18}>
                <div style={{ position: "relative" }}>
                  <div style={{
                    borderRadius: 28, overflow: "hidden",
                    border: "1px solid rgba(0,201,167,.18)",
                    boxShadow: `0 36px 90px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.04)`,
                    position: "relative", aspectRatio: "4/3",
                    transition: "transform .45s cubic-bezier(.16,1,.3,1), box-shadow .45s ease",
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.transform = "scale(1.02) perspective(800px) rotateY(-2deg)";
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 48px 110px rgba(0,0,0,.65), 0 0 80px rgba(0,201,167,.12)`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.transform = "";
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 36px 90px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.04)`;
                    }}
                  >
                    <Image src="/NNCLOGO.jpg" alt="NNC Digital Solutions" fill style={{ objectFit: "cover" }} />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(2,12,26,.88) 0%, rgba(2,12,26,.2) 55%, transparent 100%)",
                    }} />
                    {/* scan line */}
                    <div style={{
                      position: "absolute", left: 0, right: 0, height: 2, pointerEvents: "none",
                      background: "linear-gradient(90deg, transparent, rgba(0,201,167,.55), transparent)",
                      animation: "scanLine 4.5s linear infinite",
                    }} />
                    <div style={{ position: "absolute", bottom: 26, left: 26, right: 26 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: 0 }}>NNC Digital Solutions</p>
                      <p style={{ fontSize: 12, color: T.teal, margin: "5px 0 0", fontWeight: 500 }}>A Nakshatra Namaha Creations Company</p>
                    </div>
                  </div>

                  {/* Badge — top right */}
                  <div style={{
                    position: "absolute", top: -20, right: -20,
                    background: `linear-gradient(135deg, ${T.teal}, ${T.tealDark})`,
                    borderRadius: 18, padding: "16px 20px", textAlign: "center",
                    boxShadow: `0 10px 36px rgba(0,201,167,.5)`,
                    animation: "floatA 4.2s ease-in-out infinite, popIn .85s ease .3s both",
                  }}>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 26, fontWeight: 700, color: "#001a14", margin: 0, lineHeight: 1 }}>565+</p>
                    <p style={{ fontSize: 10, fontWeight: 700, color: "rgba(0,26,20,.65)", margin: "4px 0 0", letterSpacing: "0.08em" }}>PROJECTS</p>
                  </div>

                  {/* Badge — bottom left */}
                  <div style={{
                    position: "absolute", bottom: -20, left: -20,
                    background: "rgba(2,14,28,.96)", border: "1px solid rgba(0,201,167,.28)",
                    borderRadius: 16, padding: "13px 18px",
                    boxShadow: "0 10px 36px rgba(0,0,0,.5)",
                    animation: "floatB 5.5s ease-in-out infinite, popIn .85s ease .55s both",
                  }}>
                    <p style={{ fontSize: 12.5, fontWeight: 700, color: "#fff", margin: 0 }}>🏙️ Bangalore · Toronto · London</p>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,.38)", margin: "4px 0 0" }}>8+ years of global delivery</p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        <div className="nnc-divider" />

        {/* ══════════════════════════════
            PARENT COMPANY
        ══════════════════════════════ */}
        <section className="nnc-section" style={{
          background: "linear-gradient(180deg, #030f20 0%, #02101f 100%)",
          position: "relative", overflow: "hidden",
        }}>
          {/* dot grid */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `radial-gradient(rgba(0,201,167,.055) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }} />

          <div style={{ maxWidth: 1220, margin: "0 auto", position: "relative", zIndex: 1 }}>

            <FadeUp style={{ textAlign: "center", marginBottom: 60 } as React.CSSProperties}>
              <SectionLabel>Backed By</SectionLabel>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(26px, 2.9vw, 42px)",
                fontWeight: 700, marginBottom: 12, marginTop: 0,
              }}>
                Our Parent Company —{" "}
                <span className="nnc-shimmer-text">Nakshatra Namaha Creations Pvt. Ltd.</span>
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,.4)", margin: 0, fontWeight: 400 }}>
                8+ Years of Digital Excellence from Bangalore, India
              </p>
            </FadeUp>

            {/* Main info block */}
            <FadeUp delay={0.1}>
              <div style={{
                borderRadius: 24, padding: "44px 48px", marginBottom: 50,
                background: "rgba(0,201,167,.04)",
                border: "1px solid rgba(0,201,167,.18)",
                transition: "box-shadow .35s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 28px 70px rgba(0,0,0,.45)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = ""}
              >
                <div className="nnc-parent-grid">
                  <div>
                    <p style={{ fontSize: 15.5, color: "rgba(255,255,255,.52)", lineHeight: 1.88, margin: "0 0 24px" }}>
                      Headquartered in <strong style={{ color: "#fff", fontWeight: 700 }}>Bengaluru, Karnataka</strong> — India&apos;s Silicon Valley — with offices in Mysore, Mumbai, and Hyderabad. A full-spectrum digital studio combining creative excellence with engineering rigour.
                    </p>
                    <a
                      href="https://www.nakshatranamahacreations.com"
                      target="_blank" rel="noopener noreferrer"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 10,
                        fontSize: 14, fontWeight: 700, color: T.teal,
                        textDecoration: "none",
                        padding: "10px 18px", borderRadius: 10,
                        background: "rgba(0,201,167,.08)", border: "1px solid rgba(0,201,167,.2)",
                        transition: "background .2s, gap .2s",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.14)";
                        (e.currentTarget as HTMLElement).style.gap = "16px";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.08)";
                        (e.currentTarget as HTMLElement).style.gap = "10px";
                      }}
                    >
                      🌐 www.nakshatranamahacreations.com →
                    </a>
                  </div>

                  <div className="nnc-mini-stats">
                    {[
                      { n: "8+", l: "Years Active" },
                      { n: "565+", l: "Projects" },
                      { n: "100+", l: "Team Size" },
                      { n: "4", l: "Indian Offices" },
                    ].map((s, i) => (
                      <div key={i} style={{
                        textAlign: "center", padding: "22px 14px", borderRadius: 16,
                        background: "rgba(0,201,167,.06)", border: "1px solid rgba(0,201,167,.13)",
                        transition: "transform .28s, background .28s", cursor: "default",
                      }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                          (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.13)";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.transform = "";
                          (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.06)";
                        }}
                      >
                        <p style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: 30, fontWeight: 700, color: T.teal, margin: 0,
                        }}>{s.n}</p>
                        <p style={{
                          fontSize: 10.5, color: "rgba(255,255,255,.38)",
                          margin: "5px 0 0", fontWeight: 600,
                          textTransform: "uppercase", letterSpacing: "0.07em",
                        }}>{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Marquee service tags */}
            <FadeUp delay={0.15}>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "0.13em",
                textTransform: "uppercase", color: "rgba(255,255,255,.3)", marginBottom: 14,
              }}>Parent Company Services That Power NNC Digital</p>
              <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)", marginBottom: 50 }}>
                <div className="nnc-tag-belt">
                  {[...PARENT_SERVICES, ...PARENT_SERVICES].map((s, i) => (
                    <span key={i} style={{
                      flexShrink: 0, fontSize: 13, fontWeight: 600,
                      color: "rgba(255,255,255,.68)",
                      background: "rgba(255,255,255,.04)",
                      border: "1px solid rgba(255,255,255,.09)",
                      padding: "9px 20px", borderRadius: 40, whiteSpace: "nowrap",
                      transition: "background .2s, color .2s, border-color .2s", cursor: "default",
                    }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.1)";
                        (e.currentTarget as HTMLElement).style.color = T.teal;
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,167,.28)";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.04)";
                        (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.68)";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.09)";
                      }}
                    >{s}</span>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Comparison table */}
            <FadeUp delay={0.2}>
              <div style={{
                borderRadius: 18, overflow: "hidden",
                border: "1px solid rgba(255,255,255,.07)",
                boxShadow: "0 20px 60px rgba(0,0,0,.3)",
              }}>
                <div className="nnc-comp-grid" style={{
                  background: "rgba(0,201,167,.07)",
                  borderBottom: "1px solid rgba(0,201,167,.18)",
                  padding: "16px 28px",
                }}>
                  {["Metric", "Nakshatra Namaha Creations", "NNC Digital (International)"].map(h => (
                    <p key={h} style={{
                      fontSize: 10.5, fontWeight: 700, color: T.teal,
                      textTransform: "uppercase", letterSpacing: "0.11em", margin: 0,
                    }}>{h}</p>
                  ))}
                </div>
                {COMPARISON.map((row, i) => (
                  <div key={i} className="nnc-comp-row nnc-comp-grid" style={{
                    padding: "19px 28px",
                    background: i % 2 === 0 ? "rgba(255,255,255,.015)" : "transparent",
                    borderBottom: i < COMPARISON.length - 1 ? "1px solid rgba(255,255,255,.04)" : "none",
                  }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,.55)", margin: 0 }}>{row.metric}</p>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,.82)", margin: 0 }}>{row.parent}</p>
                    <p style={{ fontSize: 13, color: T.teal, fontWeight: 600, margin: 0 }}>{row.nnc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        <div className="nnc-divider" />

        {/* ══════════════════════════════
            WHY WE LAUNCHED
        ══════════════════════════════ */}
        <section className="nnc-section" style={{ background: "#020c1a" }}>
          <div style={{ maxWidth: 1220, margin: "0 auto" }}>

            <FadeUp style={{ textAlign: "center", marginBottom: 60 } as React.CSSProperties}>
              <SectionLabel>Our Purpose</SectionLabel>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(26px, 2.9vw, 42px)",
                fontWeight: 700, margin: 0,
              }}>
                Why We Launched NNC Digital for the{" "}
                <span style={gradText as object}>North American &amp; UK Market</span>
              </h2>
            </FadeUp>

            <div className="nnc-why-grid">

              {/* Gap card */}
              <FadeUp delay={0.08}>
                <div style={{
                  borderRadius: 22, padding: "42px 38px", height: "100%",
                  background: "rgba(255,255,255,.025)",
                  border: "1px solid rgba(255,255,255,.07)",
                  transition: "border-color .3s, transform .32s",
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(239,68,68,.28)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.07)";
                    (e.currentTarget as HTMLElement).style.transform = "";
                  }}
                >
                  <div style={{
                    width: 50, height: 50, borderRadius: 14, marginBottom: 26,
                    background: "rgba(239,68,68,.1)", border: "1px solid rgba(239,68,68,.2)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
                  }}>🔍</div>
                  <h3 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 18, marginTop: 0,
                  }}>The Gap We Saw</h3>
                  <p style={{ color: "rgba(255,255,255,.48)", fontSize: 15, lineHeight: 1.88, margin: "0 0 16px" }}>
                    Businesses in Canada, the USA, and the UK face a common challenge: local agencies charge premium prices for work that can be delivered at a fraction of the cost — without any quality reduction — by the right offshore partner.
                  </p>
                  <p style={{ color: "rgba(255,255,255,.48)", fontSize: 15, lineHeight: 1.88, margin: 0 }}>
                    Most offshore agencies fail because they don&apos;t understand the regulatory environment, commercial culture, or specific needs of Western businesses.
                  </p>
                </div>
              </FadeUp>

              {/* Solution card */}
              <FadeUp delay={0.15}>
                <div style={{
                  borderRadius: 22, padding: "42px 38px", height: "100%",
                  background: "rgba(0,201,167,.035)",
                  border: "1px solid rgba(0,201,167,.16)",
                  transition: "border-color .3s, transform .32s",
                  position: "relative", overflow: "hidden",
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,167,.38)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,167,.16)";
                    (e.currentTarget as HTMLElement).style.transform = "";
                  }}
                >
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 2, borderRadius: "22px 22px 0 0",
                    background: `linear-gradient(90deg, transparent, ${T.teal}, transparent)`, opacity: .6,
                  }} />
                  <div style={{
                    width: 50, height: 50, borderRadius: 14, marginBottom: 26,
                    background: "rgba(0,201,167,.1)", border: "1px solid rgba(0,201,167,.28)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
                  }}>✅</div>
                  <h3 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 22, marginTop: 0,
                  }}>The Solution We Built</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {WHY_SOLUTIONS.map((item, i) => (
                      <div key={i} className="nnc-why-item" style={{
                        display: "flex", gap: 13, alignItems: "flex-start",
                        background: "rgba(0,201,167,.03)",
                        animation: `slideIn .5s ease ${.2 + i * .1}s both`,
                      }}>
                        <div style={{
                          width: 22, height: 22, borderRadius: "50%", flexShrink: 0, marginTop: 1,
                          background: `linear-gradient(135deg, ${T.teal}, ${T.tealDark})`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 11, color: "#001a14", fontWeight: 900,
                        }}>✓</div>
                        <p style={{ color: "rgba(255,255,255,.7)", fontSize: 14.5, lineHeight: 1.7, margin: 0 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        <div className="nnc-divider" />

        {/* ══════════════════════════════
            VALUES + OFFICES + CTA
        ══════════════════════════════ */}
        <section className="nnc-section" style={{
          background: "linear-gradient(180deg, #030f20 0%, #020c1a 100%)",
          position: "relative",
        }}>
          <div style={{ maxWidth: 1220, margin: "0 auto" }}>

            {/* Values heading */}
            <FadeUp style={{ textAlign: "center", marginBottom: 56 } as React.CSSProperties}>
              <SectionLabel>Our Values</SectionLabel>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(26px, 2.9vw, 42px)",
                fontWeight: 700, margin: 0,
              }}>
                What We{" "}
                <span style={gradText as object}>Stand For</span>
              </h2>
            </FadeUp>

            {/* Values grid */}
            <div className="nnc-values-grid" style={{ marginBottom: 96 }}>
              {VALUES.map((v, i) => (
                <FadeUp key={i} delay={0.07 * i}>
                  <div
                    className="nnc-val-card"
                    onMouseEnter={() => setHoveredVal(i)}
                    onMouseLeave={() => setHoveredVal(null)}
                    style={{
                      background: hoveredVal === i ? "rgba(0,201,167,.065)" : "rgba(255,255,255,.025)",
                      border: `1px solid ${hoveredVal === i ? "rgba(0,201,167,.35)" : "rgba(255,255,255,.07)"}`,
                      boxShadow: hoveredVal === i ? "0 28px 65px rgba(0,0,0,.5)" : "none",
                    }}
                  >
                    {/* top accent line */}
                    {hoveredVal === i && (
                      <div style={{
                        position: "absolute", top: 0, left: 0, right: 0, height: 2,
                        borderRadius: "20px 20px 0 0",
                        background: `linear-gradient(90deg, transparent, ${T.teal}, transparent)`,
                      }} />
                    )}
                    <div style={{
                      fontSize: 36, marginBottom: 18, display: "inline-block",
                      transition: "transform .35s cubic-bezier(.16,1,.3,1)",
                      transform: hoveredVal === i ? "scale(1.25) rotate(-6deg)" : "scale(1)",
                    }}>{v.icon}</div>
                    <p style={{ fontSize: 15.5, fontWeight: 700, color: "#fff", marginBottom: 8, marginTop: 0 }}>{v.title}</p>
                    <p style={{ fontSize: 13.5, color: "rgba(255,255,255,.42)", lineHeight: 1.75, margin: 0 }}>{v.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Offices heading */}
            <FadeUp style={{ textAlign: "center", marginBottom: 38 } as React.CSSProperties}>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(24px, 2.5vw, 36px)",
                fontWeight: 600, margin: 0,
              }}>
                Global{" "}
                <span style={gradText as object}>Offices</span>
              </h2>
            </FadeUp>

            {/* Offices grid */}
            <div className="nnc-offices-grid" style={{ marginBottom: 88 }}>

              {/* International */}
              <FadeUp delay={0.08}>
                <div style={{
                  borderRadius: 22, padding: "38px 34px",
                  background: "rgba(0,201,167,.04)", border: "1px solid rgba(0,201,167,.18)",
                  transition: "transform .3s, box-shadow .3s",
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 56px rgba(0,0,0,.4)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  <p style={{
                    fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em",
                    textTransform: "uppercase", color: T.teal, marginBottom: 26, marginTop: 0,
                  }}>International Offices</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {INT_OFFICES.map((o, i) => (
                      <div key={i} className="nnc-office-row" style={{
                        display: "flex", alignItems: "center", gap: 15,
                        padding: "13px 15px",
                        background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.05)",
                        animation: `slideIn .5s ease ${.1 + i * .1}s both`,
                      }}>
                        <span style={{ fontSize: 24 }}>{o.flag}</span>
                        <div>
                          <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: 0 }}>{o.city}</p>
                          <p style={{ fontSize: 13, color: T.teal, margin: "2px 0 0", fontWeight: 600 }}>{o.phone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              {/* India */}
              <FadeUp delay={0.15}>
                <div style={{
                  borderRadius: 22, padding: "38px 34px",
                  background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.07)",
                  transition: "transform .3s, box-shadow .3s",
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 56px rgba(0,0,0,.4)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  <p style={{
                    fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em",
                    textTransform: "uppercase", color: "rgba(255,255,255,.35)", marginBottom: 26, marginTop: 0,
                  }}>India Offices — Nakshatra Namaha Creations</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {INDIA_OFFICES.map((o, i) => (
                      <div key={i} className="nnc-office-row" style={{
                        display: "flex", alignItems: "center", gap: 15,
                        padding: "13px 15px",
                        background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.05)",
                        animation: `slideIn .5s ease ${.1 + i * .1}s both`,
                      }}>
                        <span style={{ fontSize: 24 }}>{o.flag}</span>
                        <div>
                          <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: 0 }}>{o.city}</p>
                          {o.phone && <p style={{ fontSize: 12.5, color: "rgba(255,255,255,.38)", margin: "2px 0 0" }}>{o.phone}</p>}
                        </div>
                      </div>
                    ))}
                    <div style={{ paddingTop: 16, borderTop: "1px solid rgba(255,255,255,.06)" }}>
                      <p style={{ fontSize: 12.5, color: "rgba(255,255,255,.32)", margin: 0 }}>
                        ✉️ info@nakshatranamahacreations.com
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* ── FINAL CTA ── */}
            <FadeUp delay={0.1}>
              <div style={{
                borderRadius: 28, padding: "72px 60px", textAlign: "center",
                background: "linear-gradient(135deg, rgba(0,201,167,.07) 0%, rgba(5,18,34,.9) 50%, rgba(2,12,26,.95) 100%)",
                border: "1px solid rgba(0,201,167,.2)",
                position: "relative", overflow: "hidden",
                transition: "box-shadow .4s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 48px 110px rgba(0,0,0,.55), 0 0 90px rgba(0,201,167,.1)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = ""}
              >
                {/* background orb */}
                <div style={{
                  position: "absolute", width: 550, height: 550, borderRadius: "50%",
                  background: `radial-gradient(circle, rgba(0,201,167,.1) 0%, transparent 65%)`,
                  top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                  animation: "pulseOrb 6s ease-in-out infinite", pointerEvents: "none",
                }} />
                {/* Decorative ring */}
                <div style={{
                  position: "absolute", width: 320, height: 320, borderRadius: "50%",
                  border: "1px dashed rgba(0,201,167,.1)",
                  top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                  animation: "spinCW 28s linear infinite", pointerEvents: "none",
                }} />

                <div style={{ position: "relative", zIndex: 1 }}>
                  <SectionLabel>Get Started</SectionLabel>
                  <h2 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "clamp(24px, 2.8vw, 42px)",
                    fontWeight: 600, marginBottom: 18, marginTop: 0,
                  }}>
                    Ready to Start a{" "}
                    <span style={gradText as object}>Conversation?</span>
                  </h2>
                  <p style={{
                    color: "rgba(255,255,255,.48)", fontSize: 16, lineHeight: 1.8,
                    maxWidth: 560, margin: "0 auto 44px",
                  }}>
                    Whether you have a fully scoped project or just a problem you&apos;re trying to solve — we&apos;d love to talk. We&apos;ll respond within 24 hours with honest, practical advice.
                  </p>
                  <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                    <MagBtn primary>Book a Free Consultation</MagBtn>
                    <MagBtn>View Our Work →</MagBtn>
                  </div>
                </div>
              </div>
            </FadeUp>

          </div>
        </section>
      </main>
    </>
  );
}