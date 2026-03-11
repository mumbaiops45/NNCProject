// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { useEffect, useState } from "react";

// // // const stats = [
// // //   { value: 100, suffix: "+", label: "Projects Delivered", icon: "🚀" },
// // //   { value: 10, suffix: "+", label: "Years of Expertise", icon: "💡" },
// // //   { value: 50, suffix: "+", label: "Clients Worldwide", icon: "🌍" },
// // //   { value: 98, suffix: "%", label: "Client Retention", icon: "🤝" },
// // // ];

// // // function Counter({ value, suffix }) {
// // //   const [count, setCount] = useState(0);

// // //   useEffect(() => {
// // //     let start = 0;
// // //     const end = value;

// // //     const timer = setInterval(() => {
// // //       start += 1;
// // //       setCount(start);
// // //       if (start === end) clearInterval(timer);
// // //     }, 20);

// // //     return () => clearInterval(timer);
// // //   }, [value]);

// // //   return (
// // //     <>
// // //       {count}
// // //       {suffix}
// // //     </>
// // //   );
// // // }

// // // export default function StatsBar() {
// // //   return (
// // //     <section
// // //       style={{
// // //         // padding: " 2px",
// // //         background: "#030B18",
// // //       }}
// // //     >
// // //       <div
// // //         style={{
// // //           maxWidth: 1100,
// // //           margin: "auto",
// // //           display: "grid",
// // //           gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
// // //           gap: 24,
// // //         }}
// // //       >
// // //         {stats.map((stat, i) => (
// // //           <motion.div
// // //             key={i}
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             whileHover={{ y: -4 }}
// // //             transition={{ delay: i * 0.1 }}
// // //             viewport={{ once: true }}
// // //             style={{
// // //               background: "rgba(255,255,255,0.04)",
// // //               border: "1px solid rgba(255,255,255,0.08)",
// // //               borderRadius: 14,
// // //               padding: "28px 22px",
// // //               backdropFilter: "blur(10px)",
// // //             }}
// // //           >
// // //             {/* icon */}
// // //             <div
// // //               style={{
// // //                 fontSize: 22,
// // //                 marginBottom: 10,
// // //               }}
// // //             >
// // //               {stat.icon}
// // //             </div>

// // //             {/* number */}
// // //             <div
// // //               style={{
// // //                 fontSize: 38,
// // //                 fontWeight: 800,
// // //                 color: "#00C9A7",
// // //                 marginBottom: 4,
// // //               }}
// // //             >
// // //               <Counter value={stat.value} suffix={stat.suffix} />
// // //             </div>

// // //             {/* label */}
// // //             <div
// // //               style={{
// // //                 fontSize: 13,
// // //                 opacity: 0.7,
// // //               }}
// // //             >
// // //               {stat.label}
// // //             </div>
// // //           </motion.div>
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // "use client";

// // import { motion } from "framer-motion";
// // import { useEffect, useState } from "react";

// // const stats = [
// //   { value: 100, suffix: "+", label: "Projects Delivered", icon: "🚀" },
// //   { value: 10, suffix: "+", label: "Years of Expertise", icon: "💡" },
// //   { value: 50, suffix: "+", label: "Clients Worldwide", icon: "🌍" },
// //   { value: 98, suffix: "%", label: "Client Retention", icon: "🤝" },
// // ];

// // function Counter({ value, suffix }: { value: number; suffix: string }) {
// //   const [count, setCount] = useState(0);

// //   useEffect(() => {
// //     let start = 0;

// //     const timer = setInterval(() => {
// //       start += 1;
// //       setCount(start);

// //       if (start === value) clearInterval(timer);
// //     }, 20);

// //     return () => clearInterval(timer);
// //   }, [value]);

// //   return (
// //     <>
// //       {count}
// //       {suffix}
// //     </>
// //   );
// // }

// // export default function StatsBar() {
// //   return (
// //     <section
// //       style={{
// //         padding: "70px 20px",
// //         background: "#030B18",
// //       }}
// //     >
// //       <div
// //         style={{
// //           maxWidth: 1100,
// //           margin: "auto",
// //           display: "grid",
// //           gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
// //           gap: 24,
// //         }}
// //       >
// //         {stats.map((stat, i) => (
// //           <motion.div
// //             key={i}
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             whileHover={{
// //               y: -6,
// //               borderColor: "#00C9A7",
// //               boxShadow: "0 10px 30px rgba(0,201,167,0.2)",
// //             }}
// //             transition={{ delay: i * 0.1 }}
// //             viewport={{ once: true }}
// //             style={{
// //               background: "rgba(255,255,255,0.03)",
// //               border: "1px solid rgba(255,255,255,0.08)",
// //               borderRadius: 14,
// //               padding: "28px 22px",
// //               backdropFilter: "blur(10px)",
// //               textAlign: "center",
// //             }}
// //           >
// //             {/* icon */}
// //             <div
// //               style={{
// //                 fontSize: 24,
// //                 marginBottom: 10,
// //               }}
// //             >
// //               {stat.icon}
// //             </div>

// //             {/* number */}
// //             <div
// //               style={{
// //                 fontSize: 38,
// //                 fontWeight: 800,
// //                 background: "linear-gradient(90deg,#00C9A7,#1fd1b5)",
// //                 WebkitBackgroundClip: "text",
// //                 WebkitTextFillColor: "transparent",
// //                 marginBottom: 4,
// //               }}
// //             >
// //               <Counter value={stat.value} suffix={stat.suffix} />
// //             </div>

// //             {/* label */}
// //             <div
// //               style={{
// //                 fontSize: 13,
// //                 opacity: 0.7,
// //                 color: "#fff",
// //               }}
// //             >
// //               {stat.label}
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// const STATS = [
//   { value: 100, suffix: "+", label: "Projects Delivered",    sub: "Across 12 countries",  icon: "🚀" },
//   { value: 10,  suffix: "+", label: "Years of Excellence",   sub: "Deep tech since 2014",  icon: "💡" },
//   { value: 50,  suffix: "+", label: "Global Clients",        sub: "CA · USA · UK · IN",    icon: "🌍" },
//   { value: 98,  suffix: "%", label: "Client Retention Rate", sub: "Long-term partnerships", icon: "🤝" },
// ];

// function Counter({ value, suffix, trigger }: { value: number; suffix: string; trigger: boolean }) {
//   const [count,   setCount]   = useState(0);
//   const started = useRef(false);

//   useEffect(() => {
//     if (!trigger || started.current) return;
//     started.current = true;
//     const steps = 64, duration = 1600;
//     let step = 0;
//     const timer = setInterval(() => {
//       step++;
//       const eased = 1 - Math.pow(1 - step / steps, 3);
//       setCount(Math.round(eased * value));
//       if (step >= steps) { setCount(value); clearInterval(timer); }
//     }, duration / steps);
//     return () => clearInterval(timer);
//   }, [trigger, value]);

//   return <>{count}{suffix}</>;
// }

// export default function StatsBar() {
//   const [visible, setVisible] = useState(false);
//   const ref = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const ob = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) setVisible(true); },
//       { threshold: 0.25 }
//     );
//     if (ref.current) ob.observe(ref.current);
//     return () => ob.disconnect();
//   }, []);

//   return (
//     <section
//       ref={ref}
//       className="relative overflow-hidden py-20 px-12"
//       style={{ background: "linear-gradient(180deg, #061425 0%, #030B18 100%)" }}
//     >
//       {/* Scan line top */}
//       <div className="absolute top-0 left-0 right-0 h-0.5 opacity-35 scan-line" />

//       {/* Centre glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
//                       w-[600px] h-[300px] rounded-full pointer-events-none"
//            style={{ background: "radial-gradient(ellipse, rgba(0,201,167,0.07) 0%, transparent 70%)" }} />

//       <div className="relative z-10 max-w-[1100px] mx-auto
//                       grid grid-cols-2 md:grid-cols-4 gap-0">
//         {STATS.map((stat, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             animate={visible ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//             className={`relative text-center px-7 py-9 transition-colors duration-300
//                         hover:bg-teal/[0.04]
//                         ${i < 3 ? "border-r border-white/6" : ""}`}
//           >
//             <div className="text-[28px] mb-3">{stat.icon}</div>

//             <div className="font-display font-extrabold leading-none mb-2 grad-text"
//                  style={{ fontSize: "clamp(38px, 4vw, 50px)" }}>
//               <Counter value={stat.value} suffix={stat.suffix} trigger={visible} />
//             </div>

//             <div className="text-white text-[14.5px] font-semibold mb-1 font-body">
//               {stat.label}
//             </div>
//             <div className="text-white/35 text-[12px] font-body">
//               {stat.sub}
//             </div>

//             {/* Bottom underline */}
//             <motion.div
//               initial={{ scaleX: 0 }}
//               animate={visible ? { scaleX: 1 } : {}}
//               transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
//               className="absolute bottom-0 left-[25%] right-[25%] h-0.5 origin-center"
//               style={{ background: "linear-gradient(90deg, transparent, #00C9A7, transparent)" }}
//             />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const STATS = [
  { value:100, suffix:"+", label:"Projects Delivered",    sub:"Across 12 countries",   icon:"🚀" },
  { value:10,  suffix:"+", label:"Years of Excellence",   sub:"Deep tech since 2014",   icon:"💡" },
  { value:50,  suffix:"+", label:"Global Clients",        sub:"CA · USA · UK · IN",     icon:"🌍" },
  { value:98,  suffix:"%", label:"Client Retention Rate", sub:"Long-term partnerships", icon:"🤝" },
];

function Counter({ value, suffix, trigger }: { value:number; suffix:string; trigger:boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!trigger || started.current) return;
    started.current = true;
    let step = 0;
    const steps = 64, duration = 1600;
    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step/steps, 3);
      setCount(Math.round(eased * value));
      if (step >= steps) { setCount(value); clearInterval(timer); }
    }, duration/steps);
    return () => clearInterval(timer);
  }, [trigger, value]);
  return <>{count}{suffix}</>;
}

export default function StatsBar() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold:0.25 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section ref={ref} style={{
      position:"relative", overflow:"hidden", padding:"80px 48px",
      background:"linear-gradient(180deg,#061425 0%,#030B18 100%)",
      borderTop:"1px solid rgba(0,201,167,0.1)",
      borderBottom:"1px solid rgba(0,201,167,0.1)",
    }}>
      {/* Scan line */}
      <div className="scan-line" style={{ position:"absolute", top:0, left:0, right:0, height:2, opacity:0.35 }} />

      {/* Centre glow */}
      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)",
        width:600, height:300, borderRadius:"50%", pointerEvents:"none",
        background:"radial-gradient(ellipse,rgba(0,201,167,0.07) 0%,transparent 70%)" }} />

      <div style={{ maxWidth:1100, margin:"0 auto", display:"grid",
                    gridTemplateColumns:"repeat(4,1fr)", gap:0, position:"relative", zIndex:2 }}
           className="stats-inner">
        {STATS.map((stat, i) => (
          <motion.div key={i}
            initial={{ opacity:0, y:30 }}
            animate={visible ? { opacity:1, y:0 } : {}}
            transition={{ delay:i*0.12, duration:0.65, ease:[0.22,1,0.36,1] }}
            style={{ position:"relative", textAlign:"center", padding:"36px 28px",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
              transition:"background 0.3s" }}
            whileHover={{ backgroundColor:"rgba(0,201,167,0.04)" }}>
            <div style={{ fontSize:28, marginBottom:12 }}>{stat.icon}</div>
            <div className="grad-text" style={{ fontFamily:"var(--font-display)", fontWeight:800,
              lineHeight:1, marginBottom:8, fontSize:"clamp(38px,4vw,50px)" }}>
              <Counter value={stat.value} suffix={stat.suffix} trigger={visible} />
            </div>
            <div style={{ color:"#fff", fontSize:14.5, fontWeight:600, marginBottom:4, fontFamily:"var(--font-body)" }}>
              {stat.label}
            </div>
            <div style={{ color:"rgba(255,255,255,0.35)", fontSize:12, fontFamily:"var(--font-body)" }}>
              {stat.sub}
            </div>
            <motion.div initial={{ scaleX:0 }} animate={visible ? { scaleX:1 } : {}}
              transition={{ delay:0.5+i*0.1, duration:0.5 }}
              style={{ position:"absolute", bottom:0, left:"25%", right:"25%", height:2, transformOrigin:"center",
                background:"linear-gradient(90deg,transparent,#00C9A7,transparent)" }} />
          </motion.div>
        ))}
      </div>
      <style>{`
        @media(max-width:768px){ .stats-inner { grid-template-columns:repeat(2,1fr) !important; } }
        @media(max-width:480px){ .stats-inner { grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}