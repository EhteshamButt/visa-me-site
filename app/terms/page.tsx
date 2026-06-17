import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Visa-Me",
  description: "Visa-Me Terms of Service. Plain-English terms covering our digital guides, refund policy, disclaimers, and your rights.",
};

const legalStyle: React.CSSProperties = {
  maxWidth: 760,
  margin: "0 auto",
  padding: "0 32px",
};

export default function TermsPage() {
  return (
    <>
      <section style={{ padding: "64px 0 40px", background: "var(--cream)", borderBottom: "1px solid var(--line)" }}>
        <div style={legalStyle}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold)", marginBottom: 14 }}>Legal</div>
          <h1 style={{
            fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
            fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 900, color: "var(--navy)",
            letterSpacing: "-1px", lineHeight: 1.05, marginBottom: 16,
          }}>Terms of Service</h1>
          <p style={{ color: "var(--ink-muted)", fontSize: 14 }}>Last updated: May 7, 2026</p>
        </div>
      </section>

      <main style={{ background: "var(--paper)", padding: "56px 0 80px" }}>
        <div style={legalStyle}>
          <div style={{ fontSize: 16, lineHeight: 1.7, color: "#333" }}>

            <div style={{ background: "var(--bg-warm)", borderLeft: "4px solid var(--gold)", padding: "20px 22px", borderRadius: 4, margin: "0 0 32px" }}>
              <strong style={{ color: "#8B6914" }}>Plain-English summary:</strong> We sell PDF guides. They&apos;re final sale but come with lifetime free updates. We&apos;re not a law firm and can&apos;t guarantee visa outcomes. Use this site at your own risk. If you have a legal question about your specific situation, please consult a licensed immigration attorney.
            </div>

            <h2 style={{ fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)", fontSize: 26, fontWeight: 800, color: "var(--navy)", marginBottom: 16, letterSpacing: "-0.3px" }}>1. Who We Are</h2>
            <p>Visa-Me LLC (&quot;Visa-Me,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a publisher of self-help educational materials, operating at visa-me.net. We are not a law firm, an attorney, or an immigration consultant.</p>

            <h2 style={{ fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)", fontSize: 26, fontWeight: 800, color: "var(--navy)", marginTop: 48, marginBottom: 16, letterSpacing: "-0.3px" }}>2. Not Legal Advice</h2>
            <p>All content on this website — including blog posts, articles, guides, checklists, and any other materials — is for general educational purposes only. It is <strong>not legal advice</strong> and does not create an attorney-client relationship.</p>
            <p>Visa law is complex and fact-specific. Laws, fees, and procedures change frequently. We make every effort to keep our content accurate and up-to-date, but we cannot guarantee that every piece of information on this site is current at the moment you read it.</p>
            <p><strong>For your specific immigration situation, please consult a licensed immigration attorney.</strong> This is particularly important if you have prior visa denials, criminal history, complex family situations, or any other complicating factors.</p>

            <h2 style={{ fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)", fontSize: 26, fontWeight: 800, color: "var(--navy)", marginTop: 48, marginBottom: 16, letterSpacing: "-0.3px" }}>3. Our Products</h2>
            <p>We sell downloadable PDF guides covering U.S. visa processes. These guides are educational materials designed to help you understand the application process, prepare documentation, and prepare for consular interviews.</p>
            <p>Our guides do not guarantee visa approval. Visa approval is at the sole discretion of U.S. consular officers and USCIS. Purchasing our guides does not confer any right to, or expectation of, a particular visa outcome.</p>

            <h2 style={{ fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)", fontSize: 26, fontWeight: 800, color: "var(--navy)", marginTop: 48, marginBottom: 16, letterSpacing: "-0.3px" }}>4. Refund Policy</h2>
            <p>All sales of digital guides are <strong>final</strong>. Because our guides are instant-download digital products, we do not offer refunds after purchase.</p>
            <p><strong>What you do get:</strong> Lifetime free updates. If fees change, rules change, or we substantially revise a guide, all existing customers receive the updated version at no additional cost. If you have a technical problem with a download (file corruption, delivery failure, etc.), contact us within 7 days and we will resolve it promptly.</p>

            <h2 style={{ fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)", fontSize: 26, fontWeight: 800, color: "var(--navy)", marginTop: 48, marginBottom: 16, letterSpacing: "-0.3px" }}>5. Intellectual Property</h2>
            <p>All guides, articles, checklists, templates, and other content on this site are the copyrighted property of Visa-Me LLC. You may use purchased guides for your own personal immigration application only. You may not:</p>
            <ul style={{ margin: "0 0 18px 24px" }}>
              <li>Resell, redistribute, or share our guides with others</li>
              <li>Post our guides or any portion of them publicly online</li>
              <li>Use our guides in a commercial service without written permission</li>
              <li>Represent our content as your own</li>
            </ul>

            <h2 style={{ fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)", fontSize: 26, fontWeight: 800, color: "var(--navy)", marginTop: 48, marginBottom: 16, letterSpacing: "-0.3px" }}>6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Visa-Me LLC shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of this website, your use of our guides, or any visa decision made by a U.S. government authority.</p>
            <p>Our total liability to you for any claim arising from use of this site or our products shall not exceed the amount you paid for the specific product at issue.</p>

            <h2 style={{ fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)", fontSize: 26, fontWeight: 800, color: "var(--navy)", marginTop: 48, marginBottom: 16, letterSpacing: "-0.3px" }}>7. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. We will note the updated date at the top of this page. Continued use of the site after changes constitutes acceptance of the updated terms.</p>

            <h2 style={{ fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)", fontSize: 26, fontWeight: 800, color: "var(--navy)", marginTop: 48, marginBottom: 16, letterSpacing: "-0.3px" }}>8. Contact</h2>
            <p>Questions about these terms? Email us at <a href="mailto:legal@visa-me.net" style={{ color: "var(--navy)" }}>legal@visa-me.net</a> or use the <Link href="/contact" style={{ color: "var(--navy)" }}>contact form</Link>.</p>
          </div>
        </div>
      </main>
    </>
  );
}
