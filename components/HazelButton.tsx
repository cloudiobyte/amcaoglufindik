"use client";

interface HazelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function HazelButton({ 
  children, 
  onClick, 
  type = "button",
  className = "" 
}: HazelButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-hazel text-white font-semibold py-3 px-6 rounded-md hover:bg-hazel-dark transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
