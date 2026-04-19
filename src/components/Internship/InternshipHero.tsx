import { GlowingCorners } from "../Design";
import { motion } from "framer-motion";

const APPLY_MAIL =
  "mailto:info@afropanda.com?subject=AfroPanda%20internship%20application";

export default function InternshipHero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#191825] py-24 md:py-32">
      <div className="absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(to right, #CC5500 1px, transparent 1px),
              linear-gradient(to bottom, #CC5500 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
          }}
        />
      </div>
      <GlowingCorners />
      <motion.div
        className="relative z-10 mx-auto flex max-w-4xl flex-col gap-8 px-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.p
          variants={fadeInUp}
          className="text-xs font-semibold uppercase tracking-[0.28em] text-copy/70"
        >
          Internship · Hybrid
        </motion.p>
        <motion.div variants={fadeInUp} className="space-y-2">
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-copy md:text-6xl md:leading-[1.05]">
            Real brackets.
            <span className="block text-copy/40">Real output.</span>
          </h1>
        </motion.div>
        <motion.p
          variants={fadeInUp}
          className="max-w-xl font-maitree text-lg leading-relaxed text-copy/85 md:text-xl"
        >
          Work beside people who run tournaments, ship product, and grow
          communities—then walk away with proof, not just a title.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="mt-4 flex flex-wrap items-center gap-4 md:mt-6"
        >
          <a
            href={APPLY_MAIL}
            className="inline-flex items-center justify-center rounded-full bg-[#CC5500] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#CC5500]/25 ring-2 ring-[#CC5500]/70 ring-offset-2 ring-offset-[#191825] transition hover:bg-[#d96214] hover:ring-[#CC5500] hover:shadow-xl hover:shadow-[#CC5500]/30 active:scale-[0.98]"
          >
            Write us to apply
          </a>
          <a
            href="#internship-process"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-copy/85 backdrop-blur-sm transition hover:border-[#CC5500]/40 hover:text-[#CC5500]"
          >
            How selection works
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
