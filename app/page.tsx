import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Visa-Me — Plain-English Guides to U.S. Visas | visa-me.net",
  description:
    "Self-help guides, document checklists, and templates for U.S. tourist, student, and family visas. Updated for the 2026 $250 Visa Integrity Fee.",
};

export default function Home() {
  return <HomeClient />;
}
