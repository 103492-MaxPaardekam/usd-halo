import { Link } from "react-router-dom";

type InternalFooterLink = {
  label: string;
  to: string;
};

type ExternalFooterLink = {
  label: string;
  href: string;
};

type CompanyFooterLink = InternalFooterLink | ExternalFooterLink;

const productLinks: InternalFooterLink[] = [
  { label: "Network", to: "/network" },
  { label: "Ecosystem", to: "/ecosystem" },
  { label: "Rewards", to: "/rewards" },
];

const resourceLinks: InternalFooterLink[] = [
  { label: "Help Center", to: "/help" },
  { label: "News", to: "/news" },
  { label: "Documentation", to: "/help" },
];

const companyLinks: CompanyFooterLink[] = [
  { label: "About", to: "/about" },
  { label: "Careers", to: "/join" },
  { label: "Contact", href: "mailto:hello@usdhalo.io" },
];

export function Footer() {
  return (
    <footer className="bg-[#2B2644] px-6 py-16">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Logo + tagline */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <svg
                viewBox="0 0 256 256"
                fill="currentColor"
                className="w-7 h-7 text-white"
              >
                <path d="M 128.005 191.173 C 128.448 156.208 156.93 128 192 128 L 192 64 L 128 64 C 128 99.346 99.346 128 64 128 L 64 192 L 128 192 Z M 192 256 L 64 256 C 28.654 256 0 227.346 0 192 L 0 64 L 64 64 L 64 0 L 192 0 C 227.346 0 256 28.654 256 64 L 256 192 L 192 192 Z" />
              </svg>
              <span className="text-2xl font-medium tracking-tight text-white">
                Halo
              </span>
            </Link>
            <p className="text-white/60 text-base leading-relaxed max-w-xs">
              An automated, reward-powered digital dollar built for native
              passive earnings.
            </p>
          </div>

          {/* Product */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-white text-sm font-medium mb-4 uppercase tracking-wide">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/60 text-base hover:text-white focus-visible:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h4 className="text-white text-sm font-medium mb-4 uppercase tracking-wide">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/60 text-base hover:text-white focus-visible:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-white text-sm font-medium mb-4 uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  {"to" in link ? (
                    <Link
                      to={link.to}
                      className="text-white/60 text-base hover:text-white focus-visible:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-white/60 text-base hover:text-white focus-visible:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} USD Halo. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/40 text-sm">
            <Link
              to="/help"
              className="hover:text-white/60 focus-visible:text-white/60 transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              to="/help"
              className="hover:text-white/60 focus-visible:text-white/60 transition-colors duration-200"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
