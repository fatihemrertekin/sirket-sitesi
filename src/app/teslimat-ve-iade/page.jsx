import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Teslimat ve İade | Pikus Ahşap",
  description: "Pikus Ahşap sipariş, kargo, teslimat süreleri ve iade prosedürleri hakkında bilgilendirme.",
};

export default function TeslimatVeIadePage() {
  return (
    <main className="min-h-screen bg-primary-900 pt-32 pb-32">
      <div className="container-custom px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
        
        <div className="mb-12">
          <SectionTitle
            subtitle="Müşteri Hizmetleri"
            title="Teslimat ve İade"
            description="Siparişlerinizin gönderim süreci ve satış sonrası destek prosedürleri."
            align="center"
            isH1={true}
          />
        </div>

        <div className="bg-primary-950/40 backdrop-blur-xl border border-primary-700/50 p-8 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden group">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/5 rounded-full blur-[80px] -z-10 group-hover:bg-accent-500/10 transition-colors duration-700"></div>
          
          <div className="space-y-12 text-primary-300 leading-relaxed font-light text-sm md:text-base">
            
            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> Sipariş Bilgileri
              </h2>
              <div className="pl-11 space-y-4">
                <p>
                  Mağazamızdan verilen seri üretim siparişler, banka ve finans onayı alındıktan sonra en geç 1 ile 4 iş günü (Pazartesi-Cuma) içerisinde kargoya teslim edilir. Saat 12:00 dan sonra verilen siparişler ertesi gün işleme alınır. Bayram ve tatil günlerinde işlem yapılmaz. Seri üretim olmayan ürünler üretim planlarına göre sizlere iletilen süre zarfında en kısa zaman içerisinde üretilecektir.
                </p>
                <p>
                  Teslimat ve Kargo Ücretleri belirtilmektedir. Belirtilmediği takdirde ve aksi durumlarda lütfen bizimle iletişime geçiniz.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> Ürün Portföyü Politikası
              </h2>
              <p className="pl-11">
                Ürün Portföyümüz pikusahsap.com etik ticari kurallara uygun şirket anlayışına sahiptir. Bu nedenle, ahlak kurallarına aykırı, bölücü veya kışkırtıcı ürünlerin satışını ve pazarlamasını, müşterilerin memnuniyet ve rahatını öngörerek gerçekleştirmez.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> Siparişiniz Elinize Ulaşmadıysa
              </h2>
              <p className="pl-11">
                Siparişiniz ile ilgili soru ve sorunlarınızın çözümü için, Müşteri Hizmetleri yetkilileri ile görüşmeniz yeterli. Uzmanlarımız en yakın zamanda durumu değerlendirecek ve çözümlerle ilgili bilgi vermek üzere sizlerle iletişim kuracaktır.
              </p>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
