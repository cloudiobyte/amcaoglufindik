import { Locale } from "./translations";

export interface HazelnutPrice {
  id: string;
  locale: Locale;
  type: string;
  grade: string;
  pricePerKg: number;
  currency: string;
  updatedAt: string;
  note?: string;
}

export interface Equipment {
  id: string;
  locale: Locale;
  name: string;
  category: string;
  description: string;
  price?: number;
  currency?: string;
  imageUrl?: string;
  featured?: boolean;
}

// Mock hazelnut prices data
export const hazelnutPrices: HazelnutPrice[] = [
  {
    id: "1",
    locale: "tr",
    type: "Giresun Fındığı",
    grade: "Premium",
    pricePerKg: 185,
    currency: "TL",
    updatedAt: "2025-11-26",
    note: "İhracat kalitesi",
  },
  {
    id: "2",
    locale: "tr",
    type: "Tombul Fındık",
    grade: "Standart",
    pricePerKg: 165,
    currency: "TL",
    updatedAt: "2025-11-26",
    note: "Yerli tüketim",
  },
  {
    id: "3",
    locale: "tr",
    type: "Sivri Fındık",
    grade: "Premium",
    pricePerKg: 170,
    currency: "TL",
    updatedAt: "2025-11-26",
  },
  {
    id: "4",
    locale: "tr",
    type: "Palaz Fındık",
    grade: "Standart",
    pricePerKg: 155,
    currency: "TL",
    updatedAt: "2025-11-26",
  },
  {
    id: "5",
    locale: "en",
    type: "Giresun Hazelnut",
    grade: "Premium",
    pricePerKg: 185,
    currency: "TL",
    updatedAt: "2025-11-26",
    note: "Export quality",
  },
  {
    id: "6",
    locale: "en",
    type: "Tombul Hazelnut",
    grade: "Standard",
    pricePerKg: 165,
    currency: "TL",
    updatedAt: "2025-11-26",
    note: "Domestic consumption",
  },
  {
    id: "7",
    locale: "en",
    type: "Sivri Hazelnut",
    grade: "Premium",
    pricePerKg: 170,
    currency: "TL",
    updatedAt: "2025-11-26",
  },
  {
    id: "8",
    locale: "en",
    type: "Palaz Hazelnut",
    grade: "Standard",
    pricePerKg: 155,
    currency: "TL",
    updatedAt: "2025-11-26",
  },
];

// Mock equipment data
export const equipment: Equipment[] = [
  {
    id: "1",
    locale: "tr",
    name: "Çapa Makinesi",
    category: "Çapalama",
    description: "Profesyonel çapa makinesi, toprak işleme ve yabani ot temizleme için ideal. Yüksek verimlilik ve dayanıklılık.",
    price: 35000,
    currency: "TL",
    featured: true,
  },
  {
    id: "2",
    locale: "tr",
    name: "Yem Parçalama Makinesi",
    category: "Yem İşleme",
    description: "Yüksek kapasiteli yem parçalama makinesi. Mısır, saman ve diğer yemleri kolayca parçalar.",
    price: 28000,
    currency: "TL",
    featured: true,
  },
  {
    id: "3",
    locale: "tr",
    name: "Sırt Üfleme Makinesi",
    category: "Temizlik",
    description: "Güçlü sırt üfleyici, yaprak ve çöp temizliği için. Ergonomik tasarım ve uzun kullanım ömrü.",
    price: 8500,
    currency: "TL",
  },
  {
    id: "4",
    locale: "tr",
    name: "Zincirli Testere",
    category: "Kesim",
    description: "Profesyonel zincirli testere, ağaç kesimi ve budama işleri için. Yüksek performans ve güvenlik.",
    price: 12000,
    currency: "TL",
  },
  {
    id: "5",
    locale: "tr",
    name: "Yakıt Aktarma Pompası",
    category: "Yakıt Sistemleri",
    description: "Elektrikli yakıt transfer pompası, güvenli ve hızlı yakıt aktarımı için. Otomatik durdurma özelliği.",
    price: 4500,
    currency: "TL",
    featured: true,
  },
  {
    id: "6",
    locale: "tr",
    name: "Çim Biçme Makinesi",
    category: "Bahçe",
    description: "Benzinli çim biçme makinesi, geniş alanlar için ideal. Ayarlanabilir kesim yüksekliği.",
    price: 15000,
    currency: "TL",
  },
  {
    id: "7",
    locale: "en",
    name: "Cultivator Machine",
    category: "Cultivation",
    description: "Professional cultivator machine, ideal for soil processing and weed removal. High efficiency and durability.",
    price: 35000,
    currency: "TL",
    featured: true,
  },
  {
    id: "8",
    locale: "en",
    name: "Feed Shredder Machine",
    category: "Feed Processing",
    description: "High capacity feed shredder machine. Easily shreds corn, straw and other feeds.",
    price: 28000,
    currency: "TL",
    featured: true,
  },
  {
    id: "9",
    locale: "en",
    name: "Backpack Blower",
    category: "Cleaning",
    description: "Powerful backpack blower for leaf and debris cleaning. Ergonomic design and long service life.",
    price: 8500,
    currency: "TL",
  },
  {
    id: "10",
    locale: "en",
    name: "Chainsaw",
    category: "Cutting",
    description: "Professional chainsaw for tree cutting and pruning operations. High performance and safety.",
    price: 12000,
    currency: "TL",
  },
  {
    id: "11",
    locale: "en",
    name: "Fuel Transfer Pump",
    category: "Fuel Systems",
    description: "Electric fuel transfer pump for safe and fast fuel transfer. Automatic shut-off feature.",
    price: 4500,
    currency: "TL",
    featured: true,
  },
  {
    id: "12",
    locale: "en",
    name: "Lawn Mower",
    category: "Garden",
    description: "Gasoline lawn mower, ideal for large areas. Adjustable cutting height.",
    price: 15000,
    currency: "TL",
  },
];

export function getPricesByLocale(locale: Locale): HazelnutPrice[] {
  return hazelnutPrices.filter((price) => price.locale === locale);
}

export function getEquipmentByLocale(locale: Locale): Equipment[] {
  return equipment.filter((item) => item.locale === locale);
}

export function getFeaturedEquipment(locale: Locale): Equipment[] {
  return equipment.filter((item) => item.locale === locale && item.featured);
}
