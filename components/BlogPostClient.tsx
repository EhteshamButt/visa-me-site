"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Post } from "@/data/posts";
import { getPostMeta } from "@/data/post-translations";

export default function BlogPostClient({ post }: { post: Post }) {
  const { lang } = useLanguage();
  const meta = getPostMeta(post.slug, lang, post);

  return (
    <main className="container-narrow article">
      <header className="article-header">
        <div className="article-meta">
          <span>{meta.date}</span>
          <span className="dot">•</span>
          <span>{meta.category}</span>
          <span className="dot">•</span>
          <span>{meta.readTime}</span>
        </div>
        <h1 className="article-title">{meta.title}</h1>
      </header>
      <div
        className="article-body"
        dangerouslySetInnerHTML={{ __html: meta.content || post.content }}
      />
    </main>
  );
}
