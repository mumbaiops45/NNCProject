"use client";
import { useState } from "react";

const TEAL = "#00C9A7";
const TEAL_DARK = "#00a07a";

const CASES = [
  {
    industry: "Manufacturing",
    tag: "Operations",
    tagColor: "rgba(99,102,241,0.15)",
    tagBorder: "rgba(99,102,241,0.35)",
    tagText: "#818cf8",
    icon: "🏭",
    title: "35% Efficiency Boost for a Canadian Manufacturer",
    challenge: "Manual data entry across 3 legacy systems was causing delays and costly errors in production scheduling.",
    solution: "We built a custom CRM integrated with their ERP, automating workflows from lead to delivery.",
    result: "35% efficiency gain",
    resultDetail: "Reduction in manual processing time within 90 days of go-live.",
    metrics: [
      { label: "Efficiency Gain", val: "35%", icon: "⚡" },
      { label: "Data Errors",     val: "−90%", icon: "✅" },
      { label: "Go-live Time",    val: "8 wks", icon: "🚀" },
    ],
  },
  {
    industry: "Healthcare",
    tag: "Healthcare",
    tagColor: "rgba(34,197,94,0.12)",
    tagBorder: "rgba(34,197,94,0.3)",
    tagText: "#22c55e",
    icon: "🏥",
    title: "42% More Bookings for a UK Healthcare Provider",
    challenge: "A multi-location clinic was losing patients due to manual appointment processes and poor follow-up systems.",
    solution: "NNC deployed a Salesforce Health Cloud CRM with automated WhatsApp reminders and a patient self-service portal.",
    result: "42% increase in bookings",
    resultDetail: "Patient appointment volume within 60 days of CRM launch.",
    metrics: [
      { label: "More Bookings",   val: "+42%", icon: "📅" },
      { label: "No-shows",        val: "−60%", icon: "✅" },
      { label: "Patient Score",   val: "4.8★", icon: "⭐" },
    ],
  },
  {
    industry: "D2C E-Commerce",
    tag: "E-Commerce",
    tagColor: "rgba(0,201,167,0.12)",
    tagBorder: "rgba(0,201,167,0.3)",
    tagText: TEAL,
    icon: "🛒",
    title: "2.4× Conversion Rate for a US D2C Brand",
    challenge: "A direct-to-consumer brand had no unified view of customer behaviour across email, social, and checkout.",
    solution: "We integrated HubSpot CRM with Klaviyo and Shopify — enabling full-funnel visibility and AI-powered segmentation.",
    result: "2.4× conversion rate",
    resultDetail: "Improvement in email-to-purchase conversion after CRM integration.",
    metrics: [
      { label: "Conversion",   val: "2.4×", icon: "📈" },
      { label: "Revenue",      val: "+68%", icon: "💰" },
      { label: "CAC Reduction",val: "−38%", icon: "✅" },
    ],
  },
];

export default function SuccessStories() {
  const [active, setActive] = useState(0);

  return (
    <section style={{
      padding: "88px 48px",
      background: "linear-gradient(180deg,#061425 0%,#030B18 100%)",
      position: "relative", overflow: "hidden",
      fontFamily: "'Poppins',sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        @keyframes ssFade {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ss-card-anim { animation: ssFade .45s ease both; }

        .ss-nav-btn {
          width:40px; height:40px; border-radius:50%;
          border:1px solid rgba(255,255,255,0.12);
          background:rgba(255,255,255,0.04);
          color:rgba(255,255,255,0.6);
          font-size:18px; cursor:pointer;
          display:flex; align-items:center; justify-content:center;
          transition:all .2s ease;
        }
        .ss-nav-btn:hover {
          border-color:${TEAL};
          background:rgba(0,201,167,0.1);
          color:${TEAL};
        }

        .ss-tab {
          padding:10px 20px; border-radius:100px;
          border:1px solid rgba(255,255,255,0.1);
          background:rgba(255,255,255,0.03);
          color:rgba(255,255,255,0.5);
          font-size:13.5px; font-weight:600;
          font-family:'Poppins',sans-serif;
          cursor:pointer;
          transition:all .22s ease;
          display:flex; align-items:center; gap:8px;
        }
        .ss-tab.active {
          border-color:rgba(0,201,167,0.45);
          background:rgba(0,201,167,0.1);
          color:${TEAL};
        }
        .ss-tab:hover:not(.active) {
          border-color:rgba(255,255,255,0.2);
          color:rgba(255,255,255,0.8);
        }

        .ss-metric {
          text-align:center; padding:18px 14px;
          border-radius:14px;
          border:1px solid rgba(255,255,255,0.07);
          background:rgba(255,255,255,0.03);
          transition:transform .25s, background .25s;
        }
        .ss-metric:hover { transform:translateY(-4px); background:rgba(0,201,167,0.06); }

        @media (max-width:640px) {
          .ss-tabs { flex-wrap:wrap !important; }
        }
      `}</style>

      {/* BG */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none", zIndex:0,
        backgroundImage:"linear-gradient(rgba(0,201,167,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.02) 1px,transparent 1px)",
        backgroundSize:"56px 56px",
      }}/>

      <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:2 }}>

        {/* Heading */}
        <div style={{ textAlign:"center", marginBottom:48 }}>
          <div style={{
            display:"inline-flex", alignItems:"center", gap:8,
            background:"rgba(0,201,167,0.08)", border:"1px solid rgba(0,201,167,0.22)",
            borderRadius:100, padding:"6px 18px", marginBottom:16,
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:TEAL, display:"block", boxShadow:`0 0 8px ${TEAL}` }}/>
            <span style={{ color:TEAL, fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase" }}>
              Proven Results
            </span>
          </div>
          <h2 style={{
            fontSize:"clamp(26px,3vw,42px)", fontWeight:900, color:"#fff",
            letterSpacing:"-0.02em", lineHeight:1.15, marginBottom:16,
          }}>
            Success{" "}
            <span style={{ background:`linear-gradient(135deg,${TEAL},#1fd1b5)`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Stories
            </span>
          </h2>
          <p style={{ color:"rgba(255,255,255,0.45)", fontSize:16, lineHeight:1.7, maxWidth:500, margin:"0 auto" }}>
            Real results for real businesses across Canada, USA & UK.
          </p>
        </div>

        {/* Tab selectors */}
        <div className="ss-tabs" style={{ display:"flex", gap:10, justifyContent:"center", marginBottom:40 }}>
          {CASES.map((c, i) => (
            <button key={i} className={`ss-tab${active === i ? " active" : ""}`} onClick={() => setActive(i)}>
              <span>{c.icon}</span> {c.industry}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="ss-card-anim" key={active} style={{
          background:"rgba(255,255,255,0.02)",
          border:`1px solid ${CASES[active].tagBorder}`,
          borderRadius:24, overflow:"hidden",
        }}>
          {/* Top accent */}
          <div style={{ height:3, background:`linear-gradient(90deg,transparent,${CASES[active].tagText},transparent)` }}/>

          <div style={{ padding:"40px 40px 36px" }}>

            {/* Tag + icon */}
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
              <div style={{
                width:52, height:52, borderRadius:14, fontSize:26,
                display:"flex", alignItems:"center", justifyContent:"center",
                background:CASES[active].tagColor, border:`1px solid ${CASES[active].tagBorder}`,
              }}>
                {CASES[active].icon}
              </div>
              <span style={{
                padding:"4px 14px", borderRadius:100, fontSize:12, fontWeight:700,
                background:CASES[active].tagColor, border:`1px solid ${CASES[active].tagBorder}`,
                color:CASES[active].tagText, textTransform:"uppercase", letterSpacing:"0.08em",
              }}>
                {CASES[active].tag}
              </span>
            </div>

            {/* Title */}
            <h3 style={{ color:"#fff", fontSize:"clamp(18px,2vw,24px)", fontWeight:800, marginBottom:28, lineHeight:1.3 }}>
              {CASES[active].title}
            </h3>

            {/* Challenge / Solution */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20, marginBottom:32 }}>
              {[
                { label:"Challenge", text:CASES[active].challenge, icon:"⚠️" },
                { label:"Solution",  text:CASES[active].solution,  icon:"💡" },
              ].map(col => (
                <div key={col.label} style={{
                  padding:"20px", borderRadius:14,
                  background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)",
                }}>
                  <p style={{ color:TEAL, fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:8 }}>
                    {col.icon} {col.label}
                  </p>
                  <p style={{ color:"rgba(255,255,255,0.6)", fontSize:14, lineHeight:1.7, margin:0 }}>
                    {col.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }}>
              {CASES[active].metrics.map((m, i) => (
                <div key={i} className="ss-metric">
                  <div style={{ fontSize:22, marginBottom:8 }}>{m.icon}</div>
                  <div style={{
                    fontSize:"clamp(22px,2.5vw,30px)", fontWeight:900, marginBottom:4,
                    background:`linear-gradient(135deg,#fff 30%,${TEAL})`,
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                  }}>
                    {m.val}
                  </div>
                  <div style={{ color:"rgba(255,255,255,0.45)", fontSize:12, fontWeight:500 }}>{m.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Dot indicators */}
        <div style={{ display:"flex", justifyContent:"center", gap:8, marginTop:28 }}>
          {CASES.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: active === i ? 24 : 8,
              height:8, borderRadius:100,
              background: active === i ? TEAL : "rgba(255,255,255,0.2)",
              border:"none", cursor:"pointer",
              transition:"all .3s ease",
            }}/>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign:"center", marginTop:44 }}>
          <button style={{
            padding:"14px 36px", borderRadius:10, border:"none",
            background:`linear-gradient(135deg,${TEAL},${TEAL_DARK})`,
            color:"#000", fontWeight:700, fontSize:15,
            fontFamily:"'Poppins',sans-serif", cursor:"pointer",
            transition:"transform .2s,box-shadow .2s",
          }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-2px)";(e.currentTarget as HTMLElement).style.boxShadow="0 12px 32px rgba(0,201,167,0.4)";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.boxShadow="";}}
          >
            View All Case Studies →
          </button>
        </div>

      </div>
    </section>
  );
}