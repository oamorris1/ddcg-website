"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
    <section className="relative flex flex-col justify-center overflow-hidden hero-mobile" style={{ minHeight: "100vh", padding: "100px 60px 0" }}>
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(28,28,22,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(28,28,22,0.03) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(ellipse 70% 55% at 50% 45%, black 10%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 45%, black 10%, transparent 80%)",
      }} />

      {/* Ghost text */}
      <div ref={ghostRef} className="absolute pointer-events-none select-none w-full text-center" style={{ top: "15%", zIndex: 0 }}>
        <span style={{
          fontFamily: "var(--font-cormorant)", fontSize: "clamp(140px, 22vw, 280px)", fontWeight: 600, fontStyle: "italic",
          color: "transparent", WebkitTextStroke: "1px rgba(28,28,22,0.05)", lineHeight: 1,
        }}>
          Dynamics
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full" style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Eyebrow */}
        <div className="flex items-center gap-4" style={{
          marginBottom: 40,
          animation: mounted ? "fadeUp 1s ease both" : "none",
          animationDelay: "0.3s",
          opacity: mounted ? undefined : 0,
        }}>
          <div style={{ width: 28, height: 1, background: "var(--muted2)" }} />
          <span className="uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", color: "var(--muted)" }}>
            Welcome to the Renaissance of Business-Focused Transformations
          </span>
        </div>

        {/* H1 */}
        <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(56px, 8.5vw, 112px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 0.95 }}>
          {[
            { text: "Scale Faster.", delay: "0.5s", color: "var(--ink)", italic: false },
            { text: "Build Smarter.", delay: "0.65s", color: "var(--ink3)", italic: true },
            { text: "Lead the Market.", delay: "0.8s", color: "var(--ink)", italic: false },
          ].map((line) => (
            <span key={line.text} className="block overflow-hidden">
              <span className="block" style={{
                color: line.color, fontStyle: line.italic ? "italic" : "normal",
                animation: mounted ? "lineUp 1s ease both" : "none", animationDelay: line.delay,
                opacity: mounted ? undefined : 0,
              }}>
                {line.text}
              </span>
            </span>
          ))}
        </h1>

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between" style={{
          marginTop: 48, gap: 40,
          animation: mounted ? "fadeUp 1s ease both" : "none", animationDelay: "1.0s",
          opacity: mounted ? undefined : 0,
        }}>
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
      </div>

      {/* Hero image — full bleed */}
      <div className="relative z-10 w-full overflow-hidden" style={{
        marginTop: 72, borderRadius: "16px 16px 0 0",
        maxWidth: 1200, marginLeft: "auto", marginRight: "auto",
        animation: mounted ? "fadeIn 1.4s ease both" : "none", animationDelay: "1.2s",
        opacity: mounted ? undefined : 0,
      }}>
        <div className="img-reveal visible">
          <Image
            src="/img/hero.png"
            alt="Renaissance-inspired scene — the spark of digital transformation"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            style={{ borderRadius: "16px 16px 0 0" }}
            priority
          />
        </div>
        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0" style={{ height: 120, background: "linear-gradient(to top, var(--cream), transparent)" }} />
      </div>

      {/* Est. label */}
      <div className="relative z-10" style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 0 24px" }}>
        <span style={{ fontFamily: "var(--font-cormorant)", fontSize: 14, fontStyle: "italic", color: "var(--muted2)" }}>
          Est. 2024 — Houston, TX
        </span>
      </div>
    </section>
  );
}
