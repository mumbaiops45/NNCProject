"use client";
import { useState } from "react";
import { T } from "./tokens";
import Reveal from "./Reveal";

const INTL = [
  { flag:"🇨🇦", city:"Toronto, Canada", phone:"+1 647-XXX-XXXX", time:"EST" },
  { flag:"🇺🇸", city:"New York, USA",   phone:"+1 631-XXX-XXXX", time:"EST" },
  { flag:"🇬🇧", city:"London, UK",      phone:"+44 20-XXXX-XXXX", time:"GMT" },
];
const INDIA = [
  { city:"Bangalore HQ", phone:"+91 9900566466" },
  { city:"Mysore",       phone:"" },
  { city:"Mumbai",       phone:"" },
  { city:"Hyderabad",    phone:"" },
];

export default function GlobalPresence() {
  const [tab, setTab] = useState<"intl"|"india">("intl");

  return (
    <section style={{ padding:"100px 48px", background:T.navy1, fontFamily:"'Outfit',sans-serif" }}>
      <style>{`
        .loc-card { transition: transform .22s ease, border-color .22s ease; }
        .loc-card:hover { transform:translateY(-5px); border-color:#00C9A7 !important; }
        .gp-tab { border:none; font-family:'Outfit',sans-serif; cursor:pointer; font-weight:700; font-size:14px; transition:all .25s ease; }
      `}</style>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <Reveal style={{ marginBottom:48, textAlign:"center" }}>
          <p style={{ color:T.teal, fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:14 }}>— Where We Operate —</p>
          <h2 style={{ fontSize:"clamp(26px,3vw,42px)", fontWeight:900, color:"#fff" }}>
            Our{" "}
            <span style={{ background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Global Presence</span>
          </h2>
        </Reveal>
        <div style={{ display:"flex", justifyContent:"center", marginBottom:40 }}>
          {(["intl","india"] as const).map(id => (
            <button key={id} className="gp-tab" onClick={() => setTab(id)} style={{
              padding:"12px 32px",
              background: tab === id ? `linear-gradient(135deg,${T.teal},${T.tealDark})` : "rgba(255,255,255,.04)",
              color: tab === id ? "#000" : "rgba(255,255,255,.55)",
              borderRadius: id === "intl" ? "10px 0 0 10px" : "0 10px 10px 0",
              border: `1px solid ${tab === id ? "transparent" : "rgba(255,255,255,.1)"}`,
            }}>
              {id === "intl" ? "🌎 North America & UK" : "🇮🇳 India (HQ)"}
            </button>
          ))}
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:18 }}>
          {(tab === "intl" ? INTL : INDIA).map((o, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="loc-card" style={{
                background: tab === "india" ? "rgba(0,201,167,.05)" : "rgba(255,255,255,.03)",
                border:`1px solid ${tab === "india" ? "rgba(0,201,167,.18)" : "rgba(255,255,255,.08)"}`,
                borderRadius:16, padding:"28px 26px", display:"flex", alignItems:"flex-start", gap:16,
              }}>
                <div style={{ width:48, height:48, borderRadius:12, flexShrink:0,
                  background:"rgba(0,201,167,.08)", border:"1px solid rgba(0,201,167,.18)",
                  display:"flex", alignItems:"center", justifyContent:"center", fontSize:24 }}>
                  {tab === "india" ? "🇮🇳" : (o as typeof INTL[0]).flag}
                </div>
                <div>
                  <p style={{ fontWeight:700, fontSize:15.5, color:"#fff", marginBottom:4 }}>{o.city}</p>
                  {o.phone && <p style={{ fontSize:13, color:T.teal, marginBottom: tab==="intl" ? 6 : 0 }}>{o.phone}</p>}
                  {tab === "intl" && (
                    <span style={{ fontSize:11, background:"rgba(0,201,167,.1)", border:"1px solid rgba(0,201,167,.2)",
                      borderRadius:100, padding:"3px 10px", color:T.teal, fontWeight:600 }}>
                      {(o as typeof INTL[0]).time}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}