"use client";

import { useState } from "react";
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));

      const result = await contactAction(data);

      if (result.success) {
        setStatus({ type: "success", message: "Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağız." });
        setFormData({ name: "", email: "", phone: "", message: "" });
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
                disabled={isSubmitting}
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
                ) : "GÖNDER"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
