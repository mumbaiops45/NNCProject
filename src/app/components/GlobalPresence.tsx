"use client";
import { useState } from "react";

const TEAL = "#00C9A7";
const TEAL_DARK = "#00a07a";
const NAVY = "#030B18";
const NAVY_LIGHT = "#0A1A2F";

const NORTH_AMERICA = [
  { city: "Toronto, Canada", phone: "+91 9900566466", bullet: "■■" },
  { city: "New York, USA", phone: "+91 9900566466", bullet: "■■" },
];

const EMEA = [
  { city: "London, UK", phone: "+91 9900566466", bullet: "■■" },
];

const INDIA_HQ = [
  { city: "Bangalore (HQ)", phone: "+91 9900566466", bullet: "■■", hasPhone: true },
  { city: "Mysore, Karnataka", phone: "+91 9900566466", bullet: "■■", hasPhone: true },
  { city: "Mumbai, Maharashtra", phone: "+91 9900566466", bullet: "■■", hasPhone: true },
  { city: "Hyderabad, Telangana", phone: "+91 9900566466", bullet: "■■", hasPhone: true },
];

export default function GlobalPresence() {
  const [tab, setTab] = useState<"northAmerica" | "india">("northAmerica");

  return (
    <section style={{
      padding: "100px 48px",
      background: `linear-gradient(145deg, ${NAVY} 0%, ${NAVY_LIGHT} 100%)`,
      fontFamily: "'Poppins', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: "absolute",
        top: "-10%",
        right: "-5%",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${TEAL}20 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "-10%",
        left: "-5%",
        width: "250px",
        height: "250px",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${TEAL}15 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        
        .tab-button {
          border: none;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          padding: 16px 40px;
          letter-spacing: 0.3px;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .tab-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,201,167,0.2);
        }
        .location-item {
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          padding: 20px;
        }
        .location-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, ${TEAL}, transparent);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .location-item:hover::before {
          transform: translateX(100%);
        }
        .location-item:hover {
          transform: translateY(-5px);
          border-color: ${TEAL}40;
          box-shadow: 0 20px 30px -10px rgba(0,201,167,0.2);
        }
        @media (max-width: 768px) {
          section { padding: 70px 24px !important; }
          .tab-button { padding: 14px 30px !important; font-size: 15px !important; }
          .location-item { padding: 16px !important; }
        }
        @media (max-width: 640px) {
          section { padding: 50px 16px !important; }
          .tab-button { padding: 12px 20px !important; font-size: 14px !important; }
          .location-item { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{
            fontSize: "clamp(36px, 5vw, 48px)",
            fontWeight: 800,
            color: "#fff",
            margin: "0 0 15px 0",
            letterSpacing: "-0.02em",
          }}>
            Global <span style={{
              background: `linear-gradient(135deg, ${TEAL}, #fff)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Presence</span>
          </h2>
          <div style={{
            width: "100px",
            height: "4px",
            background: `linear-gradient(90deg, transparent, ${TEAL}, transparent)`,
            margin: "0 auto",
          }} />
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 50,
        }}>
          <button
            className="tab-button"
            onClick={() => setTab("northAmerica")}
            style={{
              background: tab === "northAmerica"
                ? `linear-gradient(135deg, ${TEAL}, ${TEAL_DARK})`
                : "rgba(255,255,255,0.05)",
              color: tab === "northAmerica" ? "#000" : "#fff",
              borderRadius: "50px 0 0 50px",
              border: `1px solid ${tab === "northAmerica" ? "transparent" : "rgba(255,255,255,0.1)"}`,
            }}
          >
            🌎 North America & EMEA
          </button>
          <button
            className="tab-button"
            onClick={() => setTab("india")}
            style={{
              background: tab === "india"
                ? `linear-gradient(135deg, ${TEAL}, ${TEAL_DARK})`
                : "rgba(255,255,255,0.05)",
              color: tab === "india" ? "#000" : "#fff",
              borderRadius: "0 50px 50px 0",
              border: `1px solid ${tab === "india" ? "transparent" : "rgba(255,255,255,0.1)"}`,
            }}
          >
            🇮🇳 India (HQ)
          </button>
        </div>

        {/* Content */}
        {tab === "northAmerica" ? (
          <div>
            {/* North America Section */}
            <div style={{ marginBottom: 40 }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 15,
                marginBottom: 25,
              }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: "12px",
                  background: `linear-gradient(135deg, ${TEAL}, ${TEAL_DARK})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                }}>
                  🌎
                </div>
                <h3 style={{
                  color: "#fff",
                  fontSize: 24,
                  fontWeight: 700,
                  margin: 0,
                }}>
                  North America
                </h3>
                <div style={{
                  flex: 1,
                  height: "2px",
                  background: `linear-gradient(90deg, ${TEAL}, transparent)`,
                }} />
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 20,
              }}>
                {NORTH_AMERICA.map((location, index) => (
                  <div key={index} className="location-item" style={{
                    background: "rgba(255,255,255,0.03)",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
                      <div style={{
                        width: 40,
                        height: 40,
                        borderRadius: "12px",
                        background: `${TEAL}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 20,
                        color: TEAL,
                      }}>
                        {location.bullet}
                      </div>
                      <div>
                        <p style={{
                          fontWeight: 600,
                          fontSize: 16,
                          color: "#fff",
                          margin: "0 0 4px 0",
                        }}>
                          {location.city}
                        </p>
                        <p style={{ color: TEAL, fontSize: 14, fontWeight: 500, margin: 0 }}>
                          📞 {location.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EMEA Section */}
            <div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 15,
                marginBottom: 25,
              }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: "12px",
                  background: `linear-gradient(135deg, ${TEAL}, ${TEAL_DARK})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                }}>
                  🌍
                </div>
                <h3 style={{
                  color: "#fff",
                  fontSize: 24,
                  fontWeight: 700,
                  margin: 0,
                }}>
                  EMEA
                </h3>
                <div style={{
                  flex: 1,
                  height: "2px",
                  background: `linear-gradient(90deg, ${TEAL}, transparent)`,
                }} />
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 20,
              }}>
                {EMEA.map((location, index) => (
                  <div key={index} className="location-item" style={{
                    background: "rgba(255,255,255,0.03)",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
                      <div style={{
                        width: 40,
                        height: 40,
                        borderRadius: "12px",
                        background: `${TEAL}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 20,
                        color: TEAL,
                      }}>
                        {location.bullet}
                      </div>
                      <div>
                        <p style={{
                          fontWeight: 600,
                          fontSize: 16,
                          color: "#fff",
                          margin: "0 0 4px 0",
                        }}>
                          {location.city}
                        </p>
                        <p style={{
                          color: TEAL,
                          fontSize: 14,
                          fontWeight: 500,
                          margin: 0,
                        }}>
                          📞 {location.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* India HQ Tab - FIXED: Phone numbers now showing */
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}>
            {INDIA_HQ.map((location, index) => (
              <div key={index} className="location-item" style={{
                background: `linear-gradient(145deg, ${TEAL}08, ${TEAL}02)`,
                border: `1px solid ${TEAL}30`,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: "12px",
                    background: `${TEAL}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    color: TEAL,
                  }}>
                    {location.bullet}
                  </div>
                  <div>
                    <p style={{
                      fontWeight: 600,
                      fontSize: 16,
                      color: "#fff",
                      margin: "0 0 4px 0",
                    }}>
                      {location.city}
                    </p>
                    <p style={{
                      color: TEAL,
                      fontSize: 14,
                      fontWeight: 500,
                      margin: 0,
                    }}>
                      📞 {location.phone}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom decorative dots */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          marginTop: 40,
        }}>
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: TEAL,
              opacity: 0.2 + (i * 0.1),
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}