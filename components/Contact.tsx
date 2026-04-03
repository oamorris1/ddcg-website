"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const contactItems = [
  { icon: "\u2709", title: "info@ddcg.net", sub: "Email Us" },
  { icon: "\uD83D\uDCCD", title: "Houston, TX \u2014 Serving Clients Worldwide", sub: "Location" },
];

const inputStyle: React.CSSProperties = {
  width: "100%", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 3,
  padding: "14px 18px", fontSize: 14, color: "var(--text)", outline: "none", transition: "border-color 0.2s",
  fontFamily: "var(--font-dm-sans)",
};

function onF(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) { e.currentTarget.style.borderColor = "var(--accent)"; }
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
    <section id="contact" className="relative overflow-hidden section-pad-mobile" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "120px 60px" }}>
      {/* Ghost text */}
      <div className="absolute pointer-events-none select-none hidden lg:block" style={{ bottom: "5%", right: "-2%", zIndex: 0 }}>
        <span style={{
          fontFamily: "var(--font-dm-sans)", fontSize: "clamp(160px, 22vw, 300px)", fontWeight: 800,
          color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.02)", lineHeight: 1,
        }}>Hello</span>
      </div>

      <div className="relative z-10" style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top: Image + heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: 64, marginBottom: 72 }}>
          <div>
            <M>
              <div className="flex items-center gap-4" style={{ marginBottom: 24 }}>
                <div style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.4 }} />
                <span className="uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", color: "var(--text-muted2)" }}>Get In Touch</span>
              </div>
            </M>
            <M delay={0.1}>
              <h2 style={{
                fontFamily: "var(--font-dm-sans)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, color: "var(--text)", marginBottom: 20,
              }}>
                Let&apos;s Create Something <span style={{ color: "var(--text-muted)" }}>Extraordinary.</span>
              </h2>
            </M>
            <M delay={0.2}>
              <p className="font-light" style={{ fontSize: 16, lineHeight: 1.9, color: "var(--text-muted)" }}>
                Ready to elevate your brand? Our team is ready to bring your vision to life.
              </p>
            </M>
          </div>

          <M delay={0.15}>
            <div className="overflow-hidden" style={{ borderRadius: 16 }}>
              <Image src="/img/contact.png" alt="Creative collaboration" width={600} height={400}
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
                    style={{ width: 40, height: 40, borderRadius: 4, background: "var(--surface)", border: "1px solid var(--border)", fontSize: 16 }}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="block" style={{ fontSize: 15, fontWeight: 400, color: "var(--text)" }}>{item.title}</span>
                    <span className="block" style={{ fontSize: 12, color: "var(--text-muted2)" }}>{item.sub}</span>
                  </div>
                </div>
              </M>
            ))}

            {/* Calendly placeholder */}
            <M delay={0.2}>
              <div style={{ marginTop: 32, padding: "24px", borderRadius: 8, background: "var(--surface)", border: "1px solid var(--border)" }}>
                <span className="block uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", color: "var(--gold)", marginBottom: 8 }}>Coming Soon</span>
                <span className="block" style={{ fontSize: 15, color: "var(--text-muted)" }}>Book a call directly on our calendar</span>
              </div>
            </M>
          </div>

          {/* Right — Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
            <M delay={0.05}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", color: "var(--text-muted2)", marginBottom: 8 }}>Name</label>
                  <input name="name" type="text" placeholder="Your name" required style={inputStyle} onFocus={onF} onBlur={onB} />
                </div>
                <div>
                  <label className="block uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", color: "var(--text-muted2)", marginBottom: 8 }}>Company</label>
                  <input name="company" type="text" placeholder="Company name" style={inputStyle} onFocus={onF} onBlur={onB} />
                </div>
              </div>
            </M>
            <M delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", color: "var(--text-muted2)", marginBottom: 8 }}>Email</label>
                  <input name="email" type="email" placeholder="you@company.com" required style={inputStyle} onFocus={onF} onBlur={onB} />
                </div>
                <div>
                  <label className="block uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", color: "var(--text-muted2)", marginBottom: 8 }}>Phone</label>
                  <input name="phone" type="tel" placeholder="(555) 000-0000" style={inputStyle} onFocus={onF} onBlur={onB} />
                </div>
              </div>
            </M>
            <M delay={0.15}>
              <div>
                <label className="block uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", color: "var(--text-muted2)", marginBottom: 8 }}>Service Interest</label>
                <select name="service" defaultValue="" style={{ ...inputStyle, appearance: "none", color: "var(--text-muted)" }} onFocus={onF} onBlur={onB}
                  onChange={(e) => { e.currentTarget.style.color = e.currentTarget.value ? "var(--text)" : "var(--text-muted)"; }}>
                  <option value="" disabled>Select a service</option>
                  <option value="Film & Cinematography">Film & Cinematography</option>
                  <option value="AI Content Creation">AI Content Creation</option>
                  <option value="Custom Character Models">Custom Character Models</option>
                  <option value="Social Media & Brand Strategy">Social Media & Brand Strategy</option>
                  <option value="Multiple Services">Multiple Services</option>
                </select>
              </div>
            </M>
            <M delay={0.2}>
              <div>
                <label className="block uppercase" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", color: "var(--text-muted2)", marginBottom: 8 }}>Project Description</label>
                <textarea name="message" placeholder="Tell us about your project..." rows={5} style={{ ...inputStyle, resize: "none" }} onFocus={onF} onBlur={onB} />
              </div>
            </M>

            <M delay={0.3}>
              <motion.button type="submit" disabled={status === "sending"}
                className="uppercase transition-colors duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{ width: "100%", padding: "14px", borderRadius: 4, fontSize: 13, fontWeight: 500, letterSpacing: "0.06em", background: "var(--accent)", color: "var(--text)", border: "none", cursor: status === "sending" ? "wait" : "pointer", opacity: status === "sending" ? 0.7 : 1 }}>
                {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent!" : "Send Message"}
              </motion.button>
            </M>

            {status === "sent" && (
              <p style={{ fontSize: 14, color: "var(--accent-hover)", textAlign: "center", marginTop: 4 }}>
                Thank you! We&apos;ll be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p style={{ fontSize: 14, color: "#C44", textAlign: "center", marginTop: 4 }}>
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
