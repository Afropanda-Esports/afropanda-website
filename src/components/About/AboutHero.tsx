import { GlowingCorners } from "../Design";
import { motion } from "framer-motion";

export default function AboutHero() {
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
      id="about-hero"
      className="relative overflow-hidden bg-[#111017] py-28 md:py-36"
    >
      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(204,85,0,0.15),transparent_55%)]" />

      <GlowingCorners />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <motion.p
          variants={fadeInUp}
          className="text-xs font-semibold uppercase tracking-[0.28em] text-copy/60"
        >
          About AfroPanda
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="mt-4 text-5xl font-semibold leading-[1.08] tracking-tight text-copy md:text-6xl"
        >
          African esports, redrawn
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-2xl font-maitree text-lg leading-relaxed text-copy/75 md:text-xl"
        >
          From bedroom grinders to arena lights—we stitch together brackets,
          broadcasts, and belief so the scene here finally gets the ink it deserves.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-copy/70">
            Est. 2023 · Lagos, Nigeria
          </span>
          <span className="rounded-full border border-[#CC5500]/25 bg-[#CC5500]/[0.08] px-4 py-2 text-xs font-medium text-[#CC5500]/90">
            200+ Active Players
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-copy/70">
            10K+ Tournament Views
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
