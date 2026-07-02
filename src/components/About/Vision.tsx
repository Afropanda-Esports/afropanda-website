import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { winning as win } from "../../assets/About";
import { ArrowRight } from "lucide-react";

export const Vision = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 md:py-32 bg-neutral-50">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <motion.div
          className="grid items-center gap-16 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                North Star
              </p>
            </div>
            <h2 className="heading-lg text-[var(--text-primary)]">
              Tomorrow&rsquo;s champs <span className="text-brand-orange">clock in today</span>
            </h2>
            <p className="text-base leading-8 text-neutral-600 font-body">
              Picture a lane where African players are not &ldquo;surprise&rdquo;
              imports they are the headline. We are wiring tournaments, practice
              rooms, and career doors so the grind here ships straight to
              international stages. The endgame is not applause; it is a continent
              the rest of the world has to respect on spawn.
            </p>

            <div className="rounded-2xl border border-neutral-100 bg-[var(--surface)] p-8 shadow-soft">
              <h3 className="heading-sm !text-2xl text-[var(--text-primary)]">Pull up to the next arc</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-500 font-body">
                Controller, camera, or contract if you want the scene louder,
                we have got a mic, a match, or a seat with your name penciled in.
              </p>
              <Link
                to="/internship"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3 text-sm font-semibold text-white transition-all hover:shadow-glow active:scale-[0.98]"
              >
                Claim a lane
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <img
              src={win}
              alt="AfroPanda Vision"
              className="w-full rounded-2xl object-cover ring-1 ring-neutral-100 shadow-soft md:h-[600px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
