"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "hi" | "mr";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "nav.knowYourRights": "Know Your Rights",
    "nav.legalResources": "Legal Resources",
    "nav.documentAnalyzer": "Document Analyzer",
    "nav.timeline": "Timeline",
    "nav.trustCenter": "Trust Center",
    "nav.getStarted": "Get Started",
  },
  hi: {
    "nav.knowYourRights": "अपने अधिकार जानें",
    "nav.legalResources": "कानूनी संसाधन",
    "nav.documentAnalyzer": "दस्तावेज़ विश्लेषक",
    "nav.timeline": "समय रेखा",
    "nav.trustCenter": "विश्वास केंद्र",
    "nav.getStarted": "शुरू करें",
  },
  mr: {
    "nav.knowYourRights": "तुमचे हक्क जाणून घ्या",
    "nav.legalResources": "कायदेशीर संसाधने",
    "nav.documentAnalyzer": "दस्तऐवज विश्लेषक",
    "nav.timeline": "वेळापत्रक",
    "nav.trustCenter": "विश्वास केंद्र",
    "nav.getStarted": "सुरुवात करा",
  }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    // @ts-expect-error key can be any string
    return translations[language][key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
