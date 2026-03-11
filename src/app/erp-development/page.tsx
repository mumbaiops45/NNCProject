// "use client";

// import { useRef, useEffect, useState, useCallback } from "react";
// import {
//   motion, useInView, useAnimation, useScroll, useTransform,
//   AnimatePresence, Variants,
// } from "framer-motion";

// /* ── NOTE ──────────────────────────────────────────────────
//    Navbar and Footer are imported from shared components.
//    Replace the two placeholder lines below with your actual
//    import paths once you move them to shared components:

//    import Navbar from "@/components/Navbar";
//    import Footer from "@/components/Footer";

//    Until then the page renders without nav/footer so you can
//    paste the Navbar and Footer blocks from CRMPage.tsx above
//    the default export if needed.
// ────────────────────────────────────────────────────────── */

// /* ══════════════════════════════════════════════════════════
//    DESIGN TOKENS  (identical to site-wide tokens)
// ══════════════════════════════════════════════════════════ */
// const TEAL  = "#00C9A7";
// const TEAL2 = "#00E5BB";
// const BG    = "#020810";
// const POP   = "'Poppins', sans-serif";
// const ease4: [number,number,number,number] = [0.22,1,0.36,1];

// const fadeUp:   Variants = { hidden:{opacity:0,y:32},    show:{opacity:1,y:0,  transition:{duration:0.65,ease:ease4}} };
// const fadeLeft: Variants = { hidden:{opacity:0,x:-36},   show:{opacity:1,x:0,  transition:{duration:0.65,ease:ease4}} };
// const fadeRight:Variants = { hidden:{opacity:0,x:36},    show:{opacity:1,x:0,  transition:{duration:0.65,ease:ease4}} };
// const scaleIn:  Variants = { hidden:{opacity:0,scale:.9},show:{opacity:1,scale:1,transition:{duration:0.6,ease:ease4}} };
// const staggerV: Variants = { hidden:{},                  show:{transition:{staggerChildren:0.09}} };

// /* ══════════════════════════════════════════════════════════
//    SHARED PRIMITIVES
// ══════════════════════════════════════════════════════════ */
// function GlowOrb({x="50%",y="50%",size=600,opacity=0.07}:{x?:string;y?:string;size?:number;opacity?:number}) {
//   return (
//     <motion.div animate={{scale:[1,1.18,1],opacity:[opacity,opacity*1.5,opacity]}}
//       transition={{duration:9,repeat:Infinity,ease:"easeInOut"}}
//       style={{position:"absolute",left:x,top:y,width:size,height:size,borderRadius:"50%",
//         background:"radial-gradient(circle,rgba(0,201,167,1) 0%,transparent 70%)",
//         transform:"translate(-50%,-50%)",filter:"blur(64px)",pointerEvents:"none",opacity}}/>
//   );
// }

// function Reveal({children,delay=0,className,style,variants=fadeUp}:{
//   children:React.ReactNode;delay?:number;className?:string;style?:React.CSSProperties;variants?:Variants;
// }) {
//   const ref=useRef<HTMLDivElement>(null);
//   const inV=useInView(ref,{once:true,margin:"-50px"});
//   return (
//     <motion.div ref={ref} className={className} style={style}
//       variants={variants} initial="hidden" animate={inV?"show":"hidden"}
//       transition={{delay,duration:0.7,ease:ease4}}>
//       {children}
//     </motion.div>
//   );
// }

// function SLabel({children}:{children:React.ReactNode}) {
//   return (
//     <motion.p initial={{opacity:0,x:-16}} whileInView={{opacity:1,x:0}}
//       viewport={{once:true}} transition={{duration:0.5,ease:ease4}}
//       style={{fontFamily:POP,fontSize:10.5,letterSpacing:"0.2em",color:TEAL,
//         textTransform:"uppercase",fontWeight:600,marginBottom:12}}>
//       {children}
//     </motion.p>
//   );
// }

// function AccentLine() {
//   return (
//     <motion.div initial={{width:0}} whileInView={{width:52}} viewport={{once:true}}
//       transition={{duration:0.6,delay:0.1,ease:ease4}}
//       style={{height:3,borderRadius:99,background:`linear-gradient(90deg,${TEAL},transparent)`,marginBottom:28}}/>
//   );
// }

// function CTABtn({children,outline=false,href="#",size="md",white=false}:{
//   children:React.ReactNode;outline?:boolean;href?:string;size?:"sm"|"md"|"lg";white?:boolean;
// }) {
//   const [hov,setHov]=useState(false);
//   const [pos,setPos]=useState({x:0,y:0});
//   const ref=useRef<HTMLAnchorElement>(null);
//   const onMove=useCallback((e:React.MouseEvent)=>{
//     if(!ref.current)return;
//     const r=ref.current.getBoundingClientRect();
//     setPos({x:(e.clientX-r.left-r.width/2)*.2,y:(e.clientY-r.top-r.height/2)*.2});
//   },[]);
//   const onLeave=useCallback(()=>{setPos({x:0,y:0});setHov(false);},[]);
//   const pad=size==="lg"?"15px 40px":size==="sm"?"9px 20px":"13px 30px";
//   const fz =size==="lg"?15:size==="sm"?12:13.5;
//   return (
//     <motion.a ref={ref} href={href}
//       animate={{x:pos.x,y:pos.y}} transition={{type:"spring",stiffness:280,damping:18}}
//       onMouseEnter={()=>setHov(true)} onMouseMove={onMove} onMouseLeave={onLeave}
//       whileTap={{scale:.96}}
//       style={{
//         display:"inline-flex",alignItems:"center",gap:9,
//         padding:pad,borderRadius:12,fontFamily:POP,fontWeight:600,fontSize:fz,
//         textDecoration:"none",letterSpacing:"0.01em",cursor:"pointer",
//         transition:"background .3s,box-shadow .3s,border-color .3s",
//         ...(white?{
//           background:hov?"rgba(255,255,255,0.9)":"#fff",color:"#020810",border:"none",
//           boxShadow:hov?"0 8px 32px rgba(255,255,255,0.25)":"0 4px 16px rgba(255,255,255,0.1)",
//         }:outline?{
//           border:`1.5px solid ${hov?TEAL:"rgba(255,255,255,0.2)"}`,
//           color:hov?TEAL:"rgba(255,255,255,0.7)",
//           background:hov?"rgba(0,201,167,0.05)":"transparent",
//         }:{
//           background:hov?`linear-gradient(135deg,${TEAL2},#1B9F7E)`:`linear-gradient(135deg,${TEAL},#1B8F6E)`,
//           color:"#020810",border:"none",
//           boxShadow:hov?"0 0 32px rgba(0,201,167,0.5),0 8px 32px rgba(0,201,167,0.25)":"0 4px 16px rgba(0,201,167,0.18)",
//         }),
//       }}>
//       {children}
//     </motion.a>
//   );
// }

// /* ══════════════════════════════════════════════════════════
//    PARTICLES
// ══════════════════════════════════════════════════════════ */
// function Particles() {
//   const ref=useRef<HTMLCanvasElement>(null);
//   useEffect(()=>{
//     const canvas=ref.current!,ctx=canvas.getContext("2d")!;
//     let W=canvas.width=window.innerWidth,H=canvas.height=window.innerHeight;
//     const resize=()=>{W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;};
//     window.addEventListener("resize",resize);
//     const dots=Array.from({length:50},()=>({
//       x:Math.random()*W,y:Math.random()*H,
//       r:Math.random()*1.4+.4,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28,
//       a:Math.random()*Math.PI*2,
//     }));
//     let frame:number;
//     const draw=()=>{
//       ctx.clearRect(0,0,W,H);
//       dots.forEach(d=>{
//         d.x+=d.vx;d.y+=d.vy;d.a+=.004;
//         if(d.x<0||d.x>W)d.vx*=-1;if(d.y<0||d.y>H)d.vy*=-1;
//         ctx.beginPath();ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
//         ctx.fillStyle=`rgba(0,201,167,${.1+.06*Math.sin(d.a)})`;ctx.fill();
//       });
//       for(let i=0;i<dots.length;i++)for(let j=i+1;j<dots.length;j++){
//         const dx=dots[i].x-dots[j].x,dy=dots[i].y-dots[j].y,dist=Math.sqrt(dx*dx+dy*dy);
//         if(dist<110){ctx.beginPath();ctx.moveTo(dots[i].x,dots[i].y);ctx.lineTo(dots[j].x,dots[j].y);
//           ctx.strokeStyle=`rgba(0,201,167,${.05*(1-dist/110)})`;ctx.lineWidth=.5;ctx.stroke();}
//       }
//       frame=requestAnimationFrame(draw);
//     };
//     draw();
//     return()=>{cancelAnimationFrame(frame);window.removeEventListener("resize",resize);};
//   },[]);
//   return <canvas ref={ref} style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:0}}/>;
// }

// /* ══════════════════════════════════════════════════════════
//    M1 — HERO FORM
// ══════════════════════════════════════════════════════════ */
// const ERP_SERVICES=[
//   "ERP Consulting","ERP Implementation","ERP Customisation",
//   "Inventory Management","HR & Payroll Module","Finance & Accounting",
//   "ERP Integration","ERP Migration","ERP Mobile Apps",
//   "Vendor Management","Manufacturing Module","ERP Support & Optimisation",
// ];

// function HeroForm() {
//   const [focus,setFocus]=useState<string|null>(null);
//   const [sent,setSent]=useState(false);
//   const fs=(n:string):React.CSSProperties=>({
//     width:"100%",padding:"12px 16px",borderRadius:10,fontFamily:POP,fontSize:13,fontWeight:300,
//     background:"rgba(255,255,255,0.04)",
//     border:`1px solid ${focus===n?"rgba(0,201,167,0.6)":"rgba(255,255,255,0.1)"}`,
//     color:"#fff",outline:"none",transition:"border-color .2s",
//   });
//   return (
//     <motion.div variants={scaleIn} initial="hidden" animate="show"
//       style={{background:"rgba(8,20,40,0.85)",border:"1px solid rgba(0,201,167,0.2)",borderRadius:24,
//         padding:"36px 32px",backdropFilter:"blur(16px)",boxShadow:"0 32px 80px rgba(0,0,0,.5)"}}>
//       <p style={{fontFamily:POP,fontWeight:700,fontSize:19,color:"#fff",marginBottom:4}}>Get a Free Consultation</p>
//       <p style={{fontFamily:POP,fontWeight:300,fontSize:12.5,color:"rgba(255,255,255,0.38)",marginBottom:22}}>Response within 24 hrs · No pressure</p>
//       {sent?(
//         <motion.div initial={{scale:.9,opacity:0}} animate={{scale:1,opacity:1}} style={{textAlign:"center",padding:"28px 0"}}>
//           <div style={{fontSize:44,marginBottom:10}}>✅</div>
//           <p style={{fontFamily:POP,fontWeight:600,color:TEAL,fontSize:16}}>We'll be in touch soon!</p>
//           <p style={{fontFamily:POP,fontWeight:300,color:"rgba(255,255,255,0.45)",fontSize:13,marginTop:6}}>Expect a reply within 24 hours.</p>
//         </motion.div>
//       ):(
//         <div style={{display:"flex",flexDirection:"column",gap:11}}>
//           <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:11}}>
//             <input placeholder="First Name" onFocus={()=>setFocus("fn")} onBlur={()=>setFocus(null)} style={fs("fn")}/>
//             <input placeholder="Last Name"  onFocus={()=>setFocus("ln")} onBlur={()=>setFocus(null)} style={fs("ln")}/>
//           </div>
//           <div style={{display:"grid",gridTemplateColumns:"140px 1fr",gap:11}}>
//             <select onFocus={()=>setFocus("d")} onBlur={()=>setFocus(null)} style={{...fs("d"),cursor:"pointer"}}>
//               {["+1 (Canada)","+1 (USA)","+44 (UK)","+91 (India)"].map(d=><option key={d} style={{background:"#0a1628"}}>{d}</option>)}
//             </select>
//             <input placeholder="Phone Number" type="tel" onFocus={()=>setFocus("ph")} onBlur={()=>setFocus(null)} style={fs("ph")}/>
//           </div>
//           <input placeholder="Business Email" type="email" onFocus={()=>setFocus("em")} onBlur={()=>setFocus(null)} style={fs("em")}/>
//           <select onFocus={()=>setFocus("sv")} onBlur={()=>setFocus(null)} style={{...fs("sv"),cursor:"pointer",color:"rgba(255,255,255,0.5)"}}>
//             <option value="" style={{background:"#0a1628"}}>Select Service</option>
//             {ERP_SERVICES.map(s=><option key={s} style={{background:"#0a1628"}}>{s}</option>)}
//           </select>
//           <textarea placeholder="Tell us about your project..." rows={3} onFocus={()=>setFocus("msg")} onBlur={()=>setFocus(null)} style={{...fs("msg"),resize:"vertical",minHeight:76}}/>
//           <motion.button whileTap={{scale:.97}} onClick={()=>setSent(true)}
//             style={{width:"100%",padding:"14px",borderRadius:12,border:"none",cursor:"pointer",
//               background:`linear-gradient(135deg,${TEAL},#1B8F6E)`,color:"#020810",
//               fontFamily:POP,fontWeight:700,fontSize:14,boxShadow:"0 6px 24px rgba(0,201,167,0.3)"}}>
//             Get Free Consultation →
//           </motion.button>
//         </div>
//       )}
//       <div style={{display:"flex",flexWrap:"wrap",gap:6,marginTop:18,justifyContent:"center"}}>
//         {["🏆 Google Partner","🔒 ISO","🇪🇺 GDPR","🇨🇦 PIPEDA","⭐ Clutch Top Agency"].map(b=>(
//           <span key={b} style={{fontFamily:POP,fontSize:9.5,fontWeight:500,padding:"4px 9px",borderRadius:999,
//             border:"1px solid rgba(255,255,255,0.1)",color:"rgba(255,255,255,0.4)"}}>
//             {b}
//           </span>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// /* ══════════════════════════════════════════════════════════
//    M2 — LOGO STRIP
// ══════════════════════════════════════════════════════════ */
// const CLIENT_LOGOS=["NovaBuild","MedSupply Co","RetailEdge","AgriFlow","HealthGrid","TrustStack","UrbanLogix","CureSync","PulseHR","BuildRight","LeadStack","NovaTrade"];

// function LogoStrip() {
//   const doubled=[...CLIENT_LOGOS,...CLIENT_LOGOS];
//   return (
//     <div style={{overflow:"hidden",position:"relative"}}>
//       <div style={{position:"absolute",left:0,top:0,bottom:0,width:120,zIndex:2,background:"linear-gradient(90deg,#020810,transparent)",pointerEvents:"none"}}/>
//       <div style={{position:"absolute",right:0,top:0,bottom:0,width:120,zIndex:2,background:"linear-gradient(-90deg,#020810,transparent)",pointerEvents:"none"}}/>
//       <motion.div animate={{x:["0%","-50%"]}} transition={{duration:30,repeat:Infinity,ease:"linear"}}
//         style={{display:"flex",gap:48,alignItems:"center",width:"max-content",paddingBottom:4}}>
//         {doubled.map((name,i)=>(
//           <div key={`${name}-${i}`}
//             style={{display:"flex",alignItems:"center",justifyContent:"center",
//               minWidth:130,height:46,borderRadius:10,
//               border:"1px solid rgba(255,255,255,0.07)",background:"rgba(255,255,255,0.025)",
//               padding:"0 22px",flexShrink:0}}>
//             <span style={{fontFamily:POP,fontWeight:600,fontSize:13,color:"rgba(255,255,255,0.25)",letterSpacing:"0.05em",whiteSpace:"nowrap"}}>{name}</span>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════════════════
//    M3 — CASE STUDY SLIDER
// ══════════════════════════════════════════════════════════ */
// const CASES=[
//   {
//     industry:"Manufacturing",icon:"🏭",metric:"35%",label:"Efficiency Gain",
//     desc:"Replaced 7 disconnected spreadsheet systems with a unified ERP for a Toronto-based manufacturer. Production planning, inventory, and billing in one platform.",
//     tags:["Inventory Module","Production Planning","Real-Time Dashboards"],
//     color:"rgba(0,201,167,0.1)",
//   },
//   {
//     industry:"Healthcare",icon:"🏥",metric:"42%",label:"Admin Cost Reduction",
//     desc:"Built a GDPR-compliant ERP for a UK healthcare network covering staff scheduling, patient billing, procurement, and compliance reporting.",
//     tags:["GDPR Compliant","HR Module","Finance Integration"],
//     color:"rgba(59,130,246,0.1)",
//   },
//   {
//     industry:"D2C E-commerce",icon:"🛒",metric:"2.4×",label:"Fulfilment Speed",
//     desc:"Custom Shopify-connected ERP for a US D2C brand. Real-time inventory sync, automated purchase orders, and 3PL integration cut fulfilment time in half.",
//     tags:["Shopify Integration","3PL Connect","Auto PO"],
//     color:"rgba(168,85,247,0.1)",
//   },
// ];

// function CaseSlider() {
//   const [active,setActive]=useState(0);
//   useEffect(()=>{const t=setInterval(()=>setActive(a=>(a+1)%CASES.length),5200);return()=>clearInterval(t);},[]);
//   const c=CASES[active];
//   return (
//     <div>
//       <AnimatePresence mode="wait">
//         <motion.div key={active}
//           initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-24}}
//           transition={{duration:0.5,ease:ease4}}
//           style={{background:c.color,border:"1px solid rgba(255,255,255,0.08)",borderRadius:24,
//             padding:"48px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center",
//             position:"relative",overflow:"hidden"}} className="case-grid">
//           <GlowOrb x="85%" y="50%" size={280} opacity={0.07}/>
//           <div>
//             <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
//               <span style={{fontSize:36}}>{c.icon}</span>
//               <p style={{fontFamily:POP,fontWeight:600,fontSize:11,letterSpacing:"0.14em",
//                 color:"rgba(255,255,255,0.4)",textTransform:"uppercase"}}>{c.industry}</p>
//             </div>
//             <p style={{fontFamily:POP,fontWeight:800,fontSize:"clamp(52px,6vw,80px)",color:TEAL,
//               lineHeight:1,letterSpacing:"-0.04em",marginBottom:4}}>{c.metric}</p>
//             <p style={{fontFamily:POP,fontWeight:500,fontSize:16,color:"rgba(255,255,255,0.75)",marginBottom:20}}>{c.label}</p>
//             <p style={{fontFamily:POP,fontWeight:300,fontSize:14.5,color:"rgba(255,255,255,0.5)",lineHeight:1.82}}>{c.desc}</p>
//           </div>
//           <div>
//             <div style={{display:"flex",flexWrap:"wrap",gap:10,marginBottom:32}}>
//               {c.tags.map(t=>(
//                 <span key={t} style={{fontFamily:POP,fontSize:12,fontWeight:500,padding:"7px 16px",borderRadius:999,
//                   border:"1px solid rgba(0,201,167,0.25)",color:"rgba(255,255,255,0.65)",background:"rgba(0,201,167,0.06)"}}>
//                   {t}
//                 </span>
//               ))}
//             </div>
//             <CTABtn outline>Read Full Case Study →</CTABtn>
//           </div>
//         </motion.div>
//       </AnimatePresence>
//       <div style={{display:"flex",gap:10,justifyContent:"center",marginTop:28}}>
//         {CASES.map((_,i)=>(
//           <button key={i} onClick={()=>setActive(i)}
//             style={{width:i===active?32:8,height:8,borderRadius:99,border:"none",cursor:"pointer",
//               background:i===active?TEAL:"rgba(255,255,255,0.18)",transition:"all .35s ease",padding:0}}/>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════════════════
//    M4 — SERVICES GRID
// ══════════════════════════════════════════════════════════ */
// const SERVICES=[
//   {icon:"🧠",title:"ERP Consulting",          desc:"End-to-end discovery workshops to map your processes, identify gaps, and recommend the right ERP architecture for your sector in Canada, USA or UK.",         badge:"ERP Implementation"},
//   {icon:"🏗️",title:"ERP Customisation",       desc:"Deep customisation of modules — inventory, finance, HR, production — tailored precisely to your workflows, not the other way around.",                     badge:"Inventory Management"},
//   {icon:"👥",title:"HR & Payroll Module",      desc:"Compliant HR and payroll systems built for Canadian, US, and UK employment law. Automate onboarding, leave, and payroll runs.",                            badge:"Finance & Accounting"},
//   {icon:"🔗",title:"ERP Integration",          desc:"Native connectors for QuickBooks, Xero, Sage, Shopify, 3PLs, and 200+ APIs — so your ERP becomes the single source of truth.",                           badge:"ERP Migration"},
//   {icon:"📱",title:"ERP Mobile Apps",          desc:"Custom mobile apps for field teams, warehouse staff, and managers — real-time data access from iOS and Android, fully synced with your ERP.",             badge:"Vendor Management"},
//   {icon:"🤖",title:"Manufacturing Module",     desc:"Production scheduling, BOM management, shop floor control, and quality assurance — built for discrete and process manufacturers in North America and UK.",  badge:"ERP Support & Optimisation"},
// ];

// function ServiceCard({s,i}:{s:typeof SERVICES[0];i:number}) {
//   const [hov,setHov]=useState(false);
//   return (
//     <motion.div
//       initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}}
//       viewport={{once:true}} transition={{delay:i*0.08,duration:0.6,ease:ease4}}
//       whileHover={{y:-8,transition:{type:"spring",stiffness:240,damping:16}}}
//       onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
//       style={{
//         padding:"32px 28px",borderRadius:20,cursor:"default",position:"relative",overflow:"hidden",
//         border:`1px solid ${hov?"rgba(0,201,167,0.4)":"rgba(255,255,255,0.07)"}`,
//         background:hov?"rgba(0,201,167,0.06)":"rgba(255,255,255,0.025)",
//         transition:"border-color .3s,background .3s",
//         boxShadow:hov?"0 16px 48px rgba(0,201,167,0.12)":"none",
//       }}>
//       <motion.div animate={{rotate:hov?[0,8,-4,0]:0}} transition={{duration:0.5}}
//         style={{fontSize:36,marginBottom:16,display:"inline-block"}}>{s.icon}</motion.div>
//       <p style={{fontFamily:POP,fontWeight:700,fontSize:16,color:"rgba(255,255,255,0.9)",marginBottom:10}}>{s.title}</p>
//       <p style={{fontFamily:POP,fontWeight:300,fontSize:13.5,color:"rgba(255,255,255,0.44)",lineHeight:1.75,marginBottom:18}}>{s.desc}</p>
//       <span style={{fontFamily:POP,fontSize:10.5,fontWeight:600,padding:"5px 12px",borderRadius:999,
//         background:"rgba(0,201,167,0.1)",border:"1px solid rgba(0,201,167,0.2)",color:TEAL,letterSpacing:"0.06em"}}>
//         + {s.badge}
//       </span>
//       <motion.div animate={{width:hov?"100%":"0%"}} transition={{duration:0.4,ease:ease4}}
//         style={{position:"absolute",bottom:0,left:0,height:2,background:`linear-gradient(90deg,${TEAL},transparent)`}}/>
//     </motion.div>
//   );
// }

// /* ══════════════════════════════════════════════════════════
//    M5 — BENEFITS
// ══════════════════════════════════════════════════════════ */
// const BENEFITS=[
//   {n:"01",icon:"🗄️",title:"Unified Data",
//    desc:"One source of truth across inventory, finance, HR, and operations. Eliminate data silos, manual reconciliation, and conflicting reports across departments."},
//   {n:"02",icon:"⚙️",title:"Operational Efficiency",
//    desc:"Automate repetitive workflows — purchase orders, invoice matching, payroll runs, stock reorders — and free your team to focus on growth, not admin."},
//   {n:"03",icon:"🔒",title:"Regulatory Compliance",
//    desc:"Built for Canadian, US, and UK compliance from day one: HST/GST, VAT, Making Tax Digital (HMRC), PIPEDA, GDPR, and SOX-ready audit trails."},
//   {n:"04",icon:"📈",title:"Scalable Architecture",
//    desc:"Cloud-native or on-premise. Modular design means you start with what you need and add modules — manufacturing, CRM, e-commerce — as your business grows."},
// ];

// function BenefitRow({b,i}:{b:typeof BENEFITS[0];i:number}) {
//   const [hov,setHov]=useState(false);
//   return (
//     <motion.div
//       initial={{opacity:0,x:i%2===0?-48:48}} whileInView={{opacity:1,x:0}}
//       viewport={{once:true}} transition={{delay:i*0.12,duration:0.7,ease:ease4}}
//       onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
//       style={{display:"grid",gridTemplateColumns:"80px 1fr",gap:32,alignItems:"center",
//         padding:"28px 32px",borderRadius:18,marginBottom:16,cursor:"default",
//         border:`1px solid ${hov?"rgba(0,201,167,0.3)":"rgba(255,255,255,0.06)"}`,
//         background:hov?"rgba(0,201,167,0.04)":"rgba(255,255,255,0.02)",
//         transition:"border-color .3s,background .3s"}}>
//       <div style={{textAlign:"center"}}>
//         <p style={{fontFamily:POP,fontWeight:800,fontSize:32,color:"rgba(0,201,167,0.2)",lineHeight:1,marginBottom:2}}>{b.n}</p>
//         <span style={{fontSize:24}}>{b.icon}</span>
//       </div>
//       <div>
//         <p style={{fontFamily:POP,fontWeight:700,fontSize:17,color:"rgba(255,255,255,0.9)",marginBottom:8}}>{b.title}</p>
//         <p style={{fontFamily:POP,fontWeight:300,fontSize:14,color:"rgba(255,255,255,0.45)",lineHeight:1.78}}>{b.desc}</p>
//       </div>
//     </motion.div>
//   );
// }

// /* ══════════════════════════════════════════════════════════
//    M6 — PLATFORM TOOLS
// ══════════════════════════════════════════════════════════ */
// const TOOLS=[
//   {icon:"🟣",name:"Odoo",           purpose:"Modular open-source ERP — best for SMBs and mid-market"},
//   {icon:"🔷",name:"SAP Business One",purpose:"Enterprise-grade SAP for fast-growing manufacturers & distributors"},
//   {icon:"🔵",name:"MS Dynamics 365",purpose:"Deep Microsoft 365 & Azure integration for mid-to-large enterprise"},
//   {icon:"🟠",name:"Oracle NetSuite", purpose:"Cloud-first ERP for multi-entity, multi-currency businesses"},
//   {icon:"⚡",name:"Custom ERP",      purpose:"100% bespoke — built exactly to your processes and compliance needs"},
//   {icon:"💚",name:"QuickBooks",      purpose:"Finance & accounting integration for SMB ERP extensions"},
//   {icon:"🔹",name:"Xero",            purpose:"Cloud accounting integration for UK, CA & AU businesses"},
//   {icon:"🟤",name:"Sage",            purpose:"Trusted accounting & ERP for UK mid-market businesses"},
// ];

// function ToolCard({t,i}:{t:typeof TOOLS[0];i:number}) {
//   const [hov,setHov]=useState(false);
//   return (
//     <motion.div
//       initial={{opacity:0,scale:.88}} whileInView={{opacity:1,scale:1}}
//       viewport={{once:true}} transition={{delay:i*0.06,duration:0.5,ease:ease4}}
//       whileHover={{y:-6,transition:{type:"spring",stiffness:240,damping:16}}}
//       onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
//       style={{padding:"24px 22px",borderRadius:16,cursor:"default",textAlign:"center",
//         border:`1px solid ${hov?"rgba(0,201,167,0.4)":"rgba(255,255,255,0.07)"}`,
//         background:hov?"rgba(0,201,167,0.06)":"rgba(255,255,255,0.025)",
//         transition:"all .3s",boxShadow:hov?"0 12px 40px rgba(0,201,167,0.12)":"none"}}>
//       <motion.div animate={{rotate:hov?360:0}} transition={{duration:0.6,ease:ease4}}
//         style={{fontSize:36,marginBottom:12,display:"inline-block"}}>{t.icon}</motion.div>
//       <p style={{fontFamily:POP,fontWeight:700,fontSize:14,color:"rgba(255,255,255,0.88)",marginBottom:8}}>{t.name}</p>
//       <p style={{fontFamily:POP,fontWeight:300,fontSize:12,color:"rgba(255,255,255,0.38)",lineHeight:1.6}}>{t.purpose}</p>
//     </motion.div>
//   );
// }

// /* ══════════════════════════════════════════════════════════
//    M7 — HIRE DEVELOPERS
// ══════════════════════════════════════════════════════════ */
// const HIRE_L=[
//   {title:"Enterprises",  desc:"Complex multi-location, multi-currency ERP rollouts with change management and training included."},
//   {title:"Start-ups",    desc:"Scalable ERP foundations built to grow — start with finance and inventory, expand as you scale."},
//   {title:"Distributors", desc:"Wholesale, 3PL, and distribution ERP with real-time inventory, vendor management, and logistics."},
// ];
// const HIRE_R=[
//   {title:"Analytical",    desc:"Turn raw operational data into strategic dashboards, KPI alerts, and boardroom-ready reports."},
//   {title:"Operational",   desc:"Automate daily workflows — purchase orders, stock replenishment, payroll, and invoice matching."},
//   {title:"Collaborative", desc:"Break departmental silos with shared ERP modules that keep finance, ops, and HR aligned."},
// ];

// /* ══════════════════════════════════════════════════════════
//    M8 — AI FEATURES
// ══════════════════════════════════════════════════════════ */
// const AI_FEATURES=[
//   {icon:"📊",title:"AI Data Analysis",     desc:"Intelligent parsing of operational data — inventory trends, supplier performance, margin erosion — surfaced automatically."},
//   {icon:"🔮",title:"Predictive Insights",  desc:"ML-driven demand forecasting, cash flow prediction, and reorder point optimisation with accuracy improving over time."},
//   {icon:"⚡",title:"Automation at Scale",  desc:"Trigger-based workflows that act on real-time data — auto-generate POs, flag anomalies, and close month-end faster."},
//   {icon:"📡",title:"Real-Time Dashboards", desc:"Live operational KPIs for inventory, finance, and HR. Drill down by site, department, or date range with one click."},
// ];

// /* ══════════════════════════════════════════════════════════
//    M10 — WHY CHOOSE US
// ══════════════════════════════════════════════════════════ */
// const WHY_POINTS=[
//   {icon:"🏆",text:"8+ years and 565+ delivered projects through Nakshatra Namaha Creations"},
//   {icon:"🌍",text:"Dedicated client-facing teams in Canada, USA, and UK time zones"},
//   {icon:"💰",text:"Transparent fixed pricing — no hourly billing surprises"},
//   {icon:"📋",text:"GDPR, PIPEDA, CCPA, Making Tax Digital compliance built in from day one"},
//   {icon:"🤝",text:"Long-term partnership model — we don't disappear after go-live"},
//   {icon:"🚀",text:"Agile delivery with fortnightly demos and live progress dashboards"},
// ];

// /* ══════════════════════════════════════════════════════════
//    M12 — FAQS
// ══════════════════════════════════════════════════════════ */
// const FAQS=[
//   {
//     q:"How long does ERP implementation take?",
//     a:"A standard custom ERP implementation takes 12–24 weeks depending on the number of modules, integrations, and data migration complexity. Smaller ERP customisation or module additions typically take 6–10 weeks. We use agile sprints with fortnightly demos so you see progress throughout. Discovery and architecture planning typically adds 2–3 weeks before development begins — this phase is essential to avoid costly rework later.",
//   },
//   {
//     q:"Can you integrate with QuickBooks, Xero, or Sage?",
//     a:"Yes — all three are standard integration targets for us. We build bidirectional connectors that sync invoices, payments, bank reconciliation, and chart of accounts in real time. For UK businesses, we also build Making Tax Digital (MTD)-compliant Xero and Sage integrations. For Canadian businesses, we handle GST/HST reporting through QuickBooks and Xero bridges.",
//   },
//   {
//     q:"Is your ERP compliant with Canadian and UK tax law?",
//     a:"Yes. Every ERP we build for Canadian clients is configured for GST, HST, PST by province, and CRA reporting. For UK clients, we build VAT-compliant systems with Making Tax Digital (MTD) submission capability, fully recognised by HMRC. For US clients, we configure state sales tax, multi-jurisdiction rules, and 1099 reporting. Compliance is built in at the architecture level, not bolted on afterwards.",
//   },
//   {
//     q:"What does custom ERP development cost?",
//     a:"ERP module additions or integrations typically start from CA$12,000 / £8,000. Full custom ERP builds start from CA$40,000 / £28,000 depending on scope, number of users, modules, and integration complexity. All proposals are fixed-price with a detailed scope document — no hourly billing, no scope creep surprises. We provide a detailed proposal after a free 45-minute discovery call.",
//   },
//   {
//     q:"Can you migrate data from our existing ERP?",
//     a:"Yes — data migration is a core part of every ERP project we deliver. We conduct a full data audit, cleanse and map your existing data, run parallel environments during cutover, and validate every record before go-live. We've migrated from Sage, SAP, Microsoft Navision, QuickBooks, spreadsheets, and legacy custom systems. All migrations are documented and reversible.",
//   },
// ];

// function FAQItem({faq,i}:{faq:typeof FAQS[0];i:number}) {
//   const [open,setOpen]=useState(false);
//   return (
//     <motion.div
//       initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}
//       viewport={{once:true}} transition={{delay:i*0.07,duration:0.55,ease:ease4}}
//       style={{borderBottom:"1px solid rgba(255,255,255,0.07)",overflow:"hidden"}}>
//       <button onClick={()=>setOpen(o=>!o)}
//         style={{width:"100%",padding:"22px 0",background:"none",border:"none",cursor:"pointer",
//           display:"flex",justifyContent:"space-between",alignItems:"center",gap:16,textAlign:"left"}}>
//         <span style={{fontFamily:POP,fontWeight:600,fontSize:15.5,lineHeight:1.5,
//           color:open?"#fff":"rgba(255,255,255,0.75)",transition:"color .2s"}}>{faq.q}</span>
//         <motion.div animate={{rotate:open?45:0}} transition={{duration:0.25,ease:ease4}}
//           style={{width:28,height:28,borderRadius:"50%",flexShrink:0,display:"grid",placeItems:"center",
//             border:`1px solid ${open?"rgba(0,201,167,0.5)":"rgba(255,255,255,0.15)"}`,
//             background:open?"rgba(0,201,167,0.1)":"transparent",transition:"border-color .25s,background .25s"}}>
//           <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
//             stroke={open?TEAL:"rgba(255,255,255,0.5)"} strokeWidth="2.5" strokeLinecap="round">
//             <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
//           </svg>
//         </motion.div>
//       </button>
//       <AnimatePresence>
//         {open&&(
//           <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}}
//             exit={{height:0,opacity:0}} transition={{duration:0.35,ease:ease4}}>
//             <p style={{fontFamily:POP,fontWeight:300,fontSize:14.5,color:"rgba(255,255,255,0.5)",
//               lineHeight:1.85,paddingBottom:24}}>{faq.a}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }

// /* ══════════════════════════════════════════════════════════
//    M13 — CONTACT FORM
// ══════════════════════════════════════════════════════════ */
// function ContactForm() {
//   const [focus,setFocus]=useState<string|null>(null);
//   const [sent,setSent]=useState(false);
//   const fs=(n:string):React.CSSProperties=>({
//     width:"100%",padding:"14px 18px",borderRadius:12,fontFamily:POP,fontSize:14,fontWeight:300,
//     background:"rgba(255,255,255,0.04)",
//     border:`1px solid ${focus===n?"rgba(0,201,167,0.6)":"rgba(255,255,255,0.1)"}`,
//     color:"#fff",outline:"none",transition:"border-color .2s",
//   });
//   return sent?(
//     <motion.div initial={{scale:.9,opacity:0}} animate={{scale:1,opacity:1}}
//       style={{textAlign:"center",padding:"60px 40px"}}>
//       <div style={{fontSize:56,marginBottom:16}}>🎉</div>
//       <p style={{fontFamily:POP,fontWeight:700,fontSize:22,color:TEAL,marginBottom:8}}>Message Sent!</p>
//       <p style={{fontFamily:POP,fontWeight:300,fontSize:15,color:"rgba(255,255,255,0.45)"}}>We'll reply within 24 hours.</p>
//     </motion.div>
//   ):(
//     <div style={{display:"flex",flexDirection:"column",gap:14}}>
//       <input placeholder="Your Full Name" onFocus={()=>setFocus("n")} onBlur={()=>setFocus(null)} style={fs("n")}/>
//       <div style={{display:"grid",gridTemplateColumns:"140px 1fr",gap:14}}>
//         <select onFocus={()=>setFocus("d")} onBlur={()=>setFocus(null)} style={{...fs("d"),cursor:"pointer"}}>
//           {["+1 (Canada)","+1 (USA)","+44 (UK)","+91 (India)"].map(d=><option key={d} style={{background:"#0a1628"}}>{d}</option>)}
//         </select>
//         <input placeholder="Phone Number" type="tel" onFocus={()=>setFocus("ph")} onBlur={()=>setFocus(null)} style={fs("ph")}/>
//       </div>
//       <input placeholder="Business Email Address" type="email" onFocus={()=>setFocus("em")} onBlur={()=>setFocus(null)} style={fs("em")}/>
//       <textarea placeholder="Describe your project or challenge..." rows={5}
//         onFocus={()=>setFocus("msg")} onBlur={()=>setFocus(null)}
//         style={{...fs("msg"),resize:"vertical",minHeight:120}}/>
//       <motion.button whileTap={{scale:.97}} onClick={()=>setSent(true)}
//         style={{padding:"15px",borderRadius:12,border:"none",cursor:"pointer",
//           fontFamily:POP,fontWeight:700,fontSize:15,
//           background:`linear-gradient(135deg,${TEAL},#1B8F6E)`,color:"#020810",
//           boxShadow:"0 8px 28px rgba(0,201,167,0.3)"}}>
//         Submit →
//       </motion.button>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════════════════
//    PAGE EXPORT
// ══════════════════════════════════════════════════════════ */
// export default function ERPPage() {
//   const heroCtrl=useAnimation();
//   useEffect(()=>{heroCtrl.start("show");},[heroCtrl]);

//   const heroRef=useRef<HTMLDivElement>(null);
//   const {scrollYProgress}=useScroll({target:heroRef,offset:["start start","end start"]});
//   const heroY=useTransform(scrollYProgress,[0,1],[0,120]);
//   const heroO=useTransform(scrollYProgress,[0,.7],[1,0]);

//   return (
//     <>
//       {/* ── GLOBAL STYLES ────────────────────────────────── */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,600&display=swap');
//         *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
//         html,body{background:${BG};scroll-behavior:smooth;font-family:${POP};}
//         ::selection{background:rgba(0,201,167,.3);}

//         @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
//         .shimmer{
//           background:linear-gradient(90deg,${TEAL} 0%,#fff 40%,${TEAL2} 60%,${TEAL} 100%);
//           background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;
//           background-clip:text;animation:shimmer 4s linear infinite;
//         }
//         .hero-grid{
//           position:absolute;inset:0;pointer-events:none;
//           background-image:linear-gradient(rgba(0,201,167,.03) 1px,transparent 1px),
//             linear-gradient(90deg,rgba(0,201,167,.03) 1px,transparent 1px);
//           background-size:72px 72px;
//           mask-image:radial-gradient(ellipse 85% 65% at 50% 0%,black 40%,transparent 100%);
//         }
//         .section{padding:100px 56px;max-width:1280px;margin:0 auto;}
//         .divider{border:none;border-top:1px solid rgba(255,255,255,.05);margin:0 56px;}
//         .footer-bottom-link:hover{color:${TEAL} !important;}

//         @media(max-width:1024px){
//           .hero-split{flex-direction:column !important;gap:48px !important;}
//           .case-grid{grid-template-columns:1fr !important;}
//           .hire-split{grid-template-columns:1fr !important;}
//           .ai-grid{grid-template-columns:1fr 1fr !important;}
//         }
//         @media(max-width:900px){
//           .section{padding:72px 24px;}
//           .divider{margin:0 24px;}
//           .services-grid{grid-template-columns:1fr 1fr !important;}
//           .tools-grid{grid-template-columns:1fr 1fr 1fr !important;}
//           .global-grid{grid-template-columns:1fr !important;}
//           .why-split{flex-direction:column !important;gap:40px !important;}
//         }
//         @media(max-width:600px){
//           .services-grid{grid-template-columns:1fr !important;}
//           .tools-grid{grid-template-columns:1fr 1fr !important;}
//           .ai-grid{grid-template-columns:1fr !important;}
//           .section{padding:56px 18px;}
//         }
//       `}</style>

//       {/* ── NAVBAR (import from shared component) ────────── */}
//       {/* <Navbar /> */}

//       <main style={{background:BG,color:"#fff"}}>

//         {/* ══ M1 — HERO ══════════════════════════════════════ */}
//         <section ref={heroRef} style={{position:"relative",overflow:"hidden",paddingTop:160,paddingBottom:120}}>
//           <Particles/>
//           <div className="hero-grid"/>
//           <GlowOrb x="25%" y="35%" size={700} opacity={.06}/>
//           <GlowOrb x="82%" y="62%" size={420} opacity={.04}/>

//           <motion.div style={{maxWidth:1280,margin:"0 auto",padding:"0 56px",position:"relative",zIndex:1,y:heroY,opacity:heroO}}>
//             <motion.div variants={staggerV} initial="hidden" animate={heroCtrl}>

//               {/* Live badge */}
//               <motion.div variants={fadeUp}>
//                 <motion.div
//                   animate={{borderColor:["rgba(0,201,167,.2)","rgba(0,201,167,.7)","rgba(0,201,167,.2)"]}}
//                   transition={{duration:3,repeat:Infinity}}
//                   style={{display:"inline-flex",alignItems:"center",gap:10,padding:"7px 18px",
//                     borderRadius:999,background:"rgba(0,201,167,.07)",border:"1px solid rgba(0,201,167,.2)",marginBottom:28}}>
//                   <motion.span animate={{scale:[1,1.5,1],opacity:[1,.5,1]}} transition={{duration:2,repeat:Infinity}}
//                     style={{width:7,height:7,borderRadius:"50%",background:TEAL,display:"block",boxShadow:`0 0 10px ${TEAL}`}}/>
//                   <span style={{fontFamily:POP,fontSize:11,fontWeight:600,letterSpacing:".16em",
//                     color:"rgba(0,201,167,.9)",textTransform:"uppercase"}}>
//                     ERP Development · Canada · USA · UK
//                   </span>
//                 </motion.div>
//               </motion.div>

//               {/* Split: headline + form */}
//               <div className="hero-split" style={{display:"flex",gap:64,alignItems:"flex-start"}}>

//                 {/* LEFT — copy */}
//                 <div style={{flex:"1 1 520px"}}>
//                   <motion.h1 variants={fadeUp}
//                     style={{fontFamily:POP,fontWeight:800,fontSize:"clamp(30px,4.5vw,64px)",
//                       lineHeight:1.08,letterSpacing:"-0.03em",marginBottom:8,color:"rgba(255,255,255,.95)"}}>
//                     Custom ERP Development
//                   </motion.h1>
//                   <motion.h1 variants={fadeUp} className="shimmer"
//                     style={{fontFamily:POP,fontWeight:800,fontSize:"clamp(30px,4.5vw,64px)",
//                       lineHeight:1.08,letterSpacing:"-0.03em",marginBottom:8}}>
//                     for Growing Businesses
//                   </motion.h1>
//                   <motion.h1 variants={fadeUp}
//                     style={{fontFamily:POP,fontWeight:800,fontSize:"clamp(30px,4.5vw,64px)",
//                       lineHeight:1.08,letterSpacing:"-0.03em",marginBottom:32,color:"rgba(255,255,255,.95)"}}>
//                     in Canada, USA &amp; UK
//                   </motion.h1>

//                   <motion.p variants={fadeUp}
//                     style={{fontFamily:POP,fontWeight:300,fontSize:17,lineHeight:1.82,
//                       color:"rgba(255,255,255,.44)",maxWidth:560,marginBottom:16}}>
//                     Running your business on spreadsheets and disconnected tools is costing you more than you think.
//                   </motion.p>
//                   <motion.p variants={fadeUp}
//                     style={{fontFamily:POP,fontWeight:400,fontSize:17,lineHeight:1.82,
//                       color:"rgba(255,255,255,.7)",maxWidth:560,marginBottom:40}}>
//                     A custom ERP from NNC Digital brings <strong style={{color:TEAL}}>inventory, finance, HR, and operations</strong> into one unified platform — designed for your exact business, compliant with your local regulations.
//                   </motion.p>

//                   <motion.div variants={fadeUp} style={{display:"flex",gap:14,flexWrap:"wrap",marginBottom:36}}>
//                     <CTABtn size="lg">Get Free Consultation</CTABtn>
//                     <CTABtn outline size="lg">View Case Studies →</CTABtn>
//                   </motion.div>

//                   {/* Trust badges */}
//                   <motion.div variants={fadeUp} style={{display:"flex",flexWrap:"wrap",gap:10}}>
//                     {["🏆 Google Partner","🔒 ISO Certified","🇪🇺 GDPR","🇨🇦 PIPEDA","⭐ Clutch Top Agency"].map(b=>(
//                       <span key={b} style={{fontFamily:POP,fontSize:11,fontWeight:500,padding:"6px 14px",
//                         borderRadius:999,border:"1px solid rgba(255,255,255,.1)",
//                         color:"rgba(255,255,255,.45)",background:"rgba(255,255,255,.02)"}}>
//                         {b}
//                       </span>
//                     ))}
//                   </motion.div>

//                   {/* Mini stats */}
//                   <motion.div variants={fadeUp}
//                     style={{display:"flex",gap:0,marginTop:48,borderTop:"1px solid rgba(255,255,255,.07)",paddingTop:32,flexWrap:"wrap"}}>
//                     {[
//                       {val:"565+",label:"Projects Delivered"},
//                       {val:"8+",  label:"Years of Excellence"},
//                       {val:"98%", label:"Client Satisfaction"},
//                     ].map((s,i)=>(
//                       <div key={s.label} style={{flex:"1 1 120px",paddingRight:28,
//                         borderRight:i<2?"1px solid rgba(255,255,255,.07)":"none",paddingLeft:i>0?28:0}}>
//                         <p style={{fontFamily:POP,fontWeight:800,fontSize:34,color:TEAL,
//                           letterSpacing:"-0.03em",lineHeight:1,marginBottom:6}}>{s.val}</p>
//                         <p style={{fontFamily:POP,fontWeight:400,fontSize:10.5,
//                           color:"rgba(255,255,255,.32)",letterSpacing:".12em",textTransform:"uppercase"}}>{s.label}</p>
//                       </div>
//                     ))}
//                   </motion.div>
//                 </div>

//                 {/* RIGHT — form */}
//                 <div style={{flex:"0 0 420px",width:"100%",maxWidth:420}}>
//                   <HeroForm/>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </section>

//         <hr className="divider"/>

//         {/* ══ M2 — CLIENTS ══════════════════════════════════ */}
//         <section style={{padding:"64px 0",overflow:"hidden"}}>
//           <Reveal>
//             <p style={{fontFamily:POP,fontWeight:600,fontSize:11,letterSpacing:".18em",textTransform:"uppercase",
//               color:"rgba(255,255,255,.3)",textAlign:"center",marginBottom:32}}>
//               Our Happy Clients
//             </p>
//           </Reveal>
//           <LogoStrip/>
//         </section>

//         <hr className="divider"/>

//         {/* ══ M3 — SUCCESS STORIES ══════════════════════════ */}
//         <section>
//           <div className="section">
//             <Reveal>
//               <SLabel>Success Stories</SLabel>
//               <AccentLine/>
//               <h2 style={{fontFamily:POP,fontWeight:700,fontSize:"clamp(26px,3vw,44px)",
//                 letterSpacing:"-0.025em",color:"rgba(255,255,255,.92)",marginBottom:48}}>
//                 Real Results for Real Businesses
//               </h2>
//             </Reveal>
//             <Reveal delay={.1}><CaseSlider/></Reveal>
//           </div>
//         </section>

//         <hr className="divider"/>

//         {/* ══ M4 — SERVICES ═════════════════════════════════ */}
//         <section style={{position:"relative",overflow:"hidden"}}>
//           <GlowOrb x="92%" y="50%" size={480} opacity={.04}/>
//           <div className="section">
//             <Reveal>
//               <SLabel>What We Offer</SLabel>
//               <AccentLine/>
//               <h2 style={{fontFamily:POP,fontWeight:700,fontSize:"clamp(26px,3vw,44px)",
//                 letterSpacing:"-0.025em",color:"rgba(255,255,255,.92)",marginBottom:52}}>
//                 ERP Development Services We Offer
//               </h2>
//             </Reveal>
//             <div className="services-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
//               {SERVICES.map((s,i)=><ServiceCard key={s.title} s={s} i={i}/>)}
//             </div>
//           </div>
//         </section>

//         <hr className="divider"/>

//         {/* ══ M5 — BENEFITS ═════════════════════════════════ */}
//         <section style={{background:"rgba(0,201,167,.015)",borderTop:"1px solid rgba(0,201,167,.07)",borderBottom:"1px solid rgba(0,201,167,.07)"}}>
//           <div className="section">
//             <Reveal>
//               <SLabel>Why It Works</SLabel>
//               <AccentLine/>
//               <h2 style={{fontFamily:POP,fontWeight:700,fontSize:"clamp(26px,3vw,44px)",
//                 letterSpacing:"-0.025em",color:"rgba(255,255,255,.92)",marginBottom:48}}>
//                 Key Benefits of Custom ERP Development
//               </h2>
//             </Reveal>
//             <div style={{maxWidth:860,margin:"0 auto"}}>
//               {BENEFITS.map((b,i)=><BenefitRow key={b.n} b={b} i={i}/>)}
//             </div>
//           </div>
//         </section>

//         {/* ══ M6 — TOOLS ════════════════════════════════════ */}
//         <section>
//           <div className="section">
//             <Reveal>
//               <SLabel>Platform Expertise</SLabel>
//               <AccentLine/>
//               <h2 style={{fontFamily:POP,fontWeight:700,fontSize:"clamp(26px,3vw,44px)",
//                 letterSpacing:"-0.025em",color:"rgba(255,255,255,.92)",marginBottom:52}}>
//                 Leading ERP Platforms We Work With
//               </h2>
//             </Reveal>
//             <div className="tools-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
//               {TOOLS.map((t,i)=><ToolCard key={t.name} t={t} i={i}/>)}
//             </div>
//           </div>
//         </section>

//         <hr className="divider"/>

//         {/* ══ M7 — HIRE DEVELOPERS ══════════════════════════ */}
//         <section style={{position:"relative",overflow:"hidden"}}>
//           <GlowOrb x="50%" y="50%" size={600} opacity={.04}/>
//           <div className="section">
//             <Reveal>
//               <SLabel>Who We Build For</SLabel>
//               <AccentLine/>
//               <h2 style={{fontFamily:POP,fontWeight:700,fontSize:"clamp(26px,3vw,44px)",
//                 letterSpacing:"-0.025em",color:"rgba(255,255,255,.92)",marginBottom:52}}>
//                 Hire ERP Developers Tailored to Your Needs
//               </h2>
//             </Reveal>
//             <div className="hire-split" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24}}>
//               <div style={{display:"flex",flexDirection:"column",gap:16}}>
//                 <p style={{fontFamily:POP,fontWeight:600,fontSize:9.5,letterSpacing:".18em",
//                   textTransform:"uppercase",color:"rgba(255,255,255,.3)",marginBottom:4}}>Who We Serve</p>
//                 {HIRE_L.map((h,i)=>(
//                   <motion.div key={h.title}
//                     initial={{opacity:0,x:-24}} whileInView={{opacity:1,x:0}}
//                     viewport={{once:true}} transition={{delay:i*.1,duration:.6,ease:ease4}}
//                     style={{padding:"24px 28px",borderRadius:16,
//                       border:"1px solid rgba(255,255,255,.07)",background:"rgba(255,255,255,.025)"}}>
//                     <p style={{fontFamily:POP,fontWeight:700,fontSize:16,color:TEAL,marginBottom:8}}>{h.title}</p>
//                     <p style={{fontFamily:POP,fontWeight:300,fontSize:13.5,color:"rgba(255,255,255,.45)",lineHeight:1.75}}>{h.desc}</p>
//                   </motion.div>
//                 ))}
//               </div>
//               <div style={{display:"flex",flexDirection:"column",gap:16}}>
//                 <p style={{fontFamily:POP,fontWeight:600,fontSize:9.5,letterSpacing:".18em",
//                   textTransform:"uppercase",color:"rgba(255,255,255,.3)",marginBottom:4}}>How We Deliver</p>
//                 {HIRE_R.map((h,i)=>(
//                   <motion.div key={h.title}
//                     initial={{opacity:0,x:24}} whileInView={{opacity:1,x:0}}
//                     viewport={{once:true}} transition={{delay:i*.1,duration:.6,ease:ease4}}
//                     style={{padding:"24px 28px",borderRadius:16,
//                       border:"1px solid rgba(0,201,167,.15)",background:"rgba(0,201,167,.03)"}}>
//                     <p style={{fontFamily:POP,fontWeight:700,fontSize:16,color:"rgba(255,255,255,.88)",marginBottom:8}}>{h.title}</p>
//                     <p style={{fontFamily:POP,fontWeight:300,fontSize:13.5,color:"rgba(255,255,255,.45)",lineHeight:1.75}}>{h.desc}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         <hr className="divider"/>

//         {/* ══ M8 — AI SOLUTIONS ═════════════════════════════ */}
//         <section style={{background:"rgba(0,201,167,.015)",borderTop:"1px solid rgba(0,201,167,.07)",
//           borderBottom:"1px solid rgba(0,201,167,.07)",position:"relative",overflow:"hidden"}}>
//           <GlowOrb x="80%" y="50%" size={500} opacity={.05}/>
//           <div className="section">
//             <Reveal>
//               <SLabel>AI-Powered ERP</SLabel>
//               <AccentLine/>
//               <h2 style={{fontFamily:POP,fontWeight:700,fontSize:"clamp(26px,3vw,44px)",
//                 letterSpacing:"-0.025em",color:"rgba(255,255,255,.92)",marginBottom:52}}>
//                 Leverage AI-Powered ERP Solutions
//               </h2>
//             </Reveal>
//             <div className="ai-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20}}>
//               {AI_FEATURES.map((f,i)=>(
//                 <motion.div key={f.title}
//                   initial={{opacity:0,y:32}} whileInView={{opacity:1,y:0}}
//                   viewport={{once:true}} transition={{delay:i*.1,duration:.6,ease:ease4}}
//                   whileHover={{y:-6,borderColor:"rgba(0,201,167,.4)"}}
//                   style={{padding:"28px 24px",borderRadius:18,border:"1px solid rgba(255,255,255,.07)",
//                     background:"rgba(255,255,255,.025)",transition:"all .3s",cursor:"default"}}>
//                   <span style={{fontSize:36,display:"block",marginBottom:14}}>{f.icon}</span>
//                   <p style={{fontFamily:POP,fontWeight:700,fontSize:15,color:"rgba(255,255,255,.9)",marginBottom:10}}>{f.title}</p>
//                   <p style={{fontFamily:POP,fontWeight:300,fontSize:13,color:"rgba(255,255,255,.42)",lineHeight:1.75}}>{f.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ══ M9 — FULL-WIDTH CTA BANNER ════════════════════ */}
//         <section style={{background:"linear-gradient(135deg,#061428 0%,#0a1f3a 100%)",
//           padding:"88px 56px",textAlign:"center",position:"relative",overflow:"hidden"}}>
//           <GlowOrb x="15%" y="50%" size={420} opacity={.06}/>
//           <GlowOrb x="85%" y="50%" size={380} opacity={.05}/>
//           <Reveal>
//             <motion.div
//               animate={{borderColor:["rgba(0,201,167,.15)","rgba(0,201,167,.45)","rgba(0,201,167,.15)"]}}
//               transition={{duration:4,repeat:Infinity}}
//               style={{display:"inline-block",padding:"2px",borderRadius:999,
//                 border:"1px solid rgba(0,201,167,.2)",marginBottom:24}}>
//               <span style={{fontFamily:POP,fontWeight:600,fontSize:10.5,letterSpacing:".18em",
//                 color:"rgba(0,201,167,.8)",textTransform:"uppercase",padding:"6px 16px",display:"block"}}>
//                 Transform Your Business
//               </span>
//             </motion.div>
//             <h2 style={{fontFamily:POP,fontWeight:800,fontSize:"clamp(26px,4vw,52px)",
//               letterSpacing:"-0.03em",lineHeight:1.12,color:"#fff",maxWidth:800,margin:"0 auto 20px"}}>
//               Want ERP Solutions That Take Your Business to the Next Level?
//             </h2>
//             <p style={{fontFamily:POP,fontWeight:300,fontSize:16,color:"rgba(255,255,255,.45)",
//               maxWidth:520,margin:"0 auto 40px",lineHeight:1.75}}>
//               Connect with NNC Digital today. Free consultation. Fixed pricing. Real results.
//             </p>
//             <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
//               <CTABtn white size="lg">Connect Now →</CTABtn>
//               <CTABtn outline size="lg">View Our Work</CTABtn>
//             </div>
//           </Reveal>
//         </section>

//         {/* ══ M10 — WHY CHOOSE US ═══════════════════════════ */}
//         <section>
//           <div className="section">
//             <div className="why-split" style={{display:"flex",gap:72,alignItems:"center"}}>

//               {/* Left — copy + points */}
//               <motion.div style={{flex:"1 1 480px"}} variants={staggerV}
//                 initial="hidden" whileInView="show" viewport={{once:true,margin:"-60px"}}>
//                 <motion.div variants={fadeLeft}>
//                   <SLabel>Why Choose Us</SLabel>
//                   <AccentLine/>
//                   <h2 style={{fontFamily:POP,fontWeight:700,fontSize:"clamp(26px,3vw,42px)",
//                     letterSpacing:"-0.025em",lineHeight:1.2,color:"rgba(255,255,255,.92)",marginBottom:20}}>
//                     Why Choose NNC Digital as Your ERP Partner?
//                   </h2>
//                   <p style={{fontFamily:POP,fontWeight:300,fontSize:15,color:"rgba(255,255,255,.44)",
//                     lineHeight:1.85,marginBottom:32}}>
//                     Backed by Nakshatra Namaha Creations Pvt. Ltd. — 8+ years, 565+ projects from Bangalore, India. NNC Digital brings the same engineering rigour to Canada, USA, and the UK with dedicated client-facing teams, transparent pricing, and long-term partnership.
//                   </p>
//                 </motion.div>
//                 <div style={{display:"flex",flexDirection:"column",gap:14}}>
//                   {WHY_POINTS.map((p,i)=>(
//                     <motion.div key={p.text} variants={fadeLeft} transition={{delay:i*.07}}
//                       style={{display:"flex",gap:14,alignItems:"flex-start"}}>
//                       <motion.div whileHover={{scale:1.15}}
//                         style={{width:36,height:36,borderRadius:10,flexShrink:0,
//                           background:"rgba(0,201,167,.1)",border:"1px solid rgba(0,201,167,.2)",
//                           display:"grid",placeItems:"center"}}>
//                         <span style={{fontSize:16}}>{p.icon}</span>
//                       </motion.div>
//                       <p style={{fontFamily:POP,fontWeight:400,fontSize:14,
//                         color:"rgba(255,255,255,.6)",lineHeight:1.65,paddingTop:6}}>{p.text}</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Right — stat cards */}
//               <Reveal delay={.15} variants={fadeRight} style={{flex:"1 1 380px"}}>
//                 <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
//                   {[
//                     {val:"565+",label:"Projects Delivered",icon:"📁"},
//                     {val:"8+",  label:"Years Experience",  icon:"🏆"},
//                     {val:"98%", label:"Client Satisfaction",icon:"⭐"},
//                     {val:"100+",label:"Team Members",      icon:"👥"},
//                   ].map((s,i)=>(
//                     <motion.div key={s.label}
//                       initial={{opacity:0,scale:.88}} whileInView={{opacity:1,scale:1}}
//                       viewport={{once:true}} transition={{delay:i*.1,duration:.5,ease:ease4}}
//                       whileHover={{y:-4,borderColor:"rgba(0,201,167,.4)"}}
//                       style={{padding:"28px 24px",borderRadius:18,border:"1px solid rgba(255,255,255,.07)",
//                         background:"rgba(255,255,255,.025)",textAlign:"center",transition:"all .3s"}}>
//                       <span style={{fontSize:28,display:"block",marginBottom:10}}>{s.icon}</span>
//                       <p style={{fontFamily:POP,fontWeight:800,fontSize:32,color:TEAL,
//                         letterSpacing:"-0.03em",marginBottom:4}}>{s.val}</p>
//                       <p style={{fontFamily:POP,fontWeight:400,fontSize:11.5,
//                         color:"rgba(255,255,255,.38)",letterSpacing:".08em",textTransform:"uppercase"}}>{s.label}</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </Reveal>
//             </div>
//           </div>
//         </section>

//         <hr className="divider"/>

//         {/* ══ M11 — GLOBAL PRESENCE ═════════════════════════ */}
//         <section style={{background:"rgba(0,201,167,.015)",
//           borderTop:"1px solid rgba(0,201,167,.07)",borderBottom:"1px solid rgba(0,201,167,.07)"}}>
//           <div className="section">
//             <Reveal>
//               <SLabel>Global Presence</SLabel>
//               <AccentLine/>
//               <h2 style={{fontFamily:POP,fontWeight:700,fontSize:"clamp(24px,2.8vw,40px)",
//                 letterSpacing:"-0.025em",color:"rgba(255,255,255,.92)",marginBottom:48}}>
//                 Offices Across Three Continents
//               </h2>
//             </Reveal>
//             <div className="global-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24}}>

//               {/* International */}
//               <Reveal variants={fadeLeft}>
//                 <div style={{padding:"32px",borderRadius:20,
//                   border:"1px solid rgba(0,201,167,.2)",background:"rgba(0,201,167,.03)"}}>
//                   <p style={{fontFamily:POP,fontWeight:600,fontSize:10,letterSpacing:".16em",
//                     textTransform:"uppercase",color:TEAL,marginBottom:20}}>North America &amp; UK</p>
//                   {[
//                     {flag:"🇨🇦",city:"Toronto, Canada",     phone:"+1 647-XXX-XXXX"},
//                     {flag:"🇺🇸",city:"New York, USA",       phone:"+1 631-XXX-XXXX"},
//                     {flag:"🇬🇧",city:"London, UK",          phone:"+44 20-XXXX-XXXX"},
//                   ].map((o,i)=>(
//                     <motion.div key={o.city}
//                       initial={{opacity:0,x:-16}} whileInView={{opacity:1,x:0}}
//                       viewport={{once:true}} transition={{delay:i*.1,duration:.5,ease:ease4}}
//                       style={{display:"flex",gap:14,alignItems:"center",marginBottom:14,
//                         padding:"16px 18px",borderRadius:12,
//                         background:"rgba(0,201,167,.05)",border:"1px solid rgba(0,201,167,.12)"}}>
//                       <span style={{fontSize:26}}>{o.flag}</span>
//                       <div>
//                         <p style={{fontFamily:POP,fontWeight:600,fontSize:14,color:"rgba(255,255,255,.85)",marginBottom:2}}>{o.city}</p>
//                         <p style={{fontFamily:POP,fontWeight:400,fontSize:11.5,color:TEAL}}>{o.phone}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </Reveal>

//               {/* India HQ */}
//               <Reveal delay={.1} variants={fadeRight}>
//                 <div style={{padding:"32px",borderRadius:20,
//                   border:"1px solid rgba(255,255,255,.07)",background:"rgba(255,255,255,.025)"}}>
//                   <p style={{fontFamily:POP,fontWeight:600,fontSize:10,letterSpacing:".16em",
//                     textTransform:"uppercase",color:"rgba(255,255,255,.28)",marginBottom:20}}>
//                     India HQ — Nakshatra Namaha Creations
//                   </p>
//                   {[
//                     {flag:"🇮🇳",city:"Bangalore HQ",        phone:"+91 9900566466"},
//                     {flag:"🇮🇳",city:"Mysore",              phone:"info@nakshatranamahacreations.com"},
//                     {flag:"🇮🇳",city:"Mumbai · Hyderabad",  phone:"nakshatranamahacreations.com"},
//                   ].map((o,i)=>(
//                     <motion.div key={o.city}
//                       initial={{opacity:0,x:16}} whileInView={{opacity:1,x:0}}
//                       viewport={{once:true}} transition={{delay:i*.1,duration:.5,ease:ease4}}
//                       style={{display:"flex",gap:14,alignItems:"center",marginBottom:14,
//                         padding:"16px 18px",borderRadius:12,
//                         background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)"}}>
//                       <span style={{fontSize:26}}>{o.flag}</span>
//                       <div>
//                         <p style={{fontFamily:POP,fontWeight:600,fontSize:14,color:"rgba(255,255,255,.75)",marginBottom:2}}>{o.city}</p>
//                         <p style={{fontFamily:POP,fontWeight:400,fontSize:11,color:"rgba(255,255,255,.3)"}}>{o.phone}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </Reveal>
//             </div>
//           </div>
//         </section>

//         {/* ══ M12 — FAQS ════════════════════════════════════ */}
//         <section>
//           <div className="section" style={{maxWidth:860}}>
//             <Reveal>
//               <SLabel>FAQs</SLabel>
//               <AccentLine/>
//               <h2 style={{fontFamily:POP,fontWeight:700,fontSize:"clamp(24px,2.8vw,40px)",
//                 letterSpacing:"-0.025em",color:"rgba(255,255,255,.92)",marginBottom:48}}>
//                 Frequently Asked Questions
//               </h2>
//             </Reveal>
//             {FAQS.map((f,i)=><FAQItem key={f.q} faq={f} i={i}/>)}
//           </div>
//         </section>

//         <hr className="divider"/>

//         {/* ══ M13 — CONTACT FORM ════════════════════════════ */}
//         <section id="contact" style={{position:"relative",overflow:"hidden",padding:"100px 56px 120px"}}>
//           <GlowOrb x="18%" y="40%" size={500} opacity={.05}/>
//           <GlowOrb x="86%" y="62%" size={400} opacity={.04}/>
//           <div style={{maxWidth:1280,margin:"0 auto"}}>
//             <div className="why-split" style={{display:"flex",gap:72,alignItems:"flex-start"}}>

//               {/* Left — info */}
//               <div style={{flex:"1 1 420px"}}>
//                 <Reveal variants={fadeLeft}>
//                   <SLabel>Start a Project</SLabel>
//                   <AccentLine/>
//                   <h2 style={{fontFamily:POP,fontWeight:700,fontSize:"clamp(26px,3vw,44px)",
//                     letterSpacing:"-0.025em",lineHeight:1.18,color:"rgba(255,255,255,.92)",marginBottom:24}}>
//                     Ready to Build Your Custom ERP?
//                   </h2>
//                   <p style={{fontFamily:POP,fontWeight:300,fontSize:15,color:"rgba(255,255,255,.42)",
//                     lineHeight:1.85,marginBottom:40}}>
//                     Whether you need a full ERP build or a focused module — we'll scope it, price it clearly, and deliver it right. Fill in the form and we'll respond within 24 hours.
//                   </p>
//                   <div style={{display:"flex",flexDirection:"column",gap:14}}>
//                     {[
//                       {icon:"🇺🇸",label:"USA",   phone:"+1 631-XXX-XXXX"},
//                       {icon:"🇨🇦",label:"Canada", phone:"+1 647-XXX-XXXX"},
//                       {icon:"🇬🇧",label:"UK",     phone:"+44 20-XXXX-XXXX"},
//                       {icon:"📧",label:"Email",   phone:"hello@nncdigital.com"},
//                     ].map(c=>(
//                       <div key={c.label} style={{display:"flex",gap:14,alignItems:"center"}}>
//                         <span style={{fontSize:22}}>{c.icon}</span>
//                         <div>
//                           <span style={{fontFamily:POP,fontWeight:500,fontSize:11,
//                             color:"rgba(255,255,255,.3)",letterSpacing:".1em",
//                             textTransform:"uppercase",display:"block"}}>{c.label}</span>
//                           <span style={{fontFamily:POP,fontWeight:500,fontSize:14,color:"rgba(255,255,255,.75)"}}>{c.phone}</span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </Reveal>
//               </div>

//               {/* Right — form card */}
//               <Reveal delay={.1} variants={fadeRight} style={{flex:"1 1 480px"}}>
//                 <div style={{background:"rgba(8,20,40,.82)",border:"1px solid rgba(0,201,167,.2)",
//                   borderRadius:24,padding:"40px 36px",backdropFilter:"blur(16px)",
//                   boxShadow:"0 32px 80px rgba(0,0,0,.4)"}}>
//                   <p style={{fontFamily:POP,fontWeight:700,fontSize:20,color:"#fff",marginBottom:6}}>Send Us a Message</p>
//                   <p style={{fontFamily:POP,fontWeight:300,fontSize:13,color:"rgba(255,255,255,.35)",marginBottom:28}}>
//                     We respond to every enquiry within 24 hours.
//                   </p>
//                   <ContactForm/>
//                 </div>
//               </Reveal>
//             </div>
//           </div>
//         </section>

//       </main>

//       {/* ── FOOTER (import from shared component) ────────── */}
//       {/* <Footer /> */}
//     </>
//   );
// }



"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ERPPage() {

const [openFAQ,setOpenFAQ] = useState<number | null>(null);

const toggleFAQ = (index:number)=>{
setOpenFAQ(openFAQ === index ? null : index);
};

const services = [
"ERP Consulting",
"ERP Implementation",
"ERP Customisation",
"Inventory Management",
"HR & Payroll Module",
"Finance & Accounting",
"ERP Integration",
"ERP Migration",
"ERP Mobile Apps",
"Vendor Management",
"Manufacturing Module",
"ERP Support & Optimisation"
];

const tools = [
"Odoo",
"SAP B1",
"Microsoft Dynamics 365",
"Oracle NetSuite",
"Custom ERP",
"QuickBooks",
"Xero",
"Sage"
];

const faqs = [
{
q:"How long does ERP implementation take?",
a:"ERP implementation usually takes between 8–20 weeks depending on the complexity of business processes, number of modules, integrations and compliance requirements for businesses in Canada, USA and the UK."
},
{
q:"Can you integrate with QuickBooks, Xero, or Sage?",
a:"Yes. Our ERP systems integrate seamlessly with accounting platforms such as QuickBooks, Xero and Sage to ensure accurate financial reporting and tax compliance."
},
{
q:"Is your ERP compliant with Canadian and UK tax law?",
a:"Yes. Our ERP systems are designed to support compliance requirements including Canadian tax systems, UK VAT, and US financial reporting standards."
},
{
q:"What does custom ERP development cost?",
a:"ERP development cost depends on modules, integrations and complexity. Most ERP solutions range between $15,000 and $120,000 depending on requirements."
},
{
q:"Can you migrate data from our existing ERP?",
a:"Yes. We handle full ERP migration including data mapping, database transfer, and system validation to ensure smooth transition."
}
];

return(

<>
<Navbar/>

<main className="bg-[#030B18] text-white">

{/* HERO */}

<section className="py-32 px-6 bg-gradient-to-br from-[#030B18] via-[#061425] to-[#030B18]">

<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div>

<h1 className="text-5xl md:text-6xl font-bold leading-tight">

Custom ERP Development Services for Growing Businesses in

<span className="block text-blue-400">

Canada, USA & UK

</span>

</h1>

<p className="text-white/70 mt-6">

Running your business on spreadsheets and disconnected tools is costing you more than you think. A custom ERP from NNC Digital brings inventory, finance, HR and operations into one unified platform.

</p>

<div className="flex gap-6 mt-8 text-sm text-white/60">

<span>✔ Google Partner</span>
<span>✔ ISO Certified</span>
<span>✔ GDPR Compliant</span>
<span>✔ PIPEDA Ready</span>
<span>✔ Clutch Top Agency</span>

</div>

</div>

{/* FORM */}

<div className="p-8 rounded-xl bg-white/5 border border-white/10">

<h3 className="text-xl font-semibold mb-6">

Get Free Consultation

</h3>

<div className="grid md:grid-cols-2 gap-4">

<input placeholder="First Name" className="fi"/>
<input placeholder="Last Name" className="fi"/>

<input placeholder="Phone (+1/+44)" className="fi"/>
<input placeholder="Business Email" className="fi"/>

</div>

<select className="fi mt-4">
<option>Select Service</option>
<option>ERP Development</option>
<option>ERP Integration</option>
</select>

<textarea placeholder="Message" rows={4} className="fi mt-4"/>

<button className="btn-primary mt-6 w-full">

Get Free Consultation

</button>

</div>

</div>

</section>

{/* CLIENTS */}

<section className="py-16 bg-[#061425] text-center">

<h2 className="text-3xl font-bold mb-10">

Our Happy Clients

</h2>

<div className="flex justify-center gap-12 opacity-60 text-xl">

<span>Shopify</span>
<span>HubSpot</span>
<span>Zoho</span>
<span>Slack</span>
<span>Stripe</span>

</div>

</section>

{/* SUCCESS STORIES */}

<section className="py-24 px-6">

<div className="max-w-6xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-16">

Success Stories

</h2>

<div className="grid md:grid-cols-3 gap-10">

<div className="glass-card p-8 text-center">

<h3 className="text-xl font-semibold">

Manufacturing

</h3>

<p className="text-blue-400 text-3xl mt-4">

35% Efficiency Increase

</p>

</div>

<div className="glass-card p-8 text-center">

<h3 className="text-xl font-semibold">

Healthcare

</h3>

<p className="text-blue-400 text-3xl mt-4">

42% More Bookings

</p>

</div>

<div className="glass-card p-8 text-center">

<h3 className="text-xl font-semibold">

D2C Ecommerce

</h3>

<p className="text-blue-400 text-3xl mt-4">

2.4× Conversion Growth

</p>

</div>

</div>

</div>

</section>

{/* SERVICES */}

<section className="py-24 px-6 bg-[#061425]">

<div className="max-w-7xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-16">

ERP Development Services We Offer

</h2>

<div className="grid md:grid-cols-3 gap-10">

{services.map((service,i)=>(
<div key={i} className="glass-card p-8">

<h3 className="font-semibold text-lg mb-3">

{service}

</h3>

<p className="text-white/70 text-sm">

Tailored ERP solutions for businesses in Canada, USA and UK.

</p>

</div>
))}

</div>

</div>

</section>

{/* BENEFITS */}

<section className="py-24 px-6">

<div className="max-w-5xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-16">

Key Benefits of ERP Development

</h2>

<div className="space-y-8 text-lg">

<p>1. Unified Data</p>
<p>2. Operational Efficiency</p>
<p>3. Regulatory Compliance</p>
<p>4. Scalable Architecture</p>

</div>

</div>

</section>

{/* TOOLS */}

<section className="py-24 px-6 bg-[#061425]">

<div className="max-w-6xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-16">

Leading Platform Tools That We Use

</h2>

<div className="grid md:grid-cols-4 gap-8 text-center">

{tools.map((tool,i)=>(
<div key={i} className="glass-card p-6">

{tool}

</div>
))}

</div>

</div>

</section>

{/* AI */}

<section className="py-24 px-6 text-center">

<h2 className="text-4xl font-bold mb-10">

Leverage AI-Powered ERP Solutions

</h2>

<div className="flex flex-wrap justify-center gap-6 text-white/70">

<span>AI Data Analysis</span>
<span>Predictive Insights</span>
<span>Automation at Scale</span>
<span>Real-Time Dashboards</span>

</div>

</section>

{/* CTA */}

<section className="py-24 text-center bg-blue-600">

<h2 className="text-3xl font-bold mb-6">

Want ERP solutions that take your business to the next level?

</h2>

<p className="mb-8">

Connect with NNC Digital today.

</p>

<Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold">

Connect Now

</Link>

</section>

{/* WHY CHOOSE */}

<section className="py-24 px-6">

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

<div>

<h2 className="text-4xl font-bold mb-6">

Why Choose Us as Your Partner?

</h2>

<p className="text-white/70">

Backed by Nakshatra Namaha Creations Pvt. Ltd. — 8+ years, 565+ projects, Bangalore India. NNC Digital brings the same expertise to Canada, USA and the UK with transparent pricing and long-term partnership.

</p>

</div>

<div className="aspect-video bg-black rounded-xl flex items-center justify-center">

<p className="text-white/60">

Video Placeholder

</p>

</div>

</div>

</section>

{/* GLOBAL */}

<section className="py-24 px-6 bg-[#061425]">

<div className="max-w-6xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-16">

Global Presence

</h2>

<div className="grid md:grid-cols-2 gap-10">

<div>

<h3 className="font-semibold mb-4">

North America & UK

</h3>

<p>Toronto, Canada — +1 647 XXX XXXX</p>
<p>New York, USA — +1 631 XXX XXXX</p>
<p>London, UK — +44 20 XXXX XXXX</p>

</div>

<div>

<h3 className="font-semibold mb-4">

India (HQ)

</h3>

<p>Bangalore — +91 9900566466</p>
<p>Mysore | Mumbai | Hyderabad</p>
<p>info@nakshatranamahacreations.com</p>

</div>

</div>

</div>

</section>

{/* FAQ */}

<section className="py-24 px-6">

<div className="max-w-4xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-16">

FAQs

</h2>

<div className="space-y-6">

{faqs.map((faq,index)=>(
<div key={index} className="glass-card p-6">

<button onClick={()=>toggleFAQ(index)} className="w-full flex justify-between">

<h3>{faq.q}</h3>

<span>{openFAQ===index?"-":"+"}</span>

</button>

{openFAQ===index && (

<p className="mt-4 text-white/70">

{faq.a}

</p>

)}

</div>
))}

</div>

</div>

</section>

{/* CONTACT */}

<section className="py-28 px-6 text-center bg-[#061425]">

<h2 className="text-4xl font-bold mb-10">

Ready to Build Next-Level Custom Digital Solutions?

</h2>

<div className="max-w-xl mx-auto glass-card p-8">

<input placeholder="Name" className="fi mb-4"/>
<input placeholder="Phone (Country Code)" className="fi mb-4"/>
<input placeholder="Business Email" className="fi mb-4"/>

<textarea placeholder="Project Description" rows={4} className="fi mb-6"/>

<button className="btn-primary w-full">

Submit

</button>

</div>

<p className="text-sm text-white/60 mt-8">

USA +1 631 XXX | Canada +1 647 XXX | UK +44 20 XXX | hello@nncdigital.com

</p>

</section>

</main>

<Footer/>

</>

);

}