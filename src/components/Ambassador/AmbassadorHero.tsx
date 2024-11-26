import { GlowingCorners } from "../Design";
import { motion } from "framer-motion";

export default function AmbassadorHero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <section
      id="album"
      className=" relative overflow-hidden py-20 bg-[#191825]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(to right, #CC5500 1px, transparent 1px),
                                 linear-gradient(to bottom, #CC5500 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <GlowingCorners />

      <motion.section
        className="relative h-[60vh] md:h-[40vh] flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* <div className="absolute inset-0 bg-[#CC5500]/5" /> */}
        <div className="relative z-10 text-center flex flex-col items-center space-y-4 max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white"
            variants={fadeInUp}
          >
            Become an AfroPanda Ambassador
          </motion.h1>
          <motion.p className="text-xl text-gray-300" variants={fadeInUp}>
            Level up your influence, earn rewards, and shape the future of
            African esports
          </motion.p>

          <button className="flex items-center justify-center px-4 py-2 text-white bg-[#CC5500] rounded-md">
            Apply Now
          </button>
        </div>
      </motion.section>
    </section>
  );
}
