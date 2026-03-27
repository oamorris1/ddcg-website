"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const contactItems = [
  { icon: "✉", title: "info@ddcg.net", sub: "Email Us" },
  { icon: "📍", title: "Houston, TX — Serving Clients Worldwide", sub: "Location" },
];

const inputStyle: React.CSSProperties = {
  width: "100%", background: "var(--cream2)", border: "1px solid var(--border)", borderRadius: 3,
  padding: "14px 18px", fontSize: 14, color: "var(--ink)", outline: "none", transition: "border-color 0.2s",
  fontFamily: "var(--font-dm-sans)",
};

function onF(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) { e.currentTarget.style.borderColor = "var(--ink3)"; }
function onB(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) { e.currentTarget.style.borderColor = "var(--border)"; }

function M({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    const fd = new FormData(formRef.current);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"), company: fd.get("company"), email: fd.get("email"),
          phone: fd.get("phone"), service: fd.get("service"), message: fd.get("message"),
        }),
      });
      if (res.ok) { setStatus("sent"); formRef.current.reset(); } else { setStatus("error"); }
    } catch { setStatus("error"); }
  }

  return (
    <section id="contact" className="relative overflow-hidden section-pad-mobile" style={{ background: "var(--cream)", borderTop: "1px solid var(--border)", padding: "120px 60px" }}>
      {/* Ghost text */}
      <div className="absolute pointer-events-none select-none hidden lg:block" style={{ bottom: "5%", right: "-2%", zIndex: 0 }}>
        <span style={{
          fontFamily: "var(--font-cormorant)", fontSize: "clamp(160px, 22vw, 300px)", fontWeight: 600, fontStyle: "italic",
          color: "transparent", WebkitTextStroke: "1px rgba(28,28,22,0.04)", lineHeight: 1,
        }}>Hello</span>
      </div>

      <div className="relative z-10" style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top: Image + heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: 64, marginBottom: 72 }}>
          <div>
            <M>
              <div className="flex items-center gap-4" style={{ marginBottom: 24 }}>
                <div style={{ width: 28, height: 1, background: "var(--muted2)" }} />
                <span className="uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", color: "var(--muted)" }}>Get In Touch</span>
              </div>
            </M>
            <M delay={0.1}>
              <h2 style={{
                fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 4.5vw, 58px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.05, color: "var(--ink)", marginBottom: 20,
              }}>
                Let&apos;s Build Something <em style={{ color: "var(--ink3)" }}>Great.</em>
              </h2>
            </M>
            <M delay={0.2}>
              <p className="font-light" style={{ fontSize: 16, lineHeight: 1.9, color: "var(--muted)" }}>
                Ready to accelerate your growth? Our team is ready to deliver results.
              </p>
            </M>
          </div>

          <M delay={0.15}>
            <div className="overflow-hidden" style={{ borderRadius: 16 }}>
              <Image src="/img/contact.png" alt="Welcoming handshake" width={600} height={400}
                className="w-full h-auto object-cover img-zoom" style={{ borderRadius: 16 }} />
            </div>
          </M>
        </div>

        {/* Bottom: Contact info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 100 }}>
          {/* Left — Contact items */}
          <div>
            {contactItems.map((item, i) => (
              <M key={item.sub} delay={i * 0.1}>
                <div className="flex items-center transition-all duration-200"
                  style={{ gap: 18, padding: "22px 0", borderBottom: i === 0 ? "1px solid var(--border)" : "none" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.paddingLeft = "8px"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.paddingLeft = "0px"; }}
                >
                  <div className="flex items-center justify-center shrink-0"
                    style={{ width: 40, height: 40, borderRadius: 4, background: "var(--cream2)", border: "1px solid var(--border)", fontSize: 16 }}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="block" style={{ fontSize: 15, fontWeight: 400, color: "var(--ink)" }}>{item.title}</span>
                    <span className="block" style={{ fontSize: 12, color: "var(--muted)" }}>{item.sub}</span>
                  </div>
                </div>
              </M>
            ))}
          </div>

          {/* Right — Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
            <M delay={0.05}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", color: "var(--muted)", marginBottom: 8 }}>Name</label>
                  <input name="name" type="text" placeholder="Your name" required style={inputStyle} onFocus={onF} onBlur={onB} />
                </div>
                <div>
                  <label className="block uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", color: "var(--muted)", marginBottom: 8 }}>Company</label>
                  <input name="company" type="text" placeholder="Company name" style={inputStyle} onFocus={onF} onBlur={onB} />
                </div>
              </div>
            </M>
            <M delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", color: "var(--muted)", marginBottom: 8 }}>Email</label>
                  <input name="email" type="email" placeholder="you@company.com" required style={inputStyle} onFocus={onF} onBlur={onB} />
                </div>
                <div>
                  <label className="block uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", color: "var(--muted)", marginBottom: 8 }}>Phone</label>
                  <input name="phone" type="tel" placeholder="(555) 000-0000" style={inputStyle} onFocus={onF} onBlur={onB} />
                </div>
              </div>
            </M>
            <M delay={0.15}>
              <div>
                <label className="block uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", color: "var(--muted)", marginBottom: 8 }}>Service Interest</label>
                <select name="service" defaultValue="" style={{ ...inputStyle, appearance: "none", color: "var(--muted)" }} onFocus={onF} onBlur={onB}
                  onChange={(e) => { e.currentTarget.style.color = e.currentTarget.value ? "var(--ink)" : "var(--muted)"; }}>
                  <option value="" disabled>Select a service</option>
                  <option value="Marketing & Advertising">Marketing & Advertising</option>
                  <option value="AI Reels & Content Creation">AI Reels & Content Creation</option>
                  <option value="Digital Transformation">Digital Transformation</option>
                  <option value="Logistics & Engineering">Logistics & Engineering</option>
                  <option value="Multiple Services">Multiple Services</option>
                </select>
              </div>
            </M>
            <M delay={0.2}>
              <div>
                <label className="block uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", color: "var(--muted)", marginBottom: 8 }}>Project Description</label>
                <textarea name="message" placeholder="Tell us about your project..." rows={5} style={{ ...inputStyle, resize: "none" }} onFocus={onF} onBlur={onB} />
              </div>
            </M>

            <M delay={0.3}>
              <motion.button type="submit" disabled={status === "sending"}
                className="uppercase transition-colors duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{ width: "100%", padding: "14px", borderRadius: 4, fontSize: 13, fontWeight: 500, letterSpacing: "0.06em", background: "var(--ink)", color: "var(--cream)", border: "none", cursor: status === "sending" ? "wait" : "pointer", opacity: status === "sending" ? 0.7 : 1 }}>
                {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent!" : "Send Message"}
              </motion.button>
            </M>

            {status === "sent" && (
              <p style={{ fontSize: 14, color: "var(--ink3)", textAlign: "center", marginTop: 4 }}>
                Thank you! We&apos;ll be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p style={{ fontSize: 14, color: "#944", textAlign: "center", marginTop: 4 }}>
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
