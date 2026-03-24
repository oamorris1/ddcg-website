"use client";

const caseStudies = [
  {
    category: "Marketing",
    title: "Regional Retail Brand Scale-Up",
    description: "Transformed a regional retail brand with integrated paid media and SEO strategy that drove explosive growth.",
    result: "340", suffix: "%", resultLabel: "Increase in Qualified Leads",
    gradient: "linear-gradient(135deg, rgba(0,212,255,0.12) 0%, rgba(37,99,235,0.08) 100%)",
  },
  {
    category: "AI Content",
    title: "AI-Powered Content Engine",
    description: "Built an AI-powered content production pipeline that dramatically scaled output while maintaining brand consistency.",
    result: "12", suffix: "×", resultLabel: "Content Output Increase",
    gradient: "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(0,212,255,0.06) 100%)",
  },
  {
    category: "Digital Transformation",
    title: "Enterprise Legacy Migration",
    description: "Led a full enterprise legacy system migration to modern cloud infrastructure, cutting costs dramatically.",
    result: "60", suffix: "%", resultLabel: "Reduction in Infra Costs",
    gradient: "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(37,99,235,0.12) 100%)",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-desktop" style={{ padding: "120px 48px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between" style={{ marginBottom: 72, gap: 24 }}>
          <div style={{ maxWidth: 500 }}>
            <div className="flex items-center gap-4" style={{ marginBottom: 24 }}>
              <div style={{ width: 28, height: 2, background: "var(--cyan)", borderRadius: 1 }} />
              <span className="uppercase font-semibold font-body" style={{ fontSize: 11, letterSpacing: "0.16em", color: "var(--cyan)" }}>Our Work</span>
            </div>
            <h2 className="font-heading" style={{ fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.08, color: "var(--text)" }}>
              Results That Speak <span style={{ color: "var(--cyan)" }}>Louder</span>
            </h2>
          </div>
          <p className="font-light font-body" style={{ fontSize: 16, lineHeight: 1.85, color: "var(--text-sub)", maxWidth: 380 }}>
            Real outcomes from real engagements. Here&apos;s how we&apos;ve helped our clients scale.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 20 }}>
          {caseStudies.map((s) => (
            <div
              key={s.title}
              className="group relative flex flex-col transition-all duration-300 overflow-hidden"
              style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 16, padding: "44px 40px" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
            >
              {/* Gradient wash on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: s.gradient }} />

              {/* Hover accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: "var(--cyan)" }} />

              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex items-center justify-between" style={{ marginBottom: 28 }}>
                  <span className="uppercase font-semibold font-body" style={{ fontSize: 10, letterSpacing: "0.15em", color: "var(--cyan)" }}>{s.category}</span>
                  <div className="flex items-center justify-center transition-all duration-300"
                    style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid var(--border-light)", color: "var(--text-muted)", fontSize: 14 }}>
                    <span className="group-hover:text-[var(--cyan)] transition-colors duration-300">↗</span>
                  </div>
                </div>

                <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.3, color: "#FFFFFF", marginBottom: 14 }}>
                  {s.title}
                </h3>

                <p className="font-light font-body flex-1" style={{ fontSize: 14, lineHeight: 1.8, color: "var(--text-sub)", marginBottom: 36 }}>
                  {s.description}
                </p>

                <div style={{ borderTop: "1px solid var(--border)", paddingTop: 28 }}>
                  <span className="font-heading" style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-0.04em", color: "#FFFFFF" }}>
                    {s.result}<span style={{ color: "var(--cyan)" }}>{s.suffix}</span>
                  </span>
                  <span className="block font-body" style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 8 }}>{s.resultLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
