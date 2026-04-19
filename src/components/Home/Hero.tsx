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
//               className="text-4xl md:text-7xl font-bold mb-6 text-copy relative font-gaming"
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
//                   className="relative overflow-hidden group bg-[#CC5500] text-copy 
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

const Hero = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden border-b border-white/10 bg-[#111017] text-copy"
      id="hero"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(204,85,0,0.2),_transparent_24%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.08),_transparent_18%),linear-gradient(180deg,_#16131f_0%,_#111017_52%,_#0c0b11_100%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute left-[8%] top-[18%] h-28 w-28 rounded-full border border-[#CC5500]/20 bg-[#CC5500]/8 blur-2xl" />
      <div className="absolute bottom-[16%] right-[10%] h-40 w-40 rounded-full border border-white/10 bg-white/[0.03] blur-3xl" />

      <div className="relative z-30 flex min-h-screen items-center">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 pt-24 pb-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="max-w-3xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex"
            >
              <span className="rounded-full border border-[#CC5500]/40 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-copy backdrop-blur-sm">
                AfroPanda Esports
              </span>
            </motion.div>

            <motion.h1
              className="max-w-2xl text-5xl font-semibold leading-[0.95] text-copy md:text-7xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
            >
              Competitive gaming, community, and culture built for Africa.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
              className="max-w-2xl text-base leading-8 text-copy md:text-xl"
            >
              We create tournaments, talent pathways, and standout gaming experiences
              for players, fans, and partners who want a cleaner, more serious
              esports platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <a href="#events">
                <button className="rounded-full bg-[#CC5500] px-7 py-3.5 text-sm font-semibold tracking-[0.16em] text-white transition duration-300 hover:bg-[#da6c28]">
                  VIEW EVENTS
                </button>
              </a>
              <a
                href="#album"
                className="rounded-full border border-white/18 px-7 py-3.5 text-sm font-semibold tracking-[0.16em] text-copy transition duration-300 hover:border-[#CC5500]/50 hover:text-[#CC5500]"
              >
                SEE COMMUNITY
              </a>
            </motion.div>
          </div>

          <div className="relative hidden min-h-[280px] lg:flex lg:items-center lg:justify-center">
            <div
              className="pointer-events-none absolute rounded-full opacity-80"
              style={{
                width: "360px",
                height: "360px",
                background: "radial-gradient(circle, rgba(200,75,17,0.1) 0%, transparent 72%)",
              }}
              aria-hidden
            />
            {/* Panda head only (favicon); muted like a background mark */}
            <div className="relative flex h-72 w-72 items-center justify-center">
              <img
                src="/Afrofavicon.svg"
                alt=""
                aria-hidden
                className="relative z-[1] h-[min(17rem,42vw)] w-[min(17rem,42vw)] max-h-72 max-w-72 scale-110 object-contain opacity-[0.22] [filter:brightness(0.35)_contrast(0.95)_saturate(0.65)]"
              />
              <div
                className="pointer-events-none absolute inset-[-4%] z-[2] rounded-[42%] bg-[#111017]/60 mix-blend-multiply"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-b from-[#111017]/50 via-[#111017]/25 to-[#111017]/70]"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
