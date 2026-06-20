"use client";
import Quiz from "@/components/Quiz";
import FAQ from "@/components/FAQ";
import LeadMagnetForm from "@/components/LeadMagnetForm";
import { useLanguage } from "@/context/LanguageContext";

const productKeys = [
  { id: "b1", price: 39, href: "https://visame.gumroad.com/l/cijoz", featured: true },
  { id: "f1", price: 49, href: "https://visame.gumroad.com/l/qyrszj", isNew: true },
  { id: "k1", price: 59, href: "https://visame.gumroad.com/l/cwhux" },
  { id: "ir", price: 59, href: "https://visame.gumroad.com/l/nwchsj" },
  { id: "j1", price: 39, href: "https://visame.gumroad.com/l/usrnh" },
  { id: "h1b", price: 59, href: "https://visame.gumroad.com/l/mslzx" },
];

const languages = [
  { flag: "🇺🇸", name: "English", native: "United States · Worldwide", tag: "Available", file: "Visa-Me_Free_Quickstart_Guide_EN.pdf", action: "Download PDF →" },
  { flag: "🇲🇽", name: "Español", native: "México · América Latina", tag: "Disponible", file: "Visa-Me_Free_Quickstart_Guide_ES.pdf", action: "Descargar PDF →" },
  { flag: "🇧🇷", name: "Português", native: "Brasil", tag: "Disponível", file: "Visa-Me_Free_Quickstart_Guide_PT.pdf", action: "Baixar PDF →" },
  { flag: "🇫🇷", name: "Français", native: "France · Afrique francophone", tag: "Disponible", file: "Visa-Me_Free_Quickstart_Guide_FR.pdf", action: "Télécharger PDF →" },
  { flag: "🇩🇪", name: "Deutsch", native: "Deutschland · Österreich", tag: "Verfügbar", file: "Visa-Me_Free_Quickstart_Guide_DE.pdf", action: "PDF Herunterladen →" },
  { flag: "🇨🇳", name: "简体中文", native: "中国大陆", tag: "可用", file: "Visa-Me_Free_Quickstart_Guide_ZH.pdf", action: "下载 PDF →" },
  { flag: "🇻🇳", name: "Tiếng Việt", native: "Việt Nam", tag: "Có sẵn", file: "Visa-Me_Free_Quickstart_Guide_VI.pdf", action: "Tải PDF →" },
];

const trustItems = [
  { num: "01", icon: "✦" },
  { num: "02", icon: "✦" },
  { num: "03", icon: "✦" },
  { num: "04", icon: "✦" },
] as const;

export default function HomeClient() {
  const { t } = useLanguage();

  return (
    <>
      {/* ===== HERO ===== */}
      <section id="hero" style={{
        position: "relative",
        minHeight: "calc(100vh - 68px)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--cream)",
        padding: "80px 0 100px",
      }}>
        {/* Background decoration */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div style={{
            position: "absolute", top: "8%", right: "10%",
            width: 500, height: 500,
            background: "radial-gradient(circle, rgba(201,169,97,0.16) 0%, transparent 65%)",
            borderRadius: "50%",
            animation: "float 8s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", bottom: "10%", left: "2%",
            width: 320, height: 320,
            background: "radial-gradient(circle, rgba(26,58,92,0.07) 0%, transparent 70%)",
            borderRadius: "50%",
          }} />
          {/* Grid pattern */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(201,169,97,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          }} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 440px",
          gap: 80,
          alignItems: "center",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}>
          {/* Left: Text */}
          <div>
            {/* Eyebrow */}
            <div className="fade-up" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(201,169,97,0.12)",
              color: "var(--gold-dark, #A8873B)",
              padding: "8px 16px",
              borderRadius: 100,
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: 32,
              border: "1px solid rgba(201,169,97,0.3)",
            }}>
              <span style={{
                width: 6, height: 6, background: "var(--gold)", borderRadius: "50%",
                animation: "pulse 2s ease-in-out infinite",
                flexShrink: 0,
              }} />
              {t("hero.eyebrow")}
            </div>

            {/* Headline */}
            <h1 className="fade-up delay-1" style={{
              fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
              fontSize: "clamp(44px, 6.5vw, 78px)",
              fontWeight: 900,
              lineHeight: 0.96,
              letterSpacing: "-2.5px",
              color: "var(--navy)",
              marginBottom: 32,
            }} dangerouslySetInnerHTML={{ __html: t("hero.title") }} />

            {/* Lede */}
            <p className="fade-up delay-2" style={{
              fontSize: 19,
              lineHeight: 1.65,
              color: "var(--ink-soft)",
              marginBottom: 40,
              maxWidth: 520,
            }}>
              {t("hero.lede")}
            </p>

            {/* Stats */}
            <div className="fade-up delay-3" style={{
              display: "flex",
              gap: 0,
              paddingTop: 36,
              borderTop: "1px solid var(--line)",
              flexWrap: "wrap",
            }}>
              {[
                { num: "185+", key: "hero.stat1" },
                { num: "$39", key: "hero.stat2" },
                { num: "14", key: "hero.stat3" },
              ].map((s, i) => (
                <div key={s.num} style={{
                  padding: "0 40px 0 0",
                  marginRight: 40,
                  borderRight: i < 2 ? "1px solid var(--line)" : "none",
                }}>
                  <div style={{
                    fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                    fontSize: 38, fontWeight: 900, color: "var(--navy)", lineHeight: 1,
                    letterSpacing: "-1px",
                  }}>{s.num}</div>
                  <div style={{
                    fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px",
                    color: "var(--ink-muted)", marginTop: 8, fontWeight: 700,
                  }}>{t(s.key)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Lead Magnet Card */}
          <div id="lead-magnet" className="fade-up delay-2" style={{
            background: "white",
            borderRadius: 20,
            padding: "40px 36px",
            boxShadow: "0 2px 0 rgba(255,255,255,0.8) inset, 0 40px 100px rgba(26,58,92,0.2), 0 12px 28px rgba(26,58,92,0.1)",
            position: "relative",
            border: "1px solid rgba(255,255,255,0.9)",
          }}>
            {/* Gradient top bar */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: 4,
              background: "linear-gradient(90deg, var(--navy) 0%, var(--navy-light) 40%, var(--gold) 100%)",
              borderRadius: "20px 20px 0 0",
            }} />

            {/* Badge */}
            <div style={{ marginBottom: 20 }}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(45,106,79,0.1)",
                color: "var(--green)",
                padding: "6px 14px",
                borderRadius: 100,
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: "uppercase",
                border: "1px solid rgba(45,106,79,0.2)",
              }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="var(--green)">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                {t("magnet.badge")}
              </span>
            </div>

            <h3 style={{
              fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
              fontSize: 26, fontWeight: 900, lineHeight: 1.15,
              color: "var(--navy)", marginBottom: 10, letterSpacing: "-0.5px",
            }}>{t("magnet.title")}</h3>

            <p style={{ color: "var(--ink-soft)", fontSize: 14, marginBottom: 22, lineHeight: 1.6 }}>
              {t("magnet.desc")}
            </p>

            <ul style={{ listStyle: "none", marginBottom: 26 }}>
              {(["magnet.feat1", "magnet.feat2", "magnet.feat3"] as const).map((key) => (
                <li key={key} style={{
                  fontSize: 14, padding: "8px 0",
                  display: "flex", alignItems: "flex-start", gap: 12,
                  color: "var(--ink-soft)",
                  borderBottom: "1px solid var(--line-soft, #ede8de)",
                }}>
                  <span style={{
                    width: 20, height: 20, background: "linear-gradient(135deg, var(--gold), var(--gold-dark, #A8873B))",
                    borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 1,
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
            <LeadMagnetForm />
          </div>
        </div>

        <style>{`
          @media (max-width: 960px) {
            #hero > div > div:first-of-type { grid-template-columns: 1fr !important; }
          }
          h1 em { font-style: italic; color: var(--gold); font-weight: 700; }
        `}</style>
      </section>

      {/* ===== SOCIAL PROOF BAR ===== */}
      <div style={{
        background: "#0f2540",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        padding: "18px 40px",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 0, flexWrap: "wrap",
        }}>
          {[
            {
              label: "Plain English, no legalese",
              icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              ),
            },
            {
              label: "Updated for 2026 fee changes",
              icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              ),
            },
            {
              label: "Instant PDF download",
              icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              ),
            },
            {
              label: "Available in 7 languages",
              icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              ),
            },
          ].map((item, i, arr) => (
            <div key={item.label} style={{
              display: "flex", alignItems: "center", gap: 9,
              color: "rgba(255,255,255,0.6)",
              fontSize: 13,
              fontWeight: 500,
              padding: "8px 28px",
              borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
            }}>
              {item.icon}
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* ===== QUIZ ===== */}
      <section className="section section-bg-paper" id="quiz" style={{ position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{
          position: "absolute", top: -80, right: -80,
          width: 300, height: 300,
          background: "radial-gradient(circle, rgba(201,169,97,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative" }}>
          <div className="section-eyebrow">{t("quiz.eyebrow")}</div>
          <h2 className="section-title">{t("quiz.title")}</h2>
          <p className="section-lede">{t("quiz.lede")}</p>
          <div style={{
            background: "white",
            borderRadius: 24,
            padding: "52px 56px",
            maxWidth: 780,
            margin: "0 auto",
            boxShadow: "0 2px 0 rgba(255,255,255,0.9) inset, 0 32px 80px rgba(26,58,92,0.10), 0 8px 24px rgba(26,58,92,0.06)",
            border: "1px solid var(--line-soft, #ede8de)",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 3,
              background: "linear-gradient(90deg, var(--navy) 0%, var(--gold) 100%)",
            }} />
            <Quiz />
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="section section-bg-warm" id="products" style={{ position: "relative" }}>
        <div className="container">
          <div className="section-eyebrow">{t("products.eyebrow")}</div>
          <h2 className="section-title">{t("products.title")}</h2>
          <p className="section-lede">{t("products.lede")}</p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
            marginTop: 8,
          }}>
            {productKeys.map((p) => (
              <div key={p.id} style={{
                background: p.featured
                  ? "linear-gradient(145deg, var(--navy-dark) 0%, var(--navy) 60%, var(--navy-light) 100%)"
                  : "white",
                border: p.isNew ? "2px solid var(--navy)" : "1px solid var(--line)",
                borderRadius: 16,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                boxShadow: p.featured
                  ? "0 20px 60px rgba(26,58,92,0.35), 0 8px 20px rgba(26,58,92,0.2)"
                  : "var(--shadow-sm)",
                transition: "transform 0.22s var(--ease), box-shadow 0.22s var(--ease)",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = p.featured
                    ? "0 32px 80px rgba(26,58,92,0.45), 0 12px 28px rgba(26,58,92,0.25)"
                    : "0 20px 48px rgba(26,58,92,0.14)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "none";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = p.featured
                    ? "0 20px 60px rgba(26,58,92,0.35), 0 8px 20px rgba(26,58,92,0.2)"
                    : "var(--shadow-sm)";
                }}
              >
                {/* Decorative dot pattern for featured */}
                {p.featured && (
                  <div aria-hidden style={{
                    position: "absolute", top: -20, right: -20,
                    width: 140, height: 140,
                    background: "radial-gradient(circle, rgba(201,169,97,0.2) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }} />
                )}

                {/* Badge */}
                {p.featured && (
                  <div style={{ marginBottom: 20 }}>
                    <span style={{
                      background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark, #A8873B) 100%)",
                      color: "var(--navy-dark)",
                      fontSize: 10, fontWeight: 800, letterSpacing: "2px",
                      textTransform: "uppercase", padding: "5px 12px", borderRadius: 100,
                    }}>★ Most Popular</span>
                  </div>
                )}
                {p.isNew && (
                  <div style={{ marginBottom: 20 }}>
                    <span style={{
                      background: "rgba(26,58,92,0.08)",
                      color: "var(--navy)",
                      border: "1.5px solid rgba(26,58,92,0.2)",
                      fontSize: 10, fontWeight: 800, letterSpacing: "2px",
                      textTransform: "uppercase", padding: "5px 12px", borderRadius: 100,
                    }}>✦ New</span>
                  </div>
                )}

                <div style={{
                  fontSize: 11, fontWeight: 800, letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: p.featured ? "var(--gold-light)" : "var(--gold-dark, #A8873B)",
                  marginBottom: 10,
                }}>
                  {t(`products.${p.id}.tag`)}
                </div>

                <h3 style={{
                  fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                  fontSize: 22, fontWeight: 900,
                  color: p.featured ? "white" : "var(--navy)",
                  marginBottom: 10, letterSpacing: "-0.5px", lineHeight: 1.2,
                }}>{t(`products.${p.id}.name`)}</h3>

                <p style={{
                  fontSize: 14, lineHeight: 1.65,
                  color: p.featured ? "rgba(255,255,255,0.72)" : "var(--ink-soft)",
                  marginBottom: 24, flexGrow: 1,
                }}>{t(`products.${p.id}.desc`)}</p>

                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  paddingTop: 20,
                  borderTop: p.featured ? "1px solid rgba(255,255,255,0.15)" : "1px solid var(--line)",
                  marginBottom: 20,
                }}>
                  <div>
                    <span style={{
                      fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                      fontSize: 36, fontWeight: 900,
                      color: p.featured ? "white" : "var(--navy)",
                      letterSpacing: "-1px",
                    }}>
                      <span style={{ fontSize: 20, verticalAlign: "top", marginTop: 6, display: "inline-block" }}>$</span>{p.price}
                    </span>
                  </div>
                  <div style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: p.featured ? "rgba(255,255,255,0.5)" : "var(--ink-muted)",
                  }}>PDF · Instant</div>
                </div>

                <a href={p.href} target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  background: p.featured
                    ? "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark, #A8873B) 100%)"
                    : "var(--navy)",
                  color: p.featured ? "var(--navy-dark)" : "white",
                  padding: "14px 20px",
                  borderRadius: 10,
                  textDecoration: "none",
                  fontWeight: 800, fontSize: 14,
                  letterSpacing: "0.3px",
                  boxShadow: p.featured ? "0 4px 16px rgba(201,169,97,0.4)" : "none",
                  transition: "transform 0.18s, box-shadow 0.18s",
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = p.featured
                      ? "0 8px 24px rgba(201,169,97,0.55)"
                      : "0 6px 20px rgba(26,58,92,0.35)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = p.featured ? "0 4px 16px rgba(201,169,97,0.4)" : "none";
                  }}
                >
                  Get The Guide
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST ===== */}
      <section className="section section-bg-navy" id="trust" style={{ position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{
          position: "absolute", top: -100, right: -100,
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(201,169,97,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div aria-hidden style={{
          position: "absolute", bottom: -80, left: -80,
          width: 360, height: 360,
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative" }}>
          <div className="section-eyebrow">{t("trust.eyebrow")}</div>
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t("trust.title") }} />
          <p className="section-lede">{t("trust.lede")}</p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20, marginTop: 8,
          }}>
            {trustItems.map((item, i) => {
              const key = `item${i + 1}` as "item1" | "item2" | "item3" | "item4";
              return (
                <div key={key} style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16, padding: "32px 28px",
                  position: "relative",
                  backdropFilter: "blur(10px)",
                  transition: "background 0.2s, border-color 0.2s, transform 0.22s",
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,97,0.35)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLDivElement).style.transform = "none";
                  }}
                >
                  <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    marginBottom: 20,
                  }}>
                    <div style={{
                      width: 44, height: 44,
                      background: "linear-gradient(135deg, rgba(201,169,97,0.2) 0%, rgba(201,169,97,0.08) 100%)",
                      border: "1px solid rgba(201,169,97,0.35)",
                      borderRadius: 12,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span style={{
                      fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                      fontSize: 13, fontWeight: 900, color: "rgba(255,255,255,0.18)",
                      letterSpacing: "-0.5px",
                    }}>{item.num}</span>
                  </div>
                  <h4 style={{
                    fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                    fontSize: 19, fontWeight: 800, marginBottom: 10,
                    color: "white", letterSpacing: "-0.3px", lineHeight: 1.3,
                  }}>{t(`trust.${key}.h`)}</h4>
                  <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.65 }}>
                    {t(`trust.${key}.p`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== LANGUAGES ===== */}
      <section id="languages" style={{
        background: "linear-gradient(180deg, var(--paper) 0%, var(--cream) 50%, var(--bg-warm) 100%)",
        padding: "108px 0",
        position: "relative",
        overflow: "hidden",
      }}>
        <div aria-hidden style={{
          position: "absolute", top: "30%", left: "50%",
          transform: "translateX(-50%)",
          width: 800, height: 800,
          background: "radial-gradient(circle, rgba(201,169,97,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ maxWidth: 1020, position: "relative" }}>
          <div className="section-eyebrow">{t("lang.eyebrow")}</div>
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t("lang.title") }} />
          <p className="section-lede">{t("lang.lede")}</p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
            gap: 14, marginTop: 8,
          }}>
            {languages.map((lang) => (
              <a key={lang.name} href={`/${lang.file}`} download style={{
                background: "white",
                border: "1px solid var(--line)",
                borderRadius: 14, padding: "24px 22px",
                display: "flex", flexDirection: "column", gap: 16,
                textDecoration: "none", color: "inherit",
                transition: "transform 0.22s var(--ease), box-shadow 0.22s var(--ease), border-color 0.22s",
                boxShadow: "var(--shadow-xs)",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-5px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "var(--shadow-lg)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gold)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "var(--shadow-xs)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--line)";
                }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 36, lineHeight: 1 }}>{lang.flag}</span>
                  <span style={{
                    fontSize: 10, fontWeight: 800, letterSpacing: "1.5px",
                    textTransform: "uppercase", padding: "4px 10px", borderRadius: 100,
                    background: "rgba(45,106,79,0.1)", color: "var(--green)",
                    border: "1px solid rgba(45,106,79,0.2)",
                  }}>{lang.tag}</span>
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                    fontSize: 18, fontWeight: 800, color: "var(--navy)",
                    letterSpacing: "-0.3px", lineHeight: 1.15,
                  }}>{lang.name}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-muted)", marginTop: 5 }}>{lang.native}</div>
                </div>
                <div style={{
                  marginTop: "auto",
                  display: "flex", alignItems: "center", gap: 6,
                  fontSize: 12, fontWeight: 800, color: "var(--gold-dark, #A8873B)",
                  textTransform: "uppercase", letterSpacing: "1.5px",
                }}>
                  {lang.action}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section section-bg-paper" id="faq" style={{ position: "relative" }}>
        <div aria-hidden style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 200,
          background: "linear-gradient(0deg, var(--bg-warm) 0%, transparent 100%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative" }}>
          <div className="section-eyebrow">{t("faq.eyebrow")}</div>
          <h2 className="section-title">{t("faq.title")}</h2>
          <p className="section-lede">{t("faq.lede")}</p>
          <FAQ />
        </div>
      </section>

      {/* ===== CTA STRIP ===== */}
      <section style={{
        background: "linear-gradient(140deg, var(--navy-dark) 0%, #1e4d7a 50%, var(--navy) 100%)",
        color: "white",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Large decorative circles */}
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{
            position: "absolute", top: -160, right: -160,
            width: 600, height: 600,
            background: "radial-gradient(circle, rgba(201,169,97,0.18) 0%, transparent 60%)",
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute", bottom: -120, left: -120,
            width: 480, height: 480,
            background: "radial-gradient(circle, rgba(45,90,135,0.5) 0%, transparent 65%)",
            borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }} />
        </div>

        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontSize: 11,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "var(--gold-light)",
            marginBottom: 28,
          }}>
            <span style={{ display: "block", width: 24, height: 2, background: "var(--gold)", borderRadius: 2 }} />
            Ready to start?
            <span style={{ display: "block", width: 24, height: 2, background: "var(--gold)", borderRadius: 2 }} />
          </div>

          <h2 style={{
            fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.02, marginBottom: 20,
          }} dangerouslySetInnerHTML={{ __html: t("cta.title") }} />

          <p style={{
            fontSize: 18, color: "rgba(255,255,255,0.72)",
            maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7,
          }}>
            {t("cta.lede")}
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <a href="#lead-magnet" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark, #A8873B) 100%)",
              color: "var(--navy-dark)",
              padding: "18px 40px", borderRadius: 10, textDecoration: "none",
              fontWeight: 900, fontSize: 15, letterSpacing: "0.5px",
              textTransform: "uppercase",
              boxShadow: "0 8px 32px rgba(201,169,97,0.45), 0 2px 8px rgba(201,169,97,0.2)",
              transition: "transform 0.18s, box-shadow 0.18s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 16px 48px rgba(201,169,97,0.55), 0 4px 12px rgba(201,169,97,0.3)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(201,169,97,0.45), 0 2px 8px rgba(201,169,97,0.2)";
              }}>
              {t("cta.button")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="/#quiz" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "rgba(255,255,255,0.75)",
              padding: "18px 28px", borderRadius: 10, textDecoration: "none",
              fontWeight: 700, fontSize: 14,
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "background 0.2s, color 0.2s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLAnchorElement).style.color = "white";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.75)";
              }}
            >
              Find My Visa First →
            </a>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" style={{ background: "var(--bg-warm)", padding: "108px 0", position: "relative" }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}>
            <div>
              <div className="section-eyebrow">{t("about.eyebrow")}</div>
              <h2 style={{
                fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                fontSize: "clamp(30px, 4vw, 46px)",
                fontWeight: 900, lineHeight: 1.1,
                letterSpacing: "-1.5px",
                color: "var(--navy)", marginBottom: 28,
              }} dangerouslySetInnerHTML={{ __html: t("about.title") }} />

              <div style={{ fontSize: 17, lineHeight: 1.75, color: "var(--ink-soft)" }}>
                <p style={{ marginBottom: 20 }}>{t("about.p1")}</p>
                <p dangerouslySetInnerHTML={{ __html: t("about.p2") }} />
              </div>
            </div>

            {/* Right side: visual card */}
            <div style={{ paddingTop: 8 }}>
              <div style={{
                background: "white",
                borderRadius: 20,
                padding: "36px 32px",
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow-md)",
              }}>
                <div style={{
                  fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                  fontSize: 13, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: 2,
                  color: "var(--gold-dark, #A8873B)", marginBottom: 20,
                }}>Our commitment</div>
                {[
                  { label: "Not a law firm", desc: "We're an educational publisher. Clear, honest, self-help guides only." },
                  { label: "Always up to date", desc: "When rules or fees change, every customer gets updated guides free." },
                  { label: "Official sources only", desc: "Everything links back to travel.state.gov, uscis.gov, and embassy sites." },
                ].map((item, i) => (
                  <div key={item.label} style={{
                    display: "flex", gap: 14, alignItems: "flex-start",
                    padding: "16px 0",
                    borderBottom: i < 2 ? "1px solid var(--line-soft, #ede8de)" : "none",
                  }}>
                    <div style={{
                      width: 8, height: 8, background: "var(--gold)", borderRadius: "50%",
                      marginTop: 7, flexShrink: 0,
                    }} />
                    <div>
                      <div style={{ fontWeight: 700, color: "var(--navy)", fontSize: 14, marginBottom: 3 }}>{item.label}</div>
                      <div style={{ fontSize: 13, color: "var(--ink-muted)", lineHeight: 1.55 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            #about > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }
            #hero > div > div { grid-template-columns: 1fr !important; }
            .prod-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 560px) {
            .prod-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
