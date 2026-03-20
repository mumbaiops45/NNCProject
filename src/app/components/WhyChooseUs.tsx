"use client";
import { useState, useEffect, useRef } from "react";

const TEAL = "#00C9A7";
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
        }, 1800 / 60);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

const STATS = [
  { n: 1500, s: "+", label: "Web Projects"  },
  { n: 500,  s: "+", label: "Mobile Apps"   },
  { n: 1800, s: "+", label: "IT Talents"    },
  { n: 25,   s: "+", label: "Industries"    },
];

export default function WhyChooseUs() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section style={{
      padding: "80px 48px",
      background: "linear-gradient(180deg,#030B18 0%,#061425 100%)",
      position: "relative", 
      overflow: "hidden",
      fontFamily: "'Poppins',sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .wcu-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .wcu-stat {
          text-align: center; 
          padding: 22px 14px;
          border-radius: 14px;
          border: 1px solid rgba(0,201,167,0.15);
          background: rgba(0,201,167,0.05);
        }

        .wcu-video-wrap {
          position: relative; 
          border-radius: 24px; 
          overflow: hidden;
          border: 1px solid rgba(0,201,167,0.2);
          background: linear-gradient(135deg,#0a1f38,#061425);
          aspect-ratio: 16/10;
          cursor: pointer;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .wcu-play-btn {
          width: 72px; 
          height: 72px; 
          border-radius: 50%;
          background: ${TEAL};
          border: none; 
          cursor: pointer;
          display: flex; 
          align-items: center; 
          justify-content: center;
          font-size: 28px;
          transition: transform .25s;
        }
        .wcu-play-btn:hover {
          transform: scale(1.1);
        }

        @keyframes pulse {
          0%,100%{opacity:0.5; transform:scale(1);}
          50%{opacity:1; transform:scale(1.05);}
        }

        @media (max-width: 960px) {
          .wcu-layout { 
            grid-template-columns: 1fr !important; 
            gap: 44px !important; 
          }
          section { 
            padding: 60px 24px !important; 
          }
        }
        @media (max-width: 640px) {
          .wcu-stats-grid { 
            grid-template-columns: 1fr 1fr !important; 
          }
          section { 
            padding: 40px 16px !important; 
          }
        }
      `}</style>

      <div style={{ 
        maxWidth: 1280, 
        margin: "0 auto", 
        position: "relative", 
        zIndex: 2 
      }}>

        <div className="wcu-layout">

          {/* LEFT — Text as per document */}
          <div>
            <h2 style={{
              fontSize: "clamp(28px, 3.5vw, 42px)", 
              fontWeight: 800, 
              color: "#fff",
              letterSpacing: "-0.02em", 
              lineHeight: 1.2, 
              marginBottom: 24,
            }}>
              Why Choose Us as Your{" "}
              <span style={{ 
                background: `linear-gradient(135deg,${TEAL},#1fd1b5)`, 
                WebkitBackgroundClip: "text", 
                WebkitTextFillColor: "transparent" 
              }}>
                CRM Software Development
              </span>{" "}Agency?
            </h2>

            <p style={{ 
              color: "rgba(255,255,255,0.8)", 
              fontSize: 16, 
              lineHeight: 1.7, 
              marginBottom: 20, 
              fontWeight: 400 
            }}>
              NNC Digital Solutions is backed by{" "}
              <span style={{ color: "#fff", fontWeight: 600 }}>Nakshatra Namaha Creations Pvt. Ltd.</span>{" "}
              — one of Bangalore's most respected digital studios with{" "}
              <span style={{ color: TEAL, fontWeight: 600 }}>8+ years of experience</span>{" "}
              and{" "}
              <span style={{ color: TEAL, fontWeight: 600 }}>565+ projects delivered</span>{" "}
              across India. To serve growing businesses in North America and the United Kingdom, we launched NNC Digital as our international arm — bringing the same proven technical expertise and client-first culture to the Canadian, US, and UK markets.
            </p>

            {/* Stats grid - exactly as specified */}
            <div className="wcu-stats-grid" style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(4,1fr)", 
              gap: 16,
              marginTop: 32,
            }}>
              {STATS.map(st => (
                <div key={st.label} className="wcu-stat">
                  <div style={{
                    fontSize: "clamp(24px, 2.5vw, 32px)", 
                    fontWeight: 900, 
                    marginBottom: 6,
                    background: `linear-gradient(135deg,#fff 30%,${TEAL})`,
                    WebkitBackgroundClip: "text", 
                    WebkitTextFillColor: "transparent",
                  }}>
                    <Counter to={st.n} suffix={st.s}/>
                  </div>
                  <div style={{ 
                    color: "rgba(255,255,255,0.5)", 
                    fontSize: 12, 
                    fontWeight: 500 
                  }}>
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Simple Video Placeholder (No actual video) */}
          <div>
            <div className="wcu-video-wrap">
              {/* Abstract CRM/Development themed background */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle at 30% 40%, #00C9A7 0%, transparent 30%), radial-gradient(circle at 70% 60%, #0077cc 0%, transparent 35%), #061425",
              }}>
                {/* Grid pattern */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "linear-gradient(rgba(0,201,167,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,201,167,0.1) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }} />
              </div>

              {/* CRM Icons floating */}
              {["📊", "📈", "🤝", "💼", "⚡", "🚀"].map((icon, i) => (
                <div key={i} style={{
                  position: "absolute",
                  top: `${15 + i * 12}%`,
                  left: `${10 + i * 15}%`,
                  fontSize: 24,
                  opacity: 0.2,
                  animation: `pulse ${3 + i}s infinite`,
                }}>
                  {icon}
                </div>
              ))}

              {/* Centered content */}
              <div style={{ 
                position: "absolute", 
                inset: 0, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                flexDirection: "column",
                gap: 20,
                zIndex: 10,
              }}>
                {/* Play button (just for show) */}
                <div style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: TEAL,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  color: "#000",
                  boxShadow: "0 0 0 15px rgba(0,201,167,0.2)",
                }}>
                  ▶
                </div>
                
                <p style={{
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: 600,
                  background: "rgba(0,0,0,0.6)",
                  padding: "10px 24px",
                  borderRadius: 40,
                  margin: 0,
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}>
                  Founder's Video Coming Soon
                </p>
              </div>

              {/* Bottom info */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "16px 20px",
                background: "linear-gradient(0deg, rgba(3,11,24,0.95), transparent)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                <span style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>🎬 Founder's Message</span>
                <span style={{ color: TEAL, fontSize: 12, fontWeight: 500, background: "rgba(0,201,167,0.1)", padding: "4px 12px", borderRadius: 20 }}>Coming Soon</span>
              </div>
            </div>

            {/* Simple description */}
            <p style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 13,
              textAlign: "center",
              marginTop: 16,
              fontStyle: "italic",
            }}>
              Our founder sharing the vision for CRM excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}