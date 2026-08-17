"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/utils/translations";
import {
  ArrowLeft,
  Bell,
  Briefcase,
  BriefcaseBusiness,
  Camera,
  CheckCircle,
  ClipboardList,
  Expand,
  History,
  Home,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
  Upload,
} from "lucide-react";

export default function ApplyPage() {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language] || translations.ta;
  const [preview, setPreview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState("initial");

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => setPreview(String(e.target?.result || ""));
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState("loading");

    setTimeout(() => {
      setSubmitState("success");
      setTimeout(() => {
        router.push("/application-success");
      }, 1200);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1a1c1a] pb-32">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full h-14 px-4 bg-[#faf9f5]/80 backdrop-blur-md border-b border-[#e2e3df]">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#0d631b] transition-all duration-100 hover:bg-[#e2e3df]/20 active:scale-95"
            aria-label="Back"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1a]">{t.apply.title}</h1>
        </div>

        <div className="text-[22px] font-extrabold tracking-tight text-[#0d631b]">{t.apply.brand}</div>
      </header>

      <main className="mx-auto mt-14 max-w-xl px-4 py-6">
        <div className="mb-8 flex flex-col items-center">
          <div className="group relative cursor-pointer" onClick={() => fileInputRef.current?.click()}>
            <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-[#eeeeea] shadow-md">
              {preview ? (
                <img src={preview} alt="Profile preview" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[#f4f4f0] text-[#707a6c]">
                  <Upload className="h-12 w-12" />
                </div>
              )}
            </div>
            <div className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#0d631b] text-white shadow-lg transition-transform active:scale-90">
              <Camera size={18} />
            </div>
          </div>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          <p className="mt-3 text-[12px] leading-[16px] font-medium text-[#707a6c]">{t.apply.photoUpload}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-[14px] font-semibold text-[#40493d]">
              <User size={18} className="text-[#40493d]" />
              {t.apply.name}
            </label>
            <input
              className="h-12 w-full rounded-xl border border-[#bfcaba] bg-[#ffffff] px-4 text-[16px] text-[#1a1c1a] outline-none transition-all focus:border-[#0d631b] focus:ring-2 focus:ring-[#0d631b]/20"
              type="text"
              placeholder={t.apply.namePlaceholder}
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-[14px] font-semibold text-[#40493d]">
              <MapPin size={18} className="text-[#40493d]" />
              {t.apply.address}
            </label>
            <textarea
              rows={3}
              className="w-full resize-none rounded-xl border border-[#bfcaba] bg-[#ffffff] p-4 text-[16px] text-[#1a1c1a] outline-none transition-all focus:border-[#0d631b] focus:ring-2 focus:ring-[#0d631b]/20"
              placeholder={t.apply.addressPlaceholder}
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-[14px] font-semibold text-[#40493d]">
              <Briefcase size={18} className="text-[#40493d]" />
              {t.apply.preference}
            </label>
            <div className="relative">
              <select defaultValue="" className="h-12 w-full appearance-none rounded-xl border border-[#bfcaba] bg-[#ffffff] px-4 pr-10 text-[16px] text-[#1a1c1a] outline-none transition-all focus:border-[#0d631b] focus:ring-2 focus:ring-[#0d631b]/20">
                <option value="" disabled>தேர்வு செய்க</option>
                <option value="tapping">டப்பிங் வேலை</option>
                <option value="collection">பால் சேகரிப்பு</option>
                <option value="maintenance">தோட்ட பராமரிப்பு</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#707a6c]">
                <Expand size={18} />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-[14px] font-semibold text-[#40493d]">
              <Phone size={18} className="text-[#40493d]" />
              {t.apply.phone}
            </label>
            <div className="flex">
              <span className="flex h-12 items-center rounded-l-xl border border-r-0 border-[#bfcaba] bg-[#f4f4f0] px-4 text-[16px] text-[#40493d]">
                +91
              </span>
              <input
                type="tel"
                className="h-12 w-full rounded-r-xl border border-[#bfcaba] bg-[#ffffff] px-4 text-[16px] text-[#1a1c1a] outline-none transition-all focus:border-[#0d631b] focus:ring-2 focus:ring-[#0d631b]/20"
                placeholder={t.apply.phone}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-[14px] font-semibold text-[#40493d]">
              <Mail size={18} className="text-[#40493d]" />
              {t.apply.email}
            </label>
            <input
              type="email"
              className="h-12 w-full rounded-xl border border-[#bfcaba] bg-[#ffffff] px-4 text-[16px] text-[#1a1c1a] outline-none transition-all focus:border-[#0d631b] focus:ring-2 focus:ring-[#0d631b]/20"
              placeholder={t.apply.emailPlaceholder}
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-[14px] font-semibold text-[#40493d]">
              <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#0d631b]/10 text-[#0d631b]">
                <span className="text-[12px] font-bold">A</span>
              </div>
              {t.apply.aadhaar}
            </label>
            <input
              type="text"
              className="h-12 w-full rounded-xl border border-[#bfcaba] bg-[#ffffff] px-4 text-[16px] text-[#1a1c1a] outline-none transition-all focus:border-[#0d631b] focus:ring-2 focus:ring-[#0d631b]/20"
              placeholder={t.apply.aadhaarPlaceholder}
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-[14px] font-semibold text-[#40493d]">
              <MapPin size={18} className="text-[#40493d]" />
              {t.apply.location}
            </label>
            <div className="relative">
              <select defaultValue="" className="h-12 w-full appearance-none rounded-xl border border-[#bfcaba] bg-[#ffffff] px-4 pr-10 text-[16px] text-[#1a1c1a] outline-none transition-all focus:border-[#0d631b] focus:ring-2 focus:ring-[#0d631b]/20">
                <option value="" disabled>தேர்வு செய்க</option>
                <option value="kanyakumari">கன்னியாகுமரி</option>
                <option value="nagercoil">நாகர்கோவில்</option>
                <option value="marthandam">மார்த்தாண்டம்</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#707a6c]">
                <Expand size={18} />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[14px] font-semibold text-[#40493d]">
              <History size={18} className="text-[#40493d]" />
              {t.apply.workType}
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#bfcaba] bg-[#ffffff] p-3 transition-colors hover:bg-[#f4f4f0] has-[:checked]:border-[#0d631b] has-[:checked]:bg-[#0d631b]/5">
                <input className="h-5 w-5 accent-[#0d631b]" type="radio" name="experience" value="yes" />
                <span className="text-[16px] text-[#1a1c1a]">{t.apply.experience}</span>
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#bfcaba] bg-[#ffffff] p-3 transition-colors hover:bg-[#f4f4f0] has-[:checked]:border-[#0d631b] has-[:checked]:bg-[#0d631b]/5">
                <input className="h-5 w-5 accent-[#0d631b]" type="radio" name="experience" value="no" />
                <span className="text-[16px] text-[#1a1c1a]">{t.apply.noExperience}</span>
              </label>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#0d631b] text-[18px] font-bold text-white shadow-lg transition-all duration-150 hover:bg-[#0a5217] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-80"
            >
              {submitState === "success" ? (
                <>
                  <CheckCircle size={18} />
                  {t.apply.success}
                </>
              ) : submitState === "loading" ? (
                <>
                  <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  {t.apply.submitting}
                </>
              ) : (
                <>
                  {t.apply.submit}
                  <Send size={18} />
                </>
              )}
            </button>
          </div>
        </form>
      </main>

      <nav className="fixed bottom-0 left-0 w-full border-t border-[#bfcaba] bg-[#faf9f5] py-3 shadow-lg">
        <div className="mx-auto flex max-w-xl items-center justify-around px-2">
          {[
            [Home, t.apply.home, "/"],
            [BriefcaseBusiness, t.apply.work, "/jobs"],
            [ClipboardList, t.apply.applications, "/my-applications"],
            [Bell, t.apply.notifications, "/notifications"],
            [User, t.apply.profile, "/profile"],
          ].map(([Icon, label, path], index) => (
            <button
              key={label}
              type="button"
              onClick={() => router.push(path)}
              className={`flex flex-col items-center justify-center rounded-full p-2 transition-colors ${
                index === 2 ? "bg-[#cbffc2] text-[#005312]" : "text-[#40493d] hover:bg-[#e8e8e4]"
              }`}
            >
              <Icon size={18} fill={index === 2 ? "currentColor" : "none"} />
              <span className="mt-1 text-[12px] leading-[16px]">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
