"use client";

import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/utils/translations";
import {
  ArrowLeft,
  Bell,
  Briefcase,
  CheckCircle,
  ChevronRight,
  CircleDashed,
  Home,
  Info,
  MapPin,
  MoreVertical,
  Search,
  School,
  User,
  BriefcaseBusiness,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "அறிவிப்பு செய்தி",
    time: "இன்று, 10:30 AM",
    description: "புதிய வேலை வாய்ப்பு குறித்து உங்கள் பகுதியில் 3 புதிய டப்பிங் வேலைகள் பதிவேற்றம் செய்யப்பட்டுள்ளன.",
    unread: true,
    accent: "primary",
    icon: Bell,
  },
  {
    id: 2,
    title: "வேலை விண்ணப்பம்",
    time: "23 ஜனவரி, 06:00 PM",
    description: "உங்கள் விண்ணப்பம் ஏற்றுக்கொள்ளப்பட்டது. விண்ணப்ப எண்: RR9827-01. வாழ்த்துகள்!",
    unread: false,
    accent: "secondary",
    icon: Briefcase,
  },
  {
    id: 3,
    title: "பயிற்சி முகாம்",
    time: "22 ஜனவரி, 04:15 PM",
    description: "வருகின்ற திங்கள்கிழமை ரப்பர் பால் சேகரிப்பு குறித்த நவீன தொழில்நுட்ப பயிற்சி முகாம் நடைபெறுகிறது.",
    unread: false,
    accent: "tertiary",
    icon: School,
  },
  {
    id: 4,
    title: "நிர்வாக செய்தி",
    time: "20 ஜனவரி, 09:00 AM",
    description: "செயலியில் புதிய வசதிகள் சேர்க்கப்பட்டுள்ளன. உங்கள் சுயவிவர பக்கத்தை சரிபார்க்கவும்.",
    unread: false,
    accent: "surface",
    icon: Info,
  },
];

const filterOptions = ["அனைத்தும்", "படிக்காதவை", "வேலைகள்"];

export default function NotificationsPage() {
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
            aria-label="Back"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-100 hover:bg-[#e2e3df]/20 active:scale-95"
          >
            <ArrowLeft className="text-[#0d631b]" size={20} />
          </button>
          <h1 className="text-[20px] font-semibold text-[#0d631b]">{t.notifications.title}</h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-100 hover:bg-[#e2e3df]/20 active:scale-95"
            aria-label="Search notifications"
          >
            <Search className="text-[#40493d]" size={20} />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-100 hover:bg-[#e2e3df]/20 active:scale-95"
            aria-label="More actions"
          >
            <MoreVertical className="text-[#40493d]" size={20} />
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl px-4 pb-24 pt-4">
        <div className="mb-6 flex gap-2 overflow-x-auto">
          {filterOptions.map((option, index) => (
            <span
              key={option}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-[14px] font-semibold ${
                index === 0
                  ? "bg-[#0d631b] text-white shadow-sm"
                  : "border border-[#bfcaba] bg-[#e8e8e4] text-[#40493d]"
              }`}
            >
              {option}
            </span>
          ))}
        </div>

        <div className="space-y-3">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            const accentClass =
              notification.accent === "primary"
                ? "bg-[#cbffc2] text-[#0d631b]"
                : notification.accent === "secondary"
                  ? "bg-[#f4d9d0] text-[#7a5649]"
                  : notification.accent === "tertiary"
                    ? "bg-[#ffdfa0] text-[#6e5100]"
                    : "bg-[#e2e3df] text-[#40493d]";

            return (
              <div
                key={notification.id}
                className="message-card relative flex gap-4 overflow-hidden rounded-xl border border-[#bfcaba] bg-[#ffffff] p-4 shadow-[0_4px_12px_rgba(122,86,73,0.05)]"
              >
                {notification.unread && (
                  <div className="absolute left-0 top-0 h-full w-2 bg-[#0d631b]" />
                )}

                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${accentClass}`}>
                  <Icon size={20} fill={notification.accent === "primary" ? "currentColor" : "none"} />
                </div>

                <div className="flex-1">
                  <div className="mb-1 flex items-start justify-between gap-3">
                    <h3 className="text-[14px] font-semibold text-[#0d631b]">{notification.title}</h3>
                    <span className="text-[12px] text-[#707a6c]">{notification.time}</span>
                  </div>
                  <p className="text-[16px] leading-[24px] text-[#40493d]">{notification.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full border-t border-[#bfcaba] bg-[#faf9f5] px-2 py-3 shadow-lg z-50">
        <div className="mx-auto flex max-w-xl items-center justify-around">
          {[
            [Home, t.notifications.home, "/"],
            [BriefcaseBusiness, t.notifications.work, "/jobs"],
            [Briefcase, t.notifications.applications, "/my-applications"],
            [Bell, t.notifications.notifications, "/notifications"],
            [User, t.notifications.profile, "/profile"],
          ].map(([Icon, label, path], index) => (
            <button
              key={label}
              type="button"
              onClick={() => router.push(path)}
              className={`flex flex-col items-center justify-center rounded-lg p-2 transition-colors ${
                index === 3 ? "rounded-full bg-[#cbffc2] px-4 py-1 text-[#005312]" : "text-[#40493d] hover:bg-[#e8e8e4]"
              }`}
            >
              <Icon size={20} fill={index === 3 ? "currentColor" : "none"} />
              <span className="mt-1 text-[12px] leading-[16px]">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
