import type { Metadata } from "next";
import BlogPageClient from "@/components/BlogPageClient";

export const metadata: Metadata = {
  title: "Visa-Me Blog — Plain-English U.S. Visa Updates, News, and Tips",
  description: "The Visa-Me blog: USCIS news, country-specific processing updates, application tips, and plain-English guidance on U.S. visas. Updated regularly.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}
