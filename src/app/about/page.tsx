"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ══════════════════════════════════════════════════════
   DESIGN TOKENS
══════════════════════════════════════════════════════ */
const T = {
  teal:       "#00C9A7",
  tealLight:  "#1fd1b5",
  tealDark:   "#00a07a",
  white:      "#FFFFFF",
  navy0:      "#010812",
  navy1:      "#030B18",
  navy2:      "#061425",
  navy3:      "#0a1f38",
  ease: [0.22, 1, 0.36, 1] as [number,number,number,number],
};

/* ══════════════════════════════════════════════════════
   ANIMATED COUNTER
══════════════════════════════════════════════════════ */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref        = useRef<HTMLSpanElement>(null);
  const inView     = useInView(ref, { once: true });
  const motionVal  = useMotionValue(0);
  const spring     = useSpring(motionVal, { stiffness: 55, damping: 18 });
  const [val, set] = useState(0);
  useEffect(() => { if (inView) motionVal.set(to); }, [inView, to, motionVal]);
  useEffect(() => spring.on("change", v => set(Math.round(v))), [spring]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ══════════════════════════════════════════════════════
   REVEAL WRAPPER
══════════════════════════════════════════════════════ */
function R({
  children, d = 0, from = "up", style, className,
}: {
  children: React.ReactNode;
  d?: number;
  from?: "up" | "left" | "right" | "scale";
  style?: React.CSSProperties;
  className?: string;
}) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const init   =
    from === "left"  ? { opacity: 0, x: -44, y: 0,   scale: 1    } :
    from === "right" ? { opacity: 0, x:  44, y: 0,   scale: 1    } :
    from === "scale" ? { opacity: 0, x: 0,   y: 18,  scale: 0.93 } :
                       { opacity: 0, x: 0,   y: 38,  scale: 1    };
  return (
    <motion.div ref={ref} className={className} style={style}
      initial={init}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : init}
      transition={{ duration: 0.72, delay: d, ease: T.ease }}
    >
      {children}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════
   SECTION LABEL
══════════════════════════════════════════════════════ */
function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, ease: T.ease }}
      style={{
        display: "flex", alignItems: "center", gap: 9,
        fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
        textTransform: "uppercase", marginBottom: 14,
        color: light ? T.tealLight : T.teal,
      }}
    >
      <span style={{ width: 22, height: 2, background: `linear-gradient(90deg,${T.teal},${T.tealLight})`, borderRadius: 2, display: "block" }} />
      {children}
    </motion.p>
  );
}

/* ══════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════ */
const STATS = [
  { n: 8,   sfx: "+", label: "Years Excellence",     icon: "🏆" },
  { n: 565, sfx: "+", label: "Projects Delivered",    icon: "🚀" },
  { n: 100, sfx: "+", label: "Team Members",           icon: "👥" },
  { n: 3,   sfx: "",  label: "International Markets", icon: "🌍" },
];

const STORY_POINTS = [
  { icon: "🎯", text: "Founded in Bangalore, Karnataka — India's Silicon Valley" },
  { icon: "📅", text: "8+ years building digital solutions for Indian enterprises" },
  { icon: "🌐", text: "Expanded to serve Canada, USA, and United Kingdom" },
  { icon: "🤝", text: "565+ successful projects across every digital discipline" },
];

const PARENT_CARDS = [
  { icon: "🚀", title: "565+ Projects",     desc: "Websites, mobile apps, 2D animation, B2B marketing — every discipline mastered.", col: `linear-gradient(135deg,${T.navy2},${T.navy3})` },
  { icon: "👥", title: "100+ Team Members", desc: "Full-spectrum creative and technical studio across four Indian cities.",            col: `linear-gradient(135deg,${T.tealDark}22,${T.navy2})` },
  { icon: "🌏", title: "Multi-City India",  desc: "Bangalore · Mysore · Mumbai · Hyderabad — plus Toronto, New York, London.",        col: `linear-gradient(135deg,${T.navy2},${T.navy3})` },
];

const TABLE_ROWS = [
  ["Years",    "8+ Years",                              "Launched for CA/US/UK"],
  ["Projects", "565+",                                  "Growing NA & UK Portfolio"],
  ["Team",     "100+ Members",                          "Dedicated Intl. Team"],
  ["Offices",  "BLR · MYS · MUM · HYD",               "Toronto · NYC · London"],
];

const SERVICES = [
  "Website Dev","Mobile Apps","Digital Marketing","Graphic Design",
  "2D Animation","Video Production","B2B Marketing","SEO & PPC",
];

const VALUES = [
  { icon: "📊", title: "Outcomes Over Outputs",  desc: "We measure success by business impact — not hours billed." },
  { icon: "🔒", title: "Compliance First",        desc: "GDPR, PIPEDA & CCPA built in from day one, always." },
  { icon: "🪟", title: "Radical Transparency",    desc: "Fixed prices. Weekly demos. Plain language. Zero surprises." },
  { icon: "👥", title: "People First",             desc: "Training & adoption matter as much as the technology." },
  { icon: "🔭", title: "Long-Term Thinking",       desc: "Systems built to scale 5+ years — not just for launch." },
  { icon: "⭐", title: "Client First, Always",     desc: "Every decision starts with the client. Full stop." },
];

const INTL_OFFICES = [
  { city: "Toronto, Canada", phone: "+1 647-XXX-XXXX",  flag: "🇨🇦" },
  { city: "New York, USA",   phone: "+1 631-XXX-XXXX",  flag: "🇺🇸" },
  { city: "London, UK",      phone: "+44 20-XXXX-XXXX", flag: "🇬🇧" },
];
const INDIA_OFFICES = [
  { city: "Bangalore HQ", phone: "+91 9900566466",                   flag: "🏢" },
  { city: "Mysore",        phone: "info@nakshatranamahacreations.com",flag: "📍" },
  { city: "Mumbai",        phone: "",                                  flag: "📍" },
  { city: "Hyderabad",     phone: "",                                  flag: "📍" },
];

/* ══════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: T.navy1, color: T.white, fontFamily: "var(--font-body)", overflowX: "hidden" }}>

        {/* ── HERO: dark navy + teal glows ───────────── */}
        <section style={{
          position: "relative", minHeight: "100vh",
          display: "flex", alignItems: "center",
          paddingTop: 90, overflow: "hidden",
          background: `linear-gradient(150deg, ${T.navy0} 0%, ${T.navy1} 50%, ${T.navy2} 100%)`,
        }}>
          {/* grid */}
          <div className="bg-grid" style={{ position:"absolute", inset:0, zIndex:0, pointerEvents:"none" }} />

          {/* animated orbs */}
          {[
            { x:"8%",  y:"10%", w:640, c:"rgba(0,201,167,0.10)", d:7  },
            { x:"70%", y:"60%", w:480, c:"rgba(31,209,181,0.06)", d:9  },
            { x:"40%", y:"80%", w:320, c:"rgba(0,201,167,0.05)", d:11 },
          ].map((o,i) => (
            <motion.div key={i}
              animate={{ scale:[1,1.14,1], opacity:[0.6,1,0.6] }}
              transition={{ duration:o.d, repeat:Infinity, ease:"easeInOut", delay:i*2 }}
              style={{ position:"absolute", left:o.x, top:o.y, width:o.w, height:o.w,
                borderRadius:"50%", background:`radial-gradient(circle,${o.c} 0%,transparent 65%)`,
                zIndex:0, pointerEvents:"none" }}
            />
          ))}

          {/* floating dots */}
          {[...Array(16)].map((_,i) => (
            <motion.div key={i}
              animate={{ y:[0,-20,0], opacity:[0.12,0.5,0.12] }}
              transition={{ duration:3.5+(i%5)*0.8, repeat:Infinity, delay:i*0.35, ease:"easeInOut" }}
              style={{ position:"absolute", zIndex:1, pointerEvents:"none",
                left:`${(i*6.2+3)%92}%`, top:`${(i*11+8)%85}%`,
                width: i%4===0?4:2, height: i%4===0?4:2,
                borderRadius:"50%", background: T.teal }}
            />
          ))}

          <div style={{ position:"relative", zIndex:2, width:"100%", maxWidth:1240, margin:"0 auto", padding:"80px 48px" }} className="hero-inner">
            <div style={{ maxWidth: 820 }}>

              {/* eyebrow */}
              <motion.div initial={{ opacity:0, y:-18 }} animate={{ opacity:1, y:0 }}
                transition={{ duration:0.6, ease:T.ease }}
                style={{ display:"inline-flex", alignItems:"center", gap:10,
                  background:"rgba(0,201,167,0.08)", border:`1px solid rgba(0,201,167,0.28)`,
                  borderRadius:100, padding:"7px 20px", marginBottom:32 }}>
                <motion.span animate={{ boxShadow:["0 0 5px #00C9A7","0 0 16px #00C9A7","0 0 5px #00C9A7"] }}
                  transition={{ duration:2.2, repeat:Infinity }}
                  style={{ width:7, height:7, borderRadius:"50%", background:T.teal, display:"block" }} />
                <span style={{ color:T.teal, fontSize:11.5, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase" }}>
                  About NNC Digital Solutions
                </span>
              </motion.div>

              {/* H1 stagger */}
              <motion.h1 className="section-heading"
                style={{ maxWidth:780, marginBottom:24, lineHeight:1.06 }}
                initial="hidden" animate="visible"
                variants={{ hidden:{}, visible:{ transition:{ staggerChildren:0.055 }} }}>
                {["Built","on"].map((w,i)=>(
                  <motion.span key={i} variants={{ hidden:{opacity:0,y:22}, visible:{opacity:1,y:0,transition:{duration:0.6,ease:T.ease}} }}>
                    {w}{" "}
                  </motion.span>
                ))}
                <motion.span className="grad-text"
                  variants={{ hidden:{opacity:0,y:22}, visible:{opacity:1,y:0,transition:{duration:0.7,ease:T.ease}} }}>
                  Indian Tech Excellence.
                </motion.span>
                {" "}<br />
                {["Built","for","Canadian,","US","&","UK","Business."].map((w,i)=>(
                  <motion.span key={i} variants={{ hidden:{opacity:0,y:22}, visible:{opacity:1,y:0,transition:{duration:0.6,ease:T.ease}} }}>
                    {w}{" "}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }}
                transition={{ duration:0.7, delay:0.6 }}
                style={{ color:"rgba(255,255,255,0.62)", fontSize:17, lineHeight:1.82, maxWidth:580, marginBottom:44 }}>
                The international technology arm of{" "}
                <span style={{ color:T.teal, fontWeight:600 }}>Nakshatra Namaha Creations Pvt. Ltd.</span>
                {" "}— bringing a decade of Bangalore's finest digital capability to businesses in Canada, the USA and the UK.
              </motion.p>

              {/* CTAs */}
              <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
                transition={{ duration:0.6, delay:0.75 }}
                style={{ display:"flex", flexWrap:"wrap", gap:14, marginBottom:72 }}>
                <Link href="/consultation" className="btn-primary">📅 Book a Free Strategy Call</Link>
                <Link href="#story" className="btn-outline">Our Story ↓</Link>
              </motion.div>

              {/* stat boxes */}
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.9 }}
                style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))", gap:16, maxWidth:620 }}>
                {STATS.map((s,i)=>(
                  <motion.div key={s.label}
                    initial={{ opacity:0, y:20, scale:0.88 }}
                    animate={{ opacity:1, y:0, scale:1 }}
                    transition={{ delay:0.95+i*0.09, ease:T.ease }}
                    whileHover={{ y:-5, borderColor:T.teal, boxShadow:`0 12px 36px rgba(0,201,167,0.18)` }}
                    style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)",
                      borderRadius:16, padding:"20px 18px", textAlign:"center", cursor:"default",
                      backdropFilter:"blur(12px)", transition:"none" }}>
                    <div style={{ fontSize:22, marginBottom:6 }}>{s.icon}</div>
                    <p style={{ fontFamily:"var(--font-display)", fontWeight:800,
                      fontSize:"clamp(1.5rem,2.5vw,2rem)",
                      background:`linear-gradient(135deg,${T.white} 30%,${T.teal})`,
                      WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", lineHeight:1 }}>
                      <Counter to={s.n} suffix={s.sfx} />
                    </p>
                    <p style={{ fontSize:11, color:"rgba(255,255,255,0.42)", fontWeight:500, marginTop:6, letterSpacing:"0.02em" }}>
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── STORY: TEAL SECTION — high contrast white on teal ── */}
        <section id="story" style={{
          padding:"100px 48px", position:"relative", overflow:"hidden",
          background:`linear-gradient(135deg, ${T.tealDark} 0%, #007a60 40%, #00956e 100%)`,
        }}>
          {/* white noise texture feel */}
          <div style={{ position:"absolute", inset:0, opacity:0.04,
            backgroundImage:"radial-gradient(rgba(255,255,255,0.8) 1px,transparent 1px)",
            backgroundSize:"32px 32px", pointerEvents:"none" }} />
          <div style={{ position:"absolute", top:"-20%", right:"-8%", width:560, height:560,
            borderRadius:"50%", background:"radial-gradient(circle,rgba(255,255,255,0.06) 0%,transparent 65%)",
            pointerEvents:"none" }} />

          <div style={{ maxWidth:1240, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center" }} className="two-col">

            {/* left text — white on teal */}
            <R from="left">
              <Label light>Our Origins</Label>
              <h2 className="section-heading" style={{ color:T.white, marginBottom:24, fontSize:"clamp(26px,3vw,40px)" }}>
                From Bangalore to Canada —{" "}
                <span style={{ color:"rgba(255,255,255,0.85)", fontStyle:"italic" }}>The NNC Story</span>
              </h2>
              {STORY_POINTS.map((p,i)=>(
                <R key={i} d={0.1+i*0.07} from="left">
                  <div style={{ display:"flex", alignItems:"flex-start", gap:14, marginBottom:18 }}>
                    <div style={{ width:38, height:38, borderRadius:10, background:"rgba(255,255,255,0.15)",
                      border:"1px solid rgba(255,255,255,0.25)", display:"flex", alignItems:"center",
                      justifyContent:"center", fontSize:17, flexShrink:0 }}>
                      {p.icon}
                    </div>
                    <p style={{ color:"rgba(255,255,255,0.88)", lineHeight:1.72, fontSize:15.5, paddingTop:8 }}>{p.text}</p>
                  </div>
                </R>
              ))}
              {/* pull quote */}
              <motion.div whileInView={{ opacity:1, x:0 }} initial={{ opacity:0, x:16 }} viewport={{ once:true }}
                transition={{ delay:0.5, duration:0.6, ease:T.ease }}
                style={{ marginTop:28, borderLeft:"3px solid rgba(255,255,255,0.5)", paddingLeft:18,
                  background:"rgba(255,255,255,0.1)", borderRadius:"0 10px 10px 0", padding:"16px 20px",
                  color:T.white, fontSize:14.5, fontStyle:"italic", lineHeight:1.75 }}>
                "NNC Digital is the international expression of a decade of proven capability."
              </motion.div>
            </R>

            {/* right — white card on teal bg */}
            <R from="right" d={0.18}>
              <div style={{ position:"relative" }}>
                <motion.div
                  whileHover={{ y:-6, boxShadow:"0 40px 80px rgba(0,0,0,0.3)" }}
                  transition={{ duration:0.3 }}
                  style={{ background:"rgba(255,255,255,0.97)", borderRadius:22,
                    padding:"38px 36px", boxShadow:"0 24px 60px rgba(0,0,0,0.2)", position:"relative", overflow:"hidden" }}>
                  {/* teal accent top */}
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:4,
                    background:`linear-gradient(90deg,${T.teal},${T.tealLight},${T.tealDark})` }} />

                  <Image src="/NNCLOGO.jpg" alt="NNC Digital" width={148} height={44}
                    style={{ marginBottom:22 }} />

                  <p style={{ color:T.navy2, lineHeight:1.82, fontSize:15, marginBottom:26 }}>
                    We were born from the belief that world-class Indian tech excellence deserves to power
                    growing businesses in Canada, the USA, and the United Kingdom — delivered with the
                    compliance, transparency and partnership Western businesses expect.
                  </p>

                  {/* office chips */}
                  <div style={{ display:"flex", gap:8, flexWrap:"wrap", paddingTop:20,
                    borderTop:`1px solid rgba(0,201,167,0.2)` }}>
                    {[["🇨🇦","Toronto"],["🇺🇸","New York"],["🇬🇧","London"]].map(([flag,city])=>(
                      <div key={city} style={{ display:"flex", alignItems:"center", gap:6,
                        background:`rgba(0,201,167,0.08)`, border:`1px solid rgba(0,201,167,0.25)`,
                        borderRadius:100, padding:"6px 14px" }}>
                        <span style={{ fontSize:14 }}>{flag}</span>
                        <span style={{ fontSize:12.5, color:T.tealDark, fontWeight:700 }}>{city}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* floating badge */}
                <motion.div
                  initial={{ opacity:0, scale:0.6, rotate:-12 }}
                  whileInView={{ opacity:1, scale:1, rotate:0 }} viewport={{ once:true }}
                  transition={{ delay:0.5, type:"spring", stiffness:200, damping:16 }}
                  whileHover={{ scale:1.08, rotate:3 }}
                  style={{ position:"absolute", bottom:-22, right:-18,
                    background:T.navy1, borderRadius:16,
                    padding:"18px 22px", textAlign:"center",
                    border:`2px solid ${T.teal}`,
                    boxShadow:`0 16px 44px rgba(0,0,0,0.35)` }}>
                  <strong style={{ fontFamily:"var(--font-display)", fontSize:"1.8rem",
                    fontWeight:800, display:"block",
                    background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                    565+
                  </strong>
                  <span style={{ fontSize:11, color:"rgba(255,255,255,0.65)", fontWeight:700, letterSpacing:"0.06em" }}>
                    Projects
                  </span>
                </motion.div>
              </div>
            </R>
          </div>
        </section>

        {/* ── PARENT: white section — light + airy ─────── */}
        <section style={{ padding:"100px 48px", background:T.white, position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:"-5%", right:"-3%", width:400, height:400, borderRadius:"50%",
            background:`radial-gradient(circle,rgba(0,201,167,0.08) 0%,transparent 65%)`, pointerEvents:"none" }} />

          <div style={{ maxWidth:1240, margin:"0 auto" }}>
            <R style={{ marginBottom:52 }}>
              <Label>Our Foundation</Label>
              <h2 className="section-heading" style={{ color:T.navy1, fontSize:"clamp(26px,3vw,40px)", maxWidth:620 }}>
                Our Parent Company —{" "}
                <span style={{ background:`linear-gradient(120deg,${T.teal},${T.tealDark})`,
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  Nakshatra Namaha Creations
                </span>
              </h2>
            </R>

            {/* hero panel */}
            <R d={0.1} style={{ marginBottom:40 }}>
              <div style={{ background:T.navy1, borderRadius:22, padding:"48px 52px",
                position:"relative", overflow:"hidden",
                boxShadow:"0 24px 64px rgba(1,8,18,0.18)" }}>
                <div style={{ position:"absolute", top:0, left:0, right:0, height:3,
                  background:`linear-gradient(90deg,${T.teal},${T.tealLight},${T.tealDark})` }} />
                <div style={{ position:"absolute", bottom:0, right:0, width:300, height:300,
                  background:`radial-gradient(circle,rgba(0,201,167,0.07) 0%,transparent 65%)`, pointerEvents:"none" }} />

                <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", flexWrap:"wrap", gap:24, marginBottom:36 }}>
                  <div>
                    <h3 style={{ fontFamily:"var(--font-display)", fontSize:21, fontWeight:700, color:T.white, marginBottom:10 }}>
                      🏢 8+ Years of Digital Excellence — Bangalore, India
                    </h3>
                    <p style={{ color:"rgba(255,255,255,0.58)", lineHeight:1.8, maxWidth:580, fontSize:15 }}>
                      Headquartered in Bengaluru with offices in Mysore, Mumbai, and Hyderabad.
                      A full-spectrum digital studio combining creative excellence with engineering rigour.
                    </p>
                  </div>
                  <motion.a href="https://www.nakshatranamahacreations.com" target="_blank" rel="noreferrer"
                    whileHover={{ background:"rgba(0,201,167,0.18)", scale:1.03 }}
                    transition={{ duration:0.2 }}
                    style={{ display:"inline-flex", alignItems:"center", gap:8,
                      background:"rgba(0,201,167,0.1)", border:`1px solid rgba(0,201,167,0.3)`,
                      borderRadius:10, padding:"11px 20px", color:T.teal,
                      fontWeight:700, fontSize:13.5, textDecoration:"none", whiteSpace:"nowrap" }}>
                    Visit Website →
                  </motion.a>
                </div>

                {/* 3 mini-cards inside dark panel */}
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:16 }}>
                  {PARENT_CARDS.map((c,i)=>(
                    <R key={c.title} d={0.1+i*0.09} from="scale">
                      <motion.div whileHover={{ y:-5, boxShadow:`0 16px 40px rgba(0,0,0,0.35)` }}
                        transition={{ duration:0.25 }}
                        style={{ background:c.col, border:`1px solid rgba(0,201,167,0.18)`,
                          borderRadius:14, padding:"24px 20px", cursor:"default" }}>
                        <div style={{ width:42, height:42, borderRadius:10,
                          background:`linear-gradient(135deg,rgba(0,201,167,0.2),rgba(0,201,167,0.05))`,
                          border:`1px solid rgba(0,201,167,0.2)`,
                          display:"flex", alignItems:"center", justifyContent:"center",
                          fontSize:20, marginBottom:14 }}>{c.icon}</div>
                        <h4 style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:15,
                          marginBottom:8, color:T.white }}>{c.title}</h4>
                        <p style={{ color:"rgba(255,255,255,0.52)", fontSize:13, lineHeight:1.65 }}>{c.desc}</p>
                      </motion.div>
                    </R>
                  ))}
                </div>
              </div>
            </R>

            {/* service tags — on white bg */}
            <R d={0.15} style={{ marginBottom:48 }}>
              <p style={{ fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase",
                color:T.navy3, marginBottom:16, opacity:0.6 }}>Services powering NNC Digital</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
                {SERVICES.map((s,i)=>(
                  <motion.span key={s}
                    initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                    transition={{ delay:0.04*i, ease:T.ease }}
                    whileHover={{ background:T.teal, color:T.white, scale:1.04 }}
                    style={{ background:`rgba(0,201,167,0.08)`, border:`1.5px solid rgba(0,201,167,0.3)`,
                      color:T.tealDark, borderRadius:100, padding:"7px 18px", fontSize:13,
                      fontWeight:600, cursor:"default", transition:"none" }}>
                    {s}
                  </motion.span>
                ))}
              </div>
            </R>

            {/* comparison table — on white */}
            <R d={0.2}>
              <div style={{ overflowX:"auto", borderRadius:18,
                border:`1.5px solid rgba(0,201,167,0.2)`,
                boxShadow:"0 8px 32px rgba(0,201,167,0.06)" }}>
                <table style={{ width:"100%", borderCollapse:"collapse", minWidth:480 }}>
                  <thead>
                    <tr style={{ background:`linear-gradient(135deg,rgba(0,201,167,0.1),rgba(0,160,122,0.07))` }}>
                      {["Metric","Nakshatra Namaha Creations","NNC Digital (International)"].map(h=>(
                        <th key={h} style={{ padding:"16px 22px", textAlign:"left",
                          fontFamily:"var(--font-display)", fontWeight:700, fontSize:13,
                          color:T.tealDark, borderBottom:`1px solid rgba(0,201,167,0.15)` }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ROWS.map((row,i)=>(
                      <motion.tr key={i} whileHover={{ background:"rgba(0,201,167,0.04)" }}
                        style={{ transition:"background 0.2s" }}>
                        {row.map((cell,j)=>(
                          <td key={j} style={{ padding:"14px 22px", fontSize:13.5,
                            color: j===0 ? T.navy1 : j===2 ? T.tealDark : T.navy3,
                            fontWeight: j===0 ? 700 : j===2 ? 600 : 400,
                            borderBottom: i<TABLE_ROWS.length-1 ? "1px solid rgba(0,0,0,0.06)" : "none" }}>
                            {cell}
                          </td>
                        ))}
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </R>
          </div>
        </section>

        {/* ── WHY: deep navy + strong teal accents ─────── */}
        <section style={{ padding:"100px 48px", background:T.navy0, position:"relative", overflow:"hidden" }}>
          {/* sweeping bg line */}
          <div style={{ position:"absolute", top:0, left:0, right:0, height:1,
            background:`linear-gradient(90deg,transparent,${T.teal},transparent)`, opacity:0.3 }} />
          <div style={{ position:"absolute", top:"40%", left:"-5%", width:450, height:450,
            borderRadius:"50%", background:`radial-gradient(circle,rgba(0,201,167,0.06) 0%,transparent 65%)`,
            pointerEvents:"none" }} />

          <div style={{ maxWidth:1240, margin:"0 auto" }}>
            <R style={{ marginBottom:56 }}>
              <Label>Our Purpose</Label>
              <h2 className="section-heading" style={{ fontSize:"clamp(26px,3vw,40px)", maxWidth:620 }}>
                Why We Launched for the{" "}
                <span className="grad-text">North American &amp; UK Market</span>
              </h2>
            </R>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24 }} className="two-col">

              {/* gap card — subtle red tint */}
              <R from="left" d={0.1}>
                <motion.div whileHover={{ y:-6, boxShadow:`0 28px 64px rgba(0,0,0,0.5)` }}
                  transition={{ duration:0.28 }}
                  style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)",
                    borderRadius:20, padding:"38px 36px", height:"100%", position:"relative", overflow:"hidden" }}>
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:2,
                    background:"linear-gradient(90deg,rgba(255,90,70,0.6),rgba(255,150,80,0.3),transparent)" }} />
                  <div style={{ width:44, height:44, borderRadius:12,
                    background:"rgba(255,90,70,0.1)", border:"1px solid rgba(255,90,70,0.2)",
                    display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, marginBottom:18 }}>⚠️</div>
                  <h3 style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:19, color:T.white, marginBottom:14 }}>
                    The Gap We Saw
                  </h3>
                  <p style={{ color:"rgba(255,255,255,0.58)", lineHeight:1.88, fontSize:15 }}>
                    Businesses in Canada, the USA, and the UK face a common challenge: local agencies
                    charge premium prices for work deliverable at a fraction of the cost — without any
                    quality reduction — by the right offshore partner. Most offshore agencies fail because
                    they don't understand the regulatory environment or commercial culture of Western businesses.
                  </p>
                </motion.div>
              </R>

              {/* solution card — teal tint */}
              <R from="right" d={0.18}>
                <motion.div whileHover={{ y:-6, boxShadow:`0 28px 64px rgba(0,0,0,0.5)` }}
                  transition={{ duration:0.28 }}
                  style={{ background:`rgba(0,201,167,0.05)`, border:`1px solid rgba(0,201,167,0.2)`,
                    borderRadius:20, padding:"38px 36px", height:"100%", position:"relative", overflow:"hidden" }}>
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:2,
                    background:`linear-gradient(90deg,${T.teal},${T.tealLight},transparent)` }} />
                  <div style={{ width:44, height:44, borderRadius:12,
                    background:"rgba(0,201,167,0.12)", border:`1px solid rgba(0,201,167,0.28)`,
                    display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, marginBottom:18 }}>✅</div>
                  <h3 style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:19, color:T.white, marginBottom:14 }}>
                    The Solution We Built
                  </h3>
                  <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:13 }}>
                    {[
                      "Dedicated PMs in North American & UK time zones",
                      "GDPR, PIPEDA & CCPA-compliant from day one",
                      "Full capability of a 100+ person studio",
                      "Transparent, fixed-price proposals",
                      "Long-term partnership, not one-and-done delivery",
                    ].map((item,i)=>(
                      <motion.li key={item}
                        initial={{ opacity:0, x:-14 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
                        transition={{ delay:0.3+i*0.08, ease:T.ease }}
                        style={{ display:"flex", alignItems:"flex-start", gap:12, color:"rgba(255,255,255,0.75)", fontSize:14.5, lineHeight:1.65 }}>
                        <motion.span
                          animate={{ boxShadow:["0 0 3px #00C9A7","0 0 9px #00C9A7","0 0 3px #00C9A7"] }}
                          transition={{ duration:2.5, repeat:Infinity, delay:i*0.4 }}
                          style={{ width:7, height:7, borderRadius:"50%", background:T.teal, flexShrink:0, marginTop:8 }} />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </R>
            </div>
          </div>
        </section>

        {/* ── VALUES: mixed white cards on subtle navy ──── */}
        <section style={{ padding:"100px 48px", background:T.navy2, position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:"50%", left:"50%",
            transform:"translate(-50%,-50%)", width:900, height:900, borderRadius:"50%",
            background:`radial-gradient(circle,rgba(0,201,167,0.04) 0%,transparent 65%)`, pointerEvents:"none" }} />

          <div style={{ maxWidth:1240, margin:"0 auto", position:"relative", zIndex:1 }}>
            <R style={{ marginBottom:52 }}>
              <Label>What We Stand For</Label>
              <h2 className="section-heading" style={{ fontSize:"clamp(26px,3vw,40px)" }}>
                Our <span className="grad-text">Core Values</span>
              </h2>
            </R>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:20 }}>
              {VALUES.map((v,i)=>(
                <R key={v.title} d={0.05*i} from="scale">
                  <motion.div
                    whileHover={{ y:-8, boxShadow:`0 24px 56px rgba(0,0,0,0.4), 0 0 0 1px ${T.teal}44` }}
                    transition={{ duration:0.28 }}
                    style={{ background: i%2===0
                      ? `linear-gradient(135deg,rgba(255,255,255,0.97),rgba(240,255,252,0.97))`
                      : `linear-gradient(135deg,${T.navy1},${T.navy3})`,
                      borderRadius:18, padding:"32px 28px", height:"100%", cursor:"default",
                      border: i%2===0 ? `1.5px solid rgba(0,201,167,0.18)` : `1px solid rgba(0,201,167,0.15)`,
                      boxShadow: i%2===0 ? "0 8px 32px rgba(0,201,167,0.08)" : "none" }}>

                    <div style={{ width:48, height:48, borderRadius:13,
                      background: i%2===0
                        ? `linear-gradient(135deg,rgba(0,201,167,0.15),rgba(0,201,167,0.06))`
                        : `linear-gradient(135deg,rgba(0,201,167,0.2),rgba(0,201,167,0.05))`,
                      border: `1px solid rgba(0,201,167,${i%2===0?'0.25':'0.2'})`,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      fontSize:22, marginBottom:16 }}>
                      {v.icon}
                    </div>
                    <p style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:15.5,
                      color: i%2===0 ? T.navy1 : T.white, marginBottom:10 }}>{v.title}</p>
                    <p style={{ color: i%2===0 ? "rgba(1,8,18,0.58)" : "rgba(255,255,255,0.52)",
                      fontSize:13.5, lineHeight:1.68 }}>{v.desc}</p>
                  </motion.div>
                </R>
              ))}
            </div>
          </div>
        </section>

        {/* ── OFFICES: teal gradient section ───────────── */}
        <section style={{ padding:"100px 48px", position:"relative", overflow:"hidden",
          background:`linear-gradient(135deg,${T.navy1} 0%,${T.navy3} 50%,#0d2540 100%)` }}>
          <div style={{ position:"absolute", bottom:0, left:0, right:0, height:200,
            background:`linear-gradient(180deg,transparent,rgba(0,201,167,0.04))`, pointerEvents:"none" }} />

          <div style={{ maxWidth:1240, margin:"0 auto" }}>
            <R style={{ marginBottom:52 }}>
              <Label>Global Presence</Label>
              <h2 className="section-heading" style={{ fontSize:"clamp(26px,3vw,40px)" }}>
                Our <span className="grad-text">Global Offices</span>
              </h2>
            </R>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:28 }} className="two-col">
              {[
                { title:"🌎 International Offices", offices:INTL_OFFICES,  isWhite:true  },
                { title:"🇮🇳 India — Nakshatra Namaha Creations", offices:INDIA_OFFICES, isWhite:false },
              ].map((group,gi)=>(
                <R key={group.title} d={gi*0.14}>
                  <motion.div
                    whileHover={{ y:-5, boxShadow:`0 28px 64px rgba(0,0,0,0.4)` }}
                    transition={{ duration:0.28 }}
                    style={{
                      background: group.isWhite ? T.white : `rgba(6,20,37,0.85)`,
                      border: group.isWhite ? `1.5px solid rgba(0,201,167,0.25)` : `1px solid rgba(0,201,167,0.2)`,
                      borderRadius:22, padding:"38px 34px",
                      backdropFilter:"blur(16px)", position:"relative", overflow:"hidden",
                      boxShadow: group.isWhite ? "0 16px 48px rgba(0,201,167,0.1)" : "none",
                    }}>
                    <div style={{ position:"absolute", top:0, left:0, right:0, height:3,
                      background:`linear-gradient(90deg,${T.teal},${T.tealLight},${T.tealDark})` }} />

                    <p style={{ fontFamily:"var(--font-display)", fontSize:12, fontWeight:700,
                      letterSpacing:"0.1em", textTransform:"uppercase",
                      color: group.isWhite ? T.tealDark : T.teal,
                      marginBottom:24, paddingBottom:14,
                      borderBottom:`1px solid ${group.isWhite ? "rgba(0,160,122,0.15)" : "rgba(0,201,167,0.12)"}` }}>
                      {group.title}
                    </p>

                    {group.offices.map((o,oi)=>(
                      <motion.div key={o.city}
                        initial={{ opacity:0, x:-14 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
                        transition={{ delay:0.1+oi*0.07, ease:T.ease }}
                        style={{ display:"flex", alignItems:"flex-start", gap:14, marginBottom:18 }}>
                        <div style={{ width:34, height:34, borderRadius:8,
                          background: group.isWhite ? "rgba(0,201,167,0.08)" : "rgba(0,201,167,0.1)",
                          border:`1px solid ${group.isWhite ? "rgba(0,201,167,0.2)" : "rgba(0,201,167,0.18)"}`,
                          display:"flex", alignItems:"center", justifyContent:"center",
                          fontSize:15, flexShrink:0 }}>{o.flag}</div>
                        <div>
                          <p style={{ fontWeight:700, fontSize:14.5,
                            color: group.isWhite ? T.navy1 : T.white }}>{o.city}</p>
                          {o.phone && <p style={{ fontSize:12.5, marginTop:3,
                            color: group.isWhite ? "rgba(1,8,18,0.5)" : "rgba(255,255,255,0.38)" }}>{o.phone}</p>}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </R>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA: bold teal → navy gradient ───────────── */}
        <section style={{ padding:"120px 48px", textAlign:"center",
          position:"relative", overflow:"hidden",
          background:`linear-gradient(160deg,${T.tealDark} 0%,#006b52 30%,${T.navy1} 65%,${T.navy0} 100%)` }}>

          {/* animated rings */}
          {[280,440,600].map((sz,i)=>(
            <motion.div key={sz}
              animate={{ scale:[1,1.07+i*0.03,1], opacity:[0.07,0.14,0.07] }}
              transition={{ duration:5+i*1.6, repeat:Infinity, ease:"easeInOut", delay:i*0.9 }}
              style={{ position:"absolute", top:"50%", left:"50%",
                transform:"translate(-50%,-50%)", width:sz, height:sz,
                borderRadius:"50%", border:"1px solid rgba(255,255,255,0.2)", pointerEvents:"none" }}
            />
          ))}

          <R from="scale" style={{ position:"relative", zIndex:1 }}>
            <div style={{ maxWidth:640, margin:"0 auto" }}>
              {/* white card on teal-to-navy bg */}
              <motion.div
                whileHover={{ boxShadow:"0 48px 100px rgba(0,0,0,0.4)" }}
                transition={{ duration:0.3 }}
                style={{ background:"rgba(255,255,255,0.97)", borderRadius:26,
                  padding:"64px 52px", boxShadow:"0 24px 80px rgba(0,0,0,0.3)",
                  position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", top:0, left:0, right:0, height:4,
                  background:`linear-gradient(90deg,${T.teal},${T.tealLight},${T.tealDark})` }} />

                {/* shimmer sweep */}
                <motion.div
                  animate={{ left:["-60%","120%"] }}
                  transition={{ duration:2.8, repeat:Infinity, ease:"linear", repeatDelay:3.5 }}
                  style={{ position:"absolute", top:0, width:"40%", height:"100%",
                    background:"linear-gradient(90deg,transparent,rgba(0,201,167,0.04),transparent)",
                    pointerEvents:"none" }}
                />

                <p style={{ fontSize:11, fontWeight:700, letterSpacing:"0.14em",
                  textTransform:"uppercase", color:T.teal, marginBottom:14,
                  display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
                  <span style={{ width:22, height:2, background:`linear-gradient(90deg,${T.teal},${T.tealLight})`, borderRadius:2, display:"block" }} />
                  Ready to Talk?
                  <span style={{ width:22, height:2, background:`linear-gradient(90deg,${T.tealLight},${T.teal})`, borderRadius:2, display:"block" }} />
                </p>

                <h2 className="section-heading" style={{ color:T.navy1,
                  fontSize:"clamp(24px,3vw,38px)", marginBottom:18, lineHeight:1.1 }}>
                  Ready to Start a{" "}
                  <span style={{ background:`linear-gradient(120deg,${T.teal},${T.tealDark})`,
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                    Conversation?
                  </span>
                </h2>

                <p style={{ color:"rgba(1,8,18,0.55)", fontSize:16, lineHeight:1.82,
                  maxWidth:440, margin:"0 auto 40px" }}>
                  Whether you have a fully scoped project or just a problem to solve — we'll respond
                  within 24 hours with honest, practical advice.
                </p>

                <div style={{ display:"flex", justifyContent:"center", gap:14, flexWrap:"wrap", marginBottom:32 }}>
                  <Link href="/consultation" className="btn-primary">📅 Book a Free Consultation</Link>
                  <motion.div whileHover={{ background:T.navy2 }} transition={{ duration:0.2 }}>
                    <Link href="/case-studies" style={{ display:"inline-flex", alignItems:"center", gap:8,
                      padding:"13px 28px", borderRadius:10, border:`1.5px solid ${T.navy2}`,
                      color:T.navy1, fontWeight:700, fontSize:14, textDecoration:"none",
                      transition:"none" }}>
                      💼 View Our Work
                    </Link>
                  </motion.div>
                </div>

                <div style={{ display:"flex", justifyContent:"center", gap:20, flexWrap:"wrap", marginBottom:20 }}>
                  {["🔒 GDPR Compliant","⚡ 24hr Response","🌍 3 Markets"].map(t=>(
                    <span key={t} style={{ fontSize:12, color:`rgba(1,8,18,0.4)`, fontWeight:500 }}>{t}</span>
                  ))}
                </div>

                <p style={{ fontSize:12, color:"rgba(1,8,18,0.3)", letterSpacing:"0.04em" }}>
                  hello@nncdigital.com · nncdigital.com · Canada · USA · UK
                </p>
              </motion.div>
            </div>
          </R>
        </section>

      </main>
      <Footer />

      <style>{`
        /* ── Responsive breakpoints ── */
        @media(max-width:1024px){
          .two-col  { grid-template-columns:1fr !important; }
          .hero-inner{ padding:60px 32px !important; }
        }
        @media(max-width:768px){
          section { padding-left:24px !important; padding-right:24px !important;
                    padding-top:72px !important; padding-bottom:72px !important; }
          .section-heading { font-size:clamp(24px,6vw,34px) !important; }
        }
        @media(max-width:480px){
          section { padding-left:16px !important; padding-right:16px !important; }
          .hero-inner { padding:48px 16px !important; }
        }
      `}</style>
    </>
  );
}