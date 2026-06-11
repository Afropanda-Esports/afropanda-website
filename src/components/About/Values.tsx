import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { Trophy, Target, Users, Star, Shield, Zap } from "lucide-react";

const values = [
  {
    icon: Trophy,
    title: "Aim skyward",
    description:
      "Mediocre isn't in our vocabulary—every deck, stream, and stage gets the polish players can feel in their hands.",
  },
  {
    icon: Target,
    title: "First through the wall",
    description:
      "We'd rather test a wild idea and learn fast than copy homework from scenes that don't look like ours.",
  },
  {
    icon: Users,
    title: "No one queues alone",
    description:
      "The lobby is sacred—new faces, old rivals, and everyone who just wants a fair shot at the next round.",
  },
  {
    icon: Star,
    title: "Scout the spark",
    description:
      "The kid with weird hours and nastier flicks? That's roster gold—we invest before the algorithm catches up.",
  },
  {
    icon: Shield,
    title: "Call it straight",
    description:
      "No shadow brackets, no ghost rules—if we say it, we run it, and we own the receipts when we miss.",
  },
  {
    icon: Zap,
    title: "Leave fingerprints",
    description:
      "When we pack up, the scene should feel different—louder pipelines, braver stories, more seats at the table.",
  },
];

export const Values = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionHeader="What we refuse to fake"
          subSectionHeader="Non-negotiables"
          headerDescription="The instincts we protect when deadlines press, hype spikes, and someone asks us to cut corners."
        />
        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-[#CC5500]/25 hover:bg-white/[0.05]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#CC5500]/25 bg-[#CC5500]/[0.12] transition duration-300 group-hover:border-[#CC5500]/50 group-hover:bg-[#CC5500]/20">
                  <Icon
                    className="h-5 w-5 text-[#CC5500]"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <h3 className="text-lg font-semibold text-copy">{value.title}</h3>
                <p className="font-maitree text-sm leading-relaxed text-copy/70">
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
