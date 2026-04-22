"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export type Language = "EN" | "FR" | "GR";

export const LANGUAGES: Language[] = ["EN", "FR", "GR"];

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  initial = "EN",
}: {
  children: ReactNode;
  initial?: Language;
}) {
  const [language, setLanguage] = useState<Language>(initial);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}