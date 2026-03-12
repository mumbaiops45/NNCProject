"use client";

// ─── Logos are in /public/ root ──────────────────────────────────────────────
const LOGOS = [
  { name: "Client 1",  file: "clients1.png"  },
  { name: "Client 2",  file: "clients2.png"  },
  { name: "Client 3",  file: "clients3.png"  },
  { name: "Client 4",  file: "clients4.png"  },
  { name: "Client 5",  file: "clients5.png"  },
  { name: "Client 6",  file: "clients6.png"  },
  { name: "Client 7",  file: "clients7.png"  },
  { name: "Client 8",  file: "clients8.png"  },
  { name: "Client 9",  file: "clients9.png"  },
  { name: "Client 10", file: "clients10.png" },
  { name: "Client 11", file: "clients11.png" },
];

export default function ClientLogos() {
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section style={{
      padding: "60px 0",
      background: "#010812",
      overflow: "hidden",
      borderTop: "1px solid rgba(0,201,167,.1)",
      borderBottom: "1px solid rgba(0,201,167,.1)",
      fontFamily: "'Poppins', sans-serif",
    }}>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .cl-track {
          display: flex;
          gap: 64px;
          width: max-content;
          animation: marquee 32s linear infinite;
        }
        .cl-track:hover { animation-play-state: paused; }
        .cl-logo-wrap {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 60px;
          padding: 0 8px;
          opacity: 0.85;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .cl-logo-wrap:hover {
          opacity: 1;
          transform: scale(1.08);
        }
        .cl-logo-wrap img {
          height: 48px;
          width: auto;
          max-width: 140px;
          object-fit: contain;
        }
        .cl-divider {
          flex-shrink: 0;
          width: 1px;
          height: 32px;
          background: rgba(255,255,255,0.08);
          align-self: center;
        }
      `}</style>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: 40, padding: "0 24px" }}>
        <p style={{
          fontWeight: 600, fontSize: 11.5,
          color: "rgba(255,255,255,.28)", letterSpacing: "0.14em",
          textTransform: "uppercase", marginBottom: 12,
        }}>
          Our Happy Clients
        </p>
        <h2 style={{
          fontSize: "clamp(20px, 2.6vw, 32px)",
          fontWeight: 800, color: "#fff",
          letterSpacing: "-0.02em", lineHeight: 1.25,
          margin: 0,
        }}>
          Trusted by Businesses Across{" "}
          <span style={{
            background: "linear-gradient(135deg, #00C9A7, #1fd1b5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            North America & the UK
          </span>
        </h2>
      </div>

      {/* Marquee */}
      <div style={{ overflow: "hidden" }}>
        <div className="cl-track">
          {doubled.map((logo, i) => (
            <>
              <div key={`logo-${i}`} className="cl-logo-wrap">
                <img
                  src={`/${logo.file}`}
                  alt={logo.name}
                  onError={(e) => {
                    // Fallback to text if image missing
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.5);white-space:nowrap;">${logo.name}</span>`;
                    }
                  }}
                />
              </div>
              {i < doubled.length - 1 && (
                <div key={`div-${i}`} className="cl-divider" />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}