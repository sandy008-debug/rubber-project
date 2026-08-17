import "./globals.css";
import LanguageProvider from "@/components/LanguageProvider";
import LanguageSelector from "@/components/LanguageSelector";

export const metadata = {
  title: "Rubber Roots - Welcome",
  description: "Welcome screen for the Rubber Roots labor and user application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ta" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
          <LanguageSelector />
        </LanguageProvider>
      </body>
    </html>
  );
}
