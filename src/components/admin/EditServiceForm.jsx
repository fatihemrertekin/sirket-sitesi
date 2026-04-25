"use client";

import { updateService } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ItemsField from "@/components/admin/ItemsField";

export default function EditServiceForm({ service }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    
    try {
      await updateService(service.id, formData);
      router.push("/admin");
      router.refresh();
    } catch (error) {
      alert("Hata oluştu: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900 p-8 rounded-2xl border border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Hizmet Adı</label>
          <input
            name="title"
            type="text"
            required
            defaultValue={service.title}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Slug (URL)</label>
          <input
            name="slug"
            type="text"
            required
            defaultValue={service.slug}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-300">Kısa Açıklama</label>
        <textarea
          name="description"
          rows={2}
          defaultValue={service.description}
          className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-300">Uzun Açıklama</label>
        <textarea
          name="longDescription"
          rows={6}
          defaultValue={service.longDescription}
          className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">İkon (Değiştirmek için seçin)</label>
          {service.icon && <img src={service.icon} alt="" className="w-12 h-12 mb-2 object-contain" />}
          <input
            name="icon"
            type="file"
            accept="image/*"
            className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-slate-800 file:text-white hover:file:bg-slate-700"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Hero Görseli (Değiştirmek için seçin)</label>
          {service.heroImage && <img src={service.heroImage} alt="" className="w-24 h-12 mb-2 object-cover rounded" />}
          <input
            name="heroImage"
            type="file"
            accept="image/*"
            className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-slate-800 file:text-white hover:file:bg-slate-700"
          />
        </div>
      </div>

      <ItemsField initialItems={service.items || []} />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all disabled:opacity-50"
      >
        {loading ? "Güncelleniyor..." : "Değişiklikleri Kaydet"}
      </button>
    </form>
  );
}
