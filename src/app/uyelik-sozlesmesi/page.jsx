import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Üyelik Sözleşmesi | Pikus Ahşap",
  description: "Pikus Ahşap platformuna üye olan kullanıcıların hak ve yükümlülüklerini içeren üyelik sözleşmesi.",
};

export default function UyelikSozlesmesiPage() {
  return (
    <main className="min-h-screen bg-primary-900 pt-32 pb-32">
      <div className="container-custom px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
        
        <div className="mb-12">
          <SectionTitle
            subtitle="Yasal"
            title="Üyelik Sözleşmesi"
            description="Pikus Ahşap platformundan faydalanma şartları ve üyelerimizin hakları."
            align="center"
            isH1={true}
          />
        </div>

        <div className="bg-primary-950/40 backdrop-blur-xl border border-primary-700/50 p-8 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden group">
          
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent-500/5 rounded-full blur-[80px] -z-10 group-hover:bg-accent-500/10 transition-colors duration-700"></div>
          
          <div className="space-y-12 text-primary-300 leading-relaxed font-light text-sm md:text-base">
            
            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> 1. Taraflar
              </h2>
              <div className="pl-11 space-y-4">
                <p>
                  a) www.pikusahsap.com internet sitesinin ve mobil uygulamasının (“internet sitesi ve mobil uygulama bundan sonra “Platform” olarak anılacaktır.) faaliyetlerini yürüten Mobilya Kent Sitesi 5072.Sk. No: 10 A Kocasinan / Kayseri adresinde mukim Pikus Ahşap Ürünleri (Bundan böyle “Pikus Ahşap” olarak anılacaktır).
                </p>
                <p>
                  b) Platform’a üye olan internet kullanıcısı (“Üye”)
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> 2. Sözleşmenin Konusu
              </h2>
              <p className="pl-11">
                İşbu Sözleşme’nin konusu Pikus Ahşap’ın sahip olduğu Platform’dan üyenin faydalanma şartlarının belirlenmesidir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> 3. Tarafların Hak ve Yükümlülükleri
              </h2>
              <div className="pl-11 space-y-6">
                <p><strong className="text-accent-500">3.1.</strong> Platform’a üye olunurken üyelik sayfasında belirtilen bilgilerin doğru ve eksiksiz şekilde girilmesi ve Üyelik Sözleşmesi’nin onaylanması gerekmektedir. Üye verdiği kişisel ve diğer sair bilgilerin doğru olduğunu beyan eder.</p>
                <p><strong className="text-accent-500">3.2.</strong> Üye, Platform’a kayıt olurken belirlediği şifreyi başka kişi ya da kuruluşlara veremez. Şifrenin güvenliği ve gizliliği tamamen Üye’nin sorumluluğundadır.</p>
                <p><strong className="text-accent-500">3.3.</strong> Üye Platform’u kullanırken yasal mevzuat hükümlerine riayet etmeyi ve bunları ihlal etmemeyi kabul ve taahhüt eder.</p>
                <p><strong className="text-accent-500">3.4.</strong> Üye, Platform’u hiçbir şekilde kamu düzenini bozucu, genel ahlaka aykırı, başkalarını rahatsız ve taciz edici şekilde veya yasalara aykırı bir amaç için kullanamaz. Virüs, truva atı vb. zararlı teknolojiler yayamaz.</p>
                <p><strong className="text-accent-500">3.5.</strong> Platform’da üyeler tarafından beyan edilen fikir, düşünce ve yorumlar tamamen üyelerin kendi kişisel görüşleridir ve Pikus Ahşap’ın bunlarla ilgili herhangi bir sorumluluğu bulunmamaktadır.</p>
                <p><strong className="text-accent-500">3.6.</strong> İşbu sözleşme maddelerinden bir ya da birkaçını ihlal eden üye, işbu ihlal nedeniyle cezai ve hukuki olarak şahsen sorumludur.</p>
                <p><strong className="text-accent-500">3.7.</strong> Pikus Ahşap’ın her zaman tek taraflı olarak gerektiğinde üyenin üyeliğine son verme hakkı saklıdır.</p>
                <p><strong className="text-accent-500">3.8.</strong> Pikus Ahşap markası ve logosu, Platform’un yazılım ve tasarımı ve içerikler Pikus Ahşap mülkiyetindedir; izinsiz kullanılamaz.</p>
                <p><strong className="text-accent-500">3.9.</strong> Pikus Ahşap tarafından Platform’un iyileştirilmesine yönelik yasal mevzuat çerçevesinde IP adresi, erişim tarihi gibi bilgiler toplanabilir.</p>
                <p><strong className="text-accent-500">3.10.</strong> Pikus Ahşap, sitenin virüslerden arındırılması için tedbir almıştır, ancak nihai güvenlik için kullanıcı kendi virüs koruma sistemini sağlamalıdır.</p>
                <p><strong className="text-accent-500">3.11.</strong> Pikus Ahşap, sitenin içeriğini veya hizmetleri dilediği zaman değiştirme hakkını saklı tutar.</p>
                <p><strong className="text-accent-500">3.12.</strong> Üyelik sözleşmesi koşulları ön ihbara gerek kalmaksızın güncellenebilir.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> 4. Sözleşmenin Feshi
              </h2>
              <p className="pl-11">
                İşbu sözleşme üyenin üyeliğini iptal etmesi veya Pikus Ahşap tarafından üyeliğinin iptal edilmesine kadar yürürlükte kalacaktır. Taraflardan her biri sözleşmeyi tek taraflı olarak feshedebilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> 5. İhtilaflerin Halli
              </h2>
              <p className="pl-11">
                İşbu sözleşmeye ilişkin ihtilaflerde Kayseri Mahkemeleri ve İcra Daireleri yetkilidir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> 6. Yürürlük
              </h2>
              <p className="pl-11">
                Üyenin, üyelik kaydı yapması üyenin üyelik sözleşmesinde yer alan tüm maddeleri okuduğu ve üyelik sözleşmesinde yer alan maddeleri kabul ettiği anlamına gelir. İşbu Sözleşme üyenin üye olması anında akdedilmiş ve karşılıklı olarak yürürlüğe girmiştir.
              </p>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
