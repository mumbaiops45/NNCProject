"use client";
import { useState, useRef, useEffect, CSSProperties } from "react";

const TEAL      = "#00C9A7";
const TEAL_DARK = "#00a07a";
const NAVY0     = "#010812";
const NAVY1     = "#030B18";
const NAVY2     = "#061425";

// ── Animated counter ─────────────────────────────────────────────────────────
function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView] as const;
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [ref, inView] = useInView();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let cur = 0; const step = to / 60;
    const t = setInterval(() => {
      cur += step;
      if (cur >= to) { setV(to); clearInterval(t); } else setV(Math.round(cur));
    }, 16);
    return () => clearInterval(t);
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

// ── Input style ───────────────────────────────────────────────────────────────
const inp: CSSProperties = {
  width: "100%", borderRadius: 9, padding: "13px 16px", fontSize: 14,
  fontFamily: "'Poppins', sans-serif", outline: "none", boxSizing: "border-box",
  background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)",
  color: "#fff", transition: "border-color .2s",
};

const TRUST_BADGES = [
  { icon: "🔵", label: "Google Partner" },
  { icon: "🏆", label: "ISO Certified" },
  { icon: "🔒", label: "GDPR Compliant" },
  { icon: "🍁", label: "PIPEDA Compliant" },
  { icon: "⭐", label: "Clutch Top Agency" },
];

const STATS = [
  { n: 100, s: "+", label: "Projects Delivered" },
  { n: 10,  s: "+", label: "Years of Combined Expertise" },
  { n: 50,  s: "+", label: "Clients Globally" },
  { n: 98,  s: "%", label: "Client Retention Rate" },
];

const SERVICES = [
  "CRM Development", "ERP Development", "Web Development",
  "Mobile App Development", "Marketing Automation",
  "Salesforce CRM", "Digital Transformation", "SEO & Digital Marketing",
];

export default function HeroSection() {
  const [form, setForm] = useState({ fname:"", lname:"", cc:"+1", phone:"", email:"", service:"", message:"" });
  const [submitted, setSubmitted] = useState(false);

  // Custom cursor
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [cursorBig, setCursorBig] = useState(false);
  useEffect(() => {
    const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = () => {
    if (form.fname && form.email) setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        /* ── Custom Cursor ── */
        * { cursor: none !important; }
        .nnc-cursor-dot {
          position: fixed;
          width: 10px; height: 10px;
          border-radius: 50%;
          background: ${TEAL};
          pointer-events: none;
          z-index: 99999;
          transform: translate(-50%, -50%);
          transition: width .15s, height .15s, background .15s;
          mix-blend-mode: difference;
        }
        .nnc-cursor-ring {
          position: fixed;
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 2px solid ${TEAL};
          pointer-events: none;
          z-index: 99998;
          transform: translate(-50%, -50%);
          transition: width .25s ease, height .25s ease, border-color .25s, left .08s ease, top .08s ease;
          opacity: 0.55;
        }
        .nnc-cursor-ring.big { width: 56px; height: 56px; border-color: rgba(0,201,167,.4); }

        /* ── Animations ── */
        @keyframes orbPulse { 0%,100%{opacity:.35;transform:scale(1)} 50%{opacity:.8;transform:scale(1.1)} }
        @keyframes shimmer  { from{left:-100%} to{left:120%} }
        @keyframes pulse    { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.6)} }
        @keyframes fadeUp   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes badgeIn  { from{opacity:0;transform:scale(.9)} to{opacity:1;transform:scale(1)} }

        .hero-fade { animation: fadeUp .7s ease both; }
        .hero-fade-1 { animation-delay: .1s; }
        .hero-fade-2 { animation-delay: .25s; }
        .hero-fade-3 { animation-delay: .4s; }
        .hero-fade-4 { animation-delay: .55s; }
        .hero-fade-5 { animation-delay: .7s; }

        .pulse-dot { animation: pulse 2s ease-in-out infinite; }

        /* ── Inputs ── */
        .h-inp:focus { border-color: rgba(0,201,167,.7) !important; box-shadow: 0 0 0 3px rgba(0,201,167,.08); }
        .h-inp option { background: #0a1f38; color: #fff; }

        /* ── Buttons ── */
        .hero-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 15px 30px; border-radius: 10px;
          background: linear-gradient(135deg, ${TEAL}, ${TEAL_DARK});
          color: #000; font-weight: 700; font-size: 15px;
          font-family: 'Poppins', sans-serif; border: none;
          transition: transform .2s, box-shadow .2s; white-space: nowrap;
        }
        .hero-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 40px rgba(0,201,167,.4); }

        .hero-btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 15px 30px; border-radius: 10px;
          background: transparent;
          border: 1.5px solid rgba(0,201,167,.4);
          color: ${TEAL}; font-weight: 600; font-size: 15px;
          font-family: 'Poppins', sans-serif;
          transition: border-color .2s, background .2s; white-space: nowrap;
        }
        .hero-btn-outline:hover { border-color: ${TEAL}; background: rgba(0,201,167,.07); }

        .form-cta {
          width: 100%; padding: 15px; border-radius: 10px;
          background: linear-gradient(135deg, ${TEAL}, ${TEAL_DARK});
          border: none; color: #000; font-weight: 700; font-size: 15px;
          font-family: 'Poppins', sans-serif;
          transition: transform .2s, box-shadow .2s;
        }
        .form-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(0,201,167,.4); }

        /* ── Trust badges ── */
        .trust-badge {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.1);
          border-radius: 100px; padding: 7px 16px;
          font-size: 12.5px; color: rgba(255,255,255,.7); font-weight: 500;
          font-family: 'Poppins', sans-serif;
          transition: border-color .2s, background .2s;
          animation: badgeIn .5s ease both;
        }
        .trust-badge:hover { border-color: rgba(0,201,167,.4); background: rgba(0,201,167,.05); color: #fff; }

        /* ── Stats bar ── */
        .stats-bar {
          background: linear-gradient(90deg, #0a2540 0%, #0d2d4a 50%, #0a2540 100%);
          border-top: 1px solid rgba(0,201,167,.15);
          border-bottom: 1px solid rgba(0,201,167,.15);
        }
        .stat-card {
          text-align: center;
          padding: 32px 20px;
          border-right: 1px solid rgba(255,255,255,.07);
          transition: background .2s;
        }
        .stat-card:last-child { border-right: none; }
        .stat-card:hover { background: rgba(0,201,167,.04); }
        .stat-num {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 900;
          background: linear-gradient(135deg, #fff 30%, ${TEAL});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          font-family: 'Poppins', sans-serif;
        }
        .stat-label {
          font-size: 13px; color: rgba(255,255,255,.45);
          font-weight: 500; margin-top: 6px;
          font-family: 'Poppins', sans-serif;
        }

        /* ── Responsive ── */

        /* Laptop 960–1280 */
        @media (max-width: 1280px) {
          .hero-inner { padding: 60px 36px 56px !important; }
          .hero-grid  { gap: 44px !important; grid-template-columns: 1fr 400px !important; }
        }

        /* Tablet 600–960 */
        @media (max-width: 960px) {
          .hero-inner    { padding: 50px 28px 48px !important; }
          .hero-grid     { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-form-col { display: block !important; }
          .stats-grid    { grid-template-columns: 1fr 1fr !important; }
          .stat-card     { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,.07) !important; padding: 24px 16px !important; }
        }

        /* Mobile < 600 */
        @media (max-width: 600px) {
          .hero-inner    { padding: 36px 18px 36px !important; }
          .hero-grid     { gap: 32px !important; }
          .hero-form-col { display: block !important; padding: 28px 20px !important; }
          .hero-btns     { flex-direction: column !important; gap: 10px !important; }
          .hero-btn-primary, .hero-btn-outline { width: 100% !important; justify-content: center !important; font-size: 14px !important; padding: 13px 20px !important; }
          .stats-grid    { grid-template-columns: 1fr 1fr !important; }
          .stat-card     { padding: 18px 10px !important; }
          .trust-badge   { font-size: 11px !important; padding: 5px 11px !important; }
        }
      `}</style>

      {/* Custom Cursor */}
      <div className="nnc-cursor-dot"   style={{ left: cursor.x, top: cursor.y }} />
      <div className={`nnc-cursor-ring${cursorBig ? " big" : ""}`} style={{ left: cursor.x, top: cursor.y }} />

      {/* ── HERO ── */}
      <section style={{
        position: "relative", minHeight: "100vh", display: "flex", alignItems: "center",
        overflow: "hidden", paddingTop: 0,
        background: `linear-gradient(150deg, ${NAVY0} 0%, ${NAVY1} 55%, ${NAVY2} 100%)`,
        fontFamily: "'Poppins', sans-serif",
      }}>

        {/* Orbs */}
        {[
          { left:"2%",  top:"5%",  size:700, color:"rgba(0,201,167,.07)", dur:8 },
          { left:"60%", top:"50%", size:500, color:"rgba(31,209,181,.05)", dur:10 },
          { left:"40%", top:"80%", size:300, color:"rgba(0,160,122,.06)", dur:6 },
        ].map((o, i) => (
          <div key={i} style={{
            position:"absolute", left:o.left, top:o.top, width:o.size, height:o.size,
            borderRadius:"50%", background:`radial-gradient(circle,${o.color} 0%,transparent 65%)`,
            animation:`orbPulse ${o.dur}s ease-in-out infinite`, animationDelay:`${i*2}s`,
            pointerEvents:"none", zIndex:0,
          }}/>
        ))}

        {/* Grid lines */}
        <div style={{
          position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
          backgroundImage:`linear-gradient(rgba(0,201,167,.03) 1px,transparent 1px),
                           linear-gradient(90deg,rgba(0,201,167,.03) 1px,transparent 1px)`,
          backgroundSize:"60px 60px",
        }}/>

        <div className="hero-inner" style={{ position:"relative", zIndex:2, width:"100%", maxWidth:1320, margin:"0 auto", padding:"70px 48px 60px" }}>
          <div className="hero-grid" style={{ display:"grid", gridTemplateColumns:"1fr 430px", gap:60, alignItems:"center" }}>

            {/* ── LEFT ── */}
            <div>
              {/* Badge */}
              <div className="hero-fade hero-fade-1" style={{
                display:"inline-flex", alignItems:"center", gap:10,
                background:"rgba(0,201,167,.08)", border:"1px solid rgba(0,201,167,.28)",
                borderRadius:100, padding:"8px 20px", marginBottom:28,
              }}>
                <span className="pulse-dot" style={{ width:7, height:7, borderRadius:"50%", background:TEAL, display:"block" }}/>
                <span style={{ color:TEAL, fontSize:11.5, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase" }}>
                  CANADA · USA · UK — POWERED BY INDIA
                </span>
              </div>

              {/* H1 */}
              <h1 className="hero-fade hero-fade-2" style={{
                fontSize:"clamp(32px,4.2vw,60px)", fontWeight:900, lineHeight:1.05,
                marginBottom:24, color:"#fff", letterSpacing:"-0.02em",
              }}>
                Build Once.{" "}
                <span style={{
                  background:`linear-gradient(135deg,${TEAL},#1fd1b5)`,
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                }}>
                  Scale Everywhere.
                </span>{" "}
                Automate Everything.
              </h1>

              {/* Subtext */}
              <p className="hero-fade hero-fade-3" style={{
                color:"rgba(255,255,255,.62)", fontSize:16.5, lineHeight:1.85,
                maxWidth:580, marginBottom:36,
              }}>
                We design and develop custom CRM, ERP, web, and mobile systems that automate your operations
                and accelerate revenue — for businesses across Canada, USA, and the UK. Backed by{" "}
                <span style={{ color:TEAL, fontWeight:600 }}>10+ years of deep tech expertise</span>{" "}
                from India&apos;s most trusted digital studio.
              </p>

              {/* CTAs */}
              <div className="hero-btns hero-fade hero-fade-4" style={{
                display:"flex", gap:16, flexWrap:"wrap", marginBottom:40,
              }}
                onMouseEnter={() => setCursorBig(true)}
                onMouseLeave={() => setCursorBig(false)}
              >
                <button className="hero-btn-primary">
                  <span>📅</span> Book a Free Strategy Call
                </button>
                <button className="hero-btn-outline">
                  Explore Our Solutions →
                </button>
              </div>

              {/* Trust Badges */}
              <div className="hero-fade hero-fade-5" style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {TRUST_BADGES.map((b, i) => (
                  <span key={b.label} className="trust-badge" style={{ animationDelay:`${.7 + i * .08}s` }}>
                    {b.icon} {b.label}
                  </span>
                ))}
              </div>

              {/* Phone numbers */}
              <div className="hero-fade hero-fade-5" style={{
                display:"flex", gap:24, marginTop:28, flexWrap:"wrap",
              }}>
                {[
                  { flag:"🇨🇦", label:"CA:", num:"+1 647-XXX-XXXX" },
                  { flag:"🇬🇧", label:"UK:", num:"+44 20-XXXX-XXXX" },
                ].map(p => (
                  <a key={p.num} href={`tel:${p.num}`} style={{
                    display:"inline-flex", alignItems:"center", gap:7,
                    color:"rgba(255,255,255,.5)", fontSize:13.5, textDecoration:"none",
                    fontWeight:500, transition:"color .2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = TEAL)}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.5)")}
                  >
                    <span>{p.flag}</span>
                    <span style={{ color:"rgba(255,255,255,.3)" }}>{p.label}</span>
                    <span>{p.num}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* ── RIGHT — Form ── */}
            <div className="hero-form-col" style={{
              background:"rgba(6,20,37,.92)", border:"1px solid rgba(0,201,167,.18)",
              borderRadius:20, padding:"36px 30px", backdropFilter:"blur(24px)",
              boxShadow:"0 0 80px rgba(0,201,167,.07)", position:"relative", overflow:"hidden",
            }}>
              {/* shimmer top bar */}
              <div style={{
                position:"absolute", top:0, left:0, height:2, width:"60%",
                background:"linear-gradient(90deg,transparent,#00C9A7,transparent)",
                animation:"shimmer 3s linear infinite",
              }}/>

              <p style={{ color:TEAL, fontSize:10.5, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:5 }}>
                Free Strategy Consultation
              </p>
              <h3 style={{ fontWeight:700, fontSize:21, marginBottom:3, color:"#fff" }}>
                Get a Free Consultation
              </h3>
              <p style={{ color:"rgba(255,255,255,.38)", fontSize:12.5, marginBottom:22 }}>
                Response within 24 hours · No commitment
              </p>

              {submitted ? (
                <div style={{ textAlign:"center", padding:"50px 0" }}>
                  <div style={{ fontSize:52, marginBottom:16 }}>✅</div>
                  <p style={{ color:TEAL, fontSize:19, fontWeight:700, marginBottom:8 }}>We&apos;ll be in touch!</p>
                  <p style={{ color:"rgba(255,255,255,.4)", fontSize:13 }}>Expect a reply within 24 business hours.</p>
                </div>
              ) : (
                <div style={{ display:"flex", flexDirection:"column", gap:10 }}>

                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                    <input className="h-inp" style={inp} placeholder="First Name *" value={form.fname} onChange={set("fname")} />
                    <input className="h-inp" style={inp} placeholder="Last Name"    value={form.lname} onChange={set("lname")} />
                  </div>

                  {/* Phone row with country code */}
                  <div style={{ display:"grid", gridTemplateColumns:"90px 1fr", gap:10 }}>
                    <select className="h-inp" style={{ ...inp, padding:"13px 10px" }} value={form.cc} onChange={set("cc")}>
                      <option value="+1">🇨🇦 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1us">🇺🇸 +1</option>
                    </select>
                    <input className="h-inp" style={inp} placeholder="Phone Number" value={form.phone} onChange={set("phone")} />
                  </div>

                  <input className="h-inp" style={inp} type="email" placeholder="Business Email *" value={form.email} onChange={set("email")} />

                  <select className="h-inp"
                    style={{ ...inp, color: form.service ? "#fff" : "rgba(255,255,255,.35)" }}
                    value={form.service} onChange={set("service")}
                  >
                    <option value="">Service of Interest</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>

                  <textarea className="h-inp"
                    style={{ ...inp, resize:"vertical", minHeight:80 }}
                    rows={3} placeholder="Tell us about your project…"
                    value={form.message} onChange={set("message")}
                  />

                  <button className="form-cta" onClick={handleSubmit}>
                    🚀 Get Free Consultation
                  </button>

                  <p style={{ textAlign:"center", color:"rgba(255,255,255,.22)", fontSize:11.5, marginTop:2 }}>
                    🔒 100% Secure · GDPR &amp; PIPEDA Compliant
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      {/* <div className="stats-bar">
        <div style={{ maxWidth:1320, margin:"0 auto" }}>
          <div className="stats-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)" }}>
            {STATS.map(st => (
              <div key={st.label} className="stat-card">
                <div className="stat-num">
                  <Counter to={st.n} suffix={st.s} />
                </div>
                <div className="stat-label">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
}