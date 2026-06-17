"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const languages = [
  { code: "en", flag: "🇺🇸", name: "English", region: "United States" },
  { code: "es", flag: "🇲🇽", name: "Español", region: "Latin America" },
  { code: "pt", flag: "🇧🇷", name: "Português", region: "Brasil" },
  { code: "fr", flag: "🇫🇷", name: "Français", region: "France · Afrique" },
  { code: "de", flag: "🇩🇪", name: "Deutsch", region: "Deutschland" },
  { code: "zh", flag: "🇨🇳", name: "简体中文", region: "中国大陆" },
  { code: "vi", flag: "🇻🇳", name: "Tiếng Việt", region: "Việt Nam" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang: activeLang, setLang, t } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "rgba(250, 247, 242, 0.92)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--line)",
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 32px",
        maxWidth: 1180,
        margin: "0 auto",
      }}>
        <Link href="/" style={{
          fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
          fontWeight: 900,
          fontSize: 22,
          color: "var(--navy)",
          letterSpacing: "0.5px",
          textDecoration: "none",
        }}>
          VISA<span style={{ color: "var(--gold)" }}>-</span>ME
        </Link>

        <div style={{ display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/#quiz" style={{ textDecoration: "none", color: "var(--ink-soft)", fontWeight: 500, fontSize: 14 }}>{t("nav.quiz")}</Link>
          <Link href="/#products" style={{ textDecoration: "none", color: "var(--ink-soft)", fontWeight: 500, fontSize: 14 }}>{t("nav.guides")}</Link>
          <Link href="/checklists" style={{ textDecoration: "none", color: "var(--ink-soft)", fontWeight: 500, fontSize: 14 }}>{t("nav.checklists")}</Link>
          <Link href="/blog" style={{ textDecoration: "none", color: "var(--ink-soft)", fontWeight: 500, fontSize: 14 }}>Blog</Link>
          <Link href="/#faq" style={{ textDecoration: "none", color: "var(--ink-soft)", fontWeight: 500, fontSize: 14 }}>{t("nav.faq")}</Link>
          <Link href="/#lead-magnet" style={{
            textDecoration: "none",
            background: "var(--navy)",
            color: "white",
            padding: "10px 20px",
            borderRadius: 4,
            fontWeight: 700,
            fontSize: 14,
          }}>{t("nav.cta")}</Link>

          {/* Language switcher */}
          <div ref={menuRef} style={{ position: "relative" }}>
            <button
              onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "transparent",
                border: "1px solid var(--line)",
                padding: "8px 12px",
                borderRadius: 6,
                fontFamily: "inherit",
                fontSize: 13,
                fontWeight: 600,
                color: "var(--ink-soft)",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>{activeLang.toUpperCase()}</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ transform: menuOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {menuOpen && (
              <div style={{
                position: "absolute",
                top: "calc(100% + 6px)",
                right: 0,
                background: "white",
                border: "1px solid var(--line)",
                borderRadius: 8,
                boxShadow: "0 12px 30px rgba(26,58,92,0.12)",
                minWidth: 220,
                padding: 6,
                zIndex: 110,
              }}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLang(lang.code); setMenuOpen(false); }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      width: "100%",
                      padding: "10px 12px",
                      background: activeLang === lang.code ? "rgba(201,169,97,0.12)" : "transparent",
                      border: "none",
                      fontFamily: "inherit",
                      fontSize: 14,
                      textAlign: "left",
                      cursor: "pointer",
                      borderRadius: 6,
                      color: "var(--ink)",
                      fontWeight: activeLang === lang.code ? 700 : 400,
                    }}
                  >
                    <span style={{ fontSize: 18, width: 22 }}>{lang.flag}</span>
                    <span style={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}>
                      <span style={{ fontWeight: 600, color: "var(--ink)", fontSize: 13 }}>{lang.name}</span>
                      <span style={{ fontSize: 11, color: "var(--ink-muted)" }}>{lang.region}</span>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
