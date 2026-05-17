import type { ReactNode } from "react";

interface VideoCardProps {
  src: string;
  children: ReactNode;
  variant?: "hero" | "section";
  className?: string;
}

export function VideoCard({
  src,
  children,
  variant = "section",
  className = "",
}: VideoCardProps) {
  if (variant === "hero") {
    return (
      <div
        className={`relative w-full rounded-2xl overflow-hidden ${className}`}
        style={{ height: "calc(100vh - 96px)" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover absolute inset-0 w-full h-full"
        >
          <source src={src} type="video/mp4" />
        </video>
        <div className="relative z-10 flex flex-col items-start justify-start h-full p-12 pt-36">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-3xl overflow-hidden min-h-[720px] w-full ${className}`}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="object-cover absolute inset-0 w-full h-full"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="relative z-10 p-10 md:p-12 h-full flex flex-col justify-end">
        {children}
      </div>
    </div>
  );
}
