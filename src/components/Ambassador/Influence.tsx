import { motion } from "framer-motion";
import { level } from "../../assets/Ambassador";
import { ArrowRight } from "lucide-react";

export default function Influence() {
  return (
    <section className="bg-[var(--surface)] px-5 py-24 md:py-32">
      <div className="mx-auto grid max-w-8xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="order-2 space-y-8 lg:order-1">
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Influence
            </p>
          </div>
          <h2 className="heading-lg text-[var(--text-primary)]">
            Loud where it counts 
            <span className="text-neutral-300"> quiet where it builds trust.</span>
          </h2>
          <p className="max-w-md text-base leading-7 text-neutral-600 font-body">
            Ambassadors host energy: watch parties, threads, campus and Discord
            moments. You practice narrative, moderation, and rallying people
            around African esports without turning into a walking billboard.
          </p>
          <a
            href="#how-to-start"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition-all hover:gap-3"
          >
            See the checklist <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="overflow-hidden rounded-2xl ring-1 ring-neutral-100 shadow-soft">
            <img
              src={level}
              alt="AfroPanda community and gaming"
              className="aspect-[5/4] w-full object-cover lg:aspect-auto lg:max-h-[480px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
