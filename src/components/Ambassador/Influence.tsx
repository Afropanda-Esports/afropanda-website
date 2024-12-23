import { motion } from "framer-motion";
import { level } from "../../assets/Ambassador";

export default function Influence() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-28 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Level Up Your Influence in Gaming
            </h2>
            <p className="text-[#a5a5ac] font-maitree">
              Join the AfroPanda Ambassador Program and develop leadership,
              community engagement, and social media skills. Collaborate with
              passionate gamers while leaving your mark in the esports world.
            </p>

            <a
              href="#how-to-start"
              className="flex hover:underline leading-6 text-[#CC5500]  "
            >
              Learn more
            </a>
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
              src={level}
              alt="AfroPanda Influence"
              className="rounded-lg w-full md:h-[600px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
