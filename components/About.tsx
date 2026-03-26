"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const metrics = [
  { n: "8+", l: "Years" }, { n: "150+", l: "Clients" },
  { n: "98%", l: "Retention" }, { n: "$40M+", l: "Revenue" },
];

const disciplines = [
  "Marketing Strategy", "Paid Media & Advertising", "AI Content Production",
  "Brand Development", "Software Engineering", "Cloud & Data Migration",
  "Supply Chain Optimization", "Process Design & Engineering",
];

export default function About() {
  const ghostRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (ghostRef.current && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        ghostRef.current.style.transform = `translateY(${-rect.top * 0.12}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden section-pad-mobile"
      style={{ background: "var(--ink)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "120px 60px" }}>

      {/* Ghost text */}
      <div ref={ghostRef} className="absolute pointer-events-none select-none hidden lg:block" style={{ top: "10%", right: "-5%", zIndex: 0 }}>
        <span style={{
          fontFamily: "var(--font-cormorant)", fontSize: "clamp(200px, 28vw, 380px)", fontWeight: 600, fontStyle: "italic",
          color: "transparent", WebkitTextStroke: "1px rgba(245,242,235,0.05)", lineHeight: 1,
        }}>DDCG</span>
      </div>

      <div className="relative z-10" style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top: Image + heading side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: 80, marginBottom: 80 }}>
          {/* Left — Image */}
          <div className="img-reveal overflow-hidden" style={{ borderRadius: 16 }}>
            <Image
              src="/img/about.png"
              alt="Strategic chess move — deliberate, calculated, powerful"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              style={{ borderRadius: 16 }}
            />
          </div>

          {/* Right — Statement */}
          <div>
            <div className="reveal flex items-center gap-4" style={{ marginBottom: 24 }}>
              <div style={{ width: 28, height: 1, background: "rgba(245,242,235,0.35)" }} />
              <span className="uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", color: "rgba(245,242,235,0.35)" }}>About DDCG</span>
            </div>
            <h2 className="reveal reveal-delay-1" style={{
              fontFamily: "var(--font-cormorant)", fontSize: "clamp(44px, 5.5vw, 72px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.05, color: "var(--cream)",
            }}>
              Built by Experts. Driven by <em style={{ color: "rgba(245,242,235,0.55)" }}>Results.</em>
            </h2>
          </div>
        </div>

        {/* Bottom: Copy + Metrics left, Disciplines right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start" style={{ gap: 100 }}>
          {/* Left */}
          <div>
            <p className="reveal font-light" style={{ fontSize: 16, lineHeight: 1.9, color: "rgba(245,242,235,0.55)", marginBottom: 16 }}>
              Digital Dynamics Consultants Group was founded on the belief that businesses deserve truly excellent partners. We bring together specialists across marketing, technology, engineering, and logistics.
            </p>
            <p className="reveal reveal-delay-1 font-light" style={{ fontSize: 16, lineHeight: 1.9, color: "rgba(245,242,235,0.55)", marginBottom: 48 }}>
              Every engagement is senior-led. No templates. No shortcuts. Just results.
            </p>

            {/* Metrics */}
            <div className="reveal reveal-delay-2 grid grid-cols-2" style={{ gap: 1, background: "rgba(245,242,235,0.06)", borderRadius: 12, overflow: "hidden" }}>
              {metrics.map((m) => (
                <div key={m.l} style={{ background: "rgba(245,242,235,0.03)", padding: "28px 32px" }}>
                  <span style={{ fontFamily: "var(--font-cormorant)", fontSize: 40, fontWeight: 600, color: "var(--cream)", display: "block", lineHeight: 1 }}>{m.n}</span>
                  <span className="block uppercase" style={{ fontSize: 12, color: "rgba(245,242,235,0.4)", marginTop: 8, letterSpacing: "0.06em" }}>{m.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Disciplines */}
          <div>
            <div className="reveal flex items-center gap-4" style={{ marginBottom: 32 }}>
              <div style={{ width: 28, height: 1, background: "rgba(245,242,235,0.35)" }} />
              <span className="uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", color: "rgba(245,242,235,0.35)" }}>Our Disciplines</span>
            </div>

            <div>
              {disciplines.map((d, i) => (
                <div key={d}
                  className={`pillar reveal reveal-delay-${(i % 4) + 1} flex items-center transition-all duration-300`}
                  style={{ gap: 18, padding: "18px 0", borderBottom: "1px solid rgba(245,242,235,0.06)", color: "rgba(245,242,235,0.5)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.paddingLeft = "8px";
                    (e.currentTarget as HTMLElement).style.color = "rgba(245,242,235,0.85)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.paddingLeft = "0px";
                    (e.currentTarget as HTMLElement).style.color = "rgba(245,242,235,0.5)";
                  }}
                >
                  <span className="shrink-0" style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(245,242,235,0.3)" }} />
                  <span style={{ fontSize: 15, fontWeight: 400 }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
