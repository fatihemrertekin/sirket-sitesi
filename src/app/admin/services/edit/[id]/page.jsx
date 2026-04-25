import { prisma } from "@/lib/prisma";
import { updateService } from "@/lib/actions";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import EditServiceForm from "@/components/admin/EditServiceForm";

export default async function EditServicePage({ params }) {
  const { id } = await params;
  const service = await prisma.service.findUnique({ where: { id } });

  if (!service) return <div>Hizmet bulunamadı.</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <Link 
        href="/admin"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-all"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Geri Dön
      </Link>

      <h1 className="text-3xl font-bold text-white mb-8">Hizmeti Düzenle</h1>
      
      <EditServiceForm service={service} />
    </div>
  );
}
