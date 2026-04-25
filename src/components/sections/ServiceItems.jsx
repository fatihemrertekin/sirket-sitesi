"use client";

import Image from "@/components/ui/CustomImage";

export default function ServiceItems({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="section-padding bg-primary-950">
      <div className="container-custom">
        <div className="flex flex-col gap-24">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 group relative">
                <div className="relative aspect-[4/3] overflow-hidden border border-primary-800">
                  <Image
                    src={item.image || "/images/projects/modern-ahsap-kis-bahcesi.jpg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                {/* Decorative Elements */}
                <div className={`absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-accent-500/30 hidden md:block ${index % 2 === 1 ? "-left-6 -right-auto border-r-0 border-l-2" : ""
                  }`}></div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-accent-500 font-bold text-xl">0{index + 1}</span>
                  <div className="w-12 h-[1px] bg-accent-500/50"></div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  {item.title}
                </h2>

                <p className="text-primary-200 text-lg font-light leading-relaxed mb-8">
                  {item.description}
                </p>

                {item.features && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-500"></div>
                        <span className="text-sm text-primary-100 uppercase tracking-wider">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-10">
                  <a
                    href="/iletisim"
                    className="inline-flex items-center gap-4 text-accent-500 hover:text-white transition-colors group"
                  >
                    <span className="text-sm font-bold uppercase tracking-widest">Bilgi Al & Teklif İste</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
