"use client";

import Image from "next/image";

const cases = [
  { cat: "Marketing", title: "Regional Retail Brand Scale-Up", result: "340%", label: "Increase in Qualified Leads" },
  { cat: "AI Content", title: "AI-Powered Content Engine", result: "12×", label: "Content Output Increase" },
  { cat: "Digital Transformation", title: "Enterprise Legacy Migration", result: "60%", label: "Reduction in Infra Costs" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-pad-mobile" style={{ background: "var(--cream2)", borderTop: "1px solid var(--border)", padding: "120px 60px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header with image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: 64, marginBottom: 80 }}>
          <div>
            <div className="reveal flex items-center gap-4" style={{ marginBottom: 24 }}>
              <div style={{ width: 28, height: 1, background: "var(--muted2)" }} />
              <span className="uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", color: "var(--muted)" }}>Our Work</span>
            </div>
            <h2 className="reveal reveal-delay-1" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(44px, 5.5vw, 72px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.05, color: "var(--ink)" }}>
              Results That Speak <em style={{ color: "var(--ink3)" }}>Louder</em>
            </h2>
            <p className="reveal reveal-delay-2 font-light" style={{ fontSize: 16, lineHeight: 1.85, color: "var(--muted)", marginTop: 20 }}>
              Real outcomes from real engagements. Measurable impact across every discipline.
            </p>
          </div>

          {/* Portfolio image */}
          <div className="img-reveal overflow-hidden" style={{ borderRadius: 16 }}>
            <Image
              src="/img/portfolio.png"
              alt="Analytics dashboard showing dramatic growth metrics"
              width={600}
              height={400}
              className="w-full h-auto object-cover img-zoom"
              style={{ borderRadius: 16 }}
            />
          </div>
        </div>

        {/* Case study rows */}
        <div>
          {cases.map((c, i) => (
            <div
              key={c.title}
              className={`portfolio-row reveal reveal-delay-${i + 1} group relative grid grid-cols-1 lg:grid-cols-[120px_1fr_180px] items-center transition-all duration-300`}
              style={{ padding: "36px 0", borderBottom: "1px solid var(--border)", gap: 24 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.paddingLeft = "16px"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.paddingLeft = "0px"; }}
            >
              {/* Hover sweep */}
              <div className="absolute bottom-0 left-0 right-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ height: 1, background: "var(--ink)" }} />

              <span className="uppercase" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "var(--muted2)" }}>{c.cat}</span>

              <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(22px, 2.8vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                {c.title}
              </h3>

              <div className="lg:text-right">
                <span style={{ fontFamily: "var(--font-cormorant)", fontSize: 48, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--ink)", display: "block", lineHeight: 1 }}>
                  {c.result}
                </span>
                <span className="block uppercase" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.06em", marginTop: 6 }}>{c.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
