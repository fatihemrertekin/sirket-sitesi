import Link from "next/link";
import { companyInfo } from "@/content/company";

import Image from "@/components/ui/CustomImage";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-primary-900 overflow-hidden">
      <div className="container-custom px-4 md:px-8 lg:px-16 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Sol: İçerik */}
          <div className="lg:col-span-6 lg:pr-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-accent-500"></div>
              <span className="text-accent-500 text-sm font-medium tracking-[0.2em] uppercase">
                Modern Ahşap Tasarımları
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Bahçenize <br />
              <span className="text-accent-500 italic font-light">Doğal </span>
              Dokunuşlar <br />
              Katalım
            </h1>

            <p className="text-lg md:text-xl text-primary-200 mb-10 max-w-lg font-light leading-relaxed">
              {companyInfo.shortDescription}
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <Link
                href="/referanslar"
                className="inline-flex items-center px-8 py-4 bg-accent-500 text-white font-medium uppercase tracking-wider text-sm hover:bg-white hover:text-primary-900 transition-all duration-300"
              >
                Modelleri İncele
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-6 py-4 text-white font-medium uppercase tracking-wider text-sm group"
              >
                <span className="border-b border-transparent group-hover:border-accent-500 transition-colors">Bize Ulaşın</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent-500 group-hover:translate-x-2 transition-transform">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Sağ: Görsel Alanı */}
          <div className="lg:col-span-6 mt-12 lg:mt-0 relative">
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[3/4] group">
              {/* Actual Image */}
              <div className="absolute inset-0 bg-primary-800 border border-primary-700 overflow-hidden">
                <Image
                  src="/images/hero/pikus-anasayfa-hero.jpg"
                  alt="Pikus Ahşap Tasarım"
                  fill
                  priority
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Altın çerçeve detayı */}
              <div className="absolute -inset-4 border border-accent-500/30 -z-10 translate-x-8 translate-y-8"></div>

              {/* Yüzen rozet */}
              <div className="absolute bottom-10 -left-8 md:-left-12 bg-primary-900 p-6 border-l-4 border-accent-500 hidden md:block shadow-2xl z-20">
                <div className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>{companyInfo.experience}+</div>
                <div className="text-sm text-primary-200 uppercase tracking-widest mt-1">Yıllık Deneyim</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Arka plan dekoratif çizgileri */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5 -z-10"></div>
      <div className="absolute top-0 left-2/4 w-[1px] h-full bg-white/5 -z-10"></div>
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white/5 -z-10"></div>
    </section>
  );
}
