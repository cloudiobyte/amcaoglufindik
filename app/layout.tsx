import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amcaoğlu - Fındık Fiyatları & Tarım Makineleri",
  description: "Güncel fındık fiyatları ve kaliteli tarım makineleri. Hazelnut prices and agricultural machinery.",
  icons: {
    icon: '/logo-icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
