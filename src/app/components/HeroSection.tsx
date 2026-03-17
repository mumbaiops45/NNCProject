

// // "use client";
// // import { useState, useRef, useEffect, CSSProperties } from "react";
// // import { useRouter } from "next/navigation";
// // import Link from "next/link";

// // const TEAL      = "#00C9A7";
// // const TEAL_DARK = "#00a07a";
// // const NAVY0     = "#010812";
// // const NAVY1     = "#030B18";
// // const NAVY2     = "#061425";

// // // ── Animated counter ─────────────────────────────────────────────────────────
// // function useInView() {
// //   const ref = useRef<HTMLDivElement>(null);
// //   const [inView, setInView] = useState(false);
// //   useEffect(() => {
// //     const el = ref.current; if (!el) return;
// //     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
// //     obs.observe(el);
// //     return () => obs.disconnect();
// //   }, []);
// //   return [ref, inView] as const;
// // }

// // function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
// //   const [ref, inView] = useInView();
// //   const [v, setV] = useState(0);
// //   useEffect(() => {
// //     if (!inView) return;
// //     let cur = 0; const step = to / 60;
// //     const t = setInterval(() => {
// //       cur += step;
// //       if (cur >= to) { setV(to); clearInterval(t); } else setV(Math.round(cur));
// //     }, 16);
// //     return () => clearInterval(t);
// //   }, [inView, to]);
// //   return <span ref={ref}>{v}{suffix}</span>;
// // }

// // // ── Input style ───────────────────────────────────────────────────────────────
// // const inp: CSSProperties = {
// //   width: "100%", borderRadius: 9, padding: "13px 16px", fontSize: 14,
// //   fontFamily: "'Poppins', sans-serif", outline: "none", boxSizing: "border-box",
// //   background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)",
// //   color: "#fff", transition: "border-color .2s",
// // };

// // const TRUST_BADGES = [
// //   { icon: "🔵", label: "Google Partner" },
// //   { icon: "🏆", label: "ISO Certified" },
// //   { icon: "🔒", label: "GDPR Compliant" },
// //   { icon: "🍁", label: "PIPEDA Compliant" },
// //   { icon: "⭐", label: "Clutch Top Agency" },
// // ];

// // const STATS = [
// //   { n: 100, s: "+", label: "Projects Delivered" },
// //   { n: 10,  s: "+", label: "Years of Combined Expertise" },
// //   { n: 50,  s: "+", label: "Clients Globally" },
// //   { n: 98,  s: "%", label: "Client Retention Rate" },
// // ];

// // const SERVICES = [
// //   "CRM Development", "ERP Development", "Web Development",
// //   "Mobile App Development", "Marketing Automation",
// //   "Salesforce CRM", "Digital Transformation", "SEO & Digital Marketing",
// // ];

// // export default function HeroSection() {
// //   const router = useRouter();
// //   const [form, setForm] = useState({ fname:"", lname:"", cc:"+1", phone:"", email:"", service:"", message:"" });
// //   const [submitted, setSubmitted] = useState(false);
// //   const [windowWidth, setWindowWidth] = useState(0);

// //   // Custom cursor
// //   const [cursor, setCursor] = useState({ x: -100, y: -100 });
// //   const [cursorBig, setCursorBig] = useState(false);
  
// //   useEffect(() => {
// //     setWindowWidth(window.innerWidth);
// //     const handleResize = () => setWindowWidth(window.innerWidth);
// //     window.addEventListener("resize", handleResize);
    
// //     const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
// //     window.addEventListener("mousemove", move);
    
// //     return () => {
// //       window.removeEventListener("resize", handleResize);
// //       window.removeEventListener("mousemove", move);
// //     };
// //   }, []);

// //   const isMobile = windowWidth <= 600;
// //   const isTablet = windowWidth > 600 && windowWidth <= 960;
// //   const isLaptop = windowWidth > 960 && windowWidth <= 1280;

// //   const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
// //     setForm(f => ({ ...f, [k]: e.target.value }));

// //   const handleSubmit = () => {
// //     if (form.fname && form.email) setSubmitted(true);
// //   };

// //   // Redirect to contact page
// //   const handleBookCall = () => {
// //     router.push('/contact');
// //   };

// //   // Responsive styles
// //   const getHeroPadding = () => {
// //     if (isMobile) return "30px 12px 30px";
// //     if (isTablet) return "50px 24px 50px";
// //     if (isLaptop) return "70px 36px 60px";
// //     return "100px 48px 80px";
// //   };

// //   const getTitleSize = () => {
// //     if (isMobile) return "clamp(28px, 7vw, 34px)";
// //     if (isTablet) return "clamp(34px, 5vw, 42px)";
// //     if (isLaptop) return "clamp(40px, 4.5vw, 48px)";
// //     return "clamp(48px, 4.2vw, 60px)";
// //   };

// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

// //         /* ── Custom Cursor ── */
// //         @media (min-width: 961px) {
// //           * { cursor: none !important; }
// //         }
        
// //         .nnc-cursor-dot {
// //           position: fixed;
// //           width: 10px; height: 10px;
// //           border-radius: 50%;
// //           background: ${TEAL};
// //           pointer-events: none;
// //           z-index: 99999;
// //           transform: translate(-50%, -50%);
// //           transition: width .15s, height .15s, background .15s;
// //           mix-blend-mode: difference;
// //         }
// //         .nnc-cursor-ring {
// //           position: fixed;
// //           width: 36px; height: 36px;
// //           border-radius: 50%;
// //           border: 2px solid ${TEAL};
// //           pointer-events: none;
// //           z-index: 99998;
// //           transform: translate(-50%, -50%);
// //           transition: width .25s ease, height .25s ease, border-color .25s, left .08s ease, top .08s ease;
// //           opacity: 0.55;
// //         }
// //         .nnc-cursor-ring.big { width: 56px; height: 56px; border-color: rgba(0,201,167,.4); }

// //         /* ── Animations ── */
// //         @keyframes orbPulse { 0%,100%{opacity:.35;transform:scale(1)} 50%{opacity:.8;transform:scale(1.1)} }
// //         @keyframes shimmer  { from{left:-100%} to{left:120%} }
// //         @keyframes pulse    { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.6)} }
// //         @keyframes fadeUp   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
// //         @keyframes badgeIn  { from{opacity:0;transform:scale(.9)} to{opacity:1;transform:scale(1)} }

// //         .hero-fade { animation: fadeUp .7s ease both; }
// //         .hero-fade-1 { animation-delay: .1s; }
// //         .hero-fade-2 { animation-delay: .25s; }
// //         .hero-fade-3 { animation-delay: .4s; }
// //         .hero-fade-4 { animation-delay: .55s; }
// //         .hero-fade-5 { animation-delay: .7s; }

// //         .pulse-dot { animation: pulse 2s ease-in-out infinite; }

// //         /* ── Inputs ── */
// //         .h-inp:focus { border-color: rgba(0,201,167,.7) !important; box-shadow: 0 0 0 3px rgba(0,201,167,.08); }
// //         .h-inp option { background: #0a1f38; color: #fff; }

// //         /* ── Buttons ── */
// //         .hero-btn-primary {
// //           display: inline-flex; align-items: center; justify-content: center;
// //           gap: 10px;
// //           padding: 15px 30px; 
// //           border-radius: 10px;
// //           background: linear-gradient(135deg, ${TEAL}, ${TEAL_DARK});
// //           color: #000; 
// //           font-weight: 700; 
// //           font-size: 15px;
// //           font-family: 'Poppins', sans-serif; 
// //           border: none;
// //           transition: transform .2s, box-shadow .2s; 
// //           white-space: nowrap;
// //           cursor: pointer;
// //         }
// //         .hero-btn-primary:hover { 
// //           transform: translateY(-2px); 
// //           box-shadow: 0 14px 40px rgba(0,201,167,.4); 
// //         }

// //         .hero-btn-outline {
// //           display: inline-flex; align-items: center; justify-content: center;
// //           gap: 8px;
// //           padding: 15px 30px; 
// //           border-radius: 10px;
// //           background: transparent;
// //           border: 1.5px solid rgba(0,201,167,.4);
// //           color: ${TEAL}; 
// //           font-weight: 600; 
// //           font-size: 15px;
// //           font-family: 'Poppins', sans-serif;
// //           transition: border-color .2s, background .2s; 
// //           white-space: nowrap;
// //           cursor: pointer;
// //         }
// //         .hero-btn-outline:hover { 
// //           border-color: ${TEAL}; 
// //           background: rgba(0,201,167,.07); 
// //         }

// //         .form-cta {
// //           width: 100%; 
// //           padding: 15px; 
// //           border-radius: 10px;
// //           background: linear-gradient(135deg, ${TEAL}, ${TEAL_DARK});
// //           border: none; 
// //           color: #000; 
// //           font-weight: 700; 
// //           font-size: 15px;
// //           font-family: 'Poppins', sans-serif;
// //           transition: transform .2s, box-shadow .2s;
// //           cursor: pointer;
// //         }
// //         .form-cta:hover { 
// //           transform: translateY(-2px); 
// //           box-shadow: 0 12px 36px rgba(0,201,167,.4); 
// //         }

// //         /* ── Trust badges ── */
// //         .trust-badge {
// //           display: inline-flex; align-items: center; gap: 7px;
// //           background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.1);
// //           border-radius: 100px; padding: 7px 16px;
// //           font-size: 12.5px; color: rgba(255,255,255,.7); font-weight: 500;
// //           font-family: 'Poppins', sans-serif;
// //           transition: border-color .2s, background .2s;
// //           animation: badgeIn .5s ease both;
// //         }
// //         .trust-badge:hover { border-color: rgba(0,201,167,.4); background: rgba(0,201,167,.05); color: #fff; }

// //         /* ── Stats bar ── */
// //         .stats-bar {
// //           background: linear-gradient(90deg, #0a2540 0%, #0d2d4a 50%, #0a2540 100%);
// //           border-top: 1px solid rgba(0,201,167,.15);
// //           border-bottom: 1px solid rgba(0,201,167,.15);
// //         }
// //         .stat-card {
// //           text-align: center;
// //           padding: 32px 20px;
// //           border-right: 1px solid rgba(255,255,255,.07);
// //           transition: background .2s;
// //         }
// //         .stat-card:last-child { border-right: none; }
// //         .stat-card:hover { background: rgba(0,201,167,.04); }
// //         .stat-num {
// //           font-size: clamp(28px, 3.5vw, 44px);
// //           font-weight: 900;
// //           background: linear-gradient(135deg, #fff 30%, ${TEAL});
// //           -webkit-background-clip: text;
// //           -webkit-text-fill-color: transparent;
// //           line-height: 1;
// //           font-family: 'Poppins', sans-serif;
// //         }
// //         .stat-label {
// //           font-size: 13px; color: rgba(255,255,255,.45);
// //           font-weight: 500; margin-top: 6px;
// //           font-family: 'Poppins', sans-serif;
// //         }

// //         /* ── Responsive ── */

// //         /* Laptop 960–1280 */
// //         @media (max-width: 1280px) and (min-width: 961px) {
// //           .hero-inner { padding: 60px 36px 56px !important; }
// //           .hero-grid  { gap: 44px !important; grid-template-columns: 1fr 400px !important; }
// //           .hero-btn-primary, .hero-btn-outline { 
// //             padding: 14px 28px !important; 
// //             font-size: 14px !important; 
// //           }
// //         }

// //         /* Tablet 600–960 */
// //         @media (max-width: 960px) {
// //           .hero-inner    { padding: 50px 24px 48px !important; }
// //           .hero-grid     { grid-template-columns: 1fr !important; gap: 40px !important; }
// //           .hero-form-col { max-width: 100% !important; margin: 0 auto !important; }
// //           .stats-grid    { grid-template-columns: 1fr 1fr !important; }
// //           .stat-card     { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,.07) !important; padding: 24px 16px !important; }
// //           .hero-btn-primary, .hero-btn-outline { 
// //             padding: 14px 24px !important; 
// //             font-size: 14px !important; 
// //           }
// //         }

// //         /* Mobile < 600 */
// //         @media (max-width: 600px) {
// //           .hero-inner    { padding: 25px 12px 25px !important; }
// //           .hero-grid     { gap: 25px !important; }
// //           .hero-form-col { 
// //             padding: 20px 16px !important; 
// //             max-width: 100% !important;
// //             width: 100% !important;
// //             margin: 0 auto !important;
// //           }
// //           .hero-btns     { 
// //             flex-direction: column !important; 
// //             gap: 10px !important; 
// //             width: 100% !important;
// //           }
// //           .hero-btn-primary, .hero-btn-outline { 
// //             width: 100% !important; 
// //             justify-content: center !important; 
// //             font-size: 14px !important; 
// //             padding: 13px 20px !important;
// //             white-space: normal !important;
// //           }
// //           .stats-grid    { grid-template-columns: 1fr 1fr !important; }
// //           .stat-card     { padding: 14px 6px !important; }
// //           .stat-num      { font-size: 22px !important; }
// //           .stat-label    { font-size: 10px !important; }
// //           .trust-badge   { 
// //             font-size: 10px !important; 
// //             padding: 4px 8px !important; 
// //           }
// //         }

// //         /* Hide custom cursor on mobile/tablet */
// //         @media (max-width: 960px) {
// //           .nnc-cursor-dot, .nnc-cursor-ring { display: none !important; }
// //         }
// //       `}</style>

// //       {/* Custom Cursor - hidden on mobile/tablet */}
// //       {!isMobile && !isTablet && (
// //         <>
// //           <div className="nnc-cursor-dot" style={{ left: cursor.x, top: cursor.y }} />
// //           <div className={`nnc-cursor-ring${cursorBig ? " big" : ""}`} style={{ left: cursor.x, top: cursor.y }} />
// //         </>
// //       )}

// //       {/* ── HERO ── */}
// //       <section style={{
// //         position: "relative", 
// //         minHeight: isMobile ? "auto" : "100vh", 
// //         display: "flex", 
// //         alignItems: "center",
// //         overflow: "hidden", 
// //         paddingTop: 0,
// //         paddingBottom: 0,
// //         background: `linear-gradient(150deg, ${NAVY0} 0%, ${NAVY1} 55%, ${NAVY2} 100%)`,
// //         fontFamily: "'Poppins', sans-serif",
// //       }}>

// //         {/* Orbs - hide on mobile for performance */}
// //         {!isMobile && [
// //           { left:"2%",  top:"5%",  size: isLaptop ? 600 : 700, color:"rgba(0,201,167,.07)", dur:8 },
// //           { left:"60%", top:"50%", size: isLaptop ? 400 : 500, color:"rgba(31,209,181,.05)", dur:10 },
// //           { left:"40%", top:"80%", size: isLaptop ? 250 : 300, color:"rgba(0,160,122,.06)", dur:6 },
// //         ].map((o, i) => (
// //           <div key={i} style={{
// //             position:"absolute", left:o.left, top:o.top, width:o.size, height:o.size,
// //             borderRadius:"50%", background:`radial-gradient(circle,${o.color} 0%,transparent 65%)`,
// //             animation:`orbPulse ${o.dur}s ease-in-out infinite`, animationDelay:`${i*2}s`,
// //             pointerEvents:"none", zIndex:0,
// //           }}/>
// //         ))}

// //         {/* Grid lines */}
// //         <div style={{
// //           position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
// //           backgroundImage:`linear-gradient(rgba(0,201,167,.03) 1px,transparent 1px),
// //                            linear-gradient(90deg,rgba(0,201,167,.03) 1px,transparent 1px)`,
// //           backgroundSize: isMobile ? "40px 40px" : "60px 60px",
// //         }}/>

// //         <div className="hero-inner" style={{ 
// //           position:"relative", 
// //           zIndex:2, 
// //           width:"100%", 
// //           maxWidth: 1320, 
// //           margin:"0 auto", 
// //           padding: getHeroPadding(),
// //         }}>
// //           <div className="hero-grid" style={{ 
// //             display:"grid", 
// //             gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr 430px", 
// //             gap: isMobile ? 25 : isTablet ? 40 : 60, 
// //             alignItems:"center" 
// //           }}>

// //             {/* ── LEFT ── */}
// //             <div>
// //               {/* Badge */}
// //               <div className="hero-fade hero-fade-1" style={{
// //                 display:"inline-flex", 
// //                 alignItems:"center", 
// //                 gap: isMobile ? 6 : 10,
// //                 background:"rgba(0,201,167,.08)", 
// //                 border:"1px solid rgba(0,201,167,.28)",
// //                 borderRadius:100, 
// //                 padding: isMobile ? "4px 10px" : "8px 20px", 
// //                 marginBottom: isMobile ? 14 : 28,
// //               }}>
// //                 <span className="pulse-dot" style={{ 
// //                   width: isMobile ? 5 : 7, 
// //                   height: isMobile ? 5 : 7, 
// //                   borderRadius:"50%", 
// //                   background:TEAL, 
// //                   display:"block" 
// //                 }}/>
// //                 <span style={{ 
// //                   color:TEAL, 
// //                   fontSize: isMobile ? 8 : 11.5, 
// //                   fontWeight:700, 
// //                   letterSpacing:"0.12em", 
// //                   textTransform:"uppercase",
// //                   whiteSpace: isMobile ? "normal" : "nowrap",
// //                 }}>
// //                   CANADA · USA · UK — POWERED BY INDIA
// //                 </span>
// //               </div>

// //               {/* H1 */}
// //               <h1 className="hero-fade hero-fade-2" style={{
// //                 fontSize: getTitleSize(), 
// //                 fontWeight: 900, 
// //                 lineHeight: isMobile ? 1.2 : 1.1,
// //                 marginBottom: isMobile ? 12 : 24, 
// //                 color:"#fff", 
// //                 letterSpacing:"-0.02em",
// //               }}>
// //                 Build Once.{" "}
// //                 <span style={{
// //                   background:`linear-gradient(135deg,${TEAL},#1fd1b5)`,
// //                   WebkitBackgroundClip:"text", 
// //                   WebkitTextFillColor:"transparent",
// //                 }}>
// //                   Scale Everywhere.
// //                 </span>{" "}
// //                 <br className={isMobile ? "block" : "none"} />
// //                 Automate Everything.
// //               </h1>

// //               {/* Subtext */}
// //               <p className="hero-fade hero-fade-3" style={{
// //                 color:"rgba(255,255,255,.62)", 
// //                 fontSize: isMobile ? 13 : isTablet ? 15 : 16.5, 
// //                 lineHeight: isMobile ? 1.6 : 1.8,
// //                 maxWidth: isMobile ? "100%" : 580, 
// //                 marginBottom: isMobile ? 18 : 36,
// //               }}>
// //                 We design and develop custom CRM, ERP, web, and mobile systems that automate your operations
// //                 and accelerate revenue — for businesses across Canada, USA, and the UK. Backed by{" "}
// //                 <span style={{ color:TEAL, fontWeight:600 }}>10+ years of deep tech expertise</span>{" "}
// //                 from India&apos;s most trusted digital studio.
// //               </p>

// //               {/* CTAs with redirect */}
// //               <div className="hero-btns hero-fade hero-fade-4" style={{
// //                 display:"flex", 
// //                 gap: isMobile ? 10 : 16, 
// //                 flexDirection: isMobile ? "column" : "row",
// //                 marginBottom: isMobile ? 18 : 40,
// //               }}
// //                 onMouseEnter={() => !isMobile && !isTablet && setCursorBig(true)}
// //                 onMouseLeave={() => !isMobile && !isTablet && setCursorBig(false)}
// //               >
// //                 <button 
// //                   className="hero-btn-primary"
// //                   onClick={handleBookCall}
// //                 >
// //                   <span>📅</span> Book a Free Strategy Call
// //                 </button>
// //                 <Link href="/solutions" style={{ textDecoration: "none", width: isMobile ? "100%" : "auto" }}>
// //                   <button className="hero-btn-outline" style={{ width: isMobile ? "100%" : "auto" }}>
// //                     Explore Our Solutions →
// //                   </button>
// //                 </Link>
// //               </div>

// //               {/* Trust Badges */}
// //               <div className="hero-fade hero-fade-5" style={{ 
// //                 display:"flex", 
// //                 flexWrap:"wrap", 
// //                 gap: isMobile ? 4 : 8,
// //                 justifyContent: isMobile ? "center" : "flex-start",
// //                 marginBottom: isMobile ? 14 : 0,
// //               }}>
// //                 {TRUST_BADGES.map((b, i) => (
// //                   <span key={b.label} className="trust-badge" style={{ 
// //                     animationDelay:`${.7 + i * .08}s`,
// //                     padding: isMobile ? "4px 8px" : "7px 16px",
// //                     fontSize: isMobile ? 9 : 12.5,
// //                   }}>
// //                     {b.icon} {b.label}
// //                   </span>
// //                 ))}
// //               </div>

// //               {/* Phone numbers */}
// //               <div className="hero-fade hero-fade-5" style={{
// //                 display:"flex", 
// //                 gap: isMobile ? 12 : 24, 
// //                 marginTop: isMobile ? 14 : 28, 
// //                 flexDirection: isMobile ? "column" : "row",
// //                 alignItems: isMobile ? "flex-start" : "center",
// //               }}>
// //                 {[
// //                   { flag:"🇨🇦", label:"CA:", num:"+1 647-XXX-XXXX" },
// //                   { flag:"🇬🇧", label:"UK:", num:"+44 20-XXXX-XXXX" },
// //                 ].map(p => (
// //                   <a key={p.num} href={`tel:${p.num}`} style={{
// //                     display:"inline-flex", 
// //                     alignItems:"center", 
// //                     gap: isMobile ? 5 : 7,
// //                     color:"rgba(255,255,255,.5)", 
// //                     fontSize: isMobile ? 12 : 13.5, 
// //                     textDecoration:"none",
// //                     fontWeight:500, 
// //                     transition:"color .2s",
// //                   }}
// //                     onMouseEnter={e => !isMobile && !isTablet && (e.currentTarget.style.color = TEAL)}
// //                     onMouseLeave={e => !isMobile && !isTablet && (e.currentTarget.style.color = "rgba(255,255,255,.5)")}
// //                   >
// //                     <span>{p.flag}</span>
// //                     <span style={{ color:"rgba(255,255,255,.3)" }}>{p.label}</span>
// //                     <span>{p.num}</span>
// //                   </a>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* ── RIGHT — Form ── */}
// //             <div className="hero-form-col" style={{
// //               background:"rgba(6,20,37,.92)", 
// //               border:"1px solid rgba(0,201,167,.18)",
// //               borderRadius: isMobile ? 16 : 20, 
// //               padding: isMobile ? "20px 16px" : isTablet ? "28px 24px" : "36px 30px", 
// //               backdropFilter:"blur(24px)",
// //               boxShadow:"0 0 80px rgba(0,201,167,.07)", 
// //               position:"relative", 
// //               overflow:"hidden",
// //               width: "100%",
// //               maxWidth: isMobile ? "100%" : isTablet ? "520px" : "430px",
// //               margin: "0 auto",
// //             }}>
// //               {/* shimmer top bar */}
// //               <div style={{
// //                 position:"absolute", top:0, left:0, height:2, width:"60%",
// //                 background:"linear-gradient(90deg,transparent,#00C9A7,transparent)",
// //                 animation:"shimmer 3s linear infinite",
// //               }}/>

// //               <p style={{ 
// //                 color:TEAL, 
// //                 fontSize: isMobile ? 10 : 10.5, 
// //                 fontWeight:700, 
// //                 letterSpacing:"0.14em", 
// //                 textTransform:"uppercase", 
// //                 marginBottom:5 
// //               }}>
// //                 Free Strategy Consultation
// //               </p>
// //               <h3 style={{ 
// //                 fontWeight:700, 
// //                 fontSize: isMobile ? 18 : 21, 
// //                 marginBottom:3, 
// //                 color:"#fff" 
// //               }}>
// //                 Get a Free Consultation
// //               </h3>
// //               <p style={{ 
// //                 color:"rgba(255,255,255,.38)", 
// //                 fontSize: isMobile ? 11 : 12.5, 
// //                 marginBottom: isMobile ? 14 : 22 
// //               }}>
// //                 Response within 24 hours · No commitment
// //               </p>

// //               {submitted ? (
// //                 <div style={{ textAlign:"center", padding: isMobile ? "20px 0" : "40px 0" }}>
// //                   <div style={{ fontSize: isMobile ? 40 : 52, marginBottom:12 }}>✅</div>
// //                   <p style={{ color:TEAL, fontSize: isMobile ? 16 : 19, fontWeight:700, marginBottom:6 }}>We&apos;ll be in touch!</p>
// //                   <p style={{ color:"rgba(255,255,255,.4)", fontSize: isMobile ? 11 : 13 }}>Expect a reply within 24 business hours.</p>
// //                   <Link href="/">
// //                     <button 
// //                       onClick={() => { setSubmitted(false); setForm({ fname:"", lname:"", cc:"+1", phone:"", email:"", service:"", message:"" }); }} 
// //                       className="form-cta" 
// //                       style={{ marginTop: 12, width: "auto", padding: "10px 20px" }}
// //                     >
// //                       Send Another
// //                     </button>
// //                   </Link>
// //                 </div>
// //               ) : (
// //                 <div style={{ display:"flex", flexDirection:"column", gap: isMobile ? 10 : 10 }}>

// //                   <div style={{ 
// //                     display:"grid", 
// //                     gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", 
// //                     gap: isMobile ? 10 : 10 
// //                   }}>
// //                     <input className="h-inp" style={inp} placeholder="First Name *" value={form.fname} onChange={set("fname")} />
// //                     <input className="h-inp" style={inp} placeholder="Last Name"    value={form.lname} onChange={set("lname")} />
// //                   </div>

// //                   {/* Phone row with country code */}
// //                   <div style={{ 
// //                     display:"grid", 
// //                     gridTemplateColumns: isMobile ? "1fr" : "90px 1fr", 
// //                     gap: isMobile ? 10 : 10 
// //                   }}>
// //                     <select className="h-inp" style={{ ...inp, padding:"13px 10px" }} value={form.cc} onChange={set("cc")}>
// //                       <option value="+1">🇨🇦 +1</option>
// //                       <option value="+44">🇬🇧 +44</option>
// //                       <option value="+91">🇮🇳 +91</option>
// //                       <option value="+1">🇺🇸 +1</option>
// //                     </select>
// //                     <input className="h-inp" style={inp} placeholder="Phone Number" value={form.phone} onChange={set("phone")} />
// //                   </div>

// //                   <input className="h-inp" style={inp} type="email" placeholder="Business Email *" value={form.email} onChange={set("email")} />

// //                   <select className="h-inp"
// //                     style={{ ...inp, color: form.service ? "#fff" : "rgba(255,255,255,.35)" }}
// //                     value={form.service} onChange={set("service")}
// //                   >
// //                     <option value="">Service of Interest</option>
// //                     {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
// //                   </select>

// //                   <textarea className="h-inp"
// //                     style={{ ...inp, resize:"vertical", minHeight: isMobile ? 70 : 80 }}
// //                     rows={3} placeholder="Tell us about your project…"
// //                     value={form.message} onChange={set("message")}
// //                   />

// //                   <button className="form-cta" onClick={handleSubmit}>
// //                     🚀 Get Free Consultation
// //                   </button>

// //                   <p style={{ 
// //                     textAlign:"center", 
// //                     color:"rgba(255,255,255,.22)", 
// //                     fontSize: isMobile ? 9 : 11.5, 
// //                     marginTop:2 
// //                   }}>
// //                     🔒 100% Secure · GDPR &amp; PIPEDA Compliant
// //                   </p>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── STATS BAR ── */}
    
// //     </>
// //   );
// // }



// "use client";
// import { useState, useRef, useEffect, CSSProperties } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// const TEAL      = "#00C9A7";
// const TEAL_DARK = "#00a07a";
// const NAVY0     = "#010812";
// const NAVY1     = "#030B18";
// const NAVY2     = "#061425";

// // ── Animated counter ─────────────────────────────────────────────────────────
// function useInView() {
//   const ref = useRef<HTMLDivElement>(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current; if (!el) return;
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);
//   return [ref, inView] as const;
// }

// function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
//   const [ref, inView] = useInView();
//   const [v, setV] = useState(0);
//   useEffect(() => {
//     if (!inView) return;
//     let cur = 0; const step = to / 60;
//     const t = setInterval(() => {
//       cur += step;
//       if (cur >= to) { setV(to); clearInterval(t); } else setV(Math.round(cur));
//     }, 16);
//     return () => clearInterval(t);
//   }, [inView, to]);
//   return <span ref={ref}>{v}{suffix}</span>;
// }

// // ── Input style ───────────────────────────────────────────────────────────────
// const inp: CSSProperties = {
//   width: "100%", borderRadius: 9, padding: "13px 16px", fontSize: 14,
//   fontFamily: "'Poppins', sans-serif", outline: "none", boxSizing: "border-box",
//   background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)",
//   color: "#fff", transition: "border-color .2s",
// };

// const TRUST_BADGES = [
//   { icon: "🔵", label: "Google Partner" },
//   { icon: "🏆", label: "ISO Certified" },
//   { icon: "🔒", label: "GDPR Compliant" },
//   { icon: "🍁", label: "PIPEDA Compliant" },
//   { icon: "⭐", label: "Clutch Top Agency" },
// ];

// const STATS = [
//   { n: 100, s: "+", label: "Projects Delivered" },
//   { n: 10,  s: "+", label: "Years of Combined Expertise" },
//   { n: 50,  s: "+", label: "Clients Globally" },
//   { n: 98,  s: "%", label: "Client Retention Rate" },
// ];

// const SERVICES = [
//   "CRM Development", "ERP Development", "Web Development",
//   "Mobile App Development", "Marketing Automation",
//   "Salesforce CRM", "Digital Transformation", "SEO & Digital Marketing",
// ];

// export default function HeroSection() {
//   const router = useRouter();
//   const [form, setForm] = useState({ fname:"", lname:"", cc:"+1", phone:"", email:"", service:"", message:"" });
//   const [submitted, setSubmitted] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(0);

//   // Custom cursor
//   const [cursor, setCursor] = useState({ x: -100, y: -100 });
//   const [cursorBig, setCursorBig] = useState(false);
  
//   useEffect(() => {
//     setWindowWidth(window.innerWidth);
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", move);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("mousemove", move);
//     };
//   }, []);

//   // Breakpoints
//   const isMobile  = windowWidth > 0 && windowWidth <= 480;
//   const isSmall   = windowWidth > 480 && windowWidth <= 600;
//   const isTablet  = windowWidth > 600 && windowWidth <= 960;
//   const isLaptop  = windowWidth > 960 && windowWidth <= 1280;
//   const isAnyMobile = windowWidth > 0 && windowWidth <= 600;

//   const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
//     setForm(f => ({ ...f, [k]: e.target.value }));

//   const handleSubmit = () => {
//     if (form.fname && form.email) setSubmitted(true);
//   };

//   const handleBookCall = () => {
//     router.push('/contact');
//   };

//   // ── Responsive helpers ──────────────────────────────────────────────────────
//   const getHeroPadding = () => {
//     if (isMobile)  return "5px 10px 24px";
//     if (isSmall)   return "28px 18px 30px";
//     if (isTablet)  return "44px 24px 44px";
//     if (isLaptop)  return "60px 36px 56px";
//     return "90px 48px 80px";
//   };

//   const getTitleSize = () => {
//     if (isMobile)  return "clamp(22px, 6.5vw, 28px)";
//     if (isSmall)   return "clamp(26px, 6vw, 32px)";
//     if (isTablet)  return "clamp(32px, 5vw, 42px)";
//     if (isLaptop)  return "clamp(38px, 4vw, 46px)";
//     return "clamp(46px, 4vw, 58px)";
//   };

//   const getTitleMarginBottom = () => {
//     if (isMobile)  return 8;
//     if (isSmall)   return 10;
//     if (isTablet)  return 18;
//     return 22;
//   };

//   const getSubtextSize = () => {
//     if (isMobile) return 12;
//     if (isSmall)  return 13;
//     if (isTablet) return 14.5;
//     return 16;
//   };

//   const getFormPadding = () => {
//     if (isMobile)  return "18px 14px";
//     if (isSmall)   return "22px 18px";
//     if (isTablet)  return "28px 24px";
//     return "34px 30px";
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

//         /* ── Custom Cursor ── */
//         @media (min-width: 961px) {
//           * { cursor: none !important; }
//         }

//         .nnc-cursor-dot {
//           position: fixed;
//           width: 10px; height: 10px;
//           border-radius: 50%;
//           background: ${TEAL};
//           pointer-events: none;
//           z-index: 99999;
//           transform: translate(-50%, -50%);
//           transition: width .15s, height .15s, background .15s;
//           mix-blend-mode: difference;
//         }
//         .nnc-cursor-ring {
//           position: fixed;
//           width: 36px; height: 36px;
//           border-radius: 50%;
//           border: 2px solid ${TEAL};
//           pointer-events: none;
//           z-index: 99998;
//           transform: translate(-50%, -50%);
//           transition: width .25s ease, height .25s ease, border-color .25s, left .08s ease, top .08s ease;
//           opacity: 0.55;
//         }
//         .nnc-cursor-ring.big { width: 56px; height: 56px; border-color: rgba(0,201,167,.4); }

//         /* ── Animations ── */
//         @keyframes orbPulse { 0%,100%{opacity:.35;transform:scale(1)} 50%{opacity:.8;transform:scale(1.1)} }
//         @keyframes shimmer  { from{left:-100%} to{left:120%} }
//         @keyframes pulse    { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.6)} }
//         @keyframes fadeUp   { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
//         @keyframes badgeIn  { from{opacity:0;transform:scale(.9)} to{opacity:1;transform:scale(1)} }

//         .hero-fade   { animation: fadeUp .7s ease both; }
//         .hero-fade-1 { animation-delay: .1s; }
//         .hero-fade-2 { animation-delay: .25s; }
//         .hero-fade-3 { animation-delay: .4s; }
//         .hero-fade-4 { animation-delay: .55s; }
//         .hero-fade-5 { animation-delay: .7s; }

//         .pulse-dot { animation: pulse 2s ease-in-out infinite; }

//         /* ── Inputs ── */
//         .h-inp:focus { border-color: rgba(0,201,167,.7) !important; box-shadow: 0 0 0 3px rgba(0,201,167,.08); }
//         .h-inp option { background: #0a1f38; color: #fff; }

//         /* ── Buttons ── */
//         .hero-btn-primary {
//           display: inline-flex; align-items: center; justify-content: center;
//           gap: 8px;
//           padding: 14px 26px;
//           border-radius: 10px;
//           background: linear-gradient(135deg, ${TEAL}, ${TEAL_DARK});
//           color: #000; font-weight: 700; font-size: 14px;
//           font-family: 'Poppins', sans-serif; border: none;
//           transition: transform .2s, box-shadow .2s;
//           white-space: nowrap; cursor: pointer;
//         }
//         .hero-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 40px rgba(0,201,167,.4); }

//         .hero-btn-outline {
//           display: inline-flex; align-items: center; justify-content: center;
//           gap: 8px;
//           padding: 14px 26px;
//           border-radius: 10px;
//           background: transparent;
//           border: 1.5px solid rgba(0,201,167,.4);
//           color: ${TEAL}; font-weight: 600; font-size: 14px;
//           font-family: 'Poppins', sans-serif;
//           transition: border-color .2s, background .2s;
//           white-space: nowrap; cursor: pointer;
//         }
//         .hero-btn-outline:hover { border-color: ${TEAL}; background: rgba(0,201,167,.07); }

//         .form-cta {
//           width: 100%; padding: 14px; border-radius: 10px;
//           background: linear-gradient(135deg, ${TEAL}, ${TEAL_DARK});
//           border: none; color: #000; font-weight: 700; font-size: 14px;
//           font-family: 'Poppins', sans-serif;
//           transition: transform .2s, box-shadow .2s; cursor: pointer;
//         }
//         .form-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(0,201,167,.4); }

//         /* ── Trust badges ── */
//         .trust-badge {
//           display: inline-flex; align-items: center; gap: 5px;
//           background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.1);
//           border-radius: 100px; padding: 5px 12px;
//           font-size: 11px; color: rgba(255,255,255,.7); font-weight: 500;
//           font-family: 'Poppins', sans-serif;
//           transition: border-color .2s, background .2s;
//           animation: badgeIn .5s ease both;
//         }
//         .trust-badge:hover { border-color: rgba(0,201,167,.4); background: rgba(0,201,167,.05); color: #fff; }

//         /* ── Stats bar ── */
//         .stats-bar {
//           background: linear-gradient(90deg, #0a2540 0%, #0d2d4a 50%, #0a2540 100%);
//           border-top: 1px solid rgba(0,201,167,.15);
//           border-bottom: 1px solid rgba(0,201,167,.15);
//         }
//         .stat-card {
//           text-align: center; padding: 28px 16px;
//           border-right: 1px solid rgba(255,255,255,.07);
//           transition: background .2s;
//         }
//         .stat-card:last-child { border-right: none; }
//         .stat-card:hover { background: rgba(0,201,167,.04); }
//         .stat-num {
//           font-size: clamp(26px, 3.5vw, 42px); font-weight: 900;
//           background: linear-gradient(135deg, #fff 30%, ${TEAL});
//           -webkit-background-clip: text; -webkit-text-fill-color: transparent;
//           line-height: 1; font-family: 'Poppins', sans-serif;
//         }
//         .stat-label {
//           font-size: 12px; color: rgba(255,255,255,.45);
//           font-weight: 500; margin-top: 5px; font-family: 'Poppins', sans-serif;
//         }

//         /* ── 480px and below (small phones) ── */
//         @media (max-width: 480px) {
//           .hero-grid        { grid-template-columns: 1fr !important; gap: 20px !important; }
//           .hero-form-col    { padding: 18px 14px !important; border-radius: 14px !important; }
//           .hero-btns        { flex-direction: column !important; gap: 9px !important; width: 100% !important; }
//           .hero-btn-primary,
//           .hero-btn-outline { width: 100% !important; font-size: 13px !important; padding: 12px 16px !important; }
//           .trust-badge      { font-size: 9px !important; padding: 3px 8px !important; gap: 3px !important; }
//           .stats-grid       { grid-template-columns: 1fr 1fr !important; }
//           .stat-card        { padding: 12px 6px !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,.07) !important; }
//           .stat-num         { font-size: 20px !important; }
//           .stat-label       { font-size: 9px !important; }
//           .phone-row        { flex-direction: column !important; gap: 6px !important; }
//           .form-grid-2      { grid-template-columns: 1fr !important; }
//           .phone-grid       { grid-template-columns: 1fr !important; }
//           .hero-badge-text  { font-size: 8px !important; letter-spacing: 0.06em !important; }
//         }

//         /* ── 480–600px (large phones) ── */
//         @media (min-width: 481px) and (max-width: 600px) {
//           .hero-grid        { grid-template-columns: 1fr !important; gap: 22px !important; }
//           .hero-form-col    { padding: 22px 18px !important; }
//           .hero-btns        { flex-direction: column !important; gap: 10px !important; width: 100% !important; }
//           .hero-btn-primary,
//           .hero-btn-outline { width: 100% !important; font-size: 13.5px !important; padding: 13px 20px !important; }
//           .trust-badge      { font-size: 10px !important; padding: 4px 10px !important; }
//           .stats-grid       { grid-template-columns: 1fr 1fr !important; }
//           .stat-card        { padding: 14px 8px !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,.07) !important; }
//           .stat-num         { font-size: 22px !important; }
//           .stat-label       { font-size: 10px !important; }
//           .phone-row        { flex-direction: column !important; gap: 8px !important; }
//           .form-grid-2      { grid-template-columns: 1fr !important; }
//           .phone-grid       { grid-template-columns: 80px 1fr !important; }
//         }

//         /* ── 600–960px (tablet) ── */
//         @media (min-width: 601px) and (max-width: 960px) {
//           .hero-grid        { grid-template-columns: 1fr !important; gap: 36px !important; }
//           .hero-form-col    { max-width: 540px !important; margin: 0 auto !important; }
//           .hero-btns        { flex-direction: row !important; gap: 14px !important; }
//           .stats-grid       { grid-template-columns: 1fr 1fr !important; }
//           .stat-card        { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,.07) !important; padding: 20px 14px !important; }
//           .form-grid-2      { grid-template-columns: 1fr 1fr !important; }
//           .phone-grid       { grid-template-columns: 90px 1fr !important; }
//         }

//         /* ── 960–1280px (laptop) ── */
//         @media (min-width: 961px) and (max-width: 1280px) {
//           .hero-grid        { grid-template-columns: 1fr 400px !important; gap: 40px !important; }
//           .hero-btn-primary,
//           .hero-btn-outline { padding: 13px 22px !important; font-size: 13.5px !important; }
//         }

//         /* ── Hide cursor on touch devices ── */
//         @media (max-width: 960px) {
//           .nnc-cursor-dot, .nnc-cursor-ring { display: none !important; }
//         }
//       `}</style>

//       {/* Custom Cursor */}
//       {!isAnyMobile && !isTablet && (
//         <>
//           <div className="nnc-cursor-dot" style={{ left: cursor.x, top: cursor.y }} />
//           <div className={`nnc-cursor-ring${cursorBig ? " big" : ""}`} style={{ left: cursor.x, top: cursor.y }} />
//         </>
//       )}

//       {/* ── HERO ── */}
//       <section style={{
//         position: "relative",
//         minHeight: isAnyMobile ? "auto" : "100vh",
//         display: "flex", alignItems: "center",
//         overflow: "hidden",
//         background: `linear-gradient(150deg, ${NAVY0} 0%, ${NAVY1} 55%, ${NAVY2} 100%)`,
//         fontFamily: "'Poppins', sans-serif",
//       }}>

//         {/* Orbs — hide on small screens */}
//         {!isAnyMobile && [
//           { left:"2%",  top:"5%",  size: isLaptop ? 580 : 680, color:"rgba(0,201,167,.07)", dur:8 },
//           { left:"60%", top:"50%", size: isLaptop ? 380 : 480, color:"rgba(31,209,181,.05)", dur:10 },
//           { left:"40%", top:"80%", size: isLaptop ? 240 : 290, color:"rgba(0,160,122,.06)", dur:6 },
//         ].map((o, i) => (
//           <div key={i} style={{
//             position:"absolute", left:o.left, top:o.top, width:o.size, height:o.size,
//             borderRadius:"50%", background:`radial-gradient(circle,${o.color} 0%,transparent 65%)`,
//             animation:`orbPulse ${o.dur}s ease-in-out infinite`, animationDelay:`${i*2}s`,
//             pointerEvents:"none", zIndex:0,
//           }}/>
//         ))}

//         {/* Grid lines */}
//         <div style={{
//           position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
//           backgroundImage:`linear-gradient(rgba(0,201,167,.03) 1px,transparent 1px),
//                            linear-gradient(90deg,rgba(0,201,167,.03) 1px,transparent 1px)`,
//           backgroundSize: isAnyMobile ? "36px 36px" : "58px 58px",
//         }}/>

//         <div className="hero-inner" style={{
//           position:"relative", zIndex:2,
//           width:"100%", maxWidth: 1320, margin:"0 auto",
//           padding: getHeroPadding(),
//         }}>
//           <div className="hero-grid" style={{
//             display:"grid",
//             gridTemplateColumns: isAnyMobile || isTablet ? "1fr" : "1fr 430px",
//             gap: isMobile ? 20 : isSmall ? 22 : isTablet ? 36 : 56,
//             alignItems:"center",
//           }}>

//             {/* ── LEFT ── */}
//             <div>

//               {/* Live badge */}
//               <div className="hero-fade hero-fade-1" style={{
//                 display:"inline-flex", alignItems:"center",
//                 gap: isMobile ? 5 : 8,
//                 background:"rgba(0,201,167,.08)", border:"1px solid rgba(0,201,167,.28)",
//                 borderRadius:100,
//                 padding: isMobile ? "3px 10px" : isSmall ? "4px 12px" : "7px 18px",
//                 marginBottom: isMobile ? 8 : isSmall ? 10 : 22,
//               }}>
//                 <span className="pulse-dot" style={{
//                   width: isMobile ? 5 : 6, height: isMobile ? 5 : 6,
//                   borderRadius:"50%", background:TEAL, display:"block", flexShrink:0,
//                 }}/>
//                 <span className="hero-badge-text" style={{
//                   color:TEAL,
//                   fontSize: isMobile ? 8 : isSmall ? 9 : 11,
//                   fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase",
//                 }}>
//                   CANADA · USA · UK — POWERED BY INDIA
//                 </span>
//               </div>

//               {/* H1 */}
//               <h1 className="hero-fade hero-fade-2" style={{
//                 fontSize: getTitleSize(),
//                 fontWeight:900,
//                 lineHeight: isMobile ? 1.18 : 1.1,
//                 marginBottom: getTitleMarginBottom(),
//                 color:"#fff",
//                 letterSpacing:"-0.02em",
//               }}>
//                 Build Once.{" "}
//                 <span style={{
//                   background:`linear-gradient(135deg,${TEAL},#1fd1b5)`,
//                   WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
//                 }}>
//                   Scale Everywhere.
//                 </span>{" "}
//                 Automate Everything.
//               </h1>

//               {/* Subtext */}
//               <p className="hero-fade hero-fade-3" style={{
//                 color:"rgba(255,255,255,.62)",
//                 fontSize: getSubtextSize(),
//                 lineHeight: isMobile ? 1.65 : 1.8,
//                 maxWidth: isAnyMobile ? "100%" : 580,
//                 marginBottom: isMobile ? 14 : isSmall ? 16 : 30,
//               }}>
//                 We design and develop custom CRM, ERP, web, and mobile systems that automate your operations
//                 and accelerate revenue — for businesses across Canada, USA, and the UK. Backed by{" "}
//                 <span style={{ color:TEAL, fontWeight:600 }}>10+ years of deep tech expertise</span>{" "}
//                 from India&apos;s most trusted digital studio.
//               </p>

//               {/* CTAs */}
//               <div
//                 className="hero-btns hero-fade hero-fade-4"
//                 style={{
//                   display:"flex",
//                   gap: isMobile ? 9 : isSmall ? 10 : 14,
//                   flexDirection: isAnyMobile ? "column" : "row",
//                   marginBottom: isMobile ? 14 : isSmall ? 16 : 34,
//                 }}
//                 onMouseEnter={() => !isAnyMobile && !isTablet && setCursorBig(true)}
//                 onMouseLeave={() => !isAnyMobile && !isTablet && setCursorBig(false)}
//               >
//                 <button className="hero-btn-primary" onClick={handleBookCall}
//                   style={{ width: isAnyMobile ? "100%" : "auto" }}
//                 >
//                   <span>📅</span> Book a Free Strategy Call
//                 </button>
//                 <Link href="/solutions" style={{ textDecoration:"none", width: isAnyMobile ? "100%" : "auto" }}>
//                   <button className="hero-btn-outline"
//                     style={{ width: isAnyMobile ? "100%" : "auto" }}
//                   >
//                     Explore Our Solutions →
//                   </button>
//                 </Link>
//               </div>

//               {/* Trust Badges */}
//               <div className="hero-fade hero-fade-5" style={{
//                 display:"flex", flexWrap:"wrap",
//                 gap: isMobile ? 4 : 6,
//                 justifyContent: isAnyMobile ? "center" : "flex-start",
//                 marginBottom: isMobile ? 12 : 0,
//               }}>
//                 {TRUST_BADGES.map((b, i) => (
//                   <span key={b.label} className="trust-badge"
//                     style={{ animationDelay:`${.7 + i * .08}s` }}
//                   >
//                     {b.icon} {b.label}
//                   </span>
//                 ))}
//               </div>

//               {/* Phone numbers */}
//               <div className="phone-row hero-fade hero-fade-5" style={{
//                 display:"flex",
//                 gap: isMobile ? 6 : isSmall ? 8 : 22,
//                 marginTop: isMobile ? 12 : 24,
//                 flexDirection: isMobile ? "column" : "row",
//                 alignItems: isMobile ? "flex-start" : "center",
//               }}>
//                 {[
//                   { flag:"🇨🇦", label:"CA:", num:"+1 647-XXX-XXXX" },
//                   { flag:"🇬🇧", label:"UK:", num:"+44 20-XXXX-XXXX" },
//                 ].map(p => (
//                   <a key={p.num} href={`tel:${p.num}`} style={{
//                     display:"inline-flex", alignItems:"center",
//                     gap: isMobile ? 4 : 6,
//                     color:"rgba(255,255,255,.5)",
//                     fontSize: isMobile ? 11 : isSmall ? 12 : 13,
//                     textDecoration:"none", fontWeight:500, transition:"color .2s",
//                   }}
//                     onMouseEnter={e => !isAnyMobile && !isTablet && (e.currentTarget.style.color = TEAL)}
//                     onMouseLeave={e => !isAnyMobile && !isTablet && (e.currentTarget.style.color = "rgba(255,255,255,.5)")}
//                   >
//                     <span>{p.flag}</span>
//                     <span style={{ color:"rgba(255,255,255,.3)" }}>{p.label}</span>
//                     <span>{p.num}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* ── RIGHT — Form ── */}
//             <div className="hero-form-col" style={{
//               background:"rgba(6,20,37,.92)",
//               border:"1px solid rgba(0,201,167,.18)",
//               borderRadius: isMobile ? 14 : 20,
//               padding: getFormPadding(),
//               backdropFilter:"blur(24px)",
//               boxShadow:"0 0 80px rgba(0,201,167,.07)",
//               position:"relative", overflow:"hidden",
//               width:"100%",
//               maxWidth: isAnyMobile ? "100%" : isTablet ? "520px" : "430px",
//               margin:"0 auto",
//             }}>
//               {/* shimmer top bar */}
//               <div style={{
//                 position:"absolute", top:0, left:0, height:2, width:"60%",
//                 background:"linear-gradient(90deg,transparent,#00C9A7,transparent)",
//                 animation:"shimmer 3s linear infinite",
//               }}/>

//               <p style={{
//                 color:TEAL, fontSize: isMobile ? 9.5 : 10.5, fontWeight:700,
//                 letterSpacing:"0.13em", textTransform:"uppercase", marginBottom:4,
//               }}>
//                 Free Strategy Consultation
//               </p>
//               <h3 style={{
//                 fontWeight:700, fontSize: isMobile ? 17 : 20,
//                 marginBottom:3, color:"#fff",
//               }}>
//                 Get a Free Consultation
//               </h3>
//               <p style={{
//                 color:"rgba(255,255,255,.38)",
//                 fontSize: isMobile ? 11 : 12,
//                 marginBottom: isMobile ? 12 : 20,
//               }}>
//                 Response within 24 hours · No commitment
//               </p>

//               {submitted ? (
//                 <div style={{ textAlign:"center", padding: isMobile ? "16px 0" : "36px 0" }}>
//                   <div style={{ fontSize: isMobile ? 38 : 50, marginBottom:10 }}>✅</div>
//                   <p style={{ color:TEAL, fontSize: isMobile ? 15 : 18, fontWeight:700, marginBottom:5 }}>
//                     We&apos;ll be in touch!
//                   </p>
//                   <p style={{ color:"rgba(255,255,255,.4)", fontSize: isMobile ? 11 : 12.5 }}>
//                     Expect a reply within 24 business hours.
//                   </p>
//                   <Link href="/">
//                     <button
//                       onClick={() => { setSubmitted(false); setForm({ fname:"", lname:"", cc:"+1", phone:"", email:"", service:"", message:"" }); }}
//                       className="form-cta"
//                       style={{ marginTop:12, width:"auto", padding:"10px 20px" }}
//                     >
//                       Send Another
//                     </button>
//                   </Link>
//                 </div>
//               ) : (
//                 <div style={{ display:"flex", flexDirection:"column", gap: isMobile ? 9 : 10 }}>

//                   {/* Name row */}
//                   <div className="form-grid-2" style={{
//                     display:"grid",
//                     gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
//                     gap: isMobile ? 9 : 10,
//                   }}>
//                     <input className="h-inp" style={inp} placeholder="First Name *" value={form.fname} onChange={set("fname")} />
//                     <input className="h-inp" style={inp} placeholder="Last Name"    value={form.lname} onChange={set("lname")} />
//                   </div>

//                   {/* Phone row */}
//                   <div className="phone-grid" style={{
//                     display:"grid",
//                     gridTemplateColumns: isMobile ? "1fr" : "88px 1fr",
//                     gap: isMobile ? 9 : 10,
//                   }}>
//                     <select className="h-inp" style={{ ...inp, padding:"13px 8px" }} value={form.cc} onChange={set("cc")}>
//                       <option value="+1">🇨🇦 +1</option>
//                       <option value="+44">🇬🇧 +44</option>
//                       <option value="+91">🇮🇳 +91</option>
//                       <option value="+1us">🇺🇸 +1</option>
//                     </select>
//                     <input className="h-inp" style={inp} placeholder="Phone Number" value={form.phone} onChange={set("phone")} />
//                   </div>

//                   <input className="h-inp" style={inp} type="email" placeholder="Business Email *" value={form.email} onChange={set("email")} />

//                   <select className="h-inp"
//                     style={{ ...inp, color: form.service ? "#fff" : "rgba(255,255,255,.35)" }}
//                     value={form.service} onChange={set("service")}
//                   >
//                     <option value="">Service of Interest</option>
//                     {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
//                   </select>

//                   <textarea className="h-inp"
//                     style={{ ...inp, resize:"vertical", minHeight: isMobile ? 66 : 78 }}
//                     rows={3} placeholder="Tell us about your project…"
//                     value={form.message} onChange={set("message")}
//                   />

//                   <button className="form-cta" onClick={handleSubmit}>
//                     🚀 Get Free Consultation
//                   </button>

//                   <p style={{
//                     textAlign:"center", color:"rgba(255,255,255,.22)",
//                     fontSize: isMobile ? 9 : 11, marginTop:2,
//                   }}>
//                     🔒 100% Secure · GDPR &amp; PIPEDA Compliant
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//     </>
//   );
// }


"use client";
import { useState, useRef, useEffect, CSSProperties } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const TEAL      = "#00C9A7";
const TEAL_DARK = "#00a07a";
const NAVY0     = "#010812";
const NAVY1     = "#030B18";
const NAVY2     = "#061425";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView] as const;
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [ref, inView] = useInView();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let cur = 0; const step = to / 60;
    const t = setInterval(() => {
      cur += step;
      if (cur >= to) { setV(to); clearInterval(t); } else setV(Math.round(cur));
    }, 16);
    return () => clearInterval(t);
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

const inp: CSSProperties = {
  width: "100%", borderRadius: 9, padding: "13px 16px", fontSize: 14,
  fontFamily: "'Poppins', sans-serif", outline: "none", boxSizing: "border-box",
  background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)",
  color: "#fff", transition: "border-color .2s",
};

const TRUST_BADGES = [
  { icon: "🔵", label: "Google Partner" },
  { icon: "🏆", label: "ISO Certified" },
  { icon: "🔒", label: "GDPR Compliant" },
  { icon: "🍁", label: "PIPEDA Compliant" },
  { icon: "⭐", label: "Clutch Top Agency" },
];

const STATS = [
  { n: 100, s: "+", label: "Projects Delivered" },
  { n: 10,  s: "+", label: "Years of Combined Expertise" },
  { n: 50,  s: "+", label: "Clients Globally" },
  { n: 98,  s: "%", label: "Client Retention Rate" },
];

const SERVICES = [
  "CRM Development", "ERP Development", "Web Development",
  "Mobile App Development", "Marketing Automation",
  "Salesforce CRM", "Digital Transformation", "SEO & Digital Marketing",
];

export default function HeroSection() {
  const router = useRouter();
  const [form, setForm] = useState({ fname:"", lname:"", cc:"+1", phone:"", email:"", service:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [cursorBig, setCursorBig] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  const isMobile    = windowWidth > 0 && windowWidth <= 480;
  const isSmall     = windowWidth > 480 && windowWidth <= 600;
  const isTablet    = windowWidth > 600 && windowWidth <= 960;
  const isLaptop    = windowWidth > 960 && windowWidth <= 1280;
  const isAnyMobile = windowWidth > 0 && windowWidth <= 600;

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = () => { if (form.fname && form.email) setSubmitted(true); };
  const handleBookCall = () => { router.push('/contact'); };

  // ── Responsive helpers ──────────────────────────────────────────────────────
  // KEY FIX: drastically reduced top padding on mobile
  const getHeroPadding = () => {
    if (isMobile)  return "10px 14px 16px";
    if (isSmall)   return "16px 18px 22px";
    if (isTablet)  return "44px 24px 44px";
    if (isLaptop)  return "60px 36px 56px";
    return "90px 48px 80px";
  };

  const getTitleSize = () => {
    if (isMobile)  return "clamp(20px, 5.8vw, 25px)";
    if (isSmall)   return "clamp(24px, 5.5vw, 30px)";
    if (isTablet)  return "clamp(32px, 5vw, 42px)";
    if (isLaptop)  return "clamp(38px, 4vw, 46px)";
    return "clamp(46px, 4vw, 58px)";
  };

  const getTitleMarginBottom = () => {
    if (isMobile)  return 6;
    if (isSmall)   return 8;
    if (isTablet)  return 18;
    return 22;
  };

  const getBadgeMarginBottom = () => {
    if (isMobile)  return 7;
    if (isSmall)   return 9;
    if (isTablet)  return 20;
    return 26;
  };

  const getSubtextMarginBottom = () => {
    if (isMobile)  return 12;
    if (isSmall)   return 14;
    if (isTablet)  return 28;
    return 32;
  };

  const getCTAMarginBottom = () => {
    if (isMobile)  return 12;
    if (isSmall)   return 14;
    if (isTablet)  return 30;
    return 34;
  };

  const getSubtextSize = () => {
    if (isMobile) return 11.5;
    if (isSmall)  return 13;
    if (isTablet) return 14.5;
    return 16;
  };

  const getFormPadding = () => {
    if (isMobile)  return "14px 13px";
    if (isSmall)   return "20px 18px";
    if (isTablet)  return "28px 24px";
    return "34px 30px";
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        @media (min-width: 961px) { * { cursor: none !important; } }

        .nnc-cursor-dot {
          position: fixed; width: 10px; height: 10px; border-radius: 50%;
          background: ${TEAL}; pointer-events: none; z-index: 99999;
          transform: translate(-50%,-50%); mix-blend-mode: difference;
          transition: width .15s, height .15s;
        }
        .nnc-cursor-ring {
          position: fixed; width: 36px; height: 36px; border-radius: 50%;
          border: 2px solid ${TEAL}; pointer-events: none; z-index: 99998;
          transform: translate(-50%,-50%); opacity: .55;
          transition: width .25s, height .25s, border-color .25s, left .08s, top .08s;
        }
        .nnc-cursor-ring.big { width: 56px; height: 56px; border-color: rgba(0,201,167,.4); }

        @keyframes orbPulse { 0%,100%{opacity:.35;transform:scale(1)} 50%{opacity:.8;transform:scale(1.1)} }
        @keyframes shimmer  { from{left:-100%} to{left:120%} }
        @keyframes pulse    { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.6)} }
        @keyframes fadeUp   { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes badgeIn  { from{opacity:0;transform:scale(.9)} to{opacity:1;transform:scale(1)} }

        .hero-fade   { animation: fadeUp .65s ease both; }
        .hero-fade-1 { animation-delay: .08s; }
        .hero-fade-2 { animation-delay: .2s; }
        .hero-fade-3 { animation-delay: .34s; }
        .hero-fade-4 { animation-delay: .48s; }
        .hero-fade-5 { animation-delay: .62s; }
        .pulse-dot   { animation: pulse 2s ease-in-out infinite; }

        .h-inp:focus { border-color: rgba(0,201,167,.7) !important; box-shadow: 0 0 0 3px rgba(0,201,167,.08); }
        .h-inp option { background: #0a1f38; color: #fff; }

        .hero-btn-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 13px 24px; border-radius: 10px;
          background: linear-gradient(135deg,${TEAL},${TEAL_DARK});
          color: #000; font-weight: 700; font-size: 13.5px;
          font-family: 'Poppins',sans-serif; border: none;
          transition: transform .2s, box-shadow .2s; white-space: nowrap; cursor: pointer;
        }
        .hero-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 40px rgba(0,201,167,.4); }

        .hero-btn-outline {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 13px 24px; border-radius: 10px; background: transparent;
          border: 1.5px solid rgba(0,201,167,.4); color: ${TEAL};
          font-weight: 600; font-size: 13.5px; font-family: 'Poppins',sans-serif;
          transition: border-color .2s, background .2s; white-space: nowrap; cursor: pointer;
        }
        .hero-btn-outline:hover { border-color: ${TEAL}; background: rgba(0,201,167,.07); }

        .form-cta {
          width: 100%; padding: 13px; border-radius: 10px;
          background: linear-gradient(135deg,${TEAL},${TEAL_DARK});
          border: none; color: #000; font-weight: 700; font-size: 14px;
          font-family: 'Poppins',sans-serif; transition: transform .2s,box-shadow .2s; cursor: pointer;
        }
        .form-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(0,201,167,.4); }

        .trust-badge {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.1);
          border-radius: 100px; padding: 5px 11px;
          font-size: 11px; color: rgba(255,255,255,.7); font-weight: 500;
          font-family: 'Poppins',sans-serif;
          transition: border-color .2s, background .2s;
          animation: badgeIn .5s ease both;
        }
        .trust-badge:hover { border-color: rgba(0,201,167,.4); background: rgba(0,201,167,.05); color: #fff; }

        .stats-bar {
          background: linear-gradient(90deg,#0a2540 0%,#0d2d4a 50%,#0a2540 100%);
          border-top: 1px solid rgba(0,201,167,.15);
          border-bottom: 1px solid rgba(0,201,167,.15);
        }
        .stat-card {
          text-align: center; padding: 26px 16px;
          border-right: 1px solid rgba(255,255,255,.07); transition: background .2s;
        }
        .stat-card:last-child { border-right: none; }
        .stat-card:hover { background: rgba(0,201,167,.04); }
        .stat-num {
          font-size: clamp(24px,3.5vw,40px); font-weight: 900;
          background: linear-gradient(135deg,#fff 30%,${TEAL});
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          line-height: 1; font-family: 'Poppins',sans-serif;
        }
        .stat-label { font-size: 12px; color: rgba(255,255,255,.45); font-weight: 500; margin-top: 5px; font-family: 'Poppins',sans-serif; }

        /* ── ≤480px small phones ── */
        @media (max-width: 480px) {
          /* section itself: no extra top margin from navbar gap */
          .hero-section     { padding-top: 0 !important; }
          .hero-grid        { grid-template-columns: 1fr !important; gap: 16px !important; }
          .hero-form-col    { padding: 14px 13px !important; border-radius: 12px !important; }
          .hero-btns        { flex-direction: column !important; gap: 8px !important; width: 100% !important; }
          .hero-btn-primary,
          .hero-btn-outline { width: 100% !important; font-size: 12.5px !important; padding: 11px 14px !important; }
          .trust-badge      { font-size: 9px !important; padding: 3px 7px !important; gap: 3px !important; }
          .stats-grid       { grid-template-columns: 1fr 1fr !important; }
          .stat-card        { padding: 11px 5px !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,.07) !important; }
          .stat-num         { font-size: 19px !important; }
          .stat-label       { font-size: 9px !important; }
          .phone-row        { flex-direction: column !important; gap: 5px !important; }
          .form-grid-2      { grid-template-columns: 1fr !important; }
          .phone-grid       { grid-template-columns: 1fr !important; }
          .hero-badge-text  { font-size: 7.5px !important; letter-spacing: 0.05em !important; }
          /* tighten form inputs */
          .h-inp            { padding: 10px 12px !important; font-size: 13px !important; }
        }

        /* ── 481–600px large phones ── */
        @media (min-width: 481px) and (max-width: 600px) {
          .hero-grid        { grid-template-columns: 1fr !important; gap: 18px !important; }
          .hero-form-col    { padding: 20px 18px !important; }
          .hero-btns        { flex-direction: column !important; gap: 9px !important; width: 100% !important; }
          .hero-btn-primary,
          .hero-btn-outline { width: 100% !important; font-size: 13px !important; padding: 12px 18px !important; }
          .trust-badge      { font-size: 10px !important; padding: 4px 9px !important; }
          .stats-grid       { grid-template-columns: 1fr 1fr !important; }
          .stat-card        { padding: 13px 7px !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,.07) !important; }
          .stat-num         { font-size: 21px !important; }
          .stat-label       { font-size: 10px !important; }
          .phone-row        { flex-direction: column !important; gap: 6px !important; }
          .form-grid-2      { grid-template-columns: 1fr !important; }
          .phone-grid       { grid-template-columns: 80px 1fr !important; }
        }

        /* ── 601–960px tablet ── */
        @media (min-width: 601px) and (max-width: 960px) {
          .hero-grid        { grid-template-columns: 1fr !important; gap: 36px !important; }
          .hero-form-col    { max-width: 540px !important; margin: 0 auto !important; }
          .hero-btns        { flex-direction: row !important; gap: 14px !important; }
          .stats-grid       { grid-template-columns: 1fr 1fr !important; }
          .stat-card        { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,.07) !important; padding: 20px 14px !important; }
          .form-grid-2      { grid-template-columns: 1fr 1fr !important; }
          .phone-grid       { grid-template-columns: 90px 1fr !important; }
        }

        /* ── 961–1280px laptop ── */
        @media (min-width: 961px) and (max-width: 1280px) {
          .hero-grid        { grid-template-columns: 1fr 400px !important; gap: 40px !important; }
          .hero-btn-primary,
          .hero-btn-outline { padding: 13px 22px !important; font-size: 13.5px !important; }
        }

        @media (max-width: 960px) { .nnc-cursor-dot, .nnc-cursor-ring { display: none !important; } }
      `}</style>

      {!isAnyMobile && !isTablet && (
        <>
          <div className="nnc-cursor-dot" style={{ left: cursor.x, top: cursor.y }} />
          <div className={`nnc-cursor-ring${cursorBig ? " big" : ""}`} style={{ left: cursor.x, top: cursor.y }} />
        </>
      )}

      {/* ── HERO ── */}
      <section className="hero-section" style={{
        position: "relative",
        minHeight: isAnyMobile ? "auto" : "100vh",
        display: "flex", alignItems: isMobile ? "flex-start" : "center",
        overflow: "hidden",
        background: `linear-gradient(150deg,${NAVY0} 0%,${NAVY1} 55%,${NAVY2} 100%)`,
        fontFamily: "'Poppins',sans-serif",
      }}>

        {!isAnyMobile && [
          { left:"2%",  top:"5%",  size: isLaptop ? 580 : 680, color:"rgba(0,201,167,.07)", dur:8 },
          { left:"60%", top:"50%", size: isLaptop ? 380 : 480, color:"rgba(31,209,181,.05)", dur:10 },
          { left:"40%", top:"80%", size: isLaptop ? 240 : 290, color:"rgba(0,160,122,.06)", dur:6 },
        ].map((o, i) => (
          <div key={i} style={{
            position:"absolute", left:o.left, top:o.top, width:o.size, height:o.size,
            borderRadius:"50%", background:`radial-gradient(circle,${o.color} 0%,transparent 65%)`,
            animation:`orbPulse ${o.dur}s ease-in-out infinite`, animationDelay:`${i*2}s`,
            pointerEvents:"none", zIndex:0,
          }}/>
        ))}

        <div style={{
          position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
          backgroundImage:`linear-gradient(rgba(0,201,167,.03) 1px,transparent 1px),
                           linear-gradient(90deg,rgba(0,201,167,.03) 1px,transparent 1px)`,
          backgroundSize: isAnyMobile ? "34px 34px" : "58px 58px",
        }}/>

        <div className="hero-inner" style={{
          position:"relative", zIndex:2,
          width:"100%", maxWidth:1320, margin:"0 auto",
          padding: getHeroPadding(),
        }}>
          <div className="hero-grid" style={{
            display:"grid",
            gridTemplateColumns: isAnyMobile || isTablet ? "1fr" : "1fr 430px",
            gap: isMobile ? 16 : isSmall ? 18 : isTablet ? 36 : 56,
            alignItems:"center",
          }}>

            {/* ── LEFT ── */}
            <div>
              {/* Live badge */}
              <div className="hero-fade hero-fade-1" style={{
                display:"inline-flex", alignItems:"center",
                gap: isMobile ? 5 : 8,
                background:"rgba(0,201,167,.08)", border:"1px solid rgba(0,201,167,.28)",
                borderRadius:100,
                padding: isMobile ? "3px 9px" : isSmall ? "4px 11px" : "7px 18px",
                marginBottom: getBadgeMarginBottom(),
              }}>
                <span className="pulse-dot" style={{
                  width: isMobile ? 5 : 6, height: isMobile ? 5 : 6,
                  borderRadius:"50%", background:TEAL, display:"block", flexShrink:0,
                }}/>
                <span className="hero-badge-text" style={{
                  color:TEAL,
                  fontSize: isMobile ? 7.5 : isSmall ? 9 : 11,
                  fontWeight:700, letterSpacing:"0.09em", textTransform:"uppercase",
                }}>
                  CANADA · USA · UK — POWERED BY INDIA
                </span>
              </div>

              {/* H1 */}
              <h1 className="hero-fade hero-fade-2" style={{
                fontSize: getTitleSize(),
                fontWeight:900,
                lineHeight: isMobile ? 1.18 : 1.1,
                marginBottom: getTitleMarginBottom(),
                color:"#fff",
                letterSpacing:"-0.02em",
              }}>
                Build Once.{" "}
                <span style={{
                  background:`linear-gradient(135deg,${TEAL},#1fd1b5)`,
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                }}>
                  Scale Everywhere.
                </span>{" "}
                Automate Everything.
              </h1>

              {/* Subtext */}
              <p className="hero-fade hero-fade-3" style={{
                color:"rgba(255,255,255,.62)",
                fontSize: getSubtextSize(),
                lineHeight: isMobile ? 1.6 : 1.8,
                maxWidth: isAnyMobile ? "100%" : 580,
                marginBottom: getSubtextMarginBottom(),
              }}>
                We design and develop custom CRM, ERP, web, and mobile systems that automate your operations
                and accelerate revenue — for businesses across Canada, USA, and the UK. Backed by{" "}
                <span style={{ color:TEAL, fontWeight:600 }}>10+ years of deep tech expertise</span>{" "}
                from India&apos;s most trusted digital studio.
              </p>

              {/* CTAs */}
              <div
                className="hero-btns hero-fade hero-fade-4"
                style={{
                  display:"flex",
                  gap: isMobile ? 8 : isSmall ? 9 : 14,
                  flexDirection: isAnyMobile ? "column" : "row",
                  marginBottom: getCTAMarginBottom(),
                }}
                onMouseEnter={() => !isAnyMobile && !isTablet && setCursorBig(true)}
                onMouseLeave={() => !isAnyMobile && !isTablet && setCursorBig(false)}
              >
                <button className="hero-btn-primary" onClick={handleBookCall}
                  style={{ width: isAnyMobile ? "100%" : "auto" }}
                >
                  <span>📅</span> Book a Free Strategy Call
                </button>
                <Link href="/solutions" style={{ textDecoration:"none", width: isAnyMobile ? "100%" : "auto" }}>
                  <button className="hero-btn-outline" style={{ width: isAnyMobile ? "100%" : "auto" }}>
                    Explore Our Solutions →
                  </button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="hero-fade hero-fade-5" style={{
                display:"flex", flexWrap:"wrap",
                gap: isMobile ? 4 : 6,
                justifyContent: isAnyMobile ? "center" : "flex-start",
                marginBottom: isMobile ? 10 : 0,
              }}>
                {TRUST_BADGES.map((b, i) => (
                  <span key={b.label} className="trust-badge"
                    style={{ animationDelay:`${.62 + i * .07}s` }}
                  >
                    {b.icon} {b.label}
                  </span>
                ))}
              </div>

              {/* Phone numbers */}
              <div className="phone-row hero-fade hero-fade-5" style={{
                display:"flex",
                gap: isMobile ? 5 : isSmall ? 7 : 20,
                marginTop: isMobile ? 10 : 20,
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "flex-start" : "center",
              }}>
                {[
                  { flag:"🇨🇦", label:"CA:", num:"+1 647-XXX-XXXX" },
                  { flag:"🇬🇧", label:"UK:", num:"+44 20-XXXX-XXXX" },
                ].map(p => (
                  <a key={p.num} href={`tel:${p.num}`} style={{
                    display:"inline-flex", alignItems:"center",
                    gap: isMobile ? 4 : 6,
                    color:"rgba(255,255,255,.5)",
                    fontSize: isMobile ? 11 : isSmall ? 12 : 13,
                    textDecoration:"none", fontWeight:500, transition:"color .2s",
                  }}
                    onMouseEnter={e => !isAnyMobile && !isTablet && (e.currentTarget.style.color = TEAL)}
                    onMouseLeave={e => !isAnyMobile && !isTablet && (e.currentTarget.style.color = "rgba(255,255,255,.5)")}
                  >
                    <span>{p.flag}</span>
                    <span style={{ color:"rgba(255,255,255,.3)" }}>{p.label}</span>
                    <span>{p.num}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* ── RIGHT — Form ── */}
            <div className="hero-form-col" style={{
              background:"rgba(6,20,37,.92)",
              border:"1px solid rgba(0,201,167,.18)",
              borderRadius: isMobile ? 12 : 20,
              padding: getFormPadding(),
              backdropFilter:"blur(24px)",
              boxShadow:"0 0 80px rgba(0,201,167,.07)",
              position:"relative", overflow:"hidden",
              width:"100%",
              maxWidth: isAnyMobile ? "100%" : isTablet ? "520px" : "430px",
              margin:"0 auto",
            }}>
              <div style={{
                position:"absolute", top:0, left:0, height:2, width:"60%",
                background:"linear-gradient(90deg,transparent,#00C9A7,transparent)",
                animation:"shimmer 3s linear infinite",
              }}/>

              <p style={{
                color:TEAL, fontSize: isMobile ? 9 : 10.5, fontWeight:700,
                letterSpacing:"0.13em", textTransform:"uppercase", marginBottom:3,
              }}>
                Free Strategy Consultation
              </p>
              <h3 style={{
                fontWeight:700, fontSize: isMobile ? 16 : 20,
                marginBottom:3, color:"#fff",
              }}>
                Get a Free Consultation
              </h3>
              <p style={{
                color:"rgba(255,255,255,.38)",
                fontSize: isMobile ? 10.5 : 12,
                marginBottom: isMobile ? 10 : 18,
              }}>
                Response within 24 hours · No commitment
              </p>

              {submitted ? (
                <div style={{ textAlign:"center", padding: isMobile ? "14px 0" : "36px 0" }}>
                  <div style={{ fontSize: isMobile ? 36 : 50, marginBottom:10 }}>✅</div>
                  <p style={{ color:TEAL, fontSize: isMobile ? 15 : 18, fontWeight:700, marginBottom:5 }}>
                    We&apos;ll be in touch!
                  </p>
                  <p style={{ color:"rgba(255,255,255,.4)", fontSize: isMobile ? 11 : 12.5 }}>
                    Expect a reply within 24 business hours.
                  </p>
                  <Link href="/">
                    <button
                      onClick={() => { setSubmitted(false); setForm({ fname:"", lname:"", cc:"+1", phone:"", email:"", service:"", message:"" }); }}
                      className="form-cta"
                      style={{ marginTop:12, width:"auto", padding:"10px 20px" }}
                    >
                      Send Another
                    </button>
                  </Link>
                </div>
              ) : (
                <div style={{ display:"flex", flexDirection:"column", gap: isMobile ? 8 : 10 }}>
                  <div className="form-grid-2" style={{
                    display:"grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: isMobile ? 8 : 10,
                  }}>
                    <input className="h-inp" style={inp} placeholder="First Name *" value={form.fname} onChange={set("fname")} />
                    <input className="h-inp" style={inp} placeholder="Last Name"    value={form.lname} onChange={set("lname")} />
                  </div>

                  <div className="phone-grid" style={{
                    display:"grid",
                    gridTemplateColumns: isMobile ? "1fr" : "88px 1fr",
                    gap: isMobile ? 8 : 10,
                  }}>
                    <select className="h-inp" style={{ ...inp, padding:"13px 8px" }} value={form.cc} onChange={set("cc")}>
                      <option value="+1">🇨🇦 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1us">🇺🇸 +1</option>
                    </select>
                    <input className="h-inp" style={inp} placeholder="Phone Number" value={form.phone} onChange={set("phone")} />
                  </div>

                  <input className="h-inp" style={inp} type="email" placeholder="Business Email *" value={form.email} onChange={set("email")} />

                  <select className="h-inp"
                    style={{ ...inp, color: form.service ? "#fff" : "rgba(255,255,255,.35)" }}
                    value={form.service} onChange={set("service")}
                  >
                    <option value="">Service of Interest</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>

                  <textarea className="h-inp"
                    style={{ ...inp, resize:"vertical", minHeight: isMobile ? 60 : 76 }}
                    rows={3} placeholder="Tell us about your project…"
                    value={form.message} onChange={set("message")}
                  />

                  <button className="form-cta" onClick={handleSubmit}>
                    🚀 Get Free Consultation
                  </button>

                  <p style={{
                    textAlign:"center", color:"rgba(255,255,255,.22)",
                    fontSize: isMobile ? 9 : 11, marginTop:1,
                  }}>
                    🔒 100% Secure · GDPR &amp; PIPEDA Compliant
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}