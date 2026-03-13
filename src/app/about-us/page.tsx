// // "use client";
// // import { useState } from "react";
// // import Image from "next/image";
// // import { T } from "../components/tokens";
// // import Reveal from "../components/Reveal";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";

// // const VALUES = [
// //   { icon: "🎯", title: "Outcomes Over Outputs",   desc: "Results, not features shipped." },
// //   { icon: "🔒", title: "Compliance First",         desc: "GDPR / PIPEDA / CCPA in every system." },
// //   { icon: "💡", title: "Radical Transparency",     desc: "Fixed prices. Weekly demos. No jargon." },
// //   { icon: "🤝", title: "People Before Technology", desc: "Training & adoption matter." },
// //   { icon: "🏗️", title: "Long-Term Thinking",       desc: "Systems designed to last 5+ years." },
// //   { icon: "⭐", title: "Client First, Always",      desc: "Every decision starts with the client." },
// // ];

// // const STATS = [
// //   { value: "8+",   label: "Years of Excellence" },
// //   { value: "565+", label: "Projects Delivered" },
// //   { value: "100+", label: "Team Members" },
// //   { value: "3",    label: "International Markets" },
// // ];

// // const PARENT_SERVICES = [
// //   "Website Development", "Mobile App Development", "Digital Marketing",
// //   "Graphic Design", "2D Animation", "Corporate Video Production",
// //   "B2B Marketing", "SEO & Performance Marketing",
// // ];

// // const COMPARISON = [
// //   { metric: "Years in Business",  parent: "8+ Years",                               nnc: "Launched for CA/US/UK Market" },
// //   { metric: "Projects Delivered", parent: "565+",                                   nnc: "Growing Portfolio in NA & UK" },
// //   { metric: "Team Size",          parent: "100+ Members",                           nnc: "Dedicated International Team" },
// //   { metric: "Offices",            parent: "Bangalore · Mysore · Mumbai · Hyderabad", nnc: "Toronto · New York · London" },
// // ];

// // const INT_OFFICES = [
// //   { flag: "🇨🇦", city: "Toronto, Canada", phone: "+1 647-XXX-XXXX" },
// //   { flag: "🇺🇸", city: "New York, USA",   phone: "+1 631-XXX-XXXX" },
// //   { flag: "🇬🇧", city: "London, UK",      phone: "+44 20-XXXX-XXXX" },
// // ];

// // const INDIA_OFFICES = [
// //   { flag: "🇮🇳", city: "Bangalore HQ", phone: "+91 9900566466" },
// //   { flag: "🇮🇳", city: "Mysore",       phone: null },
// //   { flag: "🇮🇳", city: "Mumbai",       phone: null },
// //   { flag: "🇮🇳", city: "Hyderabad",    phone: null },
// // ];

// // const WHY_SOLUTIONS = [
// //   "Dedicated project managers in North American and UK time zones",
// //   "GDPR, PIPEDA, and CCPA-compliant systems from day one",
// //   "Full creative and technical capability of a 100+ person studio",
// //   "Transparent, fixed-price proposals — no surprises",
// //   "Long-term partnership, not one-and-done project delivery",
// // ];

// // export default function AboutPage() {
// //   const [hoveredVal, setHoveredVal] = useState<number | null>(null);

// //   return (
// //     <>
// //       <Navbar />

// //       <main style={{
// //         background: T.navy0,
// //         fontFamily: "'Outfit', sans-serif",
// //         color: "#fff",
// //         overflowX: "hidden",
// //       }}>
// //         <style>{`
// //           @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
// //           @keyframes heroFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
// //           @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
// //           @keyframes pulse { 0%,100%{transform:scale(1);opacity:.15} 50%{transform:scale(1.08);opacity:.28} }
// //           .about-cta-btn {
// //             padding: 15px 36px; border-radius: 10px; font-family:'Outfit',sans-serif;
// //             font-weight:700; font-size:15px; cursor:pointer;
// //             transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
// //           }
// //           .about-cta-btn:hover { transform: translateY(-3px); }
// //           .val-card { transition: transform .25s ease, border-color .25s ease, background .25s ease; }
// //           .val-card:hover { transform: translateY(-5px); }
// //           .comp-row:nth-child(even) { background: rgba(255,255,255,.02); }
// //           .why-item { transition: transform .2s ease; }
// //           .why-item:hover { transform: translateX(6px); }
// //         `}</style>

// //         {/* ── MODULE 1 HERO ── */}
// //         <section style={{
// //           minHeight: "92vh", display: "flex", alignItems: "center",
// //           padding: "120px 48px 80px",
// //           background: `linear-gradient(135deg, #030d1e 0%, #051628 40%, ${T.navy0} 100%)`,
// //           position: "relative", overflow: "hidden",
// //         }}>
// //           {/* Grid lines */}
// //           <div style={{
// //             position: "absolute", inset: 0, pointerEvents: "none",
// //             backgroundImage: `linear-gradient(rgba(0,201,167,.04) 1px, transparent 1px),
// //                               linear-gradient(90deg, rgba(0,201,167,.04) 1px, transparent 1px)`,
// //             backgroundSize: "60px 60px",
// //           }} />

// //           {/* Glow orb */}
// //           <div style={{
// //             position: "absolute", width: 700, height: 700, borderRadius: "50%",
// //             background: `radial-gradient(circle, ${T.teal}20 0%, transparent 65%)`,
// //             top: "50%", right: -200, transform: "translateY(-50%)",
// //             animation: "pulse 7s ease-in-out infinite", pointerEvents: "none",
// //           }} />

// //           {/* Rotating ring */}
// //           <div style={{
// //             position: "absolute", width: 500, height: 500, borderRadius: "50%",
// //             border: "1px dashed rgba(0,201,167,.12)",
// //             top: "50%", right: -100, transform: "translateY(-50%)",
// //             animation: "spin 40s linear infinite", pointerEvents: "none",
// //           }} />

// //           <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
// //             <Reveal>
// //               <div style={{ maxWidth: 760 }}>
// //                 <div style={{
// //                   display: "inline-flex", alignItems: "center", gap: 10,
// //                   background: "rgba(0,201,167,.08)", border: "1px solid rgba(0,201,167,.25)",
// //                   borderRadius: 30, padding: "7px 18px", marginBottom: 32,
// //                 }}>
// //                   <div style={{ width: 7, height: 7, borderRadius: "50%", background: T.teal, boxShadow: `0 0 8px ${T.teal}` }} />
// //                   <span style={{ fontSize: 11.5, fontWeight: 700, color: T.teal, letterSpacing: "0.1em", textTransform: "uppercase" }}>
// //                     About NNC Digital Solutions
// //                   </span>
// //                 </div>

// //                 <h1 style={{
// //                   fontSize: "clamp(32px,4.5vw,62px)", fontWeight: 900,
// //                   lineHeight: 1.12, marginBottom: 28, letterSpacing: "-0.02em",
// //                   fontFamily: "'Outfit', sans-serif",
// //                 }}>
// //                   Built on{" "}
// //                   <span style={{
// //                     background: `linear-gradient(135deg,${T.teal},${T.tealLight})`,
// //                     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
// //                   }}>Indian Tech Excellence.</span>
// //                   <br />Built for Canadian,{" "}
// //                   <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "rgba(255,255,255,.85)" }}>
// //                     US & UK Business.
// //                   </span>
// //                 </h1>

// //                 <p style={{
// //                   fontSize: "clamp(15px,1.4vw,18px)", color: "rgba(255,255,255,.55)",
// //                   lineHeight: 1.85, marginBottom: 44, maxWidth: 620,
// //                 }}>
// //                   NNC Digital Solutions is the international technology arm of Nakshatra Namaha Creations Pvt. Ltd. — one of Bangalore&apos;s most respected digital studios. We were born from a belief that the deep technology expertise that has transformed thousands of Indian businesses deserves to be accessible to growing companies in Canada, the USA, and the United Kingdom.
// //                 </p>

// //                 <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
// //                   <button className="about-cta-btn" style={{
// //                     background: `linear-gradient(135deg,${T.teal},${T.tealDark})`,
// //                     color: "#000", border: "none",
// //                     boxShadow: `0 8px 32px rgba(0,201,167,.3)`,
// //                   }}>Book a Free Consultation</button>
// //                   <button className="about-cta-btn" style={{
// //                     background: "transparent", color: "#fff",
// //                     border: "1px solid rgba(255,255,255,.2)",
// //                   }}>View Our Work →</button>
// //                 </div>
// //               </div>
// //             </Reveal>

// //             {/* Stat strip */}
// //             <Reveal delay={0.2}>
// //               <div style={{
// //                 display: "grid", gridTemplateColumns: "repeat(4,1fr)",
// //                 gap: 1, marginTop: 72,
// //                 background: "rgba(255,255,255,.06)",
// //                 borderRadius: 16, overflow: "hidden",
// //                 border: "1px solid rgba(255,255,255,.08)",
// //               }}>
// //                 {STATS.map((s, i) => (
// //                   <div key={i} style={{
// //                     padding: "28px 24px", textAlign: "center",
// //                     background: "rgba(5,14,30,.8)",
// //                     borderRight: i < 3 ? "1px solid rgba(255,255,255,.06)" : "none",
// //                   }}>
// //                     <p style={{
// //                       fontSize: "clamp(28px,3vw,40px)", fontWeight: 900, margin: 0,
// //                       background: `linear-gradient(135deg,${T.teal},${T.tealLight})`,
// //                       WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
// //                     }}>{s.value}</p>
// //                     <p style={{ fontSize: 12, color: "rgba(255,255,255,.4)", margin: "6px 0 0", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </Reveal>
// //           </div>
// //         </section>

// //         {/* ── MODULE 2 THE NNC STORY ── */}
// //         <section style={{ padding: "100px 48px", background: T.navy0 }}>
// //           <div style={{ maxWidth: 1100, margin: "0 auto" }}>
// //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>

// //               <Reveal>
// //                 <div>
// //                   <p style={{ color: T.teal, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>— Our Story —</p>
// //                   <h2 style={{ fontSize: "clamp(24px,2.8vw,38px)", fontWeight: 900, lineHeight: 1.2, marginBottom: 28 }}>
// //                     From Bangalore to Canada —{" "}
// //                     <span style={{ background: `linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
// //                       The NNC Digital Story
// //                     </span>
// //                   </h2>
// //                   <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
// //                     {[
// //                       "Nakshatra Namaha Creations Pvt. Ltd. was founded in Bangalore, India — a city synonymous with world-class software engineering. Over 8+ years, the company built a reputation as one of Karnataka's most trusted digital studios, delivering 565+ projects across website development, mobile apps, digital marketing, corporate video, 2D animation, B2B marketing, and more.",
// //                       "In response to increasing demand from businesses in Canada, the United States, and the United Kingdom who needed a trustworthy offshore technology partner — NNC Digital Solutions was launched as Nakshatra Namaha Creations' dedicated international brand.",
// //                       "NNC Digital is not a new company trying to build a reputation. It is the international expression of a decade of proven capability — backed by the people, processes, and portfolio of one of India's most capable digital studios.",
// //                     ].map((para, i) => (
// //                       <p key={i} style={{ color: "rgba(255,255,255,.52)", fontSize: 14.5, lineHeight: 1.85, margin: 0 }}>{para}</p>
// //                     ))}
// //                   </div>

// //                   <div style={{
// //                     marginTop: 32, padding: "18px 22px", borderRadius: 12,
// //                     background: "rgba(0,201,167,.06)", border: "1px solid rgba(0,201,167,.2)",
// //                     display: "flex", alignItems: "center", gap: 14,
// //                   }}>
// //                     <span style={{ fontSize: 28 }}>🇮🇳</span>
// //                     <div>
// //                       <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: 0 }}>Bangalore → Toronto · New York · London</p>
// //                       <p style={{ fontSize: 12, color: "rgba(255,255,255,.4)", margin: "3px 0 0" }}>One trusted studio. Three international markets.</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </Reveal>

// //               {/* Visual side */}
// //               <Reveal delay={0.15}>
// //                 <div style={{ position: "relative" }}>
// //                   <div style={{
// //                     borderRadius: 24, overflow: "hidden",
// //                     border: "1px solid rgba(0,201,167,.2)",
// //                     boxShadow: `0 32px 80px rgba(0,0,0,.5), 0 0 60px rgba(0,201,167,.1)`,
// //                     position: "relative", aspectRatio: "4/3",
// //                   }}>
// //                     <Image
// //                       src="/NNCLOGO.jpg"
// //                       alt="NNC Digital Solutions"
// //                       fill
// //                       style={{ objectFit: "cover" }}
// //                     />
// //                     <div style={{
// //                       position: "absolute", inset: 0,
// //                       background: "linear-gradient(to top, rgba(5,14,30,.85) 0%, transparent 50%)",
// //                     }} />
// //                     <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
// //                       <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: 0 }}>NNC Digital Solutions</p>
// //                       <p style={{ fontSize: 11.5, color: T.teal, margin: "4px 0 0" }}>A Nakshatra Namaha Creations Company</p>
// //                     </div>
// //                   </div>

// //                   {/* Floating badge top */}
// //                   <div style={{
// //                     position: "absolute", top: -18, right: -18,
// //                     background: `linear-gradient(135deg,${T.teal},${T.tealDark})`,
// //                     borderRadius: 16, padding: "14px 18px", textAlign: "center",
// //                     boxShadow: `0 8px 32px rgba(0,201,167,.4)`,
// //                     animation: "heroFloat 4s ease-in-out infinite",
// //                   }}>
// //                     <p style={{ fontSize: 22, fontWeight: 900, color: "#000", margin: 0, lineHeight: 1 }}>565+</p>
// //                     <p style={{ fontSize: 10, fontWeight: 700, color: "rgba(0,0,0,.65)", margin: "3px 0 0", letterSpacing: "0.06em" }}>PROJECTS</p>
// //                   </div>

// //                   {/* Floating badge bottom */}
// //                   <div style={{
// //                     position: "absolute", bottom: -18, left: -18,
// //                     background: "rgba(5,14,30,.95)", border: "1px solid rgba(0,201,167,.3)",
// //                     borderRadius: 14, padding: "12px 16px",
// //                     boxShadow: "0 8px 32px rgba(0,0,0,.4)",
// //                     animation: "heroFloat 5s ease-in-out infinite",
// //                     animationDelay: "1.5s",
// //                   }}>
// //                     <p style={{ fontSize: 12, fontWeight: 700, color: "#fff", margin: 0 }}>🏙️ Bangalore · Toronto · London</p>
// //                     <p style={{ fontSize: 10.5, color: "rgba(255,255,255,.4)", margin: "3px 0 0" }}>8+ years of global delivery</p>
// //                   </div>
// //                 </div>
// //               </Reveal>
// //             </div>
// //           </div>
// //         </section>

// //         {/* ── MODULE 3 PARENT COMPANY ── */}
// //         <section style={{
// //           padding: "100px 48px",
// //           background: "linear-gradient(180deg, #040e1f 0%, #030b19 100%)",
// //           position: "relative", overflow: "hidden",
// //         }}>
// //           <div style={{
// //             position: "absolute", inset: 0, pointerEvents: "none",
// //             backgroundImage: `radial-gradient(rgba(0,201,167,.06) 1px, transparent 1px)`,
// //             backgroundSize: "32px 32px",
// //           }} />

// //           <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
// //             <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
// //               <p style={{ color: T.teal, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>— Backed By —</p>
// //               <h2 style={{ fontSize: "clamp(24px,2.8vw,38px)", fontWeight: 900, marginBottom: 12 }}>
// //                 Our Parent Company —{" "}
// //                 <span style={{ background: `linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
// //                   Nakshatra Namaha Creations Pvt. Ltd.
// //                 </span>
// //               </h2>
// //               <h3 style={{ fontSize: 16, fontWeight: 500, color: "rgba(255,255,255,.45)", margin: 0 }}>
// //                 8+ Years of Digital Excellence from Bangalore, India
// //               </h3>
// //             </Reveal>

// //             {/* Highlight box */}
// //             <Reveal delay={0.1}>
// //               <div style={{
// //                 borderRadius: 20, padding: "40px 44px",
// //                 background: "rgba(0,201,167,.05)", border: "1px solid rgba(0,201,167,.2)",
// //                 marginBottom: 52,
// //                 display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center",
// //               }}>
// //                 <div>
// //                   <p style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.85, margin: 0 }}>
// //                     Headquartered in <strong style={{ color: "#fff" }}>Bengaluru, Karnataka</strong> — India&apos;s Silicon Valley — with offices in Mysore, Mumbai, and Hyderabad. A full-spectrum digital studio combining creative excellence with engineering rigour.
// //                   </p>
// //                   <a href="https://www.nakshatranamahacreations.com" target="_blank" rel="noopener noreferrer" style={{
// //                     display: "inline-flex", alignItems: "center", gap: 8, marginTop: 20,
// //                     fontSize: 13.5, fontWeight: 700, color: T.teal, textDecoration: "none",
// //                   }}>
// //                     🌐 www.nakshatranamahacreations.com →
// //                   </a>
// //                 </div>
// //                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
// //                   {[
// //                     { n: "8+",   l: "Years Active" },
// //                     { n: "565+", l: "Projects" },
// //                     { n: "100+", l: "Team Size" },
// //                     { n: "4",    l: "Indian Offices" },
// //                   ].map((s, i) => (
// //                     <div key={i} style={{
// //                       textAlign: "center", padding: "20px 12px", borderRadius: 14,
// //                       background: "rgba(0,201,167,.06)", border: "1px solid rgba(0,201,167,.15)",
// //                     }}>
// //                       <p style={{ fontSize: 28, fontWeight: 900, color: T.teal, margin: 0 }}>{s.n}</p>
// //                       <p style={{ fontSize: 11, color: "rgba(255,255,255,.4)", margin: "4px 0 0", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.l}</p>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </Reveal>

// //             {/* Services tags */}
// //             <Reveal delay={0.15}>
// //               <div style={{ marginBottom: 52 }}>
// //                 <h3 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,.35)", marginBottom: 20 }}>
// //                   Parent Company Services That Power NNC Digital
// //                 </h3>
// //                 <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
// //                   {PARENT_SERVICES.map(s => (
// //                     <span key={s} style={{
// //                       fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,.7)",
// //                       background: "rgba(255,255,255,.05)",
// //                       border: "1px solid rgba(255,255,255,.1)",
// //                       padding: "8px 16px", borderRadius: 30,
// //                     }}>{s}</span>
// //                   ))}
// //                 </div>
// //               </div>
// //             </Reveal>

// //             {/* Comparison table */}
// //             <Reveal delay={0.2}>
// //               <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,.08)" }}>
// //                 <div style={{
// //                   display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr",
// //                   background: "rgba(0,201,167,.08)", borderBottom: "1px solid rgba(0,201,167,.2)",
// //                   padding: "16px 24px",
// //                 }}>
// //                   <p style={{ fontSize: 11, fontWeight: 700, color: T.teal, textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>Metric</p>
// //                   <p style={{ fontSize: 11, fontWeight: 700, color: T.teal, textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>Nakshatra Namaha Creations</p>
// //                   <p style={{ fontSize: 11, fontWeight: 700, color: T.teal, textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>NNC Digital (International)</p>
// //                 </div>
// //                 {COMPARISON.map((row, i) => (
// //                   <div key={i} className="comp-row" style={{
// //                     display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr",
// //                     padding: "18px 24px",
// //                     borderBottom: i < COMPARISON.length - 1 ? "1px solid rgba(255,255,255,.05)" : "none",
// //                   }}>
// //                     <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,.6)", margin: 0 }}>{row.metric}</p>
// //                     <p style={{ fontSize: 13, color: "rgba(255,255,255,.85)", margin: 0 }}>{row.parent}</p>
// //                     <p style={{ fontSize: 13, color: T.teal, fontWeight: 600, margin: 0 }}>{row.nnc}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </Reveal>
// //           </div>
// //         </section>

// //         {/* ── MODULE 4 WHY WE LAUNCHED ── */}
// //         <section style={{ padding: "100px 48px", background: T.navy0 }}>
// //           <div style={{ maxWidth: 1100, margin: "0 auto" }}>
// //             <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
// //               <p style={{ color: T.teal, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>— Our Purpose —</p>
// //               <h2 style={{ fontSize: "clamp(24px,2.8vw,38px)", fontWeight: 900, margin: 0 }}>
// //                 Why We Launched NNC Digital for the{" "}
// //                 <span style={{ background: `linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
// //                   North American & UK Market
// //                 </span>
// //               </h2>
// //             </Reveal>

// //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
// //               <Reveal delay={0.08}>
// //                 <div style={{
// //                   borderRadius: 20, padding: "40px 36px", height: "100%",
// //                   background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.08)",
// //                 }}>
// //                   <div style={{
// //                     width: 48, height: 48, borderRadius: 14, marginBottom: 24,
// //                     background: "rgba(255,80,80,.1)", border: "1px solid rgba(255,80,80,.2)",
// //                     display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
// //                   }}>🔍</div>
// //                   <h3 style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 16 }}>The Gap We Saw</h3>
// //                   <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14.5, lineHeight: 1.85, margin: 0 }}>
// //                     Businesses in Canada, the USA, and the UK face a common challenge: local agencies charge premium prices for work that can be delivered at a fraction of the cost — without any quality reduction — by the right offshore partner.
// //                   </p>
// //                   <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14.5, lineHeight: 1.85, marginTop: 14, marginBottom: 0 }}>
// //                     Most offshore agencies fail because they don&apos;t understand the regulatory environment, commercial culture, or specific needs of Western businesses.
// //                   </p>
// //                 </div>
// //               </Reveal>

// //               <Reveal delay={0.14}>
// //                 <div style={{
// //                   borderRadius: 20, padding: "40px 36px", height: "100%",
// //                   background: "rgba(0,201,167,.04)", border: "1px solid rgba(0,201,167,.18)",
// //                 }}>
// //                   <div style={{
// //                     width: 48, height: 48, borderRadius: 14, marginBottom: 24,
// //                     background: "rgba(0,201,167,.1)", border: "1px solid rgba(0,201,167,.3)",
// //                     display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
// //                   }}>✅</div>
// //                   <h3 style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 20 }}>The Solution We Built</h3>
// //                   <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// //                     {WHY_SOLUTIONS.map((item, i) => (
// //                       <div key={i} className="why-item" style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
// //                         <div style={{
// //                           width: 22, height: 22, borderRadius: "50%", flexShrink: 0, marginTop: 1,
// //                           background: `linear-gradient(135deg,${T.teal},${T.tealDark})`,
// //                           display: "flex", alignItems: "center", justifyContent: "center",
// //                           fontSize: 11, color: "#000", fontWeight: 900,
// //                         }}>✓</div>
// //                         <p style={{ color: "rgba(255,255,255,.7)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{item}</p>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </Reveal>
// //             </div>
// //           </div>
// //         </section>

// //         {/* ── MODULE 5 VALUES ── */}
// //         <section style={{
// //           padding: "100px 48px",
// //           background: "linear-gradient(180deg, #040e1f 0%, #030b19 100%)",
// //         }}>
// //           <div style={{ maxWidth: 1100, margin: "0 auto" }}>
// //             <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
// //               <p style={{ color: T.teal, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>— Our Values —</p>
// //               <h2 style={{ fontSize: "clamp(24px,2.8vw,38px)", fontWeight: 900, margin: 0 }}>
// //                 What We{" "}
// //                 <span style={{ background: `linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
// //                   Stand For
// //                 </span>
// //               </h2>
// //             </Reveal>

// //             <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginBottom: 80 }}>
// //               {VALUES.map((v, i) => (
// //                 <Reveal key={i} delay={0.06 * i}>
// //                   <div
// //                     className="val-card"
// //                     onMouseEnter={() => setHoveredVal(i)}
// //                     onMouseLeave={() => setHoveredVal(null)}
// //                     style={{
// //                       borderRadius: 18, padding: "32px 28px",
// //                       background: hoveredVal === i ? "rgba(0,201,167,.07)" : "rgba(255,255,255,.03)",
// //                       border: `1px solid ${hoveredVal === i ? "rgba(0,201,167,.35)" : "rgba(255,255,255,.08)"}`,
// //                       cursor: "default",
// //                     }}
// //                   >
// //                     <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
// //                     <p style={{ fontSize: 15.5, fontWeight: 800, color: "#fff", marginBottom: 8 }}>{v.title}</p>
// //                     <p style={{ fontSize: 13.5, color: "rgba(255,255,255,.45)", lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
// //                   </div>
// //                 </Reveal>
// //               ))}
// //             </div>

// //             {/* Global Offices */}
// //             <Reveal>
// //               <h2 style={{ fontSize: "clamp(22px,2.4vw,32px)", fontWeight: 900, marginBottom: 32, textAlign: "center" }}>
// //                 Global{" "}
// //                 <span style={{ background: `linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
// //                   Offices
// //                 </span>
// //               </h2>
// //             </Reveal>

// //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 72 }}>
// //               <Reveal delay={0.08}>
// //                 <div style={{
// //                   borderRadius: 20, padding: "36px 32px",
// //                   background: "rgba(0,201,167,.05)", border: "1px solid rgba(0,201,167,.2)",
// //                 }}>
// //                   <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.teal, marginBottom: 24 }}>International Offices</p>
// //                   <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
// //                     {INT_OFFICES.map(o => (
// //                       <div key={o.city} style={{ display: "flex", alignItems: "center", gap: 12 }}>
// //                         <span style={{ fontSize: 20 }}>{o.flag}</span>
// //                         <div>
// //                           <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: 0 }}>{o.city}</p>
// //                           <p style={{ fontSize: 12.5, color: T.teal, margin: "2px 0 0", fontWeight: 600 }}>{o.phone}</p>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </Reveal>

// //               <Reveal delay={0.14}>
// //                 <div style={{
// //                   borderRadius: 20, padding: "36px 32px",
// //                   background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.08)",
// //                 }}>
// //                   <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,.4)", marginBottom: 24 }}>
// //                     India Offices — Nakshatra Namaha Creations
// //                   </p>
// //                   <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
// //                     {INDIA_OFFICES.map(o => (
// //                       <div key={o.city} style={{ display: "flex", alignItems: "center", gap: 12 }}>
// //                         <span style={{ fontSize: 20 }}>{o.flag}</span>
// //                         <div>
// //                           <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: 0 }}>{o.city}</p>
// //                           {o.phone && <p style={{ fontSize: 12.5, color: "rgba(255,255,255,.4)", margin: "2px 0 0" }}>{o.phone}</p>}
// //                         </div>
// //                       </div>
// //                     ))}
// //                     <div style={{ marginTop: 8, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,.07)" }}>
// //                       <p style={{ fontSize: 12.5, color: "rgba(255,255,255,.35)", margin: 0 }}>✉️ info@nakshatranamahacreations.com</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </Reveal>
// //             </div>

// //             {/* Final CTA */}
// //             <Reveal delay={0.1}>
// //               <div style={{
// //                 borderRadius: 24, padding: "60px 52px", textAlign: "center",
// //                 background: `linear-gradient(135deg, ${T.tealDark}22 0%, rgba(5,14,30,.9) 50%, ${T.navy0} 100%)`,
// //                 border: "1px solid rgba(0,201,167,.2)",
// //                 position: "relative", overflow: "hidden",
// //               }}>
// //                 <div style={{
// //                   position: "absolute", width: 400, height: 400, borderRadius: "50%",
// //                   background: `radial-gradient(circle, ${T.teal}12 0%, transparent 65%)`,
// //                   top: "50%", left: "50%", transform: "translate(-50%,-50%)",
// //                   pointerEvents: "none",
// //                 }} />
// //                 <div style={{ position: "relative", zIndex: 1 }}>
// //                   <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: T.teal, marginBottom: 16 }}>— Get Started —</p>
// //                   <h2 style={{ fontSize: "clamp(22px,2.6vw,36px)", fontWeight: 900, marginBottom: 16 }}>
// //                     Ready to Start a Conversation?
// //                   </h2>
// //                   <p style={{ color: "rgba(255,255,255,.5)", fontSize: 15.5, lineHeight: 1.75, maxWidth: 520, margin: "0 auto 36px" }}>
// //                     Whether you have a fully scoped project or just a problem you&apos;re trying to solve — we&apos;d love to talk. We&apos;ll respond within 24 hours with honest, practical advice.
// //                   </p>
// //                   <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
// //                     <button className="about-cta-btn" style={{
// //                       background: `linear-gradient(135deg,${T.teal},${T.tealDark})`,
// //                       color: "#000", border: "none",
// //                       boxShadow: `0 8px 32px rgba(0,201,167,.35)`,
// //                     }}>Book a Free Consultation</button>
// //                     <button className="about-cta-btn" style={{
// //                       background: "transparent", color: "#fff",
// //                       border: "1px solid rgba(255,255,255,.2)",
// //                     }}>View Our Work →</button>
// //                   </div>
// //                 </div>
// //               </div>
// //             </Reveal>
// //           </div>
// //         </section>

// //       </main>

// //       <Footer />
// //     </>
// //   );
// // }

// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { T } from "../components/tokens";
// import Navbar from "../components/Navbar";

// const VALUES = [
//   { icon: "🎯", title: "Outcomes Over Outputs",   desc: "Results, not features shipped." },
//   { icon: "🔒", title: "Compliance First",         desc: "GDPR / PIPEDA / CCPA in every system." },
//   { icon: "💡", title: "Radical Transparency",     desc: "Fixed prices. Weekly demos. No jargon." },
//   { icon: "🤝", title: "People Before Technology", desc: "Training & adoption matter." },
//   { icon: "🏗️", title: "Long-Term Thinking",       desc: "Systems designed to last 5+ years." },
//   { icon: "⭐", title: "Client First, Always",      desc: "Every decision starts with the client." },
// ];

// const STATS = [
//   { value: "8+",   label: "Years of Excellence" },
//   { value: "565+", label: "Projects Delivered" },
//   { value: "100+", label: "Team Members" },
//   { value: "3",    label: "International Markets" },
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

// export default function AboutPage() {
//   const [hoveredVal, setHoveredVal] = useState<number | null>(null);

//   return (
//     <>
//       <Navbar />

//       <main style={{
//         background: T.navy0,
//         fontFamily: "'Poppins', sans-serif",
//         color: "#fff",
//         overflowX: "hidden",
//       }}>
//         <style>{`
//           @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

//           @keyframes heroFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
//           @keyframes spin      { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
//           @keyframes abPulse   { 0%,100%{transform:scale(1);opacity:.15} 50%{transform:scale(1.08);opacity:.28} }
//           @keyframes abFadeUp  { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }

//           .ab-section { animation: abFadeUp .7s ease both; }

//           .ab-cta-btn {
//             padding: 14px 34px; border-radius: 10px;
//             font-family: 'Poppins', sans-serif;
//             font-weight: 700; font-size: 15px; cursor: pointer;
//             transition: transform .2s ease, box-shadow .2s ease;
//           }
//           .ab-cta-btn:hover { transform: translateY(-3px); }

//           .ab-val-card {
//             transition: transform .25s ease, border-color .25s ease, background .25s ease;
//           }
//           .ab-val-card:hover { transform: translateY(-5px); }

//           .ab-comp-row:nth-child(even) { background: rgba(255,255,255,.02); }

//           .ab-why-item { transition: transform .2s ease; }
//           .ab-why-item:hover { transform: translateX(6px); }

//           .ab-stat-strip {
//             display: grid;
//             grid-template-columns: repeat(4,1fr);
//           }

//           .ab-values-grid {
//             display: grid;
//             grid-template-columns: repeat(3,1fr);
//             gap: 18px;
//           }

//           .ab-story-grid     { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
//           .ab-parent-grid    { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
//           .ab-parent-stats   { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
//           .ab-why-grid       { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
//           .ab-offices-grid   { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
//           .ab-comp-table     { display: grid; grid-template-columns: 1.2fr 1fr 1fr; }

//           @media (max-width: 960px) {
//             .ab-story-grid   { grid-template-columns: 1fr !important; gap: 40px !important; }
//             .ab-parent-grid  { grid-template-columns: 1fr !important; }
//             .ab-why-grid     { grid-template-columns: 1fr !important; }
//             .ab-offices-grid { grid-template-columns: 1fr !important; }
//             .ab-stat-strip   { grid-template-columns: repeat(2,1fr) !important; }
//           }
//           @media (max-width: 720px) {
//             .ab-values-grid  { grid-template-columns: 1fr 1fr !important; }
//             .ab-comp-table   { grid-template-columns: 1fr !important; }
//           }
//           @media (max-width: 480px) {
//             .ab-values-grid  { grid-template-columns: 1fr !important; }
//             .ab-hero-section { padding: 100px 20px 60px !important; }
//             .ab-section-pad  { padding: 60px 20px !important; }
//             .ab-stat-strip   { grid-template-columns: 1fr 1fr !important; }
//             .ab-cta-section  { padding: 40px 24px !important; }
//           }
//         `}</style>

//         {/* ══════════════════════════════════════
//             MODULE 1 — HERO
//         ══════════════════════════════════════ */}
//         <section className="ab-hero-section" style={{
//           minHeight: "90vh", display: "flex", alignItems: "center",
//           padding: "120px 48px 80px",
//           background: `linear-gradient(135deg, #020d1e 0%, #051628 40%, ${T.navy0} 100%)`,
//           position: "relative", overflow: "hidden",
//         }}>
//           {/* Grid */}
//           <div style={{
//             position:"absolute", inset:0, pointerEvents:"none",
//             backgroundImage:`linear-gradient(rgba(0,201,167,.04) 1px,transparent 1px),
//                              linear-gradient(90deg,rgba(0,201,167,.04) 1px,transparent 1px)`,
//             backgroundSize:"60px 60px",
//           }}/>

//           {/* Glow orb */}
//           <div style={{
//             position:"absolute", width:700, height:700, borderRadius:"50%",
//             background:`radial-gradient(circle,${T.teal}20 0%,transparent 65%)`,
//             top:"50%", right:-200, transform:"translateY(-50%)",
//             animation:"abPulse 7s ease-in-out infinite", pointerEvents:"none",
//           }}/>

//           {/* Rotating ring */}
//           <div style={{
//             position:"absolute", width:500, height:500, borderRadius:"50%",
//             border:"1px dashed rgba(0,201,167,.1)",
//             top:"50%", right:-100, transform:"translateY(-50%)",
//             animation:"spin 40s linear infinite", pointerEvents:"none",
//           }}/>

//           <div style={{ maxWidth:1180, margin:"0 auto", position:"relative", zIndex:1, width:"100%" }}>

//             <div style={{ maxWidth:780, animation:"abFadeUp .7s ease both" }}>
//               {/* Badge */}
//               <div style={{
//                 display:"inline-flex", alignItems:"center", gap:10,
//                 background:"rgba(0,201,167,.08)", border:"1px solid rgba(0,201,167,.25)",
//                 borderRadius:30, padding:"7px 18px", marginBottom:32,
//               }}>
//                 <div style={{ width:7, height:7, borderRadius:"50%", background:T.teal, boxShadow:`0 0 8px ${T.teal}` }}/>
//                 <span style={{ fontSize:11.5, fontWeight:700, color:T.teal, letterSpacing:"0.1em", textTransform:"uppercase" }}>
//                   About NNC Digital Solutions
//                 </span>
//               </div>

//               <h1 style={{
//                 fontSize:"clamp(32px,4.5vw,62px)", fontWeight:900,
//                 lineHeight:1.12, marginBottom:28, letterSpacing:"-0.02em",
//               }}>
//                 Built on{" "}
//                 <span style={{
//                   background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,
//                   WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
//                 }}>
//                   Indian Tech Excellence.
//                 </span>
//                 <br />
//                 Built for Canadian,{" "}
//                 <span style={{ color:"rgba(255,255,255,.8)", fontStyle:"italic" }}>
//                   US &amp; UK Business.
//                 </span>
//               </h1>

//               <p style={{
//                 fontSize:"clamp(15px,1.4vw,18px)", color:"rgba(255,255,255,.52)",
//                 lineHeight:1.85, marginBottom:44, maxWidth:640,
//               }}>
//                 NNC Digital Solutions is the international technology arm of Nakshatra Namaha Creations Pvt. Ltd. — one of Bangalore&apos;s most respected digital studios. We were born from a belief that the deep technology expertise that has transformed thousands of Indian businesses deserves to be accessible to growing companies in Canada, the USA, and the United Kingdom.
//               </p>

//               <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
//                 <button className="ab-cta-btn" style={{
//                   background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
//                   color:"#000", border:"none",
//                   boxShadow:`0 8px 32px rgba(0,201,167,.3)`,
//                 }}>
//                   Book a Free Consultation
//                 </button>
//                 <button className="ab-cta-btn" style={{
//                   background:"transparent", color:"#fff",
//                   border:"1px solid rgba(255,255,255,.2)",
//                 }}>
//                   View Our Work →
//                 </button>
//               </div>
//             </div>

//             {/* Stat strip */}
//             <div className="ab-stat-strip" style={{
//               gap:1, marginTop:72,
//               background:"rgba(255,255,255,.06)",
//               borderRadius:16, overflow:"hidden",
//               border:"1px solid rgba(255,255,255,.08)",
//             }}>
//               {STATS.map((s, i) => (
//                 <div key={i} style={{
//                   padding:"28px 24px", textAlign:"center",
//                   background:"rgba(5,14,30,.8)",
//                   borderRight: i < 3 ? "1px solid rgba(255,255,255,.06)" : "none",
//                 }}>
//                   <p style={{
//                     fontSize:"clamp(26px,3vw,40px)", fontWeight:900, margin:0,
//                     background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,
//                     WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
//                   }}>{s.value}</p>
//                   <p style={{ fontSize:12, color:"rgba(255,255,255,.4)", margin:"6px 0 0", fontWeight:600, letterSpacing:"0.06em", textTransform:"uppercase" }}>
//                     {s.label}
//                   </p>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </section>

//         {/* ══════════════════════════════════════
//             MODULE 2 — THE NNC STORY
//         ══════════════════════════════════════ */}
//         <section className="ab-section-pad" style={{ padding:"100px 48px", background:T.navy0 }}>
//           <div style={{ maxWidth:1180, margin:"0 auto" }}>
//             <div className="ab-story-grid">

//               {/* Text */}
//               <div>
//                 <p style={{ color:T.teal, fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:14 }}>
//                   — Our Story —
//                 </p>
//                 <h2 style={{ fontSize:"clamp(24px,2.8vw,38px)", fontWeight:900, lineHeight:1.2, marginBottom:28 }}>
//                   From Bangalore to Canada —{" "}
//                   <span style={{ background:`linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
//                     The NNC Digital Story
//                   </span>
//                 </h2>
//                 <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
//                   {[
//                     "Nakshatra Namaha Creations Pvt. Ltd. was founded in Bangalore, India — a city synonymous with world-class software engineering. Over 8+ years, the company built a reputation as one of Karnataka's most trusted digital studios, delivering 565+ projects across website development, mobile apps, digital marketing, corporate video, 2D animation, B2B marketing, and more.",
//                     "In response to increasing demand from businesses in Canada, the United States, and the United Kingdom who needed a trustworthy offshore technology partner — NNC Digital Solutions was launched as Nakshatra Namaha Creations' dedicated international brand.",
//                     "NNC Digital is not a new company trying to build a reputation. It is the international expression of a decade of proven capability — backed by the people, processes, and portfolio of one of India's most capable digital studios.",
//                   ].map((para, i) => (
//                     <p key={i} style={{ color:"rgba(255,255,255,.52)", fontSize:14.5, lineHeight:1.85, margin:0 }}>{para}</p>
//                   ))}
//                 </div>

//                 {/* City pill */}
//                 <div style={{
//                   marginTop:32, padding:"18px 22px", borderRadius:12,
//                   background:"rgba(0,201,167,.06)", border:"1px solid rgba(0,201,167,.2)",
//                   display:"flex", alignItems:"center", gap:14,
//                 }}>
//                   <span style={{ fontSize:28 }}>🇮🇳</span>
//                   <div>
//                     <p style={{ fontSize:13, fontWeight:700, color:"#fff", margin:0 }}>Bangalore → Toronto · New York · London</p>
//                     <p style={{ fontSize:12, color:"rgba(255,255,255,.4)", margin:"3px 0 0" }}>One trusted studio. Three international markets.</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Visual */}
//               <div style={{ position:"relative" }}>
//                 <div style={{
//                   borderRadius:24, overflow:"hidden",
//                   border:"1px solid rgba(0,201,167,.2)",
//                   boxShadow:`0 32px 80px rgba(0,0,0,.5), 0 0 60px rgba(0,201,167,.08)`,
//                   position:"relative", aspectRatio:"4/3",
//                 }}>
//                   <Image src="/NNCLOGO.jpg" alt="NNC Digital Solutions" fill style={{ objectFit:"cover" }}/>
//                   <div style={{
//                     position:"absolute", inset:0,
//                     background:"linear-gradient(to top, rgba(5,14,30,.85) 0%, transparent 50%)",
//                   }}/>
//                   <div style={{ position:"absolute", bottom:24, left:24, right:24 }}>
//                     <p style={{ fontSize:13, fontWeight:700, color:"#fff", margin:0 }}>NNC Digital Solutions</p>
//                     <p style={{ fontSize:11.5, color:T.teal, margin:"4px 0 0" }}>A Nakshatra Namaha Creations Company</p>
//                   </div>
//                 </div>

//                 {/* Floating badge — top right */}
//                 <div style={{
//                   position:"absolute", top:-18, right:-18,
//                   background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
//                   borderRadius:16, padding:"14px 18px", textAlign:"center",
//                   boxShadow:`0 8px 32px rgba(0,201,167,.4)`,
//                   animation:"heroFloat 4s ease-in-out infinite",
//                 }}>
//                   <p style={{ fontSize:22, fontWeight:900, color:"#000", margin:0, lineHeight:1 }}>565+</p>
//                   <p style={{ fontSize:10, fontWeight:700, color:"rgba(0,0,0,.65)", margin:"3px 0 0", letterSpacing:"0.06em" }}>PROJECTS</p>
//                 </div>

//                 {/* Floating badge — bottom left */}
//                 <div style={{
//                   position:"absolute", bottom:-18, left:-18,
//                   background:"rgba(5,14,30,.95)", border:"1px solid rgba(0,201,167,.3)",
//                   borderRadius:14, padding:"12px 16px",
//                   boxShadow:"0 8px 32px rgba(0,0,0,.4)",
//                   animation:"heroFloat 5s ease-in-out infinite",
//                   animationDelay:"1.5s",
//                 }}>
//                   <p style={{ fontSize:12, fontWeight:700, color:"#fff", margin:0 }}>🏙️ Bangalore · Toronto · London</p>
//                   <p style={{ fontSize:10.5, color:"rgba(255,255,255,.4)", margin:"3px 0 0" }}>8+ years of global delivery</p>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </section>

//         {/* ══════════════════════════════════════
//             MODULE 3 — PARENT COMPANY
//         ══════════════════════════════════════ */}
//         <section className="ab-section-pad" style={{
//           padding:"100px 48px",
//           background:"linear-gradient(180deg,#040e1f 0%,#030b19 100%)",
//           position:"relative", overflow:"hidden",
//         }}>
//           {/* Dot grid */}
//           <div style={{
//             position:"absolute", inset:0, pointerEvents:"none",
//             backgroundImage:`radial-gradient(rgba(0,201,167,.06) 1px, transparent 1px)`,
//             backgroundSize:"32px 32px",
//           }}/>

//           <div style={{ maxWidth:1180, margin:"0 auto", position:"relative", zIndex:1 }}>

//             {/* Heading */}
//             <div style={{ textAlign:"center", marginBottom:56 }}>
//               <p style={{ color:T.teal, fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:14 }}>— Backed By —</p>
//               <h2 style={{ fontSize:"clamp(24px,2.8vw,38px)", fontWeight:900, marginBottom:12 }}>
//                 Our Parent Company —{" "}
//                 <span style={{ background:`linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
//                   Nakshatra Namaha Creations Pvt. Ltd.
//                 </span>
//               </h2>
//               <h3 style={{ fontSize:16, fontWeight:500, color:"rgba(255,255,255,.45)", margin:0 }}>
//                 8+ Years of Digital Excellence from Bangalore, India
//               </h3>
//             </div>

//             {/* Highlight box */}
//             <div style={{
//               borderRadius:20, padding:"40px 44px",
//               background:"rgba(0,201,167,.05)", border:"1px solid rgba(0,201,167,.2)",
//               marginBottom:48,
//             }}>
//               <div className="ab-parent-grid">
//                 <div>
//                   <p style={{ fontSize:15, color:"rgba(255,255,255,.55)", lineHeight:1.85, margin:0 }}>
//                     Headquartered in <strong style={{ color:"#fff" }}>Bengaluru, Karnataka</strong> — India&apos;s Silicon Valley — with offices in Mysore, Mumbai, and Hyderabad. A full-spectrum digital studio combining creative excellence with engineering rigour.
//                   </p>
//                   <a href="https://www.nakshatranamahacreations.com" target="_blank" rel="noopener noreferrer" style={{
//                     display:"inline-flex", alignItems:"center", gap:8, marginTop:20,
//                     fontSize:13.5, fontWeight:700, color:T.teal, textDecoration:"none",
//                   }}>
//                     🌐 www.nakshatranamahacreations.com →
//                   </a>
//                 </div>
//                 <div className="ab-parent-stats">
//                   {[
//                     { n:"8+",   l:"Years Active" },
//                     { n:"565+", l:"Projects" },
//                     { n:"100+", l:"Team Size" },
//                     { n:"4",    l:"Indian Offices" },
//                   ].map((s, i) => (
//                     <div key={i} style={{
//                       textAlign:"center", padding:"20px 12px", borderRadius:14,
//                       background:"rgba(0,201,167,.06)", border:"1px solid rgba(0,201,167,.15)",
//                     }}>
//                       <p style={{ fontSize:28, fontWeight:900, color:T.teal, margin:0 }}>{s.n}</p>
//                       <p style={{ fontSize:11, color:"rgba(255,255,255,.4)", margin:"4px 0 0", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.06em" }}>{s.l}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Services tags */}
//             <div style={{ marginBottom:48 }}>
//               <h3 style={{ fontSize:12, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(255,255,255,.35)", marginBottom:20 }}>
//                 Parent Company Services That Power NNC Digital
//               </h3>
//               <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
//                 {PARENT_SERVICES.map(s => (
//                   <span key={s} style={{
//                     fontSize:13, fontWeight:600, color:"rgba(255,255,255,.7)",
//                     background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.1)",
//                     padding:"8px 16px", borderRadius:30,
//                   }}>{s}</span>
//                 ))}
//               </div>
//             </div>

//             {/* Comparison table */}
//             <div style={{ borderRadius:16, overflow:"hidden", border:"1px solid rgba(255,255,255,.08)" }}>
//               {/* Header */}
//               <div className="ab-comp-table" style={{
//                 background:"rgba(0,201,167,.08)", borderBottom:"1px solid rgba(0,201,167,.2)",
//                 padding:"16px 24px",
//               }}>
//                 {["Metric","Nakshatra Namaha Creations","NNC Digital (International)"].map(h => (
//                   <p key={h} style={{ fontSize:11, fontWeight:700, color:T.teal, textTransform:"uppercase", letterSpacing:"0.1em", margin:0 }}>{h}</p>
//                 ))}
//               </div>
//               {COMPARISON.map((row, i) => (
//                 <div key={i} className="ab-comp-row ab-comp-table" style={{
//                   padding:"18px 24px",
//                   borderBottom: i < COMPARISON.length - 1 ? "1px solid rgba(255,255,255,.05)" : "none",
//                 }}>
//                   <p style={{ fontSize:13, fontWeight:700, color:"rgba(255,255,255,.6)", margin:0 }}>{row.metric}</p>
//                   <p style={{ fontSize:13, color:"rgba(255,255,255,.85)", margin:0 }}>{row.parent}</p>
//                   <p style={{ fontSize:13, color:T.teal, fontWeight:600, margin:0 }}>{row.nnc}</p>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </section>

//         {/* ══════════════════════════════════════
//             MODULE 4 — WHY WE LAUNCHED
//         ══════════════════════════════════════ */}
//         <section className="ab-section-pad" style={{ padding:"100px 48px", background:T.navy0 }}>
//           <div style={{ maxWidth:1180, margin:"0 auto" }}>

//             <div style={{ textAlign:"center", marginBottom:56 }}>
//               <p style={{ color:T.teal, fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:14 }}>— Our Purpose —</p>
//               <h2 style={{ fontSize:"clamp(24px,2.8vw,38px)", fontWeight:900, margin:0 }}>
//                 Why We Launched NNC Digital for the{" "}
//                 <span style={{ background:`linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
//                   North American &amp; UK Market
//                 </span>
//               </h2>
//             </div>

//             <div className="ab-why-grid">

//               {/* The Gap */}
//               <div style={{
//                 borderRadius:20, padding:"40px 36px",
//                 background:"rgba(255,255,255,.02)", border:"1px solid rgba(255,255,255,.08)",
//               }}>
//                 <div style={{
//                   width:48, height:48, borderRadius:14, marginBottom:24,
//                   background:"rgba(255,80,80,.1)", border:"1px solid rgba(255,80,80,.2)",
//                   display:"flex", alignItems:"center", justifyContent:"center", fontSize:22,
//                 }}>🔍</div>
//                 <h3 style={{ fontSize:18, fontWeight:800, color:"#fff", marginBottom:16 }}>The Gap We Saw</h3>
//                 <p style={{ color:"rgba(255,255,255,.5)", fontSize:14.5, lineHeight:1.85, margin:"0 0 14px" }}>
//                   Businesses in Canada, the USA, and the UK face a common challenge: local agencies charge premium prices for work that can be delivered at a fraction of the cost — without any quality reduction — by the right offshore partner.
//                 </p>
//                 <p style={{ color:"rgba(255,255,255,.5)", fontSize:14.5, lineHeight:1.85, margin:0 }}>
//                   Most offshore agencies fail because they don&apos;t understand the regulatory environment, commercial culture, or specific needs of Western businesses.
//                 </p>
//               </div>

//               {/* The Solution */}
//               <div style={{
//                 borderRadius:20, padding:"40px 36px",
//                 background:"rgba(0,201,167,.04)", border:"1px solid rgba(0,201,167,.18)",
//               }}>
//                 <div style={{
//                   width:48, height:48, borderRadius:14, marginBottom:24,
//                   background:"rgba(0,201,167,.1)", border:"1px solid rgba(0,201,167,.3)",
//                   display:"flex", alignItems:"center", justifyContent:"center", fontSize:22,
//                 }}>✅</div>
//                 <h3 style={{ fontSize:18, fontWeight:800, color:"#fff", marginBottom:20 }}>The Solution We Built</h3>
//                 <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
//                   {WHY_SOLUTIONS.map((item, i) => (
//                     <div key={i} className="ab-why-item" style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
//                       <div style={{
//                         width:22, height:22, borderRadius:"50%", flexShrink:0, marginTop:1,
//                         background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
//                         display:"flex", alignItems:"center", justifyContent:"center",
//                         fontSize:11, color:"#000", fontWeight:900,
//                       }}>✓</div>
//                       <p style={{ color:"rgba(255,255,255,.7)", fontSize:14, lineHeight:1.65, margin:0 }}>{item}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </div>
//         </section>

//         {/* ══════════════════════════════════════
//             MODULE 5 — VALUES, OFFICES + CTA
//         ══════════════════════════════════════ */}
//         <section className="ab-section-pad" style={{
//           padding:"100px 48px",
//           background:"linear-gradient(180deg,#040e1f 0%,#030b19 100%)",
//         }}>
//           <div style={{ maxWidth:1180, margin:"0 auto" }}>

//             {/* Values heading */}
//             <div style={{ textAlign:"center", marginBottom:52 }}>
//               <p style={{ color:T.teal, fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:14 }}>— Our Values —</p>
//               <h2 style={{ fontSize:"clamp(24px,2.8vw,38px)", fontWeight:900, margin:0 }}>
//                 What We{" "}
//                 <span style={{ background:`linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
//                   Stand For
//                 </span>
//               </h2>
//             </div>

//             {/* Values grid */}
//             <div className="ab-values-grid" style={{ marginBottom:80 }}>
//               {VALUES.map((v, i) => (
//                 <div
//                   key={i}
//                   className="ab-val-card"
//                   onMouseEnter={() => setHoveredVal(i)}
//                   onMouseLeave={() => setHoveredVal(null)}
//                   style={{
//                     borderRadius:18, padding:"32px 28px",
//                     background: hoveredVal === i ? "rgba(0,201,167,.07)" : "rgba(255,255,255,.03)",
//                     border:`1px solid ${hoveredVal === i ? "rgba(0,201,167,.35)" : "rgba(255,255,255,.08)"}`,
//                     cursor:"default",
//                   }}
//                 >
//                   <div style={{ fontSize:32, marginBottom:16 }}>{v.icon}</div>
//                   <p style={{ fontSize:15.5, fontWeight:800, color:"#fff", marginBottom:8 }}>{v.title}</p>
//                   <p style={{ fontSize:13.5, color:"rgba(255,255,255,.45)", lineHeight:1.7, margin:0 }}>{v.desc}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Offices heading */}
//             <div style={{ textAlign:"center", marginBottom:36 }}>
//               <h2 style={{ fontSize:"clamp(22px,2.4vw,34px)", fontWeight:900 }}>
//                 Global{" "}
//                 <span style={{ background:`linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
//                   Offices
//                 </span>
//               </h2>
//             </div>

//             {/* Offices grid */}
//             <div className="ab-offices-grid" style={{ marginBottom:72 }}>

//               {/* International */}
//               <div style={{
//                 borderRadius:20, padding:"36px 32px",
//                 background:"rgba(0,201,167,.05)", border:"1px solid rgba(0,201,167,.2)",
//               }}>
//                 <p style={{ fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:T.teal, marginBottom:24 }}>
//                   International Offices
//                 </p>
//                 <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
//                   {INT_OFFICES.map(o => (
//                     <div key={o.city} style={{ display:"flex", alignItems:"center", gap:14 }}>
//                       <span style={{ fontSize:22 }}>{o.flag}</span>
//                       <div>
//                         <p style={{ fontSize:14, fontWeight:700, color:"#fff", margin:0 }}>{o.city}</p>
//                         <p style={{ fontSize:13, color:T.teal, margin:"2px 0 0", fontWeight:600 }}>{o.phone}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* India */}
//               <div style={{
//                 borderRadius:20, padding:"36px 32px",
//                 background:"rgba(255,255,255,.02)", border:"1px solid rgba(255,255,255,.08)",
//               }}>
//                 <p style={{ fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(255,255,255,.4)", marginBottom:24 }}>
//                   India Offices — Nakshatra Namaha Creations
//                 </p>
//                 <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
//                   {INDIA_OFFICES.map(o => (
//                     <div key={o.city} style={{ display:"flex", alignItems:"center", gap:14 }}>
//                       <span style={{ fontSize:22 }}>{o.flag}</span>
//                       <div>
//                         <p style={{ fontSize:14, fontWeight:700, color:"#fff", margin:0 }}>{o.city}</p>
//                         {o.phone && <p style={{ fontSize:13, color:"rgba(255,255,255,.4)", margin:"2px 0 0" }}>{o.phone}</p>}
//                       </div>
//                     </div>
//                   ))}
//                   <div style={{ marginTop:4, paddingTop:16, borderTop:"1px solid rgba(255,255,255,.07)" }}>
//                     <p style={{ fontSize:12.5, color:"rgba(255,255,255,.35)", margin:0 }}>
//                       ✉️ info@nakshatranamahacreations.com
//                     </p>
//                   </div>
//                 </div>
//               </div>

//             </div>

//             {/* Final CTA */}
//             <div className="ab-cta-section" style={{
//               borderRadius:24, padding:"64px 52px", textAlign:"center",
//               background:`linear-gradient(135deg,${T.tealDark}22 0%,rgba(5,14,30,.9) 50%,${T.navy0} 100%)`,
//               border:"1px solid rgba(0,201,167,.2)",
//               position:"relative", overflow:"hidden",
//             }}>
//               <div style={{
//                 position:"absolute", width:400, height:400, borderRadius:"50%",
//                 background:`radial-gradient(circle,${T.teal}12 0%,transparent 65%)`,
//                 top:"50%", left:"50%", transform:"translate(-50%,-50%)",
//                 pointerEvents:"none",
//               }}/>
//               <div style={{ position:"relative", zIndex:1 }}>
//                 <p style={{ fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:T.teal, marginBottom:16 }}>
//                   — Get Started —
//                 </p>
//                 <h2 style={{ fontSize:"clamp(22px,2.6vw,38px)", fontWeight:900, marginBottom:16 }}>
//                   Ready to Start a Conversation?
//                 </h2>
//                 <p style={{ color:"rgba(255,255,255,.5)", fontSize:15.5, lineHeight:1.8, maxWidth:540, margin:"0 auto 40px" }}>
//                   Whether you have a fully scoped project or just a problem you&apos;re trying to solve — we&apos;d love to talk. We&apos;ll respond within 24 hours with honest, practical advice.
//                 </p>
//                 <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
//                   <button className="ab-cta-btn" style={{
//                     background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
//                     color:"#000", border:"none",
//                     boxShadow:`0 8px 32px rgba(0,201,167,.35)`,
//                   }}>
//                     Book a Free Consultation
//                   </button>
//                   <button className="ab-cta-btn" style={{
//                     background:"transparent", color:"#fff",
//                     border:"1px solid rgba(255,255,255,.2)",
//                   }}>
//                     View Our Work →
//                   </button>
//                 </div>
//               </div>
//             </div>

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
  { icon:"🎯", title:"Outcomes Over Outputs",   desc:"Results, not features shipped." },
  { icon:"🔒", title:"Compliance First",         desc:"GDPR / PIPEDA / CCPA in every system." },
  { icon:"💡", title:"Radical Transparency",     desc:"Fixed prices. Weekly demos. No jargon." },
  { icon:"🤝", title:"People Before Technology", desc:"Training & adoption matter." },
  { icon:"🏗️", title:"Long-Term Thinking",       desc:"Systems designed to last 5+ years." },
  { icon:"⭐", title:"Client First, Always",      desc:"Every decision starts with the client." },
];
const STATS = [
  { value:8,   suffix:"+", label:"Years of Excellence" },
  { value:565, suffix:"+", label:"Projects Delivered" },
  { value:100, suffix:"+", label:"Team Members" },
  { value:3,   suffix:"",  label:"International Markets" },
];
const PARENT_SERVICES = [
  "Website Development","Mobile App Development","Digital Marketing",
  "Graphic Design","2D Animation","Corporate Video Production",
  "B2B Marketing","SEO & Performance Marketing",
];
const COMPARISON = [
  { metric:"Years in Business",  parent:"8+ Years",                                nnc:"Launched for CA/US/UK Market" },
  { metric:"Projects Delivered", parent:"565+",                                    nnc:"Growing Portfolio in NA & UK" },
  { metric:"Team Size",          parent:"100+ Members",                            nnc:"Dedicated International Team" },
  { metric:"Offices",            parent:"Bangalore · Mysore · Mumbai · Hyderabad", nnc:"Toronto · New York · London" },
];
const INT_OFFICES = [
  { flag:"🇨🇦", city:"Toronto, Canada", phone:"+1 647-XXX-XXXX" },
  { flag:"🇺🇸", city:"New York, USA",   phone:"+1 631-XXX-XXXX" },
  { flag:"🇬🇧", city:"London, UK",      phone:"+44 20-XXXX-XXXX" },
];
const INDIA_OFFICES = [
  { flag:"🇮🇳", city:"Bangalore HQ", phone:"+91 9900566466" },
  { flag:"🇮🇳", city:"Mysore",       phone:null },
  { flag:"🇮🇳", city:"Mumbai",       phone:null },
  { flag:"🇮🇳", city:"Hyderabad",    phone:null },
];
const WHY_SOLUTIONS = [
  "Dedicated project managers in North American and UK time zones",
  "GDPR, PIPEDA, and CCPA-compliant systems from day one",
  "Full creative and technical capability of a 100+ person studio",
  "Transparent, fixed-price proposals — no surprises",
  "Long-term partnership, not one-and-done project delivery",
];

/* ─── useInView ─── */
function useInView(threshold = 0.18) {
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
    const dur = 1800;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setV(Math.round(ease * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, to]);
  return <span>{v}{suffix}</span>;
}

/* ─── Typewriter ─── */
function Typewriter({ text, active }: { text: string; active: boolean }) {
  const [out, setOut] = useState("");
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    if (!active) return;
    let i = 0;
    const t = setInterval(() => { setOut(text.slice(0, ++i)); if (i >= text.length) clearInterval(t); }, 40);
    const c = setInterval(() => setBlink(b => !b), 520);
    return () => { clearInterval(t); clearInterval(c); };
  }, [active, text]);
  return <>{out}<span style={{ opacity: blink ? 1 : 0, color: T.teal }}>|</span></>;
}

/* ─── Particle canvas ─── */
function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d")!;
    let W = c.width = c.offsetWidth, H = c.height = c.offsetHeight;
    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random()*W, y: Math.random()*H,
      vx: (Math.random()-.5)*.3, vy: (Math.random()-.5)*.3,
      r: Math.random()*1.5+.3, a: Math.random()*.45+.08,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0,0,W,H);
      pts.forEach(p => {
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0)p.x=W; if(p.x>W)p.x=0;
        if(p.y<0)p.y=H; if(p.y>H)p.y=0;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(0,201,167,${p.a})`; ctx.fill();
      });
      for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++) {
        const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy);
        if(d<110){ ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y);
          ctx.strokeStyle=`rgba(0,201,167,${.06*(1-d/110)})`; ctx.lineWidth=.5; ctx.stroke(); }
      }
      raf=requestAnimationFrame(draw);
    };
    draw();
    const resize=()=>{W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;};
    window.addEventListener("resize",resize);
    return ()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",resize);};
  },[]);
  return <canvas ref={ref} style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}}/>;
}

/* ─── FadeUp wrapper ─── */
function FadeUp({ children, delay=0, style: ext }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const {ref,visible}=useInView();
  return (
    <div ref={ref} style={{ opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(32px)", transition:`opacity .7s ease ${delay}s,transform .7s ease ${delay}s`, ...ext }}>
      {children}
    </div>
  );
}

/* ─── Magnetic button ─── */
function MagBtn({ children, primary, style: ext }: { children: React.ReactNode; primary?: boolean; style?: React.CSSProperties }) {
  const ref = useRef<HTMLButtonElement>(null);
  const mv = useCallback((e: React.MouseEvent) => {
    const el=ref.current; if(!el) return;
    const r=el.getBoundingClientRect();
    el.style.transform=`translate(${(e.clientX-(r.left+r.width/2))*.3}px,${(e.clientY-(r.top+r.height/2))*.3}px) scale(1.05)`;
  },[]);
  const lv = useCallback(()=>{ if(ref.current) ref.current.style.transform=""; },[]);
  return (
    <button ref={ref} onMouseMove={mv} onMouseLeave={lv} style={{
      padding:"14px 34px", borderRadius:10, cursor:"pointer",
      fontFamily:"'Poppins',sans-serif", fontWeight:700, fontSize:15,
      transition:"transform .25s ease, box-shadow .25s ease",
      ...(primary ? {
        background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
        color:"#000", border:"none", boxShadow:`0 8px 32px rgba(0,201,167,.3)`,
      } : {
        background:"transparent", color:"#fff", border:"1.5px solid rgba(255,255,255,.22)",
      }),
      ...ext,
    }}>{children}</button>
  );
}

/* ─── Main ─── */
export default function AboutPage() {
  const [hoveredVal,setHoveredVal] = useState<number|null>(null);
  const [mouse,setMouse]           = useState({x:0,y:0});
  const statsIO   = useInView(.3);
  const heroTWIO  = useInView(.3);

  useEffect(()=>{
    const f=(e:MouseEvent)=>setMouse({x:e.clientX/window.innerWidth,y:e.clientY/window.innerHeight});
    window.addEventListener("mousemove",f); return ()=>window.removeEventListener("mousemove",f);
  },[]);

  return (
    <>
      <Navbar/>
      <main style={{background:T.navy0,fontFamily:"'Poppins',sans-serif",color:"#fff",overflowX:"hidden"}}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

          @keyframes abFloat    {0%,100%{transform:translateY(0)}    50%{transform:translateY(-14px)}}
          @keyframes abFloat2   {0%,100%{transform:translateY(-8px)} 50%{transform:translateY(8px)}}
          @keyframes abSpin     {from{transform:rotate(0)} to{transform:rotate(360deg)}}
          @keyframes abSpinR    {from{transform:rotate(0)} to{transform:rotate(-360deg)}}
          @keyframes abPulse    {0%,100%{opacity:.12;transform:scale(1)} 50%{opacity:.26;transform:scale(1.08)}}
          @keyframes abScan     {0%{top:-2px} 100%{top:100%}}
          @keyframes abBlink    {0%,100%{opacity:1} 50%{opacity:0}}
          @keyframes abBadgePop {0%{transform:scale(0) rotate(-12deg);opacity:0} 70%{transform:scale(1.08) rotate(2deg)} 100%{transform:scale(1) rotate(0);opacity:1}}
          @keyframes abRowIn    {from{opacity:0;transform:translateX(-14px)} to{opacity:1;transform:translateX(0)}}
          @keyframes abGlow     {0%,100%{box-shadow:0 0 18px rgba(0,201,167,.18)} 50%{box-shadow:0 0 44px rgba(0,201,167,.45)}}
          @keyframes abTagDrift {0%{transform:translateX(0)} 100%{transform:translateX(-50%)}}
          @keyframes abShimmer  {0%{background-position:-200% center} 100%{background-position:200% center}}

          .ab-shimmer {
            background:linear-gradient(90deg,#fff 0%,${T.teal} 38%,#fff 56%,${T.teal} 100%);
            background-size:200% auto;
            -webkit-background-clip:text; -webkit-text-fill-color:transparent;
            animation:abShimmer 4s linear infinite;
          }
          .ab-tag-track { display:flex; gap:12px; animation:abTagDrift 20s linear infinite; width:max-content; }
          .ab-tag-track:hover { animation-play-state:paused; }

          .ab-val-card { border-radius:18px; padding:32px 26px; cursor:default; position:relative; overflow:hidden;
            transition:transform .3s,border-color .3s,background .3s,box-shadow .3s; }
          .ab-val-card::before { content:""; position:absolute; top:0; left:-100%; width:55%; height:100%;
            background:linear-gradient(90deg,transparent,rgba(0,201,167,.06),transparent);
            transition:left .55s ease; }
          .ab-val-card:hover::before { left:160%; }
          .ab-val-card:hover { transform:translateY(-8px) scale(1.02); box-shadow:0 24px 60px rgba(0,0,0,.45); }

          .ab-comp-row { transition:background .2s; }
          .ab-comp-row:hover { background:rgba(0,201,167,.04) !important; }
          .ab-comp-row:nth-child(even) { background:rgba(255,255,255,.02); }
          .ab-why-item { transition:transform .2s,background .2s; }
          .ab-why-item:hover { transform:translateX(8px); background:rgba(0,201,167,.08) !important; }
          .ab-office-row { transition:background .2s,transform .2s; cursor:default; }
          .ab-office-row:hover { background:rgba(0,201,167,.09) !important; transform:translateX(6px); }

          .ab-section-pad  { padding:100px 48px; }
          .ab-stat-strip   { display:grid; grid-template-columns:repeat(4,1fr); }
          .ab-stat-cell:not(:last-child) { border-right:1px solid rgba(255,255,255,.06); }
          .ab-story-grid   { display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:center; }
          .ab-parent-grid  { display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:center; }
          .ab-parent-stats { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
          .ab-why-grid     { display:grid; grid-template-columns:1fr 1fr; gap:32px; }
          .ab-values-grid  { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
          .ab-offices-grid { display:grid; grid-template-columns:1fr 1fr; gap:24px; }
          .ab-comp-cols    { display:grid; grid-template-columns:1.2fr 1fr 1fr; }

          @media (max-width:960px) {
            .ab-story-grid,.ab-parent-grid,.ab-why-grid,.ab-offices-grid{grid-template-columns:1fr!important;}
            .ab-stat-strip{grid-template-columns:repeat(2,1fr)!important;}
          }
          @media (max-width:720px) {
            .ab-values-grid{grid-template-columns:1fr 1fr!important;}
            .ab-comp-cols{grid-template-columns:1fr!important;}
          }
          @media (max-width:480px) {
            .ab-values-grid{grid-template-columns:1fr!important;}
            .ab-section-pad{padding:60px 20px!important;}
            .ab-hero-wrap{padding:100px 20px 64px!important;}
            .ab-stat-strip{grid-template-columns:1fr 1fr!important;}
            .ab-cta-inner{padding:44px 22px!important;}
          }
        `}</style>

        {/* ══ HERO ══ */}
        <section className="ab-hero-wrap" style={{
          minHeight:"92vh", display:"flex", alignItems:"center",
          padding:"120px 48px 80px",
          background:`linear-gradient(135deg,#020d1e 0%,#051628 40%,${T.navy0} 100%)`,
          position:"relative", overflow:"hidden",
        }}>
          <Particles/>
          <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:1,
            backgroundImage:`linear-gradient(rgba(0,201,167,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.035) 1px,transparent 1px)`,
            backgroundSize:"60px 60px"}}/>

          {/* Parallax orbs */}
          <div style={{position:"absolute",width:700,height:700,borderRadius:"50%",
            background:`radial-gradient(circle,${T.teal}18 0%,transparent 65%)`,
            top:"50%",right:-200,
            transform:`translateY(-50%) translate(${mouse.x*-28}px,${mouse.y*-20}px)`,
            transition:"transform .4s ease",
            animation:"abPulse 7s ease-in-out infinite",pointerEvents:"none",zIndex:1}}/>
          <div style={{position:"absolute",width:420,height:420,borderRadius:"50%",
            background:"radial-gradient(circle,rgba(99,102,241,.12) 0%,transparent 65%)",
            top:"10%",left:"-6%",
            transform:`translate(${mouse.x*18}px,${mouse.y*14}px)`,
            transition:"transform .45s ease",
            animation:"abPulse 9s ease-in-out infinite .5s",pointerEvents:"none",zIndex:1}}/>

          {/* Rings */}
          <div style={{position:"absolute",width:560,height:560,borderRadius:"50%",
            border:"1px dashed rgba(0,201,167,.1)",
            top:"50%",right:-120,transform:"translateY(-50%)",
            animation:"abSpin 50s linear infinite",pointerEvents:"none",zIndex:1}}/>
          <div style={{position:"absolute",width:380,height:380,borderRadius:"50%",
            border:"1px dashed rgba(0,201,167,.06)",
            top:"50%",right:-50,transform:"translateY(-50%)",
            animation:"abSpinR 32s linear infinite",pointerEvents:"none",zIndex:1}}/>

          {/* Scan line */}
          {/* <div style={{position:"absolute",left:0,right:0,height:1,zIndex:2,pointerEvents:"none",
            background:"linear-gradient(90deg,transparent,rgba(0,201,167,.3),transparent)",
            animation:"abScan 6s linear infinite"}}/> */}

          <div style={{maxWidth:1180,margin:"0 auto",position:"relative",zIndex:3,width:"100%"}}>
            <div style={{maxWidth:820}} ref={heroTWIO.ref}>

              <FadeUp>
                <div style={{
                  display:"inline-flex",alignItems:"center",gap:10,
                  background:"rgba(0,201,167,.08)",border:"1px solid rgba(0,201,167,.25)",
                  borderRadius:30,padding:"7px 18px",marginBottom:32,
                  animation:"abGlow 3s ease-in-out infinite",
                }}>
                  <div style={{width:7,height:7,borderRadius:"50%",background:T.teal,
                    boxShadow:`0 0 10px ${T.teal}`,animation:"abBlink 1.4s ease-in-out infinite"}}/>
                  <span style={{fontSize:11.5,fontWeight:700,color:T.teal,letterSpacing:"0.1em",textTransform:"uppercase"}}>
                    About NNC Digital Solutions
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 style={{fontSize:"clamp(32px,4.5vw,64px)",fontWeight:900,lineHeight:1.12,marginBottom:28,letterSpacing:"-0.02em"}}>
                  Built on{" "}
                  <span style={{background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
                    Indian Tech Excellence.
                  </span>
                  <br/>
                  <Typewriter text="Built for Canadian, US & UK Business." active={heroTWIO.visible}/>
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p style={{fontSize:"clamp(15px,1.4vw,18px)",color:"rgba(255,255,255,.52)",lineHeight:1.85,marginBottom:44,maxWidth:640}}>
                  NNC Digital Solutions is the international technology arm of Nakshatra Namaha Creations Pvt. Ltd. — one of Bangalore&apos;s most respected digital studios. We were born from a belief that the deep technology expertise that has transformed thousands of Indian businesses deserves to be accessible to growing companies in Canada, the USA, and the United Kingdom.
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
                  <MagBtn primary>Book a Free Consultation</MagBtn>
                  <MagBtn>View Our Work →</MagBtn>
                </div>
              </FadeUp>
            </div>

            {/* Stat strip */}
            <FadeUp delay={0.42}>
              <div ref={statsIO.ref}>
                <div className="ab-stat-strip" style={{
                  marginTop:72,background:"rgba(255,255,255,.06)",
                  borderRadius:16,overflow:"hidden",border:"1px solid rgba(255,255,255,.08)",gap:1,
                }}>
                  {STATS.map((s,i)=>(
                    <div key={i} className="ab-stat-cell" style={{padding:"28px 20px",textAlign:"center",
                      background:"rgba(5,14,30,.85)",position:"relative",overflow:"hidden",
                      transition:"background .3s",cursor:"default"}}
                      onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,.08)"}
                      onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="rgba(5,14,30,.85)"}
                    >
                      <p style={{fontSize:"clamp(26px,3vw,44px)",fontWeight:900,margin:0,
                        background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,
                        WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
                        <Counter to={s.value} suffix={s.suffix} active={statsIO.visible}/>
                      </p>
                      <p style={{fontSize:11.5,color:"rgba(255,255,255,.4)",margin:"6px 0 0",fontWeight:600,letterSpacing:"0.07em",textTransform:"uppercase"}}>
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ══ STORY ══ */}
        <section className="ab-section-pad" style={{background:T.navy0}}>
          <div style={{maxWidth:1180,margin:"0 auto"}}>
            <div className="ab-story-grid">

              <FadeUp>
                <div>
                  <p style={{color:T.teal,fontSize:11,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:14}}>— Our Story —</p>
                  <h2 style={{fontSize:"clamp(24px,2.8vw,38px)",fontWeight:900,lineHeight:1.2,marginBottom:28}}>
                    From Bangalore to Canada —{" "}
                    <span style={{background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
                      The NNC Digital Story
                    </span>
                  </h2>
                  {[
                    "Nakshatra Namaha Creations Pvt. Ltd. was founded in Bangalore, India — a city synonymous with world-class software engineering. Over 8+ years, the company built a reputation as one of Karnataka's most trusted digital studios, delivering 565+ projects across website development, mobile apps, digital marketing, corporate video, 2D animation, B2B marketing, and more.",
                    "In response to increasing demand from businesses in Canada, the United States, and the United Kingdom who needed a trustworthy offshore technology partner — NNC Digital Solutions was launched as Nakshatra Namaha Creations' dedicated international brand.",
                    "NNC Digital is not a new company trying to build a reputation. It is the international expression of a decade of proven capability — backed by the people, processes, and portfolio of one of India's most capable digital studios.",
                  ].map((para,i)=>(
                    <p key={i} style={{color:"rgba(255,255,255,.52)",fontSize:14.5,lineHeight:1.85,
                      margin:"0 0 18px",opacity:0,animation:`abRowIn .6s ease ${.1+i*.15}s both`}}>
                      {para}
                    </p>
                  ))}
                  <div style={{
                    marginTop:22,padding:"18px 22px",borderRadius:12,
                    background:"rgba(0,201,167,.06)",border:"1px solid rgba(0,201,167,.2)",
                    display:"flex",alignItems:"center",gap:14,
                    transition:"transform .25s,background .25s",cursor:"default",
                  }}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateX(6px)";(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,.1)";}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,.06)";}}
                  >
                    <span style={{fontSize:28}}>🇮🇳</span>
                    <div>
                      <p style={{fontSize:13,fontWeight:700,color:"#fff",margin:0}}>Bangalore → Toronto · New York · London</p>
                      <p style={{fontSize:12,color:"rgba(255,255,255,.4)",margin:"3px 0 0"}}>One trusted studio. Three international markets.</p>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div style={{position:"relative"}}>
                  <div style={{
                    borderRadius:24,overflow:"hidden",
                    border:"1px solid rgba(0,201,167,.2)",
                    boxShadow:`0 32px 80px rgba(0,0,0,.5),0 0 60px rgba(0,201,167,.08)`,
                    position:"relative",aspectRatio:"4/3",
                    transition:"transform .4s ease,box-shadow .4s ease",
                  }}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="scale(1.02) rotateY(-2deg)";(e.currentTarget as HTMLElement).style.boxShadow=`0 40px 100px rgba(0,0,0,.6),0 0 80px rgba(0,201,167,.15)`;}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.boxShadow=`0 32px 80px rgba(0,0,0,.5),0 0 60px rgba(0,201,167,.08)`;}}
                  >
                    <Image src="/NNCLOGO.jpg" alt="NNC Digital" fill style={{objectFit:"cover"}}/>
                    <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(5,14,30,.85) 0%,transparent 50%)"}}/>
                    <div style={{position:"absolute",left:0,right:0,height:2,pointerEvents:"none",
                      background:"linear-gradient(90deg,transparent,rgba(0,201,167,.5),transparent)",
                      animation:"abScan 4s linear infinite"}}/>
                    <div style={{position:"absolute",bottom:24,left:24,right:24}}>
                      <p style={{fontSize:13,fontWeight:700,color:"#fff",margin:0}}>NNC Digital Solutions</p>
                      <p style={{fontSize:11.5,color:T.teal,margin:"4px 0 0"}}>A Nakshatra Namaha Creations Company</p>
                    </div>
                  </div>
                  {/* badge top */}
                  <div style={{
                    position:"absolute",top:-18,right:-18,
                    background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
                    borderRadius:16,padding:"14px 18px",textAlign:"center",
                    boxShadow:`0 8px 32px rgba(0,201,167,.45)`,
                    animation:"abFloat 4s ease-in-out infinite,abBadgePop .8s ease .3s both",
                  }}>
                    <p style={{fontSize:24,fontWeight:900,color:"#000",margin:0,lineHeight:1}}>565+</p>
                    <p style={{fontSize:10,fontWeight:700,color:"rgba(0,0,0,.65)",margin:"3px 0 0",letterSpacing:"0.06em"}}>PROJECTS</p>
                  </div>
                  {/* badge bottom */}
                  <div style={{
                    position:"absolute",bottom:-18,left:-18,
                    background:"rgba(5,14,30,.95)",border:"1px solid rgba(0,201,167,.3)",
                    borderRadius:14,padding:"12px 16px",
                    boxShadow:"0 8px 32px rgba(0,0,0,.45)",
                    animation:"abFloat2 5s ease-in-out infinite,abBadgePop .8s ease .6s both",
                  }}>
                    <p style={{fontSize:12,fontWeight:700,color:"#fff",margin:0}}>🏙️ Bangalore · Toronto · London</p>
                    <p style={{fontSize:10.5,color:"rgba(255,255,255,.4)",margin:"3px 0 0"}}>8+ years of global delivery</p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ══ PARENT COMPANY ══ */}
        <section className="ab-section-pad" style={{
          background:"linear-gradient(180deg,#040e1f 0%,#030b19 100%)",
          position:"relative",overflow:"hidden",
        }}>
          <div style={{position:"absolute",inset:0,pointerEvents:"none",
            backgroundImage:`radial-gradient(rgba(0,201,167,.06) 1px,transparent 1px)`,backgroundSize:"32px 32px"}}/>
          <div style={{maxWidth:1180,margin:"0 auto",position:"relative",zIndex:1}}>

            <FadeUp style={{textAlign:"center",marginBottom:56}as React.CSSProperties}>
              <p style={{color:T.teal,fontSize:11,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:14}}>— Backed By —</p>
              <h2 style={{fontSize:"clamp(24px,2.8vw,38px)",fontWeight:900,marginBottom:12}}>
                Our Parent Company —{" "}
                <span className="ab-shimmer">Nakshatra Namaha Creations Pvt. Ltd.</span>
              </h2>
              <h3 style={{fontSize:16,fontWeight:500,color:"rgba(255,255,255,.45)",margin:0}}>8+ Years of Digital Excellence from Bangalore, India</h3>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div style={{
                borderRadius:20,padding:"40px 44px",marginBottom:48,
                background:"rgba(0,201,167,.05)",border:"1px solid rgba(0,201,167,.2)",
                transition:"box-shadow .3s",
              }}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.boxShadow="0 24px 64px rgba(0,0,0,.4)"}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.boxShadow=""}
              >
                <div className="ab-parent-grid">
                  <div>
                    <p style={{fontSize:15,color:"rgba(255,255,255,.55)",lineHeight:1.85,margin:0}}>
                      Headquartered in <strong style={{color:"#fff"}}>Bengaluru, Karnataka</strong> — India&apos;s Silicon Valley — with offices in Mysore, Mumbai, and Hyderabad. A full-spectrum digital studio combining creative excellence with engineering rigour.
                    </p>
                    <a href="https://www.nakshatranamahacreations.com" target="_blank" rel="noopener noreferrer"
                      style={{display:"inline-flex",alignItems:"center",gap:8,marginTop:20,fontSize:13.5,fontWeight:700,color:T.teal,textDecoration:"none",transition:"gap .2s"}}
                      onMouseEnter={e=>(e.currentTarget as HTMLElement).style.gap="16px"}
                      onMouseLeave={e=>(e.currentTarget as HTMLElement).style.gap="8px"}
                    >🌐 www.nakshatranamahacreations.com →</a>
                  </div>
                  <div className="ab-parent-stats">
                    {[{n:"8+",l:"Years Active"},{n:"565+",l:"Projects"},{n:"100+",l:"Team Size"},{n:"4",l:"Indian Offices"}].map((s,i)=>(
                      <div key={i} style={{
                        textAlign:"center",padding:"20px 12px",borderRadius:14,
                        background:"rgba(0,201,167,.06)",border:"1px solid rgba(0,201,167,.15)",
                        transition:"transform .25s,background .25s",cursor:"default",
                      }}
                        onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-6px)";(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,.12)";}}
                        onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,.06)";}}
                      >
                        <p style={{fontSize:28,fontWeight:900,color:T.teal,margin:0}}>{s.n}</p>
                        <p style={{fontSize:11,color:"rgba(255,255,255,.4)",margin:"4px 0 0",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"}}>{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Marquee tags */}
            <FadeUp delay={0.15}>
              <h3 style={{fontSize:12,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,.35)",marginBottom:16}}>Parent Company Services</h3>
              <div style={{overflow:"hidden",marginBottom:48}}>
                <div className="ab-tag-track">
                  {[...PARENT_SERVICES,...PARENT_SERVICES].map((s,i)=>(
                    <span key={i} style={{
                      flexShrink:0,fontSize:13,fontWeight:600,color:"rgba(255,255,255,.72)",
                      background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.1)",
                      padding:"8px 18px",borderRadius:30,whiteSpace:"nowrap",
                      transition:"background .2s,color .2s",cursor:"default",
                    }}
                      onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,.1)";(e.currentTarget as HTMLElement).style.color=T.teal;}}
                      onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.05)";(e.currentTarget as HTMLElement).style.color="rgba(255,255,255,.72)";}}
                    >{s}</span>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Comparison table */}
            <FadeUp delay={0.2}>
              <div style={{borderRadius:16,overflow:"hidden",border:"1px solid rgba(255,255,255,.08)"}}>
                <div className="ab-comp-cols" style={{background:"rgba(0,201,167,.08)",borderBottom:"1px solid rgba(0,201,167,.2)",padding:"16px 24px"}}>
                  {["Metric","Nakshatra Namaha Creations","NNC Digital (International)"].map(h=>(
                    <p key={h} style={{fontSize:11,fontWeight:700,color:T.teal,textTransform:"uppercase",letterSpacing:"0.1em",margin:0}}>{h}</p>
                  ))}
                </div>
                {COMPARISON.map((row,i)=>(
                  <div key={i} className="ab-comp-row ab-comp-cols" style={{
                    padding:"18px 24px",
                    borderBottom:i<COMPARISON.length-1?"1px solid rgba(255,255,255,.05)":"none",
                    animation:`abRowIn .5s ease ${i*.1}s both`,
                  }}>
                    <p style={{fontSize:13,fontWeight:700,color:"rgba(255,255,255,.6)",margin:0}}>{row.metric}</p>
                    <p style={{fontSize:13,color:"rgba(255,255,255,.85)",margin:0}}>{row.parent}</p>
                    <p style={{fontSize:13,color:T.teal,fontWeight:600,margin:0}}>{row.nnc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ══ WHY WE LAUNCHED ══ */}
        <section className="ab-section-pad" style={{background:T.navy0}}>
          <div style={{maxWidth:1180,margin:"0 auto"}}>
            <FadeUp style={{textAlign:"center",marginBottom:56}as React.CSSProperties}>
              <p style={{color:T.teal,fontSize:11,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:14}}>— Our Purpose —</p>
              <h2 style={{fontSize:"clamp(24px,2.8vw,38px)",fontWeight:900,margin:0}}>
                Why We Launched NNC Digital for the{" "}
                <span style={{background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
                  North American &amp; UK Market
                </span>
              </h2>
            </FadeUp>

            <div className="ab-why-grid">
              <FadeUp delay={0.08}>
                <div style={{
                  borderRadius:20,padding:"40px 36px",height:"100%",
                  background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.08)",
                  transition:"border-color .3s,transform .3s",
                }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,80,80,.28)";(e.currentTarget as HTMLElement).style.transform="translateY(-4px)";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,.08)";(e.currentTarget as HTMLElement).style.transform="";}}
                >
                  <div style={{width:48,height:48,borderRadius:14,marginBottom:24,background:"rgba(255,80,80,.1)",border:"1px solid rgba(255,80,80,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>🔍</div>
                  <h3 style={{fontSize:18,fontWeight:800,color:"#fff",marginBottom:16}}>The Gap We Saw</h3>
                  <p style={{color:"rgba(255,255,255,.5)",fontSize:14.5,lineHeight:1.85,margin:"0 0 14px"}}>
                    Businesses in Canada, the USA, and the UK face a common challenge: local agencies charge premium prices for work that can be delivered at a fraction of the cost — without any quality reduction — by the right offshore partner.
                  </p>
                  <p style={{color:"rgba(255,255,255,.5)",fontSize:14.5,lineHeight:1.85,margin:0}}>
                    Most offshore agencies fail because they don&apos;t understand the regulatory environment, commercial culture, or specific needs of Western businesses.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.14}>
                <div style={{
                  borderRadius:20,padding:"40px 36px",height:"100%",
                  background:"rgba(0,201,167,.04)",border:"1px solid rgba(0,201,167,.18)",
                  transition:"border-color .3s,transform .3s",
                }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(0,201,167,.4)";(e.currentTarget as HTMLElement).style.transform="translateY(-4px)";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(0,201,167,.18)";(e.currentTarget as HTMLElement).style.transform="";}}
                >
                  <div style={{width:48,height:48,borderRadius:14,marginBottom:24,background:"rgba(0,201,167,.1)",border:"1px solid rgba(0,201,167,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>✅</div>
                  <h3 style={{fontSize:18,fontWeight:800,color:"#fff",marginBottom:20}}>The Solution We Built</h3>
                  <div style={{display:"flex",flexDirection:"column",gap:12}}>
                    {WHY_SOLUTIONS.map((item,i)=>(
                      <div key={i} className="ab-why-item" style={{
                        display:"flex",gap:12,alignItems:"flex-start",
                        padding:"10px 12px",borderRadius:10,
                        background:"rgba(0,201,167,.03)",
                        animation:`abRowIn .5s ease ${.2+i*.1}s both`,
                      }}>
                        <div style={{
                          width:22,height:22,borderRadius:"50%",flexShrink:0,marginTop:1,
                          background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
                          display:"flex",alignItems:"center",justifyContent:"center",
                          fontSize:11,color:"#000",fontWeight:900,
                        }}>✓</div>
                        <p style={{color:"rgba(255,255,255,.7)",fontSize:14,lineHeight:1.65,margin:0}}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ══ VALUES + OFFICES + CTA ══ */}
        <section className="ab-section-pad" style={{background:"linear-gradient(180deg,#040e1f 0%,#030b19 100%)",position:"relative"}}>
          <div style={{maxWidth:1180,margin:"0 auto"}}>

            <FadeUp style={{textAlign:"center",marginBottom:52}as React.CSSProperties}>
              <p style={{color:T.teal,fontSize:11,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:14}}>— Our Values —</p>
              <h2 style={{fontSize:"clamp(24px,2.8vw,38px)",fontWeight:900,margin:0}}>
                What We{" "}
                <span style={{background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Stand For</span>
              </h2>
            </FadeUp>

            <div className="ab-values-grid" style={{marginBottom:88}}>
              {VALUES.map((v,i)=>(
                <FadeUp key={i} delay={0.06*i}>
                  <div className="ab-val-card"
                    onMouseEnter={()=>setHoveredVal(i)} onMouseLeave={()=>setHoveredVal(null)}
                    style={{
                      background:hoveredVal===i?"rgba(0,201,167,.07)":"rgba(255,255,255,.03)",
                      border:`1px solid ${hoveredVal===i?"rgba(0,201,167,.38)":"rgba(255,255,255,.08)"}`,
                      boxShadow:hoveredVal===i?"0 24px 60px rgba(0,0,0,.45)":"none",
                    }}
                  >
                    {hoveredVal===i && <div style={{position:"absolute",top:0,left:0,right:0,height:2,borderRadius:"18px 18px 0 0",background:`linear-gradient(90deg,transparent,${T.teal},transparent)`}}/>}
                    <div style={{fontSize:34,marginBottom:16,display:"inline-block",transition:"transform .3s",transform:hoveredVal===i?"scale(1.22) rotate(-5deg)":"scale(1)"}}>{v.icon}</div>
                    <p style={{fontSize:15.5,fontWeight:800,color:"#fff",marginBottom:8}}>{v.title}</p>
                    <p style={{fontSize:13.5,color:"rgba(255,255,255,.45)",lineHeight:1.7,margin:0}}>{v.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Offices */}
            <FadeUp style={{textAlign:"center",marginBottom:36}as React.CSSProperties}>
              <h2 style={{fontSize:"clamp(22px,2.4vw,34px)",fontWeight:900}}>
                Global{" "}
                <span style={{background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Offices</span>
              </h2>
            </FadeUp>

            <div className="ab-offices-grid" style={{marginBottom:80}}>
              <FadeUp delay={0.08}>
                <div style={{borderRadius:20,padding:"36px 32px",background:"rgba(0,201,167,.05)",border:"1px solid rgba(0,201,167,.2)",transition:"transform .3s,box-shadow .3s"}}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-4px)";(e.currentTarget as HTMLElement).style.boxShadow="0 20px 50px rgba(0,0,0,.35)";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.boxShadow="";}}
                >
                  <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:T.teal,marginBottom:24}}>International Offices</p>
                  <div style={{display:"flex",flexDirection:"column",gap:12}}>
                    {INT_OFFICES.map((o,i)=>(
                      <div key={i} className="ab-office-row" style={{
                        display:"flex",alignItems:"center",gap:14,
                        padding:"12px 14px",borderRadius:12,
                        background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)",
                        animation:`abRowIn .5s ease ${.1+i*.1}s both`,
                      }}>
                        <span style={{fontSize:24}}>{o.flag}</span>
                        <div>
                          <p style={{fontSize:14,fontWeight:700,color:"#fff",margin:0}}>{o.city}</p>
                          <p style={{fontSize:13,color:T.teal,margin:"2px 0 0",fontWeight:600}}>{o.phone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.14}>
                <div style={{borderRadius:20,padding:"36px 32px",background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.08)",transition:"transform .3s,box-shadow .3s"}}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-4px)";(e.currentTarget as HTMLElement).style.boxShadow="0 20px 50px rgba(0,0,0,.35)";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.boxShadow="";}}
                >
                  <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(255,255,255,.38)",marginBottom:24}}>India Offices — Nakshatra Namaha Creations</p>
                  <div style={{display:"flex",flexDirection:"column",gap:12}}>
                    {INDIA_OFFICES.map((o,i)=>(
                      <div key={i} className="ab-office-row" style={{
                        display:"flex",alignItems:"center",gap:14,
                        padding:"12px 14px",borderRadius:12,
                        background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.05)",
                        animation:`abRowIn .5s ease ${.1+i*.1}s both`,
                      }}>
                        <span style={{fontSize:24}}>{o.flag}</span>
                        <div>
                          <p style={{fontSize:14,fontWeight:700,color:"#fff",margin:0}}>{o.city}</p>
                          {o.phone&&<p style={{fontSize:12.5,color:"rgba(255,255,255,.4)",margin:"2px 0 0"}}>{o.phone}</p>}
                        </div>
                      </div>
                    ))}
                    <div style={{paddingTop:14,borderTop:"1px solid rgba(255,255,255,.07)"}}>
                      <p style={{fontSize:12.5,color:"rgba(255,255,255,.35)",margin:0}}>✉️ info@nakshatranamahacreations.com</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Final CTA */}
            <FadeUp delay={0.1}>
              <div className="ab-cta-inner" style={{
                borderRadius:24,padding:"64px 52px",textAlign:"center",
                background:`linear-gradient(135deg,${T.tealDark}22 0%,rgba(5,14,30,.9) 50%,${T.navy0} 100%)`,
                border:"1px solid rgba(0,201,167,.22)",
                position:"relative",overflow:"hidden",
                transition:"box-shadow .4s",
              }}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.boxShadow="0 40px 100px rgba(0,0,0,.5),0 0 80px rgba(0,201,167,.1)"}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.boxShadow=""}
              >
                <div style={{position:"absolute",width:500,height:500,borderRadius:"50%",
                  background:`radial-gradient(circle,${T.teal}12 0%,transparent 65%)`,
                  top:"50%",left:"50%",transform:"translate(-50%,-50%)",
                  animation:"abPulse 5s ease-in-out infinite",pointerEvents:"none"}}/>
                <div style={{position:"absolute",width:300,height:300,borderRadius:"50%",
                  border:"1px dashed rgba(0,201,167,.1)",
                  top:"50%",left:"50%",transform:"translate(-50%,-50%)",
                  animation:"abSpin 25s linear infinite",pointerEvents:"none"}}/>
                <div style={{position:"relative",zIndex:1}}>
                  <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:T.teal,marginBottom:16}}>— Get Started —</p>
                  <h2 style={{fontSize:"clamp(22px,2.6vw,38px)",fontWeight:900,marginBottom:16}}>
                    Ready to Start a{" "}
                    <span style={{background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Conversation?</span>
                  </h2>
                  <p style={{color:"rgba(255,255,255,.5)",fontSize:15.5,lineHeight:1.8,maxWidth:540,margin:"0 auto 40px"}}>
                    Whether you have a fully scoped project or just a problem you&apos;re trying to solve — we&apos;d love to talk. We&apos;ll respond within 24 hours with honest, practical advice.
                  </p>
                  <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
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