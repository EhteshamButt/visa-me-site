"use client";
import { useState } from "react";

type Step = {
  type: "q";
  question: string;
  sub: string;
  progress: number;
  options: { label: string; next: string }[];
} | {
  type: "r";
  icon: string;
  title: string;
  body: string;
  primary: { label: string; target: string };
  secondary?: { label: string; target: string };
};

const quizFlow: Record<string, Step> = {
  start: {
    type: "q",
    question: "What's the main reason you want to enter the U.S.?",
    sub: "Question 1 of 3",
    progress: 0,
    options: [
      { label: "Tourism, family visit, or short business trip", next: "duration" },
      { label: "Study at a U.S. school or university", next: "student-result" },
      { label: "Marriage to a U.S. citizen or fiancé(e)", next: "marriage-type" },
      { label: "Work for a U.S. employer", next: "work-type" },
    ],
  },
  duration: {
    type: "q",
    question: "How long do you plan to stay each visit?",
    sub: "Question 2 of 3",
    progress: 1,
    options: [
      { label: "Up to 6 months at a time", next: "tourist-money" },
      { label: "Longer than 6 months", next: "long-stay" },
      { label: "Not sure yet", next: "tourist-money" },
    ],
  },
  "tourist-money": {
    type: "q",
    question: "Who will pay for your trip?",
    sub: "Question 3 of 3",
    progress: 2,
    options: [
      { label: "I'll pay for it myself", next: "tourist-result" },
      { label: "A family member or friend in the U.S.", next: "tourist-result" },
      { label: "My employer", next: "tourist-business-result" },
    ],
  },
  "marriage-type": {
    type: "q",
    question: "Are you already married, or planning to marry in the U.S.?",
    sub: "Question 2 of 3",
    progress: 1,
    options: [
      { label: "We're already legally married", next: "spouse-result" },
      { label: "Planning to marry within 90 days of arrival", next: "fiance-result" },
      { label: "Just dating — visiting first", next: "tourist-result" },
    ],
  },
  "work-type": {
    type: "q",
    question: "What kind of work?",
    sub: "Question 2 of 3",
    progress: 1,
    options: [
      { label: "Specialty profession (degree required)", next: "h1b-result" },
      { label: "Transfer from my current company's office abroad", next: "l1-result" },
      { label: "Short business meetings or negotiations", next: "b1-result" },
      { label: "Something else", next: "work-other-result" },
    ],
  },
  "tourist-result": {
    type: "r",
    icon: "B",
    title: "B-1/B-2 Tourist Visa",
    body: "Based on your answers, the B-1/B-2 visitor visa fits your situation. This is the most common nonimmigrant visa — it covers tourism, family visits, and most short business trips.",
    primary: { label: "Get the Guide", target: "#products" },
    secondary: { label: "Free Quick-Start First", target: "#lead-magnet" },
  },
  "tourist-business-result": {
    type: "r",
    icon: "B-1",
    title: "B-1 Business Visa",
    body: "For employer-paid short business trips — meetings, negotiations, conferences — the B-1 visa is what you need. Our B-1/B-2 guide covers it in detail, including the rules around what you can and cannot do on a B-1.",
    primary: { label: "Get the Guide", target: "#products" },
    secondary: { label: "Free Quick-Start First", target: "#lead-magnet" },
  },
  "student-result": {
    type: "r",
    icon: "F-1",
    title: "F-1 Student Visa",
    body: "You'll need an F-1 student visa, which requires admission to a SEVP-certified U.S. school and a Form I-20. Our F-1 guide walks through SEVIS payment, the I-20, financial documentation, and the F-1-specific interview questions.",
    primary: { label: "Get the Guide", target: "#products" },
    secondary: { label: "Free Quick-Start First", target: "#lead-magnet" },
  },
  "spouse-result": {
    type: "r",
    icon: "IR",
    title: "IR/CR Spouse Visa",
    body: "For a foreign spouse of a U.S. citizen or lawful permanent resident, the IR-1 or CR-1 visa is the main pathway. This is a longer process than tourist visas and starts with an I-130 petition. Our spouse visa guide covers the full timeline.",
    primary: { label: "Get the Guide", target: "#products" },
    secondary: { label: "Free Quick-Start First", target: "#lead-magnet" },
  },
  "fiance-result": {
    type: "r",
    icon: "K-1",
    title: "K-1 Fiancé(e) Visa",
    body: "You'll need a K-1 fiancé(e) visa, which lets your fiancé(e) enter the U.S. for the purpose of getting married within 90 days. The process starts with an I-129F petition. Our K-1 guide covers everything from petition to wedding to adjustment of status.",
    primary: { label: "Get the Guide", target: "#products" },
    secondary: { label: "Free Quick-Start First", target: "#lead-magnet" },
  },
  "h1b-result": {
    type: "r",
    icon: "H-1B",
    title: "H-1B Worker Visa",
    body: "The H-1B is for specialty occupations requiring a bachelor's degree or equivalent. It involves an annual lottery, an employer petition, and a consular interview. Get the free Quick-Start to be notified when our H-1B guide launches.",
    primary: { label: "Notify Me", target: "#lead-magnet" },
  },
  "l1-result": {
    type: "r",
    icon: "L-1",
    title: "L-1 Intracompany Transfer",
    body: "The L-1 visa is for transferring within a multinational company — for executives, managers (L-1A), or specialized knowledge workers (L-1B). Get the free Quick-Start while we develop a dedicated L-1 guide.",
    primary: { label: "Get The Free Guide", target: "#lead-magnet" },
  },
  "b1-result": {
    type: "r",
    icon: "B-1",
    title: "B-1 Business Visitor",
    body: "For short business meetings or negotiations — without working for a U.S. employer — the B-1 is the right fit. Our B-1/B-2 guide covers what you can and cannot do on a B-1, plus full documentation and interview prep.",
    primary: { label: "Get the Guide", target: "#products" },
    secondary: { label: "Free Quick-Start First", target: "#lead-magnet" },
  },
  "work-other-result": {
    type: "r",
    icon: "?",
    title: "You may need expert help",
    body: "There are many specialized work visa categories — O-1 (extraordinary ability), TN (USMCA), E-2 (treaty investor), R-1 (religious worker), and others. Many of these benefit from speaking with a licensed immigration attorney. Get our free Quick-Start to understand the basics first.",
    primary: { label: "Get The Free Guide", target: "#lead-magnet" },
  },
  "long-stay": {
    type: "r",
    icon: "!",
    title: "You may need a different visa",
    body: "Tourist visas (B-1/B-2) generally limit each visit to 6 months. For longer stays, you typically need a different visa category — student, work, or family-based. Our Quick-Start guide will help you understand the alternatives.",
    primary: { label: "Get The Free Guide", target: "#lead-magnet" },
  },
};

export default function Quiz() {
  const [history, setHistory] = useState<string[]>([]);
  const [current, setCurrent] = useState("start");

  const step = quizFlow[current];

  function goTo(next: string) {
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
        {/* Progress dots */}
        <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
          {dots.map((state, i) => (
            <div key={i} style={{
              flex: 1,
              height: 4,
              borderRadius: 2,
              background: state === "done" ? "var(--navy)" : state === "active" ? "var(--gold)" : "var(--line)",
              transition: "background 0.4s",
            }} />
          ))}
        </div>

        <div style={{ color: "var(--ink-muted)", fontSize: 14, marginBottom: 8 }}>{step.sub}</div>
        <div style={{
          fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
          fontSize: 28,
          fontWeight: 800,
          lineHeight: 1.2,
          color: "var(--navy)",
          marginBottom: 28,
          letterSpacing: "-0.5px",
        }}>{step.question}</div>

        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {step.options.map((opt) => (
            <button key={opt.next} onClick={() => goTo(opt.next)} style={{
              background: "var(--cream)",
              border: "2px solid transparent",
              padding: "18px 22px",
              borderRadius: 10,
              textAlign: "left",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: 15,
              fontWeight: 600,
              color: "var(--ink)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              transition: "all 0.15s",
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
              <span>{opt.label}</span>
              <span style={{ color: "var(--ink-muted)", fontSize: 18 }}>→</span>
            </button>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13, color: "var(--ink-muted)" }}>
          <button onClick={goBack} disabled={history.length === 0} style={{
            background: "none", border: "none", fontFamily: "inherit", fontSize: 13,
            color: "var(--ink-muted)", cursor: history.length === 0 ? "default" : "pointer",
            padding: "6px 0", fontWeight: 600, opacity: history.length === 0 ? 0 : 1,
          }}>← Back</button>
          <span>{step.sub}</span>
        </div>
      </div>
    );
  }

  // Result screen
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
      }}>{step.title}</h3>
      <p style={{ color: "var(--ink-soft)", fontSize: 16, maxWidth: 440, margin: "0 auto 28px", lineHeight: 1.55 }}>
        {step.body}
      </p>
      <div>
        <a href={step.primary.target} style={{
          display: "inline-block", background: "var(--navy)", color: "white",
          padding: "14px 28px", borderRadius: 8, textDecoration: "none",
          fontWeight: 700, margin: "0 6px 8px", transition: "background 0.2s",
        }}>{step.primary.label}</a>
        {step.secondary && (
          <a href={step.secondary.target} style={{
            display: "inline-block", background: "transparent", color: "var(--navy)",
            border: "2px solid var(--navy)", padding: "14px 28px", borderRadius: 8,
            textDecoration: "none", fontWeight: 700, margin: "0 6px 8px",
          }}>{step.secondary.label}</a>
        )}
      </div>
      <button onClick={restart} style={{
        background: "none", border: "none", color: "var(--ink-muted)", fontFamily: "inherit",
        fontSize: 13, marginTop: 20, cursor: "pointer", textDecoration: "underline",
      }}>Start over</button>
    </div>
  );
}
