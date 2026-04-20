import ContactForm from "@/components/sections/ContactForm";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "İletişim | Mimarlık Ofisi",
  description: "Bizimle iletişime geçin. Projeleriniz için ücretsiz danışmanlık alın.",
};

export default function IletisimPage() {
  return (
    <main className="bg-primary-900 min-h-screen pt-32 pb-0">
      <div className="container-custom mb-16">
        <SectionTitle
          subtitle="İletişim"
          title="Bize Ulaşın"
          description="Yeni projeleriniz için bizimle iletişime geçin, size en uygun çözümleri sunalım."
          align="center"
          isH1={true}
        />
      </div>

      {/* Harita Bölümü */}
      <div className="container-custom mb-24 px-4">
        <div className="relative w-full h-[500px] rounded-[2rem] overflow-hidden border border-primary-700/50 shadow-2xl group">
          {/* Konum Etiketi */}
          <div className="absolute top-8 right-8 z-10 pointer-events-none">
            <div className="bg-primary-900/90 backdrop-blur-xl border border-accent-500/20 px-6 py-3 rounded-2xl flex items-center gap-4 shadow-2xl transition-transform duration-500 group-hover:scale-105">
              <div className="relative flex">
                <div className="w-3 h-3 rounded-full bg-accent-500"></div>
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-accent-500 animate-ping"></div>
              </div>
              <div>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent-500 block leading-none mb-1">Konumumuz</span>
                <span className="text-sm font-light text-primary-100 block">Kayseri, Türkiye</span>
              </div>
            </div>
          </div>

          {/* Iframe Harita */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1555.2366793870622!2d35.4241673!3d38.7757815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b13d2bc317689%3A0x19ae792b567d5007!2sPiramitwood!5e0!3m2!1str!2str!4v1776706760609!5m2!1str!2str"
            className="w-full h-full grayscale-[0.8] invert-[0.9] contrast-[1.2] transition-all duration-1000 ease-in-out group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-100"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          {/* Dekoratif Overlay Gradients */}
          <div className="absolute inset-0 pointer-events-none transition-opacity duration-700 group-hover:opacity-0 bg-gradient-to-t from-primary-950/40 to-transparent"></div>
          <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 rounded-[2rem]"></div>
        </div>
      </div>

      {/* Contact Form bileşenini doğrudan çağırıyoruz */}
      <div className="-mt-16">
        <ContactForm />
      </div>

    </main>
  );
}
