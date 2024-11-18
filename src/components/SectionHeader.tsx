import { motion } from 'framer-motion';

interface SectionHeaderProps {
  sectionHeader: string;
  subSectionHeader: string;
  headerDescription?: string;
}

export default function SectionHeader({
  sectionHeader,
  subSectionHeader,
  headerDescription,
}: SectionHeaderProps) {
  return (
    <motion.div 
      className="text-center mb-12"
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
      <motion.p 
        className="text-sm text-[#CC5500] mb-2"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
          }
        }}
      >
        {subSectionHeader}
      </motion.p>

      <motion.h2 
        className="text-4xl font-bold text-white mb-4"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
          }
        }}
      >
        {sectionHeader}
      </motion.h2>

      <motion.div 
        className="w-16 h-1 bg-[#CC5500] mx-auto mb-6"
        variants={{
          hidden: { scaleX: 0 },
          visible: { 
            scaleX: 1,
            transition: { 
              duration: 0.8,
              ease: "easeInOut"
            }
          }
        }}
        style={{ originX: 0.5 }}
      />

      {headerDescription && (
        <motion.p 
          className="text-[#a5a5ac] max-w-2xl mx-auto"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
        >
          {headerDescription}
        </motion.p>
      )}
    </motion.div>
  );
}