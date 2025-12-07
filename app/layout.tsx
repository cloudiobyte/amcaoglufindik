import type { Metadata } from "next";
import "./globals.css";
import { getSiteSettings } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings();
  
  return {
    title: siteSettings?.siteTitle || "Amcaoğlu - Fındık Fiyatları & Tarım Makineleri",
    description: siteSettings?.descriptionMetadata || "Güncel fındık fiyatları ve kaliteli tarım makineleri. Hazelnut prices and agricultural machinery.",
    icons: siteSettings?.favicon ? {
      icon: [
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: urlFor(siteSettings.favicon).width(32).height(32).fit('crop').crop('center').format('png').url(), sizes: '32x32', type: 'image/png' },
        { url: urlFor(siteSettings.favicon).width(64).height(64).fit('crop').crop('center').format('png').url(), sizes: '64x64', type: 'image/png' },
      ],
      apple: [
        { url: urlFor(siteSettings.favicon).width(180).height(180).fit('crop').crop('center').format('png').url(), sizes: '180x180', type: 'image/png' },
      ],
    } : undefined,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
