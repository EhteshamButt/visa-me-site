"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6"];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <div style={{ maxWidth: 760, margin: "40px auto 0" }}>
      {faqKeys.map((key, i) => (
        <div key={key} style={{ borderBottom: "1px solid var(--line)", padding: 0 }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              background: "none",
              border: "none",
              padding: "24px 0",
              textAlign: "left",
              fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
              fontSize: 19,
              fontWeight: 700,
              color: open === i ? "var(--gold)" : "var(--navy)",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 24,
              letterSpacing: "-0.2px",
            }}
          >
            <span>{t(`faq.${key}`)}</span>
            <span style={{
              width: 24, height: 24, flexShrink: 0, position: "relative", display: "inline-block",
            }}>
              <span style={{
                position: "absolute", top: "50%", left: 0, right: 0, height: 2,
                background: "var(--navy)", transform: "translateY(-50%)",
              }} />
              <span style={{
                position: "absolute", left: "50%", top: 0, bottom: 0, width: 2,
                background: "var(--navy)", transform: "translateX(-50%)",
                opacity: open === i ? 0 : 1,
                transition: "opacity 0.3s",
              }} />
            </span>
          </button>
          <div style={{
            maxHeight: open === i ? 400 : 0,
            overflow: "hidden",
            transition: "max-height 0.3s ease",
          }}>
            <div
              style={{ padding: "0 0 24px 0", fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 640 }}
              dangerouslySetInnerHTML={{ __html: t(`faq.a${i + 1}`) }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
