"use client";

import { useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, CheckCircle, Clock3, MapPin, Share2, Send, Verified, Map, BadgeCheck, Wallet } from "lucide-react";

const jobs = [
  {
    title: "டப்பிங் வேலை",
    location: "கன்னியாகுமரி",
    price: "₹ 600 - ₹ 750",
    time: "6:00 AM - 12:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSvYpiDW8jkYrhS5MEtuZedjWoPnCX_cloip2fHB4PyGh5QcKgDe5Aobp7wbv1txL27k9hZV9CfXhFIVTT99FMkY3ZDyfjkpAxIFTwlauI0XN-uV9LOvGCsAqS74A1Jarfr-nETuO_zM6hYuGkwu01MNUg5OJz7rL52JgDE7DwIlD7Lbb_VX7wQrpiw71zVj78efPBtMkNDYElK4KjSHZYJxryT18J-pTSKTtu3wLyO1VAYCj_TPi-ZEKBr8gR-F6PtHb1Jkdw09Uu",
    description:
      "ரப்பர் மரங்களில் இருந்து பாலை சேகரிக்கும் வேலை. அதிகாலை நேரத்தில் மரங்களில் வெட்டு இடப்பட்டு, சொட்டும் பாலை டப்பிகளில் சேகரித்து உரிய இடத்தில் ஒப்படைக்க வேண்டும்.",
    requirements: [
      "ஆய்வு அனுபவம் வேண்டும்",
      "வயது 18 முதல் 55 வரை",
      "ஆரோக்கியமாக இருக்க வேண்டும்",
      "பணி நேரத்தை பின்பற்ற வேண்டும்",
    ],
  },
  {
    title: "பால் சேகரிப்பு வேலை",
    location: "நாகர்கோவில்",
    price: "₹ 500 - ₹ 650",
    time: "6:30 AM - 11:00 AM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSvYpiDW8jkYrhS5MEtuZedjWoPnCX_cloip2fHB4PyGh5QcKgDe5Aobp7wbv1txL27k9hZV9CfXhFIVTT99FMkY3ZDyfjkpAxIFTwlauI0XN-uV9LOvGCsAqS74A1Jarfr-nETuO_zM6hYuGkwu01MNUg5OJz7rL52JgDE7DwIlD7Lbb_VX7wQrpiw71zVj78efPBtMkNDYElK4KjSHZYJxryT18J-pTSKTtu3wLyO1VAYCj_TPi-ZEKBr8gR-F6PtHb1Jkdw09Uu",
    description:
      "மாலை மற்றும் காலை நேரத்தில் பால் சேகரிப்பு பணியின் கீழ் மரங்களில் பொருத்தப்பட்ட கொள்கலன்களை சுத்தம் செய்து, சேகரிக்கப்பட்ட பாலை பாதுகாப்பாக கொண்டு செல்ல வேண்டும்.",
    requirements: [
      "சேகரிப்பில் அனுபவம் உள்ளது",
      "கைவரிசை மற்றும் கவனம் தேவை",
      "மருத்துவம் மற்றும் பாதுகாப்பு அறிவு",
      "திட்டமிட்ட நேரத்தில் செயல்படுதல்",
    ],
  },
  {
    title: "தோட்ட பராமரிப்பு",
    location: "முட்டம், குளச்சல்",
    price: "₹ 450 - ₹ 600",
    time: "7:00 AM - 12:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSvYpiDW8jkYrhS5MEtuZedjWoPnCX_cloip2fHB4PyGh5QcKgDe5Aobp7wbv1txL27k9hZV9CfXhFIVTT99FMkY3ZDyfjkpAxIFTwlauI0XN-uV9LOvGCsAqS74A1Jarfr-nETuO_zM6hYuGkwu01MNUg5OJz7rL52JgDE7DwIlD7Lbb_VX7wQrpiw71zVj78efPBtMkNDYElK4KjSHZYJxryT18J-pTSKTtu3wLyO1VAYCj_TPi-ZEKBr8gR-F6PtHb1Jkdw09Uu",
    description:
      "தோட்டத்தில் உள்ள மரங்களை பராமரித்து, செடிகளை நீர்ப்பாசனம் செய்து, சீராக செயல்படும் பூச்சு மற்றும் களை மேலாண்மை பணிகளை மேற்கொள்ள வேண்டும்.",
    requirements: [
      "வளர்ச்சி மற்றும் செடிகள் பராமரிப்பு அறிவு",
      "கையுறை மற்றும் தளவாடங்கள் தேவை",
      "பணி நேர விருப்பம்",
      "செயல்முறை பணி நோக்கம்",
    ],
  },
  {
    title: "உரம் / உரமிடும் வேலை",
    location: "உரங்காடு",
    price: "₹ 550 - ₹ 700",
    time: "7:00 AM - 12:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSvYpiDW8jkYrhS5MEtuZedjWoPnCX_cloip2fHB4PyGh5QcKgDe5Aobp7wbv1txL27k9hZV9CfXhFIVTT99FMkY3ZDyfjkpAxIFTwlauI0XN-uV9LOvGCsAqS74A1Jarfr-nETuO_zM6hYuGkwu01MNUg5OJz7rL52JgDE7DwIlD7Lbb_VX7wQrpiw71zVj78efPBtMkNDYElK4KjSHZYJxryT18J-pTSKTtu3wLyO1VAYCj_TPi-ZEKBr8gR-F6PtHb1Jkdw09Uu",
    description:
      "மரத்தின் அடிப்பகுதியில் உரமிடுதல், மண் பண்புகளை மேம்படுத்துதல், மற்றும் தோட்டத்தின் வளர்ச்சியை உறுதி செய்யும் பணிகளை மேற்கொள்ள வேண்டும்.",
    requirements: [
      "தோட்டத்திற்கு உரமிடுதல் செயல்முறை",
      "சூழல் மற்றும் மண் தொடர்பு",
      "மார்கெட்டு, சீரான வேலை அமைப்பு",
      "உடல் வலிமை",
    ],
  },
];

export default function JobDetailsPage() {
  const router = useRouter();
  const params = useParams();

  const job = useMemo(() => {
    const decoded = decodeURIComponent(params.title ?? "");
    return jobs.find((entry) => entry.title === decoded) ?? jobs[0];
  }, [params.title]);

  const handleApply = () => {
    router.push("/apply");
  };

  return (
    <div className="bg-[#faf9f5] text-[#1a1c1a] min-h-screen">
      <header className="bg-[#faf9f5] sticky top-0 z-50 flex justify-between items-center w-full px-4 h-14">
        <div className="flex items-center gap-4">
          <button
            aria-label="Back"
            onClick={() => router.push("/jobs")}
            className="active:scale-95 duration-100 p-2 hover:bg-[#e2e3df]/20 rounded-full text-[#0d631b]"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-[20px] leading-[28px] font-semibold text-[#0d631b]">வேலை விவரம்</h1>
        </div>
        <button aria-label="Share" className="active:scale-95 duration-100 p-2 hover:bg-[#e2e3df]/20 rounded-full text-[#0d631b]">
          <Share2 size={20} />
        </button>
      </header>

      <main className="px-4 pt-4 max-w-2xl mx-auto pb-28">
        <div className="relative overflow-hidden rounded-xl mb-6 shadow-sm border border-[#bfcaba] bg-[#ffffff]">
          <div className="h-48 w-full">
            <img className="w-full h-full object-cover" src={job.image} alt={job.title} />
          </div>
          <div className="p-4">
            <h2 className="text-[24px] leading-[32px] font-semibold text-[#0d631b] mb-2">{job.title}</h2>
            <div className="flex flex-wrap gap-y-3">
              <div className="flex items-center gap-2 w-1/2">
                <MapPin size={20} className="text-[#40493d]" />
                <span className="text-[16px] leading-[24px] text-[#40493d]">{job.location}</span>
              </div>
              <div className="flex items-center gap-2 w-1/2">
                <Wallet size={20} className="text-[#0d631b]" />
                <span className="text-[16px] leading-[24px] font-bold text-[#0d631b]">{job.price} / நாள்</span>
              </div>
              <div className="flex items-center gap-2 w-full">
                <Clock3 size={20} className="text-[#40493d]" />
                <span className="text-[16px] leading-[24px] text-[#40493d]">{job.time}</span>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h3 className="text-[14px] leading-[20px] font-semibold text-[#7a5649] mb-3 flex items-center gap-2">
            <Verified size={18} />
            வேலை விவரம்
          </h3>
          <p className="text-[16px] leading-[24px] text-[#40493d]">{job.description}</p>
        </section>

        <section className="mb-8">
          <h3 className="text-[14px] leading-[20px] font-semibold text-[#7a5649] mb-4 flex items-center gap-2">
            <BadgeCheck size={18} />
            தேவைகள்
          </h3>
          <div className="space-y-3">
            {job.requirements.map((item) => (
              <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-[#f4f4f0] border border-[#bfcaba]/30">
                <CheckCircle size={18} className="text-[#0d631b] mt-0.5" />
                <span className="text-[16px] leading-[24px] text-[#1a1c1a]">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-[14px] leading-[20px] font-semibold text-[#7a5649] mb-3 flex items-center gap-2">
            <Map size={18} />
            இடம்
          </h3>
          <div className="rounded-xl overflow-hidden border border-[#bfcaba] shadow-sm bg-white">
            <div className="h-40 w-full relative">
              <img
                className="w-full h-full object-cover grayscale-[20%] opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmMF0sq0g9t6ijeoZLG4MH4vESrawXOGGqvAVdJnVRZhE7l2g4ofigmAwx-_zZ-fW2uWL6eLjywD3YPRuScLkQfni_94I_5U_O7kRVfWzRvslkHeDZ5HEG2xfx2UMyVW-4GYTbpwAAzGb8AGRLq1c3c-xp412xeaOW91XBSFsbFMn9q48gWm5Dob9um_aHfFoG_a_O2uINnydx7naBcYnBTXz5_negXrHTvJFH3R0CnpTQUh3CSR2xpvvAl5UlVacimV0bScTeMPBM"
                alt="Location map"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#0d631b] text-white p-2 rounded-full shadow-lg animate-bounce">
                  <MapPin size={20} />
                </div>
              </div>
            </div>
            <div className="p-3 flex justify-between items-center bg-[#ffffff]">
              <div>
                <p className="text-[16px] leading-[24px] font-bold text-[#1a1c1a]">{job.location}, தமிழ்நாடு</p>
                <p className="text-[12px] leading-[16px] text-[#40493d]">(உங்கள் இடத்திலிருந்து 12 km)</p>
              </div>
              <button className="bg-[#fdcdbc] text-[#795548] px-4 py-2 rounded-full text-[14px] leading-[20px] font-semibold hover:brightness-95 transition-all">
                வழி வரைபடம்
              </button>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 w-full p-4 bg-[#faf9f5]/80 backdrop-blur-md z-50">
        <button
          id="apply-button"
          type="button"
          onClick={handleApply}
          className="w-full bg-[#0d631b] text-[#ffffff] py-4 rounded-full text-[14px] leading-[20px] font-bold shadow-lg active:scale-95 duration-150 flex items-center justify-center gap-2"
        >
          <Send size={18} />
          <span>இந்த வேலைக்கு விண்ணப்பிக்கவும்</span>
        </button>
      </div>
    </div>
  );
}
