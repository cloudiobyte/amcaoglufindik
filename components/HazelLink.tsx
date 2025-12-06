"use client";

import Link from "next/link";

interface HazelLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function HazelLink({ href, children, className = "" }: HazelLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-block font-medium text-hazel hover:text-hazel-dark transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
