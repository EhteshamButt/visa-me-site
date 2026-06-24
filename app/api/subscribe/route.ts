import { NextRequest, NextResponse } from "next/server";

const FORM_IDS: Record<string, string> = {
  en: "9481764",
  es: "9607659",
  pt: "9607723",
  // Add more as you create them in Kit:
  // fr: "XXXXXXX",
  // fr: "XXXXXXX",
  // de: "XXXXXXX",
  // zh: "XXXXXXX",
  // vi: "XXXXXXX",
};

export async function POST(request: NextRequest) {
  try {
    const { email, language } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const formId = FORM_IDS[language] ?? FORM_IDS["en"];

    const body = new URLSearchParams({ email_address: email });
    if (language) body.append("fields[language]", language);

    const res = await fetch(`https://app.kit.com/forms/${formId}/subscriptions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json, text/html",
      },
      body: body.toString(),
      redirect: "follow",
    });

    // Kit returns 200 on success or redirects to thank-you page
    if (res.ok || res.status === 302 || res.status === 301) {
      return NextResponse.json({ success: true });
    }

    const text = await res.text();
    console.error("Kit error response:", res.status, text.slice(0, 200));
    return NextResponse.json({ error: "Subscription failed" }, { status: 400 });

  } catch (err) {
    console.error("Subscribe route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
