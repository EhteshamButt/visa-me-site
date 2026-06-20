"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type StepKey =
  | "start" | "duration" | "tourist-money" | "marriage-type" | "work-type"
  | "tourist-result" | "tourist-business-result" | "student-result"
  | "spouse-result" | "fiance-result" | "h1b-result" | "l1-result"
  | "b1-result" | "work-other-result" | "long-stay";

type QuizStep = {
  type: "q";
  questionKey: string;
  subKey: string;
  progress: number;
  options: { labelKey: string; next: StepKey; emoji?: string }[];
} | {
  type: "r";
  icon: string;
  titleKey: string;
  bodyKey: string;
  primary: { labelKey: string; target: string };
  secondary?: { labelKey: string; target: string };
};

const quizFlow: Record<StepKey, QuizStep> = {
  start: {
    type: "q",
    questionKey: "quiz.q.1",
    subKey: "quiz.subQ1",
    progress: 0,
    options: [
      { labelKey: "quiz.opt.tourism", next: "duration", emoji: "✈️" },
      { labelKey: "quiz.opt.study", next: "student-result", emoji: "🎓" },
      { labelKey: "quiz.opt.marriage", next: "marriage-type", emoji: "💍" },
      { labelKey: "quiz.opt.work", next: "work-type", emoji: "💼" },
    ],
  },
  duration: {
    type: "q",
    questionKey: "quiz.q.2",
    subKey: "quiz.subQ2",
    progress: 1,
    options: [
      { labelKey: "quiz.opt.short", next: "tourist-money", emoji: "📅" },
      { labelKey: "quiz.opt.long", next: "long-stay", emoji: "🗓️" },
      { labelKey: "quiz.opt.unsure", next: "tourist-money", emoji: "🤔" },
    ],
  },
  "tourist-money": {
    type: "q",
    questionKey: "quiz.q.3",
    subKey: "quiz.subQ3",
    progress: 2,
    options: [
      { labelKey: "quiz.opt.payself", next: "tourist-result", emoji: "💰" },
      { labelKey: "quiz.opt.paysponsor", next: "tourist-result", emoji: "🤝" },
      { labelKey: "quiz.opt.paywork", next: "tourist-business-result", emoji: "🏢" },
    ],
  },
  "marriage-type": {
    type: "q",
    questionKey: "quiz.q.marriage",
    subKey: "quiz.subQ2",
    progress: 1,
    options: [
      { labelKey: "quiz.opt.married", next: "spouse-result", emoji: "💑" },
      { labelKey: "quiz.opt.fiance", next: "fiance-result", emoji: "💌" },
      { labelKey: "quiz.opt.dating", next: "tourist-result", emoji: "🌹" },
    ],
  },
  "work-type": {
    type: "q",
    questionKey: "quiz.q.work",
    subKey: "quiz.subQ2",
    progress: 1,
    options: [
      { labelKey: "quiz.opt.h1b", next: "h1b-result", emoji: "🔬" },
      { labelKey: "quiz.opt.l1", next: "l1-result", emoji: "🌐" },
      { labelKey: "quiz.opt.b1", next: "b1-result", emoji: "📊" },
      { labelKey: "quiz.opt.workother", next: "work-other-result", emoji: "❓" },
    ],
  },
  "tourist-result": {
    type: "r",
    icon: "B-2",
    titleKey: "quiz.result.tourist.title",
    bodyKey: "quiz.result.tourist.body",
    primary: { labelKey: "quiz.result.cta.guide", target: "#products" },
    secondary: { labelKey: "quiz.result.cta.free", target: "#lead-magnet" },
  },
  "tourist-business-result": {
    type: "r",
    icon: "B-1",
    titleKey: "quiz.result.b1.title",
    bodyKey: "quiz.result.b1.body",
    primary: { labelKey: "quiz.result.cta.guide", target: "#products" },
    secondary: { labelKey: "quiz.result.cta.free", target: "#lead-magnet" },
  },
  "student-result": {
    type: "r",
    icon: "F-1",
    titleKey: "quiz.result.f1.title",
    bodyKey: "quiz.result.f1.body",
    primary: { labelKey: "quiz.result.cta.guide", target: "#products" },
    secondary: { labelKey: "quiz.result.cta.free", target: "#lead-magnet" },
  },
  "spouse-result": {
    type: "r",
    icon: "IR",
    titleKey: "quiz.result.ir.title",
    bodyKey: "quiz.result.ir.body",
    primary: { labelKey: "quiz.result.cta.guide", target: "#products" },
    secondary: { labelKey: "quiz.result.cta.free", target: "#lead-magnet" },
  },
  "fiance-result": {
    type: "r",
    icon: "K-1",
    titleKey: "quiz.result.k1.title",
    bodyKey: "quiz.result.k1.body",
    primary: { labelKey: "quiz.result.cta.guide", target: "#products" },
    secondary: { labelKey: "quiz.result.cta.free", target: "#lead-magnet" },
  },
  "h1b-result": {
    type: "r",
    icon: "H-1B",
    titleKey: "quiz.result.h1b.title",
    bodyKey: "quiz.result.h1b.body",
    primary: { labelKey: "quiz.result.cta.notify", target: "#lead-magnet" },
  },
  "l1-result": {
    type: "r",
    icon: "L-1",
    titleKey: "quiz.result.l1.title",
    bodyKey: "quiz.result.l1.body",
    primary: { labelKey: "quiz.result.cta.free", target: "#lead-magnet" },
  },
  "b1-result": {
    type: "r",
    icon: "B-1",
    titleKey: "quiz.result.b1biz.title",
    bodyKey: "quiz.result.b1biz.body",
    primary: { labelKey: "quiz.result.cta.guide", target: "#products" },
    secondary: { labelKey: "quiz.result.cta.free", target: "#lead-magnet" },
  },
  "work-other-result": {
    type: "r",
    icon: "?",
    titleKey: "quiz.result.other.title",
    bodyKey: "quiz.result.other.body",
    primary: { labelKey: "quiz.result.cta.free", target: "#lead-magnet" },
  },
  "long-stay": {
    type: "r",
    icon: "!",
    titleKey: "quiz.result.longstay.title",
    bodyKey: "quiz.result.longstay.body",
    primary: { labelKey: "quiz.result.cta.free", target: "#lead-magnet" },
  },
};

// Fallback English strings for result keys not in TRANSLATIONS
const fallbackEn: Record<string, string> = {
  "quiz.result.tourist.title": "B-1/B-2 Tourist Visa",
  "quiz.result.tourist.body": "Based on your answers, the B-1/B-2 visitor visa fits your situation. This is the most common nonimmigrant visa — it covers tourism, family visits, and most short business trips.",
  "quiz.result.b1.title": "B-1 Business Visa",
  "quiz.result.b1.body": "For employer-paid short business trips — meetings, negotiations, conferences — the B-1 visa is what you need. Our B-1/B-2 guide covers it in detail, including the rules around what you can and cannot do on a B-1.",
  "quiz.result.f1.title": "F-1 Student Visa",
  "quiz.result.f1.body": "You'll need an F-1 student visa, which requires admission to a SEVP-certified U.S. school and a Form I-20. Our F-1 guide walks through SEVIS payment, the I-20, financial documentation, and the F-1-specific interview questions.",
  "quiz.result.ir.title": "IR/CR Spouse Visa",
  "quiz.result.ir.body": "For a foreign spouse of a U.S. citizen or lawful permanent resident, the IR-1 or CR-1 visa is the main pathway. Our spouse visa guide covers the full timeline.",
  "quiz.result.k1.title": "K-1 Fiancé(e) Visa",
  "quiz.result.k1.body": "You'll need a K-1 fiancé(e) visa, which lets your fiancé(e) enter the U.S. for the purpose of getting married within 90 days. Our K-1 guide covers everything from petition to wedding to adjustment of status.",
  "quiz.result.h1b.title": "H-1B Worker Visa",
  "quiz.result.h1b.body": "The H-1B is for specialty occupations requiring a bachelor's degree or equivalent. It involves an annual lottery, an employer petition, and a consular interview.",
  "quiz.result.l1.title": "L-1 Intracompany Transfer",
  "quiz.result.l1.body": "The L-1 visa is for transferring within a multinational company — for executives, managers (L-1A), or specialized knowledge workers (L-1B).",
  "quiz.result.b1biz.title": "B-1 Business Visitor",
  "quiz.result.b1biz.body": "For short business meetings or negotiations — without working for a U.S. employer — the B-1 is the right fit.",
  "quiz.result.other.title": "You may need expert help",
  "quiz.result.other.body": "There are many specialized work visa categories. Many of these benefit from speaking with a licensed immigration attorney. Get our free Quick-Start to understand the basics first.",
  "quiz.result.longstay.title": "You may need a different visa",
  "quiz.result.longstay.body": "Tourist visas generally limit each visit to 6 months. For longer stays, you typically need a different visa category. Our Quick-Start guide will help you understand the alternatives.",
  "quiz.result.cta.guide": "Get the Guide",
  "quiz.result.cta.free": "Free Quick-Start First",
  "quiz.result.cta.notify": "Notify Me",
};

export default function Quiz() {
  const [history, setHistory] = useState<StepKey[]>([]);
  const [current, setCurrent] = useState<StepKey>("start");
  const [hoveredOpt, setHoveredOpt] = useState<string | null>(null);
  const { t } = useLanguage();

  function tWithFallback(key: string): string {
    const translated = t(key);
    if (translated === key && fallbackEn[key]) return fallbackEn[key];
    return translated;
  }

  const step = quizFlow[current];

  function goTo(next: StepKey) {
    setHistory((h) => [...h, current]);
    setCurrent(next);
  }

  function goBack() {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setCurrent(prev);
  }

  function restart() {
    setHistory([]);
    setCurrent("start");
  }

  if (step.type === "q") {
    const totalSteps = 3;
    const progressPct = ((step.progress) / totalSteps) * 100;

    return (
      <div>
        {/* Progress bar */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--ink-muted)", letterSpacing: "0.5px", textTransform: "uppercase" }}>
              Step {step.progress + 1} of {totalSteps}
            </span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--gold)" }}>{Math.round((step.progress / totalSteps) * 100)}% complete</span>
          </div>
          <div style={{
            height: 6,
            background: "var(--line)",
            borderRadius: 99,
            overflow: "hidden",
          }}>
            <div style={{
              height: "100%",
              width: `${progressPct}%`,
              background: "linear-gradient(90deg, var(--navy), var(--gold))",
              borderRadius: 99,
              transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)",
            }} />
          </div>
        </div>

        {/* Sub label */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: "rgba(201,169,97,0.1)",
          border: "1px solid rgba(201,169,97,0.25)",
          borderRadius: 99,
          padding: "4px 12px",
          fontSize: 12,
          fontWeight: 700,
          color: "var(--gold)",
          letterSpacing: "0.3px",
          marginBottom: 16,
        }}>
          <span>●</span>
          <span>{tWithFallback(step.subKey)}</span>
        </div>

        {/* Question */}
        <div style={{
          fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
          fontSize: "clamp(22px, 4vw, 30px)",
          fontWeight: 800,
          lineHeight: 1.25,
          color: "var(--navy)",
          marginBottom: 28,
          letterSpacing: "-0.5px",
        }}>
          {tWithFallback(step.questionKey)}
        </div>

        {/* Options */}
        <div style={{ display: "grid", gap: 10, marginBottom: 28 }}>
          {step.options.map((opt) => {
            const isHovered = hoveredOpt === opt.next;
            return (
              <button
                key={opt.next}
                onClick={() => goTo(opt.next)}
                onMouseEnter={() => setHoveredOpt(opt.next)}
                onMouseLeave={() => setHoveredOpt(null)}
                style={{
                  background: isHovered ? "white" : "rgba(250,247,242,0.8)",
                  border: isHovered ? "2px solid var(--gold)" : "2px solid var(--line)",
                  padding: "16px 20px",
                  borderRadius: 12,
                  textAlign: "left",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: 15,
                  fontWeight: 600,
                  color: isHovered ? "var(--navy)" : "var(--ink)",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  transition: "all 0.18s ease",
                  transform: isHovered ? "translateX(4px)" : "none",
                  boxShadow: isHovered ? "0 4px 16px rgba(201,169,97,0.15)" : "none",
                }}
              >
                {opt.emoji && (
                  <span style={{
                    width: 36,
                    height: 36,
                    flexShrink: 0,
                    borderRadius: "50%",
                    background: isHovered ? "rgba(201,169,97,0.12)" : "var(--bg-warm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                    transition: "background 0.18s",
                  }}>
                    {opt.emoji}
                  </span>
                )}
                <span style={{ flex: 1 }}>{tWithFallback(opt.labelKey)}</span>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke={isHovered ? "var(--gold)" : "var(--ink-muted)"}
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{ flexShrink: 0, transition: "stroke 0.18s, transform 0.18s", transform: isHovered ? "translateX(2px)" : "none" }}
                >
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            );
          })}
        </div>

        {/* Back button */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            onClick={goBack}
            disabled={history.length === 0}
            style={{
              background: "none",
              border: "none",
              fontFamily: "inherit",
              fontSize: 13,
              color: "var(--ink-muted)",
              cursor: history.length === 0 ? "default" : "pointer",
              padding: "6px 0",
              fontWeight: 600,
              opacity: history.length === 0 ? 0 : 1,
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "color 0.15s",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            {tWithFallback("quiz.back")}
          </button>
        </div>
      </div>
    );
  }

  // Result screen
  return (
    <div style={{ textAlign: "center", padding: "8px 0 4px" }}>
      {/* Visa badge */}
      <div style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 88,
        height: 88,
        borderRadius: "50%",
        background: "linear-gradient(135deg, var(--navy) 0%, #2a4a70 100%)",
        boxShadow: "0 8px 32px rgba(26,58,92,0.25), 0 0 0 6px rgba(201,169,97,0.12)",
        margin: "0 auto 24px",
      }}>
        <span style={{
          color: "var(--gold)",
          fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
          fontWeight: 900,
          fontSize: step.icon.length > 3 ? 15 : 20,
          letterSpacing: "-0.5px",
          lineHeight: 1,
        }}>
          {step.icon}
        </span>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", fontWeight: 600, letterSpacing: "1px", marginTop: 3 }}>VISA</span>
      </div>

      {/* Match label */}
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: "rgba(45,106,79,0.08)",
        border: "1px solid rgba(45,106,79,0.2)",
        borderRadius: 99,
        padding: "4px 14px",
        fontSize: 12,
        fontWeight: 700,
        color: "#2d6a4f",
        letterSpacing: "0.3px",
        marginBottom: 16,
      }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        Your best match
      </div>

      <h3 style={{
        fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
        fontSize: "clamp(24px, 4vw, 34px)",
        fontWeight: 800,
        color: "var(--navy)",
        marginBottom: 14,
        letterSpacing: "-0.5px",
        lineHeight: 1.2,
      }}>
        {tWithFallback(step.titleKey)}
      </h3>

      <p style={{
        color: "var(--ink-soft)",
        fontSize: 15.5,
        maxWidth: 460,
        margin: "0 auto 32px",
        lineHeight: 1.65,
      }}>
        {tWithFallback(step.bodyKey)}
      </p>

      {/* CTA buttons */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 24 }}>
        <a
          href={step.primary.target}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
            color: "white",
            padding: "13px 28px",
            borderRadius: 10,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: 15,
            boxShadow: "0 4px 16px rgba(26,58,92,0.25)",
            transition: "transform 0.18s, box-shadow 0.18s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(26,58,92,0.3)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "none";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(26,58,92,0.25)";
          }}
        >
          {tWithFallback(step.primary.labelKey)}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>

        {step.secondary && (
          <a
            href={step.secondary.target}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "transparent",
              color: "var(--navy)",
              border: "2px solid var(--navy)",
              padding: "13px 28px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 15,
              transition: "background 0.18s, color 0.18s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--navy)";
              (e.currentTarget as HTMLAnchorElement).style.color = "white";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--navy)";
            }}
          >
            {tWithFallback(step.secondary.labelKey)}
          </a>
        )}
      </div>

      <button
        onClick={restart}
        style={{
          background: "none",
          border: "none",
          color: "var(--ink-muted)",
          fontFamily: "inherit",
          fontSize: 13,
          marginTop: 4,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontWeight: 600,
          padding: "6px 10px",
          borderRadius: 6,
          transition: "color 0.15s, background 0.15s",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.color = "var(--navy)";
          (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-warm)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.color = "var(--ink-muted)";
          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="1 4 1 10 7 10"/>
          <path d="M3.51 15a9 9 0 1 0 .49-3.18"/>
        </svg>
        {tWithFallback("quiz.restart")}
      </button>
    </div>
  );
}
