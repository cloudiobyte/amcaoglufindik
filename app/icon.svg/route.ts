import { getSiteSettings } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';

export const runtime = 'edge';

export async function GET() {
  try {
    const siteSettings = await getSiteSettings();
    
    if (siteSettings?.favicon) {
      // Use crop to fill the space / Alanı doldurmak için crop kullanıyoruz
      const imageUrl = urlFor(siteSettings.favicon)
        .width(64)
        .height(64)
        .fit('crop')
        .crop('center')
        .format('png')
        .url();
      
      // Return SVG wrapper around image for clarity / Netlik için resim etrafında SVG wrapper dönüyoruz
      const svg = `<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><image href="${imageUrl}" width="64" height="64" /></svg>`;
      
      return new Response(svg, {
        headers: {
          'Content-Type': 'image/svg+xml',
          'Cache-Control': 'public, max-age=86400',
        },
      });
    }
  } catch (error) {
    console.error('Error loading SVG icon:', error);
  }
  
  return new Response(null, { status: 404 });
}
