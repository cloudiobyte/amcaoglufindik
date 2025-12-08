export type Locale = "tr" | "en";

type Translations = {
  [key: string]: string;
};

const translations: Record<Locale, Translations> = {
  tr: {
    // Brand
    "brand.name": "Amcaoğlu Fındık",
    "brand.tagline": "Kaliteli fındık ve tarım makineleri",
    
    // Navigation
    "nav.home": "Ana Sayfa",
    "nav.prices": "Fındık Fiyatları",
    "nav.equipment": "Tarım Makineleri",
    "nav.secondHandEquipment": "İkinci El Makineler",
    "nav.contact": "İletişim",
    "nav.about": "Hakkımızda",

    // Home page
    "home.heroTitle": "Amcaoğlu Fındık",
    "home.heroSubtitle": "Kaliteli fındık ve tarım makineleri",
    "home.heroButton": "Fiyatları Görüntüle",
    "home.featuresTitle": "Hizmetlerimiz",
    "home.feature1Title": "Güncel Fındık Fiyatları",
    "home.feature1Desc": "Her gün güncellenen piyasa fiyatlarını takip edin",
    "home.feature2Title": "Tarım Makineleri",
    "home.feature2Desc": "Fındık işleme ve toplama için profesyonel ekipmanlar",
    "home.feature3Title": "Güvenilir Hizmet",
    "home.feature3Desc": "Yılların deneyimi ile sektörde güvenilir iş ortağınız",

    // Prices page
    "prices.title": "Güncel Fındık Fiyatları",
    "prices.subtitle": "Fındık Güncel Piyasa Fiyatları",
    "prices.lastUpdated": "Son güncelleme",
    "prices.variety": "Fındık Çeşidi",
    "prices.pricePerKg": "Fiyat (TL/kg)",
    "prices.quality": "Kalite",
    "prices.notes": "Notlar",
    "prices.disclaimer": "* Fiyatlar piyasa koşullarına göre değişiklik gösterebilir. Güncel fiyatlar için lütfen bizimle iletişime geçin.",
    
    // Hazelnut varieties
    "prices.giresun": "Giresun Fındığı",
    "prices.tombul": "Tombul Fındık",
    "prices.sivri": "Sivri Fındık",
    "prices.palaz": "Palaz Fındık",
    "prices.premium": "Premium",
    "prices.standard": "Standart",
    "prices.export": "İhracat kalitesi",
    "prices.domestic": "Yerli tüketim",

    // Equipment page
    "equipment.title": "Tarım Makineleri",
    "equipment.subtitle": "Fındık üretimi için profesyonel makineler",
    "equipment.viewDetails": "Detayları Görüntüle",
    "equipment.noProducts": "Şu anda stokta makine bulunmamaktadır.",
    "equipment.price": "Fiyat",
    "equipment.contactForPrice": "Fiyat için iletişime geçin",
    
    // Equipment items
    "equipment.harvester": "Fındık Toplama Makinesi",
    "equipment.harvesterDesc": "Otomatik fındık toplama sistemi, yüksek verimlilik",
    "equipment.dryer": "Fındık Kurutma Makinesi",
    "equipment.dryerDesc": "Profesyonel fındık kurutma sistemi, hava sirkülasyonlu",
    "equipment.cracker": "Fındık Kırma Makinesi",
    "equipment.crackerDesc": "Hassas ayarlanabilir kırma sistemi",
    "equipment.sorter": "Fındık Ayıklama Makinesi",
    "equipment.sorterDesc": "Otomatik boyut ve kalite ayırma sistemi",
    "equipment.roaster": "Fındık Kavurma Makinesi",
    "equipment.roasterDesc": "Endüstriyel kavurma sistemi, sıcaklık kontrolü",
    "equipment.packaging": "Paketleme Makinesi",
    "equipment.packagingDesc": "Otomatik vakumlama ve paketleme sistemi",

    // Second Hand Equipment page
    "secondHandEquipment.title": "İkinci El Makineler",
    "secondHandEquipment.subtitle": "Güvenilir ikinci el tarım makineleri",
    "secondHandEquipment.noProducts": "Şu anda stokta ikinci el makine bulunmamaktadır.",

    // Contact page
    "contact.title": "İletişim",
    "contact.subtitle": "Sorularınız için bizimle iletişime geçin",
    "contact.info": "İletişim Bilgileri",
    "contact.merkez": "Merkez",
    "contact.sube": "Şube",
    "contact.phone": "Telefon",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "E-posta",
    "contact.address": "Adres",
    "contact.merkezAddress": "Kocatöngel Köyü - Hendek/SAKARYA",
    "contact.subeAddress": "Rasimpaşa Mh. K.Kamışoğlu Cd. No: 152/B - Hendek/SAKARYA",
    "contact.addressValue": "Giresun, Türkiye",
    "contact.formTitle": "Bize Mesaj Gönderin",
    "contact.name": "Adınız",
    "contact.emailLabel": "E-posta Adresiniz",
    "contact.message": "Mesajınız",
    "contact.send": "Gönder",
    "contact.hours": "Çalışma Saatleri",
    "contact.hoursValue": "Pazartesi - Cumartesi: 08:00 - 18:00",

    // About page
    "about.title": "Hakkımızda",
    "about.subtitle": "Kalite ve güvenin adresi",
    "about.story": "Hikayemiz",
    "about.storyText": "Amcaoğlu Fındık, yılların deneyimi ile fındık sektöründe güvenilir bir isim olarak hizmet vermektedir. Kaliteli ürün ve müşteri memnuniyeti odaklı çalışma prensibimiz ile sektörde öncü konumdayız.",
    "about.mission": "Misyonumuz",
    "about.missionText": "En kaliteli fındığı üreticiden tüketiciye ulaştırmak ve fındık üreticilerine modern tarım ekipmanları sağlayarak verimliliği artırmak.",
    "about.values": "Değerlerimiz",
    "about.quality": "Kalite",
    "about.qualityDesc": "Her zaman en yüksek kalite standartlarında ürün sunuyoruz",
    "about.trust": "Güven",
    "about.trustDesc": "Şeffaf ve dürüst iş ilişkileri kuruyoruz",
    "about.experience": "Deneyim",
    "about.experienceDesc": "Yılların bilgi birikimi ile sektörde lideriz",

    // Footer
    "footer.aboutCompany": "Amcaoğlu Fındık, kaliteli fındık ve tarım makineleri konusunda güvenilir iş ortağınız.",
    "footer.quickLinks": "Hızlı Bağlantılar",
    "footer.contactInfo": "İletişim",
    "footer.copyright": "© 2025 Amcaoğlu Fındık. Tüm hakları saklıdır.",
  },
  
  en: {
    // Brand
    "brand.name": "Amcaoğlu Hazelnuts",
    "brand.tagline": "Quality hazelnuts and agricultural machinery",
    
    // Navigation
    "nav.home": "Home",
    "nav.prices": "Hazelnut Prices",
    "nav.equipment": "Agricultural Equipment",
    "nav.secondHandEquipment": "Second Hand Equipment",
    "nav.contact": "Contact",
    "nav.about": "About",

    // Home page
    "home.heroTitle": "Amcaoğlu Hazelnuts",
    "home.heroSubtitle": "Quality hazelnuts and agricultural machinery",
    "home.heroButton": "View Prices",
    "home.featuresTitle": "Our Services",
    "home.feature1Title": "Current Hazelnut Prices",
    "home.feature1Desc": "Track daily updated market prices",
    "home.feature2Title": "Agricultural Machinery",
    "home.feature2Desc": "Professional equipment for hazelnut processing and harvesting",
    "home.feature3Title": "Reliable Service",
    "home.feature3Desc": "Your trusted partner in the industry with years of experience",

    // Prices page
    "prices.title": "Current Hazelnut Prices",
    "prices.subtitle": "Up-to-date market prices by hazelnut variety",
    "prices.lastUpdated": "Last updated",
    "prices.variety": "Hazelnut Variety",
    "prices.pricePerKg": "Price (TL/kg)",
    "prices.quality": "Quality",
    "prices.notes": "Notes",
    "prices.disclaimer": "* Prices may vary based on market conditions. Please contact us for current pricing.",
    
    // Hazelnut varieties
    "prices.giresun": "Giresun Hazelnut",
    "prices.tombul": "Tombul Hazelnut",
    "prices.sivri": "Sivri Hazelnut",
    "prices.palaz": "Palaz Hazelnut",
    "prices.premium": "Premium",
    "prices.standard": "Standard",
    "prices.export": "Export quality",
    "prices.domestic": "Domestic consumption",

    // Equipment page
    "equipment.title": "Agricultural Equipment",
    "equipment.subtitle": "Professional machinery for hazelnut production",
    "equipment.viewDetails": "View Details",
    "equipment.noProducts": "No equipment currently in stock.",
    "equipment.price": "Price",
    "equipment.contactForPrice": "Contact for price",
    
    // Equipment items
    "equipment.harvester": "Hazelnut Harvester",
    "equipment.harvesterDesc": "Automatic hazelnut harvesting system, high efficiency",
    "equipment.dryer": "Hazelnut Dryer",
    "equipment.dryerDesc": "Professional hazelnut drying system with air circulation",
    "equipment.cracker": "Hazelnut Cracker",
    "equipment.crackerDesc": "Precision adjustable cracking system",
    "equipment.sorter": "Hazelnut Sorter",
    "equipment.sorterDesc": "Automatic size and quality sorting system",
    "equipment.roasterDesc": "Industrial roasting system with temperature control",
    "equipment.packaging": "Packaging Machine",
    "equipment.packagingDesc": "Automatic vacuum sealing and packaging system",

    // Second Hand Equipment page
    "secondHandEquipment.title": "Second Hand Equipment",
    "secondHandEquipment.subtitle": "Reliable second hand agricultural machinery",
    "secondHandEquipment.noProducts": "No second hand equipment currently in stock.",

    // Contact page
    // Contact page
    "contact.title": "Contact",
    "contact.subtitle": "Get in touch with us for any questions",
    "contact.info": "Contact Information",
    "contact.merkez": "Main Office",
    "contact.sube": "Branch Office",
    "contact.phone": "Phone",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.merkezAddress": "Kocatöngel Village - Hendek/SAKARYA",
    "contact.subeAddress": "Rasimpaşa Mh. K.Kamışoğlu St. No: 152/B - Hendek/SAKARYA",
    "contact.addressValue": "Giresun, Turkey",
    "contact.formTitle": "Send Us a Message",
    "contact.name": "Your Name",
    "contact.emailLabel": "Your Email",
    "contact.message": "Your Message",
    "contact.send": "Send",
    "contact.hours": "Business Hours",
    "contact.hoursValue": "Monday - Saturday: 08:00 AM - 06:00 PM",

    // About page
    "about.title": "About Us",
    "about.subtitle": "The address of quality and trust",
    "about.story": "Our Story",
    "about.storyText": "Amcaoğlu Hazelnuts has been serving as a trusted name in the hazelnut industry with years of experience. We are industry leaders with our commitment to quality products and customer satisfaction.",
    "about.mission": "Our Mission",
    "about.missionText": "To deliver the highest quality hazelnuts from producer to consumer and to increase productivity by providing modern agricultural equipment to hazelnut farmers.",
    "about.values": "Our Values",
    "about.quality": "Quality",
    "about.qualityDesc": "We always offer products at the highest quality standards",
    "about.trust": "Trust",
    "about.trustDesc": "We build transparent and honest business relationships",
    "about.experience": "Experience",
    "about.experienceDesc": "We lead the industry with years of accumulated knowledge",

    // Footer
    "footer.aboutCompany": "Amcaoğlu Hazelnuts, your trusted partner for quality hazelnuts and agricultural machinery.",
    "footer.quickLinks": "Quick Links",
    "footer.contactInfo": "Contact",
    "footer.copyright": "© 2025 Amcaoğlu Hazelnuts. All rights reserved.",
  },
};

export function getTranslations(locale: Locale) {
  return (key: string): string => {
    return translations[locale][key] || key;
  };
}

export function getTranslation(locale: Locale, key: string): string {
  return translations[locale][key] || key;
}
