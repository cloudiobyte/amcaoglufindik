import { Locale, getTranslations } from "@/lib/translations";
import { getEquipment, getSiteSettings } from "@/lib/sanity/queries";
import urlFor from "@/lib/sanity/image";
import { urlFor as urlForImage } from "@/lib/sanity/image";
import Container from "@/components/Container";
import Image from "next/image";

// Force dynamic rendering to show real-time updates from Sanity
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function EquipmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const equipmentList = await getEquipment(locale as Locale);
  const siteSettings = await getSiteSettings();

  const backgroundImage = siteSettings?.equipmentPageBackground 
    ? urlForImage(siteSettings.equipmentPageBackground).width(1920).quality(90).url()
    : null;

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
      <div className="backdrop-blur-md bg-white/50 py-12">
        <Container>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("equipment.title")}
          </h1>
          <p className="text-lg text-gray-600">{t("equipment.subtitle")}</p>
        </Container>
      </div>

      {/* Equipment Grid */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentList.map((item) => (
            <div
              key={item._id}
              className="backdrop-blur-md bg-white/80 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="h-48 gradient-hazel-light flex items-center justify-center relative">
                {item.images && item.images[0] ? (
                  <Image
                    src={urlFor(item.images[0]).width(800).height(600).url()}
                    alt={item.images[0].alt || item.name[locale as Locale]}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <svg
                    className="w-20 h-20 text-hazel opacity-50"
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
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.name[locale as Locale]}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description[locale as Locale]}
                </p>
                {item.specs && item.specs[locale as Locale] && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 whitespace-pre-wrap">
                      {item.specs[locale as Locale]}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
