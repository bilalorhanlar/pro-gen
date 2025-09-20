"use client";

import { useState } from "react";

interface CheckResult {
  isValid: boolean;
  message: string;
  code?: string;
}

export default function CheckPage() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<CheckResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function checkCode(e: React.FormEvent) {
    e.preventDefault();
    if (!code.trim()) return;

    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/check-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: code.trim() }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        isValid: false,
        message: "Bir hata oluştu. Lütfen tekrar deneyin.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-grid ">
        <div className="absolute inset-0 -z-10">
          <div className="pointer-events-none absolute -top-28 -left-28 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,88,31,0.35),transparent_60%)] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,88,31,0.30),transparent_60%)] blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full opacity-60 bg-[radial-gradient(circle_at_center,rgba(255,88,31,0.22),transparent_60%)] blur-3xl [animation:float_10s_ease-in-out_infinite]" />
          <div className="pointer-events-none absolute -top-24 right-0 h-60 w-[60%] rotate-12 bg-gradient-to-b from-[#FF581F]/20 to-transparent blur-2xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-16 sm:py-20 mt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">Ürün Doğrulama</p>
          <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF581F] via-[#FF7A3F] to-[#FFB88A]">
              Authenticity Check
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-foreground/80 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            Ürününüzün orijinalliğini doğrulamak için ürün üzerindeki güvenlik kodunu girin.
          </p>
        </div>
      </section>

      {/* Check Form */}
      <section className="py-4 sm:py-6">
        <div className="mx-auto max-w-2xl px-6 sm:px-8 lg:px-12">
          <div className="group relative rounded-xl p-[1px] bg-gradient-to-b from-[#FF581F]/20 to-transparent transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-full rounded-xl bg-background/70 backdrop-blur p-6 sm:p-8 ring-1 ring-[#FF581F]/5">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FF581F]/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#FF581F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">Güvenlik Kodu Doğrulama</h2>
                <p className="text-foreground/80 text-sm">
                  Ürün üzerindeki güvenlik kodunu girin
                </p>
              </div>

              <form onSubmit={checkCode} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Güvenlik Kodu
                  </label>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/50 backdrop-blur focus:ring-2 focus:ring-[#FF581F]/20 focus:border-[#FF581F] transition-colors text-center text-lg font-mono tracking-widest"
                    placeholder="Örn: cMrLnMz"
                    maxLength={10}
                    required
                  />
                  <p className="mt-2 text-xs text-foreground/60 text-center">
                    Kod büyük/küçük harf duyarlıdır
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !code.trim()}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF581F] to-[#FF7A3F] text-white font-medium hover:from-[#E04A1A] hover:to-[#FF581F] transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Kontrol Ediliyor...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Kodu Doğrula
                      </>
                    )}
                  </span>
                </button>
              </form>

              {/* Result Display */}
              {result && (
                <div className="mt-6 p-4 rounded-lg border-2 transition-all duration-300">
                  {result.isValid ? (
                    <div className="border-green-200 bg-green-50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-green-800">✅ Orijinal Ürün</h3>
                          <p className="text-sm text-green-700">{result.message}</p>
                          {result.code && (
                            <p className="text-xs text-green-600 mt-1 font-mono">Kod: {result.code}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="border-red-200 bg-red-50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-red-800">❌ Geçersiz Kod</h3>
                          <p className="text-sm text-red-700">{result.message}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Info */}
              <div className="mt-6 p-4 rounded-lg bg-gray-50 border border-gray-200">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">Nasıl Çalışır?</h4>
                    <ul className="mt-2 text-xs text-gray-700 space-y-1">
                      <li>• Ürün üzerindeki güvenlik kodunu girin</li>
                      <li>• Her kod sadece bir kez doğrulanabilir</li>
                      <li>• Şüpheli durumlarda bizimle iletişime geçin</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
