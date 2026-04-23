"use client";

import { useState, useEffect } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { contactAction } from "@/app/actions";
import { companyInfo } from "@/content/company";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // Sayfa yüklendiğinde mevcut cooldown kontrolü
  useEffect(() => {
    const lastSubmitTime = localStorage.getItem("lastContactSubmit");
    if (lastSubmitTime) {
      const elapsed = Math.floor((Date.now() - parseInt(lastSubmitTime)) / 1000);
      if (elapsed < 60) {
        setCountdown(60 - elapsed);
      }
    }
  }, []);

  // Geri sayım sayacı
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (countdown > 0) {
      setStatus({ type: "success", message: `Mesajınız alındı. Yeni bir mesaj göndermek için lütfen ${countdown} saniye bekleyin.` });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));

      const result = await contactAction(data);

      if (result.success) {
        setStatus({ type: "success", message: "Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağız." });
        setFormData({ name: "", email: "", phone: "", message: "" });

        // Cooldown başlat
        const now = Date.now();
        localStorage.setItem("lastContactSubmit", now.toString());
        setCountdown(60);
      } else {
        setStatus({ type: "error", message: result.error || "Bir hata oluştu. Lütfen tekrar deneyin." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Sistemde bir hata oluştu. Lütfen daha sonra tekrar deneyin." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="iletisim" className="section-padding bg-primary-800 relative border-t border-primary-700">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <SectionTitle
              subtitle="İletişim"
              title="Yeni Bir Projeye Başlamaya Hazır Mısınız?"
              align="left"
            />
            <p className="text-primary-200 mt-6 font-light leading-relaxed max-w-md">
              Fikirlerinizi gerçeğe dönüştürmek için buradayız. Projeniz hakkında detaylı görüşmek için formu doldurun veya doğrudan bizimle iletişime geçin.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-accent-500 flex items-center justify-center flex-shrink-0 text-accent-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 tracking-wide" style={{ fontFamily: 'var(--font-playfair), serif' }}>Ofisimiz</h4>
                  <p className="text-primary-300 font-light text-sm">{companyInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-accent-500 flex items-center justify-center flex-shrink-0 text-accent-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 tracking-wide" style={{ fontFamily: 'var(--font-playfair), serif' }}>E-posta</h4>
                  <a href={`mailto:${companyInfo.email}`} className="text-primary-300 font-light text-sm hover:text-accent-500 transition-colors">{companyInfo.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-accent-500 flex items-center justify-center flex-shrink-0 text-accent-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 tracking-wide" style={{ fontFamily: 'var(--font-playfair), serif' }}>Telefon</h4>
                  <a href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} className="text-primary-300 font-light text-sm hover:text-accent-500 transition-colors">{companyInfo.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-accent-500 flex items-center justify-center flex-shrink-0 text-accent-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.414-8.414" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 tracking-wide" style={{ fontFamily: 'var(--font-playfair), serif' }}>WhatsApp</h4>
                  <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-primary-300 font-light text-sm hover:text-accent-500 transition-colors">Mesaj Gönder</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary-900 p-8 md:p-12 border border-primary-700">
            <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-playfair), serif' }}>Mesaj Gönderin</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {status.message && (
                <div className={`p-4 text-sm ${status.type === "success" ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-red-500/10 text-red-500 border border-red-500/20"}`}>
                  {status.message}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-primary-800 border border-primary-700 px-5 py-4 text-white placeholder-primary-400 focus:outline-none focus:border-accent-500 transition-colors text-sm disabled:opacity-50"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-primary-800 border border-primary-700 px-5 py-4 text-white placeholder-primary-400 focus:outline-none focus:border-accent-500 transition-colors text-sm disabled:opacity-50"
                    placeholder="E-posta Adresiniz"
                  />
                </div>
              </div>
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  disabled={isSubmitting}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-primary-800 border border-primary-700 px-5 py-4 text-white placeholder-primary-400 focus:outline-none focus:border-accent-500 transition-colors text-sm disabled:opacity-50"
                  placeholder="Telefon Numaranız"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  disabled={isSubmitting}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-primary-800 border border-primary-700 px-5 py-4 text-white placeholder-primary-400 focus:outline-none focus:border-accent-500 transition-colors resize-none text-sm disabled:opacity-50"
                  placeholder="Projenizden bahsedin..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || countdown > 0}
                className="w-full px-8 py-4 bg-accent-500 text-white font-medium uppercase tracking-wider text-sm hover:bg-white hover:text-primary-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    GÖNDERİLİYOR...
                  </>
                ) : countdown > 0 ? (
                  `MESAJ ALINDI (${countdown}S)`
                ) : "GÖNDER"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
