"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col justify-center" style={{ minHeight: "100vh", overflow: "hidden" }}>
      {/* Video background */}
      <video
        autoPlay loop muted playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: 0, objectPosition: "center 30%" }}
      >
        <source src="/video/new_hero_upscale.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay — deeper for dark theme */}
      <div className="absolute top-0 left-0 w-full h-full"
        style={{ background: "linear-gradient(to bottom, rgba(10,10,15,0.5) 0%, rgba(10,10,15,0.6) 40%, rgba(10,10,15,0.85) 100%)", zIndex: 1 }} />

      {/* Grain */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          opacity: 0.04, zIndex: 2,
        }} />

      {/* Content */}
      <div className="relative w-full flex flex-col items-center justify-center text-center hero-mobile"
        style={{ minHeight: "100vh", padding: "80px 48px 80px", zIndex: 10 }}>

        {/* Company name */}
        <div style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1.2s ease 0.3s, transform 1.2s ease 0.3s",
          marginBottom: 40,
        }}>
          <div className="flex items-center justify-center gap-5" style={{ marginBottom: 32 }}>
            <div style={{ width: 56, height: 1, background: "var(--gold)", opacity: 0.4 }} />
            <span className="uppercase" style={{ fontSize: "clamp(12px, 1.6vw, 16px)", fontWeight: 400, letterSpacing: "0.18em", color: "var(--text-muted)" }}>
              Digital Dynamics Consultants Group
            </span>
            <div style={{ width: 56, height: 1, background: "var(--gold)", opacity: 0.4 }} />
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "clamp(32px, 5vw, 68px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "var(--text)",
            maxWidth: 800,
            margin: "0 auto",
          }}>
            Elevate Your Brand with{" "}
            <span style={{ color: "#4A90C4" }}>AI Film</span> &{" "}
            <span style={{ color: "#4A90C4" }}>Content Creation</span>
          </h1>

          <p style={{
            fontSize: "clamp(15px, 1.8vw, 18px)",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "var(--text-muted)",
            maxWidth: 540,
            margin: "24px auto 0",
          }}>
            From cinematic AI production to full-spectrum brand strategy — we bring your vision to life.
          </p>
        </div>

        {/* Buttons */}
        <div style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease 0.9s, transform 1s ease 0.9s",
          marginTop: 32,
        }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center uppercase transition-all duration-200"
              style={{ padding: "15px 36px", borderRadius: 4, fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", background: "var(--accent)", color: "var(--text)" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-2px)";
                el.style.background = "var(--accent-hover)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.background = "var(--accent)";
              }}>
              Start Your Project
            </a>
            <a href="#services" className="inline-flex items-center justify-center uppercase transition-all duration-200"
              style={{ padding: "15px 36px", borderRadius: 4, fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", border: "1px solid rgba(255,255,255,0.15)", color: "var(--text-muted)" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-2px)";
                el.style.borderColor = "rgba(255,255,255,0.35)";
                el.style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(255,255,255,0.15)";
                el.style.color = "var(--text-muted)";
              }}>
              Our Services →
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          opacity: mounted ? 1 : 0, transition: "opacity 1s ease 2s",
        }}>
          <div style={{ width: 24, height: 40, borderRadius: 12, border: "1.5px solid rgba(255,255,255,0.15)", display: "flex", justifyContent: "center", paddingTop: 8 }}>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: 3, height: 8, borderRadius: 2, background: "rgba(255,255,255,0.3)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
