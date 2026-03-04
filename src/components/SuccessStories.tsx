// "use client";

// import { motion } from "framer-motion";

// const stories = [
//   {
//     title: "Enterprise CRM for Manufacturing Client",
//     points: [
//       "Automated dealer management",
//       "Real-time sales tracking",
//       "35% improvement in operational efficiency",
//     ],
//   },
//   {
//     title: "Mobile App + CRM for Healthcare Client",
//     points: [
//       "Integrated booking system",
//       "WhatsApp notifications",
//       "Increased repeat bookings by 42%",
//     ],
//   },
// ];

// export default function SuccessStories() {
//   return (
//     <section className="py-28 px-6 md:px-16 bg-white">
//       <div className="max-w-7xl mx-auto">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-black">
//             Real Systems.{" "}
//             <span className="text-[#14B8A6]">Real Results.</span>
//           </h2>
//         </motion.div>

//         {/* Stories Grid */}
//         <div className="grid md:grid-cols-2 gap-12">
//           {stories.map((story, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -6 }}
//               className="group border border-gray-200 rounded-xl p-10 transition-all duration-300 hover:shadow-xl"
//             >
//               <h3 className="text-2xl font-semibold text-black mb-6 transition-colors duration-300 group-hover:text-[#14B8A6]">
//                 {story.title}
//               </h3>

//               <ul className="space-y-4">
//                 {story.points.map((point, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start text-gray-800"
//                   >
//                     <span className="text-[#14B8A6] mr-3 mt-1">•</span>
//                     {point}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>

//         {/* Button */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="text-center mt-20"
//         >
//           <button className="px-10 py-4 border border-black text-black rounded-full font-medium transition-all duration-300 hover:bg-[#14B8A6] hover:border-[#14B8A6] hover:text-white">
//             View Case Studies
//           </button>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { TrendingUp, CheckCircle } from "lucide-react";

const stories = [
  {
    title: "Enterprise CRM for Manufacturing Client",
    highlight: "35% Efficiency Boost",
    points: [
      "Automated dealer management",
      "Real-time sales tracking",
      "Operational workflow automation",
    ],
  },
  {
    title: "Mobile App + CRM for Healthcare Client",
    highlight: "42% Increase in Repeat Bookings",
    points: [
      "Integrated booking system",
      "WhatsApp notifications",
      "Patient lifecycle tracking",
    ],
  },
];

export default function SuccessStories() {
  return (
    <section className="relative py-32 px-6 md:px-16 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#14B8A6]/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Real Systems.{" "}
            <span className="text-[#14B8A6] relative">
              Real Results.
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#14B8A6]/30 rounded-full"></span>
            </span>
          </h2>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -12 }}
              className="group relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-12 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/0 via-[#14B8A6]/5 to-[#14B8A6]/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Highlight Badge */}
              <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] font-semibold text-sm mb-6">
                <TrendingUp size={16} />
                {story.highlight}
              </div>

              {/* Title */}
              <h3 className="relative text-2xl font-semibold text-black mb-8 group-hover:text-[#14B8A6] transition-colors duration-300">
                {story.title}
              </h3>

              {/* Points */}
              <ul className="relative space-y-5">
                {story.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-800">
                    <CheckCircle
                      size={20}
                      className="text-[#14B8A6] mt-1 shrink-0"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#14B8A6] group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-24"
        >
          <button className="px-12 py-4 bg-black text-white rounded-full font-semibold transition-all duration-300 hover:bg-[#14B8A6] hover:scale-105 shadow-lg">
            View Case Studies
          </button>
        </motion.div>

      </div>
    </section>
  );
}