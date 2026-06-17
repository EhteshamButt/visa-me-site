"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{
      background: "var(--navy-dark)",
      color: "rgba(255,255,255,0.7)",
      padding: "56px 0 32px",
      fontSize: 14,
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr",
          gap: 40,
          paddingBottom: 32,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}>
          <div>
            <div style={{
              fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
              fontWeight: 900,
              fontSize: 22,
              color: "white",
              marginBottom: 12,
            }}>
              VISA<span style={{ color: "var(--gold)" }}>-</span>ME
            </div>
            <p style={{ color: "rgba(255,255,255,0.55)", marginBottom: 16, maxWidth: 320 }}
              dangerouslySetInnerHTML={{ __html: t("footer.tag") }}
            />
          </div>

          <div>
            <h5 style={{
              color: "white",
              textTransform: "uppercase",
              fontSize: 11,
              letterSpacing: 2,
              marginBottom: 16,
              fontWeight: 800,
            }}>{t("footer.col1")}</h5>
            <ul style={{ listStyle: "none" }}>
              {(["footer.guide1", "footer.guide2", "footer.guide3", "footer.guide4"] as const).map((key) => (
                <li key={key} style={{ padding: "5px 0" }}>
                  <Link href="/#products" style={{ textDecoration: "none", color: "rgba(255,255,255,0.6)", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 style={{
              color: "white",
              textTransform: "uppercase",
              fontSize: 11,
              letterSpacing: 2,
              marginBottom: 16,
              fontWeight: 800,
            }}>{t("footer.col2")}</h5>
            <ul style={{ listStyle: "none" }}>
              {([
                ["nav.faq", "/#faq"],
                ["footer.terms", "/terms"],
                ["footer.privacy", "/privacy"],
                ["footer.contact", "/contact"],
              ] as const).map(([key, href]) => (
                <li key={key} style={{ padding: "5px 0" }}>
                  <Link href={href} style={{ textDecoration: "none", color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{
          background: "rgba(255,255,255,0.04)",
          borderLeft: "3px solid var(--gold)",
          padding: "16px 20px",
          marginTop: 24,
          borderRadius: 4,
          fontSize: 12,
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.6,
        }} dangerouslySetInnerHTML={{ __html: t("footer.disclaimer") }} />

        <div style={{
          paddingTop: 24,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 16,
          fontSize: 12,
          color: "rgba(255,255,255,0.4)",
        }}>
          <div>© 2026 Visa-Me LLC · visa-me.net · All Rights Reserved</div>
          <div>{t("footer.tagline")}</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
