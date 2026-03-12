"use client";

const TEAL = "#00C9A7";
const TEAL_DARK = "#00a07a";

const BENEFITS = [
  {
    num: "01",
    title: "Secure Data",
    desc: "Cloud-connected system. GDPR / PIPEDA / CCPA compliance built-in. Zero data loss guarantee with automated backups and audit trails.",
    icon: "🔒",
    tags: ["GDPR", "PIPEDA", "CCPA"],
  },
  {
    num: "02",
    title: "Lead Management",
    desc: "All customer data in one CRM. Priority pipelines with intelligent scoring. Faster deal closure through automated follow-ups and reminders.",
    icon: "🎯",
    tags: ["Pipeline", "Scoring", "Automation"],
  },
  {
    num: "03",
    title: "Easy Integration",
    desc: "Seamless plugins for every department — marketing, finance, support, and ops. Centralised data ecosystem with zero siloing.",
    icon: "🔗",
    tags: ["Plugins", "API", "No Silos"],
  },
  {
    num: "04",
    title: "Relentless Support",
    desc: "Ongoing support after go-live. Dedicated team ensuring maximum CRM adoption every day — from training to troubleshooting.",
    icon: "🤝",
    tags: ["24/7", "Training", "Go-Live"],
  },
];

export default function KeyBenefits() {
  return (
    <section style={{
      padding: "88px 48px",
      background: "linear-gradient(180deg,#030B18 0%,#061425 100%)",
      position: "relative", overflow: "hidden",
      fontFamily: "'Poppins',sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        @keyframes kbFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .kb-card {
          position: relative;
          display: flex;
          gap: 28px;
          align-items: flex-start;
          padding: 32px 28px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          transition: transform .3s ease, border-color .3s ease, background .3s ease, box-shadow .3s ease;
          cursor: default;
          animation: kbFadeUp .6s ease both;
        }
        .kb-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0,201,167,0.3);
          background: rgba(0,201,167,0.04);
          box-shadow: 0 20px 56px rgba(0,0,0,0.35);
        }
        .kb-card::before {
          content:"";
          position:absolute;
          top:0; left:0; right:0;
          height:2px; border-radius:20px 20px 0 0;
          background:linear-gradient(90deg,transparent,${TEAL},transparent);
          opacity:0; transition:opacity .3s;
        }
        .kb-card:hover::before { opacity:1; }

        .kb-num {
          font-size: clamp(42px,5vw,64px);
          font-weight: 900;
          line-height: 1;
          background: linear-gradient(135deg, rgba(0,201,167,0.15) 0%, rgba(0,201,167,0.05) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          flex-shrink: 0;
          width: 72px;
          text-align: center;
          transition: -webkit-text-fill-color .3s;
        }
        .kb-card:hover .kb-num {
          background: linear-gradient(135deg, ${TEAL}, #1fd1b5);
          -webkit-background-clip: text;
        }

        .kb-tag {
          display: inline-flex;
          align-items: center;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: .06em;
          text-transform: uppercase;
          color: ${TEAL};
          background: rgba(0,201,167,0.08);
          border: 1px solid rgba(0,201,167,0.18);
        }

        .kb-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        /* Timeline connector between cards */
        .kb-connector {
          width: 2px;
          background: linear-gradient(180deg, ${TEAL} 0%, transparent 100%);
          margin: 0 auto;
          height: 24px;
          opacity: .25;
        }

        @media (max-width: 768px) {
          .kb-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .kb-section { padding: 60px 20px !important; }
          .kb-card { flex-direction: column !important; gap: 16px !important; }
          .kb-num { width: auto !important; font-size: 40px !important; }
        }
      `}</style>

      {/* BG grid */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none", zIndex:0,
        backgroundImage:"linear-gradient(rgba(0,201,167,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.025) 1px,transparent 1px)",
        backgroundSize:"56px 56px",
      }}/>

      {/* Glow */}
      <div style={{
        position:"absolute", bottom:"0%", left:"50%", transform:"translateX(-50%)",
        width:600, height:300, borderRadius:"50%",
        background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",
        pointerEvents:"none", zIndex:0,
      }}/>

      <div style={{ maxWidth:1280, margin:"0 auto", position:"relative", zIndex:2 }}>

        {/* Heading */}
        <div style={{ textAlign:"center", marginBottom:60 }}>
          <div style={{
            display:"inline-flex", alignItems:"center", gap:8,
            background:"rgba(0,201,167,0.08)", border:"1px solid rgba(0,201,167,0.22)",
            borderRadius:100, padding:"6px 18px", marginBottom:16,
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:TEAL, display:"block", boxShadow:`0 0 8px ${TEAL}` }}/>
            <span style={{ color:TEAL, fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase" }}>
              Why It Matters
            </span>
          </div>
          <h2 style={{
            fontSize:"clamp(26px,3vw,42px)", fontWeight:900, color:"#fff",
            letterSpacing:"-0.02em", lineHeight:1.15, marginBottom:16,
          }}>
            Key Benefits of{" "}
            <span style={{ background:`linear-gradient(135deg,${TEAL},#1fd1b5)`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              CRM Development
            </span>
          </h2>
          <p style={{ color:"rgba(255,255,255,0.45)", fontSize:16, lineHeight:1.75, maxWidth:520, margin:"0 auto", fontWeight:400 }}>
            Here&apos;s what you gain with advanced, next-gen CRM development services.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="kb-grid">
          {BENEFITS.map((b, i) => (
            <div key={i} className="kb-card" style={{ animationDelay:`${i * 0.12}s` }}>

              {/* Number */}
              <div className="kb-num">{b.num}</div>

              {/* Content */}
              <div style={{ flex:1 }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                  <span style={{ fontSize:22 }}>{b.icon}</span>
                  <h3 style={{ color:"#fff", fontSize:19, fontWeight:800, margin:0 }}>{b.title}</h3>
                </div>
                <p style={{ color:"rgba(255,255,255,0.52)", fontSize:14.5, lineHeight:1.75, margin:"0 0 14px", fontWeight:400 }}>
                  {b.desc}
                </p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                  {b.tags.map(tag => (
                    <span key={tag} className="kb-tag">{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign:"center", marginTop:52 }}>
          <button style={{
            padding:"14px 36px", borderRadius:10, border:"none",
            background:`linear-gradient(135deg,${TEAL},${TEAL_DARK})`,
            color:"#000", fontWeight:700, fontSize:15,
            fontFamily:"'Poppins',sans-serif", cursor:"pointer",
            transition:"transform .2s, box-shadow .2s",
          }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-2px)";(e.currentTarget as HTMLElement).style.boxShadow="0 12px 32px rgba(0,201,167,0.4)";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.boxShadow="";}}
          >
            Start Your CRM Journey →
          </button>
        </div>

      </div>
    </section>
  );
}