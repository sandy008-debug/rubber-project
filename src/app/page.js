"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/utils/translations";

export default function Home() {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const t = translations[language] || translations.ta;

  useEffect(() => {
    const buttons = Array.from(document.querySelectorAll("button"));
    const touchHandlers = [];

    buttons.forEach((button) => {
      const onTouchStart = () => button.classList.add("brightness-90");
      const onTouchEnd = () => button.classList.remove("brightness-90");

      touchHandlers.push([button, onTouchStart, onTouchEnd]);
      button.addEventListener("touchstart", onTouchStart);
      button.addEventListener("touchend", onTouchEnd);
    });

    const handleOrientation = (event) => {
      const img = document.querySelector('img[data-alt*="plantation"]');
      if (!img) return;

      const x = event.beta / 10;
      const y = event.gamma / 10;
      img.style.transform = `scale(1.1) translate(${y}px, ${x}px)`;
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation);
    }

    return () => {
      touchHandlers.forEach(([button, start, end]) => {
        button.removeEventListener("touchstart", start);
        button.removeEventListener("touchend", end);
      });

      if (window.DeviceOrientationEvent) {
        window.removeEventListener("deviceorientation", handleOrientation);
      }
    };
  }, []);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <main
      className="w-full max-w-[480px] min-h-screen flex flex-col justify-between px-4 py-8 relative mx-auto"
      style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#faf9f5", color: "#1a1c1a" }}
    >
      <div className="fixed inset-0 -z-10 opacity-30" />

      <section className="flex flex-col items-center text-center mt-6 animate-fade-up">
        <div className="w-32 h-32 mb-6 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-[#0d631b]/10 rounded-full blur-2xl" />
          <img
            className="w-full h-full object-contain relative z-10"
            data-alt="A minimalist, professional logo for an agricultural labor app named Rubber Roots. The logo features a stylized green rubber tree leaf integrated with a subtle root motif, using a forest green and soil brown color palette. The style is clean, modern, and trustworthy, with high-quality vector-like precision against a soft cream background."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUcBVqKOJlm99-ZfZ8vKehOeqHaPbiV0lpLLxelu9epdxoddHxXu3VvOd6L4teTk8K_BwdYnjsT9Y-zC-3oH8Mq8xT-DIPfGg5HcZ92LjZXo7l17yjt_nQk4M1qSc8ay6E1V28by0WMjER7hU3Q0kcVrKy7sm92bCzHZq5uYP9yvmrzwTNedBr_lZ5xDUfMpAGCTvWC7HciDAlWV-9MZtVzXbFxXvWmaZJrln_JRG_krLwS2xEQFvZ_Sn6TtsGRSRfaTHhCj5rwadii-k"
            alt="Rubber Roots logo"
          />
        </div>

        <h1 className="text-[#0d631b] text-[28px] leading-[36px] font-bold mb-1">
          {t.welcome.title}
        </h1>

        <p className="text-[#7a5649] text-[20px] leading-[28px] font-semibold mb-4">
          {t.welcome.subtitle}
        </p>
      </section>

      <section className="flex flex-col items-center text-center px-2 animate-fade-up delay-100">
        <div className="w-full h-48 mb-6 bg-[#f4f4f0] rounded-xl flex items-center justify-center overflow-hidden border border-[#bfcaba] shadow-sm">
          <img
            className="w-full h-full object-cover transition-transform duration-300 ease-out"
            data-alt="An artistic illustration representing a serene rubber plantation at dawn, with soft golden light filtering through rows of tall rubber trees. The style is semi-abstract and tactile, emphasizing the natural beauty and industrious spirit of the work. The color palette is composed of earthy greens, warm browns, and gentle morning yellows, creating an inviting and dignified atmosphere for agricultural workers."
            src="/rubber-tree-bowl-filled-with-latex_1150-10344.avif"
            alt="Rubber plantation illustration"
          />
        </div>

        <p className="text-[#40493d] text-[18px] leading-[28px] px-4">
          {t.welcome.imageText}
        </p>
      </section>

      <section className="flex flex-col gap-4 mt-8 animate-fade-up delay-200">
        <button
          type="button"
          onClick={() => router.push("/jobs")}
          className="w-full h-14 bg-[#0d631b] text-[#ffffff] text-[20px] leading-[28px] font-semibold rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center"
        >
          {t.welcome.login}
        </button>

        <button className="w-full h-14 bg-[#faf9f5] border-2 border-[#0d631b] text-[#0d631b] text-[20px] leading-[28px] font-semibold rounded-xl active:scale-95 transition-all flex items-center justify-center">
          {t.welcome.signup}
        </button>

        <div className="mt-6 flex flex-col items-center gap-2">
          <label className="text-[#40493d] text-[12px] leading-[16px] font-medium">
            {t.welcome.language}
          </label>

          <div className="relative w-32 group">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="appearance-none w-full bg-[#e8e8e4] border border-[#bfcaba] text-[#1a1c1a] text-[14px] leading-[20px] font-semibold rounded-lg py-2 px-4 pr-10 focus:ring-2 focus:ring-[#0d631b] focus:outline-none transition-all cursor-pointer"
            >
              <option value="ta">தமிழ்</option>
              <option value="en">English</option>
              <option value="ml">മലയാളം</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#40493d] pointer-events-none">
              expand_more
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
