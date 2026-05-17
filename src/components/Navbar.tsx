import { Link, useLocation } from "react-router-dom";
import { LogoIcon } from "./LogoIcon";
import { CTAButton } from "./CTAButton";

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
    <nav className={`${positionClass} px-6 py-5`}>
      <div className="max-w-[88rem] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
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
              className={`hover:text-black transition-colors duration-200 ${
                location.pathname === item.to ? "text-black" : ""
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
