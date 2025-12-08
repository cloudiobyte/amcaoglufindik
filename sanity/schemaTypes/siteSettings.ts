import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Ayarları / Site Settings",
  type: "document",
  fields: [
    // Favicon - Browser Icon
    defineField({
      name: "favicon",
      title: "Favicon - Tarayıcı İkonu",
      type: "image",
      description: "Tarayıcı sekmesinde görünen ikon (32x32px veya 64x64px önerilir) / Icon that appears in browser tab (32x32px or 64x64px recommended)",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),

    // Site Title
    defineField({
      name: "siteTitle",
      title: "Site Başlığı / Site Title",
      type: "string",
      description: "Tarayıcı sekmesinde görünen başlık / Title that appears in browser tab",
      placeholder: "Amcaoğlu - Fındık Fiyatları & Tarımsal Makineler",
      validation: (rule) => rule.required().max(60),
    }),

    // Logo
    defineField({
      name: "logo",
      title: "Logo - Şirket Logosu",
      type: "image",
      description: "Navbar'da görünen şirket logosu / Company logo that appears in Navbar",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),

    // Main Title
    defineField({
      name: "mainTitle",
      title: "Ana Başlık / Main Title",
      type: "string",
      description: "Ana şirket adı (Amcaoğlu) / Main company name (Amcaoğlu)",
      placeholder: "Amcaoğlu",
      validation: (rule) => rule.required(),
    }),

    // Main Subtitle
    defineField({
      name: "mainSubtitle",
      title: "Alt Başlık / Main Subtitle",
      type: "string",
      description: "Şirket adının altındaki metin / Text under the company name",
      placeholder: "Fındık & Makineler",
      validation: (rule) => rule.required(),
    }),

    // Description Metadata
    defineField({
      name: "descriptionMetadata",
      title: "Açıklama Meta Verisi / Description Metadata (SEO)",
      type: "text",
      description: "Arama motorlarında görünecek site açıklaması (150-160 karakter) / Site description for search engines (150-160 characters)",
      rows: 3,
      validation: (rule) => rule.required().max(160),
    }),

    // Main Page Background
    defineField({
      name: "mainPageBackground",
      title: "Ana Sayfa Arka Planı / Main Page Background",
      type: "image",
      description: "Ana sayfa arka plan resmi (opsiyonel - önerilen boyut: 1920x1080px) / Main page background image (optional - recommended size: 1920x1080px)",
      options: {
        hotspot: true,
      },
    }),

    // About Page Background
    defineField({
      name: "aboutPageBackground",
      title: "Hakkımızda Sayfası Arka Planı / About Page Background",
      type: "image",
      description: "Hakkımızda sayfası arka plan resmi (opsiyonel - önerilen boyut: 1920x1080px) / About page background image (optional - recommended size: 1920x1080px)",
      options: {
        hotspot: true,
      },
    }),

    // Prices Page Background
    defineField({
      name: "pricesPageBackground",
      title: "Fiyatlar Sayfası Arka Planı / Prices Page Background",
      type: "image",
      description: "Fiyatlar sayfası arka plan resmi (opsiyonel - önerilen boyut: 1920x1080px) / Prices page background image (optional - recommended size: 1920x1080px)",
      options: {
        hotspot: true,
      },
    }),

    // Equipment Page Background
    defineField({
      name: "equipmentPageBackground",
      title: "Makineler Sayfası Arka Planı / Equipment Page Background",
      type: "image",
      description: "Makineler sayfası arka plan resmi (opsiyonel - önerilen boyut: 1920x1080px) / Equipment page background image (optional - recommended size: 1920x1080px)",
      options: {
        hotspot: true,
      },
    }),

    // Contact Page Background
    defineField({
      name: "contactPageBackground",
      title: "İletişim Sayfası Arka Planı / Contact Page Background",
      type: "image",
      description: "İletişim sayfası arka plan resmi (opsiyonel - önerilen boyut: 1920x1080px) / Contact page background image (optional - recommended size: 1920x1080px)",
      options: {
        hotspot: true,
      },
    }),

    // Social Media Links
    defineField({
      name: "socialMediaLinks",
      title: "Sosyal Medya Bağlantıları / Social Media Links",
      type: "object",
      fields: [
        defineField({
          name: "facebook",
          title: "Facebook",
          type: "url",
          placeholder: "https://facebook.com/your-page",
        }),
        defineField({
          name: "instagram",
          title: "Instagram",
          type: "url",
          placeholder: "https://instagram.com/your-account",
        }),
        defineField({
          name: "youtube",
          title: "YouTube",
          type: "url",
          placeholder: "https://youtube.com/@your-channel",
        }),
        defineField({
          name: "tiktok",
          title: "TikTok",
          type: "url",
          placeholder: "https://tiktok.com/@your-account",
        }),
        defineField({
          name: "whatsapp",
          title: "WhatsApp",
          type: "string",
          description: "WhatsApp numarası veya linki / WhatsApp number or link",
          placeholder: "+90 555 123 4567",
        }),
        defineField({
          name: "twitter",
          title: "Twitter/X",
          type: "url",
          placeholder: "https://twitter.com/your-account",
        }),
        defineField({
          name: "linkedin",
          title: "LinkedIn",
          type: "url",
          placeholder: "https://linkedin.com/company/your-company",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "mainTitle",
      subtitle: "mainSubtitle",
      media: "logo",
    },
  },
});

