import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/content/projects";
import Link from "next/link";
import Image from "@/components/ui/CustomImage";

export default function Projects() {
  return (
    <section id="projeler" className="section-padding bg-primary-900 border-t border-primary-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionTitle
            subtitle="Seçilmiş Projeler"
            title="Öne Çıkan Çalışmalarımız"
            align="left"
          />
          <Link
            href="/referanslar"
            className="inline-flex items-center gap-2 px-6 py-4 border border-primary-700 text-white font-medium uppercase tracking-wider text-sm hover:border-accent-500 hover:text-accent-500 transition-colors duration-300"
          >
            Tüm Projeler
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((project, index) => (
            <Link
              key={index}
              href={`/referanslar/${project.slug}`}
              className="group relative overflow-hidden bg-primary-800 cursor-pointer block"
            >
              {/* Görsel alanı - gereksiz wrapper kaldırıldı, DOM küçültüldü */}
              <div className="aspect-[4/5] bg-primary-800 relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-primary-500 font-light tracking-widest uppercase text-sm border border-primary-700">
                    Görsel ({project.category})
                  </div>
                )}
              </div>

              {/* Overlay ve İçerik */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs font-medium text-accent-500 uppercase tracking-widest mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    {project.title}
                  </h3>
                  <div className="w-0 h-[1px] bg-accent-500 group-hover:w-12 transition-all duration-700 delay-100 mt-4"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
