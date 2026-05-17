import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CTAButtonProps {
  label: string;
  variant?: "standard" | "with-arrow" | "text-link";
  href?: string;
  to?: string;
  responsive?: boolean;
  onClick?: () => void;
}

export function CTAButton({
  label,
  variant = "standard",
  href,
  to,
  responsive = false,
  onClick,
}: CTAButtonProps) {
  if (variant === "text-link") {
    if (to) {
      return (
        <Link
          to={to}
          className="inline-flex items-center gap-3 text-black text-base font-medium group"
        >
          <div className="w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center group-hover:bg-white transition-colors duration-200">
            <ArrowRight className="w-4 h-4 text-black" />
          </div>
          {label}
        </Link>
      );
    }
    const Tag = href ? "a" : "button";
    return (
      <Tag
        href={href}
        onClick={onClick}
        className="inline-flex items-center gap-3 text-black text-base font-medium group"
      >
        <div className="w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center group-hover:bg-white transition-colors duration-200">
          <ArrowRight className="w-4 h-4 text-black" />
        </div>
        {label}
      </Tag>
    );
  }

  const innerContent =
    variant === "with-arrow" ? (
      <>
        {label}
        <div className="bg-white rounded-full p-2">
          <ArrowRight className="w-5 h-5 text-black" />
        </div>
      </>
    ) : (
      label
    );

  const className =
    variant === "with-arrow"
      ? `inline-flex items-center gap-3 bg-black text-white ${responsive ? "text-base md:text-lg" : "text-base"} font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200`
      : "bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200";

  if (to) {
    return (
      <Link to={to} className={className}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {innerContent}
    </button>
  );
}
