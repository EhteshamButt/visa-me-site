export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  content: string; // HTML content
};

export const posts: Post[] = [
  {
    slug: "visa-integrity-fee",
    title: "What the New $250 Visa Integrity Fee Means for Your Application",
    description: "In October 2025, the U.S. added a $250 Visa Integrity Fee that applies to nearly every nonimmigrant visa category. Here's what it covers, who pays it, when, and how to budget.",
    date: "May 12, 2026",
    category: "Policy Update",
    readTime: "6 min read",
    content: `
<p>In October 2025, the U.S. quietly added a new fee that affects nearly every nonimmigrant visa applicant: the $250 Visa Integrity Fee. If you're applying for a B-1/B-2, F-1, J-1, K-1, H-1B, or most other temporary visas, this fee now applies to you. If you're using a guide written before October 2025, the cost numbers in it are wrong.</p>

<p>Here's a clear breakdown of what the fee is, who pays it, when it gets charged, and what you actually need to do.</p>

<h2>What the fee is</h2>

<p>The Visa Integrity Fee is a $250 charge that the U.S. government collects from nonimmigrant visa applicants whose visas are approved at a consular interview abroad. It was created by a 2025 federal law as part of an effort to strengthen visa screening and fund related security programs.</p>

<p>The key word is <strong>integrity</strong> — the fee isn't a processing fee like the $185 MRV (machine-readable visa) fee. It's a one-time charge that helps fund the government's verification and oversight systems for nonimmigrant visa programs.</p>

<h2>Who pays it</h2>

<p>Most people applying for a nonimmigrant visa from outside the United States. Specifically:</p>

<ul>
  <li>B-1/B-2 visitor visa applicants</li>
  <li>F-1 student visa applicants</li>
  <li>J-1 exchange visitor applicants (including au pairs, summer work travel, interns, scholars, physicians)</li>
  <li>K-1 fiancé(e) visa applicants</li>
  <li>K-3 spouse-of-citizen applicants</li>
  <li>H-1B, H-2A, H-2B, H-3 worker visa applicants</li>
  <li>L-1, O-1, P, R-1 and other temporary worker visa applicants</li>
  <li>Most other nonimmigrant categories</li>
</ul>

<p>Diplomatic visas (A, G, NATO) and a small set of other categories are exempt. Most regular applicants are not.</p>

<h2>Who does NOT pay it</h2>

<ul>
  <li><strong>Immigrant visa applicants</strong> (CR-1, IR-1 spouse visas; family-based green card applicants; employment-based green card applicants overseas). These follow a different fee structure.</li>
  <li><strong>People adjusting status inside the U.S.</strong> using Form I-485 (since the fee is consular-side).</li>
  <li><strong>Visa applicants whose application is denied.</strong> The fee is only paid if the visa is approved — you don't lose $250 on top of an MRV fee if you're refused.</li>
  <li>People applying for diplomatic categories.</li>
</ul>

<div class="callout info">
  <strong>The "only if approved" detail</strong>
  Unlike the MRV fee ($185) which you pay before your interview and don't get back even if denied, the Visa Integrity Fee is only collected if the consular officer approves you. So your worst-case interview cost is $185 (MRV) + medical exam + travel — not $185 + $250.
</div>

<h2>When you pay it</h2>

<p>After the consular officer informs you your visa is approved — usually at the end of the interview. The payment process varies by embassy:</p>

<ul>
  <li>Some embassies collect it on-site as part of the visa issuance process.</li>
  <li>Some embassies have you pay online before the passport is returned with the visa.</li>
  <li>A few embassies bundle it into the existing MRV payment system, with refunds issued only if denied (uncommon but possible).</li>
</ul>

<p>Check the specific instructions on your interviewing embassy's website. They're updated frequently as the fee implementation rolls out across the global consular network.</p>

<h2>How it changes the math</h2>

<p>For most applicants, the Visa Integrity Fee adds 30-60% to the government fee portion of their application. Here's how typical totals shift:</p>

<table>
  <thead>
    <tr>
      <th>Visa</th>
      <th class="right">Pre-October 2025</th>
      <th class="right">Today</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>B-1/B-2 visitor</td>
      <td class="right">~$185</td>
      <td class="right">~$435 (if approved)</td>
    </tr>
    <tr>
      <td>F-1 student</td>
      <td class="right">~$535 (MRV + SEVIS)</td>
      <td class="right">~$785 (if approved)</td>
    </tr>
    <tr>
      <td>J-1 (most categories)</td>
      <td class="right">~$405 (MRV + SEVIS)</td>
      <td class="right">~$655 (if approved)</td>
    </tr>
    <tr>
      <td>K-1 fiancé(e)</td>
      <td class="right">~$940 (I-129F + DS-160)</td>
      <td class="right">~$1,190 (if approved)</td>
    </tr>
    <tr>
      <td>H-1B (consular processing)</td>
      <td class="right">~$185</td>
      <td class="right">~$435 (if approved)</td>
    </tr>
  </tbody>
</table>

<p>The numbers above are illustrative; actual costs vary by country (reciprocity fees) and personal situation (medical exams, document translations, etc.).</p>

<h2>What you actually need to do</h2>

<p>Three practical things:</p>

<h3>1. Budget for it from the start</h3>
<p>Don't get caught off guard at the end of your interview. Plan for the $250 even before you've been approved, so it doesn't feel like a surprise.</p>

<h3>2. Verify the payment method at your specific embassy</h3>
<p>Embassy fee collection systems differ. Some accept credit cards; some require bank deposit; some use specific online portals. Check your interviewing embassy's website 1-2 weeks before your interview.</p>

<h3>3. Don't confuse the Visa Integrity Fee with other fees</h3>
<p>Common confusion points:</p>
<ul>
  <li>The Visa Integrity Fee is <strong>not</strong> the MRV fee ($185). The MRV is paid first and isn't refundable.</li>
  <li>The Visa Integrity Fee is <strong>not</strong> a reciprocity fee. Reciprocity fees vary by country and are based on how your country treats American applicants.</li>
  <li>The Visa Integrity Fee is <strong>not</strong> an "extra processing" fee that grants you faster or premium service. It's just a fee.</li>
</ul>

<h2>The bigger picture</h2>

<p>The Visa Integrity Fee is part of a broader shift toward making the U.S. visa system more fee-funded and less general-funded. Budgeting at the high end of estimated costs — and verifying current fees on government websites before you file — is the only way to avoid surprises.</p>

<div class="callout warn">
  <strong>One final note about scams</strong>
  Whenever the U.S. government adds a new fee, scammers immediately set up sites that pretend to "collect" or "process" that fee with extra service fees on top. The only legitimate way to pay the Visa Integrity Fee is through your interviewing embassy's official channels. Never pay a "Visa Integrity Fee preparation service" or anything similar — those are fraud.
</div>

<div class="article-cta">
  <div class="article-cta-eyebrow">Visa-Me Guides</div>
  <div class="article-cta-title">Plan your application end-to-end</div>
  <div class="article-cta-sub">All Visa-Me guides have been updated for the new $250 Visa Integrity Fee. Each guide walks you through every stage of your visa journey — DS-160, supporting documents, the interview, and what comes after.</div>
  <a href="/#products" class="article-cta-button">Browse Guides</a>
</div>

<div class="inline-newsletter" style="margin-top: 30px;">
  <h3>Get the next post and any policy updates by email</h3>
  <p>Short monthly newsletter. New posts, fee changes, USCIS news. Unsubscribe anytime.</p>
  <form class="inline-newsletter-form" action="https://app.kit.com/forms/9481764/subscriptions" method="post" target="_blank">
    <input type="email" name="email_address" placeholder="your@email.com" required>
    <button type="submit">Subscribe</button>
  </form>
</div>
`,
  },
  {
    slug: "k1-vs-cr1",
    title: "K-1 vs. CR-1: Which Visa Should You Choose to Bring Your Partner to the U.S.?",
    description: "Marrying a U.S. citizen? Whether to use the K-1 fiancé(e) visa or the CR-1 spouse visa depends on three factors. Here's a clear comparison of cost, timeline, and post-arrival rules.",
    date: "May 5, 2026",
    category: "Comparison Guide",
    readTime: "8 min read",
    content: `
<p>If you're a U.S. citizen marrying someone who lives abroad — or you're the person abroad marrying a U.S. citizen — one of the first hard questions you'll face is whether to go through the K-1 fiancé(e) visa route or the CR-1 spouse visa route.</p>

<p>Both paths end at the same place: your spouse living in the U.S. as a permanent resident. But the routes themselves are very different in cost, timeline, paperwork, and what life looks like immediately after arrival. Choosing the right one for your situation can save you 6-12 months and over $1,500.</p>

<p>Here's a clear comparison.</p>

<h2>The 30-second summary</h2>

<p><strong>Use K-1 if:</strong> You're engaged but not yet married, and you specifically want to have your wedding ceremony in the United States. Your partner can come to the U.S. on a K-1, you must marry within 90 days, then you file for adjustment of status to get the green card.</p>

<p><strong>Use CR-1 (or IR-1) if:</strong> You're already married, OR you're willing to get married abroad before applying. Your spouse enters the U.S. on day one with a green card already in hand, can work immediately, and can travel internationally without restrictions.</p>

<h2>The detailed comparison</h2>

<table>
  <thead>
    <tr>
      <th>Factor</th>
      <th>K-1 Fiancé(e)</th>
      <th>CR-1 / IR-1 Spouse</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Marital status required</strong></td>
      <td>Engaged, not married</td>
      <td>Already married</td>
    </tr>
    <tr>
      <td><strong>Where wedding happens</strong></td>
      <td>In the U.S., within 90 days of arrival</td>
      <td>Abroad (or in U.S. before filing)</td>
    </tr>
    <tr>
      <td><strong>Timeline to U.S. arrival</strong></td>
      <td>~10-14 months</td>
      <td>~12-18 months</td>
    </tr>
    <tr>
      <td><strong>Total government fees</strong></td>
      <td>~$2,830+</td>
      <td>~$1,805+</td>
    </tr>
    <tr>
      <td><strong>Status at U.S. arrival</strong></td>
      <td>K-1 nonimmigrant (must adjust status)</td>
      <td>Permanent resident (green card)</td>
    </tr>
    <tr>
      <td><strong>Work authorization on arrival</strong></td>
      <td>No — must apply for EAD (4-9 months)</td>
      <td>Yes — immediately</td>
    </tr>
    <tr>
      <td><strong>Can travel internationally after arrival</strong></td>
      <td>Restricted until AOS approved</td>
      <td>Yes — immediately</td>
    </tr>
    <tr>
      <td><strong>Overall cost (government fees + forms)</strong></td>
      <td>~$3,500-4,500+</td>
      <td>~$2,000-3,000+</td>
    </tr>
  </tbody>
</table>

<h2>The cost breakdown in detail</h2>

<p>The K-1 route looks faster on paper (10-14 months vs. 12-18 months), but it costs more and comes with additional steps after your partner arrives. Here's why:</p>

<p>With K-1, your fiancé(e) arrives and can't work. You need to get married within 90 days, then file an Adjustment of Status (AOS) package — Form I-485, I-864, I-131, I-765 — which triggers another 4-9 month wait before work authorization and another 1-2 years before the green card is issued. You pay the AOS filing fees on top of the original K-1 costs.</p>

<p>With CR-1, your spouse arrives as a conditional permanent resident. They have a green card on day one, can work immediately, and can travel internationally. After 2 years, you file I-751 to remove conditions and get the full 10-year green card. You skip the entire AOS process.</p>

<h2>Which is faster, really?</h2>

<p>K-1 looks faster to U.S. arrival — typically 10-14 months vs. 12-18 months for CR-1. But to permanent residence (green card), CR-1 is almost always faster. On K-1, you arrive, then wait another 4-9 months for EAD/work permit, then another 1-2 years for the green card. CR-1 you arrive with the green card.</p>

<h2>Who should choose K-1</h2>

<ul>
  <li>You're engaged but not yet married and want the wedding in the U.S.</li>
  <li>Your fiancé(e) doesn't need to work immediately after arrival.</li>
  <li>International travel restrictions immediately after arrival don't matter for your situation.</li>
  <li>You prefer the U.S. wedding planning over a quick civil ceremony abroad.</li>
</ul>

<h2>Who should choose CR-1</h2>

<ul>
  <li>You're already married.</li>
  <li>You're willing to have a simple civil ceremony abroad before starting the CR-1 process (then have a U.S. celebration later — this is totally fine).</li>
  <li>Your spouse needs to work as soon as they arrive in the U.S.</li>
  <li>Your spouse needs to travel internationally shortly after arrival.</li>
  <li>You want to minimize total government fees.</li>
  <li>You're in a longer-term timeline and prefer to minimize steps.</li>
</ul>

<div class="callout tip">
  <strong>The ceremony-abroad workaround</strong>
  Many couples choose CR-1 by having a small civil ceremony in the partner's country (just the legal paperwork — no party), then applying for the CR-1 immediately. When the spouse arrives, they have full permanent resident status. Then you throw the actual wedding celebration in the U.S. This is entirely legal and skips the K-1 work authorization wait and AOS process entirely.
</div>

<h2>Common mistakes</h2>

<p><strong>Starting K-1 when you're already married:</strong> If you're already legally married, you cannot use the K-1. It's for unmarried fiancé(e)s only. You'd use IR-1 (married under 2 years) or CR-1 (married more than 2 years).</p>

<p><strong>Missing the 90-day marriage requirement on K-1:</strong> If your fiancé(e) enters on a K-1 and you don't marry within 90 days, they must leave the U.S. The K-1 does not allow extensions.</p>

<p><strong>Planning on your K-1 partner working before the EAD arrives:</strong> A K-1 entrant cannot legally work in the U.S. until their Employment Authorization Document is approved — typically 4-9 months after filing the AOS package. Plan for this financially.</p>

<div class="article-cta">
  <div class="article-cta-eyebrow">Visa-Me Guides</div>
  <div class="article-cta-title">Get the complete K-1 or Spouse Visa Guide</div>
  <div class="article-cta-sub">Our K-1 guide covers the I-129F petition, evidence of relationship, the 90-day rule, and interview prep. Our IR/CR guide covers the I-130, NVC processing, and the spousal interview. Both updated for 2026.</div>
  <a href="/#products" class="article-cta-button">Browse Guides</a>
</div>

<div class="inline-newsletter" style="margin-top: 30px;">
  <h3>Get monthly visa news and tips</h3>
  <p>Short, useful, no fluff. New posts, policy changes, application tips. Unsubscribe anytime.</p>
  <form class="inline-newsletter-form" action="https://app.kit.com/forms/9481764/subscriptions" method="post" target="_blank">
    <input type="email" name="email_address" placeholder="your@email.com" required>
    <button type="submit">Subscribe</button>
  </form>
</div>
`,
  },
  {
    slug: "b1b2-denials",
    title: "5 Reasons B-1/B-2 Tourist Visas Get Denied (and How to Avoid Them)",
    description: "Most B-1/B-2 tourist visa denials come from a small set of avoidable patterns. Here are the five most common reasons for 214(b) denials and how to avoid them.",
    date: "April 28, 2026",
    category: "Common Mistakes",
    readTime: "7 min read",
    content: `
<p>The B-1/B-2 tourist visa is the most commonly issued U.S. visa in the world — and also the most commonly denied. Most denials come down to a single legal provision: <strong>Section 214(b)</strong> of the Immigration and Nationality Act, which presumes every nonimmigrant visa applicant intends to immigrate unless they prove otherwise.</p>

<p>If you've received a 214(b) denial, or you're preparing for an interview and want to avoid one, this post covers the five patterns that lead to the vast majority of refusals — and what to do about each one.</p>

<h2>What 214(b) actually means</h2>

<p>Section 214(b) is short and brutal: it puts the burden of proof on you. You must convince the consular officer that you:</p>

<ul>
  <li>Have a specific, temporary purpose for visiting the U.S.</li>
  <li>Have strong ties to your home country that will compel you to return</li>
  <li>Can financially support yourself during the trip without working in the U.S.</li>
</ul>

<p>The officer has roughly 2-5 minutes to make this judgment. They're not interrogating you — they're pattern-matching against thousands of prior interviews. If your pattern matches the "intending immigrant" pattern, you get refused.</p>

<p>Here are the five patterns that trigger most 214(b) denials.</p>

<h2>Reason 1: Weak ties to your home country</h2>

<p>This is the single biggest reason. The officer is trying to predict whether you'll return home, and they look for evidence that there's something pulling you back: stable employment, family obligations, property, ongoing studies, or a business.</p>

<p><strong>Red flags:</strong></p>
<ul>
  <li>Unemployed or between jobs</li>
  <li>Recently graduated with no job lined up</li>
  <li>No spouse, children, or close family in your home country</li>
  <li>No property, no business, no significant savings tied to your home country</li>
</ul>

<p><strong>How to strengthen your case:</strong> Bring concrete evidence of ties — employment letter on company letterhead with salary and approved leave dates, business registration, property deeds, family documents showing dependents at home. Don't just claim ties; document them.</p>

<h2>Reason 2: Vague or unrealistic trip purpose</h2>

<p>"I want to see America" is not a trip purpose that gets approved. Officers want specifics — where, when, why, with whom, and how long.</p>

<p><strong>Red flags:</strong></p>
<ul>
  <li>No specific cities, dates, or itinerary</li>
  <li>Saying you'll "explore opportunities" or "look at things"</li>
  <li>A trip duration that doesn't match the stated purpose</li>
  <li>Claiming a luxury vacation that doesn't match your stated income</li>
</ul>

<p><strong>How to fix it:</strong> Prepare a specific answer in 1-2 sentences. "I'm visiting my brother in Chicago for two weeks in July. He's getting married on July 18 and I'll attend the wedding and meet his fiancée's family." That's specific, time-bounded, and verifiable.</p>

<h2>Reason 3: Suspicious financial situation</h2>

<p>The officer wants to see that you can pay for your trip without working in the U.S. They also look for inconsistencies between your stated income and the trip you're planning.</p>

<p><strong>Red flags:</strong></p>
<ul>
  <li>Bank statements showing large recent deposits with no source explanation</li>
  <li>Stated income too low to afford the trip you've planned</li>
  <li>Stated income too high without supporting tax documentation</li>
</ul>

<p><strong>How to fix it:</strong> Bring 3-6 months of bank statements showing stable balances (not just a recent large deposit). Bring proof of income — pay stubs, tax returns, or business income documents.</p>

<div class="callout warn">
  <strong>The fresh-deposit trap</strong>
  A common mistake: applicants borrow money from family before the interview and deposit it in their bank to "show" funds. Officers catch this immediately — they see a low average balance with one large deposit a few weeks before the interview. This actively hurts your case. Bring real, consistent financial history.
</div>

<h2>Reason 4: Previous immigration issues</h2>

<p>If you have a history of any of these, expect heightened scrutiny:</p>

<ul>
  <li>Prior visa denials (especially recent ones)</li>
  <li>Prior overstays in any country (not just the U.S.)</li>
  <li>Deportation or removal from the U.S. or elsewhere</li>
  <li>Arrests or convictions (even minor ones, even from years ago)</li>
</ul>

<p><strong>How to address it:</strong> Be 100% honest about everything in your DS-160. Answering "no" when the answer is "yes" turns a recoverable issue into a permanent ban for misrepresentation under INA Section 212(a)(6)(C)(i). If you have prior issues, address them directly in the interview.</p>

<h2>Reason 5: Saying the wrong thing in the interview</h2>

<p>Some applicants have a strong case on paper and lose it in 30 seconds at the window. Common verbal mistakes:</p>

<ul>
  <li>"My cousin/uncle/friend already lives in the U.S." (without context)</li>
  <li>"I want to see if I like it" — implies considering staying</li>
  <li>"My company can transfer me there later"</li>
  <li>"I have friends who can help me find work" — major red flag</li>
</ul>

<p><strong>How to fix it:</strong> Answer the question that was asked, then stop talking. Don't volunteer information. Practice your answers before the interview — specific, honest, and bounded answers work best.</p>

<div class="callout tip">
  <strong>The 5-7-minute window</strong>
  The average B-1/B-2 interview lasts 2-5 minutes for approvals and 30 seconds to 2 minutes for denials. The officer makes their decision in the first 60-90 seconds based on your first few answers. Be clear, specific, and confident from the very first question.
</div>

<h2>What to do if you get denied under 214(b)</h2>

<p>A 214(b) denial is not appealable and not permanent. You can reapply at any time. But applying again without addressing what caused the first denial almost always results in a second denial.</p>

<ul>
  <li><strong>Wait until your circumstances have meaningfully changed.</strong> Wait 6-12 months at minimum.</li>
  <li><strong>Strengthen your ties.</strong> Get a more stable job, accumulate savings, get married, have children, buy property.</li>
  <li><strong>Get a more specific trip purpose.</strong> "I want to attend my niece's wedding on July 18" is much stronger than "I want to visit my sister."</li>
  <li><strong>Be honest about the prior denial.</strong> The officer will see it in your record. Address it directly.</li>
</ul>

<div class="article-cta">
  <div class="article-cta-eyebrow">Visa-Me Guides</div>
  <div class="article-cta-title">Get the complete B-1/B-2 interview prep</div>
  <div class="article-cta-sub">Our B-1/B-2 Guide includes 30+ common interview questions with strong answer frameworks, a complete document checklist, and a section on rebuilding your case after a 214(b) denial.</div>
  <a href="/#products" class="article-cta-button">See the B-1/B-2 Guide — $39</a>
</div>

<div class="inline-newsletter" style="margin-top: 30px;">
  <h3>Get monthly visa news and tips</h3>
  <p>Short, useful, no fluff. New posts, policy changes, application tips. Unsubscribe anytime.</p>
  <form class="inline-newsletter-form" action="https://app.kit.com/forms/9481764/subscriptions" method="post" target="_blank">
    <input type="email" name="email_address" placeholder="your@email.com" required>
    <button type="submit">Subscribe</button>
  </form>
</div>
`,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
