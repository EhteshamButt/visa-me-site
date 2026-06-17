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
  options: { labelKey: string; next: StepKey }[];
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
      { labelKey: "quiz.opt.tourism", next: "duration" },
      { labelKey: "quiz.opt.study", next: "student-result" },
      { labelKey: "quiz.opt.marriage", next: "marriage-type" },
      { labelKey: "quiz.opt.work", next: "work-type" },
    ],
  },
  duration: {
    type: "q",
    questionKey: "quiz.q.2",
    subKey: "quiz.subQ2",
    progress: 1,
    options: [
      { labelKey: "quiz.opt.short", next: "tourist-money" },
      { labelKey: "quiz.opt.long", next: "long-stay" },
      { labelKey: "quiz.opt.unsure", next: "tourist-money" },
    ],
  },
  "tourist-money": {
    type: "q",
    questionKey: "quiz.q.3",
    subKey: "quiz.subQ3",
    progress: 2,
    options: [
      { labelKey: "quiz.opt.payself", next: "tourist-result" },
      { labelKey: "quiz.opt.paysponsor", next: "tourist-result" },
      { labelKey: "quiz.opt.paywork", next: "tourist-business-result" },
    ],
  },
  "marriage-type": {
    type: "q",
    questionKey: "quiz.q.marriage",
    subKey: "quiz.subQ2",
    progress: 1,
    options: [
      { labelKey: "quiz.opt.married", next: "spouse-result" },
      { labelKey: "quiz.opt.fiance", next: "fiance-result" },
      { labelKey: "quiz.opt.dating", next: "tourist-result" },
    ],
  },
  "work-type": {
    type: "q",
    questionKey: "quiz.q.work",
    subKey: "quiz.subQ2",
    progress: 1,
    options: [
      { labelKey: "quiz.opt.h1b", next: "h1b-result" },
      { labelKey: "quiz.opt.l1", next: "l1-result" },
      { labelKey: "quiz.opt.b1", next: "b1-result" },
      { labelKey: "quiz.opt.workother", next: "work-other-result" },
    ],
  },
  "tourist-result": {
    type: "r",
    icon: "B",
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
  const { t } = useLanguage();

  function tWithFallback(key: string): string {
    const translated = t(key);
    // If t() returned the key itself (no translation found), use fallback
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
    const dots = [0, 1, 2].map((i) => {
      if (i < step.progress) return "done";
      if (i === step.progress) return "active";
      return "";
    });

    return (
      <div>
        <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
          {dots.map((state, i) => (
            <div key={i} style={{
              flex: 1, height: 4, borderRadius: 2,
              background: state === "done" ? "var(--navy)" : state === "active" ? "var(--gold)" : "var(--line)",
              transition: "background 0.4s",
            }} />
          ))}
        </div>

        <div style={{ color: "var(--ink-muted)", fontSize: 14, marginBottom: 8 }}>{tWithFallback(step.subKey)}</div>
        <div style={{
          fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
          fontSize: 28, fontWeight: 800, lineHeight: 1.2,
          color: "var(--navy)", marginBottom: 28, letterSpacing: "-0.5px",
        }}>{tWithFallback(step.questionKey)}</div>

        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {step.options.map((opt) => (
            <button key={opt.next} onClick={() => goTo(opt.next)} style={{
              background: "var(--cream)", border: "2px solid transparent",
              padding: "18px 22px", borderRadius: 10, textAlign: "left",
              cursor: "pointer", fontFamily: "inherit", fontSize: 15,
              fontWeight: 600, color: "var(--ink)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              gap: 12, transition: "all 0.15s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--gold)";
              (e.currentTarget as HTMLButtonElement).style.background = "white";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateX(4px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "transparent";
              (e.currentTarget as HTMLButtonElement).style.background = "var(--cream)";
              (e.currentTarget as HTMLButtonElement).style.transform = "none";
            }}>
              <span>{tWithFallback(opt.labelKey)}</span>
              <span style={{ color: "var(--ink-muted)", fontSize: 18 }}>→</span>
            </button>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13, color: "var(--ink-muted)" }}>
          <button onClick={goBack} disabled={history.length === 0} style={{
            background: "none", border: "none", fontFamily: "inherit", fontSize: 13,
            color: "var(--ink-muted)", cursor: history.length === 0 ? "default" : "pointer",
            padding: "6px 0", fontWeight: 600, opacity: history.length === 0 ? 0 : 1,
          }}>{tWithFallback("quiz.back")}</button>
          <span>{tWithFallback(step.subKey)}</span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "12px 0" }}>
      <div style={{
        width: 72, height: 72, borderRadius: "50%",
        background: "linear-gradient(135deg, var(--navy), var(--navy-light))",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 20px",
        color: "var(--gold)",
        fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
        fontWeight: 900, fontSize: 22,
      }}>{step.icon}</div>
      <h3 style={{
        fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
        fontSize: 32, fontWeight: 800, color: "var(--navy)", marginBottom: 12, letterSpacing: "-0.5px",
      }}>{tWithFallback(step.titleKey)}</h3>
      <p style={{ color: "var(--ink-soft)", fontSize: 16, maxWidth: 440, margin: "0 auto 28px", lineHeight: 1.55 }}>
        {tWithFallback(step.bodyKey)}
      </p>
      <div>
        <a href={step.primary.target} style={{
          display: "inline-block", background: "var(--navy)", color: "white",
          padding: "14px 28px", borderRadius: 8, textDecoration: "none",
          fontWeight: 700, margin: "0 6px 8px", transition: "background 0.2s",
        }}>{tWithFallback(step.primary.labelKey)}</a>
        {step.secondary && (
          <a href={step.secondary.target} style={{
            display: "inline-block", background: "transparent", color: "var(--navy)",
            border: "2px solid var(--navy)", padding: "14px 28px", borderRadius: 8,
            textDecoration: "none", fontWeight: 700, margin: "0 6px 8px",
          }}>{tWithFallback(step.secondary.labelKey)}</a>
        )}
      </div>
      <button onClick={restart} style={{
        background: "none", border: "none", color: "var(--ink-muted)", fontFamily: "inherit",
        fontSize: 13, marginTop: 20, cursor: "pointer", textDecoration: "underline",
      }}>{tWithFallback("quiz.restart")}</button>
    </div>
  );
}
