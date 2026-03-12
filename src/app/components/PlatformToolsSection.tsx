"use client";

const TEAL = "#00C9A7";

const TOOLS = [
  { icon: "☁️",  name: "Salesforce",     desc: "World's #1 CRM — configured for your exact sales process.",                     color: "rgba(0,161,224,0.1)",   border: "rgba(0,161,224,0.25)" },
  { icon: "🧲",  name: "HubSpot",        desc: "Inbound-focused CRM ideal for marketing-led growth.",                            color: "rgba(255,122,0,0.08)",   border: "rgba(255,122,0,0.22)" },
  { icon: "🏢",  name: "MS Dynamics 365",desc: "Enterprise CRM integrated with Microsoft 365 & Azure.",                         color: "rgba(0,120,215,0.08)",   border: "rgba(0,120,215,0.22)" },
  { icon: "🔶",  name: "Zoho CRM",       desc: "Flexible, cost-effective CRM for scaling SMEs.",                                 color: "rgba(227,77,38,0.08)",   border: "rgba(227,77,38,0.22)" },
  { icon: "🍬",  name: "SugarCRM",       desc: "Open-source CRM for sales force automation.",                                   color: "rgba(229,57,53,0.08)",   border: "rgba(229,57,53,0.22)" },
  { icon: "🧩",  name: "SuiteCRM",       desc: "Community edition — conversions and customer interactions.",                    color: "rgba(0,201,167,0.08)",   border: "rgba(0,201,167,0.22)" },
  { icon: "🚿",  name: "Pipedrive",       desc: "Visual pipeline CRM ideal for SME sales teams.",                               color: "rgba(38,166,91,0.08)",   border: "rgba(38,166,91,0.22)" },
  { icon: "⚡",  name: "Custom CRM",     desc: "100% bespoke when off-the-shelf doesn't fit your workflows.",                   color: "rgba(0,201,167,0.1)",   border: "rgba(0,201,167,0.28)" },
];

export default function PlatformToolsSection() {
  return (
    <section style={{
      padding: "80px 48px",
      background: "#030B18",
      position: "relative", overflow: "hidden",
      fontFamily: "'Poppins',sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        .pt-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .pt-card {
          border-radius: 18px;
          padding: 28px 22px;
          position: relative;
          overflow: hidden;
          transition: transform .28s ease, box-shadow .28s ease;
          cursor: default;
        }
        .pt-card::after {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, ${TEAL}, transparent);
          opacity: 0;
          transition: opacity .28s ease;
        }
        .pt-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
        }
        .pt-card:hover::after { opacity: 1; }

        .pt-icon {
          width: 56px; height: 56px;
          border-radius: 15px;
          display: flex; align-items: center; justify-content: center;
          font-size: 26px; margin-bottom: 16px;
          transition: transform .25s;
        }
        .pt-card:hover .pt-icon { transform: scale(1.1) rotate(-5deg); }

        @media (max-width: 1024px) { .pt-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 720px)  { .pt-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 460px)  {
          .pt-grid { grid-template-columns: 1fr !important; }
          .pt-section { padding: 56px 20px !important; }
        }
      `}</style>

      {/* BG grid */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none", zIndex:0,
        backgroundImage:"linear-gradient(rgba(0,201,167,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.02) 1px,transparent 1px)",
        backgroundSize:"56px 56px",
      }}/>

      {/* Glow */}
      <div style={{
        position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)",
        width:600, height:400, borderRadius:"50%",
        background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",
        pointerEvents:"none", zIndex:0,
      }}/>

      <div style={{ maxWidth:1280, margin:"0 auto", position:"relative", zIndex:2 }}>

        {/* Heading */}
        <div style={{ textAlign:"center", marginBottom:56 }}>
          <div style={{
            display:"inline-flex", alignItems:"center", gap:8,
            background:"rgba(0,201,167,0.08)", border:"1px solid rgba(0,201,167,0.22)",
            borderRadius:100, padding:"6px 18px", marginBottom:16,
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:TEAL, display:"block", boxShadow:`0 0 8px ${TEAL}` }}/>
            <span style={{ color:TEAL, fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase" }}>
              Our Tech Stack
            </span>
          </div>
          <h2 style={{
            fontSize:"clamp(24px,3vw,40px)", fontWeight:900, color:"#fff",
            letterSpacing:"-0.02em", lineHeight:1.15, marginBottom:16,
          }}>
            Leading CRM Platform Tools{" "}
            <span style={{ background:`linear-gradient(135deg,${TEAL},#1fd1b5)`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              That We Use
            </span>
          </h2>
          <p style={{ color:"rgba(255,255,255,0.45)", fontSize:16, lineHeight:1.75, maxWidth:560, margin:"0 auto", fontWeight:400 }}>
            Here is a closer look at some of the tools we leverage for the best possible business outcomes.
          </p>
        </div>

        {/* Tools grid */}
        <div className="pt-grid">
          {TOOLS.map((tool, i) => (
            <div key={i} className="pt-card" style={{ background:tool.color, border:`1px solid ${tool.border}` }}>
              <div className="pt-icon" style={{ background:`rgba(255,255,255,0.05)`, border:`1px solid ${tool.border}` }}>
                {tool.icon}
              </div>
              <h3 style={{ color:"#fff", fontSize:16, fontWeight:700, marginBottom:8, lineHeight:1.3 }}>
                {tool.name}
              </h3>
              <p style={{ color:"rgba(255,255,255,0.5)", fontSize:13.5, lineHeight:1.7, margin:0, fontWeight:400 }}>
                {tool.desc}
              </p>
              {/* Bottom teal tag */}
              {tool.name === "Custom CRM" && (
                <div style={{
                  marginTop:14, display:"inline-flex", alignItems:"center", gap:6,
                  background:"rgba(0,201,167,0.1)", border:"1px solid rgba(0,201,167,0.25)",
                  borderRadius:100, padding:"4px 12px",
                  color:TEAL, fontSize:11, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase",
                }}>
                  ⚡ Fully Bespoke
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}