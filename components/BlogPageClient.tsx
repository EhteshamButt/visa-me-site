"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { posts } from "@/data/posts";
import { getPostMeta } from "@/data/post-translations";

export default function BlogPageClient() {
  const { t, lang } = useLanguage();

  return (
    <>
      <header className="page-header container-narrow">
        <div className="page-eyebrow">{t("blog.eyebrow")}</div>
        <h1 className="page-title" dangerouslySetInnerHTML={{ __html: t("blog.title") }} />
        <p className="page-lede">{t("blog.lede")}</p>
      </header>

      <main className="container-narrow post-list">
        {posts.map((post) => {
          const meta = getPostMeta(post.slug, lang, post);
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
              <div className="post-meta">
                <span>{meta.date}</span>
                <span className="dot">•</span>
                <span>{meta.category}</span>
                <span className="dot">•</span>
                <span>{meta.readTime}</span>
              </div>
              <h2 className="post-title">{meta.title}</h2>
              <p className="post-summary">{meta.summary}</p>
              <span className="post-readmore">{t("blog.readmore")}</span>
            </Link>
          );
        })}
      </main>

      <section className="container-narrow" style={{ paddingBottom: 60 }}>
        <div className="inline-newsletter">
          <h3>{t("blog.newsletter.title")}</h3>
          <p>{t("blog.newsletter.desc")}</p>
          <form
            className="inline-newsletter-form"
            action="https://app.kit.com/forms/9481764/subscriptions"
            method="post"
            target="_blank"
          >
            <input type="hidden" name="fields[language]" value={lang} />
            <input
              type="email"
              name="email_address"
              placeholder={t("blog.newsletter.placeholder")}
              required
            />
            <button type="submit">{t("blog.newsletter.btn")}</button>
          </form>
        </div>
      </section>
    </>
  );
}
