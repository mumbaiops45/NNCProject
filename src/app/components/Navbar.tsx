// "use client";
// import { useState, useEffect, useRef } from "react";

// const SOLUTIONS = [
//   "CRM Development", "ERP Development", "Web Development",
//   "Mobile App Development", "Marketing Automation",
//   "Salesforce CRM", "Hire CRM Developers",
//   "Digital Transformation", "SEO & Digital Marketing",
// ];
// const INDUSTRIES = [
//   "Healthcare", "Real Estate", "E-Commerce",
//   "Manufacturing", "Professional Services",
// ];
// const NAV_LINKS = ["Case Studies", "Pricing", "About Us", "Blog", "Contact"];

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [solutionsOpen, setSolutionsOpen] = useState(false);
//   const [industriesOpen, setIndustriesOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const solRef = useRef<HTMLDivElement>(null);
//   const indRef = useRef<HTMLDivElement>(null);

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (solRef.current && !solRef.current.contains(e.target as Node)) setSolutionsOpen(false);
//       if (indRef.current && !indRef.current.contains(e.target as Node)) setIndustriesOpen(false);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   // Shadow on scroll
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

//         .nnc-navbar {
//           position: sticky;
//           top: 0;
//           z-index: 999;
//           font-family: 'Poppins', sans-serif;
//           background: rgba(3, 11, 24, 0.96);
//           backdrop-filter: blur(18px);
//           -webkit-backdrop-filter: blur(18px);
//           border-bottom: 1px solid rgba(255,255,255,0.07);
//           transition: box-shadow 0.3s ease;
//         }
//         .nnc-navbar.scrolled {
//           box-shadow: 0 4px 32px rgba(0,0,0,0.45);
//         }

//         .nnc-nav-inner {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 32px;
//           height: 68px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 16px;
//         }

//         /* ── Logo ── */
//         .nnc-logo {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           text-decoration: none;
//           flex-shrink: 0;
//         }
//         .nnc-logo-img {
//           width: 120px;
//           height: 52px;
//           object-fit: contain;
//           border-radius: 8px;
//           background: transparent;
//         }
//         .nnc-logo-text {
//           font-size: 19px;
//           font-weight: 800;
//           color: #fff;
//           letter-spacing: -0.01em;
//           white-space: nowrap;
//           line-height: 1;
//         }
//         .nnc-logo-text span {
//           color: #00C9A7;
//           font-weight: 400;
//         }

//         /* ── Desktop links ── */
//         .nnc-nav-links {
//           display: flex;
//           align-items: center;
//           gap: 2px;
//           flex: 1;
//           justify-content: center;
//         }

//         .nnc-link {
//           position: relative;
//           display: inline-flex;
//           align-items: center;
//           gap: 4px;
//           padding: 7px 13px;
//           color: rgba(255,255,255,0.8);
//           font-size: 16px;
//           font-weight: 600;
//           text-decoration: none;
//           border-radius: 8px;
//           border: none;
//           background: none;
//           cursor: pointer;
//           font-family: 'Poppins', sans-serif;
//           white-space: nowrap;
//           transition: color 0.2s, background 0.2s;
//           line-height: 1;
//         }
//         .nnc-link:hover,
//         .nnc-link.open {
//           color: #00C9A7;
//           background: rgba(0,201,167,0.08);
//         }
//         .nnc-link .arr {
//           font-size: 10px;
//           display: inline-block;
//           transition: transform 0.2s;
//           margin-top: 1px;
//         }
//         .nnc-link.open .arr {
//           transform: rotate(180deg);
//         }

//         /* ── Dropdown ── */
//         .nnc-dd { position: relative; }

//         .nnc-dd-menu {
//           position: absolute;
//           top: calc(100% + 8px);
//           left: 50%;
//           transform: translateX(-50%);
//           min-width: 240px;
//           background: #0d1f38;
//           border: 1px solid rgba(0,201,167,0.2);
//           border-radius: 14px;
//           padding: 8px 0;
//           box-shadow: 0 24px 56px rgba(0,0,0,0.55);
//           z-index: 1000;
//           animation: ddIn 0.16s ease;
//         }
//         @keyframes ddIn {
//           from { opacity:0; transform:translateX(-50%) translateY(-6px); }
//           to   { opacity:1; transform:translateX(-50%) translateY(0); }
//         }

//         .nnc-drop-item {
//           display: block;
//           padding: 9px 20px;
//           color: rgba(255,255,255,0.65);
//           font-size: 15px;
//           font-weight: 500;
//           text-decoration: none;
//           transition: color 0.15s, background 0.15s;
//           font-family: 'Poppins', sans-serif;
//         }
//         .nnc-drop-item:hover {
//           color: #00C9A7;
//           background: rgba(0,201,167,0.08);
//         }

//         /* ── Book button ── */
//         .nnc-book {
//           flex-shrink: 0;
//           background: #00C9A7;
//           color: #000;
//           border: none;
//           padding: 11px 24px;
//           border-radius: 9px;
//           font-weight: 700;
//           font-size: 16px;
//           cursor: pointer;
//           font-family: 'Poppins', sans-serif;
//           white-space: nowrap;
//           transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
//           line-height: 1;
//         }
//         .nnc-book:hover {
//           background: #00a07a;
//           transform: translateY(-1px);
//           box-shadow: 0 8px 24px rgba(0,201,167,0.35);
//         }

//         /* ── Hamburger ── */
//         .nnc-ham {
//           display: none;
//           align-items: center;
//           justify-content: center;
//           width: 40px;
//           height: 40px;
//           background: none;
//           border: 1px solid rgba(255,255,255,0.15);
//           border-radius: 8px;
//           color: #fff;
//           font-size: 20px;
//           cursor: pointer;
//           flex-shrink: 0;
//           transition: border-color 0.2s, color 0.2s;
//         }
//         .nnc-ham:hover { border-color: #00C9A7; color: #00C9A7; }

//         /* ── Mobile menu ── */
//         .nnc-mob {
//           background: #030f20;
//           border-top: 1px solid rgba(255,255,255,0.06);
//           padding: 10px 20px 24px;
//         }
//         .nnc-mob-label {
//           font-size: 10.5px;
//           font-weight: 700;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.28);
//           padding: 14px 8px 4px;
//           font-family: 'Poppins', sans-serif;
//         }
//         .nnc-mob-a {
//           display: block;
//           padding: 10px 10px;
//           color: rgba(255,255,255,0.78);
//           font-size: 16px;
//           font-weight: 500;
//           text-decoration: none;
//           border-radius: 8px;
//           font-family: 'Poppins', sans-serif;
//           transition: color 0.15s, background 0.15s;
//         }
//         .nnc-mob-a:hover { color: #00C9A7; background: rgba(0,201,167,0.07); }
//         .nnc-mob-book {
//           width: 100%;
//           margin-top: 14px;
//           padding: 13px;
//           background: #00C9A7;
//           color: #000;
//           border: none;
//           border-radius: 10px;
//           font-weight: 700;
//           font-size: 15px;
//           cursor: pointer;
//           font-family: 'Poppins', sans-serif;
//         }

//         /* ── Responsive ── */
//         @media (max-width: 960px) {
//           .nnc-nav-links  { display: none !important; }
//           .nnc-book       { display: none !important; }
//           .nnc-ham        { display: flex !important; }
//           .nnc-topbar     { display: none !important; }
//         }
//         @media (max-width: 480px) {
//           .nnc-nav-inner { padding: 0 16px; height: 62px; }
//         }

//         /* ── Top phone bar ── */
//         .nnc-topbar {
//           background: rgba(0,201,167,0.07);
//           border-bottom: 1px solid rgba(0,201,167,0.12);
//           font-family: 'Poppins', sans-serif;
//         }
//         .nnc-topbar-inner {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 7px 32px;
//           display: flex;
//           align-items: center;
//           justify-content: flex-end;
//           gap: 24px;
//         }
//         .nnc-phone-link {
//           display: inline-flex;
//           align-items: center;
//           gap: 7px;
//           color: rgba(255,255,255,0.55);
//           font-size: 12.5px;
//           font-weight: 500;
//           text-decoration: none;
//           transition: color 0.2s;
//         }
//         .nnc-phone-link:hover { color: #00C9A7; }
//         .nnc-phone-link span.flag { font-size: 14px; }
//         .nnc-mob-phones {
//           display: flex;
//           flex-direction: column;
//           gap: 4px;
//           padding: 4px 8px 10px;
//           border-top: 1px solid rgba(255,255,255,0.06);
//           margin-top: 10px;
//         }
//         .nnc-mob-phone-a {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 8px 10px;
//           color: rgba(255,255,255,0.55);
//           font-size: 13.5px;
//           font-weight: 500;
//           text-decoration: none;
//           border-radius: 8px;
//           font-family: 'Poppins', sans-serif;
//           transition: color 0.15s, background 0.15s;
//         }
//         .nnc-mob-phone-a:hover { color: #00C9A7; background: rgba(0,201,167,0.06); }
//       `}</style>

//       {/* ── Top Phone Bar (desktop only) ── */}
//       <div className="nnc-topbar">
//         <div className="nnc-topbar-inner">
//           <a href="tel:+16470000000" className="nnc-phone-link">
//             <span className="flag">🇨🇦</span> CA: +1 647-XXX-XXXX
//           </a>
//           <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 12 }}>|</span>
//           <a href="tel:+442000000000" className="nnc-phone-link">
//             <span className="flag">🇬🇧</span> UK: +44 20-XXXX-XXXX
//           </a>
//         </div>
//       </div>

//       <header className={`nnc-navbar${scrolled ? " scrolled" : ""}`}>
//         <div className="nnc-nav-inner">

//           {/* Logo */}
//           <a href="/" className="nnc-logo">
//             <img
//               src="/NNCLOGO.jpg"
//               alt="NNC Digital"
//               className="nnc-logo-img"
//               onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
//             />

//           </a>

//           {/* Desktop Nav */}
//           <nav className="nnc-nav-links">
//             <a href="/" className="nnc-link">Home</a>

//             {/* Solutions */}
//             <div className="nnc-dd" ref={solRef}>
//               <button
//                 className={`nnc-link${solutionsOpen ? " open" : ""}`}
//                 onClick={() => { setSolutionsOpen(o => !o); setIndustriesOpen(false); }}
//               >
//                 Solutions <span className="arr">▾</span>
//               </button>
//               {solutionsOpen && (
//                 <div className="nnc-dd-menu">
//                   {SOLUTIONS.map(item => (
//                     <a key={item} href="#" className="nnc-drop-item">{item}</a>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Industries */}
//             <div className="nnc-dd" ref={indRef}>
//               <button
//                 className={`nnc-link${industriesOpen ? " open" : ""}`}
//                 onClick={() => { setIndustriesOpen(o => !o); setSolutionsOpen(false); }}
//               >
//                 Industries <span className="arr">▾</span>
//               </button>
//               {industriesOpen && (
//                 <div className="nnc-dd-menu">
//                   {INDUSTRIES.map(item => (
//                     <a key={item} href="#" className="nnc-drop-item">{item}</a>
//                   ))}
//                 </div>
//               )}
//             </div>


//             {NAV_LINKS.map(link => (

//               <a key={link}
//                 href={link === "About Us" ? "/about" : "#"}
//                 className="nnc-link"
//               >
//                 {link}
//               </a>
//             ))}

//           </nav>

//           {/* Book CTA */}
//           <button className="nnc-book">Book Free Call</button>

//           {/* Hamburger */}
//           <button className="nnc-ham" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
//             {mobileOpen ? "✕" : "☰"}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileOpen && (
//           <div className="nnc-mob">
//             <p className="nnc-mob-label">Menu</p>
//             <a href="/" className="nnc-mob-a">Home</a>

//             <p className="nnc-mob-label">Solutions</p>
//             {SOLUTIONS.map(s => <a key={s} href="#" className="nnc-mob-a">{s}</a>)}

//             <p className="nnc-mob-label">Industries</p>
//             {INDUSTRIES.map(s => <a key={s} href="#" className="nnc-mob-a">{s}</a>)}

//             <p className="nnc-mob-label">Pages</p>
//             {NAV_LINKS.map(l => <a key={l} href="#" className="nnc-mob-a">{l}</a>)}

//             <button className="nnc-mob-book">Book Free Call</button>

//             <div className="nnc-mob-phones">
//               <a href="tel:+16470000000" className="nnc-mob-phone-a">🇨🇦 CA: +1 647-XXX-XXXX</a>
//               <a href="tel:+442000000000" className="nnc-mob-phone-a">🇬🇧 UK: +44 20-XXXX-XXXX</a>
//             </div>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }

"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SOLUTIONS = [
  { label: "CRM Development",       href: "/crm-development" },
  { label: "ERP Development",       href: "/erp-development" },
  { label: "Web Development",       href: "/web-development" },
  { label: "Mobile App Development",href: "/mobileapp-development" },
  { label: "Marketing Automation",  href: "/marketing-automation" },
  { label: "Salesforce CRM",        href: "/salesforce-crm" },
  { label: "Hire CRM Developers",   href: "/hire-crm-developers" },
  { label: "Digital Transformation",href: "/digital-transformation" },
  { label: "SEO & Digital Marketing",href: "/seo-digital-marketing" },
];

const INDUSTRIES = [
  { label: "Healthcare",            href: "/industries/healthcare" },
  { label: "Real Estate",           href: "/industries/real-estate" },
  { label: "E-Commerce",            href: "/industries/ecommerce" },
  { label: "Manufacturing",         href: "/industries/manufacturing" },
  { label: "Professional Services", href: "/industries/professional-services" },
];

const NAV_LINKS = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing",      href: "/pricing" },
  { label: "About Us",     href: "/about" },
  { label: "Blog",         href: "/blog" },
  { label: "Contact",      href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [solutionsOpen,  setSolutionsOpen]  = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [scrolled,       setScrolled]       = useState(false);

  const solRef = useRef<HTMLDivElement>(null);
  const indRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (solRef.current && !solRef.current.contains(e.target as Node)) setSolutionsOpen(false);
      if (indRef.current && !indRef.current.contains(e.target as Node)) setIndustriesOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu + dropdowns on route change
  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
    setIndustriesOpen(false);
  }, [pathname]);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  const isSolActive = SOLUTIONS.some(s => pathname?.startsWith(s.href));
  const isIndActive = INDUSTRIES.some(i => pathname?.startsWith(i.href));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .nnc-navbar {
          position: sticky;
          top: 0;
          z-index: 999;
          font-family: 'Poppins', sans-serif;
          background: rgba(3, 11, 24, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          transition: box-shadow 0.3s ease;
        }
        .nnc-navbar.scrolled {
          box-shadow: 0 4px 32px rgba(0,0,0,0.5);
        }
        .nnc-nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        /* Logo */
        .nnc-logo { display:flex; align-items:center; text-decoration:none; flex-shrink:0; }
        .nnc-logo-img { width:120px; height:52px; object-fit:contain; border-radius:8px; }

        /* Desktop links */
        .nnc-nav-links { display:flex; align-items:center; gap:2px; flex:1; justify-content:center; }

        .nnc-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 7px 13px;
          color: rgba(255,255,255,0.8);
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 8px;
          border: none;
          background: none;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          white-space: nowrap;
          transition: color 0.2s, background 0.2s;
          line-height: 1;
        }
        .nnc-link:hover, .nnc-link.open, .nnc-link.active {
          color: #00C9A7;
          background: rgba(0,201,167,0.08);
        }
        /* Active underline */
        .nnc-link.active::after {
          content: "";
          position: absolute;
          bottom: 2px; left: 13px; right: 13px;
          height: 2px;
          border-radius: 2px;
          background: #00C9A7;
        }
        .nnc-link .arr {
          font-size: 10px;
          display: inline-block;
          transition: transform 0.2s;
          margin-top: 1px;
        }
        .nnc-link.open .arr { transform: rotate(180deg); }

        /* Dropdown */
        .nnc-dd { position: relative; }
        .nnc-dd-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          min-width: 248px;
          background: #0d1f38;
          border: 1px solid rgba(0,201,167,0.2);
          border-radius: 14px;
          padding: 8px 0;
          box-shadow: 0 24px 56px rgba(0,0,0,0.6);
          z-index: 1000;
          animation: ddIn 0.16s ease;
        }
        @keyframes ddIn {
          from { opacity:0; transform:translateX(-50%) translateY(-8px); }
          to   { opacity:1; transform:translateX(-50%) translateY(0); }
        }
        .nnc-drop-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          color: rgba(255,255,255,0.65);
          font-size: 14.5px;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.15s, background 0.15s, padding-left 0.15s;
          font-family: 'Poppins', sans-serif;
        }
        .nnc-drop-item:hover, .nnc-drop-item.active {
          color: #00C9A7;
          background: rgba(0,201,167,0.08);
          padding-left: 26px;
        }
        .nnc-drop-item.active { font-weight: 600; }
        .nnc-drop-divider {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin: 5px 0;
        }

        /* Book button */
        .nnc-book {
          flex-shrink: 0;
          background: #00C9A7;
          color: #000;
          border: none;
          padding: 11px 22px;
          border-radius: 9px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          white-space: nowrap;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          line-height: 1;
        }
        .nnc-book:hover {
          background: #00a07a;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(0,201,167,0.35);
        }

        /* Hamburger */
        .nnc-ham {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px; height: 40px;
          background: none;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          color: #fff; font-size: 20px;
          cursor: pointer; flex-shrink: 0;
          transition: border-color 0.2s, color 0.2s;
        }
        .nnc-ham:hover { border-color: #00C9A7; color: #00C9A7; }

        /* Mobile menu */
        .nnc-mob { background:#030f20; border-top:1px solid rgba(255,255,255,0.06); padding:10px 20px 24px; }
        .nnc-mob-label {
          font-size:10.5px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase;
          color:rgba(255,255,255,0.28); padding:14px 8px 4px; font-family:'Poppins',sans-serif;
        }
        .nnc-mob-a {
          display:flex; align-items:center; gap:8px;
          padding:10px 10px; color:rgba(255,255,255,0.78);
          font-size:15px; font-weight:500; text-decoration:none;
          border-radius:8px; font-family:'Poppins',sans-serif;
          transition:color 0.15s,background 0.15s;
        }
        .nnc-mob-a:hover, .nnc-mob-a.active { color:#00C9A7; background:rgba(0,201,167,0.07); }
        .nnc-mob-book {
          width:100%; margin-top:14px; padding:13px;
          background:#00C9A7; color:#000; border:none; border-radius:10px;
          font-weight:700; font-size:15px; cursor:pointer; font-family:'Poppins',sans-serif;
        }
        .nnc-mob-phones { display:flex; flex-direction:column; gap:4px; padding:8px 8px 4px; border-top:1px solid rgba(255,255,255,0.06); margin-top:10px; }
        .nnc-mob-phone-a {
          display:inline-flex; align-items:center; gap:8px; padding:8px 10px;
          color:rgba(255,255,255,0.55); font-size:13.5px; font-weight:500; text-decoration:none;
          border-radius:8px; font-family:'Poppins',sans-serif; transition:color 0.15s,background 0.15s;
        }
        .nnc-mob-phone-a:hover { color:#00C9A7; background:rgba(0,201,167,0.06); }

        /* Top phone bar */
        .nnc-topbar { background:rgba(0,201,167,0.07); border-bottom:1px solid rgba(0,201,167,0.12); font-family:'Poppins',sans-serif; }
        .nnc-topbar-inner {
          max-width:1280px; margin:0 auto; padding:6px 32px;
          display:flex; align-items:center; justify-content:flex-end; gap:24px;
        }
        .nnc-phone-link {
          display:inline-flex; align-items:center; gap:7px;
          color:rgba(255,255,255,0.55); font-size:12.5px; font-weight:500; text-decoration:none;
          transition:color 0.2s;
        }
        .nnc-phone-link:hover { color:#00C9A7; }

        /* Responsive */
        @media (max-width:960px) {
          .nnc-nav-links { display:none !important; }
          .nnc-book      { display:none !important; }
          .nnc-ham       { display:flex !important; }
          .nnc-topbar    { display:none !important; }
        }
        @media (max-width:480px) {
          .nnc-nav-inner { padding:0 16px; height:62px; }
        }
      `}</style>

      {/* Top Phone Bar */}
      <div className="nnc-topbar">
        <div className="nnc-topbar-inner">
          <a href="tel:+16470000000" className="nnc-phone-link">
            🇨🇦 CA: +1 647-XXX-XXXX
          </a>
          <span style={{ color:"rgba(255,255,255,0.15)", fontSize:12 }}>|</span>
          <a href="tel:+442000000000" className="nnc-phone-link">
            🇬🇧 UK: +44 20-XXXX-XXXX
          </a>
        </div>
      </div>

      <header className={`nnc-navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nnc-nav-inner">

          {/* Logo */}
          <Link href="/" className="nnc-logo">
            <img
              src="/NNCLOGO.jpg"
              alt="NNC Digital"
              className="nnc-logo-img"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="nnc-nav-links">
            <Link href="/" className={`nnc-link${isActive("/") ? " active" : ""}`}>
              Home
            </Link>

            {/* Solutions dropdown */}
            <div className="nnc-dd" ref={solRef}>
              <button
                className={`nnc-link${solutionsOpen ? " open" : ""}${isSolActive ? " active" : ""}`}
                onClick={() => { setSolutionsOpen(o => !o); setIndustriesOpen(false); }}
              >
                Solutions <span className="arr">▾</span>
              </button>
              {solutionsOpen && (
                <div className="nnc-dd-menu">
                  {SOLUTIONS.map((item, i) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`nnc-drop-item${isActive(item.href) ? " active" : ""}`}
                      onClick={() => setSolutionsOpen(false)}
                    >
                      {isActive(item.href) && (
                        <span style={{ width:5, height:5, borderRadius:"50%", background:"#00C9A7", display:"inline-block", flexShrink:0 }}/>
                      )}
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries dropdown */}
            <div className="nnc-dd" ref={indRef}>
              <button
                className={`nnc-link${industriesOpen ? " open" : ""}${isIndActive ? " active" : ""}`}
                onClick={() => { setIndustriesOpen(o => !o); setSolutionsOpen(false); }}
              >
                Industries <span className="arr">▾</span>
              </button>
              {industriesOpen && (
                <div className="nnc-dd-menu">
                  {INDUSTRIES.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`nnc-drop-item${isActive(item.href) ? " active" : ""}`}
                      onClick={() => setIndustriesOpen(false)}
                    >
                      {isActive(item.href) && (
                        <span style={{ width:5, height:5, borderRadius:"50%", background:"#00C9A7", display:"inline-block", flexShrink:0 }}/>
                      )}
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Static links */}
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`nnc-link${isActive(link.href) ? " active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Book CTA */}
          <Link href="/contact">
            <button className="nnc-book">Book Free Call</button>
          </Link>

          {/* Hamburger */}
          <button className="nnc-ham" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="nnc-mob">
            <p className="nnc-mob-label">Menu</p>
            <Link href="/" className={`nnc-mob-a${isActive("/") ? " active" : ""}`}>Home</Link>

            <p className="nnc-mob-label">Solutions</p>
            {SOLUTIONS.map(s => (
              <Link key={s.href} href={s.href} className={`nnc-mob-a${isActive(s.href) ? " active" : ""}`}>
                {isActive(s.href) && <span style={{ width:5, height:5, borderRadius:"50%", background:"#00C9A7", display:"inline-block", flexShrink:0 }}/>}
                {s.label}
              </Link>
            ))}

            <p className="nnc-mob-label">Industries</p>
            {INDUSTRIES.map(s => (
              <Link key={s.href} href={s.href} className={`nnc-mob-a${isActive(s.href) ? " active" : ""}`}>
                {isActive(s.href) && <span style={{ width:5, height:5, borderRadius:"50%", background:"#00C9A7", display:"inline-block", flexShrink:0 }}/>}
                {s.label}
              </Link>
            ))}

            <p className="nnc-mob-label">Pages</p>
            {NAV_LINKS.map(l => (
              <Link key={l.href} href={l.href} className={`nnc-mob-a${isActive(l.href) ? " active" : ""}`}>
                {l.label}
              </Link>
            ))}

            <Link href="/contact">
              <button className="nnc-mob-book">Book Free Call</button>
            </Link>

            <div className="nnc-mob-phones">
              <a href="tel:+16470000000" className="nnc-mob-phone-a">🇨🇦 CA: +1 647-XXX-XXXX</a>
              <a href="tel:+442000000000" className="nnc-mob-phone-a">🇬🇧 UK: +44 20-XXXX-XXXX</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}