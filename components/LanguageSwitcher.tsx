"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/translations";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const switchToLocale = (newLocale: Locale) => {
    // Extract the path after the locale
    const pathAfterLocale = pathname.replace(`/${currentLocale}`, '');
    // Build the new path with the new locale
    return `/${newLocale}${pathAfterLocale}`;
  };

  return (
    <div className="flex items-center space-x-2 border border-gray-300 rounded-md p-1">
      <Link
        href={switchToLocale("tr")}
        className={`px-3 py-1 rounded transition-colors duration-200 ${
          currentLocale === "tr"
            ? "bg-hazel text-white font-semibold"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        TR
      </Link>
      <Link
        href={switchToLocale("en")}
        className={`px-3 py-1 rounded transition-colors duration-200 ${
          currentLocale === "en"
            ? "bg-hazel text-white font-semibold"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
