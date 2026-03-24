"use client";

import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{
        height: 72,
        padding: "0 48px",
        background: "rgba(5,7,9,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <a href="#" className="flex items-center gap-3 shrink-0">
        <div
          className="flex items-center justify-center font-heading font-bold text-white"
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            fontSize: 15,
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, var(--cyan) 0%, var(--blue) 100%)",
          }}
        >
          DD
        </div>
        <span className="font-heading" style={{ fontSize: 18, fontWeight: 600, color: "var(--text)" }}>
          Digital <span style={{ color: "var(--cyan)" }}>Dynamics</span>
        </span>
      </a>

      <div className="hidden lg:flex items-center gap-10">
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="uppercase transition-colors duration-200"
            style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", color: "var(--text-muted)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
          >
            {l.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="hidden lg:inline-flex items-center justify-center uppercase font-semibold transition-all duration-200"
        style={{
          fontSize: 12,
          letterSpacing: "0.06em",
          padding: "11px 28px",
          borderRadius: 6,
          background: "var(--cyan)",
          color: "var(--bg)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(-1px)";
          el.style.boxShadow = "0 6px 28px var(--cyan-glow)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "none";
        }}
      >
        Get Started
      </a>

      <button className="lg:hidden ml-auto p-2" onClick={() => setOpen(!open)} aria-label="Menu">
        <div className="flex flex-col gap-1.5">
          <span className="block w-5 h-0.5 transition-transform duration-300" style={{ background: "var(--text)", transform: open ? "rotate(45deg) translate(2px,2px)" : "none" }} />
          <span className="block w-5 h-0.5 transition-opacity duration-300" style={{ background: "var(--text)", opacity: open ? 0 : 1 }} />
          <span className="block w-5 h-0.5 transition-transform duration-300" style={{ background: "var(--text)", transform: open ? "rotate(-45deg) translate(2px,-2px)" : "none" }} />
        </div>
      </button>

      {open && (
        <div className="absolute top-[72px] left-0 right-0 flex flex-col items-center gap-6 py-8 lg:hidden"
          style={{ background: "rgba(5,7,9,0.97)", backdropFilter: "blur(20px)", borderBottom: "1px solid var(--border)" }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="uppercase" style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", color: "var(--text-sub)" }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="uppercase font-semibold"
            style={{ fontSize: 12, padding: "10px 26px", borderRadius: 6, background: "var(--cyan)", color: "var(--bg)" }}>
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
