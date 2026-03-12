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

const POINTS = [
  { icon: "🏆", text: "8+ years of proven digital excellence" },
  { icon: "🌍", text: "Serving Canada, USA & UK markets" },
  { icon: "⚡", text: "565+ projects delivered across India" },
  { icon: "🤝", text: "Client-first culture, enterprise-grade quality" },
  { icon: "🔒", text: "GDPR, PIPEDA & CCPA compliant delivery" },
  { icon: "📱", text: "Full-stack: Web, Mobile, CRM, ERP, AI" },
];

export default function WhyChooseUs() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section style={{
      padding: "88px 48px",
      background: "linear-gradient(180deg,#030B18 0%,#061425 100%)",
      position: "relative", overflow: "hidden",
      fontFamily: "'Poppins',sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        .wcu-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .wcu-point {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 18px; border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          transition: border-color .2s, background .2s, transform .2s;
          cursor: default;
        }
        .wcu-point:hover {
          border-color: rgba(0,201,167,0.25);
          background: rgba(0,201,167,0.04);
          transform: translateX(6px);
        }

        .wcu-stat {
          text-align: center; padding: 22px 14px;
          border-radius: 14px;
          border: 1px solid rgba(0,201,167,0.15);
          background: rgba(0,201,167,0.05);
          transition: transform .25s, background .25s;
        }
        .wcu-stat:hover { transform: translateY(-4px); background: rgba(0,201,167,0.1); }

        /* Video placeholder */
        .wcu-video-wrap {
          position: relative; border-radius: 24px; overflow: hidden;
          border: 1px solid rgba(0,201,167,0.2);
          background: linear-gradient(135deg,#0a1f38,#061425);
          aspect-ratio: 16/10;
          cursor: pointer;
        }
        .wcu-play-btn {
          width: 72px; height: 72px; border-radius: 50%;
          background: ${TEAL};
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 28px;
          transition: transform .25s, box-shadow .25s;
          box-shadow: 0 0 0 12px rgba(0,201,167,0.15), 0 0 0 24px rgba(0,201,167,0.07);
        }
        .wcu-play-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 0 0 16px rgba(0,201,167,0.2), 0 0 0 32px rgba(0,201,167,0.08);
        }

        @keyframes wcuPulse { 0%,100%{box-shadow:0 0 0 12px rgba(0,201,167,0.15),0 0 0 24px rgba(0,201,167,0.07)} 50%{box-shadow:0 0 0 18px rgba(0,201,167,0.2),0 0 0 36px rgba(0,201,167,0.06)} }
        .wcu-play-btn { animation: wcuPulse 2.5s ease-in-out infinite; }

        @media (max-width: 960px) {
          .wcu-layout { grid-template-columns: 1fr !important; gap: 44px !important; }
        }
        @media (max-width: 640px) {
          .wcu-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .wcu-section { padding: 60px 20px !important; }
        }
      `}</style>

      {/* Glow */}
      <div style={{ position:"absolute", top:"20%", right:"-5%", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,201,167,0.05) 0%,transparent 65%)", pointerEvents:"none", zIndex:0 }}/>

      <div style={{ maxWidth:1280, margin:"0 auto", position:"relative", zIndex:2 }}>

        <div className="wcu-layout">

          {/* LEFT — Text */}
          <div>
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"rgba(0,201,167,0.08)", border:"1px solid rgba(0,201,167,0.22)",
              borderRadius:100, padding:"6px 18px", marginBottom:20,
            }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:TEAL, display:"block", boxShadow:`0 0 8px ${TEAL}` }}/>
              <span style={{ color:TEAL, fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase" }}>
                Our Story
              </span>
            </div>

            <h2 style={{
              fontSize:"clamp(24px,2.8vw,38px)", fontWeight:900, color:"#fff",
              letterSpacing:"-0.02em", lineHeight:1.15, marginBottom:20,
            }}>
              Why Choose Us as Your{" "}
              <span style={{ background:`linear-gradient(135deg,${TEAL},#1fd1b5)`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                CRM Software Development
              </span>{" "}Agency?
            </h2>

            <p style={{ color:"rgba(255,255,255,0.55)", fontSize:15, lineHeight:1.8, marginBottom:16, fontWeight:400 }}>
              NNC Digital Solutions is backed by{" "}
              <span style={{ color:"#fff", fontWeight:600 }}>Nakshatra Namaha Creations Pvt. Ltd.</span>{" "}
              — one of Bangalore&apos;s most respected digital studios with{" "}
              <span style={{ color:TEAL, fontWeight:600 }}>8+ years of experience</span>{" "}
              and{" "}
              <span style={{ color:TEAL, fontWeight:600 }}>565+ projects delivered</span>{" "}
              across India.
            </p>
            <p style={{ color:"rgba(255,255,255,0.55)", fontSize:15, lineHeight:1.8, marginBottom:32, fontWeight:400 }}>
              To serve growing businesses in North America and the United Kingdom, we launched NNC Digital as our international arm — bringing the same proven technical expertise and client-first culture to the Canadian, US, and UK markets.
            </p>

            {/* Bullet points */}
            <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:36 }}>
              {POINTS.map((p, i) => (
                <div key={i} className="wcu-point">
                  <span style={{ fontSize:18, flexShrink:0 }}>{p.icon}</span>
                  <span style={{ color:"rgba(255,255,255,0.72)", fontSize:14, fontWeight:500 }}>{p.text}</span>
                </div>
              ))}
            </div>

            {/* Stats grid */}
            <div className="wcu-stats-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12 }}>
              {STATS.map(st => (
                <div key={st.label} className="wcu-stat">
                  <div style={{
                    fontSize:"clamp(20px,2.2vw,28px)", fontWeight:900, marginBottom:4,
                    background:`linear-gradient(135deg,#fff 30%,${TEAL})`,
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                  }}>
                    <Counter to={st.n} suffix={st.s}/>
                  </div>
                  <div style={{ color:"rgba(255,255,255,0.4)", fontSize:11.5, fontWeight:500 }}>{st.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT — Video */}
          <div>
            <div className="wcu-video-wrap" onClick={() => setVideoPlaying(true)}>
              {/* Thumbnail / placeholder */}
              {!videoPlaying ? (
                <>
                  {/* Decorative gradient bg */}
                  <div style={{
                    position:"absolute", inset:0,
                    background:"linear-gradient(135deg,#0a2540 0%,#061425 100%)",
                  }}/>
                  {/* Grid lines */}
                  <div style={{
                    position:"absolute", inset:0, pointerEvents:"none",
                    backgroundImage:"linear-gradient(rgba(0,201,167,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,.04) 1px,transparent 1px)",
                    backgroundSize:"40px 40px",
                  }}/>
                  {/* Orbs */}
                  <div style={{ position:"absolute", top:"20%", left:"15%", width:160, height:160, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,201,167,0.12) 0%,transparent 65%)" }}/>
                  <div style={{ position:"absolute", bottom:"20%", right:"15%", width:120, height:120, borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.1) 0%,transparent 65%)" }}/>

                  {/* Centre play */}
                  <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:16 }}>
                    <button className="wcu-play-btn">▶</button>
                    <p style={{ color:"rgba(255,255,255,0.6)", fontSize:14, fontWeight:600, margin:0 }}>
                      Watch Our Story
                    </p>
                  </div>

                  {/* Bottom info bar */}
                  <div style={{
                    position:"absolute", bottom:0, left:0, right:0,
                    padding:"16px 20px",
                    background:"linear-gradient(0deg,rgba(3,11,24,0.95),transparent)",
                    display:"flex", alignItems:"center", justifyContent:"space-between",
                  }}>
                    <div>
                      <p style={{ color:"#fff", fontSize:14, fontWeight:700, margin:0 }}>NNC Digital Solutions</p>
                      <p style={{ color:"rgba(255,255,255,0.4)", fontSize:12, margin:0 }}>Founder's Story · 3 min</p>
                    </div>
                    <div style={{
                      padding:"5px 12px", borderRadius:100,
                      background:"rgba(0,201,167,0.1)", border:"1px solid rgba(0,201,167,0.3)",
                      color:TEAL, fontSize:11, fontWeight:700,
                    }}>
                      ▶ Play
                    </div>
                  </div>
                </>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/?autoplay=1"
                  style={{ position:"absolute", inset:0, width:"100%", height:"100%", border:"none" }}
                  allow="autoplay; fullscreen"
                />
              )}
            </div>

            {/* Badges below video */}
            <div style={{ display:"flex", gap:10, marginTop:20, flexWrap:"wrap" }}>
              {["🇨🇦 Canada","🇺🇸 USA","🇬🇧 UK","🇮🇳 India"].map(b => (
                <span key={b} style={{
                  padding:"6px 14px", borderRadius:100,
                  border:"1px solid rgba(255,255,255,0.1)",
                  background:"rgba(255,255,255,0.03)",
                  color:"rgba(255,255,255,0.6)", fontSize:12.5, fontWeight:500,
                }}>
                  {b}
                </span>
              ))}
            </div>

            {/* CTA below */}
            <div style={{ display:"flex", gap:12, marginTop:24 }}>
              <button style={{
                flex:1, padding:"13px 20px", borderRadius:10, border:"none",
                background:`linear-gradient(135deg,${TEAL},${TEAL_DARK})`,
                color:"#000", fontWeight:700, fontSize:14,
                fontFamily:"'Poppins',sans-serif", cursor:"pointer",
                transition:"transform .2s, box-shadow .2s",
              }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-2px)";(e.currentTarget as HTMLElement).style.boxShadow="0 10px 28px rgba(0,201,167,0.35)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="";(e.currentTarget as HTMLElement).style.boxShadow="";}}
              >
                📅 Book a Free Strategy Call
              </button>
              <button style={{
                flex:1, padding:"13px 20px", borderRadius:10,
                border:"1.5px solid rgba(0,201,167,0.35)",
                background:"transparent", color:TEAL, fontWeight:600, fontSize:14,
                fontFamily:"'Poppins',sans-serif", cursor:"pointer",
                transition:"border-color .2s, background .2s",
              }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor=TEAL;(e.currentTarget as HTMLElement).style.background="rgba(0,201,167,0.07)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(0,201,167,0.35)";(e.currentTarget as HTMLElement).style.background="transparent";}}
              >
                Our Portfolio →
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}