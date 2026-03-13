"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";

// ─── Design tokens ────────────────────────────────────────────────────────────
const T  = "#00C9A7";
const TD = "#00a07a";
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";

// ─── Data ─────────────────────────────────────────────────────────────────────
const LOGOS = ["clients1.png","clients2.png","clients3.png","clients4.png","clients5.png",
  "clients6.png","clients7.png","clients8.png","clients9.png","clients10.png","clients11.png"];

const SUCCESS_STORIES = [
  {
    industry: "Manufacturing", icon: "🏭", result: "35% Efficiency Gain",
    title: "Digital Transformation for a Canadian Manufacturer",
    description: "We modernised legacy systems, automated workflows, and connected siloed departments with a unified digital strategy.",
    metrics: [{ l: "Efficiency", v: "+35%", i: "⚡" }, { l: "Downtime", v: "-52%", i: "⏱️" }, { l: "ROI", v: "312%", i: "💰" }]
  },
  {
    industry: "Healthcare", icon: "🏥", result: "42% More Bookings",
    title: "Patient Experience Transformation for a UK Healthcare Provider",
    description: "A complete digital overhaul including a patient portal, automated scheduling, and integrated CRM for better care.",
    metrics: [{ l: "Bookings", v: "+42%", i: "📅" }, { l: "Admin Time", v: "-67%", i: "📉" }, { l: "Patient Sat.", v: "4.9★", i: "⭐" }]
  },
  {
    industry: "D2C Retail", icon: "🛍️", result: "2.4× Conversion Rate",
    title: "E-Commerce Transformation for a US D2C Brand",
    description: "We unified their e-commerce, marketing, and inventory systems, creating a seamless omnichannel customer experience.",
    metrics: [{ l: "Conversion", v: "2.4×", i: "📈" }, { l: "Revenue", v: "+89%", i: "💰" }, { l: "Retention", v: "+55%", i: "✅" }]
  },
];

const SERVICES = [
  { icon: "🔍", title: "Digital Readiness Assessment", desc: "Tailored for businesses in Canada, USA & UK. A comprehensive audit of your people, processes, and technology to identify opportunities and risks.", tag: "Assessment" },
  { icon: "🗺️", title: "Technology Roadmap", desc: "Tailored for businesses in Canada, USA & UK. A phased, actionable plan to guide your transformation from legacy to future-state.", tag: "Strategy" },
  { icon: "⚙️", title: "Process Automation", desc: "Tailored for businesses in Canada, USA & UK. Identify and implement automation for repetitive tasks, freeing your team for higher-value work.", tag: "Automation" },
  { icon: "🔗", title: "System Integration", desc: "Tailored for businesses in Canada, USA & UK. Connect your CRM, ERP, marketing, and legacy systems to create a single source of truth.", tag: "Integration" },
  { icon: "👥", title: "Change Management & Training", desc: "Tailored for businesses in Canada, USA & UK. Ensure your team adopts new tools and processes with structured training and support.", tag: "People" },
  { icon: "💼", title: "IT Management Consulting", desc: "Tailored for businesses in Canada, USA & UK. Strategic guidance on IT structure, vendor management, and digital governance.", tag: "Consulting" },
  { icon: "☁️", title: "Cloud Migration", desc: "Tailored for businesses in Canada, USA & UK. Move your infrastructure, data, and applications to the cloud securely and efficiently.", tag: "Cloud" },
  { icon: "📊", title: "Data Strategy & Analytics", desc: "Tailored for businesses in Canada, USA & UK. Harness your data for actionable insights with modern BI tools and data governance.", tag: "Data" },
  { icon: "🛡️", title: "Cybersecurity & Compliance", desc: "Tailored for businesses in Canada, USA & UK. Protect your digital assets and ensure compliance with GDPR, PIPEDA, and CCPA.", tag: "Security" },
];

const BENEFITS = [
  { num: "01", icon: "🎯", title: "Clear Strategy", desc: "We don't just implement technology; we build a clear, phased roadmap aligned with your business goals, ensuring every investment delivers value.", tags: ["Roadmap", "Goal Alignment", "Phased"] },
  { num: "02", icon: "🤖", title: "Process Automation", desc: "Identify and automate manual, repetitive tasks across departments. Reduce errors, speed up operations, and free your team for strategic work.", tags: ["RPA", "Workflow", "Efficiency"] },
  { num: "03", icon: "🔌", title: "System Unification", desc: "Break down data silos. We integrate your CRM, ERP, e-commerce, and legacy systems, creating a single, reliable source of truth.", tags: ["Integration", "Real-time Data", "APIs"] },
  { num: "04", icon: "🚀", title: "Team Adoption", desc: "Technology is only as good as its users. Our structured change management and training ensure your team embraces the new digital tools.", tags: ["Training", "Change Mgmt", "Support"] },
];

const TOOLS = [
  { icon: "☁️", name: "AWS", purpose: "Enterprise-grade cloud infrastructure.", clr: "rgba(255,153,0,.08)", bd: "rgba(255,153,0,.22)" },
  { icon: "🟦", name: "Azure", purpose: "Best-in-class for Microsoft integration.", clr: "rgba(0,120,215,.08)", bd: "rgba(0,120,215,.22)" },
  { icon: "🟢", name: "Google Cloud", purpose: "Enterprise-grade data & AI/ML.", clr: "rgba(66,133,244,.08)", bd: "rgba(66,133,244,.22)" },
  { icon: "☁️", name: "Salesforce", purpose: "Best-in-class for CRM & experience.", clr: "rgba(0,161,224,.08)", bd: "rgba(0,161,224,.22)" },
  { icon: "🟠", name: "Microsoft 365", purpose: "Enterprise-grade productivity & comms.", clr: "rgba(217,107,19,.08)", bd: "rgba(217,107,19,.22)" },
  { icon: "⚡", name: "Zapier", purpose: "Best-in-class for no-code automation.", clr: "rgba(255,74,74,.08)", bd: "rgba(255,74,74,.22)" },
  { icon: "🔌", name: "MuleSoft", purpose: "Enterprise-grade integration platform.", clr: "rgba(119,119,255,.08)", bd: "rgba(119,119,255,.22)" },
  { icon: "📊", name: "Tableau", purpose: "Best-in-class for data visualisation.", clr: "rgba(69,133,255,.08)", bd: "rgba(69,133,255,.22)" },
  { icon: "📈", name: "Power BI", purpose: "Enterprise-grade business analytics.", clr: "rgba(242,200,28,.08)", bd: "rgba(242,200,28,.22)" },
  { icon: "🛡️", name: "Okta", purpose: "Best-in-class for identity management.", clr: "rgba(0,119,200,.08)", bd: "rgba(0,119,200,.22)" },
];

const HIRE_LEFT = [
  { icon: "🏢", title: "Enterprises", desc: "Complex, multi-location digital transformation with legacy system modernisation, enterprise architecture, and governance." },
  { icon: "🚀", title: "Start-ups", desc: "Build a scalable digital foundation from day one with cloud-native architecture and agile processes." },
  { icon: "🎯", title: "Agencies", desc: "Transform your agency's own operations with integrated project management, finance, and client reporting systems." },
];
const HIRE_RIGHT = [
  { icon: "📊", title: "Analytical Transformation", desc: "Become a data-driven organisation. We build the strategy and systems to turn your data into actionable insights." },
  { icon: "⚙️", title: "Operational Transformation", desc: "Optimise and automate core business processes — from supply chain to HR — for maximum efficiency." },
  { icon: "🤝", title: "Customer-Centric Transformation", desc: "Unify sales, service, and marketing around a single customer view to deliver seamless, personalised experiences." },
];

const AI_FEATS = [
  { icon: "🧠", title: "AI Data Analysis", desc: "Uncover hidden patterns in your operations and customer data with machine learning models built into your transformation roadmap.", clr: "rgba(0,201,167,.08)", bd: "rgba(0,201,167,.2)" },
  { icon: "🔮", title: "Predictive Insights", desc: "Forecast demand, identify risks, and make proactive decisions with AI-powered analytics integrated into your workflows.", clr: "rgba(99,102,241,.08)", bd: "rgba(99,102,241,.2)" },
  { icon: "🤖", title: "Automation at Scale", desc: "Implement intelligent process automation (IPA) that learns and adapts, handling complex, judgment-based tasks across your organisation.", clr: "rgba(0,201,167,.08)", bd: "rgba(0,201,167,.2)" },
  { icon: "📈", title: "Real-Time Dashboards", desc: "Empower your leadership with live, custom dashboards that provide a single-pane-of-glass view into the health of your entire business.", clr: "rgba(255,159,28,.08)", bd: "rgba(255,159,28,.2)" },
];

const WCU_POINTS = [
  { icon: "🏆", text: "8+ years of proven digital excellence" },
  { icon: "🌍", text: "Serving Canada, USA & UK markets" },
  { icon: "⚡", text: "565+ projects delivered globally" },
  { icon: "🤝", text: "Client-first culture, enterprise-grade quality" },
  { icon: "🔒", text: "GDPR, PIPEDA & CCPA compliant delivery" },
  { icon: "🔄", text: "End-to-end: Strategy, Integration, Automation, Change" },
];
const WCU_STATS = [{ n: 1500, s: "+", l: "Projects Delivered" }, { n: 1800, s: "+", l: "IT Talents" }, { n: 98, s: "%", l: "Retention Rate" }, { n: 25, s: "+", l: "Industries" }];

const FAQS = [
  {
    q: "What does a digital readiness assessment involve?",
    a: "Our assessment is a 2-4 week deep dive into your current state. We analyse your technology stack, business processes, team capabilities, and market position. The outcome is a detailed report with a heatmap of opportunities, risks, and a recommended roadmap for transformation. For Canadian and UK clients, this includes specific compliance checks for PIPEDA and GDPR."
  },
  {
    q: "How long does a digital transformation programme take?",
    a: "Transformation is a journey, not a one-off project. A phased approach is key. An initial pilot or MVP for a specific department typically takes 3-6 months. A full enterprise-wide transformation can take 12-36 months, delivered in value-driven stages. We provide a clear, phased roadmap with tangible business outcomes at each step, tailored to your organisation's pace."
  },
  {
    q: "Can you integrate our existing (legacy) tools?",
    a: "Absolutely. We specialise in connecting modern platforms with legacy systems. We use robust integration platforms (iPaaS) like MuleSoft or custom APIs to create a unified data layer, ensuring your existing investments are not wasted and data flows seamlessly between old and new."
  },
  {
    q: "How do you handle change management?",
    a: "We believe technology changes are 20% tech and 80% people. Our approach includes stakeholder analysis, clear communication plans, role-based training (from execs to end-users), and a post-launch 'hypercare' period. We help you build a culture that embraces, not fears, digital change."
  },
  {
    q: "What does digital transformation cost for a business in Canada or the UK?",
    a: "Costs vary dramatically based on scope. A focused digital readiness assessment starts from CAD $8,000–$15,000 / £5,500–£11,000. A departmental transformation pilot ranges from CAD $40,000–$120,000 / £30,000–£90,000. Enterprise programmes are individually scoped. We provide transparent, fixed-cost proposals for each phase before work begins."
  },
  {
    q: "How do you ensure compliance with data regulations?",
    a: "Compliance is built into our transformation framework. For UK/EU clients, we implement GDPR-by-design principles. For Canadian clients, we follow PIPEDA guidelines, and for US clients, CCPA. Our solutions include data mapping, consent management, audit trails, and robust security controls to ensure you remain compliant as you scale."
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

const SERVICES_LIST = ["Digital Readiness Assessment", "Technology Roadmap", "Process Automation", "System Integration", "Change Management", "Cloud Migration", "Data Strategy", "Cybersecurity", "Other"];
const DIAL_CODES = [{ code: "+1", flag: "🇨🇦" }, { code: "+1", flag: "🇺🇸" }, { code: "+44", flag: "🇬🇧" }, { code: "+91", flag: "🇮🇳" }];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const c=ref.current; if(!c)return;
    const ctx=c.getContext("2d")!;
    let W=c.width=c.offsetWidth, H=c.height=c.offsetHeight;
    const pts=Array.from({length:50},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.4+.3,a:Math.random()*.38+.07}));
    let raf:number;
    const draw=()=>{
      ctx.clearRect(0,0,W,H);
      pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;
        ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(0,201,167,${p.a})`;ctx.fill();});
      for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
        const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
        if(d<90){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);
          ctx.strokeStyle=`rgba(0,201,167,${.06*(1-d/90)})`;ctx.lineWidth=.5;ctx.stroke();}}
      raf=requestAnimationFrame(draw);};
    draw();
    const rz=()=>{W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;};
    window.addEventListener("resize",rz);
    return()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",rz);};
  },[]);
  return <canvas ref={ref} style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}}/>;
}

function Counter({to,sfx=""}:{to:number;sfx?:string}){
  const ref=useRef<HTMLSpanElement>(null);
  const [v,setV]=useState(0);
  const started=useRef(false);
  useEffect(()=>{
    const el=ref.current; if(!el)return;
    const obs=new IntersectionObserver(([e])=>{
      if(e.isIntersecting&&!started.current){started.current=true;
        let step=0;const t=setInterval(()=>{step++;const ease=1-Math.pow(1-step/70,3);setV(Math.round(ease*to));if(step>=70){setV(to);clearInterval(t);}},1800/70);}
    },{threshold:.25});
    obs.observe(el);return()=>obs.disconnect();
  },[to]);
  return <span ref={ref}>{v}{sfx}</span>;
}

function SectionBadge({label}:{label:string}){
  return(
    <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.22)",borderRadius:100,padding:"6px 18px",marginBottom:16}}>
      <span style={{width:6,height:6,borderRadius:"50%",background:T,display:"block",boxShadow:`0 0 8px ${T}`}}/>
      <span style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>{label}</span>
    </div>
  );
}

function SectionH2({children}:{children:React.ReactNode}){
  return <h2 style={{fontSize:"clamp(24px,3vw,40px)",fontWeight:900,color:"#fff",letterSpacing:"-0.02em",lineHeight:1.15,marginBottom:14}}>{children}</h2>;
}

function GradText({children}:{children:React.ReactNode}){
  return <span style={{background:`linear-gradient(135deg,${T},#1fd1b5)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{children}</span>;
}

function AccItem({item,open,toggle}:{item:{icon:string;title:string;desc:string};open:boolean;toggle:()=>void}){
  return(
    <div onClick={toggle} style={{borderRadius:14,border:`1px solid ${open?"rgba(0,201,167,0.4)":"rgba(255,255,255,0.08)"}`,background:open?"rgba(0,201,167,0.06)":"rgba(255,255,255,0.02)",overflow:"hidden",cursor:"pointer",transition:"border-color .25s,background .25s"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 22px",gap:14}}>
        <div style={{display:"flex",alignItems:"center",gap:14}}>
          <div style={{width:44,height:44,borderRadius:12,flexShrink:0,background:open?"rgba(0,201,167,0.15)":"rgba(255,255,255,0.05)",border:`1px solid ${open?"rgba(0,201,167,0.3)":"rgba(255,255,255,0.1)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,transition:"background .25s"}}>{item.icon}</div>
          <span style={{fontSize:15,fontWeight:700,color:open?"#fff":"rgba(255,255,255,0.72)",fontFamily:"'Poppins',sans-serif",transition:"color .2s"}}>{item.title}</span>
        </div>
        <div style={{width:28,height:28,borderRadius:"50%",flexShrink:0,background:open?T:"rgba(255,255,255,0.07)",border:`1px solid ${open?T:"rgba(255,255,255,0.14)"}`,display:"flex",alignItems:"center",justifyContent:"center",color:open?"#000":"rgba(255,255,255,0.55)",fontSize:18,fontWeight:700,lineHeight:1,transform:open?"rotate(45deg)":"rotate(0deg)",transition:"all .25s ease"}}>+</div>
      </div>
      <div style={{maxHeight:open?220:0,overflow:"hidden",transition:"max-height .35s ease"}}>
        <p style={{padding:"0 22px 20px 80px",color:"rgba(255,255,255,0.5)",fontSize:14,lineHeight:1.75,fontFamily:"'Poppins',sans-serif",fontWeight:400,margin:0}}>{item.desc}</p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function DigitalTransformationPage() {

  const [form,setForm]=useState({firstName:"",lastName:"",phone:"",dialCode:"+1",email:"",service:"",message:""});
  const [submitted,setSubmitted]=useState(false);
  const [loading,setLoading]=useState(false);
  const setF=(k:string,v:string)=>setForm(f=>({...f,[k]:v}));
  const handleSubmit=(e:React.FormEvent)=>{e.preventDefault();setLoading(true);setTimeout(()=>{setLoading(false);setSubmitted(true);},1200);};

  const [story,setStory]=useState(0);
  const [hireL,setHireL]=useState<number|null>(0);
  const [hireR,setHireR]=useState<number|null>(0);
  const [faq,setFaq]=useState<number|null>(0);
  const [gTab,setGTab]=useState<"int"|"india">("int");
  const [vidPlay,setVidPlay]=useState(false);

  const [cForm,setCForm]=useState({name:"",phone:"",dialCode:"+1",email:"",service:"",project:""});
  const [cSubmitted,setCSubmitted]=useState(false);
  const [cLoading,setCLoading]=useState(false);
  const setCF=(k:string,v:string)=>setCForm(f=>({...f,[k]:v}));
  const handleCSubmit=(e:React.FormEvent)=>{e.preventDefault();setCLoading(true);setTimeout(()=>{setCLoading(false);setCSubmitted(true);},1200);};

  const iS:React.CSSProperties={width:"100%",padding:"11px 14px",borderRadius:9,background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.14)",color:"#fff",fontSize:13.5,fontFamily:"'Poppins',sans-serif",outline:"none",boxSizing:"border-box",transition:"border-color .2s,background .2s"};
  const iSLg:React.CSSProperties={...iS,padding:"13px 16px",fontSize:14.5};

  return (
    <>
    <Navbar/>

{/* ══════════════════════════════════════════════════
    M1 — HERO + INLINE LEAD FORM
══════════════════════════════════════════════════ */}
<section style={{padding:"96px 48px 80px",background:`linear-gradient(135deg,${N0} 0%,#041628 45%,${N0} 100%)`,position:"relative",overflow:"hidden",minHeight:"90vh",display:"flex",alignItems:"center"}}>
  <Particles/>
  <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:1,backgroundImage:`linear-gradient(rgba(0,201,167,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.035) 1px,transparent 1px)`,backgroundSize:"60px 60px"}}/>
  <div style={{position:"absolute",width:650,height:650,borderRadius:"50%",background:`radial-gradient(circle,rgba(0,201,167,.14) 0%,transparent 65%)`,top:"40%",left:"-10%",transform:"translateY(-50%)",animation:"heroPulse 8s ease-in-out infinite",pointerEvents:"none",zIndex:1}}/>
  <div style={{position:"absolute",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 65%)",top:"10%",right:"5%",animation:"heroPulse 10s ease-in-out infinite .5s",pointerEvents:"none",zIndex:1}}/>
  <div style={{position:"absolute",width:520,height:520,borderRadius:"50%",border:"1px dashed rgba(0,201,167,.08)",top:"50%",left:"-12%",transform:"translateY(-50%)",animation:"heroSpin 55s linear infinite",pointerEvents:"none",zIndex:1}}/>
  <div style={{position:"absolute",left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(0,201,167,.28),transparent)",animation:"heroScan 7s linear infinite",pointerEvents:"none",zIndex:2}}/>

  <div className="hero-layout">
    {/* Left */}
    <div style={{animation:"heroFadeUp .7s ease both"}}>
      <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.25)",borderRadius:100,padding:"7px 18px",marginBottom:28,animation:"heroGlow 3s ease-in-out infinite,heroFadeUp .7s ease both"}}>
        <span style={{width:7,height:7,borderRadius:"50%",background:T,boxShadow:`0 0 10px ${T}`,animation:"heroBlink 1.4s ease-in-out infinite"}}/>
        <span style={{color:T,fontSize:11.5,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase" as const}}>Digital Transformation — Canada, USA &amp; UK</span>
      </div>
      <h1 style={{fontSize:"clamp(28px,3.8vw,54px)",fontWeight:900,lineHeight:1.12,marginBottom:22,letterSpacing:"-0.025em",color:"#fff",animation:"heroFadeUp .7s ease .12s both"}}>
        Digital Transformation Consulting for Businesses <GradText>Ready to Scale</GradText> in Canada, USA &amp; UK
      </h1>
      <p style={{color:"rgba(255,255,255,0.52)",fontSize:"clamp(14px,1.3vw,16.5px)",lineHeight:1.85,marginBottom:28,maxWidth:600,animation:"heroFadeUp .7s ease .22s both"}}>
        Digital transformation is about redesigning how your business creates and delivers value through technology — from first strategy session to full operational rollout.
      </p>

      {/* Transformation pillars */}
      <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:28,animation:"heroFadeUp .7s ease .27s both"}}>
        {[{i:"🔍",l:"Readiness"},{i:"🗺️",l:"Roadmap"},{i:"⚙️",l:"Automation"},{i:"🔗",l:"Integration"},{i:"👥",l:"Change"}].map(b=>(
          <span key={b.l} className="platform-pill" style={{display:"inline-flex",alignItems:"center",gap:6,padding:"6px 14px",borderRadius:100,border:"1px solid rgba(0,201,167,0.25)",background:"rgba(0,201,167,0.06)",color:"rgba(255,255,255,0.8)",fontSize:12.5,fontWeight:600}}>{b.i} {b.l}</span>
        ))}
      </div>

      <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:36,animation:"heroFadeUp .7s ease .32s both"}}>
        {[{i:"🔵",l:"Google Partner"},{i:"🏆",l:"ISO Certified"},{i:"🔒",l:"GDPR Compliant"},{i:"🍁",l:"PIPEDA Ready"},{i:"⭐",l:"Clutch Top Agency"}].map(b=>(
          <span key={b.l} className="mob-badge" style={{display:"inline-flex",alignItems:"center",gap:6,padding:"6px 13px",borderRadius:100,border:"1px solid rgba(255,255,255,0.12)",background:"rgba(255,255,255,0.04)",color:"rgba(255,255,255,0.65)",fontSize:12.5,fontWeight:600,transition:"all .2s",cursor:"default"}}>{b.i} {b.l}</span>
        ))}
      </div>
      <div style={{display:"flex",gap:20,flexWrap:"wrap",animation:"heroFadeUp .7s ease .36s both"}}>
        {[{flag:"🇨🇦",label:"CA:",phone:"+1 647-XXX-XXXX"},{flag:"🇬🇧",label:"UK:",phone:"+44 20-XXXX-XXXX"}].map(p=>(
          <a key={p.phone} href={`tel:${p.phone.replace(/\s|-/g,"")}`} className="h-teal" style={{display:"flex",alignItems:"center",gap:7,color:"rgba(255,255,255,0.5)",fontSize:13.5,fontWeight:600,textDecoration:"none",transition:"color .2s"}}>
            <span>{p.flag}</span><span style={{color:"rgba(255,255,255,0.3)"}}>{p.label}</span><span style={{color:T}}>{p.phone}</span>
          </a>
        ))}
      </div>
    </div>

    {/* Hero Form */}
    <div style={{background:"rgba(8,20,40,0.85)",border:"1px solid rgba(0,201,167,0.22)",borderRadius:20,padding:"32px 28px",backdropFilter:"blur(16px)",boxShadow:"0 32px 80px rgba(0,0,0,0.5),0 0 40px rgba(0,201,167,0.06)",position:"relative",overflow:"hidden",animation:"heroFadeUp .7s ease .15s both"}}>
      <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,transparent,${T},transparent)`}}/>
      {submitted?(
        <div style={{textAlign:"center",padding:"40px 0"}}>
          <div style={{fontSize:52,marginBottom:16}}>✅</div>
          <h3 style={{color:"#fff",fontSize:20,fontWeight:800,marginBottom:10}}>Request Received!</h3>
          <p style={{color:"rgba(255,255,255,0.5)",fontSize:14,lineHeight:1.7,marginBottom:24}}>We&apos;ll contact you within 24 hours to discuss your transformation goals.</p>
          <button onClick={()=>{setSubmitted(false);setForm({firstName:"",lastName:"",phone:"",dialCode:"+1",email:"",service:"",message:""});}} style={{padding:"11px 26px",borderRadius:9,border:"none",background:`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:700,fontSize:14,fontFamily:"'Poppins',sans-serif",cursor:"pointer"}}>Send Another →</button>
        </div>
      ):(
        <>
          <div style={{marginBottom:22}}>
            <p style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:4}}>Free Consultation</p>
            <h2 style={{color:"#fff",fontSize:18,fontWeight:800,margin:0,lineHeight:1.3}}>Get a Free Digital Strategy Call</h2>
          </div>
          <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:12}}>
            <div className="cf-name">
              <div><label style={{display:"block",fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>First Name *</label><input className="fi" required style={iS} placeholder="Jane" value={form.firstName} onChange={e=>setF("firstName",e.target.value)}/></div>
              <div><label style={{display:"block",fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Last Name</label><input className="fi" style={iS} placeholder="Smith" value={form.lastName} onChange={e=>setF("lastName",e.target.value)}/></div>
            </div>
            <div>
              <label style={{display:"block",fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Phone</label>
              <div style={{display:"flex",gap:8}}>
                <select className="fi" style={{...iS,width:82,flexShrink:0,padding:"11px 6px",cursor:"pointer"}} value={form.dialCode} onChange={e=>setF("dialCode",e.target.value)}>
                  {DIAL_CODES.map((d,i)=><option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                </select>
                <input className="fi" style={iS} type="tel" placeholder="647 XXX XXXX" value={form.phone} onChange={e=>setF("phone",e.target.value)}/>
              </div>
            </div>
            <div><label style={{display:"block",fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Business Email *</label><input className="fi" required type="email" style={iS} placeholder="jane@company.com" value={form.email} onChange={e=>setF("email",e.target.value)}/></div>
            <div>
              <label style={{display:"block",fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Service</label>
              <select className="fi" style={{...iS,cursor:"pointer"}} value={form.service} onChange={e=>setF("service",e.target.value)}>
                <option value="">Select...</option>
                {SERVICES_LIST.map(s=><option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div><label style={{display:"block",fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Message</label><textarea className="fi" style={{...iS,minHeight:76,resize:"vertical" as const}} placeholder="Tell us about your transformation challenges and goals..." value={form.message} onChange={e=>setF("message",e.target.value)}/></div>
            <button className="btn-teal" type="submit" disabled={loading} style={{padding:"13px",borderRadius:10,border:"none",marginTop:4,background:loading?"rgba(0,201,167,0.5)":`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:800,fontSize:14.5,fontFamily:"'Poppins',sans-serif",cursor:loading?"wait":"pointer",transition:"transform .2s,box-shadow .2s"}}>
              {loading?"Sending...":"🚀 Get Free Transformation Consultation →"}
            </button>
            <p style={{color:"rgba(255,255,255,0.28)",fontSize:11,textAlign:"center",margin:0}}>🔒 Secure &amp; confidential. No spam, ever.</p>
          </form>
        </>
      )}
    </div>
  </div>
</section>

{/* ══════════════════════════════════════════════════
    M2 — CLIENT LOGOS
══════════════════════════════════════════════════ */}
<section style={{padding:"60px 0",background:N0,overflow:"hidden",borderTop:`1px solid rgba(0,201,167,.1)`,borderBottom:`1px solid rgba(0,201,167,.1)`}}>
  <div style={{textAlign:"center",marginBottom:40,padding:"0 24px"}}>
    <p style={{fontWeight:600,fontSize:11.5,color:"rgba(255,255,255,.28)",letterSpacing:"0.14em",textTransform:"uppercase" as const,marginBottom:12}}>Our Happy Clients</p>
    <h2 style={{fontSize:"clamp(20px,2.6vw,32px)",fontWeight:800,color:"#fff",letterSpacing:"-0.02em",lineHeight:1.25,margin:0}}>
      Trusted by Businesses Across <GradText>North America &amp; the UK</GradText>
    </h2>
  </div>
  <div style={{overflow:"hidden"}}>
    <div className="cl-track">
      {[...LOGOS,...LOGOS].map((f,i)=>(
        <div key={i} style={{flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",height:60,padding:"0 8px",opacity:.85,transition:"opacity .3s,transform .3s",filter:"grayscale(100%)"}}
          onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.opacity="1";(e.currentTarget as HTMLElement).style.transform="scale(1.08)";(e.currentTarget as HTMLElement).style.filter="grayscale(0%)";}}
          onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.opacity=".85";(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.filter="grayscale(100%)";}}
        >
          <img src={`/${f}`} alt={`Client ${i+1}`} style={{height:48,width:"auto",maxWidth:140,objectFit:"contain" as const}} onError={e=>{(e.currentTarget as HTMLImageElement).style.display="none";}}/>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ══════════════════════════════════════════════════
    M3 — SUCCESS STORIES
══════════════════════════════════════════════════ */}
<section style={{padding:"88px 48px",background:`linear-gradient(180deg,${N2} 0%,${N1} 100%)`,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"linear-gradient(rgba(0,201,167,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.02) 1px,transparent 1px)",backgroundSize:"56px 56px"}}/>
  <div style={{maxWidth:1200,margin:"0 auto",position:"relative",zIndex:2}}>
    <div style={{textAlign:"center",marginBottom:48}}>
      <SectionBadge label="Proven Results"/>
      <SectionH2>Digital Transformation <GradText>Success Stories</GradText></SectionH2>
      <p style={{color:"rgba(255,255,255,0.45)",fontSize:16,lineHeight:1.7,maxWidth:500,margin:"0 auto"}}>Real transformation results for businesses in Canada, USA &amp; UK.</p>
    </div>
    <div style={{display:"flex",gap:10,justifyContent:"center",marginBottom:40,flexWrap:"wrap"}}>
      {SUCCESS_STORIES.map((c,i)=>(
        <button key={i} className={`ss-tab${story===i?" act":""}`} onClick={()=>setStory(i)}><span>{c.icon}</span>{c.industry} — {c.result}</button>
      ))}
    </div>
    <div key={story} style={{background:"rgba(255,255,255,0.02)",border:`1px solid rgba(0,201,167,.3)`,borderRadius:24,overflow:"hidden",animation:"sbFadeUp .45s ease both"}}>
      <div style={{height:3,background:`linear-gradient(90deg,transparent,${T},transparent)`}}/>
      <div style={{padding:"36px 36px 32px"}}>
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
          <div style={{width:52,height:52,borderRadius:14,fontSize:26,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,201,167,0.12)",border:`1px solid rgba(0,201,167,.3)`}}>{SUCCESS_STORIES[story].icon}</div>
          <span style={{padding:"4px 14px",borderRadius:100,fontSize:12,fontWeight:700,background:"rgba(0,201,167,0.12)",border:`1px solid rgba(0,201,167,.3)`,color:T,textTransform:"uppercase" as const,letterSpacing:"0.08em"}}>{SUCCESS_STORIES[story].result}</span>
        </div>
        <h3 style={{color:"#fff",fontSize:"clamp(18px,2vw,24px)",fontWeight:800,marginBottom:16,lineHeight:1.3}}>{SUCCESS_STORIES[story].title}</h3>
        <p style={{color:"rgba(255,255,255,0.6)",fontSize:15,lineHeight:1.7,marginBottom:28}}>{SUCCESS_STORIES[story].description}</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14}}>
          {SUCCESS_STORIES[story].metrics.map((m,i)=>(
            <div key={i} style={{textAlign:"center",padding:"18px 14px",borderRadius:14,border:"1px solid rgba(255,255,255,0.07)",background:"rgba(255,255,255,0.03)",transition:"transform .25s,background .25s",cursor:"default"}}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-4px)";(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.06)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.03)";}}>
              <div style={{fontSize:22,marginBottom:8}}>{m.i}</div>
              <div style={{fontSize:"clamp(22px,2.5vw,30px)",fontWeight:900,marginBottom:4,background:`linear-gradient(135deg,#fff 30%,${T})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{m.v}</div>
              <div style={{color:"rgba(255,255,255,0.45)",fontSize:12,fontWeight:500}}>{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div style={{display:"flex",justifyContent:"center",gap:8,marginTop:28}}>
      {SUCCESS_STORIES.map((_,i)=>(
        <button key={i} onClick={()=>setStory(i)} style={{width:story===i?24:8,height:8,borderRadius:100,background:story===i?T:"rgba(255,255,255,0.2)",border:"none",cursor:"pointer",transition:"all .3s ease"}}/>
      ))}
    </div>
    <div style={{textAlign:"center",marginTop:44}}>
      <button className="btn-teal" style={{padding:"14px 36px",borderRadius:10,border:"none",background:`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:700,fontSize:15,fontFamily:"'Poppins',sans-serif",cursor:"pointer",transition:"transform .2s,box-shadow .2s"}}>View All Case Studies →</button>
    </div>
  </div>
</section>

{/* ══════════════════════════════════════════════════
    M4 — SERVICES WE OFFER
══════════════════════════════════════════════════ */}
<section style={{padding:"80px 48px 48px",background:`linear-gradient(180deg,${N1} 0%,${N2} 60%,${N1} 100%)`,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"linear-gradient(rgba(0,201,167,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.025) 1px,transparent 1px)",backgroundSize:"56px 56px"}}/>
  <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
    <div style={{textAlign:"center",marginBottom:60}}>
      <SectionBadge label="What We Deliver"/>
      <SectionH2>Digital Transformation <GradText>Services We Offer</GradText></SectionH2>
      <p style={{color:"rgba(255,255,255,0.5)",fontSize:16,lineHeight:1.75,maxWidth:580,margin:"0 auto"}}>End-to-end transformation capabilities for businesses across Canada, USA &amp; UK.</p>
    </div>
    <div className="svc-grid" style={{gridTemplateColumns:"repeat(3,1fr)"}}>
      {SERVICES.map((s,i)=>(
        <div key={s.title} className="svc-card" style={{animationDelay:`${i*.06}s`}}>
          <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12}}>
            <div className="svc-icon" style={{width:52,height:52,borderRadius:14,background:"rgba(0,201,167,0.1)",border:"1px solid rgba(0,201,167,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0,transition:"background .3s,transform .3s"}}>{s.icon}</div>
            <span style={{padding:"3px 10px",borderRadius:100,fontSize:10.5,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase" as const,color:T,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.18)"}}>{s.tag}</span>
          </div>
          <h3 style={{fontSize:17,fontWeight:700,color:"#fff",lineHeight:1.3,margin:0}}>{s.title}</h3>
          <p style={{fontSize:13.5,color:"rgba(255,255,255,0.5)",lineHeight:1.7,margin:0}}>{s.desc}</p>
          <span style={{display:"inline-flex",alignItems:"center",gap:6,color:"rgba(255,255,255,0.3)",fontSize:13,fontWeight:600,marginTop:"auto"}}>Learn More <span>→</span></span>
        </div>
      ))}
    </div>
    <div style={{textAlign:"center",marginTop:56}}>
      <button className="btn-teal" style={{padding:"14px 36px",borderRadius:10,background:`linear-gradient(135deg,${T},${TD})`,border:"none",color:"#000",fontWeight:700,fontSize:15,fontFamily:"'Poppins',sans-serif",cursor:"pointer",transition:"transform .2s,box-shadow .2s"}}>View All Services →</button>
    </div>
  </div>
</section>

{/* ══════════════════════════════════════════════════
    M5 — KEY BENEFITS (LINEAR NUMBERED)
══════════════════════════════════════════════════ */}
<section style={{padding:"88px 48px",background:`linear-gradient(180deg,${N1} 0%,${N2} 100%)`,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"linear-gradient(rgba(0,201,167,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.025) 1px,transparent 1px)",backgroundSize:"56px 56px"}}/>
  <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
    <div style={{textAlign:"center",marginBottom:60}}>
      <SectionBadge label="Why Transform"/>
      <SectionH2>Key Benefits of <GradText>Digital Transformation</GradText></SectionH2>
      <p style={{color:"rgba(255,255,255,0.45)",fontSize:16,lineHeight:1.75,maxWidth:520,margin:"0 auto"}}>Here&apos;s what you gain when you embark on a structured digital transformation journey with us.</p>
    </div>
    <div className="kb-grid" style={{gridTemplateColumns:"repeat(4,1fr)"}}>
      {BENEFITS.map((b,i)=>(
        <div key={i} className="kb-card" style={{animationDelay:`${i*.12}s`}}>
          <div style={{fontSize:"clamp(42px,5vw,64px)",fontWeight:900,lineHeight:1,background:"linear-gradient(135deg,rgba(0,201,167,0.15) 0%,rgba(0,201,167,0.05) 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",flexShrink:0,width:72,textAlign:"center"}}>{b.num}</div>
          <div style={{flex:1}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}><span style={{fontSize:22}}>{b.icon}</span><h3 style={{color:"#fff",fontSize:19,fontWeight:800,margin:0}}>{b.title}</h3></div>
            <p style={{color:"rgba(255,255,255,0.52)",fontSize:14.5,lineHeight:1.75,margin:"0 0 14px"}}>{b.desc}</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
              {b.tags.map(tag=><span key={tag} style={{display:"inline-flex",alignItems:"center",padding:"3px 10px",borderRadius:100,fontSize:10.5,fontWeight:600,letterSpacing:".06em",textTransform:"uppercase" as const,color:T,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.18)"}}>{tag}</span>)}
            </div>
          </div>
        </div>
      ))}
    </div>
    <div style={{textAlign:"center",marginTop:52}}>
      <button className="btn-teal" style={{padding:"14px 36px",borderRadius:10,border:"none",background:`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:700,fontSize:15,fontFamily:"'Poppins',sans-serif",cursor:"pointer",transition:"transform .2s,box-shadow .2s"}}>Start Your Transformation →</button>
    </div>
  </div>
</section>

{/* ══════════════════════════════════════════════════
    M6 — PLATFORM TOOLS (ICON GRID)
══════════════════════════════════════════════════ */}
<section style={{padding:"80px 48px",background:N1,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:600,height:400,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
  <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
    <div style={{textAlign:"center",marginBottom:56}}>
      <SectionBadge label="Our Tech Stack"/>
      <SectionH2>Leading Platform Tools <GradText>That We Use</GradText></SectionH2>
      <p style={{color:"rgba(255,255,255,0.45)",fontSize:16,lineHeight:1.75,maxWidth:560,margin:"0 auto"}}>We leverage best-in-class tools to build and execute your transformation roadmap.</p>
    </div>
    <div className="pt-grid" style={{gridTemplateColumns:"repeat(5,1fr)"}}>
      {TOOLS.map((tool,i)=>(
        <div key={i} className="pt-card" style={{background:tool.clr,border:`1px solid ${tool.bd}`}}>
          <div className="pt-icon" style={{width:56,height:56,borderRadius:15,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,marginBottom:16,background:"rgba(255,255,255,0.05)",border:`1px solid ${tool.bd}`,transition:"transform .25s"}}>{tool.icon}</div>
          <h3 style={{color:"#fff",fontSize:16,fontWeight:700,marginBottom:8,lineHeight:1.3}}>{tool.name}</h3>
          <p style={{color:"rgba(255,255,255,0.5)",fontSize:13.5,lineHeight:1.7,margin:0}}>{tool.purpose}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ══════════════════════════════════════════════════
    M7 — HIRE DEVELOPERS / WHY CHOOSE US (DARK ACCORDION)
══════════════════════════════════════════════════ */}
<section style={{padding:"80px 48px",background:`linear-gradient(180deg,${N1} 0%,${N2} 100%)`,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",top:"10%",left:"5%",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
  <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
    <div style={{textAlign:"center",marginBottom:56}}>
      <SectionBadge label="Tailored Approach"/>
      <SectionH2>Transformation <GradText>Tailored to Your Needs</GradText></SectionH2>
      <p style={{color:"rgba(255,255,255,0.45)",fontSize:16,lineHeight:1.75,maxWidth:560,margin:"0 auto"}}>We adapt our transformation framework to your business type and strategic goals.</p>
    </div>
    <div className="two-col" style={{marginBottom:16}}>
      <p style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>By Business Type</p>
      <p style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>By Transformation Type</p>
    </div>
    <div className="two-col">
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
        {HIRE_LEFT.map((item,i)=><AccItem key={item.title} item={item} open={hireL===i} toggle={()=>setHireL(hireL===i?null:i)}/>)}
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
        {HIRE_RIGHT.map((item,i)=><AccItem key={item.title} item={item} open={hireR===i} toggle={()=>setHireR(hireR===i?null:i)}/>)}
      </div>
    </div>
    <div style={{display:"flex",gap:16,marginTop:48,justifyContent:"center",flexWrap:"wrap"}}>
      <button className="btn-teal" style={{padding:"14px 32px",borderRadius:10,border:"none",background:`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:700,fontSize:15,fontFamily:"'Poppins',sans-serif",cursor:"pointer",transition:"transform .2s,box-shadow .2s"}}>🔍 Get a Readiness Assessment</button>
      <button style={{padding:"14px 32px",borderRadius:10,border:"1.5px solid rgba(0,201,167,0.35)",background:"transparent",color:T,fontWeight:600,fontSize:15,fontFamily:"'Poppins',sans-serif",cursor:"pointer",transition:"border-color .2s,background .2s"}}
        onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor=T;(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.07)";}}
        onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(0,201,167,0.35)";(e.currentTarget as HTMLElement).style.background="transparent";}}>
        View Pricing →
      </button>
    </div>
  </div>
</section>

{/* ══════════════════════════════════════════════════
    M8 — AI-POWERED SOLUTIONS
══════════════════════════════════════════════════ */}
<section style={{padding:"80px 48px",background:`linear-gradient(180deg,${N2} 0%,${N1} 100%)`,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",top:"0%",left:"50%",transform:"translateX(-50%)",width:700,height:400,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
  <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
    <div style={{marginBottom:52,maxWidth:620}}>
      <SectionBadge label="AI-Powered"/>
      <SectionH2>Leverage <GradText>AI-Powered Transformation</GradText> Solutions</SectionH2>
      <p style={{color:"rgba(255,255,255,0.5)",fontSize:16,lineHeight:1.8}}>We embed AI into your transformation roadmap to deliver predictive insights, intelligent automation, and a true competitive advantage.</p>
    </div>
    <div className="ai-feat-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20}}>
      {AI_FEATS.map((f,i)=>(
        <div key={i} style={{background:"rgba(0,201,167,0.05)",border:"1px solid rgba(0,201,167,0.15)",borderRadius:16,padding:"28px 20px",textAlign:"center"}}>
          <div style={{fontSize:36,marginBottom:16}}>{f.icon}</div>
          <h3 style={{color:"#fff",fontSize:16,fontWeight:700,marginBottom:10}}>{f.title}</h3>
          <p style={{color:"rgba(255,255,255,0.52)",fontSize:13,lineHeight:1.6,margin:0}}>{f.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ══════════════════════════════════════════════════
    M9 — FULL-WIDTH CTA BANNER
══════════════════════════════════════════════════ */}
<section style={{position:"relative",overflow:"hidden"}}>
  <div style={{background:"linear-gradient(135deg,#0055b3 0%,#0077cc 35%,#00a07a 65%,#00C9A7 100%)",backgroundSize:"300% 300%",animation:"ctaBgShift 8s ease infinite",padding:"88px 48px",textAlign:"center",position:"relative"}}>
    <div style={{position:"absolute",top:"-20%",left:"-5%",width:350,height:350,borderRadius:"50%",background:"radial-gradient(circle,rgba(255,255,255,0.1) 0%,transparent 65%)",pointerEvents:"none"}}/>
    <div style={{position:"absolute",bottom:"-20%",right:"-5%",width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 65%)",pointerEvents:"none"}}/>
    <div style={{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",backgroundSize:"48px 48px"}}/>
    <div style={{position:"relative",zIndex:2,maxWidth:760,margin:"0 auto"}}>
      <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,0.15)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:100,padding:"6px 18px",marginBottom:24}}>
        <span style={{width:6,height:6,borderRadius:"50%",background:"#fff",display:"block"}}/>
        <span style={{color:"#fff",fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>Start Today</span>
      </div>
      <h2 style={{fontSize:"clamp(26px,3.5vw,48px)",fontWeight:900,color:"#fff",lineHeight:1.15,letterSpacing:"-0.02em",marginBottom:20}}>
        Want Digital Transformation That Takes Your<br/>Business to the <span style={{textDecoration:"underline",textDecorationColor:"rgba(255,255,255,0.4)"}}>Next Level?</span>
      </h2>
      <p style={{color:"rgba(255,255,255,0.82)",fontSize:17,lineHeight:1.75,marginBottom:40}}>Connect with NNC Digital today and let's build your transformation roadmap together.</p>
      <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
        <button style={{display:"inline-flex",alignItems:"center",gap:10,padding:"16px 40px",borderRadius:12,background:"#fff",color:"#0055b3",fontWeight:800,fontSize:16,fontFamily:"'Poppins',sans-serif",border:"none",cursor:"pointer",transition:"transform .2s,box-shadow .2s"}}
          onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-3px)";(e.currentTarget as HTMLElement).style.boxShadow="0 16px 40px rgba(0,0,0,0.25)";}}
          onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.boxShadow="";}}>✦ Connect Now</button>
        <button style={{display:"inline-flex",alignItems:"center",gap:10,padding:"16px 36px",borderRadius:12,background:"transparent",color:"#fff",fontWeight:700,fontSize:16,fontFamily:"'Poppins',sans-serif",border:"2px solid rgba(255,255,255,0.5)",cursor:"pointer",transition:"border-color .2s,background .2s"}}
          onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="#fff";(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.1)";}}
          onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.5)";(e.currentTarget as HTMLElement).style.background="transparent";}}>📅 Book a Free Call →</button>
      </div>
      <p style={{color:"rgba(255,255,255,0.5)",fontSize:13,marginTop:28}}>🇨🇦 Canada &nbsp;·&nbsp; 🇺🇸 USA &nbsp;·&nbsp; 🇬🇧 UK &nbsp;·&nbsp; 🇮🇳 India &nbsp;&nbsp;|&nbsp;&nbsp; hello@nncdigital.com</p>
    </div>
  </div>
</section>

{/* ══════════════════════════════════════════════════
    M10 — WHY CHOOSE US (SPLIT: TEXT + VIDEO)
══════════════════════════════════════════════════ */}
<section style={{padding:"88px 48px",background:`linear-gradient(180deg,${N1} 0%,${N2} 100%)`,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",top:"20%",right:"-5%",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
  <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
    <div className="two-col-wide">
      <div>
        <SectionBadge label="Our Story"/>
        <SectionH2>Why Choose Us as Your <GradText>Digital Transformation</GradText> Partner?</SectionH2>
        <p style={{color:"rgba(255,255,255,0.55)",fontSize:15,lineHeight:1.8,marginBottom:16}}>Backed by <span style={{color:"#fff",fontWeight:600}}>Nakshatra Namaha Creations Pvt. Ltd.</span> — one of Bangalore&apos;s most respected digital studios with <span style={{color:T,fontWeight:600}}>8+ years of experience</span> and <span style={{color:T,fontWeight:600}}>565+ projects delivered</span>.</p>
        <p style={{color:"rgba(255,255,255,0.55)",fontSize:15,lineHeight:1.8,marginBottom:32}}>We launched NNC Digital as our international arm — bringing the same proven expertise to Canadian, US, and UK markets with dedicated client-facing teams, transparent pricing, and long-term partnership.</p>
        <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:36}}>
          {WCU_POINTS.map((p,i)=>(
            <div key={i} className="wcu-point" style={{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",borderRadius:12,border:"1px solid rgba(255,255,255,0.06)",background:"rgba(255,255,255,0.02)",transition:"border-color .2s,background .2s,transform .2s",cursor:"default"}}>
              <span style={{fontSize:18,flexShrink:0}}>{p.icon}</span>
              <span style={{color:"rgba(255,255,255,0.72)",fontSize:14,fontWeight:500}}>{p.text}</span>
            </div>
          ))}
        </div>
        <div className="wcu-stats" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
          {WCU_STATS.map(st=>(
            <div key={st.l} className="wcu-stat" style={{textAlign:"center",padding:"22px 14px",borderRadius:14,border:"1px solid rgba(0,201,167,0.15)",background:"rgba(0,201,167,0.05)",transition:"transform .25s,background .25s",cursor:"default"}}>
              <div style={{fontSize:"clamp(20px,2.2vw,28px)",fontWeight:900,marginBottom:4,background:`linear-gradient(135deg,#fff 30%,${T})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}><Counter to={st.n} sfx={st.s}/></div>
              <div style={{color:"rgba(255,255,255,0.4)",fontSize:11.5,fontWeight:500}}>{st.l}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div onClick={()=>setVidPlay(true)} style={{position:"relative",borderRadius:24,overflow:"hidden",border:"1px solid rgba(0,201,167,0.2)",background:"linear-gradient(135deg,#0a2540,#061425)",aspectRatio:"16/10",cursor:"pointer"}}>
          {!vidPlay?(
            <>
              <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(0,201,167,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.04) 1px,transparent 1px)",backgroundSize:"40px 40px",pointerEvents:"none"}}/>
              <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:16}}>
                <button style={{width:72,height:72,borderRadius:"50%",background:T,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,animation:"wcuPulse 2.5s ease-in-out infinite"}}>▶</button>
                <p style={{color:"rgba(255,255,255,0.6)",fontSize:14,fontWeight:600,margin:0}}>Watch Our Story</p>
              </div>
              <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"16px 20px",background:"linear-gradient(0deg,rgba(3,11,24,0.95),transparent)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div><p style={{color:"#fff",fontSize:14,fontWeight:700,margin:0}}>NNC Digital Solutions</p><p style={{color:"rgba(255,255,255,0.4)",fontSize:12,margin:0}}>Founder&apos;s Story · 3 min</p></div>
                <div style={{padding:"5px 12px",borderRadius:100,background:"rgba(0,201,167,0.1)",border:"1px solid rgba(0,201,167,0.3)",color:T,fontSize:11,fontWeight:700}}>▶ Play</div>
              </div>
            </>
          ):(
            <iframe src="https://www.youtube.com/embed/?autoplay=1" style={{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"}} allow="autoplay;fullscreen"/>
          )}
        </div>
        <div style={{display:"flex",gap:10,marginTop:20,flexWrap:"wrap"}}>
          {["🇨🇦 Canada","🇺🇸 USA","🇬🇧 UK","🇮🇳 India"].map(b=>(
            <span key={b} style={{padding:"6px 14px",borderRadius:100,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.03)",color:"rgba(255,255,255,0.6)",fontSize:12.5,fontWeight:500}}>{b}</span>
          ))}
        </div>
        <div style={{display:"flex",gap:12,marginTop:24}}>
          <button className="btn-teal" style={{flex:1,padding:"13px 20px",borderRadius:10,border:"none",background:`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:700,fontSize:14,fontFamily:"'Poppins',sans-serif",cursor:"pointer",transition:"transform .2s,box-shadow .2s"}}>📅 Book a Strategy Call</button>
          <button style={{flex:1,padding:"13px 20px",borderRadius:10,border:"1.5px solid rgba(0,201,167,0.35)",background:"transparent",color:T,fontWeight:600,fontSize:14,fontFamily:"'Poppins',sans-serif",cursor:"pointer",transition:"border-color .2s,background .2s"}}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor=T;(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.07)";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(0,201,167,0.35)";(e.currentTarget as HTMLElement).style.background="transparent";}}>Our Work →</button>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ══════════════════════════════════════════════════
    M11 — GLOBAL PRESENCE (DARK BLUE TABS)
══════════════════════════════════════════════════ */}
<section style={{padding:"80px 48px",background:`linear-gradient(180deg,${N0} 0%,${N1} 100%)`,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",width:600,height:300,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
  <div style={{maxWidth:1180,margin:"0 auto",position:"relative",zIndex:2}}>
    <div style={{textAlign:"center",marginBottom:48}}>
      <SectionBadge label="Our Reach"/>
      <SectionH2>Global <GradText>Presence</GradText></SectionH2>
      <p style={{color:"rgba(255,255,255,0.45)",fontSize:15,lineHeight:1.75,maxWidth:500,margin:"0 auto"}}>Client-facing offices in North America &amp; the UK. Engineering headquarters in Bangalore, India.</p>
    </div>
    <div style={{display:"flex",gap:12,justifyContent:"center",marginBottom:40}}>
      {[{key:"int",label:"🌍 North America & UK"},{key:"india",label:"🇮🇳 India (Engineering HQ)"}].map(t=>(
        <button key={t.key} className="gp-tab" onClick={()=>setGTab(t.key as"int"|"india")} style={{padding:"11px 24px",borderRadius:10,border:`1px solid ${gTab===t.key?"rgba(0,201,167,0.5)":"rgba(255,255,255,0.1)"}`,background:gTab===t.key?"rgba(0,201,167,0.12)":"rgba(255,255,255,0.03)",color:gTab===t.key?T:"rgba(255,255,255,0.55)",fontSize:14,fontWeight:700,fontFamily:"'Poppins',sans-serif",cursor:"pointer",transition:"all .22s",boxShadow:gTab===t.key?"0 4px 20px rgba(0,201,167,0.12)":"none"}}>{t.label}</button>
      ))}
    </div>
    {gTab==="int"&&(
      <div>
        <div className="gp-offices" style={{marginBottom:24}}>
          {INT_OFFICES.map((o,i)=>(
            <div key={i} className="gp-card" style={{padding:"28px 24px",borderRadius:18,background:"rgba(0,201,167,0.05)",border:"1px solid rgba(0,201,167,0.18)",transition:"transform .25s,box-shadow .25s,border-color .25s",cursor:"default"}}>
              <div style={{fontSize:36,marginBottom:14}}>{o.flag}</div>
              <h3 style={{color:"#fff",fontSize:18,fontWeight:800,marginBottom:4}}>{o.city}</h3>
              <p style={{color:T,fontSize:12,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase" as const,marginBottom:16}}>{o.tz}</p>
              <a href={`tel:${o.phone.replace(/\s|-/g,"")}`} className="h-teal" style={{display:"flex",alignItems:"center",gap:8,color:"rgba(255,255,255,0.7)",fontSize:14,fontWeight:600,textDecoration:"none",marginBottom:8,transition:"color .2s"}}>📞 {o.phone}</a>
              <a href={`mailto:${o.email}`} className="h-teal" style={{display:"flex",alignItems:"center",gap:8,color:"rgba(255,255,255,0.5)",fontSize:13,textDecoration:"none",transition:"color .2s"}}>✉️ {o.email}</a>
            </div>
          ))}
        </div>
        <div style={{borderRadius:14,padding:"20px 28px",background:"rgba(0,201,167,0.05)",border:"1px solid rgba(0,201,167,0.15)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
          <div style={{display:"flex",alignItems:"center",gap:12}}><div style={{width:10,height:10,borderRadius:"50%",background:"#22c55e",boxShadow:"0 0 8px #22c55e"}}/><span style={{color:"rgba(255,255,255,0.6)",fontSize:14,fontWeight:500}}>Available Mon–Fri, 9am–6pm in your time zone</span></div>
          <a href="mailto:hello@nncdigital.com" className="h-teal" style={{color:T,fontSize:14,fontWeight:700,textDecoration:"none"}}>hello@nncdigital.com →</a>
        </div>
      </div>
    )}
    {gTab==="india"&&(
      <div>
        <div style={{borderRadius:20,padding:"36px 36px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.08)",marginBottom:24}}>
          <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:28}}>
            <span style={{fontSize:32}}>🇮🇳</span>
            <div><h3 style={{color:"#fff",fontSize:18,fontWeight:800,margin:0}}>Nakshatra Namaha Creations Pvt. Ltd.</h3><p style={{color:"rgba(255,255,255,0.4)",fontSize:13,margin:"4px 0 0"}}>Engineering &amp; Delivery HQ — Bangalore, India</p></div>
          </div>
          <div className="gp-ind-grid" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
            {INDIA_OFFICES.map((o,i)=>(
              <div key={i} className="gp-ind" style={{display:"flex",alignItems:"center",gap:14,padding:"16px 18px",borderRadius:12,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",transition:"background .2s,border-color .2s",cursor:"default"}}>
                <span style={{fontSize:22}}>🇮🇳</span>
                <div><p style={{color:"#fff",fontSize:14,fontWeight:700,margin:0}}>{o.city}</p><p style={{color:"rgba(255,255,255,0.38)",fontSize:12,margin:"2px 0 0"}}>{o.note}</p>{o.phone&&<p style={{color:T,fontSize:12.5,fontWeight:600,margin:"4px 0 0"}}>{o.phone}</p>}</div>
              </div>
            ))}
          </div>
          <div style={{marginTop:24,paddingTop:20,borderTop:"1px solid rgba(255,255,255,0.07)"}}><p style={{color:"rgba(255,255,255,0.35)",fontSize:13,margin:0}}>✉️ info@nakshatranamahacreations.com</p></div>
        </div>
        <div className="gp-india-stats" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
          {[{n:"8+",l:"Years Active"},{n:"565+",l:"Projects"},{n:"100+",l:"Team Members"},{n:"4",l:"India Offices"}].map((s,i)=>(
            <div key={i} style={{textAlign:"center",padding:"20px 12px",borderRadius:14,background:"rgba(0,201,167,0.06)",border:"1px solid rgba(0,201,167,0.15)",transition:"transform .25s,background .25s",cursor:"default"}}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-4px)";(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.12)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.06)";}}>
              <p style={{fontSize:26,fontWeight:900,color:T,margin:0}}>{s.n}</p>
              <p style={{fontSize:11,color:"rgba(255,255,255,0.4)",margin:"4px 0 0",fontWeight:600,textTransform:"uppercase" as const,letterSpacing:"0.06em"}}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
</section>

{/* ══════════════════════════════════════════════════
    M12 — FAQS (ACCORDION)
══════════════════════════════════════════════════ */}
<section style={{padding:"80px 48px",background:`linear-gradient(180deg,${N1} 0%,${N2} 100%)`,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",top:"30%",right:"-5%",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
  <div style={{maxWidth:860,margin:"0 auto",position:"relative",zIndex:2}}>
    <div style={{textAlign:"center",marginBottom:52}}>
      <SectionBadge label="FAQs"/>
      <SectionH2>Frequently Asked <GradText>Questions</GradText></SectionH2>
      <p style={{color:"rgba(255,255,255,0.45)",fontSize:15,lineHeight:1.75,maxWidth:520,margin:"0 auto"}}>Everything you need to know about digital transformation for businesses in Canada, USA &amp; UK.</p>
    </div>
    <div style={{display:"flex",flexDirection:"column",gap:12}}>
      {FAQS.map((f,i)=>(
        <div key={i} className={`faq-item${faq===i?" fopen":""}`} onClick={()=>setFaq(faq===i?null:i)} style={{border:`1px solid ${faq===i?"rgba(0,201,167,0.4)":"rgba(255,255,255,0.08)"}`,borderRadius:16,background:faq===i?"rgba(0,201,167,0.06)":"rgba(255,255,255,0.02)",overflow:"hidden",cursor:"pointer",transition:"all .25s ease"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,padding:"20px 22px"}}>
            <div style={{display:"flex",alignItems:"center",gap:14}}>
              <span style={{color:T,fontSize:13,fontWeight:800,background:"rgba(0,201,167,0.1)",border:"1px solid rgba(0,201,167,0.2)",borderRadius:8,padding:"4px 10px",flexShrink:0}}>Q{i+1}</span>
              <span style={{fontSize:15.5,fontWeight:700,color:faq===i?"#fff":"rgba(255,255,255,0.78)",lineHeight:1.4,transition:"color .2s"}}>{f.q}</span>
            </div>
            <div style={{width:30,height:30,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,fontWeight:700,lineHeight:1,background:faq===i?T:"rgba(255,255,255,0.07)",border:`1px solid ${faq===i?T:"rgba(255,255,255,0.12)"}`,color:faq===i?"#000":"rgba(255,255,255,0.5)",transform:faq===i?"rotate(45deg)":"rotate(0deg)",transition:"all .25s ease"}}>+</div>
          </div>
          <div style={{maxHeight:faq===i?500:0,overflow:"hidden",transition:"max-height .38s ease"}}>
            <p style={{padding:"0 22px 22px 82px",color:"rgba(255,255,255,0.55)",fontSize:14.5,lineHeight:1.8,margin:0}}>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
    <div style={{textAlign:"center",marginTop:44}}>
      <p style={{color:"rgba(255,255,255,0.4)",fontSize:14,marginBottom:20}}>Still have questions? We respond within 24 hours.</p>
      <button className="btn-teal" style={{padding:"13px 32px",borderRadius:10,border:"none",background:`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:700,fontSize:15,fontFamily:"'Poppins',sans-serif",cursor:"pointer",transition:"transform .2s,box-shadow .2s"}}>Ask Us Anything →</button>
    </div>
  </div>
</section>

{/* ══════════════════════════════════════════════════
    M13 — READY TO BUILD + CONTACT FORM
══════════════════════════════════════════════════ */}
<section style={{padding:"80px 48px",background:`linear-gradient(180deg,${N2} 0%,${N0} 100%)`,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",top:"20%",left:"50%",transform:"translateX(-50%)",width:700,height:400,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
  <div style={{maxWidth:1180,margin:"0 auto",position:"relative",zIndex:2}}>
    <div style={{textAlign:"center",marginBottom:56}}>
      <SectionBadge label="Get In Touch"/>
      <SectionH2>Ready to Build <GradText>Next-Level</GradText> Custom Digital Solutions?</SectionH2>
      <p style={{color:"rgba(255,255,255,0.45)",fontSize:15.5,lineHeight:1.75,maxWidth:540,margin:"0 auto"}}>Tell us about your transformation goals. We'll respond within 24 hours with a free consultation.</p>
    </div>
    <div className="cf-grid">
      {/* Left — Form */}
      <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:20,padding:"36px 32px"}}>
        {cSubmitted?(
          <div style={{textAlign:"center",padding:"48px 0"}}>
            <div style={{fontSize:56,marginBottom:20}}>✅</div>
            <h3 style={{color:"#fff",fontSize:22,fontWeight:800,marginBottom:12}}>Message Sent!</h3>
            <p style={{color:"rgba(255,255,255,0.5)",fontSize:15,lineHeight:1.7,marginBottom:28}}>Thank you — we'll contact you within 24 hours to discuss your transformation roadmap.</p>
            <button onClick={()=>{setCSubmitted(false);setCForm({name:"",phone:"",dialCode:"+1",email:"",service:"",project:""});}} style={{padding:"12px 28px",borderRadius:10,border:"none",background:`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:700,fontSize:14,fontFamily:"'Poppins',sans-serif",cursor:"pointer"}}>Send Another →</button>
          </div>
        ):(
          <form onSubmit={handleCSubmit}>
            <div className="cf-name" style={{marginBottom:16}}>
              <div><label style={{display:"block",fontSize:12.5,fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:7,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Full Name *</label><input className="fi" required style={iSLg} placeholder="Jane Smith" value={cForm.name} onChange={e=>setCF("name",e.target.value)}/></div>
              <div>
                <label style={{display:"block",fontSize:12.5,fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:7,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Phone</label>
                <div style={{display:"flex",gap:8}}>
                  <select className="fi" style={{...iSLg,width:90,flexShrink:0,padding:"13px 8px",cursor:"pointer"}} value={cForm.dialCode} onChange={e=>setCF("dialCode",e.target.value)}>
                    {DIAL_CODES.map((d,i)=><option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                  </select>
                  <input className="fi" style={iSLg} type="tel" placeholder="647 XXX XXXX" value={cForm.phone} onChange={e=>setCF("phone",e.target.value)}/>
                </div>
              </div>
            </div>
            <div style={{marginBottom:16}}><label style={{display:"block",fontSize:12.5,fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:7,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Business Email *</label><input className="fi" required type="email" style={iSLg} placeholder="jane@yourcompany.com" value={cForm.email} onChange={e=>setCF("email",e.target.value)}/></div>
            <div style={{marginBottom:16}}>
              <label style={{display:"block",fontSize:12.5,fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:7,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Service of Interest</label>
              <select className="fi" style={{...iSLg,cursor:"pointer"}} value={cForm.service} onChange={e=>setCF("service",e.target.value)}>
                <option value="">Select...</option>
                {SERVICES_LIST.map(s=><option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div style={{marginBottom:24}}><label style={{display:"block",fontSize:12.5,fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:7,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Project Description</label><textarea className="fi" style={{...iSLg,minHeight:110,resize:"vertical" as const}} placeholder="Briefly describe your business goals, challenges, and what you'd like to achieve..." value={cForm.project} onChange={e=>setCF("project",e.target.value)}/></div>
            <button className="btn-teal" type="submit" disabled={cLoading} style={{width:"100%",padding:15,borderRadius:10,border:"none",background:cLoading?"rgba(0,201,167,0.5)":`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:800,fontSize:15,fontFamily:"'Poppins',sans-serif",cursor:cLoading?"wait":"pointer",transition:"transform .2s,box-shadow .2s"}}>{cLoading?"Sending...":"Submit — Start Your Transformation →"}</button>
            <p style={{color:"rgba(255,255,255,0.3)",fontSize:11.5,textAlign:"center",marginTop:12}}>🔒 Your information is 100% secure and never shared.</p>
          </form>
        )}
      </div>

      {/* Right — Info */}
      <div style={{display:"flex",flexDirection:"column",gap:20}}>
        <div style={{background:"rgba(0,201,167,0.05)",border:"1px solid rgba(0,201,167,0.18)",borderRadius:18,padding:"28px 26px"}}>
          <h3 style={{color:"#fff",fontSize:16,fontWeight:800,marginBottom:18}}>What Happens After You Submit?</h3>
          {[{s:"1",text:"We review your brief within a few hours."},{s:"2",text:"A senior transformation consultant calls you within 24 hours."},{s:"3",text:"We send a free readiness assessment proposal with timeline & cost."},{s:"4",text:"You decide — no pressure, no obligation."}].map((s,i)=>(
            <div key={i} style={{display:"flex",gap:14,alignItems:"flex-start",marginBottom:i<3?16:0,padding:"12px 14px",borderRadius:10,background:"rgba(255,255,255,0.03)",transition:"background .2s",cursor:"default"}}
              onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.07)"}
              onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.03)"}>
              <div style={{width:32,height:32,borderRadius:"50%",flexShrink:0,background:`linear-gradient(135deg,${T},${TD})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:900,color:"#000"}}>{s.s}</div>
              <p style={{color:"rgba(255,255,255,0.65)",fontSize:14,lineHeight:1.65,margin:0}}>{s.text}</p>
            </div>
          ))}
        </div>
        <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:18,padding:"26px 26px"}}>
          <h3 style={{color:"rgba(255,255,255,0.4)",fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const,marginBottom:18}}>Direct Contacts</h3>
          {[{flag:"🇨🇦",label:"Canada",phone:"+1 647-XXX-XXXX"},{flag:"🇺🇸",label:"USA",phone:"+1 631-XXX-XXXX"},{flag:"🇬🇧",label:"UK",phone:"+44 20-XXXX-XXXX"}].map((c,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 0",borderBottom:i<2?"1px solid rgba(255,255,255,0.06)":"none"}}>
              <span style={{color:"rgba(255,255,255,0.55)",fontSize:14,fontWeight:500}}>{c.flag} {c.label}</span>
              <a href={`tel:${c.phone.replace(/\s|-/g,"")}`} className="h-teal" style={{color:T,fontSize:14,fontWeight:700,textDecoration:"none"}}>{c.phone}</a>
            </div>
          ))}
          <div style={{marginTop:16,paddingTop:16,borderTop:"1px solid rgba(255,255,255,0.06)"}}>
            <a href="mailto:hello@nncdigital.com" className="h-teal" style={{color:"rgba(255,255,255,0.5)",fontSize:14,textDecoration:"none",display:"flex",alignItems:"center",gap:8}}>✉️ hello@nncdigital.com</a>
          </div>
        </div>
        <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
          {["🔵 Google Partner","🏆 ISO Certified","🔒 GDPR Compliant","🍁 PIPEDA Ready","⭐ Clutch Top Agency"].map(b=>(
            <span key={b} style={{padding:"6px 12px",borderRadius:100,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.03)",color:"rgba(255,255,255,0.5)",fontSize:12,fontWeight:500}}>{b}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}