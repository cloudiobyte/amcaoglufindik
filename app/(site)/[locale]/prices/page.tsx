import { Locale, getTranslations } from "@/lib/translations";
import { getHazelnutPrices } from "@/lib/sanity/queries";
import Container from "@/components/Container";

export default async function PricesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const prices = await getHazelnutPrices(locale as Locale);

  // Get the latest update date
  const latestUpdate = prices.length > 0 ? prices[0].updatedAt : "";

  return (
    <div>
      {/* Page Header */}
      <div className="bg-hazel-light py-8">
        <Container>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t("prices.title")}
          </h1>
          <p className="text-base text-gray-600">{t("prices.subtitle")}</p>
          {latestUpdate && (
            <p className="text-xs text-gray-500 mt-1">
              {t("prices.lastUpdated")}: {new Date(latestUpdate).toLocaleDateString(locale === "tr" ? "tr-TR" : "en-US")}
            </p>
          )}
        </Container>
      </div>

      {/* Prices Table */}
      <Container>
        <div className="my-12">
          <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border-2 border-hazel-light">
            <table className="min-w-full divide-y-2 divide-gray-300">
              <thead className="bg-hazel-dark">
                <tr>
                  <th className="px-8 py-6 text-left text-base font-bold text-white uppercase tracking-wide">
                    {t("prices.variety")}
                  </th>
                  <th className="px-8 py-6 text-left text-base font-bold text-white uppercase tracking-wide">
                    {t("prices.quality")}
                  </th>
                  <th className="px-8 py-6 text-left text-base font-bold text-white uppercase tracking-wide">
                    {t("prices.pricePerKg")}
                  </th>
                  <th className="px-8 py-6 text-left text-base font-bold text-white uppercase tracking-wide">
                    {t("prices.notes")}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {prices.map((price, index) => (
                  <tr 
                    key={price._id} 
                    className={`hover:bg-hazel-light transition-colors duration-150 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <td className="px-8 py-6 whitespace-nowrap text-xl font-bold text-gray-900">
                      {price.type[locale as Locale]}
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap text-xl font-semibold text-gray-800">
                      {price.grade[locale as Locale]}
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <span className="text-2xl font-bold text-hazel-dark bg-hazel-light px-4 py-2 rounded-lg inline-block">
                        {price.pricePerKg} {price.currency}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-xl text-gray-700">
                      {price.note?.[locale as Locale] || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 mb-12 p-6 bg-gradient-to-r from-hazel-light to-amber-50 border-l-4 border-hazel-dark rounded-lg shadow-md">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-hazel-dark flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <p className="text-base text-gray-800 font-medium leading-relaxed">{t("prices.disclaimer")}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
