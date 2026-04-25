import { prisma } from "@/lib/prisma";
import SectionTitle from "@/components/ui/SectionTitle";
import ClientReferanslar from "@/components/sections/ClientReferanslar";

export const metadata = {
  title: "Referanslar | Pikus Ahşap",
  description: "Geçmişten günümüze tamamladığımız tüm projeler ve birlikte çalıştığımız mutlu müşterilerimiz.",
};

export default async function ReferanslarPage() {
  const projects = await prisma.reference.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <main className="bg-primary-900 min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <div className="mb-16">
          <SectionTitle
            subtitle="Portfolyo"
            title="Referanslarımız"
            description="Geçmişten günümüze tamamladığımız tüm projeler ve birlikte çalıştığımız mutlu müşterilerimiz."
            align="center"
            isH1={true}
          />
        </div>

        <ClientReferanslar initialProjects={projects} />
      </div>
    </main>
  );
}
