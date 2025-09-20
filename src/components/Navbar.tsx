"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/about-us", label: "Hakkımızda" },
  { href: "/products", label: "Ürünlerimiz" },
  { href: "/contact-us", label: "Bize Ulaşın" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-3 z-50 flex justify-center">
      <div className="w-[95vw] md:w-[85vw] lg:w-[75vw]">
        <nav className="rounded-2xl shadow-lg shadow-black/10 ring-1 ring-white/20 bg-white/20 dark:bg-white/10 backdrop-blur-xl supports-[backdrop-filter]:bg-white/10 px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-tight inline-flex items-center">
            <Image src="/logo.webp" alt="ProGen" width={120} height={32} priority />
          </Link>

          <ul className="hidden md:flex items-center gap-5 text-md whitespace-nowrap">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      "transition-colors relative" +
                      (isActive ? " font-semibold" : " text-foreground/80")
                    }
                  >
                    {item.label}
                    {isActive && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF581F] rounded-full"></div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/check"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#FF581F] text-white text-sm font-bold shadow-sm hover:opacity-90"
            >
              Authenticity Check
            </Link>
            <button
              className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 hover:border-gray-300 transition-colors"
              onClick={() => setOpen((s) => !s)}
              aria-label="Menüyü Aç/Kapat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
        
        {open && (
          <div className="md:hidden mt-2 rounded-2xl shadow-lg shadow-black/10 ring-1 ring-white/20 bg-white/20 dark:bg-white/10 backdrop-blur-xl supports-[backdrop-filter]:bg-white/10">
            <ul className="px-4 sm:px-6 lg:px-8 py-3 grid gap-2 text-sm">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block py-2 px-1 rounded-md transition-colors relative ${isActive ? "font-semibold" : "text-foreground/80 hover:text-foreground"}`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                      {isActive && (
                        <div className="absolute -bottom-1 left-1 right-1 h-1 bg-[#FF581F] rounded-full"></div>
                      )}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/check"
                  className="block w-full text-center py-2 rounded-md bg-[#FF581F] text-white text-sm font-medium hover:bg-[#E04A1A] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Authenticity Check
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}


