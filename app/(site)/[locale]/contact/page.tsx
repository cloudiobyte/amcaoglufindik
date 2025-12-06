import { Locale, getTranslations } from "@/lib/translations";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <div>
      <div className="bg-hazel-light py-12">
        <Container>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-lg text-gray-600">{t("contact.subtitle")}</p>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t("contact.info")}
            </h2>
            
            {/* Merkez */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-hazel mb-4">{t("contact.merkez")}</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-hazel mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t("contact.phone")}</p>
                    <p className="text-gray-600">0533 714 68 88</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mt-1 mr-3" style={{color: '#9B5D30'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t("contact.email")}</p>
                    <p className="text-gray-600">info@amcaoglu.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-hazel mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t("contact.address")}</p>
                    <p className="text-gray-600">{t("contact.merkezAddress")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Şube */}
            <div>
              <h3 className="text-xl font-semibold text-hazel mb-4">{t("contact.sube")}</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-hazel mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t("contact.phone")}</p>
                    <p className="text-gray-600">0532 603 99 47</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mt-1 mr-3" style={{color: '#9B5D30'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t("contact.email")}</p>
                    <p className="text-gray-600">info@amcaoglu.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-hazel mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t("contact.address")}</p>
                    <p className="text-gray-600">{t("contact.subeAddress")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ContactForm locale={locale as Locale} />
        </div>
      </Container>
    </div>
  );
}
