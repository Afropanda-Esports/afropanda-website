import React from "react";
import SectionHeader from "../SectionHeader";
import { brand } from "../../assets";
import { DecorativeElement } from "../Design";
import { howToStart } from "../../constant";
import { motion } from "framer-motion";

const HowToStart: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <section className="relative py-20 overflow-hidden" id="how-to-start">
      <DecorativeElement />

      {/* Decorative Animated Borders */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 rotate-45 border-4 border-[#CC5500] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-48 h-48 rotate-12 border-4 border-[#CC5500] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader sectionHeader="All you need to become an Ambassador" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Ambassador Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6 },
              },
            }}
          >
            <img
              src={brand}
              alt="AfroPanda Internship"
              className="rounded-lg w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Ambassador Details */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <h2 className="text-3xl font-bold text-white">
              Level Up Your Influence in Gaming
            </h2>

            <motion.div variants={containerVariants} className="space-y-4 font-maitree">
              {howToStart.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <span className="w-3 h-3 bg-[#CC5500] rounded-full flex-shrink-0"></span>
                  <p className="text-gray-300">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6 },
                },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                flex items-center justify-center
                px-6 py-3
                text-white
                bg-[#CC5500]
                rounded-lg
                hover:bg-[#A64400]
                transition-colors
                duration-300
              "
            >
              Apply Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToStart;
