"use client";

const services = [
  {
    icon: "📣", number: "01",
    title: "Marketing & Advertising",
    description: "Full-funnel marketing strategies that combine data-driven paid media, organic growth, and brand positioning to capture market share and drive measurable ROI.",
    tags: ["Social Media", "Paid Ads", "Traditional Media", "Brand Strategy", "SEO/SEM"],
  },
  {
    icon: "🎬", number: "02",
    title: "AI Reels & Content Creation",
    description: "Next-gen content production powered by AI tools — from viral short-form video to brand storytelling that scales output without sacrificing quality.",
    tags: ["AI Video", "Reels & Shorts", "Brand Films", "Content Strategy"],
  },
  {
    icon: "⚡", number: "03",
    title: "Digital Transformation",
    description: "End-to-end technology modernization — from legacy system migration and cloud infrastructure to custom software engineering and agile delivery.",
    tags: ["SDLC", "Data Migration", "Cloud Infra", "Software Engineering", "Agile"],
  },
  {
    icon: "🏗️", number: "04",
    title: "Logistics & Engineering",
    description: "Operational excellence through optimized supply chains, engineering planning, and process design that reduces costs and improves delivery timelines.",
    tags: ["Supply Chain", "Operations", "Engineering Planning", "Process Design"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-desktop" style={{ padding: "120px 48px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between" style={{ marginBottom: 72, gap: 24 }}>
          <div style={{ maxWidth: 600 }}>
            <div className="flex items-center gap-4" style={{ marginBottom: 24 }}>
              <div style={{ width: 28, height: 2, background: "var(--cyan)", borderRadius: 1 }} />
              <span className="uppercase font-semibold font-body" style={{ fontSize: 11, letterSpacing: "0.16em", color: "var(--cyan)" }}>What We Do</span>
            </div>
            <h2 className="font-heading" style={{ fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.08, color: "var(--text)" }}>
              Full-Spectrum <span style={{ color: "var(--cyan)" }}>Expertise</span> Under One Roof
            </h2>
          </div>
          <p className="font-light font-body" style={{ fontSize: 16, lineHeight: 1.85, color: "var(--text-sub)", maxWidth: 420 }}>
            We bring together the disciplines that drive growth — strategy, creative, technology, and operations.
          </p>
        </div>

        {/* Cards — staggered layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 20 }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative flex flex-col transition-all duration-300"
              style={{
                background: "var(--bg2)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "48px 44px",
                marginTop: i % 2 === 1 ? 40 : 0,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--bg3)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--bg2)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              {/* Hover accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: "linear-gradient(to right, var(--cyan), transparent)", borderRadius: "16px 16px 0 0" }} />

              {/* Number watermark */}
              <span className="absolute top-6 right-8 font-heading select-none pointer-events-none"
                style={{ fontSize: 88, fontWeight: 700, color: "rgba(255,255,255,0.025)", lineHeight: 1 }}>
                {s.number}
              </span>

              <div className="flex items-start justify-between" style={{ marginBottom: 32 }}>
                <div className="flex items-center justify-center" style={{
                  width: 56, height: 56, borderRadius: 14, background: "var(--cyan-dim)", border: "1px solid var(--border-cyan)", fontSize: 24,
                }}>
                  {s.icon}
                </div>
                <div className="flex items-center justify-center transition-all duration-300"
                  style={{ width: 38, height: 38, borderRadius: 10, border: "1px solid var(--border-light)", color: "var(--text-muted)", fontSize: 16 }}>
                  <span className="group-hover:text-[var(--cyan)] transition-colors duration-300">↗</span>
                </div>
              </div>

              <h3 className="font-heading" style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.2, color: "#FFFFFF", marginBottom: 16 }}>
                {s.title}
              </h3>

              <p className="font-light font-body flex-1" style={{ fontSize: 15, lineHeight: 1.8, color: "var(--text-sub)", marginBottom: 32 }}>
                {s.description}
              </p>

              <div style={{ height: 1, background: "var(--border)", marginBottom: 24 }} />

              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="font-body" style={{
                    fontSize: 11, fontWeight: 500, letterSpacing: "0.04em", color: "var(--cyan)",
                    background: "var(--cyan-dim)", border: "1px solid var(--border-cyan)", borderRadius: 6, padding: "6px 14px",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
