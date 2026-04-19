import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}

export default function FadeReveal({
  children,
  className,
  delay = 0,
  distance = 24,
}: FadeRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    amount: 0.2,
    margin: "-10% 0px -10% 0px",
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
