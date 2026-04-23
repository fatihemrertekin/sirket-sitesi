import { notFound } from "next/navigation";
import { services } from "@/content/services";
import Image from "next/image";
import ServiceItems from "@/components/sections/ServiceItems";
import ContactForm from "@/components/sections/ContactForm";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) return { title: "Hizmet Bulunamadı" };

  return {
    title: `${service.title} | Pikus Ahşap`,
    description: service.description || "Pikus Ahşap hizmet detayları.",
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function HizmetDetayPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-primary-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage || "/images/projects/modern-ahsap-kis-bahcesi.jpg"}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/60 to-primary-950"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 text-center pt-20">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-accent-500"></div>
              <span className="text-accent-500 text-sm font-bold tracking-[0.3em] uppercase">
                Hizmetlerimiz
              </span>
              <div className="w-8 h-[1px] bg-accent-500"></div>
            </div>
            <h1 
              className="text-5xl md:text-7xl font-bold text-white mb-4" 
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              {service.title}
            </h1>
            <p className="text-primary-100 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent-500 to-transparent"></div>
        </div>
      </section>

      {/* Introduction Section */}
      {service.longDescription && (
        <section className="section-padding bg-primary-950">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                {service.title} Hakkında
              </h2>
              <p className="text-xl text-primary-200 font-light leading-relaxed">
                {service.longDescription}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Product Items Section */}
      <ServiceItems items={service.items} />

      {/* Contact CTA Section */}
      <section className="bg-primary-900 py-20 border-y border-primary-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Hayalinizdeki Projeyi <span className="text-accent-500">Birlikte</span> İnşa Edelim
          </h2>
          <p className="text-primary-200 text-lg mb-12 max-w-2xl mx-auto font-light">
            Size özel tasarım ve uygulama çözümlerimiz için bizimle iletişime geçin, uzman ekibimiz en kısa sürede size dönüş yapsın.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="/iletisim" 
              className="bg-accent-500 hover:bg-accent-600 text-primary-950 px-10 py-5 font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1"
            >
              Hemen Teklif Al
            </a>
            <a 
              href="https://wa.me/905300000000" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-700 hover:border-accent-500 text-white px-10 py-5 font-bold uppercase tracking-widest transition-all duration-300"
            >
              WhatsApp Hattı
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Entegrasyonu (Opsiyonel) */}
      {/* <ContactForm /> */}
    </main>
  );
}
