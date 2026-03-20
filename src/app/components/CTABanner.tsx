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

        .cta-banner-inner {
          background: linear-gradient(135deg, #0055b3 0%, #0077cc 35%, #0055b3 100%);
          background-size: 300% 300%;
          animation: ctaBgShift 8s ease infinite;
          padding: clamp(48px, 8vw, 80px) clamp(16px, 5vw, 48px);
          position: relative;
        }

        .cta-connect-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 40px;
          border-radius: 4px;
          background: #fff;
          color: #0055b3;
          font-weight: 600;
          font-size: 16px;
          font-family: 'Poppins', sans-serif;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s ease;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .cta-connect-btn:hover {
          opacity: 0.9;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        /* ── Desktop Centering ── */
        .cta-content {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 32px 48px;
          text-align: center;
        }

        .cta-heading {
          font-size: clamp(22px, 3.5vw, 28px);
          font-weight: 600;
          color: #ffffff;
          line-height: 1.5;
          margin: 0;
          max-width: 800px;
        }

        /* ── Tablet ── */
        @media (max-width: 768px) {
          .cta-content {
            gap: 28px;
          }
        }

        /* ── Mobile ── */
        @media (max-width: 480px) {
          .cta-banner-inner {
            padding: 40px 20px;
          }
          
          .cta-heading {
            font-size: 20px !important;
            line-height: 1.5 !important;
          }
          
          .cta-connect-btn {
            padding: 14px 32px;
            font-size: 15px;
            width: 100%;
            max-width: 280px;
            margin: 0 auto;
          }
        }
      `}</style>

      <div className="cta-banner-inner">
        {/* Content - Perfectly Centered */}
        <div style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
        }}>
          <div className="cta-content">
            {/* Text content - Centered */}
            <div style={{
              flex: "0 1 auto",
            }}>
              <h2 className="cta-heading">
                Want CRM solutions that take your business to the next level? Connect with NNC Digital today.
              </h2>
            </div>

            {/* CTA Button - White */}
            <div style={{
              flex: "0 0 auto",
            }}>
              <Link href="/contact" style={{
                textDecoration: "none",
                display: "inline-block",
              }}>
                <button className="cta-connect-btn">
                  Connect Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}