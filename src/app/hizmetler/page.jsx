import SectionTitle from "@/components/ui/SectionTitle";
import { services } from "@/content/services";
import Link from "next/link";

export const metadata = {
  title: "Hizmetler | Pikus Ahşap",
  description: "Modern ahşap kamelya, kış bahçesi, bungalow ve kişiye özel ahşap mobilya çözümlerimiz.",
};

export default function HizmetlerPage() {
  return (
    <main className="bg-primary-900 min-h-screen pt-32 pb-20">
      <div className="container-custom">
        
        {/* Başlık Alanı */}
        <div className="mb-20">
          <SectionTitle
            subtitle="Uzmanlıklarımız"
            title="Sizin İçin Neler Yapabiliriz?"
            description="Kamelya, kış bahçesi, ahşap ev ve kişiye özel dekorasyon çözümlerimizle doğayı yaşam alanlarınıza taşıyoruz."
            align="center"
            isH1={true}
          />
        </div>

        {/* Hizmetler Listesi (Zikzak Düzen) */}
        <div className="space-y-32">
          {services?.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
              
              {/* Görsel Alanı */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-[16/10] bg-primary-800 border border-primary-700 relative overflow-hidden group">
                  {/* Dekoratif Çizgiler */}
                  <div className={`absolute top-4 ${index % 2 === 1 ? 'right-4' : 'left-4'} w-full h-full border border-accent-500/30 -z-0`}></div>
                  
                  {/* Görsel */}
                  <div className="w-full h-full relative z-10 overflow-hidden">
                    {service.heroImage ? (
                      <img 
                        src={service.heroImage} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-primary-500 bg-primary-800">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-4 opacity-50">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                        <span className="font-light tracking-widest uppercase text-sm">Görsel Alanı</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>
              </div>

              {/* İçerik Alanı */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl md:text-5xl font-light text-accent-500" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    0{index + 1}.
                  </span>
                  <div className="w-16 h-[1px] bg-primary-700"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  {service.title}
                </h2>
                <p className="text-lg text-primary-200 font-light leading-relaxed mb-10">
                  {service.description} Bu alanda seçili hizmete ait daha detaylı açıklamalar ve çalışma prensipleri yer alabilir. Kullanıcılara sürecin nasıl işlediğini anlatan ekstra bilgiler eklenecektir.
                </p>
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-4 border border-primary-700 text-white font-medium uppercase tracking-wider text-sm hover:border-accent-500 hover:text-accent-500 transition-colors duration-300"
                >
                  Detaylı İncele
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
