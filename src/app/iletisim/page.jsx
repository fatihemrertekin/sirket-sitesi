import ContactForm from "@/components/sections/ContactForm";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "İletişim | Mimarlık Ofisi",
  description: "Bizimle iletişime geçin. Projeleriniz için ücretsiz danışmanlık alın.",
};

export default function IletisimPage() {
  return (
    <div className="bg-primary-900 min-h-screen pt-32 pb-0">
      <div className="container-custom mb-16">
        <SectionTitle
          subtitle="İletişim"
          title="Bize Ulaşın"
          description="Yeni projeleriniz için bizimle iletişime geçin, size en uygun çözümleri sunalım."
          align="center"
        />
      </div>

      {/* Harita (Placeholder) */}
      <div className="w-full h-[500px] bg-primary-800 border-y border-primary-700 relative overflow-hidden flex items-center justify-center group mb-16">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="text-center z-10 p-8 border border-primary-700 bg-primary-900 shadow-2xl">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent-500 mx-auto mb-4">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span className="font-light tracking-widest uppercase text-sm block text-primary-200">Google Haritalar Placeholder</span>
          <span className="text-xs text-primary-500 mt-2 block">(Buraya iframe harita kodu eklenecek)</span>
        </div>
      </div>

      {/* Contact Form bileşenini doğrudan çağırıyoruz */}
      <div className="-mt-16">
        <ContactForm />
      </div>
      
    </div>
  );
}
