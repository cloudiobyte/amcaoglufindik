# Amcaoğlu - موقع البندق والمعدات الزراعية

موقع ويب حديث لشركة Amcaoğlu متخصص في تجارة البندق وبيع المعدات الزراعية، مبني بـ Next.js 16 و Sanity CMS.

## 🚀 التقنيات المستخدمة

- **Next.js 16** - React Framework
- **React 19** - Frontend Library
- **Sanity CMS** - Content Management
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type Safety

## 🌍 المميزات

- ✅ متعدد اللغات (تركي/إنجليزي)
- ✅ تصميم متجاوب (Responsive)
- ✅ إدارة محتوى ديناميكية عبر Sanity
- ✅ أسعار البندق المحدثة
- ✅ عرض المعدات الزراعية
- ✅ نموذج تواصل
- ✅ تحسين SEO

## 📦 التثبيت والتشغيل المحلي

### المتطلبات
- Node.js 20 أو أحدث
- npm أو yarn

### الخطوات

1. **استنساخ المشروع**
```bash
git clone https://github.com/cloudiobyte/amcaoglufindik.git
cd amcaoglufindik
```

2. **تثبيت الحزم**
```bash
npm install
```

3. **إعداد المتغيرات البيئية**

أنشئ ملف `.env.local` في الجذر:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
```

4. **تشغيل الموقع**
```bash
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفح.

## 🚀 النشر على Vercel (موصى به)

### لماذا Vercel؟
- ✅ مُحسّن لـ Next.js (نفس الشركة)
- ✅ نشر تلقائي من GitHub
- ✅ دعم كامل لـ Node 20+
- ✅ تكامل ممتاز مع Sanity CMS
- ✅ شبكة CDN عالمية
- ✅ مجاني 100%

### خطوات النشر

#### 1. إنشاء حساب Vercel
1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل الدخول باستخدام حساب GitHub

#### 2. إضافة مشروع جديد
1. اضغط **"Add New Project"**
2. اختر repository: `cloudiobyte/amcaoglufindik`
3. اضغط **"Import"**

#### 3. إعدادات المشروع
```
Framework Preset: Next.js
Root Directory: ./ (تلقائي)
Build Command: npm run build (تلقائي)
Output Directory: .next (تلقائي)
Install Command: npm install (تلقائي)
Node Version: 20.x (تلقائي)
```

#### 4. إضافة Environment Variables
في قسم "Environment Variables"، أضف:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` = `your_project_id`
- `NEXT_PUBLIC_SANITY_DATASET` = `production`
- `SANITY_API_TOKEN` = `your_token` (إن وجد)

#### 5. النشر
اضغط **"Deploy"** وانتظر دقيقة واحدة! 🎉

الموقع سيكون متاحاً على: `https://your-project.vercel.app`

### ربط الدومين المخصص

#### في Vercel:
1. اذهب إلى **Settings → Domains**
2. أضف دومينك (مثل: `amcaoglu.com`)
3. انسخ السجلات المطلوبة

#### في Cloudflare DNS:
1. اذهب إلى **DNS Settings**
2. أضف سجل CNAME:
   - **Type:** `CNAME`
   - **Name:** `@` (أو `www`)
   - **Target:** `cname.vercel-dns.com`
   - **Proxy status:** DNS only (غير مفعّل)

### التحديثات التلقائية
كل `git push` إلى `main` سينشئ نشر جديد تلقائياً! ✨

## 📝 إدارة المحتوى عبر Sanity Studio

للوصول إلى لوحة Sanity Admin:

**على Vercel:**
```
https://yourdomain.com/admin
```

**محلياً:**
```
http://localhost:3000/admin
```

## 📂 هيكل المشروع

```
amcaoglufindik/
├── app/                    # Next.js App Router
│   ├── (site)/            # صفحات الموقع العامة
│   │   ├── [locale]/      # صفحات متعددة اللغات
│   │   │   ├── about/     # صفحة من نحن
│   │   │   ├── contact/   # صفحة اتصل بنا
│   │   │   ├── equipment/ # صفحة المعدات
│   │   │   └── prices/    # صفحة الأسعار
│   ├── admin/             # Sanity Studio
│   └── globals.css        # الأنماط العامة
├── components/            # مكونات React
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LanguageSwitcher.tsx
│   └── Navbar.tsx
├── lib/                   # دوال مساعدة
│   ├── translations.ts    # نظام الترجمة
│   └── sanity/           # إعدادات Sanity
│       ├── client.ts
│       ├── image.ts
│       └── queries.ts
├── sanity/               # Schemas لـ Sanity
│   └── schemaTypes/
├── public/               # ملفات ثابتة
├── vercel.json          # إعدادات Vercel
└── package.json         # التبعيات والسكريبتات
```

## 🛠️ السكريبتات المتاحة

```bash
npm run dev          # تشغيل الموقع في وضع التطوير
npm run build        # بناء الموقع للإنتاج
npm run start        # تشغيل الموقع المبني
npm run lint         # فحص الكود
npm run sanity:deploy # نشر Sanity Studio
```

## 🌐 اللغات المدعومة

- 🇹🇷 التركية (tr)
- 🇬🇧 الإنجليزية (en)

يتم تبديل اللغة تلقائياً عبر URL: `/tr` أو `/en`

## 📧 الدعم

للأسئلة والدعم، يرجى التواصل عبر:
- GitHub Issues: [cloudiobyte/amcaoglufindik](https://github.com/cloudiobyte/amcaoglufindik/issues)

## 📄 الترخيص

هذا المشروع خاص بشركة Amcaoğlu.

---

صنع بـ ❤️ للنشر على Vercel
