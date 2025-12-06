import Link from "next/link";
import { Locale, getTranslations } from "@/lib/translations";
import { getContactInfo } from "@/lib/sanity/queries";

interface FooterProps {
  locale: Locale;
}

export default async function Footer({ locale }: FooterProps) {
  const t = getTranslations(locale);
  const contactInfoList = await getContactInfo();
  
  const merkez = contactInfoList.find(c => c.location === 'merkez');
  const sube = contactInfoList.find(c => c.location === 'sube');

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t("brand.name")}</h3>
            <p className="text-sm text-white">{t("footer.aboutCompany")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-sm text-white hover:text-hazel transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/prices`} className="text-sm text-white hover:text-hazel transition-colors">
                  {t("nav.prices")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/equipment`} className="text-sm text-white hover:text-hazel transition-colors">
                  {t("nav.equipment")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-sm text-white hover:text-hazel transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-sm text-white hover:text-hazel transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t("footer.contactInfo")}</h3>
            
            {/* Merkez */}
            {merkez && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-hazel mb-2">{t("contact.merkez")}</h4>
                <ul className="space-y-1 text-sm text-white">
                  <li>
                    <span className="font-semibold">{t("contact.phone")}:</span> {merkez.phone}
                  </li>
                  <li>
                    <span className="font-semibold">{t("contact.email")}:</span> {merkez.email}
                  </li>
                  <li>
                    <span className="font-semibold">{t("contact.address")}:</span> {merkez.address[locale]}
                  </li>
                </ul>
              </div>
            )}

            {/* Şube */}
            {sube && (
              <div>
                <h4 className="text-sm font-semibold text-hazel mb-2">{t("contact.sube")}</h4>
                <ul className="space-y-1 text-sm text-white">
                  <li>
                    <span className="font-semibold">{t("contact.phone")}:</span> {sube.phone}
                  </li>
                  <li>
                    <span className="font-semibold">{t("contact.email")}:</span> {sube.email}
                  </li>
                  <li>
                    <span className="font-semibold">{t("contact.address")}:</span> {sube.address[locale]}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-white">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
