"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

// ─── Logos are in /public/ root ──────────────────────────────────────────────
const LOGOS = [
  { name: "Client 1",  file: "/clients1.png" },
  { name: "Client 2",  file: "/clients2.png" },
  { name: "Client 3",  file: "/clients3.png" },
  { name: "Client 4",  file: "/clients4.png" },
  { name: "Client 5",  file: "/clients5.png" },
  { name: "Client 6",  file: "/clients6.png" },
  { name: "Client 7",  file: "/clients7.png" },
  { name: "Client 8",  file: "/clients8.png" },
  { name: "Client 9",  file: "/clients9.png" },
  { name: "Client 10", file: "/clients10.png" },
  { name: "Client 11", file: "/clients11.png" },
  { name: "Client 12", file: "/clients12.png" },
  { name: "Client 13", file: "/clients13.png" },
  { name: "Client 14", file: "/clients14.png" },
  { name: "Client 15", file: "/clients15.png" },
  { name: "Client 16", file: "/clients16.png" },
  { name: "Client 17", file: "/clients17.png" },
  { name: "Client 18", file: "/clients18.png" },
];

export default function ClientLogos() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Split logos into rows of 6
  const row1 = LOGOS.slice(0, 6);
  const row2 = LOGOS.slice(6, 12);
  const row3 = LOGOS.slice(12, 18);

  // Create duplicated arrays for seamless sliding
  const row1Slides = [...row1, ...row1, ...row1];
  const row2Slides = [...row2, ...row2, ...row2];
  const row3Slides = [...row3, ...row3, ...row3];

  // Don't render until mounted to avoid hydration issues
  if (!mounted) return null;

  return (
    <section style={{
      padding: "40px 0",
      background: "#010812",
      fontFamily: "'Poppins', sans-serif",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }

        @keyframes slideRight {
          0% { transform: translateX(calc(-100% / 3)); }
          100% { transform: translateX(0); }
        }

        .slider-row {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: slideLeft 30s linear infinite;
        }

        .slider-row.reverse {
          animation: slideRight 30s linear infinite;
        }

        .slider-row:hover,
        .slider-row.reverse:hover {
          animation-play-state: paused;
        }

        .client-logo-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100px;
          width: 180px;
          background: #ffffff;
          border-radius: 8px;
          padding: 15px;
          border: 1px solid rgba(255,255,255,0.1);
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .client-logo-wrap:hover {
          transform: scale(1.05);
          border-color: #00C9A7;
          box-shadow: 0 8px 24px rgba(0,201,167,0.25);
        }

        .client-logo-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          max-width: 100%;
          max-height: 100%;
        }

        .logo-fallback {
          color: #000000;
          font-weight: 600;
          font-size: 14px;
          text-align: center;
        }

        @media (max-width: 1024px) {
          .client-logo-wrap {
            height: 90px;
            width: 160px;
            padding: 12px;
          }
          .slider-row {
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 0 !important;
          }
          .client-logo-wrap {
            height: 80px;
            width: 140px;
            padding: 10px;
          }
          .slider-row {
            gap: 16px;
          }
        }

        @media (max-width: 640px) {
          .client-logo-wrap {
            height: 70px;
            width: 120px;
            padding: 8px;
          }
          .slider-row {
            gap: 12px;
          }
        }

        @media (max-width: 480px) {
          .client-logo-wrap {
            height: 60px;
            width: 100px;
            padding: 6px;
          }
          .slider-row {
            gap: 8px;
          }
        }
      `}</style>

      <div style={{
        maxWidth: 1600,
        margin: "0 auto",
        padding: "0 24px",
      }}>
        {/* Heading - exactly as specified: "Our Happy Clients" */}
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 36px)",
          fontWeight: 700,
          color: "#fff",
          textAlign: "center",
          margin: "0 0 50px 0",
          letterSpacing: "-0.02em",
        }}>
          Our Happy Clients
        </h2>

        {/* Slider Container - 3 rows without labels */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}>
          {/* Row 1 - Sliding Left to Right */}
          <div style={{
            overflow: "hidden",
            width: "100%",
          }}>
            <div className="slider-row">
              {row1Slides.map((logo, index) => (
                <div key={`row1-${logo.file}-${index}`} className="client-logo-wrap">
                  <Image
                    src={logo.file}
                    alt={logo.name}
                    width={120}
                    height={60}
                    style={{
                      width: 'auto',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('span');
                        fallback.className = 'logo-fallback';
                        fallback.textContent = logo.name;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Sliding Right to Left (reverse) */}
          <div style={{
            overflow: "hidden",
            width: "100%",
          }}>
            <div className="slider-row reverse">
              {row2Slides.map((logo, index) => (
                <div key={`row2-${logo.file}-${index}`} className="client-logo-wrap">
                  <Image
                    src={logo.file}
                    alt={logo.name}
                    width={120}
                    height={60}
                    style={{
                      width: 'auto',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('span');
                        fallback.className = 'logo-fallback';
                        fallback.textContent = logo.name;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Sliding Left to Right (different speed) */}
          <div style={{
            overflow: "hidden",
            width: "100%",
          }}>
            <div className="slider-row" style={{ animationDuration: "35s" }}>
              {row3Slides.map((logo, index) => (
                <div key={`row3-${logo.file}-${index}`} className="client-logo-wrap">
                  <Image
                    src={logo.file}
                    alt={logo.name}
                    width={120}
                    height={60}
                    style={{
                      width: 'auto',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('span');
                        fallback.className = 'logo-fallback';
                        fallback.textContent = logo.name;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}