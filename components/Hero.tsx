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
    <div className="text-white gradient-hazel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 text-hazel-light">{subtitle}</p>
        {buttonText && buttonLink && (
          <Link
            href={buttonLink}
            className="inline-block bg-white text-hazel font-semibold px-8 py-3 rounded-lg hover:bg-hazel-light transition-colors duration-200"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
}
