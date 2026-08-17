"use client";

import { useEffect, useMemo } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, ChevronRight, MessageCircle, NotebookText, PhoneCall } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/utils/translations";

const confettiPieces = Array.from({ length: 40 }, (_, index) => ({
  id: index,
  left: `${50 + (Math.random() - 0.5) * 60}%`,
  top: `${25 + (Math.random() - 0.5) * 15}%`,
  color: ["#0d631b", "#88d982", "#a3f69c", "#6e5100"][index % 4],
  size: 8 + (index % 4) * 3,
  dx: (Math.random() - 0.5) * 120,
  dy: (Math.random() - 0.5) * 120,
  rot: Math.random() * 360,
  delay: Math.random() * 200,
}));

export default function ApplicationSuccessPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language] || translations.ta;

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {});
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const steps = useMemo(
    () => [
      { label: t.success.step1, subtitle: t.success.step1Desc, icon: PhoneCall },
      { label: t.success.step2, subtitle: t.success.step2Desc, icon: NotebookText },
      { label: t.success.step3, subtitle: t.success.step3Desc, icon: MessageCircle },
    ],
    [t]
  );

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1a1c1a]">
      <header className="sticky top-0 z-50 flex h-14 w-full items-center justify-between bg-[#faf9f5] px-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-100 hover:bg-[#e2e3df]/20 active:scale-95"
            aria-label="Back"
          >
            <ArrowLeft className="text-[#0d631b]" size={20} />
          </button>
          <h1 className="text-[20px] font-semibold text-[#0d631b]">Rubber Roots</h1>
        </div>
      </header>

      <main className="relative mx-auto flex min-h-[calc(100vh-56px)] max-w-lg flex-col items-center justify-start overflow-hidden px-4 pb-28 pt-12">
        <div className="relative mb-8 group">
          <div className="absolute inset-0 scale-150 rounded-full bg-[#0d631b]/10 animate-pulse" />
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-[#dcefe0] text-[#0d631b] shadow-lg transition-transform duration-500 group-hover:scale-110">
            <CheckCircle size={72} fill="currentColor" />
          </div>
        </div>

        <div className="mb-10 space-y-2 text-center">
          <h2 className="text-[28px] font-bold leading-[36px] text-[#1a1c1a]">{t.success.title}</h2>
          <p className="text-[16px] leading-[24px] text-[#40493d]">{t.success.subtitle}</p>
        </div>

        <div className="mb-10 w-full rounded-xl border border-[#bfcaba] bg-[#ffffff] p-4 shadow-sm">
          <div className="flex items-start gap-4">
            <div
              className="h-16 w-16 shrink-0 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGrii0ejVJFVRbv2xgJC2Jqqt3uGZTHdMdSydOQceBGE2HHdbKBiIyYX2YOLxw8EFjVKtO49QPAGStBPaM7QKLRfaA9oowZJdQ46gg_3TWzn25jZfPZ1IHY_PFtIkr-WI4z4o8mDSyQRFikDQczixwQ0GBsElnVBVcQ9wfcVHHQgODg7YhFmjx6H1N1Lmh7XyTAJ8SXtGndMZbyFVXLCNj0h8n5EOS0yuS-SEL3ZinVEGfEx1QRGTYRCyVQs36EdqE29yzDmdbERcD')",
              }}
            />
            <div className="flex-1">
              <span className="mb-1 inline-block rounded-full bg-[#cbffc2] px-2 py-0.5 text-[12px] font-medium text-[#005312]">{t.success.approved}</span>
              <h3 className="text-[20px] font-semibold text-[#0d631b]">டப்பிங் வேலை (Tapping Job)</h3>
              <div className="mt-1 flex items-center gap-1 text-[14px] font-medium text-[#40493d]">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                கன்னியாகுமரி
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-[#e2e3df] pt-4">
            <div>
              <p className="text-[12px] text-[#40493d]">சம்பளம்</p>
              <p className="text-[20px] font-semibold text-[#0d631b]">₹18,000 / மாதம்</p>
            </div>
            <div className="text-right">
              <p className="text-[12px] text-[#40493d]">தொடங்கும் தேதி</p>
              <p className="text-[14px] font-bold text-[#1a1c1a]">அக்டோபர் 25, 2023</p>
            </div>
          </div>
        </div>

        <div className="w-full space-y-4">
          <h4 className="px-1 text-[14px] font-bold uppercase tracking-wider text-[#7a5649]">{t.success.nextSteps}</h4>

          {steps.map(({ label, subtitle, icon: Icon }) => (
            <div
              key={label}
              className="group flex cursor-pointer items-center gap-4 rounded-xl bg-[#f4f4f0] p-4 transition-colors hover:bg-[#e8e8e4]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffffff] text-[#0d631b] shadow-sm transition-transform duration-150 group-active:scale-90">
                <Icon size={20} fill="currentColor" />
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-semibold text-[#1a1c1a]">{label}</p>
                <p className="text-[12px] text-[#40493d]">{subtitle}</p>
              </div>
              <ChevronRight size={18} className="text-[#707a6c]" />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {confettiPieces.map((piece) => (
            <span
              key={piece.id}
              className="absolute rounded-sm opacity-100"
              style={{
                left: piece.left,
                top: piece.top,
                width: `${piece.size}px`,
                height: `${piece.size}px`,
                backgroundColor: piece.color,
                borderRadius: piece.size > 8 ? "50%" : "2px",
                animation: `confetti-burst ${1200 + piece.delay}ms ease-out forwards`,
                animationDelay: `${piece.delay}ms`,
              }}
            />
          ))}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full max-w-lg -translate-x-1/2 left-1/2 bg-[#faf9f5]/95 px-4 py-5 backdrop-blur-sm">
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={() => router.push("/my-applications")}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#0d631b] text-[14px] font-semibold text-white shadow-lg transition-transform duration-100 active:scale-95"
          >
            <span>{t.success.myApplications}</span>
            <ArrowRight size={18} />
          </button>
          <button
            type="button"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-full border-2 border-[#7a5649] bg-[#faf9f5] text-[14px] font-semibold text-[#7a5649] transition-transform duration-100 active:scale-95"
          >
            <MessageCircle size={18} />
            <span>{t.success.help}</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes confetti-burst {
          0% {
            opacity: 1;
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg) scale(0.7);
          }
        }
      `}</style>
    </div>
  );
}
