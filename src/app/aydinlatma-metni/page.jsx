import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Aydınlatma Metni | Pikus Ahşap",
  description: "Kişisel verilerin işlenmesine ilişkin aydınlatma metni ve yasal haklarınız.",
};

export default function AydinlatmaMetniPage() {
  return (
    <main className="min-h-screen bg-primary-900 pt-32 pb-32">
      <div className="container-custom px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
        
        <div className="mb-12">
          <SectionTitle
            subtitle="Yasal"
            title="Aydınlatma Metni"
            description="Kişisel verilerinizin işlenmesi, saklanması ve haklarınız hakkında bilgilendirme."
            align="center"
            isH1={true}
          />
        </div>

        <div className="bg-primary-950/40 backdrop-blur-xl border border-primary-700/50 p-8 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden group">
          
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-500/5 rounded-full blur-[80px] -z-10 group-hover:bg-accent-500/10 transition-colors duration-700"></div>
          
          <div className="space-y-12 text-primary-300 leading-relaxed font-light text-sm md:text-base">
            
            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> Veri Sorumlusu
              </h2>
              <p className="pl-11 mb-4">
                <strong>Pikus Ahşap Ürünleri (“Pikus Ahşap” veya “Şirket”)</strong>
              </p>
              <p className="pl-11">
                Pikus Ahşap olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve ilgili mevzuat çerçevesinde kişisel verilerinizin işlenmesi, saklanması ve aktarılması ile ilgili veri sahiplerini aydınlatmak amacıyla işbu Kişisel Verilerin İşlenmesi Aydınlatma Metni’ni (“Aydınlatma Metni”) hazırladık.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> Saklama ve İmha
              </h2>
              <div className="pl-11 space-y-4">
                <p>Şirketimiz kişisel verileri saklama ve silme işlemleri için bir Saklama ve İmha Politikası oluşturmuştur. KVKK’da veya ilgili kanunlar ile sair ilgili mevzuatta verinin saklanması için bir süre belirlenmişse, söz konusu veri en az bu süre kadar saklanmak zorundadır.</p>
                <p>Olası bir mahkeme talebinin veya kanunla yetkili kılınmış idari mercilerin talebi gözetilerek, verilerinizin saklanması için mevzuatta öngörülen sürelere 6 ay ila 1 yıl arası bir süre eklenerek saklama süresi belirlenmekte ve sürenin sonunda veriler silinmekte, yok edilmekte veya anonimleştirilmektedir.</p>
                <p>Geçerli bir sebep ile verilerinizin silinmesine dair talepte bulunmanız halinde ise verileriniz yasal olarak mümkün olduğu nispette en geç 30 gün içerisinde silinir.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> Haklarınız
              </h2>
              <div className="pl-11">
                <p className="mb-4">KVKK ve ilgili mevzuat kapsamında kişisel verilerinize ilişkin olarak;</p>
                <ul className="list-disc pl-5 space-y-2 text-primary-200">
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                  <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
                  <li>Kişisel verilerin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                  <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,</li>
                  <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme,</li>
                  <li>KVKK mevzuatında öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme,</li>
                  <li>Eksik/yanlış verilerin düzeltilmesi ile silinmesi/yok edilmesi durumunun üçüncü kişilere bildirilmesini isteme,</li>
                  <li>Münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
                  <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde bu zararın giderilmesini talep etme haklarına sahipsiniz.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> Başvuru
              </h2>
              <div className="pl-11 space-y-4">
                <p>Kişisel verileriniz ile ilgili başvuru ve taleplerinizi dilerseniz <strong>pikusahsap@gmail.com</strong> adresine iletebilirsiniz.</p>
                <p>Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ uyarınca, başvuruda ad, soyad, imza, T.C. kimlik numarası, tebligata esas yerleşim yeri veya iş yeri adresi, e-posta adresi ve talep konusunun bulunması zorunludur.</p>
                <p>Kişisel verilerinize ilişkin hak talepleriniz değerlendirilerek, ilgili departmana ulaştığı tarihten itibaren en geç 30 gün içerisinde cevaplanır.</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
