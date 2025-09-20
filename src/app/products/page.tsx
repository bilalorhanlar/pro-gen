export const metadata = {
  title: "ProGen - ürünlerimiz",
  description: "ProGen | Supplement ve fitness products",
};

export default function ServicesPage() {
  const groups = [
    {
      title: "Protein Ürünleri",
      icon: "💪",
      items: [
        "Whey Protein",
        "Kazein Protein",
        "Bitkisel Protein",
        "Protein Bar",
      ],
    },
    {
      title: "Pre & Post Workout",
      icon: "⚡",
      items: [
        "Pre-Workout",
        "Post-Workout",
        "BCAA",
        "Glutamin",
      ],
    },
    {
      title: "Vitamin & Mineral",
      icon: "💊",
      items: [
        "Multivitamin",
        "Vitamin D3",
        "Omega 3",
        "Magnezyum",
      ],
    },
    {
      title: "Kas Geliştirici",
      icon: "🏋️",
      items: [
        "Creatine",
        "HMB",
        "Beta-Alanin",
        "L-Arginin",
      ],
    },
    {
      title: "Fitness Ekipmanları",
      icon: "🏃",
      items: [
        "Dambıl & Halter",
        "Fitness Aksesuarları",
        "Antrenman Malzemeleri",
        "Spor Giyim",
      ],
    },
    {
      title: "Özel Takviyeler",
      icon: "🎯",
      items: [
        "Kilo Aldırıcı",
        "Yağ Yakıcı",
        "Testosteron Destekleyici",
        "Uyku Desteği",
      ],
    },
  ];

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
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">ürünlerimiz</p>
          <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF581F] via-[#FF7A3F] to-[#FFB88A]">Supplement & Fitness Ürünleri</span>
          </h1>
          <p className="mt-4 max-w-2xl text-foreground/80 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            Protein tozlarından vitaminlere, fitness ekipmanlarından özel takviyelere kadar tüm productsin orijinalliği garantili.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {groups.map((g) => (
              <div key={g.title} className="group relative rounded-xl p-[1px] bg-gradient-to-b from-[#FF581F]/20 to-transparent transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-full rounded-xl bg-background/70 backdrop-blur p-4 sm:p-5 ring-1 ring-[#FF581F]/5">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-md sm:rounded-lg bg-[#FF581F]/15 text-[#FF581F] flex items-center justify-center flex-shrink-0">
                      <span className="text-xs sm:text-sm md:text-base">{g.icon}</span>
                    </div>
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base text-[#B8350F] group-hover:text-[#FF581F] transition-colors leading-tight">{g.title}</h3>
                  </div>
                  <ul className="mt-2 sm:mt-3 text-xs sm:text-sm text-foreground/80 space-y-1 list-disc list-inside leading-relaxed">
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


