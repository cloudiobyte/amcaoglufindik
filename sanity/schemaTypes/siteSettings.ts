import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "إعدادات الموقع / Site Settings",
  type: "document",
  fields: [
    // Favicon - أيقونة المتصفح
    defineField({
      name: "favicon",
      title: "Favicon - أيقونة المتصفح",
      type: "image",
      description: "الأيقونة التي تظهر في تاب المتصفح (يفضل 32x32px أو 64x64px)",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),

    // Site Title - عنوان الموقع في التاب
    defineField({
      name: "siteTitle",
      title: "Site Title - عنوان الموقع",
      type: "string",
      description: "العنوان الذي يظهر في تاب المتصفح",
      placeholder: "Amcaoğlu - Fındık Fiyatları & Tarımsal Makineler",
      validation: (rule) => rule.required().max(60),
    }),

    // Logo - شعار الشركة
    defineField({
      name: "logo",
      title: "Logo - شعار الشركة",
      type: "image",
      description: "شعار الشركة الذي يظهر في الـ Navbar",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),

    // Main Title - العنوان الرئيسي
    defineField({
      name: "mainTitle",
      title: "Main Title - العنوان الرئيسي",
      type: "string",
      description: "اسم الشركة الرئيسي (Amcaoğlu)",
      placeholder: "Amcaoğlu",
      validation: (rule) => rule.required(),
    }),

    // Main Subtitle - العنوان الفرعي
    defineField({
      name: "mainSubtitle",
      title: "Main Subtitle - العنوان الفرعي",
      type: "string",
      description: "النص الفرعي تحت اسم الشركة",
      placeholder: "Fındık & Makineler",
      validation: (rule) => rule.required(),
    }),

    // Description Metadata - وصف الموقع للـ SEO
    defineField({
      name: "descriptionMetadata",
      title: "Description Metadata - وصف الموقع (SEO)",
      type: "text",
      description: "وصف الموقع للظهور في محركات البحث (150-160 حرف)",
      rows: 3,
      validation: (rule) => rule.required().max(160),
    }),

    // Main Page Background - خلفية الصفحة الرئيسية
    defineField({
      name: "mainPageBackground",
      title: "Main Page Background - خلفية الصفحة الرئيسية",
      type: "image",
      description: "صورة خلفية الصفحة الرئيسية (اختياري - الحجم الموصى به: 1920x1080px)",
      options: {
        hotspot: true,
      },
    }),

    // About Page Background - خلفية صفحة من نحن
    defineField({
      name: "aboutPageBackground",
      title: "About Page Background - خلفية صفحة من نحن",
      type: "image",
      description: "صورة خلفية صفحة من نحن (اختياري - الحجم الموصى به: 1920x1080px)",
      options: {
        hotspot: true,
      },
    }),

    // Prices Page Background - خلفية صفحة الأسعار
    defineField({
      name: "pricesPageBackground",
      title: "Prices Page Background - خلفية صفحة الأسعار",
      type: "image",
      description: "صورة خلفية صفحة الأسعار (اختياري - الحجم الموصى به: 1920x1080px)",
      options: {
        hotspot: true,
      },
    }),

    // Equipment Page Background - خلفية صفحة المعدات
    defineField({
      name: "equipmentPageBackground",
      title: "Equipment Page Background - خلفية صفحة المعدات",
      type: "image",
      description: "صورة خلفية صفحة المعدات (اختياري - الحجم الموصى به: 1920x1080px)",
      options: {
        hotspot: true,
      },
    }),

    // Contact Page Background - خلفية صفحة التواصل
    defineField({
      name: "contactPageBackground",
      title: "Contact Page Background - خلفية صفحة التواصل",
      type: "image",
      description: "صورة خلفية صفحة التواصل (اختياري - الحجم الموصى به: 1920x1080px)",
      options: {
        hotspot: true,
      },
    }),

    // Social Media Links - روابط التواصل الاجتماعي
    defineField({
      name: "socialMediaLinks",
      title: "Social Media Links - روابط التواصل الاجتماعي",
      type: "object",
      fields: [
        defineField({
          name: "facebook",
          title: "Facebook - فيسبوك",
          type: "url",
          placeholder: "https://facebook.com/your-page",
        }),
        defineField({
          name: "instagram",
          title: "Instagram - إنستغرام",
          type: "url",
          placeholder: "https://instagram.com/your-account",
        }),
        defineField({
          name: "youtube",
          title: "YouTube - يوتيوب",
          type: "url",
          placeholder: "https://youtube.com/@your-channel",
        }),
        defineField({
          name: "tiktok",
          title: "TikTok - تيك توك",
          type: "url",
          placeholder: "https://tiktok.com/@your-account",
        }),
        defineField({
          name: "whatsapp",
          title: "WhatsApp - واتساب",
          type: "string",
          description: "رقم الواتساب أو رابط الواتساب",
          placeholder: "+90 555 123 4567",
        }),
        defineField({
          name: "twitter",
          title: "Twitter/X - تويتر",
          type: "url",
          placeholder: "https://twitter.com/your-account",
        }),
        defineField({
          name: "linkedin",
          title: "LinkedIn - لينكد إن",
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

