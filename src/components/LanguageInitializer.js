"use client";

import { useEffect } from "react";

const STORAGE_KEY = "rubber-roots-language";

export default function LanguageInitializer() {
  useEffect(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY) || "ta";
    document.documentElement.lang = savedLanguage;
  }, []);

  return null;
}
