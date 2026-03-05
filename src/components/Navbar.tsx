

// // "use client";

// // import { useState, useEffect } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { Menu, X } from "lucide-react";

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   const menuItems = [
// //     { name: "Home", href: "/" },
// //     { name: "Solutions", href: "#solutions" },
// //     { name: "Industries", href: "#industries" },
// //     { name: "Case Studies", href: "#cases" },
// //     { name: "Contact", href: "#contact" },
// //   ];

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 60);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <header
// //       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
// //         scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
// //       }`}
// //     >
// //       <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

// //         {/* Logo */}
// //         <Link href="/">
// //           <Image
// //             src="/NNCLOGO.jpg"
// //             alt="NNC Digital Solutions"
// //             width={160}
// //             height={50}
// //             priority
// //             className="hover:scale-105 transition duration-300"
// //           />
// //         </Link>

// //         {/* Desktop Menu */}
// //         <nav className="hidden md:flex gap-10 font-medium text-sm tracking-wide">
// //           {menuItems.map((item) => (
// //             <Link
// //               key={item.name}
// //               href={item.href}
// //               className={`relative transition duration-300 ${
// //                 scrolled
// //                   ? "text-gray-800 hover:text-[#14B8A6]"
// //                   : "text-white hover:text-[#14B8A6]"
// //               }`}
// //             >
// //               {item.name}
// //               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#14B8A6] transition-all duration-300 hover:w-full"></span>
// //             </Link>
// //           ))}
// //         </nav>

// //         {/* CTA Button Desktop */}
// //         <div className="hidden md:block">
// //           <button className="bg-[#14B8A6] hover:bg-[#0EA5A4] text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105">
// //             Book Strategy Call
// //           </button>
// //         </div>

// //         {/* Mobile Toggle */}
// //         <button
// //           className={`md:hidden ${
// //             scrolled ? "text-gray-800" : "text-white"
// //           }`}
// //           onClick={() => setOpen(!open)}
// //         >
// //           {open ? <X size={28} /> : <Menu size={28} />}
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}
// //       {open && (
// //         <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-4">
// //           {menuItems.map((item) => (
// //             <Link
// //               key={item.name}
// //               href={item.href}
// //               onClick={() => setOpen(false)}
// //               className="block text-gray-800 hover:text-[#14B8A6]"
// //             >
// //               {item.name}
// //             </Link>
// //           ))}
// //           <button className="w-full bg-[#14B8A6] text-white py-2 rounded-lg mt-4">
// //             Book Strategy Call
// //           </button>
// //         </div>
// //       )}
// //     </header>
// //   );
// // }



// // "use client";

// // import { useState } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { Menu, X } from "lucide-react";
// // import { usePathname } from "next/navigation";

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false);
// //   const pathname = usePathname();

// //   const menuItems = [
// //     { name: "Home", href: "/" },
// //     { name: "About", href: "/about" },
// //     { name: "Industries", href: "#industries" },
// //     { name: "Case Studies", href: "#cases" },
// //     { name: "Contact", href: "#contact" },
// //   ];

// //   return (
// //     <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-4 transition-all duration-300">
// //       <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

// //         {/* Logo */}
// //         <Link href="/">
// //           <Image
// //             src="/NNCLOGO.jpg"
// //             alt="NNC Digital Solutions"
// //             width={160}
// //             height={50}
// //             priority
// //             className="hover:scale-105 transition duration-300"
// //           />
// //         </Link>

// //         {/* Desktop Menu */}
// //         <nav className="hidden md:flex gap-10 font-medium text-xl tracking-wide">
// //           {menuItems.map((item) => {
// //             const isActive = pathname === item.href;

// //             return (
// //               <Link
// //                 key={item.name}
// //                 href={item.href}
// //                 className={`relative pb-1 transition duration-300 
// //                   ${isActive ? "text-[#14B8A6]" : "text-black hover:text-[#14B8A6]"}`}
// //               >
// //                 {item.name}

// //                 {/* Underline */}
// //                 <span
// //                   className={`absolute left-0 -bottom-1 h-[2px] bg-[#14B8A6] transition-all duration-300
// //                     ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
// //                 ></span>
// //               </Link>
// //             );
// //           })}
// //         </nav>

// //         {/* CTA Button */}
// //         <div className="hidden md:block">
// //           <button className="bg-[#14B8A6] hover:bg-[#0EA5A4] text-white px-6 py-2 rounded-lg text-sm font-xl transition-all duration-300 hover:scale-105">
// //             Book Strategy Call
// //           </button>
// //         </div>

// //         {/* Mobile Toggle */}
// //         <button
// //           className="md:hidden text-black"
// //           onClick={() => setOpen(!open)}
// //         >
// //           {open ? <X size={28} /> : <Menu size={28} />}
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}
// //       {open && (
// //         <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-4">
// //           {menuItems.map((item) => (
// //             <Link
// //               key={item.name}
// //               href={item.href}
// //               onClick={() => setOpen(false)}
// //               className="block text-black hover:text-[#14B8A6]"
// //             >
// //               {item.name}
// //             </Link>
// //           ))}
// //           <button className="w-full bg-[#14B8A6] text-white py-2 rounded-lg mt-4">
// //             Book Strategy Call
// //           </button>
// //         </div>
// //       )}
// //     </header>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   const menuItems = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Solutions", href: "/solutions" },
//     { name: "Case Studies", href: "/caseStudies" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-4">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src="/NNCLOGO.jpg"
//             alt="NNC Digital Solutions"
//             width={160}
//             height={50}
//             priority
//             className="hover:scale-105 transition duration-300"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex gap-10 font-medium text-lg tracking-wide">
//           {menuItems.map((item) => {
//             const isActive =
//               item.href === "/"
//                 ? pathname === "/"
//                 : pathname.startsWith(item.href);

//             return (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`relative pb-1 group transition duration-300
//                   ${
//                     isActive
//                       ? "text-[#14B8A6]"
//                       : "text-black hover:text-[#14B8A6]"
//                   }`}
//               >
//                 {item.name}

//                 {/* Underline */}
//                 <span
//                   className={`absolute left-0 -bottom-1 h-[2px] bg-[#14B8A6] transition-all duration-300
//                     ${
//                       isActive
//                         ? "w-full"
//                         : "w-0 group-hover:w-full"
//                     }`}
//                 />
//               </Link>
//             );
//           })}
//         </nav>

//         {/* CTA Button */}
//         <div className="hidden md:block">
//           <button className="bg-[#14B8A6] hover:bg-[#0EA5A4] text-white px-6 py-2 rounded-lg text-sm font-5xl transition-all duration-300 hover:scale-105">
//             Book Strategy Call
//           </button>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden text-black"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-4">
//           {menuItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               onClick={() => setOpen(false)}
//               className="block text-black hover:text-[#14B8A6]"
//             >
//               {item.name}
//             </Link>
//           ))}

//           <button className="w-full bg-[#14B8A6] text-white py-2 rounded-lg mt-4">
//             Book Strategy Call
//           </button>
//         </div>
//       )}
//     </header>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// function LogoMark({ size = 34 }: { size?: number }) {
//   return (
//     <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
//       <defs>
//         <linearGradient id="lg-nav" x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0%" stopColor="#00C9A7" />
//           <stop offset="100%" stopColor="#1B8F6E" />
//         </linearGradient>
//       </defs>
//       {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((deg, i) => (
//         <ellipse
//           key={i} cx="20" cy="20" rx="8" ry="3.5"
//           fill="url(#lg-nav)" opacity={0.75 + i * 0.02}
//           transform={`rotate(${deg} 20 20) translate(4,0)`}
//         />
//       ))}
//       <circle cx="20" cy="20" r="4" fill="url(#lg-nav)" />
//     </svg>
//   );
// }

// const NAV_LINKS = ["Solutions", "Industries", "Process", "Case Studies", "Blog"];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", fn);
//     return () => window.removeEventListener("scroll", fn);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//       style={{
//         position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
//         display: "flex", alignItems: "center", justifyContent: "space-between",
//         padding: scrolled ? "14px 48px" : "24px 48px",
//         background: scrolled ? "rgba(11,21,37,0.96)" : "transparent",
//         backdropFilter: scrolled ? "blur(20px)" : "none",
//         borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
//         transition: "all 0.4s ease",
//       }}
//     >
//       {/* Logo */}
//       <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//         <LogoMark size={34} />
//         <div style={{ lineHeight: 1 }}>
//           <span className="syne" style={{ fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}>NNC</span>
//           <span className="syne" style={{ fontSize: 20, fontWeight: 400, color: "#00C9A7", letterSpacing: "-0.01em" }}> digital</span>
//         </div>
//       </div>

//       {/* Desktop Links */}
//       <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
//         {NAV_LINKS.map((link) => (
//           <a key={link} href="#" className="nl">{link}</a>
//         ))}
//         <button className="btn-primary" style={{ padding: "10px 24px", fontSize: 13 }}>
//           Book a Call
//         </button>
//       </div>
//     </motion.nav>
//   );
// }






"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const NAV_LINKS = ["Solutions", "Industries", "Process", "Case Studies", "Blog"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: scrolled ? "8px 48px" : "16px 48px",
        background: scrolled ? "rgba(11,21,37,0.96)" : "rgba(11,21,37,0.4)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(255,255,255,0.03)",
        transition: "all 0.4s ease",
      }}
    >
      {/* ── Logo image ── */}
      <motion.a
        href="/"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
      >
        <Image
          src="/NNCLOGO.jpg"
          alt="NNC Digital Solutions"
          width={148}
          height={48}
          priority
          style={{
            objectFit: "contain",
            objectPosition: "left center",
            borderRadius: 6,
            /* Slightly reduce brightness so logo blends into any bg */
            filter: "brightness(1.05) contrast(1.02)",
          }}
        />
      </motion.a>

      {/* ── Desktop Nav Links ── */}
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="nl"
            style={{ position: "relative", paddingBottom: 3 }}
            onMouseEnter={(e) => {
              const line = e.currentTarget.querySelector(".nl-line") as HTMLElement | null;
              if (line) line.style.transform = "scaleX(1)";
            }}
            onMouseLeave={(e) => {
              const line = e.currentTarget.querySelector(".nl-line") as HTMLElement | null;
              if (line) line.style.transform = "scaleX(0)";
            }}
          >
            {link}
            <span
              className="nl-line"
              style={{
                display: "block",
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                height: 1.5,
                background: "linear-gradient(90deg,#00C9A7,#1B8F6E)",
                borderRadius: 2,
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.25s ease",
              }}
            />
          </a>
        ))}

        <button
          className="btn-primary"
          style={{ padding: "10px 24px", fontSize: 13 }}
        >
          Book a Call
        </button>
      </div>
    </motion.nav>
  );
}