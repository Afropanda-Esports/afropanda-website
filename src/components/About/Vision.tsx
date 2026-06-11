import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { winning as win } from "../../assets/About";

export const Vision = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid items-center gap-12 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-copy/60">
              North star
            </p>
            <h2 className="text-4xl font-semibold text-copy">
              Tomorrow's champs clock in today
            </h2>
            <p className="font-maitree text-base leading-8 text-copy/80">
              Picture a lane where African players aren't "surprise" imports—they're the headline.
              We're wiring tournaments, practice rooms, and career doors so the grind here ships
              straight to international stages. The endgame isn't applause; it's a continent the
              rest of the world has to respect on spawn.
            </p>
            <motion.div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold text-copy">
                Pull up to the next arc
              </h3>
              <p className="mt-2 font-maitree text-sm leading-7 text-copy/70">
                Controller, camera, or contract—if you want the scene louder, we've got a mic,
                a match, or a seat with your name penciled in.
              </p>
              <Link
                to="/internship"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-[#CC5500] px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#CC5500]/25 transition hover:bg-[#d96214]"
              >
                Claim a lane
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6 },
              },
            }}
          >
            <img
              src={win}
              alt="AfroPanda Vision"
              className="w-full rounded-2xl object-cover ring-1 ring-white/10 md:h-[600px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
