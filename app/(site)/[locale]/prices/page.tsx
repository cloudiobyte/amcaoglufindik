import { Locale, getTranslations } from "@/lib/translations";
import { getHazelnutPrices, getSiteSettings } from "@/lib/sanity/queries";
import Container from "@/components/Container";
import { urlFor } from "@/lib/sanity/image";

// Force dynamic rendering to show real-time updates from Sanity
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function PricesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const prices = await getHazelnutPrices(locale as Locale);
  const siteSettings = await getSiteSettings();

  const backgroundImage = siteSettings?.pricesPageBackground 
    ? urlFor(siteSettings.pricesPageBackground).width(1920).quality(90).url()
    : null;

  // Get the latest update date
  const latestUpdate = prices.length > 0 ? prices[0].updatedAt : "";

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

      {/* Page Header */}
      <div className="backdrop-blur-md bg-white/50 py-4">
        <Container>
          <h1 className="text-2xl font-bold text-gray-900">
            Fındık Güncel Piyasa Fiyatları
          </h1>
          {latestUpdate && (
            <p className="text-xs text-gray-500 mt-2">
              {t("prices.lastUpdated")}: {new Date(latestUpdate).toLocaleDateString(locale === "tr" ? "tr-TR" : "en-US")}
            </p>
          )}
        </Container>
      </div>

      {/* Prices Table */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="my-6">
          <div className="overflow-x-auto backdrop-blur-sm bg-white/85 shadow-xl rounded-2xl border border-white/40">
            <table className="min-w-full divide-y-2 divide-gray-300">
              <thead className="bg-hazel-dark">
                <tr>
                  <th className="px-4 sm:px-8 py-4 sm:py-6 text-left text-sm sm:text-base font-bold text-white uppercase tracking-wide">
                    {t("prices.variety")}
                  </th>
                  <th className="px-4 sm:px-8 py-4 sm:py-6 text-left text-sm sm:text-base font-bold text-white uppercase tracking-wide">
                    {t("prices.pricePerKg")}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white/90 backdrop-blur-sm divide-y divide-gray-200">
                {prices.map((price, index) => (
                  <tr 
                    key={price._id} 
                    className={`hover:bg-hazel-light transition-colors duration-150 ${
                      index % 2 === 0 ? 'bg-gray-50/70' : 'bg-white/60'
                    }`}
                  >
                    <td className="px-4 sm:px-8 py-4 sm:py-6 whitespace-nowrap text-base sm:text-xl font-bold text-gray-900">
                      {price.type[locale as Locale]}
                    </td>
                    <td className="px-4 sm:px-8 py-4 sm:py-6 whitespace-nowrap">
                      <span className="text-lg sm:text-2xl font-bold text-hazel-dark bg-hazel-light px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg inline-block">
                        {price.pricePerKg} {price.currency}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 mb-8 p-6 bg-gradient-to-r from-hazel-light to-amber-50 border-l-4 border-hazel-dark rounded-lg shadow-md backdrop-blur-sm bg-white/70">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-hazel-dark flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <p className="text-base text-gray-800 font-medium leading-relaxed">{t("prices.disclaimer")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
