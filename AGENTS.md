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
- Geçici `console.log` kodları veya kullanılmayan değişkenler (dead code) bırakılmamalıdır.
- Kodlar karmaşadan uzak, modüler, temiz ve gerektiği yerde kısa (ve İngilizce/Türkçe net) yorumlarla desteklenmiş olmalıdır.

## 6. Güvenlik (Security)

Bu bölümdeki kurallar, yaygın web güvenlik açıklarının (OWASP Top 10 dahil) önlenmesine yönelik olup her geliştirme adımında uygulanması **zorunludur**.

### 6.1 Giriş Doğrulama ve Veri Temizleme (Input Validation & Sanitization)
- **Hiçbir kullanıcı girdisine güvenilmez.** Formlardan, URL parametrelerinden, header'lardan veya dış API'lerden gelen tüm veriler, kullanılmadan önce doğrulanmalı ve temizlenmelidir.
- Server Actions ve Route Handler'larda (`src/app/api/`) gelen veri [Zod](https://zod.dev/) gibi bir şema doğrulama kütüphanesiyle **sunucu tarafında** doğrulanmalıdır. Client-side doğrulama tek başına yeterli değildir.
- **XSS (Cross-Site Scripting):** Kullanıcıdan gelen içerik hiçbir zaman `dangerouslySetInnerHTML` ile doğrudan render edilmemelidir. Zorunlu hallerde `dompurify` gibi bir kütüphane ile temizlenmelidir.
- **SQL / NoSQL Injection:** Veritabanı sorgularında parametreli sorgular veya ORM kullanılmalı; ham string birleştirme ile sorgu oluşturulmamalıdır.

### 6.2 Kimlik Doğrulama ve Yetkilendirme (Authentication & Authorization)
- **Her korumalı route sunucu tarafında doğrulanmalıdır.** Yetki kontrolü yalnızca client bileşeninde yapılmamalı; `middleware.ts` veya ilgili Server Component/Route Handler'da oturum/token doğrulaması yapılmalıdır.
- **IDOR (Insecure Direct Object Reference):** Bir kullanıcının başka bir kullanıcının kaynağına erişip erişemeyeceği her zaman sunucuda kontrol edilmelidir. Yalnızca ID'nin gizli tutulması yeterli değildir.
- JWT veya oturum token'ları `httpOnly` cookie'lerde saklanmalı; `localStorage`'a yazılmamalıdır.
- Şifreler asla düz metin olarak saklanmamalı veya loglanmamalıdır; `bcrypt` gibi güçlü bir hash algoritması kullanılmalıdır.

### 6.3 API Güvenliği (API & Route Handler Security)
- **Rate Limiting:** Kimlik doğrulama ve hassas işlem endpoint'lerine brute-force saldırılarını önlemek için istek sınırlama uygulanmalıdır.
- **CSRF Koruması:** Server Action'lar veya form tabanlı işlemlerde CSRF token'ı veya `SameSite=Strict` cookie politikası kullanılmalıdır.
- HTTP metodları kontrol edilmelidir; bir Route Handler yalnızca ihtiyaç duyduğu metodlara (`GET`, `POST` vb.) yanıt vermeli, diğerleri için `405 Method Not Allowed` dönülmelidir.
- Hassas veriler (şifre, token, API anahtarı) hiçbir zaman API yanıtına, loglara veya hata mesajlarına dahil edilmemelidir.

### 6.4 Ortam Değişkenleri ve Sırlar (Secrets Management)
- API anahtarları, veritabanı bağlantı stringleri ve diğer hassas değerler **yalnızca `.env.local`** dosyasında tutulmalı; kaynak koda kesinlikle yazılmamalıdır.
- Tarayıcıya açılması gerekmeyen değişkenler `NEXT_PUBLIC_` öneki **almaz**. Bu önek yalnızca gerçekten client tarafında gerekli olan değişkenler için kullanılır.
- `.env*.local` dosyaları `.gitignore`'da yer almalıdır; repo'ya commit edilmemelidir.

### 6.5 Bağımlılık Güvenliği (Dependency Security)
- Yeni bir paket eklemeden önce popülerliği, bakım durumu ve bilinen açıkları (CVE) değerlendirilmelidir.
- `npm audit` veya `pnpm audit` çıktısında **kritik (critical) ve yüksek (high)** önem dereceli açıklar kabul edilmez; ilgili paket güncellenmeli veya alternatifi kullanılmalıdır.
- Paket sürümleri mümkün olduğunca sabitlenmeli (`^` yerine kesin sürüm); supply-chain saldırılarına karşı lock dosyası (`package-lock.json` / `pnpm-lock.yaml`) commit'e dahil edilmelidir.

### 6.6 HTTP Güvenlik Başlıkları (Security Headers)
- `next.config.js` içinde aşağıdaki başlıklar yapılandırılmalıdır:
  - `Content-Security-Policy (CSP)`: İzin verilen script, style ve kaynak kaynaklarını kısıtlar.
  - `X-Frame-Options: DENY`: Clickjacking saldırılarını önler.
  - `X-Content-Type-Options: nosniff`: MIME sniffing saldırılarını önler.
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Strict-Transport-Security (HSTS)`: HTTPS zorunluluğunu sağlar.

### 6.7 Hata Yönetimi ve Loglama (Error Handling & Logging)
- Üretim ortamında (`production`) kullanıcıya gösterilen hata mesajları genel ve belirsiz olmalıdır; stack trace, dosya yolu veya veritabanı detayı içermemelidir.
- Sunucu taraflı hatalar yalnızca sunucu loglarına yazılmalı; client'a sızdırılmamalıdır.
- Loglamada kullanıcı şifresi, token veya kişisel veri (PII) kesinlikle yer almamalıdır.