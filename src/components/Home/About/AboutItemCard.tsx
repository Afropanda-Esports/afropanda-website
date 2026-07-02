import type { ElementType } from "react";
import { motion } from "framer-motion";

interface AboutItemCardProps {
  Icon: ElementType;
  title: string;
  description?: string;
  accentClass?: string;
}

interface AboutItemCardP {
  item: AboutItemCardProps;
  index: number;
}

const iconBgColors = [
  "bg-brand-orange/10 text-brand-orange border-brand-orange/20",
  "bg-brand-orange/10 text-brand-orange border-brand-orange/20",
  "bg-brand-orange/10 text-brand-orange border-brand-orange/20",
  "bg-brand-orange/10 text-brand-orange border-brand-orange/20",
];

function AboutItemCard({ item, index }: AboutItemCardP) {
  const { Icon } = item;
  const iconColor = iconBgColors[index % iconBgColors.length];

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-neutral-100 bg-[var(--surface)] p-7 transition-all duration-300 hover:shadow-card hover:border-brand-orange/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      {/* Hover accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-brand-orange/0 transition-colors duration-300 group-hover:bg-brand-orange" />

      <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border ${iconColor} transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow`}>
        <Icon className="h-6 w-6" strokeWidth={1.8} />
      </div>

      <h3 className="heading-sm !text-xl text-[var(--text-primary)]">{item.title}</h3>

      {item.description && (
        <p className="mt-3 text-sm leading-6 text-neutral-500 font-body">
          {item.description}
        </p>
      )}
    </motion.div>
  );
}

export { AboutItemCard };
