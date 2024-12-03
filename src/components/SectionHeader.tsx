import { motion } from 'framer-motion';

interface SectionHeaderProps {
  sectionHeader?: string;
  subSectionHeader?: string;
  headerDescription?: string;
}

export default function SectionHeader({
  sectionHeader,
  subSectionHeader,
  headerDescription,
}: SectionHeaderProps) {
  return (
    <motion.div
      className="text-center mb-12 relative font-poppins"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#CC5500] opacity-5 blur-3xl rounded-full" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#CC5500]/20 to-transparent" />
      
      {/* Corner Decorations */}
      <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#CC5500]/30" />
      <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#CC5500]/30" />
      <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#CC5500]/30" />
      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#CC5500]/30" />

      {/* Sub Header */}
      <motion.div
        className="inline-flex items-center gap-3 mb-2"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
          }
        }}
      >
        <span className="h-px w-4 bg-[#CC5500]" />
        <p className="text-sm text-[#CC5500] font-mono tracking-wider uppercase">
          {subSectionHeader}
        </p>
        <span className="h-px w-4 bg-[#CC5500]" />
      </motion.div>

      {/* Main Header */}
      <motion.div
        className="relative inline-block"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
          }
        }}
      >
        <h2 className="text-4xl font-bold text-white mb-4 relative z-10">
          {sectionHeader}
        </h2>
        <motion.div
          className="absolute -inset-x-6 top-1/2 -translate-y-1/2 h-1/2 bg-[#CC5500]/5 -skew-x-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Animated Separator */}
      <div className="relative h-1 w-24 mx-auto mb-6">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CC5500] to-transparent"
          variants={{
            hidden: { scaleX: 0, opacity: 0 },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: "easeInOut"
              }
            }
          }}
          style={{ originX: 0.5 }}
        />
        <motion.div
          className="absolute inset-0 bg-[#CC5500]/50 blur-sm"
          variants={{
            hidden: { scaleX: 0, opacity: 0 },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: {
                duration: 0.8,
                delay: 0.1,
                ease: "easeInOut"
              }
            }
          }}
          style={{ originX: 0.5 }}
        />
      </div>

      {/* Description */}
      {headerDescription && (
        <motion.div
          className="relative"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
        >
          <p className="text-[#a5a5ac] max-w-2xl mx-auto relative z-10">
            {headerDescription}
          </p>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CC5500]/5 to-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>
      )}

      {/* Side Decorations */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12">
        <motion.div
          className="w-full h-full bg-gradient-to-b from-transparent via-[#CC5500]/30 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-12">
        <motion.div
          className="w-full h-full bg-gradient-to-b from-transparent via-[#CC5500]/30 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
}