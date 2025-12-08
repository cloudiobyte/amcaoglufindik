import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PresentPriceBanner from "@/components/PresentPriceBanner";
import { Locale } from "@/lib/translations";
import { getPresentPrice } from "@/lib/sanity/queries";

// Force dynamic rendering to show real-time updates
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const presentPrice = await getPresentPrice();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar locale={locale as Locale} />
      {presentPrice && (
        <PresentPriceBanner
          productDescription={presentPrice.productDescription}
          brutPrice={presentPrice.brutPrice}
          netPrice={presentPrice.netPrice}
          updatedAt={presentPrice.updatedAt}
        />
      )}
      <main className="flex-grow">{children}</main>
      <Footer locale={locale as Locale} />
    </div>
  );
}

export async function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }];
}
