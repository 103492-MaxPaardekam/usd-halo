interface SectionJumpItem {
  label: string;
  href: string;
}

interface SectionJumpNavProps {
  items: SectionJumpItem[];
  className?: string;
}

export function SectionJumpNav({ items, className = "" }: SectionJumpNavProps) {
  return (
    <nav
      aria-label="Section quick navigation"
      className={`flex flex-wrap items-center gap-3 ${className}`}
    >
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="bg-white text-black/60 text-base font-medium px-7 py-2.5 rounded-full hover:text-black transition-colors duration-200"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
