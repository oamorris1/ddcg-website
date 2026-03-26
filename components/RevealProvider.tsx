"use client";

import { useEffect } from "react";

export default function RevealProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal, .img-reveal, .scale-reveal").forEach((el) => observer.observe(el));

    // Re-observe on DOM changes for dynamically rendered elements
    const mutation = new MutationObserver(() => {
      document.querySelectorAll(".reveal:not(.visible), .img-reveal:not(.visible), .scale-reveal:not(.visible)").forEach((el) => observer.observe(el));
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return <>{children}</>;
}
