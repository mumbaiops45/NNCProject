

"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { T } from "../components/tokens";
import Navbar from "../components/Navbar";

/* ─── Data ─── */
const VALUES = [
  { icon: "🎯", title: "Outcomes Over Outputs", desc: "Results, not features shipped." },
  { icon: "🔒", title: "Compliance First", desc: "GDPR / PIPEDA / CCPA in every system." },
  { icon: "💡", title: "Radical Transparency", desc: "Fixed prices. Weekly demos. No jargon." },
  { icon: "🤝", title: "People Before Technology", desc: "Training & adoption matter." },
  { icon: "🏗️", title: "Long-Term Thinking", desc: "Systems designed to last 5+ years." },
  { icon: "⭐", title: "Client First, Always", desc: "Every decision starts with the client." },
];

const STATS = [
  { value: 8, suffix: "+", label: "Years of Excellence" },
  { value: 565, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Team Members" },
  { value: 3, suffix: "", label: "International Markets" },
];

const PARENT_SERVICES = [
  "Website Development", "Mobile App Development", "Digital Marketing",
  "Graphic Design", "2D Animation", "Corporate Video Production",
  "B2B Marketing", "SEO & Performance Marketing",
];

const COMPARISON = [
  { metric: "Years in Business", parent: "8+ Years", nnc: "Launched for CA/US/UK Market" },
  { metric: "Projects Delivered", parent: "565+", nnc: "Growing Portfolio in NA & UK" },
  { metric: "Team Size", parent: "100+ Members", nnc: "Dedicated International Team" },
  { metric: "Offices", parent: "Bangalore · Mysore · Mumbai · Hyderabad", nnc: "Toronto · New York · London" },
];

const INT_OFFICES = [
  { flag: "🇨🇦", city: "Toronto, Canada", phone: "+1 647-XXX-XXXX" },
  { flag: "🇺🇸", city: "New York, USA", phone: "+1 631-XXX-XXXX" },
  { flag: "🇬🇧", city: "London, UK", phone: "+44 20-XXXX-XXXX" },
];

const INDIA_OFFICES = [
  { flag: "🇮🇳", city: "Bangalore HQ", phone: "+91 9900566466" },
  { flag: "🇮🇳", city: "Mysore", phone: null },
  { flag: "🇮🇳", city: "Mumbai", phone: null },
  { flag: "🇮🇳", city: "Hyderabad", phone: null },
];

const WHY_SOLUTIONS = [
  "Dedicated project managers in North American and UK time zones",
  "GDPR, PIPEDA, and CCPA-compliant systems from day one",
  "Full creative and technical capability of a 100+ person studio",
  "Transparent, fixed-price proposals — no surprises",
  "Long-term partnership, not one-and-done project delivery",
];

/* ─── useInView ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Animated counter ─── */
function Counter({ to, suffix, active }: { to: number; suffix: string; active: boolean }) {
  const [v, setV] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    if (!active || done.current) return;
    done.current = true;
    let start: number | null = null;
    const dur = 2000;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setV(Math.round(ease * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, to]);
  return <span>{v}{suffix}</span>;
}


// // /* ─── Particle canvas ─── */
function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d")!;
    let W = c.width = c.offsetWidth, H = c.height = c.offsetHeight;
    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .28, vy: (Math.random() - .5) * .28,
      r: Math.random() * 1.4 + .4, a: Math.random() * .38 + .06,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,201,167,${p.a})`; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 105) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(0,201,167,${.055 * (1 - d / 105)})`; ctx.lineWidth = .4; ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return (
    <canvas ref={ref} style={{
      position: "absolute", inset: 0, width: "100%", height: "100%",
      pointerEvents: "none", zIndex: 0,
    }} />
  );
}

/* ─── FadeUp ─── */
function FadeUp({ children, delay = 0, style: ext }: {
  children: React.ReactNode; delay?: number; style?: React.CSSProperties;
}) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity .75s cubic-bezier(.16,1,.3,1) ${delay}s, transform .75s cubic-bezier(.16,1,.3,1) ${delay}s`,
      ...ext,
    }}>
      {children}
    </div>
  );
}

/* ─── Magnetic Button ─── */
function MagBtn({ children, primary, style: ext, onClick }: {
  children: React.ReactNode; primary?: boolean; style?: React.CSSProperties; onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const mv = useCallback((e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * .28}px,${(e.clientY - (r.top + r.height / 2)) * .28}px) scale(1.04)`;
  }, []);
  const lv = useCallback(() => { if (ref.current) ref.current.style.transform = ""; }, []);
  return (
    <button ref={ref} onMouseMove={mv} onMouseLeave={lv} onClick={onClick} style={{
      padding: "15px 38px", borderRadius: 12, cursor: "pointer",
      fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15,
      letterSpacing: ".01em",
      transition: "transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease",
      ...(primary ? {
        background: `linear-gradient(135deg, ${T.teal} 0%, ${T.tealDark} 100%)`,
        color: "#001a14", border: "none",
        boxShadow: `0 6px 28px rgba(0,201,167,.35), inset 0 1px 0 rgba(255,255,255,.2)`,
      } : {
        background: "rgba(255,255,255,.04)",
        color: "#fff",
        border: "1px solid rgba(255,255,255,.18)",
        backdropFilter: "blur(10px)",
      }),
      ...ext,
    }}>{children}</button>
  );
}

/* ─── Section Label ─── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 12, // REDUCED from 18 to 12
    }}>
      <div style={{ width: 28, height: 1, background: T.teal, opacity: .7 }} />
      <span style={{
        fontSize: 11, fontWeight: 700, color: T.teal,
        letterSpacing: "0.16em", textTransform: "uppercase",
      }}>{children}</span>
      <div style={{ width: 28, height: 1, background: T.teal, opacity: .7 }} />
    </div>
  );
}

/* ─── Gradient text ─── */
const gradText: React.CSSProperties = {
  background: `linear-gradient(120deg, ${T.teal} 0%, #7fffd4 60%, ${T.teal} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundSize: "200% auto",
};

/* ═══════════════ MAIN ═══════════════ */
export default function AboutPage() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [hoveredVal, setHoveredVal] = useState<number | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const statsIO = useInView(.3);
  const heroIO = useInView(.2);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) =>
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const isMobile = windowWidth <= 640;
  const isTablet = windowWidth > 640 && windowWidth <= 1024;

  // Responsive helpers - REDUCED PADDING for sections
  const getSectionPadding = () => {
    if (isMobile) return "40px 16px"; // REDUCED from 56px to 40px
    if (isTablet) return "56px 24px"; // REDUCED from 72px to 56px
    return "70px 48px"; // REDUCED from 108px to 70px
  };

  const getHeroPadding = () => {
    if (isMobile) return "80px 16px 60px";
    if (isTablet) return "100px 24px 70px";
    return "130px 48px 90px";
  };

  return (
    <>
      <Navbar />
      <main style={{
        background: "#020c1a",
        fontFamily: "'Poppins', sans-serif",
        color: "#fff",
        overflowX: "hidden",
      }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,600;1,700&display=swap');

          *, *::before, *::after { box-sizing: border-box; }

          @keyframes floatA   { 0%,100%{transform:translateY(0)}   50%{transform:translateY(-14px)} }
          @keyframes floatB   { 0%,100%{transform:translateY(-8px)} 50%{transform:translateY(10px)} }
          @keyframes spinCW   { from{transform:rotate(0)} to{transform:rotate(360deg)} }
          @keyframes spinCCW  { from{transform:rotate(0)} to{transform:rotate(-360deg)} }
          @keyframes pulseOrb { 0%,100%{opacity:.1;transform:scale(1)} 50%{opacity:.22;transform:scale(1.1)} }
          @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }
          @keyframes popIn    { 0%{transform:scale(0) rotate(-15deg);opacity:0} 70%{transform:scale(1.06) rotate(2deg)} 100%{transform:scale(1) rotate(0);opacity:1} }
          @keyframes slideIn  { from{opacity:0;transform:translateX(-16px)} to{opacity:1;transform:translateX(0)} }
          @keyframes scanLine { 0%{top:0} 100%{top:100%} }
          @keyframes tagScroll{ 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          @keyframes shimmer  { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
          @keyframes glowPulse{ 0%,100%{box-shadow:0 0 20px rgba(0,201,167,.15)} 50%{box-shadow:0 0 40px rgba(0,201,167,.38)} }
          @keyframes heroText { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

          .nnc-shimmer-text {
            background: linear-gradient(90deg, #00c9a7, #7fffd4, #00c9a7, #7fffd4);
            background-size: 300% 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 4s ease infinite;
          }

          .nnc-hero-h1 { animation: heroText .9s cubic-bezier(.16,1,.3,1) .3s both; }
          .nnc-hero-p  { animation: heroText .9s cubic-bezier(.16,1,.3,1) .5s both; }
          .nnc-hero-btns { animation: heroText .9s cubic-bezier(.16,1,.3,1) .65s both; }

          .nnc-val-card {
            border-radius: 20px;
            padding: clamp(24px, 3vw, 34px) clamp(20px, 2.5vw, 28px);
            cursor: default;
            position: relative;
            overflow: hidden;
            transition: transform .35s cubic-bezier(.16,1,.3,1), border-color .3s, background .3s, box-shadow .35s;
          }
          .nnc-val-card::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 20px;
            background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(0,201,167,.08), transparent 60%);
            opacity: 0;
            transition: opacity .3s;
          }
          .nnc-val-card:hover::after { opacity: 1; }
          .nnc-val-card:hover { transform: translateY(-8px) scale(1.02); }

          .nnc-tag-belt { display: flex; gap: 12px; width: max-content; animation: tagScroll 22s linear infinite; }
          .nnc-tag-belt:hover { animation-play-state: paused; }

          .nnc-comp-row { transition: background .2s; }
          .nnc-comp-row:hover { background: rgba(0,201,167,.05) !important; }

          .nnc-why-item {
            transition: transform .22s ease, background .22s ease;
            border-radius: 12px;
            padding: 12px 14px;
          }
          .nnc-why-item:hover { transform: translateX(8px); background: rgba(0,201,167,.07) !important; }

          .nnc-office-row {
            transition: background .2s, transform .22s;
            border-radius: 12px;
          }
          .nnc-office-row:hover { background: rgba(0,201,167,.08) !important; transform: translateX(5px); }

          .nnc-stat-cell { transition: background .3s; cursor: default; }
          .nnc-stat-cell:hover { background: rgba(0,201,167,.1) !important; }

          /* Layout - UPDATED with reduced spacing */
          .nnc-section { padding: ${getSectionPadding()}; }
          .nnc-stat-grid { display: grid; grid-template-columns: repeat(4,1fr); }
          .nnc-story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(32px, 6vw, 76px); align-items: center; }
          .nnc-parent-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(24px, 4vw, 44px); align-items: center; }
          .nnc-mini-stats { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(10px, 2vw, 14px); }
          .nnc-why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(20px, 3vw, 28px); }
          .nnc-values-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
          .nnc-offices-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(16px, 3vw, 22px); }
          .nnc-comp-grid { display: grid; grid-template-columns: 1.2fr 1fr 1fr; }

          /* Divider line - REDUCED margin */
          .nnc-divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(0,201,167,.25), transparent);
            margin: 0 clamp(12px, 3vw, 32px); /* REDUCED from 16px-48px to 12px-32px */
          }

          @media (max-width: 960px) {
            .nnc-story-grid, .nnc-parent-grid, .nnc-why-grid, .nnc-offices-grid { grid-template-columns: 1fr !important; gap: 28px !important; } /* REDUCED gap */
            .nnc-stat-grid { grid-template-columns: repeat(2,1fr) !important; }
          }
          @media (max-width: 720px) {
            .nnc-values-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; } /* REDUCED gap */
            .nnc-comp-grid { grid-template-columns: 1fr !important; gap: 6px !important; } /* REDUCED gap */
            .nnc-comp-grid > div { padding: 10px 14px !important; } /* REDUCED padding */
          }
          @media (max-width: 520px) {
            .nnc-values-grid { grid-template-columns: 1fr !important; }
            .nnc-stat-grid { grid-template-columns: 1fr 1fr !important; }
            .nnc-mini-stats { gap: 6px !important; } /* REDUCED gap */
            .nnc-mini-stats > div { padding: 12px 8px !important; } /* REDUCED padding */
            .nnc-why-item { padding: 6px 8px !important; } /* REDUCED padding */
            .nnc-why-item p { font-size: 12px !important; } /* REDUCED font */
          }

          /* Mobile button container fixes */
          @media (max-width: 640px) {
            .nnc-hero-btns {
              flex-direction: column !important;
              width: 100% !important;
              padding: 0 !important;
            }
            
            .nnc-hero-btns button {
              width: 100% !important;
              margin: 0 !important;
            }

            .nnc-hero-btns a, 
            .nnc-hero-btns button {
              width: 100%;
              text-align: center;
              white-space: normal !important;
              word-wrap: break-word;
            }
          }

          /* Additional spacing reductions for section headings */
          .section-heading-margin {
            margin-bottom: 24px !important; /* Reduced from default */
          }
        `}</style>

        {/* ══════════════════════════════
            HERO
        ══════════════════════════════ */}
        <section style={{
          minHeight: isMobile ? "auto" : "94vh",
          display: "flex",
          alignItems: "center",
          padding: getHeroPadding(),
          background: "linear-gradient(140deg, #010b17 0%, #021424 45%, #020c1a 100%)",
          position: "relative",
          overflow: "hidden",
        }}>
          <Particles />
          {/* Grid overlay - COMMENTED OUT AS IN YOUR FINAL CODE */}
          {/* <div style={{
            position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
            backgroundImage: `linear-gradient(rgba(0,201,167,.03) 1px,transparent 1px),
                              linear-gradient(90deg,rgba(0,201,167,.03) 1px,transparent 1px)`,
            backgroundSize: isMobile ? "40px 40px" : "64px 64px",
          }} /> */}

          {/* Parallax orbs - hidden on mobile for performance */}
          {!isMobile && (
            <>
              <div style={{
                position: "absolute", width: isTablet ? 600 : 750, height: isTablet ? 600 : 750, borderRadius: "50%", pointerEvents: "none", zIndex: 1,
                background: `radial-gradient(circle, rgba(0,201,167,.12) 0%, transparent 65%)`,
                top: "50%", left: "55%",
                transform: `translate(-50%, -50%) translate(${mouse.x * -20}px, ${mouse.y * -16}px)`,
                transition: "transform .45s ease",
                animation: "pulseOrb 8s ease-in-out infinite",
              }} />
              <div style={{
                position: "absolute", width: isTablet ? 400 : 500, height: isTablet ? 400 : 500, borderRadius: "50%", pointerEvents: "none", zIndex: 1,
                background: "radial-gradient(circle, rgba(99,102,241,.1) 0%, transparent 65%)",
                top: "15%", left: "-8%",
                transform: `translate(${mouse.x * 16}px, ${mouse.y * 12}px)`,
                transition: "transform .5s ease",
                animation: "pulseOrb 11s ease-in-out infinite 1s",
              }} />
              <div style={{
                position: "absolute", width: isTablet ? 550 : 700, height: isTablet ? 550 : 700, borderRadius: "50%", pointerEvents: "none", zIndex: 1,
                border: "1px dashed rgba(0,201,167,.07)",
                top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                animation: "spinCW 55s linear infinite",
              }} />
              <div style={{
                position: "absolute", width: isTablet ? 360 : 460, height: isTablet ? 360 : 460, borderRadius: "50%", pointerEvents: "none", zIndex: 1,
                border: "1px dashed rgba(0,201,167,.045)",
                top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                animation: "spinCCW 35s linear infinite",
              }} />
            </>
          )}

          <div style={{ maxWidth: 1220, margin: "0 auto", position: "relative", zIndex: 3, width: "100%", padding: isMobile ? "0" : "0" }}>
            <div ref={heroIO.ref} style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>

              {/* Badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(0,201,167,.07)", border: "1px solid rgba(0,201,167,.22)",
                borderRadius: 40, padding: isMobile ? "6px 16px" : "8px 20px", marginBottom: isMobile ? 20 : 28, // REDUCED margin
                animation: "glowPulse 3.5s ease-in-out infinite",
              }}>
                <div style={{
                  width: isMobile ? 6 : 7, height: isMobile ? 6 : 7, borderRadius: "50%", background: T.teal,
                  boxShadow: `0 0 10px ${T.teal}`,
                  animation: "blink 1.5s ease-in-out infinite",
                }} />
                <span style={{
                  fontSize: isMobile ? 10 : 11, fontWeight: 700, color: T.teal,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                }}>About NNC Digital Solutions</span>
              </div>

              {/* H1 */}
              <h1 className="nnc-hero-h1" style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile ? "clamp(28px, 7vw, 32px)" : isTablet ? "clamp(34px, 4.5vw, 48px)" : "clamp(42px, 4.8vw, 64px)",
                fontWeight: 800,
                lineHeight: 1.12,
                marginBottom: isMobile ? 16 : 24, // REDUCED margin
                marginTop: 0,
                letterSpacing: "-.02em",
                maxWidth: isMobile ? "100%" : 900,
                padding: isMobile ? "0 10px" : "0",
              }}>
                Built on{" "}
                <em style={{ fontStyle: "italic", ...gradText as object }}>
                  Indian Tech Excellence.
                </em>
                <br />
                Built for{" "}
                <span style={{ color: "rgba(255,255,255,.92)" }}>Canadian,</span>
                {" "}
                <em style={{ fontStyle: "italic", color: "rgba(255,255,255,.55)" }}>
                  US &amp; UK Business.
                </em>
              </h1>

              {/* Body */}
              <p className="nnc-hero-p" style={{
                fontSize: isMobile ? "14px" : isTablet ? "15px" : "16px",
                color: "rgba(255,255,255,.48)",
                lineHeight: 1.8, // REDUCED from 1.9 to 1.8
                marginBottom: isMobile ? 28 : 36, // REDUCED margin
                maxWidth: isMobile ? "100%" : 620,
                marginTop: 0,
                padding: isMobile ? "0 10px" : "0",
              }}>
                NNC Digital Solutions is the international technology arm of Nakshatra Namaha Creations Pvt. Ltd. — one of Bangalore&apos;s most respected digital studios. We were born from a belief that the deep technology expertise that has transformed thousands of Indian businesses deserves to be accessible to growing companies in Canada, the USA, and the United Kingdom.
              </p>

              {/* CTAs - FIXED routing */}
              <div className="nnc-hero-btns" style={{
                display: "flex",
                gap: isMobile ? 12 : 14,
                flexDirection: isMobile ? "column" : "row",
                width: isMobile ? "100%" : "auto",
                maxWidth: isMobile ? "320px" : "none",
                margin: isMobile ? "0 auto" : "0",
              }}>
                <Link href="/contact" style={{ textDecoration: "none", width: isMobile ? "100%" : "auto" }}>
                  <MagBtn primary>Book a Free Consultation</MagBtn>
                </Link>
                <Link href="/case-studies" style={{ textDecoration: "none", width: isMobile ? "100%" : "auto" }}>
                  <MagBtn>View Our Work →</MagBtn>
                </Link>
              </div>
            </div>

            {/* ── STAT STRIP with ANIMATED COUNTERS ── */}
            <FadeUp delay={0.4}>
              <div ref={statsIO.ref}>
                <div className="nnc-stat-grid" style={{
                  marginTop: isMobile ? 40 : 60, // REDUCED from 48-80 to 40-60
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,.07)",
                  background: "rgba(255,255,255,.025)",
                  backdropFilter: "blur(12px)",
                }}>
                  {STATS.map((s, i) => (
                    <div key={i} className="nnc-stat-cell" style={{
                      padding: isMobile ? "18px 10px" : "28px 20px", // REDUCED padding
                      textAlign: "center",
                      background: "rgba(5,16,32,.7)",
                      borderRight: i < 3 && !isMobile ? "1px solid rgba(255,255,255,.05)" : "none",
                      borderBottom: isMobile && i < 2 ? "1px solid rgba(255,255,255,.05)" : "none",
                      position: "relative",
                    }}>
                      {/* top accent */}
                      <div style={{
                        position: "absolute", top: 0, left: "20%", right: "20%", height: 2,
                        background: `linear-gradient(90deg, transparent, ${T.teal}, transparent)`,
                        opacity: .5,
                      }} />
                      <p style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: isMobile ? "clamp(22px, 5vw, 26px)" : isTablet ? "clamp(26px, 3vw, 32px)" : "clamp(30px, 3.2vw, 42px)", // REDUCED font
                        fontWeight: 700, margin: 0,
                        ...gradText as object,
                      }}>
                        <Counter to={s.value} suffix={s.suffix} active={statsIO.visible} />
                      </p>
                      <p style={{
                        fontSize: isMobile ? 8 : 9, // REDUCED from 9-10 to 8-9
                        color: "rgba(255,255,255,.38)",
                        margin: "4px 0 0", // REDUCED from 6px to 4px
                        fontWeight: 600,
                        letterSpacing: "0.08em", textTransform: "uppercase",
                      }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <div className="nnc-divider" />

        {/* ══════════════════════════════
            THE NNC STORY - REDUCED TOP SPACING
        ══════════════════════════════ */}
        <section className="nnc-section" style={{ background: "#020c1a" }}>
          <div style={{ maxWidth: 1220, margin: "0 auto" }}>
            <div className="nnc-story-grid">

              {/* Text */}
              <FadeUp>
                <div>
                  <SectionLabel>Our Story</SectionLabel>
                  <h2 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: isMobile ? "clamp(22px, 5vw, 26px)" : isTablet ? "clamp(24px, 3vw, 32px)" : "clamp(28px, 2.9vw, 40px)",
                    fontWeight: 700, lineHeight: 1.2, marginBottom: isMobile ? 16 : 20, // REDUCED from 20-30 to 16-20
                    marginTop: 0,
                  }}>
                    From Bangalore to Canada —{" "}
                    <span style={gradText as object}>The NNC Digital Story</span>
                  </h2>

                  {[
                    "Nakshatra Namaha Creations Pvt. Ltd. was founded in Bangalore, India — a city synonymous with world-class software engineering. Over 8+ years, the company built a reputation as one of Karnataka's most trusted digital studios, delivering 565+ projects across website development, mobile apps, digital marketing, corporate video, 2D animation, B2B marketing, and more.",
                    "In response to increasing demand from businesses in Canada, the United States, and the United Kingdom who needed a trustworthy offshore technology partner — NNC Digital Solutions was launched as Nakshatra Namaha Creations' dedicated international brand.",
                    "NNC Digital is not a new company trying to build a reputation. It is the international expression of a decade of proven capability — backed by the people, processes, and portfolio of one of India's most capable digital studios.",
                  ].map((para, i) => (
                    <p key={i} style={{
                      color: "rgba(255,255,255,.5)", fontSize: isMobile ? 14 : 15, lineHeight: 1.7, // REDUCED line-height
                      marginBottom: 12, // REDUCED from 16 to 12
                      animation: `slideIn .6s ease ${.15 + i * .15}s both`,
                    }}>{para}</p>
                  ))}

                  {/* Pill */}
                  <div style={{
                    marginTop: 18, // REDUCED from 26 to 18
                    padding: isMobile ? "12px 16px" : "16px 20px", // REDUCED padding
                    borderRadius: 14,
                    background: "rgba(0,201,167,.05)", border: "1px solid rgba(0,201,167,.18)",
                    display: "flex", alignItems: "center", gap: 14, // REDUCED gap from 16 to 14
                    transition: "transform .25s, background .25s", cursor: "default",
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.transform = "translateX(6px)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.09)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.transform = "";
                      (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.05)";
                    }}
                  >
                    <span style={{ fontSize: 26 }}>🇮🇳</span> {/* REDUCED from 28 to 26 */}
                    <div>
                      <p style={{ fontSize: isMobile ? 12 : 13, fontWeight: 700, color: "#fff", margin: 0 }}> {/* REDUCED font */}
                        Bangalore → Toronto · New York · London
                      </p>
                      <p style={{ fontSize: isMobile ? 10 : 11, color: "rgba(255,255,255,.38)", margin: "2px 0 0" }}> {/* REDUCED font */}
                        One trusted studio. Three international markets.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* Image side */}
              <FadeUp delay={0.18}>
                <div
                  style={{
                    position: "relative",
                    marginTop: isMobile ? 20 : 0,
                    maxWidth: 520,
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  <div style={{
                    borderRadius: 28, overflow: "hidden",
                    border: "1px solid rgba(0,201,167,.18)",
                    boxShadow: `0 36px 90px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.04)`,
                    position: "relative", aspectRatio: "4/3",maxHeight: 360,
                    transition: "transform .45s cubic-bezier(.16,1,.3,1), box-shadow .45s ease",
                  }}
                    onMouseEnter={e => {
                      if (!isMobile) {
                        (e.currentTarget as HTMLElement).style.transform = "scale(1.02) perspective(800px) rotateY(-2deg)";
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 48px 110px rgba(0,0,0,.65), 0 0 80px rgba(0,201,167,.12)`;
                      }
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.transform = "";
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 36px 90px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.04)`;
                    }}
                  >
                    <Image src="/NNCLOGO.jpg" alt="NNC Digital Solutions" fill style={{ objectFit: "contain" , background: "#ffffff", padding: "20px" }} />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(2,12,26,.88) 0%, rgba(2,12,26,.2) 55%, transparent 100%)",
                    }} />
                    {/* scan line - hidden on mobile */}
                    {!isMobile && (
                      <div style={{
                        position: "absolute", left: 0, right: 0, height: 2, pointerEvents: "none",
                        background: "linear-gradient(90deg, transparent, rgba(0,201,167,.55), transparent)",
                        animation: "scanLine 4.5s linear infinite",
                      }} />
                    )}
                    <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
                      <p style={{ fontSize: isMobile ? 12 : 14, fontWeight: 700, color: "#fff", margin: 0 }}>NNC Digital Solutions</p>
                      <p style={{ fontSize: isMobile ? 10 : 12, color: T.teal, margin: "5px 0 0", fontWeight: 500 }}>A Nakshatra Namaha Creations Company</p>
                    </div>
                  </div>

                  {/* Badges - hidden on mobile */}
                  {!isMobile && (
                    <>
                      <div style={{
                        position: "absolute", top: -20, right: -20,
                        background: `linear-gradient(135deg, ${T.teal}, ${T.tealDark})`,
                        borderRadius: 18, padding: "16px 20px", textAlign: "center",
                        boxShadow: `0 10px 36px rgba(0,201,167,.5)`,
                        animation: "floatA 4.2s ease-in-out infinite, popIn .85s ease .3s both",
                      }}>
                        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 26, fontWeight: 700, color: "#001a14", margin: 0, lineHeight: 1 }}>565+</p>
                        <p style={{ fontSize: 10, fontWeight: 700, color: "rgba(0,26,20,.65)", margin: "4px 0 0", letterSpacing: "0.08em" }}>PROJECTS</p>
                      </div>

                      <div style={{
                        position: "absolute", bottom: -20, left: -20,
                        background: "rgba(2,14,28,.96)", border: "1px solid rgba(0,201,167,.28)",
                        borderRadius: 16, padding: "13px 18px",
                        boxShadow: "0 10px 36px rgba(0,0,0,.5)",
                        animation: "floatB 5.5s ease-in-out infinite, popIn .85s ease .55s both",
                      }}>
                        <p style={{ fontSize: 12.5, fontWeight: 700, color: "#fff", margin: 0 }}>🏙️ Bangalore · Toronto · London</p>
                        <p style={{ fontSize: 11, color: "rgba(255,255,255,.38)", margin: "4px 0 0" }}>8+ years of global delivery</p>
                      </div>
                    </>
                  )}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        <div className="nnc-divider" />

        {/* ══════════════════════════════
            PARENT COMPANY - REDUCED TOP SPACING
        ══════════════════════════════ */}
        <section className="nnc-section" style={{
          background: "linear-gradient(180deg, #030f20 0%, #02101f 100%)",
          position: "relative", overflow: "hidden",
        }}>
          {/* dot grid */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `radial-gradient(rgba(0,201,167,.055) 1px, transparent 1px)`,
            backgroundSize: isMobile ? "20px 20px" : "30px 30px",
          }} />

          <div style={{ maxWidth: 1220, margin: "0 auto", position: "relative", zIndex: 1 }}>

            <FadeUp style={{ textAlign: "center", marginBottom: isMobile ? 24 : 30 } as React.CSSProperties}> {/* REDUCED from 40-60 to 24-30 */}
              <SectionLabel>Backed By</SectionLabel>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile ? "clamp(22px, 5vw, 26px)" : isTablet ? "clamp(24px, 3vw, 32px)" : "clamp(28px, 2.9vw, 42px)",
                fontWeight: 700, marginBottom: 8, marginTop: 0, // REDUCED from 12 to 8
              }}>
                Our Parent Company —{" "}
                <span className="nnc-shimmer-text">Nakshatra Namaha Creations Pvt. Ltd.</span>
              </h2>
              <p style={{ fontSize: isMobile ? 14 : 15, color: "rgba(255,255,255,.4)", margin: 0, fontWeight: 400 }}>
                8+ Years of Digital Excellence from Bangalore, India
              </p>
            </FadeUp>

            {/* Main info block */}
            <FadeUp delay={0.1}>
              <div style={{
                borderRadius: 24, padding: isMobile ? "20px 16px" : "36px 40px", // REDUCED padding
                marginBottom: isMobile ? 24 : 32, // REDUCED from 32-50 to 24-32
                background: "rgba(0,201,167,.04)",
                border: "1px solid rgba(0,201,167,.18)",
                transition: "box-shadow .35s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 28px 70px rgba(0,0,0,.45)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = ""}
              >
                <div className="nnc-parent-grid">
                  <div>
                    <p style={{ fontSize: isMobile ? 14 : 15, color: "rgba(255,255,255,.52)", lineHeight: 1.7, margin: "0 0 16px" }}> {/* REDUCED line-height and margin */}
                      Headquartered in <strong style={{ color: "#fff", fontWeight: 700 }}>Bengaluru, Karnataka</strong> — India&apos;s Silicon Valley — with offices in Mysore, Mumbai, and Hyderabad. A full-spectrum digital studio combining creative excellence with engineering rigour.
                    </p>
                    <a
                      href="https://www.nakshatranamahacreations.com"
                      target="_blank" rel="noopener noreferrer"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 8, // REDUCED gap from 10 to 8
                        fontSize: isMobile ? 13 : 14, fontWeight: 700, color: T.teal,
                        textDecoration: "none",
                        padding: isMobile ? "6px 12px" : "8px 16px", // REDUCED padding
                        borderRadius: 10,
                        background: "rgba(0,201,167,.08)", border: "1px solid rgba(0,201,167,.2)",
                        transition: "background .2s, gap .2s",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.14)";
                        (e.currentTarget as HTMLElement).style.gap = "12px"; // REDUCED from 16 to 12
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.08)";
                        (e.currentTarget as HTMLElement).style.gap = "8px"; // REDUCED from 10 to 8
                      }}
                    >
                      🌐 www.nakshatranamahacreations.com →
                    </a>
                  </div>

                  <div className="nnc-mini-stats">
                    {[
                      { n: "8+", l: "Years Active" },
                      { n: "565+", l: "Projects" },
                      { n: "100+", l: "Team Size" },
                      { n: "4", l: "Indian Offices" },
                    ].map((s, i) => (
                      <div key={i} style={{
                        textAlign: "center", padding: isMobile ? "12px 6px" : "16px 10px", // REDUCED padding
                        borderRadius: 16,
                        background: "rgba(0,201,167,.06)", border: "1px solid rgba(0,201,167,.13)",
                        transition: "transform .28s, background .28s", cursor: "default",
                      }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; // REDUCED from -6px to -4px
                          (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.13)";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.transform = "";
                          (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.06)";
                        }}
                      >
                        <p style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: isMobile ? 22 : 24, // REDUCED from 24-28 to 22-24
                          fontWeight: 700, color: T.teal, margin: 0,
                        }}>{s.n}</p>
                        <p style={{
                          fontSize: isMobile ? 8 : 9, // REDUCED from 9-10 to 8-9
                          color: "rgba(255,255,255,.38)",
                          margin: "2px 0 0", // REDUCED from 4px to 2px
                          fontWeight: 600,
                          textTransform: "uppercase", letterSpacing: "0.07em",
                        }}>{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Marquee service tags */}
            <FadeUp delay={0.15}>
              <p style={{
                fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.13em",
                textTransform: "uppercase", color: "rgba(255,255,255,.3)", marginBottom: 10, // REDUCED from 14 to 10
              }}>Parent Company Services That Power NNC Digital</p>
              <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)", marginBottom: isMobile ? 24 : 32 }}> {/* REDUCED from 32-50 to 24-32 */}
                <div className="nnc-tag-belt">
                  {[...PARENT_SERVICES, ...PARENT_SERVICES].map((s, i) => (
                    <span key={i} style={{
                      flexShrink: 0, fontSize: isMobile ? 12 : 13, fontWeight: 600,
                      color: "rgba(255,255,255,.68)",
                      background: "rgba(255,255,255,.04)",
                      border: "1px solid rgba(255,255,255,.09)",
                      padding: isMobile ? "6px 14px" : "8px 18px", // REDUCED padding
                      borderRadius: 40, whiteSpace: "nowrap",
                      transition: "background .2s, color .2s, border-color .2s", cursor: "default",
                    }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,.1)";
                        (e.currentTarget as HTMLElement).style.color = T.teal;
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,167,.28)";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.04)";
                        (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.68)";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.09)";
                      }}
                    >{s}</span>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Comparison table */}
            <FadeUp delay={0.2}>
              <div style={{
                borderRadius: 18, overflow: "hidden",
                border: "1px solid rgba(255,255,255,.07)",
                boxShadow: "0 20px 60px rgba(0,0,0,.3)",
              }}>
                <div className="nnc-comp-grid" style={{
                  background: "rgba(0,201,167,.07)",
                  borderBottom: "1px solid rgba(0,201,167,.18)",
                  padding: isMobile ? "10px 14px" : "14px 24px", // REDUCED padding
                }}>
                  {["Metric", "Nakshatra Namaha Creations", "NNC Digital (International)"].map(h => (
                    <p key={h} style={{
                      fontSize: isMobile ? 9 : 10, fontWeight: 700, color: T.teal,
                      textTransform: "uppercase", letterSpacing: "0.11em", margin: 0,
                    }}>{h}</p>
                  ))}
                </div>
                {COMPARISON.map((row, i) => (
                  <div key={i} className="nnc-comp-row nnc-comp-grid" style={{
                    padding: isMobile ? "10px 14px" : "14px 24px", // REDUCED padding
                    background: i % 2 === 0 ? "rgba(255,255,255,.015)" : "transparent",
                    borderBottom: i < COMPARISON.length - 1 ? "1px solid rgba(255,255,255,.04)" : "none",
                  }}>
                    <p style={{ fontSize: isMobile ? 12 : 13, fontWeight: 700, color: "rgba(255,255,255,.55)", margin: 0 }}>{row.metric}</p>
                    <p style={{ fontSize: isMobile ? 12 : 13, color: "rgba(255,255,255,.82)", margin: isMobile ? "2px 0" : 0 }}>{row.parent}</p> {/* REDUCED margin */}
                    <p style={{ fontSize: isMobile ? 12 : 13, color: T.teal, fontWeight: 600, margin: 0 }}>{row.nnc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        <div className="nnc-divider" />

        {/* ══════════════════════════════
            WHY WE LAUNCHED - REDUCED TOP SPACING
        ══════════════════════════════ */}
        <section className="nnc-section" style={{ background: "#020c1a" }}>
          <div style={{ maxWidth: 1220, margin: "0 auto" }}>

            <FadeUp style={{ textAlign: "center", marginBottom: isMobile ? 24 : 30 } as React.CSSProperties}> {/* REDUCED from 40-60 to 24-30 */}
              <SectionLabel>Our Purpose</SectionLabel>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile ? "clamp(22px, 5vw, 26px)" : isTablet ? "clamp(24px, 3vw, 32px)" : "clamp(28px, 2.9vw, 42px)",
                fontWeight: 700, margin: 0,
              }}>
                Why We Launched NNC Digital for the{" "}
                <span style={gradText as object}>North American &amp; UK Market</span>
              </h2>
            </FadeUp>

            <div className="nnc-why-grid">

              {/* Gap card */}
              <FadeUp delay={0.08}>
                <div style={{
                  borderRadius: 22, padding: isMobile ? "24px 20px" : "36px 32px", // REDUCED padding
                  height: "100%",
                  background: "rgba(255,255,255,.025)",
                  border: "1px solid rgba(255,255,255,.07)",
                  transition: "border-color .3s, transform .32s",
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(239,68,68,.28)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.07)";
                    (e.currentTarget as HTMLElement).style.transform = "";
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 14, marginBottom: 20, // REDUCED size and margin
                    background: "rgba(239,68,68,.1)", border: "1px solid rgba(239,68,68,.2)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
                  }}>🔍</div>
                  <h3 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: isMobile ? 18 : 20, fontWeight: 700, color: "#fff", marginBottom: 12, marginTop: 0, // REDUCED margin
                  }}>The Gap We Saw</h3>
                  <p style={{ color: "rgba(255,255,255,.48)", fontSize: isMobile ? 14 : 15, lineHeight: 1.7, margin: "0 0 12px" }}> {/* REDUCED line-height and margin */}
                    Businesses in Canada, the USA, and the UK face a common challenge: local agencies charge premium prices for work that can be delivered at a fraction of the cost — without any quality reduction — by the right offshore partner.
                  </p>
                  <p style={{ color: "rgba(255,255,255,.48)", fontSize: isMobile ? 14 : 15, lineHeight: 1.7, margin: 0 }}>
                    Most offshore agencies fail because they don&apos;t understand the regulatory environment, commercial culture, or specific needs of Western businesses.
                  </p>
                </div>
              </FadeUp>

              {/* Solution card */}
              <FadeUp delay={0.15}>
                <div style={{
                  borderRadius: 22, padding: isMobile ? "24px 20px" : "36px 32px", // REDUCED padding
                  height: "100%",
                  background: "rgba(0,201,167,.035)",
                  border: "1px solid rgba(0,201,167,.16)",
                  transition: "border-color .3s, transform .32s",
                  position: "relative", overflow: "hidden",
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,167,.38)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,201,167,.16)";
                    (e.currentTarget as HTMLElement).style.transform = "";
                  }}
                >
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 2, borderRadius: "22px 22px 0 0",
                    background: `linear-gradient(90deg, transparent, ${T.teal}, transparent)`, opacity: .6,
                  }} />
                  <div style={{
                    width: 48, height: 48, borderRadius: 14, marginBottom: 20, // REDUCED size and margin
                    background: "rgba(0,201,167,.1)", border: "1px solid rgba(0,201,167,.28)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
                  }}>✅</div>
                  <h3 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: isMobile ? 18 : 20, fontWeight: 700, color: "#fff", marginBottom: 16, marginTop: 0, // REDUCED margin
                  }}>The Solution We Built</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {WHY_SOLUTIONS.map((item, i) => (
                      <div key={i} className="nnc-why-item" style={{
                        display: "flex", gap: 10, alignItems: "flex-start", // REDUCED gap
                        background: "rgba(0,201,167,.03)",
                        animation: `slideIn .5s ease ${.2 + i * .1}s both`,
                      }}>
                        <div style={{
                          width: 20, height: 20, borderRadius: "50%", flexShrink: 0, marginTop: 1, // REDUCED size
                          background: `linear-gradient(135deg, ${T.teal}, ${T.tealDark})`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 10, color: "#001a14", fontWeight: 900, // REDUCED font
                        }}>✓</div>
                        <p style={{ color: "rgba(255,255,255,.7)", fontSize: isMobile ? 13 : 14, lineHeight: 1.5, margin: 0 }}>{item}</p> {/* REDUCED line-height */}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        <div className="nnc-divider" />

        {/* ══════════════════════════════
            VALUES + OFFICES + CTA - REDUCED TOP SPACING
        ══════════════════════════════ */}
        <section className="nnc-section" style={{
          background: "linear-gradient(180deg, #030f20 0%, #020c1a 100%)",
          position: "relative",
        }}>
          <div style={{ maxWidth: 1220, margin: "0 auto" }}>

            {/* Values heading */}
            <FadeUp style={{ textAlign: "center", marginBottom: isMobile ? 24 : 30 } as React.CSSProperties}> {/* REDUCED from 40-56 to 24-30 */}
              <SectionLabel>Our Values</SectionLabel>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile ? "clamp(22px, 5vw, 26px)" : isTablet ? "clamp(24px, 3vw, 32px)" : "clamp(28px, 2.9vw, 42px)",
                fontWeight: 700, margin: 0,
              }}>
                What We{" "}
                <span style={gradText as object}>Stand For</span>
              </h2>
            </FadeUp>

            {/* Values grid */}
            <div className="nnc-values-grid" style={{ marginBottom: isMobile ? 40 : 60 }}> {/* REDUCED from 60-96 to 40-60 */}
              {VALUES.map((v, i) => (
                <FadeUp key={i} delay={0.07 * i}>
                  <div
                    className="nnc-val-card"
                    onMouseEnter={() => setHoveredVal(i)}
                    onMouseLeave={() => setHoveredVal(null)}
                    style={{
                      background: hoveredVal === i ? "rgba(0,201,167,.065)" : "rgba(255,255,255,.025)",
                      border: `1px solid ${hoveredVal === i ? "rgba(0,201,167,.35)" : "rgba(255,255,255,.07)"}`,
                      boxShadow: hoveredVal === i ? "0 28px 65px rgba(0,0,0,.5)" : "none",
                    }}
                  >
                    {/* top accent line */}
                    {hoveredVal === i && (
                      <div style={{
                        position: "absolute", top: 0, left: 0, right: 0, height: 2,
                        borderRadius: "20px 20px 0 0",
                        background: `linear-gradient(90deg, transparent, ${T.teal}, transparent)`,
                      }} />
                    )}
                    <div style={{
                      fontSize: isMobile ? 32 : 36, marginBottom: 12, display: "inline-block", // REDUCED margin
                      transition: "transform .35s cubic-bezier(.16,1,.3,1)",
                      transform: hoveredVal === i ? "scale(1.2) rotate(-6deg)" : "scale(1)",
                    }}>{v.icon}</div>
                    <p style={{ fontSize: isMobile ? 14 : 15, fontWeight: 700, color: "#fff", marginBottom: 4, marginTop: 0 }}>{v.title}</p> {/* REDUCED margin */}
                    <p style={{ fontSize: isMobile ? 12 : 13, color: "rgba(255,255,255,.42)", lineHeight: 1.6, margin: 0 }}>{v.desc}</p> {/* REDUCED line-height */}
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Offices heading */}
            <FadeUp style={{ textAlign: "center", marginBottom: 24 } as React.CSSProperties}> {/* REDUCED from 32 to 24 */}
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile ? "clamp(20px, 5vw, 24px)" : isTablet ? "clamp(22px, 3vw, 28px)" : "clamp(24px, 2.5vw, 36px)",
                fontWeight: 600, margin: 0,
              }}>
                Global{" "}
                <span style={gradText as object}>Offices</span>
              </h2>
            </FadeUp>

            {/* Offices grid */}
            <div className="nnc-offices-grid" style={{ marginBottom: isMobile ? 40 : 60 }}> {/* REDUCED from 60-88 to 40-60 */}

              {/* International */}
              <FadeUp delay={0.08}>
                <div style={{
                  borderRadius: 22, padding: isMobile ? "24px 20px" : "32px 28px", // REDUCED padding
                  background: "rgba(0,201,167,.04)", border: "1px solid rgba(0,201,167,.18)",
                  transition: "transform .3s, box-shadow .3s",
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 56px rgba(0,0,0,.4)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  <p style={{
                    fontSize: isMobile ? 9 : 10, fontWeight: 700, letterSpacing: "0.14em",
                    textTransform: "uppercase", color: T.teal, marginBottom: 16, marginTop: 0, // REDUCED margin
                  }}>International Offices</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {INT_OFFICES.map((o, i) => (
                      <div key={i} className="nnc-office-row" style={{
                        display: "flex", alignItems: "center", gap: 12,
                        padding: "10px 12px", // REDUCED padding
                        background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.05)",
                        animation: `slideIn .5s ease ${.1 + i * .1}s both`,
                      }}>
                        <span style={{ fontSize: 22 }}>{o.flag}</span>
                        <div>
                          <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 700, color: "#fff", margin: 0 }}>{o.city}</p>
                          <p style={{ fontSize: isMobile ? 12 : 13, color: T.teal, margin: "2px 0 0", fontWeight: 600 }}>{o.phone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              {/* India */}
              <FadeUp delay={0.15}>
                <div style={{
                  borderRadius: 22, padding: isMobile ? "24px 20px" : "32px 28px", // REDUCED padding
                  background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.07)",
                  transition: "transform .3s, box-shadow .3s",
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 56px rgba(0,0,0,.4)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  <p style={{
                    fontSize: isMobile ? 9 : 10, fontWeight: 700, letterSpacing: "0.14em",
                    textTransform: "uppercase", color: "rgba(255,255,255,.35)", marginBottom: 16, marginTop: 0, // REDUCED margin
                  }}>India Offices — Nakshatra Namaha Creations</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {INDIA_OFFICES.map((o, i) => (
                      <div key={i} className="nnc-office-row" style={{
                        display: "flex", alignItems: "center", gap: 12,
                        padding: "10px 12px", // REDUCED padding
                        background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.05)",
                        animation: `slideIn .5s ease ${.1 + i * .1}s both`,
                      }}>
                        <span style={{ fontSize: 22 }}>{o.flag}</span>
                        <div>
                          <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 700, color: "#fff", margin: 0 }}>{o.city}</p>
                          {o.phone && <p style={{ fontSize: isMobile ? 11 : 12, color: "rgba(255,255,255,.38)", margin: "2px 0 0" }}>{o.phone}</p>}
                        </div>
                      </div>
                    ))}
                    <div style={{ paddingTop: 12, borderTop: "1px solid rgba(255,255,255,.06)" }}> {/* REDUCED padding */}
                      <p style={{ fontSize: isMobile ? 11 : 12, color: "rgba(255,255,255,.32)", margin: 0 }}>
                        ✉️ info@nakshatranamahacreations.com
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* ── FINAL CTA with routing ── */}
            <FadeUp delay={0.1}>
              <div style={{
                borderRadius: 28, padding: isMobile ? "36px 16px" : isTablet ? "48px 32px" : "56px 48px", // REDUCED padding
                textAlign: "center",
                background: "linear-gradient(135deg, rgba(0,201,167,.07) 0%, rgba(5,18,34,.9) 50%, rgba(2,12,26,.95) 100%)",
                border: "1px solid rgba(0,201,167,.2)",
                position: "relative", overflow: "hidden",
                transition: "box-shadow .4s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 48px 110px rgba(0,0,0,.55), 0 0 90px rgba(0,201,167,.1)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = ""}
              >
                {/* background orb - hidden on mobile */}
                {!isMobile && (
                  <>
                    <div style={{
                      position: "absolute", width: isTablet ? 350 : 450, height: isTablet ? 350 : 450, borderRadius: "50%", // REDUCED size
                      background: `radial-gradient(circle, rgba(0,201,167,.1) 0%, transparent 65%)`,
                      top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                      animation: "pulseOrb 6s ease-in-out infinite", pointerEvents: "none",
                    }} />
                    <div style={{
                      position: "absolute", width: isTablet ? 200 : 250, height: isTablet ? 200 : 250, borderRadius: "50%", // REDUCED size
                      border: "1px dashed rgba(0,201,167,.1)",
                      top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                      animation: "spinCW 28s linear infinite", pointerEvents: "none",
                    }} />
                  </>
                )}

                <div style={{ position: "relative", zIndex: 1 }}>
                  <SectionLabel>Get Started</SectionLabel>
                  <h2 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: isMobile ? "clamp(20px, 5vw, 24px)" : isTablet ? "clamp(22px, 3vw, 28px)" : "clamp(24px, 2.8vw, 42px)",
                    fontWeight: 600, marginBottom: 12, marginTop: 0, // REDUCED margin
                  }}>
                    Ready to Start a{" "}
                    <span style={gradText as object}>Conversation?</span>
                  </h2>
                  <p style={{
                    color: "rgba(255,255,255,.48)", fontSize: isMobile ? 14 : 15, lineHeight: 1.6, // REDUCED line-height
                    maxWidth: isMobile ? "100%" : 560, margin: "0 auto 24px", // REDUCED margin
                    padding: isMobile ? "0" : "0",
                  }}>
                    Whether you have a fully scoped project or just a problem you&apos;re trying to solve — we&apos;d love to talk. We&apos;ll respond within 24 hours with honest, practical advice.
                  </p>
                  <div className="nnc-hero-btns" style={{
                    display: "flex",
                    gap: isMobile ? 12 : 14,
                    justifyContent: "center",
                    flexDirection: isMobile ? "column" : "row",
                    width: isMobile ? "100%" : "auto",
                    maxWidth: isMobile ? "320px" : "none",
                    margin: isMobile ? "0 auto" : "0",
                  }}>
                    <Link href="/contact" style={{ textDecoration: "none", width: isMobile ? "100%" : "auto" }}>
                      <MagBtn primary>Book a Free Consultation</MagBtn>
                    </Link>
                    <Link href="/case-studies" style={{ textDecoration: "none", width: isMobile ? "100%" : "auto" }}>
                      <MagBtn>View Our Work →</MagBtn>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
    </>
  );
}