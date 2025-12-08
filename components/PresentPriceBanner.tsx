'use client';

interface PresentPriceBannerProps {
  productDescription: string;
  brutPrice: number;
  netPrice: number;
  updatedAt: string;
}

export default function PresentPriceBanner({
  productDescription,
  brutPrice,
  netPrice,
  updatedAt,
}: PresentPriceBannerProps) {
  // Format date and time in Turkish format
  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${day}.${month}.${year} SAAT: ${hours}:${minutes}`;
  };

  return (
    <div className="sticky top-[72px] z-40 w-full py-4">
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .animate-blink {
          animation: blink 2s ease-in-out infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 rounded-2xl shadow-2xl border-4 border-yellow-600 transform hover:scale-[1.02] transition-transform duration-300" style={{
          boxShadow: '0 20px 60px rgba(234, 179, 8, 0.4), 0 10px 30px rgba(234, 179, 8, 0.3)'
        }}>
          <div className="px-4 py-4">
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              {/* Date/Time */}
              <div className="font-bold">
                <span className="animate-blink text-red-800 text-sm sm:text-base">{formatDateTime(updatedAt)}</span>
                <span className="text-black text-sm sm:text-base"> Tarihli</span>
              </div>
              
              {/* Product Description */}
              <div className="font-bold text-black text-sm sm:text-base">
                {productDescription}
              </div>
              
              {/* Prices */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-semibold">
                <div className="flex items-center gap-1">
                  <span className="text-xs sm:text-base text-black">▸ Brüt:</span>
                  <span className="text-sm sm:text-lg font-bold animate-blink text-red-800">
                    {brutPrice.toFixed(2)}
                  </span>
                  <span className="text-sm sm:text-lg font-bold text-black"> TL/KG</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <span className="text-xs sm:text-base text-black">▸ Net:</span>
                  <span className="text-sm sm:text-lg font-bold animate-blink text-red-800">
                    {netPrice.toFixed(2)}
                  </span>
                  <span className="text-sm sm:text-lg font-bold text-black"> TL/KG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
