"use client";
import Link from "next/link";

export default function Footer() {
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
            <p style={{ color: "rgba(255,255,255,0.55)", marginBottom: 16, maxWidth: 320 }}>
              Plain-English self-help guides for U.S. visa applicants. Published by Visa-Me LLC at{" "}
              <strong style={{ color: "var(--gold)" }}>visa-me.net</strong>.
            </p>
          </div>

          <div>
            <h5 style={{
              color: "white",
              textTransform: "uppercase",
              fontSize: 11,
              letterSpacing: 2,
              marginBottom: 16,
              fontWeight: 800,
            }}>Guides</h5>
            <ul style={{ listStyle: "none" }}>
              {[
                ["Tourist (B-1/B-2)", "/#products"],
                ["Student (F-1)", "/#products"],
                ["Fiancé(e) (K-1)", "/#products"],
                ["Spouse (IR/CR)", "/#products"],
              ].map(([label, href]) => (
                <li key={label} style={{ padding: "5px 0" }}>
                  <Link href={href} style={{ textDecoration: "none", color: "rgba(255,255,255,0.6)", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
                    {label}
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
            }}>Company</h5>
            <ul style={{ listStyle: "none" }}>
              {[
                ["FAQ", "/#faq"],
                ["Blog", "/blog"],
                ["Terms of Service", "/terms"],
                ["Privacy Policy", "/privacy"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label} style={{ padding: "5px 0" }}>
                  <Link href={href} style={{ textDecoration: "none", color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
                    {label}
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
        }}>
          <strong style={{ color: "var(--gold)" }}>Important:</strong> Visa-Me is a publisher of educational self-help materials.
          We are not a law firm, do not provide legal advice, and cannot guarantee any visa outcome.
          Visa approval is at the sole discretion of U.S. consular officers. For questions about your specific situation,
          consult a licensed immigration attorney. Always verify current fees and procedures at travel.state.gov.
        </div>

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
          <div>Made with care for legal immigrants worldwide</div>
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
