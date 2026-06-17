import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Visa-Me",
  description: "Get in touch with the Visa-Me team. Support, partnerships, press, and feedback — we're real people and we read every message.",
};

const cards = [
  {
    label: "Support",
    title: "Issue with a guide?",
    desc: "Download not working, file won't open, didn't get your update email — we'll fix it fast.",
    email: "support@visa-me.net",
  },
  {
    label: "General",
    title: "Questions or feedback?",
    desc: "Spotted an error in a guide, have a suggestion, or want to know if a future guide is coming? Tell us.",
    email: "hello@visa-me.net",
  },
  {
    label: "Press & Partnerships",
    title: "Working on a story or partnership?",
    desc: "Journalists, immigration nonprofits, attorneys looking to refer clients — we'd love to talk.",
    email: "press@visa-me.net",
  },
  {
    label: "Legal & Privacy",
    title: "Privacy or legal request?",
    desc: "Privacy rights requests (access, delete), legal inquiries, or DMCA notices.",
    email: "legal@visa-me.net",
  },
];

export default function ContactPage() {
  return (
    <>
      <section style={{
        padding: "64px 0 40px",
        background: "var(--cream)",
        borderBottom: "1px solid var(--line)",
      }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold)", marginBottom: 14 }}>
            Get in Touch
          </div>
          <h1 style={{
            fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 900, color: "var(--navy)", letterSpacing: "-1px", lineHeight: 1.05, marginBottom: 14,
          }}>Talk to us.</h1>
          <p style={{ fontSize: 18, color: "var(--ink-soft)", maxWidth: 540 }}>
            Real people read every message. We aim to respond within one business day, and faster for technical issues with downloads.
          </p>
        </div>
      </section>

      <main style={{ background: "var(--paper)", padding: "56px 0 80px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px" }}>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 28, marginBottom: 48,
          }}>
            {cards.map((card) => (
              <div key={card.label} className="contact-card" style={{
                background: "var(--paper)",
                border: "1px solid var(--line)",
                borderRadius: 12, padding: "28px 26px",
                transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
              }}>
                <div style={{ fontSize: 11, letterSpacing: "1.8px", textTransform: "uppercase", fontWeight: 800, color: "var(--gold)", marginBottom: 6 }}>
                  {card.label}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                  fontSize: 22, fontWeight: 800, color: "var(--navy)", marginBottom: 8, letterSpacing: "-0.3px",
                }}>{card.title}</h3>
                <p style={{ fontSize: 14.5, color: "var(--ink-soft)", marginBottom: 16 }}>{card.desc}</p>
                <a href={`mailto:${card.email}`} style={{
                  display: "inline-block",
                  fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                  fontSize: 18, fontWeight: 800, color: "var(--navy)",
                  textDecoration: "none", borderBottom: "2px solid var(--gold)", paddingBottom: 2,
                }}>{card.email}</a>
              </div>
            ))}
          </div>

          <div style={{
            background: "var(--bg-warm)", borderRadius: 16, padding: 40, marginTop: 32,
          }}>
            <h2 style={{
              fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
              fontSize: 28, fontWeight: 800, color: "var(--navy)", letterSpacing: "-0.3px", marginBottom: 8,
            }}>Or send us a message here.</h2>
            <p style={{ color: "var(--ink-soft)", fontSize: 15, marginBottom: 24 }}>
              Prefer a form? Fill this out and we&apos;ll reply to the email you provide.
            </p>
            <ContactForm />
          </div>

          <div style={{
            background: "rgba(45,106,79,0.08)",
            borderLeft: "4px solid var(--green)",
            borderRadius: 4, padding: "18px 22px", marginTop: 40,
            fontSize: 14.5, color: "#1a4530",
          }}>
            <strong style={{ color: "var(--green)" }}>Response times:</strong> We aim to reply to support requests within one business day, often faster. Press, partnership, and legal inquiries may take up to three business days. We&apos;re a small team — we read everything, but we don&apos;t have a 24/7 support line.
          </div>
        </div>
      </main>

      <style>{`
        @media (max-width: 640px) {
          main > div > div:first-child { grid-template-columns: 1fr !important; }
        }
        .contact-card:hover {
          border-color: var(--gold) !important;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(26,58,92,0.08);
        }
      `}</style>
    </>
  );
}
