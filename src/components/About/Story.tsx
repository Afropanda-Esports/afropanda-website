import { motion } from "framer-motion";
import { stats } from "../../constant";

export const Story = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 md:py-32 bg-neutral-50">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              How We Walked Here
            </p>
          </div>
          <h2 className="heading-lg text-[var(--text-primary)]">The Plot So Far</h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600 font-body">
            From side chats and scrim codes to stages that echo this is the messy,
            stubborn climb of a crew that bet on Africa first.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div className="space-y-6" variants={fadeInUp}>
            <h3 className="heading-md text-[var(--text-primary)]">Started in the lobby</h3>
            <p className="text-base leading-7 text-neutral-600 font-body">
              AfroPanda clocked in during 2023 with one stubborn idea: stop treating African
              gaming like a footnote. What began as late-night queues and &ldquo;one more game&rdquo; energy
              grew into brackets, crews, and a flag we actually want to plant on the global map.
            </p>
            <p className="text-base leading-7 text-neutral-500 font-body">
              Since then it has been loud weekends, handshake deals that mean something, and a
              steady drumbeat for players who never got the invite they deserved. We are still
              building the rails tournaments, partners, pathways so the next clutch moment happens
              here first, not on someone else&rsquo;s highlight reel.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="rounded-2xl border border-neutral-100 bg-[var(--surface)] p-7 text-center shadow-soft"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
                }}
              >
                <div className="heading-sm !text-3xl text-[var(--text-primary)] mb-1">
                  {stat.number}
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400 font-body">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
