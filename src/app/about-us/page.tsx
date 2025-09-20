export const metadata = {
  title: "ProGen - Hakkımızda",
  description: "ProGen | Supplement ve fitness ürünleri doğrulama platformu hakkında",
};

export default function AboutPage() {
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
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">Hakkımızda</p>
          <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF581F] via-[#FF7A3F] to-[#FFB88A]">Biz Kimiz?</span>
          </h1>
          <p className="mt-4 max-w-3xl text-foreground/80 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            ProGen, supplement ve fitness ürünleri sektöründe orijinallik garantisi sağlama hedefiyle kuruldu. <strong>Sahte ürünlerin</strong> piyasadan temizlenmesi için gelişmiş doğrulama teknolojileri kullanıyoruz. Her ürünün benzersiz güvenlik kodu ile takip edilebilir olmasını sağlayarak, tüketicilerin güvenli alışveriş yapmasını garanti ediyoruz. <strong>Teknoloji destekli çözümlerimiz</strong> ile fitness tutkunlarının ve sporcuların sahte ürün riskinden korunmasını sağlıyoruz.
          </p>
        </div>
      </section>

      {/* İçerik blokları */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Şirket özeti */}
            <div className="lg:col-span-2">
              <div className="group rounded-xl p-[1px] bg-gradient-to-b from-[#FF581F]/20 to-transparent">
                <div className="rounded-xl bg-background/70 backdrop-blur p-4 sm:p-6 ring-1 ring-[#FF581F]/10">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="h-6 w-6 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-md bg-[#FF581F]/15 text-[#FF581F] flex items-center justify-center text-sm sm:text-base flex-shrink-0">🏢</div>
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold">ProGen Hakkında</h2>
                  </div>
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-foreground/80 leading-relaxed">
                    Doğrulama yaklaşımımız güvenilir: <strong>benzersiz kod sistemi</strong>, <strong>güvenlik‑önce</strong> prensipleri ve <strong>şeffaf süreçler</strong>. Her ürünün orijinalliğini garanti altına almak için gelişmiş teknoloji kullanır, sürekli güncelleme ve iyileştirme ile hizmet veririz. Amacımız, supplement ve fitness ürünlerinde <strong>sahte ürün riskini sıfıra indirmek</strong> ve tüketici güvenini sağlamaktır.
                  </p>
                </div>
              </div>
            </div>

            {/* Kuruluş bilgisi */}
            <div className="space-y-4 sm:space-y-6">
              <div className="rounded-xl p-4 sm:p-6 bg-background/70 backdrop-blur ring-1 ring-[#FF581F]/10">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-6 w-6 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-md bg-[#FF581F]/15 text-[#FF581F] flex items-center justify-center text-sm sm:text-base flex-shrink-0">📅</div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold">Kuruluş</h3>
                </div>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                  <strong>2025</strong> yılında kuruldu. Supplement ve fitness ürünleri doğrulama konusunda uzmanlaştı.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
