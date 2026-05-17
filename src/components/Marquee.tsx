import React from "react";

export interface MarqueeBrand {
  name: string;
  fontFamily: string;
  fontWeight: number;
  letterSpacing: string;
  fontSize: string;
  extraClasses?: string;
}

interface MarqueeProps {
  brands: MarqueeBrand[];
  speed?: number;
  opacity?: 60 | 50;
  gap?: string;
  className?: string;
}

export function Marquee({
  brands,
  speed = 22,
  opacity = 60,
  gap = "mx-7",
  className = "",
}: MarqueeProps) {
  const trackClass =
    opacity === 50 ? "marquee-track-backers" : "marquee-track-hero";
  const textClass = opacity === 50 ? "text-black/50" : "text-black/60";

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .${trackClass} {
              display: flex;
              width: max-content;
              animation: ${trackClass}-anim ${speed}s linear infinite;
            }
            @keyframes ${trackClass}-anim {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `,
        }}
      />
      <div className={`overflow-hidden ${className}`}>
        <div className={trackClass}>
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {brands.map((brand) => (
                <span
                  key={brand.name}
                  className={`${gap} shrink-0 ${textClass} whitespace-nowrap ${brand.extraClasses ?? ""}`}
                  style={{
                    fontFamily: brand.fontFamily,
                    fontWeight: brand.fontWeight,
                    letterSpacing: brand.letterSpacing,
                    fontSize: brand.fontSize,
                  }}
                >
                  {brand.name}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
