import { useState } from "react";
import { motion } from "framer-motion";

interface AboutItemCardProps {
  icon: string;
  title: string;
  description?: string;
  backgroundUrl?: string;
}

interface AboutItemCardP {
  item: AboutItemCardProps;
}

function AboutItemCard({ item }: AboutItemCardP) {
  const [isHovered, setIsHovered] = useState(false);

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
      {/* Background image overlay — fades in on hover */}
      {item.backgroundUrl && (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${item.backgroundUrl})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.12 : 0 }}
          transition={{ duration: 0.35 }}
          aria-hidden
        />
      )}

      {/* Orange gradient wash on hover — sits above the image */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#CC5500]/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        aria-hidden
      />

      {/* Icon container */}
      <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#CC5500]/20 bg-[#CC5500]/[0.1] transition duration-300 group-hover:border-[#CC5500]/45 group-hover:bg-[#CC5500]/20">
        <img src={item.icon} alt="" aria-hidden className="h-6 w-6 object-contain" />
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
