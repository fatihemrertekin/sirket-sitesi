"use client";

import { useState } from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function ItemsField({ initialItems = [] }) {
  const [items, setItems] = useState(
    initialItems.map((item) => ({
      ...item,
      featuresStr: (item.features || []).join(", "),
    }))
  );

  const addItem = () => {
    setItems([...items, { title: "", description: "", image: "", featuresStr: "" }]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-slate-300">Alt Hizmetler / Ürünler (Items)</label>
        <button
          type="button"
          onClick={addItem}
          className="text-xs bg-slate-800 hover:bg-slate-700 text-white px-3 py-1 rounded flex items-center gap-1 transition-colors"
        >
          <PlusIcon className="w-3 h-3" /> Ekle
        </button>
      </div>
      
      {/* Hidden input to pass data to server action */}
      <input 
        type="hidden" 
        name="items" 
        value={JSON.stringify(
          items.map(({ featuresStr, ...rest }) => ({
            ...rest,
            features: featuresStr
              ? featuresStr.split(",").map((s) => s.trim()).filter(Boolean)
              : [],
          }))
        )} 
      />

      {items.length === 0 && (
        <p className="text-xs text-slate-500 italic">Henüz alt hizmet eklenmedi.</p>
      )}

      {items.map((item, index) => (
        <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 space-y-3">
          <div className="flex justify-between items-start">
            <h4 className="text-sm font-semibold text-white">Item #{index + 1}</h4>
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="text-red-400 hover:text-red-300"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Başlık"
              value={item.title || ""}
              onChange={(e) => updateItem(index, "title", e.target.value)}
              className="w-full px-3 py-1.5 text-sm bg-slate-800 border border-slate-600 rounded text-white outline-none focus:border-blue-500"
            />
            <div className="flex flex-col justify-center">
              {item.image && typeof item.image === "string" && (
                <img src={item.image} alt="Mevcut Görsel" className="h-10 w-20 object-cover mb-2 rounded border border-slate-700" />
              )}
              <input
                type="file"
                name={`item_image_${index}`}
                accept="image/*"
                className="w-full text-xs text-slate-400 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:font-semibold file:bg-slate-700 file:text-white hover:file:bg-slate-600 outline-none"
              />
              <input type="hidden" name={`item_existing_image_${index}`} value={item.image || ""} />
            </div>
          </div>
          <textarea
            placeholder="Açıklama"
            rows={2}
            value={item.description || ""}
            onChange={(e) => updateItem(index, "description", e.target.value)}
            className="w-full px-3 py-1.5 text-sm bg-slate-800 border border-slate-600 rounded text-white outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Özellikler (Virgülle ayırın)"
            value={item.featuresStr || ""}
            onChange={(e) => updateItem(index, "featuresStr", e.target.value)}
            className="w-full px-3 py-1.5 text-sm bg-slate-800 border border-slate-600 rounded text-white outline-none focus:border-blue-500"
          />
        </div>
      ))}
    </div>
  );
}
