// // "use client";

// // import { motion } from "framer-motion";

// // const stories = [
// //   {
// //     title: "Enterprise CRM for Manufacturing Client",
// //     points: [
// //       "Automated dealer management",
// //       "Real-time sales tracking",
// //       "35% improvement in operational efficiency",
// //     ],
// //   },
// //   {
// //     title: "Mobile App + CRM for Healthcare Client",
// //     points: [
// //       "Integrated booking system",
// //       "WhatsApp notifications",
// //       "Increased repeat bookings by 42%",
// //     ],
// //   },
// // ];

// // export default function SuccessStories() {
// //   return (
// //     <section className="py-28 px-6 md:px-16 bg-white">
// //       <div className="max-w-7xl mx-auto">

// //         {/* Section Heading */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //           className="text-center mb-20"
// //         >
// //           <h2 className="text-4xl md:text-5xl font-bold text-black">
// //             Real Systems.{" "}
// //             <span className="text-[#14B8A6]">Real Results.</span>
// //           </h2>
// //         </motion.div>

// //         {/* Stories Grid */}
// //         <div className="grid md:grid-cols-2 gap-12">
// //           {stories.map((story, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: index * 0.1 }}
// //               whileHover={{ y: -6 }}
// //               className="group border border-gray-200 rounded-xl p-10 transition-all duration-300 hover:shadow-xl"
// //             >
// //               <h3 className="text-2xl font-semibold text-black mb-6 transition-colors duration-300 group-hover:text-[#14B8A6]">
// //                 {story.title}
// //               </h3>

// //               <ul className="space-y-4">
// //                 {story.points.map((point, i) => (
// //                   <li
// //                     key={i}
// //                     className="flex items-start text-gray-800"
// //                   >
// //                     <span className="text-[#14B8A6] mr-3 mt-1">•</span>
// //                     {point}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* Button */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.3 }}
// //           className="text-center mt-20"
// //         >
// //           <button className="px-10 py-4 border border-black text-black rounded-full font-medium transition-all duration-300 hover:bg-[#14B8A6] hover:border-[#14B8A6] hover:text-white">
// //             View Case Studies
// //           </button>
// //         </motion.div>

// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import { TrendingUp, CheckCircle } from "lucide-react";

// const stories = [
//   {
//     title: "Enterprise CRM for Manufacturing Client",
//     highlight: "35% Efficiency Boost",
//     points: [
//       "Automated dealer management",
//       "Real-time sales tracking",
//       "Operational workflow automation",
//     ],
//   },
//   {
//     title: "Mobile App + CRM for Healthcare Client",
//     highlight: "42% Increase in Repeat Bookings",
//     points: [
//       "Integrated booking system",
//       "WhatsApp notifications",
//       "Patient lifecycle tracking",
//     ],
//   },
// ];

// export default function SuccessStories() {
//   return (
//     <section className="relative py-32 px-6 md:px-16 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#14B8A6]/10 blur-[120px] rounded-full"></div>

//       <div className="relative max-w-7xl mx-auto">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-24"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-black">
//             Real Systems.{" "}
//             <span className="text-[#14B8A6] relative">
//               Real Results.
//               <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#14B8A6]/30 rounded-full"></span>
//             </span>
//           </h2>
//         </motion.div>

//         {/* Stories Grid */}
//         <div className="grid md:grid-cols-2 gap-12">
//           {stories.map((story, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.15 }}
//               whileHover={{ y: -12 }}
//               className="group relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-12 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
//             >
//               {/* Hover Glow */}
//               <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/0 via-[#14B8A6]/5 to-[#14B8A6]/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

//               {/* Highlight Badge */}
//               <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] font-semibold text-sm mb-6">
//                 <TrendingUp size={16} />
//                 {story.highlight}
//               </div>

//               {/* Title */}
//               <h3 className="relative text-2xl font-semibold text-black mb-8 group-hover:text-[#14B8A6] transition-colors duration-300">
//                 {story.title}
//               </h3>

//               {/* Points */}
//               <ul className="relative space-y-5">
//                 {story.points.map((point, i) => (
//                   <li key={i} className="flex items-start gap-4 text-gray-800">
//                     <CheckCircle
//                       size={20}
//                       className="text-[#14B8A6] mt-1 shrink-0"
//                     />
//                     <span>{point}</span>
//                   </li>
//                 ))}
//               </ul>

//               {/* Bottom Accent Line */}
//               <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#14B8A6] group-hover:w-full transition-all duration-500"></div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="text-center mt-24"
//         >
//           <button className="px-12 py-4 bg-black text-white rounded-full font-semibold transition-all duration-300 hover:bg-[#14B8A6] hover:scale-105 shadow-lg">
//             View Case Studies
//           </button>
//         </motion.div>

//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";

const TEAL = "#00C9A7";
const NAVY = "#0B1525";

const STORIES = [
  {
    tag: "Manufacturing · CRM",
    title: "Enterprise CRM for Manufacturing Client",
    results: [
      "Automated dealer management",
      "Real-time sales tracking",
      "35% improvement in operational efficiency",
    ],
    metric: "35%",
    metricLabel: "Efficiency Gain",
  },
  {
    tag: "Healthcare · Mobile + CRM",
    title: "Mobile App + CRM for Healthcare Client",
    results: [
      "Integrated booking system",
      "WhatsApp notifications automation",
      "Increased repeat bookings by 42%",
    ],
    metric: "42%",
    metricLabel: "Repeat Bookings",
  },
  {
    tag: "E-commerce · Automation",
    title: "Full Funnel Automation for D2C Brand",
    results: [
      "End-to-end lead nurturing flows",
      "Google & Meta ad integration",
      "2.4× lead conversion improvement",
    ],
    metric: "2.4×",
    metricLabel: "Lead Conversion",
  },
];

export default function SuccessStories() {
  return (
    <section style={{ padding: "100px 48px", background: NAVY, position: "relative", overflow: "hidden" }}>
      {/* bg glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 900, height: 900, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.04) 0%,transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div className="eye"><span className="eye-bar" /><span className="eye-txt mono">Case studies</span></div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52 }}>
          <h2 className="syne" style={{ fontSize: "clamp(30px,3.5vw,48px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
            Real Systems.<br /><span className="gtxt">Real Results.</span>
          </h2>
          <button className="btn-outline">View All Case Studies →</button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {STORIES.map((s, i) => (
            <motion.div key={i} className="ssc"
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}>

              <span className="tag" style={{ marginBottom: 16 }}>{s.tag}</span>
              <h3 className="syne" style={{ fontSize: 20, fontWeight: 700, color: "#fff", lineHeight: 1.25, marginBottom: 20 }}>
                {s.title}
              </h3>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {s.results.map((r) => (
                  <li key={r} style={{ display: "flex", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
                    <span style={{ color: TEAL, flexShrink: 0 }}>✓</span>
                    {r}
                  </li>
                ))}
              </ul>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 20, display: "flex", alignItems: "center", gap: 12 }}>
                <span className="syne gtxt" style={{ fontSize: 40, fontWeight: 800, lineHeight: 1 }}>{s.metric}</span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.42)" }}>{s.metricLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}