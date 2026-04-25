"use client";

import { createService } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import ItemsField from "@/components/admin/ItemsField";
import { slugify } from "@/lib/utils";

export default function NewServicePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    
    try {
      await createService(formData);
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

      <h1 className="text-3xl font-bold text-white mb-8">Yeni Hizmet Ekle</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900 p-8 rounded-2xl border border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Hizmet Adı</label>
            <input
              name="title"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Örn: Kamelya ve Kış Bahçesi"
            />
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
              placeholder="orn-kamelya-kis-bahcesi"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Kısa Açıklama (Kart İçin)</label>
          <textarea
            name="description"
            rows={2}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Uzun Açıklama (Detay Sayfası İçin)</label>
          <textarea
            name="longDescription"
            rows={6}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">İkon (SVG/PNG)</label>
            <input
              name="icon"
              type="file"
              accept="image/*"
              className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-slate-800 file:text-white hover:file:bg-slate-700"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Hero Görseli (Büyük Resim)</label>
            <input
              name="heroImage"
              type="file"
              accept="image/*"
              className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-slate-800 file:text-white hover:file:bg-slate-700"
            />
          </div>
        </div>

        <ItemsField />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all disabled:opacity-50"
        >
          {loading ? "Kaydediliyor..." : "Hizmeti Yayınla"}
        </button>
      </form>
    </div>
  );
}
