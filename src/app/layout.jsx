import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Pikus Ahşap | Kayseri Modern Ahşap Kamelya & Kış Bahçesi",
  description:
    "Kayseri'de modern ahşap kamelya, kış bahçesi, bungalow ve kişiye özel ahşap mobilya çözümleri sunan lider üretici.",
  keywords: ["ahşap kamelya", "kış bahçesi", "ahşap ev", "bungalow", "kayseri ahşap", "pergola"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${playfair.variable} antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-primary-800 text-primary-200" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
