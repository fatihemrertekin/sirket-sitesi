import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-primary-900 overflow-hidden relative">
      <div className="container-custom px-4 text-center z-10">
        <div className="mb-8">
          <span className="text-accent-500 text-6xl md:text-8xl font-bold opacity-20 block mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            404
          </span>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-accent-500"></div>
            <span className="text-accent-500 text-sm font-medium tracking-[0.2em] uppercase">
              Sayfa Bulunamadı
            </span>
            <div className="w-12 h-[1px] bg-accent-500"></div>
          </div>
        </div>

        <h1 
          className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white" 
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Aradığınız Adresi <br />
          <span className="text-accent-500 italic font-light">Bulamadık</span>
        </h1>

        <p className="text-primary-200 text-lg md:text-xl mb-10 max-w-lg mx-auto font-light leading-relaxed">
          Üzgünüz, aradığınız sayfa silinmiş, ismi değiştirilmiş veya geçici olarak kullanım dışı olabilir.
        </p>

        <div className="flex flex-wrap justify-center gap-6 items-center">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-accent-500 text-white font-medium uppercase tracking-wider text-sm hover:bg-white hover:text-primary-900 transition-all duration-300"
          >
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 px-6 py-4 text-white font-medium uppercase tracking-wider text-sm group"
          >
            <span className="border-b border-transparent group-hover:border-accent-500 transition-colors">Hizmetlerimizi İnceleyin</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent-500 group-hover:translate-x-2 transition-transform">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5 -z-0"></div>
      <div className="absolute top-0 left-2/4 w-[1px] h-full bg-white/5 -z-0"></div>
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white/5 -z-0"></div>
      
      {/* Decorative wood grain effect (subtle) */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 border border-accent-500/10 rounded-full -z-0"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 border border-accent-500/10 rounded-full -z-0"></div>
    </main>
  );
}
