"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (window.innerWidth <= 900) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };

    const onHover = () => {
      if (dotRef.current) dotRef.current.style.width = dotRef.current.style.height = "6px";
      if (ringRef.current) ringRef.current.style.width = ringRef.current.style.height = "56px";
    };
    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.width = dotRef.current.style.height = "10px";
      if (ringRef.current) ringRef.current.style.width = ringRef.current.style.height = "36px";
    };

    let raf: number;
    const loop = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        const w = parseFloat(ringRef.current.style.width) || 36;
        ringRef.current.style.transform = `translate(${ring.current.x - w / 2}px, ${ring.current.y - w / 2}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, .service-row, .portfolio-row, .pillar").forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onLeave);
    });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] hidden lg:block"
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.9)",
          transition: "width 0.2s, height 0.2s",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] hidden lg:block"
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1px solid var(--gold)",
          opacity: 0.5,
          transition: "width 0.3s, height 0.3s",
        }}
      />
    </>
  );
}
