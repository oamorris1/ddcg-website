"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

/* ─── Holographic 3D Tilt Card ─── */
function HolographicCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -20, y: x * 20 });
  }, []);

  const handleLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovering(false);
  };

  return (
    <div className="flex flex-col">
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleLeave}
        style={{
          perspective: 800,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "3/4",
            borderRadius: 16,
            overflow: "hidden",
            transformStyle: "preserve-3d",
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: hovering ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
            boxShadow: hovering
              ? "0 25px 60px rgba(0,0,0,0.3), 0 0 40px rgba(200,160,180,0.15)"
              : "0 10px 30px rgba(0,0,0,0.15)",
          }}
        >
          {/* Video layer — the main visual, deepest */}
          <div style={{
            position: "absolute", inset: 0,
            transform: `translateZ(-20px) scale(1.06)`,
            transformStyle: "preserve-3d",
          }}>
            <video
              autoPlay loop muted playsInline
              className="w-full h-full object-cover object-top"
            >
              <source src="/video/beauty-bar.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Foreground layer — sparkles float in front */}
          <div style={{
            position: "absolute", inset: 0,
            transform: `translateZ(40px) scale(1.05)`,
            transformStyle: "preserve-3d",
            mixBlendMode: "screen",
          }}>
            <Image src="/img/cards/holo-fg.png" alt="Pink sparkle overlay" fill className="object-cover" sizes="400px" />
          </div>

          {/* Edge gradient — blends video edges into card border */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 4, pointerEvents: "none",
            boxShadow: "inset 0 0 40px 10px rgba(0,0,0,0.4)",
            borderRadius: 16,
          }} />

          {/* Shine/glare effect on hover */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 5,
            background: `radial-gradient(circle at ${50 + tilt.y * 2}% ${50 + tilt.x * 2}%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
            pointerEvents: "none",
            opacity: hovering ? 1 : 0,
            transition: "opacity 0.3s",
          }} />

        </div>
      </div>

      {/* Label */}
      <div style={{ marginTop: 20 }}>
        <span className="uppercase block" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", color: "var(--muted2)", marginBottom: 6 }}>
          Beauty & Lifestyle
        </span>
        <span style={{ fontFamily: "var(--font-cormorant)", fontSize: 24, fontWeight: 600, color: "var(--ink)" }}>
          Elegant Ways Beauty Bar
        </span>
      </div>
    </div>
  );
}

/* ─── X-Ray Reveal Card (Placeholder) ─── */
function XRayCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col">
      <div style={{
        position: "relative", width: "100%", aspectRatio: "3/4", borderRadius: 16,
        overflow: "hidden", background: "var(--ink)", border: "1px solid var(--border)",
      }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div style={{
            width: 56, height: 56, borderRadius: "50%", border: "1.5px solid rgba(245,242,235,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line x1="12" y1="2" x2="12" y2="22" stroke="rgba(245,242,235,0.5)" strokeWidth="1.5" />
              <polyline points="8,8 12,2 16,8" stroke="rgba(245,242,235,0.5)" strokeWidth="1.5" fill="none" />
              <polyline points="8,16 12,22 16,16" stroke="rgba(245,242,235,0.5)" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <span style={{ fontSize: 13, color: "rgba(245,242,235,0.35)", fontStyle: "italic", fontFamily: "var(--font-cormorant)" }}>
            Drag to Reveal
          </span>
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <span className="uppercase block" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", color: "var(--muted2)", marginBottom: 6 }}>
          Product Design
        </span>
        <span style={{ fontFamily: "var(--font-cormorant)", fontSize: 24, fontWeight: 600, color: "var(--ink)" }}>
          X-Ray Product Reveal
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Video Typography Card (Placeholder) ─── */
function VideoTypeCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col">
      <div style={{
        position: "relative", width: "100%", aspectRatio: "3/4", borderRadius: 16,
        overflow: "hidden", background: "var(--ink)", border: "1px solid var(--border)",
      }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span style={{
            fontFamily: "var(--font-cormorant)", fontSize: 64, fontWeight: 600,
            color: "transparent", WebkitTextStroke: "1px rgba(245,242,235,0.12)",
            letterSpacing: "-0.03em",
          }}>
            CREATE
          </span>
          <span style={{ fontSize: 13, color: "rgba(245,242,235,0.35)", fontStyle: "italic", fontFamily: "var(--font-cormorant)", marginTop: 16 }}>
            Video Typography
          </span>
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <span className="uppercase block" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", color: "var(--muted2)", marginBottom: 6 }}>
          Motion Design
        </span>
        <span style={{ fontFamily: "var(--font-cormorant)", fontSize: 24, fontWeight: 600, color: "var(--ink)" }}>
          Cinematic Typography
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ─── */
export default function DemoReels() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });
  const holoRef = useRef(null);
  const holoInView = useInView(holoRef, { once: true, margin: "-10%" });

  return (
    <section id="reels" className="section-pad-mobile"
      style={{ background: "var(--cream)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "120px 60px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div ref={headerRef} initial={{ opacity: 0, y: 30 }} animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between"
          style={{ marginBottom: 72, gap: 24 }}>
          <div>
            <div className="flex items-center gap-4" style={{ marginBottom: 24 }}>
              <div style={{ width: 28, height: 1, background: "var(--muted2)" }} />
              <span className="uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", color: "var(--muted)" }}>
                Demo Reels
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-cormorant)", fontSize: "clamp(44px, 5.5vw, 72px)",
              fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.05, color: "var(--ink)",
            }}>
              Our Work in <em style={{ color: "var(--ink3)" }}>Motion</em>
            </h2>
          </div>
          <p className="font-light" style={{ fontSize: 16, lineHeight: 1.85, color: "var(--muted)", maxWidth: 400 }}>
            Interactive showcases that demonstrate our creative and technical capabilities.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 36 }}>
          <motion.div ref={holoRef} initial={{ opacity: 0, y: 40 }} animate={holoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <HolographicCard />
          </motion.div>
          <XRayCard />
          <VideoTypeCard />
        </div>
      </div>
    </section>
  );
}
