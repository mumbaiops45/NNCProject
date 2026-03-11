// import { useState, useEffect, useRef } from "react";
// import { motion, useInView, useAnimation } from "framer-motion";

// const TEAL = "#00C9A7";

// const COLS = [
//   {
//     title: "Solutions",
//     links: ["CRM Development", "ERP Systems", "Web Applications", "Mobile Apps", "Automation"],
//   },
//   {
//     title: "Industries",
//     links: ["Healthcare", "Real Estate", "E-commerce", "Manufacturing", "Education"],
//   },
//   {
//     title: "Company",
//     links: ["About Us", "Case Studies", "Process", "Blog", "Careers"],
//   },
//   {
//     title: "Connect",
//     links: ["Book a Call", "hello@nncdigital.com", "LinkedIn", "Mumbai · India", "USA · UK · UAE"],
//     special: [false, true, true, false, false],
//   },
// ];

// const SOCIALS = [
//   {
//     label: "in",
//     href: "#",
//     title: "LinkedIn",
//     svg: (
//       <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
//         <circle cx="4" cy="4" r="2" />
//       </svg>
//     ),
//   },
//   {
//     label: "tw",
//     href: "#",
//     title: "Twitter / X",
//     svg: (
//       <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
//       </svg>
//     ),
//   },
//   {
//     label: "ig",
//     href: "#",
//     title: "Instagram",
//     svg: (
//       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//         <circle cx="12" cy="12" r="4" />
//         <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
//       </svg>
//     ),
//   },
// ];

// function FooterLink({ children, isEmail, isLinkedIn }: { children: React.ReactNode; isEmail?: boolean; isLinkedIn?: boolean }) {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <a
//       href="#"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         display: "block",
//         marginBottom: 11,
//         fontSize: 13.5,
//         fontFamily: "'DM Sans', sans-serif",
//         fontWeight: 400,
//         color: hovered ? TEAL : "rgba(255,255,255,0.42)",
//         textDecoration: "none",
//         transition: "color 0.22s ease",
//         letterSpacing: isEmail ? "-0.01em" : "0em",
//       }}
//     >
//       {children}
//     </a>
//   );
// }

// function SocialBtn({ s }) {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <motion.a
//       href={s.href}
//       title={s.title}
//       whileTap={{ scale: 0.9 }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         width: 40,
//         height: 40,
//         borderRadius: "50%",
//         border: `1px solid ${hovered ? "rgba(0,201,167,0.6)" : "rgba(255,255,255,0.12)"}`,
//         display: "grid",
//         placeItems: "center",
//         color: hovered ? TEAL : "rgba(255,255,255,0.38)",
//         textDecoration: "none",
//         cursor: "pointer",
//         transition: "border-color 0.25s, color 0.25s, background 0.25s",
//         background: hovered ? "rgba(0,201,167,0.07)" : "transparent",
//       }}
//     >
//       {s.svg}
//     </motion.a>
//   );
// }

// function AnimatedCounter({ value, suffix = "" }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-40px" });

//   useEffect(() => {
//     if (!inView) return;
//     let start = 0;
//     const duration = 1400;
//     const step = duration / value;
//     const timer = setInterval(() => {
//       start += 1;
//       setCount(start);
//       if (start >= value) clearInterval(timer);
//     }, step);
//     return () => clearInterval(timer);
//   }, [inView, value]);

//   return (
//     <span ref={ref} style={{ color: TEAL, fontVariantNumeric: "tabular-nums" }}>
//       {count}
//       {suffix}
//     </span>
//   );
// }

// const staggerParent = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.07 } },
// };
// const fadeUp = {
//   hidden: { opacity: 0, y: 18 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
// };

// export default function Footer() {
//   const footerRef = useRef(null);
//   const inView = useInView(footerRef, { once: true, margin: "-60px" });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (inView) controls.start("show");
//   }, [inView, controls]);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
//         * { box-sizing: border-box; margin: 0; padding: 0; }
//         html, body { background: #020810; }

//         .footer-divider-line {
//           width: 100%;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(0,201,167,0.18) 30%, rgba(0,201,167,0.18) 70%, transparent);
//           margin-bottom: 64px;
//         }

//         .stat-card {
//           background: rgba(255,255,255,0.025);
//           border: 1px solid rgba(255,255,255,0.06);
//           border-radius: 12px;
//           padding: 22px 28px;
//           flex: 1;
//         }

//         .footer-bottom-link:hover { color: ${TEAL} !important; }

//         @media (max-width: 900px) {
//           .footer-grid { grid-template-columns: 1fr 1fr !important; }
//           .footer-stats { flex-direction: column !important; gap: 12px !important; }
//         }
//         @media (max-width: 560px) {
//           .footer-grid { grid-template-columns: 1fr !important; }
//           .footer-root { padding: 56px 24px 32px !important; }
//           .footer-bottom { flex-direction: column !important; text-align: center; gap: 16px !important; }
//         }
//       `}</style>

//       <footer
//         ref={footerRef}
//         className="footer-root"
//         style={{
//           background: "#020810",
//           borderTop: "1px solid rgba(255,255,255,0.04)",
//           padding: "80px 56px 40px",
//           fontFamily: "'DM Sans', sans-serif",
//         }}
//       >
//         <div style={{ maxWidth: 1280, margin: "0 auto" }}>

//           {/* Stats strip */}
//           <motion.div
//             variants={staggerParent}
//             initial="hidden"
//             animate={controls}
//             style={{ display: "flex", gap: 16, marginBottom: 64 }}
//             className="footer-stats"
//           >
//             {[
//               { num: 120, suffix: "+", label: "Projects Delivered" },
//               { num: 98, suffix: "%", label: "Client Satisfaction" },
//               { num: 6, suffix: "+", label: "Years of Expertise" },
//               { num: 3, suffix: " continents", label: "Global Presence" },
//             ].map((s) => (
//               <motion.div key={s.label} variants={fadeUp} className="stat-card">
//                 <p style={{ fontSize: 28, fontWeight: 600, fontFamily: "'DM Mono', monospace", letterSpacing: "-0.03em", marginBottom: 4 }}>
//                   <AnimatedCounter value={s.num} suffix={s.suffix} />
//                 </p>
//                 <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
//                   {s.label}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>

//           <div className="footer-divider-line" />

//           {/* Main grid */}
//           <motion.div
//             variants={staggerParent}
//             initial="hidden"
//             animate={controls}
//             className="footer-grid"
//             style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: "48px 40px", marginBottom: 64 }}
//           >
//             {/* Brand column */}
//             <motion.div variants={fadeUp}>
//               {/* Logo */}
//               <div style={{ marginBottom: 20 }}>
//                 <img
//                   src="/NNCLOGO.jpg"
//                   alt="NNC Digital"
//                   style={{
//                     width: 180,
//                     height: "auto",
//                     objectFit: "contain",
//                     objectPosition: "left center",
//                     borderRadius: 8,
//                     display: "block",
//                   }}
//                 />
//               </div>

//               <p style={{ fontSize: 13.5, lineHeight: 1.78, color: "rgba(255,255,255,0.36)", maxWidth: 230, marginBottom: 10 }}>
//                 Full-stack technology and automation partner. Building digital ecosystems that drive measurable growth.
//               </p>
//               <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.18)", marginBottom: 28, fontFamily: "'DM Mono', monospace", letterSpacing: "0.03em" }}>
//                 Backed by Nakshatra Namaha Creations
//               </p>

//               {/* Social row */}
//               <div style={{ display: "flex", gap: 10 }}>
//                 {SOCIALS.map((s) => (
//                   <SocialBtn key={s.label} s={s} />
//                 ))}
//               </div>

//               {/* Status badge */}
//               <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 28, padding: "7px 14px", borderRadius: 999, background: "rgba(0,201,167,0.07)", border: "1px solid rgba(0,201,167,0.18)" }}>
//                 <span style={{ width: 7, height: 7, borderRadius: "50%", background: TEAL, display: "block", boxShadow: `0 0 8px ${TEAL}` }} />
//                 <span style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "rgba(0,201,167,0.85)", letterSpacing: "0.08em" }}>
//                   ACCEPTING NEW PROJECTS
//                 </span>
//               </div>
//             </motion.div>

//             {/* Link columns */}
//             {COLS.map((col, ci) => (
//               <motion.div key={col.title} variants={fadeUp}>
//                 <p style={{
//                   fontSize: 9.5,
//                   letterSpacing: "0.16em",
//                   color: TEAL,
//                   textTransform: "uppercase",
//                   marginBottom: 22,
//                   fontWeight: 600,
//                   fontFamily: "'DM Mono', monospace",
//                 }}>
//                   {col.title}
//                 </p>
//                 {col.links.map((l, i) => (
//                   <FooterLink
//                     key={l}
//                     isEmail={col.special?.[i] && l.includes("@")}
//                     isLinkedIn={col.special?.[i] && l === "LinkedIn"}
//                   >
//                     {l}
//                   </FooterLink>
//                 ))}
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* CTA banner */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//             style={{
//               background: "linear-gradient(135deg, rgba(0,201,167,0.09) 0%, rgba(27,143,110,0.05) 100%)",
//               border: "1px solid rgba(0,201,167,0.14)",
//               borderRadius: 16,
//               padding: "32px 40px",
//               marginBottom: 48,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               flexWrap: "wrap",
//               gap: 20,
//             }}
//           >
//             <div>
//               <p style={{ fontSize: 18, fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: 6, letterSpacing: "-0.02em" }}>
//                 Ready to build something remarkable?
//               </p>
//               <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", fontFamily: "'DM Mono', monospace" }}>
//                 Let's talk about your next project.
//               </p>
//             </div>
//             <CTAButton />
//           </motion.div>

//           {/* Bottom bar */}
//           <div
//             className="footer-bottom"
//             style={{
//               borderTop: "1px solid rgba(255,255,255,0.05)",
//               paddingTop: 28,
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               flexWrap: "wrap",
//               gap: 12,
//             }}
//           >
//             <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em", fontFamily: "'DM Mono', monospace" }}>
//               © 2026 NNC Digital Solutions. All rights reserved.
//             </p>
//             <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
//               {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
//                 <a
//                   key={l}
//                   href="#"
//                   className="footer-bottom-link"
//                   style={{
//                     fontSize: 12,
//                     color: "rgba(255,255,255,0.26)",
//                     textDecoration: "none",
//                     fontFamily: "'DM Sans', sans-serif",
//                     transition: "color 0.2s",
//                   }}
//                 >
//                   {l}
//                 </a>
//               ))}
//             </div>
//             <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em", fontFamily: "'DM Mono', monospace" }}>
//               Engineered for growth.
//             </p>
//           </div>

//         </div>
//       </footer>
//     </>
//   );
// }

// function CTAButton() {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <motion.a
//       href="#"
//       whileTap={{ scale: 0.97 }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         display: "inline-flex",
//         alignItems: "center",
//         gap: 10,
//         padding: "13px 28px",
//         borderRadius: 10,
//         background: hovered
//           ? "linear-gradient(135deg, #00D9B4 0%, #1B9F7E 100%)"
//           : "linear-gradient(135deg, #00C9A7 0%, #1B8F6E 100%)",
//         color: "#020810",
//         fontWeight: 600,
//         fontSize: 13.5,
//         fontFamily: "'DM Sans', sans-serif",
//         textDecoration: "none",
//         letterSpacing: "-0.01em",
//         transition: "background 0.25s, box-shadow 0.25s",
//         boxShadow: hovered ? "0 8px 28px rgba(0,201,167,0.32)" : "0 4px 14px rgba(0,201,167,0.16)",
//         cursor: "pointer",
//         whiteSpace: "nowrap",
//       }}
//     >
//       Book a Call
//       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M5 12h14M12 5l7 7-7 7" />
//       </svg>
//     </motion.a>
//   );
// }
import React from 'react'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer