
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
];

export default function ClientLogos() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [logoColors, setLogoColors] = useState<{[key: string]: 'dark' | 'light'}>({});

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = mounted && windowWidth <= 640;
  const isTablet = mounted && windowWidth > 640 && windowWidth <= 1024;

  const doubled = [...LOGOS, ...LOGOS];

  // Function to determine if logo is dark (needs inversion)
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>, fileName: string) => {
    const img = e.currentTarget;
    // Create a canvas to analyze logo color
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);

    // Sample the image to determine if it's dark
    try {
      const imageData = ctx.getImageData(0, 0, 10, 10);
      let totalBrightness = 0;
      for (let i = 0; i < imageData.data.length; i += 4) {
        totalBrightness += (imageData.data[i] + imageData.data[i+1] + imageData.data[i+2]) / 3;
      }
      const avgBrightness = totalBrightness / (imageData.data.length / 4);
      
      // If average brightness is low, logo is dark and needs inversion
      setLogoColors(prev => ({ 
        ...prev, 
        [fileName]: avgBrightness < 128 ? 'dark' : 'light' 
      }));
    } catch (error) {
      // Default to light if analysis fails
      setLogoColors(prev => ({ ...prev, [fileName]: 'light' }));
    }
  };

  // Don't render until mounted to avoid hydration issues
  if (!mounted) return null;

  return (
    <section style={{
      padding: isMobile ? "40px 0" : "60px 0",
      background: "#010812",
      overflow: "hidden",
      borderTop: "1px solid rgba(0,201,167,.15)",
      borderBottom: "1px solid rgba(0,201,167,.15)",
      fontFamily: "'Poppins', sans-serif",
      position: "relative",
    }}>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .cl-track {
          display: flex;
          gap: ${isMobile ? '24px' : isTablet ? '32px' : '40px'};
          width: max-content;
          animation: marquee ${isMobile ? '25s' : '32s'} linear infinite;
          will-change: transform;
        }
        .cl-track:hover { 
          animation-play-state: ${isMobile ? 'running' : 'paused'}; 
        }
        .cl-logo-wrap {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: ${isMobile ? '70px' : '90px'};
          width: ${isMobile ? '140px' : '180px'};
          padding: ${isMobile ? '10px' : '15px'};
          opacity: 1;
          transition: all 0.3s ease;
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .cl-logo-wrap:hover {
          transform: ${isMobile ? 'scale(1.02)' : 'scale(1.05)'};
          background: #ffffff;
          border-color: #00C9A7;
          box-shadow: 0 8px 24px rgba(0,201,167,0.25);
        }
        .cl-logo-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: all 0.3s ease;
          max-width: 100%;
          max-height: 100%;
        }
        /* Light logo (original) */
        .cl-logo-wrap img.light-logo {
          filter: brightness(1) contrast(1);
        }
        /* Dark logo - no inversion needed on white bg */
        .cl-logo-wrap img.dark-logo {
          filter: brightness(1) contrast(1);
        }
        /* Special handling for colored logos */
        .cl-logo-wrap img.colored-logo {
          filter: brightness(1) contrast(1.1) saturate(1.2);
        }
        .cl-logo-wrap:hover img {
          filter: brightness(1.05) contrast(1.1);
        }
        .cl-divider {
          flex-shrink: 0;
          width: 1px;
          height: ${isMobile ? '40px' : '50px'};
          background: linear-gradient(180deg, transparent, #00C9A7, transparent);
          align-self: center;
          opacity: 0.6;
        }
        /* Fallback for when images fail to load */
        .logo-fallback {
          color: #000000;
          font-weight: 700;
          font-size: ${isMobile ? '14px' : '16px'};
          background: #ffffff;
          padding: 8px 16px;
          border-radius: 30px;
          border: 1px solid #00C9A7;
          white-space: nowrap;
          text-align: center;
          width: 100%;
          font-family: 'Poppins', sans-serif;
        }
        /* Client name overlay on hover */
        .cl-logo-wrap {
          position: relative;
        }
        .client-name-overlay {
          position: absolute;
          bottom: -25px;
          left: 0;
          right: 0;
          text-align: center;
          font-size: ${isMobile ? '10px' : '11px'};
          color: #00C9A7;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.2s ease;
          background: rgba(0,0,0,0.7);
          padding: 4px 8px;
          border-radius: 20px;
          width: fit-content;
          margin: 0 auto;
          white-space: nowrap;
        }
        .cl-logo-wrap:hover .client-name-overlay {
          opacity: 1;
        }
      `}</style>

      {/* Background glow effect */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "150px",
        background: "radial-gradient(circle, rgba(0,201,167,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Heading */}
      <div style={{ 
        textAlign: "center", 
        marginBottom: isMobile ? 30 : 40, 
        padding: isMobile ? "0 16px" : "0 24px",
        position: "relative",
        zIndex: 1,
      }}>
        <p style={{
          fontWeight: 600, 
          fontSize: isMobile ? 11 : 12,
          color: "#00C9A7", 
          letterSpacing: "0.14em",
          textTransform: "uppercase", 
          marginBottom: isMobile ? 8 : 12,
        }}>
          Our Happy Clients
        </p>
        <h2 style={{
          fontSize: isMobile ? "clamp(20px, 6vw, 24px)" : "clamp(24px, 3vw, 32px)",
          fontWeight: 700, 
          color: "#fff",
          letterSpacing: "-0.02em", 
          lineHeight: 1.3,
          margin: 0,
          maxWidth: "800px",
          marginInline: "auto",
        }}>
          Trusted by Businesses Across{" "}
          <span style={{
            background: "linear-gradient(135deg, #00C9A7, #40E0D0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            North America & the UK
          </span>
        </h2>
      </div>

      {/* Marquee */}
      <div style={{ 
        overflow: "hidden", 
        position: "relative",
        zIndex: 1,
        maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
      }}>
        <div className="cl-track">
          {doubled.map((logo, i) => (
            <div key={`${logo.file}-${i}`} style={{ display: "flex", alignItems: "center", gap: isMobile ? '24px' : '40px' }}>
              <div className="cl-logo-wrap">
                <Image
                  src={logo.file}
                  alt={logo.name}
                  width={isMobile ? 120 : 150}
                  height={isMobile ? 50 : 60}
                  className={
                    logoColors[logo.file] === 'dark' 
                      ? '' 
                      : logoColors[logo.file] === 'light' 
                        ? '' 
                        : ''
                  }
                  style={{
                    width: 'auto',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                  priority={i < 4}
                  onLoad={(e) => handleImageLoad(e, logo.file)}
                  onError={(e) => {
                    // Fallback with color based on original logo
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="logo-fallback">${logo.name}</span>`;
                    }
                  }}
                />
                {/* Client name overlay on hover */}
                <span className="client-name-overlay">{logo.name}</span>
              </div>
              {i < doubled.length - 1 && (
                <div className="cl-divider" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Client name text below logos (alternative approach) */}
     
    </section>
  );
}