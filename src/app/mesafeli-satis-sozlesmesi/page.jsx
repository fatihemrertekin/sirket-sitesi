import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Mesafeli Satış Sözleşmesi | Pikus Ahşap",
  description: "Pikus Ahşap ürünleri ile müşteri arasındaki sanal ortamda mesafeli satış sözleşmesi detayları.",
};

export default function MesafeliSatisSozlesmesi() {
  return (
    <main className="min-h-screen bg-primary-900 pt-32 pb-32">
      <div className="container-custom px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
        
        {/* Başlık */}
        <div className="mb-12">
          <SectionTitle
            subtitle="Yasal"
            title="Mesafeli Satış Sözleşmesi"
            description="Pikus Ahşap ürünleri ile müşteri arasındaki sanal ortamda mesafeli satış sözleşmesi detayları."
            align="center"
            isH1={true}
          />
        </div>

        {/* İçerik Kutusu */}
        <div className="bg-primary-950/40 backdrop-blur-xl border border-primary-700/50 p-8 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden group">
          
          {/* Arka Plan Dekoratif Blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/5 rounded-full blur-[80px] -z-10 group-hover:bg-accent-500/10 transition-colors duration-700"></div>
          
          <div className="space-y-12 text-primary-300 leading-relaxed font-light text-sm md:text-base">
            
            <p className="text-lg text-primary-100 border-l-2 border-accent-500 pl-4 py-1 italic">
              <strong>Pikus Ahşap Ürünleri</strong> ile Müşteri arasındaki Sanal Ortamda Satış Sözleşmesidir.
            </p>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> Madde – 1
              </h2>
              <p className="pl-11">
                İş bu sözleşmenin konusu, satıcının, alıcıya satışını yaptığı, aşağıda nitelikleri ve satış fiyatı belirtilen ürünün satışı ve teslimi ile ilgili olarak 4077 sayılı Tüketicilerin Korunması Hakkındaki Kanunun; Mesafeli Sözleşmeleri Uygulama Esas ve Usulleri Hakkında Yönetmelik hükümleri gereğince tarafların hak ve yükümlülüklerinin kapsamaktadır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> Madde – 2: SATICI BİLGİLERİ
              </h2>
              <p className="pl-11 opacity-70 italic">
                Pikus Ahşap iletişim bilgileri ve ticari unvanı burada yer alır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> Madde – 3: ALICI BİLGİLERİ
              </h2>
              <p className="pl-11">
                Tüm üyeler: Pikus Ahşap sitemize üye olup alışveriş yapan tüm alıcılar. (Bundan sonra alıcı veya müşteri olarak anılacaktır).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> Madde – 4: SÖZLEŞME KONUSU VE ÜRÜN BİLGİLERİ
              </h2>
              <p className="pl-11">
                Mal/Ürün veya Hizmetin; Türü, Miktarı, Marka/Modeli, Rengi, Adedi, Satış Bedeli ve Ödeme Şekli, sitede belirtildiği gibi olup, bu vaatler alıcıya bildirilmeden değişiklik gösterebilmektedir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-6 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> Madde – 5: GENEL HÜKÜMLER
              </h2>
              <div className="space-y-6 pl-11">
                <p><strong className="text-accent-500">5.1</strong> – ALICI, Madde 4’te belirtilen sözleşme konusu ürünün temel nitelikleri, satış fiyatı ve ödeme şekli ile teslimata ilişkin tüm ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini beyan eder.</p>
                <p><strong className="text-accent-500">5.2</strong> – Sözleşme konusu ürün, yasal 30 günlük süreyi aşmamak koşulu ile her bir ürün için alıcının yerleşim yerinin uzaklığına bağlı olarak ön bilgiler içinde açıklanan süre içinde alıcı veya gösterdiği adresteki kişi veya kuruluşa teslim edilir. Bu süre içinde ürün teslim edilmez ise, Alıcılar sözleşmeyi sona erdirebilir.</p>
                <p><strong className="text-accent-500">5.3</strong> – Sözleşme konusu ürün, alıcıdan başka bir kişi veya kuruluşa teslim edilecek ise, teslim edilecek kişi veya kuruluşun teslimatı kabul etmemesinden dolayı SATICI sorumlu tutulamaz.</p>
                <p><strong className="text-accent-500">5.4</strong> – SATICI, sözleşme konusu ürünün sağlam, eksiksiz, siparişte belirtilen niteliklere uygun ve varsa garanti belgeleri ve kullanım kılavuzları ile birlikte teslim edilmesinden sorumludur.</p>
                <p><strong className="text-accent-500">5.5</strong> – Sözleşme konusu ürünün teslimatı için iş bu sözleşmenin elektronik ortamda onaylanmış olması ve satış bedelinin alıcının tercih ettiği ödeme şekli ile ödenmiş olması şarttır. Herhangi bir nedenle ürün bedeli ödenmez veya banka kayıtlarında iptal edilir ise, SATICI ürünün teslimi yükümlülüğünden kurtulmuş kabul edilir.</p>
                <p><strong className="text-accent-500">5.6</strong> – Ürünün tesliminden sonra alıcıya ait kredi kartının alıcının kusurundan kaynaklanmayan bir şekilde yetkisiz kişilerce haksız veya hukuka aykırı olarak kullanılması nedeni ile ilgili banka veya finans kuruluşun ürün bedelini SATICI'ya ödememesi halinde, ALICI kendisi veya satış sözleşmesinde belirttiği kişi veya kuruma teslim edilmiş olan ürünü 4 iş günü içinde SATICI'ya göndermek zorundadır. Böyle bir durumda nakliye giderleri alıcıya aittir.</p>
                <p><strong className="text-accent-500">5.7</strong> – SATICI mücbir sebepler veya nakliyeyi engelleyen hava muhalefeti, ulaşımın kesilmesi gibi olağanüstü durumlar nedeni ile sözleşme konusu ürünü süresi içinde teslim edemez ise, durumu alıcıya bildirmekle yükümlüdür. Bu takdirde alıcı siparişinin iptal edilmesini, sözleşme konusu ürünün varsa emsali ile değiştirilmesini, ve/veya teslimat süresinin engelleyici durumun ortadan kalkmasına kadar ertelenmesi haklarından birini kullanabilir. Alıcının siparişi iptal etmesi halinde, SATICI 7 gün içinde alıcıya ait kredi kartı fişinin iptali ve ilgili tutarın alıcının hesabına iade edilmesi konusunda ilgili banka nezdinde girişimde bulunur ve yapılan işlem elektronik posta aracılığı ile ALICI'ya bildirilir. Böyle bir durumda ilgili bankadan kaynaklanan gecikmelerden dolayı SATICI sorumlu tutulamaz.</p>
                <p><strong className="text-accent-500">5.8</strong> – ALICI ve/veya ALICI'nın teslimat yapılması istediği kişi ve/veya kurumlara teslim edilmiş olan ürünlerin arızalı veya bozuk olması durumunda, garanti şartları içinde gerekli onarım veya değiştirme işleminin yapılması için ilgili ürün veya ürünler SATICI'ya, ALICI tarafının teslim aldığı tarihten başlayarak 7 gün içinde gönderilir ve nakliye giderleri SATICI tarafından karşılanır. Böyle bir durumda 7 günlük sürenin dolması halinde, ALICI teslim almış olduğu ürünü ilgili servisine götürmek zorundadır.</p>
                <p><strong className="text-accent-500">5.9</strong> – İş bu sözleşme, alıcı tarafından elektronik olarak onaylandıktan (üyelik gerçekleştirildikten sonra) pikusahsap.com adresine ulaştırıldıktan sonra geçerlilik kazanır.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> Madde – 6: CAYMA HAKKI
              </h2>
              <p className="pl-11">
                Alıcı, sözleşme konusu ürünün kendisine veya gösterdiği adresteki kişi veya kuruluşa tesliminden itibaren yedi (7) gün içinde cayma hakkına sahiptir. Cayma hakkının kullanılabilmesi için bu süre içinde SATICI'ya faks veya elektronik posta ile bildirimde bulunulması ve ürünün 7. madde hükümleri çerçevesinde kullanılmamış ve ambalajının zarar görmemiş olması şarttır. Bu hakkın kullanılması halinde, 3. kişiye veya ALICI'ya teslim edilen ürünün SATICI'ya gönderildiğine dair kargo teslim tutanağı örneği ile satış faturası aslının iadesi zorunludur. Bu belgelerin ulaşmasını takip eden 7 gün içinde ürün bedelinin ALICI'nın kredi kartı hesabına iade edilmesi için SATICI ilgili banka nezdinde girişimde bulunur. Ürün bedelinin iadesinde banka tarafındaki aksaklıklardan dolayı SATICI sorumlu tutulamaz. Satış Faturasının aslının gönderilmemesi durumunda katma değer vergisi ve varsa diğer yasal yükümlülükler iade edilmez. Cayma hakkı nedeni ile iade edilen ürünün kargo bedeli ALICI'ya aittir. Ayrıca, niteliği itibarıyla iade edilemeyecek ürünler, tek kullanımlık ürünler, kopyalanabilir yazılım ve programlar, hızlı bozulan veya son kullanım tarihi geçen ürünler için cayma hakkı kullanılamaz. Her türlü yazılım ve programlar, DVD, VCD, CD ve kasetler, Bilgisayar ve kırtasiye sarf malzemeleri (toner, kartuş, şerit v.b) ve her türlü kozmetik ürünlerinde cayma hakkının kullanılması, ürünün ambalajının açılmamış, bozulmamış ve ürünün kullanılmamış olması şartına bağlıdır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-500 inline-block"></span> Madde – 7: YETKİLİ MAHKEME
              </h2>
              <p className="pl-11 mb-8">
                İş bu sözleşmesinin uygulanmasında, Sanayi ve Ticaret Bakanlığınca ilan edilen değere kadar Tüketici Hakem Heyetleri ile ALICI'nın veya SATICI'nın yerleşim yerindeki TÜKETİCİ MAHKEMELERİ yetkilidir. Siparişin elektronik ortamda onaylanması durumunda, ALICI iş bu sözleşmenin tüm hükümlerini kabul etmiş sayılır.
              </p>
              
              <div className="bg-primary-900 border border-primary-700/50 p-6 rounded-xl mt-8">
                <p className="text-primary-200 font-medium text-sm flex items-start gap-4">
                  <svg className="w-6 h-6 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Satın alım yaptığınızda "Mesafeli Satış Sözleşmesi" ve "Güvenlik ve Gizlilik Politikası"nı okumuş ve onaylamış, tarafınıza elektronik ileti gönderilmesini kabul etmiş olursunuz.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
