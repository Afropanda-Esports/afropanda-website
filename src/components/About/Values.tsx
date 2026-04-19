import { motion } from "framer-motion"
import SectionHeader from "../SectionHeader"
import { Trophy, Target, Users, Star, Shield, Zap } from 'lucide-react';

 const values = [
  {
    icon: <Trophy />,
    title: "Aim skyward",
    description: "Mediocre isn’t in our vocabulary—every deck, stream, and stage gets the polish players can feel in their hands."
  },
  {
    icon: <Target />,
    title: "First through the wall",
    description: "We’d rather test a wild idea and learn fast than copy homework from scenes that don’t look like ours."
  },
  {
    icon: <Users />,
    title: "No one queues alone",
    description: "The lobby is sacred—new faces, old rivals, and everyone who just wants a fair shot at the next round."
  },
  {
    icon: <Star />,
    title: "Scout the spark",
    description: "The kid with weird hours and nastier flicks? That’s roster gold—we invest before the algorithm catches up."
  },
  {
    icon: <Shield />,
    title: "Call it straight",
    description: "No shadow brackets, no ghost rules—if we say it, we run it, and we own the receipts when we miss."
  },
  {
    icon: <Zap />,
    title: "Leave fingerprints",
    description: "When we pack up, the scene should feel different—louder pipelines, braver stories, more seats at the table."
  }
];


export const Values = () => {
    return (
        <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            sectionHeader="What we refuse to fake"
            subSectionHeader="Non-negotiables"
            headerDescription="The instincts we protect when deadlines press, hype spikes, and someone asks us to cut corners."
          />
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-[#222035]/25 p-6 rounded-xl hover:bg-[#CC5500]/10 transition-colors duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 }
                  }
                }}
              >
                <div className="text-copy mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-copy mb-2">{value.title}</h3>
                <p className="text-copy font-maitree">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    )
}