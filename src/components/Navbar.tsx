

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const menuItems = [
//     { name: "Home", href: "/" },
//     { name: "Solutions", href: "#solutions" },
//     { name: "Industries", href: "#industries" },
//     { name: "Case Studies", href: "#cases" },
//     { name: "Contact", href: "#contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 60);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//         scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
//       }`}
//     >
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
//         <nav className="hidden md:flex gap-10 font-medium text-sm tracking-wide">
//           {menuItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`relative transition duration-300 ${
//                 scrolled
//                   ? "text-gray-800 hover:text-[#14B8A6]"
//                   : "text-white hover:text-[#14B8A6]"
//               }`}
//             >
//               {item.name}
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#14B8A6] transition-all duration-300 hover:w-full"></span>
//             </Link>
//           ))}
//         </nav>

//         {/* CTA Button Desktop */}
//         <div className="hidden md:block">
//           <button className="bg-[#14B8A6] hover:bg-[#0EA5A4] text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105">
//             Book Strategy Call
//           </button>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className={`md:hidden ${
//             scrolled ? "text-gray-800" : "text-white"
//           }`}
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
//               className="block text-gray-800 hover:text-[#14B8A6]"
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
//     { name: "Industries", href: "#industries" },
//     { name: "Case Studies", href: "#cases" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-4 transition-all duration-300">
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
//         <nav className="hidden md:flex gap-10 font-medium text-xl tracking-wide">
//           {menuItems.map((item) => {
//             const isActive = pathname === item.href;

//             return (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`relative pb-1 transition duration-300 
//                   ${isActive ? "text-[#14B8A6]" : "text-black hover:text-[#14B8A6]"}`}
//               >
//                 {item.name}

//                 {/* Underline */}
//                 <span
//                   className={`absolute left-0 -bottom-1 h-[2px] bg-[#14B8A6] transition-all duration-300
//                     ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
//                 ></span>
//               </Link>
//             );
//           })}
//         </nav>

//         {/* CTA Button */}
//         <div className="hidden md:block">
//           <button className="bg-[#14B8A6] hover:bg-[#0EA5A4] text-white px-6 py-2 rounded-lg text-sm font-xl transition-all duration-300 hover:scale-105">
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


"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Case Studies", href: "/caseStudies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/NNCLOGO.jpg"
            alt="NNC Digital Solutions"
            width={160}
            height={50}
            priority
            className="hover:scale-105 transition duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 font-medium text-lg tracking-wide">
          {menuItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative pb-1 group transition duration-300
                  ${
                    isActive
                      ? "text-[#14B8A6]"
                      : "text-black hover:text-[#14B8A6]"
                  }`}
              >
                {item.name}

                {/* Underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#14B8A6] transition-all duration-300
                    ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-[#14B8A6] hover:bg-[#0EA5A4] text-white px-6 py-2 rounded-lg text-sm font-5xl transition-all duration-300 hover:scale-105">
            Book Strategy Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-black hover:text-[#14B8A6]"
            >
              {item.name}
            </Link>
          ))}

          <button className="w-full bg-[#14B8A6] text-white py-2 rounded-lg mt-4">
            Book Strategy Call
          </button>
        </div>
      )}
    </header>
  );
}