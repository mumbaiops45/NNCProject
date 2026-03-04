// // "use client";

// // import { motion } from "framer-motion";
// // import {
// //   CheckCircle,
// //   Database,
// //   Workflow,
// //   BarChart3,
// //   Layers,
// // } from "lucide-react";

// // export default function AboutPage() {
// //   return (
// //     <div className="bg-white text-gray-800">

// //       {/* ================= HERO ================= */}
// //       <section className="py-28 px-6 text-center border-b">
// //         <motion.h1
// //           initial={{ opacity: 0, y: 40 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="text-4xl md:text-5xl font-bold mb-6"
// //         >
// //           Who We Are
// //         </motion.h1>

// //         <motion.p
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 0.3 }}
// //           className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed"
// //         >
// //           NNC Digital Solutions is the technology and automation division
// //           backed by Nakshatra Namaha Creations. We design structured CRM
// //           and automation ecosystems that help businesses scale with clarity
// //           and control.
// //         </motion.p>
// //       </section>

// //       {/* ================= STORY ================= */}
// //       <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

// //         <motion.div
// //           initial={{ opacity: 0, x: -40 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.6 }}
// //         >
// //           <h2 className="text-3xl font-semibold mb-6 text-[#14B8A6]">
// //             Why We Started
// //           </h2>

// //           <p className="text-gray-600 leading-relaxed mb-6">
// //             After delivering branding and performance marketing solutions,
// //             we noticed a recurring problem — businesses generated leads
// //             but lacked structured systems to convert and manage them.
// //           </p>

// //           <p className="text-gray-600 leading-relaxed">
// //             This insight led to the formation of NNC Digital Solutions —
// //             focused purely on custom CRM development and automation systems.
// //           </p>
// //         </motion.div>

// //         <motion.div
// //           initial={{ opacity: 0, x: 40 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="bg-gray-50 p-10 rounded-xl border"
// //         >
// //           <h3 className="text-xl font-semibold mb-4">
// //             We don’t build generic CRM tools.
// //           </h3>
// //           <p className="text-gray-600">
// //             We engineer complete operational ecosystems aligned with
// //             how your business actually functions.
// //           </p>
// //         </motion.div>
// //       </section>

// //       {/* ================= WHY CRM ================= */}
// //       <section className="py-24 px-6 bg-gray-50 border-t">
// //         <div className="max-w-6xl mx-auto text-center mb-16">
// //           <h2 className="text-3xl font-semibold">
// //             Why Your Business Needs a Custom CRM
// //           </h2>
// //         </div>

// //         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
// //           {[
// //             "Centralized customer data",
// //             "Automated follow-ups",
// //             "Pipeline visibility",
// //             "Real-time dashboards",
// //             "Improved accountability",
// //             "Reduced manual tasks",
// //           ].map((item, index) => (
// //             <motion.div
// //               key={index}
// //               whileHover={{ y: -6 }}
// //               className="bg-white p-6 rounded-lg border hover:shadow-md transition"
// //             >
// //               <CheckCircle
// //                 className="text-[#14B8A6] mb-4"
// //                 size={20}
// //               />
// //               <p className="text-gray-700">{item}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* ================= SERVICES ================= */}
// //       <section className="py-24 px-6 border-t">
// //         <div className="max-w-6xl mx-auto text-center mb-16">
// //           <h2 className="text-3xl font-semibold">
// //             Our CRM Development Services
// //           </h2>
// //         </div>

// //         <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

// //           {[
// //             {
// //               icon: <Database size={22} />,
// //               title: "Fully Customized CRM",
// //               desc: "Lead management, pipelines, dashboards and reporting tailored to your workflow."
// //             },
// //             {
// //               icon: <Workflow size={22} />,
// //               title: "Sales Automation",
// //               desc: "Automated allocation, reminders, deal tracking and analytics."
// //             },
// //             {
// //               icon: <BarChart3 size={22} />,
// //               title: "Marketing Integration",
// //               desc: "WhatsApp API, email automation and campaign tracking."
// //             },
// //             {
// //               icon: <Layers size={22} />,
// //               title: "CRM Integration & Migration",
// //               desc: "ERP, billing, website and third-party integration."
// //             }
// //           ].map((service, i) => (
// //             <motion.div
// //               key={i}
// //               whileHover={{ scale: 1.02 }}
// //               className="bg-gray-50 p-8 rounded-lg border hover:shadow-md transition"
// //             >
// //               <div className="text-[#14B8A6] mb-4">{service.icon}</div>
// //               <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
// //               <p className="text-gray-600 text-sm leading-relaxed">
// //                 {service.desc}
// //               </p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* ================= PROCESS ================= */}
// //       <section className="py-24 px-6 bg-gray-50 border-t">
// //         <div className="max-w-6xl mx-auto text-center mb-16">
// //           <h2 className="text-3xl font-semibold">
// //             Our Development Process
// //           </h2>
// //         </div>

// //         <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
// //           {[
// //             "Business Analysis",
// //             "System Architecture Planning",
// //             "UI/UX Design",
// //             "Agile Development",
// //             "Deployment & Training",
// //             "Continuous Optimization"
// //           ].map((step, index) => (
// //             <motion.div
// //               key={index}
// //               whileHover={{ y: -6 }}
// //               className="bg-white p-6 rounded-lg border hover:shadow-md transition"
// //             >
// //               <p className="text-[#14B8A6] font-medium mb-2">
// //                 Step {index + 1}
// //               </p>
// //               <p className="text-gray-700">{step}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* ================= CTA ================= */}
// //       <section className="py-28 px-6 text-center border-t">
// //         <h2 className="text-3xl md:text-4xl font-semibold mb-6">
// //           Ready to Build a Structured Revenue System?
// //         </h2>

// //         <p className="text-gray-600 max-w-2xl mx-auto mb-8">
// //           Let’s design a custom CRM platform that gives you clarity,
// //           automation and predictable growth.
// //         </p>

// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.97 }}
// //           className="bg-[#14B8A6] text-white px-8 py-4 rounded-full font-semibold shadow-md"
// //         >
// //           Schedule Your Strategy Consultation
// //         </motion.button>
// //       </section>

// //     </div>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import {
//   CheckCircle,
//   Database,
//   Workflow,
//   BarChart3,
//   Layers,
// } from "lucide-react";

// export default function AboutPage() {
//   return (
//     <div className="bg-[#f7f9fb] text-gray-800">

//       {/* ================= HERO ================= */}
//       <section className="py-32 px-6 text-center bg-white">
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl font-bold mb-6 tracking-tight"
//         >
//           Who We Are
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
//         >
//           NNC Digital Solutions is the technology and automation division
//           backed by Nakshatra Namaha Creations.  
//           We design structured CRM and automation ecosystems that help
//           businesses scale with clarity and control.
//         </motion.p>
//       </section>

//       {/* ================= STORY ================= */}
//       <section className="py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl font-semibold mb-6">
//             Why We Started
//           </h2>

//           <p className="text-gray-600 leading-relaxed mb-6">
//             After delivering branding and performance marketing solutions,
//             we discovered a common issue — businesses generated leads,
//             but lacked structured systems to convert and manage them.
//           </p>

//           <p className="text-gray-600 leading-relaxed">
//             That insight led to the formation of NNC Digital Solutions —
//             focused purely on custom CRM development and automation systems.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-white p-10 rounded-2xl shadow-sm border"
//         >
//           <h3 className="text-xl font-semibold mb-4">
//             We don’t build generic CRM tools.
//           </h3>
//           <p className="text-gray-600">
//             We engineer complete operational ecosystems aligned with
//             how your business actually works.
//           </p>
//         </motion.div>
//       </section>

//       {/* ================= WHY CRM ================= */}
//       <section className="py-28 px-6 bg-white border-t">
//         <div className="max-w-6xl mx-auto text-center mb-20">
//           <h2 className="text-3xl font-semibold">
//             Why Your Business Needs a Custom CRM
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {[
//             "Centralized customer data",
//             "Automated follow-ups",
//             "Pipeline visibility",
//             "Real-time dashboards",
//             "Improved accountability",
//             "Reduced manual tasks",
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -8 }}
//               className="bg-[#f7f9fb] p-8 rounded-xl border hover:shadow-md transition"
//             >
//               <CheckCircle className="text-teal-600 mb-4" size={22} />
//               <p className="text-gray-700 font-medium">{item}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ================= SERVICES ================= */}
//       <section className="py-28 px-6 border-t">
//         <div className="max-w-6xl mx-auto text-center mb-20">
//           <h2 className="text-3xl font-semibold">
//             Our CRM Development Services
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

//           {[
//             {
//               icon: <Database size={24} />,
//               title: "Fully Customized CRM",
//               desc: "Lead management, pipelines, dashboards and reporting tailored to your workflow."
//             },
//             {
//               icon: <Workflow size={24} />,
//               title: "Sales Automation",
//               desc: "Automated allocation, reminders, deal tracking and analytics."
//             },
//             {
//               icon: <BarChart3 size={24} />,
//               title: "Marketing Integration",
//               desc: "WhatsApp API, email automation and campaign tracking."
//             },
//             {
//               icon: <Layers size={24} />,
//               title: "CRM Integration & Migration",
//               desc: "ERP, billing, website and third-party integration."
//             }
//           ].map((service, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.02 }}
//               className="bg-white p-10 rounded-2xl shadow-sm border hover:shadow-md transition"
//             >
//               <div className="text-teal-600 mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {service.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="py-32 px-6 text-center bg-white border-t">
//         <h2 className="text-4xl font-semibold mb-6">
//           Ready to Build a Structured Revenue System?
//         </h2>

//         <p className="text-gray-600 max-w-2xl mx-auto mb-10">
//           Let’s design a custom CRM platform that gives you clarity,
//           automation and predictable growth.
//         </p>

//         <motion.button
//           whileHover={{ scale: 1.06 }}
//           whileTap={{ scale: 0.98 }}
//           className="bg-teal-600 text-white px-10 py-4 rounded-full font-semibold shadow-md hover:shadow-lg transition"
//         >
//           Schedule Your Strategy Consultation
//         </motion.button>
//       </section>

//     </div>
//   );
// }a
"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Database,
  Workflow,
  BarChart3,
  Layers,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#f8fafc] text-gray-800 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-32 px-6 text-center bg-white">
        
        {/* Soft Teal Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#14B8A6]/10 blur-[120px] rounded-full" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-5xl font-bold mb-6 tracking-tight"
        >
          Who We Are
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
        >
          NNC Digital Solutions is the technology and automation division
          backed by Nakshatra Namaha Creations.  
          We design structured CRM and automation ecosystems that help
          businesses scale with clarity and control.
        </motion.p>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6 relative inline-block">
            Why We Started
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-[#14B8A6] rounded-full" />
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            After delivering branding and performance marketing solutions,
            we discovered a common issue — businesses generated leads,
            but lacked structured systems to convert and manage them.
          </p>

          <p className="text-gray-600 leading-relaxed">
            That insight led to the formation of NNC Digital Solutions —
            focused purely on custom CRM development and automation systems.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white p-10 rounded-2xl border border-[#14B8A6]/20 shadow-sm hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#14B8A6]">
            We don’t build generic CRM tools.
          </h3>
          <p className="text-gray-600">
            We engineer complete operational ecosystems aligned with
            how your business actually works.
          </p>
        </motion.div>
      </section>

      {/* ================= WHY CRM ================= */}
      <section className="py-28 px-6 bg-white border-t">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-semibold">
            Why Your Business Needs a Custom CRM
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Centralized customer data",
            "Automated follow-ups",
            "Pipeline visibility",
            "Real-time dashboards",
            "Improved accountability",
            "Reduced manual tasks",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-[#f0fdfa] p-8 rounded-xl border border-[#14B8A6]/20 hover:border-[#14B8A6] hover:shadow-md transition"
            >
              <CheckCircle className="text-[#14B8A6] mb-4" size={22} />
              <p className="text-gray-700 font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-28 px-6 border-t bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-semibold">
            Our CRM Development Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {[
            {
              icon: <Database size={24} />,
              title: "Fully Customized CRM",
              desc: "Lead management, pipelines, dashboards and reporting tailored to your workflow."
            },
            {
              icon: <Workflow size={24} />,
              title: "Sales Automation",
              desc: "Automated allocation, reminders, deal tracking and analytics."
            },
            {
              icon: <BarChart3 size={24} />,
              title: "Marketing Integration",
              desc: "WhatsApp API, email automation and campaign tracking."
            },
            {
              icon: <Layers size={24} />,
              title: "CRM Integration & Migration",
              desc: "ERP, billing, website and third-party integration."
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-2xl border border-[#14B8A6]/10 hover:border-[#14B8A6] shadow-sm hover:shadow-lg transition"
            >
              <div className="text-[#14B8A6] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 px-6 text-center bg-[#14B8A6] text-white">
        <h2 className="text-4xl font-semibold mb-6">
          Ready to Build a Structured Revenue System?
        </h2>

        <p className="max-w-2xl mx-auto mb-10 text-white/90">
          Let’s design a custom CRM platform that gives you clarity,
          automation and predictable growth.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-white text-[#14B8A6] px-10 py-4 rounded-full font-semibold shadow-md"
        >
          Schedule Your Strategy Consultation
        </motion.button>
      </section>

    </div>
  );
}