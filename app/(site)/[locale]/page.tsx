import { Locale, getTranslations } from "@/lib/translations";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import HazelLink from "@/components/HazelLink";
import { getSiteSettings } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const siteSettings = await getSiteSettings();

  // Image from Sanity or default / Sanity'den resim veya varsayılan
  const backgroundImage = siteSettings?.mainPageBackground 
    ? urlFor(siteSettings.mainPageBackground).width(1920).quality(90).url()
    : "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop";

  return (
    <div className="min-h-screen relative">
      {/* Background - image or default color / Arka plan - resim veya varsayılan renk */}
      {backgroundImage ? (
        <div 
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            filter: "brightness(1.1)"
          }}
        />
      ) : (
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-sky-200 via-blue-100 to-cyan-200" />
      )}
      
      {/* Hero Section */}
      <Hero
        title={t("home.heroTitle")}
        subtitle={t("home.heroSubtitle")}
        buttonText={t("home.heroButton")}
        buttonLink={`/${locale}/prices`}
      />

      {/* Features Section */}
      <Container>
        <div className="backdrop-blur-md bg-white/50 rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t("home.featuresTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="backdrop-blur-sm bg-white/70 p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-white/80 transition-all">
              <div className="w-12 h-12 bg-hazel-light rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-hazel"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("home.feature1Title")}
              </h3>
              <p className="text-gray-600">{t("home.feature1Desc")}</p>
            <HazelLink href={`/${locale}/prices`} className="mt-4">
              {t("nav.prices")} →
            </HazelLink>
          </div>

          {/* Feature 2 */}
          <div className="backdrop-blur-sm bg-white/70 p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-white/80 transition-all">
            <div className="w-12 h-12 bg-hazel-light rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-hazel"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("home.feature2Title")}
            </h3>
            <p className="text-gray-600">{t("home.feature2Desc")}</p>
            <HazelLink href={`/${locale}/equipment`} className="mt-4">
              {t("nav.equipment")} →
            </HazelLink>
          </div>

          {/* Feature 3 */}
          <div className="backdrop-blur-sm bg-white/70 p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-white/80 transition-all">
            <div className="w-12 h-12 bg-hazel-light rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-hazel"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("home.feature3Title")}
            </h3>
            <p className="text-gray-600">{t("home.feature3Desc")}</p>
            <HazelLink href={`/${locale}/about`} className="mt-4">
              {t("nav.about")} →
            </HazelLink>
          </div>
        </div>
        </div>
      </Container>
    </div>
  );
}
