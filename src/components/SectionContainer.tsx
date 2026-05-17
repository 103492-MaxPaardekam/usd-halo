import type { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  py?: string;
}

export function SectionContainer({
  children,
  className = "",
  py = "py-24",
}: SectionContainerProps) {
  return (
    <section className={`bg-[#F5F5F5] px-6 ${py} ${className}`}>
      <div className="max-w-[88rem] mx-auto">{children}</div>
    </section>
  );
}
