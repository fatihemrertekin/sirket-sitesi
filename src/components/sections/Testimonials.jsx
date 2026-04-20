import SectionTitle from "@/components/ui/SectionTitle";

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    role: "Ev Sahibi",
    text: "Hayalimde olan evi gerçeğe dönüştürdüler. Profesyonel ekip ve mükemmel iletişim, her detayı ince düşünüp kusursuz bir yaşam alanı yarattılar.",
  },
  {
    name: "Zeynep Kaya",
    role: "İşletme Sahibi",
    text: "Ofisimizin tasarımında beklentilerimizin çok üzerinde bir iş çıkardılar. Müşterilerimizden sürekli tasarım hakkında övgüler alıyoruz.",
  },
  {
    name: "Mehmet Demir",
    role: "Müteahhit",
    text: "Teknik detaylara hakimiyetleri ve yaratıcı çözümleri ile fark yaratıyorlar. Çalıştığım en profesyonel mimarlık ofisi diyebilirim.",
  },
];

export default function Testimonials() {
  return (
    <section id="yorumlar" className="section-padding bg-primary-900 border-t border-primary-800">
      <div className="container-custom">
        <SectionTitle
          subtitle="Müşteri Görüşleri"
          title="Bizim Hakkımızda Ne Söylüyorlar?"
          description="Projelerini başarıyla tamamladığımız müşterilerimizin değerli yorumları."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-primary-800 p-10 relative group border border-primary-700 hover:border-accent-500 transition-colors duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-primary-700 group-hover:text-accent-500/20 transition-colors duration-300">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11L8 15H11V19H5V15L7 11H5V7H11V11H10ZM20 11L18 15H21V19H15V15L17 11H15V7H21V11H20Z" />
                </svg>
              </div>

              <p className="text-primary-200 font-light italic leading-relaxed relative z-10 mb-8 pt-4">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-primary-700 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary-700"></div>
                <div>
                  <h4 className="font-bold text-white tracking-wide" style={{ fontFamily: 'var(--font-playfair), serif' }}>{item.name}</h4>
                  <p className="text-xs text-accent-500 uppercase tracking-widest mt-1">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
