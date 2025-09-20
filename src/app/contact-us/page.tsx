"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ 
    name: "", 
    email: "", 
    subject: "", 
    message: "" 
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // EmailJS konfigürasyonu
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_y14gp2f';
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_5pfihih';
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'EJ5jFjR7ZcREl-nMr';

  function validate(values: FormState) {
    const next: Partial<FormState> = {};
    if (!values.name.trim()) next.name = "Lütfen adınızı girin";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Geçerli bir e-posta girin";
    if (!values.subject.trim()) next.subject = "Lütfen konu girin";
    if (values.message.trim().length < 10) next.message = "En az 10 karakterlik bir mesaj yazın";
    return next;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    
    const v = validate(form);
    if (Object.keys(v).length > 0) {
      setErrors(v);
      setStatus("error");
      return;
    }

    try {
      // EmailJS ile e-posta gönder
      const templateParams = {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
        title: form.subject,
        time: new Date().toLocaleString('tr-TR'),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('EmailJS hatası:', error);
      setStatus("error");
      setErrors({ message: "E-posta gönderilirken bir hata oluştu. Lütfen tekrar deneyin." });
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-grid">
        <div className="absolute inset-0 -z-10">
          <div className="pointer-events-none absolute -top-28 -left-28 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(70,150,255,0.35),transparent_60%)] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(70,150,255,0.30),transparent_60%)] blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full opacity-60 bg-[radial-gradient(circle_at_center,rgba(70,150,255,0.22),transparent_60%)] blur-3xl [animation:float_10s_ease-in-out_infinite]" />
          <div className="pointer-events-none absolute -top-24 right-0 h-60 w-[60%] rotate-12 bg-gradient-to-b from-[#FF581F]/20 to-transparent blur-2xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-24 sm:py-32 md:py-40">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">Bizimle İletişime Geçin</p>
          <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF581F] via-[#FF7A3F] to-[#FFB88A]">İletişim</span>
          </h1>
          <p className="mt-4 max-w-2xl text-foreground/80 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            Projeleriniz için bizimle iletişime geçin. Size en uygun çözümleri sunmak için buradayız.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="space-y-6 sm:space-y-8">
              <div className="group relative rounded-xl p-[1px] bg-gradient-to-b from-[#FF581F]/20 to-transparent transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-full rounded-xl bg-background/70 backdrop-blur p-4 sm:p-6 md:p-8 ring-1 ring-[#FF581F]/5">
                  <div className="mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Mesaj Gönderin</h2>
                    <p className="text-foreground/80 text-xs sm:text-sm md:text-base leading-relaxed">
                      Projeleriniz hakkında detaylı bilgi almak veya iş birliği yapmak için 
                      aşağıdaki formu doldurabilirsiniz.
                    </p>
                  </div>
                  
                  <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                          Ad Soyad
                        </label>
                        <input
                          type="text"
                          className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border bg-white/50 backdrop-blur focus:ring-2 focus:ring-[#FF581F]/20 focus:border-[#FF581F] transition-colors text-xs sm:text-sm ${errors.name ? "border-red-400" : "border-gray-200"}`}
                          placeholder="Adınız ve soyadınız"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                          E-posta
                        </label>
                        <input
                          type="email"
                          className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border bg-white/50 backdrop-blur focus:ring-2 focus:ring-[#FF581F]/20 focus:border-[#FF581F] transition-colors text-xs sm:text-sm ${errors.email ? "border-red-400" : "border-gray-200"}`}
                          placeholder="ornek@email.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                        Konu
                      </label>
                      <input
                        type="text"
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border bg-white/50 backdrop-blur focus:ring-2 focus:ring-[#FF581F]/20 focus:border-[#FF581F] transition-colors text-xs sm:text-sm ${errors.subject ? "border-red-400" : "border-gray-200"}`}
                        placeholder="Mesajınızın konusu"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      />
                      {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                        Mesaj
                      </label>
                      <textarea
                        rows={4}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border bg-white/50 backdrop-blur focus:ring-2 focus:ring-[#FF581F]/20 focus:border-[#FF581F] transition-colors resize-none text-xs sm:text-sm ${errors.message ? "border-red-400" : "border-gray-200"}`}
                        placeholder="Mesajınızı buraya yazabilirsiniz..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                      {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#FF581F] to-[#FF7A3F] text-white font-medium hover:from-[#E04A1A] hover:to-[#FF581F] transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none text-xs sm:text-sm"
                    >
                      <span className="flex items-center justify-center gap-2">
                        {status === "submitting" ? (
                          <>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Gönderiliyor...
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            Mesajı Gönder
                          </>
                        )}
                      </span>
                    </button>
                    
                    {status === "success" && (
                      <div className="p-3 sm:p-4 rounded-lg bg-green-50 border border-green-200">
                        <p className="text-xs sm:text-sm text-green-800">
                          ✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                        </p>
                      </div>
                    )}
                    
                    {status === "error" && (
                      <div className="p-3 sm:p-4 rounded-lg bg-red-50 border border-red-200">
                        <p className="text-xs sm:text-sm text-red-800">
                          ❌ {errors.message || "Lütfen hatalı alanları düzeltin."}
                        </p>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6">İletişim Bilgileri</h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-[#FF581F]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FF581F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm sm:text-base">E-posta</h3>
                      <p className="text-foreground/80 text-xs sm:text-sm">info@progen.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-[#FF581F]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FF581F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm sm:text-base">Telefon</h3>
                      <p className="text-foreground/80 text-xs sm:text-sm">+90 532 206 07 69</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-[#FF581F]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FF581F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm sm:text-base">Adres</h3>
                      <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">
                        Dumlupınar mah. Yumurtacı Abdibey Cad.<br />
                        Nuhoğlu Yenitepe Sitesi, 1. Etap, B Blok, d:221
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Konumumuz</h3>
                <div className="rounded-xl overflow-hidden ring-1 ring-black/5 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.1234567890123!2d29.057390!3d40.996081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzQ1LjkiTiAyOcKwMDMnMjYuNiJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ProGen Konumu"
                  />
                </div>
                <p className="mt-2 text-xs text-foreground/60">
                  Dumlupınar Mahallesi, Yumurtacı Abdibey Caddesi, Nuhoğlu Yenitepe Sitesi
                </p>
                <a 
                  href="https://www.google.com/maps?q=40.996081,29.057390"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-xs sm:text-sm text-[#FF581F] hover:text-[#E04A1A] transition-colors"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Google Maps&apos;te Aç
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}