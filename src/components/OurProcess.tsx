// // "use client";

// // import { motion } from "framer-motion";

// // const processSteps = [
// //   {
// //     title: "Discovery & Requirement Analysis",
// //     description:
// //       "We deeply understand your workflows and bottlenecks.",
// //   },
// //   {
// //     title: "Architecture & Planning",
// //     description:
// //       "We design scalable digital architecture.",
// //   },
// //   {
// //     title: "Development & Integration",
// //     description:
// //       "Agile development with seamless API integrations.",
// //   },
// //   {
// //     title: "Testing & Optimization",
// //     description:
// //       "Performance, security, scalability validation.",
// //   },
// //   {
// //     title: "Deployment & Growth Support",
// //     description:
// //       "Continuous optimization and improvement.",
// //   },
// // ];

// // export default function OurProcess() {
// //   return (
// //     <section className="py-28 px-6 md:px-16 bg-white">
// //       <div className="max-w-5xl mx-auto">

// //         {/* Section Heading */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //           className="text-center mb-24"
// //         >
// //           <h2 className="text-4xl md:text-5xl font-bold text-black">
// //             Our <span className="text-[#14B8A6]">Process</span>
// //           </h2>
// //         </motion.div>

// //         {/* Timeline */}
// //         <div className="relative border-l border-gray-200">

// //           {processSteps.map((step, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, x: -40 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: index * 0.1 }}
// //               className="relative pl-12 pb-16 group"
// //             >
// //               {/* Timeline Dot */}
// //               <div className="absolute left-0 top-2 w-5 h-5 bg-white border-2 border-[#14B8A6] rounded-full group-hover:bg-[#14B8A6] transition-all duration-300"></div>

// //               {/* Step Number */}
// //               <div className="absolute -left-16 top-0 text-sm font-semibold text-gray-400">
// //                 0{index + 1}
// //               </div>

// //               {/* Content */}
// //               <h3 className="text-xl font-semibold text-black mb-3 transition-colors duration-300 group-hover:text-[#14B8A6]">
// //                 {step.title}
// //               </h3>

// //               <p className="text-gray-700 leading-relaxed">
// //                 {step.description}
// //               </p>
// //             </motion.div>
// //           ))}

// //         </div>

// //       </div>
// //     </section>
// //   );
// // }



// "use client";

// import { motion } from "framer-motion";

// const processSteps = [
//   {
//     title: "Discovery & Requirement Analysis",
//     description:
//       "We deeply understand your workflows, pain points, and operational bottlenecks to build a strong foundation.",
//   },
//   {
//     title: "Architecture & Planning",
//     description:
//       "We design scalable, secure digital architecture aligned with long-term business growth.",
//   },
//   {
//     title: "Development & Integration",
//     description:
//       "Agile development with seamless API integrations and modular system engineering.",
//   },
//   {
//     title: "Testing & Optimization",
//     description:
//       "Rigorous performance, security, and scalability validation before deployment.",
//   },
//   {
//     title: "Deployment & Growth Support",
//     description:
//       "Continuous monitoring, optimization, and long-term growth partnership.",
//   },
// ];

// export default function OurProcess() {
//   return (
//     <section className="relative py-32 px-6 md:px-16 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#14B8A6]/10 blur-[120px] rounded-full"></div>

//       <div className="relative max-w-5xl mx-auto">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-28"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-black">
//             Our{" "}
//             <span className="text-[#14B8A6] relative">
//               Process
//               <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#14B8A6]/30 rounded-full"></span>
//             </span>
//           </h2>
//         </motion.div>

//         {/* Timeline Container */}
//         <div className="relative">

//           {/* Center Line */}
//           <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-[#14B8A6] to-transparent"></div>

//           {processSteps.map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.15 }}
//               className={`relative mb-20 flex flex-col md:flex-row items-start md:items-center ${
//                 index % 2 === 0 ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               {/* Step Card */}
//               <div className="w-full md:w-1/2">
//                 <div className="group relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  
//                   {/* Hover Glow */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/0 via-[#14B8A6]/5 to-[#14B8A6]/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

//                   {/* Step Number */}
//                   <div className="relative text-5xl font-bold text-[#14B8A6]/20 mb-4">
//                     0{index + 1}
//                   </div>

//                   <h3 className="relative text-xl font-semibold text-black mb-4 group-hover:text-[#14B8A6] transition-colors duration-300">
//                     {step.title}
//                   </h3>

//                   <p className="relative text-gray-700 leading-relaxed">
//                     {step.description}
//                   </p>

//                   {/* Bottom Accent Line */}
//                   <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#14B8A6] group-hover:w-full transition-all duration-500"></div>
//                 </div>
//               </div>

//               {/* Timeline Dot */}
//               <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-white border-4 border-[#14B8A6] rounded-full shadow-md"></div>

//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";

const TEAL = "#00C9A7";
const NAVY = "#0B1525";
const G    = "linear-gradient(135deg, #00C9A7 0%, #1B8F6E 100%)";

const STEPS = [
  { n: "01", title: "Discovery & Requirement Analysis",  body: "We deeply understand your workflows, team structure, and operational bottlenecks — not just your feature wishlist." },
  { n: "02", title: "Architecture & Planning",           body: "We design a scalable, secure digital blueprint specific to your business model and integration ecosystem." },
  { n: "03", title: "Development & Integration",         body: "Agile sprints with weekly demos. Seamless API integrations. You see it working before it ships." },
  { n: "04", title: "Testing & Optimization",            body: "Performance, security, and scalability validation. No shortcuts, no compromise." },
  { n: "05", title: "Deployment & Growth Support",       body: "Smooth rollout, team training, and continuous optimization. We don't disappear at go-live." },
];

export default function OurProcess() {
  return (
    <section style={{ padding: "100px 48px", maxWidth: 1200, margin: "0 auto" }}>
      <div className="eye"><span className="eye-bar" /><span className="eye-txt mono">How we work</span></div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

        {/* Left */}
        <div>
          <h2 className="syne" style={{ fontSize: "clamp(30px,3.5vw,48px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 20 }}>
            A process built for<br />
            <span className="gtxt">real businesses.</span>
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(11,21,37,0.52)", maxWidth: 340, marginBottom: 40 }}>
            Five steps from first conversation to a live system your team actually uses and loves.
          </p>

          {/* Timeline callout */}
          <div style={{ padding: "28px 32px", background: NAVY, borderRadius: 18, border: "1px solid rgba(0,201,167,0.15)" }}>
            <p className="syne gtxt" style={{ fontSize: 36, fontWeight: 800, lineHeight: 1, marginBottom: 8 }}>6–12 Weeks</p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
              Typical delivery timeline for a fully custom CRM or ERP system — from discovery to go-live.
            </p>
          </div>
        </div>

        {/* Right steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {STEPS.map((s, i) => (
            <motion.div key={i} className="pstep"
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>

              <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                <span className="mono" style={{ fontSize: 11, color: TEAL, fontWeight: 700 }}>{s.n}</span>
              </div>
              <div>
                <h4 className="syne" style={{ fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{s.title}</h4>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: "rgba(11,21,37,0.52)" }}>{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}