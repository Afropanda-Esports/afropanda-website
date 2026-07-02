import React from "react";
import { start } from "../../assets/Ambassador";
import { howToStart } from "../../constant";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const APPLY_MAIL =
  "mailto:admin@afropandaesports.com?subject=AfroPanda%20ambassador%20program";

const HowToStart: React.FC = () => {
  return (
    <section className="bg-[var(--surface-alt)] py-24 md:py-32" id="how-to-start">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--n50)] px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Fit Check
            </p>
          </div>
          <h2 className="heading-lg text-[var(--text-primary)]">You might already qualify</h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-secondary)] font-body">
            No vanity metrics required just curiosity, care for community, and
            willingness to show up when we run something worth sharing.
          </p>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl ring-1 ring-[var(--border)]"
          >
            <img
              src={start}
              alt="AfroPanda ambassador community"
              className="aspect-[4/5] w-full object-cover md:max-h-[520px] md:min-h-[400px]"
            />
          </motion.div>

          <div className="flex flex-col">
            <div className="divide-y divide-[var(--border)]">
              {howToStart.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex gap-5 py-7 first:pt-0"
                >
                  <span className="mt-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-orange/20 text-xs font-bold text-brand-orange">
                    {item.id}
                  </span>
                  <p className="text-base leading-7 text-[var(--text-secondary)] font-body">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="pt-12 md:pt-16">
              <motion.a
                href={APPLY_MAIL}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-glow active:scale-[0.98]"
              >
                Apply now
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToStart;
