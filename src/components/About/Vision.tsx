import { motion } from "framer-motion";
import { win } from "../../assets";

export const Vision = () => {
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
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="space-y-6">
            <p className="text-sm text-[#CC5500]">Our Vision</p>
            <h2 className="text-4xl font-bold text-white">
              Building Tomorrow's Champions
            </h2>
            <p className="text-[#a5a5ac] font-maitree">
              We envision a future where African esports athletes compete at
              the highest international levels, supported by a robust ecosystem
              of tournaments, training facilities, and professional
              opportunities. Our goal is to make Africa a recognized force in
              global esports.
            </p>
            <motion.div className="bg-[#222035]/25 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-white mb-2">
                Join Our Journey
              </h3>
              <p className="text-[#a5a5ac] mb-4 font-maitree">
                Whether you're a player, fan, or potential partner, there's a
                place for you in the AfroPanda community.
              </p>
              <button className="bg-[#CC5500] text-white px-6 py-2 rounded-lg hover:bg-[#CC5500]/80 transition-colors duration-300">
                Get Involved
              </button>
            </motion.div>
          </div>
          

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6 },
              },
            }}
          >
            <img
              src={win}
              alt="AfroPanda Vision"
              className="rounded-lg w-full md:h-[600px] object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
