import { motion } from "framer-motion";
import { winning as win } from "../../assets/About";

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
            <p className="text-sm text-copy">North star</p>
            <h2 className="text-4xl font-bold text-copy">
              Tomorrow’s champs clock in today
            </h2>
            <p className="text-copy font-maitree">
              Picture a lane where African players aren’t “surprise” imports—they’re the headline.
              We’re wiring tournaments, practice rooms, and career doors so the grind here ships
              straight to international stages. The endgame isn’t applause; it’s a continent the
              rest of the world has to respect on spawn.
            </p>
            <motion.div className="bg-[#222035]/25 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-copy mb-2">
                Pull up to the next arc
              </h3>
              <p className="text-copy mb-4 font-maitree">
                Controller, camera, or contract—if you want the scene louder, we’ve got a mic,
                a match, or a seat with your name penciled in.
              </p>
              <button className="bg-[#CC5500] text-white px-6 py-2 rounded-lg hover:bg-[#CC5500]/80 transition-colors duration-300">
                Claim a lane
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
