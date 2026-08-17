import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#1a1c1a] flex items-center justify-center px-6">
      <div className="max-w-md w-full rounded-2xl border border-[#bfcaba] bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0d631b]">404</p>
        <h1 className="mt-4 text-3xl font-bold text-[#1a1c1a]">Page not found</h1>
        <p className="mt-3 text-[16px] leading-[24px] text-[#40493d]">
          The page you are looking for does not exist or the link is outdated.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#0d631b] px-5 py-3 text-[14px] font-semibold text-white transition hover:opacity-95"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
