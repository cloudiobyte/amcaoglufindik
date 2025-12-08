import { getSiteSettings } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';

export const runtime = 'edge';
export const size = { width: 48, height: 48 };
export const contentType = 'image/png';

export default async function Icon() {
  try {
    const siteSettings = await getSiteSettings();
    
    // If there is a favicon from Sanity / Sanity'den favicon varsa
    if (siteSettings?.favicon) {
      // Use fit: 'crop' to fill the space completely / Alanı tamamen doldurmak için fit: 'crop' kullanıyoruz
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
  
  // Fallback: Simple fallback if it fails / Başarısız olursa basit yedek
  return new Response(null, { status: 404 });
}
