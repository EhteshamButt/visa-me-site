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
  const activeLanguage = languages.find((l) => l.code === activeLang) ?? languages[0];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    function handleScroll() { setScrolled(window.scrollY > 10); }
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
      {/* ── Main Nav ── */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        background: "rgba(255,255,255,0.98)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid #e8e2d8" : "1px solid #f0ebe2",
        boxShadow: scrolled
          ? "0 1px 0 rgba(201,169,97,0.15), 0 4px 24px rgba(26,58,92,0.09)"
          : "none",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          maxWidth: 1240,
          margin: "0 auto",
          height: 72,
        }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", flexShrink: 0, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 34,
              height: 34,
              background: "var(--navy)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <div>
              <span style={{
                fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                fontWeight: 900,
                fontSize: 20,
                color: "var(--navy)",
                letterSpacing: "-0.3px",
                lineHeight: 1,
                display: "block",
              }}>
                VISA<span style={{ color: "var(--gold)" }}>·</span>ME
              </span>
              <span style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                display: "block",
                marginTop: 1,
              }}>U.S. Visa Guides</span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div style={{ display: "flex", gap: 2, alignItems: "center" }} className="nav-desktop">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{
                textDecoration: "none",
                color: "var(--ink)",
                fontWeight: 600,
                fontSize: 13.5,
                padding: "8px 14px",
                borderRadius: 7,
                letterSpacing: "0.1px",
                transition: "color 0.15s, background 0.15s",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--navy)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(26,58,92,0.05)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--ink)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: language + CTA */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>

            {/* Language switcher */}
            <div ref={langRef} style={{ position: "relative" }} className="nav-desktop">
              <button
                onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: menuOpen ? "rgba(26,58,92,0.05)" : "transparent",
                  border: "1.5px solid #e4ddd3",
                  padding: "7px 12px",
                  borderRadius: 7,
                  fontFamily: "inherit",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--ink)",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--navy)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--navy)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#e4ddd3";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--ink)";
                }}
              >
                <span style={{ fontSize: 16, lineHeight: 1 }}>{activeLanguage.flag}</span>
                <span style={{ letterSpacing: "0.5px" }}>{activeLang.toUpperCase()}</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  style={{ transition: "transform 0.2s", transform: menuOpen ? "rotate(180deg)" : "none" }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>

              {menuOpen && (
                <div style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  background: "white",
                  border: "1px solid #e4ddd3",
                  borderRadius: 12,
                  boxShadow: "0 20px 48px rgba(26,58,92,0.14), 0 4px 12px rgba(26,58,92,0.06)",
                  minWidth: 228,
                  padding: 6,
                  zIndex: 300,
                  animation: "fadeDown 0.16s ease",
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
                        background: activeLang === lang.code ? "rgba(201,169,97,0.09)" : "transparent",
                        border: "none",
                        fontFamily: "inherit",
                        fontSize: 13.5,
                        textAlign: "left",
                        cursor: "pointer",
                        borderRadius: 8,
                        color: "var(--ink)",
                        transition: "background 0.12s",
                      }}
                      onMouseEnter={e => {
                        if (activeLang !== lang.code)
                          (e.currentTarget as HTMLButtonElement).style.background = "rgba(26,58,92,0.04)";
                      }}
                      onMouseLeave={e => {
                        if (activeLang !== lang.code)
                          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                      }}
                    >
                      <span style={{ fontSize: 20, width: 24, textAlign: "center" }}>{lang.flag}</span>
                      <span style={{ flex: 1 }}>
                        <span style={{
                          display: "block",
                          fontWeight: activeLang === lang.code ? 700 : 500,
                          color: activeLang === lang.code ? "var(--navy)" : "var(--ink)",
                          fontSize: 13.5,
                        }}>{lang.name}</span>
                        <span style={{ display: "block", fontSize: 11, color: "var(--ink-muted)", marginTop: 1 }}>{lang.region}</span>
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

            {/* CTA: gold gradient, feels premium */}
            <Link href="/#lead-magnet" className="nav-desktop" style={{
              textDecoration: "none",
              background: "linear-gradient(135deg, #C9A961 0%, #A8873B 100%)",
              color: "var(--navy-dark)",
              padding: "10px 22px",
              borderRadius: 7,
              fontWeight: 800,
              fontSize: 13.5,
              letterSpacing: "0.2px",
              boxShadow: "0 2px 10px rgba(201,169,97,0.35)",
              transition: "box-shadow 0.2s, transform 0.16s",
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              whiteSpace: "nowrap",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 22px rgba(201,169,97,0.55)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 10px rgba(201,169,97,0.35)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "none";
              }}
            >
              {t("nav.cta")}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>

            {/* Mobile hamburger */}
            <button
              className="nav-mobile-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                display: "none",
                background: "none",
                border: "1.5px solid #e4ddd3",
                borderRadius: 7,
                cursor: "pointer",
                flexDirection: "column",
                gap: 5,
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ display: "block", width: 18, height: 1.5, background: "var(--navy)", borderRadius: 2, transition: "all 0.25s", transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
              <span style={{ display: "block", width: 18, height: 1.5, background: "var(--navy)", borderRadius: 2, transition: "all 0.25s", opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ display: "block", width: 18, height: 1.5, background: "var(--navy)", borderRadius: 2, transition: "all 0.25s", transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{
            background: "white",
            borderTop: "1px solid #f0ebe2",
            padding: "12px 20px 24px",
            animation: "fadeDown 0.2s ease",
          }} className="nav-mobile-menu">
            <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 16 }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{
                  padding: "11px 16px",
                  color: "var(--ink)",
                  fontWeight: 600,
                  fontSize: 15,
                  borderRadius: 8,
                  display: "block",
                  textDecoration: "none",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "rgba(26,58,92,0.04)"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "transparent"}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #f0ebe2", paddingTop: 16, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/#lead-magnet" onClick={() => setMobileOpen(false)} style={{
                background: "linear-gradient(135deg, #C9A961 0%, #A8873B 100%)",
                color: "var(--navy-dark)",
                padding: "11px 22px",
                borderRadius: 7,
                fontWeight: 800,
                fontSize: 14,
                textDecoration: "none",
              }}>
                {t("nav.cta")}
              </Link>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {languages.map((lang) => (
                  <button key={lang.code} onClick={() => { setLang(lang.code); setMobileOpen(false); }} style={{
                    background: activeLang === lang.code ? "rgba(201,169,97,0.12)" : "#f7f4ef",
                    border: activeLang === lang.code ? "1.5px solid var(--gold)" : "1.5px solid #e4ddd3",
                    borderRadius: 6,
                    padding: "5px 10px",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "inherit",
                    color: "var(--ink)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                  }}>
                    <span style={{ fontSize: 14 }}>{lang.flag}</span>
                    {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 880px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
