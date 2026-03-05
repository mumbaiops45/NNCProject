// // "use client";

// // import { motion } from "framer-motion";

// // const markets = [
// //   "India",
// //   "USA",
// //   "UK",
// //   "Canada",
// //   "Middle East",
// //   "Australia",
// // ];

// // export default function GlobalReach() {
// //   return (
// //     <section className="py-28 px-6 md:px-16 bg-white">
// //       <div className="max-w-6xl mx-auto">

// //         {/* Heading */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //           className="text-center mb-16"
// //         >
// //           <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
// //             Delivering Digital Excellence{" "}
// //             <span className="text-[#14B8A6]">Across Markets</span>
// //           </h2>

// //           <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
// //             We serve startups, SMEs, and enterprises across India, USA, UK,
// //             Canada, Middle East, and Australia — building systems that meet
// //             international compliance and performance standards.
// //           </p>
// //         </motion.div>

// //         {/* Markets Grid */}
// //         <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-14">
// //           {markets.map((market, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, scale: 0.9 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: index * 0.08 }}
// //               whileHover={{ y: -6 }}
// //               className="group border border-gray-200 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-xl"
// //             >
// //               <h3 className="text-xl font-semibold text-black transition-colors duration-300 group-hover:text-[#14B8A6]">
// //                 {market}
// //               </h3>
// //             </motion.div>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { motion } from "framer-motion";
// import { Globe } from "lucide-react";

// const markets = [
//   "India",
//   "USA",
//   "UK",
//   "Canada",
//   "Middle East",
//   "Australia",
// ];

// export default function GlobalReach() {
//   return (
//     <section className="relative py-32 px-6 md:px-16 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#14B8A6]/10 blur-[140px] rounded-full"></div>

//       <div className="relative max-w-6xl mx-auto">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <div className="flex justify-center mb-6">
//             <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#14B8A6]/10">
//               <Globe size={30} className="text-[#14B8A6]" />
//             </div>
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
//             Delivering Digital Excellence{" "}
//             <span className="text-[#14B8A6] relative">
//               Across Markets
//               <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#14B8A6]/30 rounded-full"></span>
//             </span>
//           </h2>

//           <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
//             We serve startups, SMEs, and enterprises across multiple global
//             markets — building systems that meet international compliance,
//             scalability, and performance standards.
//           </p>
//         </motion.div>

//         {/* Markets Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
//           {markets.map((market, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="group relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-10 text-center shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
//             >
//               {/* Hover Glow */}
//               <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/0 via-[#14B8A6]/5 to-[#14B8A6]/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

//               <h3 className="relative text-xl font-semibold text-black group-hover:text-[#14B8A6] transition-colors duration-300">
//                 {market}
//               </h3>

//               {/* Bottom Accent Line */}
//               <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#14B8A6] group-hover:w-full transition-all duration-500"></div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";

const NAVY = "#0B1525";
const TEAL = "#00C9A7";

const REGIONS = [
  "Mumbai", "Bangalore", "Mysore", "Delhi",
  "USA", "UK", "Canada", "Middle East", "Australia",
];

export default function GlobalReach() {
  return (
    <section style={{ padding: "100px 48px", background: NAVY, position: "relative", overflow: "hidden" }}>
      {/* Grid bg */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize: "50px 50px", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center" }}>

        <div className="eye" style={{ justifyContent: "center" }}>
          <span className="eye-bar" />
          <span className="eye-txt mono">Global reach</span>
          <span className="eye-bar" />
        </div>

        <h2 className="syne" style={{ fontSize: "clamp(30px,4vw,52px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 20 }}>
          Delivering Digital Excellence<br />
          <span className="gtxt">Across Markets</span>
        </h2>

        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", maxWidth: 540, margin: "0 auto 48px", lineHeight: 1.75 }}>
          We serve startups, SMEs, and enterprises globally — building systems that meet international compliance and performance standards.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          {REGIONS.map((r, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,201,167,0.18)", borderRadius: 50, padding: "10px 22px", fontSize: 14, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
              📍 {r}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}