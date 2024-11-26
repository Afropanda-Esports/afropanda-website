import { motion } from "framer-motion";
import { aboutItems } from "../../../constant";
import { AboutItemCard } from './AboutItemCard';
import { DecorativeElement, GlowingCorners } from "../../Design";


export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section  className="relative bg-[#191825] py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full"
               style={{
                 backgroundImage: `linear-gradient(to right, #CC5500 1px, transparent 1px),
                                 linear-gradient(to bottom, #CC5500 1px, transparent 1px)`,
                 backgroundSize: '60px 60px'
               }} />
        </div>
      </div>

      
      <GlowingCorners />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Cards Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 justify-center order-last md:order-none"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {aboutItems.map((item, index) => (
              <AboutItemCard key={index} item={item} />
            ))}
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="space-y-8 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Decorative Line */}
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#CC5500] to-transparent opacity-50" />

            <motion.div 
              variants={textVariants}
              className="flex items-center space-x-2"
            >
              <span className="inline-block w-8 h-[2px] bg-[#CC5500]" />
              <p className="text-sm text-[#CC5500] font-mono tracking-wider uppercase">Who we are</p>
            </motion.div>

            <div className="grid gap-y-6 pl-4">
              <motion.h2
                variants={textVariants}
                className="text-4xl font-bold text-white relative inline-block"
              >
                <span className="relative z-10">Level Up Your Game With Us</span>
                <span className="absolute -left-2 top-0 w-1 h-full bg-[#CC5500] opacity-50" />
              </motion.h2>

              <motion.div
                variants={textVariants}
                className="relative"
              >
                <p className="text-[#a5a5ac] text-lg leading-relaxed">
                  AfroPanda Esports is committed to developing esports in Nigeria,
                  nurturing world-class talents, and promoting gaming as a
                  respected profession.
                </p>
                <div className="absolute -left-4 top-0 w-1 h-full bg-[#CC5500] opacity-25" />
              </motion.div>

              <motion.div
                variants={textVariants}
                className="relative space-y-4"
              >
                <p className="text-[#a5a5ac] leading-relaxed">
                  Our mission is to create opportunities for Nigerian gamers to
                  compete at the highest levels while building a sustainable
                  esports ecosystem.
                </p>
                <div className="absolute -left-4 top-0 w-1 h-full bg-[#CC5500] opacity-25" />
              </motion.div>

              {/* Stats Highlight */}
              <motion.div 
                variants={textVariants}
                className="grid grid-cols-2 gap-6 mt-8"
              >
                <div className="border border-[#CC5500]/20 rounded-lg p-4 bg-black/20 hover:border-[#CC5500]/50 transition-colors duration-300">
                  <h3 className="text-[#CC5500] text-2xl font-bold">500+</h3>
                  <p className="text-[#a5a5ac] text-sm">Active Players</p>
                </div>
                <div className="border border-[#CC5500]/20 rounded-lg p-4 bg-black/20 hover:border-[#CC5500]/50 transition-colors duration-300">
                  <h3 className="text-[#CC5500] text-2xl font-bold">50+</h3>
                  <p className="text-[#a5a5ac] text-sm">Tournaments Hosted</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <DecorativeElement />
    </section>
  );
}