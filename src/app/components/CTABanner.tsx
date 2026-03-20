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
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        @keyframes ctaBgShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes ctaGlowPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        @keyframes ctaFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .cta-banner-inner {
          background: linear-gradient(135deg, #0055b3 0%, #0077cc 35%, #0055b3 100%);
          background-size: 300% 300%;
          animation: ctaBgShift 8s ease infinite;
          padding: clamp(48px, 8vw, 80px) clamp(16px, 5vw, 48px);
          position: relative;
          overflow: hidden;
        }

        .cta-banner-inner::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%);
          pointer-events: none;
          animation: ctaGlowPulse 12s ease-in-out infinite;
        }

        .cta-connect-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 48px;
          border-radius: 100px;
          background: #fff;
          color: #0055b3;
          font-weight: 700;
          font-size: 16px;
          font-family: 'Poppins', sans-serif;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          letter-spacing: 0.5px;
        }
        .cta-connect-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.2);
          background: #fff;
          color: #0055b3;
        }

        /* ── Desktop Centering (Stacked Layout) ── */
        .cta-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 32px;
          text-align: center;
        }

        .cta-heading {
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.4;
          margin: 0;
          max-width: 900px;
          letter-spacing: -0.02em;
        }

        .cta-subheading {
          font-size: clamp(16px, 2vw, 18px);
          color: rgba(255,255,255,0.9);
          margin: 0;
          font-weight: 500;
        }

        /* Orbs styling */
        .cta-orb-1 {
          position: absolute;
          top: -20%;
          left: -5%;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%);
          pointer-events: none;
          animation: ctaFloat 8s ease-in-out infinite;
        }

        .cta-orb-2 {
          position: absolute;
          bottom: -20%;
          right: -5%;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          pointer-events: none;
          animation: ctaFloat 10s ease-in-out infinite reverse;
        }

        .cta-orb-3 {
          position: absolute;
          top: 30%;
          right: 15%;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
          pointer-events: none;
          animation: ctaFloat 12s ease-in-out infinite 2s;
        }

        /* ── Tablet ── */
        @media (max-width: 768px) {
          .cta-content {
            gap: 24px;
          }
          .cta-heading {
            font-size: 28px;
          }
          .cta-orb-1, .cta-orb-2, .cta-orb-3 {
            opacity: 0.6;
          }
        }

        /* ── Mobile ── */
        @media (max-width: 480px) {
          .cta-banner-inner {
            padding: 50px 24px;
          }
          
          .cta-heading {
            font-size: 22px !important;
            line-height: 1.4 !important;
          }
          
          .cta-subheading {
            font-size: 15px !important;
          }
          
          .cta-connect-btn {
            padding: 14px 36px;
            font-size: 15px;
            width: 100%;
            max-width: 260px;
          }
        }
      `}</style>

      <div className="cta-banner-inner">
        {/* Animated Orbs */}
        <div className="cta-orb-1" />
        <div className="cta-orb-2" />
        <div className="cta-orb-3" />

        {/* Content - Stacked Layout (Text above Button) */}
        <div style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
        }}>
          <div className="cta-content">
            {/* Text content - Centered */}
            <div>
              <h2 className="cta-heading">
                Want <span style={{ 
                  textDecoration: "underline", 
                  textDecorationColor: "rgba(255,255,255,0.5)", 
                  textUnderlineOffset: "8px" 
                }}>CRM  solutions</span> that take your business to the next level?
              </h2>
              <p className="cta-subheading">
                Connect with NNC Digital today.
              </p>
            </div>

            {/* CTA Button - Below Text */}
            <div>
              <Link href="/contact" style={{
                textDecoration: "none",
                display: "inline-block",
              }}>
                <button className="cta-connect-btn">
                  Connect Now →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}