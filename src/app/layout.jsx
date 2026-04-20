import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mimarlık Ofisi | Yaratıcı Tasarım & Mimari Çözümler",
  description:
    "Modern mimarlık, iç mimarlık ve kentsel tasarım alanlarında yaratıcı ve sürdürülebilir çözümler sunan mimarlık ofisi.",
  keywords: ["mimarlık", "iç mimarlık", "tasarım", "proje", "renovasyon"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${playfair.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-primary-800 text-primary-200">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
