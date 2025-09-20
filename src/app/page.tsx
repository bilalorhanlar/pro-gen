import Image from "next/image";

export const metadata = {
  title: "ProGen - Supplement ve Fitness Ürünleri",
  description:
    "ProGen | Orijinal supplement ve fitness ürünleri için güvenilir doğrulama sistemi.",
};

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-grid">
        <div className="absolute inset-0 -z-10">
          <div className="pointer-events-none absolute -top-28 -left-28 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(70,150,255,0.35),transparent_60%)] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(70,150,255,0.30),transparent_60%)] blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full opacity-60 bg-[radial-gradient(circle_at_center,rgba(70,150,255,0.22),transparent_60%)] blur-3xl [animation:float_10s_ease-in-out_infinite]" />
          {/* soft diagonal highlight */}
          <div className="pointer-events-none absolute -top-24 right-0 h-60 w-[60%] rotate-12 bg-gradient-to-b from-[#FF581F]/20 to-transparent blur-2xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-28 sm:py-32 md:py-40 lg:py-48">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">ProGen</p>
              <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF581F] via-[#FF7A3F] to-[#FFB88A]">
                  Fitness ve Supplement
                </span>
                <br /> dünyasında güvenilir
              </h1>
              <p className="mt-4 sm:mt-5 text-foreground/80 text-xs sm:text-sm md:text-base lg:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
                Orijinal spor ürünleri ve supplementler için güvenilir adres. 
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center md:justify-start">
                <a href="/check" className="w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-[#FF581F] text-white text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-shadow text-center">
                  Ürün Doğrula
                </a>
                <a href="/contact-us" className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-medium text-[#FF581F] border-2 border-[#FF581F]/80 backdrop-blur supports-[backdrop-filter]:bg-background/50 hover:bg-[#FF581F]/10">
                  İletişime Geçin
                </a>
              </div>
            </div>
            <div className="hidden md:block mt-8 md:mt-0">
              <div className="relative">
                {/* Multiple light effects behind the image */}
                <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 -z-10 rounded-2xl bg-[#FF581F]/5 blur-3xl animate-pulse" />

                <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 -z-10 rounded-full bg-[#FF581F]/10 blur-2xl" />
                
                {/* Animated light rays */}
                <div className="absolute -top-4 sm:-top-6 lg:-top-8 -left-4 sm:-left-6 lg:-left-8 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-gradient-to-br from-[#FF581F]/20 to-transparent rounded-full blur-lg animate-ping" />
                <div className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 -right-3 sm:-right-4 lg:-right-6 w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12 bg-gradient-to-tl from-[#FF7A3F]/30 to-transparent rounded-full blur-md animate-pulse" />
                <div className="absolute top-1/2 -right-2 sm:-right-3 lg:-right-4 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 bg-gradient-to-l from-[#FFB88A]/40 to-transparent rounded-full blur-sm animate-bounce" />
                
                {/* Main image container */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <Image 
                    src="/home.png" 
                    alt="ProGen - Supplement ve Fitness Ürünleri" 
                    width={800}
                    height={600}
                    className="w-full h-full object-cover relative z-10"
                  />
                  {/* Subtle overlay for better light integration */}
                  <div className="absolute inset-0 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vizyon & Misyon */}
      <section className="py-6 sm:py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 mb-8 sm:mb-12 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="group rounded-xl p-3 sm:p-4 md:p-6 bg-background/70 backdrop-blur ring-1 ring-[#FF581F]/10 hover:ring-[#FF581F]/30 transition">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-6 w-6 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-md bg-[#FF581F]/15 text-[#FF581F] flex items-center justify-center text-sm sm:text-base flex-shrink-0">🎯</div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold">Vizyonumuz</h3>
              </div>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                Fitness ve supplement sektöründe orijinallik garantisi sağlayan güvenilir doğrulama platformu olmak; 
                sporcuların ve fitness tutkunlarının güvenli alışveriş yapmasını sağlamak.
              </p>
            </div>
            <div className="group rounded-xl p-3 sm:p-4 md:p-6 bg-background/70 backdrop-blur ring-1 ring-[#FF581F]/10 hover:ring-[#FF581F]/30 transition">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-6 w-6 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-md bg-[#FF581F]/15 text-[#FF581F] flex items-center justify-center text-sm sm:text-base flex-shrink-0">🚀</div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold">Misyonumuz</h3>
              </div>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                Her supplement ve spor ürününün orijinalliğini garanti altına almak; sahte ürünlerin piyasadan 
                temizlenmesi için teknoloji destekli doğrulama çözümleri sunmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black/[.03] dark:bg-white/[.03] py-8 sm:py-12 overflow-hidden">
        {/* decorative wave */}
        <svg className="absolute -top-12 sm:-top-24 left-1/2 -translate-x-1/2 w-[120%] h-32 sm:h-48 lg:h-64 -z-10" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,192L80,165.3C160,139,320,85,480,80C640,75,800,117,960,133.3C1120,149,1280,139,1360,133.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" fill="rgba(70,150,255,0.08)"/>
        </svg>
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="text-xl sm:text-2xl font-semibold">Ürün Kategorileri</h2>
            <a href="/products" className="text-sm underline underline-offset-4 text-[#FF581F] hover:text-[#E04A1A] transition-colors">Tümü</a>
          </div>
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {[
              { icon: "bi bi-capsule", title: "Protein Tozları", desc: "Whey, kazein, bitkisel protein ürünleri" },
              { icon: "bi bi-lightning", title: "Pre-Workout", desc: "Antrenman öncesi enerji ve performans destekleri" },
              { icon: "bi bi-heart", title: "Vitamin & Mineral", desc: "A, B, C, D vitaminleri ve mineral takviyeleri" },
              { icon: "bi bi-shield-check", title: "Creatine", desc: "Monohidrat, HCL ve diğer kreatin formları" },
              { icon: "bi bi-activity", title: "Fitness Ekipmanları", desc: "Dambıl, halter, fitness aksesuarları" },
              { icon: "bi bi-graph-up", title: "Kas Geliştirici", desc: "BCAA, glutamin, kas büyümesi destekleri" },
            ].map((s) => (
              <div key={s.title} className="group relative rounded-lg p-[1px] bg-gradient-to-b from-[#FF581F]/20 to-transparent transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-full rounded-lg bg-background/70 backdrop-blur p-3 sm:p-4 ring-1 ring-[#FF581F]/5">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-md sm:rounded-lg bg-[#FF581F]/15 text-[#FF581F] flex items-center justify-center flex-shrink-0">
                      <i className={`${s.icon} text-xs sm:text-sm`} />
                    </div>
                    <h3 className="font-semibold text-xs sm:text-sm text-[#B8350F] group-hover:text-[#FF581F] transition-colors leading-tight">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-xs text-foreground/80 leading-relaxed line-clamp-2">{s.desc}</p>
                  <div className="mt-2 sm:mt-3 h-px bg-gradient-to-r from-transparent via-[#FF581F]/40 to-transparent" />
                  <div className="mt-2 sm:mt-3 text-xs text-[#FF581F] opacity-0 group-hover:opacity-100 transition-opacity">Daha fazla bilgi →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
