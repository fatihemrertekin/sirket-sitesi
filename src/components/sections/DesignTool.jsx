"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { designOptions } from "@/content/designTool";

export default function DesignTool() {
  const [selections, setSelections] = useState({
    style: null,
    rooms: [],
    extras: []
  });

  const totalPrice = useMemo(() => {
    let total = 0;
    if (selections.style) total += selections.style.price;
    selections.rooms.forEach(item => total += item.price);
    selections.extras.forEach(item => total += item.price);
    return total;
  }, [selections]);

  const toggleSingle = (categoryId, item) => {
    setSelections(prev => ({
      ...prev,
      [categoryId]: prev[categoryId]?.id === item.id ? null : item
    }));
  };

  const toggleMultiple = (categoryId, item) => {
    setSelections(prev => {
      const current = prev[categoryId];
      const exists = current.find(i => i.id === item.id);
      if (exists) {
        return {
          ...prev,
          [categoryId]: current.filter(i => i.id !== item.id)
        };
      } else {
        return {
          ...prev,
          [categoryId]: [...current, item]
        };
      }
    });
  };

  return (
    <section className="section-padding bg-primary-900 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hayalinizdeki Mekanı <span className="text-accent-500">Tasarlayın</span>
          </h2>
          <p className="text-primary-400 max-w-2xl mx-auto text-lg font-light">
            Aşağıdaki seçeneklerden size en uygun olanları seçerek projenizin taslağını oluşturun ve anlık fiyat teklifi alın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Selections Area */}
          <div className="lg:col-span-2 space-y-16">
            {designOptions.map((category) => (
              <div key={category.id} className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-accent-500 font-bold text-xl">/ 0{designOptions.indexOf(category) + 1}</span>
                  <h3 className="text-2xl font-bold tracking-tight uppercase">{category.label}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item) => {
                    const isSelected = category.type === "single" 
                      ? selections[category.id]?.id === item.id
                      : selections[category.id].some(i => i.id === item.id);

                    return (
                      <div 
                        key={item.id}
                        onClick={() => category.type === "single" ? toggleSingle(category.id, item) : toggleMultiple(category.id, item)}
                        className={`group relative overflow-hidden cursor-pointer border transition-all duration-500 ${
                          isSelected 
                            ? "border-accent-500 bg-primary-800" 
                            : "border-primary-800 bg-primary-950 hover:border-primary-700"
                        }`}
                      >
                        {item.image && (
                          <div className="relative h-48 w-full overflow-hidden">
                            <Image
                              src={item.image} 
                              alt={item.label}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-950 to-transparent"></div>
                          </div>
                        )}
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xl font-bold text-white">{item.label}</h4>
                            <span className="text-accent-500 font-medium">+₺{item.price.toLocaleString()}</span>
                          </div>
                          <p className="text-primary-400 text-sm font-light leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        
                        {/* Selection Indicator */}
                        {isSelected && (
                          <div className="absolute top-4 right-4 bg-accent-500 text-white p-1 rounded-full shadow-lg">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Summary Card */}
          <div className="sticky top-32">
            <div className="bg-primary-950 border border-primary-800 p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 border-b border-primary-800 pb-4">Proje Özeti</h3>
              
              <div className="space-y-6 mb-8 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                {/* Selected Style */}
                {selections.style && (
                  <div className="flex justify-between text-sm">
                    <span className="text-primary-400">Stil: {selections.style.label}</span>
                    <span className="text-white font-medium">₺{selections.style.price.toLocaleString()}</span>
                  </div>
                )}

                {/* Selected Rooms */}
                {selections.rooms.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-widest text-accent-500 font-bold">Odalar</p>
                    {selections.rooms.map(room => (
                      <div key={room.id} className="flex justify-between text-sm">
                        <span className="text-primary-400">{room.label}</span>
                        <span className="text-white font-medium">₺{room.price.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Selected Extras */}
                {selections.extras.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-widest text-accent-500 font-bold">Ekstralar</p>
                    {selections.extras.map(extra => (
                      <div key={extra.id} className="flex justify-between text-sm">
                        <span className="text-primary-400">{extra.label}</span>
                        <span className="text-white font-medium">₺{extra.price.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                )}

                {(!selections.style && selections.rooms.length === 0 && selections.extras.length === 0) && (
                  <p className="text-primary-500 italic text-sm">Henüz bir seçim yapmadınız.</p>
                )}
              </div>

              <div className="border-t border-primary-800 pt-6 mt-6">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary-400 mb-1">Tahmini Tutar</p>
                    <p className="text-3xl font-bold text-accent-500">₺{totalPrice.toLocaleString()}</p>
                  </div>
                </div>

                <button 
                  disabled={totalPrice === 0}
                  className={`w-full py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                    totalPrice > 0 
                    ? "bg-accent-500 text-white hover:bg-white hover:text-primary-950" 
                    : "bg-primary-800 text-primary-600 cursor-not-allowed"
                  }`}
                >
                  TEKLİFİ TAMAMLA
                </button>
                <p className="text-[10px] text-primary-500 mt-4 text-center">
                  * Fiyatlar başlangıç tutarlarıdır ve kesinlik arz etmez.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
