"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Locale, getTranslations } from "@/lib/translations";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useState, useEffect } from "react";
import { getSiteSettings, type SanitySiteSettings } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

interface NavbarProps {
  locale: Locale;
}

export default function Navbar({ locale }: NavbarProps) {
  const t = getTranslations(locale);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [siteSettings, setSiteSettings] = useState<SanitySiteSettings | null>(null);

  useEffect(() => {
    getSiteSettings().then(setSiteSettings);
  }, []);

  const links = [
    { href: `/${locale}`, label: t("nav.home") },
    { href: `/${locale}/prices`, label: t("nav.prices") },
    { href: `/${locale}/equipment`, label: t("nav.equipment") },
    { href: `/${locale}/contact`, label: t("nav.contact") },
    { href: `/${locale}/about`, label: t("nav.about") },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              {siteSettings?.logo ? (
                <div className="flex items-center gap-3">
                  <Image 
                    src={urlFor(siteSettings.logo).width(50).height(50).url()} 
                    alt={siteSettings.mainTitle || "Logo"} 
                    width={50} 
                    height={50}
                    priority
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-amber-900">{siteSettings.mainTitle}</span>
                    <span className="text-xs text-green-700">{siteSettings.mainSubtitle}</span>
                  </div>
                </div>
              ) : (
                <Image 
                  src="/logo.svg" 
                  alt="Amcaoğlu Logo" 
                  width={180} 
                  height={50}
                  priority
                />
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    isActive
                      ? "text-hazel font-semibold"
                      : "text-gray-700 hover:text-hazel"
                  } transition-colors duration-200`}
                >
                  {link.label}
                </Link>
              );
            })}
            <LanguageSwitcher currentLocale={locale} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-hazel focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${
                      isActive
                        ? "text-hazel font-semibold"
                        : "text-gray-700 hover:text-hazel"
                    } transition-colors duration-200 px-2 py-1`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="px-2 pt-2">
                <LanguageSwitcher currentLocale={locale} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
