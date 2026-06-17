import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visa-Me Blog — Plain-English U.S. Visa Updates, News, and Tips",
  description: "The Visa-Me blog: USCIS news, country-specific processing updates, application tips, and plain-English guidance on U.S. visas. Updated regularly.",
};

const posts = [
  {
    slug: "visa-integrity-fee",
    date: "May 12, 2026",
    category: "Policy Update",
    readTime: "6 min read",
    title: "What the New $250 Visa Integrity Fee Means for Your Application",
    summary:
      "In October 2025, the U.S. quietly added a new $250 fee that applies to nearly every nonimmigrant visa category — but only if your visa is approved. Here's what it covers, who pays it, when, and how to budget for it without surprises.",
  },
  {
    slug: "k1-vs-cr1",
    date: "May 5, 2026",
    category: "Comparison Guide",
    readTime: "8 min read",
    title: "K-1 vs. CR-1: Which Visa Should You Choose to Bring Your Partner to the U.S.?",
    summary:
      "Marrying a U.S. citizen and trying to figure out whether to go through the K-1 fiancé(e) route or the CR-1 spouse route? They lead to nearly the same destination but the timelines, costs, and post-arrival rules are very different. Here's how to choose.",
  },
  {
    slug: "b1b2-denials",
    date: "April 28, 2026",
    category: "Common Mistakes",
    readTime: "7 min read",
    title: "5 Reasons B-1/B-2 Tourist Visas Get Denied (and How to Avoid Them)",
    summary:
      "Most B-1/B-2 denials come from a small set of avoidable patterns at the consular interview. Whether you're applying for the first time or reapplying after a 214(b) denial, these are the five things that derail most cases.",
  },
];

export default function BlogPage() {
  return (
    <>
      <header className="page-header container-narrow">
        <div className="page-eyebrow">The Visa-Me Blog</div>
        <h1 className="page-title">
          U.S. visa news, <em>in plain English</em>.
        </h1>
        <p className="page-lede">
          Policy updates, country-specific processing times, application tips, and the small details that matter
          when you&apos;re navigating the U.S. visa system. No legalese.
        </p>
      </header>

      <main className="container-narrow post-list">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
            <div className="post-meta">
              <span>{post.date}</span>
              <span className="dot">•</span>
              <span>{post.category}</span>
              <span className="dot">•</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-summary">{post.summary}</p>
            <span className="post-readmore">Read the full post</span>
          </Link>
        ))}
      </main>

      <section className="container-narrow" style={{ paddingBottom: 60 }}>
        <div className="inline-newsletter">
          <h3>Get new posts and policy updates by email</h3>
          <p>One short email per month. New posts, fee changes, and important USCIS updates. Unsubscribe in one click.</p>
          <form className="inline-newsletter-form" action="https://app.kit.com/forms/9481764/subscriptions" method="post" target="_blank">
            <input type="email" name="email_address" placeholder="your@email.com" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
