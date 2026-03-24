"use client";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden hero-mobile"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 48px 100px",
        background: "var(--bg)",
      }}
    >
      {/* Large gradient orb — top right */}
      <div className="absolute pointer-events-none" style={{
        top: "-30%", right: "-20%", width: 1200, height: 1200,
        background: "radial-gradient(circle at 40% 40%, rgba(0,212,255,0.12) 0%, rgba(37,99,235,0.06) 30%, transparent 60%)",
        animation: "float 14s ease-in-out infinite",
      }} />

      {/* Secondary warm orb — bottom left */}
      <div className="absolute pointer-events-none" style={{
        bottom: "5%", left: "-10%", width: 600, height: 600,
        background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 50%)",
        animation: "floatSlow 18s ease-in-out infinite",
      }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 0%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 0%, transparent 70%)",
      }} />

      {/* Large decorative ring */}
      <svg className="absolute pointer-events-none" style={{ top: "8%", right: "8%", opacity: 0.08, animation: "spin-slow 90s linear infinite" }}
        width="300" height="300" viewBox="0 0 300 300">
        <circle cx="150" cy="150" r="130" fill="none" stroke="url(#cg1)" strokeWidth="0.8" />
        <circle cx="150" cy="150" r="100" fill="none" stroke="var(--cyan)" strokeWidth="0.4" strokeDasharray="12 8" />
        <circle cx="150" cy="150" r="145" fill="none" stroke="var(--cyan)" strokeWidth="0.3" />
        <defs><linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--cyan)" /><stop offset="100%" stopColor="var(--blue)" />
        </linearGradient></defs>
      </svg>

      {/* Content */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center" style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Eyebrow */}
        <div className="flex items-center gap-4" style={{ marginBottom: 44 }}>
          <div style={{ width: 48, height: 2, background: "var(--cyan)", borderRadius: 1 }} />
          <span className="uppercase font-semibold font-body"
            style={{ fontSize: 12, letterSpacing: "0.18em", color: "var(--cyan)" }}>
            Full-Service Digital &amp; Technology Consultants
          </span>
        </div>

        {/* H1 */}
        <h1 className="font-heading" style={{
          fontSize: "clamp(48px, 8vw, 108px)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1.02,
        }}>
          <span style={{ color: "#FFFFFF" }}>Scale Faster.</span><br />
          <span style={{ color: "var(--cyan)" }}>Build Smarter.</span><br />
          <span style={{ color: "rgba(255,255,255,0.25)" }}>Lead the Market.</span>
        </h1>

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between" style={{ marginTop: 72, gap: 48 }}>
          <p className="font-light font-body" style={{
            fontSize: 18, lineHeight: 1.8, color: "var(--text-sub)", maxWidth: 500, letterSpacing: "0.005em",
          }}>
            Digital Dynamics Consultants Group delivers end-to-end solutions — from
            AI-powered content and aggressive marketing to enterprise-grade tech
            transformation and logistics optimization.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <a href="#contact" className="inline-flex items-center justify-center font-medium font-body transition-all duration-200"
              style={{ padding: "17px 40px", borderRadius: 8, fontSize: 15, background: "var(--cyan)", color: "var(--bg)" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 10px 40px var(--cyan-glow)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}>
              Schedule a Consultation
            </a>
            <a href="#services" className="inline-flex items-center justify-center font-medium font-body transition-all duration-200"
              style={{ padding: "17px 40px", borderRadius: 8, fontSize: 15, border: "1px solid var(--border-light)", color: "var(--text-sub)" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-2px)"; el.style.borderColor = "var(--cyan)"; el.style.color = "var(--cyan)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.borderColor = "var(--border-light)"; el.style.color = "var(--text-sub)"; }}>
              Our Services →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: 1, background: "var(--border)" }} />
    </section>
  );
}
