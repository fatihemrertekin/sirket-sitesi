import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { PlusIcon, TrashIcon, PencilIcon, HomeIcon } from "@heroicons/react/24/outline";
import { deleteService, deleteReference } from "@/lib/actions";

export default async function AdminDashboard() {
  const services = await prisma.service.findMany({ orderBy: { createdAt: "desc" } });
  const references = await prisma.reference.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Yönetim Paneli</h1>
          <p className="text-slate-400">Tüm hizmetleri ve referansları buradan yönetebilirsiniz.</p>
        </div>
        <Link 
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm transition-all"
        >
          <HomeIcon className="w-4 h-4" />
          Siteye Dön
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* SERVICES SECTION */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Hizmetler</h2>
            <Link
              href="/admin/services/new"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-blue-900/20"
            >
              <PlusIcon className="w-5 h-5" />
              Yeni Hizmet
            </Link>
          </div>

          <div className="space-y-4">
            {services.length === 0 && (
              <p className="text-slate-500 text-center py-8 bg-slate-900/50 rounded-xl border border-dashed border-slate-800">
                Henüz hizmet eklenmemiş.
              </p>
            )}
            {services.map((service) => (
              <div
                key={service.id}
                className="group flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 transition-all shadow-sm"
              >
                <div className="flex items-center gap-4">
                  {service.icon ? (
                    <img src={service.icon} alt="" className="w-10 h-10 object-contain" />
                  ) : (
                    <div className="w-10 h-10 bg-slate-800 rounded-lg" />
                  )}
                  <div>
                    <h3 className="font-semibold text-white">{service.title}</h3>
                    <p className="text-xs text-slate-500">{service.slug}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/admin/services/edit/${service.id}`}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
                  >
                    <PencilIcon className="w-5 h-5" />
                  </Link>
                  <form action={deleteService.bind(null, service.id)}>
                    <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* REFERENCES SECTION */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Referanslar</h2>
            <Link
              href="/admin/references/new"
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-emerald-900/20"
            >
              <PlusIcon className="w-5 h-5" />
              Yeni Referans
            </Link>
          </div>

          <div className="space-y-4">
            {references.length === 0 && (
              <p className="text-slate-500 text-center py-8 bg-slate-900/50 rounded-xl border border-dashed border-slate-800">
                Henüz referans eklenmemiş.
              </p>
            )}
            {references.map((ref) => (
              <div
                key={ref.id}
                className="group flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 transition-all shadow-sm"
              >
                <div className="flex items-center gap-4">
                  {ref.image ? (
                    <img src={ref.image} alt="" className="w-10 h-10 object-cover rounded-lg" />
                  ) : (
                    <div className="w-10 h-10 bg-slate-800 rounded-lg" />
                  )}
                  <div>
                    <h3 className="font-semibold text-white">{ref.title}</h3>
                    <p className="text-xs text-slate-500">{ref.slug}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <form action={deleteReference.bind(null, ref.id)}>
                    <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
