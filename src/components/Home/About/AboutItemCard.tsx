import { useState } from "react";
import { motion } from "framer-motion";
// import { Trophy, Users, Video, Search } from "lucide-react";

// About Item Card Component
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
      className="relative bg-[#222035] rounded-xl overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glowing Border Effect */}
      <div className="absolute inset-0 border border-[#CC5500]/20 rounded-xl group-hover:border-[#CC5500]/50 transition-colors duration-300" />

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#CC5500]/30 rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#CC5500]/30 rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#CC5500]/30 rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#CC5500]/30 rounded-br-xl" />

      {/* Background Image with Overlay */}
      {item.backgroundUrl && (
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.2 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundImage: `url(${item.backgroundUrl})`,
          }}
        />
      )}

      {/* Hover Gradient */}
      <motion.div className="absolute inset-0 bg-gradient-to-t from-[#CC5500]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content Container */}
      <div className="relative z-10 p-6 flex flex-col items-center space-y-4">
        {/* Icon Container */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-[#CC5500]/20 blur-md rounded-full" />
          <img src={item.icon} alt="About" className="relative z-10" />
        </motion.div>

        {/* Title */}
        <h3 className="text-base font-bold text-white relative">
          {item.title}
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-px bg-[#CC5500]/50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </h3>

        {/* Description */}
        <p className="text-gray-400 relative z-10">{item.description}</p>
      </div>
    </motion.div>
  );
}

export { AboutItemCard };
