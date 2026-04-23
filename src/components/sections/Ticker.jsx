"use client";

import { useEffect, useRef } from "react";

const words = [
  "AHŞAP BUNGALOV",
  "TINY HOUSE",
  "KIŞ BAHÇESİ",
  "AHŞAP KAMELYA",
  "AHŞAP EV",
  "VERANDA & DECK",
];

export default function Ticker() {
  return (
    <div className="bg-accent-500 py-6 overflow-hidden flex whitespace-nowrap">
      <div className="animate-marquee inline-block">
        {/* İçeriği iki kez kopyalıyoruz ki kesintisiz dönsün */}
        {[...Array(2)].map((_, i) => (
          <span key={i} className="flex inline-flex items-center">
            {words.map((word, index) => (
              <span key={index} className="flex items-center">
                <span className="text-primary-900 text-xl font-medium tracking-[0.2em] uppercase px-8">
                  {word}
                </span>
                {/* Nokta Ayırıcı */}
                <span className="w-2 h-2 rounded-full bg-primary-900/50"></span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
