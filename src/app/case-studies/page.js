

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const T  = "#00C9A7";
const TD = "#00a07a";
const N0 = "#010812";
const N1 = "#030B18";
const N2 = "#061425";

const FILTERS = ["All","CRM","ERP","Web","Mobile","Automation","Industry"];

const CASES = [
  {
    id:1, category:"CRM", industry:"Manufacturing", icon:"🏭",
    title:"Enterprise CRM for a Manufacturing Client",
    result:"35% Efficiency Gain",
    challenge:"A mid-sized manufacturer managing their dealer network across spreadsheets and disconnected email chains — poor pipeline visibility, no mobile access, no leadership reporting.",
    solution:"Custom CRM with automated dealer management, lead assignment, real-time sales tracking, and a field rep mobile app — fully integrated with their existing ERP.",
    results:["35% improvement in operational efficiency","Sales pipeline visibility from zero to real-time","Field rep response time reduced by 60%","Full dealer network performance visibility for leadership"],
    link:"/case-studies/manufacturing-crm",
  },
  {
    id:2, category:"Mobile + CRM", industry:"Healthcare", icon:"🏥",
    title:"Mobile App + CRM for Healthcare Provider",
    result:"42% Increase in Repeat Bookings",
    challenge:"A multi-location allied health clinic losing patients between appointments — poor follow-up and no digital touchpoints between visits.",
    solution:"Patient-facing mobile app with WhatsApp automated reminders, online booking, and a backend CRM tracking patient history and triggering follow-up sequences automatically.",
    results:["42% increase in repeat bookings within 90 days","WhatsApp reminder open rates above 85%","Front desk workload reduced by 30%"],
    link:"/case-studies/healthcare-mobile-crm",
  },
  {
    id:3, category:"Automation", industry:"E-Commerce", icon:"🛒",
    title:"Full Funnel Automation for D2C Brand",
    result:"2.4× Lead Conversion",
    challenge:"D2C brand generating ad traffic but converting fewer than 3% of leads into customers. CRM disconnected from ad platforms. Follow-up entirely manual.",
    solution:"End-to-end funnel automation — Google and Meta ads connected to CRM, automated email and WhatsApp nurture sequences, redesigned landing pages for conversion.",
    results:["2.4× improvement in lead-to-customer conversion","Cost per acquisition reduced by 38%","Full ad spend attribution to closed revenue for the first time"],
    link:"/case-studies/d2c-automation",
  },
  {
    id:4, category:"ERP", industry:"Distribution", icon:"📦",
    title:"Custom ERP for Distribution Company",
    result:"28% Inventory Reduction",
    challenge:"A distribution company with 5 warehouses had no real-time inventory visibility, leading to stockouts, over-ordering, and delayed customer shipments.",
    solution:"Cloud-based ERP with real-time inventory tracking, automated reorder points, warehouse management system, and customer portal for order tracking.",
    results:["28% reduction in overall inventory levels","Stockouts eliminated entirely","Order fulfilment time reduced from 3 days to 6 hours","Customer satisfaction score increased by 34%"],
    link:"/case-studies/distribution-erp",
  },
  {
    id:5, category:"Web", industry:"Professional Services", icon:"💼",
    title:"Client Portal for Professional Services Firm",
    result:"52% Faster Client Onboarding",
    challenge:"A professional services firm onboarding new clients with PDF forms, email attachments, and manual data entry — leading to errors and slow turnaround.",
    solution:"Custom client portal with digital forms, automated workflows, document management, and integration with their practice management system.",
    results:["52% faster client onboarding time","Data entry errors reduced by 97%","Client satisfaction score improved from 3.8 to 4.9","Administrative time saved: 18 hours per week"],
    link:"/case-studies/professional-services-portal",
  },
  {
    id:6, category:"Mobile", industry:"Field Service", icon:"🔧",
    title:"Field Service Mobile App",
    result:"41% More Jobs Per Day",
    challenge:"Field service technicians using paper job sheets and manual scheduling — jobs lost, duplicate visits, and no real-time visibility for dispatchers.",
    solution:"Native mobile app with offline capability, GPS-optimised scheduling, digital job sign-off, and real-time sync with back-office systems.",
    results:["41% increase in jobs completed per technician per day","Travel time reduced by 28%","Paperwork eliminated completely","First-time fix rate improved from 72% to 91%"],
    link:"/case-studies/field-service-app",
  },
];

const DIAL_CODES = [
  { code:"+1",  flag:"🇨🇦" },
  { code:"+1",  flag:"🇺🇸" },
  { code:"+44", flag:"🇬🇧" },
  { code:"+91", flag:"🇮🇳" },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.08 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}


function CaseCard({ cs }) {
  const { ref, visible } = useReveal();
  const [hov, setHov] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background:"rgba(255,255,255,0.025)",
        border:`1px solid ${hov ? T : "rgba(0,201,167,0.15)"}`,
        borderRadius:"20px", overflow:"hidden",
        transition:"all 0.4s ease",
        transform: visible ? (hov ? "translateY(-6px)" : "translateY(0)") : "translateY(28px)",
        opacity: visible ? 1 : 0,
        boxShadow: hov ? `0 24px 52px rgba(0,0,0,0.45)` : "none",
      }}
    >
      <div style={{
        height:"3px",
        background:`linear-gradient(90deg,transparent,${T},transparent)`,
        opacity: hov ? 1 : 0.4, transition:"opacity 0.4s",
      }}/>

      <div style={{ padding:"clamp(20px,4vw,40px)" }}>
        {/* Header */}
        <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-start", gap:"16px", marginBottom:"24px" }}>
          <div style={{
            width:"clamp(48px,8vw,64px)", height:"clamp(48px,8vw,64px)",
            borderRadius:"14px", flexShrink:0,
            background:"rgba(0,201,167,0.08)",
            border:`1px solid ${hov ? T : "rgba(0,201,167,0.2)"}`,
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:"clamp(22px,4vw,32px)",
            transition:"all 0.3s ease",
            transform: hov ? "scale(1.08) rotate(4deg)" : "scale(1) rotate(0deg)",
          }}>{cs.icon}</div>

          <div style={{ flex:1, minWidth:"200px" }}>
            <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", gap:"8px", marginBottom:"8px" }}>
              <span style={{
                padding:"4px 12px", borderRadius:"100px",
                background:"rgba(0,201,167,0.1)", border:"1px solid rgba(0,201,167,0.3)",
                color:T, fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.06em",
              }}>{cs.category}</span>
              <span style={{ color:"rgba(255,255,255,0.35)", fontSize:"11px" }}>•</span>
              <span style={{ color:"rgba(255,255,255,0.55)", fontSize:"12px" }}>{cs.industry}</span>
            </div>
            <h2 style={{ color:"#fff", margin:0, fontSize:"clamp(18px,3vw,26px)", fontWeight:800, lineHeight:1.3 }}>{cs.title}</h2>
            <p style={{
              color:T, fontWeight:700, margin:"6px 0 0", fontSize:"clamp(13px,2vw,15px)",
              transition:"transform 0.3s", transform: hov ? "translateX(5px)" : "translateX(0)",
            }}>⚡ {cs.result}</p>
          </div>
        </div>

        {/* Challenge / Solution */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,280px),1fr))",
          gap:"clamp(16px,3vw,28px)", marginBottom:"24px",
        }}>
          {[
            { emoji:"⚠️", label:"The Challenge", text:cs.challenge },
            { emoji:"💡", label:"The Solution",  text:cs.solution  },
          ].map(({ emoji, label, text }) => (
            <div key={label}>
              <h4 style={{
                color:T, fontSize:"11px", fontWeight:700, letterSpacing:"0.1em",
                textTransform:"uppercase", marginBottom:"10px",
                display:"flex", alignItems:"center", gap:"6px",
              }}><span>{emoji}</span>{label}</h4>
              <p style={{ color:"rgba(255,255,255,0.68)", fontSize:"clamp(13px,2vw,15px)", lineHeight:1.72, margin:0 }}>{text}</p>
            </div>
          ))}
        </div>

        {/* Results */}
        <div style={{ marginBottom:"24px" }}>
          <h4 style={{
            color:T, fontSize:"11px", fontWeight:700, letterSpacing:"0.1em",
            textTransform:"uppercase", marginBottom:"14px",
            display:"flex", alignItems:"center", gap:"6px",
          }}><span>📊</span>The Results</h4>
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,220px),1fr))",
            gap:"10px",
          }}>
            {cs.results.map((r, i) => (
              <div key={i} style={{
                display:"flex", alignItems:"flex-start", gap:"10px",
                padding:"12px 14px", borderRadius:"10px",
                background:"rgba(255,255,255,0.03)",
                border:`1px solid ${hov ? T+"30" : "rgba(255,255,255,0.06)"}`,
                transition:"border-color 0.3s",
              }}>
                <span style={{ color:T, fontSize:"16px", flexShrink:0, marginTop:"1px" }}>✅</span>
                <span style={{ color:"rgba(255,255,255,0.8)", fontSize:"clamp(12px,2vw,14px)", lineHeight:1.5 }}>{r}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign:"right" }}>
          <Link
            href={cs.link}
            style={{
              display:"inline-flex", alignItems:"center", gap:"6px",
              color:T, fontSize:"14px", fontWeight:700, textDecoration:"none",
              borderBottom:`1px solid rgba(0,201,167,0.35)`, paddingBottom:"2px",
              transition:"gap 0.25s ease, border-color 0.25s",
            }}
            onMouseEnter={e => { e.currentTarget.style.gap="12px"; e.currentTarget.style.borderBottomColor=T; }}
            onMouseLeave={e => { e.currentTarget.style.gap="6px"; e.currentTarget.style.borderBottomColor="rgba(0,201,167,0.35)"; }}
          >
            View Full Case Study <span style={{ fontSize:"16px" }}>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesPage() {
  const [active,    setActive]  = useState("All");
  const [formData,  setForm]    = useState({ name:"", phone:"", dialCode:"+1", email:"", project:"" });
  const [submitted, setSub]     = useState(false);
  const [loading,   setLoading] = useState(false);

  const shown = active === "All"
    ? CASES
    : CASES.filter(c => c.category.includes(active) || c.industry === active);

  const setField = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const handleSubmit = (e) => {
    e.preventDefault(); setLoading(true);
    setTimeout(() => { setLoading(false); setSub(true); }, 1200);
  };

  const inp = {
    width:"100%", padding:"13px 16px", borderRadius:"9px",
    background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)",
    color:"#fff", fontSize:"14px", fontFamily:"'Poppins',sans-serif",
    outline:"none", boxSizing:"border-box", transition:"all 0.3s",
  };
  const onFocus = (e) => { e.target.style.borderColor=T; e.target.style.boxShadow=`0 0 0 2px ${T}35`; };
  const onBlur  = (e) => { e.target.style.borderColor="rgba(255,255,255,0.12)"; e.target.style.boxShadow="none"; };

  return (
    <>
      <Navbar />

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp    { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scaleIn   { from{opacity:0;transform:scale(.92)} to{opacity:1;transform:scale(1)} }
        @keyframes pulseDot  { 0%,100%{transform:scale(1)} 50%{transform:scale(1.6)} }
        @keyframes floatA    { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-20px,-20px)} }
        @keyframes floatB    { 0%,100%{transform:translate(0,0)} 50%{transform:translate(18px,18px)} }
        @keyframes gridDrift { from{background-position:0 0} to{background-position:60px 60px} }

        /*
         * FILTER SCROLL — the ONLY reliable approach:
         * 1. .cs-filter-bar   → background + border only, NO overflow, NO position:sticky
         * 2. .cs-filter-track → the actual scrolling element, overflow-x:auto
         * 3. .cs-filter-btn   → flex-shrink:0 so buttons are NEVER compressed
         *
         * position:sticky is deliberately removed because it creates a new
         * overflow context on many mobile browsers when any ancestor has
         * overflow set — causing the scroll to silently break.
         * The bar stays visible via normal document flow instead.
         */
        .cs-filter-bar {
          background: ${N1};
          border-bottom: 1px solid rgba(0,201,167,0.12);
          /* Intentionally NO: overflow, position:sticky, position:fixed */
        }

        .cs-filter-track {
          display: flex;
          flex-wrap: nowrap;          /* single row always */
          align-items: center;
          gap: 8px;
          /* THE scroll container */
          overflow-x: auto;
          overflow-y: visible;
          -webkit-overflow-scrolling: touch;
          /* hide scrollbar visually */
          scrollbar-width: none;
          -ms-overflow-style: none;
          /* padding so first/last pill has breathing room */
          padding: 14px 16px 16px 16px;
        }
        .cs-filter-track::-webkit-scrollbar {
          display: none;
        }

        /* On wide screens: wrap & center instead of scroll */
        @media (min-width: 860px) {
          .cs-filter-track {
            flex-wrap: wrap;
            overflow-x: visible;
            justify-content: center;
            padding: 16px 48px 18px;
            gap: 10px;
          }
        }

        .cs-filter-btn {
          /* NEVER shrink — this is what keeps all buttons visible */
          flex-shrink: 0;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          padding: 9px 20px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.65);
          transition: all 0.25s ease;
        }
        .cs-filter-btn:hover {
          border-color: ${T};
          color: #fff;
        }
        .cs-filter-btn.cs-active {
          background: linear-gradient(135deg, ${T}, #1fd1b5) !important;
          color: #000 !important;
          border-color: transparent !important;
          font-weight: 700;
          box-shadow: 0 4px 16px ${T}40;
        }
      `}</style>

      {/* ══ MODULE 1 — HERO ══════════════════════════════════════════ */}
      <section style={{
        padding:"clamp(42px,4vw,96px) clamp(16px,5vw,48px) clamp(60px,8vw,88px)",
        background:`linear-gradient(135deg,${N0} 0%,#041628 45%,${N0} 100%)`,
        position:"relative", overflow:"hidden", textAlign:"center",
      }}>
        <div style={{ position:"absolute",width:"600px",height:"600px",borderRadius:"50%",background:`radial-gradient(circle,${T}12 0%,transparent 65%)`,top:"-20%",right:"-8%",pointerEvents:"none",animation:"floatA 22s ease-in-out infinite" }}/>
        <div style={{ position:"absolute",width:"340px",height:"340px",borderRadius:"50%",background:"radial-gradient(circle,#8B5CF620 0%,transparent 65%)",bottom:"-12%",left:"-5%",pointerEvents:"none",animation:"floatB 17s ease-in-out infinite" }}/>
        {/* <div style={{ position:"absolute",inset:0,pointerEvents:"none",backgroundImage:`linear-gradient(rgba(0,201,167,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.035) 1px,transparent 1px)`,backgroundSize:"60px 60px",animation:"gridDrift 25s linear infinite" }}/> */}

        <div style={{ maxWidth:"960px",margin:"0 auto",position:"relative",zIndex:2,animation:"fadeUp .8s ease both" }}>
          <div style={{ display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(0,201,167,.08)",border:"1px solid rgba(0,201,167,.25)",borderRadius:"100px",padding:"6px 20px",marginBottom:"22px" }}>
            <span style={{ width:"7px",height:"7px",borderRadius:"50%",background:T,display:"inline-block",boxShadow:`0 0 8px ${T}`,animation:"pulseDot 2s ease-in-out infinite" }}/>
            <span style={{ color:T,fontSize:"11px",fontWeight:700,letterSpacing:".12em" }}>OUR WORK</span>
          </div>

          <h1 style={{ fontSize:"clamp(28px,6vw,58px)",fontWeight:900,lineHeight:1.12,marginBottom:"20px",color:"#fff",letterSpacing:"-.025em" }}>
            Real Systems.{" "}
            <span style={{ background:`linear-gradient(135deg,${T},#1fd1b5)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>Measurable Results.</span>
            {" "}Real Businesses.
          </h1>

          <p style={{ color:"rgba(255,255,255,.54)",fontSize:"clamp(14px,2vw,17px)",lineHeight:1.85,maxWidth:"720px",margin:"0 auto 32px" }}>
            We don't just build technology — we build outcomes. Here are results our clients across North America, the UK, and beyond have achieved working with NNC Digital, backed by Nakshatra Namaha Creations.
          </p>

          <div style={{ display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"10px" }}>
            {["🏆 8+ Years","🌍 3 Continents","⚡ 565+ Projects","🤝 98% Retention"].map(b => (
              <span key={b} style={{ padding:"8px 18px",borderRadius:"100px",border:"1px solid rgba(0,201,167,.25)",background:"rgba(0,201,167,.06)",color:"rgba(255,255,255,.82)",fontSize:"clamp(11px,2.5vw,13px)",fontWeight:600 }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MODULE 2 — FILTER BAR ════════════════════════════════════
          .cs-filter-bar has NO overflow and NO position:sticky.
          .cs-filter-track is the ONLY element that scrolls.
          .cs-filter-btn has flex-shrink:0 — never hidden.
      ══════════════════════════════════════════════════════════════ */}
      <div className="cs-filter-bar">
        <div className="cs-filter-track">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`cs-filter-btn${active === f ? " cs-active" : ""}`}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
            >
              {f}
            </button>
          ))}
        </div>
        <p style={{ textAlign:"center",color:"rgba(255,255,255,.3)",fontSize:"12px",padding:"0 16px 12px" }}>
          Showing{" "}
          <span style={{ color:T,fontWeight:600 }}>{shown.length}</span>
          {" "}case {shown.length === 1 ? "study" : "studies"}
        </p>
      </div>

      {/* ══ MODULE 3 — CASE STUDY CARDS ══════════════════════════════ */}
      <section style={{ padding:"clamp(40px,6vw,72px) clamp(16px,4vw,48px)",background:N2,position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"linear-gradient(rgba(0,201,167,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.018) 1px,transparent 1px)",backgroundSize:"56px 56px" }}/>
        <div style={{ maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:2 }}>

          <div style={{ textAlign:"center",marginBottom:"clamp(28px,4vw,48px)" }}>
            <h2 style={{ fontSize:"clamp(24px,4vw,38px)",fontWeight:900,color:"#fff",letterSpacing:"-.02em" }}>
              Featured{" "}
              <span style={{ background:`linear-gradient(135deg,${T},#1fd1b5)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>Case Studies</span>
            </h2>
          </div>

          {shown.length > 0 ? (
            <div style={{ display:"flex",flexDirection:"column",gap:"clamp(20px,4vw,36px)" }}>
              {shown.map(cs => <CaseCard key={cs.id} cs={cs} />)}
            </div>
          ) : (
            <div style={{ textAlign:"center",padding:"60px 20px",background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.05)",borderRadius:"16px" }}>
              <div style={{ fontSize:"36px",marginBottom:"12px" }}>📭</div>
              <p style={{ color:"rgba(255,255,255,.5)",fontSize:"16px" }}>No case studies match this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* ══ MODULE 4 — CTA + CONTACT FORM ════════════════════════════ */}
      <section style={{ padding:"clamp(52px,6vw,88px) clamp(16px,4vw,48px)",background:`linear-gradient(180deg,${N1} 0%,${N0} 100%)`,position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",top:"15%",left:"50%",transform:"translateX(-50%)",width:"700px",height:"360px",borderRadius:"50%",background:"radial-gradient(ellipse,rgba(0,201,167,.05) 0%,transparent 65%)",pointerEvents:"none",zIndex:0 }}/>

        <div style={{ maxWidth:"960px",margin:"0 auto",position:"relative",zIndex:2 }}>
          <div style={{ textAlign:"center",marginBottom:"clamp(28px,4vw,48px)" }}>
            <div style={{ display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(0,201,167,.08)",border:"1px solid rgba(0,201,167,.22)",borderRadius:"100px",padding:"6px 18px",marginBottom:"16px" }}>
              <span style={{ width:"6px",height:"6px",borderRadius:"50%",background:T,display:"inline-block" }}/>
              <span style={{ color:T,fontSize:"11px",fontWeight:700,letterSpacing:".1em" }}>WORK WITH US</span>
            </div>
            <h2 style={{ fontSize:"clamp(24px,4vw,40px)",fontWeight:900,color:"#fff",letterSpacing:"-.02em",lineHeight:1.15,marginBottom:"14px" }}>
              Ready to Be Our{" "}
              <span style={{ background:`linear-gradient(135deg,${T},#1fd1b5)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>Next Success Story?</span>
            </h2>
            <p style={{ color:"rgba(255,255,255,.5)",fontSize:"clamp(14px,2vw,16px)",maxWidth:"580px",margin:"0 auto" }}>
              Tell us about your project. We'll respond within 24 hours with a free consultation and honest advice.
            </p>
          </div>

          <div style={{ background:"rgba(255,255,255,.025)",border:"1px solid rgba(255,255,255,.08)",borderRadius:"20px",padding:"clamp(24px,5vw,48px)" }}>
            {submitted ? (
              <div style={{ textAlign:"center",padding:"clamp(24px,4vw,48px) 20px" }}>
                <div style={{ fontSize:"clamp(44px,8vw,64px)",marginBottom:"18px" }}>🎉</div>
                <h3 style={{ color:"#fff",fontSize:"clamp(20px,4vw,26px)",fontWeight:800,marginBottom:"12px" }}>Message Sent!</h3>
                <p style={{ color:"rgba(255,255,255,.58)",fontSize:"clamp(13px,2vw,16px)",marginBottom:"28px" }}>
                  Thank you for reaching out. Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => { setSub(false); setForm({ name:"",phone:"",dialCode:"+1",email:"",project:"" }); }}
                  style={{ padding:"12px 32px",borderRadius:"10px",border:"none",background:`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:700,fontSize:"15px",fontFamily:"'Poppins',sans-serif",cursor:"pointer" }}
                >Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,260px),1fr))",gap:"clamp(14px,3vw,24px)",marginBottom:"clamp(14px,3vw,24px)" }}>
                  <div>
                    <label style={{ display:"block",fontSize:"11px",fontWeight:600,color:"rgba(255,255,255,.45)",marginBottom:"8px",textTransform:"uppercase",letterSpacing:".05em" }}>Full Name *</label>
                    <input required style={inp} placeholder="Jane Smith" value={formData.name} onChange={e=>setField("name",e.target.value)} onFocus={onFocus} onBlur={onBlur}/>
                  </div>
                  <div>
                    <label style={{ display:"block",fontSize:"11px",fontWeight:600,color:"rgba(255,255,255,.45)",marginBottom:"8px",textTransform:"uppercase",letterSpacing:".05em" }}>Phone</label>
                    <div style={{ display:"flex",gap:"8px" }}>
                      <select style={{ ...inp,width:"88px",flexShrink:0,padding:"13px 8px",cursor:"pointer" }} value={formData.dialCode} onChange={e=>setField("dialCode",e.target.value)} onFocus={onFocus} onBlur={onBlur}>
                        {DIAL_CODES.map((d,i) => <option key={i} value={d.code}>{d.flag} {d.code}</option>)}
                      </select>
                      <input type="tel" style={inp} placeholder="647 XXX XXXX" value={formData.phone} onChange={e=>setField("phone",e.target.value)} onFocus={onFocus} onBlur={onBlur}/>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom:"clamp(14px,3vw,24px)" }}>
                  <label style={{ display:"block",fontSize:"11px",fontWeight:600,color:"rgba(255,255,255,.45)",marginBottom:"8px",textTransform:"uppercase",letterSpacing:".05em" }}>Business Email *</label>
                  <input required type="email" style={inp} placeholder="jane@yourcompany.com" value={formData.email} onChange={e=>setField("email",e.target.value)} onFocus={onFocus} onBlur={onBlur}/>
                </div>

                <div style={{ marginBottom:"clamp(20px,4vw,32px)" }}>
                  <label style={{ display:"block",fontSize:"11px",fontWeight:600,color:"rgba(255,255,255,.45)",marginBottom:"8px",textTransform:"uppercase",letterSpacing:".05em" }}>Project Description</label>
                  <textarea style={{ ...inp,minHeight:"clamp(96px,15vw,130px)",resize:"vertical" }} placeholder="Tell us about your project, goals, and timeline..." value={formData.project} onChange={e=>setField("project",e.target.value)} onFocus={onFocus} onBlur={onBlur}/>
                </div>

                <button
                  type="submit" disabled={loading}
                  style={{ width:"100%",padding:"clamp(13px,2.5vw,16px)",borderRadius:"12px",border:"none",background:loading?"rgba(0,201,167,.5)":`linear-gradient(135deg,${T},${TD})`,color:"#000",fontWeight:800,fontSize:"clamp(14px,2vw,16px)",fontFamily:"'Poppins',sans-serif",cursor:loading?"wait":"pointer",transition:"all .3s ease" }}
                  onMouseEnter={e => { if(!loading) e.currentTarget.style.boxShadow=`0 10px 28px ${T}70`; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow="none"; }}
                >
                  {loading ? "Sending…" : "Submit — Let's Build Something Great →"}
                </button>
                <p style={{ color:"rgba(255,255,255,.28)",fontSize:"12px",textAlign:"center",marginTop:"14px" }}>🔒 Your information is 100% secure and never shared.</p>
              </form>
            )}
          </div>

          <div style={{ display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"clamp(14px,3vw,32px)",marginTop:"28px" }}>
            {[
              { flag:"🇨🇦",label:"Canada",phone:"+1 647-XXX-XXXX" },
              { flag:"🇺🇸",label:"USA",phone:"+1 631-XXX-XXXX" },
              { flag:"🇬🇧",label:"UK",phone:"+44 20-XXXX-XXXX" },
            ].map(c => (
              <div key={c.label} style={{ display:"flex",alignItems:"center",gap:"8px" }}>
                <span style={{ fontSize:"17px" }}>{c.flag}</span>
                <span style={{ color:"rgba(255,255,255,.35)",fontSize:"12px" }}>{c.label}:</span>
                <a href={`tel:${c.phone.replace(/[\s-]/g,"")}`} style={{ color:T,fontSize:"clamp(12px,2vw,14px)",fontWeight:600,textDecoration:"none" }}>{c.phone}</a>
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center",marginTop:"14px" }}>
            <a href="mailto:hello@nncdigital.com" style={{ color:"rgba(255,255,255,.42)",fontSize:"clamp(12px,2vw,14px)",textDecoration:"none" }}>✉️ hello@nncdigital.com</a>
          </div>
        </div>
      </section>
    </>
  );
}