"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6"];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <div style={{ maxWidth: 780, margin: "48px auto 0" }}>
      {faqKeys.map((key, i) => {
        const isOpen = open === i;
        return (
          <div
            key={key}
            style={{
              marginBottom: 12,
              borderRadius: 14,
              border: isOpen ? "1.5px solid var(--gold)" : "1.5px solid var(--line)",
              background: isOpen ? "white" : "rgba(250,247,242,0.6)",
              boxShadow: isOpen ? "0 8px 32px rgba(201,169,97,0.12), 0 2px 8px rgba(26,58,92,0.06)" : "none",
              transition: "all 0.25s ease",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                padding: "22px 28px",
                textAlign: "left",
                fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                fontSize: 18,
                fontWeight: 700,
                color: isOpen ? "var(--navy)" : "var(--ink)",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 20,
                letterSpacing: "-0.2px",
                lineHeight: 1.3,
              }}
            >
              <span style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <span style={{
                  flexShrink: 0,
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: isOpen ? "var(--gold)" : "var(--bg-warm)",
                  border: isOpen ? "none" : "1.5px solid var(--line)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 800,
                  fontFamily: "inherit",
                  color: isOpen ? "white" : "var(--ink-muted)",
                  marginTop: 2,
                  transition: "all 0.25s",
                  letterSpacing: 0,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{t(`faq.${key}`)}</span>
              </span>

              {/* Icon */}
              <span style={{
                flexShrink: 0,
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: isOpen ? "rgba(201,169,97,0.12)" : "var(--bg-warm)",
                border: isOpen ? "1.5px solid var(--gold)" : "1.5px solid var(--line)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s",
              }}>
                <svg
                  width="12" height="12" viewBox="0 0 24 24"
                  fill="none" stroke={isOpen ? "var(--gold)" : "var(--ink-muted)"}
                  strokeWidth="2.5" strokeLinecap="round"
                  style={{ transition: "transform 0.25s", transform: isOpen ? "rotate(180deg)" : "none" }}
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </span>
            </button>

            {/* Answer panel */}
            <div style={{
              maxHeight: isOpen ? 500 : 0,
              overflow: "hidden",
              transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
            }}>
              <div style={{
                padding: "0 28px 24px 70px",
                fontSize: 15.5,
                color: "var(--ink-soft)",
                lineHeight: 1.7,
              }}
                dangerouslySetInnerHTML={{ __html: t(`faq.a${i + 1}`) }}
              />
            </div>
          </div>
        );
      })}

      <style>{`
        @media (max-width: 600px) {
          .faq-answer-indent { padding-left: 28px !important; }
        }
      `}</style>
    </div>
  );
}
