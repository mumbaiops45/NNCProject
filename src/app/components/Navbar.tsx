"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ─── Navigation Data ──────────────────────────────────────────────────────── */

const COL_BUILD = [
  { label: "CRM Development", href: "/crm-development", icon: "🗂️" },
  { label: "ERP Development", href: "/erp-development", icon: "⚙️" },
  { label: "Web Development", href: "/web-development", icon: "🌐" },
  { label: "Mobile App Development", href: "/mobileapp-development", icon: "📱" },
  { label: "Salesforce CRM", href: "/salesforce-crm", icon: "☁️" },
];

const COL_AUTOMATE = [
  { label: "Marketing Automation", href: "/marketing-automation", icon: "🤖" },
  { label: "SEO & Digital Marketing", href: "/seo-digital-marketing", icon: "📈" },
];

const COL_SCALE = [
  { label: "Digital Transformation", href: "/digital-transformation", icon: "🔄" },
  { label: "Hire CRM Developers", href: "/hire-crm-developers", icon: "👥" },
  { label: "Pricing", href: "/pricing", icon: "💎" },
];

const ALL_SOL_HREFS = [...COL_BUILD, ...COL_AUTOMATE, ...COL_SCALE].map(x => x.href);

const INDUSTRIES = [
  { label: "Healthcare", href: "/healthcare", icon: "🏥" },
  { label: "Real Estate", href: "/real-estate", icon: "🏠" },
  { label: "E-Commerce", href: "/ecommerce", icon: "🛒" },
  { label: "Manufacturing", href: "/manufacturing", icon: "🏭" },
  { label: "Professional Services", href: "/professional-services", icon: "💼" },
];

const NAV_LINKS = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/* ─── Component ────────────────────────────────────────────────────────────── */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobSolOpen, setMobSolOpen] = useState(false);
  const [mobIndOpen, setMobIndOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  // Close everything on route change
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  const isSolActive = ALL_SOL_HREFS.some(h => pathname?.startsWith(h));
  const isIndActive = INDUSTRIES.some(i => pathname?.startsWith(i.href));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .nnc-root *, .nnc-root *::before, .nnc-root *::after { box-sizing: border-box; }

        /* ══ TOP BAR ══ */
       .nnc-topbar {
  background: rgba(3, 11, 24, 0.97);
  border-bottom: 1px solid rgba(0,201,167,0.11);
  font-family: 'Poppins', sans-serif;
  backdrop-filter: blur(24px); 
  -webkit-backdrop-filter: blur(24px);
  border-radius: 50px 50px 0 0;
}
        .nnc-topbar-inner {
          max-width: 1320px; margin: 0 auto; padding: 5px 40px;
          display: flex; align-items: center; justify-content: flex-end; gap: 28px;
        }
        .nnc-topbar-phone {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 11.5px;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nnc-topbar-phone:hover { color: #00C9A7; }
        .nnc-topbar-sep { color: rgba(255,255,255,0.1); font-size: 11px; }

        /* ══ FIXED NAV SHELL ══ */
       .nnc-sticky-shell {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  width: 100%;
  margin: 0 auto;
  background: transparent;
}
        /* ══ SPACER — pushes page content below the fixed navbar ══ */
       .nnc-spacer {
  height: 125px; /* Topbar height + header height */
}
@media (max-width: 1000px) {
  .nnc-spacer { height: 70px; }
}
@media (max-width: 480px) {
  .nnc-spacer { height: 62px; }
}
        @media (max-width: 1000px) {
          .nnc-spacer { height: 82px; }
        }

        /* ══ MAIN HEADER ══ */
       .nnc-header {
  font-family: 'Poppins', sans-serif;
  background: rgba(3, 11, 24, 0.97);
  backdrop-filter: blur(24px); 
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255,255,255,0.07);
  border-top: none;
  border-radius: 0 0 50px 50px;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
  width: 100%;
}
        .nnc-header.scrolled { 
          box-shadow: 0 10px 40px rgba(0,0,0,0.55);
          border-color: rgba(0,201,167,0.3);
        }

        .nnc-inner {
          max-width: 1320px; margin: 0 auto; padding: 0 24px; height: 70px;
          display: flex; align-items: center; justify-content: space-between; gap: 8px;
        }

        /* Logo */
        .nnc-logo { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; }
        .nnc-logo-img { width: 124px; height: 52px; object-fit: contain; border-radius: 8px; }

        /* Desktop nav links */
        .nnc-nav { display: flex; align-items: center; gap: 1px; flex: 1; justify-content: center; }

        .nnc-btn {
          position: relative; display: inline-flex; align-items: center; gap: 4px;
          padding: 8px 16px; color: rgba(255,255,255,0.78); font-size: 14px;
          font-weight: 600; text-decoration: none; border-radius: 30px; /* Rounded buttons */
          border: none; background: none; cursor: pointer;
          font-family: 'Poppins', sans-serif; white-space: nowrap;
          transition: color 0.18s, background 0.18s; line-height: 1;
        }
        .nnc-btn:hover, .nnc-btn.is-open, .nnc-btn.is-active {
          color: #00C9A7; background: rgba(0,201,167,0.09);
        }
        .nnc-btn.is-active::after {
          content: "";
          position: absolute; bottom: 3px; left: 16px; right: 16px;
          height: 2px; border-radius: 2px; background: #00C9A7;
        }
        .nnc-chevron {
          font-size: 9px; display: inline-block;
          transition: transform 0.22s cubic-bezier(0.22,1,0.36,1); margin-top: 1px;
        }
        .nnc-btn.is-open .nnc-chevron { transform: rotate(180deg); }

        /* CTA Book button */
        .nnc-cta {
          flex-shrink: 0; background: #00C9A7; color: #03080f;
          border: none; padding: 10px 24px; border-radius: 30px; /* Rounded CTA */
          font-weight: 700; font-size: 14px; cursor: pointer;
          font-family: 'Poppins', sans-serif; white-space: nowrap; line-height: 1;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
        }
        .nnc-cta:hover {
          background: #00b896; transform: translateY(-1px);
          box-shadow: 0 6px 22px rgba(0,201,167,0.3);
        }

        /* Hamburger */
        .nnc-ham {
          display: none; align-items: center; justify-content: center;
          width: 42px; height: 42px; background: none;
          border: 1px solid rgba(255,255,255,0.14); border-radius: 30px; /* Rounded hamburger */
          color: #fff; font-size: 18px; cursor: pointer; flex-shrink: 0;
          transition: border-color 0.2s, color 0.2s;
        }
        .nnc-ham:hover { border-color: #00C9A7; color: #00C9A7; }

        /* ══ SOLUTIONS MEGA MENU ══ */
        .nnc-dd { position: relative; }

        .nnc-mega {
          position: absolute; top: calc(100% + 14px); left: 50%;
          transform: translateX(-50%);
          width: 860px;
          background: #091729;
          border: 1px solid rgba(0,201,167,0.16);
          border-radius: 24px; /* Rounded mega menu */
          padding: 26px 24px 18px;
          box-shadow: 0 32px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(0,201,167,0.04) inset;
          z-index: 1000;
          animation: megaIn 0.2s cubic-bezier(0.22,1,0.36,1);
        }
        @keyframes megaIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-10px) scale(0.98); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
        }

        .nnc-mega-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 200px;
          gap: 0;
        }
        .nnc-mega-col {
          padding-right: 20px;
          border-right: 1px solid rgba(255,255,255,0.05);
        }
        .nnc-mega-col:last-child { border-right: none; padding-right: 0; padding-left: 20px; }

        .nnc-col-head {
          font-size: 9.5px; font-weight: 700; letter-spacing: 0.13em;
          text-transform: uppercase; color: rgba(0,201,167,0.65);
          padding: 0 8px 9px; margin-bottom: 2px;
          border-bottom: 1px solid rgba(0,201,167,0.1);
          font-family: 'Poppins', sans-serif;
        }

        .nnc-mega-a {
          display: flex; align-items: center; gap: 9px;
          padding: 8px 9px; color: rgba(255,255,255,0.68);
          font-size: 13px; font-weight: 500; text-decoration: none;
          border-radius: 30px; /* Rounded mega menu items */
          font-family: 'Poppins', sans-serif;
          transition: color 0.14s, background 0.14s, padding-left 0.14s;
        }
        .nnc-mega-a:hover, .nnc-mega-a.is-active {
          color: #00C9A7; background: rgba(0,201,167,0.09); padding-left: 13px;
        }
        .nnc-mega-a.is-active { font-weight: 600; }
        .nnc-mega-icon { font-size: 14px; flex-shrink: 0; }

        /* Featured card */
        .nnc-feat {
          background: linear-gradient(145deg, rgba(0,201,167,0.11) 0%, rgba(0,60,50,0.22) 100%);
          border: 1px solid rgba(0,201,167,0.22);
          border-radius: 20px; /* Rounded featured card */
          padding: 16px 14px;
          display: flex; flex-direction: column; gap: 10px;
          text-decoration: none; height: 100%;
          transition: border-color 0.2s, transform 0.15s;
        }
        .nnc-feat:hover { border-color: rgba(0,201,167,0.6); transform: translateY(-2px); }
        .nnc-feat-badge {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(0,201,167,0.14); color: #00C9A7;
          font-size: 9.5px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 4px 12px; border-radius: 30px; /* Rounded badge */
          width: fit-content; font-family: 'Poppins', sans-serif;
        }
        .nnc-feat-title {
          font-size: 13px; font-weight: 700; color: #fff; line-height: 1.38;
          font-family: 'Poppins', sans-serif;
        }
        .nnc-feat-stat {
          font-size: 30px; font-weight: 800; color: #00C9A7;
          font-family: 'Poppins', sans-serif; line-height: 1;
        }
        .nnc-feat-sub {
          font-size: 11px; color: rgba(255,255,255,0.42);
          font-family: 'Poppins', sans-serif; line-height: 1.4;
        }
        .nnc-feat-link {
          display: inline-flex; align-items: center; gap: 5px; margin-top: auto;
          font-size: 12px; font-weight: 600; color: #00C9A7;
          font-family: 'Poppins', sans-serif;
        }

        .nnc-mega-footer {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 12px; margin-top: 18px;
          display: flex; align-items: center; gap: 6px;
          font-size: 11.5px; color: rgba(255,255,255,0.3);
          font-family: 'Poppins', sans-serif;
        }
        .nnc-mega-footer a {
          color: #00C9A7; text-decoration: none; font-weight: 600;
          transition: opacity 0.15s;
        }
        .nnc-mega-footer a:hover { opacity: 0.75; }

        /* ══ INDUSTRIES DROPDOWN ══ */
        .nnc-ind-menu {
          position: absolute; top: calc(100% + 14px); left: 50%;
          transform: translateX(-50%);
          min-width: 260px;
          background: #091729;
          border: 1px solid rgba(0,201,167,0.16);
          border-radius: 24px; /* Rounded industries menu */
          padding: 8px 0;
          box-shadow: 0 24px 60px rgba(0,0,0,0.7);
          z-index: 1000;
          animation: megaIn 0.18s cubic-bezier(0.22,1,0.36,1);
        }
        .nnc-ind-a {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 18px; color: rgba(255,255,255,0.68);
          font-size: 13.5px; font-weight: 500; text-decoration: none;
          font-family: 'Poppins', sans-serif;
          transition: color 0.14s, background 0.14s, padding-left 0.14s;
        }
        .nnc-ind-a:hover, .nnc-ind-a.is-active {
          color: #00C9A7; background: rgba(0,201,167,0.09); padding-left: 24px;
        }
        .nnc-ind-a.is-active { font-weight: 600; }
        .nnc-ind-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #00C9A7; display: inline-block; flex-shrink: 0;
        }

        /* ══ MOBILE MENU ══ */
        .nnc-mob-overlay {
          position: fixed; inset: 0; z-index: 998;
          background: rgba(0,0,0,0.6); backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

       .nnc-mob {
  position: fixed; 
  top: 0; 
  right: 0; 
  bottom: 0;
  width: min(360px, 92vw); 
  z-index: 999;
  background: #030f20;
  border: 1px solid rgba(0,201,167,0.16);
  border-radius: 30px 0 0 30px;
  overflow-y: auto; 
  overscroll-behavior: contain;
  display: flex; 
  flex-direction: column;
  animation: slideIn 0.25s cubic-bezier(0.22,1,0.36,1);
}
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }

        .nnc-mob-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          flex-shrink: 0;
        }
        .nnc-mob-logo-img { width: 100px; height: 42px; object-fit: contain; border-radius: 6px; }
        .nnc-mob-close {
          width: 36px; height: 36px; background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12); border-radius: 30px; /* Rounded close button */
          color: #fff; font-size: 16px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.2s, color 0.2s;
        }
        .nnc-mob-close:hover { border-color: #00C9A7; color: #00C9A7; }

        .nnc-mob-body { padding: 10px 16px 24px; flex: 1; }

        .nnc-mob-section-btn {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: 11px 16px; background: none; border: none; cursor: pointer;
          color: rgba(255,255,255,0.45); font-size: 10px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          font-family: 'Poppins', sans-serif;
          border-radius: 30px; /* Rounded section button */
          transition: color 0.15s, background 0.15s; margin-top: 6px;
        }
        .nnc-mob-section-btn:hover { color: #00C9A7; background: rgba(0,201,167,0.05); }
        .nnc-mob-section-btn.is-open { color: #00C9A7; }
        .nnc-mob-section-btn .nnc-chevron { font-size: 9px; }
        .nnc-mob-section-btn.is-open .nnc-chevron { transform: rotate(180deg); }

        .nnc-mob-a {
          display: flex; align-items: center; gap: 9px;
          padding: 10px 16px; color: rgba(255,255,255,0.75);
          font-size: 14.5px; font-weight: 500; text-decoration: none;
          border-radius: 30px; /* Rounded mobile link */
          font-family: 'Poppins', sans-serif;
          transition: color 0.14s, background 0.14s;
        }
        .nnc-mob-a:hover, .nnc-mob-a.is-active { color: #00C9A7; background: rgba(0,201,167,0.08); }
        .nnc-mob-a.is-active { font-weight: 600; }

        .nnc-mob-sub-a {
          display: flex; align-items: center; gap: 9px;
          padding: 8px 20px; color: rgba(255,255,255,0.6);
          font-size: 13.5px; font-weight: 500; text-decoration: none;
          border-radius: 30px; /* Rounded mobile sub-link */
          font-family: 'Poppins', sans-serif;
          transition: color 0.14s, background 0.14s;
        }
        .nnc-mob-sub-a:hover, .nnc-mob-sub-a.is-active {
          color: #00C9A7; background: rgba(0,201,167,0.07);
        }
        .nnc-mob-sub-a.is-active { font-weight: 600; }

        .nnc-mob-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: rgba(255,255,255,0.28);
          padding: 14px 16px 4px; font-family: 'Poppins', sans-serif; display: block;
        }
        .nnc-mob-col-label {
          font-size: 9px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: rgba(0,201,167,0.55);
          padding: 10px 20px 3px; font-family: 'Poppins', sans-serif; display: block;
        }

        .nnc-mob-cta {
          width: 100%; margin-top: 16px; padding: 13px;
          background: #00C9A7; color: #03080f; border: none; border-radius: 30px; /* Rounded CTA */
          font-weight: 700; font-size: 15px; cursor: pointer;
          font-family: 'Poppins', sans-serif; transition: background 0.2s;
        }
        .nnc-mob-cta:hover { background: #00b896; }

        .nnc-mob-phones {
          display: flex; flex-direction: column; gap: 2px;
          padding: 12px 0 4px; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 12px;
        }
        .nnc-mob-phone {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 16px; color: rgba(255,255,255,0.5);
          font-size: 13px; font-weight: 500; text-decoration: none;
          border-radius: 30px; /* Rounded phone link */
          font-family: 'Poppins', sans-serif;
          transition: color 0.15s, background 0.15s;
        }
        .nnc-mob-phone:hover { color: #00C9A7; background: rgba(0,201,167,0.06); }

        /* ══ RESPONSIVE ══ */
      @media (max-width: 1000px) {
  .nnc-nav     { display: none !important; }
  .nnc-cta     { display: none !important; }
  .nnc-ham     { display: flex !important; }
  .nnc-topbar  { display: none !important; }
  .nnc-header {
    border-radius: 50px;
    border-top: 1px solid rgba(255,255,255,0.07);
  }
}
        }
        @media (max-width: 480px) {
          .nnc-inner { padding: 0 12px; height: 62px; }
          .nnc-sticky-shell {
            top: 5px;
            left: 5px;
            right: 5px;
            width: calc(100% - 10px);
          }
        }
      `}</style>

      <div className="nnc-root">

        {/* ── Sticky shell: topbar + header stick together ── */}
        <div className="nnc-sticky-shell">

          {/* ── Top Phone Bar ── */}
          <div className="nnc-topbar">
            <div className="nnc-topbar-inner">
              <a href="tel:+91 9900566466" className="nnc-topbar-phone">
                🇨🇦 CA: +91 9900566466
              </a>
              <span className="nnc-topbar-sep">|</span>
              <a href="tel:+91 9900566466" className="nnc-topbar-phone">
                🇬🇧 UK: +91 9900566466
              </a>
            </div>
          </div>

          {/* ── Main Header ── */}
          <header className={`nnc-header${scrolled ? " scrolled" : ""}`}>
            <div className="nnc-inner">

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
              <nav className="nnc-nav">

                <Link href="/" className={`nnc-btn${isActive("/") ? " is-active" : ""}`}>
                  Home
                </Link>

                {/* Solutions Mega Menu */}
                <div className="nnc-dd" ref={solRef}>
                  <button
                    className={`nnc-btn${solutionsOpen ? " is-open" : ""}${isSolActive ? " is-active" : ""}`}
                    onClick={() => { setSolutionsOpen(o => !o); setIndustriesOpen(false); }}
                  >
                    Solutions <span className="nnc-chevron">▾</span>
                  </button>

                  {solutionsOpen && (
                    <div className="nnc-mega">
                      <div className="nnc-mega-grid">

                        {/* Col 1 — Build & Develop */}
                        <div className="nnc-mega-col">
                          <div className="nnc-col-head">Build &amp; Develop</div>
                          {COL_BUILD.map(item => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`nnc-mega-a${isActive(item.href) ? " is-active" : ""}`}
                              onClick={() => setSolutionsOpen(false)}
                            >
                              <span className="nnc-mega-icon">{item.icon}</span>
                              {item.label}
                            </Link>
                          ))}
                        </div>

                        {/* Col 2 — Automate & Grow */}
                        <div className="nnc-mega-col">
                          <div className="nnc-col-head">Automate &amp; Grow</div>
                          {COL_AUTOMATE.map(item => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`nnc-mega-a${isActive(item.href) ? " is-active" : ""}`}
                              onClick={() => setSolutionsOpen(false)}
                            >
                              <span className="nnc-mega-icon">{item.icon}</span>
                              {item.label}
                            </Link>
                          ))}
                        </div>

                        {/* Col 3 — Scale & Transform */}
                        <div className="nnc-mega-col">
                          <div className="nnc-col-head">Scale &amp; Transform</div>
                          {COL_SCALE.map(item => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`nnc-mega-a${isActive(item.href) ? " is-active" : ""}`}
                              onClick={() => setSolutionsOpen(false)}
                            >
                              <span className="nnc-mega-icon">{item.icon}</span>
                              {item.label}
                            </Link>
                          ))}
                        </div>

                        {/* Col 4 — Featured Case Study */}
                        <div className="nnc-mega-col">
                          <div className="nnc-col-head">Featured</div>
                          <Link
                            href="/manufacturing"
                            className="nnc-feat"
                            onClick={() => setSolutionsOpen(false)}
                          >
                            <span className="nnc-feat-badge">📌 Case Study</span>
                            <div className="nnc-feat-title">Manufacturing CRM Overhaul</div>
                            <div className="nnc-feat-stat">35%</div>
                            <div className="nnc-feat-sub">
                              Efficiency gain in 90 days for a mid-size manufacturer
                            </div>
                            <span className="nnc-feat-link">Read More →</span>
                          </Link>
                        </div>

                      </div>

                      {/* Footer hint */}
                      <div className="nnc-mega-footer">
                        <span>Not sure where to start?</span>
                        <Link href="/contact" onClick={() => setSolutionsOpen(false)}>
                          Book a free strategy call →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Industries Dropdown */}
                <div className="nnc-dd" ref={indRef}>
                  <button
                    className={`nnc-btn${industriesOpen ? " is-open" : ""}${isIndActive ? " is-active" : ""}`}
                    onClick={() => { setIndustriesOpen(o => !o); setSolutionsOpen(false); }}
                  >
                    Industries <span className="nnc-chevron">▾</span>
                  </button>

                  {industriesOpen && (
                    <div className="nnc-ind-menu">
                      {INDUSTRIES.map(item => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`nnc-ind-a${isActive(item.href) ? " is-active" : ""}`}
                          onClick={() => setIndustriesOpen(false)}
                        >
                          {isActive(item.href) && <span className="nnc-ind-dot" />}
                          <span style={{ fontSize: 15 }}>{item.icon}</span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Static nav links */}
                {NAV_LINKS.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nnc-btn${isActive(link.href) ? " is-active" : ""}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Desktop Book CTA */}
              <Link href="/contact">
                <button className="nnc-cta">Book Free Call</button>
              </Link>

              {/* Hamburger */}
              <button
                className="nnc-ham"
                onClick={() => setMobileOpen(o => !o)}
                aria-label="Open menu"
              >
                ☰
              </button>
            </div>
          </header>
        </div>{/* end nnc-sticky-shell */}

        {/* ── Spacer to offset fixed navbar ── */}
        <div className="nnc-spacer" />

        {/* ══ MOBILE MENU ══ */}
        {mobileOpen && (
          <>
            <div className="nnc-mob-overlay" onClick={() => setMobileOpen(false)} />

            <div className="nnc-mob">
              {/* Header row */}
              <div className="nnc-mob-header">
                <img
                  src="/NNCLOGO.jpg"
                  alt="NNC Digital"
                  className="nnc-mob-logo-img"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <button className="nnc-mob-close" onClick={() => setMobileOpen(false)}>✕</button>
              </div>

              <div className="nnc-mob-body">

                <Link href="/" className={`nnc-mob-a${isActive("/") ? " is-active" : ""}`}>
                  🏠 Home
                </Link>

                {/* Solutions accordion */}
                <button
                  className={`nnc-mob-section-btn${mobSolOpen ? " is-open" : ""}`}
                  onClick={() => setMobSolOpen(o => !o)}
                >
                  Solutions
                  <span className="nnc-chevron">▾</span>
                </button>
                {mobSolOpen && (
                  <div>
                    <span className="nnc-mob-col-label">Build &amp; Develop</span>
                    {COL_BUILD.map(s => (
                      <Link key={s.href} href={s.href} className={`nnc-mob-sub-a${isActive(s.href) ? " is-active" : ""}`}>
                        {s.icon} {s.label}
                      </Link>
                    ))}
                    <span className="nnc-mob-col-label">Automate &amp; Grow</span>
                    {COL_AUTOMATE.map(s => (
                      <Link key={s.href} href={s.href} className={`nnc-mob-sub-a${isActive(s.href) ? " is-active" : ""}`}>
                        {s.icon} {s.label}
                      </Link>
                    ))}
                    <span className="nnc-mob-col-label">Scale &amp; Transform</span>
                    {COL_SCALE.map(s => (
                      <Link key={s.href} href={s.href} className={`nnc-mob-sub-a${isActive(s.href) ? " is-active" : ""}`}>
                        {s.icon} {s.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Industries accordion */}
                <button
                  className={`nnc-mob-section-btn${mobIndOpen ? " is-open" : ""}`}
                  onClick={() => setMobIndOpen(o => !o)}
                >
                  Industries
                  <span className="nnc-chevron">▾</span>
                </button>
                {mobIndOpen && (
                  <div>
                    {INDUSTRIES.map(s => (
                      <Link key={s.href} href={s.href} className={`nnc-mob-sub-a${isActive(s.href) ? " is-active" : ""}`}>
                        {s.icon} {s.label}
                      </Link>
                    ))}
                  </div>
                )}

                <span className="nnc-mob-label">Pages</span>
                {NAV_LINKS.map(l => (
                  <Link key={l.href} href={l.href} className={`nnc-mob-a${isActive(l.href) ? " is-active" : ""}`}>
                    {l.label}
                  </Link>
                ))}

                <Link href="/contact">
                  <button className="nnc-mob-cta">📞 Book Free Call</button>
                </Link>

                <div className="nnc-mob-phones">
                  <a href="tel:+16470000000" className="nnc-mob-phone">🇨🇦 CA: +91 9900566466</a>
                  <a href="tel:+442000000000" className="nnc-mob-phone">🇬🇧 UK: +91 9900566466</a>
                </div>

              </div>
            </div>
          </>
        )}

      </div>
    </>
  );
}