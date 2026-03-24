"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const ghostRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      if (ghostRef.current) {
        ghostRef.current.style.transform = `translateY(${window.scrollY * 0.18}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex flex-col justify-center overflow-hidden" style={{ minHeight: "100vh", padding: "100px 60px 80px" }}>
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(28,28,22,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(28,28,22,0.03) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(ellipse 70% 55% at 50% 45%, black 10%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 45%, black 10%, transparent 80%)",
      }} />

      {/* Radial orb */}
      <div className="absolute pointer-events-none" style={{ top: "-10%", right: "-8%", width: 600, height: 600, background: "radial-gradient(circle, rgba(28,28,22,0.03) 0%, transparent 60%)" }} />

      {/* Ghost text */}
      <div ref={ghostRef} className="absolute pointer-events-none select-none w-full text-center" style={{ top: "18%", zIndex: 0 }}>
        <span style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(160px, 24vw, 320px)",
          fontWeight: 600,
          fontStyle: "italic",
          color: "transparent",
          WebkitTextStroke: "1px rgba(28,28,22,0.06)",
          lineHeight: 1,
        }}>
          Dynamics
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full" style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Eyebrow */}
        <div className="flex items-center gap-4" style={{
          marginBottom: 40,
          animation: mounted ? "fadeUp 1s ease both" : "none",
          animationDelay: "0.3s",
          opacity: mounted ? undefined : 0,
        }}>
          <div style={{ width: 28, height: 1, background: "var(--muted2)" }} />
          <span className="uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", color: "var(--muted)" }}>
            Full-Service Digital &amp; Technology Consultants
          </span>
        </div>

        {/* H1 */}
        <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(64px, 9vw, 120px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 0.95 }}>
          {[
            { text: "Scale Faster.", delay: "0.5s", color: "var(--ink)", italic: false },
            { text: "Build Smarter.", delay: "0.65s", color: "var(--ink3)", italic: true },
            { text: "Lead the Market.", delay: "0.8s", color: "var(--ink)", italic: false },
          ].map((line) => (
            <span key={line.text} className="block overflow-hidden">
              <span
                className="block"
                style={{
                  color: line.color,
                  fontStyle: line.italic ? "italic" : "normal",
                  animation: mounted ? `lineUp 1s ease both` : "none",
                  animationDelay: line.delay,
                  opacity: mounted ? undefined : 0,
                }}
              >
                {line.text}
              </span>
            </span>
          ))}
        </h1>

        {/* Bottom row */}
        <div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between"
          style={{
            marginTop: 48,
            gap: 40,
            animation: mounted ? "fadeUp 1s ease both" : "none",
            animationDelay: "1.0s",
            opacity: mounted ? undefined : 0,
          }}
        >
          <p className="font-light" style={{ fontSize: 16, lineHeight: 1.85, color: "var(--muted)", maxWidth: 440 }}>
            Digital Dynamics Consultants Group delivers end-to-end solutions — from
            AI-powered content and aggressive marketing to enterprise-grade tech
            transformation and logistics optimization.
          </p>

          <div className="flex items-center gap-4 shrink-0">
            <a href="#contact" className="inline-flex items-center justify-center uppercase transition-all duration-200"
              style={{ padding: "14px 32px", borderRadius: 4, fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", background: "var(--ink)", color: "var(--cream)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              Schedule a Consultation
            </a>
            <a href="#services" className="inline-flex items-center justify-center uppercase transition-all duration-200"
              style={{ padding: "14px 32px", borderRadius: 4, fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", border: "1px solid var(--border)", color: "var(--muted)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              Our Services →
            </a>
          </div>
        </div>

        {/* Est. label */}
        <div style={{ marginTop: 64 }}>
          <span style={{ fontFamily: "var(--font-cormorant)", fontSize: 14, fontStyle: "italic", color: "var(--muted2)" }}>
            Est. 2024 — Jackson, MS
          </span>
        </div>
      </div>
    </section>
  );
}
