import { getSiteSettings } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';

export const runtime = 'edge';
export const size = { width: 48, height: 48 };
export const contentType = 'image/png';

export default async function Icon() {
  try {
    const siteSettings = await getSiteSettings();
    
    // إذا كان هناك favicon من Sanity
    if (siteSettings?.favicon) {
      // نستخدم fit: 'crop' ليملأ المساحة بالكامل
      const faviconUrl = urlFor(siteSettings.favicon)
        .width(48)
        .height(48)
        .fit('crop')
        .crop('center')
        .format('png')
        .quality(100)
        .url();
      
      const imageResponse = await fetch(faviconUrl);
      if (imageResponse.ok) {
        const imageBuffer = await imageResponse.arrayBuffer();
        
        return new Response(imageBuffer, {
          headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=86400',
          },
        });
      }
    }
  } catch (error) {
    console.error('Error loading favicon:', error);
  }
  
  // fallback: رجوع بسيط إذا فشل
  return new Response(null, { status: 404 });
}
