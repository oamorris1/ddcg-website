"use client";

import AtomLogo from "@/components/logo/AtomLogo";

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
    <footer style={{ background: "var(--ink)", padding: "0 60px" }}>
      {/* Top */}
      <div className="flex flex-col lg:flex-row lg:justify-between"
        style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 0 56px", borderBottom: "1px solid rgba(245,242,235,0.1)", gap: 56 }}>
        <div style={{ maxWidth: 300 }}>
          <div className="flex items-center gap-2" style={{ marginBottom: 16 }}>
            <AtomLogo size={40} dark={true} />
            <span className="uppercase" style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, fontWeight: 500, letterSpacing: "0.08em", color: "var(--cream)" }}>
              Digital Dynamics
            </span>
          </div>
          <p className="font-light" style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(245,242,235,0.45)" }}>
            Full-service consulting firm delivering marketing, AI content, digital transformation, and logistics solutions.
          </p>
        </div>

        <div className="flex flex-wrap" style={{ gap: 72 }}>
          {linkColumns.map((col) => (
            <div key={col.title}>
              <span className="block uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", color: "rgba(245,242,235,0.35)", marginBottom: 20 }}>
                {col.title}
              </span>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="font-light transition-colors duration-200"
                      style={{ fontSize: 14, color: "rgba(245,242,235,0.5)", textDecoration: "none" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--cream)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(245,242,235,0.5)"; }}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col sm:flex-row sm:justify-between" style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 0", gap: 12 }}>
        <span style={{ fontSize: 12, color: "rgba(245,242,235,0.25)" }}>© {new Date().getFullYear()} Digital Dynamics Consultants Group. All rights reserved.</span>
        <span style={{ fontSize: 12, color: "rgba(245,242,235,0.25)" }}>Built with purpose. Driven by results.</span>
      </div>
    </footer>
  );
}
