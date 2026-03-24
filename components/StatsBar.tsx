"use client";

const stats = [
  { number: "150", suffix: "+", label: "Clients Served" },
  { number: "8", suffix: "", label: "Core Disciplines" },
  { number: "98", suffix: "%", label: "Client Retention" },
  { number: "$40", suffix: "M+", label: "Revenue Generated" },
];

export default function StatsBar() {
  return (
    <section className="section-desktop" style={{ background: "var(--bg-light)", padding: "100px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section label */}
        <div className="flex items-center gap-4" style={{ marginBottom: 56 }}>
          <div style={{ width: 28, height: 2, background: "var(--cyan-dark)", borderRadius: 1 }} />
          <span className="uppercase font-semibold font-body"
            style={{ fontSize: 11, letterSpacing: "0.16em", color: "var(--cyan-dark)" }}>
            By The Numbers
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 32 }}>
          {stats.map((s, i) => (
            <div key={s.label} className="relative" style={{ paddingLeft: 28, borderLeft: i === 0 ? "3px solid var(--cyan-dark)" : "1px solid var(--border-dark)" }}>
              <span className="font-heading block" style={{
                fontSize: "clamp(44px, 5vw, 64px)", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--text-dark)", lineHeight: 1,
              }}>
                {s.number}
                {s.suffix && <span style={{ color: "var(--cyan-dark)" }}>{s.suffix}</span>}
              </span>
              <span className="block font-body" style={{ fontSize: 14, fontWeight: 400, color: "var(--text-dark-muted)", marginTop: 10, letterSpacing: "0.01em" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
