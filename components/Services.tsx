"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Brand Identity & Visual Production",
    desc: "Complete brand identity creation — from product imaging and visual assets to cohesive brand systems that define how the world sees you. We design, produce, and deliver everything your brand needs to stand out.",
    tags: ["Brand Identity", "Product Imaging", "Visual Assets", "Brand Systems", "Creative Production"],
    video: "/video/new_market260fps.mp4",
    focus: "center 25%",
  },
  {
    num: "02",
    title: "AI Content & Custom Characters",
    desc: "High-quality content engineered for engagement, powered by custom AI character models built exclusively for your brand. From viral reels to long-form storytelling — all driven by personas that own your visual identity.",
    tags: ["AI Video", "Custom Characters", "Reels & Shorts", "Brand Personas", "Content Strategy", "Digital Avatars"],
    video: "/video/hero3.mp4",
    focus: "center 30%",
  },
  {
    num: "03",
    title: "Social Media & Brand Strategy",
    desc: "Full-spectrum brand planning from content calendars to SEO, analytics dashboards, and campaign execution — a complete command center for your digital presence.",
    tags: ["Social Media", "Brand Strategy", "SEO", "Analytics", "Campaign Management"],
    video: "/video/seo.mp4",
    focus: "center 20%",
  },
];

/* Animated button that assembles into place */
function AssembleButton({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.span ref={ref} initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }} className="inline-block">
      {children}
    </motion.span>
  );
}

function ServicePanel({ service }: { service: typeof services[0] }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!panelRef.current || !videoRef.current || !overlayRef.current || !contentRef.current) return;

      const rect = panelRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height - vh)));

      // Video zoom
      const enterZoom = 1.15 - scrollProgress * 0.4;
      const exitZoom = scrollProgress > 0.7 ? 1 + (scrollProgress - 0.7) * 0.33 : 0;
      const scale = scrollProgress <= 0.7 ? Math.max(0.75, enterZoom) : 1 + exitZoom * 0.1;
      videoRef.current.style.transform = `scale(${scale})`;

      // Content appears FIRST
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

      // Full black transitions
      let darkness: number;
      if (scrollProgress < 0.08) {
        darkness = 1;
      } else if (scrollProgress < 0.22) {
        darkness = 1 - ((scrollProgress - 0.08) / 0.14);
      } else if (scrollProgress > 0.78) {
        darkness = (scrollProgress - 0.78) / 0.22;
      } else {
        darkness = 0;
      }
      const totalDarkness = Math.min(1, 0.4 + darkness * 0.6);
      overlayRef.current.style.background = `rgba(10,10,15,${totalDarkness})`;

      // Play/pause video based on visibility
      const isVisible = scrollProgress > 0.05 && scrollProgress < 0.9;
      if (isVisible && videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      } else if (!isVisible && !videoRef.current.paused) {
        videoRef.current.pause();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={panelRef} style={{ height: "200vh", position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        {/* Video background */}
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            willChange: "transform",
            transition: "transform 0.1s linear",
            objectPosition: service.focus,
          }}
        >
          <source src={service.video} type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div ref={overlayRef} className="absolute inset-0"
          style={{ background: "rgba(10,10,15,0.95)", willChange: "background", transition: "background 0.1s linear", zIndex: 1 }} />

        {/* Grain */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          opacity: 0.04, zIndex: 2,
        }} />

        {/* Content */}
        <div ref={contentRef} className="absolute inset-0 flex items-center"
          style={{ zIndex: 3, padding: "0 60px", willChange: "transform, opacity", transition: "transform 0.1s linear, opacity 0.1s linear" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
            <div style={{ maxWidth: 600 }}>
              <span style={{ fontSize: 14, fontWeight: 400, letterSpacing: "0.12em", color: "var(--gold)", opacity: 0.6, display: "block", marginBottom: 20 }}>
                {service.num}
              </span>
              <h3 style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#FFFFFF", marginBottom: 20, lineHeight: 1.08 }}>
                {service.title}
              </h3>
              <p style={{ fontSize: 20, lineHeight: 1.7, fontWeight: 300, color: "rgba(255,255,255,0.6)", marginBottom: 36, maxWidth: 520 }}>
                {service.desc}
              </p>
              <div style={{ width: 56, height: 1, background: "var(--gold)", opacity: 0.25, marginBottom: 28 }} />
              <div className="flex flex-wrap gap-3">
                {service.tags.map((tag) => (
                  <span key={tag} className="uppercase"
                    style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.05em", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 4, padding: "8px 18px" }}>
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
      {/* Intro section */}
      <div className="section-pad-mobile" style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "120px 60px 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <h2 style={{
              fontFamily: "var(--font-dm-sans)", fontSize: "clamp(40px, 6vw, 80px)",
              fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.0, color: "var(--text)",
            }}>
              <span className="block">Create Boldly.</span>
              <span className="block" style={{ color: "var(--text-muted)" }}>Film Brilliantly.</span>
              <span className="block">Brand Strategically.</span>
            </h2>
          </div>

          <div className="reveal reveal-delay-1 grid grid-cols-1 lg:grid-cols-2" style={{ gap: 48, marginBottom: 64 }}>
            <p className="font-light" style={{ fontSize: 18, lineHeight: 1.8, color: "var(--text-muted)", maxWidth: 520 }}>
              AI-powered film production, custom character models, and full-spectrum
              brand strategy — everything you need to dominate the digital landscape.
            </p>
            <div>
              <div className="flex items-center gap-4" style={{ marginBottom: 20 }}>
                <div style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.4 }} />
                <span className="uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", color: "var(--text-muted2)" }}>What We Do</span>
              </div>
              <p className="font-light" style={{ fontSize: 16, lineHeight: 1.85, color: "var(--text-muted)" }}>
                Full-Spectrum <span style={{ fontWeight: 600, color: "var(--text2)" }}>Creative & Strategy</span> Under One Roof — we bring together the disciplines that drive modern brands: film, content, character development, and digital strategy.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {["Brand Identity", "AI Content & Characters", "Brand Strategy"].map((label, i) => (
              <AssembleButton key={label} delay={i * 0.12}>
                <a href={`#svc-${i}`} className="inline-flex items-center justify-center uppercase transition-all duration-300"
                  style={{ padding: "12px 28px", borderRadius: 4, fontSize: 12, fontWeight: 500, letterSpacing: "0.06em", border: "1px solid var(--border)", color: "var(--text-muted2)" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-2px)"; el.style.borderColor = "rgba(255,255,255,0.3)"; el.style.color = "var(--text)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.borderColor = "var(--border)"; el.style.color = "var(--text-muted2)"; }}>
                  {label} →
                </a>
              </AssembleButton>
            ))}
          </div>
        </div>
      </div>

      {/* Full-screen video scroll panels */}
      {services.map((s) => (
        <ServicePanel key={s.num} service={s} />
      ))}
    </section>
  );
}
