import { companyInfo } from "@/content/company";

const stats = [
  { value: `${companyInfo.experience}+`, label: "Yıllık Deneyim" },
  { value: `${companyInfo.projectCount}+`, label: "Tamamlanan Proje" },
  { value: `${companyInfo.teamSize}+`, label: "Uzman Ekip" },
  { value: `${companyInfo.clientCount}+`, label: "Mutlu Müşteri" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-primary-800 text-white">
      <div className="container-custom px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl md:text-5xl font-bold text-accent-400">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-300 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
