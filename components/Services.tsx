"use client";

import Image from "next/image";

const services = [
  {
    num: "01",
    title: "Marketing & Advertising",
    desc: "Full-funnel marketing strategies that combine data-driven paid media, organic growth, and brand positioning to capture market share and drive measurable ROI.",
    tags: ["Social Media", "Paid Ads", "Traditional Media", "Brand Strategy", "SEO/SEM"],
    image: "/img/svc-marketing.png",
    alt: "Marketing strategist capturing brand stories across multiple screens",
  },
  {
    num: "02",
    title: "AI Reels & Content Creation",
    desc: "Next-gen content production powered by AI tools — from viral short-form video to brand storytelling that scales output without sacrificing quality.",
    tags: ["AI Video", "Reels & Shorts", "Brand Films", "Content Strategy"],
    image: "/img/svc-ai-content.png",
    alt: "Content director orchestrating AI-powered holographic reels",
  },
  {
    num: "03",
    title: "Digital Transformation",
    desc: "End-to-end technology modernization — from legacy system migration and cloud infrastructure to custom software engineering and agile delivery.",
    tags: ["SDLC", "Data Migration", "Cloud Infra", "Software Engineering", "Agile"],
    image: "/img/svc-digital-transform.png",
    alt: "Executive leading digital transformation from a modern command center",
  },
  {
    num: "04",
    title: "Logistics & Engineering",
    desc: "Operational excellence through optimized supply chains, engineering planning, and process design that reduces costs and improves delivery timelines.",
    tags: ["Supply Chain", "Operations", "Engineering Planning", "Process Design"],
    image: "/img/svc-logistics.png",
    alt: "Operations leader overseeing futuristic logistics network",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-pad-mobile"
      style={{ background: "var(--cream2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "120px 60px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: 72, maxWidth: 640 }}>
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

        {/* Service blocks */}
        <div className="flex flex-col" style={{ gap: 80 }}>
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`reveal reveal-delay-${(i % 4) + 1} group`}
              style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                gap: 48,
                alignItems: "center",
              }}
            >
              {/* Image — alternates left/right */}
              <div
                className="img-reveal overflow-hidden"
                style={{
                  borderRadius: 16,
                  order: i % 2 === 0 ? 0 : 1,
                }}
              >
                <Image
                  src={s.image}
                  alt={s.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover img-zoom"
                  style={{ borderRadius: 16 }}
                />
              </div>

              {/* Content */}
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                {/* Number */}
                <span style={{ fontFamily: "var(--font-cormorant)", fontSize: 18, fontStyle: "italic", color: "var(--muted2)", display: "block", marginBottom: 16 }}>
                  {s.num}
                </span>

                <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: 16, lineHeight: 1.15 }}>
                  {s.title}
                </h3>

                <p className="font-light" style={{ fontSize: 15, lineHeight: 1.85, color: "var(--muted)", marginBottom: 24, maxWidth: 480 }}>
                  {s.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="uppercase transition-colors duration-300"
                      style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", color: "var(--muted)", border: "1px solid var(--border)", borderRadius: 2, padding: "5px 12px" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
