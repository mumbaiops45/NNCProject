// "use client";

// import { motion } from "framer-motion";

// const blogs = [
//   {
//     title: "CRM Implementation Guide",
//     excerpt:
//       "A practical step-by-step guide to implementing a scalable CRM system for growing businesses.",
//   },
//   {
//     title: "Mobile App Cost Breakdown",
//     excerpt:
//       "Understand the real cost factors behind building enterprise-grade mobile applications.",
//   },
//   {
//     title: "ERP vs CRM Explained",
//     excerpt:
//       "A clear comparison of ERP and CRM systems and when your business needs each.",
//   },
//   {
//     title: "Automation Strategies for Growing Businesses",
//     excerpt:
//       "How workflow automation can reduce operational costs and improve productivity.",
//   },
//   {
//     title: "How to Increase Lead Conversion by 2X",
//     excerpt:
//       "Data-driven strategies to improve sales pipeline efficiency and conversion rates.",
//   },
// ];

// export default function BlogInsights() {
//   return (
//     <section className="py-28 px-6 md:px-16 bg-white">
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
//             Insights on{" "}
//             <span className="text-[#14B8A6]">
//               Technology, Automation & Digital Growth
//             </span>
//           </h2>
//         </motion.div>

//         {/* Blog Grid */}
//         <div className="grid md:grid-cols-3 gap-10">

//           {blogs.map((blog, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.08 }}
//               whileHover={{ y: -6 }}
//               className="group border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:shadow-xl"
//             >
//               <h3 className="text-xl font-semibold text-black mb-4 transition-colors duration-300 group-hover:text-[#14B8A6]">
//                 {blog.title}
//               </h3>

//               <p className="text-gray-700 mb-6 leading-relaxed">
//                 {blog.excerpt}
//               </p>

//               <button className="text-black font-medium transition-colors duration-300 group-hover:text-[#14B8A6]">
//                 Read More →
//               </button>
//             </motion.div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "CRM Implementation Guide",
    excerpt:
      "A practical step-by-step guide to implementing a scalable CRM system for growing businesses.",
    tag: "CRM",
  },
  {
    title: "Mobile App Cost Breakdown",
    excerpt:
      "Understand the real cost factors behind building enterprise-grade mobile applications.",
    tag: "Mobile",
  },
  {
    title: "ERP vs CRM Explained",
    excerpt:
      "A clear comparison of ERP and CRM systems and when your business needs each.",
    tag: "ERP",
  },
  {
    title: "Automation Strategies for Growing Businesses",
    excerpt:
      "How workflow automation can reduce operational costs and improve productivity.",
    tag: "Automation",
  },
  {
    title: "How to Increase Lead Conversion by 2X",
    excerpt:
      "Data-driven strategies to improve sales pipeline efficiency and conversion rates.",
    tag: "Growth",
  },
];

export default function BlogInsights() {
  return (
    <section className="relative py-32 px-6 md:px-16 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#14B8A6]/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Insights on{" "}
            <span className="text-[#14B8A6] relative">
              Technology, Automation & Digital Growth
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#14B8A6]/30 rounded-full"></span>
            </span>
          </h2>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-10 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/0 via-[#14B8A6]/5 to-[#14B8A6]/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Tag Badge */}
              <div className="relative inline-block mb-5 px-4 py-1 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] text-sm font-semibold">
                {blog.tag}
              </div>

              {/* Title */}
              <h3 className="relative text-xl font-semibold text-black mb-4 group-hover:text-[#14B8A6] transition-colors duration-300">
                {blog.title}
              </h3>

              {/* Excerpt */}
              <p className="relative text-gray-700 mb-8 leading-relaxed">
                {blog.excerpt}
              </p>

              {/* CTA */}
              <div className="relative flex items-center gap-2 font-medium text-black group-hover:text-[#14B8A6] transition-colors duration-300">
                Read More
                <ArrowRight size={18} />
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#14B8A6] group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}