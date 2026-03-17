

"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { getServiceSchema } from "../lib/schema";        // ✅ ADD THIS
import SchemaMarkup from "../components/SchemaMarkup";

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = "#00C9A7";
const TD = "#00a07a";
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";

// ─── Data ─────────────────────────────────────────────────────────────────────
const LOGOS = ["clients1.png","clients2.png","clients3.png","clients4.png","clients5.png",
  "clients6.png","clients7.png","clients8.png","clients9.png","clients10.png","clients11.png"];

const SUCCESS_STORIES = [
  {
    industry:"Manufacturing",icon:"🏭",result:"35% Efficiency Gain",
    title:"SEO & Lead Generation for a Canadian Manufacturer",
    description:"A multi-location industrial supplier was invisible online. We built a keyword strategy targeting procurement managers, optimised their site, and ran targeted Google Ads.",
    metrics:[{l:"Organic Traffic",v:"+320%",i:"📈"},{l:"Qualified Leads",v:"+210%",i:"✅"},{l:"ROI",v:"412%",i:"💰"}]
  },
  {
    industry:"Healthcare",icon:"🏥",result:"42% More Bookings",
    title:"Local SEO for a UK Healthcare Provider",
    description:"A private clinic group was losing patients to competitors. We optimised for 'near me' searches, managed Google Business Profiles, and ran local service ads.",
    metrics:[{l:"Bookings",v:"+42%",i:"📅"},{l:"Local Rank",v:"#1-3",i:"📍"},{l:"Website Clicks",v:"+158%",i:"🖱️"}]
  },
  {
    industry:"D2C Retail",icon:"🛍️",result:"2.4× Conversion Rate",
    title:"E-Commerce SEO & Ads for a US D2C Brand",
    description:"A D2C brand was struggling with CAC. We implemented a full-funnel strategy: SEO for organic, Meta for prospecting, and Google Shopping for high-intent traffic.",
    metrics:[{l:"Conversion Rate",v:"2.4×",i:"📈"},{l:"Revenue",v:"+89%",i:"💰"},{l:"CAC",v:"-43%",i:"📉"}]
  },
];

const SERVICES = [
  {icon:"🔍",title:"Search Engine Optimisation (SEO)",desc:"Data-driven SEO that improves rankings, drives qualified traffic, and builds sustainable growth.",tag:"SEO",slug:"seo"},
  {icon:"📍",title:"Local SEO (CA, US, UK)",desc:"Dominate local search results, Google Maps, and 'near me' queries to attract nearby customers.",tag:"Local",slug:"local-seo"},
  {icon:"🎯",title:"Google Ads",desc:"High-converting PPC campaigns across Search, Shopping, Display, and YouTube, managed by certified specialists.",tag:"PPC",slug:"google-ads"},
  {icon:"📘",title:"Meta (Facebook/Instagram) Ads",desc:"Creative-driven campaigns that build brand awareness and drive sales on the world's largest social platforms.",tag:"Social",slug:"meta-ads"},
  {icon:"💼",title:"LinkedIn Ads",desc:"Precision B2B targeting to reach decision-makers with lead-gen forms and sponsored content.",tag:"B2B",slug:"linkedin-ads"},
  {icon:"📝",title:"Content Marketing",desc:"Authority-building content that ranks: blogs, whitepapers, case studies, and pillar pages.",tag:"Content",slug:"content-marketing"},
  {icon:"🔧",title:"Technical SEO Audit",desc:"Comprehensive crawl analysis, Core Web Vitals, site structure, and indexation fixes.",tag:"Technical",slug:"technical-seo"},
  {icon:"📈",title:"Conversion Rate Optimisation",desc:"Turn more visitors into customers with A/B testing, UX improvements, and data-backed CRO.",tag:"CRO",slug:"cro"},
  {icon:"📊",title:"Analytics & Reporting",desc:"Custom dashboards, goal tracking, and transparent reporting — no vanity metrics.",tag:"Analytics",slug:"analytics-reporting"},
];

const BENEFITS = [
  {num:"01",icon:"🎯",title:"Qualified Traffic",desc:"We don't chase vanity metrics. Every campaign is designed to attract users actively searching for your products or services.",tags:["Intent-based","High Quality","Buyer Keywords"]},
  {num:"02",icon:"🔗",title:"CRM Attribution",desc:"Connect your marketing directly to revenue. We integrate with your CRM to track leads from first click to closed deal.",tags:["Salesforce","HubSpot","Closed-loop"]},
  {num:"03",icon:"📍",title:"Local Search Dominance",desc:"For multi-location businesses in Canada, the USA, and the UK, we dominate local packs and Google Maps with hyper-local strategies.",tags:["Google Maps","Local Packs","Reviews"]},
  {num:"04",icon:"📊",title:"No Vanity Metrics",desc:"We focus on what matters: organic traffic to money pages, conversion rates, cost per lead, and return on ad spend.",tags:["ROAS","CPL","Real KPIs"]},
];

const TOOLS = [
  {icon:"🔎",name:"Google Search Console",purpose:"Enterprise-grade SEO monitoring.",clr:"rgba(66,133,244,.08)",bd:"rgba(66,133,244,.22)"},
  {icon:"📊",name:"Ahrefs",purpose:"Best-in-class for backlink analysis.",clr:"rgba(255,74,74,.08)",bd:"rgba(255,74,74,.22)"},
  {icon:"🔍",name:"SEMrush",purpose:"Enterprise-grade keyword research.",clr:"rgba(255,122,0,.08)",bd:"rgba(255,122,0,.22)"},
  {icon:"🎯",name:"Google Ads",purpose:"Best-in-class for PPC management.",clr:"rgba(251,188,4,.08)",bd:"rgba(251,188,4,.22)"},
  {icon:"📘",name:"Meta Business Suite",purpose:"Enterprise-grade social ads.",clr:"rgba(36,103,177,.08)",bd:"rgba(36,103,177,.22)"},
  {icon:"💼",name:"LinkedIn Campaign Manager",purpose:"Best-in-class for B2B advertising.",clr:"rgba(10,102,194,.08)",bd:"rgba(10,102,194,.22)"},
  {icon:"📈",name:"Google Analytics 4",purpose:"Enterprise-grade analytics.",clr:"rgba(251,188,4,.08)",bd:"rgba(251,188,4,.22)"},
  {icon:"🔥",name:"Hotjar",purpose:"Best-in-class for UX & behaviour.",clr:"rgba(255,59,59,.08)",bd:"rgba(255,59,59,.22)"},
];

const HIRE_LEFT = [
  {icon:"🏢",title:"Enterprises",desc:"Enterprise-scale SEO and media buying with complex attribution, multi-location strategies, and board-level reporting."},
  {icon:"🚀",title:"Start-ups",desc:"Growth-focused marketing that scales with you — from building initial organic traction to scaling paid channels efficiently."},
  {icon:"🎯",title:"Agencies",desc:"White-label SEO and PPC services for agencies. Detailed reporting, client-ready dashboards, and seamless handoff."},
];
const HIRE_RIGHT = [
  {icon:"📊",title:"Analytical Marketing",desc:"Data-first strategies where every channel is measured, attributed, and optimised based on hard revenue data, not guesses."},
  {icon:"⚙️",title:"Performance Marketing",desc:"Relentless focus on ROAS, CPA, and conversion rate optimisation across paid search, social, and display."},
  {icon:"🤝",title:"Brand & Content Marketing",desc:"Build long-term authority and trust through high-quality content, PR-style link building, and audience engagement."},
];

const AI_FEATS = [
  {icon:"🧠",title:"AI Data Analysis",desc:"Uncover hidden opportunities in your search and ad data with AI-driven pattern recognition and competitive analysis."},
  {icon:"🔮",title:"Predictive Insights",desc:"Forecast keyword trends, ad performance, and seasonality with machine learning models to stay ahead of competitors."},
  {icon:"🤖",title:"Automation at Scale",desc:"Automate bid management, ad copy testing, and reporting workflows — freeing your team for strategy and creativity."},
  {icon:"📈",title:"Real-Time Dashboards",desc:"Live dashboards tracking every KPI that matters: rankings, traffic, conversions, and revenue — updated in real time."},
];

const WCU_POINTS = [
  {icon:"🏆",text:"8+ years of proven digital excellence"},
  {icon:"🌍",text:"Serving Canada, USA & UK markets"},
  {icon:"⚡",text:"565+ projects delivered globally"},
  {icon:"🤝",text:"Client-first culture, enterprise-grade quality"},
  {icon:"🔒",text:"GDPR, PIPEDA & CCPA compliant delivery"},
  {icon:"📊",text:"Full-funnel: SEO, PPC, Social, Content, CRO"},
];
const WCU_STATS = [{n:1500,s:"+",l:"Projects Delivered"},{n:1800,s:"+",l:"IT Talents"},{n:98,s:"%",l:"Retention Rate"},{n:25,s:"+",l:"Industries"}];

const FAQS = [
  {q:"How long does SEO take to show results in Canada or the UK?",a:"SEO is a long-term investment, but you'll typically see measurable progress within 3-6 months. Technical fixes and on-page optimisations show initial ranking improvements in 4-8 weeks. For competitive, high-volume keywords in markets like Toronto or London, significant traffic growth usually takes 6-12 months. We provide monthly progress reports so you can track every milestone."},
  {q:"Do you manage Google Ads in the USA and Canada?",a:"Yes. Our Google-certified specialists manage campaigns across North America and the UK. We handle everything: keyword research, ad copy, landing page optimisation, bid management, and conversion tracking. For Canadian clients, we manage both English and French campaigns. For US clients, we optimise for specific states, cities, or DMAs. All campaigns are built with a relentless focus on ROAS and CPA."},
  {q:"Can you audit our existing website's SEO?",a:"Absolutely. Our technical SEO audit covers: crawlability and indexation, Core Web Vitals and page speed, site structure and internal linking, on-page optimisation (meta data, headers, content), backlink profile analysis, and competitor benchmarking. You'll receive a detailed report with prioritised fixes and an estimated timeline for implementation. Turnaround is 5-10 business days."},
  {q:"What is your local SEO approach for Toronto or London?",a:"For multi-location businesses in cities like Toronto or London, our local SEO strategy includes: Google Business Profile optimisation for each location, local keyword research ('near me', 'in [city]'), localised content and landing pages, consistent NAP citations across directories, review generation and management, and local link building. We help you dominate the local pack and drive foot traffic."},
  {q:"How do you report on marketing performance?",a:"We build custom dashboards (usually in Google Looker Studio) that connect directly to your data sources: Google Analytics, Google Ads, Meta, LinkedIn, and your CRM. You get a single source of truth with real-time data on the metrics that matter to your business — no vanity metrics, no PDFs. Monthly strategy calls are included to review performance and plan next steps."},
  {q:"Do you offer content marketing and copywriting?",a:"Yes. Our in-house team includes SEO-focused copywriters and content strategists. We produce blog posts, pillar pages, whitepapers, case studies, and website copy that's optimised to rank and convert. For UK clients, we work with native British English writers. For Canadian clients, we adapt content for your specific regional audience."},
];

const INT_OFFICES = [
  {flag:"🇨🇦",city:"Toronto, Canada",phone:"+1 647-XXX-XXXX",email:"hello@nncdigital.com",tz:"EST / EDT"},
  {flag:"🇺🇸",city:"New York, USA",phone:"+1 631-XXX-XXXX",email:"hello@nncdigital.com",tz:"EST / EDT"},
  {flag:"🇬🇧",city:"London, UK",phone:"+44 20-XXXX-XXXX",email:"hello@nncdigital.com",tz:"GMT / BST"},
];
const INDIA_OFFICES = [
  {city:"Bangalore (HQ)",phone:"+91 9900566466",note:"Primary engineering hub"},
  {city:"Mysore",phone:null,note:"Design & QA"},
  {city:"Mumbai",phone:null,note:"Sales & partnerships"},
  {city:"Hyderabad",phone:null,note:"Mobile & cloud"},
];

const SERVICES_LIST = ["SEO","Local SEO","Google Ads","Meta Ads","LinkedIn Ads","Content Marketing","Technical SEO Audit","CRO","Other"];
const DIAL_CODES = [{code:"+1",flag:"🇨🇦"},{code:"+1",flag:"🇺🇸"},{code:"+44",flag:"🇬🇧"},{code:"+91",flag:"🇮🇳"}];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d")!;
    let W = c.width = c.offsetWidth, H = c.height = c.offsetHeight;
    const pts = Array.from({length:50},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.4+.3,a:Math.random()*.38+.07}));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0,0,W,H);
      pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(0,201,167,${p.a})`;ctx.fill();});
      for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<90){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle=`rgba(0,201,167,${.06*(1-d/90)})`;ctx.lineWidth=.5;ctx.stroke();}}
      raf=requestAnimationFrame(draw);
    };
    draw();
    const rz=()=>{W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;};
    window.addEventListener("resize",rz);
    return ()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",rz);};
  },[]);
  return <canvas ref={ref} style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}} />;
}

function Counter({to,sfx=""}:{to:number;sfx?:string}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v,setV] = useState(0);
  const started = useRef(false);
  useEffect(()=>{
    const el=ref.current;if(!el)return;
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting&&!started.current){started.current=true;let step=0;const t=setInterval(()=>{step++;const ease=1-Math.pow(1-step/70,3);setV(Math.round(ease*to));if(step>=70){setV(to);clearInterval(t);}},1800/70);}},{threshold:.25});
    obs.observe(el);return ()=>obs.disconnect();
  },[to]);
  return <span ref={ref}>{v}{sfx}</span>;
}

function SectionBadge({label}:{label:string}) {
  return (
    <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.22)",borderRadius:100,padding:"6px 18px",marginBottom:16}}>
      <span style={{width:6,height:6,borderRadius:"50%",background:T,display:"block",boxShadow:`0 0 8px ${T}`}}/>
      <span style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>{label}</span>
    </div>
  );
}

function SectionH2({children}:{children:React.ReactNode}) {
  return <h2 style={{fontSize:"clamp(20px,3vw,40px)",fontWeight:900,color:"#fff",letterSpacing:"-0.02em",lineHeight:1.15,marginBottom:14}}>{children}</h2>;
}

function GradText({children}:{children:React.ReactNode}) {
  return <span style={{background:`linear-gradient(135deg,${T},#1fd1b5)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{children}</span>;
}

function AccItem({item,open,toggle}:{item:{icon:string;title:string;desc:string};open:boolean;toggle:()=>void}) {
  return (
    <div onClick={toggle} style={{borderRadius:14,border:`1px solid ${open?"rgba(0,201,167,0.4)":"rgba(255,255,255,0.08)"}`,background:open?"rgba(0,201,167,0.06)":"rgba(255,255,255,0.02)",overflow:"hidden",cursor:"pointer",transition:"border-color .25s,background .25s"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",gap:12}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{width:40,height:40,borderRadius:12,flexShrink:0,background:open?"rgba(0,201,167,0.15)":"rgba(255,255,255,0.05)",border:`1px solid ${open?"rgba(0,201,167,0.3)":"rgba(255,255,255,0.1)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,transition:"background .25s"}}>{item.icon}</div>
          <span style={{fontSize:14,fontWeight:700,color:open?"#fff":"rgba(255,255,255,0.72)",fontFamily:"'Poppins',sans-serif",transition:"color .2s"}}>{item.title}</span>
        </div>
        <div style={{width:26,height:26,borderRadius:"50%",flexShrink:0,background:open?T:"rgba(255,255,255,0.07)",border:`1px solid ${open?T:"rgba(255,255,255,0.14)"}`,display:"flex",alignItems:"center",justifyContent:"center",color:open?"#000":"rgba(255,255,255,0.55)",fontSize:17,fontWeight:700,lineHeight:1,transform:open?"rotate(45deg)":"rotate(0deg)",transition:"all .25s ease"}}>+</div>
      </div>
      <div style={{maxHeight:open?220:0,overflow:"hidden",transition:"max-height .35s ease"}}>
        <p style={{padding:"0 18px 18px 70px",color:"rgba(255,255,255,0.5)",fontSize:13.5,lineHeight:1.75,fontFamily:"'Poppins',sans-serif",fontWeight:400,margin:0}}>{item.desc}</p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function SEOandDigitalMarketingPage() {
 const serviceSchema = getServiceSchema(
    "SEO & Digital Marketing", 
    "SEO & Digital Marketing That Drives Qualified Traffic and Measurable Revenue for businesses in Canada, USA & UK. We build data-driven marketing strategies that make your business visible online."
  );
  const [form,setForm] = useState({firstName:"",lastName:"",phone:"",dialCode:"+1",email:"",service:"",message:""});
  const [submitted,setSubmitted] = useState(false);
  const [loading,setLoading] = useState(false);
  const setF = (k:string,v:string) => setForm(f=>({...f,[k]:v}));
  const handleSubmit = (e:React.FormEvent) => {e.preventDefault();setLoading(true);setTimeout(()=>{setLoading(false);setSubmitted(true);},1200);};

  const [story,setStory] = useState(0);
  const [hireL,setHireL] = useState<number|null>(0);
  const [hireR,setHireR] = useState<number|null>(0);
  const [faq,setFaq] = useState<number|null>(0);
  const [gTab,setGTab] = useState<"int"|"india">("int");

  const [cForm,setCForm] = useState({name:"",phone:"",dialCode:"+1",email:"",service:"",project:""});
  const [cSubmitted,setCSubmitted] = useState(false);
  const [cLoading,setCLoading] = useState(false);
  const setCF = (k:string,v:string) => setCForm(f=>({...f,[k]:v}));
  const handleCSubmit = (e:React.FormEvent) => {e.preventDefault();setCLoading(true);setTimeout(()=>{setCLoading(false);setCSubmitted(true);},1200);};

  const iS:React.CSSProperties = {width:"100%",padding:"11px 14px",borderRadius:9,background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.14)",color:"#fff",fontSize:13.5,fontFamily:"'Poppins',sans-serif",outline:"none",boxSizing:"border-box",transition:"border-color .2s,background .2s"};
  const iSLg:React.CSSProperties = {...iS,padding:"13px 16px",fontSize:14.5};

  return (
    <>
      <Navbar />
<SchemaMarkup schema={serviceSchema} id="seo-digital-marketing-schema" />
      {/* ── Global Responsive Styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        /* Animations */
        @keyframes heroPulse  { 0%,100%{opacity:.7;transform:translateY(-50%) scale(1)} 50%{opacity:1;transform:translateY(-50%) scale(1.04)} }
        @keyframes heroSpin   { from{transform:translateY(-50%) rotate(0deg)} to{transform:translateY(-50%) rotate(360deg)} }
        @keyframes heroScan   { 0%{top:-2px;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{top:100%;opacity:0} }
        @keyframes heroGlow   { 0%,100%{box-shadow:0 0 0 rgba(0,201,167,0)} 50%{box-shadow:0 0 20px rgba(0,201,167,.2)} }
        @keyframes heroFadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes heroBlink  { 0%,100%{opacity:1} 50%{opacity:.35} }
        @keyframes ctaBgShift { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes sbFadeUp   { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes clScroll   { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

        /* Logo track */
        .cl-track { display:flex; width:max-content; animation:clScroll 32s linear infinite; }
        .cl-track:hover { animation-play-state:paused; }

        /* Hero layout */
        .hero-layout {
          display:grid;
          grid-template-columns:1fr 420px;
          gap:40px;
          max-width:1280px;
          margin:0 auto;
          width:100%;
          position:relative;
          z-index:3;
          align-items:center;
        }

        /* Two-col */
        .two-col { display:grid; grid-template-columns:1fr 1fr; gap:24px; }

        /* Services grid */
        .svc-grid { display:grid; gap:20px; }
        .svc-card {
          display:flex; flex-direction:column; gap:14px; padding:24px;
          border-radius:18px; border:1px solid rgba(255,255,255,0.07);
          background:rgba(255,255,255,0.02); transition:transform .3s,border-color .3s,background .3s;
          animation:heroFadeUp .6s ease both; cursor:pointer; text-decoration:none;
        }
        .svc-card:hover { transform:translateY(-6px); border-color:rgba(0,201,167,0.3); background:rgba(0,201,167,0.04); }
        .svc-card:hover .svc-icon { background:rgba(0,201,167,0.2)!important; transform:scale(1.1); }

        /* Key benefits grid */
        .kb-grid { display:grid; gap:20px; }
        .kb-card {
          display:flex; gap:20px; padding:28px 24px; border-radius:18px;
          border:1px solid rgba(255,255,255,0.06); background:rgba(255,255,255,0.02);
          transition:transform .3s,border-color .3s,background .3s; animation:heroFadeUp .6s ease both;
        }
        .kb-card:hover { transform:translateY(-4px); border-color:rgba(0,201,167,0.2); background:rgba(0,201,167,0.04); }

        /* Tools grid */
        .pt-grid { display:grid; gap:16px; }
        .pt-card { display:flex;flex-direction:column;padding:24px 20px;border-radius:16px;text-align:center;align-items:center;transition:transform .3s,box-shadow .3s; }
        .pt-card:hover { transform:translateY(-6px); box-shadow:0 20px 40px rgba(0,0,0,0.3); }
        .pt-card:hover .pt-icon { transform:scale(1.15)!important; }

        /* Global presence */
        .gp-offices { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .gp-card:hover { transform:translateY(-4px); box-shadow:0 16px 40px rgba(0,0,0,0.3); border-color:rgba(0,201,167,0.35)!important; }

        /* Contact grid */
        .cf-grid { display:grid; grid-template-columns:1fr 1fr; gap:40px; }
        .cf-name { display:grid; grid-template-columns:1fr 1fr; gap:14px; }

        /* Story tabs */
        .ss-tab {
          display:inline-flex; align-items:center; gap:8px; padding:10px 20px;
          border-radius:100px; border:1px solid rgba(255,255,255,0.12);
          background:rgba(255,255,255,0.04); color:rgba(255,255,255,0.6);
          font-size:13px; font-weight:600; font-family:'Poppins',sans-serif;
          cursor:pointer; transition:all .22s;
        }
        .ss-tab:hover { border-color:rgba(0,201,167,0.35); background:rgba(0,201,167,0.06); color:#fff; }
        .ss-tab.act  { border-color:rgba(0,201,167,0.6); background:rgba(0,201,167,0.12); color:#fff; }

        /* Hover helpers */
        .wcu-point:hover { border-color:rgba(0,201,167,0.25)!important; background:rgba(0,201,167,0.06)!important; transform:translateX(6px)!important; }
        .wcu-stat:hover  { transform:translateY(-4px)!important; background:rgba(0,201,167,0.1)!important; }
        .btn-teal:hover  { transform:translateY(-3px); box-shadow:0 12px 32px rgba(0,201,167,.25); }
        .h-teal:hover    { color:#00C9A7!important; }
        .fi:focus        { border-color:rgba(0,201,167,0.5)!important; background:rgba(0,201,167,0.05)!important; }
        .gp-ind:hover    { background:rgba(255,255,255,0.06)!important; border-color:rgba(255,255,255,0.15)!important; }

        /* ── Tablet ≤ 1024px ── */
        @media (max-width:1024px) {
          .hero-layout { grid-template-columns:1fr; gap:32px; }
          .svc-grid    { grid-template-columns:repeat(2,1fr)!important; }
          .kb-grid     { grid-template-columns:repeat(2,1fr)!important; }
          .pt-grid     { grid-template-columns:repeat(4,1fr)!important; }
          .ai-feat-grid{ grid-template-columns:repeat(2,1fr)!important; }
          .wcu-stats   { grid-template-columns:repeat(2,1fr)!important; }
          .wcu-pts     { grid-template-columns:repeat(2,1fr)!important; }
          .gp-india-stats { grid-template-columns:repeat(2,1fr)!important; }
          .gp-ind-grid { grid-template-columns:repeat(2,1fr)!important; }
        }

        /* ── Mobile ≤ 768px ── */
        @media (max-width:768px) {
          section:not(.hero-section) { padding:36px 20px!important; }

          /* Reduce space above section headings */
          section > div > div[style*="textAlign"],
          section > div > div > div[style*="textAlign"] {
            margin-bottom:20px!important;
          }

          /* Tighten badge and h2 spacing */
          .sec-head { margin-bottom:20px!important; }
          .sec-head > div { margin-bottom:8px!important; }
          .sec-head h2 { margin-bottom:8px!important; font-size:clamp(20px,5vw,28px)!important; }
          .sec-head p  { font-size:13px!important; margin-top:6px!important; }
          .hero-layout { gap:28px; }
          .two-col     { grid-template-columns:1fr!important; gap:12px!important; }
          .cf-grid     { grid-template-columns:1fr!important; gap:24px!important; }
          .cf-name     { grid-template-columns:1fr!important; gap:12px!important; }
          .svc-grid    { grid-template-columns:1fr!important; }
          .kb-grid     { grid-template-columns:1fr!important; }
          .pt-grid     { grid-template-columns:repeat(2,1fr)!important; }
          .ai-feat-grid{ grid-template-columns:repeat(2,1fr)!important; }
          .gp-offices  { grid-template-columns:1fr!important; gap:14px!important; }
          .wcu-stats   { grid-template-columns:repeat(2,1fr)!important; }
          .wcu-pts     { grid-template-columns:1fr!important; }
          .gp-india-stats { grid-template-columns:repeat(2,1fr)!important; }
          .gp-ind-grid { grid-template-columns:1fr!important; }
          .ss-tab      { font-size:12px!important; padding:8px 14px!important; }
          .mob-badge   { font-size:11px!important; padding:5px 10px!important; }
          .platform-pill{ font-size:11px!important; padding:5px 11px!important; }

          /* ── Equal-size full-width buttons on mobile ── */
          .btn-row {
            flex-direction:column!important;
            align-items:stretch!important;
            gap:12px!important;
          }
          .btn-row a,
          .btn-row button {
            width:100%!important;
            text-align:center!important;
            justify-content:center!important;
            padding:14px 20px!important;
            font-size:14px!important;
            box-sizing:border-box!important;
            flex:none!important;
            min-width:0!important;
          }
        }

        /* ── Small mobile ≤ 480px ── */
        @media (max-width:480px) {
          section:not(.hero-section) { padding:28px 16px!important; }
          .pt-grid  { grid-template-columns:1fr!important; }
          .ai-feat-grid { grid-template-columns:1fr!important; }
          .kb-card  { flex-direction:column!important; gap:14px!important; }
          .ss-tab   { width:100%; justify-content:center; }

          /* Ensure buttons stay full-width at smallest screens too */
          .btn-row {
            flex-direction:column!important;
            align-items:stretch!important;
          }
          .btn-row a,
          .btn-row button {
            width:100%!important;
            text-align:center!important;
            justify-content:center!important;
            padding:14px 16px!important;
            font-size:14px!important;
          }
        }
      `}</style>

      {/* ══════════════════════════════════════════════════
          M1 — HERO + INLINE LEAD FORM
      ══════════════════════════════════════════════════ */}
      <section className="hero-section" style={{padding:"clamp(10px,5vw,60px) clamp(16px,4vw,48px) clamp(28px,5vw,52px)",background:`linear-gradient(135deg,${N0} 0%,#041628 45%,${N0} 100%)`,position:"relative",overflow:"hidden",minHeight:"unset",display:"flex",alignItems:"flex-start"}}>
        <Particles/>
        {/* <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:1,backgroundImage:`linear-gradient(rgba(0,201,167,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.035) 1px,transparent 1px)`,backgroundSize:"60px 60px"}}/> */}
        <div style={{position:"absolute",width:650,height:650,borderRadius:"50%",background:`radial-gradient(circle,rgba(0,201,167,.14) 0%,transparent 65%)`,top:"40%",left:"-10%",transform:"translateY(-50%)",animation:"heroPulse 8s ease-in-out infinite",pointerEvents:"none",zIndex:1}}/>
        <div style={{position:"absolute",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 65%)",top:"10%",right:"5%",animation:"heroPulse 10s ease-in-out infinite .5s",pointerEvents:"none",zIndex:1}}/>
        <div style={{position:"absolute",width:520,height:520,borderRadius:"50%",border:"1px dashed rgba(0,201,167,.08)",top:"50%",left:"-12%",transform:"translateY(-50%)",animation:"heroSpin 55s linear infinite",pointerEvents:"none",zIndex:1}}/>
        {/* <div style={{position:"absolute",left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(0,201,167,.28),transparent)",animation:"heroScan 7s linear infinite",pointerEvents:"none",zIndex:2}}/> */}

        <div className="hero-layout">
          {/* Left */}
          <div style={{animation:"heroFadeUp .7s ease both"}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.25)",borderRadius:100,padding:"7px 18px",marginBottom:28,animation:"heroGlow 3s ease-in-out infinite,heroFadeUp .7s ease both"}}>
              <span style={{width:7,height:7,borderRadius:"50%",background:T,boxShadow:`0 0 10px ${T}`,animation:"heroBlink 1.4s ease-in-out infinite"}}/>
              <span style={{color:T,fontSize:"clamp(10px,1.2vw,11.5px)",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase" as const}}>SEO & Digital Marketing — Canada, USA &amp; UK</span>
            </div>
            <h1 style={{fontSize:"clamp(26px,3.8vw,54px)",fontWeight:900,lineHeight:1.12,marginBottom:22,letterSpacing:"-0.025em",color:"#fff",animation:"heroFadeUp .7s ease .12s both"}}>
              SEO & Digital Marketing That Drives <GradText>Qualified Traffic</GradText> and Measurable Revenue
            </h1>
            <p style={{color:"rgba(255,255,255,0.52)",fontSize:"clamp(13px,1.3vw,16.5px)",lineHeight:1.85,marginBottom:28,maxWidth:600,animation:"heroFadeUp .7s ease .22s both"}}>
              Most businesses in Canada, the USA, and the UK are invisible online — not because their services aren't great, but because their digital presence hasn't been built to be found. We fix that.
            </p>
            <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:28,animation:"heroFadeUp .7s ease .27s both"}}>
              {[{i:"🔍",l:"SEO"},{i:"📍",l:"Local SEO"},{i:"🎯",l:"Google Ads"},{i:"📘",l:"Meta Ads"},{i:"💼",l:"LinkedIn"}].map(b=>(
                <span key={b.l} className="platform-pill" style={{display:"inline-flex",alignItems:"center",gap:6,padding:"6px 14px",borderRadius:100,border:"1px solid rgba(0,201,167,0.25)",background:"rgba(0,201,167,0.06)",color:"rgba(255,255,255,0.8)",fontSize:12.5,fontWeight:600}}>{b.i} {b.l}</span>
              ))}
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:36,animation:"heroFadeUp .7s ease .32s both"}}>
              {[{i:"🔵",l:"Google Partner"},{i:"🏆",l:"ISO Certified"},{i:"🔒",l:"GDPR Compliant"},{i:"🍁",l:"PIPEDA Ready"},{i:"⭐",l:"Clutch Top Agency"}].map(b=>(
                <span key={b.l} className="mob-badge" style={{display:"inline-flex",alignItems:"center",gap:6,padding:"6px 13px",borderRadius:100,border:"1px solid rgba(255,255,255,0.12)",background:"rgba(255,255,255,0.04)",color:"rgba(255,255,255,0.65)",fontSize:12.5,fontWeight:600,cursor:"default"}}>{b.i} {b.l}</span>
              ))}
            </div>
            <div style={{display:"flex",gap:20,flexWrap:"wrap",animation:"heroFadeUp .7s ease .36s both"}}>
              {[{flag:"🇨🇦",label:"CA:",phone:"+1 647-XXX-XXXX"},{flag:"🇬🇧",label:"UK:",phone:"+44 20-XXXX-XXXX"}].map(p=>(
                <a key={p.phone} href={`tel:${p.phone.replace(/\s|-/g,"")}`} className="h-teal" style={{display:"flex",alignItems:"center",gap:7,color:"rgba(255,255,255,0.5)",fontSize:"clamp(12px,1.1vw,13.5px)",fontWeight:600,textDecoration:"none",transition:"color .2s"}}>
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
                <p style={{color:"rgba(255,255,255,0.5)",fontSize:14,lineHeight:1.7,marginBottom:24}}>We'll contact you within 24 hours to discuss your marketing goals.</p>
                <button onClick={()=>{setSubmitted(false);setForm({firstName:"",lastName:"",phone:"",dialCode:"+1",email:"",service:"",message:""});}} style={{padding:"11px 26px",borderRadius:9,border:"none",background:`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:700,fontSize:14,fontFamily:"'Poppins',sans-serif",cursor:"pointer"}}>Send Another →</button>
              </div>
            ):(
              <>
                <div style={{marginBottom:22}}>
                  <p style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:4}}>Free Consultation</p>
                  <h2 style={{color:"#fff",fontSize:18,fontWeight:800,margin:0,lineHeight:1.3}}>Get a Free SEO & Marketing Audit</h2>
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
                  <div><label style={{display:"block",fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Message</label><textarea className="fi" style={{...iS,minHeight:76,resize:"vertical" as const}} placeholder="Tell us about your marketing goals and target audience..." value={form.message} onChange={e=>setF("message",e.target.value)}/></div>
                  <button className="btn-teal" type="submit" disabled={loading} style={{padding:"13px",borderRadius:10,border:"none",marginTop:4,background:loading?"rgba(0,201,167,0.5)":`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:800,fontSize:14.5,fontFamily:"'Poppins',sans-serif",cursor:loading?"wait":"pointer",transition:"transform .2s,box-shadow .2s"}}>
                    {loading?"Sending...":"📊 Get Free Marketing Audit →"}
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
      <section style={{padding:"40px 0",background:N0,overflow:"hidden",borderTop:`1px solid rgba(0,201,167,.1)`,borderBottom:`1px solid rgba(0,201,167,.1)`}}>
        <div className="sec-head" style={{textAlign:"center",marginBottom:40,padding:"0 24px"}}>
          <p style={{fontWeight:600,fontSize:11.5,color:"rgba(255,255,255,.28)",letterSpacing:"0.14em",textTransform:"uppercase" as const,marginBottom:12}}>Our Happy Clients</p>
          <h2 style={{fontSize:"clamp(18px,2.6vw,32px)",fontWeight:800,color:"#fff",letterSpacing:"-0.02em",lineHeight:1.25,margin:0}}>
            Trusted by Businesses Across <GradText>North America &amp; the UK</GradText>
          </h2>
        </div>
        <div style={{overflow:"hidden"}}>
          <div className="cl-track">
            {[...LOGOS,...LOGOS].map((f,i)=>(
              <div key={i} style={{flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",height:64,padding:"10px 16px",background:"#fff",borderRadius:10,margin:"0 8px",boxShadow:"0 6px 20px rgba(0,0,0,0.15)",opacity:.9,transition:"transform .3s,box-shadow .3s"}}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="scale(1.08)";el.style.boxShadow="0 10px 28px rgba(0,0,0,0.25)";}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="";el.style.boxShadow="0 6px 20px rgba(0,0,0,0.15)";}}>
                <img src={`/${f}`} alt={`Client ${i+1}`} style={{height:36,width:"auto",maxWidth:110,objectFit:"contain"}}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          M3 — SUCCESS STORIES
      ══════════════════════════════════════════════════ */}
      <section style={{padding:"52px 48px",background:`linear-gradient(180deg,${N2} 0%,${N1} 100%)`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"linear-gradient(rgba(0,201,167,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.02) 1px,transparent 1px)",backgroundSize:"56px 56px"}}/>
        <div style={{maxWidth:1200,margin:"0 auto",position:"relative",zIndex:2}}>
          <div className="sec-head" style={{textAlign:"center",marginBottom:28}}>
            <SectionBadge label="Proven Results"/>
            <SectionH2>SEO & Digital Marketing <GradText>Success Stories</GradText></SectionH2>
            <p style={{color:"rgba(255,255,255,0.45)",fontSize:"clamp(14px,1.3vw,16px)",lineHeight:1.7,maxWidth:500,margin:"0 auto"}}>Real results for businesses in Canada, USA &amp; UK.</p>
          </div>
          <div style={{display:"flex",gap:10,justifyContent:"center",marginBottom:40,flexWrap:"wrap"}}>
            {SUCCESS_STORIES.map((c,i)=>(
              <button key={i} className={`ss-tab${story===i?" act":""}`} onClick={()=>setStory(i)}><span>{c.icon}</span>{c.industry} — {c.result}</button>
            ))}
          </div>
          <div key={story} style={{background:"rgba(255,255,255,0.02)",border:`1px solid rgba(0,201,167,.3)`,borderRadius:24,overflow:"hidden",animation:"sbFadeUp .45s ease both"}}>
            <div style={{height:3,background:`linear-gradient(90deg,transparent,${T},transparent)`}}/>
            <div style={{padding:"clamp(20px,3vw,36px)"}}>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20,flexWrap:"wrap"}}>
                <div style={{width:52,height:52,borderRadius:14,fontSize:26,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,201,167,0.12)",border:`1px solid rgba(0,201,167,.3)`}}>{SUCCESS_STORIES[story].icon}</div>
                <span style={{padding:"4px 14px",borderRadius:100,fontSize:12,fontWeight:700,background:"rgba(0,201,167,0.12)",border:`1px solid rgba(0,201,167,.3)`,color:T,textTransform:"uppercase" as const,letterSpacing:"0.08em"}}>{SUCCESS_STORIES[story].result}</span>
              </div>
              <h3 style={{color:"#fff",fontSize:"clamp(16px,2vw,24px)",fontWeight:800,marginBottom:16,lineHeight:1.3}}>{SUCCESS_STORIES[story].title}</h3>
              <p style={{color:"rgba(255,255,255,0.6)",fontSize:"clamp(13px,1.2vw,15px)",lineHeight:1.7,marginBottom:28}}>{SUCCESS_STORIES[story].description}</p>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14}}>
                {SUCCESS_STORIES[story].metrics.map((m,i)=>(
                  <div key={i} style={{textAlign:"center",padding:"clamp(12px,2vw,18px) 14px",borderRadius:14,border:"1px solid rgba(255,255,255,0.07)",background:"rgba(255,255,255,0.03)",transition:"transform .25s,background .25s",cursor:"default"}}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-4px)";(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.06)";}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.03)";}}>
                    <div style={{fontSize:"clamp(16px,2vw,22px)",marginBottom:8}}>{m.i}</div>
                    <div style={{fontSize:"clamp(20px,2.5vw,30px)",fontWeight:900,marginBottom:4,background:`linear-gradient(135deg,#fff 30%,${T})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{m.v}</div>
                    <div style={{color:"rgba(255,255,255,0.45)",fontSize:"clamp(11px,1vw,12px)",fontWeight:500}}>{m.l}</div>
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
          <div className="btn-row" style={{display:"flex",justifyContent:"center",marginTop:44}}>
            {/* ✅ → /case-studies */}
            <a href="/case-studies" className="btn-teal" style={{display:"inline-block",padding:"14px 36px",borderRadius:10,background:`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:700,fontSize:15,fontFamily:"'Poppins',sans-serif",cursor:"pointer",textDecoration:"none",transition:"transform .2s,box-shadow .2s"}}>View All Case Studies →</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          M4 — SERVICES WE OFFER
      ══════════════════════════════════════════════════ */}
      <section style={{padding:"48px 48px 32px",background:`linear-gradient(180deg,${N1} 0%,${N2} 60%,${N1} 100%)`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"linear-gradient(rgba(0,201,167,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.025) 1px,transparent 1px)",backgroundSize:"56px 56px"}}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
          <div className="sec-head" style={{textAlign:"center",marginBottom:36}}>
            <SectionBadge label="What We Deliver"/>
            <SectionH2>SEO & Digital Marketing <GradText>Services We Offer</GradText></SectionH2>
            <p style={{color:"rgba(255,255,255,0.5)",fontSize:"clamp(14px,1.3vw,16px)",lineHeight:1.75,maxWidth:580,margin:"0 auto"}}>Data-driven marketing strategies for businesses across Canada, USA &amp; UK.</p>
          </div>
          <div className="svc-grid" style={{gridTemplateColumns:"repeat(3,1fr)"}}>
            {SERVICES.map((s,i)=>(
              // ✅ Each service card → /services/{slug}
              <a key={s.title} href={`/services/${s.slug}`} className="svc-card" style={{animationDelay:`${i*.06}s`}}>
                <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12}}>
                  <div className="svc-icon" style={{width:52,height:52,borderRadius:14,background:"rgba(0,201,167,0.1)",border:"1px solid rgba(0,201,167,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0,transition:"background .3s,transform .3s"}}>{s.icon}</div>
                  <span style={{padding:"3px 10px",borderRadius:100,fontSize:10.5,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase" as const,color:T,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.18)"}}>{s.tag}</span>
                </div>
                <h3 style={{fontSize:"clamp(14px,1.3vw,17px)",fontWeight:700,color:"#fff",lineHeight:1.3,margin:0}}>{s.title}</h3>
                <p style={{fontSize:13.5,color:"rgba(255,255,255,0.5)",lineHeight:1.7,margin:0}}>{s.desc}</p>
                <span style={{display:"inline-flex",alignItems:"center",gap:6,color:T,fontSize:13,fontWeight:600,marginTop:"auto"}}>Learn More <span>→</span></span>
              </a>
            ))}
          </div>
          <div className="btn-row" style={{display:"flex",justifyContent:"center",marginTop:56}}>
            {/* ✅ → /services */}
            <a href="/services" className="btn-teal" style={{display:"inline-block",padding:"14px 36px",borderRadius:10,background:`linear-gradient(135deg,${T},${TD})`,border:"none",color:"#000",fontWeight:700,fontSize:15,fontFamily:"'Poppins',sans-serif",cursor:"pointer",textDecoration:"none",transition:"transform .2s,box-shadow .2s"}}>View All Services →</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          M5 — KEY BENEFITS
      ══════════════════════════════════════════════════ */}
      <section style={{padding:"52px 48px",background:`linear-gradient(180deg,${N1} 0%,${N2} 100%)`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"linear-gradient(rgba(0,201,167,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.025) 1px,transparent 1px)",backgroundSize:"56px 56px"}}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
          <div className="sec-head" style={{textAlign:"center",marginBottom:36}}>
            <SectionBadge label="Why Market With Us"/>
            <SectionH2>Key Benefits of <GradText>SEO & Digital Marketing</GradText></SectionH2>
            <p style={{color:"rgba(255,255,255,0.45)",fontSize:"clamp(14px,1.3vw,16px)",lineHeight:1.75,maxWidth:520,margin:"0 auto"}}>Here's what you gain when you partner with a data-driven marketing team.</p>
          </div>
          <div className="kb-grid" style={{gridTemplateColumns:"repeat(4,1fr)"}}>
            {BENEFITS.map((b,i)=>(
              <div key={i} className="kb-card" style={{animationDelay:`${i*.12}s`}}>
                <div style={{fontSize:"clamp(36px,5vw,64px)",fontWeight:900,lineHeight:1,background:"linear-gradient(135deg,rgba(0,201,167,0.15) 0%,rgba(0,201,167,0.05) 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",flexShrink:0,width:72,textAlign:"center"}}>{b.num}</div>
                <div style={{flex:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}><span style={{fontSize:22}}>{b.icon}</span><h3 style={{color:"#fff",fontSize:"clamp(15px,1.4vw,19px)",fontWeight:800,margin:0}}>{b.title}</h3></div>
                  <p style={{color:"rgba(255,255,255,0.52)",fontSize:"clamp(13px,1vw,14.5px)",lineHeight:1.75,margin:"0 0 14px"}}>{b.desc}</p>
                  <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                    {b.tags.map(tag=><span key={tag} style={{display:"inline-flex",alignItems:"center",padding:"3px 10px",borderRadius:100,fontSize:10.5,fontWeight:600,letterSpacing:".06em",textTransform:"uppercase" as const,color:T,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.18)"}}>{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-row" style={{display:"flex",justifyContent:"center",marginTop:52}}>
            {/* ✅ → /free-audit */}
            <a href="/free-audit" className="btn-teal" style={{display:"inline-block",padding:"14px 36px",borderRadius:10,border:"none",background:`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:700,fontSize:15,fontFamily:"'Poppins',sans-serif",cursor:"pointer",textDecoration:"none",transition:"transform .2s,box-shadow .2s"}}>Get Your Free Audit →</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          M6 — PLATFORM TOOLS
      ══════════════════════════════════════════════════ */}
      <section style={{padding:"48px 48px",background:N1,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:600,height:400,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
          <div className="sec-head" style={{textAlign:"center",marginBottom:32}}>
            <SectionBadge label="Our Tech Stack"/>
            <SectionH2>Leading Platform Tools <GradText>That We Use</GradText></SectionH2>
            <p style={{color:"rgba(255,255,255,0.45)",fontSize:"clamp(14px,1.3vw,16px)",lineHeight:1.75,maxWidth:560,margin:"0 auto"}}>We use enterprise-grade tools to plan, execute, and report on every campaign.</p>
          </div>
          <div className="pt-grid" style={{gridTemplateColumns:"repeat(4,1fr)"}}>
            {TOOLS.map((tool,i)=>(
              <div key={i} className="pt-card" style={{background:tool.clr,border:`1px solid ${tool.bd}`}}>
                <div className="pt-icon" style={{width:56,height:56,borderRadius:15,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,marginBottom:16,background:"rgba(255,255,255,0.05)",border:`1px solid ${tool.bd}`,transition:"transform .25s"}}>{tool.icon}</div>
                <h3 style={{color:"#fff",fontSize:"clamp(13px,1.2vw,16px)",fontWeight:700,marginBottom:8,lineHeight:1.3}}>{tool.name}</h3>
                <p style={{color:"rgba(255,255,255,0.5)",fontSize:13,lineHeight:1.7,margin:0}}>{tool.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          M7 — TAILORED APPROACH (ACCORDION)
      ══════════════════════════════════════════════════ */}
      <section style={{padding:"48px 48px",background:`linear-gradient(180deg,${N1} 0%,${N2} 100%)`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"10%",left:"5%",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
          <div className="sec-head" style={{textAlign:"center",marginBottom:32}}>
            <SectionBadge label="Tailored Approach"/>
            <SectionH2>Marketing <GradText>Tailored to Your Needs</GradText></SectionH2>
            <p style={{color:"rgba(255,255,255,0.45)",fontSize:"clamp(14px,1.3vw,16px)",lineHeight:1.75,maxWidth:560,margin:"0 auto"}}>We adapt our marketing strategies to your business type and growth goals.</p>
          </div>
          <div className="two-col" style={{marginBottom:16}}>
            <p style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>By Business Type</p>
            <p style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>By Marketing Type</p>
          </div>
          <div className="two-col">
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              {HIRE_LEFT.map((item,i)=><AccItem key={item.title} item={item} open={hireL===i} toggle={()=>setHireL(hireL===i?null:i)}/>)}
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              {HIRE_RIGHT.map((item,i)=><AccItem key={item.title} item={item} open={hireR===i} toggle={()=>setHireR(hireR===i?null:i)}/>)}
            </div>
          </div>
          <div className="btn-row" style={{display:"flex",gap:16,marginTop:48,justifyContent:"center",flexWrap:"wrap"}}>
            {/* ✅ → /free-marketing-plan */}
            <a href="/free-marketing-plan" className="btn-teal" style={{display:"inline-block",padding:"14px 32px",borderRadius:10,border:"none",background:`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:700,fontSize:15,fontFamily:"'Poppins',sans-serif",cursor:"pointer",textDecoration:"none",transition:"transform .2s,box-shadow .2s"}}>📊 Get a Free Marketing Plan</a>
            {/* ✅ → /pricing */}
            <a href="/pricing" style={{display:"inline-block",padding:"14px 32px",borderRadius:10,border:"1.5px solid rgba(0,201,167,0.35)",background:"transparent",color:T,fontWeight:600,fontSize:15,fontFamily:"'Poppins',sans-serif",cursor:"pointer",textDecoration:"none",transition:"border-color .2s,background .2s"}}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor=T;(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.07)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(0,201,167,0.35)";(e.currentTarget as HTMLElement).style.background="transparent";}}>View Pricing →</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          M8 — AI-POWERED SOLUTIONS
      ══════════════════════════════════════════════════ */}
      <section style={{padding:"48px 48px",background:`linear-gradient(180deg,${N2} 0%,${N1} 100%)`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"0%",left:"50%",transform:"translateX(-50%)",width:700,height:400,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
        <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
          <div className="sec-head" style={{marginBottom:32,maxWidth:620,marginLeft:"auto",marginRight:"auto",textAlign:"center"}}>
            <SectionBadge label="AI-Powered"/>
            <SectionH2>Leverage <GradText>AI-Powered Marketing</GradText> Solutions</SectionH2>
            <p style={{color:"rgba(255,255,255,0.5)",fontSize:"clamp(14px,1.3vw,16px)",lineHeight:1.8}}>We use AI to analyse data, predict trends, automate campaigns, and deliver real-time insights for better ROI.</p>
          </div>
          <div className="ai-feat-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20}}>
            {AI_FEATS.map((f,i)=>(
              <div key={i} style={{background:"rgba(0,201,167,0.05)",border:"1px solid rgba(0,201,167,0.15)",borderRadius:16,padding:"clamp(20px,2.5vw,28px) 20px",textAlign:"center"}}>
                <div style={{fontSize:36,marginBottom:16}}>{f.icon}</div>
                <h3 style={{color:"#fff",fontSize:"clamp(14px,1.3vw,16px)",fontWeight:700,marginBottom:10}}>{f.title}</h3>
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
        <div style={{background:"linear-gradient(135deg,#0055b3 0%,#0077cc 35%,#00a07a 65%,#00C9A7 100%)",backgroundSize:"300% 300%",animation:"ctaBgShift 8s ease infinite",padding:"clamp(40px,5vw,56px) clamp(20px,5vw,48px)",textAlign:"center",position:"relative"}}>
          <div style={{position:"absolute",top:"-20%",left:"-5%",width:350,height:350,borderRadius:"50%",background:"radial-gradient(circle,rgba(255,255,255,0.1) 0%,transparent 65%)",pointerEvents:"none"}}/>
          <div style={{position:"absolute",bottom:"-20%",right:"-5%",width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 65%)",pointerEvents:"none"}}/>
          <div style={{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",backgroundSize:"48px 48px"}}/>
          <div style={{position:"relative",zIndex:2,maxWidth:760,margin:"0 auto"}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,0.15)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:100,padding:"6px 18px",marginBottom:24}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:"#fff",display:"block"}}/>
              <span style={{color:"#fff",fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>Start Today</span>
            </div>
            <h2 style={{fontSize:"clamp(22px,3.5vw,48px)",fontWeight:900,color:"#fff",lineHeight:1.15,letterSpacing:"-0.02em",marginBottom:20}}>
              Want SEO & Digital Marketing That Takes Your<br/>Business to the <span style={{textDecoration:"underline",textDecorationColor:"rgba(255,255,255,0.4)"}}>Next Level?</span>
            </h2>
            <p style={{color:"rgba(255,255,255,0.82)",fontSize:"clamp(14px,1.5vw,17px)",lineHeight:1.75,marginBottom:40}}>Connect with NNC Digital today and let's build your data-driven marketing strategy together.</p>
            <div className="btn-row" style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
              {/* ✅ → /contact */}
              <a href="/contact" style={{display:"inline-flex",alignItems:"center",gap:10,padding:"16px 40px",borderRadius:12,background:"#fff",color:"#0055b3",fontWeight:800,fontSize:"clamp(13px,1.3vw,16px)",fontFamily:"'Poppins',sans-serif",textDecoration:"none",cursor:"pointer",transition:"transform .2s,box-shadow .2s"}}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-3px)";(e.currentTarget as HTMLElement).style.boxShadow="0 16px 40px rgba(0,0,0,0.25)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.boxShadow="";}}>✦ Connect Now</a>
              {/* ✅ → /book-consultation */}
              <a href="/book-consultation" style={{display:"inline-flex",alignItems:"center",gap:10,padding:"16px 36px",borderRadius:12,background:"transparent",color:"#fff",fontWeight:700,fontSize:"clamp(13px,1.3vw,16px)",fontFamily:"'Poppins',sans-serif",border:"2px solid rgba(255,255,255,0.5)",textDecoration:"none",cursor:"pointer",transition:"border-color .2s,background .2s"}}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="#fff";(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.1)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.5)";(e.currentTarget as HTMLElement).style.background="transparent";}}>📅 Book a Free Audit →</a>
            </div>
            <p style={{color:"rgba(255,255,255,0.5)",fontSize:13,marginTop:28}}>🇨🇦 Canada &nbsp;·&nbsp; 🇺🇸 USA &nbsp;·&nbsp; 🇬🇧 UK &nbsp;·&nbsp; 🇮🇳 India &nbsp;&nbsp;|&nbsp;&nbsp; hello@nncdigital.com</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          M10 — WHY CHOOSE US (no video — full width)
      ══════════════════════════════════════════════════ */}
      <section style={{padding:"52px 48px",background:`linear-gradient(180deg,${N1} 0%,${N2} 100%)`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"20%",right:"-5%",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
        <div style={{position:"absolute",top:"60%",left:"-5%",width:350,height:350,borderRadius:"50%",background:"radial-gradient(circle,rgba(99,102,241,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
        <div style={{maxWidth:1100,margin:"0 auto",position:"relative",zIndex:2}}>
          <div className="sec-head" style={{textAlign:"center",marginBottom:32}}>
            <SectionBadge label="Our Story"/>
            <SectionH2>Why Choose Us as Your <GradText>Digital Marketing</GradText> Partner?</SectionH2>
            <p style={{color:"rgba(255,255,255,0.55)",fontSize:"clamp(13px,1.2vw,15px)",lineHeight:1.8,maxWidth:700,margin:"0 auto 8px"}}>Backed by <span style={{color:"#fff",fontWeight:600}}>Nakshatra Namaha Creations Pvt. Ltd.</span> — one of Bangalore&apos;s most respected digital studios with <span style={{color:T,fontWeight:600}}>8+ years of experience</span> and <span style={{color:T,fontWeight:600}}>565+ projects delivered</span>.</p>
            <p style={{color:"rgba(255,255,255,0.55)",fontSize:"clamp(13px,1.2vw,15px)",lineHeight:1.8,maxWidth:700,margin:"0 auto"}}>We launched NNC Digital as our international arm — bringing the same proven expertise to Canadian, US, and UK markets with dedicated client-facing teams, transparent pricing, and long-term partnership.</p>
          </div>

          <div className="wcu-pts" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12,marginBottom:40}}>
            {WCU_POINTS.map((p,i)=>(
              <div key={i} className="wcu-point" style={{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",borderRadius:12,border:"1px solid rgba(255,255,255,0.06)",background:"rgba(255,255,255,0.02)",transition:"border-color .2s,background .2s,transform .2s",cursor:"default"}}>
                <span style={{fontSize:18,flexShrink:0}}>{p.icon}</span>
                <span style={{color:"rgba(255,255,255,0.72)",fontSize:"clamp(12px,1.1vw,14px)",fontWeight:500}}>{p.text}</span>
              </div>
            ))}
          </div>

          <div className="wcu-stats" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16,marginBottom:40}}>
            {WCU_STATS.map(st=>(
              <div key={st.l} className="wcu-stat" style={{textAlign:"center",padding:"clamp(14px,2vw,22px) 14px",borderRadius:14,border:"1px solid rgba(0,201,167,0.15)",background:"rgba(0,201,167,0.05)",transition:"transform .25s,background .25s",cursor:"default"}}>
                <div style={{fontSize:"clamp(18px,2.2vw,28px)",fontWeight:900,marginBottom:4,background:`linear-gradient(135deg,#fff 30%,${T})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}><Counter to={st.n} sfx={st.s}/></div>
                <div style={{color:"rgba(255,255,255,0.4)",fontSize:11,fontWeight:500}}>{st.l}</div>
              </div>
            ))}
          </div>

          <div className="btn-row" style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
            {/* ✅ → /book-consultation */}
            <a href="/book-consultation" className="btn-teal" style={{display:"inline-block",padding:"14px 32px",borderRadius:10,border:"none",background:`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:700,fontSize:15,fontFamily:"'Poppins',sans-serif",cursor:"pointer",textDecoration:"none",transition:"transform .2s,box-shadow .2s"}}>📅 Book a Strategy Call</a>
            {/* ✅ → /case-studies */}
            <a href="/case-studies" style={{display:"inline-block",padding:"14px 32px",borderRadius:10,border:"1.5px solid rgba(0,201,167,0.35)",background:"transparent",color:T,fontWeight:600,fontSize:15,fontFamily:"'Poppins',sans-serif",cursor:"pointer",textDecoration:"none",transition:"border-color .2s,background .2s"}}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor=T;(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.07)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(0,201,167,0.35)";(e.currentTarget as HTMLElement).style.background="transparent";}}>Our Work →</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          M11 — GLOBAL PRESENCE
      ══════════════════════════════════════════════════ */}
      <section style={{padding:"48px 48px",background:`linear-gradient(180deg,${N0} 0%,${N1} 100%)`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",width:600,height:300,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
        <div style={{maxWidth:1180,margin:"0 auto",position:"relative",zIndex:2}}>
          <div className="sec-head" style={{textAlign:"center",marginBottom:28}}>
            <SectionBadge label="Our Reach"/>
            <SectionH2>Global <GradText>Presence</GradText></SectionH2>
            <p style={{color:"rgba(255,255,255,0.45)",fontSize:"clamp(13px,1.2vw,15px)",lineHeight:1.75,maxWidth:500,margin:"0 auto"}}>Client-facing offices in North America &amp; the UK. Engineering headquarters in Bangalore, India.</p>
          </div>
          <div style={{display:"flex",gap:12,justifyContent:"center",marginBottom:40,flexWrap:"wrap"}}>
            {[{key:"int",label:"🌍 North America & UK"},{key:"india",label:"🇮🇳 India (Engineering HQ)"}].map(t=>(
              <button key={t.key} onClick={()=>setGTab(t.key as "int"|"india")} style={{padding:"11px 24px",borderRadius:10,border:`1px solid ${gTab===t.key?"rgba(0,201,167,0.5)":"rgba(255,255,255,0.1)"}`,background:gTab===t.key?"rgba(0,201,167,0.12)":"rgba(255,255,255,0.03)",color:gTab===t.key?T:"rgba(255,255,255,0.55)",fontSize:"clamp(12px,1.2vw,14px)",fontWeight:700,fontFamily:"'Poppins',sans-serif",cursor:"pointer",transition:"all .22s",boxShadow:gTab===t.key?"0 4px 20px rgba(0,201,167,0.12)":"none"}}>{t.label}</button>
            ))}
          </div>
          {gTab==="int"&&(
            <div>
              <div className="gp-offices" style={{marginBottom:24}}>
                {INT_OFFICES.map((o,i)=>(
                  <div key={i} className="gp-card" style={{padding:"28px 24px",borderRadius:18,background:"rgba(0,201,167,0.05)",border:"1px solid rgba(0,201,167,0.18)",transition:"transform .25s,box-shadow .25s,border-color .25s",cursor:"default"}}>
                    <div style={{fontSize:36,marginBottom:14}}>{o.flag}</div>
                    <h3 style={{color:"#fff",fontSize:"clamp(15px,1.4vw,18px)",fontWeight:800,marginBottom:4}}>{o.city}</h3>
                    <p style={{color:T,fontSize:12,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase" as const,marginBottom:16}}>{o.tz}</p>
                    <a href={`tel:${o.phone.replace(/\s|-/g,"")}`} className="h-teal" style={{display:"flex",alignItems:"center",gap:8,color:"rgba(255,255,255,0.7)",fontSize:14,fontWeight:600,textDecoration:"none",marginBottom:8,transition:"color .2s"}}>📞 {o.phone}</a>
                    <a href={`mailto:${o.email}`} className="h-teal" style={{display:"flex",alignItems:"center",gap:8,color:"rgba(255,255,255,0.5)",fontSize:13,textDecoration:"none",transition:"color .2s"}}>✉️ {o.email}</a>
                  </div>
                ))}
              </div>
              <div style={{borderRadius:14,padding:"20px 28px",background:"rgba(0,201,167,0.05)",border:"1px solid rgba(0,201,167,0.15)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
                <div style={{display:"flex",alignItems:"center",gap:12}}><div style={{width:10,height:10,borderRadius:"50%",background:"#22c55e",boxShadow:"0 0 8px #22c55e"}}/><span style={{color:"rgba(255,255,255,0.6)",fontSize:"clamp(12px,1.1vw,14px)",fontWeight:500}}>Available Mon–Fri, 9am–6pm in your time zone</span></div>
                <a href="mailto:hello@nncdigital.com" className="h-teal" style={{color:T,fontSize:14,fontWeight:700,textDecoration:"none"}}>hello@nncdigital.com →</a>
              </div>
            </div>
          )}
          {gTab==="india"&&(
            <div>
              <div style={{borderRadius:20,padding:"clamp(20px,3vw,36px)",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.08)",marginBottom:24}}>
                <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:28,flexWrap:"wrap"}}>
                  <span style={{fontSize:32}}>🇮🇳</span>
                  <div><h3 style={{color:"#fff",fontSize:"clamp(14px,1.4vw,18px)",fontWeight:800,margin:0}}>Nakshatra Namaha Creations Pvt. Ltd.</h3><p style={{color:"rgba(255,255,255,0.4)",fontSize:13,margin:"4px 0 0"}}>Engineering &amp; Delivery HQ — Bangalore, India</p></div>
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
                    <p style={{fontSize:"clamp(20px,2.2vw,26px)",fontWeight:900,color:T,margin:0}}>{s.n}</p>
                    <p style={{fontSize:11,color:"rgba(255,255,255,0.4)",margin:"4px 0 0",fontWeight:600,textTransform:"uppercase" as const,letterSpacing:"0.06em"}}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          M12 — FAQS
      ══════════════════════════════════════════════════ */}
      <section style={{padding:"48px 48px",background:`linear-gradient(180deg,${N1} 0%,${N2} 100%)`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"30%",right:"-5%",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
        <div style={{maxWidth:860,margin:"0 auto",position:"relative",zIndex:2}}>
          <div className="sec-head" style={{textAlign:"center",marginBottom:32}}>
            <SectionBadge label="FAQs"/>
            <SectionH2>Frequently Asked <GradText>Questions</GradText></SectionH2>
            <p style={{color:"rgba(255,255,255,0.45)",fontSize:"clamp(13px,1.2vw,15px)",lineHeight:1.75,maxWidth:520,margin:"0 auto"}}>Everything you need to know about SEO & digital marketing for businesses in Canada, USA &amp; UK.</p>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {FAQS.map((f,i)=>(
              <div key={i} onClick={()=>setFaq(faq===i?null:i)} style={{border:`1px solid ${faq===i?"rgba(0,201,167,0.4)":"rgba(255,255,255,0.08)"}`,borderRadius:16,background:faq===i?"rgba(0,201,167,0.06)":"rgba(255,255,255,0.02)",overflow:"hidden",cursor:"pointer",transition:"all .25s ease"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,padding:"clamp(14px,2vw,20px) clamp(14px,2vw,22px)"}}>
                  <div style={{display:"flex",alignItems:"center",gap:12}}>
                    <span style={{color:T,fontSize:12,fontWeight:800,background:"rgba(0,201,167,0.1)",border:"1px solid rgba(0,201,167,0.2)",borderRadius:8,padding:"4px 10px",flexShrink:0}}>Q{i+1}</span>
                    <span style={{fontSize:"clamp(13px,1.3vw,15.5px)",fontWeight:700,color:faq===i?"#fff":"rgba(255,255,255,0.78)",lineHeight:1.4,transition:"color .2s"}}>{f.q}</span>
                  </div>
                  <div style={{width:30,height:30,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,fontWeight:700,lineHeight:1,background:faq===i?T:"rgba(255,255,255,0.07)",border:`1px solid ${faq===i?T:"rgba(255,255,255,0.12)"}`,color:faq===i?"#000":"rgba(255,255,255,0.5)",transform:faq===i?"rotate(45deg)":"rotate(0deg)",transition:"all .25s ease"}}>+</div>
                </div>
                <div style={{maxHeight:faq===i?500:0,overflow:"hidden",transition:"max-height .38s ease"}}>
                  <p style={{padding:"0 clamp(14px,2vw,22px) 22px clamp(50px,6vw,82px)",color:"rgba(255,255,255,0.55)",fontSize:"clamp(13px,1.1vw,14.5px)",lineHeight:1.8,margin:0}}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-row" style={{display:"flex",justifyContent:"center",marginTop:44}}>
            <p style={{color:"rgba(255,255,255,0.4)",fontSize:14,marginBottom:20,width:"100%",textAlign:"center"}}>Still have questions? We respond within 24 hours.</p>
            {/* ✅ → /contact */}
            <a href="/contact" className="btn-teal" style={{display:"inline-block",padding:"13px 32px",borderRadius:10,border:"none",background:`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:700,fontSize:15,fontFamily:"'Poppins',sans-serif",cursor:"pointer",textDecoration:"none",transition:"transform .2s,box-shadow .2s"}}>Ask Us Anything →</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          M13 — CONTACT FORM
      ══════════════════════════════════════════════════ */}
      <section style={{padding:"48px 48px",background:`linear-gradient(180deg,${N2} 0%,${N0} 100%)`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"20%",left:"50%",transform:"translateX(-50%)",width:700,height:400,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
        <div style={{maxWidth:1180,margin:"0 auto",position:"relative",zIndex:2}}>
          <div className="sec-head" style={{textAlign:"center",marginBottom:32}}>
            <SectionBadge label="Get In Touch"/>
            <SectionH2>Ready to Build <GradText>Next-Level</GradText> Custom Digital Solutions?</SectionH2>
            <p style={{color:"rgba(255,255,255,0.45)",fontSize:"clamp(13px,1.3vw,15.5px)",lineHeight:1.75,maxWidth:540,margin:"0 auto"}}>Tell us about your marketing goals. We'll respond within 24 hours with a free audit and honest advice.</p>
          </div>
          <div className="cf-grid">
            {/* Left — Form */}
            <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:20,padding:"clamp(20px,3vw,36px)"}}>
              {cSubmitted?(
                <div style={{textAlign:"center",padding:"48px 0"}}>
                  <div style={{fontSize:56,marginBottom:20}}>✅</div>
                  <h3 style={{color:"#fff",fontSize:22,fontWeight:800,marginBottom:12}}>Message Sent!</h3>
                  <p style={{color:"rgba(255,255,255,0.5)",fontSize:15,lineHeight:1.7,marginBottom:28}}>Thank you — we'll contact you within 24 hours with your free marketing audit.</p>
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
                  <div style={{marginBottom:24}}><label style={{display:"block",fontSize:12.5,fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:7,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Project Description</label><textarea className="fi" style={{...iSLg,minHeight:110,resize:"vertical" as const}} placeholder="Tell us about your business, target audience, and marketing goals..." value={cForm.project} onChange={e=>setCF("project",e.target.value)}/></div>
                  <button className="btn-teal" type="submit" disabled={cLoading} style={{width:"100%",padding:15,borderRadius:10,border:"none",background:cLoading?"rgba(0,201,167,0.5)":`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:800,fontSize:15,fontFamily:"'Poppins',sans-serif",cursor:cLoading?"wait":"pointer",transition:"transform .2s,box-shadow .2s"}}>{cLoading?"Sending...":"Submit — Get My Free Audit →"}</button>
                  <p style={{color:"rgba(255,255,255,0.3)",fontSize:11.5,textAlign:"center",marginTop:12}}>🔒 Your information is 100% secure and never shared.</p>
                </form>
              )}
            </div>

            {/* Right — Info */}
            <div style={{display:"flex",flexDirection:"column",gap:20}}>
              <div style={{background:"rgba(0,201,167,0.05)",border:"1px solid rgba(0,201,167,0.18)",borderRadius:18,padding:"28px 26px"}}>
                <h3 style={{color:"#fff",fontSize:16,fontWeight:800,marginBottom:18}}>What Happens After You Submit?</h3>
                {[{s:"1",text:"We review your marketing goals within a few hours."},{s:"2",text:"A senior marketing strategist calls you within 24 hours."},{s:"3",text:"We prepare a free audit report with actionable recommendations."},{s:"4",text:"You decide — no pressure, no obligation."}].map((s,i)=>(
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