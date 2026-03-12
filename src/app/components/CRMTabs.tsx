"use client";
import { useState, useEffect, useRef } from "react";

const TEAL      = "#00C9A7";
const TEAL_DARK = "#00a07a";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let step = 0;
        const t = setInterval(() => {
          step++;
          const ease = 1 - Math.pow(1 - step / 60, 3);
          setV(Math.round(ease * to));
          if (step >= 60) { setV(to); clearInterval(t); }
        }, 1600 / 60);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

const TABS = [
  {
    id: 0, label: "Custom CRM Solutions", icon: "🎛️",
    items: [
      { icon: "📱", title: "CRM Mobile App System",    desc: "Native mobile CRM for iOS & Android to manage customers on the go." },
      { icon: "⚙️", title: "Custom CRM Development",   desc: "Fully bespoke CRM built around your exact business workflows." },
      { icon: "☁️", title: "Cloud-Based CRM Services", desc: "Scalable, secure cloud CRM infrastructure for growing teams." },
      { icon: "📊", title: "Real-Time Dashboards",     desc: "Live analytics and reporting dashboards for instant business insights." },
    ],
  },
  {
    id: 1, label: "CRM Software Management", icon: "🔧",
    items: [
      { icon: "🔐", title: "User Role & Permission Mgmt",  desc: "Granular access control to keep your data safe and teams efficient." },
      { icon: "🧹", title: "Data Quality & Deduplication", desc: "Clean, consistent data with automated dedup and validation rules." },
      { icon: "🔄", title: "Workflow Automation Mgmt",     desc: "Streamline approvals, notifications, and task assignments automatically." },
      { icon: "🔗", title: "Third-Party App Management",   desc: "Manage integrations with 50+ tools from one central CRM hub." },
    ],
  },
  {
    id: 2, label: "CRM Software Optimization", icon: "🚀",
    items: [
      { icon: "⚡", title: "Performance Tuning",      desc: "Optimize CRM speed, load times, and query performance at scale." },
      { icon: "📈", title: "Conversion Optimization", desc: "Refine pipelines and processes to maximize lead-to-customer rates." },
      { icon: "🤖", title: "AI-Powered Insights",     desc: "Leverage machine learning to predict churn and surface opportunities." },
      { icon: "🔍", title: "Audit & Health Checks",   desc: "Regular CRM audits to identify gaps, risks, and improvement areas." },
    ],
  },
];

const STATS = [
  { n: 1500, s: "+", label: "Web Projects"  },
  { n: 500,  s: "+", label: "Mobile Apps"   },
  { n: 10,   s: "+", label: "Years"         },
  { n: 25,   s: "+", label: "Industries"    },
];

export default function CRMTabs() {
  const [active, setActive] = useState(0);

  return (
    <section style={{
      padding: "72px 48px",
      background: "linear-gradient(180deg,#030B18 0%,#061425 100%)",
      position: "relative", overflow: "hidden",
      fontFamily: "'Poppins',sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        @keyframes ctFade { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }

        /* BG grid */
        .ct-bg {
          position:absolute; inset:0; pointer-events:none; z-index:0;
          background-image:
            linear-gradient(rgba(0,201,167,.025) 1px,transparent 1px),
            linear-gradient(90deg,rgba(0,201,167,.025) 1px,transparent 1px);
          background-size:56px 56px;
        }

        /* TWO-COLUMN layout — CSS grid only, no JS */
        .ct-layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 36px;
          align-items: start;
        }

        /* Feature cards grid inside right col */
        .ct-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          animation: ctFade 0.4s ease both;
        }

        /* Individual card hover */
        .ct-card {
          display:flex; gap:14px; align-items:flex-start;
          padding:22px 18px; border-radius:14px;
          border:1px solid rgba(255,255,255,0.07);
          background:rgba(255,255,255,0.03);
          transition:transform .25s,border-color .25s,background .25s;
          cursor:default;
        }
        .ct-card:hover {
          transform:translateY(-5px);
          border-color:rgba(0,201,167,0.3);
          background:rgba(0,201,167,0.04);
        }

        /* Tab button hover */
        .ct-tab:hover {
          border-color:rgba(0,201,167,0.3) !important;
          color:rgba(255,255,255,0.9) !important;
          background:rgba(0,201,167,0.06) !important;
        }

        /* Stat row hover */
        .ct-stat:hover { background:rgba(0,201,167,0.12) !important; }

        /* CTA hover */
        .ct-cta:hover {
          transform:translateY(-2px) !important;
          box-shadow:0 10px 28px rgba(0,201,167,0.35) !important;
        }

        /* Responsive */
        @media (max-width:1100px) {
          .ct-layout { grid-template-columns:1fr !important; }
        }
        @media (max-width:680px) {
          .ct-cards  { grid-template-columns:1fr !important; }
          .ct-tabs   { flex-direction:column !important; }
          .ct-tab    { width:100% !important; justify-content:center !important; }
          section.ct-section { padding:56px 20px !important; }
        }
      `}</style>

      <div className="ct-bg" />
      <div style={{
        position:"absolute", top:"15%", right:"-5%",
        width:500, height:500, borderRadius:"50%",
        background:"radial-gradient(circle,rgba(0,201,167,0.06) 0%,transparent 65%)",
        pointerEvents:"none", zIndex:0,
      }}/>

      <div style={{ maxWidth:1280, margin:"0 auto", position:"relative", zIndex:2 }}>

        {/* Heading */}
        <div style={{ marginBottom:40 }}>
          <div style={{
            display:"inline-flex", alignItems:"center", gap:8,
            background:"rgba(0,201,167,0.08)", border:"1px solid rgba(0,201,167,0.22)",
            borderRadius:100, padding:"6px 18px", marginBottom:16,
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:TEAL, display:"block", boxShadow:`0 0 8px ${TEAL}` }}/>
            <span style={{ color:TEAL, fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase" }}>
              Why Choose Us
            </span>
          </div>
          <h2 style={{
            fontSize:"clamp(26px,3vw,42px)", fontWeight:900, color:"#fff",
            letterSpacing:"-0.02em", lineHeight:1.15, marginBottom:14, maxWidth:680,
          }}>
            Your Best Custom CRM{" "}
            <span style={{ background:`linear-gradient(135deg,${TEAL},#1fd1b5)`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Development Company
            </span>
          </h2>
          <p style={{ color:"rgba(255,255,255,0.5)", fontSize:16, lineHeight:1.75, maxWidth:560, fontWeight:400 }}>
            Here&apos;s what we bring to the table in terms of custom CRM development.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="ct-tabs" style={{ display:"flex", gap:12, marginBottom:32, flexWrap:"wrap" }}>
          {TABS.map(tab => (
            <button key={tab.id} className="ct-tab" onClick={() => setActive(tab.id)} style={{
              display:"flex", alignItems:"center", gap:9,
              padding:"12px 22px", borderRadius:10, cursor:"pointer",
              border: active === tab.id ? `1px solid rgba(0,201,167,0.5)` : "1px solid rgba(255,255,255,0.1)",
              background: active === tab.id ? "rgba(0,201,167,0.12)" : "rgba(255,255,255,0.03)",
              color: active === tab.id ? TEAL : "rgba(255,255,255,0.55)",
              fontSize:14, fontWeight:600, fontFamily:"'Poppins',sans-serif", whiteSpace:"nowrap",
              boxShadow: active === tab.id ? "0 4px 20px rgba(0,201,167,0.12)" : "none",
              transition:"all .22s ease",
            }}>
              <span>{tab.icon}</span> {tab.label}
            </button>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="ct-layout">

          {/* LEFT — Stats */}
          <div style={{
            background:"rgba(255,255,255,0.02)",
            border:"1px solid rgba(255,255,255,0.07)",
            borderRadius:20, padding:"28px 24px",
          }}>
            <p style={{ color:TEAL, fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:6 }}>
              Our Track Record
            </p>
            <h3 style={{ color:"#fff", fontSize:17, fontWeight:800, marginBottom:24, lineHeight:1.35 }}>
              Numbers That Define Our Expertise
            </h3>

            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              {STATS.map(st => (
                <div key={st.label} className="ct-stat" style={{
                  display:"flex", alignItems:"center", justifyContent:"space-between",
                  padding:"14px 16px", borderRadius:12,
                  background:"rgba(0,201,167,0.06)", border:"1px solid rgba(0,201,167,0.14)",
                  transition:"background .2s",
                }}>
                  <span style={{ color:"rgba(255,255,255,0.6)", fontSize:14, fontWeight:500 }}>{st.label}</span>
                  <span style={{
                    fontSize:24, fontWeight:900,
                    background:`linear-gradient(135deg,#fff 30%,${TEAL})`,
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                  }}>
                    <Counter to={st.n} suffix={st.s}/>
                  </span>
                </div>
              ))}
            </div>

            <button className="ct-cta" style={{
              marginTop:22, width:"100%", padding:"13px", borderRadius:10, border:"none",
              background:`linear-gradient(135deg,${TEAL},${TEAL_DARK})`,
              color:"#000", fontWeight:700, fontSize:14,
              fontFamily:"'Poppins',sans-serif", cursor:"pointer",
              transition:"transform .2s,box-shadow .2s",
            }}>
              Book a Free Strategy Call →
            </button>
          </div>

          {/* RIGHT — Feature cards */}
          <div className="ct-cards" key={active}>
            {TABS[active].items.map((item, i) => (
              <div key={i} className="ct-card">
                <div style={{
                  width:46, height:46, borderRadius:12, flexShrink:0,
                  background:"rgba(0,201,167,0.1)", border:"1px solid rgba(0,201,167,0.2)",
                  display:"flex", alignItems:"center", justifyContent:"center", fontSize:22,
                }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ color:"#fff", fontSize:15, fontWeight:700, marginBottom:5, lineHeight:1.3 }}>
                    {item.title}
                  </h4>
                  <p style={{ color:"rgba(255,255,255,0.5)", fontSize:13.5, lineHeight:1.65, margin:0, fontWeight:400 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}