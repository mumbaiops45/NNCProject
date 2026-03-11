// // // // // "use client";

// // // // // import { useRef, useState } from "react";
// // // // // import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

// // // // // const TEAL = "#00C9A7";
// // // // // const G    = "linear-gradient(135deg, #00C9A7 0%, #1B8F6E 100%)";
// // // // // const SERVICES = ["Custom CRM Development","ERP Development","Website / Web App","Mobile App","Marketing Automation","Other"];
// // // // // const STATS    = [{ n:"100+", l:"Projects" },{ n:"10+", l:"Years" },{ n:"50+", l:"Clients" },{ n:"98%", l:"Retention" }];

// // // // // /* ── Animated floating orb ── */
// // // // // function Orb({ style }: { style: React.CSSProperties }) {
// // // // //   return (
// // // // //     <motion.div
// // // // //       animate={{ scale:[1,1.2,1], opacity:[0.6,1,0.6] }}
// // // // //       transition={{ duration:8+Math.random()*4, repeat:Infinity, ease:"easeInOut" }}
// // // // //       style={{ position:"absolute", borderRadius:"50%", filter:"blur(52px)", pointerEvents:"none", ...style }}
// // // // //     />
// // // // //   );
// // // // // }

// // // // // export default function HeroSection() {
// // // // //   const secRef  = useRef<HTMLElement>(null);
// // // // //   const formRef = useRef<HTMLDivElement>(null);
// // // // //   const [submitted, setSubmit] = useState(false);

// // // // //   /* Parallax */
// // // // //   const { scrollYProgress } = useScroll({ target: secRef });
// // // // //   const bgY   = useTransform(scrollYProgress, [0,1], ["0%","28%"]);
// // // // //   // const opAll = useTransform(scrollYProgress, [0,.65], [1,0]);
// // // // //   const opAll = useTransform(scrollYProgress, [0,0.9], [1,1]);

// // // // //   /* 3-D tilt */
// // // // //   const mx = useMotionValue(0); const my = useMotionValue(0);
// // // // //   const rotX = useSpring(useTransform(my,[-250,250],[8,-8]),  { stiffness:150, damping:26 });
// // // // //   const rotY = useSpring(useTransform(mx,[-250,250],[-8,8]),  { stiffness:150, damping:26 });
// // // // //   const onMM = (e: React.MouseEvent) => {
// // // // //     const r = formRef.current?.getBoundingClientRect();
// // // // //     if(!r) return;
// // // // //     mx.set(e.clientX - r.left - r.width/2);
// // // // //     my.set(e.clientY - r.top  - r.height/2);
// // // // //   };

// // // // //   return (
// // // // //     <section ref={secRef}
// // // // //       style={{ minHeight:"100vh", background:"#030B18",
// // // // //        position:"relative", overflow:"hidden",
// // // // //         display:"flex", alignItems:"center", paddingTop:88, zIndex:1 }}>

// // // // //       {/* ── VIDEO BACKGROUND ── */}
// // // // //       {/* <motion.div style={{ y:bgY, position:"absolute", inset:0, zIndex:0 }}>
// // // // //         <video autoPlay muted loop playsInline
// // // // //           style={{ width:"100%", height:"100%", objectFit:"cover", opacity:0.08 }}>
// // // // //           <source src="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_25fps.mp4" type="video/mp4" />
// // // // //           <source src="https://videos.pexels.com/video-files/2278095/2278095-uhd_2560_1440_25fps.mp4" type="video/mp4" />
// // // // //         </video> */}
// // // // //         {/* Radial overlay so content stays readable */}
// // // // //         {/* <div style={{ position:"absolute", inset:0,background:"radial-gradient(ellipse 85% 75% at 50% 50%, transparent 0%, rgba(3,11,24,0.6) 75%)"}}/> 
// // // // //         <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, #030B18 0%, transparent 12%, transparent 85%, #030B18 100%)" }} />
// // // // //       </motion.div> */}

// // // // //       {/* ── DOT GRID ── */}
// // // // //       <div style={{ position:"absolute", inset:0, zIndex:1,
// // // // //         backgroundImage:"radial-gradient(rgba(0,201,167,0.18) 1px, transparent 1px)",
// // // // //         backgroundSize:"40px 40px",
// // // // //        maskImage:"radial-gradient(circle at center, black 60%, transparent 100%)",
// // // // //         // maskImage:"radial-gradient(ellipse 80% 80% at 50% 45%, black 25%, transparent 100%)",
// // // // //         pointerEvents:"none" }} />

// // // // //       {/* ── AMBIENT ORBS ── */}
// // // // //       <Orb style={{ top:"-5%",  left:"-10%", width:680, height:680, background:"radial-gradient(circle,rgba(0,201,167,0.35) 0%,transparent 70%)" }} />
// // // // //       <Orb style={{ bottom:"0%",right:"-8%", width:760, height:760, background:"radial-gradient(circle,rgba(27,143,110,0.12) 0%,transparent 68%)" }} />

// // // // //       {/* ── SPINNING RINGS ── */}
// // // // //       {[
// // // // //         { s:760, d:72, op:0.06 },
// // // // //         { s:540, d:48, op:0.11 },
// // // // //         { s:320, d:28, op:0.20 },
// // // // //       ].map((r,i) => (
// // // // //         <motion.div key={i}
// // // // //           animate={{ rotate: i%2===0 ? 360 : -360 }}
// // // // //           transition={{ duration:r.d, repeat:Infinity, ease:"linear" }}
// // // // //           style={{ position:"absolute", right:-100, top:"50%", marginTop:-r.s/2,
// // // // //             width:r.s, height:r.s, borderRadius:"50%",
// // // // //             border:`1px solid rgba(0,201,167,${r.op})`,
// // // // //             zIndex:2, pointerEvents:"none" }}
// // // // //         />
// // // // //       ))}

// // // // //       {/* ── FLOATING PARTICLES ── */}
// // // // //       {[
// // // // //         {x:10,y:22,s:5},{x:74,y:10,s:7},{x:88,y:58,s:4},
// // // // //         {x:5, y:68,s:5},{x:48,y:87,s:3},{x:93,y:32,s:4},
// // // // //       ].map((p,i) => (
// // // // //         <motion.div key={i}
// // // // //           animate={{ y:[0,-28,0], opacity:[0.2,.75,.2] }}
// // // // //           transition={{ duration:3.5+i*0.8, repeat:Infinity, delay:i*0.55, ease:"easeInOut" }}
// // // // //           style={{ position:"absolute", left:`${p.x}%`, top:`${p.y}%`,
// // // // //             width:p.s, height:p.s, borderRadius:"50%",
// // // // //             background:`radial-gradient(circle, ${TEAL}, transparent)`,
// // // // //             zIndex:2, pointerEvents:"none" }}
// // // // //         />
// // // // //       ))}

// // // // //       {/* ── MAIN CONTENT ── */}
// // // // //       <motion.div style={{ opacity:opAll, width:"100%", position:"relative", zIndex:10 }}>
// // // // //         <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 56px",
// // // // //           display:"grid", gridTemplateColumns:"1fr 440px", gap:72, alignItems:"center" }}>

// // // // //           {/* ───── LEFT ───── */}
// // // // //           <div>
// // // // //             {/* Badge */}
// // // // //             <motion.div className="badge"
// // // // //               initial={{ opacity:0, x:-24 }} animate={{ opacity:1, x:0 }}
// // // // //               transition={{ delay:.1, duration:.8, ease:[.22,1,.36,1] }}>
// // // // //               <span className="badge-dot" />
// // // // //               Full-Stack Technology & Automation Partner
// // // // //             </motion.div>

// // // // //             {/* Headline */}
// // // // //             {["Build Once.", "Scale Everywhere."].map((line, i) => (
// // // // //               <div key={i} style={{ overflow:"hidden", marginBottom: i===0 ? 4 : 40 }}>
// // // // //                 <motion.h1 className="syne"
// // // // //                   initial={{ y:120 }} animate={{ y:0 }}
// // // // //                   transition={{ duration:1.05, delay:0.2+i*0.15, ease:[.22,1,.36,1] }}
// // // // //                   style={{
// // // // //                     fontSize:"clamp(52px,7.2vw,100px)", fontWeight:800,
// // // // //                     lineHeight:1.01, letterSpacing:"-0.032em", margin:0,
// // // // //                     ...(i===1 ? {
// // // // //                       background:"linear-gradient(135deg,#00C9A7 0%,#4DFFD2 45%,#1B8F6E 100%)",
// // // // //                       WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
// // // // //                     } : { color:"#fff" }),
// // // // //                   }}>
// // // // //                   {line}
// // // // //                 </motion.h1>
// // // // //               </div>
// // // // //             ))}

// // // // //             {/* Description */}
// // // // //             <motion.p initial={{ opacity:0,y:22 }} animate={{ opacity:1,y:0 }} transition={{ delay:.64, duration:.8 }}
// // // // //               style={{ fontSize:18, lineHeight:1.82, color:"rgba(255,255,255,0.55)", maxWidth:520, marginBottom:14 }}>
// // // // //               We design and develop scalable digital systems that automate operations, accelerate revenue, and transform growing businesses into high-performance enterprises.
// // // // //             </motion.p>
// // // // //             <motion.p initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ delay:.76, duration:.8 }}
// // // // //               style={{ fontSize:15, lineHeight:1.78, color:"rgba(255,255,255,0.32)", maxWidth:500, marginBottom:50 }}>
// // // // //               From CRM and ERP to full-stack web and mobile — NNC Digital Solutions becomes your long-term technology growth partner.
// // // // //             </motion.p>

// // // // //             {/* CTA Buttons */}
// // // // //             <motion.div initial={{ opacity:0,y:16 }} animate={{ opacity:1,y:0 }} transition={{ delay:.92, duration:.7 }}
// // // // //               style={{ display:"flex", gap:16, flexWrap:"wrap", marginBottom:60 }}>
// // // // //               <motion.button
// // // // //                 whileHover={{ scale:1.05, boxShadow:"0 0 60px rgba(0,201,167,0.55)" }}
// // // // //                 whileTap={{ scale:.97 }}
// // // // //                 style={{ background:G, color:"#fff", border:"none", padding:"17px 42px", borderRadius:50, fontSize:15, fontWeight:700, fontFamily:"'Syne',sans-serif", cursor:"none", display:"flex", alignItems:"center", gap:10, boxShadow:"0 4px 30px rgba(0,201,167,0.35)", transition:"box-shadow .3s" }}>
// // // // //                 <span>Book a Strategy Call</span>
// // // // //                 <motion.span animate={{ x:[0,5,0] }} transition={{ duration:1.6, repeat:Infinity }} style={{ fontSize:18 }}>→</motion.span>
// // // // //               </motion.button>
// // // // //               <motion.button
// // // // //                 whileHover={{ scale:1.05, borderColor:TEAL, color:TEAL }}
// // // // //                 whileTap={{ scale:.97 }}
// // // // //                 style={{ background:"transparent", color:"rgba(255,255,255,.72)", border:"1px solid rgba(255,255,255,.18)", padding:"17px 38px", borderRadius:50, fontSize:15, fontFamily:"'Syne',sans-serif", cursor:"none", transition:"all .3s" }}>
// // // // //                 Explore Solutions
// // // // //               </motion.button>
// // // // //             </motion.div>

// // // // //             {/* Stats strip */}
// // // // //             <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.1 }}
// // // // //               style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:1, background:"rgba(255,255,255,.05)", borderRadius:20, overflow:"hidden", maxWidth:560, border:"1px solid rgba(255,255,255,.06)" }}>
// // // // //               {STATS.map((s,i) => (
// // // // //                 <motion.div key={i} whileHover={{ background:"rgba(0,201,167,.09)" }}
// // // // //                   style={{ padding:"22px 14px", textAlign:"center", background:"rgba(3,11,24,.5)", transition:"background .25s" }}>
// // // // //                   <p className="syne" style={{ fontSize:30, fontWeight:800, color:TEAL, lineHeight:1, marginBottom:5 }}>{s.n}</p>
// // // // //                   <p className="mono"  style={{ fontSize:10, color:"rgba(255,255,255,.4)", letterSpacing:".06em" }}>{s.l}</p>
// // // // //                 </motion.div>
// // // // //               ))}
// // // // //             </motion.div>
// // // // //           </div>

// // // // //           {/* ───── RIGHT: 3-D Form Card ───── */}
// // // // //           <motion.div ref={formRef} onMouseMove={onMM} onMouseLeave={()=>{ mx.set(0); my.set(0); }}
// // // // //             initial={{ opacity:0, x:64, y:20 }} animate={{ opacity:1, x:0, y:0 }}
// // // // //             transition={{ duration:1.1, delay:.45, ease:[.22,1,.36,1] }}
// // // // //             style={{ rotateX:rotX, rotateY:rotY, perspective:1200, transformStyle:"preserve-3d" }}>

// // // // //             <div style={{
// // // // //               background:"linear-gradient(145deg,rgba(255,255,255,.08) 0%,rgba(255,255,255,.03) 100%)",
// // // // //               border:"1px solid rgba(255,255,255,.10)", borderRadius:28,
// // // // //               padding:"44px 40px",
// // // // //               backdropFilter:"blur(28px)",
// // // // //               boxShadow:"0 40px 100px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.1)",
// // // // //               position:"relative", overflow:"hidden",
// // // // //             }}>
// // // // //               {/* Top gradient line */}
// // // // //               <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(90deg,#00C9A7,#4DFFD2,#1B8F6E)" }} />
// // // // //               {/* Corner glow */}
// // // // //               <div style={{ position:"absolute", top:-60, right:-60, width:200, height:200, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,201,167,0.13) 0%,transparent 70%)", pointerEvents:"none" }} />

// // // // //               {!submitted ? (
// // // // //                 <>
// // // // //                   <p className="mono" style={{ fontSize:10, color:TEAL, letterSpacing:".17em", textTransform:"uppercase", marginBottom:10 }}>Start your journey</p>
// // // // //                   <h3 className="syne" style={{ fontSize:21, fontWeight:700, color:"#fff", lineHeight:1.32, marginBottom:28 }}>
// // // // //                     Need a Digital System That Grows Your Business?
// // // // //                   </h3>

// // // // //                   <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
// // // // //                     {[["Full Name","text"],["Work Email","email"],["Company Name","text"],["Phone Number","tel"]].map(([ph,t])=>(
// // // // //                       <input key={ph} type={t} placeholder={ph} className="fi" />
// // // // //                     ))}

// // // // //                     <select defaultValue="" className="fi"
// // // // //                       style={{ cursor:"none", appearance:"none",
// // // // //                         backgroundColor:"rgba(0,201,167,0.1)",
// // // // //                         color:"#fff",
// // // // //                         border:"1px solid #00C9A7",
// // // // //                         borderRadius:12, padding:"13px 18px",
// // // // //                         fontSize:14, outline:"none",
// // // // //                         WebkitAppearance:"none", MozAppearance:"none" }}>
// // // // //                       <option value="" disabled style={{ color:"#aaa", background:"#071322" }}>Service of Interest</option>
// // // // //                       {SERVICES.map(s=>(
// // // // //                         <option key={s} style={{ color:"#fff", background:"#071322" }}>{s}</option>
// // // // //                       ))}
// // // // //                     </select>

// // // // //                     <motion.button
// // // // //                       whileHover={{ scale:1.02, boxShadow:"0 8px 44px rgba(0,201,167,.55)" }}
// // // // //                       whileTap={{ scale:.97 }}
// // // // //                       onClick={()=>setSubmit(true)}
// // // // //                       style={{ marginTop:8, background:G, color:"#fff", border:"none", padding:"15px", borderRadius:12, fontSize:15, fontWeight:700, fontFamily:"'Syne',sans-serif", cursor:"none", boxShadow:"0 4px 24px rgba(0,201,167,.32)", transition:"box-shadow .3s" }}>
// // // // //                       Schedule Consultation →
// // // // //                     </motion.button>
// // // // //                     <p style={{ fontSize:12, color:"rgba(255,255,255,.28)", textAlign:"center", lineHeight:1.5 }}>
// // // // //                       Response within 24 hours. No commitment required.
// // // // //                     </p>
// // // // //                   </div>
// // // // //                 </>
// // // // //               ) : (
// // // // //                 <motion.div initial={{ opacity:0, scale:.85 }} animate={{ opacity:1, scale:1 }}
// // // // //                   style={{ textAlign:"center", padding:"52px 16px" }}>
// // // // //                   <motion.div animate={{ scale:[0,1.25,1] }} transition={{ duration:.55 }}
// // // // //                     style={{ width:76, height:76, borderRadius:"50%", background:"rgba(0,201,167,.12)", border:`2px solid ${TEAL}`, display:"grid", placeItems:"center", margin:"0 auto 24px", fontSize:30, color:TEAL }}>✓</motion.div>
// // // // //                   <h3 className="syne" style={{ fontSize:22, color:"#fff", fontWeight:700, marginBottom:12 }}>We'll be in touch!</h3>
// // // // //                   <p style={{ fontSize:14, color:"rgba(255,255,255,.45)", lineHeight:1.75 }}>Our team will reach out within 24 hours to schedule your strategy consultation.</p>
// // // // //                 </motion.div>
// // // // //               )}
// // // // //             </div>
// // // // //           </motion.div>

// // // // //         </div>
// // // // //       </motion.div>

// // // // //       {/* ── SCROLL INDICATOR ── */}
// // // // //       <motion.div animate={{ y:[0,10,0] }} transition={{ duration:2, repeat:Infinity, ease:"easeInOut" }}
// // // // //         style={{ position:"absolute", bottom:34, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8, opacity:.38, zIndex:10, pointerEvents:"none" }}>
// // // // //         <span className="mono" style={{ fontSize:9, color:"#fff", letterSpacing:".22em" }}>SCROLL</span>
// // // // //         <div style={{ width:24, height:40, border:"1px solid rgba(255,255,255,.24)", borderRadius:12, display:"flex", justifyContent:"center", paddingTop:7 }}>
// // // // //           <motion.div animate={{ y:[0,16,0] }} transition={{ duration:1.6, repeat:Infinity }}
// // // // //             style={{ width:4, height:4, borderRadius:"50%", background:TEAL }} />
// // // // //         </div>
// // // // //       </motion.div>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import { motion } from "framer-motion";

// // // // export default function HeroSection() {
// // // //   return (
// // // //     <section
// // // //       style={{
// // // //         minHeight: "100vh",
// // // //         background: "#030B18",
// // // //         paddingTop: 120,
// // // //         display: "flex",
// // // //         alignItems: "center",
// // // //       }}
// // // //     >
// // // //       <div
// // // //         style={{
// // // //           maxWidth: 1200,
// // // //           margin: "auto",
// // // //           padding: "0 40px",
// // // //           display: "grid",
// // // //           gridTemplateColumns: "1fr 420px",
// // // //           gap: 60,
// // // //           alignItems: "center",
// // // //         }}
// // // //       >
// // // //         {/* LEFT CONTENT */}
// // // //         <div>
// // // //           <h1
// // // //             style={{
// // // //               fontSize: "clamp(52px,7vw,90px)",
// // // //               fontWeight: 800,
// // // //               lineHeight: 1.05,
// // // //               marginBottom: 10,
// // // //             }}
// // // //           >
// // // //             Build Once.
// // // //           </h1>

// // // //           <h1
// // // //             style={{
// // // //               fontSize: "clamp(52px,7vw,90px)",
// // // //               fontWeight: 800,
// // // //               lineHeight: 1.05,
// // // //               color: "#00C9A7",
// // // //               marginBottom: 10,
// // // //             }}
// // // //           >
// // // //             Scale Everywhere.
// // // //           </h1>

// // // //           <h1
// // // //             style={{
// // // //               fontSize: "clamp(52px,7vw,90px)",
// // // //               fontWeight: 800,
// // // //               lineHeight: 1.05,
// // // //               marginBottom: 30,
// // // //             }}
// // // //           >
// // // //             Automate Everything.
// // // //           </h1>

// // // //           <p
// // // //             style={{
// // // //               fontSize: 18,
// // // //               color: "rgba(255,255,255,0.65)",
// // // //               maxWidth: 540,
// // // //               lineHeight: 1.8,
// // // //               marginBottom: 40,
// // // //             }}
// // // //           >
// // // //             We design and develop custom CRM, ERP, web, and mobile
// // // //             systems that automate your operations and accelerate
// // // //             revenue — for businesses across Canada, USA, and the UK.
// // // //             Powered by 10+ years of deep tech expertise from India's
// // // //             most trusted digital studio.
// // // //           </p>

// // // //           {/* CTA BUTTONS */}
// // // //           <div style={{ display: "flex", gap: 16 }}>
// // // //             <button className="btn-primary">
// // // //               Book a Free Strategy Call
// // // //             </button>

// // // //             <button className="btn-outline">
// // // //               Explore Our Solutions
// // // //             </button>
// // // //           </div>

// // // //           {/* TRUST BADGES */}
// // // //           <div
// // // //             style={{
// // // //               marginTop: 40,
// // // //               display: "flex",
// // // //               gap: 24,
// // // //               fontSize: 12,
// // // //               opacity: 0.7,
// // // //             }}
// // // //           >
// // // //             <span>Google Partner</span>
// // // //             <span>ISO Certified</span>
// // // //             <span>GDPR Compliant</span>
// // // //             <span>PIPEDA Compliant</span>
// // // //             <span>Clutch Top Agency</span>
// // // //           </div>
// // // //         </div>

// // // //         {/* FORM */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 40 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ delay: 0.3 }}
// // // //           style={{
// // // //             background: "rgba(255,255,255,0.05)",
// // // //             border: "1px solid rgba(255,255,255,0.1)",
// // // //             borderRadius: 20,
// // // //             padding: 40,
// // // //             backdropFilter: "blur(20px)",
// // // //           }}
// // // //         >
// // // //           <h3 style={{ fontSize: 24, marginBottom: 20 }}>
// // // //             Get Free Consultation
// // // //           </h3>

// // // //           <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
// // // //             <input placeholder="First Name" className="fi" />
// // // //             <input placeholder="Last Name" className="fi" />
// // // //             <input placeholder="Phone (+1 / +44)" className="fi" />
// // // //             <input placeholder="Business Email" className="fi" />

// // // //             <select className="fi">
// // // //               <option>Service of Interest</option>
// // // //               <option>CRM Development</option>
// // // //               <option>ERP Development</option>
// // // //               <option>Website Development</option>
// // // //               <option>Mobile App</option>
// // // //             </select>

// // // //             <textarea
// // // //               placeholder="Message"
// // // //               className="fi"
// // // //               rows={3}
// // // //             />

// // // //             <button className="btn-teal">
// // // //               Get Free Consultation
// // // //             </button>
// // // //           </div>
// // // //         </motion.div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }


// // // "use client";

// // // import { motion } from "framer-motion";

// // // export default function HeroSection() {
// // //   return (
// // //     <section
// // //       style={{
// // //         minHeight: "100vh",
// // //         background: "#030B18",
// // //         paddingTop: 120,
// // //         display: "flex",
// // //         alignItems: "center",
// // //       }}
// // //     >
// // //       <div
// // //         style={{
// // //           maxWidth: 1200,
// // //           margin: "auto",
// // //           padding: "0 40px",
// // //           display: "grid",
// // //           gridTemplateColumns: "1fr 420px",
// // //           gap: 60,
// // //           alignItems: "center",
// // //         }}
// // //       >
// // //         {/* LEFT CONTENT */}
// // //         <div>
// // //           <h1
// // //             style={{
// // //               fontSize: "clamp(52px,7vw,90px)",
// // //               fontWeight: 800,
// // //               lineHeight: 1.05,
// // //               marginBottom: 10,
// // //             }}
// // //           >
// // //             Build Once.
// // //           </h1>

// // //           <h1
// // //             style={{
// // //               fontSize: "clamp(52px,7vw,90px)",
// // //               fontWeight: 800,
// // //               lineHeight: 1.05,
// // //               color: "#00C9A7",
// // //               marginBottom: 10,
// // //             }}
// // //           >
// // //             Scale Everywhere.
// // //           </h1>

// // //           <h1
// // //             style={{
// // //               fontSize: "clamp(52px,7vw,90px)",
// // //               fontWeight: 800,
// // //               lineHeight: 1.05,
// // //               marginBottom: 30,
// // //             }}
// // //           >
// // //             Automate Everything.
// // //           </h1>

// // //           <p
// // //             style={{
// // //               fontSize: 18,
// // //               color: "rgba(255,255,255,0.65)",
// // //               maxWidth: 540,
// // //               lineHeight: 1.8,
// // //               marginBottom: 40,
// // //             }}
// // //           >
// // //             We design and develop custom CRM, ERP, web, and mobile systems
// // //             that automate your operations and accelerate revenue — for
// // //             businesses across Canada, USA, and the UK. Powered by 10+ years
// // //             of deep tech expertise from India's most trusted digital studio.
// // //           </p>

// // //           {/* CTA BUTTONS */}
// // //           <div style={{ display: "flex", gap: 16 }}>
// // //             <button className="btn-primary">
// // //               Book a Free Strategy Call
// // //             </button>

// // //             <button className="btn-outline">
// // //               Explore Our Solutions
// // //             </button>
// // //           </div>

// // //           {/* TRUST BADGES */}
// // //           <div
// // //             style={{
// // //               marginTop: 40,
// // //               display: "flex",
// // //               gap: 24,
// // //               fontSize: 12,
// // //               opacity: 0.7,
// // //               flexWrap: "wrap",
// // //             }}
// // //           >
// // //             <span>Google Partner</span>
// // //             <span>ISO Certified</span>
// // //             <span>GDPR Compliant</span>
// // //             <span>PIPEDA Compliant</span>
// // //             <span>Clutch Top Agency</span>
// // //           </div>
// // //         </div>

// // //         {/* RIGHT FORM */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 40 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.3 }}
// // //           style={{
// // //             background: "rgba(255,255,255,0.05)",
// // //             border: "1px solid rgba(255,255,255,0.1)",
// // //             borderRadius: 20,
// // //             padding: 40,
// // //             backdropFilter: "blur(20px)",
// // //           }}
// // //         >
// // //           <h3 style={{ fontSize: 24, marginBottom: 20 }}>
// // //             Get Free Consultation
// // //           </h3>

// // //           <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
// // //             <input placeholder="First Name" className="fi" />
// // //             <input placeholder="Last Name" className="fi" />
// // //             <input placeholder="Phone (+1 / +44)" className="fi" />
// // //             <input placeholder="Business Email" className="fi" />

// // //             <select className="fi">
// // //               <option>Service of Interest</option>
// // //               <option>CRM Development</option>
// // //               <option>ERP Development</option>
// // //               <option>Website Development</option>
// // //               <option>Mobile App</option>
// // //             </select>

// // //             <textarea placeholder="Message" className="fi" rows={3} />

// // //             <button className="btn-teal">
// // //               Get Free Consultation
// // //             </button>
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // "use client";

// // import { motion } from "framer-motion";

// // export default function HeroSection() {
// //   return (
// //     <section
// //       style={{
// //         minHeight: "80vh",
// //         background: "#030B18",
// //         padding: "100px 0 120px",
// //         display: "flex",
// //         alignItems: "center",
// //       }}
// //     >
// //       <div
// //         style={{
// //           maxWidth: 1200,
// //           margin: "auto",
// //           padding: "0 40px",
// //           display: "grid",
// //           gridTemplateColumns: "1fr 420px",
// //           gap: 60,
// //           alignItems: "center",
// //         }}
// //       >
// //         {/* LEFT CONTENT */}
// //         <div>
// //           <h1
// //             style={{
// //               fontSize: "clamp(52px,7vw,90px)",
// //               fontWeight: 800,
// //               lineHeight: 1.05,
// //               marginBottom: 10,
// //             }}
// //           >
// //             Build Once.
// //           </h1>

// //           <h1
// //             style={{
// //               fontSize: "clamp(52px,7vw,90px)",
// //               fontWeight: 800,
// //               lineHeight: 1.05,
// //               color: "#00C9A7",
// //               marginBottom: 10,
// //             }}
// //           >
// //             Scale Everywhere.
// //           </h1>

// //           <h1
// //             style={{
// //               fontSize: "clamp(52px,7vw,90px)",
// //               fontWeight: 800,
// //               lineHeight: 1.05,
// //               marginBottom: 30,
// //             }}
// //           >
// //             Automate Everything.
// //           </h1>

// //           <p
// //             style={{
// //               fontSize: 18,
// //               color: "rgba(255,255,255,0.65)",
// //               maxWidth: 540,
// //               lineHeight: 1.8,
// //               marginBottom: 40,
// //             }}
// //           >
// //             We design and develop custom CRM, ERP, web, and mobile systems
// //             that automate your operations and accelerate revenue — for
// //             businesses across Canada, USA, and the UK. Powered by 10+ years
// //             of deep tech expertise from India's most trusted digital studio.
// //           </p>

// //           {/* CTA BUTTONS */}
// //           <div style={{ display: "flex", gap: 16 }}>
// //             <button className="btn-primary">
// //               Book a Free Strategy Call
// //             </button>

// //             <button className="btn-outline">
// //               Explore Our Solutions
// //             </button>
// //           </div>

// //           {/* TRUST BADGES */}
// //           <div
// //             style={{
// //               marginTop: 40,
// //               display: "flex",
// //               gap: 24,
// //               fontSize: 12,
// //               opacity: 0.7,
// //               flexWrap: "wrap",
// //             }}
// //           >
// //             <span>Google Partner</span>
// //             <span>ISO Certified</span>
// //             <span>GDPR Compliant</span>
// //             <span>PIPEDA Compliant</span>
// //             <span>Clutch Top Agency</span>
// //           </div>
// //         </div>

// //         {/* RIGHT FORM */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 40 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.3 }}
// //           style={{
// //             background: "rgba(255,255,255,0.05)",
// //             border: "1px solid rgba(255,255,255,0.1)",
// //             borderRadius: 20,
// //             padding: 40,
// //             backdropFilter: "blur(20px)",
// //           }}
// //         >
// //           <h3 style={{ fontSize: 24, marginBottom: 20 }}>
// //             Get Free Consultation
// //           </h3>

// //           <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
// //             <input placeholder="First Name" className="fi" />
// //             <input placeholder="Last Name" className="fi" />
// //             <input placeholder="Phone (+1 / +44)" className="fi" />
// //             <input placeholder="Business Email" className="fi" />

// //             <select className="fi">
// //               <option>Service of Interest</option>
// //               <option>CRM Development</option>
// //               <option>ERP Development</option>
// //               <option>Website Development</option>
// //               <option>Mobile App</option>
// //             </select>

// //             <textarea placeholder="Message" className="fi" rows={3} />

// //             <button className="btn-teal">
// //               Get Free Consultation
// //             </button>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// const SERVICES = [
//   "CRM Development", "ERP Solutions", "Web Development",
//   "Mobile Apps", "API Integration", "Cloud Automation",
//   "Digital Transformation", "Custom Software",
// ];

// const BADGES = [
//   { icon: "G",  label: "Google Partner"    },
//   { icon: "★",  label: "Clutch Top Agency" },
//   { icon: "🔒", label: "GDPR / PIPEDA"     },
//   { icon: "✦",  label: "ISO Certified"     },
// ];

// type FormState = {
//   firstName: string; lastName: string;
//   phone: string; email: string;
//   service: string; message: string;
// };

// export default function Hero() {
//   const [form, setForm] = useState<FormState>({
//     firstName: "", lastName: "", phone: "", email: "", service: "", message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading,   setLoading]   = useState(false);

//   const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
//     setForm(f => ({ ...f, [k]: e.target.value }));

//   const handleSubmit = () => {
//     if (!form.email || !form.firstName) return;
//     setLoading(true);
//     setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
//   };

//   return (
//     <section
//       className="relative min-h-screen flex items-center overflow-hidden pt-[90px]"
//       style={{ background: "linear-gradient(160deg, #010812 0%, #030B18 50%, #061425 100%)" }}
//     >
//       {/* Grid BG */}
//       <div className="absolute inset-0 bg-grid z-0 pointer-events-none" />

//       {/* Glow orbs */}
//       <div className="absolute top-[5%] left-[15%] w-[700px] h-[700px] rounded-full pointer-events-none z-0"
//            style={{ background: "radial-gradient(circle, rgba(0,201,167,0.07) 0%, transparent 65%)" }} />
//       <div className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none z-0"
//            style={{ background: "radial-gradient(circle, rgba(31,209,181,0.05) 0%, transparent 65%)" }} />

//       {/* Vertical accent lines */}
//       {[38, 62].map((pct, i) => (
//         <div key={i} className="absolute top-0 h-full w-px pointer-events-none z-[1]"
//              style={{ left: `${pct}%`, background: "linear-gradient(180deg, transparent, rgba(0,201,167,0.12), transparent)" }} />
//       ))}

//       <div className="relative z-[2] w-full max-w-[1240px] mx-auto px-12 py-16
//                       grid grid-cols-1 lg:grid-cols-[1fr_430px] gap-16 items-center">

//         {/* ── LEFT CONTENT ── */}
//         <div>
//           {/* Eyebrow pill */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//             className="inline-flex items-center gap-2.5 bg-teal/8 border border-teal/20
//                        rounded-full px-4 py-1.5 mb-8"
//           >
//             <span className="w-[7px] h-[7px] rounded-full bg-teal animate-pulse-glow"
//                   style={{ boxShadow: "0 0 8px #00C9A7" }} />
//             <span className="text-teal text-[11.5px] font-bold tracking-[0.1em] font-body uppercase">
//               Canada · USA · UK — Powered by India
//             </span>
//           </motion.div>

//           {/* H1 */}
//           <motion.h1
//             initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
//             className="font-display font-extrabold tracking-tight leading-[1.04] mb-6"
//             style={{ fontSize: "clamp(40px, 5.2vw, 68px)" }}
//           >
//             Build Once.{" "}
//             <span className="grad-text">Scale Everywhere.</span>
//             <br />Automate Everything.
//           </motion.h1>

//           {/* Subtext */}
//           <motion.p
//             initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.18 }}
//             className="text-white/60 text-[17px] leading-[1.78] max-w-[560px] mb-10 font-body"
//           >
//             We design and develop custom CRM, ERP, web, and mobile systems that automate
//             your operations and accelerate revenue — for businesses across Canada, USA, and the UK.
//             Backed by{" "}
//             <span className="text-teal font-semibold">10+ years of deep tech expertise</span>
//             {" "}from India's most trusted digital studio.
//           </motion.p>

//           {/* CTAs */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.26 }}
//             className="flex flex-wrap gap-3.5 mb-14"
//           >
//             <Link href="#consultation" className="btn-primary">
//               📅 Book a Free Strategy Call
//             </Link>
//             <Link href="#solutions" className="btn-outline">
//               Explore Solutions →
//             </Link>
//           </motion.div>

//           {/* Trust badges */}
//           <motion.div
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.45 }}
//           >
//             <p className="text-[10.5px] font-semibold tracking-[0.12em] text-white/30
//                           uppercase mb-3.5 font-body">
//               Trusted &amp; Certified
//             </p>
//             <div className="flex flex-wrap gap-2.5">
//               {BADGES.map((b) => (
//                 <div key={b.label}
//                      className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.09]
//                                 rounded-[7px] px-3 py-1.5">
//                   <span className="text-[13px] text-teal">{b.icon}</span>
//                   <span className="text-white/60 text-[11.5px] font-medium font-body">{b.label}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* ── FORM (right) ── */}
//         <motion.div
//           id="consultation"
//           initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//           className="relative hidden lg:block bg-navy-2/90 border border-teal/20 rounded-[20px]
//                      p-9 backdrop-blur-[24px] shadow-teal-soft"
//         >
//           {/* Top glow strip */}
//           <div className="absolute top-0 left-[10%] right-[10%] h-px rounded-sm opacity-50"
//                style={{ background: "linear-gradient(90deg, transparent, #00C9A7, transparent)" }} />

//           <div className="mb-6">
//             <p className="text-teal text-[10.5px] font-bold tracking-[0.14em] mb-1.5 font-body uppercase">
//               Free Strategy Consultation
//             </p>
//             <h3 className="text-white text-[21px] font-bold font-display leading-snug">
//               Get a Free Consultation
//             </h3>
//             <p className="text-white/45 text-[13px] font-body mt-1">
//               Response within 24 hours · No commitment
//             </p>
//           </div>

//           <AnimatePresence mode="wait">
//             {submitted ? (
//               <motion.div
//                 key="success"
//                 initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
//                 className="text-center py-11"
//               >
//                 <div className="text-5xl mb-4">✅</div>
//                 <p className="text-teal text-xl font-bold font-display mb-2">We'll be in touch!</p>
//                 <p className="text-white/50 text-[13.5px] font-body">
//                   Expect a response within 24 business hours.
//                 </p>
//               </motion.div>
//             ) : (
//               <motion.div key="form" className="flex flex-col gap-2.5">
//                 {/* Name row */}
//                 <div className="grid grid-cols-2 gap-2.5">
//                   <input className="fi" placeholder="First Name *" value={form.firstName} onChange={update("firstName")} />
//                   <input className="fi" placeholder="Last Name"    value={form.lastName}  onChange={update("lastName")}  />
//                 </div>

//                 {/* Phone */}
//                 <div className="relative">
//                   <select className="absolute left-0 top-0 bottom-0 w-[72px] bg-white/6
//                                      border border-white/10 border-r-white/8 rounded-l-lg
//                                      text-white/70 text-[13px] font-body outline-none cursor-pointer px-2">
//                     <option>+1</option>
//                     <option>+44</option>
//                     <option>+91</option>
//                   </select>
//                   <input className="fi" placeholder="Phone Number" value={form.phone}
//                          onChange={update("phone")} style={{ paddingLeft: "82px" }} />
//                 </div>

//                 <input className="fi" placeholder="Business Email *" type="email"
//                        value={form.email} onChange={update("email")} />

//                 <select className="fi" value={form.service} onChange={update("service")}
//                         style={{ color: form.service ? "#fff" : "rgba(255,255,255,0.35)" }}>
//                   <option value="">Service of Interest</option>
//                   {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
//                 </select>

//                 <textarea className="fi resize-y min-h-[80px]" rows={3}
//                           placeholder="Tell us about your project…"
//                           value={form.message} onChange={update("message")} />

//                 <motion.button
//                   whileHover={{ boxShadow: "0 0 32px rgba(0,201,167,0.45)" }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={handleSubmit}
//                   disabled={loading}
//                   className={`w-full py-3.5 rounded-[9px] font-body font-bold text-[14.5px]
//                               tracking-wide text-black mt-1 border-none cursor-pointer transition-all
//                               ${loading ? "opacity-50 cursor-not-allowed" : "bg-brand-grad"}`}
//                   style={loading ? { background: "rgba(0,201,167,0.4)" } : undefined}
//                 >
//                   {loading ? "Sending…" : "🚀 Get Free Consultation"}
//                 </motion.button>

//                 <p className="text-center text-white/28 text-[11px] font-body mt-1">
//                   🔒 100% secure · GDPR &amp; PIPEDA compliant
//                 </p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import StatsBar from "@/components/StatsBar";
import ClientLogos from "@/components/ClientLogos";
import CRMServices from "@/components/CRMServices";
import BestCRMCompany from "@/components/BestCRMCompany";
import CRMDoMore from "@/components/CRMDoMore";
import AIPoweredCRM from "@/components/AIPoweredCRM";
import CRMPlatformTools from "@/components/CRMPlatformTools";
import HireCRMDevelopers from "@/components/HireCRMDevelopers";
import KeyBenefits from "@/components/KeyBenefits";
import HappyClients from "@/components/HappyClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import GlobalPresence from "@/components/GlobalPresence";
import IndustriesFAQ from "@/components/IndustriesFAQ";
import ReadyToBuild from "@/components/ReadyToBuild";
import Footer from "@/components/Footer";
const SERVICES = [
  "CRM Development","ERP Solutions","Web Development","Mobile Apps",
  "API Integration","Cloud Automation","Digital Transformation","Custom Software",
];
const BADGES = [
  { icon:"G",  label:"Google Partner"    },
  { icon:"★",  label:"Clutch Top Agency" },
  { icon:"🔒", label:"GDPR / PIPEDA"     },
  { icon:"✦",  label:"ISO Certified"     },
];

type Form = { firstName:string; lastName:string; phone:string; email:string; service:string; message:string; };

const inputStyle: React.CSSProperties = {
  width:"100%", background:"rgba(255,255,255,0.05)",
  border:"1px solid rgba(255,255,255,0.1)", borderRadius:8,
  padding:"12px 16px", color:"#fff", fontSize:13.5,
  fontFamily:"var(--font-body)", outline:"none",
  boxSizing:"border-box", transition:"border-color 0.2s",
};

export default function Hero() {
  const [form, setForm] = useState<Form>({ firstName:"", lastName:"", phone:"", email:"", service:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = () => {
    if (!form.email || !form.firstName) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  return (
    <>
    <Cursor/>
     <Navbar />
    <section style={{
      position:"relative", minHeight:"100vh", display:"flex", alignItems:"center",
      overflow:"hidden", paddingTop:90,
      background:"linear-gradient(160deg,#010812 0%,#030B18 50%,#061425 100%)",
    }}>
      {/* Grid bg */}
      <div className="bg-grid" style={{ position:"absolute", inset:0, zIndex:0, pointerEvents:"none" }} />

      {/* Glow orbs */}
      <div style={{ position:"absolute", top:"5%", left:"15%", width:700, height:700,
        borderRadius:"50%", pointerEvents:"none", zIndex:0,
        background:"radial-gradient(circle,rgba(0,201,167,0.07) 0%,transparent 65%)" }} />
      <div style={{ position:"absolute", bottom:"-10%", right:"5%", width:500, height:500,
        borderRadius:"50%", pointerEvents:"none", zIndex:0,
        background:"radial-gradient(circle,rgba(31,209,181,0.05) 0%,transparent 65%)" }} />

      {/* Vertical lines */}
      {[38,62].map((pct,i) => (
        <div key={i} style={{ position:"absolute", top:0, left:`${pct}%`, width:1, height:"100%",
          background:"linear-gradient(180deg,transparent,rgba(0,201,167,0.12),transparent)",
          zIndex:1, pointerEvents:"none" }} />
      ))}

      {/* Content grid */}
      <div style={{
        position:"relative", zIndex:2, width:"100%",
        maxWidth:1240, margin:"0 auto", padding:"60px 48px",
        display:"grid", gridTemplateColumns:"1fr 430px", gap:72, alignItems:"center",
      }} className="hero-grid">

        {/* LEFT */}
        <div>
          {/* Eyebrow */}
          <motion.div initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }}
            transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
            style={{ display:"inline-flex", alignItems:"center", gap:10,
              background:"rgba(0,201,167,0.08)", border:"1px solid rgba(0,201,167,0.2)",
              borderRadius:100, padding:"6px 18px", marginBottom:32 }}>
            <span style={{ width:7, height:7, borderRadius:"50%", background:"#00C9A7",
              boxShadow:"0 0 8px #00C9A7", display:"inline-block",
              animation:"pulse-glow 2s ease-in-out infinite" }} />
            <span style={{ color:"#00C9A7", fontSize:11.5, fontWeight:700,
              letterSpacing:"0.1em", fontFamily:"var(--font-body)", textTransform:"uppercase" }}>
              Canada · USA · UK — Powered by India
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1 initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8, delay:0.08, ease:[0.22,1,0.36,1] }}
            style={{ fontFamily:"var(--font-display)", fontWeight:800, lineHeight:1.04,
              letterSpacing:"-0.025em", margin:"0 0 24px",
              fontSize:"clamp(40px,5.2vw,68px)" }}>
            Build Once.{" "}
            <span className="grad-text">Scale Everywhere.</span>
            <br />Automate Everything.
          </motion.h1>

          {/* Sub */}
          <motion.p initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.7, delay:0.18 }}
            style={{ color:"rgba(255,255,255,0.6)", fontSize:17, lineHeight:1.78,
              maxWidth:560, marginBottom:40, fontFamily:"var(--font-body)" }}>
            We design and develop custom CRM, ERP, web, and mobile systems that automate
            your operations and accelerate revenue — for businesses across Canada, USA, and the UK.
            Backed by{" "}
            <span style={{ color:"#00C9A7", fontWeight:600 }}>10+ years of deep tech expertise</span>
            {" "}from India's most trusted digital studio.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.6, delay:0.26 }}
            style={{ display:"flex", flexWrap:"wrap", gap:14, marginBottom:52 }}>
            <Link href="#consultation" className="btn-primary">📅 Book a Free Strategy Call</Link>
            <Link href="#solutions" className="btn-outline">Explore Solutions →</Link>
          </motion.div>

          {/* Badges */}
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.45 }}>
            <p style={{ fontSize:10.5, fontWeight:600, letterSpacing:"0.12em",
              color:"rgba(255,255,255,0.3)", marginBottom:14, textTransform:"uppercase",
              fontFamily:"var(--font-body)" }}>Trusted &amp; Certified</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
              {BADGES.map(b => (
                <div key={b.label} style={{ display:"flex", alignItems:"center", gap:7,
                  background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.09)",
                  borderRadius:7, padding:"6px 13px" }}>
                  <span style={{ fontSize:13, color:"#00C9A7" }}>{b.icon}</span>
                  <span style={{ color:"rgba(255,255,255,0.6)", fontSize:11.5,
                    fontWeight:500, fontFamily:"var(--font-body)" }}>{b.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT — FORM */}
        <motion.div id="consultation"
          initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }}
          transition={{ duration:0.85, delay:0.2, ease:[0.22,1,0.36,1] }}
          style={{ position:"relative", background:"rgba(6,20,37,0.9)",
            border:"1px solid rgba(0,201,167,0.2)", borderRadius:20,
            padding:"38px 34px", backdropFilter:"blur(24px)",
            boxShadow:"0 0 80px rgba(0,201,167,0.07)" }}>

          <div style={{ position:"absolute", top:0, left:"10%", right:"10%", height:1,
            background:"linear-gradient(90deg,transparent,#00C9A7,transparent)",
            opacity:0.5 }} />

          <div style={{ marginBottom:24 }}>
            <p style={{ color:"#00C9A7", fontSize:10.5, fontWeight:700,
              letterSpacing:"0.14em", marginBottom:6, fontFamily:"var(--font-body)",
              textTransform:"uppercase" }}>Free Strategy Consultation</p>
            <h3 style={{ color:"#fff", fontSize:21, fontWeight:700,
              fontFamily:"var(--font-display)", lineHeight:1.25, marginBottom:4 }}>
              Get a Free Consultation
            </h3>
            <p style={{ color:"rgba(255,255,255,0.45)", fontSize:13, fontFamily:"var(--font-body)" }}>
              Response within 24 hours · No commitment
            </p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="ok" initial={{ opacity:0, scale:0.94 }} animate={{ opacity:1, scale:1 }}
                style={{ textAlign:"center", padding:"44px 0" }}>
                <div style={{ fontSize:52, marginBottom:16 }}>✅</div>
                <p style={{ color:"#00C9A7", fontSize:20, fontWeight:700,
                  fontFamily:"var(--font-display)", marginBottom:8 }}>We'll be in touch!</p>
                <p style={{ color:"rgba(255,255,255,0.5)", fontSize:13.5, fontFamily:"var(--font-body)" }}>
                  Expect a response within 24 business hours.
                </p>
              </motion.div>
            ) : (
              <motion.div key="form" style={{ display:"flex", flexDirection:"column", gap:11 }}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:11 }}>
                  <input className="fi" style={inputStyle} placeholder="First Name *" value={form.firstName} onChange={set("firstName")}
                    onFocus={e=>(e.target.style.borderColor="rgba(0,201,167,0.5)")} onBlur={e=>(e.target.style.borderColor="rgba(255,255,255,0.1)")} />
                  <input className="fi" style={inputStyle} placeholder="Last Name" value={form.lastName} onChange={set("lastName")}
                    onFocus={e=>(e.target.style.borderColor="rgba(0,201,167,0.5)")} onBlur={e=>(e.target.style.borderColor="rgba(255,255,255,0.1)")} />
                </div>

                <div style={{ position:"relative" }}>
                  <select style={{ ...inputStyle, position:"absolute", left:0, top:0, bottom:0,
                    width:72, borderRadius:"8px 0 0 8px", borderRight:"1px solid rgba(255,255,255,0.08)",
                    padding:"0 8px", fontSize:13, color:"rgba(255,255,255,0.7)", height:"100%" }}>
                    <option>+1</option><option>+44</option><option>+91</option>
                  </select>
                  <input className="fi" style={{ ...inputStyle, paddingLeft:82 }} placeholder="Phone Number" value={form.phone} onChange={set("phone")}
                    onFocus={e=>(e.target.style.borderColor="rgba(0,201,167,0.5)")} onBlur={e=>(e.target.style.borderColor="rgba(255,255,255,0.1)")} />
                </div>

                <input className="fi" style={inputStyle} type="email" placeholder="Business Email *" value={form.email} onChange={set("email")}
                  onFocus={e=>(e.target.style.borderColor="rgba(0,201,167,0.5)")} onBlur={e=>(e.target.style.borderColor="rgba(255,255,255,0.1)")} />

                <select className="fi" style={{ ...inputStyle, color: form.service ? "#fff" : "rgba(255,255,255,0.35)" }}
                  value={form.service} onChange={set("service")}>
                  <option value="">Service of Interest</option>
                  {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>

                <textarea className="fi" style={{ ...inputStyle, resize:"vertical", minHeight:80 }}
                  rows={3} placeholder="Tell us about your project…" value={form.message} onChange={set("message")}
                  onFocus={e=>(e.target.style.borderColor="rgba(0,201,167,0.5)")} onBlur={e=>(e.target.style.borderColor="rgba(255,255,255,0.1)")} />

                <motion.button whileHover={{ boxShadow:"0 0 32px rgba(0,201,167,0.45)" }} whileTap={{ scale:0.98 }}
                  onClick={submit} disabled={loading}
                  style={{ width:"100%", padding:"14px", borderRadius:9,
                    background: loading ? "rgba(0,201,167,0.4)" : "linear-gradient(135deg,#00C9A7,#00a07a)",
                    border:"none", color:"#000", fontWeight:700, fontSize:14.5,
                    cursor: loading ? "not-allowed" : "pointer",
                    fontFamily:"var(--font-body)", letterSpacing:"0.02em", marginTop:4 }}>
                  {loading ? "Sending…" : "🚀 Get Free Consultation"}
                </motion.button>

                <p style={{ textAlign:"center", color:"rgba(255,255,255,0.28)", fontSize:11,
                  fontFamily:"var(--font-body)", marginTop:4 }}>
                  🔒 100% secure · GDPR &amp; PIPEDA compliant
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @media(max-width:1024px){
          .hero-grid { grid-template-columns:1fr !important; }
          .hero-grid > div:last-child { display:none; }
        }
      `}</style>
    </section>

      <StatsBar/>
      <ClientLogos/>
      <CRMServices/>
      <BestCRMCompany/>
      <CRMDoMore/>
      <AIPoweredCRM/>
      <CRMPlatformTools/>
      <HireCRMDevelopers/>
      {/* <CRMCTABanner/>  */}
      <KeyBenefits/>
        <HappyClients/>
        <WhyChooseUs/>
        <GlobalPresence/>
        <IndustriesFAQ/>
       
        <ReadyToBuild/>
        <Footer/>
      
       </>
  );
}