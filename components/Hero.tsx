"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay to ensure CSS animations trigger after hydration
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col justify-center" style={{ minHeight: "100vh", overflow: "hidden" }}>
      {/* Video background — full screen */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: 0, objectPosition: "center 30%" }}
      >
        <source src="/video/hero1.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.7) 100%)",
          zIndex: 1,
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          opacity: 0.05,
          zIndex: 2,
        }}
      />

      {/* Content — above everything */}
      <div
        className="relative w-full flex flex-col items-center justify-center text-center"
        style={{ minHeight: "100vh", padding: "80px 48px 80px", zIndex: 10 }}
      >
        {/* Renaissance headline */}
        <div style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1.2s ease 0.3s, transform 1.2s ease 0.3s",
          marginBottom: 32,
        }}>
          <div className="flex items-center justify-center gap-5" style={{ marginBottom: 28 }}>
            <div style={{ width: 56, height: 1, background: "rgba(245,242,235,0.4)" }} />
            <span className="uppercase" style={{ fontSize: "clamp(14px, 2vw, 20px)", fontWeight: 500, letterSpacing: "0.14em", color: "rgba(245,242,235,0.75)" }}>
              Digital Dynamics Consultants Group
            </span>
            <div style={{ width: 56, height: 1, background: "rgba(245,242,235,0.4)" }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 600,
            fontStyle: "italic",
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
            color: "rgba(245,242,235,0.9)",
            maxWidth: 700,
            margin: "0 auto",
          }}>
            Welcome to the Renaissance of Business-Focused Transformations
          </h2>
        </div>

        {/* H1 */}
        <h1 style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(52px, 8vw, 120px)",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: 0.95,
          marginBottom: 48,
        }}>
          <span className="block" style={{
            color: "#FFFFFF",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(100%)",
            transition: "opacity 1s ease 0.5s, transform 1s ease 0.5s",
          }}>
            Scale Faster.
          </span>
          <span className="block" style={{
            color: "rgba(245,242,235,0.7)",
            fontStyle: "italic",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(100%)",
            transition: "opacity 1s ease 0.65s, transform 1s ease 0.65s",
          }}>
            Build Smarter.
          </span>
          <span className="block" style={{
            color: "rgba(255,255,255,0.4)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(100%)",
            transition: "opacity 1s ease 0.8s, transform 1s ease 0.8s",
          }}>
            Lead the Market.
          </span>
        </h1>

        {/* Subtext + CTAs */}
        <div style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease 1.1s, transform 1s ease 1.1s",
          maxWidth: 560,
        }}>
          <p className="font-light" style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(245,242,235,0.6)", marginBottom: 36 }}>
            End-to-end solutions — from AI-powered content and aggressive marketing to
            enterprise-grade tech transformation and logistics optimization.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center uppercase transition-all duration-200"
              style={{ padding: "15px 36px", borderRadius: 4, fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", background: "rgba(245,242,235,0.95)", color: "var(--ink)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              Schedule a Consultation
            </a>
            <a href="#services" className="inline-flex items-center justify-center uppercase transition-all duration-200"
              style={{ padding: "15px 36px", borderRadius: 4, fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", border: "1px solid rgba(245,242,235,0.3)", color: "rgba(245,242,235,0.7)" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-2px)";
                el.style.borderColor = "rgba(245,242,235,0.6)";
                el.style.color = "rgba(245,242,235,0.95)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(245,242,235,0.3)";
                el.style.color = "rgba(245,242,235,0.7)";
              }}>
              Our Services →
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s ease 2s",
        }}>
          <div style={{
            width: 24, height: 40, borderRadius: 12, border: "1.5px solid rgba(245,242,235,0.3)",
            display: "flex", justifyContent: "center", paddingTop: 8,
          }}>
            <div style={{
              width: 3, height: 8, borderRadius: 2, background: "rgba(245,242,235,0.5)",
              animation: "fadeUp 1.5s ease-in-out infinite",
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
