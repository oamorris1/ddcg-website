"use client";

const pillars = [
  { title: "Strategy-First Consulting", desc: "Every engagement begins with deep discovery and a tailored roadmap." },
  { title: "Cross-Discipline Integration", desc: "Marketing, tech, and operations working as one unified team." },
  { title: "Data-Driven Decision Making", desc: "Real metrics and analytics powering every recommendation." },
  { title: "Scalable & Sustainable Growth", desc: "Solutions built to compound returns, not just hit quarterly targets." },
];

export default function About() {
  return (
    <section id="about" className="section-desktop" style={{ background: "var(--bg-light)", padding: "140px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top: Big statement spanning full width */}
        <div style={{ marginBottom: 80 }}>
          <div className="flex items-center gap-4" style={{ marginBottom: 32 }}>
            <div style={{ width: 28, height: 2, background: "var(--cyan-dark)", borderRadius: 1 }} />
            <span className="uppercase font-semibold font-body" style={{ fontSize: 11, letterSpacing: "0.16em", color: "var(--cyan-dark)" }}>About DDCG</span>
          </div>
          <h2 className="font-heading" style={{
            fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1.04, color: "var(--text-dark)",
          }}>
            Built by Experts.<br />
            Driven by <span style={{ color: "var(--cyan-dark)" }}>Results.</span>
          </h2>
        </div>

        {/* Two-column: copy left, metrics right */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 80, marginBottom: 100 }}>
          <div>
            <p className="font-light font-body" style={{ fontSize: 17, lineHeight: 1.9, color: "var(--text-dark-sub)", marginBottom: 24 }}>
              Digital Dynamics Consultants Group was founded on the belief that businesses
              deserve truly excellent partners. We bring together specialists across
              marketing, technology, engineering, and logistics — genuine expertise, not generalists filling seats.
            </p>
            <p className="font-light font-body" style={{ fontSize: 17, lineHeight: 1.9, color: "var(--text-dark-sub)" }}>
              From building a startup&apos;s social presence to leading a Fortune 500
              digital transformation, every engagement is senior-led. No templates. No shortcuts. Just results.
            </p>
          </div>

          {/* Metrics — vertical list with big numbers */}
          <div className="grid grid-cols-2" style={{ gap: 40 }}>
            {[
              { n: "8", s: "+", l: "Years of Excellence" },
              { n: "150", s: "+", l: "Clients Served" },
              { n: "98", s: "%", l: "Client Retention" },
              { n: "$40", s: "M+", l: "Revenue Generated" },
            ].map((m) => (
              <div key={m.l}>
                <span className="font-heading block" style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.04em", color: "var(--text-dark)", lineHeight: 1 }}>
                  {m.n}<span style={{ color: "var(--cyan-dark)" }}>{m.s}</span>
                </span>
                <span className="block font-body" style={{ fontSize: 13, color: "var(--text-dark-muted)", marginTop: 8 }}>{m.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars — horizontal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 16 }}>
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="transition-all duration-300"
              style={{
                background: "var(--bg-white)",
                border: "1px solid var(--border-dark)",
                borderRadius: 14,
                padding: "32px 28px",
                borderTop: i === 0 ? "3px solid var(--cyan-dark)" : "1px solid var(--border-dark)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--bg-cream)";
                (e.currentTarget as HTMLElement).style.borderTopColor = "var(--cyan-dark)";
                (e.currentTarget as HTMLElement).style.borderTopWidth = "3px";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--bg-white)";
                if (i !== 0) {
                  (e.currentTarget as HTMLElement).style.borderTopColor = "var(--border-dark)";
                  (e.currentTarget as HTMLElement).style.borderTopWidth = "1px";
                }
              }}
            >
              <span className="block font-body" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", color: "var(--cyan-dark)", marginBottom: 14 }}>
                0{i + 1}
              </span>
              <h4 className="font-heading" style={{ fontSize: 17, fontWeight: 600, color: "var(--text-dark)", marginBottom: 10, lineHeight: 1.3 }}>
                {p.title}
              </h4>
              <p className="font-body font-light" style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-dark-muted)" }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
