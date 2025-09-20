"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // EmailJS konfigürasyonu - Environment variables'dan alınır
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  function validate(values: FormState) {
    const next: Partial<FormState> = {};
    if (!values.name.trim()) next.name = "Lütfen adınızı girin";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Geçerli bir e-posta girin";
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
      // EmailJS konfigürasyon kontrolü
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS konfigürasyonu eksik');
      }

      // EmailJS ile e-posta gönder
      const templateParams = {
        name: form.name,
        email: form.email,
        message: form.message,
        title: 'Yeni İletişim Formu Mesajı',
        time: new Date().toLocaleString('tr-TR'),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS hatası:', error);
      setStatus("error");
      setErrors({ message: "E-posta gönderilirken bir hata oluştu. Lütfen tekrar deneyin." });
    }
  }

  return (
    <form className="rounded-lg border p-6 grid gap-4" onSubmit={onSubmit} noValidate>
      <div>
        <label className="text-sm">Ad Soyad</label>
        <input
          className={`mt-1 w-full border rounded-md bg-transparent px-3 py-2 ${errors.name ? "border-red-400" : ""}`}
          placeholder="Adınız"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>
      <div>
        <label className="text-sm">E-posta</label>
        <input
          type="email"
          className={`mt-1 w-full border rounded-md bg-transparent px-3 py-2 ${errors.email ? "border-red-400" : ""}`}
          placeholder="ornek@gmail.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label className="text-sm">Mesaj</label>
        <textarea
          className={`mt-1 w-full border rounded-md bg-transparent px-3 py-2 h-28 ${errors.message ? "border-red-400" : ""}`}
          placeholder="Mesajınız"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>
      <button
        className="justify-self-start px-4 py-2 rounded-md bg-foreground text-background text-sm font-medium disabled:opacity-60"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Gönderiliyor..." : "Gönder"}
      </button>
      {status === "success" && (
        <p className="text-sm text-emerald-600">Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          {errors.message || "Lütfen hatalı alanları düzeltin."}
        </p>
      )}
    </form>
  );
}


