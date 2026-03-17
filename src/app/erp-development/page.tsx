

"use client";
import { useState, useEffect, useRef, CSSProperties } from "react";
import Navbar from "../components/Navbar";

// ─── Design tokens ─────────────────────────────────────────────────────────────
const T  = "#00C9A7";
const TD = "#00a07a";
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";

// ─── Data ──────────────────────────────────────────────────────────────────────
const LOGOS = ["clients1.png","clients2.png","clients3.png","clients4.png","clients5.png",
  "clients6.png","clients7.png","clients8.png","clients9.png","clients10.png","clients11.png"];

const STATS = [
  {val:150,sfx:"+",label:"ERP Projects Delivered",sub:"Across 12 countries",icon:"🚀"},
  {val:10, sfx:"+",label:"Years of Expertise",    sub:"Deep tech since 2014", icon:"💡"},
  {val:50, sfx:"+",label:"Clients Globally",      sub:"CA · USA · UK · IN",   icon:"🌍"},
  {val:98, sfx:"%",label:"Client Retention",      sub:"Long-term partnerships",icon:"🤝"},
];

const CASES = [
  {
    industry:"Manufacturing",icon:"🏭",tag:"Operations",tagClr:"#818cf8",tagBg:"rgba(99,102,241,.15)",tagBd:"rgba(99,102,241,.35)",
    title:"40% Cost Reduction for a Canadian Manufacturer",
    challenge:"Disconnected inventory, procurement, and production systems caused costly delays and stock-outs across 5 facilities.",
    solution:"We built a unified ERP integrating procurement, inventory, and production scheduling with real-time dashboards.",
    metrics:[{l:"Cost Reduction",v:"40%",i:"💰"},{l:"Stock Accuracy",v:"99.2%",i:"✅"},{l:"Go-live Time",v:"10 wks",i:"🚀"}]
  },
  {
    industry:"Healthcare",icon:"🏥",tag:"Healthcare",tagClr:"#22c55e",tagBg:"rgba(34,197,94,.12)",tagBd:"rgba(34,197,94,.3)",
    title:"55% Faster Billing for a UK Hospital Group",
    challenge:"A multi-site NHS partner was losing revenue due to manual billing, fragmented patient records, and compliance gaps.",
    solution:"NNC deployed a custom Healthcare ERP with automated billing, GDPR-compliant records, and integrated appointment management.",
    metrics:[{l:"Faster Billing",v:"+55%",i:"📅"},{l:"Revenue Leakage",v:"−70%",i:"✅"},{l:"Compliance",v:"100%",i:"⭐"}]
  },
  {
    industry:"Retail & E-Commerce",icon:"🛒",tag:"Retail",tagClr:"#00C9A7",tagBg:"rgba(0,201,167,.12)",tagBd:"rgba(0,201,167,.3)",
    title:"3× Inventory Turnover for a US Retailer",
    challenge:"A multi-channel retailer had no real-time visibility into stock levels across warehouses, leading to overselling and write-offs.",
    solution:"We built a custom ERP integrating Shopify, 3PL partners, and accounting — delivering live inventory across all channels.",
    metrics:[{l:"Inventory Turns",v:"3×",i:"📈"},{l:"Oversell Rate",v:"−95%",i:"✅"},{l:"Fulfilment Speed",v:"+60%",i:"🚀"}]
  },
];

const SERVICES = [
  {icon:"🗂️",title:"ERP Consulting",        desc:"Tailored ERP strategy aligned to your operations across North America and the UK.",                   tag:"Strategy",      slug:"erp-consulting"},
  {icon:"⚙️",title:"ERP Implementation",    desc:"End-to-end ERP setup, configuration, data migration, and launch.",                                     tag:"Setup",         slug:"erp-implementation"},
  {icon:"🎛️",title:"ERP Customization",     desc:"Custom ERP modules built precisely around your workflows and business logic.",                          tag:"Custom",        slug:"erp-customization"},
  {icon:"📦",title:"Inventory Management",  desc:"Real-time inventory tracking across warehouses, locations, and sales channels.",                         tag:"Inventory",     slug:"inventory-management"},
  {icon:"👥",title:"HR & Payroll Module",   desc:"Automated HR, attendance, payroll, and compliance — built into your ERP.",                              tag:"HR",            slug:"hr-payroll"},
  {icon:"💼",title:"Finance & Accounting",  desc:"Integrated financial reporting, budgeting, invoicing, and multi-currency support.",                      tag:"Finance",       slug:"finance-accounting"},
  {icon:"🔗",title:"ERP Integration",       desc:"Connect your ERP with CRM, e-commerce, logistics, and third-party platforms.",                          tag:"Integration",   slug:"erp-integration"},
  {icon:"🔄",title:"ERP Migration",         desc:"Secure, zero-loss migration from SAP, Oracle, legacy systems, or spreadsheets.",                        tag:"Migration",     slug:"erp-migration"},
  {icon:"📱",title:"ERP Mobile Apps",       desc:"Native and cross-platform mobile ERP apps for field teams and remote operations.",                       tag:"Mobile",        slug:"erp-mobile"},
  {icon:"🏭",title:"Manufacturing Module",  desc:"Production planning, BOM management, shop floor control, and quality tracking.",                         tag:"Manufacturing", slug:"manufacturing"},
  {icon:"🚚",title:"Vendor Management",     desc:"Streamline supplier onboarding, procurement, PO management, and vendor scorecards.",                     tag:"Procurement",   slug:"vendor-management"},
  {icon:"🛠️",title:"ERP Support & Optimisation",desc:"Ongoing ERP administration, performance tuning, and user training post go-live.",                  tag:"Support",       slug:"erp-support"},
];

const ACCORDION_L = [
  {icon:"📦",title:"Inventory & Warehouse",  desc:"Real-time stock tracking, multi-location inventory, barcode scanning, and automated reorder triggers across all your warehouses."},
  {icon:"💰",title:"Finance & Accounting",   desc:"Integrated ledger, AP/AR automation, multi-currency, tax compliance, and real-time P&L across entities."},
  {icon:"📊",title:"Reports & Dashboards",   desc:"Custom KPI dashboards, financial reports, inventory analytics, and executive summaries — refreshed in real time."},
  {icon:"📈",title:"Revenue Forecasting",    desc:"AI-driven revenue models combining pipeline data, historical trends, and seasonality for confident business planning."},
];
const ACCORDION_R = [
  {icon:"🏭",title:"Manufacturing & BOM",          desc:"Bill of Materials management, production planning, shop floor scheduling, and quality control — all in one ERP."},
  {icon:"🚚",title:"Procurement & Supply Chain",   desc:"Automate supplier onboarding, purchase orders, goods receipt, and three-way matching to eliminate procurement delays."},
  {icon:"👥",title:"HR & Payroll",                 desc:"Employee records, attendance, leave management, payroll processing, and compliance reporting — fully integrated."},
  {icon:"🔗",title:"Third-Party Integrations",     desc:"Native connectors for Shopify, WooCommerce, Salesforce, QuickBooks, Stripe, and 100+ platforms via REST API."},
];

const BENEFITS = [
  {num:"01",icon:"🔒",title:"Secure & Compliant",    desc:"GDPR / PIPEDA / CCPA compliance built-in. Role-based access, audit trails, and zero data loss guarantee.",                                           tags:["GDPR","PIPEDA","CCPA"]},
  {num:"02",icon:"📊",title:"Real-Time Visibility",  desc:"One dashboard across finance, inventory, HR, and operations. Live KPIs and cross-department reporting at a glance.",                                tags:["Dashboard","KPIs","Reports"]},
  {num:"03",icon:"🔗",title:"Seamless Integration",  desc:"Native connectors for Shopify, QuickBooks, Salesforce, Microsoft 365, and 100+ third-party tools.",                                                  tags:["API","Plugins","No Silos"]},
  {num:"04",icon:"🤝",title:"Dedicated Support",     desc:"Hypercare period after go-live. Dedicated team ensuring maximum ERP adoption and continuous optimisation.",                                           tags:["24/7","Training","Go-Live"]},
];

const TOOLS = [
  {icon:"🔷",name:"SAP Business One",    desc:"Enterprise-grade ERP for mid-market and large businesses.",          clr:"rgba(0,121,255,.08)",    bd:"rgba(0,121,255,.22)"},
  {icon:"🟠",name:"Oracle NetSuite",     desc:"Cloud ERP ideal for fast-growing, multi-entity businesses.",          clr:"rgba(255,122,0,.08)",    bd:"rgba(255,122,0,.22)"},
  {icon:"🏢",name:"MS Dynamics 365",     desc:"Integrated ERP + CRM with Microsoft 365 and Azure ecosystem.",         clr:"rgba(0,120,215,.08)",    bd:"rgba(0,120,215,.22)"},
  {icon:"🔶",name:"Odoo ERP",            desc:"Open-source, modular ERP for businesses of all sizes.",                clr:"rgba(114,46,209,.08)",   bd:"rgba(114,46,209,.22)"},
  {icon:"🌐",name:"ERPNext",             desc:"Free, open-source ERP with strong manufacturing and accounting.",       clr:"rgba(38,166,91,.08)",    bd:"rgba(38,166,91,.22)"},
  {icon:"🎯",name:"Epicor ERP",          desc:"Industry-focused ERP for manufacturing, distribution, and retail.",     clr:"rgba(234,88,12,.08)",    bd:"rgba(234,88,12,.22)"},
  {icon:"🔵",name:"Infor CloudSuite",    desc:"Cloud ERP for healthcare, manufacturing, and services sectors.",         clr:"rgba(37,99,235,.08)",    bd:"rgba(37,99,235,.22)"},
  {icon:"⚡",name:"Custom ERP",          desc:"100% bespoke when off-the-shelf doesn't fit your exact workflows.",     clr:"rgba(0,201,167,.1)",     bd:"rgba(0,201,167,.28)",bespoke:true},
];

const HIRE_L = [
  {icon:"🏢",title:"Enterprises",desc:"Complex multi-location operations with enterprise-grade integrations, multi-currency, and permission hierarchies."},
  {icon:"🎯",title:"Agencies",   desc:"Client project tracking, resource billing, retainer management, and performance dashboards — ERP designed for agency growth."},
  {icon:"🚀",title:"Start-ups",  desc:"Lightweight ERP that scales without outgrowing in 12 months. Start simple, expand modules as you grow."},
];
const HIRE_R = [
  {icon:"📊",title:"Analytical ERP",    desc:"Turn raw business data into actionable intelligence. Identify trends, reduce costs, and make confident data-driven decisions."},
  {icon:"🤝",title:"Collaborative ERP", desc:"Unify sales, finance, supply chain, HR, and operations around a single source of truth — eliminating silos."},
  {icon:"⚙️",title:"Operational ERP",  desc:"Automate day-to-day business processes from procurement to invoicing so your team focuses on what matters most."},
];

const AI_FEATS = [
  {icon:"🧠",title:"AI Demand Forecasting",        desc:"AI analyses historical orders, seasonality, and market signals — predicting demand so you never over-stock or stock-out again."},
  {icon:"🎯",title:"Predictive Maintenance",        desc:"ERP-embedded AI monitors equipment usage data and predicts failures before they happen — cutting unplanned downtime by up to 60%."},
  {icon:"🤖",title:"Intelligent Process Automation",desc:"AI-powered bots handle purchase orders, invoice matching, expense approvals, and HR workflows — 24/7, without human intervention."},
];

const AI_ROWS = [
  {label:"Demand forecast accuracy",val:"97%",color:T},
  {label:"Inventory optimisation",  val:"92%",color:"#818cf8"},
  {label:"Process automation",      val:"88%",color:T},
  {label:"Predictive maintenance",  val:"94%",color:"#f59e0b"},
];

const WCU_POINTS = [
  {icon:"🏆",text:"8+ years of proven digital excellence"},
  {icon:"🌍",text:"Serving Canada, USA & UK markets"},
  {icon:"⚡",text:"565+ projects delivered globally"},
  {icon:"🤝",text:"Client-first culture, enterprise-grade quality"},
  {icon:"🔒",text:"GDPR, PIPEDA & CCPA compliant delivery"},
  {icon:"📱",text:"Full-stack: Web, Mobile, CRM, ERP, AI"},
];
const WCU_STATS = [{n:1500,s:"+",l:"Web Projects"},{n:500,s:"+",l:"Mobile Apps"},{n:1800,s:"+",l:"IT Talents"},{n:25,s:"+",l:"Industries"}];

const FAQS = [
  {q:"What is custom ERP software vs off-the-shelf?",a:"Off-the-shelf ERP tools like SAP or Oracle are powerful but often require expensive licences and force you to adapt your processes to the software. A custom ERP is built around your exact workflows, compliance requirements, and team structure — resulting in faster adoption and lower ongoing costs."},
  {q:"What modules can be included in a custom ERP?",a:"Virtually any business function: finance & accounting, inventory & warehouse management, procurement & supply chain, HR & payroll, manufacturing & BOM, project management, CRM integration, e-commerce connectivity, and compliance modules for GDPR, PIPEDA, and CCPA."},
  {q:"How long does ERP development take?",a:"A focused custom ERP (3–5 modules) typically takes 10–16 weeks. Mid-complexity builds run 18–28 weeks. Enterprise ERP is scoped individually — typically 28–48 weeks. We provide a fixed timeline before any work begins."},
  {q:"What does custom ERP development cost in Canada or the UK?",a:"A focused ERP starts from CAD $18,000–$35,000 / £14,000–£28,000. Mid-complexity builds range from CAD $40,000–$90,000 / £32,000–£72,000. All quotes are fixed-price."},
  {q:"Can you migrate data from our existing system?",a:"Yes. We handle full data migration from SAP, Oracle, Microsoft Dynamics, legacy systems, and spreadsheets — including data mapping, cleaning, validation, and a zero-downtime cutover plan."},
  {q:"Are your ERP solutions GDPR, PIPEDA, and CCPA compliant?",a:"Yes. Compliance is built in from day one. For UK/EU clients we implement GDPR-ready consent management and audit trails. For Canadian clients we follow PIPEDA. For US clients we implement CCPA-compliant data handling."},
];

const INT_OFFICES = [
  {flag:"🇨🇦",city:"Toronto, Canada", phone:"+1 647-XXX-XXXX",email:"hello@nncdigital.com",tz:"EST / EDT"},
  {flag:"🇺🇸",city:"New York, USA",   phone:"+1 631-XXX-XXXX",email:"hello@nncdigital.com",tz:"EST / EDT"},
  {flag:"🇬🇧",city:"London, UK",      phone:"+44 20-XXXX-XXXX",email:"hello@nncdigital.com",tz:"GMT / BST"},
];
const INDIA_OFFICES = [
  {city:"Bangalore (HQ)",phone:"+91 9900566466",note:"Primary engineering hub"},
  {city:"Mysore",        phone:null,             note:"Design & QA"},
  {city:"Mumbai",        phone:null,             note:"Sales & partnerships"},
  {city:"Hyderabad",     phone:null,             note:"Mobile & cloud"},
];

const SERVICES_LIST = ["ERP Development","CRM Development","Web Development","Mobile App Development","Marketing Automation","Salesforce CRM","Digital Transformation","Other"];
const DIAL_CODES = [{code:"+1",flag:"🇨🇦"},{code:"+1",flag:"🇺🇸"},{code:"+44",flag:"🇬🇧"},{code:"+91",flag:"🇮🇳"}];

// ─── Helpers ───────────────────────────────────────────────────────────────────
function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const c=ref.current;if(!c)return;
    const ctx=c.getContext("2d")!;
    let W=c.width=c.offsetWidth,H=c.height=c.offsetHeight;
    const pts=Array.from({length:50},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.4+.3,a:Math.random()*.38+.07}));
    let raf:number;
    const draw=()=>{
      ctx.clearRect(0,0,W,H);
      pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(0,201,167,${p.a})`;ctx.fill();});
      for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<90){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle=`rgba(0,201,167,${.06*(1-d/90)})`;ctx.lineWidth=.5;ctx.stroke();}}
      raf=requestAnimationFrame(draw);
    };
    draw();
    const rz=()=>{W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;};
    window.addEventListener("resize",rz);
    return ()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",rz);};
  },[]);
  return <canvas ref={ref} style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}}/>;
}

function Counter({to,sfx=""}:{to:number;sfx?:string}) {
  const ref=useRef<HTMLSpanElement>(null);
  const [v,setV]=useState(0);
  const started=useRef(false);
  useEffect(()=>{
    const el=ref.current;if(!el)return;
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting&&!started.current){started.current=true;let step=0;const t=setInterval(()=>{step++;const ease=1-Math.pow(1-step/70,3);setV(Math.round(ease*to));if(step>=70){setV(to);clearInterval(t);}},1800/70);}},{threshold:.25});
    obs.observe(el);return ()=>obs.disconnect();
  },[to]);
  return <span ref={ref}>{v}{sfx}</span>;
}

function GradText({children}:{children:React.ReactNode}) {
  return <span style={{background:`linear-gradient(135deg,${T},#1fd1b5)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{children}</span>;
}

function AccItem({item,open,toggle}:{item:{icon:string;title:string;desc:string};open:boolean;toggle:()=>void}) {
  return (
    <div onClick={toggle} style={{borderRadius:14,border:`1px solid ${open?"rgba(0,201,167,0.4)":"rgba(255,255,255,0.08)"}`,background:open?"rgba(0,201,167,0.06)":"rgba(255,255,255,0.02)",overflow:"hidden",cursor:"pointer",transition:"border-color .25s,background .25s"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",gap:12}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{width:40,height:40,borderRadius:12,flexShrink:0,background:open?"rgba(0,201,167,0.15)":"rgba(255,255,255,0.05)",border:`1px solid ${open?"rgba(0,201,167,0.3)":"rgba(255,255,255,0.1)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>{item.icon}</div>
          <span style={{fontSize:14,fontWeight:700,color:open?"#fff":"rgba(255,255,255,0.72)",fontFamily:"'Poppins',sans-serif"}}>{item.title}</span>
        </div>
        <div style={{width:26,height:26,borderRadius:"50%",flexShrink:0,background:open?T:"rgba(255,255,255,0.07)",border:`1px solid ${open?T:"rgba(255,255,255,0.14)"}`,display:"flex",alignItems:"center",justifyContent:"center",color:open?"#000":"rgba(255,255,255,0.55)",fontSize:17,fontWeight:700,transform:open?"rotate(45deg)":"rotate(0deg)",transition:"all .25s ease"}}>+</div>
      </div>
      <div style={{maxHeight:open?220:0,overflow:"hidden",transition:"max-height .35s ease"}}>
        <p style={{padding:"0 18px 18px 70px",color:"rgba(255,255,255,0.5)",fontSize:13.5,lineHeight:1.75,margin:0}}>{item.desc}</p>
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function ERPPage() {

  // ── Responsive (mirrors PricingPage pattern) ───────────────────────────────
  const [windowWidth,setWindowWidth]=useState(0);
  useEffect(()=>{
    setWindowWidth(window.innerWidth);
    const h=()=>setWindowWidth(window.innerWidth);
    window.addEventListener("resize",h);
    return ()=>window.removeEventListener("resize",h);
  },[]);
  const isMobile = windowWidth<=640;
  const isTablet = windowWidth>640 && windowWidth<=1024;

  // ── Responsive helpers ─────────────────────────────────────────────────────
  const sp   = ()=> isMobile?"20px 20px":isTablet?"70px 32px":"40px 48px";
  const heroFS= ()=> isMobile?"30px":isTablet?"42px":"54px";
  const h2FS  = ()=> isMobile?"24px":isTablet?"30px":"38px";
  const bodyFS= ()=> isMobile?"14px":isTablet?"15px":"16px";
  const cardP = ()=> isMobile?"18px":isTablet?"22px":"26px";
  const g2    = ()=> isMobile?"1fr":"1fr 1fr";
  const g3    = ()=> isMobile?"1fr":isTablet?"repeat(2,1fr)":"repeat(3,1fr)";
  const g4    = ()=> isMobile?"1fr":isTablet?"repeat(2,1fr)":"repeat(4,1fr)";

  // ── State ──────────────────────────────────────────────────────────────────
  const [form,setForm]=useState({firstName:"",lastName:"",phone:"",dialCode:"+1",email:"",service:"",message:""});
  const [submitted,setSubmitted]=useState(false);
  const [loading,setLoading]=useState(false);
  const setF=(k:string,v:string)=>setForm(f=>({...f,[k]:v}));
  const handleSubmit=(e:React.FormEvent)=>{e.preventDefault();setLoading(true);setTimeout(()=>{setLoading(false);setSubmitted(true);},1200);};

  const [story,setStory]=useState(0);
  const [accL,setAccL]=useState<number|null>(0);
  const [accR,setAccR]=useState<number|null>(0);
  const [hireL,setHireL]=useState<number|null>(0);
  const [hireR,setHireR]=useState<number|null>(0);
  const [faq,setFaq]=useState<number|null>(0);
  const [gTab,setGTab]=useState<"int"|"india">("int");

  const [cForm,setCForm]=useState({name:"",phone:"",dialCode:"+1",email:"",service:"",project:""});
  const [cSubmitted,setCSubmitted]=useState(false);
  const [cLoading,setCLoading]=useState(false);
  const setCF=(k:string,v:string)=>setCForm(f=>({...f,[k]:v}));
  const handleCSubmit=(e:React.FormEvent)=>{e.preventDefault();setCLoading(true);setTimeout(()=>{setCLoading(false);setCSubmitted(true);},1200);};

  // ── Input styles ───────────────────────────────────────────────────────────
  const iS:CSSProperties={width:"100%",padding:isMobile?"10px 12px":"12px 14px",borderRadius:9,background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.14)",color:"#fff",fontSize:isMobile?"14px":"15px",fontFamily:"'Poppins',sans-serif",outline:"none",boxSizing:"border-box",transition:"border-color .2s,background .2s"};
  const iSLg:CSSProperties={...iS,padding:isMobile?"11px 14px":"13px 16px"};
  const btnT:CSSProperties={display:"inline-block",padding:isMobile?"12px 20px":"13px 28px",borderRadius:10,border:"none",background:`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:700,fontSize:isMobile?"14px":"15px",fontFamily:"'Poppins',sans-serif",cursor:"pointer",textDecoration:"none",transition:"transform .2s,box-shadow .2s"};
  const btnO:CSSProperties={display:"inline-block",padding:isMobile?"12px 20px":"13px 28px",borderRadius:10,border:`1.5px solid rgba(0,201,167,0.35)`,background:"transparent",color:T,fontWeight:600,fontSize:isMobile?"14px":"15px",fontFamily:"'Poppins',sans-serif",cursor:"pointer",textDecoration:"none",transition:"border-color .2s,background .2s"};

  return (
    <>
      <Navbar/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        *,*::before,*::after{box-sizing:border-box;}
        body{font-family:'Poppins',sans-serif;}

        @keyframes heroPulse {0%,100%{opacity:.7;transform:translateY(-50%) scale(1)}50%{opacity:1;transform:translateY(-50%) scale(1.04)}}
        @keyframes heroSpin  {from{transform:translateY(-50%) rotate(0deg)}to{transform:translateY(-50%) rotate(360deg)}}
        @keyframes heroScan  {0%{top:-2px;opacity:0}10%{opacity:1}90%{opacity:1}100%{top:100%;opacity:0}}
        @keyframes heroGlow  {0%,100%{box-shadow:0 0 0 rgba(0,201,167,0)}50%{box-shadow:0 0 20px rgba(0,201,167,.2)}}
        @keyframes heroFadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        @keyframes heroBlink {0%,100%{opacity:1}50%{opacity:.35}}
        @keyframes ctaBgShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        @keyframes sbFadeUp  {from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes clScroll  {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes aiScan    {0%{top:-2px}100%{top:100%}}
        @keyframes aiPulse   {0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.06)}}

        .cl-track{display:flex;width:max-content;animation:clScroll 32s linear infinite;}
        .cl-track:hover{animation-play-state:paused;}

        /* hover-only helpers */
        .svc-card:hover   {transform:translateY(-6px);border-color:rgba(0,201,167,0.3)!important;background:rgba(0,201,167,0.04)!important;}
        .kb-card:hover    {transform:translateY(-4px);border-color:rgba(0,201,167,0.2)!important;}
        .pt-card:hover    {transform:translateY(-6px);box-shadow:0 20px 40px rgba(0,0,0,0.3);}
        .gp-card:hover    {transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,0.3);border-color:rgba(0,201,167,0.35)!important;}
        .gp-ind:hover     {background:rgba(255,255,255,0.06)!important;}
        .wcu-point:hover  {border-color:rgba(0,201,167,0.25)!important;background:rgba(0,201,167,0.06)!important;transform:translateX(6px)!important;}
        .wcu-stat:hover   {transform:translateY(-4px)!important;background:rgba(0,201,167,0.1)!important;}
        .btn-t:hover      {transform:translateY(-3px);box-shadow:0 12px 32px rgba(0,201,167,.25);}
        .btn-o:hover      {border-color:${T}!important;background:rgba(0,201,167,0.07)!important;}
        .h-teal:hover     {color:${T}!important;}
        .fi:focus         {border-color:rgba(0,201,167,0.5)!important;background:rgba(0,201,167,0.05)!important;}
        .ss-tab:hover     {border-color:rgba(0,201,167,0.35);background:rgba(0,201,167,0.06);color:#fff;}
        .ss-tab.act       {border-color:rgba(0,201,167,0.6);background:rgba(0,201,167,0.12);color:#fff;}
        .gp-tab.act       {background:rgba(0,201,167,0.12);color:${T};box-shadow:0 4px 20px rgba(0,201,167,0.12);}
        .stat-card:hover  {transform:translateY(-6px);border-color:rgba(0,201,167,0.3)!important;}
        input:hover,select:hover,textarea:hover{border-color:${T}!important;}
      `}</style>

      {/* ══ M1 — HERO ══════════════════════════════════════════════════════════════ */}
      <section className="hero-erp" style={{padding:`clamp(20px,5vw,64px) clamp(16px,4vw,${isMobile?"20px":"48px"}) clamp(28px,5vw,56px)`,background:`linear-gradient(135deg,${N0} 0%,#041628 45%,${N0} 100%)`,position:"relative",overflow:"hidden",display:"flex",alignItems:"flex-start"}}>
        <Particles/>
        {/* <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:1,backgroundImage:`linear-gradient(rgba(0,201,167,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.03) 1px,transparent 1px)`,backgroundSize:"60px 60px"}}/> */}
        <div style={{position:"absolute",width:650,height:650,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,201,167,.14) 0%,transparent 65%)",top:"40%",left:"-10%",transform:"translateY(-50%)",animation:"heroPulse 8s ease-in-out infinite",pointerEvents:"none",zIndex:1}}/>
        <div style={{position:"absolute",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 65%)",top:"10%",right:"5%",animation:"heroPulse 10s ease-in-out infinite .5s",pointerEvents:"none",zIndex:1}}/>
        <div style={{position:"absolute",width:520,height:520,borderRadius:"50%",border:"1px dashed rgba(0,201,167,.08)",top:"50%",left:"-12%",transform:"translateY(-50%)",animation:"heroSpin 55s linear infinite",pointerEvents:"none",zIndex:1}}/>
        {/* <div style={{position:"absolute",left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(0,201,167,.28),transparent)",animation:"heroScan 7s linear infinite",pointerEvents:"none",zIndex:2}}/> */}

        <div style={{display:"grid",gridTemplateColumns:isMobile||isTablet?"1fr":"1fr 420px",gap:isMobile?"24px":isTablet?"32px":"40px",maxWidth:1280,margin:"0 auto",width:"100%",position:"relative",zIndex:3,alignItems:"center",paddingTop:isMobile?"16px":isTablet?"24px":"32px"}}>

          {/* Left */}
          <div style={{animation:"heroFadeUp .7s ease both"}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.25)",borderRadius:100,padding:isMobile?"6px 14px":"7px 18px",marginBottom:isMobile?18:28,animation:"heroGlow 3s ease-in-out infinite"}}>
              <span style={{width:7,height:7,borderRadius:"50%",background:T,boxShadow:`0 0 10px ${T}`,animation:"heroBlink 1.4s ease-in-out infinite"}}/>
              <span style={{color:T,fontSize:isMobile?"10px":"11.5px",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase" as const}}>ERP Development — Canada, USA &amp; UK</span>
            </div>
            <h1 style={{fontSize:heroFS(),fontWeight:900,lineHeight:1.12,marginBottom:isMobile?14:22,letterSpacing:"-0.025em",color:"#fff"}}>
              Custom <GradText>ERP Development Services</GradText> for Growing Businesses in Canada, USA &amp; UK
            </h1>
            <p style={{color:"rgba(255,255,255,0.52)",fontSize:bodyFS(),lineHeight:1.85,marginBottom:isMobile?18:28,maxWidth:600}}>
              {isMobile
                ? "Running on spreadsheets? NNC Digital builds custom ERP systems that unify inventory, finance, HR, and operations into one powerful platform."
                : "Running your business on spreadsheets and disconnected tools is costing you more than you think. NNC Digital builds custom ERP systems that unify inventory, finance, HR, and operations into one powerful platform."}
            </p>
            <div style={{display:"flex",flexWrap:"wrap",gap:isMobile?6:8,marginBottom:isMobile?18:28}}>
              {[{i:"🔵",l:"Google Partner"},{i:"🏆",l:"ISO Certified"},{i:"🔒",l:"GDPR Compliant"},{i:"🍁",l:"PIPEDA Ready"},{i:"⭐",l:"Clutch Top Agency"}].map(b=>(
                <span key={b.l} style={{display:"inline-flex",alignItems:"center",gap:6,padding:isMobile?"5px 10px":"6px 13px",borderRadius:100,border:"1px solid rgba(255,255,255,0.12)",background:"rgba(255,255,255,0.04)",color:"rgba(255,255,255,0.65)",fontSize:isMobile?"10px":"12.5px",fontWeight:600}}>{b.i} {b.l}</span>
              ))}
            </div>
            <div style={{display:"flex",gap:20,flexWrap:"wrap"}}>
              {[{flag:"🇨🇦",label:"CA:",phone:"+1 647-XXX-XXXX"},{flag:"🇬🇧",label:"UK:",phone:"+44 20-XXXX-XXXX"}].map(p=>(
                <a key={p.phone} href={`tel:${p.phone.replace(/\s|-/g,"")}`} className="h-teal" style={{display:"flex",alignItems:"center",gap:7,color:"rgba(255,255,255,0.5)",fontSize:isMobile?"12px":"13.5px",fontWeight:600,textDecoration:"none",transition:"color .2s"}}>
                  <span>{p.flag}</span><span style={{color:"rgba(255,255,255,0.3)"}}>{p.label}</span><span style={{color:T}}>{p.phone}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Hero Form */}
          <div style={{background:"rgba(8,20,40,0.85)",border:"1px solid rgba(0,201,167,0.22)",borderRadius:20,padding:isMobile?"22px 16px":"32px 28px",backdropFilter:"blur(16px)",boxShadow:"0 32px 80px rgba(0,0,0,0.5),0 0 40px rgba(0,201,167,0.06)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,transparent,${T},transparent)`}}/>
            {submitted?(
              <div style={{textAlign:"center",padding:"36px 0"}}>
                <div style={{fontSize:48,marginBottom:14}}>✅</div>
                <h3 style={{color:"#fff",fontSize:19,fontWeight:800,marginBottom:10}}>Request Received!</h3>
                <p style={{color:"rgba(255,255,255,0.5)",fontSize:14,lineHeight:1.7,marginBottom:22}}>We'll contact you within 24 hours with a free consultation.</p>
                <button onClick={()=>{setSubmitted(false);setForm({firstName:"",lastName:"",phone:"",dialCode:"+1",email:"",service:"",message:""});}} style={btnT}>Send Another →</button>
              </div>
            ):(
              <>
                <div style={{marginBottom:18}}>
                  <p style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:4}}>Free Consultation</p>
                  <h2 style={{color:"#fff",fontSize:isMobile?"16px":"18px",fontWeight:800,margin:0,lineHeight:1.3}}>Get a Free ERP Strategy Call</h2>
                </div>
                <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:11}}>
                  <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:10}}>
                    <div><label style={{display:"block",fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>First Name *</label><input className="fi" required style={iS} placeholder="Jane" value={form.firstName} onChange={e=>setF("firstName",e.target.value)}/></div>
                    <div><label style={{display:"block",fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Last Name</label><input className="fi" style={iS} placeholder="Smith" value={form.lastName} onChange={e=>setF("lastName",e.target.value)}/></div>
                  </div>
                  <div>
                    <label style={{display:"block",fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Phone</label>
                    <div style={{display:"flex",gap:8}}>
                      <select className="fi" style={{...iS,width:82,flexShrink:0,padding:"10px 6px",cursor:"pointer"}} value={form.dialCode} onChange={e=>setF("dialCode",e.target.value)}>
                        {DIAL_CODES.map((d,i)=><option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                      </select>
                      <input className="fi" style={iS} type="tel" placeholder="647 XXX XXXX" value={form.phone} onChange={e=>setF("phone",e.target.value)}/>
                    </div>
                  </div>
                  <div><label style={{display:"block",fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Business Email *</label><input className="fi" required type="email" style={iS} placeholder="jane@company.com" value={form.email} onChange={e=>setF("email",e.target.value)}/></div>
                  <div>
                    <label style={{display:"block",fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Service</label>
                    <select className="fi" style={{...iS,cursor:"pointer"}} value={form.service} onChange={e=>setF("service",e.target.value)}>
                      <option value="">Select service...</option>
                      {SERVICES_LIST.map(s=><option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div><label style={{display:"block",fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Message</label><textarea className="fi" style={{...iS,minHeight:68,resize:"vertical" as const}} placeholder="Tell us about your ERP project..." value={form.message} onChange={e=>setF("message",e.target.value)}/></div>
                  <button className="btn-t" type="submit" disabled={loading} style={{...btnT,width:"100%",marginTop:4,opacity:loading?.6:1,cursor:loading?"wait":"pointer"}}>
                    {loading?"Sending...":"📅 Get Free ERP Consultation →"}
                  </button>
                  <p style={{color:"rgba(255,255,255,0.28)",fontSize:11,textAlign:"center",margin:0}}>🔒 Secure &amp; confidential. No spam, ever.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ══ M2 — CLIENT LOGOS ══════════════════════════════════════════════════════ */}
      <section style={{padding:isMobile?"20px 0":"40px 0",background:N0,overflow:"hidden",borderTop:"1px solid rgba(0,201,167,.1)",borderBottom:"1px solid rgba(0,201,167,.1)"}}>
        <div style={{textAlign:"center",marginBottom:isMobile?22:32,padding:"0 24px"}}>
          <p style={{fontWeight:600,fontSize:11.5,color:"rgba(255,255,255,.28)",letterSpacing:"0.14em",textTransform:"uppercase" as const,marginBottom:10}}>Our Happy Clients</p>
          <h2 style={{fontSize:isMobile?"20px":isTablet?"26px":"32px",fontWeight:800,color:"#fff",letterSpacing:"-0.02em",lineHeight:1.25,margin:0}}>
            Trusted by Businesses Across <GradText>North America &amp; the UK</GradText>
          </h2>
        </div>
        <div style={{overflow:"hidden"}}>
          <div className="cl-track">
            {[...LOGOS,...LOGOS].map((f,i)=>(
              <div key={i} style={{flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",height:isMobile?56:64,padding:"8px 14px",background:"#fff",borderRadius:10,margin:"0 8px",boxShadow:"0 6px 20px rgba(0,0,0,0.15)",opacity:.9,transition:"transform .3s,box-shadow .3s"}}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="scale(1.08)";el.style.boxShadow="0 10px 28px rgba(0,0,0,0.25)";}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="";el.style.boxShadow="0 6px 20px rgba(0,0,0,0.15)";}}>
                <img src={`/${f}`} alt={`Client ${i+1}`} style={{height:isMobile?30:36,width:"auto",maxWidth:110,objectFit:"contain"}}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ M3 — STATS ════════════════════════════════════════════════════════════ */}
      <section style={{padding:sp(),background:N1,borderTop:"1px solid rgba(0,201,167,.12)",borderBottom:"1px solid rgba(0,201,167,.12)",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(0,201,167,.3),transparent)",animation:"heroScan 4s linear infinite",pointerEvents:"none"}}/>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"repeat(2,1fr)":isTablet?"repeat(2,1fr)":"repeat(4,1fr)",gap:isMobile?14:20,maxWidth:1280,margin:"0 auto"}}>
          {STATS.map((s,i)=>(
            <div key={i} className="stat-card" style={{textAlign:"center",padding:isMobile?"18px 12px":"24px 16px",borderRadius:18,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",transition:"transform .3s,border-color .3s"}}>
              <div style={{fontSize:isMobile?"28px":"36px",marginBottom:10}}>{s.icon}</div>
              <div style={{fontSize:isMobile?"28px":"36px",fontWeight:900,background:`linear-gradient(135deg,#fff 30%,${T})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:4}}><Counter to={s.val} sfx={s.sfx}/></div>
              <div style={{fontSize:isMobile?"13px":"15px",fontWeight:700,color:"#fff",marginBottom:4}}>{s.label}</div>
              <div style={{fontSize:isMobile?"11px":"12.5px",color:"rgba(255,255,255,.38)",fontWeight:500}}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ M4 — SUCCESS STORIES ═══════════════════════════════════════════════════ */}
      <section style={{padding:sp(),background:`linear-gradient(180deg,${N2} 0%,${N1} 100%)`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"linear-gradient(rgba(0,201,167,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.02) 1px,transparent 1px)",backgroundSize:"56px 56px"}}/>
        <div style={{maxWidth:1200,margin:"0 auto",position:"relative",zIndex:2}}>
          <div style={{textAlign:"center",marginBottom:isMobile?22:36}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.22)",borderRadius:100,padding:"6px 18px",marginBottom:12}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:T,boxShadow:`0 0 8px ${T}`}}/><span style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>Proven Results</span>
            </div>
            <h2 style={{fontSize:h2FS(),fontWeight:900,color:"#fff",marginBottom:10,letterSpacing:"-0.02em"}}>ERP Success <GradText>Stories</GradText></h2>
            <p style={{color:"rgba(255,255,255,0.45)",fontSize:bodyFS(),lineHeight:1.7,maxWidth:500,margin:"0 auto"}}>Real results for businesses in Canada, USA &amp; UK.</p>
          </div>
          <div style={{display:"flex",gap:10,justifyContent:"center",marginBottom:isMobile?20:32,flexWrap:"wrap"}}>
            {CASES.map((c,i)=>(
              <button key={i} className={`ss-tab${story===i?" act":""}`} onClick={()=>setStory(i)} style={{display:"inline-flex",alignItems:"center",gap:8,padding:isMobile?"8px 12px":"10px 20px",borderRadius:100,border:"1px solid rgba(255,255,255,0.12)",background:"rgba(255,255,255,0.04)",color:"rgba(255,255,255,0.6)",fontSize:isMobile?"12px":"13px",fontWeight:600,fontFamily:"'Poppins',sans-serif",cursor:"pointer",transition:"all .22s"}}><span>{c.icon}</span>{c.industry}</button>
            ))}
          </div>
          <div key={story} style={{background:"rgba(255,255,255,.02)",border:`1px solid ${CASES[story].tagBd}`,borderRadius:24,overflow:"hidden",animation:"sbFadeUp .45s ease both"}}>
            <div style={{height:3,background:`linear-gradient(90deg,transparent,${CASES[story].tagClr},transparent)`}}/>
            <div style={{padding:isMobile?"20px 16px":"clamp(20px,3vw,36px)"}}>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16,flexWrap:"wrap"}}>
                <div style={{width:48,height:48,borderRadius:14,fontSize:24,display:"flex",alignItems:"center",justifyContent:"center",background:CASES[story].tagBg,border:`1px solid ${CASES[story].tagBd}`}}>{CASES[story].icon}</div>
                <span style={{padding:"4px 14px",borderRadius:100,fontSize:12,fontWeight:700,background:CASES[story].tagBg,border:`1px solid ${CASES[story].tagBd}`,color:CASES[story].tagClr,textTransform:"uppercase" as const,letterSpacing:"0.08em"}}>{CASES[story].tag}</span>
              </div>
              <h3 style={{color:"#fff",fontSize:isMobile?"16px":"22px",fontWeight:800,marginBottom:isMobile?14:22,lineHeight:1.3}}>{CASES[story].title}</h3>
              <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:isMobile?12:18,marginBottom:isMobile?16:24}}>
                {[{label:"Challenge",text:CASES[story].challenge,icon:"⚠️"},{label:"Solution",text:CASES[story].solution,icon:"💡"}].map(col=>(
                  <div key={col.label} style={{padding:isMobile?"14px":"18px",borderRadius:14,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.07)"}}>
                    <p style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:8}}>{col.icon} {col.label}</p>
                    <p style={{color:"rgba(255,255,255,.6)",fontSize:isMobile?"13px":"14px",lineHeight:1.7,margin:0}}>{col.text}</p>
                  </div>
                ))}
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>
                {CASES[story].metrics.map((m,i)=>(
                  <div key={i} style={{textAlign:"center",padding:isMobile?"12px 8px":"16px 12px",borderRadius:14,border:"1px solid rgba(255,255,255,0.07)",background:"rgba(255,255,255,0.03)",transition:"transform .25s,background .25s",cursor:"default"}}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-4px)";(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.06)";}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.03)";}}>
                    <div style={{fontSize:isMobile?"16px":"20px",marginBottom:6}}>{m.i}</div>
                    <div style={{fontSize:isMobile?"18px":"26px",fontWeight:900,marginBottom:4,color:CASES[story].tagClr}}>{m.v}</div>
                    <div style={{color:"rgba(255,255,255,0.45)",fontSize:isMobile?"10px":"12px",fontWeight:500}}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{display:"flex",justifyContent:"center",gap:8,marginTop:22}}>
            {CASES.map((_,i)=>(
              <button key={i} onClick={()=>setStory(i)} style={{width:story===i?24:8,height:8,borderRadius:100,background:story===i?T:"rgba(255,255,255,0.2)",border:"none",cursor:"pointer",transition:"all .3s ease"}}/>
            ))}
          </div>
          <div style={{display:"flex",justifyContent:"center",marginTop:isMobile?24:36}}>
            <a href="/case-studies" className="btn-t" style={btnT}>View All Case Studies →</a>
          </div>
        </div>
      </section>

      {/* ══ M5 — SERVICES ═════════════════════════════════════════════════════════ */}
      <section style={{padding:sp(),background:`linear-gradient(180deg,${N1} 0%,${N2} 60%,${N1} 100%)`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"linear-gradient(rgba(0,201,167,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.02) 1px,transparent 1px)",backgroundSize:"56px 56px"}}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
          <div style={{textAlign:"center",marginBottom:isMobile?22:36}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.22)",borderRadius:100,padding:"6px 18px",marginBottom:12}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:T,boxShadow:`0 0 8px ${T}`}}/><span style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>What We Build</span>
            </div>
            <h2 style={{fontSize:h2FS(),fontWeight:900,color:"#fff",marginBottom:10,letterSpacing:"-0.02em"}}>ERP Services <GradText>We Offer</GradText></h2>
            <p style={{color:"rgba(255,255,255,0.5)",fontSize:bodyFS(),lineHeight:1.75,maxWidth:580,margin:"0 auto"}}>A comprehensive lineup of ERP and digital solutions for clients across Canada, USA &amp; UK.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:g3(),gap:isMobile?14:18}}>
            {SERVICES.map((s,i)=>(
              <a key={s.title} href={`/services/erp/${s.slug}`} className="svc-card" style={{display:"flex",flexDirection:"column",gap:12,padding:cardP(),borderRadius:18,border:"1px solid rgba(255,255,255,0.07)",background:"rgba(255,255,255,0.02)",transition:"transform .3s,border-color .3s,background .3s",textDecoration:"none",cursor:"pointer"}}>
                <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12}}>
                  <div style={{width:48,height:48,borderRadius:14,background:"rgba(0,201,167,0.1)",border:"1px solid rgba(0,201,167,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{s.icon}</div>
                  <span style={{padding:"3px 10px",borderRadius:100,fontSize:10.5,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase" as const,color:T,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.18)"}}>{s.tag}</span>
                </div>
                <h3 style={{fontSize:isMobile?"14px":"16px",fontWeight:700,color:"#fff",lineHeight:1.3,margin:0}}>{s.title}</h3>
                <p style={{fontSize:isMobile?"13px":"14px",color:"rgba(255,255,255,0.5)",lineHeight:1.7,margin:0,flex:1}}>{s.desc}</p>
                <span style={{display:"inline-flex",alignItems:"center",gap:6,color:T,fontSize:13,fontWeight:600,marginTop:"auto"}}>Learn More →</span>
              </a>
            ))}
          </div>
          <div style={{display:"flex",justifyContent:"center",marginTop:isMobile?28:40}}>
            <a href="/services/erp" className="btn-t" style={btnT}>View All ERP Services →</a>
          </div>
        </div>
      </section>

      {/* ══ M6 — ACCORDION (ERP CAPABILITIES) ════════════════════════════════════ */}
      <section style={{padding:sp(),background:`linear-gradient(180deg,${N1} 0%,${N2} 100%)`,position:"relative",overflow:"hidden"}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:isMobile?22:36}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.22)",borderRadius:100,padding:"6px 18px",marginBottom:12}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:T,boxShadow:`0 0 8px ${T}`}}/><span style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>ERP Capabilities</span>
            </div>
            <h2 style={{fontSize:h2FS(),fontWeight:900,color:"#fff",marginBottom:10,letterSpacing:"-0.02em"}}>A Great ERP Always <GradText>Enables You to Do More</GradText></h2>
            <p style={{color:"rgba(255,255,255,0.45)",fontSize:bodyFS(),lineHeight:1.75,maxWidth:580,margin:"0 auto"}}>Explore the key capabilities that make our ERP solutions stand out for businesses in Canada, USA &amp; UK.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:g2(),gap:isMobile?10:20}}>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {ACCORDION_L.map((item,i)=><AccItem key={item.title} item={item} open={accL===i} toggle={()=>setAccL(accL===i?null:i)}/>)}
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {ACCORDION_R.map((item,i)=><AccItem key={item.title} item={item} open={accR===i} toggle={()=>setAccR(accR===i?null:i)}/>)}
            </div>
          </div>
        </div>
      </section>

      {/* ══ M7 — BENEFITS ═════════════════════════════════════════════════════════ */}
      <section style={{padding:sp(),background:`linear-gradient(180deg,${N2} 0%,${N1} 100%)`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"linear-gradient(rgba(0,201,167,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.02) 1px,transparent 1px)",backgroundSize:"56px 56px"}}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
          <div style={{textAlign:"center",marginBottom:isMobile?22:36}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.22)",borderRadius:100,padding:"6px 18px",marginBottom:12}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:T,boxShadow:`0 0 8px ${T}`}}/><span style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>Why It Matters</span>
            </div>
            <h2 style={{fontSize:h2FS(),fontWeight:900,color:"#fff",marginBottom:10,letterSpacing:"-0.02em"}}>Key Benefits of <GradText>ERP Development</GradText></h2>
            <p style={{color:"rgba(255,255,255,0.45)",fontSize:bodyFS(),lineHeight:1.75,maxWidth:520,margin:"0 auto"}}>Here's what you gain when your operations run on a modern, custom-built ERP.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:g4(),gap:isMobile?14:18}}>
            {BENEFITS.map((b,i)=>(
              <div key={i} className="kb-card" style={{display:"flex",flexDirection:isMobile?"column":"row",gap:isMobile?12:18,padding:cardP(),borderRadius:18,border:"1px solid rgba(255,255,255,0.06)",background:"rgba(255,255,255,0.02)",transition:"transform .3s,border-color .3s",animationDelay:`${i*.12}s`}}>
                <div style={{fontSize:isMobile?"36px":"52px",fontWeight:900,lineHeight:1,color:T,opacity:.3,flexShrink:0,width:isMobile?"auto":"60px",textAlign:"center"}}>{b.num}</div>
                <div style={{flex:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}><span style={{fontSize:20}}>{b.icon}</span><h3 style={{color:"#fff",fontSize:isMobile?"16px":"18px",fontWeight:800,margin:0}}>{b.title}</h3></div>
                  <p style={{color:"rgba(255,255,255,.52)",fontSize:isMobile?"13px":"14px",lineHeight:1.75,margin:"0 0 12px"}}>{b.desc}</p>
                  <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                    {b.tags.map(tag=><span key={tag} style={{padding:"3px 10px",borderRadius:100,fontSize:10.5,fontWeight:600,letterSpacing:".06em",textTransform:"uppercase" as const,color:T,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.18)"}}>{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{display:"flex",justifyContent:"center",marginTop:isMobile?24:40}}>
            <a href="/contact" className="btn-t" style={btnT}>Start Your ERP Journey →</a>
          </div>
        </div>
      </section>

      {/* ══ M8 — TOOLS ════════════════════════════════════════════════════════════ */}
      <section style={{padding:sp(),background:N1,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:600,height:400,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
          <div style={{textAlign:"center",marginBottom:isMobile?22:36}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.22)",borderRadius:100,padding:"6px 18px",marginBottom:12}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:T,boxShadow:`0 0 8px ${T}`}}/><span style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>Our Tech Stack</span>
            </div>
            <h2 style={{fontSize:h2FS(),fontWeight:900,color:"#fff",marginBottom:10,letterSpacing:"-0.02em"}}>Leading ERP Platform Tools <GradText>That We Use</GradText></h2>
            <p style={{color:"rgba(255,255,255,0.45)",fontSize:bodyFS(),lineHeight:1.75,maxWidth:560,margin:"0 auto"}}>A closer look at the platforms we leverage for the best possible business outcomes.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:isMobile?"repeat(2,1fr)":isTablet?"repeat(4,1fr)":"repeat(4,1fr)",gap:isMobile?12:16}}>
            {TOOLS.map((tool,i)=>(
              <div key={i} className="pt-card" style={{display:"flex",flexDirection:"column",padding:isMobile?"16px 12px":"22px 18px",borderRadius:16,textAlign:"center",alignItems:"center",transition:"transform .3s,box-shadow .3s",background:tool.clr,border:`1px solid ${tool.bd}`}}>
                <div style={{width:isMobile?48:56,height:isMobile?48:56,borderRadius:15,display:"flex",alignItems:"center",justifyContent:"center",fontSize:isMobile?22:26,marginBottom:12,background:"rgba(255,255,255,0.05)",border:`1px solid ${tool.bd}`}}>{tool.icon}</div>
                <h3 style={{color:"#fff",fontSize:isMobile?"13px":"15px",fontWeight:700,marginBottom:6,lineHeight:1.3}}>{tool.name}</h3>
                <p style={{color:"rgba(255,255,255,0.5)",fontSize:isMobile?"11px":"13px",lineHeight:1.65,margin:0}}>{tool.desc}</p>
                {tool.bespoke&&<div style={{marginTop:10,padding:"4px 12px",borderRadius:100,background:"rgba(0,201,167,0.12)",border:"1px solid rgba(0,201,167,0.3)",color:T,fontSize:11,fontWeight:700}}>⚡ Fully Bespoke</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ M9 — HIRE ERP DEVELOPERS ══════════════════════════════════════════════ */}
      <section style={{padding:sp(),background:`linear-gradient(180deg,${N1} 0%,${N2} 100%)`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"10%",left:"5%",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
          <div style={{textAlign:"center",marginBottom:isMobile?22:36}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.22)",borderRadius:100,padding:"6px 18px",marginBottom:12}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:T,boxShadow:`0 0 8px ${T}`}}/><span style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>Hire Developers</span>
            </div>
            <h2 style={{fontSize:h2FS(),fontWeight:900,color:"#fff",marginBottom:10,letterSpacing:"-0.02em"}}>Hire ERP Developers <GradText>Tailored to Your Needs</GradText></h2>
            <p style={{color:"rgba(255,255,255,0.45)",fontSize:bodyFS(),lineHeight:1.75,maxWidth:560,margin:"0 auto"}}>Whether you're an enterprise, agency, or start-up — we have the right ERP developer for your exact challenge.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:g2(),gap:isMobile?0:20,marginBottom:14}}>
            <p style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const,margin:0}}>By Business Type</p>
            {!isMobile&&<p style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const,margin:0}}>By ERP Type</p>}
          </div>
          <div style={{display:"grid",gridTemplateColumns:g2(),gap:isMobile?10:20}}>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {HIRE_L.map((item,i)=><AccItem key={item.title} item={item} open={hireL===i} toggle={()=>setHireL(hireL===i?null:i)}/>)}
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {isMobile&&<p style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const,margin:"10px 0 0"}}>By ERP Type</p>}
              {HIRE_R.map((item,i)=><AccItem key={item.title} item={item} open={hireR===i} toggle={()=>setHireR(hireR===i?null:i)}/>)}
            </div>
          </div>
          <div style={{display:"flex",flexDirection:isMobile?"column":"row",flexWrap:"wrap",gap:isMobile?10:14,marginTop:isMobile?28:40,justifyContent:"center",alignItems:isMobile?"stretch":"center"}}>
            <a href="/hire-erp-developer" className="btn-t" style={{...btnT,textAlign:"center" as const}}>📅 Hire an ERP Developer</a>
            <a href="/pricing" className="btn-o" style={{...btnO,textAlign:"center" as const}}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor=T;(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.07)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(0,201,167,0.35)";(e.currentTarget as HTMLElement).style.background="transparent";}}>View Pricing →</a>
          </div>
        </div>
      </section>

      {/* ══ M10 — AI ERP ══════════════════════════════════════════════════════════ */}
      <section style={{padding:sp(),background:`linear-gradient(180deg,${N2} 0%,${N1} 100%)`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width:700,height:400,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
          <div style={{marginBottom:isMobile?24:40,maxWidth:620}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.22)",borderRadius:100,padding:"6px 18px",marginBottom:12}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:T,boxShadow:`0 0 8px ${T}`}}/><span style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>AI-Powered</span>
            </div>
            <h2 style={{fontSize:h2FS(),fontWeight:900,color:"#fff",marginBottom:10,letterSpacing:"-0.02em"}}>Leverage <GradText>AI-Powered ERP</GradText> Solutions</h2>
            <p style={{color:"rgba(255,255,255,.5)",fontSize:bodyFS(),lineHeight:1.8}}>Our AI-backed ERP solutions automate decisions, predict failures, and accelerate business operations at scale.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":isTablet?"1fr":"1fr 1fr",gap:isMobile?16:28,alignItems:"start"}}>
            <div style={{display:"flex",flexDirection:"column",gap:14}}>
              {AI_FEATS.map((f,i)=>(
                <div key={i} style={{display:"flex",gap:16,alignItems:"flex-start",padding:cardP(),borderRadius:16,background:"rgba(0,201,167,0.05)",border:"1px solid rgba(0,201,167,0.15)"}}>
                  <div style={{width:isMobile?44:52,height:isMobile?44:52,borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",fontSize:isMobile?22:26,flexShrink:0,background:"rgba(0,201,167,0.1)",border:"1px solid rgba(0,201,167,0.2)"}}>{f.icon}</div>
                  <div>
                    <h3 style={{color:"#fff",fontSize:isMobile?"15px":"17px",fontWeight:700,marginBottom:6,lineHeight:1.3}}>{f.title}</h3>
                    <p style={{color:"rgba(255,255,255,.52)",fontSize:isMobile?"13px":"14px",lineHeight:1.75,margin:0}}>{f.desc}</p>
                  </div>
                </div>
              ))}
              <div style={{marginTop:6}}>
                <a href="/services/erp/ai-erp" className="btn-t" style={btnT}>🤖 Explore AI-ERP Solutions →</a>
              </div>
            </div>
            {/* AI Live Panel */}
            <div style={{position:"relative",borderRadius:24,overflow:"hidden",background:"linear-gradient(135deg,#0a1f38,#061425)",border:"1px solid rgba(0,201,167,.15)",minHeight:isMobile?320:420,display:"flex",flexDirection:"column",justifyContent:"space-between",padding:isMobile?"22px 18px":"32px 28px"}}>
              <div style={{position:"absolute",left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(0,201,167,.5),transparent)",animation:"aiScan 3s linear infinite"}}/>
              <div style={{position:"absolute",top:"5%",right:"5%",width:140,height:140,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,201,167,.12) 0%,transparent 70%)",animation:"aiPulse 4s ease-in-out infinite",pointerEvents:"none"}}/>
              <div style={{position:"relative",zIndex:2}}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:20}}>
                  <div style={{width:8,height:8,borderRadius:"50%",background:"#22c55e",boxShadow:"0 0 8px #22c55e"}}/>
                  <span style={{color:"rgba(255,255,255,.5)",fontSize:12,fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase" as const}}>AI Engine — Live</span>
                </div>
                {AI_ROWS.map((row,i)=>(
                  <div key={i} style={{marginBottom:14}}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
                      <span style={{color:"rgba(255,255,255,.6)",fontSize:12.5,fontWeight:500}}>{row.label}</span>
                      <span style={{color:row.color,fontSize:12.5,fontWeight:700}}>{row.val}</span>
                    </div>
                    <div style={{height:4,borderRadius:4,background:"rgba(255,255,255,.06)",overflow:"hidden"}}>
                      <div style={{height:"100%",borderRadius:4,background:`linear-gradient(90deg,${row.color},${row.color}88)`,width:row.val}}/>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,position:"relative",zIndex:2,marginTop:16}}>
                {[{label:"POs Automated",val:"4,210",icon:"📦"},{label:"Hours Saved/mo",val:"1,840",icon:"⏱️"},{label:"Accuracy",val:"97.2%",icon:"✅"}].map((m,i)=>(
                  <div key={i} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:12,padding:isMobile?"10px 8px":"14px 10px",textAlign:"center"}}>
                    <div style={{fontSize:isMobile?16:20,marginBottom:4}}>{m.icon}</div>
                    <div style={{color:"#fff",fontSize:isMobile?"14px":"16px",fontWeight:800,marginBottom:2}}>{m.val}</div>
                    <div style={{color:"rgba(255,255,255,.4)",fontSize:isMobile?"10px":"11px",fontWeight:500}}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ M11 — CTA BANNER ══════════════════════════════════════════════════════ */}
      <section style={{position:"relative",overflow:"hidden"}}>
        <div style={{background:"linear-gradient(135deg,#0055b3 0%,#0077cc 35%,#00a07a 65%,#00C9A7 100%)",backgroundSize:"300% 300%",animation:"ctaBgShift 8s ease infinite",padding:isMobile?"50px 20px":"clamp(52px,7vw,88px) 48px",textAlign:"center",position:"relative"}}>
          <div style={{position:"absolute",top:"-20%",left:"-5%",width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle,rgba(255,255,255,.1) 0%,transparent 65%)",pointerEvents:"none"}}/>
          <div style={{position:"absolute",bottom:"-20%",right:"-5%",width:260,height:260,borderRadius:"50%",background:"radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 65%)",pointerEvents:"none"}}/>
          <div style={{position:"relative",zIndex:2,maxWidth:760,margin:"0 auto"}}>
            <h2 style={{fontSize:isMobile?"24px":isTablet?"34px":"48px",fontWeight:900,color:"#fff",lineHeight:1.15,letterSpacing:"-0.02em",marginBottom:16}}>
              Ready to Unify Your Business on a<br/>Single, Powerful <span style={{textDecoration:"underline",textDecorationColor:"rgba(255,255,255,.4)"}}>ERP Platform?</span>
            </h2>
            <p style={{color:"rgba(255,255,255,.82)",fontSize:isMobile?"14px":"17px",lineHeight:1.75,marginBottom:isMobile?28:36}}>Connect with NNC Digital today and let's build your custom ERP together.</p>
            <div style={{display:"flex",flexDirection:isMobile?"column":"row",gap:isMobile?10:14,justifyContent:"center",alignItems:isMobile?"stretch":"center"}}>
              <a href="/contact" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:10,padding:isMobile?"14px":"16px 36px",borderRadius:12,background:"#fff",color:"#0055b3",fontWeight:800,fontSize:isMobile?"14px":"16px",fontFamily:"'Poppins',sans-serif",textDecoration:"none",cursor:"pointer",transition:"transform .2s,box-shadow .2s"}}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-3px)";(e.currentTarget as HTMLElement).style.boxShadow="0 16px 40px rgba(0,0,0,0.25)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.boxShadow="";}}>✦ Connect Now</a>
              <a href="/book-consultation" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:10,padding:isMobile?"14px":"16px 32px",borderRadius:12,background:"transparent",color:"#fff",fontWeight:700,fontSize:isMobile?"14px":"16px",fontFamily:"'Poppins',sans-serif",border:"2px solid rgba(255,255,255,0.5)",textDecoration:"none",cursor:"pointer",transition:"border-color .2s,background .2s"}}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="#fff";(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.1)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.5)";(e.currentTarget as HTMLElement).style.background="transparent";}}>📅 Book a Free Call →</a>
            </div>
            <p style={{color:"rgba(255,255,255,.5)",fontSize:13,marginTop:22}}>🇨🇦 Canada &nbsp;·&nbsp; 🇺🇸 USA &nbsp;·&nbsp; 🇬🇧 UK &nbsp;·&nbsp; 🇮🇳 India &nbsp;&nbsp;|&nbsp;&nbsp; hello@nncdigital.com</p>
          </div>
        </div>
      </section>

      {/* ══ M12 — WHY CHOOSE US (no video) ════════════════════════════════════════ */}
      <section style={{padding:sp(),background:`linear-gradient(180deg,${N1} 0%,${N2} 100%)`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"20%",right:"-5%",width:360,height:360,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
        <div style={{maxWidth:1100,margin:"0 auto",position:"relative",zIndex:2}}>
          <div style={{textAlign:"center",marginBottom:isMobile?22:36}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.22)",borderRadius:100,padding:"6px 18px",marginBottom:12}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:T,boxShadow:`0 0 8px ${T}`}}/><span style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>Our Story</span>
            </div>
            <h2 style={{fontSize:h2FS(),fontWeight:900,color:"#fff",marginBottom:10,letterSpacing:"-0.02em"}}>Why Choose Us as Your <GradText>ERP Development</GradText> Partner?</h2>
            <p style={{color:"rgba(255,255,255,0.55)",fontSize:bodyFS(),lineHeight:1.8,maxWidth:700,margin:"0 auto 6px"}}>Backed by <span style={{color:"#fff",fontWeight:600}}>Nakshatra Namaha Creations Pvt. Ltd.</span> — one of Bangalore&apos;s most respected digital studios with <span style={{color:T,fontWeight:600}}>8+ years</span> and <span style={{color:T,fontWeight:600}}>565+ projects delivered</span>.</p>
            <p style={{color:"rgba(255,255,255,0.55)",fontSize:bodyFS(),lineHeight:1.8,maxWidth:700,margin:"0 auto"}}>We launched NNC Digital as our international arm — bringing proven technical expertise to the Canadian, US, and UK markets with transparent pricing and long-term partnership.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(2,1fr)",gap:10,marginBottom:isMobile?24:32}}>
            {WCU_POINTS.map((p,i)=>(
              <div key={i} className="wcu-point" style={{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",borderRadius:12,border:"1px solid rgba(255,255,255,0.06)",background:"rgba(255,255,255,0.02)",transition:"border-color .2s,background .2s,transform .2s",cursor:"default"}}>
                <span style={{fontSize:18,flexShrink:0}}>{p.icon}</span>
                <span style={{color:"rgba(255,255,255,0.72)",fontSize:isMobile?"13px":"14px",fontWeight:500}}>{p.text}</span>
              </div>
            ))}
          </div>
          <div style={{display:"grid",gridTemplateColumns:isMobile?"repeat(2,1fr)":"repeat(4,1fr)",gap:isMobile?12:16,marginBottom:isMobile?24:32}}>
            {WCU_STATS.map(st=>(
              <div key={st.l} className="wcu-stat" style={{textAlign:"center",padding:isMobile?"14px 10px":"20px 14px",borderRadius:14,border:"1px solid rgba(0,201,167,0.15)",background:"rgba(0,201,167,0.05)",transition:"transform .25s,background .25s",cursor:"default"}}>
                <div style={{fontSize:isMobile?"20px":"26px",fontWeight:900,marginBottom:4,background:`linear-gradient(135deg,#fff 30%,${T})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}><Counter to={st.n} sfx={st.s}/></div>
                <div style={{color:"rgba(255,255,255,0.4)",fontSize:11,fontWeight:500}}>{st.l}</div>
              </div>
            ))}
          </div>
          <div style={{display:"flex",flexDirection:isMobile?"column":"row",gap:isMobile?10:14,justifyContent:"center",alignItems:isMobile?"stretch":"center"}}>
            <a href="/book-consultation" className="btn-t" style={{...btnT,textAlign:"center" as const}}>📅 Book a Strategy Call</a>
            <a href="/case-studies" className="btn-o" style={{...btnO,textAlign:"center" as const}}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor=T;(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.07)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(0,201,167,0.35)";(e.currentTarget as HTMLElement).style.background="transparent";}}>Our Work →</a>
          </div>
        </div>
      </section>

      {/* ══ M13 — GLOBAL PRESENCE ═════════════════════════════════════════════════ */}
      <section style={{padding:sp(),background:`linear-gradient(180deg,${N0} 0%,${N1} 100%)`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",width:600,height:300,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
        <div style={{maxWidth:1180,margin:"0 auto",position:"relative",zIndex:2}}>
          <div style={{textAlign:"center",marginBottom:isMobile?22:36}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.22)",borderRadius:100,padding:"6px 18px",marginBottom:12}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:T,boxShadow:`0 0 8px ${T}`}}/><span style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>Our Reach</span>
            </div>
            <h2 style={{fontSize:h2FS(),fontWeight:900,color:"#fff",marginBottom:10,letterSpacing:"-0.02em"}}>Global <GradText>Presence</GradText></h2>
            <p style={{color:"rgba(255,255,255,0.45)",fontSize:bodyFS(),lineHeight:1.75,maxWidth:500,margin:"0 auto"}}>Client-facing offices in North America &amp; the UK. Engineering headquarters in Bangalore, India.</p>
          </div>
          <div style={{display:"flex",gap:10,justifyContent:"center",marginBottom:isMobile?22:32,flexWrap:"wrap"}}>
            {[{key:"int",label:"🌍 North America & UK"},{key:"india",label:"🇮🇳 India (Engineering HQ)"}].map(t=>(
              <button key={t.key} className={`gp-tab${gTab===t.key?" act":""}`} onClick={()=>setGTab(t.key as "int"|"india")} style={{padding:isMobile?"9px 14px":"11px 24px",borderRadius:10,border:`1px solid ${gTab===t.key?"rgba(0,201,167,0.5)":"rgba(255,255,255,0.1)"}`,background:gTab===t.key?"rgba(0,201,167,0.12)":"rgba(255,255,255,0.03)",color:gTab===t.key?T:"rgba(255,255,255,0.55)",fontSize:isMobile?"13px":"14px",fontWeight:700,fontFamily:"'Poppins',sans-serif",cursor:"pointer",transition:"all .22s"}}>{t.label}</button>
            ))}
          </div>
          {gTab==="int"&&(
            <div>
              <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":isTablet?"repeat(2,1fr)":"repeat(3,1fr)",gap:isMobile?14:20,marginBottom:20}}>
                {INT_OFFICES.map((o,i)=>(
                  <div key={i} className="gp-card" style={{padding:isMobile?"20px 16px":"28px 24px",borderRadius:18,background:"rgba(0,201,167,0.05)",border:"1px solid rgba(0,201,167,0.18)",transition:"transform .25s,box-shadow .25s,border-color .25s",cursor:"default"}}>
                    <div style={{fontSize:32,marginBottom:12}}>{o.flag}</div>
                    <h3 style={{color:"#fff",fontSize:isMobile?"15px":"18px",fontWeight:800,marginBottom:4}}>{o.city}</h3>
                    <p style={{color:T,fontSize:12,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase" as const,marginBottom:14}}>{o.tz}</p>
                    <a href={`tel:${o.phone.replace(/\s|-/g,"")}`} className="h-teal" style={{display:"flex",alignItems:"center",gap:8,color:"rgba(255,255,255,0.7)",fontSize:14,fontWeight:600,textDecoration:"none",marginBottom:8,transition:"color .2s"}}>📞 {o.phone}</a>
                    <a href={`mailto:${o.email}`} className="h-teal" style={{display:"flex",alignItems:"center",gap:8,color:"rgba(255,255,255,0.5)",fontSize:13,textDecoration:"none",transition:"color .2s"}}>✉️ {o.email}</a>
                  </div>
                ))}
              </div>
              <div style={{borderRadius:14,padding:isMobile?"16px 18px":"20px 28px",background:"rgba(0,201,167,0.05)",border:"1px solid rgba(0,201,167,0.15)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
                <div style={{display:"flex",alignItems:"center",gap:12}}><div style={{width:10,height:10,borderRadius:"50%",background:"#22c55e",boxShadow:"0 0 8px #22c55e"}}/><span style={{color:"rgba(255,255,255,0.6)",fontSize:isMobile?"13px":"14px",fontWeight:500}}>Available Mon–Fri, 9am–6pm in your time zone</span></div>
                <a href="mailto:hello@nncdigital.com" className="h-teal" style={{color:T,fontSize:14,fontWeight:700,textDecoration:"none"}}>hello@nncdigital.com →</a>
              </div>
            </div>
          )}
          {gTab==="india"&&(
            <div>
              <div style={{borderRadius:20,padding:isMobile?"20px 16px":"36px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.08)",marginBottom:18}}>
                <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:22,flexWrap:"wrap"}}>
                  <span style={{fontSize:32}}>🇮🇳</span>
                  <div><h3 style={{color:"#fff",fontSize:isMobile?"15px":"18px",fontWeight:800,margin:0}}>Nakshatra Namaha Creations Pvt. Ltd.</h3><p style={{color:"rgba(255,255,255,0.4)",fontSize:13,margin:"4px 0 0"}}>Engineering &amp; Delivery HQ — Bangalore, India</p></div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(2,1fr)",gap:14}}>
                  {INDIA_OFFICES.map((o,i)=>(
                    <div key={i} className="gp-ind" style={{display:"flex",alignItems:"center",gap:14,padding:"16px 18px",borderRadius:12,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",transition:"background .2s",cursor:"default"}}>
                      <span style={{fontSize:22}}>🇮🇳</span>
                      <div><p style={{color:"#fff",fontSize:14,fontWeight:700,margin:0}}>{o.city}</p><p style={{color:"rgba(255,255,255,.38)",fontSize:12,margin:"2px 0 0"}}>{o.note}</p>{o.phone&&<p style={{color:T,fontSize:12.5,fontWeight:600,margin:"4px 0 0"}}>{o.phone}</p>}</div>
                    </div>
                  ))}
                </div>
                <div style={{marginTop:20,paddingTop:18,borderTop:"1px solid rgba(255,255,255,0.07)"}}><p style={{color:"rgba(255,255,255,0.35)",fontSize:13,margin:0}}>✉️ info@nakshatranamahacreations.com</p></div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:isMobile?"repeat(2,1fr)":"repeat(4,1fr)",gap:14}}>
                {[{n:"8+",l:"Years Active"},{n:"565+",l:"Projects"},{n:"100+",l:"Team Members"},{n:"4",l:"India Offices"}].map((s,i)=>(
                  <div key={i} style={{textAlign:"center",padding:isMobile?"16px 10px":"20px 12px",borderRadius:14,background:"rgba(0,201,167,0.06)",border:"1px solid rgba(0,201,167,0.15)",transition:"transform .25s,background .25s",cursor:"default"}}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-4px)";(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.12)";}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.06)";}}>
                    <p style={{fontSize:isMobile?"22px":"26px",fontWeight:900,color:T,margin:0}}>{s.n}</p>
                    <p style={{fontSize:11,color:"rgba(255,255,255,0.4)",margin:"4px 0 0",fontWeight:600,textTransform:"uppercase" as const,letterSpacing:"0.06em"}}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══ M14 — FAQS ════════════════════════════════════════════════════════════ */}
      <section style={{padding:sp(),background:`linear-gradient(180deg,${N1} 0%,${N2} 100%)`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"30%",right:"-5%",width:360,height:360,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
        <div style={{maxWidth:860,margin:"0 auto",position:"relative",zIndex:2}}>
          <div style={{textAlign:"center",marginBottom:isMobile?22:36}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.22)",borderRadius:100,padding:"6px 18px",marginBottom:12}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:T,boxShadow:`0 0 8px ${T}`}}/><span style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>FAQs</span>
            </div>
            <h2 style={{fontSize:h2FS(),fontWeight:900,color:"#fff",marginBottom:10,letterSpacing:"-0.02em"}}>Frequently Asked <GradText>Questions</GradText></h2>
            <p style={{color:"rgba(255,255,255,0.45)",fontSize:bodyFS(),lineHeight:1.75,maxWidth:520,margin:"0 auto"}}>Everything you need to know about custom ERP development for businesses in Canada, USA &amp; UK.</p>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {FAQS.map((f,i)=>(
              <div key={i} onClick={()=>setFaq(faq===i?null:i)} style={{border:`1px solid ${faq===i?"rgba(0,201,167,0.4)":"rgba(255,255,255,0.08)"}`,borderRadius:16,background:faq===i?"rgba(0,201,167,0.06)":"rgba(255,255,255,0.02)",overflow:"hidden",cursor:"pointer",transition:"all .25s ease"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:14,padding:isMobile?"14px 14px":"18px 22px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:12}}>
                    <span style={{color:T,fontSize:12,fontWeight:800,background:"rgba(0,201,167,0.1)",border:"1px solid rgba(0,201,167,0.2)",borderRadius:8,padding:"4px 10px",flexShrink:0}}>Q{i+1}</span>
                    <span style={{fontSize:isMobile?"13px":"15px",fontWeight:700,color:faq===i?"#fff":"rgba(255,255,255,0.78)",lineHeight:1.4}}>{f.q}</span>
                  </div>
                  <div style={{width:26,height:26,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:700,background:faq===i?T:"rgba(255,255,255,0.07)",border:`1px solid ${faq===i?T:"rgba(255,255,255,0.12)"}`,color:faq===i?"#000":"rgba(255,255,255,0.5)",transform:faq===i?"rotate(45deg)":"rotate(0deg)",transition:"all .25s ease"}}>+</div>
                </div>
                <div style={{maxHeight:faq===i?500:0,overflow:"hidden",transition:"max-height .38s ease"}}>
                  <p style={{padding:isMobile?"0 14px 16px 46px":"0 22px 20px 78px",color:"rgba(255,255,255,0.55)",fontSize:isMobile?"13px":"14.5px",lineHeight:1.8,margin:0}}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign:"center",marginTop:isMobile?28:40}}>
            <p style={{color:"rgba(255,255,255,0.4)",fontSize:14,marginBottom:16}}>Still have questions? We respond within 24 hours.</p>
            <a href="/contact" className="btn-t" style={btnT}>Ask Us Anything →</a>
          </div>
        </div>
      </section>

      {/* ══ M15 — CONTACT FORM ════════════════════════════════════════════════════ */}
      <section style={{padding:sp(),background:`linear-gradient(180deg,${N2} 0%,${N0} 100%)`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"20%",left:"50%",transform:"translateX(-50%)",width:700,height:400,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
        <div style={{maxWidth:1180,margin:"0 auto",position:"relative",zIndex:2}}>
          <div style={{textAlign:"center",marginBottom:isMobile?24:40}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.22)",borderRadius:100,padding:"6px 18px",marginBottom:12}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:T,boxShadow:`0 0 8px ${T}`}}/><span style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>Get In Touch</span>
            </div>
            <h2 style={{fontSize:h2FS(),fontWeight:900,color:"#fff",marginBottom:10,letterSpacing:"-0.02em"}}>Ready to Build <GradText>Your Custom ERP</GradText> Solution?</h2>
            <p style={{color:"rgba(255,255,255,0.45)",fontSize:bodyFS(),lineHeight:1.75,maxWidth:540,margin:"0 auto"}}>Tell us about your project. We respond within 24 hours with a free consultation and honest advice.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:isMobile||isTablet?"1fr":"1fr 1fr",gap:isMobile?24:40}}>
            {/* Left — Form */}
            <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:20,padding:isMobile?"20px 16px":"clamp(20px,3vw,36px)"}}>
              {cSubmitted?(
                <div style={{textAlign:"center",padding:"42px 0"}}>
                  <div style={{fontSize:52,marginBottom:18}}>✅</div>
                  <h3 style={{color:"#fff",fontSize:21,fontWeight:800,marginBottom:12}}>Message Sent!</h3>
                  <p style={{color:"rgba(255,255,255,0.5)",fontSize:15,lineHeight:1.7,marginBottom:24}}>Thank you — we'll respond within 24 hours with practical advice.</p>
                  <button onClick={()=>{setCSubmitted(false);setCForm({name:"",phone:"",dialCode:"+1",email:"",service:"",project:""});}} style={btnT}>Send Another →</button>
                </div>
              ):(
                <form onSubmit={handleCSubmit}>
                  <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:isMobile?10:14,marginBottom:14}}>
                    <div><label style={{display:"block",fontSize:12.5,fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:7,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Full Name *</label><input className="fi" required style={iSLg} placeholder="Jane Smith" value={cForm.name} onChange={e=>setCF("name",e.target.value)}/></div>
                    <div>
                      <label style={{display:"block",fontSize:12.5,fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:7,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Phone</label>
                      <div style={{display:"flex",gap:8}}>
                        <select className="fi" style={{...iSLg,width:88,flexShrink:0,padding:"11px 6px",cursor:"pointer"}} value={cForm.dialCode} onChange={e=>setCF("dialCode",e.target.value)}>
                          {DIAL_CODES.map((d,i)=><option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                        </select>
                        <input className="fi" style={iSLg} type="tel" placeholder="647 XXX XXXX" value={cForm.phone} onChange={e=>setCF("phone",e.target.value)}/>
                      </div>
                    </div>
                  </div>
                  <div style={{marginBottom:14}}><label style={{display:"block",fontSize:12.5,fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:7,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Business Email *</label><input className="fi" required type="email" style={iSLg} placeholder="jane@yourcompany.com" value={cForm.email} onChange={e=>setCF("email",e.target.value)}/></div>
                  <div style={{marginBottom:14}}>
                    <label style={{display:"block",fontSize:12.5,fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:7,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Service of Interest</label>
                    <select className="fi" style={{...iSLg,cursor:"pointer"}} value={cForm.service} onChange={e=>setCF("service",e.target.value)}>
                      <option value="">Select a service...</option>
                      {SERVICES_LIST.map(s=><option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div style={{marginBottom:22}}><label style={{display:"block",fontSize:12.5,fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:7,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Project Description</label><textarea className="fi" style={{...iSLg,minHeight:100,resize:"vertical" as const}} placeholder="Briefly describe your ERP project, goals, and timeline..." value={cForm.project} onChange={e=>setCF("project",e.target.value)}/></div>
                  <button className="btn-t" type="submit" disabled={cLoading} style={{...btnT,width:"100%",padding:"15px",opacity:cLoading?.6:1,cursor:cLoading?"wait":"pointer"}}>{cLoading?"Sending...":"Submit — Get Free ERP Consultation →"}</button>
                  <p style={{color:"rgba(255,255,255,0.3)",fontSize:11.5,textAlign:"center",marginTop:12}}>🔒 Your information is 100% secure and never shared.</p>
                </form>
              )}
            </div>

            {/* Right — Info */}
            <div style={{display:"flex",flexDirection:"column",gap:18}}>
              <div style={{background:"rgba(0,201,167,0.05)",border:"1px solid rgba(0,201,167,0.18)",borderRadius:18,padding:isMobile?"20px":"26px"}}>
                <h3 style={{color:"#fff",fontSize:16,fontWeight:800,marginBottom:16}}>What Happens After You Submit?</h3>
                {[{s:"1",text:"We review your project within a few hours — no bots."},{s:"2",text:"A senior ERP consultant calls you within 24 hours."},{s:"3",text:"We send a free scoping document with timeline & cost."},{s:"4",text:"You decide — no pressure, no obligation."}].map((step,i)=>(
                  <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start",marginBottom:i<3?12:0,padding:"11px 13px",borderRadius:10,background:"rgba(255,255,255,0.03)",transition:"background .2s",cursor:"default"}}
                    onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.07)"}
                    onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.03)"}>
                    <div style={{width:28,height:28,borderRadius:"50%",flexShrink:0,background:`linear-gradient(135deg,${T},${TD})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:900,color:"#000"}}>{step.s}</div>
                    <p style={{color:"rgba(255,255,255,0.65)",fontSize:14,lineHeight:1.65,margin:0}}>{step.text}</p>
                  </div>
                ))}
              </div>
              <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:18,padding:isMobile?"18px":"24px"}}>
                <h3 style={{color:"rgba(255,255,255,0.4)",fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const,marginBottom:16}}>Direct Contacts</h3>
                {[{flag:"🇨🇦",label:"Canada",phone:"+1 647-XXX-XXXX"},{flag:"🇺🇸",label:"USA",phone:"+1 631-XXX-XXXX"},{flag:"🇬🇧",label:"UK",phone:"+44 20-XXXX-XXXX"}].map((c,i)=>(
                  <div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"11px 0",borderBottom:i<2?"1px solid rgba(255,255,255,0.06)":"none"}}>
                    <span style={{color:"rgba(255,255,255,0.55)",fontSize:14,fontWeight:500}}>{c.flag} {c.label}</span>
                    <a href={`tel:${c.phone.replace(/\s|-/g,"")}`} className="h-teal" style={{color:T,fontSize:14,fontWeight:700,textDecoration:"none"}}>{c.phone}</a>
                  </div>
                ))}
                <div style={{marginTop:14,paddingTop:14,borderTop:"1px solid rgba(255,255,255,0.06)"}}>
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