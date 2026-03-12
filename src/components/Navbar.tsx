
// // // // "use client";

// // // // import { useState, useEffect } from "react";
// // // // import { AnimatePresence, motion } from "framer-motion";
// // // // import Image from "next/image";
// // // // import Link from "next/link";

// // // // // Brand tokens as JS constants — safe for inline styles
// // // // const C = {
// // // //   teal:       "#00C9A7",
// // // //   navy1:      "#030B18",
// // // //   navy2:      "#061425",
// // // //   navyCard:   "rgba(6,20,37,0.98)",
// // // //   white72:    "rgba(255,255,255,0.72)",
// // // //   white40:    "rgba(255,255,255,0.4)",
// // // //   tealBorder: "rgba(0,201,167,0.15)",
// // // //   tealBg:     "rgba(0,201,167,0.08)",
// // // //   gradBrand:  "linear-gradient(135deg,#00C9A7 0%,#00a07a 60%,#1fd1b5 100%)",
// // // //   ease:       [0.22, 1, 0.36, 1] as [number,number,number,number],
// // // // };

// // // // const NAV_LINKS = [
// // // //   { label: "Solutions",   sub: ["CRM Development","ERP Solutions","Web Development","Mobile Apps","API Integration"] },
// // // //   { label: "Industries",  sub: ["Healthcare","Finance","Retail","Logistics","Real Estate"] },
// // // //   { label: "Case Studies" },
// // // //   { label: "About Us" },
// // // //   { label: "Blog" },
// // // //   { label: "Contact" },
// // // // ];

// // // // export default function Navbar() {
// // // //   const [scrolled,   setScrolled]   = useState(false);
// // // //   const [mobileOpen, setMobileOpen] = useState(false);
// // // //   const [dropdown,   setDropdown]   = useState<string | null>(null);

// // // //   useEffect(() => {
// // // //     const fn = () => setScrolled(window.scrollY > 40);
// // // //     window.addEventListener("scroll", fn);
// // // //     return () => window.removeEventListener("scroll", fn);
// // // //   }, []);

// // // //   return (
// // // //     <>
// // // //       <style>{`
// // // //         .nav-link { color:rgba(255,255,255,0.72); font-size:13.5px; font-weight:500;
// // // //           padding:8px 14px; border-radius:7px; text-decoration:none;
// // // //           transition:all 0.2s; display:flex; align-items:center; gap:4px; }
// // // //         .nav-link:hover { color:#00C9A7; background:rgba(0,201,167,0.08); }
// // // //         .footer-link { color:rgba(255,255,255,0.4); text-decoration:none; transition:color 0.2s; }
// // // //         .footer-link:hover { color:#00C9A7; }
// // // //         @media(max-width:1024px){
// // // //           .nav-desktop { display:none !important; }
// // // //           .nav-mobile-btn { display:flex !important; }
// // // //         }
// // // //       `}</style>

// // // //       <motion.nav
// // // //         initial={{ y: -80, opacity: 0 }}
// // // //         animate={{ y: 0, opacity: 1 }}
// // // //         transition={{ duration: 0.7, ease: C.ease }}
// // // //         style={{
// // // //           position: "fixed", top: 0, left: 0, right: 0, zIndex: 300,
// // // //           display: "flex", alignItems: "center", justifyContent: "space-between",
// // // //           padding: scrolled ? "10px 48px" : "16px 48px",
// // // //           background: scrolled ? "rgba(3,11,24,0.97)" : "rgba(3,11,24,0.65)",
// // // //           backdropFilter: "blur(28px)",
// // // //           borderBottom: `1px solid ${C.tealBorder}`,
// // // //           transition: "padding 0.4s ease, background 0.4s ease",
// // // //         }}
// // // //       >
// // // //         {/* Logo */}
// // // //         <Link href="/" style={{ display:"flex", alignItems:"center", textDecoration:"none", flexShrink:0 }}>
// // // //           <Image src="/NNCLOGO.jpg" alt="NNC Digital Solutions"
// // // //                  width={148} height={44} priority
// // // //                  style={{ height:44, width:"auto", objectFit:"contain", borderRadius:6, display:"block" }} />
// // // //         </Link>

// // // //         {/* Desktop nav */}
// // // //         <div className="nav-desktop" style={{ display:"flex", gap:2, alignItems:"center" }}>
// // // //           {NAV_LINKS.map(link => (
// // // //             <div key={link.label} style={{ position:"relative" }}
// // // //                  onMouseEnter={() => link.sub && setDropdown(link.label)}
// // // //                  onMouseLeave={() => setDropdown(null)}>
// // // //               <Link href="#" className="nav-link">
// // // //                 {link.label}
// // // //                 {link.sub && (
// // // //                   <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
// // // //                     <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
// // // //                   </svg>
// // // //                 )}
// // // //               </Link>

// // // //               <AnimatePresence>
// // // //                 {link.sub && dropdown === link.label && (
// // // //                   <motion.div
// // // //                     initial={{ opacity:0, y:8, scale:0.97 }}
// // // //                     animate={{ opacity:1, y:0, scale:1 }}
// // // //                     exit={{ opacity:0, y:6, scale:0.97 }}
// // // //                     transition={{ duration:0.18 }}
// // // //                     style={{
// // // //                       position:"absolute", top:"calc(100% + 6px)", left:0, minWidth:200,
// // // //                       background: C.navyCard,
// // // //                       border: `1px solid ${C.tealBorder}`,
// // // //                       borderRadius:12, padding:"8px 0",
// // // //                       backdropFilter:"blur(24px)",
// // // //                       boxShadow:"0 20px 60px rgba(0,0,0,0.5)", zIndex:400,
// // // //                     }}
// // // //                   >
// // // //                     {link.sub.map(item => (
// // // //                       <Link key={item} href="#"
// // // //                         style={{ display:"block", padding:"9px 18px",
// // // //                           color:"rgba(255,255,255,0.7)", fontSize:13,
// // // //                           fontFamily:"var(--font-body)", textDecoration:"none",
// // // //                           transition:"all 0.15s" }}
// // // //                         onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.teal; (e.currentTarget as HTMLElement).style.background = "rgba(0,201,167,0.06)"; }}
// // // //                         onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
// // // //                       >{item}</Link>
// // // //                     ))}
// // // //                   </motion.div>
// // // //                 )}
// // // //               </AnimatePresence>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Right */}
// // // //         <div className="nav-desktop" style={{ display:"flex", alignItems:"center", gap:20 }}>
// // // //           <div style={{ fontSize:11, color:C.white40, lineHeight:1.75, textAlign:"right", fontFamily:"var(--font-body)" }}>
// // // //             <div>🇨🇦 +1 (647) 000-0000</div>
// // // //             <div>🇬🇧 +44 20 0000 0000</div>
// // // //           </div>
// // // //           <Link href="#consultation" className="btn-primary" style={{ padding:"10px 20px", fontSize:13 }}>
// // // //             Book Free Call
// // // //           </Link>
// // // //         </div>

// // // //         {/* Mobile toggle */}
// // // //         <button className="nav-mobile-btn"
// // // //           onClick={() => setMobileOpen(!mobileOpen)}
// // // //           style={{ display:"none", background:"none", border:"none", color:"#fff", fontSize:22, cursor:"pointer", padding:4 }}>
// // // //           {mobileOpen ? "✕" : "☰"}
// // // //         </button>
// // // //       </motion.nav>

// // // //       {/* Mobile drawer */}
// // // //       <AnimatePresence>
// // // //         {mobileOpen && (
// // // //           <>
// // // //             <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
// // // //               onClick={() => setMobileOpen(false)}
// // // //               style={{ position:"fixed", inset:0, zIndex:290, background:"rgba(0,0,0,0.6)", backdropFilter:"blur(4px)" }} />
// // // //             <motion.div
// // // //               initial={{ x:"100%" }} animate={{ x:0 }} exit={{ x:"100%" }}
// // // //               transition={{ type:"tween", duration:0.3, ease:C.ease }}
// // // //               style={{
// // // //                 position:"fixed", top:0, right:0, bottom:0, width:"80%", maxWidth:340,
// // // //                 background: C.navy2, zIndex:295,
// // // //                 borderLeft:`1px solid ${C.tealBorder}`,
// // // //                 padding:"88px 28px 40px", overflowY:"auto",
// // // //               }}
// // // //             >
// // // //               {NAV_LINKS.map((link, i) => (
// // // //                 <motion.div key={link.label} initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.05*i }}>
// // // //                   <Link href="#" style={{
// // // //                     display:"block", color:"rgba(255,255,255,0.8)", fontSize:17, fontWeight:500,
// // // //                     padding:"14px 0", borderBottom:"1px solid rgba(255,255,255,0.06)",
// // // //                     textDecoration:"none", fontFamily:"var(--font-body)"
// // // //                   }}>{link.label}</Link>
// // // //                 </motion.div>
// // // //               ))}
// // // //               <div style={{ marginTop:32 }}>
// // // //                 <Link href="#consultation" className="btn-primary" style={{ width:"100%", justifyContent:"center" }}>
// // // //                   Book Free Call
// // // //                 </Link>
// // // //               </div>
// // // //               <div style={{ marginTop:28, fontSize:12, color:C.white40, fontFamily:"var(--font-body)", lineHeight:1.8 }}>
// // // //                 <div>🇨🇦 +1 (647) 000-0000</div>
// // // //                 <div>🇬🇧 +44 20 0000 0000</div>
// // // //               </div>
// // // //             </motion.div>
// // // //           </>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </>
// // // //   );
// // // // }



// // // // "use client";

// // // // import { useState, useEffect } from "react";
// // // // import { AnimatePresence, motion } from "framer-motion";
// // // // import Image from "next/image";
// // // // import Link from "next/link";

// // // // const C = {
// // // //   teal: "#00C9A7",
// // // //   navy1: "#030B18",
// // // //   navy2: "#061425",
// // // //   navyCard: "rgba(6,20,37,0.98)",
// // // //   white72: "rgba(255,255,255,0.72)",
// // // //   white40: "rgba(255,255,255,0.4)",
// // // //   tealBorder: "rgba(0,201,167,0.15)",
// // // //   tealBg: "rgba(0,201,167,0.08)",
// // // //   gradBrand: "linear-gradient(135deg,#00C9A7 0%,#00a07a 60%,#1fd1b5 100%)",
// // // //   ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
// // // // };

// // // // const NAV_LINKS = [
// // // //     { label: "Home", href: "/" }, 
// // // //   { label: "About Us", href: "/about" },

// // // //   {
// // // //     label: "Solutions", 
// // // //     href: "/solutions",
// // // //     sub: [
// // // //       { name: "CRM Development", href: "nncdigital.com/crm-development" },
// // // //       { name: "ERP Development", href: "nncdigital.com/erp-development" },
// // // //       { name: "Web Development", href: "/web-development" },
// // // //       { name: "Mobile App Development", href: "/mobile-app-development" },
// // // //       { name: "Marketing Automation", href: "/marketing-automation" },
// // // //       { name: "Salesforce CRM", href: "/salesforce-crm" },
// // // //       { name: "Hire CRM Developers", href: "/hire-crm-developers" },
// // // //       { name: "Digital Transformation", href: "/digital-transformation" },
// // // //       { name: "SEO & Digital Marketing", href: "/seo-digital-marketing" },
// // // //     ],
// // // //   },
// // // //   {
// // // //     label: "Industries",
// // // //     href: "/industries",
// // // //     sub: [
// // // //       { name: "Healthcare", href: "/industries/healthcare" },
// // // //       { name: "Real Estate", href: "/industries/real-estate" },
// // // //       { name: "E-Commerce", href: "/industries/ecommerce" },
// // // //       { name: "Manufacturing", href: "/industries/manufacturing" },
// // // //       { name: "Professional Services", href: "/industries/professional-services" },
// // // //     ],
// // // //   },
// // // //   { label: "Case Studies", href: "/case-studies" },
// // // //   { label: "Pricing", href: "/pricing" },
// // // //   { label: "Blog", href: "/blog" },
// // // //   { label: "Contact", href: "/contact" },
// // // // ];

// // // // export default function Navbar() {
// // // //   const [scrolled, setScrolled] = useState(false);
// // // //   const [mobileOpen, setMobileOpen] = useState(false);
// // // //   const [dropdown, setDropdown] = useState<string | null>(null);

// // // //   useEffect(() => {
// // // //     const fn = () => setScrolled(window.scrollY > 40);
// // // //     window.addEventListener("scroll", fn);
// // // //     return () => window.removeEventListener("scroll", fn);
// // // //   }, []);

// // // //   return (
// // // //     <>
// // // //       <style>{`
// // // //         .nav-link {
// // // //           color: rgba(255,255,255,0.72);
// // // //           font-size: 13.5px;
// // // //           font-weight: 500;
// // // //           padding: 8px 14px;
// // // //           border-radius: 7px;
// // // //           text-decoration: none;
// // // //           transition: all 0.2s;
// // // //           display: flex;
// // // //           align-items: center;
// // // //           gap: 4px;
// // // //         }

// // // //         .nav-link:hover {
// // // //           color: #00C9A7;
// // // //           background: rgba(0,201,167,0.08);
// // // //         }

// // // //         @media(max-width:1024px){
// // // //           .nav-desktop { display:none !important; }
// // // //           .nav-mobile-btn { display:flex !important; }
// // // //         }
// // // //       `}</style>

// // // //       {/* NAVBAR */}
// // // //       <motion.nav
// // // //         initial={{ y: -80, opacity: 0 }}
// // // //         animate={{ y: 0, opacity: 1 }}
// // // //         transition={{ duration: 0.7, ease: C.ease }}
// // // //         style={{
// // // //           position: "fixed",
// // // //           top: 0,
// // // //           left: 0,
// // // //           right: 0,
// // // //           zIndex: 300,
// // // //           display: "flex",
// // // //           alignItems: "center",
// // // //           justifyContent: "space-between",
// // // //           padding: scrolled ? "10px 48px" : "16px 48px",
// // // //           background: scrolled
// // // //             ? "rgba(3,11,24,0.97)"
// // // //             : "rgba(3,11,24,0.65)",
// // // //           backdropFilter: "blur(28px)",
// // // //           borderBottom: `1px solid ${C.tealBorder}`,
// // // //         }}
// // // //       >

// // // //         {/* LOGO */}
// // // //         <Link href="/" style={{ display: "flex", alignItems: "center" }}>
// // // //           <Image
// // // //             src="/NNCLOGO.jpg"
// // // //             alt="NNC Digital Solutions"
// // // //             width={148}
// // // //             height={44}
// // // //             priority
// // // //           />
// // // //         </Link>

// // // //         {/* DESKTOP MENU */}
// // // //         <div className="nav-desktop" style={{ display: "flex", gap: 2 }}>
// // // //           {NAV_LINKS.map((link) => (
// // // //             <div
// // // //               key={link.label}
// // // //               style={{ position: "relative" }}
// // // //               onMouseEnter={() => link.sub && setDropdown(link.label)}
// // // //               onMouseLeave={() => setDropdown(null)}
// // // //             >

// // // //               {/* MAIN LINK */}
// // // //               <Link href={link.href} className="nav-link">
// // // //                 {link.label}

// // // //                 {link.sub && (
// // // //                   <svg width="12" height="12">
// // // //                     <path
// // // //                       d="M3 4.5L6 7.5L9 4.5"
// // // //                       stroke="currentColor"
// // // //                       strokeWidth="1.5"
// // // //                       strokeLinecap="round"
// // // //                     />
// // // //                   </svg>
// // // //                 )}
// // // //               </Link>

// // // //               {/* DROPDOWN */}
// // // //               <AnimatePresence>
// // // //                 {link.sub && dropdown === link.label && (
// // // //                   <motion.div
// // // //                     initial={{ opacity: 0, y: 8 }}
// // // //                     animate={{ opacity: 1, y: 0 }}
// // // //                     exit={{ opacity: 0 }}
// // // //                     style={{
// // // //                       position: "absolute",
// // // //                       top: "100%",
// // // //                       left: 0,
// // // //                       minWidth: 200,
// // // //                       background: C.navyCard,
// // // //                       border: `1px solid ${C.tealBorder}`,
// // // //                       borderRadius: 12,
// // // //                       padding: "8px 0",
// // // //                     }}
// // // //                   >
// // // //                     {link.sub.map((item) => (
// // // //                       <Link
// // // //                         key={item.name}
// // // //                         href={item.href}
// // // //                         style={{
// // // //                           display: "block",
// // // //                           padding: "9px 18px",
// // // //                           color: "rgba(255,255,255,0.7)",
// // // //                           fontSize: 13,
// // // //                           textDecoration: "none",
// // // //                         }}
// // // //                       >
// // // //                         {item.name}
// // // //                       </Link>
// // // //                     ))}
// // // //                   </motion.div>
// // // //                 )}
// // // //               </AnimatePresence>

// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* RIGHT CTA */}
// // // //         <div className="nav-desktop" style={{ display: "flex", gap: 20 }}>
// // // //           <Link
// // // //             href="/consultation"
// // // //             style={{
// // // //               padding: "10px 20px",
// // // //               background: C.gradBrand,
// // // //               borderRadius: 8,
// // // //               color: "#fff",
// // // //               textDecoration: "none",
// // // //               fontSize: 13,
// // // //               fontWeight: 600,
// // // //             }}
// // // //           >
// // // //             Book Free Call
// // // //           </Link>
// // // //         </div>

// // // //         {/* MOBILE MENU BUTTON */}
// // // //         <button
// // // //           className="nav-mobile-btn"
// // // //           onClick={() => setMobileOpen(!mobileOpen)}
// // // //           style={{
// // // //             display: "none",
// // // //             background: "none",
// // // //             border: "none",
// // // //             color: "#fff",
// // // //             fontSize: 22,
// // // //           }}
// // // //         >
// // // //           {mobileOpen ? "✕" : "☰"}
// // // //         </button>
// // // //       </motion.nav>

// // // //       {/* MOBILE MENU */}
// // // //       <AnimatePresence>
// // // //         {mobileOpen && (
// // // //           <motion.div
// // // //             initial={{ x: "100%" }}
// // // //             animate={{ x: 0 }}
// // // //             exit={{ x: "100%" }}
// // // //             style={{
// // // //               position: "fixed",
// // // //               top: 0,
// // // //               right: 0,
// // // //               width: "80%",
// // // //               height: "100%",
// // // //               background: C.navy2,
// // // //               padding: "80px 30px",
// // // //             }}
// // // //           >
// // // //             {NAV_LINKS.map((link) => (
// // // //               <Link
// // // //                 key={link.label}
// // // //                 href={link.href}
// // // //                 style={{
// // // //                   display: "block",
// // // //                   color: "#fff",
// // // //                   padding: "15px 0",
// // // //                   fontSize: 18,
// // // //                   textDecoration: "none",
// // // //                 }}
// // // //                 onClick={() => setMobileOpen(false)}
// // // //               >
// // // //                 {link.label}
// // // //               </Link>
// // // //             ))}
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </>
// // // //   );
// // // // }

// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import { AnimatePresence, motion } from "framer-motion";
// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import { usePathname } from "next/navigation";

// // // const C = {
// // //   teal: "#00C9A7",
// // //   navy1: "#030B18",
// // //   navy2: "#061425",
// // //   navyCard: "rgba(6,20,37,0.98)",
// // //   white72: "rgba(255,255,255,0.72)",
// // //   white40: "rgba(255,255,255,0.4)",
// // //   tealBorder: "rgba(0,201,167,0.15)",
// // //   tealBg: "rgba(0,201,167,0.08)",
// // //   gradBrand: "linear-gradient(135deg,#00C9A7 0%,#00a07a 60%,#1fd1b5 100%)",
// // //   ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
// // // };

// // // const NAV_LINKS = [
// // //   { label: "Home", href: "/" },
// // //   { label: "About Us", href: "/about" },
// // //   {
// // //     label: "Solutions",
// // //     href: "/solutions",
// // //     sub: [
// // //       { name: "CRM Development", href: "nncdigital.com/crm-development" },
// // //       { name: "ERP Development", href: "nncdigital.com/erp-development" },
// // //       { name: "Web Development", href: "nncdigital.com/web-development" },
// // //       { name: "Mobile App Development", href: "nncdigital.com/mobile-app-development" },
// // //       { name: "Marketing Automation", href: "nncdigital.com/marketing-automation" },
// // //       { name: "Salesforce CRM", href: "nncdigital.com/salesforce-crm" },
// // //       { name: "Hire CRM Developers", href: "nncdigital.com/hire-crm-developers" },
// // //       { name: "Digital Transformation", href: "nncdigital.com/digital-transformation" },
// // //       { name: "SEO & Digital Marketing", href: "nncdigital.com/seo-digital-marketing" },
// // //     ],
// // //   },
// // //   {
// // //     label: "Industries",
// // //     href: "/industries",
// // //     sub: [
// // //       { name: "Healthcare", href: "/industries/healthcare" },
// // //       { name: "Real Estate", href: "/industries/real-estate" },
// // //       { name: "E-Commerce", href: "/industries/ecommerce" },
// // //       { name: "Manufacturing", href: "/industries/manufacturing" },
// // //       { name: "Professional Services", href: "/industries/professional-services" },
// // //     ],
// // //   },
// // //   { label: "Case Studies", href: "/case-studies" },
// // //   { label: "Pricing", href: "/pricing" },
// // //   { label: "Blog", href: "/blog" },
// // //   { label: "Contact", href: "/contact" },
// // // ];

// // // export default function Navbar() {
// // //   const pathname = usePathname(); // <-- Track current path
// // //   const [scrolled, setScrolled] = useState(false);
// // //   const [mobileOpen, setMobileOpen] = useState(false);
// // //   const [dropdown, setDropdown] = useState<string | null>(null);

// // //   useEffect(() => {
// // //     const fn = () => setScrolled(window.scrollY > 40);
// // //     window.addEventListener("scroll", fn);
// // //     return () => window.removeEventListener("scroll", fn);
// // //   }, []);

// // //   // Highlight active link
// // //   const isActive = (href: string, sub?: { name: string; href: string }[]) => {
// // //     if (pathname === href) return true;
// // //     if (sub) return sub.some((item) => pathname === item.href);
// // //     return false;
// // //   };

// // //   return (
// // //     <>
// // //       <style>{`
// // //         .nav-link {
// // //           color: rgba(255,255,255,0.72);
// // //           font-size: 13.5px;
// // //           font-weight: 500;
// // //           padding: 8px 14px;
// // //           border-radius: 7px;
// // //           text-decoration: none;
// // //           transition: all 0.2s;
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 4px;
// // //         }

// // //         .nav-link:hover,
// // //         .nav-link.active {
// // //           color: #00C9A7;
// // //           background: rgba(0,201,167,0.08);
// // //         }

// // //         @media(max-width:1024px){
// // //           .nav-desktop { display:none !important; }
// // //           .nav-mobile-btn { display:flex !important; }
// // //         }
// // //       `}</style>

// // //       {/* NAVBAR */}
// // //       <motion.nav
// // //         initial={{ y: -80, opacity: 0 }}
// // //         animate={{ y: 0, opacity: 1 }}
// // //         transition={{ duration: 0.7, ease: C.ease }}
// // //         style={{
// // //           position: "fixed",
// // //           top: 0,
// // //           left: 0,
// // //           right: 0,
// // //           zIndex: 300,
// // //           display: "flex",
// // //           alignItems: "center",
// // //           justifyContent: "space-between",
// // //           padding: scrolled ? "10px 48px" : "16px 48px",
// // //           background: scrolled
// // //             ? "rgba(3,11,24,0.97)"
// // //             : "rgba(3,11,24,0.65)",
// // //           backdropFilter: "blur(28px)",
// // //           borderBottom: `1px solid ${C.tealBorder}`,
// // //         }}
// // //       >
// // //         {/* LOGO */}
// // //         <Link href="/" style={{ display: "flex", alignItems: "center" }}>
// // //           <Image
// // //             src="/NNCLOGO.jpg"
// // //             alt="NNC Digital Solutions"
// // //             width={148}
// // //             height={44}
// // //             priority
// // //           />
// // //         </Link>

// // //         {/* DESKTOP MENU */}
// // //         <div className="nav-desktop" style={{ display: "flex", gap: 2 }}>
// // //           {NAV_LINKS.map((link) => (
// // //             <div
// // //               key={link.label}
// // //               style={{ position: "relative" }}
// // //               onMouseEnter={() => link.sub && setDropdown(link.label)}
// // //               onMouseLeave={() => setDropdown(null)}
// // //             >
// // //               {/* MAIN LINK */}
// // //               <Link
// // //                 href={link.href}
// // //                 className={`nav-link ${isActive(link.href, link.sub) ? "active" : ""}`}
// // //               >
// // //                 {link.label}
// // //                 {link.sub && (
// // //                   <svg width="12" height="12">
// // //                     <path
// // //                       d="M3 4.5L6 7.5L9 4.5"
// // //                       stroke="currentColor"
// // //                       strokeWidth="1.5"
// // //                       strokeLinecap="round"
// // //                     />
// // //                   </svg>
// // //                 )}
// // //               </Link>

// // //               {/* DROPDOWN */}
// // //               <AnimatePresence>
// // //                 {link.sub && dropdown === link.label && (
// // //                   <motion.div
// // //                     initial={{ opacity: 0, y: 8 }}
// // //                     animate={{ opacity: 1, y: 0 }}
// // //                     exit={{ opacity: 0 }}
// // //                     style={{
// // //                       position: "absolute",
// // //                       top: "100%",
// // //                       left: 0,
// // //                       minWidth: 200,
// // //                       background: C.navyCard,
// // //                       border: `1px solid ${C.tealBorder}`,
// // //                       borderRadius: 12,
// // //                       padding: "8px 0",
// // //                     }}
// // //                   >
// // //                     {link.sub.map((item) => (
// // //                       <Link
// // //                         key={item.name}
// // //                         href={item.href}
// // //                         className={`nav-link ${pathname === item.href ? "active" : ""}`}
// // //                         style={{
// // //                           display: "block",
// // //                           padding: "9px 18px",
// // //                           fontSize: 13,
// // //                         }}
// // //                       >
// // //                         {item.name}
// // //                       </Link>
// // //                     ))}
// // //                   </motion.div>
// // //                 )}
// // //               </AnimatePresence>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* RIGHT CTA */}
// // //         <div className="nav-desktop" style={{ display: "flex", gap: 20 }}>
// // //           <Link
// // //             href="/consultation"
// // //             style={{
// // //               padding: "10px 20px",
// // //               background: C.gradBrand,
// // //               borderRadius: 8,
// // //               color: "#fff",
// // //               textDecoration: "none",
// // //               fontSize: 13,
// // //               fontWeight: 600,
// // //             }}
// // //           >
// // //             Book Free Call
// // //           </Link>
// // //         </div>

// // //         {/* MOBILE MENU BUTTON */}
// // //         <button
// // //           className="nav-mobile-btn"
// // //           onClick={() => setMobileOpen(!mobileOpen)}
// // //           style={{
// // //             display: "none",
// // //             background: "none",
// // //             border: "none",
// // //             color: "#fff",
// // //             fontSize: 22,
// // //           }}
// // //         >
// // //           {mobileOpen ? "✕" : "☰"}
// // //         </button>
// // //       </motion.nav>

// // //       {/* MOBILE MENU */}
// // //       <AnimatePresence>
// // //         {mobileOpen && (
// // //           <motion.div
// // //             initial={{ x: "100%" }}
// // //             animate={{ x: 0 }}
// // //             exit={{ x: "100%" }}
// // //             style={{
// // //               position: "fixed",
// // //               top: 0,
// // //               right: 0,
// // //               width: "80%",
// // //               height: "100%",
// // //               background: C.navy2,
// // //               padding: "80px 30px",
// // //             }}
// // //           >
// // //             {NAV_LINKS.map((link) => (
// // //               <Link
// // //                 key={link.label}
// // //                 href={link.href}
// // //                 className={`nav-link ${isActive(link.href, link.sub) ? "active" : ""}`}
// // //                 style={{
// // //                   display: "block",
// // //                   color: "#fff",
// // //                   padding: "15px 0",
// // //                   fontSize: 18,
// // //                   textDecoration: "none",
// // //                 }}
// // //                 onClick={() => setMobileOpen(false)}
// // //               >
// // //                 {link.label}
// // //               </Link>
// // //             ))}
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </>
// // //   );
// // // }

// // "use client";

// // import { useState, useEffect } from "react";
// // import { AnimatePresence, motion } from "framer-motion";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";

// // const C = {
// //   teal: "#00C9A7",
// //   navyCard: "rgba(6,20,37,0.98)",
// //   navy2: "#061425", // <-- Add this line for mobile menu background
// //   tealBorder: "rgba(0,201,167,0.15)",
// //   gradBrand: "linear-gradient(135deg,#00C9A7 0%,#00a07a 60%,#1fd1b5 100%)",
// //   ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
// // };

// // const NAV_LINKS = [
// //   { label: "Home", href: "/" },
// //   { label: "About Us", href: "/about" },
// //   {
// //     label: "Solutions",
// //     href: "/solutions",
// //     sub: [
// //       { name: "CRM Development", href: "nncdigital.com/crm-development" },
// //       { name: "ERP Development", href: "nncdigital.com/erp-development" },
// //       { name: "Web Development", href: "nncdigital.com/web-development" },
// //       { name: "Mobile App Development", href: "nncdigital.com/mobile-app-development" },
// //       { name: "Marketing Automation", href: "nncdigital.com/marketing-automation" },
// //       { name: "Salesforce CRM", href: "nncdigital.com/salesforce-crm" },
// //       { name: "Hire CRM Developers", href: "nncdigital.com/hire-crm-developers" },
// //       { name: "Digital Transformation", href: "nncdigital.com/digital-transformation" },
// //       { name: "SEO & Digital Marketing", href: "/seo-digital-marketing" },
// //     ],
// //   },
// //   {
// //     label: "Industries",
// //     href: "/industries",
// //     sub: [
// //       { name: "Healthcare", href: "/industries/healthcare" },
// //       { name: "Real Estate", href: "/industries/real-estate" },
// //       { name: "E-Commerce", href: "/industries/ecommerce" },
// //       { name: "Manufacturing", href: "/industries/manufacturing" },
// //       { name: "Professional Services", href: "/industries/professional-services" },
// //     ],
// //   },
// //   { label: "Case Studies", href: "/case-studies" },
// //   { label: "Pricing", href: "/pricing" },
// //   { label: "Blog", href: "/blog" },
// //   { label: "Contact", href: "/contact" },
// // ];

// // export default function Navbar() {
// //   const pathname = usePathname();
// //   const [scrolled, setScrolled] = useState(false);
// //   const [mobileOpen, setMobileOpen] = useState(false);
// //   const [dropdown, setDropdown] = useState<string | null>(null);

// //   useEffect(() => {
// //     const fn = () => setScrolled(window.scrollY > 40);
// //     window.addEventListener("scroll", fn);
// //     return () => window.removeEventListener("scroll", fn);
// //   }, []);

// //   const isActive = (href: string, sub?: { name: string; href: string }[]) => {
// //     if (pathname === href) return true;
// //     if (sub) return sub.some((item) => pathname === item.href);
// //     return false;
// //   };

// //   return (
// //     <>
// //       <style>{`
// //         .nav-link {
// //           color: rgba(255,255,255,0.72);
// //           font-size: 13.5px;
// //           font-weight: 500;
// //           padding: 8px 14px;
// //           border-radius: 7px;
// //           text-decoration: none;
// //           transition: all 0.2s;
// //           display: flex;
// //           align-items: center;
// //           gap: 4px;
// //         }
// //         .nav-link:hover,
// //         .nav-link.active {
// //           color: #00C9A7;
// //           background: rgba(0,201,167,0.08);
// //         }
// //         @media(max-width:1024px){
// //           .nav-desktop { display:none !important; }
// //           .nav-mobile-btn { display:flex !important; }
// //         }
// //       `}</style>

// //       <motion.nav
// //         initial={{ y: -80, opacity: 0 }}
// //         animate={{ y: 0, opacity: 1 }}
// //         transition={{ duration: 0.7, ease: C.ease }}
// //         style={{
// //           position: "fixed",
// //           top: 0,
// //           left: 0,
// //           right: 0,
// //           zIndex: 300,
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "space-between",
// //           padding: scrolled ? "10px 48px" : "16px 48px",
// //           background: scrolled ? "rgba(3,11,24,0.97)" : "rgba(3,11,24,0.65)",
// //           backdropFilter: "blur(28px)",
// //           borderBottom: `1px solid ${C.tealBorder}`,
// //         }}
// //       >
// //         <Link href="/" style={{ display: "flex", alignItems: "center" }}>
// //           <Image src="/NNCLOGO.jpg" alt="NNC Digital Solutions" width={148} height={44} priority />
// //         </Link>

// //         <div className="nav-desktop" style={{ display: "flex", gap: 2 }}>
// //           {NAV_LINKS.map((link) => {
// //             // open dropdown if hover OR if active page is inside sub
// //             const dropdownOpen = link.sub && (dropdown === link.label || isActive(link.href, link.sub));

// //             return (
// //               <div
// //                 key={link.label}
// //                 style={{ position: "relative" }}
// //                 onMouseEnter={() => link.sub && setDropdown(link.label)}
// //                 onMouseLeave={() => setDropdown(null)}
// //               >
// //                 <Link
// //                   href={link.href}
// //                   className={`nav-link ${isActive(link.href, link.sub) ? "active" : ""}`}
// //                 >
// //                   {link.label}
// //                   {link.sub && (
// //                     <svg width="12" height="12">
// //                       <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
// //                     </svg>
// //                   )}
// //                 </Link>

// //                 <AnimatePresence>
// //                   {link.sub && dropdownOpen && (
// //                     <motion.div
// //                       initial={{ opacity: 0, y: 8 }}
// //                       animate={{ opacity: 1, y: 0 }}
// //                       exit={{ opacity: 0 }}
// //                       style={{
// //                         position: "absolute",
// //                         top: "100%",
// //                         left: 0,
// //                         minWidth: 200,
// //                         background: C.navyCard,
// //                         border: `1px solid ${C.tealBorder}`,
// //                         borderRadius: 12,
// //                         padding: "8px 0",
// //                       }}
// //                     >
// //                       {link.sub.map((item) => (
// //                         <Link
// //                           key={item.name}
// //                           href={item.href}
// //                           className={`nav-link ${pathname === item.href ? "active" : ""}`}
// //                           style={{ display: "block", padding: "9px 18px", fontSize: 13 }}
// //                         >
// //                           {item.name}
// //                         </Link>
// //                       ))}
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </div>
// //             );
// //           })}
// //         </div>

// //         <div className="nav-desktop" style={{ display: "flex", gap: 20 }}>
// //           <Link
// //             href="/consultation"
// //             style={{
// //               padding: "10px 20px",
// //               background: C.gradBrand,
// //               borderRadius: 8,
// //               color: "#fff",
// //               textDecoration: "none",
// //               fontSize: 13,
// //               fontWeight: 600,
// //             }}
// //           >
// //             Book Free Call
// //           </Link>
// //         </div>

// //         <button
// //           className="nav-mobile-btn"
// //           onClick={() => setMobileOpen(!mobileOpen)}
// //           style={{ display: "none", background: "none", border: "none", color: "#fff", fontSize: 22 }}
// //         >
// //           {mobileOpen ? "✕" : "☰"}
// //         </button>
// //       </motion.nav>

// //       <AnimatePresence>
// //         {mobileOpen && (
// //           <motion.div
// //             initial={{ x: "100%" }}
// //             animate={{ x: 0 }}
// //             exit={{ x: "100%" }}
// //             style={{ position: "fixed", top: 0, right: 0, width: "80%", height: "100%", background: C.navy2, padding: "80px 30px" }}
// //           >
// //             {NAV_LINKS.map((link) => (
// //               <Link
// //                 key={link.label}
// //                 href={link.href}
// //                 className={`nav-link ${isActive(link.href, link.sub) ? "active" : ""}`}
// //                 style={{ display: "block", color: "#fff", padding: "15px 0", fontSize: 18, textDecoration: "none" }}
// //                 onClick={() => setMobileOpen(false)}
// //               >
// //                 {link.label}
// //               </Link>
// //             ))}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // }

// "use client";

// import { useState, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const C = {
//   teal: "#00C9A7",
//   navyCard: "rgba(6,20,37,0.98)",
//   navy2: "#061425",
//   tealBorder: "rgba(0,201,167,0.15)",
//   gradBrand: "linear-gradient(135deg,#00C9A7 0%,#00a07a 60%,#1fd1b5 100%)",
//   ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
// };

// const NAV_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about" },
//   {
//     label: "Solutions",
//     href: "/solutions",
//     sub: [
//       { name: "CRM Development", href: "/crm-development" },
//       { name: "ERP Development", href: "/erp-development" },
//       { name: "Web Development", href: "/web-development" },
//       { name: "Mobile App Development", href: "/mobile-app-development" },
//       { name: "Marketing Automation", href: "/marketing-automation" },
//       { name: "Salesforce CRM", href: "/salesforce-crm" },
//       { name: "Hire CRM Developers", href: "/hire-crm-developers" },
//       { name: "Digital Transformation", href: "/digital-transformation" },
//       { name: "SEO & Digital Marketing", href: "/seo-digital-marketing" },
//     ],
//   },
//   {
//     label: "Industries",
//     href: "/industries",
//     sub: [
//       { name: "Healthcare", href: "/industries/healthcare" },
//       { name: "Real Estate", href: "/industries/real-estate" },
//       { name: "E-Commerce", href: "/industries/ecommerce" },
//       { name: "Manufacturing", href: "/industries/manufacturing" },
//       { name: "Professional Services", href: "/industries/professional-services" },
//     ],
//   },
//   { label: "Case Studies", href: "/case-studies" },
//   { label: "Pricing", href: "/pricing" },
//   { label: "Blog", href: "/blog" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const pathname = usePathname();
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [dropdown, setDropdown] = useState<string | null>(null);

//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", fn);
//     return () => window.removeEventListener("scroll", fn);
//   }, []);

//   const isActive = (href: string, sub?: { name: string; href: string }[]) => {
//     if (pathname === href) return true;
//     if (sub) return sub.some((item) => pathname === item.href);
//     return false;
//   };

//   return (
//     <>
//       <style>{`
//         .nav-link {
//           color: rgba(255,255,255,0.72);
//           font-size: 13.5px;
//           font-weight: 500;
//           padding: 8px 14px;
//           border-radius: 7px;
//           text-decoration: none;
//           transition: all 0.2s;
//           display: flex;
//           align-items: center;
//           gap: 4px;
//         }
//         .nav-link:hover,
//         .nav-link.active {
//           color: #00C9A7;
//           background: rgba(0,201,167,0.08);
//         }
//         @media(max-width:1024px){
//           .nav-desktop { display:none !important; }
//           .nav-mobile-btn { display:flex !important; }
//         }
//       `}</style>

//       <motion.nav
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.7, ease: C.ease }}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           zIndex: 300,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           padding: scrolled ? "10px 48px" : "16px 48px",
//           background: scrolled ? "rgba(3,11,24,0.97)" : "rgba(3,11,24,0.65)",
//           backdropFilter: "blur(28px)",
//           borderBottom: `1px solid ${C.tealBorder}`,
//         }}
//       >
//         {/* LOGO */}
//         <Link href="/" style={{ display: "flex", alignItems: "center" }}>
//           <Image src="/NNCLOGO.jpg" alt="NNC Digital Solutions" width={148} height={44} priority />
//         </Link>

//         {/* DESKTOP LINKS */}
//         <div className="nav-desktop" style={{ display: "flex", gap: 2 }}>
//           {NAV_LINKS.map((link) => {
//             const dropdownOpen = link.sub && (dropdown === link.label || isActive(link.href, link.sub));
//             return (
//               <div
//                 key={link.label}
//                 style={{ position: "relative" }}
//                 onMouseEnter={() => link.sub && setDropdown(link.label)}
//                 onMouseLeave={() => setDropdown(null)}
//               >
//                 <Link href={link.href} className={`nav-link ${isActive(link.href, link.sub) ? "active" : ""}`}>
//                   {link.label}
//                   {link.sub && (
//                     <svg width="12" height="12">
//                       <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                     </svg>
//                   )}
//                 </Link>

//                 {/* DROPDOWN */}
//                 <AnimatePresence>
//                   {link.sub && dropdownOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 8 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0 }}
//                       style={{
//                         position: "absolute",
//                         top: "100%",
//                         left: 0,
//                         minWidth: 200,
//                         background: C.navyCard,
//                         border: `1px solid ${C.tealBorder}`,
//                         borderRadius: 12,
//                         padding: "8px 0",
//                       }}
//                     >
//                       {link.sub.map((item) => (
//                         <Link
//                           key={item.name}
//                           href={item.href}
//                           className={`nav-link ${pathname === item.href ? "active" : ""}`}
//                           style={{ display: "block", padding: "9px 18px", fontSize: 13 }}
//                         >
//                           {item.name}
//                         </Link>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             );
//           })}
//         </div>

//         {/* CTA */}
//         <div className="nav-desktop" style={{ display: "flex", gap: 20 }}>
//           <Link
//             href="/consultation"
//             style={{
//               padding: "10px 20px",
//               background: C.gradBrand,
//               borderRadius: 8,
//               color: "#fff",
//               textDecoration: "none",
//               fontSize: 13,
//               fontWeight: 600,
//             }}
//           >
//             Book Free Call
//           </Link>
//         </div>

//         {/* MOBILE MENU BUTTON */}
//         <button
//           className="nav-mobile-btn"
//           onClick={() => setMobileOpen(!mobileOpen)}
//           style={{ display: "none", background: "none", border: "none", color: "#fff", fontSize: 22 }}
//         >
//           {mobileOpen ? "✕" : "☰"}
//         </button>
//       </motion.nav>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             style={{ position: "fixed", top: 0, right: 0, width: "80%", height: "100%", background: C.navy2, padding: "80px 30px" }}
//           >
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 className={`nav-link ${isActive(link.href, link.sub) ? "active" : ""}`}
//                 style={{ display: "block", color: "#fff", padding: "15px 0", fontSize: 18, textDecoration: "none" }}
//                 onClick={() => setMobileOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ══════════════════════════════════════════════
   TOKENS
══════════════════════════════════════════════ */
const T = {
  teal:      "#00C9A7",
  tealLight: "#1fd1b5",
  tealDark:  "#00a07a",
  white:     "#FFFFFF",
  navy0:     "#010812",
  navy1:     "#030B18",
  navy2:     "#061425",
  navy3:     "#0a1f38",
  ease: [0.22,1,0.36,1] as [number,number,number,number],
};

/* ── Reveal ── */
function R({ children, d=0, from="up", style, className }:
  { children:React.ReactNode; d?:number; from?:"up"|"left"|"right"|"scale"; style?:React.CSSProperties; className?:string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once:true, margin:"-50px" });
  const init = from==="left"?{opacity:0,x:-40,y:0,scale:1}:from==="right"?{opacity:0,x:40,y:0,scale:1}:from==="scale"?{opacity:0,x:0,y:18,scale:0.93}:{opacity:0,x:0,y:36,scale:1};
  return (
    <motion.div ref={ref} className={className} style={style}
      initial={init} animate={inView?{opacity:1,x:0,y:0,scale:1}:init}
      transition={{duration:0.72,delay:d,ease:T.ease}}>
      {children}
    </motion.div>
  );
}

/* ── Counter ── */
function Counter({ to, suffix="" }:{ to:number; suffix?:string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref,{once:true});
  const mv = useMotionValue(0);
  const sp = useSpring(mv,{stiffness:55,damping:18});
  const [v,setV] = useState(0);
  useEffect(()=>{ if(inView) mv.set(to); },[inView,to,mv]);
  useEffect(()=>sp.on("change",x=>setV(Math.round(x))),[sp]);
  return <span ref={ref}>{v}{suffix}</span>;
}

/* ── Label ── */
function Label({ children, dark }:{ children:React.ReactNode; dark?:boolean }) {
  return (
    <motion.p initial={{opacity:0,x:-14}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
      transition={{duration:0.5,ease:T.ease}}
      style={{ display:"flex",alignItems:"center",gap:9,fontSize:11,fontWeight:700,
        letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:14,
        color: dark ? T.tealDark : T.teal }}>
      <span style={{width:22,height:2,background:`linear-gradient(90deg,${T.teal},${T.tealLight})`,borderRadius:2,display:"block"}}/>
      {children}
    </motion.p>
  );
}

/* ── DATA ── */
const SERVICES = [
  { icon:"🗂️", title:"CRM Consulting",         sub:"Tailored for CA, USA & UK businesses",     link:"CRM Implementation" },
  { icon:"⚙️", title:"CRM Customization",       sub:"Tailored for CA, USA & UK businesses",     link:"CRM Portal Development" },
  { icon:"🚀", title:"CRM Deployment",          sub:"Tailored for CA, USA & UK businesses",     link:"CRM Mobile App" },
  { icon:"🎨", title:"CRM UI/UX Design",        sub:"Tailored for CA, USA & UK businesses",     link:"CRM Integration" },
  { icon:"🔄", title:"CRM Migration Services",  sub:"Tailored for CA, USA & UK businesses",     link:"IT Management" },
  { icon:"🤖", title:"Digital Transformation",  sub:"Tailored for CA, USA & UK businesses",     link:"Marketing Automation" },
];

const BENEFITS = [
  { n:"01", title:"Secure Data",        desc:"Enterprise-grade encryption, GDPR & PIPEDA compliant data handling with role-based access control." },
  { n:"02", title:"Lead Management",    desc:"Intelligent pipelines that capture, qualify, and nurture leads automatically — 24/7 without manual effort." },
  { n:"03", title:"Easy Integration",   desc:"Connects with Salesforce, HubSpot, Zoho, MS Dynamics, WhatsApp, email, ERP and 100+ other tools." },
  { n:"04", title:"Relentless Support", desc:"Dedicated support teams in your time zone — Canada, USA, UK. SLA-backed, always available." },
];

const PLATFORMS = [
  { name:"Salesforce",       icon:"☁️",  desc:"Enterprise-grade integration" },
  { name:"HubSpot",          icon:"🧡",  desc:"Best-in-class for performance" },
  { name:"MS Dynamics 365",  icon:"🔷",  desc:"Enterprise-grade integration" },
  { name:"Zoho CRM",         icon:"🟢",  desc:"Best-in-class for performance" },
  { name:"SugarCRM",         icon:"🍬",  desc:"Enterprise-grade integration" },
  { name:"SuiteCRM",         icon:"💼",  desc:"Best-in-class for performance" },
  { name:"Pipedrive",        icon:"🔧",  desc:"Enterprise-grade integration" },
  { name:"Custom-Built CRM", icon:"⚡",  desc:"Built exactly to your spec" },
];

const HIRE_LEFT = [
  { title:"Enterprises",  desc:"Complex multi-location operations needing unified customer data and compliance-first architecture." },
  { title:"Start-ups",    desc:"Scalable CRM systems from day one — built lean, designed to grow with your business." },
  { title:"Agencies",     desc:"Client management, billing automation, and pipeline visibility across every account." },
];
const HIRE_RIGHT = [
  { title:"Analytical",    desc:"Turn raw data into strategy — dashboards, reporting, and predictive models built in." },
  { title:"Operational",   desc:"Automate daily workflows so your team focuses on relationships, not repetitive tasks." },
  { title:"Collaborative", desc:"Cross-department unification so sales, support, and marketing all see the same truth." },
];

const AI_FEATURES = [
  { icon:"📊", title:"AI Data Analysis",       desc:"Automatically clean, enrich, and segment your customer data using ML pipelines." },
  { icon:"🔮", title:"Predictive Insights",     desc:"Forecast deal closures, churn risks, and upsell opportunities before they happen." },
  { icon:"⚙️", title:"Automation at Scale",    desc:"AI-triggered workflows for follow-ups, nurture sequences, and escalation routing." },
  { icon:"📈", title:"Real-Time Dashboards",   desc:"Live KPI views with anomaly detection and natural-language query support." },
];

const FAQS = [
  { q:"What is custom CRM software vs off-the-shelf?",
    a:"Off-the-shelf CRMs like Salesforce or HubSpot are general-purpose tools that work for many businesses but often require workarounds for your specific processes. Custom CRM software is built entirely around your business logic, compliance requirements (GDPR, PIPEDA, CCPA), and integration needs. For businesses in Canada, USA, and the UK, this means no extra licensing fees as you grow, full data sovereignty, and a system your team actually uses. Development typically takes 8–20 weeks depending on complexity." },
  { q:"What features can be customised?",
    a:"Everything. Sales pipelines, lead scoring, deal stages, customer segmentation, automated follow-up sequences, WhatsApp and SMS integration, role-based dashboards, custom reporting, API connections to your ERP, accounting, or e-commerce stack, and even AI-powered forecasting layers. We scope every project uniquely — nothing is templated." },
  { q:"How long does CRM development take?",
    a:"A focused MVP CRM with core pipeline, contact management, and basic integrations takes 8–12 weeks. A full enterprise CRM with AI layers, multi-region compliance, ERP integration, and custom mobile apps typically runs 16–24 weeks. We provide fixed-scope, fixed-price proposals so there are no surprises. All timelines include UAT, training, and hypercare go-live support." },
  { q:"What does CRM development cost in Canada or UK?",
    a:"Because we build from our Bangalore studio (100+ person team, 8+ years experience) and deliver to your time zone, you receive enterprise-quality work at a fraction of what a local agency would charge. MVP CRMs typically start from CAD $18,000 / £10,500. Full enterprise implementations are scoped individually. All quotes are fixed-price with milestone-based payments — no hourly billing surprises." },
  { q:"Do you offer post-launch support?",
    a:"Yes. All projects include 90 days of hypercare support post-launch. We then offer structured retainer packages for ongoing development, bug fixes, performance monitoring, and feature additions. Our support teams operate in Canadian, US, and UK business hours. We're not a fire-and-forget agency — we build long-term partnerships." },
];

const CASE_STUDIES = [
  { industry:"Manufacturing", metric:"35%", label:"Efficiency Gain", desc:"Custom CRM + ERP bridge eliminated manual order entry, auto-routing 4,200 monthly transactions.", color:`linear-gradient(135deg,${T.tealDark},#006b52)` },
  { industry:"Healthcare",    metric:"42%", label:"More Bookings",   desc:"Patient scheduling CRM with WhatsApp reminders cut no-shows and filled 3× more slots weekly.",  color:`linear-gradient(135deg,#0a4f7a,#0d6b9e)` },
  { industry:"D2C Brand",     metric:"2.4×",label:"Conversion Lift", desc:"Behaviour-triggered CRM sequences based on browsing data doubled repeat purchase revenue in 90 days.", color:`linear-gradient(135deg,#3a1f6b,#5a2d9e)` },
];

const CLIENT_LOGOS = ["Acme Corp","NovaTech","MediSync","CloudRetail","UrbanBuild","FinEdge","PrimeCare","SwiftLogix"];

export default function CRMPage() {
  const [activeTab, setActiveTab] = useState<"intl"|"india">("intl");
  const [openFaq, setOpenFaq] = useState<number|null>(null);
  const [slide, setSlide] = useState(0);
  const [form, setForm] = useState({ name:"", lname:"", phone:"", email:"", service:"", message:"" });
  const [cfForm, setCfForm] = useState({ name:"", phone:"", email:"", desc:"" });
  const [submitted, setSubmitted] = useState(false);
  const [cfSubmitted, setCfSubmitted] = useState(false);
  const setF = (k:string) => (e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => setForm(f=>({...f,[k]:e.target.value}));
  const setCF = (k:string) => (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => setCfForm(f=>({...f,[k]:e.target.value}));

  const inpBase: React.CSSProperties = {
    width:"100%", borderRadius:8, padding:"12px 16px", fontSize:13.5,
    fontFamily:"var(--font-body)", outline:"none", boxSizing:"border-box", transition:"border-color 0.2s",
  };
  const inp: React.CSSProperties = {
    ...inpBase,
    background:"rgba(255,255,255,0.05)",
    border:"1px solid rgba(255,255,255,0.12)",
    color:T.white,
  };
  const inpWhite: React.CSSProperties = {
    ...inpBase,
    background:"rgba(1,8,18,0.05)",
    border:"1px solid rgba(1,8,18,0.12)",
    color:T.navy1,
  };
  const focus = (e:React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => e.target.style.borderColor="rgba(0,201,167,0.55)";
  const blur  = (e:React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>, light?:boolean) => e.target.style.borderColor=light?"rgba(1,8,18,0.12)":"rgba(255,255,255,0.12)";

  return (
    <>
      <Navbar />
      <main style={{background:T.navy1,color:T.white,fontFamily:"var(--font-body)",overflowX:"hidden"}}>

        {/* ══ M1 HERO ══════════════════════════════════ */}
        <section style={{
          position:"relative", minHeight:"100vh", display:"flex", alignItems:"center",
          paddingTop:90, overflow:"hidden",
          background:`linear-gradient(150deg,${T.navy0} 0%,${T.navy1} 50%,${T.navy2} 100%)`,
        }}>
          <div className="bg-grid" style={{position:"absolute",inset:0,zIndex:0,pointerEvents:"none"}}/>
          {/* orbs */}
          {[{x:"5%",y:"10%",w:600,c:"rgba(0,201,167,0.09)",d:7},{x:"65%",y:"55%",w:440,c:"rgba(31,209,181,0.06)",d:9}].map((o,i)=>(
            <motion.div key={i} animate={{scale:[1,1.15,1],opacity:[0.5,0.9,0.5]}}
              transition={{duration:o.d,repeat:Infinity,ease:"easeInOut",delay:i*2.5}}
              style={{position:"absolute",left:o.x,top:o.y,width:o.w,height:o.w,borderRadius:"50%",
                background:`radial-gradient(circle,${o.c} 0%,transparent 65%)`,zIndex:0,pointerEvents:"none"}}/>
          ))}
          {/* floating dots */}
          {[...Array(14)].map((_,i)=>(
            <motion.div key={i} animate={{y:[0,-18,0],opacity:[0.1,0.45,0.1]}}
              transition={{duration:3.5+(i%5)*0.8,repeat:Infinity,delay:i*0.3,ease:"easeInOut"}}
              style={{position:"absolute",zIndex:1,pointerEvents:"none",
                left:`${(i*6.7+4)%92}%`,top:`${(i*11+7)%85}%`,
                width:i%4===0?4:2,height:i%4===0?4:2,borderRadius:"50%",background:T.teal}}/>
          ))}

          <div style={{position:"relative",zIndex:2,width:"100%",maxWidth:1280,margin:"0 auto",padding:"80px 48px"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 400px",gap:64,alignItems:"center"}} className="hero-grid">

              {/* LEFT */}
              <div>
                <motion.div initial={{opacity:0,y:-16}} animate={{opacity:1,y:0}} transition={{duration:0.6,ease:T.ease}}
                  style={{display:"inline-flex",alignItems:"center",gap:10,background:"rgba(0,201,167,0.08)",
                    border:"1px solid rgba(0,201,167,0.28)",borderRadius:100,padding:"7px 20px",marginBottom:28}}>
                  <motion.span animate={{boxShadow:["0 0 5px #00C9A7","0 0 16px #00C9A7","0 0 5px #00C9A7"]}}
                    transition={{duration:2.2,repeat:Infinity}}
                    style={{width:7,height:7,borderRadius:"50%",background:T.teal,display:"block"}}/>
                  <span style={{color:T.teal,fontSize:11.5,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase"}}>
                    CRM Development — Canada · USA · UK
                  </span>
                </motion.div>

                <motion.h1 className="section-heading"
                  style={{marginBottom:24,lineHeight:1.06,fontSize:"clamp(28px,3.8vw,52px)"}}
                  initial="hidden" animate="visible"
                  variants={{hidden:{},visible:{transition:{staggerChildren:0.04}}}}>
                  {["Best","and","Most","Reliable"].map((w,i)=>(
                    <motion.span key={i} variants={{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:0.6,ease:T.ease}}}}>
                      {w}{" "}
                    </motion.span>
                  ))}
                  <motion.span className="grad-text"
                    variants={{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:0.7,ease:T.ease}}}}>
                    CRM Development Services
                  </motion.span>
                  {" "}
                  {["for","Canada,","USA","&","UK"].map((w,i)=>(
                    <motion.span key={i} variants={{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:0.6,ease:T.ease}}}}>
                      {w}{" "}
                    </motion.span>
                  ))}
                </motion.h1>

                <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.55}}
                  style={{color:"rgba(255,255,255,0.62)",fontSize:16.5,lineHeight:1.82,maxWidth:560,marginBottom:40}}>
                  At NNC Digital Solutions, we offer reliable, easy-to-understand CRM solutions that transform how your business manages customers, automates sales, and drives{" "}
                  <span style={{color:T.teal,fontWeight:600}}>revenue growth</span>.
                </motion.p>

                {/* trust badges */}
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.75}}
                  style={{display:"flex",flexWrap:"wrap",gap:10,marginBottom:40}}>
                  {["✦ Google Partner","■ ISO Certified","🔒 GDPR Compliant","🍁 PIPEDA Ready","★ Clutch Top Agency"].map(b=>(
                    <span key={b} style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",
                      borderRadius:8,padding:"6px 14px",fontSize:12,color:"rgba(255,255,255,0.65)",fontWeight:500}}>
                      {b}
                    </span>
                  ))}
                </motion.div>

                {/* stat row */}
                <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:0.9}}
                  style={{display:"flex",gap:32,flexWrap:"wrap"}}>
                  {[{n:565,s:"+",l:"Projects"},{n:8,s:"+",l:"Years"},{n:100,s:"+",l:"Team Size"},{n:3,s:"",l:"Markets"}].map((s,i)=>(
                    <motion.div key={s.l} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}}
                      transition={{delay:0.95+i*0.08,ease:T.ease}}>
                      <p style={{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.9rem",
                        background:`linear-gradient(135deg,${T.white} 30%,${T.teal})`,
                        WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",lineHeight:1}}>
                        <Counter to={s.n} suffix={s.s}/>
                      </p>
                      <p style={{fontSize:11,color:"rgba(255,255,255,0.4)",fontWeight:500,marginTop:4}}>{s.l}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* RIGHT — FORM */}
              <motion.div initial={{opacity:0,x:40}} animate={{opacity:1,x:0}}
                transition={{duration:0.85,delay:0.2,ease:T.ease}}
                style={{background:"rgba(6,20,37,0.9)",border:"1px solid rgba(0,201,167,0.2)",
                  borderRadius:20,padding:"36px 32px",backdropFilter:"blur(24px)",
                  boxShadow:"0 0 80px rgba(0,201,167,0.07)",position:"relative",overflow:"hidden"}}>
                <motion.div animate={{left:["-100%","100%"]}} transition={{duration:2.8,repeat:Infinity,ease:"linear",repeatDelay:4}}
                  style={{position:"absolute",top:0,width:"50%",height:2,
                    background:"linear-gradient(90deg,transparent,#00C9A7,transparent)"}}/>
                <p style={{color:T.teal,fontSize:10.5,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:6}}>
                  Free Strategy Consultation
                </p>
                <h3 style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:20,marginBottom:4,color:T.white}}>
                  Get a Free Consultation
                </h3>
                <p style={{color:"rgba(255,255,255,0.4)",fontSize:12.5,marginBottom:20}}>Response within 24 hours · No commitment</p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="ok" initial={{opacity:0,scale:0.94}} animate={{opacity:1,scale:1}}
                      style={{textAlign:"center",padding:"44px 0"}}>
                      <div style={{fontSize:48,marginBottom:16}}>✅</div>
                      <p style={{color:T.teal,fontSize:18,fontWeight:700,fontFamily:"var(--font-display)",marginBottom:8}}>We'll be in touch!</p>
                      <p style={{color:"rgba(255,255,255,0.45)",fontSize:13}}>Expect a response within 24 business hours.</p>
                    </motion.div>
                  ) : (
                    <motion.div key="form" style={{display:"flex",flexDirection:"column",gap:10}}>
                      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                        <input style={inp} placeholder="First Name *" value={form.name} onChange={setF("name")} onFocus={focus} onBlur={e=>blur(e)}/>
                        <input style={inp} placeholder="Last Name" value={form.lname} onChange={setF("lname")} onFocus={focus} onBlur={e=>blur(e)}/>
                      </div>
                      <div style={{position:"relative"}}>
                        <select style={{...inpBase,position:"absolute",left:0,top:0,bottom:0,width:68,
                          borderRadius:"8px 0 0 8px",border:"1px solid rgba(255,255,255,0.08)",
                          padding:"0 6px",fontSize:13,color:"rgba(255,255,255,0.7)",
                          height:"100%",background:"rgba(6,20,37,0.95)"}}>
                          <option>+1</option><option>+44</option><option>+91</option>
                        </select>
                        <input style={{...inp,paddingLeft:78}} placeholder="Phone Number" value={form.phone} onChange={setF("phone")} onFocus={focus} onBlur={e=>blur(e)}/>
                      </div>
                      <input style={inp} type="email" placeholder="Business Email *" value={form.email} onChange={setF("email")} onFocus={focus} onBlur={e=>blur(e)}/>
                      <select style={{...inp,color:form.service?"#fff":"rgba(255,255,255,0.35)"}} value={form.service} onChange={setF("service")}>
                        <option value="">Service of Interest</option>
                        {["CRM Consulting","CRM Implementation","CRM Customization","CRM Integration","CRM Migration","Digital Transformation","Marketing Automation"].map(s=><option key={s}>{s}</option>)}
                      </select>
                      <textarea style={{...inp,resize:"vertical",minHeight:72}} rows={3}
                        placeholder="Tell us about your project…" value={form.message} onChange={setF("message")} onFocus={focus} onBlur={e=>blur(e)}/>
                      <motion.button whileHover={{boxShadow:"0 0 32px rgba(0,201,167,0.45)"}} whileTap={{scale:0.98}}
                        onClick={()=>form.email&&form.name&&setSubmitted(true)}
                        style={{width:"100%",padding:"14px",borderRadius:9,
                          background:"linear-gradient(135deg,#00C9A7,#00a07a)",
                          border:"none",color:"#000",fontWeight:700,fontSize:14.5,
                          cursor:"pointer",fontFamily:"var(--font-body)",letterSpacing:"0.02em",marginTop:4}}>
                        🚀 Get Free Consultation
                      </motion.button>
                      <p style={{textAlign:"center",color:"rgba(255,255,255,0.25)",fontSize:11,marginTop:4}}>
                        🔒 100% secure · GDPR &amp; PIPEDA compliant
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ M2 CLIENT LOGOS ══════════════════════════ */}
        <section style={{padding:"48px 0",background:T.navy0,borderTop:"1px solid rgba(0,201,167,0.1)",borderBottom:"1px solid rgba(0,201,167,0.1)"}}>
          <div style={{maxWidth:1280,margin:"0 auto",padding:"0 48px",marginBottom:24}}>
            <R><h2 style={{textAlign:"center",fontFamily:"var(--font-display)",fontWeight:700,fontSize:16,color:"rgba(255,255,255,0.35)",letterSpacing:"0.08em",textTransform:"uppercase"}}>Our Happy Clients</h2></R>
          </div>
          <div style={{overflow:"hidden",position:"relative"}}>
            <div style={{display:"flex",gap:80,animation:"marquee 28s linear infinite",whiteSpace:"nowrap",opacity:0.5}}>
              {[...CLIENT_LOGOS,...CLIENT_LOGOS].map((l,i)=>(
                <div key={i} style={{display:"inline-flex",alignItems:"center",gap:12,flexShrink:0}}>
                  <div style={{width:36,height:36,borderRadius:8,background:"rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>🏢</div>
                  <span style={{fontSize:14,fontWeight:700,color:"rgba(255,255,255,0.6)",letterSpacing:"0.04em"}}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ M3 SUCCESS STORIES ═══════════════════════ */}
        <section style={{padding:"100px 48px",background:T.navy2,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:700,height:700,
            borderRadius:"50%",background:"radial-gradient(circle,rgba(0,201,167,0.04) 0%,transparent 65%)",pointerEvents:"none"}}/>
          <div style={{maxWidth:1280,margin:"0 auto"}}>
            <R style={{marginBottom:52,textAlign:"center"}}>
              <Label>Proven Results</Label>
              <h2 className="section-heading" style={{fontSize:"clamp(26px,3vw,42px)"}}>
                Success <span className="grad-text">Stories</span>
              </h2>
            </R>

            {/* MAGAZINE SPREAD — tall hero left + two stacked right */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"auto",gap:20,alignItems:"stretch"}} className="stories-grid">
              {/* LEFT — tall hero card */}
              <R from="left" style={{height:"100%"}}>
                <motion.div whileHover={{scale:1.015}} transition={{duration:0.35,ease:[0.22,1,0.36,1]}}
                  style={{background:CASE_STUDIES[0].color,borderRadius:24,overflow:"hidden",
                    height:"100%",minHeight:360,display:"flex",flexDirection:"column",
                    justifyContent:"flex-end",position:"relative",cursor:"default"}}>
                  {/* full-bleed diagonal stripe */}
                  <div style={{position:"absolute",top:0,left:0,right:0,bottom:0,
                    background:"linear-gradient(160deg,rgba(255,255,255,0.07) 0%,transparent 50%)",pointerEvents:"none"}}/>
                  {/* floating giant number */}
                  <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                    transition={{duration:0.8,delay:0.2}}
                    style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-65%)",
                      fontFamily:"var(--font-display)",fontWeight:800,
                      fontSize:"clamp(80px,12vw,140px)",color:"rgba(255,255,255,0.08)",
                      lineHeight:1,whiteSpace:"nowrap",userSelect:"none",pointerEvents:"none"}}>
                    {CASE_STUDIES[0].metric}
                  </motion.div>
                  {/* bottom content */}
                  <div style={{padding:"36px 36px",position:"relative",zIndex:1,
                    background:"linear-gradient(0deg,rgba(0,0,0,0.5) 0%,transparent 100%)"}}>
                    <span style={{display:"inline-block",background:"rgba(255,255,255,0.15)",
                      backdropFilter:"blur(8px)",borderRadius:100,padding:"4px 14px",
                      fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",
                      color:"rgba(255,255,255,0.9)",marginBottom:16}}>
                      {CASE_STUDIES[0].industry}
                    </span>
                    <div style={{display:"flex",alignItems:"baseline",gap:12,marginBottom:12}}>
                      <p style={{fontFamily:"var(--font-display)",fontWeight:800,
                        fontSize:"clamp(3rem,6vw,5rem)",color:T.white,lineHeight:1}}>
                        {CASE_STUDIES[0].metric}
                      </p>
                      <p style={{fontSize:14,fontWeight:600,color:"rgba(255,255,255,0.7)",
                        textTransform:"uppercase",letterSpacing:"0.08em"}}>
                        {CASE_STUDIES[0].label}
                      </p>
                    </div>
                    <p style={{color:"rgba(255,255,255,0.75)",fontSize:14.5,lineHeight:1.7,maxWidth:380}}>
                      {CASE_STUDIES[0].desc}
                    </p>
                  </div>
                </motion.div>
              </R>

              {/* RIGHT — two stacked cards */}
              <div style={{display:"flex",flexDirection:"column",gap:20}}>
                {CASE_STUDIES.slice(1).map((c,i)=>(
                  <R key={c.industry} d={0.15+i*0.1} from="right" style={{flex:1}}>
                    <motion.div whileHover={{scale:1.02,boxShadow:"0 24px 56px rgba(0,0,0,0.35)"}}
                      transition={{duration:0.3}}
                      style={{background:c.color,borderRadius:20,overflow:"hidden",
                        display:"flex",alignItems:"stretch",cursor:"default",height:"100%",minHeight:160,
                        position:"relative"}}>
                      {/* accent left bar */}
                      <div style={{width:5,background:"rgba(255,255,255,0.2)",flexShrink:0}}/>
                      {/* metric box */}
                      <div style={{padding:"28px 28px",display:"flex",flexDirection:"column",
                        justifyContent:"center",alignItems:"center",minWidth:130,
                        borderRight:"1px solid rgba(255,255,255,0.1)",
                        background:"rgba(0,0,0,0.15)",flexShrink:0}}>
                        <p style={{fontFamily:"var(--font-display)",fontWeight:800,
                          fontSize:"clamp(2rem,3.5vw,2.8rem)",color:T.white,lineHeight:1,marginBottom:4}}>
                          {c.metric}
                        </p>
                        <p style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.55)",
                          textTransform:"uppercase",letterSpacing:"0.1em",textAlign:"center"}}>{c.label}</p>
                      </div>
                      {/* text */}
                      <div style={{padding:"24px 28px",flex:1,display:"flex",flexDirection:"column",justifyContent:"center"}}>
                        <p style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.55)",
                          textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:8}}>{c.industry}</p>
                        <p style={{color:"rgba(255,255,255,0.82)",fontSize:13.5,lineHeight:1.7}}>{c.desc}</p>
                      </div>
                      {/* bg watermark number */}
                      <div style={{position:"absolute",right:-10,top:"50%",transform:"translateY(-50%)",
                        fontFamily:"var(--font-display)",fontWeight:800,fontSize:100,
                        color:"rgba(255,255,255,0.04)",lineHeight:1,pointerEvents:"none",userSelect:"none"}}>
                        {c.metric}
                      </div>
                    </motion.div>
                  </R>
                ))}
              </div>
            </div>
                    </div>
        </section>

        {/* ══ M4 SERVICES ══════════════════════════════ */}
        <section style={{padding:"100px 48px",background:T.white,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:"-5%",right:"-3%",width:400,height:400,borderRadius:"50%",
            background:"radial-gradient(circle,rgba(0,201,167,0.07) 0%,transparent 65%)",pointerEvents:"none"}}/>
          <div style={{maxWidth:1280,margin:"0 auto"}}>
            <R style={{marginBottom:16}}>
              <Label dark>What We Build</Label>
              <h2 className="section-heading" style={{color:T.navy1,fontSize:"clamp(26px,3vw,42px)",maxWidth:640,marginBottom:8}}>
                CRM Development{" "}
                <span style={{background:`linear-gradient(120deg,${T.teal},${T.tealDark})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
                  Services We Offer
                </span>
              </h2>
            </R>
            <R d={0.08} style={{marginBottom:52}}>
              <p style={{color:"rgba(1,8,18,0.55)",fontSize:16,maxWidth:580}}>
                End-to-end CRM solutions built for Canadian, US and UK compliance standards.
              </p>
            </R>

            {/* NUMBERED ROW ACCORDION — full-width stacked rows with number + title + pill */}
            <div style={{display:"flex",flexDirection:"column",gap:0,
              border:"1.5px solid rgba(0,201,167,0.15)",borderRadius:20,overflow:"hidden"}}>
              {SERVICES.map((s,i)=>(
                <R key={s.title} d={0.06*i}>
                  <motion.div
                    initial={{backgroundColor:"rgba(255,255,255,1)"}}
                    whileHover={{backgroundColor:"rgba(0,201,167,0.04)"}}
                    transition={{duration:0.25}}
                    style={{display:"grid",gridTemplateColumns:"72px 1fr auto",
                      alignItems:"center",gap:0,cursor:"default",
                      borderBottom: i<SERVICES.length-1?"1px solid rgba(0,201,167,0.12)":"none",
                      position:"relative",overflow:"hidden"}}>
                    {/* shimmer on hover */}
                    <motion.div
                      initial={{opacity:0,x:"-100%"}} whileHover={{opacity:1,x:"100%"}}
                      transition={{duration:0.6,ease:"easeInOut"}}
                      style={{position:"absolute",top:0,bottom:0,width:"30%",
                        background:"linear-gradient(90deg,transparent,rgba(0,201,167,0.06),transparent)",
                        pointerEvents:"none",zIndex:0}}/>

                    {/* number */}
                    <div style={{padding:"28px 0",display:"flex",alignItems:"center",
                      justifyContent:"center",borderRight:"1px solid rgba(0,201,167,0.1)",
                      background:"rgba(0,201,167,0.02)",position:"relative",zIndex:1}}>
                      <span style={{fontFamily:"var(--font-display)",fontWeight:800,
                        fontSize:13,color:"rgba(0,160,122,0.5)",letterSpacing:"0.04em"}}>
                        {String(i+1).padStart(2,"0")}
                      </span>
                    </div>

                    {/* main content */}
                    <div style={{padding:"24px 32px",display:"flex",alignItems:"center",
                      gap:20,position:"relative",zIndex:1}}>
                      <span style={{fontSize:26,flexShrink:0}}>{s.icon}</span>
                      <div style={{flex:1}}>
                        <h3 style={{fontFamily:"var(--font-display)",fontWeight:700,
                          fontSize:17,color:T.navy1,marginBottom:4,lineHeight:1.2}}>{s.title}</h3>
                        <p style={{color:"rgba(1,8,18,0.45)",fontSize:13,lineHeight:1.5}}>{s.sub}</p>
                      </div>
                    </div>

                    {/* right pill */}
                    <div style={{padding:"24px 28px",position:"relative",zIndex:1,
                      display:"flex",alignItems:"center",gap:12,flexShrink:0}}>
                      <motion.div whileHover={{x:-3}} transition={{duration:0.2}}
                        style={{display:"flex",alignItems:"center",gap:8,
                          background:"rgba(0,201,167,0.07)",borderRadius:100,
                          padding:"7px 18px",border:"1px solid rgba(0,201,167,0.2)"}}>
                        <span style={{width:5,height:5,borderRadius:"50%",
                          background:T.teal,flexShrink:0}}/>
                        <span style={{fontSize:12,fontWeight:600,color:T.tealDark,
                          whiteSpace:"nowrap"}}>{s.link}</span>
                        <span style={{color:"rgba(0,160,122,0.4)",fontSize:14}}>→</span>
                      </motion.div>
                    </div>
                  </motion.div>
                </R>
              ))}
            </div>
                    </div>
        </section>

        {/* ══ M5 KEY BENEFITS ══════════════════════════ */}
        <section style={{padding:"100px 48px",background:T.navy0,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:0,left:0,right:0,height:1,
            background:`linear-gradient(90deg,transparent,${T.teal},transparent)`,opacity:0.3}}/>
          <div style={{maxWidth:1280,margin:"0 auto"}}>
            <R style={{marginBottom:64,textAlign:"center"}}>
              <Label>Why It Works</Label>
              <h2 className="section-heading" style={{fontSize:"clamp(26px,3vw,42px)"}}>
                Key Benefits of <span className="grad-text">CRM Development</span>
              </h2>
            </R>

            {/* DIAGONAL OFFSET STACK — 2×2 with rotating angle accents */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24}} className="benefit-row">
              {BENEFITS.map((b,i)=>(
                <R key={b.n} d={i*0.1} from={(["left","right","left","right"] as const)[i]}>
                  <motion.div
                    whileHover={{y:-10,rotateZ:0,boxShadow:"0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,201,167,0.3)"}}
                    initial={{rotateZ: i%2===0 ? -0.4 : 0.4}}
                    transition={{duration:0.3,ease:[0.22,1,0.36,1]}}
                    style={{background:"rgba(255,255,255,0.97)",borderRadius:22,
                      overflow:"hidden",cursor:"default",position:"relative",
                      boxShadow:"0 8px 40px rgba(0,0,0,0.35)"}}>
                    {/* bold teal left bar */}
                    <div style={{position:"absolute",left:0,top:0,bottom:0,width:5,
                      background:`linear-gradient(180deg,${T.teal},${T.tealDark})`}}/>
                    {/* giant ghost number background */}
                    <div style={{position:"absolute",right:-12,bottom:-16,
                      fontFamily:"var(--font-display)",fontWeight:800,fontSize:130,
                      color:"rgba(0,201,167,0.06)",lineHeight:1,userSelect:"none",pointerEvents:"none",
                      letterSpacing:"-0.05em"}}>
                      {b.n}
                    </div>
                    <div style={{padding:"40px 40px 40px 46px",position:"relative",zIndex:1}}>
                      {/* small number badge */}
                      <div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",
                        width:36,height:36,borderRadius:10,marginBottom:20,
                        background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
                        fontFamily:"var(--font-display)",fontWeight:800,fontSize:13,color:"#000"}}>
                        {b.n}
                      </div>
                      <h3 style={{fontFamily:"var(--font-display)",fontWeight:800,
                        fontSize:"clamp(18px,2vw,22px)",color:T.navy1,marginBottom:14,lineHeight:1.15}}>
                        {b.title}
                      </h3>
                      <p style={{color:"rgba(1,8,18,0.52)",fontSize:14.5,lineHeight:1.78}}>
                        {b.desc}
                      </p>
                    </div>
                  </motion.div>
                </R>
              ))}
            </div>
                    </div>
        </section>

        {/* ══ M6 PLATFORM TOOLS ════════════════════════ */}
        <section style={{padding:"100px 48px",background:T.navy2,position:"relative",overflow:"hidden"}}>
          <div style={{maxWidth:1280,margin:"0 auto"}}>
            <R style={{marginBottom:52,textAlign:"center"}}>
              <Label>Tech Stack</Label>
              <h2 className="section-heading" style={{fontSize:"clamp(26px,3vw,42px)"}}>
                Leading Platform <span className="grad-text">Tools We Use</span>
              </h2>
            </R>
            {/* SPLIT: left = circular orbit display, right = feature list */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"center"}} className="two-col">

              {/* LEFT — hexagonal 3×3 mosaic tiles */}
              <R from="left">
                <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>
                  {PLATFORMS.map((p,i)=>(
                    <motion.div key={p.name}
                      whileHover={{scale:1.08,zIndex:10,
                        background:"rgba(0,201,167,0.12)",
                        borderColor:T.teal,
                        boxShadow:`0 0 0 1px ${T.teal}, 0 16px 36px rgba(0,0,0,0.4)`}}
                      initial={{opacity:0,scale:0.8}}
                      whileInView={{opacity:1,scale:1}}
                      viewport={{once:true}}
                      transition={{duration:0.4,delay:i*0.06,ease:[0.22,1,0.36,1]}}
                      style={{background:"rgba(255,255,255,0.04)",
                        border:"1px solid rgba(0,201,167,0.15)",
                        borderRadius:16,padding:"22px 12px",
                        textAlign:"center",cursor:"default",
                        backdropFilter:"blur(12px)",
                        aspectRatio:"1",display:"flex",flexDirection:"column",
                        alignItems:"center",justifyContent:"center",gap:8}}>
                      <span style={{fontSize:i===4?36:28}}>{p.icon}</span>
                      <span style={{fontFamily:"var(--font-display)",fontWeight:700,
                        fontSize:i===4?13:11,color:T.white,lineHeight:1.2,
                        textAlign:"center"}}>{p.name}</span>
                    </motion.div>
                  ))}
                </div>
              </R>

              {/* RIGHT — vertical feature checklist */}
              <R from="right" d={0.15}>
                <div style={{display:"flex",flexDirection:"column",gap:0}}>
                  {[
                    {icon:"🔗", title:"Native API Integrations", desc:"Out-of-the-box connectors for Salesforce, HubSpot, Zoho, and 50+ tools."},
                    {icon:"🔧", title:"Deep Custom Workflows", desc:"Every platform configured to your exact sales process and automation rules."},
                    {icon:"📊", title:"Analytics & Reporting", desc:"Unified dashboards pulling live data across all your connected platforms."},
                    {icon:"🛡️", title:"GDPR & PIPEDA Ready", desc:"Every integration built with data residency and compliance requirements in mind."},
                  ].map((f,i)=>(
                    <motion.div key={f.title}
                      whileHover={{x:6,background:"rgba(0,201,167,0.04)"}}
                      transition={{duration:0.2}}
                      style={{display:"flex",gap:18,padding:"22px 0",
                        borderBottom: i<3?"1px solid rgba(0,201,167,0.1)":"none",
                        alignItems:"flex-start"}}>
                      <div style={{width:44,height:44,borderRadius:12,flexShrink:0,
                        background:`linear-gradient(135deg,rgba(0,201,167,0.14),rgba(0,201,167,0.04))`,
                        border:"1px solid rgba(0,201,167,0.22)",
                        display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>
                        {f.icon}
                      </div>
                      <div>
                        <h4 style={{fontFamily:"var(--font-display)",fontWeight:700,
                          fontSize:15.5,color:T.white,marginBottom:5}}>{f.title}</h4>
                        <p style={{color:"rgba(255,255,255,0.48)",fontSize:13.5,lineHeight:1.65}}>{f.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </R>
            </div>
                    </div>
        </section>

        {/* ══ M7 HIRE DEVELOPERS ═══════════════════════ */}
        <section style={{padding:"100px 48px",background:T.navy1,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:0,left:0,right:0,height:1,
            background:`linear-gradient(90deg,transparent,${T.teal},transparent)`,opacity:0.25}}/>
          <div style={{maxWidth:1280,margin:"0 auto"}}>
            <R style={{marginBottom:52}}>
              <Label>Built for You</Label>
              <h2 className="section-heading" style={{fontSize:"clamp(26px,3vw,42px)",maxWidth:600}}>
                Hire Developers <span className="grad-text">Tailored to Your Needs</span>
              </h2>
            </R>

            {/* TICKET-STYLE CARDS — torn edge design, two rows of 3 */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}} className="hire-grid">
              {[...HIRE_LEFT,...HIRE_RIGHT].map((h,i)=>(
                <R key={h.title} d={i*0.08} from="scale">
                  <motion.div
                    whileHover={{y:-8,boxShadow:`0 28px 56px rgba(0,0,0,0.45), inset 0 1px 0 rgba(0,201,167,0.3)`}}
                    transition={{duration:0.28}}
                    style={{background:"rgba(255,255,255,0.035)",
                      border:"1px solid rgba(0,201,167,0.14)",
                      borderRadius:18,overflow:"hidden",cursor:"default",
                      position:"relative"}}>

                    {/* top accent strip with category */}
                    <div style={{
                      background: i<3
                        ? `linear-gradient(90deg,rgba(0,201,167,0.18),rgba(0,201,167,0.04))`
                        : `linear-gradient(90deg,rgba(0,160,122,0.25),rgba(0,160,122,0.06))`,
                      padding:"12px 22px",
                      borderBottom:"1px solid rgba(0,201,167,0.1)",
                      display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                      <span style={{fontSize:10,fontWeight:700,letterSpacing:"0.12em",
                        textTransform:"uppercase",
                        color: i<3 ? "rgba(0,201,167,0.8)" : "rgba(0,160,122,0.9)"}}>
                        {i<3 ? "🏢 Who" : "⚙️ How"}
                      </span>
                      <span style={{fontFamily:"var(--font-display)",fontWeight:800,
                        fontSize:11,color:"rgba(255,255,255,0.2)"}}>
                        {String(i+1).padStart(2,"0")}
                      </span>
                    </div>

                    {/* dashed separator line (ticket perforation) */}
                    <div style={{margin:"0 18px",height:1,
                      background:"repeating-linear-gradient(90deg,rgba(0,201,167,0.2) 0,rgba(0,201,167,0.2) 6px,transparent 6px,transparent 14px)"}}/>

                    {/* content */}
                    <div style={{padding:"20px 22px 26px"}}>
                      <h3 style={{fontFamily:"var(--font-display)",fontWeight:800,
                        fontSize:17,color:T.white,marginBottom:10,lineHeight:1.2}}>
                        {h.title}
                      </h3>
                      <p style={{color:"rgba(255,255,255,0.48)",fontSize:13.5,lineHeight:1.72}}>
                        {h.desc}
                      </p>
                    </div>

                    {/* bottom teal glow on hover */}
                    <motion.div
                      initial={{opacity:0}} whileHover={{opacity:1}}
                      transition={{duration:0.2}}
                      style={{position:"absolute",bottom:0,left:0,right:0,height:2,
                        background:`linear-gradient(90deg,transparent,${T.teal},transparent)`}}/>
                  </motion.div>
                </R>
              ))}
            </div>
                    </div>
        </section>

        {/* ══ M8 AI-POWERED ════════════════════════════ */}
        <section style={{padding:"100px 48px",position:"relative",overflow:"hidden",
          background:`linear-gradient(135deg,${T.navy3} 0%,#0d2540 50%,${T.navy2} 100%)`}}>
          <div style={{position:"absolute",top:"40%",left:"50%",transform:"translate(-50%,-50%)",width:800,height:800,
            borderRadius:"50%",background:"radial-gradient(circle,rgba(0,201,167,0.06) 0%,transparent 65%)",pointerEvents:"none"}}/>
          {/* animated rings */}
          {[200,350,500].map((sz,i)=>(
            <motion.div key={sz} animate={{scale:[1,1.06+i*0.02,1],opacity:[0.06,0.12,0.06]}}
              transition={{duration:5+i*1.5,repeat:Infinity,ease:"easeInOut",delay:i*0.8}}
              style={{position:"absolute",top:"40%",left:"50%",transform:"translate(-50%,-50%)",
                width:sz,height:sz,borderRadius:"50%",
                border:`1px solid rgba(0,201,167,0.25)`,pointerEvents:"none"}}/>
          ))}

          <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:1}}>
            <R style={{marginBottom:20,textAlign:"center"}}>
              <Label>Next-Gen CRM</Label>
              <h2 className="section-heading" style={{fontSize:"clamp(26px,3vw,42px)"}}>
                Leverage <span className="grad-text">AI-Powered CRM</span> Solutions
              </h2>
            </R>
            <R d={0.08} style={{textAlign:"center",marginBottom:56}}>
              <p style={{color:"rgba(255,255,255,0.55)",fontSize:16,maxWidth:560,margin:"0 auto"}}>
                Move beyond basic CRM. Our AI layer adds intelligence to every customer interaction.
              </p>
            </R>

            {/* TERMINAL/CODE CARD AESTHETIC — dark monospace readout style */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:3}} className="ai-grid">
              {AI_FEATURES.map((a,i)=>(
                <R key={a.title} d={i*0.1} from="scale">
                  <motion.div
                    whileHover={{zIndex:2,scale:1.03,
                      boxShadow:`0 32px 72px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,201,167,0.5)`}}
                    transition={{duration:0.28}}
                    style={{background:"rgba(1,8,18,0.95)",cursor:"default",
                      borderRadius: i===0?"18px 4px 4px 4px": i===1?"4px 18px 4px 4px": i===2?"4px 4px 4px 18px":"4px 4px 18px 4px",
                      border:"1px solid rgba(0,201,167,0.18)",
                      padding:"0",overflow:"hidden",position:"relative"}}>

                    {/* terminal top bar */}
                    <div style={{background:"rgba(0,201,167,0.08)",borderBottom:"1px solid rgba(0,201,167,0.12)",
                      padding:"10px 18px",display:"flex",alignItems:"center",gap:8}}>
                      <div style={{display:"flex",gap:6}}>
                        {["rgba(255,95,86,0.7)","rgba(255,189,46,0.7)","rgba(39,201,63,0.7)"].map((c,j)=>(
                          <div key={j} style={{width:10,height:10,borderRadius:"50%",background:c}}/>
                        ))}
                      </div>
                      <span style={{fontFamily:"'Courier New',monospace",fontSize:11,
                        color:"rgba(0,201,167,0.6)",marginLeft:8,letterSpacing:"0.04em"}}>
                        ai.crm / {a.title.toLowerCase().replace(/ /g,"_")}.ts
                      </span>
                    </div>

                    {/* code-style content */}
                    <div style={{padding:"24px 24px 28px"}}>
                      {/* icon + fake import line */}
                      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
                        <div style={{width:48,height:48,borderRadius:12,
                          background:`linear-gradient(135deg,${T.teal}22,${T.tealDark}11)`,
                          border:`1px solid rgba(0,201,167,0.25)`,
                          display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>
                          {a.icon}
                        </div>
                        <div>
                          <p style={{fontFamily:"'Courier New',monospace",fontSize:11,
                            color:"rgba(0,201,167,0.5)",marginBottom:3}}>
                            <span style={{color:"rgba(100,160,255,0.7)"}}>import</span> {"{"} module {"}"}
                          </p>
                          <h3 style={{fontFamily:"var(--font-display)",fontWeight:800,
                            fontSize:16.5,color:T.white,lineHeight:1}}>{a.title}</h3>
                        </div>
                      </div>

                      {/* fake code block */}
                      <div style={{background:"rgba(0,201,167,0.03)",borderRadius:10,
                        border:"1px solid rgba(0,201,167,0.08)",padding:"14px 16px",marginBottom:16}}>
                        <p style={{fontFamily:"'Courier New',monospace",fontSize:11.5,
                          color:"rgba(255,255,255,0.35)",lineHeight:2,margin:0}}>
                          <span style={{color:"rgba(0,201,167,0.6)"}}>const</span>{" "}
                          <span style={{color:"rgba(255,200,100,0.7)"}}>{a.title.split(" ")[0].toLowerCase()}</span>
                          {" = () => \{"}
                          <br/>
                          <span style={{paddingLeft:16,color:"rgba(255,255,255,0.25)"}}>
                            {"// "}
                          </span>
                          <span style={{color:"rgba(255,255,255,0.55)"}}>
                            {a.desc.substring(0,42)}...
                          </span>
                          <br/>
                          {"\}"}
                        </p>
                      </div>

                      <p style={{color:"rgba(255,255,255,0.5)",fontSize:13.5,lineHeight:1.72}}>
                        {a.desc}
                      </p>
                    </div>

                    {/* animated cursor blink */}
                    <motion.div animate={{opacity:[1,0,1]}} transition={{duration:1.2,repeat:Infinity,delay:i*0.3}}
                      style={{position:"absolute",bottom:20,right:20,
                        width:8,height:14,background:"rgba(0,201,167,0.5)",borderRadius:2}}/>
                  </motion.div>
                </R>
              ))}
            </div>
                    </div>
        </section>

        {/* ══ M9 FULL-WIDTH CTA BANNER ═════════════════ */}
        <section style={{padding:"80px 48px",
          background:`linear-gradient(135deg,${T.tealDark} 0%,#007a5e 40%,${T.navy3} 100%)`,
          position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",inset:0,opacity:0.04,
            backgroundImage:"radial-gradient(rgba(255,255,255,0.8) 1px,transparent 1px)",
            backgroundSize:"28px 28px",pointerEvents:"none"}}/>
          {/* shimmer */}
          <motion.div animate={{left:["-40%","120%"]}} transition={{duration:3.5,repeat:Infinity,ease:"linear",repeatDelay:4}}
            style={{position:"absolute",top:0,width:"30%",height:"100%",
              background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)",pointerEvents:"none"}}/>

          <R style={{textAlign:"center",position:"relative",zIndex:1}}>
            <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",
              color:"rgba(255,255,255,0.65)",marginBottom:16}}>Take The Next Step</p>
            <h2 style={{fontFamily:"var(--font-display)",fontWeight:800,
              fontSize:"clamp(22px,3vw,36px)",color:T.white,marginBottom:16,lineHeight:1.2,maxWidth:720,margin:"0 auto 16px"}}>
              Want CRM Development solutions that take your business to the next level?
            </h2>
            <p style={{color:"rgba(255,255,255,0.7)",fontSize:16,marginBottom:36}}>
              Connect with NNC Digital today.
            </p>
            <motion.a href="#contact" whileHover={{scale:1.05,boxShadow:"0 12px 40px rgba(0,0,0,0.3)"}}
              whileTap={{scale:0.97}}
              style={{display:"inline-flex",alignItems:"center",gap:10,background:T.white,
                borderRadius:12,padding:"16px 40px",color:T.tealDark,fontWeight:800,
                fontSize:15,textDecoration:"none",boxShadow:"0 8px 28px rgba(0,0,0,0.2)"}}>
              Connect Now →
            </motion.a>
          </R>
        </section>

        {/* ══ M10 WHY CHOOSE US ════════════════════════ */}
        <section style={{padding:"100px 48px",background:T.white,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",bottom:"-10%",right:"-5%",width:500,height:500,borderRadius:"50%",
            background:"radial-gradient(circle,rgba(0,201,167,0.07) 0%,transparent 65%)",pointerEvents:"none"}}/>
          <div style={{maxWidth:1280,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"center"}} className="two-col">
            <R from="left">
              <Label dark>Our Track Record</Label>
              <h2 className="section-heading" style={{color:T.navy1,fontSize:"clamp(26px,3vw,42px)",marginBottom:24}}>
                Why Choose Us as Your{" "}
                <span style={{background:`linear-gradient(120deg,${T.teal},${T.tealDark})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
                  CRM Partner?
                </span>
              </h2>
              <p style={{color:"rgba(1,8,18,0.58)",lineHeight:1.85,fontSize:15.5,marginBottom:28}}>
                Backed by <strong style={{color:T.navy1}}>Nakshatra Namaha Creations Pvt. Ltd.</strong> — 8+ years, 565+ projects delivered from Bangalore, India. NNC Digital brings the same expertise to Canada, USA, and the UK with dedicated client-facing teams, transparent pricing, and long-term partnership.
              </p>
              {[
                ["🏆","565+ Projects Delivered","Across every digital discipline — web, mobile, CRM, ERP, video."],
                ["🌍","3 International Markets","Canada, USA, and UK — with local time-zone support."],
                ["🔒","Full Compliance","GDPR, PIPEDA, and CCPA built into every system from day one."],
                ["💰","Fixed-Price Proposals","No hourly billing surprises. You know the full cost upfront."],
              ].map(([icon,title,desc])=>(
                <div key={String(title)} style={{display:"flex",alignItems:"flex-start",gap:14,marginBottom:18}}>
                  <div style={{width:38,height:38,borderRadius:10,background:"rgba(0,201,167,0.08)",
                    border:"1px solid rgba(0,201,167,0.2)",display:"flex",alignItems:"center",
                    justifyContent:"center",fontSize:17,flexShrink:0}}>{icon}</div>
                  <div>
                    <p style={{fontWeight:700,fontSize:14.5,color:T.navy1,marginBottom:3}}>{title}</p>
                    <p style={{fontSize:13.5,color:"rgba(1,8,18,0.52)",lineHeight:1.65}}>{desc}</p>
                  </div>
                </div>
              ))}
              <Link href="/consultation" className="btn-primary" style={{marginTop:12}}>📅 Book a Free Call</Link>
            </R>

            <R from="right" d={0.15}>
              {/* video placeholder */}
              <motion.div whileHover={{boxShadow:"0 32px 80px rgba(0,0,0,0.18)"}} transition={{duration:0.3}}
                style={{background:T.navy1,borderRadius:22,overflow:"hidden",
                  aspectRatio:"16/9",position:"relative",
                  boxShadow:"0 16px 60px rgba(1,8,18,0.15)"}}>
                <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16}}>
                  <motion.div whileHover={{scale:1.12}} transition={{duration:0.22}}
                    style={{width:72,height:72,borderRadius:"50%",
                      background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
                      display:"flex",alignItems:"center",justifyContent:"center",
                      cursor:"pointer",boxShadow:`0 0 0 16px rgba(0,201,167,0.1)`}}>
                    <svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </motion.div>
                  <p style={{color:"rgba(255,255,255,0.5)",fontSize:13}}>Watch Our Story — 2:34</p>
                </div>
                <div style={{position:"absolute",top:16,left:16,
                  background:"rgba(255,255,255,0.92)",borderRadius:10,
                  padding:"6px 12px",backdropFilter:"blur(8px)",
                  boxShadow:"0 2px 12px rgba(0,0,0,0.3)"}}>
                  <Image src="/NNCLOGO.jpg" alt="NNC Digital" width={120} height={36}
                    style={{display:"block",objectFit:"contain"}}/>
                </div>
              </motion.div>
            </R>
          </div>
        </section>

        {/* ══ M11 GLOBAL PRESENCE ══════════════════════ */}
        <section style={{padding:"100px 48px",background:T.navy1,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:0,left:0,right:0,height:1,
            background:`linear-gradient(90deg,transparent,${T.teal},transparent)`,opacity:0.25}}/>
          <div style={{maxWidth:1280,margin:"0 auto"}}>
            <R style={{marginBottom:48,textAlign:"center"}}>
              <Label>Where We Operate</Label>
              <h2 className="section-heading" style={{fontSize:"clamp(26px,3vw,42px)"}}>
                Our <span className="grad-text">Global Presence</span>
              </h2>
            </R>

            {/* tabs */}
            <div style={{display:"flex",justifyContent:"center",gap:0,marginBottom:40}}>
              {(["intl","india"] as const).map(tab=>(
                <button key={tab} onClick={()=>setActiveTab(tab)}
                  style={{padding:"12px 32px",cursor:"pointer",fontFamily:"var(--font-body)",
                    fontWeight:700,fontSize:14,transition:"all 0.25s",outline:"none",
                    background: activeTab===tab ? `linear-gradient(135deg,${T.teal},${T.tealDark})` : "rgba(255,255,255,0.04)",
                    color: activeTab===tab ? "#000" : "rgba(255,255,255,0.55)",
                    borderRadius: tab==="intl" ? "10px 0 0 10px" : "0 10px 10px 0",
                    border: `1px solid ${activeTab===tab ? "transparent" : "rgba(255,255,255,0.1)"}` }}>
                  {tab==="intl" ? "🌎 North America & UK" : "🇮🇳 India (HQ)"}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}}
                transition={{duration:0.4,ease:T.ease}}>
                {activeTab==="intl" ? (
                  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:18}}>
                    {[
                      {flag:"🇨🇦",city:"Toronto, Canada",phone:"+1 647-XXX-XXXX",time:"EST"},
                      {flag:"🇺🇸",city:"New York, USA",phone:"+1 631-XXX-XXXX",time:"EST"},
                      {flag:"🇬🇧",city:"London, UK",phone:"+44 20-XXXX-XXXX",time:"GMT"},
                    ].map(o=>(
                      <motion.div key={o.city} whileHover={{y:-5,borderColor:T.teal}} transition={{duration:0.22}}
                        style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",
                          borderRadius:16,padding:"28px 26px",display:"flex",alignItems:"flex-start",gap:16}}>
                        <div style={{width:48,height:48,borderRadius:12,background:"rgba(0,201,167,0.08)",
                          border:"1px solid rgba(0,201,167,0.18)",display:"flex",alignItems:"center",
                          justifyContent:"center",fontSize:24,flexShrink:0}}>{o.flag}</div>
                        <div>
                          <p style={{fontWeight:700,fontSize:15.5,color:T.white,marginBottom:4}}>{o.city}</p>
                          <p style={{fontSize:13,color:T.teal,marginBottom:4}}>{o.phone}</p>
                          <span style={{fontSize:11,background:"rgba(0,201,167,0.1)",border:"1px solid rgba(0,201,167,0.2)",
                            borderRadius:100,padding:"3px 10px",color:T.teal,fontWeight:600}}>{o.time}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:18}}>
                    {[
                      {city:"Bangalore HQ",phone:"+91 9900566466",email:"info@nakshatranamahacreations.com"},
                      {city:"Mysore",phone:"",email:""},
                      {city:"Mumbai",phone:"",email:""},
                      {city:"Hyderabad",phone:"",email:""},
                    ].map(o=>(
                      <motion.div key={o.city} whileHover={{y:-5,borderColor:T.teal}} transition={{duration:0.22}}
                        style={{background:"rgba(0,201,167,0.05)",border:"1px solid rgba(0,201,167,0.18)",
                          borderRadius:16,padding:"28px 26px",display:"flex",alignItems:"flex-start",gap:16}}>
                        <div style={{width:48,height:48,borderRadius:12,background:"rgba(0,201,167,0.1)",
                          border:"1px solid rgba(0,201,167,0.22)",display:"flex",alignItems:"center",
                          justifyContent:"center",fontSize:22,flexShrink:0}}>🇮🇳</div>
                        <div>
                          <p style={{fontWeight:700,fontSize:15.5,color:T.white,marginBottom:4}}>{o.city}</p>
                          {o.phone && <p style={{fontSize:13,color:T.teal,marginBottom:4}}>{o.phone}</p>}
                          {o.email && <p style={{fontSize:12,color:"rgba(255,255,255,0.4)"}}>{o.email}</p>}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ══ M12 FAQS ═════════════════════════════════ */}
        <section style={{padding:"100px 48px",background:T.navy0,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:0,left:0,right:0,height:1,
            background:`linear-gradient(90deg,transparent,${T.teal},transparent)`,opacity:0.2}}/>
          <div style={{maxWidth:860,margin:"0 auto"}}>
            <R style={{marginBottom:52,textAlign:"center"}}>
              <Label>Common Questions</Label>
              <h2 className="section-heading" style={{fontSize:"clamp(26px,3vw,42px)"}}>
                Frequently Asked <span className="grad-text">Questions</span>
              </h2>
            </R>

            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              {FAQS.map((f,i)=>(
                <R key={i} d={0.06*i}>
                  <motion.div style={{background:"rgba(255,255,255,0.03)",border:`1px solid ${openFaq===i?"rgba(0,201,167,0.4)":"rgba(255,255,255,0.08)"}`,borderRadius:14,overflow:"hidden",transition:"border-color 0.3s"}}>
                    <button onClick={()=>setOpenFaq(openFaq===i?null:i)}
                      style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",
                        padding:"22px 26px",background:"none",border:"none",cursor:"pointer",textAlign:"left",gap:16}}>
                      <span style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:15.5,color:T.white,lineHeight:1.4}}>{f.q}</span>
                      <motion.span animate={{rotate:openFaq===i?45:0}} transition={{duration:0.25}}
                        style={{width:28,height:28,borderRadius:"50%",
                          background: openFaq===i?`linear-gradient(135deg,${T.teal},${T.tealDark})`:"rgba(0,201,167,0.1)",
                          border:"1px solid rgba(0,201,167,0.3)",display:"flex",alignItems:"center",
                          justifyContent:"center",color:openFaq===i?"#000":T.teal,fontSize:18,flexShrink:0,fontWeight:300}}>
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {openFaq===i && (
                        <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}
                          transition={{duration:0.35,ease:T.ease}}>
                          <div style={{padding:"0 26px 24px",borderTop:"1px solid rgba(0,201,167,0.1)"}}>
                            <p style={{color:"rgba(255,255,255,0.58)",fontSize:14.5,lineHeight:1.82,paddingTop:16}}>{f.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </R>
              ))}
            </div>
          </div>
        </section>

        {/* ══ M13 CONTACT FORM ═════════════════════════ */}
        <section id="contact" style={{padding:"100px 48px",
          background:`linear-gradient(135deg,${T.tealDark} 0%,#006b52 30%,${T.navy1} 65%,${T.navy0} 100%)`,
          position:"relative",overflow:"hidden"}}>
          {/* rings */}
          {[240,400,560].map((sz,i)=>(
            <motion.div key={sz} animate={{scale:[1,1.06,1],opacity:[0.06,0.12,0.06]}}
              transition={{duration:5+i*1.5,repeat:Infinity,ease:"easeInOut",delay:i*0.8}}
              style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",
                width:sz,height:sz,borderRadius:"50%",
                border:"1px solid rgba(255,255,255,0.15)",pointerEvents:"none"}}/>
          ))}

          <div style={{maxWidth:860,margin:"0 auto",position:"relative",zIndex:1}}>
            <R style={{textAlign:"center",marginBottom:52}}>
              <Label>Get Started</Label>
              <h2 className="section-heading" style={{fontSize:"clamp(26px,3vw,42px)",color:T.white}}>
                Ready to Build Next-Level{" "}
                <span style={{color:"rgba(255,255,255,0.8)",fontStyle:"italic"}}>Custom CRM Solutions?</span>
              </h2>
            </R>

            <R d={0.1}>
              <motion.div whileHover={{boxShadow:"0 48px 100px rgba(0,0,0,0.4)"}} transition={{duration:0.3}}
                style={{background:"rgba(255,255,255,0.97)",borderRadius:24,padding:"56px 52px",
                  boxShadow:"0 24px 80px rgba(0,0,0,0.3)",position:"relative",overflow:"hidden"}}>
                <div style={{position:"absolute",top:0,left:0,right:0,height:4,
                  background:`linear-gradient(90deg,${T.teal},${T.tealLight},${T.tealDark})`}}/>

                <AnimatePresence mode="wait">
                  {cfSubmitted ? (
                    <motion.div key="ok" initial={{opacity:0,scale:0.94}} animate={{opacity:1,scale:1}}
                      style={{textAlign:"center",padding:"48px 0"}}>
                      <div style={{fontSize:52,marginBottom:20}}>✅</div>
                      <p style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:22,color:T.navy1,marginBottom:10}}>Message Received!</p>
                      <p style={{color:"rgba(1,8,18,0.5)",fontSize:15}}>We'll get back to you within 24 business hours.</p>
                    </motion.div>
                  ) : (
                    <motion.div key="form">
                      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
                        <input style={inpWhite} placeholder="Your Name *" value={cfForm.name} onChange={setCF("name")} onFocus={focus} onBlur={e=>blur(e,true)}/>
                        <div style={{position:"relative"}}>
                          <select style={{...inpBase,position:"absolute",left:0,top:0,bottom:0,width:68,
                            borderRadius:"8px 0 0 8px",border:"1px solid rgba(1,8,18,0.1)",
                            padding:"0 6px",fontSize:13,color:"rgba(1,8,18,0.6)",
                            height:"100%",background:"rgba(0,201,167,0.04)"}}>
                            <option>+1</option><option>+44</option><option>+91</option>
                          </select>
                          <input style={{...inpWhite,paddingLeft:78}} placeholder="Phone Number" value={cfForm.phone} onChange={setCF("phone")} onFocus={focus} onBlur={e=>blur(e,true)}/>
                        </div>
                      </div>
                      <input style={{...inpWhite,marginBottom:16,display:"block"}} type="email"
                        placeholder="Business Email *" value={cfForm.email} onChange={setCF("email")} onFocus={focus} onBlur={e=>blur(e,true)}/>
                      <textarea style={{...inpWhite,resize:"vertical",minHeight:120,marginBottom:20,display:"block"}} rows={4}
                        placeholder="Tell us about your project — what are you trying to solve?" value={cfForm.desc} onChange={setCF("desc")} onFocus={focus} onBlur={e=>blur(e,true)}/>

                      <motion.button onClick={()=>cfForm.email&&cfForm.name&&setCfSubmitted(true)}
                        whileHover={{boxShadow:`0 8px 32px rgba(0,201,167,0.4)`,y:-2}} whileTap={{scale:0.98}}
                        style={{width:"100%",padding:"15px",borderRadius:10,
                          background:`linear-gradient(135deg,${T.teal},${T.tealDark})`,
                          border:"none",color:"#000",fontWeight:700,fontSize:15,cursor:"pointer",
                          fontFamily:"var(--font-body)",letterSpacing:"0.02em",marginBottom:16}}>
                        🚀 Submit Project Brief
                      </motion.button>

                      {/* contact row */}
                      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:20,
                        paddingTop:16,borderTop:"1px solid rgba(1,8,18,0.08)"}}>
                        {[
                          {label:"USA",val:"+1 631-XXX-XXXX"},
                          {label:"Canada",val:"+1 647-XXX-XXXX"},
                          {label:"UK",val:"+44 20-XXX-XXXX"},
                          {label:"Email",val:"hello@nncdigital.com"},
                        ].map(c=>(
                          <div key={c.label} style={{textAlign:"center"}}>
                            <p style={{fontSize:10,fontWeight:700,color:"rgba(1,8,18,0.35)",
                              letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:3}}>{c.label}</p>
                            <p style={{fontSize:13,fontWeight:600,color:T.tealDark}}>{c.val}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </R>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @keyframes marquee {
          from{transform:translateX(0)}
          to{transform:translateX(-50%)}
        }
        @media(max-width:1024px){
          .hero-grid { grid-template-columns:1fr !important; }
          .hero-grid > div:last-child { display:none !important; }
          .two-col { grid-template-columns:1fr !important; }
          .benefit-row { grid-template-columns:1fr !important; }
          .timeline-line { display:none !important; }
        }
        @media(max-width:768px){
          section { padding-left:24px !important; padding-right:24px !important;
                    padding-top:72px !important; padding-bottom:72px !important; }
          .section-heading { font-size:clamp(24px,6vw,32px) !important; }
        }
        @media(max-width:480px){
          section { padding-left:16px !important; padding-right:16px !important; }
        }
      `}</style>
    </>
  );
}