"use client";

const stats = [
  { number: "150+", label: "Clients Served" },
  { number: "8", label: "Core Disciplines" },
  { number: "98%", label: "Client Retention" },
  { number: "$40M+", label: "Revenue Generated" },
];

export default function StatsBar() {
  return (
    <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 1, background: "var(--border)" }}>
        {stats.map((s, i) => (
          <div key={s.label} className={`reveal reveal-delay-${i + 1}`} style={{ background: "var(--cream)", padding: "52px 48px" }}>
            <span style={{
              fontFamily: "var(--font-cormorant)", fontSize: 64, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--ink)", display: "block", lineHeight: 1,
            }}>
              {s.number}
            </span>
            <span className="block uppercase" style={{ fontSize: 12, fontWeight: 400, letterSpacing: "0.06em", color: "var(--muted)", marginTop: 12 }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
