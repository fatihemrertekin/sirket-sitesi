"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "@/components/ui/CustomImage";

const categories = ["Tümü", "Kış Bahçesi", "Ahşap Ev", "Bungalow", "Tiny House", "Kamelya"];

export default function ClientReferanslar({ initialProjects }) {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredProjects = activeCategory === "Tümü"
    ? initialProjects
    : initialProjects.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Kategori Filtreleri */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        {categories.map((category, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 border text-sm font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${activeCategory === category
                ? "border-accent-500 bg-accent-500 text-white"
                : "border-primary-700 text-primary-300 hover:border-accent-500 hover:text-accent-500"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Proje Galeri (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <Link
            key={project.id}
            href={`/referanslar/${project.slug}`}
            className="group relative overflow-hidden bg-primary-800 cursor-pointer h-[400px] block"
          >
            {/* Görsel alanı */}
            <div className="w-full h-full bg-primary-800 relative transition-transform duration-700 group-hover:scale-105">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-primary-500 border border-primary-700">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-2 opacity-50">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <span className="font-light tracking-widest uppercase text-sm">Görsel ({project.category})</span>
                </div>
              )}
            </div>

            {/* Overlay ve İçerik */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xs font-medium text-accent-500 uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  {project.title}
                </h3>
                <p className="text-primary-300 text-sm font-light line-clamp-2 mt-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-5">
                  <div className="w-0 h-[1px] bg-accent-500 group-hover:w-16 transition-all duration-700 delay-100"></div>
                  <span className="text-xs text-accent-500 font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    Detayları Gör →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-primary-400 font-light">
          Bu kategoride henüz proje bulunmamaktadır.
        </div>
      )}
    </>
  );
}
