import SectionTitle from "@/components/ui/SectionTitle";
import { companyInfo } from "@/content/company";

export const metadata = {
  title: "Hakkımızda | Mimarlık Ofisi",
  description: "Mimarlık ofisimizin hikayesi, vizyonu ve ekibimiz hakkında bilgi edinin.",
};

const team = [
  { name: "Ahmet Yılmaz", role: "Kurucu & Baş Mimar" },
  { name: "Elif Kaya", role: "İç Mimar" },
  { name: "Can Demir", role: "Peyzaj Mimarı" },
  { name: "Zeynep Çelik", role: "Proje Yöneticisi" },
];

const values = [
  { title: "Yenilikçilik", desc: "Her projede modern ve özgün tasarım anlayışını ön planda tutuyoruz." },
  { title: "Sürdürülebilirlik", desc: "Çevreye duyarlı, enerji verimli yapısal çözümler üretiyoruz." },
  { title: "Fonksiyonellik", desc: "Estetiği kullanılabilirlik ile birleştirerek yaşam alanlarını optimize ediyoruz." },
];

export default function HakkimizdaPage() {
  return (
    <div className="bg-primary-900 min-h-screen pt-32 pb-20">
      {/* 1. Hikayemiz */}
      <section className="container-custom mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] w-full border border-primary-700 bg-primary-800 flex items-center justify-center">
            {/* Ofis/Hero Placeholder */}
            <div className="text-primary-500 flex flex-col items-center">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-4 opacity-50">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <span className="font-light tracking-widest uppercase text-sm">Ofis / Kurumsal Görsel</span>
            </div>
            
            {/* Altın Çerçeve Detayı */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-b-2 border-r-2 border-accent-500 -z-10"></div>
          </div>
          
          <div>
            <SectionTitle
              subtitle="Hikayemiz"
              title="Mimariyi Sanatla Buluşturuyoruz"
              align="left"
            />
            <p className="text-primary-200 mt-8 text-lg font-light leading-relaxed mb-6">
              2010 yılında kurulan ofisimiz, vizyoner bakış açısıyla mimari tasarım ve iç mimarlık alanında yenilikçi projelere imza atmaktadır. Her bir mekanı, kendi hikayesi olan benzersiz bir sanat eseri olarak görüyoruz.
            </p>
            <p className="text-primary-200 text-lg font-light leading-relaxed">
              Sadece estetik kaygılarla değil, fonksiyonelliği ve sürdürülebilirliği temel alarak yaşam alanlarını yeniden şekillendiriyoruz. Müşterilerimizin hayallerini gerçeğe dönüştürürken, çevresel sorumluluğumuzun da farkındayız.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-primary-800">
              <div>
                <div className="text-4xl font-bold text-accent-500 mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>{companyInfo.experience}</div>
                <div className="text-sm text-primary-300 uppercase tracking-widest">Yıllık Deneyim</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-500 mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>{companyInfo.projectCount}+</div>
                <div className="text-sm text-primary-300 uppercase tracking-widest">Başarılı Proje</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Değerlerimiz */}
      <section className="bg-primary-950 py-24 border-t border-b border-primary-800 mb-32">
        <div className="container-custom">
          <SectionTitle
            subtitle="Felsefemiz"
            title="Temel Değerlerimiz"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {values.map((val, idx) => (
              <div key={idx} className="bg-primary-900 p-10 border border-primary-800 hover:border-accent-500 transition-colors duration-300 group">
                <div className="w-16 h-16 rounded-full bg-primary-800 flex items-center justify-center text-accent-500 mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-playfair), serif' }}>0{idx+1}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>{val.title}</h3>
                <p className="text-primary-300 font-light leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Ekibimiz */}
      <section className="container-custom">
        <SectionTitle
          subtitle="Profesyoneller"
          title="Yaratıcı Ekibimiz"
          description="Her biri kendi alanında uzman, tutkulu ve vizyoner tasarım ekibimizle tanışın."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {team.map((member, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="w-full aspect-[3/4] bg-primary-800 border border-primary-700 relative overflow-hidden mb-6 flex items-center justify-center">
                {/* Profil Placeholder */}
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-500 opacity-50 group-hover:scale-110 transition-transform duration-700">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                
                {/* Hover Sosyal İkonlar */}
                <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <div className="w-10 h-10 border border-accent-500 text-accent-500 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors">IN</div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-playfair), serif' }}>{member.name}</h4>
                <p className="text-accent-500 text-sm uppercase tracking-widest">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
