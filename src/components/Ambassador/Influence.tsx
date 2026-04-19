import { motion } from "framer-motion";
import { level } from "../../assets/Ambassador";

export default function Influence() {
  return (
    <section className="border-t border-white/5 bg-[#191825] px-4 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 space-y-6 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-copy/60">
            Influence
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-copy md:text-4xl md:leading-tight">
            Loud where it counts—
            <span className="text-copy/45">quiet where it builds trust.</span>
          </h2>
          <p className="max-w-md font-maitree text-base leading-relaxed text-copy/75 md:text-lg">
            Ambassadors host energy: watch parties, threads, campus and Discord
            moments. You practice narrative, moderation, and rallying people
            around African esports without turning into a walking billboard.
          </p>
          <a
            href="#how-to-start"
            className="inline-flex text-sm text-[#CC5500] underline-offset-4 transition hover:underline"
          >
            See the checklist
          </a>
        </div>

        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
            <img
              src={level}
              alt="AfroPanda community and gaming"
              className="aspect-[5/4] w-full object-cover lg:aspect-auto lg:max-h-[440px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
