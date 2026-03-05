// // "use client";

// // import { motion } from "framer-motion";

// // const industries = [
// //   "Healthcare",
// //   "Real Estate",
// //   "E-commerce",
// //   "Manufacturing",
// //   "Education",
// //   "Hospitality",
// //   "Logistics",
// //   "Finance",
// //   "Professional Services",
// // ];

// // export default function IndustriesWeServe() {
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
// //           <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
// //             Helping Businesses Across{" "}
// //             <span className="text-[#14B8A6]">Industries</span>
// //           </h2>

// //           <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
// //             Every industry has unique operational challenges. We build customized
// //             digital ecosystems tailored to industry-specific workflows.
// //           </p>
// //         </motion.div>

// //         {/* Industries Grid */}
// //         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
// //           {industries.map((industry, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: index * 0.05 }}
// //               whileHover={{ y: -6 }}
// //               className="group border border-gray-200 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-xl bg-white"
// //             >
// //               <h3 className="text-xl font-semibold text-black transition-colors duration-300 group-hover:text-[#14B8A6]">
// //                 {industry}
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
// import {
//   HeartPulse,
//   Building2,
//   ShoppingCart,
//   Factory,
//   GraduationCap,
//   Hotel,
//   Truck,
//   Landmark,
//   Briefcase,
// } from "lucide-react";

// const industries = [
//   { name: "Healthcare", icon: HeartPulse },
//   { name: "Real Estate", icon: Building2 },
//   { name: "E-commerce", icon: ShoppingCart },
//   { name: "Manufacturing", icon: Factory },
//   { name: "Education", icon: GraduationCap },
//   { name: "Hospitality", icon: Hotel },
//   { name: "Logistics", icon: Truck },
//   { name: "Finance", icon: Landmark },
//   { name: "Professional Services", icon: Briefcase },
// ];

// export default function IndustriesWeServe() {
//   return (
//     <section className="relative py-32 px-6 md:px-16 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#14B8A6]/10 blur-[120px] rounded-full"></div>

//       <div className="relative max-w-7xl mx-auto">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-24"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
//             Helping Businesses Across{" "}
//             <span className="text-[#14B8A6] relative">
//               Industries
//               <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#14B8A6]/30 rounded-full"></span>
//             </span>
//           </h2>

//           <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
//             Every industry has unique operational challenges. We build
//             customized digital ecosystems tailored to
//             industry-specific workflows.
//           </p>
//         </motion.div>

//         {/* Industries Grid */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
//           {industries.map((industry, index) => {
//             const Icon = industry.icon;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.08 }}
//                 whileHover={{ y: -10 }}
//                 className="group relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-10 text-center shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
//               >
//                 {/* Hover Glow Layer */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/0 via-[#14B8A6]/5 to-[#14B8A6]/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

//                 {/* Icon */}
//                 <div className="relative flex justify-center mb-6">
//                   <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#14B8A6]/10 group-hover:bg-[#14B8A6]/20 transition duration-300">
//                     <Icon size={26} className="text-[#14B8A6]" />
//                   </div>
//                 </div>

//                 {/* Title */}
//                 <h3 className="relative text-xl font-semibold text-black group-hover:text-[#14B8A6] transition-colors duration-300">
//                   {industry.name}
//                 </h3>

//                 {/* Bottom Accent Line */}
//                 <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#14B8A6] group-hover:w-full transition-all duration-500"></div>
//               </motion.div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";

const NAVY  = "#0B1525";
const NAVY2 = "#0E1C30";
const TEAL  = "#00C9A7";

const INDUSTRIES = [
  { icon: "🏥", name: "Healthcare" },
  { icon: "🏢", name: "Real Estate" },
  { icon: "🛒", name: "E-commerce" },
  { icon: "🏭", name: "Manufacturing" },
  { icon: "🎓", name: "Education" },
  { icon: "🍽",  name: "Hospitality" },
  { icon: "🚚", name: "Logistics" },
  { icon: "💳", name: "Finance" },
  { icon: "💼", name: "Professional Services" },
];

export default function IndustriesWeServe() {
  return (
    <section style={{ padding: "100px 48px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "center" }}>

        {/* Left */}
        <div>
          <div className="eye"><span className="eye-bar" /><span className="eye-txt mono">Industries we serve</span></div>
          <h2 className="syne" style={{ fontSize: "clamp(30px,3.5vw,46px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>
            Helping Businesses<br />
            <span className="gtxt">Across Industries</span>
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(11,21,37,0.55)", maxWidth: 320 }}>
            Every industry has unique operational challenges. We build customized digital ecosystems tailored to industry-specific workflows.
          </p>
        </div>

        {/* Right */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {INDUSTRIES.map((ind, i) => (
            <motion.div key={i} className="ichip"
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{ background: NAVY2, color: "rgba(255,255,255,0.72)", borderColor: "rgba(0,201,167,0.2)" }}>
              {ind.icon} {ind.name}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}