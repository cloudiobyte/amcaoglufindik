import { Locale, getTranslations } from "@/lib/translations";
import Container from "@/components/Container";

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <div>
      {/* Page Header */}
      <div className="bg-hazel-light py-12">
        <Container>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("about.title")}
          </h1>
          <p className="text-lg text-gray-600">{t("about.subtitle")}</p>
        </Container>
      </div>

      <Container>
        {/* Story Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("about.story")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t("about.storyText")}
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12 bg-hazel-light p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("about.mission")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t("about.missionText")}
          </p>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t("about.values")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1: Quality */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-hazel-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-hazel"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t("about.quality")}
              </h3>
              <p className="text-gray-600">{t("about.qualityDesc")}</p>
            </div>

            {/* Value 2: Trust */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-hazel-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-hazel"
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t("about.trust")}
              </h3>
              <p className="text-gray-600">{t("about.trustDesc")}</p>
            </div>

            {/* Value 3: Experience */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-hazel-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-hazel"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t("about.experience")}
              </h3>
              <p className="text-gray-600">{t("about.experienceDesc")}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
