"use client";

import {
  ArrowLeft,
  Bell,
  BriefcaseBusiness,
  ClipboardList,
  Home,
  Search,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/utils/translations";

const jobs = [
  {
    title: "டப்பிங் வேலை",
    location: "கன்னியாகுமரி",
    price: "₹ 600 - ₹ 750",
    time: "6:00 AM - 12:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJQBprHu6s7hQiq8TGV6CuX4_UYf-KUzWNVoZwgLCHT5VdcUecoadCsqfx5NbDeXPDSH3AWDq3O0WMFvYCq11mbSCH5MXgcGT6Ir9YnDyCI-6XjYLmxVUwgmgvUOTgRNQ462dk7j0EOVUfaqXMnbuudZ5V1XREbk4-RcsToCZHOl1OXyolsnoDVGpFyFRxGNqPYivCOnKYFQ4SX4Z_ED8XGOecjXmpYvabuXw8TM4YT7aUtDLNBAZXDrtL66EJw_u0IUJymA9keKpc",
    description:
      "ரப்பர் மரங்களில் இருந்து பாலை சேகரிக்கும் வேலை. அதிகாலை நேரத்தில் மரங்களில் வெட்டு இடப்பட்டு, சொட்டும் பாலை டப்பிகளில் சேகரித்து உரிய இடத்தில் ஒப்படைக்க வேண்டும்.",
  },
  {
    title: "பால் சேகரிப்பு வேலை",
    location: "நாகர்கோவில்",
    price: "₹ 500 - ₹ 650",
    time: "6:30 AM - 11:00 AM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBplQdI7Xq9ppefaOxh957UrO2pFu3wCKnGmXg3wFt8fviO_REfZSxwhY2GD30E4VCtGhoEtr0HGHOcCJODpT0u4tGgyEXxVtHy2YQi8HGova3oofegIHv3c_3O-ttDElejc1vEr3mwcv8xMI3aNcxhe-OpW40o8xLBzPaofW7WLXnNuNbQzKWpM4BtNChxVxAWtxnTCtuxjiq-G9uLpP6D2N3OhQzqrkL8CKlNfm1POe3R7U1gdfx2EIJC5oVx2Au2ci4oDMaaKJAX",
    description:
      "மாலை மற்றும் காலை நேரத்தில் பால் சேகரிப்பு பணியின் கீழ் மரங்களில் பொருத்தப்பட்ட கொள்கலன்களை சுத்தம் செய்து, சேகரிக்கப்பட்ட பாலை பாதுகாப்பாக கொண்டு செல்ல வேண்டும்.",
  },
  {
    title: "தோட்ட பராமரிப்பு",
    location: "முட்டம், குளச்சல்",
    price: "₹ 450 - ₹ 600",
    time: "7:00 AM - 12:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAv-giriW4Mw5JnBW927v7pilSgPF_zJflw1-IcLswBOPTx9-i7agGugDpRnu67cGxlwckFQbHnTcapq9Zi7H4gEg589MuhSrKEE5ukYPf0aHb-lbDiCErbc9nyhm1q_s3oda1vYbYiW9-sKyFKqn7qX0KMnbjt2Wz9b2L-LG_4hCSuYyKzM3-Kt-3n5GmlQW1DX0hZFIo3B5x7ZRTOTO9hEnDWa0_M2EmS-5LUHlXAkz5hZAaQe8cRVOldpV36w0euCx0K05Pcub1O",
    description:
      "தோட்டத்தில் உள்ள மரங்களை பராமரித்து, செடிகளை நீர்ப்பாசனம் செய்து, சீராக செயல்படும் பூச்சு மற்றும் களை மேலாண்மை பணிகளை மேற்கொள்ள வேண்டும்.",
  },
  {
    title: "உரம் / உரமிடும் வேலை",
    location: "உரங்காடு",
    price: "₹ 550 - ₹ 700",
    time: "7:00 AM - 12:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2IAdIVrDgjA2-OBFzCidEfLWe4wNg7GNWEfSotkkzVpOPvLdhioYBKNSgcsjfnWnkqNJTMThRtEJaokKVhebjcutnqDBJ34lXSPNkeo-9CvjhVgmjvuHt-oLJ6I_V3HgcBvk1D4jJmAf5l7L7hzZ8ZMXVDiX9GS-0SMYVJYu8m_Vj9-yQzcRbupGfZ4i7ba2P9a-yZCeStg8yRYnzn9BoaoVK5IeB_Xr7K-HrBuumLw9AzBjZcNu44kbD1jIVy_r60OEJsH-iBrWQ",
    description:
      "மரத்தின் அடிப்பகுதியில் உரமிடுதல், மண் பண்புகளை மேம்படுத்துதல், மற்றும் தோட்டத்தின் வளர்ச்சியை உறுதி செய்யும் பணிகளை மேற்கொள்ள வேண்டும்.",
  },
];

export default function JobsPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language] || translations.ta;

  return (
    <div className="bg-[#faf9f5] text-[#1a1c1a] min-h-screen pb-24">
      <header className="bg-[#faf9f5] sticky top-0 z-40 w-full flex justify-between items-center px-4 h-14">
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-[#40493d] hover:bg-[#e2e3df]/20 active:scale-95 duration-100">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-[20px] leading-[28px] font-semibold text-[#0d631b]">{t.jobs.title}</h1>
        </div>
        <button
          type="button"
          onClick={() => router.push("/search")}
          className="w-10 h-10 flex items-center justify-center rounded-full text-[#40493d] hover:bg-[#e2e3df]/20 active:scale-95 duration-100"
        >
          <Search size={20} />
        </button>
      </header>

      <main className="max-w-md mx-auto px-4 pt-4">
        <div className="mb-6 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-[#40493d]" size={20} />
          </div>
          <input
            type="text"
            readOnly
            onFocus={() => router.push("/search")}
            className="block w-full pl-10 pr-4 py-3 bg-[#f4f4f0] border-none rounded-xl text-[#1a1c1a] placeholder-[#40493d]/60 text-[16px] leading-[24px] focus:ring-2 focus:ring-[#0d631b] shadow-sm cursor-pointer"
            placeholder={t.jobs.searchPlaceholder}
          />
        </div>

        <nav className="flex w-full bg-[#f4f4f0] p-1 rounded-xl mb-6 shadow-sm">
          <button className="flex-1 py-2 text-[14px] leading-[20px] font-semibold rounded-lg bg-[#0d631b] text-[#ffffff] shadow-sm transition-all duration-200">
            {t.jobs.active}
          </button>
          <button className="flex-1 py-2 text-[14px] leading-[20px] font-semibold text-[#40493d] rounded-lg hover:bg-[#e2e3df]/20 transition-all duration-200">
            {t.jobs.ended}
          </button>
        </nav>

        <section className="space-y-4">
                  {jobs.map((job) => (
            <div key={job.title} className="bg-[#ffffff] border border-[#bfcaba] p-4 rounded-xl flex gap-4 shadow-sm active:scale-[0.98] active:bg-[#f4f4f0] transition-all duration-200">
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-[#eeeeea]">
                <img className="w-full h-full object-cover" src={job.image} alt={job.title} />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1a]">{job.title}</h3>
                    <span className="bg-[#cbffc2] text-[#005312] px-2 py-0.5 rounded text-[12px] leading-[16px] font-medium">
                      {t.jobs.available}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-1 text-[#40493d]">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    <span className="text-[14px] leading-[20px] font-semibold">{job.location}</span>
                  </div>
                </div>

                <div className="flex justify-between items-end mt-2">
                  <div className="flex flex-col">
                    <span className="text-[#0d631b] font-bold text-[20px] leading-[28px]">{job.price}</span>
                    <span className="text-[12px] leading-[16px] text-[#40493d] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>
                      {job.time}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => router.push(`/jobs/${encodeURIComponent(job.title)}`)}
                    className="bg-[#0d631b] text-[#ffffff] px-4 py-2 rounded-lg text-[14px] leading-[20px] font-semibold active:scale-95 transition-transform"
                  >
                    {t.jobs.apply}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="mt-8 mb-12 text-center">
          <button className="w-full py-4 border-2 border-[#0d631b] text-[#0d631b] rounded-xl font-bold text-[18px] leading-[28px] hover:bg-[#cbffc2]/10 active:scale-95 duration-150 transition-all flex items-center justify-center gap-2">
            <span>{t.jobs.more}</span>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-2 py-3 bg-[#faf9f5] border-t border-[#bfcaba] shadow-lg z-50">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="flex flex-col items-center justify-center text-[#40493d] p-2 hover:bg-[#e8e8e4] rounded-full transition-colors"
        >
          <Home size={18} />
          <span className="text-[12px] leading-[16px]">{t.jobs.home}</span>
        </button>

        <button
          type="button"
          onClick={() => router.push("/jobs")}
          className="flex flex-col items-center justify-center bg-[#cbffc2] text-[#005312] rounded-full px-4 py-1 scale-90 duration-150 shadow-md"
        >
          <BriefcaseBusiness size={18} fill="currentColor" />
          <span className="text-[12px] leading-[16px]">{t.jobs.work}</span>
        </button>

        <button
          type="button"
          onClick={() => router.push("/my-applications")}
          className="flex flex-col items-center justify-center text-[#40493d] p-2 hover:bg-[#e8e8e4] rounded-full transition-colors"
        >
          <ClipboardList size={18} />
          <span className="text-[12px] leading-[16px]">{t.jobs.applications}</span>
        </button>

        <button
          type="button"
          onClick={() => router.push("/notifications")}
          className="flex flex-col items-center justify-center text-[#40493d] p-2 hover:bg-[#e8e8e4] rounded-full transition-colors relative"
        >
          <Bell size={18} />
          <span className="text-[12px] leading-[16px]">{t.jobs.notifications}</span>
          <span className="absolute top-1 right-3 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>
        </button>

        <button
          type="button"
          onClick={() => router.push("/profile")}
          className="flex flex-col items-center justify-center text-[#40493d] p-2 hover:bg-[#e8e8e4] rounded-full transition-colors"
        >
          <User size={18} />
          <span className="text-[12px] leading-[16px]">{t.jobs.profile}</span>
        </button>
      </nav>
    </div>
  );
}
