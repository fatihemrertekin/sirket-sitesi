import Link from "next/link";
import { navLinks } from "@/content/navigation";
import { companyInfo } from "@/content/company";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white pt-20 pb-10 border-t border-primary-800">
      <div className="container-custom px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Sütun 1: Logo & Hakkında */}
          <div className="lg:pr-8">
            <Link href="/" className="text-3xl font-bold flex items-center gap-2 mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent-500">
                <path d="M12 3L2 12H5V21H19V12H22L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              MİMAR<span className="text-accent-500">.</span>
            </Link>
            <p className="text-primary-400 font-light text-sm leading-relaxed mb-8">
              {companyInfo.shortDescription} Yaratıcı ve estetik çözümlerle geleceğin mimarisini inşa ediyoruz.
            </p>
            <div className="flex gap-4">
              <a href={companyInfo.social.instagram} className="w-10 h-10 border border-primary-800 flex items-center justify-center text-primary-400 hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-all">IN</a>
              <a href={companyInfo.social.linkedin} className="w-10 h-10 border border-primary-800 flex items-center justify-center text-primary-400 hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-all">LI</a>
              <a href={companyInfo.social.twitter} className="w-10 h-10 border border-primary-800 flex items-center justify-center text-primary-400 hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-all">TW</a>
            </div>
          </div>

          {/* Sütun 2: Hızlı Bağlantılar */}
          <div>
            <h4 className="text-xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>Bağlantılar</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-400 font-light hover:text-accent-500 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-2 h-[1px] bg-accent-500"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sütun 3: Hizmetler */}
          <div>
            <h4 className="text-xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>Hizmetlerimiz</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/hizmetler/mimari-tasarim" className="text-primary-400 font-light hover:text-accent-500 transition-colors text-sm flex items-center gap-2">
                  <span className="w-2 h-[1px] bg-accent-500"></span> Mimari Tasarım
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/ic-mimarlik" className="text-primary-400 font-light hover:text-accent-500 transition-colors text-sm flex items-center gap-2">
                  <span className="w-2 h-[1px] bg-accent-500"></span> İç Mimarlık
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/kentsel-tasarim" className="text-primary-400 font-light hover:text-accent-500 transition-colors text-sm flex items-center gap-2">
                  <span className="w-2 h-[1px] bg-accent-500"></span> Kentsel Tasarım
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/peyzaj" className="text-primary-400 font-light hover:text-accent-500 transition-colors text-sm flex items-center gap-2">
                  <span className="w-2 h-[1px] bg-accent-500"></span> Peyzaj Tasarımı
                </Link>
              </li>
            </ul>
          </div>

          {/* Sütun 4: İletişim */}
          <div>
            <h4 className="text-xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-primary-400 font-light text-sm">{companyInfo.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${companyInfo.phone}`} className="text-primary-400 font-light hover:text-accent-500 transition-colors text-sm">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${companyInfo.email}`} className="text-primary-400 font-light hover:text-accent-500 transition-colors text-sm">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Alt çizgi */}
        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-500 font-light">
            &copy; {new Date().getFullYear()} {companyInfo.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4">
            <Link href="/gizlilik" className="text-xs text-primary-500 hover:text-accent-500 transition-colors">Gizlilik Politikası</Link>
            <Link href="/kullanim-sartlari" className="text-xs text-primary-500 hover:text-accent-500 transition-colors">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
