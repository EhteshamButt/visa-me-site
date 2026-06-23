"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function ChecklistsPageHeader() {
  const { t } = useLanguage();
  return (
    <header style={{ textAlign: "center", padding: "60px 32px 30px", maxWidth: 760, margin: "0 auto" }}>
      <div style={{
        fontSize: 13, letterSpacing: "2.5px", textTransform: "uppercase",
        color: "var(--gold)", fontWeight: 700, marginBottom: 16,
      }}>{t("checklist.eyebrow")}</div>
      <h1 style={{
        fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
        fontSize: "clamp(34px, 4.5vw, 48px)", lineHeight: 1.1, fontWeight: 700,
        color: "var(--navy)", marginBottom: 18,
      }} dangerouslySetInnerHTML={{ __html: t("checklist.title") }} />
      <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 620, margin: "0 auto" }}>
        {t("checklist.lede")}
      </p>
    </header>
  );
}
