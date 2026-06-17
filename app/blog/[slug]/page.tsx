import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Visa-Me`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="container-narrow article">
      <header className="article-header">
        <div className="article-meta">
          <span>{post.date}</span>
          <span className="dot">•</span>
          <span>{post.category}</span>
          <span className="dot">•</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="article-title">{post.title}</h1>
      </header>
      <div
        className="article-body"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}
