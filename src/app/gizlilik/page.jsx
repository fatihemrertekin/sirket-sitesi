import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Güvenlik ve Gizlilik Politikası | Pikus Ahşap",
  description: "Pikus Ahşap güvenlik, gizlilik politikası ve kişisel verilerin korunması hakkında bilgilendirme.",
};

export default function GizlilikPage() {
  return (
    <main className="min-h-screen bg-primary-900 pt-32 pb-32">
      <div className="container-custom px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
        
        <div className="mb-12">
          <SectionTitle
            subtitle="Yasal"
            title="Güvenlik ve Gizlilik Politikası"
            description="Kişisel verilerinizin gizliliğine önem veriyor, bizimle paylaştığınız bilgilerin güvenliğini hassasiyetle sağlıyoruz."
            align="center"
            isH1={true}
          />
        </div>

        <div className="bg-primary-950/40 backdrop-blur-xl border border-primary-700/50 p-8 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden group">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/5 rounded-full blur-[80px] -z-10 group-hover:bg-accent-500/10 transition-colors duration-700"></div>
          
          <div className="space-y-12 text-primary-300 leading-relaxed font-light text-sm md:text-base">
            
            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> 1. Giriş
              </h2>
              <p className="pl-11 mb-4">
                Pikus Ahşap Ürünleri (“Pikus Ahşap” veya “Şirket”) olarak, kişisel verilerinizin gizliliğine önem verdiğimiz ve bizimle paylaştığınız bilgilerin kişisel ve gizli olduğunu kabul ettiğimiz için bu hususa hassasiyetle yaklaşıyoruz.
              </p>
              <p className="pl-11">
                İşbu Gizlilik Politikası’nı (“Politika”), Şirket olarak yönettiğimiz internet sitesi www.pikusahsap.com ve uygulamalar (“Sitemiz”) üzerinden toplanan verilerin gizliliği ve güvenliği hakkında Sitemizi ziyaret eden kullanıcılarımızı 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve ikincil mevzuat kapsamında bilgilendirmek amacıyla oluşturduk. Kişisel verileriniz, işbu Politika çerçevesinde, yalnızca size daha iyi bir hizmet sunmak amacıyla kullanılacaktır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> 2. Politika’nın Kapsamı
              </h2>
              <p className="pl-11">
                Pikus Ahşap olarak yönettiğimiz Sitemize erişiminiz sırasında topladığımız verilerinizin gizliliği ve güvenliği işbu Politika’nın kapsamındadır. Pikus Ahşap tarafından yönetilmeyen bir sitede Pikus Ahşap’a ait bir logonun, işaretin vb. bir görselin bulunması işbu Politika’nın o site için geçerli olduğu anlamına gelmemektedir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> 3. Kişisel Verilerin Korunması
              </h2>
              <div className="pl-11 space-y-4">
                <h3 className="text-lg font-medium text-primary-100">3.1. Kişisel Verilerin İşlenmesinde Genel İlkeler</h3>
                <p>Pikus Ahşap tarafından kişisel verilerinize ilişkin işleme faaliyetleri aşağıda sayılan genel ilkelere uygun olarak gerçekleştirilmektedir:</p>
                <ul className="list-disc pl-5 space-y-2 text-primary-200">
                  <li>Hukuka ve dürüstlük kurallarına uygun olma,</li>
                  <li>Doğru ve gerektiğinde güncel olma,</li>
                  <li>Belirli, açık ve meşru amaçlar için işlenme,</li>
                  <li>İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü olma,</li>
                  <li>İlgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre kadar muhafaza edilme.</li>
                </ul>

                <h3 className="text-lg font-medium text-primary-100 mt-8">3.2. Kişisel Verilerin İşlenme Amaçları</h3>
                <p>Kişisel verilerinizi tarafınızdan istenen hizmetlerin sağlanması, taleplerinizin alınması ve bu kapsamda sizinle iletişim kurulması gibi amaçlarla kullanıyoruz. Bu amaçlar aşağıdakilerle sınırlı olmamak üzere şu şekilde detaylandırılabilir:</p>
                <ul className="list-disc pl-5 space-y-2 text-primary-200">
                  <li>Faaliyetlerin mevzuata uygun yürütülmesi</li>
                  <li>Finans ve muhasebe i̇şlerinin yürütülmesi</li>
                  <li>Firma / ürün / hizmetlere bağlılık süreçlerinin yürütülmesi</li>
                  <li>İletişim faaliyetlerinin yürütülmesi</li>
                  <li>İş sürekliliğinin sağlanması faaliyetlerinin yürütülmesi</li>
                  <li>Lojistik faaliyetlerinin yürütülmesi</li>
                  <li>Mal / hizmet satın alım, üretim, pazarlama, satış, ve satış sonrası destek hizmetlerinin yürütülmesi</li>
                  <li>Müşteri i̇lişkileri yönetimi süreçlerinin yürütülmesi</li>
                  <li>Saklama ve arşiv faaliyetlerinin yürütülmesi</li>
                  <li>Sözleşme süreçlerinin yürütülmesi</li>
                  <li>Talep / şikayetlerin takibi</li>
                  <li>Tedarik zinciri yönetimi süreçlerinin yürütülmesi</li>
                  <li>Veri sorumlusu operasyonlarının güvenliğinin temini yetkili kişi, kurum ve kuruluşlara bilgi verilmesi</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> 4. Kişisel Verilerin Saklanması ve İmhası
              </h2>
              <div className="pl-11 space-y-4">
                <p>Şirketimiz kişisel verileri saklama ve imha işlemleri için bir Saklama ve İmha Politikası oluşturmuştur. Kişisel verilerinize ilişkin saklama ve imha işlemleri bu politika kapsamında gerçekleştirilmektedir. KVKK’da veya ilgili kanunlar ile sair ilgili mevzuatta verinin saklanması için bir süre belirlenmişse, söz konusu veri en az bu süre kadar saklanmak zorundadır.</p>
                <p>Mevzuatta işlediğimiz verinin saklanma süresine yönelik bir süre öngörülmemiş ise aramızdaki ilişkinin gereği olarak olası uyuşmazlıklar da göz önüne alınarak hukuki ilişkimizin sona ermesinden itibaren 10 yıllık dava zamanaşımı süresinin geçmesiyle verileriniz herhangi bir talebinize gerek olmadan silinir, yok edilir veya anonim hale getirilir.</p>
                <p>Geçerli bir sebep ile verilerinizin silinmesine dair talepte bulunmanız halinde ise verileriniz yasal olarak mümkün olduğu nispette en geç 30 gün içerisinde silinir.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> 5. Kredi Kartı Güvenliği
              </h2>
              <div className="pl-11 space-y-4">
                <p>Pikus Ahşap; www.pikusahsap.com sitesinden alışveriş yapan kredi kartı sahiplerinin güvenliğini ilk planda tutmaktadır. Kredi kartı bilgileriniz yalnızca sipariş işlemi gerçekleştirilirken kullanılır ve kesinlikle veri tabanında kayıtlı olarak tutulmaz.</p>
                <p>Alışveriş sırasında kullanılan kredi kartı ile ilgili bilgiler siteden bağımsız olarak SSL (Secure Sockets Layer) protokolü ile şifrelenip sorgulanmak üzere ilgili bankaya ulaşır. Ayrıca kredi kartı verileri bakımından Kartlı Ödeme Endüstrisi Veri Güvenlik Standartları (PCI DSS) uygulanarak güvenlik önlemleri alınmaktadır.</p>
                <p>Pikus Ahşap, 3D Secure kontrolünün yapılıp yapılmayacağına karar vermektedir. Böylece hızlı ve güvenli bir ödeme sunularak kullanıcı deneyimi arttırılmaktadır.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> 6. Üçüncü Taraf İnternet Sitelerine Verilen Linkler
              </h2>
              <p className="pl-11">
                Sitemiz, üçüncü tarafların internet sitelerine ait bağlantılar içerebilir. Bu gibi hallerde üçüncü taraflarca veri toplanması, işlenmesi, paylaşılması veya aktarımı sorumluluğumuzun dışındadır. Pikus Ahşap; kredi kartı ve hesap bilgilerinizi ya da şifrelerinizi talep eden elektronik posta ve SMS’ler göndermemektedir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> 7. Çerezler (Cookies)
              </h2>
              <div className="pl-11 space-y-4">
                <p>www.pikusahsap.com web sitesi çerez (cookie) kullanan bir sitedir. Çerez; kullanılmakta olan cihazın internet tarayıcısına ya da sabit diskine depolanarak söz konusu cihazın tespit edilmesine olanak tanıyan, çoğunlukla harf ve sayılardan oluşan bir dosyadır.</p>
                <p>Çerezleri, yaptığınız tercihleri hatırlamak, web sitesi kullanımınızı kişiselleştirmek ve sitemizi nasıl kullandığınızı analiz etmek için (Google Analytics vb. araçlarla) kullanmaktayız. Tarayıcı ayarlarınızdan çerezleri yönetebilir veya reddedebilirsiniz.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> 8. Bize Ulaşın
              </h2>
              <p className="pl-11">
                İşbu Politika’nın yorumlanması veya uygulanması ile ilgili sorularınızı, çekincelerinizi veya şikayetlerinizi; Elektronik posta yoluyla <strong>pikusahsap@gmail.com</strong> adresine iletebilirsiniz.
              </p>
            </section>

            <div className="bg-primary-900 border border-primary-700/50 p-6 rounded-xl mt-8">
              <p className="text-primary-200 font-medium text-sm flex items-start gap-4">
                <svg className="w-6 h-6 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Satın alım yaptığınızda "Mesafeli Satış Sözleşmesi" ve "Güvenlik ve Gizlilik Politikası"nı okumuş ve onaylamış, tarafınıza elektronik ileti gönderilmesini kabul etmiş olursunuz.
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
