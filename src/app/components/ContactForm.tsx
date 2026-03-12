// "use client";
// import { useState, CSSProperties } from "react";
// import { T } from "./tokens";
// import Reveal from "./Reveal";

// const CONTACTS = [
//   { label:"USA",    value:"+1 631-XXX-XXXX" },
//   { label:"Canada", value:"+1 647-XXX-XXXX" },
//   { label:"UK",     value:"+44 20-XXX-XXXX" },
//   { label:"Email",  value:"hello@nncdigital.com" },
// ];

// const inpW: CSSProperties = {
//   width:"100%", borderRadius:8, padding:"12px 16px", fontSize:13.5,
//   fontFamily:"'Outfit',sans-serif", outline:"none", boxSizing:"border-box",
//   background:"rgba(0,0,0,.04)", border:"1px solid rgba(0,0,0,.12)",
//   color:"#030B18", transition:"border-color .2s",
// };

// export default function ContactForm() {
//   const [form, setForm] = useState({ name:"", phone:"", email:"", desc:"" });
//   const [done, setDone] = useState(false);
//   const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
//     setForm(f => ({ ...f, [k]: e.target.value }));

//   return (
//     <section id="contact" style={{
//       padding:"100px 48px", fontFamily:"'Outfit',sans-serif",
//       background:`linear-gradient(135deg,${T.tealDark} 0%,#006b52 30%,${T.navy1} 65%,${T.navy0} 100%)`,
//       position:"relative", overflow:"hidden",
//     }}>
//       <style>{`
//         @keyframes ringPulse { 0%,100%{opacity:.06;transform:translate(-50%,-50%) scale(1)} 50%{opacity:.12;transform:translate(-50%,-50%) scale(1.06)} }
//         .contact-inp:focus { border-color: rgba(0,201,167,.6) !important; outline:none; }
//         .submit-btn { transition: transform .2s ease, box-shadow .2s ease; cursor:pointer; border:none; font-family:'Outfit',sans-serif; }
//         .submit-btn:hover { transform:translateY(-2px); box-shadow:0 8px 32px rgba(0,201,167,.4); }
//       `}</style>

//       {[240,400,560].map((sz, i) => (
//         <div key={sz} style={{
//           position:"absolute", top:"50%", left:"50%",
//           transform:"translate(-50%,-50%)",
//           width:sz, height:sz, borderRadius:"50%",
//           border:"1px solid rgba(255,255,255,.15)",
//           animation:`ringPulse ${5 + i * 1.5}s ease-in-out infinite`,
//           animationDelay:`${i * 0.8}s`, pointerEvents:"none",
//         }}/>
//       ))}

//       <div style={{ maxWidth:860, margin:"0 auto", position:"relative", zIndex:1 }}>
//         <Reveal style={{ textAlign:"center", marginBottom:52 }}>
//           <p style={{ fontSize:11, fontWeight:700, letterSpacing:"0.14em",
//             textTransform:"uppercase", color:"rgba(255,255,255,.65)", marginBottom:14 }}>— Get Started —</p>
//           <h2 style={{ fontSize:"clamp(26px,3vw,42px)", fontWeight:900, color:"#fff" }}>
//             Ready to Build Next-Level{" "}
//             <span style={{ color:"rgba(255,255,255,.8)", fontStyle:"italic" }}>Custom CRM Solutions?</span>
//           </h2>
//         </Reveal>

//         <Reveal delay={0.1}>
//           <div style={{ background:"rgba(255,255,255,.97)", borderRadius:24,
//             padding:"56px 52px", position:"relative", overflow:"hidden",
//             boxShadow:"0 24px 80px rgba(0,0,0,.3)" }}>
//             <div style={{ position:"absolute", top:0, left:0, right:0, height:4,
//               background:`linear-gradient(90deg,${T.teal},${T.tealLight},${T.tealDark})` }}/>

//             {done ? (
//               <div style={{ textAlign:"center", padding:"48px 0" }}>
//                 <div style={{ fontSize:52, marginBottom:20 }}>✅</div>
//                 <p style={{ fontWeight:700, fontSize:22, color:T.navy1, marginBottom:10 }}>Message Received!</p>
//                 <p style={{ color:"rgba(1,8,18,.5)", fontSize:15 }}>We&apos;ll get back to you within 24 business hours.</p>
//               </div>
//             ) : (
//               <div>
//                 <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:16 }}>
//                   <input className="contact-inp" style={inpW} placeholder="Your Name *" value={form.name} onChange={set("name")}/>
//                   <input className="contact-inp" style={inpW} placeholder="Phone Number" value={form.phone} onChange={set("phone")}/>
//                 </div>
//                 <input className="contact-inp" style={{ ...inpW, display:"block", marginBottom:16 }}
//                   type="email" placeholder="Business Email *" value={form.email} onChange={set("email")}/>
//                 <textarea className="contact-inp"
//                   style={{ ...inpW, resize:"vertical", minHeight:120, display:"block", marginBottom:20 }}
//                   rows={4} placeholder="Tell us about your project…" value={form.desc} onChange={set("desc")}/>
//                 <button className="submit-btn"
//                   onClick={() => form.name && form.email && setDone(true)}
//                   style={{ width:"100%", padding:15, borderRadius:10,
//                     background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
//                     color:"#000", fontWeight:700, fontSize:15, marginBottom:20 }}>
//                   🚀 Submit Project Brief
//                 </button>
//                 <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:20,
//                   paddingTop:16, borderTop:"1px solid rgba(1,8,18,.08)" }}>
//                   {CONTACTS.map(c => (
//                     <div key={c.label} style={{ textAlign:"center" }}>
//                       <p style={{ fontSize:10, fontWeight:700, color:"rgba(1,8,18,.35)",
//                         letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:3 }}>{c.label}</p>
//                       <p style={{ fontSize:13, fontWeight:600, color:T.tealDark }}>{c.value}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState, CSSProperties } from "react";
import { T } from "./tokens";
import Reveal from "./Reveal";

const CONTACTS = [
  { label: "USA",    value: "+1 631-XXX-XXXX" },
  { label: "Canada", value: "+1 647-XXX-XXXX" },
  { label: "UK",     value: "+44 20-XXX-XXXX" },
  { label: "Email",  value: "hello@nncdigital.com" },
];

const DIAL_CODES = [
  { flag: "🇺🇸", code: "+1",  country: "USA" },
  { flag: "🇨🇦", code: "+1",  country: "CA" },
  { flag: "🇬🇧", code: "+44", country: "UK" },
  { flag: "🇦🇺", code: "+61", country: "AU" },
  { flag: "🇮🇳", code: "+91", country: "IN" },
  { flag: "🇦🇪", code: "+971",country: "UAE" },
];

const inpW: CSSProperties = {
  width: "100%", borderRadius: 8, padding: "12px 16px", fontSize: 13.5,
  fontFamily: "'Outfit',sans-serif", outline: "none", boxSizing: "border-box",
  background: "rgba(0,0,0,.04)", border: "1px solid rgba(0,0,0,.12)",
  color: "#030B18", transition: "border-color .2s",
};

const selW: CSSProperties = {
  borderRadius: 8, padding: "12px 10px", fontSize: 13.5,
  fontFamily: "'Outfit',sans-serif", outline: "none",
  background: "rgba(0,0,0,.04)", border: "1px solid rgba(0,0,0,.12)",
  color: "#030B18", cursor: "pointer", flexShrink: 0,
  transition: "border-color .2s", appearance: "none" as const,
  WebkitAppearance: "none" as const,
};

export default function ContactForm() {
  const [form, setForm]     = useState({ name: "", phone: "", email: "", desc: "" });
  const [dialCode, setDial] = useState("+1");
  const [done, setDone]     = useState(false);

  const set = (k: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" style={{
      padding: "100px 48px", fontFamily: "'Outfit',sans-serif",
      background: `linear-gradient(135deg,${T.tealDark} 0%,#006b52 30%,${T.navy1} 65%,${T.navy0} 100%)`,
      position: "relative", overflow: "hidden",
    }}>
      <style>{`
        @keyframes ringPulse {
          0%,100% { opacity:.06; transform:translate(-50%,-50%) scale(1) }
          50%      { opacity:.12; transform:translate(-50%,-50%) scale(1.06) }
        }
        .contact-inp:focus { border-color: rgba(0,201,167,.6) !important; outline: none; }
        .contact-sel:focus { border-color: rgba(0,201,167,.6) !important; outline: none; }
        .submit-btn { transition: transform .2s ease, box-shadow .2s ease; cursor: pointer; border: none; font-family: 'Outfit',sans-serif; }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,201,167,.4); }
      `}</style>

      {[240, 400, 560].map((sz, i) => (
        <div key={sz} style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: sz, height: sz, borderRadius: "50%",
          border: "1px solid rgba(255,255,255,.15)",
          animation: `ringPulse ${5 + i * 1.5}s ease-in-out infinite`,
          animationDelay: `${i * 0.8}s`, pointerEvents: "none",
        }} />
      ))}

      <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Reveal style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "rgba(255,255,255,.65)", marginBottom: 14,
          }}>— Get Started —</p>
          <h2 style={{ fontSize: "clamp(26px,3vw,42px)", fontWeight: 900, color: "#fff" }}>
            Ready to Build Next-Level{" "}
            <span style={{ color: "rgba(255,255,255,.8)", fontStyle: "italic" }}>Custom Digital Solutions?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{
            background: "rgba(255,255,255,.97)", borderRadius: 24,
            padding: "56px 52px", position: "relative", overflow: "hidden",
            boxShadow: "0 24px 80px rgba(0,0,0,.3)",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 4,
              background: `linear-gradient(90deg,${T.teal},${T.tealLight},${T.tealDark})`,
            }} />

            {done ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ fontSize: 52, marginBottom: 20 }}>✅</div>
                <p style={{ fontWeight: 700, fontSize: 22, color: T.navy1, marginBottom: 10 }}>Message Received!</p>
                <p style={{ color: "rgba(1,8,18,.5)", fontSize: 15 }}>We&apos;ll get back to you within 24 business hours.</p>
              </div>
            ) : (
              <div>
                {/* Row 1: Name + Phone with dial code */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <input
                    className="contact-inp" style={inpW}
                    placeholder="Your Name *" value={form.name} onChange={set("name")}
                  />
                  {/* Phone with dial code selector */}
                  <div style={{ display: "flex", gap: 8 }}>
                    <select
                      className="contact-sel"
                      style={selW}
                      value={dialCode}
                      onChange={e => setDial(e.target.value)}
                    >
                      {DIAL_CODES.map(d => (
                        <option key={d.country} value={d.code}>
                          {d.flag} {d.code} {d.country}
                        </option>
                      ))}
                    </select>
                    <input
                      className="contact-inp"
                      style={{ ...inpW, flex: 1 }}
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={set("phone")}
                      type="tel"
                    />
                  </div>
                </div>

                {/* Row 2: Email */}
                <input
                  className="contact-inp"
                  style={{ ...inpW, display: "block", marginBottom: 16 }}
                  type="email" placeholder="Business Email *"
                  value={form.email} onChange={set("email")}
                />

                {/* Row 3: Project description */}
                <textarea
                  className="contact-inp"
                  style={{ ...inpW, resize: "vertical", minHeight: 120, display: "block", marginBottom: 20 }}
                  rows={4} placeholder="Tell us about your project…"
                  value={form.desc} onChange={set("desc")}
                />

                {/* Submit */}
                <button
                  className="submit-btn"
                  onClick={() => form.name && form.email && setDone(true)}
                  style={{
                    width: "100%", padding: 15, borderRadius: 10,
                    background: `linear-gradient(135deg,${T.teal},${T.tealDark})`,
                    color: "#000", fontWeight: 700, fontSize: 15, marginBottom: 20,
                  }}>
                  🚀 Submit Project Brief
                </button>

                {/* Contact details */}
                <div style={{
                  display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20,
                  paddingTop: 16, borderTop: "1px solid rgba(1,8,18,.08)",
                }}>
                  {CONTACTS.map(c => (
                    <div key={c.label} style={{ textAlign: "center" }}>
                      <p style={{
                        fontSize: 10, fontWeight: 700, color: "rgba(1,8,18,.35)",
                        letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3,
                      }}>{c.label}</p>
                      <p style={{ fontSize: 13, fontWeight: 600, color: T.tealDark }}>{c.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}