"use client";

import { useState } from "react";
import AtomLogo from "@/components/logo/AtomLogo";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoHover, setLogoHover] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{
        height: 72,
        padding: "0 60px",
        background: "rgba(10,10,15,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        className="flex items-center gap-2 shrink-0"
        onMouseEnter={() => setLogoHover(true)}
        onMouseLeave={() => setLogoHover(false)}
      >
        <div style={{ transition: "transform 0.3s", transform: logoHover ? "rotate(8deg)" : "rotate(0deg)" }}>
          <AtomLogo size={44} dark={true} />
        </div>
        <span
          className="uppercase"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "0.08em",
            color: "var(--text)",
          }}
        >
          Digital Dynamics
        </span>
      </a>

      {/* Center nav links — visible on desktop */}
      <div className="hidden lg:flex items-center gap-10">
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="relative uppercase group"
            style={{
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.08em",
              color: "var(--text-muted)",
              transition: "color 0.2s",
              paddingBottom: 2,
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
          >
            {l.label}
            <span
              className="absolute bottom-0 left-0 right-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              style={{ height: 1, background: "var(--gold)" }}
            />
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden lg:inline-flex items-center justify-center uppercase transition-all duration-200"
        style={{
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "0.06em",
          padding: "10px 26px",
          borderRadius: 4,
          background: "var(--accent)",
          color: "var(--text)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = "var(--accent-hover)";
          el.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = "var(--accent)";
          el.style.transform = "translateY(0)";
        }}
      >
        Get Started
      </a>

      {/* Mobile menu button */}
      <button className="lg:hidden ml-auto p-2" onClick={() => setOpen(!open)} aria-label="Menu">
        <div className="flex flex-col gap-1.5">
          <span className="block w-5 h-0.5 transition-transform duration-300" style={{ background: "var(--text)", transform: open ? "rotate(45deg) translate(2px,2px)" : "none" }} />
          <span className="block w-5 h-0.5 transition-opacity duration-300" style={{ background: "var(--text)", opacity: open ? 0 : 1 }} />
          <span className="block w-5 h-0.5 transition-transform duration-300" style={{ background: "var(--text)", transform: open ? "rotate(-45deg) translate(2px,-2px)" : "none" }} />
        </div>
      </button>

      {open && (
        <div className="absolute top-[72px] left-0 right-0 flex flex-col items-center gap-6 py-8 lg:hidden"
          style={{ background: "rgba(10,10,15,0.97)", backdropFilter: "blur(20px)", borderBottom: "1px solid var(--border)" }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="uppercase"
              style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", color: "var(--text-muted)" }}>{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="uppercase"
            style={{ fontSize: 13, fontWeight: 500, padding: "10px 26px", borderRadius: 4, background: "var(--accent)", color: "var(--text)" }}>
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
