

"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const T  = "#00C9A7";
const TD = "#00a07a";
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";

const LOGOS = ["clients1.png","clients2.png","clients3.png","clients4.png","clients5.png",
  "clients6.png","clients7.png","clients8.png","clients9.png","clients10.png","clients11.png"];

const STATS_TOP = [
  { val:300, sfx:"+", label:"Automation Projects",    sub:"Across CA, USA & UK",          icon:"⚡" },
  { val:10,  sfx:"+", label:"Years of Expertise",     sub:"Digital since 2014",            icon:"💡" },
  { val:50,  sfx:"+", label:"Clients Globally",       sub:"CA · USA · UK · IN",            icon:"🌍" },
  { val:98,  sfx:"%", label:"Client Retention",       sub:"Long-term partnerships",        icon:"🤝" },
];

const CASES = [
  { industry:"Manufacturing", icon:"🏭", tag:"B2B Leads", tagClr:"#818cf8", tagBg:"rgba(99,102,241,.15)", tagBd:"rgba(99,102,241,.35)",
    title:"3× More Qualified Leads for a Canadian Manufacturer",
    challenge:"A B2B manufacturer relied entirely on cold outreach and trade shows. Leads fell off a cliff post-COVID with no digital nurture system in place.",
    solution:"We built a full HubSpot automation stack — LinkedIn lead capture, segmented email sequences, WhatsApp follow-ups, and a live ROI dashboard.",
    metrics:[{l:"Lead Volume",v:"3×",i:"📈"},{l:"Cost Per Lead",v:"−58%",i:"✅"},{l:"Pipeline",v:"+$1.2M",i:"💰"}] },
  { industry:"Healthcare", icon:"🏥", tag:"Patient Growth", tagClr:"#22c55e", tagBg:"rgba(34,197,94,.12)", tagBd:"rgba(34,197,94,.3)",
    title:"42% More Booked Appointments via Automation",
    challenge:"A UK clinic group had no follow-up process — enquiries fell through the cracks, referrals were manual, and appointment no-shows were costing revenue.",
    solution:"NNC built a GDPR-compliant automation: web form → CRM → WhatsApp confirmation → 24hr email reminder → SMS nudge, all triggered automatically.",
    metrics:[{l:"More Bookings",v:"+42%",i:"📅"},{l:"No-shows",v:"−60%",i:"✅"},{l:"CSAT Score",v:"4.8★",i:"⭐"}] },
  { industry:"D2C E-Commerce", icon:"🛒", tag:"E-Commerce", tagClr:T, tagBg:"rgba(0,201,167,.12)", tagBd:"rgba(0,201,167,.3)",
    title:"2.4× ROAS for a US D2C Brand",
    challenge:"A US direct-to-consumer brand was spending heavily on Meta Ads with no nurture after the first click — 90% of leads were wasted with zero follow-up.",
    solution:"We built a Meta + Google Ads integration, abandoned cart sequences, post-purchase flows, and a loyalty automation — all inside ActiveCampaign.",
    metrics:[{l:"ROAS",v:"2.4×",i:"💸"},{l:"Revenue",v:"+68%",i:"📈"},{l:"Cart Recovery",v:"38%",i:"✅"}] },
];

const SERVICES = [
  {icon:"🎯",title:"Lead Capture & CRM Integration",    desc:"Web forms, chatbots, and landing pages that feed qualified leads directly into HubSpot, Salesforce, or your CRM — with full attribution.",              tag:"Capture", slug:"lead-capture"},
  {icon:"📧",title:"Email Nurture Workflows",           desc:"Segmented drip sequences, behavioural triggers, and lifecycle emails that move leads from awareness to booked call — automatically.",               tag:"Email", slug:"email-nurture"},
  {icon:"💬",title:"WhatsApp Automation",               desc:"WhatsApp Business API automation for lead follow-up, appointment confirmations, and re-engagement — fully GDPR/PIPEDA compliant.",                  tag:"WhatsApp", slug:"whatsapp-automation"},
  {icon:"📣",title:"Google & Meta Ads Integration",     desc:"Connect your ad platforms to your CRM — so every click is tracked, attributed, and enrolled in the right nurture sequence automatically.",         tag:"Ads", slug:"ads-integration"},
  {icon:"🔧",title:"Funnel Engineering",                desc:"End-to-end sales funnel design — from first touch to closed deal — with automation at every stage to eliminate manual tasks.",                     tag:"Funnel", slug:"funnel-engineering"},
  {icon:"🔍",title:"SEO & Content Marketing",           desc:"Always-on content and SEO strategy driving organic traffic into your automation funnel — turning search intent into booked meetings.",             tag:"SEO", slug:"seo-content"},
  {icon:"📈",title:"Conversion Rate Optimisation",      desc:"A/B testing, landing page optimisation, form testing, and heatmap analysis to turn more visitors into qualified leads.",                           tag:"CRO", slug:"cro"},
  {icon:"📊",title:"Analytics & Reporting",             desc:"Live dashboards showing cost per lead, revenue per channel, funnel drop-offs, and pipeline value — so every decision is data-driven.",           tag:"Analytics", slug:"analytics-reporting"},
  {icon:"🏢",title:"B2B Marketing Automation",          desc:"LinkedIn outreach sequences, ABM campaigns, and multi-touch B2B nurture workflows built for complex sales cycles in Canada, USA & UK.",           tag:"B2B", slug:"b2b-automation"},
  {icon:"🔄",title:"CRM Setup & Optimisation",          desc:"HubSpot, ActiveCampaign, and Salesforce setup, migration, and optimisation — pipelines, deal stages, and automation rules built for your team.",  tag:"CRM", slug:"crm-setup"},
  {icon:"📱",title:"SMS & Push Campaigns",              desc:"Automated SMS sequences and push notification campaigns triggered by user behaviour — for mobile-first customer journeys.",                        tag:"SMS", slug:"sms-push"},
  {icon:"🤖",title:"Chatbot & AI Lead Qualification",  desc:"AI chatbots that qualify leads 24/7, book meetings, and update your CRM — deployed on your website, WhatsApp, and Facebook Messenger.",          tag:"AI", slug:"chatbot-ai"},
];

const BENEFITS = [
  {num:"01",icon:"⚡",title:"Always-On Lead Nurture",   desc:"Your automation works 24/7 — capturing leads at 2am, sending WhatsApp follow-ups the instant someone submits a form, and moving prospects through your funnel while your team sleeps.",  tags:["24/7","Trigger-Based","Multi-Channel"]},
  {num:"02",icon:"📊",title:"Full CRM Attribution",     desc:"Every lead, every touchpoint, every deal is tracked back to its source — so you know exactly which campaigns are generating revenue and which are wasting budget.",                     tags:["HubSpot","Salesforce","ROI Tracking"]},
  {num:"03",icon:"💬",title:"WhatsApp Reach",           desc:"WhatsApp has 98% open rates vs 22% for email. We integrate the WhatsApp Business API into your automation — for Canada, USA, and UK clients — fully GDPR and PIPEDA compliant.",         tags:["98% Open Rate","WhatsApp API","GDPR"]},
  {num:"04",icon:"💰",title:"Measurable ROI",           desc:"Every automation we build is tied to revenue metrics — cost per lead, pipeline value, closed-won attribution, and ROAS. You see exactly what your marketing investment is returning.",      tags:["ROAS","Pipeline","Revenue"]},
];

const TOOLS = [
  {icon:"🟠",name:"HubSpot",              desc:"All-in-one CRM, email, and automation platform — our primary stack for mid-market and enterprise clients.",               clr:"rgba(255,91,0,.08)",   bd:"rgba(255,91,0,.22)"},
  {icon:"⚡",name:"ActiveCampaign",        desc:"Powerful email automation and CRM for SMBs — ideal for complex drip sequences and behavioural triggers.",                 clr:"rgba(0,136,204,.08)",  bd:"rgba(0,136,204,.22)"},
  {icon:"🐵",name:"Mailchimp",            desc:"Email marketing and simple automation for growing businesses — campaigns, transactional email, and A/B testing.",           clr:"rgba(255,208,0,.08)",  bd:"rgba(255,208,0,.22)"},
  {icon:"📣",name:"Meta Ads API",         desc:"Direct API integration for Facebook and Instagram ad campaigns — with CRM sync, audience matching, and lead ad automation.", clr:"rgba(24,119,242,.08)", bd:"rgba(24,119,242,.22)"},
  {icon:"🔵",name:"Google Ads API",       desc:"Google Search, Display, and YouTube ad automation with conversion tracking, smart bidding, and CRM attribution.",           clr:"rgba(66,133,244,.08)", bd:"rgba(66,133,244,.22)"},
  {icon:"💬",name:"WhatsApp Business API",desc:"Official WhatsApp Business API for automated lead follow-up, appointment reminders, and re-engagement sequences.",         clr:"rgba(37,211,102,.08)", bd:"rgba(37,211,102,.22)"},
  {icon:"⚙️",name:"Zapier",              desc:"No-code automation connecting 5,000+ apps — perfect for bridging your CRM with any tool in your marketing stack.",          clr:"rgba(255,78,0,.08)",   bd:"rgba(255,78,0,.22)"},
  {icon:"🔮",name:"Make (Integromat)",    desc:"Advanced visual automation builder for complex multi-step workflows — API calls, data transformation, and conditional logic.", clr:"rgba(108,92,231,.08)", bd:"rgba(108,92,231,.22)"},
];

const HIRE_LEFT = [
  {icon:"🏢",title:"Enterprises",  desc:"Enterprise marketing automation with multi-brand workflows, advanced segmentation, Salesforce/HubSpot integration, and boardroom-ready attribution reporting."},
  {icon:"🚀",title:"Start-ups",    desc:"Lean automation stacks that punch above their weight — capturing and nurturing leads from day one without needing a full marketing team."},
  {icon:"🎯",title:"Agencies",     desc:"White-label marketing automation for agencies — we build the systems, you deliver results to clients. Full documentation and handoff included."},
];
const HIRE_RIGHT = [
  {icon:"📊",title:"Analytical",    desc:"Data-first automation — every workflow is tied to a KPI. We build dashboards, attribution models, and reporting pipelines alongside every campaign."},
  {icon:"⚙️",title:"Operational",  desc:"Automate lead routing, follow-up sequences, appointment booking, and CRM updates — eliminating manual tasks that slow your sales team down."},
  {icon:"🤝",title:"Collaborative", desc:"Connect marketing, sales, and customer success on a single automation platform — with shared pipelines, unified reporting, and coordinated outreach."},
];

const AI_FEATS = [
  {icon:"🧠",title:"AI Lead Scoring & Prioritisation",   desc:"Machine learning models score every lead in your CRM based on behaviour, demographics, and engagement — so your sales team always calls the hottest prospects first.",          clr:"rgba(0,201,167,.08)", bd:"rgba(0,201,167,.2)"},
  {icon:"🎯",title:"Predictive Send-Time Optimisation",  desc:"AI analyses when each individual contact is most likely to open, click, and convert — then sends emails and WhatsApp messages at the optimal moment for each person.",           clr:"rgba(99,102,241,.08)",bd:"rgba(99,102,241,.2)"},
  {icon:"🤖",title:"AI Copywriting & Personalisation",   desc:"Dynamic email and ad copy generated and personalised by AI for each segment — so every message feels 1-to-1, even when sent to 10,000 contacts simultaneously.",              clr:"rgba(0,201,167,.08)", bd:"rgba(0,201,167,.2)"},
];

const ACCORDION_L = [
  {icon:"🎯",title:"Lead Scoring & Segmentation",       desc:"Automatic lead scoring based on page visits, email opens, form fills, and ad clicks — so every lead is routed to the right sequence at the right time."},
  {icon:"📧",title:"Multi-Channel Nurture Sequences",   desc:"Coordinated email, WhatsApp, SMS, and retargeting ads that follow your prospect across every channel — delivering the right message at each stage of the funnel."},
  {icon:"📊",title:"Revenue Attribution Dashboards",    desc:"Live dashboards showing first-touch and multi-touch attribution — so you can see exactly which campaigns, channels, and messages are generating closed revenue."},
  {icon:"🔒",title:"GDPR, PIPEDA & CASL Compliance",   desc:"Every automation we build is compliant by default — consent capture, unsubscribe flows, data deletion requests, and audit trails for UK, Canadian, and US regulations."},
];
const ACCORDION_R = [
  {icon:"🔗",title:"CRM Pipeline Automation",           desc:"Deal stage triggers, automatic task assignment, follow-up reminders, and pipeline velocity tracking — so no lead ever falls through the cracks again."},
  {icon:"📣",title:"Ad Retargeting Integration",        desc:"Sync your CRM audiences with Meta and Google — serving personalised retargeting ads only to the right leads at the right funnel stage."},
  {icon:"🛒",title:"E-Commerce Automation",             desc:"Abandoned cart sequences, post-purchase flows, win-back campaigns, and loyalty triggers — all connected to Shopify, WooCommerce, or custom platforms."},
  {icon:"📈",title:"A/B Testing & CRO",                 desc:"Continuous landing page, email subject line, and CTA testing — with statistical significance tracking to ensure every optimisation is real, not random."},
];

const FAQS = [
  {q:"How quickly can automation generate leads?",
   a:"Most clients see their first automated leads within 2–4 weeks of going live. The timeline depends on your existing traffic and ad spend — if you already have traffic, we can typically activate lead capture automation within 7–10 business days. For businesses starting from zero traffic, we build the organic and paid channels in parallel — typically 6–10 weeks to a fully live, revenue-generating automation stack. All timelines are fixed in your project milestone plan before work begins."},
  {q:"Do you integrate with our existing CRM?",
   a:"Yes. We integrate with HubSpot, Salesforce, Pipedrive, ActiveCampaign, Zoho, and custom CRMs via API. For Canadian clients we also ensure PIPEDA and CASL compliance in all data handling. For UK/EU clients, full GDPR consent management is built in. We don't just 'connect' your CRM — we build the pipeline stages, deal properties, lead scoring rules, and automation triggers from scratch, or optimise what you already have. A typical CRM integration and automation setup takes 3–5 weeks."},
  {q:"Can you set up WhatsApp automation for Canada and the UK?",
   a:"Yes. We use the official WhatsApp Business API — approved and compliant for Canadian (PIPEDA/CASL), UK (GDPR), and US (CAN-SPAM/CCPA) businesses. WhatsApp automation includes: instant lead follow-up, appointment confirmation sequences, no-show re-engagement, and post-purchase flows. WhatsApp has a 98% open rate vs 22% for email — making it the highest-ROI channel in most of our client automation stacks. Setup typically takes 2–3 weeks including compliance review."},
  {q:"What ad platforms do you integrate with?",
   a:"We integrate with Google Ads (Search, Display, YouTube, Performance Max), Meta Ads (Facebook and Instagram), LinkedIn Ads, TikTok Ads, and Programmatic/Display networks. All integrations include bidirectional CRM sync — so offline conversions and closed deals feed back into the ad platforms as conversion signals, improving your smart bidding algorithms. For Canadian and UK clients, we ensure geo-targeting, consent mode v2 (Google), and privacy-compliant audiences are configured correctly."},
  {q:"How do you measure marketing automation ROI?",
   a:"We build a live revenue attribution dashboard for every client — showing cost per lead by channel, pipeline value generated, average deal velocity, closed-won revenue attributed to each automation, and ROAS for paid channels. For Canadian clients we report in CAD; for UK clients in GBP. Monthly performance reviews are standard across all retainers. Typically, clients see a positive ROI within 90 days — and our 98% client retention rate reflects how consistently we deliver."},
  {q:"Do you offer ongoing management or a one-time setup?",
   a:"Both. We offer a one-time automation build — where we design, build, test, and hand over the full system with documentation and training. We also offer monthly retainers that include ongoing campaign management, A/B testing, new workflow builds, ad optimisation, and monthly reporting. Most clients start with a build engagement and move onto a retainer once they see results. Retainers start from CAD $2,500 / £1,900 per month depending on scope."},
];

const INT_OFFICES = [
  {flag:"🇨🇦",city:"Toronto, Canada", phone:"+1 647-XXX-XXXX", email:"hello@nncdigital.com",tz:"EST / EDT"},
  {flag:"🇺🇸",city:"New York, USA",   phone:"+1 631-XXX-XXXX", email:"hello@nncdigital.com",tz:"EST / EDT"},
  {flag:"🇬🇧",city:"London, UK",      phone:"+44 20-XXXX-XXXX",email:"hello@nncdigital.com",tz:"GMT / BST"},
];
const INDIA_OFFICES = [
  {city:"Bangalore (HQ)",phone:"+91 9900566466",note:"Primary engineering hub"},
  {city:"Mysore",        phone:null,             note:"Design & QA"},
  {city:"Mumbai",        phone:null,             note:"Sales & partnerships"},
  {city:"Hyderabad",     phone:null,             note:"Mobile & cloud"},
];
const WCU_POINTS = [
  {icon:"🏆",text:"8+ years of proven digital excellence"},
  {icon:"🌍",text:"Serving Canada, USA & UK markets"},
  {icon:"⚡",text:"300+ automation projects delivered"},
  {icon:"🤝",text:"Client-first culture, enterprise-grade quality"},
  {icon:"🔒",text:"GDPR, PIPEDA & CASL compliant delivery"},
  {icon:"📊",text:"Full-stack: CRM, Ads, Email, WhatsApp, AI"},
];
const WCU_STATS = [{n:300,s:"+",l:"Automations Built"},{n:50,s:"+",l:"Clients Served"},{n:98,s:"%",l:"Retention Rate"},{n:25,s:"+",l:"Industries"}];
const SERVICES_LIST = ["Marketing Automation","Lead Generation","CRM Integration","Email Marketing","WhatsApp Automation","Google Ads","Meta Ads","SEO & Content","Web Development","Other"];
const DIAL_CODES = [{code:"+1",flag:"🇨🇦"},{code:"+1",flag:"🇺🇸"},{code:"+44",flag:"🇬🇧"},{code:"+91",flag:"🇮🇳"}];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const c=ref.current; if(!c)return;
    const ctx=c.getContext("2d")!;
    let W=c.width=c.offsetWidth,H=c.height=c.offsetHeight;
    const pts=Array.from({length:50},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.4+.3,a:Math.random()*.38+.07}));
    let raf:number;
    const draw=()=>{ctx.clearRect(0,0,W,H);pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(0,201,167,${p.a})`;ctx.fill();});for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<90){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle=`rgba(0,201,167,${.06*(1-d/90)})`;ctx.lineWidth=.5;ctx.stroke();}}raf=requestAnimationFrame(draw);};
    draw();const rz=()=>{W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;};window.addEventListener("resize",rz);return()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",rz);};
  },[]);
  return <canvas ref={ref} style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}}/>;
}

function Counter({to,sfx=""}:{to:number;sfx?:string}){
  const ref=useRef<HTMLSpanElement>(null);const[v,setV]=useState(0);const started=useRef(false);
  useEffect(()=>{const el=ref.current;if(!el)return;const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting&&!started.current){started.current=true;let step=0;const t=setInterval(()=>{step++;const ease=1-Math.pow(1-step/70,3);setV(Math.round(ease*to));if(step>=70){setV(to);clearInterval(t);}},1800/70);}},{threshold:.25});obs.observe(el);return()=>obs.disconnect();},[to]);
  return <span ref={ref}>{v}{sfx}</span>;
}
function SectionBadge({label}:{label:string}){return(<div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.22)",borderRadius:100,padding:"6px 18px",marginBottom:16}}><span style={{width:6,height:6,borderRadius:"50%",background:T,display:"block",boxShadow:`0 0 8px ${T}`}}/><span style={{color:T,fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>{label}</span></div>);}
function SectionH2({children}:{children:React.ReactNode}){return <h2 style={{fontSize:"clamp(22px,3vw,40px)",fontWeight:900,color:"#fff",letterSpacing:"-0.02em",lineHeight:1.15,marginBottom:14}}>{children}</h2>;}
function GradText({children}:{children:React.ReactNode}){return <span style={{background:`linear-gradient(135deg,${T},#1fd1b5)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{children}</span>;}
function AccItem({item,open,toggle}:{item:{icon:string;title:string;desc:string};open:boolean;toggle:()=>void}) {
  const [windowWidth, setWindowWidth] = useState(0);
  
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const isMobile = windowWidth <= 640;
  
  return(
    <div onClick={toggle} style={{borderRadius:14,border:`1px solid ${open?"rgba(0,201,167,0.4)":"rgba(255,255,255,0.08)"}`,background:open?"rgba(0,201,167,0.06)":"rgba(255,255,255,0.02)",overflow:"hidden",cursor:"pointer",transition:"border-color .25s,background .25s"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:isMobile ? "14px 16px" : "18px 22px",gap:isMobile ? 10 : 14}}>
        <div style={{display:"flex",alignItems:"center",gap:isMobile ? 10 : 14}}>
          <div style={{width:isMobile ? 40 : 44,height:isMobile ? 40 : 44,borderRadius:12,flexShrink:0,background:open?"rgba(0,201,167,0.15)":"rgba(255,255,255,0.05)",border:`1px solid ${open?"rgba(0,201,167,0.3)":"rgba(255,255,255,0.1)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:isMobile ? 18 : 20,transition:"background .25s"}}>{item.icon}</div>
          <span style={{fontSize:isMobile ? 13 : 15,fontWeight:700,color:open?"#fff":"rgba(255,255,255,0.72)",fontFamily:"'Poppins',sans-serif",transition:"color .2s"}}>{item.title}</span>
        </div>
        <div style={{width:isMobile ? 24 : 28,height:isMobile ? 24 : 28,borderRadius:"50%",flexShrink:0,background:open?T:"rgba(255,255,255,0.07)",border:`1px solid ${open?T:"rgba(255,255,255,0.14)"}`,display:"flex",alignItems:"center",justifyContent:"center",color:open?"#000":"rgba(255,255,255,0.55)",fontSize:isMobile ? 16 : 18,fontWeight:700,lineHeight:1,transform:open?"rotate(45deg)":"rotate(0deg)",transition:"all .25s ease"}}>+</div>
      </div>
      <div style={{maxHeight:open?220:0,overflow:"hidden",transition:"max-height .35s ease"}}>
        <p style={{padding:isMobile ? "0 16px 16px 60px" : "0 22px 20px 80px",color:"rgba(255,255,255,0.5)",fontSize:isMobile ? 12 : 14,lineHeight:1.75,fontFamily:"'Poppins',sans-serif",fontWeight:400,margin:0}}>{item.desc}</p>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function MarketingAutomationPage() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 640;
  const isTablet = windowWidth > 640 && windowWidth <= 1024;
  const isDesktop = windowWidth > 1024;

  const [form,setForm]=useState({firstName:"",lastName:"",phone:"",dialCode:"+1",email:"",service:"",message:""});
  const [submitted,setSubmitted]=useState(false);const[loading,setLoading]=useState(false);
  const setF=(k:string,v:string)=>setForm(f=>({...f,[k]:v}));
  const handleSubmit=(e:React.FormEvent)=>{e.preventDefault();setLoading(true);setTimeout(()=>{setLoading(false);setSubmitted(true);},1200);};
  const [story,setStory]=useState(0);
  const [accL,setAccL]=useState<number|null>(0);const[accR,setAccR]=useState<number|null>(0);
  const [hireL,setHireL]=useState<number|null>(0);const[hireR,setHireR]=useState<number|null>(0);
  const [faq,setFaq]=useState<number|null>(0);
  const [gTab,setGTab]=useState<"int"|"india">("int");

  const [cForm,setCForm]=useState({name:"",phone:"",dialCode:"+1",email:"",service:"",project:""});
  const [cSubmitted,setCSubmitted]=useState(false);const[cLoading,setCLoading]=useState(false);
  const setCF=(k:string,v:string)=>setCForm(f=>({...f,[k]:v}));
  const handleCSubmit=(e:React.FormEvent)=>{e.preventDefault();setCLoading(true);setTimeout(()=>{setCLoading(false);setCSubmitted(true);},1200);};

  // Responsive input styles
  const iS:React.CSSProperties={
    width:"100%",
    padding: isMobile ? "10px 12px" : "11px 14px",
    borderRadius:9,
    background:"rgba(255,255,255,0.07)",
    border:"1px solid rgba(255,255,255,0.14)",
    color:"#fff",
    fontSize: isMobile ? "13px" : "13.5px",
    fontFamily:"'Poppins',sans-serif",
    outline:"none",
    boxSizing:"border-box",
    transition:"border-color .2s,background .2s"
  };
  
  const iSLg:React.CSSProperties={
    ...iS,
    padding: isMobile ? "12px 14px" : "13px 16px",
    fontSize: isMobile ? "14px" : "14.5px"
  };

  return(<>
  <Navbar/>
  <div style={{fontFamily:"'Poppins',sans-serif"}}>
<style>{`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
  
  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  @keyframes heroFadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
  @keyframes heroBlink{0%,100%{opacity:1}50%{opacity:0}}
  @keyframes heroGlow{0%,100%{box-shadow:0 0 16px rgba(0,201,167,.18)}50%{box-shadow:0 0 40px rgba(0,201,167,.45)}}
  @keyframes heroPulse{0%,100%{opacity:.1;transform:scale(1)}50%{opacity:.22;transform:scale(1.08)}}
  @keyframes heroSpin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
  @keyframes heroScan{0%{top:-2px}100%{top:100%}}
  @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  @keyframes sbFadeUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
  @keyframes sbLineGrow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
  @keyframes ctaBgShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  @keyframes aiScan{0%{top:10%}100%{top:90%}}
  @keyframes aiPulse{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}
  @keyframes wcuPulse{0%,100%{box-shadow:0 0 0 12px rgba(0,201,167,.15),0 0 0 24px rgba(0,201,167,.07)}50%{box-shadow:0 0 0 18px rgba(0,201,167,.2),0 0 0 36px rgba(0,201,167,.06)}}
  @keyframes kbFadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
  @keyframes flowPulse{0%,100%{opacity:.4;transform:scale(1)}50%{opacity:1;transform:scale(1.04)}}
  @keyframes flowLine{0%{width:0}100%{width:100%}}
  
  /* Responsive button styles */
  .btn-teal, .btn-outline {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s;
    min-width: 140px;
  }
  
  @media (min-width: 768px) {
    .btn-teal, .btn-outline {
      padding: 14px 32px;
      font-size: 15px;
      min-width: 160px;
    }
  }
  
  @media (max-width: 640px) {
    .btn-teal, .btn-outline {
      width: 100%;
      min-width: 0;
    }
  }
  
  .btn-teal {
    background: linear-gradient(135deg, ${T}, ${TD});
    color: #000;
    border: none;
  }
  .btn-teal:hover { transform:translateY(-3px); box-shadow:0 12px 32px rgba(0,201,167,.25); }
  .btn-outline {
    background:transparent;
    color:${T};
    border:1.5px solid rgba(0,201,167,0.35);
  }
  .btn-outline:hover { border-color:${T}; background:rgba(0,201,167,0.07); }
  
  .h-teal:hover{color:${T}!important;}
  .fi:focus{border-color:rgba(0,201,167,0.5)!important;background:rgba(0,201,167,0.06)!important;}
  .fi::placeholder{color:rgba(255,255,255,0.28);}
  .fi option{background:#0a1f38;color:#fff;}
  .ma-badge:hover{background:rgba(0,201,167,0.12)!important;border-color:rgba(0,201,167,0.35)!important;color:#fff!important;}
  .cl-track{display:flex;gap:64px;width:max-content;animation:marquee 32s linear infinite;}
  .cl-track:hover{animation-play-state:paused;}
  .ss-tab{padding:10px 20px;border-radius:100px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.5);font-size:13.5px;font-weight:600;font-family:'Poppins',sans-serif;cursor:pointer;transition:all .22s ease;display:flex;align-items:center;gap:8px;}
  .ss-tab.act{border-color:rgba(0,201,167,0.45);background:rgba(0,201,167,0.1);color:${T};}
  .ss-tab:hover:not(.act){border-color:rgba(255,255,255,0.2);color:rgba(255,255,255,0.8);}
  
  .svc-card{position:relative;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:18px;padding:24px 20px;display:flex;flex-direction:column;gap:12px;transition:transform .3s,box-shadow .3s,border-color .3s,background .3s;cursor:default;overflow:hidden;}
  .svc-card:hover{transform:translateY(-6px);border-color:rgba(0,201,167,0.35);background:rgba(0,201,167,0.04);box-shadow:0 20px 60px rgba(0,0,0,0.4);}
  .svc-card::after{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,${T},transparent);border-radius:18px 18px 0 0;opacity:0;transition:opacity .3s;}
  .svc-card:hover::after{opacity:1;}
  .svc-card:hover .svc-icon{background:rgba(0,201,167,0.18)!important;transform:scale(1.08);}
  
  .pt-card{border-radius:18px;padding:20px 16px;position:relative;overflow:hidden;transition:transform .28s,box-shadow .28s;cursor:default;}
  .pt-card:hover{transform:translateY(-7px);box-shadow:0 20px 50px rgba(0,0,0,0.4);}
  .pt-card::after{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,${T},transparent);opacity:0;transition:opacity .28s;}
  .pt-card:hover::after{opacity:1;}
  .pt-card:hover .pt-icon{transform:scale(1.1) rotate(-5deg)!important;}
  
  .kb-card{position:relative;display:flex;gap:20px;align-items:flex-start;padding:24px 20px;border-radius:20px;border:1px solid rgba(255,255,255,0.07);background:rgba(255,255,255,0.02);transition:transform .3s,border-color .3s,background .3s,box-shadow .3s;cursor:default;animation:kbFadeUp .6s ease both;}
  .kb-card:hover{transform:translateY(-6px);border-color:rgba(0,201,167,0.3);background:rgba(0,201,167,0.04);box-shadow:0 20px 56px rgba(0,0,0,0.35);}
  .kb-card::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;border-radius:20px 20px 0 0;background:linear-gradient(90deg,transparent,${T},transparent);opacity:0;transition:opacity .3s;}
  .kb-card:hover::before{opacity:1;}
  
  .ai-feat-card:hover{transform:translateX(6px)!important;box-shadow:0 8px 32px rgba(0,0,0,0.3)!important;}
  .ai-feat-card:hover .ai-icon-w{transform:scale(1.1) rotate(-4deg)!important;}
  .wcu-point:hover{border-color:rgba(0,201,167,0.25)!important;background:rgba(0,201,167,0.04)!important;transform:translateX(6px)!important;}
  .wcu-stat:hover{transform:translateY(-4px)!important;background:rgba(0,201,167,0.1)!important;}
  .faq-item{border-radius:14px;border:1px solid rgba(255,255,255,0.07);background:rgba(255,255,255,0.02);overflow:hidden;transition:border-color .25s,background .25s;cursor:pointer;}
  .faq-item.fopen{border-color:rgba(0,201,167,0.35);background:rgba(0,201,167,0.04);}
  .faq-item:hover{border-color:rgba(0,201,167,0.22);}
  .gp-card:hover{transform:translateY(-5px)!important;box-shadow:0 20px 48px rgba(0,0,0,0.4)!important;border-color:rgba(0,201,167,0.3)!important;}
  .gp-ind:hover{background:rgba(0,201,167,0.06)!important;border-color:rgba(0,201,167,0.2)!important;}
  .flow-node:hover{border-color:rgba(0,201,167,0.5)!important;background:rgba(0,201,167,0.1)!important;transform:translateY(-3px)!important;}
  .card-hover:hover{transform:translateY(-6px)!important;border-color:rgba(0,201,167,0.3)!important;background:rgba(0,201,167,0.04)!important;box-shadow:0 20px 56px rgba(0,0,0,0.35)!important;}

  /* Responsive grid layouts */
  .hero-layout{display:grid;grid-template-columns:1fr 460px;gap:56px;align-items:center;max-width:1280px;margin:0 auto;position:relative;z-index:2;width:100%;padding:0 24px;}
  .svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
  .pt-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
  .kb-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;}
  .two-col{display:grid;grid-template-columns:1fr 1fr;gap:32px;}
  .two-col-wide{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;}
  .stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:1200px;margin:0 auto;}
  .wcu-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;}
  .gp-offices{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
  .gp-ind-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
  .gp-india-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;}
  .cf-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;}
  .cf-name{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
  
  /* Responsive breakpoints */
  @media(max-width:1200px){
    .hero-layout{grid-template-columns:1fr 400px;gap:40px;}
  }
  @media(max-width:1024px){
    .hero-layout{grid-template-columns:1fr!important;gap:40px!important;}
    .pt-grid{grid-template-columns:repeat(3,1fr)!important;}
    .two-col-wide{gap:40px!important;}
  }
  @media(max-width:960px){
    .svc-grid{grid-template-columns:repeat(2,1fr)!important;}
    .two-col-wide{grid-template-columns:1fr!important;gap:40px!important;}
    .wcu-stats{grid-template-columns:1fr 1fr!important;}
    .gp-offices{grid-template-columns:1fr!important;}
    .gp-india-stats{grid-template-columns:repeat(2,1fr)!important;}
  }
  @media(max-width:768px){
    section{padding:60px 24px!important;}
    .two-col{grid-template-columns:1fr!important;gap:20px!important;}
    .kb-grid{grid-template-columns:1fr!important;}
    .cf-grid{grid-template-columns:1fr!important;gap:40px!important;}
    .gp-ind-grid{grid-template-columns:1fr!important;}
    .cf-name{grid-template-columns:1fr!important;gap:12px!important;}
  }
  @media(max-width:720px){
    .pt-grid{grid-template-columns:repeat(2,1fr)!important;}
  }
  @media(max-width:640px){
    section{padding:50px 20px!important;}
    .stats-row{grid-template-columns:repeat(2,1fr)!important;}
  }
  @media(max-width:580px){
    .svc-grid{grid-template-columns:1fr!important;}
  }
  @media(max-width:480px){
    .hero-layout{padding:60px 16px 40px!important;}
    .pt-grid{grid-template-columns:1fr!important;}
    .gp-india-stats{grid-template-columns:1fr 1fr!important;}
    .ss-tab{width:100%;justify-content:center;font-size:12px;padding:8px 14px;}
    .flow-node{min-width:100px!important;padding:16px 12px!important;}
    .flow-node div{font-size:11px!important;}
  }
`}</style>

{/* ══ M1 — HERO ══════════════════════════════════════════════════════════════ */}
<section style={{padding: isMobile ? "10px 16px 60px" : isTablet ? "96px 32px 80px" : "90px 48px 80px",background:`linear-gradient(135deg,${N0} 0%,#041628 45%,${N0} 100%)`,position:"relative",overflow:"hidden",minHeight: isMobile ? "auto" : "90vh",display:"flex",alignItems:"center"}}>
  <Particles/>
  {/* <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:1,backgroundImage:`linear-gradient(rgba(0,201,167,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.035) 1px,transparent 1px)`,backgroundSize:"60px 60px"}}/> */}
  {!isMobile && (
    <>
      <div style={{position:"absolute",width: isTablet ? 500 : 650,height: isTablet ? 500 : 650,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,201,167,.14) 0%,transparent 65%)",top:"40%",left:"-10%",transform:"translateY(-50%)",animation:"heroPulse 8s ease-in-out infinite",pointerEvents:"none",zIndex:1}}/>
      <div style={{position:"absolute",width: isTablet ? 300 : 400,height: isTablet ? 300 : 400,borderRadius:"50%",background:"radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 65%)",top:"10%",right:"5%",animation:"heroPulse 10s ease-in-out infinite .5s",pointerEvents:"none",zIndex:1}}/>
      <div style={{position:"absolute",width: isTablet ? 400 : 520,height: isTablet ? 400 : 520,borderRadius:"50%",border:"1px dashed rgba(0,201,167,.08)",top:"50%",left:"-12%",transform:"translateY(-50%)",animation:"heroSpin 55s linear infinite",pointerEvents:"none",zIndex:1}}/>
      {/* <div style={{position:"absolute",left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(0,201,167,.28),transparent)",animation:"heroScan 7s linear infinite",pointerEvents:"none",zIndex:2}}/> */}
    </>
  )}
  <div className="hero-layout">
    <div style={{animation:"heroFadeUp .7s ease both"}}>
      <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.25)",borderRadius:100,padding: isMobile ? "6px 14px" : "7px 18px",marginBottom: isMobile ? 16 : 28,animation:"heroGlow 3s ease-in-out infinite"}}>
        <span style={{width: isMobile ? 6 : 7,height: isMobile ? 6 : 7,borderRadius:"50%",background:T,boxShadow:`0 0 10px ${T}`,animation:"heroBlink 1.4s ease-in-out infinite"}}/>
        <span style={{color:T,fontSize: isMobile ? 10 : 11.5,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase" as const}}>Marketing Automation — Canada, USA &amp; UK</span>
      </div>
      <h1 style={{fontSize: isMobile ? "28px" : isTablet ? "36px" : "48px",fontWeight:900,lineHeight:1.12,marginBottom: isMobile ? 14 : 22,letterSpacing:"-0.025em",color:"#fff"}}>
        Marketing Automation Services That <GradText>Generate and Nurture</GradText> Qualified Leads
      </h1>
      <p style={{color:"rgba(255,255,255,0.52)",fontSize: isMobile ? "14px" : isTablet ? "15px" : "16.5px",lineHeight:1.85,marginBottom: isMobile ? 18 : 28,maxWidth:600}}>
        Marketing automation is an always-on system that captures, qualifies, nurtures, and converts leads — while your team focuses on closing deals. We build it, you scale it.
      </p>
      {/* Channel pills */}
      <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom: isMobile ? 16 : 28}}>
        {[{i:"📧",l:"Email Sequences"},{i:"💬",l:"WhatsApp API"},{i:"📣",l:"Google Ads"},{i:"🎯",l:"Meta Ads"},{i:"🔗",l:"CRM Integration"},{i:"📊",l:"Live Dashboards"}].map(b=>(
          <span key={b.l} className="ma-badge" style={{display:"inline-flex",alignItems:"center",gap:6,padding: isMobile ? "5px 11px" : "6px 13px",borderRadius:100,border:"1px solid rgba(255,255,255,0.12)",background:"rgba(255,255,255,0.04)",color:"rgba(255,255,255,0.65)",fontSize: isMobile ? 11 : 12.5,fontWeight:600,transition:"all .2s",cursor:"default"}}>{b.i} {b.l}</span>
        ))}
      </div>
      <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom: isMobile ? 20 : 36}}>
        {[{i:"🔵",l:"Google Partner"},{i:"🏆",l:"ISO Certified"},{i:"🔒",l:"GDPR Compliant"},{i:"🍁",l:"PIPEDA Ready"},{i:"⭐",l:"Clutch Top Agency"}].map(b=>(
          <span key={b.l} className="ma-badge" style={{display:"inline-flex",alignItems:"center",gap:6,padding: isMobile ? "5px 11px" : "6px 13px",borderRadius:100,border:"1px solid rgba(255,255,255,0.12)",background:"rgba(255,255,255,0.04)",color:"rgba(255,255,255,0.65)",fontSize: isMobile ? 11 : 12.5,fontWeight:600,transition:"all .2s",cursor:"default"}}>{b.i} {b.l}</span>
        ))}
      </div>
      <div style={{display:"flex",gap:20,flexWrap:"wrap"}}>
        {[{flag:"🇨🇦",label:"CA:",phone:"+1 647-XXX-XXXX"},{flag:"🇬🇧",label:"UK:",phone:"+44 20-XXXX-XXXX"}].map(p=>(
          <a key={p.phone} href={`tel:${p.phone.replace(/\s|-/g,"")}`} className="h-teal" style={{display:"flex",alignItems:"center",gap:7,color:"rgba(255,255,255,0.5)",fontSize: isMobile ? 12 : 13.5,fontWeight:600,textDecoration:"none",transition:"color .2s"}}><span>{p.flag}</span><span style={{color:"rgba(255,255,255,0.3)"}}>{p.label}</span><span style={{color:T}}>{p.phone}</span></a>
        ))}
      </div>
    </div>

    {/* Hero Form */}
    <div style={{background:"rgba(8,20,40,0.85)",border:"1px solid rgba(0,201,167,0.22)",borderRadius:20,padding: isMobile ? "24px 16px" : "32px 28px",backdropFilter:"blur(16px)",boxShadow:"0 32px 80px rgba(0,0,0,0.5),0 0 40px rgba(0,201,167,0.06)",position:"relative",overflow:"hidden"}}>
      {/* <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,transparent,${T},transparent)`}}/> */}
      {submitted?(<div style={{textAlign:"center",padding: isMobile ? "20px 0" : "40px 0"}}>
        <div style={{fontSize: isMobile ? 44 : 52,marginBottom:16}}>✅</div>
        <h3 style={{color:"#fff",fontSize: isMobile ? 18 : 20,fontWeight:800,marginBottom:10}}>Request Received!</h3>
        <p style={{color:"rgba(255,255,255,0.5)",fontSize: isMobile ? 13 : 14,lineHeight:1.7,marginBottom:24}}>We&apos;ll contact you within 24 hours with a free consultation.</p>
        <Link href="/marketing-automation">
          <button onClick={()=>{setSubmitted(false);setForm({firstName:"",lastName:"",phone:"",dialCode:"+1",email:"",service:"",message:""});}} className="btn-teal" style={{minWidth:"auto", padding: isMobile ? "10px 22px" : "11px 26px", fontSize: isMobile ? "13px" : "14px"}}>Send Another →</button>
        </Link>
      </div>):(<>
        <div style={{marginBottom: isMobile ? 14 : 22}}><p style={{color:T,fontSize: isMobile ? 10 : 11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:4}}>Free Consultation</p><h2 style={{color:"#fff",fontSize: isMobile ? 16 : 18,fontWeight:800,margin:0,lineHeight:1.3}}>Get a Free Automation Strategy Call</h2></div>
        <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap: isMobile ? 10 : 12}}>
          <div className="cf-name">
            <div><label style={{display:"block",fontSize: isMobile ? 10 : 11,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>First Name *</label><input className="fi" required style={iS} placeholder="Jane" value={form.firstName} onChange={e=>setF("firstName",e.target.value)}/></div>
            <div><label style={{display:"block",fontSize: isMobile ? 10 : 11,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Last Name</label><input className="fi" style={iS} placeholder="Smith" value={form.lastName} onChange={e=>setF("lastName",e.target.value)}/></div>
          </div>
          <div><label style={{display:"block",fontSize: isMobile ? 10 : 11,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Phone</label>
            <div style={{display:"flex",gap:8, flexDirection: isMobile ? "column" : "row"}}>
              <select className="fi" style={{...iS,width: isMobile ? "100%" : 82,flexShrink:0,padding: isMobile ? "10px 12px" : "11px 6px",cursor:"pointer"}} value={form.dialCode} onChange={e=>setF("dialCode",e.target.value)}>{DIAL_CODES.map((d,i)=><option key={i} value={d.code}>{d.flag} {d.code}</option>)}</select>
              <input className="fi" style={iS} type="tel" placeholder="647 XXX XXXX" value={form.phone} onChange={e=>setF("phone",e.target.value)}/>
            </div>
          </div>
          <div><label style={{display:"block",fontSize: isMobile ? 10 : 11,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Business Email *</label><input className="fi" required type="email" style={iS} placeholder="jane@company.com" value={form.email} onChange={e=>setF("email",e.target.value)}/></div>
          <div><label style={{display:"block",fontSize: isMobile ? 10 : 11,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Service</label>
            <select className="fi" style={{...iS,cursor:"pointer"}} value={form.service} onChange={e=>setF("service",e.target.value)}><option value="">Select service...</option>{SERVICES_LIST.map(s=><option key={s} value={s}>{s}</option>)}</select>
          </div>
          <div><label style={{display:"block",fontSize: isMobile ? 10 : 11,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Message</label><textarea className="fi" style={{...iS,minHeight: isMobile ? 70 : 76,resize:"vertical" as const}} placeholder="Tell us about your marketing goals..." value={form.message} onChange={e=>setF("message",e.target.value)}/></div>
          <button className="btn-teal" type="submit" disabled={loading} style={{marginTop:4, opacity: loading ? 0.6 : 1, cursor: loading ? "wait" : "pointer", width:"100%"}}>{loading?"Sending...":"⚡ Get Free Automation Strategy →"}</button>
          <p style={{color:"rgba(255,255,255,0.28)",fontSize: isMobile ? 10 : 11,textAlign:"center",margin:0}}>🔒 Secure &amp; confidential. No spam, ever.</p>
        </form>
      </>)}
    </div>
  </div>
</section>

{/* ══ M2 — LOGOS ══════════════════════════════════════════════════════════════ */}
<section style={{ padding: isMobile ? "40px 0" : "60px 0", background: N0, overflow: "hidden", borderTop: `1px solid rgba(0,201,167,.1)`, borderBottom: `1px solid rgba(0,201,167,.1)` }}>
  <div style={{ textAlign: "center", marginBottom: isMobile ? 30 : 40, padding: "0 24px" }}>
    <p style={{ fontWeight: 600, fontSize: isMobile ? 10 : 11.5, color: "rgba(255,255,255,.28)", letterSpacing: "0.14em", textTransform: "uppercase" as const, marginBottom: 12 }}>Our Happy Clients</p>
    <h2 style={{ fontSize: isMobile ? "22px" : "28px", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.25, margin: 0 }}>
      Trusted by Businesses Across <GradText>North America &amp; the UK</GradText>
    </h2>
  </div>
  <div style={{ overflow: "hidden" }}>
    <div className="cl-track">
      {[...LOGOS, ...LOGOS].map((f, i) => (
        <div key={i} style={{ flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", height: isMobile ? 60 : 70, padding: isMobile ? "8px 14px" : "10px 18px", background:"#fff", borderRadius:10, margin:"0 8px", boxShadow:"0 6px 20px rgba(0,0,0,0.15)", opacity:.9, transition:"transform .3s, box-shadow .3s" }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "scale(1.08)"; el.style.boxShadow = "0 10px 28px rgba(0,0,0,0.25)"; }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)"; }}
        >
          <img src={`/${f}`} alt={`Client ${i+1}`} style={{ height: isMobile ? 30 : 40, width:"auto", maxWidth: isMobile ? 90 : 120, objectFit:"contain" }} />
        </div>
      ))}
    </div>
  </div>
</section>

{/* STATS BAR */}
<section style={{position:"relative",overflow:"hidden",background:`linear-gradient(180deg,${N2} 0%,${N1} 60%,${N2} 100%)`,borderTop:`1px solid rgba(0,201,167,0.12)`,borderBottom:`1px solid rgba(0,201,167,0.12)`,padding: isMobile ? "50px 20px" : "72px 48px"}}>
  <div style={{position:"absolute",left:0,right:0,height:1,background:"linear-gradient(90deg,transparent 0%,rgba(0,201,167,0.3) 50%,transparent 100%)",animation:"heroScan 4s linear infinite",pointerEvents:"none"}}/>
  <div className="stats-row">{STATS_TOP.map((s,i)=>(<div key={i} className="card-hover" style={{position:"relative",textAlign:"center",padding: isMobile ? "24px 16px" : "44px 28px",borderRadius:20,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.2)",transition:"transform .3s,box-shadow .3s",cursor:"default",animation:`sbFadeUp .7s ease ${i*.12}s both`}}>
    <div style={{width: isMobile ? 44 : 52,height: isMobile ? 44 : 52,borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px",background:"rgba(0,201,167,0.1)",border:"1px solid rgba(0,201,167,0.2)",fontSize: isMobile ? 20 : 24}}>{s.icon}</div>
    <div style={{fontSize: isMobile ? "32px" : "48px",fontWeight:900,lineHeight:1,marginBottom:8,background:"linear-gradient(135deg,#fff 30%,#00C9A7 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}><Counter to={s.val} sfx={s.sfx}/></div>
    <div style={{fontSize: isMobile ? 13 : 15,fontWeight:700,color:"#fff",marginBottom:4}}>{s.label}</div>
    <div style={{fontSize: isMobile ? 11 : 12.5,color:"rgba(255,255,255,0.38)",fontWeight:500}}>{s.sub}</div>
    <div style={{position:"absolute",bottom:0,left:"25%",right:"25%",height:2,background:`linear-gradient(90deg,transparent,${T},transparent)`,borderRadius:2,animation:`sbLineGrow .6s ease ${.5+i*.1}s both`}}/>
  </div>))}</div>
</section>

{/* ══ M3 — SUCCESS STORIES ════════════════════════════════════════════════════ */}
<section style={{padding: isMobile ? "40px 16px" : isTablet ? "60px 32px" : "40px 48px", background:`linear-gradient(180deg,${N2} 0%,${N1} 100%)`,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"linear-gradient(rgba(0,201,167,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.02) 1px,transparent 1px)",backgroundSize:"56px 56px"}}/>
  <div style={{maxWidth:1200,margin:"0 auto",position:"relative",zIndex:2}}>
    <div style={{textAlign:"center",marginBottom: isMobile ? 32 : 48}}><SectionBadge label="Proven Results"/><SectionH2>Marketing Automation <GradText>Success Stories</GradText></SectionH2><p style={{color:"rgba(255,255,255,0.45)",fontSize: isMobile ? 13 : 15,lineHeight:1.7,maxWidth:500,margin:"0 auto"}}>Real results from real automation systems built for businesses in Canada, USA &amp; UK.</p></div>
    <div style={{display:"flex",gap:10,justifyContent:"center",marginBottom: isMobile ? 30 : 40,flexWrap:"wrap"}}>{CASES.map((c,i)=>(<button key={i} className={`ss-tab${story===i?" act":""}`} onClick={()=>setStory(i)} style={{padding: isMobile ? "8px 14px" : "10px 20px", fontSize: isMobile ? "12px" : "13.5px"}}><span>{c.icon}</span>{c.industry}</button>))}</div>
    <div key={story} style={{background:"rgba(255,255,255,0.02)",border:`1px solid ${CASES[story].tagBd}`,borderRadius:24,overflow:"hidden",animation:"sbFadeUp .45s ease both"}}>
      <div style={{height:3,background:`linear-gradient(90deg,transparent,${CASES[story].tagClr},transparent)`}}/>
      <div style={{padding: isMobile ? "20px" : "36px"}}>
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20, flexWrap:"wrap"}}>
          <div style={{width: isMobile ? 48 : 52,height: isMobile ? 48 : 52,borderRadius:14,fontSize: isMobile ? 24 : 26,display:"flex",alignItems:"center",justifyContent:"center",background:CASES[story].tagBg,border:`1px solid ${CASES[story].tagBd}`}}>{CASES[story].icon}</div>
          <span style={{padding: isMobile ? "3px 12px" : "4px 14px",borderRadius:100,fontSize: isMobile ? 10 : 12,fontWeight:700,background:CASES[story].tagBg,border:`1px solid ${CASES[story].tagBd}`,color:CASES[story].tagClr,textTransform:"uppercase" as const,letterSpacing:"0.08em"}}>{CASES[story].tag}</span>
        </div>
        <h3 style={{color:"#fff",fontSize: isMobile ? "18px" : "22px",fontWeight:800,marginBottom: isMobile ? 16 : 28,lineHeight:1.3}}>{CASES[story].title}</h3>
        <div style={{display:"grid",gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",gap: isMobile ? 16 : 20,marginBottom: isMobile ? 24 : 32}}>
          {[{label:"Challenge",text:CASES[story].challenge,icon:"⚠️"},{label:"Solution",text:CASES[story].solution,icon:"💡"}].map(col=>(<div key={col.label} style={{padding: isMobile ? "14px" : "20px",borderRadius:14,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)"}}><p style={{color:T,fontSize: isMobile ? 10 : 11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase" as const,marginBottom:8}}>{col.icon} {col.label}</p><p style={{color:"rgba(255,255,255,0.6)",fontSize: isMobile ? 12 : 14,lineHeight:1.7,margin:0}}>{col.text}</p></div>))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap: isMobile ? 10 : 14}}>
          {CASES[story].metrics.map((m,i)=>(<div key={i} style={{textAlign:"center",padding: isMobile ? "12px 8px" : "18px 14px",borderRadius:14,border:"1px solid rgba(255,255,255,0.07)",background:"rgba(255,255,255,0.03)",transition:"transform .25s,background .25s",cursor:"default"}} onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-4px)";(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.06)";}} onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.03)";}}>
            <div style={{fontSize: isMobile ? 18 : 22,marginBottom:6}}>{m.i}</div>
            <div style={{fontSize: isMobile ? "20px" : "26px",fontWeight:900,marginBottom:4,background:`linear-gradient(135deg,#fff 30%,${T})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{m.v}</div>
            <div style={{color:"rgba(255,255,255,0.45)",fontSize: isMobile ? 10 : 12,fontWeight:500}}>{m.l}</div>
          </div>))}
        </div>
      </div>
    </div>
    <div style={{display:"flex",justifyContent:"center",gap:8,marginTop:24}}>{CASES.map((_,i)=>(<button key={i} onClick={()=>setStory(i)} style={{width:story===i?24:8,height:8,borderRadius:100,background:story===i?T:"rgba(255,255,255,0.2)",border:"none",cursor:"pointer",transition:"all .3s ease"}}/>))}</div>
    <div style={{textAlign:"center",marginTop: isMobile ? 32 : 44}}>
      <Link href="/case-studies" className="btn-teal">View All Case Studies →</Link>
    </div>
  </div>
</section>

{/* ══ AUTOMATION FLOW VISUAL ══════════════════════════════════════════════════ */}
<section style={{padding: isMobile ? "40px 16px 0" : "30px 48px 0",background:N1,position:"relative",overflow:"hidden"}}>
  <div style={{maxWidth:1100,margin:"0 auto"}}>
    <div style={{textAlign:"center",marginBottom: isMobile ? 32 : 52}}><SectionBadge label="How It Works"/><SectionH2>Your Always-On <GradText>Lead Machine</GradText></SectionH2><p style={{color:"rgba(255,255,255,0.45)",fontSize: isMobile ? 13 : 15,lineHeight:1.75,maxWidth:500,margin:"0 auto"}}>Every lead is captured, scored, nurtured, and handed to sales — automatically, 24/7.</p></div>
    <div style={{display:"flex",flexDirection: isMobile ? "column" : "row", alignItems:"center",justifyContent:"center",gap: isMobile ? 12 : 0,flexWrap:"wrap",marginBottom: isMobile ? 32 : 64}}>
      {[
        {icon:"🎯",step:"01",title:"Capture",desc:"Form fills, ad clicks, chatbot",clr:"rgba(0,201,167,.12)",bd:"rgba(0,201,167,.3)"},
        {icon:"⚙️",step:"02",title:"Score & Route",desc:"Lead scoring & CRM tagging",clr:"rgba(99,102,241,.12)",bd:"rgba(99,102,241,.3)"},
        {icon:"📧",step:"03",title:"Nurture",desc:"Email + WhatsApp sequences",clr:"rgba(0,201,167,.12)",bd:"rgba(0,201,167,.3)"},
        {icon:"📣",step:"04",title:"Retarget",desc:"Meta & Google ad audiences",clr:"rgba(99,102,241,.12)",bd:"rgba(99,102,241,.3)"},
        {icon:"💰",step:"05",title:"Convert",desc:"Sales-ready lead → closed deal",clr:"rgba(0,201,167,.12)",bd:"rgba(0,201,167,.3)"},
      ].map((node,i,arr)=>(
        <div key={i} style={{display:"flex",flexDirection: isMobile ? "column" : "row", alignItems:"center", width: isMobile ? "100%" : "auto"}}>
          <div className="flow-node" style={{textAlign:"center",padding: isMobile ? "16px 12px" : "24px 20px",borderRadius:16,background:node.clr,border:`1px solid ${node.bd}`,minWidth: isMobile ? "100%" : 130,transition:"border-color .2s,background .2s,transform .2s",cursor:"default",animation:`flowPulse ${3+i*.4}s ease-in-out infinite ${i*.3}s`}}>
            <div style={{fontSize: isMobile ? 24 : 28,marginBottom:6}}>{node.icon}</div>
            <div style={{color:"rgba(255,255,255,0.35)",fontSize:9,fontWeight:700,letterSpacing:"0.1em",marginBottom:2}}>{node.step}</div>
            <div style={{color:"#fff",fontSize: isMobile ? 13 : 14,fontWeight:700,marginBottom:2}}>{node.title}</div>
            <div style={{color:"rgba(255,255,255,0.45)",fontSize: isMobile ? 11 : 11.5,lineHeight:1.5}}>{node.desc}</div>
          </div>
          {i<arr.length-1 && !isMobile && (
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:36,flexShrink:0}}>
              <div style={{height:2,width:"100%",background:`linear-gradient(90deg,${T}88,${T})`,position:"relative",overflow:"hidden"}}><div style={{position:"absolute",inset:0,background:`linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)`,animation:`flowLine 1.5s ease-in-out infinite ${i*.3}s`}}/></div>
              <span style={{color:T,fontSize:14,marginTop:-1}}>→</span>
            </div>
          )}
          {i<arr.length-1 && isMobile && (
            <div style={{margin:"8px 0", color:T, fontSize:20}}>↓</div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

{/* ══ M4 — SERVICES ════════════════════════════════════════════════════════════ */}
<section style={{padding: isMobile ? "40px 16px" : isTablet ? "60px 32px" : "20px 48px", background:N1,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"linear-gradient(rgba(0,201,167,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.025) 1px,transparent 1px)",backgroundSize:"56px 56px"}}/>
  <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
    <div style={{textAlign:"center",marginBottom: isMobile ? 32 : 48}}><SectionBadge label="What We Do"/><SectionH2>Marketing Automation Services <GradText>We Offer</GradText></SectionH2><p style={{color:"rgba(255,255,255,0.5)",fontSize: isMobile ? 13 : 15,lineHeight:1.75,maxWidth:580,margin:"0 auto"}}>End-to-end marketing automation for businesses across Canada, USA &amp; UK — from lead capture to closed deal.</p></div>
    <div className="svc-grid">
      {SERVICES.map((s,i)=>(
        <Link key={s.title} href={`/services/${s.slug}`} style={{textDecoration:"none"}}>
          <div className="svc-card" style={{padding: isMobile ? "20px" : "24px 20px"}}>
            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12}}>
              <div className="svc-icon" style={{width: isMobile ? 48 : 52,height: isMobile ? 48 : 52,borderRadius:14,background:"rgba(0,201,167,0.1)",border:"1px solid rgba(0,201,167,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize: isMobile ? 22 : 24,flexShrink:0,transition:"background .3s,transform .3s"}}>{s.icon}</div>
              <span style={{padding:"3px 10px",borderRadius:100,fontSize: isMobile ? 9 : 10.5,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase" as const,color:T,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.18)"}}>{s.tag}</span>
            </div>
            <h3 style={{fontSize: isMobile ? "15px" : "17px",fontWeight:700,color:"#fff",lineHeight:1.3,margin:0}}>{s.title}</h3>
            <p style={{fontSize: isMobile ? "12px" : "13.5px",color:"rgba(255,255,255,0.5)",lineHeight:1.7,margin:0}}>{s.desc}</p>
            <span style={{display:"inline-flex",alignItems:"center",gap:6,color:T,fontSize: isMobile ? "12px" : "13px",fontWeight:600,marginTop:"auto"}}>Learn More <span>→</span></span>
          </div>
        </Link>
      ))}
    </div>
    <div style={{textAlign:"center",marginTop: isMobile ? 32 : 48}}>
      <Link href="/services" className="btn-teal">View All Services →</Link>
    </div>
  </div>
</section>

{/* ══ M5 — KEY BENEFITS ════════════════════════════════════════════════════════ */}
<section style={{padding: isMobile ? "40px 16px" : isTablet ? "60px 32px" : "20px 48px", background:`linear-gradient(180deg,${N1} 0%,${N2} 100%)`,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"linear-gradient(rgba(0,201,167,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.025) 1px,transparent 1px)",backgroundSize:"56px 56px"}}/>
  <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
    <div style={{textAlign:"center",marginBottom: isMobile ? 32 : 48}}><SectionBadge label="Why It Works"/><SectionH2>Key Benefits of <GradText>Marketing Automation</GradText></SectionH2><p style={{color:"rgba(255,255,255,0.45)",fontSize: isMobile ? 13 : 15,lineHeight:1.75,maxWidth:520,margin:"0 auto"}}>Why businesses in Canada, USA &amp; UK switch from manual outreach to always-on automation.</p></div>
    <div className="kb-grid">
      {BENEFITS.map((b,i)=>(<div key={i} className="kb-card" style={{padding: isMobile ? "16px" : "24px 20px", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 12 : 20}}>
        <div style={{fontSize: isMobile ? "42px" : "52px",fontWeight:900,lineHeight:1,background:"linear-gradient(135deg,rgba(0,201,167,0.15) 0%,rgba(0,201,167,0.05) 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",flexShrink:0,width: isMobile ? "100%" : 72,textAlign:"center"}}>{b.num}</div>
        <div style={{flex:1}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}><span style={{fontSize: isMobile ? 20 : 22}}>{b.icon}</span><h3 style={{color:"#fff",fontSize: isMobile ? "16px" : "18px",fontWeight:800,margin:0}}>{b.title}</h3></div>
          <p style={{color:"rgba(255,255,255,0.52)",fontSize: isMobile ? "12px" : "14px",lineHeight:1.7,margin:"0 0 12px"}}>{b.desc}</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:6}}>{b.tags.map(tag=><span key={tag} style={{display:"inline-flex",alignItems:"center",padding:"3px 8px",borderRadius:100,fontSize: isMobile ? 9 : 10.5,fontWeight:600,letterSpacing:".06em",textTransform:"uppercase" as const,color:T,background:"rgba(0,201,167,0.08)",border:"1px solid rgba(0,201,167,0.18)"}}>{tag}</span>)}</div>
        </div>
      </div>))}
    </div>
    <div style={{textAlign:"center",marginTop: isMobile ? 32 : 48}}>
      <Link href="/contact" className="btn-teal">Build My Automation Stack →</Link>
    </div>
  </div>
</section>

{/* ══ M6 — PLATFORM TOOLS ══════════════════════════════════════════════════════ */}
<section style={{padding: isMobile ? "40px 16px" : isTablet ? "60px 32px" : "20px 48px", background:N1,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width: isMobile ? 300 : 600,height: isMobile ? 200 : 400,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
  <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
    <div style={{textAlign:"center",marginBottom: isMobile ? 32 : 48}}><SectionBadge label="Our Stack"/><SectionH2>Leading Automation Platforms <GradText>That We Use</GradText></SectionH2><p style={{color:"rgba(255,255,255,0.45)",fontSize: isMobile ? 13 : 15,lineHeight:1.75,maxWidth:560,margin:"0 auto"}}>Best-in-class tools for every layer of your marketing automation stack.</p></div>
    <div className="pt-grid">
      {TOOLS.map((tool,i)=>(<div key={i} className="pt-card" style={{background:tool.clr,border:`1px solid ${tool.bd}`, padding: isMobile ? "16px 12px" : "20px 16px"}}>
        <div className="pt-icon" style={{width: isMobile ? 48 : 56,height: isMobile ? 48 : 56,borderRadius:15,display:"flex",alignItems:"center",justifyContent:"center",fontSize: isMobile ? 24 : 26,marginBottom: isMobile ? 12 : 16,background:"rgba(255,255,255,0.05)",border:`1px solid ${tool.bd}`,transition:"transform .25s"}}>{tool.icon}</div>
        <h3 style={{color:"#fff",fontSize: isMobile ? "14px" : "16px",fontWeight:700,marginBottom:6,lineHeight:1.3}}>{tool.name}</h3>
        <p style={{color:"rgba(255,255,255,0.5)",fontSize: isMobile ? "11px" : "13px",lineHeight:1.6,margin:0}}>{tool.desc}</p>
      </div>))}
    </div>
  </div>
</section>

{/* ══ CAPABILITIES ACCORDION ══════════════════════════════════════════════════ */}
<section style={{padding: isMobile ? "40px 16px" : isTablet ? "60px 32px" : "20px 48px", background:N0,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",bottom:"10%",left:"50%",transform:"translateX(-50%)",width: isMobile ? 400 : 600,height: isMobile ? 200 : 300,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 70%)",pointerEvents:"none",zIndex:0}}/>
  <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
    <div style={{textAlign:"center",marginBottom: isMobile ? 32 : 48}}><SectionBadge label="Automation Capabilities"/><SectionH2>Everything Inside Your <GradText>Automation Stack</GradText></SectionH2><p style={{color:"rgba(255,255,255,0.45)",fontSize: isMobile ? 13 : 15,lineHeight:1.7,maxWidth:520,margin:"0 auto"}}>The full capability set we bring to every marketing automation project.</p></div>
    <div className="two-col">
      <div style={{display:"flex",flexDirection:"column",gap: isMobile ? 10 : 12}}>{ACCORDION_L.map((item,i)=><AccItem key={item.title} item={item} open={accL===i} toggle={()=>setAccL(accL===i?null:i)}/>)}</div>
      <div style={{display:"flex",flexDirection:"column",gap: isMobile ? 10 : 12}}>{ACCORDION_R.map((item,i)=><AccItem key={item.title} item={item} open={accR===i} toggle={()=>setAccR(accR===i?null:i)}/>)}</div>
    </div>
  </div>
</section>

{/* ══ M7 — HIRE ══════════════════════════════════════════════════════════════ */}
<section style={{padding: isMobile ? "40px 16px" : isTablet ? "60px 32px" : "20px 48px", background:`linear-gradient(180deg,${N1} 0%,${N2} 100%)`,position:"relative",overflow:"hidden"}}>
  {/* <div style={{position:"absolute",top:"10%",left:"5%",width: isMobile ? 200 : 400,height: isMobile ? 200 : 400,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/> */}
  <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
    <div style={{textAlign:"center",marginBottom: isMobile ? 32 : 48}}><SectionBadge label="Hire Specialists"/><SectionH2>Hire Automation Specialists <GradText>Tailored to Your Needs</GradText></SectionH2><p style={{color:"rgba(255,255,255,0.45)",fontSize: isMobile ? 13 : 15,lineHeight:1.75,maxWidth:560,margin:"0 auto"}}>Whether you&apos;re building from scratch or scaling an existing stack — we have the right specialist for your goals.</p></div>
    <div className="two-col" style={{marginBottom: isMobile ? 12 : 16}}>
      <p style={{color:T,fontSize: isMobile ? 10 : 11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>By Business Type</p>
      <p style={{color:T,fontSize: isMobile ? 10 : 11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>By Automation Type</p>
    </div>
    <div className="two-col">
      <div style={{display:"flex",flexDirection:"column",gap: isMobile ? 10 : 12}}>{HIRE_LEFT.map((item,i)=><AccItem key={item.title} item={item} open={hireL===i} toggle={()=>setHireL(hireL===i?null:i)}/>)}</div>
      <div style={{display:"flex",flexDirection:"column",gap: isMobile ? 10 : 12}}>{HIRE_RIGHT.map((item,i)=><AccItem key={item.title} item={item} open={hireR===i} toggle={()=>setHireR(hireR===i?null:i)}/>)}</div>
    </div>
    <div style={{display:"flex",gap: isMobile ? 12 : 16,marginTop: isMobile ? 32 : 48,justifyContent:"center",flexWrap:"wrap"}}>
      <Link href="/hire-specialists" className="btn-teal">⚡ Hire an Automation Specialist</Link>
      <Link href="/pricing" className="btn-outline">View Pricing →</Link>
    </div>
  </div>
</section>

{/* ══ M8 — AI-POWERED ══════════════════════════════════════════════════════════ */}
<section style={{padding: isMobile ? "40px 16px" : isTablet ? "60px 32px" : "80px 48px", background:`linear-gradient(180deg,${N2} 0%,${N1} 100%)`,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width: isMobile ? 400 : 700,height: isMobile ? 200 : 400,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
  <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
    <div style={{marginBottom: isMobile ? 32 : 40, maxWidth:620,marginLeft:"auto",marginRight:"auto",textAlign:"center"}}>
      <SectionBadge label="AI-Powered"/><SectionH2>Leverage <GradText>AI-Powered Marketing</GradText> Automation</SectionH2><p style={{color:"rgba(255,255,255,0.5)",fontSize: isMobile ? 13 : 15,lineHeight:1.8}}>We embed AI into your marketing automation — smarter lead scoring, predictive send times, and personalised copy at scale.</p>
    </div>
    <div className="two-col-wide">
      <div style={{display:"flex",flexDirection:"column",gap: isMobile ? 12 : 16}}>
        {AI_FEATS.map((f,i)=>(<div key={i} className="ai-feat-card" style={{display:"flex",gap: isMobile ? 12 : 18,alignItems:"flex-start",padding: isMobile ? "16px" : "24px 22px",borderRadius:16,background:f.clr,border:`1px solid ${f.bd}`,transition:"transform .25s,box-shadow .25s",cursor:"default"}}>
          <div className="ai-icon-w" style={{width: isMobile ? 44 : 52,height: isMobile ? 44 : 52,borderRadius:14,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize: isMobile ? 22 : 24,background:f.clr,border:`1px solid ${f.bd}`,transition:"transform .25s"}}>{f.icon}</div>
          <div><h3 style={{color:"#fff",fontSize: isMobile ? "15px" : "17px",fontWeight:700,marginBottom:6,lineHeight:1.3}}>{f.title}</h3><p style={{color:"rgba(255,255,255,0.52)",fontSize: isMobile ? "12px" : "14px",lineHeight:1.7,margin:0}}>{f.desc}</p></div>
        </div>))}
        <Link href="/ai-solutions" className="btn-teal" style={{marginTop:8, alignSelf:"flex-start", display:"inline-flex", alignItems:"center", gap:10}}>🤖 Explore AI Marketing Solutions →</Link>
      </div>
      {/* AI Dashboard Visual */}
      <div style={{position:"relative",borderRadius:24,overflow:"hidden",background:"linear-gradient(135deg,#0a1f38 0%,#061425 100%)",border:"1px solid rgba(0,201,167,0.15)",minHeight: isMobile ? "auto" : 460,display:"flex",flexDirection:"column",justifyContent:"space-between",padding: isMobile ? "20px" : "36px 32px"}}>
        <div style={{position:"absolute",left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(0,201,167,0.5),transparent)",animation:"aiScan 3s linear infinite"}}/>
        <div style={{position:"absolute",top:"5%",right:"5%",width: isMobile ? 120 : 180,height: isMobile ? 120 : 180,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,201,167,0.12) 0%,transparent 70%)",animation:"aiPulse 4s ease-in-out infinite",pointerEvents:"none"}}/>
        <div style={{position:"relative",zIndex:2}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:20}}><div style={{width: isMobile ? 8 : 10,height: isMobile ? 8 : 10,borderRadius:"50%",background:"#22c55e",boxShadow:"0 0 10px #22c55e"}}/><span style={{color:"rgba(255,255,255,0.5)",fontSize: isMobile ? 11 : 12,fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase" as const}}>Live Automation Dashboard</span></div>
          {[{label:"Email open rate (AI optimised)",val:"48%",color:T},{label:"WhatsApp reply rate",val:"72%",color:"#22c55e"},{label:"Lead-to-meeting conversion",val:"34%",color:T},{label:"ROAS across all ad channels",val:"4.2×",color:"#f59e0b"}].map((row,i)=>(<div key={i} style={{marginBottom: isMobile ? 10 : 16}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}><span style={{color:"rgba(255,255,255,0.6)",fontSize: isMobile ? 11 : 12.5,fontWeight:500}}>{row.label}</span><span style={{color:row.color,fontSize: isMobile ? 11 : 12.5,fontWeight:700}}>{row.val}</span></div>
            <div style={{height:4,borderRadius:4,background:"rgba(255,255,255,0.06)",overflow:"hidden"}}><div style={{height:"100%",borderRadius:4,background:`linear-gradient(90deg,${row.color},${row.color}88)`,width:row.val==="4.2×"?"84%":row.val}}/></div>
          </div>))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap: isMobile ? 8 : 12,position:"relative",zIndex:2,marginTop: isMobile ? 16 : 0}}>
          {[{label:"Leads This Month",val:"1,842",icon:"🎯"},{label:"Pipeline Value",val:"$284K",icon:"💰"},{label:"Avg Cost/Lead",val:"$18",icon:"📉"}].map((m,i)=>(<div key={i} style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:12,padding: isMobile ? "10px 6px" : "14px 12px",textAlign:"center"}}>
            <div style={{fontSize: isMobile ? 18 : 20,marginBottom:4}}>{m.icon}</div>
            <div style={{color:"#fff",fontSize: isMobile ? "14px" : "16px",fontWeight:800,marginBottom:2}}>{m.val}</div>
            <div style={{color:"rgba(255,255,255,0.4)",fontSize: isMobile ? 10 : 11,fontWeight:500}}>{m.label}</div>
          </div>))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* ══ M9 — CTA BANNER ══════════════════════════════════════════════════════════ */}
<section style={{position:"relative",overflow:"hidden"}}>
  <div style={{background:"linear-gradient(135deg,#0055b3 0%,#0077cc 35%,#00a07a 65%,#00C9A7 100%)",backgroundSize:"300% 300%",animation:"ctaBgShift 8s ease infinite",padding: isMobile ? "50px 20px" : "80px 48px",textAlign:"center",position:"relative"}}>
    <div style={{position:"absolute",top:"-20%",left:"-5%",width:250,height:250,borderRadius:"50%",background:"radial-gradient(circle,rgba(255,255,255,0.1) 0%,transparent 65%)",pointerEvents:"none"}}/>
    <div style={{position:"absolute",bottom:"-20%",right:"-5%",width:200,height:200,borderRadius:"50%",background:"radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 65%)",pointerEvents:"none"}}/>
    <div style={{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",backgroundSize:"48px 48px"}}/>
    <div style={{position:"relative",zIndex:2,maxWidth: isMobile ? "100%" : 760,margin:"0 auto"}}>
      <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,0.15)",border:"1px solid rgba(255,255,255,0.3)",borderRadius:100,padding: isMobile ? "5px 14px" : "6px 18px",marginBottom:20}}><span style={{width:6,height:6,borderRadius:"50%",background:"#fff",display:"block"}}/><span style={{color:"#fff",fontSize: isMobile ? 10 : 11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>Get Started Today</span></div>
      <h2 style={{fontSize: isMobile ? "24px" : isTablet ? "36px" : "42px",fontWeight:900,color:"#fff",lineHeight:1.15,letterSpacing:"-0.02em",marginBottom:16}}>Want Marketing Automation Solutions That Take Your Business to the <span style={{textDecoration:"underline",textDecorationColor:"rgba(255,255,255,0.4)"}}>Next Level?</span></h2>
      <p style={{color:"rgba(255,255,255,0.82)",fontSize: isMobile ? "14px" : isTablet ? "15px" : "17px",lineHeight:1.75,marginBottom: isMobile ? 28 : 32}}>Connect with NNC Digital today — and let&apos;s build your always-on lead generation machine.</p>
      <div style={{display:"flex",gap: isMobile ? 12 : 16,justifyContent:"center",flexWrap:"wrap"}}>
        <Link href="/contact" className="btn-teal" style={{background:"#fff",color:"#0055b3", minWidth: isMobile ? "100%" : "auto"}}>✦ Connect Now</Link>
        <Link href="/book-consultation" className="btn-outline" style={{borderColor:"rgba(255,255,255,0.5)",color:"#fff", minWidth: isMobile ? "100%" : "auto"}}
          onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="#fff";(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.1)";}}
          onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.5)";(e.currentTarget as HTMLElement).style.background="transparent";}}>📅 Book a Free Call →</Link>
      </div>
      <p style={{color:"rgba(255,255,255,0.5)",fontSize: isMobile ? 11 : 13,marginTop:20}}>🇨🇦 Canada &nbsp;·&nbsp; 🇺🇸 USA &nbsp;·&nbsp; 🇬🇧 UK &nbsp;·&nbsp; 🇮🇳 India &nbsp;&nbsp;|&nbsp;&nbsp; hello@nncdigital.com</p>
    </div>
  </div>
</section>

{/* ══ M10 — WHY CHOOSE US (VIDEO REMOVED) ═══════════════════════════════════ */}
<section style={{padding: isMobile ? "40px 16px" : isTablet ? "60px 32px" : "80px 48px", background:`linear-gradient(180deg,${N1} 0%,${N2} 100%)`,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",top:"20%",right:"-5%",width: isMobile ? 200 : 400,height: isMobile ? 200 : 400,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
  <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:2}}>
    <div className="two-col-wide">
      <div>
        <SectionBadge label="Our Story"/>
        <SectionH2>Why Choose Us as Your <GradText>Marketing Automation</GradText> Partner?</SectionH2>
        <p style={{color:"rgba(255,255,255,0.55)",fontSize: isMobile ? "13px" : "15px",lineHeight:1.8,marginBottom:16}}>NNC Digital Solutions is backed by <span style={{color:"#fff",fontWeight:600}}>Nakshatra Namaha Creations Pvt. Ltd.</span> — one of Bangalore&apos;s most respected digital studios with <span style={{color:T,fontWeight:600}}>8+ years of experience</span> and <span style={{color:T,fontWeight:600}}>300+ automation projects delivered</span>.</p>
        <p style={{color:"rgba(255,255,255,0.55)",fontSize: isMobile ? "13px" : "15px",lineHeight:1.8,marginBottom: isMobile ? 24 : 32}}>We launched NNC Digital as our international arm — bringing the same proven automation expertise to Canadian, US, and UK markets with transparent pricing, dedicated account managers, and a focus on measurable ROI.</p>
        <div style={{display:"flex",flexDirection:"column",gap: isMobile ? 8 : 10,marginBottom:30}}>{WCU_POINTS.map((p,i)=>(<div key={i} className="wcu-point" style={{display:"flex",alignItems:"center",gap:14,padding: isMobile ? "12px 14px" : "14px 18px",borderRadius:12,border:"1px solid rgba(255,255,255,0.06)",background:"rgba(255,255,255,0.02)",transition:"border-color .2s,background .2s,transform .2s",cursor:"default"}}><span style={{fontSize: isMobile ? 16 : 18,flexShrink:0}}>{p.icon}</span><span style={{color:"rgba(255,255,255,0.72)",fontSize: isMobile ? "12px" : "14px",fontWeight:500}}>{p.text}</span></div>))}</div>
        <div className="wcu-stats">{WCU_STATS.map(st=>(<div key={st.l} className="wcu-stat" style={{textAlign:"center",padding: isMobile ? "14px 10px" : "22px 14px",borderRadius:14,border:"1px solid rgba(0,201,167,0.15)",background:"rgba(0,201,167,0.05)",transition:"transform .25s,background .25s",cursor:"default"}}><div style={{fontSize: isMobile ? "18px" : "24px",fontWeight:900,marginBottom:4,background:`linear-gradient(135deg,#fff 30%,${T})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}><Counter to={st.n} sfx={st.s}/></div><div style={{color:"rgba(255,255,255,0.4)",fontSize: isMobile ? 10 : 11,fontWeight:500}}>{st.l}</div></div>))}</div>
      </div>
      <div>
        {/* Video removed - replaced with stats/CTA card */}
        <div style={{background:"rgba(0,201,167,0.05)",border:"1px solid rgba(0,201,167,0.15)",borderRadius:24,padding: isMobile ? "30px 20px" : "40px 30px",textAlign:"center"}}>
          <div style={{fontSize: isMobile ? 48 : 64,marginBottom:16}}>⚡</div>
          <h3 style={{color:"#fff",fontSize: isMobile ? "20px" : "24px",fontWeight:800,marginBottom:12}}>Ready to Automate Your Lead Generation?</h3>
          <p style={{color:"rgba(255,255,255,0.6)",fontSize: isMobile ? "14px" : "16px",lineHeight:1.7,marginBottom:24}}>
            Join 300+ businesses that have scaled their revenue with our marketing automation systems.
          </p>
          <Link href="/contact" className="btn-teal" style={{width: isMobile ? "100%" : "auto"}}>Get Started Today →</Link>
        </div>
        <div style={{display:"flex",gap:10,marginTop:20,flexWrap:"wrap"}}>{["🇨🇦 Canada","🇺🇸 USA","🇬🇧 UK","🇮🇳 India"].map(b=>(<span key={b} style={{padding: isMobile ? "5px 12px" : "6px 14px",borderRadius:100,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.03)",color:"rgba(255,255,255,0.6)",fontSize: isMobile ? "11px" : "12.5px",fontWeight:500}}>{b}</span>))}</div>
        <div style={{display:"flex",gap: isMobile ? 10 : 12,marginTop:20}}>
          <Link href="/book-consultation" className="btn-teal" style={{flex:1, padding: isMobile ? "11px 16px" : "13px 20px"}}>📅 Book a Free Strategy Call</Link>
          <Link href="/case-studies" className="btn-outline" style={{flex:1, padding: isMobile ? "11px 16px" : "13px 20px"}}>Our Work →</Link>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ══ M11 — GLOBAL PRESENCE ════════════════════════════════════════════════════ */}
<section style={{padding: isMobile ? "40px 16px" : isTablet ? "60px 32px" : "80px 48px", background:`linear-gradient(180deg,${N0} 0%,${N1} 100%)`,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",width: isMobile ? 400 : 600,height: isMobile ? 200 : 300,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
  <div style={{maxWidth:1180,margin:"0 auto",position:"relative",zIndex:2}}>
    <div style={{textAlign:"center",marginBottom: isMobile ? 32 : 40}}><SectionBadge label="Our Reach"/><SectionH2>Global <GradText>Presence</GradText></SectionH2><p style={{color:"rgba(255,255,255,0.45)",fontSize: isMobile ? "13px" : "15px",lineHeight:1.75,maxWidth:500,margin:"0 auto"}}>Client-facing offices in North America &amp; the UK. Engineering headquarters in Bangalore, India.</p></div>
    <div style={{display:"flex",gap: isMobile ? 8 : 12,justifyContent:"center",marginBottom: isMobile ? 30 : 40,flexWrap:"wrap"}}>
      {[{key:"int",label:"🌍 North America & UK"},{key:"india",label:"🇮🇳 India (Engineering HQ)"}].map(t=>(<button key={t.key} onClick={()=>setGTab(t.key as"int"|"india")} style={{padding: isMobile ? "8px 16px" : "11px 24px",borderRadius:10,border:`1px solid ${gTab===t.key?"rgba(0,201,167,0.5)":"rgba(255,255,255,0.1)"}`,background:gTab===t.key?"rgba(0,201,167,0.12)":"rgba(255,255,255,0.03)",color:gTab===t.key?T:"rgba(255,255,255,0.55)",fontSize: isMobile ? 12 : 14,fontWeight:700,fontFamily:"'Poppins',sans-serif",cursor:"pointer",transition:"all .22s",boxShadow:gTab===t.key?"0 4px 20px rgba(0,201,167,0.12)":"none"}}>{t.label}</button>))}
    </div>
    {gTab==="int"&&(<div>
      <div className="gp-offices" style={{marginBottom:24}}>
        {INT_OFFICES.map((o,i)=>(<div key={i} className="gp-card" style={{padding: isMobile ? "20px" : "28px 24px",borderRadius:18,background:"rgba(0,201,167,0.05)",border:"1px solid rgba(0,201,167,0.18)",transition:"transform .25s,box-shadow .25s,border-color .25s",cursor:"default"}}>
          <div style={{fontSize: isMobile ? 32 : 36,marginBottom: isMobile ? 10 : 14}}>{o.flag}</div>
          <h3 style={{color:"#fff",fontSize: isMobile ? "16px" : "18px",fontWeight:800,marginBottom:4}}>{o.city}</h3>
          <p style={{color:T,fontSize: isMobile ? 10 : 12,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase" as const,marginBottom: isMobile ? 12 : 16}}>{o.tz}</p>
          <a href={`tel:${o.phone.replace(/\s|-/g,"")}`} className="h-teal" style={{display:"flex",alignItems:"center",gap:8,color:"rgba(255,255,255,0.7)",fontSize: isMobile ? 12 : 14,fontWeight:600,textDecoration:"none",marginBottom:8}}>📞 {o.phone}</a>
          <a href={`mailto:${o.email}`} className="h-teal" style={{display:"flex",alignItems:"center",gap:8,color:"rgba(255,255,255,0.5)",fontSize: isMobile ? 11 : 13,textDecoration:"none"}}>✉️ {o.email}</a>
        </div>))}
      </div>
      <div style={{borderRadius:14,padding: isMobile ? "16px 20px" : "20px 28px",background:"rgba(0,201,167,0.05)",border:"1px solid rgba(0,201,167,0.15)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}><div style={{display:"flex",alignItems:"center",gap:12}}><div style={{width: isMobile ? 8 : 10,height: isMobile ? 8 : 10,borderRadius:"50%",background:"#22c55e",boxShadow:"0 0 8px #22c55e"}}/><span style={{color:"rgba(255,255,255,0.6)",fontSize: isMobile ? 12 : 14,fontWeight:500}}>Available Mon–Fri, 9am–6pm in your time zone</span></div><a href="mailto:hello@nncdigital.com" className="h-teal" style={{color:T,fontSize: isMobile ? 12 : 14,fontWeight:700,textDecoration:"none"}}>hello@nncdigital.com →</a></div>
    </div>)}
    {gTab==="india"&&(<div>
      <div style={{borderRadius:20,padding: isMobile ? "20px" : "36px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.08)",marginBottom:24}}>
        <div style={{display:"flex",alignItems:"center",gap: isMobile ? 10 : 14,marginBottom: isMobile ? 20 : 24,flexWrap:"wrap"}}><span style={{fontSize: isMobile ? 28 : 32}}>🇮🇳</span><div><h3 style={{color:"#fff",fontSize: isMobile ? "16px" : "18px",fontWeight:800,margin:0}}>Nakshatra Namaha Creations Pvt. Ltd.</h3><p style={{color:"rgba(255,255,255,0.4)",fontSize: isMobile ? 12 : 13,margin:"4px 0 0"}}>Engineering &amp; Delivery HQ — Bangalore, India</p></div></div>
        <div className="gp-ind-grid">{INDIA_OFFICES.map((o,i)=>(<div key={i} className="gp-ind" style={{display:"flex",alignItems:"center",gap: isMobile ? 10 : 14,padding: isMobile ? "12px" : "16px 18px",borderRadius:12,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",transition:"background .2s,border-color .2s",cursor:"default"}}><span style={{fontSize: isMobile ? 20 : 22}}>🇮🇳</span><div><p style={{color:"#fff",fontSize: isMobile ? "13px" : "14px",fontWeight:700,margin:0}}>{o.city}</p><p style={{color:"rgba(255,255,255,0.38)",fontSize: isMobile ? 10 : 12,margin:"2px 0 0"}}>{o.note}</p>{o.phone&&<p style={{color:T,fontSize: isMobile ? 11 : 12.5,fontWeight:600,margin:"4px 0 0"}}>{o.phone}</p>}</div></div>))}</div>
        <div style={{marginTop: isMobile ? 16 : 24,paddingTop: isMobile ? 16 : 20,borderTop:"1px solid rgba(255,255,255,0.07)"}}><p style={{color:"rgba(255,255,255,0.35)",fontSize: isMobile ? 12 : 13,margin:0}}>✉️ info@nakshatranamahacreations.com</p></div>
      </div>
      <div className="gp-india-stats">{[{n:"8+",l:"Years Active"},{n:"300+",l:"Automations"},{n:"100+",l:"Team Members"},{n:"4",l:"India Offices"}].map((s,i)=>(<div key={i} style={{textAlign:"center",padding: isMobile ? "14px 8px" : "20px 12px",borderRadius:14,background:"rgba(0,201,167,0.06)",border:"1px solid rgba(0,201,167,0.15)",transition:"transform .25s,background .25s",cursor:"default"}} onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-4px)";(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.12)";}} onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.06)";}}><p style={{fontSize: isMobile ? "22px" : "26px",fontWeight:900,color:T,margin:0}}>{s.n}</p><p style={{fontSize: isMobile ? 9 : 11,color:"rgba(255,255,255,0.4)",margin:"4px 0 0",fontWeight:600,textTransform:"uppercase" as const,letterSpacing:"0.06em"}}>{s.l}</p></div>))}</div>
    </div>)}
  </div>
</section>

{/* ══ M12 — FAQ ══════════════════════════════════════════════════════════════ */}
<section style={{padding: isMobile ? "40px 16px" : isTablet ? "60px 32px" : "80px 48px", background:`linear-gradient(180deg,${N1} 0%,${N2} 100%)`,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",top:"30%",right:"-5%",width: isMobile ? 200 : 400,height: isMobile ? 200 : 400,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
  <div style={{maxWidth:860,margin:"0 auto",position:"relative",zIndex:2}}>
    <div style={{textAlign:"center",marginBottom: isMobile ? 32 : 40}}><SectionBadge label="FAQs"/><SectionH2>Frequently Asked <GradText>Questions</GradText></SectionH2><p style={{color:"rgba(255,255,255,0.45)",fontSize: isMobile ? 13 : 15,lineHeight:1.75,maxWidth:520,margin:"0 auto"}}>Everything you need to know about marketing automation for businesses in Canada, USA &amp; UK.</p></div>
    <div style={{display:"flex",flexDirection:"column",gap: isMobile ? 10 : 12}}>
      {FAQS.map((f,i)=>(<div key={i} className={`faq-item${faq===i?" fopen":""}`} onClick={()=>setFaq(faq===i?null:i)}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap: isMobile ? 12 : 16,padding: isMobile ? "14px 16px" : "20px 22px"}}>
          <div style={{display:"flex",alignItems:"center",gap: isMobile ? 10 : 14}}><span style={{color:T,fontSize: isMobile ? 12 : 13,fontWeight:800,background:"rgba(0,201,167,0.1)",border:"1px solid rgba(0,201,167,0.2)",borderRadius:8,padding: isMobile ? "3px 8px" : "4px 10px",flexShrink:0}}>Q{i+1}</span><span style={{fontSize: isMobile ? "13px" : "15px",fontWeight:700,color:faq===i?"#fff":"rgba(255,255,255,0.78)",lineHeight:1.4}}>{f.q}</span></div>
          <div style={{width: isMobile ? 26 : 30,height: isMobile ? 26 : 30,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize: isMobile ? 15 : 17,fontWeight:700,lineHeight:1,background:faq===i?T:"rgba(255,255,255,0.07)",border:`1px solid ${faq===i?T:"rgba(255,255,255,0.12)"}`,color:faq===i?"#000":"rgba(255,255,255,0.5)",transform:faq===i?"rotate(45deg)":"rotate(0deg)",transition:"all .25s ease"}}>+</div>
        </div>
        <div style={{maxHeight:faq===i?500:0,overflow:"hidden",transition:"max-height .38s ease"}}><p style={{padding: isMobile ? "0 16px 14px 48px" : "0 22px 22px 60px",color:"rgba(255,255,255,0.55)",fontSize: isMobile ? "12px" : "14px",lineHeight:1.7,margin:0}}>{f.a}</p></div>
      </div>))}
    </div>
    <div style={{textAlign:"center",marginTop: isMobile ? 32 : 40}}><p style={{color:"rgba(255,255,255,0.4)",fontSize: isMobile ? 12 : 14,marginBottom:16}}>Still have questions? We respond within 24 hours.</p><Link href="/contact" className="btn-teal">Ask Us Anything →</Link></div>
  </div>
</section>

{/* ══ M13 — CONTACT FORM ══════════════════════════════════════════════════════ */}
<section style={{padding: isMobile ? "40px 16px" : isTablet ? "60px 32px" : "80px 48px", background:`linear-gradient(180deg,${N2} 0%,${N0} 100%)`,position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",top:"20%",left:"50%",transform:"translateX(-50%)",width: isMobile ? 400 : 700,height: isMobile ? 200 : 400,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0}}/>
  <div style={{maxWidth:1180,margin:"0 auto",position:"relative",zIndex:2}}>
    <div style={{textAlign:"center",marginBottom: isMobile ? 32 : 40}}><SectionBadge label="Get In Touch"/><SectionH2>Ready to Build Your <GradText>Always-On Lead Machine?</GradText></SectionH2><p style={{color:"rgba(255,255,255,0.45)",fontSize: isMobile ? 13 : 15,lineHeight:1.75,maxWidth:540,margin:"0 auto"}}>Tell us about your marketing goals. We respond within 24 hours with a free automation strategy and honest advice.</p></div>
    <div className="cf-grid">
      <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:20,padding: isMobile ? "20px" : "36px"}}>
        {cSubmitted?(<div style={{textAlign:"center",padding: isMobile ? "20px 0" : "40px 0"}}><div style={{fontSize: isMobile ? 48 : 56,marginBottom:16}}>✅</div><h3 style={{color:"#fff",fontSize: isMobile ? 18 : 22,fontWeight:800,marginBottom:8}}>Message Sent!</h3><p style={{color:"rgba(255,255,255,0.5)",fontSize: isMobile ? 13 : 15,lineHeight:1.7,marginBottom:20}}>Thank you — we&apos;ll respond within 24 hours with a tailored automation strategy.</p><Link href="/marketing-automation"><button onClick={()=>{setCSubmitted(false);setCForm({name:"",phone:"",dialCode:"+1",email:"",service:"",project:""});}} className="btn-teal" style={{minWidth:"auto", padding: isMobile ? "10px 22px" : "12px 28px", fontSize: isMobile ? "13px" : "14px"}}>Send Another →</button></Link></div>):(
          <form onSubmit={handleCSubmit}>
            <div className="cf-name" style={{marginBottom: isMobile ? 12 : 16}}>
              <div><label style={{display:"block",fontSize: isMobile ? 11 : 12.5,fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Full Name *</label><input className="fi" required style={iSLg} placeholder="Jane Smith" value={cForm.name} onChange={e=>setCF("name",e.target.value)}/></div>
              <div><label style={{display:"block",fontSize: isMobile ? 11 : 12.5,fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Phone</label>
                <div style={{display:"flex",gap:8, flexDirection: isMobile ? "column" : "row"}}><select className="fi" style={{...iSLg,width: isMobile ? "100%" : 90,flexShrink:0,padding: isMobile ? "12px 14px" : "13px 8px",cursor:"pointer"}} value={cForm.dialCode} onChange={e=>setCF("dialCode",e.target.value)}>{DIAL_CODES.map((d,i)=><option key={i} value={d.code}>{d.flag} {d.code}</option>)}</select><input className="fi" style={iSLg} type="tel" placeholder="647 XXX XXXX" value={cForm.phone} onChange={e=>setCF("phone",e.target.value)}/></div>
              </div>
            </div>
            <div style={{marginBottom: isMobile ? 12 : 16}}><label style={{display:"block",fontSize: isMobile ? 11 : 12.5,fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Business Email *</label><input className="fi" required type="email" style={iSLg} placeholder="jane@yourcompany.com" value={cForm.email} onChange={e=>setCF("email",e.target.value)}/></div>
            <div style={{marginBottom: isMobile ? 12 : 16}}><label style={{display:"block",fontSize: isMobile ? 11 : 12.5,fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Service of Interest</label><select className="fi" style={{...iSLg,cursor:"pointer"}} value={cForm.service} onChange={e=>setCF("service",e.target.value)}><option value="">Select a service...</option>{SERVICES_LIST.map(s=><option key={s} value={s}>{s}</option>)}</select></div>
            <div style={{marginBottom:20}}><label style={{display:"block",fontSize: isMobile ? 11 : 12.5,fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:5,textTransform:"uppercase" as const,letterSpacing:"0.04em"}}>Project Description</label><textarea className="fi" style={{...iSLg,minHeight: isMobile ? 80 : 110,resize:"vertical" as const}} placeholder="Describe your current marketing setup, goals, and what you want to automate..." value={cForm.project} onChange={e=>setCF("project",e.target.value)}/></div>
            <button className="btn-teal" type="submit" disabled={cLoading} style={{width:"100%", opacity: cLoading ? 0.6 : 1, cursor: cLoading ? "wait" : "pointer"}}>{cLoading?"Sending...":"Submit — Get Free Automation Strategy →"}</button>
            <p style={{color:"rgba(255,255,255,0.3)",fontSize: isMobile ? 10 : 11.5,textAlign:"center",marginTop:12}}>🔒 Your information is 100% secure and never shared.</p>
          </form>
        )}
      </div>
      <div style={{display:"flex",flexDirection:"column",gap: isMobile ? 16 : 20}}>
        <div style={{background:"rgba(0,201,167,0.05)",border:"1px solid rgba(0,201,167,0.18)",borderRadius:18,padding: isMobile ? "20px" : "28px 26px"}}>
          <h3 style={{color:"#fff",fontSize: isMobile ? "15px" : "16px",fontWeight:800,marginBottom: isMobile ? 14 : 18}}>What Happens After You Submit?</h3>
          {[{s:"1",text:"We review your brief within a few hours — no bots, no templates."},{s:"2",text:"An automation strategist calls you within 24 hours."},{s:"3",text:"We send a free automation map with channels, tools, and timeline."},{s:"4",text:"You decide — no pressure, no obligation."}].map((s,i)=>(<div key={i} style={{display:"flex",gap: isMobile ? 10 : 14,alignItems:"flex-start",marginBottom:i<3? isMobile ? 12 : 16:0,padding: isMobile ? "8px 12px" : "12px 14px",borderRadius:10,background:"rgba(255,255,255,0.03)",transition:"background .2s",cursor:"default"}} onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.07)"} onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.03)"}><div style={{width: isMobile ? 28 : 32,height: isMobile ? 28 : 32,borderRadius:"50%",flexShrink:0,background:`linear-gradient(135deg,${T},${TD})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize: isMobile ? 10 : 11,fontWeight:900,color:"#000"}}>{s.s}</div><p style={{color:"rgba(255,255,255,0.65)",fontSize: isMobile ? "12px" : "14px",lineHeight:1.6,margin:0}}>{s.text}</p></div>))}
        </div>
        <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:18,padding: isMobile ? "20px" : "26px"}}>
          <h3 style={{color:"rgba(255,255,255,0.4)",fontSize: isMobile ? 10 : 11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase" as const,marginBottom: isMobile ? 14 : 18}}>Direct Contacts</h3>
          {[{flag:"🇨🇦",label:"Canada",phone:"+1 647-XXX-XXXX"},{flag:"🇺🇸",label:"USA",phone:"+1 631-XXX-XXXX"},{flag:"🇬🇧",label:"UK",phone:"+44 20-XXXX-XXXX"}].map((c,i)=>(<div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding: isMobile ? "8px 0" : "12px 0",borderBottom:i<2?"1px solid rgba(255,255,255,0.06)":"none",flexWrap:"wrap",gap:8}}><span style={{color:"rgba(255,255,255,0.55)",fontSize: isMobile ? "12px" : "14px",fontWeight:500}}>{c.flag} {c.label}</span><a href={`tel:${c.phone.replace(/\s|-/g,"")}`} className="h-teal" style={{color:T,fontSize: isMobile ? "12px" : "14px",fontWeight:700,textDecoration:"none"}}>{c.phone}</a></div>))}
          <div style={{marginTop: isMobile ? 12 : 16,paddingTop: isMobile ? 12 : 16,borderTop:"1px solid rgba(255,255,255,0.06)"}}><a href="mailto:hello@nncdigital.com" className="h-teal" style={{color:"rgba(255,255,255,0.5)",fontSize: isMobile ? "12px" : "14px",textDecoration:"none",display:"flex",alignItems:"center",gap:8}}>✉️ hello@nncdigital.com</a></div>
        </div>
        <div style={{display:"flex",flexWrap:"wrap",gap:8}}>{["🔵 Google Partner","🏆 ISO Certified","🔒 GDPR Compliant","🍁 PIPEDA Ready","⭐ Clutch Top Agency"].map(b=>(<span key={b} style={{padding: isMobile ? "4px 10px" : "6px 12px",borderRadius:100,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.03)",color:"rgba(255,255,255,0.5)",fontSize: isMobile ? "10px" : "12px",fontWeight:500}}>{b}</span>))}</div>
      </div>
    </div>
  </div>
</section>

  </div>
  </>);
}