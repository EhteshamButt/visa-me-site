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

const trustItemKeys = ["item1", "item2", "item3", "item4"] as const;

export default function HomeClient() {
  const { t } = useLanguage();

  return (
    <>
      {/* ===== HERO ===== */}
      <section id="hero" style={{
        position: "relative",
        padding: "80px 0 100px",
        overflow: "hidden",
        background: `
          radial-gradient(circle at 90% 10%, rgba(201,169,97,0.18) 0%, transparent 45%),
          radial-gradient(circle at 5% 80%, rgba(26,58,92,0.06) 0%, transparent 50%),
          var(--cream)`,
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gap: 80,
          alignItems: "start",
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 32px",
        }}>
          <div>
            <div className="fade-up" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(201,169,97,0.15)",
              color: "#8B6914",
              padding: "7px 14px",
              borderRadius: 100,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: 28,
              border: "1px solid rgba(201,169,97,0.3)",
            }}>
              <span style={{
                width: 6, height: 6, background: "var(--gold)", borderRadius: "50%",
                animation: "pulse 2s ease-in-out infinite",
              }} />
              {t("hero.eyebrow")}
            </div>

            <h1 className="fade-up delay-1" style={{
              fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 900,
              lineHeight: 0.98,
              letterSpacing: "-2px",
              color: "var(--navy)",
              marginBottom: 28,
            }} dangerouslySetInnerHTML={{ __html: t("hero.title") }} />

            <p className="fade-up delay-2" style={{
              fontSize: 19,
              lineHeight: 1.5,
              color: "var(--ink-soft)",
              marginBottom: 36,
              maxWidth: 540,
            }}>
              {t("hero.lede")}
            </p>

            <div className="fade-up delay-3" style={{
              display: "flex",
              gap: 32,
              flexWrap: "wrap",
              paddingTop: 32,
              borderTop: "1px solid var(--line)",
            }}>
              {[
                { num: "185+", key: "hero.stat1" },
                { num: "$39", key: "hero.stat2" },
                { num: "14", key: "hero.stat3" },
              ].map((s) => (
                <div key={s.num}>
                  <div style={{
                    fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                    fontSize: 32, fontWeight: 900, color: "var(--navy)", lineHeight: 1,
                  }}>{s.num}</div>
                  <div style={{
                    fontSize: 12, textTransform: "uppercase", letterSpacing: "1.2px",
                    color: "var(--ink-muted)", marginTop: 6, fontWeight: 600,
                  }}>{t(s.key)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead magnet card */}
          <div id="lead-magnet" className="fade-up delay-2" style={{
            background: "white",
            borderRadius: 16,
            padding: "36px 32px",
            boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 30px 80px rgba(26,58,92,0.18), 0 8px 24px rgba(26,58,92,0.08)",
            position: "relative",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: 5,
              background: "linear-gradient(90deg, var(--navy) 0%, var(--gold) 100%)",
              borderRadius: "16px 16px 0 0",
            }} />
            <span style={{
              display: "inline-block",
              background: "rgba(45,106,79,0.1)",
              color: "var(--green)",
              padding: "5px 12px", borderRadius: 100,
              fontSize: 11, fontWeight: 700, letterSpacing: 1,
              textTransform: "uppercase", marginBottom: 16,
            }}>{t("magnet.badge")}</span>
            <h3 style={{
              fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
              fontSize: 28, fontWeight: 800, lineHeight: 1.15,
              color: "var(--navy)", marginBottom: 8, letterSpacing: "-0.5px",
            }}>{t("magnet.title")}</h3>
            <p style={{ color: "var(--ink-soft)", fontSize: 14, marginBottom: 24 }}>
              {t("magnet.desc")}
            </p>
            <ul style={{ listStyle: "none", marginBottom: 24 }}>
              {(["magnet.feat1", "magnet.feat2", "magnet.feat3"] as const).map((key) => (
                <li key={key} style={{ fontSize: 14, padding: "6px 0", display: "flex", alignItems: "flex-start", gap: 10, color: "var(--ink-soft)" }}>
                  <span style={{ color: "var(--gold)", fontWeight: 900, flexShrink: 0 }}>✓</span>
                  {t(key)}
                </li>
              ))}
            </ul>
            <LeadMagnetForm />
          </div>
        </div>

        <style>{`
          @media (max-width: 960px) {
            #hero > div { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
          @media (max-width: 720px) {
            nav a:not([href="/#lead-magnet"]):not([href="/"]) { display: none; }
          }
          .lang-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 16px 36px rgba(26,58,92,0.1);
            border-color: var(--gold) !important;
          }
        `}</style>
      </section>

      {/* ===== QUIZ ===== */}
      <section className="section section-bg-paper" id="quiz">
        <div className="container">
          <div className="section-eyebrow">{t("quiz.eyebrow")}</div>
          <h2 className="section-title">{t("quiz.title")}</h2>
          <p className="section-lede">{t("quiz.lede")}</p>
          <div style={{
            background: "white",
            borderRadius: 20,
            padding: 48,
            maxWidth: 760,
            margin: "0 auto",
            boxShadow: "0 30px 70px rgba(26,58,92,0.1)",
          }}>
            <Quiz />
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="section section-bg-warm" id="products">
        <div className="container">
          <div className="section-eyebrow">{t("products.eyebrow")}</div>
          <h2 className="section-title">{t("products.title")}</h2>
          <p className="section-lede">{t("products.lede")}</p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
            marginTop: 40,
          }}>
            {productKeys.map((p) => (
              <div key={p.id} style={{
                background: "white",
                border: `1px solid ${p.featured ? "var(--gold)" : p.isNew ? "var(--navy)" : "var(--line)"}`,
                borderRadius: 12,
                padding: "28px 26px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                boxShadow: p.featured ? "0 12px 30px rgba(201,169,97,0.15)" : "none",
              }}>
                {p.featured && (
                  <span style={{
                    position: "absolute", top: -10, right: 20,
                    background: "var(--gold)", color: "var(--navy)",
                    fontSize: 10, fontWeight: 800, letterSpacing: "1.5px",
                    textTransform: "uppercase", padding: "4px 10px", borderRadius: 100,
                  }}>Most Popular</span>
                )}
                {p.isNew && (
                  <span style={{
                    position: "absolute", top: -10, right: 20,
                    background: "var(--navy)", color: "white",
                    fontSize: 10, fontWeight: 800, letterSpacing: "1.5px",
                    textTransform: "uppercase", padding: "4px 10px", borderRadius: 100,
                  }}>New</span>
                )}
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--gold)", marginBottom: 10 }}>
                  {t(`products.${p.id}.tag`)}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                  fontSize: 22, fontWeight: 800, color: "var(--navy)", marginBottom: 8, letterSpacing: "-0.3px", lineHeight: 1.15,
                }}>{t(`products.${p.id}.name`)}</h3>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", marginBottom: 20, flexGrow: 1 }}>{t(`products.${p.id}.desc`)}</p>
                <div style={{
                  display: "flex", alignItems: "baseline", gap: 10,
                  paddingTop: 16, borderTop: "1px solid var(--line)", marginBottom: 18,
                }}>
                  <div style={{
                    fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                    fontSize: 32, fontWeight: 900, color: "var(--navy)",
                  }}>
                    <span style={{ fontSize: 18, verticalAlign: "top", marginRight: 1 }}>$</span>{p.price}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--ink-muted)", textTransform: "uppercase", letterSpacing: 1, fontWeight: 600 }}>
                    PDF · Instant
                  </div>
                </div>
                <a href={p.href} target="_blank" rel="noopener noreferrer" style={{
                  display: "block", textAlign: "center",
                  background: p.featured ? "var(--navy)" : "var(--cream)",
                  color: p.featured ? "white" : "var(--navy)",
                  padding: 12, borderRadius: 8, textDecoration: "none",
                  fontWeight: 700, fontSize: 14, transition: "background 0.2s, color 0.2s",
                }}>Get The Guide →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST ===== */}
      <section className="section section-bg-navy" id="trust">
        <div className="container">
          <div className="section-eyebrow">{t("trust.eyebrow")}</div>
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t("trust.title") }} />
          <p className="section-lede">{t("trust.lede")}</p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24, marginTop: 40,
          }}>
            {trustItemKeys.map((itemKey) => (
              <div key={itemKey} style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 12, padding: 28, position: "relative",
              }}>
                <div style={{
                  width: 32, height: 32,
                  border: "2px solid var(--gold)",
                  borderRadius: "50%", marginBottom: 18, position: "relative",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l4 4 6-7" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h4 style={{
                  fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                  fontSize: 20, fontWeight: 800, marginBottom: 8, color: "white", letterSpacing: "-0.3px",
                }}>{t(`trust.${itemKey}.h`)}</h4>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.55 }}>{t(`trust.${itemKey}.p`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LANGUAGES ===== */}
      <section id="languages" style={{
        background: "linear-gradient(180deg, var(--cream) 0%, var(--bg-warm) 100%)",
        padding: "80px 0",
      }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <div className="section-eyebrow">{t("lang.eyebrow")}</div>
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t("lang.title") }} />
          <p className="section-lede">{t("lang.lede")}</p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 16, marginTop: 40,
          }}>
            {languages.map((lang) => (
              <a key={lang.name} href={`/${lang.file}`} download className="lang-card" style={{
                background: "white",
                border: "1px solid var(--line)",
                borderRadius: 12, padding: 22,
                display: "flex", flexDirection: "column", gap: 14,
                textDecoration: "none", color: "inherit",
                transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 32, lineHeight: 1 }}>{lang.flag}</span>
                  <span style={{
                    fontSize: 10, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase",
                    padding: "4px 8px", borderRadius: 100,
                    background: "rgba(45,106,79,0.12)", color: "var(--green)",
                  }}>{lang.tag}</span>
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                    fontSize: 19, fontWeight: 800, color: "var(--navy)", letterSpacing: "-0.3px", lineHeight: 1.1,
                  }}>{lang.name}</div>
                  <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 4 }}>{lang.native}</div>
                </div>
                <div style={{
                  marginTop: "auto", fontSize: 12, fontWeight: 700, color: "var(--gold)",
                  textTransform: "uppercase", letterSpacing: 1,
                }}>{lang.action}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section section-bg-warm" id="faq">
        <div className="container">
          <div className="section-eyebrow">{t("faq.eyebrow")}</div>
          <h2 className="section-title">{t("faq.title")}</h2>
          <p className="section-lede">{t("faq.lede")}</p>
          <FAQ />
        </div>
      </section>

      {/* ===== CTA STRIP ===== */}
      <section style={{
        background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
        color: "white",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -100, right: -100,
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(201,169,97,0.25) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{
            fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
            fontSize: "clamp(32px, 4.5vw, 48px)",
            fontWeight: 900, letterSpacing: "-1px", lineHeight: 1.05, marginBottom: 16,
          }} dangerouslySetInnerHTML={{ __html: t("cta.title") }} />
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", maxWidth: 540, margin: "0 auto 32px" }}>
            {t("cta.lede")}
          </p>
          <a href="#lead-magnet" style={{
            display: "inline-block",
            background: "var(--gold)", color: "var(--navy)",
            padding: "16px 36px", borderRadius: 8, textDecoration: "none",
            fontWeight: 800, fontSize: 15, letterSpacing: "0.5px",
            textTransform: "uppercase", transition: "transform 0.15s, background 0.2s",
          }}>{t("cta.button")}</a>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" style={{ background: "var(--paper)", padding: "90px 0" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section-eyebrow">{t("about.eyebrow")}</div>
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t("about.title") }} />
          <div style={{ fontSize: 18, lineHeight: 1.7, color: "var(--ink-soft)", maxWidth: 720 }}>
            <p style={{ marginBottom: 22 }}>{t("about.p1")}</p>
            <p dangerouslySetInnerHTML={{ __html: t("about.p2") }} />
          </div>
        </div>
      </section>
    </>
  );
}
