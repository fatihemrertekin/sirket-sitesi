import SectionTitle from "@/components/ui/SectionTitle";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Services() {
  const services = await prisma.service.findMany({
    orderBy: { createdAt: 'asc' }
  });
  return (
    <section id="hizmetler" className="section-padding bg-primary-900 border-t border-primary-800">
      <div className="container-custom">
        <SectionTitle
          subtitle="Uzmanlık Alanlarımız"
          title="Sizin İçin Neler Yapabiliriz?"
          description="Hayalinizdeki mekanları gerçeğe dönüştürmek için kapsamlı ahşap yapı ve tasarım çözümleri sunuyoruz."
        />

        <div className="mt-16 border-t border-primary-800">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-b border-primary-800 hover:border-accent-500 transition-colors duration-300"
            >
              <Link href={`/hizmetler/${service.slug}`} className="flex flex-col md:flex-row items-start md:items-center justify-between py-10 px-4 md:px-8 gap-6 md:gap-12 relative overflow-hidden">

                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-primary-800/50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10"></div>

                <div className="flex items-center gap-8 md:gap-16 md:w-1/2">
                  <span className="text-4xl md:text-5xl font-light text-primary-700 group-hover:text-accent-500 transition-colors duration-300" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    {(index + 1).toString().padStart(2, "0")}.
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent-500 transition-colors duration-300" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    {service.title}
                  </h3>
                </div>

                <div className="md:w-1/2 flex items-center justify-between gap-6">
                  <p className="text-primary-300 text-lg font-light leading-relaxed max-w-md">
                    {service.description}
                  </p>

                  <div className="w-12 h-12 rounded-full border border-primary-700 flex items-center justify-center text-primary-400 group-hover:bg-accent-500 group-hover:border-accent-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
