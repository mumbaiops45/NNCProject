

// "use client";

// import { motion } from "framer-motion";

// const solutions = [
//   {
//     title: "Digital Foundation",
//     items: [
//       "Enterprise Website Development",
//       "Custom Web Applications",
//       "Scalable Mobile Apps",
//       "UI/UX Engineering",
//     ],
//   },
//   {
//     title: "CRM & Automation",
//     items: [
//       "Custom CRM Development",
//       "Sales Pipeline Automation",
//       "Marketing Automation",
//       "WhatsApp & API Integrations",
//       "CRM Dashboard & Analytics",
//     ],
//   },
//   {
//     title: "Business Systems",
//     items: [
//       "ERP Development",
//       "Inventory & Billing Systems",
//       "Lead Management Software",
//       "Vendor & HR Management Systems",
//     ],
//   },
//   {
//     title: "Growth & Optimization",
//     items: [
//       "SEO & Performance Marketing",
//       "Funnel Engineering",
//       "Conversion Rate Optimization",
//       "Analytics & Reporting Systems",
//     ],
//   },
// ];

// export default function CoreSolutions() {
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
//           <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
//             Our Core Solutions
//           </h2>

//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Structured digital systems designed for scalability, automation,
//             and long-term operational efficiency.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 gap-12">
//           {solutions.map((solution, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="group relative bg-white rounded-2xl p-12 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
//             >
//               {/* Animated Left Accent Bar */}
//               <div className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-[#14B8A6] transition-all duration-300 rounded-l-2xl"></div>

//               {/* Title */}
//               <h3 className="text-2xl font-semibold mb-8 text-black transition-colors duration-300 group-hover:text-[#14B8A6]">
//                 {solution.title}
//               </h3>

//               {/* List */}
//               <ul className="space-y-5">
//                 {solution.items.map((item, i) => (
//                   <motion.li
//                     key={i}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: i * 0.05 }}
//                     className="flex items-start gap-4 text-black transition-colors duration-300 group-hover:text-[#14B8A6]"
//                   >
//                     <span className="w-2 h-2 mt-2 rounded-full bg-black group-hover:bg-[#14B8A6] transition-all duration-300"></span>
//                     <span className="leading-relaxed">{item}</span>
//                   </motion.li>
//                 ))}
//               </ul>

//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const solutions = [
  {
    title: "Digital Foundation",
    items: [
      "Enterprise Website Development",
      "Custom Web Applications",
      "Scalable Mobile Apps",
      "UI/UX Engineering",
    ],
  },
  {
    title: "CRM & Automation",
    items: [
      "Custom CRM Development",
      "Sales Pipeline Automation",
      "Marketing Automation",
      "WhatsApp & API Integrations",
      "CRM Dashboard & Analytics",
    ],
  },
  {
    title: "Business Systems",
    items: [
      "ERP Development",
      "Inventory & Billing Systems",
      "Lead Management Software",
      "Vendor & HR Management Systems",
    ],
  },
  {
    title: "Growth & Optimization",
    items: [
      "SEO & Performance Marketing",
      "Funnel Engineering",
      "Conversion Rate Optimization",
      "Analytics & Reporting Systems",
    ],
  },
];

export default function CoreSolutions() {
  return (
    <section className="relative py-32 px-6 md:px-16 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#14B8A6]/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Core Solutions
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Structured digital ecosystems engineered for scalability,
            automation, and long-term operational dominance.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -12 }}
              className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-12 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/0 via-[#14B8A6]/5 to-[#14B8A6]/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Title */}
              <h3 className="relative text-2xl font-semibold mb-8 text-black group-hover:text-[#14B8A6] transition-colors duration-300">
                {solution.title}
              </h3>

              {/* List */}
              <ul className="relative space-y-5">
                {solution.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4 text-gray-800 group-hover:text-black transition-all duration-300"
                  >
                    <CheckCircle
                      size={20}
                      className="text-[#14B8A6] mt-1 shrink-0"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#14B8A6] group-hover:w-full transition-all duration-500"></div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}