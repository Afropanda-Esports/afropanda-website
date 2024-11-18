import { aboutItems } from "../../constant";
import AboutItemCard from "./AboutItemCard";
import { motion } from "framer-motion";

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
    <section id="about" className="bg-[#191825] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[80vh] items-center gap-12">
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
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p 
              variants={textVariants}
              className="text-sm text-[#CC5500]"
            >
              Who we are?
            </motion.p>
            <div className="grid gap-y-4">
              <motion.h2 
                variants={textVariants}
                className="text-4xl font-bold text-white"
              >
                Let's tell you a little about us
              </motion.h2>
              <motion.p 
                variants={textVariants}
                className="text-[#a5a5ac] text-lg"
              >
                AfroPanda Esports is committed to developing esports in Nigeria,
                nurturing world-class talents, and promoting gaming as a
                respected profession.
              </motion.p>
              <motion.p 
                variants={textVariants}
                className="text-[#a5a5ac] mt-4"
              >
                Our mission is to create opportunities for Nigerian gamers to
                compete at the highest levels while building a sustainable
                esports ecosystem.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
