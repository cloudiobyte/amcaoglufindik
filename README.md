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
git clone https://github.com/shamflare/amcaoglu.git
cd amcaoglu
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

## 🐳 النشر على Hetzner Server باستخدام Docker

### المتطلبات على السيرفر
- Docker
- Docker Compose
- Git

### خطوات النشر

#### 1. على السيرفر، قم بتثبيت Docker و Docker Compose

```bash
# تحديث النظام
sudo apt update && sudo apt upgrade -y

# تثبيت Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# تثبيت Docker Compose
sudo apt install docker-compose -y

# إضافة المستخدم لمجموعة docker
sudo usermod -aG docker $USER
```

#### 2. استنساخ المشروع

```bash
git clone https://github.com/shamflare/amcaoglu.git
cd amcaoglu
```

#### 3. إعداد المتغيرات البيئية

أنشئ ملف `.env` في الجذر:

```bash
nano .env
```

أضف المتغيرات التالية:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
NODE_ENV=production
PORT=3000
```

#### 4. بناء وتشغيل التطبيق

```bash
# بناء الصورة
docker-compose build

# تشغيل الحاوية
docker-compose up -d
```

#### 5. التحقق من التشغيل

```bash
# عرض الحاويات العاملة
docker-compose ps

# عرض السجلات
docker-compose logs -f
```

الموقع الآن يعمل على `http://your-server-ip:3000`

### أوامر إضافية مفيدة

```bash
# إيقاف التطبيق
docker-compose stop

# إعادة تشغيل التطبيق
docker-compose restart

# إيقاف وحذف الحاويات
docker-compose down

# تحديث التطبيق
git pull
docker-compose build
docker-compose up -d
```

## 🔧 إعداد Nginx Reverse Proxy (اختياري ولكن موصى به)

لربط الموقع بدومين واستخدام HTTPS:

```bash
# تثبيت Nginx
sudo apt install nginx -y

# إنشاء ملف إعداد الموقع
sudo nano /etc/nginx/sites-available/amcaoglu
```

أضف الإعدادات التالية:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# تفعيل الإعداد
sudo ln -s /etc/nginx/sites-available/amcaoglu /etc/nginx/sites-enabled/

# اختبار الإعداد
sudo nginx -t

# إعادة تشغيل Nginx
sudo systemctl restart nginx
```

### تثبيت SSL Certificate (Let's Encrypt)

```bash
# تثبيت Certbot
sudo apt install certbot python3-certbot-nginx -y

# الحصول على شهادة SSL
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# تجديد تلقائي للشهادة
sudo certbot renew --dry-run
```

## 📝 إدارة المحتوى عبر Sanity Studio

للوصول إلى لوحة Sanity Admin:

```
https://yourdomain.com/admin
```

أو محلياً:
```
http://localhost:3000/admin
```

## 📂 هيكل المشروع

```
amcaoglu/
├── app/                    # Next.js App Router
│   ├── (site)/            # صفحات الموقع العامة
│   ├── admin/             # Sanity Studio
│   └── globals.css        # الأنماط العامة
├── components/            # مكونات React القابلة لإعادة الاستخدام
├── lib/                   # دوال مساعدة
│   ├── translations.ts   # نظام الترجمة
│   └── sanity/           # إعدادات Sanity
├── public/               # ملفات ثابتة
├── sanity/               # Schemas لـ Sanity
├── Dockerfile           # إعداد Docker
├── docker-compose.yml   # إعداد Docker Compose
└── .dockerignore       # ملفات مستثناة من Docker

```

## 🛠️ السكريبتات المتاحة

```bash
npm run dev          # تشغيل الموقع في وضع التطوير
npm run build        # بناء الموقع للإنتاج
npm run start        # تشغيل الموقع المبني
npm run lint         # فحص الكود
```

## 📧 الدعم

للأسئلة والدعم، يرجى التواصل عبر:
- GitHub Issues: [shamflare/amcaoglu](https://github.com/shamflare/amcaoglu/issues)

## 📄 الترخيص

هذا المشروع خاص بشركة Amcaoğlu.

---

صنع بـ ❤️ بواسطة Shamflare
