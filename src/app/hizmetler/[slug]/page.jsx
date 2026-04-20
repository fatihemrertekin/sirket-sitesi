import { notFound } from "next/navigation";

// Dinamik hizmet detay sayfası
export default async function HizmetDetayPage({ params }) {
  const { slug } = await params;

  // TODO: slug'a göre hizmet verisini çek
  // Geçici olarak slug'ı gösteriyoruz
  return (
    <section className="section-padding bg-primary-900 min-h-screen">
      <div className="container-custom pt-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-accent-500"></div>
          <span className="text-accent-500 text-sm font-medium tracking-[0.2em] uppercase">
            Hizmet Detayı
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>
          {slug.replace(/-/g, " ")}
        </h1>
        <p className="text-lg text-primary-200 font-light leading-relaxed max-w-3xl">
          {/* İçerik daha sonra eklenecek */}
          {slug.replace(/-/g, " ")} hizmetimiz hakkında detaylı bilgi burada yer alacaktır. Gelecekte CMS veya veri dosyasından çekilen içerik ile bu sayfa zenginleştirilecektir.
        </p>
      </div>
    </section>
  );
}
