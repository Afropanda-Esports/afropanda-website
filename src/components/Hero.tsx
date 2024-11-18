import { motion } from 'framer-motion';
import DHeroBg from "../assets/DHeroBg.png";
import MHeroBg from "../assets/MHeroBg.png";

export default function Hero() {
  return (
    <section className="relative h-screen" id="hero">
      {/* Background Images */}
      <div className="absolute inset-0">
        <img
          src={DHeroBg}
          alt="Desktop Background"
          className="hidden md:block w-full h-full object-cover"
        />
        <img
          src={MHeroBg}
          alt="Mobile Background"
          className="block md:hidden w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-3xl space-y-6">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm text-[#CC5500]"
            >
              Join the Winning Esports Team
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Step into the World of{" "}
              </motion.span>
              <motion.span className="relative inline-block">
                <motion.span
                  className="relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  AfroPanda
                </motion.span>
                <motion.span
                  className="absolute inset-0 bg-[#CC5500] -z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
                  style={{ originX: 0 }}
                />
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {" "}Esports
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-lg md:text-xl mb-8 text-gray-200"
            >
              AfroPanda Esports is where talent meets opportunity on the world stage.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="space-x-4 flex flex-wrap gap-4"
            >
              <a href="#events">
                <button
                  className="bg-[#CC5500] text-white  
                  py-3 px-6 rounded transition duration-300 ease-in-out transform
                  hover:scale-105"
                >
                  Explore Events
                </button>
              </a>
            </motion.div>
          </div>
          {/* Animated scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white"
          >
            <svg
              className="w-6 h-6"
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
        </div>
      </div>
    </section>
  );
}
