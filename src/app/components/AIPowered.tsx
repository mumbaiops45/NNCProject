// "use client";

// const TEAL      = "#00C9A7";
// const TEAL_DARK = "#00a07a";

// const AI_FEATURES = [
//   {
//     icon: "🧠",
//     title: "Data Analysis",
//     desc: "AI analyses vast volumes of client data from email, social media, online activity, and purchases — automating data input and surfacing insights your team can act on immediately.",
//     color: "rgba(0,201,167,0.08)",
//     border: "rgba(0,201,167,0.2)",
//   },
//   {
//     icon: "🎯",
//     title: "Predictive Lead Scoring",
//     desc: "Automatically rank and prioritise leads based on behaviour, engagement, and deal size — so your sales team always focuses on the highest-value opportunities first.",
//     color: "rgba(99,102,241,0.08)",
//     border: "rgba(99,102,241,0.2)",
//   },
//   {
//     icon: "🤖",
//     title: "AI Chatbot & WhatsApp Automation",
//     desc: "Deploy AI-powered chatbots and WhatsApp flows that qualify leads and book appointments — 24/7, without human input.",
//     color: "rgba(0,201,167,0.08)",
//     border: "rgba(0,201,167,0.2)",
//   },
// ];

// export default function AIPowered() {
//   return (
//     <section style={{
//       padding: "80px 48px",
//       background: "linear-gradient(180deg,#061425 0%,#030B18 100%)",
//       position: "relative", overflow: "hidden",
//       fontFamily: "'Poppins',sans-serif",
//     }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

//         .ai-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 64px;
//           align-items: center;
//         }
//         .ai-feat-card {
//           display: flex;
//           gap: 18px;
//           align-items: flex-start;
//           padding: 24px 22px;
//           border-radius: 16px;
//           transition: transform .25s, box-shadow .25s;
//           cursor: default;
//         }
//         .ai-feat-card:hover {
//           transform: translateX(6px);
//           box-shadow: 0 8px 32px rgba(0,0,0,0.3);
//         }
//         .ai-icon-wrap {
//           width: 52px; height: 52px; border-radius: 14px; flex-shrink: 0;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 24px;
//           transition: transform .25s;
//         }
//         .ai-feat-card:hover .ai-icon-wrap { transform: scale(1.1) rotate(-4deg); }

//         /* Right visual panel */
//         .ai-visual {
//           position: relative;
//           border-radius: 24px;
//           overflow: hidden;
//           background: linear-gradient(135deg,#0a1f38 0%,#061425 100%);
//           border: 1px solid rgba(0,201,167,0.15);
//           min-height: 480px;
//           display: flex; flex-direction: column;
//           justify-content: space-between;
//           padding: 36px 32px;
//         }

//         @keyframes aiPulse { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }
//         @keyframes aiFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
//         @keyframes aiScan  { 0%{top:10%} 100%{top:90%} }
//         @keyframes aiBlink { 0%,100%{opacity:1} 50%{opacity:0} }

//         .ai-orb {
//           position: absolute; border-radius: 50%; pointer-events: none;
//           animation: aiPulse 4s ease-in-out infinite;
//         }
//         .ai-float { animation: aiFloat 5s ease-in-out infinite; }
//         .ai-scan-line {
//           position: absolute; left: 0; right: 0; height: 1px;
//           background: linear-gradient(90deg,transparent,rgba(0,201,167,0.5),transparent);
//           animation: aiScan 3s linear infinite;
//         }
//         .ai-cursor-blink { animation: aiBlink 1s step-end infinite; }

//         /* Responsive */
//         @media (max-width: 960px) {
//           .ai-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
//           .ai-visual { min-height: 320px !important; }
//         }
//         @media (max-width: 480px) {
//           .ai-section { padding: 56px 20px !important; }
//         }
//       `}</style>

//       {/* Background orb */}
//       <div style={{
//         position:"absolute", top:"0%", left:"50%", transform:"translateX(-50%)",
//         width:700, height:400, borderRadius:"50%",
//         background:"radial-gradient(ellipse,rgba(0,201,167,0.05) 0%,transparent 65%)",
//         pointerEvents:"none", zIndex:0,
//       }}/>

//       <div style={{ maxWidth:1280, margin:"0 auto", position:"relative", zIndex:2 }}>

//         {/* ── Heading ── */}
//         <div style={{ marginBottom:52, maxWidth:620 }}>
//           <div style={{
//             display:"inline-flex", alignItems:"center", gap:8,
//             background:"rgba(0,201,167,0.08)", border:"1px solid rgba(0,201,167,0.22)",
//             borderRadius:100, padding:"6px 18px", marginBottom:16,
//           }}>
//             <span style={{ width:6, height:6, borderRadius:"50%", background:TEAL, display:"block", boxShadow:`0 0 8px ${TEAL}` }}/>
//             <span style={{ color:TEAL, fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase" }}>
//               AI-Powered
//             </span>
//           </div>
//           <h2 style={{
//             fontSize:"clamp(26px,3vw,42px)", fontWeight:900, color:"#fff",
//             letterSpacing:"-0.02em", lineHeight:1.15, marginBottom:16,
//           }}>
//             Leverage{" "}
//             <span style={{ background:`linear-gradient(135deg,${TEAL},#1fd1b5)`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
//               AI-Powered CRM
//             </span>{" "}Solutions
//           </h2>
//           <p style={{ color:"rgba(255,255,255,0.5)", fontSize:16, lineHeight:1.8, fontWeight:400 }}>
//             Our AI-backed CRM solutions aim at simplification and higher efficiency for your workflows.
//           </p>
//         </div>

//         {/* ── Two-column ── */}
//         <div className="ai-grid">

//           {/* LEFT — Feature list */}
//           <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
//             {AI_FEATURES.map((feat, i) => (
//               <div key={i} className="ai-feat-card" style={{ background:feat.color, border:`1px solid ${feat.border}` }}>
//                 <div className="ai-icon-wrap" style={{ background:feat.color, border:`1px solid ${feat.border}` }}>
//                   {feat.icon}
//                 </div>
//                 <div>
//                   <h3 style={{ color:"#fff", fontSize:17, fontWeight:700, marginBottom:8, lineHeight:1.3 }}>
//                     {feat.title}
//                   </h3>
//                   <p style={{ color:"rgba(255,255,255,0.52)", fontSize:14, lineHeight:1.75, margin:0, fontWeight:400 }}>
//                     {feat.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}

//             {/* CTA */}
//             <button style={{
//               marginTop:8, alignSelf:"flex-start",
//               display:"inline-flex", alignItems:"center", gap:10,
//               padding:"13px 28px", borderRadius:10, border:"none",
//               background:`linear-gradient(135deg,${TEAL},${TEAL_DARK})`,
//               color:"#000", fontWeight:700, fontSize:14,
//               fontFamily:"'Poppins',sans-serif", cursor:"pointer",
//               transition:"transform .2s, box-shadow .2s",
//             }}
//               onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-2px)";(e.currentTarget as HTMLElement).style.boxShadow="0 10px 28px rgba(0,201,167,0.35)";}}
//               onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.boxShadow="";}}
//             >
//               🤖 Explore AI Solutions →
//             </button>
//           </div>

//           {/* RIGHT — Visual panel */}
//           <div className="ai-visual">
//             <div className="ai-scan-line"/>

//             {/* Orbs */}
//             <div className="ai-orb" style={{ top:"5%", right:"5%", width:180, height:180, background:"radial-gradient(circle,rgba(0,201,167,0.12) 0%,transparent 70%)", animationDelay:"0s" }}/>
//             <div className="ai-orb" style={{ bottom:"10%", left:"5%", width:140, height:140, background:"radial-gradient(circle,rgba(99,102,241,0.1) 0%,transparent 70%)", animationDelay:"2s" }}/>

//             {/* Top label */}
//             <div style={{ position:"relative", zIndex:2 }}>
//               <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:24 }}>
//                 <div style={{
//                   width:10, height:10, borderRadius:"50%", background:"#22c55e",
//                   boxShadow:"0 0 10px #22c55e",
//                 }}/>
//                 <span style={{ color:"rgba(255,255,255,0.5)", fontSize:12, fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase" }}>
//                   AI Engine — Live
//                 </span>
//               </div>

//               {/* Fake terminal lines */}
//               {[
//                 { label:"Analysing customer data", val:"100%", color:TEAL },
//                 { label:"Lead scoring model",      val:"94%",  color:"#818cf8" },
//                 { label:"Chatbot automation",      val:"87%",  color:TEAL },
//                 { label:"Pipeline prediction",     val:"91%",  color:"#f59e0b" },
//               ].map((row, i) => (
//                 <div key={i} style={{ marginBottom:16 }}>
//                   <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
//                     <span style={{ color:"rgba(255,255,255,0.6)", fontSize:12.5, fontWeight:500 }}>{row.label}</span>
//                     <span style={{ color:row.color, fontSize:12.5, fontWeight:700 }}>{row.val}</span>
//                   </div>
//                   <div style={{ height:4, borderRadius:4, background:"rgba(255,255,255,0.06)", overflow:"hidden" }}>
//                     <div style={{
//                       height:"100%", borderRadius:4,
//                       background:`linear-gradient(90deg,${row.color},${row.color}88)`,
//                       width:row.val,
//                       transition:"width 1s ease",
//                     }}/>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Bottom metrics */}
//             <div style={{
//               display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12,
//               position:"relative", zIndex:2,
//             }}>
//               {[
//                 { label:"Leads Scored", val:"2,847", icon:"🎯" },
//                 { label:"Chats Automated", val:"1,203", icon:"💬" },
//                 { label:"Accuracy", val:"96.4%", icon:"✅" },
//               ].map((m, i) => (
//                 <div key={i} style={{
//                   background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)",
//                   borderRadius:12, padding:"14px 12px", textAlign:"center",
//                 }}>
//                   <div style={{ fontSize:20, marginBottom:6 }}>{m.icon}</div>
//                   <div style={{ color:"#fff", fontSize:16, fontWeight:800, marginBottom:2 }}>{m.val}</div>
//                   <div style={{ color:"rgba(255,255,255,0.4)", fontSize:11, fontWeight:500 }}>{m.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

const TEAL = "#00C9A7";
const TEAL_DARK = "#00a07a";

const AI_FEATURES = [
  {
    icon: "🧠",
    title: "Data Analysis",
    desc: "AI analyses vast volumes of client data from email, social media, online activity, and purchases — automating data input and surfacing insights your team can act on immediately.",
    color: "rgba(0,201,167,0.08)",
    border: "rgba(0,201,167,0.2)",
  },
  {
    icon: "🎯",
    title: "Predictive Lead Scoring",
    desc: "Automatically rank and prioritise leads based on behaviour, engagement, and deal size — so your sales team always focuses on the highest-value opportunities first.",
    color: "rgba(99,102,241,0.08)",
    border: "rgba(99,102,241,0.2)",
  },
  {
    icon: "🤖",
    title: "AI Chatbot & WhatsApp Automation",
    desc: "Deploy AI-powered chatbots and WhatsApp flows that qualify leads and book appointments — 24/7, without human input.",
    color: "rgba(0,201,167,0.08)",
    border: "rgba(0,201,167,0.2)",
  },
];

export default function AIPowered() {
  return (
    <section
      className="ai-section"
      style={{
        padding: "80px 40px",
        background: "linear-gradient(180deg,#061425 0%,#030B18 100%)",
        fontFamily: "'Poppins',sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        .ai-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:64px;
          align-items:center;
        }

        .ai-feat-card{
          display:flex;
          gap:18px;
          padding:22px;
          border-radius:16px;
          transition:.25s;
        }

        .ai-feat-card:hover{
          transform:translateX(6px);
          box-shadow:0 10px 30px rgba(0,0,0,0.3);
        }

        .ai-icon-wrap{
          width:50px;
          height:50px;
          border-radius:14px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:24px;
        }

        .ai-visual{
          border-radius:24px;
          background:linear-gradient(135deg,#0a1f38 0%,#061425 100%);
          border:1px solid rgba(0,201,167,0.15);
          padding:36px;
          min-height:420px;
        }

        @media (max-width:960px){
          .ai-grid{
            grid-template-columns:1fr;
            gap:40px;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        
        {/* Heading Center */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 60,
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(0,201,167,0.08)",
              border: "1px solid rgba(0,201,167,0.22)",
              borderRadius: 100,
              padding: "6px 18px",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: TEAL,
              }}
            />
            <span
              style={{
                color: TEAL,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              AI-Powered
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(28px,3vw,42px)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Leverage{" "}
            <span
              style={{
                background: `linear-gradient(135deg,${TEAL},#1fd1b5)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI-Powered CRM
            </span>{" "}
            Solutions
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            Our AI-backed CRM solutions simplify workflows and increase efficiency for modern businesses.
          </p>
        </div>

        {/* Grid */}
        <div className="ai-grid">

          {/* LEFT */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {AI_FEATURES.map((feat, i) => (
              <div
                key={i}
                className="ai-feat-card"
                style={{
                  background: feat.color,
                  border: `1px solid ${feat.border}`,
                }}
              >
                <div
                  className="ai-icon-wrap"
                  style={{
                    background: feat.color,
                    border: `1px solid ${feat.border}`,
                  }}
                >
                  {feat.icon}
                </div>

                <div>
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: 17,
                      fontWeight: 700,
                      marginBottom: 8,
                    }}
                  >
                    {feat.title}
                  </h3>

                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: 14,
                      lineHeight: 1.7,
                    }}
                  >
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}

            <button
              style={{
                marginTop: 10,
                alignSelf: "center",
                padding: "13px 28px",
                borderRadius: 10,
                border: "none",
                background: `linear-gradient(135deg,${TEAL},${TEAL_DARK})`,
                color: "#000",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              🤖 Explore AI Solutions →
            </button>
          </div>

          {/* RIGHT */}
          <div className="ai-visual">
            <h3 style={{ color: "#fff", marginBottom: 20 }}>
              AI Engine — Live
            </h3>

            {[
              { label: "Analysing customer data", val: "100%" },
              { label: "Lead scoring model", val: "94%" },
              { label: "Chatbot automation", val: "87%" },
              { label: "Pipeline prediction", val: "91%" },
            ].map((row, i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 6,
                  }}
                >
                  <span style={{ color: "#ccc", fontSize: 13 }}>
                    {row.label}
                  </span>
                  <span style={{ color: TEAL, fontWeight: 700 }}>
                    {row.val}
                  </span>
                </div>

                <div
                  style={{
                    height: 4,
                    borderRadius: 4,
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      borderRadius: 4,
                      background: TEAL,
                      width: row.val,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}