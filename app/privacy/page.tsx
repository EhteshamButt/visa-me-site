import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Visa-Me",
  description: "Visa-Me Privacy Policy. We collect minimal data, never sell your information, and explain everything in plain English.",
};

export default function PrivacyPage() {
  const legalStyle: React.CSSProperties = { maxWidth: 760, margin: "0 auto", padding: "0 32px" };
  const h2Style: React.CSSProperties = {
    fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
    fontSize: 26, fontWeight: 800, color: "var(--navy)",
    marginTop: 48, marginBottom: 16, letterSpacing: "-0.3px",
  };

  return (
    <>
      <section style={{ padding: "64px 0 40px", background: "var(--cream)", borderBottom: "1px solid var(--line)" }}>
        <div style={legalStyle}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold)", marginBottom: 14 }}>Legal</div>
          <h1 style={{
            fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
            fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 900, color: "var(--navy)",
            letterSpacing: "-1px", lineHeight: 1.05, marginBottom: 16,
          }}>Privacy Policy</h1>
          <p style={{ color: "var(--ink-muted)", fontSize: 14 }}>Last updated: May 7, 2026</p>
        </div>
      </section>

      <main style={{ background: "var(--paper)", padding: "56px 0 80px" }}>
        <div style={legalStyle}>
          <div style={{ fontSize: 16, lineHeight: 1.7, color: "#333" }}>

            <div style={{ background: "var(--bg-warm)", borderLeft: "4px solid var(--gold)", padding: "20px 22px", borderRadius: 4, margin: "0 0 32px" }}>
              <strong style={{ color: "#8B6914" }}>Plain-English summary:</strong> We collect your email only when you voluntarily give it (to get the free guide or buy something). We don&apos;t sell your data. We use basic analytics. You can ask us to delete your data at any time.
            </div>

            <h2 style={h2Style}>1. What We Collect</h2>
            <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--navy)", marginTop: 28, marginBottom: 10 }}>Information you give us</h3>
            <ul style={{ margin: "0 0 18px 24px" }}>
              <li><strong>Email address</strong> — when you subscribe to our newsletter or download the free guide, or when you email us directly.</li>
              <li><strong>Contact form submissions</strong> — name, email, and message content when you fill out our contact form.</li>
              <li><strong>Purchase information</strong> — when you buy a guide through Gumroad, Gumroad processes the transaction. We receive your email address and purchase confirmation. We do not handle or store your payment card information.</li>
            </ul>

            <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--navy)", marginTop: 28, marginBottom: 10 }}>Information collected automatically</h3>
            <ul style={{ margin: "0 0 18px 24px" }}>
              <li><strong>Analytics data</strong> — we use basic web analytics to understand how visitors use our site (pages visited, time on site, referral source). This data is aggregated and not linked to individual identities.</li>
              <li><strong>Checklist progress</strong> — if you use our interactive checklists, your progress is stored locally in your browser using localStorage. This data never leaves your device and is not sent to our servers.</li>
            </ul>

            <h2 style={h2Style}>2. How We Use Your Information</h2>
            <ul style={{ margin: "0 0 18px 24px" }}>
              <li>To send you the free guide you requested</li>
              <li>To send you our newsletter (if you subscribed)</li>
              <li>To respond to your contact form messages</li>
              <li>To send you product updates (if you bought a guide)</li>
              <li>To understand how our site is being used so we can improve it</li>
            </ul>

            <h2 style={h2Style}>3. What We Don&apos;t Do</h2>
            <ul style={{ margin: "0 0 18px 24px" }}>
              <li>We do <strong>not</strong> sell your data to third parties</li>
              <li>We do <strong>not</strong> share your email with advertisers</li>
              <li>We do <strong>not</strong> use your data for behavioral advertising</li>
              <li>We do <strong>not</strong> store your checklist progress on our servers</li>
            </ul>

            <h2 style={h2Style}>4. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul style={{ margin: "0 0 18px 24px" }}>
              <li><strong>Kit (formerly ConvertKit)</strong> — email marketing and newsletter delivery. Your email is stored in Kit&apos;s system. You can unsubscribe at any time using the link in any email.</li>
              <li><strong>Gumroad</strong> — payment processing and guide delivery. Gumroad has its own privacy policy governing transactions.</li>
              <li><strong>Basic analytics</strong> — we use aggregated analytics to understand traffic patterns. No individual tracking.</li>
            </ul>

            <h2 style={h2Style}>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul style={{ margin: "0 0 18px 24px" }}>
              <li><strong>Unsubscribe</strong> from our emails at any time using the unsubscribe link in any email, or by emailing us.</li>
              <li><strong>Request deletion</strong> of your data by emailing <a href="mailto:legal@visa-me.net" style={{ color: "var(--navy)" }}>legal@visa-me.net</a>.</li>
              <li><strong>Request a copy</strong> of what data we hold about you.</li>
            </ul>
            <p>If you are in the European Economic Area, you have additional rights under GDPR. If you are a California resident, you have rights under CCPA. Email us at <a href="mailto:legal@visa-me.net" style={{ color: "var(--navy)" }}>legal@visa-me.net</a> to exercise any of these rights.</p>

            <h2 style={h2Style}>6. Changes to This Policy</h2>
            <p>We may update this policy from time to time. We will update the date at the top of this page when we do. We won&apos;t make material changes to how we use your data without notifying active email subscribers.</p>

            <h2 style={h2Style}>7. Contact</h2>
            <p>Questions about your privacy? Email <a href="mailto:legal@visa-me.net" style={{ color: "var(--navy)" }}>legal@visa-me.net</a> or use the <Link href="/contact" style={{ color: "var(--navy)" }}>contact form</Link>.</p>
          </div>
        </div>
      </main>
    </>
  );
}
