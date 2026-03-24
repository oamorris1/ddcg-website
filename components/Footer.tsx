"use client";

const linkColumns = [
  { title: "Services", links: [
    { label: "Marketing", href: "#services" }, { label: "AI Content", href: "#services" },
    { label: "Digital Transformation", href: "#services" }, { label: "Logistics", href: "#services" },
  ]},
  { title: "Company", links: [
    { label: "About Us", href: "#about" }, { label: "Our Work", href: "#portfolio" },
    { label: "Contact", href: "#contact" }, { label: "Privacy Policy", href: "#" },
  ]},
  { title: "Connect", links: [
    { label: "LinkedIn", href: "#" }, { label: "Instagram", href: "#" },
    { label: "Twitter/X", href: "#" }, { label: "YouTube", href: "#" },
  ]},
];

export default function Footer() {
  return (
    <footer className="footer-mobile" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "0 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top */}
        <div className="flex flex-col lg:flex-row lg:justify-between"
          style={{ padding: "72px 0 56px", borderBottom: "1px solid var(--border)", gap: 56 }}>
          <div style={{ maxWidth: 320 }}>
            <div className="flex items-center gap-3" style={{ marginBottom: 20 }}>
              <div className="flex items-center justify-center font-heading font-bold text-white"
                style={{ width: 38, height: 38, borderRadius: 10, fontSize: 15, background: "linear-gradient(135deg, var(--cyan), var(--blue))" }}>
                DD
              </div>
              <span className="font-heading" style={{ fontSize: 18, fontWeight: 600, color: "var(--text)" }}>
                Digital <span style={{ color: "var(--cyan)" }}>Dynamics</span>
              </span>
            </div>
            <p className="font-light font-body" style={{ fontSize: 14, lineHeight: 1.75, color: "var(--text-muted)" }}>
              Full-service consulting firm delivering marketing, AI content,
              digital transformation, and logistics solutions that drive real growth.
            </p>
          </div>

          <div className="flex flex-wrap" style={{ gap: 72 }}>
            {linkColumns.map((col) => (
              <div key={col.title}>
                <span className="font-heading block uppercase" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.10em", color: "var(--text)", marginBottom: 22 }}>
                  {col.title}
                </span>
                <ul className="flex flex-col gap-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="font-body transition-colors duration-200"
                        style={{ fontSize: 14, color: "var(--text-muted)", textDecoration: "none" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--cyan)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center" style={{ padding: "28px 0", gap: 12 }}>
          <span className="font-body" style={{ fontSize: 13, color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Digital Dynamics Consultants Group. All rights reserved.
          </span>
          <span className="font-body" style={{ fontSize: 13, color: "var(--text-muted)" }}>
            Built with purpose. Driven by results.
          </span>
        </div>
      </div>
    </footer>
  );
}
