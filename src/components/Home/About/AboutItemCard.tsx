import { useState, type ElementType } from "react";
import { motion } from "framer-motion";

interface AboutItemCardProps {
  Icon: ElementType;
  title: string;
  description?: string;
  backgroundClass?: string;
}

interface AboutItemCardP {
  item: AboutItemCardProps;
}

function AboutItemCard({ item }: AboutItemCardP) {
  const [isHovered, setIsHovered] = useState(false);
  const { Icon } = item;

  return (
    <motion.div
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[#CC5500]/25"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Colored background wash on hover — unique per card */}
      <motion.div
        className={`absolute inset-0 rounded-2xl ${item.backgroundClass}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        aria-hidden
      />

      {/* Icon container */}
      <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#CC5500]/20 bg-[#CC5500]/[0.1] transition duration-300 group-hover:border-[#CC5500]/45 group-hover:bg-[#CC5500]/20">
        <Icon className="h-6 w-6 text-[#CC5500]" strokeWidth={1.8} />
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-base font-semibold text-copy">{item.title}</h3>

      {/* Description */}
      {item.description && (
        <p className="relative z-10 mt-2 flex-1 font-maitree text-sm leading-relaxed text-copy/70">
          {item.description}
        </p>
      )}

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 z-10 h-px w-0 bg-gradient-to-r from-[#CC5500] to-[#CC5500]/20 transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}

export { AboutItemCard };
