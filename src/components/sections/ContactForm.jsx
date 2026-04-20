"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    alert("Mesajınız gönderildi! En kısa sürede dönüş yapacağız.");
    setFormData({ name: "", email: "", phone: "", message: "" });
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
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 tracking-wide" style={{ fontFamily: 'var(--font-playfair), serif' }}>Ofisimiz</h4>
                  <p className="text-primary-300 font-light text-sm">Levent, Büyükdere Cad. No:123<br/>Şişli / İstanbul</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-accent-500 flex items-center justify-center flex-shrink-0 text-accent-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 tracking-wide" style={{ fontFamily: 'var(--font-playfair), serif' }}>E-posta</h4>
                  <p className="text-primary-300 font-light text-sm">info@mimarlik.com<br/>proje@mimarlik.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary-900 p-8 md:p-12 border border-primary-700">
            <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-playfair), serif' }}>Mesaj Gönderin</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-primary-800 border border-primary-700 px-5 py-4 text-white placeholder-primary-400 focus:outline-none focus:border-accent-500 transition-colors text-sm"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-primary-800 border border-primary-700 px-5 py-4 text-white placeholder-primary-400 focus:outline-none focus:border-accent-500 transition-colors text-sm"
                    placeholder="E-posta Adresiniz"
                  />
                </div>
              </div>
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-primary-800 border border-primary-700 px-5 py-4 text-white placeholder-primary-400 focus:outline-none focus:border-accent-500 transition-colors text-sm"
                  placeholder="Telefon Numaranız"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-primary-800 border border-primary-700 px-5 py-4 text-white placeholder-primary-400 focus:outline-none focus:border-accent-500 transition-colors resize-none text-sm"
                  placeholder="Projenizden bahsedin..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-8 py-4 bg-accent-500 text-white font-medium uppercase tracking-wider text-sm hover:bg-white hover:text-primary-900 transition-colors duration-300"
              >
                GÖNDER
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
