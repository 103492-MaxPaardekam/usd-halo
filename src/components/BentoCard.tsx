import type { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  variant?: "light" | "dark";
  colSpan?: number;
  backgroundImage?: string;
  className?: string;
}

export function BentoCard({
  children,
  variant = "dark",
  colSpan,
  backgroundImage,
  className = "",
}: BentoCardProps) {
  const bgClass = variant === "dark" ? "bg-[#2B2644]" : "";
  const spanClass = colSpan ? `lg:col-span-${colSpan}` : "";

  return (
    <div
      className={`${bgClass} ${spanClass} rounded-2xl p-7 min-h-80 flex flex-col justify-between ${className}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
