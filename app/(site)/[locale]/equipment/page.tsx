import { Locale, getTranslations } from "@/lib/translations";
import Container from "@/components/Container";
import { getEquipment, getSiteSettings } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import Image from "next/image";

// Force dynamic rendering to show real-time updates
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function EquipmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const equipment = await getEquipment();
  const siteSettings = await getSiteSettings();

  const backgroundImage = siteSettings?.equipmentPageBackground 
    ? urlFor(siteSettings.equipmentPageBackground).width(1920).quality(90).url()
    : null;

  return (
    <div className="min-h-screen relative">
      {/* Background - image or default color */}
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

      <div className="py-16">
        <Container>
          {/* Page Header */}
          <div className="text-center mb-12 backdrop-blur-md bg-white/50 rounded-2xl p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("equipment.title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("equipment.subtitle")}
            </p>
          </div>

          {/* Equipment Grid */}
          {equipment.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipment.map((item) => (
                <div
                  key={item._id}
                  className="backdrop-blur-md bg-white/70 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  {/* Product Image */}
                  {item.productImage && (
                    <div className="relative h-64 w-full">
                      <Image
                        src={urlFor(item.productImage).width(600).height(400).url()}
                        alt={item.productName}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.productName}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.productDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 backdrop-blur-md bg-white/50 rounded-2xl">
              <p className="text-xl text-gray-500">
                {t("equipment.noProducts")}
              </p>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}
