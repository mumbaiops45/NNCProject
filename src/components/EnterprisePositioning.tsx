// // "use client";

// // import { motion } from "framer-motion";

// // const features = [
// //   "Cloud-ready",
// //   "Secure by design",
// //   "API-driven",
// //   "Built for scale",
// //   "Enterprise architecture compliant",
// // ];

// // export default function EnterprisePositioning() {
// //   return (
// //     <section className="py-32 px-6 md:px-16 bg-gray-50">

// //       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

// //         {/* LEFT CONTENT */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-8">
// //             A Secure, Scalable &{" "}
// //             <span className="text-[#14B8A6]">Future-Ready Digital Core</span>
// //           </h2>

// //           <p className="text-gray-700 text-lg mb-8 leading-relaxed">
// //             At NNC Digital Solutions, we build governed digital infrastructures
// //             that integrate seamlessly with your business workflows.
// //           </p>

// //           <p className="text-gray-700 text-lg leading-relaxed">
// //             Whether you’re a startup, SME, or enterprise, we architect systems
// //             that evolve with your growth.
// //           </p>
// //         </motion.div>

// //         {/* RIGHT FEATURE LIST */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 60 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //           className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm"
// //         >
// //           <h3 className="text-xl font-semibold text-black mb-8">
// //             Our solutions are:
// //           </h3>

// //           <ul className="space-y-6">
// //             {features.map((feature, index) => (
// //               <motion.li
// //                 key={index}
// //                 initial={{ opacity: 0, x: -20 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: index * 0.1 }}
// //                 className="flex items-center gap-4 group"
// //               >
// //                 {/* Accent Dot */}
// //                 <div className="w-3 h-3 rounded-full bg-[#14B8A6]" />

// //                 <span className="text-gray-800 text-lg">
// //                   {feature}
// //                 </span>
// //               </motion.li>
// //             ))}
// //           </ul>
// //         </motion.div>

// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { motion } from "framer-motion";
// import { ShieldCheck, Cloud, Network, Layers, Cpu } from "lucide-react";

// const features = [
//   { text: "Cloud-ready", icon: Cloud },
//   { text: "Secure by design", icon: ShieldCheck },
//   { text: "API-driven", icon: Network },
//   { text: "Built for scale", icon: Layers },
//   { text: "Enterprise architecture compliant", icon: Cpu },
// ];

// export default function EnterprisePositioning() {
//   return (
//     <section className="relative py-32 px-6 md:px-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-[#14B8A6]/10 blur-[120px] rounded-full"></div>

//       <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-8">
//             A Secure, Scalable &{" "}
//             <span className="text-[#14B8A6] relative">
//               Future-Ready Digital Core
//               <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#14B8A6]/30 rounded-full"></span>
//             </span>
//           </h2>

//           <p className="text-gray-700 text-lg mb-8 leading-relaxed">
//             At NNC Digital Solutions, we engineer governed digital
//             infrastructures that integrate seamlessly with your business
//             workflows.
//           </p>

//           <p className="text-gray-700 text-lg leading-relaxed">
//             Whether you’re a startup, SME, or enterprise, we architect
//             adaptive systems that evolve with your growth trajectory.
//           </p>
//         </motion.div>

//         {/* RIGHT FEATURE CARD */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-12 shadow-xl overflow-hidden"
//         >
//           {/* Hover Glow Layer */}
//           <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/0 via-[#14B8A6]/5 to-[#14B8A6]/0"></div>

//           <h3 className="relative text-2xl font-semibold text-black mb-10">
//             Our solutions are:
//           </h3>

//           <ul className="relative space-y-7">
//             {features.map((feature, index) => {
//               const Icon = feature.icon;
//               return (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.12 }}
//                   whileHover={{ x: 6 }}
//                   className="flex items-center gap-5 group transition-all duration-300"
//                 >
//                   <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#14B8A6]/10 group-hover:bg-[#14B8A6]/20 transition">
//                     <Icon className="text-[#14B8A6]" size={20} />
//                   </div>

//                   <span className="text-gray-800 text-lg group-hover:text-black transition">
//                     {feature.text}
//                   </span>
//                 </motion.li>
//               );
//             })}
//           </ul>

//           {/* Bottom Accent Line */}
//           <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#14B8A6] to-transparent"></div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }




"use client";

import { motion } from "framer-motion";

const TEAL = "#00C9A7";
const NAVY = "#0B1525";
const G    = "linear-gradient(135deg, #00C9A7 0%, #1B8F6E 100%)";

const PILLARS = [
  "Cloud-ready",
  "Secure by design",
  "API-driven",
  "Built for scale",
  "Enterprise architecture compliant",
];

const CARDS = [
  { icon: "🔐", title: "Security First",    desc: "End-to-end encryption, role-based access, and enterprise compliance built in from day one." },
  { icon: "☁️", title: "Cloud Native",      desc: "Deployed on scalable cloud infrastructure with 99.9% uptime guarantees." },
  { icon: "🔗", title: "API Driven",        desc: "Every system we build is designed to talk to your existing tools and third-party platforms." },
  { icon: "📊", title: "Data Intelligence", desc: "Real-time dashboards and reporting that transform raw data into business decisions." },
];

export default function EnterprisePositioning() {
  return (
    <section style={{ background: NAVY, padding: "100px 48px", position: "relative", overflow: "hidden" }}>
      {/* Glows */}
      <div style={{ position: "absolute", top: -180, left: -180, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -180, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(27,143,110,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div className="eye"><span className="eye-bar" /><span className="eye-txt mono">Enterprise grade</span></div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* Left */}
          <div>
            <h2 className="syne" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.025em", marginBottom: 24 }}>
              A Secure, Scalable &<br />
              <span className="gtxt">Future-Ready</span> Digital Core
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.78, color: "rgba(255,255,255,0.55)", marginBottom: 36 }}>
              At NNC Digital Solutions, we build governed digital infrastructures that integrate seamlessly with your business workflows. Whether you&apos;re a startup, SME, or enterprise — we architect systems that evolve with your growth.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {PILLARS.map((p) => (
                <div key={p} style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.2)", borderRadius: 50, padding: "8px 16px" }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: TEAL, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.78)", fontWeight: 500 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {CARDS.map((c, i) => (
              <motion.div key={i} className="dcard"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{c.icon}</div>
                <h4 style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 8 }}>{c.title}</h4>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: "rgba(255,255,255,0.44)" }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}