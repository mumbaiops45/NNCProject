"use client";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section style={{
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Poppins', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        @keyframes ctaBgShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes ctaOrb {
          0%,100% { opacity:.5; transform:scale(1); }
          50%     { opacity:.9; transform:scale(1.1); }
        }

        .cta-banner-inner {
          background: linear-gradient(135deg, #0055b3 0%, #0077cc 35%, #00a07a 65%, #00C9A7 100%);
          background-size: 300% 300%;
          animation: ctaBgShift 8s ease infinite;
          padding: clamp(48px, 8vw, 88px) clamp(16px, 5vw, 48px);
          text-align: center;
          position: relative;
        }

        .cta-connect-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 36px;
          border-radius: 12px;
          background: #fff;
          color: #0055b3;
          font-weight: 800;
          font-size: clamp(14px, 1.5vw, 16px);
          font-family: 'Poppins', sans-serif;
          border: none;
          cursor: pointer;
          transition: transform .2s ease, box-shadow .2s ease;
          white-space: nowrap;
          width: auto;
        }
        .cta-connect-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.25);
        }

        .cta-outline-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 32px;
          border-radius: 12px;
          background: transparent;
          color: #fff;
          font-weight: 700;
          font-size: clamp(14px, 1.5vw, 16px);
          font-family: 'Poppins', sans-serif;
          border: 2px solid rgba(255,255,255,0.5);
          cursor: pointer;
          transition: border-color .2s ease, background .2s ease;
          white-space: nowrap;
          width: auto;
        }
        .cta-outline-btn:hover {
          border-color: #fff;
          background: rgba(255,255,255,0.1);
        }

        .cta-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-headline br {
          display: block;
        }

        .cta-trust {
          color: rgba(255,255,255,0.9);
          font-size: 14px;
          margin-top: 28px;
          font-weight: 500;
          line-height: 1.8;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .cta-trust span {
          color: #ffffff;
          font-weight: 600;
        }

        .cta-trust a {
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
          border-bottom: 1px dotted rgba(255,255,255,0.5);
        }
        .cta-trust a:hover {
          border-bottom-color: #fff;
        }

        /* ── Mobile ── */
        @media (max-width: 480px) {
          .cta-btns {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
            max-width: 320px;
            margin-left: auto;
            margin-right: auto;
            gap: 12px;
          }
          
          .cta-connect-btn,
          .cta-outline-btn {
            width: 100% !important;
            padding: 15px 20px !important;
            font-size: 14px !important;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .cta-headline br {
            display: none;
          }
          
          .cta-trust {
            font-size: 11px;
          }
        }

        /* ── Tablet ── */
        @media (min-width: 481px) and (max-width: 768px) {
          .cta-btns {
            flex-wrap: wrap;
          }
        }
      `}</style>

      <div className="cta-banner-inner">

        {/* Orb decorations */}
        <div style={{
          position: "absolute", top: "-20%", left: "-5%",
          width: "clamp(180px, 30vw, 350px)", height: "clamp(180px, 30vw, 350px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 65%)",
          animation: "ctaOrb 6s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", right: "-5%",
          width: "clamp(150px, 25vw, 300px)", height: "clamp(150px, 25vw, 300px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)",
          animation: "ctaOrb 7s ease-in-out infinite",
          animationDelay: "2s",
          pointerEvents: "none",
        }} />

        {/* Grid overlay */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: 760, margin: "0 auto" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: 100, padding: "6px 18px", marginBottom: 22,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff", display: "block" }} />
            <span style={{ color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Get Started Today
            </span>
          </div>

          {/* Headline */}
          <h2 className="cta-headline" style={{
            fontSize: "clamp(22px, 4vw, 48px)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: 18,
          }}>
            Want CRM Solutions That Take Your
            <br />Business to the{" "}
            <span style={{
              background: "linear-gradient(135deg,#fff 0%,rgba(255,255,255,0.7) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textDecoration: "underline",
              textDecorationColor: "rgba(255,255,255,0.4)",
            }}>
              Next Level?
            </span>
          </h2>

          {/* Subtext */}
          <p style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "clamp(14px, 1.8vw, 17px)",
            lineHeight: 1.75,
            marginBottom: 36,
            fontWeight: 400,
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}>
            Connect with NNC Digital today and let&apos;s build something extraordinary together.
          </p>

          {/* CTAs */}
          <div className="cta-btns" style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <Link href="/contact" style={{ width: "100%", maxWidth: "320px", margin: "0 auto" }}>
              <button className="cta-connect-btn" style={{ width: "100%" }}>
                ✦ Connect Now
              </button>
            </Link>

            <Link href="/contact" style={{ width: "100%", maxWidth: "320px", margin: "0 auto" }}>
              <button className="cta-outline-btn" style={{ width: "100%" }}>
                📅 Book a Free Call →
              </button>
            </Link>
          </div>

          {/* Trust line */}
          <p className="cta-trust">
            <span>🇨🇦 Canada</span> &nbsp;·&nbsp; <span>🇺🇸 USA</span> &nbsp;·&nbsp; <span>🇬🇧 UK</span> &nbsp;·&nbsp; <span>🇮🇳 India</span> &nbsp;&nbsp;|&nbsp;&nbsp; 
            <a href="mailto:hello@nncdigital.com"> hello@nncdigital.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}