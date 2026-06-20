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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang: activeLang, setLang, t } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    function handleScroll() { setScrolled(window.scrollY > 12); }
    document.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "/#quiz", label: t("nav.quiz") },
    { href: "/#products", label: t("nav.guides") },
    { href: "/checklists", label: t("nav.checklists") },
    { href: "/blog", label: "Blog" },
    { href: "/#faq", label: t("nav.faq") },
  ];

  return (
    <>
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        background: scrolled ? "rgba(250,247,242,0.97)" : "rgba(250,247,242,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(26,58,92,0.08)" : "none",
        transition: "all 0.3s ease",
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          maxWidth: 1200,
          margin: "0 auto",
          height: 68,
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
            <span style={{
              fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
              fontWeight: 900,
              fontSize: 22,
              color: "var(--navy)",
              letterSpacing: "0.5px",
            }}>
              VISA<span style={{ color: "var(--gold)" }}>—</span>ME
            </span>
          </Link>

          {/* Desktop links */}
          <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="nav-desktop">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{
                textDecoration: "none",
                color: "var(--ink-soft)",
                fontWeight: 600,
                fontSize: 14,
                padding: "8px 14px",
                borderRadius: 8,
                transition: "color 0.18s, background 0.18s",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--navy)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(26,58,92,0.06)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--ink-soft)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {/* Language switcher */}
            <div ref={langRef} style={{ position: "relative" }} className="nav-desktop">
              <button
                onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  background: menuOpen ? "rgba(26,58,92,0.06)" : "transparent",
                  border: "1.5px solid var(--line)",
                  padding: "7px 12px",
                  borderRadius: 8,
                  fontFamily: "inherit",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--ink-soft)",
                  cursor: "pointer",
                  transition: "all 0.18s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--navy)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--navy)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--line)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--ink-soft)";
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <span>{activeLang.toUpperCase()}</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  style={{ transform: menuOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>

              {menuOpen && (
                <div style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  background: "white",
                  border: "1px solid var(--line)",
                  borderRadius: 12,
                  boxShadow: "0 16px 40px rgba(26,58,92,0.14), 0 4px 12px rgba(26,58,92,0.06)",
                  minWidth: 220,
                  padding: 6,
                  zIndex: 300,
                  animation: "fadeDown 0.18s ease",
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
                        background: activeLang === lang.code ? "rgba(201,169,97,0.1)" : "transparent",
                        border: "none",
                        fontFamily: "inherit",
                        fontSize: 14,
                        textAlign: "left",
                        cursor: "pointer",
                        borderRadius: 8,
                        color: "var(--ink)",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={e => { if (activeLang !== lang.code) (e.currentTarget as HTMLButtonElement).style.background = "rgba(26,58,92,0.04)"; }}
                      onMouseLeave={e => { if (activeLang !== lang.code) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                    >
                      <span style={{ fontSize: 20, width: 24, textAlign: "center" }}>{lang.flag}</span>
                      <span style={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}>
                        <span style={{ fontWeight: activeLang === lang.code ? 700 : 600, color: activeLang === lang.code ? "var(--navy)" : "var(--ink)", fontSize: 13 }}>{lang.name}</span>
                        <span style={{ fontSize: 11, color: "var(--ink-muted)" }}>{lang.region}</span>
                      </span>
                      {activeLang === lang.code && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link href="/#lead-magnet" className="nav-desktop" style={{
              textDecoration: "none",
              background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
              color: "white",
              padding: "10px 22px",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.2px",
              boxShadow: "0 2px 12px rgba(26,58,92,0.22)",
              transition: "box-shadow 0.2s, transform 0.18s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(26,58,92,0.35)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 12px rgba(26,58,92,0.22)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "none";
              }}
            >
              {t("nav.cta")}
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="nav-mobile-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                display: "none",
                background: "none",
                border: "1.5px solid var(--line)",
                borderRadius: 8,
                padding: "8px 10px",
                cursor: "pointer",
                flexDirection: "column",
                gap: 4,
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ display: "block", width: 18, height: 2, background: "var(--navy)", borderRadius: 2, transition: "all 0.3s", transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
              <span style={{ display: "block", width: 18, height: 2, background: "var(--navy)", borderRadius: 2, transition: "all 0.3s", opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ display: "block", width: 18, height: 2, background: "var(--navy)", borderRadius: 2, transition: "all 0.3s", transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{
            background: "white",
            borderTop: "1px solid var(--line)",
            padding: "16px 20px 24px",
            animation: "fadeDown 0.22s ease",
          }} className="nav-mobile-menu">
            <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 16 }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{
                  padding: "12px 16px",
                  color: "var(--ink)",
                  fontWeight: 600,
                  fontSize: 15,
                  borderRadius: 8,
                  display: "block",
                  textDecoration: "none",
                  transition: "background 0.15s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-warm)"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "transparent"}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div style={{ borderTop: "1px solid var(--line)", paddingTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href="/#lead-magnet" onClick={() => setMobileOpen(false)} style={{
                background: "var(--navy)", color: "white", padding: "12px 22px",
                borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none",
              }}>{t("nav.cta")}</Link>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {languages.map((lang) => (
                  <button key={lang.code} onClick={() => { setLang(lang.code); setMobileOpen(false); }} style={{
                    background: activeLang === lang.code ? "rgba(201,169,97,0.15)" : "var(--bg-warm)",
                    border: activeLang === lang.code ? "1.5px solid var(--gold)" : "1.5px solid var(--line)",
                    borderRadius: 6, padding: "6px 10px", cursor: "pointer",
                    fontSize: 13, fontWeight: 600, fontFamily: "inherit", color: "var(--ink)",
                  }}>
                    {lang.flag} {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
