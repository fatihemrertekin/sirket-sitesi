import SectionTitle from "@/components/ui/SectionTitle";
import { companyInfo } from "@/content/company";

export default function About() {
  return (
    <section id="hakkimizda" className="section-padding bg-primary-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Sol: Görsel */}
          <div className="relative">
            <div className="aspect-[4/5] bg-primary-900 border border-primary-700 relative z-10">
              {/* Görsel Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-primary-500 font-light tracking-widest uppercase">Görsel Alanı</span>
              </div>
            </div>
            
            {/* Dekoratif Altın Çizgiler */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-accent-500/50 z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-accent-500/50 z-0"></div>

            {/* Havada Duran Deneyim Kartı */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 bg-accent-500 p-8 z-20 shadow-2xl max-w-[200px] hidden md:block">
              <div className="text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                {companyInfo.experience}
              </div>
              <div className="text-sm text-primary-900 font-bold uppercase tracking-widest">
                Yıllık Mimari Deneyim
              </div>
            </div>
          </div>

          {/* Sağ: İçerik */}
          <div className="lg:pl-8">
            <SectionTitle
              subtitle="Hakkımızda"
              title="Geleceğin Mimarisini Bugünden İnşa Ediyoruz"
              align="left"
            />
            
            <p className="text-primary-200 mt-8 text-lg font-light leading-relaxed">
              {companyInfo.longDescription}
            </p>
            
            <div className="mt-10 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-accent-500 flex items-center justify-center flex-shrink-0 text-accent-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>Ödüllü Tasarımlar</h4>
                  <p className="text-primary-300 font-light">Ulusal ve uluslararası arenada ödül almış yenilikçi projeler.</p>
                </div>
              </div>
            </div>

            {/* İstatistikler (Eski Stats bileşeninden taşındı) */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-primary-700">
              <div>
                <div className="text-4xl font-bold text-accent-500 mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>{companyInfo.projectCount}+</div>
                <div className="text-sm text-primary-300 uppercase tracking-widest">Tamamlanan Proje</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-500 mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>{companyInfo.clientCount}+</div>
                <div className="text-sm text-primary-300 uppercase tracking-widest">Mutlu Müşteri</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
