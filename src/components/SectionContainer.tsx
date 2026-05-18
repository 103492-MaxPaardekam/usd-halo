import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

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
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={`bg-[#F5F5F5] px-6 ${py} ${className}`}
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={
        reduceMotion ? { duration: 0 } : { duration: 0.45, ease: "easeOut" }
      }
    >
      <div className="max-w-[88rem] mx-auto">{children}</div>
    </motion.section>
  );
}
