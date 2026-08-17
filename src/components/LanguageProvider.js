"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "rubber-roots-language";
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ta");

  useEffect(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY) || "ta";
    setLanguage(savedLanguage);
    document.documentElement.lang = savedLanguage;
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export default function LanguageProviderWrapper({ children }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
