import { motion } from "framer-motion";

export default function AboutHero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--surface)] via-[var(--surface)] to-[var(--n50)] pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-orange/3 rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            About AfroPanda
          </p>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="heading-xl max-w-4xl mx-auto text-[var(--text-primary)]">
          African esports,{" "}
          <span className="text-brand-orange">redrawn</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600 font-body"
        >
          From bedroom grinders to arena lights we stitch together brackets,
          broadcasts, and belief so the scene here finally gets the ink it deserves.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-neutral-100 bg-[var(--surface)] px-5 py-2.5 text-xs font-medium text-neutral-600 shadow-soft">
            Est. 2023 · Lagos, Nigeria
          </span>
          <span className="rounded-full border border-brand-orange/20 bg-brand-orange/5 px-5 py-2.5 text-xs font-medium text-brand-orange">
            200+ Active Players
          </span>
          <span className="rounded-full border border-neutral-100 bg-[var(--surface)] px-5 py-2.5 text-xs font-medium text-neutral-600 shadow-soft">
            10K+ Tournament Views
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
