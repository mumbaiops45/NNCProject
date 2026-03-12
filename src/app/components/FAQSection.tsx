// "use client";
// import { useState } from "react";
// import { T } from "./tokens";
// import Reveal from "./Reveal";

// const FAQS = [
//   { q:"What is custom CRM software vs off-the-shelf?",
//     a:"Off-the-shelf CRMs like Salesforce or HubSpot are general-purpose tools that work for many businesses but often require workarounds for your specific processes. Custom CRM software is built entirely around your business logic, compliance requirements (GDPR, PIPEDA, CCPA), and integration needs. Development typically takes 8–20 weeks depending on complexity." },
//   { q:"What features can be customised?",
//     a:"Everything. Sales pipelines, lead scoring, deal stages, customer segmentation, automated follow-up sequences, WhatsApp and SMS integration, role-based dashboards, custom reporting, API connections to your ERP, accounting, or e-commerce stack, and even AI-powered forecasting layers." },
//   { q:"How long does CRM development take?",
//     a:"A focused MVP CRM takes 8–12 weeks. A full enterprise CRM with AI layers, multi-region compliance, ERP integration, and custom mobile apps typically runs 16–24 weeks. All timelines include UAT, training, and hypercare go-live support." },
//   { q:"What does CRM development cost in Canada or UK?",
//     a:"MVP CRMs typically start from CAD $18,000 / £10,500. Full enterprise implementations are scoped individually. All quotes are fixed-price with milestone-based payments — no hourly billing surprises." },
//   { q:"Do you offer post-launch support?",
//     a:"Yes. All projects include 90 days of hypercare support post-launch. We then offer structured retainer packages for ongoing development, bug fixes, performance monitoring, and feature additions." },
// ];

// export default function FAQSection() {
//   const [open, setOpen] = useState<number|null>(null);

//   return (
//     <section style={{ padding:"100px 48px", background:T.navy0, fontFamily:"'Outfit',sans-serif" }}>
//       <style>{`
//         .faq-btn { width:100%; display:flex; align-items:center; justify-content:space-between;
//           padding:22px 26px; background:none; border:none; cursor:pointer; text-align:left;
//           gap:16px; font-family:'Outfit',sans-serif; }
//       `}</style>
//       <div style={{ maxWidth:860, margin:"0 auto" }}>
//         <Reveal style={{ marginBottom:52, textAlign:"center" }}>
//           <p style={{ color:T.teal, fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:14 }}>— Common Questions —</p>
//           <h2 style={{ fontSize:"clamp(26px,3vw,42px)", fontWeight:900, color:"#fff" }}>
//             Frequently Asked{" "}
//             <span style={{ background:`linear-gradient(135deg,${T.teal},${T.tealLight})`,
//               WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Questions</span>
//           </h2>
//         </Reveal>
//         <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
//           {FAQS.map((f, i) => (
//             <Reveal key={i} delay={0.06 * i}>
//               <div style={{
//                 background:"rgba(255,255,255,.03)",
//                 border:`1px solid ${open === i ? "rgba(0,201,167,.4)" : "rgba(255,255,255,.08)"}`,
//                 borderRadius:14, overflow:"hidden", transition:"border-color .3s",
//               }}>
//                 <button className="faq-btn" onClick={() => setOpen(open === i ? null : i)}>
//                   <span style={{ fontWeight:700, fontSize:15.5, color:"#fff", lineHeight:1.4 }}>{f.q}</span>
//                   <span style={{
//                     width:28, height:28, borderRadius:"50%", flexShrink:0,
//                     display:"flex", alignItems:"center", justifyContent:"center",
//                     fontSize:18, fontWeight:300,
//                     background: open === i ? `linear-gradient(135deg,${T.teal},${T.tealDark})` : "rgba(0,201,167,.1)",
//                     border:"1px solid rgba(0,201,167,.3)",
//                     color: open === i ? "#000" : T.teal,
//                     transform:`rotate(${open === i ? 45 : 0}deg)`,
//                     transition:"transform .25s ease, background .25s ease",
//                   }}>+</span>
//                 </button>
//                 {open === i && (
//                   <div style={{ padding:"0 26px 24px", borderTop:"1px solid rgba(0,201,167,.1)" }}>
//                     <p style={{ color:"rgba(255,255,255,.58)", fontSize:14.5, lineHeight:1.82, paddingTop:16 }}>{f.a}</p>
//                   </div>
//                 )}
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState } from "react";
import { T } from "./tokens";
import Reveal from "./Reveal";

const INDUSTRIES = [
  { icon: "🏥", label: "Healthcare" },
  { icon: "🏠", label: "Real Estate" },
  { icon: "🛒", label: "E-Commerce" },
  { icon: "🏭", label: "Manufacturing" },
  { icon: "🎓", label: "Education" },
  { icon: "🏨", label: "Hospitality" },
  { icon: "🚚", label: "Logistics" },
  { icon: "💰", label: "Finance" },
  { icon: "💼", label: "Professional Services" },
];

const FAQS = [
  { q: "What is custom CRM software, and how does it differ from off-the-shelf solutions?", a: "Custom CRM is built specifically for your business workflows — not the average business. It integrates with your tools, follows your processes, and scales without compounding licensing fees. Unlike Salesforce or HubSpot, there are no feature compromises, no workarounds, and no per-seat costs eating into your margins." },
  { q: "How long does it typically take to develop and deploy a custom CRM system?", a: "A standard custom CRM takes 6–12 weeks from discovery to go-live. More complex systems with AI layers, ERP integration, or multi-region compliance run 16–24 weeks. We provide a detailed, fixed milestone timeline after your free discovery consultation — no surprises." },
  { q: "Is your CRM development compliant with GDPR, PIPEDA, and CCPA?", a: "Yes. Every system is engineered to comply with GDPR (UK/EU), PIPEDA (Canada), and CCPA (California/USA) from the architecture level up — not retrofitted after the fact. Data residency, consent flows, and audit logging are built in from day one." },
  { q: "What features can be customised?", a: "Everything. Sales pipelines, lead scoring, deal stages, customer segmentation, automated follow-up sequences, WhatsApp and SMS integration, role-based dashboards, custom reporting, API connections to your ERP, accounting, or e-commerce stack, and AI-powered forecasting layers." },
  { q: "What does CRM development cost in Canada or the UK?", a: "MVP CRMs typically start from CAD $18,000 / £10,500. Full enterprise implementations are scoped individually. All quotes are fixed-price with milestone-based payments — no hourly billing surprises." },
  { q: "Do you offer post-launch support?", a: "Yes. All projects include 90 days of hypercare support post-launch, followed by structured retainer packages for ongoing development, bug fixes, performance monitoring, and feature additions." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ background: T.navy0, fontFamily: "'Outfit', sans-serif" }}>
      <style>{`
        .ind-card { transition: transform .25s ease, border-color .25s ease, background .25s ease; cursor: default; }
        .ind-card:hover { border-color: rgba(0,201,167,.5) !important; transform: translateY(-5px); background: rgba(0,201,167,.07) !important; }
        .faq-btn { width:100%; display:flex; align-items:center; justify-content:space-between; padding:22px 26px; background:none; border:none; cursor:pointer; text-align:left; gap:16px; font-family:'Outfit',sans-serif; }
        .faq-btn:hover span:first-child { color: rgba(0,201,167,.9) !important; }
      `}</style>

      {/* Industries */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Reveal style={{ marginBottom: 48, textAlign: "center" }}>
            <p style={{ color: T.teal, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>— Built for Your World —</p>
            <h2 style={{ fontSize: "clamp(26px,3vw,42px)", fontWeight: 900, color: "#fff", margin: 0 }}>
              Helping Businesses{" "}
              <span style={{ background: `linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Across Industries
              </span>
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))", gap: 12 }}>
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <div className="ind-card" style={{
                  background: "rgba(255,255,255,.03)",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: 14,
                  padding: "26px 16px",
                  textAlign: "center",
                }}>
                  <div style={{ fontSize: 30, marginBottom: 10 }}>{ind.icon}</div>
                  <p style={{ color: "#fff", fontWeight: 600, fontSize: 13.5, margin: 0, lineHeight: 1.3 }}>{ind.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: 1, background: "rgba(255,255,255,.06)", margin: "0 40px" }} />

      {/* FAQ */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <Reveal style={{ marginBottom: 48, textAlign: "center" }}>
            <p style={{ color: T.teal, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>— Common Questions —</p>
            <h2 style={{ fontSize: "clamp(26px,3vw,42px)", fontWeight: 900, color: "#fff", margin: 0 }}>
              Frequently Asked{" "}
              <span style={{ background: `linear-gradient(135deg,${T.teal},${T.tealLight})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Questions
              </span>
            </h2>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQS.map((f, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <div style={{
                  background: "rgba(255,255,255,.03)",
                  border: `1px solid ${open === i ? "rgba(0,201,167,.4)" : "rgba(255,255,255,.08)"}`,
                  borderRadius: 14,
                  overflow: "hidden",
                  transition: "border-color .3s",
                }}>
                  <button className="faq-btn" onClick={() => setOpen(open === i ? null : i)}>
                    <span style={{ fontWeight: 700, fontSize: 15.5, color: "#fff", lineHeight: 1.4, transition: "color .2s" }}>{f.q}</span>
                    <span style={{
                      width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 18, fontWeight: 300,
                      background: open === i ? `linear-gradient(135deg,${T.teal},${T.tealDark})` : "rgba(0,201,167,.1)",
                      border: "1px solid rgba(0,201,167,.3)",
                      color: open === i ? "#000" : T.teal,
                      transform: `rotate(${open === i ? 45 : 0}deg)`,
                      transition: "transform .25s ease, background .25s ease",
                    }}>+</span>
                  </button>
                  {open === i && (
                    <div style={{ padding: "0 26px 24px", borderTop: "1px solid rgba(0,201,167,.1)" }}>
                      <p style={{ color: "rgba(255,255,255,.58)", fontSize: 14.5, lineHeight: 1.82, paddingTop: 16, margin: 0 }}>{f.a}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}