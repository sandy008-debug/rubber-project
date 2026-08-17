"use client";

import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/utils/translations";
import {
  ArrowLeft,
  BriefcaseBusiness,
  ChevronRight,
  FileText,
  Home,
  Lock,
  LogOut,
  MapPin,
  User,
  Bell,
  ClipboardList,
  Settings,
  Pencil,
} from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language] || translations.ta;

  const menuItems = [
    { icon: User, label: t.profile.personal },
    { icon: MapPin, label: t.profile.address },
    { icon: FileText, label: t.profile.docs },
    { icon: BriefcaseBusiness, label: t.profile.workExp },
    { icon: Lock, label: t.profile.password },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1a1c1a] pb-24">
      <header className="sticky top-0 z-40 flex h-14 w-full items-center justify-between bg-[#faf9f5] px-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#0d631b] transition-all duration-100 hover:bg-[#e2e3df]/20 active:scale-95"
            aria-label="Back"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-[20px] font-semibold text-[#0d631b]">{t.profile.title}</h1>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#0d631b] transition-all duration-100 hover:bg-[#e2e3df]/20 active:scale-95"
          aria-label="Settings"
        >
          <Settings size={20} />
        </button>
      </header>

      <main className="flex-grow pb-24">
        <section className="flex flex-col items-center px-4 pb-8 pt-6 text-center">
          <div className="group relative mb-4">
            <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-[#eeeeea] shadow-[0_4px_12px_rgba(121,85,72,0.05)]">
              <img
                className="h-full w-full object-cover"
                alt="Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVrPnNA02NPQcsJTR9C1_KKtOC2GcBAuSQXeQx53aX3Vvfq4lor1NlgwCo9WFcusJkth1WTWgzPKgWWnlD47Er43-gvD1ZlrpfLNYRdCI45I9_s9YZch4AVtbdRUdO0K-NSCGiZO2zV89jez5DfsckzIYsiZk6ke6aAbRZ8P3TZa_NeUp0tMIgnPSclfqcEowMe4NyFDzHTPjWA0EwHL6TNen3pR3tlX3pZUqPnnqzfl2yhDzVt0VtQ-DDuxFhB_R2ext40LUEiit3"
              />
            </div>
            <button
              type="button"
              className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#0d631b] text-white shadow-lg transition-transform active:scale-90"
              aria-label="Edit profile"
            >
              <Pencil size={18} />
            </button>
          </div>

          <h2 className="text-[24px] font-semibold text-[#1a1c1a]">முருகன்</h2>
          <p className="mt-1 text-[16px] text-[#40493d]">+91 98765 43210</p>
        </section>

        <section className="space-y-3 px-4">
          <div className="overflow-hidden rounded-xl border border-[#bfcaba] bg-[#ffffff] shadow-[0_4px_12px_rgba(121,85,72,0.05)]">
            {menuItems.map((item, index) => (
              <div key={item.label}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-[#f4f4f0]"
                >
                  <div className="flex items-center gap-4">
                    <item.icon size={20} className="text-[#7a5649]" />
                    <span className="text-[16px] font-medium text-[#1a1c1a]">{item.label}</span>
                  </div>
                  <ChevronRight size={18} className="text-[#707a6c] transition-transform group-hover:translate-x-1" />
                </button>
                {index < menuItems.length - 1 && <div className="mx-4 h-px bg-[#e2e3df]" />}
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#ba1a1a] bg-[#ffffff] p-4 font-semibold text-[#ba1a1a] transition-all duration-100 hover:bg-[#ffdad6]/20 active:scale-95"
            >
              <LogOut size={18} />
              <span>{t.profile.logout}</span>
            </button>
          </div>

          <p className="mt-8 text-center text-[12px] text-[#707a6c] opacity-60">Version 1.2.4 (Rubber Roots)</p>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t border-[#bfcaba] bg-[#faf9f5] px-2 py-3 shadow-lg safe-area-bottom">
        {[
          [Home, t.profile.home, "/"],
          [BriefcaseBusiness, t.profile.work, "/jobs"],
          [ClipboardList, t.profile.applications, "/my-applications"],
          [Bell, t.profile.notifications, "/notifications"],
          [User, t.profile.profile, "/profile"],
        ].map(([Icon, label, path], index) => {
          const isActive = label === t.profile.profile;
          return (
            <button
              key={label}
              type="button"
              onClick={() => router.push(path)}
              className={`flex flex-col items-center justify-center rounded-full p-2 transition-all duration-150 ${
                isActive ? "bg-[#cbffc2] px-4 py-1 text-[#005312]" : "text-[#40493d] hover:bg-[#e8e8e4]"
              }`}
            >
              <Icon size={18} fill={isActive ? "currentColor" : "none"} />
              <span className="mt-1 text-[12px] leading-[16px]">{label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
