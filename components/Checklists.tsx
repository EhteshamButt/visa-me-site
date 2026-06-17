"use client";
import { useState, useEffect } from "react";

type ChecklistItem = { text: string; detail: string };
type Phase = { name: string; subtitle: string; items: ChecklistItem[] };
type VisaChecklist = { title: string; subtitle: string; phases: Phase[] };

const CHECKLIST_DATA: Record<string, VisaChecklist> = {
  b1b2: {
    title: "B-1/B-2 Tourist Visa Checklist",
    subtitle: "For business visitors and tourists applying for short stays in the U.S.",
    phases: [
      {
        name: "Preparation",
        subtitle: "Before you start the application",
        items: [
          { text: "Determine if you need B-1 or B-2 (or B-1/B-2 combined)", detail: "B-1 is for business visits; B-2 is for tourism/medical/visiting family. Most applicants get the combined B-1/B-2 stamp." },
          { text: "Confirm your passport is valid 6+ months past intended stay", detail: "If it expires sooner, renew before applying." },
          { text: "Check if your country participates in the Visa Waiver Program (ESTA)", detail: "VWP countries may not need a B visa at all for stays under 90 days." },
          { text: "Gather proof of strong ties to home country", detail: "Employment letter, property documents, family obligations — needed at the interview." },
          { text: "Gather financial documentation", detail: "3-6 months of bank statements showing stable balances, not just a recent large deposit." },
          { text: "Plan your specific trip details", detail: "Dates, cities, accommodation, return flight. Vague itineraries hurt your case." },
        ],
      },
      {
        name: "DS-160 Application",
        subtitle: "Complete the online visa application",
        items: [
          { text: "Take or obtain a passport-style photo meeting U.S. requirements", detail: "Specific size, background, and head position rules at travel.state.gov." },
          { text: "Start DS-160 at ceac.state.gov/genniv", detail: "Save your application ID immediately — you'll need it to return." },
          { text: "Complete all DS-160 questions honestly", detail: "Inconsistencies with later answers or your DS-2019 can cause denials." },
          { text: "Upload passport photo to DS-160", detail: "If rejected, photos can be retaken at most pharmacies." },
          { text: "Submit DS-160 and print confirmation page with barcode", detail: "You'll bring this to the interview." },
        ],
      },
      {
        name: "Fees and Scheduling",
        subtitle: "Pay fees and book your interview",
        items: [
          { text: "Pay the MRV visa application fee ($185)", detail: "Payment method varies by country — check your embassy's website." },
          { text: "Schedule your visa interview at the embassy/consulate", detail: "During peak season (May-August), book 30-60 days ahead." },
          { text: "Add $250 Visa Integrity Fee to your budget (only if approved)", detail: "New as of October 2025 — only charged when visa is granted." },
        ],
      },
      {
        name: "Interview Preparation",
        subtitle: "Get ready for the consular interview",
        items: [
          { text: "Practice answering common interview questions", detail: "Specific, honest, brief answers work best. Don't memorize scripts." },
          { text: "Organize all documents in a folder", detail: "Bring originals plus copies; officers may ask for either." },
          { text: "Plan your travel to the embassy", detail: "Arrive 15-30 minutes early. Security lines can be long." },
          { text: "Review the dress code", detail: "Business casual or formal. Avoid flashy or sloppy attire." },
        ],
      },
      {
        name: "Interview Day",
        subtitle: "Attend your consular interview",
        items: [
          { text: "Bring all required documents", detail: "Passport, DS-160 confirmation, MRV receipt, photo, ties documentation." },
          { text: "Submit fingerprints (biometrics)", detail: "Done either at interview or at a separate appointment, depending on country." },
          { text: "Complete the consular interview", detail: "Most last 2-5 minutes. Answer the question asked, then stop talking." },
          { text: "Receive decision", detail: "Approval, denial under 214(b), or 221(g) administrative processing." },
        ],
      },
      {
        name: "After Approval",
        subtitle: "Next steps once approved",
        items: [
          { text: "Pay the $250 Visa Integrity Fee", detail: "Payment process varies by embassy." },
          { text: "Wait for passport return with visa", detail: "Typically 1-2 weeks via courier or pickup." },
          { text: "Verify all visa details are correct", detail: "Check name spelling, validity dates, and entry type." },
          { text: "Plan travel within visa validity period", detail: "Multiple entries usually allowed within visa validity." },
        ],
      },
    ],
  },
  f1: {
    title: "F-1 Student Visa Checklist",
    subtitle: "For international students accepted to a SEVP-certified U.S. school.",
    phases: [
      {
        name: "Before Applying",
        subtitle: "Enrollment and pre-application steps",
        items: [
          { text: "Receive acceptance from a SEVP-certified school", detail: "The school must be approved by the Student and Exchange Visitor Program." },
          { text: "Pay SEVIS I-901 fee ($350 for F-1)", detail: "Must be paid before scheduling your visa interview. Pay at fmjfee.com." },
          { text: "Receive Form I-20 from your school's DSO", detail: "The Designated School Official generates this after enrollment." },
          { text: "Verify I-20 information is correct", detail: "Check name, program dates, and financial support amounts." },
        ],
      },
      {
        name: "DS-160 and Scheduling",
        subtitle: "Apply online and book your interview",
        items: [
          { text: "Complete DS-160 online visa application", detail: "Use your I-20 information when filling out the form." },
          { text: "Pay MRV fee ($185)", detail: "Check your specific embassy for payment methods." },
          { text: "Schedule visa interview", detail: "F-1 interviews can be scheduled up to 120 days before your program start date." },
        ],
      },
      {
        name: "Document Preparation",
        subtitle: "Gather all required documents",
        items: [
          { text: "Valid passport (6+ months validity)", detail: "If passport is near expiry, renew before applying." },
          { text: "Form I-20 (original, signed by DSO)", detail: "The original document is required — a copy is not sufficient." },
          { text: "SEVIS fee receipt (I-901 confirmation)", detail: "Print this from fmjfee.com after payment." },
          { text: "DS-160 confirmation page", detail: "The barcode page from your completed DS-160 application." },
          { text: "Financial documentation proving you can fund your studies", detail: "Bank statements, scholarship letters, sponsor letters showing 12+ months of funding." },
          { text: "Proof of ties to home country", detail: "Evidence you plan to return after studies — family, assets, job prospects." },
          { text: "Acceptance letter from the school", detail: "Shows you've been formally admitted to the program." },
        ],
      },
      {
        name: "Interview",
        subtitle: "Attend your consular interview",
        items: [
          { text: "Attend interview with all documents", detail: "Bring originals and copies of everything." },
          { text: "Be ready to explain your study plans", detail: "What you'll study, why in the U.S., and your plans after graduation." },
          { text: "Demonstrate intent to return home after studies", detail: "This is the critical 214(b) question for F-1 applicants." },
          { text: "Receive visa decision", detail: "If approved, pay $250 Visa Integrity Fee." },
        ],
      },
    ],
  },
  j1: {
    title: "J-1 Exchange Visitor Checklist",
    subtitle: "For exchange visitors, scholars, interns, au pairs, and summer work travel participants.",
    phases: [
      {
        name: "Program Enrollment",
        subtitle: "Work with your sponsor organization",
        items: [
          { text: "Be accepted by a DOS-designated J-1 sponsor program", detail: "Examples: universities, EF, CIEE, Cultural Care Au Pair, etc." },
          { text: "Receive Form DS-2019 from your sponsor", detail: "This is the J-1 equivalent of the F-1's I-20." },
          { text: "Pay SEVIS I-901 fee ($220 for J-1 most categories; $35 for au pairs)", detail: "Pay at fmjfee.com before your interview." },
        ],
      },
      {
        name: "Application",
        subtitle: "Complete your visa application",
        items: [
          { text: "Complete DS-160 online application", detail: "Reference your DS-2019 for program details." },
          { text: "Pay MRV fee ($185)", detail: "Check your embassy for payment methods." },
          { text: "Schedule visa interview", detail: "Schedule as early as possible — peak summer programs have high demand." },
        ],
      },
      {
        name: "Documents",
        subtitle: "Gather your interview documents",
        items: [
          { text: "Valid passport", detail: "Must be valid 6+ months beyond your program end date." },
          { text: "DS-2019 (Certificate of Eligibility)", detail: "Original, signed by your sponsor's responsible officer." },
          { text: "SEVIS fee receipt", detail: "I-901 payment confirmation from fmjfee.com." },
          { text: "DS-160 confirmation page", detail: "Barcode page from your completed application." },
          { text: "Sponsor program documents", detail: "Program acceptance letter, host family documents (for au pairs), etc." },
          { text: "Financial support documentation", detail: "Proof that your exchange program or sponsor covers your costs." },
        ],
      },
      {
        name: "Interview",
        subtitle: "Attend your consular interview",
        items: [
          { text: "Attend interview with all documents", detail: "Arrive early and bring everything organized." },
          { text: "Explain your exchange program clearly", detail: "What organization, what program, what you'll do, when you return." },
          { text: "Understand the two-year home residency requirement", detail: "Many J-1 visa holders must return to their home country for 2 years before getting H or L visas." },
          { text: "Receive decision", detail: "If approved, pay $250 Visa Integrity Fee." },
        ],
      },
    ],
  },
  k1: {
    title: "K-1 Fiancé(e) Visa Checklist",
    subtitle: "For U.S. citizens bringing their fiancé(e) to the U.S. to marry within 90 days.",
    phases: [
      {
        name: "USCIS Petition",
        subtitle: "File the I-129F petition",
        items: [
          { text: "Confirm you meet K-1 eligibility requirements", detail: "Both parties must be free to marry and must have met in person within 2 years." },
          { text: "Gather evidence of bona fide relationship", detail: "Photos together, call logs, correspondence, travel records showing you've met in person." },
          { text: "Complete Form I-129F (Petition for Alien Fiancé(e))", detail: "File with USCIS. Current filing fee: $675." },
          { text: "Include supporting documents with I-129F", detail: "Evidence of relationship, birth certificates, divorce decrees if applicable." },
          { text: "Wait for I-129F approval (typically 6-10 months)", detail: "Track at my.uscis.gov using your receipt number." },
        ],
      },
      {
        name: "NVC Processing",
        subtitle: "After I-129F approval",
        items: [
          { text: "Receive case number from NVC", detail: "The National Visa Center will notify you and your fiancé(e) after USCIS approval." },
          { text: "Fiancé(e) schedules appointment at local U.S. embassy", detail: "Scheduling done through the embassy's appointment system, not the NVC." },
        ],
      },
      {
        name: "Documents for Fiancé(e)",
        subtitle: "Documents your fiancé(e) needs for the interview",
        items: [
          { text: "Valid passport", detail: "Must be valid 6+ months beyond the K-1 validity period." },
          { text: "DS-160 application", detail: "The fiancé(e) completes this, not the U.S. citizen petitioner." },
          { text: "Birth certificate", detail: "With certified translation if not in English." },
          { text: "Police clearance certificates", detail: "From all countries lived in for 6+ months since age 16." },
          { text: "Medical examination by an embassy-approved physician", detail: "Must be done before the visa interview." },
          { text: "Form I-134 Affidavit of Support (from U.S. citizen)", detail: "Shows the U.S. petitioner meets the income requirements to sponsor." },
          { text: "Evidence of bona fide relationship", detail: "Photos, communication records, travel proof." },
          { text: "DS-5540 (Public Charge Questionnaire) if required", detail: "Check embassy requirements." },
        ],
      },
      {
        name: "Interview",
        subtitle: "K-1 consular interview",
        items: [
          { text: "Attend interview at the U.S. embassy", detail: "Interview focuses on the relationship and intent to marry in the U.S. within 90 days." },
          { text: "Pay $250 Visa Integrity Fee if approved", detail: "New as of October 2025." },
          { text: "Receive K-1 visa (typically valid 6 months)", detail: "Must enter the U.S. before the visa expires." },
        ],
      },
      {
        name: "After Arrival in the U.S.",
        subtitle: "After your fiancé(e) enters the U.S.",
        items: [
          { text: "Get married within 90 days of entry", detail: "Failure to marry requires departure from the U.S." },
          { text: "File Form I-485 (Adjustment of Status) after wedding", detail: "This is the green card application. Typical filing fee: $1,440." },
          { text: "File for work authorization (Form I-765) with AOS", detail: "EAD takes approximately 4-9 months to be issued." },
          { text: "Attend biometrics appointment", detail: "Required for AOS processing." },
          { text: "Attend AOS interview (if scheduled)", detail: "Not all AOS cases require an interview." },
          { text: "Receive green card (conditional permanent residence)", detail: "Typically conditional (2-year) for marriages under 2 years old." },
        ],
      },
    ],
  },
  ircr: {
    title: "IR/CR Spouse Visa Checklist",
    subtitle: "For U.S. citizens or LPRs sponsoring a spouse for an immigrant visa.",
    phases: [
      {
        name: "USCIS Petition",
        subtitle: "File the I-130 petition",
        items: [
          { text: "File Form I-130 (Petition for Alien Relative)", detail: "U.S. citizen spouses use Immediate Relative category — no waiting list. LPR spouses face preference category waits." },
          { text: "Include proof of U.S. citizen/LPR status", detail: "U.S. passport, naturalization certificate, or green card." },
          { text: "Include proof of valid marriage", detail: "Marriage certificate with certified translation." },
          { text: "Include evidence of bona fide marriage", detail: "Joint bank accounts, lease/mortgage, photos, communication records." },
          { text: "Wait for I-130 approval", detail: "Immediate relative (U.S. citizen spouse) typically 6-12 months. LPR spouse: longer waits due to visa preference categories." },
        ],
      },
      {
        name: "NVC Processing",
        subtitle: "National Visa Center stage",
        items: [
          { text: "Pay NVC immigrant visa fees ($325 affidavit of support fee + $325 immigrant visa fee)", detail: "Pay online through ceac.state.gov." },
          { text: "Complete Form DS-261 (Choice of Agent and Address)", detail: "Online through ceac.state.gov." },
          { text: "Upload all required documents through CEAC", detail: "Sponsor documents (I-864, tax returns, etc.) and beneficiary documents." },
          { text: "Complete Form I-864 (Affidavit of Support)", detail: "Sponsor must meet 125% of poverty guidelines for household size." },
          { text: "Wait for NVC to send case to embassy", detail: "Takes 1-3 months after all documents are submitted and accepted." },
        ],
      },
      {
        name: "Medical and Documents",
        subtitle: "Pre-interview requirements",
        items: [
          { text: "Complete medical exam with embassy-approved physician", detail: "Must use an embassy-designated panel physician. Results sent directly to embassy." },
          { text: "Gather police clearances", detail: "From all countries where spouse has lived for 6+ months since age 16." },
          { text: "Obtain birth certificate (with translation)", detail: "Certified translation required for non-English documents." },
          { text: "Complete DS-260 (immigrant visa application)", detail: "Online through ceac.state.gov." },
          { text: "Prepare for the interview", detail: "Bring all originals of documents submitted to NVC." },
        ],
      },
      {
        name: "Consular Interview",
        subtitle: "Immigrant visa interview",
        items: [
          { text: "Attend interview at the U.S. embassy", detail: "Interview focuses on bona fides of the marriage and eligibility." },
          { text: "Bring all original documents", detail: "Passport, marriage certificate, police clearances, medical results." },
          { text: "Receive visa if approved", detail: "The IR-1/CR-1 stamp in the passport is the entry document." },
        ],
      },
      {
        name: "After Entry to the U.S.",
        subtitle: "After your spouse enters the U.S.",
        items: [
          { text: "Spouse enters as conditional or permanent resident", detail: "CR-1 if married under 2 years (conditional); IR-1 if married 2+ years (permanent)." },
          { text: "Green card arrives by mail within 6 weeks", detail: "USCIS mails the physical card to your U.S. address." },
          { text: "File I-751 to remove conditions (CR-1 only)", detail: "Filed 90 days before the 2-year anniversary of the green card." },
        ],
      },
    ],
  },
  h1b: {
    title: "H-1B Worker Visa Checklist",
    subtitle: "For specialty occupation workers requiring a U.S. employer sponsor.",
    phases: [
      {
        name: "Registration and Lottery",
        subtitle: "March registration period",
        items: [
          { text: "Find a U.S. employer willing to sponsor your H-1B", detail: "The employer must file everything — H-1B is entirely employer-driven." },
          { text: "Employer registers you in the H-1B lottery (March)", detail: "USCIS typically opens registration in early March. Only registered applicants can be selected." },
          { text: "Wait for lottery selection notification", detail: "USCIS announces selections in late March. Non-selection means waiting until next year." },
        ],
      },
      {
        name: "Petition Filing",
        subtitle: "After lottery selection (April onward)",
        items: [
          { text: "Employer files Form I-129 petition", detail: "Must be filed by June 30. Employer pays filing fees ($730-$4,000+ depending on employer size and premium processing)." },
          { text: "Obtain Labor Condition Application (LCA) from DOL", detail: "Employer files this with the Department of Labor before the I-129. Confirms prevailing wage is being paid." },
          { text: "Gather supporting documents for I-129", detail: "Degree credential evaluation (if foreign degree), employment letter, client letters (if consulting), proof of specialty occupation." },
          { text: "Wait for I-129 approval or receipt", detail: "Standard: 3-6 months. Premium Processing ($2,805): 15 business days." },
        ],
      },
      {
        name: "Consular Processing",
        subtitle: "For applicants outside the U.S.",
        items: [
          { text: "Complete DS-160 application after I-129 approval", detail: "Use your I-129 approval notice details." },
          { text: "Pay MRV fee ($185)", detail: "Standard visa application fee." },
          { text: "Schedule interview at U.S. embassy/consulate", detail: "Bring all employment documents, I-129 approval notice, and degree credentials." },
          { text: "Attend H-1B consular interview", detail: "Focus on specialty occupation, employer relationship, and job duties." },
          { text: "Receive H-1B visa stamp if approved", detail: "Pay $250 Visa Integrity Fee. Visa is valid for up to 3 years initially." },
        ],
      },
      {
        name: "After Approval",
        subtitle: "Maintaining your H-1B status",
        items: [
          { text: "Begin work only after H-1B start date (October 1)", detail: "H-1B cap cases become effective October 1 of the fiscal year." },
          { text: "File for extension before 3-year initial period expires", detail: "H-1B is extendable in 3-year increments, up to 6 years total." },
          { text: "Consider starting green card process", detail: "H-1B holders are eligible for employment-based green cards. Starting early is critical due to waiting times for some nationalities." },
        ],
      },
    ],
  },
};

const VISA_LABELS: Record<string, string> = {
  b1b2: "B-1/B-2 Tourist",
  f1: "F-1 Student",
  j1: "J-1 Exchange",
  k1: "K-1 Fiancé(e)",
  ircr: "IR/CR Spouse",
  h1b: "H-1B Worker",
};

const STORAGE_KEY = "visame-checklist-v1";

export default function Checklists() {
  const visaKeys = Object.keys(CHECKLIST_DATA);
  const [activeVisa, setActiveVisa] = useState(visaKeys[0]);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setChecked(JSON.parse(saved));
    } catch {}
  }, []);

  function toggleItem(key: string) {
    const next = { ...checked, [key]: !checked[key] };
    setChecked(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
  }

  function resetVisa(visaKey: string) {
    const data = CHECKLIST_DATA[visaKey];
    const next = { ...checked };
    data.phases.forEach((phase, pi) =>
      phase.items.forEach((_, ii) => delete next[`${visaKey}-${pi}-${ii}`])
    );
    setChecked(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
  }

  function getProgress(visaKey: string) {
    const data = CHECKLIST_DATA[visaKey];
    const total = data.phases.reduce((s, p) => s + p.items.length, 0);
    const done = data.phases.reduce(
      (s, p, pi) => s + p.items.filter((_, ii) => checked[`${visaKey}-${pi}-${ii}`]).length,
      0
    );
    return { total, done, pct: total > 0 ? Math.round((done / total) * 100) : 0 };
  }

  function getPhaseProgress(visaKey: string, phaseIdx: number) {
    const items = CHECKLIST_DATA[visaKey].phases[phaseIdx].items;
    const done = items.filter((_, ii) => checked[`${visaKey}-${phaseIdx}-${ii}`]).length;
    return `${done}/${items.length}`;
  }

  const visa = CHECKLIST_DATA[activeVisa];
  const prog = getProgress(activeVisa);

  return (
    <>
      {/* Tab bar */}
      <div style={{
        position: "sticky", top: 67, zIndex: 50,
        background: "var(--cream)", borderBottom: "1px solid var(--line)", marginTop: 24,
      }}>
        <div style={{
          maxWidth: 1180, margin: "0 auto", padding: "0 32px",
          display: "flex", gap: 4, overflowX: "auto",
        }}>
          {visaKeys.map((key) => {
            const p = getProgress(key);
            const isActive = key === activeVisa;
            const isComplete = p.done === p.total && p.total > 0;
            return (
              <button key={key} onClick={() => setActiveVisa(key)} style={{
                flexShrink: 0, background: "transparent", border: "none",
                padding: "16px 18px 14px",
                fontFamily: "inherit", fontSize: 14, fontWeight: 600,
                color: isActive ? "var(--navy)" : "var(--ink-soft)",
                cursor: "pointer",
                borderBottom: `3px solid ${isActive ? "var(--gold)" : "transparent"}`,
                transition: "color 0.15s, border-color 0.15s",
                whiteSpace: "nowrap",
              }}>
                {VISA_LABELS[key]}
                <span style={{
                  display: "inline-block", marginLeft: 8, fontSize: 11,
                  background: isComplete ? "var(--green-soft)" : isActive ? "var(--gold-soft)" : "var(--bg-warm)",
                  color: isComplete ? "var(--green)" : isActive ? "var(--navy)" : "var(--ink-muted)",
                  padding: "2px 8px", borderRadius: 10, fontWeight: 700,
                }}>
                  {p.done}/{p.total}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <main style={{ maxWidth: 880, margin: "0 auto", padding: "40px 32px 60px" }}>
        {/* Progress card */}
        <div style={{
          background: "var(--paper)", border: "1px solid var(--line)", borderRadius: 12,
          padding: 24, marginBottom: 32, display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap",
        }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <h2 style={{
              fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
              fontSize: 22, fontWeight: 700, color: "var(--navy)", marginBottom: 6, lineHeight: 1.25,
            }}>{visa.title}</h2>
            <p style={{ color: "var(--ink-muted)", fontSize: 13, marginBottom: 14 }}>{visa.subtitle}</p>
            <div style={{ height: 10, background: "var(--line-soft)", borderRadius: 999, overflow: "hidden" }}>
              <div style={{
                height: "100%",
                background: prog.pct === 100
                  ? "linear-gradient(90deg, var(--green) 0%, #4CAF7F 100%)"
                  : "linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 100%)",
                width: `${prog.pct}%`,
                transition: "width 0.4s ease-out", borderRadius: 999,
              }} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, textAlign: "right", minWidth: 130 }}>
            <div style={{
              fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
              fontSize: 32, fontWeight: 700, color: "var(--navy)", lineHeight: 1,
            }}>{prog.pct}%</div>
            <div style={{ fontSize: 13, color: "var(--ink-muted)" }}>{prog.done} of {prog.total} complete</div>
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
          <button onClick={() => resetVisa(activeVisa)} style={{
            background: "transparent", border: "1px solid var(--line)", borderRadius: 6,
            padding: "8px 14px", fontFamily: "inherit", fontSize: 13, fontWeight: 600,
            color: "var(--ink-soft)", cursor: "pointer",
          }}>Reset this checklist</button>
        </div>

        {/* Phases */}
        {visa.phases.map((phase, pi) => (
          <div key={pi} style={{ marginBottom: 36 }}>
            <div style={{
              display: "flex", alignItems: "baseline", gap: 12,
              marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid var(--line)",
            }}>
              <span style={{
                fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                fontSize: 32, fontWeight: 700, color: "var(--gold)", lineHeight: 1,
              }}>{pi + 1}</span>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
                  fontSize: 22, fontWeight: 700, color: "var(--navy)", lineHeight: 1.2,
                }}>{phase.name}</div>
                <div style={{ fontSize: 13, color: "var(--ink-muted)", marginTop: 4 }}>{phase.subtitle}</div>
              </div>
              <span style={{
                fontSize: 12, color: "var(--ink-muted)", background: "var(--bg-warm)",
                padding: "4px 10px", borderRadius: 10, fontWeight: 700, whiteSpace: "nowrap",
              }}>{getPhaseProgress(activeVisa, pi)}</span>
            </div>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
              {phase.items.map((item, ii) => {
                const key = `${activeVisa}-${pi}-${ii}`;
                const isChecked = !!checked[key];
                return (
                  <li key={ii}
                    onClick={() => toggleItem(key)}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 14,
                      padding: "14px 16px",
                      background: isChecked ? "var(--green-soft)" : "var(--paper)",
                      border: `1px solid ${isChecked ? "rgba(45,106,79,0.3)" : "var(--line)"}`,
                      borderRadius: 10, cursor: "pointer", transition: "all 0.15s",
                    }}
                  >
                    <div style={{
                      flexShrink: 0, width: 22, height: 22,
                      border: `2px solid ${isChecked ? "var(--green)" : "var(--line)"}`,
                      borderRadius: 6,
                      background: isChecked ? "var(--green)" : "var(--paper)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginTop: 2, transition: "all 0.15s",
                    }}>
                      {isChecked && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: 15, fontWeight: 600,
                        color: isChecked ? "var(--ink-muted)" : "var(--ink)",
                        lineHeight: 1.45,
                        textDecoration: isChecked ? "line-through" : "none",
                        textDecorationColor: "rgba(45,106,79,0.5)",
                        transition: "color 0.15s",
                      }}>{item.text}</div>
                      <div style={{
                        fontSize: 13, color: "var(--ink-soft)", marginTop: 4, lineHeight: 1.5,
                      }}>{item.detail}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        {prog.pct === 100 && (
          <div style={{
            padding: "28px 24px", background: "var(--green-soft)",
            border: "1px solid var(--green)", borderRadius: 12,
            marginBottom: 32, textAlign: "center",
          }}>
            <h3 style={{
              fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
              fontSize: 26, color: "var(--green)", marginBottom: 8,
            }}>You&apos;re all done! ✓</h3>
            <p style={{ color: "var(--ink)", fontSize: 15 }}>
              You&apos;ve completed all steps for the {visa.title}. Good luck with your application!
            </p>
          </div>
        )}
      </main>
    </>
  );
}
