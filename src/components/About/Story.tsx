import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { stats } from "../../constant";


export const Story = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionHeader="Our Story"
          subSectionHeader="The Journey"
          headerDescription="From humble beginnings to becoming one of  Africa's premier esports organization"
        />
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div className="space-y-6" variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-white">
              Founded with a Vision
            </h3>
            <p className="text-[#a5a5ac]">
              AfroPanda Esports was established in 2023 with a clear mission: to
              transform the African gaming landscape into a thriving esports
              ecosystem. What began as a small community of passionate gamers
              has evolved into the country's leading esports organization.
            </p>
            <p className="text-[#a5a5ac]">
              Our journey has been marked by groundbreaking tournaments,
              strategic partnerships, and a commitment to developing local
              talent. We've created opportunities for African gamers to compete
              at international levels while building a sustainable esports
              infrastructure.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-[#222035]/25 p-6 rounded-xl text-center"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.4 },
                  },
                }}
              >
                <div className="text-3xl font-bold text-[#CC5500] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
