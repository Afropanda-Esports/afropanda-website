import { motion } from "framer-motion";
import { Trophy, Target, Users, Star, Shield, Zap } from "lucide-react";

const values = [
  {
    icon: Trophy,
    title: "Aim skyward",
    description:
      "Mediocre is not in our vocabulary every deck, stream, and stage gets the polish players can feel in their hands.",
  },
  {
    icon: Target,
    title: "First through the wall",
    description:
      "We would rather test a wild idea and learn fast than copy homework from scenes that do not look like ours.",
  },
  {
    icon: Users,
    title: "No one queues alone",
    description:
      "The lobby is sacred new faces, old rivals, and everyone who just wants a fair shot at the next round.",
  },
  {
    icon: Star,
    title: "Scout the spark",
    description:
      "The kid with weird hours and nastier flicks? That is roster gold we invest before the algorithm catches up.",
  },
  {
    icon: Shield,
    title: "Call it straight",
    description:
      "No shadow brackets, no ghost rules if we say it, we run it, and we own the receipts when we miss.",
  },
  {
    icon: Zap,
    title: "Leave fingerprints",
    description:
      "When we pack up, the scene should feel different louder pipelines, braver stories, more seats at the table.",
  },
];

export const Values = () => {
  return (
    <section className="py-24 md:py-32 bg-[var(--surface)]">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Non-negotiables
            </p>
          </div>
          <h2 className="heading-lg text-[var(--text-primary)]">What We Refuse to Fake</h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600 font-body">
            The instincts we protect when deadlines press, hype spikes, and someone
            asks us to cut corners.
          </p>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                className="group rounded-2xl border border-neutral-100 bg-[var(--surface)] p-8 shadow-soft transition-all duration-300 hover:shadow-card hover:border-brand-orange/20"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-brand-orange/20 bg-brand-orange/5 text-brand-orange transition-all duration-300 group-hover:bg-brand-orange/10 group-hover:scale-110 group-hover:shadow-glow">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="heading-sm !text-xl text-[var(--text-primary)]">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-500 font-body">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
