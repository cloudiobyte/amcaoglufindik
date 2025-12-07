import { getSiteSettings } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function AppleIcon() {
  try {
    const siteSettings = await getSiteSettings();
    
    if (siteSettings?.favicon) {
      const iconUrl = urlFor(siteSettings.favicon).width(180).height(180).format('png').url();
      
      const imageResponse = await fetch(iconUrl);
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
    console.error('Error loading apple icon:', error);
  }
  
  return new Response(null, { status: 404 });
}
