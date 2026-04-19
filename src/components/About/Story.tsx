import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { stats } from "../../constant";


export const Story = () => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionHeader="The plot so far"
          subSectionHeader="How we walked here"
          headerDescription="From side chats and scrim codes to stages that echo—this is the messy, stubborn climb of a crew that bet on Africa first."
        />
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div className="space-y-6" variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-copy">
              Started in the lobby
            </h3>
            <p className="text-copy font-maitree">
              AfroPanda clocked in during 2023 with one stubborn idea: stop treating African
              gaming like a footnote. What began as late-night queues and “one more game” energy
              grew into brackets, crews, and a flag we actually want to plant on the global map.
            </p>
            <p className="text-copy font-maitree">
              Since then it’s been loud weekends, handshake deals that mean something, and a
              steady drumbeat for players who never got the invite they deserved. We’re still
              building the rails—tournaments, partners, pathways—so the next clutch moment happens
              here first, not on someone else’s highlight reel.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-[#222035]/25 p-6 rounded-xl text-center"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.4 },
                  },
                }}
              >
                <div className="text-3xl font-bold text-copy mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-copy">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
