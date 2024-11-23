import { motion } from "framer-motion";
import DHeroBg from "../../assets/DHeroBg.png";
import MHeroBg from "../../assets/MHeroBg.png";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden" id="hero">
      {/* Background Images */}
      <div className="absolute inset-0">
        <img
          src={DHeroBg}
          alt="Desktop Background"
          className="hidden md:block w-full h-full object-cover opacity-70"
        />
        <img
          src={MHeroBg}
          alt="Mobile Background"
          className="block md:hidden w-full h-full object-cover opacity-70"
        />
      </div>

      <div className="absolute inset-0  opacity-50 animate-pulse" />

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-3xl space-y-6">
            {/* Animated Tag Line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="bg-[#CC5500] text-black px-3 py-1 text-sm font-mono tracking-wider before:content-['<'] after:content-['>']">
                JOIN THE ELITE SQUAD
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-4xl md:text-7xl font-bold mb-6 text-white relative font-gaming"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div className="flex flex-col gap-2">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-gradient-animate"
                >
                  Step into the World of
                </motion.span>
                <motion.div className="relative inline-block">
                  <motion.span
                    className="relative z-10 text-[#CC5500] drop-shadow-[0_0_10px_rgba(204,85,0,0.5)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    AfroPanda
                  </motion.span>
                </motion.div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-gradient-animate"
                >
                  Esports
                </motion.span>
              </motion.div>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-lg md:text-xl mb-8 text-gray-300 font-light tracking-wide"
            >
              Where legends rise and champions are forged. Join the next
              generation of elite gamers.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="space-x-4 flex flex-wrap gap-4"
            >
              <a href="#events">
                <button
                  className="relative overflow-hidden group bg-[#CC5500] text-white 
                    py-4 px-8 rounded transition duration-300 ease-in-out transform
                    hover:scale-105 hover:shadow-[0_0_20px_rgba(204,85,0,0.5)]"
                >
                  <span className="relative z-10 font-mono tracking-wider">
                    EXPLORE EVENTS
                  </span>
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#CC5500] via-[#FF6B00] to-[#CC5500] 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </button>
              </a>
            </motion.div>
          </div>

          {/* Animated scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-[#CC5500]"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
