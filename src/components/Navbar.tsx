import { Link, useLocation } from "react-router-dom";
import { LogoIcon } from "./LogoIcon";
import { CTAButton } from "./CTAButton";
import { trackEvent } from "../lib/analytics";

const navItems = [
  { label: "Network", to: "/network" },
  { label: "Ecosystem", to: "/ecosystem" },
  { label: "Rewards", to: "/rewards" },
  { label: "Help", to: "/help" },
  { label: "News", to: "/news" },
];

interface NavbarProps {
  variant?: "absolute" | "static";
}

export function Navbar({ variant = "static" }: NavbarProps) {
  const location = useLocation();
  const positionClass =
    variant === "absolute"
      ? "absolute top-0 left-0 right-0 z-20"
      : "relative z-20";

  return (
    <nav
      className={`${positionClass} px-6 py-5`}
      aria-label="Primary navigation"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-5 focus:left-6 focus:z-50 bg-black text-white text-base font-medium px-7 py-2.5 rounded-full transition-colors duration-200"
      >
        Skip to content
      </a>
      <div className="max-w-[88rem] mx-auto flex items-center justify-between">
        <Link to="/" aria-label="Halo home" className="flex items-center gap-2">
          <LogoIcon />
          <span className="text-2xl font-medium tracking-tight text-black">
            Halo
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-base text-gray-700 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              aria-current={location.pathname === item.to ? "page" : undefined}
              onClick={() =>
                trackEvent("nav_click", {
                  label: item.label,
                  to: item.to,
                  from: location.pathname,
                })
              }
              className={`transition-colors duration-200 rounded-full px-3 py-1 -mx-3 -my-1 ${
                location.pathname === item.to
                  ? "text-black bg-black/5"
                  : "hover:text-black focus-visible:text-black focus-visible:bg-black/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <CTAButton label="Open Wallet" to="/wallet" />
      </div>
    </nav>
  );
}
