"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Are you a law firm? Do you give legal advice?",
    a: "<strong>No on both counts.</strong> Visa-Me is a publisher of self-help educational materials. We don't give legal advice, we don't represent you before any U.S. agency, and we can't tell you which visa to apply for. Our job is to give you organized, accurate information so you can complete your own application — the same model that Nolo Press and similar self-help legal publishers have used for decades. If your case has any complexity (prior denials, criminal history, removal proceedings), please consult a licensed immigration attorney.",
  },
  {
    q: "What's your refund policy?",
    a: "All sales of our digital guides are final — this is the standard for instant-download digital products, and it's what protects the price point of $39 instead of the $300+ that competitors charge. <strong>What you do get is lifetime free updates:</strong> when fees change or rules change, every customer gets the new version of the guide at no cost. If you have a technical issue downloading or opening a file, contact us within 7 days and we'll fix it right away.",
  },
  {
    q: "Will buying your guide guarantee my visa is approved?",
    a: "<strong>No, and anyone who tells you otherwise is lying.</strong> Visa approval is at the sole discretion of U.S. consular officers. What our guides do is help you submit a complete, accurate, well-organized application that gives you the best possible chance — and avoid the document mistakes and interview fumbles that cause many preventable denials.",
  },
  {
    q: "The DS-160 form is free on the government website. Why pay for a guide?",
    a: "Because the form is the easy part. The hard part is knowing which fields trip people up, what documents to bring, what to expect at the interview, and how to demonstrate the things consular officers actually weigh. Our guide walks you through all of it, in plain English, with sample letters you can adapt. The form is free. The know-how is what costs $39.",
  },
  {
    q: "What's this about a $250 Visa Integrity Fee?",
    a: "In October 2025, the U.S. introduced a new $250 Visa Integrity Fee on most nonimmigrant visas. You only pay it if your visa is approved (not on denial). The total cost of a tourist visa is now around $435 minimum, instead of the $185 you'll see in older guides online. We updated all our guides for this change immediately.",
  },
  {
    q: "What format are the guides in? Can I print them?",
    a: "All guides are PDF. You can read them on any device — phone, tablet, or computer — and yes, you can absolutely print them. Many customers prefer to print the document checklist section and check items off as they prepare for their interview.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ maxWidth: 760, margin: "40px auto 0" }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: "1px solid var(--line)", padding: 0 }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              background: "none",
              border: "none",
              padding: "24px 0",
              textAlign: "left",
              fontFamily: "var(--font-fraunces, 'Fraunces', Georgia, serif)",
              fontSize: 19,
              fontWeight: 700,
              color: open === i ? "var(--gold)" : "var(--navy)",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 24,
              letterSpacing: "-0.2px",
            }}
          >
            <span>{faq.q}</span>
            <span style={{
              width: 24, height: 24, flexShrink: 0, position: "relative", display: "inline-block",
            }}>
              <span style={{
                position: "absolute", top: "50%", left: 0, right: 0, height: 2,
                background: "var(--navy)", transform: "translateY(-50%)",
              }} />
              <span style={{
                position: "absolute", left: "50%", top: 0, bottom: 0, width: 2,
                background: "var(--navy)", transform: "translateX(-50%)",
                opacity: open === i ? 0 : 1,
                transition: "opacity 0.3s",
              }} />
            </span>
          </button>
          <div style={{
            maxHeight: open === i ? 400 : 0,
            overflow: "hidden",
            transition: "max-height 0.3s ease",
          }}>
            <div
              style={{ padding: "0 0 24px 0", fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 640 }}
              dangerouslySetInnerHTML={{ __html: faq.a }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
