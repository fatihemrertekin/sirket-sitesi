import { notFound } from "next/navigation";
import Image from "@/components/ui/CustomImage";
import Link from "next/link";
import { projects } from "@/content/projects";

// --- Static params for pre-rendering ---
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// --- Per-page dynamic metadata ---
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Referanslar | Pikus Ahşap`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  // 404 if slug doesn't match
  if (!project) notFound();

  return (
    <main className="bg-primary-900 min-h-screen pt-32 pb-20">
      <div className="container-custom max-w-5xl mx-auto">

        {/* --- Breadcrumb --- */}
        <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-sm text-primary-400">
          <Link href="/" className="hover:text-accent-500 transition-colors">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/referanslar" className="hover:text-accent-500 transition-colors">Referanslar</Link>
          <span>/</span>
          <span className="text-primary-200">{project.title}</span>
        </nav>

        {/* --- Hero Image --- */}
        <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden mb-12">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-primary-800 flex items-center justify-center text-primary-500 border border-primary-700">
              <span className="uppercase tracking-widest text-sm font-light">Görsel ({project.category})</span>
            </div>
          )}
          {/* Category badge */}
          <span className="absolute top-6 left-6 bg-accent-500 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5">
            {project.category}
          </span>
        </div>

        {/* --- Title & Meta --- */}
        <div className="mb-10 border-b border-primary-700 pb-10">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-primary-400 font-light">
            <span className="flex items-center gap-2">
              {/* Location icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {project.location ?? "—"}
            </span>
            <span className="flex items-center gap-2">
              {/* Calendar icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {project.year ?? "—"}
            </span>
          </div>
        </div>

        {/* --- Two-column layout: Description + Features --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">

          {/* Long description (left / wider) */}
          <section className="lg:col-span-2" aria-labelledby="description-heading">
            <h2
              id="description-heading"
              className="text-xl font-semibold text-white mb-5 uppercase tracking-widest text-sm"
            >
              Proje Hakkında
            </h2>
            <p className="text-primary-300 leading-relaxed font-light text-base">
              {project.longDescription ?? project.description}
            </p>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-8">
                <h2
                  className="text-sm font-semibold text-white mb-5 uppercase tracking-widest"
                >
                  Öne Çıkan Özellikler
                </h2>
                <ul className="space-y-3">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-primary-300 font-light text-sm">
                      <span className="mt-1 w-4 h-4 flex-shrink-0 flex items-center justify-center rounded-full bg-accent-500/20 text-accent-500">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Technical specs (right sidebar) */}
          {project.features && project.features.length > 0 && (
            <aside
              className="bg-primary-800 border border-primary-700 p-8 self-start"
              aria-label="Teknik Özellikler"
            >
              <h2 className="text-sm font-semibold text-white mb-6 uppercase tracking-widest">
                Teknik Özellikler
              </h2>
              <dl className="space-y-4">
                {project.features.map((f, i) => (
                  <div key={i} className="flex flex-col gap-0.5 border-b border-primary-700 pb-4 last:border-0 last:pb-0">
                    <dt className="text-xs text-primary-500 uppercase tracking-wider">{f.label}</dt>
                    <dd className="text-sm text-white font-medium">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          )}
        </div>

        {/* --- CTA --- */}
        <section
          className="border border-primary-700 bg-primary-800/50 p-10 text-center"
          aria-label="Teklif Al"
        >
          <p className="text-primary-400 text-sm uppercase tracking-widest mb-2">Bu proje ilginizi çekti mi?</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Benzer Bir Proje İçin Teklif Alın
          </h2>
          <Link
            href="/iletisim"
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-10 py-3 text-sm font-semibold uppercase tracking-widest transition-colors duration-300"
          >
            Bize Ulaşın
          </Link>
        </section>

        {/* --- Back link --- */}
        <div className="mt-12">
          <Link
            href="/referanslar"
            className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-accent-500 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Tüm Referanslara Dön
          </Link>
        </div>

      </div>
    </main>
  );
}
