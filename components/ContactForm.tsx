"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{
        background: "rgba(45,106,79,0.1)", border: "2px solid var(--green)",
        borderRadius: 12, padding: "32px 28px", textAlign: "center",
      }}>
        <h3 style={{
          fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
          color: "var(--green)", fontSize: 22, fontWeight: 800, marginBottom: 8,
        }}>Message received ✓</h3>
        <p style={{ color: "#1a4530", fontSize: 15 }}>
          Thanks for reaching out. We'll reply to the email you provided within one business day.
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    border: "2px solid var(--line)",
    borderRadius: 8,
    fontFamily: "inherit",
    fontSize: 15,
    background: "var(--paper)",
    color: "var(--ink)",
    transition: "border-color 0.2s",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase" as const,
    color: "var(--ink-muted)",
    marginBottom: 6,
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <div>
          <label style={labelStyle}>Your name</label>
          <input type="text" required maxLength={100} autoComplete="name" style={inputStyle}
            onFocus={e => e.target.style.borderColor = "var(--navy)"}
            onBlur={e => e.target.style.borderColor = "var(--line)"} />
        </div>
        <div>
          <label style={labelStyle}>Email address</label>
          <input type="email" required maxLength={200} autoComplete="email" style={inputStyle}
            onFocus={e => e.target.style.borderColor = "var(--navy)"}
            onBlur={e => e.target.style.borderColor = "var(--line)"} />
        </div>
      </div>

      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>What&apos;s this about?</label>
        <select required style={inputStyle}
          onFocus={e => e.target.style.borderColor = "var(--navy)"}
          onBlur={e => e.target.style.borderColor = "var(--line)"}>
          <option value="">— Choose a topic —</option>
          <option value="support">Support — issue with a guide I bought</option>
          <option value="prepurchase">Question before buying a guide</option>
          <option value="feedback">Feedback or correction</option>
          <option value="press">Press or partnership</option>
          <option value="legal">Legal or privacy request</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>Your message</label>
        <textarea required maxLength={3000}
          placeholder="Tell us what's going on. Don't share passport numbers or other sensitive personal information — we don't need them."
          style={{ ...inputStyle, resize: "vertical", minHeight: 140, lineHeight: 1.55 }}
          onFocus={e => e.target.style.borderColor = "var(--navy)"}
          onBlur={e => e.target.style.borderColor = "var(--line)"} />
      </div>

      <button type="submit" style={{
        background: "var(--navy)", color: "white", border: "none",
        padding: "14px 28px", borderRadius: 8, fontFamily: "inherit",
        fontSize: 15, fontWeight: 700, letterSpacing: "0.3px",
        cursor: "pointer", transition: "transform 0.1s, background 0.2s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.background = "var(--navy-dark)";
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.background = "var(--navy)";
        (e.currentTarget as HTMLButtonElement).style.transform = "none";
      }}>
        Send Message
      </button>
      <p style={{ fontSize: 12, color: "var(--ink-muted)", marginTop: 14, lineHeight: 1.5 }}>
        Please don&apos;t include passport numbers, government IDs, or other sensitive personal information in your message.
      </p>
    </form>
  );
}
