import type { Metadata } from "next";
import Checklists from "@/components/Checklists";

export const metadata: Metadata = {
  title: "Visa-Me Interactive Checklists — Track Your Visa Progress",
  description: "Interactive checklists for U.S. visa applicants. Track your progress through B-1/B-2, F-1, J-1, K-1, IR/CR, and H-1B visa application processes. Your progress saves automatically.",
};

export default function ChecklistsPage() {
  return (
    <>
      <header style={{ textAlign: "center", padding: "60px 32px 30px", maxWidth: 760, margin: "0 auto" }}>
        <div style={{
          fontSize: 13, letterSpacing: "2.5px", textTransform: "uppercase",
          color: "var(--gold)", fontWeight: 700, marginBottom: 16,
        }}>Interactive Checklists</div>
        <h1 style={{
          fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
          fontSize: "clamp(34px, 4.5vw, 48px)", lineHeight: 1.1, fontWeight: 700,
          color: "var(--navy)", marginBottom: 18,
        }}>
          Track your <em style={{ fontStyle: "italic", color: "var(--gold)" }}>visa journey</em>, step by step.
        </h1>
        <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 620, margin: "0 auto" }}>
          Interactive checklists for every visa category in our catalog. Check off tasks as you complete them —
          your progress saves automatically in your browser. No account required.
        </p>
      </header>
      <Checklists />
    </>
  );
}
