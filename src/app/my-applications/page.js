"use client";

import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/utils/translations";
import { ArrowLeft, ArrowRight, CheckCircle, ChevronRight, Info, MapPin, Search, XCircle, Clock3, Briefcase, Home, BriefcaseBusiness, ClipboardList, Bell, User } from "lucide-react";

const applications = [
  {
    id: 1,
    title: "டப்பிங் வேலை",
    location: "கன்னியாகுமரி",
    date: "24 ஜனவரி 2024",
    status: "விண்ணப்பம் ஏற்றுக்கொள்ளப்பட்டது",
    tone: "approved",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7hv_i2VxlWz9Qb5BtY3yQs5ON2plTYs2YhDCwqpGY9SEF5bzt6lhpzoL0IvVIyDRDbuhJ-owMTwDQoBwkOwCgLc5wmRX0XFsOrqgftV7ZvPWHOqsYkoP7810vXwi_WTvY_TXWDpaHSlxJDCcUdhIcRaS4vQmc34Od4dMyXZE8jLVvPEw61nMx2wc8JYha05oY0NTPawKyvNkzTl02EadLo2ZRyxFduIAPVhPxBTvhHIl69y81z7Jlv0hp8ng02zHRzZlodR-Twbqb",
  },
  {
    id: 2,
    title: "பால் சேகரிப்பு வேலை",
    location: "நாகர்கோவில்",
    date: "22 ஜனவரி 2024",
    status: "தேர்வு செய்ய பயிற்சி",
    tone: "pending",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVGgmWexjxIRKvk7oCNwOYiTFAysrSDnI_OzGFuVTt795axV32asG41bx_dnqz_pJrQjjcgVsvODRCS7E--DdKtqqmhwVKRoFejy2LdTtShtTHyufaXYRX_vMxcKXtRNdLEmWI07f6gcmb3cXKg7M3IvF-Dz79nxiD5hKZqTRJV29bTJGdVBWoS2H4ii5Hcor4hNrX6E4oeDMBTv2Ux1zH7mxmrxBRHlqHgHqUqR_lVBQ-U8uTXwnuDaG8ycM3CRGKgQs1hECZ0MMm",
  },
  {
    id: 3,
    title: "தோட்ட பராமரிப்பு வேலை",
    location: "முட்டம், குளச்சல்",
    date: "18 ஜனவரி 2024",
    status: "முடிவடைந்தது",
    tone: "ended",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxe1u9f4xQY45EpBmDX-3IsJbWCkZSb86o_Oi_fKQ3az8uzxAJCpI5v4HRX9tfzNqnGW80VyBXQ0Qg80CJdnHeGC_N15Y9HyUMczcRfqkX4YpiaH2_TdzJtOfQTFvNZ98zI9Ht9lzFPSqL0HPlfrjstC44bLhedtLwMvjSCW2dTSXG4krIDiDTAXVvPioj8ungP7QCIY_KzzeCASmGMafqxo3zdFRasD4f_2lK6vHNB5C-o5eeJbGHJGCvxIMfwrGOjjeioi5ZexEr",
  },
];

export default function MyApplicationsPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language] || translations.ta;

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1a1c1a] pb-24">
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
          <h1 className="text-[20px] font-semibold text-[#0d631b]">{t.myApplications.title}</h1>
        </div>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-100 hover:bg-[#e2e3df]/20 active:scale-95"
          aria-label="Search applications"
        >
          <Search className="text-[#40493d]" size={20} />
        </button>
      </header>

      <main className="mx-auto max-w-screen-xl px-4 py-6">
        <div className="mb-4 flex border-b border-[#bfcaba] bg-[#faf9f5]">
          <button className="flex-1 border-b-[3px] border-[#0d631b] py-4 text-center text-[14px] font-semibold text-[#0d631b]">
            {t.myApplications.active}
          </button>
          <button className="flex-1 py-4 text-center text-[14px] font-semibold text-[#40493d]">
            {t.myApplications.ended}
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {applications.map((application) => {
            const isApproved = application.tone === "approved";
            const isPending = application.tone === "pending";
            const isEnded = application.tone === "ended";

            return (
              <div
                key={application.id}
                className="rounded-xl border border-[#bfcaba] bg-[#ffffff] p-4 shadow-[0_4px_12px_rgba(122,86,73,0.05)] transition-shadow hover:shadow-md"
              >
                <div className="flex gap-4">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-[#e2e3df]">
                    <img src={application.image} alt={application.title} className="h-full w-full object-cover" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-[20px] font-semibold text-[#1a1c1a]">{application.title}</h3>
                      <div className="mt-1 flex items-center gap-1 text-[#40493d]">
                        <MapPin size={18} />
                        <p className="text-[12px] font-medium">{application.location}</p>
                      </div>
                    </div>
                    <p className="mt-1 text-[12px] text-[#40493d]">விண்ணப்ப தேதி: {application.date}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-[#e2e3df] pt-4">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[12px] font-medium ${
                      isApproved
                        ? "bg-[#cbffc2] text-[#005312]"
                        : isPending
                          ? "bg-[#ffdfa0] text-[#5c4300]"
                          : "bg-[#e8e8e4] text-[#40493d]"
                    }`}
                  >
                    {isApproved ? <CheckCircle size={16} fill="currentColor" /> : isPending ? <Clock3 size={16} /> : <XCircle size={16} />}
                    {application.status}
                  </span>

                  <button
                    type="button"
                    className={`text-[14px] font-semibold ${isEnded ? "cursor-not-allowed text-[#40493d]" : "text-[#0d631b] hover:underline"}`}
                    disabled={isEnded}
                  >
                    {t.myApplications.details}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-xl border border-[#f0c8b5] bg-[#ffdbcf] p-4">
          <div className="flex gap-3">
            <Info className="mt-0.5 text-[#603f33]" size={20} />
            <div>
              <h4 className="text-[14px] font-semibold text-[#603f33]">{t.myApplications.summaryTitle}</h4>
              <p className="mt-1 text-[16px] leading-[24px] text-[#795548]">
                {t.myApplications.summaryText}
              </p>
            </div>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full border-t border-[#bfcaba] bg-[#faf9f5] px-2 py-3 shadow-lg z-50">
        <div className="mx-auto flex max-w-xl items-center justify-around">
          {[
            [Home, t.myApplications.home, "/"],
            [BriefcaseBusiness, t.myApplications.work, "/jobs"],
            [ClipboardList, t.myApplications.applications, "/my-applications"],
            [Bell, t.myApplications.notifications, "/notifications"],
            [User, t.myApplications.profile, "/profile"],
          ].map(([Icon, label, path], index) => (
            <button
              key={label}
              type="button"
              onClick={() => router.push(path)}
              className={`flex flex-col items-center justify-center rounded-lg p-2 transition-colors ${
                index === 2 ? "bg-[#cbffc2] text-[#005312] rounded-full px-4 py-1" : "text-[#40493d] hover:bg-[#e8e8e4]"
              }`}
            >
              <Icon size={20} fill={index === 2 ? "currentColor" : "none"} />
              <span className="mt-1 text-[12px] leading-[16px]">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
