

// // "use client";

// // import { motion } from "framer-motion";

// // const sentence = {
// //   hidden: {},
// //   visible: {
// //     transition: { staggerChildren: 0.08 },
// //   },
// // };

// // const word = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: { opacity: 1, y: 0 },
// // };

// // export default function HomePage() {
// //   return (
// //     <div className="overflow-hidden">

// //       {/* ================= HERO SECTION ================= */}
// //       <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0B1B3A] via-[#0F172A] to-black text-white px-6 md:px-16 overflow-hidden">

// //         {/* Glow Background */}
// //         <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#14B8A6] opacity-10 blur-[150px] animate-pulse"></div>
// //         <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600 opacity-10 blur-[150px] animate-pulse"></div>

// //         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

// //           {/* LEFT CONTENT */}
// //           <div className="space-y-8">

// //             {/* Animated Heading */}
// //             <motion.h1
// //               variants={sentence}
// //               initial="hidden"
// //               animate="visible"
// //               className="text-5xl md:text-7xl font-bold leading-tight"
// //             >
// //               {"Build Once.".split(" ").map((w, i) => (
// //                 <motion.span
// //                   key={i}
// //                   variants={word}
// //                   transition={{ duration: 0.6 }}
// //                   className="inline-block mr-3"
// //                 >
// //                   {w}
// //                 </motion.span>
// //               ))}

// //               <br />

// //               {"Scale Everywhere.".split(" ").map((w, i) => (
// //                 <motion.span
// //                   key={i}
// //                   variants={word}
// //                   transition={{ duration: 0.6 }}
// //                   className="inline-block mr-3 animated-gradient-text"
// //                 >
// //                   {w}
// //                 </motion.span>
// //               ))}
// //             </motion.h1>

// //             {/* Animated Subtext */}
// //             <motion.p
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 1, duration: 0.8 }}
// //               className="text-lg text-gray-300 max-w-xl"
// //             >
// //               We engineer scalable digital systems that automate operations,
// //               accelerate revenue, and transform growing businesses into
// //               high-performance enterprises.
// //             </motion.p>

// //             {/* Buttons */}
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 1.4 }}
// //               className="flex gap-6 flex-wrap"
// //             >
// //               <button className="bg-[#14B8A6] hover:bg-[#0EA5A4] px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
// //                 Book a Strategy Call
// //               </button>

// //               <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300">
// //                 Explore Our Solutions
// //               </button>
// //             </motion.div>
// //           </div>

// //           {/* RIGHT FORM */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 40 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ delay: 0.6 }}
// //             className="bg-white text-gray-900 p-10 rounded-2xl shadow-2xl"
// //           >
// //             <h3 className="text-2xl font-bold mb-6">
// //               Need a Digital System That Grows Your Business?
// //             </h3>

// //             <form className="space-y-4">
// //               <input className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#14B8A6] outline-none" placeholder="Name" />
// //               <input className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#14B8A6] outline-none" placeholder="Email" />
// //               <input className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#14B8A6] outline-none" placeholder="Company" />

// //               <button className="w-full bg-[#0B1B3A] hover:bg-black text-white py-3 rounded-lg font-semibold transition-all">
// //                 Get Started
// //               </button>
// //             </form>
// //           </motion.div>

// //         </div>
// //       </section>

// //       {/* ================= FLOATING TRUST CARDS ================= */}

// //       {/* ================= FLOATING TRUST CARDS ================= */}
// // <section className="relative z-20 -mt-24 px-6 md:px-16">
// //   <div className="max-w-6xl mx-auto">

// //     <motion.div
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: true }}
// //       transition={{ staggerChildren: 0.2 }}
// //       className="grid grid-cols-2 md:grid-cols-4 gap-6"
// //     >
// //       {[
// //         { number: "100+", label: "Projects Delivered" },
// //         { number: "10+", label: "Years Experience" },
// //         { number: "Multi", label: "Industry Expertise" },
// //         { number: "Global", label: "Clientele" },
// //       ].map((item, i) => (
// //         <motion.div
// //           key={i}
// //           variants={{
// //             hidden: { opacity: 0, y: 60 },
// //             visible: { opacity: 1, y: 0 },
// //           }}
// //           transition={{ duration: 0.8, ease: "easeOut" }}
// //           whileHover={{ y: -10, scale: 1.05 }}
// //           className="bg-white rounded-2xl shadow-xl p-8 text-center transition-all duration-300"
// //         >
// //           <h3 className="text-3xl font-bold text-[#14B8A6]">
// //             {item.number}
// //           </h3>
// //           <p className="text-gray-600 mt-2 text-sm md:text-base">
// //             {item.label}
// //           </p>
// //         </motion.div>
// //       ))}
// //     </motion.div>

// //   </div>
// // </section>

// //      {/* ================================================= */}
// // {/* OUR CORE SOLUTIONS – ENTERPRISE GRID */}
// // {/* ================================================= */}

// // <section className="relative py-28 px-6 md:px-16 bg-[#0B1220] text-white overflow-hidden">

// //   {/* Background Glow */}
// //   <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#14B8A6] opacity-10 blur-[180px]" />
// //   <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 opacity-10 blur-[180px]" />

// //   <div className="max-w-7xl mx-auto relative z-10">

// //     {/* Heading */}
// //     <div className="text-center mb-20">
// //       <h2 className="text-5xl font-bold mb-6">
// //         Our <span className="bg-gradient-to-r from-[#14B8A6] to-blue-500 bg-clip-text text-transparent">
// //           Core Solutions
// //         </span>
// //       </h2>
// //       <p className="text-gray-400 max-w-2xl mx-auto">
// //         We engineer complete digital ecosystems that automate operations,
// //         structure workflows, and accelerate measurable growth.
// //       </p>
// //     </div>

// //     {/* GRID */}
// //     <div className="grid md:grid-cols-2 gap-12">

// //       {/* ================================================= */}
// //       {/* 1️⃣ DIGITAL FOUNDATION */}
// //       {/* ================================================= */}

// //       <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-[#14B8A6] transition duration-500 hover:shadow-[0_0_40px_rgba(20,184,166,0.2)]">

// //         <h3 className="text-2xl font-bold mb-6 text-[#14B8A6]">
// //           Digital Foundation
// //         </h3>

// //         <ul className="space-y-4 text-gray-300">
// //           <li>• Enterprise Website Development</li>
// //           <li>• Custom Web Applications</li>
// //           <li>• Scalable Mobile Apps</li>
// //           <li>• UI/UX Engineering</li>
// //         </ul>

// //         <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-gradient-to-r from-[#14B8A6] to-blue-500 pointer-events-none" />
// //       </div>

// //       {/* ================================================= */}
// //       {/* 2️⃣ CRM & AUTOMATION */}
// //       {/* ================================================= */}

// //       <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-blue-500 transition duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]">

// //         <h3 className="text-2xl font-bold mb-6 text-blue-400">
// //           CRM & Automation
// //         </h3>

// //         <ul className="space-y-4 text-gray-300">
// //           <li>• Custom CRM Development</li>
// //           <li>• Sales Pipeline Automation</li>
// //           <li>• Marketing Automation</li>
// //           <li>• WhatsApp & API Integrations</li>
// //           <li>• CRM Dashboard & Analytics</li>
// //         </ul>
// //       </div>

// //       {/* ================================================= */}
// //       {/* 3️⃣ BUSINESS SYSTEMS */}
// //       {/* ================================================= */}

// //       <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-purple-500 transition duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]">

// //         <h3 className="text-2xl font-bold mb-6 text-purple-400">
// //           Business Systems
// //         </h3>

// //         <ul className="space-y-4 text-gray-300">
// //           <li>• ERP Development</li>
// //           <li>• Inventory & Billing Systems</li>
// //           <li>• Lead Management Software</li>
// //           <li>• Vendor & HR Management Systems</li>
// //         </ul>
// //       </div>

// //       {/* ================================================= */}
// //       {/* 4️⃣ GROWTH & OPTIMIZATION */}
// //       {/* ================================================= */}

// //       <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-pink-500 transition duration-500 hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]">

// //         <h3 className="text-2xl font-bold mb-6 text-pink-400">
// //           Growth & Optimization
// //         </h3>

// //         <ul className="space-y-4 text-gray-300">
// //           <li>• SEO & Performance Marketing</li>
// //           <li>• Funnel Engineering</li>
// //           <li>• Conversion Rate Optimization</li>
// //           <li>• Analytics & Reporting Systems</li>
// //         </ul>
// //       </div>

// //     </div>

// //   </div>
// // </section>

// //       {/* ================= FINAL CTA ================= */}
// //       <section className="py-20 bg-[#0B1B3A] text-white text-center">
// //         <h2 className="text-4xl font-bold mb-6">
// //           Ready to Transform Your Business Operations?
// //         </h2>
// //         <p className="max-w-2xl mx-auto mb-8 text-gray-300">
// //           Let’s design a digital system that gives you clarity, control,
// //           and predictable growth.
// //         </p>

// //         <button className="bg-[#14B8A6] px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all">
// //           Schedule a Consultation
// //         </button>
// //       </section>

// //     </div>
// //   );
// // }


// "use client";

// import { motion } from "framer-motion";

// const sentence = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.08 },
//   },
// };

// const word = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 },
// };

// export default function HomePage() {
//   return (
//     <div className="overflow-hidden">

//       {/* ================= HERO SECTION ================= */}
//       <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0B1B3A] via-[#0F172A] to-black text-white px-6 md:px-16 overflow-hidden">

//         {/* Glow Background */}
//         <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#14B8A6] opacity-10 blur-[150px] animate-pulse"></div>
//         <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600 opacity-10 blur-[150px] animate-pulse"></div>

//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

//           {/* LEFT CONTENT */}
//           <div className="space-y-8">

//             {/* Animated Heading */}
//             <motion.h1
//               variants={sentence}
//               initial="hidden"
//               animate="visible"
//               className="text-5xl md:text-7xl font-bold leading-tight"
//             >
//               {"Build Once.".split(" ").map((w, i) => (
//                 <motion.span
//                   key={i}
//                   variants={word}
//                   transition={{ duration: 0.6 }}
//                   className="inline-block mr-3"
//                 >
//                   {w}
//                 </motion.span>
//               ))}

//               <br />

//               {"Scale Everywhere.".split(" ").map((w, i) => (
//                 <motion.span
//                   key={i}
//                   variants={word}
//                   transition={{ duration: 0.6 }}
//                   className="inline-block mr-3 bg-gradient-to-r from-[#14B8A6] to-blue-500 bg-clip-text text-transparent"
//                 >
//                   {w}
//                 </motion.span>
//               ))}
//             </motion.h1>

//             {/* Updated Animated Subtext */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, duration: 0.8 }}
//               className="text-lg text-gray-300 max-w-xl"
//             >
//               NNC Digital Solutions designs, develops, and implements scalable
//               CRM platforms that automate workflows, centralize data, and drive
//               measurable revenue growth.
//             </motion.p>

//             {/* Buttons */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.4 }}
//               className="flex gap-6 flex-wrap"
//             >
//               <button className="bg-[#14B8A6] hover:bg-[#0EA5A4] px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
//                 Book a Strategy Call
//               </button>

//               <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300">
//                 Explore Our Solutions
//               </button>
//             </motion.div>
//           </div>

//           {/* RIGHT FORM */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.6 }}
//             className="bg-white text-gray-900 p-10 rounded-2xl shadow-2xl"
//           >
//             <h3 className="text-2xl font-bold mb-6">
//               Need a Digital System That Grows Your Business?
//             </h3>

//             <form className="space-y-4">
//               <input className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#14B8A6] outline-none" placeholder="Name" />
//               <input className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#14B8A6] outline-none" placeholder="Email" />
//               <input className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#14B8A6] outline-none" placeholder="Company" />

//               <button className="w-full bg-[#0B1B3A] hover:bg-black text-white py-3 rounded-lg font-semibold transition-all">
//                 Get Started
//               </button>
//             </form>
//           </motion.div>

//         </div>
//       </section>

//       {/* ================= TRUST CARDS ================= */}
//       <section className="relative z-20 -mt-24 px-6 md:px-16">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ staggerChildren: 0.2 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-6"
//           >
//             {[
//               { number: "100+", label: "Projects Delivered" },
//               { number: "10+", label: "Years Experience" },
//               { number: "Multi", label: "Industry Expertise" },
//               { number: "Global", label: "Clientele" },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 variants={{
//                   hidden: { opacity: 0, y: 60 },
//                   visible: { opacity: 1, y: 0 },
//                 }}
//                 transition={{ duration: 0.8 }}
//                 whileHover={{ y: -10, scale: 1.05 }}
//                 className="bg-white rounded-2xl shadow-xl p-8 text-center"
//               >
//                 <h3 className="text-3xl font-bold text-[#14B8A6]">
//                   {item.number}
//                 </h3>
//                 <p className="text-gray-600 mt-2">
//                   {item.label}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>


//     </div>
//   );
// }



"use client";

import { motion } from "framer-motion";
import CoreSolutions from "./CoreSolutions";

const sentence = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const word = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[#0B1220]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center text-white px-6 md:px-16 overflow-hidden">

        {/* Animated Background Glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#14B8A6] opacity-10 blur-[180px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 opacity-10 blur-[180px]"
        />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            {/* Animated Heading */}
            <motion.h1
              variants={sentence}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              {"Build Once.".split(" ").map((w, i) => (
                <motion.span
                  key={i}
                  variants={word}
                  transition={{ duration: 0.6 }}
                  className="inline-block mr-3"
                >
                  {w}
                </motion.span>
              ))}

              <br />

              {"Scale Everywhere.".split(" ").map((w, i) => (
                <motion.span
                  key={i}
                  variants={word}
                  transition={{ duration: 0.6 }}
                  className="inline-block mr-3 bg-gradient-to-r from-[#14B8A6] to-blue-500 bg-clip-text text-transparent"
                >
                  {w}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg text-gray-300 max-w-xl"
            >
              NNC Digital Solutions designs, develops, and implements scalable
              CRM platforms that automate workflows, centralize data, and drive
              measurable revenue growth.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex gap-6 flex-wrap"
            >
              <button className="bg-[#14B8A6] hover:bg-[#0EA5A4] px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Book a Strategy Call
              </button>

              <button className="border border-white/30 hover:bg-white hover:text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Explore Our Solutions
              </button>
            </motion.div>
          </div>

          {/* RIGHT FORM */}
          {/* <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white text-gray-900 p-10 rounded-3xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">
              Need a Digital System That Grows Your Business?
            </h3>

            <form className="space-y-4">
              <input className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#14B8A6] outline-none" placeholder="Name" />
              <input className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#14B8A6] outline-none" placeholder="Email" />
              <input className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#14B8A6] outline-none" placeholder="Company" />

              <button className="w-full bg-[#0B1B3A] hover:bg-black text-white py-3 rounded-xl font-semibold transition-all">
                Get Started
              </button>
            </form>
          </motion.div> */}
          {/* <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ y: -4 }}
            className="bg-white text-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 w-96 items-end"
          > */}
          <div className="flex justify-end">
  <motion.div
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.6 }}
    whileHover={{ y: -4 }}
    className="bg-white text-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 w-96"
  >
            <h3 className="text-xl font-semibold mb-6 leading-snug">
              Need a Digital System That Grows Your Business?
            </h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg 
                 focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] 
                 outline-none transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg 
                 focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] 
                 outline-none transition"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg 
                 focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] 
                 outline-none transition"
              />

              <button
                type="submit"
                className="w-full border border-black text-black py-3 rounded-lg 
                 font-semibold transition-all duration-300
                 hover:bg-[#14B8A6] hover:text-white hover:border-[#14B8A6]"
              >
                Schedule Consultation
              </button>

            </form>
          </motion.div>
          </div>
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}

      <section className="relative z-20 -mt-20 px-6 md:px-16">
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "100+", label: "Projects Delivered" },
            { number: "10+", label: "Years Experience" },
            { number: "Multi", label: "Industry Expertise" },
            { number: "Global", label: "Clientele" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl shadow-md p-5 text-center"
            >
              <h3 className="text-lg font-bold text-[#14B8A6]">
                {item.number}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>



    </div>
  );
}