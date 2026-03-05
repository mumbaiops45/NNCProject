// // "use client";

// // import { motion } from "framer-motion";

// // export default function FinalCTA() {
// //   return (
// //     <section className="py-32 px-6 md:px-16 bg-white border-t border-gray-200">
// //       <div className="max-w-5xl mx-auto text-center">

// //         {/* Main Headline */}
// //         <motion.h2
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //           className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight"
// //         >
// //           Ready to{" "}
// //           <span className="text-[#14B8A6]">
// //             Transform Your Business Operations?
// //           </span>
// //         </motion.h2>

// //         {/* Supporting Content */}
// //         <motion.p
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.2 }}
// //           className="text-lg text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto"
// //         >
// //           Let’s design a digital system that gives you clarity, control,
// //           and predictable growth.
// //         </motion.p>

// //         {/* CTA Button */}
// //         <motion.button
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.3 }}
// //           whileHover={{ scale: 1.05 }}
// //           className="px-12 py-4 border border-black text-black rounded-full font-semibold transition-all duration-300 hover:bg-[#14B8A6] hover:border-[#14B8A6] hover:text-white"
// //         >
// //           Schedule a Consultation
// //         </motion.button>

// //         {/* Divider */}
// //         <div className="my-20 border-t border-gray-200"></div>

// //         {/* Brand Positioning Statement */}
// //         <motion.p
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.4 }}
// //           className="text-lg md:text-xl text-black font-medium leading-relaxed"
// //         >
// //           <span className="text-[#14B8A6] font-semibold">
// //             NNC Digital Solutions
// //           </span>{" "}
// //           is a full-stack technology and automation partner helping businesses
// //           design scalable digital ecosystems that drive measurable growth.
// //         </motion.p>

// //         {/* Key Differentiator */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.5 }}
// //           className="mt-12"
// //         >
// //           <p className="text-gray-600 mb-4">
// //             Instead of:
// //           </p>

// //           <p className="text-gray-500 italic mb-6">
// //             “We build websites and apps.”
// //           </p>

// //           <p className="text-xl md:text-2xl font-semibold text-black">
// //             We engineer{" "}
// //             <span className="text-[#14B8A6]">
// //               business growth systems.
// //             </span>
// //           </p>
// //         </motion.div>

// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { motion } from "framer-motion";

// export default function FinalCTA() {
//   return (
//     <section className="relative py-32 px-6 md:px-16 overflow-hidden bg-gradient-to-br from-white via-[#f8fafc] to-[#ecfeff]">

//       {/* Background Glow */}
//       <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#14B8A6]/20 blur-[120px] rounded-full"></div>
//       <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] bg-[#0ea5e9]/20 blur-[120px] rounded-full"></div>

//       <div className="relative max-w-5xl mx-auto text-center">

//         {/* Headline */}
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-8"
//         >
//           Ready to{" "}
//           <span className="bg-gradient-to-r from-[#14B8A6] to-[#0ea5e9] bg-clip-text text-transparent">
//             Transform Your Business Operations?
//           </span>
//         </motion.h2>

//         {/* Sub Text */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
//         >
//           Let’s build a powerful digital ecosystem that gives you clarity,
//           automation, and predictable growth — not just another website.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="flex flex-col sm:flex-row gap-6 justify-center items-center"
//         >
//           {/* Primary Button */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="px-10 py-4 rounded-full bg-[#14B8A6] text-white font-semibold shadow-lg shadow-[#14B8A6]/40 transition-all duration-300 hover:shadow-[#14B8A6]/60"
//           >
//             Schedule Strategy Call
//           </motion.button>

//           {/* Secondary Button */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="px-10 py-4 rounded-full border border-gray-300 text-gray-800 font-semibold hover:border-[#14B8A6] hover:text-[#14B8A6] transition-all duration-300"
//           >
//             View Our Solutions
//           </motion.button>
//         </motion.div>

//         {/* Divider */}
//         <div className="my-20 border-t border-gray-200"></div>

//         {/* Positioning Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//           className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-10 shadow-xl"
//         >
//           <p className="text-lg text-gray-600 mb-4">
//             Most agencies say:
//           </p>

//           <p className="text-gray-400 italic mb-6">
//             “We build websites and apps.”
//           </p>

//           <p className="text-2xl md:text-3xl font-bold text-gray-900">
//             We engineer{" "}
//             <span className="text-[#14B8A6]">
//               Business Growth Systems.
//             </span>
//           </p>

//           <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             NNC Digital Solutions is a full-stack automation and technology partner
//             helping businesses scale with structure, systems, and smart execution.
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";

const NAVY = "#0B1525";
const TEAL = "#00C9A7";
const G    = "linear-gradient(135deg, #00C9A7 0%, #1B8F6E 100%)";

export default function FinalCTA() {
  return (
    <section style={{ padding: "0 48px 100px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }}
        style={{
          background: G,
          borderRadius: 28,
          padding: "80px 72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 48,
          flexWrap: "wrap",
          position: "relative",
          overflow: "hidden",
        }}>

        {/* Decorative blobs */}
        <div style={{ position: "absolute", right: -80, bottom: -80, width: 400, height: 400, borderRadius: "50%", background: "rgba(0,0,0,0.1)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: "40%", top: -120, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.07)", pointerEvents: "none" }} />

        {/* Left text */}
        <div style={{ position: "relative" }}>
          <h2 className="syne" style={{ fontSize: "clamp(28px,3.5vw,50px)", color: "#fff", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.025em", marginBottom: 18 }}>
            Ready to Transform<br />Your Business Operations?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.78)", maxWidth: 440, lineHeight: 1.68 }}>
            Let&apos;s design a digital system that gives you clarity, control, and predictable growth.
            One call — no commitment, no sales deck.
          </p>
        </div>

        {/* Right CTAs */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14, position: "relative", minWidth: 240 }}>
          <button className="btn-white">Schedule a Consultation →</button>
          <button
            style={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "14px 32px", borderRadius: 50, fontSize: 14, fontFamily: "Inter,sans-serif", cursor: "pointer", transition: "background 0.25s", textAlign: "center" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.2)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)"; }}>
            Explore Our Solutions
          </button>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", textAlign: "center" }}>
            Response within 24 hours. No sales pressure.
          </p>
        </div>

      </motion.div>
    </section>
  );
}