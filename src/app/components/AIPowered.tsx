

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
        padding: "50px 40px",
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

            {/* <button
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
            </button> */}
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