"use client";

const contactItems = [
  { icon: "✉", title: "info@ddcg.net", subtitle: "Email Us" },
  { icon: "📍", title: "Serving Clients Nationwide", subtitle: "Remote & On-Site" },
];

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "var(--bg-light)",
  border: "1px solid var(--border-dark)",
  borderRadius: 10,
  padding: "15px 18px",
  fontSize: 15,
  color: "var(--text-dark)",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
  fontFamily: "var(--font-dm-sans)",
};

function onF(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = "var(--cyan-dark)";
  e.currentTarget.style.boxShadow = "0 0 0 4px rgba(0,200,240,0.08)";
}
function onB(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = "var(--border-dark)";
  e.currentTarget.style.boxShadow = "none";
}

export default function Contact() {
  return (
    <section id="contact" className="section-desktop" style={{ background: "var(--bg-light)", padding: "140px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top heading — full width */}
        <div style={{ marginBottom: 72 }}>
          <div className="flex items-center gap-4" style={{ marginBottom: 24 }}>
            <div style={{ width: 28, height: 2, background: "var(--cyan-dark)", borderRadius: 1 }} />
            <span className="uppercase font-semibold font-body" style={{ fontSize: 11, letterSpacing: "0.16em", color: "var(--cyan-dark)" }}>Get In Touch</span>
          </div>
          <h2 className="font-heading" style={{
            fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.06, color: "var(--text-dark)",
          }}>
            Let&apos;s Build Something <span style={{ color: "var(--cyan-dark)" }}>Great.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5" style={{ gap: 48 }}>
          {/* Left: info — 2 cols */}
          <div className="lg:col-span-2">
            <p className="font-light font-body" style={{ fontSize: 16, lineHeight: 1.85, color: "var(--text-dark-sub)", marginBottom: 36 }}>
              Ready to accelerate your growth? Whether you need a full digital overhaul or a targeted campaign, our team is ready to deliver results.
            </p>

            <div style={{ border: "1px solid var(--border-dark)", borderRadius: 14, overflow: "hidden" }}>
              {contactItems.map((item, i) => (
                <div key={item.subtitle} className="flex items-center transition-colors duration-200"
                  style={{ gap: 18, padding: "20px 24px", background: "var(--bg-white)", borderBottom: i === 0 ? "1px solid var(--border-dark)" : "none" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-cream)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-white)"; }}
                >
                  <div className="flex items-center justify-center shrink-0" style={{
                    width: 44, height: 44, borderRadius: 12, background: "rgba(0,200,240,0.08)", border: "1px solid rgba(0,200,240,0.15)", fontSize: 18,
                  }}>{item.icon}</div>
                  <div>
                    <span className="block font-body" style={{ fontSize: 15, fontWeight: 500, color: "var(--text-dark)" }}>{item.title}</span>
                    <span className="block font-body" style={{ fontSize: 12, color: "var(--text-dark-muted)", marginTop: 2 }}>{item.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form — 3 cols */}
          <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-3 flex flex-col gap-5"
            style={{ background: "var(--bg-white)", border: "1px solid var(--border-dark)", borderRadius: 18, padding: "44px 40px" }}>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block uppercase font-semibold font-body" style={{ fontSize: 11, letterSpacing: "0.10em", color: "var(--text-dark-muted)", marginBottom: 8 }}>Name</label>
                <input type="text" placeholder="Your name" required style={inputBase} onFocus={onF} onBlur={onB} />
              </div>
              <div>
                <label className="block uppercase font-semibold font-body" style={{ fontSize: 11, letterSpacing: "0.10em", color: "var(--text-dark-muted)", marginBottom: 8 }}>Company</label>
                <input type="text" placeholder="Company name" style={inputBase} onFocus={onF} onBlur={onB} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block uppercase font-semibold font-body" style={{ fontSize: 11, letterSpacing: "0.10em", color: "var(--text-dark-muted)", marginBottom: 8 }}>Email</label>
                <input type="email" placeholder="you@company.com" required style={inputBase} onFocus={onF} onBlur={onB} />
              </div>
              <div>
                <label className="block uppercase font-semibold font-body" style={{ fontSize: 11, letterSpacing: "0.10em", color: "var(--text-dark-muted)", marginBottom: 8 }}>Phone</label>
                <input type="tel" placeholder="(555) 000-0000" style={inputBase} onFocus={onF} onBlur={onB} />
              </div>
            </div>

            <div>
              <label className="block uppercase font-semibold font-body" style={{ fontSize: 11, letterSpacing: "0.10em", color: "var(--text-dark-muted)", marginBottom: 8 }}>Service Interest</label>
              <select defaultValue="" style={{ ...inputBase, appearance: "none", color: "var(--text-dark-muted)" }}
                onFocus={onF} onBlur={onB}
                onChange={(e) => { e.currentTarget.style.color = e.currentTarget.value ? "var(--text-dark)" : "var(--text-dark-muted)"; }}>
                <option value="" disabled>Select a service</option>
                <option value="marketing">Marketing & Advertising</option>
                <option value="ai-content">AI Reels & Content Creation</option>
                <option value="digital">Digital Transformation</option>
                <option value="logistics">Logistics & Engineering</option>
                <option value="multiple">Multiple Services</option>
              </select>
            </div>

            <div>
              <label className="block uppercase font-semibold font-body" style={{ fontSize: 11, letterSpacing: "0.10em", color: "var(--text-dark-muted)", marginBottom: 8 }}>Project Description</label>
              <textarea placeholder="Tell us about your project..." rows={5} style={{ ...inputBase, resize: "none" }} onFocus={onF} onBlur={onB} />
            </div>

            <button type="submit" className="font-semibold font-body transition-all duration-200"
              style={{ width: "100%", padding: 18, borderRadius: 10, fontSize: 15, background: "var(--cyan-dark)", color: "#FFFFFF", border: "none", cursor: "pointer", marginTop: 4 }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 8px 32px rgba(0,200,240,0.25)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
