import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Visa-Me",
  description: "Visa-Me affiliate disclosure. We explain when and how we may earn commissions from links on our site.",
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <section style={{ padding: "64px 0 40px", background: "var(--cream)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold)", marginBottom: 14 }}>Legal</div>
          <h1 style={{
            fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
            fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 900, color: "var(--navy)",
            letterSpacing: "-1px", lineHeight: 1.05, marginBottom: 16,
          }}>Affiliate Disclosure</h1>
          <p style={{ color: "var(--ink-muted)", fontSize: 14 }}>Last updated: May 7, 2026</p>
        </div>
      </section>

      <main style={{ background: "var(--paper)", padding: "56px 0 80px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px", fontSize: 16, lineHeight: 1.7, color: "#333" }}>

          <div style={{ background: "var(--bg-warm)", borderLeft: "4px solid var(--gold)", padding: "20px 22px", borderRadius: 4, marginBottom: 32 }}>
            <strong style={{ color: "#8B6914" }}>Short version:</strong> Our primary products are our own PDF guides, sold directly. If we ever link to third-party products or services that pay us a commission, we&apos;ll say so clearly.
          </div>

          <h2 style={{ fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)", fontSize: 26, fontWeight: 800, color: "var(--navy)", marginBottom: 16, letterSpacing: "-0.3px" }}>
            Our Primary Business
          </h2>
          <p>Visa-Me&apos;s primary business is selling our own PDF guides directly to customers. The guides linked on this site — B-1/B-2, F-1, K-1, IR/CR, J-1, and H-1B guides — are our own products sold through Gumroad. There is no affiliate relationship involved in these sales; we receive the full purchase price (minus Gumroad&apos;s processing fees).</p>

          <h2 style={{ fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)", fontSize: 26, fontWeight: 800, color: "var(--navy)", marginTop: 48, marginBottom: 16, letterSpacing: "-0.3px" }}>
            Third-Party Links and Potential Affiliate Relationships
          </h2>
          <p>From time to time, our blog posts or other content may link to third-party products, books, software, or services. If such a link is an affiliate link — meaning we receive a commission if you purchase through it — we will clearly disclose that relationship with language such as &quot;(affiliate link)&quot; or &quot;(we may earn a commission)&quot; near the link.</p>
          <p>As of the date of this disclosure, we do not have active affiliate relationships with any third-party products or services. If this changes, we will update this page and label affiliate links clearly in our content.</p>

          <h2 style={{ fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)", fontSize: 26, fontWeight: 800, color: "var(--navy)", marginTop: 48, marginBottom: 16, letterSpacing: "-0.3px" }}>
            Our Editorial Standards
          </h2>
          <p>We only recommend products and services we genuinely believe are useful to visa applicants. Affiliate compensation, if any, does not influence whether we recommend a product or what we say about it. If we say a resource is useful, it&apos;s because we think it&apos;s useful — not because we&apos;re paid to say so.</p>
          <p>We never receive payment or compensation from government agencies, embassies, consulates, or legal firms. We are entirely independent from any government entity.</p>

          <h2 style={{ fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)", fontSize: 26, fontWeight: 800, color: "var(--navy)", marginTop: 48, marginBottom: 16, letterSpacing: "-0.3px" }}>
            FTC Disclosure Compliance
          </h2>
          <p>This disclosure is made in accordance with the Federal Trade Commission&apos;s guidelines concerning the use of endorsements and testimonials in advertising (16 CFR Part 255). If you have questions about our affiliate practices, please contact us at <a href="mailto:hello@visa-me.net" style={{ color: "var(--navy)" }}>hello@visa-me.net</a> or through our <Link href="/contact" style={{ color: "var(--navy)" }}>contact form</Link>.</p>
        </div>
      </main>
    </>
  );
}
