"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const metrics = [
  { n: "8+", l: "Years" }, { n: "150+", l: "Projects" },
  { n: "98%", l: "Retention" }, { n: "10M+", l: "Views" },
];

const disciplines = [
  "AI Film Production", "Cinematic Brand Films", "Content Creation & Strategy",
  "Custom Character Model Development", "Social Media Management", "SEO & Analytics",
  "Brand Identity & Planning", "Campaign Execution",
];

function MotionBlock({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 35 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

export default function About() {
  const ghostRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (ghostRef.current && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        ghostRef.current.style.transform = `translateY(${-rect.top * 0.12}px)`;
      }
      if (imgRef.current && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        imgRef.current.style.transform = `scale(${1 + progress * 0.08}) translateY(${-progress * 20}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden section-pad-mobile"
      style={{ background: "var(--bg3)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "120px 60px" }}>

      {/* Ghost text */}
      <div ref={ghostRef} className="absolute pointer-events-none select-none hidden lg:block" style={{ top: "10%", right: "-5%", zIndex: 0 }}>
        <span style={{
          fontFamily: "var(--font-dm-sans)", fontSize: "clamp(200px, 28vw, 380px)", fontWeight: 800,
          color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.03)", lineHeight: 1,
        }}>DDCG</span>
      </div>

      <div className="relative z-10" style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top: Image + heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: 80, marginBottom: 80 }}>
          <MotionBlock>
            <div className="overflow-hidden" style={{ borderRadius: 20 }}>
              <div ref={imgRef} style={{ willChange: "transform", transition: "transform 0.1s linear" }}>
                <Image src="/img/about.png" alt="Creative production" width={600} height={400}
                  className="w-full h-auto object-cover" style={{ borderRadius: 20 }} />
              </div>
            </div>
          </MotionBlock>

          <div>
            <MotionBlock delay={0.1}>
              <div className="flex items-center gap-4" style={{ marginBottom: 24 }}>
                <div style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.4 }} />
                <span className="uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", color: "var(--text-muted2)" }}>About DDCG</span>
              </div>
            </MotionBlock>
            <MotionBlock delay={0.2}>
              <h2 style={{
                fontFamily: "var(--font-dm-sans)", fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, color: "var(--text)",
              }}>
                Built by Creatives. Driven by <em style={{ fontStyle: "normal", color: "var(--text-muted)" }}>Vision.</em>
              </h2>
            </MotionBlock>
          </div>
        </div>

        {/* Bottom: Copy + Metrics left, Disciplines right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start" style={{ gap: 100 }}>
          <div>
            <MotionBlock>
              <p className="font-light" style={{ fontSize: 16, lineHeight: 1.9, color: "var(--text-muted)", marginBottom: 16 }}>
                Digital Dynamics Consultants Group brings together filmmakers, AI specialists, and brand strategists under one roof. We produce cinematic content and build digital brands that command attention.
              </p>
            </MotionBlock>
            <MotionBlock delay={0.1}>
              <p className="font-light" style={{ fontSize: 16, lineHeight: 1.9, color: "var(--text-muted)", marginBottom: 48 }}>
                Every project is senior-led. No templates. No shortcuts. Just work that moves the needle.
              </p>
            </MotionBlock>

            {/* Metrics */}
            <div className="grid grid-cols-2" style={{ gap: 1, background: "rgba(255,255,255,0.04)", borderRadius: 12, overflow: "hidden" }}>
              {metrics.map((m, i) => (
                <MotionBlock key={m.l} delay={0.15 + i * 0.1}>
                  <div style={{ background: "var(--surface)", padding: "28px 32px" }}>
                    <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 40, fontWeight: 700, color: "var(--text)", display: "block", lineHeight: 1 }}>{m.n}</span>
                    <span className="block uppercase" style={{ fontSize: 12, color: "var(--text-muted2)", marginTop: 8, letterSpacing: "0.06em" }}>{m.l}</span>
                  </div>
                </MotionBlock>
              ))}
            </div>
          </div>

          <div>
            <MotionBlock>
              <div className="flex items-center gap-4" style={{ marginBottom: 32 }}>
                <div style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.4 }} />
                <span className="uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", color: "var(--text-muted2)" }}>Our Disciplines</span>
              </div>
            </MotionBlock>

            {disciplines.map((d, i) => (
              <MotionBlock key={d} delay={0.05 + i * 0.07}>
                <div
                  className="pillar flex items-center transition-all duration-300"
                  style={{ gap: 18, padding: "18px 0", borderBottom: "1px solid var(--border)", color: "var(--text-muted)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.paddingLeft = "8px";
                    (e.currentTarget as HTMLElement).style.color = "var(--text)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.paddingLeft = "0px";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                  }}
                >
                  <span className="shrink-0" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
                  <span style={{ fontSize: 15, fontWeight: 400 }}>{d}</span>
                </div>
              </MotionBlock>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
