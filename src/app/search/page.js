"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/utils/translations";
import {
  ArrowLeft,
  Bell,
  BriefcaseBusiness,
  ChevronRight,
  ClipboardList,
  Clock3,
  Droplets,
  History,
  Home,
  MapPin,
  Package2,
  Search,
  Sprout,
  User,
  X,
} from "lucide-react";

const jobs = [
  {
    title: "டப்பிங் வேலை",
    location: "கன்னியாகுமரி",
    price: "₹ 600 - ₹ 750",
    time: "6:00 AM - 12:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJQBprHu6s7hQiq8TGV6CuX4_UYf-KUzWNVoZwgLCHT5VdcUecoadCsqfx5NbDeXPDSH3AWDq3O0WMFvYCq11mbSCH5MXgcGT6Ir9YnDyCI-6XjYLmxVUwgmgvUOTgRNQ462dk7j0EOVUfaqXMnbuudZ5V1XREbk4-RcsToCZHOl1OXyolsnoDVGpFyFRxGNqPYivCOnKYFQ4SX4Z_ED8XGOecjXmpYvabuXw8TM4YT7aUtDLNBAZXDrtL66EJw_u0IUJymA9keKpc",
    category: "டப்பிங்",
  },
  {
    title: "பால் சேகரிப்பு வேலை",
    location: "நாகர்கோவில்",
    price: "₹ 500 - ₹ 650",
    time: "6:30 AM - 11:00 AM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBplQdI7Xq9ppefaOxh957UrO2pFu3wCKnGmXg3wFt8fviO_REfZSxwhY2GD30E4VCtGhoEtr0HGHOcCJODpT0u4tGgyEXxVtHy2YQi8HGova3oofegIHv3c_3O-ttDElejc1vEr3mwcv8xMI3aNcxhe-OpW40o8xLBzPaofW7WLXnNuNbQzKWpM4BtNChxVxAWtxnTCtuxjiq-G9uLpP6D2N3OhQzqrkL8CKlNfm1POe3R7U1gdfx2EIJC5oVx2Au2ci4oDMaaKJAX",
    category: "சேகரிப்பு",
  },
  {
    title: "தோட்ட பராமரிப்பு",
    location: "முட்டம், குளச்சல்",
    price: "₹ 450 - ₹ 600",
    time: "7:00 AM - 12:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAv-giriW4Mw5JnBW927v7pilSgPF_zJflw1-IcLswBOPTx9-i7agGugDpRnu67cGxlwckFQbHnTcapq9Zi7H4gEg589MuhSrKEE5ukYPf0aHb-lbDiCErbc9nyhm1q_s3oda1vYbYiW9-sKyFKqn7qX0KMnbjt2Wz9b2L-LG_4hCSuYyKzM3-Kt-3n5GmlQW1DX0hZFIo3B5x7ZRTOTO9hEnDWa0_M2EmS-5LUHlXAkz5hZAaQe8cRVOldpV36w0euCx0K05Pcub1O",
    category: "பராமரிப்பு",
  },
  {
    title: "உரம் / உரமிடும் வேலை",
    location: "உரங்காடு",
    price: "₹ 550 - ₹ 700",
    time: "7:00 AM - 12:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2IAdIVrDgjA2-OBFzCidEfLWe4wNg7GNWEfSotkkzVpOPvLdhioYBKNSgcsjfnWnkqNJTMThRtEJaokKVhebjcutnqDBJ34lXSPNkeo-9CvjhVgmjvuHt-oLJ6I_V3HgcBvk1D4jJmAf5l7L7hzZ8ZMXVDiX9GS-0SMYVJYu8m_Vj9-yQzcRbupGfZ4i7ba2P9a-yZCeStg8yRYnzn9BoaoVK5IeB_Xr7K-HrBuumLw9AzBjZcNu44kbD1jIVy_r60OEJsH-iBrWQ",
    category: "உரம்",
  },
];

const recentSearches = [
  "பால் வெட்டும் வேலை",
  "நாகர்கோவில்",
  "தோட்ட பராமரிப்பு",
];

const categories = [
  { label: "பால் வெட்டுதல்", icon: Droplets, color: "bg-[#0d631b]/10 text-[#0d631b]" },
  { label: "சேகரிப்பு", icon: Package2, color: "bg-[#7a5649]/10 text-[#7a5649]" },
  { label: "தோட்ட பராமரிப்பு மற்றும் மேலாண்மை", icon: Sprout, wide: true, color: "bg-[#6e5100]/10 text-[#6e5100]" },
];

const locations = ["நாகர்கோவில்", "மார்த்தாண்டம்", "குளச்சல்", "தக்கலை", "கன்னியாகுமரி"];

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const { language } = useLanguage();
  const t = translations[language] || translations.ta;

  const filteredJobs = useMemo(() => {
    if (!query.trim()) return [];

    const normalizedQuery = query.toLowerCase();
    return jobs.filter((job) => {
      return [job.title, job.location, job.category, job.price, job.time]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    });
  }, [query]);

  const handleQuickSearch = (value) => {
    setQuery(value);
  };

  return (
    <div className="flex flex-col min-h-screen text-[#1a1c1a] font-sans bg-[#faf9f5]">
      <header className="sticky top-0 z-50 bg-[#faf9f5] px-4 h-16 flex items-center gap-4 transition-all shadow-none">
        <button
          type="button"
          onClick={() => router.push("/jobs")}
          className="flex items-center justify-center p-2 rounded-full hover:bg-[#e2e3df]/20 active:scale-95 duration-100 text-[#0d631b]"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="flex-1 relative flex items-center">
          <div className="absolute left-3 text-[#40493d] pointer-events-none">
            <Search size={20} />
          </div>

          <input
            autoFocus
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full bg-[#f4f4f0] border-none rounded-xl h-11 pl-10 pr-10 text-[16px] leading-[24px] focus:ring-2 focus:ring-[#0d631b] focus:bg-[#faf9f5] transition-all placeholder:text-[#40493d]/60"
            placeholder={t.search.placeholder}
          />

          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 text-[#40493d] hover:text-[#ba1a1a] active:scale-90 transition-transform"
              aria-label="Clear search"
            >
              <X size={20} />
            </button>
          ) : null}
        </div>
      </header>

      <main className="flex-1 px-4 pt-4 pb-24 overflow-y-auto">
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1a]">{t.search.recent}</h2>
            <button className="text-[14px] leading-[20px] font-semibold text-[#0d631b] hover:underline">
              {t.search.clear}
            </button>
          </div>

          <div className="space-y-1">
            {recentSearches.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => handleQuickSearch(term)}
                className="flex w-full items-center gap-4 p-3 rounded-xl hover:bg-[#eeeeea] transition-colors cursor-pointer group active:scale-[0.96]"
              >
                <History size={18} className="text-[#40493d]/70" />
                <span className="flex-1 text-left text-[16px] leading-[24px] font-medium">{term}</span>
                <ChevronRight size={18} className="text-[#40493d]/40 group-hover:text-[#40493d]" />
              </button>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1a] mb-4">{t.search.categories}</h2>

          <div className="grid grid-cols-2 gap-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => handleQuickSearch(category.label)}
                  className={`${
                    category.wide ? "col-span-2" : "col-span-1"
                  } bg-[#f4f4f0] border border-[#bfcaba] p-4 rounded-xl flex ${
                    category.wide ? "items-center justify-between" : "flex-col items-center justify-center"
                  } gap-3 hover:bg-[#cbffc2]/10 hover:border-[#0d631b] transition-all cursor-pointer active:scale-[0.96]`}
                >
                  <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center`}>
                    <Icon size={28} />
                  </div>
                  <span className="text-[14px] leading-[20px] font-semibold text-[#1a1c1a] text-center">
                    {category.label}
                  </span>
                  {category.wide ? <ChevronRight size={18} className="text-[#40493d]" /> : null}
                </button>
              );
            })}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1a] mb-4">{t.search.locations}</h2>
          <div className="flex flex-wrap gap-2">
            {locations.map((place) => (
              <button
                key={place}
                type="button"
                onClick={() => handleQuickSearch(place)}
                className="px-4 py-2 rounded-full bg-[#e8e8e4] text-[#40493d] font-semibold hover:bg-[#fdcdbc] hover:text-[#795548] transition-colors active:scale-[0.96]"
              >
                {place}
              </button>
            ))}
          </div>
        </section>

        {query ? (
          <section className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1a]">{t.search.results}</h2>
              <span className="text-[12px] leading-[16px] text-[#40493d]">{filteredJobs.length} {t.search.items}</span>
            </div>

            {filteredJobs.length ? (
              <div className="space-y-3">
                {filteredJobs.map((job) => (
                  <div key={job.title} className="bg-[#ffffff] border border-[#bfcaba] p-3 rounded-xl flex gap-3 shadow-sm">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#eeeeea]">
                      <img className="w-full h-full object-cover" src={job.image} alt={job.title} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between gap-2">
                        <h3 className="text-[18px] leading-[24px] font-semibold text-[#1a1c1a]">{job.title}</h3>
                        <span className="bg-[#cbffc2] text-[#005312] px-2 py-0.5 rounded text-[12px] leading-[16px] font-medium">இருப்பு</span>
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-[#40493d]">
                        <MapPin size={14} />
                        <span className="text-[12px] leading-[16px] font-medium">{job.location}</span>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-[#0d631b] font-bold text-[18px] leading-[24px]">{job.price}</span>
                        <button type="button" className="bg-[#0d631b] text-[#ffffff] px-3 py-1.5 rounded-lg text-[12px] leading-[16px] font-semibold">
                          விண்ணப்பிக்க
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-[#bfcaba] bg-[#f4f4f0] p-6 text-center text-[#40493d]">
                <p className="text-[16px] leading-[24px] font-medium">முடிவுகள் இல்லை</p>
                <p className="mt-1 text-[14px] leading-[20px]">வேலை, இடம் அல்லது வகையை மாற்றி முயலவும்.</p>
              </div>
            )}
          </section>
        ) : (
          <div className="rounded-2xl overflow-hidden relative h-32 border border-[#bfcaba] mt-4">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2P1Ptb9qlka4nCSLN-NTEWMn8EO9cxRoISf2OR2t5MOVLCDnG0dx0LwEsUIEYw1VZwTI4m39Rx2lMVNoTOhl6x5KSaWt2GNA72Vw8mASjJPyVl9nILGyQbMzwS5_ToGnJylRfL53CFWlKFH5wzfE8lL8QFT2G8A44gwVw9L_hBjHJlphcI0t95LctJnn2GlshD7wQBpiBNdRhB8Ng_QiqdtGtLWYDcxA3zktPcNyZMWZK7FeV8Jzrfg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d631b]/80 to-transparent flex items-center px-6">
              <p className="text-white text-[20px] leading-[28px] font-semibold max-w-[200px]">
                உங்களுக்கான சிறந்த வேலையைத் தேடுங்கள்
              </p>
            </div>
          </div>
        )}
      </main>

      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-2 py-3 bg-[#faf9f5] border-t border-[#bfcaba] shadow-lg z-50">
        <a className="flex flex-col items-center justify-center text-[#40493d] p-2 hover:bg-[#e8e8e4] transition-all active:scale-90" href="#">
          <Home size={18} />
          <span className="text-[12px] leading-[16px] mt-1">முகப்பு</span>
        </a>

        <a className="flex flex-col items-center justify-center bg-[#cbffc2] text-[#005312] rounded-full px-4 py-1 active:scale-90 duration-150" href="#">
          <BriefcaseBusiness size={18} />
          <span className="text-[12px] leading-[16px] mt-0.5">வேலைகள்</span>
        </a>

        <a className="flex flex-col items-center justify-center text-[#40493d] p-2 hover:bg-[#e8e8e4] transition-all active:scale-90" href="#">
          <ClipboardList size={18} />
          <span className="text-[12px] leading-[16px] mt-1">விண்ணப்பங்கள்</span>
        </a>

        <button
          type="button"
          onClick={() => router.push("/notifications")}
          className="flex flex-col items-center justify-center text-[#40493d] p-2 hover:bg-[#e8e8e4] transition-all active:scale-90"
        >
          <Bell size={18} />
          <span className="text-[12px] leading-[16px] mt-1">செய்திகள்</span>
        </button>

        <a className="flex flex-col items-center justify-center text-[#40493d] p-2 hover:bg-[#e8e8e4] transition-all active:scale-90" href="#">
          <User size={18} />
          <span className="text-[12px] leading-[16px] mt-1">கணக்கு</span>
        </a>
      </nav>
    </div>
  );
}
