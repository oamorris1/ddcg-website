"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  { result: "2.4M", label: "Views", desc: "High-retention AI brand films engineered for algorithmic virality." },
  { result: "12×", label: "Output", desc: "Custom-built \"Content Engines\" that scale your presence without quality decay." },
  { result: "340%", label: "Engagement", desc: "Interactive AI Avatars and Agents that turn passive viewers into active communities." },
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

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-pad-mobile" style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "120px 60px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 80 }}>
          <MotionBlock>
            <div className="flex items-center gap-4" style={{ marginBottom: 24 }}>
              <div style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.4 }} />
              <span className="uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", color: "var(--text-muted2)" }}>Our Work</span>
            </div>
          </MotionBlock>
          <MotionBlock delay={0.1}>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, color: "var(--text)", marginBottom: 24 }}>
              The Velocity of <span style={{ color: "var(--text-muted)" }}>Impact</span>
            </h2>
          </MotionBlock>
          <MotionBlock delay={0.2}>
            <p className="font-light" style={{ fontSize: 18, lineHeight: 1.85, color: "var(--text-muted)", maxWidth: 720 }}>
              Where algorithmic precision meets creative scale. We don&apos;t just produce content; we engineer high-performance digital ecosystems. By integrating custom-trained models and agentic workflows, we bypass traditional production bottlenecks to deliver hyper-growth metrics that were previously impossible.
            </p>
          </MotionBlock>
        </div>

        {/* Measurable Milestones */}
        <MotionBlock delay={0.25}>
          <div className="flex items-center gap-4" style={{ marginBottom: 40 }}>
            <div style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.4 }} />
            <span className="uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", color: "var(--text-muted2)" }}>Measurable Milestones</span>
          </div>
        </MotionBlock>

        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 1, background: "var(--border)", borderRadius: 12, overflow: "hidden" }}>
          {milestones.map((m, i) => (
            <MotionBlock key={m.label} delay={0.3 + i * 0.12}>
              <div style={{ background: "var(--surface)", padding: "48px 40px", height: "100%" }}>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 56, fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)", display: "block", lineHeight: 1 }}>
                  {m.result}
                </span>
                <span className="block uppercase" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", color: "var(--accent-hover)", marginTop: 8, marginBottom: 16 }}>
                  {m.label}
                </span>
                <p className="font-light" style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-muted)" }}>
                  {m.desc}
                </p>
              </div>
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
