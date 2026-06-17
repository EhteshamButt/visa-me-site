"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { TRANSLATIONS, HTML_LANGS } from "@/lib/translations";

type LangCode = string;

interface LanguageContextValue {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
});

function detectLang(): LangCode {
  try {
    const params = new URLSearchParams(window.location.search);
    const p = params.get("lang");
    if (p && TRANSLATIONS[p]) return p;
  } catch {}
  try {
    const stored = localStorage.getItem("visame_lang");
    if (stored && TRANSLATIONS[stored]) return stored;
  } catch {}
  const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  if (TRANSLATIONS[browser]) return browser;
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("en");

  useEffect(() => {
    setLangState(detectLang());
  }, []);

  function setLang(newLang: LangCode) {
    if (!TRANSLATIONS[newLang]) newLang = "en";
    setLangState(newLang);
    try { localStorage.setItem("visame_lang", newLang); } catch {}
    try {
      const url = new URL(window.location.href);
      if (newLang === "en") url.searchParams.delete("lang");
      else url.searchParams.set("lang", newLang);
      window.history.replaceState({}, "", url.toString());
    } catch {}
    // Update html lang attribute
    document.documentElement.lang = HTML_LANGS[newLang] || "en";
  }

  function t(key: string): string {
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) ||
           (TRANSLATIONS["en"] && TRANSLATIONS["en"][key]) ||
           key;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
