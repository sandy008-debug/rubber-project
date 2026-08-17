"use client";

import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="fixed right-4 top-4 z-50">
      <div className="relative">
        <select
          value={language}
          onChange={handleLanguageChange}
          className="appearance-none rounded-lg border border-[#bfcaba] bg-[#faf9f5] px-3 py-2 pr-9 text-[12px] font-semibold text-[#1a1c1a] shadow-sm outline-none focus:ring-2 focus:ring-[#0d631b]"
        >
          <option value="ta">தமிழ்</option>
          <option value="en">English</option>
          <option value="ml">മലയാളം</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#40493d]" size={16} />
      </div>
    </div>
  );
}
