

// // // // "use client";

// // // // import { motion } from "framer-motion";

// // // // const sentence = {
// // // //   hidden: {},
// // // //   visible: {
// // // //     transition: { staggerChildren: 0.08 },
// // // //   },
// // // // };

// // // // const word = {
// // // //   hidden: { opacity: 0, y: 30 },
// // // //   visible: { opacity: 1, y: 0 },
// // // // };

// // // // export default function HomePage() {
// // // //   return (
// // // //     <div className="overflow-hidden">

// // // //       {/* ================= HERO SECTION ================= */}
// // // //       <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0B1B3A] via-[#0F172A] to-black text-white px-6 md:px-16 overflow-hidden">

// // // //         {/* Glow Background */}
// // // //         <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#14B8A6] opacity-10 blur-[150px] animate-pulse"></div>
// // // //         <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600 opacity-10 blur-[150px] animate-pulse"></div>

// // // //         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

// // // //           {/* LEFT CONTENT */}
// // // //           <div className="space-y-8">

// // // //             {/* Animated Heading */}
// // // //             <motion.h1
// // // //               variants={sentence}
// // // //               initial="hidden"
// // // //               animate="visible"
// // // //               className="text-5xl md:text-7xl font-bold leading-tight"
// // // //             >
// // // //               {"Build Once.".split(" ").map((w, i) => (
// // // //                 <motion.span
// // // //                   key={i}
// // // //                   variants={word}
// // // //                   transition={{ duration: 0.6 }}
// // // //                   className="inline-block mr-3"
// // // //                 >
// // // //                   {w}
// // // //                 </motion.span>
// // // //               ))}

// // // //               <br />

// // // //               {"Scale Everywhere.".split(" ").map((w, i) => (
// // // //                 <motion.span
// // // //                   key={i}
// // // //                   variants={word}
// // // //                   transition={{ duration: 0.6 }}
// // // //                   className="inline-block mr-3 animated-gradient-text"
// // // //                 >
// // // //                   {w}
// // // //                 </motion.span>
// // // //               ))}
// // // //             </motion.h1>

// // // //             {/* Animated Subtext */}
// // // //             <motion.p
// // // //               initial={{ opacity: 0, y: 20 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ delay: 1, duration: 0.8 }}
// // // //               className="text-lg text-gray-300 max-w-xl"
// // // //             >
// // // //               We engineer scalable digital systems that automate operations,
// // // //               accelerate revenue, and transform growing businesses into
// // // //               high-performance enterprises.
// // // //             </motion.p>

// // // //             {/* Buttons */}
// // // //             <motion.div
// // // //               initial={{ opacity: 0 }}
// // // //               animate={{ opacity: 1 }}
// // // //               transition={{ delay: 1.4 }}
// // // //               className="flex gap-6 flex-wrap"
// // // //             >
// // // //               <button className="bg-[#14B8A6] hover:bg-[#0EA5A4] px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
// // // //                 Book a Strategy Call
// // // //               </button>

// // // //               <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300">
// // // //                 Explore Our Solutions
// // // //               </button>
// // // //             </motion.div>
// // // //           </div>

// // // //           {/* RIGHT FORM */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, x: 40 }}
// // // //             animate={{ opacity: 1, x: 0 }}
// // // //             transition={{ delay: 0.6 }}
// // // //             className="bg-white text-gray-900 p-10 rounded-2xl shadow-2xl"
// // // //           >
// // // //             <h3 className="text-2xl font-bold mb-6">
// // // //               Need a Digital System That Grows Your Business?
// // // //             </h3>

// // // //             <form className="space-y-4">
// // // //               <input className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#14B8A6] outline-none" placeholder="Name" />
// // // //               <input className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#14B8A6] outline-none" placeholder="Email" />
// // // //               <input className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#14B8A6] outline-none" placeholder="Company" />

// // // //               <button className="w-full bg-[#0B1B3A] hover:bg-black text-white py-3 rounded-lg font-semibold transition-all">
// // // //                 Get Started
// // // //               </button>
// // // //             </form>
// // // //           </motion.div>

// // // //         </div>
// // // //       </section>

// // // //       {/* ================= FLOATING TRUST CARDS ================= */}

// // // //       {/* ================= FLOATING TRUST CARDS ================= */}
// // // // <section className="relative z-20 -mt-24 px-6 md:px-16">
// // // //   <div className="max-w-6xl mx-auto">

// // // //     <motion.div
// // // //       initial="hidden"
// // // //       whileInView="visible"
// // // //       viewport={{ once: true }}
// // // //       transition={{ staggerChildren: 0.2 }}
// // // //       className="grid grid-cols-2 md:grid-cols-4 gap-6"
// // // //     >
// // // //       {[
// // // //         { number: "100+", label: "Projects Delivered" },
// // // //         { number: "10+", label: "Years Experience" },
// // // //         { number: "Multi", label: "Industry Expertise" },
// // // //         { number: "Global", label: "Clientele" },
// // // //       ].map((item, i) => (
// // // //         <motion.div
// // // //           key={i}
// // // //           variants={{
// // // //             hidden: { opacity: 0, y: 60 },
// // // //             visible: { opacity: 1, y: 0 },
// // // //           }}
// // // //           transition={{ duration: 0.8, ease: "easeOut" }}
// // // //           whileHover={{ y: -10, scale: 1.05 }}
// // // //           className="bg-white rounded-2xl shadow-xl p-8 text-center transition-all duration-300"
// // // //         >
// // // //           <h3 className="text-3xl font-bold text-[#14B8A6]">
// // // //             {item.number}
// // // //           </h3>
// // // //           <p className="text-gray-600 mt-2 text-sm md:text-base">
// // // //             {item.label}
// // // //           </p>
// // // //         </motion.div>
// // // //       ))}
// // // //     </motion.div>

// // // //   </div>
// // // // </section>

// // // //      {/* ================================================= */}
// // // // {/* OUR CORE SOLUTIONS – ENTERPRISE GRID */}
// // // // {/* ================================================= */}

// // // // <section className="relative py-28 px-6 md:px-16 bg-[#0B1220] text-white overflow-hidden">

// // // //   {/* Background Glow */}
// // // //   <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#14B8A6] opacity-10 blur-[180px]" />
// // // //   <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 opacity-10 blur-[180px]" />

// // // //   <div className="max-w-7xl mx-auto relative z-10">

// // // //     {/* Heading */}
// // // //     <div className="text-center mb-20">
// // // //       <h2 className="text-5xl font-bold mb-6">
// // // //         Our <span className="bg-gradient-to-r from-[#14B8A6] to-blue-500 bg-clip-text text-transparent">
// // // //           Core Solutions
// // // //         </span>
// // // //       </h2>
// // // //       <p className="text-gray-400 max-w-2xl mx-auto">
// // // //         We engineer complete digital ecosystems that automate operations,
// // // //         structure workflows, and accelerate measurable growth.
// // // //       </p>
// // // //     </div>

// // // //     {/* GRID */}
// // // //     <div className="grid md:grid-cols-2 gap-12">

// // // //       {/* ================================================= */}
// // // //       {/* 1️⃣ DIGITAL FOUNDATION */}
// // // //       {/* ================================================= */}

// // // //       <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-[#14B8A6] transition duration-500 hover:shadow-[0_0_40px_rgba(20,184,166,0.2)]">

// // // //         <h3 className="text-2xl font-bold mb-6 text-[#14B8A6]">
// // // //           Digital Foundation
// // // //         </h3>

// // // //         <ul className="space-y-4 text-gray-300">
// // // //           <li>• Enterprise Website Development</li>
// // // //           <li>• Custom Web Applications</li>
// // // //           <li>• Scalable Mobile Apps</li>
// // // //           <li>• UI/UX Engineering</li>
// // // //         </ul>

// // // //         <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-gradient-to-r from-[#14B8A6] to-blue-500 pointer-events-none" />
// // // //       </div>

// // // //       {/* ================================================= */}
// // // //       {/* 2️⃣ CRM & AUTOMATION */}
// // // //       {/* ================================================= */}

// // // //       <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-blue-500 transition duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]">

// // // //         <h3 className="text-2xl font-bold mb-6 text-blue-400">
// // // //           CRM & Automation
// // // //         </h3>

// // // //         <ul className="space-y-4 text-gray-300">
// // // //           <li>• Custom CRM Development</li>
// // // //           <li>• Sales Pipeline Automation</li>
// // // //           <li>• Marketing Automation</li>
// // // //           <li>• WhatsApp & API Integrations</li>
// // // //           <li>• CRM Dashboard & Analytics</li>
// // // //         </ul>
// // // //       </div>

// // // //       {/* ================================================= */}
// // // //       {/* 3️⃣ BUSINESS SYSTEMS */}
// // // //       {/* ================================================= */}

// // // //       <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-purple-500 transition duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]">

// // // //         <h3 className="text-2xl font-bold mb-6 text-purple-400">
// // // //           Business Systems
// // // //         </h3>

// // // //         <ul className="space-y-4 text-gray-300">
// // // //           <li>• ERP Development</li>
// // // //           <li>• Inventory & Billing Systems</li>
// // // //           <li>• Lead Management Software</li>
// // // //           <li>• Vendor & HR Management Systems</li>
// // // //         </ul>
// // // //       </div>

// // // //       {/* ================================================= */}
// // // //       {/* 4️⃣ GROWTH & OPTIMIZATION */}
// // // //       {/* ================================================= */}

// // // //       <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-pink-500 transition duration-500 hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]">

// // // //         <h3 className="text-2xl font-bold mb-6 text-pink-400">
// // // //           Growth & Optimization
// // // //         </h3>

// // // //         <ul className="space-y-4 text-gray-300">
// // // //           <li>• SEO & Performance Marketing</li>
// // // //           <li>• Funnel Engineering</li>
// // // //           <li>• Conversion Rate Optimization</li>
// // // //           <li>• Analytics & Reporting Systems</li>
// // // //         </ul>
// // // //       </div>

// // // //     </div>

// // // //   </div>
// // // // </section>

// // // //       {/* ================= FINAL CTA ================= */}
// // // //       <section className="py-20 bg-[#0B1B3A] text-white text-center">
// // // //         <h2 className="text-4xl font-bold mb-6">
// // // //           Ready to Transform Your Business Operations?
// // // //         </h2>
// // // //         <p className="max-w-2xl mx-auto mb-8 text-gray-300">
// // // //           Let’s design a digital system that gives you clarity, control,
// // // //           and predictable growth.
// // // //         </p>

// // // //         <button className="bg-[#14B8A6] px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all">
// // // //           Schedule a Consultation
// // // //         </button>
// // // //       </section>

// // // //     </div>
// // // //   );
// // // // }


// // // "use client";

// // // import { motion } from "framer-motion";

// // // const sentence = {
// // //   hidden: {},
// // //   visible: {
// // //     transition: { staggerChildren: 0.08 },
// // //   },
// // // };

// // // const word = {
// // //   hidden: { opacity: 0, y: 30 },
// // //   visible: { opacity: 1, y: 0 },
// // // };

// // // export default function HomePage() {
// // //   return (
// // //     <div className="overflow-hidden">

// // //       {/* ================= HERO SECTION ================= */}
// // //       <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0B1B3A] via-[#0F172A] to-black text-white px-6 md:px-16 overflow-hidden">

// // //         {/* Glow Background */}
// // //         <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#14B8A6] opacity-10 blur-[150px] animate-pulse"></div>
// // //         <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600 opacity-10 blur-[150px] animate-pulse"></div>

// // //         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

// // //           {/* LEFT CONTENT */}
// // //           <div className="space-y-8">

// // //             {/* Animated Heading */}
// // //             <motion.h1
// // //               variants={sentence}
// // //               initial="hidden"
// // //               animate="visible"
// // //               className="text-5xl md:text-7xl font-bold leading-tight"
// // //             >
// // //               {"Build Once.".split(" ").map((w, i) => (
// // //                 <motion.span
// // //                   key={i}
// // //                   variants={word}
// // //                   transition={{ duration: 0.6 }}
// // //                   className="inline-block mr-3"
// // //                 >
// // //                   {w}
// // //                 </motion.span>
// // //               ))}

// // //               <br />

// // //               {"Scale Everywhere.".split(" ").map((w, i) => (
// // //                 <motion.span
// // //                   key={i}
// // //                   variants={word}
// // //                   transition={{ duration: 0.6 }}
// // //                   className="inline-block mr-3 bg-gradient-to-r from-[#14B8A6] to-blue-500 bg-clip-text text-transparent"
// // //                 >
// // //                   {w}
// // //                 </motion.span>
// // //               ))}
// // //             </motion.h1>

// // //             {/* Updated Animated Subtext */}
// // //             <motion.p
// // //               initial={{ opacity: 0, y: 20 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ delay: 1, duration: 0.8 }}
// // //               className="text-lg text-gray-300 max-w-xl"
// // //             >
// // //               NNC Digital Solutions designs, develops, and implements scalable
// // //               CRM platforms that automate workflows, centralize data, and drive
// // //               measurable revenue growth.
// // //             </motion.p>

// // //             {/* Buttons */}
// // //             <motion.div
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               transition={{ delay: 1.4 }}
// // //               className="flex gap-6 flex-wrap"
// // //             >
// // //               <button className="bg-[#14B8A6] hover:bg-[#0EA5A4] px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
// // //                 Book a Strategy Call
// // //               </button>

// // //               <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300">
// // //                 Explore Our Solutions
// // //               </button>
// // //             </motion.div>
// // //           </div>

// // //           {/* RIGHT FORM */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: 40 }}
// // //             animate={{ opacity: 1, x: 0 }}
// // //             transition={{ delay: 0.6 }}
// // //             className="bg-white text-gray-900 p-10 rounded-2xl shadow-2xl"
// // //           >
// // //             <h3 className="text-2xl font-bold mb-6">
// // //               Need a Digital System That Grows Your Business?
// // //             </h3>

// // //             <form className="space-y-4">
// // //               <input className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#14B8A6] outline-none" placeholder="Name" />
// // //               <input className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#14B8A6] outline-none" placeholder="Email" />
// // //               <input className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#14B8A6] outline-none" placeholder="Company" />

// // //               <button className="w-full bg-[#0B1B3A] hover:bg-black text-white py-3 rounded-lg font-semibold transition-all">
// // //                 Get Started
// // //               </button>
// // //             </form>
// // //           </motion.div>

// // //         </div>
// // //       </section>

// // //       {/* ================= TRUST CARDS ================= */}
// // //       <section className="relative z-20 -mt-24 px-6 md:px-16">
// // //         <div className="max-w-6xl mx-auto">
// // //           <motion.div
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             transition={{ staggerChildren: 0.2 }}
// // //             className="grid grid-cols-2 md:grid-cols-4 gap-6"
// // //           >
// // //             {[
// // //               { number: "100+", label: "Projects Delivered" },
// // //               { number: "10+", label: "Years Experience" },
// // //               { number: "Multi", label: "Industry Expertise" },
// // //               { number: "Global", label: "Clientele" },
// // //             ].map((item, i) => (
// // //               <motion.div
// // //                 key={i}
// // //                 variants={{
// // //                   hidden: { opacity: 0, y: 60 },
// // //                   visible: { opacity: 1, y: 0 },
// // //                 }}
// // //                 transition={{ duration: 0.8 }}
// // //                 whileHover={{ y: -10, scale: 1.05 }}
// // //                 className="bg-white rounded-2xl shadow-xl p-8 text-center"
// // //               >
// // //                 <h3 className="text-3xl font-bold text-[#14B8A6]">
// // //                   {item.number}
// // //                 </h3>
// // //                 <p className="text-gray-600 mt-2">
// // //                   {item.label}
// // //                 </p>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </section>


// // //     </div>
// // //   );
// // // }



// // // "use client";

// // // import { motion } from "framer-motion";
// // // import CoreSolutions from "./CoreSolutions";

// // // const sentence = {
// // //   hidden: {},
// // //   visible: {
// // //     transition: { staggerChildren: 0.08 },
// // //   },
// // // };

// // // const word = {
// // //   hidden: { opacity: 0, y: 40 },
// // //   visible: { opacity: 1, y: 0 },
// // // };

// // // export default function HomePage() {
// // //   return (
// // //     <div className="overflow-hidden bg-[#0B1220]">

// // //       {/* ================= HERO SECTION ================= */}
// // //       <section className="relative min-h-screen flex items-center text-white px-6 md:px-16 overflow-hidden">

// // //         {/* Animated Background Glow */}
// // //         <motion.div
// // //           animate={{ scale: [1, 1.2, 1] }}
// // //           transition={{ duration: 8, repeat: Infinity }}
// // //           className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#14B8A6] opacity-10 blur-[180px]"
// // //         />
// // //         <motion.div
// // //           animate={{ scale: [1, 1.3, 1] }}
// // //           transition={{ duration: 10, repeat: Infinity }}
// // //           className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 opacity-10 blur-[180px]"
// // //         />

// // //         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

// // //           {/* LEFT CONTENT */}
// // //           <div className="space-y-8">

// // //             {/* Animated Heading */}
// // //             <motion.h1
// // //               variants={sentence}
// // //               initial="hidden"
// // //               animate="visible"
// // //               className="text-5xl md:text-7xl font-bold leading-tight"
// // //             >
// // //               {"Build Once.".split(" ").map((w, i) => (
// // //                 <motion.span
// // //                   key={i}
// // //                   variants={word}
// // //                   transition={{ duration: 0.6 }}
// // //                   className="inline-block mr-3"
// // //                 >
// // //                   {w}
// // //                 </motion.span>
// // //               ))}

// // //               <br />

// // //               {"Scale Everywhere.".split(" ").map((w, i) => (
// // //                 <motion.span
// // //                   key={i}
// // //                   variants={word}
// // //                   transition={{ duration: 0.6 }}
// // //                   className="inline-block mr-3 bg-gradient-to-r from-[#14B8A6] to-blue-500 bg-clip-text text-transparent"
// // //                 >
// // //                   {w}
// // //                 </motion.span>
// // //               ))}
// // //             </motion.h1>

// // //             {/* Subtext */}
// // //             <motion.p
// // //               initial={{ opacity: 0, y: 30 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ delay: 1, duration: 0.8 }}
// // //               className="text-lg text-gray-300 max-w-xl"
// // //             >
// // //               NNC Digital Solutions designs, develops, and implements scalable
// // //               CRM platforms that automate workflows, centralize data, and drive
// // //               measurable revenue growth.
// // //             </motion.p>

// // //             {/* Buttons */}
// // //             <motion.div
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               transition={{ delay: 1.3 }}
// // //               className="flex gap-6 flex-wrap"
// // //             >
// // //               <button className="bg-[#14B8A6] hover:bg-[#0EA5A4] px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
// // //                 Book a Strategy Call
// // //               </button>

// // //               <button className="border border-white/30 hover:bg-white hover:text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300">
// // //                 Explore Our Solutions
// // //               </button>
// // //             </motion.div>
// // //           </div>

// // //           {/* RIGHT FORM */}
// // //           {/* <motion.div
// // //             initial={{ opacity: 0, x: 60 }}
// // //             animate={{ opacity: 1, x: 0 }}
// // //             transition={{ delay: 0.6 }}
// // //             whileHover={{ scale: 1.02 }}
// // //             className="bg-white text-gray-900 p-10 rounded-3xl shadow-2xl"
// // //           >
// // //             <h3 className="text-2xl font-bold mb-6">
// // //               Need a Digital System That Grows Your Business?
// // //             </h3>

// // //             <form className="space-y-4">
// // //               <input className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#14B8A6] outline-none" placeholder="Name" />
// // //               <input className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#14B8A6] outline-none" placeholder="Email" />
// // //               <input className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#14B8A6] outline-none" placeholder="Company" />

// // //               <button className="w-full bg-[#0B1B3A] hover:bg-black text-white py-3 rounded-xl font-semibold transition-all">
// // //                 Get Started
// // //               </button>
// // //             </form>
// // //           </motion.div> */}
// // //           {/* <motion.div
// // //             initial={{ opacity: 0, x: 60 }}
// // //             animate={{ opacity: 1, x: 0 }}
// // //             transition={{ delay: 0.6 }}
// // //             whileHover={{ y: -4 }}
// // //             className="bg-white text-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 w-96 items-end"
// // //           > */}
// // //           <div className="flex justify-end">
// // //   <motion.div
// // //     initial={{ opacity: 0, x: 60 }}
// // //     animate={{ opacity: 1, x: 0 }}
// // //     transition={{ delay: 0.6 }}
// // //     whileHover={{ y: -4 }}
// // //     className="bg-white text-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 w-96"
// // //   >
// // //             <h3 className="text-xl font-semibold mb-6 leading-snug">
// // //               Need a Digital System That Grows Your Business?
// // //             </h3>

// // //             <form className="space-y-4">

// // //               <input
// // //                 type="text"
// // //                 placeholder="Full Name"
// // //                 className="w-full border border-gray-300 px-4 py-3 rounded-lg 
// // //                  focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] 
// // //                  outline-none transition"
// // //               />

// // //               <input
// // //                 type="email"
// // //                 placeholder="Email Address"
// // //                 className="w-full border border-gray-300 px-4 py-3 rounded-lg 
// // //                  focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] 
// // //                  outline-none transition"
// // //               />

// // //               <input
// // //                 type="text"
// // //                 placeholder="Company Name"
// // //                 className="w-full border border-gray-300 px-4 py-3 rounded-lg 
// // //                  focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] 
// // //                  outline-none transition"
// // //               />

// // //               <button
// // //                 type="submit"
// // //                 className="w-full border border-black text-black py-3 rounded-lg 
// // //                  font-semibold transition-all duration-300
// // //                  hover:bg-[#14B8A6] hover:text-white hover:border-[#14B8A6]"
// // //               >
// // //                 Schedule Consultation
// // //               </button>

// // //             </form>
// // //           </motion.div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ================= TRUST SECTION ================= */}

// // //       <section className="relative z-20 -mt-20 px-6 md:px-16">
// // //         <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
// // //           {[
// // //             { number: "100+", label: "Projects Delivered" },
// // //             { number: "10+", label: "Years Experience" },
// // //             { number: "Multi", label: "Industry Expertise" },
// // //             { number: "Global", label: "Clientele" },
// // //           ].map((item, i) => (
// // //             <motion.div
// // //               key={i}
// // //               initial={{ opacity: 0, y: 40 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.6, delay: i * 0.1 }}
// // //               whileHover={{ y: -4 }}
// // //               className="bg-white rounded-xl shadow-md p-5 text-center"
// // //             >
// // //               <h3 className="text-lg font-bold text-[#14B8A6]">
// // //                 {item.number}
// // //               </h3>
// // //               <p className="text-sm text-gray-600 mt-1">
// // //                 {item.label}
// // //               </p>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </section>



// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { motion } from "framer-motion";

// // export default function Hero() {
// //   return (
// //     <section className="relative min-h-screen bg-[#0B1220] text-white flex items-center px-6 md:px-16 overflow-hidden">

// //       {/* Gradient Mesh Background */}
// //       <div className="absolute inset-0">
// //         <div className="absolute w-[600px] h-[600px] bg-[#14B8A6] opacity-20 blur-[160px] -top-32 -left-32"></div>
// //         <div className="absolute w-[500px] h-[500px] bg-blue-600 opacity-20 blur-[160px] bottom-0 right-0"></div>
// //       </div>

// //       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

// //         {/* LEFT CONTENT */}
// //         <div className="space-y-8">

// //           <motion.h1
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="text-5xl md:text-7xl font-bold leading-tight"
// //           >
// //             Digital Systems <br />

// //             <span className="bg-gradient-to-r from-[#14B8A6] to-blue-500 bg-clip-text text-transparent">
// //               That Actually
// //             </span>

// //             <br />

// //             Grow Businesses
// //           </motion.h1>

// //           <motion.p
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.6 }}
// //             className="text-lg text-gray-300 max-w-xl"
// //           >
// //             We design CRM platforms, enterprise applications, and 
// //             automation systems that transform messy business operations 
// //             into structured, scalable growth engines.
// //           </motion.p>

// //           <div className="flex gap-6 flex-wrap">

// //             <button className="bg-[#14B8A6] hover:bg-[#0EA5A4] px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105">
// //               Book Strategy Call
// //             </button>

// //             <button className="border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition">
// //               See Our Work
// //             </button>

// //           </div>

// //         </div>

// //         {/* RIGHT VISUAL SIDE */}
// //         <div className="relative h-[450px]">

// //           {/* Floating Card 1 */}
// //           <motion.div
// //             animate={{ y: [0, -15, 0] }}
// //             transition={{ duration: 6, repeat: Infinity }}
// //             className="absolute top-0 right-10 bg-white text-black p-6 rounded-2xl shadow-xl w-64"
// //           >
// //             <h4 className="font-semibold mb-2">CRM Automation</h4>
// //             <p className="text-sm text-gray-600">
// //               Automate leads, sales pipelines and customer workflows.
// //             </p>
// //           </motion.div>

// //           {/* Floating Card 2 */}
// //           <motion.div
// //             animate={{ y: [0, 20, 0] }}
// //             transition={{ duration: 7, repeat: Infinity }}
// //             className="absolute bottom-0 left-0 bg-white text-black p-6 rounded-2xl shadow-xl w-64"
// //           >
// //             <h4 className="font-semibold mb-2">Business Systems</h4>
// //             <p className="text-sm text-gray-600">
// //               Custom ERP, inventory and operational platforms.
// //             </p>
// //           </motion.div>

// //           {/* Floating Card 3 */}
// //           <motion.div
// //             animate={{ y: [0, -10, 0] }}
// //             transition={{ duration: 5, repeat: Infinity }}
// //             className="absolute top-32 left-20 bg-white text-black p-6 rounded-2xl shadow-xl w-64"
// //           >
// //             <h4 className="font-semibold mb-2">Growth Intelligence</h4>
// //             <p className="text-sm text-gray-600">
// //               Analytics dashboards to track revenue & growth.
// //             </p>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// /* ── BRAND PALETTE (from logo) ────────────────────────────────
//    Navy bg:   #0B1525
//    Teal:      #00C9A7
//    Green:     #1B8F6E
//    Mid-teal:  #0FA896
//    White:     #FFFFFF
//    Paper:     #F4F7F9
//    Muted txt: rgba(255,255,255,0.55)
// ──────────────────────────────────────────────────────────── */

// const G = "linear-gradient(135deg, #00C9A7 0%, #1B8F6E 100%)";
// const TEAL = "#00C9A7";
// const NAVY = "#0B1525";
// const NAVY2 = "#0E1C30";
// const GREEN = "#1B8F6E";
// const PAPER = "#F4F7F9";

// const CSS = `
// @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');

// *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// .nnc { font-family: 'Inter', sans-serif; background: ${PAPER}; color: ${NAVY}; overflow-x: hidden; }

// .syne   { font-family: 'Syne', sans-serif !important; }
// .mono   { font-family: 'Space Mono', monospace !important; }

// /* Scrollbar */
// ::-webkit-scrollbar { width: 3px; }
// ::-webkit-scrollbar-thumb { background: ${TEAL}; border-radius: 2px; }

// /* Nav link */
// .nl { font-size: 14px; color: rgba(255,255,255,0.65); text-decoration: none; letter-spacing: 0.03em; transition: color 0.2s; }
// .nl:hover { color: ${TEAL}; }

// /* Input */
// .fi {
//   width: 100%; padding: 13px 16px;
//   border: 1px solid rgba(255,255,255,0.12);
//   border-radius: 10px; font-size: 14px;
//   font-family: 'Inter', sans-serif;
//   color: #fff; background: rgba(255,255,255,0.07);
//   outline: none; transition: border-color 0.2s;
// }
// .fi:focus { border-color: ${TEAL}; }
// .fi::placeholder { color: rgba(255,255,255,0.35); }

// /* Btn styles */
// .btn-primary {
//   background: ${G}; color: #fff; border: none;
//   padding: 15px 34px; border-radius: 50px;
//   font-size: 15px; font-family: 'Inter',sans-serif;
//   font-weight: 600; cursor: pointer; letter-spacing: 0.01em;
//   transition: opacity 0.25s, transform 0.2s; white-space: nowrap;
// }
// .btn-primary:hover { opacity: 0.88; transform: translateY(-2px); }

// .btn-outline {
//   background: transparent; color: #fff;
//   border: 1px solid rgba(255,255,255,0.3);
//   padding: 14px 30px; border-radius: 50px;
//   font-size: 15px; font-family: 'Inter',sans-serif;
//   cursor: pointer; transition: all 0.25s;
//   display: flex; align-items: center; gap: 8px; white-space: nowrap;
// }
// .btn-outline:hover { border-color: ${TEAL}; color: ${TEAL}; }

// .btn-white {
//   background: #fff; color: ${NAVY}; border: none;
//   padding: 15px 34px; border-radius: 50px;
//   font-size: 15px; font-weight: 600; font-family: 'Inter',sans-serif;
//   cursor: pointer; transition: all 0.25s;
// }
// .btn-white:hover { background: ${TEAL}; color: #fff; }

// .btn-teal {
//   width: 100%; background: ${G}; color: #fff; border: none;
//   padding: 14px; border-radius: 10px;
//   font-size: 15px; font-weight: 600; font-family: 'Inter',sans-serif;
//   cursor: pointer; transition: opacity 0.25s;
// }
// .btn-teal:hover { opacity: 0.85; }

// /* Eye */
// .eye { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; }
// .eye-bar { width: 28px; height: 2px; background: ${TEAL}; border-radius: 2px; }
// .eye-txt { font-family: 'Space Mono',monospace; font-size: 11px; letter-spacing: 0.13em; color: ${TEAL}; text-transform: uppercase; }

// /* Tag pill */
// .tag { display: inline-block; background: rgba(0,201,167,0.12); color: ${TEAL}; font-size: 10px; font-weight: 600; padding: 3px 10px; border-radius: 20px; letter-spacing: 0.07em; text-transform: uppercase; margin-bottom: 10px; }

// /* Card */
// .card { background: #fff; border: 1px solid rgba(14,17,23,0.07); border-radius: 18px; padding: 28px 24px; transition: transform 0.3s, box-shadow 0.3s; }
// .card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(11,21,37,0.10); }

// /* Dark card */
// .dcard { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 18px; padding: 28px 24px; transition: background 0.3s; }
// .dcard:hover { background: rgba(0,201,167,0.07); }

// /* Stat cell */
// .sc { padding: 36px 28px; position: relative; }
// .sc:not(:last-child) { border-right: 1px solid rgba(14,17,23,0.08); }

// /* Industry chip */
// .ichip { padding: 10px 20px; border-radius: 50px; border: 1px solid rgba(0,201,167,0.28); font-size: 13px; color: rgba(255,255,255,0.75); background: rgba(0,201,167,0.06); transition: all 0.2s; cursor: default; }
// .ichip:hover { background: rgba(0,201,167,0.15); color: #fff; border-color: ${TEAL}; }

// /* Process step */
// .pstep { padding: 40px 28px; border-bottom: 1px solid rgba(255,255,255,0.06); display: grid; grid-template-columns: 56px 1fr; gap: 20px; align-items: start; transition: background 0.25s; border-radius: 12px; }
// .pstep:hover { background: rgba(0,201,167,0.05); }

// /* Blog card */
// .bcard { background: #fff; border-radius: 18px; overflow: hidden; border: 1px solid rgba(14,17,23,0.07); transition: transform 0.3s, box-shadow 0.3s; }
// .bcard:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(11,21,37,0.10); }

// /* FAQ */
// .faq { border-bottom: 1px solid rgba(255,255,255,0.08); }

// /* Footer link */
// .fl { display: block; font-size: 14px; color: rgba(255,255,255,0.42); text-decoration: none; margin-bottom: 10px; transition: color 0.2s; }
// .fl:hover { color: ${TEAL}; }

// /* Section divider */
// .sdiv { width: 60px; height: 3px; background: ${G}; border-radius: 3px; margin: 16px 0 28px; }

// /* Gradient text */
// .gtxt { background: ${G}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

// /* Success story card */
// .ssc { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 36px; transition: all 0.3s; }
// .ssc:hover { background: rgba(0,201,167,0.07); border-color: rgba(0,201,167,0.25); transform: translateY(-3px); }
// `;

// /* ── SVG Logo Mark (matches the spiral logo) ─────────────── */
// function LogoMark({ size = 36 }) {
//   return (
//     <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
//       <defs>
//         <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0%" stopColor="#00C9A7" />
//           <stop offset="100%" stopColor="#1B8F6E" />
//         </linearGradient>
//       </defs>
//       {/* Spiral blades approximation */}
//       {[0,40,80,120,160,200,240,280,320].map((deg, i) => (
//         <ellipse key={i} cx="20" cy="20" rx="8" ry="3.5"
//           fill="url(#lg)" opacity={0.75 + i * 0.02}
//           transform={`rotate(${deg} 20 20) translate(4,0)`}
//         />
//       ))}
//       <circle cx="20" cy="20" r="4" fill="url(#lg)" />
//     </svg>
//   );
// }

// /* ── Cursor ──────────────────────────────────────────────── */
// function Cursor() {
//   const [pos, setPos] = useState({ x: -100, y: -100 });
//   const [hov, setHov] = useState(false);
//   useEffect(() => {
//     const mv = e => setPos({ x: e.clientX, y: e.clientY });
//     const ov = e => { if (e.target.closest("button,a")) setHov(true); };
//     const ot = () => setHov(false);
//     window.addEventListener("mousemove", mv);
//     window.addEventListener("mouseover", ov);
//     window.addEventListener("mouseout", ot);
//     return () => { window.removeEventListener("mousemove", mv); window.removeEventListener("mouseover", ov); window.removeEventListener("mouseout", ot); };
//   }, []);
//   return (
//     <>
//       <motion.div animate={{ x: pos.x - 6, y: pos.y - 6, scale: hov ? 2.8 : 1 }}
//         transition={{ type: "spring", stiffness: 600, damping: 35 }}
//         style={{ position: "fixed", top: 0, left: 0, width: 12, height: 12, borderRadius: "50%", background: TEAL, zIndex: 9999, pointerEvents: "none", mixBlendMode: "screen" }} />
//       <motion.div animate={{ x: pos.x - 22, y: pos.y - 22 }}
//         transition={{ type: "spring", stiffness: 180, damping: 22 }}
//         style={{ position: "fixed", top: 0, left: 0, width: 44, height: 44, borderRadius: "50%", border: "1px solid rgba(0,201,167,0.45)", zIndex: 9998, pointerEvents: "none" }} />
//     </>
//   );
// }

// /* ── NAV ─────────────────────────────────────────────────── */
// function Nav() {
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", fn);
//     return () => window.removeEventListener("scroll", fn);
//   }, []);
//   return (
//     <motion.nav initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
//       style={{
//         position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
//         display: "flex", alignItems: "center", justifyContent: "space-between",
//         padding: scrolled ? "14px 48px" : "24px 48px",
//         background: scrolled ? "rgba(11,21,37,0.95)" : "transparent",
//         backdropFilter: scrolled ? "blur(20px)" : "none",
//         borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
//         transition: "all 0.4s ease",
//       }}>
//       {/* Logo */}
//       <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//         <LogoMark size={34} />
//         <div style={{ lineHeight: 1 }}>
//           <span style={{ fontFamily: "Syne,sans-serif", fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}>NNC</span>
//           <span style={{ fontFamily: "Syne,sans-serif", fontSize: 20, fontWeight: 400, color: TEAL, letterSpacing: "-0.01em" }}> digital</span>
//         </div>
//       </div>
//       {/* Links */}
//       <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
//         {["Solutions","Industries","Process","Case Studies","Blog"].map(l => (
//           <a key={l} href="#" className="nl">{l}</a>
//         ))}
//         <button className="btn-primary" style={{ padding: "10px 22px", fontSize: 13 }}>Book a Call</button>
//       </div>
//     </motion.nav>
//   );
// }

// /* ── HERO ─────────────────────────────────────────────────── */
// function Hero() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y   = useTransform(scrollYProgress, [0,1], ["0%","22%"]);
//   const op  = useTransform(scrollYProgress, [0,0.6], [1,0]);

//   return (
//     <section ref={ref} style={{ minHeight: "100vh", background: NAVY, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", paddingTop: 100 }}>
//       {/* Mesh glow */}
//       <div style={{ position: "absolute", top: -100, left: -100, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,201,167,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
//       <div style={{ position: "absolute", bottom: -200, right: -200, width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(27,143,110,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
//       {/* Grid lines */}
//       <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

//       {/* Rotating rings */}
//       <motion.div animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
//         style={{ position: "absolute", right: -200, top: "50%", marginTop: -400, width: 800, height: 800, borderRadius: "50%", border: "1px solid rgba(0,201,167,0.1)", pointerEvents: "none" }} />
//       <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//         style={{ position: "absolute", right: -80, top: "50%", marginTop: -280, width: 560, height: 560, borderRadius: "50%", border: "1px solid rgba(0,201,167,0.18)", pointerEvents: "none" }} />

//       <motion.div style={{ y, opacity: op, width: "100%", position: "relative", zIndex: 10 }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "1fr 400px", gap: 64, alignItems: "center" }}>

//           {/* LEFT */}
//           <div>
//             <motion.div className="eye" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
//               <span className="eye-bar" />
//               <span className="eye-txt mono">Full-Stack Technology & Automation Partner</span>
//             </motion.div>

//             <h1 className="syne" style={{ fontSize: "clamp(44px,6vw,82px)", fontWeight: 800, lineHeight: 1.06, color: "#fff", letterSpacing: "-0.025em", marginBottom: 28 }}>
//               {["Build Once.", "Scale"].map((w, i) => (
//                 <motion.span key={i} initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.22,1,0.36,1] }}
//                   style={{ display: "block" }}>
//                   {w === "Scale" ? (
//                     <><span style={{ color: "#fff" }}>Scale </span><span className="gtxt">Everywhere.</span></>
//                   ) : w}
//                 </motion.span>
//               ))}
//             </h1>

//             <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}
//               style={{ fontSize: 17, lineHeight: 1.78, color: "rgba(255,255,255,0.62)", maxWidth: 500, marginBottom: 16 }}>
//               We design and develop scalable digital systems that automate operations, accelerate revenue, and transform growing businesses into high-performance enterprises.
//             </motion.p>
//             <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.82, duration: 0.7 }}
//               style={{ fontSize: 15, lineHeight: 1.72, color: "rgba(255,255,255,0.45)", maxWidth: 480, marginBottom: 44 }}>
//               From conversion-driven websites and mobile apps to fully customized CRM and ERP solutions — NNC Digital Solutions is your long-term technology growth partner.
//             </motion.p>

//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
//               style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
//               <button className="btn-primary">Book a Strategy Call</button>
//               <button className="btn-outline"><span>Explore Our Solutions</span><span style={{ fontSize: 17 }}>→</span></button>
//             </motion.div>

//             {/* Trust strip inline */}
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
//               style={{ display: "flex", gap: 32, marginTop: 52, flexWrap: "wrap" }}>
//               {["100+ Projects","10+ Yrs Experience","Global Clientele","Multi-Industry"].map(t => (
//                 <div key={t} style={{ display: "flex", alignItems: "center", gap: 7 }}>
//                   <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(0,201,167,0.15)", border: "1px solid rgba(0,201,167,0.35)", display: "grid", placeItems: "center", fontSize: 10, color: TEAL }}>✓</span>
//                   <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>{t}</span>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* RIGHT FORM */}
//           <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9, delay: 0.5, ease: [0.22,1,0.36,1] }}>
//             <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: "40px 36px", backdropFilter: "blur(16px)", position: "relative", overflow: "hidden" }}>
//               <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: G }} />
//               <div style={{ marginBottom: 28 }}>
//                 <p className="mono eye-txt" style={{ marginBottom: 10 }}>Start your journey</p>
//                 <h3 className="syne" style={{ fontSize: 22, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
//                   Need a Digital System That Grows Your Business?
//                 </h3>
//               </div>
//               <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
//                 {[["Full Name","text"],["Work Email","email"],["Company Name","text"],["Phone Number","tel"]].map(([ph,t]) => (
//                   <input key={ph} type={t} placeholder={ph} className="fi" />
//                 ))}
//                 <select className="fi" defaultValue="" style={{ cursor: "pointer" }}>
//                   <option value="" disabled>Service of Interest</option>
//                   {["Custom CRM Development","ERP Development","Website / Web App","Mobile App","Marketing Automation","Other"].map(o => <option key={o}>{o}</option>)}
//                 </select>
//                 <button className="btn-teal" style={{ marginTop: 4 }}>Schedule Consultation →</button>
//                 <p style={{ fontSize: 12, color: "rgba(255,255,255,0.32)", textAlign: "center", lineHeight: 1.5 }}>
//                   No commitment required. Response within 24 hours.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Scroll cue */}
//       <motion.div animate={{ y: [0,8,0] }} transition={{ duration: 2.2, repeat: Infinity }}
//         style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.35 }}>
//         <span className="mono" style={{ fontSize: 10, color: "#fff", letterSpacing: "0.1em" }}>SCROLL</span>
//         <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom,#fff,transparent)" }} />
//       </motion.div>
//     </section>
//   );
// }

// /* ── STATS BAND ───────────────────────────────────────────── */
// function StatsBand() {
//   const stats = [
//     { num: "100+", label: "Projects Delivered" },
//     { num: "10+",  label: "Years Combined Experience" },
//     { num: "Multi", label: "Industry Expertise" },
//     { num: "Global", label: "Clientele" },
//   ];
//   return (
//     <section style={{ padding: "0 48px 0", maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 20, marginTop: -1 }}>
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", background: "#fff", borderRadius: "0 0 20px 20px", border: "1px solid rgba(14,17,23,0.08)", boxShadow: "0 8px 40px rgba(11,21,37,0.08)", overflow: "hidden" }}>
//         {stats.map((s, i) => (
//           <motion.div key={i} className="sc"
//             initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
//             <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
//               style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: G, transformOrigin: "left" }} />
//             <p className="syne" style={{ fontSize: 42, fontWeight: 800, color: NAVY, lineHeight: 1, marginBottom: 6 }}>{s.num}</p>
//             <p style={{ fontSize: 13, color: "rgba(11,21,37,0.5)", letterSpacing: "0.02em" }}>{s.label}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ── CORE SOLUTIONS ───────────────────────────────────────── */
// const SOLUTIONS = [
//   {
//     tag: "Digital Foundation",
//     icon: "🖥",
//     items: ["Enterprise Website Development","Custom Web Applications","Scalable Mobile Apps","UI/UX Engineering"],
//     color: "rgba(0,201,167,0.08)",
//   },
//   {
//     tag: "CRM & Automation",
//     icon: "⚙️",
//     items: ["Custom CRM Development","Sales Pipeline Automation","Marketing Automation","WhatsApp & API Integrations","CRM Dashboard & Analytics"],
//     color: "rgba(27,143,110,0.08)",
//   },
//   {
//     tag: "Business Systems",
//     icon: "🏗",
//     items: ["ERP Development","Inventory & Billing Systems","Lead Management Software","Vendor & HR Management"],
//     color: "rgba(0,201,167,0.06)",
//   },
//   {
//     tag: "Growth & Optimization",
//     icon: "📈",
//     items: ["SEO & Performance Marketing","Funnel Engineering","Conversion Rate Optimization","Analytics & Reporting Systems"],
//     color: "rgba(27,143,110,0.06)",
//   },
// ];

// function CoreSolutions() {
//   return (
//     <section style={{ padding: "100px 48px", maxWidth: 1200, margin: "0 auto" }}>
//       <div className="eye"><span className="eye-bar" /><span className="eye-txt mono">What we build</span></div>
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start", marginBottom: 20 }}>
//         <div>
//           <h2 className="syne" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.025em", color: NAVY }}>
//             Our Core<br /><span className="gtxt">Solutions</span>
//           </h2>
//         </div>
//         <p style={{ fontSize: 16, lineHeight: 1.78, color: "rgba(11,21,37,0.54)", alignSelf: "end" }}>
//           From the digital storefront your customers see to the backend systems that power your operations — we engineer every layer.
//         </p>
//       </div>
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, marginTop: 20 }}>
//         {SOLUTIONS.map((s, i) => (
//           <motion.div key={i} className="card"
//             initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
//             style={{ background: "#fff" }}>
//             <div style={{ width: 48, height: 48, borderRadius: 14, background: s.color, border: `1px solid rgba(0,201,167,0.15)`, display: "grid", placeItems: "center", fontSize: 22, marginBottom: 16 }}>{s.icon}</div>
//             <span className="tag">{s.tag}</span>
//             <ul style={{ marginTop: 10, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
//               {s.items.map(it => (
//                 <li key={it} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "rgba(11,21,37,0.65)", lineHeight: 1.4 }}>
//                   <span style={{ color: TEAL, marginTop: 2, flexShrink: 0 }}>›</span>{it}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ── ENTERPRISE POSITIONING ───────────────────────────────── */
// function Enterprise() {
//   const pillars = ["Cloud-ready","Secure by design","API-driven","Built for scale","Enterprise architecture compliant"];
//   return (
//     <section style={{ background: NAVY, padding: "100px 48px", position: "relative", overflow: "hidden" }}>
//       <div style={{ position: "absolute", top: -180, left: -180, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />
//       <div style={{ position: "absolute", bottom: -180, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(27,143,110,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />
//       <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
//         <div className="eye"><span className="eye-bar" /><span className="eye-txt mono">Enterprise grade</span></div>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
//           <div>
//             <h2 className="syne" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.025em", marginBottom: 24 }}>
//               A Secure, Scalable &<br /><span className="gtxt">Future-Ready</span> Digital Core
//             </h2>
//             <p style={{ fontSize: 16, lineHeight: 1.78, color: "rgba(255,255,255,0.55)", marginBottom: 36 }}>
//               At NNC Digital Solutions, we build governed digital infrastructures that integrate seamlessly with your business workflows. Whether you're a startup, SME, or enterprise, we architect systems that evolve with your growth.
//             </p>
//             <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
//               {pillars.map(p => (
//                 <div key={p} style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(0,201,167,0.08)", border: "1px solid rgba(0,201,167,0.2)", borderRadius: 50, padding: "8px 16px" }}>
//                   <span style={{ width: 8, height: 8, borderRadius: "50%", background: TEAL, flexShrink: 0 }} />
//                   <span style={{ fontSize: 13, color: "rgba(255,255,255,0.78)", fontWeight: 500 }}>{p}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
//             {[
//               { icon: "🔐", title: "Security First", desc: "End-to-end encryption, role-based access, and enterprise compliance built in from day one." },
//               { icon: "☁️", title: "Cloud Native", desc: "Deployed on scalable cloud infrastructure with 99.9% uptime guarantees." },
//               { icon: "🔗", title: "API Driven", desc: "Every system we build is designed to talk to your existing tools and third-party platforms." },
//               { icon: "📊", title: "Data Intelligence", desc: "Real-time dashboards and reporting that transform raw data into business decisions." },
//             ].map((c, i) => (
//               <motion.div key={i} className="dcard"
//                 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
//                 <div style={{ fontSize: 28, marginBottom: 14 }}>{c.icon}</div>
//                 <h4 style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 8 }}>{c.title}</h4>
//                 <p style={{ fontSize: 13, lineHeight: 1.65, color: "rgba(255,255,255,0.44)" }}>{c.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ── INDUSTRIES ───────────────────────────────────────────── */
// const INDUSTRIES = [
//   { icon: "🏥", name: "Healthcare" },
//   { icon: "🏢", name: "Real Estate" },
//   { icon: "🛒", name: "E-commerce" },
//   { icon: "🏭", name: "Manufacturing" },
//   { icon: "🎓", name: "Education" },
//   { icon: "🍽", name: "Hospitality" },
//   { icon: "🚚", name: "Logistics" },
//   { icon: "💳", name: "Finance" },
//   { icon: "💼", name: "Professional Services" },
// ];

// function Industries() {
//   return (
//     <section style={{ padding: "100px 48px", maxWidth: 1200, margin: "0 auto" }}>
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "center" }}>
//         <div>
//           <div className="eye"><span className="eye-bar" /><span className="eye-txt mono">Industries we serve</span></div>
//           <h2 className="syne" style={{ fontSize: "clamp(30px,3.5vw,46px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>
//             Helping Businesses<br /><span className="gtxt">Across Industries</span>
//           </h2>
//           <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(11,21,37,0.55)", maxWidth: 320 }}>
//             Every industry has unique operational challenges. We build customized digital ecosystems tailored to industry-specific workflows.
//           </p>
//         </div>
//         <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
//           {INDUSTRIES.map((ind, i) => (
//             <motion.div key={i} className="ichip"
//               initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
//               style={{ background: NAVY2, color: "rgba(255,255,255,0.72)", borderColor: "rgba(0,201,167,0.2)" }}>
//               {ind.icon} {ind.name}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ── SUCCESS STORIES ──────────────────────────────────────── */
// function SuccessStories() {
//   const stories = [
//     {
//       tag: "Manufacturing · CRM",
//       title: "Enterprise CRM for Manufacturing Client",
//       results: ["Automated dealer management","Real-time sales tracking","35% improvement in operational efficiency"],
//       metric: "35%", metricLabel: "Efficiency Gain",
//     },
//     {
//       tag: "Healthcare · Mobile + CRM",
//       title: "Mobile App + CRM for Healthcare Client",
//       results: ["Integrated booking system","WhatsApp notifications automation","Increased repeat bookings by 42%"],
//       metric: "42%", metricLabel: "Repeat Bookings",
//     },
//     {
//       tag: "E-commerce · Automation",
//       title: "Full Funnel Automation for D2C Brand",
//       results: ["End-to-end lead nurturing flows","Google & Meta ad integration","2.4× lead conversion improvement"],
//       metric: "2.4×", metricLabel: "Lead Conversion",
//     },
//   ];
//   return (
//     <section style={{ padding: "100px 48px", background: NAVY, position: "relative", overflow: "hidden" }}>
//       <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 900, height: 900, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.04) 0%,transparent 65%)", pointerEvents: "none" }} />
//       <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
//         <div className="eye"><span className="eye-bar" /><span className="eye-txt mono">Case studies</span></div>
//         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52 }}>
//           <h2 className="syne" style={{ fontSize: "clamp(30px,3.5vw,48px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
//             Real Systems.<br /><span className="gtxt">Real Results.</span>
//           </h2>
//           <button className="btn-outline">View All Case Studies →</button>
//         </div>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
//           {stories.map((s, i) => (
//             <motion.div key={i} className="ssc"
//               initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}>
//               <span className="tag" style={{ marginBottom: 16 }}>{s.tag}</span>
//               <h3 className="syne" style={{ fontSize: 20, fontWeight: 700, color: "#fff", lineHeight: 1.25, marginBottom: 20 }}>{s.title}</h3>
//               <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
//                 {s.results.map(r => (
//                   <li key={r} style={{ display: "flex", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
//                     <span style={{ color: TEAL, flexShrink: 0 }}>✓</span>{r}
//                   </li>
//                 ))}
//               </ul>
//               <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 20, display: "flex", alignItems: "center", gap: 12 }}>
//                 <span className="syne gtxt" style={{ fontSize: 40, fontWeight: 800, lineHeight: 1 }}>{s.metric}</span>
//                 <span style={{ fontSize: 13, color: "rgba(255,255,255,0.42)" }}>{s.metricLabel}</span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ── PROCESS ──────────────────────────────────────────────── */
// const STEPS = [
//   { n: "01", title: "Discovery & Requirement Analysis", body: "We deeply understand your workflows, team structure, and operational bottlenecks — not just your feature wishlist." },
//   { n: "02", title: "Architecture & Planning", body: "We design a scalable, secure digital blueprint specific to your business model and integration ecosystem." },
//   { n: "03", title: "Development & Integration", body: "Agile sprints with weekly demos. Seamless API integrations. You see it working before it ships." },
//   { n: "04", title: "Testing & Optimization", body: "Performance, security, and scalability validation. No shortcuts." },
//   { n: "05", title: "Deployment & Growth Support", body: "Smooth rollout, team training, and continuous optimization. We don't disappear at go-live." },
// ];

// function Process() {
//   return (
//     <section style={{ padding: "100px 48px", maxWidth: 1200, margin: "0 auto" }}>
//       <div className="eye"><span className="eye-bar" /><span className="eye-txt mono">How we work</span></div>
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
//         <div>
//           <h2 className="syne" style={{ fontSize: "clamp(30px,3.5vw,48px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 20 }}>
//             A process built for<br /><span className="gtxt">real businesses.</span>
//           </h2>
//           <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(11,21,37,0.52)", maxWidth: 340 }}>
//             Five steps from first conversation to a live system that your team actually uses.
//           </p>
//           <div style={{ marginTop: 40, padding: "28px 28px", background: NAVY, borderRadius: 18, border: `1px solid rgba(0,201,167,0.15)` }}>
//             <p className="syne" style={{ fontSize: 32, fontWeight: 800, color: TEAL, lineHeight: 1, marginBottom: 6 }}>6–12 Weeks</p>
//             <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>Typical delivery timeline for a fully custom CRM or ERP system</p>
//           </div>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//           {STEPS.map((s, i) => (
//             <motion.div key={i} className="pstep"
//               initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
//               <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.2)", display: "grid", placeItems: "center", flexShrink: 0 }}>
//                 <span className="mono" style={{ fontSize: 11, color: TEAL, fontWeight: 700 }}>{s.n}</span>
//               </div>
//               <div>
//                 <h4 className="syne" style={{ fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{s.title}</h4>
//                 <p style={{ fontSize: 13, lineHeight: 1.65, color: "rgba(11,21,37,0.52)" }}>{s.body}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ── GLOBAL REACH ─────────────────────────────────────────── */
// function GlobalReach() {
//   const regions = ["Mumbai","Bangalore","Mysore","Delhi","USA","UK","Canada","Middle East","Australia"];
//   return (
//     <section style={{ padding: "100px 48px", background: NAVY, position: "relative", overflow: "hidden" }}>
//       <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize: "50px 50px", pointerEvents: "none" }} />
//       <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center" }}>
//         <div className="eye" style={{ justifyContent: "center" }}><span className="eye-bar" /><span className="eye-txt mono">Global reach</span><span className="eye-bar" /></div>
//         <h2 className="syne" style={{ fontSize: "clamp(30px,4vw,52px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 20 }}>
//           Delivering Digital Excellence<br /><span className="gtxt">Across Markets</span>
//         </h2>
//         <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", maxWidth: 540, margin: "0 auto 48px", lineHeight: 1.75 }}>
//           We serve startups, SMEs, and enterprises globally — building systems that meet international compliance and performance standards.
//         </p>
//         <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
//           {regions.map((r, i) => (
//             <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
//               style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,201,167,0.18)", borderRadius: 50, padding: "10px 22px", fontSize: 14, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
//               📍 {r}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ── BLOG INSIGHTS ────────────────────────────────────────── */
// const BLOGS = [
//   { tag: "CRM", title: "CRM Implementation Guide for Growing Businesses", read: "8 min read", color: "rgba(0,201,167,0.1)" },
//   { tag: "Mobile", title: "Mobile App Cost Breakdown: What You're Actually Paying For", read: "6 min read", color: "rgba(27,143,110,0.1)" },
//   { tag: "Strategy", title: "ERP vs CRM Explained: Which Does Your Business Need?", read: "5 min read", color: "rgba(0,201,167,0.07)" },
//   { tag: "Automation", title: "Automation Strategies for Growing Businesses in 2025", read: "7 min read", color: "rgba(27,143,110,0.08)" },
//   { tag: "Sales", title: "How to Increase Lead Conversion by 2× with CRM Workflows", read: "9 min read", color: "rgba(0,201,167,0.09)" },
// ];

// function Blog() {
//   return (
//     <section style={{ padding: "100px 48px", maxWidth: 1200, margin: "0 auto" }}>
//       <div className="eye"><span className="eye-bar" /><span className="eye-txt mono">Insights</span></div>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
//         <h2 className="syne" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
//           Insights on Technology,<br /><span className="gtxt">Automation & Digital Growth</span>
//         </h2>
//         <a href="#" style={{ fontSize: 14, color: TEAL, textDecoration: "none", fontWeight: 500, whiteSpace: "nowrap" }}>View all articles →</a>
//       </div>
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 18 }}>
//         {BLOGS.map((b, i) => (
//           <motion.div key={i} className="bcard"
//             initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
//             <div style={{ height: 120, background: b.color, display: "grid", placeItems: "center", fontSize: 32 }}>
//               {["📋","📱","⚖️","🤖","📊"][i]}
//             </div>
//             <div style={{ padding: "20px 20px" }}>
//               <span className="tag">{b.tag}</span>
//               <h4 className="syne" style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.35, color: NAVY, marginBottom: 12, marginTop: 4 }}>{b.title}</h4>
//               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <span style={{ fontSize: 12, color: "rgba(11,21,37,0.4)" }}>{b.read}</span>
//                 <span style={{ fontSize: 12, color: TEAL, fontWeight: 500 }}>Read →</span>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ── FAQ ──────────────────────────────────────────────────── */
// function FAQ() {
//   const [open, setOpen] = useState(null);
//   const faqs = [
//     { q: "How much does custom CRM development cost?", a: "The cost depends on modules, integrations, automation complexity, and scalability requirements. We provide tailored proposals after understanding your business needs — no generic quotes." },
//     { q: "How long does it take to develop a CRM?", a: "Typically between 6–12 weeks depending on features and integrations. We'll give you a precise timeline after the discovery session." },
//     { q: "Can the CRM integrate with WhatsApp?", a: "Yes. We integrate WhatsApp Business API for automated communication, follow-ups, and lead notifications directly within the CRM workflow." },
//     { q: "Is the CRM scalable for multi-branch operations?", a: "Absolutely. Our CRM systems are designed with branch-level dashboards, role-based access, and multi-location data management from the ground up." },
//     { q: "Do you offer post-launch support?", a: "Yes. Every engagement includes a structured onboarding period, team training, and ongoing optimization cycles. We're your long-term technology partner, not a one-off vendor." },
//   ];
//   return (
//     <section style={{ padding: "100px 48px", background: NAVY }}>
//       <div style={{ maxWidth: 800, margin: "0 auto" }}>
//         <div className="eye" style={{ justifyContent: "center" }}><span className="eye-bar" /><span className="eye-txt mono">FAQ</span><span className="eye-bar" /></div>
//         <h2 className="syne" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: "#fff", textAlign: "center", marginBottom: 52, letterSpacing: "-0.02em" }}>
//           Frequently Asked <span className="gtxt">Questions</span>
//         </h2>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           {faqs.map((f, i) => (
//             <div key={i} className="faq" style={{ paddingBottom: 0 }}>
//               <button onClick={() => setOpen(open === i ? null : i)}
//                 style={{ width: "100%", background: "none", border: "none", padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "left" }}>
//                 <span className="syne" style={{ fontSize: 16, fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>{f.q}</span>
//                 <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25 }}
//                   style={{ fontSize: 22, color: TEAL, flexShrink: 0, marginLeft: 16 }}>+</motion.span>
//               </button>
//               <AnimatePresence>
//                 {open === i && (
//                   <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
//                     style={{ overflow: "hidden" }}>
//                     <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", paddingBottom: 24 }}>{f.a}</p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ── FINAL CTA ────────────────────────────────────────────── */
// function FinalCTA() {
//   return (
//     <section style={{ padding: "0 48px 100px", maxWidth: 1200, margin: "0 auto" }}>
//       <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }} transition={{ duration: 0.8 }}
//         style={{ background: G, borderRadius: 28, padding: "80px 72px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 48, flexWrap: "wrap", position: "relative", overflow: "hidden" }}>
//         <div style={{ position: "absolute", right: -80, bottom: -80, width: 400, height: 400, borderRadius: "50%", background: "rgba(0,0,0,0.1)", pointerEvents: "none" }} />
//         <div style={{ position: "absolute", left: "40%", top: -120, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.07)", pointerEvents: "none" }} />
//         <div style={{ position: "relative" }}>
//           <h2 className="syne" style={{ fontSize: "clamp(28px,3.5vw,50px)", color: "#fff", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.025em", marginBottom: 18 }}>
//             Ready to Transform<br />Your Business Operations?
//           </h2>
//           <p style={{ fontSize: 16, color: "rgba(255,255,255,0.78)", maxWidth: 440, lineHeight: 1.68 }}>
//             Let's design a digital system that gives you clarity, control, and predictable growth. One call — no commitment, no deck.
//           </p>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column", gap: 14, position: "relative", minWidth: 240 }}>
//           <button className="btn-white">Schedule a Consultation →</button>
//           <button style={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "14px 32px", borderRadius: 50, fontSize: 14, fontFamily: "Inter,sans-serif", cursor: "pointer", transition: "background 0.25s", textAlign: "center" }}
//             onMouseEnter={e => e.target.style.background = "rgba(255,255,255,0.2)"}
//             onMouseLeave={e => e.target.style.background = "rgba(255,255,255,0.12)"}>
//             Explore Our Solutions
//           </button>
//           <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", textAlign: "center" }}>
//             Response within 24 hours. No sales pressure.
//           </p>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// /* ── FOOTER ───────────────────────────────────────────────── */
// function Footer() {
//   return (
//     <footer style={{ background: "#070E1A", padding: "64px 48px 36px" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 48, marginBottom: 60 }}>
//           <div>
//             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
//               <LogoMark size={32} />
//               <div>
//                 <span className="syne" style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>NNC</span>
//                 <span className="syne" style={{ fontSize: 20, fontWeight: 400, color: TEAL }}> digital</span>
//               </div>
//             </div>
//             <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.38)", maxWidth: 240 }}>
//               Full-stack technology and automation partner. Building digital ecosystems that drive measurable growth.
//             </p>
//             <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", marginTop: 14 }}>
//               Backed by Nakshatra Namaha Creations
//             </p>
//           </div>
//           {[
//             { title: "Solutions", links: ["CRM Development","ERP Systems","Web Applications","Mobile Apps","Automation"] },
//             { title: "Industries", links: ["Healthcare","Real Estate","E-commerce","Manufacturing","Education"] },
//             { title: "Company", links: ["About Us","Case Studies","Process","Blog","Careers"] },
//             { title: "Connect", links: ["Book a Call","hello@nncdigital.com","LinkedIn","Mumbai · India","USA · UK · UAE"] },
//           ].map(col => (
//             <div key={col.title}>
//               <p className="mono" style={{ fontSize: 10, letterSpacing: "0.12em", color: TEAL, textTransform: "uppercase", marginBottom: 18 }}>{col.title}</p>
//               {col.links.map(l => <a key={l} href="#" className="fl">{l}</a>)}
//             </div>
//           ))}
//         </div>
//         <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
//           <p className="mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.24)", letterSpacing: "0.06em" }}>© 2025 NNC Digital Solutions. All rights reserved.</p>
//           <p className="mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.24)", letterSpacing: "0.06em" }}>Engineered for growth.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// /* ── APP ROOT ─────────────────────────────────────────────── */
// export default function App() {
//   return (
//     <>
//       <style>{CSS}</style>
//       <div className="nnc">
//         <Cursor />
//         <Nav />
//         <Hero />
//         <StatsBand />
//         <CoreSolutions />
//         <Enterprise />
//         <Industries />
//         <SuccessStories />
//         <Process />
//         <GlobalReach />
//         <Blog />
//         <FAQ />
//         <FinalCTA />
//         <Footer />
//       </div>
//     </>
//   );
// }


// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const TEAL = "#00C9A7";
// const G    = "linear-gradient(135deg, #00C9A7 0%, #1B8F6E 100%)";

// /* Stats shown below headline */
// const TRUST = ["100+ Projects", "10+ Yrs Experience", "Global Clientele", "Multi-Industry"];

// /* Lead form services */
// const SERVICES = [
//   "Custom CRM Development",
//   "ERP Development",
//   "Website / Web App",
//   "Mobile App",
//   "Marketing Automation",
//   "Other",
// ];

// export default function HeroSection() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y  = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
//   const op = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

//   return (
//     <section
//       ref={ref}
//       style={{
//         minHeight: "100vh",
//         background: "#0B1525",
//         position: "relative",
//         overflow: "hidden",
//         display: "flex",
//         alignItems: "center",
//         paddingTop: 100,
//       }}
//     >
//       {/* ── Background effects ── */}
//       <div style={{ position: "absolute", top: -100, left: -100, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.12) 0%,transparent 65%)", pointerEvents: "none" }} />
//       <div style={{ position: "absolute", bottom: -200, right: -200, width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle,rgba(27,143,110,0.08) 0%,transparent 65%)", pointerEvents: "none" }} />
//       <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

//       {/* Rotating rings */}
//       <motion.div animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
//         style={{ position: "absolute", right: -200, top: "50%", marginTop: -400, width: 800, height: 800, borderRadius: "50%", border: "1px solid rgba(0,201,167,0.1)", pointerEvents: "none" }} />
//       <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//         style={{ position: "absolute", right: -80, top: "50%", marginTop: -280, width: 560, height: 560, borderRadius: "50%", border: "1px solid rgba(0,201,167,0.18)", pointerEvents: "none" }} />

//       {/* ── Content ── */}
//       <motion.div style={{ y, opacity: op, width: "100%", position: "relative", zIndex: 10 }}>
//         <div style={{
//           maxWidth: 1200, margin: "0 auto", padding: "0 48px",
//           display: "grid", gridTemplateColumns: "1fr 400px",
//           gap: 64, alignItems: "center",
//         }}>

//           {/* LEFT */}
//           <div>
//             {/* Eyebrow */}
//             <motion.div className="eye"
//               initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2, duration: 0.7 }}>
//               <span className="eye-bar" />
//               <span className="eye-txt mono">Full-Stack Technology & Automation Partner</span>
//             </motion.div>

//             {/* Headline */}
//             <h1 className="syne" style={{ fontSize: "clamp(44px,6vw,82px)", fontWeight: 800, lineHeight: 1.06, color: "#fff", letterSpacing: "-0.025em", marginBottom: 28 }}>
//               <motion.span initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//                 style={{ display: "block" }}>
//                 Build Once.
//               </motion.span>
//               <motion.span initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
//                 style={{ display: "block" }}>
//                 Scale{" "}
//                 <span className="gtxt">Everywhere.</span>
//               </motion.span>
//             </h1>

//             {/* Sub */}
//             <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}
//               style={{ fontSize: 17, lineHeight: 1.78, color: "rgba(255,255,255,0.62)", maxWidth: 500, marginBottom: 16 }}>
//               We design and develop scalable digital systems that automate operations, accelerate revenue, and transform growing businesses into high-performance enterprises.
//             </motion.p>

//             <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.82, duration: 0.7 }}
//               style={{ fontSize: 15, lineHeight: 1.72, color: "rgba(255,255,255,0.42)", maxWidth: 480, marginBottom: 44 }}>
//               From conversion-driven websites and mobile apps to fully customized CRM and ERP solutions — NNC Digital Solutions becomes your long-term technology growth partner.
//             </motion.p>

//             {/* CTAs */}
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
//               style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
//               <button className="btn-primary">Book a Strategy Call</button>
//               <button className="btn-outline">
//                 <span>Explore Our Solutions</span>
//                 <span style={{ fontSize: 17 }}>→</span>
//               </button>
//             </motion.div>

//             {/* Trust */}
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
//               style={{ display: "flex", gap: 28, marginTop: 48, flexWrap: "wrap" }}>
//               {TRUST.map((t) => (
//                 <div key={t} style={{ display: "flex", alignItems: "center", gap: 7 }}>
//                   <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(0,201,167,0.15)", border: "1px solid rgba(0,201,167,0.35)", display: "grid", placeItems: "center", fontSize: 10, color: TEAL }}>✓</span>
//                   <span style={{ fontSize: 13, color: "rgba(255,255,255,0.52)", fontWeight: 500 }}>{t}</span>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* RIGHT — Lead Form */}
//           <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}>
//             <div style={{
//               background: "rgba(255,255,255,0.05)",
//               border: "1px solid rgba(255,255,255,0.1)",
//               borderRadius: 24, padding: "40px 36px",
//               backdropFilter: "blur(16px)",
//               position: "relative", overflow: "hidden",
//             }}>
//               {/* Top gradient bar */}
//               <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: G }} />

//               <p className="mono eye-txt" style={{ marginBottom: 10 }}>Start your journey</p>
//               <h3 className="syne" style={{ fontSize: 22, fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: 28 }}>
//                 Need a Digital System That Grows Your Business?
//               </h3>

//               <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
//                 <input type="text"  placeholder="Full Name"     className="fi" />
//                 <input type="email" placeholder="Work Email"    className="fi" />
//                 <input type="text"  placeholder="Company Name"  className="fi" />
//                 <input type="tel"   placeholder="Phone Number"  className="fi" />

//                 <select className="fi" defaultValue="" style={{ cursor: "pointer" }}>
//                   <option value="" disabled>Service of Interest</option>
//                   {SERVICES.map((s) => <option key={s}>{s}</option>)}
//                 </select>

//                 <button className="btn-teal" style={{ marginTop: 4 }}>
//                   Schedule Consultation →
//                 </button>
//                 <p style={{ fontSize: 12, color: "rgba(255,255,255,0.32)", textAlign: "center", lineHeight: 1.5 }}>
//                   No commitment required. Response within 24 hours.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </motion.div>

//       {/* Scroll cue */}
//       <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.2, repeat: Infinity }}
//         style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.35 }}>
//         <span className="mono" style={{ fontSize: 10, color: "#fff", letterSpacing: "0.1em" }}>SCROLL</span>
//         <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom,#fff,transparent)" }} />
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TEAL = "#00C9A7";
const G    = "linear-gradient(135deg, #00C9A7 0%, #1B8F6E 100%)";

/* Stats shown below headline */
const TRUST = [
  "100+ Projects Delivered",
  "10+ Years Combined Experience",
  "Multi-Industry Expertise",
  "Global Clientele"
];

/* Lead form services */
const SERVICES = [
  "Custom CRM Development",
  "ERP Development",
  "Website / Web App",
  "Mobile App",
  "Marketing Automation",
  "Other",
];

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y  = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const op = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        background: "#0B1525",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        paddingTop: 100,
      }}
    >
      {/* ── Background effects ── */}
      <div style={{ position: "absolute", top: -100, left: -100, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,201,167,0.12) 0%,transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -200, right: -200, width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle,rgba(27,143,110,0.08) 0%,transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

      {/* Rotating rings */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", right: -200, top: "50%", marginTop: -400, width: 800, height: 800, borderRadius: "50%", border: "1px solid rgba(0,201,167,0.1)", pointerEvents: "none" }} />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", right: -80, top: "50%", marginTop: -280, width: 560, height: 560, borderRadius: "50%", border: "1px solid rgba(0,201,167,0.18)", pointerEvents: "none" }} />

      {/* ── Content ── */}
      <motion.div style={{ y, opacity: op, width: "100%", position: "relative", zIndex: 10 }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 48px",
          display: "grid", gridTemplateColumns: "1fr 400px",
          gap: 64, alignItems: "center",
        }}>

          {/* LEFT */}
          <div>
            {/* Eyebrow */}
            <motion.div className="eye"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}>
              <span className="eye-bar" />
              <span className="eye-txt mono">Full-Stack Technology & Automation Partner</span>
            </motion.div>

            {/* Headline */}
            <h1 className="syne" style={{ fontSize: "clamp(44px,6vw,82px)", fontWeight: 800, lineHeight: 1.06, color: "#fff", letterSpacing: "-0.025em", marginBottom: 28 }}>
              <motion.span initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "block" }}>
                Build Once.
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "block" }}>
                Scale <span className="gtxt">Everywhere.</span>
              </motion.span>
            </h1>

            {/* Sub */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}
              style={{ fontSize: 17, lineHeight: 1.78, color: "rgba(255,255,255,0.62)", maxWidth: 500, marginBottom: 16 }}>
              We design and develop scalable digital systems that automate operations, accelerate revenue, and transform growing businesses into high-performance enterprises.
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.82, duration: 0.7 }}
              style={{ fontSize: 15, lineHeight: 1.72, color: "rgba(255,255,255,0.42)", maxWidth: 480, marginBottom: 24 }}>
              From conversion-driven websites and mobile apps to fully customized CRM and ERP solutions — NNC Digital Solutions becomes your long-term technology growth partner.
            </motion.p>

            {/* ── Trust & Credibility Strip ── */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }}
              style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 44 }}>
              {TRUST.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(0,201,167,0.15)", border: `1px solid rgba(0,201,167,0.35)`, display: "grid", placeItems: "center", fontSize: 12, color: TEAL }}>✔</span>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
              style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="btn-primary">Book a Strategy Call</button>
              <button className="btn-outline">
                <span>Explore Our Solutions</span>
                <span style={{ fontSize: 17 }}>→</span>
              </button>
            </motion.div>
          </div>

          {/* RIGHT — Lead Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <div style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 24, padding: "40px 36px",
              backdropFilter: "blur(16px)",
              position: "relative", overflow: "hidden",
            }}>
              {/* Top gradient bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: G }} />

              <p className="mono eye-txt" style={{ marginBottom: 10 }}>Start your journey</p>
              <h3 className="syne" style={{ fontSize: 22, fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: 28 }}>
                Need a Digital System That Grows Your Business?
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                <input type="text"  placeholder="Full Name"     className="fi" />
                <input type="email" placeholder="Work Email"    className="fi" />
                <input type="text"  placeholder="Company Name"  className="fi" />
                <input type="tel"   placeholder="Phone Number"  className="fi" />

<select
  className="fi"
  defaultValue=""
  style={{
    cursor: "pointer",
    backgroundColor: "rgba(0,201,167,0.1)", // tealish background
    color: "#fff", // text color when closed
    border: "1px solid #00C9A7",
    borderRadius: 8,
    padding: "10px 12px",
    fontSize: 14,
    outline: "none",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
  }}
>
  <option value="" disabled style={{ color: "#aaa" }}>
    Service of Interest
  </option>
  {SERVICES.map((s) => (
    <option
      key={s}
      value={s}
      style={{
        color: "#000", // text color inside the open dropdown menu
        backgroundColor: "#fff", // dropdown menu background
      }}
    >
      {s}
    </option>
  ))}
</select>

                <button className="btn-teal" style={{ marginTop: 4 }}>
                  Schedule Consultation →
                </button>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.32)", textAlign: "center", lineHeight: 1.5 }}>
                   Response within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.2, repeat: Infinity }}
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.35 }}>
        <span className="mono" style={{ fontSize: 10, color: "#fff", letterSpacing: "0.1em" }}>SCROLL</span>
        <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom,#fff,transparent)" }} />
      </motion.div>
    </section>
  );
}