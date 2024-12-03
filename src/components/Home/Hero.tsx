// import { motion } from "framer-motion";
// import DHeroBg from "../../assets/DHeroBg.png";
// import MHeroBg from "../../assets/MHeroBg.png";

// const Hero = () => {
//   return (
//     <section className="relative h-screen overflow-hidden font-poppins" id="hero">
//       {/* Background Images */}
//       <div className="absolute inset-0">
//         <img
//           src={DHeroBg}
//           alt="Desktop Background"
//           className="hidden md:block w-full h-full object-cover opacity-70"
//         />
//         <img
//           src={MHeroBg}
//           alt="Mobile Background"
//           className="block md:hidden w-full h-full object-cover opacity-70"
//         />
//       </div>

//       <div className="absolute inset-0  opacity-50 animate-pulse" />

//       {/* Content */}
//       <div className="relative z-10 h-full">
//         <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
//           <div className="max-w-3xl space-y-6">
//             {/* Animated Tag Line */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="inline-block"
//             >
//               <span className="bg-[#CC5500] text-black px-3 py-1 text-sm font-mono tracking-wider before:content-['<'] after:content-['>']">
//                 JOIN THE ELITE SQUAD
//               </span>
//             </motion.div>

//             {/* Main Title */}
//             <motion.h1
//               className="text-4xl md:text-7xl font-bold mb-6 text-white relative font-gaming"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <motion.div className="flex flex-col gap-2">
//                 <motion.span
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                   className="text-gradient-animate"
//                 >
//                   Step into the World of
//                 </motion.span>
//                 <motion.div className="relative inline-block">
//                   <motion.span
//                     className="relative z-10 text-[#CC5500] drop-shadow-[0_0_10px_rgba(204,85,0,0.5)]"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.8, delay: 0.6 }}
//                   >
//                     AfroPanda
//                   </motion.span>
//                 </motion.div>
//                 <motion.span
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.8, delay: 1 }}
//                   className="text-gradient-animate"
//                 >
//                   Esports
//                 </motion.span>
//               </motion.div>
//             </motion.h1>

//             {/* Description */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 1.2 }}
//               className="text-lg md:text-xl mb-8 text-gray-300 font-light tracking-wide"
//             >
//               Where legends rise and champions are forged. Join the next
//               generation of elite gamers.
//             </motion.p>

//             {/* CTA Button */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 1.4 }}
//               className="space-x-4 flex flex-wrap gap-4"
//             >
//               <a href="#events">
//                 <button
//                   className="relative overflow-hidden group bg-[#CC5500] text-white 
//                     py-4 px-8 rounded transition duration-300 ease-in-out transform
//                     hover:scale-105 hover:shadow-[0_0_20px_rgba(204,85,0,0.5)]"
//                 >
//                   <span className="relative z-10 font-mono tracking-wider">
//                     EXPLORE EVENTS
//                   </span>
//                   <div
//                     className="absolute inset-0 bg-gradient-to-r from-[#CC5500] via-[#FF6B00] to-[#CC5500] 
//                     opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   />
//                 </button>
//               </a>
//             </motion.div>
//           </div>

//           {/* Animated scroll indicator */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 1.6 }}
//             className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//           >
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="text-[#CC5500]"
//             >
//               <svg
//                 className="w-8 h-8"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                 />
//               </svg>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { motion } from "framer-motion";
import DHeroBg from "../../assets/DHeroBg.png";
import MHeroBg from "../../assets/MHeroBg.png";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-[#0a0a1a] text-white" id="hero">
      {/* Pixelated Overlay */}
      {/* <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(204,85,0,0.1)_0%,rgba(10,10,26,0.8)_70%)]"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/png;base64,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')] opacity-10"></div>
      </div> */}

      {/* Background Images */}
      <div className="absolute inset-0">
        <img
          src={DHeroBg}
          alt="Desktop Background"
          className="hidden md:block w-full h-full object-cover opacity-30"
        />
        <img
          src={MHeroBg}
          alt="Mobile Background"
          className="block md:hidden w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-30 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-3xl space-y-6">
            {/* Game Status Tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            > 
              <span className="bg-[#CC5500] text-black px-3 py-1 text-sm font-mono tracking-wider 
                border-2 border-[#FF6B00] rounded-full
                before:content-['🎮'] after:content-['']">
                LOBBY READY
              </span>
            </motion.div>

            {/* Main Title with Glitch Effect */}
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
                  className="text-gradient-animate relative"
                >
                  <span className="absolute -left-2 -top-2 text-[#CC5500] opacity-50 blur-sm">Step into the World of</span>
                  Step into the World of
                </motion.span>
                <motion.div className="relative inline-block">
                  <motion.span
                    className="relative z-10 text-[#CC5500] drop-shadow-[0_0_20px_rgba(204,85,0,0.7)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    AfroPanda
                  </motion.span>
                </motion.div>
                {/* <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-gradient-animate relative"
                >
                  <span className="absolute -right-2 -bottom-2 text-[#FF6B00] opacity-50 blur-sm">Esports</span>
                  Esports
                </motion.span> */}
              </motion.div>
            </motion.h1>

            {/* Description with Gaming Flair */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-lg md:text-xl mb-8 text-gray-300 font-light tracking-wide 
              before:content-['> '] before:text-[#CC5500] before:mr-2 font-maitree"
            >
              Where legends rise and champions are forged. Join the next generation of elite gamers.
            </motion.p>

            {/* CTA Button with Game-like Hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="space-x-4 flex flex-wrap gap-4"
            >
              <a href="#events">
                <button
                  className="relative overflow-hidden group bg-[#CC5500] text-white 
                    py-4 px-8 rounded-lg transition duration-300 ease-in-out transform
                    hover:scale-105 hover:shadow-[0_0_30px_rgba(204,85,0,0.7)]
                    border-2 border-transparent hover:border-[#FF6B00]"
                >
                  <span className="relative z-10 font-mono tracking-wider uppercase">
                    ENTER ARENA
                  </span>
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#CC5500] via-[#FF6B00] to-[#CC5500] 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </button>
              </a>
            </motion.div>
          </div>

          {/* Animated Game Controller Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-[#CC5500]"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="w-10 h-10"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
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