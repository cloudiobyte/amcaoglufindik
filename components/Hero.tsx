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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">{title}</h1>
        <p className="text-base md:text-lg mb-6 text-white/90 drop-shadow-md">{subtitle}</p>
        {buttonText && buttonLink && (
          <Link
            href={buttonLink}
            className="inline-block backdrop-blur-md bg-white/90 text-hazel font-semibold px-6 py-2 rounded-lg hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg text-sm"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
}
