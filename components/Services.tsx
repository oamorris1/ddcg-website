"use client";

import { useEffect } from "react";

const services = [
  { num: "01", title: "Marketing & Advertising", desc: "Full-funnel marketing strategies that combine data-driven paid media, organic growth, and brand positioning to capture market share and drive measurable ROI.", tags: ["Social Media", "Paid Ads", "Traditional Media", "Brand Strategy", "SEO/SEM"] },
  { num: "02", title: "AI Reels & Content Creation", desc: "Next-gen content production powered by AI tools — from viral short-form video to brand storytelling that scales output without sacrificing quality.", tags: ["AI Video", "Reels & Shorts", "Brand Films", "Content Strategy"] },
  { num: "03", title: "Digital Transformation", desc: "End-to-end technology modernization — from legacy system migration and cloud infrastructure to custom software engineering and agile delivery.", tags: ["SDLC", "Data Migration", "Cloud Infra", "Software Engineering", "Agile"] },
  { num: "04", title: "Logistics & Engineering", desc: "Operational excellence through optimized supply chains, engineering planning, and process design that reduces costs and improves delivery timelines.", tags: ["Supply Chain", "Operations", "Engineering Planning", "Process Design"] },
];

export default function Services() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".svc-reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" style={{ background: "var(--cream2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "120px 60px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div className="svc-reveal reveal" style={{ marginBottom: 64, maxWidth: 640 }}>
          <div className="flex items-center gap-4" style={{ marginBottom: 24 }}>
            <div style={{ width: 28, height: 1, background: "var(--muted2)" }} />
            <span className="uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", color: "var(--muted)" }}>What We Do</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(44px, 5.5vw, 72px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.05, color: "var(--ink)" }}>
            Full-Spectrum <em style={{ color: "var(--ink3)" }}>Expertise</em> Under One Roof
          </h2>
          <p className="font-light" style={{ fontSize: 16, lineHeight: 1.85, color: "var(--muted)", marginTop: 20 }}>
            We bring together the disciplines that drive growth — strategy, creative, technology, and operations.
          </p>
        </div>

        {/* Service rows */}
        <div>
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`service-row svc-reveal reveal reveal-delay-${i + 1} group flex items-start gap-8 lg:gap-12 relative transition-all duration-300`}
              style={{ padding: "40px 0", borderBottom: "1px solid var(--border)" }}
            >
              {/* Hover sweep line */}
              <div className="absolute bottom-0 left-0 right-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ height: 1, background: "var(--ink)" }} />

              {/* Number */}
              <span style={{ fontFamily: "var(--font-cormorant)", fontSize: 18, fontStyle: "italic", color: "var(--muted2)", minWidth: 32, paddingTop: 8 }}>
                {s.num}
              </span>

              {/* Content */}
              <div className="flex-1">
                <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: 12, lineHeight: 1.2 }}>
                  {s.title}
                </h3>
                <p className="font-light" style={{ fontSize: 15, lineHeight: 1.85, color: "var(--muted)", marginBottom: 20, maxWidth: 560 }}>
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="uppercase group-hover:border-[var(--ink)] group-hover:text-[var(--ink)] transition-colors duration-300"
                      style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", color: "var(--muted)", border: "1px solid var(--border)", borderRadius: 2, padding: "4px 10px" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <span className="text-[var(--muted2)] group-hover:text-[var(--ink)] transition-all duration-300 group-hover:translate-x-[5px] group-hover:-translate-y-[5px] text-xl mt-2 shrink-0">
                ↗
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
