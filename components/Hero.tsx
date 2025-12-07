"use client";

import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function Hero({ title, subtitle, buttonText, buttonLink }: HeroProps) {
  return (
    <div className="text-white relative">
      {/* Background with gradient and blur */}
      <div className="absolute inset-0 gradient-hazel opacity-80"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md">{subtitle}</p>
        {buttonText && buttonLink && (
          <Link
            href={buttonLink}
            className="inline-block backdrop-blur-md bg-white/90 text-hazel font-semibold px-8 py-3 rounded-lg hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
}
