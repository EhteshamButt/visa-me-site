import type { Metadata } from "next";
import Quiz from "@/components/Quiz";
import FAQ from "@/components/FAQ";
import LeadMagnetForm from "@/components/LeadMagnetForm";

export const metadata: Metadata = {
  title: "Visa-Me — Plain-English Guides to U.S. Visas | visa-me.net",
  description:
    "Self-help guides, document checklists, and templates for U.S. tourist, student, and family visas. Updated for the 2026 $250 Visa Integrity Fee.",
};

const products = [
  {
    tag: "Tourist · Business",
    name: "B-1 / B-2 Tourist Visa Guide",
    desc: "30 pages. Every fee, every form, the DS-160 walkthrough, interview prep, and three letter templates.",
    price: 39,
    href: "https://visame.gumroad.com/l/cijoz",
    featured: true,
  },
  {
    tag: "Student",
    name: "F-1 Student Visa Guide",
    desc: "40 pages. SEVIS payment, I-20 walkthrough, full document checklist, F-1 interview prep, plus CPT/OPT/STEM work authorization explained.",
    price: 49,
    href: "https://visame.gumroad.com/l/qyrszj",
    isNew: true,
  },
  {
    tag: "Fiancé(e)",
    name: "K-1 Fiancé(e) Visa Guide",
    desc: "I-129F petition guide, evidence of relationship, the 90-day rule, and the consular interview prep.",
    price: 59,
    href: "https://visame.gumroad.com/l/cwhux",
  },
  {
    tag: "Spouse",
    name: "IR/CR Spouse Visa Guide",
    desc: "I-130 petition, NVC processing, affidavit of support, and the spousal interview at the consulate.",
    price: 59,
    href: "https://visame.gumroad.com/l/nwchsj",
  },
  {
    tag: "Exchange",
    name: "J-1 Exchange Visitor Guide",
    desc: "DS-2019, program sponsors, the two-year home rule, and the exchange visitor interview.",
    price: 39,
    href: "https://visame.gumroad.com/l/usrnh",
  },
  {
    tag: "Worker",
    name: "H-1B Worker Visa Guide",
    desc: "Cap registration, employer petition, transfer rules, the lottery process, and consular processing.",
    price: 59,
    href: "https://visame.gumroad.com/l/mslzx",
  },
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

export default function Home() {
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
              2026 Edition · Updated October
            </div>

            <h1 className="fade-up delay-1" style={{
              fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 900,
              lineHeight: 0.98,
              letterSpacing: "-2px",
              color: "var(--navy)",
              marginBottom: 28,
            }}>
              Your U.S. visa<br />application,<br />
              <em style={{ fontStyle: "italic", fontWeight: 700, color: "var(--gold)" }}>finally clear.</em>
            </h1>

            <p className="fade-up delay-2" style={{
              fontSize: 19,
              lineHeight: 1.5,
              color: "var(--ink-soft)",
              marginBottom: 36,
              maxWidth: 540,
            }}>
              Plain-English guides, document checklists, and ready-to-use templates for U.S. tourist, student, and family visas.
              Updated for the new $250 Visa Integrity Fee. No legalese. No scams. No subscription.
            </p>

            <div className="fade-up delay-3" style={{
              display: "flex",
              gap: 32,
              flexWrap: "wrap",
              paddingTop: 32,
              borderTop: "1px solid var(--line)",
            }}>
              {[
                { num: "185+", label: "Visa categories explained" },
                { num: "$39", label: "One-time, lifetime updates" },
                { num: "14", label: "Sections per guide" },
              ].map((s) => (
                <div key={s.num}>
                  <div style={{
                    fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                    fontSize: 32, fontWeight: 900, color: "var(--navy)", lineHeight: 1,
                  }}>{s.num}</div>
                  <div style={{
                    fontSize: 12, textTransform: "uppercase", letterSpacing: "1.2px",
                    color: "var(--ink-muted)", marginTop: 6, fontWeight: 600,
                  }}>{s.label}</div>
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
            }}>Free Download</span>
            <h3 style={{
              fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
              fontSize: 28, fontWeight: 800, lineHeight: 1.15,
              color: "var(--navy)", marginBottom: 8, letterSpacing: "-0.5px",
            }}>The U.S. Visa Quick-Start Guide</h3>
            <p style={{ color: "var(--ink-soft)", fontSize: 14, marginBottom: 24 }}>
              A free plain-English overview of the U.S. visa system — the main visa types, what they cost in 2026, and how to find the right path for your situation.
            </p>
            <ul style={{ listStyle: "none", marginBottom: 24 }}>
              {[
                "2026 fee breakdown including the new $250 Integrity Fee",
                "All six visa types explained in plain English",
                "The 5 mistakes that cause most denials",
              ].map((f) => (
                <li key={f} style={{ fontSize: 14, padding: "6px 0", display: "flex", alignItems: "flex-start", gap: 10, color: "var(--ink-soft)" }}>
                  <span style={{ color: "var(--gold)", fontWeight: 900, flexShrink: 0 }}>✓</span>
                  {f}
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
          <div className="section-eyebrow">Visa Finder</div>
          <h2 className="section-title">Not sure which visa you need?</h2>
          <p className="section-lede">
            Three quick questions and we&apos;ll point you to the guide that fits your situation.
            Takes about 30 seconds — and there&apos;s no email required.
          </p>
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
          <div className="section-eyebrow">The Guide Library</div>
          <h2 className="section-title">A guide for every common visa.</h2>
          <p className="section-lede">
            Each guide is a complete, self-contained PDF. You buy it once and own it forever —
            including all future updates when fees or rules change.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
            marginTop: 40,
          }}>
            {products.map((p) => (
              <div key={p.name} style={{
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
                  {p.tag}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                  fontSize: 22, fontWeight: 800, color: "var(--navy)", marginBottom: 8, letterSpacing: "-0.3px", lineHeight: 1.15,
                }}>{p.name}</h3>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", marginBottom: 20, flexGrow: 1 }}>{p.desc}</p>
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
          <div className="section-eyebrow">Why Visa-Me</div>
          <h2 className="section-title">We&apos;re publishers, not lawyers — and that&apos;s the point.</h2>
          <p className="section-lede">
            Most people getting a tourist, student, or family visa don&apos;t need a $5,000 attorney.
            They need clear, organized information from someone who&apos;s read the rules carefully and put them in plain English.
            That&apos;s what we do.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24, marginTop: 40,
          }}>
            {[
              { h: "Honest about what we are", p: "We're an information publisher, not a law firm. Every guide tells you what to do, in what order, with what documents — so you can complete your own application with confidence." },
              { h: "Updated when the rules change", p: "The $250 Visa Integrity Fee was added in October 2025. We updated our guides immediately. Buy once and you get every future update free, for life." },
              { h: "Built around official sources", p: "Everything in our guides links back to travel.state.gov, uscis.gov, or the official embassy site. We tell you exactly where to verify everything." },
              { h: "When you need a lawyer, we say so", p: "Prior denials, criminal history, complex cases — these need a licensed immigration attorney. Our guides tell you exactly when to stop reading and call one." },
            ].map((item) => (
              <div key={item.h} style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 12, padding: 28, position: "relative",
              }}>
                {/* Checkmark icon via CSS */}
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
                }}>{item.h}</h4>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.55 }}>{item.p}</p>
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
          <div className="section-eyebrow">Available in 7 Languages</div>
          <h2 className="section-title">
            Get the free guide in <em style={{ fontStyle: "italic", color: "var(--gold)" }}>your language</em>.
          </h2>
          <p className="section-lede">
            The same 5-page Quick-Start Guide, translated and localized for the most common applicant communities.
            Click your flag to download — no email required.
          </p>
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
          <div className="section-eyebrow">Common Questions</div>
          <h2 className="section-title">Before you buy.</h2>
          <p className="section-lede">
            A few things people ask before downloading a guide. If you have a question we don&apos;t answer here, email us.
          </p>
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
          }}>
            Stop guessing.<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>Start applying.</em>
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", maxWidth: 540, margin: "0 auto 32px" }}>
            Get the free Quick-Start Guide and you&apos;ll know more about U.S. tourist visas in 10 minutes
            than most people figure out in weeks.
          </p>
          <a href="#lead-magnet" style={{
            display: "inline-block",
            background: "var(--gold)", color: "var(--navy)",
            padding: "16px 36px", borderRadius: 8, textDecoration: "none",
            fontWeight: 800, fontSize: 15, letterSpacing: "0.5px",
            textTransform: "uppercase", transition: "transform 0.15s, background 0.2s",
          }}>Download The Free Guide →</a>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" style={{ background: "var(--paper)", padding: "90px 0" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section-eyebrow">About Visa-Me</div>
          <h2 className="section-title">
            Plain-English visa guides,{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>made for people, not lawyers.</em>
          </h2>
          <div style={{ fontSize: 18, lineHeight: 1.7, color: "var(--ink-soft)", maxWidth: 720 }}>
            <p style={{ marginBottom: 22 }}>
              Plain-English guides for U.S. visas today, with more countries to come. Visa-Me exists because the visa system
              shouldn&apos;t require a law degree to navigate — wherever you&apos;re trying to go.
            </p>
            <p>
              Our current catalog focuses on U.S. visas. We&apos;re building toward a plain-English catalog for visa applicants
              worldwide, and our readers vote on what comes next. If your destination isn&apos;t covered yet, tell us at{" "}
              <a href="mailto:hello@visa-me.net" style={{ color: "var(--navy)", fontWeight: 600, textDecoration: "none", borderBottom: "2px solid var(--gold)" }}>
                hello@visa-me.net
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
