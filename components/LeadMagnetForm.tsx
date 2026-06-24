"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function LeadMagnetForm({ inline = false }: { inline?: boolean }) {
  const { t, lang } = useLanguage();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, language: lang }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div style={{
        marginTop: 12,
        padding: "16px 18px",
        background: "rgba(45,106,79,0.08)",
        border: "2px solid var(--green)",
        borderRadius: 10,
        textAlign: "center",
        fontSize: 15,
        fontWeight: 600,
        color: "var(--green)",
      }}>
        {t("magnet.toast")}
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`kit-inline-form${inline ? " kit-inline-form--row" : ""}`}
      >
        <div className="input-group">
          <input
            className="formkit-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("magnet.placeholder")}
            aria-label="Email address"
            required
            disabled={status === "loading"}
          />
          <button
            type="submit"
            className="formkit-submit"
            disabled={status === "loading"}
          >
            <div className="formkit-spinner" style={{ display: status === "loading" ? "flex" : "none" }}>
              <div /><div /><div />
            </div>
            <span style={{ opacity: status === "loading" ? 0 : 1 }}>{t("magnet.button")}</span>
          </button>
        </div>
        {status === "error" && (
          <p style={{
            padding: "10px 14px",
            marginTop: 8,
            background: "rgba(176,65,62,0.08)",
            borderLeft: "3px solid var(--red)",
            borderRadius: 4,
            fontSize: 13,
            color: "var(--red)",
            listStyle: "none",
          }}>
            {t("magnet.error")}
          </p>
        )}
      </form>

      {!inline && (
        <p style={{
          fontSize: 11,
          color: "var(--ink-muted)",
          textAlign: "center",
          marginTop: 14,
          lineHeight: 1.4,
        }}>
          {t("magnet.fineprint")}
        </p>
      )}

      <style>{`
        /* ── Shared base ── */
        .kit-inline-form .input-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .kit-inline-form .formkit-input {
          width: 100%;
          padding: 14px 16px;
          border: 1.5px solid #ddd7cc;
          border-radius: 8px;
          font-family: inherit;
          font-size: 15px;
          background: white;
          outline: none;
          box-sizing: border-box;
          color: var(--ink);
          transition: border-color 0.15s;
        }
        .kit-inline-form .formkit-input:focus { border-color: var(--navy); }
        .kit-inline-form .formkit-input::placeholder { color: #aaa; }
        .kit-inline-form .formkit-input:disabled { opacity: 0.6; }
        .kit-inline-form .formkit-submit {
          position: relative;
          background: var(--navy);
          color: white;
          border: none;
          padding: 14px 24px;
          border-radius: 8px;
          font-family: inherit;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.2px;
          cursor: pointer;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.15s;
          white-space: nowrap;
        }
        .kit-inline-form .formkit-submit:hover:not(:disabled) { background: var(--navy-light); }
        .kit-inline-form .formkit-submit:disabled { opacity: 0.7; cursor: default; }

        /* ── Inline (row) variant ── */
        .kit-inline-form--row .input-group {
          flex-direction: row;
          gap: 8px;
          align-items: stretch;
        }
        .kit-inline-form--row .formkit-input {
          flex: 1;
          min-width: 0;
        }
        .kit-inline-form--row .formkit-submit {
          width: auto;
          flex-shrink: 0;
          font-size: 14.5px;
          padding: 14px 22px;
        }

        /* ── Spinner ── */
        .kit-inline-form .formkit-spinner {
          gap: 3px;
          align-items: center;
        }
        .kit-inline-form .formkit-spinner > div {
          width: 4px; height: 4px;
          background: white;
          border-radius: 50%;
          animation: kit-bounce 1.4s ease-in-out infinite both;
        }
        .kit-inline-form .formkit-spinner > div:nth-child(2) { animation-delay: 0.16s; }
        .kit-inline-form .formkit-spinner > div:nth-child(3) { animation-delay: 0.32s; }
        @keyframes kit-bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
      `}</style>
    </>
  );
}
