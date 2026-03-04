// "use client";

// import { ArrowRight } from "lucide-react";

// export default function ConnectCTASection() {
//   return (
//     <section className="relative py-36 overflow-hidden bg-gradient-to-br from-[#0f1226] via-[#141833] to-[#1b1f46] flex items-center justify-center">
      
//       {/* animated glow blobs */}
//       <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-blue-500/20 rounded-full blur-3xl animate-pulse [animation-delay:1.5s]" />

//       {/* content */}
//       <div className="relative text-center text-white max-w-3xl px-6">
        
//         {/* small label */}
//         <p className="text-[11px] tracking-[0.35em] uppercase text-white/70 mb-6 animate-fadeUp">
//           CONNECT WITH US
//         </p>

//         {/* headline */}
//         <h2 className="text-[44px] md:text-[56px] leading-[1.1] font-semibold mb-6 animate-fadeUp [animation-delay:0.1s]">
//           We’re ready to talk <br />
//           opportunities
//         </h2>

//         {/* desc */}
//         <p className="text-white/70 text-[17px] mb-10 leading-relaxed animate-fadeUp [animation-delay:0.2s]">
//           Build an application on our platform in just a day. Our team is ready
//           to help you accelerate development and scale your digital products.
//         </p>

//         {/* button */}
//         <button className="group relative inline-flex items-center gap-2 bg-[#5668ff] px-8 py-4 rounded-xl font-medium text-[15px] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#4457ff] animate-fadeUp [animation-delay:0.3s]">
//           <span className="relative z-10 flex items-center gap-2">
//             Get started
//             <ArrowRight
//               size={18}
//               className="transition-transform duration-300 group-hover:translate-x-1"
//             />
//           </span>

//           {/* shine effect */}
//           <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition">
//             <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
//           </span>
//         </button>
//       </div>

//       {/* custom fade animation */}
//       <style jsx>{`
//         .animate-fadeUp {
//           opacity: 0;
//           transform: translateY(30px);
//           animation: fadeUp 0.8s ease forwards;
//         }
//         @keyframes fadeUp {
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="py-28 bg-gray-50 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          Let’s Build Your <span className="text-[#14B8A6]">Growth System</span>
        </motion.h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Ready to transform your sales and operations with intelligent automation?
          Let’s design a structured digital ecosystem tailored to your business.
        </p>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* LEFT - FORM */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <h2 className="text-3xl font-semibold mb-8">
              Schedule a Strategy Consultation
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-200 rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
              />

              <input
                type="email"
                placeholder="Business Email"
                className="w-full border border-gray-200 rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full border border-gray-200 rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your current challenges..."
                className="w-full border border-gray-200 rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#14B8A6] text-white py-4 rounded-full font-semibold hover:opacity-90 transition"
              >
                Book Strategy Call
              </button>

            </form>
          </motion.div>

          {/* RIGHT - INFO */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-semibold mb-8">
              Contact Information
            </h2>

            <div className="space-y-6 text-gray-600 text-lg">

              <div>
                <strong className="text-gray-800">Email:</strong>
                <p>info@nncdigitalsolutions.com</p>
              </div>

              <div>
                <strong className="text-gray-800">Phone:</strong>
                <p>+91 xxxx xxxx</p>
              </div>

              <div>
                <strong className="text-gray-800">Head Office:</strong>
                <p>Mumbai, India</p>
              </div>

              <div>
                <strong className="text-gray-800">Global Reach:</strong>
                <p>India | USA | UK | Canada | Middle East | Australia</p>
              </div>

            </div>

            {/* WhatsApp Button */}
            <a
              href="#"
              className="mt-10 inline-block bg-[#14B8A6]/10 text-[#14B8A6] px-8 py-4 rounded-full font-semibold hover:bg-[#14B8A6] hover:text-white transition"
            >
              Chat on WhatsApp
            </a>

          </motion.div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-[#14B8A6] text-white text-center">

        <h2 className="text-4xl font-semibold mb-6">
          Ready to Transform Your Operations?
        </h2>

        <p className="max-w-2xl mx-auto mb-8 text-white/90 text-lg">
          Let’s architect a CRM and automation system that gives you clarity,
          control, and predictable revenue growth.
        </p>

        <button className="bg-white text-[#14B8A6] px-10 py-4 rounded-full font-semibold hover:opacity-90 transition">
          Schedule Consultation
        </button>

      </section>

    </div>
  );
}