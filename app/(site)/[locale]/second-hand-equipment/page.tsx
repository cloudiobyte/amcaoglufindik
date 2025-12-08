import { Locale, getTranslations } from "@/lib/translations";
import Container from "@/components/Container";
import { getSecondHandEquipment } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import Image from "next/image";

export default async function SecondHandEquipmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const equipment = await getSecondHandEquipment();

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("secondHandEquipment.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("secondHandEquipment.subtitle")}
          </p>
        </div>

        {/* Equipment Grid */}
        {equipment.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
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
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">
              {t("secondHandEquipment.noProducts")}
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}
