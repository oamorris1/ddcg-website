"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    num: "01",
    title: "Marketing & Advertising",
    desc: "Full-funnel marketing strategies that combine data-driven paid media, organic growth, and brand positioning to capture market share and drive measurable ROI.",
    tags: ["Social Media", "Paid Ads", "Traditional Media", "Brand Strategy", "SEO/SEM"],
    image: "/img/svc-marketing.png",
    alt: "Marketing strategist capturing brand stories across multiple screens",
    focus: "center 25%",
  },
  {
    num: "02",
    title: "AI Reels & Content Creation",
    desc: "Next-gen content production powered by AI tools — from viral short-form video to brand storytelling that scales output without sacrificing quality.",
    tags: ["AI Video", "Reels & Shorts", "Brand Films", "Content Strategy"],
    image: "/img/svc-ai-content.png",
    alt: "Content director orchestrating AI-powered holographic reels",
    focus: "center 30%",
  },
  {
    num: "03",
    title: "Digital Transformation",
    desc: "End-to-end technology modernization — from legacy system migration and cloud infrastructure to custom software engineering and agile delivery.",
    tags: ["SDLC", "Data Migration", "Cloud Infra", "Software Engineering", "Agile"],
    image: "/img/svc-digital-transform.png",
    alt: "Executive leading digital transformation from a modern command center",
    focus: "center 25%",
  },
  {
    num: "04",
    title: "Logistics & Engineering",
    desc: "Operational excellence through optimized supply chains, engineering planning, and process design that reduces costs and improves delivery timelines.",
    tags: ["Supply Chain", "Operations", "Engineering Planning", "Process Design"],
    image: "/img/svc-logistics.png",
    alt: "Operations leader overseeing futuristic logistics network",
    focus: "70% 15%",
  },
];

function ServicePanel({ service, index }: { service: typeof services[0]; index: number }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!panelRef.current || !imgRef.current || !overlayRef.current || !contentRef.current) return;

      const rect = panelRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // How far through this panel we've scrolled (0 = just entering, 1 = leaving)
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height - vh)));

      // Image zoom: starts at 1.15, settles to 1.0 in middle, then zooms to 1.1 on exit
      const enterZoom = 1.15 - scrollProgress * 0.15;
      const exitZoom = scrollProgress > 0.7 ? 1 + (scrollProgress - 0.7) * 0.33 : 0;
      const scale = scrollProgress <= 0.7 ? enterZoom : 1 + exitZoom * 0.1;
      imgRef.current.style.transform = `scale(${scale})`;

      // Content appears FIRST — very early, almost immediately
      let contentOpacity: number;
      let contentY: number;
      if (scrollProgress < 0.05) {
        contentOpacity = scrollProgress / 0.05;
        contentY = (1 - contentOpacity) * 24;
      } else if (scrollProgress > 0.8) {
        contentOpacity = 1 - (scrollProgress - 0.8) / 0.2;
        contentY = (1 - contentOpacity) * -20;
      } else {
        contentOpacity = 1;
        contentY = 0;
      }
      contentRef.current.style.opacity = String(contentOpacity);
      contentRef.current.style.transform = `translateY(${contentY}px)`;

      // Image emerges AFTER text — full black on enter/exit, no bleed-through
      let darkness: number;
      if (scrollProgress < 0.08) {
        // Entering: completely black, then reveal
        darkness = 1;
      } else if (scrollProgress < 0.22) {
        // Image revealing from black
        darkness = 1 - ((scrollProgress - 0.08) / 0.14);
      } else if (scrollProgress > 0.78) {
        // Exiting: fade to complete black
        darkness = (scrollProgress - 0.78) / 0.22;
      } else {
        darkness = 0;
      }
      const baseDarkness = 0.35;
      const totalDarkness = Math.min(1, baseDarkness + darkness * 0.65);
      overlayRef.current.style.background = `rgba(0,0,0,${totalDarkness})`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={panelRef}
      style={{
        height: "200vh", // scroll runway — 2x viewport gives room for the animation
        position: "relative",
      }}
    >
      {/* Sticky container — pinned to viewport while scrolling through */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Background image — full bleed */}
        <Image
          ref={imgRef}
          src={service.image}
          alt={service.alt}
          fill
          className="object-cover"
          style={{
            willChange: "transform",
            transition: "transform 0.1s linear",
            objectPosition: service.focus,
          }}
          sizes="100vw"
          priority={index === 0}
        />

        {/* Dark overlay — controls the burn/wipe effect */}
        <div
          ref={overlayRef}
          className="absolute inset-0"
          style={{
            background: "rgba(0,0,0,0.95)",
            willChange: "background",
            transition: "background 0.1s linear",
            zIndex: 1,
          }}
        />

        {/* Grain texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            opacity: 0.04,
            zIndex: 2,
          }}
        />

        {/* Content overlay */}
        <div
          ref={contentRef}
          className="absolute inset-0 flex items-center"
          style={{
            zIndex: 3,
            padding: "0 60px",
            willChange: "transform, opacity",
            transition: "transform 0.1s linear, opacity 0.1s linear",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
            <div style={{ maxWidth: 600 }}>
              {/* Number */}
              <span style={{
                fontFamily: "var(--font-cormorant)", fontSize: 22, fontStyle: "italic",
                color: "rgba(245,242,235,0.5)", display: "block", marginBottom: 20,
              }}>
                {service.num}
              </span>

              {/* Title */}
              <h3 style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                marginBottom: 20,
                lineHeight: 1.08,
              }}>
                {service.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: 24, lineHeight: 1.7, fontWeight: 300,
                color: "rgba(245,242,235,0.75)",
                marginBottom: 36, maxWidth: 520,
              }}>
                {service.desc}
              </p>

              {/* Divider */}
              <div style={{ width: 56, height: 1, background: "rgba(245,242,235,0.25)", marginBottom: 28 }} />

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {service.tags.map((tag) => (
                  <span key={tag} className="uppercase"
                    style={{
                      fontSize: 13, fontWeight: 500, letterSpacing: "0.05em",
                      color: "rgba(245,242,235,0.65)",
                      border: "1px solid rgba(245,242,235,0.2)",
                      borderRadius: 4, padding: "8px 18px",
                    }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services">
      {/* Section header — cream background */}
      <div
        className="section-pad-mobile"
        style={{
          background: "var(--cream2)",
          borderTop: "1px solid var(--border)",
          padding: "120px 60px 80px",
        }}
      >
        <div className="reveal" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="flex items-center gap-4" style={{ marginBottom: 24 }}>
            <div style={{ width: 28, height: 1, background: "var(--muted2)" }} />
            <span className="uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", color: "var(--muted)" }}>What We Do</span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-cormorant)", fontSize: "clamp(44px, 5.5vw, 72px)",
            fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.05, color: "var(--ink)",
          }}>
            Full-Spectrum <em style={{ color: "var(--ink3)" }}>Expertise</em> Under One Roof
          </h2>
          <p className="font-light" style={{ fontSize: 16, lineHeight: 1.85, color: "var(--muted)", marginTop: 20, maxWidth: 560 }}>
            We bring together the disciplines that drive growth — strategy, creative, technology, and operations.
          </p>
        </div>
      </div>

      {/* Full-screen scroll panels */}
      {services.map((s, i) => (
        <ServicePanel key={s.num} service={s} index={i} />
      ))}
    </section>
  );
}
