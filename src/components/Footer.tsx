import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#FF581F]/5 border-t border-gray-100 mt-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#FF581F]/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#FF581F]/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#FF581F]/10 blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.webp" alt="ProGen" width={120} height={32} className="sm:w-[140px] sm:h-[40px]" />
            </div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Supplement ve fitness ürünleri için güvenilir orijinallik doğrulama sistemi. Her ürününüzün gerçekliğini garantiliyoruz.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <i className="bi bi-geo-alt text-black/70 mt-0.5 flex-shrink-0 text-sm" />
                <span className="leading-relaxed">Dumlupınar mah. Yumurtacı Abdibey Cad. Nuhoğlu Yenitepe Sitesi, 1. Etap, B Blok, d:221</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#FF581F] transition-colors">
                <i className="bi bi-telephone text-black/70 text-sm" />
                <a href="tel:+905322060769" className="transition-colors">+90 532 206 07 69</a>
              </div>
              <div className="flex items-center gap-2">
                <i className="bi bi-envelope text-black/70 text-sm" />
                <a href="mailto:info@progen.com" className="hover:text-[#FF581F] transition-colors">info@progen.com</a>
              </div>
            </div>
          </div>

          {/* Ürün Kategorileri */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-gray-900 font-semibold text-xs sm:text-sm uppercase tracking-wider">ÜRÜN KATEGORİLERİ</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
              <li><Link href="/products" className="hover:text-[#FF581F] transition-colors">Protein Tozları</Link></li>
              <li><Link href="/products" className="hover:text-[#FF581F] transition-colors">Pre-Workout</Link></li>
              <li><Link href="/products" className="hover:text-[#FF581F] transition-colors">Vitamin & Mineral</Link></li>
              <li><Link href="/products" className="hover:text-[#FF581F] transition-colors">Creatine</Link></li>
              <li><Link href="/products" className="hover:text-[#FF581F] transition-colors">Fitness Ekipmanları</Link></li>
            </ul>
          </div>

          {/* Şirket */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-gray-900 font-semibold text-xs sm:text-sm uppercase tracking-wider">ŞİRKET</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
              <li><Link href="/about-us" className="hover:text-[#FF581F] transition-colors">Hakkımızda</Link></li>
              <li><Link href="/check" className="hover:text-[#FF581F] transition-colors">Ürün Doğrula</Link></li>
              <li><Link href="/contact-us" className="hover:text-[#FF581F] transition-colors">İletişim</Link></li>
              <li><Link href="/products" className="hover:text-[#FF581F] transition-colors">Ürünlerimiz</Link></li>
              <li><Link href="/blog" className="hover:text-[#FF581F] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-gray-900 font-semibold text-xs sm:text-sm uppercase tracking-wider">SOSYAL MEDYA</h3>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="https://instagram.com/progen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 hover:text-[#FF581F] transition-colors"
              >
                <i className="bi bi-instagram text-sm sm:text-base" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/progen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 hover:text-[#FF581F] transition-colors"
              >
                <i className="bi bi-linkedin text-sm sm:text-base" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/progen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 hover:text-[#FF581F] transition-colors"
              >
                <i className="bi bi-twitter-x text-sm sm:text-base" />
                <span>X (Twitter)</span>
              </a>
              <a
                href="https://github.com/progen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 hover:text-[#FF581F] transition-colors"
              >
                <i className="bi bi-github text-sm sm:text-base" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} ProGen. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-500">
            <Link href="/kvkk" className="hover:text-[#FF581F] transition-colors">
              KVKK
            </Link>
            <Link href="/gizlilik" className="hover:text-[#FF581F] transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-kosullari" className="hover:text-[#FF581F] transition-colors">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}