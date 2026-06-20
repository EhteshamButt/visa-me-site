"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const socialLinks = [
  {
    label: "Twitter / X",
    href: "https://x.com/visame",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.737-8.856L2.25 2.25h7.02l4.258 5.633L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/visame",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@visame",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--navy-dark)"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      {/* ── Top brand strip ── */}
      <div style={{
        background: "linear-gradient(135deg, var(--navy-dark) 0%, #16375e 50%, var(--navy) 100%)",
        borderBottom: "1px solid rgba(201,169,97,0.15)",
        padding: "64px 0 52px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background decoration */}
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{
            position: "absolute", top: -80, right: -80,
            width: 480, height: 480,
            background: "radial-gradient(circle, rgba(201,169,97,0.08) 0%, transparent 65%)",
          }} />
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }} />
        </div>

        <div className="container" style={{ position: "relative" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.8fr 1fr 1fr 1.2fr",
            gap: 48,
            alignItems: "start",
          }} className="footer-grid">

            {/* Column 1: Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <div style={{
                  width: 38, height: 38,
                  background: "rgba(201,169,97,0.15)",
                  border: "1px solid rgba(201,169,97,0.3)",
                  borderRadius: 9,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                    fontWeight: 900,
                    fontSize: 20,
                    color: "white",
                    letterSpacing: "-0.3px",
                    lineHeight: 1,
                  }}>
                    VISA<span style={{ color: "var(--gold)" }}>·</span>ME
                  </div>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "2px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginTop: 2 }}>
                    U.S. Visa Guides
                  </div>
                </div>
              </div>

              <p style={{
                color: "rgba(255,255,255,0.52)",
                fontSize: 14,
                lineHeight: 1.75,
                maxWidth: 300,
                marginBottom: 24,
              }} dangerouslySetInnerHTML={{ __html: t("footer.tag") }} />

              {/* Social links */}
              <div style={{ display: "flex", gap: 8 }}>
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      width: 36, height: 36,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 8,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      transition: "background 0.18s, color 0.18s, border-color 0.18s",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = "rgba(201,169,97,0.15)";
                      el.style.borderColor = "rgba(201,169,97,0.4)";
                      el.style.color = "var(--gold)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = "rgba(255,255,255,0.06)";
                      el.style.borderColor = "rgba(255,255,255,0.12)";
                      el.style.color = "rgba(255,255,255,0.55)";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Resources */}
            <div>
              <h5 style={{
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                fontSize: 10,
                letterSpacing: "2.5px",
                marginBottom: 18,
                fontWeight: 800,
              }}>{t("footer.col1")}</h5>
              <ul style={{ listStyle: "none" }}>
                {(["footer.guide1", "footer.guide2", "footer.guide3", "footer.guide4"] as const).map((key) => (
                  <li key={key} style={{ marginBottom: 10 }}>
                    <Link href="/#products" style={{
                      textDecoration: "none",
                      color: "rgba(255,255,255,0.62)",
                      fontSize: 14,
                      fontWeight: 500,
                      transition: "color 0.15s",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                      onMouseEnter={e => (e.currentTarget.style.color = "white")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.62)")}>
                      <span style={{ width: 4, height: 4, background: "var(--gold)", borderRadius: "50%", flexShrink: 0, opacity: 0.6 }} />
                      {t(key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h5 style={{
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                fontSize: 10,
                letterSpacing: "2.5px",
                marginBottom: 18,
                fontWeight: 800,
              }}>{t("footer.col2")}</h5>
              <ul style={{ listStyle: "none" }}>
                {([
                  ["nav.faq", "/#faq"],
                  ["footer.terms", "/terms"],
                  ["footer.privacy", "/privacy"],
                  ["footer.contact", "/contact"],
                  ["Blog", "/blog"],
                ] as const).map(([key, href]) => (
                  <li key={key} style={{ marginBottom: 10 }}>
                    <Link href={href} style={{
                      textDecoration: "none",
                      color: "rgba(255,255,255,0.62)",
                      fontSize: 14,
                      fontWeight: 500,
                      transition: "color 0.15s",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                      onMouseEnter={e => (e.currentTarget.style.color = "white")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.62)")}>
                      <span style={{ width: 4, height: 4, background: "var(--gold)", borderRadius: "50%", flexShrink: 0, opacity: 0.6 }} />
                      {key === "Blog" ? "Blog" : t(key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Trust / CTA */}
            <div>
              <h5 style={{
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                fontSize: 10,
                letterSpacing: "2.5px",
                marginBottom: 18,
                fontWeight: 800,
              }}>Free Resource</h5>

              <div style={{
                background: "rgba(201,169,97,0.08)",
                border: "1px solid rgba(201,169,97,0.2)",
                borderRadius: 12,
                padding: "20px 18px",
              }}>
                <div style={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 10,
                }}>Free Download</div>
                <p style={{
                  color: "rgba(255,255,255,0.72)",
                  fontSize: 13.5,
                  lineHeight: 1.65,
                  marginBottom: 16,
                }}>
                  The U.S. Visa Quick-Start Guide — plain English, no legalese. 7 languages.
                </p>
                <Link href="/#lead-magnet" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: "linear-gradient(135deg, #C9A961 0%, #A8873B 100%)",
                  color: "var(--navy-dark)",
                  padding: "10px 18px",
                  borderRadius: 7,
                  fontWeight: 800,
                  fontSize: 12.5,
                  textDecoration: "none",
                  letterSpacing: "0.2px",
                }}>
                  Get It Free
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Disclaimer ── */}
      <div style={{
        background: "#0f2540",
        padding: "0 0",
      }}>
        <div className="container">
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "24px 0",
          }}>
            <div style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 14,
              fontSize: 11.5,
              color: "rgba(255,255,255,0.38)",
              lineHeight: 1.7,
              maxWidth: 860,
            }}>
              <div style={{
                flexShrink: 0,
                width: 3,
                height: 40,
                background: "linear-gradient(180deg, var(--gold) 0%, transparent 100%)",
                borderRadius: 2,
                marginTop: 2,
              }} />
              <div dangerouslySetInnerHTML={{ __html: t("footer.disclaimer") }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ background: "#0a1e35", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="container">
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            padding: "16px 0",
            fontSize: 12,
            color: "rgba(255,255,255,0.28)",
          }}>
            <div>© 2026 Visa-Me LLC · visa-me.net · All Rights Reserved</div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span>{t("footer.tagline")}</span>
              <div style={{ display: "flex", gap: 12 }}>
                <Link href="/privacy" style={{ color: "rgba(255,255,255,0.28)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.28)")}>
                  Privacy
                </Link>
                <Link href="/terms" style={{ color: "rgba(255,255,255,0.28)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.28)")}>
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
