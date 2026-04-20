<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Proje Geliştirme Kuralları (Project Development Rules)

Bu proje yüksek performans, SEO, kusursuz görsel tasarım ve sıfır hata prensipleriyle geliştirilmektedir. Aşağıdaki kurallara her kod yazımında KESİNLİKLE uyulacaktır:

## 1. Klasör ve Dosya Yapısı (Mimari)
- **Mevcut Yapıya Sadakat:** Proje Next.js App Router mimarisini kullanmaktadır. Dosyalar her zaman şu dizinlere yerleştirilecektir:
  - `src/app/`: Sayfa yapıları (Routing, `page.jsx`, `layout.jsx`, vb.)
  - `src/components/`: Yeniden kullanılabilir, modüler UI bileşenleri.
  - `src/lib/`: Yardımcı fonksiyonlar, API entegrasyonları ve yapılandırmalar.
  - `src/content/`: Statik içerikler veya veri dosyaları.
- Gereksiz yere yeni kök klasörler oluşturulmamalıdır.

## 2. SEO ve Anlamsal (Semantic) Web
- **Zorunlu SEO:** Eklenen her yeni sayfa için doğru `export const metadata` tanımlamaları (Title, Description, vb.) yapılmalıdır.
- **Anlamsal HTML:** Sadece `<div>` kullanmaktan kaçının. Yerine göre `<header>`, `<main>`, `<section>`, `<article>`, `<nav>` ve `<footer>` gibi doğru etiketleri kullanın.
- **Hiyerarşi:** Sayfa başlık hiyerarşisine dikkat edin (Her sayfada tek bir `<h1>` olmalı, `<h2>`, `<h3>` sırasıyla gitmelidir).

## 3. Performans
- **Server-First Yaklaşımı:** Bileşenler varsayılan olarak "Server Component" olmalıdır. Yalnızca state yönetimi (useState, useEffect) ve DOM etkileşimi gereken yerlerde dosyanın en üstüne `"use client"` eklenmelidir.
- **Görsel Optimizasyonu:** Uygulamadaki görseller her zaman uygun boyutlarda ve modern formatlarda olmalıdır. Performansı düşürecek boyutlarda resim kullanımından kaçının.
- Gereksiz dış kütüphane kullanımından ve büyük client-side paketlerinden (bundle size) kaçınılmalıdır.

## 4. Görsellik ve UI/UX (Premium Tasarım)
- Projenin mevcut premium ve dinamik tasarım diline (örneğin karanlık tema, şık geçişler) tam uyum sağlanmalıdır.
- **Responsive Design:** Tüm sayfalar ve bileşenler mobil, tablet ve masaüstü ekranlara %100 uyumlu olmalıdır.
- Pürüzsüz "hover" efektleri ve performansı yormayan mikro animasyonlar ile kullanıcı deneyimi desteklenmelidir.

## 5. Kalite ve Sıfır Hata (Zero Bugs)
- **Defansif Programlama:** API'den veya proptan gelen verilerin eksik/tanımsız olma ihtimaline karşı her zaman opsiyonel zincirleme (`?.`) ve nullish coalescing (`??`) kullanılmalıdır.
- Uygulamada hiçbir sayfa "beyaz ekran" veya "çökme" hatası vermemelidir. Hata yakalama (Error Boundaries) ve Yükleniyor (Loading states) durumları doğru yönetilmelidir.
- Geçici "console.log" kodları veya kullanılmayan değişkenler (dead code) bırakılmamalıdır.
- Kodlar karmaşadan uzak, modüler, temiz ve gerektiği yerde kısa (ve İngilizce/Türkçe net) yorumlarla desteklenmiş olmalıdır.
