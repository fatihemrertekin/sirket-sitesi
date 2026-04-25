"use client";

import { createReference } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import FeaturesField from "@/components/admin/FeaturesField";
import HighlightsField from "@/components/admin/HighlightsField";
import { slugify } from "@/lib/utils";

export default function NewReferencePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    
    try {
      await createReference(formData);
      router.push("/admin");
      router.refresh();
    } catch (error) {
      alert("Hata oluştu: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <Link 
        href="/admin"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-all"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Geri Dön
      </Link>

      <h1 className="text-3xl font-bold text-white mb-8">Yeni Referans Ekle</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900 p-8 rounded-2xl border border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Başlık / Müşteri</label>
            <input
              name="title"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Örn: Modern Villa Projesi"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Kategori</label>
            <select
              name="category"
              required
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="Kış Bahçesi">Kış Bahçesi</option>
              <option value="Ahşap Ev">Ahşap Ev</option>
              <option value="Bungalow">Bungalow</option>
              <option value="Tiny House">Tiny House</option>
              <option value="Kamelya">Kamelya</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Konum (Location)</label>
            <input
              name="location"
              type="text"
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Örn: Kayseri, Türkiye"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Yıl (Year)</label>
            <input
              name="year"
              type="text"
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Örn: 2026"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Slug (Otomatik Oluşturulur)</label>
          <input
            name="slug"
            type="text"
            required
            readOnly
            value={slugify(title)}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-400 cursor-not-allowed outline-none"
            placeholder="modern-villa-projesi"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Kısa Açıklama</label>
          <textarea
            name="description"
            rows={2}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Uzun Açıklama</label>
          <textarea
            name="longDescription"
            rows={4}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <FeaturesField />
        <HighlightsField />

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Proje Görseli</label>
          <input
            name="image"
            type="file"
            accept="image/*"
            required
            className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-slate-800 file:text-white hover:file:bg-slate-700"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all disabled:opacity-50"
        >
          {loading ? "Kaydediliyor..." : "Referansı Yayınla"}
        </button>
      </form>
    </div>
  );
}
