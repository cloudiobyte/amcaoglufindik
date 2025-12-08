import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Locale } from "@/lib/translations";

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
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar locale={locale as Locale} />
      <main className="flex-grow">{children}</main>
      <Footer locale={locale as Locale} />
    </div>
  );
}

export async function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }];
}
