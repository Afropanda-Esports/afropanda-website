import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const APPLY_MAIL =
  "mailto:admin@afropandaesports.com?subject=AfroPanda%20ambassador%20program";

export default function AmbassadorHero() {
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
          <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Ambassador Program
          </p>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="heading-xl max-w-4xl mx-auto text-[var(--text-primary)]">
          Be the voice{" "}
          <span className="text-neutral-400">before the crowd arrives.</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600 font-body"
        >
          Carry AfroPanda into your servers and group chats earn perks, sharpen
          leadership, and help the scene you already love feel inevitable.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={APPLY_MAIL}
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-glow active:scale-[0.98]"
          >
            Pitch us your fit
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#how-to-start"
            className="inline-flex items-center rounded-full border border-neutral-100 bg-[var(--surface)] px-7 py-3.5 text-sm font-medium text-neutral-600 transition-all hover:border-brand-orange/40 hover:text-brand-orange shadow-soft"
          >
            What we look for
          </a>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-neutral-100 bg-[var(--surface)] px-5 py-2.5 text-xs font-medium text-neutral-600 shadow-soft">
            200+ Active Players
          </span>
          <span className="rounded-full border border-brand-orange/20 bg-brand-orange/5 px-5 py-2.5 text-xs font-medium text-brand-orange">
            Perks & Gear
          </span>
          <span className="rounded-full border border-neutral-100 bg-[var(--surface)] px-5 py-2.5 text-xs font-medium text-neutral-600 shadow-soft">
            Community First
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
