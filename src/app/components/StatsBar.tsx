"use client";
import { useEffect, useRef, useState } from "react";

const TEAL = "#00C9A7";

const STATS = [
  {
    value: 100, suffix: "+",
    label: "Projects Delivered",
    sub: "Across 12 countries",
    icon: "🚀",
    color: "rgba(0,201,167,0.12)",
    border: "rgba(0,201,167,0.25)",
  },
  {
    value: 10, suffix: "+",
    label: "Years of Combined Expertise",
    sub: "Deep tech since 2014",
    icon: "💡",
    color: "rgba(99,102,241,0.1)",
    border: "rgba(99,102,241,0.25)",
  },
  {
    value: 50, suffix: "+",
    label: "Clients Globally",
    sub: "CA · USA · UK · IN",
    icon: "🌍",
    color: "rgba(0,201,167,0.12)",
    border: "rgba(0,201,167,0.25)",
  },
  {
    value: 98, suffix: "%",
    label: "Client Retention Rate",
    sub: "Long-term partnerships",
    icon: "🤝",
    color: "rgba(99,102,241,0.1)",
    border: "rgba(99,102,241,0.25)",
  },
];

// ── Eased counter ─────────────────────────────────────────────────────────────
function Counter({ value, suffix, trigger }: { value: number; suffix: string; trigger: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!trigger || started.current) return;
    started.current = true;
    let step = 0;
    const steps = 72, duration = 1800;
    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      setCount(Math.round(eased * value));
      if (step >= steps) { setCount(value); clearInterval(timer); }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [trigger, value]);
  return <>{count}{suffix}</>;
}

export default function StatsBar() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section ref={ref} style={{
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(180deg, #061425 0%, #030B18 60%, #061425 100%)",
      borderTop: `1px solid rgba(0,201,167,0.12)`,
      borderBottom: `1px solid rgba(0,201,167,0.12)`,
      fontFamily: "'Poppins', sans-serif",
      padding: "72px 48px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        @keyframes sbFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes sbLineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes sbGlow {
          0%,100% { opacity: 0.4; transform: scale(1); }
          50%      { opacity: 0.8; transform: scale(1.06); }
        }
        @keyframes scanMove {
          0%   { top: 0%; }
          100% { top: 100%; }
        }

        .sb-card {
          position: relative;
          text-align: center;
          padding: 48px 32px;
          border-radius: 20px;
          opacity: 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .sb-card.visible {
          animation: sbFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .sb-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.4);
        }

        .sb-line {
          position: absolute;
          bottom: 0; left: 25%; right: 25%;
          height: 2px;
          transform: scaleX(0);
          transform-origin: center;
          background: linear-gradient(90deg, transparent, ${TEAL}, transparent);
          border-radius: 2px;
        }
        .sb-line.visible {
          animation: sbLineGrow 0.6s ease forwards;
        }

        .sb-num {
          font-size: clamp(40px, 4.5vw, 58px);
          font-weight: 900;
          line-height: 1;
          margin-bottom: 10px;
          background: linear-gradient(135deg, #ffffff 30%, ${TEAL} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: 'Poppins', sans-serif;
        }

        .sb-label {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 5px;
          font-family: 'Poppins', sans-serif;
        }

        .sb-sub {
          font-size: 12.5px;
          color: rgba(255,255,255,0.38);
          font-weight: 500;
          font-family: 'Poppins', sans-serif;
        }

        .sb-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
          font-size: 24px;
        }

        .sb-divider {
          position: absolute;
          right: 0; top: 20%; bottom: 20%;
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(255,255,255,0.08), transparent);
        }


        /* Section heading */
        .sb-heading {
          text-align: center;
          margin-bottom: 52px;
        }

        /* Grid */
        .sb-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 960px) {
          .sb-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sb-divider { display: none; }
        }
        @media (max-width: 520px) {
          .sb-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Scan line */}
      <div className="sb-scan" />

      {/* Centre glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 700, height: 350, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(0,201,167,0.06) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
        animation: "sbGlow 6s ease-in-out infinite",
      }} />



      {/* Cards */}
      <div className="sb-grid">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className={`sb-card${visible ? " visible" : ""}`}
            style={{
              background: stat.color,
              border: `1px solid ${stat.border}`,
              animationDelay: `${i * 0.12}s`,
            }}
          >
            {/* Icon */}
            <div className="sb-icon-wrap" style={{ background: stat.color, border: `1px solid ${stat.border}` }}>
              {stat.icon}
            </div>

            {/* Number */}
            <div className="sb-num">
              <Counter value={stat.value} suffix={stat.suffix} trigger={visible} />
            </div>

            {/* Label */}
            <div className="sb-label">{stat.label}</div>

            {/* Sub */}
            <div className="sb-sub">{stat.sub}</div>

            {/* Bottom line */}
            <div
              className={`sb-line${visible ? " visible" : ""}`}
              style={{ animationDelay: `${0.5 + i * 0.1}s` }}
            />

            {/* Right divider (not on last) */}
            {i < STATS.length - 1 && <div className="sb-divider" />}
          </div>
        ))}
      </div>
    </section>
  );
}